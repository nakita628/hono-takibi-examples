<h1 id="pricing-api">Pricing API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


> Check the new [Pricing onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/pricing-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Pricing and is organized by focusing on the developer's journey.

Pricing is the VTEX module responsible for the SKU's price list. At this module we have the base price of each SKU, some optional fixed prices by trade policy, and some rules that can be applied to generate dynamically different final prices according to the purchase context and the trade policy. The variables used in this collection are:

  * **{{accountName}}** = You VTEX account name.
  * **{{tradePolicyId}}** = Current Trade Policy ID.
  * **{{itemId}}** = SKU ID.
  * **{{X-VTEX-API-AppKey}}** and **{{X-VTEX-API-AppToken}}** = Credentials.

You can get more information about how to use this module and its business logic at [VTEX Help](http://help.vtex.com).

## Rate Limits

### Limits per route

- `GET`:  routes are not rate limited at the moment
- `PUT or POST`: `40 requests/second/account` in any **price insert/update route** with 1000 *Burst Credits*
- `DELETE`: `16 requests/second/account` in any **price deletion route**, with 300 *Burst Credits*.

### What are Burst Credits?

In case the account exceeds the limit frequency for a  `Rate Limiter` (for instance, when one account makes `41 requests/second` in any `price insert/update route`), we decrease from the *Burst Credit* count the exceeding (in this example, *1 Credit*).

In the event of the *Burst Credits* reaching **0 (zero)**, the request is blocked with a `Status 429` response.

The credits fill up over time when the route is not being used, in the same rate as the route's `Rate Limiter`. In our example, for each second not sending a **PUT or POST request**, we increase *40 Burst Credits* to this `Rate Limiter`

### New Response Headers

In the response headers of any request to Pricing v2 there are some new headers indicating the current status of the Rate Limiting.
This information may be useful to evaluate the ideal frequency to send requests to a route, and when to send a new request in the event of reaching a Rate Limit.

- `Ratelimit-Limit` - Total *Burst Credits* offered to a route
- `Ratelimit-Remaining` - How many *Burst Credits* are still available to use
- `Ratelimit-Reset` - How long (in seconds) it will take to the *Burst Credits* to fill up completely (It will fill up to the `Ratelimit-Limit`)
- `Retry-After` - Indicates how many seconds you will need to wait until the `Rate Limiter` accepts a new request to this route again. If this header response exists, this means your current request has been rate limited and has not been processed.

### How to integrate with Pricing v2 considering our Rate Limits

Integrate considering the limits of **requests/route/account** specified in the [*Limits per route*](#rate-limits) section, avoiding to surpass this frequency.

If you happen to be Rate Limited, wait the time in seconds specified in `Retry-After` before making another request to the service, and reduce the rate of requests per second that your integration is making.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://api.vtex.com/{accountName}">https://api.vtex.com/{accountName}</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="pricing-api-price-tables">Price Tables</h1>

## Get all price tables and their rules

<a id="opIdgetallpricetablesandrules"></a>

> Code samples

```bash
curl https://example.com/pricing/pipeline/catalog \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/pipeline/catalog`

This method will retrieve all price tables and their rules.

## Response body example

```json
[
    {
        "tradePolicyId": "2",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {},
                    "brands": {},
                    "stockStatuses": null,
                    "internalCategories": null,
                    "markupRange": null,
                    "dateRange": null
                },
                "percentualModifier": 20
            }
        ]
    },
    {
        "tradePolicyId": "b2c",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {},
                    "brands": {
                        "2000009": "Whiskas"
                    },
                    "stockStatuses": null,
                    "internalCategories": null,
                    "markupRange": null,
                    "dateRange": null
                },
                "percentualModifier": 15
            }
        ]
    }
]
```

<h3 id="get-all-price-tables-and-their-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "rules": [
      {
        "context": {
          "brands": {},
          "categories": {},
          "dateRange": null,
          "internalCategories": null,
          "markupRange": null,
          "stockStatuses": null
        },
        "id": 0,
        "percentualModifier": 20
      }
    ],
    "tradePolicyId": "2"
  },
  {
    "rules": [
      {
        "context": {
          "brands": {
            "2000009": "Whiskas"
          },
          "categories": {},
          "dateRange": null,
          "internalCategories": null,
          "markupRange": null,
          "stockStatuses": null
        },
        "id": 0,
        "percentualModifier": 15
      }
    ],
    "tradePolicyId": "b2c"
  }
]
```

<h3 id="get-all-price-tables-and-their-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-price-tables-and-their-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» percentualModifier|integer|false|none|Percentual modifier.|
|» rules|[object]|false|none|Array of rules for the price table.|
|» » context|object|false|none|Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.|
|» » » brands|object|false|none|Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.|
|» » » » **additionalProperties**|string|false|none|Brand ID.|
|» » » » » **additionalProperties**|string|false|none|Brand Name.|
|» » » categories|object|false|none|Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.|
|» » » » **additionalProperties**|string|false|none|Category ID.|
|» » » » » **additionalProperties**|string|false|none|Category Name.|
|» » » dateRange|object \| null|false|none|The rule will be active during this time range.|
|» » » » from|string|false|none|Date when rule will be activated. Date format: `RFC3339`.|
|» » » » to|string|false|none|Date when the rule will be deactivated. Date format: `RFC3339`.|
|» » » internalCategories|object \| null|false|none|Internal Categories.|
|» » » markupRange|object \| null|false|none|For an item to be eligible to the rule, it's markup should be in this Markup Range.|
|» » » » from|integer|false|none|Item markup should be greater than or equal to this value.|
|» » » » to|integer|false|none|Item markup should be less than or equal to this value.|
|» » » stockStatuses|object \| null|false|none|Stock statuses.|
|» » id|number|false|none|Rule ID.|
|» tradePolicyId|string|false|none|Trade Policy ID (Price Table ID).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get rules for a price table

<a id="opIdGetrulesforapricetable"></a>

> Code samples

```bash
curl https://example.com/pricing/pipeline/catalog/b2c \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/pipeline/catalog/{priceTableId}`

