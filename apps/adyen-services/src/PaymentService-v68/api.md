<h1 id="adyen-payment-api">Adyen Payment API v68</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A set of API endpoints that allow you to initiate, settle, and modify payments on the Adyen payments platform. You can use the API to accept card payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment methods.

> This API is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle).
> * If you are building a new integration, use the [Checkout API](https://docs.adyen.com/api-explorer/Checkout/latest/overview) instead.
> * If you have an existing integration using this API, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).
>The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

To learn more about the API, visit [Classic integration](https://docs.adyen.com/classic-integration).

## Authentication
You need an [API credential](https://docs.adyen.com/development-resources/api-credentials) to authenticate to the API.

If using an API key, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication, for example:

```
curl
-u "ws@Company.YOUR_COMPANY_ACCOUNT":"YOUR_BASIC_AUTHENTICATION_PASSWORD" \
-H "Content-Type: application/json" \
...
```

## Versioning
Payments API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://pal-test.adyen.com/pal/servlet/Payment/v68/authorise
```

## Going live

To authenticate to the live endpoints, you need an [API credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer Area.

The live endpoint URLs contain a prefix which is unique to your company account:
```

https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/Payment/v68/authorise
```

Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.

Base URLs:

* <a href="https://pal-test.adyen.com/pal/servlet/Payment/v68">https://pal-test.adyen.com/pal/servlet/Payment/v68</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-payment-api-payments">Payments</h1>

## Create an authorisation

<a id="opIdpost-authorise"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/authorise \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "USD",
      "value": 1500
    },
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "reference": "YOUR_REFERENCE_NUMBER",
    "threeDS2RequestData": {
      "deviceChannel": "browser",
      "notificationURL": "https://www.example.com/YOUR_3DS_NOTIFICATION_URL"
    },
    "browserInfo": {
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
      "acceptHeader": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "language": "en",
      "colorDepth": 24,
      "screenHeight": 723,
      "screenWidth": 1536,
      "timeZoneOffset": 0,
      "javaEnabled": false
    },
    "billingAddress": {
      "country": "US",
      "city": "New York",
      "street": "Redwood Block",
      "houseNumberOrName": "37C",
      "stateOrProvince": "NY",
      "postalCode": "10039"
    },
    "accountInfo": {
      "accountCreationDate": "2019-01-17T13:42:40+01:00"
    },
    "shopperEmail": "s.hopper@test.com",
    "shopperIP": "192.0.2.1",
    "card": {
      "cvc": "737",
      "expiryMonth": "03",
      "expiryYear": "2030",
      "holderName": "John Smith",
      "number": "4917610000000000"
    }
  }'
```

`POST /authorise`

Creates a payment with a unique reference (`pspReference`) and attempts to obtain an authorisation hold. For cards, this amount can be captured or cancelled later. Non-card payment methods typically don't support this and will automatically capture as part of the authorisation.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

>The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "amount": {
    "currency": "USD",
    "value": 1500
  },
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "YOUR_REFERENCE_NUMBER",
  "threeDS2RequestData": {
    "deviceChannel": "browser",
    "notificationURL": "https://www.example.com/YOUR_3DS_NOTIFICATION_URL"
  },
  "browserInfo": {
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
    "acceptHeader": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "language": "en",
    "colorDepth": 24,
    "screenHeight": 723,
    "screenWidth": 1536,
    "timeZoneOffset": 0,
    "javaEnabled": false
  },
  "billingAddress": {
    "country": "US",
    "city": "New York",
    "street": "Redwood Block",
    "houseNumberOrName": "37C",
    "stateOrProvince": "NY",
    "postalCode": "10039"
  },
  "accountInfo": {
    "accountCreationDate": "2019-01-17T13:42:40+01:00"
  },
  "shopperEmail": "s.hopper@test.com",
  "shopperIP": "192.0.2.1",
  "card": {
    "cvc": "737",
    "expiryMonth": "03",
    "expiryYear": "2030",
    "holderName": "John Smith",
    "number": "4917610000000000"
  }
}
```

<h3 id="create-an-authorisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentRequest](#schemapaymentrequest)|false|none|
|» accountInfo|body|[AccountInfo](#schemaaccountinfo)|false|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» additionalAmount|body|[Amount](#schemaamount)|false|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» bankAccount|body|[BankAccount](#schemabankaccount)|false|The details of the bank account, from which the payment should be made.<br>> Either `bankAccount` or `card` field must be provided in a payment request.|
|» billingAddress|body|[Address](#schemaaddress)|false|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|» browserInfo|body|[BrowserInfo](#schemabrowserinfo)|false|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|» captureDelayHours|body|integer(int32)|false|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|» card|body|[Card](#schemacard)|false|A container for card data.<br>> Either `bankAccount` or `card` field must be provided in a payment request.|
|» dateOfBirth|body|string(date)|false|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|» dccQuote|body|[ForexQuote](#schemaforexquote)|false|The forex quote as returned in the response of the forex service.|
|» deliveryAddress|body|[Address](#schemaaddress)|false|The address where the purchased goods should be delivered.|
|» deliveryDate|body|string(date-time)|false|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|» deviceFingerprint|body|string|false|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|» entityType|body|string|false|The type of the entity the payment is processed for.|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» fundDestination|body|[FundDestination](#schemafunddestination)|false|the person or entity receiving the money|
|» fundSource|body|[FundSource](#schemafundsource)|false|The person or entity funding the money.|
|» fundingSource|body|string|false|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|» installments|body|[Installments](#schemainstallments)|false|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|» localizedShopperStatement|body|object|false|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|» » **additionalProperties**|body|string|false|none|
|» mandate|body|[Mandate](#schemamandate)|false|The mandate details to initiate recurring transaction.|
|» mcc|body|string|false|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» merchantOrderReference|body|string|false|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|» merchantRiskIndicator|body|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» metadata|body|object|false|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|» » **additionalProperties**|body|string|false|none|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» nationality|body|string|false|The two-character country code of the shopper's nationality.|
|» orderReference|body|string|false|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» recurring|body|[Recurring](#schemarecurring)|false|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|» recurringProcessingModel|body|string|false|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» secureRemoteCommerceCheckoutData|body|[SecureRemoteCommerceCheckoutData](#schemasecureremotecommercecheckoutdata)|false|Checkout data for a Secure Remote Commerce payment.|
|» selectedBrand|body|string|false|Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card.|
|» selectedRecurringDetailReference|body|string|false|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|» sessionId|body|string|false|A session ID used to identify a payment session.|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|» shopperIP|body|string|false|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperLocale|body|string|false|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|» shopperName|body|[Name](#schemaname)|false|The shopper's full name.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» shopperStatement|body|string|false|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|» threeDS2RequestData|body|[ThreeDS2RequestData](#schemathreeds2requestdata)|false|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|» threeDSAuthenticationOnly|body|boolean|false|Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|» totalsGroup|body|string|false|The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).|
|» trustedShopper|body|boolean|false|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entityType|NaturalPerson|
|» entityType|CompanyName|
|» fundingSource|credit|
|» fundingSource|debit|
|» fundingSource|prepaid|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|

> Example responses

> 200 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "authCode": "string",
  "dccAmount": {
    "currency": "str",
    "value": 0
  },
  "dccSignature": "string",
  "fraudResult": {
    "accountScore": 0,
    "results": [
      {
        "FraudCheckResult": {
          "accountScore": 0,
          "checkId": 0,
          "name": "string"
        }
      }
    ]
  },
  "issuerUrl": "string",
  "md": "string",
  "paRequest": "string",
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "AuthenticationFinished"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="create-an-authorisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentResult](#schemapaymentresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Complete a 3DS authorisation

<a id="opIdpost-authorise3d"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/authorise3d \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "md": "31h..........vOXek7w",
    "paResponse": "eNqtmF........wGVA4Ch",
    "shopperIP": "61.294.12.12",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /authorise3d`

For an authenticated 3D Secure session, completes the payment authorisation. This endpoint must receive the `md` and `paResponse` parameters that you get from the card issuer after a shopper pays via 3D Secure.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/details`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/details) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "md": "31h..........vOXek7w",
  "paResponse": "eNqtmF........wGVA4Ch",
  "shopperIP": "61.294.12.12",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="complete-a-3ds-authorisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentRequest3d](#schemapaymentrequest3d)|false|none|
|» accountInfo|body|[AccountInfo](#schemaaccountinfo)|false|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» additionalAmount|body|[Amount](#schemaamount)|false|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» amount|body|[Amount](#schemaamount)|false|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» billingAddress|body|[Address](#schemaaddress)|false|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|» browserInfo|body|[BrowserInfo](#schemabrowserinfo)|false|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|» captureDelayHours|body|integer(int32)|false|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|» dateOfBirth|body|string(date)|false|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|» dccQuote|body|[ForexQuote](#schemaforexquote)|false|The forex quote as returned in the response of the forex service.|
|» deliveryAddress|body|[Address](#schemaaddress)|false|The address where the purchased goods should be delivered.|
|» deliveryDate|body|string(date-time)|false|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|» deviceFingerprint|body|string|false|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» installments|body|[Installments](#schemainstallments)|false|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|» localizedShopperStatement|body|object|false|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|» » **additionalProperties**|body|string|false|none|
|» mcc|body|string|false|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|» md|body|string|true|The payment session identifier returned by the card issuer.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» merchantOrderReference|body|string|false|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|» merchantRiskIndicator|body|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» metadata|body|object|false|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|» » **additionalProperties**|body|string|false|none|
|» orderReference|body|string|false|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|» paResponse|body|string|true|Payment authorisation response returned by the card issuer. The `paResponse` field holds the PaRes value received from the card issuer.|
|» recurring|body|[Recurring](#schemarecurring)|false|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|» recurringProcessingModel|body|string|false|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» reference|body|string|false|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» selectedBrand|body|string|false|Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card.|
|» selectedRecurringDetailReference|body|string|false|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|» sessionId|body|string|false|A session ID used to identify a payment session.|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|» shopperIP|body|string|false|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperLocale|body|string|false|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|» shopperName|body|[Name](#schemaname)|false|The shopper's full name.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» shopperStatement|body|string|false|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|» threeDS2RequestData|body|[ThreeDS2RequestData](#schemathreeds2requestdata)|false|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|» threeDSAuthenticationOnly|body|boolean|false|Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|» totalsGroup|body|string|false|The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).|
|» trustedShopper|body|boolean|false|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|

> Example responses

> 200 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "authCode": "string",
  "dccAmount": {
    "currency": "str",
    "value": 0
  },
  "dccSignature": "string",
  "fraudResult": {
    "accountScore": 0,
    "results": [
      {
        "FraudCheckResult": {
          "accountScore": 0,
          "checkId": 0,
          "name": "string"
        }
      }
    ]
  },
  "issuerUrl": "string",
  "md": "string",
  "paRequest": "string",
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "AuthenticationFinished"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="complete-a-3ds-authorisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentResult](#schemapaymentresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Complete a 3DS2 authorisation

<a id="opIdpost-authorise3ds2"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/authorise3ds2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "amount": {
      "currency": "EUR",
      "value": 1000
    },
    "reference": "YOUR_ORDER_NUMBER",
    "threeDS2RequestData": {
      "deviceChannel": "app",
      "threeDSCompInd": "Y"
    },
    "threeDS2Token": "— - BINARY DATA - -"
  }'
```

`POST /authorise3ds2`

For an authenticated 3D Secure 2 session, completes the payment authorisation. This endpoint must receive the `threeDS2Token` and `threeDS2Result` parameters.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/details`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/details) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

>The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "amount": {
    "currency": "EUR",
    "value": 1000
  },
  "reference": "YOUR_ORDER_NUMBER",
  "threeDS2RequestData": {
    "deviceChannel": "app",
    "threeDSCompInd": "Y"
  },
  "threeDS2Token": "— - BINARY DATA - -"
}
```

<h3 id="complete-a-3ds2-authorisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentRequest3ds2](#schemapaymentrequest3ds2)|false|none|
|» accountInfo|body|[AccountInfo](#schemaaccountinfo)|false|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» additionalAmount|body|[Amount](#schemaamount)|false|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» billingAddress|body|[Address](#schemaaddress)|false|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|» browserInfo|body|[BrowserInfo](#schemabrowserinfo)|false|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|» captureDelayHours|body|integer(int32)|false|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|» dateOfBirth|body|string(date)|false|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|» dccQuote|body|[ForexQuote](#schemaforexquote)|false|The forex quote as returned in the response of the forex service.|
|» deliveryAddress|body|[Address](#schemaaddress)|false|The address where the purchased goods should be delivered.|
|» deliveryDate|body|string(date-time)|false|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|» deviceFingerprint|body|string|false|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» installments|body|[Installments](#schemainstallments)|false|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|» localizedShopperStatement|body|object|false|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|» » **additionalProperties**|body|string|false|none|
|» mcc|body|string|false|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» merchantOrderReference|body|string|false|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|» merchantRiskIndicator|body|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» metadata|body|object|false|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|» » **additionalProperties**|body|string|false|none|
|» orderReference|body|string|false|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|» recurring|body|[Recurring](#schemarecurring)|false|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|» recurringProcessingModel|body|string|false|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» selectedBrand|body|string|false|Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card.|
|» selectedRecurringDetailReference|body|string|false|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|» sessionId|body|string|false|A session ID used to identify a payment session.|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|» shopperIP|body|string|false|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperLocale|body|string|false|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|» shopperName|body|[Name](#schemaname)|false|The shopper's full name.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» shopperStatement|body|string|false|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|» threeDS2RequestData|body|[ThreeDS2RequestData](#schemathreeds2requestdata)|false|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|» threeDS2Result|body|[ThreeDS2Result](#schemathreeds2result)|false|The ThreeDS2Result that was returned in the final CRes.|
|» threeDS2Token|body|string|false|The ThreeDS2Token that was returned in the /authorise call.|
|» threeDSAuthenticationOnly|body|boolean|false|Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|» totalsGroup|body|string|false|The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).|
|» trustedShopper|body|boolean|false|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|

> Example responses

> 200 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "authCode": "string",
  "dccAmount": {
    "currency": "str",
    "value": 0
  },
  "dccSignature": "string",
  "fraudResult": {
    "accountScore": 0,
    "results": [
      {
        "FraudCheckResult": {
          "accountScore": 0,
          "checkId": 0,
          "name": "string"
        }
      }
    ]
  },
  "issuerUrl": "string",
  "md": "string",
  "paRequest": "string",
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "AuthenticationFinished"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="complete-a-3ds2-authorisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentResult](#schemapaymentresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get the 3DS authentication result

<a id="opIdpost-getAuthenticationResult"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/getAuthenticationResult \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "pspReference": "9935272408535455"
  }'
```

`POST /getAuthenticationResult`

Return the authentication result after doing a 3D Secure authentication only.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "pspReference": "9935272408535455"
}
```

<h3 id="get-the-3ds-authentication-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthenticationResultRequest](#schemaauthenticationresultrequest)|false|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which the authentication was processed.|
|» pspReference|body|string|true|The pspReference identifier for the transaction.|

> Example responses

> 200 Response

```json
{
  "threeDS1Result": {
    "cavv": "string",
    "cavvAlgorithm": "string",
    "eci": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOfferedResponse": "string",
    "xid": "string"
  },
  "threeDS2Result": {
    "authenticationValue": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "dsTransID": "string",
    "eci": "string",
    "exemptionIndicator": "lowValue",
    "messageVersion": "string",
    "riskScore": "string",
    "threeDSRequestorChallengeInd": "01",
    "threeDSServerTransID": "string",
    "timestamp": "string",
    "transStatus": "string",
    "transStatusReason": "string",
    "whiteListStatus": "string"
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="get-the-3ds-authentication-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AuthenticationResultResponse](#schemaauthenticationresultresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get the 3DS2 authentication result

<a id="opIdpost-retrieve3ds2Result"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/retrieve3ds2Result \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "pspReference": "9935272408535455"
  }'
```

`POST /retrieve3ds2Result`

Retrieves the `threeDS2Result` after doing a 3D Secure 2 authentication only.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "pspReference": "9935272408535455"
}
```

<h3 id="get-the-3ds2-authentication-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ThreeDS2ResultRequest](#schemathreeds2resultrequest)|false|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» pspReference|body|string|true|The pspReference returned in the /authorise call.|

> Example responses

> 200 Response

```json
{
  "threeDS2Result": {
    "authenticationValue": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "dsTransID": "string",
    "eci": "string",
    "exemptionIndicator": "lowValue",
    "messageVersion": "string",
    "riskScore": "string",
    "threeDSRequestorChallengeInd": "01",
    "threeDSServerTransID": "string",
    "timestamp": "string",
    "transStatus": "string",
    "transStatusReason": "string",
    "whiteListStatus": "string"
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="get-the-3ds2-authentication-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ThreeDS2ResultResponse](#schemathreeds2resultresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-payment-api-modifications">Modifications</h1>

## Change the authorised amount

<a id="opIdpost-adjustAuthorisation"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/adjustAuthorisation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
    "modificationAmount": {
      "currency": "USD",
      "value": 1700
    },
    "reference": "YourModificationReference",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /adjustAuthorisation`

Allows you to increase or decrease the authorised amount after the initial authorisation has taken place. This functionality enables for example tipping, improving the chances your authorisation will be valid, or charging the shopper when they have already left the merchant premises.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/amountUpdates`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/amountUpdates) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

>The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
  "modificationAmount": {
    "currency": "USD",
    "value": 1700
  },
  "reference": "YourModificationReference",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="change-the-authorised-amount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdjustAuthorisationRequest](#schemaadjustauthorisationrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» modificationAmount|body|[Amount](#schemaamount)|true|The currency and value of the new total amount in minor units. For example, to increase the amount, the value is the sum of the pre-authorized amount and the additional amount.|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» originalMerchantReference|body|string|false|The original merchant reference to cancel.|
|» originalReference|body|string|true|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|» tenderReference|body|string|false|The transaction reference provided by the PED. For point-of-sale integrations only.|
|» uniqueTerminalId|body|string|false|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

> Example responses

> 200 Response

```json
{
  "pspReference": "851617892360718D",
  "response": "[adjustAuthorisation-received]"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="change-the-authorised-amount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModificationResult](#schemamodificationresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Cancel an authorisation

<a id="opIdpost-cancel"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
    "reference": "YourModificationReference",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /cancel`

Cancels the authorisation hold on a payment, returning a unique reference for this request. You can cancel payments after authorisation only for payment methods that support distinct authorisations and captures.

For more information, refer to [Cancel](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel).

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/cancels) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
  "reference": "YourModificationReference",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="cancel-an-authorisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CancelRequest](#schemacancelrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» originalMerchantReference|body|string|false|The original merchant reference to cancel.|
|» originalReference|body|string|true|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|» tenderReference|body|string|false|The transaction reference provided by the PED. For point-of-sale integrations only.|
|» uniqueTerminalId|body|string|false|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

> Example responses

> 200 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "response": "[capture-received]"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="cancel-an-authorisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModificationResult](#schemamodificationresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Cancel or refund a payment

<a id="opIdpost-cancelOrRefund"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/cancelOrRefund \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
    "reference": "YourModificationReference",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /cancelOrRefund`

Cancels a payment if it has not been captured yet, or refunds it if it has already been captured. This is useful when it is not certain if the payment has been captured or not (for example, when using auto-capture).

Do not use this endpoint for payments that involve:
 * [Multiple partial captures](https://docs.adyen.com/online-payments/capture).
 * [Split data](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information) either at time of payment or capture for Adyen for Platforms.

 Instead, check if the payment has been captured and make a corresponding [`/refund`](https://docs.adyen.com/api-explorer/#/Payment/refund) or [`/cancel`](https://docs.adyen.com/api-explorer/#/Payment/cancel) call.

For more information, refer to [Cancel or refund](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel-or-refund).

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/reversals) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
  "reference": "YourModificationReference",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="cancel-or-refund-a-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CancelOrRefundRequest](#schemacancelorrefundrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» originalMerchantReference|body|string|false|The original merchant reference to cancel.|
|» originalReference|body|string|true|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|» tenderReference|body|string|false|The transaction reference provided by the PED. For point-of-sale integrations only.|
|» uniqueTerminalId|body|string|false|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

> Example responses

> 200 Response

```json
{
  "pspReference": "851617892359708H",
  "response": "[cancelOrRefund-received]"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="cancel-or-refund-a-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModificationResult](#schemamodificationresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Capture an authorisation

<a id="opIdpost-capture"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/capture \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
    "modificationAmount": {
      "value": 500,
      "currency": "EUR"
    },
    "reference": "YOUR_REFERENCE",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /capture`

Captures the authorisation hold on a payment, returning a unique reference for this request. Usually the full authorisation amount is captured, however it's also possible to capture a smaller amount, which results in cancelling the remaining authorisation balance.

Payment methods that are captured automatically after authorisation don't need to be captured. However, submitting a capture request on these transactions will not result in double charges. If immediate or delayed auto-capture is enabled, calling the capture method is not necessary.

For more information refer to [Capture](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/capture).

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/captures`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/captures) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
  "modificationAmount": {
    "value": 500,
    "currency": "EUR"
  },
  "reference": "YOUR_REFERENCE",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="capture-an-authorisation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CaptureRequest](#schemacapturerequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» modificationAmount|body|[Amount](#schemaamount)|true|The amount that needs to be captured. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» originalMerchantReference|body|string|false|The original merchant reference to cancel.|
|» originalReference|body|string|true|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|» tenderReference|body|string|false|The transaction reference provided by the PED. For point-of-sale integrations only.|
|» uniqueTerminalId|body|string|false|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

> Example responses

> 200 Response

```json
{
  "pspReference": "861617892359057J",
  "response": "[capture-received]"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="capture-an-authorisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModificationResult](#schemamodificationresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Create a donation

<a id="opIdpost-donate"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/donate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
    "modificationAmount": {
      "value": 500,
      "currency": "EUR"
    },
    "reference": "YOUR_DONATION_REFERENCE",
    "donationAccount": "AdyenGivingDemo",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /donate`

<aside class="warning">
This operation is deprecated
</aside>

Schedules a new payment to be created (including a new authorisation request) for the specified donation using the payment details of the original payment.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/donations`](https://docs.adyen.com/api-explorer/Checkout/latest/post/donations) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
  "modificationAmount": {
    "value": 500,
    "currency": "EUR"
  },
  "reference": "YOUR_DONATION_REFERENCE",
  "donationAccount": "AdyenGivingDemo",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="create-a-donation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DonationRequest](#schemadonationrequest)|false|none|
|» donationAccount|body|string|true|The Adyen account name of the charity.|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» modificationAmount|body|[Amount](#schemaamount)|true|The amount to be donated.The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|» originalReference|body|string|false|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|

> Example responses

> 200 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "response": "[capture-received]"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="create-a-donation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModificationResult](#schemamodificationresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Refund a captured payment

<a id="opIdpost-refund"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/refund \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
    "modificationAmount": {
      "value": 500,
      "currency": "EUR"
    },
    "reference": "YOUR_REFERENCE",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /refund`

Refunds a payment that has previously been captured, returning a unique reference for this request. Refunding can be done on the full captured amount or a partial amount. Multiple (partial) refunds will be accepted as long as their sum doesn't exceed the captured amount. Payments which have been authorised, but not captured, cannot be refunded, use the /cancel method instead.

Some payment methods/gateways do not support partial/multiple refunds.
A margin above the captured limit can be configured to cover shipping/handling costs.

For more information, refer to [Refund](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/refund).

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/refunds`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/refunds) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
  "modificationAmount": {
    "value": 500,
    "currency": "EUR"
  },
  "reference": "YOUR_REFERENCE",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="refund-a-captured-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundRequest](#schemarefundrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» modificationAmount|body|[Amount](#schemaamount)|true|The amount that needs to be refunded. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» originalMerchantReference|body|string|false|The original merchant reference to cancel.|
|» originalReference|body|string|true|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|» tenderReference|body|string|false|The transaction reference provided by the PED. For point-of-sale integrations only.|
|» uniqueTerminalId|body|string|false|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

> Example responses

> 200 Response

```json
{
  "pspReference": "861617892360059B",
  "response": "[refund-received]"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="refund-a-captured-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModificationResult](#schemamodificationresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Cancel an authorisation using your reference

<a id="opIdpost-technicalCancel"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/technicalCancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originalMerchantReference": "YOUR_MERCHANT_REFERENCE",
    "reference": "YOUR_MODIFICATION_REFERENCE",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /technicalCancel`

This endpoint allows you to cancel a payment if you do not have the PSP reference of the original payment request available.

In your call, refer to the original payment by using the `reference` that you specified in your payment request.

For more information, see [Technical cancel](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel#technical-cancel). 

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/cancels`](https://docs.adyen.com/api-explorer/Checkout/latest/post/cancels) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

> Body parameter

```json
{
  "originalMerchantReference": "YOUR_MERCHANT_REFERENCE",
  "reference": "YOUR_MODIFICATION_REFERENCE",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="cancel-an-authorisation-using-your-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TechnicalCancelRequest](#schematechnicalcancelrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» modificationAmount|body|[Amount](#schemaamount)|false|The amount that needs to be captured/refunded. Required for `/capture` and `/refund`, not allowed for `/cancel`. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» originalMerchantReference|body|string|true|The original merchant reference to cancel.|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|» tenderReference|body|string|false|The transaction reference provided by the PED. For point-of-sale integrations only.|
|» uniqueTerminalId|body|string|false|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

> Example responses

> 200 Response

```json
{
  "pspReference": "881617892361436J",
  "response": "[technical-cancel-received]"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="cancel-an-authorisation-using-your-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModificationResult](#schemamodificationresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Cancel an in-person refund

<a id="opIdpost-voidPendingRefund"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payment/v68/voidPendingRefund \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "originalReference": "9914748988390044"
  }'
```

`POST /voidPendingRefund`

This endpoint allows you to cancel an unreferenced refund request before it has been completed.

In your call, you can refer to the original refund request either by using the `tenderReference`, or the `pspReference`. We recommend implementing based on the `tenderReference`, as this is generated for both offline and online transactions.

For more information, refer to [Cancel an unreferenced refund](https://docs.adyen.com/point-of-sale/basic-tapi-integration/refund-payment/cancel-unreferenced).

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "originalReference": "9914748988390044"
}
```

<h3 id="cancel-an-in-person-refund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VoidPendingRefundRequest](#schemavoidpendingrefundrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» modificationAmount|body|[Amount](#schemaamount)|false|The amount that needs to be captured/refunded. Required for `/capture` and `/refund`, not allowed for `/cancel`. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» originalMerchantReference|body|string|false|The original merchant reference to cancel.|
|» originalReference|body|string|false|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|» tenderReference|body|string|false|The transaction reference provided by the PED. For point-of-sale integrations only.|
|» uniqueTerminalId|body|string|false|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

> Example responses

> 200 Response

```json
{
  "pspReference": "861617892360062F",
  "response": "[voidPendingRefund-received]"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="cancel-an-in-person-refund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModificationResult](#schemamodificationresult)|
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

<h2 id="tocS_AccountInfo">AccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountinfo"></a>
<a id="schema_AccountInfo"></a>
<a id="tocSaccountinfo"></a>
<a id="tocsaccountinfo"></a>

```json
{
  "accountAgeIndicator": "notApplicable",
  "accountChangeDate": "1970-01-01T00:00:00Z",
  "accountChangeIndicator": "thisTransaction",
  "accountCreationDate": "1970-01-01T00:00:00Z",
  "accountType": "notApplicable",
  "addCardAttemptsDay": 0,
  "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
  "deliveryAddressUsageIndicator": "thisTransaction",
  "homePhone": "string",
  "mobilePhone": "string",
  "passwordChangeDate": "1970-01-01T00:00:00Z",
  "passwordChangeIndicator": "notApplicable",
  "pastTransactionsDay": 0,
  "pastTransactionsYear": 0,
  "paymentAccountAge": "1970-01-01T00:00:00Z",
  "paymentAccountIndicator": "notApplicable",
  "purchasesLast6Months": 0,
  "suspiciousActivity": true,
  "workPhone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountAgeIndicator|string|false|none|Indicator for the length of time since this shopper account was created in the merchant's environment.<br>Allowed values:<br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|accountChangeDate|string(date-time)|false|none|Date when the shopper's account was last changed.|
|accountChangeIndicator|string|false|none|Indicator for the length of time since the shopper's account was last updated.<br>Allowed values:<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|accountCreationDate|string(date-time)|false|none|Date when the shopper's account was created.|
|accountType|string|false|none|Indicates the type of account. For example, for a multi-account card product.<br>Allowed values:<br>* notApplicable<br>* credit<br>* debit|
|addCardAttemptsDay|integer(int32)|false|none|Number of attempts the shopper tried to add a card to their account in the last day.|
|deliveryAddressUsageDate|string(date-time)|false|none|Date the selected delivery address was first used.|
|deliveryAddressUsageIndicator|string|false|none|Indicator for the length of time since this delivery address was first used.<br>Allowed values:<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|homePhone|string|false|none|**Deprecated.** Shopper's home phone number (including the country code).|
|mobilePhone|string|false|none|**Deprecated.** Shopper's mobile phone number (including the country code).|
|passwordChangeDate|string(date-time)|false|none|Date when the shopper last changed their password.|
|passwordChangeIndicator|string|false|none|Indicator when the shopper has changed their password.<br>Allowed values:<br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|pastTransactionsDay|integer(int32)|false|none|Number of all transactions (successful and abandoned) from this shopper in the past 24 hours.|
|pastTransactionsYear|integer(int32)|false|none|Number of all transactions (successful and abandoned) from this shopper in the past year.|
|paymentAccountAge|string(date-time)|false|none|Date this payment method was added to the shopper's account.|
|paymentAccountIndicator|string|false|none|Indicator for the length of time since this payment method was added to this shopper's account.<br>Allowed values:<br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|purchasesLast6Months|integer(int32)|false|none|Number of successful purchases in the last six months.|
|suspiciousActivity|boolean|false|none|Whether suspicious activity was recorded on this account.|
|workPhone|string|false|none|**Deprecated.** Shopper's work phone number (including the country code).|

#### Enumerated Values

|Property|Value|
|---|---|
|accountAgeIndicator|notApplicable|
|accountAgeIndicator|thisTransaction|
|accountAgeIndicator|lessThan30Days|
|accountAgeIndicator|from30To60Days|
|accountAgeIndicator|moreThan60Days|
|accountChangeIndicator|thisTransaction|
|accountChangeIndicator|lessThan30Days|
|accountChangeIndicator|from30To60Days|
|accountChangeIndicator|moreThan60Days|
|accountType|notApplicable|
|accountType|credit|
|accountType|debit|
|deliveryAddressUsageIndicator|thisTransaction|
|deliveryAddressUsageIndicator|lessThan30Days|
|deliveryAddressUsageIndicator|from30To60Days|
|deliveryAddressUsageIndicator|moreThan60Days|
|passwordChangeIndicator|notApplicable|
|passwordChangeIndicator|thisTransaction|
|passwordChangeIndicator|lessThan30Days|
|passwordChangeIndicator|from30To60Days|
|passwordChangeIndicator|moreThan60Days|
|paymentAccountIndicator|notApplicable|
|paymentAccountIndicator|thisTransaction|
|paymentAccountIndicator|lessThan30Days|
|paymentAccountIndicator|from30To60Days|
|paymentAccountIndicator|moreThan60Days|

<h2 id="tocS_AcctInfo">AcctInfo</h2>
<!-- backwards compatibility -->
<a id="schemaacctinfo"></a>
<a id="schema_AcctInfo"></a>
<a id="tocSacctinfo"></a>
<a id="tocsacctinfo"></a>

```json
{
  "chAccAgeInd": "01",
  "chAccChange": "string",
  "chAccChangeInd": "01",
  "chAccPwChange": "string",
  "chAccPwChangeInd": "01",
  "chAccString": "string",
  "nbPurchaseAccount": "string",
  "paymentAccAge": "string",
  "paymentAccInd": "01",
  "provisionAttemptsDay": "string",
  "shipAddressUsage": "string",
  "shipAddressUsageInd": "01",
  "shipNameIndicator": "01",
  "suspiciousAccActivity": "01",
  "txnActivityDay": "str",
  "txnActivityYear": "str"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chAccAgeInd|string|false|none|Length of time that the cardholder has had the account with the 3DS Requestor. <br>Allowed values:<br>* **01** — No account<br>* **02** — Created during this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days|
|chAccChange|string|false|none|Date that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added. <br>Format: **YYYYMMDD**|
|chAccChangeInd|string|false|none|Length of time since the cardholder’s account information with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added. <br>Allowed values:<br>* **01** — Changed during this transaction<br>* **02** — Less than 30 days<br>* **03** — 30–60 days<br>* **04** — More than 60 days|
|chAccPwChange|string|false|none|Date that cardholder’s account with the 3DS Requestor had a password change or account reset. <br>Format: **YYYYMMDD**|
|chAccPwChangeInd|string|false|none|Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset. <br>Allowed values:<br>* **01** — No change<br>* **02** — Changed during this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days|
|chAccString|string|false|none|Date that the cardholder opened the account with the 3DS Requestor. <br>Format: **YYYYMMDD**|
|nbPurchaseAccount|string|false|none|Number of purchases with this cardholder account during the previous six months. Max length: 4 characters.|
|paymentAccAge|string|false|none|String that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. <br>Format: **YYYYMMDD**|
|paymentAccInd|string|false|none|Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. <br>Allowed values:<br>* **01** — No account (guest checkout)<br>* **02** — During this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days|
|provisionAttemptsDay|string|false|none|Number of Add Card attempts in the last 24 hours. Max length: 3 characters.|
|shipAddressUsage|string|false|none|String when the shipping address used for this transaction was first used with the 3DS Requestor. <br>Format: **YYYYMMDD**|
|shipAddressUsageInd|string|false|none|Indicates when the shipping address used for this transaction was first used with the 3DS Requestor. <br>Allowed values:<br>* **01** — This transaction<br>* **02** — Less than 30 days<br>* **03** — 30–60 days<br>* **04** — More than 60 days|
|shipNameIndicator|string|false|none|Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. <br>Allowed values:<br>* **01** — Account Name identical to shipping Name<br>* **02** — Account Name different to shipping Name|
|suspiciousAccActivity|string|false|none|Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account. <br>Allowed values:<br>* **01** — No suspicious activity has been observed<br>* **02** — Suspicious activity has been observed|
|txnActivityDay|string|false|none|Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours. Max length: 3 characters.|
|txnActivityYear|string|false|none|Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. Max length: 3 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|chAccAgeInd|01|
|chAccAgeInd|02|
|chAccAgeInd|03|
|chAccAgeInd|04|
|chAccAgeInd|05|
|chAccChangeInd|01|
|chAccChangeInd|02|
|chAccChangeInd|03|
|chAccChangeInd|04|
|chAccPwChangeInd|01|
|chAccPwChangeInd|02|
|chAccPwChangeInd|03|
|chAccPwChangeInd|04|
|chAccPwChangeInd|05|
|paymentAccInd|01|
|paymentAccInd|02|
|paymentAccInd|03|
|paymentAccInd|04|
|paymentAccInd|05|
|shipAddressUsageInd|01|
|shipAddressUsageInd|02|
|shipAddressUsageInd|03|
|shipAddressUsageInd|04|
|shipNameIndicator|01|
|shipNameIndicator|02|
|suspiciousAccActivity|01|
|suspiciousAccActivity|02|

<h2 id="tocS_AdditionalData3DSecure">AdditionalData3DSecure</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldata3dsecure"></a>
<a id="schema_AdditionalData3DSecure"></a>
<a id="tocSadditionaldata3dsecure"></a>
<a id="tocsadditionaldata3dsecure"></a>

```json
{
  "allow3DS2": "string",
  "challengeWindowSize": "01",
  "executeThreeD": "string",
  "mpiImplementationType": "string",
  "scaExemption": "string",
  "threeDSVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow3DS2|string|false|none|Indicates if you are able to process 3D Secure 2 transactions natively on your payment page. Send this parameter when you are using `/payments` endpoint with any of our [native 3D Secure 2 solutions](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).<br><br> > This parameter only indicates readiness to support native 3D Secure 2 authentication. To specify if you _want_ to perform 3D Secure, use [Dynamic 3D Secure](/risk-management/dynamic-3d-secure) or send the `executeThreeD` parameter.<br><br>Possible values:<br>* **true** - Ready to support native 3D Secure 2 authentication. Setting this to true does not mean always applying 3D Secure 2. Adyen selects redirect or native authentication based on your configuration to optimize authorization rates and improve the shopper's experience.<br>* **false** – Not ready to support native 3D Secure 2 authentication. Adyen offers redirect 3D Secure 2 authentication instead, based on your configuration.<br>|
|challengeWindowSize|string|false|none|Dimensions of the 3DS2 challenge window to be displayed to the cardholder.<br><br>Possible values:<br><br>* **01** - size of 250x400 <br>* **02** - size of 390x400<br>* **03** - size of 500x600<br>* **04** - size of 600x400<br>* **05** - Fullscreen|
|executeThreeD|string|false|none|Indicates if you want to perform 3D Secure authentication on a transaction.<br><br> > Alternatively, you can use [Dynamic 3D Secure](/risk-management/dynamic-3d-secure) to configure rules for applying 3D Secure.<br><br>Possible values:<br>* **true** – Perform 3D Secure authentication.<br>* **false** – Don't perform 3D Secure authentication. Note that this setting results in refusals if the issuer mandates 3D Secure because of the PSD2 directive  or other, national regulations. <br>|
|mpiImplementationType|string|false|none|In case of Secure+, this field must be set to **CUPSecurePlus**.|
|scaExemption|string|false|none|Indicates the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that you want to request for the transaction.<br><br> Possible values:<br>* **lowValue** <br>* **secureCorporate** <br>* **trustedBeneficiary** <br>* **transactionRiskAnalysis** |
|threeDSVersion|string|false|none|Indicates your preference for the 3D Secure version. <br>> If you use this parameter, you override the checks from Adyen's Authentication Engine. We recommend to use this field only if you have an extensive knowledge of 3D Secure.<br><br>Possible values:<br>* **2.1.0**: Apply 3D Secure version 2.1.0. <br>* **2.2.0**: Apply 3D Secure version 2.2.0. If the issuer does not support version 2.2.0, we will fall back to 2.1.0.<br><br>The following rules apply:<br>* If you prefer 2.1.0 or 2.2.0 but we receive a negative `transStatus` in the `ARes`, we will apply the fallback policy configured in your account.<br>* If you the BIN is not enrolled, you will receive an error.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|challengeWindowSize|01|
|challengeWindowSize|02|
|challengeWindowSize|03|
|challengeWindowSize|04|
|challengeWindowSize|05|

<h2 id="tocS_AdditionalDataAirline">AdditionalDataAirline</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataairline"></a>
<a id="schema_AdditionalDataAirline"></a>
<a id="tocSadditionaldataairline"></a>
<a id="tocsadditionaldataairline"></a>

```json
{
  "airline.agency_invoice_number": "string",
  "airline.agency_plan_name": "string",
  "airline.airline_code": "string",
  "airline.airline_designator_code": "string",
  "airline.boarding_fee": "string",
  "airline.computerized_reservation_system": "string",
  "airline.customer_reference_number": "string",
  "airline.document_type": "string",
  "airline.flight_date": "string",
  "airline.issue_date": "string",
  "airline.leg.carrier_code": "string",
  "airline.leg.class_of_travel": "string",
  "airline.leg.date_of_travel": "string",
  "airline.leg.depart_airport": "string",
  "airline.leg.depart_tax": "string",
  "airline.leg.destination_code": "string",
  "airline.leg.fare_base_code": "string",
  "airline.leg.flight_number": "string",
  "airline.leg.stop_over_code": "string",
  "airline.passenger.date_of_birth": "string",
  "airline.passenger.first_name": "string",
  "airline.passenger.last_name": "string",
  "airline.passenger.phone_number": "string",
  "airline.passenger.traveller_type": "string",
  "airline.passenger_name": "string",
  "airline.ticket_issue_address": "string",
  "airline.ticket_number": "string",
  "airline.travel_agency_code": "string",
  "airline.travel_agency_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airline.agency_invoice_number|string|false|none|The reference number for the invoice, issued by the agency.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 6 characters|
|airline.agency_plan_name|string|false|none|The two-letter agency plan identifier.<br>* Encoding: ASCII<br>* minLength: 2 characters<br>* maxLength: 2 characters|
|airline.airline_code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX) that identifies the carrier.<br>* Format: IATA 3-digit accounting code (PAX)<br>* Example: KLM = 074<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.airline_designator_code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier.<br>* Encoding: ASCII<br>* Example: KLM = KL<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.boarding_fee|string|false|none|The amount charged for boarding the plane, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Encoding: Numeric<br>* minLength: 1 character<br>* maxLength: 18 characters|
|airline.computerized_reservation_system|string|false|none|The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket.<br>* Encoding: ASCII<br>* minLength: 4 characters<br>* maxLength: 4 characters|
|airline.customer_reference_number|string|false|none|The alphanumeric customer reference number.<br>* Encoding: ASCII<br>* maxLength: 20 characters<br>* If you send more than 20 characters, the customer reference number is truncated<br>* Must not be all spaces|
|airline.document_type|string|false|none|A code that identifies the type of item bought. The description of the code can appear on credit card statements.<br>* Encoding: ASCII<br>* Example: Passenger ticket = 01<br>* minLength: 2 characters<br>* maxLength: 2 characters|
|airline.flight_date|string|false|none|The flight departure date. Local time `(HH:mm)` is optional.<br>* Date format: `yyyy-MM-dd`<br>* Date and time format: `yyyy-MM-dd HH:mm`<br>* minLength: 10 characters<br>* maxLength: 16 characters|
|airline.issue_date|string|false|none|The date that the ticket was issued to the passenger.<br>* minLength: 6 characters<br>* maxLength: 6 characters<br>* Date format: YYMMDD|
|airline.leg.carrier_code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier.<br>This field is required if the airline data includes leg details.<br>* Example: KLM = KL<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.class_of_travel|string|false|none|A one-letter travel class identifier.<br> The following are common:<br> * F: first class<br>* J: business class<br>* Y: economy class<br>* W: premium economy<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 1 character<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.date_of_travel|string|false|none|	<br>Date and time of travel in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format `yyyy-MM-dd HH:mm`.<br>* Encoding: ASCII<br>* minLength: 16 characters<br>* maxLength: 16 characters|
|airline.leg.depart_airport|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) three-letter airport code of the departure airport.<br>This field is required if the airline data includes leg details.<br><br>* Encoding: ASCII<br>* Example: Amsterdam = AMS<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.depart_tax|string|false|none|The amount of [departure tax](https://en.wikipedia.org/wiki/Departure_tax) charged, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Encoding: Numeric<br>* minLength: 1<br>* maxLength: 12<br>* Must not be all zeros.|
|airline.leg.destination_code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code of the destination airport.<br>This field is required if the airline data includes leg details.<br>* Example: Amsterdam = AMS<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.fare_base_code|string|false|none|The [fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code), alphanumeric.<br>* minLength: 1 character<br>* maxLength: 15 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.flight_number|string|false|none|The flight identifier.<br>* minLength: 1 character<br>* maxLength: 5 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.stop_over_code|string|false|none|A one-letter code that indicates whether the passenger is entitled to make a stopover. Can be a space, O if the passenger is entitled to make a stopover, or X if they are not.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 1 character|
|airline.passenger.date_of_birth|string|false|none|The passenger's date of birth.<br><br>Date format: `yyyy-MM-dd`<br>* minLength: 10<br>* maxLength: 10|
|airline.passenger.first_name|string|false|none|The passenger's first name.<br>> This field is required if the airline data includes passenger details or leg details.<br>* Encoding: ASCII|
|airline.passenger.last_name|string|false|none|The passenger's last name.<br>> This field is required if the airline data includes passenger details or leg details.<br>* Encoding: ASCII|
|airline.passenger.phone_number|string|false|none|The passenger's phone number, including country code. This is an alphanumeric field that can include the '+' and '-' signs.<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 30 characters|
|airline.passenger.traveller_type|string|false|none|The IATA passenger type code (PTC).<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 6 characters|
|airline.passenger_name|string|true|none|The passenger's name, initials, and title.<br>* Format: last name + first name or initials + title<br>* Example: *FLYER / MARY MS*<br>* minLength: 1 character<br>* maxLength: 20 characters<br>* If you send more than 20 characters, the name is truncated<br>* Must not be all spaces <br>* Must not be all zeros.|
|airline.ticket_issue_address|string|false|none|The address of the organization that issued the ticket.<br>* minLength: 0 characters<br>* maxLength: 16 characters|
|airline.ticket_number|string|false|none|The ticket's unique identifier.<br>* minLength: 1 character<br>* maxLength: 15 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.travel_agency_code|string|false|none|The unique identifier from IATA or ARC for the travel agency that issues the ticket.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 8 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.travel_agency_name|string|false|none|The name of the travel agency.<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 25 characters<br>* Must not be all spaces<br>* Must not be all zeros.|

<h2 id="tocS_AdditionalDataCarRental">AdditionalDataCarRental</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatacarrental"></a>
<a id="schema_AdditionalDataCarRental"></a>
<a id="tocSadditionaldatacarrental"></a>
<a id="tocsadditionaldatacarrental"></a>

```json
{
  "carRental.checkOutDate": "string",
  "carRental.customerServiceTollFreeNumber": "string",
  "carRental.daysRented": "string",
  "carRental.fuelCharges": "string",
  "carRental.insuranceCharges": "string",
  "carRental.locationCity": "string",
  "carRental.locationCountry": "string",
  "carRental.locationStateProvince": "string",
  "carRental.noShowIndicator": "string",
  "carRental.oneWayDropOffCharges": "string",
  "carRental.rate": "string",
  "carRental.rateIndicator": "string",
  "carRental.rentalAgreementNumber": "string",
  "carRental.rentalClassId": "string",
  "carRental.renterName": "string",
  "carRental.returnCity": "string",
  "carRental.returnCountry": "string",
  "carRental.returnDate": "string",
  "carRental.returnLocationId": "string",
  "carRental.returnStateProvince": "string",
  "carRental.taxExemptIndicator": "string",
  "travelEntertainmentAuthData.duration": "string",
  "travelEntertainmentAuthData.market": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carRental.checkOutDate|string|false|none|The pick-up date.<br>* Date format: `yyyyMMdd`|
|carRental.customerServiceTollFreeNumber|string|false|none|The customer service phone number of the car rental company.<br>* Format: Alphanumeric<br>* maxLength: 17<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>*Must not be all zeros.|
|carRental.daysRented|string|false|none|Number of days for which the car is being rented.<br>* Format: Numeric<br>* maxLength: 4<br>* Must not be all spaces|
|carRental.fuelCharges|string|false|none|Any fuel charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: Numeric<br>* maxLength: 12|
|carRental.insuranceCharges|string|false|none|Any insurance charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: Numeric<br>* maxLength: 12<br>* Must not be all spaces<br>*Must not be all zeros.|
|carRental.locationCity|string|false|none|The city where the car is rented.<br>* Format: Alphanumeric<br>* maxLength: 18<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.locationCountry|string|false|none|The country where the car is rented, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br>* Format: Alphanumeric<br>* maxLength: 2|
|carRental.locationStateProvince|string|false|none|The state or province where the car is rented.<br>* Format: Alphanumeric<br>* maxLength: 2<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.noShowIndicator|string|false|none|Indicates if the customer didn't pick up their rental car.<br>* Y - Customer did not pick up their car<br>* N - Not applicable|
|carRental.oneWayDropOffCharges|string|false|none|The charge for not returning a car to the original rental location, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* maxLength: 12|
|carRental.rate|string|false|none|The daily rental rate, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: Alphanumeric<br>* maxLength: 12|
|carRental.rateIndicator|string|false|none|Specifies whether the given rate is applied daily or weekly.<br>* D - Daily rate<br>* W - Weekly rate|
|carRental.rentalAgreementNumber|string|false|none|The rental agreement number for the car rental.<br>* Format: Alphanumeric<br>* maxLength: 9<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.rentalClassId|string|false|none|The classification of the rental car.<br>* Format: Alphanumeric<br>* maxLength: 4<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.renterName|string|false|none|The name of the person renting the car.<br>* Format: Alphanumeric<br>* maxLength: 26<br>* If you send more than 26 characters, the name is truncated<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.returnCity|string|false|none|The city where the car must be returned.<br>* Format: Alphanumeric<br>* maxLength: 18<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.returnCountry|string|false|none|The country where the car must be returned, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br>* Format: Alphanumeric<br>* maxLength: 2|
|carRental.returnDate|string|false|none|The last date to return the car by.<br>* Date format: `yyyyMMdd`<br>* maxLength: 8|
|carRental.returnLocationId|string|false|none|The agency code, phone number, or address abbreviation<br>* Format: Alphanumeric<br>* maxLength: 10<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.returnStateProvince|string|false|none|The state or province where the car must be returned.<br>* Format: Alphanumeric<br>* maxLength: 3<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.taxExemptIndicator|string|false|none|Indicates if the goods or services were tax-exempt, or if tax was not paid on them.<br><br>Values:<br>* Y - Goods or services were tax exempt<br>* N - Tax was not collected|
|travelEntertainmentAuthData.duration|string|false|none|Number of days the car is rented for. This should be included in the auth message.<br>* Format: Numeric<br>* maxLength: 4|
|travelEntertainmentAuthData.market|string|false|none|Indicates what market-specific dataset will be submitted or is being submitted. Value should be 'A' for car rental. This should be included in the auth message.<br>* Format: Alphanumeric<br>* maxLength: 1|

<h2 id="tocS_AdditionalDataCommon">AdditionalDataCommon</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatacommon"></a>
<a id="schema_AdditionalDataCommon"></a>
<a id="tocSadditionaldatacommon"></a>
<a id="tocsadditionaldatacommon"></a>

```json
{
  "RequestedTestAcquirerResponseCode": "string",
  "RequestedTestErrorResponseCode": "string",
  "allowPartialAuth": "string",
  "authorisationType": "string",
  "autoRescue": "string",
  "customRoutingFlag": "string",
  "industryUsage": "NoShow",
  "manualCapture": "string",
  "maxDaysToRescue": "string",
  "networkTxReference": "string",
  "overwriteBrand": "string",
  "subMerchantCity": "string",
  "subMerchantCountry": "string",
  "subMerchantEmail": "string",
  "subMerchantID": "string",
  "subMerchantName": "string",
  "subMerchantPhoneNumber": "string",
  "subMerchantPostalCode": "string",
  "subMerchantState": "string",
  "subMerchantStreet": "string",
  "subMerchantTaxId": "string",
  "transactionLinkId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestedTestAcquirerResponseCode|string|false|none|Triggers test scenarios that allow to replicate certain acquirer response codes. See [Testing result codes and refusal reasons](https://docs.adyen.com/development-resources/testing/result-codes/) to learn about the possible values, and the `refusalReason` values you can trigger. |
|RequestedTestErrorResponseCode|string|false|none|Triggers test scenarios that allow to replicate certain communication errors.<br><br>Allowed values:<br>* **NO_CONNECTION_AVAILABLE** – There wasn't a connection available to service the outgoing communication.<br>This is a transient, retriable error since no messaging could be initiated to an issuing system (or third-party acquiring system). Therefore, the header Transient-Error: true is returned in the response. A subsequent request using the same idempotency key will be processed as if it was the first request.<br>* **IOEXCEPTION_RECEIVED** – Something went wrong during transmission of the message or receiving the response.<br>This is a classified as non-transient because the message could have been received by the issuing party and been acted upon. No transient error header is returned. If using idempotency, the (error) response is stored as the final result for the idempotency key. Subsequent messages with the same idempotency key not be processed beyond returning the stored response.|
|allowPartialAuth|string|false|none|Set to true to authorise a part of the requested amount in case the cardholder does not have enough funds on their account. <br>If a payment was partially authorised, the response includes resultCode: PartiallyAuthorised and the authorised amount in additionalData.authorisedAmountValue.<br>To enable this functionality, contact our Support Team.|
|authorisationType|string|false|none|Flags a card payment request for either pre-authorisation or final authorisation. For more information, refer to [Authorisation types](https://docs.adyen.com/online-payments/adjust-authorisation#authorisation-types).<br><br>Allowed values:<br>* **PreAuth** – flags the payment request to be handled as a pre-authorisation.<br>* **FinalAuth** – flags the payment request to be handled as a final authorisation.|
|autoRescue|string|false|none|Set to **true** to enable [Auto Rescue](https://docs.adyen.com/online-payments/auto-rescue/) for a transaction. Use the `maxDaysToRescue` to specify a rescue window.|
|customRoutingFlag|string|false|none|Allows you to determine or override the acquirer account that should be used for the transaction.<br><br>If you need to process a payment with an acquirer different from a default one, you can set up a corresponding configuration on the Adyen payments platform. Then you can pass a custom routing flag in a payment request's additional data to target a specific acquirer.<br><br>To enable this functionality, contact [Support](https://www.adyen.help/hc/en-us/requests/new).|
|industryUsage|string|false|none|In case of [asynchronous authorisation adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#adjust-authorisation), this field denotes why the additional payment is made.<br><br>Possible values:<br><br> * **NoShow**: An incremental charge is carried out because of a no-show for a guaranteed reservation.<br><br> * **DelayedCharge**: An incremental charge is carried out to process an additional payment after the original services have been rendered and the respective payment has been processed.|
|manualCapture|string|false|none|Set to **true** to require [manual capture](https://docs.adyen.com/online-payments/capture) for the transaction.|
|maxDaysToRescue|string|false|none|The rescue window for a transaction, in days, when `autoRescue` is set to **true**. You can specify a value between 1 and 48.<br><br>* For [cards](https://docs.adyen.com/online-payments/auto-rescue/cards/), the default is one calendar month.<br> * For [SEPA](https://docs.adyen.com/online-payments/auto-rescue/sepa/), the default is 42 days.|
|networkTxReference|string|false|none|Allows you to link the transaction to the original or previous one in a subscription/card-on-file chain. This field is required for token-based transactions where Adyen does not tokenize the card.<br><br>Transaction identifier from card schemes, for example, Mastercard Trace ID or the Visa Transaction ID.<br><br>Submit the original transaction ID of the contract in your payment request if you are not tokenizing card details with Adyen and are making a merchant-initiated transaction (MIT) for subsequent charges.<br><br>Make sure you are sending `shopperInteraction` **ContAuth** and `recurringProcessingModel` **Subscription** or **UnscheduledCardOnFile** to ensure that the transaction is classified as MIT.|
|overwriteBrand|string|false|none|Boolean indicator that can be optionally used for performing debit transactions on combo cards (for example, combo cards in Brazil). This is not mandatory but we recommend that you set this to true if you want to use the `selectedBrand` value to specify how to process the transaction.|
|subMerchantCity|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the city of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Maximum length: 13 characters.|
|subMerchantCountry|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the three-letter country code of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Fixed length: 3 characters.|
|subMerchantEmail|string|false|none|This field is required for transactions performed by registered payment facilitators. This field contains the email address of the sub-merchant.<br>* Format: Alphanumeric<br>* Maximum length: 40 characters|
|subMerchantID|string|false|none|This field contains an identifier of the actual merchant when a transaction is submitted via a payment facilitator. The payment facilitator must send in this unique ID.<br><br>A unique identifier per submerchant that is required if the transaction is performed by a registered payment facilitator.<br>* Format: alpha-numeric.<br>* Fixed length: 15 characters.|
|subMerchantName|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the name of the actual merchant.<br>* Format: alpha-numeric.<br>* Maximum length: 22 characters.|
|subMerchantPhoneNumber|string|false|none|This field is required for transactions performed by registered payment facilitators. This field contains the phone number of the sub-merchant.* Format: Alphanumeric<br>* Maximum length: 20 characters|
|subMerchantPostalCode|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the postal code of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Maximum length: 10 characters.|
|subMerchantState|string|false|none|This field is required if the transaction is performed by a registered payment facilitator, and if applicable to the country. This field must contain the state code of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Maximum length: 3 characters.|
|subMerchantStreet|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the street of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Maximum length: 60 characters.|
|subMerchantTaxId|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the tax ID of the actual merchant.<br>* Format: alpha-numeric.<br>* Fixed length: 11 or 14 characters.|
|transactionLinkId|string|false|none|Allows you to link the transaction to the original or previous one in a subscription/card-on-file chain For Mastercard payments. This field is required for token-based transactions where Adyen does not tokenize the card.<br><br>Transaction identifier from Mastercard.<br><br>Submit the original transaction ID of the contract in your payment request if you are not tokenizing card details with Adyen and are making a merchant-initiated transaction (MIT) for subsequent charges.<br><br>Make sure you are sending `shopperInteraction` **ContAuth** and `recurringProcessingModel` **Subscription** or **UnscheduledCardOnFile** to ensure that the transaction is classified as MIT.|

#### Enumerated Values

|Property|Value|
|---|---|
|industryUsage|NoShow|
|industryUsage|DelayedCharge|

<h2 id="tocS_AdditionalDataLevel23">AdditionalDataLevel23</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatalevel23"></a>
<a id="schema_AdditionalDataLevel23"></a>
<a id="tocSadditionaldatalevel23"></a>
<a id="tocsadditionaldatalevel23"></a>

```json
{
  "enhancedSchemeData.customerReference": "string",
  "enhancedSchemeData.destinationCountryCode": "string",
  "enhancedSchemeData.destinationPostalCode": "string",
  "enhancedSchemeData.destinationStateProvinceCode": "string",
  "enhancedSchemeData.dutyAmount": "string",
  "enhancedSchemeData.freightAmount": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].commodityCode": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].description": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].discountAmount": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].productCode": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].quantity": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].totalAmount": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].unitPrice": "string",
  "enhancedSchemeData.orderDate": "string",
  "enhancedSchemeData.shipFromPostalCode": "string",
  "enhancedSchemeData.totalTaxAmount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enhancedSchemeData.customerReference|string|false|none|The reference number to identify the customer and their order. <br>* Encoding: ASCII<br>* Max length: 25 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.destinationCountryCode|string|false|none|The three-letter [ISO 3166-1 alpha-3 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) for the destination address.<br>* Encoding: ASCII<br>* Fixed length: 3 characters|
|enhancedSchemeData.destinationPostalCode|string|false|none|The postal code of the destination address.<br>* Encoding: ASCII<br>* Max length: 10 characters<br>* Must not start with a space.<br>* For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.<br>* For Canada, it must be in 6 digits format. For example, M4B 1G5.|
|enhancedSchemeData.destinationStateProvinceCode|string|false|none|The state or province code of the destination address.<br>* Encoding: ASCII<br>* Max length: 3 characters<br>* Must not start with a space.|
|enhancedSchemeData.dutyAmount|string|false|none|The duty tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max length: 12 characters|
|enhancedSchemeData.freightAmount|string|false|none|The shipping amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max length: 12 characters|
|enhancedSchemeData.itemDetailLine[itemNr].commodityCode|string|false|none|The code that identifies the item in a standardized commodity coding scheme. There are different commodity coding schemes:<br>* [UNSPSC commodity codes](https://www.ungm.org/public/unspsc)<br>* [HS commodity codes](https://www.wcoomd.org/en/topics/nomenclature/overview.aspx)<br>* [NAICS commodity codes](https://www.census.gov/naics/)<br>* [NAPCS commodity codes](https://www.census.gov/naics/napcs/)<br><br><br>* Encoding: ASCII<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].description|string|false|none|A description of the item, that provides details about the purchase.<br><br> For Visa transactions with level 3 ESD, the description must not be the same or very similar to your merchant name, or, consist only of common words like "product", or "service".<br>* Encoding: ASCII<br>* Max length: 26 characters<br>* Must not be a single character.<br>* Must not be blank.<br>* Must not be all special characters.<br>* Must not be blank.<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].discountAmount|string|false|none|The discount amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max length: 12 characters|
|enhancedSchemeData.itemDetailLine[itemNr].productCode|string|false|none|The product code. Must be a unique product code associated with the item or service. This can be your unique code for the item, or the manufacturer's product code. <br>* Encoding: ASCII.<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].quantity|string|false|none|The number of items. Must be an integer greater than zero.<br>* Encoding: Numeric<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.|
|enhancedSchemeData.itemDetailLine[itemNr].totalAmount|string|false|none|The total amount for the line item, in [minor units](https://docs.adyen.com/development-resources/currency-codes). See [Amount requirements for level 2/3 ESD](https://docs.adyen.com//payment-methods/cards/enhanced-scheme-data/l2-l3#amount-requirements) to learn more about how to calculate the line item total.<br>* For example, 2000 means USD 20.00.<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure|string|false|none|The unit of measurement for an item.<br>* Encoding: ASCII<br>* Max length: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].unitPrice|string|false|none|The unit price in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max length: 12 characters<br>* Must not be all zeros.|
|enhancedSchemeData.orderDate|string|false|none|The order date.<br>* Format: `ddMMyy`<br>* Encoding: ASCII<br>* Max length: 6 characters|
|enhancedSchemeData.shipFromPostalCode|string|false|none|The postal code of the address where the item is shipped from.<br>* Encoding: ASCII<br>* Max length: 10 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.<br>* For Canada, it must be in 6 digits format. For example, M4B 1G5.|
|enhancedSchemeData.totalTaxAmount|string|false|none|The amount of state or provincial [tax included in the total transaction amount](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3#requirements-to-send-level-2-3-esd), in [minor units](https://docs.adyen.com/development-resources/currency-codes). <br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric <br>* Max length: 12 characters <br>* For L2 data: must not be all zeroes. <br>* For L3 data: can be zero.|

<h2 id="tocS_AdditionalDataLodging">AdditionalDataLodging</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatalodging"></a>
<a id="schema_AdditionalDataLodging"></a>
<a id="tocSadditionaldatalodging"></a>
<a id="tocsadditionaldatalodging"></a>

```json
{
  "lodging.SpecialProgramCode": "string",
  "lodging.checkInDate": "string",
  "lodging.checkOutDate": "string",
  "lodging.customerServiceTollFreeNumber": "string",
  "lodging.fireSafetyActIndicator": "string",
  "lodging.folioCashAdvances": "string",
  "lodging.folioNumber": "string",
  "lodging.foodBeverageCharges": "string",
  "lodging.noShowIndicator": "string",
  "lodging.prepaidExpenses": "string",
  "lodging.propertyPhoneNumber": "string",
  "lodging.room1.numberOfNights": "string",
  "lodging.room1.rate": "string",
  "lodging.totalRoomTax": "string",
  "lodging.totalTax": "string",
  "travelEntertainmentAuthData.duration": "string",
  "travelEntertainmentAuthData.market": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lodging.SpecialProgramCode|string|false|none|A code that corresponds to the category of lodging charges for the payment. Possible values:<br>* 1: Lodging<br>* 2: No show reservation<br>* 3: Advanced deposit|
|lodging.checkInDate|string|false|none|The arrival date.<br>* Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**.|
|lodging.checkOutDate|string|false|none|The departure date.<br>* Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**.|
|lodging.customerServiceTollFreeNumber|string|false|none|The toll-free phone number for the lodging.<br>* Format: numeric<br>* Max length: 17 characters.<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros.|
|lodging.fireSafetyActIndicator|string|false|none|Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Must be 'Y' or 'N'.<br>* Format: alphabetic<br>* Max length: 1 character|
|lodging.folioCashAdvances|string|false|none|The folio cash advances, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters|
|lodging.folioNumber|string|false|none|The card acceptor’s internal invoice or billing ID reference number.<br>* Max length: 25 characters<br>* Must not start with a space<br>* Must not contain any special characters<br>* Must not be all zeros.|
|lodging.foodBeverageCharges|string|false|none|Any charges for food and beverages associated with the booking, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters|
|lodging.noShowIndicator|string|false|none|Indicates if the customer didn't check in for their booking.<br> Possible values: <br>* **Y**: the customer didn't check in <br>* **N**: the customer checked in|
|lodging.prepaidExpenses|string|false|none|The prepaid expenses for the booking.<br>* Format: numeric<br>* Max length: 12 characters|
|lodging.propertyPhoneNumber|string|false|none|The lodging property location's phone number.<br>* Format: numeric<br>* Min length: 10 characters<br>* Max length: 17 characters<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros.|
|lodging.room1.numberOfNights|string|false|none|The total number of nights the room is booked for.<br>* Format: numeric<br>* Must be a number between 0 and 99<br>* Max length: 4 characters|
|lodging.room1.rate|string|false|none|The rate for the room, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number|
|lodging.totalRoomTax|string|false|none|The total room tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number|
|lodging.totalTax|string|false|none|The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number|
|travelEntertainmentAuthData.duration|string|false|none|The number of nights. This should be included in the auth message.<br>* Format: numeric<br>* Max length: 4 characters|
|travelEntertainmentAuthData.market|string|false|none|Indicates what market-specific dataset will be submitted. Must be 'H' for Hotel. This should be included in the auth message.<br><br>* Format: alphanumeric<br>* Max length: 1 character|

<h2 id="tocS_AdditionalDataModifications">AdditionalDataModifications</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatamodifications"></a>
<a id="schema_AdditionalDataModifications"></a>
<a id="tocSadditionaldatamodifications"></a>
<a id="tocsadditionaldatamodifications"></a>

```json
{
  "installmentPaymentData.selectedInstallmentOption": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installmentPaymentData.selectedInstallmentOption|string|false|none|This is the installment option selected by the shopper. It is required only if specified by the user.|

<h2 id="tocS_AdditionalDataOpenInvoice">AdditionalDataOpenInvoice</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataopeninvoice"></a>
<a id="schema_AdditionalDataOpenInvoice"></a>
<a id="tocSadditionaldataopeninvoice"></a>
<a id="tocsadditionaldataopeninvoice"></a>

```json
{
  "openinvoicedata.merchantData": "string",
  "openinvoicedata.numberOfLines": "string",
  "openinvoicedata.recipientFirstName": "string",
  "openinvoicedata.recipientLastName": "string",
  "openinvoicedataLine[itemNr].currencyCode": "string",
  "openinvoicedataLine[itemNr].description": "string",
  "openinvoicedataLine[itemNr].itemAmount": "string",
  "openinvoicedataLine[itemNr].itemId": "string",
  "openinvoicedataLine[itemNr].itemVatAmount": "string",
  "openinvoicedataLine[itemNr].itemVatPercentage": "string",
  "openinvoicedataLine[itemNr].numberOfItems": "string",
  "openinvoicedataLine[itemNr].returnShippingCompany": "string",
  "openinvoicedataLine[itemNr].returnTrackingNumber": "string",
  "openinvoicedataLine[itemNr].returnTrackingUri": "string",
  "openinvoicedataLine[itemNr].shippingCompany": "string",
  "openinvoicedataLine[itemNr].shippingMethod": "string",
  "openinvoicedataLine[itemNr].trackingNumber": "string",
  "openinvoicedataLine[itemNr].trackingUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openinvoicedata.merchantData|string|false|none|Holds different merchant data points like product, purchase, customer, and so on. It takes data in a Base64 encoded string.<br><br>The `merchantData` parameter needs to be added to the `openinvoicedata` signature at the end.<br><br>Since the field is optional, if it's not included it does not impact computing the merchant signature.<br><br>Applies only to Klarna.<br><br>You can contact Klarna for the format and structure of the string.|
|openinvoicedata.numberOfLines|string|false|none|The number of invoice lines included in `openinvoicedata`.<br><br>There needs to be at least one line, so `numberOfLines` needs to be at least 1.|
|openinvoicedata.recipientFirstName|string|false|none|First name of the recipient. If the delivery address and the billing address are different, specify the `recipientFirstName` and `recipientLastName` to share the delivery address with Klarna. Otherwise, only the billing address is shared with Klarna.|
|openinvoicedata.recipientLastName|string|false|none|Last name of the recipient. If the delivery address and the billing address are different, specify the `recipientFirstName` and `recipientLastName` to share the delivery address with Klarna. Otherwise, only the billing address is shared with Klarna.|
|openinvoicedataLine[itemNr].currencyCode|string|false|none|The three-character ISO currency code.|
|openinvoicedataLine[itemNr].description|string|false|none|A text description of the product the invoice line refers to.|
|openinvoicedataLine[itemNr].itemAmount|string|false|none|The price for one item in the invoice line, represented in minor units.<br><br>The due amount for the item, VAT excluded.|
|openinvoicedataLine[itemNr].itemId|string|false|none|A unique id for this item. Required for RatePay if the description of each item is not unique.|
|openinvoicedataLine[itemNr].itemVatAmount|string|false|none|The VAT due for one item in the invoice line, represented in minor units.|
|openinvoicedataLine[itemNr].itemVatPercentage|string|false|none|The VAT percentage for one item in the invoice line, represented in minor units.<br><br>For example, 19% VAT is specified as 1900.|
|openinvoicedataLine[itemNr].numberOfItems|string|false|none|The number of units purchased of a specific product.|
|openinvoicedataLine[itemNr].returnShippingCompany|string|false|none|Name of the shipping company handling the the return shipment.|
|openinvoicedataLine[itemNr].returnTrackingNumber|string|false|none|The tracking number for the return of the shipment.|
|openinvoicedataLine[itemNr].returnTrackingUri|string|false|none|URI where the customer can track the return of their shipment.|
|openinvoicedataLine[itemNr].shippingCompany|string|false|none|Name of the shipping company handling the delivery.|
|openinvoicedataLine[itemNr].shippingMethod|string|false|none|Shipping method.|
|openinvoicedataLine[itemNr].trackingNumber|string|false|none|The tracking number for the shipment.|
|openinvoicedataLine[itemNr].trackingUri|string|false|none|URI where the customer can track their shipment.|

<h2 id="tocS_AdditionalDataOpi">AdditionalDataOpi</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataopi"></a>
<a id="schema_AdditionalDataOpi"></a>
<a id="tocSadditionaldataopi"></a>
<a id="tocsadditionaldataopi"></a>

```json
{
  "opi.includeTransToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opi.includeTransToken|string|false|none|Optional boolean indicator. Set to **true** if you want an ecommerce transaction to return an `opi.transToken` as additional data in the response.<br><br>You can store this Oracle Payment Interface token in your Oracle Opera database. For more information and required settings, see [Oracle Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce).|

<h2 id="tocS_AdditionalDataRatepay">AdditionalDataRatepay</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataratepay"></a>
<a id="schema_AdditionalDataRatepay"></a>
<a id="tocSadditionaldataratepay"></a>
<a id="tocsadditionaldataratepay"></a>

```json
{
  "ratepay.installmentAmount": "string",
  "ratepay.interestRate": "string",
  "ratepay.lastInstallmentAmount": "string",
  "ratepay.paymentFirstday": "string",
  "ratepaydata.deliveryDate": "string",
  "ratepaydata.dueDate": "string",
  "ratepaydata.invoiceDate": "string",
  "ratepaydata.invoiceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ratepay.installmentAmount|string|false|none|Amount the customer has to pay each month.|
|ratepay.interestRate|string|false|none|Interest rate of this installment.|
|ratepay.lastInstallmentAmount|string|false|none|Amount of the last installment.|
|ratepay.paymentFirstday|string|false|none|Calendar day of the first payment.|
|ratepaydata.deliveryDate|string|false|none|Date the merchant delivered the goods to the customer.|
|ratepaydata.dueDate|string|false|none|Date by which the customer must settle the payment.|
|ratepaydata.invoiceDate|string|false|none|Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery date.|
|ratepaydata.invoiceId|string|false|none|Identification name or number for the invoice, defined by the merchant.|

<h2 id="tocS_AdditionalDataRetry">AdditionalDataRetry</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataretry"></a>
<a id="schema_AdditionalDataRetry"></a>
<a id="tocSadditionaldataretry"></a>
<a id="tocsadditionaldataretry"></a>

```json
{
  "retry.chainAttemptNumber": "string",
  "retry.orderAttemptNumber": "string",
  "retry.skipRetry": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|retry.chainAttemptNumber|string|false|none|The number of times the transaction (not order) has been retried between different payment service providers. For instance, the `chainAttemptNumber` set to 2 means that this transaction has been recently tried on another provider before being sent to Adyen.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.|
|retry.orderAttemptNumber|string|false|none|The index of the attempt to bill a particular order, which is identified by the `merchantOrderReference` field. For example, if a recurring transaction fails and is retried one day later, then the order number for these attempts would be 1 and 2, respectively.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.|
|retry.skipRetry|string|false|none|The Boolean value indicating whether Adyen should skip or retry this transaction, if possible.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.|

<h2 id="tocS_AdditionalDataRisk">AdditionalDataRisk</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatarisk"></a>
<a id="schema_AdditionalDataRisk"></a>
<a id="tocSadditionaldatarisk"></a>
<a id="tocsadditionaldatarisk"></a>

```json
{
  "riskdata.[customFieldName]": "string",
  "riskdata.basket.item[itemNr].amountPerItem": "string",
  "riskdata.basket.item[itemNr].brand": "string",
  "riskdata.basket.item[itemNr].category": "string",
  "riskdata.basket.item[itemNr].color": "string",
  "riskdata.basket.item[itemNr].currency": "string",
  "riskdata.basket.item[itemNr].itemID": "string",
  "riskdata.basket.item[itemNr].manufacturer": "string",
  "riskdata.basket.item[itemNr].productTitle": "string",
  "riskdata.basket.item[itemNr].quantity": "string",
  "riskdata.basket.item[itemNr].receiverEmail": "string",
  "riskdata.basket.item[itemNr].size": "string",
  "riskdata.basket.item[itemNr].sku": "string",
  "riskdata.basket.item[itemNr].upc": "string",
  "riskdata.promotions.promotion[itemNr].promotionCode": "string",
  "riskdata.promotions.promotion[itemNr].promotionDiscountAmount": "string",
  "riskdata.promotions.promotion[itemNr].promotionDiscountCurrency": "string",
  "riskdata.promotions.promotion[itemNr].promotionDiscountPercentage": "string",
  "riskdata.promotions.promotion[itemNr].promotionName": "string",
  "riskdata.riskProfileReference": "string",
  "riskdata.skipRisk": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|riskdata.[customFieldName]|string|false|none|The data for your custom risk field. For more information, refer to [Create custom risk fields](https://docs.adyen.com/risk-management/configure-custom-risk-rules#step-1-create-custom-risk-fields).|
|riskdata.basket.item[itemNr].amountPerItem|string|false|none|The price of item in the basket, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|riskdata.basket.item[itemNr].brand|string|false|none|Brand of the item.|
|riskdata.basket.item[itemNr].category|string|false|none|Category of the item.|
|riskdata.basket.item[itemNr].color|string|false|none|Color of the item.|
|riskdata.basket.item[itemNr].currency|string|false|none|The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).|
|riskdata.basket.item[itemNr].itemID|string|false|none|ID of the item.|
|riskdata.basket.item[itemNr].manufacturer|string|false|none|Manufacturer of the item.|
|riskdata.basket.item[itemNr].productTitle|string|false|none|A text description of the product the invoice line refers to.|
|riskdata.basket.item[itemNr].quantity|string|false|none|Quantity of the item purchased.|
|riskdata.basket.item[itemNr].receiverEmail|string|false|none|Email associated with the given product in the basket (usually in electronic gift cards).|
|riskdata.basket.item[itemNr].size|string|false|none|Size of the item.|
|riskdata.basket.item[itemNr].sku|string|false|none|[Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit).|
|riskdata.basket.item[itemNr].upc|string|false|none|[Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code).|
|riskdata.promotions.promotion[itemNr].promotionCode|string|false|none|Code of the promotion.|
|riskdata.promotions.promotion[itemNr].promotionDiscountAmount|string|false|none|The discount amount of the promotion, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|riskdata.promotions.promotion[itemNr].promotionDiscountCurrency|string|false|none|The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).|
|riskdata.promotions.promotion[itemNr].promotionDiscountPercentage|string|false|none|Promotion's percentage discount. It is represented in percentage value and there is no need to include the '%' sign.<br><br>e.g. for a promotion discount of 30%, the value of the field should be 30.|
|riskdata.promotions.promotion[itemNr].promotionName|string|false|none|Name of the promotion.|
|riskdata.riskProfileReference|string|false|none|Reference number of the risk profile that you want to apply to the payment. If not provided or left blank, the merchant-level account's default risk profile will be applied to the payment. For more information, see [dynamically assign a risk profile to a payment](https://docs.adyen.com/risk-management/create-and-use-risk-profiles#dynamically-assign-a-risk-profile-to-a-payment).|
|riskdata.skipRisk|string|false|none|If this parameter is provided with the value **true**, risk checks for the payment request are skipped and the transaction will not get a risk score.|

<h2 id="tocS_AdditionalDataRiskStandalone">AdditionalDataRiskStandalone</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatariskstandalone"></a>
<a id="schema_AdditionalDataRiskStandalone"></a>
<a id="tocSadditionaldatariskstandalone"></a>
<a id="tocsadditionaldatariskstandalone"></a>

```json
{
  "PayPal.CountryCode": "string",
  "PayPal.EmailId": "string",
  "PayPal.FirstName": "string",
  "PayPal.LastName": "string",
  "PayPal.PayerId": "string",
  "PayPal.Phone": "string",
  "PayPal.ProtectionEligibility": "string",
  "PayPal.TransactionId": "string",
  "avsResultRaw": "string",
  "bin": "string",
  "cvcResultRaw": "string",
  "riskToken": "string",
  "threeDAuthenticated": "string",
  "threeDOffered": "string",
  "tokenDataType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayPal.CountryCode|string|false|none|Shopper's country of residence in the form of ISO standard 3166 2-character country codes.|
|PayPal.EmailId|string|false|none|Shopper's email.|
|PayPal.FirstName|string|false|none|Shopper's first name.|
|PayPal.LastName|string|false|none|Shopper's last name.|
|PayPal.PayerId|string|false|none|Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters.|
|PayPal.Phone|string|false|none|Shopper's phone number.|
|PayPal.ProtectionEligibility|string|false|none|Allowed values:<br>* **Eligible** — Merchant is protected by PayPal's Seller Protection Policy for Unauthorized Payments and Item Not Received.<br><br>* **PartiallyEligible** — Merchant is protected by PayPal's Seller Protection Policy for Item Not Received.<br><br>* **Ineligible** — Merchant is not protected under the Seller Protection Policy.|
|PayPal.TransactionId|string|false|none|Unique transaction ID of the payment.|
|avsResultRaw|string|false|none|Raw AVS result received from the acquirer, where available. Example: D|
|bin|string|false|none|The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](https://docs.adyen.com/online-payments/tokenization).|
|cvcResultRaw|string|false|none|Raw CVC result received from the acquirer, where available. Example: 1|
|riskToken|string|false|none|Unique identifier or token for the shopper's card details.|
|threeDAuthenticated|string|false|none|A Boolean value indicating whether 3DS authentication was completed on this payment. Example: true|
|threeDOffered|string|false|none|A Boolean value indicating whether 3DS was offered for this payment. Example: true|
|tokenDataType|string|false|none|Required for PayPal payments only. The only supported value is: **paypal**.|

<h2 id="tocS_AdditionalDataSubMerchant">AdditionalDataSubMerchant</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatasubmerchant"></a>
<a id="schema_AdditionalDataSubMerchant"></a>
<a id="tocSadditionaldatasubmerchant"></a>
<a id="tocsadditionaldatasubmerchant"></a>

```json
{
  "subMerchant.numberOfSubSellers": "string",
  "subMerchant.subSeller[subSellerNr].city": "string",
  "subMerchant.subSeller[subSellerNr].country": "string",
  "subMerchant.subSeller[subSellerNr].email": "string",
  "subMerchant.subSeller[subSellerNr].id": "string",
  "subMerchant.subSeller[subSellerNr].mcc": "string",
  "subMerchant.subSeller[subSellerNr].name": "string",
  "subMerchant.subSeller[subSellerNr].phoneNumber": "string",
  "subMerchant.subSeller[subSellerNr].postalCode": "string",
  "subMerchant.subSeller[subSellerNr].state": "string",
  "subMerchant.subSeller[subSellerNr].street": "string",
  "subMerchant.subSeller[subSellerNr].taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subMerchant.numberOfSubSellers|string|false|none|Required for transactions performed by registered payment facilitators. Indicates the number of sub-merchants contained in the request. For example, **3**.|
|subMerchant.subSeller[subSellerNr].city|string|false|none|Required for transactions performed by registered payment facilitators. The city of the sub-merchant's address.<br>* Format: Alphanumeric<br>* Maximum length: 13 characters|
|subMerchant.subSeller[subSellerNr].country|string|false|none|Required for transactions performed by registered payment facilitators. The three-letter country code of the sub-merchant's address. For example, **BRA** for Brazil. <br>* Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)<br>* Fixed length: 3 characters|
|subMerchant.subSeller[subSellerNr].email|string|false|none|Required for transactions performed by registered payment facilitators. The email address of the sub-merchant.<br>* Format: Alphanumeric<br>* Maximum length: 40 characters|
|subMerchant.subSeller[subSellerNr].id|string|false|none|Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant. <br>* Format: Alphanumeric<br>* Maximum length: 15 characters|
|subMerchant.subSeller[subSellerNr].mcc|string|false|none|Required for transactions performed by registered payment facilitators. The sub-merchant's 4-digit Merchant Category Code (MCC). <br>* Format: Numeric<br>* Fixed length: 4 digits|
|subMerchant.subSeller[subSellerNr].name|string|false|none|Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement  that will appear in the card statement.<br>Exception: for acquirers in Brazil, this value does not overwrite the shopper statement.<br>* Format: Alphanumeric<br>* Maximum length: 22 characters|
|subMerchant.subSeller[subSellerNr].phoneNumber|string|false|none|Required for transactions performed by registered payment facilitators. The phone number of the sub-merchant.<br>* Format: Alphanumeric and special characters<br>* Maximum length: 20 characters|
|subMerchant.subSeller[subSellerNr].postalCode|string|false|none|Required for transactions performed by registered payment facilitators. The postal code of the sub-merchant's address, without dashes.<br>* Format: Numeric<br>* Fixed length: 8 digits|
|subMerchant.subSeller[subSellerNr].state|string|false|none|Required for transactions performed by registered payment facilitators. The state code of the sub-merchant's address, if applicable to the country.<br>* Format: Alphanumeric<br>* Maximum length: 2 characters|
|subMerchant.subSeller[subSellerNr].street|string|false|none|Required for transactions performed by registered payment facilitators. The street name and house number of the sub-merchant's address.<br>* Format: Alphanumeric<br>* Maximum length: 60 characters|
|subMerchant.subSeller[subSellerNr].taxId|string|false|none|Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant.<br>* Format: Numeric<br>* Fixed length: 11 digits for the CPF or 14 digits for the CNPJ|

<h2 id="tocS_AdditionalDataTemporaryServices">AdditionalDataTemporaryServices</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatatemporaryservices"></a>
<a id="schema_AdditionalDataTemporaryServices"></a>
<a id="tocSadditionaldatatemporaryservices"></a>
<a id="tocsadditionaldatatemporaryservices"></a>

```json
{
  "enhancedSchemeData.customerReference": "string",
  "enhancedSchemeData.employeeName": "string",
  "enhancedSchemeData.jobDescription": "string",
  "enhancedSchemeData.regularHoursRate": "string",
  "enhancedSchemeData.regularHoursWorked": "string",
  "enhancedSchemeData.requestName": "string",
  "enhancedSchemeData.tempStartDate": "string",
  "enhancedSchemeData.tempWeekEnding": "string",
  "enhancedSchemeData.totalTaxAmount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enhancedSchemeData.customerReference|string|false|none|The customer code, if supplied by a customer.<br>* Encoding: ASCII<br>* maxLength: 25|
|enhancedSchemeData.employeeName|string|false|none|The name or ID of the person working in a temporary capacity.<br>* maxLength: 40.  <br>* Must not be all spaces. <br>*Must not be all zeros.|
|enhancedSchemeData.jobDescription|string|false|none|The job description of the person working in a temporary capacity.<br>* maxLength: 40 <br>* Must not be all spaces. <br>*Must not be all zeros.|
|enhancedSchemeData.regularHoursRate|string|false|none|The amount paid for regular hours worked, [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* maxLength: 7<br>* Must not be empty<br>* Can be all zeros|
|enhancedSchemeData.regularHoursWorked|string|false|none|The hours worked.<br>* maxLength: 7<br>* Must not be empty<br>* Can be all zeros|
|enhancedSchemeData.requestName|string|false|none|The name of the person requesting temporary services.<br>* maxLength: 40<br>* Must not be all zeros<br>* Must not be all spaces|
|enhancedSchemeData.tempStartDate|string|false|none|The billing period start date.<br>* Format: ddMMyy<br>* maxLength: 6|
|enhancedSchemeData.tempWeekEnding|string|false|none|The billing period end date.<br>* Format: ddMMyy<br>* maxLength: 6|
|enhancedSchemeData.totalTaxAmount|string|false|none|The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes). For example, 2000 means USD 20.00<br>* maxLength: 12|

<h2 id="tocS_AdditionalDataWallets">AdditionalDataWallets</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatawallets"></a>
<a id="schema_AdditionalDataWallets"></a>
<a id="tocSadditionaldatawallets"></a>
<a id="tocsadditionaldatawallets"></a>

```json
{
  "androidpay.token": "string",
  "masterpass.transactionId": "string",
  "payment.token": "string",
  "paywithgoogle.token": "string",
  "samsungpay.token": "string",
  "visacheckout.callId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidpay.token|string|false|none|The Android Pay token retrieved from the SDK.|
|masterpass.transactionId|string|false|none|The Mastercard Masterpass Transaction ID retrieved from the SDK.|
|payment.token|string|false|none|The Apple Pay token retrieved from the SDK.|
|paywithgoogle.token|string|false|none|The Google Pay token retrieved from the SDK.|
|samsungpay.token|string|false|none|The Samsung Pay token retrieved from the SDK.|
|visacheckout.callId|string|false|none|The Visa Checkout Call ID retrieved from the SDK.|

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

<h2 id="tocS_AdjustAuthorisationRequest">AdjustAuthorisationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadjustauthorisationrequest"></a>
<a id="schema_AdjustAuthorisationRequest"></a>
<a id="tocSadjustauthorisationrequest"></a>
<a id="tocsadjustauthorisationrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "merchantAccount": "string",
  "modificationAmount": {
    "currency": "str",
    "value": 0
  },
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "originalMerchantReference": "string",
  "originalReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|modificationAmount|[Amount](#schemaamount)|true|none|The currency and value of the new total amount in minor units. For example, to increase the amount, the value is the sum of the pre-authorized amount and the additional amount.|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|originalMerchantReference|string|false|none|The original merchant reference to cancel.|
|originalReference|string|true|none|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|tenderReference|string|false|none|The transaction reference provided by the PED. For point-of-sale integrations only.|
|uniqueTerminalId|string|false|none|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "str",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.|
|value|integer(int64)|true|none|The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).|

<h2 id="tocS_ApplicationInfo">ApplicationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationinfo"></a>
<a id="schema_ApplicationInfo"></a>
<a id="tocSapplicationinfo"></a>
<a id="tocsapplicationinfo"></a>

```json
{
  "adyenLibrary": {
    "name": "string",
    "version": "string"
  },
  "adyenPaymentSource": {
    "name": "string",
    "version": "string"
  },
  "externalPlatform": {
    "integrator": "string",
    "name": "string",
    "version": "string"
  },
  "merchantApplication": {
    "name": "string",
    "version": "string"
  },
  "merchantDevice": {
    "os": "string",
    "osVersion": "string",
    "reference": "string"
  },
  "shopperInteractionDevice": {
    "locale": "string",
    "os": "string",
    "osVersion": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adyenLibrary|[CommonField](#schemacommonfield)|false|none|Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API. For example, Magento plugin, Java API library, etc.|
|adyenPaymentSource|[CommonField](#schemacommonfield)|false|none|Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc.|
|externalPlatform|[ExternalPlatform](#schemaexternalplatform)|false|none|Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc.|
|merchantApplication|[CommonField](#schemacommonfield)|false|none|Merchant developed software, such as cashier application, used to interact with the Adyen API.|
|merchantDevice|[MerchantDevice](#schemamerchantdevice)|false|none|Merchant device information.|
|shopperInteractionDevice|[ShopperInteractionDevice](#schemashopperinteractiondevice)|false|none|Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment requests.|

<h2 id="tocS_AuthenticationResultRequest">AuthenticationResultRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationresultrequest"></a>
<a id="schema_AuthenticationResultRequest"></a>
<a id="tocSauthenticationresultrequest"></a>
<a id="tocsauthenticationresultrequest"></a>

```json
{
  "merchantAccount": "string",
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier, with which the authentication was processed.|
|pspReference|string|true|none|The pspReference identifier for the transaction.|

<h2 id="tocS_AuthenticationResultResponse">AuthenticationResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationresultresponse"></a>
<a id="schema_AuthenticationResultResponse"></a>
<a id="tocSauthenticationresultresponse"></a>
<a id="tocsauthenticationresultresponse"></a>

```json
{
  "threeDS1Result": {
    "cavv": "string",
    "cavvAlgorithm": "string",
    "eci": "string",
    "threeDAuthenticatedResponse": "string",
    "threeDOfferedResponse": "string",
    "xid": "string"
  },
  "threeDS2Result": {
    "authenticationValue": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "dsTransID": "string",
    "eci": "string",
    "exemptionIndicator": "lowValue",
    "messageVersion": "string",
    "riskScore": "string",
    "threeDSRequestorChallengeInd": "01",
    "threeDSServerTransID": "string",
    "timestamp": "string",
    "transStatus": "string",
    "transStatusReason": "string",
    "whiteListStatus": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threeDS1Result|[ThreeDS1Result](#schemathreeds1result)|false|none|The result of the 3D Secure authentication.|
|threeDS2Result|[ThreeDS2Result](#schemathreeds2result)|false|none|The result of the 3D Secure 2 authentication.|

<h2 id="tocS_BankAccount">BankAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankaccount"></a>
<a id="schema_BankAccount"></a>
<a id="tocSbankaccount"></a>
<a id="tocsbankaccount"></a>

```json
{
  "bankAccountNumber": "string",
  "bankCity": "string",
  "bankLocationId": "string",
  "bankName": "string",
  "bic": "string",
  "countryCode": "string",
  "iban": "string",
  "ownerName": "string",
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccountNumber|string|false|none|The bank account number (without separators).|
|bankCity|string|false|none|The bank city.|
|bankLocationId|string|false|none|The location id of the bank. The field value is `nil` in most cases.|
|bankName|string|false|none|The name of the bank.|
|bic|string|false|none|The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases.|
|countryCode|string|false|none|Country code where the bank is located.<br><br>A valid value is an ISO two-character country code (e.g. 'NL').|
|iban|string|false|none|The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).|
|ownerName|string|false|none|The name of the bank account holder.<br>If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:<br>* χ12 is converted to ch12.<br>* üA is converted to euA.<br>* Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.<br>After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:<br>* John17 - allowed.<br>* J17 - allowed.<br>* 171 - not allowed.<br>* John-7 - allowed.<br>> If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.|
|taxId|string|false|none|The bank account holder's tax ID.|

<h2 id="tocS_BrowserInfo">BrowserInfo</h2>
<!-- backwards compatibility -->
<a id="schemabrowserinfo"></a>
<a id="schema_BrowserInfo"></a>
<a id="tocSbrowserinfo"></a>
<a id="tocsbrowserinfo"></a>

```json
{
  "acceptHeader": "string",
  "colorDepth": 0,
  "javaEnabled": true,
  "javaScriptEnabled": true,
  "language": "string",
  "screenHeight": 0,
  "screenWidth": 0,
  "timeZoneOffset": 0,
  "userAgent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptHeader|string|true|none|The accept header value of the shopper's browser.|
|colorDepth|integer(int32)|true|none|The color depth of the shopper's browser in bits per pixel. This should be obtained by using the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 30, 32 or 48 bit color depth.|
|javaEnabled|boolean|true|none|Boolean value indicating if the shopper's browser is able to execute Java.|
|javaScriptEnabled|boolean|false|none|Boolean value indicating if the shopper's browser is able to execute JavaScript. A default 'true' value is assumed if the field is not present.|
|language|string|true|none|The `navigator.language` value of the shopper's browser (as defined in IETF BCP 47).|
|screenHeight|integer(int32)|true|none|The total height of the shopper's device screen in pixels.|
|screenWidth|integer(int32)|true|none|The total width of the shopper's device screen in pixels.|
|timeZoneOffset|integer(int32)|true|none|Time difference between UTC time and the shopper's browser local time, in minutes.|
|userAgent|string|true|none|The user agent value of the shopper's browser.|

<h2 id="tocS_CancelOrRefundRequest">CancelOrRefundRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelorrefundrequest"></a>
<a id="schema_CancelOrRefundRequest"></a>
<a id="tocScancelorrefundrequest"></a>
<a id="tocscancelorrefundrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "merchantAccount": "string",
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "originalMerchantReference": "string",
  "originalReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string",
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|originalMerchantReference|string|false|none|The original merchant reference to cancel.|
|originalReference|string|true|none|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|tenderReference|string|false|none|The transaction reference provided by the PED. For point-of-sale integrations only.|
|uniqueTerminalId|string|false|none|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

<h2 id="tocS_CancelRequest">CancelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelrequest"></a>
<a id="schema_CancelRequest"></a>
<a id="tocScancelrequest"></a>
<a id="tocscancelrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "merchantAccount": "string",
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "originalMerchantReference": "string",
  "originalReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|originalMerchantReference|string|false|none|The original merchant reference to cancel.|
|originalReference|string|true|none|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|tenderReference|string|false|none|The transaction reference provided by the PED. For point-of-sale integrations only.|
|uniqueTerminalId|string|false|none|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

<h2 id="tocS_CaptureRequest">CaptureRequest</h2>
<!-- backwards compatibility -->
<a id="schemacapturerequest"></a>
<a id="schema_CaptureRequest"></a>
<a id="tocScapturerequest"></a>
<a id="tocscapturerequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "merchantAccount": "string",
  "modificationAmount": {
    "currency": "str",
    "value": 0
  },
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "originalMerchantReference": "string",
  "originalReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|modificationAmount|[Amount](#schemaamount)|true|none|The amount that needs to be captured. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|originalMerchantReference|string|false|none|The original merchant reference to cancel.|
|originalReference|string|true|none|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|tenderReference|string|false|none|The transaction reference provided by the PED. For point-of-sale integrations only.|
|uniqueTerminalId|string|false|none|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "cvc": "string",
  "expiryMonth": "st",
  "expiryYear": "stri",
  "holderName": "string",
  "issueNumber": "st",
  "number": "string",
  "startMonth": "st",
  "startYear": "stri"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvc|string|false|none|The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is known also as:<br>* CVV2/CVC2 – length: 3 digits<br>* CID – length: 4 digits<br>> If you are using [Client-Side Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC code is present in the encrypted data. You must never post the card details to the server.<br>> This field must be always present in a [one-click payment request](https://docs.adyen.com/classic-integration/recurring-payments).<br>> When this value is returned in a response, it is always empty because it is not stored.|
|expiryMonth|string|false|none|The card expiry month.<br>Format: 2 digits, zero-padded for single digits. For example:<br>* 03 = March<br>* 11 = November|
|expiryYear|string|false|none|The card expiry year.<br>Format: 4 digits. For example: 2020|
|holderName|string|false|none|The name of the cardholder, as printed on the card.|
|issueNumber|string|false|none|The issue number of the card (for some UK debit cards only).|
|number|string|false|none|The card number (4-19 characters). Do not use any separators.<br>When this value is returned in a response, only the last 4 digits of the card number are returned.|
|startMonth|string|false|none|The month component of the start date (for some UK debit cards only).|
|startYear|string|false|none|The year component of the start date (for some UK debit cards only).|

<h2 id="tocS_CommonField">CommonField</h2>
<!-- backwards compatibility -->
<a id="schemacommonfield"></a>
<a id="schema_CommonField"></a>
<a id="tocScommonfield"></a>
<a id="tocscommonfield"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the field. For example, Name of External Platform.|
|version|string|false|none|Version of the field. For example, Version of External Platform.|

<h2 id="tocS_DeviceRenderOptions">DeviceRenderOptions</h2>
<!-- backwards compatibility -->
<a id="schemadevicerenderoptions"></a>
<a id="schema_DeviceRenderOptions"></a>
<a id="tocSdevicerenderoptions"></a>
<a id="tocsdevicerenderoptions"></a>

```json
{
  "sdkInterface": "both",
  "sdkUiType": [
    "multiSelect"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkInterface|string|false|none|Supported SDK interface types.<br>Allowed values:<br>* native<br>* html<br>* both|
|sdkUiType|[string]|false|none|UI types supported for displaying specific challenges.<br>Allowed values:<br>* text<br>* singleSelect<br>* outOfBand<br>* otherHtml<br>* multiSelect|

#### Enumerated Values

|Property|Value|
|---|---|
|sdkInterface|native|
|sdkInterface|html|
|sdkInterface|both|
|sdkUiType|multiSelect|
|sdkUiType|otherHtml|
|sdkUiType|outOfBand|
|sdkUiType|singleSelect|
|sdkUiType|text|

<h2 id="tocS_DonationRequest">DonationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadonationrequest"></a>
<a id="schema_DonationRequest"></a>
<a id="tocSdonationrequest"></a>
<a id="tocsdonationrequest"></a>

```json
{
  "donationAccount": "string",
  "merchantAccount": "string",
  "modificationAmount": {
    "currency": "str",
    "value": 0
  },
  "originalReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|donationAccount|string|true|none|The Adyen account name of the charity.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|modificationAmount|[Amount](#schemaamount)|true|none|The amount to be donated.The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|originalReference|string|false|none|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|

<h2 id="tocS_ExternalPlatform">ExternalPlatform</h2>
<!-- backwards compatibility -->
<a id="schemaexternalplatform"></a>
<a id="schema_ExternalPlatform"></a>
<a id="tocSexternalplatform"></a>
<a id="tocsexternalplatform"></a>

```json
{
  "integrator": "string",
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrator|string|false|none|External platform integrator.|
|name|string|false|none|Name of the field. For example, Name of External Platform.|
|version|string|false|none|Version of the field. For example, Version of External Platform.|

<h2 id="tocS_ForexQuote">ForexQuote</h2>
<!-- backwards compatibility -->
<a id="schemaforexquote"></a>
<a id="schema_ForexQuote"></a>
<a id="tocSforexquote"></a>
<a id="tocsforexquote"></a>

```json
{
  "account": "string",
  "accountType": "string",
  "baseAmount": {
    "currency": "str",
    "value": 0
  },
  "basePoints": 0,
  "buy": {
    "currency": "str",
    "value": 0
  },
  "interbank": {
    "currency": "str",
    "value": 0
  },
  "reference": "string",
  "sell": {
    "currency": "str",
    "value": 0
  },
  "signature": "string",
  "source": "string",
  "type": "string",
  "validTill": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The account name.|
|accountType|string|false|none|The account type.|
|baseAmount|[Amount](#schemaamount)|false|none|The base amount.|
|basePoints|integer(int32)|true|none|The base points.|
|buy|[Amount](#schemaamount)|false|none|The buy rate.|
|interbank|[Amount](#schemaamount)|false|none|The interbank amount.|
|reference|string|false|none|The reference assigned to the forex quote request.|
|sell|[Amount](#schemaamount)|false|none|The sell rate.|
|signature|string|false|none|The signature to validate the integrity.|
|source|string|false|none|The source of the forex quote.|
|type|string|false|none|The type of forex.|
|validTill|string(date-time)|true|none|The date until which the forex quote is valid.|

<h2 id="tocS_FraudCheckResult">FraudCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemafraudcheckresult"></a>
<a id="schema_FraudCheckResult"></a>
<a id="tocSfraudcheckresult"></a>
<a id="tocsfraudcheckresult"></a>

```json
{
  "accountScore": 0,
  "checkId": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountScore|integer(int32)|true|none|The fraud score generated by the risk check.|
|checkId|integer(int32)|true|none|The ID of the risk check.|
|name|string|true|none|The name of the risk check.|

<h2 id="tocS_FraudCheckResultWrapper">FraudCheckResultWrapper</h2>
<!-- backwards compatibility -->
<a id="schemafraudcheckresultwrapper"></a>
<a id="schema_FraudCheckResultWrapper"></a>
<a id="tocSfraudcheckresultwrapper"></a>
<a id="tocsfraudcheckresultwrapper"></a>

```json
{
  "FraudCheckResult": {
    "accountScore": 0,
    "checkId": 0,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FraudCheckResult|[FraudCheckResult](#schemafraudcheckresult)|false|none|none|

<h2 id="tocS_FraudResult">FraudResult</h2>
<!-- backwards compatibility -->
<a id="schemafraudresult"></a>
<a id="schema_FraudResult"></a>
<a id="tocSfraudresult"></a>
<a id="tocsfraudresult"></a>

```json
{
  "accountScore": 0,
  "results": [
    {
      "FraudCheckResult": {
        "accountScore": 0,
        "checkId": 0,
        "name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountScore|integer(int32)|true|none|The total fraud score generated by the risk checks.|
|results|[[FraudCheckResultWrapper](#schemafraudcheckresultwrapper)]|false|none|The result of the individual risk checks.|

<h2 id="tocS_FundDestination">FundDestination</h2>
<!-- backwards compatibility -->
<a id="schemafunddestination"></a>
<a id="schema_FundDestination"></a>
<a id="tocSfunddestination"></a>
<a id="tocsfunddestination"></a>

```json
{
  "IBAN": "string",
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "card": {
    "cvc": "string",
    "expiryMonth": "st",
    "expiryYear": "stri",
    "holderName": "string",
    "issueNumber": "st",
    "number": "string",
    "startMonth": "st",
    "startYear": "stri"
  },
  "selectedRecurringDetailReference": "string",
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "subMerchant": {
    "city": "string",
    "country": "string",
    "mcc": "string",
    "name": "string",
    "taxId": "string"
  },
  "telephoneNumber": "string",
  "walletPurpose": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IBAN|string|false|none|Bank Account Number of the recipient|
|additionalData|object|false|none|a map of name/value pairs for passing in additional/industry-specific data|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.|
|card|[Card](#schemacard)|false|none|Credit card data.<br><br>Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.|
|selectedRecurringDetailReference|string|false|none|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|shopperEmail|string|false|none|the email address of the person|
|shopperName|[Name](#schemaname)|false|none|the name of the person|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|subMerchant|[SubMerchant](#schemasubmerchant)|false|none|Required for Back-to-Back/ purchase driven load in Wallet transactions.<br>Contains the final merchant who will be receiving the money, also known as subMerchant, information.|
|telephoneNumber|string|false|none|the telephone number of the person|
|walletPurpose|string|false|none|The purpose of a digital wallet transaction.|

<h2 id="tocS_FundSource">FundSource</h2>
<!-- backwards compatibility -->
<a id="schemafundsource"></a>
<a id="schema_FundSource"></a>
<a id="tocSfundsource"></a>
<a id="tocsfundsource"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "card": {
    "cvc": "string",
    "expiryMonth": "st",
    "expiryYear": "stri",
    "holderName": "string",
    "issueNumber": "st",
    "number": "string",
    "startMonth": "st",
    "startYear": "stri"
  },
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "telephoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|A map of name-value pairs for passing additional or industry-specific data.|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.|
|card|[Card](#schemacard)|false|none|Credit card data.<br><br>Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.|
|shopperEmail|string|false|none|Email address of the person.|
|shopperName|[Name](#schemaname)|false|none|Name of the person.|
|telephoneNumber|string|false|none|Phone number of the person|

<h2 id="tocS_Installments">Installments</h2>
<!-- backwards compatibility -->
<a id="schemainstallments"></a>
<a id="schema_Installments"></a>
<a id="tocSinstallments"></a>
<a id="tocsinstallments"></a>

```json
{
  "extra": 0,
  "plan": "bonus",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extra|integer(int32)|false|none|Defines the bonus percentage, refund percentage or if the transaction is Buy now Pay later.<br>Used for [card installments in Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico)<br>|
|plan|string|false|none|The installment plan, used for [card installments in Japan](https://docs.adyen.com/payment-methods/cards/credit-card-installments#make-a-payment-japan).<br>and [Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico).<br>By default, this is set to **regular**.<br>|
|value|integer(int32)|true|none|Defines the number of installments.<br>Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary.<br>This value can be zero for Installments processed in Mexico.|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|bonus|
|plan|buynow_paylater|
|plan|interes_refund_prctg|
|plan|interest_bonus|
|plan|nointeres_refund_prctg|
|plan|nointerest_bonus|
|plan|refund_prctg|
|plan|regular|
|plan|revolving|
|plan|with_interest|

<h2 id="tocS_Mandate">Mandate</h2>
<!-- backwards compatibility -->
<a id="schemamandate"></a>
<a id="schema_Mandate"></a>
<a id="tocSmandate"></a>
<a id="tocsmandate"></a>

```json
{
  "amount": "string",
  "amountRule": "max",
  "billingAttemptsRule": "on",
  "billingDay": "string",
  "count": "string",
  "endsAt": "string",
  "frequency": "adhoc",
  "remarks": "string",
  "startsAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|The billing amount (in minor units) of the recurring transactions.|
|amountRule|string|false|none|The limitation rule of the billing amount.<br><br>Possible values:<br> * **max**: The transaction amount can not exceed the `amount`.<br><br> * **exact**: The transaction amount should be the same as the `amount`.<br><br>|
|billingAttemptsRule|string|false|none|The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.<br><br>Possible values:<br><br> * **on**: On a specific date.<br><br> * **before**:  Before and on a specific date.<br><br> * **after**: On and after a specific date.<br><br>|
|billingDay|string|false|none|The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.<br><br>Possible values: 1-31 based on the `frequency`.|
|count|string|false|none|The number of transactions that can be performed within the given frequency.|
|endsAt|string|true|none|End date of the billing plan, in YYYY-MM-DD format.|
|frequency|string|true|none|The frequency with which a shopper should be charged.<br><br>Possible values: **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**.|
|remarks|string|false|none|The message shown by UPI to the shopper on the approval screen.|
|startsAt|string|false|none|Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date.|

#### Enumerated Values

|Property|Value|
|---|---|
|amountRule|max|
|amountRule|exact|
|billingAttemptsRule|on|
|billingAttemptsRule|before|
|billingAttemptsRule|after|
|frequency|adhoc|
|frequency|daily|
|frequency|weekly|
|frequency|biWeekly|
|frequency|monthly|
|frequency|quarterly|
|frequency|halfYearly|
|frequency|yearly|

<h2 id="tocS_MerchantDevice">MerchantDevice</h2>
<!-- backwards compatibility -->
<a id="schemamerchantdevice"></a>
<a id="schema_MerchantDevice"></a>
<a id="tocSmerchantdevice"></a>
<a id="tocsmerchantdevice"></a>

```json
{
  "os": "string",
  "osVersion": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|os|string|false|none|Operating system running on the merchant device.|
|osVersion|string|false|none|Version of the operating system on the merchant device.|
|reference|string|false|none|Merchant device reference.|

<h2 id="tocS_MerchantRiskIndicator">MerchantRiskIndicator</h2>
<!-- backwards compatibility -->
<a id="schemamerchantriskindicator"></a>
<a id="schema_MerchantRiskIndicator"></a>
<a id="tocSmerchantriskindicator"></a>
<a id="tocsmerchantriskindicator"></a>

```json
{
  "addressMatch": true,
  "deliveryAddressIndicator": "shipToBillingAddress",
  "deliveryEmail": "string",
  "deliveryEmailAddress": "string",
  "deliveryTimeframe": "electronicDelivery",
  "giftCardAmount": {
    "currency": "str",
    "value": 0
  },
  "giftCardCount": 0,
  "giftCardCurr": "string",
  "preOrderDate": "1970-01-01T00:00:00Z",
  "preOrderPurchase": true,
  "preOrderPurchaseInd": "string",
  "reorderItems": true,
  "reorderItemsInd": "string",
  "shipIndicator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressMatch|boolean|false|none|Whether the chosen delivery address is identical to the billing address.|
|deliveryAddressIndicator|string|false|none|Indicator regarding the delivery address.<br>Allowed values:<br>* `shipToBillingAddress`<br>* `shipToVerifiedAddress`<br>* `shipToNewAddress`<br>* `shipToStore`<br>* `digitalGoods`<br>* `goodsNotShipped`<br>* `other`|
|deliveryEmail|string|false|none|**Deprecated.** The delivery email address (for digital goods).|
|deliveryEmailAddress|string|false|none|For Electronic delivery, the email address to which the merchandise was delivered. Maximum length: 254 characters.|
|deliveryTimeframe|string|false|none|The estimated delivery time for the shopper to receive the goods.<br>Allowed values:<br>* `electronicDelivery`<br>* `sameDayShipping`<br>* `overnightShipping`<br>* `twoOrMoreDaysShipping`|
|giftCardAmount|[Amount](#schemaamount)|false|none|For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s).|
|giftCardCount|integer(int32)|false|none|For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.|
|giftCardCurr|string|false|none|For prepaid or gift card purchase, [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) three-digit currency code of the gift card, other than those listed in Table A.5 of the EMVCo 3D Secure Protocol and Core Functions Specification.|
|preOrderDate|string(date-time)|false|none|For pre-order purchases, the expected date this product will be available to the shopper.|
|preOrderPurchase|boolean|false|none|Indicator for whether this transaction is for pre-ordering a product.|
|preOrderPurchaseInd|string|false|none|Indicates whether Cardholder is placing an order for merchandise with a future availability or release date.|
|reorderItems|boolean|false|none|Indicator for whether the shopper has already purchased the same items in the past.|
|reorderItemsInd|string|false|none|Indicates whether the cardholder is reordering previously purchased merchandise.|
|shipIndicator|string|false|none|Indicates shipping method chosen for the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|deliveryAddressIndicator|shipToBillingAddress|
|deliveryAddressIndicator|shipToVerifiedAddress|
|deliveryAddressIndicator|shipToNewAddress|
|deliveryAddressIndicator|shipToStore|
|deliveryAddressIndicator|digitalGoods|
|deliveryAddressIndicator|goodsNotShipped|
|deliveryAddressIndicator|other|
|deliveryTimeframe|electronicDelivery|
|deliveryTimeframe|sameDayShipping|
|deliveryTimeframe|overnightShipping|
|deliveryTimeframe|twoOrMoreDaysShipping|

<h2 id="tocS_ModificationResult">ModificationResult</h2>
<!-- backwards compatibility -->
<a id="schemamodificationresult"></a>
<a id="schema_ModificationResult"></a>
<a id="tocSmodificationresult"></a>
<a id="tocsmodificationresult"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "response": "[capture-received]"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be returned in a particular modification response.|
|pspReference|string|true|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|response|string|true|none|Indicates if the modification request has been received for processing.|

#### Enumerated Values

|Property|Value|
|---|---|
|response|[capture-received]|
|response|[cancel-received]|
|response|[refund-received]|
|response|[cancelOrRefund-received]|
|response|[adjustAuthorisation-received]|
|response|[donation-received]|
|response|[technical-cancel-received]|
|response|[voidPendingRefund-received]|
|response|Authorised|
|response|Refused|
|response|Error|

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

<h2 id="tocS_PaymentRequest">PaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequest"></a>
<a id="schema_PaymentRequest"></a>
<a id="tocSpaymentrequest"></a>
<a id="tocspaymentrequest"></a>

```json
{
  "accountInfo": {
    "accountAgeIndicator": "notApplicable",
    "accountChangeDate": "1970-01-01T00:00:00Z",
    "accountChangeIndicator": "thisTransaction",
    "accountCreationDate": "1970-01-01T00:00:00Z",
    "accountType": "notApplicable",
    "addCardAttemptsDay": 0,
    "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
    "deliveryAddressUsageIndicator": "thisTransaction",
    "homePhone": "string",
    "mobilePhone": "string",
    "passwordChangeDate": "1970-01-01T00:00:00Z",
    "passwordChangeIndicator": "notApplicable",
    "pastTransactionsDay": 0,
    "pastTransactionsYear": 0,
    "paymentAccountAge": "1970-01-01T00:00:00Z",
    "paymentAccountIndicator": "notApplicable",
    "purchasesLast6Months": 0,
    "suspiciousActivity": true,
    "workPhone": "string"
  },
  "additionalAmount": {
    "currency": "str",
    "value": 0
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "bankAccount": {
    "bankAccountNumber": "string",
    "bankCity": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bic": "string",
    "countryCode": "string",
    "iban": "string",
    "ownerName": "string",
    "taxId": "string"
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "browserInfo": {
    "acceptHeader": "string",
    "colorDepth": 0,
    "javaEnabled": true,
    "javaScriptEnabled": true,
    "language": "string",
    "screenHeight": 0,
    "screenWidth": 0,
    "timeZoneOffset": 0,
    "userAgent": "string"
  },
  "captureDelayHours": 0,
  "card": {
    "cvc": "string",
    "expiryMonth": "st",
    "expiryYear": "stri",
    "holderName": "string",
    "issueNumber": "st",
    "number": "string",
    "startMonth": "st",
    "startYear": "stri"
  },
  "dateOfBirth": "1970-01-01",
  "dccQuote": {
    "account": "string",
    "accountType": "string",
    "baseAmount": {
      "currency": "str",
      "value": 0
    },
    "basePoints": 0,
    "buy": {
      "currency": "str",
      "value": 0
    },
    "interbank": {
      "currency": "str",
      "value": 0
    },
    "reference": "string",
    "sell": {
      "currency": "str",
      "value": 0
    },
    "signature": "string",
    "source": "string",
    "type": "string",
    "validTill": "1970-01-01T00:00:00Z"
  },
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "deliveryDate": "1970-01-01T00:00:00Z",
  "deviceFingerprint": "string",
  "entityType": "NaturalPerson",
  "fraudOffset": 0,
  "fundDestination": {
    "IBAN": "string",
    "additionalData": {
      "property1": "string",
      "property2": "string"
    },
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "card": {
      "cvc": "string",
      "expiryMonth": "st",
      "expiryYear": "stri",
      "holderName": "string",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri"
    },
    "selectedRecurringDetailReference": "string",
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "subMerchant": {
      "city": "string",
      "country": "string",
      "mcc": "string",
      "name": "string",
      "taxId": "string"
    },
    "telephoneNumber": "string",
    "walletPurpose": "string"
  },
  "fundSource": {
    "additionalData": {
      "property1": "string",
      "property2": "string"
    },
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "card": {
      "cvc": "string",
      "expiryMonth": "st",
      "expiryYear": "stri",
      "holderName": "string",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "telephoneNumber": "string"
  },
  "fundingSource": "credit",
  "installments": {
    "extra": 0,
    "plan": "bonus",
    "value": 0
  },
  "localizedShopperStatement": {
    "property1": "string",
    "property2": "string"
  },
  "mandate": {
    "amount": "string",
    "amountRule": "max",
    "billingAttemptsRule": "on",
    "billingDay": "string",
    "count": "string",
    "endsAt": "string",
    "frequency": "adhoc",
    "remarks": "string",
    "startsAt": "string"
  },
  "mcc": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "merchantRiskIndicator": {
    "addressMatch": true,
    "deliveryAddressIndicator": "shipToBillingAddress",
    "deliveryEmail": "string",
    "deliveryEmailAddress": "string",
    "deliveryTimeframe": "electronicDelivery",
    "giftCardAmount": {
      "currency": "str",
      "value": 0
    },
    "giftCardCount": 0,
    "giftCardCurr": "string",
    "preOrderDate": "1970-01-01T00:00:00Z",
    "preOrderPurchase": true,
    "preOrderPurchaseInd": "string",
    "reorderItems": true,
    "reorderItemsInd": "string",
    "shipIndicator": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "nationality": "st",
  "orderReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "recurringProcessingModel": "CardOnFile",
  "reference": "string",
  "secureRemoteCommerceCheckoutData": {
    "checkoutPayload": "string",
    "correlationId": "string",
    "cvc": "string",
    "digitalCardId": "string",
    "scheme": "mc",
    "tokenReference": "string"
  },
  "selectedBrand": "string",
  "selectedRecurringDetailReference": "string",
  "sessionId": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "Ecommerce",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "socialSecurityNumber": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string",
  "telephoneNumber": "string",
  "threeDS2RequestData": {
    "acctInfo": {
      "chAccAgeInd": "01",
      "chAccChange": "string",
      "chAccChangeInd": "01",
      "chAccPwChange": "string",
      "chAccPwChangeInd": "01",
      "chAccString": "string",
      "nbPurchaseAccount": "string",
      "paymentAccAge": "string",
      "paymentAccInd": "01",
      "provisionAttemptsDay": "string",
      "shipAddressUsage": "string",
      "shipAddressUsageInd": "01",
      "shipNameIndicator": "01",
      "suspiciousAccActivity": "01",
      "txnActivityDay": "str",
      "txnActivityYear": "str"
    },
    "acctType": "01",
    "acquirerBIN": "string",
    "acquirerMerchantID": "string",
    "addrMatch": "Y",
    "authenticationOnly": false,
    "challengeIndicator": "noPreference",
    "deviceChannel": "string",
    "deviceRenderOptions": {
      "sdkInterface": "both",
      "sdkUiType": [
        "multiSelect"
      ]
    },
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mcc": "string",
    "merchantName": "string",
    "messageVersion": "string",
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "notificationURL": "string",
    "payTokenInd": true,
    "paymentAuthenticationUseCase": "string",
    "purchaseInstalData": "str",
    "recurringExpiry": "string",
    "recurringFrequency": "stri",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": {
      "crv": "string",
      "kty": "string",
      "x": "string",
      "y": "string"
    },
    "sdkMaxTimeout": 60,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string",
    "sdkVersion": "string",
    "threeDSCompInd": "string",
    "threeDSRequestorAuthenticationInd": "string",
    "threeDSRequestorAuthenticationInfo": {
      "threeDSReqAuthData": "string",
      "threeDSReqAuthMethod": "01",
      "threeDSReqAuthTimestamp": "stringstring"
    },
    "threeDSRequestorChallengeInd": "01",
    "threeDSRequestorID": "string",
    "threeDSRequestorName": "string",
    "threeDSRequestorPriorAuthenticationInfo": {
      "threeDSReqPriorAuthData": "string",
      "threeDSReqPriorAuthMethod": "01",
      "threeDSReqPriorAuthTimestamp": "stringstring",
      "threeDSReqPriorRef": "stringstringstringstringstringstring"
    },
    "threeDSRequestorURL": "string",
    "transType": "01",
    "transactionType": "goodsOrServicePurchase",
    "whiteListStatus": "string",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "threeDSAuthenticationOnly": false,
  "totalsGroup": "string",
  "trustedShopper": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|additionalAmount|[Amount](#schemaamount)|false|none|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|amount|[Amount](#schemaamount)|true|none|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|bankAccount|[BankAccount](#schemabankaccount)|false|none|The details of the bank account, from which the payment should be made.<br>> Either `bankAccount` or `card` field must be provided in a payment request.|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|browserInfo|[BrowserInfo](#schemabrowserinfo)|false|none|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|captureDelayHours|integer(int32)|false|none|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|card|[Card](#schemacard)|false|none|A container for card data.<br>> Either `bankAccount` or `card` field must be provided in a payment request.|
|dateOfBirth|string(date)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|dccQuote|[ForexQuote](#schemaforexquote)|false|none|The forex quote as returned in the response of the forex service.|
|deliveryAddress|[Address](#schemaaddress)|false|none|The address where the purchased goods should be delivered.|
|deliveryDate|string(date-time)|false|none|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|deviceFingerprint|string|false|none|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|entityType|string|false|none|The type of the entity the payment is processed for.|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|fundDestination|[FundDestination](#schemafunddestination)|false|none|the person or entity receiving the money|
|fundSource|[FundSource](#schemafundsource)|false|none|The person or entity funding the money.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|installments|[Installments](#schemainstallments)|false|none|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|localizedShopperStatement|object|false|none|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|mandate|[Mandate](#schemamandate)|false|none|The mandate details to initiate recurring transaction.|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|merchantOrderReference|string|false|none|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|merchantRiskIndicator|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|none|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|nationality|string|false|none|The two-character country code of the shopper's nationality.|
|orderReference|string|false|none|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|recurring|[Recurring](#schemarecurring)|false|none|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|secureRemoteCommerceCheckoutData|[SecureRemoteCommerceCheckoutData](#schemasecureremotecommercecheckoutdata)|false|none|Checkout data for a Secure Remote Commerce payment.|
|selectedBrand|string|false|none|Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card.|
|selectedRecurringDetailReference|string|false|none|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|sessionId|string|false|none|A session ID used to identify a payment session.|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperName|[Name](#schemaname)|false|none|The shopper's full name.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|threeDS2RequestData|[ThreeDS2RequestData](#schemathreeds2requestdata)|false|none|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|threeDSAuthenticationOnly|boolean|false|none|Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|totalsGroup|string|false|none|The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).|
|trustedShopper|boolean|false|none|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|NaturalPerson|
|entityType|CompanyName|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_PaymentRequest3d">PaymentRequest3d</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequest3d"></a>
<a id="schema_PaymentRequest3d"></a>
<a id="tocSpaymentrequest3d"></a>
<a id="tocspaymentrequest3d"></a>

```json
{
  "accountInfo": {
    "accountAgeIndicator": "notApplicable",
    "accountChangeDate": "1970-01-01T00:00:00Z",
    "accountChangeIndicator": "thisTransaction",
    "accountCreationDate": "1970-01-01T00:00:00Z",
    "accountType": "notApplicable",
    "addCardAttemptsDay": 0,
    "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
    "deliveryAddressUsageIndicator": "thisTransaction",
    "homePhone": "string",
    "mobilePhone": "string",
    "passwordChangeDate": "1970-01-01T00:00:00Z",
    "passwordChangeIndicator": "notApplicable",
    "pastTransactionsDay": 0,
    "pastTransactionsYear": 0,
    "paymentAccountAge": "1970-01-01T00:00:00Z",
    "paymentAccountIndicator": "notApplicable",
    "purchasesLast6Months": 0,
    "suspiciousActivity": true,
    "workPhone": "string"
  },
  "additionalAmount": {
    "currency": "str",
    "value": 0
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "browserInfo": {
    "acceptHeader": "string",
    "colorDepth": 0,
    "javaEnabled": true,
    "javaScriptEnabled": true,
    "language": "string",
    "screenHeight": 0,
    "screenWidth": 0,
    "timeZoneOffset": 0,
    "userAgent": "string"
  },
  "captureDelayHours": 0,
  "dateOfBirth": "1970-01-01",
  "dccQuote": {
    "account": "string",
    "accountType": "string",
    "baseAmount": {
      "currency": "str",
      "value": 0
    },
    "basePoints": 0,
    "buy": {
      "currency": "str",
      "value": 0
    },
    "interbank": {
      "currency": "str",
      "value": 0
    },
    "reference": "string",
    "sell": {
      "currency": "str",
      "value": 0
    },
    "signature": "string",
    "source": "string",
    "type": "string",
    "validTill": "1970-01-01T00:00:00Z"
  },
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "deliveryDate": "1970-01-01T00:00:00Z",
  "deviceFingerprint": "string",
  "fraudOffset": 0,
  "installments": {
    "extra": 0,
    "plan": "bonus",
    "value": 0
  },
  "localizedShopperStatement": {
    "property1": "string",
    "property2": "string"
  },
  "mcc": "string",
  "md": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "merchantRiskIndicator": {
    "addressMatch": true,
    "deliveryAddressIndicator": "shipToBillingAddress",
    "deliveryEmail": "string",
    "deliveryEmailAddress": "string",
    "deliveryTimeframe": "electronicDelivery",
    "giftCardAmount": {
      "currency": "str",
      "value": 0
    },
    "giftCardCount": 0,
    "giftCardCurr": "string",
    "preOrderDate": "1970-01-01T00:00:00Z",
    "preOrderPurchase": true,
    "preOrderPurchaseInd": "string",
    "reorderItems": true,
    "reorderItemsInd": "string",
    "shipIndicator": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "orderReference": "string",
  "paResponse": "string",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "recurringProcessingModel": "CardOnFile",
  "reference": "string",
  "selectedBrand": "string",
  "selectedRecurringDetailReference": "string",
  "sessionId": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "Ecommerce",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "socialSecurityNumber": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string",
  "telephoneNumber": "string",
  "threeDS2RequestData": {
    "acctInfo": {
      "chAccAgeInd": "01",
      "chAccChange": "string",
      "chAccChangeInd": "01",
      "chAccPwChange": "string",
      "chAccPwChangeInd": "01",
      "chAccString": "string",
      "nbPurchaseAccount": "string",
      "paymentAccAge": "string",
      "paymentAccInd": "01",
      "provisionAttemptsDay": "string",
      "shipAddressUsage": "string",
      "shipAddressUsageInd": "01",
      "shipNameIndicator": "01",
      "suspiciousAccActivity": "01",
      "txnActivityDay": "str",
      "txnActivityYear": "str"
    },
    "acctType": "01",
    "acquirerBIN": "string",
    "acquirerMerchantID": "string",
    "addrMatch": "Y",
    "authenticationOnly": false,
    "challengeIndicator": "noPreference",
    "deviceChannel": "string",
    "deviceRenderOptions": {
      "sdkInterface": "both",
      "sdkUiType": [
        "multiSelect"
      ]
    },
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mcc": "string",
    "merchantName": "string",
    "messageVersion": "string",
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "notificationURL": "string",
    "payTokenInd": true,
    "paymentAuthenticationUseCase": "string",
    "purchaseInstalData": "str",
    "recurringExpiry": "string",
    "recurringFrequency": "stri",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": {
      "crv": "string",
      "kty": "string",
      "x": "string",
      "y": "string"
    },
    "sdkMaxTimeout": 60,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string",
    "sdkVersion": "string",
    "threeDSCompInd": "string",
    "threeDSRequestorAuthenticationInd": "string",
    "threeDSRequestorAuthenticationInfo": {
      "threeDSReqAuthData": "string",
      "threeDSReqAuthMethod": "01",
      "threeDSReqAuthTimestamp": "stringstring"
    },
    "threeDSRequestorChallengeInd": "01",
    "threeDSRequestorID": "string",
    "threeDSRequestorName": "string",
    "threeDSRequestorPriorAuthenticationInfo": {
      "threeDSReqPriorAuthData": "string",
      "threeDSReqPriorAuthMethod": "01",
      "threeDSReqPriorAuthTimestamp": "stringstring",
      "threeDSReqPriorRef": "stringstringstringstringstringstring"
    },
    "threeDSRequestorURL": "string",
    "transType": "01",
    "transactionType": "goodsOrServicePurchase",
    "whiteListStatus": "string",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "threeDSAuthenticationOnly": false,
  "totalsGroup": "string",
  "trustedShopper": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|additionalAmount|[Amount](#schemaamount)|false|none|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|amount|[Amount](#schemaamount)|false|none|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|browserInfo|[BrowserInfo](#schemabrowserinfo)|false|none|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|captureDelayHours|integer(int32)|false|none|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|dateOfBirth|string(date)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|dccQuote|[ForexQuote](#schemaforexquote)|false|none|The forex quote as returned in the response of the forex service.|
|deliveryAddress|[Address](#schemaaddress)|false|none|The address where the purchased goods should be delivered.|
|deliveryDate|string(date-time)|false|none|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|deviceFingerprint|string|false|none|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|installments|[Installments](#schemainstallments)|false|none|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|localizedShopperStatement|object|false|none|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|md|string|true|none|The payment session identifier returned by the card issuer.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|merchantOrderReference|string|false|none|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|merchantRiskIndicator|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|none|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|orderReference|string|false|none|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|paResponse|string|true|none|Payment authorisation response returned by the card issuer. The `paResponse` field holds the PaRes value received from the card issuer.|
|recurring|[Recurring](#schemarecurring)|false|none|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|reference|string|false|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|selectedBrand|string|false|none|Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card.|
|selectedRecurringDetailReference|string|false|none|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|sessionId|string|false|none|A session ID used to identify a payment session.|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperName|[Name](#schemaname)|false|none|The shopper's full name.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|threeDS2RequestData|[ThreeDS2RequestData](#schemathreeds2requestdata)|false|none|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|threeDSAuthenticationOnly|boolean|false|none|Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|totalsGroup|string|false|none|The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).|
|trustedShopper|boolean|false|none|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Property|Value|
|---|---|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_PaymentRequest3ds2">PaymentRequest3ds2</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequest3ds2"></a>
<a id="schema_PaymentRequest3ds2"></a>
<a id="tocSpaymentrequest3ds2"></a>
<a id="tocspaymentrequest3ds2"></a>

```json
{
  "accountInfo": {
    "accountAgeIndicator": "notApplicable",
    "accountChangeDate": "1970-01-01T00:00:00Z",
    "accountChangeIndicator": "thisTransaction",
    "accountCreationDate": "1970-01-01T00:00:00Z",
    "accountType": "notApplicable",
    "addCardAttemptsDay": 0,
    "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
    "deliveryAddressUsageIndicator": "thisTransaction",
    "homePhone": "string",
    "mobilePhone": "string",
    "passwordChangeDate": "1970-01-01T00:00:00Z",
    "passwordChangeIndicator": "notApplicable",
    "pastTransactionsDay": 0,
    "pastTransactionsYear": 0,
    "paymentAccountAge": "1970-01-01T00:00:00Z",
    "paymentAccountIndicator": "notApplicable",
    "purchasesLast6Months": 0,
    "suspiciousActivity": true,
    "workPhone": "string"
  },
  "additionalAmount": {
    "currency": "str",
    "value": 0
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "browserInfo": {
    "acceptHeader": "string",
    "colorDepth": 0,
    "javaEnabled": true,
    "javaScriptEnabled": true,
    "language": "string",
    "screenHeight": 0,
    "screenWidth": 0,
    "timeZoneOffset": 0,
    "userAgent": "string"
  },
  "captureDelayHours": 0,
  "dateOfBirth": "1970-01-01",
  "dccQuote": {
    "account": "string",
    "accountType": "string",
    "baseAmount": {
      "currency": "str",
      "value": 0
    },
    "basePoints": 0,
    "buy": {
      "currency": "str",
      "value": 0
    },
    "interbank": {
      "currency": "str",
      "value": 0
    },
    "reference": "string",
    "sell": {
      "currency": "str",
      "value": 0
    },
    "signature": "string",
    "source": "string",
    "type": "string",
    "validTill": "1970-01-01T00:00:00Z"
  },
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "deliveryDate": "1970-01-01T00:00:00Z",
  "deviceFingerprint": "string",
  "fraudOffset": 0,
  "installments": {
    "extra": 0,
    "plan": "bonus",
    "value": 0
  },
  "localizedShopperStatement": {
    "property1": "string",
    "property2": "string"
  },
  "mcc": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "merchantRiskIndicator": {
    "addressMatch": true,
    "deliveryAddressIndicator": "shipToBillingAddress",
    "deliveryEmail": "string",
    "deliveryEmailAddress": "string",
    "deliveryTimeframe": "electronicDelivery",
    "giftCardAmount": {
      "currency": "str",
      "value": 0
    },
    "giftCardCount": 0,
    "giftCardCurr": "string",
    "preOrderDate": "1970-01-01T00:00:00Z",
    "preOrderPurchase": true,
    "preOrderPurchaseInd": "string",
    "reorderItems": true,
    "reorderItemsInd": "string",
    "shipIndicator": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "orderReference": "string",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "recurringProcessingModel": "CardOnFile",
  "reference": "string",
  "selectedBrand": "string",
  "selectedRecurringDetailReference": "string",
  "sessionId": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "Ecommerce",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "socialSecurityNumber": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string",
  "telephoneNumber": "string",
  "threeDS2RequestData": {
    "acctInfo": {
      "chAccAgeInd": "01",
      "chAccChange": "string",
      "chAccChangeInd": "01",
      "chAccPwChange": "string",
      "chAccPwChangeInd": "01",
      "chAccString": "string",
      "nbPurchaseAccount": "string",
      "paymentAccAge": "string",
      "paymentAccInd": "01",
      "provisionAttemptsDay": "string",
      "shipAddressUsage": "string",
      "shipAddressUsageInd": "01",
      "shipNameIndicator": "01",
      "suspiciousAccActivity": "01",
      "txnActivityDay": "str",
      "txnActivityYear": "str"
    },
    "acctType": "01",
    "acquirerBIN": "string",
    "acquirerMerchantID": "string",
    "addrMatch": "Y",
    "authenticationOnly": false,
    "challengeIndicator": "noPreference",
    "deviceChannel": "string",
    "deviceRenderOptions": {
      "sdkInterface": "both",
      "sdkUiType": [
        "multiSelect"
      ]
    },
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mcc": "string",
    "merchantName": "string",
    "messageVersion": "string",
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "notificationURL": "string",
    "payTokenInd": true,
    "paymentAuthenticationUseCase": "string",
    "purchaseInstalData": "str",
    "recurringExpiry": "string",
    "recurringFrequency": "stri",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": {
      "crv": "string",
      "kty": "string",
      "x": "string",
      "y": "string"
    },
    "sdkMaxTimeout": 60,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string",
    "sdkVersion": "string",
    "threeDSCompInd": "string",
    "threeDSRequestorAuthenticationInd": "string",
    "threeDSRequestorAuthenticationInfo": {
      "threeDSReqAuthData": "string",
      "threeDSReqAuthMethod": "01",
      "threeDSReqAuthTimestamp": "stringstring"
    },
    "threeDSRequestorChallengeInd": "01",
    "threeDSRequestorID": "string",
    "threeDSRequestorName": "string",
    "threeDSRequestorPriorAuthenticationInfo": {
      "threeDSReqPriorAuthData": "string",
      "threeDSReqPriorAuthMethod": "01",
      "threeDSReqPriorAuthTimestamp": "stringstring",
      "threeDSReqPriorRef": "stringstringstringstringstringstring"
    },
    "threeDSRequestorURL": "string",
    "transType": "01",
    "transactionType": "goodsOrServicePurchase",
    "whiteListStatus": "string",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "threeDS2Result": {
    "authenticationValue": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "dsTransID": "string",
    "eci": "string",
    "exemptionIndicator": "lowValue",
    "messageVersion": "string",
    "riskScore": "string",
    "threeDSRequestorChallengeInd": "01",
    "threeDSServerTransID": "string",
    "timestamp": "string",
    "transStatus": "string",
    "transStatusReason": "string",
    "whiteListStatus": "string"
  },
  "threeDS2Token": "string",
  "threeDSAuthenticationOnly": false,
  "totalsGroup": "string",
  "trustedShopper": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|additionalAmount|[Amount](#schemaamount)|false|none|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|amount|[Amount](#schemaamount)|true|none|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|browserInfo|[BrowserInfo](#schemabrowserinfo)|false|none|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|captureDelayHours|integer(int32)|false|none|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|dateOfBirth|string(date)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|dccQuote|[ForexQuote](#schemaforexquote)|false|none|The forex quote as returned in the response of the forex service.|
|deliveryAddress|[Address](#schemaaddress)|false|none|The address where the purchased goods should be delivered.|
|deliveryDate|string(date-time)|false|none|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|deviceFingerprint|string|false|none|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|installments|[Installments](#schemainstallments)|false|none|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|localizedShopperStatement|object|false|none|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|merchantOrderReference|string|false|none|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|merchantRiskIndicator|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|none|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|orderReference|string|false|none|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|recurring|[Recurring](#schemarecurring)|false|none|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|selectedBrand|string|false|none|Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card.|
|selectedRecurringDetailReference|string|false|none|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|sessionId|string|false|none|A session ID used to identify a payment session.|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperName|[Name](#schemaname)|false|none|The shopper's full name.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|threeDS2RequestData|[ThreeDS2RequestData](#schemathreeds2requestdata)|false|none|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|threeDS2Result|[ThreeDS2Result](#schemathreeds2result)|false|none|The ThreeDS2Result that was returned in the final CRes.|
|threeDS2Token|string|false|none|The ThreeDS2Token that was returned in the /authorise call.|
|threeDSAuthenticationOnly|boolean|false|none|Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|totalsGroup|string|false|none|The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).|
|trustedShopper|boolean|false|none|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Property|Value|
|---|---|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_PaymentResult">PaymentResult</h2>
<!-- backwards compatibility -->
<a id="schemapaymentresult"></a>
<a id="schema_PaymentResult"></a>
<a id="tocSpaymentresult"></a>
<a id="tocspaymentresult"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "authCode": "string",
  "dccAmount": {
    "currency": "str",
    "value": 0
  },
  "dccSignature": "string",
  "fraudResult": {
    "accountScore": 0,
    "results": [
      {
        "FraudCheckResult": {
          "accountScore": 0,
          "checkId": 0,
          "name": "string"
        }
      }
    ]
  },
  "issuerUrl": "string",
  "md": "string",
  "paRequest": "string",
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "AuthenticationFinished"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**.|
|authCode|string|false|none|Authorisation code:<br>* When the payment is authorised successfully, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty.|
|dccAmount|[Amount](#schemaamount)|false|none|Includes the currency of the conversion and the value of the transaction.<br>> This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|dccSignature|string|false|none|Cryptographic signature used to verify `dccQuote`.<br>> This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|fraudResult|[FraudResult](#schemafraudresult)|false|none|The fraud result properties of the payment.|
|issuerUrl|string|false|none|The URL to direct the shopper to.<br>> In case of SecurePlus, do not redirect a shopper to this URL.|
|md|string|false|none|The payment session.|
|paRequest|string|false|none|The 3D request data for the issuer.<br><br>If the value is **CUPSecurePlus-CollectSMSVerificationCode**, collect an SMS code from the shopper and pass it in the `/authorise3D` request. For more information, see [3D Secure](https://docs.adyen.com/classic-integration/3d-secure).|
|pspReference|string|false|none|Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).|
|resultCode|string|false|none|The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).<br><br>Possible values:<br><br>* **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.<br>* **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).<br>* **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.<br>* **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.<br>* **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.<br>* **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **PartiallyAuthorised** – The payment has been authorised for a partial amount.<br>This happens for card payments when the merchant supports Partial Authorisations and the cardholder has insufficient funds.<br>* **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.<br>* **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.<br>* **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.<br>* **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.<br>* **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|AuthenticationFinished|
|resultCode|AuthenticationNotRequired|
|resultCode|Authorised|
|resultCode|Cancelled|
|resultCode|ChallengeShopper|
|resultCode|Error|
|resultCode|IdentifyShopper|
|resultCode|PartiallyAuthorised|
|resultCode|Pending|
|resultCode|PresentToShopper|
|resultCode|Received|
|resultCode|RedirectShopper|
|resultCode|Refused|
|resultCode|Success|

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "cc": "str",
  "subscriber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cc|string|false|none|Country code. Length: 1–3 digits.|
|subscriber|string|false|none|Subscriber number. Length: 4-15  digits.|

<h2 id="tocS_PlatformChargebackLogic">PlatformChargebackLogic</h2>
<!-- backwards compatibility -->
<a id="schemaplatformchargebacklogic"></a>
<a id="schema_PlatformChargebackLogic"></a>
<a id="tocSplatformchargebacklogic"></a>
<a id="tocsplatformchargebacklogic"></a>

```json
{
  "behavior": "deductAccordingToSplitRatio",
  "costAllocationAccount": "string",
  "targetAccount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|behavior|string|false|none|The method of handling the chargeback.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**.|
|costAllocationAccount|string|false|none|The unique identifier of the balance account to which the chargeback fees are booked. By default, the chargeback fees are booked to your liable balance account.|
|targetAccount|string|false|none|The unique identifier of the balance account against which the disputed amount is booked.<br><br>Required if `behavior` is **deductFromOneBalanceAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|behavior|deductAccordingToSplitRatio|
|behavior|deductFromLiableAccount|
|behavior|deductFromOneBalanceAccount|

<h2 id="tocS_Recurring">Recurring</h2>
<!-- backwards compatibility -->
<a id="schemarecurring"></a>
<a id="schema_Recurring"></a>
<a id="tocSrecurring"></a>
<a id="tocsrecurring"></a>

```json
{
  "contract": "ONECLICK",
  "recurringDetailName": "string",
  "recurringExpiry": "1970-01-01T00:00:00Z",
  "recurringFrequency": "string",
  "tokenService": "VISATOKENSERVICE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract|string|false|none|The type of recurring contract to be used.<br>Possible values:<br>* `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).<br>* `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).<br>* `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.<br>* `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts).<br>* `EXTERNAL` - Use this when you store payment details and send the raw card number or network token directly in your API request.<br>|
|recurringDetailName|string|false|none|A descriptive name for this detail.|
|recurringExpiry|string(date-time)|false|none|Date after which no further authorisations shall be performed. Only for 3D Secure 2.|
|recurringFrequency|string|false|none|Minimum number of days between authorisations. Only for 3D Secure 2.|
|tokenService|string|false|none|The name of the token service.|

#### Enumerated Values

|Property|Value|
|---|---|
|contract|ONECLICK|
|contract|ONECLICK,RECURRING|
|contract|RECURRING|
|contract|PAYOUT|
|contract|EXTERNAL|
|tokenService|VISATOKENSERVICE|
|tokenService|MCTOKENSERVICE|
|tokenService|AMEXTOKENSERVICE|
|tokenService|TOKEN_SHARING|

<h2 id="tocS_RefundRequest">RefundRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundrequest"></a>
<a id="schema_RefundRequest"></a>
<a id="tocSrefundrequest"></a>
<a id="tocsrefundrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "merchantAccount": "string",
  "modificationAmount": {
    "currency": "str",
    "value": 0
  },
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "originalMerchantReference": "string",
  "originalReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|modificationAmount|[Amount](#schemaamount)|true|none|The amount that needs to be refunded. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|originalMerchantReference|string|false|none|The original merchant reference to cancel.|
|originalReference|string|true|none|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|tenderReference|string|false|none|The transaction reference provided by the PED. For point-of-sale integrations only.|
|uniqueTerminalId|string|false|none|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

<h2 id="tocS_ResponseAdditionalData3DSecure">ResponseAdditionalData3DSecure</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldata3dsecure"></a>
<a id="schema_ResponseAdditionalData3DSecure"></a>
<a id="tocSresponseadditionaldata3dsecure"></a>
<a id="tocsresponseadditionaldata3dsecure"></a>

```json
{
  "cardHolderInfo": "string",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "scaExemptionRequested": "string",
  "threeds2.cardEnrolled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolderInfo|string|false|none|Information provided by the issuer to the cardholder. If this field is present, you need to display this information to the cardholder. |
|cavv|string|false|none|The Cardholder Authentication Verification Value (CAVV) for the 3D Secure authentication session, as a Base64-encoded 20-byte array.|
|cavvAlgorithm|string|false|none|The CAVV algorithm used.|
|scaExemptionRequested|string|false|none|Shows the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that Adyen requested for the payment.<br><br> Possible values:<br>* **lowValue** <br>* **secureCorporate** <br>* **trustedBeneficiary** <br>* **transactionRiskAnalysis** |
|threeds2.cardEnrolled|boolean|false|none|Indicates whether a card is enrolled for 3D Secure 2.|

<h2 id="tocS_ResponseAdditionalDataBillingAddress">ResponseAdditionalDataBillingAddress</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatabillingaddress"></a>
<a id="schema_ResponseAdditionalDataBillingAddress"></a>
<a id="tocSresponseadditionaldatabillingaddress"></a>
<a id="tocsresponseadditionaldatabillingaddress"></a>

```json
{
  "billingAddress.city": "string",
  "billingAddress.country": "string",
  "billingAddress.houseNumberOrName": "string",
  "billingAddress.postalCode": "string",
  "billingAddress.stateOrProvince": "string",
  "billingAddress.street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress.city|string|false|none|The billing address city passed in the payment request.|
|billingAddress.country|string|false|none|The billing address country passed in the payment request.<br><br>Example: NL|
|billingAddress.houseNumberOrName|string|false|none|The billing address house number or name passed in the payment request.|
|billingAddress.postalCode|string|false|none|The billing address postal code passed in the payment request.<br><br>Example: 1011 DJ|
|billingAddress.stateOrProvince|string|false|none|The billing address state or province passed in the payment request.<br><br>Example: NH|
|billingAddress.street|string|false|none|The billing address street passed in the payment request.|

<h2 id="tocS_ResponseAdditionalDataCard">ResponseAdditionalDataCard</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatacard"></a>
<a id="schema_ResponseAdditionalDataCard"></a>
<a id="tocSresponseadditionaldatacard"></a>
<a id="tocsresponseadditionaldatacard"></a>

```json
{
  "cardAltID": "string",
  "cardBin": "string",
  "cardHolderName": "string",
  "cardIssuingBank": "string",
  "cardIssuingCountry": "string",
  "cardIssuingCurrency": "string",
  "cardPaymentMethod": "string",
  "cardProductId": "string",
  "cardSummary": "string",
  "issuerBin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardAltID|string|false|none|This is an ALT ID (alternate ID) mapped to the Card PAN.<br><br>> Returned only in case of Ecommerce Card Payment in India|
|cardBin|string|false|none|The first six digits of the card number.<br><br>This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with a six-digit BIN.<br><br>Example: 521234|
|cardHolderName|string|false|none|The cardholder name passed in the payment request.|
|cardIssuingBank|string|false|none|The bank or the financial institution granting lines of credit through card association branded payment cards. This information can be included when available.|
|cardIssuingCountry|string|false|none|The country where the card was issued.<br><br>Example: US|
|cardIssuingCurrency|string|false|none|The currency in which the card is issued, if this information is available. Provided as the currency code or currency number from the ISO-4217 standard. <br><br>Example: USD|
|cardPaymentMethod|string|false|none|The card payment method used for the transaction.<br><br>Example: amex|
|cardProductId|string|false|none|The Card Product ID represents the type of card following card scheme product definitions and can be returned for Adyen Acquiring service level payments.<br><br>Example values Visa:<br>* **A** - Visa Traditional<br>* **B** - Visa Traditional Rewards<br>* **C** - Visa Signature<br>* **D** - Visa Signature Preferred<br>* **F** - Visa Classic<br><br>Example values Mastercard:<br>* **MCC** - Mastercard Card<br>* **MCE** - Mastercard Electronic Card<br>* **MCF** - Mastercard Corporate Fleet Card<br>* **MCG** - Gold Mastercard Card<br>* **MCH** - Mastercard Premium Charge<br>* **MCI** - Mastercard Select Debit<br>|
|cardSummary|string|false|none|The last four digits of a card number.<br><br>> Returned only in case of a card payment.|
|issuerBin|string|false|none|The first eight digits of the card number. Only returned if the card number is 16 digits or more.<br><br>This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with an eight-digit BIN.<br><br>Example: 52123423|

<h2 id="tocS_ResponseAdditionalDataCommon">ResponseAdditionalDataCommon</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatacommon"></a>
<a id="schema_ResponseAdditionalDataCommon"></a>
<a id="tocSresponseadditionaldatacommon"></a>
<a id="tocsresponseadditionaldatacommon"></a>

```json
{
  "acquirerAccountCode": "string",
  "acquirerCode": "string",
  "acquirerReference": "string",
  "alias": "string",
  "aliasType": "string",
  "authCode": "string",
  "authorisationMid": "string",
  "authorisedAmountCurrency": "string",
  "authorisedAmountValue": "string",
  "avsResult": "string",
  "avsResultRaw": "string",
  "bic": "string",
  "coBrandedWith": "string",
  "cvcResult": "1 Matches",
  "cvcResultRaw": "M",
  "dsTransID": "string",
  "eci": "string",
  "expiryDate": "string",
  "extraCostsCurrency": "string",
  "extraCostsValue": "string",
  "fraudCheck-[itemNr]-[FraudCheckname]": "string",
  "fraudManualReview": "string",
  "fraudResultType": "AMBER",
  "fraudRiskLevel": "veryLow",
  "fundingSource": "string",
  "fundsAvailability": "string",
  "inferredRefusalReason": "string",
  "isCardCommercial": "string",
  "issuerCountry": "string",
  "liabilityShift": "string",
  "mcBankNetReferenceNumber": "string",
  "merchantAdviceCode": "string",
  "merchantReference": "string",
  "networkProcessingMode": "string",
  "networkTxReference": "string",
  "ownerName": "string",
  "paymentAccountReference": "string",
  "paymentMethod": "string",
  "paymentMethodVariant": "string",
  "payoutEligible": "string",
  "realtimeAccountUpdaterStatus": "string",
  "receiptFreeText": "string",
  "recurring.contractTypes": "string",
  "recurring.firstPspReference": "string",
  "recurring.recurringDetailReference": "string",
  "recurring.shopperReference": "string",
  "recurringProcessingModel": "CardOnFile",
  "referred": "string",
  "refusalReasonRaw": "string",
  "requestAmount": "string",
  "requestCurrencyCode": "string",
  "shopperInteraction": "string",
  "shopperReference": "string",
  "terminalId": "string",
  "threeDAuthenticated": "string",
  "threeDAuthenticatedResponse": "string",
  "threeDOffered": "string",
  "threeDOfferedResponse": "string",
  "threeDSVersion": "string",
  "tokenization.shopperReference": "string",
  "tokenization.store.operationType": "created",
  "tokenization.storedPaymentMethodId": "string",
  "transactionLinkId": "string",
  "visaTransactionId": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerAccountCode|string|false|none|The name of the Adyen acquirer account.<br><br>Example: PayPalSandbox_TestAcquirer<br><br>> Only relevant for PayPal transactions.|
|acquirerCode|string|false|none|The name of the acquirer processing the payment request.<br><br>Example: TestPmmAcquirer|
|acquirerReference|string|false|none|The reference number that can be used for reconciliation in case a non-Adyen acquirer is used for settlement.<br><br>Example: 7C9N3FNBKT9|
|alias|string|false|none|The Adyen alias of the card.<br><br>Example: H167852639363479|
|aliasType|string|false|none|The type of the card alias.<br><br>Example: Default|
|authCode|string|false|none|Authorisation code:<br>* When the payment is authorised successfully, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty.<br><br>Example: 58747|
|authorisationMid|string|false|none|Merchant ID known by the acquirer.|
|authorisedAmountCurrency|string|false|none|The currency of the authorised amount, as a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|authorisedAmountValue|string|false|none|Value of the amount authorised.<br><br>This amount is represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).|
|avsResult|string|false|none|The AVS result code of the payment, which provides information about the outcome of the AVS check.<br><br>For possible values, see [AVS](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#billing-address-does-not-match-cardholder-address-avs).|
|avsResultRaw|string|false|none|Raw AVS result received from the acquirer, where available.<br><br>Example: D|
|bic|string|false|none|BIC of a bank account.<br><br>Example: TESTNL01<br><br>> Only relevant for SEPA Direct Debit transactions.|
|coBrandedWith|string|false|none|Includes the co-branded card information.|
|cvcResult|string|false|none|The result of CVC verification.|
|cvcResultRaw|string|false|none|The raw result of CVC verification.|
|dsTransID|string|false|none|Supported for 3D Secure 2. The unique transaction identifier assigned by the DS to identify a single transaction.|
|eci|string|false|none|The Electronic Commerce Indicator returned from the schemes for the 3DS payment session.<br><br>Example: 02|
|expiryDate|string|false|none|The expiry date on the card.<br><br>Example: 6/2016<br><br>> Returned only in case of a card payment.|
|extraCostsCurrency|string|false|none|The currency of the extra amount charged due to additional amounts set in the skin used in the HPP payment request.<br><br>Example: EUR|
|extraCostsValue|string|false|none|The value of the extra amount charged due to additional amounts set in the skin used in the HPP payment request. The amount is in minor units.|
|fraudCheck-[itemNr]-[FraudCheckname]|string|false|none|The fraud score due to a particular fraud check. The fraud check name is found in the key of the key-value pair.|
|fraudManualReview|string|false|none|Indicates if the payment is sent to manual review.|
|fraudResultType|string|false|none|The fraud result properties of the payment. Possible values:<br>* AMBER<br>* GREEN<br>* RED<br><br>|
|fraudRiskLevel|string|false|none|The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:<br>* veryLow<br>* low<br>* medium<br>* high<br>* veryHigh<br><br>|
|fundingSource|string|false|none|Information regarding the funding type of the card. The possible return values are:<br>* CHARGE<br>* CREDIT<br>* DEBIT<br>* PREPAID<br>* PREPAID_RELOADABLE<br><br>* PREPAID_NONRELOADABLE<br>* DEFFERED_DEBIT<br><br>> This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.<br><br>For receiving this field in the notification, enable **Include Funding Source** in **Notifications** > **Additional settings**.|
|fundsAvailability|string|false|none|Indicates availability of funds.<br><br>Visa:<br>* "I" (fast funds are supported)<br>* "N" (otherwise)<br><br>Mastercard:<br>* "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)<br>* "N" (otherwise)<br><br>> Returned when you verify a card BIN or estimate costs, and only if payoutEligible is "Y" or "D".|
|inferredRefusalReason|string|false|none|Provides the more granular indication of why a transaction was refused. When a transaction fails with either "Refused", "Restricted Card", "Transaction Not Permitted", "Not supported" or "DeclinedNon Generic" refusalReason from the issuer, Adyen cross references its PSP-wide data for extra insight into the refusal reason. If an inferred refusal reason is available, the `inferredRefusalReason`, field is populated and the `refusalReason`, is set to "Not Supported".<br><br>Possible values:<br><br>* 3D Secure Mandated<br>* Closed Account<br>* ContAuth Not Supported<br>* CVC Mandated<br>* Ecommerce Not Allowed<br>* Crossborder Not Supported<br>* Card Updated<br><br>* Low Authrate Bin<br>* Non-reloadable prepaid card|
|isCardCommercial|string|false|none|Indicates if the card is used for business purposes only.|
|issuerCountry|string|false|none|The issuing country of the card based on the BIN list that Adyen maintains.<br><br>Example: JP|
|liabilityShift|string|false|none|A Boolean value indicating whether a liability shift was offered for this payment.|
|mcBankNetReferenceNumber|string|false|none|The `mcBankNetReferenceNumber`, is a minimum of six characters and a maximum of nine characters long.<br><br>> Contact Support Team to enable this field.|
|merchantAdviceCode|string|false|none|The Merchant Advice Code (MAC) can be returned by Mastercard issuers for refused payments. If present, the MAC contains information about why the payment failed, and whether it can be retried.<br><br>For more information see [Mastercard Merchant Advice Codes](https://docs.adyen.com/development-resources/raw-acquirer-responses#mastercard-merchant-advice-codes).|
|merchantReference|string|false|none|The reference provided for the transaction.|
|networkProcessingMode|string|false|none|Indicates the processing flow.<br><br>Possible values:<br>* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. <br>* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.|
|networkTxReference|string|false|none|Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID.|
|ownerName|string|false|none|The owner name of a bank account.<br><br>Only relevant for SEPA Direct Debit transactions.|
|paymentAccountReference|string|false|none|The Payment Account Reference (PAR) value links a network token with the underlying primary account number (PAN). The PAR value consists of 29 uppercase alphanumeric characters.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|paymentMethodVariant|string|false|none|The Adyen sub-variant of the payment method used for the payment request.<br><br>For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).<br><br>Example: mcpro|
|payoutEligible|string|false|none|Indicates whether a payout is eligible or not for this card.<br><br>Visa:<br>* "Y"<br>* "N"<br><br>Mastercard:<br>* "Y" (domestic and cross-border)<br><br>* "D" (only domestic)<br>* "N" (no MoneySend)<br>* "U" (unknown)|
|realtimeAccountUpdaterStatus|string|false|none|The response code from the Real Time Account Updater service.<br><br>Possible return values are:<br>* CardChanged<br>* CardExpiryChanged<br>* CloseAccount<br><br>* ContactCardAccountHolder|
|receiptFreeText|string|false|none|Message to be displayed on the terminal.|
|recurring.contractTypes|string|false|none|The recurring contract types applicable to the transaction.|
|recurring.firstPspReference|string|false|none|The `pspReference`, of the first recurring payment that created the recurring detail.<br><br>This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.|
|recurring.recurringDetailReference|string|false|none|**Deprecated.** The reference that uniquely identifies the recurring transaction.|
|recurring.shopperReference|string|false|none|**Deprecated.** The provided reference of the shopper for a recurring transaction.|
|recurringProcessingModel|string|false|none|The processing model used for the recurring transaction.|
|referred|string|false|none|If the payment is referred, this field is set to true.<br><br>This field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.<br><br>Example: true|
|refusalReasonRaw|string|false|none|Raw refusal reason received from the acquirer, where available.<br><br>Example: AUTHORISED|
|requestAmount|string|false|none|The amount of the payment request.|
|requestCurrencyCode|string|false|none|The currency of the payment request.|
|shopperInteraction|string|false|none|The shopper interaction type of the payment request.<br><br>Example: Ecommerce|
|shopperReference|string|false|none|The shopperReference passed in the payment request.<br><br>Example: AdyenTestShopperXX|
|terminalId|string|false|none|The terminal ID used in a point-of-sale payment.<br><br>Example: 06022622|
|threeDAuthenticated|string|false|none|A Boolean value indicating whether 3DS authentication was completed on this payment.<br><br>Example: true|
|threeDAuthenticatedResponse|string|false|none|The raw 3DS authentication result from the card issuer.<br><br>Example: N|
|threeDOffered|string|false|none|A Boolean value indicating whether 3DS was offered for this payment.<br><br>Example: true|
|threeDOfferedResponse|string|false|none|The raw enrollment result from the 3DS directory services of the card schemes.<br><br>Example: Y|
|threeDSVersion|string|false|none|The 3D Secure 2 version.|
|tokenization.shopperReference|string|false|none|The reference for the shopper that you sent when tokenizing the payment details.|
|tokenization.store.operationType|string|false|none|The operation performed on the token. Possible values:<br><br>* **created**: the token has been created.<br>* **updated**: the existing token has been updated.<br>* **alreadyExisting**: the details have already been stored.<br>|
|tokenization.storedPaymentMethodId|string|false|none|The reference that uniquely identifies tokenized payment details.|
|transactionLinkId|string|false|none|Returned in the response for Mastercard payments.<br><br>This contains the Mastercard Transaction Link Identifier (TLID).|
|visaTransactionId|string|false|none|The `visaTransactionId`, has a fixed length of 15 numeric characters.<br><br>> Contact Support Team to enable this field.|
|xid|string|false|none|The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. <br><br>Example: ODgxNDc2MDg2MDExODk5MAAAAAA=|

#### Enumerated Values

|Property|Value|
|---|---|
|fraudResultType|AMBER|
|fraudResultType|GREEN|
|fraudResultType|RED|
|fraudRiskLevel|veryLow|
|fraudRiskLevel|low|
|fraudRiskLevel|medium|
|fraudRiskLevel|high|
|fraudRiskLevel|veryHigh|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|tokenization.store.operationType|created|
|tokenization.store.operationType|updated|
|tokenization.store.operationType|alreadyExisting|

<h2 id="tocS_ResponseAdditionalDataDomesticError">ResponseAdditionalDataDomesticError</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatadomesticerror"></a>
<a id="schema_ResponseAdditionalDataDomesticError"></a>
<a id="tocSresponseadditionaldatadomesticerror"></a>
<a id="tocsresponseadditionaldatadomesticerror"></a>

```json
{
  "domesticRefusalReasonRaw": "string",
  "domesticShopperAdvice": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domesticRefusalReasonRaw|string|false|none|The reason the transaction was declined, given by the local issuer. <br>Currently available for merchants in Japan.|
|domesticShopperAdvice|string|false|none|The action the shopper should take, in a local language. <br>Currently available in Japanese, for merchants in Japan.|

<h2 id="tocS_ResponseAdditionalDataInstallments">ResponseAdditionalDataInstallments</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatainstallments"></a>
<a id="schema_ResponseAdditionalDataInstallments"></a>
<a id="tocSresponseadditionaldatainstallments"></a>
<a id="tocsresponseadditionaldatainstallments"></a>

```json
{
  "installmentPaymentData.installmentType": "string",
  "installmentPaymentData.option[itemNr].annualPercentageRate": "string",
  "installmentPaymentData.option[itemNr].firstInstallmentAmount": "string",
  "installmentPaymentData.option[itemNr].installmentFee": "string",
  "installmentPaymentData.option[itemNr].interestRate": "string",
  "installmentPaymentData.option[itemNr].maximumNumberOfInstallments": "string",
  "installmentPaymentData.option[itemNr].minimumNumberOfInstallments": "string",
  "installmentPaymentData.option[itemNr].numberOfInstallments": "string",
  "installmentPaymentData.option[itemNr].subsequentInstallmentAmount": "string",
  "installmentPaymentData.option[itemNr].totalAmountDue": "string",
  "installmentPaymentData.paymentOptions": "string",
  "installments.value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installmentPaymentData.installmentType|string|false|none|Type of installment. The value of `installmentType` should be **IssuerFinanced**.|
|installmentPaymentData.option[itemNr].annualPercentageRate|string|false|none|Annual interest rate.|
|installmentPaymentData.option[itemNr].firstInstallmentAmount|string|false|none|First Installment Amount in minor units.|
|installmentPaymentData.option[itemNr].installmentFee|string|false|none|Installment fee amount in minor units.|
|installmentPaymentData.option[itemNr].interestRate|string|false|none|Interest rate for the installment period.|
|installmentPaymentData.option[itemNr].maximumNumberOfInstallments|string|false|none|Maximum number of installments possible for this payment.|
|installmentPaymentData.option[itemNr].minimumNumberOfInstallments|string|false|none|Minimum number of installments possible for this payment.|
|installmentPaymentData.option[itemNr].numberOfInstallments|string|false|none|Total number of installments possible for this payment.|
|installmentPaymentData.option[itemNr].subsequentInstallmentAmount|string|false|none|Subsequent Installment Amount in minor units.|
|installmentPaymentData.option[itemNr].totalAmountDue|string|false|none|Total amount in minor units.|
|installmentPaymentData.paymentOptions|string|false|none|Possible values:<br>* PayInInstallmentsOnly<br>* PayInFullOnly<br>* PayInFullOrInstallments|
|installments.value|string|false|none|The number of installments that the payment amount should be charged with.<br><br>Example: 5<br>> Only relevant for card payments in countries that support installments.|

<h2 id="tocS_ResponseAdditionalDataNetworkTokens">ResponseAdditionalDataNetworkTokens</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatanetworktokens"></a>
<a id="schema_ResponseAdditionalDataNetworkTokens"></a>
<a id="tocSresponseadditionaldatanetworktokens"></a>
<a id="tocsresponseadditionaldatanetworktokens"></a>

```json
{
  "networkToken.available": "string",
  "networkToken.bin": "string",
  "networkToken.tokenSummary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkToken.available|string|false|none|Indicates whether a network token is available for the specified card.|
|networkToken.bin|string|false|none|The Bank Identification Number of a tokenized card, which is the first six digits of a card number.|
|networkToken.tokenSummary|string|false|none|The last four digits of a network token.|

<h2 id="tocS_ResponseAdditionalDataOpi">ResponseAdditionalDataOpi</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldataopi"></a>
<a id="schema_ResponseAdditionalDataOpi"></a>
<a id="tocSresponseadditionaldataopi"></a>
<a id="tocsresponseadditionaldataopi"></a>

```json
{
  "opi.transToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opi.transToken|string|false|none|Returned in the response if you included `opi.includeTransToken: true` in an ecommerce payment request. This contains an Oracle Payment Interface token that you can store in your Oracle Opera database to identify tokenized ecommerce transactions. For more information and required settings, see [Oracle Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce).|

<h2 id="tocS_ResponseAdditionalDataSepa">ResponseAdditionalDataSepa</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatasepa"></a>
<a id="schema_ResponseAdditionalDataSepa"></a>
<a id="tocSresponseadditionaldatasepa"></a>
<a id="tocsresponseadditionaldatasepa"></a>

```json
{
  "sepadirectdebit.dateOfSignature": "string",
  "sepadirectdebit.mandateId": "string",
  "sepadirectdebit.sepadirectdebit.dueDate": "string",
  "sepadirectdebit.sequenceType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sepadirectdebit.dateOfSignature|string|false|none|The transaction signature date.<br><br>Format: yyyy-MM-dd|
|sepadirectdebit.mandateId|string|false|none|Its value corresponds to the pspReference value of the transaction.|
|sepadirectdebit.sepadirectdebit.dueDate|string|false|none|The date that the the shopper's bank account is charged.|
|sepadirectdebit.sequenceType|string|false|none|This field can take one of the following values:<br>* OneOff: (OOFF) Direct debit instruction to initiate exactly one direct debit transaction.<br><br>* First: (FRST) Initial/first collection in a series of direct debit instructions.<br>* Recurring: (RCUR) Direct debit instruction to carry out regular direct debit transactions initiated by the creditor.<br>* Final: (FNAL) Last/final collection in a series of direct debit instructions.<br><br>Example: OOFF|

<h2 id="tocS_ResponseAdditionalDataSwish">ResponseAdditionalDataSwish</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldataswish"></a>
<a id="schema_ResponseAdditionalDataSwish"></a>
<a id="tocSresponseadditionaldataswish"></a>
<a id="tocsresponseadditionaldataswish"></a>

```json
{
  "swish.payerAlias": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|swish.payerAlias|string|false|none|A Swish shopper's telephone number.|

<h2 id="tocS_SDKEphemPubKey">SDKEphemPubKey</h2>
<!-- backwards compatibility -->
<a id="schemasdkephempubkey"></a>
<a id="schema_SDKEphemPubKey"></a>
<a id="tocSsdkephempubkey"></a>
<a id="tocssdkephempubkey"></a>

```json
{
  "crv": "string",
  "kty": "string",
  "x": "string",
  "y": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crv|string|false|none|The `crv` value as received from the 3D Secure 2 SDK.|
|kty|string|false|none|The `kty` value as received from the 3D Secure 2 SDK.|
|x|string|false|none|The `x` value as received from the 3D Secure 2 SDK.|
|y|string|false|none|The `y` value as received from the 3D Secure 2 SDK.|

<h2 id="tocS_SecureRemoteCommerceCheckoutData">SecureRemoteCommerceCheckoutData</h2>
<!-- backwards compatibility -->
<a id="schemasecureremotecommercecheckoutdata"></a>
<a id="schema_SecureRemoteCommerceCheckoutData"></a>
<a id="tocSsecureremotecommercecheckoutdata"></a>
<a id="tocssecureremotecommercecheckoutdata"></a>

```json
{
  "checkoutPayload": "string",
  "correlationId": "string",
  "cvc": "string",
  "digitalCardId": "string",
  "scheme": "mc",
  "tokenReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutPayload|string|false|none|The Secure Remote Commerce checkout payload to process the payment with.|
|correlationId|string|false|none|This is the unique identifier generated by SRC system to track and link SRC messages. Available within the present checkout session (e.g. received in an earlier API response during the present session).|
|cvc|string|false|none|The [card verification code](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#card-security-code-cvc-cvv-cid).|
|digitalCardId|string|false|none|A unique identifier that represents the token associated with a card enrolled. Required for scheme 'mc'.|
|scheme|string|false|none|The Secure Remote Commerce scheme.|
|tokenReference|string|false|none|A unique identifier that represents the token associated with a card enrolled. Required for scheme 'visa'.|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme|mc|
|scheme|visa|

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
|additionalData|object|false|none|Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**.|
|errorCode|string|false|none|The error code mapped to the error message.|
|errorType|string|false|none|The category of the error.|
|message|string|false|none|A short explanation of the issue.|
|pspReference|string|false|none|The PSP reference of the payment.|
|status|integer(int32)|false|none|The HTTP response status.|

<h2 id="tocS_ShopperInteractionDevice">ShopperInteractionDevice</h2>
<!-- backwards compatibility -->
<a id="schemashopperinteractiondevice"></a>
<a id="schema_ShopperInteractionDevice"></a>
<a id="tocSshopperinteractiondevice"></a>
<a id="tocsshopperinteractiondevice"></a>

```json
{
  "locale": "string",
  "os": "string",
  "osVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|false|none|Locale on the shopper interaction device.|
|os|string|false|none|Operating system running on the shopper interaction device.|
|osVersion|string|false|none|Version of the operating system on the shopper interaction device.|

<h2 id="tocS_Split">Split</h2>
<!-- backwards compatibility -->
<a id="schemasplit"></a>
<a id="schema_Split"></a>
<a id="tocSsplit"></a>
<a id="tocssplit"></a>

```json
{
  "account": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "description": "string",
  "reference": "string",
  "type": "AcquiringFees"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The unique identifier of the account to which the split amount is booked. Required if `type` is **MarketPlace** or **BalanceAccount**.<br><br>* [Classic Platforms integration](https://docs.adyen.com/classic-platforms): The [`accountCode`](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccount#request-accountCode) of the account to which the split amount is booked.<br>* [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): The [`balanceAccountId`](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/balanceAccounts/_id_#path-id) of the account to which the split amount is booked.|
|amount|[SplitAmount](#schemasplitamount)|false|none|The amount of the split item.<br><br>* Required for all split types in the [Classic Platforms integration](https://docs.adyen.com/classic-platforms).<br>* Required if `type` is **BalanceAccount**, **Commission**, **Surcharge**, **Default**, or **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration.|
|description|string|false|none|Your description for the split item.|
|reference|string|false|none|Your unique reference for the part of the payment booked to the specified `account`.<br><br>This is required if `type` is **MarketPlace** ([Classic Platforms integration](https://docs.adyen.com/classic-platforms)) or **BalanceAccount** ([Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)).<br><br>For the other types, we also recommend providing a **unique** reference so you can reconcile the split and the associated payment in the transaction overview and in the reports.|
|type|string|true|none|The part of the payment you want to book to the specified `account`.<br><br>Possible values for the [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model):<br>* **BalanceAccount**: Books part of the payment (specified in `amount`) to the specified `account`.<br>* Transaction fees types that you can book to the specified `account`:<br>   * **AcquiringFees**: The aggregated amount of the interchange and scheme fees.<br>   * **PaymentFee**: The aggregated amount of all transaction fees.<br>   * **AdyenFees**: The aggregated amount of Adyen's commission and markup fees.<br>   * **AdyenCommission**: The transaction fees due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained).<br>   * **AdyenMarkup**: The transaction fees due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained).<br>   * **Interchange**: The fees paid to the issuer for each payment made with the card network.<br>   * **SchemeFee**: The fees paid to the card scheme for using their network. <br>* **Commission**: Your platform's commission on the payment (specified in `amount`), booked to your liable balance account.<br>* **Remainder**: The amount left over after a currency conversion, booked to the specified `account`.<br>* **Surcharge**: The payment acceptance fee imposed by the card scheme or debit network provider, paid by your user's customer.<br>* **TopUp**: Allows you and your users to top up balance accounts using direct debit, card payments, or other payment methods.<br>* **VAT**: The value-added tax charged on the payment, booked to your platforms liable balance account.<br>* **Default**: In very specific use cases, allows you to book the specified `amount` to the specified `account`. For more information, contact Adyen support.<br><br>Possible values for the [Classic Platforms integration](https://docs.adyen.com/classic-platforms): **Commission**, **Default**, **MarketPlace**, **PaymentFee**, **VAT**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AcquiringFees|
|type|AdyenCommission|
|type|AdyenFees|
|type|AdyenMarkup|
|type|BalanceAccount|
|type|Commission|
|type|Default|
|type|Interchange|
|type|MarketPlace|
|type|PaymentFee|
|type|Remainder|
|type|SchemeFee|
|type|Surcharge|
|type|Tip|
|type|TopUp|
|type|VAT|

<h2 id="tocS_SplitAmount">SplitAmount</h2>
<!-- backwards compatibility -->
<a id="schemasplitamount"></a>
<a id="schema_SplitAmount"></a>
<a id="tocSsplitamount"></a>
<a id="tocssplitamount"></a>

```json
{
  "currency": "str",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the original payment currency.|
|value|integer(int64)|true|none|The value of the split amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_SubMerchant">SubMerchant</h2>
<!-- backwards compatibility -->
<a id="schemasubmerchant"></a>
<a id="schema_SubMerchant"></a>
<a id="tocSsubmerchant"></a>
<a id="tocssubmerchant"></a>

```json
{
  "city": "string",
  "country": "string",
  "mcc": "string",
  "name": "string",
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city of the sub-merchant's address.<br>* Format: Alphanumeric<br>* Maximum length: 13 characters|
|country|string|false|none|The three-letter country code of the sub-merchant's address. For example, **BRA** for Brazil. <br>* Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)<br>* Fixed length: 3 characters|
|mcc|string|false|none|The sub-merchant's 4-digit Merchant Category Code (MCC). <br>* Format: Numeric<br>* Fixed length: 4 digits|
|name|string|false|none|The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement  that will appear in the card statement.<br>* Format: Alphanumeric<br>* Maximum length: 22 characters|
|taxId|string|false|none|The tax ID of the sub-merchant.<br>* Format: Numeric<br>* Fixed length: 11 digits for the CPF or 14 digits for the CNPJ|

<h2 id="tocS_TechnicalCancelRequest">TechnicalCancelRequest</h2>
<!-- backwards compatibility -->
<a id="schematechnicalcancelrequest"></a>
<a id="schema_TechnicalCancelRequest"></a>
<a id="tocStechnicalcancelrequest"></a>
<a id="tocstechnicalcancelrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "merchantAccount": "string",
  "modificationAmount": {
    "currency": "str",
    "value": 0
  },
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "originalMerchantReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|modificationAmount|[Amount](#schemaamount)|false|none|The amount that needs to be captured/refunded. Required for `/capture` and `/refund`, not allowed for `/cancel`. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|originalMerchantReference|string|true|none|The original merchant reference to cancel.|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|tenderReference|string|false|none|The transaction reference provided by the PED. For point-of-sale integrations only.|
|uniqueTerminalId|string|false|none|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|

<h2 id="tocS_ThreeDS1Result">ThreeDS1Result</h2>
<!-- backwards compatibility -->
<a id="schemathreeds1result"></a>
<a id="schema_ThreeDS1Result"></a>
<a id="tocSthreeds1result"></a>
<a id="tocsthreeds1result"></a>

```json
{
  "cavv": "string",
  "cavvAlgorithm": "string",
  "eci": "string",
  "threeDAuthenticatedResponse": "string",
  "threeDOfferedResponse": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cavv|string|false|none|The cardholder authentication value (base64 encoded).|
|cavvAlgorithm|string|false|none|The CAVV algorithm used.|
|eci|string|false|none|3D Secure Electronic Commerce Indicator (ECI).|
|threeDAuthenticatedResponse|string|false|none|The authentication response from the ACS.|
|threeDOfferedResponse|string|false|none|Whether 3D Secure was offered or not.|
|xid|string|false|none|A unique transaction identifier generated by the MPI on behalf of the merchant to identify the 3D Secure transaction, in `Base64` encoding.|

<h2 id="tocS_ThreeDS2RequestData">ThreeDS2RequestData</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2requestdata"></a>
<a id="schema_ThreeDS2RequestData"></a>
<a id="tocSthreeds2requestdata"></a>
<a id="tocsthreeds2requestdata"></a>

```json
{
  "acctInfo": {
    "chAccAgeInd": "01",
    "chAccChange": "string",
    "chAccChangeInd": "01",
    "chAccPwChange": "string",
    "chAccPwChangeInd": "01",
    "chAccString": "string",
    "nbPurchaseAccount": "string",
    "paymentAccAge": "string",
    "paymentAccInd": "01",
    "provisionAttemptsDay": "string",
    "shipAddressUsage": "string",
    "shipAddressUsageInd": "01",
    "shipNameIndicator": "01",
    "suspiciousAccActivity": "01",
    "txnActivityDay": "str",
    "txnActivityYear": "str"
  },
  "acctType": "01",
  "acquirerBIN": "string",
  "acquirerMerchantID": "string",
  "addrMatch": "Y",
  "authenticationOnly": false,
  "challengeIndicator": "noPreference",
  "deviceChannel": "string",
  "deviceRenderOptions": {
    "sdkInterface": "both",
    "sdkUiType": [
      "multiSelect"
    ]
  },
  "homePhone": {
    "cc": "str",
    "subscriber": "string"
  },
  "mcc": "string",
  "merchantName": "string",
  "messageVersion": "string",
  "mobilePhone": {
    "cc": "str",
    "subscriber": "string"
  },
  "notificationURL": "string",
  "payTokenInd": true,
  "paymentAuthenticationUseCase": "string",
  "purchaseInstalData": "str",
  "recurringExpiry": "string",
  "recurringFrequency": "stri",
  "sdkAppID": "string",
  "sdkEncData": "string",
  "sdkEphemPubKey": {
    "crv": "string",
    "kty": "string",
    "x": "string",
    "y": "string"
  },
  "sdkMaxTimeout": 60,
  "sdkReferenceNumber": "string",
  "sdkTransID": "string",
  "sdkVersion": "string",
  "threeDSCompInd": "string",
  "threeDSRequestorAuthenticationInd": "string",
  "threeDSRequestorAuthenticationInfo": {
    "threeDSReqAuthData": "string",
    "threeDSReqAuthMethod": "01",
    "threeDSReqAuthTimestamp": "stringstring"
  },
  "threeDSRequestorChallengeInd": "01",
  "threeDSRequestorID": "string",
  "threeDSRequestorName": "string",
  "threeDSRequestorPriorAuthenticationInfo": {
    "threeDSReqPriorAuthData": "string",
    "threeDSReqPriorAuthMethod": "01",
    "threeDSReqPriorAuthTimestamp": "stringstring",
    "threeDSReqPriorRef": "stringstringstringstringstringstring"
  },
  "threeDSRequestorURL": "string",
  "transType": "01",
  "transactionType": "goodsOrServicePurchase",
  "whiteListStatus": "string",
  "workPhone": {
    "cc": "str",
    "subscriber": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acctInfo|[AcctInfo](#schemaacctinfo)|false|none|Additional information about the cardholder’s account provided by the 3DS Requestor.|
|acctType|string|false|none|Indicates the type of account. For example, for a multi-account card product. Length: 2 characters. Allowed values:<br>* **01** — Not applicable<br>* **02** — Credit<br>* **03** — Debit|
|acquirerBIN|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.|
|acquirerMerchantID|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant's acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.|
|addrMatch|string|false|none|Indicates whether the cardholder shipping address and cardholder billing address are the same. Allowed values:<br>* **Y** — Shipping address matches billing address.<br>* **N** — Shipping address does not match billing address.|
|authenticationOnly|boolean|false|none|**Deprecated.** If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.|
|challengeIndicator|string|false|none|**Deprecated.** Possibility to specify a preference for receiving a challenge from the issuer.<br>Allowed values:<br>* `noPreference`<br>* `requestNoChallenge`<br>* `requestChallenge`<br>* `requestChallengeAsMandate`<br>|
|deviceChannel|string|true|none|The environment of the shopper.<br>Allowed values:<br>* `app`<br>* `browser`|
|deviceRenderOptions|[DeviceRenderOptions](#schemadevicerenderoptions)|false|none|Display options for the 3D Secure 2 SDK.<br>Optional and only for `deviceChannel` **app**.|
|homePhone|[Phone](#schemaphone)|false|none|The home phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|
|mcc|string|false|none|Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme.|
|merchantName|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters.<br>> Optional for a [full 3D Secure 2 integration](https://docs.adyen.com/online-payments/3d-secure/native-3ds2/api-integration). Use this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name already configured on your account.|
|messageVersion|string|false|none|The `messageVersion` value indicating the 3D Secure 2 protocol version.|
|mobilePhone|[Phone](#schemaphone)|false|none|The mobile phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|
|notificationURL|string|false|none|URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**.|
|payTokenInd|boolean|false|none|Value **true** indicates that the transaction was de-tokenised prior to being received by the ACS.|
|paymentAuthenticationUseCase|string|false|none|Indicates the type of payment for which an authentication is requested (message extension)|
|purchaseInstalData|string|false|none|Indicates the maximum number of authorisations permitted for instalment payments. Length: 1–3 characters.|
|recurringExpiry|string|false|none|Date after which no further authorisations shall be performed. Format: YYYYMMDD|
|recurringFrequency|string|false|none|Indicates the minimum number of days between authorisations. Maximum length: 4 characters.|
|sdkAppID|string|false|none|The `sdkAppID` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**.|
|sdkEncData|string|false|none|The `sdkEncData` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**.|
|sdkEphemPubKey|[SDKEphemPubKey](#schemasdkephempubkey)|false|none|The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**.|
|sdkMaxTimeout|integer(int32)|false|none|The maximum amount of time in minutes for the 3D Secure 2 authentication process.<br>Optional and only for `deviceChannel` set to **app**. Defaults to **60** minutes.|
|sdkReferenceNumber|string|false|none|The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK.<br>Only for `deviceChannel` set to **app**.|
|sdkTransID|string|false|none|The `sdkTransID` value as received from the 3D Secure 2 SDK.<br>Only for `deviceChannel` set to **app**.|
|sdkVersion|string|false|none|Version of the 3D Secure 2 mobile SDK. <br>Only for `deviceChannel` set to **app**.|
|threeDSCompInd|string|false|none|Completion indicator for the device fingerprinting.|
|threeDSRequestorAuthenticationInd|string|false|none|Indicates the type of Authentication request.|
|threeDSRequestorAuthenticationInfo|[ThreeDSRequestorAuthenticationInfo](#schemathreedsrequestorauthenticationinfo)|false|none|Information about how the 3DS Requestor authenticated the cardholder before or during the transaction|
|threeDSRequestorChallengeInd|string|false|none|Indicates whether a challenge is requested for this transaction. Possible values:<br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only|
|threeDSRequestorID|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2.|
|threeDSRequestorName|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2.|
|threeDSRequestorPriorAuthenticationInfo|[ThreeDSRequestorPriorAuthenticationInfo](#schemathreedsrequestorpriorauthenticationinfo)|false|none|Information about how the 3DS Requestor authenticated the cardholder as part of a previous 3DS transaction.|
|threeDSRequestorURL|string|false|none|URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process.|
|transType|string|false|none|Identifies the type of transaction being authenticated. Length: 2 characters. Allowed values:<br>* **01** — Goods/Service Purchase<br>* **03** — Check Acceptance<br>* **10** — Account Funding<br>* **11** — Quasi-Cash Transaction<br>* **28** — Prepaid Activation and Load|
|transactionType|string|false|none|Identify the type of the transaction being authenticated.|
|whiteListStatus|string|false|none|The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0.|
|workPhone|[Phone](#schemaphone)|false|none|The work phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|

#### Enumerated Values

|Property|Value|
|---|---|
|acctType|01|
|acctType|02|
|acctType|03|
|addrMatch|Y|
|addrMatch|N|
|challengeIndicator|noPreference|
|challengeIndicator|requestNoChallenge|
|challengeIndicator|requestChallenge|
|challengeIndicator|requestChallengeAsMandate|
|threeDSRequestorChallengeInd|01|
|threeDSRequestorChallengeInd|02|
|threeDSRequestorChallengeInd|03|
|threeDSRequestorChallengeInd|04|
|threeDSRequestorChallengeInd|05|
|threeDSRequestorChallengeInd|06|
|transType|01|
|transType|03|
|transType|10|
|transType|11|
|transType|28|
|transactionType|goodsOrServicePurchase|
|transactionType|checkAcceptance|
|transactionType|accountFunding|
|transactionType|quasiCashTransaction|
|transactionType|prepaidActivationAndLoad|

<h2 id="tocS_ThreeDS2Result">ThreeDS2Result</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2result"></a>
<a id="schema_ThreeDS2Result"></a>
<a id="tocSthreeds2result"></a>
<a id="tocsthreeds2result"></a>

```json
{
  "authenticationValue": "string",
  "cavvAlgorithm": "string",
  "challengeCancel": "01",
  "dsTransID": "string",
  "eci": "string",
  "exemptionIndicator": "lowValue",
  "messageVersion": "string",
  "riskScore": "string",
  "threeDSRequestorChallengeInd": "01",
  "threeDSServerTransID": "string",
  "timestamp": "string",
  "transStatus": "string",
  "transStatusReason": "string",
  "whiteListStatus": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationValue|string|false|none|The `authenticationValue` value as defined in the 3D Secure 2 specification.|
|cavvAlgorithm|string|false|none|The algorithm used by the ACS to calculate the authentication value, only for Cartes Bancaires integrations.|
|challengeCancel|string|false|none|Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. For possible values, refer to [3D Secure API reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata).|
|dsTransID|string|false|none|The `dsTransID` value as defined in the 3D Secure 2 specification.|
|eci|string|false|none|The `eci` value as defined in the 3D Secure 2 specification.|
|exemptionIndicator|string|false|none|Indicates the exemption type that was applied by the issuer to the authentication, if exemption applied.<br>Allowed values:<br>* `lowValue`<br>* `secureCorporate`<br>* `trustedBeneficiary`<br>* `transactionRiskAnalysis`<br>|
|messageVersion|string|false|none|The `messageVersion` value as defined in the 3D Secure 2 specification.|
|riskScore|string|false|none|Risk score calculated by Cartes Bancaires Directory Server (DS).|
|threeDSRequestorChallengeInd|string|false|none|Indicates whether a challenge is requested for this transaction. Possible values:<br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only|
|threeDSServerTransID|string|false|none|The `threeDSServerTransID` value as defined in the 3D Secure 2 specification.|
|timestamp|string|false|none|The `timestamp` value of the 3D Secure 2 authentication.|
|transStatus|string|false|none|The `transStatus` value as defined in the 3D Secure 2 specification.|
|transStatusReason|string|false|none|Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).|
|whiteListStatus|string|false|none|The `whiteListStatus` value as defined in the 3D Secure 2 specification.|

#### Enumerated Values

|Property|Value|
|---|---|
|challengeCancel|01|
|challengeCancel|02|
|challengeCancel|03|
|challengeCancel|04|
|challengeCancel|05|
|challengeCancel|06|
|challengeCancel|07|
|exemptionIndicator|lowValue|
|exemptionIndicator|secureCorporate|
|exemptionIndicator|trustedBeneficiary|
|exemptionIndicator|transactionRiskAnalysis|
|threeDSRequestorChallengeInd|01|
|threeDSRequestorChallengeInd|02|
|threeDSRequestorChallengeInd|03|
|threeDSRequestorChallengeInd|04|
|threeDSRequestorChallengeInd|05|
|threeDSRequestorChallengeInd|06|

<h2 id="tocS_ThreeDS2ResultRequest">ThreeDS2ResultRequest</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2resultrequest"></a>
<a id="schema_ThreeDS2ResultRequest"></a>
<a id="tocSthreeds2resultrequest"></a>
<a id="tocsthreeds2resultrequest"></a>

```json
{
  "merchantAccount": "string",
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|pspReference|string|true|none|The pspReference returned in the /authorise call.|

<h2 id="tocS_ThreeDS2ResultResponse">ThreeDS2ResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2resultresponse"></a>
<a id="schema_ThreeDS2ResultResponse"></a>
<a id="tocSthreeds2resultresponse"></a>
<a id="tocsthreeds2resultresponse"></a>

```json
{
  "threeDS2Result": {
    "authenticationValue": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "dsTransID": "string",
    "eci": "string",
    "exemptionIndicator": "lowValue",
    "messageVersion": "string",
    "riskScore": "string",
    "threeDSRequestorChallengeInd": "01",
    "threeDSServerTransID": "string",
    "timestamp": "string",
    "transStatus": "string",
    "transStatusReason": "string",
    "whiteListStatus": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threeDS2Result|[ThreeDS2Result](#schemathreeds2result)|false|none|The result of the 3D Secure 2 authentication.|

<h2 id="tocS_ThreeDSRequestorAuthenticationInfo">ThreeDSRequestorAuthenticationInfo</h2>
<!-- backwards compatibility -->
<a id="schemathreedsrequestorauthenticationinfo"></a>
<a id="schema_ThreeDSRequestorAuthenticationInfo"></a>
<a id="tocSthreedsrequestorauthenticationinfo"></a>
<a id="tocsthreedsrequestorauthenticationinfo"></a>

```json
{
  "threeDSReqAuthData": "string",
  "threeDSReqAuthMethod": "01",
  "threeDSReqAuthTimestamp": "stringstring"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threeDSReqAuthData|string|false|none|Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.|
|threeDSReqAuthMethod|string|false|none|Mechanism used by the Cardholder to authenticate to the 3DS Requestor. Allowed values:<br>* **01** — No 3DS Requestor authentication occurred (for example, cardholder “logged in” as guest).<br>* **02** — Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials.<br>* **03** — Login to the cardholder account at the 3DS Requestor system using federated ID.<br>* **04** — Login to the cardholder account at the 3DS Requestor system using issuer credentials.<br>* **05** — Login to the cardholder account at the 3DS Requestor system using third-party authentication.<br>* **06** — Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator.|
|threeDSReqAuthTimestamp|string|false|none|Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM|

#### Enumerated Values

|Property|Value|
|---|---|
|threeDSReqAuthMethod|01|
|threeDSReqAuthMethod|02|
|threeDSReqAuthMethod|03|
|threeDSReqAuthMethod|04|
|threeDSReqAuthMethod|05|
|threeDSReqAuthMethod|06|

<h2 id="tocS_ThreeDSRequestorPriorAuthenticationInfo">ThreeDSRequestorPriorAuthenticationInfo</h2>
<!-- backwards compatibility -->
<a id="schemathreedsrequestorpriorauthenticationinfo"></a>
<a id="schema_ThreeDSRequestorPriorAuthenticationInfo"></a>
<a id="tocSthreedsrequestorpriorauthenticationinfo"></a>
<a id="tocsthreedsrequestorpriorauthenticationinfo"></a>

```json
{
  "threeDSReqPriorAuthData": "string",
  "threeDSReqPriorAuthMethod": "01",
  "threeDSReqPriorAuthTimestamp": "stringstring",
  "threeDSReqPriorRef": "stringstringstringstringstringstring"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threeDSReqPriorAuthData|string|false|none|Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.|
|threeDSReqPriorAuthMethod|string|false|none|Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor. Allowed values:<br>* **01** — Frictionless authentication occurred by ACS.<br>* **02** — Cardholder challenge occurred by ACS.<br>* **03** — AVS verified.<br>* **04** — Other issuer methods.|
|threeDSReqPriorAuthTimestamp|string|false|none|Date and time in UTC of the prior cardholder authentication. Format: YYYYMMDDHHMM|
|threeDSReqPriorRef|string|false|none|This data element provides additional information to the ACS to determine the best approach for handing a request. This data element contains an ACS Transaction ID for a prior authenticated transaction. For example, the first recurring transaction that was authenticated with the cardholder. Length: 30 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|threeDSReqPriorAuthMethod|01|
|threeDSReqPriorAuthMethod|02|
|threeDSReqPriorAuthMethod|03|
|threeDSReqPriorAuthMethod|04|

<h2 id="tocS_ThreeDSecureData">ThreeDSecureData</h2>
<!-- backwards compatibility -->
<a id="schemathreedsecuredata"></a>
<a id="schema_ThreeDSecureData"></a>
<a id="tocSthreedsecuredata"></a>
<a id="tocsthreedsecuredata"></a>

```json
{
  "authenticationResponse": "Y",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "challengeCancel": "01",
  "directoryResponse": "A",
  "dsTransID": "string",
  "eci": "string",
  "riskScore": "string",
  "threeDSVersion": "string",
  "tokenAuthenticationVerificationValue": "string",
  "transStatusReason": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationResponse|string|false|none|In 3D Secure 2, this is the `transStatus` from the challenge result. If the transaction was frictionless, omit this parameter.<br><br>|
|cavv|string(byte)|false|none|The cardholder authentication value (base64 encoded, 20 bytes in a decoded form).|
|cavvAlgorithm|string|false|none|The CAVV algorithm used. Include this only for 3D Secure 1.|
|challengeCancel|string|false|none|Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. For possible values, refer to [3D Secure API reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata).|
|directoryResponse|string|false|none|In 3D Secure 2, this is the `transStatus` from the `ARes`.<br><br>|
|dsTransID|string|false|none|Supported for 3D Secure 2. The unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction.|
|eci|string|false|none|The electronic commerce indicator.|
|riskScore|string|false|none|Risk score calculated by Directory Server (DS). Required for Cartes Bancaires integrations.|
|threeDSVersion|string|false|none|The version of the 3D Secure protocol.|
|tokenAuthenticationVerificationValue|string(byte)|false|none|Network token authentication verification value (TAVV). The network token cryptogram.|
|transStatusReason|string|false|none|Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).|
|xid|string(byte)|false|none|Supported for 3D Secure 1. The transaction identifier (Base64-encoded, 20 bytes in a decoded form).|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationResponse|Y|
|authenticationResponse|N|
|authenticationResponse|U|
|authenticationResponse|A|
|challengeCancel|01|
|challengeCancel|02|
|challengeCancel|03|
|challengeCancel|04|
|challengeCancel|05|
|challengeCancel|06|
|challengeCancel|07|
|directoryResponse|A|
|directoryResponse|C|
|directoryResponse|D|
|directoryResponse|I|
|directoryResponse|N|
|directoryResponse|R|
|directoryResponse|U|
|directoryResponse|Y|

<h2 id="tocS_VoidPendingRefundRequest">VoidPendingRefundRequest</h2>
<!-- backwards compatibility -->
<a id="schemavoidpendingrefundrequest"></a>
<a id="schema_VoidPendingRefundRequest"></a>
<a id="tocSvoidpendingrefundrequest"></a>
<a id="tocsvoidpendingrefundrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "merchantAccount": "string",
  "modificationAmount": {
    "currency": "str",
    "value": 0
  },
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "originalMerchantReference": "string",
  "originalReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductAccordingToSplitRatio",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|modificationAmount|[Amount](#schemaamount)|false|none|The amount that needs to be captured/refunded. Required for `/capture` and `/refund`, not allowed for `/cancel`. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|originalMerchantReference|string|false|none|The original merchant reference to cancel.|
|originalReference|string|false|none|The original pspReference of the payment to modify.<br>This reference is returned in:<br>* authorisation response<br>* authorisation notification<br><br>|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).|
|tenderReference|string|false|none|The transaction reference provided by the PED. For point-of-sale integrations only.|
|uniqueTerminalId|string|false|none|Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.|
