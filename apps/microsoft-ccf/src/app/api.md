<h1 id="ccf-sample-logging-app">CCF Sample Logging App v2.8.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This CCF sample app implements a simple logging application, securely recording messages at client-specified IDs. It demonstrates most of the features available to CCF apps.

# Authentication

- HTTP Authentication, scheme: bearer

- HTTP Authentication, scheme: cose_sign1 Request payload must be a COSE Sign1 document, with expected protected headers. Signer must be a member identity registered with this service.

- HTTP Authentication, scheme: cose_sign1 Request payload must be a COSE Sign1 document, with expected protected headers. Signer must be a user identity registered with this service.

<h1 id="ccf-sample-logging-app-default">Default</h1>

## OpenAPI schema

<a id="opIdGetAppApi"></a>

> Code samples

```bash
curl https://localhost:8000/app/api \
  -H 'Accept: application/json'
```

`GET /app/api`

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="openapi-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Current commit level

<a id="opIdGetAppCommit"></a>

> Code samples

```bash
curl https://localhost:8000/app/commit \
  -H 'Accept: application/json'
```

`GET /app/commit`

Latest transaction ID that has been committed on the service

<h3 id="current-commit-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|view_history|query|[boolean](#schemaboolean)|false|none|
|view_history_since|query|[uint64](#schemauint64)|false|none|

> Example responses

> 200 Response

```json
{
  "transaction_id": "string",
  "view_history": [
    "string"
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="current-commit-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetCommit__Out](#schemagetcommit__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppCoseSignaturesConfig

<a id="opIdGetAppCoseSignaturesConfig"></a>

> Code samples

```bash
curl https://localhost:8000/app/cose_signatures_config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/cose_signatures_config`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getappcosesignaturesconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppCustomAuth

<a id="opIdGetAppCustomAuth"></a>

> Code samples

```bash
curl https://localhost:8000/app/custom_auth \
  -H 'Accept: application/json'
```

`GET /app/custom_auth`

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getappcustomauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppLogBlockingPrivate

<a id="opIdGetAppLogBlockingPrivate"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/blocking/private?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/blocking/private`

<h3 id="getapplogblockingprivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogblockingprivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGet__Out](#schemaloggingget__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogBlockingPrivate

<a id="opIdPostAppLogBlockingPrivate"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/blocking/private \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "msg": "string",
    "record_claim": true
  }'
```

`POST /app/log/blocking/private`

> Body parameter

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

<h3 id="postapplogblockingprivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoggingRecord__In](#schemaloggingrecord__in)|false|Auto-generated request body schema|
|» id|body|[uint64](#schemauint64)|true|none|
|» msg|body|[string](#schemastring)|true|none|
|» record_claim|body|[boolean](#schemaboolean)|false|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogblockingprivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogBlockingPrivateReceipt

<a id="opIdPostAppLogBlockingPrivateReceipt"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/blocking/private/receipt \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /app/log/blocking/private/receipt`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogblockingprivatereceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogCoseSignedContent

<a id="opIdPostAppLogCoseSignedContent"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/cose_signed_content \
  -X POST \
  -H 'Accept: application/json'
```

`POST /app/log/cose_signed_content`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogcosesignedcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
member_cose_sign1
</aside>

## GetAppLogPrivate

<a id="opIdGetAppLogPrivate"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/private?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/private`

<h3 id="getapplogprivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogprivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGet__Out](#schemaloggingget__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogPrivate

<a id="opIdPostAppLogPrivate"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "msg": "string",
    "record_claim": true
  }'
```

`POST /app/log/private`

> Body parameter

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

<h3 id="postapplogprivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoggingRecord__In](#schemaloggingrecord__in)|false|Auto-generated request body schema|
|» id|body|[uint64](#schemauint64)|true|none|
|» msg|body|[string](#schemastring)|true|none|
|» record_claim|body|[boolean](#schemaboolean)|false|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## DeleteAppLogPrivate

<a id="opIdDeleteAppLogPrivate"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/private?id=0' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /app/log/private`

<h3 id="deleteapplogprivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="deleteapplogprivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogPrivateAdminOnly

<a id="opIdPostAppLogPrivateAdminOnly"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/admin_only \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0,
    "msg": "string",
    "record_claim": true
  }'
```

`POST /app/log/private/admin_only`

> Body parameter

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

<h3 id="postapplogprivateadminonly-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoggingRecord__In](#schemaloggingrecord__in)|false|Auto-generated request body schema|
|» id|body|[uint64](#schemauint64)|true|none|
|» msg|body|[string](#schemastring)|true|none|
|» record_claim|body|[boolean](#schemaboolean)|false|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivateadminonly-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## DeleteAppLogPrivateAll

<a id="opIdDeleteAppLogPrivateAll"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/all \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /app/log/private/all`

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="deleteapplogprivateall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogPrivateAnonymous

<a id="opIdPostAppLogPrivateAnonymous"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/anonymous \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0,
    "msg": "string",
    "record_claim": true
  }'
```

`POST /app/log/private/anonymous`

> Body parameter

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

<h3 id="postapplogprivateanonymous-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoggingRecord__In](#schemaloggingrecord__in)|false|Auto-generated request body schema|
|» id|body|[uint64](#schemauint64)|true|none|
|» msg|body|[string](#schemastring)|true|none|
|» record_claim|body|[boolean](#schemaboolean)|false|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivateanonymous-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## PostAppLogPrivateAnonymousV2

<a id="opIdPostAppLogPrivateAnonymousV2"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/anonymous/v2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0,
    "msg": "string",
    "record_claim": true
  }'
```

`POST /app/log/private/anonymous/v2`

> Body parameter

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

<h3 id="postapplogprivateanonymousv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoggingRecord__In](#schemaloggingrecord__in)|false|Auto-generated request body schema|
|» id|body|[uint64](#schemauint64)|true|none|
|» msg|body|[string](#schemastring)|true|none|
|» record_claim|body|[boolean](#schemaboolean)|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "tx_id": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivateanonymousv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingPut__Out](#schemaloggingput__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppLogPrivateBackup

<a id="opIdGetAppLogPrivateBackup"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/private/backup?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/private/backup`

<h3 id="getapplogprivatebackup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogprivatebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGet__Out](#schemaloggingget__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPrivateCommitted

<a id="opIdGetAppLogPrivateCommitted"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/private/committed?id=0' \
  -H 'Accept: application/json'
```

`GET /app/log/private/committed`

<h3 id="getapplogprivatecommitted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogprivatecommitted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGet__Out](#schemaloggingget__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppLogPrivateCount

<a id="opIdGetAppLogPrivateCount"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/private/count`

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogprivatecount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[uint64](#schemauint64)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPrivateHistorical

<a id="opIdGetAppLogPrivateHistorical"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/private/historical?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/private/historical`

<h3 id="getapplogprivatehistorical-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogprivatehistorical-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGet__Out](#schemaloggingget__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPrivateHistoricalHandle

<a id="opIdGetAppLogPrivateHistoricalHandle"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/private/historical/handle?handle=0&seqno=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/private/historical/handle`

<h3 id="getapplogprivatehistoricalhandle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|handle|query|[uint64](#schemauint64)|true|none|
|seqno|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogprivatehistoricalhandle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPrivateHistoricalSparse

<a id="opIdGetAppLogPrivateHistoricalSparse"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/private/historical/sparse?seqnos=string&id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/private/historical/sparse`

<h3 id="getapplogprivatehistoricalsparse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seqnos|query|[string](#schemastring)|true|none|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "@nextLink": "string",
  "entries": [
    {
      "id": 0,
      "msg": "string",
      "seqno": 0
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogprivatehistoricalsparse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGetHistoricalRange__Out](#schemalogginggethistoricalrange__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPrivateHistoricalReceipt

<a id="opIdGetAppLogPrivateHistoricalReceipt"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/private/historical_receipt?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/private/historical_receipt`

<h3 id="getapplogprivatehistoricalreceipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string",
  "receipt": null
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogprivatehistoricalreceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGetReceipt__Out](#schemalogginggetreceipt__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogPrivateInstallCommittedIndex

<a id="opIdPostAppLogPrivateInstallCommittedIndex"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/install_committed_index \
  -X POST \
  -H 'Accept: application/json'
```

`POST /app/log/private/install_committed_index`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivateinstallcommittedindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## PostAppLogPrivateOptionalCommit

<a id="opIdPostAppLogPrivateOptionalCommit"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/optional_commit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "msg": "string",
    "record_claim": true
  }'
```

`POST /app/log/private/optional_commit`

> Body parameter

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

<h3 id="postapplogprivateoptionalcommit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wait_for_commit|query|[boolean](#schemaboolean)|false|none|
|body|body|[LoggingRecord__In](#schemaloggingrecord__in)|false|Auto-generated request body schema|
|» id|body|[uint64](#schemauint64)|true|none|
|» msg|body|[string](#schemastring)|true|none|
|» record_claim|body|[boolean](#schemaboolean)|false|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivateoptionalcommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogPrivatePrefixCert

<a id="opIdPostAppLogPrivatePrefixCert"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/prefix_cert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0,
    "msg": "string",
    "record_claim": true
  }'
```

`POST /app/log/private/prefix_cert`

> Body parameter

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

<h3 id="postapplogprivateprefixcert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoggingRecord__In](#schemaloggingrecord__in)|false|Auto-generated request body schema|
|» id|body|[uint64](#schemauint64)|true|none|
|» msg|body|[string](#schemastring)|true|none|
|» record_claim|body|[boolean](#schemaboolean)|false|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivateprefixcert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## PostAppLogPrivateRawTextId

<a id="opIdPostAppLogPrivateRawTextId"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/raw_text/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /app/log/private/raw_text/{id}`

<h3 id="postapplogprivaterawtextid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivaterawtextid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogPrivateUninstallCommittedIndex

<a id="opIdPostAppLogPrivateUninstallCommittedIndex"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/private/uninstall_committed_index \
  -X POST \
  -H 'Accept: application/json'
```

`POST /app/log/private/uninstall_committed_index`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogprivateuninstallcommittedindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppLogPublic

<a id="opIdGetAppLogPublic"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/public?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/public`

<h3 id="getapplogpublic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpublic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGet__Out](#schemaloggingget__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## PostAppLogPublic

<a id="opIdPostAppLogPublic"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/public \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "msg": "string",
    "record_claim": true
  }'
```

`POST /app/log/public`

> Body parameter

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

<h3 id="postapplogpublic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoggingRecord__In](#schemaloggingrecord__in)|false|Auto-generated request body schema|
|» id|body|[uint64](#schemauint64)|true|none|
|» msg|body|[string](#schemastring)|true|none|
|» record_claim|body|[boolean](#schemaboolean)|false|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogpublic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## DeleteAppLogPublic

<a id="opIdDeleteAppLogPublic"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/public?id=0' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /app/log/public`

<h3 id="deleteapplogpublic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="deleteapplogpublic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## DeleteAppLogPublicAll

<a id="opIdDeleteAppLogPublicAll"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/public/all \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /app/log/public/all`

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="deleteapplogpublicall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPublicBackup

<a id="opIdGetAppLogPublicBackup"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/public/backup?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/public/backup`

<h3 id="getapplogpublicbackup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpublicbackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGet__Out](#schemaloggingget__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPublicCoseEndorsements

<a id="opIdGetAppLogPublicCoseEndorsements"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/public/cose_endorsements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/public/cose_endorsements`

> Example responses

> 200 Response

```json
{
  "endorsements": [
    "string"
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpubliccoseendorsements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGetCoseEndorsements__Out](#schemalogginggetcoseendorsements__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPublicCoseReceipt

<a id="opIdGetAppLogPublicCoseReceipt"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/public/cose_receipt \
  -H 'Accept: application/json'
```

`GET /app/log/public/cose_receipt`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpubliccosereceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppLogPublicCoseSignature

<a id="opIdGetAppLogPublicCoseSignature"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/public/cose_signature \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/public/cose_signature`

> Example responses

> 200 Response

```json
{
  "cose_signature": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpubliccosesignature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGetCoseSignature__Out](#schemalogginggetcosesignature__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPublicCount

<a id="opIdGetAppLogPublicCount"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/public/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/public/count`

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpubliccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[uint64](#schemauint64)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPublicHistoricalRange

<a id="opIdGetAppLogPublicHistoricalRange"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/public/historical/range?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/public/historical/range`

<h3 id="getapplogpublichistoricalrange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from_seqno|query|[uint64](#schemauint64)|false|none|
|to_seqno|query|[uint64](#schemauint64)|false|none|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "@nextLink": "string",
  "entries": [
    {
      "id": 0,
      "msg": "string",
      "seqno": 0
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpublichistoricalrange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGetHistoricalRange__Out](#schemalogginggethistoricalrange__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPublicHistoricalReceipt

<a id="opIdGetAppLogPublicHistoricalReceipt"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/log/public/historical_receipt?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /app/log/public/historical_receipt`

<h3 id="getapplogpublichistoricalreceipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[uint64](#schemauint64)|true|none|

> Example responses

> 200 Response

```json
{
  "msg": "string",
  "receipt": null
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpublichistoricalreceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[LoggingGetReceipt__Out](#schemalogginggetreceipt__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt, user_cose_sign1
</aside>

## GetAppLogPublicTrustedKeys

<a id="opIdGetAppLogPublicTrustedKeys"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/public/trusted_keys \
  -H 'Accept: application/json'
```

`GET /app/log/public/trusted_keys`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpublictrustedkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppLogPublicVerifyCoseReceipt

<a id="opIdGetAppLogPublicVerifyCoseReceipt"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/public/verify_cose_receipt \
  -H 'Accept: application/json'
```

`GET /app/log/public/verify_cose_receipt`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogpublicverifycosereceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppLogRequestQuery

<a id="opIdGetAppLogRequestQuery"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/request_query \
  -H 'Accept: application/json'
```

`GET /app/log/request_query`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogrequestquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## PostAppLogSignedStatement

<a id="opIdPostAppLogSignedStatement"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/signed_statement \
  -X POST \
  -H 'Accept: application/json'
```

`POST /app/log/signed_statement`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postapplogsignedstatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetAppLogTransparentStatement

<a id="opIdGetAppLogTransparentStatement"></a>

> Code samples

```bash
curl https://localhost:8000/app/log/transparent_statement \
  -H 'Accept: application/json'
```

`GET /app/log/transparent_statement`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getapplogtransparentstatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## PostAppMultiAuth

<a id="opIdPostAppMultiAuth"></a>

> Code samples

```bash
curl https://localhost:8000/app/multi_auth \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /app/multi_auth`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postappmultiauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
jwt, user_cose_sign1
</aside>

## Receipt for a transaction

<a id="opIdGetAppReceipt"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/receipt?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /app/receipt`

A signed statement from the service over a transaction entry in the ledger

<h3 id="receipt-for-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="receipt-for-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|202|Accepted|The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## COSE receipt for a transaction

<a id="opIdGetAppReceiptCose"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/receipt/cose?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /app/receipt/cose`

A COSE Sign1 envelope containing a signed statement from the service over a transaction entry in the ledger, with a Merkle proof in the unprotected header. See https://datatracker.ietf.org/doc/draft-ietf-scitt-receipts-ccf-profile/ for a complete description.

<h3 id="cose-receipt-for-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="cose-receipt-for-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Cose](#schemacose)|
|202|Accepted|The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Current status of a transaction

<a id="opIdGetAppTx"></a>

> Code samples

```bash
curl 'https://localhost:8000/app/tx?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /app/tx`

Possible statuses returned are Unknown, Pending, Committed or Invalid.

<h3 id="current-status-of-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "Unknown",
  "transaction_id": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="current-status-of-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetTxStatus__Out](#schemagettxstatus__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CCFError">CCFError</h2>
<!-- backwards compatibility -->
<a id="schemaccferror"></a>
<a id="schema_CCFError"></a>
<a id="tocSccferror"></a>
<a id="tocsccferror"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|

<h2 id="tocS_Cose">Cose</h2>
<!-- backwards compatibility -->
<a id="schemacose"></a>
<a id="schema_Cose"></a>
<a id="tocScose"></a>
<a id="tocscose"></a>

```json
"string"
```

<h2 id="tocS_GetCommit__Out">GetCommit__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetcommit__out"></a>
<a id="schema_GetCommit__Out"></a>
<a id="tocSgetcommit__out"></a>
<a id="tocsgetcommit__out"></a>

```json
{
  "transaction_id": "string",
  "view_history": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_id|[TransactionId](#schematransactionid)|true|none|none|
|view_history|[TransactionId_array](#schematransactionid_array)|false|none|none|

<h2 id="tocS_GetTxStatus__Out">GetTxStatus__Out</h2>
<!-- backwards compatibility -->
<a id="schemagettxstatus__out"></a>
<a id="schema_GetTxStatus__Out"></a>
<a id="tocSgettxstatus__out"></a>
<a id="tocsgettxstatus__out"></a>

```json
{
  "status": "Unknown",
  "transaction_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[TxStatus](#schematxstatus)|true|none|none|
|transaction_id|[TransactionId](#schematransactionid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Unknown|
|status|Pending|
|status|Committed|
|status|Invalid|

<h2 id="tocS_LoggingGetCoseEndorsements__Out">LoggingGetCoseEndorsements__Out</h2>
<!-- backwards compatibility -->
<a id="schemalogginggetcoseendorsements__out"></a>
<a id="schema_LoggingGetCoseEndorsements__Out"></a>
<a id="tocSlogginggetcoseendorsements__out"></a>
<a id="tocslogginggetcoseendorsements__out"></a>

```json
{
  "endorsements": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endorsements|[base64string_array](#schemabase64string_array) \| object \| null|true|none|none|

<h2 id="tocS_LoggingGetCoseSignature__Out">LoggingGetCoseSignature__Out</h2>
<!-- backwards compatibility -->
<a id="schemalogginggetcosesignature__out"></a>
<a id="schema_LoggingGetCoseSignature__Out"></a>
<a id="tocSlogginggetcosesignature__out"></a>
<a id="tocslogginggetcosesignature__out"></a>

```json
{
  "cose_signature": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cose_signature|[base64string](#schemabase64string)|true|none|none|

<h2 id="tocS_LoggingGetHistoricalRange__Entry">LoggingGetHistoricalRange__Entry</h2>
<!-- backwards compatibility -->
<a id="schemalogginggethistoricalrange__entry"></a>
<a id="schema_LoggingGetHistoricalRange__Entry"></a>
<a id="tocSlogginggethistoricalrange__entry"></a>
<a id="tocslogginggethistoricalrange__entry"></a>

```json
{
  "id": 0,
  "msg": "string",
  "seqno": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[uint64](#schemauint64)|true|none|none|
|msg|[string](#schemastring)|true|none|none|
|seqno|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_LoggingGetHistoricalRange__Entry_array">LoggingGetHistoricalRange__Entry_array</h2>
<!-- backwards compatibility -->
<a id="schemalogginggethistoricalrange__entry_array"></a>
<a id="schema_LoggingGetHistoricalRange__Entry_array"></a>
<a id="tocSlogginggethistoricalrange__entry_array"></a>
<a id="tocslogginggethistoricalrange__entry_array"></a>

```json
[
  {
    "id": 0,
    "msg": "string",
    "seqno": 0
  }
]
```

<h2 id="tocS_LoggingGetHistoricalRange__Out">LoggingGetHistoricalRange__Out</h2>
<!-- backwards compatibility -->
<a id="schemalogginggethistoricalrange__out"></a>
<a id="schema_LoggingGetHistoricalRange__Out"></a>
<a id="tocSlogginggethistoricalrange__out"></a>
<a id="tocslogginggethistoricalrange__out"></a>

```json
{
  "@nextLink": "string",
  "entries": [
    {
      "id": 0,
      "msg": "string",
      "seqno": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@nextLink|[string](#schemastring)|false|none|none|
|entries|[LoggingGetHistoricalRange__Entry_array](#schemalogginggethistoricalrange__entry_array)|true|none|none|

<h2 id="tocS_LoggingGetReceipt__Out">LoggingGetReceipt__Out</h2>
<!-- backwards compatibility -->
<a id="schemalogginggetreceipt__out"></a>
<a id="schema_LoggingGetReceipt__Out"></a>
<a id="tocSlogginggetreceipt__out"></a>
<a id="tocslogginggetreceipt__out"></a>

```json
{
  "msg": "string",
  "receipt": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|[string](#schemastring)|true|none|none|
|receipt|[json](#schemajson)|true|none|none|

<h2 id="tocS_LoggingGet__Out">LoggingGet__Out</h2>
<!-- backwards compatibility -->
<a id="schemaloggingget__out"></a>
<a id="schema_LoggingGet__Out"></a>
<a id="tocSloggingget__out"></a>
<a id="tocsloggingget__out"></a>

```json
{
  "msg": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|[string](#schemastring)|true|none|none|

<h2 id="tocS_LoggingPut__Out">LoggingPut__Out</h2>
<!-- backwards compatibility -->
<a id="schemaloggingput__out"></a>
<a id="schema_LoggingPut__Out"></a>
<a id="tocSloggingput__out"></a>
<a id="tocsloggingput__out"></a>

```json
{
  "success": true,
  "tx_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|[boolean](#schemaboolean)|true|none|none|
|tx_id|[string](#schemastring)|true|none|none|

<h2 id="tocS_LoggingRecord__In">LoggingRecord__In</h2>
<!-- backwards compatibility -->
<a id="schemaloggingrecord__in"></a>
<a id="schema_LoggingRecord__In"></a>
<a id="tocSloggingrecord__in"></a>
<a id="tocsloggingrecord__in"></a>

```json
{
  "id": 0,
  "msg": "string",
  "record_claim": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[uint64](#schemauint64)|true|none|none|
|msg|[string](#schemastring)|true|none|none|
|record_claim|[boolean](#schemaboolean)|false|none|none|

<h2 id="tocS_TransactionId">TransactionId</h2>
<!-- backwards compatibility -->
<a id="schematransactionid"></a>
<a id="schema_TransactionId"></a>
<a id="tocStransactionid"></a>
<a id="tocstransactionid"></a>

```json
"string"
```

<h2 id="tocS_TransactionId_array">TransactionId_array</h2>
<!-- backwards compatibility -->
<a id="schematransactionid_array"></a>
<a id="schema_TransactionId_array"></a>
<a id="tocStransactionid_array"></a>
<a id="tocstransactionid_array"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TxStatus">TxStatus</h2>
<!-- backwards compatibility -->
<a id="schematxstatus"></a>
<a id="schema_TxStatus"></a>
<a id="tocStxstatus"></a>
<a id="tocstxstatus"></a>

```json
"Unknown"
```

<h2 id="tocS_base64string">base64string</h2>
<!-- backwards compatibility -->
<a id="schemabase64string"></a>
<a id="schema_base64string"></a>
<a id="tocSbase64string"></a>
<a id="tocsbase64string"></a>

```json
"string"
```

<h2 id="tocS_base64string_array">base64string_array</h2>
<!-- backwards compatibility -->
<a id="schemabase64string_array"></a>
<a id="schema_base64string_array"></a>
<a id="tocSbase64string_array"></a>
<a id="tocsbase64string_array"></a>

```json
[
  "string"
]
```

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_json">json</h2>
<!-- backwards compatibility -->
<a id="schemajson"></a>
<a id="schema_json"></a>
<a id="tocSjson"></a>
<a id="tocsjson"></a>

```json
null
```

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_uint64">uint64</h2>
<!-- backwards compatibility -->
<a id="schemauint64"></a>
<a id="schema_uint64"></a>
<a id="tocSuint64"></a>
<a id="tocsuint64"></a>

```json
0
```
