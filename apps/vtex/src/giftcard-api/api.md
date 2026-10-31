<h1 id="giftcard-api">GiftCard API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

>ℹ️ Onboarding guide
>
> Check the new [Payments onboarding guide](https://developers.vtex.com/docs/guides/payments-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Payments and is organized by focusing on the developer's journey.

The Gift Card is a payment method configured as a cash value associated with a client. It is used to grant a discount on the value of the order at the store.

> ⚠ A Gift Card works as a **payment method**, not a promotion.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br/api/">https://{accountName}.{environment}.com.br/api/</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="giftcard-api-gift-card">Gift Card</h1>

## Create GiftCard

<a id="opIdCreateGiftCard"></a>

> Code samples

```bash
curl https://example.com/giftcards \
  -X POST \
  -H 'Content-Type: application/vnd.vtex.giftcard.v1+json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}' \
  -d '{
    "caption": "Programa Vtex Fidelidade",
    "expiringDate": "2016-01-01T00:00:00",
    "multipleCredits": true,
    "multipleRedemptions": false,
    "profileId": "92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff",
    "redemptionCode": "BAHD-ASDB-ADQW-ASDQ",
    "relationName": "loyalty-program",
    "restrictedToOwner": true
  }'
```

`POST /giftcards`

Creates a GiftCard for a specific user

> Body parameter

```json
{
  "caption": "Programa Vtex Fidelidade",
  "expiringDate": "2016-01-01T00:00:00",
  "multipleCredits": true,
  "multipleRedemptions": false,
  "profileId": "92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff",
  "redemptionCode": "BAHD-ASDB-ADQW-ASDQ",
  "relationName": "loyalty-program",
  "restrictedToOwner": true
}
```

<h3 id="create-giftcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|X-VTEX-API-AppKey|header|string|true|The AppKey configured by the merchant|
|X-VTEX-API-AppToken|header|string|true|The AppToken configured by the merchant|
|body|body|[CreateGiftCardRequest](#schemacreategiftcardrequest)|true|none|
|» caption|body|string|true|The caption of the Giftcard.|
|» expiringDate|body|string|true|It must be in the format `YYYY-MM-DDThh:mm:ss.fff`.|
|» multipleCredits|body|boolean|false|The Giftcard balance can be changed.|
|» multipleRedemptions|body|boolean|false|The Giftcard can be used to make new purchases until its value is completely used.|
|» profileId|body|string|true|The client's ID.|
|» relationName|body|string|true|Represents the relationship between the client and the store.|
|» restrictedToOwner|body|boolean|false|The Giftcard can only be used for a specified client's ID.|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "caption": "Programa Vtex Fidelidade",
  "emissionDate": "2014-04-24T20:22:58.163",
  "expiringDate": "2016-01-01T00:00:00",
  "id": "954",
  "redemptionCode": "***********ASDQ",
  "redemptionToken": "32ScL57220Vapb8pc50HJ3mWH1cl1L8x",
  "relationName": "cardName",
  "transactions": {
    "href": "cards/954/transactions"
  }
}
```

<h3 id="create-giftcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[response](#schemaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get GiftCard using JSON

<a id="opIdGetGiftCardusingJSON"></a>

> Code samples

```bash
curl https://example.com/giftcards/_search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "cart": {
      "discounts": 0,
      "grandTotal": 123.1,
      "items": [
        {
          "id": "1",
          "name": "Product Name",
          "price": 100,
          "productId": "1",
          "quantity": 1,
          "refId": "12"
        }
      ],
      "itemsTotal": 100,
      "redemptionCode": null,
      "relationName": null,
      "shipping": 0,
      "taxes": 12
    },
    "client": {
      "document": "21301923110",
      "email": "email@damoain.com",
      "id": "019a0cc1-409a-4c16-859b-eefdb81f825e"
    }
  }'
