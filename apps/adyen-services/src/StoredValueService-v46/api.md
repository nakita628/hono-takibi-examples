<h1 id="adyen-stored-value-api">Adyen Stored Value API v46</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A set of API endpoints to manage stored value products.

Base URLs:

* <a href="https://pal-test.adyen.com/pal/servlet/StoredValue/v46">https://pal-test.adyen.com/pal/servlet/StoredValue/v46</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-stored-value-api-general">General</h1>

## Changes the status of the payment method.

<a id="opIdpost-changeStatus"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/StoredValue/v46/changeStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "str",
      "value": 0
    },
    "merchantAccount": "string",
    "paymentMethod": {
      "property1": "string",
      "property2": "string"
    },
    "recurringDetailReference": "string",
    "reference": "string",
    "shopperInteraction": "Ecommerce",
    "shopperReference": "string",
    "status": "active",
    "store": "string"
  }'
```

`POST /changeStatus`

Changes the status of the provided payment method to the specified status.

> Body parameter

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "status": "active",
  "store": "string"
}
```

<h3 id="changes-the-status-of-the-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoredValueStatusChangeRequest](#schemastoredvaluestatuschangerequest)|false|none|
|» amount|body|[Amount](#schemaamount)|false|The amount information for the transaction.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» paymentMethod|body|object|true|The collection that contains the type of the payment method and its specific information if available|
|» » **additionalProperties**|body|string|false|none|
|» recurringDetailReference|body|string|false|none|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperReference|body|string|false|none|
|» status|body|string|true|The status you want to change to|
|» store|body|string|false|The physical store, for which this payment is processed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "authCode": "string",
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

> 400 Response

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

<h3 id="changes-the-status-of-the-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[StoredValueStatusChangeResponse](#schemastoredvaluestatuschangeresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Checks the balance.

<a id="opIdpost-checkBalance"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/StoredValue/v46/checkBalance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "str",
      "value": 0
    },
    "merchantAccount": "string",
    "paymentMethod": {
      "property1": "string",
      "property2": "string"
    },
    "recurringDetailReference": "string",
    "reference": "string",
    "shopperInteraction": "Ecommerce",
    "shopperReference": "string",
    "store": "string"
  }'
```

`POST /checkBalance`

Checks the balance of the provided payment method.

> Body parameter

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "store": "string"
}
```

<h3 id="checks-the-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoredValueBalanceCheckRequest](#schemastoredvaluebalancecheckrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|false|The amount information for the transaction.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» paymentMethod|body|object|true|The collection that contains the type of the payment method and its specific information if available|
|» » **additionalProperties**|body|string|false|none|
|» recurringDetailReference|body|string|false|none|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperReference|body|string|false|none|
|» store|body|string|false|The physical store, for which this payment is processed.|

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
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

> 400 Response

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

<h3 id="checks-the-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[StoredValueBalanceCheckResponse](#schemastoredvaluebalancecheckresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Issues a new card.

<a id="opIdpost-issue"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/StoredValue/v46/issue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "str",
      "value": 0
    },
    "merchantAccount": "string",
    "paymentMethod": {
      "property1": "string",
      "property2": "string"
    },
    "recurringDetailReference": "string",
    "reference": "string",
    "shopperInteraction": "Ecommerce",
    "shopperReference": "string",
    "store": "string"
  }'
```

`POST /issue`

Issues a new card of the given payment method.

> Body parameter

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "store": "string"
}
```

<h3 id="issues-a-new-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoredValueIssueRequest](#schemastoredvalueissuerequest)|false|none|
|» amount|body|[Amount](#schemaamount)|false|The amount information for the transaction.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» paymentMethod|body|object|true|The collection that contains the type of the payment method and its specific information if available|
|» » **additionalProperties**|body|string|false|none|
|» recurringDetailReference|body|string|false|none|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperReference|body|string|false|none|
|» store|body|string|false|The physical store, for which this payment is processed.|

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
  "authCode": "string",
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

> 400 Response

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

<h3 id="issues-a-new-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[StoredValueIssueResponse](#schemastoredvalueissueresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Loads the payment method.

<a id="opIdpost-load"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/StoredValue/v46/load \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "str",
      "value": 0
    },
    "loadType": "merchandiseReturn",
    "merchantAccount": "string",
    "paymentMethod": {
      "property1": "string",
      "property2": "string"
    },
    "recurringDetailReference": "string",
    "reference": "string",
    "shopperInteraction": "Ecommerce",
    "shopperReference": "string",
    "store": "string"
  }'
