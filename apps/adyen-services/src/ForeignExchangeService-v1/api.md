<h1 id="foreign-exchange-api">Foreign Exchange API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Foreign Exchange API allows you to manage and convert the currencies that are enabled for your integration.
## Authentication
We recommend that you use an API key to connect to the Foreign Exchange API. You can generate an API key in your Customer Area. If you have an Adyen Issuing integration, generate an API key in your Balance Platform Customer Area.
### Credential format
* For the `rates/calculate` endpoint: Generate an API key for the credential with the format **ws@BalancePlatform.[YourBalancePlatform]**.

### Header format
To connect to the Foreign Exchange API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H 'Content-Type: application/json' \
-H 'X-API-Key: ADYEN_API_KEY' \
...
```

## Versioning

The Foreign Exchange API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:

https://balanceplatform-api-test.adyen.com/fx/v1/rates/calculate

## Going live
When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/). If you have an Adyen Issuing integration, [generate an API key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key) in your [live Balance Platform Customer Area](https://balanceplatform-live.adyen.com/balanceplatform/). You can then use the API key to send requests to `https://balanceplatform-api-test.adyen.com/fx/v1`.

Base URLs:

* <a href="https://balanceplatform-api-test.adyen.com/fx/api/v1">https://balanceplatform-api-test.adyen.com/fx/api/v1</a> - Test Environment

* <a href="https://balanceplatform-api-live.adyen.com/fx/api/v1">https://balanceplatform-api-live.adyen.com/fx/api/v1</a> - Live Environment

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="foreign-exchange-api-rates">Rates</h1>

## Calculate amount in a different currency

<a id="opIdpost-rates-calculate"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/fx/api/v1/rates/calculate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "exchangeCalculations": [
      {
        "type": "splitPayment",
        "sourceAmount": {
          "currency": "CZK",
          "value": 112300
        },
        "targetCurrency": "EUR",
        "exchangeSide": "buy"
      },
      {
        "type": "splitRefund",
        "sourceAmount": {
          "currency": "CZK",
          "value": 24000
        },
        "targetCurrency": "USD",
        "exchangeSide": "sell"
      }
    ]
  }'