```

`POST /giftcards/_search`

Returns the giftcards based on the cart data.

> Body parameter

```json
{
  "cart": {
    "discounts": 0,
    "grandTotal": 123.1,
    "items": [
      {
        "id": "1",
        "name": "Product Name",
        "price": 100,
        "productId": "1",
        "quantity": 1,
        "refId": "12"
      }
    ],
    "itemsTotal": 100,
    "redemptionCode": null,
    "relationName": null,
    "shipping": 0,
    "taxes": 12
  },
  "client": {
    "document": "21301923110",
    "email": "email@damoain.com",
    "id": "019a0cc1-409a-4c16-859b-eefdb81f825e"
  }
}
```

<h3 id="get-giftcard-using-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|REST-Range|header|string|false|PaginationB control.B ThisB queryB variableB mustB followB theB formatB _resources={from}-{to}_.|
|body|body|[GetGiftCardusingJSONRequest](#schemagetgiftcardusingjsonrequest)|true|none|
|» cart|body|[Cart](#schemacart)|true|none|
|» client|body|[Client](#schemaclient)|true|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "_self": {
        "href": "cards/589"
      },
      "id": "589"
    },
    {
      "_self": {
        "href": "cards/590"
      },
      "id": "590"
    },
    {
      "_self": {
        "href": "cards/591"
      },
      "id": "591"
    },
    {
      "_self": {
        "href": "cards/592"
      },
      "id": "592"
    }
  ],
  "paging": {
    "page": 0,
    "pages": 1,
    "perPage": 10,
    "total": 4
  }
}
```

<h3 id="get-giftcard-using-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[response2](#schemaresponse2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get GiftCard by ID

<a id="opIdGetGiftCardbyID"></a>

> Code samples

```bash
curl https://example.com/giftcards/2 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /giftcards/{giftCardID}`

Returns associated data for a specified giftcardId.

<h3 id="get-giftcard-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "balance": 0,
  "caption": "Programa Vtex Fidelidade",
  "emissionDate": "2014-04-24T20:22:58.163",
  "expiringDate": "2016-01-01T00:00:00",
  "id": "954",
  "redemptionCode": "***********ASDQ",
  "redemptionToken": "32ScL57220Vapb8pc50HJ3mWH1cl1L8x",
  "relationName": "cardName",
  "transactions": {
    "href": "cards/954/transactions"
  }
}
```

<h3 id="get-giftcard-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[response](#schemaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="giftcard-api-transaction">Transaction</h1>

## Get GiftCard Transactions

<a id="opIdGetGiftCardTransactions"></a>

> Code samples

```bash
curl https://example.com/giftcards/2/transactions \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /giftcards/{giftCardID}/transactions`

Returns all transaction of a giftcard.

<h3 id="get-giftcard-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "_self": {
      "href": "cards/890/transactions/268"
    },
    "id": "268"
  },
  {
    "_self": {
      "href": "cards/890/transactions/269"
    },
    "id": "269"
  },
  {
    "_self": {
      "href": "cards/890/transactions/270"
    },
    "id": "270"
  }
]
```

<h3 id="get-giftcard-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-giftcard-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[response3](#schemaresponse3)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create GiftCard Transaction

<a id="opIdCreateGiftCardTransaction"></a>

> Code samples

```bash
curl https://example.com/giftcards/7/transactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "description": "GiftCardHub",
    "operation": "Debit",
    "orderInfo": {
      "cart": {
        "discounts": -7.5,
        "grandTotal": 0,
        "items": [
          {
            "discount": -7.5,
            "id": "2001023",
            "name": "Vaporizador Des. ColC4nia Branco",
            "price": 14.99,
            "priceTags": [
              {
                "name": "discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c",
                "value": 0
              }
            ],
            "productId": "2000492",
            "quantity": 1,
            "refId": "35994",
            "shippingDiscount": 0,
            "value": 14.99
          }
        ],
        "itemsTotal": 14.99,
        "shipping": 7.27,
        "taxes": 0
      },
      "clientProfile": {
        "birthDate": "0001-01-01T00:00:00",
        "document": "02906792063",
        "email": "miguel.scott96@yahoo.com.br",
        "firstName": "miguel",
        "isCorporate": false,
        "lastName": "scott",
        "phone": "+551111111111",
        "profileId": "92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff"
      },
      "orderId": "v5006128str",
      "sequence": 5006128,
      "shipping": {
        "city": "Rio de Janeiro",
        "complement": null,
        "country": "BRA",
        "neighborhood": "Botafogo",
        "number": "111",
        "postalCode": "22250040",
        "receiverName": "miguel scott",
        "reference": null,
        "state": "RJ",
        "street": "Praia de Botafogo"
      }
    },
    "redemptionCode": "",
    "redemptionToken": "b2dac6f2-f365-48cd-82a9-0b376a55557a",
    "requestId": "B56CBE231DEE4E1A859183C1030CE926",
    "value": 3
  }'