```

`POST /load`

Loads the payment method with the specified funds.

> Body parameter

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "loadType": "merchandiseReturn",
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "store": "string"
}
```

<h3 id="loads-the-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoredValueLoadRequest](#schemastoredvalueloadrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount information for the transaction.|
|» loadType|body|string|false|The type of load you are trying to do, when absent we default to 'load'|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» paymentMethod|body|object|true|The collection that contains the type of the payment method and its specific information if available|
|» » **additionalProperties**|body|string|false|none|
|» recurringDetailReference|body|string|false|none|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperReference|body|string|false|none|
|» store|body|string|false|The physical store, for which this payment is processed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» loadType|merchandiseReturn|
|» loadType|load|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|

> Example responses

> 200 Response

```json
{
  "authCode": "string",
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

> 400 Response

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

<h3 id="loads-the-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[StoredValueLoadResponse](#schemastoredvalueloadresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Merge the balance of two cards.

<a id="opIdpost-mergeBalance"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/StoredValue/v46/mergeBalance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "str",
      "value": 0
    },
    "merchantAccount": "string",
    "paymentMethod": {
      "property1": "string",
      "property2": "string"
    },
    "recurringDetailReference": "string",
    "reference": "string",
    "shopperInteraction": "Ecommerce",
    "shopperReference": "string",
    "sourcePaymentMethod": {
      "property1": "string",
      "property2": "string"
    },
    "store": "string"
  }'
```

`POST /mergeBalance`

Increases the balance of the paymentmethod by the full amount left on the source paymentmethod

> Body parameter

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "sourcePaymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "store": "string"
}
```

<h3 id="merge-the-balance-of-two-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoredValueBalanceMergeRequest](#schemastoredvaluebalancemergerequest)|false|none|
|» amount|body|[Amount](#schemaamount)|false|The amount information for the transaction.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» paymentMethod|body|object|true|The collection that contains the type of the payment method and its specific information if available|
|» » **additionalProperties**|body|string|false|none|
|» recurringDetailReference|body|string|false|none|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperReference|body|string|false|none|
|» sourcePaymentMethod|body|object|true|The collection that contains the source payment method and its specific information if available. Note that type should not be included since it is inferred from the (target) payment method|
|» » **additionalProperties**|body|string|false|none|
|» store|body|string|false|The physical store, for which this payment is processed.|

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
  "authCode": "string",
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

> 400 Response

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

<h3 id="merge-the-balance-of-two-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[StoredValueBalanceMergeResponse](#schemastoredvaluebalancemergeresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Voids a transaction.

<a id="opIdpost-voidTransaction"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/StoredValue/v46/voidTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "string",
    "originalReference": "string",
    "reference": "string",
    "store": "string",
    "tenderReference": "string",
    "uniqueTerminalId": "string"
  }'
```

`POST /voidTransaction`

Voids the referenced stored value transaction.

> Body parameter

