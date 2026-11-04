<h1 id="payment-webhooks-deprecated">Payment webhooks (deprecated) v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The payment webhooks are deprecated. Use the [accounting webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.

Adyen sends webhooks to inform your system about the creation of payment resources and money movements in your platform.

You can use these webhooks to build your implementation. For example, you can use this information to update balances in your own dashboards or to keep track of incoming funds.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="payment-webhooks-deprecated-webhooks">Webhooks</h1>

## Incoming transfer created

<a id="opIdpost-balancePlatform.incomingTransfer.created"></a>

`POST balancePlatform.incomingTransfer.created`

<aside class="warning">
This operation is deprecated
</aside>

Adyen sends this webhook when there are incoming funds due to a refund or a fund transfer. Use the `paymentId` to link to the original refund request or funds transfer request. Check the content of the webhook to differentiate the events.

* For refunds, the webhook includes the payment instrument to which funds will be refunded.

* For incoming fund transfers, the webhook only includes information about the balance account.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2021-05-03T15:20:14+02:00",
    "id": "IZL6685QQEBKFOOY",
    "accountHolder": {
      "description": "S. Eller",
      "id": "AH32272223222B5BBXP2Z8ZWS"
    },
    "amount": {
      "currency": "EUR",
      "value": 15000
    },
    "balanceAccount": {
      "description": "S. Eller - Main account",
      "id": "BA32272223222B5BQ3KWP86MW"
    },
    "modification": {
      "amount": {
        "currency": "EUR",
        "value": 15000
      },
      "type": "PendingIncomingTransfer"
    },
    "originalAmount": {
      "currency": "EUR",
      "value": 15000
    },
    "counterparty": {
      "balanceAccountId": "BA00000000000000000000001"
    },
    "paymentId": "IZL6685QQEBKFON0",
    "status": "PendingIncomingTransfer"
  },
  "environment": "test",
  "timestamp": "2021-05-03T15:16:14+02:00",
  "type": "balancePlatform.incomingTransfer.created"
}
```

<h3 id="incoming-transfer-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IncomingTransferNotificationRequest](#schemaincomingtransfernotificationrequest)|false|none|
|» data|body|[IncomingTransferNotificationData](#schemaincomingtransfernotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.incomingTransfer.updated|
|» type|balancePlatform.incomingTransfer.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="incoming-transfer-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Incoming transfer updated

<a id="opIdpost-balancePlatform.incomingTransfer.updated"></a>

`POST balancePlatform.incomingTransfer.updated`

<aside class="warning">
This operation is deprecated
</aside>

Adyen sends this webhook when funds were added to the balance account. This could be due to a refund or a funds transfer. Use the `data.id` to track the original incoming transfer resource in the `balancePlatform.incomingTransfer.created` webhook.

The `status` field indicates the event that triggered the webhook. 

* For refunds, the `status` is **Refunded**. 

* For incoming fund transfers, the `status` is **IncomingTransfer**.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2021-05-03T15:20:14+02:00",
    "id": "IZL6685QQEBKFOOY",
    "accountHolder": {
      "description": "Liable account holder",
      "id": "AH32272223222B5BBXP2Z8ZWS"
    },
    "amount": {
      "currency": "EUR",
      "value": 1500
    },
    "balanceAccount": {
      "description": "second-account",
      "id": "BA32272223222B5BQ3KWP86MW"
    },
    "modification": {
      "amount": {
        "currency": "EUR",
        "value": 1500
      },
      "type": "IncomingTransfer"
    },
    "originalAmount": {
      "currency": "EUR",
      "value": 1500
    },
    "counterparty": {
      "balanceAccountId": "BA00000000000000000000001"
    },
    "paymentId": "IZL6685QQEBKFON0",
    "status": "IncomingTransfer"
  },
  "environment": "test",
  "timestamp": "2021-05-03T15:16:14+02:00",
  "type": "balancePlatform.incomingTransfer.updated"
}
```

<h3 id="incoming-transfer-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IncomingTransferNotificationRequest](#schemaincomingtransfernotificationrequest)|false|none|
|» data|body|[IncomingTransferNotificationData](#schemaincomingtransfernotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.incomingTransfer.updated|
|» type|balancePlatform.incomingTransfer.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="incoming-transfer-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Outgoing transfer created

<a id="opIdpost-balancePlatform.outgoingTransfer.created"></a>

`POST balancePlatform.outgoingTransfer.created`

<aside class="warning">
This operation is deprecated
</aside>

Adyen sends this webhook when funds were deducted from a balance account due to a capture or a funds transfer. Use the `paymentId` to link to the original payment authorisation or funds transfer request.

The `status` field indicates the event that triggered the webhook. 

* For captures, the `status` will be **Captured**. 

* For outgoing fund transfers, the `status` will be **OutgoingTransfer**.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2021-05-03T15:20:06+02:00",
    "id": "1W1UG35QQEBJLHZ8",
    "accountHolder": {
      "description": "S. Eller - Staff 123",
      "id": "AH32272223222B5CZW6QZ2V34"
    },
    "amount": {
      "currency": "EUR",
      "value": -1500
    },
    "balanceAccount": {
      "description": "My Balance Account",
      "id": "BA3227C223222B5B9SCR82TMV"
    },
    "originalAmount": {
      "currency": "EUR",
      "value": -1500
    },
    "modification": {
      "amount": {
        "currency": "EUR",
        "value": -1500
      },
      "type": "OutgoingTransfer"
    },
    "counterparty": {
      "balanceAccountId": "BA00000000000000000000001"
    },
    "paymentId": "1W1UG35QQEBJLHZ8",
    "status": "OutgoingTransfer",
    "valueDate": "2021-08-10T14:57:01+02:00"
  },
  "environment": "test",
  "timestamp": "2021-05-03T15:16:14+02:00",
  "type": "balancePlatform.outgoingTransfer.created"
}
```

<h3 id="outgoing-transfer-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OutgoingTransferNotificationRequest](#schemaoutgoingtransfernotificationrequest)|false|none|
|» data|body|[OutgoingTransferNotificationData](#schemaoutgoingtransfernotificationdata)|true|Contains details about the event.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.outgoingTransfer.created|
|» type|balancePlatform.outgoingTransfer.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="outgoing-transfer-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Outgoing transfer updated

<a id="opIdpost-balancePlatform.outgoingTransfer.updated"></a>

`POST balancePlatform.outgoingTransfer.updated`

<aside class="warning">
This operation is deprecated
</aside>

Adyen sends this webhook when there is updated information after funds have been deducted from a balance account. For example, if the fund transfer failed.

Use the `data.id` to track the original outgoing transfer resource from the `balancePlatform.outgoingTransfer.created` webhook.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2021-05-03T15:20:06+02:00",
    "id": "1W1UG35QQEBJLHZ8",
    "accountHolder": {
      "description": "S. Eller - Staff 123",
      "id": "AH32272223222B5CZW6QZ2V34"
    },
    "amount": {
      "currency": "EUR",
      "value": -1500
    },
    "balanceAccount": {
      "description": "My Balance Account",
      "id": "BA3227C223222B5B9SCR82TMV"
    },
    "originalAmount": {
      "currency": "EUR",
      "value": -1500
    },
    "modification": {
      "amount": {
        "currency": "EUR",
        "value": -1500
      },
      "type": "OutgoingTransfer"
    },
    "counterparty": {
      "balanceAccountId": "BA00000000000000000000001"
    },
    "paymentId": "1W1UG35QQEBJLHZ8",
    "status": "TransferFailed",
    "valueDate": "2021-08-10T14:57:01+02:00"
  },
  "environment": "test",
  "timestamp": "2021-05-03T15:16:14+02:00",
  "type": "balancePlatform.outgoingTransfer.updated"
}
```