```

`POST /giftcards/{giftCardID}/transactions`

Register a new giftcard transaction and authorize the item reservation.

> Body parameter

```json
{
  "description": "GiftCardHub",
  "operation": "Debit",
  "orderInfo": {
    "cart": {
      "discounts": -7.5,
      "grandTotal": 0,
      "items": [
        {
          "discount": -7.5,
          "id": "2001023",
          "name": "Vaporizador Des. ColC4nia Branco",
          "price": 14.99,
          "priceTags": [
            {
              "name": "discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c",
              "value": 0
            }
          ],
          "productId": "2000492",
          "quantity": 1,
          "refId": "35994",
          "shippingDiscount": 0,
          "value": 14.99
        }
      ],
      "itemsTotal": 14.99,
      "shipping": 7.27,
      "taxes": 0
    },
    "clientProfile": {
      "birthDate": "0001-01-01T00:00:00",
      "document": "02906792063",
      "email": "miguel.scott96@yahoo.com.br",
      "firstName": "miguel",
      "isCorporate": false,
      "lastName": "scott",
      "phone": "+551111111111",
      "profileId": "92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff"
    },
    "orderId": "v5006128str",
    "sequence": 5006128,
    "shipping": {
      "city": "Rio de Janeiro",
      "complement": null,
      "country": "BRA",
      "neighborhood": "Botafogo",
      "number": "111",
      "postalCode": "22250040",
      "receiverName": "miguel scott",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo"
    }
  },
  "redemptionCode": "",
  "redemptionToken": "b2dac6f2-f365-48cd-82a9-0b376a55557a",
  "requestId": "B56CBE231DEE4E1A859183C1030CE926",
  "value": 3
}
```

<h3 id="create-giftcard-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|
|body|body|[CreateGiftCardTransactionRequest](#schemacreategiftcardtransactionrequest)|false|none|
|» description|body|string|true|none|
|» operation|body|string|true|none|
|» orderInfo|body|[OrderInfo](#schemaorderinfo)|false|none|
|» redemptionCode|body|string|true|none|
|» redemptionToken|body|string|true|none|
|» requestId|body|string|true|none|
|» value|body|number(decimal)|true|none|

> Example responses

> 200 Response

```json
{
  "_self": {
    "href": "providers/VtexGiftCardProvider/cards/890/transactions/2451"
  },
  "id": "2541"
}
```

<h3 id="create-giftcard-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[response3](#schemaresponse3)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get GiftCard Transaction by ID

<a id="opIdGetGiftCardTransactionbyID"></a>

> Code samples

```bash
curl https://example.com/giftcards/6/transactions/b47690 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /giftcards/{giftCardID}/transactions/{transactionID}`

