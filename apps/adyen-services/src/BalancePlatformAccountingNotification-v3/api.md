<h1 id="accounting-notifications">Accounting notifications v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends notifications through webhooks to inform your system about incoming and outgoing transfers in your platform.

You can use these webhooks to build your implementation. For example, you can use this information to update balances in your own dashboards or to keep track of incoming funds.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Email: <a href="mailto:developer-experience@adyen.com">Adyen Developer Experience team</a> 
Web: <a href="https://www.adyen.help/hc/en-us/community/topics">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="accounting-notifications-webhooks">Webhooks</h1>

## Transfer created

<a id="opIdpost-balancePlatform.transfer.created"></a>

`POST balancePlatform.transfer.created`

Adyen sends this webhook when there are fund movements on your platform.

> Body parameter

```json
{
  "data": {
    "accountHolder": {
      "description": "Your description for the account holder",
      "id": "AH00000000000000000000001",
      "reference": "Your reference for the account holder"
    },
    "amount": {
      "currency": "EUR",
      "value": 9999
    },
    "balanceAccount": {
      "id": "BA00000000000000000000001"
    },
    "balanceAccountId": "BA00000000000000000000001",
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "category": "platformPayment",
    "creationDate": "2022-08-15T13:30:05+02:00",
    "description": "Your description for the transfer",
    "direction": "incoming",
    "events": [
      {
        "bookingDate": "2022-08-15T13:30:18+02:00",
        "mutations": [],
        "status": "received"
      }
    ],
    "id": "3JY1Y65VWIRGUETT",
    "modificationMerchantReference": "<auto>",
    "modificationPspReference": "8026605630053940",
    "paymentMerchantReference": "Payment reference",
    "pspPaymentReference": "CWBC43ZX2VTFWR82",
    "reason": "approved",
    "reference": "Your reference for the transfer",
    "sequenceNumber": 1,
    "status": "received",
    "type": "capture"
  },
  "environment": "test",
  "type": "balancePlatform.transfer.created"
}
```

<h3 id="transfer-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferNotificationRequest](#schematransfernotificationrequest)|false|none|
|» data|body|[TransferNotificationData](#schematransfernotificationdata)|true|Contains details about the event.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|false|The type of the notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.transfer.created|
|» type|balancePlatform.transfer.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "[accepted]"
}
```

<h3 id="transfer-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Transfer updated

<a id="opIdpost-balancePlatform.transfer.updated"></a>

`POST balancePlatform.transfer.updated`

Adyen sends this webhook when the status of a transfer changes. Use the `data.id` to track the original transfer resource in the [balancePlatform.transfer.created](https://docs.adyen.com/api-explorer/accounting-webhooks/1/post/balancePlatform.transfer.created) webhook.

The `status` field indicates the event that triggered the webhook. 



> Body parameter

```json
{
  "data": {
    "accountHolder": {
      "description": "Your description for the account holder",
      "id": "AH00000000000000000000001",
      "reference": "Your reference for the account holder"
    },
    "amount": {
      "currency": "EUR",
      "value": 9999
    },
    "balanceAccount": {
      "id": "BA00000000000000000000001"
    },
    "balanceAccountId": "BA00000000000000000000001",
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "balances": [
      {
        "currency": "EUR",
        "reserved": 9999
      }
    ],
    "category": "platformPayment",
    "creationDate": "2022-08-15T13:30:05+02:00",
    "description": "Your description for the transfer",
    "direction": "incoming",
    "events": [
      {
        "bookingDate": "2022-08-15T13:30:18+02:00",
        "mutations": [],
        "status": "received"
      },
      {
        "bookingDate": "2022-08-15T13:30:18+02:00",
        "mutations": [
          {
            "currency": "EUR",
            "reserved": 9999
          }
        ],
        "status": "authorised"
      }
    ],
    "id": "3JY1Y65VWIRGUETT",
    "modificationMerchantReference": "<auto>",
    "modificationPspReference": "8026605630053940",
    "paymentMerchantReference": "Payment reference",
    "pspPaymentReference": "CWBC43ZX2VTFWR82",
    "reason": "approved",
    "reference": "Your reference for the transfer",
    "sequenceNumber": 2,
    "status": "authorised",
    "type": "capture"
  },
  "environment": "test",
  "type": "balancePlatform.transfer.updated"
}
```

<h3 id="transfer-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferNotificationRequest](#schematransfernotificationrequest)|false|none|
|» data|body|[TransferNotificationData](#schematransfernotificationdata)|true|Contains details about the event.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» type|body|string|false|The type of the notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.transfer.created|
|» type|balancePlatform.transfer.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "[accepted]"
}
```

