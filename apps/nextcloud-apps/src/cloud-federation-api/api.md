<h1 id="cloudfederationapi">cloud_federation_api v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Enable clouds to communicate with each other and exchange data

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="cloudfederationapi-requesthandler">request_handler</h1>

Open-Cloud-Mesh-API

## Add share

<a id="opIdrequest_handler-add-share"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/ocm/shares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "shareWith": "string",
    "name": "string",
    "description": "string",
    "providerId": "string",
    "owner": "string",
    "ownerDisplayName": "string",
    "sharedBy": "string",
    "sharedByDisplayName": "string",
    "protocol": {
      "name": "string",
      "options": {
        "property1": {},
        "property2": {}
      },
      "webdav": {
        "property1": {},
        "property2": {}
      }
    },
    "shareType": "string",
    "resourceType": "string"
  }'
```

`POST /index.php/ocm/shares`

> Body parameter

```json
{
  "shareWith": "string",
  "name": "string",
  "description": "string",
  "providerId": "string",
  "owner": "string",
  "ownerDisplayName": "string",
  "sharedBy": "string",
  "sharedByDisplayName": "string",
  "protocol": {
    "name": "string",
    "options": {
      "property1": {},
      "property2": {}
    },
    "webdav": {
      "property1": {},
      "property2": {}
    }
  },
  "shareType": "string",
  "resourceType": "string"
}
```

<h3 id="add-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» shareWith|body|string|true|The user who the share will be shared with|
|» name|body|string|true|The resource name (e.g. document.odt)|
|» description|body|string \| null|false|Share description|
|» providerId|body|string|true|Resource UID on the provider side|
|» owner|body|string|true|Provider specific UID of the user who owns the resource|
|» ownerDisplayName|body|string \| null|false|Display name of the user who shared the item|
|» sharedBy|body|string \| null|false|Provider specific UID of the user who shared the resource|
|» sharedByDisplayName|body|string \| null|false|Display name of the user who shared the resource|
|» protocol|body|object|true|Legacy format: ['name' => 'webdav', 'options' => ['sharedSecret' => '...', 'permissions' => '...']], new single-protocol format: ['name' => 'webdav', 'webdav' => ['uri' => '...', 'sharedSecret' => '...', 'permissions' => [...]]], or multi-protocol envelope per OCM spec: ['name' => 'multi', 'webdav' => ['sharedSecret' => '...', ...], 'webapp' => [...]]|
|» » name|body|string|true|none|
|» » options|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» » webdav|body|object|false|none|
|» » » **additionalProperties**|body|object|false|none|
|» shareType|body|string|true|'group' or 'user' share|
|» resourceType|body|string|true|'file', 'calendar',...|

> Example responses

> 201 Response

```json
{
  "recipientDisplayName": "string",
  "recipientUserId": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "validationErrors": [
    {
      "name": "string",
      "message": "string"
    }
  ]
}
```

> 501 Response

```json
{
  "message": "string"
}
```

<h3 id="add-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The notification was successfully received. The display name of the recipient might be returned in the body|[AddShare](#schemaaddshare)|
|400|Bad Request|Bad request due to invalid parameters, e.g. when `shareWith` is not found or required properties are missing|[ValidationError](#schemavalidationerror)|
|501|Not Implemented|Share type or the resource type is not supported|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Send a notification about an existing share

<a id="opIdrequest_handler-receive-notification"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/ocm/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "notificationType": "string",
    "resourceType": "string",
    "providerId": "string",
    "notification": {
      "property1": {},
      "property2": {}
    }
  }'
```

`POST /index.php/ocm/notifications`

> Body parameter

```json
{
  "notificationType": "string",
  "resourceType": "string",
  "providerId": "string",
  "notification": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="send-a-notification-about-an-existing-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» notificationType|body|string|true|Notification type, e.g. SHARE_ACCEPTED|
|» resourceType|body|string|true|calendar, file, contact,...|
|» providerId|body|string \| null|false|ID of the share|
|» notification|body|object \| null|false|The actual payload of the notification|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "property1": {},
  "property2": {}
}
```

> 400 Response

```json
{
  "message": "string",
  "validationErrors": [
    {
      "name": "string",
      "message": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 501 Response

```json
{
  "message": "string"
}
```

<h3 id="send-a-notification-about-an-existing-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The notification was successfully received|Inline|
|400|Bad Request|Bad request due to invalid parameters, e.g. when `type` is invalid or missing|[ValidationError](#schemavalidationerror)|
|403|Forbidden|Getting resource is not allowed|[Error](#schemaerror)|
|501|Not Implemented|The resource type is not supported|[Error](#schemaerror)|

<h3 id="send-a-notification-about-an-existing-share-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_AddShare">AddShare</h2>
<!-- backwards compatibility -->
<a id="schemaaddshare"></a>
<a id="schema_AddShare"></a>
<a id="tocSaddshare"></a>
<a id="tocsaddshare"></a>

```json
{
  "recipientDisplayName": "string",
  "recipientUserId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipientDisplayName|string|true|none|none|
|recipientUserId|string|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "message": "string",
  "validationErrors": [
    {
      "name": "string",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|validationErrors|[object]|true|none|none|
