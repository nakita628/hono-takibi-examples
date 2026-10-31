<h1 id="open-ai-klarna-product-api">Open AI Klarna product Api v0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://www.klarna.com/us/shopping">https://www.klarna.com/us/shopping</a>

<h1 id="open-ai-klarna-product-api-open-ai-product-endpoint">open-ai-product-endpoint</h1>

Open AI Product Endpoint. Query for products.

## API for fetching Klarna product information

<a id="opIdproductsUsingGET"></a>

> Code samples

```bash
curl 'https://example.com/public/openai/v0/products?q=string' \
  -H 'Accept: application/json'
```

`GET /public/openai/v0/products`

<h3 id="api-for-fetching-klarna-product-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|A precise query that matches one very small category or product that needs to be searched for to find the products the user is looking for. If the user explicitly stated what they want, use that as a query. The query is as specific as possible to the product name or category mentioned by the user in its singular form, and don't contain any clarifiers like latest, newest, cheapest, budget, premium, expensive or similar. The query is always taken from the latest topic, if there is a new topic a new query is started.|
|size|query|integer|false|number of products returned|
|budget|query|integer|false|maximum price of the matching product in local currency, filters results|

> Example responses

> 200 Response

```json
{
  "products": [
    {
      "attributes": [
        "string"
      ],
      "name": "string",
      "price": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="api-for-fetching-klarna-product-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Products found|[ProductResponse](#schemaproductresponse)|
|503|Service Unavailable|one or more services are unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "attributes": [
    "string"
  ],
  "name": "string",
  "price": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[string]|false|none|none|
|name|string|false|none|none|
|price|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_ProductResponse">ProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproductresponse"></a>
<a id="schema_ProductResponse"></a>
<a id="tocSproductresponse"></a>
<a id="tocsproductresponse"></a>

```json
{
  "products": [
    {
      "attributes": [
        "string"
      ],
      "name": "string",
      "price": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|products|[[Product](#schemaproduct)]|false|none|none|