This method will retrieve the rules from a specific Price Table.

## Response body example

```json
{
    "tradePolicyId": "b2c",
    "rules": [{
        "id": 0,
        "context": {
            "categories": {},
            "brands": {
                "2000009": "Whiskas"
            },
            "stockStatuses": null,
            "internalCategories": null,
            "markupRange": null,
            "dateRange": null
        },
        "percentualModifier": 15
    }]
}
```

<h3 id="get-rules-for-a-price-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|priceTableId|path|string|true|Price Table Name.|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "context": {
        "brands": {
          "2000009": "Whiskas"
        },
        "categories": {},
        "dateRange": null,
        "internalCategories": null,
        "markupRange": null,
        "stockStatuses": null
      },
      "id": 0,
      "percentualModifier": 15
    }
  ],
  "tradePolicyId": "b2c"
}
```

<h3 id="get-rules-for-a-price-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too many requests|None|

<h3 id="get-rules-for-a-price-table-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentualModifier|integer|false|none|Percentual modifier.|
|rules|[object]|false|none|Array of rules for the price table.|
|» context|object|false|none|Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.|
|» » brands|object|false|none|Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.|
|» » » **additionalProperties**|string|false|none|Brand ID.|
|» » » » **additionalProperties**|string|false|none|Brand Name.|
|» » categories|object|false|none|Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.|
|» » » **additionalProperties**|string|false|none|Category ID.|
|» » » » **additionalProperties**|string|false|none|Category Name.|
|» » dateRange|object \| null|false|none|The rule will be active during this time range.|
|» » » from|string|false|none|Date when rule will be activated. Date format: `RFC3339`.|
|» » » to|string|false|none|Date when the rule will be deactivated. Date format: `RFC3339`.|
|» » internalCategories|object \| null|false|none|Internal Categories.|
|» » markupRange|object \| null|false|none|For an item to be eligible to the rule, it's markup should be in this Markup Range.|
|» » » from|integer|false|none|Item markup should be greater than or equal to this value.|
|» » » to|integer|false|none|Item markup should be less than or equal to this value.|
|» » stockStatuses|object \| null|false|none|Stock statuses.|
|» id|number|false|none|Rule ID.|
|tradePolicyId|string|false|none|Trade Policy ID (Price Table ID).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update rules for a price table

> Code samples

```bash
curl https://example.com/pricing/pipeline/catalog/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "context": {
          "brands": {
            "Brand ID": "2000002",
            "Brand Name": "Whiskas"
          },
          "categories": {
            "Category ID": "1",
            "Category Name": "Alimentação"
          },
          "dateRange": {
            "from": "2022-01-23T19:00:00.000Z",
            "to": "2023-10-26T00:00:00.000Z"
          },
          "markupRange": {
            "from": 0,
            "to": 200
          }
        },
        "id": 1,
        "percentualModifier": 0
      }
    ]
  }'
