<h1 id="adyen-recurring-api">Adyen Recurring API v68</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

> The Recurring API is a legacy API for managing tokens. We strongly recommend to use [Checkout API recurring endpoints](https://docs.adyen.com/api-explorer/Checkout/71/post/storedPaymentMethods) instead when possible.

The Recurring API allows you to manage and remove your tokens or stored payment details. Tokens should be created with validation during a payment request.

For more information, refer to our [Tokenization documentation](https://docs.adyen.com/online-payments/tokenization).
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
Recurring API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://pal-test.adyen.com/pal/servlet/Recurring/v68/disable
```

## Server-side API libraries
We provide open-source [server-side API libraries](https://docs.adyen.com/development-resources/libraries/) in several languages: 
- PHP
- Java
- Node.js
- .NET
- Go
- Python
- Ruby
- Apex (beta)

See our [integration examples](https://github.com/adyen-examples#%EF%B8%8F-official-integration-examples) for example uses of the libraries.

## Developer resources
Recurring API is available through a Postman collection. Click the button below to create a fork, then set the environment variables at **Environments**&nbsp;>&nbsp;**Adyen&nbsp;APIs**. 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25716737-0d1ef0da-f5a1-4004-b24a-c5152c51dc7b?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D25716737-0d1ef0da-f5a1-4004-b24a-c5152c51dc7b%26entityType%3Dcollection%26workspaceId%3Da8d63f9f-cfc7-4810-90c5-9e0c60030d3e#?env%5BAdyen%20APIs%5D=W3sia2V5IjoiWC1BUEktS2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJZT1VSX01FUkNIQU5UX0FDQ09VTlQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJZT1VSX0NPTVBBTllfQUNDT1VOVCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IllPVVJfQkFMQU5DRV9QTEFURk9STSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)


## Going live

To authenticate to the live endpoints, you need an [API credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer Area.

The live endpoint URLs contain a prefix which is unique to your company account:
```

https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/Recurring/v68/disable
```

Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.

Base URLs:

* <a href="https://pal-test.adyen.com/pal/servlet/Recurring/v68">https://pal-test.adyen.com/pal/servlet/Recurring/v68</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-recurring-api-general">General</h1>

## Create new permits linked to a recurring contract.

<a id="opIdpost-createPermit"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Recurring/v68/createPermit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "string",
    "permits": [
      {
        "partnerId": "string",
        "profileReference": "string",
        "restriction": {
          "maxAmount": {
            "currency": "str",
            "value": 0
          },
          "singleTransactionLimit": {
            "currency": "str",
            "value": 0
          },
          "singleUse": true
        },
        "resultKey": "string",
        "validTillDate": "1970-01-01T00:00:00Z"
      }
    ],
    "recurringDetailReference": "string",
    "shopperReference": "string"
  }'
```

`POST /createPermit`

<aside class="warning">
This operation is deprecated
</aside>

Create permits for a recurring contract, including support for defining restrictions.

> Body parameter

```json
{
  "merchantAccount": "string",
  "permits": [
    {
      "partnerId": "string",
      "profileReference": "string",
      "restriction": {
        "maxAmount": {
          "currency": "str",
          "value": 0
        },
        "singleTransactionLimit": {
          "currency": "str",
          "value": 0
        },
        "singleUse": true
      },
      "resultKey": "string",
      "validTillDate": "1970-01-01T00:00:00Z"
    }
  ],
  "recurringDetailReference": "string",
  "shopperReference": "string"
}
```

<h3 id="create-new-permits-linked-to-a-recurring-contract-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePermitRequest](#schemacreatepermitrequest)|false|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» permits|body|[[Permit](#schemapermit)]|true|The permits to create for this recurring contract.|
|» recurringDetailReference|body|string|true|The recurring contract the new permits will use.|
|» shopperReference|body|string|true|The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).|

> Example responses

> 200 Response

```json
{
  "permitResultList": [
    {
      "resultKey": "string",
      "token": "string"
    }
  ],
  "pspReference": "string"
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

<h3 id="create-new-permits-linked-to-a-recurring-contract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CreatePermitResult](#schemacreatepermitresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Disable stored payment details

<a id="opIdpost-disable"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Recurring/v68/disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "recurringDetailReference": "8314442372419167",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /disable`

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/online-payments/classic-integrations/classic-api-integration/tokenization/disable-stored-details).

