<h1 id="axesso-api">Axesso Api v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use this api to fetch information to Amazon products and more.

Base URLs:

* <a href="http://api.axesso.de">http://api.axesso.de</a>

Email: <a href="mailto:support@axesso.de">support@axesso.de</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="http://api-doc.axesso.de/">Find out more about Swagger</a>

<h1 id="axesso-api-amz">amz</h1>

APIs for request on Amazon

<a href="http://api.axesso.de/">Find out more</a>

## request buy recommendations to a given product

<a id="opIdrequestBuyRecommendation"></a>

> Code samples

```bash
curl 'https://example.com/amz/amazon-lookup-buy-recommendations?url=string' \
  -H 'Accept: application/json'
```

`GET /amz/amazon-lookup-buy-recommendations`

<h3 id="request-buy-recommendations-to-a-given-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|The url of the requested product.|

> Example responses

> 200 Response

```json
{
  "buyRecommendations": [
    "string"
  ],
  "numberOfProducts": 0,
  "responseMessage": "Product successfully found!",
  "responseStatus": "PRODUCT_FOUND_RESPONSE"
}
```

<h3 id="request-buy-recommendations-to-a-given-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BuyRecommendationResponse](#schemabuyrecommendationresponse)|
|400|Bad Request|Bad Request - Missing parameter|None|
|404|Not Found|Not Found - Product not Found|None|
|406|Not Acceptable|Not Acceptable - Wrong parameter|None|

<aside class="success">
This operation does not require authentication
</aside>

## lookup product information

<a id="opIdrequestProduct"></a>

> Code samples

```bash
curl 'https://example.com/amz/amazon-lookup-product?url=string' \
  -H 'Accept: application/json'
```

`GET /amz/amazon-lookup-product`

<h3 id="lookup-product-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|The url of the requested product.|
|size|query|string|false|Size parameter if available.|

> Example responses

> 200 Response

```json
{
  "answeredQuestions": 0,
  "asin": "B077Q3YRP5",
  "countReview": 0,
  "features": [
    "string"
  ],
  "fulfilledBy": "Amazon",
  "manufacturer": "Sony",
  "price": 0,
  "priceSaving": "You Save: $59,58 (43%)",
  "priceShippingInformation": "free",
  "prime": true,
  "productRating": "4.4 out of 5 stars",
  "productTitle": "Playstation 4",
  "responseMessage": "Product successfully found!",
  "responseStatus": "PRODUCT_FOUND_RESPONSE",
  "retailPrice": 0,
  "sizeSelection": [
    "string"
  ],
  "soldBy": "Sony",
  "warehouseAvailability": "In Stock"
}
```

<h3 id="lookup-product-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ProductDetailsResponse](#schemaproductdetailsresponse)|
|400|Bad Request|Bad Request - Missing parameter|None|
|404|Not Found|Not Found - Product not Found|None|
|406|Not Acceptable|Not Acceptable - Wrong parameter|None|

<aside class="success">
This operation does not require authentication
</aside>

## fetch results auf a keyword search on Amazon

<a id="opIdkeywordSearch"></a>

> Code samples

```bash
curl 'https://example.com/amz/amazon-search-by-keyword?keyword=string&domainCode=string' \
  -H 'Accept: application/json'
```

`GET /amz/amazon-search-by-keyword`

<h3 id="fetch-results-auf-a-keyword-search-on-amazon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyword|query|string|true|keyword to search|
|domainCode|query|string|true|domain for the search|
|sortBy|query|string|false|sort option|
|numberOfProducts|query|integer|false|number of the results (max 20)|

> Example responses

> 200 Response

```json
{
  "domainCode": "com",
  "foundProducts": [
    "string"
  ],
  "keyword": "Playstation 4",
  "numberOfProducts": 0,
  "responseMessage": "Product successfully found!",
  "responseStatus": "PRODUCT_FOUND_RESPONSE",
  "sortStrategy": "date-desc-rank"
}
```

<h3 id="fetch-results-auf-a-keyword-search-on-amazon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[KeywordSearchResponse](#schemakeywordsearchresponse)|
|400|Bad Request|Bad Request - Missing parameter|None|
|404|Not Found|Not Found - Product not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## request available sort options to use in keyword search

<a id="opIdsortOptions"></a>

> Code samples

```bash
curl https://example.com/amz/sort-options \
  -H 'Accept: application/json'
```

`GET /amz/sort-options`

> Example responses

> 200 Response

