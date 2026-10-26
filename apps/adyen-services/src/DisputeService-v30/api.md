<h1 id="disputes-api">Disputes API v30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

You can use the [Disputes API](https://docs.adyen.com/risk-management/disputes-api) to automate the dispute handling process so that you can respond to disputes and chargebacks as soon as they are initiated. The Disputes API lets you retrieve defense reasons, supply and delete defense documents, and accept or defend disputes.

## Authentication
Each request to the Disputes API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:

```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: Your_API_key" \
...
```
Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
Disputes API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://ca-test.adyen.com/ca/services/DisputeService/v30/defendDispute
```

Base URLs:

* <a href="https://ca-test.adyen.com/ca/services/DisputeService/v30">https://ca-test.adyen.com/ca/services/DisputeService/v30</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="disputes-api-general">General</h1>

## Accept a dispute

<a id="opIdpost-acceptDispute"></a>

> Code samples

```bash
curl https://ca-test.adyen.com/ca/services/DisputeService/v30/acceptDispute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "disputePspReference": "DZ4DPSHB4WD2WN82",
    "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /acceptDispute`

Accepts a specific dispute.

> Body parameter

```json
{
  "disputePspReference": "DZ4DPSHB4WD2WN82",
  "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="accept-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AcceptDisputeRequest](#schemaacceptdisputerequest)|false|none|
|» disputePspReference|body|string|true|The PSP reference assigned to the dispute.|
|» merchantAccountCode|body|string|true|The merchant account identifier, for which you want to process the dispute transaction.|

> Example responses

> 200 Response

```json
{
  "disputeServiceResult": {
    "success": true
  }
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

<h3 id="accept-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AcceptDisputeResponse](#schemaacceptdisputeresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Defend a dispute

<a id="opIdpost-defendDispute"></a>

> Code samples

```bash
curl https://ca-test.adyen.com/ca/services/DisputeService/v30/defendDispute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "defenseReasonCode": "SupplyDefenseMaterial",
    "disputePspReference": "DZ4DPSHB4WD2WN82",
    "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /defendDispute`

Defends a specific dispute.

> Body parameter

```json
{
  "defenseReasonCode": "SupplyDefenseMaterial",
  "disputePspReference": "DZ4DPSHB4WD2WN82",
  "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="defend-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DefendDisputeRequest](#schemadefenddisputerequest)|false|none|
|» defenseReasonCode|body|string|true|The defense reason code that was selected to defend this dispute.|
|» disputePspReference|body|string|true|The PSP reference assigned to the dispute.|
|» merchantAccountCode|body|string|true|The merchant account identifier, for which you want to process the dispute transaction.|

> Example responses

> 200 Response

```json
{
  "disputeServiceResult": {
    "success": true
  }
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

<h3 id="defend-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DefendDisputeResponse](#schemadefenddisputeresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete a defense document

<a id="opIdpost-deleteDisputeDefenseDocument"></a>

> Code samples

```bash
curl https://ca-test.adyen.com/ca/services/DisputeService/v30/deleteDisputeDefenseDocument \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "defenseDocumentType": "DefenseMaterial",
    "disputePspReference": "DZ4DPSHB4WD2WN82",
    "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /deleteDisputeDefenseDocument`

Deletes a specific dispute defense document that was supplied earlier.

> Body parameter

```json
{
  "defenseDocumentType": "DefenseMaterial",
  "disputePspReference": "DZ4DPSHB4WD2WN82",
  "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="delete-a-defense-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteDefenseDocumentRequest](#schemadeletedefensedocumentrequest)|false|none|
|» defenseDocumentType|body|string|true|The document type code of the defense document.|
|» disputePspReference|body|string|true|The PSP reference assigned to the dispute.|
|» merchantAccountCode|body|string|true|The merchant account identifier, for which you want to process the dispute transaction.|

> Example responses

> 200 Response

```json
{
  "disputeServiceResult": {
    "success": true
  }
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

<h3 id="delete-a-defense-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DeleteDefenseDocumentResponse](#schemadeletedefensedocumentresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get applicable defense reasons

<a id="opIdpost-retrieveApplicableDefenseReasons"></a>

> Code samples

```bash
curl https://ca-test.adyen.com/ca/services/DisputeService/v30/retrieveApplicableDefenseReasons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "disputePspReference": "DZ4DPSHB4WD2WN82",
    "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /retrieveApplicableDefenseReasons`

Returns a list of all applicable defense reasons to defend a specific dispute.

> Body parameter

```json
{
  "disputePspReference": "DZ4DPSHB4WD2WN82",
  "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="get-applicable-defense-reasons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DefenseReasonsRequest](#schemadefensereasonsrequest)|false|none|
|» disputePspReference|body|string|true|The PSP reference assigned to the dispute.|
|» merchantAccountCode|body|string|true|The merchant account identifier, for which you want to process the dispute transaction.|

> Example responses

> 200 Response

```json
{
  "defenseReasons": [
    {
      "defenseDocumentTypes": [
        {
          "available": false,
          "defenseDocumentTypeCode": "TIDorInvoice",
          "requirementLevel": "Optional"
        },
        {
          "available": false,
          "defenseDocumentTypeCode": "GoodsNotReturned",
          "requirementLevel": "Required"
        }
      ],
      "defenseReasonCode": "GoodsNotReturned",
      "satisfied": false
    },
    {
      "defenseDocumentTypes": [
        {
          "available": false,
          "defenseDocumentTypeCode": "TIDorInvoice",
          "requirementLevel": "Optional"
        },
        {
          "available": false,
          "defenseDocumentTypeCode": "GoodsRepairedOrReplaced",
          "requirementLevel": "Required"
        }
      ],
      "defenseReasonCode": "GoodsRepairedOrReplaced",
      "satisfied": false
    },
    {
      "defenseDocumentTypes": [
        {
          "available": false,
          "defenseDocumentTypeCode": "GoodsWereAsDescribed",
          "requirementLevel": "Required"
        },
        {
          "available": false,
          "defenseDocumentTypeCode": "TIDorInvoice",
          "requirementLevel": "Required"
        }
      ],
      "defenseReasonCode": "GoodsWereAsDescribed",
      "satisfied": false
    },
    {
      "defenseDocumentTypes": [
        {
          "available": false,
          "defenseDocumentTypeCode": "TIDorInvoice",
          "requirementLevel": "Optional"
        },
        {
          "available": false,
          "defenseDocumentTypeCode": "DefenseMaterial",
          "requirementLevel": "Required"
        }
      ],
      "defenseReasonCode": "SupplyDefenseMaterial",
      "satisfied": false
    }
  ],
  "disputeServiceResult": {
    "success": true
  }
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

<h3 id="get-applicable-defense-reasons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DefenseReasonsResponse](#schemadefensereasonsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Supply a defense document

<a id="opIdpost-supplyDefenseDocument"></a>

> Code samples

```bash
curl https://ca-test.adyen.com/ca/services/DisputeService/v30/supplyDefenseDocument \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "defenseDocuments": [
      {
        "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==",
        "contentType": "application/pdf",
        "defenseDocumentTypeCode": "DefenseMaterial"
      }
    ],
    "disputePspReference": "DZ4DPSHB4WD2WN82",
    "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /supplyDefenseDocument`

Supplies a specific dispute defense document.

> Body parameter

```json
{
  "defenseDocuments": [
    {
      "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==",
      "contentType": "application/pdf",
      "defenseDocumentTypeCode": "DefenseMaterial"
    }
  ],
  "disputePspReference": "DZ4DPSHB4WD2WN82",
  "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="supply-a-defense-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SupplyDefenseDocumentRequest](#schemasupplydefensedocumentrequest)|false|none|
|» defenseDocuments|body|[[DefenseDocument](#schemadefensedocument)]|true|An array containing a list of the defense documents.|
|» disputePspReference|body|string|true|The PSP reference assigned to the dispute.|
|» merchantAccountCode|body|string|true|The merchant account identifier, for which you want to process the dispute transaction.|

> Example responses

> 200 Response

```json
{
  "disputeServiceResult": {
    "success": true
  }
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

<h3 id="supply-a-defense-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SupplyDefenseDocumentResponse](#schemasupplydefensedocumentresponse)|
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

<h2 id="tocS_AcceptDisputeRequest">AcceptDisputeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptdisputerequest"></a>
<a id="schema_AcceptDisputeRequest"></a>
<a id="tocSacceptdisputerequest"></a>
<a id="tocsacceptdisputerequest"></a>

```json
{
  "disputePspReference": "string",
  "merchantAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disputePspReference|string|true|none|The PSP reference assigned to the dispute.|
|merchantAccountCode|string|true|none|The merchant account identifier, for which you want to process the dispute transaction.|

<h2 id="tocS_AcceptDisputeResponse">AcceptDisputeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptdisputeresponse"></a>
<a id="schema_AcceptDisputeResponse"></a>
<a id="tocSacceptdisputeresponse"></a>
<a id="tocsacceptdisputeresponse"></a>

```json
{
  "disputeServiceResult": {
    "errorMessage": "string",
    "success": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disputeServiceResult|[DisputeServiceResult](#schemadisputeserviceresult)|true|none|The result of the dispute service.|

<h2 id="tocS_DefendDisputeRequest">DefendDisputeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadefenddisputerequest"></a>
<a id="schema_DefendDisputeRequest"></a>
<a id="tocSdefenddisputerequest"></a>
<a id="tocsdefenddisputerequest"></a>

```json
{
  "defenseReasonCode": "string",
  "disputePspReference": "string",
  "merchantAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defenseReasonCode|string|true|none|The defense reason code that was selected to defend this dispute.|
|disputePspReference|string|true|none|The PSP reference assigned to the dispute.|
|merchantAccountCode|string|true|none|The merchant account identifier, for which you want to process the dispute transaction.|

<h2 id="tocS_DefendDisputeResponse">DefendDisputeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefenddisputeresponse"></a>
<a id="schema_DefendDisputeResponse"></a>
<a id="tocSdefenddisputeresponse"></a>
<a id="tocsdefenddisputeresponse"></a>

```json
{
  "disputeServiceResult": {
    "errorMessage": "string",
    "success": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disputeServiceResult|[DisputeServiceResult](#schemadisputeserviceresult)|true|none|The result of the dispute service.|

<h2 id="tocS_DefenseDocument">DefenseDocument</h2>
<!-- backwards compatibility -->
<a id="schemadefensedocument"></a>
<a id="schema_DefenseDocument"></a>
<a id="tocSdefensedocument"></a>
<a id="tocsdefensedocument"></a>

```json
{
  "content": "string",
  "contentType": "string",
  "defenseDocumentTypeCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|true|none|The content of the defense document.|
|contentType|string|true|none|The content type of the defense document.|
|defenseDocumentTypeCode|string|true|none|The document type code of the defense document.|

<h2 id="tocS_DefenseDocumentType">DefenseDocumentType</h2>
<!-- backwards compatibility -->
<a id="schemadefensedocumenttype"></a>
<a id="schema_DefenseDocumentType"></a>
<a id="tocSdefensedocumenttype"></a>
<a id="tocsdefensedocumenttype"></a>

```json
{
  "available": true,
  "defenseDocumentTypeCode": "string",
  "requirementLevel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|true|none|When **true**, you've successfully uploaded this type of defense document. When **false**, you haven't uploaded this defense document type.|
|defenseDocumentTypeCode|string|true|none|The document type code of the defense document.|
|requirementLevel|string|true|none|Indicates to what extent the defense document is required in the defense process.<br><br>Possible values: <br><br>* **Required**: You must supply the document.<br><br> * **OneOrMore**: You must supply at least one of the documents with this label.<br><br>* **Optional**: You can choose to supply the document.<br><br>* **AlternativeRequired**: You must supply a generic defense document. To enable this functionality, contact our Support Team. When enabled, you can supply a generic defense document for all schemes.|

<h2 id="tocS_DefenseReason">DefenseReason</h2>
<!-- backwards compatibility -->
<a id="schemadefensereason"></a>
<a id="schema_DefenseReason"></a>
<a id="tocSdefensereason"></a>
<a id="tocsdefensereason"></a>

```json
{
  "defenseDocumentTypes": [
    {
      "available": true,
      "defenseDocumentTypeCode": "string",
      "requirementLevel": "string"
    }
  ],
  "defenseReasonCode": "string",
  "satisfied": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defenseDocumentTypes|[[DefenseDocumentType](#schemadefensedocumenttype)]|false|none|Array of defense document types for a specific defense reason. Indicates the document types that you can submit to the schemes to defend this dispute, and whether they are required.|
|defenseReasonCode|string|true|none|The defense reason code that was selected to defend this dispute.|
|satisfied|boolean|true|none|Indicates if sufficient defense material has been supplied.|

<h2 id="tocS_DefenseReasonsRequest">DefenseReasonsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadefensereasonsrequest"></a>
<a id="schema_DefenseReasonsRequest"></a>
<a id="tocSdefensereasonsrequest"></a>
<a id="tocsdefensereasonsrequest"></a>

```json
{
  "disputePspReference": "string",
  "merchantAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disputePspReference|string|true|none|The PSP reference assigned to the dispute.|
|merchantAccountCode|string|true|none|The merchant account identifier, for which you want to process the dispute transaction.|

<h2 id="tocS_DefenseReasonsResponse">DefenseReasonsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefensereasonsresponse"></a>
<a id="schema_DefenseReasonsResponse"></a>
<a id="tocSdefensereasonsresponse"></a>
<a id="tocsdefensereasonsresponse"></a>

```json
{
  "defenseReasons": [
    {
      "defenseDocumentTypes": [
        {
          "available": true,
          "defenseDocumentTypeCode": "string",
          "requirementLevel": "string"
        }
      ],
      "defenseReasonCode": "string",
      "satisfied": true
    }
  ],
  "disputeServiceResult": {
    "errorMessage": "string",
    "success": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defenseReasons|[[DefenseReason](#schemadefensereason)]|false|none|The defense reasons that can be used to defend the dispute.|
|disputeServiceResult|[DisputeServiceResult](#schemadisputeserviceresult)|true|none|The result of the dispute service.|

<h2 id="tocS_DeleteDefenseDocumentRequest">DeleteDefenseDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedefensedocumentrequest"></a>
<a id="schema_DeleteDefenseDocumentRequest"></a>
<a id="tocSdeletedefensedocumentrequest"></a>
<a id="tocsdeletedefensedocumentrequest"></a>

```json
{
  "defenseDocumentType": "string",
  "disputePspReference": "string",
  "merchantAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defenseDocumentType|string|true|none|The document type code of the defense document.|
|disputePspReference|string|true|none|The PSP reference assigned to the dispute.|
|merchantAccountCode|string|true|none|The merchant account identifier, for which you want to process the dispute transaction.|

<h2 id="tocS_DeleteDefenseDocumentResponse">DeleteDefenseDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedefensedocumentresponse"></a>
<a id="schema_DeleteDefenseDocumentResponse"></a>
<a id="tocSdeletedefensedocumentresponse"></a>
<a id="tocsdeletedefensedocumentresponse"></a>

```json
{
  "disputeServiceResult": {
    "errorMessage": "string",
    "success": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disputeServiceResult|[DisputeServiceResult](#schemadisputeserviceresult)|true|none|The result of the dispute service.|

<h2 id="tocS_DisputeServiceResult">DisputeServiceResult</h2>
<!-- backwards compatibility -->
<a id="schemadisputeserviceresult"></a>
<a id="schema_DisputeServiceResult"></a>
<a id="tocSdisputeserviceresult"></a>
<a id="tocsdisputeserviceresult"></a>

```json
{
  "errorMessage": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|The general error message.|
|success|boolean|true|none|Indicates whether the request succeeded.|

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

<h2 id="tocS_SupplyDefenseDocumentRequest">SupplyDefenseDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemasupplydefensedocumentrequest"></a>
<a id="schema_SupplyDefenseDocumentRequest"></a>
<a id="tocSsupplydefensedocumentrequest"></a>
<a id="tocssupplydefensedocumentrequest"></a>

```json
{
  "defenseDocuments": [
    {
      "content": "string",
      "contentType": "string",
      "defenseDocumentTypeCode": "string"
    }
  ],
  "disputePspReference": "string",
  "merchantAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defenseDocuments|[[DefenseDocument](#schemadefensedocument)]|true|none|An array containing a list of the defense documents.|
|disputePspReference|string|true|none|The PSP reference assigned to the dispute.|
|merchantAccountCode|string|true|none|The merchant account identifier, for which you want to process the dispute transaction.|

<h2 id="tocS_SupplyDefenseDocumentResponse">SupplyDefenseDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemasupplydefensedocumentresponse"></a>
<a id="schema_SupplyDefenseDocumentResponse"></a>
<a id="tocSsupplydefensedocumentresponse"></a>
<a id="tocssupplydefensedocumentresponse"></a>

```json
{
  "disputeServiceResult": {
    "errorMessage": "string",
    "success": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disputeServiceResult|[DisputeServiceResult](#schemadisputeserviceresult)|true|none|The result of the dispute service.|
