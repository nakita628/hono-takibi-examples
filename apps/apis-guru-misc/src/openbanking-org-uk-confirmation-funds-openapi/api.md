<h1 id="confirmation-of-funds-api-specification">Confirmation of Funds API Specification v3.1.7</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Swagger for Confirmation of Funds API Specification

Base URLs:

* <a href="https://openbanking.org.uk">https://openbanking.org.uk</a>

* <a href="https://api.apis.guru/open-banking/v3.1/cbpii">https://api.apis.guru/open-banking/v3.1/cbpii</a>

<a href="https://www.openbanking.org.uk/terms">Terms of service</a>
Email: <a href="mailto:ServiceDesk@openbanking.org.uk">Service Desk</a> 
License: <a href="https://www.openbanking.org.uk/open-licence">open-licence</a>

# Authentication

- oAuth2 authentication. OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU

    - Flow: authorizationCode
    - Authorization URL = [https://authserver.example/authorization](https://authserver.example/authorization)
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|fundsconfirmations|Funds confirmation entitlement|

- oAuth2 authentication. TPP client credential authorisation flow with the ASPSP

    - Flow: clientCredentials
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|fundsconfirmations|Funds confirmation entitlement|

<h1 id="confirmation-of-funds-api-specification-funds-confirmations">Funds Confirmations</h1>

## Create Funds Confirmation Consent

<a id="opIdCreateFundsConfirmationConsents"></a>

> Code samples

```bash
curl https://example.com/funds-confirmation-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Data": {
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "ExpirationDateTime": "1970-01-01T00:00:00Z"
    }
  }'
```

`POST /funds-confirmation-consents`

> Body parameter

```json
{
  "Data": {
    "DebtorAccount": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpirationDateTime": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="create-funds-confirmation-consent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBFundsConfirmationConsent1](#schemaobfundsconfirmationconsent1)|true|Default|
|» Data|body|object|true|none|
|» » DebtorAccount|body|object|true|Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.|
|» » » Identification|body|string|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » Name|body|string|false|Name of the account, as assigned by the account servicing institution.<br>Usage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.|
|» » » SchemeName|body|string|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » SecondaryIdentification|body|string|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » ExpirationDateTime|body|string(date-time)|false|Specified date and time the funds confirmation authorisation will expire.<br> If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

> Example responses

> 201 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "DebtorAccount": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-funds-confirmation-consent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Funds Confirmation Consent Created|[OBFundsConfirmationConsentResponse1](#schemaobfundsconfirmationconsentresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: fundsconfirmations )
</aside>

## Get Funds Confirmation Consent

<a id="opIdGetFundsConfirmationConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/funds-confirmation-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /funds-confirmation-consents/{ConsentId}`

<h3 id="get-funds-confirmation-consent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "DebtorAccount": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-funds-confirmation-consent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Funds Confirmation Consent Read|[OBFundsConfirmationConsentResponse1](#schemaobfundsconfirmationconsentresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: fundsconfirmations )
</aside>

## Delete Funds Confirmation Consent

<a id="opIdDeleteFundsConfirmationConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/funds-confirmation-consents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /funds-confirmation-consents/{ConsentId}`

<h3 id="delete-funds-confirmation-consent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="delete-funds-confirmation-consent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Funds Confirmation Consent Deleted|None|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: fundsconfirmations )
</aside>

## Create Funds Confirmation

<a id="opIdCreateFundsConfirmations"></a>

> Code samples

```bash
curl https://example.com/funds-confirmations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Data": {
      "ConsentId": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "Reference": "string"
    }
  }'
```

`POST /funds-confirmations`

> Body parameter

```json
{
  "Data": {
    "ConsentId": "string",
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    },
    "Reference": "string"
  }
}
```

<h3 id="create-funds-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBFundsConfirmation1](#schemaobfundsconfirmation1)|true|Default|
|» Data|body|object|true|none|
|» » ConsentId|body|string|true|Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.|
|» » InstructedAmount|body|object|true|Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.|
|» » » Amount|body|string|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » Currency|body|string|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » Reference|body|string|true|Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.|

