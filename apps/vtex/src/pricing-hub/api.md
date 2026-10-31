<h1 id="pricing-hub">Pricing Hub v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

> This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests). 

 In the B2B scenario, it is common for stores to have personalized prices per customer and complex pricing systems that require external integrations. Pricing Hub is a system developed for the B2B context that works as an intermediary between VTEX and external pricing systems.

 In VTEX, B2B stores have the option to use our internal pricing system or an external one. If the store chooses to operate with an external pricing system, Pricing Hub will query an external price calculation API. The external API should then respond with the price for all items in the shopping cart according to its predefined tax rules.

![Pricing hub protocal diagram](https://user-images.githubusercontent.com/77292838/211634260-e4f7a516-91df-416e-ab43-d9c79d56bc91.png)

## Implementation

To connect with external pricing systems using Pricing Hub, it is necessary to build a VTEX IO middleware app. We offer two reference implementation templates to simplify this process:

- [C# template](https://github.com/vtex-apps/external-prices-app)
- [Node template](https://github.com/vtex-apps/external-prices-node)

Read the documentation on each repository to learn more about the required steps to use and customize the app.

> The app used by Pricing Hub to connect must be a `major 0`. 

## Specifications

See below all the specifications of the request and the response expected when communicating with Pricing Hub.

### Price calculation request

The external prices calculation tool must provide an endpoint that will receive a `POST` [Get Prices](https://developers.vtex.com/docs/api-reference/pricing-hub#post-/api/pricing-hub/prices) request. This route retrieves and applies prices for the items that are passed in the request. Pricing Hub will select the pricing method that will be used for each item and will fetch their respective price from the selected pricing method.

>⚠️ Responses from Pricing Hub tend to have a greater delay when compared to other VTEX systems. That is expected, however, due to the complexity of its nested requests. The timeout for this request is 900 milliseconds.

In this request, Pricing Hub provides a body in a specific format, exemplified below. This means that either the endpoint must be prepared to receive this body format, or the app must contain a parser to adapt it to the correct format.

#### Request body example

```json
{
    "item": 
        {
            "index": 0,
            "skuId": "880011",
            "quantity": 1
        },
    "context":{
        "email": "john@email.com"
    }
}
```

The request body should have the following properties:

| **Attribute** | **Type** | **Description**                                                                                                                                                                                          |
|---------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `item`        | object   | The item whose price is supposed to be fetched by Pricing Hub.                                                                                                                                           |
| ↪ `index`     | integer  | This is the index of the item at Checkout's cart. It has to be unique in the items array.                                                                                                                |
| ↪ `skuId`     | string   | This is the SKU ID of the item that will be priced.                                                                                                                                                      |
| ↪ `quantity`  | integer  | This is the amount of items that will be priced. It is possible to have a volume discount for many repeated items. Hence, the price may not be the quantity of the item multiplied by the unitary price. |
| `context`     | object   | The object that contains the context to inform the query.                                                                                                                                                |
| ↪ `email`     | string   | The customer's email address. If there is no value, use an empty string.                                                                                                                                 |

### External prices provider response

In response to the request sent by Pricing Hub, we expect an outcome in the following format:

```json
{
    "item": {
        "price": 54035,
        "priceTables": "special",
        "index": 0,
        "skuId": "880011",
        "listPrice": 54035,
        "costPrice": 50000,
        "sellingPrice": 54035,
        "priceValidUntil": "2023-01-27T20:29:57Z",
        "tradePolicyId": "special"
    }
}
```

The response should have the following properties:

| **Attribute**       | **Type** | **Description**                                                                                                                                        |
|---------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `item`              | object   | The object that contains the price data.                                                                                                               |
| ↪ `price`           | integer  | The price returned by the pricing API that was used by Pricing-Hub. It is measured in cents, so 5000 means 50,00 in local currency.                    |
| ↪ `priceTables`     | string   | The price table that was used to price the item.                                                                                                       |
| ↪ `index`           | integer  | The same index referring to Checkout's cart that was passed to the API.                                                                                |
| ↪ `skuId`           | string   | The same SKU ID that was passed to the API.                                                                                                            |
| ↪ `listPrice`       | integer  | The list price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency.               |
| ↪ `costPrice`       | integer  | The cost price returned by the pricing API that was used by Pricing-Hub. It is measured in cents, so 5000 means 50,00 in local currency.               |
| ↪ `sellingPrice`    | integer  | The computed price before applying coupons, taxes or promotions.                                                                                       |
| ↪ `priceValidUntil` | string   | The moment up until the price is valid. After that moment, it will be necessary to call the pricing API again. The format of the string is in RFC3339. |
| ↪ `tradePolicyId`   | string   | Trade Policy ID.                                                                                                                                       |

## Index - Pricing Hub API

`POST` [Get Prices](https://developers.vtex.com/docs/api-reference/pricing-hub#post-/api/pricing-hub/prices)
`PUT` [Configure External Price Source](https://developers.vtex.com/docs/api-reference/pricing-hub#put-/config)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://prchub.{environment}.com.br">https://prchub.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="pricing-hub-pricing-hub-prices">Pricing Hub Prices</h1>

## Get Prices

> Code samples

```bash
curl 'https://example.com/api/pricing-hub/prices?accountName=apiexamples' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}' \
  -d '{
    "UtmCampaign": "summer",
    "UtmInternalCampaign": "sale",
    "UtmMedium": "social",
    "UtmSource": "facebook",
    "email": "customer@email.com",
    "items": [
      {
        "brandId": "2000000",
        "categoriesIds": [
          "1"
        ],
        "index": 0,
        "priceTableIds": [],
        "quantity": 1,
        "sellerId": "1",
        "skuId": "13"
      }
    ],
    "salesChannel": "1"
  }'
```

`POST /api/pricing-hub/prices`

This route retrieves and applies prices for the items that are passed in the request. Pricing Hub will select the pricing method that will be used for each item and will fetch their respective price from the selected pricing method. 

>ℹ️ > This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests). 

> Body parameter

```json
{
  "UtmCampaign": "summer",
  "UtmInternalCampaign": "sale",
  "UtmMedium": "social",
  "UtmSource": "facebook",
  "email": "customer@email.com",
  "items": [
    {
      "brandId": "2000000",
      "categoriesIds": [
        "1"
      ],
      "index": 0,
      "priceTableIds": [],
      "quantity": 1,
      "sellerId": "1",
      "skuId": "13"
    }
  ],
  "salesChannel": "1"
}
```

<h3 id="get-prices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Describes the type of the content being sent|
|X-VTEX-API-AppKey|header|string|true|The AppKey configured by the merchant|
|X-VTEX-API-AppToken|header|string|true|The AppToken configured by the merchant|
|body|body|[GetPricesRequestObject](#schemagetpricesrequestobject)|true|none|
|» UtmCampaign|body|string|false|Campaign name, represented by the `utm_campaign` value in the URL that led to the order. If there is no value, use `null`|
|» UtmInternalCampaign|body|string|false|Internal campaign name, represented by the `utmi_cp` value in the URL that led to the order. If there is no value, use `null`|
|» UtmMedium|body|string|false|Medium that indicates what type of traffic the customer originated from, represented by the `utm_medium` value in the URL that led to the order. If there is no value, use `null`|
|» UtmSource|body|string|false|Traffic source, indicates where the traffic originated from according to the `utm_source` value in the URL that led to the order. If there is no value, use `null`|
|» email|body|string|true|The customer's email address. If there is no value, use an empty string|
|» items|body|[items](#schemaitems)|true|The list of items that are to be priced by Pricing Hub|
|» salesChannel|body|string|true|Represents Checkout's sales channel|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "costPrice": 750,
      "index": 0,
      "listPrice": 2500,
      "price": 1875,
      "priceTable": "1",
      "priceValidUntil": "2022-03-24T14:57:19Z",
      "skuId": "14"
    },
    {
      "costPrice": 200,
      "index": 0,
      "listPrice": 200,
      "price": 200,
      "priceTable": "1",
      "priceValidUntil": "2022-03-04T20:00:18Z",
      "skuId": "14"
    }
  ]
}
```

<h3 id="get-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[response2](#schemaresponse2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Configure External Price Source

<a id="opIdConfigExternalPriceSource"></a>

> Code samples

```bash
curl https://example.com/config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-API-AppKey: {{X-VTEX-API-AppKey}}' \
  -H 'X-VTEX-API-AppToken: {{X-VTEX-API-AppToken}}' \
  -d '{
    "active": true,
    "appName": "apiexamples_app_name"
  }'
```

`PUT /config`

This route facilitates setting up an external price source in Pricing Hub. It also allows you to activate or deactivate that source in a given account. 

>ℹ️ This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests). 

> Body parameter

```json
{
  "active": true,
  "appName": "apiexamples_app_name"
}
```

<h3 id="configure-external-price-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|an|query|string|false|Name of the VTEX account|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Describes the type of the content being sent|
|X-VTEX-API-AppKey|header|string|true|The AppKey configured by the merchant|
|X-VTEX-API-AppToken|header|string|true|The AppToken configured by the merchant|
|body|body|[ConfigExternalPriceSourceRequest](#schemaconfigexternalpricesourcerequest)|true|none|
|» active|body|boolean|false|Defines if the external price source is active (`true`) or not (`false`). If not set, the default value will be `false`.|
|» appName|body|string|true|Name of the app that communicates with the external pricing source|

<h3 id="configure-external-price-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_ConfigExternalPriceSourceRequest">ConfigExternalPriceSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigexternalpricesourcerequest"></a>
<a id="schema_ConfigExternalPriceSourceRequest"></a>
<a id="tocSconfigexternalpricesourcerequest"></a>
<a id="tocsconfigexternalpricesourcerequest"></a>

```json
{
  "active": true,
  "appName": "apiexamples_app_name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Defines if the external price source is active (`true`) or not (`false`). If not set, the default value will be `false`.|
|appName|string|true|none|Name of the app that communicates with the external pricing source|

<h2 id="tocS_GetPricesRequestObject">GetPricesRequestObject</h2>
<!-- backwards compatibility -->
<a id="schemagetpricesrequestobject"></a>
<a id="schema_GetPricesRequestObject"></a>
<a id="tocSgetpricesrequestobject"></a>
<a id="tocsgetpricesrequestobject"></a>

```json
{
  "UtmCampaign": "summer",
  "UtmInternalCampaign": "sale",
  "UtmMedium": "social",
  "UtmSource": "facebook",
  "email": "customer@email.com",
  "items": [
    {
      "brandId": "2000000",
      "categoriesIds": [
        "1"
      ],
      "index": 0,
      "priceTableIds": [],
      "quantity": 1,
      "sellerId": "1",
      "skuId": "13"
    }
  ],
  "salesChannel": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UtmCampaign|string|false|none|Campaign name, represented by the `utm_campaign` value in the URL that led to the order. If there is no value, use `null`|
|UtmInternalCampaign|string|false|none|Internal campaign name, represented by the `utmi_cp` value in the URL that led to the order. If there is no value, use `null`|
|UtmMedium|string|false|none|Medium that indicates what type of traffic the customer originated from, represented by the `utm_medium` value in the URL that led to the order. If there is no value, use `null`|
|UtmSource|string|false|none|Traffic source, indicates where the traffic originated from according to the `utm_source` value in the URL that led to the order. If there is no value, use `null`|
|email|string|true|none|The customer's email address. If there is no value, use an empty string|
|items|[items](#schemaitems)|true|none|The list of items that are to be priced by Pricing Hub|
|salesChannel|string|true|none|Represents Checkout's sales channel|

<h2 id="tocS_Item1">Item1</h2>
<!-- backwards compatibility -->
<a id="schemaitem1"></a>
<a id="schema_Item1"></a>
<a id="tocSitem1"></a>
<a id="tocsitem1"></a>

```json
{
  "costPrice": 0,
  "index": 0,
  "listPrice": 0,
  "price": 0,
  "priceTable": "string",
  "priceValidUntil": "string",
  "skuId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costPrice|number|true|none|The cost price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency.|
|index|integer|true|none|The same index referring to Checkout's cart that was passed to the API|
|listPrice|number|true|none|The list price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency|
|price|number|true|none|The price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency|
|priceTable|string|true|none|The price table that was used to price the item|
|priceValidUntil|string|true|none|The moment up until the price is valid. After that moment, it will be necessary to call the pricing API again. The format of the string is in RFC3339|
|skuId|string|true|none|The same skuId that was passed to the API|

<h2 id="tocS_items">items</h2>
<!-- backwards compatibility -->
<a id="schemaitems"></a>
<a id="schema_items"></a>
<a id="tocSitems"></a>
<a id="tocsitems"></a>

```json
[
  {
    "brandId": "2000000",
    "categoriesIds": [
      "1"
    ],
    "index": 0,
    "priceTableIds": [
      "1"
    ],
    "quantity": 1,
    "sellerId": "1",
    "skuId": "13"
  }
]
```

The list of items that are to be priced by Pricing Hub

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
      "costPrice": 0,
      "index": 0,
      "listPrice": 0,
      "price": 0,
      "priceTable": "string",
      "priceValidUntil": "string",
      "skuId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Item1](#schemaitem1)]|true|none|List of items and their respective prices applied by Pricing Hub|
