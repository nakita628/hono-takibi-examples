<h1 id="open-banking-api">Open Banking API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Open Banking API provides secure endpoints to share financial data and services with third parties. This API offers quick and reliable user verification.

With these endpoints, you can:

- **Create a list of available account verification routes**: Create a list of Account Information Service Providers (AISPs) for third-party individual account verification. Successful connections generate a unique code used for requesting bank reports and verifying identity.
- **Verify bank account ownership**: Get the account verification report using the unique code from a successful open banking connection. This report provides identity verification and bank account details.
## Authentication
Each request made to the Open Banking API must be signed with an API key. Generate an API key in your Customer Area.

To connect to the API, add an X-API-Keyheader with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" 
-H "X-API-Key: YOUR_API_KEY" 
...
```

## Roles and permissions
To use the Open Banking API, your API credential must have the following roles:
- **Role for OpenBanking account verification use case: EXTERNAL**

Reach out to your Adyen contact to set up these roles.

Base URLs:

* <a href="https://obgateway-test.adyen.com/obgateway/v1">https://obgateway-test.adyen.com/obgateway/v1</a> - Test Environment

* <a href="https://obgateway-live.adyen.com/obgateway/v1">https://obgateway-live.adyen.com/obgateway/v1</a> - Live Environment

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="open-banking-api-account-verification">Account Verification</h1>

## Get account verification report

<a id="opIdget-accountVerification-reports-code"></a>

> Code samples

```bash
curl https://obgateway-test.adyen.com/obgateway/v1/accountVerification/reports/string \
  -H 'Accept: application/json'