<h3 id="outgoing-transfer-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OutgoingTransferNotificationRequest](#schemaoutgoingtransfernotificationrequest)|false|none|
|» data|body|[OutgoingTransferNotificationData](#schemaoutgoingtransfernotificationdata)|true|Contains details about the event.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.outgoingTransfer.created|
|» type|balancePlatform.outgoingTransfer.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="outgoing-transfer-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payment authorisation, refund, or funds transfer initiated

<a id="opIdpost-balancePlatform.payment.created"></a>

`POST balancePlatform.payment.created`

<aside class="warning">
This operation is deprecated
</aside>

Adyen sends this webhook when a payment authorisation, a refund, or a funds transfer has been initiated. This webhook only informs your server of requests. For the actual fund movements, you'll get the information from the subsequent outgoing or incoming transfer webhooks.

 To differentiate the requests, check the content of the webhook.

* For payments, the webhook contains the authorisation result, information about the processing merchant, and shows a negative amount.

 * For refunds, the webhook contains to which payment instrument the funds will be refunded, and shows a positive amount.

* For outgoing or incoming fund transfers, the webhook shows a positive or negative amount depending on the direction of the transfer, and only includes information about the balance account.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2021-04-01T12:56:38+02:00",
    "id": "1W1UG35QDNNE694X",
    "accountHolder": {
      "description": "S. Eller - Staff 123",
      "id": "AH32272223222B5CZW6QZ2V34"
    },
    "amount": {
      "currency": "EUR",
      "value": -2000
    },
    "authCode": "397402",
    "balanceAccount": {
      "description": "My Balance Account",
      "id": "BA3227C223222B5B9SCR82TMV"
    },
    "merchantData": {
      "mcc": "7999",
      "merchantId": "526567789012346",
      "nameLocation": {
        "city": "Amsterdam",
        "country": "NLD",
        "name": "Store-ecom",
        "rawData": "Store-ecom        Amsterdam     NLD"
      }
    },
    "modification": {
      "amount": {
        "currency": "EUR",
        "value": -2000
      },
      "type": "Authorised"
    },
    "originalAmount": {
      "currency": "EUR",
      "value": -2000
    },
    "paymentInstrument": {
      "description": "C. Holden - card",
      "id": "PI32272223222B5CZW7BQ2V3T"
    },
    "processingType": "ecommerce",
    "relayedAuthorisationData": {
      "metadata": {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
      }
    },
    "status": "Authorised",
    "transactionRulesResult": {
      "allRulesPassed": true
    },
    "validationResult": [
      {
        "result": "valid",
        "type": "BalanceCheck"
      },
      {
        "result": "valid",
        "type": "AccountLookup"
      },
      {
        "result": "valid",
        "type": "RelayedAuthorisation"
      },
      {
        "result": "valid",
        "type": "Screening"
      },
      {
        "result": "valid",
        "type": "TransactionRules"
      },
      {
        "result": "valid",
        "type": "TransactionValidation"
      },
      {
        "result": "valid",
        "type": "PaymentInstrumentExpirationCheck"
      },
      {
        "result": "valid",
        "type": "MaxAuthAmount"
      },
      {
        "result": "valid",
        "type": "CVC2"
      }
    ]
  },
  "environment": "test",
  "timestamp": "2021-04-01T12:52:38+02:00",
  "type": "balancePlatform.payment.created"
}
```

<h3 id="payment-authorisation-refund-or-funds-transfer-initiated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentNotificationRequest](#schemapaymentnotificationrequest)|false|none|
|» data|body|[PaymentNotificationData](#schemapaymentnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.payment.created|
|» type|balancePlatform.payment.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payment-authorisation-refund-or-funds-transfer-initiated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Payment authorisation expired or cancelled

<a id="opIdpost-balancePlatform.payment.updated"></a>

`POST balancePlatform.payment.updated`

<aside class="warning">
This operation is deprecated
</aside>

Adyen sends this webhook when a payment authorisation has expired or has been cancelled. Use the `data.id` to track the original payment authorisation from the `balancePlatform.payment.created` webhook.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2021-03-25T11:42:05+01:00",
    "id": "2L470J5QAVHDDZTW",
    "accountHolder": {
      "description": "S.Hopper - Staff 123",
      "id": "AH32272223222B5CZW6QZ2V34"
    },
    "amount": {
      "currency": "EUR",
      "value": -2500
    },
    "authCode": "995167",
    "balanceAccount": {
      "description": "My Balance Account",
      "id": "BA3227C223222B5B9SCR82TMV"
    },
    "merchantData": {
      "mcc": "7999",
      "merchantId": "526567789012346",
      "nameLocation": {
        "city": "Amsterdam",
        "country": "NLD",
        "name": "Store-ecom",
        "rawData": "Store-ecom        Amsterdam     NLD"
      }
    },
    "modification": {
      "amount": {
        "currency": "EUR",
        "value": 2500
      },
      "type": "Expired"
    },
    "originalAmount": {
      "currency": "EUR",
      "value": -2500
    },
    "paymentInstrument": {
      "description": "S.Hopper - card",
      "id": "PI32272223222B5CZW7BQ2V3T"
    },
    "processingType": "ecommerce",
    "relayedAuthorisationData": {
      "metadata": {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
      }
    },
    "status": "Expired",
    "transactionRulesResult": {
      "allRulesPassed": true
    },
    "validationResult": [
      {
        "result": "valid",
        "type": "AccountLookup"
      },
      {
        "result": "valid",
        "type": "PaymentInstrumentExpirationCheck"
      },
      {
        "result": "valid",
        "type": "Screening"
      },
      {
        "result": "valid",
        "type": "TransactionValidation"
      },
      {
        "result": "valid",
        "type": "RelayedAuthorisation"
      },
      {
        "result": "valid",
        "type": "BalanceCheck"
      },
      {
        "result": "valid",
        "type": "CVC2"
      },
      {
        "result": "valid",
        "type": "MaxAuthAmount"
      },
      {
        "result": "valid",
        "type": "TransactionRules"
      }
    ]
  },
  "environment": "test",
  "timestamp": "2021-03-25T11:40:05+01:00",
  "type": "balancePlatform.payment.updated"
}
```

