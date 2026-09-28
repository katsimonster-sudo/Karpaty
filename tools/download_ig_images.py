import json
import os
import requests

with open(r'r:\Скани\2022\2022_05_04\my site\tools\instagram_media_dump.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

results = d['data']['results'][0]['response']['data']['data']

os.makedirs(r'r:\Скани\2022\2022_05_04\my site\images\social', exist_ok=True)

for item in results:
    shortcode = item.get('shortcode')
    media_type = item.get('media_type')
    img_url = item.get('thumbnail_url') if media_type == 'VIDEO' else item.get('media_url')
    
    if img_url:
        target_path = rf'r:\Скани\2022\2022_05_04\my site\images\social\ig_{shortcode}.jpg'
        if not os.path.exists(target_path):
            try:
                r = requests.get(img_url, timeout=15)
                if r.status_code == 200:
                    with open(target_path, 'wb') as out_f:
                        out_f.write(r.content)
                    print(f"Downloaded {shortcode} -> {target_path}")
            except Exception as e:
                print(f"Error downloading {shortcode}: {e}")