```

`PUT /pricing/pipeline/catalog/{priceTableId}`

This method will update the rules from a specific Price Table. It will delete all the rules from the requested Price Table and create new rules based on the content of the request.

## Request body example

```json
{
    "rules": [
          {
               "id": 1,
               "context": {
                    "categories": {
                         "Category ID": "1",
                         "Category Name": "Alimentação"
                    },
                    "brands": {
                         "Brand ID": "2000002",
                         "Brand Name": "Whiskas"
                    },
                    "markupRange": {
                         "from": 0,
                         "to": 200
                    },
                    "dateRange": {
                         "from": "2022-01-23T19:00:00.000Z",
                         "to": "2023-10-26T00:00:00.000Z"
                    }
               },
               "percentualModifier": 0
          }
    ]
}
```

> Body parameter

```json
{
  "rules": [
    {
      "context": {
        "brands": {
          "Brand ID": "2000002",
          "Brand Name": "Whiskas"
        },
        "categories": {
          "Category ID": "1",
          "Category Name": "Alimentação"
        },
        "dateRange": {
          "from": "2022-01-23T19:00:00.000Z",
          "to": "2023-10-26T00:00:00.000Z"
        },
        "markupRange": {
          "from": 0,
          "to": 200
        }
      },
      "id": 1,
      "percentualModifier": 0
    }
  ]
}
```

<h3 id="update-rules-for-a-price-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|priceTableId|path|string|true|Price Table Name.|
|body|body|object|false|none|
|» rules|body|[object]|true|Array of rules for the price table.|
|» » context|body|object|true|Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.|
|» » » brands|body|object|true|Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.|
|» » » » **additionalProperties**|body|string|false|Brand ID.|
|» » » » » **additionalProperties**|body|string|false|Brand Name.|
|» » » categories|body|object|true|Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.|
|» » » » **additionalProperties**|body|string|false|Category ID.|
|» » » » » **additionalProperties**|body|string|false|Category Name.|
|» » » dateRange|body|object|true|The rule will be active during this time range.|
|» » » » from|body|string|true|Date when rule will be activated. Date format: `RFC3339`.|
|» » » » to|body|string|true|Date when the rule will be deactivated. Date format: `RFC3339`.|
|» » » internalCategories|body|object \| null|false|Internal Categories.|
|» » » markupRange|body|object \| null|true|For an item to be eligible to the rule, it's markup should be in this Markup Range.|
|» » » » from|body|integer|true|Item markup should be greater than or equal to this value.|
|» » » » to|body|integer|true|Item markup should be less than or equal to this value.|
|» » » stockStatuses|body|object \| null|false|Stock statuses.|
|» » id|body|integer|true|Rule ID.|
|» » percentualModifier|body|number|true|Percentual modifier.|

<h3 id="update-rules-for-a-price-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List price tables

<a id="opIdListpricetables"></a>

> Code samples

```bash
curl https://example.com/pricing/tables \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/tables`

This method will list all price tables.

## Response body example

```json
[
    "1",
    "2",
    "3",
    "b2c",
    "b2b",
    "gold"
]
```

<h3 id="list-price-tables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  "1",
  "2",
  "3",
  "b2c",
  "b2b",
  "gold"
]
```

<h3 id="list-price-tables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-price-tables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="pricing-api-prices-and-fixed-prices">Prices and Fixed Prices</h1>

## Get Price

<a id="opIdGetPrice"></a>

> Code samples

```bash
curl https://example.com/pricing/prices/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/prices/{itemId}`

Retrieves price data given a specific SKU ID. Within the `fixedPrices` object, there might be a list of prices for specific Trade Policies and Minimium Quantities of the SKU. Fixed Prices may also be scheduled.

 ## Response body example