<h3 id="get-giftcard-transaction-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|
|transactionID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "date": "2016-01-01T00:00:00",
  "description": "CrC)dito relacionado a compra 10281230-01",
  "redemptionMode": "redemptionToken",
  "value": 123.4
}
```

<h3 id="get-giftcard-transaction-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[response5](#schemaresponse5)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Transaction Authorizations

<a id="opIdGetTransactionAuthorizations"></a>

> Code samples

```bash
curl https://example.com/giftcards/6/transactions/b47690/authorization \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /giftcards/{giftCardID}/transactions/{transactionID}/authorization`

Returns the giftcard transaction authorizations.

<h3 id="get-transaction-authorizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|
|transactionID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "date": "2016-01-01T00:00:00",
  "oid": "7cf8d7970e1c81d05620e46cceb6819f",
  "value": 123.4
}
```

<h3 id="get-transaction-authorizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[response6](#schemaresponse6)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Transaction Cancellations

<a id="opIdGetTransactionCancellations"></a>

> Code samples

```bash
curl https://example.com/giftcards/6/transactions/b47690/cancellations \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /giftcards/{giftCardID}/transactions/{transactionID}/cancellations`

Returns the giftcard transaction cancellations.

<h3 id="get-transaction-cancellations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|
|transactionID|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "date": "2016-04-06T00:00:00",
    "id": "239d35b430fc75379db966c1d3670c6f",
    "value": 13.4
  },
  {
    "date": "2016-05-06T00:00:00",
    "id": "49f0bad299687c62334182178bfd75d8",
    "value": 10.4
  }
]
```

<h3 id="get-transaction-cancellations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-transaction-cancellations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[response7](#schemaresponse7)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel GiftCard Transaction

<a id="opIdCancelGiftCardTransaction"></a>

> Code samples

```bash
curl https://example.com/giftcards/6/transactions/b476900c/cancellations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "requestId": "6360f",
    "value": 13
  }'
```

`POST /giftcards/{giftCardID}/transactions/{transactionID}/cancellations`

Creates a cancellation in the transaction. Cancel a item reservation or create a refund.

> Body parameter

```json
{
  "requestId": "6360f",
  "value": 13
}
```

<h3 id="cancel-giftcard-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|
|transactionID|path|string|true|none|
|body|body|[CancelGiftCardTransactionRequest](#schemacancelgiftcardtransactionrequest)|true|none|
|» requestId|body|string|true|none|
|» value|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "date": "2016-04-06T00:00:00",
  "oid": "239d35b430fc75379db966c1d3670c6f",
  "value": 13.4
}
```

<h3 id="cancel-giftcard-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[response6](#schemaresponse6)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Transaction Settlements

<a id="opIdGetTransactionSettlements"></a>

> Code samples

```bash
curl https://example.com/giftcards/7/transactions/b47690/settlements \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /giftcards/{giftCardID}/transactions/{transactionID}/settlements`

Returns the giftcard transaction settlements.

<h3 id="get-transaction-settlements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|
|transactionID|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "date": "2016-04-06T00:00:00",
    "oid": "b8e0c606b2fe543e5b0e639575cd9723",
    "value": 17.4
  },
  {
    "date": "2016-05-06T00:00:00",
    "oid": "6cb6cd63c16e219b1eee61f2",
    "value": 10.4
  }
]
```

<h3 id="get-transaction-settlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-transaction-settlements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[response6](#schemaresponse6)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Settle GiftCard Transaction

<a id="opIdSettleGiftCardTransaction"></a>

> Code samples

```bash
curl https://example.com/giftcards/6/transactions/b47690/settlements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "requestId": "6360f98eb0cf6fd5afa77e39bba8c20fe5807d8c",
    "value": 17.4
  }'
