<h1 id="intelligent-search-api">Intelligent Search API v0.1.12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

>ℹ️ Onboarding guide
>
> Check the new [Search onboarding guide](https://developers.vtex.com/docs/guides/search-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Search and is organized by focusing on the developer's journey.

This API is from the [VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) solution, an alternative to the platform’s native search, as it assists the customer in their purchase journey, and it presents results since the first interaction with the search bar.

## Index
- [Get list of the 10 most searched terms](https://developers.vtex.com/docs/api-reference/intelligent-search-api#get-/top_searches)
- [Get list of suggested terms and attributes similar to the search term](https://developers.vtex.com/docs/api-reference/intelligent-search-api#get-/autocomplete_suggestions)
- [Get attempt of correction of a misspelled term](https://developers.vtex.com/docs/api-reference/intelligent-search-api#get-/correction_search)
- [Get list of banners registered for query](https://developers.vtex.com/docs/api-reference/intelligent-search-api#get-/banners/-facets-)
- [Get list of suggested terms similar to the search term](https://developers.vtex.com/docs/api-reference/intelligent-search-api#get-/search_suggestions)
- [Get list of products for a query](https://developers.vtex.com/docs/api-reference/intelligent-search-api#get-/product_search/-facets-)
- [Get list of the possible facets for a given query](https://developers.vtex.com/docs/api-reference/intelligent-search-api#get-/facets/-facets-)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.vtexcommercestable.com.br/api/io/_v/api/intelligent-search">https://{accountName}.vtexcommercestable.com.br/api/io/_v/api/intelligent-search</a> - VTEX IO Intelligent Search server URL.

License: MIT

<h1 id="intelligent-search-api-autocomplete">Autocomplete</h1>

## Get list of suggested terms and attributes similar to the search term

> Code samples

```bash
curl https://example.com/autocomplete_suggestions \
  -H 'Accept: application/json'
```

`GET /autocomplete_suggestions`

Lists the suggested terms and attributes similar to the search term.

<h3 id="get-list-of-suggested-terms-and-attributes-similar-to-the-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search term. It can contain any character.|
|locale|query|string \| null|false|Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.|

> Example responses

> 200 Response

```json
{
  "searches": [
    {
      "attributes": [
        {
          "key": "departamento",
          "labelKey": "Departamento",
          "labelValue": "TVs e Vídeo",
          "value": "tvs-e-video"
        },
        {
          "key": "categoria",
          "labelKey": "Categoria",
          "labelValue": "TVs",
          "value": "tvs"
        },
        {
          "key": "subcategoria",
          "labelKey": "Subcategoria",
          "labelValue": "Receptor de Controle de Acesso",
          "value": "receptor-de-controle-de-acesso"
        }
      ],
      "count": 28861,
      "term": "tv"
    },
    {
      "count": 2308,
      "term": "smarth tv"
    },
    {
      "count": 975,
      "term": "painel para tv"
    },
    {
      "count": 589,
      "term": "rack tv"
    }
  ]
}
```

> 5XX Response

```json
{
  "message": "string",
  "stack": "string"
}
```

<h3 id="get-list-of-suggested-terms-and-attributes-similar-to-the-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AutocompleteSearchSuggestions](#schemaautocompletesearchsuggestions)|
|5XX|Server Error|Server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of the 10 most searched terms

> Code samples

```bash
curl https://example.com/top_searches \
  -H 'Accept: application/json'
```

`GET /top_searches`

Lists the 10 most searched terms.

<h3 id="get-list-of-the-10-most-searched-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string \| null|false|Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.|

> Example responses

> 200 Response

```json
{
  "searches": [
    {
      "count": 14,
      "term": "home"
    },
    {
      "count": 10,
      "term": "shirt"
    },
    {
      "count": 9,
      "term": "top"
    },
    {
      "count": 6,
      "term": "tops"
    },
    {
      "count": 5,
      "term": "camera"
    },
    {
      "count": 5,
      "term": "kit"
    },
    {
      "count": 2,
      "term": "work shirt"
    },
    {
      "count": 2,
      "term": "shirts"
    },
    {
      "count": 2,
      "term": "clothing"
    },
    {
      "count": 1,
      "term": "classic shoes"
    }
  ]
}
```

> 5XX Response

```json
{
  "message": "string",
  "stack": "string"
}
```

<h3 id="get-list-of-the-10-most-searched-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TopSearches](#schematopsearches)|
|5XX|Server Error|Server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="intelligent-search-api-product-list-page">Product List Page</h1>

## Get list of banners registered for query

> Code samples

```bash
curl https://example.com/banners/category-1%2Fclothing%2Fcategory-2%2Fshirt%2Fcategory-3%2Fman \
  -H 'Accept: application/json'
```

`GET /banners/{facets}`

Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.

<h3 id="get-list-of-banners-registered-for-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search term. It can contain any character.|
|facets|path|string \| null|true|# Format<br><br>The `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.<br><br>The order in which the terms appear is not relevant to the search.<br><br>You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`<br><br># General filters<br><br>The `facets` parameter also allows the following general filters.<br><br>\| `facetKey`      \| Description                                                                                      \| Example                                                                  \|<br>\| --------------- \| ------------------------------------------------------------------------------------------------ \| ------------------------------------------------------------------------ \|<br>\| `price`         \| Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` \| `/color/blue/price/100:500?query=shirt`                                  \|<br>\| `category-${n}` \| Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) \| `category-1/clothing/category-2/shirts`                                  \|<br>\| `region-id`     \| Filter the search by a region id (aka regionalization). The value is the region id               \| `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. \|<br>|
|locale|query|string \| null|false|Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.|

> Example responses

> 200 Response

```json
{
  "banners": [
    {
      "area": "string",
      "html": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="get-list-of-banners-registered-for-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Banners](#schemabanners)|

<aside class="success">
This operation does not require authentication
</aside>

## Get attempt of correction of a misspelled term

> Code samples

```bash
curl https://example.com/correction_search \
  -H 'Accept: application/json'
```

`GET /correction_search`

Tries to correct a misspelled term from the search.

<h3 id="get-attempt-of-correction-of-a-misspelled-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search term. It can contain any character.|
|locale|query|string \| null|false|Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.|

> Example responses

> 200 Response

```json
{
  "correction": {
    "correction": true,
    "highlighted": "mountain <em>bike</em>",
    "misspelled": true,
    "text": "mountain bike"
  }
}
```

<h3 id="get-attempt-of-correction-of-a-misspelled-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Correction](#schemacorrection)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of the possible facets for a given query

> Code samples

```bash
curl https://example.com/facets/category-1%2Fclothing%2Fcategory-2%2Fshirt%2Fcategory-3%2Fman \
  -H 'Accept: application/json'
```

`GET /facets/{facets}`

Lists the possible facets for a given query

<h3 id="get-list-of-the-possible-facets-for-a-given-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|facets|path|string \| null|true|# Format<br><br>The `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.<br><br>The order in which the terms appear is not relevant to the search.<br><br>You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`<br><br># General filters<br><br>The `facets` parameter also allows the following general filters.<br><br>\| `facetKey`      \| Description                                                                                      \| Example                                                                  \|<br>\| --------------- \| ------------------------------------------------------------------------------------------------ \| ------------------------------------------------------------------------ \|<br>\| `price`         \| Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` \| `/color/blue/price/100:500?query=shirt`                                  \|<br>\| `category-${n}` \| Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) \| `category-1/clothing/category-2/shirts`                                  \|<br>\| `region-id`     \| Filter the search by a region id (aka regionalization). The value is the region id               \| `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. \|<br>|
|query|query|string|false|Search term. It can contain any character.|
|locale|query|string \| null|false|Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.|
|hideUnavailableItems|query|boolean|false|Whether the result should hide unavailable items (`true`), or not (`false`)|

> Example responses

> 200 Response

```json
{
  "breadcrumb": [
    {
      "href": "string",
      "name": "string"
    }
  ],
  "facets": [
    {
      "hidden": true,
      "name": "string",
      "quantity": 0,
      "type": "TEXT",
      "values": [
        {
          "id": "string",
          "key": "string",
          "name": "string",
          "quantity": 0,
          "selected": true,
          "value": "string"
        }
      ]
    }
  ],
  "queryArgs": {
    "query": "string",
    "selectedFacets": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "sampling": true
}
```

<h3 id="get-list-of-the-possible-facets-for-a-given-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of facets for the given query.|[Facets](#schemafacets)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of products for a query

> Code samples

```bash
curl https://example.com/product_search/category-1%2Fclothing%2Fcategory-2%2Fshirt%2Fcategory-3%2Fman \
  -H 'Accept: application/json'
```

`GET /product_search/{facets}`

Lists the products for a given query.

<h3 id="get-list-of-products-for-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|facets|path|string \| null|true|# Format<br><br>The `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.<br><br>The order in which the terms appear is not relevant to the search.<br><br>You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`<br><br># General filters<br><br>The `facets` parameter also allows the following general filters.<br><br>\| `facetKey`      \| Description                                                                                      \| Example                                                                  \|<br>\| --------------- \| ------------------------------------------------------------------------------------------------ \| ------------------------------------------------------------------------ \|<br>\| `price`         \| Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` \| `/color/blue/price/100:500?query=shirt`                                  \|<br>\| `category-${n}` \| Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) \| `category-1/clothing/category-2/shirts`                                  \|<br>\| `region-id`     \| Filter the search by a region id (aka regionalization). The value is the region id               \| `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. \|<br>|
|query|query|string|false|Search term. It can contain any character.|
|simulationBehavior|query|string \| null|false|Defines the simulation behavior.<br><br> * `default` - Calls the simulation for every single seller.<br> * `skip` - Never calls the simulation.<br> * `only1P` - Only calls the simulation for first party sellers.|
|count|query|number \| null|false|Number of products per page.|
|page|query|number \| null|false|Current search page.|
|sort|query|string \| null|false|Defines the sort type. If null, the products will be sorted by relevance.|
|locale|query|string \| null|false|Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.|
|hideUnavailableItems|query|boolean|false|Whether the result should hide unavailable items (`true`), or not (`false`)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|simulationBehavior|default|
|simulationBehavior|skip|
|simulationBehavior|only1P|
|sort|price:desc|
|sort|price:asc|
|sort|orders:desc|
|sort|name:desc|
|sort|name:asc|
|sort|release:desc|
|sort|discount:desc|

> Example responses

> 200 Response

```json
{
  "correction": {
    "misspelled": false
  },
  "fuzzy": "0",
  "operator": "and",
  "products": [
    {
      "brand": "Sony",
      "brandId": 2000005,
      "cacheId": "sp-2000003",
      "categories": [
        "/Home & Decor/"
      ],
      "categoriesIds": [
        "/40/"
      ],
      "categoryId": "40",
      "clusterHighlights": [
        {
          "id": "1970",
          "name": "Summer"
        }
      ],
      "description": "With this beautiful design piece you will never miss an appointment anymore. Yay.",
      "items": [
        {
          "attachments": [],
          "complementName": "",
          "ean": "16001",
          "images": [
            {
              "cacheId": "155484",
              "imageId": "155484",
              "imageLabel": "",
              "imageTag": "",
              "imageText": "",
              "imageUrl": "https://storecomponents.vtexassets.com/arquivos/ids/155484/Frame.jpg?v=636793817478300000"
            },
            {
              "cacheId": "155485",
              "imageId": "155485",
              "imageLabel": "",
              "imageTag": "",
              "imageText": "",
              "imageUrl": "https://storecomponents.vtexassets.com/arquivos/ids/155485/Frame-1.jpg?v=636793817642000000"
            },
            {
              "cacheId": "155486",
              "imageId": "155486",
              "imageLabel": "",
              "imageTag": "",
              "imageText": "",
              "imageUrl": "https://storecomponents.vtexassets.com/arquivos/ids/155486/Frame-2.jpg?v=636793817785530000"
            }
          ],
          "isKit": false,
          "itemId": "2000534",
          "measurementUnit": "un",
          "modalType": "",
          "name": "1",
          "nameComplete": "Top Wood Clock 1",
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "16001"
            }
          ],
          "sellers": [
            {
              "addToCartLink": "",
              "commertialOffer": {
                "AvailableQuantity": 10000,
                "BuyTogether": [],
                "CacheVersionUsedToCallCheckout": "",
                "DeliverySlaSamples": [],
                "DeliverySlaSamplesPerRegion": {},
                "GetInfoErrorMessage": null,
                "GiftSkuIds": [],
                "Installments": [
                  {
                    "InterestRate": 0,
                    "Name": "American Express à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "American Express",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 2 vezes sem juros",
                    "NumberOfInstallments": 2,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 98.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 3 vezes sem juros",
                    "NumberOfInstallments": 3,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 65.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 4 vezes sem juros",
                    "NumberOfInstallments": 4,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 49.49
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 5 vezes sem juros",
                    "NumberOfInstallments": 5,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 39.59
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 6 vezes sem juros",
                    "NumberOfInstallments": 6,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 32.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Diners à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Diners",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 100,
                    "Name": "Diners 2 vezes com juros",
                    "NumberOfInstallments": 2,
                    "PaymentSystemName": "Diners",
                    "TotalValuePlusInterestRate": 200.96,
                    "Value": 100.48
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Mastercard à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Mastercard",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Boleto Bancário à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Boleto Bancário",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Vale à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Vale",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Promissory à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Promissory",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Customer Credit à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Customer Credit 2 vezes sem juros",
                    "NumberOfInstallments": 2,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 98.99
                  },
                  {
                    "InterestRate": 100,
                    "Name": "Customer Credit 3 vezes com juros",
                    "NumberOfInstallments": 3,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 203.91,
                    "Value": 67.97
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Free à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Free",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  }
                ],
                "ItemMetadataAttachment": [],
                "ListPrice": 197.99,
                "Price": 197.99,
                "PriceValidUntil": "2023-04-01T13:13:20Z",
                "PriceWithoutDiscount": 197.99,
                "RewardValue": 0,
                "Tax": 0,
                "discountHighlights": [],
                "spotPrice": 197.99,
                "taxPercentage": 0,
                "teasers": [
                  {
                    "conditions": {
                      "minimumQuantity": 0,
                      "parameters": [
                        {
                          "name": "PaymentMethodId",
                          "value": "6"
                        }
                      ]
                    },
                    "effects": {
                      "parameters": [
                        {
                          "name": "PercentualDiscount",
                          "value": "8.0"
                        }
                      ]
                    },
                    "name": "8% Boleto"
                  }
                ]
              },
              "sellerDefault": true,
              "sellerId": "1",
              "sellerName": "VTEX"
            }
          ],
          "unitMultiplier": 1,
          "variations": [],
          "videos": []
        }
      ],
      "link": "/wood-clock/p",
      "linkText": "wood-clock",
      "origin": "intelligent-search",
      "priceRange": {
        "listPrice": {
          "highPrice": 197.99,
          "lowPrice": 197.99
        },
        "sellingPrice": {
          "highPrice": 197.99,
          "lowPrice": 197.99
        }
      },
      "productClusters": [
        {
          "id": "1970",
          "name": "Summer"
        }
      ],
      "productId": "2000003",
      "productName": "Top Wood Clock",
      "productReference": "clock120",
      "properties": [
        {
          "name": "sellerId",
          "originalName": "sellerId",
          "values": [
            "1"
          ]
        }
      ],
      "skuSpecifications": [],
      "specificationGroups": [
        {
          "name": "allSpecifications",
          "originalName": "allSpecifications",
          "specifications": [
            {
              "name": "sellerId",
              "originalName": "sellerId",
              "values": [
                "1"
              ]
            }
          ]
        }
      ]
    },
    {
      "brand": "Sony",
      "brandId": 2000005,
      "cacheId": "sp-2000214",
      "categories": [
        "/Home & Decor/"
      ],
      "categoriesIds": [
        "/40/"
      ],
      "categoryId": "40",
      "clusterHighlights": [],
      "description": "",
      "items": [
        {
          "attachments": [],
          "complementName": "",
          "ean": "2398428937489",
          "images": [
            {
              "cacheId": "155675",
              "imageId": "155675",
              "imageLabel": "vtex",
              "imageTag": "",
              "imageText": "vtex",
              "imageUrl": "https://storecomponents.vtexassets.com/arquivos/ids/155675/vtex.jpg?v=637655270451200000"
            }
          ],
          "isKit": false,
          "itemId": "310124211",
          "measurementUnit": "un",
          "modalType": "",
          "name": "kevin1sku",
          "nameComplete": "kevin1sku",
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "2983678w63478"
            }
          ],
          "sellers": [
            {
              "addToCartLink": "",
              "commertialOffer": {
                "AvailableQuantity": 10000,
                "BuyTogether": [],
                "CacheVersionUsedToCallCheckout": "",
                "DeliverySlaSamples": [],
                "DeliverySlaSamplesPerRegion": {},
                "GetInfoErrorMessage": null,
                "GiftSkuIds": [],
                "Installments": [
                  {
                    "InterestRate": 0,
                    "Name": "American Express à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "American Express",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Diners à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Diners",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Mastercard à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Mastercard",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Boleto Bancário à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Boleto Bancário",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Vale à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Vale",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Promissory à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Promissory",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Customer Credit à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Customer Credit 2 vezes sem juros",
                    "NumberOfInstallments": 2,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 5
                  },
                  {
                    "InterestRate": 100,
                    "Name": "Customer Credit 3 vezes com juros",
                    "NumberOfInstallments": 3,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 10.29,
                    "Value": 3.43
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Free à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Free",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  }
                ],
                "ItemMetadataAttachment": [],
                "ListPrice": 10,
                "Price": 10,
                "PriceValidUntil": "2023-04-01T13:13:20Z",
                "PriceWithoutDiscount": 10,
                "RewardValue": 0,
                "Tax": 0,
                "discountHighlights": [],
                "spotPrice": 10,
                "taxPercentage": 0,
                "teasers": [
                  {
                    "conditions": {
                      "minimumQuantity": 0,
                      "parameters": [
                        {
                          "name": "PaymentMethodId",
                          "value": "6"
                        }
                      ]
                    },
                    "effects": {
                      "parameters": [
                        {
                          "name": "PercentualDiscount",
                          "value": "8.0"
                        }
                      ]
                    },
                    "name": "8% Boleto"
                  }
                ]
              },
              "sellerDefault": true,
              "sellerId": "1",
              "sellerName": "VTEX"
            }
          ],
          "unitMultiplier": 1,
          "variations": [],
          "videos": []
        }
      ],
      "link": "/kevin1-lkn/p",
      "linkText": "kevin1-lkn",
      "origin": "intelligent-search",
      "priceRange": {
        "listPrice": {
          "highPrice": 10,
          "lowPrice": 10
        },
        "sellingPrice": {
          "highPrice": 10,
          "lowPrice": 10
        }
      },
      "productClusters": [],
      "productId": "2000214",
      "productName": "kevin1",
      "properties": [
        {
          "name": "sellerId",
          "originalName": "sellerId",
          "values": [
            "1"
          ]
        }
      ],
      "skuSpecifications": [],
      "specificationGroups": [
        {
          "name": "allSpecifications",
          "originalName": "allSpecifications",
          "specifications": [
            {
              "name": "sellerId",
              "originalName": "sellerId",
              "values": [
                "1"
              ]
            }
          ]
        }
      ]
    }
  ],
  "recordsFiltered": 5,
  "translated": false
}
```

<h3 id="get-list-of-products-for-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of products for the given query.|[ProductSearch](#schemaproductsearch)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of suggested terms similar to the search term

> Code samples

```bash
curl https://example.com/search_suggestions \
  -H 'Accept: application/json'
```

`GET /search_suggestions`

Lists suggested terms similar to the search term.

<h3 id="get-list-of-suggested-terms-similar-to-the-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search term. It can contain any character.|
|locale|query|string \| null|false|Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.|

> Example responses

> 200 Response

```json
{
  "searches": [
    {
      "count": 66,
      "term": "mountain bike"
    },
    {
      "count": 121,
      "term": "bike helmet"
    },
    {
      "count": 78,
      "term": "electric bike"
    },
    {
      "count": 161,
      "term": "bike rack"
    },
    {
      "count": 28,
      "term": "road bike"
    }
  ]
}
```

> 5XX Response

```json
{
  "message": "string",
  "stack": "string"
}
```

<h3 id="get-list-of-suggested-terms-similar-to-the-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SearchSuggestions](#schemasearchsuggestions)|
|5XX|Server Error|Server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AutocompleteSearchSuggestions">AutocompleteSearchSuggestions</h2>
<!-- backwards compatibility -->
<a id="schemaautocompletesearchsuggestions"></a>
<a id="schema_AutocompleteSearchSuggestions"></a>
<a id="tocSautocompletesearchsuggestions"></a>
<a id="tocsautocompletesearchsuggestions"></a>

```json
{
  "searches": [
    {
      "attributes": [
        {
          "key": "departamento",
          "labelKey": "Departamento",
          "labelValue": "TVs e Vídeo",
          "value": "tvs-e-video"
        },
        {
          "key": "categoria",
          "labelKey": "Categoria",
          "labelValue": "TVs",
          "value": "tvs"
        },
        {
          "key": "subcategoria",
          "labelKey": "Subcategoria",
          "labelValue": "Receptor de Controle de Acesso",
          "value": "receptor-de-controle-de-acesso"
        }
      ],
      "count": 28861,
      "term": "tv"
    },
    {
      "count": 2308,
      "term": "smarth tv"
    },
    {
      "count": 975,
      "term": "painel para tv"
    },
    {
      "count": 589,
      "term": "rack tv"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searches|[object]|false|none|List of suggested facets and terms.|

<h2 id="tocS_Banners">Banners</h2>
<!-- backwards compatibility -->
<a id="schemabanners"></a>
<a id="schema_Banners"></a>
<a id="tocSbanners"></a>
<a id="tocsbanners"></a>

```json
{
  "banners": [
    {
      "area": "string",
      "html": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banners|[object]|false|none|none|

<h2 id="tocS_Correction">Correction</h2>
<!-- backwards compatibility -->
<a id="schemacorrection"></a>
<a id="schema_Correction"></a>
<a id="tocScorrection"></a>
<a id="tocscorrection"></a>

```json
{
  "correction": {
    "correction": true,
    "highlighted": "mountain <em>bike</em>",
    "misspelled": true,
    "text": "mountain bike"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correction|object|false|none|Object that indicates if the term was misspelled and suggests a possible correction.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string",
  "stack": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Error message|
|stack|string|true|none|Error stack trace|

<h2 id="tocS_Facets">Facets</h2>
<!-- backwards compatibility -->
<a id="schemafacets"></a>
<a id="schema_Facets"></a>
<a id="tocSfacets"></a>
<a id="tocsfacets"></a>

```json
{
  "breadcrumb": [
    {
      "href": "string",
      "name": "string"
    }
  ],
  "facets": [
    {
      "hidden": true,
      "name": "string",
      "quantity": 0,
      "type": "TEXT",
      "values": [
        {
          "id": "string",
          "key": "string",
          "name": "string",
          "quantity": 0,
          "selected": true,
          "value": "string"
        }
      ]
    }
  ],
  "queryArgs": {
    "query": "string",
    "selectedFacets": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "sampling": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breadcrumb|[object]|false|none|Generated breadcrumb for the given query.|
|facets|[object]|false|none|List of facets|
|queryArgs|object|false|none|Term and facets used in the query|
|sampling|boolean|false|none|Indicates whether there was sampling in the aggregation of facets or not. In search results that have many products, only the first 30000 will be aggregated to avoid performance issues.|

<h2 id="tocS_ProductSearch">ProductSearch</h2>
<!-- backwards compatibility -->
<a id="schemaproductsearch"></a>
<a id="schema_ProductSearch"></a>
<a id="tocSproductsearch"></a>
<a id="tocsproductsearch"></a>

```json
{
  "correction": {
    "misspelled": false
  },
  "fuzzy": "0",
  "operator": "and",
  "products": [
    {
      "brand": "Sony",
      "brandId": 2000005,
      "cacheId": "sp-2000003",
      "categories": [
        "/Home & Decor/"
      ],
      "categoriesIds": [
        "/40/"
      ],
      "categoryId": "40",
      "clusterHighlights": [
        {
          "id": "1970",
          "name": "Summer"
        }
      ],
      "description": "With this beautiful design piece you will never miss an appointment anymore. Yay.",
      "items": [
        {
          "attachments": [],
          "complementName": "",
          "ean": "16001",
          "images": [
            {
              "cacheId": "155484",
              "imageId": "155484",
              "imageLabel": "",
              "imageTag": "",
              "imageText": "",
              "imageUrl": "https://storecomponents.vtexassets.com/arquivos/ids/155484/Frame.jpg?v=636793817478300000"
            },
            {
              "cacheId": "155485",
              "imageId": "155485",
              "imageLabel": "",
              "imageTag": "",
              "imageText": "",
              "imageUrl": "https://storecomponents.vtexassets.com/arquivos/ids/155485/Frame-1.jpg?v=636793817642000000"
            },
            {
              "cacheId": "155486",
              "imageId": "155486",
              "imageLabel": "",
              "imageTag": "",
              "imageText": "",
              "imageUrl": "https://storecomponents.vtexassets.com/arquivos/ids/155486/Frame-2.jpg?v=636793817785530000"
            }
          ],
          "isKit": false,
          "itemId": "2000534",
          "measurementUnit": "un",
          "modalType": "",
          "name": "1",
          "nameComplete": "Top Wood Clock 1",
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "16001"
            }
          ],
          "sellers": [
            {
              "addToCartLink": "",
              "commertialOffer": {
                "AvailableQuantity": 10000,
                "BuyTogether": [],
                "CacheVersionUsedToCallCheckout": "",
                "DeliverySlaSamples": [],
                "DeliverySlaSamplesPerRegion": {},
                "GetInfoErrorMessage": null,
                "GiftSkuIds": [],
                "Installments": [
                  {
                    "InterestRate": 0,
                    "Name": "American Express à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "American Express",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 2 vezes sem juros",
                    "NumberOfInstallments": 2,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 98.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 3 vezes sem juros",
                    "NumberOfInstallments": 3,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 65.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 4 vezes sem juros",
                    "NumberOfInstallments": 4,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 49.49
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 5 vezes sem juros",
                    "NumberOfInstallments": 5,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 39.59
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa 6 vezes sem juros",
                    "NumberOfInstallments": 6,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 32.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Diners à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Diners",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 100,
                    "Name": "Diners 2 vezes com juros",
                    "NumberOfInstallments": 2,
                    "PaymentSystemName": "Diners",
                    "TotalValuePlusInterestRate": 200.96,
                    "Value": 100.48
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Mastercard à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Mastercard",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Boleto Bancário à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Boleto Bancário",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Vale à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Vale",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Promissory à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Promissory",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Customer Credit à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Customer Credit 2 vezes sem juros",
                    "NumberOfInstallments": 2,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 98.99
                  },
                  {
                    "InterestRate": 100,
                    "Name": "Customer Credit 3 vezes com juros",
                    "NumberOfInstallments": 3,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 203.91,
                    "Value": 67.97
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Free à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Free",
                    "TotalValuePlusInterestRate": 197.99,
                    "Value": 197.99
                  }
                ],
                "ItemMetadataAttachment": [],
                "ListPrice": 197.99,
                "Price": 197.99,
                "PriceValidUntil": "2023-04-01T13:13:20Z",
                "PriceWithoutDiscount": 197.99,
                "RewardValue": 0,
                "Tax": 0,
                "discountHighlights": [],
                "spotPrice": 197.99,
                "taxPercentage": 0,
                "teasers": [
                  {
                    "conditions": {
                      "minimumQuantity": 0,
                      "parameters": [
                        {
                          "name": "PaymentMethodId",
                          "value": "6"
                        }
                      ]
                    },
                    "effects": {
                      "parameters": [
                        {
                          "name": "PercentualDiscount",
                          "value": "8.0"
                        }
                      ]
                    },
                    "name": "8% Boleto"
                  }
                ]
              },
              "sellerDefault": true,
              "sellerId": "1",
              "sellerName": "VTEX"
            }
          ],
          "unitMultiplier": 1,
          "variations": [],
          "videos": []
        }
      ],
      "link": "/wood-clock/p",
      "linkText": "wood-clock",
      "origin": "intelligent-search",
      "priceRange": {
        "listPrice": {
          "highPrice": 197.99,
          "lowPrice": 197.99
        },
        "sellingPrice": {
          "highPrice": 197.99,
          "lowPrice": 197.99
        }
      },
      "productClusters": [
        {
          "id": "1970",
          "name": "Summer"
        }
      ],
      "productId": "2000003",
      "productName": "Top Wood Clock",
      "productReference": "clock120",
      "properties": [
        {
          "name": "sellerId",
          "originalName": "sellerId",
          "values": [
            "1"
          ]
        }
      ],
      "skuSpecifications": [],
      "specificationGroups": [
        {
          "name": "allSpecifications",
          "originalName": "allSpecifications",
          "specifications": [
            {
              "name": "sellerId",
              "originalName": "sellerId",
              "values": [
                "1"
              ]
            }
          ]
        }
      ]
    },
    {
      "brand": "Sony",
      "brandId": 2000005,
      "cacheId": "sp-2000214",
      "categories": [
        "/Home & Decor/"
      ],
      "categoriesIds": [
        "/40/"
      ],
      "categoryId": "40",
      "clusterHighlights": [],
      "description": "",
      "items": [
        {
          "attachments": [],
          "complementName": "",
          "ean": "2398428937489",
          "images": [
            {
              "cacheId": "155675",
              "imageId": "155675",
              "imageLabel": "vtex",
              "imageTag": "",
              "imageText": "vtex",
              "imageUrl": "https://storecomponents.vtexassets.com/arquivos/ids/155675/vtex.jpg?v=637655270451200000"
            }
          ],
          "isKit": false,
          "itemId": "310124211",
          "measurementUnit": "un",
          "modalType": "",
          "name": "kevin1sku",
          "nameComplete": "kevin1sku",
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "2983678w63478"
            }
          ],
          "sellers": [
            {
              "addToCartLink": "",
              "commertialOffer": {
                "AvailableQuantity": 10000,
                "BuyTogether": [],
                "CacheVersionUsedToCallCheckout": "",
                "DeliverySlaSamples": [],
                "DeliverySlaSamplesPerRegion": {},
                "GetInfoErrorMessage": null,
                "GiftSkuIds": [],
                "Installments": [
                  {
                    "InterestRate": 0,
                    "Name": "American Express à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "American Express",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Visa à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Visa",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Diners à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Diners",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Mastercard à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Mastercard",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Boleto Bancário à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Boleto Bancário",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Vale à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Vale",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Promissory à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Promissory",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Customer Credit à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Customer Credit 2 vezes sem juros",
                    "NumberOfInstallments": 2,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 5
                  },
                  {
                    "InterestRate": 100,
                    "Name": "Customer Credit 3 vezes com juros",
                    "NumberOfInstallments": 3,
                    "PaymentSystemName": "Customer Credit",
                    "TotalValuePlusInterestRate": 10.29,
                    "Value": 3.43
                  },
                  {
                    "InterestRate": 0,
                    "Name": "Free à vista",
                    "NumberOfInstallments": 1,
                    "PaymentSystemName": "Free",
                    "TotalValuePlusInterestRate": 10,
                    "Value": 10
                  }
                ],
                "ItemMetadataAttachment": [],
                "ListPrice": 10,
                "Price": 10,
                "PriceValidUntil": "2023-04-01T13:13:20Z",
                "PriceWithoutDiscount": 10,
                "RewardValue": 0,
                "Tax": 0,
                "discountHighlights": [],
                "spotPrice": 10,
                "taxPercentage": 0,
                "teasers": [
                  {
                    "conditions": {
                      "minimumQuantity": 0,
                      "parameters": [
                        {
                          "name": "PaymentMethodId",
                          "value": "6"
                        }
                      ]
                    },
                    "effects": {
                      "parameters": [
                        {
                          "name": "PercentualDiscount",
                          "value": "8.0"
                        }
                      ]
                    },
                    "name": "8% Boleto"
                  }
                ]
              },
              "sellerDefault": true,
              "sellerId": "1",
              "sellerName": "VTEX"
            }
          ],
          "unitMultiplier": 1,
          "variations": [],
          "videos": []
        }
      ],
      "link": "/kevin1-lkn/p",
      "linkText": "kevin1-lkn",
      "origin": "intelligent-search",
      "priceRange": {
        "listPrice": {
          "highPrice": 10,
          "lowPrice": 10
        },
        "sellingPrice": {
          "highPrice": 10,
          "lowPrice": 10
        }
      },
      "productClusters": [],
      "productId": "2000214",
      "productName": "kevin1",
      "properties": [
        {
          "name": "sellerId",
          "originalName": "sellerId",
          "values": [
            "1"
          ]
        }
      ],
      "skuSpecifications": [],
      "specificationGroups": [
        {
          "name": "allSpecifications",
          "originalName": "allSpecifications",
          "specifications": [
            {
              "name": "sellerId",
              "originalName": "sellerId",
              "values": [
                "1"
              ]
            }
          ]
        }
      ]
    }
  ],
  "recordsFiltered": 5,
  "translated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correction|object|false|none|Object with information of misspelled terms.|
|fuzzy|string|false|none|Indicates how the search engine corrected the misspelled word by using fuzzy logic. It can be a number representing the max number of misspelled letters, or the string `auto` suggesting that the search-engine should set this value by itself.|
|operator|string|false|none|Indicates how the search-engine dealt with the fullText when there is more than one word.<br> * `and` - It means that the products contains all the words in the query.<br> * `or` - It means that the results will contain at least one word from the original search query. If `and` was not possible, `or` will be the fallback.|
|products|[object]|false|none|List of products|
|recordsFiltered|number|false|none|Total number of products.|
|translated|boolean|false|none|Whether the list of products was translated by the IS (`true`) or not (`false`).|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|and|
|operator|or|

<h2 id="tocS_SearchSuggestions">SearchSuggestions</h2>
<!-- backwards compatibility -->
<a id="schemasearchsuggestions"></a>
<a id="schema_SearchSuggestions"></a>
<a id="tocSsearchsuggestions"></a>
<a id="tocssearchsuggestions"></a>

```json
{
  "searches": [
    {
      "count": 66,
      "term": "mountain bike"
    },
    {
      "count": 121,
      "term": "bike helmet"
    },
    {
      "count": 78,
      "term": "electric bike"
    },
    {
      "count": 161,
      "term": "bike rack"
    },
    {
      "count": 28,
      "term": "road bike"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searches|[object]|false|none|List of suggested terms.|

<h2 id="tocS_TopSearches">TopSearches</h2>
<!-- backwards compatibility -->
<a id="schematopsearches"></a>
<a id="schema_TopSearches"></a>
<a id="tocStopsearches"></a>
<a id="tocstopsearches"></a>

```json
{
  "searches": [
    {
      "count": 14,
      "term": "home"
    },
    {
      "count": 10,
      "term": "shirt"
    },
    {
      "count": 9,
      "term": "top"
    },
    {
      "count": 6,
      "term": "tops"
    },
    {
      "count": 5,
      "term": "camera"
    },
    {
      "count": 5,
      "term": "kit"
    },
    {
      "count": 2,
      "term": "work shirt"
    },
    {
      "count": 2,
      "term": "shirts"
    },
    {
      "count": 2,
      "term": "clothing"
    },
    {
      "count": 1,
      "term": "classic shoes"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searches|[object]|false|none|A list of the 10 most searched terms.|
