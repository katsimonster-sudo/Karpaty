import os, json, sys, requests

GENERATED_POSTS_PATH = r"C:\Users\katsimon.vv\.gemini\antigravity-ide\brain\689b2720-1e9e-4255-aff0-45d09d0462ee\scratch\generated_trips_posts.json"

def load_posts():
    with open(GENERATED_POSTS_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def publish_trip_by_index(trip_idx, style="story"):
    posts = load_posts()
    if trip_idx < 1 or trip_idx > len(posts):
        print(f"Invalid index {trip_idx}. Available range: 1..{len(posts)}")
        return False
    
    p = posts[trip_idx - 1]
    caption = p["caption_story"] if style == "story" else p["caption_stats"]
    image_url = p["coverImage"]
    title = p["title"]

    print(f"\nPublishing Trip #{trip_idx}: {title}")
    print(f"Style: {style}")
    print(f"Image: {image_url}")
    print(f"Link: {p['link']}\n")

    key = 'ck_7so45aOGP8QPGdV8SrDL'
    ig_user_id = '29674939608761121'
    headers = {
        'x-consumer-api-key': key,
        'Mcp-Session-Id': 'manager-publish-session',
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream'
    }

    # Step 1: Media container
    payload_container = {
        'jsonrpc': '2.0',
        'id': 300,
        'method': 'tools/call',
        'params': {
            'name': 'COMPOSIO_MULTI_EXECUTE_TOOL',
            'arguments': {
                'tools': [{
                    'tool_slug': 'INSTAGRAM_POST_IG_USER_MEDIA',
                    'arguments': {
                        'ig_user_id': ig_user_id,
                        'image_url': image_url,
                        'caption': caption
                    }
                }]
            }
        }
    }

    r1 = requests.post('https://connect.composio.dev/mcp', headers=headers, json=payload_container, stream=True)
    full_text1 = ""
    for line in r1.iter_lines():
        if line:
            dec = line.decode('utf-8')
            if dec.startswith('data:'):
                full_text1 += dec[5:].strip()

    creation_id = None
    if full_text1:
        res1 = json.loads(full_text1)
        text1 = res1.get('result', {}).get('content', [{}])[0].get('text', '')
        if text1:
            data1 = json.loads(text1)
            results1 = data1.get('data', {}).get('results', [{}])
            creation_id = results1[0].get('response', {}).get('data', {}).get('id')

    if not creation_id:
        print("Failed to create container:", full_text1)
        return False

    # Step 2: Publish container
    payload_publish = {
        'jsonrpc': '2.0',
        'id': 301,
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

    r2 = requests.post('https://connect.composio.dev/mcp', headers=headers, json=payload_publish, stream=True)
    full_text2 = ""
    for line in r2.iter_lines():
        if line:
            dec = line.decode('utf-8')
            if dec.startswith('data:'):
                full_text2 += dec[5:].strip()

    if full_text2:
        res2 = json.loads(full_text2)
        text2 = res2.get('result', {}).get('content', [{}])[0].get('text', '')
        if text2:
            data2 = json.loads(text2)
            results2 = data2.get('data', {}).get('results', [{}])
            post_id = results2[0].get('response', {}).get('data', {}).get('id')
            print(f"SUCCESS! Published Post ID: {post_id}")
            return True

    return False

if __name__ == "__main__":
    posts = load_posts()
    if len(sys.argv) > 1:
        idx = int(sys.argv[1])
        style = sys.argv[2] if len(sys.argv) > 2 else "story"
        publish_trip_by_index(idx, style)
    else:
        print("=== DOZHITY.SPACE INSTAGRAM AUTO POSTER ===")
        print(f"Loaded {len(posts)} prepared posts from trips-data.js:\n")
        for p in posts:
            print(f" [{p['num']}] {p['title']} ({p['region']}) -> {p['link']}")
        print("\nUsage: python instagram_post_manager.py <trip_number> [story|stats]")
