<h1 id="json-storage">JSON storage v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

JSON storage API

Base URLs:

* <a href="https://extendsclass.com/api/json-storage">https://extendsclass.com/api/json-storage</a>

<h1 id="json-storage-default">Default</h1>

## Create a json bin

> Code samples

```bash
curl https://example.com/bin \
  -X POST \
  -H 'Accept: application/json'
```

`POST /bin`

> Example responses

> 200 Response

```json
{
  "id": "string",
  "status": 0,
  "uri": "string"
}
```

> 413 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "message": "string",
  "status": 0
}
```

<h3 id="create-a-json-bin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bin information (id and URL)|[CreateStatus](#schemacreatestatus)|
|413|Payload Too Large|'JSON data too large' or 'Security key is too large'|[Error](#schemaerror)|
|422|Unprocessable Entity|Security key is required for private bin|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Return a json bin

> Code samples

```bash
curl https://example.com/bin/string \
  -H 'Accept: application/json'
```

`GET /bin/{id}`

<h3 id="return-a-json-bin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "message": "string",
  "status": 0
}
```

<h3 id="return-a-json-bin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bin data|Inline|
|404|Not Found|Bin not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Id must be specified|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a json bin

> Code samples

```bash
curl https://example.com/bin/string \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /bin/{id}`

<h3 id="update-a-json-bin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {},
  "status": 0
}
```

> 401 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 404 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 413 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "message": "string",
  "status": 0
}
```

<h3 id="update-a-json-bin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bin data updated|[UpdateStatus](#schemaupdatestatus)|
|401|Unauthorized|Wrong security key|[Error](#schemaerror)|
|404|Not Found|Bin not found|[Error](#schemaerror)|
|413|Payload Too Large|JSON data too large|[Error](#schemaerror)|
|422|Unprocessable Entity|Id must be specified|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a json bin

> Code samples

```bash
curl https://example.com/bin/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /bin/{id}`

<h3 id="delete-a-json-bin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": 0
}
```

> 401 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 404 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "message": "string",
  "status": 0
}
```

<h3 id="delete-a-json-bin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status of the deletion|[DeleteStatus](#schemadeletestatus)|
|401|Unauthorized|Wrong security key|[Error](#schemaerror)|
|404|Not Found|Bin not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Id must be specified|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Partially update a json bin with JSON Merge Patch

> Code samples

```bash
curl https://example.com/bin/string \
  -X PATCH \
  -H 'Accept: application/json'
```

`PATCH /bin/{id}`

<h3 id="partially-update-a-json-bin-with-json-merge-patch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {},
  "status": 0
}
```

> 401 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 404 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 413 Response

```json
{
  "message": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "message": "string",
  "status": 0
}
```

<h3 id="partially-update-a-json-bin-with-json-merge-patch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bin data updated|[UpdateStatus](#schemaupdatestatus)|
|401|Unauthorized|Wrong security key|[Error](#schemaerror)|
|404|Not Found|Bin not found|[Error](#schemaerror)|
|413|Payload Too Large|JSON data too large|[Error](#schemaerror)|
|422|Unprocessable Entity|Id must be specified|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CreateStatus">CreateStatus</h2>
<!-- backwards compatibility -->
<a id="schemacreatestatus"></a>
<a id="schema_CreateStatus"></a>
<a id="tocScreatestatus"></a>
<a id="tocscreatestatus"></a>

```json
{
  "id": "string",
  "status": 0,
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|status|integer|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_DeleteStatus">DeleteStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeletestatus"></a>
<a id="schema_DeleteStatus"></a>
<a id="tocSdeletestatus"></a>
<a id="tocsdeletestatus"></a>

```json
{
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|status|integer|false|none|none|

<h2 id="tocS_UpdateStatus">UpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatus"></a>
<a id="schema_UpdateStatus"></a>
<a id="tocSupdatestatus"></a>
<a id="tocsupdatestatus"></a>

```json
{
  "data": {},
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|status|integer|false|none|none|
