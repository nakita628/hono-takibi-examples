<h1 id="price-simulations-api">Price Simulations API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


> Check the new [Pricing onboarding guide](https://developers.vtex.com/docs/guides/pricing-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Pricing and is organized by focusing on the developer's journey

The Price Simulations API allows you to configure custom price selectors for B2B stores, based on the context set by the [Orders Configuration app](https://developers.vtex.com/docs/guides/vtex-order-configuration).

## Custom Prices

In this section, you can create a specific shopping scenario with the criteria you want. For explaining purpose, we used the `orderType` and `state` as default values, but it can be others too.

`GET` [Get custom prices schema](https://developers.vtex.com/docs/api-reference/price-simulations#get-/_v/custom-prices/session/schema)
`POST` [Create or Update custom prices schema](https://developers.vtex.com/docs/api-reference/price-simulations#post-/_v/custom-prices/session/schema)

## Session Management

Every time you edit a configuration value set on the Custom Prices session, you must use this endpoint to update the Order Configuration.

`POST` [Update Order Configuration](https://developers.vtex.com/docs/api-reference/price-simulations#post-/sessions/)


## Price Association

Use these routes to associate a shopping scenario, created at the Custom Price session, to a specific price table.

`GET` [Get price association by ID](https://developers.vtex.com/docs/api-reference/price-simulations#get-/_v/custom-prices/rules/-priceAssociationId-)
`POST` [Create price association](https://developers.vtex.com/docs/api-reference/price-simulations#post-/_v/custom-prices/rules)
`PUT` [Update price association by ID](https://developers.vtex.com/docs/api-reference/price-simulations#put-/_v/custom-prices/rules/-priceAssociationId-)
`DELETE` [Disassociate price association by ID](https://developers.vtex.com/docs/api-reference/price-simulations#delete-/_v/custom-prices/rules/-priceAssociationId-)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

<h1 id="price-simulations-api-session-management">Session Management</h1>

## Update Order Configuration

> Code samples

```bash
curl https://example.com/sessions/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /sessions/`

Updates the Order Configuration. You should use this route every time you edit a configuration value

> Body parameter

```json
{}
```

<h3 id="update-order-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand|
|body|body|object|false|none|
|» public|body|object|true|Object to register session criteria|
|» » customSessionKeys|body|object|true|Contains every schema criteria. This is a serialized JSON object|
|» » » value|body|string|true|Order Configuration criteria|

> Example responses

> 200 Response

```json
null
```

<h3 id="update-order-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="price-simulations-api-custom-prices">Custom Prices</h1>

## Get custom prices schema

> Code samples

```bash
curl https://example.com/_v/custom-prices/session/schema \
  -H 'Accept: application/json'
```

`GET /_v/custom-prices/session/schema`

Retrieves all custom price for all shopping scenarios

<h3 id="get-custom-prices-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "name": "orderType",
      "type": "string"
    },
    {
      "name": "state",
      "type": "string"
    }
  ],
  "useEmail": true
}
```

<h3 id="get-custom-prices-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-custom-prices-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[object]|true|none|Order Configuration criteria|
|» name|string|true|none|Criteria name|
|» type|string|true|none|Criteria type|
|useEmail|boolean|false|none|If the custom price should use the user's e-mail to validate it|

<aside class="success">
This operation does not require authentication
</aside>

## Create or Update custom prices schema

> Code samples

```bash
curl https://example.com/_v/custom-prices/session/schema \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "fields": [
      {
        "name": "orderType",
        "type": "string"
      },
      {
        "name": "state",
        "type": "string"
      }
    ],
    "useEmail": true
  }'
```

`POST /_v/custom-prices/session/schema`

Creates a new custom price for a shopping scenario or updates an existing one

> Body parameter

```json
{
  "fields": [
    {
      "name": "orderType",
      "type": "string"
    },
    {
      "name": "state",
      "type": "string"
    }
  ],
  "useEmail": true
}
```

<h3 id="create-or-update-custom-prices-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand|
|body|body|object|false|none|
|» fields|body|[object]|true|Order Configuration criteria|
|» » name|body|string|true|Criteria name|
|» » type|body|string|true|Criteria type|
|» useEmail|body|boolean|false|If the custom price should use the user's e-mail to validate it|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "name": "orderType",
      "type": "string"
    },
    {
      "name": "state",
      "type": "string"
    }
  ],
  "useEmail": true
}
```

<h3 id="create-or-update-custom-prices-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-or-update-custom-prices-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[object]|true|none|Order Configuration criteria|
|» name|string|true|none|Criteria name|
|» type|string|true|none|Criteria type|
|useEmail|boolean|false|none|If the custom price should use the user's e-mail to validate it|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="price-simulations-api-price-association">Price Association</h1>

## Create price association

> Code samples

```bash
curl https://example.com/_v/custom-prices/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /_v/custom-prices/rules`

Creates a new price association for a shopping scenario

> Body parameter

```json
{}
```

<h3 id="create-price-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand|
|body|body|object|false|none|
|» email|body|object|false|User's email|
|» orderType|body|string|false|Order type|
|» pricetable|body|string|true|Name of the Price Table associated with the scenario|
|» state|body|string|false|Delivery location|

> Example responses

> 200 Response

```json
{}
```

<h3 id="create-price-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-price-association-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|false|none|User's email|
|id|integer|true|none|Price association ID|
|orderType|string|false|none|Order type|
|pricetable|string|true|none|Name of the Price Table associated with the scenario|
|state|string|false|none|Delivery location|

<aside class="success">
This operation does not require authentication
</aside>

## Get price association by ID

> Code samples

```bash
curl https://example.com/_v/custom-prices/rules/1 \
  -H 'Accept: application/json'
```

`GET /_v/custom-prices/rules/{priceAssociationId}`

Retrieves price association for a shopping scenario by its ID

<h3 id="get-price-association-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand|
|priceAssociationId|path|integer|true|Price Association unique identifier|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-price-association-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-price-association-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|false|none|User's email|
|id|integer|true|none|Price association ID|
|orderType|string|false|none|Order type|
|pricetable|string|true|none|Name of the Price Table associated with the scenario|
|state|string|false|none|Delivery location|

<aside class="success">
This operation does not require authentication
</aside>

## Update price association by ID

> Code samples

```bash
curl https://example.com/_v/custom-prices/rules/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PUT /_v/custom-prices/rules/{priceAssociationId}`

Updates a price association for a shopping scenario by its ID

> Body parameter

```json
{}
```

<h3 id="update-price-association-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand|
|priceAssociationId|path|integer|true|Price Association unique identifier|
|body|body|object|false|none|
|» orderType|body|string|true|Order type|
|» pricetable|body|string|true|Name of the Price Table associated with the scenario|
|» state|body|string|true|Delivery location|

> Example responses

> 200 Response

```json
{}
```

<h3 id="update-price-association-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-price-association-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|false|none|User's email|
|id|integer|true|none|Price association ID|
|orderType|string|false|none|Order type|
|pricetable|string|true|none|Name of the Price Table associated with the scenario|
|state|string|false|none|Delivery location|

<aside class="success">
This operation does not require authentication
</aside>

## Disassociate price association by ID

> Code samples

```bash
curl https://example.com/_v/custom-prices/rules/1 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /_v/custom-prices/rules/{priceAssociationId}`

Disassociates a price association from a shopping scenario by its ID

<h3 id="disassociate-price-association-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand|
|priceAssociationId|path|integer|true|Price Association unique identifier|

> Example responses

> 200 Response

```json
"Rule deleted with success: custom_prices-5dc4f3d6-dda6-11ea-835b-12d97a7637bf"
```

<h3 id="disassociate-price-association-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>
