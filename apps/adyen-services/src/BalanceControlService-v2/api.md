<h1 id="balance-control-api">Balance Control API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Balance Control API allows you to view and manage the balances in your company and merchant accounts.
## Authentication
We recommend that you use an API key to connect to the Balance Control API. You can [generate an API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in your Customer Area.
### Header format
To connect to the Balance Control API, add an `X-API-Key` header with the API key as the value. For example:

 ```
curl
-H 'Content-Type: application/json' \
-H 'X-API-Key: ADYEN_API_KEY' \
...
```

## Versioning

The Balance Control API handles versioning as part of the endpoint URL. For example, to send a request to version 2 of the `/balanceOverview/companies/{companyId}/balances` endpoint, use:

https://balance-control-test.adyen.com/balance-control/api/v2/balanceOverview/companies/{companyId}/balances

## Going live
When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/). You can then use the API key to send requests to `https://balance-control-live.adyen.com/api/v2`.

Base URLs:

* <a href="https://balance-control-test.adyen.com/balance-control/api/v2">https://balance-control-test.adyen.com/balance-control/api/v2</a> - Test Environment

* <a href="https://balance-control-live.adyen.com/balance-control/api/v2">https://balance-control-live.adyen.com/balance-control/api/v2</a> - Live Environment

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="balance-control-api-balances-overview">Balances overview</h1>

## View the available balances for all merchant accounts under your company.

<a id="opIdget-balanceOverview-companies-companyAccountCode-balances"></a>

> Code samples

```bash
curl 'https://balance-control-test.adyen.com/balance-control/api/v2/balanceOverview/companies/string/balances?currency=string' \
  -H 'Accept: application/json'
```

`GET /balanceOverview/companies/{companyAccountCode}/balances`

Returns an array with details about the balances available for all merchant accounts under your company account. For each merchant account, the response returns the following:


* **Available funds**: The funds in the merchant account that have been settled and are available for use.


* **Pending balance**: The funds in the merchant account that have not been settled yet.


* **Next payout amount**: The amount that will be settled to your bank account with the next payout.


* **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds.


* **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.


<h3 id="view-the-available-balances-for-all-merchant-accounts-under-your-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyAccountCode|path|string|true|The unique identifier of your company account.|
|currency|query|string|true|The currency for which you want a balances overview.|

> Example responses

> 200 Response

```json
"{\n    \"merchantBalancesOverview\": [\n        {\n            \"merchantAccount\": \"MERCHANT_ACCOUNT_1\",\n            \"availableFund\": {\n                \"value\": 3191,\n                \"currency\": \"EUR\"\n            },\n            \"pendingBalance\": {\n                \"value\": -112845,\n                \"currency\": \"EUR\"\n            },\n            \"nextPayout\": {\n                \"value\": 3191,\n                \"currency\": \"EUR\"\n            },\n            \"reserve\": {\n                \"value\": 0,\n                \"currency\": \"EUR\"\n            }\n        },\n        {\n            \"merchantAccount\": \"MERCHANT_ACCOUNT_2\",\n            \"availableFund\": {\n                \"value\": 0,\n                \"currency\": \"USD\"\n            },\n            \"reserve\": {\n                \"value\": 0,\n                \"currency\": \"USD\"\n            },\n            \"deposit\": {\n                \"value\": 50000,\n                \"currency\": \"USD\"\n            }\n        }\n    }\n}\n"
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

<h3 id="view-the-available-balances-for-all-merchant-accounts-under-your-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[CompanyBalances](#schemacompanybalances)|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## View all balances available for your merchant account.

<a id="opIdget-balanceOverview-merchants-merchantAccountCode-balances"></a>

> Code samples

```bash
curl 'https://balance-control-test.adyen.com/balance-control/api/v2/balanceOverview/merchants/string/balances?currency=string' \
  -H 'Accept: application/json'
```

`GET /balanceOverview/merchants/{merchantAccountCode}/balances`

Returns an overview of the different balances available for the merchant account. This includes details about the following:


* **Available funds**: The funds in the merchant account that have been settled and are available for use.


* **Pending balance**: The funds in the merchant account that have not been settled yet.


* **Next payout amount**: The amount that will be settled to your bank account with the next payout.


* **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds.


* **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.


<h3 id="view-all-balances-available-for-your-merchant-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantAccountCode|path|string|true|The unique identifier of your merchant account.|
|currency|query|string|true|The currency for which you want a balances overview.|

> Example responses

> 200 Response

```json
"{\n    \"merchantBalancesOverview\": [\n        {\n            \"merchantAccount\": \"MERCHANT_ACCOUNT_1\",\n            \"availableFund\": {\n                \"value\": 3191,\n                \"currency\": \"EUR\"\n            },\n            \"pendingBalance\": {\n                \"value\": -112845,\n                \"currency\": \"EUR\"\n            },\n            \"nextPayout\": {\n                \"value\": 3191,\n                \"currency\": \"EUR\"\n            },\n            \"reserve\": {\n                \"value\": 0,\n                \"currency\": \"EUR\"\n            }\n        },\n        {\n            \"merchantAccount\": \"MERCHANT_ACCOUNT_2\",\n            \"availableFund\": {\n                \"value\": 0,\n                \"currency\": \"USD\"\n            },\n            \"reserve\": {\n                \"value\": 0,\n                \"currency\": \"USD\"\n            },\n            \"deposit\": {\n                \"value\": 50000,\n                \"currency\": \"USD\"\n            }\n        }\n    }\n}\n"
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

<h3 id="view-all-balances-available-for-your-merchant-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[MerchantBalance](#schemamerchantbalance)|
|401|Unauthorized|Unauthorized - Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="balance-control-api-balance-transfers">Balance transfers</h1>