```json
{
    "itemId": "1",
    "listPrice": 50,
    "costPrice": 90,
    "markup": 30,
    "basePrice": 117,
    "fixedPrices": [
        {
            "tradePolicyId": "1",
            "value": 50.5,
            "listPrice": 50.5,
            "minQuantity": 2,
            "dateRange": {
                "from": "2021-12-31T01:00:00Z",
                "to": "2022-12-31T01:00:00Z"
            }
        },
        {
            "tradePolicyId": "2",
            "value": 30,
            "listPrice": 50,
            "minQuantity": 2
        }
    ]
}
```

<h3 id="get-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|itemId|path|integer|true|SKU ID.|

> Example responses

> 200 Response

```json
{
  "basePrice": 117,
  "costPrice": 90,
  "fixedPrices": [
    {
      "dateRange": {
        "from": "2021-12-31T01:00:00Z",
        "to": "2022-12-31T01:00:00Z"
      },
      "listPrice": 50.5,
      "minQuantity": 2,
      "tradePolicyId": "1",
      "value": 50.5
    },
    {
      "listPrice": 50,
      "minQuantity": 2,
      "tradePolicyId": "2",
      "value": 30
    }
  ],
  "itemId": "1",
  "listPrice": 50,
  "markup": 30
}
```

<h3 id="get-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Getprice](#schemagetprice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create or Update Base Price or Fixed Prices

<a id="opIdCreateUpdatePriceOrFixedPrice"></a>

> Code samples

```bash
curl https://example.com/pricing/prices/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "basePrice": 100,
    "costPrice": 35,
    "fixedPrices": [
      []
    ],
    "listPrice": 50,
    "markup": 30
  }'
```

`PUT /pricing/prices/{itemId}`

Creates or updates an SKU Base Price or Fixed Prices. The **base price** is the basic selling price of a product, it comprises the cost price and the markup wanted in the sale of the product. The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated.

 <p> You may optionally set a list price. Additionally, you may set either a cost price or a markup value. By defining either one of them, the other will be calculated to conform to the formula <code>costPrice * (1 + markup) = basePrice</code>.</p> <h2>Request body example</h2>

```json
{
    "markup": 30,
    "basePrice": 100,
    "listPrice": 35,
    "fixedPrices": [
        {
            "tradePolicyId": "1",
            "value": 31,
            "listPrice": 32,
            "minQuantity": 1,
            "dateRange": {
                "from": "2022-05-21T22:00:00Z",
                "to": "2023-05-28T22:00:00Z"
            }
        },
        {
            "tradePolicyId": "1",
            "value": 31.5,
            "listPrice": 33,
            "minQuantity": 2
        }
    ]
}
```

> Body parameter

```json
{
  "basePrice": 100,
  "costPrice": 35,
  "fixedPrices": [
    []
  ],
  "listPrice": 50,
  "markup": 30
}
```

<h3 id="create-or-update-base-price-or-fixed-prices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|itemId|path|integer|true|SKU unique identifier number.|
|body|body|object|false|none|
|» basePrice|body|number|true|SKU selling base price. If you decide to fill only the `basePrice` item, the `markup` and `costPrice` will be automatically generated to adapt to the number inserted in `basePrice`.|
|» costPrice|body|number|false|SKU selling cost price. If you decide to fill the `costPrice` item, you must also fill the `markup` and `basePrice` will be automatically generated based on both values.|
|» fixedPrices|body|[object]|false|none|
|» » dateRange|body|object|false|Period of time when the fixed price will be applied to the SKU.|
|» » » from|body|string|true|Start date of the price.|
|» » » to|body|string|true|End date of the price.|
|» » listPrice|body|number|false|SKU List Fixed Price.|
|» » minQuantity|body|integer|true|Minimum quantity of the SKU for the fixed price to be applied.|
|» » tradePolicyId|body|string|true|Trade policy name or ID that will have the fixed price configured.|
|» » value|body|number|true|Fixed price value.|
|» listPrice|body|number|true|SKU's suggested selling price.|
|» markup|body|integer|true|The profit percentage that is to be obtained from the sale of that SKU. If you decide to fill the `markup` item, you must also fill the `costPrice`. The `basePrice` will be automatically generated based on both values.|

<h3 id="create-or-update-base-price-or-fixed-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Price

<a id="opIdDeletePrice"></a>

> Code samples