> Example responses

> 201 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "FundsAvailable": true,
    "FundsConfirmationId": "string",
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    },
    "Reference": "string"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-funds-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Funds Confirmation Created|[OBFundsConfirmationResponse1](#schemaobfundsconfirmationresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: fundsconfirmations )
</aside>

# Schemas

<h2 id="tocS_ISODateTime">ISODateTime</h2>
<!-- backwards compatibility -->
<a id="schemaisodatetime"></a>
<a id="schema_ISODateTime"></a>
<a id="tocSisodatetime"></a>
<a id="tocsisodatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "First": "http://example.com",
  "Last": "http://example.com",
  "Next": "http://example.com",
  "Prev": "http://example.com",
  "Self": "http://example.com"
}
```

Links relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|First|string(uri)|false|none|none|
|Last|string(uri)|false|none|none|
|Next|string(uri)|false|none|none|
|Prev|string(uri)|false|none|none|
|Self|string(uri)|true|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
  "LastAvailableDateTime": "1970-01-01T00:00:00Z",
  "TotalPages": 0
}
```

Meta Data relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|TotalPages|integer(int32)|false|none|none|

<h2 id="tocS_OBError1">OBError1</h2>
<!-- backwards compatibility -->
<a id="schemaoberror1"></a>
<a id="schema_OBError1"></a>
<a id="tocSoberror1"></a>
<a id="tocsoberror1"></a>

```json
{
  "ErrorCode": "string",
  "Message": "string",
  "Path": "string",
  "Url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|string|true|none|Low level textual error code, e.g., UK.OBIE.Field.Missing|
|Message|string|true|none|A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'<br>OBIE doesn't standardise this field|
|Path|string|false|none|Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency|
|Url|string|false|none|URL to help remediate the problem, or provide more information, or to API Reference, or help etc|

<h2 id="tocS_OBErrorResponse1">OBErrorResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaoberrorresponse1"></a>
<a id="schema_OBErrorResponse1"></a>
<a id="tocSoberrorresponse1"></a>
<a id="tocsoberrorresponse1"></a>

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

An array of detail error codes, and messages, and URLs to documentation to help remediation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|High level textual error code, to help categorize the errors.|
|Errors|[[OBError1](#schemaoberror1)]|true|none|none|
|Id|string|false|none|A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.|
|Message|string|true|none|Brief Error message, e.g., 'There is something wrong with the request parameters provided'|

<h2 id="tocS_OBFundsConfirmation1">OBFundsConfirmation1</h2>
<!-- backwards compatibility -->
<a id="schemaobfundsconfirmation1"></a>
<a id="schema_OBFundsConfirmation1"></a>
<a id="tocSobfundsconfirmation1"></a>
<a id="tocsobfundsconfirmation1"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    },
    "Reference": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|

<h2 id="tocS_OBFundsConfirmationConsent1">OBFundsConfirmationConsent1</h2>
<!-- backwards compatibility -->
<a id="schemaobfundsconfirmationconsent1"></a>
<a id="schema_OBFundsConfirmationConsent1"></a>
<a id="tocSobfundsconfirmationconsent1"></a>
<a id="tocsobfundsconfirmationconsent1"></a>

```json
{
  "Data": {
    "DebtorAccount": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpirationDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|

<h2 id="tocS_OBFundsConfirmationConsentResponse1">OBFundsConfirmationConsentResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaobfundsconfirmationconsentresponse1"></a>
<a id="schema_OBFundsConfirmationConsentResponse1"></a>
<a id="tocSobfundsconfirmationconsentresponse1"></a>
<a id="tocsobfundsconfirmationconsentresponse1"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "DebtorAccount": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBFundsConfirmationResponse1">OBFundsConfirmationResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaobfundsconfirmationresponse1"></a>
<a id="schema_OBFundsConfirmationResponse1"></a>
<a id="tocSobfundsconfirmationresponse1"></a>
<a id="tocsobfundsconfirmationresponse1"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "FundsAvailable": true,
    "FundsConfirmationId": "string",
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    },
    "Reference": "string"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|
