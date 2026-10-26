<h1 id="configuration-api">Configuration API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Configuration API allows you to manage your balance platform where you can create account holders, balance accounts, cards, and business accounts.

## Authentication
Each request to the Configuration API must be signed with an API key. Generate an API key in your Customer Area if you have a [platform setup](https://docs.adyen.com/platforms/manage-access/api-credentials-web-service/#generate-api-key) or [marketplace setup](https://docs.adyen.com/marketplaces/manage-access/api-credentials-web-service/#generate-api-key).

 If you have an Adyen Issuing integration, [generate an API key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key) in your Balance Platform Customer Area.

To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

## Versioning
The Configuration API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders
```
## Going live
When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/) if you have an Adyen for Platforms integration or [live Balance Platform Customer Area](https://balanceplatform-live.adyen.com/balanceplatform/) if you have an Adyen Issuing integration.You can then use the API key to send requests to `https://balanceplatform-api-live.adyen.com/bcl/v2`.

Base URLs:

* <a href="https://balanceplatform-api-test.adyen.com/bcl/v2">https://balanceplatform-api-test.adyen.com/bcl/v2</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

* API Key (clientKey)
    - Parameter Name: **clientKey**, in: query.

<h1 id="configuration-api-platform">Platform</h1>

## Get a balance platform

<a id="opIdget-balancePlatforms-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{id}`

Returns a balance platform.

<h3 id="get-a-balance-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance platform.|

> Example responses

> 200 Response

```json
{
  "id": "YOUR_BALANCE_PLATFORM",
  "status": "Active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-balance-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatform](#schemabalanceplatform)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get all account holders under a balance platform

<a id="opIdget-balancePlatforms-id-accountHolders"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/accountHolders?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{id}/accountHolders`

Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.

<h3 id="get-all-account-holders-under-a-balance-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance platform.|
|offset|query|integer(int32)|false|The number of items that you want to skip.|
|limit|query|integer(int32)|false|The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.|

> Example responses

> 200 Response

```json
{
  "accountHolders": [
    {
      "description": "Test-305",
      "legalEntityId": "LE3227C223222D5D8S5S33M4M",
      "reference": "LegalEntity internal error test",
      "id": "AH32272223222B5GFSNSXFFL9",
      "status": "active"
    },
    {
      "description": "Test-751",
      "legalEntityId": "LE3227C223222D5D8S5TT3SRX",
      "reference": "LegalEntity internal error test",
      "id": "AH32272223222B5GFSNVGFFM7",
      "status": "active"
    },
    {
      "description": "Explorer Holder",
      "legalEntityId": "LE3227C223222D5D8S5TT3SRX",
      "reference": "Account from the Explorer Holder",
      "id": "AH32272223222B5GFWNRFFVR6",
      "status": "active"
    }
  ],
  "hasNext": true,
  "hasPrevious": true
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-account-holders-under-a-balance-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaginatedAccountHoldersResponse](#schemapaginatedaccountholdersresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get all transaction rules for a balance platform

<a id="opIdget-balancePlatforms-id-transactionRules"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/transactionRules?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{id}/transactionRules`

Returns a list of transaction rules associated with a balance platform.

<h3 id="get-all-transaction-rules-for-a-balance-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance platform.|

> Example responses

> 200 Response

```json
{
  "transactionRules": [
    {
      "aggregationLevel": "string",
      "description": "string",
      "endDate": "string",
      "entityKey": {
        "entityReference": "string",
        "entityType": "string"
      },
      "id": "string",
      "interval": {
        "dayOfMonth": 0,
        "dayOfWeek": "friday",
        "duration": {
          "unit": "days",
          "value": 0
        },
        "timeOfDay": "string",
        "timeZone": "string",
        "type": "daily"
      },
      "outcomeType": "enforceSCA",
      "overridesRule": "string",
      "purpose": "compliance",
      "reference": "string",
      "requestType": "authentication",
      "ruleRestrictions": {
        "activeNetworkTokens": {
          "operation": "string",
          "value": 0
        },
        "brandVariants": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "counterpartyBank": {
          "operation": "string",
          "value": [
            {
              "country": "string",
              "identification": "string",
              "identificationType": "bic"
            }
          ]
        },
        "counterpartyTypes": {
          "operation": "string",
          "value": [
            "balanceAccount"
          ]
        },
        "countries": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "dayOfWeek": {
          "operation": "string",
          "value": [
            "friday"
          ]
        },
        "differentCurrencies": {
          "operation": "string",
          "value": true
        },
        "entryModes": {
          "operation": "string",
          "value": [
            "barcode"
          ]
        },
        "internationalTransaction": {
          "operation": "string",
          "value": true
        },
        "matchingTransactions": {
          "operation": "string",
          "value": 0
        },
        "matchingValues": {
          "operation": "string",
          "value": [
            "acquirerId"
          ]
        },
        "mccs": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "merchantNames": {
          "operation": "string",
          "value": [
            {
              "operation": "contains",
              "value": "string"
            }
          ]
        },
        "merchants": {
          "operation": "string",
          "value": [
            {
              "acquirerId": "string",
              "merchantId": "string"
            }
          ]
        },
        "processingTypes": {
          "operation": "string",
          "value": [
            "atmWithdraw"
          ]
        },
        "riskScores": {
          "operation": "string",
          "value": {
            "mastercard": 0,
            "visa": 0
          }
        },
        "sameAmountRestriction": {
          "operation": "string",
          "value": true
        },
        "sameCounterpartyRestriction": {
          "operation": "string",
          "value": true
        },
        "sourceAccountTypes": {
          "operation": "string",
          "value": [
            "balanceAccount"
          ]
        },
        "timeOfDay": {
          "operation": "string",
          "value": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "tokenRequestors": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "totalAmount": {
          "operation": "string",
          "value": {
            "currency": "string",
            "value": 0
          }
        },
        "walletProviderAccountScore": {
          "operation": "string",
          "value": 0
        },
        "walletProviderDeviceScore": {
          "operation": "string",
          "value": 0
        },
        "walletProviderDeviceType": {
          "operation": "string",
          "value": [
            "CARD"
          ]
        }
      },
      "score": 0,
      "startDate": "string",
      "status": "active",
      "type": "allowList"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-transaction-rules-for-a-balance-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRulesResponse](#schematransactionrulesresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-account-holders">Account holders</h1>

## Create an account holder

<a id="opIdpost-accountHolders"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "Account holder used for international payments and payouts",
    "reference": "S.Eller-001",
    "legalEntityId": "LE322JV223222D5GG42KN6869"
  }'
```

`POST /accountHolders`

Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).



> Body parameter

```json
{
  "description": "Account holder used for international payments and payouts",
  "reference": "S.Eller-001",
  "legalEntityId": "LE322JV223222D5GG42KN6869"
}
```

<h3 id="create-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderInfo](#schemaaccountholderinfo)|false|none|
|» balancePlatform|body|string|false|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.|
|» capabilities|body|object|false|Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|» » **additionalProperties**|body|[AccountHolderCapability](#schemaaccountholdercapability)|false|none|
|» contactDetails|body|[ContactDetails](#schemacontactdetails)|false|**Deprecated.** Contact details of the account holder.|
|» description|body|string|false|Your description for the account holder.|
|» legalEntityId|body|string|true|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.|
|» metadata|body|object|false|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» reference|body|string|false|Your reference for the account holder.|
|» timeZone|body|string|false|The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

> Example responses

> 200 Response

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "description": "Account holder used for international payments and payouts",
  "legalEntityId": "LE322JV223222D5GG42KN6869",
  "reference": "S.Eller-001",
  "capabilities": {
    "receiveFromPlatformPayments": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "receiveFromBalanceAccount": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "sendToBalanceAccount": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "sendToTransferInstrument": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "requestedSettings": {
        "interval": "daily",
        "maxAmount": {
          "currency": "EUR",
          "value": 0
        }
      },
      "verificationStatus": "pending"
    }
  },
  "id": "AH3227C223222H5J4DCLW9VBV",
  "status": "active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="create-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AccountHolder](#schemaaccountholder)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get an account holder

<a id="opIdget-accountHolders-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /accountHolders/{id}`

Returns an account holder.

<h3 id="get-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the account holder.|

> Example responses

> 200 Response

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "description": "Account holder used for international payments and payouts",
  "legalEntityId": "LE322JV223222D5GG42KN6869",
  "reference": "S.Eller-001",
  "capabilities": {
    "receiveFromPlatformPayments": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "receiveFromBalanceAccount": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "sendToBalanceAccount": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "sendToTransferInstrument": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "transferInstruments": [
        {
          "enabled": true,
          "requested": true,
          "allowed": false,
          "id": "SE322KH223222F5GXZFNM3BGP",
          "verificationStatus": "pending"
        }
      ],
      "verificationStatus": "pending"
    }
  },
  "id": "AH3227C223222C5GXQXF658WB",
  "status": "active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AccountHolder](#schemaaccountholder)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Update an account holder

<a id="opIdpatch-accountHolders-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders/string?clientKey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "Account holder used for international payments and payouts",
    "reference": "S.Eller-001",
    "capabilities": {
      "receivePayments": {
        "requested": true
      }
    }
  }'
```

`PATCH /accountHolders/{id}`

Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.

> Body parameter

```json
{
  "description": "Account holder used for international payments and payouts",
  "reference": "S.Eller-001",
  "capabilities": {
    "receivePayments": {
      "requested": true
    }
  }
}
```

<h3 id="update-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the account holder.|
|body|body|[AccountHolderUpdateRequest](#schemaaccountholderupdaterequest)|false|none|
|» balancePlatform|body|string|false|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.|
|» capabilities|body|object|false|Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|» » **additionalProperties**|body|[AccountHolderCapability](#schemaaccountholdercapability)|false|none|
|» contactDetails|body|[ContactDetails](#schemacontactdetails)|false|**Deprecated.** Contact details of the account holder.|
|» description|body|string|false|Your description for the account holder.|
|» metadata|body|object|false|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» primaryBalanceAccount|body|string|false|The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.|
|» reference|body|string|false|Your reference for the account holder.|
|» status|body|string|false|The status of the account holder.<br><br>Possible values: <br><br> * **active**: The account holder is active and allowed to use its capabilities. This is the initial status for account holders and balance accounts. You can change this status to **suspended** or **closed**. <br><br> * **suspended**: The account holder is temporarily disabled and payouts are blocked. You can change this status to **active** or **closed**. <br><br>* **closed**: The account holder and all of its capabilities are permanently disabled. This is a final status and cannot be changed.|
|» timeZone|body|string|false|The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|closed|
|» status|suspended|

> Example responses

> 200 Response

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "description": "Account holder used for international payments and payouts",
  "legalEntityId": "LE322JV223222F5GKQZZ9DS99",
  "reference": "S.Eller-001",
  "capabilities": {
    "receivePayments": {
      "enabled": false,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    }
  },
  "id": "AH3227C223222C5GKR23686TF",
  "status": "active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="update-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AccountHolder](#schemaaccountholder)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get all balance accounts of an account holder

<a id="opIdget-accountHolders-id-balanceAccounts"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders/string/balanceAccounts?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /accountHolders/{id}/balanceAccounts`

Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.

<h3 id="get-all-balance-accounts-of-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the account holder.|
|offset|query|integer(int32)|false|The number of items that you want to skip.|
|limit|query|integer(int32)|false|The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.|

> Example responses

> 200 Response

```json
{
  "balanceAccounts": [
    {
      "accountHolderId": "AH32272223222B5CTBMZT6W2V",
      "defaultCurrencyCode": "EUR",
      "description": "S. Hopper - Main Account",
      "reference": "YOUR_REFERENCE-X173L",
      "timeZone": "Europe/Amsterdam",
      "id": "BA32272223222B5CTDNB66W2Z",
      "status": "active"
    },
    {
      "accountHolderId": "AH32272223222B5CTBMZT6W2V",
      "defaultCurrencyCode": "EUR",
      "description": "S. Hopper - Main Account",
      "reference": "YOUR_REFERENCE-X173L",
      "timeZone": "Europe/Amsterdam",
      "id": "BA32272223222B5CTDQPM6W2H",
      "status": "active"
    },
    {
      "accountHolderId": "AH32272223222B5CTBMZT6W2V",
      "defaultCurrencyCode": "EUR",
      "description": "S. Hopper - Main Account",
      "reference": "YOUR_REFERENCE-X173L",
      "timeZone": "Europe/Amsterdam",
      "id": "BA32272223222B5CVF5J63LMW",
      "status": "active"
    }
  ],
  "hasNext": true,
  "hasPrevious": false
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-balance-accounts-of-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaginatedBalanceAccountsResponse](#schemapaginatedbalanceaccountsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a tax form

<a id="opIdget-accountHolders-id-taxForms"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders/string/taxForms?formType=US1099k&year=0&clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /accountHolders/{id}/taxForms`

Generates a tax form for account holders operating in the US. For more information, refer to US tax forms for [marketplaces](https://docs.adyen.com/marketplaces/us-tax-forms/) or [platforms](https://docs.adyen.com/platforms/us-tax-forms/) .

<h3 id="get-a-tax-form-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the account holder.|
|formType|query|string|true|The type of tax form you want to retrieve. Accepted values are **US1099k** and **US1099nec**.|
|year|query|integer(int32)|true|The tax year in **YYYY** format for the tax form you want to retrieve.|
|legalEntityId|query|string|false|The legal entity reference whose tax form you want to retrieve.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|formType|US1099k|
|formType|US1099nec|

> Example responses

> 200 Response

```json
{
  "content": "JVBERi0xLjcKJcfsj6IKJSVJbnZvY2F0aW9uOiBwYXRoL2dzd2luNjQuZXhlIC1kRGlzcGxh",
  "contentType": "application/pdf"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 404 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/not-found",
  "title": "Not found",
  "status": 404,
  "detail": "Service not found.",
  "errorCode": "00_404"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-tax-form-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetTaxFormResponse](#schemagettaxformresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|404|Not Found|The requested tax form was not available.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get all transaction rules for an account holder

<a id="opIdget-accountHolders-id-transactionRules"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders/string/transactionRules?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /accountHolders/{id}/transactionRules`

Returns a list of transaction rules associated with an account holder.

<h3 id="get-all-transaction-rules-for-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the account holder.|

> Example responses

> 200 Response

```json
{
  "transactionRules": [
    {
      "aggregationLevel": "string",
      "description": "string",
      "endDate": "string",
      "entityKey": {
        "entityReference": "string",
        "entityType": "string"
      },
      "id": "string",
      "interval": {
        "dayOfMonth": 0,
        "dayOfWeek": "friday",
        "duration": {
          "unit": "days",
          "value": 0
        },
        "timeOfDay": "string",
        "timeZone": "string",
        "type": "daily"
      },
      "outcomeType": "enforceSCA",
      "overridesRule": "string",
      "purpose": "compliance",
      "reference": "string",
      "requestType": "authentication",
      "ruleRestrictions": {
        "activeNetworkTokens": {
          "operation": "string",
          "value": 0
        },
        "brandVariants": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "counterpartyBank": {
          "operation": "string",
          "value": [
            {
              "country": "string",
              "identification": "string",
              "identificationType": "bic"
            }
          ]
        },
        "counterpartyTypes": {
          "operation": "string",
          "value": [
            "balanceAccount"
          ]
        },
        "countries": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "dayOfWeek": {
          "operation": "string",
          "value": [
            "friday"
          ]
        },
        "differentCurrencies": {
          "operation": "string",
          "value": true
        },
        "entryModes": {
          "operation": "string",
          "value": [
            "barcode"
          ]
        },
        "internationalTransaction": {
          "operation": "string",
          "value": true
        },
        "matchingTransactions": {
          "operation": "string",
          "value": 0
        },
        "matchingValues": {
          "operation": "string",
          "value": [
            "acquirerId"
          ]
        },
        "mccs": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "merchantNames": {
          "operation": "string",
          "value": [
            {
              "operation": "contains",
              "value": "string"
            }
          ]
        },
        "merchants": {
          "operation": "string",
          "value": [
            {
              "acquirerId": "string",
              "merchantId": "string"
            }
          ]
        },
        "processingTypes": {
          "operation": "string",
          "value": [
            "atmWithdraw"
          ]
        },
        "riskScores": {
          "operation": "string",
          "value": {
            "mastercard": 0,
            "visa": 0
          }
        },
        "sameAmountRestriction": {
          "operation": "string",
          "value": true
        },
        "sameCounterpartyRestriction": {
          "operation": "string",
          "value": true
        },
        "sourceAccountTypes": {
          "operation": "string",
          "value": [
            "balanceAccount"
          ]
        },
        "timeOfDay": {
          "operation": "string",
          "value": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "tokenRequestors": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "totalAmount": {
          "operation": "string",
          "value": {
            "currency": "string",
            "value": 0
          }
        },
        "walletProviderAccountScore": {
          "operation": "string",
          "value": 0
        },
        "walletProviderDeviceScore": {
          "operation": "string",
          "value": 0
        },
        "walletProviderDeviceType": {
          "operation": "string",
          "value": [
            "CARD"
          ]
        }
      },
      "score": 0,
      "startDate": "string",
      "status": "active",
      "type": "allowList"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-transaction-rules-for-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRulesResponse](#schematransactionrulesresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get summary of tax forms for an account holder

<a id="opIdget-accountHolders-id-taxFormSummary"></a>

> Code samples

```bash
curl 'https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders/string/taxFormSummary?formType=string' \
  -H 'Accept: application/json'
```

`GET /accountHolders/{id}/taxFormSummary`

Returns a summary of all tax forms for an account holder.

<h3 id="get-summary-of-tax-forms-for-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the account holder.|
|formType|query|string|true|The type of tax form you want a summary for. Accepted values are **US1099k** and **US1099nec**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "legalEntityId": "LE123",
      "taxYears": [
        2023
      ]
    },
    {
      "legalEntityId": "LE987",
      "taxYears": [
        2024,
        2025
      ]
    }
  ]
}
```

<h3 id="get-summary-of-tax-forms-for-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TaxFormSummaryResponse](#schemataxformsummaryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-balance-accounts">Balance accounts</h1>

## Create a balance account

<a id="opIdpost-balanceAccounts"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountHolderId": "AH32272223222C5GXTD343TKP",
    "description": "S.Hopper - Main balance account"
  }'
```

`POST /balanceAccounts`

Creates a balance account that holds the funds of the associated account holder.

> Body parameter

```json
{
  "accountHolderId": "AH32272223222C5GXTD343TKP",
  "description": "S.Hopper - Main balance account"
}
```

<h3 id="create-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BalanceAccountInfo](#schemabalanceaccountinfo)|false|none|
|» accountHolderId|body|string|true|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.|
|» defaultCurrencyCode|body|string|false|The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. This is the currency displayed on the Balance Account overview page in your Customer Area.<br>The default value is **EUR**.<br>> After a balance account is created, you cannot change its default currency.|
|» description|body|string|false|A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.|
|» metadata|body|object|false|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» platformPaymentConfiguration|body|[PlatformPaymentConfiguration](#schemaplatformpaymentconfiguration)|false|Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.|
|» reference|body|string|false|Your reference for the balance account, maximum 150 characters.|
|» timeZone|body|string|false|The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "AH32272223222C5GXTD343TKP",
  "defaultCurrencyCode": "EUR",
  "description": "S.Hopper - Main balance account",
  "timeZone": "Europe/Amsterdam",
  "balances": [
    {
      "available": 0,
      "balance": 0,
      "currency": "EUR",
      "reserved": 0
    }
  ],
  "id": "BA3227C223222H5J4DCGQ9V9L",
  "status": "active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="create-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalanceAccount](#schemabalanceaccount)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a balance account

<a id="opIdget-balanceAccounts-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{id}`

Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.

<h3 id="get-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance account.|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "AH32272223222B59K6RTQBFNZ",
  "defaultCurrencyCode": "EUR",
  "timeZone": "Europe/Amsterdam",
  "balances": [
    {
      "available": 0,
      "balance": 0,
      "currency": "EUR",
      "reserved": 0,
      "pending": 0,
      "pendingAvailable": 0
    }
  ],
  "id": "BA3227C223222B5BLP6JQC3FD",
  "status": "active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalanceAccount](#schemabalanceaccount)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Update a balance account

<a id="opIdpatch-balanceAccounts-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string?clientKey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "timeZone": "Europe/Amsterdam"
  }'
```

`PATCH /balanceAccounts/{id}`

Updates a balance account.

> Body parameter

```json
{
  "timeZone": "Europe/Amsterdam"
}
```

<h3 id="update-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance account.|
|body|body|[BalanceAccountUpdateRequest](#schemabalanceaccountupdaterequest)|false|none|
|» accountHolderId|body|string|false|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.|
|» description|body|string|false|A human-readable description of the balance account. You can use this parameter to distinguish between multiple balance accounts under an account holder.|
|» metadata|body|object|false|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» platformPaymentConfiguration|body|[PlatformPaymentConfiguration](#schemaplatformpaymentconfiguration)|false|Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.|
|» reference|body|string|false|Your reference to the balance account.|
|» status|body|string|false|The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.<br><br>Possible values: **active**, **closed**, **suspended**.|
|» timeZone|body|string|false|The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|closed|
|» status|inactive|
|» status|suspended|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "AH32272223222B5GFSNVGFFM7",
  "defaultCurrencyCode": "EUR",
  "timeZone": "Europe/Amsterdam",
  "balances": [
    {
      "available": 0,
      "balance": 0,
      "currency": "EUR",
      "reserved": 0
    }
  ],
  "id": "BA32272223222B59K6ZXHBFN6",
  "status": "active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="update-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalanceAccount](#schemabalanceaccount)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get payment instruments linked to a balance account

<a id="opIdget-balanceAccounts-id-paymentInstruments"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/paymentInstruments?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{id}/paymentInstruments`

Returns a paginated list of the payment instruments associated with a balance account. 

To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments which are in active status and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6&status=active`.

<h3 id="get-payment-instruments-linked-to-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance account.|
|offset|query|integer(int32)|false|The number of items that you want to skip.|
|limit|query|integer(int32)|false|The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.|
|status|query|string|false|The status of the payment instruments that you want to get. By default, the response includes payment instruments with any status.|

> Example responses

> 200 Response

```json
{
  "hasNext": true,
  "hasPrevious": false,
  "paymentInstruments": [
    {
      "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
      "issuingCountryCode": "GB",
      "status": "active",
      "type": "card",
      "card": {
        "brand": "mc",
        "brandVariant": "mc",
        "cardholderName": "name",
        "formFactor": "virtual",
        "bin": "555544",
        "expiration": {
          "month": "12",
          "year": "2022"
        },
        "lastFour": "2357",
        "number": "************2357"
      },
      "id": "PI32272223222B59M5TM658DT"
    },
    {
      "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
      "issuingCountryCode": "GB",
      "status": "active",
      "type": "card",
      "card": {
        "brand": "mc",
        "brandVariant": "mc",
        "cardholderName": "name",
        "formFactor": "virtual",
        "bin": "555544",
        "expiration": {
          "month": "01",
          "year": "2023"
        },
        "lastFour": "8331",
        "number": "************8331"
      },
      "id": "PI32272223222B59PXDGQDLSF"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-payment-instruments-linked-to-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaginatedPaymentInstrumentsResponse](#schemapaginatedpaymentinstrumentsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get all transaction rules for a balance account

<a id="opIdget-balanceAccounts-id-transactionRules"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/transactionRules?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{id}/transactionRules`

Returns a list of transaction rules associated with a balance account.

<h3 id="get-all-transaction-rules-for-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance account.|

> Example responses

> 200 Response

```json
{
  "transactionRules": [
    {
      "aggregationLevel": "string",
      "description": "string",
      "endDate": "string",
      "entityKey": {
        "entityReference": "string",
        "entityType": "string"
      },
      "id": "string",
      "interval": {
        "dayOfMonth": 0,
        "dayOfWeek": "friday",
        "duration": {
          "unit": "days",
          "value": 0
        },
        "timeOfDay": "string",
        "timeZone": "string",
        "type": "daily"
      },
      "outcomeType": "enforceSCA",
      "overridesRule": "string",
      "purpose": "compliance",
      "reference": "string",
      "requestType": "authentication",
      "ruleRestrictions": {
        "activeNetworkTokens": {
          "operation": "string",
          "value": 0
        },
        "brandVariants": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "counterpartyBank": {
          "operation": "string",
          "value": [
            {
              "country": "string",
              "identification": "string",
              "identificationType": "bic"
            }
          ]
        },
        "counterpartyTypes": {
          "operation": "string",
          "value": [
            "balanceAccount"
          ]
        },
        "countries": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "dayOfWeek": {
          "operation": "string",
          "value": [
            "friday"
          ]
        },
        "differentCurrencies": {
          "operation": "string",
          "value": true
        },
        "entryModes": {
          "operation": "string",
          "value": [
            "barcode"
          ]
        },
        "internationalTransaction": {
          "operation": "string",
          "value": true
        },
        "matchingTransactions": {
          "operation": "string",
          "value": 0
        },
        "matchingValues": {
          "operation": "string",
          "value": [
            "acquirerId"
          ]
        },
        "mccs": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "merchantNames": {
          "operation": "string",
          "value": [
            {
              "operation": "contains",
              "value": "string"
            }
          ]
        },
        "merchants": {
          "operation": "string",
          "value": [
            {
              "acquirerId": "string",
              "merchantId": "string"
            }
          ]
        },
        "processingTypes": {
          "operation": "string",
          "value": [
            "atmWithdraw"
          ]
        },
        "riskScores": {
          "operation": "string",
          "value": {
            "mastercard": 0,
            "visa": 0
          }
        },
        "sameAmountRestriction": {
          "operation": "string",
          "value": true
        },
        "sameCounterpartyRestriction": {
          "operation": "string",
          "value": true
        },
        "sourceAccountTypes": {
          "operation": "string",
          "value": [
            "balanceAccount"
          ]
        },
        "timeOfDay": {
          "operation": "string",
          "value": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "tokenRequestors": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "totalAmount": {
          "operation": "string",
          "value": {
            "currency": "string",
            "value": 0
          }
        },
        "walletProviderAccountScore": {
          "operation": "string",
          "value": 0
        },
        "walletProviderDeviceScore": {
          "operation": "string",
          "value": 0
        },
        "walletProviderDeviceType": {
          "operation": "string",
          "value": [
            "CARD"
          ]
        }
      },
      "score": 0,
      "startDate": "string",
      "status": "active",
      "type": "allowList"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-transaction-rules-for-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRulesResponse](#schematransactionrulesresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-balances">Balances</h1>

## Get all balance webhook settings

<a id="opIdget-balancePlatforms-balancePlatformId-webhooks-webhookId-settings"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/webhooks/string/settings \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings`

Returns all balance webhook settings configured for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

<h3 id="get-all-balance-webhook-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatformId|path|string|true|The unique identifier of the balance platform.|
|webhookId|path|string|true|The unique identifier of the balance webhook.|

> Example responses

> 200 Response

```json
{
  "webhookSettings": [
    {
      "id": "BWHS00000000000000000000000001",
      "type": "balance",
      "target": {
        "type": "balancePlatform",
        "id": "YOUR_BALANCE_PLATFORM"
      },
      "currency": "USD",
      "status": "active",
      "conditions": [
        {
          "balanceType": "available",
          "conditionType": "lessThan",
          "value": 500000
        }
      ]
    },
    {
      "id": "BWHS00000000000000000000000002",
      "type": "balance",
      "target": {
        "type": "balanceAccount",
        "id": "BA00000000000000000LIABLE"
      },
      "currency": "USD",
      "status": "active",
      "conditions": [
        {
          "balanceType": "available",
          "conditionType": "greaterThan",
          "value": 1000000
        }
      ]
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

> 403 Response

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

<h3 id="get-all-balance-webhook-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[WebhookSettings](#schemawebhooksettings)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the payment was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a balance webhook setting

<a id="opIdpost-balancePlatforms-balancePlatformId-webhooks-webhookId-settings"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/webhooks/string/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "type": "balance",
    "target": {
      "type": "balanceAccount",
      "id": "BA00000000000000000LIABLE"
    },
    "currency": "USD",
    "status": "active",
    "conditions": [
      {
        "balanceType": "available",
        "conditionType": "lessThan",
        "value": 500000
      }
    ]
  }'
```

`POST /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings`

Configures the criteria for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/1/post/balancePlatform.balanceAccount.balance.updated).

Adyen sends balance webhooks to notify you of balance changes in your balance platform. They can be triggered when the balance reaches, exceeds, or drops below a specific value in a specific currency.

You can get notified about balance changes in your entire balance platform, in the balance accounts of a specific user, or a specific balance account. The hierarchy between the webhook settings are based on the following business logic:

* Settings on a higher level apply to all lower level resources (balance platform > account holder > balance acocunt).

* The most granular setting overrides higher level settings (balance account > account holder > balance platform).

> Body parameter

```json
{
  "type": "balance",
  "target": {
    "type": "balanceAccount",
    "id": "BA00000000000000000LIABLE"
  },
  "currency": "USD",
  "status": "active",
  "conditions": [
    {
      "balanceType": "available",
      "conditionType": "lessThan",
      "value": 500000
    }
  ]
}
```

<h3 id="create-a-balance-webhook-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatformId|path|string|true|The unique identifier of the balance platform.|
|webhookId|path|string|true|The unique identifier of the balance webhook.|
|body|body|[BalanceWebhookSettingInfo](#schemabalancewebhooksettinginfo)|true|none|
|» conditions|body|[[Condition](#schemacondition)]|false|The array of conditions a balance change must meet for Adyen to send the webhook.|
|» currency|body|string|true|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.|
|» status|body|string|true|The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.|
|» target|body|[Target](#schematarget)|true|The type and ID of the resource about whose balance changes you want to be notified.|
|» type|body|string|true|The type of the webhook you are configuring. Set to **balance**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|
|» type|balance|

> Example responses

> 200 Response

```json
{
  "id": "BWHS00000000000000000000000001",
  "type": "balance",
  "target": {
    "type": "balanceAccount",
    "id": "BA00000000000000000LIABLE"
  },
  "currency": "USD",
  "status": "active",
  "conditions": [
    {
      "balanceType": "available",
      "conditionType": "lessThan",
      "value": 500000
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

> 403 Response

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

<h3 id="create-a-balance-webhook-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[WebhookSetting](#schemawebhooksetting)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the payment was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a balance webhook setting by id

<a id="opIdget-balancePlatforms-balancePlatformId-webhooks-webhookId-settings-settingId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/webhooks/string/settings/string \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`

Returns the details of a specific balance webhook setting configured for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

<h3 id="get-a-balance-webhook-setting-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatformId|path|string|true|The unique identifier of the balance platform.|
|webhookId|path|string|true|The unique identifier of the balance webhook.|
|settingId|path|string|true|The unique identifier of the balance webhook setting.|

> Example responses

> 200 Response

```json
{
  "id": "BWHS00000000000000000000000001",
  "type": "balance",
  "target": {
    "type": "balancePlatform",
    "id": "YOUR_BALANCE_PLATFORM"
  },
  "currency": "USD",
  "status": "active",
  "conditions": [
    {
      "balanceType": "available",
      "conditionType": "lessThan",
      "value": 500000
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

> 403 Response

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

<h3 id="get-a-balance-webhook-setting-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[WebhookSetting](#schemawebhooksetting)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the payment was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a balance webhook setting by id

<a id="opIddelete-balancePlatforms-balancePlatformId-webhooks-webhookId-settings-settingId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/webhooks/string/settings/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`

Deletes a balance webhook setting that contains the conditions for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

<h3 id="delete-a-balance-webhook-setting-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatformId|path|string|true|The unique identifier of the balance platform.|
|webhookId|path|string|true|The unique identifier of the balance webhook.|
|settingId|path|string|true|The unique identifier of the balance webhook setting.|

> Example responses

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

> 403 Response

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

<h3 id="delete-a-balance-webhook-setting-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - the request has been successfully processed, but there is no additional content.|None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the payment was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a balance webhook setting by id

<a id="opIdpatch-balancePlatforms-balancePlatformId-webhooks-webhookId-settings-settingId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/webhooks/string/settings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "type": "balance",
    "status": "inactive"
  }'
```

`PATCH /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`

Updates the conditions the balance change needs to meet for Adyen to send a [balance webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

> Body parameter

```json
{
  "type": "balance",
  "status": "inactive"
}
```

<h3 id="update-a-balance-webhook-setting-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatformId|path|string|true|The unique identifier of the balance platform.|
|webhookId|path|string|true|The unique identifier of the balance webhook.|
|settingId|path|string|true|The unique identifier of the balance webhook setting.|
|body|body|[BalanceWebhookSettingInfoUpdate](#schemabalancewebhooksettinginfoupdate)|true|none|
|» conditions|body|[[Condition](#schemacondition)]|false|The array of conditions a balance change must meet for Adyen to send the webhook.|
|» currency|body|string|false|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.|
|» status|body|string|false|The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.|
|» target|body|[TargetUpdate](#schematargetupdate)|false|The type and ID of the resource about whose balance changes you want to be notified.|
|» type|body|string|false|The type of the webhook you are configuring. Set to **balance**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|
|» type|balance|

> Example responses

> 200 Response

```json
{
  "type": "balance",
  "id": "BWHS00000000000000000000000001",
  "target": {
    "type": "balanceAccount",
    "id": "BA00000000000000000LIABLE"
  },
  "currency": "USD",
  "status": "inactive",
  "conditions": [
    {
      "balanceType": "available",
      "conditionType": "lessThan",
      "value": 500000
    },
    {
      "balanceType": "balance",
      "conditionType": "greaterThan",
      "value": 1000000
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

> 403 Response

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

<h3 id="update-a-balance-webhook-setting-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[WebhookSetting](#schemawebhooksetting)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the payment was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-managed-payout-schedules">Managed payout schedules</h1>

## Get all managed payout schedules on a balance account

<a id="opIdget-balanceAccounts-balanceAccountId-payoutSchedules"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/payoutSchedules \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /balanceAccounts/{balanceAccountId}/payoutSchedules`

Returns a list of all managed payout schedules that are configured on a balance account. You can use query parameters to filter the elements that are returned in the list.

<h3 id="get-all-managed-payout-schedules-on-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|currency|query|string|false|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in the payout schedule.|
|cursor|query|string|false|The `cursor` returned in the links of the previous response.|
|limit|query|integer(int32)|false|The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.|

> Example responses

> 200 Response

```json
{
  "balanceAccountPayoutSchedules": [
    {
      "id": "PSAC00000000000000000000000001",
      "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
      "balanceAccountId": "BA000000000000000000001",
      "transferInstrumentId": "SE00000000000000000000001",
      "currency": "EUR",
      "reference": "Monthly payout",
      "description": "Scheduled payout to merchant bank account",
      "referenceForBeneficiary": "PAYOUT-REF-001",
      "retainedAmount": 10000,
      "minPayoutAmount": 1000,
      "maxPayoutAmount": 100000000,
      "createdAt": "2024-01-15T10:30:00Z",
      "enabled": true,
      "frequency": "monthly",
      "frequencyValue": 1
    }
  ],
  "link": {
    "next": {
      "href": "/balanceAccounts/BA000000000000000000001/payoutSchedules?limit=10"
    }
  }
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

<h3 id="get-all-managed-payout-schedules-on-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[BalanceAccountConfigurations](#schemabalanceaccountconfigurations)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Apply a managed payout schedule to a balance account

<a id="opIdpost-balanceAccounts-balanceAccountId-payoutSchedules"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/payoutSchedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
    "transferInstrumentId": "SE00000000000000000000001",
    "currency": "EUR",
    "reference": "Monthly payout",
    "description": "Scheduled payout to merchant bank account",
    "referenceForBeneficiary": "PAYOUT-REF-001",
    "retainedAmount": 10000,
    "minPayoutAmount": 1000,
    "maxPayoutAmount": 100000000,
    "enabled": true,
    "frequency": "monthly",
    "frequencyValue": 1
  }'
```

`POST /balanceAccounts/{balanceAccountId}/payoutSchedules`

Apply a managed payout schedule to a balance account. This payout schedule is based on an existing payout schedule in your balance platform.

> Body parameter

```json
{
  "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
  "transferInstrumentId": "SE00000000000000000000001",
  "currency": "EUR",
  "reference": "Monthly payout",
  "description": "Scheduled payout to merchant bank account",
  "referenceForBeneficiary": "PAYOUT-REF-001",
  "retainedAmount": 10000,
  "minPayoutAmount": 1000,
  "maxPayoutAmount": 100000000,
  "enabled": true,
  "frequency": "monthly",
  "frequencyValue": 1
}
```

<h3 id="apply-a-managed-payout-schedule-to-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|body|body|[BalanceAccountConfigurationRequest](#schemabalanceaccountconfigurationrequest)|true|none|
|» balancePlatformPayoutScheduleId|body|string|true|The unique identifier of the payout schedule that is applied to the balance account.|
|» currency|body|string|false|The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for this schedule.|
|» description|body|string|false|The description used for all payouts initiated by this payout schedule.<br><br>Maximum length: 140 characters. If your description is longer, it may be truncated.<br><br>Default value: The `defaultDescription` from the balance platform schedule that you are applying.|
|» enabled|body|boolean|false|Specifies whether the payout schedule is enabled immediately after it is created.|
|» frequency|body|string|false|The frequency of payouts initiated by this payout schedule.<br><br>Possible values:<br>* daily<br>* weekdays<br>* weekly<br>* monthly<br><br>Default value: The `defaultFrequency` from the balance platform schedule that you are applying.|
|» frequencyValue|body|integer(int32)|false|The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.<br><br>Possible values if `frequency` is **weekly**: **[1 - 5]**.<br><br>Default value: The `defaultFrequencyValue` from the balance platform schedule that you are applying.|
|» maxPayoutAmount|body|integer(int64)|false|The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|» minPayoutAmount|body|integer(int64)|false|The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|» reference|body|string|false|The merchant reference that will be shown only in the schedule.|
|» referenceForBeneficiary|body|string|false|The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.<br><br>Default value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying.|
|» retainedAmount|body|integer(int64)|false|The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0**|
|» salesDayClosingTime|body|string|false|**Deprecated.** The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.<br><br>Format: **HH:mm:ss**|
|» transferInstrumentId|body|string|true|The unique identifier of the transfer instrument to which the funds are paid out.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» frequency|daily|
|» frequency|weekly|
|» frequency|weekdays|
|» frequency|monthly|

> Example responses

> 200 Response

```json
{
  "id": "PSAC00000000000000000000000001",
  "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
  "balanceAccountId": "BA000000000000000000001",
  "transferInstrumentId": "SE00000000000000000000001",
  "currency": "EUR",
  "reference": "Monthly payout",
  "description": "Scheduled payout to merchant bank account",
  "referenceForBeneficiary": "PAYOUT-REF-001",
  "retainedAmount": 10000,
  "minPayoutAmount": 1000,
  "maxPayoutAmount": 100000000,
  "createdAt": "2024-01-15T10:30:00Z",
  "enabled": true,
  "frequency": "monthly",
  "frequencyValue": 1
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

<h3 id="apply-a-managed-payout-schedule-to-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[BalanceAccountConfiguration](#schemabalanceaccountconfiguration)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a specific managed payout schedule on a balance account

<a id="opIdget-balanceAccounts-balanceAccountId-payoutSchedules-id"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/payoutSchedules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}`

Returns the specified payout schedule.

<h3 id="get-a-specific-managed-payout-schedule-on-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|id|path|string|true|The unique identifier of the payout schedule for the balance account.|

> Example responses

> 200 Response

```json
{
  "id": "PSAC00000000000000000000000001",
  "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
  "balanceAccountId": "BA000000000000000000001",
  "transferInstrumentId": "SE00000000000000000000001",
  "currency": "EUR",
  "reference": "Monthly payout",
  "description": "Scheduled payout to merchant bank account",
  "referenceForBeneficiary": "PAYOUT-REF-001",
  "retainedAmount": 10000,
  "minPayoutAmount": 1000,
  "maxPayoutAmount": 100000000,
  "createdAt": "2024-01-15T10:30:00Z",
  "enabled": true,
  "frequency": "monthly",
  "frequencyValue": 1
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

<h3 id="get-a-specific-managed-payout-schedule-on-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[BalanceAccountConfiguration](#schemabalanceaccountconfiguration)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete a managed payout schedule on a balance account

<a id="opIddelete-balanceAccounts-balanceAccountId-payoutSchedules-id"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/payoutSchedules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}`

Delete a payout schedule applied to a balance account.

<h3 id="delete-a-managed-payout-schedule-on-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|id|path|string|true|The unique identifier of the payout schedule applied to the balance account.|

> Example responses

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

<h3 id="delete-a-managed-payout-schedule-on-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK - The request has succeeded.|None|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update a managed payout schedule on a balance account

<a id="opIdpatch-balanceAccounts-balanceAccountId-payoutSchedules-id"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/payoutSchedules/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "Updated payout description",
    "enabled": false,
    "retainedAmount": 20000
  }'
```

`PATCH /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}`

Update a managed payout schedule applied to a balance account. If an optional parameter is not included in the request, it remains unchanged.

> Body parameter

```json
{
  "description": "Updated payout description",
  "enabled": false,
  "retainedAmount": 20000
}
```

<h3 id="update-a-managed-payout-schedule-on-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|id|path|string|true|The unique identifier of the payout schedule applied to the balance account.|
|body|body|[BalanceAccountConfigurationUpdate](#schemabalanceaccountconfigurationupdate)|true|none|
|» description|body|string \| null|false|The description used for all payouts initiated by this payout schedule.<br><br>Maximum length: 140 characters. If your description is longer, it may be truncated.<br><br>Default value: The `defaultDescription` from the balance platform schedule that you are applying.|
|» enabled|body|boolean \| null|false|Specifies whether the payout schedule is enabled immediately after it is created.|
|» frequency|body|string|false|The frequency of payouts initiated by this payout schedule.<br><br>Possible values:<br>* daily<br>* weekdays<br>* weekly<br>* monthly<br><br>Default value: The `defaultFrequency` from the balance platform schedule that you are applying.|
|» frequencyValue|body|integer \| null(int32)|false|The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.<br><br>Possible values if `frequency` is **weekly**: **[1 - 5]**.<br><br>Default value: The `defaultFrequencyValue` from the balance platform schedule that you are applying.|
|» maxPayoutAmount|body|integer \| null(int64)|false|The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|» minPayoutAmount|body|integer \| null(int64)|false|The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|» reference|body|string \| null|false|The merchant reference that will be shown only in the schedule.|
|» referenceForBeneficiary|body|string \| null|false|The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.<br><br>Default value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying.|
|» retainedAmount|body|integer \| null(int64)|false|The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0**|
|» salesDayClosingTime|body|string|false|**Deprecated.** The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.<br><br>Format: **HH:mm:ss**|
|» transferInstrumentId|body|string|false|The unique identifier of the transfer instrument to which the funds are paid out.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» frequency|daily|
|» frequency|weekly|
|» frequency|weekdays|
|» frequency|monthly|

> Example responses

> 200 Response

```json
{
  "id": "PSAC00000000000000000000000001",
  "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
  "balanceAccountId": "BA000000000000000000001",
  "transferInstrumentId": "SE00000000000000000000001",
  "currency": "EUR",
  "reference": "Monthly payout",
  "description": "Updated payout description",
  "referenceForBeneficiary": "PAYOUT-REF-001",
  "retainedAmount": 20000,
  "minPayoutAmount": 1000,
  "maxPayoutAmount": 100000000,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-16T14:00:00Z",
  "enabled": false,
  "frequency": "monthly",
  "frequencyValue": 1
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

<h3 id="update-a-managed-payout-schedule-on-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[BalanceAccountConfiguration](#schemabalanceaccountconfiguration)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## View executions of a managed payout schedule

<a id="opIdget-balanceAccounts-balanceAccountId-payoutSchedules-id-executions"></a>

> Code samples

```bash
curl 'https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/payoutSchedules/string/executions?offset=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}/executions`

View information about the executions of a managed payout schedule on the specified balance account. An execution is an attempt to make a payout according to the payout schedule. 

<h3 id="view-executions-of-a-managed-payout-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|id|path|string|true|The unique identifier of the payout schedule on the balance account.|
|results|query|string|false|Contains a comma-separated list of payout statuses. If included, the response returns only executed payouts that currently have one of the specified statuses.<br><br>Possible statuses:<br>- **succeeded**: The payout was sent successfully.<br>- **failed**: The payout was not sent due to an error.<br>- **skipped**: The payout was not triggered as expected.<br><br>Examples: `results=succeeded`, `results=failed,skipped`|
|limit|query|integer(int32)|false|The number of items returned per page.<br><br>Default: **10**|
|offset|query|integer(int32)|true|The page number to be returned.<br><br>Default: **1**|

> Example responses

> 200 Response

```json
{
  "payoutScheduleExecutions": [
    {
      "id": "PS0000000000001",
      "result": "skipped",
      "triggeredAt": "2026-03-11T08:00:00Z",
      "resultDetails": {
        "reasonCode": "noBalanceToPayOut",
        "reason": "No balance to pay out"
      }
    },
    {
      "id": "PS0000000000002",
      "result": "succeeded",
      "triggeredAt": "2026-03-12T08:00:00Z",
      "resultDetails": {
        "transferId": "A0A0A0A0A0A0A0A0"
      }
    }
  ]
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

<h3 id="view-executions-of-a-managed-payout-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[PayoutScheduleExecutions](#schemapayoutscheduleexecutions)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get all managed payout schedules on your balance platform

<a id="opIdget-balancePlatforms-balancePlatformId-payoutSchedules"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/payoutSchedules \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{balancePlatformId}/payoutSchedules`

Returns a list of all the payout schedules that are configured for your balance platform. You can use query parameters to filter the elements that are returned in the list.

<h3 id="get-all-managed-payout-schedules-on-your-balance-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatformId|path|string|true|The unique identifier of the balance platform.|
|countryCode|query|string|false|The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country to which the payout configuration applies.|
|currency|query|string|false|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in the payout configuration.|

> Example responses

> 200 Response

```json
{
  "balancePlatformPayoutSchedules": [
    {
      "automaticApplication": true,
      "balancePlatformId": "string",
      "countryCode": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "currency": "string",
      "defaultDescription": "string",
      "defaultFrequency": "string",
      "defaultFrequencyValue": 0,
      "defaultReference": "string",
      "defaultReferenceForBeneficiary": "string",
      "enabled": true,
      "id": "string",
      "maxPayoutAmount": 0,
      "minPayoutAmount": 0,
      "payoutScheduleDescription": "string",
      "retainedAmount": 0,
      "updatedAt": "1970-01-01T00:00:00Z",
      "userSettlementDelay": 0,
      "userSettlementTime": "string",
      "userSettlementTimeZone": "string"
    }
  ]
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

<h3 id="get-all-managed-payout-schedules-on-your-balance-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[BalancePlatformConfigurations](#schemabalanceplatformconfigurations)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific managed payout schedule on your balance platform

<a id="opIdget-balancePlatforms-balancePlatformId-payoutSchedules-id"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/payoutSchedules/string \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{balancePlatformId}/payoutSchedules/{id}`

Returns the specified managed payout schedule configured on your balance platform.

<h3 id="get-a-specific-managed-payout-schedule-on-your-balance-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatformId|path|string|true|The unique identifier of the balance platform.|
|id|path|string|true|The unique identifier of the payout configuration for your balance platform.|

> Example responses

> 200 Response

```json
{
  "automaticApplication": true,
  "balancePlatformId": "string",
  "countryCode": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "currency": "string",
  "defaultDescription": "string",
  "defaultFrequency": "string",
  "defaultFrequencyValue": 0,
  "defaultReference": "string",
  "defaultReferenceForBeneficiary": "string",
  "enabled": true,
  "id": "string",
  "maxPayoutAmount": 0,
  "minPayoutAmount": 0,
  "payoutScheduleDescription": "string",
  "retainedAmount": 0,
  "updatedAt": "1970-01-01T00:00:00Z",
  "userSettlementDelay": 0,
  "userSettlementTime": "string",
  "userSettlementTimeZone": "string"
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

<h3 id="get-a-specific-managed-payout-schedule-on-your-balance-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[BalancePlatformConfiguration](#schemabalanceplatformconfiguration)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-custom-payout-schedules-sweeps">Custom payout schedules (sweeps)</h1>

## Get all sweeps for a balance account

<a id="opIdget-balanceAccounts-balanceAccountId-sweeps"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/sweeps?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{balanceAccountId}/sweeps`

Returns a list of the sweeps configured for a balance account.

To fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.

<h3 id="get-all-sweeps-for-a-balance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|offset|query|integer(int32)|false|The number of items that you want to skip.|
|limit|query|integer(int32)|false|The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.|

> Example responses

> 200 Response

```json
{
  "hasNext": false,
  "hasPrevious": false,
  "sweeps": [
    {
      "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
      "schedule": {
        "type": "daily"
      },
      "status": "active",
      "targetAmount": {
        "currency": "EUR",
        "value": 0
      },
      "triggerAmount": {
        "currency": "EUR",
        "value": 0
      },
      "type": "push",
      "counterparty": {
        "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
      },
      "currency": "EUR"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-sweeps-for-a-balance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalanceSweepConfigurationsResponse](#schemabalancesweepconfigurationsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Create a sweep

<a id="opIdpost-balanceAccounts-balanceAccountId-sweeps"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/sweeps?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "counterparty": {
      "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
    },
    "triggerAmount": {
      "currency": "EUR",
      "value": 50000
    },
    "currency": "EUR",
    "schedule": {
      "type": "balance"
    },
    "type": "pull",
    "status": "active"
  }'
```

`POST /balanceAccounts/{balanceAccountId}/sweeps`

Creates a sweep that results in moving funds from or to a balance account.

A sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a source or a destination.

> Body parameter

```json
{
  "counterparty": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  },
  "triggerAmount": {
    "currency": "EUR",
    "value": 50000
  },
  "currency": "EUR",
  "schedule": {
    "type": "balance"
  },
  "type": "pull",
  "status": "active"
}
```

<h3 id="create-a-sweep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|body|body|[CreateSweepConfigurationV2](#schemacreatesweepconfigurationv2)|false|none|
|» category|body|string|false|The type of transfer that results from the sweep.<br><br>Possible values:<br><br> - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).<br><br>- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.<br><br>Required when setting `priorities`.|
|» counterparty|body|[SweepCounterparty](#schemasweepcounterparty)|true|The destination or the source of the funds, depending on the sweep `type`.<br><br>Either a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.|
|» currency|body|string|true|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.<br><br>The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).|
|» description|body|string|false|The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message will be cut off at 140 characters.|
|» priorities|body|[string]|false|The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities, ordered by your preference. Adyen will try to pay out using the priorities in the given order. If the first priority is not currently supported or enabled for your platform, the system will try the next one, and so on.<br><br>The request will be accepted as long as **at least one** of the provided priorities is valid (i.e., supported by Adyen and activated for your platform). For example, if you provide `["wire","regular"]`, and `wire` is not supported but `regular` is, the request will still be accepted and processed.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Set `category` to **bank**. For more details, see optional priorities setup for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/scheduled-payouts#optional-priorities-setup) or [platforms](https://docs.adyen.com/platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).|
|» reference|body|string|false|Your reference for the sweep configuration.|
|» referenceForBeneficiary|body|string|false|The reference sent to or received from the counterparty. Only alphanumeric characters are allowed.|
|» schedule|body|[SweepSchedule](#schemasweepschedule)|true|The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.|
|» status|body|string|false|The status of the sweep. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. <br><br> * **inactive**: the sweep is disabled and cannot be triggered. <br><br>|
|» sweepAmount|body|[Amount](#schemaamount)|false|The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.|
|» targetAmount|body|[Amount](#schemaamount)|false|The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.|
|» triggerAmount|body|[Amount](#schemaamount)|false|The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.<br><br>* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.<br><br>* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.|
|» type|body|string|false|The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.<br><br>Possible values:<br><br> * **push**: _push out funds_ to a destination balance account or transfer instrument.<br><br> * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|bank|
|» category|internal|
|» category|platformPayment|
|» priorities|crossBorder|
|» priorities|fast|
|» priorities|instant|
|» priorities|internal|
|» priorities|regular|
|» priorities|wire|
|» status|active|
|» status|inactive|
|» type|pull|
|» type|push|

> Example responses

> 200 Response

```json
{
  "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
  "counterparty": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  },
  "triggerAmount": {
    "currency": "EUR",
    "value": 50000
  },
  "currency": "EUR",
  "schedule": {
    "type": "balance"
  },
  "type": "pull",
  "status": "active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="create-a-sweep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SweepConfigurationV2](#schemasweepconfigurationv2)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a sweep

<a id="opIdget-balanceAccounts-balanceAccountId-sweeps-sweepId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/sweeps/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`

Returns a sweep.

<h3 id="get-a-sweep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|sweepId|path|string|true|The unique identifier of the sweep.|

> Example responses

> 200 Response

```json
{
  "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
  "schedule": {
    "type": "daily"
  },
  "status": "active",
  "targetAmount": {
    "currency": "EUR",
    "value": 0
  },
  "triggerAmount": {
    "currency": "EUR",
    "value": 0
  },
  "type": "push",
  "counterparty": {
    "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
  },
  "currency": "EUR"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-sweep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SweepConfigurationV2](#schemasweepconfigurationv2)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Delete a sweep

<a id="opIddelete-balanceAccounts-balanceAccountId-sweeps-sweepId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/sweeps/string?clientKey=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`

Deletes a sweep for a balance account.

<h3 id="delete-a-sweep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|sweepId|path|string|true|The unique identifier of the sweep.|

> Example responses

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="delete-a-sweep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - look at the actual response code for the status of the request. |None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Update a sweep

<a id="opIdpatch-balanceAccounts-balanceAccountId-sweeps-sweepId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/sweeps/string?clientKey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "status": "inactive"
  }'
```

`PATCH /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`

Updates a sweep. When updating a sweep resource, note that if a request parameter is not provided, the parameter is left unchanged.

> Body parameter

```json
{
  "status": "inactive"
}
```

<h3 id="update-a-sweep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|sweepId|path|string|true|The unique identifier of the sweep.|
|body|body|[UpdateSweepConfigurationV2](#schemaupdatesweepconfigurationv2)|false|none|
|» category|body|string|false|The type of transfer that results from the sweep.<br><br>Possible values:<br><br> - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).<br><br>- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.<br><br>Required when setting `priorities`.|
|» counterparty|body|[SweepCounterparty](#schemasweepcounterparty)|false|The destination or the source of the funds, depending on the sweep `type`.<br><br>Either a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.|
|» currency|body|string|false|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.<br><br>The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).|
|» description|body|string|false|The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message will be cut off at 140 characters.|
|» priorities|body|[string]|false|The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities, ordered by your preference. Adyen will try to pay out using the priorities in the given order. If the first priority is not currently supported or enabled for your platform, the system will try the next one, and so on.<br><br>The request will be accepted as long as **at least one** of the provided priorities is valid (i.e., supported by Adyen and activated for your platform). For example, if you provide `["wire","regular"]`, and `wire` is not supported but `regular` is, the request will still be accepted and processed.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Set `category` to **bank**. For more details, see optional priorities setup for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/scheduled-payouts#optional-priorities-setup) or [platforms](https://docs.adyen.com/platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).|
|» reference|body|string|false|Your reference for the sweep configuration.|
|» referenceForBeneficiary|body|string|false|The reference sent to or received from the counterparty. Only alphanumeric characters are allowed.|
|» schedule|body|[SweepSchedule](#schemasweepschedule)|false|The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.|
|» status|body|string|false|The status of the sweep. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. <br><br> * **inactive**: the sweep is disabled and cannot be triggered. <br><br>|
|» sweepAmount|body|[Amount](#schemaamount)|false|The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.|
|» targetAmount|body|[Amount](#schemaamount)|false|The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.|
|» triggerAmount|body|[Amount](#schemaamount)|false|The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.<br><br>* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.<br><br>* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.|
|» type|body|string|false|The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.<br><br>Possible values:<br><br> * **push**: _push out funds_ to a destination balance account or transfer instrument.<br><br> * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|bank|
|» category|internal|
|» category|platformPayment|
|» priorities|crossBorder|
|» priorities|fast|
|» priorities|instant|
|» priorities|internal|
|» priorities|regular|
|» priorities|wire|
|» status|active|
|» status|inactive|
|» type|pull|
|» type|push|

> Example responses

> 200 Response

```json
{
  "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
  "counterparty": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  },
  "triggerAmount": {
    "currency": "EUR",
    "value": 50000
  },
  "currency": "EUR",
  "schedule": {
    "type": "balance"
  },
  "type": "pull",
  "status": "inactive"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="update-a-sweep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SweepConfigurationV2](#schemasweepconfigurationv2)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## View executions of a custom payout schedule

<a id="opIdget-balanceAccounts-balanceAccountId-sweeps-sweepId-executions"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/sweeps/string/executions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}/executions`

Returns a paginated list of executions of a custom payout schedule on a balance account. You can use query parameters to filter the executions that are returned in the list.

<h3 id="view-executions-of-a-custom-payout-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|sweepId|path|string|true|The unique identifier of the sweep configuration.|
|results|query|string|false|Contains a comma-separated list of sweep execution results. If included, the response returns only sweep executions with the specified results.<br><br>Possible results:<br>- **succeeded**: The sweep payout was completed successfully.<br>- **failed**: The sweep payout was not completed due to an error.<br>- **skipped**: The sweep payout was not triggered as expected.|
|limit|query|integer(int32)|false|The number of items returned per page. By default, the response returns 10 items per page.|
|cursor|query|string|false|The cursor from the `next` or `previous` pagination link in the previous response.|

> Example responses

> 200 Response

```json
{
  "sweepExecutions": [
    {
      "id": "SWPE12345678901234567890123456",
      "triggeredAt": "2026-02-16T08:00:00Z",
      "result": "succeeded",
      "resultDetails": {
        "transferId": "4VXLNP68FCFE5FQ1"
      }
    }
  ],
  "link": {
    "next": {
      "href": "https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/BA000000000000000000001/sweeps/SWPC000000000000000000001/executions?limit=10&cursor=eyJvZmZzZXQiOjEwfQ"
    }
  }
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

<h3 id="view-executions-of-a-custom-payout-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[PayoutSweepExecutions](#schemapayoutsweepexecutions)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the resource was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-authorized-card-users">Authorized card users</h1>

## Get authorized users for a card.

<a id="opIdget-paymentInstruments-paymentInstrumentId-authorisedCardUsers"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/authorisedCardUsers \
  -H 'Accept: application/json'
```

`GET /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`

Returns the authorized users for a card.

<h3 id="get-authorized-users-for-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentInstrumentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "legalEntityIds": [
    "LE328V522322685LV3KTNF35M",
    "LE328SW223226B5LWVWNQ8THN"
  ]
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "detail": "Not allowed for card partner yet.",
  "requestId": "d42c493b5176df89e51516c6060cc34c",
  "status": 403
}
```

> 404 Response

```json
{
  "type": "https://docs.adyen.com/errors/not-found",
  "errorCode": "999_404_001",
  "title": "Entity not found",
  "detail": "Given payment instrument does not exist in our system. PI: PI3222722322935MDMZ9J83KH",
  "requestId": "2fd2bd9cd4739575c5c562f0ff1e7396",
  "status": 404
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/unprocessable-entity",
  "errorCode": "999_422_002",
  "title": "Business constraint violation",
  "detail": "There is not any legal entity tied to this payment instrument.",
  "requestId": "4949a74bb7be732e559808a8ac3a86fc",
  "status": 422
}
```

<h3 id="get-authorized-users-for-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AuthorisedCardUsers](#schemaauthorisedcardusers)|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Create authorized users for a card.

<a id="opIdpost-paymentInstruments-paymentInstrumentId-authorisedCardUsers"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/authorisedCardUsers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "legalEntityIds": [
      "LE328V522322685LV3KTNF35M",
      "LE328SW223226B5LWVWNQ8THN"
    ]
  }'
```

`POST /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`

Assigns authorized users to a card. Users must have the **authorisedPaymentInstrumentUser** capability to be able to use the card.

> Body parameter

```json
{
  "legalEntityIds": [
    "LE328V522322685LV3KTNF35M",
    "LE328SW223226B5LWVWNQ8THN"
  ]
}
```

<h3 id="create-authorized-users-for-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentInstrumentId|path|string|true|none|
|body|body|[AuthorisedCardUsers](#schemaauthorisedcardusers)|true|none|
|» legalEntityIds|body|[string]|false|The legal entity IDs of the authorized card users linked to the specified payment instrument.|

> Example responses

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/bad-request",
  "errorCode": "999_400_000",
  "title": "Bad request",
  "detail": "Payment instrument already linked with legal entities. Please use patch method.",
  "requestId": "24433d4ef9de1fa82be15274638f5d49",
  "status": 400
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "detail": "Not allowed for card partner yet.",
  "requestId": "d42c493b5176df89e51516c6060cc34c",
  "status": 403
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/unprocessable-entity",
  "errorCode": "999_422_002",
  "title": "Business constraint violation",
  "detail": "Given payment instrument is not a multi use payment instrument.",
  "requestId": "4a7beaa203f673074e029916d4325602",
  "status": 422
}
```

<h3 id="create-authorized-users-for-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|
|400|Bad Request|Bad request|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the authorized users for a card.

<a id="opIddelete-paymentInstruments-paymentInstrumentId-authorisedCardUsers"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/authorisedCardUsers \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`

Deletes the list of authorized users assigned to a card.

<h3 id="delete-the-authorized-users-for-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentInstrumentId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "detail": "Not allowed for card partner yet.",
  "requestId": "d42c493b5176df89e51516c6060cc34c",
  "status": 403
}
```

<h3 id="delete-the-authorized-users-for-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the authorized users for a card.

<a id="opIdpatch-paymentInstruments-paymentInstrumentId-authorisedCardUsers"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/authorisedCardUsers \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "legalEntityIds": [
      "LE328V522322685LV3KTNF35M",
      "LE328SW223226B5LWVWNQ8THN"
    ]
  }'
```

`PATCH /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`

Updates the list of authorized users for a card.

>This request replaces all existing authorized users for the card.

> Body parameter

```json
{
  "legalEntityIds": [
    "LE328V522322685LV3KTNF35M",
    "LE328SW223226B5LWVWNQ8THN"
  ]
}
```

<h3 id="update-the-authorized-users-for-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentInstrumentId|path|string|true|none|
|body|body|[AuthorisedCardUsers](#schemaauthorisedcardusers)|true|none|
|» legalEntityIds|body|[string]|false|The legal entity IDs of the authorized card users linked to the specified payment instrument.|

> Example responses

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/bad-request",
  "errorCode": "999_400_000",
  "title": "Bad request",
  "detail": "Payment instrument hasn't linked with any legal entity reference Please use post method.",
  "requestId": "a852d1b1c0fcbb7177b3bd16a0a2f6d7",
  "status": 400
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "detail": "Not allowed for card partner yet.",
  "requestId": "d42c493b5176df89e51516c6060cc34c",
  "status": 403
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/unprocessable-entity",
  "errorCode": "999_422_002",
  "title": "Business constraint violation",
  "detail": "Request must have maximum 10 legal entity reference.",
  "requestId": "aeadb5646efe065f5e027d2fb6b137ec",
  "status": 422
}
```

<h3 id="update-the-authorized-users-for-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|
|400|Bad Request|Bad request|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-recurring-top-ups">Recurring top ups</h1>

## Get recurring top ups for a specific balanceAccountId

<a id="opIdget-balanceAccounts-balanceAccountId-recurringTopUps"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/recurringTopUps \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{balanceAccountId}/recurringTopUps`

View all recurring top ups configured for a specific `balanceAccountId`.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).


<h3 id="get-recurring-top-ups-for-a-specific-balanceaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|limit|query|integer(int32)|false|The number of items to return per page. Value must be between 1 and 100.|
|cursor|query|string|false|The cursor used for pagination. Required if you want to see the next or previous page of results.|

> Example responses

> 200 Response

```json
{
  "recurringTopUps": [
    {
      "id": "TUPC0000000000000000000001",
      "counterparty": {
        "transferInstrumentId": "SE000000000000000000000001"
      },
      "description": "My description",
      "topUpAmount": {
        "fixed": {
          "value": 1000,
          "currency": "EUR"
        }
      },
      "trigger": {
        "schedule": {
          "type": "weekdays"
        },
        "threshold": {
          "value": 100,
          "currency": "EUR"
        }
      },
      "status": "active"
    }
  ],
  "link": {
    "next": {
      "href": "/balanceAccounts/balanceAccount1/recurringTopUps?limit=10&cursor=nextCursorToken"
    },
    "previous": {
      "href": "/balanceAccounts/balanceAccount1/recurringTopUps?limit=10&cursor=previousCursorToken"
    }
  }
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "errorCode": "00_401",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Authentication failed",
  "requestId": "req123456789"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "status": 403,
  "requestId": "req123456789"
}
```

> 404 Response

```json
{
  "type": "https://docs.adyen.com/errors/not-found",
  "errorCode": "30_013",
  "title": "Balance account not found",
  "status": 404,
  "detail": "Could not find balance account with id SampleUSD.",
  "requestId": "req123456789"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/internal-server-error",
  "errorCode": "00_500",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred while processing the request.",
  "requestId": "req123456789"
}
```

<h3 id="get-recurring-top-ups-for-a-specific-balanceaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RecurringTopUpsResult](#schemarecurringtopupsresult)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the recurring top up was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Create recurring top up

<a id="opIdpost-balanceAccounts-balanceAccountId-recurringTopUps"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/recurringTopUps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "counterparty": {
      "transferInstrumentId": "SE000000000000000000000001"
    },
    "description": "My description",
    "topUpAmount": {
      "fixed": {
        "value": 1000,
        "currency": "EUR"
      }
    },
    "trigger": {
      "schedule": {
        "type": "weekdays"
      },
      "threshold": {
        "value": 100,
        "currency": "EUR"
      }
    }
  }'
```

`POST /balanceAccounts/{balanceAccountId}/recurringTopUps`

Create a recurring top up configuration.

For more information, refer to [Create recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/create-recurring-top-ups).


> Body parameter

```json
{
  "counterparty": {
    "transferInstrumentId": "SE000000000000000000000001"
  },
  "description": "My description",
  "topUpAmount": {
    "fixed": {
      "value": 1000,
      "currency": "EUR"
    }
  },
  "trigger": {
    "schedule": {
      "type": "weekdays"
    },
    "threshold": {
      "value": 100,
      "currency": "EUR"
    }
  }
}
```

<h3 id="create-recurring-top-up-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|body|body|[CreateRecurringTopUp](#schemacreaterecurringtopup)|true|none|
|» counterparty|body|[TopUpCounterparty](#schematopupcounterparty)|true|The details about the counterparty that is funding the top-up. |
|» description|body|string|true|Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.|
|» referenceForBeneficiary|body|string|false| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.|
|» status|body|string|false|The status of the recurring top-up. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the top up is enabled and funds will be pulled in.<br><br> * **inactive**: the top up is disabled and cannot be triggered. <br><br>|
|» topUpAmount|body|[TopUpAmount](#schematopupamount)|true|The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.|
|» trigger|body|[Trigger](#schematrigger)|true|The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "id": "TUPC0000000000000000000001",
  "counterparty": {
    "transferInstrumentId": "SE000000000000000000000001"
  },
  "description": "My description",
  "topUpAmount": {
    "fixed": {
      "value": 1000,
      "currency": "EUR"
    }
  },
  "trigger": {
    "schedule": {
      "type": "weekdays"
    },
    "threshold": {
      "value": 100,
      "currency": "EUR"
    }
  },
  "status": "active"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/bad-request",
  "errorCode": "00_400",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request could not be processed due to malformed syntax.",
  "requestId": "req123456789"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "errorCode": "00_401",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Authentication failed",
  "requestId": "req123456789"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "status": 403,
  "requestId": "req123456789"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/validation",
  "errorCode": "29_001",
  "title": "The request is missing required fields or contains invalid data.",
  "status": 422,
  "detail": "Account top up currency mismatch",
  "requestId": "req123456789"
}
```

<h3 id="create-recurring-top-up-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RecurringTopUp](#schemarecurringtopup)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a recurring top up

<a id="opIddelete-balanceAccounts-balanceAccountId-recurringTopUps-topUpId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/recurringTopUps/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}`

Delete a recurring top up configuration by `topUpId`.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).


<h3 id="delete-a-recurring-top-up-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|topUpId|path|string|true|The unique identifier of the recurring top-up you want to delete.|

> Example responses

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/bad-request",
  "errorCode": "00_400",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request could not be processed due to malformed syntax.",
  "requestId": "req123456789"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "errorCode": "00_401",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Authentication failed",
  "requestId": "req123456789"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "status": 403,
  "requestId": "req123456789"
}
```

> 404 Response

```json
{
  "type": "https://docs.adyen.com/errors/not-found",
  "errorCode": "30_013",
  "title": "Balance account not found",
  "status": 404,
  "detail": "Could not find balance account with id SampleUSD.",
  "requestId": "req123456789"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/validation",
  "errorCode": "29_001",
  "title": "The request is missing required fields or contains invalid data.",
  "status": 422,
  "detail": "No routes could be found using the provided sweep.",
  "requestId": "req123456789"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/internal-server-error",
  "errorCode": "00_500",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred while processing the request.",
  "requestId": "req123456789"
}
```

<h3 id="delete-a-recurring-top-up-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - the request has been successfully processed, but there is no additional content.|None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - the recurring top up was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a RecurringTopUp

<a id="opIdpatch-balanceAccounts-balanceAccountId-recurringTopUps-topUpId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/recurringTopUps/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "new description"
  }'
```

`PATCH /balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}`

Update the configuration of an existing recurring top up.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).

> Body parameter

```json
{
  "description": "new description"
}
```

<h3 id="update-a-recurringtopup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|path|string|true|The unique identifier of the balance account.|
|topUpId|path|string|true|The unique identifier of the recurring top-up you want to update.|
|body|body|[RecurringTopUpUpdate](#schemarecurringtopupupdate)|true|none|
|» description|body|string|false|Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.|
|» referenceForBeneficiary|body|string \| null|false| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.|
|» status|body|string \| null|false|The status of the recurring top-up. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the top up is enabled and funds will be pulled in.<br><br> * **inactive**: the top up is disabled and cannot be triggered. <br><br>|
|» topUpAmount|body|[TopUpAmountUpdate](#schematopupamountupdate)|false|The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.|
|» trigger|body|[TriggerUpdate](#schematriggerupdate)|false|The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "id": "TUPC0000000000000000000001",
  "counterparty": {
    "transferInstrumentId": "SE000000000000000000000001"
  },
  "description": "new description",
  "topUpAmount": {
    "fixed": {
      "value": 1000,
      "currency": "EUR"
    }
  },
  "trigger": {
    "schedule": {
      "type": "weekdays"
    },
    "threshold": {
      "value": 100,
      "currency": "EUR"
    }
  },
  "status": "inactive"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/bad-request",
  "errorCode": "00_400",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request could not be processed due to malformed syntax.",
  "requestId": "req123456789"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "errorCode": "00_401",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Authentication failed",
  "requestId": "req123456789"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "status": 403,
  "requestId": "req123456789"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/validation",
  "errorCode": "29_001",
  "title": "The request is missing required fields or contains invalid data.",
  "status": 422,
  "detail": "Account top up currency mismatch",
  "requestId": "req123456789"
}
```

<h3 id="update-a-recurringtopup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RecurringTopUp](#schemarecurringtopup)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-payment-instruments">Payment instruments</h1>

## Create a payment instrument

<a id="opIdpost-paymentInstruments"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "type": "bankAccount",
    "description": "YOUR_DESCRIPTION",
    "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
    "issuingCountryCode": "NL"
  }'
```

`POST /paymentInstruments`

Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.

 For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/platforms/business-accounts).

> Body parameter

```json
{
  "type": "bankAccount",
  "description": "YOUR_DESCRIPTION",
  "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
  "issuingCountryCode": "NL"
}
```

<h3 id="create-a-payment-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentInstrumentInfo](#schemapaymentinstrumentinfo)|false|none|
|» balanceAccountId|body|string|true|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.|
|» bankAccount|body|[BankAccountModel](#schemabankaccountmodel)|false|Contains the business account details.|
|» card|body|[CardInfo](#schemacardinfo)|false|Contains information about the card. Required when you create a payment instrument of `type` **card**.|
|» description|body|string|false|Your description for the payment instrument, maximum 300 characters.|
|» issuingCountryCode|body|string|true|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.|
|» paymentInstrumentGroupId|body|string|false|The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.|
|» reference|body|string|false|Your reference for the payment instrument, maximum 150 characters.|
|» status|body|string|false|The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values: <br><br> * **active**:  The payment instrument is active and can be used to make payments. <br><br> * **inactive**: The payment instrument is inactive and cannot be used to make payments. <br><br> * **suspended**: The payment instrument is suspended, either because it was stolen or lost. <br><br> * **closed**: The payment instrument is permanently closed. This action cannot be undone. <br><br>|
|» statusComment|body|string|false|The status comment provides additional information for the statusReason of the payment instrument.|
|» statusReason|body|string|false|The reason for the status of the payment instrument.<br><br>Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change.|
|» type|body|string|true|The type of payment instrument.<br><br>Possible values: **card**, **bankAccount**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|closed|
|» status|inactive|
|» status|suspended|
|» statusReason|accountClosure|
|» statusReason|damaged|
|» statusReason|endOfLife|
|» statusReason|expired|
|» statusReason|lost|
|» statusReason|other|
|» statusReason|stolen|
|» statusReason|suspectedFraud|
|» statusReason|transactionRule|
|» type|bankAccount|
|» type|card|

> Example responses

> 200 Response

```json
{
  "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
  "issuingCountryCode": "NL",
  "status": "active",
  "type": "bankAccount",
  "description": "YOUR_DESCRIPTION",
  "bankAccount": {
    "formFactor": "physical",
    "type": "iban",
    "iban": "NL20ADYB2017000035"
  },
  "id": "PI322LJ223222B5DJS7CD9LWL"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="create-a-payment-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentInstrument](#schemapaymentinstrument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Reveal the data of a payment instrument

<a id="opIdpost-paymentInstruments-reveal"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/reveal?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encryptedKey": "string",
    "paymentInstrumentId": "string"
  }'
```

`POST /paymentInstruments/reveal`

Returns the encrypted data of a specified payment instrument. These data include:

- The primary account number (PAN)
- The card verification code (CVC)
- The expiry date

You can decrypt the data to reveal it in your user interface.

To make this request, your API credential must have the following role:
* Bank Issuing PAN Reveal Webservice role

> Body parameter

```json
{
  "encryptedKey": "string",
  "paymentInstrumentId": "string"
}
```

<h3 id="reveal-the-data-of-a-payment-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentInstrumentRevealRequest](#schemapaymentinstrumentrevealrequest)|false|none|
|» encryptedKey|body|string|true|The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.|
|» paymentInstrumentId|body|string|true|The unique identifier of the payment instrument, which is the card for which you are managing the PIN.|

> Example responses

> 200 Response

```json
{
  "encryptedData": "string"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="reveal-the-data-of-a-payment-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentInstrumentRevealResponse](#schemapaymentinstrumentrevealresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a payment instrument

<a id="opIdget-paymentInstruments-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /paymentInstruments/{id}`

Returns the details of a payment instrument.

<h3 id="get-a-payment-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument.|

> Example responses

> 200 Response

```json
{
  "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
  "description": "S. Hopper - Main card",
  "issuingCountryCode": "GB",
  "status": "active",
  "type": "card",
  "card": {
    "brand": "mc",
    "brandVariant": "mcdebit",
    "cardholderName": "Simon Hopper",
    "formFactor": "virtual",
    "bin": "555544",
    "expiration": {
      "month": "01",
      "year": "2024"
    },
    "lastFour": "3548",
    "number": "************3548"
  },
  "id": "PI32272223222B5CMD3MQ3HXX"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-payment-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentInstrument](#schemapaymentinstrument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Update a payment instrument

<a id="opIdpatch-paymentInstruments-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string?clientKey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "balanceAccountId": "BA32272223222B5CM82WL892M"
  }'
```

`PATCH /paymentInstruments/{id}`

Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.

> Body parameter

```json
{
  "balanceAccountId": "BA32272223222B5CM82WL892M"
}
```

<h3 id="update-a-payment-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument.|
|body|body|[PaymentInstrumentUpdateRequest](#schemapaymentinstrumentupdaterequest)|false|none|
|» balanceAccountId|body|string|false|The unique identifier of the balance account associated with this payment instrument.<br>>You can only change the balance account ID if the payment instrument has **inactive** status.|
|» card|body|[CardInfo](#schemacardinfo)|false|Object that contains information about the card payment instrument.|
|» status|body|string|false|The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values: <br><br> * **active**:  The payment instrument is active and can be used to make payments. <br><br> * **inactive**: The payment instrument is inactive and cannot be used to make payments. <br><br> * **suspended**: The payment instrument is suspended, either because it was stolen or lost. <br><br> * **closed**: The payment instrument is permanently closed. This action cannot be undone. <br><br>|
|» statusComment|body|string|false|Comment for the status of the payment instrument.<br><br>Required if `statusReason` is **other**.|
|» statusReason|body|string|false|The reason for updating the status of the payment instrument.<br><br>Possible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|closed|
|» status|inactive|
|» status|suspended|
|» statusReason|accountClosure|
|» statusReason|damaged|
|» statusReason|endOfLife|
|» statusReason|expired|
|» statusReason|lost|
|» statusReason|other|
|» statusReason|stolen|
|» statusReason|suspectedFraud|
|» statusReason|transactionRule|

> Example responses

> 200 Response

```json
{
  "balanceAccountId": "BA32272223222B5CM82WL892M",
  "description": "S. Hopper - Main card",
  "issuingCountryCode": "GB",
  "status": "inactive",
  "type": "card",
  "card": {
    "brand": "mc",
    "brandVariant": "mcdebit",
    "cardholderName": "Simon Hopper",
    "formFactor": "virtual",
    "bin": "555544",
    "expiration": {
      "month": "01",
      "year": "2024"
    },
    "lastFour": "5785",
    "number": "************5785"
  },
  "id": "PI3227C223222B5CMD278FKGS"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="update-a-payment-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[UpdatePaymentInstrument](#schemaupdatepaymentinstrument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get network token activation data

<a id="opIdget-paymentInstruments-id-networkTokenActivationData"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/networkTokenActivationData?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /paymentInstruments/{id}/networkTokenActivationData`

Get the network token activation data for a payment instrument.

<h3 id="get-network-token-activation-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument.|

> Example responses

> 200 Response

```json
{
  "sdkInput": "string"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-network-token-activation-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NetworkTokenActivationDataResponse](#schemanetworktokenactivationdataresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Create network token provisioning data

<a id="opIdpost-paymentInstruments-id-networkTokenActivationData"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/networkTokenActivationData?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sdkOutput": "string"
  }'
```

`POST /paymentInstruments/{id}/networkTokenActivationData`

Create provisioning data for a network token. Use the provisioning data to add a user's payment instrument to their digital wallet.

> Body parameter

```json
{
  "sdkOutput": "string"
}
```

<h3 id="create-network-token-provisioning-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument.|
|body|body|[NetworkTokenActivationDataRequest](#schemanetworktokenactivationdatarequest)|false|none|
|» sdkOutput|body|string|false|A block of data automatically generated by Adyen's SDK for network token provisioning. This `sdkOutput` is required to create provisioning data for the network token.<br><br>For more information, see the repositories for Adyen's SDKs for network token provisioning:<br>* [Adyen Apple Pay Provisioning SDK](https://github.com/Adyen/adyen-apple-pay-provisioning-ios).<br>* [Adyen Google Wallet Provisioning SDK](https://github.com/Adyen/adyen-issuing-android)|

> Example responses

> 200 Response

```json
{
  "sdkInput": "string"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="create-network-token-provisioning-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NetworkTokenActivationDataResponse](#schemanetworktokenactivationdataresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## List network tokens

<a id="opIdget-paymentInstruments-id-networkTokens"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/networkTokens?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /paymentInstruments/{id}/networkTokens`

List the network tokens connected to a payment instrument.

<h3 id="list-network-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument.|

> Example responses

> 200 Response

```json
{
  "networkTokens": [
    {
      "brandVariant": "string",
      "creationDate": "1970-01-01T00:00:00Z",
      "device": {
        "formFactor": "string",
        "osName": "string",
        "phone": {
          "hashedNumber": "string",
          "lastFourDigits": "string",
          "number": "string"
        }
      },
      "id": "string",
      "paymentInstrumentId": "string",
      "status": "active",
      "tokenLastFour": "string",
      "tokenRequestor": {
        "id": "string",
        "name": "string"
      },
      "type": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="list-network-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ListNetworkTokensResponse](#schemalistnetworktokensresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get the PAN of a payment instrument

<a id="opIdget-paymentInstruments-id-reveal"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/reveal?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /paymentInstruments/{id}/reveal`

Returns the primary account number (PAN) of a payment instrument.

To make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):

* Balance Platform BCL PCI role

<h3 id="get-the-pan-of-a-payment-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument.|

> Example responses

> 200 Response

```json
{
  "cvc": "123",
  "expiration": {
    "month": "02",
    "year": "2026"
  },
  "pan": "5555444411209883"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-the-pan-of-a-payment-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentInstrumentRevealInfo](#schemapaymentinstrumentrevealinfo)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get all transaction rules for a payment instrument

<a id="opIdget-paymentInstruments-id-transactionRules"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstruments/string/transactionRules?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /paymentInstruments/{id}/transactionRules`

Returns a list of transaction rules associated with a payment instrument.

<h3 id="get-all-transaction-rules-for-a-payment-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument.|

> Example responses

> 200 Response

```json
{
  "transactionRules": [
    {
      "description": "Only allow point-of-sale transactions",
      "entityKey": {
        "entityReference": "PI3227C223222B5FN65FN5NS9",
        "entityType": "paymentInstrument"
      },
      "interval": {
        "timeZone": "UTC",
        "type": "perTransaction"
      },
      "outcomeType": "hardBlock",
      "reference": "YOUR_REFERENCE_4F7346",
      "requestType": "authorization",
      "ruleRestrictions": {
        "processingTypes": {
          "operation": "noneMatch",
          "value": [
            "pos"
          ]
        }
      },
      "startDate": "2022-08-02T16:07:00.851374+02:00",
      "status": "active",
      "type": "blockList",
      "id": "TR32272223222B5GFSGFLFCHM"
    },
    {
      "description": "Set the maximum number of active network tokens to one for this card",
      "entityKey": {
        "entityReference": "PI3227C223222B5FN65FN5NS9",
        "entityType": "paymentInstrument"
      },
      "interval": {
        "timeZone": "UTC",
        "type": "perTransaction"
      },
      "outcomeType": "hardBlock",
      "reference": "myRule123",
      "requestType": "authorization",
      "ruleRestrictions": {
        "activeNetworkTokens": {
          "operation": "greaterThanOrEqualTo",
          "value": 1
        }
      },
      "startDate": "2022-10-03T14:48:28.999314+02:00",
      "status": "active",
      "type": "blockList",
      "id": "TR32272223222C5GQJ93L7J8Z"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-transaction-rules-for-a-payment-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRulesResponse](#schematransactionrulesresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-payment-instrument-groups">Payment instrument groups</h1>

## Create a payment instrument group

<a id="opIdpost-paymentInstrumentGroups"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstrumentGroups?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "txVariant": "mc"
  }'
```

`POST /paymentInstrumentGroups`

Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.

> Body parameter

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "txVariant": "mc"
}
```

<h3 id="create-a-payment-instrument-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentInstrumentGroupInfo](#schemapaymentinstrumentgroupinfo)|false|none|
|» balancePlatform|body|string|true|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.|
|» description|body|string|false|Your description for the payment instrument group.|
|» properties|body|object|false|Properties of the payment instrument group.|
|» » **additionalProperties**|body|string|false|none|
|» reference|body|string|false|Your reference for the payment instrument group.|
|» txVariant|body|string|true|The tx variant of the payment instrument group.|

> Example responses

> 200 Response

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "txVariant": "mc",
  "id": "PG32272223222H5J4DCRVC9DH"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="create-a-payment-instrument-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentInstrumentGroup](#schemapaymentinstrumentgroup)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a payment instrument group

<a id="opIdget-paymentInstrumentGroups-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstrumentGroups/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /paymentInstrumentGroups/{id}`

Returns the details of a payment instrument group.

<h3 id="get-a-payment-instrument-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument group.|

> Example responses

> 200 Response

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "txVariant": "mc",
  "id": "PG3227C223222B5CMD3FJFKGZ"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-payment-instrument-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentInstrumentGroup](#schemapaymentinstrumentgroup)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get all transaction rules for a payment instrument group

<a id="opIdget-paymentInstrumentGroups-id-transactionRules"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/paymentInstrumentGroups/string/transactionRules?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /paymentInstrumentGroups/{id}/transactionRules`

Returns a list of all the transaction rules associated with a payment instrument group.

<h3 id="get-all-transaction-rules-for-a-payment-instrument-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the payment instrument group.|

> Example responses

> 200 Response

```json
{
  "transactionRules": [
    {
      "aggregationLevel": "paymentInstrument",
      "description": "Up to 1000 EUR per card for the last 12 hours",
      "entityKey": {
        "entityReference": "PG3227C223222C5GXR3M5592Q",
        "entityType": "paymentInstrumentGroup"
      },
      "interval": {
        "duration": {
          "unit": "hours",
          "value": 12
        },
        "timeZone": "UTC",
        "type": "sliding"
      },
      "outcomeType": "hardBlock",
      "reference": "YOUR_REFERENCE_2918A",
      "requestType": "authorization",
      "ruleRestrictions": {
        "totalAmount": {
          "operation": "greaterThan",
          "value": {
            "currency": "EUR",
            "value": 100000
          }
        }
      },
      "status": "inactive",
      "type": "velocity",
      "id": "TR3227C223222C5GXR3XP596N"
    },
    {
      "aggregationLevel": "paymentInstrument",
      "description": "NL only",
      "entityKey": {
        "entityReference": "PG3227C223222C5GXR3M5592Q",
        "entityType": "paymentInstrumentGroup"
      },
      "interval": {
        "duration": {
          "unit": "hours",
          "value": 12
        },
        "timeZone": "UTC",
        "type": "sliding"
      },
      "outcomeType": "hardBlock",
      "reference": "myRule12345",
      "requestType": "authorization",
      "ruleRestrictions": {
        "totalAmount": {
          "operation": "greaterThan",
          "value": {
            "currency": "EUR",
            "value": 100000
          }
        }
      },
      "status": "inactive",
      "type": "velocity",
      "id": "TR3227C223222C5GXR3WC595H"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-transaction-rules-for-a-payment-instrument-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRulesResponse](#schematransactionrulesresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-transaction-rules">Transaction rules</h1>

## Create a transaction rule

<a id="opIdpost-transactionRules"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/transactionRules?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "Allow only point-of-sale transactions",
    "reference": "YOUR_REFERENCE_4F7346",
    "entityKey": {
      "entityType": "paymentInstrument",
      "entityReference": "PI3227C223222B5FG88SB8BHR"
    },
    "status": "active",
    "interval": {
      "type": "perTransaction"
    },
    "ruleRestrictions": {
      "processingTypes": {
        "operation": "noneMatch",
        "value": [
          "pos"
        ]
      }
    },
    "type": "blockList"
  }'
```

`POST /transactionRules`

Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).

> Body parameter

```json
{
  "description": "Allow only point-of-sale transactions",
  "reference": "YOUR_REFERENCE_4F7346",
  "entityKey": {
    "entityType": "paymentInstrument",
    "entityReference": "PI3227C223222B5FG88SB8BHR"
  },
  "status": "active",
  "interval": {
    "type": "perTransaction"
  },
  "ruleRestrictions": {
    "processingTypes": {
      "operation": "noneMatch",
      "value": [
        "pos"
      ]
    }
  },
  "type": "blockList"
}
```

<h3 id="create-a-transaction-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransactionRuleInfo](#schematransactionruleinfo)|false|none|
|» aggregationLevel|body|string|false|The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.<br><br>If not provided, by default, the rule will accumulate data at the **paymentInstrument** level.<br><br>Possible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.|
|» description|body|string|true|Your description for the transaction rule.|
|» endDate|body|string|false|The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided, the rule will be evaluated until the rule status is set to **inactive**.|
|» entityKey|body|[TransactionRuleEntityKey](#schematransactionruleentitykey)|true|The type and unique identifier of the resource to which the rule applies.|
|» interval|body|[TransactionRuleInterval](#schematransactionruleinterval)|true|The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.|
|» outcomeType|body|string|false|The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule.<br><br>Possible values:<br>* **hardBlock** (default): the transaction is declined.<br>* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined. This value is not allowed when `requestType` is **bankTransfer**.<br><br>* **enforceSCA**: your user is prompted to verify their identity using [3D Secure authentication](https://docs.adyen.com/issuing/3d-secure/). If the authentication fails or times out, the transaction is declined. This value is only allowed when `requestType` is **authentication**.|
|» overridesRule|body|string|false|The `id` of the transaction rule you want to override or skip for the specified `entityKey`.|
|» purpose|body|string|false|Specifies the reason for creating the rule.<br><br>Possible values:<br>* **fraud**: the rule is created to regulate fraudulent activity.<br>* **policy**: the rule is created to ensure that the transaction adheres to your business' policies. For example, if your business has policies about the Merchant Category Codes (MCCs) allowed on a transaction, you can create a rule to block transactions that have specific MCCs.|
|» reference|body|string|true|Your reference for the transaction rule.|
|» requestType|body|string|false|Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.<br><br>Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.|
|» ruleRestrictions|body|[TransactionRuleRestrictions](#schematransactionrulerestrictions)|true|Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.<br><br>For example, a `countries` object can have a list of country codes **["US", "CA"]** in the `value` field and **anyMatch** in the `operation` field.|
|» score|body|integer(int32)|false|A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.|
|» startDate|body|string|false|The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. <br><br>|
|» status|body|string|false|The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created <br>with an **active** status. <br><br>Possible values: **active**, **inactive**.|
|» type|body|string|true|The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.<br><br>Possible values:<br> * **blockList**: decline a transaction when the conditions are met.<br> * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.<br> * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.<br> * **bypass**: bypass or skip a rule for the specified `entityKey`. Transactions processed to that entity are no longer evaluated by the bypassed rule.  You must provide the `id` of the rule to bypass in `overridesRule` and leave the `ruleRestrictions` object empty.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» outcomeType|enforceSCA|
|» outcomeType|hardBlock|
|» outcomeType|scoreBased|
|» outcomeType|timedBlock|
|» purpose|compliance|
|» purpose|fraud|
|» purpose|internalPolicy|
|» purpose|policy|
|» purpose|system|
|» requestType|authentication|
|» requestType|authorization|
|» requestType|bankTransfer|
|» requestType|tokenization|
|» status|active|
|» status|inactive|
|» type|allowList|
|» type|blockList|
|» type|bypass|
|» type|maxUsage|
|» type|velocity|

> Example responses

> 200 Response

```json
{
  "description": "Allow only point-of-sale transactions",
  "entityKey": {
    "entityReference": "PI3227C223222B5FG88SB8BHR",
    "entityType": "paymentInstrument"
  },
  "interval": {
    "timeZone": "UTC",
    "type": "perTransaction"
  },
  "outcomeType": "hardBlock",
  "reference": "YOUR_REFERENCE_4F7346",
  "requestType": "authorization",
  "ruleRestrictions": {
    "processingTypes": {
      "operation": "noneMatch",
      "value": [
        "pos"
      ]
    }
  },
  "startDate": "2023-06-29T22:34:36.173226192+02:00",
  "status": "active",
  "type": "blockList",
  "id": "TR3227C223222H5J4D9ML9V4D"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="create-a-transaction-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRule](#schematransactionrule)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a transaction rule

<a id="opIdget-transactionRules-transactionRuleId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/transactionRules/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /transactionRules/{transactionRuleId}`

Returns the details of a transaction rule.

<h3 id="get-a-transaction-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionRuleId|path|string|true|The unique identifier of the transaction rule.|

> Example responses

> 200 Response

```json
{
  "transactionRule": {
    "description": "Only allow point-of-sale transactions",
    "entityKey": {
      "entityReference": "PI3227C223222B5FN65FN5NS9",
      "entityType": "paymentInstrument"
    },
    "interval": {
      "timeZone": "UTC",
      "type": "perTransaction"
    },
    "outcomeType": "hardBlock",
    "reference": "YOUR_REFERENCE_4F7346",
    "requestType": "authorization",
    "ruleRestrictions": {
      "processingTypes": {
        "operation": "noneMatch",
        "value": [
          "pos"
        ]
      }
    },
    "startDate": "2022-08-02T16:07:00.851374+02:00",
    "status": "active",
    "type": "blockList",
    "id": "TR32272223222B5GFSGFLFCHM"
  }
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-transaction-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRuleResponse](#schematransactionruleresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Delete a transaction rule

<a id="opIddelete-transactionRules-transactionRuleId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/transactionRules/string?clientKey=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /transactionRules/{transactionRuleId}`

Deletes a transaction rule.

<h3 id="delete-a-transaction-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionRuleId|path|string|true|The unique identifier of the transaction rule.|

> Example responses

> 200 Response

```json
{
  "aggregationLevel": "paymentInstrument",
  "description": "Up to 1000 EUR per card for the last 12 hours",
  "entityKey": {
    "entityReference": "PG3227C223222C5GXR3M5592Q",
    "entityType": "paymentInstrumentGroup"
  },
  "interval": {
    "duration": {
      "unit": "hours",
      "value": 12
    },
    "timeZone": "UTC",
    "type": "sliding"
  },
  "outcomeType": "hardBlock",
  "reference": "myRule12345",
  "requestType": "authorization",
  "ruleRestrictions": {
    "totalAmount": {
      "operation": "greaterThan",
      "value": {
        "currency": "EUR",
        "value": 100000
      }
    }
  },
  "type": "velocity",
  "id": "TR3227C223222C5GXT3DD5VCF"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="delete-a-transaction-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRule](#schematransactionrule)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Update a transaction rule

<a id="opIdpatch-transactionRules-transactionRuleId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/transactionRules/string?clientKey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "Allow only point-of-sale transactions",
    "reference": "YOUR_REFERENCE_4F7346",
    "entityKey": {
      "entityType": "paymentInstrument",
      "entityReference": "PI3227C223222B5FG88SB8BHR"
    },
    "status": "inactive",
    "interval": {
      "type": "weekly"
    },
    "ruleRestrictions": {
      "processingTypes": {
        "operation": "noneMatch",
        "value": [
          "pos"
        ]
      }
    },
    "type": "blockList"
  }'
```

`PATCH /transactionRules/{transactionRuleId}`

Updates a transaction rule. 

* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.

* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.

> Body parameter

```json
{
  "description": "Allow only point-of-sale transactions",
  "reference": "YOUR_REFERENCE_4F7346",
  "entityKey": {
    "entityType": "paymentInstrument",
    "entityReference": "PI3227C223222B5FG88SB8BHR"
  },
  "status": "inactive",
  "interval": {
    "type": "weekly"
  },
  "ruleRestrictions": {
    "processingTypes": {
      "operation": "noneMatch",
      "value": [
        "pos"
      ]
    }
  },
  "type": "blockList"
}
```

<h3 id="update-a-transaction-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionRuleId|path|string|true|The unique identifier of the transaction rule.|
|body|body|[TransactionRuleInfo](#schematransactionruleinfo)|false|none|
|» aggregationLevel|body|string|false|The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.<br><br>If not provided, by default, the rule will accumulate data at the **paymentInstrument** level.<br><br>Possible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.|
|» description|body|string|true|Your description for the transaction rule.|
|» endDate|body|string|false|The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided, the rule will be evaluated until the rule status is set to **inactive**.|
|» entityKey|body|[TransactionRuleEntityKey](#schematransactionruleentitykey)|true|The type and unique identifier of the resource to which the rule applies.|
|» interval|body|[TransactionRuleInterval](#schematransactionruleinterval)|true|The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.|
|» outcomeType|body|string|false|The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule.<br><br>Possible values:<br>* **hardBlock** (default): the transaction is declined.<br>* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined. This value is not allowed when `requestType` is **bankTransfer**.<br><br>* **enforceSCA**: your user is prompted to verify their identity using [3D Secure authentication](https://docs.adyen.com/issuing/3d-secure/). If the authentication fails or times out, the transaction is declined. This value is only allowed when `requestType` is **authentication**.|
|» overridesRule|body|string|false|The `id` of the transaction rule you want to override or skip for the specified `entityKey`.|
|» purpose|body|string|false|Specifies the reason for creating the rule.<br><br>Possible values:<br>* **fraud**: the rule is created to regulate fraudulent activity.<br>* **policy**: the rule is created to ensure that the transaction adheres to your business' policies. For example, if your business has policies about the Merchant Category Codes (MCCs) allowed on a transaction, you can create a rule to block transactions that have specific MCCs.|
|» reference|body|string|true|Your reference for the transaction rule.|
|» requestType|body|string|false|Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.<br><br>Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.|
|» ruleRestrictions|body|[TransactionRuleRestrictions](#schematransactionrulerestrictions)|true|Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.<br><br>For example, a `countries` object can have a list of country codes **["US", "CA"]** in the `value` field and **anyMatch** in the `operation` field.|
|» score|body|integer(int32)|false|A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.|
|» startDate|body|string|false|The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. <br><br>|
|» status|body|string|false|The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created <br>with an **active** status. <br><br>Possible values: **active**, **inactive**.|
|» type|body|string|true|The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.<br><br>Possible values:<br> * **blockList**: decline a transaction when the conditions are met.<br> * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.<br> * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.<br> * **bypass**: bypass or skip a rule for the specified `entityKey`. Transactions processed to that entity are no longer evaluated by the bypassed rule.  You must provide the `id` of the rule to bypass in `overridesRule` and leave the `ruleRestrictions` object empty.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» outcomeType|enforceSCA|
|» outcomeType|hardBlock|
|» outcomeType|scoreBased|
|» outcomeType|timedBlock|
|» purpose|compliance|
|» purpose|fraud|
|» purpose|internalPolicy|
|» purpose|policy|
|» purpose|system|
|» requestType|authentication|
|» requestType|authorization|
|» requestType|bankTransfer|
|» requestType|tokenization|
|» status|active|
|» status|inactive|
|» type|allowList|
|» type|blockList|
|» type|bypass|
|» type|maxUsage|
|» type|velocity|

> Example responses

> 200 Response

```json
{
  "aggregationLevel": "paymentInstrument",
  "description": "Up to 1000 EUR per card for the last 12 hours",
  "entityKey": {
    "entityReference": "PG3227C223222C5GXR3M5592Q",
    "entityType": "paymentInstrumentGroup"
  },
  "interval": {
    "duration": {
      "unit": "hours",
      "value": 12
    },
    "timeZone": "UTC",
    "type": "sliding"
  },
  "outcomeType": "hardBlock",
  "reference": "YOUR_REFERENCE_2918A",
  "requestType": "authorization",
  "ruleRestrictions": {
    "totalAmount": {
      "operation": "greaterThan",
      "value": {
        "currency": "EUR",
        "value": 100000
      }
    }
  },
  "startDate": "2022-11-17T00:07:09.10057663+01:00",
  "status": "inactive",
  "type": "velocity",
  "id": "TR3227C223222C5GXR3XP596N"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="update-a-transaction-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionRule](#schematransactionrule)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-bank-account-validation">Bank account validation</h1>

## Validate a bank account

<a id="opIdpost-validateBankAccountIdentification"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/validateBankAccountIdentification?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountIdentification": {
      "type": "iban",
      "iban": "1001001234"
    }
  }'
```

`POST /validateBankAccountIdentification`

Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).

> Body parameter

```json
{
  "accountIdentification": {
    "type": "iban",
    "iban": "1001001234"
  }
}
```

<h3 id="validate-a-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BankAccountIdentificationValidationRequest](#schemabankaccountidentificationvalidationrequest)|false|none|
|» accountIdentification|body|[AULocalAccountIdentification](#schemaaulocalaccountidentification) \| [BRLocalAccountIdentification](#schemabrlocalaccountidentification) \| [CALocalAccountIdentification](#schemacalocalaccountidentification) \| [CZLocalAccountIdentification](#schemaczlocalaccountidentification) \| [DKLocalAccountIdentification](#schemadklocalaccountidentification) \| [HKLocalAccountIdentification](#schemahklocalaccountidentification) \| [HULocalAccountIdentification](#schemahulocalaccountidentification) \| [IbanAccountIdentification](#schemaibanaccountidentification) \| [NOLocalAccountIdentification](#schemanolocalaccountidentification) \| [NZLocalAccountIdentification](#schemanzlocalaccountidentification) \| [NumberAndBicAccountIdentification](#schemanumberandbicaccountidentification) \| [PLLocalAccountIdentification](#schemapllocalaccountidentification) \| [SELocalAccountIdentification](#schemaselocalaccountidentification) \| [SGLocalAccountIdentification](#schemasglocalaccountidentification) \| [UKLocalAccountIdentification](#schemauklocalaccountidentification) \| [USLocalAccountIdentification](#schemauslocalaccountidentification)|true|Bank account identification.|
|» » *oneOf*|body|[AULocalAccountIdentification](#schemaaulocalaccountidentification)|false|none|
|» » *oneOf*|body|[BRLocalAccountIdentification](#schemabrlocalaccountidentification)|false|none|
|» » *oneOf*|body|[CALocalAccountIdentification](#schemacalocalaccountidentification)|false|none|
|» » *oneOf*|body|[CZLocalAccountIdentification](#schemaczlocalaccountidentification)|false|none|
|» » *oneOf*|body|[DKLocalAccountIdentification](#schemadklocalaccountidentification)|false|none|
|» » *oneOf*|body|[HKLocalAccountIdentification](#schemahklocalaccountidentification)|false|none|
|» » *oneOf*|body|[HULocalAccountIdentification](#schemahulocalaccountidentification)|false|none|
|» » *oneOf*|body|[IbanAccountIdentification](#schemaibanaccountidentification)|false|none|
|» » *oneOf*|body|[NOLocalAccountIdentification](#schemanolocalaccountidentification)|false|none|
|» » *oneOf*|body|[NZLocalAccountIdentification](#schemanzlocalaccountidentification)|false|none|
|» » *oneOf*|body|[NumberAndBicAccountIdentification](#schemanumberandbicaccountidentification)|false|none|
|» » *oneOf*|body|[PLLocalAccountIdentification](#schemapllocalaccountidentification)|false|none|
|» » *oneOf*|body|[SELocalAccountIdentification](#schemaselocalaccountidentification)|false|none|
|» » *oneOf*|body|[SGLocalAccountIdentification](#schemasglocalaccountidentification)|false|none|
|» » *oneOf*|body|[UKLocalAccountIdentification](#schemauklocalaccountidentification)|false|none|
|» » *oneOf*|body|[USLocalAccountIdentification](#schemauslocalaccountidentification)|false|none|

> Example responses

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="validate-a-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - look at the actual response code for the status of the request. |None|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-network-tokens">Network tokens</h1>

## Get a network token

<a id="opIdget-networkTokens-networkTokenId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/networkTokens/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /networkTokens/{networkTokenId}`

Returns the details of a network token.

<h3 id="get-a-network-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkTokenId|path|string|true|The unique identifier of the network token.|

> Example responses

> 200 Response

```json
{
  "token": {
    "brandVariant": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "device": {
      "formFactor": "string",
      "osName": "string",
      "phone": {
        "hashedNumber": "string",
        "lastFourDigits": "string",
        "number": "string"
      }
    },
    "id": "string",
    "paymentInstrumentId": "string",
    "status": "active",
    "tokenLastFour": "string",
    "tokenRequestor": {
      "id": "string",
      "name": "string"
    },
    "type": "string"
  }
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-network-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetNetworkTokenResponse](#schemagetnetworktokenresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Update a network token

<a id="opIdpatch-networkTokens-networkTokenId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/networkTokens/string?clientKey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "status": "active"
  }'
```

`PATCH /networkTokens/{networkTokenId}`

Updates the status of the network token.

> Body parameter

```json
{
  "status": "active"
}
```

<h3 id="update-a-network-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkTokenId|path|string|true|The unique identifier of the network token.|
|body|body|[UpdateNetworkTokenRequest](#schemaupdatenetworktokenrequest)|false|none|
|» status|body|string|false|The new status of the network token. Possible values: **active**, **suspended**, **closed**. The **closed** status is final and cannot be changed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|suspended|
|» status|closed|

> Example responses

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="update-a-network-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|No Content - look at the actual response code for the status of the request. |None|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-grant-accounts">Grant accounts</h1>

## Get a grant account

<a id="opIdget-grantAccounts-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/grantAccounts/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /grantAccounts/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Returns the details of the [grant account](https://docs.adyen.com/platforms/capital#grant-account).

<h3 id="get-a-grant-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the grant account.|

> Example responses

> 200 Response

```json
{
  "balances": [
    {
      "currency": "string",
      "fee": 0,
      "principal": 0,
      "total": 0
    }
  ],
  "fundingBalanceAccountId": "string",
  "id": "string",
  "limits": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-grant-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CapitalGrantAccount](#schemacapitalgrantaccount)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-grant-offers">Grant offers</h1>

## Get all available grant offers

<a id="opIdget-grantOffers"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/grantOffers?accountHolderId=string&clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /grantOffers`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of all [grant offers](https://docs.adyen.com/platforms/capital#grant-offers) available for `accountHolderId` specified as a query parameter.

<h3 id="get-all-available-grant-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountHolderId|query|string|true|The unique identifier of the grant account.|

> Example responses

> 200 Response

```json
{
  "grantOffers": [
    {
      "accountHolderId": "string",
      "amount": {
        "currency": "string",
        "value": 0
      },
      "contractType": "cashAdvance",
      "expiresAt": "1970-01-01T00:00:00Z",
      "fee": {
        "amount": {
          "currency": "string",
          "value": 0
        }
      },
      "id": "string",
      "repayment": {
        "basisPoints": 0,
        "term": {
          "estimatedDays": 0,
          "maximumDays": 0
        },
        "threshold": {
          "amount": {
            "currency": "string",
            "value": 0
          }
        }
      },
      "startsAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-all-available-grant-offers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GrantOffers](#schemagrantoffers)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a grant offer

<a id="opIdget-grantOffers-grantOfferId"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/grantOffers/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /grantOffers/{grantOfferId}`

<aside class="warning">
This operation is deprecated
</aside>

Returns the details of a single grant offer.

<h3 id="get-a-grant-offer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|grantOfferId|path|string|true|The unique identifier of the grant offer.|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-grant-offer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GrantOffer](#schemagrantoffer)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-card-orders">Card orders</h1>

## Get a list of card orders

<a id="opIdget-cardorders"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/cardorders?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /cardorders`

Returns a paginated list of card orders.

<h3 id="get-a-list-of-card-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The unique identifier of the card order. |
|cardManufacturingProfileId|query|string|false|The unique identifier of the card manufacturer profile.|
|status|query|string|false|The status of the card order.|
|txVariantCode|query|string|false|The unique code of the card manufacturer profile.<br><br>Possible values: **mcmaestro**, **mc**, **visa**, **mcdebit**. |
|createdSince|query|string(date-time)|false|Only include card orders that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.|
|createdUntil|query|string(date-time)|false|Only include card orders that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.|
|lockedSince|query|string(date-time)|false|Only include card orders that have been locked on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.|
|lockedUntil|query|string(date-time)|false|Only include card orders that have been locked on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.|
|serviceCenter|query|string|false|The service center at which the card is issued. The value is case-sensitive. |
|offset|query|integer(int32)|false|Specifies the position of an element in a list of card orders. The response includes a list of card orders that starts at the specified offset.<br><br>**Default:** 0, which means that the response contains all the elements in the list of card orders.|
|limit|query|integer(int32)|false|The number of card orders returned per page. **Default:** 10.|

> Example responses

> 200 Response

```json
{
  "cardOrders": [
    {
      "beginDate": "2022-12-05T00:00:00+01:00",
      "cardManufacturingProfileId": "UNIQUE_CARD_MANUFACTURER_PROFILE_ID",
      "endDate": "2022-12-06T00:00:00+01:00",
      "id": "UNIQUE_CARD_ORDER_ID",
      "lockDate": "2023-04-14T16:43:02+02:00",
      "serviceCenter": "IDEMIA Sittard",
      "status": "closed"
    }
  ],
  "hasNext": true,
  "hasPrevious": false
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-list-of-card-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaginatedGetCardOrderResponse](#schemapaginatedgetcardorderresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get card order items

<a id="opIdget-cardorders-id-items"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/cardorders/string/items?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /cardorders/{id}/items`

Returns the item list of a specific card order.

<h3 id="get-card-order-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the card order.|
|offset|query|integer(int32)|false|Specifies the position of an element in a list of card orders. The response includes a list of card order items that starts at the specified offset.<br><br>**Default:** 0, which means that the response contains all the elements in the list of card order items.|
|limit|query|integer(int32)|false|The number of card order items returned per page. **Default:** 10.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "card": {
        "status": "shipped"
      },
      "cardOrderItemId": "UNIQUE_CARD_ORDER_ITEM_ID",
      "paymentInstrumentId": "UNIQUE_PAYMENT_INSTRUMENT_ID",
      "pin": {
        "status": "produced"
      },
      "shippingMethod": "Cardholder Post Basic National"
    }
  ],
  "hasNext": false,
  "hasPrevious": false
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-card-order-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaginatedGetCardOrderItemResponse](#schemapaginatedgetcardorderitemresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-direct-debit-mandates">Direct debit mandates</h1>

## Get a list of mandates

<a id="opIdget-mandates"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/mandates \
  -H 'Accept: application/json'
```

`GET /mandates`

Returns a list of all [direct debit mandates](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) created for a business account.

<h3 id="get-a-list-of-mandates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceAccountId|query|string|false|The unique identifier of the balance account linked to the payment instrument.|
|paymentInstrumentId|query|string|false|The unique identifier of the payment instrument linked to the mandate.|
|cursor|query|string|false|The pagination cursor returned in a previous GET `/mandates` request.|

> Example responses

> 200 Response

```json
{
  "link": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "previous": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "mandates": [
    {
      "balanceAccountId": "string",
      "counterparty": {
        "accountHolder": {
          "fullName": "string"
        },
        "accountIdentification": {
          "type": "string"
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "paymentInstrumentId": "string",
      "status": "pending",
      "type": "bacs",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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

> 403 Response

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

<h3 id="get-a-list-of-mandates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded|[ListMandatesResponse](#schemalistmandatesresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific mandate

<a id="opIdget-mandates-mandateId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/mandates/string \
  -H 'Accept: application/json'
```

`GET /mandates/{mandateId}`

Returns the details of the specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

<h3 id="get-a-specific-mandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mandateId|path|string|true|The unique identifier of the mandate.|

> Example responses

> 200 Response

```json
{
  "balanceAccountId": "string",
  "counterparty": {
    "accountHolder": {
      "fullName": "string"
    },
    "accountIdentification": {
      "type": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "paymentInstrumentId": "string",
  "status": "pending",
  "type": "bacs",
  "updatedAt": "1970-01-01T00:00:00Z"
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

> 403 Response

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

<h3 id="get-a-specific-mandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded|[Mandate](#schemamandate)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|The mandate was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Amend a mandate

<a id="opIdpatch-mandates-mandateId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/mandates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "paymentInstrumentId": "string"
  }'
```

`PATCH /mandates/{mandateId}`

Amend the specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

> Body parameter

```json
{
  "paymentInstrumentId": "string"
}
```

<h3 id="amend-a-mandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mandateId|path|string|true|The unique identifier of the mandate.|
|body|body|[MandateUpdate](#schemamandateupdate)|true|none|
|» paymentInstrumentId|body|string \| null|false|The unique identifier of the payment instrument linked to the mandate.|

> Example responses

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

> 403 Response

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

<h3 id="amend-a-mandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted - The request has been accepted|None|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|The mandate was not found|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel a mandate

<a id="opIdpost-mandates-mandateId-cancel"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/mandates/string/cancel \
  -X POST \
  -H 'Accept: application/json'
```

`POST /mandates/{mandateId}/cancel`

Cancel a specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

<h3 id="cancel-a-mandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mandateId|path|string|true|The unique identifier of the mandate.|

> Example responses

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

> 403 Response

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

<h3 id="cancel-a-mandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted - The request has been accepted|None|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|The mandate was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-manage-card-pin">Manage card PIN</h1>

## Change a card PIN

<a id="opIdpost-pins-change"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/pins/change?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "paymentInstrumentId": "PI6789678967896789",
    "encryptedKey": "75989E8881284D10153ABACF022EEA09F5...",
    "encryptedPinBlock": "63E5060591EF65F48DD1D4FECD0FECD5",
    "token": "5555341244441115"
  }'
```

`POST /pins/change`

Changes the personal identification number (PIN) of a specified card.

To make this request, your API credential must have the following role:
* Bank Issuing PIN Change Webservice role

> Body parameter

```json
{
  "paymentInstrumentId": "PI6789678967896789",
  "encryptedKey": "75989E8881284D10153ABACF022EEA09F5...",
  "encryptedPinBlock": "63E5060591EF65F48DD1D4FECD0FECD5",
  "token": "5555341244441115"
}
```

<h3 id="change-a-card-pin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PinChangeRequest](#schemapinchangerequest)|false|none|
|» encryptedKey|body|string|true|The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.|
|» encryptedPinBlock|body|string|true|The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block).|
|» paymentInstrumentId|body|string|true|The unique identifier of the payment instrument, which is the card for which you are managing the PIN.|
|» token|body|string|true|The 16-digit token that you used to generate the `encryptedPinBlock`.|

> Example responses

> 200 Response

```json
{
  "status": "completed"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="change-a-card-pin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PinChangeResponse](#schemapinchangeresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Reveal a card PIN

<a id="opIdpost-pins-reveal"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/pins/reveal?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "paymentInstrumentId": "PI3227C223222B5BPCMFXD2XG",
    "encryptedKey": "75989E8881284D10153ABACF022EEA09F5..."
  }'
```

`POST /pins/reveal`

Returns an encrypted PIN block that contains the PIN of a specified card. You can use the decrypted data to reveal the PIN in your user interface.

To make this request, your API credential must have the following role:
* Bank Issuing PIN Reveal Webservice role

> Body parameter

```json
{
  "paymentInstrumentId": "PI3227C223222B5BPCMFXD2XG",
  "encryptedKey": "75989E8881284D10153ABACF022EEA09F5..."
}
```

<h3 id="reveal-a-card-pin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RevealPinRequest](#schemarevealpinrequest)|false|none|
|» encryptedKey|body|string|true|The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.|
|» paymentInstrumentId|body|string|true|The unique identifier of the payment instrument, which is the card for which you are managing the PIN.|

> Example responses

> 200 Response

```json
{
  "encryptedPinBlock": "63E5060591EF65F48DD1D4FECD0FECD5",
  "token": "5555341244441115"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="reveal-a-card-pin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RevealPinResponse](#schemarevealpinresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get an RSA public key

<a id="opIdget-publicKey"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/publicKey?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /publicKey`

Get an [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) public key to encrypt or decrypt card data.

 You need the RSA public key to generate the `encryptedKey` required to:
- [Change a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/change).
- [Reveal a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/reveal).
- [Reveal a PAN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/paymentInstruments/reveal).

<h3 id="get-an-rsa-public-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|purpose|query|string|false|The purpose of the public key.<br><br>Possible values: **pinChange**, **pinReveal**, **panReveal**.<br><br>Default value: **pinReveal**.|
|format|query|string|false|The encoding format of public key.<br><br>Possible values: **jwk**, **pem**.<br><br>Default value: **pem**.|

> Example responses

> 200 Response

```json
{
  "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMII...",
  "publicKeyExpiryDate": "2023-12-12"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-an-rsa-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PublicKeyResponse](#schemapublickeyresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-transfer-routes">Transfer routes</h1>

## Calculate transfer routes

<a id="opIdpost-transferRoutes-calculate"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/transferRoutes/calculate?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "currency": "USD",
    "category": "bank",
    "counterparty": {
      "bankAccount": {
        "accountIdentification": {
          "type": "iban",
          "iban": "NL91ABNA0417164300"
        }
      }
    }
  }'
```

`POST /transferRoutes/calculate`

Returns available transfer routes based on a combination of transfer `country`, `currency`, `counterparty`, and `priorities`. Use this endpoint to find optimal transfer priorities and associated requirements before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers).

> Body parameter

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "currency": "USD",
  "category": "bank",
  "counterparty": {
    "bankAccount": {
      "accountIdentification": {
        "type": "iban",
        "iban": "NL91ABNA0417164300"
      }
    }
  }
}
```

<h3 id="calculate-transfer-routes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferRouteRequest](#schematransferrouterequest)|false|none|
|» balanceAccountId|body|string|false|The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).<br>Required if `counterparty` is **transferInstrumentId**.|
|» balancePlatform|body|string|true|The unique identifier assigned to the balance platform associated with the account holder.|
|» category|body|string|true| The type of transfer. Possible values:<br><br>  - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.<br>|
|» counterparty|body|[Counterparty](#schemacounterparty)|false|The recipient of the funds transfer. A bank account or a transfer instrument.|
|» country|body|string|false|The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**.<br> > Either `counterparty` or `country` field must be provided in a transfer route request.|
|» currency|body|string|true|The three-character ISO currency code of transfer. For example, **USD** or **EUR**.|
|» priorities|body|[string]|false|The list of priorities for the bank transfer. Priorities set the speed at which the transfer is sent and the fees that you have to pay. Multiple values can be provided.<br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|bank|
|» priorities|crossBorder|
|» priorities|fast|
|» priorities|instant|
|» priorities|internal|
|» priorities|regular|
|» priorities|wire|

> Example responses

> 200 Response

```json
{
  "transferRoutes": [
    {
      "country": "NL",
      "currency": "USD",
      "priority": "crossBorder",
      "requirements": [
        {
          "description": "Amount of transfer must be at least 100, and no greater than 99999999999",
          "max": 99999999999,
          "min": 100,
          "type": "amountMinMaxRequirement"
        },
        {
          "description": "Country, street and city is required.",
          "requiredAddressFields": [
            "line1",
            "city",
            "country"
          ],
          "type": "addressRequirement"
        },
        {
          "description": "Bank account identification type must be iban or numberAndBic",
          "bankAccountIdentificationTypes": [
            "iban",
            "numberAndBic"
          ],
          "type": "bankAccountIdentificationTypeRequirement"
        },
        {
          "issuingCountryCode": "NL",
          "paymentInstrumentType": "BankAccount",
          "type": "paymentInstrumentRequirement"
        }
      ]
    },
    {
      "country": "NL",
      "currency": "USD",
      "priority": "wire",
      "requirements": [
        {
          "description": "Amount of transfer must be at least 100, and no greater than 99999999999",
          "max": 99999999999,
          "min": 100,
          "type": "amountMinMaxRequirement"
        },
        {
          "description": "Country, street and city is required.",
          "requiredAddressFields": [
            "line1",
            "city",
            "country"
          ],
          "type": "addressRequirement"
        },
        {
          "description": "Bank account identification type must be iban or numberAndBic",
          "bankAccountIdentificationTypes": [
            "iban",
            "numberAndBic"
          ],
          "type": "bankAccountIdentificationTypeRequirement"
        },
        {
          "issuingCountryCode": "NL",
          "paymentInstrumentType": "BankAccount",
          "type": "paymentInstrumentRequirement"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="calculate-transfer-routes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransferRouteResponse](#schematransferrouteresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-sca-device-management">SCA device management</h1>

## Begin SCA device registration

<a id="opIdpost-scaDevices"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/scaDevices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "My Device",
    "sdkOutput": "eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9"
  }'
```

`POST /scaDevices`

Begins the registration process for a new Strong Customer Authentication (SCA) device.

> Body parameter

```json
{
  "name": "My Device",
  "sdkOutput": "eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9"
}
```

<h3 id="begin-sca-device-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BeginScaDeviceRegistrationRequest](#schemabeginscadeviceregistrationrequest)|false|none|
|» name|body|string|true|The name of the SCA device that you are registering. You can use it to help your users identify the device.|
|» sdkOutput|body|string|true|A base64-encoded block with the data required to register the SCA device. You obtain this information by using Adyen's authentication SDK.|

> Example responses

> 201 Response

```json
{
  "scaDevice": {
    "id": "BSDR42XV3223223S5N6CDQDGH53M8H",
    "name": "My Device",
    "type": "ios"
  },
  "sdkInput": "eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9"
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

> 403 Response

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

<h3 id="begin-sca-device-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - A device resource is created. The initial step of registration is complete, but the device isn't ready for use.|[BeginScaDeviceRegistrationResponse](#schemabeginscadeviceregistrationresponse)|
|400|Bad Request|Bad Request - The request contains invalid input and fails validation.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - The server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an SCA device

<a id="opIddelete-scaDevices-deviceId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/scaDevices/stringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /scaDevices/{deviceId}`

Deletes a Strong Customer Authentication (SCA) device.

<h3 id="delete-an-sca-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the SCA device to delete.|

> Example responses

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

> 403 Response

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

<h3 id="delete-an-sca-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - The device was deleted successfully.|None|
|400|Bad Request|Bad Request - The request contains invalid input and fails validation.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - Device not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - The server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Finish registration process for a SCA device

<a id="opIdpatch-scaDevices-deviceId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/scaDevices/stringstringstringstringstring \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sdkOutput": "eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9"
  }'
```

`PATCH /scaDevices/{deviceId}`

Finishes the registration process for a new Strong Customer Authentication (SCA) device.

> Body parameter

```json
{
  "sdkOutput": "eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9"
}
```

<h3 id="finish-registration-process-for-a-sca-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the SCA device that you are associating with a resource.|
|body|body|[FinishScaDeviceRegistrationRequest](#schemafinishscadeviceregistrationrequest)|false|none|
|» sdkOutput|body|string|true|A base64-encoded block with the data required to register the SCA device. You obtain this information by using Adyen's authentication SDK.|

> Example responses

> 200 Response

```json
{
  "scaDevice": {
    "id": "BSDR42XV3223223S5N6CDQDGH53M8H",
    "name": "Device",
    "type": "ios"
  }
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

> 403 Response

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

<h3 id="finish-registration-process-for-a-sca-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - Device registration was completed successfully.|[FinishScaDeviceRegistrationResponse](#schemafinishscadeviceregistrationresponse)|
|400|Bad Request|Bad Request - The request contains invalid input and fails validation.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - Device not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - The server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new SCA association for a device

<a id="opIdpost-scaDevices-deviceId-scaAssociations"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/scaDevices/stringstringstringstringstring/scaAssociations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "entities": [
      {
        "type": "accountHolder",
        "id": "AH00000000000000000000001"
      }
    ]
  }'
```

`POST /scaDevices/{deviceId}/scaAssociations`

Creates an association between an SCA-enabled device and an entity, such as an account holder. This action does not guarantee the association is immediately ready for use; its status may be `pendingApproval` if the account holder has existing devices. If the entity is configured to allow only a single associated device and single-device replacement is enabled for your account, the new association immediately replaces the existing one: its status is `active` and the previously associated device is no longer associated.

> Body parameter

```json
{
  "entities": [
    {
      "type": "accountHolder",
      "id": "AH00000000000000000000001"
    }
  ]
}
```

<h3 id="create-a-new-sca-association-for-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the SCA device that you are associating with a resource.|
|body|body|[SubmitScaAssociationRequest](#schemasubmitscaassociationrequest)|false|none|
|» entities|body|[[ScaEntity](#schemascaentity)]|true|The list of entities to be associated.|

> Example responses

> 201 Response

```json
{
  "scaAssociations": [
    {
      "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
      "entityType": "accountHolder",
      "entityId": "AH00000000000000000000001",
      "status": "pendingApproval"
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

> 403 Response

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

<h3 id="create-a-new-sca-association-for-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - Association created.|[SubmitScaAssociationResponse](#schemasubmitscaassociationresponse)|
|400|Bad Request|Bad Request - The request contains invalid input and fails validation.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - Device not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - The server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-transfer-limits---balance-account-level">Transfer limits - balance account level</h1>

## Filter and view the transfer limits

<a id="opIdget-balanceAccounts-id-transferLimits"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/transferLimits \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{id}/transferLimits`

Filter and view the transfer limits configured for a balance account using the balance account's unique `id` and the available query parameters.


<h3 id="filter-and-view-the-transfer-limits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance account.|
|scope|query|[Scope](#schemascope)|false|The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.|
|transferType|query|[TransferType](#schematransfertype)|false|The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority.|
|status|query|[LimitStatus](#schemalimitstatus)|false|The status of the transfer limit. Possible values:   <br>* **active**: the limit is currently active.<br>* **inactive**: the limit is currently inactive.<br>* **pendingSCA**: the limit is pending until your user performs SCA.<br>* **scheduled**: the limit is scheduled to become active at a future date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|perDay|
|scope|perTransaction|
|transferType|instant|
|transferType|all|
|status|active|
|status|inactive|
|status|pendingSCA|
|status|scheduled|

> Example responses

> 200 Response

```json
{
  "transferLimits": [
    {
      "amount": {
        "currency": "EUR",
        "value": 10000
      },
      "endsAt": "2026-08-13T23:00:00+01:00",
      "id": "TRLI00000000000000000000000001",
      "limitStatus": "active",
      "reference": "Your reference for the transfer limit",
      "scaInformation": {
        "exemption": "initialLimit",
        "status": "notPerformed"
      },
      "scope": "perTransaction",
      "startsAt": "2025-08-13T23:00:00+01:00",
      "transferType": "instant"
    },
    {
      "amount": {
        "currency": "EUR",
        "value": 20000
      },
      "endsAt": "2026-08-13T23:00:00+01:00",
      "id": "TRLI00000000000000000000000002",
      "limitStatus": "active",
      "reference": "Your reference for the transfer limit",
      "scaInformation": {
        "exemption": "initialLimit",
        "status": "notPerformed"
      },
      "scope": "perTransaction",
      "startsAt": "2025-08-13T23:00:00+01:00",
      "transferType": "all"
    }
  ]
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

<h3 id="filter-and-view-the-transfer-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[TransferLimitListResponse](#schematransferlimitlistresponse)|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a transfer limit

<a id="opIdpost-balanceAccounts-id-transferLimits"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/transferLimits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": {
      "currency": "EUR",
      "value": 10000
    },
    "reference": "Your reference for the transfer limit",
    "scaInformation": {
      "scaOnApproval": true
    },
    "scope": "perTransaction",
    "startsAt": "2025-08-15T06:36:20+01:00",
    "endsAt": "2026-08-14T00:00:00+01:00",
    "transferType": "all"
  }'
```

`POST /balanceAccounts/{id}/transferLimits`

Create a transfer limit for your balance account using the unique `id` of your balance account.


> Body parameter

```json
{
  "amount": {
    "currency": "EUR",
    "value": 10000
  },
  "reference": "Your reference for the transfer limit",
  "scaInformation": {
    "scaOnApproval": true
  },
  "scope": "perTransaction",
  "startsAt": "2025-08-15T06:36:20+01:00",
  "endsAt": "2026-08-14T00:00:00+01:00",
  "transferType": "all"
}
```

<h3 id="create-a-transfer-limit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WWW-Authenticate|header|string|false|Header for authenticating through SCA|
|id|path|string|true|The unique identifier of the balance account.|
|body|body|[CreateTransferLimitRequest](#schemacreatetransferlimitrequest)|true|none|
|» amount|body|[Amount](#schemaamount)|true|The amount for the transfer limit. This is the maximum amount allowed per transfer or per day based on the `scope` of the limit.|
|» endsAt|body|string(date-time)|false|The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**|
|» reference|body|string|false|Your reference for the transfer limit.|
|» scaInformation|body|[CreateScaInformation](#schemacreatescainformation)|false|Information for the Strong Customer Authentication (SCA)|
|» scope|body|[Scope](#schemascope)|true|The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.|
|» startsAt|body|string(date-time)|false|The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**|
|» transferType|body|[TransferType](#schematransfertype)|true|The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|perDay|
|» scope|perTransaction|
|» transferType|instant|
|» transferType|all|

> Example responses

> 200 Response

```json
{
  "amount": {
    "currency": "EUR",
    "value": 10000
  },
  "endsAt": "2026-08-13T23:00:00+01:00",
  "id": "TRLI00000000000000000000000001",
  "limitStatus": "pendingSCA",
  "reference": "Your reference for the transfer limit",
  "scaInformation": {
    "status": "pending"
  },
  "scope": "perTransaction",
  "startsAt": "2025-08-15T06:36:20+01:00",
  "transferType": "all"
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

<h3 id="create-a-transfer-limit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[TransferLimit](#schematransferlimit)|
|400|Bad Request|Bad Request - The input is invalid, or no registered device for SCA was found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - Authentication required via Strong Customer Authentication (SCA). The client must resolve the provided challenge.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||SCA challenge header containing the details necessary for completing authentication. The client should solve the challenge contained.|

<aside class="success">
This operation does not require authentication
</aside>

## Approve pending transfer limits

<a id="opIdpost-balanceAccounts-id-transferLimits-approve"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/transferLimits/approve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "transferLimitIds": [
      "TRLI00000000000000000000000001",
      "TRLI00000000000000000000000002"
    ]
  }'
```

`POST /balanceAccounts/{id}/transferLimits/approve`

Approve transfer limits that are pending SCA authentication.


> Body parameter

```json
{
  "transferLimitIds": [
    "TRLI00000000000000000000000001",
    "TRLI00000000000000000000000002"
  ]
}
```

<h3 id="approve-pending-transfer-limits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WWW-Authenticate|header|string|false|Header for authenticating using SCA.|
|id|path|string|true|The unique identifier of the balance account.|
|body|body|[ApproveTransferLimitRequest](#schemaapprovetransferlimitrequest)|true|none|
|» transferLimitIds|body|[string]|true|A list that includes the `transferLimitId` of all the pending transfer limits you want to approve.|

> Example responses

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

<h3 id="approve-pending-transfer-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - The request has succeeded.|None|
|401|Unauthorized|Unauthorized - Authentication required via Strong Customer Authentication (SCA). The client must resolve the provided challenge.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||SCA challenge header containing the details necessary for completing authentication. The client should solve the challenge contained.|

<aside class="success">
This operation does not require authentication
</aside>

## Get all current transfer limits

<a id="opIdget-balanceAccounts-id-transferLimits-current"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/transferLimits/current \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{id}/transferLimits/current`

Get all transfer limits that currently apply to a balance account using the unique `id` of the balance account.


<h3 id="get-all-current-transfer-limits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance account.|
|scope|query|[Scope](#schemascope)|false|The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.|
|transferType|query|[TransferType](#schematransfertype)|false|The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|perDay|
|scope|perTransaction|
|transferType|instant|
|transferType|all|

> Example responses

> 200 Response

```json
{
  "transferLimits": [
    {
      "amount": {
        "currency": "EUR",
        "value": 10000
      },
      "endsAt": "2026-08-13T23:00:00+01:00",
      "id": "TRLI00000000000000000000000001",
      "limitStatus": "active",
      "reference": "Your reference for the transfer limit",
      "scaInformation": {
        "exemption": "initialLimit",
        "status": "notPerformed"
      },
      "scope": "perDay",
      "startsAt": "2025-08-13T23:00:00+01:00",
      "transferType": "instant"
    }
  ]
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

<h3 id="get-all-current-transfer-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[TransferLimitListResponse](#schematransferlimitlistresponse)|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the details of a transfer limit

<a id="opIdget-balanceAccounts-id-transferLimits-transferLimitId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/transferLimits/string \
  -H 'Accept: application/json'
```

`GET /balanceAccounts/{id}/transferLimits/{transferLimitId}`

Get the details of a transfer limit using its unique `transferLimitId`.


<h3 id="get-the-details-of-a-transfer-limit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance account.|
|transferLimitId|path|string|true|The unique identifier of the transfer limit.|

> Example responses

> 200 Response

```json
{
  "amount": {
    "currency": "EUR",
    "value": 10000
  },
  "endsAt": "2026-08-13T23:00:00+01:00",
  "id": "TRLI00000000000000000000000001",
  "limitStatus": "active",
  "reference": "Your reference for the transfer limit",
  "scaInformation": {
    "exemption": "initialLimit",
    "status": "notPerformed"
  },
  "scope": "perTransaction",
  "startsAt": "2025-08-13T23:00:00+01:00",
  "transferType": "all"
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

<h3 id="get-the-details-of-a-transfer-limit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[TransferLimit](#schematransferlimit)|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a scheduled or pending transfer limit

<a id="opIddelete-balanceAccounts-id-transferLimits-transferLimitId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/string/transferLimits/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /balanceAccounts/{id}/transferLimits/{transferLimitId}`

Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.


<h3 id="delete-a-scheduled-or-pending-transfer-limit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance account.|
|transferLimitId|path|string|true|The unique identifier of the transfer limit.|

> Example responses

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

<h3 id="delete-a-scheduled-or-pending-transfer-limit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - The request has succeeded.|None|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-transfer-limits---balance-platform-level">Transfer limits - balance platform level</h1>

## Filter and view the transfer limits

<a id="opIdget-balancePlatforms-id-transferLimits"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/transferLimits \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{id}/transferLimits`

Filter and view the transfer limits configured for your balance platform using the balance platform's unique `id` and the available query parameters.


<h3 id="filter-and-view-the-transfer-limits-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance platform.|
|scope|query|[Scope](#schemascope)|false|The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.|
|transferType|query|[TransferType](#schematransfertype)|false|The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority.|
|status|query|[LimitStatus](#schemalimitstatus)|false|The status of the transfer limit. Possible values:   <br>* **active**: the limit is currently active.<br>* **inactive**: the limit is currently inactive.<br>* **pendingSCA**: the limit is pending until your user performs SCA.<br>* **scheduled**: the limit is scheduled to become active at a future date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|perDay|
|scope|perTransaction|
|transferType|instant|
|transferType|all|
|status|active|
|status|inactive|
|status|pendingSCA|
|status|scheduled|

> Example responses

> 200 Response

```json
{
  "transferLimits": [
    {
      "amount": {
        "currency": "EUR",
        "value": 10000
      },
      "endsAt": "2026-08-13T23:00:00+01:00",
      "id": "TRLI00000000000000000000000001",
      "limitStatus": "active",
      "reference": "Your reference for the transfer limit",
      "scaInformation": {
        "exemption": "initialLimit",
        "status": "notPerformed"
      },
      "scope": "perTransaction",
      "startsAt": "2025-08-13T23:00:00+01:00",
      "transferType": "instant"
    },
    {
      "amount": {
        "currency": "EUR",
        "value": 20000
      },
      "endsAt": "2026-08-13T23:00:00+01:00",
      "id": "TRLI00000000000000000000000002",
      "limitStatus": "active",
      "reference": "Your reference for the transfer limit",
      "scaInformation": {
        "exemption": "initialLimit",
        "status": "notPerformed"
      },
      "scope": "perTransaction",
      "startsAt": "2025-08-13T23:00:00+01:00",
      "transferType": "all"
    }
  ]
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

<h3 id="filter-and-view-the-transfer-limits-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[TransferLimitListResponse](#schematransferlimitlistresponse)|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a transfer limit

<a id="opIdpost-balancePlatforms-id-transferLimits"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/transferLimits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": {
      "currency": "EUR",
      "value": 10000
    },
    "reference": "Your reference for the transfer limit",
    "scaInformation": {
      "scaOnApproval": true
    },
    "scope": "perTransaction",
    "startsAt": "2025-08-15T06:36:20+01:00",
    "endsAt": "2026-08-14T00:00:00+01:00",
    "transferType": "all"
  }'
```

`POST /balancePlatforms/{id}/transferLimits`

Create a transfer limit for your balance platform using the unique `id` of your balance platform.


> Body parameter

```json
{
  "amount": {
    "currency": "EUR",
    "value": 10000
  },
  "reference": "Your reference for the transfer limit",
  "scaInformation": {
    "scaOnApproval": true
  },
  "scope": "perTransaction",
  "startsAt": "2025-08-15T06:36:20+01:00",
  "endsAt": "2026-08-14T00:00:00+01:00",
  "transferType": "all"
}
```

<h3 id="create-a-transfer-limit-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance platform.|
|body|body|[CreateTransferLimitRequest](#schemacreatetransferlimitrequest)|true|none|
|» amount|body|[Amount](#schemaamount)|true|The amount for the transfer limit. This is the maximum amount allowed per transfer or per day based on the `scope` of the limit.|
|» endsAt|body|string(date-time)|false|The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**|
|» reference|body|string|false|Your reference for the transfer limit.|
|» scaInformation|body|[CreateScaInformation](#schemacreatescainformation)|false|Information for the Strong Customer Authentication (SCA)|
|» scope|body|[Scope](#schemascope)|true|The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.|
|» startsAt|body|string(date-time)|false|The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**|
|» transferType|body|[TransferType](#schematransfertype)|true|The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|perDay|
|» scope|perTransaction|
|» transferType|instant|
|» transferType|all|

> Example responses

> 200 Response

```json
{
  "amount": {
    "currency": "EUR",
    "value": 10000
  },
  "endsAt": "2026-08-13T23:00:00+01:00",
  "id": "TRLI00000000000000000000000001",
  "limitStatus": "pendingSCA",
  "reference": "Your reference for the transfer limit",
  "scaInformation": {
    "status": "pending"
  },
  "scope": "perTransaction",
  "startsAt": "2025-08-15T06:36:20+01:00",
  "transferType": "all"
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

<h3 id="create-a-transfer-limit-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[TransferLimit](#schematransferlimit)|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the details of a transfer limit

<a id="opIdget-balancePlatforms-id-transferLimits-transferLimitId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/transferLimits/string \
  -H 'Accept: application/json'
```

`GET /balancePlatforms/{id}/transferLimits/{transferLimitId}`

Get the details of a transfer limit using its unique `transferLimitId`.


<h3 id="get-the-details-of-a-transfer-limit-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance platform.|
|transferLimitId|path|string|true|The unique identifier of the transfer limit.|

> Example responses

> 200 Response

```json
{
  "amount": {
    "currency": "EUR",
    "value": 10000
  },
  "endsAt": "2026-08-13T23:00:00+01:00",
  "id": "TRLI00000000000000000000000001",
  "limitStatus": "active",
  "reference": "Your reference for the transfer limit",
  "scaInformation": {
    "exemption": "initialLimit",
    "status": "notPerformed"
  },
  "scope": "perTransaction",
  "startsAt": "2025-08-13T23:00:00+01:00",
  "transferType": "all"
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

<h3 id="get-the-details-of-a-transfer-limit-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[TransferLimit](#schematransferlimit)|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a scheduled or pending transfer limit

<a id="opIddelete-balancePlatforms-id-transferLimits-transferLimitId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/balancePlatforms/string/transferLimits/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /balancePlatforms/{id}/transferLimits/{transferLimitId}`

Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.


<h3 id="delete-a-scheduled-or-pending-transfer-limit-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the balance platform.|
|transferLimitId|path|string|true|The unique identifier of the transfer limit.|

> Example responses

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

<h3 id="delete-a-scheduled-or-pending-transfer-limit-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - The request has succeeded.|None|
|404|Not Found|Not found - One of the transfer limits could not be found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="configuration-api-manage-sca-devices">Manage SCA devices</h1>

## Get a list of registered SCA devices

<a id="opIdget-registeredDevices"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/registeredDevices?paymentInstrumentId=string&clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /registeredDevices`

Get a paginated list of the SCA devices you have currently registered for a specific payment instrument.

<h3 id="get-a-list-of-registered-sca-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentInstrumentId|query|string|true|The unique identifier of a payment instrument. It limits the returned list to SCA devices associated to this payment instrument.|
|pageNumber|query|integer(int32)|false|The index of the page to retrieve. The index of the first page is 0 (zero).<br><br>Default: 0.|
|pageSize|query|integer(int32)|false|The number of items to have on a page.<br><br>Default: 20. Maximum: 100.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "paymentInstrumentId": "string",
      "type": "ios"
    }
  ],
  "itemsTotal": 0,
  "link": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "previous": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "pagesTotal": 0
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="get-a-list-of-registered-sca-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SearchRegisteredDevicesResponse](#schemasearchregistereddevicesresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Initiate the registration of an SCA device

<a id="opIdpost-registeredDevices"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/registeredDevices?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "paymentInstrumentId": "string",
    "strongCustomerAuthentication": {
      "sdkOutput": "string"
    }
  }'
```

`POST /registeredDevices`

Initiates the registration of a user's device for Strong Customer Authentication (SCA). You can register SCA devices for [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).

For a successful request, the device must be eligible for SCA.

> Body parameter

```json
{
  "name": "string",
  "paymentInstrumentId": "string",
  "strongCustomerAuthentication": {
    "sdkOutput": "string"
  }
}
```

<h3 id="initiate-the-registration-of-an-sca-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterSCARequest](#schemaregisterscarequest)|false|none|
|» name|body|string|false|The name of the SCA device that you are registering. You can use it to help your users identify the device.<br><br>If you do not specify a `name`, Adyen automatically generates one.|
|» paymentInstrumentId|body|string|true|The unique identifier of the payment instrument for which you are registering the SCA device.|
|» strongCustomerAuthentication|body|[DelegatedAuthenticationData](#schemadelegatedauthenticationdata)|true|Contains information required to register the SCA device.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "paymentInstrumentId": "string",
  "sdkInput": "string",
  "success": true
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="initiate-the-registration-of-an-sca-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RegisterSCAResponse](#schemaregisterscaresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Initiate an association between an SCA device and a resource

<a id="opIdpost-registeredDevices-deviceId-associations"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/registeredDevices/string/associations?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ids": [
      "string"
    ],
    "type": "PaymentInstrument"
  }'
```

`POST /registeredDevices/{deviceId}/associations`

Initiates an association between a user's registered SCA device and an Adyen resource. For example, you can associate an SCA device with additional [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "type": "PaymentInstrument"
}
```

<h3 id="initiate-an-association-between-an-sca-device-and-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the SCA device that you are associating with a resource.|
|body|body|[AssociationInitiateRequest](#schemaassociationinitiaterequest)|false|none|
|» ids|body|[string]|true|The list of unique identifiers of the resources that you are associating with the SCA device.<br><br>Maximum: 5 strings.|
|» type|body|string|true|The type of resource that you are associating with the SCA device.<br><br>Possible value: **PaymentInstrument**|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|PaymentInstrument|

> Example responses

> 200 Response

```json
{
  "sdkInput": "string"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="initiate-an-association-between-an-sca-device-and-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AssociationInitiateResponse](#schemaassociationinitiateresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Complete an association between an SCA device and a resource

<a id="opIdpatch-registeredDevices-deviceId-associations"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/registeredDevices/string/associations?clientKey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ids": [
      "string"
    ],
    "strongCustomerAuthentication": {
      "sdkOutput": "string"
    },
    "type": "PaymentInstrument"
  }'
```

`PATCH /registeredDevices/{deviceId}/associations`

Completes an association between a user's registered SCA device and an Adyen resource. For example, you can associate an SCA device with additional [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).

To complete the association, this endpoint validates the authentication data of the registered device.

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "strongCustomerAuthentication": {
    "sdkOutput": "string"
  },
  "type": "PaymentInstrument"
}
```

<h3 id="complete-an-association-between-an-sca-device-and-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the SCA device that you are associating with a resource.|
|body|body|[AssociationFinaliseRequest](#schemaassociationfinaliserequest)|false|none|
|» ids|body|[string]|true|The list of unique identifiers of the resources that you are associating with the SCA device.<br><br>Maximum: 5 strings.|
|» strongCustomerAuthentication|body|[AssociationDelegatedAuthenticationData](#schemaassociationdelegatedauthenticationdata)|true|Contains authentication information required to associate the resource with the SCA device.|
|» type|body|string|true|The type of resource that you are associating with the SCA device.<br><br>Possible value: **PaymentInstrument**|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|PaymentInstrument|

> Example responses

> 200 Response

```json
{
  "deviceId": "string",
  "ids": [
    "string"
  ],
  "type": "PAYMENT_INSTRUMENT"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="complete-an-association-between-an-sca-device-and-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AssociationFinaliseResponse](#schemaassociationfinaliseresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Delete a registration of an SCA device

<a id="opIddelete-registeredDevices-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/registeredDevices/string?paymentInstrumentId=string&clientKey=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /registeredDevices/{id}`

Deletes an SCA device from the list of registered devices of a specific payment instrument.

<h3 id="delete-a-registration-of-an-sca-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the SCA device.|
|paymentInstrumentId|query|string|true|The unique identifier of the payment instrument linked to the SCA device.|

> Example responses

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="delete-a-registration-of-an-sca-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - look at the actual response code for the status of the request. |None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Complete the registration of an SCA device

<a id="opIdpatch-registeredDevices-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/bcl/v2/registeredDevices/string?clientKey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "paymentInstrumentId": "string",
    "strongCustomerAuthentication": {
      "sdkOutput": "string"
    }
  }'
```

`PATCH /registeredDevices/{id}`

Completes the registration of an SCA device by validating the authentication data of the device. You can register SCA devices for [business accounts](https://docs.adyen.com/platforms/business-accounts/sca) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk).



> Body parameter

```json
{
  "name": "string",
  "paymentInstrumentId": "string",
  "strongCustomerAuthentication": {
    "sdkOutput": "string"
  }
}
```

<h3 id="complete-the-registration-of-an-sca-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the SCA device. You obtain this `id` in the response of a POST&nbsp;[/registeredDevices](https://docs.adyen.com/api-explorer/balanceplatform/2/post/registeredDevices#responses-200-id) request.|
|body|body|[RegisterSCARequest](#schemaregisterscarequest)|false|none|
|» name|body|string|false|The name of the SCA device that you are registering. You can use it to help your users identify the device.<br><br>If you do not specify a `name`, Adyen automatically generates one.|
|» paymentInstrumentId|body|string|true|The unique identifier of the payment instrument for which you are registering the SCA device.|
|» strongCustomerAuthentication|body|[DelegatedAuthenticationData](#schemadelegatedauthenticationdata)|true|Contains information required to register the SCA device.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/bad-request",
  "title": "Bad request",
  "status": 400,
  "detail": "Empty input which would have resulted in a null result.",
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not authorized to access this service.",
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/security/unauthorized",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not the right permission to access this service.",
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/invalid-field-value",
  "title": "Invalid Payment Instrument information provided",
  "status": 422,
  "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
  "requestId": "1W1UI15PLVGC9V8O",
  "errorCode": "30_031"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/general/internal",
  "title": "An internal error happened",
  "status": 500,
  "detail": "Unrecoverable error while trying to create payment instrument",
  "requestId": "1WAF555PLWNTLYOQ",
  "errorCode": "00_500"
}
```

<h3 id="complete-the-registration-of-an-sca-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RegisterSCAFinalResponse](#schemaregisterscafinalresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="configuration-api-sca-association-management">SCA association management</h1>

## Get a list of devices associated with an entity

<a id="opIdget-scaAssociations"></a>

> Code samples

```bash
curl 'https://balanceplatform-api-test.adyen.com/bcl/v2/scaAssociations?entityType=accountHolder&entityId=string&pageSize=1&pageNumber=0' \
  -H 'Accept: application/json'
```

`GET /scaAssociations`

Returns a paginated list of the SCA devices associated with a specific entity.

<h3 id="get-a-list-of-devices-associated-with-an-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityType|query|[ScaEntityType](#schemascaentitytype)|true|The type of entity you want to retrieve a list of associations for. <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.|
|entityId|query|string|true|The unique identifier of the entity.|
|pageSize|query|integer(int32)|true|The number of items to have on a page. <br><br>Default: **5**.|
|pageNumber|query|integer(int32)|true|The index of the page to retrieve. The index of the first page is **0** (zero). <br><br>Default:  **0**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|entityType|accountHolder|
|entityType|legalEntity|
|entityType|paymentInstrument|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "https://exampledomain.com/bcl/api/v2/scaAssociations?pageNumber=0&entityType=accountHolder&pageSize=10&entityId=AH3227J223222D5HHM4779X6X"
    }
  },
  "itemsTotal": 2,
  "pagesTotal": 1,
  "data": [
    {
      "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
      "scaDeviceName": "Device 1",
      "scaDeviceType": "ios",
      "entityType": "accountHolder",
      "entityId": "AH00000000000000000000001",
      "status": "active",
      "createdAt": "2025-09-02T14:39:17.232Z"
    },
    {
      "scaDeviceId": "BSDR22222222222B2BBB2BBBBB2BB2",
      "scaDeviceName": "Device 2",
      "scaDeviceType": "ios",
      "entityType": "accountHolder",
      "entityId": "AH00000000000000000000001",
      "status": "pendingApproval",
      "createdAt": "2025-09-02T14:39:17.232Z"
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

> 403 Response

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

<h3 id="get-a-list-of-devices-associated-with-an-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[ListAssociationsResponse](#schemalistassociationsresponse)|
|400|Bad Request|Bad request - The request contains invalid input and fails validation.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - The server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete association to devices

<a id="opIddelete-scaAssociations"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/scaAssociations \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'WWW-Authenticate: string' \
  -d '{
    "entityType": "accountHolder",
    "entityId": "AH00000000000000000000001",
    "scaDeviceIds": [
      "BSDR42XV3223223S5N6CDQDGH53M8H"
    ]
  }'
```

`DELETE /scaAssociations`

Deletes one or more SCA associations for a device.

> Body parameter

```json
{
  "entityType": "accountHolder",
  "entityId": "AH00000000000000000000001",
  "scaDeviceIds": [
    "BSDR42XV3223223S5N6CDQDGH53M8H"
  ]
}
```

<h3 id="delete-association-to-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WWW-Authenticate|header|string|true|The header for authenticating through SCA.|
|body|body|[RemoveAssociationRequest](#schemaremoveassociationrequest)|false|none|
|» entityId|body|string|true|The unique identifier of the entity.|
|» entityType|body|[ScaEntityType](#schemascaentitytype)|true|The type of the entity.  <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.|
|» scaDeviceIds|body|[string]|true|A list of device ids associated with the entity that should be removed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entityType|accountHolder|
|» entityType|legalEntity|
|» entityType|paymentInstrument|

> Example responses

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

> 403 Response

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

<h3 id="delete-association-to-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - Successful association deletion.|None|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - The server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|object||Authentication header, a string that you must pass to the authentication SDK to continue with the deletion process.|

<aside class="success">
This operation does not require authentication
</aside>

## Approve a pending approval association

<a id="opIdpatch-scaAssociations"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/bcl/v2/scaAssociations \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'WWW-Authenticate: string' \
  -d '{
    "status": "active",
    "entityType": "accountHolder",
    "entityId": "AH00000000000000000000001",
    "scaDeviceIds": [
      "BSDR42XV3223223S5N6CDQDGH53M8H"
    ]
  }'
```

`PATCH /scaAssociations`

Approves a previously created association that is in a pending state.

> Body parameter

```json
{
  "status": "active",
  "entityType": "accountHolder",
  "entityId": "AH00000000000000000000001",
  "scaDeviceIds": [
    "BSDR42XV3223223S5N6CDQDGH53M8H"
  ]
}
```

<h3 id="approve-a-pending-approval-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WWW-Authenticate|header|string|true|The header for authenticating through SCA.|
|body|body|[ApproveAssociationRequest](#schemaapproveassociationrequest)|false|none|
|» entityId|body|string|true|The unique identifier of the entity.|
|» entityType|body|[ScaEntityType](#schemascaentitytype)|true|The type of the entity. <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.|
|» scaDeviceIds|body|[string]|true|List of device ids associated to the entity that will be approved.|
|» status|body|[AssociationStatus](#schemaassociationstatus)|true|The status of the association. <br><br>Possible values: **active** or **pendingApproval**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entityType|accountHolder|
|» entityType|legalEntity|
|» entityType|paymentInstrument|
|» status|pendingApproval|
|» status|active|

> Example responses

> 200 Response

```json
{
  "scaAssociations": [
    {
      "scaDeviceId": "BSDR42XV3223223S5N6CDQDGH53M8H",
      "entityType": "accountHolder",
      "entityId": "AH00000000000000000000001",
      "status": "active"
    }
  ]
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

> 403 Response

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

<h3 id="approve-a-pending-approval-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - Successful approval|[ApproveAssociationResponse](#schemaapproveassociationresponse)|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - The server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|object||Authentication header, a string that you must pass to the authentication SDK to continue with the association approval process.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AULocalAccountIdentification">AULocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaaulocalaccountidentification"></a>
<a id="schema_AULocalAccountIdentification"></a>
<a id="tocSaulocalaccountidentification"></a>
<a id="tocsaulocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bsbCode": "string",
  "type": "auLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|bsbCode|string|true|none|The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.|
|type|string|true|none|**auLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|auLocal|

<h2 id="tocS_AccountHolder">AccountHolder</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholder"></a>
<a id="schema_AccountHolder"></a>
<a id="tocSaccountholder"></a>
<a id="tocsaccountholder"></a>

```json
{
  "balancePlatform": "string",
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "enabled": true,
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "allowedLevel": "high",
          "enabled": true,
          "id": "string",
          "requested": true,
          "requestedLevel": "high",
          "verificationStatus": "invalid"
        }
      ],
      "verificationStatus": "invalid"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "enabled": true,
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "allowedLevel": "high",
          "enabled": true,
          "id": "string",
          "requested": true,
          "requestedLevel": "high",
          "verificationStatus": "invalid"
        }
      ],
      "verificationStatus": "invalid"
    }
  },
  "contactDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "email": "string",
    "phone": {
      "number": "string",
      "type": "landline"
    },
    "webAddress": "string"
  },
  "description": "string",
  "id": "string",
  "legalEntityId": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "migratedAccountHolderCode": "string",
  "primaryBalanceAccount": "string",
  "reference": "string",
  "status": "active",
  "timeZone": "string",
  "verificationDeadlines": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "entityIds": [
        "string"
      ],
      "expiresAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.|
|capabilities|object|false|none|Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|contactDetails|[ContactDetails](#schemacontactdetails)|false|none|**Deprecated.** Contact details of the account holder.|
|description|string|false|none|Your description for the account holder.|
|id|string|true|read-only|The unique identifier of the account holder.|
|legalEntityId|string|true|none|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|migratedAccountHolderCode|string|false|read-only|The unique identifier of the migrated account holder in the classic integration.|
|primaryBalanceAccount|string|false|none|The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.|
|reference|string|false|none|Your reference for the account holder.|
|status|string|false|none|The status of the account holder.<br><br>Possible values: <br><br> * **active**: The account holder is active and allowed to use its capabilities. This is the initial status for account holders and balance accounts. You can change this status to **suspended** or **closed**. <br><br> * **suspended**: The account holder is temporarily disabled and payouts are blocked. You can change this status to **active** or **closed**. <br><br>* **closed**: The account holder and all of its capabilities are permanently disabled. This is a final status and cannot be changed.|
|timeZone|string|false|none|The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|
|verificationDeadlines|[[VerificationDeadline](#schemaverificationdeadline)]|false|read-only|List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|suspended|

<h2 id="tocS_AccountHolderCapability">AccountHolderCapability</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholdercapability"></a>
<a id="schema_AccountHolderCapability"></a>
<a id="tocSaccountholdercapability"></a>
<a id="tocsaccountholdercapability"></a>

```json
{
  "allowed": true,
  "allowedLevel": "high",
  "allowedSettings": {
    "amountPerIndustry": {
      "property1": {
        "currency": "string",
        "value": 0
      },
      "property2": {
        "currency": "string",
        "value": 0
      }
    },
    "authorizedCardUsers": true,
    "fundingSource": [
      "credit"
    ],
    "interval": "daily",
    "maxAmount": {
      "currency": "string",
      "value": 0
    }
  },
  "enabled": true,
  "problems": [
    {
      "entity": {
        "documents": [
          "string"
        ],
        "id": "string",
        "owner": {
          "documents": [
            "string"
          ],
          "id": "string",
          "type": "BankAccount"
        },
        "type": "BankAccount"
      },
      "verificationErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ],
          "subErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "type": "dataMissing",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ]
            }
          ],
          "type": "dataMissing"
        }
      ]
    }
  ],
  "requested": true,
  "requestedLevel": "high",
  "requestedSettings": {
    "amountPerIndustry": {
      "property1": {
        "currency": "string",
        "value": 0
      },
      "property2": {
        "currency": "string",
        "value": 0
      }
    },
    "authorizedCardUsers": true,
    "fundingSource": [
      "credit"
    ],
    "interval": "daily",
    "maxAmount": {
      "currency": "string",
      "value": 0
    }
  },
  "transferInstruments": [
    {
      "allowed": true,
      "allowedLevel": "high",
      "enabled": true,
      "id": "string",
      "requested": true,
      "requestedLevel": "high",
      "verificationStatus": "invalid"
    }
  ],
  "verificationStatus": "invalid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|read-only|Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.|
|allowedLevel|string|false|read-only|The capability level that is allowed for the account holder.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|allowedSettings|[CapabilitySettings](#schemacapabilitysettings)|false|none|A JSON object containing the settings that are allowed for the account holder.|
|enabled|boolean|false|none|Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.|
|problems|[[CapabilityProblem](#schemacapabilityproblem)]|false|read-only|Contains verification errors and the actions that you can take to resolve them.|
|requested|boolean|false|none|Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.|
|requestedLevel|string|false|none|The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|requestedSettings|[CapabilitySettings](#schemacapabilitysettings)|false|none|A JSON object containing the settings that were requested for the account holder.|
|transferInstruments|[[AccountSupportingEntityCapability](#schemaaccountsupportingentitycapability)]|false|read-only|Contains the status of the transfer instruments associated with this capability. |
|verificationStatus|string|false|read-only|The status of the verification checks for the capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedLevel|high|
|allowedLevel|low|
|allowedLevel|medium|
|allowedLevel|notApplicable|
|requestedLevel|high|
|requestedLevel|low|
|requestedLevel|medium|
|requestedLevel|notApplicable|
|verificationStatus|invalid|
|verificationStatus|pending|
|verificationStatus|rejected|
|verificationStatus|valid|

<h2 id="tocS_AccountHolderInfo">AccountHolderInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderinfo"></a>
<a id="schema_AccountHolderInfo"></a>
<a id="tocSaccountholderinfo"></a>
<a id="tocsaccountholderinfo"></a>

```json
{
  "balancePlatform": "string",
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "enabled": true,
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "allowedLevel": "high",
          "enabled": true,
          "id": "string",
          "requested": true,
          "requestedLevel": "high",
          "verificationStatus": "invalid"
        }
      ],
      "verificationStatus": "invalid"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "enabled": true,
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "allowedLevel": "high",
          "enabled": true,
          "id": "string",
          "requested": true,
          "requestedLevel": "high",
          "verificationStatus": "invalid"
        }
      ],
      "verificationStatus": "invalid"
    }
  },
  "contactDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "email": "string",
    "phone": {
      "number": "string",
      "type": "landline"
    },
    "webAddress": "string"
  },
  "description": "string",
  "legalEntityId": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "migratedAccountHolderCode": "string",
  "reference": "string",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.|
|capabilities|object|false|none|Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|contactDetails|[ContactDetails](#schemacontactdetails)|false|none|**Deprecated.** Contact details of the account holder.|
|description|string|false|none|Your description for the account holder.|
|legalEntityId|string|true|none|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|migratedAccountHolderCode|string|false|read-only|The unique identifier of the migrated account holder in the classic integration.|
|reference|string|false|none|Your reference for the account holder.|
|timeZone|string|false|none|The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

<h2 id="tocS_AccountHolderUpdateRequest">AccountHolderUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderupdaterequest"></a>
<a id="schema_AccountHolderUpdateRequest"></a>
<a id="tocSaccountholderupdaterequest"></a>
<a id="tocsaccountholderupdaterequest"></a>

```json
{
  "balancePlatform": "string",
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "enabled": true,
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "allowedLevel": "high",
          "enabled": true,
          "id": "string",
          "requested": true,
          "requestedLevel": "high",
          "verificationStatus": "invalid"
        }
      ],
      "verificationStatus": "invalid"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "enabled": true,
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "allowedLevel": "high",
          "enabled": true,
          "id": "string",
          "requested": true,
          "requestedLevel": "high",
          "verificationStatus": "invalid"
        }
      ],
      "verificationStatus": "invalid"
    }
  },
  "contactDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "email": "string",
    "phone": {
      "number": "string",
      "type": "landline"
    },
    "webAddress": "string"
  },
  "description": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "migratedAccountHolderCode": "string",
  "primaryBalanceAccount": "string",
  "reference": "string",
  "status": "active",
  "timeZone": "string",
  "verificationDeadlines": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "entityIds": [
        "string"
      ],
      "expiresAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.|
|capabilities|object|false|none|Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|contactDetails|[ContactDetails](#schemacontactdetails)|false|none|**Deprecated.** Contact details of the account holder.|
|description|string|false|none|Your description for the account holder.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|migratedAccountHolderCode|string|false|read-only|The unique identifier of the migrated account holder in the classic integration.|
|primaryBalanceAccount|string|false|none|The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.|
|reference|string|false|none|Your reference for the account holder.|
|status|string|false|none|The status of the account holder.<br><br>Possible values: <br><br> * **active**: The account holder is active and allowed to use its capabilities. This is the initial status for account holders and balance accounts. You can change this status to **suspended** or **closed**. <br><br> * **suspended**: The account holder is temporarily disabled and payouts are blocked. You can change this status to **active** or **closed**. <br><br>* **closed**: The account holder and all of its capabilities are permanently disabled. This is a final status and cannot be changed.|
|timeZone|string|false|none|The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|
|verificationDeadlines|[[VerificationDeadline](#schemaverificationdeadline)]|false|read-only|List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|suspended|

<h2 id="tocS_AccountSupportingEntityCapability">AccountSupportingEntityCapability</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsupportingentitycapability"></a>
<a id="schema_AccountSupportingEntityCapability"></a>
<a id="tocSaccountsupportingentitycapability"></a>
<a id="tocsaccountsupportingentitycapability"></a>

```json
{
  "allowed": true,
  "allowedLevel": "high",
  "enabled": true,
  "id": "string",
  "requested": true,
  "requestedLevel": "high",
  "verificationStatus": "invalid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|read-only|Indicates whether the supporting entity capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.|
|allowedLevel|string|false|read-only|The capability level that is allowed for the account holder.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|enabled|boolean|false|none|Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.|
|id|string|false|read-only|The ID of the supporting entity.|
|requested|boolean|false|none|Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.|
|requestedLevel|string|false|none|The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|verificationStatus|string|false|read-only|The status of the verification checks for the supporting entity capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedLevel|high|
|allowedLevel|low|
|allowedLevel|medium|
|allowedLevel|notApplicable|
|requestedLevel|high|
|requestedLevel|low|
|requestedLevel|medium|
|requestedLevel|notApplicable|
|verificationStatus|invalid|
|verificationStatus|pending|
|verificationStatus|rejected|
|verificationStatus|valid|

<h2 id="tocS_ActiveNetworkTokensRestriction">ActiveNetworkTokensRestriction</h2>
<!-- backwards compatibility -->
<a id="schemaactivenetworktokensrestriction"></a>
<a id="schema_ActiveNetworkTokensRestriction"></a>
<a id="tocSactivenetworktokensrestriction"></a>
<a id="tocsactivenetworktokensrestriction"></a>

```json
{
  "operation": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|integer(int32)|false|none|The number of tokens.|

<h2 id="tocS_AdditionalBankIdentification">AdditionalBankIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalbankidentification"></a>
<a id="schema_AdditionalBankIdentification"></a>
<a id="tocSadditionalbankidentification"></a>
<a id="tocsadditionalbankidentification"></a>

```json
{
  "code": "string",
  "type": "auBsbCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The value of the additional bank identification.|
|type|string|false|none|The type of additional bank identification, depending on the country.<br><br>Possible values:<br><br> * **auBsbCode**: The 6-digit [Australian Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or spaces.<br> * **caRoutingNumber**: The 9-digit [Canadian routing number](https://en.wikipedia.org/wiki/Routing_number_(Canada)), in EFT format, without separators or spaces.<br> * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces<br> * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|auBsbCode|
|type|caRoutingNumber|
|type|gbSortCode|
|type|usRoutingNumber|

<h2 id="tocS_AdditionalBankIdentificationRequirement">AdditionalBankIdentificationRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalbankidentificationrequirement"></a>
<a id="schema_AdditionalBankIdentificationRequirement"></a>
<a id="tocSadditionalbankidentificationrequirement"></a>
<a id="tocsadditionalbankidentificationrequirement"></a>

```json
{
  "additionalBankIdentificationType": "auBsbCode",
  "description": "string",
  "type": "additionalBankIdentificationRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalBankIdentificationType|string|false|none|The type of additional bank identification, depending on the country.<br><br>Possible values:<br><br> * **auBsbCode**: The 6-digit [Australian Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or spaces.<br> * **caRoutingNumber**: The 9-digit [Canadian routing number](https://en.wikipedia.org/wiki/Routing_number_(Canada)), in EFT format, without separators or spaces.<br> * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces<br> * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.|
|description|string|false|none|The description of the additional bank identification requirement.|
|type|string|true|none|**additionalBankIdentificationRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|additionalBankIdentificationType|auBsbCode|
|additionalBankIdentificationType|caRoutingNumber|
|additionalBankIdentificationType|gbSortCode|
|additionalBankIdentificationType|usRoutingNumber|
|type|additionalBankIdentificationRequirement|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "houseNumberOrName": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|The name of the city. Maximum length: 3000 characters.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|houseNumberOrName|string|true|none|The number or name of the house. Maximum length: 3000 characters.|
|postalCode|string|true|none|A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.|
|stateOrProvince|string|false|none|The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br>> Required for the US and Canada.|
|street|string|true|none|The name of the street. Maximum length: 3000 characters.<br>> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.|

<h2 id="tocS_AddressRequirement">AddressRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaaddressrequirement"></a>
<a id="schema_AddressRequirement"></a>
<a id="tocSaddressrequirement"></a>
<a id="tocsaddressrequirement"></a>

```json
{
  "description": "string",
  "requiredAddressFields": [
    "city"
  ],
  "type": "addressRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Specifies the required address related fields for a particular route.|
|requiredAddressFields|[string]|false|none|List of address fields.|
|type|string|true|none|**addressRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|requiredAddressFields|city|
|requiredAddressFields|country|
|requiredAddressFields|line1|
|requiredAddressFields|postalCode|
|requiredAddressFields|stateOrProvince|
|type|addressRequirement|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.|
|value|integer(int64)|true|none|The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).|

<h2 id="tocS_AmountMinMaxRequirement">AmountMinMaxRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaamountminmaxrequirement"></a>
<a id="schema_AmountMinMaxRequirement"></a>
<a id="tocSamountminmaxrequirement"></a>
<a id="tocsamountminmaxrequirement"></a>

```json
{
  "description": "string",
  "max": 0,
  "min": 0,
  "type": "amountMinMaxRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Specifies the eligible amounts for a particular route.|
|max|integer(int64)|false|none|Maximum amount.|
|min|integer(int64)|false|none|Minimum amount.|
|type|string|true|none|**amountMinMaxRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|amountMinMaxRequirement|

<h2 id="tocS_AmountNonZeroDecimalsRequirement">AmountNonZeroDecimalsRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaamountnonzerodecimalsrequirement"></a>
<a id="schema_AmountNonZeroDecimalsRequirement"></a>
<a id="tocSamountnonzerodecimalsrequirement"></a>
<a id="tocsamountnonzerodecimalsrequirement"></a>

```json
{
  "description": "string",
  "type": "amountNonZeroDecimalsRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Specifies for which routes the amount in a transfer request must have no non-zero decimal places, so the transfer can only be processed if the amount consists of round numbers.|
|type|string|true|none|**amountNonZeroDecimalsRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|amountNonZeroDecimalsRequirement|

<h2 id="tocS_AssociationDelegatedAuthenticationData">AssociationDelegatedAuthenticationData</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdelegatedauthenticationdata"></a>
<a id="schema_AssociationDelegatedAuthenticationData"></a>
<a id="tocSassociationdelegatedauthenticationdata"></a>
<a id="tocsassociationdelegatedauthenticationdata"></a>

```json
{
  "sdkOutput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkOutput|string|true|none|A base64-encoded block with the data required to authenticate the request. You obtain this information by using our authentication SDK.|

<h2 id="tocS_AssociationFinaliseRequest">AssociationFinaliseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociationfinaliserequest"></a>
<a id="schema_AssociationFinaliseRequest"></a>
<a id="tocSassociationfinaliserequest"></a>
<a id="tocsassociationfinaliserequest"></a>

```json
{
  "ids": [
    "string"
  ],
  "strongCustomerAuthentication": {
    "sdkOutput": "string"
  },
  "type": "PaymentInstrument"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|The list of unique identifiers of the resources that you are associating with the SCA device.<br><br>Maximum: 5 strings.|
|strongCustomerAuthentication|[AssociationDelegatedAuthenticationData](#schemaassociationdelegatedauthenticationdata)|true|none|Contains authentication information required to associate the resource with the SCA device.|
|type|string|true|none|The type of resource that you are associating with the SCA device.<br><br>Possible value: **PaymentInstrument**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PaymentInstrument|

<h2 id="tocS_AssociationFinaliseResponse">AssociationFinaliseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociationfinaliseresponse"></a>
<a id="schema_AssociationFinaliseResponse"></a>
<a id="tocSassociationfinaliseresponse"></a>
<a id="tocsassociationfinaliseresponse"></a>

```json
{
  "deviceId": "string",
  "ids": [
    "string"
  ],
  "type": "PAYMENT_INSTRUMENT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|The unique identifier of the SCA device you associated with a resource.|
|ids|[string]|false|none|The list of unique identifiers of the resources that you associated with the SCA device.|
|type|string|true|none|The type of resource that you associated with the SCA device.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PAYMENT_INSTRUMENT|

<h2 id="tocS_AssociationInitiateRequest">AssociationInitiateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociationinitiaterequest"></a>
<a id="schema_AssociationInitiateRequest"></a>
<a id="tocSassociationinitiaterequest"></a>
<a id="tocsassociationinitiaterequest"></a>

```json
{
  "ids": [
    "string"
  ],
  "type": "PaymentInstrument"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|The list of unique identifiers of the resources that you are associating with the SCA device.<br><br>Maximum: 5 strings.|
|type|string|true|none|The type of resource that you are associating with the SCA device.<br><br>Possible value: **PaymentInstrument**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PaymentInstrument|

<h2 id="tocS_AssociationInitiateResponse">AssociationInitiateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociationinitiateresponse"></a>
<a id="schema_AssociationInitiateResponse"></a>
<a id="tocSassociationinitiateresponse"></a>
<a id="tocsassociationinitiateresponse"></a>

```json
{
  "sdkInput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkInput|string|false|none|A string that you must pass to the authentication SDK to continue with the association process.|

<h2 id="tocS_Authentication">Authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_Authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
{
  "email": "string",
  "password": "string",
  "phone": {
    "number": "string",
    "type": "landline"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address where the one-time password (OTP) is sent.|
|password|string|false|none|The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.<br><br>* Characters between **a-z**, **A-Z**, and **0-9**<br><br>* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#'",;:$&àùòâôûáúó**|
|phone|[Phone](#schemaphone)|false|none|The phone number where the one-time password (OTP) is sent.<br><br>This object must have:<br><br>* A `type` set to **mobile**.<br><br>* A `number` with a valid country code.<br><br>* A `number` with more than 4 digits, excluding the country code.<br><br>>Make sure to verify that the card user owns the phone number.|

<h2 id="tocS_BRLocalAccountIdentification">BRLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemabrlocalaccountidentification"></a>
<a id="schema_BRLocalAccountIdentification"></a>
<a id="tocSbrlocalaccountidentification"></a>
<a id="tocsbrlocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bankCode": "str",
  "branchNumber": "stri",
  "ispb": "stringst",
  "type": "brLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|bankCode|string|true|none|The 3-digit bank code, with leading zeros.|
|branchNumber|string|true|none|The bank account branch number, without separators or whitespace.|
|ispb|string|false|none|The 8-digit ISPB, with leading zeros.|
|type|string|true|none|**brLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|brLocal|

<h2 id="tocS_Balance">Balance</h2>
<!-- backwards compatibility -->
<a id="schemabalance"></a>
<a id="schema_Balance"></a>
<a id="tocSbalance"></a>
<a id="tocsbalance"></a>

```json
{
  "available": 0,
  "balance": 0,
  "currency": "string",
  "pending": 0,
  "pendingAvailable": 0,
  "reserved": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|integer(int64)|true|none|The balance available for use.|
|balance|integer(int64)|true|none|The sum of the transactions that have already been settled.|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.|
|pending|integer(int64)|false|none|The sum of the transactions that will be settled in the future.|
|pendingAvailable|integer(int64)|false|none|The balance that will become the available balance after the pending balance is settled.<br><br>The pending available balance is equal to the lower of the following:<br>- The `pending` balance<br>- The `pending` balance plus the `available` balance.|
|reserved|integer(int64)|true|none|The balance currently held in reserve.|

<h2 id="tocS_BalanceAccount">BalanceAccount</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccount"></a>
<a id="schema_BalanceAccount"></a>
<a id="tocSbalanceaccount"></a>
<a id="tocsbalanceaccount"></a>

```json
{
  "accountHolderId": "string",
  "balances": [
    {
      "available": 0,
      "balance": 0,
      "currency": "string",
      "pending": 0,
      "pendingAvailable": 0,
      "reserved": 0
    }
  ],
  "defaultCurrencyCode": "string",
  "description": "string",
  "id": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "migratedAccountCode": "string",
  "platformPaymentConfiguration": {
    "salesDayClosingTime": "00:00:00Z",
    "settlementDelayDays": 0
  },
  "reference": "string",
  "status": "active",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.|
|balances|[[Balance](#schemabalance)]|false|none|List of balances with the amount and currency.|
|defaultCurrencyCode|string|false|none|The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. This is the currency displayed on the Balance Account overview page in your Customer Area.<br>The default value is **EUR**.<br>> After a balance account is created, you cannot change its default currency.|
|description|string|false|none|A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.|
|id|string|true|none|The unique identifier of the balance account.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|migratedAccountCode|string|false|read-only|The unique identifier of the account of the migrated account holder in the classic integration.|
|platformPaymentConfiguration|[PlatformPaymentConfiguration](#schemaplatformpaymentconfiguration)|false|none|Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.|
|reference|string|false|none|Your reference for the balance account, maximum 150 characters.|
|status|string|false|none|The status of the balance account, set to **active** by default. <br>|
|timeZone|string|false|none|The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|

<h2 id="tocS_BalanceAccountBase">BalanceAccountBase</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountbase"></a>
<a id="schema_BalanceAccountBase"></a>
<a id="tocSbalanceaccountbase"></a>
<a id="tocsbalanceaccountbase"></a>

```json
{
  "accountHolderId": "string",
  "defaultCurrencyCode": "string",
  "description": "string",
  "id": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "migratedAccountCode": "string",
  "platformPaymentConfiguration": {
    "salesDayClosingTime": "00:00:00Z",
    "settlementDelayDays": 0
  },
  "reference": "string",
  "status": "active",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.|
|defaultCurrencyCode|string|false|none|The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. This is the currency displayed on the Balance Account overview page in your Customer Area.<br>The default value is **EUR**.<br>> After a balance account is created, you cannot change its default currency.|
|description|string|false|none|A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.|
|id|string|true|none|The unique identifier of the balance account.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|migratedAccountCode|string|false|read-only|The unique identifier of the account of the migrated account holder in the classic integration.|
|platformPaymentConfiguration|[PlatformPaymentConfiguration](#schemaplatformpaymentconfiguration)|false|none|Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.|
|reference|string|false|none|Your reference for the balance account, maximum 150 characters.|
|status|string|false|none|The status of the balance account, set to **active** by default. <br>|
|timeZone|string|false|none|The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|

<h2 id="tocS_BalanceAccountInfo">BalanceAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountinfo"></a>
<a id="schema_BalanceAccountInfo"></a>
<a id="tocSbalanceaccountinfo"></a>
<a id="tocsbalanceaccountinfo"></a>

```json
{
  "accountHolderId": "string",
  "defaultCurrencyCode": "string",
  "description": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "migratedAccountCode": "string",
  "platformPaymentConfiguration": {
    "salesDayClosingTime": "00:00:00Z",
    "settlementDelayDays": 0
  },
  "reference": "string",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.|
|defaultCurrencyCode|string|false|none|The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. This is the currency displayed on the Balance Account overview page in your Customer Area.<br>The default value is **EUR**.<br>> After a balance account is created, you cannot change its default currency.|
|description|string|false|none|A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|migratedAccountCode|string|false|read-only|The unique identifier of the account of the migrated account holder in the classic integration.|
|platformPaymentConfiguration|[PlatformPaymentConfiguration](#schemaplatformpaymentconfiguration)|false|none|Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.|
|reference|string|false|none|Your reference for the balance account, maximum 150 characters.|
|timeZone|string|false|none|The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

<h2 id="tocS_BalanceAccountUpdateRequest">BalanceAccountUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountupdaterequest"></a>
<a id="schema_BalanceAccountUpdateRequest"></a>
<a id="tocSbalanceaccountupdaterequest"></a>
<a id="tocsbalanceaccountupdaterequest"></a>

```json
{
  "accountHolderId": "string",
  "description": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "platformPaymentConfiguration": {
    "salesDayClosingTime": "00:00:00Z",
    "settlementDelayDays": 0
  },
  "reference": "string",
  "status": "active",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|false|none|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.|
|description|string|false|none|A human-readable description of the balance account. You can use this parameter to distinguish between multiple balance accounts under an account holder.|
|metadata|object|false|none|A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|platformPaymentConfiguration|[PlatformPaymentConfiguration](#schemaplatformpaymentconfiguration)|false|none|Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.|
|reference|string|false|none|Your reference to the balance account.|
|status|string|false|none|The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.<br><br>Possible values: **active**, **closed**, **suspended**.|
|timeZone|string|false|none|The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|

<h2 id="tocS_BalancePlatform">BalancePlatform</h2>
<!-- backwards compatibility -->
<a id="schemabalanceplatform"></a>
<a id="schema_BalancePlatform"></a>
<a id="tocSbalanceplatform"></a>
<a id="tocsbalanceplatform"></a>

```json
{
  "description": "string",
  "id": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Your description of the balance platform.|
|id|string|true|none|The unique identifier of the balance platform.|
|status|string|false|none|The status of the balance platform.<br><br>Possible values: **Active**, **Inactive**, **Closed**, **Suspended**.|

<h2 id="tocS_BalanceSweepConfigurationsResponse">BalanceSweepConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalancesweepconfigurationsresponse"></a>
<a id="schema_BalanceSweepConfigurationsResponse"></a>
<a id="tocSbalancesweepconfigurationsresponse"></a>
<a id="tocsbalancesweepconfigurationsresponse"></a>

```json
{
  "hasNext": true,
  "hasPrevious": true,
  "sweeps": [
    {
      "category": "bank",
      "counterparty": {
        "balanceAccountId": "string",
        "merchantAccount": "string",
        "transferInstrumentId": "string"
      },
      "currency": "string",
      "description": "string",
      "id": "string",
      "priorities": [
        "crossBorder"
      ],
      "reason": "accountHierarchyNotActive",
      "reasonDetail": "string",
      "reference": "string",
      "referenceForBeneficiary": "string",
      "schedule": {
        "cronExpression": "string",
        "type": "daily"
      },
      "status": "active",
      "sweepAmount": {
        "currency": "string",
        "value": 0
      },
      "targetAmount": {
        "currency": "string",
        "value": 0
      },
      "triggerAmount": {
        "currency": "string",
        "value": 0
      },
      "type": "push"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasNext|boolean|true|none|Indicates whether there are more items on the next page.|
|hasPrevious|boolean|true|none|Indicates whether there are more items on the previous page.|
|sweeps|[[SweepConfigurationV2](#schemasweepconfigurationv2)]|true|none|List of sweeps associated with the balance account.|

<h2 id="tocS_BankAccount">BankAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankaccount"></a>
<a id="schema_BankAccount"></a>
<a id="tocSbankaccount"></a>
<a id="tocsbankaccount"></a>

```json
{
  "accountIdentification": {
    "accountNumber": "string",
    "bsbCode": "string",
    "type": "auLocal"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdentification|[AULocalAccountIdentification](#schemaaulocalaccountidentification) \| [BRLocalAccountIdentification](#schemabrlocalaccountidentification) \| [CALocalAccountIdentification](#schemacalocalaccountidentification) \| [CZLocalAccountIdentification](#schemaczlocalaccountidentification) \| [DKLocalAccountIdentification](#schemadklocalaccountidentification) \| [HKLocalAccountIdentification](#schemahklocalaccountidentification) \| [HULocalAccountIdentification](#schemahulocalaccountidentification) \| [IbanAccountIdentification](#schemaibanaccountidentification) \| [NOLocalAccountIdentification](#schemanolocalaccountidentification) \| [NZLocalAccountIdentification](#schemanzlocalaccountidentification) \| [NumberAndBicAccountIdentification](#schemanumberandbicaccountidentification) \| [PLLocalAccountIdentification](#schemapllocalaccountidentification) \| [SELocalAccountIdentification](#schemaselocalaccountidentification) \| [SGLocalAccountIdentification](#schemasglocalaccountidentification) \| [UKLocalAccountIdentification](#schemauklocalaccountidentification) \| [USLocalAccountIdentification](#schemauslocalaccountidentification)|true|none|Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.|

<h2 id="tocS_BankAccountDetails">BankAccountDetails</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountdetails"></a>
<a id="schema_BankAccountDetails"></a>
<a id="tocSbankaccountdetails"></a>
<a id="tocsbankaccountdetails"></a>

```json
{
  "accountNumber": "string",
  "accountType": "checking",
  "branchNumber": "string",
  "formFactor": "physical",
  "iban": "string",
  "routingNumber": "string",
  "sortCode": "string",
  "type": "iban"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|false|none|The bank account number, without separators or whitespace.|
|accountType|string|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|branchNumber|string|false|none|The bank account branch number, without separators or whitespace|
|formFactor|string|false|none|Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts. <br><br>Adyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.|
|iban|string|false|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|routingNumber|string|false|none|The [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.|
|sortCode|string|false|none|The [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.|
|type|string|true|none|**iban** or **usLocal** or **ukLocal**|

<h2 id="tocS_BankAccountIdentificationTypeRequirement">BankAccountIdentificationTypeRequirement</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountidentificationtyperequirement"></a>
<a id="schema_BankAccountIdentificationTypeRequirement"></a>
<a id="tocSbankaccountidentificationtyperequirement"></a>
<a id="tocsbankaccountidentificationtyperequirement"></a>

```json
{
  "bankAccountIdentificationTypes": [
    "auLocal"
  ],
  "description": "string",
  "type": "bankAccountIdentificationTypeRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccountIdentificationTypes|[string]|false|none|List of bank account identification types: eg.; [iban , numberAndBic]|
|description|string|false|none|Specifies the bank account details for a particular route per required field in this object depending on the country of the bank account and the currency of the transfer.|
|type|string|true|none|**bankAccountIdentificationTypeRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|bankAccountIdentificationTypes|auLocal|
|bankAccountIdentificationTypes|brLocal|
|bankAccountIdentificationTypes|caLocal|
|bankAccountIdentificationTypes|czLocal|
|bankAccountIdentificationTypes|dkLocal|
|bankAccountIdentificationTypes|hkLocal|
|bankAccountIdentificationTypes|huLocal|
|bankAccountIdentificationTypes|iban|
|bankAccountIdentificationTypes|inLocal|
|bankAccountIdentificationTypes|jpLocal|
|bankAccountIdentificationTypes|legacy|
|bankAccountIdentificationTypes|mxLocal|
|bankAccountIdentificationTypes|myLocal|
|bankAccountIdentificationTypes|noLocal|
|bankAccountIdentificationTypes|numberAndBic|
|bankAccountIdentificationTypes|nzLocal|
|bankAccountIdentificationTypes|plLocal|
|bankAccountIdentificationTypes|seLocal|
|bankAccountIdentificationTypes|sgLocal|
|bankAccountIdentificationTypes|ukLocal|
|bankAccountIdentificationTypes|usLocal|
|type|bankAccountIdentificationTypeRequirement|

<h2 id="tocS_BankAccountIdentificationValidationRequest">BankAccountIdentificationValidationRequest</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountidentificationvalidationrequest"></a>
<a id="schema_BankAccountIdentificationValidationRequest"></a>
<a id="tocSbankaccountidentificationvalidationrequest"></a>
<a id="tocsbankaccountidentificationvalidationrequest"></a>

```json
{
  "accountIdentification": {
    "accountNumber": "string",
    "bsbCode": "string",
    "type": "auLocal"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdentification|[AULocalAccountIdentification](#schemaaulocalaccountidentification) \| [BRLocalAccountIdentification](#schemabrlocalaccountidentification) \| [CALocalAccountIdentification](#schemacalocalaccountidentification) \| [CZLocalAccountIdentification](#schemaczlocalaccountidentification) \| [DKLocalAccountIdentification](#schemadklocalaccountidentification) \| [HKLocalAccountIdentification](#schemahklocalaccountidentification) \| [HULocalAccountIdentification](#schemahulocalaccountidentification) \| [IbanAccountIdentification](#schemaibanaccountidentification) \| [NOLocalAccountIdentification](#schemanolocalaccountidentification) \| [NZLocalAccountIdentification](#schemanzlocalaccountidentification) \| [NumberAndBicAccountIdentification](#schemanumberandbicaccountidentification) \| [PLLocalAccountIdentification](#schemapllocalaccountidentification) \| [SELocalAccountIdentification](#schemaselocalaccountidentification) \| [SGLocalAccountIdentification](#schemasglocalaccountidentification) \| [UKLocalAccountIdentification](#schemauklocalaccountidentification) \| [USLocalAccountIdentification](#schemauslocalaccountidentification)|true|none|Bank account identification.|

<h2 id="tocS_BankAccountModel">BankAccountModel</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountmodel"></a>
<a id="schema_BankAccountModel"></a>
<a id="tocSbankaccountmodel"></a>
<a id="tocsbankaccountmodel"></a>

```json
{
  "formFactor": "physical"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formFactor|string \| null|false|none|Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts. <br><br>Adyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|physical|
|formFactor|unknown|
|formFactor|virtual|

<h2 id="tocS_BankIdentification">BankIdentification</h2>
<!-- backwards compatibility -->
<a id="schemabankidentification"></a>
<a id="schema_BankIdentification"></a>
<a id="tocSbankidentification"></a>
<a id="tocsbankidentification"></a>

```json
{
  "country": "string",
  "identification": "string",
  "identificationType": "bic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|Two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.|
|identification|string|false|none|The bank identification code.|
|identificationType|string|false|none|The type of the identification.<br><br>Possible values: **iban**, **routingNumber**, **sortCode**, **bic**.|

#### Enumerated Values

|Property|Value|
|---|---|
|identificationType|bic|
|identificationType|iban|
|identificationType|routingNumber|
|identificationType|sortCode|

<h2 id="tocS_BrandVariantsRestriction">BrandVariantsRestriction</h2>
<!-- backwards compatibility -->
<a id="schemabrandvariantsrestriction"></a>
<a id="schema_BrandVariantsRestriction"></a>
<a id="tocSbrandvariantsrestriction"></a>
<a id="tocsbrandvariantsrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|List of card brand variants.<br><br>Possible values: <br><br>- **mc**, **mccredit**, **mccommercialcredit_b2b**, **mcdebit**, **mcbusinessdebit**, **mcbusinessworlddebit**, **mcprepaid**, **mcmaestro**<br><br> - **visa**, **visacredit**, **visadebit**, **visaprepaid**.<br><br>You can specify a rule for a generic variant. For example, to create a rule for all Mastercard payment instruments, use **mc**. The rule is applied to all payment instruments under **mc**, such as **mcbusinessdebit** and **mcdebit**.<br><br>|

<h2 id="tocS_BulkAddress">BulkAddress</h2>
<!-- backwards compatibility -->
<a id="schemabulkaddress"></a>
<a id="schema_BulkAddress"></a>
<a id="tocSbulkaddress"></a>
<a id="tocsbulkaddress"></a>

```json
{
  "city": "string",
  "company": "string",
  "country": "string",
  "email": "string",
  "houseNumberOrName": "string",
  "line1": "string",
  "line2": "string",
  "line3": "string",
  "mobile": "string",
  "name": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.|
|company|string|false|none|The name of the company.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.|
|email|string|false|none|The email address.|
|houseNumberOrName|string|false|none|The house number or name.|
|line1|string|false|none|The name of the street and the number of the building.<br><br>For example: **Simon Carmiggeltstraat 6-50**.|
|line2|string|false|none|Additional information about the delivery address. For example, an apartment number.|
|line3|string|false|none|Additional information about the delivery address.|
|mobile|string|false|none|The full telephone number.|
|name|string|false|none|The recipient’s name (person or contact), for example ‘John Doe’.|
|postalCode|string|false|none|The postal code.<br><br>Maximum length:<br><br>* 5 digits for addresses in the US.<br><br>* 10 characters for all other countries.|
|stateOrProvince|string|false|none|The two-letter ISO 3166-2 state or province code.<br><br>Maximum length: 2 characters for addresses in the US.|
|street|string|false|none|The streetname of the house.|

<h2 id="tocS_CALocalAccountIdentification">CALocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemacalocalaccountidentification"></a>
<a id="schema_CALocalAccountIdentification"></a>
<a id="tocScalocalaccountidentification"></a>
<a id="tocscalocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "accountType": "checking",
  "institutionNumber": "str",
  "transitNumber": "strin",
  "type": "caLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 5- to 12-digit bank account number, without separators or whitespace.|
|accountType|string|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|institutionNumber|string|true|none|The 3-digit institution number, without separators or whitespace.|
|transitNumber|string|true|none|The 5-digit transit number, without separators or whitespace.|
|type|string|true|none|**caLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|checking|
|accountType|savings|
|type|caLocal|

<h2 id="tocS_CZLocalAccountIdentification">CZLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaczlocalaccountidentification"></a>
<a id="schema_CZLocalAccountIdentification"></a>
<a id="tocSczlocalaccountidentification"></a>
<a id="tocsczlocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bankCode": "stri",
  "type": "czLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 2- to 16-digit bank account number (Číslo účtu) in the following format:<br><br>- The optional prefix (předčíslí).<br><br>- The required second part (základní část) which must be at least two non-zero digits.<br><br>Examples:<br><br>- **19-123457** (with prefix)<br><br>- **123457** (without prefix)<br><br>- **000019-0000123457** (with prefix, normalized)<br><br>- **000000-0000123457** (without prefix, normalized)|
|bankCode|string|true|none|The 4-digit bank code (Kód banky), without separators or whitespace.|
|type|string|true|none|**czLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|czLocal|

<h2 id="tocS_CapabilityProblem">CapabilityProblem</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblem"></a>
<a id="schema_CapabilityProblem"></a>
<a id="tocScapabilityproblem"></a>
<a id="tocscapabilityproblem"></a>

```json
{
  "entity": {
    "documents": [
      "string"
    ],
    "id": "string",
    "owner": {
      "documents": [
        "string"
      ],
      "id": "string",
      "type": "BankAccount"
    },
    "type": "BankAccount"
  },
  "verificationErrors": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "code": "string",
      "message": "string",
      "remediatingActions": [
        {
          "code": "string",
          "message": "string"
        }
      ],
      "subErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "type": "dataMissing",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ]
        }
      ],
      "type": "dataMissing"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[CapabilityProblemEntity](#schemacapabilityproblementity)|false|none|Contains the type of the entity and the corresponding ID.|
|verificationErrors|[[VerificationError](#schemaverificationerror)]|false|none|Contains information about the verification error.|

<h2 id="tocS_CapabilityProblemEntity">CapabilityProblemEntity</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblementity"></a>
<a id="schema_CapabilityProblemEntity"></a>
<a id="tocScapabilityproblementity"></a>
<a id="tocscapabilityproblementity"></a>

```json
{
  "documents": [
    "string"
  ],
  "id": "string",
  "owner": {
    "documents": [
      "string"
    ],
    "id": "string",
    "type": "BankAccount"
  },
  "type": "BankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[string]|false|none|List of document IDs to which the verification errors related to the capabilities correspond to.|
|id|string|false|none|The ID of the entity.|
|owner|[CapabilityProblemEntity-recursive](#schemacapabilityproblementity-recursive)|false|none|Contains details about the owner of the entity that has an error.|
|type|string|false|none|Type of entity. <br><br>Possible values: **LegalEntity**, **BankAccount**, **Document**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BankAccount|
|type|Document|
|type|LegalEntity|

<h2 id="tocS_CapabilityProblemEntity-recursive">CapabilityProblemEntity-recursive</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblementity-recursive"></a>
<a id="schema_CapabilityProblemEntity-recursive"></a>
<a id="tocScapabilityproblementity-recursive"></a>
<a id="tocscapabilityproblementity-recursive"></a>

```json
{
  "documents": [
    "string"
  ],
  "id": "string",
  "type": "BankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[string]|false|none|List of document IDs to which the verification errors related to the capabilities correspond to.|
|id|string|false|none|The ID of the entity.|
|type|string|false|none|Type of entity. <br><br>Possible values: **LegalEntity**, **BankAccount**, **Document**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BankAccount|
|type|Document|
|type|LegalEntity|

<h2 id="tocS_CapabilitySettings">CapabilitySettings</h2>
<!-- backwards compatibility -->
<a id="schemacapabilitysettings"></a>
<a id="schema_CapabilitySettings"></a>
<a id="tocScapabilitysettings"></a>
<a id="tocscapabilitysettings"></a>

```json
{
  "amountPerIndustry": {
    "property1": {
      "currency": "string",
      "value": 0
    },
    "property2": {
      "currency": "string",
      "value": 0
    }
  },
  "authorizedCardUsers": true,
  "fundingSource": [
    "credit"
  ],
  "interval": "daily",
  "maxAmount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountPerIndustry|object|false|none|none|
|authorizedCardUsers|boolean|false|none|none|
|fundingSource|[string]|false|none|none|
|interval|string|false|none|none|
|maxAmount|[Amount](#schemaamount)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|interval|daily|
|interval|monthly|
|interval|weekly|

<h2 id="tocS_CapitalBalance">CapitalBalance</h2>
<!-- backwards compatibility -->
<a id="schemacapitalbalance"></a>
<a id="schema_CapitalBalance"></a>
<a id="tocScapitalbalance"></a>
<a id="tocscapitalbalance"></a>

```json
{
  "currency": "string",
  "fee": 0,
  "principal": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|fee|integer(int64)|true|none|Fee amount.|
|principal|integer(int64)|true|none|Principal amount.|
|total|integer(int64)|true|none|Total amount. A sum of principal amount and fee amount.|

<h2 id="tocS_CapitalGrantAccount">CapitalGrantAccount</h2>
<!-- backwards compatibility -->
<a id="schemacapitalgrantaccount"></a>
<a id="schema_CapitalGrantAccount"></a>
<a id="tocScapitalgrantaccount"></a>
<a id="tocscapitalgrantaccount"></a>

```json
{
  "balances": [
    {
      "currency": "string",
      "fee": 0,
      "principal": 0,
      "total": 0
    }
  ],
  "fundingBalanceAccountId": "string",
  "id": "string",
  "limits": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[[CapitalBalance](#schemacapitalbalance)]|false|none|The balances of the grant account.|
|fundingBalanceAccountId|string|false|none|The unique identifier of the balance account used to fund the grant.|
|id|string|false|none|The identifier of the grant account.|
|limits|[[GrantLimit](#schemagrantlimit)]|false|none|The limits of the grant account.|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "authentication": {
    "email": "string",
    "password": "string",
    "phone": {
      "number": "string",
      "type": "landline"
    }
  },
  "bin": "string",
  "brand": "string",
  "brandVariant": "string",
  "cardholderName": "string",
  "configuration": {
    "activation": "string",
    "activationUrl": "string",
    "bulkAddress": {
      "city": "string",
      "company": "string",
      "country": "string",
      "email": "string",
      "houseNumberOrName": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "mobile": "string",
      "name": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "cardImageId": "string",
    "carrier": "string",
    "carrierImageId": "string",
    "configurationProfileId": "string",
    "currency": "string",
    "envelope": "string",
    "insert": "string",
    "language": "string",
    "logoImageId": "string",
    "pinMailer": "string",
    "printLine": "string",
    "shipmentMethod": "string"
  },
  "cvc": "string",
  "deliveryContact": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "company": "string",
    "email": "string",
    "fullPhoneNumber": "string",
    "name": {
      "firstName": "string",
      "lastName": "string"
    },
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "webAddress": "string"
  },
  "expiration": {
    "month": "string",
    "year": "string"
  },
  "formFactor": "physical",
  "lastFour": "string",
  "number": "string",
  "threeDSecure": "string",
  "usage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[Authentication](#schemaauthentication)|false|none|Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.|
|bin|string|false|none|The bank identification number (BIN) of the card number.|
|brand|string|true|none|The brand of the physical or the virtual card.<br>Possible values: **visa**, **mc**.|
|brandVariant|string|true|none|The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.<br>>Reach out to your Adyen contact to get the values relevant for your integration.|
|cardholderName|string|true|none|The name of the cardholder.<br> Maximum length: 26 characters.|
|configuration|[CardConfiguration](#schemacardconfiguration)|false|none|Contains information about the configuration profile for your cards. The configuration profile consists of settings required when creating a physical or a virtual card. You identify a configuration profile with its `configurationProfileId`.<br><br>When you provide this field in a request, you can override the settings of an existing configuration profile.<br><br>Reach out to your Adyen contact to get the values that you can send in this object.|
|cvc|string|false|none|The CVC2 value of the card.<br>> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.|
|deliveryContact|[DeliveryContact](#schemadeliverycontact)|false|none|The delivery contact (name and address) for physical card delivery.|
|expiration|[Expiry](#schemaexpiry)|false|none|The expiration date of the card.|
|formFactor|string|true|none|The form factor of the card.<br>Possible values: **virtual**, **physical**.|
|lastFour|string|false|none|Last last four digits of the card number.|
|number|string|false|read-only|The primary account number (PAN) of the card.<br>> The PAN is masked by default and returned only for single-use virtual cards.|
|threeDSecure|string|false|none|The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.<br>> Reach out to your Adyen contact to get the values relevant for your integration.|
|usage|string|false|none|Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.<br><br>> Reach out to your Adyen contact to determine the value relevant for your integration.|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|physical|
|formFactor|unknown|
|formFactor|virtual|

<h2 id="tocS_CardConfiguration">CardConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacardconfiguration"></a>
<a id="schema_CardConfiguration"></a>
<a id="tocScardconfiguration"></a>
<a id="tocscardconfiguration"></a>

```json
{
  "activation": "string",
  "activationUrl": "string",
  "bulkAddress": {
    "city": "string",
    "company": "string",
    "country": "string",
    "email": "string",
    "houseNumberOrName": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "mobile": "string",
    "name": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "cardImageId": "string",
  "carrier": "string",
  "carrierImageId": "string",
  "configurationProfileId": "string",
  "currency": "string",
  "envelope": "string",
  "insert": "string",
  "language": "string",
  "logoImageId": "string",
  "pinMailer": "string",
  "printLine": "string",
  "shipmentMethod": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activation|string|false|none|The activation label attached to the card that contains the activation instructions.<br><br>This field overrides the activation label design ID defined in the card configuration profile.|
|activationUrl|string|false|none|Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process. <br><br>Maximum length: 255 characters.|
|bulkAddress|[BulkAddress](#schemabulkaddress)|false|none|Overrides the shipment bulk address defined in the card configuration profile.|
|cardImageId|string|false|none|The unique identifier of the card image. This image is printed on the full front of the card.|
|carrier|string|false|none|The letter or packaging to which the card is attached.<br><br>This field overrides the carrier design ID defined in the card configuration profile. |
|carrierImageId|string|false|none|The unique identifier of the carrier image. This image is printed on the letter to which the card is attached.|
|configurationProfileId|string|true|none|The unique identifier of the card configuration profile that contains the settings that are applied to the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment.<br><br>You can override some of the existing settings in the configuration profile by providing the corresponding fields in the `configuration` object. For example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.|
|currency|string|false|none|The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.<br><br>This field overrides the existing currency setting on the card configuration profile.|
|envelope|string|false|none|Overrides the envelope design ID defined in the card configuration profile. |
|insert|string|false|none|Any additional material, such as marketing material, that is shipped together with the card.<br><br>This field overrides the insert design ID defined in the card configuration profile.|
|language|string|false|none|The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the card. For example, **en**.|
|logoImageId|string|false|none|The unique identifier of the logo image. This image is printed on the partial front of the card, for example, a logo on the upper right corner.|
|pinMailer|string|false|none|The letter on which the PIN of the card is printed.<br><br>This field overrides the PIN mailer design ID defined in the card configuration profile.|
|printLine|string|false|none|Print Line.<br><br>Text printed on the physical card below the cardholder name. You provide the value, which can be up to 26 characters.|
|shipmentMethod|string|false|none|The logistics company that ships the card.<br><br>This field overrides the logistics company defined in the card configuration profile.|

<h2 id="tocS_CardInfo">CardInfo</h2>
<!-- backwards compatibility -->
<a id="schemacardinfo"></a>
<a id="schema_CardInfo"></a>
<a id="tocScardinfo"></a>
<a id="tocscardinfo"></a>

```json
{
  "authentication": {
    "email": "string",
    "password": "string",
    "phone": {
      "number": "string",
      "type": "landline"
    }
  },
  "brand": "string",
  "brandVariant": "string",
  "cardholderName": "string",
  "configuration": {
    "activation": "string",
    "activationUrl": "string",
    "bulkAddress": {
      "city": "string",
      "company": "string",
      "country": "string",
      "email": "string",
      "houseNumberOrName": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "mobile": "string",
      "name": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "cardImageId": "string",
    "carrier": "string",
    "carrierImageId": "string",
    "configurationProfileId": "string",
    "currency": "string",
    "envelope": "string",
    "insert": "string",
    "language": "string",
    "logoImageId": "string",
    "pinMailer": "string",
    "printLine": "string",
    "shipmentMethod": "string"
  },
  "deliveryContact": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "company": "string",
    "email": "string",
    "fullPhoneNumber": "string",
    "name": {
      "firstName": "string",
      "lastName": "string"
    },
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "webAddress": "string"
  },
  "formFactor": "physical",
  "threeDSecure": "string",
  "usage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[Authentication](#schemaauthentication)|false|none|Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.|
|brand|string|true|none|The brand of the physical or the virtual card.<br>Possible values: **visa**, **mc**.|
|brandVariant|string|true|none|The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.<br>>Reach out to your Adyen contact to get the values relevant for your integration.|
|cardholderName|string|true|none|The name of the cardholder.<br> Maximum length: 26 characters.|
|configuration|[CardConfiguration](#schemacardconfiguration)|false|none|Contains information about the configuration profile for your cards. The configuration profile consists of settings required when creating a physical or a virtual card. You identify a configuration profile with its `configurationProfileId`.<br><br>When you provide this field in a request, you can override the settings of an existing configuration profile.<br><br>Reach out to your Adyen contact to get the values that you can send in this object.|
|deliveryContact|[DeliveryContact](#schemadeliverycontact)|false|none|The delivery contact (name and address) for physical card delivery.|
|formFactor|string|true|none|The form factor of the card.<br>Possible values: **virtual**, **physical**.|
|threeDSecure|string|false|none|The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.<br>> Reach out to your Adyen contact to get the values relevant for your integration.|
|usage|string|false|none|Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.<br><br>> Reach out to your Adyen contact to determine the value relevant for your integration.|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|physical|
|formFactor|unknown|
|formFactor|virtual|

<h2 id="tocS_CardOrder">CardOrder</h2>
<!-- backwards compatibility -->
<a id="schemacardorder"></a>
<a id="schema_CardOrder"></a>
<a id="tocScardorder"></a>
<a id="tocscardorder"></a>

```json
{
  "beginDate": "1970-01-01T00:00:00Z",
  "cardManufacturingProfileId": "string",
  "closedDate": "1970-01-01T00:00:00Z",
  "endDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "lockDate": "1970-01-01T00:00:00Z",
  "serviceCenter": "string",
  "status": "closed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beginDate|string(date-time)|false|none|The date when the card order is created.|
|cardManufacturingProfileId|string|false|none|The unique identifier of the card manufacturer profile.|
|closedDate|string(date-time)|false|none|The date when the card order processing ends.|
|endDate|string(date-time)|false|none|The date when you manually closed the card order.<br><br>Card orders are automatically closed by the end of the day it was created. If you manually closed it beforehand, the closing date is shown as the `endDate`.|
|id|string|false|none|The unique identifier of the card order.|
|lockDate|string(date-time)|false|none|The date when the card order processing begins.|
|serviceCenter|string|false|none|The service center.|
|status|string|false|none|The status of the card order.<br><br>Possible values: **Open**, **Closed**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|closed|
|status|open|

<h2 id="tocS_CardOrderItem">CardOrderItem</h2>
<!-- backwards compatibility -->
<a id="schemacardorderitem"></a>
<a id="schema_CardOrderItem"></a>
<a id="tocScardorderitem"></a>
<a id="tocscardorderitem"></a>

```json
{
  "balancePlatform": "string",
  "card": {
    "errorMessage": "string",
    "status": "created",
    "trackingNumber": "string"
  },
  "cardOrderItemId": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "paymentInstrumentId": "string",
  "pin": {
    "errorMessage": "string",
    "status": "created",
    "trackingNumber": "string"
  },
  "shippingMethod": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|card|[CardOrderItemDeliveryStatus](#schemacardorderitemdeliverystatus)|false|none|The status of the card delivery.<br><br>Possible values: **created**, **rejected**, **processing**, **produced**, **shipped**, **delivered**, **notApplicable**, **unknown**. |
|cardOrderItemId|string|false|none|The unique identifier of the card order item.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|read-only|The ID of the resource.|
|paymentInstrumentId|string|false|none|The unique identifier of the payment instrument related to the card order item.|
|pin|[CardOrderItemDeliveryStatus](#schemacardorderitemdeliverystatus)|false|none|Contains information about the status of the PIN delivery.|
|shippingMethod|string|false|none|The shipping method used to deliver the card or the PIN.|

<h2 id="tocS_CardOrderItemDeliveryStatus">CardOrderItemDeliveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemacardorderitemdeliverystatus"></a>
<a id="schema_CardOrderItemDeliveryStatus"></a>
<a id="tocScardorderitemdeliverystatus"></a>
<a id="tocscardorderitemdeliverystatus"></a>

```json
{
  "errorMessage": "string",
  "status": "created",
  "trackingNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|An error message.|
|status|string|false|none|The status of the PIN delivery.|
|trackingNumber|string|false|none|The tracking number of the PIN delivery.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|created|
|status|delivered|
|status|notApplicable|
|status|processing|
|status|produced|
|status|rejected|
|status|shipped|
|status|unknown|

<h2 id="tocS_ContactDetails">ContactDetails</h2>
<!-- backwards compatibility -->
<a id="schemacontactdetails"></a>
<a id="schema_ContactDetails"></a>
<a id="tocScontactdetails"></a>
<a id="tocscontactdetails"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "email": "string",
  "phone": {
    "number": "string",
    "type": "landline"
  },
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|The address of the account holder.|
|email|string|true|none|The email address of the account holder.|
|phone|[Phone](#schemaphone)|true|none|The phone number of the account holder.|
|webAddress|string|false|none|The URL of the account holder's website.|

<h2 id="tocS_Counterparty">Counterparty</h2>
<!-- backwards compatibility -->
<a id="schemacounterparty"></a>
<a id="schema_Counterparty"></a>
<a id="tocScounterparty"></a>
<a id="tocscounterparty"></a>

```json
{
  "bankAccount": {
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    }
  },
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccount|[BankAccount](#schemabankaccount)|false|none|Contains information about the bank account.|
|transferInstrumentId|string|false|none|The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).|

<h2 id="tocS_CounterpartyBankRestriction">CounterpartyBankRestriction</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartybankrestriction"></a>
<a id="schema_CounterpartyBankRestriction"></a>
<a id="tocScounterpartybankrestriction"></a>
<a id="tocscounterpartybankrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    {
      "country": "string",
      "identification": "string",
      "identificationType": "bic"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[[BankIdentification](#schemabankidentification)]|false|none|The list of counterparty bank institutions to be evaluated.|

<h2 id="tocS_CounterpartyTypesRestriction">CounterpartyTypesRestriction</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartytypesrestriction"></a>
<a id="schema_CounterpartyTypesRestriction"></a>
<a id="tocScounterpartytypesrestriction"></a>
<a id="tocscounterpartytypesrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "balanceAccount"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|The list of counterparty types to be evaluated.|

#### Enumerated Values

|Property|Value|
|---|---|
|value|balanceAccount|
|value|bankAccount|
|value|card|
|value|transferInstrument|

<h2 id="tocS_CountriesRestriction">CountriesRestriction</h2>
<!-- backwards compatibility -->
<a id="schemacountriesrestriction"></a>
<a id="schema_CountriesRestriction"></a>
<a id="tocScountriesrestriction"></a>
<a id="tocscountriesrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|List of two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.|

<h2 id="tocS_CreateSweepConfigurationV2">CreateSweepConfigurationV2</h2>
<!-- backwards compatibility -->
<a id="schemacreatesweepconfigurationv2"></a>
<a id="schema_CreateSweepConfigurationV2"></a>
<a id="tocScreatesweepconfigurationv2"></a>
<a id="tocscreatesweepconfigurationv2"></a>

```json
{
  "category": "bank",
  "counterparty": {
    "balanceAccountId": "string",
    "merchantAccount": "string",
    "transferInstrumentId": "string"
  },
  "currency": "string",
  "description": "string",
  "priorities": [
    "crossBorder"
  ],
  "reason": "accountHierarchyNotActive",
  "reasonDetail": "string",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "schedule": {
    "cronExpression": "string",
    "type": "daily"
  },
  "status": "active",
  "sweepAmount": {
    "currency": "string",
    "value": 0
  },
  "targetAmount": {
    "currency": "string",
    "value": 0
  },
  "triggerAmount": {
    "currency": "string",
    "value": 0
  },
  "type": "push"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The type of transfer that results from the sweep.<br><br>Possible values:<br><br> - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).<br><br>- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.<br><br>Required when setting `priorities`.|
|counterparty|[SweepCounterparty](#schemasweepcounterparty)|true|none|The destination or the source of the funds, depending on the sweep `type`.<br><br>Either a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.<br><br>The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).|
|description|string|false|none|The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message will be cut off at 140 characters.|
|priorities|[string]|false|none|The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities, ordered by your preference. Adyen will try to pay out using the priorities in the given order. If the first priority is not currently supported or enabled for your platform, the system will try the next one, and so on.<br><br>The request will be accepted as long as **at least one** of the provided priorities is valid (i.e., supported by Adyen and activated for your platform). For example, if you provide `["wire","regular"]`, and `wire` is not supported but `regular` is, the request will still be accepted and processed.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Set `category` to **bank**. For more details, see optional priorities setup for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/scheduled-payouts#optional-priorities-setup) or [platforms](https://docs.adyen.com/platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).|
|reason|string|false|read-only|The reason for disabling the sweep.|
|reasonDetail|string|false|read-only|The human readable reason for disabling the sweep.|
|reference|string|false|none|Your reference for the sweep configuration.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty. Only alphanumeric characters are allowed.|
|schedule|[SweepSchedule](#schemasweepschedule)|true|none|The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.|
|status|string|false|none|The status of the sweep. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. <br><br> * **inactive**: the sweep is disabled and cannot be triggered. <br><br>|
|sweepAmount|[Amount](#schemaamount)|false|none|The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.|
|targetAmount|[Amount](#schemaamount)|false|none|The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.|
|triggerAmount|[Amount](#schemaamount)|false|none|The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.<br><br>* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.<br><br>* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.|
|type|string|false|none|The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.<br><br>Possible values:<br><br> * **push**: _push out funds_ to a destination balance account or transfer instrument.<br><br> * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|internal|
|category|platformPayment|
|priorities|crossBorder|
|priorities|fast|
|priorities|instant|
|priorities|internal|
|priorities|regular|
|priorities|wire|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approved|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|directDebitNotSupported|
|reason|error|
|reason|notEnoughBalance|
|reason|refusedByCounterpartyBank|
|reason|routeNotFound|
|reason|transferInstrumentDoesNotExist|
|reason|unknown|
|status|active|
|status|inactive|
|type|pull|
|type|push|

<h2 id="tocS_DKLocalAccountIdentification">DKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemadklocalaccountidentification"></a>
<a id="schema_DKLocalAccountIdentification"></a>
<a id="tocSdklocalaccountidentification"></a>
<a id="tocsdklocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bankCode": "stri",
  "type": "dkLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).|
|bankCode|string|true|none|The 4-digit bank code (Registreringsnummer) (without separators or whitespace).|
|type|string|true|none|**dkLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dkLocal|

<h2 id="tocS_DayOfWeekRestriction">DayOfWeekRestriction</h2>
<!-- backwards compatibility -->
<a id="schemadayofweekrestriction"></a>
<a id="schema_DayOfWeekRestriction"></a>
<a id="tocSdayofweekrestriction"></a>
<a id="tocsdayofweekrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "friday"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|List of days of the week.<br><br>Possible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|value|friday|
|value|monday|
|value|saturday|
|value|sunday|
|value|thursday|
|value|tuesday|
|value|wednesday|

<h2 id="tocS_DelegatedAuthenticationData">DelegatedAuthenticationData</h2>
<!-- backwards compatibility -->
<a id="schemadelegatedauthenticationdata"></a>
<a id="schema_DelegatedAuthenticationData"></a>
<a id="tocSdelegatedauthenticationdata"></a>
<a id="tocsdelegatedauthenticationdata"></a>

```json
{
  "sdkOutput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkOutput|string|true|none|A base64-encoded block with the data required to register the SCA device. You obtain this information by using our authentication SDK.|

<h2 id="tocS_DeliveryAddress">DeliveryAddress</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryaddress"></a>
<a id="schema_DeliveryAddress"></a>
<a id="tocSdeliveryaddress"></a>
<a id="tocsdeliveryaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "line1": "string",
  "line2": "string",
  "line3": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br>>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|line1|string|false|none|The name of the street. Do not include the number of the building.<br><br>For example, if the address is Simon Carmiggeltstraat 6-50, provide **Simon Carmiggeltstraat**.|
|line2|string|false|none|The number of the building.<br><br>For example, if the address is Simon Carmiggeltstraat 6-50, provide **6-50**.|
|line3|string|false|none|Additional information about the delivery address.|
|postalCode|string|false|none|The postal code.<br>Maximum length:<br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries.|
|stateOrProvince|string|false|none|The state or province code, maximum 3 characters. For example, **CA** for California in the US or **ON** for Ontario in Canada.<br>> Required for the US and Canada.|

<h2 id="tocS_DeliveryContact">DeliveryContact</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycontact"></a>
<a id="schema_DeliveryContact"></a>
<a id="tocSdeliverycontact"></a>
<a id="tocsdeliverycontact"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "company": "string",
  "email": "string",
  "fullPhoneNumber": "string",
  "name": {
    "firstName": "string",
    "lastName": "string"
  },
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[DeliveryAddress](#schemadeliveryaddress)|true|none|The address of the contact.|
|company|string|false|none|The company name of the contact.|
|email|string|false|none|The email address of the contact.|
|fullPhoneNumber|string|false|none|The full phone number of the contact provided as a single string. It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|name|[Name](#schemaname)|true|none|The name of the contact.|
|phoneNumber|[PhoneNumber](#schemaphonenumber)|false|none|The phone number of the contact.|
|webAddress|string|false|none|The URL of the contact's website.|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "id": "string",
  "name": "string",
  "paymentInstrumentId": "string",
  "type": "ios"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the SCA device.|
|name|string|false|none|The name of the SCA device. You can show this name to your user to help them identify the device.|
|paymentInstrumentId|string|false|none|The unique identifier of the payment instrument that is associated with the SCA device.|
|type|string|false|none|The type of device.<br><br>Possible values: **ios**, **android**, **browser**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ios|
|type|android|
|type|browser|

<h2 id="tocS_DeviceInfo">DeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinfo"></a>
<a id="schema_DeviceInfo"></a>
<a id="tocSdeviceinfo"></a>
<a id="tocsdeviceinfo"></a>

```json
{
  "formFactor": "string",
  "osName": "string",
  "phone": {
    "hashedNumber": "string",
    "lastFourDigits": "string",
    "number": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formFactor|string|false|none|The type of device used to provision the network token.|
|osName|string|false|none|The operating system of the device used to provision the network token.|
|phone|[PhoneInfo](#schemaphoneinfo)|false|none|The information about the phone number of the device used to provision the the network token. This object is conditionally returned and is available for up to 24 hours after the provisioning request (access to this field requires a specific user role, please contact your Adyen representative to request permission).|

<h2 id="tocS_DifferentCurrenciesRestriction">DifferentCurrenciesRestriction</h2>
<!-- backwards compatibility -->
<a id="schemadifferentcurrenciesrestriction"></a>
<a id="schema_DifferentCurrenciesRestriction"></a>
<a id="tocSdifferentcurrenciesrestriction"></a>
<a id="tocsdifferentcurrenciesrestriction"></a>

```json
{
  "operation": "string",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|boolean|false|none|Checks the currency of the payment against the currency of the payment instrument.<br><br>Possible values:<br><br>- **true**: The currency of the payment is different from the currency of the payment instrument.<br><br>- **false**: The currencies are the same.<br><br>|

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
{
  "unit": "days",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|false|none|The unit of time. You can only use **minutes** and **hours** if the `interval.type` is **sliding**.<br><br>Possible values: **minutes**, **hours**, **days**, **weeks**, or **months**|
|value|integer(int32)|false|none|The length of time by the unit. For example, 5 days.<br><br>The maximum duration is 90 days or an equivalent in other units. For example, 3 months.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|days|
|unit|hours|
|unit|minutes|
|unit|months|
|unit|weeks|

<h2 id="tocS_EntryModesRestriction">EntryModesRestriction</h2>
<!-- backwards compatibility -->
<a id="schemaentrymodesrestriction"></a>
<a id="schema_EntryModesRestriction"></a>
<a id="tocSentrymodesrestriction"></a>
<a id="tocsentrymodesrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "barcode"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|List of point-of-sale entry modes.<br><br>Possible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|value|barcode|
|value|chip|
|value|cof|
|value|contactless|
|value|magstripe|
|value|manual|
|value|ocr|
|value|server|
|value|unknown|

<h2 id="tocS_Expiry">Expiry</h2>
<!-- backwards compatibility -->
<a id="schemaexpiry"></a>
<a id="schema_Expiry"></a>
<a id="tocSexpiry"></a>
<a id="tocsexpiry"></a>

```json
{
  "month": "string",
  "year": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|string|false|none|The month in which the card will expire.|
|year|string|false|none|The year in which the card will expire.|

<h2 id="tocS_Fee">Fee</h2>
<!-- backwards compatibility -->
<a id="schemafee"></a>
<a id="schema_Fee"></a>
<a id="tocSfee"></a>
<a id="tocsfee"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|Contains the fee amount.|

<h2 id="tocS_GetNetworkTokenResponse">GetNetworkTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworktokenresponse"></a>
<a id="schema_GetNetworkTokenResponse"></a>
<a id="tocSgetnetworktokenresponse"></a>
<a id="tocsgetnetworktokenresponse"></a>

```json
{
  "token": {
    "brandVariant": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "device": {
      "formFactor": "string",
      "osName": "string",
      "phone": {
        "hashedNumber": "string",
        "lastFourDigits": "string",
        "number": "string"
      }
    },
    "id": "string",
    "paymentInstrumentId": "string",
    "status": "active",
    "tokenLastFour": "string",
    "tokenRequestor": {
      "id": "string",
      "name": "string"
    },
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[NetworkToken](#schemanetworktoken)|true|none|The details of the network token.|

<h2 id="tocS_GetTaxFormResponse">GetTaxFormResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettaxformresponse"></a>
<a id="schema_GetTaxFormResponse"></a>
<a id="tocSgettaxformresponse"></a>
<a id="tocsgettaxformresponse"></a>

```json
{
  "content": "string",
  "contentType": "application/pdf"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|true|none|The content of the tax form in Base64 format.|
|contentType|string|false|none|The content type of the tax form.<br><br>Possible values:<br>*  **application/pdf**<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|application/pdf|

<h2 id="tocS_GrantLimit">GrantLimit</h2>
<!-- backwards compatibility -->
<a id="schemagrantlimit"></a>
<a id="schema_GrantLimit"></a>
<a id="tocSgrantlimit"></a>
<a id="tocsgrantlimit"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount available on the grant account.|

<h2 id="tocS_GrantOffer">GrantOffer</h2>
<!-- backwards compatibility -->
<a id="schemagrantoffer"></a>
<a id="schema_GrantOffer"></a>
<a id="tocSgrantoffer"></a>
<a id="tocsgrantoffer"></a>

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The identifier of the account holder to which the grant is offered.|
|amount|[Amount](#schemaamount)|false|none|The principal amount of the grant.|
|contractType|string|false|none|The contract type of the grant offer. Possible value: **cashAdvance**, **loan**.|
|expiresAt|string(date-time)|false|none|The end date of the grant offer validity period.|
|fee|[Fee](#schemafee)|false|none|Details of the fee configuration.|
|id|string|false|none|The unique identifier of the grant offer.|
|repayment|[Repayment](#schemarepayment)|false|none|Details of the repayment configuration.|
|startsAt|string(date-time)|false|none|The starting date of the grant offer validity period.|

#### Enumerated Values

|Property|Value|
|---|---|
|contractType|cashAdvance|
|contractType|loan|

<h2 id="tocS_GrantOffers">GrantOffers</h2>
<!-- backwards compatibility -->
<a id="schemagrantoffers"></a>
<a id="schema_GrantOffers"></a>
<a id="tocSgrantoffers"></a>
<a id="tocsgrantoffers"></a>

```json
{
  "grantOffers": [
    {
      "accountHolderId": "string",
      "amount": {
        "currency": "string",
        "value": 0
      },
      "contractType": "cashAdvance",
      "expiresAt": "1970-01-01T00:00:00Z",
      "fee": {
        "amount": {
          "currency": "string",
          "value": 0
        }
      },
      "id": "string",
      "repayment": {
        "basisPoints": 0,
        "term": {
          "estimatedDays": 0,
          "maximumDays": 0
        },
        "threshold": {
          "amount": {
            "currency": "string",
            "value": 0
          }
        }
      },
      "startsAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grantOffers|[[GrantOffer](#schemagrantoffer)]|true|none|A list of available grant offers.|

<h2 id="tocS_HKLocalAccountIdentification">HKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemahklocalaccountidentification"></a>
<a id="schema_HKLocalAccountIdentification"></a>
<a id="tocShklocalaccountidentification"></a>
<a id="tocshklocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstr",
  "clearingCode": "str",
  "type": "hkLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.|
|clearingCode|string|true|none|The 3-digit clearing code, without separators or whitespace.|
|type|string|true|none|**hkLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hkLocal|

<h2 id="tocS_HULocalAccountIdentification">HULocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemahulocalaccountidentification"></a>
<a id="schema_HULocalAccountIdentification"></a>
<a id="tocShulocalaccountidentification"></a>
<a id="tocshulocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstringstringstring",
  "type": "huLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 24-digit bank account number, without separators or whitespace.|
|type|string|true|none|**huLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|huLocal|

<h2 id="tocS_Href">Href</h2>
<!-- backwards compatibility -->
<a id="schemahref"></a>
<a id="schema_Href"></a>
<a id="tocShref"></a>
<a id="tocshref"></a>

```json
{
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|

<h2 id="tocS_IbanAccountIdentification">IbanAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaibanaccountidentification"></a>
<a id="schema_IbanAccountIdentification"></a>
<a id="tocSibanaccountidentification"></a>
<a id="tocsibanaccountidentification"></a>

```json
{
  "bic": "string",
  "iban": "string",
  "type": "iban"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bic|string|false|none|The bank's 8- or 11-character BIC or SWIFT code.|
|iban|string|true|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|type|string|true|none|**iban**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|iban|

<h2 id="tocS_IbanAccountIdentificationRequirement">IbanAccountIdentificationRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaibanaccountidentificationrequirement"></a>
<a id="schema_IbanAccountIdentificationRequirement"></a>
<a id="tocSibanaccountidentificationrequirement"></a>
<a id="tocsibanaccountidentificationrequirement"></a>

```json
{
  "description": "string",
  "ibanPrefixes": [
    "string"
  ],
  "type": "ibanAccountIdentificationRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Specifies the allowed prefixes for the international bank account number as defined in the ISO-13616 standard.|
|ibanPrefixes|[string]|false|none|Contains the list of allowed prefixes for international bank accounts. For example: NL, US, UK.|
|type|string|true|none|**ibanAccountIdentificationRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ibanAccountIdentificationRequirement|

<h2 id="tocS_InternationalTransactionRestriction">InternationalTransactionRestriction</h2>
<!-- backwards compatibility -->
<a id="schemainternationaltransactionrestriction"></a>
<a id="schema_InternationalTransactionRestriction"></a>
<a id="tocSinternationaltransactionrestriction"></a>
<a id="tocsinternationaltransactionrestriction"></a>

```json
{
  "operation": "string",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|boolean|false|none|Boolean indicating whether transaction is an international transaction.<br><br>Possible values:<br><br>- **true**: The transaction is an international transaction.<br><br>- **false**: The transaction is a domestic transaction.<br><br>|

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

<h2 id="tocS_JSONObject">JSONObject</h2>
<!-- backwards compatibility -->
<a id="schemajsonobject"></a>
<a id="schema_JSONObject"></a>
<a id="tocSjsonobject"></a>
<a id="tocsjsonobject"></a>

```json
{}
```

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "first": {
    "href": "string"
  },
  "last": {
    "href": "string"
  },
  "next": {
    "href": "string"
  },
  "previous": {
    "href": "string"
  },
  "self": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|[Href](#schemahref)|false|none|The link to the first page of the list.|
|last|[Href](#schemahref)|false|none|The link to the last page of the list.|
|next|[Href](#schemahref)|false|none|The link to the next page of the list.|
|previous|[Href](#schemahref)|false|none|The link to the previous page of the list.|
|self|[Href](#schemahref)|false|none|The link to the list page you are currently viewing.|

<h2 id="tocS_ListNetworkTokensResponse">ListNetworkTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworktokensresponse"></a>
<a id="schema_ListNetworkTokensResponse"></a>
<a id="tocSlistnetworktokensresponse"></a>
<a id="tocslistnetworktokensresponse"></a>

```json
{
  "networkTokens": [
    {
      "brandVariant": "string",
      "creationDate": "1970-01-01T00:00:00Z",
      "device": {
        "formFactor": "string",
        "osName": "string",
        "phone": {
          "hashedNumber": "string",
          "lastFourDigits": "string",
          "number": "string"
        }
      },
      "id": "string",
      "paymentInstrumentId": "string",
      "status": "active",
      "tokenLastFour": "string",
      "tokenRequestor": {
        "id": "string",
        "name": "string"
      },
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkTokens|[[NetworkToken](#schemanetworktoken)]|false|none|List of network tokens.|

<h2 id="tocS_MatchingTransactionsRestriction">MatchingTransactionsRestriction</h2>
<!-- backwards compatibility -->
<a id="schemamatchingtransactionsrestriction"></a>
<a id="schema_MatchingTransactionsRestriction"></a>
<a id="tocSmatchingtransactionsrestriction"></a>
<a id="tocsmatchingtransactionsrestriction"></a>

```json
{
  "operation": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|integer(int32)|false|none|The number of transactions.|

<h2 id="tocS_MatchingValuesRestriction">MatchingValuesRestriction</h2>
<!-- backwards compatibility -->
<a id="schemamatchingvaluesrestriction"></a>
<a id="schema_MatchingValuesRestriction"></a>
<a id="tocSmatchingvaluesrestriction"></a>
<a id="tocsmatchingvaluesrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "acquirerId"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|value|acquirerId|
|value|amount|
|value|currency|
|value|merchantId|
|value|merchantName|

<h2 id="tocS_MccsRestriction">MccsRestriction</h2>
<!-- backwards compatibility -->
<a id="schemamccsrestriction"></a>
<a id="schema_MccsRestriction"></a>
<a id="tocSmccsrestriction"></a>
<a id="tocsmccsrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|List of merchant category codes (MCCs).|

<h2 id="tocS_MerchantAcquirerPair">MerchantAcquirerPair</h2>
<!-- backwards compatibility -->
<a id="schemamerchantacquirerpair"></a>
<a id="schema_MerchantAcquirerPair"></a>
<a id="tocSmerchantacquirerpair"></a>
<a id="tocsmerchantacquirerpair"></a>

```json
{
  "acquirerId": "string",
  "merchantId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerId|string|false|none|The acquirer ID.|
|merchantId|string|false|none|The merchant identification number (MID).|

<h2 id="tocS_MerchantNamesRestriction">MerchantNamesRestriction</h2>
<!-- backwards compatibility -->
<a id="schemamerchantnamesrestriction"></a>
<a id="schema_MerchantNamesRestriction"></a>
<a id="tocSmerchantnamesrestriction"></a>
<a id="tocsmerchantnamesrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    {
      "operation": "contains",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[[StringMatch](#schemastringmatch)]|false|none|none|

<h2 id="tocS_MerchantsRestriction">MerchantsRestriction</h2>
<!-- backwards compatibility -->
<a id="schemamerchantsrestriction"></a>
<a id="schema_MerchantsRestriction"></a>
<a id="tocSmerchantsrestriction"></a>
<a id="tocsmerchantsrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    {
      "acquirerId": "string",
      "merchantId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[[MerchantAcquirerPair](#schemamerchantacquirerpair)]|false|none|List of merchant ID and acquirer ID pairs.|

<h2 id="tocS_NOLocalAccountIdentification">NOLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanolocalaccountidentification"></a>
<a id="schema_NOLocalAccountIdentification"></a>
<a id="tocSnolocalaccountidentification"></a>
<a id="tocsnolocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstrin",
  "type": "noLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 11-digit bank account number, without separators or whitespace.|
|type|string|true|none|**noLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|noLocal|

<h2 id="tocS_NZLocalAccountIdentification">NZLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanzlocalaccountidentification"></a>
<a id="schema_NZLocalAccountIdentification"></a>
<a id="tocSnzlocalaccountidentification"></a>
<a id="tocsnzlocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstringstr",
  "type": "nzLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.|
|type|string|true|none|**nzLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|nzLocal|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "firstName": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|The first name.|
|lastName|string|true|none|The last name.|

<h2 id="tocS_NetworkToken">NetworkToken</h2>
<!-- backwards compatibility -->
<a id="schemanetworktoken"></a>
<a id="schema_NetworkToken"></a>
<a id="tocSnetworktoken"></a>
<a id="tocsnetworktoken"></a>

```json
{
  "brandVariant": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "device": {
    "formFactor": "string",
    "osName": "string",
    "phone": {
      "hashedNumber": "string",
      "lastFourDigits": "string",
      "number": "string"
    }
  },
  "id": "string",
  "paymentInstrumentId": "string",
  "status": "active",
  "tokenLastFour": "string",
  "tokenRequestor": {
    "id": "string",
    "name": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandVariant|string|false|none|The card brand variant of the payment instrument associated with the network token. For example, **mc_prepaid_mrw**.|
|creationDate|string(date-time)|false|none|Date and time when the network token was created, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) extended format. For example, **2025-03-19T10:15:30+01:00**..|
|device|[DeviceInfo](#schemadeviceinfo)|false|none|Contains information about the device used to provision the network token.|
|id|string|false|none|The unique identifier of the network token.|
|paymentInstrumentId|string|false|none|The unique identifier of the payment instrument to which this network token belongs to.|
|status|string|false|none|The status of the network token. Possible values: **active**, **inactive**, **suspended**, **closed**.|
|tokenLastFour|string|false|none|The last four digits of the network token `id`.|
|tokenRequestor|[NetworkTokenRequestor](#schemanetworktokenrequestor)|false|none|The token requestor is an entity who requested tokenization of the card for secure payments.|
|type|string|false|none|The type of network token. For example, **wallet**, **cof**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|status|suspended|
|status|closed|

<h2 id="tocS_NetworkTokenActivationDataRequest">NetworkTokenActivationDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokenactivationdatarequest"></a>
<a id="schema_NetworkTokenActivationDataRequest"></a>
<a id="tocSnetworktokenactivationdatarequest"></a>
<a id="tocsnetworktokenactivationdatarequest"></a>

```json
{
  "sdkOutput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkOutput|string|false|none|A block of data automatically generated by Adyen's SDK for network token provisioning. This `sdkOutput` is required to create provisioning data for the network token.<br><br>For more information, see the repositories for Adyen's SDKs for network token provisioning:<br>* [Adyen Apple Pay Provisioning SDK](https://github.com/Adyen/adyen-apple-pay-provisioning-ios).<br>* [Adyen Google Wallet Provisioning SDK](https://github.com/Adyen/adyen-issuing-android)|

<h2 id="tocS_NetworkTokenActivationDataResponse">NetworkTokenActivationDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokenactivationdataresponse"></a>
<a id="schema_NetworkTokenActivationDataResponse"></a>
<a id="tocSnetworktokenactivationdataresponse"></a>
<a id="tocsnetworktokenactivationdataresponse"></a>

```json
{
  "sdkInput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkInput|string|false|none|A block of data that contains the activation data for a network token. This `sdkInput` is required to initialize Adyen's SDK for network token provisioning.<br><br>For more information, see the repositories for Adyen's SDKs for network token provisioning:<br>* [Adyen Apple Pay Provisioning SDK](https://github.com/Adyen/adyen-apple-pay-provisioning-ios).<br>* [Adyen Google Wallet Provisioning SDK](https://github.com/Adyen/adyen-issuing-android)|

<h2 id="tocS_NetworkTokenRequestor">NetworkTokenRequestor</h2>
<!-- backwards compatibility -->
<a id="schemanetworktokenrequestor"></a>
<a id="schema_NetworkTokenRequestor"></a>
<a id="tocSnetworktokenrequestor"></a>
<a id="tocsnetworktokenrequestor"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the network token requestor.|
|name|string|false|none|The name of the network token requestor.|

<h2 id="tocS_NumberAndBicAccountIdentification">NumberAndBicAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanumberandbicaccountidentification"></a>
<a id="schema_NumberAndBicAccountIdentification"></a>
<a id="tocSnumberandbicaccountidentification"></a>
<a id="tocsnumberandbicaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "additionalBankIdentification": {
    "code": "string",
    "type": "auBsbCode"
  },
  "bic": "stringst",
  "type": "numberAndBic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number, without separators or whitespace. The length and format depends on the bank or country.|
|additionalBankIdentification|[AdditionalBankIdentification](#schemaadditionalbankidentification)|false|none|Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers.|
|bic|string|true|none|The bank's 8- or 11-character BIC or SWIFT code.|
|type|string|true|none|**numberAndBic**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|numberAndBic|

<h2 id="tocS_PLLocalAccountIdentification">PLLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemapllocalaccountidentification"></a>
<a id="schema_PLLocalAccountIdentification"></a>
<a id="tocSpllocalaccountidentification"></a>
<a id="tocspllocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstringstringstringst",
  "type": "plLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.|
|type|string|true|none|**plLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|plLocal|

<h2 id="tocS_PaginatedAccountHoldersResponse">PaginatedAccountHoldersResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedaccountholdersresponse"></a>
<a id="schema_PaginatedAccountHoldersResponse"></a>
<a id="tocSpaginatedaccountholdersresponse"></a>
<a id="tocspaginatedaccountholdersresponse"></a>

```json
{
  "accountHolders": [
    {
      "balancePlatform": "string",
      "capabilities": {
        "property1": {
          "allowed": true,
          "allowedLevel": "high",
          "allowedSettings": {
            "amountPerIndustry": {
              "property1": {
                "currency": "string",
                "value": 0
              },
              "property2": {
                "currency": "string",
                "value": 0
              }
            },
            "authorizedCardUsers": true,
            "fundingSource": [
              "credit"
            ],
            "interval": "daily",
            "maxAmount": {
              "currency": "string",
              "value": 0
            }
          },
          "enabled": true,
          "problems": [
            {
              "entity": {
                "documents": [
                  "string"
                ],
                "id": "string",
                "owner": {
                  "documents": [
                    "string"
                  ],
                  "id": "string",
                  "type": "BankAccount"
                },
                "type": "BankAccount"
              },
              "verificationErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ],
                  "subErrors": [
                    {
                      "capabilities": [
                        "acceptExternalFunding"
                      ],
                      "code": "string",
                      "message": "string",
                      "type": "dataMissing",
                      "remediatingActions": [
                        {
                          "code": "string",
                          "message": "string"
                        }
                      ]
                    }
                  ],
                  "type": "dataMissing"
                }
              ]
            }
          ],
          "requested": true,
          "requestedLevel": "high",
          "requestedSettings": {
            "amountPerIndustry": {
              "property1": {
                "currency": "string",
                "value": 0
              },
              "property2": {
                "currency": "string",
                "value": 0
              }
            },
            "authorizedCardUsers": true,
            "fundingSource": [
              "credit"
            ],
            "interval": "daily",
            "maxAmount": {
              "currency": "string",
              "value": 0
            }
          },
          "transferInstruments": [
            {
              "allowed": true,
              "allowedLevel": "high",
              "enabled": true,
              "id": "string",
              "requested": true,
              "requestedLevel": "high",
              "verificationStatus": "invalid"
            }
          ],
          "verificationStatus": "invalid"
        },
        "property2": {
          "allowed": true,
          "allowedLevel": "high",
          "allowedSettings": {
            "amountPerIndustry": {
              "property1": {
                "currency": "string",
                "value": 0
              },
              "property2": {
                "currency": "string",
                "value": 0
              }
            },
            "authorizedCardUsers": true,
            "fundingSource": [
              "credit"
            ],
            "interval": "daily",
            "maxAmount": {
              "currency": "string",
              "value": 0
            }
          },
          "enabled": true,
          "problems": [
            {
              "entity": {
                "documents": [
                  "string"
                ],
                "id": "string",
                "owner": {
                  "documents": [
                    "string"
                  ],
                  "id": "string",
                  "type": "BankAccount"
                },
                "type": "BankAccount"
              },
              "verificationErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ],
                  "subErrors": [
                    {
                      "capabilities": [
                        "acceptExternalFunding"
                      ],
                      "code": "string",
                      "message": "string",
                      "type": "dataMissing",
                      "remediatingActions": [
                        {
                          "code": "string",
                          "message": "string"
                        }
                      ]
                    }
                  ],
                  "type": "dataMissing"
                }
              ]
            }
          ],
          "requested": true,
          "requestedLevel": "high",
          "requestedSettings": {
            "amountPerIndustry": {
              "property1": {
                "currency": "string",
                "value": 0
              },
              "property2": {
                "currency": "string",
                "value": 0
              }
            },
            "authorizedCardUsers": true,
            "fundingSource": [
              "credit"
            ],
            "interval": "daily",
            "maxAmount": {
              "currency": "string",
              "value": 0
            }
          },
          "transferInstruments": [
            {
              "allowed": true,
              "allowedLevel": "high",
              "enabled": true,
              "id": "string",
              "requested": true,
              "requestedLevel": "high",
              "verificationStatus": "invalid"
            }
          ],
          "verificationStatus": "invalid"
        }
      },
      "contactDetails": {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "email": "string",
        "phone": {
          "number": "string",
          "type": "landline"
        },
        "webAddress": "string"
      },
      "description": "string",
      "id": "string",
      "legalEntityId": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "migratedAccountHolderCode": "string",
      "primaryBalanceAccount": "string",
      "reference": "string",
      "status": "active",
      "timeZone": "string",
      "verificationDeadlines": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "entityIds": [
            "string"
          ],
          "expiresAt": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "hasNext": true,
  "hasPrevious": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolders|[[AccountHolder](#schemaaccountholder)]|true|none|List of account holders.|
|hasNext|boolean|true|none|Indicates whether there are more items on the next page.|
|hasPrevious|boolean|true|none|Indicates whether there are more items on the previous page.|

<h2 id="tocS_PaginatedBalanceAccountsResponse">PaginatedBalanceAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedbalanceaccountsresponse"></a>
<a id="schema_PaginatedBalanceAccountsResponse"></a>
<a id="tocSpaginatedbalanceaccountsresponse"></a>
<a id="tocspaginatedbalanceaccountsresponse"></a>

```json
{
  "balanceAccounts": [
    {
      "accountHolderId": "string",
      "defaultCurrencyCode": "string",
      "description": "string",
      "id": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "migratedAccountCode": "string",
      "platformPaymentConfiguration": {
        "salesDayClosingTime": "00:00:00Z",
        "settlementDelayDays": 0
      },
      "reference": "string",
      "status": "active",
      "timeZone": "string"
    }
  ],
  "hasNext": true,
  "hasPrevious": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccounts|[[BalanceAccountBase](#schemabalanceaccountbase)]|true|none|List of balance accounts.|
|hasNext|boolean|true|none|Indicates whether there are more items on the next page.|
|hasPrevious|boolean|true|none|Indicates whether there are more items on the previous page.|

<h2 id="tocS_PaginatedGetCardOrderItemResponse">PaginatedGetCardOrderItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedgetcardorderitemresponse"></a>
<a id="schema_PaginatedGetCardOrderItemResponse"></a>
<a id="tocSpaginatedgetcardorderitemresponse"></a>
<a id="tocspaginatedgetcardorderitemresponse"></a>

```json
{
  "data": [
    {
      "balancePlatform": "string",
      "card": {
        "errorMessage": "string",
        "status": "created",
        "trackingNumber": "string"
      },
      "cardOrderItemId": "string",
      "creationDate": "1970-01-01T00:00:00Z",
      "id": "string",
      "paymentInstrumentId": "string",
      "pin": {
        "errorMessage": "string",
        "status": "created",
        "trackingNumber": "string"
      },
      "shippingMethod": "string"
    }
  ],
  "hasNext": true,
  "hasPrevious": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CardOrderItem](#schemacardorderitem)]|true|none|List of card order items in the card order batch.|
|hasNext|boolean|true|none|Indicates whether there are more items on the next page.|
|hasPrevious|boolean|true|none|Indicates whether there are more items on the previous page.|

<h2 id="tocS_PaginatedGetCardOrderResponse">PaginatedGetCardOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedgetcardorderresponse"></a>
<a id="schema_PaginatedGetCardOrderResponse"></a>
<a id="tocSpaginatedgetcardorderresponse"></a>
<a id="tocspaginatedgetcardorderresponse"></a>

```json
{
  "cardOrders": [
    {
      "beginDate": "1970-01-01T00:00:00Z",
      "cardManufacturingProfileId": "string",
      "closedDate": "1970-01-01T00:00:00Z",
      "endDate": "1970-01-01T00:00:00Z",
      "id": "string",
      "lockDate": "1970-01-01T00:00:00Z",
      "serviceCenter": "string",
      "status": "closed"
    }
  ],
  "hasNext": true,
  "hasPrevious": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardOrders|[[CardOrder](#schemacardorder)]|false|none|Contains objects with information about card orders.|
|hasNext|boolean|true|none|Indicates whether there are more items on the next page.|
|hasPrevious|boolean|true|none|Indicates whether there are more items on the previous page.|

<h2 id="tocS_PaginatedPaymentInstrumentsResponse">PaginatedPaymentInstrumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpaymentinstrumentsresponse"></a>
<a id="schema_PaginatedPaymentInstrumentsResponse"></a>
<a id="tocSpaginatedpaymentinstrumentsresponse"></a>
<a id="tocspaginatedpaymentinstrumentsresponse"></a>

```json
{
  "hasNext": true,
  "hasPrevious": true,
  "paymentInstruments": [
    {
      "additionalBankAccountIdentifications": [
        {
          "bic": "string",
          "iban": "string",
          "type": "iban"
        }
      ],
      "balanceAccountId": "string",
      "bankAccount": {
        "accountNumber": "string",
        "accountType": "checking",
        "branchNumber": "string",
        "formFactor": "physical",
        "iban": "string",
        "routingNumber": "string",
        "sortCode": "string",
        "type": "iban"
      },
      "card": {
        "authentication": {
          "email": "string",
          "password": "string",
          "phone": {
            "number": "string",
            "type": "landline"
          }
        },
        "bin": "string",
        "brand": "string",
        "brandVariant": "string",
        "cardholderName": "string",
        "configuration": {
          "activation": "string",
          "activationUrl": "string",
          "bulkAddress": {
            "city": "string",
            "company": "string",
            "country": "string",
            "email": "string",
            "houseNumberOrName": "string",
            "line1": "string",
            "line2": "string",
            "line3": "string",
            "mobile": "string",
            "name": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "cardImageId": "string",
          "carrier": "string",
          "carrierImageId": "string",
          "configurationProfileId": "string",
          "currency": "string",
          "envelope": "string",
          "insert": "string",
          "language": "string",
          "logoImageId": "string",
          "pinMailer": "string",
          "printLine": "string",
          "shipmentMethod": "string"
        },
        "cvc": "string",
        "deliveryContact": {
          "address": {
            "city": "string",
            "country": "string",
            "line1": "string",
            "line2": "string",
            "line3": "string",
            "postalCode": "string",
            "stateOrProvince": "string"
          },
          "company": "string",
          "email": "string",
          "fullPhoneNumber": "string",
          "name": {
            "firstName": "string",
            "lastName": "string"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "webAddress": "string"
        },
        "expiration": {
          "month": "string",
          "year": "string"
        },
        "formFactor": "physical",
        "lastFour": "string",
        "number": "string",
        "threeDSecure": "string",
        "usage": "string"
      },
      "description": "string",
      "id": "string",
      "issuingCountryCode": "string",
      "paymentInstrumentGroupId": "string",
      "reference": "string",
      "replacedById": "string",
      "replacementOfId": "string",
      "status": "active",
      "statusComment": "string",
      "statusReason": "accountClosure",
      "type": "bankAccount"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasNext|boolean|true|none|Indicates whether there are more items on the next page.|
|hasPrevious|boolean|true|none|Indicates whether there are more items on the previous page.|
|paymentInstruments|[[PaymentInstrument](#schemapaymentinstrument)]|true|none|List of payment instruments associated with the balance account.|

<h2 id="tocS_PaymentInstrument">PaymentInstrument</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrument"></a>
<a id="schema_PaymentInstrument"></a>
<a id="tocSpaymentinstrument"></a>
<a id="tocspaymentinstrument"></a>

```json
{
  "additionalBankAccountIdentifications": [
    {
      "bic": "string",
      "iban": "string",
      "type": "iban"
    }
  ],
  "balanceAccountId": "string",
  "bankAccount": {
    "accountNumber": "string",
    "accountType": "checking",
    "branchNumber": "string",
    "formFactor": "physical",
    "iban": "string",
    "routingNumber": "string",
    "sortCode": "string",
    "type": "iban"
  },
  "card": {
    "authentication": {
      "email": "string",
      "password": "string",
      "phone": {
        "number": "string",
        "type": "landline"
      }
    },
    "bin": "string",
    "brand": "string",
    "brandVariant": "string",
    "cardholderName": "string",
    "configuration": {
      "activation": "string",
      "activationUrl": "string",
      "bulkAddress": {
        "city": "string",
        "company": "string",
        "country": "string",
        "email": "string",
        "houseNumberOrName": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "mobile": "string",
        "name": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "cardImageId": "string",
      "carrier": "string",
      "carrierImageId": "string",
      "configurationProfileId": "string",
      "currency": "string",
      "envelope": "string",
      "insert": "string",
      "language": "string",
      "logoImageId": "string",
      "pinMailer": "string",
      "printLine": "string",
      "shipmentMethod": "string"
    },
    "cvc": "string",
    "deliveryContact": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "company": "string",
      "email": "string",
      "fullPhoneNumber": "string",
      "name": {
        "firstName": "string",
        "lastName": "string"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "webAddress": "string"
    },
    "expiration": {
      "month": "string",
      "year": "string"
    },
    "formFactor": "physical",
    "lastFour": "string",
    "number": "string",
    "threeDSecure": "string",
    "usage": "string"
  },
  "description": "string",
  "id": "string",
  "issuingCountryCode": "string",
  "paymentInstrumentGroupId": "string",
  "reference": "string",
  "replacedById": "string",
  "replacementOfId": "string",
  "status": "active",
  "statusComment": "string",
  "statusReason": "accountClosure",
  "type": "bankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalBankAccountIdentifications|[[IbanAccountIdentification](#schemaibanaccountidentification)]|false|none|**Deprecated.** Contains optional, additional business account details. Returned when you create a payment instrument with `type` **bankAccount**.|
|balanceAccountId|string|true|none|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.|
|bankAccount|[BankAccountDetails](#schemabankaccountdetails)|false|none|Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.|
|card|[Card](#schemacard)|false|none|Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**.|
|description|string|false|none|Your description for the payment instrument, maximum 300 characters.|
|id|string|true|none|The unique identifier of the payment instrument.|
|issuingCountryCode|string|true|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.|
|paymentInstrumentGroupId|string|false|none|The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.|
|reference|string|false|none|Your reference for the payment instrument, maximum 150 characters.|
|replacedById|string|false|none|The unique identifier of the payment instrument that replaced this payment instrument.|
|replacementOfId|string|false|none|The unique identifier of the payment instrument that is replaced by this payment instrument.|
|status|string|false|none|The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values: <br><br> * **active**:  The payment instrument is active and can be used to make payments. <br><br> * **inactive**: The payment instrument is inactive and cannot be used to make payments. <br><br> * **suspended**: The payment instrument is suspended, either because it was stolen or lost. <br><br> * **closed**: The payment instrument is permanently closed. This action cannot be undone. <br><br>|
|statusComment|string|false|none|The status comment provides additional information for the statusReason of the payment instrument.|
|statusReason|string|false|none|The reason for the status of the payment instrument.<br><br>Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change.|
|type|string|true|none|The type of payment instrument.<br><br>Possible values: **card**, **bankAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|
|statusReason|accountClosure|
|statusReason|damaged|
|statusReason|endOfLife|
|statusReason|expired|
|statusReason|lost|
|statusReason|other|
|statusReason|stolen|
|statusReason|suspectedFraud|
|statusReason|transactionRule|
|type|bankAccount|
|type|card|

<h2 id="tocS_PaymentInstrumentGroup">PaymentInstrumentGroup</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentgroup"></a>
<a id="schema_PaymentInstrumentGroup"></a>
<a id="tocSpaymentinstrumentgroup"></a>
<a id="tocspaymentinstrumentgroup"></a>

```json
{
  "balancePlatform": "string",
  "description": "string",
  "id": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "reference": "string",
  "txVariant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|true|none|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.|
|description|string|false|none|Your description for the payment instrument group.|
|id|string|false|none|The unique identifier of the payment instrument group.|
|properties|object|false|none|Properties of the payment instrument group.|
|reference|string|false|none|Your reference for the payment instrument group.|
|txVariant|string|true|none|The tx variant of the payment instrument group.|

<h2 id="tocS_PaymentInstrumentGroupInfo">PaymentInstrumentGroupInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentgroupinfo"></a>
<a id="schema_PaymentInstrumentGroupInfo"></a>
<a id="tocSpaymentinstrumentgroupinfo"></a>
<a id="tocspaymentinstrumentgroupinfo"></a>

```json
{
  "balancePlatform": "string",
  "description": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "reference": "string",
  "txVariant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|true|none|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.|
|description|string|false|none|Your description for the payment instrument group.|
|properties|object|false|none|Properties of the payment instrument group.|
|reference|string|false|none|Your reference for the payment instrument group.|
|txVariant|string|true|none|The tx variant of the payment instrument group.|

<h2 id="tocS_PaymentInstrumentInfo">PaymentInstrumentInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentinfo"></a>
<a id="schema_PaymentInstrumentInfo"></a>
<a id="tocSpaymentinstrumentinfo"></a>
<a id="tocspaymentinstrumentinfo"></a>

```json
{
  "balanceAccountId": "string",
  "bankAccount": {
    "formFactor": "physical"
  },
  "card": {
    "authentication": {
      "email": "string",
      "password": "string",
      "phone": {
        "number": "string",
        "type": "landline"
      }
    },
    "brand": "string",
    "brandVariant": "string",
    "cardholderName": "string",
    "configuration": {
      "activation": "string",
      "activationUrl": "string",
      "bulkAddress": {
        "city": "string",
        "company": "string",
        "country": "string",
        "email": "string",
        "houseNumberOrName": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "mobile": "string",
        "name": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "cardImageId": "string",
      "carrier": "string",
      "carrierImageId": "string",
      "configurationProfileId": "string",
      "currency": "string",
      "envelope": "string",
      "insert": "string",
      "language": "string",
      "logoImageId": "string",
      "pinMailer": "string",
      "printLine": "string",
      "shipmentMethod": "string"
    },
    "deliveryContact": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "company": "string",
      "email": "string",
      "fullPhoneNumber": "string",
      "name": {
        "firstName": "string",
        "lastName": "string"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "webAddress": "string"
    },
    "formFactor": "physical",
    "threeDSecure": "string",
    "usage": "string"
  },
  "description": "string",
  "issuingCountryCode": "string",
  "paymentInstrumentGroupId": "string",
  "reference": "string",
  "status": "active",
  "statusComment": "string",
  "statusReason": "accountClosure",
  "type": "bankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|true|none|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.|
|bankAccount|[BankAccountModel](#schemabankaccountmodel)|false|none|Contains the business account details.|
|card|[CardInfo](#schemacardinfo)|false|none|Contains information about the card. Required when you create a payment instrument of `type` **card**.|
|description|string|false|none|Your description for the payment instrument, maximum 300 characters.|
|issuingCountryCode|string|true|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.|
|paymentInstrumentGroupId|string|false|none|The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.|
|reference|string|false|none|Your reference for the payment instrument, maximum 150 characters.|
|status|string|false|none|The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values: <br><br> * **active**:  The payment instrument is active and can be used to make payments. <br><br> * **inactive**: The payment instrument is inactive and cannot be used to make payments. <br><br> * **suspended**: The payment instrument is suspended, either because it was stolen or lost. <br><br> * **closed**: The payment instrument is permanently closed. This action cannot be undone. <br><br>|
|statusComment|string|false|none|The status comment provides additional information for the statusReason of the payment instrument.|
|statusReason|string|false|none|The reason for the status of the payment instrument.<br><br>Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change.|
|type|string|true|none|The type of payment instrument.<br><br>Possible values: **card**, **bankAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|
|statusReason|accountClosure|
|statusReason|damaged|
|statusReason|endOfLife|
|statusReason|expired|
|statusReason|lost|
|statusReason|other|
|statusReason|stolen|
|statusReason|suspectedFraud|
|statusReason|transactionRule|
|type|bankAccount|
|type|card|

<h2 id="tocS_PaymentInstrumentRequirement">PaymentInstrumentRequirement</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentrequirement"></a>
<a id="schema_PaymentInstrumentRequirement"></a>
<a id="tocSpaymentinstrumentrequirement"></a>
<a id="tocspaymentinstrumentrequirement"></a>

```json
{
  "description": "string",
  "issuingCountryCode": "string",
  "issuingCountryCodes": [
    "string"
  ],
  "onlyForCrossBalancePlatform": true,
  "paymentInstrumentType": "BankAccount",
  "type": "paymentInstrumentRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Specifies the requirements for the payment instrument that need to be included in the request for a particular route.|
|issuingCountryCode|string|false|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.|
|issuingCountryCodes|[string]|false|none|The two-character ISO-3166-1 alpha-2 country code list for payment instruments.|
|onlyForCrossBalancePlatform|boolean|false|none|Specifies if the requirement only applies to transfers to another balance platform.|
|paymentInstrumentType|string|false|none|The type of the payment instrument. For example, "BankAccount" or "Card".|
|type|string|true|none|**paymentInstrumentRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentInstrumentType|BankAccount|
|paymentInstrumentType|Card|
|type|paymentInstrumentRequirement|

<h2 id="tocS_PaymentInstrumentRevealInfo">PaymentInstrumentRevealInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentrevealinfo"></a>
<a id="schema_PaymentInstrumentRevealInfo"></a>
<a id="tocSpaymentinstrumentrevealinfo"></a>
<a id="tocspaymentinstrumentrevealinfo"></a>

```json
{
  "cvc": "string",
  "expiration": {
    "month": "string",
    "year": "string"
  },
  "pan": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvc|string|true|none|The CVC2 value of the card.|
|expiration|[Expiry](#schemaexpiry)|true|none|The expiration date of the card.|
|pan|string|true|none|The primary account number (PAN) of the card.|

<h2 id="tocS_PaymentInstrumentRevealRequest">PaymentInstrumentRevealRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentrevealrequest"></a>
<a id="schema_PaymentInstrumentRevealRequest"></a>
<a id="tocSpaymentinstrumentrevealrequest"></a>
<a id="tocspaymentinstrumentrevealrequest"></a>

```json
{
  "encryptedKey": "string",
  "paymentInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedKey|string|true|none|The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.|
|paymentInstrumentId|string|true|none|The unique identifier of the payment instrument, which is the card for which you are managing the PIN.|

<h2 id="tocS_PaymentInstrumentRevealResponse">PaymentInstrumentRevealResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentrevealresponse"></a>
<a id="schema_PaymentInstrumentRevealResponse"></a>
<a id="tocSpaymentinstrumentrevealresponse"></a>
<a id="tocspaymentinstrumentrevealresponse"></a>

```json
{
  "encryptedData": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedData|string|true|none|The data encrypted using the `encryptedKey`.|

<h2 id="tocS_PaymentInstrumentUpdateRequest">PaymentInstrumentUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentupdaterequest"></a>
<a id="schema_PaymentInstrumentUpdateRequest"></a>
<a id="tocSpaymentinstrumentupdaterequest"></a>
<a id="tocspaymentinstrumentupdaterequest"></a>

```json
{
  "balanceAccountId": "string",
  "card": {
    "authentication": {
      "email": "string",
      "password": "string",
      "phone": {
        "number": "string",
        "type": "landline"
      }
    },
    "brand": "string",
    "brandVariant": "string",
    "cardholderName": "string",
    "configuration": {
      "activation": "string",
      "activationUrl": "string",
      "bulkAddress": {
        "city": "string",
        "company": "string",
        "country": "string",
        "email": "string",
        "houseNumberOrName": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "mobile": "string",
        "name": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "cardImageId": "string",
      "carrier": "string",
      "carrierImageId": "string",
      "configurationProfileId": "string",
      "currency": "string",
      "envelope": "string",
      "insert": "string",
      "language": "string",
      "logoImageId": "string",
      "pinMailer": "string",
      "printLine": "string",
      "shipmentMethod": "string"
    },
    "deliveryContact": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "company": "string",
      "email": "string",
      "fullPhoneNumber": "string",
      "name": {
        "firstName": "string",
        "lastName": "string"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "webAddress": "string"
    },
    "formFactor": "physical",
    "threeDSecure": "string",
    "usage": "string"
  },
  "status": "active",
  "statusComment": "string",
  "statusReason": "accountClosure"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account associated with this payment instrument.<br>>You can only change the balance account ID if the payment instrument has **inactive** status.|
|card|[CardInfo](#schemacardinfo)|false|none|Object that contains information about the card payment instrument.|
|status|string|false|none|The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values: <br><br> * **active**:  The payment instrument is active and can be used to make payments. <br><br> * **inactive**: The payment instrument is inactive and cannot be used to make payments. <br><br> * **suspended**: The payment instrument is suspended, either because it was stolen or lost. <br><br> * **closed**: The payment instrument is permanently closed. This action cannot be undone. <br><br>|
|statusComment|string|false|none|Comment for the status of the payment instrument.<br><br>Required if `statusReason` is **other**.|
|statusReason|string|false|none|The reason for updating the status of the payment instrument.<br><br>Possible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|
|statusReason|accountClosure|
|statusReason|damaged|
|statusReason|endOfLife|
|statusReason|expired|
|statusReason|lost|
|statusReason|other|
|statusReason|stolen|
|statusReason|suspectedFraud|
|statusReason|transactionRule|

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "number": "string",
  "type": "landline"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|The full phone number provided as a single string. <br>For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**, <br><br> or **"(0031) 611223344"**.|
|type|string|true|none|Type of phone number.<br>Possible values: <br>**Landline**, **Mobile**.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|landline|
|type|mobile|

<h2 id="tocS_PhoneInfo">PhoneInfo</h2>
<!-- backwards compatibility -->
<a id="schemaphoneinfo"></a>
<a id="schema_PhoneInfo"></a>
<a id="tocSphoneinfo"></a>
<a id="tocsphoneinfo"></a>

```json
{
  "hashedNumber": "string",
  "lastFourDigits": "string",
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hashedNumber|string|false|none|The hashed value of the phone number used to provision the network token.|
|lastFourDigits|string|false|none|The last four digits of the phone number used to provision the network token.|
|number|string|false|none|The full phone number of the device used to provision the network token.|

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "phoneCountryCode": "string",
  "phoneNumber": "string",
  "phoneType": "Fax"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneCountryCode|string|false|none|The two-character ISO-3166-1 alpha-2 country code of the phone number.<br>For example, **US** or **NL**.|
|phoneNumber|string|false|none|The phone number.<br>The inclusion of the phone number country code is not necessary.|
|phoneType|string|false|none|The type of the phone number.<br>Possible values: **Landline**, **Mobile**, **SIP**, **Fax**.|

#### Enumerated Values

|Property|Value|
|---|---|
|phoneType|Fax|
|phoneType|Landline|
|phoneType|Mobile|
|phoneType|SIP|

<h2 id="tocS_PinChangeRequest">PinChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemapinchangerequest"></a>
<a id="schema_PinChangeRequest"></a>
<a id="tocSpinchangerequest"></a>
<a id="tocspinchangerequest"></a>

```json
{
  "encryptedKey": "string",
  "encryptedPinBlock": "string",
  "paymentInstrumentId": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedKey|string|true|none|The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.|
|encryptedPinBlock|string|true|none|The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block).|
|paymentInstrumentId|string|true|none|The unique identifier of the payment instrument, which is the card for which you are managing the PIN.|
|token|string|true|none|The 16-digit token that you used to generate the `encryptedPinBlock`.|

<h2 id="tocS_PinChangeResponse">PinChangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemapinchangeresponse"></a>
<a id="schema_PinChangeResponse"></a>
<a id="tocSpinchangeresponse"></a>
<a id="tocspinchangeresponse"></a>

```json
{
  "status": "completed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of the request for PIN change.<br><br>Possible values: **completed**, **pending**, **unavailable**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|completed|
|status|pending|
|status|unavailable|

<h2 id="tocS_PlatformPaymentConfiguration">PlatformPaymentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaplatformpaymentconfiguration"></a>
<a id="schema_PlatformPaymentConfiguration"></a>
<a id="tocSplatformpaymentconfiguration"></a>
<a id="tocsplatformpaymentconfiguration"></a>

```json
{
  "salesDayClosingTime": "00:00:00Z",
  "settlementDelayDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salesDayClosingTime|string(time)|false|none|Specifies at what time a sales day ends for this account.<br><br>Possible values: Time in **"HH:MM"** format. **HH** ranges from **00** to **07**. **MM** must be **00**.<br><br>Default value: **"00:00"**.|
|settlementDelayDays|integer(int32)|false|none|Specifies after how many business days the funds in a settlement batch are made available in this balance account. Requires Custom Sales Day Payout to be enabled for your balance account. Contact your account manager or implementation manager to enable this.<br><br>Possible values: **1** to **20**, or **null**.<br><br>Default value: **null**.|

<h2 id="tocS_ProcessingTypesRestriction">ProcessingTypesRestriction</h2>
<!-- backwards compatibility -->
<a id="schemaprocessingtypesrestriction"></a>
<a id="schema_ProcessingTypesRestriction"></a>
<a id="tocSprocessingtypesrestriction"></a>
<a id="tocsprocessingtypesrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "atmWithdraw"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|List of processing types.<br><br>Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **recurring**, **token**.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|value|atmWithdraw|
|value|balanceInquiry|
|value|ecommerce|
|value|moto|
|value|pos|
|value|recurring|
|value|token|
|value|unknown|

<h2 id="tocS_PublicKeyResponse">PublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublickeyresponse"></a>
<a id="schema_PublicKeyResponse"></a>
<a id="tocSpublickeyresponse"></a>
<a id="tocspublickeyresponse"></a>

```json
{
  "publicKey": "string",
  "publicKeyExpiryDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKey|string|true|none|The public key you need for encrypting a symmetric session key.|
|publicKeyExpiryDate|string|true|none|The expiry date of the public key.|

<h2 id="tocS_RegisterSCAFinalResponse">RegisterSCAFinalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterscafinalresponse"></a>
<a id="schema_RegisterSCAFinalResponse"></a>
<a id="tocSregisterscafinalresponse"></a>
<a id="tocsregisterscafinalresponse"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|Specifies if the registration was initiated successfully.|

<h2 id="tocS_RegisterSCARequest">RegisterSCARequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterscarequest"></a>
<a id="schema_RegisterSCARequest"></a>
<a id="tocSregisterscarequest"></a>
<a id="tocsregisterscarequest"></a>

```json
{
  "name": "string",
  "paymentInstrumentId": "string",
  "strongCustomerAuthentication": {
    "sdkOutput": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the SCA device that you are registering. You can use it to help your users identify the device.<br><br>If you do not specify a `name`, Adyen automatically generates one.|
|paymentInstrumentId|string|true|none|The unique identifier of the payment instrument for which you are registering the SCA device.|
|strongCustomerAuthentication|[DelegatedAuthenticationData](#schemadelegatedauthenticationdata)|true|none|Contains information required to register the SCA device.|

<h2 id="tocS_RegisterSCAResponse">RegisterSCAResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterscaresponse"></a>
<a id="schema_RegisterSCAResponse"></a>
<a id="tocSregisterscaresponse"></a>
<a id="tocsregisterscaresponse"></a>

```json
{
  "id": "string",
  "paymentInstrumentId": "string",
  "sdkInput": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the SCA device you are registering.|
|paymentInstrumentId|string|false|none|The unique identifier of the payment instrument for which you are registering the SCA device.|
|sdkInput|string|false|none|A string that you must pass to the authentication SDK to continue with the registration process.|
|success|boolean|false|none|Specifies if the registration was initiated successfully.|

<h2 id="tocS_RemediatingAction">RemediatingAction</h2>
<!-- backwards compatibility -->
<a id="schemaremediatingaction"></a>
<a id="schema_RemediatingAction"></a>
<a id="tocSremediatingaction"></a>
<a id="tocsremediatingaction"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The remediating action code.|
|message|string|false|none|A description of how you can resolve the verification error.|

<h2 id="tocS_Repayment">Repayment</h2>
<!-- backwards compatibility -->
<a id="schemarepayment"></a>
<a id="schema_Repayment"></a>
<a id="tocSrepayment"></a>
<a id="tocsrepayment"></a>

```json
{
  "basisPoints": 0,
  "term": {
    "estimatedDays": 0,
    "maximumDays": 0
  },
  "threshold": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basisPoints|integer(int32)|true|none|The repayment that is deducted daily from incoming net volume, in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).|
|term|[RepaymentTerm](#schemarepaymentterm)|false|none|An object containing the details of the configuration for repayment term.|
|threshold|[ThresholdRepayment](#schemathresholdrepayment)|false|none|An object containing the details of the 30-day repayment threshold.|

<h2 id="tocS_RepaymentTerm">RepaymentTerm</h2>
<!-- backwards compatibility -->
<a id="schemarepaymentterm"></a>
<a id="schema_RepaymentTerm"></a>
<a id="tocSrepaymentterm"></a>
<a id="tocsrepaymentterm"></a>

```json
{
  "estimatedDays": 0,
  "maximumDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedDays|integer(int32)|true|none|The estimated term for repaying the grant, in days.|
|maximumDays|integer(int32)|false|none|The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**.|

<h2 id="tocS_RestServiceError">RestServiceError</h2>
<!-- backwards compatibility -->
<a id="schemarestserviceerror"></a>
<a id="schema_RestServiceError"></a>
<a id="tocSrestserviceerror"></a>
<a id="tocsrestserviceerror"></a>

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|true|none|A code that identifies the problem type.|
|instance|string|false|none|A unique URI that identifies the specific occurrence of the problem.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Detailed explanation of each validation error, when applicable.|
|requestId|string|false|none|A unique reference for the request, essentially the same as `pspReference`.|
|response|[JSONObject](#schemajsonobject)|false|none|JSON response payload.|
|status|integer(int32)|true|none|The HTTP status code.|
|title|string|true|none|A short, human-readable summary of the problem type.|
|type|string|true|none|A URI that identifies the problem type, pointing to human-readable documentation on this problem type.|

<h2 id="tocS_RevealPinRequest">RevealPinRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevealpinrequest"></a>
<a id="schema_RevealPinRequest"></a>
<a id="tocSrevealpinrequest"></a>
<a id="tocsrevealpinrequest"></a>

```json
{
  "encryptedKey": "string",
  "paymentInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedKey|string|true|none|The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.|
|paymentInstrumentId|string|true|none|The unique identifier of the payment instrument, which is the card for which you are managing the PIN.|

<h2 id="tocS_RevealPinResponse">RevealPinResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevealpinresponse"></a>
<a id="schema_RevealPinResponse"></a>
<a id="tocSrevealpinresponse"></a>
<a id="tocsrevealpinresponse"></a>

```json
{
  "encryptedPinBlock": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedPinBlock|string|true|none|The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block).|
|token|string|true|none|The 16-digit token that you need to extract the `encryptedPinBlock`.|

<h2 id="tocS_RiskScores">RiskScores</h2>
<!-- backwards compatibility -->
<a id="schemariskscores"></a>
<a id="schema_RiskScores"></a>
<a id="tocSriskscores"></a>
<a id="tocsriskscores"></a>

```json
{
  "mastercard": 0,
  "visa": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mastercard|integer(int32)|false|none|Transaction risk score provided by Mastercard. Values provided by Mastercard range between 0 (lowest risk) to 998 (highest risk).|
|visa|integer(int32)|false|none|Transaction risk score provided by Visa. Values provided by Visa range between 01 (lowest risk) to 99 (highest risk).|

<h2 id="tocS_RiskScoresRestriction">RiskScoresRestriction</h2>
<!-- backwards compatibility -->
<a id="schemariskscoresrestriction"></a>
<a id="schema_RiskScoresRestriction"></a>
<a id="tocSriskscoresrestriction"></a>
<a id="tocsriskscoresrestriction"></a>

```json
{
  "operation": "string",
  "value": {
    "mastercard": 0,
    "visa": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[RiskScores](#schemariskscores)|false|none|none|

<h2 id="tocS_SELocalAccountIdentification">SELocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaselocalaccountidentification"></a>
<a id="schema_SELocalAccountIdentification"></a>
<a id="tocSselocalaccountidentification"></a>
<a id="tocsselocalaccountidentification"></a>

```json
{
  "accountNumber": "strings",
  "clearingNumber": "strin",
  "type": "seLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.|
|clearingNumber|string|true|none|The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.|
|type|string|true|none|**seLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|seLocal|

<h2 id="tocS_SGLocalAccountIdentification">SGLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemasglocalaccountidentification"></a>
<a id="schema_SGLocalAccountIdentification"></a>
<a id="tocSsglocalaccountidentification"></a>
<a id="tocssglocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bic": "stringst",
  "type": "sgLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 4- to 19-digit bank account number, without separators or whitespace.|
|bic|string|true|none|The bank's 8- or 11-character BIC or SWIFT code.|
|type|string|false|none|**sgLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sgLocal|

<h2 id="tocS_SameAmountRestriction">SameAmountRestriction</h2>
<!-- backwards compatibility -->
<a id="schemasameamountrestriction"></a>
<a id="schema_SameAmountRestriction"></a>
<a id="tocSsameamountrestriction"></a>
<a id="tocssameamountrestriction"></a>

```json
{
  "operation": "string",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|boolean|false|none|none|

<h2 id="tocS_SameCounterpartyRestriction">SameCounterpartyRestriction</h2>
<!-- backwards compatibility -->
<a id="schemasamecounterpartyrestriction"></a>
<a id="schema_SameCounterpartyRestriction"></a>
<a id="tocSsamecounterpartyrestriction"></a>
<a id="tocssamecounterpartyrestriction"></a>

```json
{
  "operation": "string",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|boolean|false|none|none|

<h2 id="tocS_SearchRegisteredDevicesResponse">SearchRegisteredDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchregistereddevicesresponse"></a>
<a id="schema_SearchRegisteredDevicesResponse"></a>
<a id="tocSsearchregistereddevicesresponse"></a>
<a id="tocssearchregistereddevicesresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "paymentInstrumentId": "string",
      "type": "ios"
    }
  ],
  "itemsTotal": 0,
  "link": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "previous": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "pagesTotal": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Device](#schemadevice)]|false|none|Contains a list of registered SCA devices and their corresponding details.|
|itemsTotal|integer(int32)|false|none|The total amount of registered SCA devices that match the query parameters.|
|link|[Link](#schemalink)|false|none|Contains links to the list pages.|
|pagesTotal|integer(int32)|false|none|The total amount of list pages.|

<h2 id="tocS_SourceAccountTypesRestriction">SourceAccountTypesRestriction</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccounttypesrestriction"></a>
<a id="schema_SourceAccountTypesRestriction"></a>
<a id="tocSsourceaccounttypesrestriction"></a>
<a id="tocssourceaccounttypesrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "balanceAccount"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|The list of source account types to be evaluated.|

#### Enumerated Values

|Property|Value|
|---|---|
|value|balanceAccount|
|value|businessAccount|

<h2 id="tocS_StringMatch">StringMatch</h2>
<!-- backwards compatibility -->
<a id="schemastringmatch"></a>
<a id="schema_StringMatch"></a>
<a id="tocSstringmatch"></a>
<a id="tocsstringmatch"></a>

```json
{
  "operation": "contains",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|false|none|The type of string matching operation. Possible values:  **startsWith**, **endsWith**, **isEqualTo**, **contains**,|
|value|string|false|none|The string to be matched.|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|contains|
|operation|endsWith|
|operation|isEqualTo|
|operation|startsWith|

<h2 id="tocS_SweepConfigurationV2">SweepConfigurationV2</h2>
<!-- backwards compatibility -->
<a id="schemasweepconfigurationv2"></a>
<a id="schema_SweepConfigurationV2"></a>
<a id="tocSsweepconfigurationv2"></a>
<a id="tocssweepconfigurationv2"></a>

```json
{
  "category": "bank",
  "counterparty": {
    "balanceAccountId": "string",
    "merchantAccount": "string",
    "transferInstrumentId": "string"
  },
  "currency": "string",
  "description": "string",
  "id": "string",
  "priorities": [
    "crossBorder"
  ],
  "reason": "accountHierarchyNotActive",
  "reasonDetail": "string",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "schedule": {
    "cronExpression": "string",
    "type": "daily"
  },
  "status": "active",
  "sweepAmount": {
    "currency": "string",
    "value": 0
  },
  "targetAmount": {
    "currency": "string",
    "value": 0
  },
  "triggerAmount": {
    "currency": "string",
    "value": 0
  },
  "type": "push"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The type of transfer that results from the sweep.<br><br>Possible values:<br><br> - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).<br><br>- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.<br><br>Required when setting `priorities`.|
|counterparty|[SweepCounterparty](#schemasweepcounterparty)|true|none|The destination or the source of the funds, depending on the sweep `type`.<br><br>Either a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.<br><br>The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).|
|description|string|false|none|The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message will be cut off at 140 characters.|
|id|string|true|read-only|The unique identifier of the sweep.|
|priorities|[string]|false|none|The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities, ordered by your preference. Adyen will try to pay out using the priorities in the given order. If the first priority is not currently supported or enabled for your platform, the system will try the next one, and so on.<br><br>The request will be accepted as long as **at least one** of the provided priorities is valid (i.e., supported by Adyen and activated for your platform). For example, if you provide `["wire","regular"]`, and `wire` is not supported but `regular` is, the request will still be accepted and processed.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Set `category` to **bank**. For more details, see optional priorities setup for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/scheduled-payouts#optional-priorities-setup) or [platforms](https://docs.adyen.com/platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).|
|reason|string|false|read-only|The reason for disabling the sweep.|
|reasonDetail|string|false|read-only|The human readable reason for disabling the sweep.|
|reference|string|false|none|Your reference for the sweep configuration.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty. Only alphanumeric characters are allowed.|
|schedule|[SweepSchedule](#schemasweepschedule)|true|none|The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.|
|status|string|false|none|The status of the sweep. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. <br><br> * **inactive**: the sweep is disabled and cannot be triggered. <br><br>|
|sweepAmount|[Amount](#schemaamount)|false|none|The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.|
|targetAmount|[Amount](#schemaamount)|false|none|The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.|
|triggerAmount|[Amount](#schemaamount)|false|none|The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.<br><br>* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.<br><br>* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.|
|type|string|false|none|The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.<br><br>Possible values:<br><br> * **push**: _push out funds_ to a destination balance account or transfer instrument.<br><br> * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|internal|
|category|platformPayment|
|priorities|crossBorder|
|priorities|fast|
|priorities|instant|
|priorities|internal|
|priorities|regular|
|priorities|wire|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approved|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|directDebitNotSupported|
|reason|error|
|reason|notEnoughBalance|
|reason|refusedByCounterpartyBank|
|reason|routeNotFound|
|reason|transferInstrumentDoesNotExist|
|reason|unknown|
|status|active|
|status|inactive|
|type|pull|
|type|push|

<h2 id="tocS_SweepCounterparty">SweepCounterparty</h2>
<!-- backwards compatibility -->
<a id="schemasweepcounterparty"></a>
<a id="schema_SweepCounterparty"></a>
<a id="tocSsweepcounterparty"></a>
<a id="tocssweepcounterparty"></a>

```json
{
  "balanceAccountId": "string",
  "merchantAccount": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).<br><br> > If you are updating the counterparty from a transfer instrument to a balance account, set `transferInstrumentId` to **null**.|
|merchantAccount|string|false|none|The merchant account that will be the source of funds.<br><br>You can only use this parameter with sweeps of `type` **pull** and if you are processing payments with Adyen.|
|transferInstrumentId|string|false|none|The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) depending on the sweep `type`<br><br>. To set up automated top-up sweeps to balance accounts in your [marketplace](https://docs.adyen.com/marketplaces/top-up-balance-account/#before-you-begin) or [platform](https://docs.adyen.com/platforms/top-up-balance-account/#before-you-begin), use this parameter in combination with a `merchantAccount` and a sweep `type` of **pull**.<br><br>Top-up sweeps start a direct debit request from the source transfer instrument. Contact Adyen Support to enable this feature.> If you are updating the counterparty from a balance account to a transfer instrument, set `balanceAccountId` to **null**.|

<h2 id="tocS_SweepSchedule">SweepSchedule</h2>
<!-- backwards compatibility -->
<a id="schemasweepschedule"></a>
<a id="schema_SweepSchedule"></a>
<a id="tocSsweepschedule"></a>
<a id="tocssweepschedule"></a>

```json
{
  "cronExpression": "string",
  "type": "daily"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cronExpression|string|false|none|A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the sweep schedule. The schedule uses the time zone of the balance account. <br>For example, **30 17 * * MON** schedules a sweep every Monday at 17:30.<br><br>The expression must have five values separated by a single space in the following order:<br><br>* Minute: **0-59**<br><br>* Hour: **0-23**<br><br>* Day of the month: **1-31**<br><br>* Month: **1-12** or **JAN-DEC**<br><br>* Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.<br><br>The following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and **/**. See [crontab guru](https://crontab.guru/) for more examples.<br><br>Required when `type` is **cron**.<br>|
|type|string|true|none|The schedule type.<br><br>Possible values:<br><br>* **cron**: push out funds based on a `cronExpression`.<br><br>* **daily**: push out funds daily at 07:00 AM CET.<br><br>* **weekly**: push out funds every Monday at 07:00 AM CET.<br><br>* **monthly**: push out funds every first of the month at 07:00 AM CET.<br><br>* **balance**: execute the sweep instantly if the `triggerAmount` is reached.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|daily|
|type|weekly|
|type|monthly|
|type|balance|
|type|cron|

<h2 id="tocS_ThresholdRepayment">ThresholdRepayment</h2>
<!-- backwards compatibility -->
<a id="schemathresholdrepayment"></a>
<a id="schema_ThresholdRepayment"></a>
<a id="tocSthresholdrepayment"></a>
<a id="tocsthresholdrepayment"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount to be repaid on a 30-day basis.|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string|false|none|The end time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.<br><br>|
|startTime|string|false|none|The start time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.<br><br>|

<h2 id="tocS_TimeOfDayRestriction">TimeOfDayRestriction</h2>
<!-- backwards compatibility -->
<a id="schematimeofdayrestriction"></a>
<a id="schema_TimeOfDayRestriction"></a>
<a id="tocStimeofdayrestriction"></a>
<a id="tocstimeofdayrestriction"></a>

```json
{
  "operation": "string",
  "value": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[TimeOfDay](#schematimeofday)|false|none|none|

<h2 id="tocS_TokenRequestorsRestriction">TokenRequestorsRestriction</h2>
<!-- backwards compatibility -->
<a id="schematokenrequestorsrestriction"></a>
<a id="schema_TokenRequestorsRestriction"></a>
<a id="tocStokenrequestorsrestriction"></a>
<a id="tocstokenrequestorsrestriction"></a>

```json
{
  "operation": "string",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|none|

<h2 id="tocS_TotalAmountRestriction">TotalAmountRestriction</h2>
<!-- backwards compatibility -->
<a id="schematotalamountrestriction"></a>
<a id="schema_TotalAmountRestriction"></a>
<a id="tocStotalamountrestriction"></a>
<a id="tocstotalamountrestriction"></a>

```json
{
  "operation": "string",
  "value": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[Amount](#schemaamount)|false|none|The amount value and currency.|

<h2 id="tocS_TransactionRule">TransactionRule</h2>
<!-- backwards compatibility -->
<a id="schematransactionrule"></a>
<a id="schema_TransactionRule"></a>
<a id="tocStransactionrule"></a>
<a id="tocstransactionrule"></a>

```json
{
  "aggregationLevel": "string",
  "description": "string",
  "endDate": "string",
  "entityKey": {
    "entityReference": "string",
    "entityType": "string"
  },
  "id": "string",
  "interval": {
    "dayOfMonth": 0,
    "dayOfWeek": "friday",
    "duration": {
      "unit": "days",
      "value": 0
    },
    "timeOfDay": "string",
    "timeZone": "string",
    "type": "daily"
  },
  "outcomeType": "enforceSCA",
  "overridesRule": "string",
  "purpose": "compliance",
  "reference": "string",
  "requestType": "authentication",
  "ruleRestrictions": {
    "activeNetworkTokens": {
      "operation": "string",
      "value": 0
    },
    "brandVariants": {
      "operation": "string",
      "value": [
        "string"
      ]
    },
    "counterpartyBank": {
      "operation": "string",
      "value": [
        {
          "country": "string",
          "identification": "string",
          "identificationType": "bic"
        }
      ]
    },
    "counterpartyTypes": {
      "operation": "string",
      "value": [
        "balanceAccount"
      ]
    },
    "countries": {
      "operation": "string",
      "value": [
        "string"
      ]
    },
    "dayOfWeek": {
      "operation": "string",
      "value": [
        "friday"
      ]
    },
    "differentCurrencies": {
      "operation": "string",
      "value": true
    },
    "entryModes": {
      "operation": "string",
      "value": [
        "barcode"
      ]
    },
    "internationalTransaction": {
      "operation": "string",
      "value": true
    },
    "matchingTransactions": {
      "operation": "string",
      "value": 0
    },
    "matchingValues": {
      "operation": "string",
      "value": [
        "acquirerId"
      ]
    },
    "mccs": {
      "operation": "string",
      "value": [
        "string"
      ]
    },
    "merchantNames": {
      "operation": "string",
      "value": [
        {
          "operation": "contains",
          "value": "string"
        }
      ]
    },
    "merchants": {
      "operation": "string",
      "value": [
        {
          "acquirerId": "string",
          "merchantId": "string"
        }
      ]
    },
    "processingTypes": {
      "operation": "string",
      "value": [
        "atmWithdraw"
      ]
    },
    "riskScores": {
      "operation": "string",
      "value": {
        "mastercard": 0,
        "visa": 0
      }
    },
    "sameAmountRestriction": {
      "operation": "string",
      "value": true
    },
    "sameCounterpartyRestriction": {
      "operation": "string",
      "value": true
    },
    "sourceAccountTypes": {
      "operation": "string",
      "value": [
        "balanceAccount"
      ]
    },
    "timeOfDay": {
      "operation": "string",
      "value": {
        "endTime": "string",
        "startTime": "string"
      }
    },
    "tokenRequestors": {
      "operation": "string",
      "value": [
        "string"
      ]
    },
    "totalAmount": {
      "operation": "string",
      "value": {
        "currency": "string",
        "value": 0
      }
    },
    "walletProviderAccountScore": {
      "operation": "string",
      "value": 0
    },
    "walletProviderDeviceScore": {
      "operation": "string",
      "value": 0
    },
    "walletProviderDeviceType": {
      "operation": "string",
      "value": [
        "CARD"
      ]
    }
  },
  "score": 0,
  "startDate": "string",
  "status": "active",
  "type": "allowList"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationLevel|string|false|none|The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.<br><br>If not provided, by default, the rule will accumulate data at the **paymentInstrument** level.<br><br>Possible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.|
|description|string|true|none|Your description for the transaction rule.|
|endDate|string|false|none|The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided, the rule will be evaluated until the rule status is set to **inactive**.|
|entityKey|[TransactionRuleEntityKey](#schematransactionruleentitykey)|true|none|The type and unique identifier of the resource to which the rule applies.|
|id|string|false|none|The unique identifier of the transaction rule.|
|interval|[TransactionRuleInterval](#schematransactionruleinterval)|true|none|The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.|
|outcomeType|string|false|none|The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule.<br><br>Possible values:<br>* **hardBlock** (default): the transaction is declined.<br>* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined. This value is not allowed when `requestType` is **bankTransfer**.<br><br>* **enforceSCA**: your user is prompted to verify their identity using [3D Secure authentication](https://docs.adyen.com/issuing/3d-secure/). If the authentication fails or times out, the transaction is declined. This value is only allowed when `requestType` is **authentication**.|
|overridesRule|string|false|none|The `id` of the transaction rule you want to override or skip for the specified `entityKey`.|
|purpose|string|false|none|Specifies the reason for creating the rule.<br><br>Possible values:<br>* **fraud**: the rule is created to regulate fraudulent activity.<br>* **policy**: the rule is created to ensure that the transaction adheres to your business' policies. For example, if your business has policies about the Merchant Category Codes (MCCs) allowed on a transaction, you can create a rule to block transactions that have specific MCCs.|
|reference|string|true|none|Your reference for the transaction rule.|
|requestType|string|false|none|Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.<br><br>Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.|
|ruleRestrictions|[TransactionRuleRestrictions](#schematransactionrulerestrictions)|true|none|Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.<br><br>For example, a `countries` object can have a list of country codes **["US", "CA"]** in the `value` field and **anyMatch** in the `operation` field.|
|score|integer(int32)|false|none|A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.|
|startDate|string|false|none|The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. <br><br>|
|status|string|false|none|The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created <br>with an **active** status. <br><br>Possible values: **active**, **inactive**.|
|type|string|true|none|The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.<br><br>Possible values:<br> * **blockList**: decline a transaction when the conditions are met.<br> * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.<br> * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.<br> * **bypass**: bypass or skip a rule for the specified `entityKey`. Transactions processed to that entity are no longer evaluated by the bypassed rule.  You must provide the `id` of the rule to bypass in `overridesRule` and leave the `ruleRestrictions` object empty.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|outcomeType|enforceSCA|
|outcomeType|hardBlock|
|outcomeType|scoreBased|
|outcomeType|timedBlock|
|purpose|compliance|
|purpose|fraud|
|purpose|internalPolicy|
|purpose|policy|
|purpose|system|
|requestType|authentication|
|requestType|authorization|
|requestType|bankTransfer|
|requestType|tokenization|
|status|active|
|status|inactive|
|type|allowList|
|type|blockList|
|type|bypass|
|type|maxUsage|
|type|velocity|

<h2 id="tocS_TransactionRuleEntityKey">TransactionRuleEntityKey</h2>
<!-- backwards compatibility -->
<a id="schematransactionruleentitykey"></a>
<a id="schema_TransactionRuleEntityKey"></a>
<a id="tocStransactionruleentitykey"></a>
<a id="tocstransactionruleentitykey"></a>

```json
{
  "entityReference": "string",
  "entityType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityReference|string|false|none|The unique identifier of the resource.|
|entityType|string|false|none|The type of resource.<br><br>Possible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**.|

<h2 id="tocS_TransactionRuleInfo">TransactionRuleInfo</h2>
<!-- backwards compatibility -->
<a id="schematransactionruleinfo"></a>
<a id="schema_TransactionRuleInfo"></a>
<a id="tocStransactionruleinfo"></a>
<a id="tocstransactionruleinfo"></a>

```json
{
  "aggregationLevel": "string",
  "description": "string",
  "endDate": "string",
  "entityKey": {
    "entityReference": "string",
    "entityType": "string"
  },
  "interval": {
    "dayOfMonth": 0,
    "dayOfWeek": "friday",
    "duration": {
      "unit": "days",
      "value": 0
    },
    "timeOfDay": "string",
    "timeZone": "string",
    "type": "daily"
  },
  "outcomeType": "enforceSCA",
  "overridesRule": "string",
  "purpose": "compliance",
  "reference": "string",
  "requestType": "authentication",
  "ruleRestrictions": {
    "activeNetworkTokens": {
      "operation": "string",
      "value": 0
    },
    "brandVariants": {
      "operation": "string",
      "value": [
        "string"
      ]
    },
    "counterpartyBank": {
      "operation": "string",
      "value": [
        {
          "country": "string",
          "identification": "string",
          "identificationType": "bic"
        }
      ]
    },
    "counterpartyTypes": {
      "operation": "string",
      "value": [
        "balanceAccount"
      ]
    },
    "countries": {
      "operation": "string",
      "value": [
        "string"
      ]
    },
    "dayOfWeek": {
      "operation": "string",
      "value": [
        "friday"
      ]
    },
    "differentCurrencies": {
      "operation": "string",
      "value": true
    },
    "entryModes": {
      "operation": "string",
      "value": [
        "barcode"
      ]
    },
    "internationalTransaction": {
      "operation": "string",
      "value": true
    },
    "matchingTransactions": {
      "operation": "string",
      "value": 0
    },
    "matchingValues": {
      "operation": "string",
      "value": [
        "acquirerId"
      ]
    },
    "mccs": {
      "operation": "string",
      "value": [
        "string"
      ]
    },
    "merchantNames": {
      "operation": "string",
      "value": [
        {
          "operation": "contains",
          "value": "string"
        }
      ]
    },
    "merchants": {
      "operation": "string",
      "value": [
        {
          "acquirerId": "string",
          "merchantId": "string"
        }
      ]
    },
    "processingTypes": {
      "operation": "string",
      "value": [
        "atmWithdraw"
      ]
    },
    "riskScores": {
      "operation": "string",
      "value": {
        "mastercard": 0,
        "visa": 0
      }
    },
    "sameAmountRestriction": {
      "operation": "string",
      "value": true
    },
    "sameCounterpartyRestriction": {
      "operation": "string",
      "value": true
    },
    "sourceAccountTypes": {
      "operation": "string",
      "value": [
        "balanceAccount"
      ]
    },
    "timeOfDay": {
      "operation": "string",
      "value": {
        "endTime": "string",
        "startTime": "string"
      }
    },
    "tokenRequestors": {
      "operation": "string",
      "value": [
        "string"
      ]
    },
    "totalAmount": {
      "operation": "string",
      "value": {
        "currency": "string",
        "value": 0
      }
    },
    "walletProviderAccountScore": {
      "operation": "string",
      "value": 0
    },
    "walletProviderDeviceScore": {
      "operation": "string",
      "value": 0
    },
    "walletProviderDeviceType": {
      "operation": "string",
      "value": [
        "CARD"
      ]
    }
  },
  "score": 0,
  "startDate": "string",
  "status": "active",
  "type": "allowList"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationLevel|string|false|none|The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.<br><br>If not provided, by default, the rule will accumulate data at the **paymentInstrument** level.<br><br>Possible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.|
|description|string|true|none|Your description for the transaction rule.|
|endDate|string|false|none|The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided, the rule will be evaluated until the rule status is set to **inactive**.|
|entityKey|[TransactionRuleEntityKey](#schematransactionruleentitykey)|true|none|The type and unique identifier of the resource to which the rule applies.|
|interval|[TransactionRuleInterval](#schematransactionruleinterval)|true|none|The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.|
|outcomeType|string|false|none|The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule.<br><br>Possible values:<br>* **hardBlock** (default): the transaction is declined.<br>* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined. This value is not allowed when `requestType` is **bankTransfer**.<br><br>* **enforceSCA**: your user is prompted to verify their identity using [3D Secure authentication](https://docs.adyen.com/issuing/3d-secure/). If the authentication fails or times out, the transaction is declined. This value is only allowed when `requestType` is **authentication**.|
|overridesRule|string|false|none|The `id` of the transaction rule you want to override or skip for the specified `entityKey`.|
|purpose|string|false|none|Specifies the reason for creating the rule.<br><br>Possible values:<br>* **fraud**: the rule is created to regulate fraudulent activity.<br>* **policy**: the rule is created to ensure that the transaction adheres to your business' policies. For example, if your business has policies about the Merchant Category Codes (MCCs) allowed on a transaction, you can create a rule to block transactions that have specific MCCs.|
|reference|string|true|none|Your reference for the transaction rule.|
|requestType|string|false|none|Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.<br><br>Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.|
|ruleRestrictions|[TransactionRuleRestrictions](#schematransactionrulerestrictions)|true|none|Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.<br><br>For example, a `countries` object can have a list of country codes **["US", "CA"]** in the `value` field and **anyMatch** in the `operation` field.|
|score|integer(int32)|false|none|A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.|
|startDate|string|false|none|The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. <br><br>|
|status|string|false|none|The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created <br>with an **active** status. <br><br>Possible values: **active**, **inactive**.|
|type|string|true|none|The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.<br><br>Possible values:<br> * **blockList**: decline a transaction when the conditions are met.<br> * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.<br> * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.<br> * **bypass**: bypass or skip a rule for the specified `entityKey`. Transactions processed to that entity are no longer evaluated by the bypassed rule.  You must provide the `id` of the rule to bypass in `overridesRule` and leave the `ruleRestrictions` object empty.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|outcomeType|enforceSCA|
|outcomeType|hardBlock|
|outcomeType|scoreBased|
|outcomeType|timedBlock|
|purpose|compliance|
|purpose|fraud|
|purpose|internalPolicy|
|purpose|policy|
|purpose|system|
|requestType|authentication|
|requestType|authorization|
|requestType|bankTransfer|
|requestType|tokenization|
|status|active|
|status|inactive|
|type|allowList|
|type|blockList|
|type|bypass|
|type|maxUsage|
|type|velocity|

<h2 id="tocS_TransactionRuleInterval">TransactionRuleInterval</h2>
<!-- backwards compatibility -->
<a id="schematransactionruleinterval"></a>
<a id="schema_TransactionRuleInterval"></a>
<a id="tocStransactionruleinterval"></a>
<a id="tocstransactionruleinterval"></a>

```json
{
  "dayOfMonth": 0,
  "dayOfWeek": "friday",
  "duration": {
    "unit": "days",
    "value": 0
  },
  "timeOfDay": "string",
  "timeZone": "string",
  "type": "daily"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfMonth|integer(int32)|false|none|The day of month, used when the `duration.unit` is **months**. If not provided, by default, this is set to **1**, the first day of the month.|
|dayOfWeek|string|false|none|The day of week, used when the `duration.unit` is **weeks**. If not provided, by default, this is set to **monday**.<br><br>Possible values: **sunday**, **monday**, **tuesday**, **wednesday**, **thursday**, **friday**.|
|duration|[Duration](#schemaduration)|false|none|The duration, which you can specify in hours, days, weeks, or months. The maximum duration is 90 days or an equivalent in other units. Required when the `type` is **rolling** or **sliding**.|
|timeOfDay|string|false|none|The time of day, in **hh:mm:ss** format, used when the `duration.unit` is **hours**. If not provided, by default, this is set to **00:00:00**.|
|timeZone|string|false|none|The [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For example, **Europe/Amsterdam**. By default, this is set to **UTC**.|
|type|string|true|none|The [type of interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) during which the rule conditions and limits apply, and how often counters are reset.<br><br>Possible values:<br>  * **perTransaction**: conditions are evaluated and the counters are reset for every transaction.<br> * **daily**: the counters are reset daily at 00:00:00 CET.<br> * **weekly**: the counters are reset every Monday at 00:00:00 CET. <br> * **monthly**: the counters reset every first day of the month at 00:00:00 CET. <br> * **lifetime**: conditions are applied to the lifetime of the payment instrument.<br> * **rolling**: conditions are applied and the counters are reset based on a `duration`. If the reset date and time are not provided, Adyen applies the default reset time similar to fixed intervals. For example, if the duration is every two weeks, the counter resets every third Monday at 00:00:00 CET.<br> * **sliding**: conditions are applied and the counters are reset based on the current time and a `duration` that you specify.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|friday|
|dayOfWeek|monday|
|dayOfWeek|saturday|
|dayOfWeek|sunday|
|dayOfWeek|thursday|
|dayOfWeek|tuesday|
|dayOfWeek|wednesday|
|type|daily|
|type|lifetime|
|type|monthly|
|type|perTransaction|
|type|rolling|
|type|sliding|
|type|weekly|

<h2 id="tocS_TransactionRuleResponse">TransactionRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionruleresponse"></a>
<a id="schema_TransactionRuleResponse"></a>
<a id="tocStransactionruleresponse"></a>
<a id="tocstransactionruleresponse"></a>

```json
{
  "transactionRule": {
    "aggregationLevel": "string",
    "description": "string",
    "endDate": "string",
    "entityKey": {
      "entityReference": "string",
      "entityType": "string"
    },
    "id": "string",
    "interval": {
      "dayOfMonth": 0,
      "dayOfWeek": "friday",
      "duration": {
        "unit": "days",
        "value": 0
      },
      "timeOfDay": "string",
      "timeZone": "string",
      "type": "daily"
    },
    "outcomeType": "enforceSCA",
    "overridesRule": "string",
    "purpose": "compliance",
    "reference": "string",
    "requestType": "authentication",
    "ruleRestrictions": {
      "activeNetworkTokens": {
        "operation": "string",
        "value": 0
      },
      "brandVariants": {
        "operation": "string",
        "value": [
          "string"
        ]
      },
      "counterpartyBank": {
        "operation": "string",
        "value": [
          {
            "country": "string",
            "identification": "string",
            "identificationType": "bic"
          }
        ]
      },
      "counterpartyTypes": {
        "operation": "string",
        "value": [
          "balanceAccount"
        ]
      },
      "countries": {
        "operation": "string",
        "value": [
          "string"
        ]
      },
      "dayOfWeek": {
        "operation": "string",
        "value": [
          "friday"
        ]
      },
      "differentCurrencies": {
        "operation": "string",
        "value": true
      },
      "entryModes": {
        "operation": "string",
        "value": [
          "barcode"
        ]
      },
      "internationalTransaction": {
        "operation": "string",
        "value": true
      },
      "matchingTransactions": {
        "operation": "string",
        "value": 0
      },
      "matchingValues": {
        "operation": "string",
        "value": [
          "acquirerId"
        ]
      },
      "mccs": {
        "operation": "string",
        "value": [
          "string"
        ]
      },
      "merchantNames": {
        "operation": "string",
        "value": [
          {
            "operation": "contains",
            "value": "string"
          }
        ]
      },
      "merchants": {
        "operation": "string",
        "value": [
          {
            "acquirerId": "string",
            "merchantId": "string"
          }
        ]
      },
      "processingTypes": {
        "operation": "string",
        "value": [
          "atmWithdraw"
        ]
      },
      "riskScores": {
        "operation": "string",
        "value": {
          "mastercard": 0,
          "visa": 0
        }
      },
      "sameAmountRestriction": {
        "operation": "string",
        "value": true
      },
      "sameCounterpartyRestriction": {
        "operation": "string",
        "value": true
      },
      "sourceAccountTypes": {
        "operation": "string",
        "value": [
          "balanceAccount"
        ]
      },
      "timeOfDay": {
        "operation": "string",
        "value": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "tokenRequestors": {
        "operation": "string",
        "value": [
          "string"
        ]
      },
      "totalAmount": {
        "operation": "string",
        "value": {
          "currency": "string",
          "value": 0
        }
      },
      "walletProviderAccountScore": {
        "operation": "string",
        "value": 0
      },
      "walletProviderDeviceScore": {
        "operation": "string",
        "value": 0
      },
      "walletProviderDeviceType": {
        "operation": "string",
        "value": [
          "CARD"
        ]
      }
    },
    "score": 0,
    "startDate": "string",
    "status": "active",
    "type": "allowList"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionRule|[TransactionRule](#schematransactionrule)|false|none|The transaction rule.|

<h2 id="tocS_TransactionRuleRestrictions">TransactionRuleRestrictions</h2>
<!-- backwards compatibility -->
<a id="schematransactionrulerestrictions"></a>
<a id="schema_TransactionRuleRestrictions"></a>
<a id="tocStransactionrulerestrictions"></a>
<a id="tocstransactionrulerestrictions"></a>

```json
{
  "activeNetworkTokens": {
    "operation": "string",
    "value": 0
  },
  "brandVariants": {
    "operation": "string",
    "value": [
      "string"
    ]
  },
  "counterpartyBank": {
    "operation": "string",
    "value": [
      {
        "country": "string",
        "identification": "string",
        "identificationType": "bic"
      }
    ]
  },
  "counterpartyTypes": {
    "operation": "string",
    "value": [
      "balanceAccount"
    ]
  },
  "countries": {
    "operation": "string",
    "value": [
      "string"
    ]
  },
  "dayOfWeek": {
    "operation": "string",
    "value": [
      "friday"
    ]
  },
  "differentCurrencies": {
    "operation": "string",
    "value": true
  },
  "entryModes": {
    "operation": "string",
    "value": [
      "barcode"
    ]
  },
  "internationalTransaction": {
    "operation": "string",
    "value": true
  },
  "matchingTransactions": {
    "operation": "string",
    "value": 0
  },
  "matchingValues": {
    "operation": "string",
    "value": [
      "acquirerId"
    ]
  },
  "mccs": {
    "operation": "string",
    "value": [
      "string"
    ]
  },
  "merchantNames": {
    "operation": "string",
    "value": [
      {
        "operation": "contains",
        "value": "string"
      }
    ]
  },
  "merchants": {
    "operation": "string",
    "value": [
      {
        "acquirerId": "string",
        "merchantId": "string"
      }
    ]
  },
  "processingTypes": {
    "operation": "string",
    "value": [
      "atmWithdraw"
    ]
  },
  "riskScores": {
    "operation": "string",
    "value": {
      "mastercard": 0,
      "visa": 0
    }
  },
  "sameAmountRestriction": {
    "operation": "string",
    "value": true
  },
  "sameCounterpartyRestriction": {
    "operation": "string",
    "value": true
  },
  "sourceAccountTypes": {
    "operation": "string",
    "value": [
      "balanceAccount"
    ]
  },
  "timeOfDay": {
    "operation": "string",
    "value": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "tokenRequestors": {
    "operation": "string",
    "value": [
      "string"
    ]
  },
  "totalAmount": {
    "operation": "string",
    "value": {
      "currency": "string",
      "value": 0
    }
  },
  "walletProviderAccountScore": {
    "operation": "string",
    "value": 0
  },
  "walletProviderDeviceScore": {
    "operation": "string",
    "value": 0
  },
  "walletProviderDeviceType": {
    "operation": "string",
    "value": [
      "CARD"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeNetworkTokens|[ActiveNetworkTokensRestriction](#schemaactivenetworktokensrestriction)|false|none|The total number of tokens that a card can have across different kinds of digital wallets on the user's phones, watches, or other wearables.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.|
|brandVariants|[BrandVariantsRestriction](#schemabrandvariantsrestriction)|false|none|List of card brand variants and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|counterpartyBank|[CounterpartyBankRestriction](#schemacounterpartybankrestriction)|false|none|Contains a list of counterparty financial institutions and how they must be evaluated.<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|counterpartyTypes|[CounterpartyTypesRestriction](#schemacounterpartytypesrestriction)|false|none|Contains a list of counterparty types and how they must be evaluated.<br><br>Supported operations: **anyMatch**, **noneMatch**.<br><br>Supported value inputs:<br>- **balanceAccount**<br>- **bankAccount**<br>- **card**<br>- **transferInstrument**|
|countries|[CountriesRestriction](#schemacountriesrestriction)|false|none|List of countries and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|dayOfWeek|[DayOfWeekRestriction](#schemadayofweekrestriction)|false|none|List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**.|
|differentCurrencies|[DifferentCurrenciesRestriction](#schemadifferentcurrenciesrestriction)|false|none|Compares the currency of the payment against the currency of the payment instrument, and specifies the operation.<br><br>Supported operations: **equals**, **notEquals**.|
|entryModes|[EntryModesRestriction](#schemaentrymodesrestriction)|false|none|List of point-of-sale entry modes and the operation..<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|internationalTransaction|[InternationalTransactionRestriction](#schemainternationaltransactionrestriction)|false|none|Indicates whether transaction is an international transaction and specifies the operation.<br><br>Supported operations: **equals**, **notEquals**.|
|matchingTransactions|[MatchingTransactionsRestriction](#schemamatchingtransactionsrestriction)|false|none|The number of transactions and the operation.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.|
|matchingValues|[MatchingValuesRestriction](#schemamatchingvaluesrestriction)|false|none|Checks if a user has recently made multiple transfers with the specified values.<br><br>To use this restriction, you must:<br><br>- Set the rule `type` to **velocity**.<br><br>- Specify a time `interval`.<br><br>- Specify a number of `matchingTransactions`.<br><br>Supported operation: **allMatch**.<br><br>Supported value inputs:<br>- **merchantId** and **acquirerId**<br>- **amount** and **currency**<br>- **merchantName**.|
|mccs|[MccsRestriction](#schemamccsrestriction)|false|none|List of merchant category codes (MCCs) and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|merchantNames|[MerchantNamesRestriction](#schemamerchantnamesrestriction)|false|none|List of names that will be compared to the merchant name according to the matching type.<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|merchants|[MerchantsRestriction](#schemamerchantsrestriction)|false|none|List of merchant ID and acquirer ID pairs, and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|processingTypes|[ProcessingTypesRestriction](#schemaprocessingtypesrestriction)|false|none|List of processing types and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|riskScores|[RiskScoresRestriction](#schemariskscoresrestriction)|false|none|Risk scores provided by specific sources. The same operation applies to all scores.<br><br>Current sources available: **visa**, **mastercard**<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.|
|sameAmountRestriction|[SameAmountRestriction](#schemasameamountrestriction)|false|none|Checks if a user has recently sent the same amount of funds in multiple transfers.<br><br>To use this restriction, you must:<br><br>- Set the rule `type` to **velocity**.<br><br>- Specify a time `interval`.<br><br>- Specify a number of `matchingTransactions`.<br><br>Supported operation: **equals**.|
|sameCounterpartyRestriction|[SameCounterpartyRestriction](#schemasamecounterpartyrestriction)|false|none|Checks if a user has recently made multiple transfers to the same counterparty.<br><br>To use this restriction, you must:<br><br>- Set the rule `type` to **velocity**.<br><br>- Specify a time `interval`.<br><br>- Specify a number of `matchingTransactions`.<br><br>Supported operations: **equals**.|
|sourceAccountTypes|[SourceAccountTypesRestriction](#schemasourceaccounttypesrestriction)|false|none|Contains a list of source account types and how they must be evaluated.<br><br>Supported operations: **anyMatch**, **noneMatch**.<br><br>Supported value inputs:<br>- **balanceAccount**<br>- **businessAccount**.|
|timeOfDay|[TimeOfDayRestriction](#schematimeofdayrestriction)|false|none|A start and end time in a time-only ISO-8601 extended offset format. Supported operations: **equals**, **notEquals**.|
|tokenRequestors|[TokenRequestorsRestriction](#schematokenrequestorsrestriction)|false|none|List of token requestor IDs and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**.|
|totalAmount|[TotalAmountRestriction](#schematotalamountrestriction)|false|none|The total amount and the operation.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.|
|walletProviderAccountScore|[WalletProviderAccountScoreRestriction](#schemawalletprovideraccountscorerestriction)|false|none|Checks the wallet account score.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.|
|walletProviderDeviceScore|[WalletProviderDeviceScore](#schemawalletproviderdevicescore)|false|none|Wallet Provider Device Score and the operation.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.|
|walletProviderDeviceType|[WalletProviderDeviceType](#schemawalletproviderdevicetype)|false|none|Wallet Provider Device Type and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**.<br><br>Supported value inputs:<br>- **MOBILE_PHONE**<br>- **TABLET_OR_EREADER**<br>- **WATCH_OR_WRISTBAND**<br>- **WEARABLE**<br><br>- **CARD**<br>- **PC**<br>- **OTHER**<br>- **UNKNOWN**<br>|

<h2 id="tocS_TransactionRulesResponse">TransactionRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionrulesresponse"></a>
<a id="schema_TransactionRulesResponse"></a>
<a id="tocStransactionrulesresponse"></a>
<a id="tocstransactionrulesresponse"></a>

```json
{
  "transactionRules": [
    {
      "aggregationLevel": "string",
      "description": "string",
      "endDate": "string",
      "entityKey": {
        "entityReference": "string",
        "entityType": "string"
      },
      "id": "string",
      "interval": {
        "dayOfMonth": 0,
        "dayOfWeek": "friday",
        "duration": {
          "unit": "days",
          "value": 0
        },
        "timeOfDay": "string",
        "timeZone": "string",
        "type": "daily"
      },
      "outcomeType": "enforceSCA",
      "overridesRule": "string",
      "purpose": "compliance",
      "reference": "string",
      "requestType": "authentication",
      "ruleRestrictions": {
        "activeNetworkTokens": {
          "operation": "string",
          "value": 0
        },
        "brandVariants": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "counterpartyBank": {
          "operation": "string",
          "value": [
            {
              "country": "string",
              "identification": "string",
              "identificationType": "bic"
            }
          ]
        },
        "counterpartyTypes": {
          "operation": "string",
          "value": [
            "balanceAccount"
          ]
        },
        "countries": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "dayOfWeek": {
          "operation": "string",
          "value": [
            "friday"
          ]
        },
        "differentCurrencies": {
          "operation": "string",
          "value": true
        },
        "entryModes": {
          "operation": "string",
          "value": [
            "barcode"
          ]
        },
        "internationalTransaction": {
          "operation": "string",
          "value": true
        },
        "matchingTransactions": {
          "operation": "string",
          "value": 0
        },
        "matchingValues": {
          "operation": "string",
          "value": [
            "acquirerId"
          ]
        },
        "mccs": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "merchantNames": {
          "operation": "string",
          "value": [
            {
              "operation": "contains",
              "value": "string"
            }
          ]
        },
        "merchants": {
          "operation": "string",
          "value": [
            {
              "acquirerId": "string",
              "merchantId": "string"
            }
          ]
        },
        "processingTypes": {
          "operation": "string",
          "value": [
            "atmWithdraw"
          ]
        },
        "riskScores": {
          "operation": "string",
          "value": {
            "mastercard": 0,
            "visa": 0
          }
        },
        "sameAmountRestriction": {
          "operation": "string",
          "value": true
        },
        "sameCounterpartyRestriction": {
          "operation": "string",
          "value": true
        },
        "sourceAccountTypes": {
          "operation": "string",
          "value": [
            "balanceAccount"
          ]
        },
        "timeOfDay": {
          "operation": "string",
          "value": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "tokenRequestors": {
          "operation": "string",
          "value": [
            "string"
          ]
        },
        "totalAmount": {
          "operation": "string",
          "value": {
            "currency": "string",
            "value": 0
          }
        },
        "walletProviderAccountScore": {
          "operation": "string",
          "value": 0
        },
        "walletProviderDeviceScore": {
          "operation": "string",
          "value": 0
        },
        "walletProviderDeviceType": {
          "operation": "string",
          "value": [
            "CARD"
          ]
        }
      },
      "score": 0,
      "startDate": "string",
      "status": "active",
      "type": "allowList"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionRules|[[TransactionRule](#schematransactionrule)]|false|none|List of transaction rules.|

<h2 id="tocS_TransferRoute">TransferRoute</h2>
<!-- backwards compatibility -->
<a id="schematransferroute"></a>
<a id="schema_TransferRoute"></a>
<a id="tocStransferroute"></a>
<a id="tocstransferroute"></a>

```json
{
  "category": "bank",
  "country": "string",
  "currency": "string",
  "priority": "crossBorder",
  "requirements": [
    {
      "additionalBankIdentificationType": "auBsbCode",
      "description": "string",
      "type": "additionalBankIdentificationRequirement"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none| The type of transfer.<br><br> Possible values:<br><br>  - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.<br>|
|country|string|false|none|The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**.|
|currency|string|false|none|The three-character ISO currency code of transfer. For example, **USD** or **EUR**.|
|priority|string|false|none|The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).|
|requirements|[[AdditionalBankIdentificationRequirement](#schemaadditionalbankidentificationrequirement) \| [AddressRequirement](#schemaaddressrequirement) \| [AmountMinMaxRequirement](#schemaamountminmaxrequirement) \| [AmountNonZeroDecimalsRequirement](#schemaamountnonzerodecimalsrequirement) \| [BankAccountIdentificationTypeRequirement](#schemabankaccountidentificationtyperequirement) \| [IbanAccountIdentificationRequirement](#schemaibanaccountidentificationrequirement) \| [PaymentInstrumentRequirement](#schemapaymentinstrumentrequirement) \| [USInstantPayoutAddressRequirement](#schemausinstantpayoutaddressrequirement) \| [USInternationalAchAddressRequirement](#schemausinternationalachaddressrequirement) \| [USInternationalAchPriorityRequirement](#schemausinternationalachpriorityrequirement)]|false|none|A set of rules defined by clearing houses and banking partners. Your transfer request must adhere to these rules to ensure successful initiation of transfer. Based on the priority, one or more requirements may be returned. Each requirement is defined with a `type` and `description`.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|card|
|category|grants|
|category|interest|
|category|internal|
|category|issuedCard|
|category|migration|
|category|platformPayment|
|category|topUp|
|category|upgrade|
|priority|crossBorder|
|priority|fast|
|priority|instant|
|priority|internal|
|priority|regular|
|priority|wire|

<h2 id="tocS_TransferRouteRequest">TransferRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferrouterequest"></a>
<a id="schema_TransferRouteRequest"></a>
<a id="tocStransferrouterequest"></a>
<a id="tocstransferrouterequest"></a>

```json
{
  "balanceAccountId": "string",
  "balancePlatform": "string",
  "category": "bank",
  "counterparty": {
    "bankAccount": {
      "accountIdentification": {
        "accountNumber": "string",
        "bsbCode": "string",
        "type": "auLocal"
      }
    },
    "transferInstrumentId": "string"
  },
  "country": "string",
  "currency": "string",
  "priorities": [
    "crossBorder"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).<br>Required if `counterparty` is **transferInstrumentId**.|
|balancePlatform|string|true|none|The unique identifier assigned to the balance platform associated with the account holder.|
|category|string|true|none| The type of transfer. Possible values:<br><br>  - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.<br>|
|counterparty|[Counterparty](#schemacounterparty)|false|none|The recipient of the funds transfer. A bank account or a transfer instrument.|
|country|string|false|none|The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**.<br> > Either `counterparty` or `country` field must be provided in a transfer route request.|
|currency|string|true|none|The three-character ISO currency code of transfer. For example, **USD** or **EUR**.|
|priorities|[string]|false|none|The list of priorities for the bank transfer. Priorities set the speed at which the transfer is sent and the fees that you have to pay. Multiple values can be provided.<br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|priorities|crossBorder|
|priorities|fast|
|priorities|instant|
|priorities|internal|
|priorities|regular|
|priorities|wire|

<h2 id="tocS_TransferRouteResponse">TransferRouteResponse</h2>
<!-- backwards compatibility -->
<a id="schematransferrouteresponse"></a>
<a id="schema_TransferRouteResponse"></a>
<a id="tocStransferrouteresponse"></a>
<a id="tocstransferrouteresponse"></a>

```json
{
  "transferRoutes": [
    {
      "category": "bank",
      "country": "string",
      "currency": "string",
      "priority": "crossBorder",
      "requirements": [
        {
          "additionalBankIdentificationType": "auBsbCode",
          "description": "string",
          "type": "additionalBankIdentificationRequirement"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferRoutes|[[TransferRoute](#schematransferroute)]|false|none|List of available priorities for a transfer, along with requirements. Use this information to initiate a transfer.|

<h2 id="tocS_UKLocalAccountIdentification">UKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemauklocalaccountidentification"></a>
<a id="schema_UKLocalAccountIdentification"></a>
<a id="tocSuklocalaccountidentification"></a>
<a id="tocsuklocalaccountidentification"></a>

```json
{
  "accountNumber": "stringst",
  "sortCode": "string",
  "type": "ukLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 8-digit bank account number, without separators or whitespace.|
|sortCode|string|true|none|The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.|
|type|string|true|none|**ukLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ukLocal|

<h2 id="tocS_USInstantPayoutAddressRequirement">USInstantPayoutAddressRequirement</h2>
<!-- backwards compatibility -->
<a id="schemausinstantpayoutaddressrequirement"></a>
<a id="schema_USInstantPayoutAddressRequirement"></a>
<a id="tocSusinstantpayoutaddressrequirement"></a>
<a id="tocsusinstantpayoutaddressrequirement"></a>

```json
{
  "description": "string",
  "type": "usInstantPayoutAddressRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Specifies that you must provide complete street addresses for the party and counterParty for transactions greater than USD 3000.|
|type|string|true|none|**usInstantPayoutAddressRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|usInstantPayoutAddressRequirement|

<h2 id="tocS_USInternationalAchAddressRequirement">USInternationalAchAddressRequirement</h2>
<!-- backwards compatibility -->
<a id="schemausinternationalachaddressrequirement"></a>
<a id="schema_USInternationalAchAddressRequirement"></a>
<a id="tocSusinternationalachaddressrequirement"></a>
<a id="tocsusinternationalachaddressrequirement"></a>

```json
{
  "description": "string",
  "type": "usInternationalAchAddressRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Specifies that you must provide a complete street address for International ACH (IAT) transactions.|
|type|string|true|none|**usInternationalAchAddressRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|usInternationalAchAddressRequirement|

<h2 id="tocS_USInternationalAchPriorityRequirement">USInternationalAchPriorityRequirement</h2>
<!-- backwards compatibility -->
<a id="schemausinternationalachpriorityrequirement"></a>
<a id="schema_USInternationalAchPriorityRequirement"></a>
<a id="tocSusinternationalachpriorityrequirement"></a>
<a id="tocsusinternationalachpriorityrequirement"></a>

```json
{
  "description": "string",
  "type": "usInternationalAchPriorityRequirement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Specifies that transactions deemed to be International ACH (IAT) per OFAC/NACHA rules cannot have fast priority.|
|type|string|true|none|**usInternationalAchPriorityRequirement**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|usInternationalAchPriorityRequirement|

<h2 id="tocS_USLocalAccountIdentification">USLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemauslocalaccountidentification"></a>
<a id="schema_USLocalAccountIdentification"></a>
<a id="tocSuslocalaccountidentification"></a>
<a id="tocsuslocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "accountType": "checking",
  "routingNumber": "stringstr",
  "type": "usLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|accountType|string|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|routingNumber|string|true|none|The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.|
|type|string|true|none|**usLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|checking|
|accountType|savings|
|type|usLocal|

<h2 id="tocS_UpdateNetworkTokenRequest">UpdateNetworkTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworktokenrequest"></a>
<a id="schema_UpdateNetworkTokenRequest"></a>
<a id="tocSupdatenetworktokenrequest"></a>
<a id="tocsupdatenetworktokenrequest"></a>

```json
{
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The new status of the network token. Possible values: **active**, **suspended**, **closed**. The **closed** status is final and cannot be changed.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|suspended|
|status|closed|

<h2 id="tocS_UpdatePaymentInstrument">UpdatePaymentInstrument</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepaymentinstrument"></a>
<a id="schema_UpdatePaymentInstrument"></a>
<a id="tocSupdatepaymentinstrument"></a>
<a id="tocsupdatepaymentinstrument"></a>

```json
{
  "additionalBankAccountIdentifications": [
    {
      "bic": "string",
      "iban": "string",
      "type": "iban"
    }
  ],
  "balanceAccountId": "string",
  "bankAccount": {
    "accountNumber": "string",
    "accountType": "checking",
    "branchNumber": "string",
    "formFactor": "physical",
    "iban": "string",
    "routingNumber": "string",
    "sortCode": "string",
    "type": "iban"
  },
  "card": {
    "authentication": {
      "email": "string",
      "password": "string",
      "phone": {
        "number": "string",
        "type": "landline"
      }
    },
    "bin": "string",
    "brand": "string",
    "brandVariant": "string",
    "cardholderName": "string",
    "configuration": {
      "activation": "string",
      "activationUrl": "string",
      "bulkAddress": {
        "city": "string",
        "company": "string",
        "country": "string",
        "email": "string",
        "houseNumberOrName": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "mobile": "string",
        "name": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "cardImageId": "string",
      "carrier": "string",
      "carrierImageId": "string",
      "configurationProfileId": "string",
      "currency": "string",
      "envelope": "string",
      "insert": "string",
      "language": "string",
      "logoImageId": "string",
      "pinMailer": "string",
      "printLine": "string",
      "shipmentMethod": "string"
    },
    "cvc": "string",
    "deliveryContact": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "company": "string",
      "email": "string",
      "fullPhoneNumber": "string",
      "name": {
        "firstName": "string",
        "lastName": "string"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "webAddress": "string"
    },
    "expiration": {
      "month": "string",
      "year": "string"
    },
    "formFactor": "physical",
    "lastFour": "string",
    "number": "string",
    "threeDSecure": "string",
    "usage": "string"
  },
  "description": "string",
  "id": "string",
  "issuingCountryCode": "string",
  "paymentInstrumentGroupId": "string",
  "reference": "string",
  "replacedById": "string",
  "replacementOfId": "string",
  "status": "active",
  "statusComment": "string",
  "statusReason": "accountClosure",
  "type": "bankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalBankAccountIdentifications|[[IbanAccountIdentification](#schemaibanaccountidentification)]|false|none|**Deprecated.** Contains optional, additional business account details. Returned when you create a payment instrument with `type` **bankAccount**.|
|balanceAccountId|string|true|none|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.|
|bankAccount|[BankAccountDetails](#schemabankaccountdetails)|false|none|Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.|
|card|[Card](#schemacard)|false|none|Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**.|
|description|string|false|none|Your description for the payment instrument, maximum 300 characters.|
|id|string|true|none|The unique identifier of the payment instrument.|
|issuingCountryCode|string|true|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.|
|paymentInstrumentGroupId|string|false|none|The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.|
|reference|string|false|none|Your reference for the payment instrument, maximum 150 characters.|
|replacedById|string|false|none|The unique identifier of the payment instrument that replaced this payment instrument.|
|replacementOfId|string|false|none|The unique identifier of the payment instrument that is replaced by this payment instrument.|
|status|string|false|none|The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values: <br><br> * **active**:  The payment instrument is active and can be used to make payments. <br><br> * **inactive**: The payment instrument is inactive and cannot be used to make payments. <br><br> * **suspended**: The payment instrument is suspended, either because it was stolen or lost. <br><br> * **closed**: The payment instrument is permanently closed. This action cannot be undone. <br><br>|
|statusComment|string|false|none|Comment for the status of the payment instrument.<br><br>Required if `statusReason` is **other**.|
|statusReason|string|false|none|The reason for the status of the payment instrument.<br><br>Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change.|
|type|string|true|none|The type of payment instrument.<br><br>Possible values: **card**, **bankAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|
|statusReason|accountClosure|
|statusReason|damaged|
|statusReason|endOfLife|
|statusReason|expired|
|statusReason|lost|
|statusReason|other|
|statusReason|stolen|
|statusReason|suspectedFraud|
|statusReason|transactionRule|
|type|bankAccount|
|type|card|

<h2 id="tocS_UpdateSweepConfigurationV2">UpdateSweepConfigurationV2</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesweepconfigurationv2"></a>
<a id="schema_UpdateSweepConfigurationV2"></a>
<a id="tocSupdatesweepconfigurationv2"></a>
<a id="tocsupdatesweepconfigurationv2"></a>

```json
{
  "category": "bank",
  "counterparty": {
    "balanceAccountId": "string",
    "merchantAccount": "string",
    "transferInstrumentId": "string"
  },
  "currency": "string",
  "description": "string",
  "id": "string",
  "priorities": [
    "crossBorder"
  ],
  "reason": "accountHierarchyNotActive",
  "reasonDetail": "string",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "schedule": {
    "cronExpression": "string",
    "type": "daily"
  },
  "status": "active",
  "sweepAmount": {
    "currency": "string",
    "value": 0
  },
  "targetAmount": {
    "currency": "string",
    "value": 0
  },
  "triggerAmount": {
    "currency": "string",
    "value": 0
  },
  "type": "push"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The type of transfer that results from the sweep.<br><br>Possible values:<br><br> - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).<br><br>- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.<br><br>Required when setting `priorities`.|
|counterparty|[SweepCounterparty](#schemasweepcounterparty)|false|none|The destination or the source of the funds, depending on the sweep `type`.<br><br>Either a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.<br><br>The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).|
|description|string|false|none|The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message will be cut off at 140 characters.|
|id|string|false|read-only|The unique identifier of the sweep.|
|priorities|[string]|false|none|The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities, ordered by your preference. Adyen will try to pay out using the priorities in the given order. If the first priority is not currently supported or enabled for your platform, the system will try the next one, and so on.<br><br>The request will be accepted as long as **at least one** of the provided priorities is valid (i.e., supported by Adyen and activated for your platform). For example, if you provide `["wire","regular"]`, and `wire` is not supported but `regular` is, the request will still be accepted and processed.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Set `category` to **bank**. For more details, see optional priorities setup for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/scheduled-payouts#optional-priorities-setup) or [platforms](https://docs.adyen.com/platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).|
|reason|string|false|read-only|The reason for disabling the sweep.|
|reasonDetail|string|false|read-only|The human readable reason for disabling the sweep.|
|reference|string|false|none|Your reference for the sweep configuration.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty. Only alphanumeric characters are allowed.|
|schedule|[SweepSchedule](#schemasweepschedule)|false|none|The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.|
|status|string|false|none|The status of the sweep. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. <br><br> * **inactive**: the sweep is disabled and cannot be triggered. <br><br>|
|sweepAmount|[Amount](#schemaamount)|false|none|The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.|
|targetAmount|[Amount](#schemaamount)|false|none|The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.|
|triggerAmount|[Amount](#schemaamount)|false|none|The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.<br><br>* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.<br><br>* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.|
|type|string|false|none|The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.<br><br>Possible values:<br><br> * **push**: _push out funds_ to a destination balance account or transfer instrument.<br><br> * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|internal|
|category|platformPayment|
|priorities|crossBorder|
|priorities|fast|
|priorities|instant|
|priorities|internal|
|priorities|regular|
|priorities|wire|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approved|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|directDebitNotSupported|
|reason|error|
|reason|notEnoughBalance|
|reason|refusedByCounterpartyBank|
|reason|routeNotFound|
|reason|transferInstrumentDoesNotExist|
|reason|unknown|
|status|active|
|status|inactive|
|type|pull|
|type|push|

<h2 id="tocS_VerificationDeadline">VerificationDeadline</h2>
<!-- backwards compatibility -->
<a id="schemaverificationdeadline"></a>
<a id="schema_VerificationDeadline"></a>
<a id="tocSverificationdeadline"></a>
<a id="tocsverificationdeadline"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "entityIds": [
    "string"
  ],
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|true|read-only|The names of the capabilities to be disallowed.|
|entityIds|[string]|false|read-only|The unique identifiers of the bank account(s) that the deadline applies to|
|expiresAt|string(date-time)|true|read-only|The date that verification is due by before capabilities are disallowed.|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|

<h2 id="tocS_VerificationError">VerificationError</h2>
<!-- backwards compatibility -->
<a id="schemaverificationerror"></a>
<a id="schema_VerificationError"></a>
<a id="tocSverificationerror"></a>
<a id="tocsverificationerror"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "code": "string",
  "message": "string",
  "remediatingActions": [
    {
      "code": "string",
      "message": "string"
    }
  ],
  "subErrors": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "code": "string",
      "message": "string",
      "type": "dataMissing",
      "remediatingActions": [
        {
          "code": "string",
          "message": "string"
        }
      ]
    }
  ],
  "type": "dataMissing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|false|none|Contains the capabilities that the verification error applies to.|
|code|string|false|none|The verification error code.|
|message|string|false|none|A description of the error.|
|remediatingActions|[[RemediatingAction](#schemaremediatingaction)]|false|none|Contains the actions that you can take to resolve the verification error.|
|subErrors|[[VerificationError-recursive](#schemaverificationerror-recursive)]|false|none|Contains more granular information about the verification error.|
|type|string|false|none|The type of error.<br><br><br><br>Possible values:<br>*  **invalidInput**<br>*  **dataMissing**<br>*  **pendingStatus**<br>*  **dataReview**<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|
|type|dataMissing|
|type|dataReview|
|type|invalidInput|
|type|pendingStatus|

<h2 id="tocS_VerificationError-recursive">VerificationError-recursive</h2>
<!-- backwards compatibility -->
<a id="schemaverificationerror-recursive"></a>
<a id="schema_VerificationError-recursive"></a>
<a id="tocSverificationerror-recursive"></a>
<a id="tocsverificationerror-recursive"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "code": "string",
  "message": "string",
  "type": "dataMissing",
  "remediatingActions": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|false|none|Contains the capabilities that the verification error applies to.|
|code|string|false|none|The verification error code.|
|message|string|false|none|A description of the error.|
|type|string|false|none|The type of error.<br><br><br><br>Possible values:<br>*  **invalidInput**<br>*  **dataMissing**<br>*  **pendingStatus**<br>*  **dataReview**<br><br>|
|remediatingActions|[[RemediatingAction](#schemaremediatingaction)]|false|none|Contains the actions that you can take to resolve the verification error.|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|
|type|dataMissing|
|type|dataReview|
|type|invalidInput|
|type|pendingStatus|

<h2 id="tocS_WalletProviderAccountScoreRestriction">WalletProviderAccountScoreRestriction</h2>
<!-- backwards compatibility -->
<a id="schemawalletprovideraccountscorerestriction"></a>
<a id="schema_WalletProviderAccountScoreRestriction"></a>
<a id="tocSwalletprovideraccountscorerestriction"></a>
<a id="tocswalletprovideraccountscorerestriction"></a>

```json
{
  "operation": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|integer(int32)|false|none|none|

<h2 id="tocS_WalletProviderDeviceScore">WalletProviderDeviceScore</h2>
<!-- backwards compatibility -->
<a id="schemawalletproviderdevicescore"></a>
<a id="schema_WalletProviderDeviceScore"></a>
<a id="tocSwalletproviderdevicescore"></a>
<a id="tocswalletproviderdevicescore"></a>

```json
{
  "operation": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|integer(int32)|false|none|none|

<h2 id="tocS_WalletProviderDeviceType">WalletProviderDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemawalletproviderdevicetype"></a>
<a id="schema_WalletProviderDeviceType"></a>
<a id="tocSwalletproviderdevicetype"></a>
<a id="tocswalletproviderdevicetype"></a>

```json
{
  "operation": "string",
  "value": [
    "CARD"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Defines how the condition must be evaluated.|
|value|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|value|CARD|
|value|MOBILE_PHONE|
|value|OTHER|
|value|PC|
|value|TABLET_OR_EREADER|
|value|UNKNOWN|
|value|WATCH_OR_WRISTBAND|
|value|WEARABLE|

<h2 id="tocS_AmountDTO">AmountDTO</h2>
<!-- backwards compatibility -->
<a id="schemaamountdto"></a>
<a id="schema_AmountDTO"></a>
<a id="tocSamountdto"></a>
<a id="tocsamountdto"></a>

```json
{
  "currency": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|value|integer(int64)|true|none|The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_AmountUpdate">AmountUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaamountupdate"></a>
<a id="schema_AmountUpdate"></a>
<a id="tocSamountupdate"></a>
<a id="tocsamountupdate"></a>

```json
{
  "currency": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|value|integer(int64)|false|none|The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_ApproveAssociationRequest">ApproveAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapproveassociationrequest"></a>
<a id="schema_ApproveAssociationRequest"></a>
<a id="tocSapproveassociationrequest"></a>
<a id="tocsapproveassociationrequest"></a>

```json
{
  "entityId": "string",
  "entityType": "accountHolder",
  "scaDeviceIds": [
    "stringstringstringstringstring"
  ],
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|string|true|none|The unique identifier of the entity.|
|entityType|[ScaEntityType](#schemascaentitytype)|true|none|The type of the entity. <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.|
|scaDeviceIds|[string]|true|none|List of device ids associated to the entity that will be approved.|
|status|[AssociationStatus](#schemaassociationstatus)|true|none|The status of the association. <br><br>Possible values: **active** or **pendingApproval**.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|accountHolder|
|entityType|legalEntity|
|entityType|paymentInstrument|
|status|pendingApproval|
|status|active|

<h2 id="tocS_ApproveAssociationResponse">ApproveAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapproveassociationresponse"></a>
<a id="schema_ApproveAssociationResponse"></a>
<a id="tocSapproveassociationresponse"></a>
<a id="tocsapproveassociationresponse"></a>

```json
{
  "scaAssociations": [
    {
      "entityId": "string",
      "entityType": "accountHolder",
      "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
      "status": "pendingApproval"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scaAssociations|[[Association](#schemaassociation)]|true|none|The list of associations.|

<h2 id="tocS_ApproveTransferLimitRequest">ApproveTransferLimitRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapprovetransferlimitrequest"></a>
<a id="schema_ApproveTransferLimitRequest"></a>
<a id="tocSapprovetransferlimitrequest"></a>
<a id="tocsapprovetransferlimitrequest"></a>

```json
{
  "transferLimitIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferLimitIds|[string]|true|none|A list that includes the `transferLimitId` of all the pending transfer limits you want to approve.|

<h2 id="tocS_Association">Association</h2>
<!-- backwards compatibility -->
<a id="schemaassociation"></a>
<a id="schema_Association"></a>
<a id="tocSassociation"></a>
<a id="tocsassociation"></a>

```json
{
  "entityId": "string",
  "entityType": "accountHolder",
  "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
  "status": "pendingApproval"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|string|true|none|The unique identifier of the entity.|
|entityType|[ScaEntityType](#schemascaentitytype)|true|none|The type of entity you are associating the device with. <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.|
|scaDeviceId|string|true|none|The unique identifier for the SCA device.|
|status|[AssociationStatus](#schemaassociationstatus)|true|none|The status of the association. <br><br>Possible values: **active** or **pendingApproval**.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|accountHolder|
|entityType|legalEntity|
|entityType|paymentInstrument|
|status|pendingApproval|
|status|active|

<h2 id="tocS_AssociationListing">AssociationListing</h2>
<!-- backwards compatibility -->
<a id="schemaassociationlisting"></a>
<a id="schema_AssociationListing"></a>
<a id="tocSassociationlisting"></a>
<a id="tocsassociationlisting"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "entityId": "string",
  "entityType": "accountHolder",
  "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
  "scaDeviceName": "string",
  "scaDeviceType": "browser",
  "status": "pendingApproval"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the association was created.|
|entityId|string|true|none|The unique identifier of the entity.|
|entityType|[ScaEntityType](#schemascaentitytype)|true|none|The type of the entity. <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.|
|scaDeviceId|string|true|none|The unique identifier of the SCA device.|
|scaDeviceName|string|false|none|The human-readable name for the SCA device that was registered.|
|scaDeviceType|[ScaDeviceType](#schemascadevicetype)|true|none|The type of the device.|
|status|[AssociationStatus](#schemaassociationstatus)|true|none|The status of the association. <br><br>Possible values: **active** or **pendingApproval**.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|accountHolder|
|entityType|legalEntity|
|entityType|paymentInstrument|
|scaDeviceType|browser|
|scaDeviceType|ios|
|scaDeviceType|android|
|status|pendingApproval|
|status|active|

<h2 id="tocS_AssociationStatus">AssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassociationstatus"></a>
<a id="schema_AssociationStatus"></a>
<a id="tocSassociationstatus"></a>
<a id="tocsassociationstatus"></a>

```json
"pendingApproval"
```

<h2 id="tocS_AuthorisedCardUsers">AuthorisedCardUsers</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisedcardusers"></a>
<a id="schema_AuthorisedCardUsers"></a>
<a id="tocSauthorisedcardusers"></a>
<a id="tocsauthorisedcardusers"></a>

```json
{
  "legalEntityIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalEntityIds|[string]|false|none|The legal entity IDs of the authorized card users linked to the specified payment instrument.|

<h2 id="tocS_BalanceAccountConfiguration">BalanceAccountConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountconfiguration"></a>
<a id="schema_BalanceAccountConfiguration"></a>
<a id="tocSbalanceaccountconfiguration"></a>
<a id="tocsbalanceaccountconfiguration"></a>

```json
{
  "balanceAccountId": "string",
  "balancePlatformPayoutScheduleId": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "currency": "string",
  "description": "string",
  "enabled": true,
  "frequency": "string",
  "frequencyValue": 0,
  "id": "string",
  "maxPayoutAmount": 0,
  "minPayoutAmount": 0,
  "reference": "string",
  "referenceForBeneficiary": "string",
  "retainedAmount": 0,
  "salesDayClosingTime": "string",
  "transferInstrumentId": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|true|none|The unique identifier of the balance account to which you apply the payout schedule.|
|balancePlatformPayoutScheduleId|string|true|none|The unique identifier of the balance platform payout schedule that is applied to the balance account.|
|createdAt|string(date-time)|true|none|The date and time when the payout schedule was created.|
|currency|string|false|none|The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for this schedule.|
|description|string|false|none|The description used for all payouts initiated by this payout schedule.<br><br>Maximum length: 140 characters. If your description is longer, it may be truncated.<br><br>Default value: The `defaultDescription` from the balance platform schedule that you are applying.|
|enabled|boolean|false|none|Specifies whether the payout schedule is active.|
|frequency|[ScheduledPayoutFrequency](#schemascheduledpayoutfrequency)|false|none|The frequency of payouts initiated by this payout schedule.<br><br>Possible values:<br>* daily<br>* weekdays<br>* weekly<br>* monthly<br><br>Default value: The `defaultFrequency` from the balance platform schedule that you are applying.|
|frequencyValue|integer(int32)|false|none|The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated  on the last day of that month.<br><br>Possible values if `frequency` is **weekly**: **[1 - 5]**.<br><br>Default value: The `defaultFrequencyValue` from the balance platform schedule that you are applying.|
|id|string|false|none|The unique identifier of the payout schedule for the balance account.|
|maxPayoutAmount|integer(int64)|false|none|The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|minPayoutAmount|integer(int64)|false|none|The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|reference|string|false|none|Your reference for the payout schedule. This reference does not appear on statements of payouts initiated by the payout schedule.|
|referenceForBeneficiary|string|false|none|The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the payout and is included in all webhooks related to the payout.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.<br><br>Default value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying.|
|retainedAmount|integer(int64)|false|none|The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0**|
|salesDayClosingTime|string|false|none|**Deprecated.** The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.<br><br>Format: **HH:mm:ss**|
|transferInstrumentId|string|true|none|The unique identifier of the transfer instrument to which the funds are paid out.|
|updatedAt|string(date-time)|false|none|The date and time when the payout schedule was updated.|

<h2 id="tocS_BalanceAccountConfigurationRequest">BalanceAccountConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountconfigurationrequest"></a>
<a id="schema_BalanceAccountConfigurationRequest"></a>
<a id="tocSbalanceaccountconfigurationrequest"></a>
<a id="tocsbalanceaccountconfigurationrequest"></a>

```json
{
  "balancePlatformPayoutScheduleId": "string",
  "currency": "string",
  "description": "string",
  "enabled": true,
  "frequency": "daily",
  "frequencyValue": 0,
  "maxPayoutAmount": 0,
  "minPayoutAmount": 0,
  "reference": "string",
  "referenceForBeneficiary": "string",
  "retainedAmount": 0,
  "salesDayClosingTime": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatformPayoutScheduleId|string|true|none|The unique identifier of the payout schedule that is applied to the balance account.|
|currency|string|false|none|The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for this schedule.|
|description|string|false|none|The description used for all payouts initiated by this payout schedule.<br><br>Maximum length: 140 characters. If your description is longer, it may be truncated.<br><br>Default value: The `defaultDescription` from the balance platform schedule that you are applying.|
|enabled|boolean|false|none|Specifies whether the payout schedule is enabled immediately after it is created.|
|frequency|string|false|none|The frequency of payouts initiated by this payout schedule.<br><br>Possible values:<br>* daily<br>* weekdays<br>* weekly<br>* monthly<br><br>Default value: The `defaultFrequency` from the balance platform schedule that you are applying.|
|frequencyValue|integer(int32)|false|none|The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.<br><br>Possible values if `frequency` is **weekly**: **[1 - 5]**.<br><br>Default value: The `defaultFrequencyValue` from the balance platform schedule that you are applying.|
|maxPayoutAmount|integer(int64)|false|none|The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|minPayoutAmount|integer(int64)|false|none|The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|reference|string|false|none|The merchant reference that will be shown only in the schedule.|
|referenceForBeneficiary|string|false|none|The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.<br><br>Default value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying.|
|retainedAmount|integer(int64)|false|none|The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0**|
|salesDayClosingTime|string|false|none|**Deprecated.** The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.<br><br>Format: **HH:mm:ss**|
|transferInstrumentId|string|true|none|The unique identifier of the transfer instrument to which the funds are paid out.|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|daily|
|frequency|weekly|
|frequency|weekdays|
|frequency|monthly|

<h2 id="tocS_BalanceAccountConfigurationUpdate">BalanceAccountConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountconfigurationupdate"></a>
<a id="schema_BalanceAccountConfigurationUpdate"></a>
<a id="tocSbalanceaccountconfigurationupdate"></a>
<a id="tocsbalanceaccountconfigurationupdate"></a>

```json
{
  "description": "string",
  "enabled": true,
  "frequency": "daily",
  "frequencyValue": 0,
  "maxPayoutAmount": 0,
  "minPayoutAmount": 0,
  "reference": "string",
  "referenceForBeneficiary": "string",
  "retainedAmount": 0,
  "salesDayClosingTime": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|The description used for all payouts initiated by this payout schedule.<br><br>Maximum length: 140 characters. If your description is longer, it may be truncated.<br><br>Default value: The `defaultDescription` from the balance platform schedule that you are applying.|
|enabled|boolean \| null|false|none|Specifies whether the payout schedule is enabled immediately after it is created.|
|frequency|string|false|none|The frequency of payouts initiated by this payout schedule.<br><br>Possible values:<br>* daily<br>* weekdays<br>* weekly<br>* monthly<br><br>Default value: The `defaultFrequency` from the balance platform schedule that you are applying.|
|frequencyValue|integer \| null(int32)|false|none|The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.<br><br>Possible values if `frequency` is **weekly**: **[1 - 5]**.<br><br>Default value: The `defaultFrequencyValue` from the balance platform schedule that you are applying.|
|maxPayoutAmount|integer \| null(int64)|false|none|The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|minPayoutAmount|integer \| null(int64)|false|none|The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**|
|reference|string \| null|false|none|The merchant reference that will be shown only in the schedule.|
|referenceForBeneficiary|string \| null|false|none|The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.<br><br>Default value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying.|
|retainedAmount|integer \| null(int64)|false|none|The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0**|
|salesDayClosingTime|string|false|none|**Deprecated.** The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.<br><br>Format: **HH:mm:ss**|
|transferInstrumentId|string|false|none|The unique identifier of the transfer instrument to which the funds are paid out.|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|daily|
|frequency|weekly|
|frequency|weekdays|
|frequency|monthly|

<h2 id="tocS_BalanceAccountConfigurations">BalanceAccountConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemabalanceaccountconfigurations"></a>
<a id="schema_BalanceAccountConfigurations"></a>
<a id="tocSbalanceaccountconfigurations"></a>
<a id="tocsbalanceaccountconfigurations"></a>

```json
{
  "balanceAccountPayoutSchedules": [
    {
      "balanceAccountId": "string",
      "balancePlatformPayoutScheduleId": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "currency": "string",
      "description": "string",
      "enabled": true,
      "frequency": "string",
      "frequencyValue": 0,
      "id": "string",
      "maxPayoutAmount": 0,
      "minPayoutAmount": 0,
      "reference": "string",
      "referenceForBeneficiary": "string",
      "retainedAmount": 0,
      "salesDayClosingTime": "string",
      "transferInstrumentId": "string",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "link": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "previous": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountPayoutSchedules|[[BalanceAccountConfiguration](#schemabalanceaccountconfiguration)]|true|none|Contains a list of the Balance Account payout schedules.|
|link|[Link](#schemalink)|true|none|Contains links to the next and previous page whenever applicable.|

<h2 id="tocS_BalancePlatformConfiguration">BalancePlatformConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabalanceplatformconfiguration"></a>
<a id="schema_BalancePlatformConfiguration"></a>
<a id="tocSbalanceplatformconfiguration"></a>
<a id="tocsbalanceplatformconfiguration"></a>

```json
{
  "automaticApplication": true,
  "balancePlatformId": "string",
  "countryCode": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "currency": "string",
  "defaultDescription": "string",
  "defaultFrequency": "string",
  "defaultFrequencyValue": 0,
  "defaultReference": "string",
  "defaultReferenceForBeneficiary": "string",
  "enabled": true,
  "id": "string",
  "maxPayoutAmount": 0,
  "minPayoutAmount": 0,
  "payoutScheduleDescription": "string",
  "retainedAmount": 0,
  "updatedAt": "1970-01-01T00:00:00Z",
  "userSettlementDelay": 0,
  "userSettlementTime": "string",
  "userSettlementTimeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automaticApplication|boolean|false|none|Specifies whether this payout schedule is automatically applied to new balance accounts.|
|balancePlatformId|string|true|none|The balance platform to which the payout schedule applies.|
|countryCode|string|false|none|The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country to which the payout schedule applies.|
|createdAt|string(date-time)|true|none|The date when the payout schedule was created.|
|currency|string|false|none|The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for the payout schedule.|
|defaultDescription|string|false|none|The default description for payouts initiated by this payout schedule.|
|defaultFrequency|[ScheduledPayoutFrequency](#schemascheduledpayoutfrequency)|false|none|The default frequency of payouts initiated by this payout schedule.|
|defaultFrequencyValue|integer(int32)|false|none|The default value for date of the month or day of the week when payouts are initiated. Allowed only if `defaultFrequency` is **monthly** or **weekly**.<br><br>Possible values if `defaultFrequency` is **monthly**: **[1 - 31]**.<br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated  on the last day of that month.<br><br>Possible values if `defaultFrequency` is **weekly**: **[1 - 5]**.|
|defaultReference|string|false|none|Your internal default reference for the payout schedule.When the payout schedule is applied to a balance account, this reference is also used for that payout schedule.|
|defaultReferenceForBeneficiary|string|false|none|The default reference for beneficiary for payouts initiated by this payout schedule.|
|enabled|boolean|false|none|Specifies whether the payout schedule is enabled immediately after it is created.|
|id|string|false|none|The unique identifier of the payout schedule for your balance platform.|
|maxPayoutAmount|integer(int64)|false|none|The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**, which means that there is no maximum limit.|
|minPayoutAmount|integer(int64)|false|none|The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**.|
|payoutScheduleDescription|string|true|none|The type of payout schedule. This type indicates how fast funds are paid out to your user.<br><br>Possible values:<br>- **Standard**: The funds arrive in your user's transfer instrument two days after the funds are settled.<br>- **Accelerated**: The funds arrive to your user's transfer instrument the day after the funds are settled.|
|retainedAmount|integer(int64)|false|none|The amount of funds that must remain available in a balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0**|
|updatedAt|string(date-time)|false|none|The date when the payout schedule was updated.|
|userSettlementDelay|integer(int32)|true|none|The default [settlement delay](https://docs.adyen.com/platforms/settle-funds/#settlement-delay) for this payout schedule.|
|userSettlementTime|string|true|none|The time when the payout funds are settled in your user's transfer instrument. For example, 11:30:00.|
|userSettlementTimeZone|string|true|none|The timezone of the `userSettlementTime`.|

<h2 id="tocS_BalancePlatformConfigurations">BalancePlatformConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemabalanceplatformconfigurations"></a>
<a id="schema_BalancePlatformConfigurations"></a>
<a id="tocSbalanceplatformconfigurations"></a>
<a id="tocsbalanceplatformconfigurations"></a>

```json
{
  "balancePlatformPayoutSchedules": [
    {
      "automaticApplication": true,
      "balancePlatformId": "string",
      "countryCode": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "currency": "string",
      "defaultDescription": "string",
      "defaultFrequency": "string",
      "defaultFrequencyValue": 0,
      "defaultReference": "string",
      "defaultReferenceForBeneficiary": "string",
      "enabled": true,
      "id": "string",
      "maxPayoutAmount": 0,
      "minPayoutAmount": 0,
      "payoutScheduleDescription": "string",
      "retainedAmount": 0,
      "updatedAt": "1970-01-01T00:00:00Z",
      "userSettlementDelay": 0,
      "userSettlementTime": "string",
      "userSettlementTimeZone": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatformPayoutSchedules|[[BalancePlatformConfiguration](#schemabalanceplatformconfiguration)]|true|none|Contains a list of the payout schedules configured in your balance platform.|

<h2 id="tocS_BalanceWebhookSetting">BalanceWebhookSetting</h2>
<!-- backwards compatibility -->
<a id="schemabalancewebhooksetting"></a>
<a id="schema_BalanceWebhookSetting"></a>
<a id="tocSbalancewebhooksetting"></a>
<a id="tocsbalancewebhooksetting"></a>

```json
{
  "currency": "string",
  "id": "string",
  "status": "string",
  "target": {
    "id": "string",
    "type": "balanceAccount"
  },
  "type": "balance",
  "conditions": [
    {
      "balanceType": "balance",
      "conditionType": "greaterThan",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.|
|id|string|true|none|The unique identifier of the webhook setting.|
|status|[SettingStatus](#schemasettingstatus)|true|none|The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.|
|target|[Target](#schematarget)|true|none|The resource about whose balance change you want to get notified.|
|type|[SettingType](#schemasettingtype)|true|none|The type of the webhook setting.|
|conditions|[[Condition](#schemacondition)]|false|none|The list of settings and criteria for triggering the [balance webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balance|

<h2 id="tocS_BalanceWebhookSettingInfo">BalanceWebhookSettingInfo</h2>
<!-- backwards compatibility -->
<a id="schemabalancewebhooksettinginfo"></a>
<a id="schema_BalanceWebhookSettingInfo"></a>
<a id="tocSbalancewebhooksettinginfo"></a>
<a id="tocsbalancewebhooksettinginfo"></a>

```json
{
  "conditions": [
    {
      "balanceType": "balance",
      "conditionType": "greaterThan",
      "value": 0
    }
  ],
  "currency": "string",
  "status": "active",
  "target": {
    "id": "string",
    "type": "balanceAccount"
  },
  "type": "balance"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[Condition](#schemacondition)]|false|none|The array of conditions a balance change must meet for Adyen to send the webhook.|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.|
|status|string|true|none|The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.|
|target|[Target](#schematarget)|true|none|The type and ID of the resource about whose balance changes you want to be notified.|
|type|string|true|none|The type of the webhook you are configuring. Set to **balance**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|balance|

<h2 id="tocS_BalanceWebhookSettingInfoUpdate">BalanceWebhookSettingInfoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemabalancewebhooksettinginfoupdate"></a>
<a id="schema_BalanceWebhookSettingInfoUpdate"></a>
<a id="tocSbalancewebhooksettinginfoupdate"></a>
<a id="tocsbalancewebhooksettinginfoupdate"></a>

```json
{
  "conditions": [
    {
      "balanceType": "balance",
      "conditionType": "greaterThan",
      "value": 0
    }
  ],
  "currency": "string",
  "status": "active",
  "target": {
    "id": "string",
    "type": "balanceAccount"
  },
  "type": "balance"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[Condition](#schemacondition)]|false|none|The array of conditions a balance change must meet for Adyen to send the webhook.|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.|
|status|string|false|none|The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.|
|target|[TargetUpdate](#schematargetupdate)|false|none|The type and ID of the resource about whose balance changes you want to be notified.|
|type|string|false|none|The type of the webhook you are configuring. Set to **balance**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|balance|

<h2 id="tocS_BeginScaDeviceRegistrationRequest">BeginScaDeviceRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemabeginscadeviceregistrationrequest"></a>
<a id="schema_BeginScaDeviceRegistrationRequest"></a>
<a id="tocSbeginscadeviceregistrationrequest"></a>
<a id="tocsbeginscadeviceregistrationrequest"></a>

```json
{
  "name": "string",
  "sdkOutput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the SCA device that you are registering. You can use it to help your users identify the device.|
|sdkOutput|string|true|none|A base64-encoded block with the data required to register the SCA device. You obtain this information by using Adyen's authentication SDK.|

<h2 id="tocS_BeginScaDeviceRegistrationResponse">BeginScaDeviceRegistrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabeginscadeviceregistrationresponse"></a>
<a id="schema_BeginScaDeviceRegistrationResponse"></a>
<a id="tocSbeginscadeviceregistrationresponse"></a>
<a id="tocsbeginscadeviceregistrationresponse"></a>

```json
{
  "scaDevice": {
    "id": "string",
    "name": "string",
    "type": "browser"
  },
  "sdkInput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scaDevice|[ScaDevice](#schemascadevice)|false|none|A resource that contains information about a device, including its unique ID, name, and type.|
|sdkInput|string|false|none|A string that you must pass to the authentication SDK to continue with the registration process.|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "balanceType": "balance",
  "conditionType": "greaterThan",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceType|string|true|none|Define the type of balance about which you want to get notified. Possible values:<br><br>* **available**: the balance available for use.<br><br>* **balance**: the sum of transactions that have already been settled.<br><br>* **pending**: the sum of transactions that will be settled in the future.<br><br>* **reserved**: the balance currently held in reserve.|
|conditionType|string|true|none|Define when you want to get notified about a balance change. Possible values:<br><br>* **greaterThan**: the balance in the account(s) exceeds the specified `value`.<br><br>* **greaterThanOrEqual**: the balance in the account(s) reaches or exceeds the specified `value`.<br><br>* **lessThan**: the balance in the account(s) drops below the specified `value`.<br><br>* **lessThanOrEqual**: the balance in the account(s) reaches to drops below the specified `value`.|
|value|integer(int64)|true|none|The value limit in the specified balance type and currency, in minor units.|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|balance|
|balanceType|available|
|balanceType|pending|
|balanceType|reserved|
|conditionType|greaterThan|
|conditionType|greaterThanOrEqual|
|conditionType|lessThan|
|conditionType|lessThanOrEqual|

<h2 id="tocS_CreateRecurringTopUp">CreateRecurringTopUp</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecurringtopup"></a>
<a id="schema_CreateRecurringTopUp"></a>
<a id="tocScreaterecurringtopup"></a>
<a id="tocscreaterecurringtopup"></a>

```json
{
  "counterparty": {
    "transferInstrumentId": "string"
  },
  "description": "string",
  "referenceForBeneficiary": "string",
  "status": "active",
  "topUpAmount": {
    "fixed": {
      "currency": "string",
      "value": 0
    },
    "target": {
      "currency": "string",
      "value": 0
    }
  },
  "trigger": {
    "schedule": {
      "type": "weekdays"
    },
    "threshold": {
      "currency": "string",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty|[TopUpCounterparty](#schematopupcounterparty)|true|none|The details about the counterparty that is funding the top-up. |
|description|string|true|none|Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.|
|status|string|false|none|The status of the recurring top-up. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the top up is enabled and funds will be pulled in.<br><br> * **inactive**: the top up is disabled and cannot be triggered. <br><br>|
|topUpAmount|[TopUpAmount](#schematopupamount)|true|none|The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.|
|trigger|[Trigger](#schematrigger)|true|none|The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_CreateScaInformation">CreateScaInformation</h2>
<!-- backwards compatibility -->
<a id="schemacreatescainformation"></a>
<a id="schema_CreateScaInformation"></a>
<a id="tocScreatescainformation"></a>
<a id="tocscreatescainformation"></a>

```json
{
  "exemption": "setByPlatform",
  "scaOnApproval": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemption|[ScaExemption](#schemascaexemption)|false|none|The type of exemption for Strong Customer Authentication (SCA). Possible values:<br>* **lowerLimit**: the newly created limit is lower than the existing limit.<br>* **notRegulated**: the limit is created in a country, region, or industry where it is not mandated by law to use SCA.<br>* **setByPlatform**: you set a limit for one of your user's balance accounts, or for your balance platform.<br>* **initialLimit**: there are no existing transfer limits set on the balance account or balance platform.<br>* **alreadyPerformed**: you are confident about your user's identity and do not need to verify this using SCA.|
|scaOnApproval|boolean|false|none|Indicates whether to initiate Strong Customer Authentication (SCA) later, during approval, or immediately after you submit this request. Possible values:<br>* **true**: you can initiate SCA later, during approval, for all pending transfer limits.<br>* **false** (default): you initiate SCA immediately after submitting the transfer limit request.|

#### Enumerated Values

|Property|Value|
|---|---|
|exemption|setByPlatform|
|exemption|initialLimit|
|exemption|lowerLimit|
|exemption|notRegulated|
|exemption|alreadyPerformed|

<h2 id="tocS_CreateTransferLimitRequest">CreateTransferLimitRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetransferlimitrequest"></a>
<a id="schema_CreateTransferLimitRequest"></a>
<a id="tocScreatetransferlimitrequest"></a>
<a id="tocscreatetransferlimitrequest"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "endsAt": "1970-01-01T00:00:00Z",
  "reference": "string",
  "scaInformation": {
    "exemption": "setByPlatform",
    "scaOnApproval": true
  },
  "scope": "perDay",
  "startsAt": "1970-01-01T00:00:00Z",
  "transferType": "instant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount for the transfer limit. This is the maximum amount allowed per transfer or per day based on the `scope` of the limit.|
|endsAt|string(date-time)|false|none|The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**|
|reference|string|false|none|Your reference for the transfer limit.|
|scaInformation|[CreateScaInformation](#schemacreatescainformation)|false|none|Information for the Strong Customer Authentication (SCA)|
|scope|[Scope](#schemascope)|true|none|The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.|
|startsAt|string(date-time)|false|none|The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**|
|transferType|[TransferType](#schematransfertype)|true|none|The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority.|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|perDay|
|scope|perTransaction|
|transferType|instant|
|transferType|all|

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

<h2 id="tocS_ExecutionResult">ExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionresult"></a>
<a id="schema_ExecutionResult"></a>
<a id="tocSexecutionresult"></a>
<a id="tocsexecutionresult"></a>

```json
"failed"
```

<h2 id="tocS_FinishScaDeviceRegistrationRequest">FinishScaDeviceRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemafinishscadeviceregistrationrequest"></a>
<a id="schema_FinishScaDeviceRegistrationRequest"></a>
<a id="tocSfinishscadeviceregistrationrequest"></a>
<a id="tocsfinishscadeviceregistrationrequest"></a>

```json
{
  "sdkOutput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkOutput|string|true|none|A base64-encoded block with the data required to register the SCA device. You obtain this information by using Adyen's authentication SDK.|

<h2 id="tocS_FinishScaDeviceRegistrationResponse">FinishScaDeviceRegistrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemafinishscadeviceregistrationresponse"></a>
<a id="schema_FinishScaDeviceRegistrationResponse"></a>
<a id="tocSfinishscadeviceregistrationresponse"></a>
<a id="tocsfinishscadeviceregistrationresponse"></a>

```json
{
  "scaDevice": {
    "id": "string",
    "name": "string",
    "type": "browser"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scaDevice|[ScaDevice](#schemascadevice)|false|none|A resource that contains information about a device, including its unique ID, name, and type.|

<h2 id="tocS_LimitStatus">LimitStatus</h2>
<!-- backwards compatibility -->
<a id="schemalimitstatus"></a>
<a id="schema_LimitStatus"></a>
<a id="tocSlimitstatus"></a>
<a id="tocslimitstatus"></a>

```json
"active"
```

The status of the transfer limit. Possible values:   
* **active**: the limit is currently active.
* **inactive**: the limit is currently inactive.
* **pendingSCA**: the limit is pending until your user performs SCA.
* **scheduled**: the limit is scheduled to become active at a future date.

<h2 id="tocS_ListAssociationsResponse">ListAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassociationsresponse"></a>
<a id="schema_ListAssociationsResponse"></a>
<a id="tocSlistassociationsresponse"></a>
<a id="tocslistassociationsresponse"></a>

```json
{
  "_links": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "previous": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "entityId": "string",
      "entityType": "accountHolder",
      "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
      "scaDeviceName": "string",
      "scaDeviceType": "browser",
      "status": "pendingApproval"
    }
  ],
  "itemsTotal": 1,
  "pagesTotal": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[Link](#schemalink)|true|none|A list of hyperlinks to resources related to this response.|
|data|[[AssociationListing](#schemaassociationlisting)]|true|none|Contains a list of associations and their corresponding details.|
|itemsTotal|integer(int32)|true|none|The total number of items available.|
|pagesTotal|integer(int32)|true|none|The total number of pages available.|

<h2 id="tocS_ListMandatesResponse">ListMandatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmandatesresponse"></a>
<a id="schema_ListMandatesResponse"></a>
<a id="tocSlistmandatesresponse"></a>
<a id="tocslistmandatesresponse"></a>

```json
{
  "link": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "previous": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "mandates": [
    {
      "balanceAccountId": "string",
      "counterparty": {
        "accountHolder": {
          "fullName": "string"
        },
        "accountIdentification": {
          "type": "string"
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "paymentInstrumentId": "string",
      "status": "pending",
      "type": "bacs",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|[Link](#schemalink)|true|none|Contains links to the next and previous page whenever applicable.|
|mandates|[[Mandate](#schemamandate)]|true|none|Contains a list of the mandates.|

<h2 id="tocS_Mandate">Mandate</h2>
<!-- backwards compatibility -->
<a id="schemamandate"></a>
<a id="schema_Mandate"></a>
<a id="tocSmandate"></a>
<a id="tocsmandate"></a>

```json
{
  "balanceAccountId": "string",
  "counterparty": {
    "accountHolder": {
      "fullName": "string"
    },
    "accountIdentification": {
      "type": "string"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "paymentInstrumentId": "string",
  "status": "pending",
  "type": "bacs",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account linked to the payment instrument.|
|counterparty|[MandateBankAccount](#schemamandatebankaccount)|false|none|Contains information to identify the counterparty.|
|createdAt|string(date-time)|false|none|The date when the mandate was created.|
|id|string|false|none|The unique identifier of the mandate.|
|paymentInstrumentId|string|false|none|The unique identifier of the payment instrument linked to the mandate.|
|status|[MandateStatus](#schemamandatestatus)|false|none|The status of the mandate.<br><br>Possible values: **pending**, **approved**, **cancelled**.|
|type|[MandateType](#schemamandatetype)|false|none|The type of mandate. Possible value: **bacs**.|
|updatedAt|string(date-time)|false|none|The date when the mandate was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|approved|
|status|cancelled|
|type|bacs|

<h2 id="tocS_MandateAccountIdentification">MandateAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemamandateaccountidentification"></a>
<a id="schema_MandateAccountIdentification"></a>
<a id="tocSmandateaccountidentification"></a>
<a id="tocsmandateaccountidentification"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_MandateBankAccount">MandateBankAccount</h2>
<!-- backwards compatibility -->
<a id="schemamandatebankaccount"></a>
<a id="schema_MandateBankAccount"></a>
<a id="tocSmandatebankaccount"></a>
<a id="tocsmandatebankaccount"></a>

```json
{
  "accountHolder": {
    "fullName": "string"
  },
  "accountIdentification": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[MandatePartyIdentification](#schemamandatepartyidentification)|true|none|Contains information about the owner of the counterparty bank account.|
|accountIdentification|[MandateAccountIdentification](#schemamandateaccountidentification)|true|none|Contains the bank account details of the counterparty. The fields required in this object depend on the country of the bank account and the currency of the transfer.|

<h2 id="tocS_MandatePartyIdentification">MandatePartyIdentification</h2>
<!-- backwards compatibility -->
<a id="schemamandatepartyidentification"></a>
<a id="schema_MandatePartyIdentification"></a>
<a id="tocSmandatepartyidentification"></a>
<a id="tocsmandatepartyidentification"></a>

```json
{
  "fullName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullName|string|false|none|The full name of the entity that owns the bank account.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space.|

<h2 id="tocS_MandateStatus">MandateStatus</h2>
<!-- backwards compatibility -->
<a id="schemamandatestatus"></a>
<a id="schema_MandateStatus"></a>
<a id="tocSmandatestatus"></a>
<a id="tocsmandatestatus"></a>

```json
"pending"
```

<h2 id="tocS_MandateType">MandateType</h2>
<!-- backwards compatibility -->
<a id="schemamandatetype"></a>
<a id="schema_MandateType"></a>
<a id="tocSmandatetype"></a>
<a id="tocsmandatetype"></a>

```json
"bacs"
```

<h2 id="tocS_MandateUpdate">MandateUpdate</h2>
<!-- backwards compatibility -->
<a id="schemamandateupdate"></a>
<a id="schema_MandateUpdate"></a>
<a id="tocSmandateupdate"></a>
<a id="tocsmandateupdate"></a>

```json
{
  "paymentInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentInstrumentId|string \| null|false|none|The unique identifier of the payment instrument linked to the mandate.|

<h2 id="tocS_PayoutScheduleExecution">PayoutScheduleExecution</h2>
<!-- backwards compatibility -->
<a id="schemapayoutscheduleexecution"></a>
<a id="schema_PayoutScheduleExecution"></a>
<a id="tocSpayoutscheduleexecution"></a>
<a id="tocspayoutscheduleexecution"></a>

```json
{
  "id": "string",
  "result": "failed",
  "resultDetails": {
    "reason": "string",
    "reasonCode": "string",
    "transferId": "string"
  },
  "triggeredAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the payout execution.|
|result|[ExecutionResult](#schemaexecutionresult)|false|none|The status of the payout execution.<br><br>Possible values:<br>- **succeeded**: The payout was sent successfully.<br>- **failed**: The payout could not be sent because an error occurred.<br>- **skipped**: The payout was not triggered as expected.|
|resultDetails|[PayoutScheduleExecutionDetails](#schemapayoutscheduleexecutiondetails)|false|none|Contains information about the result of the payout execution.|
|triggeredAt|string(date-time)|false|none|The date and time when the payout execution was initiated.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|failed|
|result|succeeded|
|result|skipped|

<h2 id="tocS_PayoutScheduleExecutionDetails">PayoutScheduleExecutionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapayoutscheduleexecutiondetails"></a>
<a id="schema_PayoutScheduleExecutionDetails"></a>
<a id="tocSpayoutscheduleexecutiondetails"></a>
<a id="tocspayoutscheduleexecutiondetails"></a>

```json
{
  "reason": "string",
  "reasonCode": "string",
  "transferId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Human readable reason for why execution was not successful if applicable.|
|reasonCode|string|false|none|Reason Code for why execution was not successful if applicable.|
|transferId|string|false|none|The id of the transfer from executing the payout.|

<h2 id="tocS_PayoutScheduleExecutions">PayoutScheduleExecutions</h2>
<!-- backwards compatibility -->
<a id="schemapayoutscheduleexecutions"></a>
<a id="schema_PayoutScheduleExecutions"></a>
<a id="tocSpayoutscheduleexecutions"></a>
<a id="tocspayoutscheduleexecutions"></a>

```json
{
  "payoutScheduleExecutions": [
    {
      "id": "string",
      "result": "failed",
      "resultDetails": {
        "reason": "string",
        "reasonCode": "string",
        "transferId": "string"
      },
      "triggeredAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payoutScheduleExecutions|[[PayoutScheduleExecution](#schemapayoutscheduleexecution)]|true|none|Contains a list of executions of the payout schedule.|

<h2 id="tocS_PayoutSweepExecution">PayoutSweepExecution</h2>
<!-- backwards compatibility -->
<a id="schemapayoutsweepexecution"></a>
<a id="schema_PayoutSweepExecution"></a>
<a id="tocSpayoutsweepexecution"></a>
<a id="tocspayoutsweepexecution"></a>

```json
{
  "id": "string",
  "result": "failed",
  "resultDetails": {
    "reason": "string",
    "reasonCode": "string",
    "sweepConfigurationDisabled": true,
    "transferId": "string"
  },
  "triggeredAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the sweep execution.|
|result|[ExecutionResult](#schemaexecutionresult)|false|none|The outcome of the sweep execution.<br><br>Possible results:<br>- **succeeded**: The sweep payout was completed successfully.<br>- **failed**: The sweep payout was not completed due to an error.<br>- **skipped**: The sweep payout was not triggered as expected.|
|resultDetails|[PayoutSweepExecutionDetails](#schemapayoutsweepexecutiondetails)|false|none|Details about the outcome of the sweep execution.|
|triggeredAt|string(date-time)|false|none|The timestamp of when the execution was triggered.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|failed|
|result|succeeded|
|result|skipped|

<h2 id="tocS_PayoutSweepExecutionDetails">PayoutSweepExecutionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapayoutsweepexecutiondetails"></a>
<a id="schema_PayoutSweepExecutionDetails"></a>
<a id="tocSpayoutsweepexecutiondetails"></a>
<a id="tocspayoutsweepexecutiondetails"></a>

```json
{
  "reason": "string",
  "reasonCode": "string",
  "sweepConfigurationDisabled": true,
  "transferId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The human-readable reason for why the sweep execution was not successful, if applicable.|
|reasonCode|string|false|none|The reason code for why the sweep execution was not successful, if applicable.|
|sweepConfigurationDisabled|boolean|false|none|Indicates whether the sweep configuration was disabled.|
|transferId|string|false|none|The unique identifier of the transfer created by the sweep execution, if applicable.|

<h2 id="tocS_PayoutSweepExecutions">PayoutSweepExecutions</h2>
<!-- backwards compatibility -->
<a id="schemapayoutsweepexecutions"></a>
<a id="schema_PayoutSweepExecutions"></a>
<a id="tocSpayoutsweepexecutions"></a>
<a id="tocspayoutsweepexecutions"></a>

```json
{
  "link": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "previous": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "sweepExecutions": [
    {
      "id": "string",
      "result": "failed",
      "resultDetails": {
        "reason": "string",
        "reasonCode": "string",
        "sweepConfigurationDisabled": true,
        "transferId": "string"
      },
      "triggeredAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|[Link](#schemalink)|true|none|Contains links to the next and previous page whenever applicable.|
|sweepExecutions|[[PayoutSweepExecution](#schemapayoutsweepexecution)]|true|none|Contains a list of executions of the sweep configuration.|

<h2 id="tocS_RecurringTopUp">RecurringTopUp</h2>
<!-- backwards compatibility -->
<a id="schemarecurringtopup"></a>
<a id="schema_RecurringTopUp"></a>
<a id="tocSrecurringtopup"></a>
<a id="tocsrecurringtopup"></a>

```json
{
  "counterparty": {
    "transferInstrumentId": "string"
  },
  "description": "string",
  "id": "string",
  "referenceForBeneficiary": "string",
  "status": "active",
  "topUpAmount": {
    "fixed": {
      "currency": "string",
      "value": 0
    },
    "target": {
      "currency": "string",
      "value": 0
    }
  },
  "trigger": {
    "schedule": {
      "type": "weekdays"
    },
    "threshold": {
      "currency": "string",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty|[TopUpCounterparty](#schematopupcounterparty)|true|none|The details about the counterparty that is funding the top-up. |
|description|string|true|none|Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.|
|id|string|true|read-only|The unique identifier of the top up.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.|
|status|string|false|none|The status of the recurring top-up. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the top up is enabled and funds will be pulled in.<br><br> * **inactive**: the top up is disabled and cannot be triggered. <br><br>|
|topUpAmount|[TopUpAmount](#schematopupamount)|true|none|The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.|
|trigger|[Trigger](#schematrigger)|true|none|The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_RecurringTopUpUpdate">RecurringTopUpUpdate</h2>
<!-- backwards compatibility -->
<a id="schemarecurringtopupupdate"></a>
<a id="schema_RecurringTopUpUpdate"></a>
<a id="tocSrecurringtopupupdate"></a>
<a id="tocsrecurringtopupupdate"></a>

```json
{
  "description": "string",
  "referenceForBeneficiary": "string",
  "status": "active",
  "topUpAmount": {
    "fixed": {
      "currency": "string",
      "value": 0
    },
    "target": {
      "currency": "string",
      "value": 0
    }
  },
  "trigger": {
    "schedule": {
      "type": "weekdays"
    },
    "threshold": {
      "currency": "string",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.|
|referenceForBeneficiary|string \| null|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.|
|status|string \| null|false|none|The status of the recurring top-up. If not provided, by default, this is set to **active**.<br><br>Possible values: <br><br> * **active**:  the top up is enabled and funds will be pulled in.<br><br> * **inactive**: the top up is disabled and cannot be triggered. <br><br>|
|topUpAmount|[TopUpAmountUpdate](#schematopupamountupdate)|false|none|The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.|
|trigger|[TriggerUpdate](#schematriggerupdate)|false|none|The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_RecurringTopUpsResult">RecurringTopUpsResult</h2>
<!-- backwards compatibility -->
<a id="schemarecurringtopupsresult"></a>
<a id="schema_RecurringTopUpsResult"></a>
<a id="tocSrecurringtopupsresult"></a>
<a id="tocsrecurringtopupsresult"></a>

```json
{
  "link": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "previous": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "recurringTopUps": [
    {
      "counterparty": {
        "transferInstrumentId": "string"
      },
      "description": "string",
      "id": "string",
      "referenceForBeneficiary": "string",
      "status": "active",
      "topUpAmount": {
        "fixed": {
          "currency": "string",
          "value": 0
        },
        "target": {
          "currency": "string",
          "value": 0
        }
      },
      "trigger": {
        "schedule": {
          "type": "weekdays"
        },
        "threshold": {
          "currency": "string",
          "value": 0
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|[Link](#schemalink)|true|none|none|
|recurringTopUps|[[RecurringTopUp](#schemarecurringtopup)]|true|none|none|

<h2 id="tocS_RemoveAssociationRequest">RemoveAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveassociationrequest"></a>
<a id="schema_RemoveAssociationRequest"></a>
<a id="tocSremoveassociationrequest"></a>
<a id="tocsremoveassociationrequest"></a>

```json
{
  "entityId": "string",
  "entityType": "accountHolder",
  "scaDeviceIds": [
    "stringstringstringstringstring"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|string|true|none|The unique identifier of the entity.|
|entityType|[ScaEntityType](#schemascaentitytype)|true|none|The type of the entity.  <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.|
|scaDeviceIds|[string]|true|none|A list of device ids associated with the entity that should be removed.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|accountHolder|
|entityType|legalEntity|
|entityType|paymentInstrument|

<h2 id="tocS_ScaDevice">ScaDevice</h2>
<!-- backwards compatibility -->
<a id="schemascadevice"></a>
<a id="schema_ScaDevice"></a>
<a id="tocSscadevice"></a>
<a id="tocsscadevice"></a>

```json
{
  "id": "string",
  "name": "string",
  "type": "browser"
}
```

A resource that contains information about a device, including its unique ID, name, and type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the SCA device you are registering.|
|name|string|true|none|The name of the SCA device that you are registering. You can use it to help your users identify the device.|
|type|[ScaDeviceType](#schemascadevicetype)|true|none|Type of device registered. <br><br>Possible values: **ios**, **android**, **browser**. |

#### Enumerated Values

|Property|Value|
|---|---|
|type|browser|
|type|ios|
|type|android|

<h2 id="tocS_ScaDeviceType">ScaDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemascadevicetype"></a>
<a id="schema_ScaDeviceType"></a>
<a id="tocSscadevicetype"></a>
<a id="tocsscadevicetype"></a>

```json
"browser"
```

<h2 id="tocS_ScaEntity">ScaEntity</h2>
<!-- backwards compatibility -->
<a id="schemascaentity"></a>
<a id="schema_ScaEntity"></a>
<a id="tocSscaentity"></a>
<a id="tocsscaentity"></a>

```json
{
  "id": "AH9999Z99Z999999ZZZZ9999Z",
  "type": "accountHolder"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the entity.|
|type|[ScaEntityType](#schemascaentitytype)|true|none|The type of the entity that you are associating with the SCA device. <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|accountHolder|
|type|legalEntity|
|type|paymentInstrument|

<h2 id="tocS_ScaEntityType">ScaEntityType</h2>
<!-- backwards compatibility -->
<a id="schemascaentitytype"></a>
<a id="schema_ScaEntityType"></a>
<a id="tocSscaentitytype"></a>
<a id="tocsscaentitytype"></a>

```json
"accountHolder"
```

<h2 id="tocS_ScaExemption">ScaExemption</h2>
<!-- backwards compatibility -->
<a id="schemascaexemption"></a>
<a id="schema_ScaExemption"></a>
<a id="tocSscaexemption"></a>
<a id="tocsscaexemption"></a>

```json
"setByPlatform"
```

The type of exemption for Strong Customer Authentication (SCA). Possible values:
* **lowerLimit**: the newly created limit is lower than the existing limit.
* **notRegulated**: the limit is created in a country, region, or industry where it is not mandated by law to use SCA.
* **setByPlatform**: you set a limit for one of your user's balance accounts, or for your balance platform.
* **initialLimit**: there are no existing transfer limits set on the balance account or balance platform.
* **alreadyPerformed**: you are confident about your user's identity and do not need to verify this using SCA.

<h2 id="tocS_ScaInformation">ScaInformation</h2>
<!-- backwards compatibility -->
<a id="schemascainformation"></a>
<a id="schema_ScaInformation"></a>
<a id="tocSscainformation"></a>
<a id="tocsscainformation"></a>

```json
{
  "exemption": "setByPlatform",
  "status": "notPerformed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemption|[ScaExemption](#schemascaexemption)|false|none|The type of exemption for Strong Customer Authentication (SCA). Possible values:<br>* **lowerLimit**: the newly created limit is lower than the existing limit.<br>* **notRegulated**: the limit is created in a country, region, or industry where it is not mandated by law to use SCA.<br>* **setByPlatform**: you set a limit for one of your user's balance accounts, or for your balance platform.<br>* **initialLimit**: there are no existing transfer limits set on the balance account or balance platform.<br>* **alreadyPerformed**: you are confident about your user's identity and do not need to verify this using SCA.|
|status|[ScaStatus](#schemascastatus)|true|none|The status of Strong Customer Authentication (SCA). Possible values:<br>* **notPerformed**: the requester was unable to successfully authenticate the request using SCA, or has an SCA exemption.<br>* **pending**: the request is pending SCA authentication.<br>* **performed**: the request is successfully authenticated using SCA.|

#### Enumerated Values

|Property|Value|
|---|---|
|exemption|setByPlatform|
|exemption|initialLimit|
|exemption|lowerLimit|
|exemption|notRegulated|
|exemption|alreadyPerformed|
|status|notPerformed|
|status|pending|
|status|performed|

<h2 id="tocS_ScaStatus">ScaStatus</h2>
<!-- backwards compatibility -->
<a id="schemascastatus"></a>
<a id="schema_ScaStatus"></a>
<a id="tocSscastatus"></a>
<a id="tocsscastatus"></a>

```json
"notPerformed"
```

The status of Strong Customer Authentication (SCA). Possible values:
* **notPerformed**: the requester was unable to successfully authenticate the request using SCA, or has an SCA exemption.
* **pending**: the request is pending SCA authentication.
* **performed**: the request is successfully authenticated using SCA.

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "type": "weekdays"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ScheduleType](#schemascheduletype)|true|none|The type of schedule at which the top up is executed.<br>* **weekdays**: pull in funds Monday-Friday at 07:00 AM in the local timezone of the balance account.<br><br>* **weekly**: pull in funds every Monday at 07:00 AM in the local timezone of the balance account.<br><br>* **monthly**: pull in funds every first of the month at 07:00 AM in the local timezone of the balance account.<br>* **null** (default): continuous monitoring.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|weekdays|
|type|weekly|
|type|monthly|

<h2 id="tocS_ScheduleType">ScheduleType</h2>
<!-- backwards compatibility -->
<a id="schemascheduletype"></a>
<a id="schema_ScheduleType"></a>
<a id="tocSscheduletype"></a>
<a id="tocsscheduletype"></a>

```json
"weekdays"
```

<h2 id="tocS_ScheduleUpdate">ScheduleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemascheduleupdate"></a>
<a id="schema_ScheduleUpdate"></a>
<a id="tocSscheduleupdate"></a>
<a id="tocsscheduleupdate"></a>

```json
{
  "type": "weekdays"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ScheduleType](#schemascheduletype)|false|none|The type of schedule at which the top up is executed.<br>* **weekdays**: pull in funds Monday-Friday at 07:00 AM in the local timezone of the balance account.<br><br>* **weekly**: pull in funds every Monday at 07:00 AM in the local timezone of the balance account.<br><br>* **monthly**: pull in funds every first of the month at 07:00 AM in the local timezone of the balance account.<br>* **null** (default): continuous monitoring.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|weekdays|
|type|weekly|
|type|monthly|

<h2 id="tocS_ScheduledPayoutFrequency">ScheduledPayoutFrequency</h2>
<!-- backwards compatibility -->
<a id="schemascheduledpayoutfrequency"></a>
<a id="schema_ScheduledPayoutFrequency"></a>
<a id="tocSscheduledpayoutfrequency"></a>
<a id="tocsscheduledpayoutfrequency"></a>

```json
"string"
```

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
"perDay"
```

The scope to which the transfer limit applies. Possible values:
* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.
* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.

<h2 id="tocS_SettingStatus">SettingStatus</h2>
<!-- backwards compatibility -->
<a id="schemasettingstatus"></a>
<a id="schema_SettingStatus"></a>
<a id="tocSsettingstatus"></a>
<a id="tocssettingstatus"></a>

```json
"string"
```

<h2 id="tocS_SettingType">SettingType</h2>
<!-- backwards compatibility -->
<a id="schemasettingtype"></a>
<a id="schema_SettingType"></a>
<a id="tocSsettingtype"></a>
<a id="tocssettingtype"></a>

```json
"balance"
```

<h2 id="tocS_SubmitScaAssociationRequest">SubmitScaAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitscaassociationrequest"></a>
<a id="schema_SubmitScaAssociationRequest"></a>
<a id="tocSsubmitscaassociationrequest"></a>
<a id="tocssubmitscaassociationrequest"></a>

```json
{
  "entities": [
    {
      "id": "AH9999Z99Z999999ZZZZ9999Z",
      "type": "accountHolder"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[ScaEntity](#schemascaentity)]|true|none|The list of entities to be associated.|

<h2 id="tocS_SubmitScaAssociationResponse">SubmitScaAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitscaassociationresponse"></a>
<a id="schema_SubmitScaAssociationResponse"></a>
<a id="tocSsubmitscaassociationresponse"></a>
<a id="tocssubmitscaassociationresponse"></a>

```json
{
  "scaAssociations": [
    {
      "entityId": "string",
      "entityType": "accountHolder",
      "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
      "status": "pendingApproval"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scaAssociations|[[Association](#schemaassociation)]|true|none|List of associations created to the entities and their statuses.|

<h2 id="tocS_Summary">Summary</h2>
<!-- backwards compatibility -->
<a id="schemasummary"></a>
<a id="schema_Summary"></a>
<a id="tocSsummary"></a>
<a id="tocssummary"></a>

```json
{
  "legalEntityId": "string",
  "taxYears": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalEntityId|string|true|none|The unique identifier of the legal entity.|
|taxYears|[integer(int32)]|true|none|The tax years for which the legal entity has a tax form.|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "id": "string",
  "type": "balanceAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the `target.type`. This can be the ID of your:<br><br>* balance platform<br>* account holder<br>* account holder's balance account|
|type|string|true|none|The resource for which you want to receive notifications. Possible values:<br><br>* **balancePlatform**: receive notifications about balance changes in your entire balance platform.<br><br>* **accountHolder**: receive notifications about balance changes of a specific user.<br><br>* **balanceAccount**: receive notifications about balance changes in a specific balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balanceAccount|
|type|accountHolder|
|type|balancePlatform|

<h2 id="tocS_TargetUpdate">TargetUpdate</h2>
<!-- backwards compatibility -->
<a id="schematargetupdate"></a>
<a id="schema_TargetUpdate"></a>
<a id="tocStargetupdate"></a>
<a id="tocstargetupdate"></a>

```json
{
  "id": "string",
  "type": "balanceAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the `target.type`. This can be the ID of your:<br><br>* balance platform<br>* account holder<br>* account holder's balance account|
|type|string|false|none|The resource for which you want to receive notifications. Possible values:<br><br>* **balancePlatform**: receive notifications about balance changes in your entire balance platform.<br><br>* **accountHolder**: receive notifications about balance changes of a specific user.<br><br>* **balanceAccount**: receive notifications about balance changes in a specific balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balanceAccount|
|type|accountHolder|
|type|balancePlatform|

<h2 id="tocS_TaxFormSummaryResponse">TaxFormSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemataxformsummaryresponse"></a>
<a id="schema_TaxFormSummaryResponse"></a>
<a id="tocStaxformsummaryresponse"></a>
<a id="tocstaxformsummaryresponse"></a>

```json
{
  "data": [
    {
      "legalEntityId": "string",
      "taxYears": [
        0
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Summary](#schemasummary)]|true|none|A list of tax form summaries, where each summary consists of the legal entity and the tax years in which the legal entity has a tax form.|

<h2 id="tocS_TopUpAmount">TopUpAmount</h2>
<!-- backwards compatibility -->
<a id="schematopupamount"></a>
<a id="schema_TopUpAmount"></a>
<a id="tocStopupamount"></a>
<a id="tocstopupamount"></a>

```json
{
  "fixed": {
    "currency": "string",
    "value": 0
  },
  "target": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixed|[AmountDTO](#schemaamountdto)|false|none|The fixed amount with which you want to top up the balance account.|
|target|[AmountDTO](#schemaamountdto)|false|none|The target balance for the balance account that the top-up must achieve.|

<h2 id="tocS_TopUpAmountUpdate">TopUpAmountUpdate</h2>
<!-- backwards compatibility -->
<a id="schematopupamountupdate"></a>
<a id="schema_TopUpAmountUpdate"></a>
<a id="tocStopupamountupdate"></a>
<a id="tocstopupamountupdate"></a>

```json
{
  "fixed": {
    "currency": "string",
    "value": 0
  },
  "target": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixed|object|false|none|The fixed amount with which you want to top up the balance account.|
|target|object|false|none|The target balance for the balance account that the top-up must achieve.|

<h2 id="tocS_TopUpCounterparty">TopUpCounterparty</h2>
<!-- backwards compatibility -->
<a id="schematopupcounterparty"></a>
<a id="schema_TopUpCounterparty"></a>
<a id="tocStopupcounterparty"></a>
<a id="tocstopupcounterparty"></a>

```json
{
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferInstrumentId|string|true|none|The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) that is funding the top-up. |

<h2 id="tocS_TransferLimit">TransferLimit</h2>
<!-- backwards compatibility -->
<a id="schematransferlimit"></a>
<a id="schema_TransferLimit"></a>
<a id="tocStransferlimit"></a>
<a id="tocstransferlimit"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "endsAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "limitStatus": "active",
  "reference": "string",
  "scaInformation": {
    "exemption": "setByPlatform",
    "status": "notPerformed"
  },
  "scope": "perDay",
  "startsAt": "1970-01-01T00:00:00Z",
  "transferType": "instant"
}
```

The transfer limit configured to regulate outgoing transfers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount for the transfer limit. This is the maximum amount allowed per transfer or per day based on the `scope` of the limit.|
|endsAt|string(date-time)|false|none|The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**|
|id|string|true|none|The unique identifier of the transfer limit.|
|limitStatus|[LimitStatus](#schemalimitstatus)|true|none|The status of the transfer limit. Possible values:   <br>* **active**: the limit is currently active.<br>* **inactive**: the limit is currently inactive.<br>* **pendingSCA**: the limit is pending until your user performs SCA.<br>* **scheduled**: the limit is scheduled to become active at a future date.|
|reference|string|false|none|Your reference for the transfer limit.|
|scaInformation|[ScaInformation](#schemascainformation)|false|none|Information for the Strong Customer Authentication (SCA)|
|scope|[Scope](#schemascope)|true|none|The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.|
|startsAt|string(date-time)|true|none|The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**|
|transferType|[TransferType](#schematransfertype)|true|none|The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority.|

#### Enumerated Values

|Property|Value|
|---|---|
|limitStatus|active|
|limitStatus|inactive|
|limitStatus|pendingSCA|
|limitStatus|scheduled|
|scope|perDay|
|scope|perTransaction|
|transferType|instant|
|transferType|all|

<h2 id="tocS_TransferLimitListResponse">TransferLimitListResponse</h2>
<!-- backwards compatibility -->
<a id="schematransferlimitlistresponse"></a>
<a id="schema_TransferLimitListResponse"></a>
<a id="tocStransferlimitlistresponse"></a>
<a id="tocstransferlimitlistresponse"></a>

```json
{
  "transferLimits": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      },
      "endsAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "limitStatus": "active",
      "reference": "string",
      "scaInformation": {
        "exemption": "setByPlatform",
        "status": "notPerformed"
      },
      "scope": "perDay",
      "startsAt": "1970-01-01T00:00:00Z",
      "transferType": "instant"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferLimits|[[TransferLimit](#schematransferlimit)]|true|none|List of available transfer limits.|

<h2 id="tocS_TransferType">TransferType</h2>
<!-- backwards compatibility -->
<a id="schematransfertype"></a>
<a id="schema_TransferType"></a>
<a id="tocStransfertype"></a>
<a id="tocstransfertype"></a>

```json
"instant"
```

The type of transfer to which the limit applies. Possible values:
* **instant**: the limit applies to transfers with an **instant** priority.
* **all**: the limit applies to all transfers, regardless of priority.

<h2 id="tocS_Trigger">Trigger</h2>
<!-- backwards compatibility -->
<a id="schematrigger"></a>
<a id="schema_Trigger"></a>
<a id="tocStrigger"></a>
<a id="tocstrigger"></a>

```json
{
  "schedule": {
    "type": "weekdays"
  },
  "threshold": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|[Schedule](#schemaschedule)|false|none|Contains the details about the schedule that determines when the top up is executed.|
|threshold|[AmountDTO](#schemaamountdto)|true|none|The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated.|

<h2 id="tocS_TriggerUpdate">TriggerUpdate</h2>
<!-- backwards compatibility -->
<a id="schematriggerupdate"></a>
<a id="schema_TriggerUpdate"></a>
<a id="tocStriggerupdate"></a>
<a id="tocstriggerupdate"></a>

```json
{
  "schedule": {
    "type": "weekdays"
  },
  "threshold": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|object|false|none|Contains the details about the schedule that determines when the top up is executed.|
|threshold|[AmountUpdate](#schemaamountupdate)|false|none|The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated.|

<h2 id="tocS_UKLocalMandateAccountIdentification">UKLocalMandateAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemauklocalmandateaccountidentification"></a>
<a id="schema_UKLocalMandateAccountIdentification"></a>
<a id="tocSuklocalmandateaccountidentification"></a>
<a id="tocsuklocalmandateaccountidentification"></a>

```json
{
  "type": "ukLocal",
  "accountNumber": "stringst",
  "sortCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|accountNumber|string|true|none|The 8-digit bank account number, without separators or whitespace.|
|sortCode|string|true|none|The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.|
|type|string|true|none|**ukLocal**|

<h2 id="tocS_WebhookSetting">WebhookSetting</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksetting"></a>
<a id="schema_WebhookSetting"></a>
<a id="tocSwebhooksetting"></a>
<a id="tocswebhooksetting"></a>

```json
{
  "currency": "string",
  "id": "string",
  "status": "string",
  "target": {
    "id": "string",
    "type": "balanceAccount"
  },
  "type": "balance"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.|
|id|string|true|none|The unique identifier of the webhook setting.|
|status|[SettingStatus](#schemasettingstatus)|true|none|The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.|
|target|[Target](#schematarget)|true|none|The resource about whose balance change you want to get notified.|
|type|[SettingType](#schemasettingtype)|true|none|The type of the webhook setting.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balance|

<h2 id="tocS_WebhookSettings">WebhookSettings</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksettings"></a>
<a id="schema_WebhookSettings"></a>
<a id="tocSwebhooksettings"></a>
<a id="tocswebhooksettings"></a>

```json
{
  "webhookSettings": [
    {
      "currency": "string",
      "id": "string",
      "status": "string",
      "target": {
        "id": "string",
        "type": "balanceAccount"
      },
      "type": "balance"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhookSettings|[[WebhookSetting](#schemawebhooksetting)]|false|none|The list of webhook settings.|