```

`POST /rates/calculate`

Returns the calculated amounts and rates required to convert the currency of a transaction.

> Body parameter

```json
{
  "exchangeCalculations": [
    {
      "type": "splitPayment",
      "sourceAmount": {
        "currency": "CZK",
        "value": 112300
      },
      "targetCurrency": "EUR",
      "exchangeSide": "buy"
    },
    {
      "type": "splitRefund",
      "sourceAmount": {
        "currency": "CZK",
        "value": 24000
      },
      "targetCurrency": "USD",
      "exchangeSide": "sell"
    }
  ]
}
```

<h3 id="calculate-amount-in-a-different-currency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CalculateRateRequest](#schemacalculateraterequest)|true|none|
|» exchangeCalculations|body|[[CalculateRateRequestItem](#schemacalculateraterequestitem)]|true|An array of objects, where each object defines a currency and value for which you want to perform an exchange calculation.|

> Example responses

> 200 Response

```json
{
  "exchangeCalculations": [
    {
      "type": "splitPayment",
      "exchangeSide": "buy",
      "sourceAmount": {
        "value": 112300,
        "currency": "CZK"
      },
      "targetAmount": {
        "value": 4480,
        "currency": "EUR"
      },
      "appliedExchangeRate": 0.039893143366
    },
    {
      "type": "splitRefund",
      "exchangeSide": "sell",
      "sourceAmount": {
        "value": 24000,
        "currency": "CZK"
      },
      "targetAmount": {
        "value": 992,
        "currency": "USD"
      },
      "appliedExchangeRate": 0.0413333333333
    }
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
  "detail": "User doesn't have access to all token policy resources",
  "requestId": "d42c493b5176df89e51516c6060cc34c",
  "status": 403
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/unprocessable-entity",
  "errorCode": "999_422_000",
  "title": "Validation failure",
  "detail": "Input data validation failed",
  "requestId": "0890cfb8f4278217bd457b49ce572265",
  "status": 422,
  "invalidFields": [
    {
      "name": "exchangeCalculations[0].sourceAmount.currency",
      "message": "The currency is invalid."
    },
    {
      "name": "exchangeCalculations[0].sourceAmount.value",
      "message": "The value can't be negative."
    }
  ]
}
```

<h3 id="calculate-amount-in-a-different-currency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CalculateRateResponse](#schemacalculaterateresponse)|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

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
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).|
|value|integer(int64)|true|none|The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).|

<h2 id="tocS_CalculateRateRequest">CalculateRateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacalculateraterequest"></a>
<a id="schema_CalculateRateRequest"></a>
<a id="tocScalculateraterequest"></a>
<a id="tocscalculateraterequest"></a>

```json
{
  "exchangeCalculations": [
    {
      "exchangeSide": "buy",
      "sourceAmount": {
        "currency": "string",
        "value": 0
      },
      "targetCurrency": "string",
      "type": "splitPayment"
    }
  ]
}
```

The request to calculate an amount in a different currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exchangeCalculations|[[CalculateRateRequestItem](#schemacalculateraterequestitem)]|true|none|An array of objects, where each object defines a currency and value for which you want to perform an exchange calculation.|

<h2 id="tocS_CalculateRateRequestItem">CalculateRateRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemacalculateraterequestitem"></a>
<a id="schema_CalculateRateRequestItem"></a>
<a id="tocScalculateraterequestitem"></a>
<a id="tocscalculateraterequestitem"></a>

```json
{
  "exchangeSide": "buy",
  "sourceAmount": {
    "currency": "string",
    "value": 0
  },
  "targetCurrency": "string",
  "type": "splitPayment"
}
```

The request parameters required to calculate an amount in a different currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exchangeSide|[ExchangeSide](#schemaexchangeside)|true|none|The operation performed on the source amount. Possible values:<br>* **buy**<br>* **sell**|
|sourceAmount|[Amount](#schemaamount)|true|none|An object specifying the currency and value for which you want to perform an exchange calculation.|
|targetCurrency|string|true|none|The currency to which you want to convert the source amount.|
|type|[RateType](#schemaratetype)|true|none|The type of transaction. Possible values:<br>* **splitPayment**: for payments<br>* **splitRefund**: for refunds|

#### Enumerated Values

|Property|Value|
|---|---|
|exchangeSide|buy|
|exchangeSide|sell|
|type|splitPayment|
|type|balanceConversion|
|type|transfer|
|type|splitRefund|

<h2 id="tocS_ExchangeSide">ExchangeSide</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeside"></a>
<a id="schema_ExchangeSide"></a>
<a id="tocSexchangeside"></a>
<a id="tocsexchangeside"></a>

```json
"buy"
```

<h2 id="tocS_RateType">RateType</h2>
<!-- backwards compatibility -->
<a id="schemaratetype"></a>
<a id="schema_RateType"></a>
<a id="tocSratetype"></a>
<a id="tocsratetype"></a>

```json
"splitPayment"
```

<h2 id="tocS_CalculateRateResponse">CalculateRateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacalculaterateresponse"></a>
<a id="schema_CalculateRateResponse"></a>
<a id="tocScalculaterateresponse"></a>
<a id="tocscalculaterateresponse"></a>

```json
{
  "exchangeCalculations": [
    {
      "appliedExchangeRate": 0,
      "exchangeSide": "string",
      "sourceAmount": {
        "currency": "string",
        "value": 0
      },
      "targetAmount": {
        "currency": "string",
        "value": 0
      },
      "type": "string"
    }
  ]
}
```

The response returned when you calculate an amount in a different currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exchangeCalculations|[[CalculateRateResponseItem](#schemacalculaterateresponseitem)]|false|none|An array of objects, where each object returns a currency and value for which you performed an exchange calculation. You can use the calculated amounts in your payment requests.|

<h2 id="tocS_CalculateRateResponseItem">CalculateRateResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemacalculaterateresponseitem"></a>
<a id="schema_CalculateRateResponseItem"></a>
<a id="tocScalculaterateresponseitem"></a>
<a id="tocscalculaterateresponseitem"></a>

```json
{
  "appliedExchangeRate": 0,
  "exchangeSide": "string",
  "sourceAmount": {
    "currency": "string",
    "value": 0
  },
  "targetAmount": {
    "currency": "string",
    "value": 0
  },
  "type": "string"
}
```

The response parameters returned when you calculate an amount in a different currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedExchangeRate|number|false|none|The exchange rate to convert the source currency to the target currency. This includes Adyen's markup.|
|exchangeSide|string|false|none|The operation performed on the source amount. Possible values:<br>* **buy**<br>* **sell**|
|sourceAmount|[Amount](#schemaamount)|false|none|The currency of the amount you converted (the source amount).|
|targetAmount|[Amount](#schemaamount)|false|none|An object specifying the currency and value to which you want to convert the source amount (the target amount).|
|type|string|false|none|The type of transaction. Possible values:<br>* **splitPayment**: for payments<br>* **splitRefund**: for refunds|

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
      "name": "string",
      "value": "string",
      "message": "string"
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
  "name": "string",
  "value": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The field that has an invalid value.|
|value|string|true|none|The invalid value.|
|message|string|true|none|Description of the validation error.|
