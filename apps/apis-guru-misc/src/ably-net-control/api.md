<h1 id="control-api-v1">Control API v1 v1.0.14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Control API to manage your applications, namespaces, keys, queues, rules, and more.

Detailed information on using this API can be found in the Ably <a href="https://ably.com/documentation/control-api">developer documentation</a>.

Control API is currently in Beta.

Base URLs:

* <a href="https://control.ably.net/v1">https://control.ably.net/v1</a>

# Authentication

- HTTP Authentication, scheme: bearer Control API uses bearer authentication. You need to generate an access token for use with this API. More details can be found in the <a href="https://ably.com/documentation/control-api/#authentication">Ably documentation</a>.

<h1 id="control-api-v1-apps">apps</h1>

## Lists apps

> Code samples

```bash
curl https://example.com/accounts/string/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}/apps`

List all applications for the specified account ID.

<h3 id="lists-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|The account ID for which to retrieve the associated applications.|

> Example responses

> 200 Response

```json
[
  {
    "_links": {},
    "accountId": "WgRpOB",
    "apnsUseSandboxEndpoint": false,
    "id": "28AB6x",
    "name": "Default",
    "status": "enabled",
    "tlsOnly": true
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="lists-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of apps for the specified account are returned|Inline|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|Account not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<h3 id="lists-apps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[app_response](#schemaapp_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Creates an app

> Code samples

```bash
curl https://example.com/accounts/string/apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apnsCertificate": "string",
    "apnsPrivateKey": "string",
    "apnsUseSandboxEndpoint": true,
    "fcmKey": false,
    "name": "My App",
    "status": "enabled",
    "tlsOnly": true
  }'
