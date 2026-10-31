<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru//api.ote-godaddy.com">https://api.apis.guru//api.ote-godaddy.com</a>

<h1 id="api-v1">v1</h1>

## Create a Subaccount owned by the authenticated Reseller

<a id="opIdcreateSubaccount"></a>

> Code samples

```bash
curl https://example.com/v1/shoppers/subaccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "user@example.com",
    "externalId": 0,
    "marketId": "en-US",
    "nameFirst": "string",
    "nameLast": "string",
    "password": "string"
  }'
```

`POST /v1/shoppers/subaccount`

> Body parameter

```json
{
  "email": "user@example.com",
  "externalId": 0,
  "marketId": "en-US",
  "nameFirst": "string",
  "nameLast": "string",
  "password": "string"
}
```

<h3 id="create-a-subaccount-owned-by-the-authenticated-reseller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountCreate](#schemasubaccountcreate)|true|The subaccount to create|
|» email|body|string(email)|true|none|
|» externalId|body|integer|false|none|
|» marketId|body|string(bcp-47)|false|none|
|» nameFirst|body|string|true|none|
|» nameLast|body|string|true|none|
|» password|body|string(shopper-password)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» marketId|da-DK|
|» marketId|de-AT|
|» marketId|de-CH|
|» marketId|de-DE|
|» marketId|el-GR|
|» marketId|en-AE|
|» marketId|en-AU|
|» marketId|en-CA|
|» marketId|en-GB|
|» marketId|en-HK|
|» marketId|en-IE|
|» marketId|en-IL|
|» marketId|en-IN|
|» marketId|en-MY|
|» marketId|en-NZ|
|» marketId|en-PH|
|» marketId|en-PK|
|» marketId|en-SG|
|» marketId|en-US|
|» marketId|en-ZA|
|» marketId|es-AR|
|» marketId|es-CL|
|» marketId|es-CO|
|» marketId|es-ES|
|» marketId|es-MX|
|» marketId|es-PE|
|» marketId|es-US|
|» marketId|es-VE|
|» marketId|fi-FI|
|» marketId|fr-BE|
|» marketId|fr-CA|
|» marketId|fr-CH|
|» marketId|fr-FR|
|» marketId|hi-IN|
|» marketId|id-ID|
|» marketId|it-CH|
|» marketId|it-IT|
|» marketId|ja-JP|
|» marketId|ko-KR|
|» marketId|mr-IN|
|» marketId|nb-NO|
|» marketId|nl-BE|
|» marketId|nl-NL|
|» marketId|pl-PL|
|» marketId|pt-BR|
|» marketId|pt-PT|
|» marketId|ru-RU|
|» marketId|sv-SE|
|» marketId|ta-IN|
|» marketId|th-TH|
|» marketId|tr-TR|
|» marketId|uk-UA|
|» marketId|vi-VN|
|» marketId|zh-HK|
|» marketId|zh-SG|
|» marketId|zh-TW|

> Example responses

> 200 Response

```json
{
  "customerId": "string",
  "shopperId": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-subaccount-owned-by-the-authenticated-reseller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[ShopperId](#schemashopperid)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|`subaccount` does not fulfill the schema|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get details for the specified Shopper

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/v1/shoppers/string \
  -H 'Accept: application/json'
```

`GET /v1/shoppers/{shopperId}`

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

<h3 id="get-details-for-the-specified-shopper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shopperId|path|string|true|Shopper whose details are to be retrieved|
|includes|query|[string]|false|Additional properties to be included in the response shopper object|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includes|customerId|

> Example responses

> 200 Response

```json
{
  "customerId": "string",
  "email": "user@example.com",
  "externalId": 0,
  "marketId": "en-US",
  "nameFirst": "string",
  "nameLast": "string",
  "shopperId": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="get-details-for-the-specified-shopper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[Shopper](#schemashopper)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update details for the specified Shopper

<a id="opIdupdate"></a>

> Code samples

```bash
curl https://example.com/v1/shoppers/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "user@example.com",
    "externalId": 0,
    "marketId": "da-DK",
    "nameFirst": "string",
    "nameLast": "string"
  }'