> Body parameter

```json
{
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "recurringDetailReference": "8314442372419167",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="disable-stored-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DisableRequest](#schemadisablerequest)|false|none|
|» contract|body|string|false|Specify the contract if you only want to disable a specific use.<br><br>This field can be set to one of the following values, or to their combination (comma-separated):<br>* ONECLICK<br>* RECURRING<br>* PAYOUT|
|» merchantAccount|body|string|true|The merchant account identifier with which you want to process the transaction.|
|» recurringDetailReference|body|string|false|The ID that uniquely identifies the recurring detail reference.<br><br>If it is not provided, the whole recurring contract of the `shopperReference` will be disabled, which includes all recurring details.|
|» shopperReference|body|string|true|The ID that uniquely identifies the shopper.<br><br>This `shopperReference` must be the same as the `shopperReference` used in the initial payment.|

> Example responses

> 200 Response

```json
{
  "response": "string"
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

<h3 id="disable-stored-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DisableResult](#schemadisableresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Disable an existing permit.

<a id="opIdpost-disablePermit"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Recurring/v68/disablePermit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "string",
    "token": "string"
  }'
```

`POST /disablePermit`

<aside class="warning">
This operation is deprecated
</aside>

Disable a permit that was previously linked to a recurringDetailReference.

> Body parameter

```json
{
  "merchantAccount": "string",
  "token": "string"
}
```

<h3 id="disable-an-existing-permit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DisablePermitRequest](#schemadisablepermitrequest)|false|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» token|body|string|true|The permit token to disable.|

> Example responses

> 200 Response

```json
{
  "pspReference": "string",
  "status": "string"
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

<h3 id="disable-an-existing-permit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DisablePermitResult](#schemadisablepermitresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get stored payment details

<a id="opIdpost-listRecurringDetails"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Recurring/v68/listRecurringDetails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "recurring": {
      "contract": "RECURRING"
    },
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /listRecurringDetails`

Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).

> Body parameter

```json
{
  "recurring": {
    "contract": "RECURRING"
  },
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="get-stored-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RecurringDetailsRequest](#schemarecurringdetailsrequest)|false|none|
|» merchantAccount|body|string|true|The merchant account identifier you want to process the (transaction) request with.|
|» recurring|body|[Recurring](#schemarecurring)|false|A container for the type of a recurring contract to be retrieved.<br><br>The contract value needs to match the contract value submitted in the payment transaction used to create a recurring contract.<br>However, if `ONECLICK,RECURRING` is the original contract definition in the initial payment, then `contract` should take either `ONECLICK` or `RECURRING`, depending on whether or not you want the shopper to enter their card's security code when they finalize their purchase.|
|» shopperReference|body|string|true|The reference you use to uniquely identify the shopper (e.g. user ID or account ID).|

> Example responses

> 200 Response

```json
{
  "creationDate": "1970-01-01T00:00:00Z",
  "details": [
    {
      "RecurringDetail": {
        "additionalData": {
          "property1": "string",
          "property2": "string"
        },
        "alias": "string",
        "aliasType": "string",
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
        "contractTypes": [
          "string"
        ],
        "creationDate": "1970-01-01T00:00:00Z",
        "firstPspReference": "string",
        "name": "string",
        "networkTxReference": "string",
        "paymentMethodVariant": "string",
        "recurringDetailReference": "string",
        "shopperName": {
          "firstName": "string",
          "lastName": "string"
        },
        "socialSecurityNumber": "string",
        "tokenDetails": {
          "tokenData": {
            "property1": "string",
            "property2": "string"
          },
          "tokenDataType": "string"
        },
        "transactionLinkId": "string",
        "variant": "string"
      }
    }
  ],
  "lastKnownShopperEmail": "string",
  "shopperReference": "string"
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

<h3 id="get-stored-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RecurringDetailsResult](#schemarecurringdetailsresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Ask issuer to notify the shopper

<a id="opIdpost-notifyShopper"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Recurring/v68/notifyShopper \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "storedPaymentMethodId": "8415995487234100",
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "amount": {
      "currency": "INR",
      "value": 1000
    },
    "billingDate": "2021-03-16",
    "reference": "Example reference",
    "displayedReference": "exampleDisplayedReference"
  }'
```

`POST /notifyShopper`

Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "storedPaymentMethodId": "8415995487234100",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "amount": {
    "currency": "INR",
    "value": 1000
  },
  "billingDate": "2021-03-16",
  "reference": "Example reference",
  "displayedReference": "exampleDisplayedReference"
}
```

<h3 id="ask-issuer-to-notify-the-shopper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotifyShopperRequest](#schemanotifyshopperrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount of the upcoming payment.|
|» billingDate|body|string|false|Date on which the subscription amount will be debited from the shopper. In YYYY-MM-DD format|
|» billingSequenceNumber|body|string|false|Sequence of the debit. Depends on Frequency and Billing Attempts Rule.|
|» displayedReference|body|string|false|Reference of Pre-debit notification that is displayed to the shopper. Optional field. Maps to reference if missing|
|» merchantAccount|body|string|true|The merchant account identifier with which you want to process the transaction.|
|» recurringDetailReference|body|string|false|This is the `recurringDetailReference` returned in the response when you created the token.|
|» reference|body|string|true|Pre-debit notification reference sent by the merchant. This is a mandatory field|
|» shopperReference|body|string|true|The ID that uniquely identifies the shopper.<br><br>This `shopperReference` must be the same as the `shopperReference` used in the initial payment.|
|» storedPaymentMethodId|body|string|false|This is the `recurringDetailReference` returned in the response when you created the token.|

> Example responses

> 200 Response

```json
{
  "message": "Request Processed Successfully",
  "resultCode": "Success",
  "shopperNotificationReference": "9915003646742627",
  "storedPaymentMethodId": "8415995487234100",
  "pspReference": "M5N7TQ4TG5PFWR50",
  "reference": "Example reference",
  "displayedReference": "exampleDisplayedReference"
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

<h3 id="ask-issuer-to-notify-the-shopper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[NotifyShopperResult](#schemanotifyshopperresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Schedule running the Account Updater

<a id="opIdpost-scheduleAccountUpdater"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/servlet/Recurring/v68/scheduleAccountUpdater \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "reference": "YOUR_REFERENCE",
    "card": {
      "expiryMonth": "03",
      "expiryYear": "2030",
      "holderName": "Adyen Test",
      "number": "4111111111111111"
    }
  }'
```

`POST /scheduleAccountUpdater`

When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:
* If the card information is provided, all the sub-fields for `card` are mandatory.
* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "YOUR_REFERENCE",
  "card": {
    "expiryMonth": "03",
    "expiryYear": "2030",
    "holderName": "Adyen Test",
    "number": "4111111111111111"
  }
}
```

<h3 id="schedule-running-the-account-updater-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScheduleAccountUpdaterRequest](#schemascheduleaccountupdaterrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular request.|
|» » **additionalProperties**|body|string|false|none|
|» card|body|[Card](#schemacard)|false|Credit card data.<br><br>Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.|
|» merchantAccount|body|string|true|Account of the merchant.|
|» reference|body|string|true|A reference that merchants can apply for the call.|
|» selectedRecurringDetailReference|body|string|false|The selected detail recurring reference.<br><br>Optional if `card` is provided.|
|» shopperReference|body|string|false|The reference of the shopper that owns the recurring contract.<br><br>Optional if `card` is provided.|

> Example responses

> 200 Response

```json
{
  "pspReference": "QFQTPCQ8HXSKGK82",
  "result": "Success"
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

> 422 Response

```json
{
  "status": 422,
  "errorCode": "000",
  "message": "RecurringShopper not found",
  "errorType": "validation"
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

<h3 id="schedule-running-the-account-updater-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ScheduleAccountUpdaterResult](#schemascheduleaccountupdaterresult)|
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

<h2 id="tocS_CreatePermitRequest">CreatePermitRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermitrequest"></a>
<a id="schema_CreatePermitRequest"></a>
<a id="tocScreatepermitrequest"></a>
<a id="tocscreatepermitrequest"></a>

```json
{
  "merchantAccount": "string",
  "permits": [
    {
      "partnerId": "string",
      "profileReference": "string",
      "restriction": {
        "maxAmount": {
          "currency": "str",
          "value": 0
        },
        "singleTransactionLimit": {
          "currency": "str",
          "value": 0
        },
        "singleUse": true
      },
      "resultKey": "string",
      "validTillDate": "1970-01-01T00:00:00Z"
    }
  ],
  "recurringDetailReference": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|permits|[[Permit](#schemapermit)]|true|none|The permits to create for this recurring contract.|
|recurringDetailReference|string|true|none|The recurring contract the new permits will use.|
|shopperReference|string|true|none|The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).|

<h2 id="tocS_CreatePermitResult">CreatePermitResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermitresult"></a>
<a id="schema_CreatePermitResult"></a>
<a id="tocScreatepermitresult"></a>
<a id="tocscreatepermitresult"></a>

```json
{
  "permitResultList": [
    {
      "resultKey": "string",
      "token": "string"
    }
  ],
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permitResultList|[[PermitResult](#schemapermitresult)]|false|none|List of new permits.|
|pspReference|string|false|none|A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request.|

<h2 id="tocS_DisablePermitRequest">DisablePermitRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablepermitrequest"></a>
<a id="schema_DisablePermitRequest"></a>
<a id="tocSdisablepermitrequest"></a>
<a id="tocsdisablepermitrequest"></a>

```json
{
  "merchantAccount": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|token|string|true|none|The permit token to disable.|

<h2 id="tocS_DisablePermitResult">DisablePermitResult</h2>
<!-- backwards compatibility -->
<a id="schemadisablepermitresult"></a>
<a id="schema_DisablePermitResult"></a>
<a id="tocSdisablepermitresult"></a>
<a id="tocsdisablepermitresult"></a>

```json
{
  "pspReference": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pspReference|string|false|none|A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request.|
|status|string|false|none|Status of the disable request.|

<h2 id="tocS_DisableRequest">DisableRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablerequest"></a>
<a id="schema_DisableRequest"></a>
<a id="tocSdisablerequest"></a>
<a id="tocsdisablerequest"></a>

```json
{
  "contract": "string",
  "merchantAccount": "string",
  "recurringDetailReference": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract|string|false|none|Specify the contract if you only want to disable a specific use.<br><br>This field can be set to one of the following values, or to their combination (comma-separated):<br>* ONECLICK<br>* RECURRING<br>* PAYOUT|
|merchantAccount|string|true|none|The merchant account identifier with which you want to process the transaction.|
|recurringDetailReference|string|false|none|The ID that uniquely identifies the recurring detail reference.<br><br>If it is not provided, the whole recurring contract of the `shopperReference` will be disabled, which includes all recurring details.|
|shopperReference|string|true|none|The ID that uniquely identifies the shopper.<br><br>This `shopperReference` must be the same as the `shopperReference` used in the initial payment.|

<h2 id="tocS_DisableResult">DisableResult</h2>
<!-- backwards compatibility -->
<a id="schemadisableresult"></a>
<a id="schema_DisableResult"></a>
<a id="tocSdisableresult"></a>
<a id="tocsdisableresult"></a>

```json
{
  "response": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|string|false|none|Depending on whether a specific recurring detail was in the request, result is either [detail-successfully-disabled] or [all-details-successfully-disabled].|

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

<h2 id="tocS_NotifyShopperRequest">NotifyShopperRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotifyshopperrequest"></a>
<a id="schema_NotifyShopperRequest"></a>
<a id="tocSnotifyshopperrequest"></a>
<a id="tocsnotifyshopperrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "billingDate": "string",
  "billingSequenceNumber": "string",
  "displayedReference": "string",
  "merchantAccount": "string",
  "recurringDetailReference": "string",
  "reference": "string",
  "shopperReference": "string",
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount of the upcoming payment.|
|billingDate|string|false|none|Date on which the subscription amount will be debited from the shopper. In YYYY-MM-DD format|
|billingSequenceNumber|string|false|none|Sequence of the debit. Depends on Frequency and Billing Attempts Rule.|
|displayedReference|string|false|none|Reference of Pre-debit notification that is displayed to the shopper. Optional field. Maps to reference if missing|
|merchantAccount|string|true|none|The merchant account identifier with which you want to process the transaction.|
|recurringDetailReference|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|reference|string|true|none|Pre-debit notification reference sent by the merchant. This is a mandatory field|
|shopperReference|string|true|none|The ID that uniquely identifies the shopper.<br><br>This `shopperReference` must be the same as the `shopperReference` used in the initial payment.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|

<h2 id="tocS_NotifyShopperResult">NotifyShopperResult</h2>
<!-- backwards compatibility -->
<a id="schemanotifyshopperresult"></a>
<a id="schema_NotifyShopperResult"></a>
<a id="tocSnotifyshopperresult"></a>
<a id="tocsnotifyshopperresult"></a>

```json
{
  "displayedReference": "string",
  "message": "string",
  "pspReference": "string",
  "reference": "string",
  "resultCode": "string",
  "shopperNotificationReference": "string",
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayedReference|string|false|none|Reference of Pre-debit notification that is displayed to the shopper|
|message|string|false|none|A simple description of the `resultCode`.|
|pspReference|string|false|none|The unique reference that is associated with the request.|
|reference|string|false|none|Reference of Pre-debit notification sent in my the merchant|
|resultCode|string|false|none|The code indicating the status of notification.|
|shopperNotificationReference|string|false|none|The unique reference for the request sent downstream.|
|storedPaymentMethodId|string|false|none|This is the recurringDetailReference returned in the response when token was created|

<h2 id="tocS_Permit">Permit</h2>
<!-- backwards compatibility -->
<a id="schemapermit"></a>
<a id="schema_Permit"></a>
<a id="tocSpermit"></a>
<a id="tocspermit"></a>

```json
{
  "partnerId": "string",
  "profileReference": "string",
  "restriction": {
    "maxAmount": {
      "currency": "str",
      "value": 0
    },
    "singleTransactionLimit": {
      "currency": "str",
      "value": 0
    },
    "singleUse": true
  },
  "resultKey": "string",
  "validTillDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partnerId|string|false|none|Partner ID (when using the permit-per-partner token sharing model).|
|profileReference|string|false|none|The profile to apply to this permit (when using the shared permits model).|
|restriction|[PermitRestriction](#schemapermitrestriction)|false|none|Permit level restriction overrides.|
|resultKey|string|false|none|The key to link permit requests to permit results.|
|validTillDate|string(date-time)|false|none|The expiry date for this permit.|

<h2 id="tocS_PermitRestriction">PermitRestriction</h2>
<!-- backwards compatibility -->
<a id="schemapermitrestriction"></a>
<a id="schema_PermitRestriction"></a>
<a id="tocSpermitrestriction"></a>
<a id="tocspermitrestriction"></a>

```json
{
  "maxAmount": {
    "currency": "str",
    "value": 0
  },
  "singleTransactionLimit": {
    "currency": "str",
    "value": 0
  },
  "singleUse": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxAmount|[Amount](#schemaamount)|false|none|The total sum amount of one or more payments made using this permit may not exceed this amount if set.|
|singleTransactionLimit|[Amount](#schemaamount)|false|none|The amount of any single payment using this permit may not exceed this amount if set.|
|singleUse|boolean|false|none|Only a single payment can be made using this permit if set to true, otherwise multiple payments are allowed.|

<h2 id="tocS_PermitResult">PermitResult</h2>
<!-- backwards compatibility -->
<a id="schemapermitresult"></a>
<a id="schema_PermitResult"></a>
<a id="tocSpermitresult"></a>
<a id="tocspermitresult"></a>

```json
{
  "resultKey": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultKey|string|false|none|The key to link permit requests to permit results.|
|token|string|false|none|The permit token which is used to make payments by the partner company.|

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

<h2 id="tocS_RecurringDetail">RecurringDetail</h2>
<!-- backwards compatibility -->
<a id="schemarecurringdetail"></a>
<a id="schema_RecurringDetail"></a>
<a id="tocSrecurringdetail"></a>
<a id="tocsrecurringdetail"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "alias": "string",
  "aliasType": "string",
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
  "contractTypes": [
    "string"
  ],
  "creationDate": "1970-01-01T00:00:00Z",
  "firstPspReference": "string",
  "name": "string",
  "networkTxReference": "string",
  "paymentMethodVariant": "string",
  "recurringDetailReference": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "socialSecurityNumber": "string",
  "tokenDetails": {
    "tokenData": {
      "property1": "string",
      "property2": "string"
    },
    "tokenDataType": "string"
  },
  "transactionLinkId": "string",
  "variant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be returned in a particular response.<br><br>The additionalData object consists of entries, each of which includes the key and value.|
|alias|string|false|none|The alias of the credit card number.<br><br>Applies only to recurring contracts storing credit card details|
|aliasType|string|false|none|The alias type of the credit card number.<br><br>Applies only to recurring contracts storing credit card details.|
|bank|[BankAccount](#schemabankaccount)|false|none|A container for bank account data.|
|billingAddress|[Address](#schemaaddress)|false|none|The billing address.|
|card|[Card](#schemacard)|false|none|A container for card data.|
|contractTypes|[string]|false|none|Types of recurring contracts.|
|creationDate|string(date-time)|false|none|The date when the recurring details were created.|
|firstPspReference|string|false|none|The `pspReference` of the first recurring payment that created the recurring detail.|
|name|string|false|none|An optional descriptive name for this recurring detail.|
|networkTxReference|string|false|none|Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID.|
|paymentMethodVariant|string|false|none|The  type or sub-brand of a payment method used, e.g. Visa Debit, Visa Corporate, etc. For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).|
|recurringDetailReference|string|true|none|The reference that uniquely identifies the recurring detail.|
|shopperName|[Name](#schemaname)|false|none|The name of the shopper.|
|socialSecurityNumber|string|false|none|A shopper's social security number (only in countries where it is legal to collect).|
|tokenDetails|[TokenDetails](#schematokendetails)|false|none|none|
|transactionLinkId|string|false|none|The unique identifier for the transaction link, used for Mastercard recurring transactions.|
|variant|string|true|none|The payment method, such as “mc", "visa", "ideal", "paypal".|

<h2 id="tocS_RecurringDetailWrapper">RecurringDetailWrapper</h2>
<!-- backwards compatibility -->
<a id="schemarecurringdetailwrapper"></a>
<a id="schema_RecurringDetailWrapper"></a>
<a id="tocSrecurringdetailwrapper"></a>
<a id="tocsrecurringdetailwrapper"></a>

```json
{
  "RecurringDetail": {
    "additionalData": {
      "property1": "string",
      "property2": "string"
    },
    "alias": "string",
    "aliasType": "string",
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
    "contractTypes": [
      "string"
    ],
    "creationDate": "1970-01-01T00:00:00Z",
    "firstPspReference": "string",
    "name": "string",
    "networkTxReference": "string",
    "paymentMethodVariant": "string",
    "recurringDetailReference": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "socialSecurityNumber": "string",
    "tokenDetails": {
      "tokenData": {
        "property1": "string",
        "property2": "string"
      },
      "tokenDataType": "string"
    },
    "transactionLinkId": "string",
    "variant": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecurringDetail|[RecurringDetail](#schemarecurringdetail)|false|none|none|

<h2 id="tocS_RecurringDetailsRequest">RecurringDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarecurringdetailsrequest"></a>
<a id="schema_RecurringDetailsRequest"></a>
<a id="tocSrecurringdetailsrequest"></a>
<a id="tocsrecurringdetailsrequest"></a>

```json
{
  "merchantAccount": "string",
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier you want to process the (transaction) request with.|
|recurring|[Recurring](#schemarecurring)|false|none|A container for the type of a recurring contract to be retrieved.<br><br>The contract value needs to match the contract value submitted in the payment transaction used to create a recurring contract.<br>However, if `ONECLICK,RECURRING` is the original contract definition in the initial payment, then `contract` should take either `ONECLICK` or `RECURRING`, depending on whether or not you want the shopper to enter their card's security code when they finalize their purchase.|
|shopperReference|string|true|none|The reference you use to uniquely identify the shopper (e.g. user ID or account ID).|

<h2 id="tocS_RecurringDetailsResult">RecurringDetailsResult</h2>
<!-- backwards compatibility -->
<a id="schemarecurringdetailsresult"></a>
<a id="schema_RecurringDetailsResult"></a>
<a id="tocSrecurringdetailsresult"></a>
<a id="tocsrecurringdetailsresult"></a>

```json
{
  "creationDate": "1970-01-01T00:00:00Z",
  "details": [
    {
      "RecurringDetail": {
        "additionalData": {
          "property1": "string",
          "property2": "string"
        },
        "alias": "string",
        "aliasType": "string",
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
        "contractTypes": [
          "string"
        ],
        "creationDate": "1970-01-01T00:00:00Z",
        "firstPspReference": "string",
        "name": "string",
        "networkTxReference": "string",
        "paymentMethodVariant": "string",
        "recurringDetailReference": "string",
        "shopperName": {
          "firstName": "string",
          "lastName": "string"
        },
        "socialSecurityNumber": "string",
        "tokenDetails": {
          "tokenData": {
            "property1": "string",
            "property2": "string"
          },
          "tokenDataType": "string"
        },
        "transactionLinkId": "string",
        "variant": "string"
      }
    }
  ],
  "lastKnownShopperEmail": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|false|none|The date when the recurring details were created.|
|details|[[RecurringDetailWrapper](#schemarecurringdetailwrapper)]|false|none|Payment details stored for recurring payments.|
|lastKnownShopperEmail|string|false|none|The most recent email for this shopper (if available).|
|shopperReference|string|false|none|The reference you use to uniquely identify the shopper (e.g. user ID or account ID).|

<h2 id="tocS_ScheduleAccountUpdaterRequest">ScheduleAccountUpdaterRequest</h2>
<!-- backwards compatibility -->
<a id="schemascheduleaccountupdaterrequest"></a>
<a id="schema_ScheduleAccountUpdaterRequest"></a>
<a id="tocSscheduleaccountupdaterrequest"></a>
<a id="tocsscheduleaccountupdaterrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
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
  "merchantAccount": "string",
  "reference": "string",
  "selectedRecurringDetailReference": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular request.|
|card|[Card](#schemacard)|false|none|Credit card data.<br><br>Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.|
|merchantAccount|string|true|none|Account of the merchant.|
|reference|string|true|none|A reference that merchants can apply for the call.|
|selectedRecurringDetailReference|string|false|none|The selected detail recurring reference.<br><br>Optional if `card` is provided.|
|shopperReference|string|false|none|The reference of the shopper that owns the recurring contract.<br><br>Optional if `card` is provided.|

<h2 id="tocS_ScheduleAccountUpdaterResult">ScheduleAccountUpdaterResult</h2>
<!-- backwards compatibility -->
<a id="schemascheduleaccountupdaterresult"></a>
<a id="schema_ScheduleAccountUpdaterResult"></a>
<a id="tocSscheduleaccountupdaterresult"></a>
<a id="tocsscheduleaccountupdaterresult"></a>

```json
{
  "pspReference": "string",
  "result": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pspReference|string|true|none|Adyen's 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request.|
|result|string|true|none|The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message.|

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

<h2 id="tocS_TokenDetails">TokenDetails</h2>
<!-- backwards compatibility -->
<a id="schematokendetails"></a>
<a id="schema_TokenDetails"></a>
<a id="tocStokendetails"></a>
<a id="tocstokendetails"></a>

```json
{
  "tokenData": {
    "property1": "string",
    "property2": "string"
  },
  "tokenDataType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenData|object|false|none|none|
|tokenDataType|string|false|none|none|
