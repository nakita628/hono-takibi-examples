<h1 id="giftcard-hub-api">GiftCard Hub API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

>ℹ️ Check the new [Payments onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/payments-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Payments and is organized by focusing on the developer's journey.

The Gift Card Hub API allows interactions with all Gift Card providers registered to a store from a single point.

Gift Card providers are systems capable of providing cards to be used in the buying process.

The following is the sequence diagram that represents calls in the purchase closing process.
![](https://cdn.jsdelivr.net/gh/vtexdocs/dev-portal-content@main/images/giftcard-hub-api-overview-0.png)

**Checkout + Gateway**: Systems responsible for the sale and for processing orders and payments.

**Gift Card Hub**: System responsible for managing multiple registered Gift Card providers for a store.

**Gift Card Provider**: System responsible for providing the Gift Cards available to the user not closing a purchase. This system can be implemented by third parties.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br/api">https://{accountName}.{environment}.com.br/api</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="giftcard-hub-api-provider">Provider</h1>

## List All GiftCard Providers

<a id="opIdListAllGiftCardProviders"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`GET /giftcardproviders`

Returns a collection of giftcard providers from a store.

<h3 id="list-all-giftcard-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|REST-Range|header|string|false|Pagination control. This query variable must follow the format _resources={from}-{to}_.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|

<h3 id="list-all-giftcard-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create/Update GiftCard Provider by ID

<a id="opIdCreate/UpdateGiftCardProviderbyID"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here \
  -X PUT \
  -H 'Content-Type: application/vnd.vtex.giftcardproviders.v1+json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}' \
  -d '{
    "cancelEnabled": true,
    "oauthProvider": "vtex",
    "preAuthEnabled": true,
    "serviceUrl": "https://api.vtex.com.br/basedevmkp"
  }'
```

`PUT /giftcardproviders/{giftCardProviderID}`

Create or update a giftcard provider from a store.

> Body parameter

```json
{
  "cancelEnabled": true,
  "oauthProvider": "vtex",
  "preAuthEnabled": true,
  "serviceUrl": "https://api.vtex.com.br/basedevmkp"
}
```

<h3 id="createupdate-giftcard-provider-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|body|body|[CreateUpdateGiftCardProviderbyIDRequest](#schemacreateupdategiftcardproviderbyidrequest)|true|none|
|» appKey|body|string|false|Credential provided by the merchant that VTEX will use for identification|
|» appToken|body|string|false|Credential provided by the merchant that VTEX will use for identification|
|» cancelEnabled|body|boolean|true|It says if it is possible to cancel the transaction, generated through the provider|
|» oauthProvider|body|string|true|Provider's authentication|
|» preAuthEnabled|body|boolean|true|Related to the pre-authorization that can happen on the transaction generated through the provider|
|» serviceUrl|body|string|true|URL from the provider|

<h3 id="createupdate-giftcard-provider-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete GiftCard Provider by ID

<a id="opIdDeleteGiftCardProviderbyID"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`DELETE /giftcardproviders/{giftCardProviderID}`

Delete a giftcard provider from a store.

<h3 id="delete-giftcard-provider-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|

<h3 id="delete-giftcard-provider-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|404|Not Found|O provider não existe.<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get GiftCard Provider by ID

<a id="opIdGetGiftCardProviderbyID"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`GET /giftcardproviders/{giftCardProviderId}`

Returns a giftcard provider from a store.

<h3 id="get-giftcard-provider-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderId|path|string|true|Gift Card provider's ID.|

<h3 id="get-giftcard-provider-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|404|Not Found|O provider não existe.<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="giftcard-hub-api-transaction">Transaction</h1>

## Create GiftCard in GiftCard Provider

<a id="opIdCreateGiftCardinGiftCardProvider"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards \
  -X POST \
  -H 'Content-Type: application/vnd.vtex.giftcardproviders.v1+json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}' \
  -d '{
    "caption": "Loyalty Program",
    "emissionDate": "2011-02-04T17:02:19.17",
    "expiringDate": "2020-02-04T17:02:19.17",
    "multipleCredits": true,
    "multipleRedemptions": true,
    "profileId": "92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff",
    "relationName": "loyalty-program",
    "restrictedToOwner": true
  }'
```

`POST /giftcardproviders/{giftCardProviderID}/giftcards`

Creates a giftcard in a giftcard provider.

> Body parameter

```json
{
  "caption": "Loyalty Program",
  "emissionDate": "2011-02-04T17:02:19.17",
  "expiringDate": "2020-02-04T17:02:19.17",
  "multipleCredits": true,
  "multipleRedemptions": true,
  "profileId": "92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff",
  "relationName": "loyalty-program",
  "restrictedToOwner": true
}
```

<h3 id="create-giftcard-in-giftcard-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|body|body|[CreateGiftCardinGiftCardProviderRequest](#schemacreategiftcardingiftcardproviderrequest)|true|none|
|» caption|body|string|true|none|
|» emissionDate|body|string|true|none|
|» expiringDate|body|string|true|none|
|» multipleCredits|body|boolean|true|none|
|» multipleRedemptions|body|boolean|true|none|
|» profileId|body|string|true|none|
|» relationName|body|string|true|none|
|» restrictedToOwner|body|boolean|true|none|

<h3 id="create-giftcard-in-giftcard-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get GiftCard from GiftCard Provider

<a id="opIdGetGiftCardfromGiftCardProvider"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20example%20here/giftcards/_search \
  -X POST \
  -H 'Content-Type: application/vnd.vtex.giftcardproviders.v1+json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}' \
  -H 'REST-Range: resources=0-49' \
  -d '{
    "cart": {
      "discounts": -20,
      "grandTotal": 182,
      "items": [
        {
          "id": "2000002",
          "name": null,
          "price": 200,
          "productId": "2000000",
          "quantity": 1,
          "refId": "MEV41"
        }
      ],
      "itemsTotal": 200,
      "redemptionCode": null,
      "relationName": null,
      "shipping": 2,
      "taxes": 0
    },
    "client": {
      "document": "42151783120",
      "email": "email@domain.com",
      "id": "3b1abc17-988e-4a14-8b7f-31fc6a5b955c"
    }
  }'
