<h1 id="softpos-configuration-api">SoftPOS configuration API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The SoftPOS configuration API is used in the mutual authentication flow between an Adyen Android or iOS [Mobile SDK](https://docs.adyen.com/point-of-sale/ipp-mobile/) and the Adyen payments platform.
The Mobile SDK for Android or iOS devices enables businesses to accept in-person payments using a commercial off-the-shelf (COTS) device like a phone. 
For example, Tap to Pay transactions, or transactions on a mobile device in combination with a card reader.

## Authentication
Each request to the POS Mobile API must be signed with an API key. [Generate your API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the Customer Area and then set this key to the `X-API-Key` header value.
You also need to have a [client key](https://docs.adyen.com/development-resources/client-side-authentication/). The client key is part of the setup but you will not need to use it in your integration later. Therefore, when you set up the client key, you do not need to specify allowed origins, and you do not need to store the key in your system. 
To access the live endpoints, you need to generate a new API key and client key in your live Customer Area.
## Versioning

The POS Mobile API handles versioning as part of the endpoint URL.

For example:
```
https://softposconfig-test.adyen.com/softposconfig/v{version}/auth/certificate
```

## Going live
To access the live endpoints, you need an API key and client key from your live Customer Area, and switch to the live endpoint that is geographically closest to your location.
### Australia:
https://softposconfig-live-au.adyen.com/softposconfig/v{version}/auth/certificate
### Asia Pacific South East:
https://softposconfig-live-apse.adyen.com/softposconfig/v{version}/auth/certificate
### Europe:
https://softposconfig-live.adyen.com/softposconfig/v{version}/auth/certificate
### North East Asia:
https://softposconfig-live-nea.adyen.com/softposconfig/v{version}/auth/certificate
### United States:
https://softposconfig-live-us.adyen.com/softposconfig/v3/auth/certificate
## Methods

Base URLs:

* <a href="https://softposconfig-test.adyen.com/softposconfig/v3">https://softposconfig-test.adyen.com/softposconfig/v3</a> - Test environment

* <a href="https://softposconfig-live-au.adyen.com/softposconfig/v3">https://softposconfig-live-au.adyen.com/softposconfig/v3</a> - Live environment for Australia

* <a href="https://softposconfig-live-apse.adyen.com/softposconfig/v3">https://softposconfig-live-apse.adyen.com/softposconfig/v3</a> - Live environment for Asia Pacific South East

* <a href="https://softposconfig-live.adyen.com/softposconfig/v3">https://softposconfig-live.adyen.com/softposconfig/v3</a> - Live environment for Europe

* <a href="https://softposconfig-live-nea.adyen.com/softposconfig/v3">https://softposconfig-live-nea.adyen.com/softposconfig/v3</a> - Live environment for North East Asia

* <a href="https://softposconfig-live-us.adyen.com/softposconfig/v3">https://softposconfig-live-us.adyen.com/softposconfig/v3</a> - Live environment for United States of America

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="softpos-configuration-api-session-authentication">Session authentication</h1>

## Create a communication session

<a id="opIdpost-auth-certificate"></a>

> Code samples

```bash
curl https://softposconfig-test.adyen.com/softposconfig/v3/auth/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "store": "YOUR_STORE_REFERENCE",
    "setupToken": "SETUP_TOKEN"
  }'
```

`POST /auth/certificate`

Establishes a secure communication session between the Mobile SDK and the Adyen payments platform, through mutual authentication. The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "store": "YOUR_STORE_REFERENCE",
  "setupToken": "SETUP_TOKEN"
}
```

<h3 id="create-a-communication-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-Key|header|string|false|The API key to authenticate API requests.|
|body|body|[CertificateLoadingRequest](#schemacertificateloadingrequest)|false|none|
|» merchantAccount|body|string|true|The unique identifier of your merchant account.|
|» setupToken|body|string|true|The setup token provided by the SDK in a Mobile solution for in-person payments. <br>- When using the Android SDK, obtain the token through the `MerchantAuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`. <br>- When using the iOS SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.|
|» store|body|string|false|The reference of the store that you want to process transactions for. Do not include this parameter if your account structure uses merchant accounts as stores, or if you are a registered payment facilitator.|
|» subMerchantData|body|[SubMerchantData](#schemasubmerchantdata)|false|The details of the sub-merchant that you want to process transactions for.Required if you are a registered payment facilitator. Do not include this parameter if you are not a payment facilitator.|

> Example responses

> 201 Response

```json
{
  "id": "APP_SESSION_ID",
  "installationId": "INSTALLATION_ID",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "store": "YOUR_STORE_REFERENCE",
  "sdkData": "SDK_DATA_BLOB"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/bad-request",
  "title": "Bad request",
  "status": 400,
  "errorCode": "00_400"
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

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/unprocessable-entity",
  "title": "Unprocessable entity",
  "status": 422,
  "errorCode": "00_422"
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/internal",
  "title": "Internal error",
  "status": 500,
  "errorCode": "00_500"
}
```

<h3 id="create-a-communication-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK - the request has succeeded.|[CertificateLoadingResponse](#schemacertificateloadingresponse)|
|400|Bad Request|Bad request - validation failed.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable entity - session request could not be processed.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal server error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CertificateLoadingRequest">CertificateLoadingRequest</h2>
<!-- backwards compatibility -->
<a id="schemacertificateloadingrequest"></a>
<a id="schema_CertificateLoadingRequest"></a>
<a id="tocScertificateloadingrequest"></a>
<a id="tocscertificateloadingrequest"></a>

```json
{
  "merchantAccount": "string",
  "setupToken": "string",
  "store": "string",
  "subMerchantData": {
    "city": "string",
    "country": "string",
    "displayName": "string",
    "email": "string",
    "id": "string",
    "mcc": "string",
    "name": "string",
    "phoneNumber": "string",
    "postalCode": "string",
    "state": "string",
    "street": "string",
    "taxId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The unique identifier of your merchant account.|
|setupToken|string|true|none|The setup token provided by the SDK in a Mobile solution for in-person payments. <br>- When using the Android SDK, obtain the token through the `MerchantAuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`. <br>- When using the iOS SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.|
|store|string|false|none|The reference of the store that you want to process transactions for. Do not include this parameter if your account structure uses merchant accounts as stores, or if you are a registered payment facilitator.|
|subMerchantData|[SubMerchantData](#schemasubmerchantdata)|false|none|The details of the sub-merchant that you want to process transactions for.Required if you are a registered payment facilitator. Do not include this parameter if you are not a payment facilitator.|

<h2 id="tocS_CertificateLoadingResponse">CertificateLoadingResponse</h2>
<!-- backwards compatibility -->
<a id="schemacertificateloadingresponse"></a>
<a id="schema_CertificateLoadingResponse"></a>
<a id="tocScertificateloadingresponse"></a>
<a id="tocscertificateloadingresponse"></a>

```json
{
  "id": "string",
  "installationId": "string",
  "merchantAccount": "string",
  "sdkData": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the communication session.|
|installationId|string|false|none|The unique identifier of the SDK installation. If you create the [Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) transaction request on your backend, use this as the `POIID` in the `MessageHeader` of the request.|
|merchantAccount|string|false|none|The unique identifier of your merchant account.|
|sdkData|string|false|none|The data that the SDK uses to authenticate responses from the Adyen payments platform. Pass this value to your POS app.|
|store|string|false|none|The reference of the store that the transactions are processed for.|

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

<h2 id="tocS_SubMerchantData">SubMerchantData</h2>
<!-- backwards compatibility -->
<a id="schemasubmerchantdata"></a>
<a id="schema_SubMerchantData"></a>
<a id="tocSsubmerchantdata"></a>
<a id="tocssubmerchantdata"></a>

```json
{
  "city": "string",
  "country": "string",
  "displayName": "string",
  "email": "string",
  "id": "string",
  "mcc": "string",
  "name": "string",
  "phoneNumber": "string",
  "postalCode": "string",
  "state": "string",
  "street": "string",
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city of the sub-merchant's address.|
|country|string|false|none|The country/region of the sub-merchant's address, specified as the three-letter country code in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|displayName|string|true|none|The name of the sub-merchant as it should appear on the display of the mobile device during transactions.|
|email|string|false|none|The email address of the sub-merchant. Required for American Express.|
|id|string|true|none|Your unique identifier of the sub-merchant.|
|mcc|string|true|none|The sub-merchant's four-digit Merchant Category Code (MCC). This parameter is used to correctly route the transaction.|
|name|string|true|none|The name of the sub-merchant.|
|phoneNumber|string|false|none|The phone number of the sub-merchant. Required for American Express.|
|postalCode|string|false|none|The postal code of the sub-merchant's address, without dashes.|
|state|string|false|none|The state code of the sub-merchant's address, if applicable for the country or region.|
|street|string|false|none|The street name and house number of the sub-merchant's address.|
|taxId|string|false|none|The tax ID of the sub-merchant. Required only in Brazil and for Cartes Bancaires in France.<br>For Brazil, this is the 11-digit CPF or 14-digit CNPJ.<br>For France, this is the SIRET, with a maximum of 14 digits.|