```bash
curl https://example.com/pricing/prices/1 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /pricing/prices/{itemId}`

Deletes the Base Price and all available Fixed Prices for an SKU in all trade policies.

<h3 id="delete-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|itemId|path|integer|true|SKU ID.|

<h3 id="delete-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Computed Price by price table or trade policy

<a id="opIdGetComputedPricebypricetable"></a>

> Code samples

```bash
curl 'https://example.com/pricing/prices/1/computed/gold?categoryIds=1&brandId=3&quantity=2' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/prices/{itemId}/computed/{priceTableId}`

Gets the Computed Price, which is the price after all the steps in the Pricing pipeline, for an SKU in a specific price table or trade policy. 

## Response body example

```json
{
    "tradePolicyId": "1",
    "listPrice": 30,
    "costPrice": 76.92,
    "sellingPrice": 18.9,
    "priceValidUntil": "2018-12-20T18:12:14Z"
}
```

<h3 id="get-computed-price-by-price-table-or-trade-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryIds|query|integer|true|Category ID.|
|brandId|query|integer|true|Brand ID.|
|quantity|query|integer|true|SKU quantity.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|itemId|path|integer|true|SKU ID.|
|priceTableId|path|string|true|SKU Price Table Name.|

> Example responses

> 200 Response

```json
{
  "costPrice": 76.92,
  "listPrice": 30,
  "priceValidUntil": "2018-12-20T18:12:14Z",
  "sellingPrice": 18.9,
  "tradePolicyId": "1"
}
```

<h3 id="get-computed-price-by-price-table-or-trade-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Getcomputedprice](#schemagetcomputedprice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Fixed Prices

<a id="opIdGetFixedPrices"></a>

> Code samples

```bash
curl https://example.com/pricing/prices/1/fixed \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/prices/{itemId}/fixed`

The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated. This method retrieves an array of Fixed Prices for an SKU in a Trade Policy with Minimum Quantities.

 The default value for a Minimum Quantity is `1`. This means a Fixed Price will be valid for a SKU in a Trade Policy for orders containing the specified number of Minimum Quantity or above, unless a higher Minimum Quantity is specified.

 Fixed prices may, optionally, be scheduled. If so, these objects will contain the `dateRange` object with `from` and `to` properties, indicating the start and end time of the scheduled fixed price in the RFC3339 timestamp format (`YYYY-MM-DDT23:59:60Z`).

 Note that the 'Z', at the end, represents the UTC time (GMT+00:00). If it was in GMT-03:00, for example, it would be (`YYYY-MM-DDT23:59:60-03:00`).

 ## Response body example

```json
[
    {
        "tradePolicyId": "6",
        "value": 20.9,
        "listPrice": 22.9,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-03:00"
        }
    },
    {
        "tradePolicyId": "1",
        "value": 18.9,
        "listPrice": null,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-03:00"
        }
    }
]
```

<h3 id="get-fixed-prices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|itemId|path|integer|true|SKU ID.|

> Example responses

> 200 Response

```json
[
  {
    "dateRange": {
      "from": "2021-12-30T22:00:00-03:00",
      "to": "2021-12-30T22:00:00-03:00"
    },
    "listPrice": 22.9,
    "minQuantity": 1,
    "tradePolicyId": "6",
    "value": 20.9
  },
  {
    "dateRange": {
      "from": "2021-12-30T22:00:00-03:00",
      "to": "2021-12-30T22:00:00-03:00"
    },
    "listPrice": null,
    "minQuantity": 1,
    "tradePolicyId": "1",
    "value": 18.9
  }
]
```

<h3 id="get-fixed-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-fixed-prices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FixedPrice](#schemafixedprice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Fixed Prices on a price table or trade policy

<a id="opIdGetFixedPricesonapricetable"></a>

> Code samples

```bash
curl https://example.com/pricing/prices/1/fixed/gold \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/prices/{itemId}/fixed/{priceTableId}`

Retrieves all Fixed Prices on a price table or trade policy. 

## Response body example

```json
[
    {
        "tradePolicyId": "6",
        "value": 20.9,
        "listPrice": 22.9,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-04:00"
        }
    },
    {
        "tradePolicyId": "1",
        "value": 18.9,
        "listPrice": null,
        "minQuantity": 1
    }
]
```

