<h1 id="adyen-binlookup-api">Adyen BinLookup API v54</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The BIN Lookup API provides endpoints for retrieving information, such as cost estimates, and 3D Secure supported version based on a given BIN.

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
The BinLookup API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://pal-test.adyen.com/pal/servlet/BinLookup/v54/get3dsAvailability
```

## Going live

To authenticate to the live endpoints, you need an [API credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer Area.

The live endpoint URLs contain a prefix which is unique to your company account:
```

https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/BinLookup/v54/get3dsAvailability
```

Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.

Base URLs:

* <a href="https://pal-test.adyen.com/pal/servlet/BinLookup/v54">https://pal-test.adyen.com/pal/servlet/BinLookup/v54</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-binlookup-api-general">General</h1>

## Check if 3D Secure is available

<a id="opIdpost-get3dsAvailability"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/BinLookup/v54/get3dsAvailability \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "cardNumber": "4111111111111111"
  }'
```

`POST /get3dsAvailability`

Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.

For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "cardNumber": "4111111111111111"
}
```

<h3 id="check-if-3d-secure-is-available-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ThreeDSAvailabilityRequest](#schemathreedsavailabilityrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» brands|body|[string]|false|List of brands.|
|» cardNumber|body|string|false|Card number or BIN.|
|» merchantAccount|body|string|true|The merchant account identifier.|
|» recurringDetailReference|body|string|false|A recurring detail reference corresponding to a card.|
|» shopperReference|body|string|false|The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).|

> Example responses

> 200 Response

```json
{
  "threeDS1Supported": true,
  "threeDS2CardRangeDetails": [],
  "threeDS2supported": false
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
}
```

> 401 Response

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

<h3 id="check-if-3d-secure-is-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ThreeDSAvailabilityResponse](#schemathreedsavailabilityresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a fees cost estimate

<a id="opIdpost-getCostEstimate"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/BinLookup/v54/getCostEstimate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "value": 1234,
      "currency": "EUR"
    },
    "assumptions": {
      "assumeLevel3Data": true,
      "assume3DSecureAuthenticated": true
    },
    "cardNumber": "5101180000000007",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "merchantDetails": {
      "countryCode": "NL",
      "mcc": "7411",
      "enrolledIn3DSecure": true
    },
    "shopperInteraction": "Ecommerce"
  }'
```

`POST /getCostEstimate`

>This API is available only for merchants operating in Australia, the EU, and the UK.

Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.

To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).

> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.

> Body parameter

```json
{
  "amount": {
    "value": 1234,
    "currency": "EUR"
  },
  "assumptions": {
    "assumeLevel3Data": true,
    "assume3DSecureAuthenticated": true
  },
  "cardNumber": "5101180000000007",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "merchantDetails": {
    "countryCode": "NL",
    "mcc": "7411",
    "enrolledIn3DSecure": true
  },
  "shopperInteraction": "Ecommerce"
}
```