```

`POST /v1/shoppers/{shopperId}`

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

> Body parameter

```json
{
  "email": "user@example.com",
  "externalId": 0,
  "marketId": "da-DK",
  "nameFirst": "string",
  "nameLast": "string"
}
```

<h3 id="update-details-for-the-specified-shopper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shopperId|path|string|true|The ID of the Shopper to update|
|body|body|[ShopperUpdate](#schemashopperupdate)|true|The Shopper details to update|
|» email|body|string(email)|false|none|
|» externalId|body|integer|false|none|
|» marketId|body|string(bcp-47)|false|none|
|» nameFirst|body|string|false|none|
|» nameLast|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» marketId|da-DK|
|» marketId|de-AT|
|» marketId|de-CH|
|» marketId|de-DE|
|» marketId|el-GR|
|» marketId|en-AE|
|» marketId|en-AU|
|» marketId|en-CA|
|» marketId|en-GB|
|» marketId|en-HK|
|» marketId|en-IE|
|» marketId|en-IL|
|» marketId|en-IN|
|» marketId|en-MY|
|» marketId|en-NZ|
|» marketId|en-PH|
|» marketId|en-PK|
|» marketId|en-SG|
|» marketId|en-US|
|» marketId|en-ZA|
|» marketId|es-AR|
|» marketId|es-CL|
|» marketId|es-CO|
|» marketId|es-ES|
|» marketId|es-MX|
|» marketId|es-PE|
|» marketId|es-US|
|» marketId|es-VE|
|» marketId|fi-FI|
|» marketId|fr-BE|
|» marketId|fr-CA|
|» marketId|fr-CH|
|» marketId|fr-FR|
|» marketId|hi-IN|
|» marketId|id-ID|
|» marketId|it-CH|
|» marketId|it-IT|
|» marketId|ja-JP|
|» marketId|ko-KR|
|» marketId|mr-IN|
|» marketId|nb-NO|
|» marketId|nl-BE|
|» marketId|nl-NL|
|» marketId|pl-PL|
|» marketId|pt-BR|
|» marketId|pt-PT|
|» marketId|ru-RU|
|» marketId|sv-SE|
|» marketId|ta-IN|
|» marketId|th-TH|
|» marketId|tr-TR|
|» marketId|uk-UA|
|» marketId|vi-VN|
|» marketId|zh-HK|
|» marketId|zh-SG|
|» marketId|zh-TW|

> Example responses

> 200 Response

```json
{
  "customerId": "string",
  "shopperId": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="update-details-for-the-specified-shopper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[ShopperId](#schemashopperid)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`Shopper` does not fulfill the schema|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Request the deletion of a shopper profile

<a id="opIddelete"></a>

> Code samples

```bash
curl 'https://example.com/v1/shoppers/string?auditClientIp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/shoppers/{shopperId}`

<strong>Notes:</strong><ul><li>Shopper deletion is not supported in OTE</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

<h3 id="request-the-deletion-of-a-shopper-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shopperId|path|string|true|The ID of the shopper to delete. Must agree with the shopper id on the token or header, if present. *Note*: **shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)|
|auditClientIp|query|string|true|The client IP of the user who originated the request leading to this call.|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="request-the-deletion-of-a-shopper-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|409|Conflict|Active and locked shoppers cannot be deleted|[Error](#schemaerror)|
|422|Unprocessable Entity|Shopper ID is not supplied or invalid|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Set subaccount's password

<a id="opIdchangePassword"></a>

> Code samples

```bash
curl https://example.com/v1/shoppers/string/factors/password \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "secret": "P@55w0rd+"
  }'
```

`PUT /v1/shoppers/{shopperId}/factors/password`

<strong>Notes:</strong><ul><li>Password set is only supported by API Resellers setting subaccount passwords.</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

> Body parameter

```json
{
  "secret": "P@55w0rd+"
}
```

<h3 id="set-subaccounts-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shopperId|path|string|true|Shopper whose password will be set|
|body|body|[Secret](#schemasecret)|true|The value to set the subaccount's password to|
|» secret|body|string|false|The secret value used to set a subaccount's password|

> Example responses

> 200 Response

```json
{
  "customerId": "string",
  "shopperId": "string"
}
```

> 400 Response

```json
{
  "code": "PW_BLACK_LIST",
  "message": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="set-subaccounts-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[ShopperId](#schemashopperid)|
|400|Bad Request|Request was not successful|[PasswordError](#schemapassworderror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get details for the specified Shopper

<a id="opIdgetStatus"></a>

> Code samples

```bash
curl 'https://example.com/v1/shoppers/string/status?auditClientIp=string' \
  -H 'Accept: application/json'
```

`GET /v1/shoppers/{shopperId}/status`

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

<h3 id="get-details-for-the-specified-shopper-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shopperId|path|string|true|The ID of the shopper to retrieve. Must agree with the shopper id on the token or header, if present|
|auditClientIp|query|string|true|The client IP of the user who originated the request leading to this call.|

> Example responses

> 200 Response

```json
{
  "billingState": "ABANDONED"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="get-details-for-the-specified-shopper-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[ShopperStatus](#schemashopperstatus)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Shopper ID is not supplied or invalid|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|

<h2 id="tocS_ErrorField">ErrorField</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfield"></a>
<a id="schema_ErrorField"></a>
<a id="tocSerrorfield"></a>
<a id="tocserrorfield"></a>

```json
{
  "code": "string",
  "message": "string",
  "path": "string",
  "pathRelated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|message|string|false|none|Human-readable, English description of the problem with the contents of the field|
|path|string(json-path)|true|none|<ul><br><li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li><br><strong style='margin-left: 12px;'>OR</strong><br><li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li><br></ul>|
|pathRelated|string(json-path)|false|none|JSONPath referring to a field containing an error, which is referenced by `path`|

<h2 id="tocS_ErrorLimit">ErrorLimit</h2>
<!-- backwards compatibility -->
<a id="schemaerrorlimit"></a>
<a id="schema_ErrorLimit"></a>
<a id="tocSerrorlimit"></a>
<a id="tocserrorlimit"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|
|retryAfterSec|integer(integer-positive)|true|none|Number of seconds to wait before attempting a similar request|

<h2 id="tocS_PasswordError">PasswordError</h2>
<!-- backwards compatibility -->
<a id="schemapassworderror"></a>
<a id="schema_PasswordError"></a>
<a id="tocSpassworderror"></a>
<a id="tocspassworderror"></a>

```json
{
  "code": "PW_BLACK_LIST",
  "message": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|false|none|Short identifier for the error, suitable for indicating the specific error within client code|
|message|string|false|none|Human-readable, English description of the error|
|type|string|false|none|Response type, always 'error'|

#### Enumerated Values

|Property|Value|
|---|---|
|code|PW_BLACK_LIST|
|code|PW_TOO_SHORT|
|code|PW_TOO_LONG|
|code|PW_MISSING_UC|
|code|PW_MISSING_NUM|
|code|PW_RECENTLY_USED|
|code|PW_NOT_UNIQUE|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "secret": "P@55w0rd+"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|false|none|The secret value used to set a subaccount's password|

<h2 id="tocS_Shopper">Shopper</h2>
<!-- backwards compatibility -->
<a id="schemashopper"></a>
<a id="schema_Shopper"></a>
<a id="tocSshopper"></a>
<a id="tocsshopper"></a>

```json
{
  "customerId": "string",
  "email": "user@example.com",
  "externalId": 0,
  "marketId": "en-US",
  "nameFirst": "string",
  "nameLast": "string",
  "shopperId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerId|string|false|none|Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record|
|email|string(email)|true|none|none|
|externalId|integer|false|none|none|
|marketId|string(bcp-47)|true|none|none|
|nameFirst|string|true|none|none|
|nameLast|string|true|none|none|
|shopperId|string|true|none|none|

<h2 id="tocS_ShopperId">ShopperId</h2>
<!-- backwards compatibility -->
<a id="schemashopperid"></a>
<a id="schema_ShopperId"></a>
<a id="tocSshopperid"></a>
<a id="tocsshopperid"></a>

```json
{
  "customerId": "string",
  "shopperId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerId|string|false|none|Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record|
|shopperId|string|true|none|none|

<h2 id="tocS_ShopperStatus">ShopperStatus</h2>
<!-- backwards compatibility -->
<a id="schemashopperstatus"></a>
<a id="schema_ShopperStatus"></a>
<a id="tocSshopperstatus"></a>
<a id="tocsshopperstatus"></a>

```json
{
  "billingState": "ABANDONED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingState|string|false|none|Indicates the billing state of the Shopper.<br />ABANDONED: The shopper has not been billed in at least 10 years and has no active subscriptions.<br />INACTIVE: The shopper has been billed within the last 10 years but has no active subscriptions.<br />ACTIVE: The shopper has at least one active subscription.|

#### Enumerated Values

|Property|Value|
|---|---|
|billingState|ABANDONED|
|billingState|INACTIVE|
|billingState|ACTIVE|

<h2 id="tocS_ShopperUpdate">ShopperUpdate</h2>
<!-- backwards compatibility -->
<a id="schemashopperupdate"></a>
<a id="schema_ShopperUpdate"></a>
<a id="tocSshopperupdate"></a>
<a id="tocsshopperupdate"></a>

```json
{
  "email": "user@example.com",
  "externalId": 0,
  "marketId": "da-DK",
  "nameFirst": "string",
  "nameLast": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|false|none|none|
|externalId|integer|false|none|none|
|marketId|string(bcp-47)|false|none|none|
|nameFirst|string|false|none|none|
|nameLast|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|marketId|da-DK|
|marketId|de-AT|
|marketId|de-CH|
|marketId|de-DE|
|marketId|el-GR|
|marketId|en-AE|
|marketId|en-AU|
|marketId|en-CA|
|marketId|en-GB|
|marketId|en-HK|
|marketId|en-IE|
|marketId|en-IL|
|marketId|en-IN|
|marketId|en-MY|
|marketId|en-NZ|
|marketId|en-PH|
|marketId|en-PK|
|marketId|en-SG|
|marketId|en-US|
|marketId|en-ZA|
|marketId|es-AR|
|marketId|es-CL|
|marketId|es-CO|
|marketId|es-ES|
|marketId|es-MX|
|marketId|es-PE|
|marketId|es-US|
|marketId|es-VE|
|marketId|fi-FI|
|marketId|fr-BE|
|marketId|fr-CA|
|marketId|fr-CH|
|marketId|fr-FR|
|marketId|hi-IN|
|marketId|id-ID|
|marketId|it-CH|
|marketId|it-IT|
|marketId|ja-JP|
|marketId|ko-KR|
|marketId|mr-IN|
|marketId|nb-NO|
|marketId|nl-BE|
|marketId|nl-NL|
|marketId|pl-PL|
|marketId|pt-BR|
|marketId|pt-PT|
|marketId|ru-RU|
|marketId|sv-SE|
|marketId|ta-IN|
|marketId|th-TH|
|marketId|tr-TR|
|marketId|uk-UA|
|marketId|vi-VN|
|marketId|zh-HK|
|marketId|zh-SG|
|marketId|zh-TW|

<h2 id="tocS_SubaccountCreate">SubaccountCreate</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountcreate"></a>
<a id="schema_SubaccountCreate"></a>
<a id="tocSsubaccountcreate"></a>
<a id="tocssubaccountcreate"></a>

```json
{
  "email": "user@example.com",
  "externalId": 0,
  "marketId": "en-US",
  "nameFirst": "string",
  "nameLast": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|none|
|externalId|integer|false|none|none|
|marketId|string(bcp-47)|false|none|none|
|nameFirst|string|true|none|none|
|nameLast|string|true|none|none|
|password|string(shopper-password)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|marketId|da-DK|
|marketId|de-AT|
|marketId|de-CH|
|marketId|de-DE|
|marketId|el-GR|
|marketId|en-AE|
|marketId|en-AU|
|marketId|en-CA|
|marketId|en-GB|
|marketId|en-HK|
|marketId|en-IE|
|marketId|en-IL|
|marketId|en-IN|
|marketId|en-MY|
|marketId|en-NZ|
|marketId|en-PH|
|marketId|en-PK|
|marketId|en-SG|
|marketId|en-US|
|marketId|en-ZA|
|marketId|es-AR|
|marketId|es-CL|
|marketId|es-CO|
|marketId|es-ES|
|marketId|es-MX|
|marketId|es-PE|
|marketId|es-US|
|marketId|es-VE|
|marketId|fi-FI|
|marketId|fr-BE|
|marketId|fr-CA|
|marketId|fr-CH|
|marketId|fr-FR|
|marketId|hi-IN|
|marketId|id-ID|
|marketId|it-CH|
|marketId|it-IT|
|marketId|ja-JP|
|marketId|ko-KR|
|marketId|mr-IN|
|marketId|nb-NO|
|marketId|nl-BE|
|marketId|nl-NL|
|marketId|pl-PL|
|marketId|pt-BR|
|marketId|pt-PT|
|marketId|ru-RU|
|marketId|sv-SE|
|marketId|ta-IN|
|marketId|th-TH|
|marketId|tr-TR|
|marketId|uk-UA|
|marketId|vi-VN|
|marketId|zh-HK|
|marketId|zh-SG|
|marketId|zh-TW|
