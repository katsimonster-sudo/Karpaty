---
name: instagram-composio-posting
description: Automatically publish photos, videos, and captions to Instagram directly via Composio MCP API without using a web browser.
---

# Direct Instagram Publishing Skill (Composio API)

<EXTREMELY-IMPORTANT>
ALWAYS use this API method to post to Instagram. NEVER use browser subagents or web browser automation for Instagram posts unless explicitly requested.
</EXTREMELY-IMPORTANT>

## Method Overview
This skill executes direct Instagram publishing using Composio's MCP tools via requests from Python.

## Configuration & Credentials
- **Python Executable:** `C:\Users\katsimon.vv\AppData\Local\hermes\hermes-agent\venv\Scripts\python.exe`
- **Composio API Endpoint:** `https://connect.composio.dev/mcp`
- **Consumer API Key:** `ck_7so45aOGP8QPGdV8SrDL`
- **Instagram User ID:** `29674939608761121`

## Workflow Checklist

1. **Upload Local Media to Public URL:**
   Upload the processed photo/video to a temporary public host (e.g. `catbox.moe`):
   ```python
   import requests
   with open(image_path, 'rb') as f:
       r = requests.post('https://catbox.moe/user/api.php', data={'reqtype': 'fileupload'}, files={'fileToUpload': f})
   image_url = r.text.strip()
   ```

2. **Create Instagram Media Container:**
   Send request to Composio API slug `INSTAGRAM_POST_IG_USER_MEDIA`:
   ```python
   headers = {
       'x-consumer-api-key': 'ck_7so45aOGP8QPGdV8SrDL',
       'Mcp-Session-Id': 'instagram-post-session',
       'Content-Type': 'application/json',
       'Accept': 'application/json, text/event-stream'
   }
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
                       'ig_user_id': '29674939608761121',
                       'image_url': image_url,
                       'caption': caption
                   }
               }]
           }
       }
   }
   ```
   Extract `creation_id` from the SSE JSON response line starting with `data:`.

3. **Publish Media Container:**
   Send publish request using slug `INSTAGRAM_POST_IG_USER_MEDIA_PUBLISH`:
   ```python
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
                       'ig_user_id': '29674939608761121',
                       'creation_id': creation_id
                   }
               }]
           }
       }
   }
   ```

4. **Verify Response:**
   Confirm `successful: true` and report Post ID to the user.