```

`POST /giftcardproviders/{giftCardProviderID}/giftcards/_search`

Returns all giftcards from a giftcard provider according to the filters.

> Body parameter

```json
{
  "cart": {
    "discounts": -20,
    "grandTotal": 182,
    "items": [
      {
        "id": "2000002",
        "name": null,
        "price": 200,
        "productId": "2000000",
        "quantity": 1,
        "refId": "MEV41"
      }
    ],
    "itemsTotal": 200,
    "redemptionCode": null,
    "relationName": null,
    "shipping": 2,
    "taxes": 0
  },
  "client": {
    "document": "42151783120",
    "email": "email@domain.com",
    "id": "3b1abc17-988e-4a14-8b7f-31fc6a5b955c"
  }
}
```

<h3 id="get-giftcard-from-giftcard-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|REST-Range|header|string|true|Range of documents to show.|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|body|body|[GetGiftCardfromGiftCardProviderRequest](#schemagetgiftcardfromgiftcardproviderrequest)|true|none|
|» cart|body|[Cart](#schemacart)|true|none|
|» client|body|[Client](#schemaclient)|true|none|

<h3 id="get-giftcard-from-giftcard-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get GiftCard from GiftCard Provider by ID

<a id="opIdGetGiftCardfromGiftCardProviderbyID"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}`

Returns a specific giftcard from a giftcard provider.

<h3 id="get-giftcard-from-giftcard-provider-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|

<h3 id="get-giftcard-from-giftcard-provider-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List All GiftCard Transactions

<a id="opIdListAllGiftCardTransactions"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6/transactions \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions`

Return all transaction from a giftcard.

<h3 id="list-all-giftcard-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|

<h3 id="list-all-giftcard-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create GiftCard Transaction

<a id="opIdCreateGiftCardTransaction"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6/transactions \
  -X POST \
  -H 'Content-Type: application/vnd.vtex.giftcardproviders.v1+json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}' \
  -d '{
    "description": "Order v2915869org-01",
    "operation": "Credit",
    "orderInfo": {
      "cart": {
        "discounts": 0,
        "grandTotal": 0,
        "items": [
          {
            "discount": 0,
            "id": "2000330",
            "name": "T-Shirt M",
            "price": 15,
            "priceTags": [],
            "productId": "2000196",
            "quantity": 1,
            "refId": null,
            "shippingDiscount": 0,
            "value": 15
          }
        ],
        "itemsTotal": 15,
        "shipping": 0,
        "taxes": 0
      },
      "clientProfile": {
        "birthDate": "0001-01-01T00:00:00",
        "document": "10617764093",
        "documentType": "cpf",
        "email": "email@domain.com",
        "firstName": "John",
        "isCorporate": false,
        "lastName": "Smith",
        "phone": "+5521993759875"
      },
      "orderId": "v2915869org-01",
      "sequence": 2915869,
      "shipping": {
        "city": "Leblon",
        "complement": "address",
        "country": "BRA",
        "neighborhood": "address",
        "number": "9678",
        "postalCode": "24417-246",
        "receiverName": "John Smith",
        "reference": "address",
        "state": "RJ",
        "street": "Rua Aidea Barreto do Couto"
      }
    },
    "redemptionCode": null,
    "redemptionToken": null,
    "requestId": "v2915869org-01",
    "value": 28.4
  }'
```