<h3 id="get-fixed-prices-on-a-price-table-or-trade-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|none|
|itemId|path|integer|true|SKU ID.|
|priceTableId|path|string|true|Price Table Name|

> Example responses

> 200 Response

```json
[
  {
    "dateRange": {
      "from": "2021-12-30T22:00:00-03:00",
      "to": "2021-12-30T22:00:00-04:00"
    },
    "listPrice": 22.9,
    "minQuantity": 1,
    "tradePolicyId": "6",
    "value": 20.9
  },
  {
    "listPrice": null,
    "minQuantity": 1,
    "tradePolicyId": "1",
    "value": 18.9
  }
]
```

<h3 id="get-fixed-prices-on-a-price-table-or-trade-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-fixed-prices-on-a-price-table-or-trade-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FixedPrice](#schemafixedprice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create or Update Fixed Prices on a price table or trade policy

<a id="opIdcreateorupdatefixedpricesonpricetableortradepolicy"></a>

> Code samples

```bash
curl https://example.com/pricing/prices/1/fixed/priceTableA \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "dateRange": {
        "from": "2021-12-30T22:00:00-03:00",
        "to": "2021-12-30T22:00:00-04:00"
      },
      "listPrice": 50.5,
      "minQuantity": 2,
      "value": 50.5
    }
  ]'
```

`POST /pricing/prices/{itemId}/fixed/{priceTableId}`

Creates or updates the fixed prices of an SKU for a specific price table or trade policy. You can add one or multiple fixed prices per SKU.

 ## Request body example

```json
[
  {
    "value": 50.5,
    "listPrice": 50.5,
    "minQuantity": 2,
    "dateRange": {
      "from": "2021-12-30T22:00:00-03:00",
      "to": "2021-12-30T22:00:00-04:00"
    }
  }
]
```

> Body parameter

```json
[
  {
    "dateRange": {
      "from": "2021-12-30T22:00:00-03:00",
      "to": "2021-12-30T22:00:00-04:00"
    },
    "listPrice": 50.5,
    "minQuantity": 2,
    "value": 50.5
  }
]
```

<h3 id="create-or-update-fixed-prices-on-a-price-table-or-trade-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|itemId|path|integer|true|SKU ID.|
|priceTableId|path|string|true|SKU **price table** name or **trade policy** ID.|
|body|body|[object]|false|none|
|» dateRange|body|object|false|Period of time when the fixed price will be applied to the SKU.|
|» » from|body|string|true|Start date of the price.|
|» » to|body|string|true|End date of the price.|
|» listPrice|body|number|false|SKU List Fixed Price.|
|» minQuantity|body|integer|true|The minimum SKU quantity for the fixed price to be applied.|
|» value|body|number|true|Fixed price value.|

<h3 id="create-or-update-fixed-prices-on-a-price-table-or-trade-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Fixed Prices on a price table or trade policy

<a id="opIdDeletefixedpricesonapricetableortradepolicy"></a>

> Code samples

```bash
curl https://example.com/pricing/prices/1/fixed/gold \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /pricing/prices/{itemId}/fixed/{priceTableId}`

Deletes all Fixed Prices of an SKU in a specific Price Table or Trade Policy.

<h3 id="delete-fixed-prices-on-a-price-table-or-trade-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|itemId|path|integer|true|SKU ID.|
|priceTableId|path|string|true|Price Table or Trade Policy Name.|

<h3 id="delete-fixed-prices-on-a-price-table-or-trade-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="pricing-api-pricing-configuration">Pricing Configuration</h1>

## Get Pricing Configuration

<a id="opIdGetPricingConfig"></a>

> Code samples

```bash
curl https://example.com/pricing/config \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/config`

Retrieves Pricing Configuration.
## Response body example

```json
{
    "hasMigrated": true,
    "migrationStatus": "Completed",
    "defaultMarkup": 100,
    "priceVariation": {
        "upperLimit": null,
        "lowerLimit": null
    },
    "minimumMarkups": {
        "1": 100,
        "2": 90
    },
    "tradePolicyConfigs": [],
    "sellersToOverride": [],
    "hasPriceInheritance": false,
    "priceInheritance": "never",
    "hasOptionalBasePrice": false,
    "blockAccount": false,
    "blockedRoutes": null,
    "priceTableSelectionStrategy": "first",
    "priceTableLimit": null
}
```