```

`POST /giftcards/{giftCardID}/transactions/{transactionID}/settlements`

Creates a giftcard transaction settlement.

> Body parameter

```json
{
  "requestId": "6360f98eb0cf6fd5afa77e39bba8c20fe5807d8c",
  "value": 17.4
}
```

<h3 id="settle-giftcard-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|giftCardID|path|string|true|none|
|transactionID|path|string|true|none|
|body|body|[SettleGiftCardTransactionRequest](#schemasettlegiftcardtransactionrequest)|true|none|
|» requestId|body|string|true|none|
|» value|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "date": "2016-04-06T00:00:00",
  "oid": "b8e0c606b2fe543e5b0e639575cd9723",
  "value": 17.4
}
```

<h3 id="settle-giftcard-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[response6](#schemaresponse6)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_CancelGiftCardTransactionRequest">CancelGiftCardTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelgiftcardtransactionrequest"></a>
<a id="schema_CancelGiftCardTransactionRequest"></a>
<a id="tocScancelgiftcardtransactionrequest"></a>
<a id="tocscancelgiftcardtransactionrequest"></a>

```json
{
  "requestId": "6360f",
  "value": 13
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Cart">Cart</h2>
<!-- backwards compatibility -->
<a id="schemacart"></a>
<a id="schema_Cart"></a>
<a id="tocScart"></a>
<a id="tocscart"></a>

```json
{
  "discounts": 0,
  "grandTotal": 123.1,
  "items": [
    {
      "id": "1",
      "name": "Product Name",
      "price": 100,
      "productId": "1",
      "quantity": 1,
      "refId": "12"
    }
  ],
  "itemsTotal": 100,
  "redemptionCode": null,
  "relationName": null,
  "shipping": 0,
  "taxes": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discounts|integer(int32)|true|none|none|
|grandTotal|number|true|none|none|
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
  "discounts": -7.5,
  "grandTotal": 0,
  "items": [
    {
      "discount": -7.5,
      "id": "2001023",
      "name": "Vaporizador Des. ColC4nia Branco",
      "price": 14.99,
      "priceTags": [
        {
          "name": "discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c",
          "value": 0
        }
      ],
      "productId": "2000492",
      "quantity": 1,
      "refId": "35994",
      "shippingDiscount": 0,
      "value": 14.99
    }
  ],
  "itemsTotal": 14.99,
  "shipping": 7.27,
  "taxes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discounts|number|true|none|none|
|grandTotal|integer(int32)|true|none|none|
|items|[[Item2](#schemaitem2)]|true|none|none|
|itemsTotal|number|true|none|none|
|shipping|number|true|none|none|
|taxes|integer(int32)|true|none|none|

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "document": "21301923110",
  "email": "email@damoain.com",
  "id": "019a0cc1-409a-4c16-859b-eefdb81f825e"
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
  "document": "02906792063",
  "email": "miguel.scott96@yahoo.com.br",
  "firstName": "miguel",
  "isCorporate": false,
  "lastName": "scott",
  "phone": "+551111111111"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birthDate|string|true|none|none|
|document|string|true|none|none|
|email|string|true|none|none|
|firstName|string|true|none|none|
|isCorporate|boolean|true|none|none|
|lastName|string|true|none|none|
|phone|string|true|none|none|

<h2 id="tocS_CreateGiftCardRequest">CreateGiftCardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategiftcardrequest"></a>
<a id="schema_CreateGiftCardRequest"></a>
<a id="tocScreategiftcardrequest"></a>
<a id="tocscreategiftcardrequest"></a>

```json
{
  "caption": "Programa Vtex Fidelidade",
  "expiringDate": "2016-01-01T00:00:00",
  "multipleCredits": true,
  "multipleRedemptions": false,
  "profileId": "92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff",
  "redemptionCode": "BAHD-ASDB-ADQW-ASDQ",
  "relationName": "loyalty-program",
  "restrictedToOwner": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|true|none|The caption of the Giftcard.|
|expiringDate|string|true|none|It must be in the format `YYYY-MM-DDThh:mm:ss.fff`.|
|multipleCredits|boolean|false|none|The Giftcard balance can be changed.|
|multipleRedemptions|boolean|false|none|The Giftcard can be used to make new purchases until its value is completely used.|
|profileId|string|true|none|The client's ID.|
|relationName|string|true|none|Represents the relationship between the client and the store.|
|restrictedToOwner|boolean|false|none|The Giftcard can only be used for a specified client's ID.|

<h2 id="tocS_CreateGiftCardTransactionRequest">CreateGiftCardTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategiftcardtransactionrequest"></a>
<a id="schema_CreateGiftCardTransactionRequest"></a>
<a id="tocScreategiftcardtransactionrequest"></a>
<a id="tocscreategiftcardtransactionrequest"></a>

```json
{
  "description": "GiftCardHub",
  "operation": "Debit",
  "orderInfo": {
    "cart": {
      "discounts": -7.5,
      "grandTotal": 0,
      "items": [
        {
          "discount": -7.5,
          "id": "2001023",
          "name": "Vaporizador Des. ColC4nia Branco",
          "price": 14.99,
          "priceTags": [
            {
              "name": "discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c",
              "value": 0
            }
          ],
          "productId": "2000492",
          "quantity": 1,
          "refId": "35994",
          "shippingDiscount": 0,
          "value": 14.99
        }
      ],
      "itemsTotal": 14.99,
      "shipping": 7.27,
      "taxes": 0
    },
    "clientProfile": {
      "birthDate": "0001-01-01T00:00:00",
      "document": "02906792063",
      "email": "miguel.scott96@yahoo.com.br",
      "firstName": "miguel",
      "isCorporate": false,
      "lastName": "scott",
      "phone": "+551111111111"
    },
    "orderId": "v5006128str",
    "sequence": 5006128,
    "shipping": {
      "city": "Rio de Janeiro",
      "complement": null,
      "country": "BRA",
      "neighborhood": "Botafogo",
      "number": "111",
      "postalCode": "22250040",
      "receiverName": "miguel scott",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo"
    }
  },
  "redemptionCode": "",
  "redemptionToken": "b2dac6f2-f365-48cd-82a9-0b376a55557a",
  "requestId": "B56CBE231DEE4E1A859183C1030CE926",
  "value": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|operation|string|true|none|none|
|orderInfo|[OrderInfo](#schemaorderinfo)|false|none|none|
|redemptionCode|string|true|none|none|
|redemptionToken|string|true|none|none|
|requestId|string|true|none|none|
|value|number(decimal)|true|none|none|

<h2 id="tocS_GetGiftCardusingJSONRequest">GetGiftCardusingJSONRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgiftcardusingjsonrequest"></a>
<a id="schema_GetGiftCardusingJSONRequest"></a>
<a id="tocSgetgiftcardusingjsonrequest"></a>
<a id="tocsgetgiftcardusingjsonrequest"></a>

```json
{
  "cart": {
    "discounts": 0,
    "grandTotal": 123.1,
    "items": [
      {
        "id": "1",
        "name": "Product Name",
        "price": 100,
        "productId": "1",
        "quantity": 1,
        "refId": "12"
      }
    ],
    "itemsTotal": 100,
    "redemptionCode": null,
    "relationName": null,
    "shipping": 0,
    "taxes": 12
  },
  "client": {
    "document": "21301923110",
    "email": "email@damoain.com",
    "id": "019a0cc1-409a-4c16-859b-eefdb81f825e"
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
  "id": "1",
  "name": "Product Name",
  "price": 100,
  "productId": "1",
  "quantity": 1,
  "refId": "12"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
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
  "_self": {
    "href": "cards/589"
  },
  "id": "589"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_self|[Self](#schemaself)|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_Item2">Item2</h2>
<!-- backwards compatibility -->
<a id="schemaitem2"></a>
<a id="schema_Item2"></a>
<a id="tocSitem2"></a>
<a id="tocsitem2"></a>

```json
{
  "discount": -7.5,
  "id": "2001023",
  "name": "Vaporizador Des. ColC4nia Branco",
  "price": 14.99,
  "priceTags": [
    {
      "name": "discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c",
      "value": 0
    }
  ],
  "productId": "2000492",
  "quantity": 1,
  "refId": "35994",
  "shippingDiscount": 0,
  "value": 14.99
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discount|number|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|price|number|true|none|none|
|priceTags|[[PriceTag](#schemapricetag)]|true|none|none|
|productId|string|true|none|none|
|quantity|integer(int32)|true|none|none|
|refId|string|true|none|none|
|shippingDiscount|integer(int32)|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_OrderInfo">OrderInfo</h2>
<!-- backwards compatibility -->
<a id="schemaorderinfo"></a>
<a id="schema_OrderInfo"></a>
<a id="tocSorderinfo"></a>
<a id="tocsorderinfo"></a>

```json
{
  "cart": {
    "discounts": 2.5,
    "grandTotal": 0,
    "items": [
      {
        "discount": 2.5,
        "id": "2001023",
        "name": "insert name here",
        "price": 14.99,
        "priceTags": [
          {
            "name": "insert name here",
            "value": 0
          }
        ],
        "productId": "2000492",
        "quantity": 1,
        "refId": "35994",
        "shippingDiscount": 0,
        "value": 14.99
      }
    ],
    "itemsTotal": 14.99,
    "shipping": 7.27,
    "taxes": 0
  },
  "clientProfile": {
    "birthDate": "0001-01-01T00:00:00",
    "document": "02906792063",
    "email": "email@email.com.br",
    "firstName": "example",
    "isCorporate": false,
    "lastName": "example",
    "phone": "+551111111111"
  },
  "orderId": "v500",
  "sequence": 5006128,
  "shipping": {
    "city": "Rio de Janeiro",
    "complement": null,
    "country": "BRA",
    "neighborhood": "example",
    "number": "11",
    "postalCode": "22250040",
    "receiverName": "example",
    "reference": null,
    "state": "RJ",
    "street": "Praia de Botafogo"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cart|[Cart1](#schemacart1)|false|none|none|
|clientProfile|[ClientProfile](#schemaclientprofile)|false|none|none|
|orderId|string|false|none|none|
|sequence|integer(int32)|false|none|none|
|shipping|[Shipping](#schemashipping)|false|none|none|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
{
  "page": 0,
  "pages": 1,
  "perPage": 10,
  "total": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|true|none|none|
|pages|integer(int32)|true|none|none|
|perPage|integer(int32)|true|none|none|
|total|integer(int32)|true|none|none|

<h2 id="tocS_PriceTag">PriceTag</h2>
<!-- backwards compatibility -->
<a id="schemapricetag"></a>
<a id="schema_PriceTag"></a>
<a id="tocSpricetag"></a>
<a id="tocspricetag"></a>

```json
{
  "name": "discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_Self">Self</h2>
<!-- backwards compatibility -->
<a id="schemaself"></a>
<a id="schema_Self"></a>
<a id="tocSself"></a>
<a id="tocsself"></a>

```json
{
  "href": "cards/589"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_SettleGiftCardTransactionRequest">SettleGiftCardTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettlegiftcardtransactionrequest"></a>
<a id="schema_SettleGiftCardTransactionRequest"></a>
<a id="tocSsettlegiftcardtransactionrequest"></a>
<a id="tocssettlegiftcardtransactionrequest"></a>

```json
{
  "requestId": "6360f",
  "value": 17.4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Shipping">Shipping</h2>
<!-- backwards compatibility -->
<a id="schemashipping"></a>
<a id="schema_Shipping"></a>
<a id="tocSshipping"></a>
<a id="tocsshipping"></a>

```json
{
  "city": "Rio de Janeiro",
  "complement": null,
  "country": "BRA",
  "neighborhood": "Botafogo",
  "number": "111",
  "postalCode": "22250040",
  "receiverName": "miguel scott",
  "reference": null,
  "state": "RJ",
  "street": "Praia de Botafogo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|complement|string \| null|true|none|none|
|country|string|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|receiverName|string|true|none|none|
|reference|string \| null|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|

<h2 id="tocS_Transactions">Transactions</h2>
<!-- backwards compatibility -->
<a id="schematransactions"></a>
<a id="schema_Transactions"></a>
<a id="tocStransactions"></a>
<a id="tocstransactions"></a>

```json
{
  "href": "cards/954/transactions"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_response">response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "balance": 0,
  "caption": "Programa Vtex Fidelidade",
  "emissionDate": "2014-04-24T20:22:58.163",
  "expiringDate": "2016-01-01T00:00:00",
  "id": "954",
  "redemptionCode": "***********ASDQ",
  "redemptionToken": "32ScL57220Vapb8pc50HJ3mWH1cl1L8x",
  "relationName": "cardName",
  "transactions": {
    "href": "cards/954/transactions"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int32)|true|none|none|
|caption|string|true|none|none|
|emissionDate|string|true|none|none|
|expiringDate|string|true|none|none|
|id|string|true|none|none|
|redemptionCode|string|true|none|none|
|redemptionToken|string|true|none|none|
|relationName|string|true|none|none|
|transactions|[Transactions](#schematransactions)|true|none|none|

<h2 id="tocS_response2">response2</h2>
<!-- backwards compatibility -->
<a id="schemaresponse2"></a>
<a id="schema_response2"></a>
<a id="tocSresponse2"></a>
<a id="tocsresponse2"></a>

```json
{
  "items": [
    {
      "_self": {
        "href": "cards/589"
      },
      "id": "589"
    },
    {
      "_self": {
        "href": "cards/590"
      },
      "id": "590"
    },
    {
      "_self": {
        "href": "cards/591"
      },
      "id": "591"
    },
    {
      "_self": {
        "href": "cards/592"
      },
      "id": "592"
    }
  ],
  "paging": {
    "page": 0,
    "pages": 1,
    "perPage": 10,
    "total": 4
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Item1](#schemaitem1)]|true|none|none|
|paging|[Paging](#schemapaging)|true|none|none|

<h2 id="tocS_response3">response3</h2>
<!-- backwards compatibility -->
<a id="schemaresponse3"></a>
<a id="schema_response3"></a>
<a id="tocSresponse3"></a>
<a id="tocsresponse3"></a>

```json
{
  "_self": {
    "href": "cards/890/transactions/268"
  },
  "id": "268"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_self|[Self](#schemaself)|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_response5">response5</h2>
<!-- backwards compatibility -->
<a id="schemaresponse5"></a>
<a id="schema_response5"></a>
<a id="tocSresponse5"></a>
<a id="tocsresponse5"></a>

```json
{
  "date": "2016-01-01T00:00:00",
  "description": "CrC)dito relacionado a compra 10281230-01",
  "redemptionMode": "redemptionToken",
  "value": 123.4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|description|string|true|none|none|
|redemptionMode|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_response6">response6</h2>
<!-- backwards compatibility -->
<a id="schemaresponse6"></a>
<a id="schema_response6"></a>
<a id="tocSresponse6"></a>
<a id="tocsresponse6"></a>

```json
{
  "date": "2016-01-01T00:00:00",
  "oid": "7cf8d7970e1c81d05620e46cceb6819f",
  "value": 123.4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|oid|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_response7">response7</h2>
<!-- backwards compatibility -->
<a id="schemaresponse7"></a>
<a id="schema_response7"></a>
<a id="tocSresponse7"></a>
<a id="tocsresponse7"></a>

```json
{
  "date": "2016-04-06T00:00:00",
  "id": "239d35b430fc75379db966c1d3670c6f",
  "value": 13.4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|id|string|true|none|none|
|value|number|true|none|none|
