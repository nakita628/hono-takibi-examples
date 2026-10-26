<h1 id="adyen-data-protection-api">Adyen Data Protection API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen Data Protection API provides a way for you to process [Subject Erasure Requests](https://gdpr-info.eu/art-17-gdpr/) as mandated in GDPR.

Use our API to submit a request to delete shopper's data, including payment details and other related information (for example, delivery address or shopper email).## Authentication
Each request to the Data Protection API must be signed with an API key. Get your API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:

```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: Your_API_key" \
...
```
Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
Data Protection Service API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://ca-test.adyen.com/ca/services/DataProtectionService/v1/requestSubjectErasure
```

Base URLs:

* <a href="https://ca-test.adyen.com/ca/services/DataProtectionService/v1">https://ca-test.adyen.com/ca/services/DataProtectionService/v1</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-data-protection-api-general">General</h1>

## Submit a Subject Erasure Request.

<a id="opIdpost-requestSubjectErasure"></a>

> Code samples

```bash
curl https://ca-test.adyen.com/ca/services/DataProtectionService/v1/requestSubjectErasure \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "forceErasure": true,
    "merchantAccount": "string",
    "pspReference": "string"
  }'
```

`POST /requestSubjectErasure`

Sends the PSP reference containing the shopper data that should be deleted.

> Body parameter

```json
{
  "forceErasure": true,
  "merchantAccount": "string",
  "pspReference": "string"
}
```

<h3 id="submit-a-subject-erasure-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubjectErasureByPspReferenceRequest](#schemasubjecterasurebypspreferencerequest)|false|none|
|» forceErasure|body|boolean|false|Set this to **true** if you want to delete shopper-related data, even if the shopper has an existing recurring transaction. This only deletes the shopper-related data for the specific payment, but does not cancel the existing recurring transaction.|
|» merchantAccount|body|string|false|Your merchant account|
|» pspReference|body|string|false|The PSP reference of the payment. We will delete all shopper-related data for this payment.|

> Example responses

> 200 Response

```json
{
  "result": "ACTIVE_RECURRING_TOKEN_EXISTS"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="submit-a-subject-erasure-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SubjectErasureResponse](#schemasubjecterasureresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|The error code mapped to the error message.|
|errorType|string|false|none|The category of the error.|
|message|string|false|none|A short explanation of the issue.|
|pspReference|string|false|none|The PSP reference of the payment.|
|status|integer(int32)|false|none|The HTTP response status.|

<h2 id="tocS_SubjectErasureByPspReferenceRequest">SubjectErasureByPspReferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubjecterasurebypspreferencerequest"></a>
<a id="schema_SubjectErasureByPspReferenceRequest"></a>
<a id="tocSsubjecterasurebypspreferencerequest"></a>
<a id="tocssubjecterasurebypspreferencerequest"></a>

```json
{
  "forceErasure": true,
  "merchantAccount": "string",
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forceErasure|boolean|false|none|Set this to **true** if you want to delete shopper-related data, even if the shopper has an existing recurring transaction. This only deletes the shopper-related data for the specific payment, but does not cancel the existing recurring transaction.|
|merchantAccount|string|false|none|Your merchant account|
|pspReference|string|false|none|The PSP reference of the payment. We will delete all shopper-related data for this payment.|

<h2 id="tocS_SubjectErasureResponse">SubjectErasureResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubjecterasureresponse"></a>
<a id="schema_SubjectErasureResponse"></a>
<a id="tocSsubjecterasureresponse"></a>
<a id="tocssubjecterasureresponse"></a>

```json
{
  "result": "ACTIVE_RECURRING_TOKEN_EXISTS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|The result of this operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|ACTIVE_RECURRING_TOKEN_EXISTS|
|result|ALREADY_PROCESSED|
|result|PAYMENT_NOT_FOUND|
|result|SUCCESS|