`POST /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions`

Creates a transaction to a giftcard.

> Body parameter

```json
{
  "description": "Order v2915869org-01",
  "operation": "Credit",
  "orderInfo": {
    "cart": {
      "discounts": 0,
      "grandTotal": 0,
      "items": [
        {
          "discount": 0,
          "id": "2000330",
          "name": "T-Shirt M",
          "price": 15,
          "priceTags": [],
          "productId": "2000196",
          "quantity": 1,
          "refId": null,
          "shippingDiscount": 0,
          "value": 15
        }
      ],
      "itemsTotal": 15,
      "shipping": 0,
      "taxes": 0
    },
    "clientProfile": {
      "birthDate": "0001-01-01T00:00:00",
      "document": "10617764093",
      "documentType": "cpf",
      "email": "email@domain.com",
      "firstName": "John",
      "isCorporate": false,
      "lastName": "Smith",
      "phone": "+5521993759875"
    },
    "orderId": "v2915869org-01",
    "sequence": 2915869,
    "shipping": {
      "city": "Leblon",
      "complement": "address",
      "country": "BRA",
      "neighborhood": "address",
      "number": "9678",
      "postalCode": "24417-246",
      "receiverName": "John Smith",
      "reference": "address",
      "state": "RJ",
      "street": "Rua Aidea Barreto do Couto"
    }
  },
  "redemptionCode": null,
  "redemptionToken": null,
  "requestId": "v2915869org-01",
  "value": 28.4
}
```

