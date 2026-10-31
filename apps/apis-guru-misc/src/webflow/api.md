<h1 id="lucidtech-api">Lucidtech API v2023-03-01T16:45:37Z</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.lucidtech.ai/v1">https://api.lucidtech.ai/v1</a>

# Authentication

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [https://auth.lucidtech.ai/oauth2/token](https://auth.lucidtech.ai/oauth2/token)

|Scope|Scope Description|
|---|---|
|api.lucidtech.ai/appclients:read|Read permissions|
|api.lucidtech.ai/appclients:write|Write permissions|
|api.lucidtech.ai/assets:read|Read permissions|
|api.lucidtech.ai/assets:write|Write permissions|
|api.lucidtech.ai/databundles:read|Read permissions|
|api.lucidtech.ai/databundles:write|Write permissions|
|api.lucidtech.ai/datasets:read|Read permissions|
|api.lucidtech.ai/datasets:write|Write permissions|
|api.lucidtech.ai/deploymentenvironments:read|Read permissions|
|api.lucidtech.ai/documents:read|Read permissions|
|api.lucidtech.ai/documents:write|Write permissions|
|api.lucidtech.ai/logs:read|Read permissions|
|api.lucidtech.ai/models:read|Read permissions|
|api.lucidtech.ai/models:write|Write permissions|
|api.lucidtech.ai/organizations:read|Read permissions|
|api.lucidtech.ai/organizations:write|Write permissions|
|api.lucidtech.ai/paymentmethods:read|Read permissions|
|api.lucidtech.ai/paymentmethods:write|Write permissions|
|api.lucidtech.ai/plans:read|Read permissions|
|api.lucidtech.ai/predictions:read|Read permissions|
|api.lucidtech.ai/predictions:write|Write permissions|
|api.lucidtech.ai/profiles:read|Read permissions|
|api.lucidtech.ai/profiles:write|Write permissions|
|api.lucidtech.ai/secrets:read|Read permissions|
|api.lucidtech.ai/secrets:write|Write permissions|
|api.lucidtech.ai/trainings:read|Read permissions|
|api.lucidtech.ai/trainings:write|Write permissions|
|api.lucidtech.ai/transitions.executions.heartbeats:write|Write permissions|
|api.lucidtech.ai/transitions.executions:read|Read permissions|
|api.lucidtech.ai/transitions.executions:write|Write permissions|
|api.lucidtech.ai/transitions:read|Read permissions|
|api.lucidtech.ai/transitions:write|Write permissions|
|api.lucidtech.ai/users:read|Read permissions|
|api.lucidtech.ai/users:write|Write permissions|
|api.lucidtech.ai/workflows.executions:read|Read permissions|
|api.lucidtech.ai/workflows.executions:write|Write permissions|
|api.lucidtech.ai/workflows:read|Read permissions|
|api.lucidtech.ai/workflows:write|Write permissions|

<h1 id="lucidtech-api-default">Default</h1>

## get/appClients

> Code samples

```bash
curl https://example.com/appClients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /appClients`

<h3 id="getappclients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "appClients": [
    {
      "appClientId": "string",
      "callbackUrls": [
        "string"
      ],
      "clientId": "string",
      "clientSecret": "string",
      "createdBy": "string",
      "createdTime": "string",
      "defaultLoginUrl": "string",
      "description": "string",
      "hasSecret": true,
      "loginUrls": [
        "string"
      ],
      "logoutUrls": [
        "string"
      ],
      "name": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getappclients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[AppClients](#schemaappclients)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/appclients:read )
</aside>

## post/appClients

> Code samples

```bash
curl https://example.com/appClients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "callbackUrls": [
      "string"
    ],
    "defaultLoginUrl": "string",
    "description": "string",
    "generateSecret": true,
    "loginUrls": [
      "string"
    ],
    "logoutUrls": [
      "string"
    ],
    "name": "string"
  }'
```

`POST /appClients`

> Body parameter

```json
{
  "callbackUrls": [
    "string"
  ],
  "defaultLoginUrl": "string",
  "description": "string",
  "generateSecret": true,
  "loginUrls": [
    "string"
  ],
  "logoutUrls": [
    "string"
  ],
  "name": "string"
}
```

<h3 id="postappclients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostAppClients](#schemapostappclients)|true|none|
|» callbackUrls|body|[string]|false|none|
|» defaultLoginUrl|body|string|false|none|
|» description|body|string \| null|false|none|
|» generateSecret|body|boolean|false|none|
|» loginUrls|body|[string]|false|none|
|» logoutUrls|body|[string]|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "appClientId": "string",
  "callbackUrls": [
    "string"
  ],
  "clientId": "string",
  "clientSecret": "string",
  "createdBy": "string",
  "createdTime": "string",
  "defaultLoginUrl": "string",
  "description": "string",
  "hasSecret": true,
  "loginUrls": [
    "string"
  ],
  "logoutUrls": [
    "string"
  ],
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postappclients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[AppClient](#schemaappclient)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/appclients:write )
</aside>

## options/appClients

> Code samples

```bash
curl https://example.com/appClients \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /appClients`

> Body parameter

```json
{}
```

<h3 id="optionsappclients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsappclients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## delete/appClients/{appClientId}

> Code samples

```bash
curl https://example.com/appClients/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /appClients/{appClientId}`

<h3 id="deleteappclientsappclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appClientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "appClientId": "string",
  "callbackUrls": [
    "string"
  ],
  "clientId": "string",
  "clientSecret": "string",
  "createdBy": "string",
  "createdTime": "string",
  "defaultLoginUrl": "string",
  "description": "string",
  "hasSecret": true,
  "loginUrls": [
    "string"
  ],
  "logoutUrls": [
    "string"
  ],
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteappclientsappclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[AppClient](#schemaappclient)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options/appClients/{appClientId}

> Code samples

```bash
curl https://example.com/appClients/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /appClients/{appClientId}`

> Body parameter

```json
{}
```

<h3 id="optionsappclientsappclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appClientId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsappclientsappclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/appClients/{appClientId}

> Code samples

```bash
curl https://example.com/appClients/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultLoginUrl": "string",
    "description": "string",
    "loginUrls": [
      "string"
    ],
    "name": "string"
  }'
```

`PATCH /appClients/{appClientId}`

> Body parameter

```json
{
  "defaultLoginUrl": "string",
  "description": "string",
  "loginUrls": [
    "string"
  ],
  "name": "string"
}
```

<h3 id="patchappclientsappclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appClientId|path|string|true|none|
|Content-Type|header|string|true|none|
|body|body|[PatchAppClientId](#schemapatchappclientid)|true|none|
|» defaultLoginUrl|body|string|false|none|
|» description|body|string \| null|false|none|
|» loginUrls|body|[string]|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "appClientId": "string",
  "callbackUrls": [
    "string"
  ],
  "clientId": "string",
  "clientSecret": "string",
  "createdBy": "string",
  "createdTime": "string",
  "defaultLoginUrl": "string",
  "description": "string",
  "hasSecret": true,
  "loginUrls": [
    "string"
  ],
  "logoutUrls": [
    "string"
  ],
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchappclientsappclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[AppClient](#schemaappclient)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/appclients:write )
</aside>

## get/assets

> Code samples

```bash
curl https://example.com/assets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /assets`

<h3 id="getassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetId": "string",
      "content": "string",
      "contentMD5": "string",
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "name": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Assets](#schemaassets)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/assets:read )
</aside>

## post/assets

> Code samples

```bash
curl https://example.com/assets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content": "string",
    "description": "string",
    "name": "string"
  }'
```

`POST /assets`

> Body parameter

```json
{
  "content": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="postassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostAssets](#schemapostassets)|true|none|
|» content|body|string|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "content": "string",
  "contentMD5": "string",
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Asset](#schemaasset)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/assets:write )
</aside>

## options/assets

> Code samples

```bash
curl https://example.com/assets \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /assets`

> Body parameter

```json
{}
```

<h3 id="optionsassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/assets/{assetId}

> Code samples

```bash
curl https://example.com/assets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /assets/{assetId}`

<h3 id="getassetsassetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "content": "string",
  "contentMD5": "string",
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getassetsassetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Asset](#schemaasset)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/assets:read )
</aside>

## delete/assets/{assetId}

> Code samples

```bash
curl https://example.com/assets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /assets/{assetId}`

<h3 id="deleteassetsassetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "content": "string",
  "contentMD5": "string",
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteassetsassetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Asset](#schemaasset)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/assets:read )
</aside>

## options/assets/{assetId}

> Code samples

```bash
curl https://example.com/assets/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /assets/{assetId}`

> Body parameter

```json
{}
```

<h3 id="optionsassetsassetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsassetsassetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/assets/{assetId}

> Code samples

```bash
curl https://example.com/assets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content": "string",
    "description": "string",
    "name": "string"
  }'
```

`PATCH /assets/{assetId}`

> Body parameter

```json
{
  "content": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="patchassetsassetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|assetId|path|string|true|none|
|body|body|[PatchAssetId](#schemapatchassetid)|true|none|
|» content|body|string|false|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "content": "string",
  "contentMD5": "string",
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchassetsassetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Asset](#schemaasset)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/assets:write )
</aside>

## get/datasets

> Code samples

```bash
curl https://example.com/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /datasets`

<h3 id="getdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "datasets": [
    {
      "containsPersonallyIdentifiableInformation": true,
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "groundTruthSummary": {},
      "metadata": {},
      "name": "string",
      "numberOfDocuments": 0,
      "retentionInDays": 0,
      "storageLocation": "EU",
      "updatedBy": "string",
      "updatedTime": "string",
      "version": 0
    }
  ],
  "nextToken": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Datasets](#schemadatasets)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/datasets:read )
</aside>

## post/datasets

> Code samples

```bash
curl https://example.com/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "containsPersonallyIdentifiableInformation": true,
    "description": "string",
    "metadata": {},
    "name": "string",
    "retentionInDays": 1
  }'
```

`POST /datasets`

> Body parameter

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "description": "string",
  "metadata": {},
  "name": "string",
  "retentionInDays": 1
}
```

<h3 id="postdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostDatasets](#schemapostdatasets)|true|none|
|» containsPersonallyIdentifiableInformation|body|boolean|false|none|
|» description|body|string \| null|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» retentionInDays|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "groundTruthSummary": {},
  "metadata": {},
  "name": "string",
  "numberOfDocuments": 0,
  "retentionInDays": 0,
  "storageLocation": "EU",
  "updatedBy": "string",
  "updatedTime": "string",
  "version": 0
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Dataset](#schemadataset)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/datasets:write )
</aside>

## options/datasets

> Code samples

```bash
curl https://example.com/datasets \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /datasets`

> Body parameter

```json
{}
```

<h3 id="optionsdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/datasets/{datasetId}

> Code samples

```bash
curl https://example.com/datasets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /datasets/{datasetId}`

<h3 id="getdatasetsdatasetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "groundTruthSummary": {},
  "metadata": {},
  "name": "string",
  "numberOfDocuments": 0,
  "retentionInDays": 0,
  "storageLocation": "EU",
  "updatedBy": "string",
  "updatedTime": "string",
  "version": 0
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatasetsdatasetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Dataset](#schemadataset)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/datasets:read )
</aside>

## delete/datasets/{datasetId}

> Code samples

```bash
curl https://example.com/datasets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /datasets/{datasetId}`

<h3 id="deletedatasetsdatasetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "groundTruthSummary": {},
  "metadata": {},
  "name": "string",
  "numberOfDocuments": 0,
  "retentionInDays": 0,
  "storageLocation": "EU",
  "updatedBy": "string",
  "updatedTime": "string",
  "version": 0
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedatasetsdatasetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Dataset](#schemadataset)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/datasets:read )
</aside>

## options/datasets/{datasetId}

> Code samples

```bash
curl https://example.com/datasets/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /datasets/{datasetId}`

> Body parameter

```json
{}
```

<h3 id="optionsdatasetsdatasetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsdatasetsdatasetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/datasets/{datasetId}

> Code samples

```bash
curl https://example.com/datasets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "containsPersonallyIdentifiableInformation": true,
    "description": "string",
    "metadata": {},
    "name": "string",
    "retentionInDays": 1
  }'
```

`PATCH /datasets/{datasetId}`

> Body parameter

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "description": "string",
  "metadata": {},
  "name": "string",
  "retentionInDays": 1
}
```

<h3 id="patchdatasetsdatasetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|datasetId|path|string|true|none|
|body|body|[PatchDatasetId](#schemapatchdatasetid)|true|none|
|» containsPersonallyIdentifiableInformation|body|boolean|false|none|
|» description|body|string \| null|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» retentionInDays|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "groundTruthSummary": {},
  "metadata": {},
  "name": "string",
  "numberOfDocuments": 0,
  "retentionInDays": 0,
  "storageLocation": "EU",
  "updatedBy": "string",
  "updatedTime": "string",
  "version": 0
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchdatasetsdatasetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Dataset](#schemadataset)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/datasets:write )
</aside>

## get/deploymentEnvironments

> Code samples

```bash
curl https://example.com/deploymentEnvironments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentEnvironments`

<h3 id="getdeploymentenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|owner|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "deploymentEnvironments": [
    {
      "deploymentEnvironmentId": "string",
      "description": "string",
      "modelDeploymentUnits": 0,
      "name": "string",
      "organizationId": "string",
      "status": "available"
    }
  ],
  "nextToken": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdeploymentenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[DeploymentEnvironments](#schemadeploymentenvironments)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/secrets:read )
</aside>

## options/deploymentEnvironments

> Code samples

```bash
curl https://example.com/deploymentEnvironments \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /deploymentEnvironments`

> Body parameter

```json
{}
```

<h3 id="optionsdeploymentenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsdeploymentenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/deploymentEnvironments/{deploymentEnvironmentId}

> Code samples

```bash
curl https://example.com/deploymentEnvironments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentEnvironments/{deploymentEnvironmentId}`

<h3 id="getdeploymentenvironmentsdeploymentenvironmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentEnvironmentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "deploymentEnvironmentId": "string",
  "description": "string",
  "modelDeploymentUnits": 0,
  "name": "string",
  "organizationId": "string",
  "status": "available"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdeploymentenvironmentsdeploymentenvironmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[DeploymentEnvironment](#schemadeploymentenvironment)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/organizations:read )
</aside>

## options/deploymentEnvironments/{deploymentEnvironmentId}

> Code samples

```bash
curl https://example.com/deploymentEnvironments/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /deploymentEnvironments/{deploymentEnvironmentId}`

> Body parameter

```json
{}
```

<h3 id="optionsdeploymentenvironmentsdeploymentenvironmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentEnvironmentId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsdeploymentenvironmentsdeploymentenvironmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/documents

> Code samples

```bash
curl https://example.com/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents`

<h3 id="getdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|query|string|false|none|
|nextToken|query|string|false|none|
|order|query|string|false|none|
|documentId|query|string|false|none|
|consentId|query|string|false|none|
|maxResults|query|string|false|none|
|sortBy|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "consentId": [
    "string"
  ],
  "datasetId": [
    "string"
  ],
  "documents": [
    {
      "consentId": "string",
      "content": "string",
      "contentMD5": "string",
      "contentType": "application/pdf",
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "documentId": "string",
      "groundTruth": [
        {
          "label": "string",
          "value": "string"
        }
      ],
      "metadata": {},
      "name": "string",
      "retentionInDays": 1,
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string",
  "order": "ascending",
  "sortBy": "createdTime"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Documents](#schemadocuments)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/documents:read )
</aside>

## post/documents

> Code samples

```bash
curl https://example.com/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consentId": "string",
    "content": "string",
    "contentType": "application/pdf",
    "datasetId": "string",
    "description": "string",
    "groundTruth": [
      {
        "label": "string",
        "value": "string"
      }
    ],
    "metadata": {},
    "name": "string",
    "retentionInDays": 1
  }'
```

`POST /documents`

> Body parameter

```json
{
  "consentId": "string",
  "content": "string",
  "contentType": "application/pdf",
  "datasetId": "string",
  "description": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1
}
```

<h3 id="postdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostDocuments](#schemapostdocuments)|true|none|
|» consentId|body|string|false|none|
|» content|body|string|true|none|
|» contentType|body|string \| null|true|none|
|» datasetId|body|string|false|none|
|» description|body|string \| null|false|none|
|» groundTruth|body|[object]|false|none|
|» » label|body|string|true|none|
|» » value|body|string \| null \| boolean \| null \| number \| null \| [groundTruthList](#schemagroundtruthlist)|true|none|
|» » » *anyOf*|body|string \| null|false|none|
|» » » *anyOf*|body|boolean \| null|false|none|
|» » » *anyOf*|body|number \| null|false|none|
|» » » *anyOf*|body|[groundTruthList](#schemagroundtruthlist)|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» retentionInDays|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contentType|application/pdf|
|» contentType|image/jpeg|
|» contentType|image/png|
|» contentType|image/tiff|

> Example responses

> 200 Response

```json
{
  "consentId": "string",
  "content": "string",
  "contentMD5": "string",
  "contentType": "application/pdf",
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "documentId": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1,
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Document](#schemadocument)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/documents:write )
</aside>

## delete/documents

> Code samples

```bash
curl https://example.com/documents \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /documents`

<h3 id="deletedocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consentId|query|string|false|none|
|datasetId|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "consentId": [
    "string"
  ],
  "datasetId": [
    "string"
  ],
  "documents": [
    {
      "consentId": "string",
      "content": "string",
      "contentMD5": "string",
      "contentType": "application/pdf",
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "documentId": "string",
      "groundTruth": [
        {
          "label": "string",
          "value": "string"
        }
      ],
      "metadata": {},
      "name": "string",
      "retentionInDays": 1,
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string",
  "order": "ascending",
  "sortBy": "createdTime"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Documents](#schemadocuments)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/documents:write )
</aside>

## options/documents

> Code samples

```bash
curl https://example.com/documents \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /documents`

> Body parameter

```json
{}
```

<h3 id="optionsdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/documents/{documentId}

> Code samples

```bash
curl https://example.com/documents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents/{documentId}`

<h3 id="getdocumentsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "consentId": "string",
  "content": "string",
  "contentMD5": "string",
  "contentType": "application/pdf",
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "documentId": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1,
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdocumentsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Document](#schemadocument)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/documents:read )
</aside>

## delete/documents/{documentId}

> Code samples

```bash
curl https://example.com/documents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /documents/{documentId}`

<h3 id="deletedocumentsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "consentId": "string",
  "content": "string",
  "contentMD5": "string",
  "contentType": "application/pdf",
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "documentId": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1,
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedocumentsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Document](#schemadocument)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/documents:read )
</aside>

## options/documents/{documentId}

> Code samples

```bash
curl https://example.com/documents/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /documents/{documentId}`

> Body parameter

```json
{}
```

<h3 id="optionsdocumentsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsdocumentsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/documents/{documentId}

> Code samples

```bash
curl https://example.com/documents/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "datasetId": "string",
    "description": "string",
    "groundTruth": [
      {
        "label": "string",
        "value": "string"
      }
    ],
    "metadata": {},
    "name": "string",
    "retentionInDays": 1
  }'
```

`PATCH /documents/{documentId}`

> Body parameter

```json
{
  "datasetId": "string",
  "description": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1
}
```

<h3 id="patchdocumentsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|documentId|path|string|true|none|
|body|body|[PatchDocumentId](#schemapatchdocumentid)|true|none|
|» datasetId|body|string|false|none|
|» description|body|string \| null|false|none|
|» groundTruth|body|[object]|false|none|
|» » label|body|string|true|none|
|» » value|body|string \| null \| boolean \| null \| number \| null \| [groundTruthList](#schemagroundtruthlist)|true|none|
|» » » *anyOf*|body|string \| null|false|none|
|» » » *anyOf*|body|boolean \| null|false|none|
|» » » *anyOf*|body|number \| null|false|none|
|» » » *anyOf*|body|[groundTruthList](#schemagroundtruthlist)|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» retentionInDays|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "consentId": "string",
  "content": "string",
  "contentMD5": "string",
  "contentType": "application/pdf",
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "documentId": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1,
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchdocumentsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Document](#schemadocument)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/documents:write )
</aside>

## get/logs

> Code samples

```bash
curl https://example.com/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /logs`

<h3 id="getlogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowId|query|string|false|none|
|nextToken|query|string|false|none|
|order|query|string|false|none|
|transitionExecutionId|query|string|false|none|
|transitionId|query|string|false|none|
|maxResults|query|string|false|none|
|workflowExecutionId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "logs": [
    {
      "events": [
        {}
      ],
      "logId": "string",
      "startTime": "string",
      "transitionExecutionId": "string",
      "transitionId": "string",
      "workflowExecutionId": "string",
      "workflowId": "string"
    }
  ],
  "nextToken": "string",
  "order": "ascending",
  "transitionExecutionId": "string",
  "transitionId": "string",
  "workflowExecutionId": "string",
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getlogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Logs](#schemalogs)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/logs:read )
</aside>

## options/logs

> Code samples

```bash
curl https://example.com/logs \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /logs`

> Body parameter

```json
{}
```

<h3 id="optionslogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionslogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs/{logId}

> Code samples

```bash
curl https://example.com/logs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /logs/{logId}`

<h3 id="getlogslogid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "events": [
    {}
  ],
  "logId": "string",
  "startTime": "string",
  "transitionExecutionId": "string",
  "transitionId": "string",
  "workflowExecutionId": "string",
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getlogslogid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Log](#schemalog)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/logs:read )
</aside>

## options/logs/{logId}

> Code samples

```bash
curl https://example.com/logs/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /logs/{logId}`

> Body parameter

```json
{}
```

<h3 id="optionslogslogid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionslogslogid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/models

> Code samples

```bash
curl https://example.com/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models`

<h3 id="getmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|owner|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "models": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "fieldConfig": {
        "property1": {
          "description": "string",
          "enum": [
            "string"
          ],
          "maxLength": 1,
          "type": "amount"
        },
        "property2": {
          "description": "string",
          "enum": [
            "string"
          ],
          "maxLength": 1,
          "type": "amount"
        }
      },
      "height": 97,
      "metadata": {},
      "modelId": "string",
      "name": "string",
      "numberOfDataBundles": 0,
      "numberOfRunningTrainings": 0,
      "organizationId": "string",
      "postprocessConfig": {
        "strategy": "BEST_FIRST"
      },
      "preprocessConfig": {
        "autoRotate": true,
        "imageQuality": "LOW",
        "maxPages": 1
      },
      "status": "active",
      "trainingId": "string",
      "updatedBy": "string",
      "updatedTime": "string",
      "width": 97
    }
  ],
  "nextToken": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Models](#schemamodels)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/models:read )
</aside>

## post/models

> Code samples

```bash
curl https://example.com/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "fieldConfig": {
      "property1": {
        "description": "string",
        "enum": [
          "string"
        ],
        "maxLength": 1,
        "type": "amount"
      },
      "property2": {
        "description": "string",
        "enum": [
          "string"
        ],
        "maxLength": 1,
        "type": "amount"
      }
    },
    "height": 97,
    "metadata": {},
    "name": "string",
    "postprocessConfig": {
      "strategy": "BEST_FIRST"
    },
    "preprocessConfig": {
      "autoRotate": true,
      "imageQuality": "LOW",
      "maxPages": 1
    },
    "width": 97
  }'
```

`POST /models`

> Body parameter

```json
{
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "name": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "width": 97
}
```

<h3 id="postmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostModels](#schemapostmodels)|true|none|
|» description|body|string \| null|false|none|
|» fieldConfig|body|object|true|none|
|» » **additionalProperties**|body|object|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » description|body|string \| null|false|none|
|» » » enum|body|[string]|false|none|
|» » » maxLength|body|integer|false|none|
|» » » type|body|string|true|none|
|» » » *oneOf*|body|object|false|none|
|» » » fields|body|object|true|none|
|» » » » **additionalProperties**|body|object|false|none|
|» » » » » description|body|string \| null|false|none|
|» » » » » enum|body|[string]|false|none|
|» » » » » maxLength|body|integer|false|none|
|» » » » » type|body|string|true|none|
|» » » type|body|string|true|none|
|» height|body|integer|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» postprocessConfig|body|object|false|none|
|» » *oneOf*|body|object|false|none|
|» » strategy|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » parameters|body|object|true|none|
|» » » collapse|body|boolean|false|none|
|» » » n|body|integer|true|none|
|» » strategy|body|string|true|none|
|» preprocessConfig|body|object|false|none|
|» » autoRotate|body|boolean|true|none|
|» » imageQuality|body|string|true|none|
|» » maxPages|body|integer|true|none|
|» width|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|amount|
|» » » type|date|
|» » » type|digits|
|» » » type|enum|
|» » » type|numeric|
|» » » type|string|
|» » » » » type|amount|
|» » » » » type|date|
|» » » » » type|digits|
|» » » » » type|enum|
|» » » » » type|numeric|
|» » » » » type|string|
|» » » type|lines|
|» » strategy|BEST_FIRST|
|» » strategy|BEST_N_PAGES|
|» » imageQuality|LOW|
|» » imageQuality|HIGH|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "modelId": "string",
  "name": "string",
  "numberOfDataBundles": 0,
  "numberOfRunningTrainings": 0,
  "organizationId": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "status": "active",
  "trainingId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "width": 97
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Model](#schemamodel)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/models:write )
</aside>

## options/models

> Code samples

```bash
curl https://example.com/models \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /models`

> Body parameter

```json
{}
```

<h3 id="optionsmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/models/{modelId}

> Code samples

```bash
curl https://example.com/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models/{modelId}`

<h3 id="getmodelsmodelid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "modelId": "string",
  "name": "string",
  "numberOfDataBundles": 0,
  "numberOfRunningTrainings": 0,
  "organizationId": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "status": "active",
  "trainingId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "width": 97
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getmodelsmodelid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Model](#schemamodel)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/models:read )
</aside>

## delete/models/{modelId}

> Code samples

```bash
curl https://example.com/models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /models/{modelId}`

<h3 id="deletemodelsmodelid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "modelId": "string",
  "name": "string",
  "numberOfDataBundles": 0,
  "numberOfRunningTrainings": 0,
  "organizationId": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "status": "active",
  "trainingId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "width": 97
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletemodelsmodelid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Model](#schemamodel)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/models:read )
</aside>

## options/models/{modelId}

> Code samples

```bash
curl https://example.com/models/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /models/{modelId}`

> Body parameter

```json
{}
```

<h3 id="optionsmodelsmodelid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsmodelsmodelid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/models/{modelId}

> Code samples

```bash
curl https://example.com/models/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "fieldConfig": {
      "property1": {
        "description": "string",
        "enum": [
          "string"
        ],
        "maxLength": 1,
        "type": "amount"
      },
      "property2": {
        "description": "string",
        "enum": [
          "string"
        ],
        "maxLength": 1,
        "type": "amount"
      }
    },
    "height": 97,
    "metadata": {},
    "name": "string",
    "postprocessConfig": {
      "strategy": "BEST_FIRST"
    },
    "preprocessConfig": {
      "autoRotate": true,
      "imageQuality": "LOW",
      "maxPages": 1
    },
    "trainingId": "string",
    "width": 97
  }'
```

`PATCH /models/{modelId}`

> Body parameter

```json
{
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "name": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "trainingId": "string",
  "width": 97
}
```

<h3 id="patchmodelsmodelid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|modelId|path|string|true|none|
|body|body|[PatchModelId](#schemapatchmodelid)|true|none|
|» description|body|string \| null|false|none|
|» fieldConfig|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » description|body|string \| null|false|none|
|» » » enum|body|[string]|false|none|
|» » » maxLength|body|integer|false|none|
|» » » type|body|string|true|none|
|» » » *oneOf*|body|object|false|none|
|» » » fields|body|object|true|none|
|» » » » **additionalProperties**|body|object|false|none|
|» » » » » description|body|string \| null|false|none|
|» » » » » enum|body|[string]|false|none|
|» » » » » maxLength|body|integer|false|none|
|» » » » » type|body|string|true|none|
|» » » type|body|string|true|none|
|» height|body|integer|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» postprocessConfig|body|object|false|none|
|» » *oneOf*|body|object|false|none|
|» » strategy|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » parameters|body|object|true|none|
|» » » collapse|body|boolean|false|none|
|» » » n|body|integer|true|none|
|» » strategy|body|string|true|none|
|» preprocessConfig|body|object|false|none|
|» » autoRotate|body|boolean|true|none|
|» » imageQuality|body|string|true|none|
|» » maxPages|body|integer|true|none|
|» trainingId|body|string \| null|false|none|
|» width|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|amount|
|» » » type|date|
|» » » type|digits|
|» » » type|enum|
|» » » type|numeric|
|» » » type|string|
|» » » » » type|amount|
|» » » » » type|date|
|» » » » » type|digits|
|» » » » » type|enum|
|» » » » » type|numeric|
|» » » » » type|string|
|» » » type|lines|
|» » strategy|BEST_FIRST|
|» » strategy|BEST_N_PAGES|
|» » imageQuality|LOW|
|» » imageQuality|HIGH|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "modelId": "string",
  "name": "string",
  "numberOfDataBundles": 0,
  "numberOfRunningTrainings": 0,
  "organizationId": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "status": "active",
  "trainingId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "width": 97
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchmodelsmodelid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Model](#schemamodel)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/models:write )
</aside>

## get/models/{modelId}/dataBundles

> Code samples

```bash
curl https://example.com/models/string/dataBundles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models/{modelId}/dataBundles`

<h3 id="getmodelsmodeliddatabundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|
|status|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "dataBundles": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "dataBundleId": "string",
      "datasets": [
        {
          "containsPersonallyIdentifiableInformation": true,
          "createdBy": "string",
          "createdTime": "string",
          "datasetId": "string",
          "description": "string",
          "groundTruthSummary": {},
          "metadata": {},
          "name": "string",
          "numberOfDocuments": 0,
          "retentionInDays": 0,
          "storageLocation": "EU",
          "updatedBy": "string",
          "updatedTime": "string",
          "version": 0
        }
      ],
      "description": "string",
      "modelId": "string",
      "name": "string",
      "retentionInDays": 1,
      "status": "running",
      "summary": {},
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string",
  "status": [
    "running"
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getmodelsmodeliddatabundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[DataBundles](#schemadatabundles)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/databundles:read )
</aside>

## post/models/{modelId}/dataBundles

> Code samples

```bash
curl https://example.com/models/string/dataBundles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "datasetIds": [
      "string"
    ],
    "description": "string",
    "name": "string"
  }'
```

`POST /models/{modelId}/dataBundles`

> Body parameter

```json
{
  "datasetIds": [
    "string"
  ],
  "description": "string",
  "name": "string"
}
```

<h3 id="postmodelsmodeliddatabundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|modelId|path|string|true|none|
|body|body|[PostDataBundles](#schemapostdatabundles)|true|none|
|» datasetIds|body|[string]|false|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "dataBundleId": "string",
  "datasets": [
    {
      "containsPersonallyIdentifiableInformation": true,
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "groundTruthSummary": {},
      "metadata": {},
      "name": "string",
      "numberOfDocuments": 0,
      "retentionInDays": 0,
      "storageLocation": "EU",
      "updatedBy": "string",
      "updatedTime": "string",
      "version": 0
    }
  ],
  "description": "string",
  "modelId": "string",
  "name": "string",
  "retentionInDays": 1,
  "status": "running",
  "summary": {},
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postmodelsmodeliddatabundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[DataBundle](#schemadatabundle)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/databundles:write )
</aside>

## options/models/{modelId}/dataBundles

> Code samples

```bash
curl https://example.com/models/string/dataBundles \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /models/{modelId}/dataBundles`

> Body parameter

```json
{}
```

<h3 id="optionsmodelsmodeliddatabundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsmodelsmodeliddatabundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## delete/models/{modelId}/dataBundles/{dataBundleId}

> Code samples

```bash
curl https://example.com/models/string/dataBundles/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /models/{modelId}/dataBundles/{dataBundleId}`

<h3 id="deletemodelsmodeliddatabundlesdatabundleid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataBundleId|path|string|true|none|
|modelId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "dataBundleId": "string",
  "datasets": [
    {
      "containsPersonallyIdentifiableInformation": true,
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "groundTruthSummary": {},
      "metadata": {},
      "name": "string",
      "numberOfDocuments": 0,
      "retentionInDays": 0,
      "storageLocation": "EU",
      "updatedBy": "string",
      "updatedTime": "string",
      "version": 0
    }
  ],
  "description": "string",
  "modelId": "string",
  "name": "string",
  "retentionInDays": 1,
  "status": "running",
  "summary": {},
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletemodelsmodeliddatabundlesdatabundleid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[DataBundle](#schemadatabundle)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options/models/{modelId}/dataBundles/{dataBundleId}

> Code samples

```bash
curl https://example.com/models/string/dataBundles/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /models/{modelId}/dataBundles/{dataBundleId}`

> Body parameter

```json
{}
```

<h3 id="optionsmodelsmodeliddatabundlesdatabundleid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataBundleId|path|string|true|none|
|modelId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsmodelsmodeliddatabundlesdatabundleid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/models/{modelId}/dataBundles/{dataBundleId}

> Code samples

```bash
curl https://example.com/models/string/dataBundles/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`PATCH /models/{modelId}/dataBundles/{dataBundleId}`

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="patchmodelsmodeliddatabundlesdatabundleid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataBundleId|path|string|true|none|
|Content-Type|header|string|true|none|
|modelId|path|string|true|none|
|body|body|[PatchDataBundleId](#schemapatchdatabundleid)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "dataBundleId": "string",
  "datasets": [
    {
      "containsPersonallyIdentifiableInformation": true,
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "groundTruthSummary": {},
      "metadata": {},
      "name": "string",
      "numberOfDocuments": 0,
      "retentionInDays": 0,
      "storageLocation": "EU",
      "updatedBy": "string",
      "updatedTime": "string",
      "version": 0
    }
  ],
  "description": "string",
  "modelId": "string",
  "name": "string",
  "retentionInDays": 1,
  "status": "running",
  "summary": {},
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchmodelsmodeliddatabundlesdatabundleid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[DataBundle](#schemadatabundle)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/databundles:write )
</aside>

## get/models/{modelId}/trainings

> Code samples

```bash
curl https://example.com/models/string/trainings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /models/{modelId}/trainings`

<h3 id="getmodelsmodelidtrainings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|
|status|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "status": [
    "waiting-for-approval"
  ],
  "trainings": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "dataBundleIds": [
        "string"
      ],
      "dataScientistAssistance": true,
      "deploymentEnvironmentId": "string",
      "description": "string",
      "evaluation": {},
      "gpuHours": 0,
      "instanceType": "small-gpu",
      "metadata": {},
      "modelId": "string",
      "name": "string",
      "status": "waiting-for-approval",
      "trainingId": "string",
      "updatedBy": "string",
      "updatedTime": "string",
      "warmStartConfig": {
        "trainingId": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getmodelsmodelidtrainings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Trainings](#schematrainings)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows.executions:read )
</aside>

## post/models/{modelId}/trainings

> Code samples

```bash
curl https://example.com/models/string/trainings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataBundleIds": [
      "string"
    ],
    "dataScientistAssistance": true,
    "description": "string",
    "instanceType": "small-gpu",
    "metadata": {},
    "name": "string",
    "warmStartConfig": {
      "trainingId": "string"
    }
  }'
```

`POST /models/{modelId}/trainings`

> Body parameter

```json
{
  "dataBundleIds": [
    "string"
  ],
  "dataScientistAssistance": true,
  "description": "string",
  "instanceType": "small-gpu",
  "metadata": {},
  "name": "string",
  "warmStartConfig": {
    "trainingId": "string"
  }
}
```

<h3 id="postmodelsmodelidtrainings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|modelId|path|string|true|none|
|body|body|[PostTrainings](#schemaposttrainings)|true|none|
|» dataBundleIds|body|[string]|false|none|
|» dataScientistAssistance|body|boolean|false|none|
|» description|body|string \| null|false|none|
|» instanceType|body|string \| null|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» warmStartConfig|body|object|false|none|
|» » trainingId|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» instanceType|small-gpu|
|» instanceType|medium-gpu|
|» instanceType|large-gpu|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "dataBundleIds": [
    "string"
  ],
  "dataScientistAssistance": true,
  "deploymentEnvironmentId": "string",
  "description": "string",
  "evaluation": {},
  "gpuHours": 0,
  "instanceType": "small-gpu",
  "metadata": {},
  "modelId": "string",
  "name": "string",
  "status": "waiting-for-approval",
  "trainingId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "warmStartConfig": {
    "trainingId": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postmodelsmodelidtrainings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Training](#schematraining)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows.executions:write )
</aside>

## options/models/{modelId}/trainings

> Code samples

```bash
curl https://example.com/models/string/trainings \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /models/{modelId}/trainings`

> Body parameter

```json
{}
```

<h3 id="optionsmodelsmodelidtrainings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsmodelsmodelidtrainings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options/models/{modelId}/trainings/{trainingId}

> Code samples

```bash
curl https://example.com/models/string/trainings/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /models/{modelId}/trainings/{trainingId}`

> Body parameter

```json
{}
```

<h3 id="optionsmodelsmodelidtrainingstrainingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|
|trainingId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsmodelsmodelidtrainingstrainingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/models/{modelId}/trainings/{trainingId}

> Code samples

```bash
curl https://example.com/models/string/trainings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deploymentEnvironmentId": "string",
    "description": "string",
    "metadata": {},
    "name": "string",
    "status": "cancelled"
  }'
```

`PATCH /models/{modelId}/trainings/{trainingId}`

> Body parameter

```json
{
  "deploymentEnvironmentId": "string",
  "description": "string",
  "metadata": {},
  "name": "string",
  "status": "cancelled"
}
```

<h3 id="patchmodelsmodelidtrainingstrainingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|modelId|path|string|true|none|
|trainingId|path|string|true|none|
|body|body|[PatchTrainingId](#schemapatchtrainingid)|true|none|
|» deploymentEnvironmentId|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|cancelled|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "dataBundleIds": [
    "string"
  ],
  "dataScientistAssistance": true,
  "deploymentEnvironmentId": "string",
  "description": "string",
  "evaluation": {},
  "gpuHours": 0,
  "instanceType": "small-gpu",
  "metadata": {},
  "modelId": "string",
  "name": "string",
  "status": "waiting-for-approval",
  "trainingId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "warmStartConfig": {
    "trainingId": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchmodelsmodelidtrainingstrainingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Training](#schematraining)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/predictions:write )
</aside>

## get/organizations

> Code samples

```bash
curl https://example.com/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations`

<h3 id="getorganizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "organizations": [
    {
      "clientId": "string",
      "deploymentsAllowed": {},
      "deploymentsCreated": {},
      "description": "string",
      "documentRetentionInDays": 1,
      "monthlyNumberOfActiveModelsUsed": 0,
      "monthlyNumberOfDataBundlesAllowed": 0,
      "monthlyNumberOfDataBundlesCreated": 0,
      "monthlyNumberOfDocumentsAllowed": 0,
      "monthlyNumberOfDocumentsCreated": 0,
      "monthlyNumberOfFieldPredictionsUsed": 0,
      "monthlyNumberOfGpuHoursUsed": 0,
      "monthlyNumberOfModelDeploymentUnitsUsed": 0,
      "monthlyNumberOfPredictionsAllowed": 0,
      "monthlyNumberOfPredictionsCreated": 0,
      "monthlyNumberOfTrainingsAllowed": 0,
      "monthlyNumberOfTrainingsCreated": 0,
      "monthlyNumberOfTransitionExecutionsAllowed": 0,
      "monthlyNumberOfTransitionExecutionsCreated": 0,
      "monthlyNumberOfWorkflowExecutionsAllowed": 0,
      "monthlyNumberOfWorkflowExecutionsCreated": 0,
      "monthlyUsageSummary": {},
      "name": "string",
      "numberOfAppClientsAllowed": 0,
      "numberOfAppClientsCreated": 0,
      "numberOfAssetsAllowed": 0,
      "numberOfAssetsCreated": 0,
      "numberOfDatasetsAllowed": 0,
      "numberOfDatasetsCreated": 0,
      "numberOfModelsAllowed": 0,
      "numberOfModelsCreated": 0,
      "numberOfSecretsAllowed": 0,
      "numberOfSecretsCreated": 0,
      "numberOfTransitionsAllowed": 0,
      "numberOfTransitionsCreated": 0,
      "numberOfUsersAllowed": 0,
      "numberOfUsersCreated": 0,
      "numberOfWorkflowsAllowed": 0,
      "numberOfWorkflowsCreated": 0,
      "organizationId": "string",
      "paymentMethodId": "string",
      "planId": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Organizations](#schemaorganizations)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/organizations:read )
</aside>

## post/organizations

> Code samples

```bash
curl https://example.com/organizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /organizations`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="postorganizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostOrganizations](#schemapostorganizations)|true|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "clientId": "string",
  "deploymentsAllowed": {},
  "deploymentsCreated": {},
  "description": "string",
  "documentRetentionInDays": 1,
  "monthlyNumberOfActiveModelsUsed": 0,
  "monthlyNumberOfDataBundlesAllowed": 0,
  "monthlyNumberOfDataBundlesCreated": 0,
  "monthlyNumberOfDocumentsAllowed": 0,
  "monthlyNumberOfDocumentsCreated": 0,
  "monthlyNumberOfFieldPredictionsUsed": 0,
  "monthlyNumberOfGpuHoursUsed": 0,
  "monthlyNumberOfModelDeploymentUnitsUsed": 0,
  "monthlyNumberOfPredictionsAllowed": 0,
  "monthlyNumberOfPredictionsCreated": 0,
  "monthlyNumberOfTrainingsAllowed": 0,
  "monthlyNumberOfTrainingsCreated": 0,
  "monthlyNumberOfTransitionExecutionsAllowed": 0,
  "monthlyNumberOfTransitionExecutionsCreated": 0,
  "monthlyNumberOfWorkflowExecutionsAllowed": 0,
  "monthlyNumberOfWorkflowExecutionsCreated": 0,
  "monthlyUsageSummary": {},
  "name": "string",
  "numberOfAppClientsAllowed": 0,
  "numberOfAppClientsCreated": 0,
  "numberOfAssetsAllowed": 0,
  "numberOfAssetsCreated": 0,
  "numberOfDatasetsAllowed": 0,
  "numberOfDatasetsCreated": 0,
  "numberOfModelsAllowed": 0,
  "numberOfModelsCreated": 0,
  "numberOfSecretsAllowed": 0,
  "numberOfSecretsCreated": 0,
  "numberOfTransitionsAllowed": 0,
  "numberOfTransitionsCreated": 0,
  "numberOfUsersAllowed": 0,
  "numberOfUsersCreated": 0,
  "numberOfWorkflowsAllowed": 0,
  "numberOfWorkflowsCreated": 0,
  "organizationId": "string",
  "paymentMethodId": "string",
  "planId": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Organization](#schemaorganization)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/organizations:write )
</aside>

## options/organizations

> Code samples

```bash
curl https://example.com/organizations \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /organizations`

> Body parameter

```json
{}
```

<h3 id="optionsorganizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/organizations/{organizationId}

> Code samples

```bash
curl https://example.com/organizations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationId}`

<h3 id="getorganizationsorganizationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "clientId": "string",
  "deploymentsAllowed": {},
  "deploymentsCreated": {},
  "description": "string",
  "documentRetentionInDays": 1,
  "monthlyNumberOfActiveModelsUsed": 0,
  "monthlyNumberOfDataBundlesAllowed": 0,
  "monthlyNumberOfDataBundlesCreated": 0,
  "monthlyNumberOfDocumentsAllowed": 0,
  "monthlyNumberOfDocumentsCreated": 0,
  "monthlyNumberOfFieldPredictionsUsed": 0,
  "monthlyNumberOfGpuHoursUsed": 0,
  "monthlyNumberOfModelDeploymentUnitsUsed": 0,
  "monthlyNumberOfPredictionsAllowed": 0,
  "monthlyNumberOfPredictionsCreated": 0,
  "monthlyNumberOfTrainingsAllowed": 0,
  "monthlyNumberOfTrainingsCreated": 0,
  "monthlyNumberOfTransitionExecutionsAllowed": 0,
  "monthlyNumberOfTransitionExecutionsCreated": 0,
  "monthlyNumberOfWorkflowExecutionsAllowed": 0,
  "monthlyNumberOfWorkflowExecutionsCreated": 0,
  "monthlyUsageSummary": {},
  "name": "string",
  "numberOfAppClientsAllowed": 0,
  "numberOfAppClientsCreated": 0,
  "numberOfAssetsAllowed": 0,
  "numberOfAssetsCreated": 0,
  "numberOfDatasetsAllowed": 0,
  "numberOfDatasetsCreated": 0,
  "numberOfModelsAllowed": 0,
  "numberOfModelsCreated": 0,
  "numberOfSecretsAllowed": 0,
  "numberOfSecretsCreated": 0,
  "numberOfTransitionsAllowed": 0,
  "numberOfTransitionsCreated": 0,
  "numberOfUsersAllowed": 0,
  "numberOfUsersCreated": 0,
  "numberOfWorkflowsAllowed": 0,
  "numberOfWorkflowsCreated": 0,
  "organizationId": "string",
  "paymentMethodId": "string",
  "planId": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getorganizationsorganizationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Organization](#schemaorganization)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/organizations:read )
</aside>

## options/organizations/{organizationId}

> Code samples

```bash
curl https://example.com/organizations/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /organizations/{organizationId}`

> Body parameter

```json
{}
```

<h3 id="optionsorganizationsorganizationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsorganizationsorganizationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/organizations/{organizationId}

> Code samples

```bash
curl https://example.com/organizations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "paymentMethodId": "string",
    "planId": "string"
  }'
```

`PATCH /organizations/{organizationId}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "paymentMethodId": "string",
  "planId": "string"
}
```

<h3 id="patchorganizationsorganizationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|organizationId|path|string|true|none|
|body|body|[PatchOrganizationId](#schemapatchorganizationid)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» paymentMethodId|body|string|false|none|
|» planId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "clientId": "string",
  "deploymentsAllowed": {},
  "deploymentsCreated": {},
  "description": "string",
  "documentRetentionInDays": 1,
  "monthlyNumberOfActiveModelsUsed": 0,
  "monthlyNumberOfDataBundlesAllowed": 0,
  "monthlyNumberOfDataBundlesCreated": 0,
  "monthlyNumberOfDocumentsAllowed": 0,
  "monthlyNumberOfDocumentsCreated": 0,
  "monthlyNumberOfFieldPredictionsUsed": 0,
  "monthlyNumberOfGpuHoursUsed": 0,
  "monthlyNumberOfModelDeploymentUnitsUsed": 0,
  "monthlyNumberOfPredictionsAllowed": 0,
  "monthlyNumberOfPredictionsCreated": 0,
  "monthlyNumberOfTrainingsAllowed": 0,
  "monthlyNumberOfTrainingsCreated": 0,
  "monthlyNumberOfTransitionExecutionsAllowed": 0,
  "monthlyNumberOfTransitionExecutionsCreated": 0,
  "monthlyNumberOfWorkflowExecutionsAllowed": 0,
  "monthlyNumberOfWorkflowExecutionsCreated": 0,
  "monthlyUsageSummary": {},
  "name": "string",
  "numberOfAppClientsAllowed": 0,
  "numberOfAppClientsCreated": 0,
  "numberOfAssetsAllowed": 0,
  "numberOfAssetsCreated": 0,
  "numberOfDatasetsAllowed": 0,
  "numberOfDatasetsCreated": 0,
  "numberOfModelsAllowed": 0,
  "numberOfModelsCreated": 0,
  "numberOfSecretsAllowed": 0,
  "numberOfSecretsCreated": 0,
  "numberOfTransitionsAllowed": 0,
  "numberOfTransitionsCreated": 0,
  "numberOfUsersAllowed": 0,
  "numberOfUsersCreated": 0,
  "numberOfWorkflowsAllowed": 0,
  "numberOfWorkflowsCreated": 0,
  "organizationId": "string",
  "paymentMethodId": "string",
  "planId": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchorganizationsorganizationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Organization](#schemaorganization)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/organizations:write )
</aside>

## get/paymentMethods

> Code samples

```bash
curl https://example.com/paymentMethods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /paymentMethods`

<h3 id="getpaymentmethods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "paymentMethods": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "details": {},
      "name": "string",
      "paymentMethodId": "string",
      "stripePublishableKey": "string",
      "stripeSetupIntentSecret": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getpaymentmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[PaymentMethods](#schemapaymentmethods)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/paymentmethods:read )
</aside>

## post/paymentMethods

> Code samples

```bash
curl https://example.com/paymentMethods \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`POST /paymentMethods`

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="postpaymentmethods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostPaymentMethods](#schemapostpaymentmethods)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "details": {},
  "name": "string",
  "paymentMethodId": "string",
  "stripePublishableKey": "string",
  "stripeSetupIntentSecret": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postpaymentmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[PaymentMethod](#schemapaymentmethod)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/paymentmethods:write )
</aside>

## options/paymentMethods

> Code samples

```bash
curl https://example.com/paymentMethods \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /paymentMethods`

> Body parameter

```json
{}
```

<h3 id="optionspaymentmethods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionspaymentmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/paymentMethods/{paymentMethodId}

> Code samples

```bash
curl https://example.com/paymentMethods/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /paymentMethods/{paymentMethodId}`

<h3 id="getpaymentmethodspaymentmethodid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentMethodId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "details": {},
  "name": "string",
  "paymentMethodId": "string",
  "stripePublishableKey": "string",
  "stripeSetupIntentSecret": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getpaymentmethodspaymentmethodid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[PaymentMethod](#schemapaymentmethod)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/paymentmethods:read )
</aside>

## delete/paymentMethods/{paymentMethodId}

> Code samples

```bash
curl https://example.com/paymentMethods/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /paymentMethods/{paymentMethodId}`

<h3 id="deletepaymentmethodspaymentmethodid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentMethodId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "details": {},
  "name": "string",
  "paymentMethodId": "string",
  "stripePublishableKey": "string",
  "stripeSetupIntentSecret": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletepaymentmethodspaymentmethodid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[PaymentMethod](#schemapaymentmethod)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/paymentmethods:read )
</aside>

## options/paymentMethods/{paymentMethodId}

> Code samples

```bash
curl https://example.com/paymentMethods/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /paymentMethods/{paymentMethodId}`

> Body parameter

```json
{}
```

<h3 id="optionspaymentmethodspaymentmethodid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentMethodId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionspaymentmethodspaymentmethodid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/paymentMethods/{paymentMethodId}

> Code samples

```bash
curl https://example.com/paymentMethods/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "stripeSetupIntentSecret": "string"
  }'
```

`PATCH /paymentMethods/{paymentMethodId}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "stripeSetupIntentSecret": "string"
}
```

<h3 id="patchpaymentmethodspaymentmethodid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|paymentMethodId|path|string|true|none|
|body|body|[PatchPaymentMethodId](#schemapatchpaymentmethodid)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» stripeSetupIntentSecret|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "details": {},
  "name": "string",
  "paymentMethodId": "string",
  "stripePublishableKey": "string",
  "stripeSetupIntentSecret": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchpaymentmethodspaymentmethodid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[PaymentMethod](#schemapaymentmethod)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/paymentmethods:write )
</aside>

## get/plans

> Code samples

```bash
curl https://example.com/plans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /plans`

<h3 id="getplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|owner|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "plans": [
    {
      "activeModels": {},
      "available": true,
      "currency": "USD",
      "description": "string",
      "fieldPredictions": {},
      "gpuHours": {},
      "latest": 1,
      "license": {},
      "modelDeploymentUnits": {},
      "name": "string",
      "organizationId": "string",
      "planId": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Plans](#schemaplans)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/plans:read )
</aside>

## options/plans

> Code samples

```bash
curl https://example.com/plans \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /plans`

> Body parameter

```json
{}
```

<h3 id="optionsplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/plans/{planId}

> Code samples

```bash
curl https://example.com/plans/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /plans/{planId}`

<h3 id="getplansplanid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "activeModels": {},
  "available": true,
  "currency": "USD",
  "description": "string",
  "fieldPredictions": {},
  "gpuHours": {},
  "latest": 1,
  "license": {},
  "modelDeploymentUnits": {},
  "name": "string",
  "organizationId": "string",
  "planId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getplansplanid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Plan](#schemaplan)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/plans:read )
</aside>

## options/plans/{planId}

> Code samples

```bash
curl https://example.com/plans/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /plans/{planId}`

> Body parameter

```json
{}
```

<h3 id="optionsplansplanid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsplansplanid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/predictions

> Code samples

```bash
curl https://example.com/predictions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /predictions`

<h3 id="getpredictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|
|sortBy|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "order": "ascending",
  "predictions": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "documentId": "string",
      "inferenceTime": 0,
      "modelId": "string",
      "predictionId": "string",
      "predictions": [
        {
          "confidence": 0,
          "label": "string",
          "location": [
            0,
            0,
            0,
            0
          ],
          "page": 0,
          "value": "string"
        }
      ],
      "trainingId": "string"
    }
  ],
  "sortBy": "createdTime"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getpredictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Predictions](#schemapredictions)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/predictions:read )
</aside>

## post/predictions

> Code samples

```bash
curl https://example.com/predictions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoRotate": true,
    "documentId": "string",
    "imageQuality": "LOW",
    "maxPages": 1,
    "modelId": "string",
    "postprocessConfig": {
      "strategy": "BEST_FIRST"
    },
    "rotation": 0,
    "trainingId": "string"
  }'
```

`POST /predictions`

> Body parameter

```json
{
  "autoRotate": true,
  "documentId": "string",
  "imageQuality": "LOW",
  "maxPages": 1,
  "modelId": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "rotation": 0,
  "trainingId": "string"
}
```

<h3 id="postpredictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostPredictions](#schemapostpredictions)|true|none|
|» autoRotate|body|boolean|false|none|
|» documentId|body|string|true|none|
|» imageQuality|body|string|false|none|
|» maxPages|body|integer|false|none|
|» modelId|body|string|true|none|
|» postprocessConfig|body|object|false|none|
|» » *oneOf*|body|object|false|none|
|» » strategy|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » parameters|body|object|true|none|
|» » » collapse|body|boolean|false|none|
|» » » n|body|integer|true|none|
|» » strategy|body|string|true|none|
|» rotation|body|integer|false|none|
|» trainingId|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» imageQuality|LOW|
|» imageQuality|HIGH|
|» » strategy|BEST_FIRST|
|» » strategy|BEST_N_PAGES|
|» rotation|0|
|» rotation|90|
|» rotation|180|
|» rotation|270|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "documentId": "string",
  "inferenceTime": 0,
  "modelId": "string",
  "predictionId": "string",
  "predictions": [
    {
      "confidence": 0,
      "label": "string",
      "location": [
        0,
        0,
        0,
        0
      ],
      "page": 0,
      "value": "string"
    }
  ],
  "trainingId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postpredictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Prediction](#schemaprediction)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/predictions:write )
</aside>

## options/predictions

> Code samples

```bash
curl https://example.com/predictions \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /predictions`

> Body parameter

```json
{}
```

<h3 id="optionspredictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionspredictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/profiles/{profileId}

> Code samples

```bash
curl https://example.com/profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /profiles/{profileId}`

<h3 id="getprofilesprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdTime": "string",
  "email": "string",
  "familyName": "string",
  "givenName": "string",
  "locale": "string",
  "metadata": {},
  "name": "string",
  "picture": "string",
  "profileId": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getprofilesprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Profile](#schemaprofile)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/assets:read )
</aside>

## options/profiles/{profileId}

> Code samples

```bash
curl https://example.com/profiles/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /profiles/{profileId}`

> Body parameter

```json
{}
```

<h3 id="optionsprofilesprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsprofilesprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/profiles/{profileId}

> Code samples

```bash
curl https://example.com/profiles/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /profiles/{profileId}`

<h3 id="patchprofilesprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdTime": "string",
  "email": "string",
  "familyName": "string",
  "givenName": "string",
  "locale": "string",
  "metadata": {},
  "name": "string",
  "picture": "string",
  "profileId": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchprofilesprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Profile](#schemaprofile)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/assets:write )
</aside>

## get/secrets

> Code samples

```bash
curl https://example.com/secrets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /secrets`

<h3 id="getsecrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "secrets": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "name": "string",
      "secretId": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getsecrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Secrets](#schemasecrets)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/secrets:read )
</aside>

## post/secrets

> Code samples

```bash
curl https://example.com/secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {},
    "description": "string",
    "name": "string"
  }'
```

`POST /secrets`

> Body parameter

```json
{
  "data": {},
  "description": "string",
  "name": "string"
}
```

<h3 id="postsecrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostSecrets](#schemapostsecrets)|true|none|
|» data|body|object|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "secretId": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postsecrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Secret](#schemasecret)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/secrets:write )
</aside>

## options/secrets

> Code samples

```bash
curl https://example.com/secrets \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /secrets`

> Body parameter

```json
{}
```

<h3 id="optionssecrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionssecrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## delete/secrets/{secretId}

> Code samples

```bash
curl https://example.com/secrets/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /secrets/{secretId}`

<h3 id="deletesecretssecretid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|secretId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "secretId": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletesecretssecretid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Secret](#schemasecret)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options/secrets/{secretId}

> Code samples

```bash
curl https://example.com/secrets/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /secrets/{secretId}`

> Body parameter

```json
{}
```

<h3 id="optionssecretssecretid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|secretId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionssecretssecretid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/secrets/{secretId}

> Code samples

```bash
curl https://example.com/secrets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {},
    "description": "string",
    "name": "string"
  }'
```

`PATCH /secrets/{secretId}`

> Body parameter

```json
{
  "data": {},
  "description": "string",
  "name": "string"
}
```

<h3 id="patchsecretssecretid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|secretId|path|string|true|none|
|body|body|[PatchSecretId](#schemapatchsecretid)|true|none|
|» data|body|object|false|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "secretId": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchsecretssecretid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Secret](#schemasecret)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/secrets:write )
</aside>

## post/signup

> Code samples

```bash
curl https://example.com/signup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "name": "string",
    "password": "string",
    "reCaptchaResponse": "string"
  }'
```

`POST /signup`

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "password": "string",
  "reCaptchaResponse": "string"
}
```

<h3 id="postsignup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostSignUp](#schemapostsignup)|true|none|
|» email|body|string|true|none|
|» name|body|string \| null|false|none|
|» password|body|string|true|none|
|» reCaptchaResponse|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "clientId": "string",
  "username": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postsignup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[SignUp](#schemasignup)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options/signup

> Code samples

```bash
curl https://example.com/signup \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /signup`

> Body parameter

```json
{}
```

<h3 id="optionssignup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionssignup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/transitions

> Code samples

```bash
curl https://example.com/transitions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transitions`

<h3 id="gettransitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionType|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "transitionType": [
    "docker"
  ],
  "transitions": [
    {
      "assets": {
        "jsRemoteComponent": "string",
        "property1": "string",
        "property2": "string"
      },
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "inputJsonSchema": {},
      "name": "string",
      "outputJsonSchema": {},
      "parameters": {},
      "timeoutInSeconds": 60,
      "transitionId": "string",
      "transitionType": "docker",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="gettransitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Transitions](#schematransitions)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions:read )
</aside>

## post/transitions

> Code samples

```bash
curl https://example.com/transitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "inputJsonSchema": {},
    "name": "string",
    "outputJsonSchema": {},
    "parameters": {
      "cpu": 256,
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "environmentSecrets": [
        "string"
      ],
      "imageUrl": "string",
      "memory": 512,
      "secretId": "string"
    },
    "timeoutInSeconds": 60,
    "transitionType": "docker"
  }'
```

`POST /transitions`

> Body parameter

```json
{
  "description": "string",
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {
    "cpu": 256,
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "memory": 512,
    "secretId": "string"
  },
  "timeoutInSeconds": 60,
  "transitionType": "docker"
}
```

<h3 id="posttransitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostTransitions](#schemaposttransitions)|true|none|
|» description|body|string \| null|false|none|
|» inputJsonSchema|body|object|false|none|
|» name|body|string \| null|false|none|
|» outputJsonSchema|body|object|false|none|
|» parameters|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » cpu|body|integer|false|none|
|» » environment|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » environmentSecrets|body|[string]|false|none|
|» » imageUrl|body|string|true|none|
|» » memory|body|integer|false|none|
|» » secretId|body|string|false|none|
|» » *anyOf*|body|object|false|none|
|» » assets|body|object|false|none|
|» » » jsRemoteComponent|body|string|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» timeoutInSeconds|body|integer|false|none|
|» transitionType|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » cpu|256|
|» » cpu|512|
|» » cpu|1024|
|» » memory|512|
|» » memory|1024|
|» » memory|2048|
|» » memory|4096|
|» » memory|8192|
|» transitionType|docker|
|» transitionType|manual|

> Example responses

> 200 Response

```json
{
  "assets": {
    "jsRemoteComponent": "string",
    "property1": "string",
    "property2": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {},
  "timeoutInSeconds": 60,
  "transitionId": "string",
  "transitionType": "docker",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="posttransitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Transition](#schematransition)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions:write )
</aside>

## options/transitions

> Code samples

```bash
curl https://example.com/transitions \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /transitions`

> Body parameter

```json
{}
```

<h3 id="optionstransitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionstransitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/transitions/{transitionId}

> Code samples

```bash
curl https://example.com/transitions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transitions/{transitionId}`

<h3 id="gettransitionstransitionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "assets": {
    "jsRemoteComponent": "string",
    "property1": "string",
    "property2": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {},
  "timeoutInSeconds": 60,
  "transitionId": "string",
  "transitionType": "docker",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="gettransitionstransitionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Transition](#schematransition)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions:read )
</aside>

## delete/transitions/{transitionId}

> Code samples

```bash
curl https://example.com/transitions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /transitions/{transitionId}`

<h3 id="deletetransitionstransitionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "assets": {
    "jsRemoteComponent": "string",
    "property1": "string",
    "property2": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {},
  "timeoutInSeconds": 60,
  "transitionId": "string",
  "transitionType": "docker",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletetransitionstransitionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Transition](#schematransition)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions:read )
</aside>

## options/transitions/{transitionId}

> Code samples

```bash
curl https://example.com/transitions/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /transitions/{transitionId}`

> Body parameter

```json
{}
```

<h3 id="optionstransitionstransitionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionstransitionstransitionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/transitions/{transitionId}

> Code samples

```bash
curl https://example.com/transitions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assets": {
      "jsRemoteComponent": "string",
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "inputJsonSchema": {},
    "name": "string",
    "outputJsonSchema": {},
    "parameters": {
      "cpu": 256,
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "environmentSecrets": [
        "string"
      ],
      "imageUrl": "string",
      "memory": 512,
      "secretId": "string"
    }
  }'
```

`PATCH /transitions/{transitionId}`

> Body parameter

```json
{
  "assets": {
    "jsRemoteComponent": "string",
    "property1": "string",
    "property2": "string"
  },
  "description": "string",
  "environment": {
    "property1": "string",
    "property2": "string"
  },
  "environmentSecrets": [
    "string"
  ],
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {
    "cpu": 256,
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "memory": 512,
    "secretId": "string"
  }
}
```

<h3 id="patchtransitionstransitionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|transitionId|path|string|true|none|
|body|body|[PatchTransitionId](#schemapatchtransitionid)|true|none|
|» assets|body|object|false|none|
|» » jsRemoteComponent|body|string|false|none|
|» » **additionalProperties**|body|string|false|none|
|» description|body|string \| null|false|none|
|» environment|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» environmentSecrets|body|[string]|false|none|
|» inputJsonSchema|body|object|false|none|
|» name|body|string \| null|false|none|
|» outputJsonSchema|body|object|false|none|
|» parameters|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» » cpu|body|integer|false|none|
|» » environment|body|object \| null|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » environmentSecrets|body|[string]|false|none|
|» » imageUrl|body|string|false|none|
|» » memory|body|integer|false|none|
|» » secretId|body|string \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » assets|body|object|false|none|
|» » » jsRemoteComponent|body|string|false|none|
|» » » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » cpu|256|
|» » cpu|512|
|» » cpu|1024|
|» » memory|512|
|» » memory|1024|
|» » memory|2048|
|» » memory|4096|
|» » memory|8192|

> Example responses

> 200 Response

```json
{
  "assets": {
    "jsRemoteComponent": "string",
    "property1": "string",
    "property2": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {},
  "timeoutInSeconds": 60,
  "transitionId": "string",
  "transitionType": "docker",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchtransitionstransitionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Transition](#schematransition)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions:write )
</aside>

## get/transitions/{transitionId}/executions

> Code samples

```bash
curl https://example.com/transitions/string/executions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transitions/{transitionId}/executions`

<h3 id="gettransitionstransitionidexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|order|query|string|false|none|
|executionId|query|string|false|none|
|transitionId|path|string|true|none|
|status|query|string|false|none|
|maxResults|query|string|false|none|
|sortBy|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "executions": [
    {
      "completedBy": "string",
      "endTime": "string",
      "executionId": "string",
      "input": {},
      "logId": "string",
      "startTime": "string",
      "status": "running",
      "transitionId": "string"
    }
  ],
  "nextToken": "string",
  "status": [
    "running"
  ],
  "transitionId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="gettransitionstransitionidexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[TransitionExecutions](#schematransitionexecutions)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions.executions:read )
</aside>

## post/transitions/{transitionId}/executions

> Code samples

```bash
curl https://example.com/transitions/string/executions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /transitions/{transitionId}/executions`

> Body parameter

```json
{}
```

<h3 id="posttransitionstransitionidexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|transitionId|path|string|true|none|
|body|body|[PostTransitionExecution](#schemaposttransitionexecution)|true|none|

> Example responses

> 200 Response

```json
{
  "completedBy": "string",
  "endTime": "string",
  "executionId": "string",
  "input": {},
  "logId": "string",
  "startTime": "string",
  "status": "running",
  "transitionId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="posttransitionstransitionidexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[TransitionExecution](#schematransitionexecution)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions.executions:write )
</aside>

## options/transitions/{transitionId}/executions

> Code samples

```bash
curl https://example.com/transitions/string/executions \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /transitions/{transitionId}/executions`

> Body parameter

```json
{}
```

<h3 id="optionstransitionstransitionidexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionstransitionstransitionidexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/transitions/{transitionId}/executions/{executionId}

> Code samples

```bash
curl https://example.com/transitions/string/executions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transitions/{transitionId}/executions/{executionId}`

<h3 id="gettransitionstransitionidexecutionsexecutionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionId|path|string|true|none|
|executionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "completedBy": "string",
  "endTime": "string",
  "executionId": "string",
  "input": {},
  "logId": "string",
  "startTime": "string",
  "status": "running",
  "transitionId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="gettransitionstransitionidexecutionsexecutionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[TransitionExecution](#schematransitionexecution)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions.executions:read )
</aside>

## options/transitions/{transitionId}/executions/{executionId}

> Code samples

```bash
curl https://example.com/transitions/string/executions/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /transitions/{transitionId}/executions/{executionId}`

> Body parameter

```json
{}
```

<h3 id="optionstransitionstransitionidexecutionsexecutionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionId|path|string|true|none|
|executionId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionstransitionstransitionidexecutionsexecutionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/transitions/{transitionId}/executions/{executionId}

> Code samples

```bash
curl https://example.com/transitions/string/executions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "string",
    "error": {
      "message": "string"
    },
    "output": {},
    "startTime": "string"
  }'
```

`PATCH /transitions/{transitionId}/executions/{executionId}`

> Body parameter

```json
{
  "status": "string",
  "error": {
    "message": "string"
  },
  "output": {},
  "startTime": "string"
}
```

<h3 id="patchtransitionstransitionidexecutionsexecutionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|transitionId|path|string|true|none|
|executionId|path|string|true|none|
|body|body|[PatchTransistionExecutionId](#schemapatchtransistionexecutionid)|true|none|
|» error|body|object|false|none|
|» » message|body|string|true|none|
|» output|body|object|false|none|
|» startTime|body|string \| null|false|none|
|» status|body|string|false|none|
|» *anyOf*|body|object|false|none|
|» status|body|string|false|none|
|» *anyOf*|body|object|false|none|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|succeeded|
|» status|failed|
|» status|rejected|
|» status|retry|

> Example responses

> 200 Response

```json
{
  "completedBy": "string",
  "endTime": "string",
  "executionId": "string",
  "input": {},
  "logId": "string",
  "startTime": "string",
  "status": "running",
  "transitionId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchtransitionstransitionidexecutionsexecutionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[TransitionExecution](#schematransitionexecution)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions.executions:write )
</aside>

## post/transitions/{transitionId}/executions/{executionId}/heartbeats

> Code samples

```bash
curl https://example.com/transitions/string/executions/string/heartbeats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /transitions/{transitionId}/executions/{executionId}/heartbeats`

> Body parameter

```json
{}
```

<h3 id="posttransitionstransitionidexecutionsexecutionidheartbeats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|transitionId|path|string|true|none|
|executionId|path|string|true|none|
|body|body|[PostHeartbeats](#schemapostheartbeats)|true|none|

> Example responses

> 204 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="posttransitionstransitionidexecutionsexecutionidheartbeats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|204 response|[Empty](#schemaempty)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Access-Control-Allow-Headers|string||none|
|204|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/transitions.executions.heartbeats:write )
</aside>

## options/transitions/{transitionId}/executions/{executionId}/heartbeats

> Code samples

```bash
curl https://example.com/transitions/string/executions/string/heartbeats \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /transitions/{transitionId}/executions/{executionId}/heartbeats`

> Body parameter

```json
{}
```

<h3 id="optionstransitionstransitionidexecutionsexecutionidheartbeats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionId|path|string|true|none|
|executionId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionstransitionstransitionidexecutionsexecutionidheartbeats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/users

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users`

<h3 id="getusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "users": [
    {
      "avatar": "string",
      "createdBy": "string",
      "createdTime": "string",
      "email": "string",
      "metadata": {},
      "name": "string",
      "profileId": "string",
      "updatedBy": "string",
      "updatedTime": "string",
      "userId": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Users](#schemausers)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/users:read )
</aside>

## post/users

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appClientId": "string",
    "avatar": "string",
    "email": "string",
    "metadata": {},
    "name": "string"
  }'
```

`POST /users`

> Body parameter

```json
{
  "appClientId": "string",
  "avatar": "string",
  "email": "string",
  "metadata": {},
  "name": "string"
}
```

<h3 id="postusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostUsers](#schemapostusers)|true|none|
|» appClientId|body|string|false|none|
|» avatar|body|string \| null|false|none|
|» email|body|string|true|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "createdBy": "string",
  "createdTime": "string",
  "email": "string",
  "metadata": {},
  "name": "string",
  "profileId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "userId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[User](#schemauser)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/users:write )
</aside>

## options/users

> Code samples

```bash
curl https://example.com/users \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /users`

> Body parameter

```json
{}
```

<h3 id="optionsusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{userId}

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{userId}`

<h3 id="getusersuserid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "createdBy": "string",
  "createdTime": "string",
  "email": "string",
  "metadata": {},
  "name": "string",
  "profileId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "userId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getusersuserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[User](#schemauser)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/users:read )
</aside>

## delete/users/{userId}

> Code samples

```bash
curl https://example.com/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{userId}`

<h3 id="deleteusersuserid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "createdBy": "string",
  "createdTime": "string",
  "email": "string",
  "metadata": {},
  "name": "string",
  "profileId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "userId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteusersuserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[User](#schemauser)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/users:read )
</aside>

## options/users/{userId}

> Code samples

```bash
curl https://example.com/users/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /users/{userId}`

> Body parameter

```json
{}
```

<h3 id="optionsusersuserid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsusersuserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/users/{userId}

> Code samples

```bash
curl https://example.com/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "avatar": "string",
    "metadata": {},
    "name": "string"
  }'
```

`PATCH /users/{userId}`

> Body parameter

```json
{
  "avatar": "string",
  "metadata": {},
  "name": "string"
}
```

<h3 id="patchusersuserid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|userId|path|string|true|none|
|body|body|[PatchUserId](#schemapatchuserid)|true|none|
|» avatar|body|string \| null|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "createdBy": "string",
  "createdTime": "string",
  "email": "string",
  "metadata": {},
  "name": "string",
  "profileId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "userId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchusersuserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[User](#schemauser)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/users:write )
</aside>

## get/workflows

> Code samples

```bash
curl https://example.com/workflows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workflows`

<h3 id="getworkflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "workflows": [
    {
      "completedConfig": {
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "environmentSecrets": [
          "string"
        ],
        "imageUrl": "string",
        "secretId": "string"
      },
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "errorConfig": {
        "email": "string",
        "manualRetry": true
      },
      "name": "string",
      "numberOfRunningExecutions": 0,
      "updatedBy": "string",
      "updatedTime": "string",
      "workflowId": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getworkflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Workflows](#schemaworkflows)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows:read )
</aside>

## post/workflows

> Code samples

```bash
curl https://example.com/workflows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completedConfig": {
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "environmentSecrets": [
        "string"
      ],
      "imageUrl": "string",
      "secretId": "string"
    },
    "description": "string",
    "errorConfig": {
      "email": "string",
      "manualRetry": true
    },
    "name": "string",
    "specification": {
      "definition": {},
      "language": "ASL",
      "version": "1.0.0"
    }
  }'
```

`POST /workflows`

> Body parameter

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string",
  "specification": {
    "definition": {},
    "language": "ASL",
    "version": "1.0.0"
  }
}
```

<h3 id="postworkflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostWorkflows](#schemapostworkflows)|true|none|
|» completedConfig|body|object|false|none|
|» » environment|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » environmentSecrets|body|[string]|false|none|
|» » imageUrl|body|string|true|none|
|» » secretId|body|string|false|none|
|» description|body|string \| null|false|none|
|» errorConfig|body|object|false|none|
|» » email|body|string|false|none|
|» » manualRetry|body|boolean|false|none|
|» name|body|string \| null|false|none|
|» specification|body|object|true|none|
|» » definition|body|object|true|none|
|» » language|body|string|false|none|
|» » version|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » language|ASL|
|» » version|1.0.0|

> Example responses

> 200 Response

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string",
  "numberOfRunningExecutions": 0,
  "updatedBy": "string",
  "updatedTime": "string",
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postworkflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Workflow](#schemaworkflow)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows:write )
</aside>

## options/workflows

> Code samples

```bash
curl https://example.com/workflows \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /workflows`

> Body parameter

```json
{}
```

<h3 id="optionsworkflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsworkflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/workflows/{workflowId}

> Code samples

```bash
curl https://example.com/workflows/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workflows/{workflowId}`

<h3 id="getworkflowsworkflowid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string",
  "numberOfRunningExecutions": 0,
  "updatedBy": "string",
  "updatedTime": "string",
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getworkflowsworkflowid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Workflow](#schemaworkflow)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows:read )
</aside>

## delete/workflows/{workflowId}

> Code samples

```bash
curl https://example.com/workflows/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /workflows/{workflowId}`

<h3 id="deleteworkflowsworkflowid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string",
  "numberOfRunningExecutions": 0,
  "updatedBy": "string",
  "updatedTime": "string",
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteworkflowsworkflowid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Workflow](#schemaworkflow)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows:read )
</aside>

## options/workflows/{workflowId}

> Code samples

```bash
curl https://example.com/workflows/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /workflows/{workflowId}`

> Body parameter

```json
{}
```

<h3 id="optionsworkflowsworkflowid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsworkflowsworkflowid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/workflows/{workflowId}

> Code samples

```bash
curl https://example.com/workflows/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completedConfig": {
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "environmentSecrets": [
        "string"
      ],
      "imageUrl": "string",
      "secretId": "string"
    },
    "description": "string",
    "errorConfig": {
      "email": "string",
      "manualRetry": true
    },
    "name": "string"
  }'
```

`PATCH /workflows/{workflowId}`

> Body parameter

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string"
}
```

<h3 id="patchworkflowsworkflowid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|workflowId|path|string|true|none|
|body|body|[PatchWorkflowId](#schemapatchworkflowid)|true|none|
|» completedConfig|body|object|false|none|
|» » environment|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » environmentSecrets|body|[string]|false|none|
|» » imageUrl|body|string|true|none|
|» » secretId|body|string|false|none|
|» description|body|string \| null|false|none|
|» errorConfig|body|object|false|none|
|» » email|body|string|false|none|
|» » manualRetry|body|boolean|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string",
  "numberOfRunningExecutions": 0,
  "updatedBy": "string",
  "updatedTime": "string",
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchworkflowsworkflowid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Workflow](#schemaworkflow)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows:write )
</aside>

## get/workflows/{workflowId}/executions

> Code samples

```bash
curl https://example.com/workflows/string/executions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workflows/{workflowId}/executions`

<h3 id="getworkflowsworkflowidexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromStartTime|query|string|false|none|
|toStartTime|query|string|false|none|
|workflowId|path|string|true|none|
|nextToken|query|string|false|none|
|order|query|string|false|none|
|status|query|string|false|none|
|maxResults|query|string|false|none|
|sortBy|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "executions": [
    {
      "completedBy": [
        "string"
      ],
      "completedTaskLogId": "string",
      "endTime": "string",
      "events": [
        {}
      ],
      "executionId": "string",
      "input": {},
      "logId": "string",
      "output": {},
      "startTime": "string",
      "status": "running",
      "transitionExecutions": {},
      "workflowId": "string"
    }
  ],
  "nextToken": "string",
  "order": "ascending",
  "sortBy": "startTime",
  "status": [
    "running"
  ],
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getworkflowsworkflowidexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[WorkflowExecutions](#schemaworkflowexecutions)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows.executions:read )
</aside>

## post/workflows/{workflowId}/executions

> Code samples

```bash
curl https://example.com/workflows/string/executions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "input": {}
  }'
```

`POST /workflows/{workflowId}/executions`

> Body parameter

```json
{
  "input": {}
}
```

<h3 id="postworkflowsworkflowidexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|workflowId|path|string|true|none|
|body|body|[PostWorkflowExecutions](#schemapostworkflowexecutions)|true|none|
|» input|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "completedBy": [
    "string"
  ],
  "completedTaskLogId": "string",
  "endTime": "string",
  "events": [
    {}
  ],
  "executionId": "string",
  "input": {},
  "logId": "string",
  "output": {},
  "startTime": "string",
  "status": "running",
  "transitionExecutions": {},
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postworkflowsworkflowidexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[WorkflowExecution](#schemaworkflowexecution)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows.executions:write )
</aside>

## options/workflows/{workflowId}/executions

> Code samples

```bash
curl https://example.com/workflows/string/executions \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /workflows/{workflowId}/executions`

> Body parameter

```json
{}
```

<h3 id="optionsworkflowsworkflowidexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsworkflowsworkflowidexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/workflows/{workflowId}/executions/{executionId}

> Code samples

```bash
curl https://example.com/workflows/string/executions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workflows/{workflowId}/executions/{executionId}`

<h3 id="getworkflowsworkflowidexecutionsexecutionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|executionId|path|string|true|none|
|workflowId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "completedBy": [
    "string"
  ],
  "completedTaskLogId": "string",
  "endTime": "string",
  "events": [
    {}
  ],
  "executionId": "string",
  "input": {},
  "logId": "string",
  "output": {},
  "startTime": "string",
  "status": "running",
  "transitionExecutions": {},
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getworkflowsworkflowidexecutionsexecutionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[WorkflowExecution](#schemaworkflowexecution)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows.executions:read )
</aside>

## delete/workflows/{workflowId}/executions/{executionId}

> Code samples

```bash
curl https://example.com/workflows/string/executions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /workflows/{workflowId}/executions/{executionId}`

<h3 id="deleteworkflowsworkflowidexecutionsexecutionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|executionId|path|string|true|none|
|workflowId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "completedBy": [
    "string"
  ],
  "completedTaskLogId": "string",
  "endTime": "string",
  "events": [
    {}
  ],
  "executionId": "string",
  "input": {},
  "logId": "string",
  "output": {},
  "startTime": "string",
  "status": "running",
  "transitionExecutions": {},
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteworkflowsworkflowidexecutionsexecutionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[WorkflowExecution](#schemaworkflowexecution)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows.executions:read )
</aside>

## options/workflows/{workflowId}/executions/{executionId}

> Code samples

```bash
curl https://example.com/workflows/string/executions/string \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`OPTIONS /workflows/{workflowId}/executions/{executionId}`

> Body parameter

```json
{}
```

<h3 id="optionsworkflowsworkflowidexecutionsexecutionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|executionId|path|string|true|none|
|workflowId|path|string|true|none|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsworkflowsworkflowidexecutionsexecutionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch/workflows/{workflowId}/executions/{executionId}

> Code samples

```bash
curl https://example.com/workflows/string/executions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "nextTransitionId": "string"
  }'
```

`PATCH /workflows/{workflowId}/executions/{executionId}`

> Body parameter

```json
{
  "nextTransitionId": "string"
}
```

<h3 id="patchworkflowsworkflowidexecutionsexecutionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|executionId|path|string|true|none|
|workflowId|path|string|true|none|
|body|body|[PatchWorkflowExecutionId](#schemapatchworkflowexecutionid)|true|none|
|» nextTransitionId|body|string|true|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "completedBy": [
    "string"
  ],
  "completedTaskLogId": "string",
  "endTime": "string",
  "events": [
    {}
  ],
  "executionId": "string",
  "input": {},
  "logId": "string",
  "output": {},
  "startTime": "string",
  "status": "running",
  "transitionExecutions": {},
  "workflowId": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 415 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="patchworkflowsworkflowidexecutionsexecutionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[WorkflowExecution](#schemaworkflowexecution)|
|400|Bad Request|400 response|[Error](#schemaerror)|
|403|Forbidden|403 response|[Error](#schemaerror)|
|404|Not Found|404 response|[Error](#schemaerror)|
|415|Unsupported Media Type|415 response|[Error](#schemaerror)|
|500|Internal Server Error|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Headers|string||none|
|400|Access-Control-Allow-Origin|string||none|
|403|Access-Control-Allow-Headers|string||none|
|403|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Headers|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Headers|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Headers|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: api.lucidtech.ai/workflows.executions:write )
</aside>

# Schemas

<h2 id="tocS_AppClient">AppClient</h2>
<!-- backwards compatibility -->
<a id="schemaappclient"></a>
<a id="schema_AppClient"></a>
<a id="tocSappclient"></a>
<a id="tocsappclient"></a>

```json
{
  "appClientId": "string",
  "callbackUrls": [
    "string"
  ],
  "clientId": "string",
  "clientSecret": "string",
  "createdBy": "string",
  "createdTime": "string",
  "defaultLoginUrl": "string",
  "description": "string",
  "hasSecret": true,
  "loginUrls": [
    "string"
  ],
  "logoutUrls": [
    "string"
  ],
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appClientId|string|true|none|none|
|callbackUrls|[string]|true|none|none|
|clientId|string|true|none|none|
|clientSecret|string|false|none|none|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|defaultLoginUrl|string \| null|true|none|none|
|description|string \| null|true|none|none|
|hasSecret|boolean|true|none|none|
|loginUrls|[string]|true|none|none|
|logoutUrls|[string]|true|none|none|
|name|string \| null|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|

<h2 id="tocS_AppClients">AppClients</h2>
<!-- backwards compatibility -->
<a id="schemaappclients"></a>
<a id="schema_AppClients"></a>
<a id="tocSappclients"></a>
<a id="tocsappclients"></a>

```json
{
  "appClients": [
    {
      "appClientId": "string",
      "callbackUrls": [
        "string"
      ],
      "clientId": "string",
      "clientSecret": "string",
      "createdBy": "string",
      "createdTime": "string",
      "defaultLoginUrl": "string",
      "description": "string",
      "hasSecret": true,
      "loginUrls": [
        "string"
      ],
      "logoutUrls": [
        "string"
      ],
      "name": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appClients|[object]|true|none|none|
|nextToken|string \| null|true|none|none|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "assetId": "string",
  "content": "string",
  "contentMD5": "string",
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|string|true|none|none|
|content|string|false|none|none|
|contentMD5|string \| null|true|none|none|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|description|string \| null|true|none|none|
|name|string \| null|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|

<h2 id="tocS_Assets">Assets</h2>
<!-- backwards compatibility -->
<a id="schemaassets"></a>
<a id="schema_Assets"></a>
<a id="tocSassets"></a>
<a id="tocsassets"></a>

```json
{
  "assets": [
    {
      "assetId": "string",
      "content": "string",
      "contentMD5": "string",
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "name": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|nextToken|string \| null|true|none|none|

<h2 id="tocS_DataBundle">DataBundle</h2>
<!-- backwards compatibility -->
<a id="schemadatabundle"></a>
<a id="schema_DataBundle"></a>
<a id="tocSdatabundle"></a>
<a id="tocsdatabundle"></a>

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "dataBundleId": "string",
  "datasets": [
    {
      "containsPersonallyIdentifiableInformation": true,
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "groundTruthSummary": {},
      "metadata": {},
      "name": "string",
      "numberOfDocuments": 0,
      "retentionInDays": 0,
      "storageLocation": "EU",
      "updatedBy": "string",
      "updatedTime": "string",
      "version": 0
    }
  ],
  "description": "string",
  "modelId": "string",
  "name": "string",
  "retentionInDays": 1,
  "status": "running",
  "summary": {},
  "updatedBy": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|dataBundleId|string|true|none|none|
|datasets|[object]|true|none|none|
|description|string \| null|true|none|none|
|modelId|string|true|none|none|
|name|string \| null|true|none|none|
|retentionInDays|integer|false|none|none|
|status|string|true|none|none|
|summary|object \| null|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|succeeded|
|status|failed|

<h2 id="tocS_DataBundles">DataBundles</h2>
<!-- backwards compatibility -->
<a id="schemadatabundles"></a>
<a id="schema_DataBundles"></a>
<a id="tocSdatabundles"></a>
<a id="tocsdatabundles"></a>

```json
{
  "dataBundles": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "dataBundleId": "string",
      "datasets": [
        {
          "containsPersonallyIdentifiableInformation": true,
          "createdBy": "string",
          "createdTime": "string",
          "datasetId": "string",
          "description": "string",
          "groundTruthSummary": {},
          "metadata": {},
          "name": "string",
          "numberOfDocuments": 0,
          "retentionInDays": 0,
          "storageLocation": "EU",
          "updatedBy": "string",
          "updatedTime": "string",
          "version": 0
        }
      ],
      "description": "string",
      "modelId": "string",
      "name": "string",
      "retentionInDays": 1,
      "status": "running",
      "summary": {},
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string",
  "status": [
    "running"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataBundles|[object]|true|none|none|
|nextToken|string \| null|true|none|none|
|status|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|succeeded|
|status|failed|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "groundTruthSummary": {},
  "metadata": {},
  "name": "string",
  "numberOfDocuments": 0,
  "retentionInDays": 0,
  "storageLocation": "EU",
  "updatedBy": "string",
  "updatedTime": "string",
  "version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containsPersonallyIdentifiableInformation|boolean|true|none|none|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|datasetId|string|true|none|none|
|description|string \| null|true|none|none|
|groundTruthSummary|object|true|none|none|
|metadata|object \| null|true|none|none|
|name|string \| null|false|none|none|
|numberOfDocuments|integer|true|none|none|
|retentionInDays|integer|true|none|none|
|storageLocation|string|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|
|version|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|storageLocation|EU|

<h2 id="tocS_Datasets">Datasets</h2>
<!-- backwards compatibility -->
<a id="schemadatasets"></a>
<a id="schema_Datasets"></a>
<a id="tocSdatasets"></a>
<a id="tocsdatasets"></a>

```json
{
  "datasets": [
    {
      "containsPersonallyIdentifiableInformation": true,
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "groundTruthSummary": {},
      "metadata": {},
      "name": "string",
      "numberOfDocuments": 0,
      "retentionInDays": 0,
      "storageLocation": "EU",
      "updatedBy": "string",
      "updatedTime": "string",
      "version": 0
    }
  ],
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|[object]|true|none|none|
|nextToken|string \| null|true|none|none|

<h2 id="tocS_DeploymentEnvironment">DeploymentEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentenvironment"></a>
<a id="schema_DeploymentEnvironment"></a>
<a id="tocSdeploymentenvironment"></a>
<a id="tocsdeploymentenvironment"></a>

```json
{
  "deploymentEnvironmentId": "string",
  "description": "string",
  "modelDeploymentUnits": 0,
  "name": "string",
  "organizationId": "string",
  "status": "available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentEnvironmentId|string|true|none|none|
|description|string \| null|true|none|none|
|modelDeploymentUnits|integer|true|none|none|
|name|string \| null|true|none|none|
|organizationId|string \| null|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|unavailable|

<h2 id="tocS_DeploymentEnvironments">DeploymentEnvironments</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentenvironments"></a>
<a id="schema_DeploymentEnvironments"></a>
<a id="tocSdeploymentenvironments"></a>
<a id="tocsdeploymentenvironments"></a>

```json
{
  "deploymentEnvironments": [
    {
      "deploymentEnvironmentId": "string",
      "description": "string",
      "modelDeploymentUnits": 0,
      "name": "string",
      "organizationId": "string",
      "status": "available"
    }
  ],
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentEnvironments|[object]|true|none|none|
|nextToken|string \| null|true|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "consentId": "string",
  "content": "string",
  "contentMD5": "string",
  "contentType": "application/pdf",
  "createdBy": "string",
  "createdTime": "string",
  "datasetId": "string",
  "description": "string",
  "documentId": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1,
  "updatedBy": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentId|string|false|none|none|
|content|string|false|none|none|
|contentMD5|string \| null|true|none|none|
|contentType|string|true|none|none|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|datasetId|string|false|none|none|
|description|string \| null|true|none|none|
|documentId|string|true|none|none|
|groundTruth|[object]|false|none|none|
|metadata|object \| null|true|none|none|
|name|string \| null|true|none|none|
|retentionInDays|integer|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|application/pdf|
|contentType|image/jpeg|
|contentType|image/png|
|contentType|image/tiff|

<h2 id="tocS_Documents">Documents</h2>
<!-- backwards compatibility -->
<a id="schemadocuments"></a>
<a id="schema_Documents"></a>
<a id="tocSdocuments"></a>
<a id="tocsdocuments"></a>

```json
{
  "consentId": [
    "string"
  ],
  "datasetId": [
    "string"
  ],
  "documents": [
    {
      "consentId": "string",
      "content": "string",
      "contentMD5": "string",
      "contentType": "application/pdf",
      "createdBy": "string",
      "createdTime": "string",
      "datasetId": "string",
      "description": "string",
      "documentId": "string",
      "groundTruth": [
        {
          "label": "string",
          "value": "string"
        }
      ],
      "metadata": {},
      "name": "string",
      "retentionInDays": 1,
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ],
  "nextToken": "string",
  "order": "ascending",
  "sortBy": "createdTime"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentId|[string]|false|none|none|
|datasetId|[string]|false|none|none|
|documents|[object]|true|none|none|
|nextToken|string \| null|true|none|none|
|order|string|false|none|none|
|sortBy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|order|ascending|
|order|descending|
|sortBy|createdTime|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

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
|message|string|false|none|none|

<h2 id="tocS_Log">Log</h2>
<!-- backwards compatibility -->
<a id="schemalog"></a>
<a id="schema_Log"></a>
<a id="tocSlog"></a>
<a id="tocslog"></a>

```json
{
  "events": [
    {}
  ],
  "logId": "string",
  "startTime": "string",
  "transitionExecutionId": "string",
  "transitionId": "string",
  "workflowExecutionId": "string",
  "workflowId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[object]|false|none|none|
|logId|string|true|none|none|
|startTime|string \| null|true|none|none|
|transitionExecutionId|string \| null|true|none|none|
|transitionId|string \| null|true|none|none|
|workflowExecutionId|string \| null|true|none|none|
|workflowId|string \| null|true|none|none|

<h2 id="tocS_Logs">Logs</h2>
<!-- backwards compatibility -->
<a id="schemalogs"></a>
<a id="schema_Logs"></a>
<a id="tocSlogs"></a>
<a id="tocslogs"></a>

```json
{
  "logs": [
    {
      "events": [
        {}
      ],
      "logId": "string",
      "startTime": "string",
      "transitionExecutionId": "string",
      "transitionId": "string",
      "workflowExecutionId": "string",
      "workflowId": "string"
    }
  ],
  "nextToken": "string",
  "order": "ascending",
  "transitionExecutionId": "string",
  "transitionId": "string",
  "workflowExecutionId": "string",
  "workflowId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[object]|true|none|none|
|nextToken|string \| null|true|none|none|
|order|string|false|none|none|
|transitionExecutionId|string|false|none|none|
|transitionId|string|false|none|none|
|workflowExecutionId|string|false|none|none|
|workflowId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|order|ascending|
|order|descending|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "modelId": "string",
  "name": "string",
  "numberOfDataBundles": 0,
  "numberOfRunningTrainings": 0,
  "organizationId": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "status": "active",
  "trainingId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "width": 97
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|description|string \| null|true|none|none|
|fieldConfig|object \| null|true|none|none|
|height|integer|true|none|none|
|metadata|object \| null|true|none|none|
|modelId|string|true|none|none|
|name|string \| null|true|none|none|
|numberOfDataBundles|integer|true|none|none|
|numberOfRunningTrainings|integer|true|none|none|
|organizationId|string|true|none|none|
|postprocessConfig|object|false|none|none|
|preprocessConfig|object|true|none|none|
|status|string|true|none|none|
|trainingId|string \| null|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|
|width|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_Models">Models</h2>
<!-- backwards compatibility -->
<a id="schemamodels"></a>
<a id="schema_Models"></a>
<a id="tocSmodels"></a>
<a id="tocsmodels"></a>

```json
{
  "models": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "fieldConfig": {
        "property1": {
          "description": "string",
          "enum": [
            "string"
          ],
          "maxLength": 1,
          "type": "amount"
        },
        "property2": {
          "description": "string",
          "enum": [
            "string"
          ],
          "maxLength": 1,
          "type": "amount"
        }
      },
      "height": 97,
      "metadata": {},
      "modelId": "string",
      "name": "string",
      "numberOfDataBundles": 0,
      "numberOfRunningTrainings": 0,
      "organizationId": "string",
      "postprocessConfig": {
        "strategy": "BEST_FIRST"
      },
      "preprocessConfig": {
        "autoRotate": true,
        "imageQuality": "LOW",
        "maxPages": 1
      },
      "status": "active",
      "trainingId": "string",
      "updatedBy": "string",
      "updatedTime": "string",
      "width": 97
    }
  ],
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[object]|true|none|none|
|nextToken|string \| null|true|none|none|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "clientId": "string",
  "deploymentsAllowed": {},
  "deploymentsCreated": {},
  "description": "string",
  "documentRetentionInDays": 1,
  "monthlyNumberOfActiveModelsUsed": 0,
  "monthlyNumberOfDataBundlesAllowed": 0,
  "monthlyNumberOfDataBundlesCreated": 0,
  "monthlyNumberOfDocumentsAllowed": 0,
  "monthlyNumberOfDocumentsCreated": 0,
  "monthlyNumberOfFieldPredictionsUsed": 0,
  "monthlyNumberOfGpuHoursUsed": 0,
  "monthlyNumberOfModelDeploymentUnitsUsed": 0,
  "monthlyNumberOfPredictionsAllowed": 0,
  "monthlyNumberOfPredictionsCreated": 0,
  "monthlyNumberOfTrainingsAllowed": 0,
  "monthlyNumberOfTrainingsCreated": 0,
  "monthlyNumberOfTransitionExecutionsAllowed": 0,
  "monthlyNumberOfTransitionExecutionsCreated": 0,
  "monthlyNumberOfWorkflowExecutionsAllowed": 0,
  "monthlyNumberOfWorkflowExecutionsCreated": 0,
  "monthlyUsageSummary": {},
  "name": "string",
  "numberOfAppClientsAllowed": 0,
  "numberOfAppClientsCreated": 0,
  "numberOfAssetsAllowed": 0,
  "numberOfAssetsCreated": 0,
  "numberOfDatasetsAllowed": 0,
  "numberOfDatasetsCreated": 0,
  "numberOfModelsAllowed": 0,
  "numberOfModelsCreated": 0,
  "numberOfSecretsAllowed": 0,
  "numberOfSecretsCreated": 0,
  "numberOfTransitionsAllowed": 0,
  "numberOfTransitionsCreated": 0,
  "numberOfUsersAllowed": 0,
  "numberOfUsersCreated": 0,
  "numberOfWorkflowsAllowed": 0,
  "numberOfWorkflowsCreated": 0,
  "organizationId": "string",
  "paymentMethodId": "string",
  "planId": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string \| null|false|none|none|
|deploymentsAllowed|object|false|none|none|
|deploymentsCreated|object|false|none|none|
|description|string \| null|true|none|none|
|documentRetentionInDays|integer|true|none|none|
|monthlyNumberOfActiveModelsUsed|integer|true|none|none|
|monthlyNumberOfDataBundlesAllowed|integer|true|none|none|
|monthlyNumberOfDataBundlesCreated|integer|true|none|none|
|monthlyNumberOfDocumentsAllowed|integer|true|none|none|
|monthlyNumberOfDocumentsCreated|integer|true|none|none|
|monthlyNumberOfFieldPredictionsUsed|integer|true|none|none|
|monthlyNumberOfGpuHoursUsed|number|true|none|none|
|monthlyNumberOfModelDeploymentUnitsUsed|integer|false|none|none|
|monthlyNumberOfPredictionsAllowed|integer|true|none|none|
|monthlyNumberOfPredictionsCreated|integer|true|none|none|
|monthlyNumberOfTrainingsAllowed|integer|true|none|none|
|monthlyNumberOfTrainingsCreated|integer|true|none|none|
|monthlyNumberOfTransitionExecutionsAllowed|integer|true|none|none|
|monthlyNumberOfTransitionExecutionsCreated|integer|true|none|none|
|monthlyNumberOfWorkflowExecutionsAllowed|integer|true|none|none|
|monthlyNumberOfWorkflowExecutionsCreated|integer|true|none|none|
|monthlyUsageSummary|object|true|none|none|
|name|string \| null|true|none|none|
|numberOfAppClientsAllowed|integer|true|none|none|
|numberOfAppClientsCreated|integer|true|none|none|
|numberOfAssetsAllowed|integer|true|none|none|
|numberOfAssetsCreated|integer|true|none|none|
|numberOfDatasetsAllowed|integer|false|none|none|
|numberOfDatasetsCreated|integer|false|none|none|
|numberOfModelsAllowed|integer|true|none|none|
|numberOfModelsCreated|integer|true|none|none|
|numberOfSecretsAllowed|integer|true|none|none|
|numberOfSecretsCreated|integer|true|none|none|
|numberOfTransitionsAllowed|integer|true|none|none|
|numberOfTransitionsCreated|integer|true|none|none|
|numberOfUsersAllowed|integer|true|none|none|
|numberOfUsersCreated|integer|true|none|none|
|numberOfWorkflowsAllowed|integer|true|none|none|
|numberOfWorkflowsCreated|integer|true|none|none|
|organizationId|string|true|none|none|
|paymentMethodId|string \| null|true|none|none|
|planId|string \| null|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|

<h2 id="tocS_Organizations">Organizations</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations"></a>
<a id="schema_Organizations"></a>
<a id="tocSorganizations"></a>
<a id="tocsorganizations"></a>

```json
{
  "nextToken": "string",
  "organizations": [
    {
      "clientId": "string",
      "deploymentsAllowed": {},
      "deploymentsCreated": {},
      "description": "string",
      "documentRetentionInDays": 1,
      "monthlyNumberOfActiveModelsUsed": 0,
      "monthlyNumberOfDataBundlesAllowed": 0,
      "monthlyNumberOfDataBundlesCreated": 0,
      "monthlyNumberOfDocumentsAllowed": 0,
      "monthlyNumberOfDocumentsCreated": 0,
      "monthlyNumberOfFieldPredictionsUsed": 0,
      "monthlyNumberOfGpuHoursUsed": 0,
      "monthlyNumberOfModelDeploymentUnitsUsed": 0,
      "monthlyNumberOfPredictionsAllowed": 0,
      "monthlyNumberOfPredictionsCreated": 0,
      "monthlyNumberOfTrainingsAllowed": 0,
      "monthlyNumberOfTrainingsCreated": 0,
      "monthlyNumberOfTransitionExecutionsAllowed": 0,
      "monthlyNumberOfTransitionExecutionsCreated": 0,
      "monthlyNumberOfWorkflowExecutionsAllowed": 0,
      "monthlyNumberOfWorkflowExecutionsCreated": 0,
      "monthlyUsageSummary": {},
      "name": "string",
      "numberOfAppClientsAllowed": 0,
      "numberOfAppClientsCreated": 0,
      "numberOfAssetsAllowed": 0,
      "numberOfAssetsCreated": 0,
      "numberOfDatasetsAllowed": 0,
      "numberOfDatasetsCreated": 0,
      "numberOfModelsAllowed": 0,
      "numberOfModelsCreated": 0,
      "numberOfSecretsAllowed": 0,
      "numberOfSecretsCreated": 0,
      "numberOfTransitionsAllowed": 0,
      "numberOfTransitionsCreated": 0,
      "numberOfUsersAllowed": 0,
      "numberOfUsersCreated": 0,
      "numberOfWorkflowsAllowed": 0,
      "numberOfWorkflowsCreated": 0,
      "organizationId": "string",
      "paymentMethodId": "string",
      "planId": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|organizations|[object]|true|none|none|

<h2 id="tocS_PatchAppClientId">PatchAppClientId</h2>
<!-- backwards compatibility -->
<a id="schemapatchappclientid"></a>
<a id="schema_PatchAppClientId"></a>
<a id="tocSpatchappclientid"></a>
<a id="tocspatchappclientid"></a>

```json
{
  "defaultLoginUrl": "string",
  "description": "string",
  "loginUrls": [
    "string"
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLoginUrl|string|false|none|none|
|description|string \| null|false|none|none|
|loginUrls|[string]|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PatchAssetId">PatchAssetId</h2>
<!-- backwards compatibility -->
<a id="schemapatchassetid"></a>
<a id="schema_PatchAssetId"></a>
<a id="tocSpatchassetid"></a>
<a id="tocspatchassetid"></a>

```json
{
  "content": "string",
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PatchDataBundleId">PatchDataBundleId</h2>
<!-- backwards compatibility -->
<a id="schemapatchdatabundleid"></a>
<a id="schema_PatchDataBundleId"></a>
<a id="tocSpatchdatabundleid"></a>
<a id="tocspatchdatabundleid"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PatchDatasetId">PatchDatasetId</h2>
<!-- backwards compatibility -->
<a id="schemapatchdatasetid"></a>
<a id="schema_PatchDatasetId"></a>
<a id="tocSpatchdatasetid"></a>
<a id="tocspatchdatasetid"></a>

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "description": "string",
  "metadata": {},
  "name": "string",
  "retentionInDays": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containsPersonallyIdentifiableInformation|boolean|false|none|none|
|description|string \| null|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|
|retentionInDays|integer|false|none|none|

<h2 id="tocS_PatchDocumentId">PatchDocumentId</h2>
<!-- backwards compatibility -->
<a id="schemapatchdocumentid"></a>
<a id="schema_PatchDocumentId"></a>
<a id="tocSpatchdocumentid"></a>
<a id="tocspatchdocumentid"></a>

```json
{
  "datasetId": "string",
  "description": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string|false|none|none|
|description|string \| null|false|none|none|
|groundTruth|[object]|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|
|retentionInDays|integer|false|none|none|

<h2 id="tocS_PatchModelId">PatchModelId</h2>
<!-- backwards compatibility -->
<a id="schemapatchmodelid"></a>
<a id="schema_PatchModelId"></a>
<a id="tocSpatchmodelid"></a>
<a id="tocspatchmodelid"></a>

```json
{
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "name": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "trainingId": "string",
  "width": 97
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|fieldConfig|object|false|none|none|
|height|integer|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|
|postprocessConfig|object|false|none|none|
|preprocessConfig|object|false|none|none|
|trainingId|string \| null|false|none|none|
|width|integer|false|none|none|

<h2 id="tocS_PatchOrganizationId">PatchOrganizationId</h2>
<!-- backwards compatibility -->
<a id="schemapatchorganizationid"></a>
<a id="schema_PatchOrganizationId"></a>
<a id="tocSpatchorganizationid"></a>
<a id="tocspatchorganizationid"></a>

```json
{
  "description": "string",
  "name": "string",
  "paymentMethodId": "string",
  "planId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|
|paymentMethodId|string|false|none|none|
|planId|string|false|none|none|

<h2 id="tocS_PatchPaymentMethodId">PatchPaymentMethodId</h2>
<!-- backwards compatibility -->
<a id="schemapatchpaymentmethodid"></a>
<a id="schema_PatchPaymentMethodId"></a>
<a id="tocSpatchpaymentmethodid"></a>
<a id="tocspatchpaymentmethodid"></a>

```json
{
  "description": "string",
  "name": "string",
  "stripeSetupIntentSecret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|
|stripeSetupIntentSecret|string|false|none|none|

<h2 id="tocS_PatchSecretId">PatchSecretId</h2>
<!-- backwards compatibility -->
<a id="schemapatchsecretid"></a>
<a id="schema_PatchSecretId"></a>
<a id="tocSpatchsecretid"></a>
<a id="tocspatchsecretid"></a>

```json
{
  "data": {},
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PatchTrainingId">PatchTrainingId</h2>
<!-- backwards compatibility -->
<a id="schemapatchtrainingid"></a>
<a id="schema_PatchTrainingId"></a>
<a id="tocSpatchtrainingid"></a>
<a id="tocspatchtrainingid"></a>

```json
{
  "deploymentEnvironmentId": "string",
  "description": "string",
  "metadata": {},
  "name": "string",
  "status": "cancelled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentEnvironmentId|string \| null|false|none|none|
|description|string \| null|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|

<h2 id="tocS_PatchTransistionExecutionId">PatchTransistionExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemapatchtransistionexecutionid"></a>
<a id="schema_PatchTransistionExecutionId"></a>
<a id="tocSpatchtransistionexecutionid"></a>
<a id="tocspatchtransistionexecutionid"></a>

```json
{
  "status": "string",
  "error": {
    "message": "string"
  },
  "output": {},
  "startTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|output|object|false|none|none|
|startTime|string \| null|false|none|none|
|status|string|false|none|none|
|*anyOf*|object|false|none|none|
|status|string|false|none|none|
|*anyOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|succeeded|
|status|failed|
|status|rejected|
|status|retry|

<h2 id="tocS_PatchTransitionId">PatchTransitionId</h2>
<!-- backwards compatibility -->
<a id="schemapatchtransitionid"></a>
<a id="schema_PatchTransitionId"></a>
<a id="tocSpatchtransitionid"></a>
<a id="tocspatchtransitionid"></a>

```json
{
  "assets": {
    "jsRemoteComponent": "string",
    "property1": "string",
    "property2": "string"
  },
  "description": "string",
  "environment": {
    "property1": "string",
    "property2": "string"
  },
  "environmentSecrets": [
    "string"
  ],
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {
    "cpu": 256,
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "memory": 512,
    "secretId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|object|false|none|none|
|description|string \| null|false|none|none|
|environment|object|false|none|none|
|environmentSecrets|[string]|false|none|none|
|inputJsonSchema|object|false|none|none|
|name|string \| null|false|none|none|
|outputJsonSchema|object|false|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_PatchUserId">PatchUserId</h2>
<!-- backwards compatibility -->
<a id="schemapatchuserid"></a>
<a id="schema_PatchUserId"></a>
<a id="tocSpatchuserid"></a>
<a id="tocspatchuserid"></a>

```json
{
  "avatar": "string",
  "metadata": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string \| null|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PatchWorkflowExecutionId">PatchWorkflowExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemapatchworkflowexecutionid"></a>
<a id="schema_PatchWorkflowExecutionId"></a>
<a id="tocSpatchworkflowexecutionid"></a>
<a id="tocspatchworkflowexecutionid"></a>

```json
{
  "nextTransitionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextTransitionId|string|true|none|none|

<h2 id="tocS_PatchWorkflowId">PatchWorkflowId</h2>
<!-- backwards compatibility -->
<a id="schemapatchworkflowid"></a>
<a id="schema_PatchWorkflowId"></a>
<a id="tocSpatchworkflowid"></a>
<a id="tocspatchworkflowid"></a>

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedConfig|object|false|none|none|
|description|string \| null|false|none|none|
|errorConfig|object|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PaymentMethod">PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_PaymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "details": {},
  "name": "string",
  "paymentMethodId": "string",
  "stripePublishableKey": "string",
  "stripeSetupIntentSecret": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|description|string \| null|true|none|none|
|details|object \| null|true|none|none|
|name|string \| null|true|none|none|
|paymentMethodId|string|true|none|none|
|stripePublishableKey|string \| null|false|none|none|
|stripeSetupIntentSecret|string \| null|false|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|

<h2 id="tocS_PaymentMethods">PaymentMethods</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethods"></a>
<a id="schema_PaymentMethods"></a>
<a id="tocSpaymentmethods"></a>
<a id="tocspaymentmethods"></a>

```json
{
  "nextToken": "string",
  "paymentMethods": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "details": {},
      "name": "string",
      "paymentMethodId": "string",
      "stripePublishableKey": "string",
      "stripeSetupIntentSecret": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|paymentMethods|[object]|true|none|none|

<h2 id="tocS_Plan">Plan</h2>
<!-- backwards compatibility -->
<a id="schemaplan"></a>
<a id="schema_Plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
{
  "activeModels": {},
  "available": true,
  "currency": "USD",
  "description": "string",
  "fieldPredictions": {},
  "gpuHours": {},
  "latest": 1,
  "license": {},
  "modelDeploymentUnits": {},
  "name": "string",
  "organizationId": "string",
  "planId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeModels|object \| null|false|none|none|
|available|boolean|true|none|none|
|currency|string|true|none|none|
|description|string \| null|false|none|none|
|fieldPredictions|object \| null|false|none|none|
|gpuHours|object \| null|false|none|none|
|latest|integer|true|none|none|
|license|object \| null|false|none|none|
|modelDeploymentUnits|object \| null|false|none|none|
|name|string \| null|true|none|none|
|organizationId|string \| null|true|none|none|
|planId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|USD|
|currency|EUR|
|currency|NOK|

<h2 id="tocS_Plans">Plans</h2>
<!-- backwards compatibility -->
<a id="schemaplans"></a>
<a id="schema_Plans"></a>
<a id="tocSplans"></a>
<a id="tocsplans"></a>

```json
{
  "nextToken": "string",
  "plans": [
    {
      "activeModels": {},
      "available": true,
      "currency": "USD",
      "description": "string",
      "fieldPredictions": {},
      "gpuHours": {},
      "latest": 1,
      "license": {},
      "modelDeploymentUnits": {},
      "name": "string",
      "organizationId": "string",
      "planId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|plans|[object]|true|none|none|

<h2 id="tocS_PostAppClients">PostAppClients</h2>
<!-- backwards compatibility -->
<a id="schemapostappclients"></a>
<a id="schema_PostAppClients"></a>
<a id="tocSpostappclients"></a>
<a id="tocspostappclients"></a>

```json
{
  "callbackUrls": [
    "string"
  ],
  "defaultLoginUrl": "string",
  "description": "string",
  "generateSecret": true,
  "loginUrls": [
    "string"
  ],
  "logoutUrls": [
    "string"
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrls|[string]|false|none|none|
|defaultLoginUrl|string|false|none|none|
|description|string \| null|false|none|none|
|generateSecret|boolean|false|none|none|
|loginUrls|[string]|false|none|none|
|logoutUrls|[string]|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PostAssets">PostAssets</h2>
<!-- backwards compatibility -->
<a id="schemapostassets"></a>
<a id="schema_PostAssets"></a>
<a id="tocSpostassets"></a>
<a id="tocspostassets"></a>

```json
{
  "content": "string",
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PostDataBundles">PostDataBundles</h2>
<!-- backwards compatibility -->
<a id="schemapostdatabundles"></a>
<a id="schema_PostDataBundles"></a>
<a id="tocSpostdatabundles"></a>
<a id="tocspostdatabundles"></a>

```json
{
  "datasetIds": [
    "string"
  ],
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetIds|[string]|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PostDatasets">PostDatasets</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasets"></a>
<a id="schema_PostDatasets"></a>
<a id="tocSpostdatasets"></a>
<a id="tocspostdatasets"></a>

```json
{
  "containsPersonallyIdentifiableInformation": true,
  "description": "string",
  "metadata": {},
  "name": "string",
  "retentionInDays": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containsPersonallyIdentifiableInformation|boolean|false|none|none|
|description|string \| null|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|
|retentionInDays|integer|false|none|none|

<h2 id="tocS_PostDocuments">PostDocuments</h2>
<!-- backwards compatibility -->
<a id="schemapostdocuments"></a>
<a id="schema_PostDocuments"></a>
<a id="tocSpostdocuments"></a>
<a id="tocspostdocuments"></a>

```json
{
  "consentId": "string",
  "content": "string",
  "contentType": "application/pdf",
  "datasetId": "string",
  "description": "string",
  "groundTruth": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "metadata": {},
  "name": "string",
  "retentionInDays": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentId|string|false|none|none|
|content|string|true|none|none|
|contentType|string \| null|true|none|none|
|datasetId|string|false|none|none|
|description|string \| null|false|none|none|
|groundTruth|[object]|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|
|retentionInDays|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|application/pdf|
|contentType|image/jpeg|
|contentType|image/png|
|contentType|image/tiff|

<h2 id="tocS_PostHeartbeats">PostHeartbeats</h2>
<!-- backwards compatibility -->
<a id="schemapostheartbeats"></a>
<a id="schema_PostHeartbeats"></a>
<a id="tocSpostheartbeats"></a>
<a id="tocspostheartbeats"></a>

```json
{}
```

<h2 id="tocS_PostModels">PostModels</h2>
<!-- backwards compatibility -->
<a id="schemapostmodels"></a>
<a id="schema_PostModels"></a>
<a id="tocSpostmodels"></a>
<a id="tocspostmodels"></a>

```json
{
  "description": "string",
  "fieldConfig": {
    "property1": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    },
    "property2": {
      "description": "string",
      "enum": [
        "string"
      ],
      "maxLength": 1,
      "type": "amount"
    }
  },
  "height": 97,
  "metadata": {},
  "name": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "preprocessConfig": {
    "autoRotate": true,
    "imageQuality": "LOW",
    "maxPages": 1
  },
  "width": 97
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|fieldConfig|object|true|none|none|
|height|integer|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|
|postprocessConfig|object|false|none|none|
|preprocessConfig|object|false|none|none|
|width|integer|false|none|none|

<h2 id="tocS_PostOrganizations">PostOrganizations</h2>
<!-- backwards compatibility -->
<a id="schemapostorganizations"></a>
<a id="schema_PostOrganizations"></a>
<a id="tocSpostorganizations"></a>
<a id="tocspostorganizations"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_PostPaymentMethods">PostPaymentMethods</h2>
<!-- backwards compatibility -->
<a id="schemapostpaymentmethods"></a>
<a id="schema_PostPaymentMethods"></a>
<a id="tocSpostpaymentmethods"></a>
<a id="tocspostpaymentmethods"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PostPredictions">PostPredictions</h2>
<!-- backwards compatibility -->
<a id="schemapostpredictions"></a>
<a id="schema_PostPredictions"></a>
<a id="tocSpostpredictions"></a>
<a id="tocspostpredictions"></a>

```json
{
  "autoRotate": true,
  "documentId": "string",
  "imageQuality": "LOW",
  "maxPages": 1,
  "modelId": "string",
  "postprocessConfig": {
    "strategy": "BEST_FIRST"
  },
  "rotation": 0,
  "trainingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRotate|boolean|false|none|none|
|documentId|string|true|none|none|
|imageQuality|string|false|none|none|
|maxPages|integer|false|none|none|
|modelId|string|true|none|none|
|postprocessConfig|object|false|none|none|
|rotation|integer|false|none|none|
|trainingId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|imageQuality|LOW|
|imageQuality|HIGH|
|rotation|0|
|rotation|90|
|rotation|180|
|rotation|270|

<h2 id="tocS_PostSecrets">PostSecrets</h2>
<!-- backwards compatibility -->
<a id="schemapostsecrets"></a>
<a id="schema_PostSecrets"></a>
<a id="tocSpostsecrets"></a>
<a id="tocspostsecrets"></a>

```json
{
  "data": {},
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PostSignUp">PostSignUp</h2>
<!-- backwards compatibility -->
<a id="schemapostsignup"></a>
<a id="schema_PostSignUp"></a>
<a id="tocSpostsignup"></a>
<a id="tocspostsignup"></a>

```json
{
  "email": "string",
  "name": "string",
  "password": "string",
  "reCaptchaResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|name|string \| null|false|none|none|
|password|string|true|none|none|
|reCaptchaResponse|string|true|none|none|

<h2 id="tocS_PostTrainings">PostTrainings</h2>
<!-- backwards compatibility -->
<a id="schemaposttrainings"></a>
<a id="schema_PostTrainings"></a>
<a id="tocSposttrainings"></a>
<a id="tocsposttrainings"></a>

```json
{
  "dataBundleIds": [
    "string"
  ],
  "dataScientistAssistance": true,
  "description": "string",
  "instanceType": "small-gpu",
  "metadata": {},
  "name": "string",
  "warmStartConfig": {
    "trainingId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataBundleIds|[string]|false|none|none|
|dataScientistAssistance|boolean|false|none|none|
|description|string \| null|false|none|none|
|instanceType|string \| null|false|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|
|warmStartConfig|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|instanceType|small-gpu|
|instanceType|medium-gpu|
|instanceType|large-gpu|

<h2 id="tocS_PostTransitionExecution">PostTransitionExecution</h2>
<!-- backwards compatibility -->
<a id="schemaposttransitionexecution"></a>
<a id="schema_PostTransitionExecution"></a>
<a id="tocSposttransitionexecution"></a>
<a id="tocsposttransitionexecution"></a>

```json
{}
```

<h2 id="tocS_PostTransitions">PostTransitions</h2>
<!-- backwards compatibility -->
<a id="schemaposttransitions"></a>
<a id="schema_PostTransitions"></a>
<a id="tocSposttransitions"></a>
<a id="tocsposttransitions"></a>

```json
{
  "description": "string",
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {
    "cpu": 256,
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "memory": 512,
    "secretId": "string"
  },
  "timeoutInSeconds": 60,
  "transitionType": "docker"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|inputJsonSchema|object|false|none|none|
|name|string \| null|false|none|none|
|outputJsonSchema|object|false|none|none|
|parameters|object|false|none|none|
|timeoutInSeconds|integer|false|none|none|
|transitionType|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transitionType|docker|
|transitionType|manual|

<h2 id="tocS_PostUsers">PostUsers</h2>
<!-- backwards compatibility -->
<a id="schemapostusers"></a>
<a id="schema_PostUsers"></a>
<a id="tocSpostusers"></a>
<a id="tocspostusers"></a>

```json
{
  "appClientId": "string",
  "avatar": "string",
  "email": "string",
  "metadata": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appClientId|string|false|none|none|
|avatar|string \| null|false|none|none|
|email|string|true|none|none|
|metadata|object|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PostWorkflowExecutions">PostWorkflowExecutions</h2>
<!-- backwards compatibility -->
<a id="schemapostworkflowexecutions"></a>
<a id="schema_PostWorkflowExecutions"></a>
<a id="tocSpostworkflowexecutions"></a>
<a id="tocspostworkflowexecutions"></a>

```json
{
  "input": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|true|none|none|

<h2 id="tocS_PostWorkflows">PostWorkflows</h2>
<!-- backwards compatibility -->
<a id="schemapostworkflows"></a>
<a id="schema_PostWorkflows"></a>
<a id="tocSpostworkflows"></a>
<a id="tocspostworkflows"></a>

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string",
  "specification": {
    "definition": {},
    "language": "ASL",
    "version": "1.0.0"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedConfig|object|false|none|none|
|description|string \| null|false|none|none|
|errorConfig|object|false|none|none|
|name|string \| null|false|none|none|
|specification|object|true|none|none|

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "documentId": "string",
  "inferenceTime": 0,
  "modelId": "string",
  "predictionId": "string",
  "predictions": [
    {
      "confidence": 0,
      "label": "string",
      "location": [
        0,
        0,
        0,
        0
      ],
      "page": 0,
      "value": "string"
    }
  ],
  "trainingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string \| null|false|none|none|
|createdTime|string \| null|false|none|none|
|documentId|string|true|none|none|
|inferenceTime|number|true|none|none|
|modelId|string|true|none|none|
|predictionId|string|true|none|none|
|predictions|[object]|true|none|none|
|trainingId|string \| null|false|none|none|

<h2 id="tocS_Predictions">Predictions</h2>
<!-- backwards compatibility -->
<a id="schemapredictions"></a>
<a id="schema_Predictions"></a>
<a id="tocSpredictions"></a>
<a id="tocspredictions"></a>

```json
{
  "nextToken": "string",
  "order": "ascending",
  "predictions": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "documentId": "string",
      "inferenceTime": 0,
      "modelId": "string",
      "predictionId": "string",
      "predictions": [
        {
          "confidence": 0,
          "label": "string",
          "location": [
            0,
            0,
            0,
            0
          ],
          "page": 0,
          "value": "string"
        }
      ],
      "trainingId": "string"
    }
  ],
  "sortBy": "createdTime"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|order|string|false|none|none|
|predictions|[object]|true|none|none|
|sortBy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|order|ascending|
|order|descending|
|sortBy|createdTime|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "createdTime": "string",
  "email": "string",
  "familyName": "string",
  "givenName": "string",
  "locale": "string",
  "metadata": {},
  "name": "string",
  "picture": "string",
  "profileId": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdTime|string \| null|false|none|none|
|email|string|false|none|none|
|familyName|string \| null|false|none|none|
|givenName|string \| null|false|none|none|
|locale|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|name|string \| null|false|none|none|
|picture|string \| null|false|none|none|
|profileId|string|true|none|none|
|updatedTime|string \| null|false|none|none|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "name": "string",
  "secretId": "string",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|description|string \| null|true|none|none|
|name|string \| null|true|none|none|
|secretId|string|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|

<h2 id="tocS_Secrets">Secrets</h2>
<!-- backwards compatibility -->
<a id="schemasecrets"></a>
<a id="schema_Secrets"></a>
<a id="tocSsecrets"></a>
<a id="tocssecrets"></a>

```json
{
  "nextToken": "string",
  "secrets": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "name": "string",
      "secretId": "string",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|secrets|[object]|true|none|none|

<h2 id="tocS_SignUp">SignUp</h2>
<!-- backwards compatibility -->
<a id="schemasignup"></a>
<a id="schema_SignUp"></a>
<a id="tocSsignup"></a>
<a id="tocssignup"></a>

```json
{
  "clientId": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Training">Training</h2>
<!-- backwards compatibility -->
<a id="schematraining"></a>
<a id="schema_Training"></a>
<a id="tocStraining"></a>
<a id="tocstraining"></a>

```json
{
  "createdBy": "string",
  "createdTime": "string",
  "dataBundleIds": [
    "string"
  ],
  "dataScientistAssistance": true,
  "deploymentEnvironmentId": "string",
  "description": "string",
  "evaluation": {},
  "gpuHours": 0,
  "instanceType": "small-gpu",
  "metadata": {},
  "modelId": "string",
  "name": "string",
  "status": "waiting-for-approval",
  "trainingId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "warmStartConfig": {
    "trainingId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|dataBundleIds|[string]|true|none|none|
|dataScientistAssistance|boolean|false|none|none|
|deploymentEnvironmentId|string \| null|false|none|none|
|description|string \| null|true|none|none|
|evaluation|object|true|none|none|
|gpuHours|number \| null|true|none|none|
|instanceType|string|true|none|none|
|metadata|object \| null|true|none|none|
|modelId|string|true|none|none|
|name|string \| null|true|none|none|
|status|string|true|none|none|
|trainingId|string|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|
|warmStartConfig|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|instanceType|small-gpu|
|instanceType|medium-gpu|
|instanceType|large-gpu|
|status|waiting-for-approval|
|status|pending|
|status|running|
|status|succeeded|
|status|failed|
|status|cancelled|

<h2 id="tocS_Trainings">Trainings</h2>
<!-- backwards compatibility -->
<a id="schematrainings"></a>
<a id="schema_Trainings"></a>
<a id="tocStrainings"></a>
<a id="tocstrainings"></a>

```json
{
  "nextToken": "string",
  "status": [
    "waiting-for-approval"
  ],
  "trainings": [
    {
      "createdBy": "string",
      "createdTime": "string",
      "dataBundleIds": [
        "string"
      ],
      "dataScientistAssistance": true,
      "deploymentEnvironmentId": "string",
      "description": "string",
      "evaluation": {},
      "gpuHours": 0,
      "instanceType": "small-gpu",
      "metadata": {},
      "modelId": "string",
      "name": "string",
      "status": "waiting-for-approval",
      "trainingId": "string",
      "updatedBy": "string",
      "updatedTime": "string",
      "warmStartConfig": {
        "trainingId": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|status|[string]|false|none|none|
|trainings|[object]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|waiting-for-approval|
|status|pending|
|status|running|
|status|succeeded|
|status|failed|
|status|cancelled|

<h2 id="tocS_Transition">Transition</h2>
<!-- backwards compatibility -->
<a id="schematransition"></a>
<a id="schema_Transition"></a>
<a id="tocStransition"></a>
<a id="tocstransition"></a>

```json
{
  "assets": {
    "jsRemoteComponent": "string",
    "property1": "string",
    "property2": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "inputJsonSchema": {},
  "name": "string",
  "outputJsonSchema": {},
  "parameters": {},
  "timeoutInSeconds": 60,
  "transitionId": "string",
  "transitionType": "docker",
  "updatedBy": "string",
  "updatedTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|object|false|none|none|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|description|string \| null|true|none|none|
|inputJsonSchema|object|false|none|none|
|name|string \| null|true|none|none|
|outputJsonSchema|object|false|none|none|
|parameters|object|true|none|none|
|timeoutInSeconds|integer|true|none|none|
|transitionId|string|true|none|none|
|transitionType|string|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transitionType|docker|
|transitionType|manual|

<h2 id="tocS_TransitionExecution">TransitionExecution</h2>
<!-- backwards compatibility -->
<a id="schematransitionexecution"></a>
<a id="schema_TransitionExecution"></a>
<a id="tocStransitionexecution"></a>
<a id="tocstransitionexecution"></a>

```json
{
  "completedBy": "string",
  "endTime": "string",
  "executionId": "string",
  "input": {},
  "logId": "string",
  "startTime": "string",
  "status": "running",
  "transitionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedBy|string \| null|true|none|none|
|endTime|string \| null|false|none|none|
|executionId|string|true|none|none|
|input|object \| null|true|none|none|
|logId|string \| null|false|none|none|
|startTime|string \| null|false|none|none|
|status|string|true|none|none|
|transitionId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|succeeded|
|status|failed|
|status|rejected|
|status|retry|

<h2 id="tocS_TransitionExecutions">TransitionExecutions</h2>
<!-- backwards compatibility -->
<a id="schematransitionexecutions"></a>
<a id="schema_TransitionExecutions"></a>
<a id="tocStransitionexecutions"></a>
<a id="tocstransitionexecutions"></a>

```json
{
  "executions": [
    {
      "completedBy": "string",
      "endTime": "string",
      "executionId": "string",
      "input": {},
      "logId": "string",
      "startTime": "string",
      "status": "running",
      "transitionId": "string"
    }
  ],
  "nextToken": "string",
  "status": [
    "running"
  ],
  "transitionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executions|[object]|true|none|none|
|nextToken|string \| null|true|none|none|
|status|[string]|false|none|none|
|transitionId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|succeeded|
|status|failed|
|status|rejected|
|status|retry|

<h2 id="tocS_Transitions">Transitions</h2>
<!-- backwards compatibility -->
<a id="schematransitions"></a>
<a id="schema_Transitions"></a>
<a id="tocStransitions"></a>
<a id="tocstransitions"></a>

```json
{
  "nextToken": "string",
  "transitionType": [
    "docker"
  ],
  "transitions": [
    {
      "assets": {
        "jsRemoteComponent": "string",
        "property1": "string",
        "property2": "string"
      },
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "inputJsonSchema": {},
      "name": "string",
      "outputJsonSchema": {},
      "parameters": {},
      "timeoutInSeconds": 60,
      "transitionId": "string",
      "transitionType": "docker",
      "updatedBy": "string",
      "updatedTime": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|transitionType|[string]|false|none|none|
|transitions|[object]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transitionType|docker|
|transitionType|manual|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "avatar": "string",
  "createdBy": "string",
  "createdTime": "string",
  "email": "string",
  "metadata": {},
  "name": "string",
  "profileId": "string",
  "updatedBy": "string",
  "updatedTime": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string \| null|false|none|none|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|email|string|true|none|none|
|metadata|object \| null|false|none|none|
|name|string \| null|false|none|none|
|profileId|string \| null|false|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|
|userId|string|true|none|none|

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
{
  "nextToken": "string",
  "users": [
    {
      "avatar": "string",
      "createdBy": "string",
      "createdTime": "string",
      "email": "string",
      "metadata": {},
      "name": "string",
      "profileId": "string",
      "updatedBy": "string",
      "updatedTime": "string",
      "userId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|users|[object]|true|none|none|

<h2 id="tocS_Workflow">Workflow</h2>
<!-- backwards compatibility -->
<a id="schemaworkflow"></a>
<a id="schema_Workflow"></a>
<a id="tocSworkflow"></a>
<a id="tocsworkflow"></a>

```json
{
  "completedConfig": {
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "environmentSecrets": [
      "string"
    ],
    "imageUrl": "string",
    "secretId": "string"
  },
  "createdBy": "string",
  "createdTime": "string",
  "description": "string",
  "errorConfig": {
    "email": "string",
    "manualRetry": true
  },
  "name": "string",
  "numberOfRunningExecutions": 0,
  "updatedBy": "string",
  "updatedTime": "string",
  "workflowId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedConfig|object \| null|true|none|none|
|createdBy|string \| null|true|none|none|
|createdTime|string \| null|true|none|none|
|description|string \| null|true|none|none|
|errorConfig|object \| null|true|none|none|
|name|string \| null|true|none|none|
|numberOfRunningExecutions|integer|true|none|none|
|updatedBy|string \| null|true|none|none|
|updatedTime|string \| null|true|none|none|
|workflowId|string|true|none|none|

<h2 id="tocS_WorkflowExecution">WorkflowExecution</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecution"></a>
<a id="schema_WorkflowExecution"></a>
<a id="tocSworkflowexecution"></a>
<a id="tocsworkflowexecution"></a>

```json
{
  "completedBy": [
    "string"
  ],
  "completedTaskLogId": "string",
  "endTime": "string",
  "events": [
    {}
  ],
  "executionId": "string",
  "input": {},
  "logId": "string",
  "output": {},
  "startTime": "string",
  "status": "running",
  "transitionExecutions": {},
  "workflowId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedBy|[string]|false|none|none|
|completedTaskLogId|string \| null|false|none|none|
|endTime|string \| null|true|none|none|
|events|[object]|false|none|none|
|executionId|string|true|none|none|
|input|object \| null|true|none|none|
|logId|string \| null|false|none|none|
|output|object \| null|true|none|none|
|startTime|string \| null|true|none|none|
|status|string|true|none|none|
|transitionExecutions|object \| null|true|none|none|
|workflowId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|succeeded|
|status|failed|
|status|rejected|
|status|retry|
|status|error|

<h2 id="tocS_WorkflowExecutions">WorkflowExecutions</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutions"></a>
<a id="schema_WorkflowExecutions"></a>
<a id="tocSworkflowexecutions"></a>
<a id="tocsworkflowexecutions"></a>

```json
{
  "executions": [
    {
      "completedBy": [
        "string"
      ],
      "completedTaskLogId": "string",
      "endTime": "string",
      "events": [
        {}
      ],
      "executionId": "string",
      "input": {},
      "logId": "string",
      "output": {},
      "startTime": "string",
      "status": "running",
      "transitionExecutions": {},
      "workflowId": "string"
    }
  ],
  "nextToken": "string",
  "order": "ascending",
  "sortBy": "startTime",
  "status": [
    "running"
  ],
  "workflowId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executions|[object]|true|none|none|
|nextToken|string \| null|true|none|none|
|order|string|false|none|none|
|sortBy|string|false|none|none|
|status|[string]|false|none|none|
|workflowId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|order|ascending|
|order|descending|
|sortBy|startTime|
|sortBy|endTime|
|status|running|
|status|succeeded|
|status|failed|
|status|rejected|
|status|retry|
|status|error|

<h2 id="tocS_Workflows">Workflows</h2>
<!-- backwards compatibility -->
<a id="schemaworkflows"></a>
<a id="schema_Workflows"></a>
<a id="tocSworkflows"></a>
<a id="tocsworkflows"></a>

```json
{
  "nextToken": "string",
  "workflows": [
    {
      "completedConfig": {
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "environmentSecrets": [
          "string"
        ],
        "imageUrl": "string",
        "secretId": "string"
      },
      "createdBy": "string",
      "createdTime": "string",
      "description": "string",
      "errorConfig": {
        "email": "string",
        "manualRetry": true
      },
      "name": "string",
      "numberOfRunningExecutions": 0,
      "updatedBy": "string",
      "updatedTime": "string",
      "workflowId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|string \| null|true|none|none|
|workflows|[object]|true|none|none|

<h2 id="tocS_groundTruthList">groundTruthList</h2>
<!-- backwards compatibility -->
<a id="schemagroundtruthlist"></a>
<a id="schema_groundTruthList"></a>
<a id="tocSgroundtruthlist"></a>
<a id="tocsgroundtruthlist"></a>

```json
[
  {
    "label": "string",
    "value": "string"
  }
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[object]|false|none|none|
|*anyOf*|[[object]]|false|none|none|
