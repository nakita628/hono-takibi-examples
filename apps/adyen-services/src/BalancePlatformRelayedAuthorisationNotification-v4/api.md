<h1 id="authorization-webhooks">Authorization webhooks v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to inform your system about events related to transaction authorizations.

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="authorization-webhooks-webhooks">Webhooks</h1>

## Relayed authorization requested

<a id="opIdpost-balancePlatform.authorisation.relayed"></a>

`POST balancePlatform.authorisation.relayed`

Adyen sends this webhook to allow you to provide [relayed authorization](https://docs.adyen.com/issuing/authorisation/relayed-authorisation/#respond-to-webhook) for a transaction.

To complete a relayed authorization, respond to this webhook with an **HTTP 200** response. Include the `authorisationDecision` in the response body.

If we do not receive the response within two seconds, we apply your [fallback logic](https://docs.adyen.com/issuing/authorisation/relayed-authorisation/#fallback).

> Body parameter

```json
{
  "accountHolder": {
    "description": "Account holder description",
    "id": "AH123ABCDEFGHIJKLMN456789"
  },
  "amount": {
    "currency": "EUR",
    "value": -2700
  },
  "authCode": "123456",
  "authorisationDecision": {
    "reasonCode": "APPROVED",
    "status": "Authorised",
    "statusCode": "APPROVED"
  },
  "authorisationType": "finalAuthorisation",
  "balanceAccount": {
    "description": "Balance Account Description",
    "id": "BA123ABCDEFGHIJKLMN456789"
  },
  "balanceMutations": [
    {
      "balanceAfter": {
        "currency": "EUR",
        "value": 221163
      },
      "balanceBefore": {
        "currency": "EUR",
        "value": 221190
      },
      "currency": "EUR",
      "mutationAmount": {
        "currency": "EUR",
        "value": -2700
      },
      "type": "AuthorisedOutgoing"
    }
  ],
  "balancePlatform": "TestBalancePlatform",
  "entryMode": "contactless",
  "id": "2ABCBA13456ABCDE",
  "merchantData": {
    "acquirerId": "012345",
    "mcc": "5813",
    "merchantId": "000123450000123",
    "nameLocation": {
      "city": "Amsterdam",
      "country": "NLD",
      "name": "Tea Shop NLD",
      "rawData": "TeaShop_NLD"
    },
    "postalCode": "3333AB"
  },
  "originalAmount": {
    "currency": "EUR",
    "value": -2700
  },
  "paymentInstrument": {
    "balanceAccountId": "BA123ABCDEFGHIJKLMN456789",
    "description": "PaymentInstrument Description",
    "issuingCountryCode": "NL",
    "paymentInstrumentGroupId": "PG3123ABCDEFGHIJKLMN456789",
    "reference": "123456789",
    "status": "active",
    "type": "card",
    "card": {
      "authentication": {
        "email": "john.doe@provider.com"
      },
      "brand": "mc",
      "brandVariant": "mc_debit_bpd",
      "cardholderName": "John Doe",
      "formFactor": "virtual",
      "bin": "555555",
      "expiration": {
        "month": "09",
        "year": "2027"
      },
      "lastFour": "0000",
      "number": "12345ABCDE"
    },
    "id": "PI123ABCDEFGHIJKLMN456789"
  },
  "processingType": "token",
  "reference": "ABCDEFGHIJ",
  "schemeUniqueTransactionId": "ABCDEFU2B1305",
  "transactionRulesResult": {
    "allHardBlockRulesPassed": true,
    "score": 80
  },
  "validationResult": [
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
      "type": "BalanceCheck"
    },
    {
      "result": "valid",
      "type": "Screening"
    },
    {
      "result": "valid",
      "type": "RealBalanceAvailable"
    },
    {
      "result": "notValidated",
      "type": "MITAllowedMerchant"
    },
    {
      "result": "valid",
      "type": "PaymentInstrumentFound"
    },
    {
      "result": "valid",
      "type": "TransactionRules"
    },
    {
      "result": "valid",
      "type": "AccountLookup"
    },
    {
      "result": "valid",
      "type": "PaymentInstrumentActive"
    },
    {
      "result": "valid",
      "type": "CardholderAuthentication"
    },
    {
      "result": "valid",
      "type": "PaymentInstrument"
    },
    {
      "result": "valid",
      "type": "CardAuthentication"
    },
    {
      "result": "valid",
      "type": "PartyScreening"
    },
    {
      "result": "valid",
      "type": "InputExpiryDateCheck"
    }
  ],
  "environment": "test",
  "type": "balancePlatform.authorisation.relayed"
}
```

<h3 id="relayed-authorization-requested-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RelayedAuthorisationRequest](#schemarelayedauthorisationrequest)|false|none|
|» accountHolder|body|[ResourceReference](#schemaresourcereference)|false|The reference of the account holder.|
|» amount|body|[Amount](#schemaamount)|false|The amount of the transaction.|
|» amountAdjustments|body|[[AmountAdjustment](#schemaamountadjustment)]|false|The amount adjustments in the transaction.|
|» authCode|body|string|false|The authorization code for the payment.|
|» authorisationDecision|body|[AuthorisationDecisionRequest](#schemaauthorisationdecisionrequest)|false|The decision of the authorization.|
|» authorisationType|body|string|false|The authorization type.<br><br>Possible values:<br>* **finalAuthorisation**<br>* **preAuthorisation**<br>* **defaultAuthorisation**|
|» balanceAccount|body|[ResourceReference](#schemaresourcereference)|false|The reference of the balance account.|
|» balanceMutations|body|[[BalanceMutation](#schemabalancemutation)]|false|The list of balance mutations per event.|
|» balancePlatform|body|string|false|The unique identifier of the balance platform.|
|» entryMode|body|string|false|The entry mode of the information of the payment instrument. For example: **contactless**, **chip**, **magstripe**.|
|» environment|body|string|false|The environment from which the webhook originated.<br>Possible values: **test**, **live**.<br>|
|» id|body|string|false|The unique identifier of the transfer.|
|» merchantData|body|[MerchantData](#schemamerchantdata)|false|The information about the merchant.|
|» originalAmount|body|[Amount](#schemaamount)|false|The amount in the original currency.|
|» paymentInstrument|body|[PaymentInstrument](#schemapaymentinstrument)|false|Contains information about the payment instrument.|
|» processingType|body|string|false|The processing type used for this payment. For example: **ecommerce**, **pos**, **moto**.|
|» reference|body|string|false|The reference of the payment.|
|» schemeRiskScore|body|integer(int32)|false|The risk score provided by the card schemes.|
|» schemeTraceId|body|string|false|The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme.|
|» schemeUniqueTransactionId|body|string|false|The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme.|
|» scores|body|[[TransactionScoring](#schematransactionscoring)]|false|The list of transaction scores.|
|» threeDSecure|body|[ThreeDSecure](#schemathreedsecure)|false|The data of the result from the 3DS authentication.|
|» transactionRulesResult|body|[TransactionRulesResult](#schematransactionrulesresult)|false|Contains the results of the evaluation of the transaction rules.|
|» type|body|string|false|Type of notification.|
|» validationResult|body|[[ValidationResult](#schemavalidationresult)]|false|Contains the checks that Adyen performed to validate the payment and the result of each.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.authorisation.relayed|

> Example responses

> 200 Response

```json
{
  "authorisationDecision": {
    "status": "Authorised"
  },
  "reference": "myBalancePlatformPayment_12345",
  "metadata": {
    "customId": "your-own-custom-field-12345"
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
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
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="relayed-authorization-requested-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RelayedAuthorisationResponse](#schemarelayedauthorisationresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
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
  "basepoints": 0,
  "fixedAmount": {
    "currency": "str",
    "value": 0
  },
  "floorAmount": {
    "currency": "str",
    "value": 0
  },
  "limitAmount": {
    "currency": "str",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The adjustment amount.|
|amountAdjustmentType|string|false|none|The type of markup that is applied to an authorised payment.<br><br>Possible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.|
|basepoints|integer(int32)|false|none|The basepoints associated with the applied markup.|
|fixedAmount|[Amount](#schemaamount)|false|none|The specific amount of the adjustment.|
|floorAmount|[Amount](#schemaamount)|false|none|The minimum amount of the adjustment.|
|limitAmount|[Amount](#schemaamount)|false|none|The maximum amount of the adjustment.|

#### Enumerated Values

|Property|Value|
|---|---|
|amountAdjustmentType|atmMarkup|
|amountAdjustmentType|authHoldReserve|
|amountAdjustmentType|exchange|
|amountAdjustmentType|forexMarkup|

<h2 id="tocS_Authentication">Authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_Authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
{
  "email": "string",
  "password": "string",
  "phone": {
    "number": "string",
    "type": "landline"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address where the one-time password (OTP) is sent.|
|password|string|false|none|The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.<br><br>* Characters between **a-z**, **A-Z**, and **0-9**<br><br>* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#'",;:$&àùòâôûáúó**|
|phone|[Phone](#schemaphone)|false|none|The phone number where the one-time password (OTP) is sent.<br><br>This object must have:<br><br>* A `type` set to **mobile**.<br><br>* A `number` with a valid country code.<br><br>* A `number` with more than 4 digits, excluding the country code.<br><br>>Make sure to verify that the card user owns the phone number.|

<h2 id="tocS_AuthorisationDecisionRequest">AuthorisationDecisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationdecisionrequest"></a>
<a id="schema_AuthorisationDecisionRequest"></a>
<a id="tocSauthorisationdecisionrequest"></a>
<a id="tocsauthorisationdecisionrequest"></a>

```json
{
  "reasonCode": "string",
  "status": "string",
  "statusCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reasonCode|string|false|none|The reason of the authorization decision.|
|status|string|false|none|The status of the authorization decision. Possible values: **Authorised** or **Refused**.|
|statusCode|string|false|none|The code of the authorization decision.|

<h2 id="tocS_AuthorisationDecisionResponse">AuthorisationDecisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthorisationdecisionresponse"></a>
<a id="schema_AuthorisationDecisionResponse"></a>
<a id="tocSauthorisationdecisionresponse"></a>
<a id="tocsauthorisationdecisionresponse"></a>

```json
{
  "refusalReason": "string",
  "status": "Authorised"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refusalReason|string|false|none|The reason for refusing the authorization.|
|status|string|true|none|The status of the authorization. <br><br>Possible values: <br><br>* **Authorised** <br><br>* **Refused** <br><br>For more information, refer to [Use relayed authorization](https://docs.adyen.com/issuing/authorisation/relayed-authorisation/).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Authorised|
|status|Refused|

<h2 id="tocS_BalanceMutation">BalanceMutation</h2>
<!-- backwards compatibility -->
<a id="schemabalancemutation"></a>
<a id="schema_BalanceMutation"></a>
<a id="tocSbalancemutation"></a>
<a id="tocsbalancemutation"></a>

```json
{
  "balanceAfter": {
    "currency": "str",
    "value": 0
  },
  "balanceBefore": {
    "currency": "str",
    "value": 0
  },
  "currency": "string",
  "mutationAmount": {
    "currency": "str",
    "value": 0
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAfter|[Amount](#schemaamount)|false|none|The balance amount after the mutation.|
|balanceBefore|[Amount](#schemaamount)|false|none|The balance amount before the mutation.|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|mutationAmount|[Amount](#schemaamount)|false|none|The amount of the mutation.|
|type|string|false|none|The type of the mutation.|

<h2 id="tocS_BankAccountDetails">BankAccountDetails</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountdetails"></a>
<a id="schema_BankAccountDetails"></a>
<a id="tocSbankaccountdetails"></a>
<a id="tocsbankaccountdetails"></a>

```json
{
  "accountNumber": "string",
  "accountType": "checking",
  "branchNumber": "string",
  "formFactor": "physical",
  "iban": "string",
  "routingNumber": "string",
  "sortCode": "string",
  "type": "iban"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|false|none|The bank account number, without separators or whitespace.|
|accountType|string|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|branchNumber|string|false|none|The bank account branch number, without separators or whitespace|
|formFactor|string|false|none|Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts. <br><br>Adyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.|
|iban|string|false|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|routingNumber|string|false|none|The [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.|
|sortCode|string|false|none|The [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.|
|type|string|true|none|**iban** or **usLocal** or **ukLocal**|

<h2 id="tocS_BulkAddress">BulkAddress</h2>
<!-- backwards compatibility -->
<a id="schemabulkaddress"></a>
<a id="schema_BulkAddress"></a>
<a id="tocSbulkaddress"></a>
<a id="tocsbulkaddress"></a>

```json
{
  "city": "string",
  "company": "string",
  "country": "string",
  "email": "string",
  "houseNumberOrName": "string",
  "line1": "string",
  "line2": "string",
  "line3": "string",
  "mobile": "string",
  "name": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.|
|company|string|false|none|The name of the company.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.|
|email|string|false|none|The email address.|
|houseNumberOrName|string|false|none|The house number or name.|
|line1|string|false|none|The name of the street and the number of the building.<br><br>For example: **Simon Carmiggeltstraat 6-50**.|
|line2|string|false|none|Additional information about the delivery address. For example, an apartment number.|
|line3|string|false|none|Additional information about the delivery address.|
|mobile|string|false|none|The full telephone number.|
|name|string|false|none|The recipient’s name (person or contact), for example ‘John Doe’.|
|postalCode|string|false|none|The postal code.<br><br>Maximum length:<br><br>* 5 digits for addresses in the US.<br><br>* 10 characters for all other countries.|
|stateOrProvince|string|false|none|The two-letter ISO 3166-2 state or province code.<br><br>Maximum length: 2 characters for addresses in the US.|
|street|string|false|none|The streetname of the house.|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "authentication": {
    "email": "string",
    "password": "string",
    "phone": {
      "number": "string",
      "type": "landline"
    }
  },
  "bin": "string",
  "brand": "string",
  "brandVariant": "string",
  "cardholderName": "string",
  "configuration": {
    "activation": "string",
    "activationUrl": "string",
    "bulkAddress": {
      "city": "string",
      "company": "string",
      "country": "string",
      "email": "string",
      "houseNumberOrName": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "mobile": "string",
      "name": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "cardImageId": "string",
    "carrier": "string",
    "carrierImageId": "string",
    "configurationProfileId": "string",
    "currency": "string",
    "envelope": "string",
    "insert": "string",
    "languages": [
      "string"
    ],
    "logoImageId": "string",
    "pinMailer": "string",
    "printLine": "string",
    "shipmentMethod": "string"
  },
  "cvc": "string",
  "deliveryContact": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "company": "string",
    "email": "string",
    "name": {
      "firstName": "string",
      "lastName": "string"
    },
    "phone": {
      "number": "string",
      "type": "landline"
    },
    "webAddress": "string"
  },
  "expiration": {
    "month": "string",
    "year": "string"
  },
  "formFactor": "physical",
  "lastFour": "string",
  "number": "string",
  "threeDSecure": "string",
  "usage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[Authentication](#schemaauthentication)|false|none|Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.|
|bin|string|false|none|The bank identification number (BIN) of the card number.|
|brand|string|true|none|The brand of the physical or the virtual card.<br>Possible values: **visa**, **mc**.|
|brandVariant|string|true|none|The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.<br>>Reach out to your Adyen contact to get the values relevant for your integration.|
|cardholderName|string|true|none|The name of the cardholder.<br> Maximum length: 26 characters.|
|configuration|[CardConfiguration](#schemacardconfiguration)|false|none|Contains information about the configuration profile for your cards. The configuration profile consists of settings required when creating a physical or a virtual card. You identify a configuration profile with its `configurationProfileId`.<br><br>When you provide this field in a request, you can override the settings of an existing configuration profile.<br><br>Reach out to your Adyen contact to get the values that you can send in this object.|
|cvc|string|false|none|The CVC2 value of the card.<br>> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.|
|deliveryContact|[DeliveryContact](#schemadeliverycontact)|false|none|The delivery contact (name and address) for physical card delivery.|
|expiration|[Expiry](#schemaexpiry)|false|none|The expiration date of the card.|
|formFactor|string|true|none|The form factor of the card.<br>Possible values: **virtual**, **physical**.|
|lastFour|string|false|none|Last last four digits of the card number.|
|number|string|false|none|The primary account number (PAN) of the card.<br>> The PAN is masked by default and returned only for single-use virtual cards.|
|threeDSecure|string|false|none|The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.<br>> Reach out to your Adyen contact to get the values relevant for your integration.|
|usage|string|false|none|Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.<br><br>> Reach out to your Adyen contact to determine the value relevant for your integration.|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|physical|
|formFactor|unknown|
|formFactor|virtual|

<h2 id="tocS_CardConfiguration">CardConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacardconfiguration"></a>
<a id="schema_CardConfiguration"></a>
<a id="tocScardconfiguration"></a>
<a id="tocscardconfiguration"></a>

```json
{
  "activation": "string",
  "activationUrl": "string",
  "bulkAddress": {
    "city": "string",
    "company": "string",
    "country": "string",
    "email": "string",
    "houseNumberOrName": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "mobile": "string",
    "name": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "cardImageId": "string",
  "carrier": "string",
  "carrierImageId": "string",
  "configurationProfileId": "string",
  "currency": "string",
  "envelope": "string",
  "insert": "string",
  "languages": [
    "string"
  ],
  "logoImageId": "string",
  "pinMailer": "string",
  "printLine": "string",
  "shipmentMethod": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activation|string|false|none|The activation label attached to the card that contains the activation instructions.<br><br>This field overrides the activation label design ID defined in the card configuration profile.|
|activationUrl|string|false|none|Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process. <br><br>Maximum length: 255 characters.|
|bulkAddress|[BulkAddress](#schemabulkaddress)|false|none|Overrides the shipment bulk address defined in the card configuration profile.|
|cardImageId|string|false|none|The unique identifier of the card image. This image is printed on the full front of the card.|
|carrier|string|false|none|The letter or packaging to which the card is attached.<br><br>This field overrides the carrier design ID defined in the card configuration profile. |
|carrierImageId|string|false|none|The unique identifier of the carrier image. This image is printed on the letter to which the card is attached.|
|configurationProfileId|string|true|none|The unique identifier of the card configuration profile that contains the settings that are applied to the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment.<br><br>You can override some of the existing settings in the configuration profile by providing the corresponding fields in the `configuration` object. For example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.|
|currency|string|false|none|The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.<br><br>This field overrides the existing currency setting on the card configuration profile.|
|envelope|string|false|none|Overrides the envelope design ID defined in the card configuration profile. |
|insert|string|false|none|Any additional material, such as marketing material, that is shipped together with the card.<br><br>This field overrides the insert design ID defined in the card configuration profile.|
|languages|[string]|false|none|A list of two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes of the card. For example, **[en,es]**.|
|logoImageId|string|false|none|The unique identifier of the logo image. This image is printed on the partial front of the card, for example, a logo on the upper right corner.|
|pinMailer|string|false|none|The letter on which the PIN of the card is printed.<br><br>This field overrides the PIN mailer design ID defined in the card configuration profile.|
|printLine|string|false|none|Print Line.<br><br>Text printed on the physical card below the cardholder name. You provide the value, which can be up to 26 characters.|
|shipmentMethod|string|false|none|The logistics company that ships the card.<br><br>This field overrides the logistics company defined in the card configuration profile.|

<h2 id="tocS_DeliveryAddress">DeliveryAddress</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryaddress"></a>
<a id="schema_DeliveryAddress"></a>
<a id="tocSdeliveryaddress"></a>
<a id="tocsdeliveryaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "line1": "string",
  "line2": "string",
  "line3": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br>>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|line1|string|false|none|The name of the street and the number of the building.<br><br>For example: **Simon Carmiggeltstraat 6-50**.|
|line2|string|false|none|Additional information about the delivery address. For example, an apartment number.|
|line3|string|false|none|Additional information about the delivery address.|
|postalCode|string|false|none|The postal code.<br>Maximum length:<br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries.|
|stateOrProvince|string|false|none|The state or province code, maximum 3 characters. For example, **CA** for California in the US or **ON** for Ontario in Canada.<br>> Required for the US and Canada.|

<h2 id="tocS_DeliveryContact">DeliveryContact</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycontact"></a>
<a id="schema_DeliveryContact"></a>
<a id="tocSdeliverycontact"></a>
<a id="tocsdeliverycontact"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "company": "string",
  "email": "string",
  "name": {
    "firstName": "string",
    "lastName": "string"
  },
  "phone": {
    "number": "string",
    "type": "landline"
  },
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[DeliveryAddress](#schemadeliveryaddress)|true|none|The address of the contact.|
|company|string|false|none|The company name of the contact.|
|email|string|false|none|The email address of the contact.|
|name|[Name](#schemaname)|true|none|The name of the contact.|
|phone|[Phone](#schemaphone)|false|none|The phone of the contact.|
|webAddress|string|false|none|The URL of the contact's website.|

<h2 id="tocS_Expiry">Expiry</h2>
<!-- backwards compatibility -->
<a id="schemaexpiry"></a>
<a id="schema_Expiry"></a>
<a id="tocSexpiry"></a>
<a id="tocsexpiry"></a>

```json
{
  "month": "string",
  "year": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|string|false|none|The month in which the card will expire.|
|year|string|false|none|The year in which the card will expire.|

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
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|The first name.|
|lastName|string|true|none|The last name.|

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

<h2 id="tocS_PaymentInstrument">PaymentInstrument</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrument"></a>
<a id="schema_PaymentInstrument"></a>
<a id="tocSpaymentinstrument"></a>
<a id="tocspaymentinstrument"></a>

```json
{
  "additionalBankAccountIdentifications": [
    {
      "bic": "string",
      "iban": "string",
      "type": "iban"
    }
  ],
  "balanceAccountId": "string",
  "bankAccount": {
    "accountNumber": "string",
    "accountType": "checking",
    "branchNumber": "string",
    "formFactor": "physical",
    "iban": "string",
    "routingNumber": "string",
    "sortCode": "string",
    "type": "iban"
  },
  "card": {
    "authentication": {
      "email": "string",
      "password": "string",
      "phone": {
        "number": "string",
        "type": "landline"
      }
    },
    "bin": "string",
    "brand": "string",
    "brandVariant": "string",
    "cardholderName": "string",
    "configuration": {
      "activation": "string",
      "activationUrl": "string",
      "bulkAddress": {
        "city": "string",
        "company": "string",
        "country": "string",
        "email": "string",
        "houseNumberOrName": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "mobile": "string",
        "name": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "cardImageId": "string",
      "carrier": "string",
      "carrierImageId": "string",
      "configurationProfileId": "string",
      "currency": "string",
      "envelope": "string",
      "insert": "string",
      "languages": [
        "string"
      ],
      "logoImageId": "string",
      "pinMailer": "string",
      "printLine": "string",
      "shipmentMethod": "string"
    },
    "cvc": "string",
    "deliveryContact": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "company": "string",
      "email": "string",
      "name": {
        "firstName": "string",
        "lastName": "string"
      },
      "phone": {
        "number": "string",
        "type": "landline"
      },
      "webAddress": "string"
    },
    "expiration": {
      "month": "string",
      "year": "string"
    },
    "formFactor": "physical",
    "lastFour": "string",
    "number": "string",
    "threeDSecure": "string",
    "usage": "string"
  },
  "description": "string",
  "id": "string",
  "issuingCountryCode": "string",
  "paymentInstrumentGroupId": "string",
  "reference": "string",
  "replacedById": "string",
  "replacementOfId": "string",
  "status": "active",
  "statusComment": "string",
  "statusReason": "accountClosure",
  "type": "bankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalBankAccountIdentifications|[[IbanAccountIdentification](#schemaibanaccountidentification)]|false|none|**Deprecated.** Contains optional, additional business account details. Returned when you create a payment instrument with `type` **bankAccount**.|
|balanceAccountId|string|true|none|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.|
|bankAccount|[BankAccountDetails](#schemabankaccountdetails)|false|none|Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.|
|card|[Card](#schemacard)|false|none|Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**.|
|description|string|false|none|Your description for the payment instrument, maximum 300 characters.|
|id|string|true|none|The unique identifier of the payment instrument.|
|issuingCountryCode|string|true|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.|
|paymentInstrumentGroupId|string|false|none|The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.|
|reference|string|false|none|Your reference for the payment instrument, maximum 150 characters.|
|replacedById|string|false|none|The unique identifier of the payment instrument that replaced this payment instrument.|
|replacementOfId|string|false|none|The unique identifier of the payment instrument that is replaced by this payment instrument.|
|status|string|false|none|The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values: <br><br> * **active**:  The payment instrument is active and can be used to make payments. <br><br> * **inactive**: The payment instrument is inactive and cannot be used to make payments. <br><br> * **suspended**: The payment instrument is suspended, either because it was stolen or lost. <br><br> * **closed**: The payment instrument is permanently closed. This action cannot be undone. <br><br>|
|statusComment|string|false|none|The status comment provides additional information for the statusReason of the payment instrument.|
|statusReason|string|false|none|The reason for the status of the payment instrument.<br><br>Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change.|
|type|string|true|none|The type of payment instrument.<br><br>Possible values: **card**, **bankAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|closed|
|status|inactive|
|status|suspended|
|statusReason|accountClosure|
|statusReason|damaged|
|statusReason|endOfLife|
|statusReason|expired|
|statusReason|lost|
|statusReason|other|
|statusReason|stolen|
|statusReason|suspectedFraud|
|statusReason|transactionRule|
|type|bankAccount|
|type|card|

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "number": "string",
  "type": "landline"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|The full phone number provided as a single string. <br>For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**, <br><br> or **"(0031) 611223344"**.|
|type|string|true|none|Type of phone number.<br>Possible values: <br>**Landline**, **Mobile**.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|landline|
|type|mobile|

<h2 id="tocS_RelayedAuthorisationRequest">RelayedAuthorisationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarelayedauthorisationrequest"></a>
<a id="schema_RelayedAuthorisationRequest"></a>
<a id="tocSrelayedauthorisationrequest"></a>
<a id="tocsrelayedauthorisationrequest"></a>

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
  "amountAdjustments": [
    {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "amountAdjustmentType": "atmMarkup",
      "basepoints": 0,
      "fixedAmount": {
        "currency": "str",
        "value": 0
      },
      "floorAmount": {
        "currency": "str",
        "value": 0
      },
      "limitAmount": {
        "currency": "str",
        "value": 0
      }
    }
  ],
  "authCode": "string",
  "authorisationDecision": {
    "reasonCode": "string",
    "status": "string",
    "statusCode": "string"
  },
  "authorisationType": "string",
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balanceMutations": [
    {
      "balanceAfter": {
        "currency": "str",
        "value": 0
      },
      "balanceBefore": {
        "currency": "str",
        "value": 0
      },
      "currency": "string",
      "mutationAmount": {
        "currency": "str",
        "value": 0
      },
      "type": "string"
    }
  ],
  "balancePlatform": "string",
  "entryMode": "string",
  "environment": "string",
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
  "originalAmount": {
    "currency": "str",
    "value": 0
  },
  "paymentInstrument": {
    "additionalBankAccountIdentifications": [
      {
        "bic": "string",
        "iban": "string",
        "type": "iban"
      }
    ],
    "balanceAccountId": "string",
    "bankAccount": {
      "accountNumber": "string",
      "accountType": "checking",
      "branchNumber": "string",
      "formFactor": "physical",
      "iban": "string",
      "routingNumber": "string",
      "sortCode": "string",
      "type": "iban"
    },
    "card": {
      "authentication": {
        "email": "string",
        "password": "string",
        "phone": {
          "number": "string",
          "type": "landline"
        }
      },
      "bin": "string",
      "brand": "string",
      "brandVariant": "string",
      "cardholderName": "string",
      "configuration": {
        "activation": "string",
        "activationUrl": "string",
        "bulkAddress": {
          "city": "string",
          "company": "string",
          "country": "string",
          "email": "string",
          "houseNumberOrName": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "mobile": "string",
          "name": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "cardImageId": "string",
        "carrier": "string",
        "carrierImageId": "string",
        "configurationProfileId": "string",
        "currency": "string",
        "envelope": "string",
        "insert": "string",
        "languages": [
          "string"
        ],
        "logoImageId": "string",
        "pinMailer": "string",
        "printLine": "string",
        "shipmentMethod": "string"
      },
      "cvc": "string",
      "deliveryContact": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "company": "string",
        "email": "string",
        "name": {
          "firstName": "string",
          "lastName": "string"
        },
        "phone": {
          "number": "string",
          "type": "landline"
        },
        "webAddress": "string"
      },
      "expiration": {
        "month": "string",
        "year": "string"
      },
      "formFactor": "physical",
      "lastFour": "string",
      "number": "string",
      "threeDSecure": "string",
      "usage": "string"
    },
    "description": "string",
    "id": "string",
    "issuingCountryCode": "string",
    "paymentInstrumentGroupId": "string",
    "reference": "string",
    "replacedById": "string",
    "replacementOfId": "string",
    "status": "active",
    "statusComment": "string",
    "statusReason": "accountClosure",
    "type": "bankAccount"
  },
  "processingType": "string",
  "reference": "string",
  "schemeRiskScore": 0,
  "schemeTraceId": "string",
  "schemeUniqueTransactionId": "string",
  "scores": [
    {
      "type": "string",
      "value": "string"
    }
  ],
  "threeDSecure": {
    "acsTransactionId": "string",
    "authenticationResult": "string",
    "authenticationType": "string",
    "dsTransactionId": "string"
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
  "type": "balancePlatform.authorisation.relayed",
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
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|The reference of the account holder.|
|amount|[Amount](#schemaamount)|false|none|The amount of the transaction.|
|amountAdjustments|[[AmountAdjustment](#schemaamountadjustment)]|false|none|The amount adjustments in the transaction.|
|authCode|string|false|none|The authorization code for the payment.|
|authorisationDecision|[AuthorisationDecisionRequest](#schemaauthorisationdecisionrequest)|false|none|The decision of the authorization.|
|authorisationType|string|false|none|The authorization type.<br><br>Possible values:<br>* **finalAuthorisation**<br>* **preAuthorisation**<br>* **defaultAuthorisation**|
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|The reference of the balance account.|
|balanceMutations|[[BalanceMutation](#schemabalancemutation)]|false|none|The list of balance mutations per event.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|entryMode|string|false|none|The entry mode of the information of the payment instrument. For example: **contactless**, **chip**, **magstripe**.|
|environment|string|false|none|The environment from which the webhook originated.<br>Possible values: **test**, **live**.<br>|
|id|string|false|none|The unique identifier of the transfer.|
|merchantData|[MerchantData](#schemamerchantdata)|false|none|The information about the merchant.|
|originalAmount|[Amount](#schemaamount)|false|none|The amount in the original currency.|
|paymentInstrument|[PaymentInstrument](#schemapaymentinstrument)|false|none|Contains information about the payment instrument.|
|processingType|string|false|none|The processing type used for this payment. For example: **ecommerce**, **pos**, **moto**.|
|reference|string|false|none|The reference of the payment.|
|schemeRiskScore|integer(int32)|false|none|The risk score provided by the card schemes.|
|schemeTraceId|string|false|none|The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme.|
|schemeUniqueTransactionId|string|false|none|The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme.|
|scores|[[TransactionScoring](#schematransactionscoring)]|false|none|The list of transaction scores.|
|threeDSecure|[ThreeDSecure](#schemathreedsecure)|false|none|The data of the result from the 3DS authentication.|
|transactionRulesResult|[TransactionRulesResult](#schematransactionrulesresult)|false|none|Contains the results of the evaluation of the transaction rules.|
|type|string|false|none|Type of notification.|
|validationResult|[[ValidationResult](#schemavalidationresult)]|false|none|Contains the checks that Adyen performed to validate the payment and the result of each.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.authorisation.relayed|

<h2 id="tocS_RelayedAuthorisationResponse">RelayedAuthorisationResponse</h2>
<!-- backwards compatibility -->
<a id="schemarelayedauthorisationresponse"></a>
<a id="schema_RelayedAuthorisationResponse"></a>
<a id="tocSrelayedauthorisationresponse"></a>
<a id="tocsrelayedauthorisationresponse"></a>

```json
{
  "authorisationDecision": {
    "refusalReason": "string",
    "status": "Authorised"
  },
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
|authorisationDecision|[AuthorisationDecisionResponse](#schemaauthorisationdecisionresponse)|false|none|Object representing the authorization decision.|
|metadata|object|false|none|Object that contains key-value pairs that you can use in your reporting or other business process.|
|reference|string|false|none|Reference of the payment.|

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

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
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
|errorCode|string|false|none|The error code mapped to the error message.|
|errorType|string|false|none|The category of the error.|
|message|string|false|none|A short explanation of the issue.|
|pspReference|string|false|none|The PSP reference of the payment.|
|status|integer(int32)|false|none|The HTTP response status.|

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

<h2 id="tocS_TransactionScoring">TransactionScoring</h2>
<!-- backwards compatibility -->
<a id="schematransactionscoring"></a>
<a id="schema_TransactionScoring"></a>
<a id="tocStransactionscoring"></a>
<a id="tocstransactionscoring"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of score.|
|value|string|false|none|The value of the score.|

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