<h3 id="transfer-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
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

<h2 id="tocS_AdditionalBankIdentification">AdditionalBankIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalbankidentification"></a>
<a id="schema_AdditionalBankIdentification"></a>
<a id="tocSadditionalbankidentification"></a>
<a id="tocsadditionalbankidentification"></a>

```json
{
  "code": "string",
  "type": "gbSortCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The value of the additional bank identification.|
|type|string|false|none|The type of additional bank identification, depending on the country.<br><br>Possible values:<br><br> * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces<br> * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|gbSortCode|
|type|usRoutingNumber|

<h2 id="tocS_Address-2">Address-2</h2>
<!-- backwards compatibility -->
<a id="schemaaddress-2"></a>
<a id="schema_Address-2"></a>
<a id="tocSaddress-2"></a>
<a id="tocsaddress-2"></a>

```json
{
  "city": "string",
  "country": "string",
  "line1": "string",
  "line2": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.|
|country|string|true|none|The two-character ISO 3166-1 alpha-2 country code. For example, **US**.<br>>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|line1|string|false|none|First line of the street address.|
|line2|string|false|none|Second line of the street address.|
|postalCode|string|false|none|The postal code.<br>Maximum length:<br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries.|
|stateOrProvince|string|false|none|The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br>> Required for the US and Canada.|

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
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|value|integer(int64)|true|none|The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_AmountAdjustment">AmountAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemaamountadjustment"></a>
<a id="schema_AmountAdjustment"></a>
<a id="tocSamountadjustment"></a>
<a id="tocsamountadjustment"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "amountAdjustmentType": "atmMarkup",
  "basepoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The adjustment amount.|
|amountAdjustmentType|string|false|none|The type of markup that is applied to an authorised payment.<br><br>Possible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.|
|basepoints|integer(int32)|false|none|The basepoints associated with the applied markup.|

#### Enumerated Values

|Property|Value|
|---|---|
|amountAdjustmentType|atmMarkup|
|amountAdjustmentType|authHoldReserve|
|amountAdjustmentType|exchange|
|amountAdjustmentType|forexMarkup|

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
  "type": "brLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number (without separators or whitespace).|
|bankCode|string|true|none|The 3-digit Brazilian bank code (with leading zeros).|
|branchNumber|string|true|none|The bank account branch number (without separators or whitespace).|
|type|string|true|none|**brLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|brLocal|

<h2 id="tocS_BalanceMutation">BalanceMutation</h2>
<!-- backwards compatibility -->
<a id="schemabalancemutation"></a>
<a id="schema_BalanceMutation"></a>
<a id="tocSbalancemutation"></a>
<a id="tocsbalancemutation"></a>

```json
{
  "balance": 0,
  "currency": "string",
  "received": 0,
  "reserved": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int64)|false|none|The amount in the payment's currency that is debited or credited on the balance accounting register.|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|received|integer(int64)|false|none|The amount in the payment's currency that is debited or credited on the received accounting register.|
|reserved|integer(int64)|false|none|The amount in the payment's currency that is debited or credited on the reserved accounting register.|

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
|notificationResponse|string|false|none|Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).|

<h2 id="tocS_BankAccountV3">BankAccountV3</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountv3"></a>
<a id="schema_BankAccountV3"></a>
<a id="tocSbankaccountv3"></a>
<a id="tocsbankaccountv3"></a>

```json
{
  "accountHolder": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "firstName": "string",
    "fullName": "string",
    "lastName": "string",
    "type": "unknown"
  },
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
|accountHolder|[PartyIdentification-2](#schemapartyidentification-2)|true|none|Information about the owner of the bank account.|
|accountIdentification|[AULocalAccountIdentification](#schemaaulocalaccountidentification) \| [BRLocalAccountIdentification](#schemabrlocalaccountidentification) \| [CALocalAccountIdentification](#schemacalocalaccountidentification) \| [CZLocalAccountIdentification](#schemaczlocalaccountidentification) \| [DKLocalAccountIdentification](#schemadklocalaccountidentification) \| [HULocalAccountIdentification](#schemahulocalaccountidentification) \| [IbanAccountIdentification](#schemaibanaccountidentification) \| [NOLocalAccountIdentification](#schemanolocalaccountidentification) \| [NumberAndBicAccountIdentification](#schemanumberandbicaccountidentification) \| [PLLocalAccountIdentification](#schemapllocalaccountidentification) \| [SELocalAccountIdentification](#schemaselocalaccountidentification) \| [SGLocalAccountIdentification](#schemasglocalaccountidentification) \| [UKLocalAccountIdentification](#schemauklocalaccountidentification) \| [USLocalAccountIdentification](#schemauslocalaccountidentification)|true|none|Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.|

<h2 id="tocS_CALocalAccountIdentification">CALocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemacalocalaccountidentification"></a>
<a id="schema_CALocalAccountIdentification"></a>
<a id="tocScalocalaccountidentification"></a>
<a id="tocscalocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "institutionNumber": "str",
  "transitNumber": "strin",
  "type": "caLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 5- to 12-digit bank account number, without separators or whitespace.|
|institutionNumber|string|true|none|The 3-digit institution number, without separators or whitespace.|
|transitNumber|string|true|none|The 5-digit transit number, without separators or whitespace.|
|type|string|true|none|**caLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
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

<h2 id="tocS_CounterpartyV3">CounterpartyV3</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyv3"></a>
<a id="schema_CounterpartyV3"></a>
<a id="tocScounterpartyv3"></a>
<a id="tocscounterpartyv3"></a>

```json
{
  "balanceAccountId": "string",
  "bankAccount": {
    "accountHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "type": "unknown"
    },
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    }
  },
  "merchant": {
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
|balanceAccountId|string|false|none|Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).|
|bankAccount|[BankAccountV3](#schemabankaccountv3)|false|none|Contains information about the bank account.|
|merchant|[MerchantData](#schemamerchantdata)|false|none|Contains information about the merchant.|
|transferInstrumentId|string|false|none|Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).|

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

<h2 id="tocS_IbanAccountIdentification">IbanAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaibanaccountidentification"></a>
<a id="schema_IbanAccountIdentification"></a>
<a id="tocSibanaccountidentification"></a>
<a id="tocsibanaccountidentification"></a>

```json
{
  "iban": "string",
  "type": "iban"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iban|string|true|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|type|string|true|none|**iban**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|iban|

<h2 id="tocS_MerchantData">MerchantData</h2>
<!-- backwards compatibility -->
<a id="schemamerchantdata"></a>
<a id="schema_MerchantData"></a>
<a id="tocSmerchantdata"></a>
<a id="tocsmerchantdata"></a>

```json
{
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
|mcc|string|false|none|The merchant category code.|
|merchantId|string|false|none|The merchant identifier.|
|nameLocation|[NameLocation](#schemanamelocation)|false|none|Contains the merchant's name and location.|
|postalCode|string|false|none|The merchant postal code.|

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
    "type": "gbSortCode"
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

<h2 id="tocS_PartyIdentification-2">PartyIdentification-2</h2>
<!-- backwards compatibility -->
<a id="schemapartyidentification-2"></a>
<a id="schema_PartyIdentification-2"></a>
<a id="tocSpartyidentification-2"></a>
<a id="tocspartyidentification-2"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "line1": "string",
    "line2": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "firstName": "string",
  "fullName": "string",
  "lastName": "string",
  "type": "unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address-2](#schemaaddress-2)|false|none|Address of the bank account owner.|
|firstName|string|false|none|First name of the individual. Required when `type` is **individual**.|
|fullName|string|true|none|The name of the entity.|
|lastName|string|false|none|Last name of the individual. Required when `type` is **individual**.|
|type|string|false|none|The type of entity that owns the bank account.<br><br> Possible values: **individual**, **organization**, or **unknown**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|individual|
|type|organization|
|type|unknown|

<h2 id="tocS_PaymentInstrument">PaymentInstrument</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrument"></a>
<a id="schema_PaymentInstrument"></a>
<a id="tocSpaymentinstrument"></a>
<a id="tocspaymentinstrument"></a>

```json
{
  "description": "string",
  "id": "string",
  "reference": "string",
  "tokenType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|reference|string|false|none|The reference for the resource.|
|tokenType|string|false|none|The type of wallet the network token is associated with.|

<h2 id="tocS_RelayedAuthorisationData-2">RelayedAuthorisationData-2</h2>
<!-- backwards compatibility -->
<a id="schemarelayedauthorisationdata-2"></a>
<a id="schema_RelayedAuthorisationData-2"></a>
<a id="tocSrelayedauthorisationdata-2"></a>
<a id="tocsrelayedauthorisationdata-2"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`.|
|reference|string|false|none|Your reference for the relayed authorisation data.|

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
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|
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
|transactionRuleSource|[TransactionRuleSource](#schematransactionrulesource)|false|none|Contains the type and ID of the resource to which the transaction rule is linked.|

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

<h2 id="tocS_TransferEvent">TransferEvent</h2>
<!-- backwards compatibility -->
<a id="schematransferevent"></a>
<a id="schema_TransferEvent"></a>
<a id="tocStransferevent"></a>
<a id="tocstransferevent"></a>

```json
{
  "amountAdjustments": [
    {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "amountAdjustmentType": "atmMarkup",
      "basepoints": 0
    }
  ],
  "bookingDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "mutations": [
    {
      "balance": 0,
      "currency": "string",
      "received": 0,
      "reserved": 0
    }
  ],
  "originalAmount": {
    "currency": "str",
    "value": 0
  },
  "reason": "amountLimitExceded",
  "status": "atmWithdrawal",
  "transactionId": "string",
  "type": "accounting",
  "updateDate": "1970-01-01T00:00:00Z",
  "valueDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountAdjustments|[[AmountAdjustment](#schemaamountadjustment)]|false|none|The amount adjustments in this transfer.|
|bookingDate|string(date-time)|false|none|The date when the transfer request was sent.|
|id|string|false|none|The unique identifier of the transfer event.|
|mutations|[[BalanceMutation](#schemabalancemutation)]|false|none|The list of the balance mutation per event.|
|originalAmount|[Amount](#schemaamount)|false|none|The amount in the original currency.|
|reason|string|false|none|The reason for the transfer status.|
|status|string|false|none|The status of the transfer event.|
|transactionId|string|false|none|The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes.|
|type|string|false|none|The type of the transfer event. Possible values: **accounting**, **tracking**.|
|updateDate|string(date-time)|false|none|The date when the tracking status was updated.|
|valueDate|string(date-time)|false|none|A future date, when the funds are expected to be deducted from or credited to the balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|amountLimitExceded|
|reason|approved|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|error|
|reason|notEnoughBalance|
|reason|refusedByCounterpartyBank|
|reason|routeNotFound|
|reason|unknown|
|status|atmWithdrawal|
|status|atmWithdrawalReversalPending|
|status|atmWithdrawalReversed|
|status|authAdjustmentAuthorised|
|status|authAdjustmentError|
|status|authAdjustmentRefused|
|status|authorised|
|status|bankTransfer|
|status|bankTransferPending|
|status|booked|
|status|bookingPending|
|status|cancelled|
|status|capturePending|
|status|captureReversalPending|
|status|captureReversed|
|status|captured|
|status|chargeback|
|status|chargebackPending|
|status|chargebackReversalPending|
|status|chargebackReversed|
|status|credited|
|status|depositCorrection|
|status|depositCorrectionPending|
|status|dispute|
|status|disputeClosed|
|status|disputeExpired|
|status|disputeNeedsReview|
|status|error|
|status|expired|
|status|failed|
|status|fee|
|status|feePending|
|status|internalTransfer|
|status|internalTransferPending|
|status|invoiceDeduction|
|status|invoiceDeductionPending|
|status|manualCorrectionPending|
|status|manuallyCorrected|
|status|matchedStatement|
|status|matchedStatementPending|
|status|merchantPayin|
|status|merchantPayinPending|
|status|merchantPayinReversed|
|status|merchantPayinReversedPending|
|status|miscCost|
|status|miscCostPending|
|status|paymentCost|
|status|paymentCostPending|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refused|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|
|type|accounting|
|type|tracking|

<h2 id="tocS_TransferNotificationData">TransferNotificationData</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationdata"></a>
<a id="schema_TransferNotificationData"></a>
<a id="tocStransfernotificationdata"></a>
<a id="tocstransfernotificationdata"></a>

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
  "balanceAccountId": "string",
  "balances": [
    {
      "balance": 0,
      "currency": "string",
      "received": 0,
      "reserved": 0
    }
  ],
  "category": "bank",
  "counterparty": {
    "balanceAccountId": "string",
    "bankAccount": {
      "accountHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "type": "unknown"
      },
      "accountIdentification": {
        "accountNumber": "string",
        "bsbCode": "string",
        "type": "auLocal"
      }
    },
    "merchant": {
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
  "description": "string",
  "direction": "incoming",
  "events": [
    {
      "amountAdjustments": [
        {
          "amount": {
            "currency": "str",
            "value": 0
          },
          "amountAdjustmentType": "atmMarkup",
          "basepoints": 0
        }
      ],
      "bookingDate": "1970-01-01T00:00:00Z",
      "id": "string",
      "mutations": [
        {
          "balance": 0,
          "currency": "string",
          "received": 0,
          "reserved": 0
        }
      ],
      "originalAmount": {
        "currency": "str",
        "value": 0
      },
      "reason": "amountLimitExceded",
      "status": "atmWithdrawal",
      "transactionId": "string",
      "type": "accounting",
      "updateDate": "1970-01-01T00:00:00Z",
      "valueDate": "1970-01-01T00:00:00Z"
    }
  ],
  "id": "string",
  "modificationMerchantReference": "string",
  "modificationPspReference": "string",
  "panEntryMode": "chip",
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string",
    "tokenType": "string"
  },
  "paymentInstrumentId": "string",
  "paymentMerchantReference": "string",
  "priority": "crossBorder",
  "processingType": "atmWithdraw",
  "pspPaymentReference": "string",
  "reason": "amountLimitExceded",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "relayedAuthorisationData": {
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "reference": "string"
  },
  "sequenceNumber": 0,
  "status": "atmWithdrawal",
  "tracking": {
    "status": "credited"
  },
  "transactionId": "string",
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
  "type": "atmWithdrawal",
  "validationFacts": [
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
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|The account holder associated with the balance account used in the transfer.|
|amount|[Amount](#schemaamount)|true|none|The amount of the transfer.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the balance account involved in the transfer.|
|balanceAccountId|string|false|none|**Deprecated.** The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).|
|balances|[[BalanceMutation](#schemabalancemutation)]|false|none|The list of the latest balance statuses in the transfer.|
|category|string|true|none|The type of transfer.<br><br>Possible values:<br><br> - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.<br><br>- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.<br><br>- **issuedCard**: Transfer initiated by a Adyen-issued card.<br><br>- **platformPayment**: Fund movements related to payments that are acquired for your users.|
|counterparty|[CounterpartyV3](#schemacounterpartyv3)|true|none|The other party in the transfer.|
|description|string|false|none|A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.|
|direction|string|false|none|The direction of the transfer.<br><br>Possible values: **incoming**, **outgoing**.|
|events|[[TransferEvent](#schematransferevent)]|false|none|The list of events leading up to the current status of the transfer.|
|id|string|false|none|The ID of the resource.|
|modificationMerchantReference|string|false|none|The capture's merchant reference included in the transfer.|
|modificationPspReference|string|false|none|The capture reference included in the transfer.|
|panEntryMode|string|false|none|Indicates the method used for entering the PAN to initiate a transaction.<br><br>Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.|
|paymentInstrument|[PaymentInstrument](#schemapaymentinstrument)|false|none|Contains information about the payment instrument used in the transfer.|
|paymentInstrumentId|string|false|none|The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).|
|paymentMerchantReference|string|false|none|The payment's merchant reference included in the transfer.|
|priority|string|false|none|The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.<br><br>* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html)<br><br>.* **crossBorder**: High value transfer to receipt in a different country. |
|processingType|string|false|none|Contains information about how the payment was processed. For example, **ecommerce** for online or **pos** for in-person payments.|
|pspPaymentReference|string|false|none|The payment reference included in the transfer.|
|reason|string|false|none|Additional information about the status of the transfer.|
|reference|string|false|none|Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.<br><br>- **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.|
|relayedAuthorisationData|[RelayedAuthorisationData-2](#schemarelayedauthorisationdata-2)|false|none|If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server.|
|sequenceNumber|integer(int32)|false|none|The sequence number of the transfer notification. The numbers start from 1 and increase with each new notification for a specific transfer.<br><br>It can help you restore the correct sequence of events even if they arrive out of order.|
|status|string|true|none|The result of the transfer.<br><br> For example, **authorised**, **refused**, or **error**.|
|tracking|[TransferNotificationTransferTracking](#schematransfernotificationtransfertracking)|false|none|The tracking information for the transfer.|
|transactionId|string|false|none|**Deprecated.** The ID of the transaction that is created based on the transfer.|
|transactionRulesResult|[TransactionRulesResult](#schematransactionrulesresult)|false|none|Contains the results of the evaluation of the transaction rules.|
|type|string|false|none|The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.|
|validationFacts|[[TransferNotificationValidationFact](#schematransfernotificationvalidationfact)]|false|none|The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|internal|
|category|issuedCard|
|category|platformPayment|
|direction|incoming|
|direction|outgoing|
|panEntryMode|chip|
|panEntryMode|cof|
|panEntryMode|contactless|
|panEntryMode|ecommerce|
|panEntryMode|magstripe|
|panEntryMode|manual|
|panEntryMode|token|
|priority|crossBorder|
|priority|directDebit|
|priority|fast|
|priority|instant|
|priority|regular|
|priority|wire|
|processingType|atmWithdraw|
|processingType|balanceInquiry|
|processingType|ecommerce|
|processingType|moto|
|processingType|pos|
|processingType|purchaseWithCashback|
|processingType|recurring|
|processingType|token|
|reason|amountLimitExceded|
|reason|approved|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|error|
|reason|notEnoughBalance|
|reason|refusedByCounterpartyBank|
|reason|routeNotFound|
|reason|unknown|
|status|atmWithdrawal|
|status|atmWithdrawalReversalPending|
|status|atmWithdrawalReversed|
|status|authAdjustmentAuthorised|
|status|authAdjustmentError|
|status|authAdjustmentRefused|
|status|authorised|
|status|bankTransfer|
|status|bankTransferPending|
|status|booked|
|status|bookingPending|
|status|cancelled|
|status|capturePending|
|status|captureReversalPending|
|status|captureReversed|
|status|captured|
|status|chargeback|
|status|chargebackPending|
|status|chargebackReversalPending|
|status|chargebackReversed|
|status|credited|
|status|depositCorrection|
|status|depositCorrectionPending|
|status|dispute|
|status|disputeClosed|
|status|disputeExpired|
|status|disputeNeedsReview|
|status|error|
|status|expired|
|status|failed|
|status|fee|
|status|feePending|
|status|internalTransfer|
|status|internalTransferPending|
|status|invoiceDeduction|
|status|invoiceDeductionPending|
|status|manualCorrectionPending|
|status|manuallyCorrected|
|status|matchedStatement|
|status|matchedStatementPending|
|status|merchantPayin|
|status|merchantPayinPending|
|status|merchantPayinReversed|
|status|merchantPayinReversedPending|
|status|miscCost|
|status|miscCostPending|
|status|paymentCost|
|status|paymentCostPending|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refused|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|
|type|atmWithdrawal|
|type|atmWithdrawalReversal|
|type|balanceAdjustment|
|type|balanceRollover|
|type|bankTransfer|
|type|capture|
|type|captureReversal|
|type|chargeback|
|type|chargebackReversal|
|type|depositCorrection|
|type|fee|
|type|grant|
|type|installment|
|type|installmentReversal|
|type|internalTransfer|
|type|invoiceDeduction|
|type|leftover|
|type|manualCorrection|
|type|miscCost|
|type|payment|
|type|paymentCost|
|type|refund|
|type|refundReversal|
|type|repayment|
|type|reserveAdjustment|
|type|secondChargeback|

<h2 id="tocS_TransferNotificationRequest">TransferNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationrequest"></a>
<a id="schema_TransferNotificationRequest"></a>
<a id="tocStransfernotificationrequest"></a>
<a id="tocstransfernotificationrequest"></a>

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
    "balanceAccountId": "string",
    "balances": [
      {
        "balance": 0,
        "currency": "string",
        "received": 0,
        "reserved": 0
      }
    ],
    "category": "bank",
    "counterparty": {
      "balanceAccountId": "string",
      "bankAccount": {
        "accountHolder": {
          "address": {
            "city": "string",
            "country": "string",
            "line1": "string",
            "line2": "string",
            "postalCode": "string",
            "stateOrProvince": "string"
          },
          "firstName": "string",
          "fullName": "string",
          "lastName": "string",
          "type": "unknown"
        },
        "accountIdentification": {
          "accountNumber": "string",
          "bsbCode": "string",
          "type": "auLocal"
        }
      },
      "merchant": {
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
    "description": "string",
    "direction": "incoming",
    "events": [
      {
        "amountAdjustments": [
          {
            "amount": {
              "currency": "str",
              "value": 0
            },
            "amountAdjustmentType": "atmMarkup",
            "basepoints": 0
          }
        ],
        "bookingDate": "1970-01-01T00:00:00Z",
        "id": "string",
        "mutations": [
          {
            "balance": 0,
            "currency": "string",
            "received": 0,
            "reserved": 0
          }
        ],
        "originalAmount": {
          "currency": "str",
          "value": 0
        },
        "reason": "amountLimitExceded",
        "status": "atmWithdrawal",
        "transactionId": "string",
        "type": "accounting",
        "updateDate": "1970-01-01T00:00:00Z",
        "valueDate": "1970-01-01T00:00:00Z"
      }
    ],
    "id": "string",
    "modificationMerchantReference": "string",
    "modificationPspReference": "string",
    "panEntryMode": "chip",
    "paymentInstrument": {
      "description": "string",
      "id": "string",
      "reference": "string",
      "tokenType": "string"
    },
    "paymentInstrumentId": "string",
    "paymentMerchantReference": "string",
    "priority": "crossBorder",
    "processingType": "atmWithdraw",
    "pspPaymentReference": "string",
    "reason": "amountLimitExceded",
    "reference": "string",
    "referenceForBeneficiary": "string",
    "relayedAuthorisationData": {
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "reference": "string"
    },
    "sequenceNumber": 0,
    "status": "atmWithdrawal",
    "tracking": {
      "status": "credited"
    },
    "transactionId": "string",
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
    "type": "atmWithdrawal",
    "validationFacts": [
      {
        "result": "string",
        "type": "string"
      }
    ]
  },
  "environment": "string",
  "type": "balancePlatform.transfer.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TransferNotificationData](#schematransfernotificationdata)|true|none|Contains details about the event.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|type|string|false|none|The type of the notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.transfer.created|
|type|balancePlatform.transfer.updated|

<h2 id="tocS_TransferNotificationTransferTracking">TransferNotificationTransferTracking</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationtransfertracking"></a>
<a id="schema_TransferNotificationTransferTracking"></a>
<a id="tocStransfernotificationtransfertracking"></a>
<a id="tocstransfernotificationtransfertracking"></a>

```json
{
  "status": "credited"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The tracking status of the transfer.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|credited|

<h2 id="tocS_TransferNotificationValidationFact">TransferNotificationValidationFact</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationvalidationfact"></a>
<a id="schema_TransferNotificationValidationFact"></a>
<a id="tocStransfernotificationvalidationfact"></a>
<a id="tocstransfernotificationvalidationfact"></a>

```json
{
  "result": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|The evaluation result of the validation fact.|
|type|string|false|none|The type of the validation fact.|

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
