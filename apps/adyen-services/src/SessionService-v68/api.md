<h1 id="pos-mobile-api">POS Mobile API v68</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

>This API is deprecated. Use the [SoftPOS configuration API](https://docs.adyen.com/api-explorer/softpos-configuration-api/latest/overview) instead.

The POS Mobile API is used in the mutual authentication flow between an Adyen Android or iOS [POS Mobile SDK](https://docs.adyen.com/point-of-sale/ipp-mobile/) and the Adyen payments platform.
The POS Mobile SDK for Android or iOS devices enables businesses to accept in-person payments using a commercial off-the-shelf (COTS) device like a phone. For example, Tap to Pay transactions, or transactions on a mobile device in combination with a card reader.

## Authentication
Each request to the POS Mobile API must be signed with an API key. [Generate your API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the Customer Area and then set this key to the `X-API-Key` header value.
You also need to have a [client key](https://docs.adyen.com/development-resources/client-side-authentication/). The client key is part of the setup but you won't need to use it in your integration later. Therefore, you don't need to specify allowed origins, and you don't need to store the key in your system. 
To access the live endpoints, you need to generate a new API key and client key in your live Customer Area.
## Versioning

The POS Mobile API handles versioning as part of the endpoint URL.

For example:
```
https://checkout-test.adyen.com/checkout/possdk/v68/sessions
```

## Going live

To access the live endpoints, you need an API key and client key from your live Customer Area.

The live endpoint URLs contain a prefix which is unique to your company account, for example:
```
https://{PREFIX}-checkout-live.adyenpayments.com/checkout/possdk/v68/sessions
```

Base URLs:

* <a href="https://checkout-test.adyen.com/checkout/possdk/v68">https://checkout-test.adyen.com/checkout/possdk/v68</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="pos-mobile-api-general">General</h1>

## Create a communication session

<a id="opIdpost-sessions"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/checkout/possdk/v68/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "setupToken": "SETUP_TOKEN",
    "store": "YOUR_STORE_ID"
  }'
```

`POST /sessions`

<aside class="warning">
This operation is deprecated
</aside>

Establishes a secure communications session between the POS Mobile SDK and the Adyen payments platform, through mutual authentication. 
The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.
>This request applies to **mobile in-person** transactions. You cannot use this request to create online payments sessions. 



> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "setupToken": "SETUP_TOKEN",
  "store": "YOUR_STORE_ID"
}
```

<h3 id="create-a-communication-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSessionRequest](#schemacreatesessionrequest)|false|none|
|» merchantAccount|body|string|true|The unique identifier of your merchant account.|
|» setupToken|body|string|true|The setup token provided by the POS Mobile SDK. <br>- When using the Android POS Mobile SDK, obtain the token through the `AuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`. <br>- When using the iOS POS Mobile SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.|
|» store|body|string|false|The unique identifier of the store that you want to process transactions for.|

> Example responses

> 201 Response

```json
{
  "id": "APP_SESSION_ID",
  "installationId": "INSTALLATION_ID",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "store": "YOUR_STORE_ID",
  "sdkData": "SDK_DATA_BLOB"
}
```

<h3 id="create-a-communication-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[CreateSessionResponse](#schemacreatesessionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_CreateSessionRequest">CreateSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesessionrequest"></a>
<a id="schema_CreateSessionRequest"></a>
<a id="tocScreatesessionrequest"></a>
<a id="tocscreatesessionrequest"></a>

```json
{
  "merchantAccount": "string",
  "setupToken": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The unique identifier of your merchant account.|
|setupToken|string|true|none|The setup token provided by the POS Mobile SDK. <br>- When using the Android POS Mobile SDK, obtain the token through the `AuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`. <br>- When using the iOS POS Mobile SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.|
|store|string|false|none|The unique identifier of the store that you want to process transactions for.|

<h2 id="tocS_CreateSessionResponse">CreateSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesessionresponse"></a>
<a id="schema_CreateSessionResponse"></a>
<a id="tocScreatesessionresponse"></a>
<a id="tocscreatesessionresponse"></a>

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
|id|string|false|none|The unique identifier of the session.|
|installationId|string|false|none|The unique identifier of the SDK installation. If you create the [Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) transaction request on your backend, use this as the `POIID` in the `MessageHeader` of the request.|
|merchantAccount|string|false|none|The unique identifier of your merchant account.|
|sdkData|string|false|none|The data that the SDK uses to authenticate responses from the Adyen payments platform. Pass this value to your POS app.|
|store|string|false|none|The unique identifier of the store that you want to process transactions for.|
