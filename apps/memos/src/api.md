<h1 id="api">API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="api-aiservice">AIService</h1>

AIService runs AI tasks through the AI providers configured on the instance.

## AIService_Transcribe

<a id="opIdAIService_Transcribe"></a>

> Code samples

```bash
curl http://localhost:5230/api/ai:transcribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "audio": {
      "content": "string",
      "uri": "string",
      "filename": "string",
      "contentType": "string"
    }
  }'
```

`POST /api/ai:transcribe`

Transcribe transcribes an audio file with the instance's configured
 transcription provider. The caller must be signed in, and requests are rate limited per user.

> Body parameter

```json
{
  "audio": {
    "content": "string",
    "uri": "string",
    "filename": "string",
    "contentType": "string"
  }
}
```

<h3 id="aiservicetranscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TranscribeRequest](#schematranscriberequest)|true|none|
|» audio|body|object|true|Required. The audio to transcribe.|
|» » content|body|string(bytes)|false|Input only. Inline audio bytes, at most 25 MiB.|
|» » uri|body|string|false|URI of the audio content. Reserved for future use; the service rejects requests that set it.|
|» » filename|body|string|false|Optional. The uploaded filename, at most 255 characters.|
|» » contentType|body|string|false|Optional. The MIME type of the audio. If empty, the service detects it from the content.|

> Example responses

> 200 Response

```json
{
  "text": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="aiservicetranscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TranscribeResponse](#schematranscriberesponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-attachmentservice">AttachmentService</h1>

AttachmentService manages files attached to memos.

## AttachmentService_ListAttachments

<a id="opIdAttachmentService_ListAttachments"></a>

> Code samples

```bash
curl http://localhost:5230/api/attachments \
  -H 'Accept: application/json'
```

`GET /api/attachments`

ListAttachments lists attachments linked to memos the caller can read, plus the caller's unlinked uploads.

<h3 id="attachmentservicelistattachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer(int32)|false|Optional. The maximum number of attachments to return. The service may return fewer.<br> If unspecified, at most 50 attachments are returned. Values above 1000 are coerced to 1000.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the next page.|
|filter|query|string|false|Optional. A CEL filter over the results.<br> Example: `mime_type == "image/png"` or `filename.contains("test")`.<br> Supported operators: ==, !=, <, <=, >, >=, : (contains), in.<br> Supported fields: creator, filename, mime_type, create_time, memo_id, space.<br> `creator` is the linked memo's creator, or the uploader for an unlinked attachment. It supports equality with a<br> User resource name.<br> `space` is the linked memo's Space resource name, or null when the attachment is unlinked or its memo has no<br> space. It supports only a non-negated `==` comparison with a Space resource name or null.|
|orderBy|query|string|false|Optional. The order to sort results by, such as "create_time desc" or "filename asc". The service does not apply<br> it yet.|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="attachmentservicelistattachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListAttachmentsResponse](#schemalistattachmentsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AttachmentService_CreateAttachment

<a id="opIdAttachmentService_CreateAttachment"></a>

> Code samples

```bash
curl http://localhost:5230/api/attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "filename": "string",
    "type": "string",
    "content": "string",
    "externalLink": "string",
    "motionMedia": {
      "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
      "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
      "groupId": "string",
      "presentationTimestampUs": "string",
      "hasEmbeddedVideo": true
    },
    "mediaMetadata": {
      "width": 0,
      "height": 0,
      "photo": {
        "captureTime": {
          "localDateTime": "string",
          "utcOffset": "string"
        },
        "location": {
          "latitude": 0,
          "longitude": 0,
          "altitudeMeters": 0
        },
        "sourceExifOrientation": 0,
        "cameraMake": "string",
        "cameraModel": "string",
        "lensModel": "string",
        "fNumber": 0,
        "exposureTimeSeconds": 0,
        "iso": 0,
        "focalLengthMm": 0
      },
      "video": {
        "durationSeconds": 0
      }
    },
    "memo": "string"
  }'
```

`POST /api/attachments`

CreateAttachment creates an attachment from inline content.

> Body parameter

```json
{
  "name": "string",
  "filename": "string",
  "type": "string",
  "content": "string",
  "externalLink": "string",
  "motionMedia": {
    "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
    "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
    "groupId": "string",
    "presentationTimestampUs": "string",
    "hasEmbeddedVideo": true
  },
  "mediaMetadata": {
    "width": 0,
    "height": 0,
    "photo": {
      "captureTime": {
        "localDateTime": "string",
        "utcOffset": "string"
      },
      "location": {
        "latitude": 0,
        "longitude": 0,
        "altitudeMeters": 0
      },
      "sourceExifOrientation": 0,
      "cameraMake": "string",
      "cameraModel": "string",
      "lensModel": "string",
      "fNumber": 0,
      "exposureTimeSeconds": 0,
      "iso": 0,
      "focalLengthMm": 0
    },
    "video": {
      "durationSeconds": 0
    }
  },
  "memo": "string"
}
```

<h3 id="attachmentservicecreateattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|query|string|false|Optional. The ID to use for the attachment. If empty, a unique ID is generated.<br> Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$|
|body|body|[Attachment](#schemaattachment)|true|none|
|» name|body|string|false|Identifier. The resource name of the attachment.<br> Format: attachments/{attachment}|
|» filename|body|string|true|Required. The filename of the attachment.|
|» type|body|string|true|Required. The MIME type of the attachment. If empty on create, the service detects it from the filename and<br> content.|
|» content|body|string(bytes)|false|Input only. The content of the attachment.|
|» externalLink|body|string|false|Optional. The external link of the attachment. Set only for externally stored attachments; ignored on create.|
|» motionMedia|body|object|false|Optional. Motion photo metadata. Clients may only supply Apple Live Photo metadata; the service detects Android<br> motion photos in JPEG content.|
|» » family|body|string(enum)|false|The motion photo format.|
|» » role|body|string(enum)|false|The part this attachment plays in the motion photo.|
|» » groupId|body|string|false|Groups the attachments that belong to one motion photo. Required for client-supplied Apple Live Photo metadata;<br> for an Android motion photo it is the attachment's own ID.|
|» » presentationTimestampUs|body|string|false|Presentation timestamp of the still frame within the video, in microseconds.|
|» » hasEmbeddedVideo|body|boolean|false|Whether the file embeds the motion video, as in an Android motion photo container.|
|» mediaMetadata|body|object|false|Optional. Normalized media metadata supplied by the client at creation time. Immutable after creation.|
|» » width|body|integer(int32)|false|Display-oriented width in pixels. Must be provided with height.|
|» » height|body|integer(int32)|false|Display-oriented height in pixels. Must be provided with width.|
|» » photo|body|object|false|Photo metadata, for image attachments.|
|» » » captureTime|body|object|false|Capture time as recorded by the source media.|
|» » » » localDateTime|body|string|false|Local date and time without a time zone, formatted as YYYY-MM-DDTHH:mm:ss[.fraction].|
|» » » » utcOffset|body|string|false|UTC offset formatted as Z or +/-HH:MM.|
|» » » location|body|object|false|Geographic location recorded by the source media.|
|» » » » latitude|body|number(double)|false|WGS84 latitude in decimal degrees. Must be provided with longitude.|
|» » » » longitude|body|number(double)|false|WGS84 longitude in decimal degrees. Must be provided with latitude.|
|» » » » altitudeMeters|body|number(double)|false|Signed altitude in meters relative to sea level.|
|» » » sourceExifOrientation|body|integer(int32)|false|EXIF orientation value from 1 through 8 as recorded by the source file.<br> This value is informational and must not be reapplied to the stored attachment;<br> width and height already describe its display-oriented dimensions.|
|» » » cameraMake|body|string|false|The camera manufacturer.|
|» » » cameraModel|body|string|false|The camera model.|
|» » » lensModel|body|string|false|The lens model.|
|» » » fNumber|body|number(double)|false|The aperture f-number.|
|» » » exposureTimeSeconds|body|number(double)|false|The exposure time in seconds.|
|» » » iso|body|integer(int32)|false|The ISO sensitivity.|
|» » » focalLengthMm|body|number(double)|false|The focal length in millimeters.|
|» » video|body|object|false|Video metadata, for video attachments.|
|» » » durationSeconds|body|number(double)|false|The duration of the video in seconds.|
|» memo|body|string|false|Optional. The memo the attachment is linked to. On create, the caller must be able to manage the memo.<br> Format: memos/{memo}|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » family|MOTION_MEDIA_FAMILY_UNSPECIFIED|
|» » family|APPLE_LIVE_PHOTO|
|» » family|ANDROID_MOTION_PHOTO|
|» » role|MOTION_MEDIA_ROLE_UNSPECIFIED|
|» » role|STILL|
|» » role|VIDEO|
|» » role|CONTAINER|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "creator": "string",
  "filename": "string",
  "type": "string",
  "externalLink": "string",
  "motionMedia": {
    "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
    "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
    "groupId": "string",
    "presentationTimestampUs": "string",
    "hasEmbeddedVideo": true
  },
  "mediaMetadata": {
    "width": 0,
    "height": 0,
    "photo": {
      "captureTime": {
        "localDateTime": "string",
        "utcOffset": "string"
      },
      "location": {
        "latitude": 0,
        "longitude": 0,
        "altitudeMeters": 0
      },
      "sourceExifOrientation": 0,
      "cameraMake": "string",
      "cameraModel": "string",
      "lensModel": "string",
      "fNumber": 0,
      "exposureTimeSeconds": 0,
      "iso": 0,
      "focalLengthMm": 0
    },
    "video": {
      "durationSeconds": 0
    }
  },
  "memo": "string",
  "size": "string",
  "createTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="attachmentservicecreateattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Attachment](#schemaattachment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AttachmentService_GetAttachment

<a id="opIdAttachmentService_GetAttachment"></a>

> Code samples

```bash
curl http://localhost:5230/api/attachments/string \
  -H 'Accept: application/json'
```

`GET /api/attachments/{attachment}`

GetAttachment gets an attachment by name. An unlinked attachment is visible only to its uploader and admins;
 a linked attachment follows the read access of its memo.

<h3 id="attachmentservicegetattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachment|path|string|true|The attachment id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "creator": "string",
  "filename": "string",
  "type": "string",
  "externalLink": "string",
  "motionMedia": {
    "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
    "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
    "groupId": "string",
    "presentationTimestampUs": "string",
    "hasEmbeddedVideo": true
  },
  "mediaMetadata": {
    "width": 0,
    "height": 0,
    "photo": {
      "captureTime": {
        "localDateTime": "string",
        "utcOffset": "string"
      },
      "location": {
        "latitude": 0,
        "longitude": 0,
        "altitudeMeters": 0
      },
      "sourceExifOrientation": 0,
      "cameraMake": "string",
      "cameraModel": "string",
      "lensModel": "string",
      "fNumber": 0,
      "exposureTimeSeconds": 0,
      "iso": 0,
      "focalLengthMm": 0
    },
    "video": {
      "durationSeconds": 0
    }
  },
  "memo": "string",
  "size": "string",
  "createTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="attachmentservicegetattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Attachment](#schemaattachment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AttachmentService_DeleteAttachment

<a id="opIdAttachmentService_DeleteAttachment"></a>

> Code samples

```bash
curl http://localhost:5230/api/attachments/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/attachments/{attachment}`

DeleteAttachment deletes an attachment uploaded by the caller.

<h3 id="attachmentservicedeleteattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachment|path|string|true|The attachment id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="attachmentservicedeleteattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AttachmentService_UpdateAttachment

<a id="opIdAttachmentService_UpdateAttachment"></a>

> Code samples

```bash
curl http://localhost:5230/api/attachments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "filename": "string",
    "type": "string",
    "content": "string",
    "externalLink": "string",
    "motionMedia": {
      "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
      "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
      "groupId": "string",
      "presentationTimestampUs": "string",
      "hasEmbeddedVideo": true
    },
    "mediaMetadata": {
      "width": 0,
      "height": 0,
      "photo": {
        "captureTime": {
          "localDateTime": "string",
          "utcOffset": "string"
        },
        "location": {
          "latitude": 0,
          "longitude": 0,
          "altitudeMeters": 0
        },
        "sourceExifOrientation": 0,
        "cameraMake": "string",
        "cameraModel": "string",
        "lensModel": "string",
        "fNumber": 0,
        "exposureTimeSeconds": 0,
        "iso": 0,
        "focalLengthMm": 0
      },
      "video": {
        "durationSeconds": 0
      }
    },
    "memo": "string"
  }'
```

`PATCH /api/attachments/{attachment}`

UpdateAttachment updates an attachment. Only `filename` can be updated. The caller must be the uploader or an
 admin.

> Body parameter

```json
{
  "name": "string",
  "filename": "string",
  "type": "string",
  "content": "string",
  "externalLink": "string",
  "motionMedia": {
    "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
    "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
    "groupId": "string",
    "presentationTimestampUs": "string",
    "hasEmbeddedVideo": true
  },
  "mediaMetadata": {
    "width": 0,
    "height": 0,
    "photo": {
      "captureTime": {
        "localDateTime": "string",
        "utcOffset": "string"
      },
      "location": {
        "latitude": 0,
        "longitude": 0,
        "altitudeMeters": 0
      },
      "sourceExifOrientation": 0,
      "cameraMake": "string",
      "cameraModel": "string",
      "lensModel": "string",
      "fNumber": 0,
      "exposureTimeSeconds": 0,
      "iso": 0,
      "focalLengthMm": 0
    },
    "video": {
      "durationSeconds": 0
    }
  },
  "memo": "string"
}
```

