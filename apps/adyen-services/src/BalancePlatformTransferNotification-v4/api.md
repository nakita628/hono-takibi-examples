<h1 id="transfer-webhooks">Transfer webhooks v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to inform your system about incoming and outgoing transfers in your platform.

You can use these webhooks to build your implementation. For example, you can use this information to update balances in your own dashboards or to keep track of incoming funds.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="transfer-webhooks-webhooks">Webhooks</h1>

## Transfer created

<a id="opIdpost-balancePlatform.transfer.created"></a>

`POST balancePlatform.transfer.created`

Adyen sends this webhook when there are fund movements on your platform.

> Body parameter

```json
{
  "data": {
    "id": "2WT1N05XXY7P9XH9",
    "type": "internalTransfer",
    "accountHolder": {
      "description": "Your description of the account holder of the target balance account",
      "id": "AH00000000000000000000002",
      "reference": "Your reference of the account holder"
    },
    "amount": {
      "currency": "EUR",
      "value": 1000
    },
    "balanceAccount": {
      "description": "Your description of the target balance account",
      "id": "BA00000000000000000000002"
    },
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "balances": [
      {
        "currency": "EUR",
        "received": 1000
      }
    ],
    "category": "internal",
    "creationDate": "2023-02-28T13:30:05+02:00",
    "description": "Your description of the transfer",
    "direction": "incoming",
    "events": [
      {
        "bookingDate": "2023-02-28T13:30:18+02:00",
        "id": "JDRF00000000000000000000000001",
        "mutations": [
          {
            "currency": "EUR",
            "received": 1000
          }
        ],
        "status": "received",
        "type": "accounting"
      }
    ],
    "reason": "approved",
    "reference": "Your reference of the transfer",
    "referenceForBeneficiary": "Your-reference-for-the-recipient-of-the-transfer-request",
    "sequenceNumber": 1,
    "status": "received"
  },
  "environment": "test",
  "timestamp": "2023-02-28T13:27:05+02:00",
  "type": "balancePlatform.transfer.created"
}
```

