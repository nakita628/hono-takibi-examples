<h1 id="adyen-payout-api">Adyen Payout API v68</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

> The **Payout API is deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


A set of API endpoints that allow you to store payout details, confirm, or decline a payout.

For more information, refer to [Online payouts](https://docs.adyen.com/online-payments/online-payouts).
## Authentication
To use the Payout API, you need to have [two API credentials](https://docs.adyen.com/online-payments/online-payouts#payouts-to-bank-accounts-and-wallets): one for storing payout details and submitting payouts, and another one for confirming or declining payouts. If you don't have the required API credentials, contact our [Support Team](https://www.adyen.help/hc/en-us/requests/new).

If using an API key, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using [basic authentication](https://docs.adyen.com/development-resources/api-credentials#basic-authentication).

The following example shows how to authenticate your request with basic authentication when submitting a payout:

```
curl
-u "storePayout@Company.YOUR_COMPANY_ACCOUNT":"YOUR_BASIC_AUTHENTICATION_PASSWORD" \
-H "Content-Type: application/json" \
...
```

## Versioning
Payout API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://pal-test.adyen.com/pal/servlet/Payout/v68/payout
```

## Going live

To authenticate to the live endpoints, you need [API credentials](https://docs.adyen.com/development-resources/api-credentials) from your live Customer Area.

The live endpoint URLs contain a prefix which is unique to your company account:
```

https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/Payout/v68/payout
```

Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.

Base URLs:

* <a href="https://pal-test.adyen.com/pal/servlet/Payout/v68">https://pal-test.adyen.com/pal/servlet/Payout/v68</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-payout-api-initialization">Initialization</h1>

## Store payout details

<a id="opIdpost-storeDetail"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payout/v68/storeDetail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "additionalData": {
      "property1": "string",
      "property2": "string"
    },
    "bank": {
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
    "entityType": "NaturalPerson",
    "fraudOffset": 0,
    "merchantAccount": "string",
    "nationality": "st",
    "recurring": {
      "contract": "ONECLICK",
      "recurringDetailName": "string",
      "recurringExpiry": "1970-01-01T00:00:00Z",
      "recurringFrequency": "string",
      "tokenService": "VISATOKENSERVICE"
    },
    "selectedBrand": "string",
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "socialSecurityNumber": "string",
    "telephoneNumber": "string"
  }'
```

`POST /storeDetail`

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Stores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.

> Body parameter

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "bank": {
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
  "entityType": "NaturalPerson",
  "fraudOffset": 0,
  "merchantAccount": "string",
  "nationality": "st",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "selectedBrand": "string",
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "socialSecurityNumber": "string",
  "telephoneNumber": "string"
}
```

<h3 id="store-payout-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoreDetailRequest](#schemastoredetailrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular request.|
|» » **additionalProperties**|body|string|false|none|
|» bank|body|[BankAccount](#schemabankaccount)|false|A container for bank account data.<br>> This field is mandatory if `card` is not provided.|
|» billingAddress|body|[Address](#schemaaddress)|false|The billing address.<br><br>> The `billingAddress` object is required for cross-border payouts to and from Canada. Include all of the fields within this object.|
|» card|body|[Card](#schemacard)|false|A container for card data.<br>> This field is mandatory if `bank` is not provided.|
|» dateOfBirth|body|string(date)|true|The date of birth.<br>Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD<br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br>> This field is mandatory for natural persons.|
|» entityType|body|string|true|The type of the entity the payout is processed for.|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» nationality|body|string|true|The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').|
|» recurring|body|[Recurring](#schemarecurring)|true|A container for the type of recurring contract to be retrieved.<br><br>The recurring.contract must be set to `PAYOUT`|
|» selectedBrand|body|string|false|The name of the brand to make a payout to.<br><br>For Paysafecard it must be set to `paysafecard`.|
|» shopperEmail|body|string|true|The shopper's email address.|
|» shopperName|body|[Name](#schemaname)|false|The shopper's name.<br><br>When the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.|
|» shopperReference|body|string|true|The shopper's reference for the payment transaction.|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» telephoneNumber|body|string|false|The shopper's phone number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entityType|NaturalPerson|
|» entityType|Company|

> Example responses

> 200 Response

```json
{
  "pspReference": "991617894326362D",
  "recurringDetailReference": "9916178936754752",
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

<h3 id="store-payout-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[StoreDetailResponse](#schemastoredetailresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Store details and submit a payout

<a id="opIdpost-storeDetailAndSubmitThirdParty"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payout/v68/storeDetailAndSubmitThirdParty \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "additionalData": {
      "property1": "string",
      "property2": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "bank": {
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
    "entityType": "NaturalPerson",
    "fraudOffset": 0,
    "merchantAccount": "string",
    "nationality": "st",
    "recurring": {
      "contract": "ONECLICK",
      "recurringDetailName": "string",
      "recurringExpiry": "1970-01-01T00:00:00Z",
      "recurringFrequency": "string",
      "tokenService": "VISATOKENSERVICE"
    },
    "reference": "string",
    "selectedBrand": "string",
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "shopperStatement": "string",
    "socialSecurityNumber": "string",
    "telephoneNumber": "string"
  }'
```

`POST /storeDetailAndSubmitThirdParty`

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Submits a payout and stores its details for subsequent payouts.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

> Body parameter

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "bank": {
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
  "entityType": "NaturalPerson",
  "fraudOffset": 0,
  "merchantAccount": "string",
  "nationality": "st",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "reference": "string",
  "selectedBrand": "string",
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "socialSecurityNumber": "string",
  "telephoneNumber": "string"
}
```

<h3 id="store-details-and-submit-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoreDetailAndSubmitRequest](#schemastoredetailandsubmitrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular request.|
|» » **additionalProperties**|body|string|false|none|
|» amount|body|[Amount](#schemaamount)|true|A container object for the payable amount information of the transaction.|
|» bank|body|[BankAccount](#schemabankaccount)|false|A container for bank account data.<br>> This field is mandatory if `card` is not provided.|
|» billingAddress|body|[Address](#schemaaddress)|false|The billing address.<br><br>> The `billingAddress` object is required for cross-border payouts to and from Canada. Include all of the fields within this object.|
|» card|body|[Card](#schemacard)|false|A container for card data.<br>> This field is mandatory if `bank` is not provided.|
|» dateOfBirth|body|string(date)|true|The date of birth.<br>Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD<br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br>> This field is mandatory for natural persons.|
|» entityType|body|string|true|The type of the entity the payout is processed for.|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» nationality|body|string|true|The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').|
|» recurring|body|[Recurring](#schemarecurring)|true|A container for the type of recurring contract to be retrieved.<br><br>The recurring.contract must be set to `PAYOUT`|
|» reference|body|string|true|The merchant reference for this payment. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.|
|» selectedBrand|body|string|false|The name of the brand to make a payout to.<br><br>For Paysafecard it must be set to `paysafecard`.|
|» shopperEmail|body|string|true|The shopper's email address.|
|» shopperName|body|[Name](#schemaname)|false|The shopper's name.<br><br>When the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.|
|» shopperReference|body|string|true|The shopper's reference for the payment transaction.|
|» shopperStatement|body|string|false|The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» telephoneNumber|body|string|false|The shopper's phone number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entityType|NaturalPerson|
|» entityType|Company|

> Example responses

> 200 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "string"
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

<h3 id="store-details-and-submit-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[StoreDetailAndSubmitResponse](#schemastoredetailandsubmitresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Submit a payout

<a id="opIdpost-submitThirdParty"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payout/v68/submitThirdParty \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "additionalData": {
      "property1": "string",
      "property2": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "dateOfBirth": "1970-01-01",
    "entityType": "NaturalPerson",
    "fraudOffset": 0,
    "merchantAccount": "string",
    "nationality": "string",
    "recurring": {
      "contract": "ONECLICK",
      "recurringDetailName": "string",
      "recurringExpiry": "1970-01-01T00:00:00Z",
      "recurringFrequency": "string",
      "tokenService": "VISATOKENSERVICE"
    },
    "reference": "string",
    "selectedRecurringDetailReference": "string",
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "shopperStatement": "string",
    "socialSecurityNumber": "string"
  }'
```

`POST /submitThirdParty`

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Submits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

> Body parameter

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "dateOfBirth": "1970-01-01",
  "entityType": "NaturalPerson",
  "fraudOffset": 0,
  "merchantAccount": "string",
  "nationality": "string",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "reference": "string",
  "selectedRecurringDetailReference": "string",
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "socialSecurityNumber": "string"
}
```

<h3 id="submit-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubmitRequest](#schemasubmitrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular request.|
|» » **additionalProperties**|body|string|false|none|
|» amount|body|[Amount](#schemaamount)|true|A container object for the payable amount information of the transaction.|
|» dateOfBirth|body|string(date)|false|The date of birth.<br>Format: ISO-8601; example: YYYY-MM-DD<br><br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br><br>> This field is mandatory for natural persons. <br>> This field is required to update the existing `dateOfBirth` that is associated with this recurring contract.|
|» entityType|body|string|false|The type of the entity the payout is processed for.<br><br>Allowed values:<br>* NaturalPerson<br>* Company<br>> This field is required to update the existing `entityType` that is associated with this recurring contract.|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» merchantAccount|body|string|true|The merchant account identifier you want to process the transaction request with.|
|» nationality|body|string|false|The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').<br><br>> This field is required to update the existing nationality that is associated with this recurring contract.|
|» recurring|body|[Recurring](#schemarecurring)|true|A container for the type of recurring contract to be retrieved.<br><br>The `recurring.contract` must be set to "PAYOUT".|
|» reference|body|string|true|The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.|
|» selectedRecurringDetailReference|body|string|true|This is the `recurringDetailReference` you want to use for this payout.<br><br>You can use the value LATEST to select the most recently used recurring detail.|
|» shopperEmail|body|string|true|The shopper's email address.|
|» shopperName|body|[Name](#schemaname)|false|The shopper's name.<br><br>In case the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.<br><br>> This field is required to update the existing `shopperName` associated with a recurring contract.|
|» shopperReference|body|string|true|The shopper's reference for the payout transaction.|
|» shopperStatement|body|string|false|The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entityType|NaturalPerson|
|» entityType|Company|

> Example responses

> 200 Response

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "string"
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

<h3 id="submit-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SubmitResponse](#schemasubmitresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-payout-api-reviewing">Reviewing</h1>

## Confirm a payout

<a id="opIdpost-confirmThirdParty"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payout/v68/confirmThirdParty \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "originalReference": "9913140798220028"
  }'
```

`POST /confirmThirdParty`

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Confirms a previously submitted payout.

To cancel a payout, use the `/declineThirdParty` endpoint.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "originalReference": "9913140798220028"
}
```

<h3 id="confirm-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ModifyRequest](#schemamodifyrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payout request.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» originalReference|body|string|true|The PSP reference received in the `/submitThirdParty` response.|

> Example responses

> 200 Response

```json
{
  "pspReference": "991617894325358C",
  "response": "[payout-confirm-received]"
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

<h3 id="confirm-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModifyResponse](#schemamodifyresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Cancel a payout

<a id="opIdpost-declineThirdParty"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payout/v68/declineThirdParty \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "originalReference": "9913140798220028"
  }'
```

`POST /declineThirdParty`

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Cancels a previously submitted payout.

To confirm and send a payout, use the `/confirmThirdParty` endpoint.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "originalReference": "9913140798220028"
}
```

<h3 id="cancel-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ModifyRequest](#schemamodifyrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payout request.|
|» » **additionalProperties**|body|string|false|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» originalReference|body|string|true|The PSP reference received in the `/submitThirdParty` response.|

> Example responses

> 200 Response

```json
{
  "pspReference": "991617894325360J",
  "response": "[payout-decline-received]"
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

<h3 id="cancel-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ModifyResponse](#schemamodifyresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-payout-api-instant-payouts">Instant payouts</h1>

## Make an instant card payout

<a id="opIdpost-payout"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Payout/v68/payout \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "value": 2500,
      "currency": "USD"
    },
    "card": {
      "number": "4111111111111111",
      "expiryMonth": "03",
      "expiryYear": "2030",
      "holderName": "John Smith"
    },
    "billingAddress": {
      "houseNumberOrName": "121",
      "street": "Brannan Street",
      "city": "Beverly Hills",
      "postalCode": "90210",
      "stateOrProvince": "CA",
      "country": "US"
    },
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "reference": "P9999999999999999",
    "shopperName": {
      "firstName": "John",
      "lastName": "Smith"
    }
  }'
```

`POST /payout`

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


With this call, you can pay out to your customers, and funds will be made available within 30 minutes on the cardholder's bank account (this is dependent on whether the issuer supports this functionality). Instant card payouts are only supported for Visa and Mastercard cards.

> Body parameter

```json
{
  "amount": {
    "value": 2500,
    "currency": "USD"
  },
  "card": {
    "number": "4111111111111111",
    "expiryMonth": "03",
    "expiryYear": "2030",
    "holderName": "John Smith"
  },
  "billingAddress": {
    "houseNumberOrName": "121",
    "street": "Brannan Street",
    "city": "Beverly Hills",
    "postalCode": "90210",
    "stateOrProvince": "CA",
    "country": "US"
  },
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "P9999999999999999",
  "shopperName": {
    "firstName": "John",
    "lastName": "Smith"
  }
}
```

<h3 id="make-an-instant-card-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutRequest](#schemapayoutrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|» billingAddress|body|[Address](#schemaaddress)|false|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|» card|body|[Card](#schemacard)|false|A container for card data.<br>> Either `bankAccount` or `card` field must be provided in a payment request.|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» fundSource|body|[FundSource](#schemafundsource)|false|The person or entity funding the money.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» recurring|body|[Recurring](#schemarecurring)|false|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» selectedRecurringDetailReference|body|string|false|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperName|body|[Name](#schemaname)|false|The shopper's full name.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|

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

<h3 id="make-an-instant-card-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PayoutResponse](#schemapayoutresponse)|
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

<h2 id="tocS_ModifyRequest">ModifyRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyrequest"></a>
<a id="schema_ModifyRequest"></a>
<a id="tocSmodifyrequest"></a>
<a id="tocsmodifyrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "merchantAccount": "string",
  "originalReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payout request.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|originalReference|string|true|none|The PSP reference received in the `/submitThirdParty` response.|

<h2 id="tocS_ModifyResponse">ModifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyresponse"></a>
<a id="schema_ModifyResponse"></a>
<a id="tocSmodifyresponse"></a>
<a id="tocsmodifyresponse"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "response": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be returned in a particular response.|
|pspReference|string|true|none|Adyen's 16-character string reference associated with the transaction. This value is globally unique; quote it when communicating with us about this response.|
|response|string|true|none|The response:<br>* In case of success, it is either `payout-confirm-received` or `payout-decline-received`.<br>* In case of an error, an informational message is returned.|

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

<h2 id="tocS_PayoutRequest">PayoutRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayoutrequest"></a>
<a id="schema_PayoutRequest"></a>
<a id="tocSpayoutrequest"></a>
<a id="tocspayoutrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
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
  "fraudOffset": 0,
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
  "merchantAccount": "string",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "reference": "string",
  "selectedRecurringDetailReference": "string",
  "shopperEmail": "string",
  "shopperInteraction": "Ecommerce",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "telephoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|card|[Card](#schemacard)|false|none|A container for card data.<br>> Either `bankAccount` or `card` field must be provided in a payment request.|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|fundSource|[FundSource](#schemafundsource)|false|none|The person or entity funding the money.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|recurring|[Recurring](#schemarecurring)|false|none|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|selectedRecurringDetailReference|string|false|none|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperName|[Name](#schemaname)|false|none|The shopper's full name.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|

#### Enumerated Values

|Property|Value|
|---|---|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_PayoutResponse">PayoutResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayoutresponse"></a>
<a id="schema_PayoutResponse"></a>
<a id="tocSpayoutresponse"></a>
<a id="tocspayoutresponse"></a>

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

<h2 id="tocS_StoreDetailAndSubmitRequest">StoreDetailAndSubmitRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredetailandsubmitrequest"></a>
<a id="schema_StoreDetailAndSubmitRequest"></a>
<a id="tocSstoredetailandsubmitrequest"></a>
<a id="tocsstoredetailandsubmitrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "bank": {
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
  "entityType": "NaturalPerson",
  "fraudOffset": 0,
  "merchantAccount": "string",
  "nationality": "st",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "reference": "string",
  "selectedBrand": "string",
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "socialSecurityNumber": "string",
  "telephoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular request.|
|amount|[Amount](#schemaamount)|true|none|A container object for the payable amount information of the transaction.|
|bank|[BankAccount](#schemabankaccount)|false|none|A container for bank account data.<br>> This field is mandatory if `card` is not provided.|
|billingAddress|[Address](#schemaaddress)|false|none|The billing address.<br><br>> The `billingAddress` object is required for cross-border payouts to and from Canada. Include all of the fields within this object.|
|card|[Card](#schemacard)|false|none|A container for card data.<br>> This field is mandatory if `bank` is not provided.|
|dateOfBirth|string(date)|true|none|The date of birth.<br>Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD<br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br>> This field is mandatory for natural persons.|
|entityType|string|true|none|The type of the entity the payout is processed for.|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|nationality|string|true|none|The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').|
|recurring|[Recurring](#schemarecurring)|true|none|A container for the type of recurring contract to be retrieved.<br><br>The recurring.contract must be set to `PAYOUT`|
|reference|string|true|none|The merchant reference for this payment. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.|
|selectedBrand|string|false|none|The name of the brand to make a payout to.<br><br>For Paysafecard it must be set to `paysafecard`.|
|shopperEmail|string|true|none|The shopper's email address.|
|shopperName|[Name](#schemaname)|false|none|The shopper's name.<br><br>When the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.|
|shopperReference|string|true|none|The shopper's reference for the payment transaction.|
|shopperStatement|string|false|none|The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|telephoneNumber|string|false|none|The shopper's phone number.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|NaturalPerson|
|entityType|Company|

<h2 id="tocS_StoreDetailAndSubmitResponse">StoreDetailAndSubmitResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredetailandsubmitresponse"></a>
<a id="schema_StoreDetailAndSubmitResponse"></a>
<a id="tocSstoredetailandsubmitresponse"></a>
<a id="tocsstoredetailandsubmitresponse"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be returned in a particular response.|
|pspReference|string|true|none|A new reference to uniquely identify this request.|
|refusalReason|string|false|none|In case of refusal, an informational message for the reason.|
|resultCode|string|true|none|The response:<br><br>* In case of success is payout-submit-received.<br>* In case of an error, an informational message is returned.|

<h2 id="tocS_StoreDetailRequest">StoreDetailRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredetailrequest"></a>
<a id="schema_StoreDetailRequest"></a>
<a id="tocSstoredetailrequest"></a>
<a id="tocsstoredetailrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "bank": {
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
  "entityType": "NaturalPerson",
  "fraudOffset": 0,
  "merchantAccount": "string",
  "nationality": "st",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "selectedBrand": "string",
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "socialSecurityNumber": "string",
  "telephoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular request.|
|bank|[BankAccount](#schemabankaccount)|false|none|A container for bank account data.<br>> This field is mandatory if `card` is not provided.|
|billingAddress|[Address](#schemaaddress)|false|none|The billing address.<br><br>> The `billingAddress` object is required for cross-border payouts to and from Canada. Include all of the fields within this object.|
|card|[Card](#schemacard)|false|none|A container for card data.<br>> This field is mandatory if `bank` is not provided.|
|dateOfBirth|string(date)|true|none|The date of birth.<br>Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD<br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br>> This field is mandatory for natural persons.|
|entityType|string|true|none|The type of the entity the payout is processed for.|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|nationality|string|true|none|The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').|
|recurring|[Recurring](#schemarecurring)|true|none|A container for the type of recurring contract to be retrieved.<br><br>The recurring.contract must be set to `PAYOUT`|
|selectedBrand|string|false|none|The name of the brand to make a payout to.<br><br>For Paysafecard it must be set to `paysafecard`.|
|shopperEmail|string|true|none|The shopper's email address.|
|shopperName|[Name](#schemaname)|false|none|The shopper's name.<br><br>When the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.|
|shopperReference|string|true|none|The shopper's reference for the payment transaction.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|telephoneNumber|string|false|none|The shopper's phone number.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|NaturalPerson|
|entityType|Company|

<h2 id="tocS_StoreDetailResponse">StoreDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredetailresponse"></a>
<a id="schema_StoreDetailResponse"></a>
<a id="tocSstoredetailresponse"></a>
<a id="tocsstoredetailresponse"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "recurringDetailReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be returned in a particular response.|
|pspReference|string|true|none|A new reference to uniquely identify this request.|
|recurringDetailReference|string|true|none|The token which you can use later on for submitting the payout.|
|resultCode|string|true|none|The result code of the transaction. `Success` indicates that the details were stored successfully.|

<h2 id="tocS_SubmitRequest">SubmitRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitrequest"></a>
<a id="schema_SubmitRequest"></a>
<a id="tocSsubmitrequest"></a>
<a id="tocssubmitrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "dateOfBirth": "1970-01-01",
  "entityType": "NaturalPerson",
  "fraudOffset": 0,
  "merchantAccount": "string",
  "nationality": "string",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "reference": "string",
  "selectedRecurringDetailReference": "string",
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "socialSecurityNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular request.|
|amount|[Amount](#schemaamount)|true|none|A container object for the payable amount information of the transaction.|
|dateOfBirth|string(date)|false|none|The date of birth.<br>Format: ISO-8601; example: YYYY-MM-DD<br><br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br><br>> This field is mandatory for natural persons. <br>> This field is required to update the existing `dateOfBirth` that is associated with this recurring contract.|
|entityType|string|false|none|The type of the entity the payout is processed for.<br><br>Allowed values:<br>* NaturalPerson<br>* Company<br>> This field is required to update the existing `entityType` that is associated with this recurring contract.|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|merchantAccount|string|true|none|The merchant account identifier you want to process the transaction request with.|
|nationality|string|false|none|The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').<br><br>> This field is required to update the existing nationality that is associated with this recurring contract.|
|recurring|[Recurring](#schemarecurring)|true|none|A container for the type of recurring contract to be retrieved.<br><br>The `recurring.contract` must be set to "PAYOUT".|
|reference|string|true|none|The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.|
|selectedRecurringDetailReference|string|true|none|This is the `recurringDetailReference` you want to use for this payout.<br><br>You can use the value LATEST to select the most recently used recurring detail.|
|shopperEmail|string|true|none|The shopper's email address.|
|shopperName|[Name](#schemaname)|false|none|The shopper's name.<br><br>In case the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.<br><br>> This field is required to update the existing `shopperName` associated with a recurring contract.|
|shopperReference|string|true|none|The shopper's reference for the payout transaction.|
|shopperStatement|string|false|none|The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).|
|socialSecurityNumber|string|false|none|The shopper's social security number.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|NaturalPerson|
|entityType|Company|

<h2 id="tocS_SubmitResponse">SubmitResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitresponse"></a>
<a id="schema_SubmitResponse"></a>
<a id="tocSsubmitresponse"></a>
<a id="tocssubmitresponse"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be returned in a particular response.|
|pspReference|string|true|none|A new reference to uniquely identify this request.|
|refusalReason|string|false|none|In case of refusal, an informational message for the reason.|
|resultCode|string|true|none|The response:<br>* In case of success, it is `payout-submit-received`.<br>* In case of an error, an informational message is returned.|
