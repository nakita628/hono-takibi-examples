<h1 id="mailscript">Mailscript v0.4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.mailscript.com/v2">https://api.mailscript.com/v2</a> - API server

License: MIT

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="mailscript-actions">actions</h1>

## Get all actions for the user

<a id="opIdgetAllActions"></a>

> Code samples

```bash
curl https://example.com/actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions`

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "config": {
        "html": "string",
        "subject": "string",
        "text": "string",
        "type": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "name": "string",
      "output": "string",
      "owner": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-actions-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GetAllActionsResponse](#schemagetallactionsresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add an action

<a id="opIdaddAction"></a>

> Code samples

```bash
curl https://example.com/actions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "list": [
      "string"
    ],
    "name": "string"
  }'
```

`POST /actions`

> Body parameter

```json
{
  "list": [
    "string"
  ],
  "name": "string"
}
```

<h3 id="add-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddActionCombineRequest](#schemaaddactioncombinerequest) \| [AddActionSmsRequest](#schemaaddactionsmsrequest) \| [AddActionWebhookRequest](#schemaaddactionwebhookrequest) \| [AddActionDaemonRequest](#schemaaddactiondaemonrequest) \| [AddActionSendRequest](#schemaaddactionsendrequest) \| [AddActionForwardRequest](#schemaaddactionforwardrequest) \| [AddActionReplyRequest](#schemaaddactionreplyrequest) \| [AddActionReplyAllRequest](#schemaaddactionreplyallrequest) \| [AddActionAliasRequest](#schemaaddactionaliasrequest)|true|Add action body|
|» *oneOf*|body|[AddActionCombineRequest](#schemaaddactioncombinerequest)|false|none|
|» *oneOf*|body|[AddActionSmsRequest](#schemaaddactionsmsrequest)|false|none|
|» *oneOf*|body|[AddActionWebhookRequest](#schemaaddactionwebhookrequest)|false|none|
|» *oneOf*|body|[AddActionDaemonRequest](#schemaaddactiondaemonrequest)|false|none|
|» *oneOf*|body|[AddActionSendRequest](#schemaaddactionsendrequest)|false|none|
|» *oneOf*|body|[AddActionForwardRequest](#schemaaddactionforwardrequest)|false|none|
|» *oneOf*|body|[AddActionForwardRequest](#schemaaddactionforwardrequest)|false|none|
|» *oneOf*|body|[AddActionReplyRequest](#schemaaddactionreplyrequest)|false|none|
|» *oneOf*|body|[AddActionReplyAllRequest](#schemaaddactionreplyallrequest)|false|none|
|» *oneOf*|body|[AddActionAliasRequest](#schemaaddactionaliasrequest)|false|none|

> Example responses

> 201 Response

```json
"[\n\"hielle.com\"\n]"
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="add-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[AddActionResponse](#schemaaddactionresponse)|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Not authorized or bad code|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an action key

<a id="opIdupdateAction"></a>

> Code samples

```bash
curl https://example.com/actions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "list": [
      "string"
    ],
    "name": "string"
  }'
```

`PUT /actions/{action}`

> Body parameter

```json
{
  "list": [
    "string"
  ],
  "name": "string"
}
```

<h3 id="update-an-action-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|path|string|true|ID of action|
|body|body|[AddActionCombineRequest](#schemaaddactioncombinerequest) \| [AddActionSmsRequest](#schemaaddactionsmsrequest) \| [AddActionWebhookRequest](#schemaaddactionwebhookrequest) \| [AddActionDaemonRequest](#schemaaddactiondaemonrequest) \| [AddActionSendRequest](#schemaaddactionsendrequest) \| [AddActionForwardRequest](#schemaaddactionforwardrequest) \| [AddActionReplyRequest](#schemaaddactionreplyrequest) \| [AddActionReplyAllRequest](#schemaaddactionreplyallrequest) \| [AddActionAliasRequest](#schemaaddactionaliasrequest)|true|Action body|
|» *oneOf*|body|[AddActionCombineRequest](#schemaaddactioncombinerequest)|false|none|
|» *oneOf*|body|[AddActionSmsRequest](#schemaaddactionsmsrequest)|false|none|
|» *oneOf*|body|[AddActionWebhookRequest](#schemaaddactionwebhookrequest)|false|none|
|» *oneOf*|body|[AddActionDaemonRequest](#schemaaddactiondaemonrequest)|false|none|
|» *oneOf*|body|[AddActionSendRequest](#schemaaddactionsendrequest)|false|none|
|» *oneOf*|body|[AddActionForwardRequest](#schemaaddactionforwardrequest)|false|none|
|» *oneOf*|body|[AddActionForwardRequest](#schemaaddactionforwardrequest)|false|none|
|» *oneOf*|body|[AddActionReplyRequest](#schemaaddactionreplyrequest)|false|none|
|» *oneOf*|body|[AddActionReplyAllRequest](#schemaaddactionreplyallrequest)|false|none|
|» *oneOf*|body|[AddActionAliasRequest](#schemaaddactionaliasrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "name": "string",
  "read": true,
  "write": true
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="update-an-action-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful update operation|[Key](#schemakey)|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an action

<a id="opIddeleteAction"></a>

> Code samples

```bash
curl https://example.com/actions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /actions/{action}`

<h3 id="delete-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|path|string|true|ID of the action|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="delete-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful delete operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-addresses">addresses</h1>

## Get all addresses you have access to

<a id="opIdgetAllAddresses"></a>

> Code samples

```bash
curl https://example.com/addresses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /addresses`

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "displayName": "string",
      "id": "string",
      "owner": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-addresses-you-have-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetAllAddressesResponse](#schemagetalladdressesresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Claim a new Mailscript address

<a id="opIdaddAddress"></a>

> Code samples

```bash
curl https://example.com/addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string"
  }'
```

`POST /addresses`

> Body parameter

```json
{
  "address": "string"
}
```

<h3 id="claim-a-new-mailscript-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddAddressRequest](#schemaaddaddressrequest)|true|Address body|
|» address|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="claim-a-new-mailscript-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|400|Bad Request|Internal error|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a mailscript address

<a id="opIddeleteAddress"></a>

> Code samples

```bash
curl https://example.com/addresses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /addresses/{address}`

<h3 id="delete-a-mailscript-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|ID of address|

> Example responses

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="delete-a-mailscript-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful delete operation|None|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-keys">keys</h1>

## List address keys

<a id="opIdgetAllKeys"></a>

> Code samples

```bash
curl https://example.com/addresses/string/keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /addresses/{address}/keys`

<h3 id="list-address-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|ID of address|

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "name": "string",
      "read": true,
      "write": true
    }
  ]
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="list-address-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetAllKeysResponse](#schemagetallkeysresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Address not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add address key

<a id="opIdaddKey"></a>

> Code samples

```bash
curl https://example.com/addresses/string/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "read": true,
    "write": true
  }'
```

`POST /addresses/{address}/keys`

> Body parameter

```json
{
  "name": "string",
  "read": true,
  "write": true
}
```

<h3 id="add-address-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|ID of address|
|body|body|[AddKeyRequest](#schemaaddkeyrequest)|true|Key body|
|» name|body|string|true|none|
|» read|body|boolean|true|none|
|» write|body|boolean|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="add-address-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[AddKeyResponse](#schemaaddkeyresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Address not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get address key

<a id="opIdgetKey"></a>

> Code samples

```bash
curl https://example.com/addresses/string/keys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /addresses/{address}/keys/{key}`

<h3 id="get-address-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|ID of address|
|key|path|string|true|ID of key|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "name": "string",
  "read": true,
  "write": true
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="get-address-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Key](#schemakey)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an address key

<a id="opIdupdateKey"></a>

> Code samples

```bash
curl https://example.com/addresses/string/keys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "read": true,
    "write": true
  }'
```

`PUT /addresses/{address}/keys/{key}`

> Body parameter

```json
{
  "name": "string",
  "read": true,
  "write": true
}
```

<h3 id="update-an-address-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|ID of address|
|key|path|string|true|ID of key|
|body|body|[UpdateKeyRequest](#schemaupdatekeyrequest)|true|Key body|
|» name|body|string|true|none|
|» read|body|boolean|true|none|
|» write|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "name": "string",
  "read": true,
  "write": true
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="update-an-address-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Key](#schemakey)|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete address key

<a id="opIddeleteKey"></a>

> Code samples

```bash
curl https://example.com/addresses/string/keys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /addresses/{address}/keys/{key}`

<h3 id="delete-address-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|ID of address|
|key|path|string|true|ID of key|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="delete-address-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful delete operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-daemon">daemon</h1>

## Get a token for opening a daemon connection

<a id="opIdgetDaemonToken"></a>

> Code samples

```bash
curl https://example.com/daemons/string/token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /daemons/{daemon}/token`

<h3 id="get-a-token-for-opening-a-daemon-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|daemon|path|string|true|name of Daemon|

> Example responses

> 200 Response

```json
{
  "token": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="get-a-token-for-opening-a-daemon-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful get operation|Inline|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-a-token-for-opening-a-daemon-connection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-domains">domains</h1>

## Get all domains you have access to

<a id="opIdgetAllDomains"></a>

> Code samples

```bash
curl https://example.com/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domains`

> Example responses

> 200 Response

```json
"{\n\"list\": [\"hielle.com\"]\n}"
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-domains-you-have-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetAllDomainsResponse](#schemagetalldomainsresponse)|
|400|Bad Request|Internal error|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Claim a new Domain

<a id="opIdaddDomain"></a>

> Code samples

```bash
curl https://example.com/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domain": "string"
  }'
```

`POST /domains`

> Body parameter

```json
{
  "domain": "string"
}
```

<h3 id="claim-a-new-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddDomainRequest](#schemaadddomainrequest)|true|Domain body|
|» domain|body|string|true|none|

> Example responses

> 200 Response

```json
"{\n  \"id\": \"hielle.com\",\n  \"records\": [\n    {\n      \"type:\" \"TXT\",\n      \"name\": \"@\",\n      \"value\": \"ms_verify=eecbb911-d940-41ea-8fc2-2c83295f418b\"\n    }\n  ]\n}"
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="claim-a-new-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DomainResponse](#schemadomainresponse)|
|400|Bad Request|Internal error|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get domain verification

<a id="opIdgetDomainVerify"></a>

> Code samples

```bash
curl https://example.com/domains/verify/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domains/verify/{domain}`

<h3 id="get-domain-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Full Top-level domain name|

> Example responses

> 200 Response

```json
"{\n  \"id\": \"hielle.com\",\n  \"records\": [\n    {\n      \"type:\" \"TXT\",\n      \"name\": \"@\",\n      \"value\": \"ms_verify=eecbb911-d940-41ea-8fc2-2c83295f418b\"\n    }\n  ]\n}"
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="get-domain-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DomainResponse](#schemadomainresponse)|
|400|Bad Request|Internal error|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Check a new Domain

<a id="opIdCheckDomainVerify"></a>

> Code samples

```bash
curl https://example.com/domains/verify/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /domains/verify/{domain}`

<h3 id="check-a-new-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Full Top-level domain name|

> Example responses

> 200 Response

```json
"{\n\"id\":\"hielle.com\",\n\"success\": true\n}"
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="check-a-new-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CheckDomainVerify](#schemacheckdomainverify)|
|400|Bad Request|Internal error|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a domain

<a id="opIdremoveDomainVerify"></a>

> Code samples

```bash
curl https://example.com/domains/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /domains/{domain}`

<h3 id="remove-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Full Top-level domain name|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="remove-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|400|Bad Request|Internal error|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-inputs">inputs</h1>

## Get all inputs you have access to

<a id="opIdgetAllInputs"></a>

> Code samples

```bash
curl https://example.com/inputs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inputs`

<h3 id="get-all-inputs-you-have-access-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "address": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "name": "string",
      "owner": "string",
      "type": "mailescript-email"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-inputs-you-have-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetAllInputsResponse](#schemagetallinputsresponse)|
|400|Bad Request|Invalid input|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-integrations">integrations</h1>

## Get all integrations for the user

<a id="opIdgetAllIntegrations"></a>

> Code samples

```bash
curl https://example.com/integrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations`

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "type": "google"
    }
  ]
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-integrations-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GetAllIntegrationsResponse](#schemagetallintegrationsresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an integration

<a id="opIddeleteIntegration"></a>

> Code samples

```bash
curl https://example.com/integrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /integrations/{integration}`

<h3 id="delete-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|integration|path|string|true|ID of the integration|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="delete-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful delete operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-send">send</h1>

## Send an email

<a id="opIdsend"></a>

> Code samples

```bash
curl https://example.com/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "from": "string",
    "html": "string",
    "subject": "string",
    "text": "string",
    "to": "string"
  }'
```

`POST /send`

> Body parameter

```json
{
  "from": "string",
  "html": "string",
  "subject": "string",
  "text": "string",
  "to": "string"
}
```

<h3 id="send-an-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendRequest](#schemasendrequest)|true|request body|
|» from|body|string|true|none|
|» html|body|string|false|none|
|» subject|body|string|true|none|
|» text|body|string|false|none|
|» to|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="send-an-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|400|Bad Request|Invalid input|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-triggers">triggers</h1>

## Get all triggers you have access to

<a id="opIdgetAllTriggers"></a>

> Code samples

```bash
curl https://example.com/triggers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /triggers`

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "criteria": {
        "domain": "string",
        "from": "string",
        "hasAttachments": true,
        "hasTheWords": "string",
        "sentTo": "string",
        "subjectContains": "string"
      },
      "displayName": "string",
      "id": "string",
      "name": "string",
      "owner": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-triggers-you-have-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetAllTriggersResponse](#schemagetalltriggersresponse)|
|400|Bad Request|Invalid input|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Setup a trigger

<a id="opIdaddTrigger"></a>

> Code samples

```bash
curl https://example.com/triggers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "criteria": {
      "domain": "string",
      "from": "string",
      "hasAttachments": true,
      "hasTheWords": "string",
      "sentTo": "string",
      "subjectContains": "string"
    },
    "name": "string"
  }'
```

`POST /triggers`

> Body parameter

```json
{
  "criteria": {
    "domain": "string",
    "from": "string",
    "hasAttachments": true,
    "hasTheWords": "string",
    "sentTo": "string",
    "subjectContains": "string"
  },
  "name": "string"
}
```

<h3 id="setup-a-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddTriggerRequest](#schemaaddtriggerrequest)|true|Trigger body|
|» criteria|body|[Criteria](#schemacriteria) \| [CriteriaOperand](#schemacriteriaoperand)|true|none|
|» » *oneOf*|body|[Criteria](#schemacriteria)|false|none|
|» » *oneOf*|body|[CriteriaOperand](#schemacriteriaoperand)|false|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="setup-a-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful add operation|[AddTriggerResponse](#schemaaddtriggerresponse)|
|400|Bad Request|Invalid input|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a trigger

<a id="opIdupdateTrigger"></a>

> Code samples

```bash
curl https://example.com/triggers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "criteria": {
      "domain": "string",
      "from": "string",
      "hasAttachments": true,
      "hasTheWords": "string",
      "sentTo": "string",
      "subjectContains": "string"
    },
    "name": "string"
  }'
```

`PUT /triggers/{trigger}`

> Body parameter

```json
{
  "criteria": {
    "domain": "string",
    "from": "string",
    "hasAttachments": true,
    "hasTheWords": "string",
    "sentTo": "string",
    "subjectContains": "string"
  },
  "name": "string"
}
```

<h3 id="update-a-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trigger|path|string|true|ID of the trigger|
|body|body|[AddTriggerRequest](#schemaaddtriggerrequest)|true|Trigger body|
|» criteria|body|[Criteria](#schemacriteria) \| [CriteriaOperand](#schemacriteriaoperand)|true|none|
|» » *oneOf*|body|[Criteria](#schemacriteria)|false|none|
|» » *oneOf*|body|[CriteriaOperand](#schemacriteriaoperand)|false|none|
|» name|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="update-a-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful update operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a trigger

<a id="opIddeleteTrigger"></a>

> Code samples

```bash
curl https://example.com/triggers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /triggers/{trigger}`

<h3 id="delete-a-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trigger|path|string|true|ID of the trigger|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="delete-a-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful delete operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-user">user</h1>

## Get the authenticated user

<a id="opIdgetAuthenticatedUser"></a>

> Code samples

```bash
curl https://example.com/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user`

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "displayName": "string",
  "email": "string",
  "id": "string",
  "photoURL": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="get-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[User](#schemauser)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a user

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl https://example.com/user \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string"
  }'
```

`PUT /user`

> Body parameter

```json
{
  "displayName": "string"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateUserRequest](#schemaupdateuserrequest)|true|User body|
|» displayName|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful update operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-verifications">verifications</h1>

## Get all verificats for the user

<a id="opIdgetAllVerifications"></a>

> Code samples

```bash
curl https://example.com/verifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /verifications`

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "email": "string",
      "id": "string",
      "type": "email",
      "verified": true,
      "verifiedAt": "1970-01-01T00:00:00Z",
      "verifiedBy": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-verificats-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GetAllVerificationsResponse](#schemagetallverificationsresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Start verification process for external email address or sms number

<a id="opIdaddVerification"></a>

> Code samples

```bash
curl https://example.com/verifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string",
    "type": "email"
  }'
```

`POST /verifications`

> Body parameter

```json
{
  "email": "string",
  "type": "email"
}
```

<h3 id="start-verification-process-for-external-email-address-or-sms-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddEmailVerificationRequest](#schemaaddemailverificationrequest) \| [AddSmsVerificationRequest](#schemaaddsmsverificationrequest)|true|Key body|
|» *oneOf*|body|[AddEmailVerificationRequest](#schemaaddemailverificationrequest)|false|none|
|» *oneOf*|body|[AddSmsVerificationRequest](#schemaaddsmsverificationrequest)|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

<h3 id="start-verification-process-for-external-email-address-or-sms-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[AddVerificationResponse](#schemaaddverificationresponse)|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Verify an email address or sms number with a code

<a id="opIdverify"></a>

> Code samples

```bash
curl https://example.com/verifications/string/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "string",
    "email": "string"
  }'
```

`POST /verifications/{verification}/verify`

> Body parameter

```json
{
  "code": "string",
  "email": "string"
}
```

<h3 id="verify-an-email-address-or-sms-number-with-a-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|verification|path|string|true|ID of the verification entry|
|body|body|[VerifyEmailRequest](#schemaverifyemailrequest) \| [VerifySmsRequest](#schemaverifysmsrequest)|true|Verify action body|
|» *oneOf*|body|[VerifyEmailRequest](#schemaverifyemailrequest)|false|none|
|» *oneOf*|body|[VerifySmsRequest](#schemaverifysmsrequest)|false|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="verify-an-email-address-or-sms-number-with-a-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Not authorized or bad code|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-workflows">workflows</h1>

## Get all workflows you have access to

<a id="opIdgetAllWorkflows"></a>

> Code samples

```bash
curl https://example.com/workflows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workflows`

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "action": "string",
      "active": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "input": "string",
      "name": "string",
      "owner": "string",
      "trigger": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-workflows-you-have-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetAllWorkflowsResponse](#schemagetallworkflowsresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Setup workflow

<a id="opIdaddWorkflow"></a>

> Code samples

```bash
curl https://example.com/workflows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "string",
    "active": true,
    "input": "string",
    "name": "string",
    "trigger": "string"
  }'
```

`POST /workflows`

> Body parameter

```json
{
  "action": "string",
  "active": true,
  "input": "string",
  "name": "string",
  "trigger": "string"
}
```

<h3 id="setup-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddWorkflowRequest](#schemaaddworkflowrequest)|true|Workflow body|
|» action|body|string|true|none|
|» active|body|boolean|false|none|
|» input|body|string|true|none|
|» name|body|string|true|none|
|» trigger|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="setup-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|None|
|400|Bad Request|Internal error|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set a property on a workflow

<a id="opIdsetWorkflow"></a>

> Code samples

```bash
curl https://example.com/workflows/set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "pairs": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  }'
```

`POST /workflows/set`

> Body parameter

```json
{
  "id": "string",
  "pairs": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="set-a-property-on-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetWorkflowRequest](#schemasetworkflowrequest)|true|Set Workflow body|
|» id|body|string|false|none|
|» pairs|body|[object]|false|none|
|» » *oneOf*|body|[KeyValuePair](#schemakeyvaluepair)|false|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="set-a-property-on-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful update operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an workflow

<a id="opIdupdateWorkflow"></a>

> Code samples

```bash
curl https://example.com/workflows/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "string",
    "active": true,
    "input": "string",
    "name": "string",
    "trigger": "string"
  }'
```

`PUT /workflows/{workflow}`

> Body parameter

```json
{
  "action": "string",
  "active": true,
  "input": "string",
  "name": "string",
  "trigger": "string"
}
```

<h3 id="update-an-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow|path|string|true|ID of the workflow|
|body|body|[AddWorkflowRequest](#schemaaddworkflowrequest)|true|Workflow body|
|» action|body|string|true|none|
|» active|body|boolean|false|none|
|» input|body|string|true|none|
|» name|body|string|true|none|
|» trigger|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="update-an-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful update operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a workflow

<a id="opIddeleteWorkflow"></a>

> Code samples

```bash
curl https://example.com/workflows/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /workflows/{workflow}`

<h3 id="delete-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow|path|string|true|ID of the workflow|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="delete-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful delete operation|None|
|400|Bad Request|Failure|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Key not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mailscript-workspaces">workspaces</h1>

## Get all workspaces you have access to

<a id="opIdgetAllWorkspaces"></a>

> Code samples

```bash
curl https://example.com/workspaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workspaces`

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "owner": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-workspaces-you-have-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetAllWorkspacesResponse](#schemagetallworkspacesresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Claim a Mailscript workspace

<a id="opIdaddWorkspace"></a>

> Code samples

```bash
curl https://example.com/workspaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "workspace": "string"
  }'
```

`POST /workspaces`

An attendant address will be created as well

> Body parameter

```json
{
  "workspace": "string"
}
```

<h3 id="claim-a-mailscript-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddWorkspaceRequest](#schemaaddworkspacerequest)|true|request body|
|» workspace|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 405 Response

```json
{
  "error": "string"
}
```

<h3 id="claim-a-mailscript-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|None|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Bad credentials|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Invalid input|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_ActionCombine">ActionCombine</h2>
<!-- backwards compatibility -->
<a id="schemaactioncombine"></a>
<a id="schema_ActionCombine"></a>
<a id="tocSactioncombine"></a>
<a id="tocsactioncombine"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "list": [
    "string"
  ],
  "name": "string",
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|createdBy|string|true|none|none|
|id|string|true|none|none|
|list|[string]|false|none|none|
|name|string|true|none|none|
|owner|string|true|none|none|

<h2 id="tocS_ActionSend">ActionSend</h2>
<!-- backwards compatibility -->
<a id="schemaactionsend"></a>
<a id="schema_ActionSend"></a>
<a id="tocSactionsend"></a>
<a id="tocsactionsend"></a>

```json
{
  "config": {
    "html": "string",
    "subject": "string",
    "text": "string",
    "type": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "name": "string",
  "output": "string",
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|createdAt|string(date-time)|true|none|none|
|createdBy|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|output|string|true|none|none|
|owner|string|true|none|none|

<h2 id="tocS_AddActionAliasRequest">AddActionAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactionaliasrequest"></a>
<a id="schema_AddActionAliasRequest"></a>
<a id="tocSaddactionaliasrequest"></a>
<a id="tocsaddactionaliasrequest"></a>

```json
{
  "config": {
    "alias": "string",
    "type": "alias"
  },
  "name": "string",
  "type": "mailscript-email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailscript-email|

<h2 id="tocS_AddActionCombineRequest">AddActionCombineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactioncombinerequest"></a>
<a id="schema_AddActionCombineRequest"></a>
<a id="tocSaddactioncombinerequest"></a>
<a id="tocsaddactioncombinerequest"></a>

```json
{
  "list": [
    "string"
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[string]|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_AddActionDaemonRequest">AddActionDaemonRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactiondaemonrequest"></a>
<a id="schema_AddActionDaemonRequest"></a>
<a id="tocSaddactiondaemonrequest"></a>
<a id="tocsaddactiondaemonrequest"></a>

```json
{
  "config": {
    "body": "string",
    "daemon": "string"
  },
  "name": "string",
  "type": "daemon"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|daemon|

<h2 id="tocS_AddActionForwardRequest">AddActionForwardRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactionforwardrequest"></a>
<a id="schema_AddActionForwardRequest"></a>
<a id="tocSaddactionforwardrequest"></a>
<a id="tocsaddactionforwardrequest"></a>

```json
{
  "config": {
    "forward": "string",
    "from": "string",
    "key": "string",
    "type": "forward"
  },
  "name": "string",
  "type": "mailscript-email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailscript-email|

<h2 id="tocS_AddActionReplyAllRequest">AddActionReplyAllRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactionreplyallrequest"></a>
<a id="schema_AddActionReplyAllRequest"></a>
<a id="tocSaddactionreplyallrequest"></a>
<a id="tocsaddactionreplyallrequest"></a>

```json
{
  "config": {
    "from": "string",
    "html": "string",
    "key": "string",
    "text": "string",
    "type": "replyAll"
  },
  "name": "string",
  "type": "mailscript-email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailscript-email|

<h2 id="tocS_AddActionReplyRequest">AddActionReplyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactionreplyrequest"></a>
<a id="schema_AddActionReplyRequest"></a>
<a id="tocSaddactionreplyrequest"></a>
<a id="tocsaddactionreplyrequest"></a>

```json
{
  "config": {
    "from": "string",
    "html": "string",
    "key": "string",
    "text": "string",
    "type": "reply"
  },
  "name": "string",
  "type": "mailscript-email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailscript-email|

<h2 id="tocS_AddActionResponse">AddActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddactionresponse"></a>
<a id="schema_AddActionResponse"></a>
<a id="tocSaddactionresponse"></a>
<a id="tocsaddactionresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_AddActionSendRequest">AddActionSendRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactionsendrequest"></a>
<a id="schema_AddActionSendRequest"></a>
<a id="tocSaddactionsendrequest"></a>
<a id="tocsaddactionsendrequest"></a>

```json
{
  "config": {
    "from": "string",
    "html": "string",
    "key": "string",
    "subject": "string",
    "text": "string",
    "to": "string",
    "type": "send"
  },
  "name": "string",
  "type": "mailscript-email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailscript-email|

<h2 id="tocS_AddActionSmsRequest">AddActionSmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactionsmsrequest"></a>
<a id="schema_AddActionSmsRequest"></a>
<a id="tocSaddactionsmsrequest"></a>
<a id="tocsaddactionsmsrequest"></a>

```json
{
  "config": {
    "number": "string",
    "text": "string"
  },
  "name": "string",
  "type": "sms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sms|

<h2 id="tocS_AddActionWebhookRequest">AddActionWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddactionwebhookrequest"></a>
<a id="schema_AddActionWebhookRequest"></a>
<a id="tocSaddactionwebhookrequest"></a>
<a id="tocsaddactionwebhookrequest"></a>

```json
{
  "config": {
    "body": "string",
    "opts": {
      "headers": {},
      "method": "POST"
    },
    "url": "string"
  },
  "name": "string",
  "type": "webhook"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|webhook|

<h2 id="tocS_AddAddressRequest">AddAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddaddressrequest"></a>
<a id="schema_AddAddressRequest"></a>
<a id="tocSaddaddressrequest"></a>
<a id="tocsaddaddressrequest"></a>

```json
{
  "address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|

<h2 id="tocS_AddDomainRequest">AddDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadddomainrequest"></a>
<a id="schema_AddDomainRequest"></a>
<a id="tocSadddomainrequest"></a>
<a id="tocsadddomainrequest"></a>

```json
{
  "domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|none|

<h2 id="tocS_AddEmailVerificationRequest">AddEmailVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddemailverificationrequest"></a>
<a id="schema_AddEmailVerificationRequest"></a>
<a id="tocSaddemailverificationrequest"></a>
<a id="tocsaddemailverificationrequest"></a>

```json
{
  "email": "string",
  "type": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|email|

<h2 id="tocS_AddKeyRequest">AddKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddkeyrequest"></a>
<a id="schema_AddKeyRequest"></a>
<a id="tocSaddkeyrequest"></a>
<a id="tocsaddkeyrequest"></a>

```json
{
  "name": "string",
  "read": true,
  "write": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|read|boolean|true|none|none|
|write|boolean|true|none|none|

<h2 id="tocS_AddKeyResponse">AddKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddkeyresponse"></a>
<a id="schema_AddKeyResponse"></a>
<a id="tocSaddkeyresponse"></a>
<a id="tocsaddkeyresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_AddSmsVerificationRequest">AddSmsVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddsmsverificationrequest"></a>
<a id="schema_AddSmsVerificationRequest"></a>
<a id="tocSaddsmsverificationrequest"></a>
<a id="tocsaddsmsverificationrequest"></a>

```json
{
  "sms": "string",
  "type": "sms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sms|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sms|

<h2 id="tocS_AddTriggerRequest">AddTriggerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddtriggerrequest"></a>
<a id="schema_AddTriggerRequest"></a>
<a id="tocSaddtriggerrequest"></a>
<a id="tocsaddtriggerrequest"></a>

```json
{
  "criteria": {
    "domain": "string",
    "from": "string",
    "hasAttachments": true,
    "hasTheWords": "string",
    "sentTo": "string",
    "subjectContains": "string"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteria|[Criteria](#schemacriteria) \| [CriteriaOperand](#schemacriteriaoperand)|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_AddTriggerResponse">AddTriggerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddtriggerresponse"></a>
<a id="schema_AddTriggerResponse"></a>
<a id="tocSaddtriggerresponse"></a>
<a id="tocsaddtriggerresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_AddVerificationResponse">AddVerificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddverificationresponse"></a>
<a id="schema_AddVerificationResponse"></a>
<a id="tocSaddverificationresponse"></a>
<a id="tocsaddverificationresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_AddWorkflowRequest">AddWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddworkflowrequest"></a>
<a id="schema_AddWorkflowRequest"></a>
<a id="tocSaddworkflowrequest"></a>
<a id="tocsaddworkflowrequest"></a>

```json
{
  "action": "string",
  "active": true,
  "input": "string",
  "name": "string",
  "trigger": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|active|boolean|false|none|none|
|input|string|true|none|none|
|name|string|true|none|none|
|trigger|string|false|none|none|

<h2 id="tocS_AddWorkspaceRequest">AddWorkspaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddworkspacerequest"></a>
<a id="schema_AddWorkspaceRequest"></a>
<a id="tocSaddworkspacerequest"></a>
<a id="tocsaddworkspacerequest"></a>

```json
{
  "workspace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workspace|string|true|none|none|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "displayName": "string",
  "id": "string",
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|createdBy|string|true|none|none|
|displayName|string|false|none|none|
|id|string|true|none|none|
|owner|string|true|none|none|

<h2 id="tocS_CheckDomainVerify">CheckDomainVerify</h2>
<!-- backwards compatibility -->
<a id="schemacheckdomainverify"></a>
<a id="schema_CheckDomainVerify"></a>
<a id="tocScheckdomainverify"></a>
<a id="tocscheckdomainverify"></a>

```json
{
  "domain": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|none|
|success|boolean|true|none|none|

<h2 id="tocS_Criteria">Criteria</h2>
<!-- backwards compatibility -->
<a id="schemacriteria"></a>
<a id="schema_Criteria"></a>
<a id="tocScriteria"></a>
<a id="tocscriteria"></a>

```json
{
  "domain": "string",
  "from": "string",
  "hasAttachments": true,
  "hasTheWords": "string",
  "sentTo": "string",
  "subjectContains": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|none|
|from|string|false|none|none|
|hasAttachments|boolean|false|none|none|
|hasTheWords|string|false|none|none|
|sentTo|string|false|none|none|
|subjectContains|string|false|none|none|

<h2 id="tocS_CriteriaOperand">CriteriaOperand</h2>
<!-- backwards compatibility -->
<a id="schemacriteriaoperand"></a>
<a id="schema_CriteriaOperand"></a>
<a id="tocScriteriaoperand"></a>
<a id="tocscriteriaoperand"></a>

```json
{
  "and": [
    "string"
  ],
  "or": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|and|[string]|false|none|none|
|or|[string]|false|none|none|

<h2 id="tocS_DomainResponse">DomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadomainresponse"></a>
<a id="schema_DomainResponse"></a>
<a id="tocSdomainresponse"></a>
<a id="tocsdomainresponse"></a>

```json
{
  "domain": "string",
  "records": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|none|
|records|[object]|true|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<h2 id="tocS_GetAllActionsResponse">GetAllActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallactionsresponse"></a>
<a id="schema_GetAllActionsResponse"></a>
<a id="tocSgetallactionsresponse"></a>
<a id="tocsgetallactionsresponse"></a>

```json
{
  "list": [
    {
      "config": {
        "html": "string",
        "subject": "string",
        "text": "string",
        "type": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "name": "string",
      "output": "string",
      "owner": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[ActionSend](#schemaactionsend) \| [ActionCombine](#schemaactioncombine)]|true|none|none|

<h2 id="tocS_GetAllAddressesResponse">GetAllAddressesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetalladdressesresponse"></a>
<a id="schema_GetAllAddressesResponse"></a>
<a id="tocSgetalladdressesresponse"></a>
<a id="tocsgetalladdressesresponse"></a>

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "displayName": "string",
      "id": "string",
      "owner": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[object]|true|none|none|

<h2 id="tocS_GetAllDomainsResponse">GetAllDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetalldomainsresponse"></a>
<a id="schema_GetAllDomainsResponse"></a>
<a id="tocSgetalldomainsresponse"></a>
<a id="tocsgetalldomainsresponse"></a>

```json
{
  "id": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[string]|false|none|none|

<h2 id="tocS_GetAllInputsResponse">GetAllInputsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallinputsresponse"></a>
<a id="schema_GetAllInputsResponse"></a>
<a id="tocSgetallinputsresponse"></a>
<a id="tocsgetallinputsresponse"></a>

```json
{
  "list": [
    {
      "address": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "name": "string",
      "owner": "string",
      "type": "mailescript-email"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[MailscriptEmailInput](#schemamailscriptemailinput)]|true|none|none|

<h2 id="tocS_GetAllIntegrationsResponse">GetAllIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallintegrationsresponse"></a>
<a id="schema_GetAllIntegrationsResponse"></a>
<a id="tocSgetallintegrationsresponse"></a>
<a id="tocsgetallintegrationsresponse"></a>

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "type": "google"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[Integration](#schemaintegration)]|true|none|none|

<h2 id="tocS_GetAllKeysResponse">GetAllKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallkeysresponse"></a>
<a id="schema_GetAllKeysResponse"></a>
<a id="tocSgetallkeysresponse"></a>
<a id="tocsgetallkeysresponse"></a>

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "name": "string",
      "read": true,
      "write": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[object]|true|none|none|

<h2 id="tocS_GetAllTriggersResponse">GetAllTriggersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetalltriggersresponse"></a>
<a id="schema_GetAllTriggersResponse"></a>
<a id="tocSgetalltriggersresponse"></a>
<a id="tocsgetalltriggersresponse"></a>

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "criteria": {
        "domain": "string",
        "from": "string",
        "hasAttachments": true,
        "hasTheWords": "string",
        "sentTo": "string",
        "subjectContains": "string"
      },
      "displayName": "string",
      "id": "string",
      "name": "string",
      "owner": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[Trigger](#schematrigger)]|true|none|none|

<h2 id="tocS_GetAllVerificationsResponse">GetAllVerificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallverificationsresponse"></a>
<a id="schema_GetAllVerificationsResponse"></a>
<a id="tocSgetallverificationsresponse"></a>
<a id="tocsgetallverificationsresponse"></a>

```json
{
  "list": [
    {
      "email": "string",
      "id": "string",
      "type": "email",
      "verified": true,
      "verifiedAt": "1970-01-01T00:00:00Z",
      "verifiedBy": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[VerificationEmail](#schemaverificationemail) \| [VerificationSms](#schemaverificationsms)]|true|none|none|

<h2 id="tocS_GetAllWorkflowsResponse">GetAllWorkflowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallworkflowsresponse"></a>
<a id="schema_GetAllWorkflowsResponse"></a>
<a id="tocSgetallworkflowsresponse"></a>
<a id="tocsgetallworkflowsresponse"></a>

```json
{
  "list": [
    {
      "action": "string",
      "active": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "input": "string",
      "name": "string",
      "owner": "string",
      "trigger": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[object]|true|none|none|

<h2 id="tocS_GetAllWorkspacesResponse">GetAllWorkspacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallworkspacesresponse"></a>
<a id="schema_GetAllWorkspacesResponse"></a>
<a id="tocSgetallworkspacesresponse"></a>
<a id="tocsgetallworkspacesresponse"></a>

```json
{
  "list": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": "string",
      "id": "string",
      "owner": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[object]|true|none|none|

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "type": "google"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|id|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|google|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "name": "string",
  "read": true,
  "write": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|createdBy|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|read|boolean|true|none|none|
|write|boolean|true|none|none|

<h2 id="tocS_KeyValuePair">KeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepair"></a>
<a id="schema_KeyValuePair"></a>
<a id="tocSkeyvaluepair"></a>
<a id="tocskeyvaluepair"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_MailscriptEmailInput">MailscriptEmailInput</h2>
<!-- backwards compatibility -->
<a id="schemamailscriptemailinput"></a>
<a id="schema_MailscriptEmailInput"></a>
<a id="tocSmailscriptemailinput"></a>
<a id="tocsmailscriptemailinput"></a>

```json
{
  "address": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "name": "string",
  "owner": "string",
  "type": "mailescript-email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|createdBy|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|owner|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailescript-email|

<h2 id="tocS_SendRequest">SendRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendrequest"></a>
<a id="schema_SendRequest"></a>
<a id="tocSsendrequest"></a>
<a id="tocssendrequest"></a>

```json
{
  "from": "string",
  "html": "string",
  "subject": "string",
  "text": "string",
  "to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|true|none|none|
|html|string|false|none|none|
|subject|string|true|none|none|
|text|string|false|none|none|
|to|string|true|none|none|

<h2 id="tocS_SetWorkflowRequest">SetWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetworkflowrequest"></a>
<a id="schema_SetWorkflowRequest"></a>
<a id="tocSsetworkflowrequest"></a>
<a id="tocssetworkflowrequest"></a>

```json
{
  "id": "string",
  "pairs": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|pairs|[object]|false|none|none|

<h2 id="tocS_Trigger">Trigger</h2>
<!-- backwards compatibility -->
<a id="schematrigger"></a>
<a id="schema_Trigger"></a>
<a id="tocStrigger"></a>
<a id="tocstrigger"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "criteria": {
    "domain": "string",
    "from": "string",
    "hasAttachments": true,
    "hasTheWords": "string",
    "sentTo": "string",
    "subjectContains": "string"
  },
  "displayName": "string",
  "id": "string",
  "name": "string",
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|createdBy|string|true|none|none|
|criteria|[Criteria](#schemacriteria)|true|none|none|
|displayName|string|false|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|owner|string|true|none|none|

<h2 id="tocS_UpdateKeyRequest">UpdateKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeyrequest"></a>
<a id="schema_UpdateKeyRequest"></a>
<a id="tocSupdatekeyrequest"></a>
<a id="tocsupdatekeyrequest"></a>

```json
{
  "name": "string",
  "read": true,
  "write": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|read|boolean|true|none|none|
|write|boolean|true|none|none|

<h2 id="tocS_UpdateUserRequest">UpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequest"></a>
<a id="schema_UpdateUserRequest"></a>
<a id="tocSupdateuserrequest"></a>
<a id="tocsupdateuserrequest"></a>

```json
{
  "displayName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "displayName": "string",
  "email": "string",
  "id": "string",
  "photoURL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|displayName|string|true|none|none|
|email|string|true|none|none|
|id|string|true|none|none|
|photoURL|string|false|none|none|

<h2 id="tocS_VerificationEmail">VerificationEmail</h2>
<!-- backwards compatibility -->
<a id="schemaverificationemail"></a>
<a id="schema_VerificationEmail"></a>
<a id="tocSverificationemail"></a>
<a id="tocsverificationemail"></a>

```json
{
  "email": "string",
  "id": "string",
  "type": "email",
  "verified": true,
  "verifiedAt": "1970-01-01T00:00:00Z",
  "verifiedBy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|id|string|false|none|none|
|type|string|false|none|none|
|verified|boolean|false|none|none|
|verifiedAt|string(date-time)|false|none|none|
|verifiedBy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|email|

<h2 id="tocS_VerificationSms">VerificationSms</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsms"></a>
<a id="schema_VerificationSms"></a>
<a id="tocSverificationsms"></a>
<a id="tocsverificationsms"></a>

```json
{
  "id": "string",
  "sms": "string",
  "type": "sms",
  "verified": true,
  "verifiedAt": "1970-01-01T00:00:00Z",
  "verifiedBy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|sms|string|false|none|none|
|type|string|false|none|none|
|verified|boolean|false|none|none|
|verifiedAt|string(date-time)|false|none|none|
|verifiedBy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sms|

<h2 id="tocS_VerifyEmailRequest">VerifyEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyemailrequest"></a>
<a id="schema_VerifyEmailRequest"></a>
<a id="tocSverifyemailrequest"></a>
<a id="tocsverifyemailrequest"></a>

```json
{
  "code": "string",
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|email|string|true|none|none|

<h2 id="tocS_VerifySmsRequest">VerifySmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifysmsrequest"></a>
<a id="schema_VerifySmsRequest"></a>
<a id="tocSverifysmsrequest"></a>
<a id="tocsverifysmsrequest"></a>

```json
{
  "code": "string",
  "sms": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|sms|string|true|none|none|

<h2 id="tocS_Workflow">Workflow</h2>
<!-- backwards compatibility -->
<a id="schemaworkflow"></a>
<a id="schema_Workflow"></a>
<a id="tocSworkflow"></a>
<a id="tocsworkflow"></a>

```json
{
  "action": "string",
  "active": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "input": "string",
  "name": "string",
  "owner": "string",
  "trigger": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|active|boolean|false|none|none|
|createdAt|string(date-time)|true|none|none|
|createdBy|string|true|none|none|
|id|string|true|none|none|
|input|string|true|none|none|
|name|string|true|none|none|
|owner|string|true|none|none|
|trigger|string|true|none|none|

<h2 id="tocS_Workspace">Workspace</h2>
<!-- backwards compatibility -->
<a id="schemaworkspace"></a>
<a id="schema_Workspace"></a>
<a id="tocSworkspace"></a>
<a id="tocsworkspace"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "id": "string",
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|createdBy|string|true|none|none|
|id|string|true|none|none|
|owner|string|true|none|none|
