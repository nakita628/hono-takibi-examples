<h1 id="forward-api-webhook">Forward API webhook v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Forward API sends payment requests to third-party services on your behalf.

Adyen uses webhooks to notify you about the result of Forward API requests.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="forward-api-webhook-webhooks">Webhooks</h1>

## Forward API request completed

<a id="opIdpost-forwardApi.notification"></a>

`POST forwardApi.notification`

Adyen forwarded a payment request to the third-party service on your behalf.

> Body parameter

```json
{
  "type": "forwardApi.notification",
  "version": "1",
  "createdAt": "2023-02-27T16:14:06+01:00",
  "environment": "test",
  "data": {
    "pspReference": "QFQTPCQ8HXSKGK82",
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
    "scheme": "visa",
    "externalPsp": "adyen",
    "merchantReference": "YOUR_ORDER_REFERENCE",
    "externalPspTransactionStatus": "Authorised",
    "eventDateTime": "2023-02-27T16:14:06+01:00",
    "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT",
    "merchantCountryCode": "NL",
    "amountValue": 100,
    "amountCurrency": "EUR",
    "externalPartyResponseBody": "{\"status\": \"success\"}"
  }
}
```

<h3 id="forward-api-request-completed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ForwardApiNotificationRequest](#schemaforwardapinotificationrequest)|false|none|
|» createdAt|body|string(date-time)|true|The date and time when the webhook was created.|
|» data|body|[ForwardApiNotificationData](#schemaforwardapinotificationdata)|false|The details of the Forward API request.|
|» environment|body|string|false|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|true|The type of notification.|
|» version|body|string|false|The version of this webhook type.|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="forward-api-request-completed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ForwardApiNotificationResponse](#schemaforwardapinotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_ForwardApiNotificationData">ForwardApiNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemaforwardapinotificationdata"></a>
<a id="schema_ForwardApiNotificationData"></a>
<a id="tocSforwardapinotificationdata"></a>
<a id="tocsforwardapinotificationdata"></a>

```json
{
  "amountCurrency": "string",
  "amountValue": 0,
  "eventDateTime": "1970-01-01T00:00:00Z",
  "externalNetworkTxReferenceFound": true,
  "externalNetworkTxReferenceRequested": true,
  "externalPartyResponseBody": "string",
  "externalPsp": "string",
  "externalPspTransactionStatus": "string",
  "externalTransactionLinkIdFound": true,
  "externalTransactionLinkIdRequested": true,
  "merchantAccountCode": "string",
  "merchantCountryCode": "string",
  "merchantReference": "string",
  "pspReference": "string",
  "scheme": "string",
  "shopperReference": "string",
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountCurrency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|amountValue|integer(int64)|false|none|The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|eventDateTime|string(date-time)|true|none|The transaction date and time.|
|externalNetworkTxReferenceFound|boolean|false|none|Indicates if the `networkTxReferencePaths` matched a reference in the third-party response.|
|externalNetworkTxReferenceRequested|boolean|false|none|Indicates if a `networkTxReferencePaths` value was provided in the request.|
|externalPartyResponseBody|string|false|none|The raw response body returned by the third-party service.|
|externalPsp|string|true|none|The third-party service that processed the payment request.|
|externalPspTransactionStatus|string|false|none|The transaction status returned by the third-party service.|
|externalTransactionLinkIdFound|boolean|false|none|Indicates if the `transactionLinkIdPaths` matched a reference in the third-party response.|
|externalTransactionLinkIdRequested|boolean|false|none|Indicates if a `transactionLinkIdPaths` value was provided in the request.|
|merchantAccountCode|string|true|none|The merchant account that is used to process the payment.|
|merchantCountryCode|string|true|none|The country of the merchant account.|
|merchantReference|string|true|none|Your reference to uniquely identify the payment.|
|pspReference|string|true|none|Adyen's 16-character reference associated with the request. This value is globally unique, so you can use it as the reference when you communicate with us about this request.|
|scheme|string|true|none|The card network used for the transaction. For example, **visa** or **mc**.|
|shopperReference|string|true|none|Your reference to uniquely identify this shopper, for example user ID or account ID.|
|storedPaymentMethodId|string|true|none|The unique identifier of the token.|

<h2 id="tocS_ForwardApiNotificationRequest">ForwardApiNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforwardapinotificationrequest"></a>
<a id="schema_ForwardApiNotificationRequest"></a>
<a id="tocSforwardapinotificationrequest"></a>
<a id="tocsforwardapinotificationrequest"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {
    "amountCurrency": "string",
    "amountValue": 0,
    "eventDateTime": "1970-01-01T00:00:00Z",
    "externalNetworkTxReferenceFound": true,
    "externalNetworkTxReferenceRequested": true,
    "externalPartyResponseBody": "string",
    "externalPsp": "string",
    "externalPspTransactionStatus": "string",
    "externalTransactionLinkIdFound": true,
    "externalTransactionLinkIdRequested": true,
    "merchantAccountCode": "string",
    "merchantCountryCode": "string",
    "merchantReference": "string",
    "pspReference": "string",
    "scheme": "string",
    "shopperReference": "string",
    "storedPaymentMethodId": "string"
  },
  "environment": "string",
  "type": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the webhook was created.|
|data|[ForwardApiNotificationData](#schemaforwardapinotificationdata)|false|none|The details of the Forward API request.|
|environment|string|false|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|true|none|The type of notification.|
|version|string|false|none|The version of this webhook type.|

<h2 id="tocS_ForwardApiNotificationResponse">ForwardApiNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforwardapinotificationresponse"></a>
<a id="schema_ForwardApiNotificationResponse"></a>
<a id="tocSforwardapinotificationresponse"></a>
<a id="tocsforwardapinotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|
