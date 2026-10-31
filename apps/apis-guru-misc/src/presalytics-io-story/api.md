<h1 id="story">Story v0.3.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API is the main entry point for creating, editing and publishing analytics throught the Presalytics API

Base URLs:

* <a href="https://api.apis.guru/story">https://api.apis.guru/story</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="story-story">Story</h1>

Story

## Story: Get List of User Stories

<a id="opIdstory_get"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

Returns a list of stories for this user identifie via the access token presentated to the api

<h3 id="story-get-list-of-user-stories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_relationships|query|boolean|false|Indicate whether the returned object should include child relationships|
|include_outline|query|boolean|false|Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collaborators": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "active": true,
        "email": "string",
        "lead_id": 0,
        "name": "string",
        "permission_type": {
          "created_at": "1970-01-01T00:00:00Z",
          "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "can_add_collaborators": true,
          "can_delete": true,
          "can_edit": true,
          "can_view": true,
          "name": "string"
        },
        "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "is_public": true,
    "ooxml_documents": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "delete_target_on_story_delete": true,
        "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "outline": "string",
    "outline_history": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "outline": "string",
        "revision_number": 0,
        "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "revision": 0,
    "title": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-get-list-of-user-stories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of stories for this user|Inline|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<h3 id="story-get-list-of-user-stories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[story](#schemastory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Upload

<a id="opIdstory_post"></a>

> Code samples

```bash
curl https://example.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "outline": "string"
  }'
```

`POST /`

Upload new story to presalytics api

> Body parameter

```json
{
  "outline": "string"
}
```

<h3 id="story-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_outline|query|boolean|false|Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.|
|body|body|[outline](#schemaoutline)|true|A story outline json object|
|» outline|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborators": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "is_public": true,
  "ooxml_documents": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "delete_target_on_story_delete": true,
      "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "outline": "string",
  "outline_history": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outline": "string",
      "revision_number": 0,
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "revision": 0,
  "title": "string"
}
```

> 415 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success responses with story object|[story](#schemastory)|
|415|Unsupported Media Type|Unsupported Media Type|[problem_detail](#schemaproblem_detail)|
|422|Unprocessable Entity|Unprocessable Entity|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Upload a File

<a id="opIdstory_post_file"></a>

> Code samples

```bash
curl https://example.com/file \
  -X POST \
  -H 'Accept: application/json' \
  -F 'file=["string"]'
```

`POST /file`

Upload new story to presalytics api via an Open Office Xml file

> Body parameter

```yaml
file:
  - string
```

<h3 id="story-upload-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_outline|query|boolean|false|Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.|
|body|body|object|true|A pptx or xlsx file upload or story outline json object|
|» file|body|[string(binary)]|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborators": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "is_public": true,
  "ooxml_documents": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "delete_target_on_story_delete": true,
      "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "outline": "string",
  "outline_history": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outline": "string",
      "revision_number": 0,
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "revision": 0,
  "title": "string"
}
```

