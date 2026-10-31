<h1 id="contentgroove-api">ContentGroove API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Overview

The ContentGroove Developer API enables you to add the power of ContentGroove's video AI to your own applications and workflows.

Webhooks are a way for ContentGroove to send video information
to your application, to update your system and/or trigger other business processes.

You can use Webhooks and the Developer API separately or together.

# Getting Started with Webhooks

- Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com)
- Read "Using Webhooks" on the [API Reference page](https://developers.contentgroove.com/api_reference)
- Visit the [Webhooks page](https://app.contentgroove.com/webhook_subscriptions) and create a new webhook

# Using Webhooks

Webhooks, also known as callbacks, are a way for ContentGroove to notify your application as soon as possible after an event has occurred in ContentGroove.
For example after a media completes processing, ContentGroove can use a webhook to notify your application with information about the video: Suggested clips, transcription, and so on.
You can use the information sent to update your system and/or use the
webhook to trigger other business processes.

The webhook request is sent as an HTTP POST containing a payload of JSON-formatted data.
For the details of the payload format see the "CALLBACKS" sections below.

When your application receives the webhook request, it must respond with
a 200 HTTP status code (success).
If a 200 HTTP status code is not returned,
ContentGroove will assume that the webhook was not delivered and
will retry a limited number of times, using an exponential backoff algorithm.

ContentGroove makes a best effort to attempt to send the webhook at
least once.
Applications receiving webhooks must tolerate the
possibility of a single webhook payload being sent more than once
(idempotent behavior).
Applications receiving webhooks should tolerate the possibility that
a webhook could not be delivered
(for example your application was down when delivery was attempted).

# Getting Started with the Developer API

- Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com)
- Visit the [API Keys page](https://app.contentgroove.com/api_keys)
  - Create a new API Key then copy and save the value.
    > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️
- View all available endpoints, and try the API, on our [API Reference page](https://developers.contentgroove.com/api_reference)

# Using the Developer API

- Create a new media (video or audio) in ContentGroove
  - If the video or audio is available from a URL, you can create a media by providing the `source_url` parameter. ContentGroove will fetch the video or audio from the URL if possible.
  - Or, you can create a media from a video or audio file which you upload directly to ContentGroove (see File Uploading section below).
- After the new media is created, at first it will be in a "processing" state.
  Depending on the size and duration of the video or audio file, it will take some time for processing to complete.
  - You can use ContentGroove Webhooks to be notified immediately when processing has completed. (Details coming soon.)
  - You can also use the API to read the state of the media, to determine if the media has completed processing yet.
- After the media has completed processing, you can access all of these details about the media:
  - The media name and description
  - The transcription of spoken words
  - Topics and keywords which were discussed in the transcription
  - Suggested video clips are automatically created
- In addition to the automatically created video clips, you can create more video clips from the media

# Response Codes

The following is a comprehensive list of the status codes you may receive while using the ContentGroove API:

- 200 "Ok"
  - The request was valid
- 400 "Bad Request
  - This is returned when there was a problem parsing the JSON body of your request if you supplied the 'Content-Type': 'application/json' header, or if your request is missing the 'Content-Type' header altogether
- 401 "Unauthorized"
  - This is returned when you are attempting to perform an action on a resource that you are not authorized to do
- 402 "Payment Required"
  - This is returned when you are attempting to perform an action that would push your account above a usage limit. You can view your usage at: https://app.contentgroove.com/quota_usage
- 404 "Not Found"
  - This is returned when the resource you are trying to view does not exist
- 429 "Too Many Requests"
  - This is returned when you have performed too many requests within a given period of time
- 500 "Internal Server Error"
  - This is returned when your request was valid but there was a problem on our end

# File Uploading

- Step 1: Make a GET request to the direct uploads URL endpoint (/api/v1/direct_uploads) to receive an upload URL to upload the file to and an upload id.
- Step 2: Make a PUT request with the file as the body to the upload URL received in step 1. The response will have a 200 status with no body if the upload is successful.
  ```
  curl -T /path/to/file upload_url
  ```
- Step 3: After uploading the file to the upload URL, make a POST request to the create medias endpoint (/api/v1/medias), with the upload id and optionally a name and description for the new media.
  > At this time, file uploads are limited to 5gb per file.

# Allowed media types

Video:

- Supported: Most common video formats and codecs are supported.
- Recommended: mp4

Audio:

- Supported: aac, mp3, flac, ogg, wav, and wma
- Recommended: aac

# Authentication

You can use the API Key to authenticate your API requests using any of these methods. (Replace abc123 with your actual API Key.)

- Request header `Authorization: Bearer abc123`
- Request header `X-API-KEY: abc123`
- Query parameter `api_key=abc123`
  > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️

# Link to openapi.json spec

- https://api.contentgroove.com/api-docs/v1/openapi.json

Base URLs:

* <a href="https://api.contentgroove.com">https://api.contentgroove.com</a> - API server

# Authentication

* API Key (BearerHeader)
    - Parameter Name: **Authorization**, in: header. Generate an API key in settings -> api keys

<h1 id="contentgroove-api-default">Default</h1>

## list clips

> Code samples

```bash
curl https://example.com/api/v1/clips \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/clips`

<h3 id="list-clips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|object|false|Filters to be applied to the query.<br><br>Query params in the url must look like this: "filter[attributeName_*matcher*]"<br><br>(i.e. filter[name_eq]=chimp%20into%20space)<br><br>Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/<br><br>|
|page|query|object|false|Specify page number and page size for the query|
|sort|query|string|false|Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|created_at|
|sort|-created_at|
|sort|original_created_at|
|sort|-original_created_at|
|sort|name|
|sort|-name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created_at": "2022-08-15T18:34:08.398Z",
        "end_char": 0,
        "end_time": 2,
        "external_id": "150",
        "is_processing": true,
        "media_file_content_type": null,
        "media_file_duration": null,
        "media_file_height": null,
        "media_file_preview_image_url": null,
        "media_file_url": null,
        "media_file_width": null,
        "name": "Example Clip",
        "processing_started_at": "2022-08-15T18:34:08.391Z",
        "rank": null,
        "start_char": 0,
        "start_time": 1,
        "text": null
      },
      "id": "32caa472-6a12-4a77-974a-52d1175502ab",
      "relationships": {
        "media": {
          "data": {
            "id": "dde75ca2-77ad-4dfa-b4f0-61ccff99a296",
            "type": "medias"
          }
        }
      },
      "type": "clips"
    }
  ],
  "links": {
    "current": "http://api.contentgroove.com/api/v1/clips?page[number]=1",
    "self": "http://api.contentgroove.com/api/v1/clips"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="list-clips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## create clip

> Code samples

```bash
curl https://example.com/api/v1/clips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "attributes": {
        "end_time": 12.3,
        "media_id": "9b9a2e82-5b47-4f59-831d-4c239824b983",
        "name": "Example New Clip",
        "start_time": 10.1
      }
    }
  }'
```

`POST /api/v1/clips`

> Body parameter

```json
{
  "data": {
    "attributes": {
      "end_time": 12.3,
      "media_id": "9b9a2e82-5b47-4f59-831d-4c239824b983",
      "name": "Example New Clip",
      "start_time": 10.1
    }
  }
}
```

<h3 id="create-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» data|body|object|true|none|
|» » attributes|body|object|true|none|
|» » » end_time|body|number|true|none|
|» » » media_id|body|string|true|none|
|» » » name|body|string|true|none|
|» » » start_time|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created_at": "2022-08-15T18:34:09.431Z",
      "end_char": 0,
      "end_time": 2,
      "external_id": null,
      "is_processing": null,
      "media_file_content_type": null,
      "media_file_duration": null,
      "media_file_height": null,
      "media_file_preview_image_url": null,
      "media_file_url": null,
      "media_file_width": null,
      "name": "Example New Clip",
      "processing_started_at": "2022-08-17T21:08:29.615Z",
      "rank": null,
      "start_char": 0,
      "start_time": 1,
      "text": null
    },
    "id": "a5d24ac9-86bc-46a9-b188-6dfff81c838c",
    "relationships": {
      "media": {
        "data": {
          "id": "dde75ca2-77ad-4dfa-b4f0-61ccff99a296",
          "type": "medias"
        }
      }
    },
    "type": "clips"
  },
  "links": {
    "self": "http://api.contentgroove.com/api/v1/clips"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 402 Response

```json
{
  "errors": [
    {
      "code": "exceeded_quota_count",
      "detail": "You have exceeded the monthly quota for number of clips. Please visit the Settings / Quota Usage page to see your usage and manage your account.",
      "source": {
        "pointer": ""
      },
      "status": "422",
      "title": "Unprocessable Entity"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="create-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|402|Payment Required|payment required|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## show clip

> Code samples

```bash
curl https://example.com/api/v1/clips/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/clips/{id}`

<h3 id="show-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the clip to be retrieved|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created_at": "2022-08-15T18:34:08.398Z",
      "end_char": 0,
      "end_time": 2,
      "external_id": "155",
      "is_processing": true,
      "media_file_content_type": null,
      "media_file_duration": null,
      "media_file_height": null,
      "media_file_preview_image_url": null,
      "media_file_url": null,
      "media_file_width": null,
      "name": "Example Clip",
      "processing_started_at": "2022-08-15T18:34:08.391Z",
      "rank": null,
      "start_char": 0,
      "start_time": 1,
      "text": null
    },
    "id": "32caa472-6a12-4a77-974a-52d1175502ab",
    "relationships": {
      "media": {
        "data": {
          "id": "dde75ca2-77ad-4dfa-b4f0-61ccff99a296",
          "type": "medias"
        }
      }
    },
    "type": "clips"
  },
  "links": {
    "self": "http://api.contentgroove.com/api/v1/clips/32caa472-6a12-4a77-974a-52d1175502ab"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": null,
      "source": null,
      "status": "404",
      "title": "Not Found"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="show-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|not authorized|None|
|404|Not Found|not found|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## update clip

> Code samples

```bash
curl https://example.com/api/v1/clips/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "attributes": {
        "end_time": 12.3,
        "name": "Example Clip",
        "start_time": 10.1
      }
    }
  }'
```

`PUT /api/v1/clips/{id}`

> Body parameter

```json
{
  "data": {
    "attributes": {
      "end_time": 12.3,
      "name": "Example Clip",
      "start_time": 10.1
    }
  }
}
```

<h3 id="update-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the clip to be retrieved|
|body|body|object|true|none|
|» data|body|object|true|none|
|» » attributes|body|object|true|none|
|» » » end_time|body|number|false|none|
|» » » name|body|string|false|none|
|» » » start_time|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created_at": "2022-08-15T18:34:08.398Z",
      "end_char": 0,
      "end_time": 2,
      "external_id": "158",
      "is_processing": true,
      "media_file_content_type": null,
      "media_file_duration": null,
      "media_file_height": null,
      "media_file_preview_image_url": null,
      "media_file_url": null,
      "media_file_width": null,
      "name": "Example Clip",
      "processing_started_at": "2022-08-15T18:34:08.391Z",
      "rank": null,
      "start_char": 0,
      "start_time": 1,
      "text": null
    },
    "id": "32caa472-6a12-4a77-974a-52d1175502ab",
    "relationships": {
      "media": {
        "data": {
          "id": "dde75ca2-77ad-4dfa-b4f0-61ccff99a296",
          "type": "medias"
        }
      }
    },
    "type": "clips"
  },
  "links": {
    "self": "http://api.contentgroove.com/api/v1/clips/32caa472-6a12-4a77-974a-52d1175502ab"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="update-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|not authorized|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## delete clip

> Code samples

```bash
curl https://example.com/api/v1/clips/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/clips/{id}`

<h3 id="delete-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the clip to be retrieved|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": null,
      "source": null,
      "status": "404",
      "title": "Not Found"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="delete-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|not authorized|None|
|404|Not Found|not found|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## prepare presigned upload url

> Code samples

```bash
curl https://example.com/api/v1/direct_uploads \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/direct_uploads`

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "upload_id": "eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWszTVdWbFlXSTBNaTFqTWpsaUxUUm1NVFF0WVRBMVl5MWpOelprWkRnd1l6TTVZamNHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--0bc2a83b08eb0217bc7f0497302496329cf69ede",
      "upload_url": "(example URL for documentation only) https://file-uploads.contentgroove.com/vmf93z4328ioirtd6f5yb2nwbnq4d0ps?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ44FA4RJICA5SPPQ%2F20220919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220919T165555Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host-content-type&X-Amz-Signature=df840423555070b29264382599459f1497ba2bd5e10e6a6dd41a29ebe239a8e0ecf"
    },
    "id": "71eeab42-c29b-4f14-a05c-c76dd80c39b7",
    "type": "direct_upload_blobs"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="prepare-presigned-upload-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## list medias