```

`POST /accounts/{account_id}/apps`

Creates an application with the specified properties.

> Body parameter

```json
{
  "apnsCertificate": "string",
  "apnsPrivateKey": "string",
  "apnsUseSandboxEndpoint": true,
  "fcmKey": false,
  "name": "My App",
  "status": "enabled",
  "tlsOnly": true
}
```

<h3 id="creates-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|The account ID of the account in which to create the application.|
|body|body|[app_post](#schemaapp_post)|false|none|
|» apnsCertificate|body|string \| null|false|The Apple Push Notification service certificate.|
|» apnsPrivateKey|body|string \| null|false|The Apple Push Notification service private key.|
|» apnsUseSandboxEndpoint|body|boolean \| null|false|The Apple Push Notification service sandbox endpoint.|
|» fcmKey|body|string \| null|false|The Firebase Cloud Messaging key.|
|» name|body|string|true|The name of the application for your reference only.|
|» status|body|string|false|The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available.|
|» tlsOnly|body|boolean \| null|false|Enforce TLS for all connections.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|enabled|
|» status|disabled|

> Example responses

> 201 Response

```json
{
  "_links": {},
  "accountId": "WgRpOB",
  "apnsUseSandboxEndpoint": false,
  "id": "28AB6x",
  "name": "Default",
  "status": "enabled",
  "tlsOnly": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 422 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="creates-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|App created|[app_response](#schemaapp_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|Account not found|[error](#schemaerror)|
|422|Unprocessable Entity|Invalid request|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Deletes an app

> Code samples

```bash
curl https://example.com/apps/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /apps/{id}`

Deletes the application with the specified application ID.

<h3 id="deletes-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the application to be deleted.|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 422 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="deletes-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|App deleted|None|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|422|Unprocessable Entity|Invalid request|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Updates an app

> Code samples

```bash
curl https://example.com/apps/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apnsCertificate": "string",
    "apnsPrivateKey": "string",
    "apnsUseSandboxEndpoint": true,
    "fcmKey": false,
    "name": "My App",
    "status": "enabled",
    "tlsOnly": true
  }'
```

`PATCH /apps/{id}`

Updates the application with the specified application ID.

> Body parameter

```json
{
  "apnsCertificate": "string",
  "apnsPrivateKey": "string",
  "apnsUseSandboxEndpoint": true,
  "fcmKey": false,
  "name": "My App",
  "status": "enabled",
  "tlsOnly": true
}
```

<h3 id="updates-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of application to be updated.|
|body|body|[app_patch](#schemaapp_patch)|false|none|
|» apnsCertificate|body|string \| null|false|The Apple Push Notification service certificate.|
|» apnsPrivateKey|body|string \| null|false|The Apple Push Notification service private key.|
|» apnsUseSandboxEndpoint|body|boolean \| null|false|The Apple Push Notification service sandbox endpoint.|
|» fcmKey|body|string \| null|false|The Firebase Cloud Messaging key.|
|» name|body|string|false|The name of the application for your reference only.|
|» status|body|string|false|The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available.|
|» tlsOnly|body|boolean \| null|false|Enforce TLS for all connections.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|enabled|
|» status|disabled|

> Example responses

> 200 Response

```json
{
  "_links": {},
  "accountId": "WgRpOB",
  "apnsUseSandboxEndpoint": false,
  "id": "28AB6x",
  "name": "Default",
  "status": "enabled",
  "tlsOnly": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="updates-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App updated|[app_response](#schemaapp_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Updates app's APNs info from a `.p12` file

> Code samples

```bash
curl https://example.com/apps/string/pkcs12 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'p12File=@/path/to/file' \
  -F 'p12Pass=string'
```

`POST /apps/{id}/pkcs12`

Updates the application's Apple Push Notification service (APNs) information.

> Body parameter

```yaml
p12File: string
p12Pass: string
```

<h3 id="updates-apps-apns-info-from-a-p12-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The application ID.|
|body|body|[app_pkcs12](#schemaapp_pkcs12)|false|none|
|» p12File|body|string(binary)|true|The `.p12` file containing the app's APNs information.|
|» p12Pass|body|string|true|The password for the corresponding `.p12` file.|

> Example responses

> 200 Response

```json
{
  "_links": {},
  "accountId": "WgRpOB",
  "apnsUseSandboxEndpoint": false,
  "id": "28AB6x",
  "name": "Default",
  "status": "enabled",
  "tlsOnly": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="updates-apps-apns-info-from-a-p12-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App updated|[app_response](#schemaapp_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="control-api-v1-keys">keys</h1>

## Lists app keys

> Code samples

```bash
curl https://example.com/apps/string/keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/{app_id}/keys`

Lists the API keys associated with the application ID.

<h3 id="lists-app-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|

> Example responses

> 200 Response

```json
[
  {
    "appId": "28GY6a",
    "capability": {
      "property1": [
        "publish"
      ],
      "property2": [
        "publish"
      ]
    },
    "created": 1602844091815,
    "id": "string",
    "key": "string",
    "modified": 1614679682091,
    "name": "string"
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="lists-app-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key list|Inline|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<h3 id="lists-app-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[key_response](#schemakey_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Creates a key

> Code samples

```bash
curl https://example.com/apps/string/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capabilities": [
      "publish"
    ],
    "channels": "string",
    "name": "string"
  }'
```

`POST /apps/{app_id}/keys`

Creates an API key for the application specified.

> Body parameter

```json
{
  "capabilities": [
    "publish"
  ],
  "channels": "string",
  "name": "string"
}
```

<h3 id="creates-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|body|body|[key_post](#schemakey_post)|false|none|
|» capabilities|body|[string]|true|The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.|
|» channels|body|string|true|Specify the channels and queues that this key can be used with.|
|» name|body|string|true|The name for your API key. This is a friendly name for your reference.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» capabilities|publish|
|» capabilities|subscribe|
|» capabilities|history|
|» capabilities|presence|
|» capabilities|channel-metadata|
|» capabilities|push-admin|
|» capabilities|push-subscribe|
|» capabilities|statistics|

> Example responses

> 201 Response

```json
{
  "appId": "28GY6a",
  "capability": {
    "property1": [
      "publish"
    ],
    "property2": [
      "publish"
    ]
  },
  "created": 1602844091815,
  "id": "string",
  "key": "string",
  "modified": 1614679682091,
  "name": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 422 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="creates-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Key created|[key_response](#schemakey_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|422|Unprocessable Entity|Invalid request|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Updates a key

> Code samples

```bash
curl https://example.com/apps/string/keys/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capabilities": [
      "publish"
    ],
    "channels": "string",
    "name": "string"
  }'
```

`PATCH /apps/{app_id}/keys/{key_id}`

Update the API key with the specified key ID, for the application with the specified application ID.

> Body parameter

```json
{
  "capabilities": [
    "publish"
  ],
  "channels": "string",
  "name": "string"
}
```

<h3 id="updates-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|key_id|path|string|true|The API key ID.|
|body|body|[key_patch](#schemakey_patch)|false|none|
|» capabilities|body|[string]|false|The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.|
|» channels|body|string|false|Specify the channels and queues that this key can be used with.|
|» name|body|string|false|The name for your API key. This is a friendly name for your reference.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» capabilities|publish|
|» capabilities|subscribe|
|» capabilities|history|
|» capabilities|presence|
|» capabilities|channel-metadata|
|» capabilities|push-admin|
|» capabilities|push-subscribe|
|» capabilities|statistics|

> Example responses

> 200 Response

```json
{
  "appId": "28GY6a",
  "capability": {
    "property1": [
      "publish"
    ],
    "property2": [
      "publish"
    ]
  },
  "created": 1602844091815,
  "id": "string",
  "key": "string",
  "modified": 1614679682091,
  "name": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 422 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="updates-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key updated|[key_response](#schemakey_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|422|Unprocessable Entity|Invalid request|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Revokes a key

> Code samples

```bash
curl https://example.com/apps/string/keys/string/revoke \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /apps/{app_id}/keys/{key_id}/revoke`

Revokes the API key with the specified ID, with the Application ID. This deletes the key.

<h3 id="revokes-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|key_id|path|string|true|The key ID.|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="revokes-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key revoked|None|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|Not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="control-api-v1-namespaces">namespaces</h1>

## Lists namespaces

> Code samples

```bash
curl https://example.com/apps/string/namespaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/{app_id}/namespaces`

List the namespaces for the specified application ID.

<h3 id="lists-namespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|

> Example responses

> 200 Response

```json
[
  {
    "authenticated": false,
    "created": 1602844091815,
    "id": "namespace",
    "modified": 1614679682091,
    "persistLast": false,
    "persisted": false,
    "pushEnabled": false,
    "tlsOnly": false
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="lists-namespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Namespace list|Inline|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<h3 id="lists-namespaces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[namespace_response](#schemanamespace_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Creates a namespace

> Code samples

```bash
curl https://example.com/apps/string/namespaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authenticated": false,
    "id": "namespace",
    "persistLast": false,
    "persisted": false,
    "pushEnabled": false,
    "tlsOnly": false
  }'
```

`POST /apps/{app_id}/namespaces`

Creates a namespace for the specified application ID.

> Body parameter

```json
{
  "authenticated": false,
  "id": "namespace",
  "persistLast": false,
  "persisted": false,
  "pushEnabled": false,
  "tlsOnly": false
}
```

<h3 id="creates-a-namespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|body|body|[namespace_post](#schemanamespace_post)|false|none|
|» authenticated|body|boolean|false|If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably Knowledge base</a> for more details.|
|» id|body|string|true|The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`.|
|» persistLast|body|boolean|false|If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|» persisted|body|boolean|false|If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|» pushEnabled|body|boolean|false|If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.|
|» tlsOnly|body|boolean|false|If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.|

> Example responses

> 201 Response

```json
{
  "authenticated": false,
  "created": 1602844091815,
  "id": "namespace",
  "modified": 1614679682091,
  "persistLast": false,
  "persisted": false,
  "pushEnabled": false,
  "tlsOnly": false
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 422 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="creates-a-namespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Namespace created|[namespace_response](#schemanamespace_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|422|Unprocessable Entity|Invalid request|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Deletes a namespace

> Code samples

```bash
curl https://example.com/apps/string/namespaces/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /apps/{app_id}/namespaces/{namespace_id}`

Deletes the namespace with the specified ID, for the specified application ID.

<h3 id="deletes-a-namespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|namespace_id|path|string|true|The namespace ID.|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="deletes-a-namespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Namespace deleted|None|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|Not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Updates a namespace

> Code samples

```bash
curl https://example.com/apps/string/namespaces/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authenticated": false,
    "persistLast": false,
    "persisted": false,
    "pushEnabled": false,
    "tlsOnly": false
  }'
```

`PATCH /apps/{app_id}/namespaces/{namespace_id}`

Updates the namespace with the specified ID, for the application with the specified application ID.

> Body parameter

```json
{
  "authenticated": false,
  "persistLast": false,
  "persisted": false,
  "pushEnabled": false,
  "tlsOnly": false
}
```

<h3 id="updates-a-namespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|namespace_id|path|string|true|The namespace ID.|
|body|body|[namespace_patch](#schemanamespace_patch)|false|none|
|» authenticated|body|boolean|false|If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base/a> for more details.|
|» persistLast|body|boolean|false|If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|» persisted|body|boolean|false|If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|» pushEnabled|body|boolean|false|If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.|
|» tlsOnly|body|boolean|false|If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.|

> Example responses

> 200 Response

```json
{
  "authenticated": false,
  "created": 1602844091815,
  "id": "namespace",
  "modified": 1614679682091,
  "persistLast": false,
  "persisted": false,
  "pushEnabled": false,
  "tlsOnly": false
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="updates-a-namespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Namespace updated|[namespace_response](#schemanamespace_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|Not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="control-api-v1-queues">queues</h1>

## Lists queues

> Code samples

```bash
curl https://example.com/apps/string/queues \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/{app_id}/queues`

Lists the queues associated with the specified application ID.

<h3 id="lists-queues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|

> Example responses

> 200 Response

```json
[
  {
    "amqp": {
      "queueName": "28AB6w:My queue",
      "uri": "amqps://us-east-1-a-queue.ably.io:5671/shared"
    },
    "appId": "28AB6w",
    "deadletter": false,
    "deadletterId": "28AB6w:us-east-1-a:deadletter",
    "id": "28AB6w:us-east-1-a:My queue",
    "maxLength": 10000,
    "messages": {
      "ready": 0,
      "total": 0,
      "unacknowledged": 0
    },
    "name": "My queue",
    "region": "eu-west-1-a",
    "state": "Running",
    "stats": {
      "acknowledgementRate": 0,
      "deliveryRate": 0,
      "publishRate": 0
    },
    "stomp": {
      "destination": "/amqp/queue/28AB6w:My queue",
      "host": "shared",
      "uri": "stomp://us-east-1-a-queue.ably.io:61614"
    },
    "ttl": 60
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 503 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="lists-queues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Queue list|Inline|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|503|Service Unavailable|503 Service unavailable|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<h3 id="lists-queues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[queue_response](#schemaqueue_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Creates a queue

> Code samples

```bash
curl https://example.com/apps/string/queues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "maxLength": 10000,
    "name": "My queue",
    "region": "us-east-1-a",
    "ttl": 60
  }'
```

`POST /apps/{app_id}/queues`

Creates a queue for the application specified by application ID. The properties for the queue to be created are specified in the request body.

> Body parameter

```json
{
  "maxLength": 10000,
  "name": "My queue",
  "region": "us-east-1-a",
  "ttl": 60
}
```

<h3 id="creates-a-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|body|body|[queue](#schemaqueue)|false|none|
|» maxLength|body|integer|true|Message limit in number of messages.|
|» name|body|string|true|A friendly name for your queue.|
|» region|body|string|true|The data center region. US East (Virginia) or EU West (Ireland). Values are `us-east-1-a` or `eu-west-1-a`.|
|» ttl|body|integer|true|TTL in minutes.|

> Example responses

> 201 Response

```json
{
  "amqp": {
    "queueName": "28AB6w:My queue",
    "uri": "amqps://us-east-1-a-queue.ably.io:5671/shared"
  },
  "appId": "28AB6w",
  "deadletter": false,
  "deadletterId": "28AB6w:us-east-1-a:deadletter",
  "id": "28AB6w:us-east-1-a:My queue",
  "maxLength": 10000,
  "messages": {
    "ready": 0,
    "total": 0,
    "unacknowledged": 0
  },
  "name": "My queue",
  "region": "eu-west-1-a",
  "state": "Running",
  "stats": {
    "acknowledgementRate": 0,
    "deliveryRate": 0,
    "publishRate": 0
  },
  "stomp": {
    "destination": "/amqp/queue/28AB6w:My queue",
    "host": "shared",
    "uri": "stomp://us-east-1-a-queue.ably.io:61614"
  },
  "ttl": 60
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 422 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="creates-a-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Queue created|[queue_response](#schemaqueue_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|422|Unprocessable Entity|Invalid request|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Deletes a queue

> Code samples

```bash
curl https://example.com/apps/string/queues/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /apps/{app_id}/queues/{queue_id}`

Delete the queue with the specified queue name, from the application with the specified application ID.

<h3 id="deletes-a-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|queue_id|path|string|true|The queue ID.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 503 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="deletes-a-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Queue deleted|None|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|503|Service Unavailable|503 Service unavailable|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="control-api-v1-rules">rules</h1>

## Lists Reactor rules

> Code samples

```bash
curl https://example.com/apps/string/rules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/{app_id}/rules`

Lists the rules for the application specified by the application ID.

<h3 id="lists-reactor-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|

> Example responses

> 200 Response

```json
[
  {
    "_links": {},
    "appId": "28GY6a",
    "created": 1602844091815,
    "id": "83IzAB",
    "modified": 1614679682091,
    "requestMode": "single",
    "ruleType": "http",
    "source": {
      "channelFilter": "string",
      "type": "channel.message"
    },
    "status": "enabled",
    "target": {
      "enveloped": true,
      "format": "json",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "signingKeyId": "string",
      "url": "string"
    },
    "version": "string"
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="lists-reactor-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reactor rule list|Inline|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<h3 id="lists-reactor-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rule_response](#schemarule_response)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Creates a Reactor rule

> Code samples

```bash
curl https://example.com/apps/string/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestMode": "single",
    "ruleType": "http",
    "source": {
      "channelFilter": "string",
      "type": "channel.message"
    },
    "status": "enabled",
    "target": {
      "enveloped": true,
      "format": "json",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "signingKeyId": "string",
      "url": "string"
    }
  }'
```

`POST /apps/{app_id}/rules`

Creates a rule for the application with the specified application ID.

> Body parameter

```json
{
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

<h3 id="creates-a-reactor-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|body|body|[rule_post](#schemarule_post)|false|The rule properties.|
|» *oneOf*|body|[http_rule_post](#schemahttp_rule_post)|false|none|
|» *oneOf*|body|[ifttt_rule_post](#schemaifttt_rule_post)|false|none|
|» *oneOf*|body|[zapier_rule_post](#schemazapier_rule_post)|false|none|
|» *oneOf*|body|[cloudflare_worker_rule_post](#schemacloudflare_worker_rule_post)|false|none|
|» *oneOf*|body|[azure_function_rule_post](#schemaazure_function_rule_post)|false|none|
|» *oneOf*|body|[google_cloud_function_rule_post](#schemagoogle_cloud_function_rule_post)|false|none|
|» *oneOf*|body|[aws_lambda_rule_post](#schemaaws_lambda_rule_post)|false|none|
|» *oneOf*|body|[aws_kinesis_rule_post](#schemaaws_kinesis_rule_post)|false|none|
|» *oneOf*|body|[aws_sqs_rule_post](#schemaaws_sqs_rule_post)|false|none|
|» *oneOf*|body|[amqp_rule_post](#schemaamqp_rule_post)|false|none|
|» *oneOf*|body|[amqp_external_rule_post](#schemaamqp_external_rule_post)|false|none|
|» *oneOf*|body|[unsupported_rule_response](#schemaunsupported_rule_response)|false|none|

> Example responses

> 201 Response

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  },
  "version": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 422 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="creates-a-reactor-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Reactor rule created|[rule_response](#schemarule_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|422|Unprocessable Entity|Invalid request|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Gets a reactor rule by rule ID

> Code samples

```bash
curl https://example.com/apps/string/rules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/{app_id}/rules/{rule_id}`

Returns the rule specified by the rule ID, for the application specified by application ID.

<h3 id="gets-a-reactor-rule-by-rule-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|rule_id|path|string|true|The rule ID.|

> Example responses

> 200 Response

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  },
  "version": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="gets-a-reactor-rule-by-rule-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reactor rule|[rule_response](#schemarule_response)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|Not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Deletes a Reactor rule

> Code samples

```bash
curl https://example.com/apps/string/rules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /apps/{app_id}/rules/{rule_id}`

<h3 id="deletes-a-reactor-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|rule_id|path|string|true|The rule ID.|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="deletes-a-reactor-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Reactor rule deleted|None|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Updates a Reactor rule

> Code samples

```bash
curl https://example.com/apps/string/rules/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestMode": "single",
    "ruleType": "http",
    "source": {
      "channelFilter": "string",
      "type": "channel.message"
    },
    "status": "enabled",
    "target": {
      "enveloped": true,
      "format": "json",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "signingKeyId": "string",
      "url": "string"
    }
  }'
```

`PATCH /apps/{app_id}/rules/{rule_id}`

> Body parameter

```json
{
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

<h3 id="updates-a-reactor-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The application ID.|
|rule_id|path|string|true|The rule ID.|
|body|body|[rule_patch](#schemarule_patch)|false|Properties for the rule.|
|» *oneOf*|body|[http_rule_patch](#schemahttp_rule_patch)|false|none|
|» *oneOf*|body|[ifttt_rule_patch](#schemaifttt_rule_patch)|false|none|
|» *oneOf*|body|[zapier_rule_patch](#schemazapier_rule_patch)|false|none|
|» *oneOf*|body|[cloudflare_worker_rule_patch](#schemacloudflare_worker_rule_patch)|false|none|
|» *oneOf*|body|[azure_function_rule_patch](#schemaazure_function_rule_patch)|false|none|
|» *oneOf*|body|[google_cloud_function_rule_patch](#schemagoogle_cloud_function_rule_patch)|false|none|
|» *oneOf*|body|[aws_lambda_rule_patch](#schemaaws_lambda_rule_patch)|false|none|
|» *oneOf*|body|[aws_kinesis_rule_patch](#schemaaws_kinesis_rule_patch)|false|none|
|» *oneOf*|body|[aws_sqs_rule_patch](#schemaaws_sqs_rule_patch)|false|none|
|» *oneOf*|body|[amqp_rule_patch](#schemaamqp_rule_patch)|false|none|
|» *oneOf*|body|[amqp_external_rule_patch](#schemaamqp_external_rule_patch)|false|none|

> Example responses

> 200 Response

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  },
  "version": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 404 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 422 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 504 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="updates-a-reactor-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reactor rule updated|[rule_response](#schemarule_response)|
|400|Bad Request|Bad request|[error](#schemaerror)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|404|Not Found|App not found|[error](#schemaerror)|
|422|Unprocessable Entity|Invalid request|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="control-api-v1-tokens">tokens</h1>

## Get token details

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me`

> Example responses

> 200 Response

```json
{
  "account": {
    "id": "VpWaOA",
    "name": "Free account"
  },
  "token": {
    "capabilities": [
      "write:namespace",
      "read:namespace",
      "write:queue",
      "read:queue",
      "write:rule",
      "read:rule",
      "write:key",
      "read:key",
      "write:app",
      "read:app"
    ],
    "id": "C95837C9-184B-4CC2-8779-B769F960FADB",
    "name": "My Token"
  },
  "user": {
    "email": "string",
    "id": "C95837C9-184B-4CC2-8779-B769F960FADB"
  }
}
```

> 401 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

> 500 Response

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

<h3 id="get-token-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token details|[me](#schemame)|
|401|Unauthorized|Authentication failed|[error](#schemaerror)|
|500|Internal Server Error|Internal server error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

# Schemas

<h2 id="tocS_amqp_external_rule_patch">amqp_external_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemaamqp_external_rule_patch"></a>
<a id="schema_amqp_external_rule_patch"></a>
<a id="tocSamqp_external_rule_patch"></a>
<a id="tocsamqp_external_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "amqp/external",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mandatoryRoute": true,
    "messageTtl": 0,
    "persistentMessages": true,
    "routingKey": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|false|none|The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">Ably documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|amqp/external|
|status|enabled|
|status|disabled|

<h2 id="tocS_amqp_external_rule_post">amqp_external_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemaamqp_external_rule_post"></a>
<a id="schema_amqp_external_rule_post"></a>
<a id="tocSamqp_external_rule_post"></a>
<a id="tocsamqp_external_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "amqp/external",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "target": {
    "enveloped": true,
    "format": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mandatoryRoute": true,
    "messageTtl": 0,
    "persistentMessages": true,
    "routingKey": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|amqp/external|

<h2 id="tocS_amqp_external_rule_response">amqp_external_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemaamqp_external_rule_response"></a>
<a id="schema_amqp_external_rule_response"></a>
<a id="tocSamqp_external_rule_response"></a>
<a id="tocsamqp_external_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "amqp/external",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mandatoryRoute": true,
    "messageTtl": 0,
    "persistentMessages": true,
    "routingKey": "string",
    "url": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">Ably documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|amqp/external|
|status|enabled|
|status|disabled|

<h2 id="tocS_amqp_rule_patch">amqp_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemaamqp_rule_patch"></a>
<a id="schema_amqp_rule_patch"></a>
<a id="tocSamqp_rule_patch"></a>
<a id="tocsamqp_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "amqp",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "queueId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|false|none|The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|amqp|
|status|enabled|
|status|disabled|

<h2 id="tocS_amqp_rule_post">amqp_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemaamqp_rule_post"></a>
<a id="schema_amqp_rule_post"></a>
<a id="tocSamqp_rule_post"></a>
<a id="tocsamqp_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "amqp",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "queueId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|amqp|
|status|enabled|
|status|disabled|

<h2 id="tocS_amqp_rule_response">amqp_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemaamqp_rule_response"></a>
<a id="schema_amqp_rule_response"></a>
<a id="tocSamqp_rule_response"></a>
<a id="tocsamqp_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "amqp",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "queueId": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|amqp|
|status|enabled|
|status|disabled|

<h2 id="tocS_app_patch">app_patch</h2>
<!-- backwards compatibility -->
<a id="schemaapp_patch"></a>
<a id="schema_app_patch"></a>
<a id="tocSapp_patch"></a>
<a id="tocsapp_patch"></a>

```json
{
  "apnsCertificate": "string",
  "apnsPrivateKey": "string",
  "apnsUseSandboxEndpoint": true,
  "fcmKey": false,
  "name": "My App",
  "status": "enabled",
  "tlsOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apnsCertificate|string \| null|false|none|The Apple Push Notification service certificate.|
|apnsPrivateKey|string \| null|false|none|The Apple Push Notification service private key.|
|apnsUseSandboxEndpoint|boolean \| null|false|none|The Apple Push Notification service sandbox endpoint.|
|fcmKey|string \| null|false|none|The Firebase Cloud Messaging key.|
|name|string|false|none|The name of the application for your reference only.|
|status|string|false|none|The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available.|
|tlsOnly|boolean \| null|false|none|Enforce TLS for all connections.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_app_pkcs12">app_pkcs12</h2>
<!-- backwards compatibility -->
<a id="schemaapp_pkcs12"></a>
<a id="schema_app_pkcs12"></a>
<a id="tocSapp_pkcs12"></a>
<a id="tocsapp_pkcs12"></a>

```json
{
  "p12File": "string",
  "p12Pass": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|p12File|string(binary)|true|none|The `.p12` file containing the app's APNs information.|
|p12Pass|string|true|none|The password for the corresponding `.p12` file.|

<h2 id="tocS_app_post">app_post</h2>
<!-- backwards compatibility -->
<a id="schemaapp_post"></a>
<a id="schema_app_post"></a>
<a id="tocSapp_post"></a>
<a id="tocsapp_post"></a>

```json
{
  "apnsCertificate": "string",
  "apnsPrivateKey": "string",
  "apnsUseSandboxEndpoint": true,
  "fcmKey": false,
  "name": "My App",
  "status": "enabled",
  "tlsOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apnsCertificate|string \| null|false|none|The Apple Push Notification service certificate.|
|apnsPrivateKey|string \| null|false|none|The Apple Push Notification service private key.|
|apnsUseSandboxEndpoint|boolean \| null|false|none|The Apple Push Notification service sandbox endpoint.|
|fcmKey|string \| null|false|none|The Firebase Cloud Messaging key.|
|name|string|true|none|The name of the application for your reference only.|
|status|string|false|none|The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available.|
|tlsOnly|boolean \| null|false|none|Enforce TLS for all connections.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_app_response">app_response</h2>
<!-- backwards compatibility -->
<a id="schemaapp_response"></a>
<a id="schema_app_response"></a>
<a id="tocSapp_response"></a>
<a id="tocsapp_response"></a>

```json
{
  "_links": {},
  "accountId": "WgRpOB",
  "apnsUseSandboxEndpoint": false,
  "id": "28AB6x",
  "name": "Default",
  "status": "enabled",
  "tlsOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|A link self-referencing the app that has been created.|
|accountId|string|false|none|The ID of your Ably account.|
|apnsUseSandboxEndpoint|boolean \| null|false|none|Apple Push Notification service endpoint.|
|id|string|false|none|The application ID.|
|name|string|false|none|The application name.|
|status|string|false|none|The application status. Disabled applications will not accept new connections and will return an error to all clients.|
|tlsOnly|boolean \| null|false|none|Enforce TLS for all connections. This setting overrides any channel setting.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_access_keys">aws_access_keys</h2>
<!-- backwards compatibility -->
<a id="schemaaws_access_keys"></a>
<a id="schema_aws_access_keys"></a>
<a id="tocSaws_access_keys"></a>
<a id="tocsaws_access_keys"></a>

```json
{
  "accessKeyId": "string",
  "authenticationMode": "credentials",
  "secretAccessKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|string|true|none|The AWS key ID for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.|
|authenticationMode|string|false|none|Authentication method is using AWS credentials (AWS key ID and secret key).|
|secretAccessKey|string|true|none|The AWS secret key for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationMode|credentials|

<h2 id="tocS_aws_access_keys_response">aws_access_keys_response</h2>
<!-- backwards compatibility -->
<a id="schemaaws_access_keys_response"></a>
<a id="schema_aws_access_keys_response"></a>
<a id="tocSaws_access_keys_response"></a>
<a id="tocsaws_access_keys_response"></a>

```json
{
  "accessKeyId": "string",
  "authenticationMode": "credentials"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|string|false|none|The AWS key ID for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.|
|authenticationMode|string|false|none|Authentication method is using AWS credentials (AWS key ID and secret key).|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationMode|credentials|

<h2 id="tocS_aws_assume_role">aws_assume_role</h2>
<!-- backwards compatibility -->
<a id="schemaaws_assume_role"></a>
<a id="schema_aws_assume_role"></a>
<a id="tocSaws_assume_role"></a>
<a id="tocsaws_assume_role"></a>

```json
{
  "assumeRoleArn": "string",
  "authenticationMode": "assumeRole"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assumeRoleArn|string|true|none|If you are using the "ARN of an assumable role" authentication method, this is your Assume Role ARN. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.|
|authenticationMode|string|false|none|Authentication method is using the ARN of an assumable role. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationMode|assumeRole|

<h2 id="tocS_aws_kinesis_rule_patch">aws_kinesis_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemaaws_kinesis_rule_patch"></a>
<a id="schema_aws_kinesis_rule_patch"></a>
<a id="tocSaws_kinesis_rule_patch"></a>
<a id="tocsaws_kinesis_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "aws/kinesis",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials",
      "secretAccessKey": "string"
    },
    "enveloped": true,
    "format": "json",
    "partitionKey": "string",
    "region": "us-west-1",
    "streamName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|false|none|The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/kinesis|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_kinesis_rule_post">aws_kinesis_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemaaws_kinesis_rule_post"></a>
<a id="schema_aws_kinesis_rule_post"></a>
<a id="tocSaws_kinesis_rule_post"></a>
<a id="tocsaws_kinesis_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "aws/kinesis",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials",
      "secretAccessKey": "string"
    },
    "enveloped": true,
    "format": "json",
    "partitionKey": "string",
    "region": "us-west-1",
    "streamName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/kinesis|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_kinesis_rule_response">aws_kinesis_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemaaws_kinesis_rule_response"></a>
<a id="schema_aws_kinesis_rule_response"></a>
<a id="tocSaws_kinesis_rule_response"></a>
<a id="tocsaws_kinesis_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "aws/kinesis",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials"
    },
    "enveloped": true,
    "format": "json",
    "partitionKey": "string",
    "region": "us-west-1",
    "streamName": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/kinesis|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_lambda_rule_patch">aws_lambda_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemaaws_lambda_rule_patch"></a>
<a id="schema_aws_lambda_rule_patch"></a>
<a id="tocSaws_lambda_rule_patch"></a>
<a id="tocsaws_lambda_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "aws/lambda",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials",
      "secretAccessKey": "string"
    },
    "enveloped": true,
    "functionName": "string",
    "region": "us-west-1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">Ably documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/lambda|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_lambda_rule_post">aws_lambda_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemaaws_lambda_rule_post"></a>
<a id="schema_aws_lambda_rule_post"></a>
<a id="tocSaws_lambda_rule_post"></a>
<a id="tocsaws_lambda_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "aws/lambda",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials",
      "secretAccessKey": "string"
    },
    "enveloped": true,
    "functionName": "string",
    "region": "us-west-1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/lambda|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_lambda_rule_response">aws_lambda_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemaaws_lambda_rule_response"></a>
<a id="schema_aws_lambda_rule_response"></a>
<a id="tocSaws_lambda_rule_response"></a>
<a id="tocsaws_lambda_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "aws/lambda",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials"
    },
    "enveloped": true,
    "format": "string",
    "functionName": "string",
    "region": "us-west-1"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/lambda|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_sqs_rule_patch">aws_sqs_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemaaws_sqs_rule_patch"></a>
<a id="schema_aws_sqs_rule_patch"></a>
<a id="tocSaws_sqs_rule_patch"></a>
<a id="tocsaws_sqs_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "aws/sqs",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials",
      "secretAccessKey": "string"
    },
    "awsAccountId": "string",
    "enveloped": true,
    "format": "string",
    "queueName": "string",
    "region": "us-west-1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|false|none|The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/sqs|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_sqs_rule_post">aws_sqs_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemaaws_sqs_rule_post"></a>
<a id="schema_aws_sqs_rule_post"></a>
<a id="tocSaws_sqs_rule_post"></a>
<a id="tocsaws_sqs_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "aws/sqs",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials",
      "secretAccessKey": "string"
    },
    "awsAccountId": "string",
    "enveloped": true,
    "format": "string",
    "queueName": "string",
    "region": "us-west-1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/sqs|
|status|enabled|
|status|disabled|

<h2 id="tocS_aws_sqs_rule_response">aws_sqs_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemaaws_sqs_rule_response"></a>
<a id="schema_aws_sqs_rule_response"></a>
<a id="tocSaws_sqs_rule_response"></a>
<a id="tocsaws_sqs_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "aws/sqs",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "authentication": {
      "accessKeyId": "string",
      "authenticationMode": "credentials"
    },
    "awsAccountId": "string",
    "enveloped": true,
    "format": "string",
    "queueName": "string",
    "region": "us-west-1"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|aws/sqs|
|status|enabled|
|status|disabled|

<h2 id="tocS_azure_function_rule_patch">azure_function_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemaazure_function_rule_patch"></a>
<a id="schema_azure_function_rule_patch"></a>
<a id="tocSazure_function_rule_patch"></a>
<a id="tocsazure_function_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/azure-function",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "azureAppId": "d1e9f419-c438-6032b32df979",
    "azureFunctionName": "string",
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|false|none|The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/azure-function|
|status|enabled|
|status|disabled|

<h2 id="tocS_azure_function_rule_post">azure_function_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemaazure_function_rule_post"></a>
<a id="schema_azure_function_rule_post"></a>
<a id="tocSazure_function_rule_post"></a>
<a id="tocsazure_function_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/azure-function",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "azureAppId": "d1e9f419-c438-6032b32df979",
    "azureFunctionName": "string",
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/azure-function|
|status|enabled|
|status|disabled|

<h2 id="tocS_azure_function_rule_response">azure_function_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemaazure_function_rule_response"></a>
<a id="schema_azure_function_rule_response"></a>
<a id="tocSazure_function_rule_response"></a>
<a id="tocsazure_function_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http/azure-function",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "azureAppId": "d1e9f419-c438-6032b32df979",
    "azureFunctionName": "string",
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/azure-function|
|status|enabled|
|status|disabled|

<h2 id="tocS_cloudflare_worker_rule_patch">cloudflare_worker_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemacloudflare_worker_rule_patch"></a>
<a id="schema_cloudflare_worker_rule_patch"></a>
<a id="tocScloudflare_worker_rule_patch"></a>
<a id="tocscloudflare_worker_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/cloudflare-worker",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|false|none|The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/cloudflare-worker|
|status|enabled|
|status|disabled|

<h2 id="tocS_cloudflare_worker_rule_post">cloudflare_worker_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemacloudflare_worker_rule_post"></a>
<a id="schema_cloudflare_worker_rule_post"></a>
<a id="tocScloudflare_worker_rule_post"></a>
<a id="tocscloudflare_worker_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/cloudflare-worker",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/cloudflare-worker|
|status|enabled|
|status|disabled|

<h2 id="tocS_cloudflare_worker_rule_response">cloudflare_worker_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemacloudflare_worker_rule_response"></a>
<a id="schema_cloudflare_worker_rule_response"></a>
<a id="tocScloudflare_worker_rule_response"></a>
<a id="tocscloudflare_worker_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http/cloudflare-worker",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/cloudflare-worker|
|status|enabled|
|status|disabled|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "details": {},
  "href": "string",
  "message": "string",
  "statusCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|The HTTP status code returned.|
|details|object \| null|false|none|Any additional details about the error message.|
|href|string|true|none|The URL to documentation about the error code.|
|message|string|true|none|The error message.|
|statusCode|integer|true|none|The Ably error code.|

<h2 id="tocS_google_cloud_function_rule_patch">google_cloud_function_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemagoogle_cloud_function_rule_patch"></a>
<a id="schema_google_cloud_function_rule_patch"></a>
<a id="tocSgoogle_cloud_function_rule_patch"></a>
<a id="tocsgoogle_cloud_function_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/google-cloud-function",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "functionName": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "projectId": "string",
    "region": "us-west1",
    "signingKeyId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|false|none|The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/google-cloud-function|
|status|enabled|
|status|disabled|

<h2 id="tocS_google_cloud_function_rule_post">google_cloud_function_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemagoogle_cloud_function_rule_post"></a>
<a id="schema_google_cloud_function_rule_post"></a>
<a id="tocSgoogle_cloud_function_rule_post"></a>
<a id="tocsgoogle_cloud_function_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/google-cloud-function",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "target": {
    "enveloped": true,
    "format": "json",
    "functionName": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "projectId": "string",
    "region": "us-west1",
    "signingKeyId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/google-cloud-function|

<h2 id="tocS_google_cloud_function_rule_response">google_cloud_function_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemagoogle_cloud_function_rule_response"></a>
<a id="schema_google_cloud_function_rule_response"></a>
<a id="tocSgoogle_cloud_function_rule_response"></a>
<a id="tocsgoogle_cloud_function_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http/google-cloud-function",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "functionName": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "projectId": "string",
    "region": "us-west1",
    "signingKeyId": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/google-cloud-function|
|status|enabled|
|status|disabled|

<h2 id="tocS_http_rule_patch">http_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemahttp_rule_patch"></a>
<a id="schema_http_rule_patch"></a>
<a id="tocShttp_rule_patch"></a>
<a id="tocshttp_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|false|none|The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http|
|status|enabled|
|status|disabled|

<h2 id="tocS_http_rule_post">http_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemahttp_rule_post"></a>
<a id="schema_http_rule_post"></a>
<a id="tocShttp_rule_post"></a>
<a id="tocshttp_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http|
|status|enabled|
|status|disabled|

<h2 id="tocS_http_rule_response">http_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemahttp_rule_response"></a>
<a id="schema_http_rule_response"></a>
<a id="tocShttp_rule_response"></a>
<a id="tocshttp_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http|
|status|enabled|
|status|disabled|

<h2 id="tocS_ifttt_rule_patch">ifttt_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemaifttt_rule_patch"></a>
<a id="schema_ifttt_rule_patch"></a>
<a id="tocSifttt_rule_patch"></a>
<a id="tocsifttt_rule_patch"></a>

```json
null
```

<h2 id="tocS_ifttt_rule_post">ifttt_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemaifttt_rule_post"></a>
<a id="schema_ifttt_rule_post"></a>
<a id="tocSifttt_rule_post"></a>
<a id="tocsifttt_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/ifttt",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "eventName": "string",
    "webhookKey": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|http/ifttt|
|status|enabled|
|status|disabled|

<h2 id="tocS_ifttt_rule_response">ifttt_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemaifttt_rule_response"></a>
<a id="schema_ifttt_rule_response"></a>
<a id="tocSifttt_rule_response"></a>
<a id="tocsifttt_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http/ifttt",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "eventName": "string",
    "webhookKey": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|ruleType|http/ifttt|
|status|enabled|
|status|disabled|

<h2 id="tocS_key_patch">key_patch</h2>
<!-- backwards compatibility -->
<a id="schemakey_patch"></a>
<a id="schema_key_patch"></a>
<a id="tocSkey_patch"></a>
<a id="tocskey_patch"></a>

```json
{
  "capabilities": [
    "publish"
  ],
  "channels": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|false|none|The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.|
|channels|string|false|none|Specify the channels and queues that this key can be used with.|
|name|string|false|none|The name for your API key. This is a friendly name for your reference.|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|publish|
|capabilities|subscribe|
|capabilities|history|
|capabilities|presence|
|capabilities|channel-metadata|
|capabilities|push-admin|
|capabilities|push-subscribe|
|capabilities|statistics|

<h2 id="tocS_key_post">key_post</h2>
<!-- backwards compatibility -->
<a id="schemakey_post"></a>
<a id="schema_key_post"></a>
<a id="tocSkey_post"></a>
<a id="tocskey_post"></a>

```json
{
  "capabilities": [
    "publish"
  ],
  "channels": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|true|none|The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.|
|channels|string|true|none|Specify the channels and queues that this key can be used with.|
|name|string|true|none|The name for your API key. This is a friendly name for your reference.|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|publish|
|capabilities|subscribe|
|capabilities|history|
|capabilities|presence|
|capabilities|channel-metadata|
|capabilities|push-admin|
|capabilities|push-subscribe|
|capabilities|statistics|

<h2 id="tocS_key_response">key_response</h2>
<!-- backwards compatibility -->
<a id="schemakey_response"></a>
<a id="schema_key_response"></a>
<a id="tocSkey_response"></a>
<a id="tocskey_response"></a>

```json
{
  "appId": "28GY6a",
  "capability": {
    "property1": [
      "publish"
    ],
    "property2": [
      "publish"
    ]
  },
  "created": 1602844091815,
  "id": "string",
  "key": "string",
  "modified": 1614679682091,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|The Ably application ID which this key is associated with.|
|capability|object|false|none|The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.|
|created|integer|false|none|Unix timestamp representing the date and time of creation of the key.|
|id|string|false|none|The key ID.|
|key|string|false|none|The complete API key including API secret.|
|modified|integer|false|none|Unix timestamp representing the date and time of the last modification of the key.|
|name|string|false|none|The name of the application this key is associated with.|

<h2 id="tocS_me">me</h2>
<!-- backwards compatibility -->
<a id="schemame"></a>
<a id="schema_me"></a>
<a id="tocSme"></a>
<a id="tocsme"></a>

```json
{
  "account": {
    "id": "VpWaOA",
    "name": "Free account"
  },
  "token": {
    "capabilities": [
      "write:namespace",
      "read:namespace",
      "write:queue",
      "read:queue",
      "write:rule",
      "read:rule",
      "write:key",
      "read:key",
      "write:app",
      "read:app"
    ],
    "id": "C95837C9-184B-4CC2-8779-B769F960FADB",
    "name": "My Token"
  },
  "user": {
    "email": "string",
    "id": "C95837C9-184B-4CC2-8779-B769F960FADB"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|object|false|none|none|
|token|object|false|none|none|
|user|object|false|none|none|

<h2 id="tocS_namespace_patch">namespace_patch</h2>
<!-- backwards compatibility -->
<a id="schemanamespace_patch"></a>
<a id="schema_namespace_patch"></a>
<a id="tocSnamespace_patch"></a>
<a id="tocsnamespace_patch"></a>

```json
{
  "authenticated": false,
  "persistLast": false,
  "persisted": false,
  "pushEnabled": false,
  "tlsOnly": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticated|boolean|false|none|If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base/a> for more details.|
|persistLast|boolean|false|none|If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|persisted|boolean|false|none|If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|pushEnabled|boolean|false|none|If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.|
|tlsOnly|boolean|false|none|If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.|

<h2 id="tocS_namespace_post">namespace_post</h2>
<!-- backwards compatibility -->
<a id="schemanamespace_post"></a>
<a id="schema_namespace_post"></a>
<a id="tocSnamespace_post"></a>
<a id="tocsnamespace_post"></a>

```json
{
  "authenticated": false,
  "id": "namespace",
  "persistLast": false,
  "persisted": false,
  "pushEnabled": false,
  "tlsOnly": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticated|boolean|false|none|If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably Knowledge base</a> for more details.|
|id|string|true|none|The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`.|
|persistLast|boolean|false|none|If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|persisted|boolean|false|none|If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|pushEnabled|boolean|false|none|If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.|
|tlsOnly|boolean|false|none|If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.|

<h2 id="tocS_namespace_response">namespace_response</h2>
<!-- backwards compatibility -->
<a id="schemanamespace_response"></a>
<a id="schema_namespace_response"></a>
<a id="tocSnamespace_response"></a>
<a id="tocsnamespace_response"></a>

```json
{
  "authenticated": false,
  "created": 1602844091815,
  "id": "namespace",
  "modified": 1614679682091,
  "persistLast": false,
  "persisted": false,
  "pushEnabled": false,
  "tlsOnly": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticated|boolean|false|none|If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base</a> for more details.|
|created|integer|false|none|Unix timestamp representing the date and time of creation of the namespace.|
|id|string|false|none|The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`.|
|modified|integer|false|none|Unix timestamp representing the date and time of last modification of the namespace.|
|persistLast|boolean|false|none|If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|persisted|boolean|false|none|If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.|
|pushEnabled|boolean|false|none|If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.|
|tlsOnly|boolean|false|none|If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.|

<h2 id="tocS_queue">queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
{
  "maxLength": 10000,
  "name": "My queue",
  "region": "us-east-1-a",
  "ttl": 60
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLength|integer|true|none|Message limit in number of messages.|
|name|string|true|none|A friendly name for your queue.|
|region|string|true|none|The data center region. US East (Virginia) or EU West (Ireland). Values are `us-east-1-a` or `eu-west-1-a`.|
|ttl|integer|true|none|TTL in minutes.|

<h2 id="tocS_queue_response">queue_response</h2>
<!-- backwards compatibility -->
<a id="schemaqueue_response"></a>
<a id="schema_queue_response"></a>
<a id="tocSqueue_response"></a>
<a id="tocsqueue_response"></a>

```json
{
  "amqp": {
    "queueName": "28AB6w:My queue",
    "uri": "amqps://us-east-1-a-queue.ably.io:5671/shared"
  },
  "appId": "28AB6w",
  "deadletter": false,
  "deadletterId": "28AB6w:us-east-1-a:deadletter",
  "id": "28AB6w:us-east-1-a:My queue",
  "maxLength": 10000,
  "messages": {
    "ready": 0,
    "total": 0,
    "unacknowledged": 0
  },
  "name": "My queue",
  "region": "eu-west-1-a",
  "state": "Running",
  "stats": {
    "acknowledgementRate": 0,
    "deliveryRate": 0,
    "publishRate": 0
  },
  "stomp": {
    "destination": "/amqp/queue/28AB6w:My queue",
    "host": "shared",
    "uri": "stomp://us-east-1-a-queue.ably.io:61614"
  },
  "ttl": 60
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amqp|object|false|none|none|
|appId|string|false|none|The Ably application ID.|
|deadletter|boolean|false|none|A boolean that indicates whether this is a dead letter queue or not.|
|deadletterId|string \| null|false|none|none|
|id|string|false|none|The ID of the Ably queue|
|maxLength|integer|false|none|Message limit in number of messages.|
|messages|object|false|none|Details of messages in the queue.|
|name|string|false|none|The friendly name of the queue.|
|region|string|false|none|The data center region for the queue.|
|state|string|false|none|The current state of the queue.|
|stats|object|false|none|none|
|stomp|object|false|none|none|
|ttl|integer|false|none|TTL in minutes.|

<h2 id="tocS_rule_attributes">rule_attributes</h2>
<!-- backwards compatibility -->
<a id="schemarule_attributes"></a>
<a id="schema_rule_attributes"></a>
<a id="tocSrule_attributes"></a>
<a id="tocsrule_attributes"></a>

```json
{
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "status": "enabled",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_rule_patch">rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemarule_patch"></a>
<a id="schema_rule_patch"></a>
<a id="tocSrule_patch"></a>
<a id="tocsrule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[http_rule_patch](#schemahttp_rule_patch)|false|none|none|
|*oneOf*|[ifttt_rule_patch](#schemaifttt_rule_patch)|false|none|none|
|*oneOf*|[zapier_rule_patch](#schemazapier_rule_patch)|false|none|none|
|*oneOf*|[cloudflare_worker_rule_patch](#schemacloudflare_worker_rule_patch)|false|none|none|
|*oneOf*|[azure_function_rule_patch](#schemaazure_function_rule_patch)|false|none|none|
|*oneOf*|[google_cloud_function_rule_patch](#schemagoogle_cloud_function_rule_patch)|false|none|none|
|*oneOf*|[aws_lambda_rule_patch](#schemaaws_lambda_rule_patch)|false|none|none|
|*oneOf*|[aws_kinesis_rule_patch](#schemaaws_kinesis_rule_patch)|false|none|none|
|*oneOf*|[aws_sqs_rule_patch](#schemaaws_sqs_rule_patch)|false|none|none|
|*oneOf*|[amqp_rule_patch](#schemaamqp_rule_patch)|false|none|none|
|*oneOf*|[amqp_external_rule_patch](#schemaamqp_external_rule_patch)|false|none|none|

<h2 id="tocS_rule_post">rule_post</h2>
<!-- backwards compatibility -->
<a id="schemarule_post"></a>
<a id="schema_rule_post"></a>
<a id="tocSrule_post"></a>
<a id="tocsrule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[http_rule_post](#schemahttp_rule_post)|false|none|none|
|*oneOf*|[ifttt_rule_post](#schemaifttt_rule_post)|false|none|none|
|*oneOf*|[zapier_rule_post](#schemazapier_rule_post)|false|none|none|
|*oneOf*|[cloudflare_worker_rule_post](#schemacloudflare_worker_rule_post)|false|none|none|
|*oneOf*|[azure_function_rule_post](#schemaazure_function_rule_post)|false|none|none|
|*oneOf*|[google_cloud_function_rule_post](#schemagoogle_cloud_function_rule_post)|false|none|none|
|*oneOf*|[aws_lambda_rule_post](#schemaaws_lambda_rule_post)|false|none|none|
|*oneOf*|[aws_kinesis_rule_post](#schemaaws_kinesis_rule_post)|false|none|none|
|*oneOf*|[aws_sqs_rule_post](#schemaaws_sqs_rule_post)|false|none|none|
|*oneOf*|[amqp_rule_post](#schemaamqp_rule_post)|false|none|none|
|*oneOf*|[amqp_external_rule_post](#schemaamqp_external_rule_post)|false|none|none|
|*oneOf*|[unsupported_rule_response](#schemaunsupported_rule_response)|false|none|none|

<h2 id="tocS_rule_response">rule_response</h2>
<!-- backwards compatibility -->
<a id="schemarule_response"></a>
<a id="schema_rule_response"></a>
<a id="tocSrule_response"></a>
<a id="tocsrule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "enveloped": true,
    "format": "json",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[http_rule_response](#schemahttp_rule_response)|false|none|none|
|*oneOf*|[ifttt_rule_response](#schemaifttt_rule_response)|false|none|none|
|*oneOf*|[zapier_rule_response](#schemazapier_rule_response)|false|none|none|
|*oneOf*|[cloudflare_worker_rule_response](#schemacloudflare_worker_rule_response)|false|none|none|
|*oneOf*|[azure_function_rule_response](#schemaazure_function_rule_response)|false|none|none|
|*oneOf*|[google_cloud_function_rule_response](#schemagoogle_cloud_function_rule_response)|false|none|none|
|*oneOf*|[aws_lambda_rule_response](#schemaaws_lambda_rule_response)|false|none|none|
|*oneOf*|[aws_kinesis_rule_response](#schemaaws_kinesis_rule_response)|false|none|none|
|*oneOf*|[aws_sqs_rule_response](#schemaaws_sqs_rule_response)|false|none|none|
|*oneOf*|[amqp_rule_response](#schemaamqp_rule_response)|false|none|none|
|*oneOf*|[amqp_external_rule_response](#schemaamqp_external_rule_response)|false|none|none|

<h2 id="tocS_rule_source">rule_source</h2>
<!-- backwards compatibility -->
<a id="schemarule_source"></a>
<a id="schema_rule_source"></a>
<a id="tocSrule_source"></a>
<a id="tocsrule_source"></a>

```json
{
  "channelFilter": "string",
  "type": "channel.message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelFilter|string|true|none|This field allows you to filter your rule based on a regular expression that is matched against the complete channel name. Leave this empty if you want the rule to apply to all channels.|
|type|string|true|none|The type `channel.message` delivers all messages published on a channel. The type `channel.presence` delivers all enter, update and leave events for members present on a channel. The type `channel.lifecycle` events for this rule type are currently not supported. Get in touch (https://ably.com/contact) if you need this feature. The type `channel.occupancy` delivers all occupancy events for the channel.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|channel.message|
|type|channel.presence|
|type|channel.lifecycle|
|type|channel.occupancy|

<h2 id="tocS_rule_source_patch">rule_source_patch</h2>
<!-- backwards compatibility -->
<a id="schemarule_source_patch"></a>
<a id="schema_rule_source_patch"></a>
<a id="tocSrule_source_patch"></a>
<a id="tocsrule_source_patch"></a>

```json
{
  "channelFilter": "string",
  "type": "channel.message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelFilter|string|false|none|This field allows you to filter your rule based on a regular expression that is matched against the complete channel name. Leave this empty if you want the rule to apply to all channels.|
|type|string|false|none|The type `channel.message` delivers all messages published on a channel. The type `channel.presence` delivers all enter, update and leave events for members present on a channel. The type `channel.lifecycle` events for this rule type are currently not supported. Get in touch (https://ably.com/contact) if you need this feature. The type `channel.occupancy` delivers all occupancy events for the channel.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|channel.message|
|type|channel.presence|
|type|channel.lifecycle|
|type|channel.occupancy|

<h2 id="tocS_unsupported_rule_response">unsupported_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemaunsupported_rule_response"></a>
<a id="schema_unsupported_rule_response"></a>
<a id="tocSunsupported_rule_response"></a>
<a id="tocsunsupported_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "unsupported",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "url": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|This rule type is currently unsupported.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|unsupported|
|status|enabled|
|status|disabled|

<h2 id="tocS_zapier_rule_patch">zapier_rule_patch</h2>
<!-- backwards compatibility -->
<a id="schemazapier_rule_patch"></a>
<a id="schema_zapier_rule_patch"></a>
<a id="tocSzapier_rule_patch"></a>
<a id="tocszapier_rule_patch"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/zapier",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|false|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|false|none|The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|false|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/zapier|
|status|enabled|
|status|disabled|

<h2 id="tocS_zapier_rule_post">zapier_rule_post</h2>
<!-- backwards compatibility -->
<a id="schemazapier_rule_post"></a>
<a id="schema_zapier_rule_post"></a>
<a id="tocSzapier_rule_post"></a>
<a id="tocszapier_rule_post"></a>

```json
{
  "requestMode": "single",
  "ruleType": "http/zapier",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/zapier|
|status|enabled|
|status|disabled|

<h2 id="tocS_zapier_rule_response">zapier_rule_response</h2>
<!-- backwards compatibility -->
<a id="schemazapier_rule_response"></a>
<a id="schema_zapier_rule_response"></a>
<a id="tocSzapier_rule_response"></a>
<a id="tocszapier_rule_response"></a>

```json
{
  "_links": {},
  "appId": "28GY6a",
  "created": 1602844091815,
  "id": "83IzAB",
  "modified": 1614679682091,
  "requestMode": "single",
  "ruleType": "http/zapier",
  "source": {
    "channelFilter": "string",
    "type": "channel.message"
  },
  "status": "enabled",
  "target": {
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "signingKeyId": "string",
    "url": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object \| null|false|none|none|
|appId|string|false|none|The Ably application ID.|
|created|number|false|none|Unix timestamp representing the date and time of creation of the rule.|
|id|string|false|none|The rule ID.|
|modified|number|false|none|Unix timestamp representing the date and time of last modification of the rule.|
|requestMode|string|true|none|This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.|
|ruleType|string|true|none|The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.|
|source|[rule_source](#schemarule_source)|true|none|none|
|status|string|false|none|The status of the rule. Rules can be enabled or disabled.|
|target|object|true|none|none|
|version|string|false|none|API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>.|

#### Enumerated Values

|Property|Value|
|---|---|
|requestMode|single|
|requestMode|batch|
|ruleType|http/zapier|
|status|enabled|
|status|disabled|
