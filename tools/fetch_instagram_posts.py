import os
import json
import sys
import requests

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

headers = {
    'x-consumer-api-key': 'ck_7so45aOGP8QPGdV8SrDL',
    'Mcp-Session-Id': 'check-ig-media-session',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/event-stream'
}

payload = {
    'jsonrpc': '2.0',
    'id': 200,
    'method': 'tools/call',
    'params': {
        'name': 'COMPOSIO_MULTI_EXECUTE_TOOL',
        'arguments': {
            'tools': [{
                'tool_slug': 'INSTAGRAM_GET_USER_MEDIA',
                'arguments': {
                    'ig_user_id': '29674939608761121'
                }
            }]
        }
    }
}

r = requests.post('https://connect.composio.dev/mcp', headers=headers, json=payload, stream=True)
full_text = ''
for line in r.iter_lines():
    if line:
        dec = line.decode('utf-8')
        if dec.startswith('data:'):
            full_text += dec[5:].strip()

if full_text:
    data = json.loads(full_text)
    # Parse inner text
    content_list = data.get('result', {}).get('content', [])
    for c in content_list:
        if c.get('type') == 'text':
            parsed = json.loads(c.get('text', '{}'))
            print(json.dumps(parsed, indent=2, ensure_ascii=False))
            with open(r'r:\Скани\2022\2022_05_04\my site\tools\instagram_media_dump.json', 'w', encoding='utf-8') as f:
                json.dump(parsed, f, indent=2, ensure_ascii=False)