<h3 id="transfer-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferNotificationRequest](#schematransfernotificationrequest)|false|none|
|» data|body|[TransferData](#schematransferdata)|true|Contains details about the event.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|false|The type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.transfer.created|
|» type|balancePlatform.transfer.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="transfer-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Transfer updated

<a id="opIdpost-balancePlatform.transfer.updated"></a>

`POST balancePlatform.transfer.updated`

Adyen sends this webhook when the status of a transfer changes. Use the `data.id` to track the original transfer resource in the [balancePlatform.transfer.created](https://docs.adyen.com/api-explorer/transfer-webhooks/1/post/balancePlatform.transfer.created) webhook.

The `status` field indicates the event that triggered the webhook. 



> Body parameter

```json
{
  "data": {
    "accountHolder": {
      "description": "Your description of the account holder",
      "id": "AH00000000000000000000001",
      "reference": "Your reference for the account holder"
    },
    "amount": {
      "currency": "EUR",
      "value": 10000
    },
    "balanceAccount": {
      "description": "Your description of the balance account from where the amount is debited",
      "id": "BA00000000000000000000001",
      "reference": "Your reference for the balance account"
    },
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "balances": [
      {
        "currency": "EUR",
        "received": 0,
        "reserved": -10000
      }
    ],
    "category": "bank",
    "categoryData": {
      "priority": "regular",
      "type": "bank"
    },
    "creationDate": "2023-02-28T13:30:05+02:00",
    "description": "Your user description of the transfer",
    "direction": "outgoing",
    "events": [
      {
        "bookingDate": "2023-02-28T13:30:18+02:00",
        "id": "EVJN00000000000000000000000001",
        "mutations": [
          {
            "currency": "EUR",
            "received": -10000
          }
        ],
        "status": "received",
        "type": "accounting"
      },
      {
        "bookingDate": "2023-02-28T13:30:18+02:00",
        "id": "EVJN00000000000000000000000002",
        "mutations": [
          {
            "currency": "EUR",
            "received": 10000,
            "reserved": -10000
          }
        ],
        "status": "authorised",
        "type": "accounting"
      }
    ],
    "id": "6JKRLZ8LOT47J7RY",
    "reason": "approved",
    "reference": "Your user reference for the transfer",
    "referenceForBeneficiary": "Your user reference for the beneficiary",
    "sequenceNumber": 2,
    "transactionRulesResult": {
      "allHardBlockRulesPassed": true
    },
    "status": "authorised",
    "type": "bankTransfer"
  },
  "environment": "test",
  "timestamp": "2023-02-28T13:27:05+02:00",
  "type": "balancePlatform.transfer.updated"
}
```

<h3 id="transfer-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferNotificationRequest](#schematransfernotificationrequest)|false|none|
|» data|body|[TransferData](#schematransferdata)|true|Contains details about the event.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|false|The type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.transfer.created|
|» type|balancePlatform.transfer.updated|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "string"
}
```

<h3 id="transfer-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
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
  "line1": "string",
  "line2": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**.<br>|
|country|string|true|none|The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**.|
|line1|string|false|none|The first line of the street address.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**.<br>|
|line2|string|false|none|The second line of the street address.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**.<br>|
|postalCode|string|false|none|The postal code.<br>Maximum length:<br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries.<br><br>Supported characters: **[a-z] [A-Z] [0-9]** and Space.<br><br>> Required for addresses in the US.<br>|
|stateOrProvince|string|false|none|   The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br><br>   > Required for the US and Canada.<br>|

<h2 id="tocS_Airline">Airline</h2>
<!-- backwards compatibility -->
<a id="schemaairline"></a>
<a id="schema_Airline"></a>
<a id="tocSairline"></a>
<a id="tocsairline"></a>

```json
{
  "legs": [
    {
      "arrivalAirportCode": "string",
      "basicFareCode": "string",
      "carrierCode": "string",
      "departureAirportCode": "string",
      "departureDate": "string",
      "flightNumber": "string"
    }
  ],
  "ticketNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legs|[[Leg](#schemaleg)]|false|none|Details about the flight legs for this ticket.|
|ticketNumber|string|false|none|The ticket's unique identifier|

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
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

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
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  },
  "accountIdentification": {
    "accountNumber": "string",
    "bsbCode": "string",
    "type": "auLocal"
  },
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[PartyIdentification](#schemapartyidentification)|true|none|Information about the owner of the bank account.|
|accountIdentification|[AULocalAccountIdentification](#schemaaulocalaccountidentification) \| [BRLocalAccountIdentification](#schemabrlocalaccountidentification) \| [CALocalAccountIdentification](#schemacalocalaccountidentification) \| [CZLocalAccountIdentification](#schemaczlocalaccountidentification) \| [DKLocalAccountIdentification](#schemadklocalaccountidentification) \| [HKLocalAccountIdentification](#schemahklocalaccountidentification) \| [HULocalAccountIdentification](#schemahulocalaccountidentification) \| [IbanAccountIdentification](#schemaibanaccountidentification) \| [NOLocalAccountIdentification](#schemanolocalaccountidentification) \| [NZLocalAccountIdentification](#schemanzlocalaccountidentification) \| [NumberAndBicAccountIdentification](#schemanumberandbicaccountidentification) \| [PLLocalAccountIdentification](#schemapllocalaccountidentification) \| [SELocalAccountIdentification](#schemaselocalaccountidentification) \| [SGLocalAccountIdentification](#schemasglocalaccountidentification) \| [UKLocalAccountIdentification](#schemauklocalaccountidentification) \| [USLocalAccountIdentification](#schemauslocalaccountidentification)|true|none|Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.|
|storedPaymentMethodId|string|false|none|The unique token that identifies the stored bank account details of the counterparty for a payout.|

<h2 id="tocS_BankCategoryData">BankCategoryData</h2>
<!-- backwards compatibility -->
<a id="schemabankcategorydata"></a>
<a id="schema_BankCategoryData"></a>
<a id="tocSbankcategorydata"></a>
<a id="tocsbankcategorydata"></a>

```json
{
  "priority": "crossBorder",
  "type": "bank"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priority|string|false|none|The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).|
|type|string|false|none|**bank**|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|crossBorder|
|priority|fast|
|priority|instant|
|priority|internal|
|priority|regular|
|priority|wire|
|type|bank|

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

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "cardHolder": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  },
  "cardIdentification": {
    "expiryMonth": "st",
    "expiryYear": "stri",
    "issueNumber": "st",
    "number": "string",
    "startMonth": "st",
    "startYear": "stri",
    "storedPaymentMethodId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolder|[PartyIdentification](#schemapartyidentification)|true|none|Contains information about the cardholder.|
|cardIdentification|[CardIdentification](#schemacardidentification)|true|none|Contains the identification details of the card.|

<h2 id="tocS_CardIdentification">CardIdentification</h2>
<!-- backwards compatibility -->
<a id="schemacardidentification"></a>
<a id="schema_CardIdentification"></a>
<a id="tocScardidentification"></a>
<a id="tocscardidentification"></a>

```json
{
  "expiryMonth": "st",
  "expiryYear": "stri",
  "issueNumber": "st",
  "number": "string",
  "startMonth": "st",
  "startYear": "stri",
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiryMonth|string|false|none|The expiry month of the card.<br><br>Format: two digits. Add a leading zero for single-digit months. For example:<br>* 03 = March<br>* 11 = November|
|expiryYear|string|false|none|The expiry year of the card.<br><br>Format: four digits. For example: 2020|
|issueNumber|string|false|none|The issue number of the card. Applies only to some UK debit cards.|
|number|string|false|none|The card number without any separators.<br><br>For security, the response only includes the last four digits of the card number.|
|startMonth|string|false|none|The month when the card was issued. Applies only to some UK debit cards.<br><br>Format: two digits. Add a leading zero for single-digit months. For example:<br>* 03 = March<br>* 11 = November|
|startYear|string|false|none|The year when the card was issued. Applies only to some UK debit cards.<br><br>Format: four digits. For example: 2020|
|storedPaymentMethodId|string|false|none|The unique [token](/payouts/payout-service/pay-out-to-cards/manage-card-information#save-card-details) created to identify the counterparty.<br><br>|

<h2 id="tocS_ConfirmationTrackingData">ConfirmationTrackingData</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmationtrackingdata"></a>
<a id="schema_ConfirmationTrackingData"></a>
<a id="tocSconfirmationtrackingdata"></a>
<a id="tocsconfirmationtrackingdata"></a>

```json
{
  "status": "credited",
  "type": "confirmation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of the transfer.<br><br>Possible values:<br><br> - **credited**: the funds are credited to your user's transfer instrument or bank account.- **accepted**: the request is accepted by the integration.|
|type|string|true|none|The type of the tracking event.<br><br>Possible values:<br><br> - **confirmation**: the transfer passed Adyen's internal review.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|credited|
|status|accepted|
|type|confirmation|

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
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    },
    "storedPaymentMethodId": "string"
  },
  "card": {
    "cardHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "cardIdentification": {
      "expiryMonth": "st",
      "expiryYear": "stri",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri",
      "storedPaymentMethodId": "string"
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
|balanceAccountId|string|false|none|The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).|
|bankAccount|[BankAccountV3](#schemabankaccountv3)|false|none|Contains information about the counterparty bank account.|
|card|[Card](#schemacard)|false|none|Contains information about the counterparty card.|
|merchant|[MerchantData](#schemamerchantdata)|false|none|Contains information about the merchant.|
|transferInstrumentId|string|false|none|The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).|

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

<h2 id="tocS_DirectDebitInformation">DirectDebitInformation</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitinformation"></a>
<a id="schema_DirectDebitInformation"></a>
<a id="tocSdirectdebitinformation"></a>
<a id="tocsdirectdebitinformation"></a>

```json
{
  "dateOfSignature": "1970-01-01T00:00:00Z",
  "dueDate": "1970-01-01T00:00:00Z",
  "mandateId": "string",
  "sequenceType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfSignature|string(date-time)|false|none|The date when the direct debit mandate was accepted by your user, in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format.|
|dueDate|string(date-time)|false|none|The date when the funds are deducted from your user's balance account.|
|mandateId|string|false|none|Your unique identifier for the direct debit mandate.|
|sequenceType|string|false|none|Identifies the direct debit transfer's type.<br>Possible values: **OneOff**, **First**, **Recurring**, **Final**.|

<h2 id="tocS_EstimationTrackingData">EstimationTrackingData</h2>
<!-- backwards compatibility -->
<a id="schemaestimationtrackingdata"></a>
<a id="schema_EstimationTrackingData"></a>
<a id="tocSestimationtrackingdata"></a>
<a id="tocsestimationtrackingdata"></a>

```json
{
  "estimatedArrivalTime": "1970-01-01T00:00:00Z",
  "type": "estimation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedArrivalTime|string(date-time)|true|none|The estimated time the beneficiary should have access to the funds.|
|type|string|true|none|The type of tracking event. <br><br>Possible values: <br><br>- **estimation**: the estimated date and time of when the funds will be credited has been determined.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|estimation|

<h2 id="tocS_ExecutionDate">ExecutionDate</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiondate"></a>
<a id="schema_ExecutionDate"></a>
<a id="tocSexecutiondate"></a>
<a id="tocsexecutiondate"></a>

```json
{
  "date": "1970-01-01",
  "timezone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|false|none|The date when the transfer will be processed. This date must be:<br>* Within 30 days of the current date.<br>* In the [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html) **YYYY-MM-DD**. For example: 2025-01-31|
|timezone|string|false|none|The timezone that applies to the execution date. Use a timezone identifier from the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).<br><br>Example: **America/Los_Angeles**.<br> Default value: **Europe/Amsterdam**.|

<h2 id="tocS_ExternalReason">ExternalReason</h2>
<!-- backwards compatibility -->
<a id="schemaexternalreason"></a>
<a id="schema_ExternalReason"></a>
<a id="tocSexternalreason"></a>
<a id="tocsexternalreason"></a>

```json
{
  "code": "string",
  "description": "string",
  "namespace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The reason code.|
|description|string|false|none|The description of the reason code.|
|namespace|string|false|none|The namespace for the reason code.|

<h2 id="tocS_FundingInstrument">FundingInstrument</h2>
<!-- backwards compatibility -->
<a id="schemafundinginstrument"></a>
<a id="schema_FundingInstrument"></a>
<a id="tocSfundinginstrument"></a>
<a id="tocsfundinginstrument"></a>

```json
{
  "cardIdentification": {
    "expiryMonth": "st",
    "expiryYear": "stri",
    "issueNumber": "st",
    "number": "string",
    "startMonth": "st",
    "startYear": "stri",
    "storedPaymentMethodId": "string"
  },
  "networkPaymentReference": "string",
  "reference": "string",
  "sourceOfFunds": "DEBIT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardIdentification|[CardIdentification](#schemacardidentification)|false|none|Card details used for the transfer, such as the Primary Account Number (PAN) or stored payment method ID. Required if `sourceOfFunds` is **DEBIT**. Provide either:<br> - `storedPaymentMethodId` or <br> - `expiryMonth`, `expiryYear`, and `number`.|
|networkPaymentReference|string|false|none|The unique reference assigned by the card network for the pay-in transaction.|
|reference|string|false|none|Your internal reference that identifies this funding instrument. Required if `sourceOfFunds` is **DEPOSIT_ACCOUNT**.|
|sourceOfFunds|string|false|none|Indicates where the funds used for the transfer originated. Possible values are:<br>- **DEBIT** for card-to-card transfers.<br>- **DEPOSIT_ACCOUNT** for wallet-to-card transfers.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceOfFunds|DEBIT|
|sourceOfFunds|DEPOSIT_ACCOUNT|

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

<h2 id="tocS_InterchangeData">InterchangeData</h2>
<!-- backwards compatibility -->
<a id="schemainterchangedata"></a>
<a id="schema_InterchangeData"></a>
<a id="tocSinterchangedata"></a>
<a id="tocsinterchangedata"></a>

```json
{
  "interchangeAmount": {
    "currency": "str",
    "value": 0
  },
  "interchangeRateIndicator": "string",
  "type": "interchangeData"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interchangeAmount|[Amount](#schemaamount)|false|none|The currency and value of the adjusted interchange fee.|
|interchangeRateIndicator|string|false|none|A 3-character alphanumeric code assigned by Visa that identifies the specific interchange reimbursement program a transaction qualified for. The code is assigned based on the card type, entry mode, and security data provided.|
|type|string|true|none|The type of events data. <br><br>Possible values: <br><br> - **interchangeData**: information about the interchange fee applied to a transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|interchangeData|

<h2 id="tocS_InternalCategoryData">InternalCategoryData</h2>
<!-- backwards compatibility -->
<a id="schemainternalcategorydata"></a>
<a id="schema_InternalCategoryData"></a>
<a id="tocSinternalcategorydata"></a>
<a id="tocsinternalcategorydata"></a>

```json
{
  "modificationMerchantReference": "string",
  "modificationPspReference": "string",
  "type": "internal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modificationMerchantReference|string|false|none|The capture's merchant reference included in the transfer.|
|modificationPspReference|string|false|none|The capture reference included in the transfer.|
|type|string|false|none|**internal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|internal|

<h2 id="tocS_InternalReviewTrackingData">InternalReviewTrackingData</h2>
<!-- backwards compatibility -->
<a id="schemainternalreviewtrackingdata"></a>
<a id="schema_InternalReviewTrackingData"></a>
<a id="tocSinternalreviewtrackingdata"></a>
<a id="tocsinternalreviewtrackingdata"></a>

```json
{
  "reason": "refusedForRegulatoryReasons",
  "status": "pending",
  "type": "internalReview"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the transfer failed Adyen's internal review. <br><br>Possible values:<br><br>- **refusedForRegulatoryReasons**: the transfer does not comply with Adyen's risk policy. For more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new). |
|status|string|true|none|The status of the transfer.<br><br>Possible values:<br><br> - **pending**: the transfer is under internal review by Adyen.<br><br>- **failed**: the transfer failed Adyen's internal review. For details, see `reason`.<br><br>|
|type|string|true|none|The type of tracking event. <br><br>Possible values: <br><br> - **internalReview**: the transfer was flagged because it does not comply with Adyen's risk policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|refusedForRegulatoryReasons|
|status|pending|
|status|failed|
|type|internalReview|

<h2 id="tocS_IssuedCard">IssuedCard</h2>
<!-- backwards compatibility -->
<a id="schemaissuedcard"></a>
<a id="schema_IssuedCard"></a>
<a id="tocSissuedcard"></a>
<a id="tocsissuedcard"></a>

```json
{
  "authorisationType": "string",
  "networkVariant": "maestro_us",
  "panEntryMode": "chip",
  "processingType": "atmWithdraw",
  "relayedAuthorisationData": {
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "reference": "string"
  },
  "schemeTraceId": "string",
  "schemeUniqueTransactionId": "string",
  "threeDSecure": {
    "acsTransactionId": "string"
  },
  "type": "issuedCard",
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
|authorisationType|string|false|none|The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**, **finalAuthorisation**|
|networkVariant|string|false|none|The card variant associated with the payment network used to route or process the transaction. For single-network cards, this matches the `brandVariant`. For US dual-network cards routed over an alternate network, this value reflects the specific tier or sub-type under that processing network.|
|panEntryMode|string|false|none|Indicates the method used for entering the PAN to initiate a transaction.<br><br>Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.|
|processingType|string|false|none|Contains information about how the payment was processed.<br><br>Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**.|
|relayedAuthorisationData|[RelayedAuthorisationData](#schemarelayedauthorisationdata)|false|none|If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server.|
|schemeTraceId|string|false|none|The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme. The `schemeTraceID` should refer to an original `schemeUniqueTransactionID` provided in an earlier payment (not necessarily processed by Adyen). A `schemeTraceId` is typically available for authorization adjustments or recurring payments.|
|schemeUniqueTransactionId|string|false|none|The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme.|
|threeDSecure|[ThreeDSecure](#schemathreedsecure)|false|none|The data of the result from the 3DS authentication.|
|type|string|false|none|**issuedCard**|
|validationFacts|[[TransferNotificationValidationFact](#schematransfernotificationvalidationfact)]|false|none|The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.|

#### Enumerated Values

|Property|Value|
|---|---|
|networkVariant|maestro_us|
|networkVariant|mastercard|
|networkVariant|visa|
|panEntryMode|chip|
|panEntryMode|cof|
|panEntryMode|contactless|
|panEntryMode|ecommerce|
|panEntryMode|magstripe|
|panEntryMode|manual|
|panEntryMode|token|
|processingType|atmWithdraw|
|processingType|balanceInquiry|
|processingType|ecommerce|
|processingType|moto|
|processingType|pos|
|processingType|purchaseWithCashback|
|processingType|recurring|
|processingType|token|
|type|issuedCard|

<h2 id="tocS_IssuingTransactionData">IssuingTransactionData</h2>
<!-- backwards compatibility -->
<a id="schemaissuingtransactiondata"></a>
<a id="schema_IssuingTransactionData"></a>
<a id="tocSissuingtransactiondata"></a>
<a id="tocsissuingtransactiondata"></a>

```json
{
  "captureCycleId": "string",
  "type": "issuingTransactionData"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captureCycleId|string|false|none|captureCycleId associated with transfer event.|
|type|string|true|none|The type of events data. <br><br>Possible values: <br><br> - **issuingTransactionData**: issuing transaction data|

#### Enumerated Values

|Property|Value|
|---|---|
|type|issuingTransactionData|

<h2 id="tocS_Leg">Leg</h2>
<!-- backwards compatibility -->
<a id="schemaleg"></a>
<a id="schema_Leg"></a>
<a id="tocSleg"></a>
<a id="tocsleg"></a>

```json
{
  "arrivalAirportCode": "string",
  "basicFareCode": "string",
  "carrierCode": "string",
  "departureAirportCode": "string",
  "departureDate": "string",
  "flightNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrivalAirportCode|string|false|none|The IATA 3-letter airport code of the destination airport. This field is required if the airline data includes leg details.|
|basicFareCode|string|false|none|The basic fare code for this leg.|
|carrierCode|string|false|none|IATA code of the carrier operating the flight.|
|departureAirportCode|string|false|none|The IATA three-letter airport code of the departure airport. This field is required if the airline data includes leg details|
|departureDate|string|false|none|The flight departure date.|
|flightNumber|string|false|none|The flight identifier.|

<h2 id="tocS_Lodging">Lodging</h2>
<!-- backwards compatibility -->
<a id="schemalodging"></a>
<a id="schema_Lodging"></a>
<a id="tocSlodging"></a>
<a id="tocslodging"></a>

```json
{
  "checkInDate": "string",
  "numberOfNights": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkInDate|string|false|none|The check-in date.|
|numberOfNights|integer(int32)|false|none|The total number of nights the room is booked for.|

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

<h2 id="tocS_MerchantPurchaseData">MerchantPurchaseData</h2>
<!-- backwards compatibility -->
<a id="schemamerchantpurchasedata"></a>
<a id="schema_MerchantPurchaseData"></a>
<a id="tocSmerchantpurchasedata"></a>
<a id="tocsmerchantpurchasedata"></a>

```json
{
  "airline": {
    "legs": [
      {
        "arrivalAirportCode": "string",
        "basicFareCode": "string",
        "carrierCode": "string",
        "departureAirportCode": "string",
        "departureDate": "string",
        "flightNumber": "string"
      }
    ],
    "ticketNumber": "string"
  },
  "lodging": [
    {
      "checkInDate": "string",
      "numberOfNights": 0
    }
  ],
  "type": "merchantPurchaseData"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airline|[Airline](#schemaairline)|false|none|Airline information.|
|lodging|[[Lodging](#schemalodging)]|false|none|Lodging information.|
|type|string|true|none|The type of events data. <br><br>Possible values: <br><br> - **merchantPurchaseData**: merchant purchase data|

#### Enumerated Values

|Property|Value|
|---|---|
|type|merchantPurchaseData|

<h2 id="tocS_Modification">Modification</h2>
<!-- backwards compatibility -->
<a id="schemamodification"></a>
<a id="schema_Modification"></a>
<a id="tocSmodification"></a>
<a id="tocsmodification"></a>

```json
{
  "direction": "string",
  "id": "string",
  "reference": "string",
  "status": "approvalPending",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|string|false|none|The direction of the money movement.|
|id|string|false|none|Our reference for the modification.|
|reference|string|false|none|Your reference for the modification, used internally within your platform.|
|status|string|false|none|The status of the transfer event.|
|type|string|false|none|The type of transfer modification.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|approvalPending|
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
|status|capturedExternally|
|status|chargeback|
|status|chargebackExternally|
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
|status|interchangeAdjusted|
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
|status|pending|
|status|pendingApproval|
|status|pendingExecution|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refundedExternally|
|status|refused|
|status|rejected|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|reversalReceived|
|status|reversed|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|

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

<h2 id="tocS_NetworkReason">NetworkReason</h2>
<!-- backwards compatibility -->
<a id="schemanetworkreason"></a>
<a id="schema_NetworkReason"></a>
<a id="tocSnetworkreason"></a>
<a id="tocsnetworkreason"></a>

```json
{
  "code": "string",
  "description": "string",
  "namespace": "iso8583ResponseCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The network-specific reason code. Use `namespace` to identify the code set.|
|description|string|false|none|A human-readable description of the reason code.|
|namespace|string|false|none|The category of codes that `code` belongs to. The `namespace` identifies the payment network and the type of reason<br><br>Possible values:<br>*  **ukFpsRejectionCode** : Reason code for a rejected Faster Payments transfer.<br>*  **ukFpsReturnReasonCode** : Reason code for a returned Faster Payments transfer.<br>*  **usAchReturnReasonCode** : Reason code for a returned ACH transfer.<br>*  **usAchCorrectionReasonCode** : Reason code for an ACH Notification of Change.<br>*  **iso8583ResponseCode** : ISO 8583 response code for a card transfer.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|namespace|iso8583ResponseCode|
|namespace|ukFpsRejectionCode|
|namespace|ukFpsReturnReasonCode|
|namespace|usAchCorrectionReasonCode|
|namespace|usAchReturnReasonCode|

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

<h2 id="tocS_PartyIdentification">PartyIdentification</h2>
<!-- backwards compatibility -->
<a id="schemapartyidentification"></a>
<a id="schema_PartyIdentification"></a>
<a id="tocSpartyidentification"></a>
<a id="tocspartyidentification"></a>

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
  "dateOfBirth": "1970-01-01",
  "email": "string",
  "firstName": "string",
  "fullName": "string",
  "lastName": "string",
  "reference": "string",
  "type": "unknown",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|The address of the bank account or card owner.|
|dateOfBirth|string(date)|false|none|The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.<br><br>Allowed only when `type` is **individual**.|
|email|string|false|none|The email address of the organization or individual. Maximum length: 254 characters.|
|firstName|string|false|none|The first name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**.|
|fullName|string|false|none|The full name of the entity that owns the bank account or card.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space.<br><br>Required when `category` is **bank**.|
|lastName|string|false|none|The last name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**.|
|reference|string|false|none|A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.<br><br>Required when you include `cardIdentification.storedPaymentMethodId`.|
|type|string|false|none|The type of entity that owns the bank account or card.<br><br>Possible values: **individual**, **organization**, or **unknown**.<br><br>Required when `category` is **card**. In this case, the value must be **individual**.|
|url|string|false|none|The URL of the organization or individual. Maximum length: 255 characters.|

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
|tokenType|string|false|none|The type of wallet that the network token is associated with.|

<h2 id="tocS_PlatformPayment">PlatformPayment</h2>
<!-- backwards compatibility -->
<a id="schemaplatformpayment"></a>
<a id="schema_PlatformPayment"></a>
<a id="tocSplatformpayment"></a>
<a id="tocsplatformpayment"></a>

```json
{
  "modificationMerchantReference": "string",
  "modificationPspReference": "string",
  "paymentMerchantReference": "string",
  "platformPaymentType": "AcquiringFees",
  "pspPaymentReference": "string",
  "type": "platformPayment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modificationMerchantReference|string|false|none|The capture's merchant reference included in the transfer.|
|modificationPspReference|string|false|none|The capture reference included in the transfer.|
|paymentMerchantReference|string|false|none|The payment's merchant reference included in the transfer.|
|platformPaymentType|string|false|none|Specifies the nature of the transfer. This parameter helps categorize transfers so you can reconcile transactions at a later time, using the Balance Platform Accounting Report for [marketplaces](https://docs.adyen.com/marketplaces/reports-and-fees/balance-platform-accounting-report/) or [platforms](https://docs.adyen.com/platforms/reports-and-fees/balance-platform-accounting-report/).<br><br>Possible values:<br><br>* **AcquiringFees**: The acquiring fee (the aggregated amount of interchange and scheme fee) incurred on a transaction.<br><br>* **AdyenCommission**: The transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing).<br><br>* **AdyenFees**: All transaction fees due to Adyen. This is the aggregated amount of Adyen's commission and markup.<br><br>* **AdyenMarkup**: The transaction fee due to Adyen under [Interchange++ pricing](https://www.adyen.com/pricing).<br><br>* **BalanceAccount**: The amount booked to your user after the deduction of the relevant fees.<br><br>* **Commission**: Your platform's or marketplace's commission on a transaction.<br><br>* **DCCPlatformCommission**: **deprecated** The Dynamic Currency Conversion (DCC) fee on a transaction.<br><br>* **DCCMarkup**: The Dynamic Currency Conversion (DCC) fee on a transaction.<br><br>* **Interchange**: The interchange fee (fee paid to the issuer) incurred on a transaction.<br><br>* **PaymentFee**: The aggregated amount of all transaction fees.<br><br>* **Remainder**: The leftover amount after currency conversion.<br><br>* **SchemeFee**: The scheme fee incurred on a transaction.<br><br>* **Surcharge**: The surcharge paid by the customer on a transaction.<br><br>* **Tip**: The tip paid by the customer.<br><br>* **TopUp**: An incoming transfer to top up your user's balance account.<br><br>* **VAT**: The value-added tax charged on the payment.|
|pspPaymentReference|string|false|none|The payment reference included in the transfer.|
|type|string|false|none|**platformPayment**|

#### Enumerated Values

|Property|Value|
|---|---|
|platformPaymentType|AcquiringFees|
|platformPaymentType|AdyenCommission|
|platformPaymentType|AdyenFees|
|platformPaymentType|AdyenMarkup|
|platformPaymentType|BalanceAccount|
|platformPaymentType|ChargebackRemainder|
|platformPaymentType|Commission|
|platformPaymentType|DCCMarkup|
|platformPaymentType|DCCPlatformCommission|
|platformPaymentType|Default|
|platformPaymentType|Interchange|
|platformPaymentType|PaymentFee|
|platformPaymentType|Remainder|
|platformPaymentType|SchemeFee|
|platformPaymentType|Surcharge|
|platformPaymentType|Tip|
|platformPaymentType|TopUp|
|platformPaymentType|VAT|
|type|platformPayment|

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

<h2 id="tocS_ThreeDSecure">ThreeDSecure</h2>
<!-- backwards compatibility -->
<a id="schemathreedsecure"></a>
<a id="schema_ThreeDSecure"></a>
<a id="tocSthreedsecure"></a>
<a id="tocsthreedsecure"></a>

```json
{
  "acsTransactionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acsTransactionId|string|false|none|The transaction identifier for the Access Control Server|

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
    "outcomeType": "string",
    "reference": "string",
    "score": 0
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
  "outcomeType": "string",
  "reference": "string",
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|outcomeType|string|false|none|The outcome type of the rule.|
|reference|string|false|none|The reference for the resource.|
|score|integer(int32)|false|none|The transaction score determined by the rule. Returned only when `outcomeType` is **scoreBased**.|

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
  "allHardBlockRulesPassed": true,
  "score": 0,
  "triggeredTransactionRules": [
    {
      "reason": "string",
      "transactionRule": {
        "description": "string",
        "id": "string",
        "outcomeType": "string",
        "reference": "string",
        "score": 0
      },
      "transactionRuleSource": {
        "id": "string",
        "type": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advice|string|false|none|The advice given by the Risk analysis.|
|allHardBlockRulesPassed|boolean|false|none|Indicates whether the transaction passed the evaluation for all hardblock rules|
|score|integer(int32)|false|none|The score of the Risk analysis.|
|triggeredTransactionRules|[[TransactionEventViolation](#schematransactioneventviolation)]|false|none|Array containing all the transaction rules that the transaction triggered.|

<h2 id="tocS_TransferData">TransferData</h2>
<!-- backwards compatibility -->
<a id="schematransferdata"></a>
<a id="schema_TransferData"></a>
<a id="tocStransferdata"></a>
<a id="tocstransferdata"></a>

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
  "balances": [
    {
      "balance": 0,
      "currency": "string",
      "received": 0,
      "reserved": 0
    }
  ],
  "category": "bank",
  "categoryData": {
    "priority": "crossBorder",
    "type": "bank"
  },
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
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "accountIdentification": {
        "accountNumber": "string",
        "bsbCode": "string",
        "type": "auLocal"
      },
      "storedPaymentMethodId": "string"
    },
    "card": {
      "cardHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      }
    },
    "merchant": {
      "acquirerId": "string",
      "city": "string",
      "country": "string",
      "countryCode": "string",
      "mcc": "string",
      "merchantId": "string",
      "name": "string",
      "postalCode": "string"
    },
    "transferInstrumentId": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "directDebitInformation": {
    "dateOfSignature": "1970-01-01T00:00:00Z",
    "dueDate": "1970-01-01T00:00:00Z",
    "mandateId": "string",
    "sequenceType": "string"
  },
  "direction": "incoming",
  "eventId": "string",
  "events": [
    {
      "amount": {
        "currency": "str",
        "value": 0
      },
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
      "arn": "string",
      "bookingDate": "1970-01-01T00:00:00Z",
      "estimatedArrivalTime": "1970-01-01T00:00:00Z",
      "eventsData": [
        {
          "interchangeAmount": {
            "currency": "str",
            "value": 0
          },
          "interchangeRateIndicator": "string",
          "type": "interchangeData"
        }
      ],
      "externalReason": {
        "code": "string",
        "description": "string",
        "namespace": "string"
      },
      "id": "string",
      "modification": {
        "direction": "string",
        "id": "string",
        "reference": "string",
        "status": "approvalPending",
        "type": "string"
      },
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
      "reason": "accountHierarchyNotActive",
      "status": "approvalPending",
      "tracingData": {
        "fpid": "string",
        "type": "ukFps"
      },
      "trackingData": {
        "status": "credited",
        "type": "confirmation"
      },
      "transactionId": "string",
      "type": "accounting",
      "updateDate": "1970-01-01T00:00:00Z",
      "valueDate": "1970-01-01T00:00:00Z"
    }
  ],
  "executionDate": {
    "date": "1970-01-01",
    "timezone": "string"
  },
  "externalReason": {
    "code": "string",
    "description": "string",
    "namespace": "string"
  },
  "id": "string",
  "networkReason": {
    "code": "string",
    "description": "string",
    "namespace": "iso8583ResponseCode"
  },
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string",
    "tokenType": "string"
  },
  "reason": "accountHierarchyNotActive",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "review": {
    "numberOfApprovalsRequired": 0,
    "scaOnApproval": "completed"
  },
  "sequenceNumber": 0,
  "status": "approvalPending",
  "tracing": {
    "fpid": "string",
    "type": "ukFps"
  },
  "tracking": {
    "status": "credited",
    "type": "confirmation"
  },
  "transactionRulesResult": {
    "advice": "string",
    "allHardBlockRulesPassed": true,
    "score": 0,
    "triggeredTransactionRules": [
      {
        "reason": "string",
        "transactionRule": {
          "description": "string",
          "id": "string",
          "outcomeType": "string",
          "reference": "string",
          "score": 0
        },
        "transactionRuleSource": {
          "id": "string",
          "type": "string"
        }
      }
    ]
  },
  "type": "payment",
  "ultimateParty": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "fundingInstrument": {
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      },
      "networkPaymentReference": "string",
      "reference": "string",
      "sourceOfFunds": "DEBIT"
    },
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|The account holder associated with the balance account involved in the transfer.|
|amount|[Amount](#schemaamount)|true|none|The amount of the transfer.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the balance account involved in the transfer.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|balances|[[BalanceMutation](#schemabalancemutation)]|false|none|The list of the latest balance statuses in the transfer.|
|category|string|true|none|The category of the transfer.<br><br>Possible values:<br><br> - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **interest**: A transfer that settles accrued [interest](https://docs.adyen.com/business-accounts/earn-returns) on a business account.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account.|
|categoryData|[BankCategoryData](#schemabankcategorydata) \| [InternalCategoryData](#schemainternalcategorydata) \| [IssuedCard](#schemaissuedcard) \| [PlatformPayment](#schemaplatformpayment)|false|none|The relevant data according to the transfer category.|
|counterparty|[TransferNotificationCounterParty](#schematransfernotificationcounterparty)|false|none|The other party in the transfer.|
|createdAt|string(date-time)|false|none|The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|
|creationDate|string(date-time)|false|none|**Deprecated.** The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|
|description|string|false|none|Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?**|
|directDebitInformation|[DirectDebitInformation](#schemadirectdebitinformation)|false|none|The details of the direct debit.|
|direction|string|false|none|The direction of the transfer.<br><br>Possible values: **incoming**, **outgoing**.|
|eventId|string|false|none|The unique identifier of the latest transfer event. Included only when the `category` is **issuedCard**.|
|events|[[TransferEvent](#schematransferevent)]|false|none|The list of events leading up to the current status of the transfer.|
|executionDate|[ExecutionDate](#schemaexecutiondate)|false|none|Contains information about the date when the transfer will be processed. The execution date must be within 30 days of the current date.<br><br>Until the execution date:<br>- The `status` of the transfer remains as **received**.<br>- The `reason` of the transfer remains as **pending**.<br><br>|
|externalReason|[ExternalReason](#schemaexternalreason)|false|none|The external reason of this transfer.|
|id|string|false|none|The ID of the resource.|
|networkReason|[NetworkReason](#schemanetworkreason)|false|none|Contains information that explains why the transfer was rejected or returned by the network.|
|paymentInstrument|[PaymentInstrument](#schemapaymentinstrument)|false|none|Contains information about the payment instrument used in the transfer.|
|reason|string|false|none|Additional information about the status of the transfer.|
|reference|string|false|none|Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.<br><br> - **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.|
|review|[TransferReview](#schematransferreview)|false|none|Contains status updates related to additional reviews.|
|sequenceNumber|integer(int32)|false|none|The sequence number of the transfer webhook. The numbers start from 1 and increase with each new webhook for a specific transfer.<br><br>The sequence number can help you restore the correct sequence of events even if they arrive out of order.|
|status|string|true|none|The result of the transfer.<br><br>For example:<br><br>- **received**: an outgoing transfer request is created.<br>- **refused**: the transfer request is rejected by Adyen for one of the following reasons:<br>  - Transfer limit exceeded.<br>  - Transaction rule requirements violated.<br>- **authorised**: the transfer request is authorized and the funds are reserved.<br>- **booked**: the funds are deducted from your user's balance account.<br> - **failed**: the transfer is rejected by the counterparty's bank.<br>- **returned**: the transfer is returned by the counterparty's bank.|
|tracing|[UKFpsTracingData](#schemaukfpstracingdata) \| [USAchTracingData](#schemausachtracingdata)|false|none|Contains information for tracing the transfer after Adyen forwards it to the network.|
|tracking|[ConfirmationTrackingData](#schemaconfirmationtrackingdata) \| [EstimationTrackingData](#schemaestimationtrackingdata) \| [InternalReviewTrackingData](#schemainternalreviewtrackingdata)|false|none|The latest tracking information of the transfer.|
|transactionRulesResult|[TransactionRulesResult](#schematransactionrulesresult)|false|none|Contains the results of the evaluation of the transaction rules.|
|type|string|false|none|The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.|
|ultimateParty|[UltimatePartyIdentification](#schemaultimatepartyidentification)|false|none|The ultimate sender of the funds of the transfer (ultimate debtor).|
|updatedAt|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|card|
|category|interest|
|category|internal|
|category|issuedCard|
|category|platformPayment|
|category|topUp|
|direction|incoming|
|direction|outgoing|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approvalExpired|
|reason|approved|
|reason|avsDeclined|
|reason|balanceAccountTemporarilyBlockedByTransactionRule|
|reason|blockCard|
|reason|callReferral|
|reason|cancelled|
|reason|captureCard|
|reason|cardExpired|
|reason|cardholderAuthenticationRequired|
|reason|cashbackAmountExceedsLimit|
|reason|cavvDeclined|
|reason|contactlessFallback|
|reason|contactlessLimitReached|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|cryptographicFailure|
|reason|cvcDeclined|
|reason|declined|
|reason|declinedByBapValidation|
|reason|declinedByTransactionRule|
|reason|declinedNonGeneric|
|reason|directDebitNotSupported|
|reason|doNotHonor|
|reason|domesticDebitTransactionNotAllowed|
|reason|duplicateTransmissionDetected|
|reason|error|
|reason|formatError|
|reason|fraud|
|reason|fraudCancelled|
|reason|honorWithId|
|reason|internalTimeout|
|reason|invalidAccount|
|reason|invalidAmount|
|reason|invalidAuthorizationLifeCycle|
|reason|invalidCard|
|reason|invalidExpiryDate|
|reason|invalidFromAccount|
|reason|invalidIssuer|
|reason|invalidMerchant|
|reason|invalidPin|
|reason|invalidToAccount|
|reason|invalidTransaction|
|reason|issuerSuspectedFraud|
|reason|lostCard|
|reason|mobilePinRequired|
|reason|noCheckingAccount|
|reason|noSavingsAccount|
|reason|not3dAuthenticated|
|reason|notEnoughBalance|
|reason|notSubmitted|
|reason|notSupported|
|reason|partiallyApproved|
|reason|pending|
|reason|pendingApproval|
|reason|pendingExecution|
|reason|pinNotChanged|
|reason|pinRequired|
|reason|pinTriesExceeded|
|reason|pinValidationNotPossible|
|reason|purchaseAmountOnlyNoCashBack|
|reason|refusedByCounterpartyBank|
|reason|refusedByCustomer|
|reason|restrictedCard|
|reason|revocationOfAuth|
|reason|routeNotFound|
|reason|scaAuthenticationRequired|
|reason|scaFailed|
|reason|schemeAdvice|
|reason|securityViolation|
|reason|shopperCancelled|
|reason|stolenCard|
|reason|threedsDynamicLinkingMismatch|
|reason|transactionNotPermitted|
|reason|transferInstrumentDoesNotExist|
|reason|unableToRouteTransaction|
|reason|unknown|
|reason|withdrawalAmountExceeded|
|reason|withdrawalCountExceeded|
|status|approvalPending|
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
|status|capturedExternally|
|status|chargeback|
|status|chargebackExternally|
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
|status|interchangeAdjusted|
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
|status|pending|
|status|pendingApproval|
|status|pendingExecution|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refundedExternally|
|status|refused|
|status|rejected|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|reversalReceived|
|status|reversed|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|
|type|payment|
|type|capture|
|type|captureReversal|
|type|refund|
|type|refundReversal|
|type|chargeback|
|type|chargebackCorrection|
|type|chargebackReversal|
|type|chargebackReversalCorrection|
|type|secondChargeback|
|type|secondChargebackCorrection|
|type|atmWithdrawal|
|type|atmWithdrawalReversal|
|type|internalTransfer|
|type|internalDirectDebit|
|type|manualCorrection|
|type|invoiceDeduction|
|type|depositCorrection|
|type|reserveAdjustment|
|type|bankTransfer|
|type|bankDirectDebit|
|type|cardTransfer|
|type|miscCost|
|type|paymentCost|
|type|fee|
|type|leftover|
|type|grant|
|type|capitalFundsCollection|
|type|cashOutInstruction|
|type|cashoutFee|
|type|cashoutRepayment|
|type|cashoutFunding|
|type|repayment|
|type|installment|
|type|installmentReversal|
|type|balanceAdjustment|
|type|balanceRollover|
|type|balanceMigration|
|type|interestPayout|
|type|fxSell|
|type|fxBuy|

<h2 id="tocS_TransferEvent">TransferEvent</h2>
<!-- backwards compatibility -->
<a id="schematransferevent"></a>
<a id="schema_TransferEvent"></a>
<a id="tocStransferevent"></a>
<a id="tocstransferevent"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
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
  "arn": "string",
  "bookingDate": "1970-01-01T00:00:00Z",
  "estimatedArrivalTime": "1970-01-01T00:00:00Z",
  "eventsData": [
    {
      "interchangeAmount": {
        "currency": "str",
        "value": 0
      },
      "interchangeRateIndicator": "string",
      "type": "interchangeData"
    }
  ],
  "externalReason": {
    "code": "string",
    "description": "string",
    "namespace": "string"
  },
  "id": "string",
  "modification": {
    "direction": "string",
    "id": "string",
    "reference": "string",
    "status": "approvalPending",
    "type": "string"
  },
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
  "reason": "accountHierarchyNotActive",
  "status": "approvalPending",
  "tracingData": {
    "fpid": "string",
    "type": "ukFps"
  },
  "trackingData": {
    "status": "credited",
    "type": "confirmation"
  },
  "transactionId": "string",
  "type": "accounting",
  "updateDate": "1970-01-01T00:00:00Z",
  "valueDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The original journal amount. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.|
|amountAdjustments|[[AmountAdjustment](#schemaamountadjustment)]|false|none|The amount adjustments in this transfer. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.|
|arn|string|false|none|Scheme unique arn identifier useful for tracing captures, chargebacks, refunds, etc.|
|bookingDate|string(date-time)|false|none|The date when the transfer request was sent.|
|estimatedArrivalTime|string(date-time)|false|none|The estimated time when the beneficiary should have access to the funds.|
|eventsData|[[InterchangeData](#schemainterchangedata) \| [IssuingTransactionData](#schemaissuingtransactiondata) \| [MerchantPurchaseData](#schemamerchantpurchasedata)]|false|none|A list of event data.|
|externalReason|[ExternalReason](#schemaexternalreason)|false|none|The external reason for the transfer status.|
|id|string|false|none|The unique identifier of the transfer event.|
|modification|[Modification](#schemamodification)|false|none|The payment modification. Only applicable for [returned internal transfers](https://docs.adyen.com/platforms/internal-fund-transfers/internal-transfer-webhooks/#returned-internal-transfer).|
|mutations|[[BalanceMutation](#schemabalancemutation)]|false|none|The list of balance mutations per event.|
|originalAmount|[Amount](#schemaamount)|false|none|The amount in the original currency. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations. |
|reason|string|false|none|The reason for the transfer status.|
|status|string|false|none|The status of the transfer event.|
|tracingData|[UKFpsTracingData](#schemaukfpstracingdata) \| [USAchTracingData](#schemausachtracingdata)|false|none|Additional tracing information for the tracing event.|
|trackingData|[ConfirmationTrackingData](#schemaconfirmationtrackingdata) \| [EstimationTrackingData](#schemaestimationtrackingdata) \| [InternalReviewTrackingData](#schemainternalreviewtrackingdata)|false|none|Additional information for the tracking event.|
|transactionId|string|false|none|The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes.|
|type|string|false|none|The type of the transfer event. Possible values: **accounting**, **tracing**, **tracking**.|
|updateDate|string(date-time)|false|none|The date when the tracking status was updated.|
|valueDate|string(date-time)|false|none|The date when the funds are expected to be deducted from or credited to the balance account. This date can be in either the past or future.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approvalExpired|
|reason|approved|
|reason|avsDeclined|
|reason|balanceAccountTemporarilyBlockedByTransactionRule|
|reason|blockCard|
|reason|callReferral|
|reason|cancelled|
|reason|captureCard|
|reason|cardExpired|
|reason|cardholderAuthenticationRequired|
|reason|cashbackAmountExceedsLimit|
|reason|cavvDeclined|
|reason|contactlessFallback|
|reason|contactlessLimitReached|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|cryptographicFailure|
|reason|cvcDeclined|
|reason|declined|
|reason|declinedByBapValidation|
|reason|declinedByTransactionRule|
|reason|declinedNonGeneric|
|reason|directDebitNotSupported|
|reason|doNotHonor|
|reason|domesticDebitTransactionNotAllowed|
|reason|duplicateTransmissionDetected|
|reason|error|
|reason|formatError|
|reason|fraud|
|reason|fraudCancelled|
|reason|honorWithId|
|reason|internalTimeout|
|reason|invalidAccount|
|reason|invalidAmount|
|reason|invalidAuthorizationLifeCycle|
|reason|invalidCard|
|reason|invalidExpiryDate|
|reason|invalidFromAccount|
|reason|invalidIssuer|
|reason|invalidMerchant|
|reason|invalidPin|
|reason|invalidToAccount|
|reason|invalidTransaction|
|reason|issuerSuspectedFraud|
|reason|lostCard|
|reason|mobilePinRequired|
|reason|noCheckingAccount|
|reason|noSavingsAccount|
|reason|not3dAuthenticated|
|reason|notEnoughBalance|
|reason|notSubmitted|
|reason|notSupported|
|reason|partiallyApproved|
|reason|pending|
|reason|pendingApproval|
|reason|pendingExecution|
|reason|pinNotChanged|
|reason|pinRequired|
|reason|pinTriesExceeded|
|reason|pinValidationNotPossible|
|reason|purchaseAmountOnlyNoCashBack|
|reason|refusedByCounterpartyBank|
|reason|refusedByCustomer|
|reason|restrictedCard|
|reason|revocationOfAuth|
|reason|routeNotFound|
|reason|scaAuthenticationRequired|
|reason|scaFailed|
|reason|schemeAdvice|
|reason|securityViolation|
|reason|shopperCancelled|
|reason|stolenCard|
|reason|threedsDynamicLinkingMismatch|
|reason|transactionNotPermitted|
|reason|transferInstrumentDoesNotExist|
|reason|unableToRouteTransaction|
|reason|unknown|
|reason|withdrawalAmountExceeded|
|reason|withdrawalCountExceeded|
|status|approvalPending|
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
|status|capturedExternally|
|status|chargeback|
|status|chargebackExternally|
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
|status|interchangeAdjusted|
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
|status|pending|
|status|pendingApproval|
|status|pendingExecution|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refundedExternally|
|status|refused|
|status|rejected|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|reversalReceived|
|status|reversed|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|
|type|accounting|
|type|tracing|
|type|tracking|

<h2 id="tocS_TransferNotificationCounterParty">TransferNotificationCounterParty</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationcounterparty"></a>
<a id="schema_TransferNotificationCounterParty"></a>
<a id="tocStransfernotificationcounterparty"></a>
<a id="tocstransfernotificationcounterparty"></a>

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
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    },
    "storedPaymentMethodId": "string"
  },
  "card": {
    "cardHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "cardIdentification": {
      "expiryMonth": "st",
      "expiryYear": "stri",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri",
      "storedPaymentMethodId": "string"
    }
  },
  "merchant": {
    "acquirerId": "string",
    "city": "string",
    "country": "string",
    "countryCode": "string",
    "mcc": "string",
    "merchantId": "string",
    "name": "string",
    "postalCode": "string"
  },
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).|
|bankAccount|[BankAccountV3](#schemabankaccountv3)|false|none|Contains information about the counterparty bank account.|
|card|[Card](#schemacard)|false|none|Contains information about the counterparty card.|
|merchant|[TransferNotificationMerchantData](#schematransfernotificationmerchantdata)|false|none|Contains information about the merchant.|
|transferInstrumentId|string|false|none|The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).|

<h2 id="tocS_TransferNotificationMerchantData">TransferNotificationMerchantData</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationmerchantdata"></a>
<a id="schema_TransferNotificationMerchantData"></a>
<a id="tocStransfernotificationmerchantdata"></a>
<a id="tocstransfernotificationmerchantdata"></a>

```json
{
  "acquirerId": "string",
  "city": "string",
  "country": "string",
  "countryCode": "string",
  "mcc": "string",
  "merchantId": "string",
  "name": "string",
  "postalCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerId|string|false|none|The unique identifier of the merchant's acquirer.|
|city|string|false|none|The city where the merchant is located.|
|country|string|false|none|The country where the merchant is located.|
|countryCode|string|false|none|The two-character country code of the merchant's location, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|mcc|string|false|none|The merchant category code.|
|merchantId|string|false|none|The unique identifier of the merchant.|
|name|string|false|none|The name of the merchant's shop or service.|
|postalCode|string|false|none|The postal code of the merchant.|

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
    "balancePlatform": "string",
    "balances": [
      {
        "balance": 0,
        "currency": "string",
        "received": 0,
        "reserved": 0
      }
    ],
    "category": "bank",
    "categoryData": {
      "priority": "crossBorder",
      "type": "bank"
    },
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
          "dateOfBirth": "1970-01-01",
          "email": "string",
          "firstName": "string",
          "fullName": "string",
          "lastName": "string",
          "reference": "string",
          "type": "unknown",
          "url": "string"
        },
        "accountIdentification": {
          "accountNumber": "string",
          "bsbCode": "string",
          "type": "auLocal"
        },
        "storedPaymentMethodId": "string"
      },
      "card": {
        "cardHolder": {
          "address": {
            "city": "string",
            "country": "string",
            "line1": "string",
            "line2": "string",
            "postalCode": "string",
            "stateOrProvince": "string"
          },
          "dateOfBirth": "1970-01-01",
          "email": "string",
          "firstName": "string",
          "fullName": "string",
          "lastName": "string",
          "reference": "string",
          "type": "unknown",
          "url": "string"
        },
        "cardIdentification": {
          "expiryMonth": "st",
          "expiryYear": "stri",
          "issueNumber": "st",
          "number": "string",
          "startMonth": "st",
          "startYear": "stri",
          "storedPaymentMethodId": "string"
        }
      },
      "merchant": {
        "acquirerId": "string",
        "city": "string",
        "country": "string",
        "countryCode": "string",
        "mcc": "string",
        "merchantId": "string",
        "name": "string",
        "postalCode": "string"
      },
      "transferInstrumentId": "string"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "creationDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "directDebitInformation": {
      "dateOfSignature": "1970-01-01T00:00:00Z",
      "dueDate": "1970-01-01T00:00:00Z",
      "mandateId": "string",
      "sequenceType": "string"
    },
    "direction": "incoming",
    "eventId": "string",
    "events": [
      {
        "amount": {
          "currency": "str",
          "value": 0
        },
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
        "arn": "string",
        "bookingDate": "1970-01-01T00:00:00Z",
        "estimatedArrivalTime": "1970-01-01T00:00:00Z",
        "eventsData": [
          {
            "interchangeAmount": {
              "currency": "str",
              "value": 0
            },
            "interchangeRateIndicator": "string",
            "type": "interchangeData"
          }
        ],
        "externalReason": {
          "code": "string",
          "description": "string",
          "namespace": "string"
        },
        "id": "string",
        "modification": {
          "direction": "string",
          "id": "string",
          "reference": "string",
          "status": "approvalPending",
          "type": "string"
        },
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
        "reason": "accountHierarchyNotActive",
        "status": "approvalPending",
        "tracingData": {
          "fpid": "string",
          "type": "ukFps"
        },
        "trackingData": {
          "status": "credited",
          "type": "confirmation"
        },
        "transactionId": "string",
        "type": "accounting",
        "updateDate": "1970-01-01T00:00:00Z",
        "valueDate": "1970-01-01T00:00:00Z"
      }
    ],
    "executionDate": {
      "date": "1970-01-01",
      "timezone": "string"
    },
    "externalReason": {
      "code": "string",
      "description": "string",
      "namespace": "string"
    },
    "id": "string",
    "networkReason": {
      "code": "string",
      "description": "string",
      "namespace": "iso8583ResponseCode"
    },
    "paymentInstrument": {
      "description": "string",
      "id": "string",
      "reference": "string",
      "tokenType": "string"
    },
    "reason": "accountHierarchyNotActive",
    "reference": "string",
    "referenceForBeneficiary": "string",
    "review": {
      "numberOfApprovalsRequired": 0,
      "scaOnApproval": "completed"
    },
    "sequenceNumber": 0,
    "status": "approvalPending",
    "tracing": {
      "fpid": "string",
      "type": "ukFps"
    },
    "tracking": {
      "status": "credited",
      "type": "confirmation"
    },
    "transactionRulesResult": {
      "advice": "string",
      "allHardBlockRulesPassed": true,
      "score": 0,
      "triggeredTransactionRules": [
        {
          "reason": "string",
          "transactionRule": {
            "description": "string",
            "id": "string",
            "outcomeType": "string",
            "reference": "string",
            "score": 0
          },
          "transactionRuleSource": {
            "id": "string",
            "type": "string"
          }
        }
      ]
    },
    "type": "payment",
    "ultimateParty": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "fundingInstrument": {
        "cardIdentification": {
          "expiryMonth": "st",
          "expiryYear": "stri",
          "issueNumber": "st",
          "number": "string",
          "startMonth": "st",
          "startYear": "stri",
          "storedPaymentMethodId": "string"
        },
        "networkPaymentReference": "string",
        "reference": "string",
        "sourceOfFunds": "DEBIT"
      },
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.transfer.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TransferData](#schematransferdata)|true|none|Contains details about the event.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|false|none|The type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.transfer.created|
|type|balancePlatform.transfer.updated|

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

<h2 id="tocS_TransferReview">TransferReview</h2>
<!-- backwards compatibility -->
<a id="schematransferreview"></a>
<a id="schema_TransferReview"></a>
<a id="tocStransferreview"></a>
<a id="tocstransferreview"></a>

```json
{
  "numberOfApprovalsRequired": 0,
  "scaOnApproval": "completed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfApprovalsRequired|integer(int32)|false|none|Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.|
|scaOnApproval|string|false|none|Shows the status of the Strong Customer Authentication (SCA) process.<br><br>Possible values: **required**, **notApplicable**.|

#### Enumerated Values

|Property|Value|
|---|---|
|scaOnApproval|completed|
|scaOnApproval|notApplicable|
|scaOnApproval|required|

<h2 id="tocS_UKFpsTracingData">UKFpsTracingData</h2>
<!-- backwards compatibility -->
<a id="schemaukfpstracingdata"></a>
<a id="schema_UKFpsTracingData"></a>
<a id="tocSukfpstracingdata"></a>
<a id="tocsukfpstracingdata"></a>

```json
{
  "fpid": "string",
  "type": "ukFps"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fpid|string|true|none|The FPS trace number. This is a unique identifier assigned to transfers processed by [FPS](https://www.bankofengland.co.uk/payment-systems/services/faster-payments-service).|
|type|string|true|none|**ukFps**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ukFps|

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

<h2 id="tocS_USAchTracingData">USAchTracingData</h2>
<!-- backwards compatibility -->
<a id="schemausachtracingdata"></a>
<a id="schema_USAchTracingData"></a>
<a id="tocSusachtracingdata"></a>
<a id="tocsusachtracingdata"></a>

```json
{
  "traceNumber": "string",
  "type": "usAch"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|traceNumber|string|true|none|The ACH trace number. This is a unique 15-digit identifier assigned to transfers processed by [ACH](https://fiscal.treasury.gov/payments-from-government/automated-clearing-house-ach).|
|type|string|true|none|**usAch**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|usAch|

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

<h2 id="tocS_UltimatePartyIdentification">UltimatePartyIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaultimatepartyidentification"></a>
<a id="schema_UltimatePartyIdentification"></a>
<a id="tocSultimatepartyidentification"></a>
<a id="tocsultimatepartyidentification"></a>

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
  "dateOfBirth": "1970-01-01",
  "email": "string",
  "firstName": "string",
  "fullName": "string",
  "fundingInstrument": {
    "cardIdentification": {
      "expiryMonth": "st",
      "expiryYear": "stri",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri",
      "storedPaymentMethodId": "string"
    },
    "networkPaymentReference": "string",
    "reference": "string",
    "sourceOfFunds": "DEBIT"
  },
  "lastName": "string",
  "reference": "string",
  "type": "unknown",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|The address of the bank account or card owner.|
|dateOfBirth|string(date)|false|none|The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.<br><br>Allowed only when `type` is **individual**.|
|email|string|false|none|The email address of the organization or individual. Maximum length: 254 characters.|
|firstName|string|false|none|The first name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**.|
|fullName|string|false|none|The full name of the entity that owns the bank account or card.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space.<br><br>Required when `category` is **bank**.|
|fundingInstrument|[FundingInstrument](#schemafundinginstrument)|false|none|Details of the card or token used to fund the pay-in transaction.|
|lastName|string|false|none|The last name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**.|
|reference|string|false|none|A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.<br><br>Required when you include `cardIdentification.storedPaymentMethodId`.|
|type|string|false|none|The type of entity that owns the bank account or card.<br><br>Possible values: **individual**, **organization**, or **unknown**.<br><br>Required when `category` is **card**. In this case, the value must be **individual**.|
|url|string|false|none|The URL of the organization or individual. Maximum length: 255 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|individual|
|type|organization|
|type|unknown|