<h3 id="get-a-fees-cost-estimate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CostEstimateRequest](#schemacostestimaterequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The transaction amount used as a base for the cost estimation.|
|» assumptions|body|[CostEstimateAssumptions](#schemacostestimateassumptions)|false|Assumptions made for the expected characteristics of the transaction, for which the charges are being estimated.|
|» cardNumber|body|string|false|The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.<br><br>> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.|
|» encryptedCardNumber|body|string|false|Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.<br><br>> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.|
|» merchantAccount|body|string|true|The merchant account identifier you want to process the (transaction) request with.|
|» merchantDetails|body|[MerchantDetails](#schemamerchantdetails)|false|Additional data for merchants who don't use Adyen as the payment authorisation gateway.|
|» recurring|body|[Recurring](#schemarecurring)|false|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/online-payments/tokenization).|
|» selectedRecurringDetailReference|body|string|false|The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail.|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|

> Example responses

> 200 Response

```json
{
  "costEstimateAmount": {
    "currency": "EUR",
    "value": 12
  },
  "resultCode": "Success"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
}
```

> 401 Response

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

<h3 id="get-a-fees-cost-estimate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CostEstimateResponse](#schemacostestimateresponse)|
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

<h2 id="tocS_BinDetail">BinDetail</h2>
<!-- backwards compatibility -->
<a id="schemabindetail"></a>
<a id="schema_BinDetail"></a>
<a id="tocSbindetail"></a>
<a id="tocsbindetail"></a>

```json
{
  "issuerCountry": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuerCountry|string|false|none|The country where the card was issued.|

<h2 id="tocS_CardBin">CardBin</h2>
<!-- backwards compatibility -->
<a id="schemacardbin"></a>
<a id="schema_CardBin"></a>
<a id="tocScardbin"></a>
<a id="tocscardbin"></a>

```json
{
  "bin": "string",
  "commercial": true,
  "fundingSource": "string",
  "fundsAvailability": "string",
  "issuerBin": "string",
  "issuingBank": "string",
  "issuingCountry": "string",
  "issuingCurrency": "string",
  "paymentMethod": "string",
  "payoutEligible": "string",
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bin|string|false|none|The first 6 digit of the card number. Enable this field via merchant account settings.|
|commercial|boolean|false|none|If true, it indicates a commercial card. Enable this field via merchant account settings.|
|fundingSource|string|false|none|The card funding source. Valid values are:<br>* CHARGE<br>* CREDIT<br>* DEBIT<br>* DEFERRED_DEBIT<br>* PREPAID<br>* PREPAID_RELOADABLE<br>* PREPAID_NONRELOADABLE<br>> Enable this field via merchant account settings.|
|fundsAvailability|string|false|none|Indicates availability of funds.<br><br>Visa:<br>* "I" (fast funds are supported)<br>* "N" (otherwise)<br><br>Mastercard:<br>* "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)<br>* "N" (otherwise)<br>> Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U".|
|issuerBin|string|false|none|The first 8 digit of the card number. Enable this field via merchant account settings.|
|issuingBank|string|false|none|The issuing bank of the card.|
|issuingCountry|string|false|none|The country where the card was issued from.|
|issuingCurrency|string|false|none|The currency of the card.|
|paymentMethod|string|false|none|The payment method associated with the card (e.g. visa, mc, or amex).|
|payoutEligible|string|false|none|Indicates whether a payout is eligible or not for this card.<br><br>Visa:<br>* "Y"<br>* "N"<br><br>Mastercard:<br>* "Y" (domestic and cross-border)<br>* "D" (only domestic)<br>* "N" (no MoneySend)<br>* "U" (unknown)<br>> Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U".|
|summary|string|false|none|The last four digits of the card number.|

<h2 id="tocS_CostEstimateAssumptions">CostEstimateAssumptions</h2>
<!-- backwards compatibility -->
<a id="schemacostestimateassumptions"></a>
<a id="schema_CostEstimateAssumptions"></a>
<a id="tocScostestimateassumptions"></a>
<a id="tocscostestimateassumptions"></a>

```json
{
  "assume3DSecureAuthenticated": true,
  "assumeLevel3Data": true,
  "installments": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assume3DSecureAuthenticated|boolean|false|none|If true, the cardholder is expected to successfully authorise via 3D Secure.|
|assumeLevel3Data|boolean|false|none|If true, the transaction is expected to have valid Level 3 data.|
|installments|integer(int32)|false|none|If not zero, the number of installments.|

<h2 id="tocS_CostEstimateRequest">CostEstimateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacostestimaterequest"></a>
<a id="schema_CostEstimateRequest"></a>
<a id="tocScostestimaterequest"></a>
<a id="tocscostestimaterequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "assumptions": {
    "assume3DSecureAuthenticated": true,
    "assumeLevel3Data": true,
    "installments": 0
  },
  "cardNumber": "string",
  "encryptedCardNumber": "string",
  "merchantAccount": "string",
  "merchantDetails": {
    "countryCode": "st",
    "enrolledIn3DSecure": true,
    "mcc": "string"
  },
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "selectedRecurringDetailReference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The transaction amount used as a base for the cost estimation.|
|assumptions|[CostEstimateAssumptions](#schemacostestimateassumptions)|false|none|Assumptions made for the expected characteristics of the transaction, for which the charges are being estimated.|
|cardNumber|string|false|none|The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.<br><br>> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.|
|encryptedCardNumber|string|false|none|Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.<br><br>> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.|
|merchantAccount|string|true|none|The merchant account identifier you want to process the (transaction) request with.|
|merchantDetails|[MerchantDetails](#schemamerchantdetails)|false|none|Additional data for merchants who don't use Adyen as the payment authorisation gateway.|
|recurring|[Recurring](#schemarecurring)|false|none|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/online-payments/tokenization).|
|selectedRecurringDetailReference|string|false|none|The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail.|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|

#### Enumerated Values

|Property|Value|
|---|---|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_CostEstimateResponse">CostEstimateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacostestimateresponse"></a>
<a id="schema_CostEstimateResponse"></a>
<a id="tocScostestimateresponse"></a>
<a id="tocscostestimateresponse"></a>

```json
{
  "cardBin": {
    "bin": "string",
    "commercial": true,
    "fundingSource": "string",
    "fundsAvailability": "string",
    "issuerBin": "string",
    "issuingBank": "string",
    "issuingCountry": "string",
    "issuingCurrency": "string",
    "paymentMethod": "string",
    "payoutEligible": "string",
    "summary": "string"
  },
  "costEstimateAmount": {
    "currency": "str",
    "value": 0
  },
  "costEstimateReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardBin|[CardBin](#schemacardbin)|false|none|Card BIN details.|
|costEstimateAmount|[Amount](#schemaamount)|false|none|The estimated cost (scheme fee + interchange) in the settlement currency. If the settlement currency cannot be determined, the fee in EUR is returned.|
|costEstimateReference|string|false|none|Adyen's 16-character reference associated with the request.|
|resultCode|string|false|none|The result of the cost estimation.|

<h2 id="tocS_DSPublicKeyDetail">DSPublicKeyDetail</h2>
<!-- backwards compatibility -->
<a id="schemadspublickeydetail"></a>
<a id="schema_DSPublicKeyDetail"></a>
<a id="tocSdspublickeydetail"></a>
<a id="tocsdspublickeydetail"></a>

```json
{
  "brand": "string",
  "directoryServerId": "string",
  "fromSDKVersion": "string",
  "publicKey": "string",
  "rootCertificates": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|false|none|Card brand.|
|directoryServerId|string|false|none|Directory Server (DS) identifier.|
|fromSDKVersion|string|false|none|The version of the mobile 3D Secure 2 SDK. For the possible values, refer to the versions in [Adyen 3DS2 Android](https://github.com/Adyen/adyen-3ds2-android/releases) and [Adyen 3DS2 iOS](https://github.com/Adyen/adyen-3ds2-ios/releases).|
|publicKey|string(byte)|false|none|Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key.|
|rootCertificates|string|false|none|Directory Server root certificates. The 3D Secure 2 SDK verifies the ACS signed content using the rootCertificates.|

<h2 id="tocS_MerchantDetails">MerchantDetails</h2>
<!-- backwards compatibility -->
<a id="schemamerchantdetails"></a>
<a id="schema_MerchantDetails"></a>
<a id="tocSmerchantdetails"></a>
<a id="tocsmerchantdetails"></a>

```json
{
  "countryCode": "st",
  "enrolledIn3DSecure": true,
  "mcc": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|2-letter ISO 3166 country code of the card acceptor location.<br>> This parameter is required for the merchants who don't use Adyen as the payment authorisation gateway.|
|enrolledIn3DSecure|boolean|false|none|If true, indicates that the merchant is enrolled in 3D Secure for the card network.|
|mcc|string|false|none|The merchant category code (MCC) is a four-digit number which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.<br><br>The list of MCCs can be found [here](https://en.wikipedia.org/wiki/Merchant_category_code).|

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

<h2 id="tocS_ThreeDS2CardRangeDetail">ThreeDS2CardRangeDetail</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2cardrangedetail"></a>
<a id="schema_ThreeDS2CardRangeDetail"></a>
<a id="tocSthreeds2cardrangedetail"></a>
<a id="tocsthreeds2cardrangedetail"></a>

```json
{
  "acsInfoInd": [
    "string"
  ],
  "brandCode": "string",
  "endRange": "string",
  "startRange": "string",
  "threeDS2Versions": [
    "string"
  ],
  "threeDSMethodURL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acsInfoInd|[string]|false|none|Provides additional information to the 3DS Server.<br>Possible values:<br>- 01 (Authentication is available at ACS)<br>- 02 (Attempts supported by ACS or DS)<br>- 03 (Decoupled authentication supported)<br>- 04 (Whitelisting supported)|
|brandCode|string|false|none|Card brand.|
|endRange|string|false|none|BIN end range.|
|startRange|string|false|none|BIN start range.|
|threeDS2Versions|[string]|false|none|Supported 3D Secure protocol versions|
|threeDSMethodURL|string|false|none|In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to.|

<h2 id="tocS_ThreeDSAvailabilityRequest">ThreeDSAvailabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemathreedsavailabilityrequest"></a>
<a id="schema_ThreeDSAvailabilityRequest"></a>
<a id="tocSthreedsavailabilityrequest"></a>
<a id="tocsthreedsavailabilityrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "brands": [
    "string"
  ],
  "cardNumber": "string",
  "merchantAccount": "string",
  "recurringDetailReference": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|brands|[string]|false|none|List of brands.|
|cardNumber|string|false|none|Card number or BIN.|
|merchantAccount|string|true|none|The merchant account identifier.|
|recurringDetailReference|string|false|none|A recurring detail reference corresponding to a card.|
|shopperReference|string|false|none|The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).|

<h2 id="tocS_ThreeDSAvailabilityResponse">ThreeDSAvailabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemathreedsavailabilityresponse"></a>
<a id="schema_ThreeDSAvailabilityResponse"></a>
<a id="tocSthreedsavailabilityresponse"></a>
<a id="tocsthreedsavailabilityresponse"></a>

```json
{
  "binDetails": {
    "issuerCountry": "string"
  },
  "dsPublicKeys": [
    {
      "brand": "string",
      "directoryServerId": "string",
      "fromSDKVersion": "string",
      "publicKey": "string",
      "rootCertificates": "string"
    }
  ],
  "threeDS1Supported": true,
  "threeDS2CardRangeDetails": [
    {
      "acsInfoInd": [
        "string"
      ],
      "brandCode": "string",
      "endRange": "string",
      "startRange": "string",
      "threeDS2Versions": [
        "string"
      ],
      "threeDSMethodURL": "string"
    }
  ],
  "threeDS2supported": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binDetails|[BinDetail](#schemabindetail)|false|none|Bin Group Details|
|dsPublicKeys|[[DSPublicKeyDetail](#schemadspublickeydetail)]|false|none|List of Directory Server (DS) public keys.|
|threeDS1Supported|boolean|false|none|Indicator if 3D Secure 1 is supported.|
|threeDS2CardRangeDetails|[[ThreeDS2CardRangeDetail](#schemathreeds2cardrangedetail)]|false|none|List of brand and card range pairs.|
|threeDS2supported|boolean|false|none|Indicator if 3D Secure 2 is supported.|
