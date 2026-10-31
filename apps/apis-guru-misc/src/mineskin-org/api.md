<h1 id="mineskin-api">MineSkin API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Client implementations: 
Java: https://github.com/InventivetalentDev/MineskinClient
NodeJS: https://github.com/InventivetalentDev/mineskin-client

Examples: https://github.com/MineSkin/examples

Base URLs:

* <a href="https://api.mineskin.org">https://api.mineskin.org</a>

Email: <a href="mailto:info@mineskin.org">inventivetalent</a> 
Web: <a href="https://discord.gg/nzAdvPc">inventivetalent</a> 
License: <a href="https://github.com/MineSkin/api.mineskin.org/blob/master/LICENSE">MIT</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **key**, in: query. Get your key from https://mineskin.org/apikey

- HTTP Authentication, scheme: bearer Get your key from https://mineskin.org/apikey

<h1 id="mineskin-api-generate">generate</h1>

## post/generate/upload

> Code samples

```bash
curl "https://example.com/generate/upload?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'User-Agent: ExampleApp/v1.0' \
  -d 'model=steve&name=string&variant=classic&visibility=0&file=string'
```

`POST /generate/upload`

> Body parameter

```yaml
model: steve
name: string
variant: classic
visibility: 0
file: string
```

<h3 id="postgenerateupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|
|body|body|object|true|none|
|» model|body|string|false|**Deprecated.**|
|» name|body|string|false|none|
|» variant|body|string|false|Skin variant - automatically determined based on the image if not specified|
|» visibility|body|integer|false|Visibility of the generated skin. 0 for public, 1 for private|
|» file|body|string(binary)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» model|steve|
|» model|slim|
|» variant|classic|
|» variant|slim|
|» visibility|0|
|» visibility|1|

> Example responses

> 200 Response

```json
{
  "account": 0,
  "accountId": 0,
  "data": {
    "texture": {
      "signature": "string",
      "url": "string",
      "value": "string"
    },
    "uuid": "string"
  },
  "duration": 0,
  "id": 0,
  "idStr": "string",
  "model": "slim",
  "name": "string",
  "private": true,
  "server": "string",
  "timestamp": 0,
  "uuid": "string",
  "variant": "classic",
  "views": 0,
  "duplicate": true,
  "nextRequest": 0
}
```

> 400 Response

```json
{
  "error": "string",
  "errorCode": "string"
}
```

> 429 Response

```json
{
  "delay": 0,
  "error": "string",
  "nextRequest": 0
}
```

> 500 Response

```json
{
  "error": "string",
  "errorCode": "string"
}
```

<h3 id="postgenerateupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully generated skin info|Inline|
|400|Bad Request|Response if an error occured|Inline|
|429|Too Many Requests|Response if the client sent a request too soon|Inline|
|500|Internal Server Error|Response if an error occured|Inline|