<h3 id="payment-authorisation-expired-or-cancelled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentNotificationRequest](#schemapaymentnotificationrequest)|false|none|
|» data|body|[PaymentNotificationData](#schemapaymentnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.payment.created|
|» type|balancePlatform.payment.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="payment-authorisation-expired-or-cancelled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

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

<h2 id="tocS_BalancePlatformNotificationResponse">BalancePlatformNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalanceplatformnotificationresponse"></a>
<a id="schema_BalancePlatformNotificationResponse"></a>
<a id="tocSbalanceplatformnotificationresponse"></a>
<a id="tocsbalanceplatformnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_BankAccountInfo">BankAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountinfo"></a>
<a id="schema_BankAccountInfo"></a>
<a id="tocSbankaccountinfo"></a>
<a id="tocsbankaccountinfo"></a>

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
  "iban": "string",
  "ownerName": {
    "firstName": "string",
    "fullName": "string",
    "infix": "string",
    "lastName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|The address of the bank account owner.|
|iban|string|false|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|ownerName|[Name](#schemaname)|false|none|The name of the bank account owner.|

<h2 id="tocS_Counterparty">Counterparty</h2>
<!-- backwards compatibility -->
<a id="schemacounterparty"></a>
<a id="schema_Counterparty"></a>
<a id="tocScounterparty"></a>
<a id="tocscounterparty"></a>

```json
{
  "balanceAccountId": "string",
  "bankAccount": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "iban": "string",
    "ownerName": {
      "firstName": "string",
      "fullName": "string",
      "infix": "string",
      "lastName": "string"
    }
  },
  "merchant": {
    "acquirerId": "string",
    "mcc": "string",
    "merchantId": "string",
    "nameLocation": {
      "city": "string",
      "country": "string",
      "countryOfOrigin": "string",
      "name": "string",
      "rawData": "string",
      "state": "string"
    },
    "postalCode": "string"
  },
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).|
|bankAccount|[BankAccountInfo](#schemabankaccountinfo)|false|none|Contains information about the bank account.|
|merchant|[MerchantData](#schemamerchantdata)|false|none|Contains information about the merchant.|
|transferInstrumentId|string|false|none|The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments__resParam_id).|

<h2 id="tocS_IncomingTransferNotificationData">IncomingTransferNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemaincomingtransfernotificationdata"></a>
<a id="schema_IncomingTransferNotificationData"></a>
<a id="tocSincomingtransfernotificationdata"></a>
<a id="tocsincomingtransfernotificationdata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balancePlatform": "string",
  "counterparty": {
    "balanceAccountId": "string",
    "bankAccount": {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "iban": "string",
      "ownerName": {
        "firstName": "string",
        "fullName": "string",
        "infix": "string",
        "lastName": "string"
      }
    },
    "merchant": {
      "acquirerId": "string",
      "mcc": "string",
      "merchantId": "string",
      "nameLocation": {
        "city": "string",
        "country": "string",
        "countryOfOrigin": "string",
        "name": "string",
        "rawData": "string",
        "state": "string"
      },
      "postalCode": "string"
    },
    "transferInstrumentId": "string"
  },
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "modification": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "type": "string"
  },
  "originalAmount": {
    "currency": "str",
    "value": 0
  },
  "paymentId": "string",
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "platformPayment": {
    "account": "string",
    "description": "string",
    "modificationMerchantReference": "string",
    "modificationPspReference": "string",
    "paymentMerchantReference": "string",
    "paymentPspReference": "string",
    "reference": "string",
    "type": "AcquiringFees"
  },
  "reference": "string",
  "referenceForBeneficiary": "string",
  "status": "string",
  "threeDSecure": {
    "acsTransactionId": "string",
    "authenticationResult": "string",
    "authenticationType": "string",
    "dsTransactionId": "string"
  },
  "valueDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the account holder.|
|amount|[Amount](#schemaamount)|false|none|The amount converted to the balance account's currency, in case the original transaction currency is different.<br><br>* A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the balance account.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|counterparty|[Counterparty](#schemacounterparty)|false|none|Contains information about the other party in the transaction.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|description|string|false|none|Your description for the transfer. If you send a description longer than 140 characters, the text is truncated.|
|id|string|false|none|The ID of the resource.|
|modification|[NotificationModificationData](#schemanotificationmodificationdata)|false|none|Contains the amount and type of modification that triggered the notification. For example, this object contains the amount of a partial cancellation or partial expired authorisation.|
|originalAmount|[Amount](#schemaamount)|false|none|The amount in the original currency of the transaction.<br><br>* A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|paymentId|string|false|none|The ID of the original payment authorisation, refund, or funds transfer request. Use this to trace the original request from the `balancePlatform.payment.created` webhook.|
|paymentInstrument|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the payment instrument.|
|platformPayment|[PlatformPayment](#schemaplatformpayment)|false|none|Contains information about the related platform payment.|
|reference|string|false|none|An Adyen-generated unique reference for the transfer.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty.<br><br>* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers) request.<br><br> * For incoming funds, this is the reference from the sender.|
|status|string|false|none|The event status. The possible values depend on the `type`.<br><br>* **Authorised**, **Refused**, or **Error** for type `balancePlatform.payment.created`<br><br> * **Expired** or **Cancelled** or **AuthAdjustmentAuthorised** or **AuthAdjustmentRefused** for type `balancePlatform.payment.updated`<br><br>* **PendingIncomingTransfer** for type `balancePlatform.incomingTransfer.created` <br><br>* **Refunded** or **IncomingTransfer** for type `balancePlatform.incomingTransfer.updated`<br><br> * **Captured** or **OutgoingTransfer** for type `balancePlatform.outgoingTransfer.created`<br><br>* **TransferConfirmed**, **TransferSentOut**, or **TransferFailed** for type `balancePlatform.outgoingTransfer.updated`<br><br>  |
|threeDSecure|[ThreeDSecure](#schemathreedsecure)|false|none|The data of the result from the 3DS authentication.|
|valueDate|string(date-time)|false|none|Indicates the expected settlement date of this transaction, in ISO 8601 extended format. For example, **2021-08-17T15:34:37+02:00**.|

<h2 id="tocS_IncomingTransferNotificationRequest">IncomingTransferNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaincomingtransfernotificationrequest"></a>
<a id="schema_IncomingTransferNotificationRequest"></a>
<a id="tocSincomingtransfernotificationrequest"></a>
<a id="tocsincomingtransfernotificationrequest"></a>

```json
{
  "data": {
    "accountHolder": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "balanceAccount": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "balancePlatform": "string",
    "counterparty": {
      "balanceAccountId": "string",
      "bankAccount": {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "iban": "string",
        "ownerName": {
          "firstName": "string",
          "fullName": "string",
          "infix": "string",
          "lastName": "string"
        }
      },
      "merchant": {
        "acquirerId": "string",
        "mcc": "string",
        "merchantId": "string",
        "nameLocation": {
          "city": "string",
          "country": "string",
          "countryOfOrigin": "string",
          "name": "string",
          "rawData": "string",
          "state": "string"
        },
        "postalCode": "string"
      },
      "transferInstrumentId": "string"
    },
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "modification": {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "type": "string"
    },
    "originalAmount": {
      "currency": "str",
      "value": 0
    },
    "paymentId": "string",
    "paymentInstrument": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "platformPayment": {
      "account": "string",
      "description": "string",
      "modificationMerchantReference": "string",
      "modificationPspReference": "string",
      "paymentMerchantReference": "string",
      "paymentPspReference": "string",
      "reference": "string",
      "type": "AcquiringFees"
    },
    "reference": "string",
    "referenceForBeneficiary": "string",
    "status": "string",
    "threeDSecure": {
      "acsTransactionId": "string",
      "authenticationResult": "string",
      "authenticationType": "string",
      "dsTransactionId": "string"
    },
    "valueDate": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.incomingTransfer.updated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IncomingTransferNotificationData](#schemaincomingtransfernotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.incomingTransfer.updated|
|type|balancePlatform.incomingTransfer.created|

<h2 id="tocS_MerchantData">MerchantData</h2>
<!-- backwards compatibility -->
<a id="schemamerchantdata"></a>
<a id="schema_MerchantData"></a>
<a id="tocSmerchantdata"></a>
<a id="tocsmerchantdata"></a>

```json
{
  "acquirerId": "string",
  "mcc": "string",
  "merchantId": "string",
  "nameLocation": {
    "city": "string",
    "country": "string",
    "countryOfOrigin": "string",
    "name": "string",
    "rawData": "string",
    "state": "string"
  },
  "postalCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerId|string|false|none|The unique identifier of the merchant's acquirer.|
|mcc|string|false|none|The merchant category code.|
|merchantId|string|false|none|The unique identifier of the merchant.|
|nameLocation|[NameLocation](#schemanamelocation)|false|none|Contains the name and location of the merchant.|
|postalCode|string|false|none|The postal code of the merchant.|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "firstName": "string",
  "fullName": "string",
  "infix": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name.|
|fullName|string|false|none|The full name.|
|infix|string|false|none|The infix in the name, if any.|
|lastName|string|false|none|The last name.|

<h2 id="tocS_NameLocation">NameLocation</h2>
<!-- backwards compatibility -->
<a id="schemanamelocation"></a>
<a id="schema_NameLocation"></a>
<a id="tocSnamelocation"></a>
<a id="tocsnamelocation"></a>

```json
{
  "city": "string",
  "country": "string",
  "countryOfOrigin": "string",
  "name": "string",
  "rawData": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city where the merchant is located.|
|country|string|false|none|The country where the merchant is located in [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|countryOfOrigin|string|false|none|The home country in [three-digit country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled merchants such as embassies.|
|name|string|false|none|The name of the merchant's shop or service.|
|rawData|string|false|none|The raw data.|
|state|string|false|none|The state where the merchant is located.|

<h2 id="tocS_NotificationModificationData">NotificationModificationData</h2>
<!-- backwards compatibility -->
<a id="schemanotificationmodificationdata"></a>
<a id="schema_NotificationModificationData"></a>
<a id="tocSnotificationmodificationdata"></a>
<a id="tocsnotificationmodificationdata"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount of the modification converted to the balance account's currency, in case the original transaction currency is different. For example, if a part of an authorised amount was cancelled, the value shows the amount that was cancelled.<br><br> * A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|type|string|false|none|The type of modification.<br><br>Possible values: **Authorised**, **Cancelled**, **Captured**, **Error**, **Expired**, **OutgoingTransfer**, **PendingIncomingTransfer**, **PendingRefund**, **IncomingTransfer**, **Refunded**, **Refused**, **AuthAdjustmentAuthorised**.|

<h2 id="tocS_OutgoingTransferNotificationData">OutgoingTransferNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemaoutgoingtransfernotificationdata"></a>
<a id="schema_OutgoingTransferNotificationData"></a>
<a id="tocSoutgoingtransfernotificationdata"></a>
<a id="tocsoutgoingtransfernotificationdata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balancePlatform": "string",
  "counterparty": {
    "balanceAccountId": "string",
    "bankAccount": {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "iban": "string",
      "ownerName": {
        "firstName": "string",
        "fullName": "string",
        "infix": "string",
        "lastName": "string"
      }
    },
    "merchant": {
      "acquirerId": "string",
      "mcc": "string",
      "merchantId": "string",
      "nameLocation": {
        "city": "string",
        "country": "string",
        "countryOfOrigin": "string",
        "name": "string",
        "rawData": "string",
        "state": "string"
      },
      "postalCode": "string"
    },
    "transferInstrumentId": "string"
  },
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "merchantData": {
    "acquirerId": "string",
    "mcc": "string",
    "merchantId": "string",
    "nameLocation": {
      "city": "string",
      "country": "string",
      "countryOfOrigin": "string",
      "name": "string",
      "rawData": "string",
      "state": "string"
    },
    "postalCode": "string"
  },
  "modification": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "type": "string"
  },
  "originalAmount": {
    "currency": "str",
    "value": 0
  },
  "paymentId": "string",
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "platformPayment": {
    "account": "string",
    "description": "string",
    "modificationMerchantReference": "string",
    "modificationPspReference": "string",
    "paymentMerchantReference": "string",
    "paymentPspReference": "string",
    "reference": "string",
    "type": "AcquiringFees"
  },
  "processingType": "atmWithdraw",
  "purposeCode": "string",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "relayedAuthorisationData": {
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "reference": "string",
    "status": "string"
  },
  "status": "string",
  "threeDSecure": {
    "acsTransactionId": "string",
    "authenticationResult": "string",
    "authenticationType": "string",
    "dsTransactionId": "string"
  },
  "transactionRulesResult": {
    "advice": "string",
    "allRulesPassed": true,
    "failedTransactionRules": [
      {
        "reason": "string",
        "transactionRule": {
          "description": "string",
          "id": "string",
          "reference": "string"
        },
        "transactionRuleSource": {
          "id": "string",
          "type": "string"
        }
      }
    ],
    "score": 0
  },
  "valueDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the account holder.|
|amount|[Amount](#schemaamount)|false|none|The amount converted to the balance account's currency, in case the original transaction currency is different.<br><br>* A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the balance account.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|counterparty|[Counterparty](#schemacounterparty)|true|none|Contains information about the other party in the transaction.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|description|string|false|none|Your description for the transfer. If you send a description longer than 140 characters, the text is truncated.|
|id|string|false|none|The ID of the resource.|
|merchantData|[MerchantData](#schemamerchantdata)|false|none|Contains information about the merchant that processed the payment. This object is only included for payment authorisation requests and captures.|
|modification|[NotificationModificationData](#schemanotificationmodificationdata)|false|none|Contains the amount and type of modification that triggered the notification. For example, this object contains the amount of a partial cancellation or partial expired authorisation.|
|originalAmount|[Amount](#schemaamount)|false|none|The amount in the original currency of the transaction.<br><br>* A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|paymentId|string|false|none|The ID of the original payment authorisation, refund, or funds transfer request. Use this to trace the original request from the `balancePlatform.payment.created` webhook.|
|paymentInstrument|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the payment instrument.|
|platformPayment|[PlatformPayment](#schemaplatformpayment)|false|none|Contains information about the related platform payment.|
|processingType|string|false|none|Contains information about how the payment was processed. Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**, **unknown**.|
|purposeCode|string|false|none|Indicates the purpose of the outgoing transfer. Adyen sets this to:<br><br>* **payoutManual** when the transfer was triggered by a one-off payout using the [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers) endpoint.<br><br> * **payoutSweep** when the transfer was triggered by a scheduled payout using [`sweepConfigurations`](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_sweepConfigurations).|
|reference|string|false|none|The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty.<br><br>* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers) request.<br><br> * For incoming funds, this is the reference from the sender.|
|relayedAuthorisationData|[RelayedAuthorisationData](#schemarelayedauthorisationdata)|false|none|If you're using [relayed authorisation](https://docs.adyen.com/issuing/processing-payments-for-cards#relayed-authorisation), this object contains information from the relayed authorisation response from your server.|
|status|string|false|none|The event status. The possible values depend on the `type`.<br><br>* **Authorised**, **Refused**, or **Error** for type `balancePlatform.payment.created`<br><br> * **Expired** or **Cancelled** or **AuthAdjustmentAuthorised** or **AuthAdjustmentRefused** for type `balancePlatform.payment.updated`<br><br>* **PendingIncomingTransfer** for type `balancePlatform.incomingTransfer.created` <br><br>* **Refunded** or **IncomingTransfer** for type `balancePlatform.incomingTransfer.updated`<br><br> * **Captured** or **OutgoingTransfer** for type `balancePlatform.outgoingTransfer.created`<br><br>* **TransferConfirmed**, **TransferSentOut**, or **TransferFailed** for type `balancePlatform.outgoingTransfer.updated`<br><br>  |
|threeDSecure|[ThreeDSecure](#schemathreedsecure)|false|none|The data of the result from the 3DS authentication.|
|transactionRulesResult|[TransactionRulesResult](#schematransactionrulesresult)|false|none|Contains results from the evaluation of [transaction rules](https://docs.adyen.com/issuing/transaction-rules).|
|valueDate|string(date-time)|false|none|Indicates the expected settlement date of this transaction, in ISO 8601 extended format. For example, **2021-08-17T15:34:37+02:00**.|

#### Enumerated Values

|Property|Value|
|---|---|
|processingType|atmWithdraw|
|processingType|balanceInquiry|
|processingType|ecommerce|
|processingType|moto|
|processingType|pos|
|processingType|purchaseWithCashback|
|processingType|recurring|
|processingType|token|
|processingType|unknown|

<h2 id="tocS_OutgoingTransferNotificationRequest">OutgoingTransferNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoutgoingtransfernotificationrequest"></a>
<a id="schema_OutgoingTransferNotificationRequest"></a>
<a id="tocSoutgoingtransfernotificationrequest"></a>
<a id="tocsoutgoingtransfernotificationrequest"></a>

```json
{
  "data": {
    "accountHolder": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "balanceAccount": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "balancePlatform": "string",
    "counterparty": {
      "balanceAccountId": "string",
      "bankAccount": {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "iban": "string",
        "ownerName": {
          "firstName": "string",
          "fullName": "string",
          "infix": "string",
          "lastName": "string"
        }
      },
      "merchant": {
        "acquirerId": "string",
        "mcc": "string",
        "merchantId": "string",
        "nameLocation": {
          "city": "string",
          "country": "string",
          "countryOfOrigin": "string",
          "name": "string",
          "rawData": "string",
          "state": "string"
        },
        "postalCode": "string"
      },
      "transferInstrumentId": "string"
    },
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "merchantData": {
      "acquirerId": "string",
      "mcc": "string",
      "merchantId": "string",
      "nameLocation": {
        "city": "string",
        "country": "string",
        "countryOfOrigin": "string",
        "name": "string",
        "rawData": "string",
        "state": "string"
      },
      "postalCode": "string"
    },
    "modification": {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "type": "string"
    },
    "originalAmount": {
      "currency": "str",
      "value": 0
    },
    "paymentId": "string",
    "paymentInstrument": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "platformPayment": {
      "account": "string",
      "description": "string",
      "modificationMerchantReference": "string",
      "modificationPspReference": "string",
      "paymentMerchantReference": "string",
      "paymentPspReference": "string",
      "reference": "string",
      "type": "AcquiringFees"
    },
    "processingType": "atmWithdraw",
    "purposeCode": "string",
    "reference": "string",
    "referenceForBeneficiary": "string",
    "relayedAuthorisationData": {
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "reference": "string",
      "status": "string"
    },
    "status": "string",
    "threeDSecure": {
      "acsTransactionId": "string",
      "authenticationResult": "string",
      "authenticationType": "string",
      "dsTransactionId": "string"
    },
    "transactionRulesResult": {
      "advice": "string",
      "allRulesPassed": true,
      "failedTransactionRules": [
        {
          "reason": "string",
          "transactionRule": {
            "description": "string",
            "id": "string",
            "reference": "string"
          },
          "transactionRuleSource": {
            "id": "string",
            "type": "string"
          }
        }
      ],
      "score": 0
    },
    "valueDate": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.outgoingTransfer.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[OutgoingTransferNotificationData](#schemaoutgoingtransfernotificationdata)|true|none|Contains details about the event.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.outgoingTransfer.created|
|type|balancePlatform.outgoingTransfer.updated|

<h2 id="tocS_PaymentNotificationData">PaymentNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnotificationdata"></a>
<a id="schema_PaymentNotificationData"></a>
<a id="tocSpaymentnotificationdata"></a>
<a id="tocspaymentnotificationdata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "authCode": "string",
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "merchantData": {
    "acquirerId": "string",
    "mcc": "string",
    "merchantId": "string",
    "nameLocation": {
      "city": "string",
      "country": "string",
      "countryOfOrigin": "string",
      "name": "string",
      "rawData": "string",
      "state": "string"
    },
    "postalCode": "string"
  },
  "modification": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "type": "string"
  },
  "originalAmount": {
    "currency": "str",
    "value": 0
  },
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "platformPayment": {
    "account": "string",
    "description": "string",
    "modificationMerchantReference": "string",
    "modificationPspReference": "string",
    "paymentMerchantReference": "string",
    "paymentPspReference": "string",
    "reference": "string",
    "type": "AcquiringFees"
  },
  "processingType": "atmWithdraw",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "relayedAuthorisationData": {
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "reference": "string",
    "status": "string"
  },
  "status": "string",
  "threeDSecure": {
    "acsTransactionId": "string",
    "authenticationResult": "string",
    "authenticationType": "string",
    "dsTransactionId": "string"
  },
  "transactionRulesResult": {
    "advice": "string",
    "allRulesPassed": true,
    "failedTransactionRules": [
      {
        "reason": "string",
        "transactionRule": {
          "description": "string",
          "id": "string",
          "reference": "string"
        },
        "transactionRuleSource": {
          "id": "string",
          "type": "string"
        }
      }
    ],
    "score": 0
  },
  "validationResult": [
    {
      "result": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the account holder.|
|amount|[Amount](#schemaamount)|false|none|The amount converted to the balance account's currency, in case the original transaction currency is different.<br><br>* A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|authCode|string|false|none|The authorisation code for the payment.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the balance account.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|description|string|false|none|Your description for the transfer. If you send a description longer than 140 characters, the text is truncated.|
|id|string|false|none|The ID of the resource.|
|merchantData|[MerchantData](#schemamerchantdata)|false|none|Contains information about the merchant that processed the payment. This object is only included for payment authorisation requests and captures.|
|modification|[NotificationModificationData](#schemanotificationmodificationdata)|false|none|Contains the amount and type of modification that triggered the notification. For example, this object contains the amount of a partial cancellation or partial expired authorisation.|
|originalAmount|[Amount](#schemaamount)|false|none|The amount in the original currency of the transaction.<br><br>* A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|paymentInstrument|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the payment instrument.|
|platformPayment|[PlatformPayment](#schemaplatformpayment)|false|none|Contains information about the related platform payment.|
|processingType|string|false|none|Contains information about how the payment was processed. Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**, **unknown**.|
|reference|string|false|none|The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty.<br><br>* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers) request.<br><br> * For incoming funds, this is the reference from the sender.|
|relayedAuthorisationData|[RelayedAuthorisationData](#schemarelayedauthorisationdata)|false|none|If you're using [relayed authorisation](https://docs.adyen.com/issuing/processing-payments-for-cards#relayed-authorisation), this object contains information from the relayed authorisation response from your server.|
|status|string|false|none|The event status. The possible values depend on the `type`.<br><br>* **Authorised**, **Refused**, or **Error** for type `balancePlatform.payment.created`<br><br> * **Expired** or **Cancelled** or **AuthAdjustmentAuthorised** or **AuthAdjustmentRefused** for type `balancePlatform.payment.updated`<br><br>* **PendingIncomingTransfer** for type `balancePlatform.incomingTransfer.created` <br><br>* **Refunded** or **IncomingTransfer** for type `balancePlatform.incomingTransfer.updated`<br><br> * **Captured** or **OutgoingTransfer** for type `balancePlatform.outgoingTransfer.created`<br><br>* **TransferConfirmed**, **TransferSentOut**, or **TransferFailed** for type `balancePlatform.outgoingTransfer.updated`<br><br>  |
|threeDSecure|[ThreeDSecure](#schemathreedsecure)|false|none|The data of the result from the 3DS authentication.|
|transactionRulesResult|[TransactionRulesResult](#schematransactionrulesresult)|false|none|Contains results from the evaluation of [transaction rules](https://docs.adyen.com/issuing/transaction-rules).|
|validationResult|[[ValidationResult](#schemavalidationresult)]|false|none|Array of checks that Adyen performed to validate the payment and the result of each.|

#### Enumerated Values

|Property|Value|
|---|---|
|processingType|atmWithdraw|
|processingType|balanceInquiry|
|processingType|ecommerce|
|processingType|moto|
|processingType|pos|
|processingType|purchaseWithCashback|
|processingType|recurring|
|processingType|token|
|processingType|unknown|

<h2 id="tocS_PaymentNotificationRequest">PaymentNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnotificationrequest"></a>
<a id="schema_PaymentNotificationRequest"></a>
<a id="tocSpaymentnotificationrequest"></a>
<a id="tocspaymentnotificationrequest"></a>

```json
{
  "data": {
    "accountHolder": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "authCode": "string",
    "balanceAccount": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "merchantData": {
      "acquirerId": "string",
      "mcc": "string",
      "merchantId": "string",
      "nameLocation": {
        "city": "string",
        "country": "string",
        "countryOfOrigin": "string",
        "name": "string",
        "rawData": "string",
        "state": "string"
      },
      "postalCode": "string"
    },
    "modification": {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "type": "string"
    },
    "originalAmount": {
      "currency": "str",
      "value": 0
    },
    "paymentInstrument": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "platformPayment": {
      "account": "string",
      "description": "string",
      "modificationMerchantReference": "string",
      "modificationPspReference": "string",
      "paymentMerchantReference": "string",
      "paymentPspReference": "string",
      "reference": "string",
      "type": "AcquiringFees"
    },
    "processingType": "atmWithdraw",
    "reference": "string",
    "referenceForBeneficiary": "string",
    "relayedAuthorisationData": {
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "reference": "string",
      "status": "string"
    },
    "status": "string",
    "threeDSecure": {
      "acsTransactionId": "string",
      "authenticationResult": "string",
      "authenticationType": "string",
      "dsTransactionId": "string"
    },
    "transactionRulesResult": {
      "advice": "string",
      "allRulesPassed": true,
      "failedTransactionRules": [
        {
          "reason": "string",
          "transactionRule": {
            "description": "string",
            "id": "string",
            "reference": "string"
          },
          "transactionRuleSource": {
            "id": "string",
            "type": "string"
          }
        }
      ],
      "score": 0
    },
    "validationResult": [
      {
        "result": "string",
        "type": "string"
      }
    ]
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.payment.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PaymentNotificationData](#schemapaymentnotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.payment.created|
|type|balancePlatform.payment.updated|

<h2 id="tocS_PlatformPayment">PlatformPayment</h2>
<!-- backwards compatibility -->
<a id="schemaplatformpayment"></a>
<a id="schema_PlatformPayment"></a>
<a id="tocSplatformpayment"></a>
<a id="tocsplatformpayment"></a>

```json
{
  "account": "string",
  "description": "string",
  "modificationMerchantReference": "string",
  "modificationPspReference": "string",
  "paymentMerchantReference": "string",
  "paymentPspReference": "string",
  "reference": "string",
  "type": "AcquiringFees"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The account given in the related split.|
|description|string|false|none|The description of the related split.|
|modificationMerchantReference|string|false|none|The merchant reference of the modification.|
|modificationPspReference|string|false|none|The pspReference of the modification.|
|paymentMerchantReference|string|false|none|The merchant reference of the payment.|
|paymentPspReference|string|false|none|The pspReference of the payment.|
|reference|string|false|none|The reference of the related split.|
|type|string|false|none|The type of the related split.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AcquiringFees|
|type|AdyenCommission|
|type|AdyenFees|
|type|AdyenMarkup|
|type|BalanceAccount|
|type|ChargebackRemainder|
|type|Commission|
|type|DCCMarkup|
|type|DCCPlatformCommission|
|type|Default|
|type|Interchange|
|type|PaymentFee|
|type|Remainder|
|type|SchemeFee|
|type|Surcharge|
|type|Tip|
|type|TopUp|
|type|VAT|

<h2 id="tocS_RelayedAuthorisationData">RelayedAuthorisationData</h2>
<!-- backwards compatibility -->
<a id="schemarelayedauthorisationdata"></a>
<a id="schema_RelayedAuthorisationData"></a>
<a id="tocSrelayedauthorisationdata"></a>
<a id="tocsrelayedauthorisationdata"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "reference": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|The `metadata` object from the relayed authorisation response from your server.|
|reference|string|false|none|The `reference` from the relayed authorisation response from your server.|
|status|string|false|none|The value can be **Authorised** or **Refused**, based on the `authorisationDecision.status` in the relayed authorisation response from your server.|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|none|The ID of the resource.|

<h2 id="tocS_ResourceReference">ResourceReference</h2>
<!-- backwards compatibility -->
<a id="schemaresourcereference"></a>
<a id="schema_ResourceReference"></a>
<a id="tocSresourcereference"></a>
<a id="tocsresourcereference"></a>

```json
{
  "description": "string",
  "id": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|reference|string|false|none|The reference for the resource.|

<h2 id="tocS_ThreeDSecure">ThreeDSecure</h2>
<!-- backwards compatibility -->
<a id="schemathreedsecure"></a>
<a id="schema_ThreeDSecure"></a>
<a id="tocSthreedsecure"></a>
<a id="tocsthreedsecure"></a>

```json
{
  "acsTransactionId": "string",
  "authenticationResult": "string",
  "authenticationType": "string",
  "dsTransactionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acsTransactionId|string|false|none|The transaction identifier for the Access Control Server|
|authenticationResult|string|false|none|The result from the performed authentication|
|authenticationType|string|false|none|The type of the performed authentication|
|dsTransactionId|string|false|none|The transaction identifier for the Directory server|

<h2 id="tocS_TransactionEventViolation">TransactionEventViolation</h2>
<!-- backwards compatibility -->
<a id="schematransactioneventviolation"></a>
<a id="schema_TransactionEventViolation"></a>
<a id="tocStransactioneventviolation"></a>
<a id="tocstransactioneventviolation"></a>

```json
{
  "reason": "string",
  "transactionRule": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "transactionRuleSource": {
    "id": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|An explanation about why the transaction rule failed.|
|transactionRule|[TransactionRuleReference](#schematransactionrulereference)|false|none|Contains information about the transaction rule.|
|transactionRuleSource|[TransactionRuleSource](#schematransactionrulesource)|false|none|Contains information about the resource to which the transaction rule applies.|

<h2 id="tocS_TransactionNotificationData">TransactionNotificationData</h2>
<!-- backwards compatibility -->
<a id="schematransactionnotificationdata"></a>
<a id="schema_TransactionNotificationData"></a>
<a id="tocStransactionnotificationdata"></a>
<a id="tocstransactionnotificationdata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "authCode": "string",
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balancePlatform": "string",
  "counterparty": {
    "balanceAccountId": "string",
    "bankAccount": {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "iban": "string",
      "ownerName": {
        "firstName": "string",
        "fullName": "string",
        "infix": "string",
        "lastName": "string"
      }
    },
    "merchant": {
      "acquirerId": "string",
      "mcc": "string",
      "merchantId": "string",
      "nameLocation": {
        "city": "string",
        "country": "string",
        "countryOfOrigin": "string",
        "name": "string",
        "rawData": "string",
        "state": "string"
      },
      "postalCode": "string"
    },
    "transferInstrumentId": "string"
  },
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "merchantData": {
    "acquirerId": "string",
    "mcc": "string",
    "merchantId": "string",
    "nameLocation": {
      "city": "string",
      "country": "string",
      "countryOfOrigin": "string",
      "name": "string",
      "rawData": "string",
      "state": "string"
    },
    "postalCode": "string"
  },
  "modification": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "type": "string"
  },
  "originalAmount": {
    "currency": "str",
    "value": 0
  },
  "paymentId": "string",
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "platformPayment": {
    "account": "string",
    "description": "string",
    "modificationMerchantReference": "string",
    "modificationPspReference": "string",
    "paymentMerchantReference": "string",
    "paymentPspReference": "string",
    "reference": "string",
    "type": "AcquiringFees"
  },
  "processingType": "atmWithdraw",
  "purposeCode": "string",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "relayedAuthorisationData": {
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "reference": "string",
    "status": "string"
  },
  "status": "string",
  "threeDSecure": {
    "acsTransactionId": "string",
    "authenticationResult": "string",
    "authenticationType": "string",
    "dsTransactionId": "string"
  },
  "transactionRulesResult": {
    "advice": "string",
    "allRulesPassed": true,
    "failedTransactionRules": [
      {
        "reason": "string",
        "transactionRule": {
          "description": "string",
          "id": "string",
          "reference": "string"
        },
        "transactionRuleSource": {
          "id": "string",
          "type": "string"
        }
      }
    ],
    "score": 0
  },
  "validationResult": [
    {
      "result": "string",
      "type": "string"
    }
  ],
  "valueDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the account holder.|
|amount|[Amount](#schemaamount)|false|none|The amount converted to the balance account's currency, in case the original transaction currency is different.<br><br>* A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|authCode|string|false|none|The authorisation code for the payment.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the balance account.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|counterparty|[Counterparty](#schemacounterparty)|true|none|Contains information about the other party in the transaction.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|description|string|false|none|Your description for the transfer. If you send a description longer than 140 characters, the text is truncated.|
|id|string|false|none|The ID of the resource.|
|merchantData|[MerchantData](#schemamerchantdata)|false|none|Contains information about the merchant that processed the payment. This object is only included for payment authorisation requests and captures.|
|modification|[NotificationModificationData](#schemanotificationmodificationdata)|false|none|Contains the amount and type of modification that triggered the notification. For example, this object contains the amount of a partial cancellation or partial expired authorisation.|
|originalAmount|[Amount](#schemaamount)|false|none|The amount in the original currency of the transaction.<br><br>* A _positive_ value means the amount is added to the balance account.<br><br> * A _negative_ value means the amount is deducted from the balance account. |
|paymentId|string|false|none|The ID of the original payment authorisation, refund, or funds transfer request. Use this to trace the original request from the `balancePlatform.payment.created` webhook.|
|paymentInstrument|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the payment instrument.|
|platformPayment|[PlatformPayment](#schemaplatformpayment)|false|none|Contains information about the related platform payment.|
|processingType|string|false|none|Contains information about how the payment was processed. Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**, **unknown**.|
|purposeCode|string|false|none|Indicates the purpose of the outgoing transfer. Adyen sets this to:<br><br>* **payoutManual** when the transfer was triggered by a one-off payout using the [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers) endpoint.<br><br> * **payoutSweep** when the transfer was triggered by a scheduled payout using [`sweepConfigurations`](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_sweepConfigurations).|
|reference|string|false|none|The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty.<br><br>* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers) request.<br><br> * For incoming funds, this is the reference from the sender.|
|relayedAuthorisationData|[RelayedAuthorisationData](#schemarelayedauthorisationdata)|false|none|If you're using [relayed authorisation](https://docs.adyen.com/issuing/processing-payments-for-cards#relayed-authorisation), this object contains information from the relayed authorisation response from your server.|
|status|string|false|none|The event status. The possible values depend on the `type`.<br><br>* **Authorised**, **Refused**, or **Error** for type `balancePlatform.payment.created`<br><br> * **Expired** or **Cancelled** or **AuthAdjustmentAuthorised** or **AuthAdjustmentRefused** for type `balancePlatform.payment.updated`<br><br>* **PendingIncomingTransfer** for type `balancePlatform.incomingTransfer.created` <br><br>* **Refunded** or **IncomingTransfer** for type `balancePlatform.incomingTransfer.updated`<br><br> * **Captured** or **OutgoingTransfer** for type `balancePlatform.outgoingTransfer.created`<br><br>* **TransferConfirmed**, **TransferSentOut**, or **TransferFailed** for type `balancePlatform.outgoingTransfer.updated`<br><br>  |
|threeDSecure|[ThreeDSecure](#schemathreedsecure)|false|none|The data of the result from the 3DS authentication.|
|transactionRulesResult|[TransactionRulesResult](#schematransactionrulesresult)|false|none|Contains results from the evaluation of [transaction rules](https://docs.adyen.com/issuing/transaction-rules).|
|validationResult|[[ValidationResult](#schemavalidationresult)]|false|none|Array of checks that Adyen performed to validate the payment and the result of each.|
|valueDate|string(date-time)|false|none|Indicates the expected settlement date of this transaction, in ISO 8601 extended format. For example, **2021-08-17T15:34:37+02:00**.|

#### Enumerated Values

|Property|Value|
|---|---|
|processingType|atmWithdraw|
|processingType|balanceInquiry|
|processingType|ecommerce|
|processingType|moto|
|processingType|pos|
|processingType|purchaseWithCashback|
|processingType|recurring|
|processingType|token|
|processingType|unknown|

<h2 id="tocS_TransactionRuleReference">TransactionRuleReference</h2>
<!-- backwards compatibility -->
<a id="schematransactionrulereference"></a>
<a id="schema_TransactionRuleReference"></a>
<a id="tocStransactionrulereference"></a>
<a id="tocstransactionrulereference"></a>

```json
{
  "description": "string",
  "id": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|reference|string|false|none|The reference for the resource.|

<h2 id="tocS_TransactionRuleSource">TransactionRuleSource</h2>
<!-- backwards compatibility -->
<a id="schematransactionrulesource"></a>
<a id="schema_TransactionRuleSource"></a>
<a id="tocStransactionrulesource"></a>
<a id="tocstransactionrulesource"></a>

```json
{
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the resource, when applicable.|
|type|string|false|none|Indicates the type of resource for which the transaction rule is defined.<br><br>Possible values:<br><br> * **PaymentInstrumentGroup**<br><br>* **PaymentInstrument**<br><br>* **BalancePlatform**<br><br>* **EntityUsageConfiguration**<br><br>* **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen.|

<h2 id="tocS_TransactionRulesResult">TransactionRulesResult</h2>
<!-- backwards compatibility -->
<a id="schematransactionrulesresult"></a>
<a id="schema_TransactionRulesResult"></a>
<a id="tocStransactionrulesresult"></a>
<a id="tocstransactionrulesresult"></a>

```json
{
  "advice": "string",
  "allRulesPassed": true,
  "failedTransactionRules": [
    {
      "reason": "string",
      "transactionRule": {
        "description": "string",
        "id": "string",
        "reference": "string"
      },
      "transactionRuleSource": {
        "id": "string",
        "type": "string"
      }
    }
  ],
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advice|string|false|none|The advice given by the Risk analysis.|
|allRulesPassed|boolean|false|none|Indicates whether the transaction passed the evaluation for all transaction rules.|
|failedTransactionRules|[[TransactionEventViolation](#schematransactioneventviolation)]|false|none|Array containing all the transaction rules that the transaction violated. This list is only sent when `allRulesPassed` is **false**.|
|score|integer(int32)|false|none|The score of the Risk analysis.|

<h2 id="tocS_ValidationResult">ValidationResult</h2>
<!-- backwards compatibility -->
<a id="schemavalidationresult"></a>
<a id="schema_ValidationResult"></a>
<a id="tocSvalidationresult"></a>
<a id="tocsvalidationresult"></a>

```json
{
  "result": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|The result of the check.<br><br>Possible values:<br><br>- **valid**: The validation was successful.<br><br>- **invalid**: The validation failed.<br><br>- **notValidated**: The validation was not performed because some services were unreachable or Adyen does not have the information needed to perform the check.<br><br>- **notApplicable**: The validation is not applicable.|
|type|string|false|none|Type of check.|
