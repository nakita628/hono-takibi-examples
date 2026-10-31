<h1 id="shop">Shop v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Search for millions of products from the world's greatest brands.

Base URLs:

* <a href="https://server.shop.app">https://server.shop.app</a>

<h1 id="shop-default">Default</h1>

## Return more details about a list of products.

<a id="opIddetails"></a>

> Code samples

```bash
curl 'https://example.com/openai/details?ids=string' \
  -H 'Accept: application/json'
```

`GET /openai/details`

<h3 id="return-more-details-about-a-list-of-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|Comma separated list of product ids|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "currency_code": "string",
      "description": "string",
      "price": 0,
      "title": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="return-more-details-about-a-list-of-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[searchResponse](#schemasearchresponse)|
|503|Service Unavailable|Service Unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search for products

<a id="opIdsearch"></a>

> Code samples

```bash
curl https://example.com/openai/search \
  -H 'Accept: application/json'
```

`GET /openai/search`

<h3 id="search-for-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Query string to search for items.|
|price_min|query|number|false|The minimum price to filter by.|
|price_max|query|number|false|The maximum price to filter by.|
|similar_to_id|query|string|false|A product id that you want to find similar products for. (Only include one)|
|num_results|query|string|false|How many results to return. Defaults to 5. It can be a number between 1 and 10.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "currency_code": "string",
      "description": "string",
      "price": 0,
      "title": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="search-for-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[searchResponse](#schemasearchresponse)|
|503|Service Unavailable|Service Unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_searchResponse">searchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_searchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "results": [
    {
      "currency_code": "string",
      "description": "string",
      "price": 0,
      "title": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|none|