> Code samples

```bash
curl https://example.com/api/v1/medias \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/medias`

<h3 id="list-medias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|object|false|Filters to be applied to the query.<br><br>Query params in the url must look like this: "filter[attributeName_*matcher*]"<br><br>(i.e. filter[name_eq]=chimp%20into%20space)<br><br>Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/<br><br>|
|page|query|object|false|Specify page number and page size for the query|
|sort|query|string|false|Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|created_at|
|sort|-created_at|
|sort|original_created_at|
|sort|-original_created_at|
|sort|name|
|sort|-name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created_at": "2022-08-17T02:13:58.431Z",
        "description": "Enos was the second chimpanzee launched into space by NASA. He was the first and only chimpanzee, and third hominid after cosmonauts Yuri Gagarin and Gherman Titov, to achieve Earth orbit. Enos's flight occurred on November 29, 1961. https://en.wikipedia.org/wiki/Enos_(chimpanzee)",
        "external_id": "468",
        "has_fetch_error": false,
        "is_processing": true,
        "name": "Chimp Into Space",
        "original_created_at": "2022-08-17T02:13:58.431Z",
        "processing_started_at": "2022-08-17T02:13:58.425Z",
        "source_created_at": null,
        "source_file_content_type": null,
        "source_file_duration": null,
        "source_file_height": null,
        "source_file_preview_image_url": null,
        "source_file_width": null,
        "source_url": "https://archive.org/download/SF143/SF143_512kb.mp4"
      },
      "id": "f98fae60-8086-41d5-8966-36698bf13de0",
      "relationships": {
        "clips": {
          "data": []
        }
      },
      "type": "medias"
    }
  ],
  "links": {
    "current": "http://api.contentgroove.com/api/v1/medias?page[number]=1",
    "self": "http://api.contentgroove.com/api/v1/medias"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="list-medias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## create media

> Code samples

```bash
curl https://example.com/api/v1/medias \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "attributes": {
        "description": "Video description",
        "name": "Video name",
        "source_url": "(required if importing a video from a source url) https://archive.org/download/SF143/SF143_512kb.mp4",
        "upload_id": "(required if uploading a local file) ey399vjdkdjf0jslcjd0wjc0ujffj3432lo23kk2o22"
      }
    }
  }'
```

`POST /api/v1/medias`

> Body parameter

```json
{
  "data": {
    "attributes": {
      "description": "Video description",
      "name": "Video name",
      "source_url": "(required if importing a video from a source url) https://archive.org/download/SF143/SF143_512kb.mp4",
      "upload_id": "(required if uploading a local file) ey399vjdkdjf0jslcjd0wjc0ujffj3432lo23kk2o22"
    }
  }
}
```

<h3 id="create-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» data|body|object|true|none|
|» » attributes|body|object|true|none|
|» » » description|body|string|false|none|
|» » » name|body|string|false|none|
|» » » source_url|body|string|false|none|
|» » » upload_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created_at": "2022-08-15T18:34:13.256Z",
      "description": null,
      "external_id": null,
      "has_fetch_error": false,
      "is_processing": null,
      "name": "",
      "original_created_at": null,
      "processing_started_at": "2022-08-17T21:08:34.662Z",
      "source_created_at": null,
      "source_file_content_type": null,
      "source_file_duration": null,
      "source_file_height": null,
      "source_file_preview_image_url": null,
      "source_file_width": null,
      "source_url": "https://archive.org/download/SF143/SF143_512kb.mp4"
    },
    "id": "654599f2-d989-492b-ba66-19dc722e983c",
    "relationships": {
      "clips": {
        "data": []
      },
      "transcription": {
        "data": null
      }
    },
    "type": "medias"
  },
  "links": {
    "self": "http://api.contentgroove.com/api/v1/medias"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 402 Response

```json
{
  "errors": [
    {
      "code": "exceeded_quota_count",
      "detail": "You have exceeded the monthly quota for number of medias. Please visit the Settings / Quota Usage page to see your usage and manage your account.",
      "source": {
        "pointer": ""
      },
      "status": "422",
      "title": "Unprocessable Entity"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="create-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|402|Payment Required|payment required|None|
|429|Too Many Requests|too many requests|None|

<h3 id="create-media-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|media.processing_finished|Provided URL in /webhook_subscriptions|POST|The webhook that is sent after the media is finished processing|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## show media

> Code samples

```bash
curl https://example.com/api/v1/medias/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/medias/{id}`

<h3 id="show-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created_at": "2022-08-17T02:13:58.431Z",
      "description": "Enos was the second chimpanzee launched into space by NASA. He was the first and only chimpanzee, and third hominid after cosmonauts Yuri Gagarin and Gherman Titov, to achieve Earth orbit. Enos's flight occurred on November 29, 1961. https://en.wikipedia.org/wiki/Enos_(chimpanzee)",
      "external_id": "474",
      "has_fetch_error": false,
      "is_processing": true,
      "name": "Chimp Into Space",
      "original_created_at": "2022-08-17T02:13:58.431Z",
      "processing_started_at": "2022-08-17T02:13:58.425Z",
      "source_created_at": null,
      "source_file_content_type": null,
      "source_file_duration": null,
      "source_file_height": null,
      "source_file_preview_image_url": null,
      "source_file_width": null,
      "source_url": "https://archive.org/download/SF143/SF143_512kb.mp4"
    },
    "id": "f98fae60-8086-41d5-8966-36698bf13de0",
    "relationships": {
      "clips": {
        "data": []
      },
      "transcription": {
        "data": null
      }
    },
    "type": "medias"
  },
  "links": {
    "self": "http://api.contentgroove.com/api/v1/medias/f98fae60-8086-41d5-8966-36698bf13de0"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": null,
      "source": null,
      "status": "404",
      "title": "Not Found"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="show-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|not authorized|None|
|404|Not Found|not found|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## update media

> Code samples

```bash
curl https://example.com/api/v1/medias/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "attributes": {
        "description": "Writing by Sam Denby; Research by Sam Denby and Tristan Purdy",
        "name": "Why Electric Planes are Inevitably Coming"
      }
    }
  }'
```

`PUT /api/v1/medias/{id}`

> Body parameter

```json
{
  "data": {
    "attributes": {
      "description": "Writing by Sam Denby; Research by Sam Denby and Tristan Purdy",
      "name": "Why Electric Planes are Inevitably Coming"
    }
  }
}
```

<h3 id="update-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id|
|body|body|object|true|none|
|» data|body|object|true|none|
|» » attributes|body|object|true|none|
|» » » description|body|string|false|none|
|» » » name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created_at": "2022-08-17T02:13:58.431Z",
      "description": "testdescription",
      "external_id": "477",
      "has_fetch_error": false,
      "is_processing": true,
      "name": "Chimp Into Space",
      "original_created_at": "2022-08-17T02:13:58.431Z",
      "processing_started_at": "2022-08-17T02:13:58.425Z",
      "source_created_at": null,
      "source_file_content_type": null,
      "source_file_duration": null,
      "source_file_height": null,
      "source_file_preview_image_url": null,
      "source_file_width": null,
      "source_url": "https://archive.org/download/SF143/SF143_512kb.mp4"
    },
    "id": "f98fae60-8086-41d5-8966-36698bf13de0",
    "relationships": {
      "clips": {
        "data": []
      },
      "transcription": {
        "data": null
      }
    },
    "type": "medias"
  },
  "links": {
    "self": "http://api.contentgroove.com/api/v1/medias/f98fae60-8086-41d5-8966-36698bf13de0"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="update-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|not authorized|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## delete media

> Code samples

```bash
curl https://example.com/api/v1/medias/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/medias/{id}`

<h3 id="delete-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": null,
      "source": null,
      "status": "404",
      "title": "Not Found"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="delete-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|not authorized|None|
|404|Not Found|not found|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## list webhook subscriptions

> Code samples

```bash
curl https://example.com/api/v1/webhook_subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/webhook_subscriptions`

<h3 id="list-webhook-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|object|false|Filters to be applied to the query.<br><br>Query params in the url must look like this: "filter[attributeName_*matcher*]"<br><br>(i.e. filter[name_eq]=chimp%20into%20space)<br><br>Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/<br><br>|
|sort|query|string|false|Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|created_at|
|sort|-created_at|
|sort|original_created_at|
|sort|-original_created_at|
|sort|name|
|sort|-name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "active": true,
        "created_at": "2022-10-13T19:04:05.111Z",
        "subscribed_events": [
          "*"
        ],
        "updated_at": "2022-10-13T19:04:05.111Z",
        "url": "https://webhook.site/cd4ca31b-6d7d-414a-a3e5-a3a3ca42b25e"
      },
      "id": "d07aedb6-53fc-4141-b10c-083896e54ce2",
      "relationships": {
        "user": {
          "data": {
            "id": "aea66137-8ee1-4bab-bf5a-5d8a5bb4a7f9",
            "type": "users"
          }
        },
        "webhook_events": {
          "data": []
        }
      },
      "type": "webhook_subscriptions"
    }
  ],
  "links": {
    "current": "http://api.contentgroove.com/api/v1/webhook_subscriptions?page[number]=1",
    "self": "http://api.contentgroove.com/api/v1/webhook_subscriptions"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="list-webhook-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## create webhook subscription

> Code samples

```bash
curl https://example.com/api/v1/webhook_subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "attributes": {
        "subscribed_events": [
          "media.processing_finished"
        ],
        "url": "https://example.com/contentgroove_webhooks/12345"
      }
    }
  }'
```

`POST /api/v1/webhook_subscriptions`

> Body parameter

```json
{
  "data": {
    "attributes": {
      "subscribed_events": [
        "media.processing_finished"
      ],
      "url": "https://example.com/contentgroove_webhooks/12345"
    }
  }
}
```

<h3 id="create-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» data|body|object|true|none|
|» » attributes|body|object|true|none|
|» » » subscribed_events|body|[object]|false|none|
|» » » url|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "active": true,
      "created_at": "2022-10-13T19:04:07.154Z",
      "subscribed_events": [
        "*"
      ],
      "updated_at": "2022-10-13T19:04:07.154Z",
      "url": "https://example.com/contentgroove_webhooks/12345"
    },
    "id": "d812aaec-55e8-47b8-a9b6-3905082a53fb",
    "relationships": {
      "user": {
        "data": {
          "id": "e9adb7a5-6169-4041-8d23-d1fdb6294198",
          "type": "users"
        }
      },
      "webhook_events": {
        "data": []
      }
    },
    "type": "webhook_subscriptions"
  },
  "links": {
    "self": "http://api.contentgroove.com/api/v1/webhook_subscriptions"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="create-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## show webhook subscription

> Code samples

```bash
curl https://example.com/api/v1/webhook_subscriptions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/webhook_subscriptions/{id}`

<h3 id="show-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the webhook subscription to be retrieved|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "active": true,
      "created_at": "2022-10-13T19:04:07.663Z",
      "subscribed_events": [
        "*"
      ],
      "updated_at": "2022-10-13T19:04:07.663Z",
      "url": "https://webhook.site/cd4ca31b-6d7d-414a-a3e5-a3a3ca42b25e"
    },
    "id": "481f57a0-ecdf-42ec-9837-bc551eb6909b",
    "relationships": {
      "user": {
        "data": {
          "id": "639597af-9230-4205-a539-b5c7177b514c",
          "type": "users"
        }
      },
      "webhook_events": {
        "data": []
      }
    },
    "type": "webhook_subscriptions"
  },
  "links": {
    "self": "http://api.contentgroove.com/api/v1/webhook_subscriptions/481f57a0-ecdf-42ec-9837-bc551eb6909b"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": null,
      "source": null,
      "status": "404",
      "title": "Not Found"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="show-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|not authorized|None|
|404|Not Found|not found|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>

## delete webhook subscription

> Code samples

```bash
curl https://example.com/api/v1/webhook_subscriptions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/webhook_subscriptions/{id}`

<h3 id="delete-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the webhook subscription to be retrieved|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "You need to sign in or sign up before continuing."
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "detail": null,
      "source": null,
      "status": "404",
      "title": "Not Found"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "detail": "You have exceeded the maximum number of requests in the current window. Please try again later.",
      "status": "429",
      "title": "Too Many Requests"
    }
  ]
}
```

<h3 id="delete-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|not authorized|None|
|404|Not Found|not found|None|
|429|Too Many Requests|too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerHeader
</aside>