```json
{
  "merchantAccount": "string",
  "originalReference": "string",
  "reference": "string",
  "store": "string",
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

<h3 id="voids-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoredValueVoidRequest](#schemastoredvaluevoidrequest)|false|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» originalReference|body|string|true|The original pspReference of the payment to modify.|
|» reference|body|string|false|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|» store|body|string|false|The physical store, for which this payment is processed.|
|» tenderReference|body|string|false|The reference of the tender.|
|» uniqueTerminalId|body|string|false|The unique ID of a POS terminal.|

> Example responses

> 200 Response

```json
{
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

> 400 Response

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

<h3 id="voids-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[StoredValueVoidResponse](#schemastoredvaluevoidresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
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

<h2 id="tocS_StoredValueBalanceCheckRequest">StoredValueBalanceCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluebalancecheckrequest"></a>
<a id="schema_StoredValueBalanceCheckRequest"></a>
<a id="tocSstoredvaluebalancecheckrequest"></a>
<a id="tocsstoredvaluebalancecheckrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount information for the transaction.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|paymentMethod|object|true|none|The collection that contains the type of the payment method and its specific information if available|
|recurringDetailReference|string|false|none|none|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperReference|string|false|none|none|
|store|string|false|none|The physical store, for which this payment is processed.|

#### Enumerated Values

|Property|Value|
|---|---|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_StoredValueBalanceCheckResponse">StoredValueBalanceCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluebalancecheckresponse"></a>
<a id="schema_StoredValueBalanceCheckResponse"></a>
<a id="tocSstoredvaluebalancecheckresponse"></a>
<a id="tocsstoredvaluebalancecheckresponse"></a>

```json
{
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentBalance|[Amount](#schemaamount)|false|none|The balance currently on the payment method.|
|pspReference|string|false|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.|
|resultCode|string|false|none|The result of the payment. Possible values:<br><br>* **Success** – The operation has been completed successfully. <br>* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. <br>* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. <br>* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. <br>|
|thirdPartyRefusalReason|string|false|none|Raw refusal reason received from the third party, where available|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Success|
|resultCode|Refused|
|resultCode|Error|
|resultCode|NotEnoughBalance|

<h2 id="tocS_StoredValueBalanceMergeRequest">StoredValueBalanceMergeRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluebalancemergerequest"></a>
<a id="schema_StoredValueBalanceMergeRequest"></a>
<a id="tocSstoredvaluebalancemergerequest"></a>
<a id="tocsstoredvaluebalancemergerequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "sourcePaymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount information for the transaction.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|paymentMethod|object|true|none|The collection that contains the type of the payment method and its specific information if available|
|recurringDetailReference|string|false|none|none|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperReference|string|false|none|none|
|sourcePaymentMethod|object|true|none|The collection that contains the source payment method and its specific information if available. Note that type should not be included since it is inferred from the (target) payment method|
|store|string|false|none|The physical store, for which this payment is processed.|

#### Enumerated Values

|Property|Value|
|---|---|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_StoredValueBalanceMergeResponse">StoredValueBalanceMergeResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluebalancemergeresponse"></a>
<a id="schema_StoredValueBalanceMergeResponse"></a>
<a id="tocSstoredvaluebalancemergeresponse"></a>
<a id="tocsstoredvaluebalancemergeresponse"></a>

```json
{
  "authCode": "string",
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|string|false|none|Authorisation code:<br>* When the payment is authorised, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty.|
|currentBalance|[Amount](#schemaamount)|false|none|The balance currently on the payment method.|
|pspReference|string|false|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.|
|resultCode|string|false|none|The result of the payment. Possible values:<br><br>* **Success** – The operation has been completed successfully. <br>* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. <br>* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. <br>* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. <br>|
|thirdPartyRefusalReason|string|false|none|Raw refusal reason received from the third party, where available|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Success|
|resultCode|Refused|
|resultCode|Error|
|resultCode|NotEnoughBalance|

<h2 id="tocS_StoredValueIssueRequest">StoredValueIssueRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueissuerequest"></a>
<a id="schema_StoredValueIssueRequest"></a>
<a id="tocSstoredvalueissuerequest"></a>
<a id="tocsstoredvalueissuerequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount information for the transaction.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|paymentMethod|object|true|none|The collection that contains the type of the payment method and its specific information if available|
|recurringDetailReference|string|false|none|none|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperReference|string|false|none|none|
|store|string|false|none|The physical store, for which this payment is processed.|

#### Enumerated Values

|Property|Value|
|---|---|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_StoredValueIssueResponse">StoredValueIssueResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueissueresponse"></a>
<a id="schema_StoredValueIssueResponse"></a>
<a id="tocSstoredvalueissueresponse"></a>
<a id="tocsstoredvalueissueresponse"></a>

```json
{
  "authCode": "string",
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|string|false|none|Authorisation code:<br>* When the payment is authorised, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty.|
|currentBalance|[Amount](#schemaamount)|false|none|The balance currently on the payment method.|
|paymentMethod|object|false|none|The collection that contains the type of the payment method and its specific information if available|
|pspReference|string|false|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.|
|resultCode|string|false|none|The result of the payment. Possible values:<br><br>* **Success** – The operation has been completed successfully. <br>* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. <br>* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. <br>* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. <br>|
|thirdPartyRefusalReason|string|false|none|Raw refusal reason received from the third party, where available|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Success|
|resultCode|Refused|
|resultCode|Error|
|resultCode|NotEnoughBalance|

<h2 id="tocS_StoredValueLoadRequest">StoredValueLoadRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueloadrequest"></a>
<a id="schema_StoredValueLoadRequest"></a>
<a id="tocSstoredvalueloadrequest"></a>
<a id="tocsstoredvalueloadrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "loadType": "merchandiseReturn",
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount information for the transaction.|
|loadType|string|false|none|The type of load you are trying to do, when absent we default to 'load'|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|paymentMethod|object|true|none|The collection that contains the type of the payment method and its specific information if available|
|recurringDetailReference|string|false|none|none|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperReference|string|false|none|none|
|store|string|false|none|The physical store, for which this payment is processed.|

#### Enumerated Values

|Property|Value|
|---|---|
|loadType|merchandiseReturn|
|loadType|load|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_StoredValueLoadResponse">StoredValueLoadResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueloadresponse"></a>
<a id="schema_StoredValueLoadResponse"></a>
<a id="tocSstoredvalueloadresponse"></a>
<a id="tocsstoredvalueloadresponse"></a>

```json
{
  "authCode": "string",
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|string|false|none|Authorisation code:<br>* When the payment is authorised, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty.|
|currentBalance|[Amount](#schemaamount)|false|none|The balance currently on the payment method.|
|pspReference|string|false|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.|
|resultCode|string|false|none|The result of the payment. Possible values:<br><br>* **Success** – The operation has been completed successfully. <br>* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. <br>* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. <br>* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. <br>|
|thirdPartyRefusalReason|string|false|none|Raw refusal reason received from the third party, where available|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Success|
|resultCode|Refused|
|resultCode|Error|
|resultCode|NotEnoughBalance|

<h2 id="tocS_StoredValueStatusChangeRequest">StoredValueStatusChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluestatuschangerequest"></a>
<a id="schema_StoredValueStatusChangeRequest"></a>
<a id="tocSstoredvaluestatuschangerequest"></a>
<a id="tocsstoredvaluestatuschangerequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantAccount": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperInteraction": "Ecommerce",
  "shopperReference": "string",
  "status": "active",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount information for the transaction.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|paymentMethod|object|true|none|The collection that contains the type of the payment method and its specific information if available|
|recurringDetailReference|string|false|none|none|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperReference|string|false|none|none|
|status|string|true|none|The status you want to change to|
|store|string|false|none|The physical store, for which this payment is processed.|

#### Enumerated Values

|Property|Value|
|---|---|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|
|status|active|
|status|inactive|

<h2 id="tocS_StoredValueStatusChangeResponse">StoredValueStatusChangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluestatuschangeresponse"></a>
<a id="schema_StoredValueStatusChangeResponse"></a>
<a id="tocSstoredvaluestatuschangeresponse"></a>
<a id="tocsstoredvaluestatuschangeresponse"></a>

```json
{
  "authCode": "string",
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|string|false|none|Authorisation code:<br>* When the payment is authorised, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty.|
|currentBalance|[Amount](#schemaamount)|false|none|The balance currently on the payment method.|
|pspReference|string|false|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.|
|resultCode|string|false|none|The result of the payment. Possible values:<br><br>* **Success** – The operation has been completed successfully. <br>* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. <br>* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. <br>* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. <br>|
|thirdPartyRefusalReason|string|false|none|Raw refusal reason received from the third party, where available|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Success|
|resultCode|Refused|
|resultCode|Error|
|resultCode|NotEnoughBalance|

<h2 id="tocS_StoredValueVoidRequest">StoredValueVoidRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluevoidrequest"></a>
<a id="schema_StoredValueVoidRequest"></a>
<a id="tocSstoredvaluevoidrequest"></a>
<a id="tocsstoredvaluevoidrequest"></a>

```json
{
  "merchantAccount": "string",
  "originalReference": "string",
  "reference": "string",
  "store": "string",
  "tenderReference": "string",
  "uniqueTerminalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|originalReference|string|true|none|The original pspReference of the payment to modify.|
|reference|string|false|none|Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters.|
|store|string|false|none|The physical store, for which this payment is processed.|
|tenderReference|string|false|none|The reference of the tender.|
|uniqueTerminalId|string|false|none|The unique ID of a POS terminal.|

<h2 id="tocS_StoredValueVoidResponse">StoredValueVoidResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluevoidresponse"></a>
<a id="schema_StoredValueVoidResponse"></a>
<a id="tocSstoredvaluevoidresponse"></a>
<a id="tocsstoredvaluevoidresponse"></a>

```json
{
  "currentBalance": {
    "currency": "str",
    "value": 0
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "thirdPartyRefusalReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentBalance|[Amount](#schemaamount)|false|none|The balance currently on the payment method.|
|pspReference|string|false|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.|
|resultCode|string|false|none|The result of the payment. Possible values:<br><br>* **Success** – The operation has been completed successfully. <br>* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. <br>* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. <br>* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. <br>|
|thirdPartyRefusalReason|string|false|none|Raw refusal reason received from the third party, where available|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Success|
|resultCode|Refused|
|resultCode|Error|
|resultCode|NotEnoughBalance|