```json
{
  "responseMessage": "Product successfully found!",
  "responseStatus": "PRODUCT_FOUND_RESPONSE",
  "resultSize": 0,
  "sortOptions": [
    {
      "order": 0,
      "sortName": "relevanceblender",
      "strategy": "AMAZON_FEATURED"
    }
  ]
}
```

<h3 id="request-available-sort-options-to-use-in-keyword-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SortOptionResponse](#schemasortoptionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BuyRecommendationResponse">BuyRecommendationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabuyrecommendationresponse"></a>
<a id="schema_BuyRecommendationResponse"></a>
<a id="tocSbuyrecommendationresponse"></a>
<a id="tocsbuyrecommendationresponse"></a>

```json
{
  "buyRecommendations": [
    "string"
  ],
  "numberOfProducts": 0,
  "responseMessage": "Product successfully found!",
  "responseStatus": "PRODUCT_FOUND_RESPONSE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyRecommendations|[string]|false|none|none|
|numberOfProducts|integer(int64)|false|none|none|
|responseMessage|string|false|none|none|
|responseStatus|string|false|none|none|

<h2 id="tocS_KeywordSearchResponse">KeywordSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemakeywordsearchresponse"></a>
<a id="schema_KeywordSearchResponse"></a>
<a id="tocSkeywordsearchresponse"></a>
<a id="tocskeywordsearchresponse"></a>

```json
{
  "domainCode": "com",
  "foundProducts": [
    "string"
  ],
  "keyword": "Playstation 4",
  "numberOfProducts": 0,
  "responseMessage": "Product successfully found!",
  "responseStatus": "PRODUCT_FOUND_RESPONSE",
  "sortStrategy": "date-desc-rank"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainCode|string|false|none|none|
|foundProducts|[string]|false|none|none|
|keyword|string|false|none|none|
|numberOfProducts|integer(int64)|false|none|none|
|responseMessage|string|false|none|none|
|responseStatus|string|false|none|none|
|sortStrategy|string|false|none|none|

<h2 id="tocS_ProductDetailsResponse">ProductDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproductdetailsresponse"></a>
<a id="schema_ProductDetailsResponse"></a>
<a id="tocSproductdetailsresponse"></a>
<a id="tocsproductdetailsresponse"></a>

```json
{
  "answeredQuestions": 0,
  "asin": "B077Q3YRP5",
  "countReview": 0,
  "features": [
    "string"
  ],
  "fulfilledBy": "Amazon",
  "manufacturer": "Sony",
  "price": 0,
  "priceSaving": "You Save: $59,58 (43%)",
  "priceShippingInformation": "free",
  "prime": true,
  "productRating": "4.4 out of 5 stars",
  "productTitle": "Playstation 4",
  "responseMessage": "Product successfully found!",
  "responseStatus": "PRODUCT_FOUND_RESPONSE",
  "retailPrice": 0,
  "sizeSelection": [
    "string"
  ],
  "soldBy": "Sony",
  "warehouseAvailability": "In Stock"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answeredQuestions|integer(int64)|false|none|none|
|asin|string|false|none|none|
|countReview|integer(int64)|false|none|none|
|features|[string]|false|none|none|
|fulfilledBy|string|false|none|none|
|manufacturer|string|false|none|none|
|price|number|false|none|none|
|priceSaving|string|false|none|none|
|priceShippingInformation|string|false|none|none|
|prime|boolean|false|none|none|
|productRating|string|false|none|none|
|productTitle|string|false|none|none|
|responseMessage|string|false|none|none|
|responseStatus|string|false|none|none|
|retailPrice|number|false|none|none|
|sizeSelection|[string]|false|none|none|
|soldBy|string|false|none|none|
|warehouseAvailability|string|false|none|none|

<h2 id="tocS_SortOptionResponse">SortOptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasortoptionresponse"></a>
<a id="schema_SortOptionResponse"></a>
<a id="tocSsortoptionresponse"></a>
<a id="tocssortoptionresponse"></a>

```json
{
  "responseMessage": "Product successfully found!",
  "responseStatus": "PRODUCT_FOUND_RESPONSE",
  "resultSize": 0,
  "sortOptions": [
    {
      "order": 0,
      "sortName": "relevanceblender",
      "strategy": "AMAZON_FEATURED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseMessage|string|false|none|none|
|responseStatus|string|false|none|none|
|resultSize|integer(int64)|false|none|none|
|sortOptions|[object]|false|none|none|