<h3 id="postgenerateupload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|integer|false|none|none|
|accountId|integer|false|none|**Deprecated.**|
|data|[SkinData](#schemaskindata)|true|none|none|
|duration|number|false|none|none|
|id|integer|true|none|none|
|idStr|string|false|none|none|
|model|string|true|none|**Deprecated.**|
|name|string|false|none|none|
|private|boolean|false|none|none|
|server|string|false|none|none|
|timestamp|number|false|none|none|
|uuid|string|false|none|none|
|variant|string|false|none|none|
|views|number|false|none|none|
|duplicate|boolean|false|none|none|
|nextRequest|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|model|slim|
|model|steve|
|model|unknown|
|variant|classic|
|variant|slim|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|
|errorCode|string|false|none|Consistent error code, see [AuthError](https://github.com/MineSkin/api.mineskin.org/blob/793a926cbe4b90887ed8164c9eccfcb542fdeadb/src/generator/Authentication.ts#L580) & [GenError](https://github.com/MineSkin/api.mineskin.org/blob/47a5f51dc664e0f730b0073f70b2fc295e14ca3b/src/generator/Generator.ts#L1093)|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delay|integer|false|none|The API's current delay in seconds|
|error|string|true|none|Error message|
|nextRequest|integer|false|none|Unix timestamp when the next request is allowed|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|
|errorCode|string|false|none|Consistent error code, see [AuthError](https://github.com/MineSkin/api.mineskin.org/blob/793a926cbe4b90887ed8164c9eccfcb542fdeadb/src/generator/Authentication.ts#L580) & [GenError](https://github.com/MineSkin/api.mineskin.org/blob/47a5f51dc664e0f730b0073f70b2fc295e14ca3b/src/generator/Generator.ts#L1093)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & bearerAuth
</aside>

## post/generate/url

> Code samples

```bash
curl "https://example.com/generate/url?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'User-Agent: ExampleApp/v1.0' \
  -d '{
    "model": "steve",
    "name": "string",
    "variant": "classic",
    "visibility": 0,
    "url": "string"
  }'
```

`POST /generate/url`

> Body parameter

```json
{
  "model": "steve",
  "name": "string",
  "variant": "classic",
  "visibility": 0,
  "url": "string"
}
```

<h3 id="postgenerateurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|
|body|body|object|true|none|
|» model|body|string|false|**Deprecated.**|
|» name|body|string|false|none|
|» variant|body|string|false|Skin variant - automatically determined based on the image if not specified|
|» visibility|body|integer|false|Visibility of the generated skin. 0 for public, 1 for private|
|» url|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» model|steve|
|» model|slim|
|» variant|classic|
|» variant|slim|
|» visibility|0|
|» visibility|1|

> Example responses

> 200 Response

```json
{
  "account": 0,
  "accountId": 0,
  "data": {
    "texture": {
      "signature": "string",
      "url": "string",
      "value": "string"
    },
    "uuid": "string"
  },
  "duration": 0,
  "id": 0,
  "idStr": "string",
  "model": "slim",
  "name": "string",
  "private": true,
  "server": "string",
  "timestamp": 0,
  "uuid": "string",
  "variant": "classic",
  "views": 0,
  "duplicate": true,
  "nextRequest": 0
}
```

> 400 Response

```json
{
  "error": "string",
  "errorCode": "string"
}
```

> 429 Response

```json
{
  "delay": 0,
  "error": "string",
  "nextRequest": 0
}
```

> 500 Response

```json
{
  "error": "string",
  "errorCode": "string"
}
```

<h3 id="postgenerateurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully generated skin info|Inline|
|400|Bad Request|Response if an error occured|Inline|
|429|Too Many Requests|Response if the client sent a request too soon|Inline|
|500|Internal Server Error|Response if an error occured|Inline|

<h3 id="postgenerateurl-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|integer|false|none|none|
|accountId|integer|false|none|**Deprecated.**|
|data|[SkinData](#schemaskindata)|true|none|none|
|duration|number|false|none|none|
|id|integer|true|none|none|
|idStr|string|false|none|none|
|model|string|true|none|**Deprecated.**|
|name|string|false|none|none|
|private|boolean|false|none|none|
|server|string|false|none|none|
|timestamp|number|false|none|none|
|uuid|string|false|none|none|
|variant|string|false|none|none|
|views|number|false|none|none|
|duplicate|boolean|false|none|none|
|nextRequest|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|model|slim|
|model|steve|
|model|unknown|
|variant|classic|
|variant|slim|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|
|errorCode|string|false|none|Consistent error code, see [AuthError](https://github.com/MineSkin/api.mineskin.org/blob/793a926cbe4b90887ed8164c9eccfcb542fdeadb/src/generator/Authentication.ts#L580) & [GenError](https://github.com/MineSkin/api.mineskin.org/blob/47a5f51dc664e0f730b0073f70b2fc295e14ca3b/src/generator/Generator.ts#L1093)|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delay|integer|false|none|The API's current delay in seconds|
|error|string|true|none|Error message|
|nextRequest|integer|false|none|Unix timestamp when the next request is allowed|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|
|errorCode|string|false|none|Consistent error code, see [AuthError](https://github.com/MineSkin/api.mineskin.org/blob/793a926cbe4b90887ed8164c9eccfcb542fdeadb/src/generator/Authentication.ts#L580) & [GenError](https://github.com/MineSkin/api.mineskin.org/blob/47a5f51dc664e0f730b0073f70b2fc295e14ca3b/src/generator/Generator.ts#L1093)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & bearerAuth
</aside>

## post/generate/user

> Code samples

```bash
curl "https://example.com/generate/user?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'User-Agent: ExampleApp/v1.0' \
  -d '{
    "model": "steve",
    "name": "string",
    "variant": "classic",
    "visibility": 0,
    "uuid": "stringstringstringstringstringst"
  }'
```

`POST /generate/user`

> Body parameter

```json
{
  "model": "steve",
  "name": "string",
  "variant": "classic",
  "visibility": 0,
  "uuid": "stringstringstringstringstringst"
}
```

<h3 id="postgenerateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|
|body|body|object|true|none|
|» model|body|string|false|**Deprecated.**|
|» name|body|string|false|none|
|» variant|body|string|false|Skin variant - automatically determined based on the image if not specified|
|» visibility|body|integer|false|Visibility of the generated skin. 0 for public, 1 for private|
|» uuid|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» model|steve|
|» model|slim|
|» variant|classic|
|» variant|slim|
|» visibility|0|
|» visibility|1|

> Example responses

> 200 Response

```json
{
  "account": 0,
  "accountId": 0,
  "data": {
    "texture": {
      "signature": "string",
      "url": "string",
      "value": "string"
    },
    "uuid": "string"
  },
  "duration": 0,
  "id": 0,
  "idStr": "string",
  "model": "slim",
  "name": "string",
  "private": true,
  "server": "string",
  "timestamp": 0,
  "uuid": "string",
  "variant": "classic",
  "views": 0,
  "duplicate": true,
  "nextRequest": 0
}
```

> 400 Response

```json
{
  "error": "string",
  "errorCode": "string"
}
```

> 429 Response

```json
{
  "delay": 0,
  "error": "string",
  "nextRequest": 0
}
```

> 500 Response

```json
{
  "error": "string",
  "errorCode": "string"
}
```

<h3 id="postgenerateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully generated skin info|Inline|
|400|Bad Request|Response if an error occured|Inline|
|429|Too Many Requests|Response if the client sent a request too soon|Inline|
|500|Internal Server Error|Response if an error occured|Inline|

<h3 id="postgenerateuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|integer|false|none|none|
|accountId|integer|false|none|**Deprecated.**|
|data|[SkinData](#schemaskindata)|true|none|none|
|duration|number|false|none|none|
|id|integer|true|none|none|
|idStr|string|false|none|none|
|model|string|true|none|**Deprecated.**|
|name|string|false|none|none|
|private|boolean|false|none|none|
|server|string|false|none|none|
|timestamp|number|false|none|none|
|uuid|string|false|none|none|
|variant|string|false|none|none|
|views|number|false|none|none|
|duplicate|boolean|false|none|none|
|nextRequest|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|model|slim|
|model|steve|
|model|unknown|
|variant|classic|
|variant|slim|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|
|errorCode|string|false|none|Consistent error code, see [AuthError](https://github.com/MineSkin/api.mineskin.org/blob/793a926cbe4b90887ed8164c9eccfcb542fdeadb/src/generator/Authentication.ts#L580) & [GenError](https://github.com/MineSkin/api.mineskin.org/blob/47a5f51dc664e0f730b0073f70b2fc295e14ca3b/src/generator/Generator.ts#L1093)|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delay|integer|false|none|The API's current delay in seconds|
|error|string|true|none|Error message|
|nextRequest|integer|false|none|Unix timestamp when the next request is allowed|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|
|errorCode|string|false|none|Consistent error code, see [AuthError](https://github.com/MineSkin/api.mineskin.org/blob/793a926cbe4b90887ed8164c9eccfcb542fdeadb/src/generator/Authentication.ts#L580) & [GenError](https://github.com/MineSkin/api.mineskin.org/blob/47a5f51dc664e0f730b0073f70b2fc295e14ca3b/src/generator/Generator.ts#L1093)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & bearerAuth
</aside>

<h1 id="mineskin-api-get">get</h1>

## get/get/delay

> Code samples

```bash
curl "https://example.com/get/delay?key=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'User-Agent: ExampleApp/v1.0'
```

`GET /get/delay`

<h3 id="getgetdelay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|

> Example responses

> 200 Response

```json
{
  "delay": 0,
  "next": 0,
  "nextRelative": 0
}
```

<h3 id="getgetdelay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delay info for the requesting client|Inline|

<h3 id="getgetdelay-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delay|integer|false|none|none|
|next|integer|false|none|none|
|nextRelative|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & bearerAuth
</aside>

## get/get/id/{id}

> Code samples

```bash
curl https://example.com/get/id/0 \
  -H 'Accept: application/json' \
  -H 'User-Agent: ExampleApp/v1.0'
```

`GET /get/id/{id}`

Deprecated. Use /get/uuid instead.

<h3 id="getgetidid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number(integer)|true|none|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|

> Example responses

> 200 Response

```json
{
  "account": 0,
  "accountId": 0,
  "data": {
    "texture": {
      "signature": "string",
      "url": "string",
      "value": "string"
    },
    "uuid": "string"
  },
  "duration": 0,
  "id": 0,
  "idStr": "string",
  "model": "slim",
  "name": "string",
  "private": true,
  "server": "string",
  "timestamp": 0,
  "uuid": "string",
  "variant": "classic",
  "views": 0
}
```

<h3 id="getgetidid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Skin Info|[SkinInfo](#schemaskininfo)|

<aside class="success">
This operation does not require authentication
</aside>

## get/get/list/{page}

> Code samples

```bash
curl https://example.com/get/list/0 \
  -H 'Accept: application/json' \
  -H 'User-Agent: ExampleApp/v1.0'
```

`GET /get/list/{page}`

<h3 id="getgetlistpage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|path|number(integer)|true|For reference pagination, the uuid of the last skin in the previous page. For numeric pagination (deprecated), the page number or 'start'.|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|

> Example responses

> 200 Response

```json
{
  "filter": "string",
  "page": {
    "amount": 0,
    "index": 0,
    "total": 0
  },
  "skins": [
    {
      "id": 0,
      "name": "string",
      "time": 0,
      "url": "string"
    }
  ]
}
```

<h3 id="getgetlistpage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Skin Info List|Inline|

<h3 id="getgetlistpage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|none|
|page|object|true|none|none|
|» amount|integer|false|none|none|
|» index|integer|false|none|none|
|» total|integer|false|none|none|
|skins|[[PartialSkinInfo](#schemapartialskininfo)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/get/uuid/{uuid}

> Code samples

```bash
curl https://example.com/get/uuid/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H 'User-Agent: ExampleApp/v1.0'
```

`GET /get/uuid/{uuid}`

<h3 id="getgetuuiduuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string(uuid)|true|none|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|

> Example responses

> 200 Response

```json
{
  "account": 0,
  "accountId": 0,
  "data": {
    "texture": {
      "signature": "string",
      "url": "string",
      "value": "string"
    },
    "uuid": "string"
  },
  "duration": 0,
  "id": 0,
  "idStr": "string",
  "model": "slim",
  "name": "string",
  "private": true,
  "server": "string",
  "timestamp": 0,
  "uuid": "string",
  "variant": "classic",
  "views": 0
}
```

<h3 id="getgetuuiduuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Skin Info|[SkinInfo](#schemaskininfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mineskin-api-util">util</h1>

## get/validate/name/{name}

> Code samples

```bash
curl https://example.com/validate/name/string \
  -H 'Accept: application/json' \
  -H 'User-Agent: ExampleApp/v1.0'
```

`GET /validate/name/{name}`

<h3 id="getvalidatenamename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "uuid": "string",
  "valid": true
}
```

<h3 id="getvalidatenamename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Validation info about the requested user|[UserValidation](#schemauservalidation)|

<aside class="success">
This operation does not require authentication
</aside>

## get/validate/uuid/{uuid}

> Code samples

```bash
curl https://example.com/validate/uuid/string \
  -H 'Accept: application/json' \
  -H 'User-Agent: ExampleApp/v1.0'
```

`GET /validate/uuid/{uuid}`

<h3 id="getvalidateuuiduuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|none|
|User-Agent|header|string|true|Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "uuid": "string",
  "valid": true
}
```

<h3 id="getvalidateuuiduuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Validation info about the requested user|[UserValidation](#schemauservalidation)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GenerateOptions">GenerateOptions</h2>
<!-- backwards compatibility -->
<a id="schemagenerateoptions"></a>
<a id="schema_GenerateOptions"></a>
<a id="tocSgenerateoptions"></a>
<a id="tocsgenerateoptions"></a>

```json
{
  "model": "steve",
  "name": "string",
  "variant": "classic",
  "visibility": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|**Deprecated.**|
|name|string|false|none|none|
|variant|string|false|none|Skin variant - automatically determined based on the image if not specified|
|visibility|integer|false|none|Visibility of the generated skin. 0 for public, 1 for private|

#### Enumerated Values

|Property|Value|
|---|---|
|model|steve|
|model|slim|
|variant|classic|
|variant|slim|
|visibility|0|
|visibility|1|

<h2 id="tocS_PartialSkinInfo">PartialSkinInfo</h2>
<!-- backwards compatibility -->
<a id="schemapartialskininfo"></a>
<a id="schema_PartialSkinInfo"></a>
<a id="tocSpartialskininfo"></a>
<a id="tocspartialskininfo"></a>

```json
{
  "id": 0,
  "name": "string",
  "time": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|name|string|true|none|none|
|time|integer|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_SkinData">SkinData</h2>
<!-- backwards compatibility -->
<a id="schemaskindata"></a>
<a id="schema_SkinData"></a>
<a id="tocSskindata"></a>
<a id="tocsskindata"></a>

```json
{
  "texture": {
    "signature": "string",
    "url": "string",
    "value": "string"
  },
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|texture|[TextureInfo](#schematextureinfo)|false|none|none|
|uuid|string|false|none|none|

<h2 id="tocS_SkinInfo">SkinInfo</h2>
<!-- backwards compatibility -->
<a id="schemaskininfo"></a>
<a id="schema_SkinInfo"></a>
<a id="tocSskininfo"></a>
<a id="tocsskininfo"></a>

```json
{
  "account": 0,
  "accountId": 0,
  "data": {
    "texture": {
      "signature": "string",
      "url": "string",
      "value": "string"
    },
    "uuid": "string"
  },
  "duration": 0,
  "id": 0,
  "idStr": "string",
  "model": "slim",
  "name": "string",
  "private": true,
  "server": "string",
  "timestamp": 0,
  "uuid": "string",
  "variant": "classic",
  "views": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|integer|false|none|none|
|accountId|integer|false|none|**Deprecated.**|
|data|[SkinData](#schemaskindata)|true|none|none|
|duration|number|false|none|none|
|id|integer|true|none|none|
|idStr|string|false|none|none|
|model|string|true|none|**Deprecated.**|
|name|string|false|none|none|
|private|boolean|false|none|none|
|server|string|false|none|none|
|timestamp|number|false|none|none|
|uuid|string|false|none|none|
|variant|string|false|none|none|
|views|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|model|slim|
|model|steve|
|model|unknown|
|variant|classic|
|variant|slim|

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "delay": 0,
  "server": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delay|number|false|none|none|
|server|string|false|none|none|

<h2 id="tocS_TextureInfo">TextureInfo</h2>
<!-- backwards compatibility -->
<a id="schematextureinfo"></a>
<a id="schema_TextureInfo"></a>
<a id="tocStextureinfo"></a>
<a id="tocstextureinfo"></a>

```json
{
  "signature": "string",
  "url": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signature|string|false|none|none|
|url|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_UserValidation">UserValidation</h2>
<!-- backwards compatibility -->
<a id="schemauservalidation"></a>
<a id="schema_UserValidation"></a>
<a id="tocSuservalidation"></a>
<a id="tocsuservalidation"></a>

```json
{
  "name": "string",
  "uuid": "string",
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|uuid|string|false|none|none|
|valid|boolean|true|none|none|