```

`GET /accountVerification/reports/{code}`

Get the account verification report using a unique code from a successful open banking connection. This report provides identity verification and bank account details.

<h3 id="get-account-verification-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|The unique code you receive after a successful open banking flow that is included as a query parameter in the `redirectUrl` callback.|

> Example responses

> 200 Response

```json
{
  "id": "nJwJE68h6vlSEnk",
  "country": "US",
  "accounts": [
    {
      "accountId": "XvNzLGMpl3fBevllWEwks3jvBvPy88sbkypkP",
      "accountType": "CURRENT",
      "accountName": "Plaid Gold Standard 0% Interest Checking",
      "accountNumber": "1111222233330000",
      "currency": "USD",
      "identifiers": {
        "ach": {
          "accountNumber": "1111222233330000",
          "routingNumber": "011401533"
        }
      },
      "parties": [
        {
          "identity": {
            "fullLegalName": "Jane Doe",
            "name": "Jane Doe"
          },
          "role": "HOLDER"
        }
      ],
      "bankName": "Wells Fargo"
    },
    {
      "accountId": "XvNzLGMpl3fBevllWEwks3jvBvPy88sbkypkP",
      "accountType": "CURRENT",
      "accountName": "Plaid Gold Standard 0% Interest Checking",
      "accountNumber": "3333222211110000",
      "currency": "USD",
      "identifiers": {
        "ach": {
          "accountNumber": "3333222211110000",
          "routingNumber": "033587521"
        }
      },
      "parties": [
        {
          "identity": {
            "fullLegalName": "Jane Doe",
            "name": "Jane Doe"
          },
          "role": "HOLDER"
        }
      ],
      "bankName": "Bank of America"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 429 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-account-verification-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[AccountVerificationReportResponse](#schemaaccountverificationreportresponse)|
|400|Bad Request|Bad Request - The request is malformed or is not in the expected format.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - The API credential used in the request is invalid or does not have the right permissions.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|429|Too Many Requests|Too Many Requests - Request rate limit exceeded.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Service Error - An unrecoverable error occurred while trying to perform the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-State|object||none|

<aside class="success">
This operation does not require authentication
</aside>

## Create routes for account verification

<a id="opIdpost-accountVerification-routes"></a>

> Code samples

```bash
curl https://obgateway-test.adyen.com/obgateway/v1/accountVerification/routes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "country": "NL",
    "locale": "en-US",
    "state": "11a1e60a-18b0-4dda-9258-e0ae29e1e2a3",
    "redirectUrl": "https://merchanturl.example.org/redirect/url"
  }'
```

`POST /accountVerification/routes`

Create a list of routes for verifying bank accounts of third-party individuals. Successful connections generate a unique code used for requesting bank reports and verifying identity.

> Body parameter

```json
{
  "country": "NL",
  "locale": "en-US",
  "state": "11a1e60a-18b0-4dda-9258-e0ae29e1e2a3",
  "redirectUrl": "https://merchanturl.example.org/redirect/url"
}
```

<h3 id="create-routes-for-account-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountVerificationRoutesRequest](#schemaaccountverificationroutesrequest)|true|none|
|» country|body|[AccountVerificationCountry](#schemaaccountverificationcountry)|true|The location where the third-party individual's bank account is registered. Adyen uses this information to determine an available open banking provider, and to configure the open banking flow for that respective location.|
|» locale|body|string|false|The language to use in the open banking flow UI, specified by a combination of a two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code and an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.<br><br>This information is used to configure the open banking flow with the same language for a consistent user experience.<br><br>Default value: **en-US**|
|» redirectUrl|body|string(url)|true|The URL where Adyen redirects the third-party individual after they complete the open banking flow.|
|» state|body|string|false|A value that helps you identify the request in callback handling. You can generate this value on a per-session basis to protect the callback against Cross-Site Request Forgery (CSRF) attacks. This value  must be composed of characters that can be successfully URL-encoded.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» country|SE|
|» country|FI|
|» country|NO|
|» country|DK|
|» country|NL|
|» country|IT|
|» country|DE|
|» country|AT|
|» country|ES|
|» country|PT|
|» country|FR|
|» country|GB|
|» country|BE|
|» country|LV|
|» country|LT|
|» country|PL|
|» country|EE|
|» country|IE|
|» country|US|
|» country|CA|
|» country|AU|

> Example responses

> 200 Response

```json
{
  "routes": [
    {
      "provider": {
        "name": "Tink",
        "logoURL": "https://obgateway.adyen.com/obgateway/static/provider/images/tink-logo.svg"
      },
      "link": "https://obgateway.adyen.com/obgateway/provider/outgoing/tink/redirect/13ec4802-c987-4f8c-8909-9a75ff567256"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 429 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="create-routes-for-account-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[AccountVerificationRoutesResponse](#schemaaccountverificationroutesresponse)|
|400|Bad Request|Bad Request - The request is malformed or is not in the expected format.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - The API credential used in the request is invalid or does not have the right permissions.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|429|Too Many Requests|Too Many Requests - Request rate limit exceeded.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Service Error - An unrecoverable error occurred while trying to perform the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ACHAccountIdentifier">ACHAccountIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaachaccountidentifier"></a>
<a id="schema_ACHAccountIdentifier"></a>
<a id="tocSachaccountidentifier"></a>
<a id="tocsachaccountidentifier"></a>

```json
{
  "accountLastDigits": "string",
  "accountNumber": "string",
  "isTokenized": true,
  "routingNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountLastDigits|string|false|none|The last digits of the account number. If the accountNumber is tokenized, this field contains the last digits of the non-tokenized account number. This helps users verify the account without seeing the full number.|
|accountNumber|string|true|none|The account number of the bank account.|
|isTokenized|boolean|false|none|Indicates whether the account number is tokenized. A tokenized account number is a unique ID generated by a bank to protect the user's actual account number.|
|routingNumber|string|true|none|The [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.|

<h2 id="tocS_AccountIdentifiers">AccountIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemaaccountidentifiers"></a>
<a id="schema_AccountIdentifiers"></a>
<a id="tocSaccountidentifiers"></a>
<a id="tocsaccountidentifiers"></a>

```json
{
  "ach": {
    "accountLastDigits": "string",
    "accountNumber": "string",
    "isTokenized": true,
    "routingNumber": "string"
  },
  "bacs": {
    "accountNumber": "string",
    "sortCode": "string"
  },
  "bsb": {
    "accountNumber": "string",
    "bsbCode": "string"
  },
  "eft": {
    "accountNumber": "string",
    "branch": "string",
    "institution": "string"
  },
  "iban": {
    "bban": "string",
    "bic": "string",
    "iban": "string"
  },
  "rix": {
    "accountNumber": "string",
    "clearingNumber": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ach|[ACHAccountIdentifier](#schemaachaccountidentifier)|false|none|Identifiers relevant for Automated Clearing House (ACH) payments, primarily used in the United States.|
|bacs|[BACSAccountIdentifier](#schemabacsaccountidentifier)|false|none|Identifiers relevant for Bankers' Automated Clearing Services (BACS) payments, primarily used in the United Kingdom.|
|bsb|[BSBAccountIdentifier](#schemabsbaccountidentifier)|false|none|Identifiers relevant for Australian banking, specifically for BSB (Bank-State-Branch) numbers.|
|eft|[EFTAccountIdentifier](#schemaeftaccountidentifier)|false|none|Identifiers relevant for Electronic Funds Transfer (EFT) payments, commonly used in Canada.|
|iban|[IBANAccountIdentifier](#schemaibanaccountidentifier)|false|none|The international bank account number as defined in the ISO-13616 standard.|
|rix|[RIXAccountIdentifier](#schemarixaccountidentifier)|false|none|Identifiers relevant for the Rix (Russian Interbank eXchange) system, used for interbank payments within Russia.|

<h2 id="tocS_AccountParty">AccountParty</h2>
<!-- backwards compatibility -->
<a id="schemaaccountparty"></a>
<a id="schema_AccountParty"></a>
<a id="tocSaccountparty"></a>
<a id="tocsaccountparty"></a>

```json
{
  "identity": {
    "fullLegalName": "string",
    "name": "string"
  },
  "role": "HOLDER"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|[Identity](#schemaidentity)|true|none|Contains the identity details of the party.|
|role|[PartyRole](#schemapartyrole)|true|none|Specifies a role or capacity of the party in relation to the bank account.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|HOLDER|
|role|AUTHORIZED_USER|
|role|OTHER|
|role|UNKNOWN|

<h2 id="tocS_AccountType">AccountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_AccountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
"CURRENT"
```

<h2 id="tocS_AccountVerificationCountry">AccountVerificationCountry</h2>
<!-- backwards compatibility -->
<a id="schemaaccountverificationcountry"></a>
<a id="schema_AccountVerificationCountry"></a>
<a id="tocSaccountverificationcountry"></a>
<a id="tocsaccountverificationcountry"></a>

```json
"SE"
```

<h2 id="tocS_AccountVerificationReportResponse">AccountVerificationReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountverificationreportresponse"></a>
<a id="schema_AccountVerificationReportResponse"></a>
<a id="tocSaccountverificationreportresponse"></a>
<a id="tocsaccountverificationreportresponse"></a>

```json
{
  "accounts": [
    {
      "accountId": "string",
      "accountName": "string",
      "accountNumber": "string",
      "accountType": "CURRENT",
      "bankName": "string",
      "currency": "string",
      "identifiers": {
        "ach": {
          "accountLastDigits": "string",
          "accountNumber": "string",
          "isTokenized": true,
          "routingNumber": "string"
        },
        "bacs": {
          "accountNumber": "string",
          "sortCode": "string"
        },
        "bsb": {
          "accountNumber": "string",
          "bsbCode": "string"
        },
        "eft": {
          "accountNumber": "string",
          "branch": "string",
          "institution": "string"
        },
        "iban": {
          "bban": "string",
          "bic": "string",
          "iban": "string"
        },
        "rix": {
          "accountNumber": "string",
          "clearingNumber": "string"
        }
      },
      "parties": [
        {
          "identity": {
            "fullLegalName": "string",
            "name": "string"
          },
          "role": "HOLDER"
        }
      ]
    }
  ],
  "country": "SE",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[VerifiedAccount](#schemaverifiedaccount)]|true|none|A list of bank accounts with their respective information.|
|country|[AccountVerificationCountry](#schemaaccountverificationcountry)|true|none|The location where the third-party individual's bank account is registered.|
|id|string|true|none|The unique identifier for the specific report.|

#### Enumerated Values

|Property|Value|
|---|---|
|country|SE|
|country|FI|
|country|NO|
|country|DK|
|country|NL|
|country|IT|
|country|DE|
|country|AT|
|country|ES|
|country|PT|
|country|FR|
|country|GB|
|country|BE|
|country|LV|
|country|LT|
|country|PL|
|country|EE|
|country|IE|
|country|US|
|country|CA|
|country|AU|

<h2 id="tocS_AccountVerificationRoutesRequest">AccountVerificationRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountverificationroutesrequest"></a>
<a id="schema_AccountVerificationRoutesRequest"></a>
<a id="tocSaccountverificationroutesrequest"></a>
<a id="tocsaccountverificationroutesrequest"></a>

```json
{
  "country": "SE",
  "locale": "string",
  "redirectUrl": "http://example.com",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[AccountVerificationCountry](#schemaaccountverificationcountry)|true|none|The location where the third-party individual's bank account is registered. Adyen uses this information to determine an available open banking provider, and to configure the open banking flow for that respective location.|
|locale|string|false|none|The language to use in the open banking flow UI, specified by a combination of a two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code and an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.<br><br>This information is used to configure the open banking flow with the same language for a consistent user experience.<br><br>Default value: **en-US**|
|redirectUrl|string(url)|true|none|The URL where Adyen redirects the third-party individual after they complete the open banking flow.|
|state|string|false|none|A value that helps you identify the request in callback handling. You can generate this value on a per-session basis to protect the callback against Cross-Site Request Forgery (CSRF) attacks. This value  must be composed of characters that can be successfully URL-encoded.|

#### Enumerated Values

|Property|Value|
|---|---|
|country|SE|
|country|FI|
|country|NO|
|country|DK|
|country|NL|
|country|IT|
|country|DE|
|country|AT|
|country|ES|
|country|PT|
|country|FR|
|country|GB|
|country|BE|
|country|LV|
|country|LT|
|country|PL|
|country|EE|
|country|IE|
|country|US|
|country|CA|
|country|AU|

<h2 id="tocS_AccountVerificationRoutesResponse">AccountVerificationRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountverificationroutesresponse"></a>
<a id="schema_AccountVerificationRoutesResponse"></a>
<a id="tocSaccountverificationroutesresponse"></a>
<a id="tocsaccountverificationroutesresponse"></a>

```json
{
  "routes": [
    {
      "link": "string",
      "provider": {
        "logoURL": "string",
        "name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|routes|[[Route](#schemaroute)]|true|none|This array lists available open banking redirection links, each with its associated provider metadata.|

<h2 id="tocS_BACSAccountIdentifier">BACSAccountIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemabacsaccountidentifier"></a>
<a id="schema_BACSAccountIdentifier"></a>
<a id="tocSbacsaccountidentifier"></a>
<a id="tocsbacsaccountidentifier"></a>

```json
{
  "accountNumber": "string",
  "sortCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The account number of the bank account.|
|sortCode|string|true|none|A number that identifies the specific bank and branch where a UK bank account is held.|

<h2 id="tocS_BSBAccountIdentifier">BSBAccountIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemabsbaccountidentifier"></a>
<a id="schema_BSBAccountIdentifier"></a>
<a id="tocSbsbaccountidentifier"></a>
<a id="tocsbsbaccountidentifier"></a>

```json
{
  "accountNumber": "string",
  "bsbCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The account number of the bank account.|
|bsbCode|string|true|none|The BSB (Bank-State-Branch) code.|

<h2 id="tocS_DefaultErrorResponseEntity">DefaultErrorResponseEntity</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterrorresponseentity"></a>
<a id="schema_DefaultErrorResponseEntity"></a>
<a id="tocSdefaulterrorresponseentity"></a>
<a id="tocsdefaulterrorresponseentity"></a>

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

Standardized error response following RFC-7807 format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|false|none|Unique business error code.|
|instance|string|false|none|A URI that identifies the specific occurrence of the problem if applicable.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Array of fields with validation errors when applicable.|
|requestId|string|false|none|The unique reference for the request.|
|status|integer(int32)|false|none|The HTTP status code.|
|title|string|false|none|A short, human-readable summary of the problem type.|
|type|string|false|none|A URI that identifies the validation error type. It points to human-readable documentation for the problem type.|

<h2 id="tocS_EFTAccountIdentifier">EFTAccountIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaeftaccountidentifier"></a>
<a id="schema_EFTAccountIdentifier"></a>
<a id="tocSeftaccountidentifier"></a>
<a id="tocseftaccountidentifier"></a>

```json
{
  "accountNumber": "string",
  "branch": "string",
  "institution": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The account number of the bank account.|
|branch|string|true|none|Identifies the specific branch where the account is held within the Canadian banking system.|
|institution|string|true|none|The financial institution that identifies the bank in Canada.|

<h2 id="tocS_IBANAccountIdentifier">IBANAccountIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaibanaccountidentifier"></a>
<a id="schema_IBANAccountIdentifier"></a>
<a id="tocSibanaccountidentifier"></a>
<a id="tocsibanaccountidentifier"></a>

```json
{
  "bban": "string",
  "bic": "string",
  "iban": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bban|string|true|none|The Basic Bank Account Number (BBAN) component of the IBAN.|
|bic|string|true|none|BIC of a bank account.|
|iban|string|true|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard. This is the national identifier for the bank account, following the country-specific format, and is part of the full IBAN.|

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "fullLegalName": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullLegalName|string|true|none|The complete legal name of the individual or entity.|
|name|string|true|none|A commonly used or human-readable name for the individual or entity.|

<h2 id="tocS_InvalidField">InvalidField</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfield"></a>
<a id="schema_InvalidField"></a>
<a id="tocSinvalidfield"></a>
<a id="tocsinvalidfield"></a>

```json
{
  "message": "string",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Description of the validation error.|
|name|string|true|none|The field that has an invalid value.|
|value|string|true|none|The invalid value.|

<h2 id="tocS_PartyRole">PartyRole</h2>
<!-- backwards compatibility -->
<a id="schemapartyrole"></a>
<a id="schema_PartyRole"></a>
<a id="tocSpartyrole"></a>
<a id="tocspartyrole"></a>

```json
"HOLDER"
```

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "logoURL": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logoURL|string|true|none|The URL of the organization's or brand's logo. This URL typically points to an image file (e.g., .png, .jpg, .svg) that can be displayed to visually represent the entity.|
|name|string|true|none|The official or commonly used name of the organization, brand, or entity.|

<h2 id="tocS_RIXAccountIdentifier">RIXAccountIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemarixaccountidentifier"></a>
<a id="schema_RIXAccountIdentifier"></a>
<a id="tocSrixaccountidentifier"></a>
<a id="tocsrixaccountidentifier"></a>

```json
{
  "accountNumber": "string",
  "clearingNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The account number of the bank account.|
|clearingNumber|string|true|none|The 4- to 5-digit clearing number, without separators or whitespace.|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
{
  "link": "string",
  "provider": {
    "logoURL": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|true|none|The redirection link. You can use this link to redirect the user to the open banking flow when the user selects it.|
|provider|[Provider](#schemaprovider)|true|none|Metadata about the selected provider, including the name and company logo. You can use this information to inform the user about the provider they will be redirected to when they select the link.|

<h2 id="tocS_VerifiedAccount">VerifiedAccount</h2>
<!-- backwards compatibility -->
<a id="schemaverifiedaccount"></a>
<a id="schema_VerifiedAccount"></a>
<a id="tocSverifiedaccount"></a>
<a id="tocsverifiedaccount"></a>

```json
{
  "accountId": "string",
  "accountName": "string",
  "accountNumber": "string",
  "accountType": "CURRENT",
  "bankName": "string",
  "currency": "string",
  "identifiers": {
    "ach": {
      "accountLastDigits": "string",
      "accountNumber": "string",
      "isTokenized": true,
      "routingNumber": "string"
    },
    "bacs": {
      "accountNumber": "string",
      "sortCode": "string"
    },
    "bsb": {
      "accountNumber": "string",
      "bsbCode": "string"
    },
    "eft": {
      "accountNumber": "string",
      "branch": "string",
      "institution": "string"
    },
    "iban": {
      "bban": "string",
      "bic": "string",
      "iban": "string"
    },
    "rix": {
      "accountNumber": "string",
      "clearingNumber": "string"
    }
  },
  "parties": [
    {
      "identity": {
        "fullLegalName": "string",
        "name": "string"
      },
      "role": "HOLDER"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|The unique identifier for the bank account.|
|accountName|string|true|none|The name of the bank account. This name is assigned by the banking institution, and it describes the type of bank account.|
|accountNumber|string|true|none|The account number of the bank account.|
|accountType|[AccountType](#schemaaccounttype)|true|none|The type of the bank account. Possible values are **CURRENT**, **SAVINGS**, **BUSINESS**, **CREDIT_CARD**, **LOAN**, **UNKNOWN**.|
|bankName|string|false|none|The name of the banking institution where the bank account is held.|
|currency|string|true|none|The currency of the funds in the bank account.|
|identifiers|[AccountIdentifiers](#schemaaccountidentifiers)|true|none|Contains various codes and details used to uniquely identify the bank account across different regions.|
|parties|[[AccountParty](#schemaaccountparty)]|true|none|Contains details of all parties associated with the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|CURRENT|
|accountType|SAVINGS|
|accountType|BUSINESS|
|accountType|CREDIT_CARD|
|accountType|LOAN|
|accountType|UNKNOWN|