<h3 id="create-giftcard-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|
|body|body|[CreateGiftCardTransactionRequest](#schemacreategiftcardtransactionrequest)|true|none|
|» description|body|string|true|none|
|» operation|body|string|true|none|
|» orderInfo|body|[OrderInfo](#schemaorderinfo)|true|none|
|» redemptionCode|body|string \| null|true|none|
|» redemptionToken|body|string \| null|true|none|
|» requestId|body|string|true|none|
|» value|body|number|true|none|

<h3 id="create-giftcard-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List All GiftCard Cancellation Transactions

<a id="opIdListAllGiftCardCancellationTransactions"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6/transactions/b47690/cancellations \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/cancellations`

Returns a collection of cancellation transactions from a giftcard.

<h3 id="list-all-giftcard-cancellation-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|
|tId|path|string|true|Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.|

<h3 id="list-all-giftcard-cancellation-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create GiftCard Cancellation Transaction

<a id="opIdCreateGiftCardCancellationTransaction"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6/transactions/b47690/cancellations \
  -X POST \
  -H 'Content-Type: application/vnd.vtex.giftcardproviders.v1+json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}' \
  -d '{
    "requestId": "12093812masoidj120398",
    "value": 12.1
  }'
```

`POST /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/cancellations`

Creates a cancellation transaction to a giftcard.

> Body parameter

```json
{
  "requestId": "12093812masoidj120398",
  "value": 12.1
}
```

<h3 id="create-giftcard-cancellation-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|
|tId|path|string|true|Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.|
|body|body|[CreateGiftCardCancellationTransactionRequest](#schemacreategiftcardcancellationtransactionrequest)|true|none|
|» requestId|body|string|true|none|
|» value|body|number|true|none|

<h3 id="create-giftcard-cancellation-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List All GiftCard Settlement Transactions

<a id="opIdListAllGiftCardSettlementTransactions"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6/transactions/b47690/settlements \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/settlements`

Returns a collection of settlement transactions from a giftcard.

<h3 id="list-all-giftcard-settlement-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|
|tId|path|string|true|Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.|

<h3 id="list-all-giftcard-settlement-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create GiftCard Settlement Transaction

<a id="opIdCreateGiftCardSettlementTransaction"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6/transactions/b47690/settlements \
  -X POST \
  -H 'Content-Type: application/json;charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "cart": {
      "discounts": -20,
      "grandTotal": 182,
      "items": [
        {
          "id": "2000002",
          "name": null,
          "price": 200,
          "productId": "2000000",
          "quantity": 1,
          "refId": "MEV41"
        }
      ],
      "itemsTotal": 200,
      "redemptionCode": "FASD-ASDS-ASDA-ASDA",
      "relationName": "loyalty-program",
      "shipping": 2,
      "taxes": 0
    },
    "client": {
      "document": "42151783120",
      "email": "convidadovtex@gmail.com",
      "id": "3b1abc17-988e-4a14-8b7f-31fc6a5b955c"
    }
  }'
```

`POST /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/settlements`

Creates a settlement transaction to a giftcard.

> Body parameter

```json
{
  "cart": {
    "discounts": -20,
    "grandTotal": 182,
    "items": [
      {
        "id": "2000002",
        "name": null,
        "price": 200,
        "productId": "2000000",
        "quantity": 1,
        "refId": "MEV41"
      }
    ],
    "itemsTotal": 200,
    "redemptionCode": "FASD-ASDS-ASDA-ASDA",
    "relationName": "loyalty-program",
    "shipping": 2,
    "taxes": 0
  },
  "client": {
    "document": "42151783120",
    "email": "convidadovtex@gmail.com",
    "id": "3b1abc17-988e-4a14-8b7f-31fc6a5b955c"
  }
}
```

<h3 id="create-giftcard-settlement-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|
|tId|path|string|true|Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.|
|body|body|[CreateGiftCardSettlementTransactionRequest](#schemacreategiftcardsettlementtransactionrequest)|true|none|
|» cart|body|[Cart2](#schemacart2)|true|none|
|» client|body|[Client](#schemaclient)|true|none|

<h3 id="create-giftcard-settlement-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get GiftCard Transaction by ID

<a id="opIdGetGiftCardTransactionbyID"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6/transactions/b47690 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{transactionID}`

Returns a specific transaction from a giftcard.

<h3 id="get-giftcard-transaction-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|
|transactionID|path|string|true|Gift Card transaction ID.|

<h3 id="get-giftcard-transaction-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get GiftCard Authorization Transaction

<a id="opIdGetGiftCardAuthorizationTransaction"></a>

> Code samples

```bash
curl https://example.com/giftcardproviders/insert%20identifier%20here/giftcards/6/transactions/b47690/authorization \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}'
```

`GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{transactionID}/authorization`

Returns the transaction authorization info.

<h3 id="get-giftcard-authorization-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json.|
|X-VTEX-API-AppKey|header|string|true|VTEX API AppKey|
|X-VTEX-API-AppToken|header|string|true|VTEX API AppToken|
|giftCardProviderID|path|string|true|Gift Card provider's ID.|
|giftCardID|path|string|true|Gift Card ID.|
|transactionID|path|string|true|Gift Card transaction ID.|

<h3 id="get-giftcard-authorization-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_Cart">Cart</h2>
<!-- backwards compatibility -->
<a id="schemacart"></a>
<a id="schema_Cart"></a>
<a id="tocScart"></a>
<a id="tocscart"></a>

```json
{
  "discounts": 20,
  "grandTotal": 182,
  "items": [
    {
      "id": "2000002",
      "name": null,
      "price": 200,
      "productId": "2000000",
      "quantity": 1,
      "refId": "MEV41"
    }
  ],
  "itemsTotal": 200,
  "redemptionCode": null,
  "relationName": null,
  "shipping": 2,
  "taxes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discounts|integer(int32)|true|none|none|
|grandTotal|integer(int32)|true|none|none|
|items|[[Item](#schemaitem)]|true|none|none|
|itemsTotal|integer(int32)|true|none|none|
|redemptionCode|string \| null|true|none|none|
|relationName|string \| null|true|none|none|
|shipping|integer(int32)|true|none|none|
|taxes|integer(int32)|true|none|none|

<h2 id="tocS_Cart1">Cart1</h2>
<!-- backwards compatibility -->
<a id="schemacart1"></a>
<a id="schema_Cart1"></a>
<a id="tocScart1"></a>
<a id="tocscart1"></a>

```json
{
  "discounts": 0,
  "grandTotal": 0,
  "items": [
    {
      "discount": 0,
      "id": "2000330",
      "name": "T-Shirt M",
      "price": 15,
      "priceTags": [],
      "productId": "2000196",
      "quantity": 1,
      "refId": null,
      "shippingDiscount": 0,
      "value": 15
    }
  ],
  "itemsTotal": 15,
  "shipping": 0,
  "taxes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discounts|integer(int32)|true|none|none|
|grandTotal|integer(int32)|true|none|none|
|items|[[Item1](#schemaitem1)]|true|none|none|
|itemsTotal|integer(int32)|true|none|none|
|shipping|integer(int32)|true|none|none|
|taxes|integer(int32)|true|none|none|

<h2 id="tocS_Cart2">Cart2</h2>
<!-- backwards compatibility -->
<a id="schemacart2"></a>
<a id="schema_Cart2"></a>
<a id="tocScart2"></a>
<a id="tocscart2"></a>

```json
{
  "discounts": -20,
  "grandTotal": 182,
  "items": [
    {
      "id": "2000002",
      "name": null,
      "price": 200,
      "productId": "2000000",
      "quantity": 1,
      "refId": "MEV41"
    }
  ],
  "itemsTotal": 200,
  "redemptionCode": "FASD-ASDS-ASDA-ASDA",
  "relationName": "loyalty-program",
  "shipping": 2,
  "taxes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discounts|integer(int32)|true|none|none|
|grandTotal|integer(int32)|true|none|none|
|items|[[Item](#schemaitem)]|true|none|none|
|itemsTotal|integer(int32)|true|none|none|
|redemptionCode|string|true|none|none|
|relationName|string|true|none|none|
|shipping|integer(int32)|true|none|none|
|taxes|integer(int32)|true|none|none|

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "document": "42151783120",
  "email": "email@domain.com",
  "id": "3b1ab"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|true|none|none|
|email|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_ClientProfile">ClientProfile</h2>
<!-- backwards compatibility -->
<a id="schemaclientprofile"></a>
<a id="schema_ClientProfile"></a>
<a id="tocSclientprofile"></a>
<a id="tocsclientprofile"></a>

```json
{
  "birthDate": "0001-01-01T00:00:00",
  "document": "10617764093",
  "documentType": "cpf",
  "email": "email@domain.com",
  "firstName": "John",
  "isCorporate": false,
  "lastName": "Smith",
  "phone": "+5521993759875"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birthDate|string|true|none|none|
|document|string|true|none|none|
|documentType|string|true|none|none|
|email|string|true|none|none|
|firstName|string|true|none|none|
|isCorporate|boolean|true|none|none|
|lastName|string|true|none|none|
|phone|string|true|none|none|

<h2 id="tocS_CreateGiftCardCancellationTransactionRequest">CreateGiftCardCancellationTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategiftcardcancellationtransactionrequest"></a>
<a id="schema_CreateGiftCardCancellationTransactionRequest"></a>
<a id="tocScreategiftcardcancellationtransactionrequest"></a>
<a id="tocscreategiftcardcancellationtransactionrequest"></a>

```json
{
  "requestId": "1209",
  "value": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_CreateGiftCardSettlementTransactionRequest">CreateGiftCardSettlementTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategiftcardsettlementtransactionrequest"></a>
<a id="schema_CreateGiftCardSettlementTransactionRequest"></a>
<a id="tocScreategiftcardsettlementtransactionrequest"></a>
<a id="tocscreategiftcardsettlementtransactionrequest"></a>

```json
{
  "cart": {
    "discounts": 20,
    "grandTotal": 182,
    "items": [
      {
        "id": "2002",
        "name": null,
        "price": 200,
        "productId": "200",
        "quantity": 1,
        "refId": "MEV41"
      }
    ],
    "itemsTotal": 200,
    "redemptionCode": "FASD",
    "relationName": "rewards-program",
    "shipping": 2,
    "taxes": 0
  },
  "client": {
    "document": "42151783120",
    "email": "convidadovtex@gmail.com",
    "id": "3b1abc17-988e-4a14-8b7f-31fc6a5b955c"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cart|[Cart2](#schemacart2)|true|none|none|
|client|[Client](#schemaclient)|true|none|none|

<h2 id="tocS_CreateGiftCardTransactionRequest">CreateGiftCardTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategiftcardtransactionrequest"></a>
<a id="schema_CreateGiftCardTransactionRequest"></a>
<a id="tocScreategiftcardtransactionrequest"></a>
<a id="tocscreategiftcardtransactionrequest"></a>

```json
{
  "description": "example",
  "operation": "Credit",
  "orderInfo": {
    "cart": {
      "discounts": 0,
      "grandTotal": 0,
      "items": [
        {
          "discount": 0,
          "id": "2000330",
          "name": "n",
          "price": 15,
          "priceTags": [],
          "productId": "2000196",
          "quantity": 1,
          "refId": null,
          "shippingDiscount": 0,
          "value": 15
        }
      ],
      "itemsTotal": 15,
      "shipping": 0,
      "taxes": 0
    },
    "clientProfile": {
      "birthDate": "0001-01-01T00:00:00",
      "document": "10617764093",
      "documentType": "cpf",
      "email": "email@domain.com",
      "firstName": "example",
      "isCorporate": false,
      "lastName": "example",
      "phone": "+5521999999999"
    },
    "orderId": "v2915",
    "sequence": 2915869,
    "shipping": {
      "city": "Rio de Janeiro",
      "complement": "address",
      "country": "BRA",
      "neighborhood": "address",
      "number": "96",
      "postalCode": "24417-246",
      "receiverName": "client",
      "reference": "address",
      "state": "RJ",
      "street": "address"
    }
  },
  "redemptionCode": null,
  "redemptionToken": null,
  "requestId": "v2915",
  "value": 28
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|operation|string|true|none|none|
|orderInfo|[OrderInfo](#schemaorderinfo)|true|none|none|
|redemptionCode|string \| null|true|none|none|
|redemptionToken|string \| null|true|none|none|
|requestId|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_CreateGiftCardinGiftCardProviderRequest">CreateGiftCardinGiftCardProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategiftcardingiftcardproviderrequest"></a>
<a id="schema_CreateGiftCardinGiftCardProviderRequest"></a>
<a id="tocScreategiftcardingiftcardproviderrequest"></a>
<a id="tocscreategiftcardingiftcardproviderrequest"></a>

```json
{
  "caption": "Rewards Program",
  "emissionDate": "2011-02-04T17:02:19.17",
  "expiringDate": "2020-02-04T17:02:19.17",
  "multipleCredits": true,
  "multipleRedemptions": true,
  "profileId": "92de2",
  "relationName": "rewards-program",
  "restrictedToOwner": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|true|none|none|
|emissionDate|string|true|none|none|
|expiringDate|string|true|none|none|
|multipleCredits|boolean|true|none|none|
|multipleRedemptions|boolean|true|none|none|
|profileId|string|true|none|none|
|relationName|string|true|none|none|
|restrictedToOwner|boolean|true|none|none|

<h2 id="tocS_CreateUpdateGiftCardProviderbyIDRequest">CreateUpdateGiftCardProviderbyIDRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdategiftcardproviderbyidrequest"></a>
<a id="schema_CreateUpdateGiftCardProviderbyIDRequest"></a>
<a id="tocScreateupdategiftcardproviderbyidrequest"></a>
<a id="tocscreateupdategiftcardproviderbyidrequest"></a>

```json
{
  "cancelEnabled": true,
  "oauthProvider": "vtex",
  "preAuthEnabled": true,
  "serviceUrl": "https://api.vtex.com.br/example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appKey|string|false|none|Credential provided by the merchant that VTEX will use for identification|
|appToken|string|false|none|Credential provided by the merchant that VTEX will use for identification|
|cancelEnabled|boolean|true|none|It says if it is possible to cancel the transaction, generated through the provider|
|oauthProvider|string|true|none|Provider's authentication|
|preAuthEnabled|boolean|true|none|Related to the pre-authorization that can happen on the transaction generated through the provider|
|serviceUrl|string|true|none|URL from the provider|

<h2 id="tocS_GetGiftCardfromGiftCardProviderRequest">GetGiftCardfromGiftCardProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgiftcardfromgiftcardproviderrequest"></a>
<a id="schema_GetGiftCardfromGiftCardProviderRequest"></a>
<a id="tocSgetgiftcardfromgiftcardproviderrequest"></a>
<a id="tocsgetgiftcardfromgiftcardproviderrequest"></a>

```json
{
  "cart": {
    "discounts": 20,
    "grandTotal": 182,
    "items": [
      {
        "id": "2002",
        "name": null,
        "price": 200,
        "productId": "2000000",
        "quantity": 1,
        "refId": "M41"
      }
    ],
    "itemsTotal": 200,
    "redemptionCode": null,
    "relationName": null,
    "shipping": 2,
    "taxes": 0
  },
  "client": {
    "document": "42151783120",
    "email": "email@domain.com",
    "id": "3b1c"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cart|[Cart](#schemacart)|true|none|none|
|client|[Client](#schemaclient)|true|none|none|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": "2000002",
  "name": null,
  "price": 200,
  "productId": "2000000",
  "quantity": 1,
  "refId": "MEV41"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string \| null|true|none|none|
|price|integer(int32)|true|none|none|
|productId|string|true|none|none|
|quantity|integer(int32)|true|none|none|
|refId|string|true|none|none|

<h2 id="tocS_Item1">Item1</h2>
<!-- backwards compatibility -->
<a id="schemaitem1"></a>
<a id="schema_Item1"></a>
<a id="tocSitem1"></a>
<a id="tocsitem1"></a>

```json
{
  "discount": 0,
  "id": "2000330",
  "name": "T-Shirt M",
  "price": 15,
  "priceTags": [],
  "productId": "2000196",
  "quantity": 1,
  "refId": null,
  "shippingDiscount": 0,
  "value": 15
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discount|integer(int32)|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|price|integer(int32)|true|none|none|
|priceTags|[string]|true|none|none|
|productId|string|true|none|none|
|quantity|integer(int32)|true|none|none|
|refId|string \| null|true|none|none|
|shippingDiscount|integer(int32)|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_OrderInfo">OrderInfo</h2>
<!-- backwards compatibility -->
<a id="schemaorderinfo"></a>
<a id="schema_OrderInfo"></a>
<a id="tocSorderinfo"></a>
<a id="tocsorderinfo"></a>

```json
{
  "cart": {
    "discounts": 0,
    "grandTotal": 0,
    "items": [
      {
        "discount": 0,
        "id": "2000330",
        "name": "T-Shirt M",
        "price": 15,
        "priceTags": [],
        "productId": "2000196",
        "quantity": 1,
        "refId": null,
        "shippingDiscount": 0,
        "value": 15
      }
    ],
    "itemsTotal": 15,
    "shipping": 0,
    "taxes": 0
  },
  "clientProfile": {
    "birthDate": "0001-01-01T00:00:00",
    "document": "10617764093",
    "documentType": "cpf",
    "email": "email@domain.com",
    "firstName": "John",
    "isCorporate": false,
    "lastName": "Smith",
    "phone": "+5521993759875"
  },
  "orderId": "v2915869org-01",
  "sequence": 2915869,
  "shipping": {
    "city": "Leblon",
    "complement": "",
    "country": "BRA",
    "neighborhood": "",
    "number": "9678",
    "postalCode": "24417-246",
    "receiverName": "John Smith",
    "reference": "",
    "state": "RJ",
    "street": "Rua Aidea Barreto do Couto"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cart|[Cart1](#schemacart1)|true|none|none|
|clientProfile|[ClientProfile](#schemaclientprofile)|true|none|none|
|orderId|string|true|none|none|
|sequence|integer(int32)|true|none|none|
|shipping|[Shipping](#schemashipping)|true|none|none|

<h2 id="tocS_Shipping">Shipping</h2>
<!-- backwards compatibility -->
<a id="schemashipping"></a>
<a id="schema_Shipping"></a>
<a id="tocSshipping"></a>
<a id="tocsshipping"></a>

```json
{
  "city": "Leblon",
  "complement": "",
  "country": "BRA",
  "neighborhood": "",
  "number": "9678",
  "postalCode": "24417-246",
  "receiverName": "John Smith",
  "reference": "",
  "state": "RJ",
  "street": "Rua Aidea Barreto do Couto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|complement|string|true|none|none|
|country|string|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|receiverName|string|true|none|none|
|reference|string|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|
