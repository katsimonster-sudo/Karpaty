import os
import json
import sys
import requests

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

IMAGE_PATH = r"r:\Скани\2022\2022_05_04\my site\images\march-2026\highlight-02.jpg"

CAPTION = """⛰️ Оновлення маркування та стан джерел на хребті Ґорґан (сезон 2026)

Карпати щороку змінюються, і Ґорґани — один із найсуворіших та водночас найкрасивіших хребтів України. Ділимося свіжою перевіреною інформацією перед вашим виходом:

💧 Джерела питної води:
• Під Сивулею (полонина Рущина): джерело активне, дебет стабільний.
• Під Хом'яком: струмок тече повноцінно, вода чиста та холодна.
• Район Попаді / Коренця: у спекотні тижні рівень падає, рекомендуємо мати запас від 1.5–2 л на людину.

🥾 Стан стежок та маркування:
• Оновлено червоне та зелене маркування на ключових розвилках.
• Ґорґанські цекоти (курумник): під час дощу або туману каміння стає надзвичайно слизьким — обов'язково трекінгові палиці та черевики з чіпким протектором (Vibram).

📍 Детальні GPS-треки, карта джерел та звіт про похід уже на нашому сайті:
👉 dozhity.space/community.html

Зберігайте в закладки, діліться з друзями та безпечних вам стежок! 🏔️✨

#карпати #ґорґани #похідвгори #сивуля #хомʼяк #трекінг #карпатськігори #гориукраїни #дожитидофініша #carpathians #ukrainehiking"""

def main():
    print("=" * 60)
    print("ПУБЛІКАЦІЯ НОВИНИ В INSTAGRAM (@dozhity.space)")
    print("=" * 60)

    # 1. Завантаження фото на catbox.moe
    print("\n[1/3] Завантаження фото на публічний хостинг...")
    if not os.path.exists(IMAGE_PATH):
        print(f"Помилка: Файл {IMAGE_PATH} не знайдено!")
        sys.exit(1)

    with open(IMAGE_PATH, 'rb') as f:
        r_upload = requests.post('https://catbox.moe/user/api.php', data={'reqtype': 'fileupload'}, files={'fileToUpload': f})
    
    if r_upload.status_code != 200 or not r_upload.text.startswith('http'):
        print(f"Помилка завантаження фото: {r_upload.text}")
        sys.exit(1)
    
    image_url = r_upload.text.strip()
    print(f"✅ Фото завантажено: {image_url}")

    # 2. Створення медіа контейнера через Composio API
    print("\n[2/3] Створення Instagram Media Container через Composio API...")
    headers = {
        'x-consumer-api-key': 'ck_7so45aOGP8QPGdV8SrDL',
        'Mcp-Session-Id': 'gorgany-news-publish-session',
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream'
    }

    ig_user_id = '29674939608761121'

    payload_container = {
        'jsonrpc': '2.0',
        'id': 100,
        'method': 'tools/call',
        'params': {
            'name': 'COMPOSIO_MULTI_EXECUTE_TOOL',
            'arguments': {
                'tools': [{
                    'tool_slug': 'INSTAGRAM_POST_IG_USER_MEDIA',
                    'arguments': {
                        'ig_user_id': ig_user_id,
                        'image_url': image_url,
                        'caption': CAPTION
                    }
                }]
            }
        }
    }

    r_cont = requests.post('https://connect.composio.dev/mcp', headers=headers, json=payload_container, stream=True)
    full_text_cont = ""
    for line in r_cont.iter_lines():
        if line:
            dec = line.decode('utf-8')
            if dec.startswith('data:'):
                full_text_cont += dec[5:].strip()

    creation_id = None
    if full_text_cont:
        try:
            res_cont = json.loads(full_text_cont)
            text_cont = res_cont.get('result', {}).get('content', [{}])[0].get('text', '')
            if text_cont:
                data_cont = json.loads(text_cont)
                results = data_cont.get('data', {}).get('results', [{}])
                creation_id = results[0].get('response', {}).get('data', {}).get('id')
        except Exception as e:
            print(f"Помилка парсингу відповіді створення: {e}")

    if not creation_id:
        print(f"Помилка створення контейнера: {full_text_cont}")
        sys.exit(1)

    print(f"✅ Контейнер створено, Creation ID: {creation_id}")

    # 3. Публікація медіа контейнера
    print("\n[3/3] Публікація медіа контейнера...")
    payload_publish = {
        'jsonrpc': '2.0',
        'id': 101,
        'method': 'tools/call',
        'params': {
            'name': 'COMPOSIO_MULTI_EXECUTE_TOOL',
            'arguments': {
                'tools': [{
                    'tool_slug': 'INSTAGRAM_POST_IG_USER_MEDIA_PUBLISH',
                    'arguments': {
                        'ig_user_id': ig_user_id,
                        'creation_id': creation_id
                    }
                }]
            }
        }
    }

    r_pub = requests.post('https://connect.composio.dev/mcp', headers=headers, json=payload_publish, stream=True)
    full_text_pub = ""
    for line in r_pub.iter_lines():
        if line:
            dec = line.decode('utf-8')
            if dec.startswith('data:'):
                full_text_pub += dec[5:].strip()

    post_id = None
    success = False
    if full_text_pub:
        try:
            res_pub = json.loads(full_text_pub)
            text_pub = res_pub.get('result', {}).get('content', [{}])[0].get('text', '')
            if text_pub:
                data_pub = json.loads(text_pub)
                results_pub = data_pub.get('data', {}).get('results', [{}])
                post_id = results_pub[0].get('response', {}).get('data', {}).get('id')
                success = data_pub.get('successful', False)
        except Exception as e:
            print(f"Помилка парсингу відповіді публікації: {e}")

    print("\n" + "=" * 60)
    if success or post_id:
        print(f"🎉 УСПІШНО ОПУБЛІКОВАНО В INSTAGRAM!")
        print(f"Post ID: {post_id}")
        print("Профіль: https://www.instagram.com/dozhity.space/")
    else:
        print(f"Відповідь: {full_text_pub}")
    print("=" * 60)

if __name__ == '__main__':
    main()