<h3 id="get-pricing-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "blockAccount": false,
  "blockedRoutes": null,
  "defaultMarkup": 100,
  "hasMigrated": true,
  "hasOptionalBasePrice": false,
  "hasPriceInheritance": false,
  "migrationStatus": "Completed",
  "minimumMarkups": {
    "1": 100,
    "2": 90
  },
  "priceInheritance": "never",
  "priceTableLimit": null,
  "priceTableSelectionStrategy": "first",
  "priceVariation": {
    "lowerLimit": null,
    "upperLimit": null
  },
  "sellersToOverride": [],
  "tradePolicyConfigs": []
}
```

<h3 id="get-pricing-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PricingConfiguration](#schemapricingconfiguration)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Credentials|string||none|
|200|Access-Control-Allow-Origin|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Pricing v2 Status

<a id="opIdGetPricingv2Status"></a>

> Code samples

```bash
curl https://example.com/pricing/migration \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /pricing/migration`

Retrieves Pricing v2 Status. 
## Response body example

```json
{
    "isActive": true,
    "hasMigrated": true
}
```

<h3 id="get-pricing-v2-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "hasMigrated": true,
  "isActive": true
}
```

<h3 id="get-pricing-v2-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-pricing-v2-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMigrated|boolean|false|none|Defines if the account has migrated to Pricing V2.|
|isActive|boolean|false|none|Defines if the account is active.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Credentials|string||none|
|200|Access-Control-Allow-Origin|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_DateRange">DateRange</h2>
<!-- backwards compatibility -->
<a id="schemadaterange"></a>
<a id="schema_DateRange"></a>
<a id="tocSdaterange"></a>
<a id="tocsdaterange"></a>

```json
{
  "from": "2017-12-07T14:30:00Z",
  "to": "2017-12-30T14:30:00Z"
}
```

Trade Policy Fixed Price Validity Period Object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|true|none|Indicates the date and time when the fixed price will start to be valid.|
|to|string|true|none|Indicates the date and time from which the fixed price will no longer be valid.|

<h2 id="tocS_FixedPrice">FixedPrice</h2>
<!-- backwards compatibility -->
<a id="schemafixedprice"></a>
<a id="schema_FixedPrice"></a>
<a id="tocSfixedprice"></a>
<a id="tocsfixedprice"></a>

```json
{
  "dateRange": {
    "from": "2017-12-07T14:30:00Z",
    "to": "2017-12-30T14:30:00Z"
  },
  "listPrice": null,
  "minQuantity": 1,
  "tradePolicyId": "9",
  "value": 300
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRange|[DateRange](#schemadaterange)|false|none|Trade Policy Fixed Price Validity Period Object.|
|listPrice|number \| null|true|none|Trade Policy List Price Value.|
|minQuantity|integer(int32)|true|none|Trade Policy Fixed Price Minimum Item Quantity.|
|tradePolicyId|string|true|none|Trade Policy ID.|
|value|number|true|none|Trade Policy Fixed Price Value.|

<h2 id="tocS_Getcomputedprice">Getcomputedprice</h2>
<!-- backwards compatibility -->
<a id="schemagetcomputedprice"></a>
<a id="schema_Getcomputedprice"></a>
<a id="tocSgetcomputedprice"></a>
<a id="tocsgetcomputedprice"></a>

```json
{
  "costPrice": 76.92,
  "listPrice": 30,
  "priceValidUntil": "2018-12-20T18:12:14Z",
  "sellingPrice": 18.9,
  "tradePolicyId": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costPrice|number|false|none|Cost price.|
|listPrice|integer(int32)|true|none|Trade Policy List Price, also known as "from" price.|
|priceValidUntil|string|true|none|Date until when the computed price will be valid, due to price scheduling. If no price scheduling applies, this will be set a year from the current time.|
|sellingPrice|number|true|none|Computed Price before applying coupons, promotions and taxes. This price may change before reaching the shelf.|
|tradePolicyId|string|true|none|Trade Policy ID.|

<h2 id="tocS_Getprice">Getprice</h2>
<!-- backwards compatibility -->
<a id="schemagetprice"></a>
<a id="schema_Getprice"></a>
<a id="tocSgetprice"></a>
<a id="tocsgetprice"></a>

```json
{
  "basePrice": 250,
  "costPrice": 10,
  "fixedPrices": [
    {
      "listPrice": null,
      "minQuantity": 1,
      "tradePolicyId": "1",
      "value": 666.66
    },
    {
      "listPrice": null,
      "minQuantity": 1,
      "tradePolicyId": "9",
      "value": 4500
    },
    {
      "dateRange": {
        "from": "2017-12-07T14:30:00Z",
        "to": "2017-12-30T14:30:00Z"
      },
      "listPrice": null,
      "minQuantity": 1,
      "tradePolicyId": "9",
      "value": 600
    },
    {
      "dateRange": {
        "from": "2017-12-20T14:30:00Z",
        "to": "2017-12-22T14:30:00Z"
      },
      "listPrice": null,
      "minQuantity": 1,
      "tradePolicyId": "9",
      "value": 5555.55
    },
    {
      "dateRange": {
        "from": "2017-12-06T15:00:00Z",
        "to": "2017-12-14T15:00:00Z"
      },
      "listPrice": null,
      "minQuantity": 1,
      "tradePolicyId": "9",
      "value": 555.55
    },
    {
      "listPrice": null,
      "minQuantity": 1,
      "tradePolicyId": "10",
      "value": 5555.55
    },
    {
      "listPrice": null,
      "minQuantity": 1,
      "tradePolicyId": "18",
      "value": 555.55
    }
  ],
  "itemId": "1234512354",
  "listPrice": 300,
  "markup": 2400
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePrice|integer(int32)|true|none|SKU's reference price.|
|costPrice|integer(int32)|true|none|SKU's cost price.|
|fixedPrices|[[FixedPrice](#schemafixedprice)]|true|none|The fixed price is a price that overlaps all other existing price configurations of a price table.|
|itemId|string|true|none|SKU ID.|
|listPrice|integer(int32)|true|none|Suggested retail price for the SKU.|
|markup|integer(int32)|true|none|Desired profit margin with the SKU's sale.|

<h2 id="tocS_PricingConfiguration">PricingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapricingconfiguration"></a>
<a id="schema_PricingConfiguration"></a>
<a id="tocSpricingconfiguration"></a>
<a id="tocspricingconfiguration"></a>

```json
{
  "blockAccount": false,
  "blockedRoutes": null,
  "defaultMarkup": 100,
  "hasMigrated": true,
  "hasOptionalBasePrice": false,
  "hasPriceInheritance": false,
  "migrationStatus": "Completed",
  "minimumMarkups": {
    "1": 100,
    "2": 90
  },
  "priceInheritance": "never",
  "priceTableLimit": null,
  "priceTableSelectionStrategy": "first",
  "priceVariation": {
    "lowerLimit": null,
    "upperLimit": null
  },
  "sellersToOverride": [],
  "tradePolicyConfigs": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockAccount|boolean|false|none|Defines if access to the Pricing APIs is blocked for external requests.|
|blockedRoutes|[string]|false|none|Array with all blocked routes.|
|defaultMarkup|integer(int32)|true|none|Account default markup.|
|hasMigrated|boolean|true|none|Defines if the account has migrated to Pricing V2.|
|hasOptionalBasePrice|boolean|false|none|Defines if optional base price is allowed.|
|hasPriceInheritance|boolean|false|none|**Deprecated.** Deprecated. Use the `priceInheritance` field instead.|
|migrationStatus|string|false|none|Pricing V2 migration status.|
|minimumMarkups|object|true|none|Account minimum markup.|
|priceInheritance|string|false|none|Condition of price inheritance from its parent account. This field can have three possible values: `never` if the store should never inherit prices, `nonexistent` if the store should only inherit prices in case of nonexistent prices for a given product, or `always` if the store should always inherit prices, regardless of its own prices.|
|priceTableLimit|integer \| null|false|none|Price Table Limit.|
|priceTableSelectionStrategy|string|false|none|The strategy used to get prices when there is more than one option. Possible values: `first`, `highest`, `lowest`. Default: `first`.|
|priceVariation|object|false|none|Price Variation object.|
|sellersToOverride|[object]|false|none|Overrides prices from sellers.|
|tradePolicyConfigs|[object]|false|none|Trade Policy Configurations array.|