> 415 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-upload-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success responses with story object|[story](#schemastory)|
|415|Unsupported Media Type|Unsupported Media Type|[problem_detail](#schemaproblem_detail)|
|422|Unprocessable Entity|Unprocessable Entity|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Upload a File (base64)

<a id="opIdstory_post_file_json"></a>

> Code samples

```bash
curl https://example.com/file/json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content_length": 0,
    "file": "string",
    "file_name": "string",
    "mimetype": "string"
  }'
```

`POST /file/json`

Upload new story to presalytics api via an Open Office Xml file

> Body parameter

```json
{
  "content_length": 0,
  "file": "string",
  "file_name": "string",
  "mimetype": "string"
}
```

<h3 id="story-upload-a-file-base64-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_outline|query|boolean|false|Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.|
|body|body|[file_upload](#schemafile_upload)|false|A json-formatted object that includes a base64 encoded file (file encoded utf-8)|
|» content_length|body|integer|false|none|
|» file|body|string|false|none|
|» file_name|body|string|false|none|
|» mimetype|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborators": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "is_public": true,
  "ooxml_documents": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "delete_target_on_story_delete": true,
      "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "outline": "string",
  "outline_history": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outline": "string",
      "revision_number": 0,
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "revision": 0,
  "title": "string"
}
```

> 415 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-upload-a-file-base64-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success responses with story object|[story](#schemastory)|
|415|Unsupported Media Type|Unsupported Media Type|[problem_detail](#schemaproblem_detail)|
|422|Unprocessable Entity|Unprocessable Entity|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Get by Id

<a id="opIdstory_id_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /{id}`

Returns story metadata, inlcuding json object with story outline

<h3 id="story-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|include_relationships|query|boolean|false|Indicate whether the returned object should include child relationships|
|include_outline|query|boolean|false|Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.|
|full|query|boolean|false|Pull a story object with associated collaborator user, permission, and session data(faster if cached from prior api call)|
|refresh_cache|query|boolean|false|Force the api reload the `Story full` object|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborators": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "is_public": true,
  "ooxml_documents": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "delete_target_on_story_delete": true,
      "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "outline": "string",
  "outline_history": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outline": "string",
      "revision_number": 0,
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "revision": 0,
  "title": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success responses with story object|[story](#schemastory)|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Modify

<a id="opIdstory_id_put"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collaborators": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "active": true,
        "email": "string",
        "lead_id": 0,
        "name": "string",
        "permission_type": {
          "created_at": "1970-01-01T00:00:00Z",
          "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "can_add_collaborators": true,
          "can_delete": true,
          "can_edit": true,
          "can_view": true,
          "name": "string"
        },
        "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "is_public": true,
    "ooxml_documents": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "delete_target_on_story_delete": true,
        "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "outline": "string",
    "outline_history": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "outline": "string",
        "revision_number": 0,
        "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "revision": 0,
    "title": "string"
  }'
```

`PUT /{id}`

Update story metadata, including story outline

> Body parameter

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborators": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "is_public": true,
  "ooxml_documents": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "delete_target_on_story_delete": true,
      "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "outline": "string",
  "outline_history": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outline": "string",
      "revision_number": 0,
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "revision": 0,
  "title": "string"
}
```

<h3 id="story-modify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|include_outline|query|boolean|false|Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.|
|body|body|[story](#schemastory)|true|The updated story object|
|» created_at|body|string(date-time)|false|none|
|» created_by|body|string(uuid)|false|none|
|» id|body|string(uuid)|false|none|
|» updated_at|body|string(date-time)|false|none|
|» updated_by|body|string(uuid)|false|none|
|» collaborators|body|[[story_collaborator](#schemastory_collaborator)]|false|none|
|» is_public|body|boolean|false|none|
|» ooxml_documents|body|[[ooxml_document](#schemaooxml_document)]|false|none|
|» outline|body|string \| null|false|none|
|» outline_history|body|[[story_outline_history](#schemastory_outline_history)]|false|none|
|» revision|body|integer(Int32)|false|none|
|» title|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborators": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "is_public": true,
  "ooxml_documents": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "delete_target_on_story_delete": true,
      "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "outline": "string",
  "outline_history": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outline": "string",
      "revision_number": 0,
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "revision": 0,
  "title": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-modify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success responses with story object|[story](#schemastory)|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Delete by Id

<a id="opIdstory_id_delete"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /{id}`

Remove a story and dependant data.

<h3 id="story-delete-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-delete-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: View Analytics

<a id="opIdstory_id_analytics"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/analytics \
  -H 'Accept: application/json'
```

`GET /{id}/analytics`

returns an html document containing session and event metrics for the story

<h3 id="story-view-analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-view-analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An html document containing session analytics for the story|Inline|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|An html document containing a login button|Inline|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Upload a File To Existing Story

<a id="opIdstory_id_file_post"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/file \
  -X POST \
  -H 'Accept: application/json' \
  -F 'file=["string"]'
```

`POST /{id}/file`

Upload a file to an existing story

> Body parameter

```yaml
file:
  - string
```

<h3 id="story-upload-a-file-to-existing-story-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|replace_existing|query|boolean|false|Indicates whether a put or post method would replace the existing contents|
|obsolete_id|query|string(uuid)|false|A primary key pointing to an obsolete item in the story. Item type is context-dependent|
|include_outline|query|boolean|false|Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.|
|body|body|object|true|A pptx or xlsx file upload or story outline json object|
|» file|body|[string(binary)]|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborators": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "is_public": true,
  "ooxml_documents": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "delete_target_on_story_delete": true,
      "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "outline": "string",
  "outline_history": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outline": "string",
      "revision_number": 0,
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "revision": 0,
  "title": "string"
}
```

> 415 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-upload-a-file-to-existing-story-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success responses with story object|[story](#schemastory)|
|415|Unsupported Media Type|Unsupported Media Type|[problem_detail](#schemaproblem_detail)|
|422|Unprocessable Entity|Unprocessable Entity|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Download Updated File

<a id="opIdstory_id_file_ooxmlautomationid_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/file/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /{id}/file/{ooxml_automation_id}`

Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)

<h3 id="story-download-updated-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|ooxml_automation_id|path|string(uuid)|true|the id of the ooxml_automation object|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-download-updated-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The latest versiono of the story, in its orginal file format|Inline|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Delete Subdocument

<a id="opIdstory_id_file_ooxmlautomationid_delete"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/file/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /{id}/file/{ooxml_automation_id}`

Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)

<h3 id="story-delete-subdocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|ooxml_automation_id|path|string(uuid)|true|the id of the ooxml_automation object|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-delete-subdocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Get Story Outline

<a id="opIdstory_id_outline_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/outline \
  -H 'Accept: application/json'
```

`GET /{id}/outline`

Returns Story's outline

<h3 id="story-get-story-outline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 200 Response

```json
"string"
```

> 202 Response

```json
{
  "status": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-get-story-outline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stringified Story outline|Inline|
|202|Accepted|Accepted|[status](#schemastatus)|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|
|410|Gone|Gone|None|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Post Story Outline

<a id="opIdstory_id_outline_post"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/outline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"string"'
```

`POST /{id}/outline`

Update a story outline.

> Body parameter

```json
"string"
```

<h3 id="story-post-story-outline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|body|body|string|true|A story outline object|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-post-story-outline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Public Link to Story Reveal.js Document

<a id="opIdstory_id_public"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/public/ \
  -H 'Accept: application/json'
```

`GET /{id}/public/`

returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True

<h3 id="story-public-link-to-story-revealjs-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-public-link-to-story-revealjs-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An html document containing a reveal.js represenation of the story|Inline|
|302|Found|Not Found redirect|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Get Story at Reveal.js Document

<a id="opIdstory_id_reveal"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/reveal \
  -H 'Accept: application/json'
```

`GET /{id}/reveal`

returns an html document containing a reveal.js epresentation of the story

<h3 id="story-get-story-at-revealjs-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-get-story-at-revealjs-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An html document containing a reveal.js represenation of the story|Inline|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|An html document containing a login button|Inline|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story: Get Story Status

<a id="opIdstory_id_status_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/status \
  -H 'Accept: application/json'
```

`GET /{id}/status`

Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)

<h3 id="story-get-story-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-get-story-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accepted|[status](#schemastatus)|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-story-collaborators">Story Collaborators</h1>

Story Collaborators

## Story Collaborators: List

<a id="opIdstory_id_collaborators_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/collaborators \
  -H 'Accept: application/json'
```

`GET /{id}/collaborators`

Gets a list users that can read or edit this story

<h3 id="story-collaborators-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "active": true,
    "email": "string",
    "lead_id": 0,
    "name": "string",
    "permission_type": {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "can_add_collaborators": true,
      "can_delete": true,
      "can_edit": true,
      "can_view": true,
      "name": "string"
    },
    "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-collaborators-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of collaborators on the story|Inline|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<h3 id="story-collaborators-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[story_collaborator](#schemastory_collaborator)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Story Collaborators: Add New User

<a id="opIdstory_id_collaborators_post"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/collaborators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "collaborator_type": "string",
    "user_email": "string",
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /{id}/collaborators`

Add a colloborator to this story

> Body parameter

```json
{
  "collaborator_type": "string",
  "user_email": "string",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="story-collaborators-add-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|body|body|[add_new_collaborator_request](#schemaadd_new_collaborator_request)|true|Collaborator user id and permission type|
|» collaborator_type|body|string|false|none|
|» user_email|body|string|false|none|
|» user_id|body|string(uuid)|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active": true,
  "email": "string",
  "lead_id": 0,
  "name": "string",
  "permission_type": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "can_add_collaborators": true,
    "can_delete": true,
    "can_edit": true,
    "can_view": true,
    "name": "string"
  },
  "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-collaborators-add-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collaborator data|[story_collaborator](#schemastory_collaborator)|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story Collaborators: Edit Inactive User Permission

<a id="opIdstory_id_collaborators_inactive_post"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/collaborators/inactive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "string",
    "lead_id": 0,
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /{id}/collaborators/inactive`

Edit story permissions for inactive users.  Requires admin rights.

> Body parameter

```json
{
  "action": "string",
  "lead_id": 0,
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="story-collaborators-edit-inactive-user-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|body|body|[modify_inactive_collaborator](#schemamodify_inactive_collaborator)|true|Collaborator user id and permission type|
|» action|body|string|false|none|
|» lead_id|body|integer(int32)|false|none|
|» user_id|body|string(uuid)|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active": true,
  "email": "string",
  "lead_id": 0,
  "name": "string",
  "permission_type": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "can_add_collaborators": true,
    "can_delete": true,
    "can_edit": true,
    "can_view": true,
    "name": "string"
  },
  "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-collaborators-edit-inactive-user-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collaborator data|[story_collaborator](#schemastory_collaborator)|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story Collaborators: Access Permissions

<a id="opIdstory_id_collaborators_userid_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/collaborators/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /{id}/collaborators/{story_collaborator_userid}`

Data to help you understand the access rights of a particular collaborator on this story

<h3 id="story-collaborators-access-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|story_collaborator_userid|path|string(uuid)|true|The presalytics userid (NOT the Id of the story_collaborator object)|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active": true,
  "email": "string",
  "lead_id": 0,
  "name": "string",
  "permission_type": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "can_add_collaborators": true,
    "can_delete": true,
    "can_edit": true,
    "can_view": true,
    "name": "string"
  },
  "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-collaborators-access-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collaborator data|[story_collaborator](#schemastory_collaborator)|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story Collaborators: Edit Access Rights

<a id="opIdstory_id_collaborators_userid_put"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/collaborators/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "active": true,
    "email": "string",
    "lead_id": 0,
    "name": "string",
    "permission_type": {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "can_add_collaborators": true,
      "can_delete": true,
      "can_edit": true,
      "can_view": true,
      "name": "string"
    },
    "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`PUT /{id}/collaborators/{story_collaborator_userid}`

Modify a user's access right to this story (e.g., grant edit permissions)

> Body parameter

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active": true,
  "email": "string",
  "lead_id": 0,
  "name": "string",
  "permission_type": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "can_add_collaborators": true,
    "can_delete": true,
    "can_edit": true,
    "can_view": true,
    "name": "string"
  },
  "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="story-collaborators-edit-access-rights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|story_collaborator_userid|path|string(uuid)|true|The presalytics userid (NOT the Id of the story_collaborator object)|
|body|body|[story_collaborator](#schemastory_collaborator)|true|Collaborator user id (presalytics userid) and permission type|
|» created_at|body|string(date-time)|false|none|
|» created_by|body|string(uuid)|false|none|
|» id|body|string(uuid)|false|none|
|» updated_at|body|string(date-time)|false|none|
|» updated_by|body|string(uuid)|false|none|
|» active|body|boolean \| null|false|none|
|» email|body|string|false|none|
|» lead_id|body|integer(int32) \| null|false|none|
|» name|body|string|false|none|
|» permission_type|body|[permission_type](#schemapermission_type)|false|A permission type that can be applied to story collaborator|
|» permission_type_id|body|string(uuid)|false|none|
|» story_id|body|string(uuid)|false|none|
|» user_id|body|string(uuid)|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active": true,
  "email": "string",
  "lead_id": 0,
  "name": "string",
  "permission_type": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "can_add_collaborators": true,
    "can_delete": true,
    "can_edit": true,
    "can_view": true,
    "name": "string"
  },
  "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-collaborators-edit-access-rights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collaborator data|[story_collaborator](#schemastory_collaborator)|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Story Collaborators: Remove User

<a id="opIdstory_id_collaborators_userid_delete"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/collaborators/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /{id}/collaborators/{story_collaborator_userid}`

Remove a collaborator from this story

<h3 id="story-collaborators-remove-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|story_collaborator_userid|path|string(uuid)|true|The presalytics userid (NOT the Id of the story_collaborator object)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-collaborators-remove-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-permissions">Permissions</h1>

Permissions and Authorization

## Permissions: List Permission Types

<a id="opIdstory_permission_types_get"></a>

> Code samples

```bash
curl https://example.com/permission_types \
  -H 'Accept: application/json'
```

`GET /permission_types`

Returns a list of possible user permission types

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "can_add_collaborators": true,
    "can_delete": true,
    "can_edit": true,
    "can_view": true,
    "name": "string"
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="permissions-list-permission-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of all possible permission types|Inline|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<h3 id="permissions-list-permission-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[permission_type](#schemapermission_type)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Permissions: Story Authorization for a User

<a id="opIdstory_id_collaborators_userid_permissiontype_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/collaborators/authorize/497f6eca-6276-4993-bfeb-53cbbbba6f08/string \
  -H 'Accept: application/json'
```

`GET /{id}/collaborators/authorize/{story_collaborator_userid}/{permissiontype}`

Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden

<h3 id="permissions-story-authorization-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|story_collaborator_userid|path|string(uuid)|true|The presalytics userid (NOT the Id of the story_collaborator object)|
|permissiontype|path|string|true|the type of permission requested.  can be a permission_type object name (e.g., owner, editor, create, viewer, admin) or a permission type field (e.g., can_edit, can_view, can_add_collaborators, can_delete)|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="permissions-story-authorization-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-cache">Cache</h1>

## Cache: Store Subdocument

<a id="opIdcache_post"></a>

> Code samples

```bash
curl https://example.com/cache \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "current_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "nonce": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "subdocument": "string"
  }'
```

`POST /cache`

An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.

> Body parameter

```json
{
  "current_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "nonce": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subdocument": "string"
}
```

<h3 id="cache-store-subdocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[cache_post_request](#schemacache_post_request)|true|parameters to identify an update a collaborator across multiple stories|
|» current_user_id|body|string(uuid)|false|none|
|» nonce|body|string(uuid)|false|none|
|» subdocument|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="cache-store-subdocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Cache: Get Subdocument

<a id="opIdcache_nonce_get"></a>

> Code samples

```bash
curl https://example.com/cache/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /cache/{nonce}`

An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)

<h3 id="cache-get-subdocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nonce|path|string(uuid)|true|A one-time use token for retieving items in the users cache|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="cache-get-subdocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A cached html subdocument (typically loaded via iframe)|Inline|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-restricted">Restricted</h1>

## Collborators: Bulk Update (Admin Only)

<a id="opIdcollaborators_post"></a>

> Code samples

```bash
curl https://example.com/collaborators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "active": true,
    "lead_id": 0,
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /collaborators`

Allows for bulk updates on collaborator metadata.  Restricted to internal admins

> Body parameter

```json
{
  "active": true,
  "lead_id": 0,
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="collborators-bulk-update-admin-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[collaborator_bulk_update_request](#schemacollaborator_bulk_update_request)|true|parameters to identify an update a collaborator across multiple stories|
|» active|body|boolean|false|none|
|» lead_id|body|integer(int32)|false|none|
|» user_id|body|string(uuid)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "can_add_collaborators": true,
    "can_delete": true,
    "can_edit": true,
    "can_view": true,
    "name": "string"
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="collborators-bulk-update-admin-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of all possible permission types|Inline|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<h3 id="collborators-bulk-update-admin-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[permission_type](#schemapermission_type)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-default">Default</h1>

## Environment: Get

<a id="opIdget_environment"></a>

> Code samples

```bash
curl https://example.com/environment/ \
  -H 'Accept: application/json'
```

`GET /environment/`

pass rendering metadata to the client-side scripts

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="environment-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Specification: No tags

<a id="opIdspec_no_tags"></a>

> Code samples

```bash
curl https://example.com/no_tags_spec \
  -H 'Accept: application/json'
```

`GET /no_tags_spec`

json-formatted version of this spec with the tags removed to help with codegen processes

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="specification-no-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-schemas">Schemas</h1>

## Story Outline Schema

<a id="opIdstory_outline_schema"></a>

> Code samples

```bash
curl https://example.com/outline-schema/string/story-outline.json \
  -H 'Accept: application/json'
```

`GET /outline-schema/{schema_version}/story-outline.json`

Json Schema for validating Story Outline objects

<h3 id="story-outline-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_version|path|string|true|The semanitic version of a schema (e.g. '0.3.1')|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="story-outline-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-sessions">Sessions</h1>

## Sessions: Get

<a id="opIdsession_id_get"></a>

> Code samples

```bash
curl https://example.com/sessions/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /sessions/{session_id}`

Get session metadata

<h3 id="sessions-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string(uuid)|true|The primary key for a view session|
|include_relationships|query|boolean|false|Indicate whether the returned object should include child relationships|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborator": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "active": true,
    "email": "string",
    "lead_id": 0,
    "name": "string",
    "permission_type": {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "can_add_collaborators": true,
      "can_delete": true,
      "can_edit": true,
      "can_view": true,
      "name": "string"
    },
    "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "collaborator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "host": "string",
  "outline_revision": 0,
  "views": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active_msecs": 0,
      "additional": "string",
      "end_time": "1970-01-01T00:00:00Z",
      "page_number": 0,
      "session_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "start_time": "1970-01-01T00:00:00Z",
      "total_msecs": 0
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="sessions-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A session object|[session](#schemasession)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Sessions: Delete by Id

<a id="opIdsession_id_delete"></a>

> Code samples

```bash
curl https://example.com/sessions/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /sessions/{session_id}`

Remove a session and dependant data.

<h3 id="sessions-delete-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string(uuid)|true|The primary key for a view session|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="sessions-delete-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Sessions: List Story Sessions

<a id="opIdstory_id_sessions_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/sessions \
  -H 'Accept: application/json'
```

`GET /{id}/sessions`

Get a list of sessions asscoaited with this story

<h3 id="sessions-list-story-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|include_relationships|query|boolean|false|Indicate whether the returned object should include child relationships|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "collaborator": {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "collaborator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "host": "string",
    "outline_revision": 0,
    "views": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "active_msecs": 0,
        "additional": "string",
        "end_time": "1970-01-01T00:00:00Z",
        "page_number": 0,
        "session_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "start_time": "1970-01-01T00:00:00Z",
        "total_msecs": 0
      }
    ]
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="sessions-list-story-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of session objects|Inline|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<h3 id="sessions-list-story-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[session](#schemasession)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Sessions: Create a Session

<a id="opIdstory_id_session_post"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "collaboratorUserId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "host": "string"
  }'
```

`POST /{id}/sessions`

Create a new session

> Body parameter

```json
{
  "collaboratorUserId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "host": "string"
}
```

<h3 id="sessions-create-a-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|body|body|[create_session_request](#schemacreate_session_request)|true|Collaborator user id and permission type|
|» collaboratorUserId|body|string(uuid)|false|none|
|» host|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborator": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "active": true,
    "email": "string",
    "lead_id": 0,
    "name": "string",
    "permission_type": {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "can_add_collaborators": true,
      "can_delete": true,
      "can_edit": true,
      "can_view": true,
      "name": "string"
    },
    "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "collaborator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "host": "string",
  "outline_revision": 0,
  "views": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active_msecs": 0,
      "additional": "string",
      "end_time": "1970-01-01T00:00:00Z",
      "page_number": 0,
      "session_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "start_time": "1970-01-01T00:00:00Z",
      "total_msecs": 0
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="sessions-create-a-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A new session object|[session](#schemasession)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-views">Views</h1>

## Views: List Session Views

<a id="opIdsessions_id_views_get"></a>

> Code samples

```bash
curl https://example.com/sessions/497f6eca-6276-4993-bfeb-53cbbbba6f08/views \
  -H 'Accept: application/json'
```

`GET /sessions/{session_id}/views`

Get data for all views in a session

<h3 id="views-list-session-views-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string(uuid)|true|The primary key for a view session|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "active_msecs": 0,
    "additional": "string",
    "end_time": "1970-01-01T00:00:00Z",
    "page_number": 0,
    "session_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "start_time": "1970-01-01T00:00:00Z",
    "total_msecs": 0
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="views-list-session-views-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of session views|Inline|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<h3 id="views-list-session-views-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[view](#schemaview)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Views: Create A Session View

<a id="opIdsessions_id_views_post"></a>

> Code samples

```bash
curl https://example.com/sessions/497f6eca-6276-4993-bfeb-53cbbbba6f08/views \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "activeMSecs": 0,
    "additional": "string",
    "endTime": "1970-01-01T00:00:00Z",
    "pageNumber": 0,
    "startTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /sessions/{session_id}/views`

Create a page view object for a viewing session

> Body parameter

```json
{
  "activeMSecs": 0,
  "additional": "string",
  "endTime": "1970-01-01T00:00:00Z",
  "pageNumber": 0,
  "startTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="views-create-a-session-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string(uuid)|true|The primary key for a view session|
|body|body|object|true|Collaborator user id and permission type|
|» activeMSecs|body|integer|false|none|
|» additional|body|string|false|none|
|» endTime|body|string(date-time)|true|none|
|» pageNumber|body|integer|true|none|
|» startTime|body|string(date-time)|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active_msecs": 0,
  "additional": "string",
  "end_time": "1970-01-01T00:00:00Z",
  "page_number": 0,
  "session_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "start_time": "1970-01-01T00:00:00Z",
  "total_msecs": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="views-create-a-session-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A new view object|[view](#schemaview)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Views: Get View

<a id="opIdviews_id_get"></a>

> Code samples

```bash
curl https://example.com/views/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /views/{view_id}`

Get view meta data

<h3 id="views-get-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|view_id|path|string(uuid)|true|The primary key for a page view within a session|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active_msecs": 0,
  "additional": "string",
  "end_time": "1970-01-01T00:00:00Z",
  "page_number": 0,
  "session_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "start_time": "1970-01-01T00:00:00Z",
  "total_msecs": 0
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="views-get-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of session views|[view](#schemaview)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|403|Forbidden|Forbidden|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

## Views: Delete by Id

<a id="opIdviews_id_delete"></a>

> Code samples

```bash
curl https://example.com/views/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /views/{view_id}`

Remove a view and dependant data.

<h3 id="views-delete-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|view_id|path|string(uuid)|true|The primary key for a page view within a session|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="views-delete-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-events">Events</h1>

## Events: List Events

<a id="opIdstory_id_events_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/events \
  -H 'Accept: application/json'
```

`GET /{id}/events`

Get a list of Events available to users of this story

<h3 id="events-list-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "attributes": "string",
    "chat_prompt": "string",
    "conversation_id": "string",
    "dom_selectors": "string",
    "is_chat_hidden": true,
    "is_notify_enabled": true,
    "name": "string"
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="events-list-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Array of events|Inline|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|

<h3 id="events-list-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[event](#schemaevent)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Events: Manage Events

<a id="opIdstory_id_events_post"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "create",
    "action_params": {},
    "name": "string"
  }'
```

`POST /{id}/events`

Add a message to the Story's conversation

> Body parameter

```json
{
  "action": "create",
  "action_params": {},
  "name": "string"
}
```

<h3 id="events-manage-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|body|body|[manage_event](#schemamanage_event)|true|Collaborator user id and permission type|
|» action|body|string|false|none|
|» action_params|body|object|false|none|
|» name|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|create|
|» action|fire|
|» action|change|
|» action|delete|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="events-manage-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A repsonse to the requested action|Inline|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="story-conversation">Conversation</h1>

## Conversation: List Conversation Messages

<a id="opIdstory_id_messages_get"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/messages \
  -H 'Accept: application/json'
```

`GET /{id}/messages`

Get a list of messages that have been send in this story

<h3 id="conversation-list-conversation-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|

> Example responses

> 200 Response

```json
[
  {
    "body": "string",
    "id": "string",
    "remote": true,
    "timestamp": "1970-01-01T00:00:00Z",
    "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userName": "string"
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="conversation-list-conversation-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Array of conversation messages|Inline|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|

<h3 id="conversation-list-conversation-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[message](#schemamessage)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Conversation: Send a Message

<a id="opIdstory_id_messages_post"></a>

> Code samples

```bash
curl https://example.com/497f6eca-6276-4993-bfeb-53cbbbba6f08/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"string"'
```

`POST /{id}/messages`

Add a message to the Story's conversation

> Body parameter

```json
"string"
```

<h3 id="conversation-send-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the id from the story object|
|body|body|string|true|The message text|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="conversation-send-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[problem_detail](#schemaproblem_detail)|
|401|Unauthorized|Unauthorized|[problem_detail](#schemaproblem_detail)|
|404|Not Found|Not found|[problem_detail](#schemaproblem_detail)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_add_new_collaborator_request">add_new_collaborator_request</h2>
<!-- backwards compatibility -->
<a id="schemaadd_new_collaborator_request"></a>
<a id="schema_add_new_collaborator_request"></a>
<a id="tocSadd_new_collaborator_request"></a>
<a id="tocsadd_new_collaborator_request"></a>

```json
{
  "collaborator_type": "string",
  "user_email": "string",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

required subset of collaborator data to get a permission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collaborator_type|string|false|none|none|
|user_email|string|false|none|none|
|user_id|string(uuid)|false|none|none|

<h2 id="tocS_base_model">base_model</h2>
<!-- backwards compatibility -->
<a id="schemabase_model"></a>
<a id="schema_base_model"></a>
<a id="tocSbase_model"></a>
<a id="tocsbase_model"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Base model for all types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|

<h2 id="tocS_cache_post_request">cache_post_request</h2>
<!-- backwards compatibility -->
<a id="schemacache_post_request"></a>
<a id="schema_cache_post_request"></a>
<a id="tocScache_post_request"></a>
<a id="tocscache_post_request"></a>

```json
{
  "current_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "nonce": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "subdocument": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_user_id|string(uuid)|false|none|none|
|nonce|string(uuid)|false|none|none|
|subdocument|string|false|none|none|

<h2 id="tocS_collaborator_bulk_update_request">collaborator_bulk_update_request</h2>
<!-- backwards compatibility -->
<a id="schemacollaborator_bulk_update_request"></a>
<a id="schema_collaborator_bulk_update_request"></a>
<a id="tocScollaborator_bulk_update_request"></a>
<a id="tocscollaborator_bulk_update_request"></a>

```json
{
  "active": true,
  "lead_id": 0,
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

allows for bulk updating of user_ids and active status based on a lead id or user_id

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|lead_id|integer(int32)|false|none|none|
|user_id|string(uuid)|false|none|none|

<h2 id="tocS_create_session_request">create_session_request</h2>
<!-- backwards compatibility -->
<a id="schemacreate_session_request"></a>
<a id="schema_create_session_request"></a>
<a id="tocScreate_session_request"></a>
<a id="tocscreate_session_request"></a>

```json
{
  "collaboratorUserId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "host": "string"
}
```

Request body for creating a session

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collaboratorUserId|string(uuid)|false|none|none|
|host|string|false|none|none|

<h2 id="tocS_event">event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "attributes": "string",
  "chat_prompt": "string",
  "conversation_id": "string",
  "dom_selectors": "string",
  "is_chat_hidden": true,
  "is_notify_enabled": true,
  "name": "string"
}
```

An Story Event object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|
|attributes|string|false|none|none|
|chat_prompt|string|false|none|none|
|conversation_id|string|false|none|none|
|dom_selectors|string|false|none|none|
|is_chat_hidden|boolean|false|none|none|
|is_notify_enabled|boolean|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_file_upload">file_upload</h2>
<!-- backwards compatibility -->
<a id="schemafile_upload"></a>
<a id="schema_file_upload"></a>
<a id="tocSfile_upload"></a>
<a id="tocsfile_upload"></a>

```json
{
  "content_length": 0,
  "file": "string",
  "file_name": "string",
  "mimetype": "string"
}
```

A Base64 encoded file object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_length|integer|false|none|none|
|file|string|false|none|none|
|file_name|string|false|none|none|
|mimetype|string|false|none|none|

<h2 id="tocS_manage_event">manage_event</h2>
<!-- backwards compatibility -->
<a id="schemamanage_event"></a>
<a id="schema_manage_event"></a>
<a id="tocSmanage_event"></a>
<a id="tocsmanage_event"></a>

```json
{
  "action": "create",
  "action_params": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|action_params|object|false|none|none|
|name|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|create|
|action|fire|
|action|change|
|action|delete|

<h2 id="tocS_message">message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "body": "string",
  "id": "string",
  "remote": true,
  "timestamp": "1970-01-01T00:00:00Z",
  "userId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userName": "string"
}
```

A conversation message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|id|string|false|none|none|
|remote|boolean|false|none|none|
|timestamp|string(date-time)|false|none|none|
|userId|string(uuid)|false|none|none|
|userName|string|false|none|none|

<h2 id="tocS_modify_inactive_collaborator">modify_inactive_collaborator</h2>
<!-- backwards compatibility -->
<a id="schemamodify_inactive_collaborator"></a>
<a id="schema_modify_inactive_collaborator"></a>
<a id="tocSmodify_inactive_collaborator"></a>
<a id="tocsmodify_inactive_collaborator"></a>

```json
{
  "action": "string",
  "lead_id": 0,
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Action can be either "delete" or "activate".  Either lead_id or user_id is required.  user_id takes precedence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|lead_id|integer(int32)|false|none|none|
|user_id|string(uuid)|false|none|none|

<h2 id="tocS_ooxml_document">ooxml_document</h2>
<!-- backwards compatibility -->
<a id="schemaooxml_document"></a>
<a id="schema_ooxml_document"></a>
<a id="tocSooxml_document"></a>
<a id="tocsooxml_document"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "delete_target_on_story_delete": true,
  "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

A reference to an Ooxml Automation Document from the Presalytics Ooxml Automation API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|
|delete_target_on_story_delete|boolean|false|none|none|
|ooxml_automation_id|string(uuid)|false|none|none|
|story_id|string(uuid)|false|none|none|

<h2 id="tocS_outline">outline</h2>
<!-- backwards compatibility -->
<a id="schemaoutline"></a>
<a id="schema_outline"></a>
<a id="tocSoutline"></a>
<a id="tocsoutline"></a>

```json
{
  "outline": "string"
}
```

story_outline (json object)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outline|string|false|none|none|

<h2 id="tocS_permission_type">permission_type</h2>
<!-- backwards compatibility -->
<a id="schemapermission_type"></a>
<a id="schema_permission_type"></a>
<a id="tocSpermission_type"></a>
<a id="tocspermission_type"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "can_add_collaborators": true,
  "can_delete": true,
  "can_edit": true,
  "can_view": true,
  "name": "string"
}
```

A permission type that can be applied to story collaborator

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|
|can_add_collaborators|boolean|false|none|none|
|can_delete|boolean|false|none|none|
|can_edit|boolean|false|none|none|
|can_view|boolean|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_problem_detail">problem_detail</h2>
<!-- backwards compatibility -->
<a id="schemaproblem_detail"></a>
<a id="schema_problem_detail"></a>
<a id="tocSproblem_detail"></a>
<a id="tocsproblem_detail"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

Error reponse model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer(int32)|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_session">session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborator": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "active": true,
    "email": "string",
    "lead_id": 0,
    "name": "string",
    "permission_type": {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "can_add_collaborators": true,
      "can_delete": true,
      "can_edit": true,
      "can_view": true,
      "name": "string"
    },
    "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "collaborator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "host": "string",
  "outline_revision": 0,
  "views": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active_msecs": 0,
      "additional": "string",
      "end_time": "1970-01-01T00:00:00Z",
      "page_number": 0,
      "session_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "start_time": "1970-01-01T00:00:00Z",
      "total_msecs": 0
    }
  ]
}
```

A user session with an open story

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|
|collaborator|[story_collaborator](#schemastory_collaborator)|false|none|Description of a user that can collaborate on a story|
|collaborator_id|string(uuid)|false|none|none|
|host|string|false|none|none|
|outline_revision|integer|false|none|none|
|views|[[view](#schemaview)]|false|none|none|

<h2 id="tocS_status">status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "status": "string"
}
```

Status response when returning 202s

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

<h2 id="tocS_story">story</h2>
<!-- backwards compatibility -->
<a id="schemastory"></a>
<a id="schema_story"></a>
<a id="tocSstory"></a>
<a id="tocsstory"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborators": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "active": true,
      "email": "string",
      "lead_id": 0,
      "name": "string",
      "permission_type": {
        "created_at": "1970-01-01T00:00:00Z",
        "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "can_add_collaborators": true,
        "can_delete": true,
        "can_edit": true,
        "can_view": true,
        "name": "string"
      },
      "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "is_public": true,
  "ooxml_documents": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "delete_target_on_story_delete": true,
      "ooxml_automation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "outline": "string",
  "outline_history": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outline": "string",
      "revision_number": 0,
      "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "revision": 0,
  "title": "string"
}
```

Model for story objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|
|collaborators|[[story_collaborator](#schemastory_collaborator)]|false|none|none|
|is_public|boolean|false|none|none|
|ooxml_documents|[[ooxml_document](#schemaooxml_document)]|false|none|none|
|outline|string \| null|false|none|none|
|outline_history|[[story_outline_history](#schemastory_outline_history)]|false|none|none|
|revision|integer(Int32)|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_story_collaborator">story_collaborator</h2>
<!-- backwards compatibility -->
<a id="schemastory_collaborator"></a>
<a id="schema_story_collaborator"></a>
<a id="tocSstory_collaborator"></a>
<a id="tocsstory_collaborator"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active": true,
  "email": "string",
  "lead_id": 0,
  "name": "string",
  "permission_type": {
    "created_at": "1970-01-01T00:00:00Z",
    "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "can_add_collaborators": true,
    "can_delete": true,
    "can_edit": true,
    "can_view": true,
    "name": "string"
  },
  "permission_type_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Description of a user that can collaborate on a story

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|
|active|boolean \| null|false|none|none|
|email|string|false|none|none|
|lead_id|integer(int32) \| null|false|none|none|
|name|string|false|none|none|
|permission_type|[permission_type](#schemapermission_type)|false|none|A permission type that can be applied to story collaborator|
|permission_type_id|string(uuid)|false|none|none|
|story_id|string(uuid)|false|none|none|
|user_id|string(uuid)|false|none|none|

<h2 id="tocS_story_outline_history">story_outline_history</h2>
<!-- backwards compatibility -->
<a id="schemastory_outline_history"></a>
<a id="schema_story_outline_history"></a>
<a id="tocSstory_outline_history"></a>
<a id="tocsstory_outline_history"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "collaborator_user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "outline": "string",
  "revision_number": 0,
  "story_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

A revision repository for story outlines

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|
|collaborator_user_id|string(uuid)|false|none|none|
|outline|string|false|none|none|
|revision_number|integer(Int32)|false|none|none|
|story_id|string(uuid)|false|none|none|

<h2 id="tocS_view">view</h2>
<!-- backwards compatibility -->
<a id="schemaview"></a>
<a id="schema_view"></a>
<a id="tocSview"></a>
<a id="tocsview"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "active_msecs": 0,
  "additional": "string",
  "end_time": "1970-01-01T00:00:00Z",
  "page_number": 0,
  "session_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "start_time": "1970-01-01T00:00:00Z",
  "total_msecs": 0
}
```

A Page view within a session-create

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|created_by|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|updated_by|string(uuid)|false|none|none|
|active_msecs|integer|false|none|none|
|additional|string|false|none|none|
|end_time|string(date-time)|false|none|none|
|page_number|integer|false|none|none|
|session_id|string(uuid)|false|none|none|
|start_time|string(date-time)|false|none|none|
|total_msecs|integer|false|none|none|