<h3 id="attachmentserviceupdateattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachment|path|string|true|The attachment id.|
|updateMask|query|string(field-mask)|false|Required. The fields to update. Only `filename` is supported.|
|body|body|[Attachment](#schemaattachment)|true|none|
|» name|body|string|false|Identifier. The resource name of the attachment.<br> Format: attachments/{attachment}|
|» filename|body|string|true|Required. The filename of the attachment.|
|» type|body|string|true|Required. The MIME type of the attachment. If empty on create, the service detects it from the filename and<br> content.|
|» content|body|string(bytes)|false|Input only. The content of the attachment.|
|» externalLink|body|string|false|Optional. The external link of the attachment. Set only for externally stored attachments; ignored on create.|
|» motionMedia|body|object|false|Optional. Motion photo metadata. Clients may only supply Apple Live Photo metadata; the service detects Android<br> motion photos in JPEG content.|
|» » family|body|string(enum)|false|The motion photo format.|
|» » role|body|string(enum)|false|The part this attachment plays in the motion photo.|
|» » groupId|body|string|false|Groups the attachments that belong to one motion photo. Required for client-supplied Apple Live Photo metadata;<br> for an Android motion photo it is the attachment's own ID.|
|» » presentationTimestampUs|body|string|false|Presentation timestamp of the still frame within the video, in microseconds.|
|» » hasEmbeddedVideo|body|boolean|false|Whether the file embeds the motion video, as in an Android motion photo container.|
|» mediaMetadata|body|object|false|Optional. Normalized media metadata supplied by the client at creation time. Immutable after creation.|
|» » width|body|integer(int32)|false|Display-oriented width in pixels. Must be provided with height.|
|» » height|body|integer(int32)|false|Display-oriented height in pixels. Must be provided with width.|
|» » photo|body|object|false|Photo metadata, for image attachments.|
|» » » captureTime|body|object|false|Capture time as recorded by the source media.|
|» » » » localDateTime|body|string|false|Local date and time without a time zone, formatted as YYYY-MM-DDTHH:mm:ss[.fraction].|
|» » » » utcOffset|body|string|false|UTC offset formatted as Z or +/-HH:MM.|
|» » » location|body|object|false|Geographic location recorded by the source media.|
|» » » » latitude|body|number(double)|false|WGS84 latitude in decimal degrees. Must be provided with longitude.|
|» » » » longitude|body|number(double)|false|WGS84 longitude in decimal degrees. Must be provided with latitude.|
|» » » » altitudeMeters|body|number(double)|false|Signed altitude in meters relative to sea level.|
|» » » sourceExifOrientation|body|integer(int32)|false|EXIF orientation value from 1 through 8 as recorded by the source file.<br> This value is informational and must not be reapplied to the stored attachment;<br> width and height already describe its display-oriented dimensions.|
|» » » cameraMake|body|string|false|The camera manufacturer.|
|» » » cameraModel|body|string|false|The camera model.|
|» » » lensModel|body|string|false|The lens model.|
|» » » fNumber|body|number(double)|false|The aperture f-number.|
|» » » exposureTimeSeconds|body|number(double)|false|The exposure time in seconds.|
|» » » iso|body|integer(int32)|false|The ISO sensitivity.|
|» » » focalLengthMm|body|number(double)|false|The focal length in millimeters.|
|» » video|body|object|false|Video metadata, for video attachments.|
|» » » durationSeconds|body|number(double)|false|The duration of the video in seconds.|
|» memo|body|string|false|Optional. The memo the attachment is linked to. On create, the caller must be able to manage the memo.<br> Format: memos/{memo}|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » family|MOTION_MEDIA_FAMILY_UNSPECIFIED|
|» » family|APPLE_LIVE_PHOTO|
|» » family|ANDROID_MOTION_PHOTO|
|» » role|MOTION_MEDIA_ROLE_UNSPECIFIED|
|» » role|STILL|
|» » role|VIDEO|
|» » role|CONTAINER|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "creator": "string",
  "filename": "string",
  "type": "string",
  "externalLink": "string",
  "motionMedia": {
    "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
    "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
    "groupId": "string",
    "presentationTimestampUs": "string",
    "hasEmbeddedVideo": true
  },
  "mediaMetadata": {
    "width": 0,
    "height": 0,
    "photo": {
      "captureTime": {
        "localDateTime": "string",
        "utcOffset": "string"
      },
      "location": {
        "latitude": 0,
        "longitude": 0,
        "altitudeMeters": 0
      },
      "sourceExifOrientation": 0,
      "cameraMake": "string",
      "cameraModel": "string",
      "lensModel": "string",
      "fNumber": 0,
      "exposureTimeSeconds": 0,
      "iso": 0,
      "focalLengthMm": 0
    },
    "video": {
      "durationSeconds": 0
    }
  },
  "memo": "string",
  "size": "string",
  "createTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="attachmentserviceupdateattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Attachment](#schemaattachment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AttachmentService_BatchDeleteAttachments

<a id="opIdAttachmentService_BatchDeleteAttachments"></a>

> Code samples

```bash
curl http://localhost:5230/api/attachments:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "names": [
      "string"
    ]
  }'
```

`POST /api/attachments:batchDelete`

BatchDeleteAttachments deletes up to 100 attachments in one atomic request. The caller must be the uploader of
 each attachment or an admin.

> Body parameter

```json
{
  "names": [
    "string"
  ]
}
```

<h3 id="attachmentservicebatchdeleteattachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchDeleteAttachmentsRequest](#schemabatchdeleteattachmentsrequest)|true|none|
|» names|body|[string]|true|Required. The names of the attachments to delete, at most 100. Duplicate names are ignored.<br> Format: attachments/{attachment}|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="attachmentservicebatchdeleteattachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AttachmentService_UploadAttachment

<a id="opIdAttachmentService_UploadAttachment"></a>

> Code samples

```bash
curl http://localhost:5230/api/attachments:upload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "spec": {
      "attachment": {
        "name": "string",
        "filename": "string",
        "type": "string",
        "content": "string",
        "externalLink": "string",
        "motionMedia": {
          "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
          "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
          "groupId": "string",
          "presentationTimestampUs": "string",
          "hasEmbeddedVideo": true
        },
        "mediaMetadata": {
          "width": 0,
          "height": 0,
          "photo": {
            "captureTime": {
              "localDateTime": "string",
              "utcOffset": "string"
            },
            "location": {
              "latitude": 0,
              "longitude": 0,
              "altitudeMeters": 0
            },
            "sourceExifOrientation": 0,
            "cameraMake": "string",
            "cameraModel": "string",
            "lensModel": "string",
            "fNumber": 0,
            "exposureTimeSeconds": 0,
            "iso": 0,
            "focalLengthMm": 0
          },
          "video": {
            "durationSeconds": 0
          }
        },
        "memo": "string"
      },
      "attachmentId": "string",
      "totalSize": "string",
      "replaceAttachment": "string"
    },
    "uploadId": "string",
    "writeOffset": "string",
    "data": "string",
    "finishWrite": true
  }'
```

`POST /api/attachments:upload`

UploadAttachment uploads a file in bounded chunks. The first call carries the spec and returns an upload_id;
 later calls carry that upload_id. Uploads are bound to the authenticated user, expire after 30 minutes of
 inactivity, and do not survive a server restart.

> Body parameter

```json
{
  "spec": {
    "attachment": {
      "name": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string"
    },
    "attachmentId": "string",
    "totalSize": "string",
    "replaceAttachment": "string"
  },
  "uploadId": "string",
  "writeOffset": "string",
  "data": "string",
  "finishWrite": true
}
```

<h3 id="attachmentserviceuploadattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UploadAttachmentRequest](#schemauploadattachmentrequest)|true|none|
|» spec|body|object|false|Starts a new upload. The same call may also carry data and finish_write.|
|» » attachment|body|object|true|Required. Metadata for the attachment to create. content must be empty; file bytes are sent in data.|
|» » » name|body|string|false|Identifier. The resource name of the attachment.<br> Format: attachments/{attachment}|
|» » » filename|body|string|true|Required. The filename of the attachment.|
|» » » type|body|string|true|Required. The MIME type of the attachment. If empty on create, the service detects it from the filename and<br> content.|
|» » » content|body|string(bytes)|false|Input only. The content of the attachment.|
|» » » externalLink|body|string|false|Optional. The external link of the attachment. Set only for externally stored attachments; ignored on create.|
|» » » motionMedia|body|object|false|Optional. Motion photo metadata. Clients may only supply Apple Live Photo metadata; the service detects Android<br> motion photos in JPEG content.|
|» » » » family|body|string(enum)|false|The motion photo format.|
|» » » » role|body|string(enum)|false|The part this attachment plays in the motion photo.|
|» » » » groupId|body|string|false|Groups the attachments that belong to one motion photo. Required for client-supplied Apple Live Photo metadata;<br> for an Android motion photo it is the attachment's own ID.|
|» » » » presentationTimestampUs|body|string|false|Presentation timestamp of the still frame within the video, in microseconds.|
|» » » » hasEmbeddedVideo|body|boolean|false|Whether the file embeds the motion video, as in an Android motion photo container.|
|» » » mediaMetadata|body|object|false|Optional. Normalized media metadata supplied by the client at creation time. Immutable after creation.|
|» » » » width|body|integer(int32)|false|Display-oriented width in pixels. Must be provided with height.|
|» » » » height|body|integer(int32)|false|Display-oriented height in pixels. Must be provided with width.|
|» » » » photo|body|object|false|Photo metadata, for image attachments.|
|» » » » » captureTime|body|object|false|Capture time as recorded by the source media.|
|» » » » » » localDateTime|body|string|false|Local date and time without a time zone, formatted as YYYY-MM-DDTHH:mm:ss[.fraction].|
|» » » » » » utcOffset|body|string|false|UTC offset formatted as Z or +/-HH:MM.|
|» » » » » location|body|object|false|Geographic location recorded by the source media.|
|» » » » » » latitude|body|number(double)|false|WGS84 latitude in decimal degrees. Must be provided with longitude.|
|» » » » » » longitude|body|number(double)|false|WGS84 longitude in decimal degrees. Must be provided with latitude.|
|» » » » » » altitudeMeters|body|number(double)|false|Signed altitude in meters relative to sea level.|
|» » » » » sourceExifOrientation|body|integer(int32)|false|EXIF orientation value from 1 through 8 as recorded by the source file.<br> This value is informational and must not be reapplied to the stored attachment;<br> width and height already describe its display-oriented dimensions.|
|» » » » » cameraMake|body|string|false|The camera manufacturer.|
|» » » » » cameraModel|body|string|false|The camera model.|
|» » » » » lensModel|body|string|false|The lens model.|
|» » » » » fNumber|body|number(double)|false|The aperture f-number.|
|» » » » » exposureTimeSeconds|body|number(double)|false|The exposure time in seconds.|
|» » » » » iso|body|integer(int32)|false|The ISO sensitivity.|
|» » » » » focalLengthMm|body|number(double)|false|The focal length in millimeters.|
|» » » » video|body|object|false|Video metadata, for video attachments.|
|» » » » » durationSeconds|body|number(double)|false|The duration of the video in seconds.|
|» » » memo|body|string|false|Optional. The memo the attachment is linked to. On create, the caller must be able to manage the memo.<br> Format: memos/{memo}|
|» » attachmentId|body|string|false|Optional. The ID to use for the attachment. If empty, a unique ID is generated.<br> Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$|
|» » totalSize|body|string|false|Optional. Total size of the file in bytes before media processing. Zero represents an empty file.|
|» » replaceAttachment|body|string|false|Optional. The name of an existing attachment whose content the finished upload replaces, instead of creating one.<br> The attachment keeps its name, memo and creation time; its filename, type, size and media metadata come from this<br> upload, and its cached thumbnail is dropped. attachment_id and attachment.memo must be empty. Only the uploader of<br> the attachment or an admin may replace it. An external link or part of a motion photo cannot be replaced.<br> Format: attachments/{attachment}|
|» uploadId|body|string|false|Continues the upload identified by a previous response.|
|» writeOffset|body|string|true|Required. Zero-based byte offset at which data is written. Must equal the committed size, except when retrying<br> the most recently accepted chunk with identical bytes and offset, which is accepted without writing again.|
|» data|body|string(bytes)|false|Optional. File bytes, at most max_chunk_size long. With no data and finish_write false, the call reports<br> progress without writing, and write_offset is ignored.|
|» finishWrite|body|boolean|false|Optional. Finalize the upload after writing data. The committed size must then equal total_size. Any later call<br> for the same upload_id returns the created attachment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » » family|MOTION_MEDIA_FAMILY_UNSPECIFIED|
|» » » » family|APPLE_LIVE_PHOTO|
|» » » » family|ANDROID_MOTION_PHOTO|
|» » » » role|MOTION_MEDIA_ROLE_UNSPECIFIED|
|» » » » role|STILL|
|» » » » role|VIDEO|
|» » » » role|CONTAINER|

> Example responses

> 200 Response

```json
{
  "uploadId": "string",
  "committedSize": "string",
  "maxChunkSize": 0,
  "attachment": {
    "name": "string",
    "creator": "string",
    "filename": "string",
    "type": "string",
    "externalLink": "string",
    "motionMedia": {
      "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
      "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
      "groupId": "string",
      "presentationTimestampUs": "string",
      "hasEmbeddedVideo": true
    },
    "mediaMetadata": {
      "width": 0,
      "height": 0,
      "photo": {
        "captureTime": {
          "localDateTime": "string",
          "utcOffset": "string"
        },
        "location": {
          "latitude": 0,
          "longitude": 0,
          "altitudeMeters": 0
        },
        "sourceExifOrientation": 0,
        "cameraMake": "string",
        "cameraModel": "string",
        "lensModel": "string",
        "fNumber": 0,
        "exposureTimeSeconds": 0,
        "iso": 0,
        "focalLengthMm": 0
      },
      "video": {
        "durationSeconds": 0
      }
    },
    "memo": "string",
    "size": "string",
    "createTime": "1970-01-01T00:00:00Z"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="attachmentserviceuploadattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UploadAttachmentResponse](#schemauploadattachmentresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-authservice">AuthService</h1>

AuthService manages sign-in sessions: it issues, refreshes, and revokes the tokens that authenticate API calls.

## AuthService_GetCurrentUser

<a id="opIdAuthService_GetCurrentUser"></a>

> Code samples

```bash
curl http://localhost:5230/api/auth/me \
  -H 'Accept: application/json'
```

`GET /api/auth/me`

GetCurrentUser returns the authenticated user, similar to OIDC's /userinfo endpoint.
 When the caller is not signed in or the account is no longer active, clears the refresh token cookie and returns
 UNAUTHENTICATED.

> Example responses

> 200 Response

```json
{
  "user": {
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="authservicegetcurrentuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetCurrentUserResponse](#schemagetcurrentuserresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AuthService_RefreshToken

<a id="opIdAuthService_RefreshToken"></a>

> Code samples

```bash
curl http://localhost:5230/api/auth/refresh \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /api/auth/refresh`

RefreshToken exchanges the refresh token for a new access token.
 The refresh token is read from the HttpOnly cookie and rotated: the old token is revoked and a new one with a
 fresh 30-day expiry is set in the cookie.
 Public, so it can be called after the access token has expired.

> Body parameter

```json
{}
```

<h3 id="authservicerefreshtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefreshTokenRequest](#schemarefreshtokenrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "accessTokenExpireTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="authservicerefreshtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RefreshTokenResponse](#schemarefreshtokenresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AuthService_SignIn

<a id="opIdAuthService_SignIn"></a>

> Code samples

```bash
curl http://localhost:5230/api/auth/signin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "passwordCredentials": {
      "username": "string",
      "password": "string"
    },
    "ssoCredentials": {
      "identityProvider": "string",
      "code": "string",
      "redirectUri": "string",
      "codeVerifier": "string"
    }
  }'
```

`POST /api/auth/signin`

SignIn authenticates a user with password or SSO credentials.
 On success, returns a short-lived access token and sets a refresh token in an HttpOnly cookie.
 Public. Attempts are rate limited. Archived users cannot sign in.

> Body parameter

```json
{
  "passwordCredentials": {
    "username": "string",
    "password": "string"
  },
  "ssoCredentials": {
    "identityProvider": "string",
    "code": "string",
    "redirectUri": "string",
    "codeVerifier": "string"
  }
}
```

<h3 id="authservicesignin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignInRequest](#schemasigninrequest)|true|none|
|» passwordCredentials|body|object|false|Username and password credentials.|
|» » username|body|string|true|Required. The username to sign in with.|
|» » password|body|string|true|Required. The password to sign in with.|
|» ssoCredentials|body|object|false|SSO credentials from an OAuth2 authorization code flow.|
|» » identityProvider|body|string|true|Required. The resource name of the identity provider.<br> Format: identity-providers/{idp}|
|» » code|body|string|true|Required. The authorization code returned by the identity provider.|
|» » redirectUri|body|string|true|Required. The redirect URI used in the authorization request.|
|» » codeVerifier|body|string|false|Optional. The PKCE code verifier (RFC 7636). Set it when the authorization request used a code challenge.|

> Example responses

> 200 Response

```json
{
  "user": {
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  },
  "accessToken": "string",
  "accessTokenExpireTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="authservicesignin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SignInResponse](#schemasigninresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## AuthService_SignOut

<a id="opIdAuthService_SignOut"></a>

> Code samples

```bash
curl http://localhost:5230/api/auth/signout \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/auth/signout`

SignOut ends the current session.
 Revokes the refresh token from the cookie and clears the cookie.

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="authservicesignout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-identityproviderservice">IdentityProviderService</h1>

IdentityProviderService manages the external identity providers users can sign in with.

## IdentityProviderService_ListIdentityProviders

<a id="opIdIdentityProviderService_ListIdentityProviders"></a>

> Code samples

```bash
curl http://localhost:5230/api/identity-providers \
  -H 'Accept: application/json'
```

`GET /api/identity-providers`

ListIdentityProviders lists identity providers.
 Public, so the sign-in page can show SSO options. Client secrets are never returned.

> Example responses

> 200 Response

```json
{
  "identityProviders": [
    {
      "name": "string",
      "type": "TYPE_UNSPECIFIED",
      "title": "string",
      "identifierFilter": "string",
      "config": {
        "oauth2Config": {
          "clientId": "string",
          "clientSecret": "string",
          "authUrl": "string",
          "tokenUrl": "string",
          "userInfoUrl": "string",
          "scopes": [
            "string"
          ],
          "fieldMapping": {
            "identifier": "string",
            "displayName": "string",
            "email": "string",
            "avatarUrl": "string"
          }
        }
      }
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="identityproviderservicelistidentityproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListIdentityProvidersResponse](#schemalistidentityprovidersresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## IdentityProviderService_CreateIdentityProvider

<a id="opIdIdentityProviderService_CreateIdentityProvider"></a>

> Code samples

```bash
curl http://localhost:5230/api/identity-providers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "type": "TYPE_UNSPECIFIED",
    "title": "string",
    "identifierFilter": "string",
    "config": {
      "oauth2Config": {
        "clientId": "string",
        "clientSecret": "string",
        "authUrl": "string",
        "tokenUrl": "string",
        "userInfoUrl": "string",
        "scopes": [
          "string"
        ],
        "fieldMapping": {
          "identifier": "string",
          "displayName": "string",
          "email": "string",
          "avatarUrl": "string"
        }
      }
    }
  }'
```

`POST /api/identity-providers`

CreateIdentityProvider creates an identity provider.
 Requires the admin role. Fails with FAILED_PRECONDITION when the ID belongs to a provider configured by the
 deployment.

> Body parameter

```json
{
  "name": "string",
  "type": "TYPE_UNSPECIFIED",
  "title": "string",
  "identifierFilter": "string",
  "config": {
    "oauth2Config": {
      "clientId": "string",
      "clientSecret": "string",
      "authUrl": "string",
      "tokenUrl": "string",
      "userInfoUrl": "string",
      "scopes": [
        "string"
      ],
      "fieldMapping": {
        "identifier": "string",
        "displayName": "string",
        "email": "string",
        "avatarUrl": "string"
      }
    }
  }
}
```

<h3 id="identityproviderservicecreateidentityprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identityProviderId|query|string|false|Optional. The ID to use for the identity provider, which becomes the final component of the resource name.<br> If empty, the server generates one.<br> Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$|
|body|body|[IdentityProvider](#schemaidentityprovider)|true|none|
|» name|body|string|false|Identifier. The resource name of the identity provider.<br> Format: identity-providers/{idp}|
|» type|body|string(enum)|true|Required. The type of the identity provider.|
|» title|body|string|true|Required. The display title of the identity provider.|
|» identifierFilter|body|string|false|Optional. A regular expression the user identifier must match to sign in. Empty allows every identifier.|
|» config|body|object|true|Required. The type-specific configuration of the identity provider.|
|» » oauth2Config|body|object|false|The configuration of an OAuth2 identity provider.|
|» » » clientId|body|string|false|The OAuth2 client ID.|
|» » » clientSecret|body|string|false|The OAuth2 client secret. Write-only: it is never returned in responses.|
|» » » authUrl|body|string|false|The authorization endpoint URL.|
|» » » tokenUrl|body|string|false|The token endpoint URL, used to exchange the authorization code for an access token.|
|» » » userInfoUrl|body|string|false|The user info endpoint URL, used to fetch the claims of the signed-in user.|
|» » » scopes|body|[string]|false|The scopes to request.|
|» » » fieldMapping|body|object|false|How user info claims map to user fields.|
|» » » » identifier|body|string|false|The claim that uniquely identifies the user. Sign-in fails when it is missing or empty.|
|» » » » displayName|body|string|false|The claim used as the display name. Falls back to the identifier when unset.|
|» » » » email|body|string|false|The claim used as the email address.|
|» » » » avatarUrl|body|string|false|The claim used as the avatar URL.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|TYPE_UNSPECIFIED|
|» type|OAUTH2|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "TYPE_UNSPECIFIED",
  "title": "string",
  "identifierFilter": "string",
  "config": {
    "oauth2Config": {
      "clientId": "string",
      "clientSecret": "string",
      "authUrl": "string",
      "tokenUrl": "string",
      "userInfoUrl": "string",
      "scopes": [
        "string"
      ],
      "fieldMapping": {
        "identifier": "string",
        "displayName": "string",
        "email": "string",
        "avatarUrl": "string"
      }
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="identityproviderservicecreateidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IdentityProvider](#schemaidentityprovider)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## IdentityProviderService_GetIdentityProvider

<a id="opIdIdentityProviderService_GetIdentityProvider"></a>

> Code samples

```bash
curl http://localhost:5230/api/identity-providers/string \
  -H 'Accept: application/json'
```

`GET /api/identity-providers/{identity-provider}`

GetIdentityProvider gets an identity provider.
 The client secret is never returned.

<h3 id="identityproviderservicegetidentityprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identity-provider|path|string|true|The identity-provider id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "TYPE_UNSPECIFIED",
  "title": "string",
  "identifierFilter": "string",
  "config": {
    "oauth2Config": {
      "clientId": "string",
      "clientSecret": "string",
      "authUrl": "string",
      "tokenUrl": "string",
      "userInfoUrl": "string",
      "scopes": [
        "string"
      ],
      "fieldMapping": {
        "identifier": "string",
        "displayName": "string",
        "email": "string",
        "avatarUrl": "string"
      }
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="identityproviderservicegetidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IdentityProvider](#schemaidentityprovider)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## IdentityProviderService_DeleteIdentityProvider

<a id="opIdIdentityProviderService_DeleteIdentityProvider"></a>

> Code samples

```bash
curl http://localhost:5230/api/identity-providers/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/identity-providers/{identity-provider}`

DeleteIdentityProvider deletes an identity provider.
 Requires the admin role. Providers configured by the deployment cannot be deleted. Fails with
 FAILED_PRECONDITION when password sign-in is disabled for regular users and no other effective provider remains.

<h3 id="identityproviderservicedeleteidentityprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identity-provider|path|string|true|The identity-provider id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="identityproviderservicedeleteidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## IdentityProviderService_UpdateIdentityProvider

<a id="opIdIdentityProviderService_UpdateIdentityProvider"></a>

> Code samples

```bash
curl http://localhost:5230/api/identity-providers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "type": "TYPE_UNSPECIFIED",
    "title": "string",
    "identifierFilter": "string",
    "config": {
      "oauth2Config": {
        "clientId": "string",
        "clientSecret": "string",
        "authUrl": "string",
        "tokenUrl": "string",
        "userInfoUrl": "string",
        "scopes": [
          "string"
        ],
        "fieldMapping": {
          "identifier": "string",
          "displayName": "string",
          "email": "string",
          "avatarUrl": "string"
        }
      }
    }
  }'
```

`PATCH /api/identity-providers/{identity-provider}`

UpdateIdentityProvider updates an identity provider.
 Requires the admin role. Providers configured by the deployment cannot be updated.

> Body parameter

```json
{
  "name": "string",
  "type": "TYPE_UNSPECIFIED",
  "title": "string",
  "identifierFilter": "string",
  "config": {
    "oauth2Config": {
      "clientId": "string",
      "clientSecret": "string",
      "authUrl": "string",
      "tokenUrl": "string",
      "userInfoUrl": "string",
      "scopes": [
        "string"
      ],
      "fieldMapping": {
        "identifier": "string",
        "displayName": "string",
        "email": "string",
        "avatarUrl": "string"
      }
    }
  }
}
```

<h3 id="identityproviderserviceupdateidentityprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identity-provider|path|string|true|The identity-provider id.|
|updateMask|query|string(field-mask)|false|Required. The fields to update. Supported paths: title, identifier_filter, config; other paths are ignored.<br> An empty OAuth2 client secret in config keeps the stored secret.|
|body|body|[IdentityProvider](#schemaidentityprovider)|true|none|
|» name|body|string|false|Identifier. The resource name of the identity provider.<br> Format: identity-providers/{idp}|
|» type|body|string(enum)|true|Required. The type of the identity provider.|
|» title|body|string|true|Required. The display title of the identity provider.|
|» identifierFilter|body|string|false|Optional. A regular expression the user identifier must match to sign in. Empty allows every identifier.|
|» config|body|object|true|Required. The type-specific configuration of the identity provider.|
|» » oauth2Config|body|object|false|The configuration of an OAuth2 identity provider.|
|» » » clientId|body|string|false|The OAuth2 client ID.|
|» » » clientSecret|body|string|false|The OAuth2 client secret. Write-only: it is never returned in responses.|
|» » » authUrl|body|string|false|The authorization endpoint URL.|
|» » » tokenUrl|body|string|false|The token endpoint URL, used to exchange the authorization code for an access token.|
|» » » userInfoUrl|body|string|false|The user info endpoint URL, used to fetch the claims of the signed-in user.|
|» » » scopes|body|[string]|false|The scopes to request.|
|» » » fieldMapping|body|object|false|How user info claims map to user fields.|
|» » » » identifier|body|string|false|The claim that uniquely identifies the user. Sign-in fails when it is missing or empty.|
|» » » » displayName|body|string|false|The claim used as the display name. Falls back to the identifier when unset.|
|» » » » email|body|string|false|The claim used as the email address.|
|» » » » avatarUrl|body|string|false|The claim used as the avatar URL.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|TYPE_UNSPECIFIED|
|» type|OAUTH2|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "TYPE_UNSPECIFIED",
  "title": "string",
  "identifierFilter": "string",
  "config": {
    "oauth2Config": {
      "clientId": "string",
      "clientSecret": "string",
      "authUrl": "string",
      "tokenUrl": "string",
      "userInfoUrl": "string",
      "scopes": [
        "string"
      ],
      "fieldMapping": {
        "identifier": "string",
        "displayName": "string",
        "email": "string",
        "avatarUrl": "string"
      }
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="identityproviderserviceupdateidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IdentityProvider](#schemaidentityprovider)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-instanceservice">InstanceService</h1>

InstanceService exposes the instance profile, instance-wide settings and usage statistics.

## InstanceService_GetConfigurationStatus

<a id="opIdInstanceService_GetConfigurationStatus"></a>

> Code samples

```bash
curl http://localhost:5230/api/instance/configuration \
  -H 'Accept: application/json'
```

`GET /api/instance/configuration`

GetConfigurationStatus gets what declarative configuration manages: the managed resources and the last apply.
 Admin only. It carries resource names and field paths, never a configured value.

> Example responses

> 200 Response

```json
{
  "serial": "string",
  "configDigest": "string",
  "appliedBy": "string",
  "version": "string",
  "managedResources": [
    {
      "resource": "string",
      "source": "string",
      "managedFields": [
        "string"
      ],
      "ignoredFields": [
        "string"
      ]
    }
  ],
  "applyTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="instanceservicegetconfigurationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ConfigurationStatus](#schemaconfigurationstatus)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## InstanceService_GetInstanceProfile

<a id="opIdInstanceService_GetInstanceProfile"></a>

> Code samples

```bash
curl http://localhost:5230/api/instance/profile \
  -H 'Accept: application/json'
```

`GET /api/instance/profile`

GetInstanceProfile gets the instance profile. Available without authentication, including on a private instance.

> Example responses

> 200 Response

```json
{
  "version": "string",
  "commit": "string",
  "demo": true,
  "instanceUrl": "string",
  "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED",
  "needsSetup": true,
  "admin": {
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  },
  "challenge": {
    "provider": "string",
    "siteKey": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="instanceservicegetinstanceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InstanceProfile](#schemainstanceprofile)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## InstanceService_TestInstanceEmailSetting

<a id="opIdInstanceService_TestInstanceEmailSetting"></a>

> Code samples

```bash
curl http://localhost:5230/api/instance/settings/notification:testEmail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": {
      "enabled": true,
      "smtpHost": "string",
      "smtpPort": 0,
      "smtpUsername": "string",
      "smtpPassword": "string",
      "useTls": true,
      "useSsl": true,
      "fromEmail": "string",
      "fromName": "string",
      "replyTo": "string"
    },
    "recipientEmail": "string"
  }'
```

`POST /api/instance/settings/notification:testEmail`

TestInstanceEmailSetting sends a test email with the provided or stored SMTP settings. Admin only.

> Body parameter

```json
{
  "email": {
    "enabled": true,
    "smtpHost": "string",
    "smtpPort": 0,
    "smtpUsername": "string",
    "smtpPassword": "string",
    "useTls": true,
    "useSsl": true,
    "fromEmail": "string",
    "fromName": "string",
    "replyTo": "string"
  },
  "recipientEmail": "string"
}
```

<h3 id="instanceservicetestinstanceemailsetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TestInstanceEmailSettingRequest](#schematestinstanceemailsettingrequest)|true|none|
|» email|body|object|false|Optional. The SMTP settings to test. If omitted, the stored notification email setting is used. An empty<br> password reuses the stored password when the connection settings are unchanged.|
|» » enabled|body|boolean|false|Whether email notifications are enabled.|
|» » smtpHost|body|string|false|The SMTP server host.|
|» » smtpPort|body|integer(int32)|false|The SMTP server port.|
|» » smtpUsername|body|string|false|The SMTP username.|
|» » smtpPassword|body|string|false|Input only. The SMTP password. Never returned. An empty value keeps the stored password, unless the host,<br> port, username or encryption settings change.|
|» » useTls|body|boolean|false|Whether to use STARTTLS.|
|» » useSsl|body|boolean|false|Whether to use implicit SSL/TLS.|
|» » fromEmail|body|string|false|The sender email address.|
|» » fromName|body|string|false|The sender display name.|
|» » replyTo|body|string|false|The Reply-To email address.|
|» recipientEmail|body|string|false|Optional. The recipient email address. If omitted, the current user's email address is used.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="instanceservicetestinstanceemailsetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## InstanceService_BatchGetInstanceSettings

<a id="opIdInstanceService_BatchGetInstanceSettings"></a>

> Code samples

```bash
curl http://localhost:5230/api/instance/settings:batchGet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "names": [
      "string"
    ]
  }'
```

`POST /api/instance/settings:batchGet`

BatchGetInstanceSettings gets up to 100 instance settings in request order, with the same access rules as
 GetInstanceSetting. The call fails if any setting cannot be returned.

> Body parameter

```json
{
  "names": [
    "string"
  ]
}
```

<h3 id="instanceservicebatchgetinstancesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchGetInstanceSettingsRequest](#schemabatchgetinstancesettingsrequest)|true|none|
|» names|body|[string]|true|Required. The resource names of the instance settings. At most 100.<br> Format: instance/settings/{setting}|

> Example responses

> 200 Response

```json
{
  "instanceSettings": [
    {
      "name": "string",
      "generalSetting": {
        "customProfile": {
          "title": "string",
          "description": "string",
          "logoUrl": "string"
        },
        "disallowUserRegistration": true,
        "disallowPasswordAuth": true,
        "disallowChangeUsername": true,
        "disallowChangeNickname": true,
        "weekStartDayOffset": 0,
        "additionalStyle": "string",
        "additionalScript": "string"
      },
      "storageSetting": {
        "storages": [
          {
            "id": "string",
            "name": "string",
            "type": "STORAGE_TYPE_UNSPECIFIED",
            "s3Config": {
              "endpoint": "string",
              "region": "string",
              "bucket": "string",
              "accessKeyId": "string",
              "usePathStyle": true,
              "insecureSkipTlsVerify": true
            }
          }
        ],
        "defaultStorageId": "string",
        "filepathTemplate": "string",
        "storageType": "STORAGE_TYPE_UNSPECIFIED",
        "s3Config": {
          "endpoint": "string",
          "region": "string",
          "bucket": "string",
          "accessKeyId": "string",
          "usePathStyle": true,
          "insecureSkipTlsVerify": true
        }
      },
      "tagsSetting": {
        "tags": {
          "property1": {
            "backgroundColor": {
              "red": 0,
              "green": 0,
              "blue": 0,
              "alpha": 0
            },
            "blurContent": true
          },
          "property2": {
            "backgroundColor": {
              "red": 0,
              "green": 0,
              "blue": 0,
              "alpha": 0
            },
            "blurContent": true
          }
        }
      },
      "notificationSetting": {
        "email": {
          "enabled": true,
          "smtpHost": "string",
          "smtpPort": 0,
          "smtpUsername": "string",
          "useTls": true,
          "useSsl": true,
          "fromEmail": "string",
          "fromName": "string",
          "replyTo": "string"
        }
      },
      "aiSetting": {
        "providers": [
          {
            "id": "string",
            "title": "string",
            "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
            "endpoint": "string",
            "apiKeySet": true,
            "apiKeyHint": "string"
          }
        ],
        "transcription": {
          "providerId": "string",
          "model": "string",
          "language": "string",
          "prompt": "string"
        }
      },
      "accessSetting": {
        "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED"
      },
      "usageLimitsSetting": {
        "limits": [
          {
            "users": [
              "string"
            ],
            "allUsers": true,
            "memoCount": "string",
            "memoContentBytes": "string",
            "storageBytes": "string",
            "uploadBytes": "string"
          }
        ]
      }
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="instanceservicebatchgetinstancesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchGetInstanceSettingsResponse](#schemabatchgetinstancesettingsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## InstanceService_GetInstanceStats

<a id="opIdInstanceService_GetInstanceStats"></a>

> Code samples

```bash
curl http://localhost:5230/api/instance/stats \
  -H 'Accept: application/json'
```

`GET /api/instance/stats`

GetInstanceStats gets resource usage statistics for the instance. Admin only. Results are cached for 60 seconds.

> Example responses

> 200 Response

```json
{
  "database": {
    "driver": "string",
    "sizeBytes": "string"
  },
  "localStorageBytes": "string",
  "generatedTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="instanceservicegetinstancestats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InstanceStats](#schemainstancestats)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## InstanceService_GetInstanceSetting

<a id="opIdInstanceService_GetInstanceSetting"></a>

> Code samples

```bash
curl 'http://localhost:5230/api/instance/string/*' \
  -H 'Accept: application/json'
```

`GET /api/instance/{instance}/*`

GetInstanceSetting gets an instance setting. Available without authentication, except STORAGE and NOTIFICATION,
 which are admin only, and AI, which requires a signed-in user and hides transcription defaults from non-admins.

<h3 id="instanceservicegetinstancesetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instance|path|string|true|The instance id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "generalSetting": {
    "customProfile": {
      "title": "string",
      "description": "string",
      "logoUrl": "string"
    },
    "disallowUserRegistration": true,
    "disallowPasswordAuth": true,
    "disallowChangeUsername": true,
    "disallowChangeNickname": true,
    "weekStartDayOffset": 0,
    "additionalStyle": "string",
    "additionalScript": "string"
  },
  "storageSetting": {
    "storages": [
      {
        "id": "string",
        "name": "string",
        "type": "STORAGE_TYPE_UNSPECIFIED",
        "s3Config": {
          "endpoint": "string",
          "region": "string",
          "bucket": "string",
          "accessKeyId": "string",
          "usePathStyle": true,
          "insecureSkipTlsVerify": true
        }
      }
    ],
    "defaultStorageId": "string",
    "filepathTemplate": "string",
    "storageType": "STORAGE_TYPE_UNSPECIFIED",
    "s3Config": {
      "endpoint": "string",
      "region": "string",
      "bucket": "string",
      "accessKeyId": "string",
      "usePathStyle": true,
      "insecureSkipTlsVerify": true
    }
  },
  "tagsSetting": {
    "tags": {
      "property1": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      },
      "property2": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      }
    }
  },
  "notificationSetting": {
    "email": {
      "enabled": true,
      "smtpHost": "string",
      "smtpPort": 0,
      "smtpUsername": "string",
      "useTls": true,
      "useSsl": true,
      "fromEmail": "string",
      "fromName": "string",
      "replyTo": "string"
    }
  },
  "aiSetting": {
    "providers": [
      {
        "id": "string",
        "title": "string",
        "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
        "endpoint": "string",
        "apiKeySet": true,
        "apiKeyHint": "string"
      }
    ],
    "transcription": {
      "providerId": "string",
      "model": "string",
      "language": "string",
      "prompt": "string"
    }
  },
  "accessSetting": {
    "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED"
  },
  "usageLimitsSetting": {
    "limits": [
      {
        "users": [
          "string"
        ],
        "allUsers": true,
        "memoCount": "string",
        "memoContentBytes": "string",
        "storageBytes": "string",
        "uploadBytes": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="instanceservicegetinstancesetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InstanceSetting](#schemainstancesetting)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## InstanceService_UpdateInstanceSetting

<a id="opIdInstanceService_UpdateInstanceSetting"></a>

> Code samples

```bash
curl 'http://localhost:5230/api/instance/string/*' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "generalSetting": {
      "customProfile": {
        "title": "string",
        "description": "string",
        "logoUrl": "string"
      },
      "disallowUserRegistration": true,
      "disallowPasswordAuth": true,
      "disallowChangeUsername": true,
      "disallowChangeNickname": true,
      "weekStartDayOffset": 0,
      "additionalStyle": "string",
      "additionalScript": "string"
    },
    "storageSetting": {
      "storages": [
        {
          "id": "string",
          "name": "string",
          "type": "STORAGE_TYPE_UNSPECIFIED",
          "s3Config": {
            "endpoint": "string",
            "region": "string",
            "bucket": "string",
            "accessKeyId": "string",
            "accessKeySecret": "string",
            "usePathStyle": true,
            "insecureSkipTlsVerify": true
          }
        }
      ],
      "defaultStorageId": "string",
      "filepathTemplate": "string",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "s3Config": {
        "endpoint": "string",
        "region": "string",
        "bucket": "string",
        "accessKeyId": "string",
        "accessKeySecret": "string",
        "usePathStyle": true,
        "insecureSkipTlsVerify": true
      }
    },
    "tagsSetting": {
      "tags": {
        "property1": {
          "backgroundColor": {
            "red": 0,
            "green": 0,
            "blue": 0,
            "alpha": 0
          },
          "blurContent": true
        },
        "property2": {
          "backgroundColor": {
            "red": 0,
            "green": 0,
            "blue": 0,
            "alpha": 0
          },
          "blurContent": true
        }
      }
    },
    "notificationSetting": {
      "email": {
        "enabled": true,
        "smtpHost": "string",
        "smtpPort": 0,
        "smtpUsername": "string",
        "smtpPassword": "string",
        "useTls": true,
        "useSsl": true,
        "fromEmail": "string",
        "fromName": "string",
        "replyTo": "string"
      }
    },
    "aiSetting": {
      "providers": [
        {
          "id": "string",
          "title": "string",
          "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
          "endpoint": "string",
          "apiKey": "string"
        }
      ],
      "transcription": {
        "providerId": "string",
        "model": "string",
        "language": "string",
        "prompt": "string"
      }
    },
    "accessSetting": {
      "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED"
    },
    "usageLimitsSetting": {
      "limits": [
        {
          "users": [
            "string"
          ],
          "allUsers": true,
          "memoCount": "string",
          "memoContentBytes": "string",
          "storageBytes": "string",
          "uploadBytes": "string"
        }
      ]
    }
  }'
```

`PATCH /api/instance/{instance}/*`

UpdateInstanceSetting replaces an instance setting. Admin only. Fields declarative configuration manages cannot be
 changed. Empty write-only credentials keep the stored values.

> Body parameter

```json
{
  "name": "string",
  "generalSetting": {
    "customProfile": {
      "title": "string",
      "description": "string",
      "logoUrl": "string"
    },
    "disallowUserRegistration": true,
    "disallowPasswordAuth": true,
    "disallowChangeUsername": true,
    "disallowChangeNickname": true,
    "weekStartDayOffset": 0,
    "additionalStyle": "string",
    "additionalScript": "string"
  },
  "storageSetting": {
    "storages": [
      {
        "id": "string",
        "name": "string",
        "type": "STORAGE_TYPE_UNSPECIFIED",
        "s3Config": {
          "endpoint": "string",
          "region": "string",
          "bucket": "string",
          "accessKeyId": "string",
          "accessKeySecret": "string",
          "usePathStyle": true,
          "insecureSkipTlsVerify": true
        }
      }
    ],
    "defaultStorageId": "string",
    "filepathTemplate": "string",
    "storageType": "STORAGE_TYPE_UNSPECIFIED",
    "s3Config": {
      "endpoint": "string",
      "region": "string",
      "bucket": "string",
      "accessKeyId": "string",
      "accessKeySecret": "string",
      "usePathStyle": true,
      "insecureSkipTlsVerify": true
    }
  },
  "tagsSetting": {
    "tags": {
      "property1": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      },
      "property2": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      }
    }
  },
  "notificationSetting": {
    "email": {
      "enabled": true,
      "smtpHost": "string",
      "smtpPort": 0,
      "smtpUsername": "string",
      "smtpPassword": "string",
      "useTls": true,
      "useSsl": true,
      "fromEmail": "string",
      "fromName": "string",
      "replyTo": "string"
    }
  },
  "aiSetting": {
    "providers": [
      {
        "id": "string",
        "title": "string",
        "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
        "endpoint": "string",
        "apiKey": "string"
      }
    ],
    "transcription": {
      "providerId": "string",
      "model": "string",
      "language": "string",
      "prompt": "string"
    }
  },
  "accessSetting": {
    "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED"
  },
  "usageLimitsSetting": {
    "limits": [
      {
        "users": [
          "string"
        ],
        "allUsers": true,
        "memoCount": "string",
        "memoContentBytes": "string",
        "storageBytes": "string",
        "uploadBytes": "string"
      }
    ]
  }
}
```

<h3 id="instanceserviceupdateinstancesetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instance|path|string|true|The instance id.|
|updateMask|query|string(field-mask)|false|Optional. The list of fields to update. Currently ignored; the whole setting is replaced.|
|body|body|[InstanceSetting](#schemainstancesetting)|true|none|
|» name|body|string|false|Identifier. The resource name of the instance setting. {setting} is a Key value, such as GENERAL.<br> Format: instance/settings/{setting}|
|» generalSetting|body|object|false|The value of the GENERAL setting.|
|» » customProfile|body|object|false|Branding shown in the web app.|
|» » » title|body|string|false|The instance title.|
|» » » description|body|string|false|The instance description.|
|» » » logoUrl|body|string|false|The URL of the instance logo.|
|» » disallowUserRegistration|body|boolean|false|Whether user self-registration is disabled.|
|» » disallowPasswordAuth|body|boolean|false|Whether password authentication is disabled.|
|» » disallowChangeUsername|body|boolean|false|Whether users are prevented from changing their username.|
|» » disallowChangeNickname|body|boolean|false|Whether users are prevented from changing their nickname.|
|» » weekStartDayOffset|body|integer(int32)|false|The first day of the week as an offset from Sunday.<br> 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday.<br> Default is Sunday.|
|» » additionalStyle|body|string|false|Custom CSS injected into the web app.|
|» » additionalScript|body|string|false|Custom JavaScript injected into the web app.|
|» storageSetting|body|object|false|The value of the STORAGE setting.|
|» » storages|body|[[InstanceSetting_Storage](#schemainstancesetting_storage)]|false|Configured storage instances, including inactive instances still referenced by attachments.|
|» » defaultStorageId|body|string|false|The ID of the storage used for new attachments.|
|» » filepathTemplate|body|string|false|The template of attachment file paths.<br> Default is assets/{timestamp}_{uuid}_{filename}.|
|» » storageType|body|string(enum)|false|Legacy compatibility field. New clients use default_storage_id.|
|» » s3Config|body|object|false|Legacy compatibility field. New clients use storages.|
|» » » endpoint|body|string|false|The S3 endpoint URL.|
|» » » region|body|string|false|The S3 region.|
|» » » bucket|body|string|false|The S3 bucket.|
|» » » accessKeyId|body|string|false|The S3 access key ID.|
|» » » accessKeySecret|body|string|false|Input only. The S3 access key secret. Never returned; an empty value keeps the stored secret.|
|» » » usePathStyle|body|boolean|false|Whether to use path-style addressing instead of virtual-hosted-style.|
|» » » insecureSkipTlsVerify|body|boolean|false|Whether to skip TLS certificate verification when connecting to the S3 endpoint.<br> Only enable this for trusted endpoints that use a self-signed certificate; it removes protection against<br> man-in-the-middle attacks.|
|» tagsSetting|body|object|false|The value of the TAGS setting.|
|» » tags|body|object|false|Map of tag name pattern to tag metadata.<br> Each key is treated as an anchored regular expression (^pattern$), so a single entry like "project/.*" matches<br> all tags under that prefix. Exact tag names are also valid.|
|» » » **additionalProperties**|body|[InstanceSetting_TagMetadata](#schemainstancesetting_tagmetadata)|false|TagMetadata is the display metadata for a tag.|
|» notificationSetting|body|object|false|The value of the NOTIFICATION setting.|
|» » email|body|object|false|The email delivery configuration.|
|» » » enabled|body|boolean|false|Whether email notifications are enabled.|
|» » » smtpHost|body|string|false|The SMTP server host.|
|» » » smtpPort|body|integer(int32)|false|The SMTP server port.|
|» » » smtpUsername|body|string|false|The SMTP username.|
|» » » smtpPassword|body|string|false|Input only. The SMTP password. Never returned. An empty value keeps the stored password, unless the host,<br> port, username or encryption settings change.|
|» » » useTls|body|boolean|false|Whether to use STARTTLS.|
|» » » useSsl|body|boolean|false|Whether to use implicit SSL/TLS.|
|» » » fromEmail|body|string|false|The sender email address.|
|» » » fromName|body|string|false|The sender display name.|
|» » » replyTo|body|string|false|The Reply-To email address.|
|» aiSetting|body|object|false|The value of the AI setting.|
|» » providers|body|[[InstanceSetting_AIProviderConfig](#schemainstancesetting_aiproviderconfig)]|false|The AI provider configurations available instance-wide.|
|» » transcription|body|object|false|The speech-to-text feature configuration.<br> When unset or transcription.provider_id is empty, transcription is disabled. An update that omits it keeps the<br> stored configuration.|
|» » » providerId|body|string|false|The ID of the provider used for transcription; must reference an entry in AISetting.providers.<br> Empty means transcription is disabled.|
|» » » model|body|string|false|The provider-specific model identifier. Hidden from non-admins.<br> Empty falls back to the engine default (whisper-1 for OPENAI providers, gemini-2.5-flash for GEMINI providers).|
|» » » language|body|string|false|The default ISO 639-1 language hint sent to the provider. Hidden from non-admins.<br> Empty lets the provider auto-detect.|
|» » » prompt|body|string|false|A default spelling and vocabulary hint passed to the provider. Hidden from non-admins.|
|» accessSetting|body|object|false|The value of the ACCESS setting.|
|» » accessMode|body|string(enum)|false|Whether unauthenticated users may access instance content. Must be PRIVATE or PUBLIC on update.|
|» usageLimitsSetting|body|object|false|The value of the USAGE_LIMITS setting.|
|» » limits|body|[[UsageLimitsSetting_UsageLimit](#schemausagelimitssetting_usagelimit)]|false|The entries, in the order they are checked. At most 100, naming at most<br> 1,000 users in all.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » storageType|STORAGE_TYPE_UNSPECIFIED|
|» » storageType|DATABASE|
|» » storageType|LOCAL|
|» » storageType|S3|
|» » accessMode|INSTANCE_ACCESS_MODE_UNSPECIFIED|
|» » accessMode|INSTANCE_ACCESS_MODE_PRIVATE|
|» » accessMode|INSTANCE_ACCESS_MODE_PUBLIC|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "generalSetting": {
    "customProfile": {
      "title": "string",
      "description": "string",
      "logoUrl": "string"
    },
    "disallowUserRegistration": true,
    "disallowPasswordAuth": true,
    "disallowChangeUsername": true,
    "disallowChangeNickname": true,
    "weekStartDayOffset": 0,
    "additionalStyle": "string",
    "additionalScript": "string"
  },
  "storageSetting": {
    "storages": [
      {
        "id": "string",
        "name": "string",
        "type": "STORAGE_TYPE_UNSPECIFIED",
        "s3Config": {
          "endpoint": "string",
          "region": "string",
          "bucket": "string",
          "accessKeyId": "string",
          "usePathStyle": true,
          "insecureSkipTlsVerify": true
        }
      }
    ],
    "defaultStorageId": "string",
    "filepathTemplate": "string",
    "storageType": "STORAGE_TYPE_UNSPECIFIED",
    "s3Config": {
      "endpoint": "string",
      "region": "string",
      "bucket": "string",
      "accessKeyId": "string",
      "usePathStyle": true,
      "insecureSkipTlsVerify": true
    }
  },
  "tagsSetting": {
    "tags": {
      "property1": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      },
      "property2": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      }
    }
  },
  "notificationSetting": {
    "email": {
      "enabled": true,
      "smtpHost": "string",
      "smtpPort": 0,
      "smtpUsername": "string",
      "useTls": true,
      "useSsl": true,
      "fromEmail": "string",
      "fromName": "string",
      "replyTo": "string"
    }
  },
  "aiSetting": {
    "providers": [
      {
        "id": "string",
        "title": "string",
        "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
        "endpoint": "string",
        "apiKeySet": true,
        "apiKeyHint": "string"
      }
    ],
    "transcription": {
      "providerId": "string",
      "model": "string",
      "language": "string",
      "prompt": "string"
    }
  },
  "accessSetting": {
    "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED"
  },
  "usageLimitsSetting": {
    "limits": [
      {
        "users": [
          "string"
        ],
        "allUsers": true,
        "memoCount": "string",
        "memoContentBytes": "string",
        "storageBytes": "string",
        "uploadBytes": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="instanceserviceupdateinstancesetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InstanceSetting](#schemainstancesetting)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-memoservice">MemoService</h1>

MemoService manages memos and their attachments, relations, comments,
 reactions, and share links.

## MemoService_ListMemos

<a id="opIdMemoService_ListMemos"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos \
  -H 'Accept: application/json'
```

`GET /api/memos`

ListMemos lists the memos the caller can read, comments included. Narrow
 to top-level memos with the filter `parent == null`. Anonymous callers can
 list only when the instance allows public access.

<h3 id="memoservicelistmemos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer(int32)|false|Optional. The maximum number of memos to return. The service may return<br> fewer. Defaults to 50; values above 1000 are coerced to 1000.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the<br> next page.|
|filter|query|string|false|Optional. A CEL expression to filter memos. Combine terms with && and \|\|.<br> Available fields:<br>   name (string resource name; match several with<br>     `name in ["memos/abc", "memos/def"]`),<br>   content (string), creator (string, e.g. "users/1"),<br>   created_ts / updated_ts (timestamp), pinned (bool),<br>   visibility (string: PRIVATE \| PROTECTED \| PUBLIC \| SPACE),<br>   space (string resource name, or null when the memo has no space;<br>     supports == and comparisons against null, e.g. space != null),<br>   parent (string resource name of the memo this one comments on, or null<br>     for a top-level memo; supports == and comparisons against null),<br>   tags (list<string>; match with `"work" in tags`, not `tag == "work"`),<br>   has_task_list / has_link / has_code / has_incomplete_tasks (bool),<br>   has_location (bool; true when the memo has a location attached),<br>   has_attachments (bool; true when a file is attached to the memo),<br>   has_image (bool; true when the content contains a Markdown image or an<br>     image file is attached).<br> Note: the time fields here are created_ts / updated_ts, which differ from<br> the create_time / update_time names used by order_by.<br> Examples:<br>   pinned == true && visibility == "PUBLIC"<br>   space == "spaces/team" or space == null<br>   parent == null (top-level memos only)<br>   parent == "memos/abc" (the comments on one memo)<br>   tags.exists(t, t == "urgent")<br>   content.contains("roadmap") && created_ts > now - duration("168h")|
|orderBy|query|string|false|Optional. The order to sort results by, as a comma-separated list of<br> fields following AIP-132. Defaults to "create_time desc".<br> Supported fields: pinned, create_time, update_time, name.<br> Example: "pinned desc, create_time desc" or "update_time asc".<br> Note: order_by uses create_time / update_time, while the filter<br> expression uses created_ts / updated_ts for the same timestamps.|
|showDeleted|query|boolean|false|Optional. Whether to include deleted memos. Currently ignored by the<br> server.|
|state|query|string(enum)|false|Optional. The state of the memos to list. Defaults to NORMAL. Set to<br> ARCHIVED to list the caller's own archived memos.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NORMAL|
|state|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "memos": [
    {
      "name": "string",
      "creator": "string",
      "space": "string",
      "content": "string",
      "location": {
        "placeholder": "string",
        "latitude": 0,
        "longitude": 0
      },
      "visibility": "VISIBILITY_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "pinned": true,
      "attachments": [
        {
          "name": "string",
          "creator": "string",
          "filename": "string",
          "type": "string",
          "externalLink": "string",
          "motionMedia": {
            "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
            "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
            "groupId": "string",
            "presentationTimestampUs": "string",
            "hasEmbeddedVideo": true
          },
          "mediaMetadata": {
            "width": 0,
            "height": 0,
            "photo": {
              "captureTime": {
                "localDateTime": "string",
                "utcOffset": "string"
              },
              "location": {
                "latitude": 0,
                "longitude": 0,
                "altitudeMeters": 0
              },
              "sourceExifOrientation": 0,
              "cameraMake": "string",
              "cameraModel": "string",
              "lensModel": "string",
              "fNumber": 0,
              "exposureTimeSeconds": 0,
              "iso": 0,
              "focalLengthMm": 0
            },
            "video": {
              "durationSeconds": 0
            }
          },
          "memo": "string",
          "size": "string",
          "createTime": "1970-01-01T00:00:00Z"
        }
      ],
      "relations": [
        {
          "memo": {
            "name": "string",
            "snippet": "string"
          },
          "relatedMemo": {
            "name": "string",
            "snippet": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "reactions": [
        {
          "name": "string",
          "creator": "string",
          "reactionType": "string",
          "createTime": "1970-01-01T00:00:00Z"
        }
      ],
      "parent": "string",
      "commentCount": 0,
      "tags": [
        "string"
      ],
      "property": {
        "title": "string",
        "hasLink": true,
        "hasCode": true,
        "hasTaskList": true,
        "hasIncompleteTasks": true,
        "hasInlineImage": true
      },
      "snippet": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicelistmemos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMemosResponse](#schemalistmemosresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_CreateMemo

<a id="opIdMemoService_CreateMemo"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "space": "string",
    "content": "string",
    "location": {
      "placeholder": "string",
      "latitude": 0,
      "longitude": 0
    },
    "visibility": "VISIBILITY_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "pinned": true,
    "attachments": [
      {
        "name": "string",
        "filename": "string",
        "type": "string",
        "content": "string",
        "externalLink": "string",
        "motionMedia": {
          "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
          "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
          "groupId": "string",
          "presentationTimestampUs": "string",
          "hasEmbeddedVideo": true
        },
        "mediaMetadata": {
          "width": 0,
          "height": 0,
          "photo": {
            "captureTime": {
              "localDateTime": "string",
              "utcOffset": "string"
            },
            "location": {
              "latitude": 0,
              "longitude": 0,
              "altitudeMeters": 0
            },
            "sourceExifOrientation": 0,
            "cameraMake": "string",
            "cameraModel": "string",
            "lensModel": "string",
            "fNumber": 0,
            "exposureTimeSeconds": 0,
            "iso": 0,
            "focalLengthMm": 0
          },
          "video": {
            "durationSeconds": 0
          }
        },
        "memo": "string"
      }
    ],
    "relations": [
      {
        "memo": {
          "name": "string"
        },
        "relatedMemo": {
          "name": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "parent": "string",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/memos`

CreateMemo creates a memo owned by the authenticated user. The request body
 is a Memo; set its Markdown content and visibility (defaults to PRIVATE).
 Set memo.parent to create a comment on that memo, which must be readable by
 the caller and not archived. Requires authentication.

> Body parameter

```json
{
  "name": "string",
  "space": "string",
  "content": "string",
  "location": {
    "placeholder": "string",
    "latitude": 0,
    "longitude": 0
  },
  "visibility": "VISIBILITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "pinned": true,
  "attachments": [
    {
      "name": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string"
    }
  ],
  "relations": [
    {
      "memo": {
        "name": "string"
      },
      "relatedMemo": {
        "name": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "parent": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="memoservicecreatememo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memoId|query|string|false|Optional. The ID to use for the memo, which becomes the final segment of<br> its resource name. If empty, a unique ID is generated.<br> Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$|
|body|body|[Memo](#schemamemo)|true|none|
|» name|body|string|false|Identifier. The resource name of the memo, where memo is the<br> user-defined UID.<br> Format: memos/{memo}|
|» space|body|string|false|Optional. The space in which the memo is placed. Every memo, including a<br> comment, owns its placement independently.<br> Format: spaces/{space}|
|» content|body|string|true|Required. The content of the memo in Markdown. Must not exceed the<br> instance's content length limit.|
|» location|body|object|false|Optional. The location of the memo.|
|» » placeholder|body|string|false|Optional. A human-readable label for the location.|
|» » latitude|body|number(double)|false|Optional. The latitude of the location.|
|» » longitude|body|number(double)|false|Optional. The longitude of the location.|
|» visibility|body|string(enum)|true|Required. The visibility of the memo. Defaults to PRIVATE on creation when<br> unspecified. SPACE requires the memo to be placed in a space.|
|» state|body|string(enum)|true|Required. The state of the memo. New memos are always NORMAL; change it<br> with UpdateMemo.|
|» pinned|body|boolean|false|Optional. Whether the memo is pinned. Ignored on creation; change it with<br> UpdateMemo.|
|» attachments|body|[[Attachment](#schemaattachment)]|false|Optional. The attachments of the memo. Setting it replaces the full set.|
|» relations|body|[[MemoRelation](#schemamemorelation)]|false|Optional. The relations of the memo in both directions.|
|» parent|body|string|false|Optional. Immutable. The memo this memo comments on. Set it on creation<br> to create a comment; unset for a top-level memo. Its identity is returned<br> even when the caller cannot read the parent, and grants no read access.<br> Format: memos/{memo}|
|» createTime|body|string(date-time)|false|Optional. The creation time. Defaults to the current time when unset on<br> creation.|
|» updateTime|body|string(date-time)|false|Optional. The last update time. Defaults to the current time when unset on<br> creation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|VISIBILITY_UNSPECIFIED|
|» visibility|PRIVATE|
|» visibility|PROTECTED|
|» visibility|PUBLIC|
|» visibility|SPACE|
|» state|STATE_UNSPECIFIED|
|» state|NORMAL|
|» state|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "creator": "string",
  "space": "string",
  "content": "string",
  "location": {
    "placeholder": "string",
    "latitude": 0,
    "longitude": 0
  },
  "visibility": "VISIBILITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "pinned": true,
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "relations": [
    {
      "memo": {
        "name": "string",
        "snippet": "string"
      },
      "relatedMemo": {
        "name": "string",
        "snippet": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "reactions": [
    {
      "name": "string",
      "creator": "string",
      "reactionType": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "parent": "string",
  "commentCount": 0,
  "tags": [
    "string"
  ],
  "property": {
    "title": "string",
    "hasLink": true,
    "hasCode": true,
    "hasTaskList": true,
    "hasIncompleteTasks": true,
    "hasInlineImage": true
  },
  "snippet": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicecreatememo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Memo](#schemamemo)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_GetLinkMetadata

<a id="opIdMemoService_GetLinkMetadata"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/-/linkMetadata \
  -H 'Accept: application/json'
```

`GET /api/memos/-/linkMetadata`

GetLinkMetadata fetches the title, description, and image of a link.

<h3 id="memoservicegetlinkmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|Required. The link URL.|

> Example responses

> 200 Response

```json
{
  "url": "string",
  "title": "string",
  "description": "string",
  "image": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicegetlinkmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LinkMetadata](#schemalinkmetadata)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_BatchGetLinkMetadata

<a id="opIdMemoService_BatchGetLinkMetadata"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/-/linkMetadata:batchGet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "urls": [
      "string"
    ]
  }'
```

`POST /api/memos/-/linkMetadata:batchGet`

BatchGetLinkMetadata fetches the metadata of up to 10 links.

> Body parameter

```json
{
  "urls": [
    "string"
  ]
}
```

<h3 id="memoservicebatchgetlinkmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchGetLinkMetadataRequest](#schemabatchgetlinkmetadatarequest)|true|none|
|» urls|body|[string]|true|Required. The link URLs. At most 10.|

> Example responses

> 200 Response

```json
{
  "linkMetadata": [
    {
      "url": "string",
      "title": "string",
      "description": "string",
      "image": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicebatchgetlinkmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchGetLinkMetadataResponse](#schemabatchgetlinkmetadataresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_GetMemo

<a id="opIdMemoService_GetMemo"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string \
  -H 'Accept: application/json'
```

`GET /api/memos/{memo}`

GetMemo gets a memo. Requires read access to the memo.

<h3 id="memoservicegetmemo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "creator": "string",
  "space": "string",
  "content": "string",
  "location": {
    "placeholder": "string",
    "latitude": 0,
    "longitude": 0
  },
  "visibility": "VISIBILITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "pinned": true,
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "relations": [
    {
      "memo": {
        "name": "string",
        "snippet": "string"
      },
      "relatedMemo": {
        "name": "string",
        "snippet": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "reactions": [
    {
      "name": "string",
      "creator": "string",
      "reactionType": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "parent": "string",
  "commentCount": 0,
  "tags": [
    "string"
  ],
  "property": {
    "title": "string",
    "hasLink": true,
    "hasCode": true,
    "hasTaskList": true,
    "hasIncompleteTasks": true,
    "hasInlineImage": true
  },
  "snippet": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicegetmemo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Memo](#schemamemo)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_DeleteMemo

<a id="opIdMemoService_DeleteMemo"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/memos/{memo}`

DeleteMemo deletes the named memo and its comment subtree, including nested
 replies and their owned resources. It removes incident relations for all
 deleted memos. Requires the memo creator or an instance administrator.

<h3 id="memoservicedeletememo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|force|query|boolean|false|Optional. Currently ignored by the server; deletion always includes the<br> comment subtree.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicedeletememo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_UpdateMemo

<a id="opIdMemoService_UpdateMemo"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "space": "string",
    "content": "string",
    "location": {
      "placeholder": "string",
      "latitude": 0,
      "longitude": 0
    },
    "visibility": "VISIBILITY_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "pinned": true,
    "attachments": [
      {
        "name": "string",
        "filename": "string",
        "type": "string",
        "content": "string",
        "externalLink": "string",
        "motionMedia": {
          "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
          "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
          "groupId": "string",
          "presentationTimestampUs": "string",
          "hasEmbeddedVideo": true
        },
        "mediaMetadata": {
          "width": 0,
          "height": 0,
          "photo": {
            "captureTime": {
              "localDateTime": "string",
              "utcOffset": "string"
            },
            "location": {
              "latitude": 0,
              "longitude": 0,
              "altitudeMeters": 0
            },
            "sourceExifOrientation": 0,
            "cameraMake": "string",
            "cameraModel": "string",
            "lensModel": "string",
            "fNumber": 0,
            "exposureTimeSeconds": 0,
            "iso": 0,
            "focalLengthMm": 0
          },
          "video": {
            "durationSeconds": 0
          }
        },
        "memo": "string"
      }
    ],
    "relations": [
      {
        "memo": {
          "name": "string"
        },
        "relatedMemo": {
          "name": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "parent": "string",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  }'
```

`PATCH /api/memos/{memo}`

UpdateMemo updates the memo fields listed in update_mask. Requires the memo
 creator or an instance administrator.

> Body parameter

```json
{
  "name": "string",
  "space": "string",
  "content": "string",
  "location": {
    "placeholder": "string",
    "latitude": 0,
    "longitude": 0
  },
  "visibility": "VISIBILITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "pinned": true,
  "attachments": [
    {
      "name": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string"
    }
  ],
  "relations": [
    {
      "memo": {
        "name": "string"
      },
      "relatedMemo": {
        "name": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "parent": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="memoserviceupdatememo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|updateMask|query|string(field-mask)|false|Required. The fields to update. Supported paths: content, visibility,<br> space, pinned, state, create_time, update_time, location, attachments,<br> relations.|
|body|body|[Memo](#schemamemo)|true|none|
|» name|body|string|false|Identifier. The resource name of the memo, where memo is the<br> user-defined UID.<br> Format: memos/{memo}|
|» space|body|string|false|Optional. The space in which the memo is placed. Every memo, including a<br> comment, owns its placement independently.<br> Format: spaces/{space}|
|» content|body|string|true|Required. The content of the memo in Markdown. Must not exceed the<br> instance's content length limit.|
|» location|body|object|false|Optional. The location of the memo.|
|» » placeholder|body|string|false|Optional. A human-readable label for the location.|
|» » latitude|body|number(double)|false|Optional. The latitude of the location.|
|» » longitude|body|number(double)|false|Optional. The longitude of the location.|
|» visibility|body|string(enum)|true|Required. The visibility of the memo. Defaults to PRIVATE on creation when<br> unspecified. SPACE requires the memo to be placed in a space.|
|» state|body|string(enum)|true|Required. The state of the memo. New memos are always NORMAL; change it<br> with UpdateMemo.|
|» pinned|body|boolean|false|Optional. Whether the memo is pinned. Ignored on creation; change it with<br> UpdateMemo.|
|» attachments|body|[[Attachment](#schemaattachment)]|false|Optional. The attachments of the memo. Setting it replaces the full set.|
|» relations|body|[[MemoRelation](#schemamemorelation)]|false|Optional. The relations of the memo in both directions.|
|» parent|body|string|false|Optional. Immutable. The memo this memo comments on. Set it on creation<br> to create a comment; unset for a top-level memo. Its identity is returned<br> even when the caller cannot read the parent, and grants no read access.<br> Format: memos/{memo}|
|» createTime|body|string(date-time)|false|Optional. The creation time. Defaults to the current time when unset on<br> creation.|
|» updateTime|body|string(date-time)|false|Optional. The last update time. Defaults to the current time when unset on<br> creation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|VISIBILITY_UNSPECIFIED|
|» visibility|PRIVATE|
|» visibility|PROTECTED|
|» visibility|PUBLIC|
|» visibility|SPACE|
|» state|STATE_UNSPECIFIED|
|» state|NORMAL|
|» state|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "creator": "string",
  "space": "string",
  "content": "string",
  "location": {
    "placeholder": "string",
    "latitude": 0,
    "longitude": 0
  },
  "visibility": "VISIBILITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "pinned": true,
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "relations": [
    {
      "memo": {
        "name": "string",
        "snippet": "string"
      },
      "relatedMemo": {
        "name": "string",
        "snippet": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "reactions": [
    {
      "name": "string",
      "creator": "string",
      "reactionType": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "parent": "string",
  "commentCount": 0,
  "tags": [
    "string"
  ],
  "property": {
    "title": "string",
    "hasLink": true,
    "hasCode": true,
    "hasTaskList": true,
    "hasIncompleteTasks": true,
    "hasInlineImage": true
  },
  "snippet": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoserviceupdatememo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Memo](#schemamemo)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_ListMemoAttachments

<a id="opIdMemoService_ListMemoAttachments"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/attachments \
  -H 'Accept: application/json'
```

`GET /api/memos/{memo}/attachments`

ListMemoAttachments lists the attachments of a memo. Requires read access
 to the memo.

<h3 id="memoservicelistmemoattachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of attachments to return. The service may<br> return fewer. Currently ignored; all attachments are returned.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the<br> next page. Currently ignored.|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicelistmemoattachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMemoAttachmentsResponse](#schemalistmemoattachmentsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_SetMemoAttachments

<a id="opIdMemoService_SetMemoAttachments"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/attachments \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "attachments": [
      {
        "name": "string",
        "filename": "string",
        "type": "string",
        "content": "string",
        "externalLink": "string",
        "motionMedia": {
          "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
          "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
          "groupId": "string",
          "presentationTimestampUs": "string",
          "hasEmbeddedVideo": true
        },
        "mediaMetadata": {
          "width": 0,
          "height": 0,
          "photo": {
            "captureTime": {
              "localDateTime": "string",
              "utcOffset": "string"
            },
            "location": {
              "latitude": 0,
              "longitude": 0,
              "altitudeMeters": 0
            },
            "sourceExifOrientation": 0,
            "cameraMake": "string",
            "cameraModel": "string",
            "lensModel": "string",
            "fNumber": 0,
            "exposureTimeSeconds": 0,
            "iso": 0,
            "focalLengthMm": 0
          },
          "video": {
            "durationSeconds": 0
          }
        },
        "memo": "string"
      }
    ]
  }'
```

`PATCH /api/memos/{memo}/attachments`

SetMemoAttachments replaces the full set of attachments on a memo with the
 provided list (not an append). Pass the complete desired set; an empty list
 clears all attachments. Idempotent. Requires the memo creator or an
 instance administrator.

> Body parameter

```json
{
  "name": "string",
  "attachments": [
    {
      "name": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string"
    }
  ]
}
```

<h3 id="memoservicesetmemoattachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|body|body|[SetMemoAttachmentsRequest](#schemasetmemoattachmentsrequest)|true|none|
|» name|body|string|true|Required. The resource name of the memo.<br> Format: memos/{memo}|
|» attachments|body|[[Attachment](#schemaattachment)]|true|Required. The complete set of attachments for the memo.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicesetmemoattachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_ListMemoReactions

<a id="opIdMemoService_ListMemoReactions"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/reactions \
  -H 'Accept: application/json'
```

`GET /api/memos/{memo}/reactions`

ListMemoReactions lists the reactions on a memo. Requires read access to
 the memo.

<h3 id="memoservicelistmemoreactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of reactions to return. The service may<br> return fewer. Currently ignored; all reactions are returned.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the<br> next page. Currently ignored.|

> Example responses

> 200 Response

```json
{
  "reactions": [
    {
      "name": "string",
      "creator": "string",
      "reactionType": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicelistmemoreactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMemoReactionsResponse](#schemalistmemoreactionsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_UpsertMemoReaction

<a id="opIdMemoService_UpsertMemoReaction"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/reactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "parent": "string",
    "reaction": {
      "reactionType": "string"
    }
  }'
```

`POST /api/memos/{memo}/reactions`

UpsertMemoReaction adds or updates the authenticated user's reaction on a
 memo. Requires read access to the memo.

> Body parameter

```json
{
  "parent": "string",
  "reaction": {
    "reactionType": "string"
  }
}
```

<h3 id="memoserviceupsertmemoreaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|body|body|[UpsertMemoReactionRequest](#schemaupsertmemoreactionrequest)|true|none|
|» parent|body|string|true|Required. The resource name of the memo.<br> Format: memos/{memo}|
|» reaction|body|object|true|Required. The reaction to upsert. Only reaction_type is used.|
|» » reactionType|body|string|true|Required. The reaction, such as an emoji ("👍", "❤️", "😄").|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "creator": "string",
  "reactionType": "string",
  "createTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoserviceupsertmemoreaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Reaction](#schemareaction)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_DeleteMemoReaction

<a id="opIdMemoService_DeleteMemoReaction"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/reactions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/memos/{memo}/reactions/{reaction}`

DeleteMemoReaction deletes a reaction. Requires the reaction creator or an
 instance administrator.

<h3 id="memoservicedeletememoreaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|reaction|path|string|true|The reaction id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicedeletememoreaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_ListMemoRelations

<a id="opIdMemoService_ListMemoRelations"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/relations \
  -H 'Accept: application/json'
```

`GET /api/memos/{memo}/relations`

ListMemoRelations lists the relations of a memo in both directions.
 Requires read access to the memo.

<h3 id="memoservicelistmemorelations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of relations to return. The service may<br> return fewer. Defaults to 50; values above 1000 are coerced to 1000.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the<br> next page.|

> Example responses

> 200 Response

```json
{
  "relations": [
    {
      "memo": {
        "name": "string",
        "snippet": "string"
      },
      "relatedMemo": {
        "name": "string",
        "snippet": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicelistmemorelations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMemoRelationsResponse](#schemalistmemorelationsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_SetMemoRelations

<a id="opIdMemoService_SetMemoRelations"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/relations \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "relations": [
      {
        "memo": {
          "name": "string"
        },
        "relatedMemo": {
          "name": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    ]
  }'
```

`PATCH /api/memos/{memo}/relations`

SetMemoRelations replaces the full set of relations on a memo with the
 provided list. An empty list clears them. Requires the memo creator or an
 instance administrator.

> Body parameter

```json
{
  "name": "string",
  "relations": [
    {
      "memo": {
        "name": "string"
      },
      "relatedMemo": {
        "name": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="memoservicesetmemorelations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|body|body|[SetMemoRelationsRequest](#schemasetmemorelationsrequest)|true|none|
|» name|body|string|true|Required. The resource name of the memo.<br> Format: memos/{memo}|
|» relations|body|[[MemoRelation](#schemamemorelation)]|true|Required. The complete set of relations for the memo.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicesetmemorelations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_ListMemoShares

<a id="opIdMemoService_ListMemoShares"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/shares \
  -H 'Accept: application/json'
```

`GET /api/memos/{memo}/shares`

ListMemoShares lists all share links for a memo. Requires the memo creator
 or an instance administrator.

<h3 id="memoservicelistmemoshares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|

> Example responses

> 200 Response

```json
{
  "memoShares": [
    {
      "name": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "expireTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicelistmemoshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMemoSharesResponse](#schemalistmemosharesresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_CreateMemoShare

<a id="opIdMemoService_CreateMemoShare"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/shares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "expireTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/memos/{memo}/shares`

CreateMemoShare creates a share link for a memo. Requires the memo creator
 or an instance administrator. Only active memos without SPACE visibility
 can be shared.

> Body parameter

```json
{
  "name": "string",
  "expireTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="memoservicecreatememoshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|body|body|[MemoShare](#schemamemoshare)|true|none|
|» name|body|string|false|Identifier. The resource name of the share. The {share} segment is the<br> opaque token used in the share URL.<br> Format: memos/{memo}/shares/{share}|
|» expireTime|body|string(date-time)|false|Optional. The time after which the share link stops working. Must be in<br> the future when set. If unset, the link never expires.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "expireTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicecreatememoshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MemoShare](#schemamemoshare)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_DeleteMemoShare

<a id="opIdMemoService_DeleteMemoShare"></a>

> Code samples

```bash
curl http://localhost:5230/api/memos/string/shares/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/memos/{memo}/shares/{share}`

DeleteMemoShare revokes a share link. Requires the memo creator or an
 instance administrator.

<h3 id="memoservicedeletememoshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memo|path|string|true|The memo id.|
|share|path|string|true|The share id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicedeletememoshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## MemoService_GetSharedMemo

<a id="opIdMemoService_GetSharedMemo"></a>

> Code samples

```bash
curl http://localhost:5230/api/shares/string/memo \
  -H 'Accept: application/json'
```

`GET /api/shares/{shareToken}/memo`

GetSharedMemo resolves a share token to its memo. No authentication is
 required. Returns NOT_FOUND if the token is invalid or expired.

<h3 id="memoservicegetsharedmemo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shareToken|path|string|true|Required. The opaque bearer token from the share URL.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "creator": "string",
  "space": "string",
  "content": "string",
  "location": {
    "placeholder": "string",
    "latitude": 0,
    "longitude": 0
  },
  "visibility": "VISIBILITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "pinned": true,
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "relations": [
    {
      "memo": {
        "name": "string",
        "snippet": "string"
      },
      "relatedMemo": {
        "name": "string",
        "snippet": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "reactions": [
    {
      "name": "string",
      "creator": "string",
      "reactionType": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "parent": "string",
  "commentCount": 0,
  "tags": [
    "string"
  ],
  "property": {
    "title": "string",
    "hasLink": true,
    "hasCode": true,
    "hasTaskList": true,
    "hasIncompleteTasks": true,
    "hasInlineImage": true
  },
  "snippet": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="memoservicegetsharedmemo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Memo](#schemamemo)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-spaceservice">SpaceService</h1>

SpaceService manages collaborative spaces, their members and their invitations.

## SpaceService_ListSpaces

<a id="opIdSpaceService_ListSpaces"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces \
  -H 'Accept: application/json'
```

`GET /api/spaces`

ListSpaces lists the spaces of which the authenticated caller is a member.

<h3 id="spaceservicelistspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer(int32)|false|Optional. The maximum number of spaces to return. The service may return fewer.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the next page.|

> Example responses

> 200 Response

```json
{
  "spaces": [
    {
      "name": "string",
      "title": "string",
      "description": "string",
      "icon": {
        "emoji": "string",
        "lucide": "string"
      },
      "currentUserRole": "ROLE_UNSPECIFIED",
      "memberCount": 0
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicelistspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSpacesResponse](#schemalistspacesresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_CreateSpace

<a id="opIdSpaceService_CreateSpace"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "title": "string",
    "description": "string",
    "icon": {
      "emoji": "string",
      "lucide": "string"
    }
  }'
```

`POST /api/spaces`

CreateSpace creates a space and makes the authenticated caller its first
 administrator.

> Body parameter

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  }
}
```

<h3 id="spaceservicecreatespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|query|string|false|Optional. The ID to use for the space, which becomes the final segment of<br> its resource name. If empty, a UUID v4 is generated. Must match<br> ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$.|
|body|body|[Space](#schemaspace)|true|none|
|» name|body|string|false|Identifier. The resource name of the space.<br> Format: spaces/{space}|
|» title|body|string|true|Required. The human-readable title.|
|» description|body|string|false|Optional. A description of the space.|
|» icon|body|object|false|Optional. The display icon. Omit it when updating with the "icon" mask to<br> reset to the default space mark.|
|» » emoji|body|string|false|A Unicode emoji sequence.|
|» » lucide|body|string|false|A canonical Lucide icon name, such as "leaf".|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  },
  "currentUserRole": "ROLE_UNSPECIFIED",
  "memberCount": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicecreatespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Space](#schemaspace)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_GetSpace

<a id="opIdSpaceService_GetSpace"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string \
  -H 'Accept: application/json'
```

`GET /api/spaces/{space}`

GetSpace gets a space of which the authenticated caller is a member.
 Spaces the caller is not a member of are reported as not found.

<h3 id="spaceservicegetspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  },
  "currentUserRole": "ROLE_UNSPECIFIED",
  "memberCount": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicegetspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Space](#schemaspace)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_DeleteSpace

<a id="opIdSpaceService_DeleteSpace"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/spaces/{space}`

DeleteSpace permanently deletes a space and every memo currently placed
 in it. It never follows memo relations to other memos. Only a space
 administrator can delete a space.

<h3 id="spaceservicedeletespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicedeletespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_UpdateSpace

<a id="opIdSpaceService_UpdateSpace"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "title": "string",
    "description": "string",
    "icon": {
      "emoji": "string",
      "lucide": "string"
    }
  }'
```

`PATCH /api/spaces/{space}`

UpdateSpace updates space metadata. Only a space administrator can update
 a space.

> Body parameter

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  }
}
```

<h3 id="spaceserviceupdatespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|updateMask|query|string(field-mask)|false|Required. The fields to update. Supported paths: title, description, icon.|
|body|body|[Space](#schemaspace)|true|none|
|» name|body|string|false|Identifier. The resource name of the space.<br> Format: spaces/{space}|
|» title|body|string|true|Required. The human-readable title.|
|» description|body|string|false|Optional. A description of the space.|
|» icon|body|object|false|Optional. The display icon. Omit it when updating with the "icon" mask to<br> reset to the default space mark.|
|» » emoji|body|string|false|A Unicode emoji sequence.|
|» » lucide|body|string|false|A canonical Lucide icon name, such as "leaf".|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  },
  "currentUserRole": "ROLE_UNSPECIFIED",
  "memberCount": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceserviceupdatespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Space](#schemaspace)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_ListSpaceInvitations

<a id="opIdSpaceService_ListSpaceInvitations"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/invitations \
  -H 'Accept: application/json'
```

`GET /api/spaces/{space}/invitations`

ListSpaceInvitations lists the pending invitations for a space. Only a
 space administrator can list them.

<h3 id="spaceservicelistspaceinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of invitations to return. The service may return fewer.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the next page.|

> Example responses

> 200 Response

```json
{
  "spaceInvitations": [
    {
      "name": "string",
      "invitee": "string",
      "role": "ROLE_UNSPECIFIED",
      "space": {
        "name": "string",
        "title": "string",
        "description": "string",
        "icon": {
          "emoji": "string",
          "lucide": "string"
        },
        "currentUserRole": "ROLE_UNSPECIFIED",
        "memberCount": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicelistspaceinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSpaceInvitationsResponse](#schemalistspaceinvitationsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_CreateSpaceInvitation

<a id="opIdSpaceService_CreateSpaceInvitation"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "invitee": "string",
    "role": "ROLE_UNSPECIFIED"
  }'
```

`POST /api/spaces/{space}/invitations`

CreateSpaceInvitation invites an existing active user to a space. Only a
 space administrator can invite. The invitee gets no space access until
 they accept.

> Body parameter

```json
{
  "name": "string",
  "invitee": "string",
  "role": "ROLE_UNSPECIFIED"
}
```

<h3 id="spaceservicecreatespaceinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|body|body|[SpaceInvitation](#schemaspaceinvitation)|true|none|
|» name|body|string|false|Identifier. The resource name of the invitation. The invitation segment<br> is the invitee's username.<br> Format: spaces/{space}/invitations/{invitation}|
|» invitee|body|string|true|Required. The invited user.<br> Format: users/{user}|
|» role|body|string(enum)|true|Required. The role the user receives after accepting the invitation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|ROLE_UNSPECIFIED|
|» role|ADMIN|
|» role|USER|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "invitee": "string",
  "role": "ROLE_UNSPECIFIED",
  "space": {
    "name": "string",
    "title": "string",
    "description": "string",
    "icon": {
      "emoji": "string",
      "lucide": "string"
    },
    "currentUserRole": "ROLE_UNSPECIFIED",
    "memberCount": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicecreatespaceinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpaceInvitation](#schemaspaceinvitation)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_GetSpaceInvitation

<a id="opIdSpaceService_GetSpaceInvitation"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/invitations/string \
  -H 'Accept: application/json'
```

`GET /api/spaces/{space}/invitations/{invitation}`

GetSpaceInvitation gets one pending invitation. Only the invitee or a
 space administrator can get it.

<h3 id="spaceservicegetspaceinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|invitation|path|string|true|The invitation id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "invitee": "string",
  "role": "ROLE_UNSPECIFIED",
  "space": {
    "name": "string",
    "title": "string",
    "description": "string",
    "icon": {
      "emoji": "string",
      "lucide": "string"
    },
    "currentUserRole": "ROLE_UNSPECIFIED",
    "memberCount": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicegetspaceinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpaceInvitation](#schemaspaceinvitation)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_DeleteSpaceInvitation

<a id="opIdSpaceService_DeleteSpaceInvitation"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/invitations/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/spaces/{space}/invitations/{invitation}`

DeleteSpaceInvitation revokes a pending invitation. Only a space
 administrator can revoke it.

<h3 id="spaceservicedeletespaceinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|invitation|path|string|true|The invitation id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicedeletespaceinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_AcceptSpaceInvitation

<a id="opIdSpaceService_AcceptSpaceInvitation"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/invitations/string:accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string"
  }'
```

`POST /api/spaces/{space}/invitations/{invitation}:accept`

AcceptSpaceInvitation accepts a pending invitation and creates a
 membership with the invited role. Only the invitee can accept it.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="spaceserviceacceptspaceinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|invitation|path|string|true|The invitation id.|
|body|body|[AcceptSpaceInvitationRequest](#schemaacceptspaceinvitationrequest)|true|none|
|» name|body|string|true|Required. The resource name of the invitation.<br> Format: spaces/{space}/invitations/{invitation}|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "user": "string",
  "role": "ROLE_UNSPECIFIED"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceserviceacceptspaceinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpaceMember](#schemaspacemember)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_DeclineSpaceInvitation

<a id="opIdSpaceService_DeclineSpaceInvitation"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/invitations/string:decline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string"
  }'
```

`POST /api/spaces/{space}/invitations/{invitation}:decline`

DeclineSpaceInvitation declines a pending invitation without creating a
 membership. Only the invitee can decline it.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="spaceservicedeclinespaceinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|invitation|path|string|true|The invitation id.|
|body|body|[DeclineSpaceInvitationRequest](#schemadeclinespaceinvitationrequest)|true|none|
|» name|body|string|true|Required. The resource name of the invitation.<br> Format: spaces/{space}/invitations/{invitation}|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicedeclinespaceinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_ListSpaceMembers

<a id="opIdSpaceService_ListSpaceMembers"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/members \
  -H 'Accept: application/json'
```

`GET /api/spaces/{space}/members`

ListSpaceMembers lists the members of a space. The caller must be a member
 of the space.

<h3 id="spaceservicelistspacemembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of members to return. The service may return fewer.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the next page.|

> Example responses

> 200 Response

```json
{
  "spaceMembers": [
    {
      "name": "string",
      "user": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicelistspacemembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSpaceMembersResponse](#schemalistspacemembersresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_GetSpaceMember

<a id="opIdSpaceService_GetSpaceMember"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/members/string \
  -H 'Accept: application/json'
```

`GET /api/spaces/{space}/members/{member}`

GetSpaceMember gets one membership in a space. The caller must be a member
 of the space.

<h3 id="spaceservicegetspacemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|member|path|string|true|The member id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "user": "string",
  "role": "ROLE_UNSPECIFIED"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicegetspacemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpaceMember](#schemaspacemember)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_DeleteSpaceMember

<a id="opIdSpaceService_DeleteSpaceMember"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/members/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/spaces/{space}/members/{member}`

DeleteSpaceMember removes a member. A space administrator can remove any
 member, and a member may delete their own membership to leave the space.
 A space must keep at least one administrator.

<h3 id="spaceservicedeletespacemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|member|path|string|true|The member id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicedeletespacemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_UpdateSpaceMember

<a id="opIdSpaceService_UpdateSpaceMember"></a>

> Code samples

```bash
curl http://localhost:5230/api/spaces/string/members/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "user": "string",
    "role": "ROLE_UNSPECIFIED"
  }'
```

`PATCH /api/spaces/{space}/members/{member}`

UpdateSpaceMember changes a member's space role. Only a space administrator
 can change roles, and a space must keep at least one administrator.

> Body parameter

```json
{
  "name": "string",
  "user": "string",
  "role": "ROLE_UNSPECIFIED"
}
```

<h3 id="spaceserviceupdatespacemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|path|string|true|The space id.|
|member|path|string|true|The member id.|
|updateMask|query|string(field-mask)|false|Required. The fields to update. Must include role. The user path is also<br> accepted, but the user must match the existing member and is never changed.|
|body|body|[SpaceMember](#schemaspacemember)|true|none|
|» name|body|string|false|Identifier. The resource name of the membership. The member segment is<br> the member's username.<br> Format: spaces/{space}/members/{member}|
|» user|body|string|true|Required. The member user.<br> Format: users/{user}|
|» role|body|string(enum)|true|Required. The member's role within this space.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|ROLE_UNSPECIFIED|
|» role|ADMIN|
|» role|USER|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "user": "string",
  "role": "ROLE_UNSPECIFIED"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceserviceupdatespacemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpaceMember](#schemaspacemember)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## SpaceService_ListUserSpaceInvitations

<a id="opIdSpaceService_ListUserSpaceInvitations"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/spaceInvitations \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/spaceInvitations`

ListUserSpaceInvitations lists the authenticated user's pending space
 invitations. A user cannot list another user's invitations.

<h3 id="spaceservicelistuserspaceinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of invitations to return. The service may return fewer.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the next page.|

> Example responses

> 200 Response

```json
{
  "spaceInvitations": [
    {
      "name": "string",
      "invitee": "string",
      "role": "ROLE_UNSPECIFIED",
      "space": {
        "name": "string",
        "title": "string",
        "description": "string",
        "icon": {
          "emoji": "string",
          "lucide": "string"
        },
        "currentUserRole": "ROLE_UNSPECIFIED",
        "memberCount": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="spaceservicelistuserspaceinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListUserSpaceInvitationsResponse](#schemalistuserspaceinvitationsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-userservice">UserService</h1>

UserService manages users and the resources they own: settings, statistics,
 memo views, notifications, webhooks, linked identities, personal access
 tokens, and memo export files.

## UserService_ListUsers

<a id="opIdUserService_ListUsers"></a>

> Code samples

```bash
curl http://localhost:5230/api/users \
  -H 'Accept: application/json'
```

`GET /api/users`

ListUsers lists users in every state. Only admins may call it.

<h3 id="userservicelistusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer(int32)|false|Optional. The maximum number of users to return. The service may return<br> fewer. If unspecified, at most 50 users are returned. The maximum value is<br> 1000; values above 1000 are coerced to 1000.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the<br> next page.|
|filter|query|string|false|Optional. A CEL filter on the users. Only `username == '<username>'` is<br> supported.<br> Example: "username == 'steven'"|
|showDeleted|query|boolean|false|Optional. Currently ignored; the list includes users in every state.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "name": "string",
      "username": "string",
      "displayName": "string",
      "email": "string",
      "avatarUrl": "string",
      "description": "string",
      "role": "ROLE_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicelistusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListUsersResponse](#schemalistusersresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_CreateUser

<a id="opIdUserService_CreateUser"></a>

> Code samples

```bash
curl http://localhost:5230/api/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "password": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED"
  }'
```

`POST /api/users`

CreateUser creates a user. The first user of an instance becomes an admin.
 Otherwise, unless an admin calls it, the instance must allow user
 registration and password sign-up, and the new user gets the USER role.

> Body parameter

```json
{
  "name": "string",
  "username": "string",
  "displayName": "string",
  "email": "string",
  "avatarUrl": "string",
  "description": "string",
  "password": "string",
  "role": "ROLE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="userservicecreateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|Optional. The resource ID to use for this user. If set, it must equal<br> user.username and follow the username format.<br> Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$|
|validateOnly|query|boolean|false|Optional. If set, validate the request but do not create the user.|
|requestId|query|string|false|Optional. An idempotency token. Currently ignored.|
|body|body|[User](#schemauser)|true|none|
|» name|body|string|false|Identifier. The resource name of the user. {user} is the username.<br> Format: users/{user}|
|» username|body|string|true|Required. The unique username, used to sign in.|
|» displayName|body|string|false|Optional. The display name of the user.|
|» email|body|string|false|Optional. The email address of the user. Stored trimmed and lowercased;<br> empty means no address. An address belongs to at most one user on the<br> instance, so writes that would reuse one fail with ALREADY_EXISTS.<br> Returned only to the user and to admins.|
|» avatarUrl|body|string|false|Optional. The avatar URL of the user. An avatar set as a data URI (PNG,<br> JPEG, GIF or WebP, at most 2 MiB) is returned as a file server URL.|
|» description|body|string|false|Optional. The description of the user.|
|» password|body|string|false|Input only. The password of the user. Never returned.|
|» role|body|string(enum)|true|Required. The role of the user. Only admins can change it.|
|» state|body|string(enum)|true|Required. The state of the user. Only admins can change it.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|ROLE_UNSPECIFIED|
|» role|ADMIN|
|» role|USER|
|» state|STATE_UNSPECIFIED|
|» state|NORMAL|
|» state|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "username": "string",
  "displayName": "string",
  "email": "string",
  "avatarUrl": "string",
  "description": "string",
  "role": "ROLE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicecreateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_GetUser

<a id="opIdUserService_GetUser"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string \
  -H 'Accept: application/json'
```

`GET /api/users/{user}`

GetUser gets a user by resource name.

<h3 id="userservicegetuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|readMask|query|string(field-mask)|false|Optional. Currently ignored; all fields are returned.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "username": "string",
  "displayName": "string",
  "email": "string",
  "avatarUrl": "string",
  "description": "string",
  "role": "ROLE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicegetuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_DeleteUser

<a id="opIdUserService_DeleteUser"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/users/{user}`

DeleteUser deletes a user. Users may delete themselves; admins may delete
 anyone. A user who belongs to any space cannot be deleted.

<h3 id="userservicedeleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|force|query|boolean|false|Optional. Currently ignored; deleting a user who belongs to any space<br> fails with FAILED_PRECONDITION.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicedeleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_UpdateUser

<a id="opIdUserService_UpdateUser"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "password": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED"
  }'
```

`PATCH /api/users/{user}`

UpdateUser updates a user. Users may update themselves; admins may update
 anyone. Changing the password ends the user's other sessions.

> Body parameter

```json
{
  "name": "string",
  "username": "string",
  "displayName": "string",
  "email": "string",
  "avatarUrl": "string",
  "description": "string",
  "password": "string",
  "role": "ROLE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="userserviceupdateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|updateMask|query|string(field-mask)|false|Required. The fields to update. Supported paths: username, display_name,<br> email, avatar_url, description, password, role, state. role and state<br> require an admin.|
|allowMissing|query|boolean|false|Optional. Currently ignored; updating a missing user fails with NOT_FOUND.|
|body|body|[User](#schemauser)|true|none|
|» name|body|string|false|Identifier. The resource name of the user. {user} is the username.<br> Format: users/{user}|
|» username|body|string|true|Required. The unique username, used to sign in.|
|» displayName|body|string|false|Optional. The display name of the user.|
|» email|body|string|false|Optional. The email address of the user. Stored trimmed and lowercased;<br> empty means no address. An address belongs to at most one user on the<br> instance, so writes that would reuse one fail with ALREADY_EXISTS.<br> Returned only to the user and to admins.|
|» avatarUrl|body|string|false|Optional. The avatar URL of the user. An avatar set as a data URI (PNG,<br> JPEG, GIF or WebP, at most 2 MiB) is returned as a file server URL.|
|» description|body|string|false|Optional. The description of the user.|
|» password|body|string|false|Input only. The password of the user. Never returned.|
|» role|body|string(enum)|true|Required. The role of the user. Only admins can change it.|
|» state|body|string(enum)|true|Required. The state of the user. Only admins can change it.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|ROLE_UNSPECIFIED|
|» role|ADMIN|
|» role|USER|
|» state|STATE_UNSPECIFIED|
|» state|NORMAL|
|» state|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "username": "string",
  "displayName": "string",
  "email": "string",
  "avatarUrl": "string",
  "description": "string",
  "role": "ROLE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userserviceupdateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ListLinkedIdentities

<a id="opIdUserService_ListLinkedIdentities"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/linkedIdentities \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/linkedIdentities`

ListLinkedIdentities lists the SSO identities linked to a user. The user
 and admins may call it.

<h3 id="userservicelistlinkedidentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|

> Example responses

> 200 Response

```json
{
  "linkedIdentities": [
    {
      "name": "string",
      "identityProvider": "string",
      "externalUid": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicelistlinkedidentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListLinkedIdentitiesResponse](#schemalistlinkedidentitiesresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_CreateLinkedIdentity

<a id="opIdUserService_CreateLinkedIdentity"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/linkedIdentities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "parent": "string",
    "identityProvider": "string",
    "code": "string",
    "redirectUri": "string",
    "codeVerifier": "string"
  }'
```

`POST /api/users/{user}/linkedIdentities`

CreateLinkedIdentity completes an OAuth flow and links the resulting SSO
 identity to the authenticated user, who must be the parent.

> Body parameter

```json
{
  "parent": "string",
  "identityProvider": "string",
  "code": "string",
  "redirectUri": "string",
  "codeVerifier": "string"
}
```

<h3 id="userservicecreatelinkedidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|body|body|[CreateLinkedIdentityRequest](#schemacreatelinkedidentityrequest)|true|none|
|» parent|body|string|true|Required. The user who owns the linked identity. Must be the caller.<br> Format: users/{user}|
|» identityProvider|body|string|true|Required. The identity provider to link.<br> Format: identity-providers/{idp}|
|» code|body|string|true|Required. The authorization code from the identity provider.|
|» redirectUri|body|string|true|Required. The redirect URI used in the OAuth flow.|
|» codeVerifier|body|string|false|Optional. The PKCE code verifier used in the OAuth flow.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "identityProvider": "string",
  "externalUid": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicecreatelinkedidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LinkedIdentity](#schemalinkedidentity)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_GetLinkedIdentity

<a id="opIdUserService_GetLinkedIdentity"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/linkedIdentities/string \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/linkedIdentities/{linkedIdentity}`

GetLinkedIdentity gets an SSO identity linked to a user. The user and
 admins may call it.

<h3 id="userservicegetlinkedidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|linkedIdentity|path|string|true|The linkedIdentity id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "identityProvider": "string",
  "externalUid": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicegetlinkedidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LinkedIdentity](#schemalinkedidentity)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_DeleteLinkedIdentity

<a id="opIdUserService_DeleteLinkedIdentity"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/linkedIdentities/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/users/{user}/linkedIdentities/{linkedIdentity}`

DeleteLinkedIdentity unlinks an SSO identity from a user. The user and
 admins may call it.

<h3 id="userservicedeletelinkedidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|linkedIdentity|path|string|true|The linkedIdentity id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicedeletelinkedidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ListUserNotifications

<a id="opIdUserService_ListUserNotifications"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/notifications \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/notifications`

ListUserNotifications lists a user's notifications. Only the user may call
 it. Notifications whose memos or space invitation the user can no longer
 read are left out.

<h3 id="userservicelistusernotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of notifications to return. The service may<br> return fewer. Currently ignored; all notifications are returned in one<br> page.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the<br> next page.|
|filter|query|string|false|Optional. A filter on the notifications. Currently ignored.|

> Example responses

> 200 Response

```json
{
  "notifications": [
    {
      "name": "string",
      "sender": "string",
      "senderUser": {
        "name": "string",
        "username": "string",
        "displayName": "string",
        "email": "string",
        "avatarUrl": "string",
        "description": "string",
        "role": "ROLE_UNSPECIFIED",
        "state": "STATE_UNSPECIFIED",
        "createTime": "1970-01-01T00:00:00Z",
        "updateTime": "1970-01-01T00:00:00Z"
      },
      "type": "TYPE_UNSPECIFIED",
      "memoComment": {
        "memo": "string",
        "relatedMemo": "string",
        "memoSnippet": "string",
        "relatedMemoSnippet": "string"
      },
      "memoMention": {
        "memo": "string",
        "relatedMemo": "string",
        "memoSnippet": "string",
        "relatedMemoSnippet": "string"
      },
      "spaceInvitation": {
        "spaceInvitation": "string",
        "space": {
          "name": "string",
          "title": "string",
          "description": "string",
          "icon": {
            "emoji": "string",
            "lucide": "string"
          },
          "currentUserRole": "ROLE_UNSPECIFIED",
          "memberCount": 0
        },
        "role": "ROLE_UNSPECIFIED",
        "state": "STATE_UNSPECIFIED"
      },
      "status": "STATUS_UNSPECIFIED",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicelistusernotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListUserNotificationsResponse](#schemalistusernotificationsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_DeleteUserNotification

<a id="opIdUserService_DeleteUserNotification"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/notifications/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/users/{user}/notifications/{notification}`

DeleteUserNotification permanently deletes a notification. Only the
 receiver may call it.

<h3 id="userservicedeleteusernotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|notification|path|string|true|The notification id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicedeleteusernotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_UpdateUserNotification

<a id="opIdUserService_UpdateUserNotification"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/notifications/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "status": "STATUS_UNSPECIFIED"
  }'
```

`PATCH /api/users/{user}/notifications/{notification}`

UpdateUserNotification updates a notification's status. Only the receiver
 may call it.

> Body parameter

```json
{
  "status": "STATUS_UNSPECIFIED"
}
```

<h3 id="userserviceupdateusernotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|notification|path|string|true|The notification id.|
|updateMask|query|string(field-mask)|false|Required. The fields to update. Only status is supported.|
|body|body|[UserNotification](#schemausernotification)|true|none|
|» status|body|string(enum)|false|Optional. The status of the notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|STATUS_UNSPECIFIED|
|» status|UNREAD|
|» status|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "sender": "string",
  "senderUser": {
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  },
  "type": "TYPE_UNSPECIFIED",
  "memoComment": {
    "memo": "string",
    "relatedMemo": "string",
    "memoSnippet": "string",
    "relatedMemoSnippet": "string"
  },
  "memoMention": {
    "memo": "string",
    "relatedMemo": "string",
    "memoSnippet": "string",
    "relatedMemoSnippet": "string"
  },
  "spaceInvitation": {
    "spaceInvitation": "string",
    "space": {
      "name": "string",
      "title": "string",
      "description": "string",
      "icon": {
        "emoji": "string",
        "lucide": "string"
      },
      "currentUserRole": "ROLE_UNSPECIFIED",
      "memberCount": 0
    },
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED"
  },
  "status": "STATUS_UNSPECIFIED",
  "createTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userserviceupdateusernotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserNotification](#schemausernotification)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ListPersonalAccessTokens

<a id="opIdUserService_ListPersonalAccessTokens"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/personalAccessTokens \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/personalAccessTokens`

ListPersonalAccessTokens lists a user's personal access tokens (PATs),
 without their token values. PATs are long-lived tokens for API and script
 access, distinct from short-lived JWT access tokens. The user and admins
 may call it.

<h3 id="userservicelistpersonalaccesstokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of tokens to return. The service may return<br> fewer. Currently ignored; all tokens are returned in one page.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the<br> next page.|

> Example responses

> 200 Response

```json
{
  "personalAccessTokens": [
    {
      "name": "string",
      "description": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "expireTime": "1970-01-01T00:00:00Z",
      "lastUseTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicelistpersonalaccesstokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListPersonalAccessTokensResponse](#schemalistpersonalaccesstokensresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_CreatePersonalAccessToken

<a id="opIdUserService_CreatePersonalAccessToken"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/personalAccessTokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "parent": "string",
    "description": "string",
    "expiresInDays": 0
  }'
```

`POST /api/users/{user}/personalAccessTokens`

CreatePersonalAccessToken creates a personal access token for a user.
 Only the user may call it. The token value is returned only once, in the
 response.

> Body parameter

```json
{
  "parent": "string",
  "description": "string",
  "expiresInDays": 0
}
```

<h3 id="userservicecreatepersonalaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|body|body|[CreatePersonalAccessTokenRequest](#schemacreatepersonalaccesstokenrequest)|true|none|
|» parent|body|string|true|Required. The user who owns the token. Must be the caller.<br> Format: users/{user}|
|» description|body|string|false|Optional. The description of the token.|
|» expiresInDays|body|integer(int32)|false|Optional. The lifetime of the token in days. 0 means the token never<br> expires.|

> Example responses

> 200 Response

```json
{
  "personalAccessToken": {
    "name": "string",
    "description": "string",
    "createTime": "1970-01-01T00:00:00Z",
    "expireTime": "1970-01-01T00:00:00Z",
    "lastUseTime": "1970-01-01T00:00:00Z"
  },
  "token": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicecreatepersonalaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreatePersonalAccessTokenResponse](#schemacreatepersonalaccesstokenresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_DeletePersonalAccessToken

<a id="opIdUserService_DeletePersonalAccessToken"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/personalAccessTokens/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/users/{user}/personalAccessTokens/{personalAccessToken}`

DeletePersonalAccessToken deletes a personal access token, which stops
 working immediately. Only the owner may call it.

<h3 id="userservicedeletepersonalaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|personalAccessToken|path|string|true|The personalAccessToken id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicedeletepersonalaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ListUserSettings

<a id="opIdUserService_ListUserSettings"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/settings \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/settings`

ListUserSettings lists the settings of a user. Only the user may call it.
 The GENERAL setting is always included, with defaults when it was never
 saved.

<h3 id="userservicelistusersettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|pageSize|query|integer(int32)|false|Optional. The maximum number of settings to return. The service may return<br> fewer. Currently ignored; all settings are returned in one page.|
|pageToken|query|string|false|Optional. A page token from a previous call. Provide it to retrieve the<br> next page.|

> Example responses

> 200 Response

```json
{
  "userSettings": [
    {
      "name": "string",
      "generalSetting": {
        "locale": "string",
        "memoVisibility": "string",
        "theme": "string",
        "saveMediaMetadata": true
      },
      "webhooksSetting": {
        "webhooks": [
          {
            "name": "string",
            "displayName": "string",
            "url": "string",
            "signingSecretSet": true,
            "createTime": "1970-01-01T00:00:00Z",
            "updateTime": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "tagsSetting": {
        "tags": {
          "property1": {
            "backgroundColor": {
              "red": 0,
              "green": 0,
              "blue": 0,
              "alpha": 0
            },
            "blurContent": true
          },
          "property2": {
            "backgroundColor": {
              "red": 0,
              "green": 0,
              "blue": 0,
              "alpha": 0
            },
            "blurContent": true
          }
        }
      },
      "editorSetting": {
        "sourceMode": true
      }
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicelistusersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListUserSettingsResponse](#schemalistusersettingsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_GetUserSetting

<a id="opIdUserService_GetUserSetting"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/settings/string \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/settings/{setting}`

GetUserSetting gets a user setting. Only the user may call it.

<h3 id="userservicegetusersetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|setting|path|string|true|The setting id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "generalSetting": {
    "locale": "string",
    "memoVisibility": "string",
    "theme": "string",
    "saveMediaMetadata": true
  },
  "webhooksSetting": {
    "webhooks": [
      {
        "name": "string",
        "displayName": "string",
        "url": "string",
        "signingSecretSet": true,
        "createTime": "1970-01-01T00:00:00Z",
        "updateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "tagsSetting": {
    "tags": {
      "property1": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      },
      "property2": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      }
    }
  },
  "editorSetting": {
    "sourceMode": true
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicegetusersetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserSetting](#schemausersetting)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_UpdateUserSetting

<a id="opIdUserService_UpdateUserSetting"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/settings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "generalSetting": {
      "locale": "string",
      "memoVisibility": "string",
      "theme": "string",
      "saveMediaMetadata": true
    },
    "webhooksSetting": {
      "webhooks": [
        {
          "name": "string",
          "displayName": "string",
          "url": "string",
          "signingSecret": "string"
        }
      ]
    },
    "tagsSetting": {
      "tags": {
        "property1": {
          "backgroundColor": {
            "red": 0,
            "green": 0,
            "blue": 0,
            "alpha": 0
          },
          "blurContent": true
        },
        "property2": {
          "backgroundColor": {
            "red": 0,
            "green": 0,
            "blue": 0,
            "alpha": 0
          },
          "blurContent": true
        }
      }
    },
    "editorSetting": {
      "sourceMode": true
    }
  }'
```

`PATCH /api/users/{user}/settings/{setting}`

UpdateUserSetting updates a user setting. Only the user may call it, and
 only the GENERAL and TAGS settings can be updated.

> Body parameter

```json
{
  "name": "string",
  "generalSetting": {
    "locale": "string",
    "memoVisibility": "string",
    "theme": "string",
    "saveMediaMetadata": true
  },
  "webhooksSetting": {
    "webhooks": [
      {
        "name": "string",
        "displayName": "string",
        "url": "string",
        "signingSecret": "string"
      }
    ]
  },
  "tagsSetting": {
    "tags": {
      "property1": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      },
      "property2": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      }
    }
  },
  "editorSetting": {
    "sourceMode": true
  }
}
```

<h3 id="userserviceupdateusersetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|setting|path|string|true|The setting id.|
|updateMask|query|string(field-mask)|false|Required. The fields to update, relative to the setting value. GENERAL<br> supports locale, memo_visibility, theme and save_media_metadata; TAGS<br> supports tags.|
|body|body|[UserSetting](#schemausersetting)|true|none|
|» name|body|string|false|Identifier. The resource name of the user setting. {setting} is the<br> setting key, such as GENERAL.<br> Format: users/{user}/settings/{setting}|
|» generalSetting|body|object|false|The value of the GENERAL setting.|
|» » locale|body|string|false|Optional. The preferred locale of the user.|
|» » memoVisibility|body|string|false|Optional. The default visibility of new memos: PRIVATE, PROTECTED or<br> PUBLIC.|
|» » theme|body|string|false|Optional. The preferred theme of the user. This references a CSS file in<br> the web/public/themes/ directory. If not set, the default theme is used.|
|» » saveMediaMetadata|body|boolean|false|Optional. Whether the official client should save metadata from future<br> media uploads.|
|» webhooksSetting|body|object|false|The value of the WEBHOOKS setting.|
|» » webhooks|body|[[UserWebhook](#schemauserwebhook)]|false|The user's webhooks.|
|» tagsSetting|body|object|false|The value of the TAGS setting.|
|» » tags|body|object|false|Optional. Map of tag name pattern to tag metadata. Each key is treated as<br> an anchored regular expression (^pattern$).|
|» » » **additionalProperties**|body|[UserSetting_TagMetadata](#schemausersetting_tagmetadata)|false|TagMetadata holds user-specific display rules for a tag.|
|» editorSetting|body|object|false|The value of the EDITOR setting.|
|» » sourceMode|body|boolean|false|Optional. Whether the official client's memo editor uses source mode,<br> which shows and edits memos as Markdown text instead of formatted text.<br> The official client calls this "Markdown mode".|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "generalSetting": {
    "locale": "string",
    "memoVisibility": "string",
    "theme": "string",
    "saveMediaMetadata": true
  },
  "webhooksSetting": {
    "webhooks": [
      {
        "name": "string",
        "displayName": "string",
        "url": "string",
        "signingSecretSet": true,
        "createTime": "1970-01-01T00:00:00Z",
        "updateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "tagsSetting": {
    "tags": {
      "property1": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      },
      "property2": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      }
    }
  },
  "editorSetting": {
    "sourceMode": true
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userserviceupdateusersetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserSetting](#schemausersetting)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ListUserStats

<a id="opIdUserService_ListUserStats"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/stats \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/stats`

ListUserStats returns memo statistics for every user who created at least
 one matching memo the caller can read. Use the parent users/- for all
 users, or users/{user} for one user.

<h3 id="userservicelistuserstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|filter|query|string|false|Optional. A CEL expression selecting the memos to count. Uses the same<br> filter syntax as ListMemos.|
|state|query|string(enum)|false|Optional. The state of the memos to count. Defaults to NORMAL. ARCHIVED<br> counts only the caller's own memos.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NORMAL|
|state|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "userStats": [
    {
      "name": "string",
      "totalMemoCount": 0,
      "memoTypeStats": {
        "linkCount": 0,
        "codeCount": 0,
        "todoCount": 0,
        "undoCount": 0
      },
      "tagCounts": {
        "property1": 0,
        "property2": 0
      },
      "pinnedMemos": [
        "string"
      ],
      "memoCreatedTimestamps": [
        "1970-01-01T00:00:00Z"
      ],
      "memoUpdatedTimestamps": [
        "1970-01-01T00:00:00Z"
      ],
      "attachmentStorageBytes": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicelistuserstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListUserStatsResponse](#schemalistuserstatsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_GetUserUsage

<a id="opIdUserService_GetUserUsage"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/usage \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/usage`

GetUserUsage returns a user's usage and the usage limits in effect for the
 user. Only the user or an admin may call it.

<h3 id="userservicegetuserusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "memoCount": "string",
  "storageBytes": "string",
  "limits": {
    "memoCount": "string",
    "memoContentBytes": "string",
    "storageBytes": "string",
    "uploadBytes": "string"
  },
  "limitIndex": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicegetuserusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserUsage](#schemauserusage)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ListMemoViews

<a id="opIdUserService_ListMemoViews"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/views \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/views`

ListMemoViews lists a user's memo views. Each view is a named, reusable
 CEL filter (see MemoView.filter); pass its filter string directly to the
 ListMemos `filter` argument. Only the user may call it.

<h3 id="userservicelistmemoviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|

> Example responses

> 200 Response

```json
{
  "memoViews": [
    {
      "name": "string",
      "title": "string",
      "filter": "string",
      "icon": {
        "emoji": "string",
        "lucide": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicelistmemoviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMemoViewsResponse](#schemalistmemoviewsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_CreateMemoView

<a id="opIdUserService_CreateMemoView"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/views \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "title": "string",
    "filter": "string",
    "icon": {
      "emoji": "string",
      "lucide": "string"
    }
  }'
```

`POST /api/users/{user}/views`

CreateMemoView creates a memo view for a user. Only the user may call it.

> Body parameter

```json
{
  "name": "string",
  "title": "string",
  "filter": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  }
}
```

<h3 id="userservicecreatememoview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|validateOnly|query|boolean|false|Optional. If set, validate the request but do not create the memo view.|
|body|body|[MemoView](#schemamemoview)|true|none|
|» name|body|string|false|Identifier. The resource name of the memo view.<br> Format: users/{user}/views/{view}|
|» title|body|string|true|Required. The title of the memo view.|
|» filter|body|string|true|Required. The CEL filter expression for the memo view, using the same<br> grammar as the ListMemos `filter` argument. Reuse it by passing this value<br> to ListMemos.|
|» icon|body|object|false|Optional. Display icon. Omit when updating with the "icon" mask to reset to<br> the default view icon.|
|» » emoji|body|string|false|A Unicode emoji sequence.|
|» » lucide|body|string|false|A canonical Lucide icon name, such as "leaf".|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "title": "string",
  "filter": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicecreatememoview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MemoView](#schemamemoview)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_GetMemoView

<a id="opIdUserService_GetMemoView"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/views/string \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/views/{view}`

GetMemoView gets a memo view. Only the owner may call it.

<h3 id="userservicegetmemoview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|view|path|string|true|The view id.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "title": "string",
  "filter": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicegetmemoview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MemoView](#schemamemoview)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_DeleteMemoView

<a id="opIdUserService_DeleteMemoView"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/views/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/users/{user}/views/{view}`

DeleteMemoView deletes a memo view. Only the owner may call it.

<h3 id="userservicedeletememoview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|view|path|string|true|The view id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicedeletememoview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_UpdateMemoView

<a id="opIdUserService_UpdateMemoView"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/views/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "title": "string",
    "filter": "string",
    "icon": {
      "emoji": "string",
      "lucide": "string"
    }
  }'
```

`PATCH /api/users/{user}/views/{view}`

UpdateMemoView updates a memo view. Only the owner may call it.

> Body parameter

```json
{
  "name": "string",
  "title": "string",
  "filter": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  }
}
```

<h3 id="userserviceupdatememoview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|view|path|string|true|The view id.|
|updateMask|query|string(field-mask)|false|Optional. The fields to update. Supported paths: title, filter, icon. The<br> service rejects an empty mask.|
|body|body|[MemoView](#schemamemoview)|true|none|
|» name|body|string|false|Identifier. The resource name of the memo view.<br> Format: users/{user}/views/{view}|
|» title|body|string|true|Required. The title of the memo view.|
|» filter|body|string|true|Required. The CEL filter expression for the memo view, using the same<br> grammar as the ListMemos `filter` argument. Reuse it by passing this value<br> to ListMemos.|
|» icon|body|object|false|Optional. Display icon. Omit when updating with the "icon" mask to reset to<br> the default view icon.|
|» » emoji|body|string|false|A Unicode emoji sequence.|
|» » lucide|body|string|false|A canonical Lucide icon name, such as "leaf".|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "title": "string",
  "filter": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userserviceupdatememoview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MemoView](#schemamemoview)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ReorderMemoViews

<a id="opIdUserService_ReorderMemoViews"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/views:reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "parent": "string",
    "names": [
      "string"
    ]
  }'
```

`POST /api/users/{user}/views:reorder`

ReorderMemoViews sets the order of a user's memo views, which is the order
 ListMemoViews returns them in. Only the user may call it.

> Body parameter

```json
{
  "parent": "string",
  "names": [
    "string"
  ]
}
```

<h3 id="userservicereordermemoviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|body|body|[ReorderMemoViewsRequest](#schemareordermemoviewsrequest)|true|none|
|» parent|body|string|true|Required. The user whose memo views are reordered.<br> Format: users/{user}|
|» names|body|[string]|true|Required. The resource names of all the user's memo views, in the new<br> order. The service rejects a list that omits a memo view, repeats one, or<br> names one the user does not have.<br> Format: users/{user}/views/{view}|

> Example responses

> 200 Response

```json
{
  "memoViews": [
    {
      "name": "string",
      "title": "string",
      "filter": "string",
      "icon": {
        "emoji": "string",
        "lucide": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicereordermemoviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReorderMemoViewsResponse](#schemareordermemoviewsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ListUserWebhooks

<a id="opIdUserService_ListUserWebhooks"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/webhooks \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/webhooks`

ListUserWebhooks lists a user's webhooks. Only the user may call it.

<h3 id="userservicelistuserwebhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|

> Example responses

> 200 Response

```json
{
  "webhooks": [
    {
      "name": "string",
      "displayName": "string",
      "url": "string",
      "signingSecretSet": true,
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicelistuserwebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListUserWebhooksResponse](#schemalistuserwebhooksresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_CreateUserWebhook

<a id="opIdUserService_CreateUserWebhook"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "displayName": "string",
    "url": "string",
    "signingSecret": "string"
  }'
```

`POST /api/users/{user}/webhooks`

CreateUserWebhook creates a webhook for a user. Only the user may call it.
 The service generates a signing secret when none is given.

> Body parameter

```json
{
  "name": "string",
  "displayName": "string",
  "url": "string",
  "signingSecret": "string"
}
```

<h3 id="userservicecreateuserwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|body|body|[UserWebhook](#schemauserwebhook)|true|none|
|» name|body|string|false|Identifier. The resource name of the webhook.<br> Format: users/{user}/webhooks/{webhook}|
|» displayName|body|string|false|A human-readable name for the webhook.|
|» url|body|string|false|The URL the webhook request is sent to. Required on create.|
|» signingSecret|body|string|false|Input only. The secret used to HMAC-SHA256 sign the webhook request body.<br> Never returned; use GetUserWebhookSigningSecret to read it.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "displayName": "string",
  "url": "string",
  "signingSecretSet": true,
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicecreateuserwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserWebhook](#schemauserwebhook)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_DeleteUserWebhook

<a id="opIdUserService_DeleteUserWebhook"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/users/{user}/webhooks/{webhook}`

DeleteUserWebhook deletes a webhook. Only the owner may call it.

<h3 id="userservicedeleteuserwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|webhook|path|string|true|The webhook id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicedeleteuserwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_UpdateUserWebhook

<a id="opIdUserService_UpdateUserWebhook"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "displayName": "string",
    "url": "string",
    "signingSecret": "string"
  }'
```

`PATCH /api/users/{user}/webhooks/{webhook}`

UpdateUserWebhook updates a webhook. Only the owner may call it.

> Body parameter

```json
{
  "name": "string",
  "displayName": "string",
  "url": "string",
  "signingSecret": "string"
}
```

<h3 id="userserviceupdateuserwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|webhook|path|string|true|The webhook id.|
|updateMask|query|string(field-mask)|false|The fields to update. Supported paths: url, display_name, signing_secret.<br> When unset, all of them are updated, skipping an empty url or<br> signing_secret.|
|body|body|[UserWebhook](#schemauserwebhook)|true|none|
|» name|body|string|false|Identifier. The resource name of the webhook.<br> Format: users/{user}/webhooks/{webhook}|
|» displayName|body|string|false|A human-readable name for the webhook.|
|» url|body|string|false|The URL the webhook request is sent to. Required on create.|
|» signingSecret|body|string|false|Input only. The secret used to HMAC-SHA256 sign the webhook request body.<br> Never returned; use GetUserWebhookSigningSecret to read it.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "displayName": "string",
  "url": "string",
  "signingSecretSet": true,
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userserviceupdateuserwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserWebhook](#schemauserwebhook)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_GetUserWebhookSigningSecret

<a id="opIdUserService_GetUserWebhookSigningSecret"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string/webhooks/string:getSigningSecret \
  -H 'Accept: application/json'
```

`GET /api/users/{user}/webhooks/{webhook}:getSigningSecret`

GetUserWebhookSigningSecret returns the signing secret of a webhook. Only
 the owner may call it. The secret is returned only through this call; it
 is never included in List, Create or Update responses.

<h3 id="userservicegetuserwebhooksigningsecret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|webhook|path|string|true|The webhook id.|

> Example responses

> 200 Response

```json
{
  "signingSecret": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicegetuserwebhooksigningsecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetUserWebhookSigningSecretResponse](#schemagetuserwebhooksigningsecretresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_GetUserStats

<a id="opIdUserService_GetUserStats"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string:getStats \
  -H 'Accept: application/json'
```

`GET /api/users/{user}:getStats`

GetUserStats returns memo statistics for one user, counting the user's
 memos that the caller can read.

<h3 id="userservicegetuserstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|filter|query|string|false|Optional. A CEL expression selecting the readable memos to count.<br> Supports the same fields as ListMemos, including `space` and `parent`.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "totalMemoCount": 0,
  "memoTypeStats": {
    "linkCount": 0,
    "codeCount": 0,
    "todoCount": 0,
    "undoCount": 0
  },
  "tagCounts": {
    "property1": 0,
    "property2": 0
  },
  "pinnedMemos": [
    "string"
  ],
  "memoCreatedTimestamps": [
    "1970-01-01T00:00:00Z"
  ],
  "memoUpdatedTimestamps": [
    "1970-01-01T00:00:00Z"
  ],
  "attachmentStorageBytes": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicegetuserstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserStats](#schemauserstats)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_ImportMemos

<a id="opIdUserService_ImportMemos"></a>

> Code samples

```bash
curl http://localhost:5230/api/users/string:importMemos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "spec": {
      "totalSize": "string"
    },
    "uploadId": "string",
    "writeOffset": "string",
    "data": "string",
    "finishWrite": true,
    "conflictPolicy": "CONFLICT_POLICY_UNSPECIFIED",
    "validateOnly": true
  }'
```

`POST /api/users/{user}:importMemos`

ImportMemos uploads a Memos export file in bounded chunks and imports it
 into the user's memos. The first call carries the spec and returns an
 upload_id; later calls carry that upload_id. A finishing call with
 validate_only returns the plan and keeps the archive staged; a finishing
 call without it imports and returns the report. Uploads are bound to the
 authenticated user, expire after 30 minutes of inactivity, and do not
 survive a server restart.

> Body parameter

```json
{
  "name": "string",
  "spec": {
    "totalSize": "string"
  },
  "uploadId": "string",
  "writeOffset": "string",
  "data": "string",
  "finishWrite": true,
  "conflictPolicy": "CONFLICT_POLICY_UNSPECIFIED",
  "validateOnly": true
}
```

<h3 id="userserviceimportmemos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|The user id.|
|body|body|[ImportMemosRequest](#schemaimportmemosrequest)|true|none|
|» name|body|string|true|Required. The user who receives the memos. Must be the caller.<br> Format: users/{user}|
|» spec|body|object|false|Starts a new upload. The same call may also carry data and finish_write.|
|» » totalSize|body|string|false|Optional. Total size of the archive in bytes.|
|» uploadId|body|string|false|Continues the upload identified by a previous response.|
|» writeOffset|body|string|true|Required. Zero-based byte offset at which data is written. Must equal the<br> committed size, except when retrying the most recently accepted chunk<br> with identical bytes and offset, which is accepted without writing again.|
|» data|body|string(bytes)|false|Optional. Archive bytes, at most max_chunk_size long. With no data and<br> finish_write false, the call reports progress without writing, and<br> write_offset is ignored.|
|» finishWrite|body|boolean|false|Optional. Finish the upload after writing data. The committed size must<br> then equal total_size. The archive is validated and, unless<br> validate_only is set, imported. Any later call for an imported upload<br> returns the same report.|
|» conflictPolicy|body|string(enum)|false|Optional. Read on the finishing call that imports. Unspecified means SKIP.|
|» validateOnly|body|boolean|false|Optional. On a finishing call, validate the archive and return the plan<br> without importing. The upload stays staged so a later finishing call can<br> import it.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» conflictPolicy|CONFLICT_POLICY_UNSPECIFIED|
|» conflictPolicy|SKIP|
|» conflictPolicy|REPLACE|
|» conflictPolicy|DUPLICATE|

> Example responses

> 200 Response

```json
{
  "uploadId": "string",
  "committedSize": "string",
  "maxChunkSize": 0,
  "plan": {
    "exportTime": "1970-01-01T00:00:00Z",
    "exporter": "string",
    "generator": "string",
    "memoCount": 0,
    "attachmentCount": 0,
    "new": 0,
    "existing": 0,
    "renamed": 0,
    "warnings": [
      {
        "memoUid": "string",
        "message": "string"
      }
    ]
  },
  "report": {
    "created": 0,
    "updated": 0,
    "skipped": 0,
    "failed": 0,
    "warnings": [
      {
        "memoUid": "string",
        "message": "string"
      }
    ],
    "failures": [
      {
        "memoUid": "string",
        "message": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userserviceimportmemos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportMemosResponse](#schemaimportmemosresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## UserService_BatchGetUsers

<a id="opIdUserService_BatchGetUsers"></a>

> Code samples

```bash
curl http://localhost:5230/api/users:batchGet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "names": [
      "string"
    ]
  }'
```

`POST /api/users:batchGet`

BatchGetUsers gets active users by username. Usernames that match no
 active user are omitted from the response.

> Body parameter

```json
{
  "names": [
    "string"
  ]
}
```

<h3 id="userservicebatchgetusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchGetUsersRequest](#schemabatchgetusersrequest)|true|none|
|» names|body|[string]|true|Required. The resource names of the users to get. Empty and duplicate<br> entries are ignored. At most 100 non-empty names are allowed.<br> Format: users/{user}|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "name": "string",
      "username": "string",
      "displayName": "string",
      "email": "string",
      "avatarUrl": "string",
      "description": "string",
      "role": "ROLE_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

<h3 id="userservicebatchgetusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchGetUsersResponse](#schemabatchgetusersresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AcceptSpaceInvitationRequest">AcceptSpaceInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptspaceinvitationrequest"></a>
<a id="schema_AcceptSpaceInvitationRequest"></a>
<a id="tocSacceptspaceinvitationrequest"></a>
<a id="tocsacceptspaceinvitationrequest"></a>

```json
{
  "name": "string"
}
```

Request message for SpaceService.AcceptSpaceInvitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The resource name of the invitation.<br> Format: spaces/{space}/invitations/{invitation}|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "name": "string",
  "creator": "string",
  "filename": "string",
  "type": "string",
  "content": "string",
  "externalLink": "string",
  "motionMedia": {
    "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
    "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
    "groupId": "string",
    "presentationTimestampUs": "string",
    "hasEmbeddedVideo": true
  },
  "mediaMetadata": {
    "width": 0,
    "height": 0,
    "photo": {
      "captureTime": {
        "localDateTime": "string",
        "utcOffset": "string"
      },
      "location": {
        "latitude": 0,
        "longitude": 0,
        "altitudeMeters": 0
      },
      "sourceExifOrientation": 0,
      "cameraMake": "string",
      "cameraModel": "string",
      "lensModel": "string",
      "fNumber": 0,
      "exposureTimeSeconds": 0,
      "iso": 0,
      "focalLengthMm": 0
    },
    "video": {
      "durationSeconds": 0
    }
  },
  "memo": "string",
  "size": "string",
  "createTime": "1970-01-01T00:00:00Z"
}
```

Attachment is a file uploaded by a user, optionally linked to a memo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the attachment.<br> Format: attachments/{attachment}|
|creator|string|false|read-only|Output only. The user who uploaded the attachment, which may differ from the creator of the linked memo.<br> Format: users/{user}|
|filename|string|true|none|Required. The filename of the attachment.|
|type|string|true|none|Required. The MIME type of the attachment. If empty on create, the service detects it from the filename and<br> content.|
|content|string(bytes)|false|write-only|Input only. The content of the attachment.|
|externalLink|string|false|none|Optional. The external link of the attachment. Set only for externally stored attachments; ignored on create.|
|motionMedia|object|false|none|Optional. Motion photo metadata. Clients may only supply Apple Live Photo metadata; the service detects Android<br> motion photos in JPEG content.|
|mediaMetadata|object|false|none|Optional. Normalized media metadata supplied by the client at creation time. Immutable after creation.|
|memo|string|false|none|Optional. The memo the attachment is linked to. On create, the caller must be able to manage the memo.<br> Format: memos/{memo}|
|size|string|false|read-only|Output only. The size of the stored content in bytes.|
|createTime|string(date-time)|false|read-only|Output only. The creation time.|

<h2 id="tocS_BatchDeleteAttachmentsRequest">BatchDeleteAttachmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteattachmentsrequest"></a>
<a id="schema_BatchDeleteAttachmentsRequest"></a>
<a id="tocSbatchdeleteattachmentsrequest"></a>
<a id="tocsbatchdeleteattachmentsrequest"></a>

```json
{
  "names": [
    "string"
  ]
}
```

Request message for AttachmentService.BatchDeleteAttachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|true|none|Required. The names of the attachments to delete, at most 100. Duplicate names are ignored.<br> Format: attachments/{attachment}|

<h2 id="tocS_BatchGetInstanceSettingsRequest">BatchGetInstanceSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetinstancesettingsrequest"></a>
<a id="schema_BatchGetInstanceSettingsRequest"></a>
<a id="tocSbatchgetinstancesettingsrequest"></a>
<a id="tocsbatchgetinstancesettingsrequest"></a>

```json
{
  "names": [
    "string"
  ]
}
```

Request message for InstanceService.BatchGetInstanceSettings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|true|none|Required. The resource names of the instance settings. At most 100.<br> Format: instance/settings/{setting}|

<h2 id="tocS_BatchGetInstanceSettingsResponse">BatchGetInstanceSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetinstancesettingsresponse"></a>
<a id="schema_BatchGetInstanceSettingsResponse"></a>
<a id="tocSbatchgetinstancesettingsresponse"></a>
<a id="tocsbatchgetinstancesettingsresponse"></a>

```json
{
  "instanceSettings": [
    {
      "name": "string",
      "generalSetting": {
        "customProfile": {
          "title": "string",
          "description": "string",
          "logoUrl": "string"
        },
        "disallowUserRegistration": true,
        "disallowPasswordAuth": true,
        "disallowChangeUsername": true,
        "disallowChangeNickname": true,
        "weekStartDayOffset": 0,
        "additionalStyle": "string",
        "additionalScript": "string"
      },
      "storageSetting": {
        "storages": [
          {
            "id": "string",
            "name": "string",
            "type": "STORAGE_TYPE_UNSPECIFIED",
            "s3Config": {
              "endpoint": "string",
              "region": "string",
              "bucket": "string",
              "accessKeyId": "string",
              "accessKeySecret": "string",
              "usePathStyle": true,
              "insecureSkipTlsVerify": true
            }
          }
        ],
        "defaultStorageId": "string",
        "filepathTemplate": "string",
        "storageType": "STORAGE_TYPE_UNSPECIFIED",
        "s3Config": {
          "endpoint": "string",
          "region": "string",
          "bucket": "string",
          "accessKeyId": "string",
          "accessKeySecret": "string",
          "usePathStyle": true,
          "insecureSkipTlsVerify": true
        }
      },
      "tagsSetting": {
        "tags": {
          "property1": {
            "backgroundColor": {
              "red": 0,
              "green": 0,
              "blue": 0,
              "alpha": 0
            },
            "blurContent": true
          },
          "property2": {
            "backgroundColor": {
              "red": 0,
              "green": 0,
              "blue": 0,
              "alpha": 0
            },
            "blurContent": true
          }
        }
      },
      "notificationSetting": {
        "email": {
          "enabled": true,
          "smtpHost": "string",
          "smtpPort": 0,
          "smtpUsername": "string",
          "smtpPassword": "string",
          "useTls": true,
          "useSsl": true,
          "fromEmail": "string",
          "fromName": "string",
          "replyTo": "string"
        }
      },
      "aiSetting": {
        "providers": [
          {
            "id": "string",
            "title": "string",
            "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
            "endpoint": "string",
            "apiKey": "string",
            "apiKeySet": true,
            "apiKeyHint": "string"
          }
        ],
        "transcription": {
          "providerId": "string",
          "model": "string",
          "language": "string",
          "prompt": "string"
        }
      },
      "accessSetting": {
        "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED"
      },
      "usageLimitsSetting": {
        "limits": [
          {
            "users": [
              "string"
            ],
            "allUsers": true,
            "memoCount": "string",
            "memoContentBytes": "string",
            "storageBytes": "string",
            "uploadBytes": "string"
          }
        ]
      }
    }
  ]
}
```

Response message for InstanceService.BatchGetInstanceSettings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSettings|[[InstanceSetting](#schemainstancesetting)]|false|none|The instance settings, in the same order as the requested names.|

<h2 id="tocS_BatchGetLinkMetadataRequest">BatchGetLinkMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetlinkmetadatarequest"></a>
<a id="schema_BatchGetLinkMetadataRequest"></a>
<a id="tocSbatchgetlinkmetadatarequest"></a>
<a id="tocsbatchgetlinkmetadatarequest"></a>

```json
{
  "urls": [
    "string"
  ]
}
```

Request message for MemoService.BatchGetLinkMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urls|[string]|true|none|Required. The link URLs. At most 10.|

<h2 id="tocS_BatchGetLinkMetadataResponse">BatchGetLinkMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetlinkmetadataresponse"></a>
<a id="schema_BatchGetLinkMetadataResponse"></a>
<a id="tocSbatchgetlinkmetadataresponse"></a>
<a id="tocsbatchgetlinkmetadataresponse"></a>

```json
{
  "linkMetadata": [
    {
      "url": "string",
      "title": "string",
      "description": "string",
      "image": "string"
    }
  ]
}
```

Response message for MemoService.BatchGetLinkMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkMetadata|[[LinkMetadata](#schemalinkmetadata)]|false|none|The link metadata, in the same order as the requested URLs.|

<h2 id="tocS_BatchGetUsersRequest">BatchGetUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetusersrequest"></a>
<a id="schema_BatchGetUsersRequest"></a>
<a id="tocSbatchgetusersrequest"></a>
<a id="tocsbatchgetusersrequest"></a>

```json
{
  "names": [
    "string"
  ]
}
```

Request message for UserService.BatchGetUsers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|true|none|Required. The resource names of the users to get. Empty and duplicate<br> entries are ignored. At most 100 non-empty names are allowed.<br> Format: users/{user}|

<h2 id="tocS_BatchGetUsersResponse">BatchGetUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetusersresponse"></a>
<a id="schema_BatchGetUsersResponse"></a>
<a id="tocSbatchgetusersresponse"></a>
<a id="tocsbatchgetusersresponse"></a>

```json
{
  "users": [
    {
      "name": "string",
      "username": "string",
      "displayName": "string",
      "email": "string",
      "avatarUrl": "string",
      "description": "string",
      "password": "string",
      "role": "ROLE_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Response message for UserService.BatchGetUsers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[[User](#schemauser)]|false|none|The active users that match the requested names.|

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
{
  "red": 0,
  "green": 0,
  "blue": 0,
  "alpha": 0
}
```

Represents a color in the RGBA color space. This representation is designed
 for simplicity of conversion to/from color representations in various
 languages over compactness. For example, the fields of this representation
 can be trivially provided to the constructor of `java.awt.Color` in Java; it
 can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha`
 method in iOS; and, with just a little work, it can be easily formatted into
 a CSS `rgba()` string in JavaScript.

 This reference page doesn't carry information about the absolute color
 space
 that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
 DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color
 space.

 When color equality needs to be decided, implementations, unless
 documented otherwise, treat two colors as equal if all their red,
 green, blue, and alpha values each differ by at most 1e-5.

 Example (Java):

      import com.google.type.Color;

      // ...
      public static java.awt.Color fromProto(Color protocolor) {
        float alpha = protocolor.hasAlpha()
            ? protocolor.getAlpha().getValue()
            : 1.0;

        return new java.awt.Color(
            protocolor.getRed(),
            protocolor.getGreen(),
            protocolor.getBlue(),
            alpha);
      }

      public static Color toProto(java.awt.Color color) {
        float red = (float) color.getRed();
        float green = (float) color.getGreen();
        float blue = (float) color.getBlue();
        float denominator = 255.0;
        Color.Builder resultBuilder =
            Color
                .newBuilder()
                .setRed(red / denominator)
                .setGreen(green / denominator)
                .setBlue(blue / denominator);
        int alpha = color.getAlpha();
        if (alpha != 255) {
          result.setAlpha(
              FloatValue
                  .newBuilder()
                  .setValue(((float) alpha) / denominator)
                  .build());
        }
        return resultBuilder.build();
      }
      // ...

 Example (iOS / Obj-C):

      // ...
      static UIColor* fromProto(Color* protocolor) {
         float red = [protocolor red];
         float green = [protocolor green];
         float blue = [protocolor blue];
         FloatValue* alpha_wrapper = [protocolor alpha];
         float alpha = 1.0;
         if (alpha_wrapper != nil) {
           alpha = [alpha_wrapper value];
         }
         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
      }

      static Color* toProto(UIColor* color) {
          CGFloat red, green, blue, alpha;
          if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
            return nil;
          }
          Color* result = [[Color alloc] init];
          [result setRed:red];
          [result setGreen:green];
          [result setBlue:blue];
          if (alpha <= 0.9999) {
            [result setAlpha:floatWrapperWithValue(alpha)];
          }
          [result autorelease];
          return result;
     }
     // ...

  Example (JavaScript):

     // ...

     var protoToCssColor = function(rgb_color) {
        var redFrac = rgb_color.red || 0.0;
        var greenFrac = rgb_color.green || 0.0;
        var blueFrac = rgb_color.blue || 0.0;
        var red = Math.floor(redFrac * 255);
        var green = Math.floor(greenFrac * 255);
        var blue = Math.floor(blueFrac * 255);

        if (!('alpha' in rgb_color)) {
           return rgbToCssColor(red, green, blue);
        }

        var alphaFrac = rgb_color.alpha.value || 0.0;
        var rgbParams = [red, green, blue].join(',');
        return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
     };

     var rgbToCssColor = function(red, green, blue) {
       var rgbNumber = new Number((red << 16) | (green << 8) | blue);
       var hexString = rgbNumber.toString(16);
       var missingZeros = 6 - hexString.length;
       var resultBuilder = ['#'];
       for (var i = 0; i < missingZeros; i++) {
          resultBuilder.push('0');
       }
       resultBuilder.push(hexString);
       return resultBuilder.join('');
     };

     // ...

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|red|number(float)|false|none|The amount of red in the color as a value in the interval [0, 1].|
|green|number(float)|false|none|The amount of green in the color as a value in the interval [0, 1].|
|blue|number(float)|false|none|The amount of blue in the color as a value in the interval [0, 1].|
|alpha|number(float)|false|none|The fraction of this color that should be applied to the pixel. That is,<br> the final pixel color is defined by the equation:<br><br>   `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)`<br><br> This means that a value of 1.0 corresponds to a solid color, whereas<br> a value of 0.0 corresponds to a completely transparent color. This<br> uses a wrapper message rather than a simple float scalar so that it is<br> possible to distinguish between a default value and the value being unset.<br> If omitted, this color object is rendered as a solid color<br> (as if the alpha value had been explicitly given a value of 1.0).|

<h2 id="tocS_ConfigurationStatus">ConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationstatus"></a>
<a id="schema_ConfigurationStatus"></a>
<a id="tocSconfigurationstatus"></a>
<a id="tocsconfigurationstatus"></a>

```json
{
  "serial": "string",
  "configDigest": "string",
  "appliedBy": "string",
  "version": "string",
  "managedResources": [
    {
      "resource": "string",
      "source": "string",
      "managedFields": [
        "string"
      ],
      "ignoredFields": [
        "string"
      ]
    }
  ],
  "applyTime": "1970-01-01T00:00:00Z"
}
```

ConfigurationStatus is what declarative configuration manages on the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serial|string|false|none|The state record serial; zero before any apply has changed something.|
|configDigest|string|false|none|Identifies the applied configuration, with sensitive values masked before hashing.|
|appliedBy|string|false|none|The apply path ("cli" or "startup") and the host of the last apply.|
|version|string|false|none|The Memos version of the last apply.|
|managedResources|[[ConfigurationStatus_ManagedResource](#schemaconfigurationstatus_managedresource)]|false|none|The resources the configuration manages.|
|applyTime|string(date-time)|false|none|When the last apply that changed something ran.|

<h2 id="tocS_ConfigurationStatus_ManagedResource">ConfigurationStatus_ManagedResource</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationstatus_managedresource"></a>
<a id="schema_ConfigurationStatus_ManagedResource"></a>
<a id="tocSconfigurationstatus_managedresource"></a>
<a id="tocsconfigurationstatus_managedresource"></a>

```json
{
  "resource": "string",
  "source": "string",
  "managedFields": [
    "string"
  ],
  "ignoredFields": [
    "string"
  ]
}
```

ManagedResource is one resource the configuration manages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|string|false|none|The resource name.<br> Format: identity-providers/{idp}, instance/settings/{setting}, or users/{user}|
|source|string|false|none|The configuration file that declares the resource.|
|managedFields|[string]|false|none|The field paths, in JSON names, the configuration manages; "*" means the whole resource.|
|ignoredFields|[string]|false|none|The managed field paths the configuration does not write after creation, so the API accepts edits to them.|

<h2 id="tocS_CreateLinkedIdentityRequest">CreateLinkedIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelinkedidentityrequest"></a>
<a id="schema_CreateLinkedIdentityRequest"></a>
<a id="tocScreatelinkedidentityrequest"></a>
<a id="tocscreatelinkedidentityrequest"></a>

```json
{
  "parent": "string",
  "identityProvider": "string",
  "code": "string",
  "redirectUri": "string",
  "codeVerifier": "string"
}
```

Request message for UserService.CreateLinkedIdentity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|true|none|Required. The user who owns the linked identity. Must be the caller.<br> Format: users/{user}|
|identityProvider|string|true|none|Required. The identity provider to link.<br> Format: identity-providers/{idp}|
|code|string|true|none|Required. The authorization code from the identity provider.|
|redirectUri|string|true|none|Required. The redirect URI used in the OAuth flow.|
|codeVerifier|string|false|none|Optional. The PKCE code verifier used in the OAuth flow.|

<h2 id="tocS_CreatePersonalAccessTokenRequest">CreatePersonalAccessTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepersonalaccesstokenrequest"></a>
<a id="schema_CreatePersonalAccessTokenRequest"></a>
<a id="tocScreatepersonalaccesstokenrequest"></a>
<a id="tocscreatepersonalaccesstokenrequest"></a>

```json
{
  "parent": "string",
  "description": "string",
  "expiresInDays": 0
}
```

Request message for UserService.CreatePersonalAccessToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|true|none|Required. The user who owns the token. Must be the caller.<br> Format: users/{user}|
|description|string|false|none|Optional. The description of the token.|
|expiresInDays|integer(int32)|false|none|Optional. The lifetime of the token in days. 0 means the token never<br> expires.|

<h2 id="tocS_CreatePersonalAccessTokenResponse">CreatePersonalAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepersonalaccesstokenresponse"></a>
<a id="schema_CreatePersonalAccessTokenResponse"></a>
<a id="tocScreatepersonalaccesstokenresponse"></a>
<a id="tocscreatepersonalaccesstokenresponse"></a>

```json
{
  "personalAccessToken": {
    "name": "string",
    "description": "string",
    "createTime": "1970-01-01T00:00:00Z",
    "expireTime": "1970-01-01T00:00:00Z",
    "lastUseTime": "1970-01-01T00:00:00Z"
  },
  "token": "string"
}
```

Response message for UserService.CreatePersonalAccessToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalAccessToken|object|false|none|The personal access token metadata.|
|token|string|false|none|The token value. This is the only time it is returned.|

<h2 id="tocS_DeclineSpaceInvitationRequest">DeclineSpaceInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeclinespaceinvitationrequest"></a>
<a id="schema_DeclineSpaceInvitationRequest"></a>
<a id="tocSdeclinespaceinvitationrequest"></a>
<a id="tocsdeclinespaceinvitationrequest"></a>

```json
{
  "name": "string"
}
```

Request message for SpaceService.DeclineSpaceInvitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The resource name of the invitation.<br> Format: spaces/{space}/invitations/{invitation}|

<h2 id="tocS_FieldMapping">FieldMapping</h2>
<!-- backwards compatibility -->
<a id="schemafieldmapping"></a>
<a id="schema_FieldMapping"></a>
<a id="tocSfieldmapping"></a>
<a id="tocsfieldmapping"></a>

```json
{
  "identifier": "string",
  "displayName": "string",
  "email": "string",
  "avatarUrl": "string"
}
```

FieldMapping maps user info claims of an OAuth2 identity provider to user fields.
 Each field holds the name of a claim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|false|none|The claim that uniquely identifies the user. Sign-in fails when it is missing or empty.|
|displayName|string|false|none|The claim used as the display name. Falls back to the identifier when unset.|
|email|string|false|none|The claim used as the email address.|
|avatarUrl|string|false|none|The claim used as the avatar URL.|

<h2 id="tocS_GeneralSetting_CustomProfile">GeneralSetting_CustomProfile</h2>
<!-- backwards compatibility -->
<a id="schemageneralsetting_customprofile"></a>
<a id="schema_GeneralSetting_CustomProfile"></a>
<a id="tocSgeneralsetting_customprofile"></a>
<a id="tocsgeneralsetting_customprofile"></a>

```json
{
  "title": "string",
  "description": "string",
  "logoUrl": "string"
}
```

CustomProfile is the instance branding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The instance title.|
|description|string|false|none|The instance description.|
|logoUrl|string|false|none|The URL of the instance logo.|

<h2 id="tocS_GetCurrentUserResponse">GetCurrentUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentuserresponse"></a>
<a id="schema_GetCurrentUserResponse"></a>
<a id="tocSgetcurrentuserresponse"></a>
<a id="tocsgetcurrentuserresponse"></a>

```json
{
  "user": {
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "password": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  }
}
```

Response message for AuthService.GetCurrentUser.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|The authenticated user.|

<h2 id="tocS_GetUserWebhookSigningSecretResponse">GetUserWebhookSigningSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserwebhooksigningsecretresponse"></a>
<a id="schema_GetUserWebhookSigningSecretResponse"></a>
<a id="tocSgetuserwebhooksigningsecretresponse"></a>
<a id="tocsgetuserwebhooksigningsecretresponse"></a>

```json
{
  "signingSecret": "string"
}
```

Response message for UserService.GetUserWebhookSigningSecret.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signingSecret|string|false|none|The signing secret, in the Standard Webhooks "whsec_<base64>" form.|

<h2 id="tocS_GoogleProtobufAny">GoogleProtobufAny</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufany"></a>
<a id="schema_GoogleProtobufAny"></a>
<a id="tocSgoogleprotobufany"></a>
<a id="tocsgoogleprotobufany"></a>

```json
{
  "@type": "string"
}
```

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@type|string|false|none|The type of the serialized message.|

<h2 id="tocS_IdentityProvider">IdentityProvider</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovider"></a>
<a id="schema_IdentityProvider"></a>
<a id="tocSidentityprovider"></a>
<a id="tocsidentityprovider"></a>

```json
{
  "name": "string",
  "type": "TYPE_UNSPECIFIED",
  "title": "string",
  "identifierFilter": "string",
  "config": {
    "oauth2Config": {
      "clientId": "string",
      "clientSecret": "string",
      "authUrl": "string",
      "tokenUrl": "string",
      "userInfoUrl": "string",
      "scopes": [
        "string"
      ],
      "fieldMapping": {
        "identifier": "string",
        "displayName": "string",
        "email": "string",
        "avatarUrl": "string"
      }
    }
  }
}
```

IdentityProvider is an external identity provider users can sign in with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the identity provider.<br> Format: identity-providers/{idp}|
|type|string(enum)|true|none|Required. The type of the identity provider.|
|title|string|true|none|Required. The display title of the identity provider.|
|identifierFilter|string|false|none|Optional. A regular expression the user identifier must match to sign in. Empty allows every identifier.|
|config|object|true|none|Required. The type-specific configuration of the identity provider.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|OAUTH2|

<h2 id="tocS_IdentityProviderConfig">IdentityProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviderconfig"></a>
<a id="schema_IdentityProviderConfig"></a>
<a id="tocSidentityproviderconfig"></a>
<a id="tocsidentityproviderconfig"></a>

```json
{
  "oauth2Config": {
    "clientId": "string",
    "clientSecret": "string",
    "authUrl": "string",
    "tokenUrl": "string",
    "userInfoUrl": "string",
    "scopes": [
      "string"
    ],
    "fieldMapping": {
      "identifier": "string",
      "displayName": "string",
      "email": "string",
      "avatarUrl": "string"
    }
  }
}
```

IdentityProviderConfig is the type-specific configuration of an identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauth2Config|object|false|none|The configuration of an OAuth2 identity provider.|

<h2 id="tocS_ImportMemosIssue">ImportMemosIssue</h2>
<!-- backwards compatibility -->
<a id="schemaimportmemosissue"></a>
<a id="schema_ImportMemosIssue"></a>
<a id="tocSimportmemosissue"></a>
<a id="tocsimportmemosissue"></a>

```json
{
  "memoUid": "string",
  "message": "string"
}
```

ImportMemosIssue is one warning or failure of an import, tied to the memo
 UID from the archive when there is one.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memoUid|string|false|none|The archive memo UID the issue concerns, if any.|
|message|string|false|none|A description of the issue.|

<h2 id="tocS_ImportMemosPlan">ImportMemosPlan</h2>
<!-- backwards compatibility -->
<a id="schemaimportmemosplan"></a>
<a id="schema_ImportMemosPlan"></a>
<a id="tocSimportmemosplan"></a>
<a id="tocsimportmemosplan"></a>

```json
{
  "exportTime": "1970-01-01T00:00:00Z",
  "exporter": "string",
  "generator": "string",
  "memoCount": 0,
  "attachmentCount": 0,
  "new": 0,
  "existing": 0,
  "renamed": 0,
  "warnings": [
    {
      "memoUid": "string",
      "message": "string"
    }
  ]
}
```

ImportMemosPlan describes what importing a staged archive would do.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportTime|string(date-time)|false|none|When the archive was written.|
|exporter|string|false|none|Username of the user who exported the archive.|
|generator|string|false|none|The software that wrote the archive.|
|memoCount|integer(int32)|false|none|Number of memo records in the archive.|
|attachmentCount|integer(int32)|false|none|Number of attachment files in the archive.|
|new|integer(int32)|false|none|Memos whose UID nobody on the instance holds.|
|existing|integer(int32)|false|none|Memos the user already holds; the conflict policy applies to them.|
|renamed|integer(int32)|false|none|Memos whose UID another account holds; they are imported under fresh UIDs.|
|warnings|[[ImportMemosIssue](#schemaimportmemosissue)]|false|none|Deviations the archive reader corrected while validating.|

<h2 id="tocS_ImportMemosReport">ImportMemosReport</h2>
<!-- backwards compatibility -->
<a id="schemaimportmemosreport"></a>
<a id="schema_ImportMemosReport"></a>
<a id="tocSimportmemosreport"></a>
<a id="tocsimportmemosreport"></a>

```json
{
  "created": 0,
  "updated": 0,
  "skipped": 0,
  "failed": 0,
  "warnings": [
    {
      "memoUid": "string",
      "message": "string"
    }
  ],
  "failures": [
    {
      "memoUid": "string",
      "message": "string"
    }
  ]
}
```

ImportMemosReport is the outcome of an import.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|integer(int32)|false|none|Number of memos created.|
|updated|integer(int32)|false|none|Number of existing memos replaced under the REPLACE policy.|
|skipped|integer(int32)|false|none|Number of existing memos left untouched under the SKIP policy.|
|failed|integer(int32)|false|none|Number of memos that could not be imported.|
|warnings|[[ImportMemosIssue](#schemaimportmemosissue)]|false|none|Deviations the importer corrected or tolerated.|
|failures|[[ImportMemosIssue](#schemaimportmemosissue)]|false|none|One entry per failed memo, with the reason.|

<h2 id="tocS_ImportMemosRequest">ImportMemosRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportmemosrequest"></a>
<a id="schema_ImportMemosRequest"></a>
<a id="tocSimportmemosrequest"></a>
<a id="tocsimportmemosrequest"></a>

```json
{
  "name": "string",
  "spec": {
    "totalSize": "string"
  },
  "uploadId": "string",
  "writeOffset": "string",
  "data": "string",
  "finishWrite": true,
  "conflictPolicy": "CONFLICT_POLICY_UNSPECIFIED",
  "validateOnly": true
}
```

Request message for UserService.ImportMemos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The user who receives the memos. Must be the caller.<br> Format: users/{user}|
|spec|object|false|none|Starts a new upload. The same call may also carry data and finish_write.|
|uploadId|string|false|none|Continues the upload identified by a previous response.|
|writeOffset|string|true|none|Required. Zero-based byte offset at which data is written. Must equal the<br> committed size, except when retrying the most recently accepted chunk<br> with identical bytes and offset, which is accepted without writing again.|
|data|string(bytes)|false|none|Optional. Archive bytes, at most max_chunk_size long. With no data and<br> finish_write false, the call reports progress without writing, and<br> write_offset is ignored.|
|finishWrite|boolean|false|none|Optional. Finish the upload after writing data. The committed size must<br> then equal total_size. The archive is validated and, unless<br> validate_only is set, imported. Any later call for an imported upload<br> returns the same report.|
|conflictPolicy|string(enum)|false|none|Optional. Read on the finishing call that imports. Unspecified means SKIP.|
|validateOnly|boolean|false|none|Optional. On a finishing call, validate the archive and return the plan<br> without importing. The upload stays staged so a later finishing call can<br> import it.|

#### Enumerated Values

|Property|Value|
|---|---|
|conflictPolicy|CONFLICT_POLICY_UNSPECIFIED|
|conflictPolicy|SKIP|
|conflictPolicy|REPLACE|
|conflictPolicy|DUPLICATE|

<h2 id="tocS_ImportMemosResponse">ImportMemosResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportmemosresponse"></a>
<a id="schema_ImportMemosResponse"></a>
<a id="tocSimportmemosresponse"></a>
<a id="tocsimportmemosresponse"></a>

```json
{
  "uploadId": "string",
  "committedSize": "string",
  "maxChunkSize": 0,
  "plan": {
    "exportTime": "1970-01-01T00:00:00Z",
    "exporter": "string",
    "generator": "string",
    "memoCount": 0,
    "attachmentCount": 0,
    "new": 0,
    "existing": 0,
    "renamed": 0,
    "warnings": [
      {
        "memoUid": "string",
        "message": "string"
      }
    ]
  },
  "report": {
    "created": 0,
    "updated": 0,
    "skipped": 0,
    "failed": 0,
    "warnings": [
      {
        "memoUid": "string",
        "message": "string"
      }
    ],
    "failures": [
      {
        "memoUid": "string",
        "message": "string"
      }
    ]
  }
}
```

Response message for UserService.ImportMemos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadId|string|false|none|Opaque ID for subsequent calls. This is not a resource name.|
|committedSize|string|false|none|Number of archive bytes committed so far.|
|maxChunkSize|integer(int32)|false|none|Maximum number of data bytes accepted in one call.|
|plan|object|false|none|What the import would do. Set by a finishing call with validate_only.|
|report|object|false|none|What the import did. Set by a finishing call that imported.|

<h2 id="tocS_ImportMemosSpec">ImportMemosSpec</h2>
<!-- backwards compatibility -->
<a id="schemaimportmemosspec"></a>
<a id="schema_ImportMemosSpec"></a>
<a id="tocSimportmemosspec"></a>
<a id="tocsimportmemosspec"></a>

```json
{
  "totalSize": "string"
}
```

ImportMemosSpec describes a new memo import upload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalSize|string|false|none|Optional. Total size of the archive in bytes.|

<h2 id="tocS_InstanceProfile">InstanceProfile</h2>
<!-- backwards compatibility -->
<a id="schemainstanceprofile"></a>
<a id="schema_InstanceProfile"></a>
<a id="tocSinstanceprofile"></a>
<a id="tocsinstanceprofile"></a>

```json
{
  "version": "string",
  "commit": "string",
  "demo": true,
  "instanceUrl": "string",
  "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED",
  "needsSetup": true,
  "admin": {
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "password": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  },
  "challenge": {
    "provider": "string",
    "siteKey": "string"
  }
}
```

InstanceProfile is the basic information about the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|The version of the running server.|
|commit|string|false|none|The build commit of the running server.|
|demo|boolean|false|none|Whether the instance runs in demo mode.|
|instanceUrl|string|false|none|The configured URL of the instance.|
|accessMode|string(enum)|false|none|Whether unauthenticated users may access instance content.|
|needsSetup|boolean|false|none|Whether the instance has no users yet and requires initial setup (creating the first admin account).<br> Unlike a null admin, this stays false once any user exists, so an instance that has lost its admins is not<br> mistaken for a fresh install.|
|admin|object|false|none|The first administrator of the instance, for display purposes.<br> Only set for signed-in callers; anonymous requests never receive it, so the admin's login identifier is not<br> disclosed before authentication. May also be null on an instance that has lost all admins; use needs_setup to<br> determine whether initial setup is required.|
|challenge|object|false|none|The proof-of-humanity challenge required on signup and password sign-in.<br> Absent when none is configured, which is the case on every self-hosted instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|accessMode|INSTANCE_ACCESS_MODE_UNSPECIFIED|
|accessMode|INSTANCE_ACCESS_MODE_PRIVATE|
|accessMode|INSTANCE_ACCESS_MODE_PUBLIC|

<h2 id="tocS_InstanceProfile_Challenge">InstanceProfile_Challenge</h2>
<!-- backwards compatibility -->
<a id="schemainstanceprofile_challenge"></a>
<a id="schema_InstanceProfile_Challenge"></a>
<a id="tocSinstanceprofile_challenge"></a>
<a id="tocsinstanceprofile_challenge"></a>

```json
{
  "provider": "string",
  "siteKey": "string"
}
```

Challenge describes a proof-of-humanity challenge widget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|string|false|none|The challenge provider, which selects the widget the web app renders.|
|siteKey|string|false|none|The provider's public site key for the widget.|

<h2 id="tocS_InstanceSetting">InstanceSetting</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting"></a>
<a id="schema_InstanceSetting"></a>
<a id="tocSinstancesetting"></a>
<a id="tocsinstancesetting"></a>

```json
{
  "name": "string",
  "generalSetting": {
    "customProfile": {
      "title": "string",
      "description": "string",
      "logoUrl": "string"
    },
    "disallowUserRegistration": true,
    "disallowPasswordAuth": true,
    "disallowChangeUsername": true,
    "disallowChangeNickname": true,
    "weekStartDayOffset": 0,
    "additionalStyle": "string",
    "additionalScript": "string"
  },
  "storageSetting": {
    "storages": [
      {
        "id": "string",
        "name": "string",
        "type": "STORAGE_TYPE_UNSPECIFIED",
        "s3Config": {
          "endpoint": "string",
          "region": "string",
          "bucket": "string",
          "accessKeyId": "string",
          "accessKeySecret": "string",
          "usePathStyle": true,
          "insecureSkipTlsVerify": true
        }
      }
    ],
    "defaultStorageId": "string",
    "filepathTemplate": "string",
    "storageType": "STORAGE_TYPE_UNSPECIFIED",
    "s3Config": {
      "endpoint": "string",
      "region": "string",
      "bucket": "string",
      "accessKeyId": "string",
      "accessKeySecret": "string",
      "usePathStyle": true,
      "insecureSkipTlsVerify": true
    }
  },
  "tagsSetting": {
    "tags": {
      "property1": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      },
      "property2": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      }
    }
  },
  "notificationSetting": {
    "email": {
      "enabled": true,
      "smtpHost": "string",
      "smtpPort": 0,
      "smtpUsername": "string",
      "smtpPassword": "string",
      "useTls": true,
      "useSsl": true,
      "fromEmail": "string",
      "fromName": "string",
      "replyTo": "string"
    }
  },
  "aiSetting": {
    "providers": [
      {
        "id": "string",
        "title": "string",
        "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
        "endpoint": "string",
        "apiKey": "string",
        "apiKeySet": true,
        "apiKeyHint": "string"
      }
    ],
    "transcription": {
      "providerId": "string",
      "model": "string",
      "language": "string",
      "prompt": "string"
    }
  },
  "accessSetting": {
    "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED"
  },
  "usageLimitsSetting": {
    "limits": [
      {
        "users": [
          "string"
        ],
        "allUsers": true,
        "memoCount": "string",
        "memoContentBytes": "string",
        "storageBytes": "string",
        "uploadBytes": "string"
      }
    ]
  }
}
```

InstanceSetting is one group of instance-wide settings, selected by its key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the instance setting. {setting} is a Key value, such as GENERAL.<br> Format: instance/settings/{setting}|
|generalSetting|object|false|none|The value of the GENERAL setting.|
|storageSetting|object|false|none|The value of the STORAGE setting.|
|tagsSetting|object|false|none|The value of the TAGS setting.|
|notificationSetting|object|false|none|The value of the NOTIFICATION setting.|
|aiSetting|object|false|none|The value of the AI setting.|
|accessSetting|object|false|none|The value of the ACCESS setting.|
|usageLimitsSetting|object|false|none|The value of the USAGE_LIMITS setting.|

<h2 id="tocS_InstanceSetting_AIProviderConfig">InstanceSetting_AIProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_aiproviderconfig"></a>
<a id="schema_InstanceSetting_AIProviderConfig"></a>
<a id="tocSinstancesetting_aiproviderconfig"></a>
<a id="tocsinstancesetting_aiproviderconfig"></a>

```json
{
  "id": "string",
  "title": "string",
  "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
  "endpoint": "string",
  "apiKey": "string",
  "apiKeySet": true,
  "apiKeyHint": "string"
}
```

AIProviderConfig is one callable AI provider connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The provider ID. Generated when empty on update.|
|title|string|false|none|The provider display title.|
|type|string(enum)|false|none|The provider implementation type.|
|endpoint|string|false|none|The provider API endpoint. Defaults to the provider's public endpoint when empty.|
|apiKey|string|false|write-only|Input only. The provider API key. Never returned; an empty value keeps the stored key.|
|apiKeySet|boolean|false|read-only|Output only. Whether an API key is stored for this provider.|
|apiKeyHint|string|false|read-only|Output only. A masked hint of the stored API key.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AI_PROVIDER_TYPE_UNSPECIFIED|
|type|OPENAI|
|type|GEMINI|

<h2 id="tocS_InstanceSetting_AISetting">InstanceSetting_AISetting</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_aisetting"></a>
<a id="schema_InstanceSetting_AISetting"></a>
<a id="tocSinstancesetting_aisetting"></a>
<a id="tocsinstancesetting_aisetting"></a>

```json
{
  "providers": [
    {
      "id": "string",
      "title": "string",
      "type": "AI_PROVIDER_TYPE_UNSPECIFIED",
      "endpoint": "string",
      "apiKey": "string",
      "apiKeySet": true,
      "apiKeyHint": "string"
    }
  ],
  "transcription": {
    "providerId": "string",
    "model": "string",
    "language": "string",
    "prompt": "string"
  }
}
```

AISetting is the AI provider configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[InstanceSetting_AIProviderConfig](#schemainstancesetting_aiproviderconfig)]|false|none|The AI provider configurations available instance-wide.|
|transcription|object|false|none|The speech-to-text feature configuration.<br> When unset or transcription.provider_id is empty, transcription is disabled. An update that omits it keeps the<br> stored configuration.|

<h2 id="tocS_InstanceSetting_AccessSetting">InstanceSetting_AccessSetting</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_accesssetting"></a>
<a id="schema_InstanceSetting_AccessSetting"></a>
<a id="tocSinstancesetting_accesssetting"></a>
<a id="tocsinstancesetting_accesssetting"></a>

```json
{
  "accessMode": "INSTANCE_ACCESS_MODE_UNSPECIFIED"
}
```

AccessSetting is the instance access policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessMode|string(enum)|false|none|Whether unauthenticated users may access instance content. Must be PRIVATE or PUBLIC on update.|

#### Enumerated Values

|Property|Value|
|---|---|
|accessMode|INSTANCE_ACCESS_MODE_UNSPECIFIED|
|accessMode|INSTANCE_ACCESS_MODE_PRIVATE|
|accessMode|INSTANCE_ACCESS_MODE_PUBLIC|

<h2 id="tocS_InstanceSetting_GeneralSetting">InstanceSetting_GeneralSetting</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_generalsetting"></a>
<a id="schema_InstanceSetting_GeneralSetting"></a>
<a id="tocSinstancesetting_generalsetting"></a>
<a id="tocsinstancesetting_generalsetting"></a>

```json
{
  "customProfile": {
    "title": "string",
    "description": "string",
    "logoUrl": "string"
  },
  "disallowUserRegistration": true,
  "disallowPasswordAuth": true,
  "disallowChangeUsername": true,
  "disallowChangeNickname": true,
  "weekStartDayOffset": 0,
  "additionalStyle": "string",
  "additionalScript": "string"
}
```

GeneralSetting is the general instance configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProfile|object|false|none|Branding shown in the web app.|
|disallowUserRegistration|boolean|false|none|Whether user self-registration is disabled.|
|disallowPasswordAuth|boolean|false|none|Whether password authentication is disabled.|
|disallowChangeUsername|boolean|false|none|Whether users are prevented from changing their username.|
|disallowChangeNickname|boolean|false|none|Whether users are prevented from changing their nickname.|
|weekStartDayOffset|integer(int32)|false|none|The first day of the week as an offset from Sunday.<br> 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday.<br> Default is Sunday.|
|additionalStyle|string|false|none|Custom CSS injected into the web app.|
|additionalScript|string|false|none|Custom JavaScript injected into the web app.|

<h2 id="tocS_InstanceSetting_NotificationSetting">InstanceSetting_NotificationSetting</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_notificationsetting"></a>
<a id="schema_InstanceSetting_NotificationSetting"></a>
<a id="tocSinstancesetting_notificationsetting"></a>
<a id="tocsinstancesetting_notificationsetting"></a>

```json
{
  "email": {
    "enabled": true,
    "smtpHost": "string",
    "smtpPort": 0,
    "smtpUsername": "string",
    "smtpPassword": "string",
    "useTls": true,
    "useSsl": true,
    "fromEmail": "string",
    "fromName": "string",
    "replyTo": "string"
  }
}
```

NotificationSetting is the notification transport configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|false|none|The email delivery configuration.|

<h2 id="tocS_InstanceSetting_Storage">InstanceSetting_Storage</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_storage"></a>
<a id="schema_InstanceSetting_Storage"></a>
<a id="tocSinstancesetting_storage"></a>
<a id="tocsinstancesetting_storage"></a>

```json
{
  "id": "string",
  "name": "string",
  "type": "STORAGE_TYPE_UNSPECIFIED",
  "s3Config": {
    "endpoint": "string",
    "region": "string",
    "bucket": "string",
    "accessKeyId": "string",
    "accessKeySecret": "string",
    "usePathStyle": true,
    "insecureSkipTlsVerify": true
  }
}
```

Storage is a configured attachment storage instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The stable identifier referenced by attachments.|
|name|string|false|none|The human-readable storage name.|
|type|string(enum)|false|none|The storage backend.|
|s3Config|object|false|none|The configuration of an S3 storage.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|STORAGE_TYPE_UNSPECIFIED|
|type|DATABASE|
|type|LOCAL|
|type|S3|

<h2 id="tocS_InstanceSetting_StorageSetting">InstanceSetting_StorageSetting</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_storagesetting"></a>
<a id="schema_InstanceSetting_StorageSetting"></a>
<a id="tocSinstancesetting_storagesetting"></a>
<a id="tocsinstancesetting_storagesetting"></a>

```json
{
  "storages": [
    {
      "id": "string",
      "name": "string",
      "type": "STORAGE_TYPE_UNSPECIFIED",
      "s3Config": {
        "endpoint": "string",
        "region": "string",
        "bucket": "string",
        "accessKeyId": "string",
        "accessKeySecret": "string",
        "usePathStyle": true,
        "insecureSkipTlsVerify": true
      }
    }
  ],
  "defaultStorageId": "string",
  "filepathTemplate": "string",
  "storageType": "STORAGE_TYPE_UNSPECIFIED",
  "s3Config": {
    "endpoint": "string",
    "region": "string",
    "bucket": "string",
    "accessKeyId": "string",
    "accessKeySecret": "string",
    "usePathStyle": true,
    "insecureSkipTlsVerify": true
  }
}
```

StorageSetting is the attachment storage configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storages|[[InstanceSetting_Storage](#schemainstancesetting_storage)]|false|none|Configured storage instances, including inactive instances still referenced by attachments.|
|defaultStorageId|string|false|none|The ID of the storage used for new attachments.|
|filepathTemplate|string|false|none|The template of attachment file paths.<br> Default is assets/{timestamp}_{uuid}_{filename}.|
|storageType|string(enum)|false|none|Legacy compatibility field. New clients use default_storage_id.|
|s3Config|object|false|none|Legacy compatibility field. New clients use storages.|

#### Enumerated Values

|Property|Value|
|---|---|
|storageType|STORAGE_TYPE_UNSPECIFIED|
|storageType|DATABASE|
|storageType|LOCAL|
|storageType|S3|

<h2 id="tocS_InstanceSetting_TagMetadata">InstanceSetting_TagMetadata</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_tagmetadata"></a>
<a id="schema_InstanceSetting_TagMetadata"></a>
<a id="tocSinstancesetting_tagmetadata"></a>
<a id="tocsinstancesetting_tagmetadata"></a>

```json
{
  "backgroundColor": {
    "red": 0,
    "green": 0,
    "blue": 0,
    "alpha": 0
  },
  "blurContent": true
}
```

TagMetadata is the display metadata for a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|object|false|none|The background color of the tag label. When unset, the default tag color is used.|
|blurContent|boolean|false|none|Whether memos with this tag have their content blurred.|

<h2 id="tocS_InstanceSetting_TagsSetting">InstanceSetting_TagsSetting</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_tagssetting"></a>
<a id="schema_InstanceSetting_TagsSetting"></a>
<a id="tocSinstancesetting_tagssetting"></a>
<a id="tocsinstancesetting_tagssetting"></a>

```json
{
  "tags": {
    "property1": {
      "backgroundColor": {
        "red": 0,
        "green": 0,
        "blue": 0,
        "alpha": 0
      },
      "blurContent": true
    },
    "property2": {
      "backgroundColor": {
        "red": 0,
        "green": 0,
        "blue": 0,
        "alpha": 0
      },
      "blurContent": true
    }
  }
}
```

TagsSetting is the instance-wide tag metadata configuration.
 Active tag metadata is stored in per-user tag settings. This message remains for backward compatibility with
 existing clients and migrations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|Map of tag name pattern to tag metadata.<br> Each key is treated as an anchored regular expression (^pattern$), so a single entry like "project/.*" matches<br> all tags under that prefix. Exact tag names are also valid.|

<h2 id="tocS_InstanceSetting_TranscriptionConfig">InstanceSetting_TranscriptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_transcriptionconfig"></a>
<a id="schema_InstanceSetting_TranscriptionConfig"></a>
<a id="tocSinstancesetting_transcriptionconfig"></a>
<a id="tocsinstancesetting_transcriptionconfig"></a>

```json
{
  "providerId": "string",
  "model": "string",
  "language": "string",
  "prompt": "string"
}
```

TranscriptionConfig is the speech-to-text feature configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerId|string|false|none|The ID of the provider used for transcription; must reference an entry in AISetting.providers.<br> Empty means transcription is disabled.|
|model|string|false|none|The provider-specific model identifier. Hidden from non-admins.<br> Empty falls back to the engine default (whisper-1 for OPENAI providers, gemini-2.5-flash for GEMINI providers).|
|language|string|false|none|The default ISO 639-1 language hint sent to the provider. Hidden from non-admins.<br> Empty lets the provider auto-detect.|
|prompt|string|false|none|A default spelling and vocabulary hint passed to the provider. Hidden from non-admins.|

<h2 id="tocS_InstanceSetting_UsageLimitsSetting">InstanceSetting_UsageLimitsSetting</h2>
<!-- backwards compatibility -->
<a id="schemainstancesetting_usagelimitssetting"></a>
<a id="schema_InstanceSetting_UsageLimitsSetting"></a>
<a id="tocSinstancesetting_usagelimitssetting"></a>
<a id="tocsinstancesetting_usagelimitssetting"></a>

```json
{
  "limits": [
    {
      "users": [
        "string"
      ],
      "allUsers": true,
      "memoCount": "string",
      "memoContentBytes": "string",
      "storageBytes": "string",
      "uploadBytes": "string"
    }
  ]
}
```

UsageLimitsSetting is an ordered list of limit sets. The first entry that
 names a user is that user's limit set, whole. The last entry has all_users
 set and is the default. The setting is read and replaced whole. Admins
 are limited like everyone else.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limits|[[UsageLimitsSetting_UsageLimit](#schemausagelimitssetting_usagelimit)]|false|none|The entries, in the order they are checked. At most 100, naming at most<br> 1,000 users in all.|

<h2 id="tocS_InstanceStats">InstanceStats</h2>
<!-- backwards compatibility -->
<a id="schemainstancestats"></a>
<a id="schema_InstanceStats"></a>
<a id="tocSinstancestats"></a>
<a id="tocsinstancestats"></a>

```json
{
  "database": {
    "driver": "string",
    "sizeBytes": "string"
  },
  "localStorageBytes": "string",
  "generatedTime": "1970-01-01T00:00:00Z"
}
```

InstanceStats is a snapshot of the instance's resource usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|object|false|none|The database size statistics.|
|localStorageBytes|string|false|none|The recursive size of the data directory in bytes. -1 if unavailable.|
|generatedTime|string(date-time)|false|none|The time the snapshot was generated on the server.|

<h2 id="tocS_InstanceStats_DatabaseStats">InstanceStats_DatabaseStats</h2>
<!-- backwards compatibility -->
<a id="schemainstancestats_databasestats"></a>
<a id="schema_InstanceStats_DatabaseStats"></a>
<a id="tocSinstancestats_databasestats"></a>
<a id="tocsinstancestats_databasestats"></a>

```json
{
  "driver": "string",
  "sizeBytes": "string"
}
```

DatabaseStats is the database size statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driver|string|false|none|The database driver: "sqlite", "mysql" or "postgres".|
|sizeBytes|string|false|none|The database size in bytes. -1 if unavailable.|

<h2 id="tocS_LinkMetadata">LinkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalinkmetadata"></a>
<a id="schema_LinkMetadata"></a>
<a id="tocSlinkmetadata"></a>
<a id="tocslinkmetadata"></a>

```json
{
  "url": "string",
  "title": "string",
  "description": "string",
  "image": "string"
}
```

LinkMetadata is the preview metadata of a web link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The link URL as given in the request.|
|title|string|false|none|The page title.|
|description|string|false|none|The page description.|
|image|string|false|none|The preview image URL.|

<h2 id="tocS_LinkedIdentity">LinkedIdentity</h2>
<!-- backwards compatibility -->
<a id="schemalinkedidentity"></a>
<a id="schema_LinkedIdentity"></a>
<a id="tocSlinkedidentity"></a>
<a id="tocslinkedidentity"></a>

```json
{
  "name": "string",
  "identityProvider": "string",
  "externalUid": "string"
}
```

LinkedIdentity is an SSO identity linked to a user account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the linked identity. {linked_identity} is<br> the ID of the identity provider.<br> Format: users/{user}/linkedIdentities/{linked_identity}|
|identityProvider|string|false|read-only|Output only. The resource name of the identity provider.<br> Format: identity-providers/{idp}|
|externalUid|string|false|none|The external user identifier from the identity provider: the subject that<br> signs in as this user. Set by signing in through the provider, or declared<br> in a configuration file for a declared user.|

<h2 id="tocS_ListAttachmentsResponse">ListAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattachmentsresponse"></a>
<a id="schema_ListAttachmentsResponse"></a>
<a id="tocSlistattachmentsresponse"></a>
<a id="tocslistattachmentsresponse"></a>

```json
{
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for AttachmentService.ListAttachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|none|The attachments.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListIdentityProvidersResponse">ListIdentityProvidersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentityprovidersresponse"></a>
<a id="schema_ListIdentityProvidersResponse"></a>
<a id="tocSlistidentityprovidersresponse"></a>
<a id="tocslistidentityprovidersresponse"></a>

```json
{
  "identityProviders": [
    {
      "name": "string",
      "type": "TYPE_UNSPECIFIED",
      "title": "string",
      "identifierFilter": "string",
      "config": {
        "oauth2Config": {
          "clientId": "string",
          "clientSecret": "string",
          "authUrl": "string",
          "tokenUrl": "string",
          "userInfoUrl": "string",
          "scopes": [
            "string"
          ],
          "fieldMapping": {
            "identifier": "string",
            "displayName": "string",
            "email": "string",
            "avatarUrl": "string"
          }
        }
      }
    }
  ]
}
```

Response message for IdentityProviderService.ListIdentityProviders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviders|[[IdentityProvider](#schemaidentityprovider)]|false|none|The identity providers.|

<h2 id="tocS_ListLinkedIdentitiesResponse">ListLinkedIdentitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlinkedidentitiesresponse"></a>
<a id="schema_ListLinkedIdentitiesResponse"></a>
<a id="tocSlistlinkedidentitiesresponse"></a>
<a id="tocslistlinkedidentitiesresponse"></a>

```json
{
  "linkedIdentities": [
    {
      "name": "string",
      "identityProvider": "string",
      "externalUid": "string"
    }
  ]
}
```

Response message for UserService.ListLinkedIdentities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkedIdentities|[[LinkedIdentity](#schemalinkedidentity)]|false|none|The linked identities.|

<h2 id="tocS_ListMemoAttachmentsResponse">ListMemoAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmemoattachmentsresponse"></a>
<a id="schema_ListMemoAttachmentsResponse"></a>
<a id="tocSlistmemoattachmentsresponse"></a>
<a id="tocslistmemoattachmentsresponse"></a>

```json
{
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for MemoService.ListMemoAttachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|none|The attachments.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListMemoReactionsResponse">ListMemoReactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmemoreactionsresponse"></a>
<a id="schema_ListMemoReactionsResponse"></a>
<a id="tocSlistmemoreactionsresponse"></a>
<a id="tocslistmemoreactionsresponse"></a>

```json
{
  "reactions": [
    {
      "name": "string",
      "creator": "string",
      "reactionType": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for MemoService.ListMemoReactions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reactions|[[Reaction](#schemareaction)]|false|none|The reactions.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListMemoRelationsResponse">ListMemoRelationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmemorelationsresponse"></a>
<a id="schema_ListMemoRelationsResponse"></a>
<a id="tocSlistmemorelationsresponse"></a>
<a id="tocslistmemorelationsresponse"></a>

```json
{
  "relations": [
    {
      "memo": {
        "name": "string",
        "snippet": "string"
      },
      "relatedMemo": {
        "name": "string",
        "snippet": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for MemoService.ListMemoRelations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relations|[[MemoRelation](#schemamemorelation)]|false|none|The relations.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListMemoSharesResponse">ListMemoSharesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmemosharesresponse"></a>
<a id="schema_ListMemoSharesResponse"></a>
<a id="tocSlistmemosharesresponse"></a>
<a id="tocslistmemosharesresponse"></a>

```json
{
  "memoShares": [
    {
      "name": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "expireTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Response message for MemoService.ListMemoShares.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memoShares|[[MemoShare](#schemamemoshare)]|false|none|The share links.|

<h2 id="tocS_ListMemoViewsResponse">ListMemoViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmemoviewsresponse"></a>
<a id="schema_ListMemoViewsResponse"></a>
<a id="tocSlistmemoviewsresponse"></a>
<a id="tocslistmemoviewsresponse"></a>

```json
{
  "memoViews": [
    {
      "name": "string",
      "title": "string",
      "filter": "string",
      "icon": {
        "emoji": "string",
        "lucide": "string"
      }
    }
  ]
}
```

Response message for UserService.ListMemoViews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memoViews|[[MemoView](#schemamemoview)]|false|none|The memo views.|

<h2 id="tocS_ListMemosResponse">ListMemosResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmemosresponse"></a>
<a id="schema_ListMemosResponse"></a>
<a id="tocSlistmemosresponse"></a>
<a id="tocslistmemosresponse"></a>

```json
{
  "memos": [
    {
      "name": "string",
      "creator": "string",
      "space": "string",
      "content": "string",
      "location": {
        "placeholder": "string",
        "latitude": 0,
        "longitude": 0
      },
      "visibility": "VISIBILITY_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "pinned": true,
      "attachments": [
        {
          "name": "string",
          "creator": "string",
          "filename": "string",
          "type": "string",
          "content": "string",
          "externalLink": "string",
          "motionMedia": {
            "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
            "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
            "groupId": "string",
            "presentationTimestampUs": "string",
            "hasEmbeddedVideo": true
          },
          "mediaMetadata": {
            "width": 0,
            "height": 0,
            "photo": {
              "captureTime": {
                "localDateTime": "string",
                "utcOffset": "string"
              },
              "location": {
                "latitude": 0,
                "longitude": 0,
                "altitudeMeters": 0
              },
              "sourceExifOrientation": 0,
              "cameraMake": "string",
              "cameraModel": "string",
              "lensModel": "string",
              "fNumber": 0,
              "exposureTimeSeconds": 0,
              "iso": 0,
              "focalLengthMm": 0
            },
            "video": {
              "durationSeconds": 0
            }
          },
          "memo": "string",
          "size": "string",
          "createTime": "1970-01-01T00:00:00Z"
        }
      ],
      "relations": [
        {
          "memo": {
            "name": "string",
            "snippet": "string"
          },
          "relatedMemo": {
            "name": "string",
            "snippet": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "reactions": [
        {
          "name": "string",
          "creator": "string",
          "reactionType": "string",
          "createTime": "1970-01-01T00:00:00Z"
        }
      ],
      "parent": "string",
      "commentCount": 0,
      "tags": [
        "string"
      ],
      "property": {
        "title": "string",
        "hasLink": true,
        "hasCode": true,
        "hasTaskList": true,
        "hasIncompleteTasks": true,
        "hasInlineImage": true
      },
      "snippet": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for MemoService.ListMemos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memos|[[Memo](#schemamemo)]|false|none|The memos.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListPersonalAccessTokensResponse">ListPersonalAccessTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpersonalaccesstokensresponse"></a>
<a id="schema_ListPersonalAccessTokensResponse"></a>
<a id="tocSlistpersonalaccesstokensresponse"></a>
<a id="tocslistpersonalaccesstokensresponse"></a>

```json
{
  "personalAccessTokens": [
    {
      "name": "string",
      "description": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "expireTime": "1970-01-01T00:00:00Z",
      "lastUseTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for UserService.ListPersonalAccessTokens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalAccessTokens|[[PersonalAccessToken](#schemapersonalaccesstoken)]|false|none|The personal access tokens, without their token values.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListSpaceInvitationsResponse">ListSpaceInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistspaceinvitationsresponse"></a>
<a id="schema_ListSpaceInvitationsResponse"></a>
<a id="tocSlistspaceinvitationsresponse"></a>
<a id="tocslistspaceinvitationsresponse"></a>

```json
{
  "spaceInvitations": [
    {
      "name": "string",
      "invitee": "string",
      "role": "ROLE_UNSPECIFIED",
      "space": {
        "name": "string",
        "title": "string",
        "description": "string",
        "icon": {
          "emoji": "string",
          "lucide": "string"
        },
        "currentUserRole": "ROLE_UNSPECIFIED",
        "memberCount": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for SpaceService.ListSpaceInvitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spaceInvitations|[[SpaceInvitation](#schemaspaceinvitation)]|false|none|The pending invitations for the space.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListSpaceMembersResponse">ListSpaceMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistspacemembersresponse"></a>
<a id="schema_ListSpaceMembersResponse"></a>
<a id="tocSlistspacemembersresponse"></a>
<a id="tocslistspacemembersresponse"></a>

```json
{
  "spaceMembers": [
    {
      "name": "string",
      "user": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for SpaceService.ListSpaceMembers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spaceMembers|[[SpaceMember](#schemaspacemember)]|false|none|The members of the space.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListSpacesResponse">ListSpacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistspacesresponse"></a>
<a id="schema_ListSpacesResponse"></a>
<a id="tocSlistspacesresponse"></a>
<a id="tocslistspacesresponse"></a>

```json
{
  "spaces": [
    {
      "name": "string",
      "title": "string",
      "description": "string",
      "icon": {
        "emoji": "string",
        "lucide": "string"
      },
      "currentUserRole": "ROLE_UNSPECIFIED",
      "memberCount": 0
    }
  ],
  "nextPageToken": "string"
}
```

Response message for SpaceService.ListSpaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spaces|[[Space](#schemaspace)]|false|none|The spaces of which the caller is a member.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListUserNotificationsResponse">ListUserNotificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusernotificationsresponse"></a>
<a id="schema_ListUserNotificationsResponse"></a>
<a id="tocSlistusernotificationsresponse"></a>
<a id="tocslistusernotificationsresponse"></a>

```json
{
  "notifications": [
    {
      "name": "string",
      "sender": "string",
      "senderUser": {
        "name": "string",
        "username": "string",
        "displayName": "string",
        "email": "string",
        "avatarUrl": "string",
        "description": "string",
        "password": "string",
        "role": "ROLE_UNSPECIFIED",
        "state": "STATE_UNSPECIFIED",
        "createTime": "1970-01-01T00:00:00Z",
        "updateTime": "1970-01-01T00:00:00Z"
      },
      "type": "TYPE_UNSPECIFIED",
      "memoComment": {
        "memo": "string",
        "relatedMemo": "string",
        "memoSnippet": "string",
        "relatedMemoSnippet": "string"
      },
      "memoMention": {
        "memo": "string",
        "relatedMemo": "string",
        "memoSnippet": "string",
        "relatedMemoSnippet": "string"
      },
      "spaceInvitation": {
        "spaceInvitation": "string",
        "space": {
          "name": "string",
          "title": "string",
          "description": "string",
          "icon": {
            "emoji": "string",
            "lucide": "string"
          },
          "currentUserRole": "ROLE_UNSPECIFIED",
          "memberCount": 0
        },
        "role": "ROLE_UNSPECIFIED",
        "state": "STATE_UNSPECIFIED"
      },
      "status": "STATUS_UNSPECIFIED",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for UserService.ListUserNotifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notifications|[[UserNotification](#schemausernotification)]|false|none|The notifications.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListUserSettingsResponse">ListUserSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersettingsresponse"></a>
<a id="schema_ListUserSettingsResponse"></a>
<a id="tocSlistusersettingsresponse"></a>
<a id="tocslistusersettingsresponse"></a>

```json
{
  "userSettings": [
    {
      "name": "string",
      "generalSetting": {
        "locale": "string",
        "memoVisibility": "string",
        "theme": "string",
        "saveMediaMetadata": true
      },
      "webhooksSetting": {
        "webhooks": [
          {
            "name": "string",
            "displayName": "string",
            "url": "string",
            "signingSecret": "string",
            "signingSecretSet": true,
            "createTime": "1970-01-01T00:00:00Z",
            "updateTime": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "tagsSetting": {
        "tags": {
          "property1": {
            "backgroundColor": {
              "red": 0,
              "green": 0,
              "blue": 0,
              "alpha": 0
            },
            "blurContent": true
          },
          "property2": {
            "backgroundColor": {
              "red": 0,
              "green": 0,
              "blue": 0,
              "alpha": 0
            },
            "blurContent": true
          }
        }
      },
      "editorSetting": {
        "sourceMode": true
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for UserService.ListUserSettings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userSettings|[[UserSetting](#schemausersetting)]|false|none|The user settings.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListUserSpaceInvitationsResponse">ListUserSpaceInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserspaceinvitationsresponse"></a>
<a id="schema_ListUserSpaceInvitationsResponse"></a>
<a id="tocSlistuserspaceinvitationsresponse"></a>
<a id="tocslistuserspaceinvitationsresponse"></a>

```json
{
  "spaceInvitations": [
    {
      "name": "string",
      "invitee": "string",
      "role": "ROLE_UNSPECIFIED",
      "space": {
        "name": "string",
        "title": "string",
        "description": "string",
        "icon": {
          "emoji": "string",
          "lucide": "string"
        },
        "currentUserRole": "ROLE_UNSPECIFIED",
        "memberCount": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for SpaceService.ListUserSpaceInvitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spaceInvitations|[[SpaceInvitation](#schemaspaceinvitation)]|false|none|The pending invitations received by the user.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_ListUserStatsResponse">ListUserStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserstatsresponse"></a>
<a id="schema_ListUserStatsResponse"></a>
<a id="tocSlistuserstatsresponse"></a>
<a id="tocslistuserstatsresponse"></a>

```json
{
  "userStats": [
    {
      "name": "string",
      "totalMemoCount": 0,
      "memoTypeStats": {
        "linkCount": 0,
        "codeCount": 0,
        "todoCount": 0,
        "undoCount": 0
      },
      "tagCounts": {
        "property1": 0,
        "property2": 0
      },
      "pinnedMemos": [
        "string"
      ],
      "memoCreatedTimestamps": [
        "1970-01-01T00:00:00Z"
      ],
      "memoUpdatedTimestamps": [
        "1970-01-01T00:00:00Z"
      ],
      "attachmentStorageBytes": "string"
    }
  ]
}
```

Response message for UserService.ListUserStats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userStats|[[UserStats](#schemauserstats)]|false|none|The statistics, one entry per user.|

<h2 id="tocS_ListUserWebhooksResponse">ListUserWebhooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserwebhooksresponse"></a>
<a id="schema_ListUserWebhooksResponse"></a>
<a id="tocSlistuserwebhooksresponse"></a>
<a id="tocslistuserwebhooksresponse"></a>

```json
{
  "webhooks": [
    {
      "name": "string",
      "displayName": "string",
      "url": "string",
      "signingSecret": "string",
      "signingSecretSet": true,
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Response message for UserService.ListUserWebhooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|[[UserWebhook](#schemauserwebhook)]|false|none|The webhooks.|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "users": [
    {
      "name": "string",
      "username": "string",
      "displayName": "string",
      "email": "string",
      "avatarUrl": "string",
      "description": "string",
      "password": "string",
      "role": "ROLE_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for UserService.ListUsers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[[User](#schemauser)]|false|none|The users.|
|nextPageToken|string|false|none|A token to retrieve the next page. Empty when there are no more pages.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "placeholder": "string",
  "latitude": 0,
  "longitude": 0
}
```

Location is a geographic location attached to a memo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeholder|string|false|none|Optional. A human-readable label for the location.|
|latitude|number(double)|false|none|Optional. The latitude of the location.|
|longitude|number(double)|false|none|Optional. The longitude of the location.|

<h2 id="tocS_MediaCaptureTime">MediaCaptureTime</h2>
<!-- backwards compatibility -->
<a id="schemamediacapturetime"></a>
<a id="schema_MediaCaptureTime"></a>
<a id="tocSmediacapturetime"></a>
<a id="tocsmediacapturetime"></a>

```json
{
  "localDateTime": "string",
  "utcOffset": "string"
}
```

MediaCaptureTime is the local time at which media was captured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localDateTime|string|false|none|Local date and time without a time zone, formatted as YYYY-MM-DDTHH:mm:ss[.fraction].|
|utcOffset|string|false|none|UTC offset formatted as Z or +/-HH:MM.|

<h2 id="tocS_MediaLocation">MediaLocation</h2>
<!-- backwards compatibility -->
<a id="schemamedialocation"></a>
<a id="schema_MediaLocation"></a>
<a id="tocSmedialocation"></a>
<a id="tocsmedialocation"></a>

```json
{
  "latitude": 0,
  "longitude": 0,
  "altitudeMeters": 0
}
```

MediaLocation is the geographic location at which media was captured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|WGS84 latitude in decimal degrees. Must be provided with longitude.|
|longitude|number(double)|false|none|WGS84 longitude in decimal degrees. Must be provided with latitude.|
|altitudeMeters|number(double)|false|none|Signed altitude in meters relative to sea level.|

<h2 id="tocS_MediaMetadata">MediaMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamediametadata"></a>
<a id="schema_MediaMetadata"></a>
<a id="tocSmediametadata"></a>
<a id="tocsmediametadata"></a>

```json
{
  "width": 0,
  "height": 0,
  "photo": {
    "captureTime": {
      "localDateTime": "string",
      "utcOffset": "string"
    },
    "location": {
      "latitude": 0,
      "longitude": 0,
      "altitudeMeters": 0
    },
    "sourceExifOrientation": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "lensModel": "string",
    "fNumber": 0,
    "exposureTimeSeconds": 0,
    "iso": 0,
    "focalLengthMm": 0
  },
  "video": {
    "durationSeconds": 0
  }
}
```

MediaMetadata contains normalized metadata explicitly supplied by a client.
 The service validates and stores this data but does not extract it from the media file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|integer(int32)|false|none|Display-oriented width in pixels. Must be provided with height.|
|height|integer(int32)|false|none|Display-oriented height in pixels. Must be provided with width.|
|photo|object|false|none|Photo metadata, for image attachments.|
|video|object|false|none|Video metadata, for video attachments.|

<h2 id="tocS_Memo">Memo</h2>
<!-- backwards compatibility -->
<a id="schemamemo"></a>
<a id="schema_Memo"></a>
<a id="tocSmemo"></a>
<a id="tocsmemo"></a>

```json
{
  "name": "string",
  "creator": "string",
  "space": "string",
  "content": "string",
  "location": {
    "placeholder": "string",
    "latitude": 0,
    "longitude": 0
  },
  "visibility": "VISIBILITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "pinned": true,
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "relations": [
    {
      "memo": {
        "name": "string",
        "snippet": "string"
      },
      "relatedMemo": {
        "name": "string",
        "snippet": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "reactions": [
    {
      "name": "string",
      "creator": "string",
      "reactionType": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ],
  "parent": "string",
  "commentCount": 0,
  "tags": [
    "string"
  ],
  "property": {
    "title": "string",
    "hasLink": true,
    "hasCode": true,
    "hasTaskList": true,
    "hasIncompleteTasks": true,
    "hasInlineImage": true
  },
  "snippet": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

Memo is a Markdown note written by a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the memo, where memo is the<br> user-defined UID.<br> Format: memos/{memo}|
|creator|string|false|read-only|Output only. The resource name of the creator.<br> Format: users/{user}|
|space|string|false|none|Optional. The space in which the memo is placed. Every memo, including a<br> comment, owns its placement independently.<br> Format: spaces/{space}|
|content|string|true|none|Required. The content of the memo in Markdown. Must not exceed the<br> instance's content length limit.|
|location|object|false|none|Optional. The location of the memo.|
|visibility|string(enum)|true|none|Required. The visibility of the memo. Defaults to PRIVATE on creation when<br> unspecified. SPACE requires the memo to be placed in a space.|
|state|string(enum)|true|none|Required. The state of the memo. New memos are always NORMAL; change it<br> with UpdateMemo.|
|pinned|boolean|false|none|Optional. Whether the memo is pinned. Ignored on creation; change it with<br> UpdateMemo.|
|attachments|[[Attachment](#schemaattachment)]|false|none|Optional. The attachments of the memo. Setting it replaces the full set.|
|relations|[[MemoRelation](#schemamemorelation)]|false|none|Optional. The relations of the memo in both directions.|
|reactions|[[Reaction](#schemareaction)]|false|read-only|Output only. The reactions to the memo.|
|parent|string|false|none|Optional. Immutable. The memo this memo comments on. Set it on creation<br> to create a comment; unset for a top-level memo. Its identity is returned<br> even when the caller cannot read the parent, and grants no read access.<br> Format: memos/{memo}|
|commentCount|integer(int32)|false|read-only|Output only. The number of comments directly on this memo that the caller<br> can read.|
|tags|[string]|false|read-only|Output only. The tags extracted from the content.|
|property|object|false|read-only|Output only. The properties computed from the content.|
|snippet|string|false|read-only|Output only. A plain-text snippet of the content.|
|createTime|string(date-time)|false|none|Optional. The creation time. Defaults to the current time when unset on<br> creation.|
|updateTime|string(date-time)|false|none|Optional. The last update time. Defaults to the current time when unset on<br> creation.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|VISIBILITY_UNSPECIFIED|
|visibility|PRIVATE|
|visibility|PROTECTED|
|visibility|PUBLIC|
|visibility|SPACE|
|state|STATE_UNSPECIFIED|
|state|NORMAL|
|state|ARCHIVED|

<h2 id="tocS_MemoRelation">MemoRelation</h2>
<!-- backwards compatibility -->
<a id="schemamemorelation"></a>
<a id="schema_MemoRelation"></a>
<a id="tocSmemorelation"></a>
<a id="tocsmemorelation"></a>

```json
{
  "memo": {
    "name": "string",
    "snippet": "string"
  },
  "relatedMemo": {
    "name": "string",
    "snippet": "string"
  },
  "type": "TYPE_UNSPECIFIED"
}
```

MemoRelation is a directed link from one memo to another.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memo|object|true|none|Required. The source memo of the relation.|
|relatedMemo|object|true|none|Required. The target memo of the relation.|
|type|string(enum)|true|none|Required. The type of the relation.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|REFERENCE|

<h2 id="tocS_MemoRelation_MemoRef">MemoRelation_MemoRef</h2>
<!-- backwards compatibility -->
<a id="schemamemorelation_memoref"></a>
<a id="schema_MemoRelation_MemoRef"></a>
<a id="tocSmemorelation_memoref"></a>
<a id="tocsmemorelation_memoref"></a>

```json
{
  "name": "string",
  "snippet": "string"
}
```

MemoRef identifies a memo in a relation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The resource name of the memo.<br> Format: memos/{memo}|
|snippet|string|false|read-only|Output only. A plain-text snippet of the memo content. Empty in<br> ListMemos responses.|

<h2 id="tocS_MemoShare">MemoShare</h2>
<!-- backwards compatibility -->
<a id="schemamemoshare"></a>
<a id="schema_MemoShare"></a>
<a id="tocSmemoshare"></a>
<a id="tocsmemoshare"></a>

```json
{
  "name": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "expireTime": "1970-01-01T00:00:00Z"
}
```

MemoShare is an access grant that permits read-only access to a memo via an
 opaque bearer token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the share. The {share} segment is the<br> opaque token used in the share URL.<br> Format: memos/{memo}/shares/{share}|
|createTime|string(date-time)|false|read-only|Output only. The creation time.|
|expireTime|string(date-time)|false|none|Optional. The time after which the share link stops working. Must be in<br> the future when set. If unset, the link never expires.|

<h2 id="tocS_MemoView">MemoView</h2>
<!-- backwards compatibility -->
<a id="schemamemoview"></a>
<a id="schema_MemoView"></a>
<a id="tocSmemoview"></a>
<a id="tocsmemoview"></a>

```json
{
  "name": "string",
  "title": "string",
  "filter": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  }
}
```

MemoView is a user's saved memo filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the memo view.<br> Format: users/{user}/views/{view}|
|title|string|true|none|Required. The title of the memo view.|
|filter|string|true|none|Required. The CEL filter expression for the memo view, using the same<br> grammar as the ListMemos `filter` argument. Reuse it by passing this value<br> to ListMemos.|
|icon|object|false|none|Optional. Display icon. Omit when updating with the "icon" mask to reset to<br> the default view icon.|

<h2 id="tocS_MemoView_Icon">MemoView_Icon</h2>
<!-- backwards compatibility -->
<a id="schemamemoview_icon"></a>
<a id="schema_MemoView_Icon"></a>
<a id="tocSmemoview_icon"></a>
<a id="tocsmemoview_icon"></a>

```json
{
  "emoji": "string",
  "lucide": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|string|false|none|A Unicode emoji sequence.|
|lucide|string|false|none|A canonical Lucide icon name, such as "leaf".|

<h2 id="tocS_Memo_Property">Memo_Property</h2>
<!-- backwards compatibility -->
<a id="schemamemo_property"></a>
<a id="schema_Memo_Property"></a>
<a id="tocSmemo_property"></a>
<a id="tocsmemo_property"></a>

```json
{
  "title": "string",
  "hasLink": true,
  "hasCode": true,
  "hasTaskList": true,
  "hasIncompleteTasks": true,
  "hasInlineImage": true
}
```

Property holds properties computed from the memo content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The text of the H1 heading when it is the first block of the content.|
|hasLink|boolean|false|none|Whether the content contains a link.|
|hasCode|boolean|false|none|Whether the content contains inline code or a code block.|
|hasTaskList|boolean|false|none|Whether the content contains a task list.|
|hasIncompleteTasks|boolean|false|none|Whether the content contains an unchecked task.|
|hasInlineImage|boolean|false|none|Whether the content contains a Markdown image.|

<h2 id="tocS_MotionMedia">MotionMedia</h2>
<!-- backwards compatibility -->
<a id="schemamotionmedia"></a>
<a id="schema_MotionMedia"></a>
<a id="tocSmotionmedia"></a>
<a id="tocsmotionmedia"></a>

```json
{
  "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
  "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
  "groupId": "string",
  "presentationTimestampUs": "string",
  "hasEmbeddedVideo": true
}
```

MotionMedia links the parts of a motion photo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|family|string(enum)|false|none|The motion photo format.|
|role|string(enum)|false|none|The part this attachment plays in the motion photo.|
|groupId|string|false|none|Groups the attachments that belong to one motion photo. Required for client-supplied Apple Live Photo metadata;<br> for an Android motion photo it is the attachment's own ID.|
|presentationTimestampUs|string|false|none|Presentation timestamp of the still frame within the video, in microseconds.|
|hasEmbeddedVideo|boolean|false|none|Whether the file embeds the motion video, as in an Android motion photo container.|

#### Enumerated Values

|Property|Value|
|---|---|
|family|MOTION_MEDIA_FAMILY_UNSPECIFIED|
|family|APPLE_LIVE_PHOTO|
|family|ANDROID_MOTION_PHOTO|
|role|MOTION_MEDIA_ROLE_UNSPECIFIED|
|role|STILL|
|role|VIDEO|
|role|CONTAINER|

<h2 id="tocS_NotificationSetting_EmailSetting">NotificationSetting_EmailSetting</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsetting_emailsetting"></a>
<a id="schema_NotificationSetting_EmailSetting"></a>
<a id="tocSnotificationsetting_emailsetting"></a>
<a id="tocsnotificationsetting_emailsetting"></a>

```json
{
  "enabled": true,
  "smtpHost": "string",
  "smtpPort": 0,
  "smtpUsername": "string",
  "smtpPassword": "string",
  "useTls": true,
  "useSsl": true,
  "fromEmail": "string",
  "fromName": "string",
  "replyTo": "string"
}
```

EmailSetting is the SMTP configuration for notification emails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether email notifications are enabled.|
|smtpHost|string|false|none|The SMTP server host.|
|smtpPort|integer(int32)|false|none|The SMTP server port.|
|smtpUsername|string|false|none|The SMTP username.|
|smtpPassword|string|false|write-only|Input only. The SMTP password. Never returned. An empty value keeps the stored password, unless the host,<br> port, username or encryption settings change.|
|useTls|boolean|false|none|Whether to use STARTTLS.|
|useSsl|boolean|false|none|Whether to use implicit SSL/TLS.|
|fromEmail|string|false|none|The sender email address.|
|fromName|string|false|none|The sender display name.|
|replyTo|string|false|none|The Reply-To email address.|

<h2 id="tocS_OAuth2Config">OAuth2Config</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2config"></a>
<a id="schema_OAuth2Config"></a>
<a id="tocSoauth2config"></a>
<a id="tocsoauth2config"></a>

```json
{
  "clientId": "string",
  "clientSecret": "string",
  "authUrl": "string",
  "tokenUrl": "string",
  "userInfoUrl": "string",
  "scopes": [
    "string"
  ],
  "fieldMapping": {
    "identifier": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string"
  }
}
```

OAuth2Config is the configuration of an OAuth2 identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|The OAuth2 client ID.|
|clientSecret|string|false|none|The OAuth2 client secret. Write-only: it is never returned in responses.|
|authUrl|string|false|none|The authorization endpoint URL.|
|tokenUrl|string|false|none|The token endpoint URL, used to exchange the authorization code for an access token.|
|userInfoUrl|string|false|none|The user info endpoint URL, used to fetch the claims of the signed-in user.|
|scopes|[string]|false|none|The scopes to request.|
|fieldMapping|object|false|none|How user info claims map to user fields.|

<h2 id="tocS_PersonalAccessToken">PersonalAccessToken</h2>
<!-- backwards compatibility -->
<a id="schemapersonalaccesstoken"></a>
<a id="schema_PersonalAccessToken"></a>
<a id="tocSpersonalaccesstoken"></a>
<a id="tocspersonalaccesstoken"></a>

```json
{
  "name": "string",
  "description": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "expireTime": "1970-01-01T00:00:00Z",
  "lastUseTime": "1970-01-01T00:00:00Z"
}
```

PersonalAccessToken is a long-lived token for API and script access.
 PATs are distinct from short-lived JWT access tokens used for session
 authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the personal access token.<br> Format: users/{user}/personalAccessTokens/{personal_access_token}|
|description|string|false|none|Optional. The description of the token.|
|createTime|string(date-time)|false|read-only|Output only. The creation time.|
|expireTime|string(date-time)|false|none|Optional. The expiration time. Unset means the token never expires.|
|lastUseTime|string(date-time)|false|read-only|Output only. The time the token was last used.|

<h2 id="tocS_PhotoMetadata">PhotoMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaphotometadata"></a>
<a id="schema_PhotoMetadata"></a>
<a id="tocSphotometadata"></a>
<a id="tocsphotometadata"></a>

```json
{
  "captureTime": {
    "localDateTime": "string",
    "utcOffset": "string"
  },
  "location": {
    "latitude": 0,
    "longitude": 0,
    "altitudeMeters": 0
  },
  "sourceExifOrientation": 0,
  "cameraMake": "string",
  "cameraModel": "string",
  "lensModel": "string",
  "fNumber": 0,
  "exposureTimeSeconds": 0,
  "iso": 0,
  "focalLengthMm": 0
}
```

PhotoMetadata is metadata recorded by the source of a photo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captureTime|object|false|none|Capture time as recorded by the source media.|
|location|object|false|none|Geographic location recorded by the source media.|
|sourceExifOrientation|integer(int32)|false|none|EXIF orientation value from 1 through 8 as recorded by the source file.<br> This value is informational and must not be reapplied to the stored attachment;<br> width and height already describe its display-oriented dimensions.|
|cameraMake|string|false|none|The camera manufacturer.|
|cameraModel|string|false|none|The camera model.|
|lensModel|string|false|none|The lens model.|
|fNumber|number(double)|false|none|The aperture f-number.|
|exposureTimeSeconds|number(double)|false|none|The exposure time in seconds.|
|iso|integer(int32)|false|none|The ISO sensitivity.|
|focalLengthMm|number(double)|false|none|The focal length in millimeters.|

<h2 id="tocS_Reaction">Reaction</h2>
<!-- backwards compatibility -->
<a id="schemareaction"></a>
<a id="schema_Reaction"></a>
<a id="tocSreaction"></a>
<a id="tocsreaction"></a>

```json
{
  "name": "string",
  "creator": "string",
  "reactionType": "string",
  "createTime": "1970-01-01T00:00:00Z"
}
```

Reaction is a reaction a user leaves on a memo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Identifier. The resource name of the reaction.<br> Format: memos/{memo}/reactions/{reaction}|
|creator|string|false|read-only|Output only. The resource name of the creator.<br> Format: users/{user}|
|reactionType|string|true|none|Required. The reaction, such as an emoji ("👍", "❤️", "😄").|
|createTime|string(date-time)|false|read-only|Output only. The creation time.|

<h2 id="tocS_RefreshTokenRequest">RefreshTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtokenrequest"></a>
<a id="schema_RefreshTokenRequest"></a>
<a id="tocSrefreshtokenrequest"></a>
<a id="tocsrefreshtokenrequest"></a>

```json
{}
```

Request message for AuthService.RefreshToken.
 It has no fields: the refresh token is read from the HttpOnly cookie.

<h2 id="tocS_RefreshTokenResponse">RefreshTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtokenresponse"></a>
<a id="schema_RefreshTokenResponse"></a>
<a id="tocSrefreshtokenresponse"></a>
<a id="tocsrefreshtokenresponse"></a>

```json
{
  "accessToken": "string",
  "accessTokenExpireTime": "1970-01-01T00:00:00Z"
}
```

Response message for AuthService.RefreshToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|none|The new short-lived access token.|
|accessTokenExpireTime|string(date-time)|false|none|When the new access token expires.|

<h2 id="tocS_ReorderMemoViewsRequest">ReorderMemoViewsRequest</h2>
<!-- backwards compatibility -->
<a id="schemareordermemoviewsrequest"></a>
<a id="schema_ReorderMemoViewsRequest"></a>
<a id="tocSreordermemoviewsrequest"></a>
<a id="tocsreordermemoviewsrequest"></a>

```json
{
  "parent": "string",
  "names": [
    "string"
  ]
}
```

Request message for UserService.ReorderMemoViews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|true|none|Required. The user whose memo views are reordered.<br> Format: users/{user}|
|names|[string]|true|none|Required. The resource names of all the user's memo views, in the new<br> order. The service rejects a list that omits a memo view, repeats one, or<br> names one the user does not have.<br> Format: users/{user}/views/{view}|

<h2 id="tocS_ReorderMemoViewsResponse">ReorderMemoViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemareordermemoviewsresponse"></a>
<a id="schema_ReorderMemoViewsResponse"></a>
<a id="tocSreordermemoviewsresponse"></a>
<a id="tocsreordermemoviewsresponse"></a>

```json
{
  "memoViews": [
    {
      "name": "string",
      "title": "string",
      "filter": "string",
      "icon": {
        "emoji": "string",
        "lucide": "string"
      }
    }
  ]
}
```

Response message for UserService.ReorderMemoViews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memoViews|[[MemoView](#schemamemoview)]|false|none|The memo views in their new order.|

<h2 id="tocS_SetMemoAttachmentsRequest">SetMemoAttachmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetmemoattachmentsrequest"></a>
<a id="schema_SetMemoAttachmentsRequest"></a>
<a id="tocSsetmemoattachmentsrequest"></a>
<a id="tocssetmemoattachmentsrequest"></a>

```json
{
  "name": "string",
  "attachments": [
    {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Request message for MemoService.SetMemoAttachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The resource name of the memo.<br> Format: memos/{memo}|
|attachments|[[Attachment](#schemaattachment)]|true|none|Required. The complete set of attachments for the memo.|

<h2 id="tocS_SetMemoRelationsRequest">SetMemoRelationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetmemorelationsrequest"></a>
<a id="schema_SetMemoRelationsRequest"></a>
<a id="tocSsetmemorelationsrequest"></a>
<a id="tocssetmemorelationsrequest"></a>

```json
{
  "name": "string",
  "relations": [
    {
      "memo": {
        "name": "string",
        "snippet": "string"
      },
      "relatedMemo": {
        "name": "string",
        "snippet": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

Request message for MemoService.SetMemoRelations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The resource name of the memo.<br> Format: memos/{memo}|
|relations|[[MemoRelation](#schemamemorelation)]|true|none|Required. The complete set of relations for the memo.|

<h2 id="tocS_SignInRequest">SignInRequest</h2>
<!-- backwards compatibility -->
<a id="schemasigninrequest"></a>
<a id="schema_SignInRequest"></a>
<a id="tocSsigninrequest"></a>
<a id="tocssigninrequest"></a>

```json
{
  "passwordCredentials": {
    "username": "string",
    "password": "string"
  },
  "ssoCredentials": {
    "identityProvider": "string",
    "code": "string",
    "redirectUri": "string",
    "codeVerifier": "string"
  }
}
```

Request message for AuthService.SignIn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|passwordCredentials|object|false|none|Username and password credentials.|
|ssoCredentials|object|false|none|SSO credentials from an OAuth2 authorization code flow.|

<h2 id="tocS_SignInRequest_PasswordCredentials">SignInRequest_PasswordCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasigninrequest_passwordcredentials"></a>
<a id="schema_SignInRequest_PasswordCredentials"></a>
<a id="tocSsigninrequest_passwordcredentials"></a>
<a id="tocssigninrequest_passwordcredentials"></a>

```json
{
  "username": "string",
  "password": "string"
}
```

PasswordCredentials are a username and password.
 Regular users cannot use them when the instance disallows password sign-in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|Required. The username to sign in with.|
|password|string|true|none|Required. The password to sign in with.|

<h2 id="tocS_SignInRequest_SsoCredentials">SignInRequest_SsoCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasigninrequest_ssocredentials"></a>
<a id="schema_SignInRequest_SsoCredentials"></a>
<a id="tocSsigninrequest_ssocredentials"></a>
<a id="tocssigninrequest_ssocredentials"></a>

```json
{
  "identityProvider": "string",
  "code": "string",
  "redirectUri": "string",
  "codeVerifier": "string"
}
```

SsoCredentials are the result of an OAuth2 authorization code flow with an identity provider.
 A first sign-in creates a local user unless the instance disallows user registration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProvider|string|true|none|Required. The resource name of the identity provider.<br> Format: identity-providers/{idp}|
|code|string|true|none|Required. The authorization code returned by the identity provider.|
|redirectUri|string|true|none|Required. The redirect URI used in the authorization request.|
|codeVerifier|string|false|none|Optional. The PKCE code verifier (RFC 7636). Set it when the authorization request used a code challenge.|

<h2 id="tocS_SignInResponse">SignInResponse</h2>
<!-- backwards compatibility -->
<a id="schemasigninresponse"></a>
<a id="schema_SignInResponse"></a>
<a id="tocSsigninresponse"></a>
<a id="tocssigninresponse"></a>

```json
{
  "user": {
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "password": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  },
  "accessToken": "string",
  "accessTokenExpireTime": "1970-01-01T00:00:00Z"
}
```

Response message for AuthService.SignIn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|The signed-in user.|
|accessToken|string|false|none|The short-lived access token for API requests.<br> Keep it in memory only, not in localStorage.|
|accessTokenExpireTime|string(date-time)|false|none|When the access token expires.<br> Call RefreshToken before this time.|

<h2 id="tocS_Space">Space</h2>
<!-- backwards compatibility -->
<a id="schemaspace"></a>
<a id="schema_Space"></a>
<a id="tocSspace"></a>
<a id="tocsspace"></a>

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "icon": {
    "emoji": "string",
    "lucide": "string"
  },
  "currentUserRole": "ROLE_UNSPECIFIED",
  "memberCount": 0
}
```

Space is a collaboration boundary for placed memos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the space.<br> Format: spaces/{space}|
|title|string|true|none|Required. The human-readable title.|
|description|string|false|none|Optional. A description of the space.|
|icon|object|false|none|Optional. The display icon. Omit it when updating with the "icon" mask to<br> reset to the default space mark.|
|currentUserRole|string(enum)|false|read-only|Output only. The authenticated user's membership role in this space.<br> ROLE_UNSPECIFIED when this space is exposed as metadata only.|
|memberCount|integer(int32)|false|read-only|Output only. The number of accepted members in this space. Pending<br> invitations are excluded. Zero when this space is exposed as metadata only.|

#### Enumerated Values

|Property|Value|
|---|---|
|currentUserRole|ROLE_UNSPECIFIED|
|currentUserRole|ADMIN|
|currentUserRole|USER|

<h2 id="tocS_SpaceInvitation">SpaceInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaspaceinvitation"></a>
<a id="schema_SpaceInvitation"></a>
<a id="tocSspaceinvitation"></a>
<a id="tocsspaceinvitation"></a>

```json
{
  "name": "string",
  "invitee": "string",
  "role": "ROLE_UNSPECIFIED",
  "space": {
    "name": "string",
    "title": "string",
    "description": "string",
    "icon": {
      "emoji": "string",
      "lucide": "string"
    },
    "currentUserRole": "ROLE_UNSPECIFIED",
    "memberCount": 0
  }
}
```

SpaceInvitation is a pending invitation for an existing user to join a space.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the invitation. The invitation segment<br> is the invitee's username.<br> Format: spaces/{space}/invitations/{invitation}|
|invitee|string|true|none|Required. The invited user.<br> Format: users/{user}|
|role|string(enum)|true|none|Required. The role the user receives after accepting the invitation.|
|space|object|false|read-only|Output only. The space the user is invited to, as metadata only. This lets<br> an invitee understand the invitation without membership-based GetSpace<br> access.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|ADMIN|
|role|USER|

<h2 id="tocS_SpaceMember">SpaceMember</h2>
<!-- backwards compatibility -->
<a id="schemaspacemember"></a>
<a id="schema_SpaceMember"></a>
<a id="tocSspacemember"></a>
<a id="tocsspacemember"></a>

```json
{
  "name": "string",
  "user": "string",
  "role": "ROLE_UNSPECIFIED"
}
```

SpaceMember is a user's membership and governance role in a space.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the membership. The member segment is<br> the member's username.<br> Format: spaces/{space}/members/{member}|
|user|string|true|none|Required. The member user.<br> Format: users/{user}|
|role|string(enum)|true|none|Required. The member's role within this space.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|ADMIN|
|role|USER|

<h2 id="tocS_Space_Icon">Space_Icon</h2>
<!-- backwards compatibility -->
<a id="schemaspace_icon"></a>
<a id="schema_Space_Icon"></a>
<a id="tocSspace_icon"></a>
<a id="tocsspace_icon"></a>

```json
{
  "emoji": "string",
  "lucide": "string"
}
```

Icon is the display icon of a space.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|string|false|none|A Unicode emoji sequence.|
|lucide|string|false|none|A canonical Lucide icon name, such as "leaf".|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string"
    }
  ]
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.|
|details|[[GoogleProtobufAny](#schemagoogleprotobufany)]|false|none|A list of messages that carry the error details.  There is a common set of message types for APIs to use.|

<h2 id="tocS_StorageSetting_S3Config">StorageSetting_S3Config</h2>
<!-- backwards compatibility -->
<a id="schemastoragesetting_s3config"></a>
<a id="schema_StorageSetting_S3Config"></a>
<a id="tocSstoragesetting_s3config"></a>
<a id="tocsstoragesetting_s3config"></a>

```json
{
  "endpoint": "string",
  "region": "string",
  "bucket": "string",
  "accessKeyId": "string",
  "accessKeySecret": "string",
  "usePathStyle": true,
  "insecureSkipTlsVerify": true
}
```

S3Config is the legacy S3 configuration, retained for compatibility with existing clients.
 Reference: https://developers.cloudflare.com/r2/examples/aws/aws-sdk-go/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|The S3 endpoint URL.|
|region|string|false|none|The S3 region.|
|bucket|string|false|none|The S3 bucket.|
|accessKeyId|string|false|none|The S3 access key ID.|
|accessKeySecret|string|false|write-only|Input only. The S3 access key secret. Never returned; an empty value keeps the stored secret.|
|usePathStyle|boolean|false|none|Whether to use path-style addressing instead of virtual-hosted-style.|
|insecureSkipTlsVerify|boolean|false|none|Whether to skip TLS certificate verification when connecting to the S3 endpoint.<br> Only enable this for trusted endpoints that use a self-signed certificate; it removes protection against<br> man-in-the-middle attacks.|

<h2 id="tocS_Storage_S3Config">Storage_S3Config</h2>
<!-- backwards compatibility -->
<a id="schemastorage_s3config"></a>
<a id="schema_Storage_S3Config"></a>
<a id="tocSstorage_s3config"></a>
<a id="tocsstorage_s3config"></a>

```json
{
  "endpoint": "string",
  "region": "string",
  "bucket": "string",
  "accessKeyId": "string",
  "accessKeySecret": "string",
  "usePathStyle": true,
  "insecureSkipTlsVerify": true
}
```

S3Config is the configuration of an S3-compatible object store.
 Reference: https://developers.cloudflare.com/r2/examples/aws/aws-sdk-go/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|The S3 endpoint URL.|
|region|string|false|none|The S3 region.|
|bucket|string|false|none|The S3 bucket.|
|accessKeyId|string|false|none|The S3 access key ID.|
|accessKeySecret|string|false|write-only|Input only. The S3 access key secret. Never returned; an empty value keeps the stored secret.|
|usePathStyle|boolean|false|none|Whether to use path-style addressing instead of virtual-hosted-style.|
|insecureSkipTlsVerify|boolean|false|none|Whether to skip TLS certificate verification when connecting to the S3 endpoint.<br> Only enable this for trusted endpoints that use a self-signed certificate; it removes protection against<br> man-in-the-middle attacks.|

<h2 id="tocS_TestInstanceEmailSettingRequest">TestInstanceEmailSettingRequest</h2>
<!-- backwards compatibility -->
<a id="schematestinstanceemailsettingrequest"></a>
<a id="schema_TestInstanceEmailSettingRequest"></a>
<a id="tocStestinstanceemailsettingrequest"></a>
<a id="tocstestinstanceemailsettingrequest"></a>

```json
{
  "email": {
    "enabled": true,
    "smtpHost": "string",
    "smtpPort": 0,
    "smtpUsername": "string",
    "smtpPassword": "string",
    "useTls": true,
    "useSsl": true,
    "fromEmail": "string",
    "fromName": "string",
    "replyTo": "string"
  },
  "recipientEmail": "string"
}
```

Request message for InstanceService.TestInstanceEmailSetting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|false|none|Optional. The SMTP settings to test. If omitted, the stored notification email setting is used. An empty<br> password reuses the stored password when the connection settings are unchanged.|
|recipientEmail|string|false|none|Optional. The recipient email address. If omitted, the current user's email address is used.|

<h2 id="tocS_TranscribeRequest">TranscribeRequest</h2>
<!-- backwards compatibility -->
<a id="schematranscriberequest"></a>
<a id="schema_TranscribeRequest"></a>
<a id="tocStranscriberequest"></a>
<a id="tocstranscriberequest"></a>

```json
{
  "audio": {
    "content": "string",
    "uri": "string",
    "filename": "string",
    "contentType": "string"
  }
}
```

Request message for AIService.Transcribe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|object|true|none|Required. The audio to transcribe.|

<h2 id="tocS_TranscribeResponse">TranscribeResponse</h2>
<!-- backwards compatibility -->
<a id="schematranscriberesponse"></a>
<a id="schema_TranscribeResponse"></a>
<a id="tocStranscriberesponse"></a>
<a id="tocstranscriberesponse"></a>

```json
{
  "text": "string"
}
```

Response message for AIService.Transcribe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The transcribed text.|

<h2 id="tocS_TranscriptionAudio">TranscriptionAudio</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionaudio"></a>
<a id="schema_TranscriptionAudio"></a>
<a id="tocStranscriptionaudio"></a>
<a id="tocstranscriptionaudio"></a>

```json
{
  "content": "string",
  "uri": "string",
  "filename": "string",
  "contentType": "string"
}
```

TranscriptionAudio is the audio input for a transcription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(bytes)|false|write-only|Input only. Inline audio bytes, at most 25 MiB.|
|uri|string|false|none|URI of the audio content. Reserved for future use; the service rejects requests that set it.|
|filename|string|false|none|Optional. The uploaded filename, at most 255 characters.|
|contentType|string|false|none|Optional. The MIME type of the audio. If empty, the service detects it from the content.|

<h2 id="tocS_UploadAttachmentRequest">UploadAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadattachmentrequest"></a>
<a id="schema_UploadAttachmentRequest"></a>
<a id="tocSuploadattachmentrequest"></a>
<a id="tocsuploadattachmentrequest"></a>

```json
{
  "spec": {
    "attachment": {
      "name": "string",
      "creator": "string",
      "filename": "string",
      "type": "string",
      "content": "string",
      "externalLink": "string",
      "motionMedia": {
        "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
        "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
        "groupId": "string",
        "presentationTimestampUs": "string",
        "hasEmbeddedVideo": true
      },
      "mediaMetadata": {
        "width": 0,
        "height": 0,
        "photo": {
          "captureTime": {
            "localDateTime": "string",
            "utcOffset": "string"
          },
          "location": {
            "latitude": 0,
            "longitude": 0,
            "altitudeMeters": 0
          },
          "sourceExifOrientation": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "lensModel": "string",
          "fNumber": 0,
          "exposureTimeSeconds": 0,
          "iso": 0,
          "focalLengthMm": 0
        },
        "video": {
          "durationSeconds": 0
        }
      },
      "memo": "string",
      "size": "string",
      "createTime": "1970-01-01T00:00:00Z"
    },
    "attachmentId": "string",
    "totalSize": "string",
    "replaceAttachment": "string"
  },
  "uploadId": "string",
  "writeOffset": "string",
  "data": "string",
  "finishWrite": true
}
```

Request message for AttachmentService.UploadAttachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec|object|false|none|Starts a new upload. The same call may also carry data and finish_write.|
|uploadId|string|false|none|Continues the upload identified by a previous response.|
|writeOffset|string|true|none|Required. Zero-based byte offset at which data is written. Must equal the committed size, except when retrying<br> the most recently accepted chunk with identical bytes and offset, which is accepted without writing again.|
|data|string(bytes)|false|none|Optional. File bytes, at most max_chunk_size long. With no data and finish_write false, the call reports<br> progress without writing, and write_offset is ignored.|
|finishWrite|boolean|false|none|Optional. Finalize the upload after writing data. The committed size must then equal total_size. Any later call<br> for the same upload_id returns the created attachment.|

<h2 id="tocS_UploadAttachmentResponse">UploadAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadattachmentresponse"></a>
<a id="schema_UploadAttachmentResponse"></a>
<a id="tocSuploadattachmentresponse"></a>
<a id="tocsuploadattachmentresponse"></a>

```json
{
  "uploadId": "string",
  "committedSize": "string",
  "maxChunkSize": 0,
  "attachment": {
    "name": "string",
    "creator": "string",
    "filename": "string",
    "type": "string",
    "content": "string",
    "externalLink": "string",
    "motionMedia": {
      "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
      "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
      "groupId": "string",
      "presentationTimestampUs": "string",
      "hasEmbeddedVideo": true
    },
    "mediaMetadata": {
      "width": 0,
      "height": 0,
      "photo": {
        "captureTime": {
          "localDateTime": "string",
          "utcOffset": "string"
        },
        "location": {
          "latitude": 0,
          "longitude": 0,
          "altitudeMeters": 0
        },
        "sourceExifOrientation": 0,
        "cameraMake": "string",
        "cameraModel": "string",
        "lensModel": "string",
        "fNumber": 0,
        "exposureTimeSeconds": 0,
        "iso": 0,
        "focalLengthMm": 0
      },
      "video": {
        "durationSeconds": 0
      }
    },
    "memo": "string",
    "size": "string",
    "createTime": "1970-01-01T00:00:00Z"
  }
}
```

Response message for AttachmentService.UploadAttachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadId|string|false|none|Opaque ID for subsequent calls. This is not a resource name.|
|committedSize|string|false|none|Number of file bytes committed so far.|
|maxChunkSize|integer(int32)|false|none|Maximum number of data bytes accepted in one call.|
|attachment|object|false|none|The created attachment. Set once the upload has been finalized.|

<h2 id="tocS_UploadAttachmentSpec">UploadAttachmentSpec</h2>
<!-- backwards compatibility -->
<a id="schemauploadattachmentspec"></a>
<a id="schema_UploadAttachmentSpec"></a>
<a id="tocSuploadattachmentspec"></a>
<a id="tocsuploadattachmentspec"></a>

```json
{
  "attachment": {
    "name": "string",
    "creator": "string",
    "filename": "string",
    "type": "string",
    "content": "string",
    "externalLink": "string",
    "motionMedia": {
      "family": "MOTION_MEDIA_FAMILY_UNSPECIFIED",
      "role": "MOTION_MEDIA_ROLE_UNSPECIFIED",
      "groupId": "string",
      "presentationTimestampUs": "string",
      "hasEmbeddedVideo": true
    },
    "mediaMetadata": {
      "width": 0,
      "height": 0,
      "photo": {
        "captureTime": {
          "localDateTime": "string",
          "utcOffset": "string"
        },
        "location": {
          "latitude": 0,
          "longitude": 0,
          "altitudeMeters": 0
        },
        "sourceExifOrientation": 0,
        "cameraMake": "string",
        "cameraModel": "string",
        "lensModel": "string",
        "fNumber": 0,
        "exposureTimeSeconds": 0,
        "iso": 0,
        "focalLengthMm": 0
      },
      "video": {
        "durationSeconds": 0
      }
    },
    "memo": "string",
    "size": "string",
    "createTime": "1970-01-01T00:00:00Z"
  },
  "attachmentId": "string",
  "totalSize": "string",
  "replaceAttachment": "string"
}
```

UploadAttachmentSpec describes the attachment that a new upload creates, or whose content it replaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|object|true|none|Required. Metadata for the attachment to create. content must be empty; file bytes are sent in data.|
|attachmentId|string|false|none|Optional. The ID to use for the attachment. If empty, a unique ID is generated.<br> Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$|
|totalSize|string|false|none|Optional. Total size of the file in bytes before media processing. Zero represents an empty file.|
|replaceAttachment|string|false|none|Optional. The name of an existing attachment whose content the finished upload replaces, instead of creating one.<br> The attachment keeps its name, memo and creation time; its filename, type, size and media metadata come from this<br> upload, and its cached thumbnail is dropped. attachment_id and attachment.memo must be empty. Only the uploader of<br> the attachment or an admin may replace it. An external link or part of a motion photo cannot be replaced.<br> Format: attachments/{attachment}|

<h2 id="tocS_UpsertMemoReactionRequest">UpsertMemoReactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertmemoreactionrequest"></a>
<a id="schema_UpsertMemoReactionRequest"></a>
<a id="tocSupsertmemoreactionrequest"></a>
<a id="tocsupsertmemoreactionrequest"></a>

```json
{
  "parent": "string",
  "reaction": {
    "name": "string",
    "creator": "string",
    "reactionType": "string",
    "createTime": "1970-01-01T00:00:00Z"
  }
}
```

Request message for MemoService.UpsertMemoReaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|true|none|Required. The resource name of the memo.<br> Format: memos/{memo}|
|reaction|object|true|none|Required. The reaction to upsert. Only reaction_type is used.|

<h2 id="tocS_UsageLimitsSetting_UsageLimit">UsageLimitsSetting_UsageLimit</h2>
<!-- backwards compatibility -->
<a id="schemausagelimitssetting_usagelimit"></a>
<a id="schema_UsageLimitsSetting_UsageLimit"></a>
<a id="tocSusagelimitssetting_usagelimit"></a>
<a id="tocsusagelimitssetting_usagelimit"></a>

```json
{
  "users": [
    "string"
  ],
  "allUsers": true,
  "memoCount": "string",
  "memoContentBytes": "string",
  "storageBytes": "string",
  "uploadBytes": "string"
}
```

UsageLimit is one entry: who it applies to and the limit for each
 metric. An unset limit is unlimited, as is 0.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[string]|false|none|The users the entry applies to. Not repeated within an entry.<br> Format: users/{user}|
|allUsers|boolean|false|none|Whether the entry applies to every user. Exactly one entry has it, and<br> it is the last entry. An entry has users or all_users, never both.|
|memoCount|string|false|none|The number of memos the user may have created, comments and archived<br> memos included.|
|memoContentBytes|string|false|none|The UTF-8 size in bytes of one memo's content.|
|storageBytes|string|false|none|The total size in bytes of the user's uploads. External links do not<br> count.|
|uploadBytes|string|false|none|The size in bytes of one uploaded file.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "name": "string",
  "username": "string",
  "displayName": "string",
  "email": "string",
  "avatarUrl": "string",
  "description": "string",
  "password": "string",
  "role": "ROLE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

User is an account on the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the user. {user} is the username.<br> Format: users/{user}|
|username|string|true|none|Required. The unique username, used to sign in.|
|displayName|string|false|none|Optional. The display name of the user.|
|email|string|false|none|Optional. The email address of the user. Stored trimmed and lowercased;<br> empty means no address. An address belongs to at most one user on the<br> instance, so writes that would reuse one fail with ALREADY_EXISTS.<br> Returned only to the user and to admins.|
|avatarUrl|string|false|none|Optional. The avatar URL of the user. An avatar set as a data URI (PNG,<br> JPEG, GIF or WebP, at most 2 MiB) is returned as a file server URL.|
|description|string|false|none|Optional. The description of the user.|
|password|string|false|write-only|Input only. The password of the user. Never returned.|
|role|string(enum)|true|none|Required. The role of the user. Only admins can change it.|
|state|string(enum)|true|none|Required. The state of the user. Only admins can change it.|
|createTime|string(date-time)|false|read-only|Output only. The creation timestamp.|
|updateTime|string(date-time)|false|read-only|Output only. The last update timestamp.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|ADMIN|
|role|USER|
|state|STATE_UNSPECIFIED|
|state|NORMAL|
|state|ARCHIVED|

<h2 id="tocS_UserNotification">UserNotification</h2>
<!-- backwards compatibility -->
<a id="schemausernotification"></a>
<a id="schema_UserNotification"></a>
<a id="tocSusernotification"></a>
<a id="tocsusernotification"></a>

```json
{
  "name": "string",
  "sender": "string",
  "senderUser": {
    "name": "string",
    "username": "string",
    "displayName": "string",
    "email": "string",
    "avatarUrl": "string",
    "description": "string",
    "password": "string",
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "createTime": "1970-01-01T00:00:00Z",
    "updateTime": "1970-01-01T00:00:00Z"
  },
  "type": "TYPE_UNSPECIFIED",
  "memoComment": {
    "memo": "string",
    "relatedMemo": "string",
    "memoSnippet": "string",
    "relatedMemoSnippet": "string"
  },
  "memoMention": {
    "memo": "string",
    "relatedMemo": "string",
    "memoSnippet": "string",
    "relatedMemoSnippet": "string"
  },
  "spaceInvitation": {
    "spaceInvitation": "string",
    "space": {
      "name": "string",
      "title": "string",
      "description": "string",
      "icon": {
        "emoji": "string",
        "lucide": "string"
      },
      "currentUserRole": "ROLE_UNSPECIFIED",
      "memberCount": 0
    },
    "role": "ROLE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED"
  },
  "status": "STATUS_UNSPECIFIED",
  "createTime": "1970-01-01T00:00:00Z"
}
```

UserNotification is a notification delivered to a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Identifier. The resource name of the notification.<br> Format: users/{user}/notifications/{notification}|
|sender|string|false|read-only|Output only. The user who caused the notification.<br> Format: users/{user}|
|senderUser|object|false|read-only|Output only. The sender user details.|
|type|string(enum)|false|read-only|Output only. The type of the notification.|
|memoComment|object|false|read-only|Output only. Details of a MEMO_COMMENT notification.|
|memoMention|object|false|read-only|Output only. Details of a MEMO_MENTION notification.|
|spaceInvitation|object|false|read-only|Output only. Details of a SPACE_INVITATION notification.|
|status|string(enum)|false|none|Optional. The status of the notification.|
|createTime|string(date-time)|false|read-only|Output only. The creation timestamp.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|MEMO_COMMENT|
|type|MEMO_MENTION|
|type|SPACE_INVITATION|
|status|STATUS_UNSPECIFIED|
|status|UNREAD|
|status|ARCHIVED|

<h2 id="tocS_UserNotification_MemoCommentPayload">UserNotification_MemoCommentPayload</h2>
<!-- backwards compatibility -->
<a id="schemausernotification_memocommentpayload"></a>
<a id="schema_UserNotification_MemoCommentPayload"></a>
<a id="tocSusernotification_memocommentpayload"></a>
<a id="tocsusernotification_memocommentpayload"></a>

```json
{
  "memo": "string",
  "relatedMemo": "string",
  "memoSnippet": "string",
  "relatedMemoSnippet": "string"
}
```

MemoCommentPayload holds the details of a MEMO_COMMENT notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memo|string|false|none|The comment memo.<br> Format: memos/{memo}|
|relatedMemo|string|false|none|The memo that was commented on.<br> Format: memos/{memo}|
|memoSnippet|string|false|none|Preview text of the comment memo.|
|relatedMemoSnippet|string|false|none|Preview text of the related memo.|

<h2 id="tocS_UserNotification_MemoMentionPayload">UserNotification_MemoMentionPayload</h2>
<!-- backwards compatibility -->
<a id="schemausernotification_memomentionpayload"></a>
<a id="schema_UserNotification_MemoMentionPayload"></a>
<a id="tocSusernotification_memomentionpayload"></a>
<a id="tocsusernotification_memomentionpayload"></a>

```json
{
  "memo": "string",
  "relatedMemo": "string",
  "memoSnippet": "string",
  "relatedMemoSnippet": "string"
}
```

MemoMentionPayload holds the details of a MEMO_MENTION notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memo|string|false|none|The memo that contains the mention.<br> Format: memos/{memo}|
|relatedMemo|string|false|none|The related parent memo when the mention was created in a comment.<br> Format: memos/{memo}|
|memoSnippet|string|false|none|Preview text of the memo that contains the mention.|
|relatedMemoSnippet|string|false|none|Preview text of the related parent memo.|

<h2 id="tocS_UserNotification_SpaceInvitationPayload">UserNotification_SpaceInvitationPayload</h2>
<!-- backwards compatibility -->
<a id="schemausernotification_spaceinvitationpayload"></a>
<a id="schema_UserNotification_SpaceInvitationPayload"></a>
<a id="tocSusernotification_spaceinvitationpayload"></a>
<a id="tocsusernotification_spaceinvitationpayload"></a>

```json
{
  "spaceInvitation": "string",
  "space": {
    "name": "string",
    "title": "string",
    "description": "string",
    "icon": {
      "emoji": "string",
      "lucide": "string"
    },
    "currentUserRole": "ROLE_UNSPECIFIED",
    "memberCount": 0
  },
  "role": "ROLE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

SpaceInvitationPayload holds the details of a SPACE_INVITATION
 notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spaceInvitation|string|false|none|The invitation.<br> Format: spaces/{space}/invitations/{invitation}|
|space|object|false|none|The read-only Space summary carried by the invitation.|
|role|string(enum)|false|none|The role the invitation offers.|
|state|string(enum)|false|none|The current state of the invitation for the receiver.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|ADMIN|
|role|USER|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|ACCEPTED|

<h2 id="tocS_UserSetting">UserSetting</h2>
<!-- backwards compatibility -->
<a id="schemausersetting"></a>
<a id="schema_UserSetting"></a>
<a id="tocSusersetting"></a>
<a id="tocsusersetting"></a>

```json
{
  "name": "string",
  "generalSetting": {
    "locale": "string",
    "memoVisibility": "string",
    "theme": "string",
    "saveMediaMetadata": true
  },
  "webhooksSetting": {
    "webhooks": [
      {
        "name": "string",
        "displayName": "string",
        "url": "string",
        "signingSecret": "string",
        "signingSecretSet": true,
        "createTime": "1970-01-01T00:00:00Z",
        "updateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "tagsSetting": {
    "tags": {
      "property1": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      },
      "property2": {
        "backgroundColor": {
          "red": 0,
          "green": 0,
          "blue": 0,
          "alpha": 0
        },
        "blurContent": true
      }
    }
  },
  "editorSetting": {
    "sourceMode": true
  }
}
```

UserSetting is one group of a user's preferences, identified by its key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the user setting. {setting} is the<br> setting key, such as GENERAL.<br> Format: users/{user}/settings/{setting}|
|generalSetting|object|false|none|The value of the GENERAL setting.|
|webhooksSetting|object|false|none|The value of the WEBHOOKS setting.|
|tagsSetting|object|false|none|The value of the TAGS setting.|
|editorSetting|object|false|none|The value of the EDITOR setting.|

<h2 id="tocS_UserSetting_EditorSetting">UserSetting_EditorSetting</h2>
<!-- backwards compatibility -->
<a id="schemausersetting_editorsetting"></a>
<a id="schema_UserSetting_EditorSetting"></a>
<a id="tocSusersetting_editorsetting"></a>
<a id="tocsusersetting_editorsetting"></a>

```json
{
  "sourceMode": true
}
```

EditorSetting holds the user's memo editor preferences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceMode|boolean|false|none|Optional. Whether the official client's memo editor uses source mode,<br> which shows and edits memos as Markdown text instead of formatted text.<br> The official client calls this "Markdown mode".|

<h2 id="tocS_UserSetting_GeneralSetting">UserSetting_GeneralSetting</h2>
<!-- backwards compatibility -->
<a id="schemausersetting_generalsetting"></a>
<a id="schema_UserSetting_GeneralSetting"></a>
<a id="tocSusersetting_generalsetting"></a>
<a id="tocsusersetting_generalsetting"></a>

```json
{
  "locale": "string",
  "memoVisibility": "string",
  "theme": "string",
  "saveMediaMetadata": true
}
```

GeneralSetting holds general user preferences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|false|none|Optional. The preferred locale of the user.|
|memoVisibility|string|false|none|Optional. The default visibility of new memos: PRIVATE, PROTECTED or<br> PUBLIC.|
|theme|string|false|none|Optional. The preferred theme of the user. This references a CSS file in<br> the web/public/themes/ directory. If not set, the default theme is used.|
|saveMediaMetadata|boolean|false|none|Optional. Whether the official client should save metadata from future<br> media uploads.|

<h2 id="tocS_UserSetting_TagMetadata">UserSetting_TagMetadata</h2>
<!-- backwards compatibility -->
<a id="schemausersetting_tagmetadata"></a>
<a id="schema_UserSetting_TagMetadata"></a>
<a id="tocSusersetting_tagmetadata"></a>
<a id="tocsusersetting_tagmetadata"></a>

```json
{
  "backgroundColor": {
    "red": 0,
    "green": 0,
    "blue": 0,
    "alpha": 0
  },
  "blurContent": true
}
```

TagMetadata holds user-specific display rules for a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|object|false|none|Optional. The background color of the tag label. When unset, the default<br> tag color is used.|
|blurContent|boolean|false|none|Optional. Whether memos with this tag have their content blurred.|

<h2 id="tocS_UserSetting_TagsSetting">UserSetting_TagsSetting</h2>
<!-- backwards compatibility -->
<a id="schemausersetting_tagssetting"></a>
<a id="schema_UserSetting_TagsSetting"></a>
<a id="tocSusersetting_tagssetting"></a>
<a id="tocsusersetting_tagssetting"></a>

```json
{
  "tags": {
    "property1": {
      "backgroundColor": {
        "red": 0,
        "green": 0,
        "blue": 0,
        "alpha": 0
      },
      "blurContent": true
    },
    "property2": {
      "backgroundColor": {
        "red": 0,
        "green": 0,
        "blue": 0,
        "alpha": 0
      },
      "blurContent": true
    }
  }
}
```

TagsSetting holds user-specific tag metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|Optional. Map of tag name pattern to tag metadata. Each key is treated as<br> an anchored regular expression (^pattern$).|

<h2 id="tocS_UserSetting_WebhooksSetting">UserSetting_WebhooksSetting</h2>
<!-- backwards compatibility -->
<a id="schemausersetting_webhookssetting"></a>
<a id="schema_UserSetting_WebhooksSetting"></a>
<a id="tocSusersetting_webhookssetting"></a>
<a id="tocsusersetting_webhookssetting"></a>

```json
{
  "webhooks": [
    {
      "name": "string",
      "displayName": "string",
      "url": "string",
      "signingSecret": "string",
      "signingSecretSet": true,
      "createTime": "1970-01-01T00:00:00Z",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

WebhooksSetting holds a user's webhooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|[[UserWebhook](#schemauserwebhook)]|false|none|The user's webhooks.|

<h2 id="tocS_UserStats">UserStats</h2>
<!-- backwards compatibility -->
<a id="schemauserstats"></a>
<a id="schema_UserStats"></a>
<a id="tocSuserstats"></a>
<a id="tocsuserstats"></a>

```json
{
  "name": "string",
  "totalMemoCount": 0,
  "memoTypeStats": {
    "linkCount": 0,
    "codeCount": 0,
    "todoCount": 0,
    "undoCount": 0
  },
  "tagCounts": {
    "property1": 0,
    "property2": 0
  },
  "pinnedMemos": [
    "string"
  ],
  "memoCreatedTimestamps": [
    "1970-01-01T00:00:00Z"
  ],
  "memoUpdatedTimestamps": [
    "1970-01-01T00:00:00Z"
  ],
  "attachmentStorageBytes": "string"
}
```

UserStats is a summary of a user's memos. Comments are counted unless the
 filter excludes them with `parent == null`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the user statistics singleton.<br> Format: users/{user}/stats|
|totalMemoCount|integer(int32)|false|none|The number of counted memos.|
|memoTypeStats|object|false|none|The number of counted memos by content type.|
|tagCounts|object|false|none|The number of counted memos per tag.|
|pinnedMemos|[string]|false|none|The pinned memos among the counted memos.<br> Format: memos/{memo}|
|memoCreatedTimestamps|[string(date-time)]|false|none|The creation timestamps of the counted memos, one per memo.|
|memoUpdatedTimestamps|[string(date-time)]|false|none|The latest update timestamps of the counted memos (one per memo, mirrors<br> memo_created_timestamps). Used by the activity heatmap when the client's<br> view is set to update_time basis.|
|attachmentStorageBytes|string|false|read-only|Output only. Total persisted attachment size in bytes, including unlinked<br> uploads and attachments in all spaces. Excludes temporary uploads and<br> derived files. Returned only by GetUserStats for the authenticated user's<br> own stats, independently of the request's memo filter.|

<h2 id="tocS_UserStats_MemoTypeStats">UserStats_MemoTypeStats</h2>
<!-- backwards compatibility -->
<a id="schemauserstats_memotypestats"></a>
<a id="schema_UserStats_MemoTypeStats"></a>
<a id="tocSuserstats_memotypestats"></a>
<a id="tocsuserstats_memotypestats"></a>

```json
{
  "linkCount": 0,
  "codeCount": 0,
  "todoCount": 0,
  "undoCount": 0
}
```

MemoTypeStats counts memos by the kind of content they contain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkCount|integer(int32)|false|none|The number of memos that contain a link.|
|codeCount|integer(int32)|false|none|The number of memos that contain code.|
|todoCount|integer(int32)|false|none|The number of memos that contain a task list.|
|undoCount|integer(int32)|false|none|The number of memos that contain incomplete tasks.|

<h2 id="tocS_UserUsage">UserUsage</h2>
<!-- backwards compatibility -->
<a id="schemauserusage"></a>
<a id="schema_UserUsage"></a>
<a id="tocSuserusage"></a>
<a id="tocsuserusage"></a>

```json
{
  "name": "string",
  "memoCount": "string",
  "storageBytes": "string",
  "limits": {
    "memoCount": "string",
    "memoContentBytes": "string",
    "storageBytes": "string",
    "uploadBytes": "string"
  },
  "limitIndex": 0
}
```

UserUsage is a user's usage and the limit set in effect for the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the user usage singleton.<br> Format: users/{user}/usage|
|memoCount|string|false|none|The number of memos the user created, including comments, archived<br> memos, and memos in Spaces.|
|storageBytes|string|false|none|The total size in bytes of the user's uploads, including uploads not<br> attached to a memo. External links do not count.|
|limits|object|false|none|The limit set in effect: the first USAGE_LIMITS entry that names the<br> user, or the default. An unset limit is unlimited.|
|limitIndex|integer(int32)|false|none|The position of the entry in effect in the USAGE_LIMITS setting, starting<br> at 0. The default is the last entry.|

<h2 id="tocS_UserUsage_Limits">UserUsage_Limits</h2>
<!-- backwards compatibility -->
<a id="schemauserusage_limits"></a>
<a id="schema_UserUsage_Limits"></a>
<a id="tocSuserusage_limits"></a>
<a id="tocsuserusage_limits"></a>

```json
{
  "memoCount": "string",
  "memoContentBytes": "string",
  "storageBytes": "string",
  "uploadBytes": "string"
}
```

Limits is the limit for each metric. An unset limit is unlimited, as is 0.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memoCount|string|false|none|The number of memos the user may have created.|
|memoContentBytes|string|false|none|The UTF-8 size in bytes of one memo's content.|
|storageBytes|string|false|none|The total size in bytes of the user's uploads.|
|uploadBytes|string|false|none|The size in bytes of one uploaded file.|

<h2 id="tocS_UserWebhook">UserWebhook</h2>
<!-- backwards compatibility -->
<a id="schemauserwebhook"></a>
<a id="schema_UserWebhook"></a>
<a id="tocSuserwebhook"></a>
<a id="tocsuserwebhook"></a>

```json
{
  "name": "string",
  "displayName": "string",
  "url": "string",
  "signingSecret": "string",
  "signingSecretSet": true,
  "createTime": "1970-01-01T00:00:00Z",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

UserWebhook is a webhook owned by a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Identifier. The resource name of the webhook.<br> Format: users/{user}/webhooks/{webhook}|
|displayName|string|false|none|A human-readable name for the webhook.|
|url|string|false|none|The URL the webhook request is sent to. Required on create.|
|signingSecret|string|false|write-only|Input only. The secret used to HMAC-SHA256 sign the webhook request body.<br> Never returned; use GetUserWebhookSigningSecret to read it.|
|signingSecretSet|boolean|false|read-only|Output only. Whether a signing secret is configured for this webhook.|
|createTime|string(date-time)|false|read-only|Output only. The creation timestamp. Currently never set.|
|updateTime|string(date-time)|false|read-only|Output only. The last update timestamp. Currently never set.|

<h2 id="tocS_VideoMetadata">VideoMetadata</h2>
<!-- backwards compatibility -->
<a id="schemavideometadata"></a>
<a id="schema_VideoMetadata"></a>
<a id="tocSvideometadata"></a>
<a id="tocsvideometadata"></a>

```json
{
  "durationSeconds": 0
}
```

VideoMetadata is metadata recorded by the source of a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationSeconds|number(double)|false|none|The duration of the video in seconds.|