## Performs a balance transfer

<a id="opIdpost-balanceTransfers"></a>

> Code samples

```bash
curl https://balance-control-test.adyen.com/balance-control/api/v2/balanceTransfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": {
      "currency": "EUR",
      "value": 3000
    },
    "fromMerchant": "SOURCE_MERCHANT_ACCOUNT",
    "reference": "Your reference for the balance transfer.",
    "toMerchant": "DESTINATION_MERCHANT_ACCOUNT",
    "type": "adjustment"
  }'
```

`POST /balanceTransfers`

Performs a balance transfer between merchant accounts. The following conditions must be met before you can successfully transfer balances:
* The source and destination merchant accounts must be under the same company account and legal entity.
* The source merchant account must have sufficient funds.
* The source and destination merchant accounts must have at least one common processing currency.\n\n
When sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.


> Body parameter

```json
{
  "amount": {
    "currency": "EUR",
    "value": 3000
  },
  "fromMerchant": "SOURCE_MERCHANT_ACCOUNT",
  "reference": "Your reference for the balance transfer.",
  "toMerchant": "DESTINATION_MERCHANT_ACCOUNT",
  "type": "adjustment"
}
```

<h3 id="performs-a-balance-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BalanceTransferRequest](#schemabalancetransferrequest)|true|none|
|» amount|body|[Amount](#schemaamount)|true|The amount of the transfer.|
|» fromMerchant|body|string|true|The unique identifier of the source merchant account from which funds are deducted.|
|» reference|body|string|false|A reference for the balance transfer. Maximum length: 80 characters.|
|» toMerchant|body|string|true|The unique identifier of the destination merchant account to which funds are transferred.|
|» type|body|[BalanceTransferType](#schemabalancetransfertype)|true|The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|tax|
|» type|fee|
|» type|terminalSale|
|» type|credit|
|» type|debit|
|» type|adjustment|

> Example responses

> 200 Response

```json
{
  "createdAt": "2025-10-27T07:06:15+00:00",
  "pspReference": "993617895204576J"
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

<h3 id="performs-a-balance-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[BalanceTransferResponse](#schemabalancetransferresponse)|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Content - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

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

<h2 id="tocS_BalanceTransferRequest">BalanceTransferRequest</h2>
<!-- backwards compatibility -->
<a id="schemabalancetransferrequest"></a>
<a id="schema_BalanceTransferRequest"></a>
<a id="tocSbalancetransferrequest"></a>
<a id="tocsbalancetransferrequest"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "fromMerchant": "string",
  "reference": "string",
  "toMerchant": "string",
  "type": "tax"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount of the transfer.|
|fromMerchant|string|true|none|The unique identifier of the source merchant account from which funds are deducted.|
|reference|string|false|none|A reference for the balance transfer. Maximum length: 80 characters.|
|toMerchant|string|true|none|The unique identifier of the destination merchant account to which funds are transferred.|
|type|[BalanceTransferType](#schemabalancetransfertype)|true|none|The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|tax|
|type|fee|
|type|terminalSale|
|type|credit|
|type|debit|
|type|adjustment|

<h2 id="tocS_BalanceTransferResponse">BalanceTransferResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalancetransferresponse"></a>
<a id="schema_BalanceTransferResponse"></a>
<a id="tocSbalancetransferresponse"></a>
<a id="tocsbalancetransferresponse"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date when the balance transfer was performed.|
|pspReference|string|true|none|Adyen's 16-character string reference associated with the balance transfer.|

<h2 id="tocS_BalanceTransferType">BalanceTransferType</h2>
<!-- backwards compatibility -->
<a id="schemabalancetransfertype"></a>
<a id="schema_BalanceTransferType"></a>
<a id="tocSbalancetransfertype"></a>
<a id="tocsbalancetransfertype"></a>

```json
"tax"
```

<h2 id="tocS_CompanyBalances">CompanyBalances</h2>
<!-- backwards compatibility -->
<a id="schemacompanybalances"></a>
<a id="schema_CompanyBalances"></a>
<a id="tocScompanybalances"></a>
<a id="tocscompanybalances"></a>

```json
{
  "merchantBalancesOverview": [
    {
      "availableFund": {
        "currency": "string",
        "value": 0
      },
      "deposit": {
        "currency": "string",
        "value": 0
      },
      "merchantAccount": "string",
      "nextPayout": {
        "currency": "string",
        "value": 0
      },
      "pendingBalance": {
        "currency": "string",
        "value": 0
      },
      "reserve": {
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
|merchantBalancesOverview|[[MerchantBalance](#schemamerchantbalance)]|false|none|none|

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

<h2 id="tocS_MerchantBalance">MerchantBalance</h2>
<!-- backwards compatibility -->
<a id="schemamerchantbalance"></a>
<a id="schema_MerchantBalance"></a>
<a id="tocSmerchantbalance"></a>
<a id="tocsmerchantbalance"></a>

```json
{
  "availableFund": {
    "currency": "string",
    "value": 0
  },
  "deposit": {
    "currency": "string",
    "value": 0
  },
  "merchantAccount": "string",
  "nextPayout": {
    "currency": "string",
    "value": 0
  },
  "pendingBalance": {
    "currency": "string",
    "value": 0
  },
  "reserve": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableFund|[Amount](#schemaamount)|false|none|none|
|deposit|[Amount](#schemaamount)|false|none|none|
|merchantAccount|string|false|none|none|
|nextPayout|[Amount](#schemaamount)|false|none|none|
|pendingBalance|[Amount](#schemaamount)|false|none|none|
|reserve|[Amount](#schemaamount)|false|none|none|
