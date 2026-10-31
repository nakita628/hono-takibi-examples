<h1 id="legacy-search-api">Legacy Search API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


> Check the new [Search onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/search-onboarding). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Search and is organized by focusing on the developer's journey.

This API lets you search and sort products in the Catalog using Fulltext, Category and Brand search terms. 

Retrieve product data to create custom searches and product shelves.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="legacy-search-api-crossselling">CrossSelling</h1>

## Get Product Search of Accessories

<a id="opIdProductSearchAccessories"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/crossselling/accessories/1 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/crossselling/accessories/{productId}`

Retrieves general information about the product's accessories.

<h3 id="get-product-search-of-accessories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|integer|true|Product's unique identifier|

<h3 id="get-product-search-of-accessories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product Search of Show Together

<a id="opIdProductSearchShowTogether"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/crossselling/showtogether/1 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/crossselling/showtogether/{productId}`

Retrieves general information about the products that are show together with the product in question.

<h3 id="get-product-search-of-show-together-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|integer|true|Product's unique identifier|

<h3 id="get-product-search-of-show-together-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product Search of Similars

<a id="opIdProductSearchSimilars"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/crossselling/similars/1 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/crossselling/similars/{productId}`

Retrieves general information about related product searches.

<h3 id="get-product-search-of-similars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|integer|true|Product's unique identifier|

<h3 id="get-product-search-of-similars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product Search of Suggestions

<a id="opIdProductSearchSuggestions"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/crossselling/suggestions/1 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/crossselling/suggestions/{productId}`

Retrieves general information about other product suggestions related to the product.

<h3 id="get-product-search-of-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|integer|true|Product's unique identifier|

<h3 id="get-product-search-of-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product Search of Who Bought Also Bought

<a id="opIdProductSearchWhoBoughtAlsoBought"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/crossselling/whoboughtalsobought/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/crossselling/whoboughtalsobought/{productId}`

Retrieves general information about other related products that the user also bought.

<h3 id="get-product-search-of-who-bought-also-bought-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|string|true|Product unique identifier.|

> Example responses

> 200 Response

```json
[
  {
    "Alcool": [
      "Percentual"
    ],
    "Ale": [
      "1"
    ],
    "Percentual": [
      "4,9"
    ],
    "Percentuals": [
      "4,9"
    ],
    "Teste da Api2": [
      "Teste de Api",
      "Ale"
    ],
    "Teste de Api": [
      "a"
    ],
    "Total": [
      "Percentuals",
      "Percentual"
    ],
    "allSpecifications": [
      "Percentuals",
      "Percentual",
      "Teste de Api",
      "Ale"
    ],
    "allSpecificationsGroups": [
      "Total",
      "Teste da Api2"
    ],
    "brand": "Hoegaarden",
    "brandId": 2000004,
    "brandImageUrl": "https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg",
    "categories": [
      "/Beers Beers Mesmo/"
    ],
    "categoriesIds": [
      "/1/"
    ],
    "categoryId": "1",
    "clusterHighlights": {
      "138": "teste2"
    },
    "description": "",
    "items": [
      {
        "Videos": [],
        "complementName": "",
        "ean": "",
        "estimatedDateArrival": null,
        "images": [
          {
            "imageId": "155489",
            "imageLabel": "",
            "imageLastModified": "2020-10-07T12:49:27.5800000Z",
            "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
            "imageText": "hoegaarden-kit",
            "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000"
          }
        ],
        "isKit": true,
        "itemId": "310118469",
        "kitItems": [
          {
            "amount": 6,
            "itemId": "310118466"
          }
        ],
        "measurementUnit": "un",
        "modalType": null,
        "name": "Kit com 6",
        "nameComplete": "Kit de Hoegaarden Kit com 6",
        "referenceId": [
          {
            "Key": "RefId",
            "Value": "000806"
          }
        ],
        "sellers": [
          {
            "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
            "commertialOffer": {
              "AvailableQuantity": 16,
              "BuyTogether": [],
              "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
              "DeliverySlaSamples": [
                {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              ],
              "DeliverySlaSamplesPerRegion": {
                "0": {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              },
              "DiscountHighLight": [],
              "GetInfoErrorMessage": null,
              "GiftSkuIds": [],
              "Installments": [
                {
                  "InterestRate": 0,
                  "Name": "Visa à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 2 vezes sem juros",
                  "NumberOfInstallments": 2,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 21
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 3 vezes sem juros",
                  "NumberOfInstallments": 3,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 14
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 4 vezes sem juros",
                  "NumberOfInstallments": 4,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 10.5
                },
                {
                  "InterestRate": 0,
                  "Name": "Promissory à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "promissoryPaymentGroup",
                  "PaymentSystemName": "Promissory",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                }
              ],
              "IsAvailable": true,
              "ItemMetadataAttachment": [],
              "ListPrice": 42,
              "PaymentOptions": {
                "availableAccounts": [],
                "availableTokens": [],
                "giftCardMessages": [],
                "giftCards": [],
                "installmentOptions": [
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      },
                      {
                        "count": 2,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 2,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 2100
                          }
                        ],
                        "total": 4200,
                        "value": 2100
                      },
                      {
                        "count": 3,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 3,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1400
                          }
                        ],
                        "total": 4200,
                        "value": 1400
                      },
                      {
                        "count": 4,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 4,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1050
                          }
                        ],
                        "total": 4200,
                        "value": 1050
                      }
                    ],
                    "paymentGroupName": "creditCardPaymentGroup",
                    "paymentName": "Visa",
                    "paymentSystem": "2",
                    "value": 4200
                  },
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      }
                    ],
                    "paymentGroupName": "promissoryPaymentGroup",
                    "paymentName": "Promissory",
                    "paymentSystem": "17",
                    "value": 4200
                  }
                ],
                "paymentSystems": [
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "promissoryPaymentGroup",
                    "id": 17,
                    "isCustom": false,
                    "name": "Promissory",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "17",
                    "template": "promissoryPaymentGroup-template",
                    "validator": null
                  },
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "creditCardPaymentGroup",
                    "id": 2,
                    "isCustom": false,
                    "name": "Visa",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "2",
                    "template": "creditCardPaymentGroup-template",
                    "validator": null
                  }
                ],
                "payments": []
              },
              "Price": 42,
              "PriceValidUntil": "4000-01-01T03:00:00Z",
              "PriceWithoutDiscount": 42,
              "RewardValue": 0,
              "SaleChannel": 0,
              "Tax": 0,
              "Teasers": []
            },
            "sellerDefault": true,
            "sellerId": "1",
            "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE"
          }
        ],
        "unitMultiplier": 1
      }
    ],
    "link": "https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p",
    "linkText": "kit-6-cerveja-hoegaarden",
    "metaTagDescription": "",
    "productClusters": {
      "138": "teste2",
      "143": "NaoPesquisavel",
      "146": "colecaotestesubcategoria",
      "161": "merch_import_test1"
    },
    "productId": "35",
    "productName": "Kit de Hoegaarden",
    "productReference": "000806",
    "productReferenceCode": null,
    "productTitle": "",
    "releaseDate": "2020-10-07T00:00:00",
    "searchableClusters": {
      "138": "teste2"
    }
  }
]
```

<h3 id="get-product-search-of-who-bought-also-bought-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-search-of-who-bought-also-bought-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» allSpecifications|[string]|true|none|Array of the product's specifications.|
|» allSpecificationsGroups|[string]|true|none|Array of the product's specifications groups.|
|» brand|string|true|none|Brand name.|
|» brandId|integer|true|none|Product brand ID.|
|» brandImageUrl|string|true|none|Product's brand image URL.|
|» categories|[object]|true|none|Array of the product's categories URLs.|
|» categoriesIds|[object]|true|none|Array of the product's categories IDs.|
|» categoryId|string|true|none|Product category ID.|
|» clusterHighlights|object|true|none|Cluster highlight ID and name.|
|» description|string \| null|true|none|Description of the main information related to the product. A simple and easy to understand summary for the customer.|
|» items|[object]|true|none|Array containing the product SKU general information.|
|» » Videos|[object]|true|none|Videos.|
|» » complementName|string|true|none|SKU complement name.|
|» » ean|string|true|none|SKU unique identification code (barcode), accepts up to 13 numerical characters.|
|» » estimatedDateArrival|string \| null|true|none|Estimated date arrival.|
|» » images|[object]|true|none|Array of information about the SKU image.|
|» » » imageId|string|true|none|Image ID.|
|» » » imageLabel|string|true|none|Image label.|
|» » » imageLastModified|string|true|none|Date and time of the last update of the image.|
|» » » imageTag|string|true|none|Image tag.|
|» » » imageText|string \| null|true|none|Image text.|
|» » » imageUrl|string|true|none|Image URL.|
|» » isKit|boolean|true|none|If the SKU is part of a kit.|
|» » itemId|string|true|none|SKU ID.|
|» » kitItems|[object]|true|none|Array with information of SKUs components from a Kit.|
|» » » amount|integer|true|none|Amount of the SKU component in the kit.|
|» » » itemId|string|true|none|SKU kit component ID.|
|» » measurementUnit|string|true|none|Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.|
|» » modalType|string \| null|true|none|Modal Type.|
|» » name|string|true|none|SKU name.|
|» » nameComplete|string|true|none|SKU complete name.|
|» » referenceId|[object]|true|none|Reference code ID.|
|» » » Key|string|true|none|Reference Code.|
|» » » Value|string|true|none|Unique reference code used internally for organizational purposes.|
|» » sellers|[object]|true|none|Array of SKU sellers.|
|» » » addToCartLink|string|true|none|URL to add the product to the cart.|
|» » » commertialOffer|object|true|none|AKA Commertial Condition.|
|» » » » AvailableQuantity|integer|true|none|Use the `IsAvailable` field instead.|
|» » » » BuyTogether|[object]|true|none|Array of other products that can be bought together with the product in question.|
|» » » » CacheVersionUsedToCallCheckout|string|true|none|Cache version used to call checkout.|
|» » » » DeliverySlaSamples|[object]|true|none|Delivery SLA samples.|
|» » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » Region|string \| null|true|none|Region.|
|» » » » DeliverySlaSamplesPerRegion|object|true|none|Delivery SLA samples per region.|
|» » » » » 0|object|false|none|Delivery SLA ID.|
|» » » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » » Region|string \| null|true|none|Region.|
|» » » » DiscountHighLight|[object]|true|none|Discount hightlight.|
|» » » » GetInfoErrorMessage|string \| null|true|none|Get info error message.|
|» » » » GiftSkuIds|[object]|true|none|Array of SKU gifts IDs.|
|» » » » Installments|[object]|true|none|Installments options.|
|» » » » » InterestRate|number|true|none|Interest rate of the installment.|
|» » » » » Name|string|true|none|Name of the installment.|
|» » » » » NumberOfInstallments|integer|true|none|Number of the installment.|
|» » » » » PaymentSystemGroupName|string|true|none|Payment system group name of the installment.|
|» » » » » PaymentSystemName|string|true|none|Payment system name of the installment.|
|» » » » » TotalValuePlusInterestRate|number|true|none|Total value plus interest rate of the installment.|
|» » » » » Value|number|true|none|Value of the installment.|
|» » » » IsAvailable|boolean|true|none|If the product is available or not.|
|» » » » ItemMetadataAttachment|[object]|true|none|Item metadata attachment.|
|» » » » ListPrice|number|true|none|List price of the product.|
|» » » » PaymentOptions|object|true|none|Payment options.|
|» » » » » availableAccounts|[object]|true|none|Available accounts.|
|» » » » » availableTokens|[object]|true|none|Available tokens.|
|» » » » » giftCardMessages|[object]|true|none|GiftCardMessages.|
|» » » » » giftCards|[object]|true|none|GiftCards.|
|» » » » » installmentOptions|[object]|true|none|installment options.|
|» » » » » » bin|string \| null|true|none|Bin.|
|» » » » » » installments|[object]|true|none|Installments.|
|» » » » » » » count|integer|true|none|Count.|
|» » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » sellerMerchantInstallments|[object]|true|none|Seller merchant installments.|
|» » » » » » » » count|integer|true|none|Count.|
|» » » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » » id|string|true|none|ID.|
|» » » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » » total|integer|true|none|Total.|
|» » » » » » » » value|integer|true|none|Value.|
|» » » » » » » total|integer|true|none|Total.|
|» » » » » » » value|integer|true|none|Value.|
|» » » » » » paymentGroupName|string|true|none|Payment group name.|
|» » » » » » paymentName|string|true|none|Payment name.|
|» » » » » » paymentSystem|string|true|none|Payment system.|
|» » » » » » value|integer|true|none|Value.|
|» » » » » paymentSystems|[object]|true|none|Payment systems.|
|» » » » » » availablePayments|string \| null|true|none|Available payments.|
|» » » » » » description|string \| null|true|none|Description.|
|» » » » » » dueDate|string|true|none|Due date.|
|» » » » » » groupName|string|true|none|Group name.|
|» » » » » » id|integer|true|none|ID.|
|» » » » » » isCustom|boolean|true|none|If is custom or not.|
|» » » » » » name|string|true|none|Name.|
|» » » » » » requiresAuthentication|boolean|true|none|If requires authentication.|
|» » » » » » requiresDocument|boolean|true|none|If requires document or not.|
|» » » » » » stringId|string|true|none|String ID.|
|» » » » » » template|string|true|none|Template.|
|» » » » » » validator|string \| null|true|none|Validator.|
|» » » » » payments|[object]|true|none|Payments.|
|» » » » Price|number|true|none|Price of the product.|
|» » » » PriceValidUntil|string|true|none|Price of the product valid until a certain date.|
|» » » » PriceWithoutDiscount|number|true|none|Price of the product without discount.|
|» » » » RewardValue|number|true|none|Reward value of the product.|
|» » » » SaleChannel|integer|true|none|Trade policy which the product is contained.|
|» » » » Tax|number|true|none|Tax of the product.|
|» » » » Teasers|[object]|true|none|Teasers.|
|» » » sellerDefault|boolean|true|none|If the seller is default or not.|
|» » » sellerId|string|true|none|SKU seller ID.|
|» » » sellerName|string|true|none|SKU seller name.|
|» » unitMultiplier|number|true|none|numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.|
|» link|string|true|none|Product URL.|
|» linkText|string|true|none|Product URL.|
|» metaTagDescription|string|true|none|Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.|
|» productClusters|object|true|none|Product clusters' IDs and names.|
|» productId|string|true|none|Product unique identifier.|
|» productName|string|true|none|Product name.|
|» productReference|string|true|none|Product reference.|
|» productReferenceCode|integer \| null|true|none|Product reference ID.|
|» productTitle|string|true|none|Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.|
|» releaseDate|string|true|none|Product release date.|
|» searchableClusters|object|true|none|Searchable clusters IDs and names|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product Search of Who Saw Also Bought

<a id="opIdProductSearchWhoSawAlsoBought"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/crossselling/whosawalsobought/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/crossselling/whosawalsobought/{productId}`

Retrieves general information about other related products that the users saw and also bought.

<h3 id="get-product-search-of-who-saw-also-bought-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|string|true|Product unique identifier.|

> Example responses

> 200 Response

```json
[
  {
    "Alcool": [
      "Percentual"
    ],
    "Ale": [
      "1"
    ],
    "Percentual": [
      "4,9"
    ],
    "Percentuals": [
      "4,9"
    ],
    "Teste da Api2": [
      "Teste de Api",
      "Ale"
    ],
    "Teste de Api": [
      "a"
    ],
    "Total": [
      "Percentuals",
      "Percentual"
    ],
    "allSpecifications": [
      "Percentuals",
      "Percentual",
      "Teste de Api",
      "Ale"
    ],
    "allSpecificationsGroups": [
      "Total",
      "Teste da Api2"
    ],
    "brand": "Hoegaarden",
    "brandId": 2000004,
    "brandImageUrl": "https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg",
    "categories": [
      "/Beers Beers Mesmo/"
    ],
    "categoriesIds": [
      "/1/"
    ],
    "categoryId": "1",
    "clusterHighlights": {
      "138": "teste2"
    },
    "description": "",
    "items": [
      {
        "Videos": [],
        "complementName": "",
        "ean": "",
        "estimatedDateArrival": null,
        "images": [
          {
            "imageId": "155489",
            "imageLabel": "",
            "imageLastModified": "2020-10-07T12:49:27.5800000Z",
            "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
            "imageText": "hoegaarden-kit",
            "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000"
          }
        ],
        "isKit": true,
        "itemId": "310118469",
        "kitItems": [
          {
            "amount": 6,
            "itemId": "310118466"
          }
        ],
        "measurementUnit": "un",
        "modalType": null,
        "name": "Kit com 6",
        "nameComplete": "Kit de Hoegaarden Kit com 6",
        "referenceId": [
          {
            "Key": "RefId",
            "Value": "000806"
          }
        ],
        "sellers": [
          {
            "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
            "commertialOffer": {
              "AvailableQuantity": 16,
              "BuyTogether": [],
              "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
              "DeliverySlaSamples": [
                {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              ],
              "DeliverySlaSamplesPerRegion": {
                "0": {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              },
              "DiscountHighLight": [],
              "GetInfoErrorMessage": null,
              "GiftSkuIds": [],
              "Installments": [
                {
                  "InterestRate": 0,
                  "Name": "Visa à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 2 vezes sem juros",
                  "NumberOfInstallments": 2,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 21
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 3 vezes sem juros",
                  "NumberOfInstallments": 3,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 14
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 4 vezes sem juros",
                  "NumberOfInstallments": 4,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 10.5
                },
                {
                  "InterestRate": 0,
                  "Name": "Promissory à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "promissoryPaymentGroup",
                  "PaymentSystemName": "Promissory",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                }
              ],
              "IsAvailable": true,
              "ItemMetadataAttachment": [],
              "ListPrice": 42,
              "PaymentOptions": {
                "availableAccounts": [],
                "availableTokens": [],
                "giftCardMessages": [],
                "giftCards": [],
                "installmentOptions": [
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      },
                      {
                        "count": 2,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 2,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 2100
                          }
                        ],
                        "total": 4200,
                        "value": 2100
                      },
                      {
                        "count": 3,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 3,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1400
                          }
                        ],
                        "total": 4200,
                        "value": 1400
                      },
                      {
                        "count": 4,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 4,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1050
                          }
                        ],
                        "total": 4200,
                        "value": 1050
                      }
                    ],
                    "paymentGroupName": "creditCardPaymentGroup",
                    "paymentName": "Visa",
                    "paymentSystem": "2",
                    "value": 4200
                  },
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      }
                    ],
                    "paymentGroupName": "promissoryPaymentGroup",
                    "paymentName": "Promissory",
                    "paymentSystem": "17",
                    "value": 4200
                  }
                ],
                "paymentSystems": [
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "promissoryPaymentGroup",
                    "id": 17,
                    "isCustom": false,
                    "name": "Promissory",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "17",
                    "template": "promissoryPaymentGroup-template",
                    "validator": null
                  },
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "creditCardPaymentGroup",
                    "id": 2,
                    "isCustom": false,
                    "name": "Visa",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "2",
                    "template": "creditCardPaymentGroup-template",
                    "validator": null
                  }
                ],
                "payments": []
              },
              "Price": 42,
              "PriceValidUntil": "4000-01-01T03:00:00Z",
              "PriceWithoutDiscount": 42,
              "RewardValue": 0,
              "SaleChannel": 0,
              "Tax": 0,
              "Teasers": []
            },
            "sellerDefault": true,
            "sellerId": "1",
            "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE"
          }
        ],
        "unitMultiplier": 1
      }
    ],
    "link": "https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p",
    "linkText": "kit-6-cerveja-hoegaarden",
    "metaTagDescription": "",
    "productClusters": {
      "138": "teste2",
      "143": "NaoPesquisavel",
      "146": "colecaotestesubcategoria",
      "161": "merch_import_test1"
    },
    "productId": "35",
    "productName": "Kit de Hoegaarden",
    "productReference": "000806",
    "productReferenceCode": null,
    "productTitle": "",
    "releaseDate": "2020-10-07T00:00:00",
    "searchableClusters": {
      "138": "teste2"
    }
  }
]
```

<h3 id="get-product-search-of-who-saw-also-bought-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-search-of-who-saw-also-bought-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» allSpecifications|[string]|true|none|Array of the product's specifications.|
|» allSpecificationsGroups|[string]|true|none|Array of the product's specifications groups.|
|» brand|string|true|none|Brand name.|
|» brandId|integer|true|none|Product brand ID.|
|» brandImageUrl|string|true|none|Product's brand image URL.|
|» categories|[object]|true|none|Array of the product's categories URLs.|
|» categoriesIds|[object]|true|none|Array of the product's categories IDs.|
|» categoryId|string|true|none|Product category ID.|
|» clusterHighlights|object|true|none|Cluster highlight ID and name.|
|» description|string \| null|true|none|Description of the main information related to the product. A simple and easy to understand summary for the customer.|
|» items|[object]|true|none|Array containing the product SKU general information.|
|» » Videos|[object]|true|none|Videos.|
|» » complementName|string|true|none|SKU complement name.|
|» » ean|string|true|none|SKU unique identification code (barcode), accepts up to 13 numerical characters.|
|» » estimatedDateArrival|string \| null|true|none|Estimated date arrival.|
|» » images|[object]|true|none|Array of information about the SKU image.|
|» » » imageId|string|true|none|Image ID.|
|» » » imageLabel|string|true|none|Image label.|
|» » » imageLastModified|string|true|none|Date and time of the last update of the image.|
|» » » imageTag|string|true|none|Image tag.|
|» » » imageText|string \| null|true|none|Image text.|
|» » » imageUrl|string|true|none|Image URL.|
|» » isKit|boolean|true|none|If the SKU is part of a kit.|
|» » itemId|string|true|none|SKU ID.|
|» » kitItems|[object]|true|none|Array with information of SKUs components from a Kit.|
|» » » amount|integer|true|none|Amount of the SKU component in the kit.|
|» » » itemId|string|true|none|SKU kit component ID.|
|» » measurementUnit|string|true|none|Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.|
|» » modalType|string \| null|true|none|Modal Type.|
|» » name|string|true|none|SKU name.|
|» » nameComplete|string|true|none|SKU complete name.|
|» » referenceId|[object]|true|none|Reference code ID.|
|» » » Key|string|true|none|Reference Code.|
|» » » Value|string|true|none|Unique reference code used internally for organizational purposes.|
|» » sellers|[object]|true|none|Array of SKU sellers.|
|» » » addToCartLink|string|true|none|URL to add the product to the cart.|
|» » » commertialOffer|object|true|none|AKA Commertial Condition.|
|» » » » AvailableQuantity|integer|true|none|Use the `IsAvailable` field instead.|
|» » » » BuyTogether|[object]|true|none|Array of other products that can be bought together with the product in question.|
|» » » » CacheVersionUsedToCallCheckout|string|true|none|Cache version used to call checkout.|
|» » » » DeliverySlaSamples|[object]|true|none|Delivery SLA samples.|
|» » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » Region|string \| null|true|none|Region.|
|» » » » DeliverySlaSamplesPerRegion|object|true|none|Delivery SLA samples per region.|
|» » » » » 0|object|false|none|Delivery SLA ID.|
|» » » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » » Region|string \| null|true|none|Region.|
|» » » » DiscountHighLight|[object]|true|none|Discount hightlight.|
|» » » » GetInfoErrorMessage|string \| null|true|none|Get info error message.|
|» » » » GiftSkuIds|[object]|true|none|Array of SKU gifts IDs.|
|» » » » Installments|[object]|true|none|Installments options.|
|» » » » » InterestRate|number|true|none|Interest rate of the installment.|
|» » » » » Name|string|true|none|Name of the installment.|
|» » » » » NumberOfInstallments|integer|true|none|Number of the installment.|
|» » » » » PaymentSystemGroupName|string|true|none|Payment system group name of the installment.|
|» » » » » PaymentSystemName|string|true|none|Payment system name of the installment.|
|» » » » » TotalValuePlusInterestRate|number|true|none|Total value plus interest rate of the installment.|
|» » » » » Value|number|true|none|Value of the installment.|
|» » » » IsAvailable|boolean|true|none|If the product is available or not.|
|» » » » ItemMetadataAttachment|[object]|true|none|Item metadata attachment.|
|» » » » ListPrice|number|true|none|List price of the product.|
|» » » » PaymentOptions|object|true|none|Payment options.|
|» » » » » availableAccounts|[object]|true|none|Available accounts.|
|» » » » » availableTokens|[object]|true|none|Available tokens.|
|» » » » » giftCardMessages|[object]|true|none|GiftCardMessages.|
|» » » » » giftCards|[object]|true|none|GiftCards.|
|» » » » » installmentOptions|[object]|true|none|installment options.|
|» » » » » » bin|string \| null|true|none|Bin.|
|» » » » » » installments|[object]|true|none|Installments.|
|» » » » » » » count|integer|true|none|Count.|
|» » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » sellerMerchantInstallments|[object]|true|none|Seller merchant installments.|
|» » » » » » » » count|integer|true|none|Count.|
|» » » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » » id|string|true|none|ID.|
|» » » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » » total|integer|true|none|Total.|
|» » » » » » » » value|integer|true|none|Value.|
|» » » » » » » total|integer|true|none|Total.|
|» » » » » » » value|integer|true|none|Value.|
|» » » » » » paymentGroupName|string|true|none|Payment group name.|
|» » » » » » paymentName|string|true|none|Payment name.|
|» » » » » » paymentSystem|string|true|none|Payment system.|
|» » » » » » value|integer|true|none|Value.|
|» » » » » paymentSystems|[object]|true|none|Payment systems.|
|» » » » » » availablePayments|string \| null|true|none|Available payments.|
|» » » » » » description|string \| null|true|none|Description.|
|» » » » » » dueDate|string|true|none|Due date.|
|» » » » » » groupName|string|true|none|Group name.|
|» » » » » » id|integer|true|none|ID.|
|» » » » » » isCustom|boolean|true|none|If is custom or not.|
|» » » » » » name|string|true|none|Name.|
|» » » » » » requiresAuthentication|boolean|true|none|If requires authentication.|
|» » » » » » requiresDocument|boolean|true|none|If requires document or not.|
|» » » » » » stringId|string|true|none|String ID.|
|» » » » » » template|string|true|none|Template.|
|» » » » » » validator|string \| null|true|none|Validator.|
|» » » » » payments|[object]|true|none|Payments.|
|» » » » Price|number|true|none|Price of the product.|
|» » » » PriceValidUntil|string|true|none|Price of the product valid until a certain date.|
|» » » » PriceWithoutDiscount|number|true|none|Price of the product without discount.|
|» » » » RewardValue|number|true|none|Reward value of the product.|
|» » » » SaleChannel|integer|true|none|Trade policy which the product is contained.|
|» » » » Tax|number|true|none|Tax of the product.|
|» » » » Teasers|[object]|true|none|Teasers.|
|» » » sellerDefault|boolean|true|none|If the seller is default or not.|
|» » » sellerId|string|true|none|SKU seller ID.|
|» » » sellerName|string|true|none|SKU seller name.|
|» » unitMultiplier|number|true|none|numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.|
|» link|string|true|none|Product URL.|
|» linkText|string|true|none|Product URL.|
|» metaTagDescription|string|true|none|Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.|
|» productClusters|object|true|none|Product clusters' IDs and names.|
|» productId|string|true|none|Product unique identifier.|
|» productName|string|true|none|Product name.|
|» productReference|string|true|none|Product reference.|
|» productReferenceCode|integer \| null|true|none|Product reference ID.|
|» productTitle|string|true|none|Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.|
|» releaseDate|string|true|none|Product release date.|
|» searchableClusters|object|true|none|Searchable clusters IDs and names|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product Search of Who Saw Also Saw

<a id="opIdProductSearchWhoSawAlsoSaw"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/crossselling/whosawalsosaw/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/crossselling/whosawalsosaw/{productId}`

Retrieves general information about other related products that the users also saw.

<h3 id="get-product-search-of-who-saw-also-saw-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|integer|true|Product unique identifier.|

> Example responses

> 200 Response

```json
[
  {
    "Alcool": [
      "Percentual"
    ],
    "Ale": [
      "1"
    ],
    "Percentual": [
      "4,9"
    ],
    "Percentuals": [
      "4,9"
    ],
    "Teste da Api2": [
      "Teste de Api",
      "Ale"
    ],
    "Teste de Api": [
      "a"
    ],
    "Total": [
      "Percentuals",
      "Percentual"
    ],
    "allSpecifications": [
      "Percentuals",
      "Percentual",
      "Teste de Api",
      "Ale"
    ],
    "allSpecificationsGroups": [
      "Total",
      "Teste da Api2"
    ],
    "brand": "Hoegaarden",
    "brandId": 2000004,
    "brandImageUrl": "https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg",
    "categories": [
      "/Beers Beers Mesmo/"
    ],
    "categoriesIds": [
      "/1/"
    ],
    "categoryId": "1",
    "clusterHighlights": {
      "138": "teste2"
    },
    "description": "",
    "items": [
      {
        "Videos": [],
        "complementName": "",
        "ean": "",
        "estimatedDateArrival": null,
        "images": [
          {
            "imageId": "155489",
            "imageLabel": "",
            "imageLastModified": "2020-10-07T12:49:27.5800000Z",
            "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
            "imageText": "hoegaarden-kit",
            "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000"
          }
        ],
        "isKit": true,
        "itemId": "310118469",
        "kitItems": [
          {
            "amount": 6,
            "itemId": "310118466"
          }
        ],
        "measurementUnit": "un",
        "modalType": null,
        "name": "Kit com 6",
        "nameComplete": "Kit de Hoegaarden Kit com 6",
        "referenceId": [
          {
            "Key": "RefId",
            "Value": "000806"
          }
        ],
        "sellers": [
          {
            "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
            "commertialOffer": {
              "AvailableQuantity": 16,
              "BuyTogether": [],
              "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
              "DeliverySlaSamples": [
                {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              ],
              "DeliverySlaSamplesPerRegion": {
                "0": {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              },
              "DiscountHighLight": [],
              "GetInfoErrorMessage": null,
              "GiftSkuIds": [],
              "Installments": [
                {
                  "InterestRate": 0,
                  "Name": "Visa à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 2 vezes sem juros",
                  "NumberOfInstallments": 2,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 21
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 3 vezes sem juros",
                  "NumberOfInstallments": 3,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 14
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 4 vezes sem juros",
                  "NumberOfInstallments": 4,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 10.5
                },
                {
                  "InterestRate": 0,
                  "Name": "Promissory à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "promissoryPaymentGroup",
                  "PaymentSystemName": "Promissory",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                }
              ],
              "IsAvailable": true,
              "ItemMetadataAttachment": [],
              "ListPrice": 42,
              "PaymentOptions": {
                "availableAccounts": [],
                "availableTokens": [],
                "giftCardMessages": [],
                "giftCards": [],
                "installmentOptions": [
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      },
                      {
                        "count": 2,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 2,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 2100
                          }
                        ],
                        "total": 4200,
                        "value": 2100
                      },
                      {
                        "count": 3,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 3,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1400
                          }
                        ],
                        "total": 4200,
                        "value": 1400
                      },
                      {
                        "count": 4,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 4,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1050
                          }
                        ],
                        "total": 4200,
                        "value": 1050
                      }
                    ],
                    "paymentGroupName": "creditCardPaymentGroup",
                    "paymentName": "Visa",
                    "paymentSystem": "2",
                    "value": 4200
                  },
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      }
                    ],
                    "paymentGroupName": "promissoryPaymentGroup",
                    "paymentName": "Promissory",
                    "paymentSystem": "17",
                    "value": 4200
                  }
                ],
                "paymentSystems": [
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "promissoryPaymentGroup",
                    "id": 17,
                    "isCustom": false,
                    "name": "Promissory",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "17",
                    "template": "promissoryPaymentGroup-template",
                    "validator": null
                  },
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "creditCardPaymentGroup",
                    "id": 2,
                    "isCustom": false,
                    "name": "Visa",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "2",
                    "template": "creditCardPaymentGroup-template",
                    "validator": null
                  }
                ],
                "payments": []
              },
              "Price": 42,
              "PriceValidUntil": "4000-01-01T03:00:00Z",
              "PriceWithoutDiscount": 42,
              "RewardValue": 0,
              "SaleChannel": 0,
              "Tax": 0,
              "Teasers": []
            },
            "sellerDefault": true,
            "sellerId": "1",
            "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE"
          }
        ],
        "unitMultiplier": 1
      }
    ],
    "link": "https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p",
    "linkText": "kit-6-cerveja-hoegaarden",
    "metaTagDescription": "",
    "productClusters": {
      "138": "teste2",
      "143": "NaoPesquisavel",
      "146": "colecaotestesubcategoria",
      "161": "merch_import_test1"
    },
    "productId": "35",
    "productName": "Kit de Hoegaarden",
    "productReference": "000806",
    "productReferenceCode": null,
    "productTitle": "",
    "releaseDate": "2020-10-07T00:00:00",
    "searchableClusters": {
      "138": "teste2"
    }
  }
]
```

<h3 id="get-product-search-of-who-saw-also-saw-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-search-of-who-saw-also-saw-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» allSpecifications|[string]|true|none|Array of the product's specifications.|
|» allSpecificationsGroups|[string]|true|none|Array of the product's specifications groups.|
|» brand|string|true|none|Brand name.|
|» brandId|integer|true|none|Product brand ID.|
|» brandImageUrl|string|true|none|Product's brand image URL.|
|» categories|[object]|true|none|Array of the product's categories URLs.|
|» categoriesIds|[object]|true|none|Array of the product's categories IDs.|
|» categoryId|string|true|none|Product category ID.|
|» clusterHighlights|object|true|none|Cluster highlight ID and name.|
|» description|string \| null|true|none|Description of the main information related to the product. A simple and easy to understand summary for the customer.|
|» items|[object]|true|none|Array containing the product SKU general information.|
|» » Videos|[object]|true|none|Videos.|
|» » complementName|string|true|none|SKU complement name.|
|» » ean|string|true|none|SKU unique identification code (barcode), accepts up to 13 numerical characters.|
|» » estimatedDateArrival|string \| null|true|none|Estimated date arrival.|
|» » images|[object]|true|none|Array of information about the SKU image.|
|» » » imageId|string|true|none|Image ID.|
|» » » imageLabel|string|true|none|Image label.|
|» » » imageLastModified|string|true|none|Date and time of the last update of the image.|
|» » » imageTag|string|true|none|Image tag.|
|» » » imageText|string \| null|true|none|Image text.|
|» » » imageUrl|string|true|none|Image URL.|
|» » isKit|boolean|true|none|If the SKU is part of a kit.|
|» » itemId|string|true|none|SKU ID.|
|» » kitItems|[object]|true|none|Array with information of SKUs components from a Kit.|
|» » » amount|integer|true|none|Amount of the SKU component in the kit.|
|» » » itemId|string|true|none|SKU kit component ID.|
|» » measurementUnit|string|true|none|Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.|
|» » modalType|string \| null|true|none|Modal Type.|
|» » name|string|true|none|SKU name.|
|» » nameComplete|string|true|none|SKU complete name.|
|» » referenceId|[object]|true|none|Reference code ID.|
|» » » Key|string|true|none|Reference Code.|
|» » » Value|string|true|none|Unique reference code used internally for organizational purposes.|
|» » sellers|[object]|true|none|Array of SKU sellers.|
|» » » addToCartLink|string|true|none|URL to add the product to the cart.|
|» » » commertialOffer|object|true|none|AKA Commertial Condition.|
|» » » » AvailableQuantity|integer|true|none|Use the `IsAvailable` field instead.|
|» » » » BuyTogether|[object]|true|none|Array of other products that can be bought together with the product in question.|
|» » » » CacheVersionUsedToCallCheckout|string|true|none|Cache version used to call checkout.|
|» » » » DeliverySlaSamples|[object]|true|none|Delivery SLA samples.|
|» » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » Region|string \| null|true|none|Region.|
|» » » » DeliverySlaSamplesPerRegion|object|true|none|Delivery SLA samples per region.|
|» » » » » 0|object|false|none|Delivery SLA ID.|
|» » » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » » Region|string \| null|true|none|Region.|
|» » » » DiscountHighLight|[object]|true|none|Discount hightlight.|
|» » » » GetInfoErrorMessage|string \| null|true|none|Get info error message.|
|» » » » GiftSkuIds|[object]|true|none|Array of SKU gifts IDs.|
|» » » » Installments|[object]|true|none|Installments options.|
|» » » » » InterestRate|number|true|none|Interest rate of the installment.|
|» » » » » Name|string|true|none|Name of the installment.|
|» » » » » NumberOfInstallments|integer|true|none|Number of the installment.|
|» » » » » PaymentSystemGroupName|string|true|none|Payment system group name of the installment.|
|» » » » » PaymentSystemName|string|true|none|Payment system name of the installment.|
|» » » » » TotalValuePlusInterestRate|number|true|none|Total value plus interest rate of the installment.|
|» » » » » Value|number|true|none|Value of the installment.|
|» » » » IsAvailable|boolean|true|none|If the product is available or not.|
|» » » » ItemMetadataAttachment|[object]|true|none|Item metadata attachment.|
|» » » » ListPrice|number|true|none|List price of the product.|
|» » » » PaymentOptions|object|true|none|Payment options.|
|» » » » » availableAccounts|[object]|true|none|Available accounts.|
|» » » » » availableTokens|[object]|true|none|Available tokens.|
|» » » » » giftCardMessages|[object]|true|none|GiftCardMessages.|
|» » » » » giftCards|[object]|true|none|GiftCards.|
|» » » » » installmentOptions|[object]|true|none|installment options.|
|» » » » » » bin|string \| null|true|none|Bin.|
|» » » » » » installments|[object]|true|none|Installments.|
|» » » » » » » count|integer|true|none|Count.|
|» » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » sellerMerchantInstallments|[object]|true|none|Seller merchant installments.|
|» » » » » » » » count|integer|true|none|Count.|
|» » » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » » id|string|true|none|ID.|
|» » » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » » total|integer|true|none|Total.|
|» » » » » » » » value|integer|true|none|Value.|
|» » » » » » » total|integer|true|none|Total.|
|» » » » » » » value|integer|true|none|Value.|
|» » » » » » paymentGroupName|string|true|none|Payment group name.|
|» » » » » » paymentName|string|true|none|Payment name.|
|» » » » » » paymentSystem|string|true|none|Payment system.|
|» » » » » » value|integer|true|none|Value.|
|» » » » » paymentSystems|[object]|true|none|Payment systems.|
|» » » » » » availablePayments|string \| null|true|none|Available payments.|
|» » » » » » description|string \| null|true|none|Description.|
|» » » » » » dueDate|string|true|none|Due date.|
|» » » » » » groupName|string|true|none|Group name.|
|» » » » » » id|integer|true|none|ID.|
|» » » » » » isCustom|boolean|true|none|If is custom or not.|
|» » » » » » name|string|true|none|Name.|
|» » » » » » requiresAuthentication|boolean|true|none|If requires authentication.|
|» » » » » » requiresDocument|boolean|true|none|If requires document or not.|
|» » » » » » stringId|string|true|none|String ID.|
|» » » » » » template|string|true|none|Template.|
|» » » » » » validator|string \| null|true|none|Validator.|
|» » » » » payments|[object]|true|none|Payments.|
|» » » » Price|number|true|none|Price of the product.|
|» » » » PriceValidUntil|string|true|none|Price of the product valid until a certain date.|
|» » » » PriceWithoutDiscount|number|true|none|Price of the product without discount.|
|» » » » RewardValue|number|true|none|Reward value of the product.|
|» » » » SaleChannel|integer|true|none|Trade policy which the product is contained.|
|» » » » Tax|number|true|none|Tax of the product.|
|» » » » Teasers|[object]|true|none|Teasers.|
|» » » sellerDefault|boolean|true|none|If the seller is default or not.|
|» » » sellerId|string|true|none|SKU seller ID.|
|» » » sellerName|string|true|none|SKU seller name.|
|» » unitMultiplier|number|true|none|numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.|
|» link|string|true|none|Product URL.|
|» linkText|string|true|none|Product URL.|
|» metaTagDescription|string|true|none|Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.|
|» productClusters|object|true|none|Product clusters' IDs and names.|
|» productId|string|true|none|Product unique identifier.|
|» productName|string|true|none|Product name.|
|» productReference|string|true|none|Product reference.|
|» productReferenceCode|integer \| null|true|none|Product reference ID.|
|» productTitle|string|true|none|Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.|
|» releaseDate|string|true|none|Product release date.|
|» searchableClusters|object|true|none|Searchable clusters IDs and names|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="legacy-search-api-search">Search</h1>

## Search for Products with Filter, Order and Pagination

<a id="opIdProductSearchFilteredandOrdered"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/search \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/search`

Retrieves general information about the store products. This information can be filtered and ordered by a number of options. It also can be paginated, filtered and ordered. 

## Filters  

- **Filter by full text** - `ft={searchWord}`  
E.g.: `ft=television`

- **Filter by category** - `fq=C:/{a}/{b}`  
`{a}` and `{b}` are Category IDs   
E.g.: `fq=C:/1000041/1000049/`

- **Filter by brand** - `fq=B:/{a}/{b}`  
`{a}` and `{b}` are Brand IDs
E.g.: `fq=B:/189385/189387/`

- **Filter by specification** - `fq=specificationFilter_{a}:{b}`  
`{a}` is the specification ID
`{b}` is the specification value
E.g.: To filter products where the color is Blue, find the specification ID for color. Suppose it is 123, then the query will be: `fq=specificationFilter_123:Blue`

- **Filter by price range** - `fq=P:[{a} TO {b}]`  
`{a}`  is the minimum price "from"
`{b}` is the highest price "to"  
E.g.: `fq=P:[0 TO 20]` will search products between 0.00 and 20.00.  

- **Filter by collection** - `fq=productClusterIds:{{productClusterId}}` 
`productClusterId` is the same as `collectionId`  
For more information about collections, read [Creating a product collection](https://help.vtex.com/en/tutorial/creating-a-product-collection).

- **Filter by product ID** - `fq=productId:{{productId}}`

- **Filter by SKU ID** - `fq=skuId:{{skuId}}`

- **Filter by referenceId** - `fq=alternateIds_RefId:{{referenceId}}`

- **Filter by EAN13** - `fq=alternateIds_Ean:{{ean13}}`

- **Filter by availability at a specific sales channel** - `fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}`  
`{{sc}}` is the desired sales channel  
`{{bool}}` is true ou false, 1 or 0.  
E.g.: seaching available products for the sales channel 4 would be `fq=isAvailablePerSalesChannel_4:1`

- **Filter by available at a specific seller** - `fq=sellerId:{{sellerId}}`
The search does not include White Label Sellers.

## Pagination

- **Initial item number** - `_from={{first}}`
- **Final item number** - `_to={{last}}`

>⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.

## Sorting

- **Price**  
`O=OrderByPriceDESC`  
`O=OrderByPriceASC`

- **Top Selling Products**  
`O=OrderByTopSaleDESC`

- **Best Reviews**  
`O=OrderByReviewRateDESC`

- **Name**  
`O=OrderByNameASC`  
`O=OrderByNameDESC`

- **Release Date**  
`O=OrderByReleaseDateDESC`

- **Best Discounts**  
`O=OrderByBestDiscountDESC`

- **Score**  
`O=OrderByScoreDESC`

<h3 id="search-for-products-with-filter-order-and-pagination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|_from|query|string|false|Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.|
|_to|query|string|false|Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.|
|ft|query|string|false|Filter by full text. The form is`ft={searchWord}`|
|fq|query|string|false|General filter. It can be by category (`fq=C:/{a}/{b}`), by specification (`fq=specificationFilter_{a}:{b}`),  by price range (`fq=P:[{a} TO {b}]`), by collection (`fq=productClusterIds:{{productClusterId}}`), by product ID (`fq=productId:{{productId}}`),  by SKU ID (`fq=skuId:{{skuId}}`), by Reference ID (`fq=alternateIds_RefId:{{referenceId}}`), by EAN13 (`fq=alternateIds_Ean:{{ean13}}`), by availability at a specific sales channel (`fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}`), by available at a specific seller (`fq=sellerId:{{sellerId}}`)|
|O|query|string|false|Sorting method. It can be by Price (`O=OrderByPriceDESC` or `O=OrderByPriceASC`), by Top Selling Products (`O=OrderByTopSaleDESC`), by Best Reviews (`O=OrderByReviewRateDESC`), by Name (`O=OrderByNameASC` or `O=OrderByNameDESC`), by Release Date (`O=OrderByReleaseDateDESC`), by Best Discounts (`O=OrderByBestDiscountDESC`), by Score (`O=OrderByScoreDESC`)|

> Example responses

> 200 Response

```json
[
  {
    "Alcool": [
      "Percentual"
    ],
    "Ale": [
      "1"
    ],
    "Percentual": [
      "4,9"
    ],
    "Percentuals": [
      "4,9"
    ],
    "Teste da Api2": [
      "Teste de Api",
      "Ale"
    ],
    "Teste de Api": [
      "a"
    ],
    "Total": [
      "Percentuals",
      "Percentual"
    ],
    "allSpecifications": [
      "Percentuals",
      "Percentual",
      "Teste de Api",
      "Ale"
    ],
    "allSpecificationsGroups": [
      "Total",
      "Teste da Api2"
    ],
    "brand": "Hoegaarden",
    "brandId": 2000004,
    "brandImageUrl": "https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg",
    "categories": [
      "/Beers Beers Mesmo/"
    ],
    "categoriesIds": [
      "/1/"
    ],
    "categoryId": "1",
    "clusterHighlights": {
      "138": "teste2"
    },
    "description": "",
    "items": [
      {
        "Videos": [],
        "complementName": "",
        "ean": "",
        "estimatedDateArrival": null,
        "images": [
          {
            "imageId": "155489",
            "imageLabel": "",
            "imageLastModified": "2020-10-07T12:49:27.5800000Z",
            "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
            "imageText": "hoegaarden-kit",
            "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000"
          }
        ],
        "isKit": true,
        "itemId": "310118469",
        "kitItems": [
          {
            "amount": 6,
            "itemId": "310118466"
          }
        ],
        "measurementUnit": "un",
        "modalType": null,
        "name": "Kit com 6",
        "nameComplete": "Kit de Hoegaarden Kit com 6",
        "referenceId": [
          {
            "Key": "RefId",
            "Value": "000806"
          }
        ],
        "sellers": [
          {
            "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
            "commertialOffer": {
              "AvailableQuantity": 16,
              "BuyTogether": [],
              "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
              "DeliverySlaSamples": [
                {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              ],
              "DeliverySlaSamplesPerRegion": {
                "0": {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              },
              "DiscountHighLight": [],
              "GetInfoErrorMessage": null,
              "GiftSkuIds": [],
              "Installments": [
                {
                  "InterestRate": 0,
                  "Name": "Visa à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 2 vezes sem juros",
                  "NumberOfInstallments": 2,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 21
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 3 vezes sem juros",
                  "NumberOfInstallments": 3,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 14
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 4 vezes sem juros",
                  "NumberOfInstallments": 4,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 10.5
                },
                {
                  "InterestRate": 0,
                  "Name": "Promissory à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "promissoryPaymentGroup",
                  "PaymentSystemName": "Promissory",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                }
              ],
              "IsAvailable": true,
              "ItemMetadataAttachment": [],
              "ListPrice": 42,
              "PaymentOptions": {
                "availableAccounts": [],
                "availableTokens": [],
                "giftCardMessages": [],
                "giftCards": [],
                "installmentOptions": [
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      },
                      {
                        "count": 2,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 2,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 2100
                          }
                        ],
                        "total": 4200,
                        "value": 2100
                      },
                      {
                        "count": 3,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 3,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1400
                          }
                        ],
                        "total": 4200,
                        "value": 1400
                      },
                      {
                        "count": 4,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 4,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1050
                          }
                        ],
                        "total": 4200,
                        "value": 1050
                      }
                    ],
                    "paymentGroupName": "creditCardPaymentGroup",
                    "paymentName": "Visa",
                    "paymentSystem": "2",
                    "value": 4200
                  },
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      }
                    ],
                    "paymentGroupName": "promissoryPaymentGroup",
                    "paymentName": "Promissory",
                    "paymentSystem": "17",
                    "value": 4200
                  }
                ],
                "paymentSystems": [
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "promissoryPaymentGroup",
                    "id": 17,
                    "isCustom": false,
                    "name": "Promissory",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "17",
                    "template": "promissoryPaymentGroup-template",
                    "validator": null
                  },
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "creditCardPaymentGroup",
                    "id": 2,
                    "isCustom": false,
                    "name": "Visa",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "2",
                    "template": "creditCardPaymentGroup-template",
                    "validator": null
                  }
                ],
                "payments": []
              },
              "Price": 42,
              "PriceValidUntil": "4000-01-01T03:00:00Z",
              "PriceWithoutDiscount": 42,
              "RewardValue": 0,
              "SaleChannel": 0,
              "Tax": 0,
              "Teasers": []
            },
            "sellerDefault": true,
            "sellerId": "1",
            "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE"
          }
        ],
        "unitMultiplier": 1
      }
    ],
    "link": "https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p",
    "linkText": "kit-6-cerveja-hoegaarden",
    "metaTagDescription": "",
    "productClusters": {
      "138": "teste2",
      "143": "NaoPesquisavel",
      "146": "colecaotestesubcategoria",
      "161": "merch_import_test1"
    },
    "productId": "35",
    "productName": "Kit de Hoegaarden",
    "productReference": "000806",
    "productReferenceCode": null,
    "productTitle": "",
    "releaseDate": "2020-10-07T00:00:00",
    "searchableClusters": {
      "138": "teste2"
    }
  }
]
```

<h3 id="search-for-products-with-filter-order-and-pagination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-for-products-with-filter-order-and-pagination-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» allSpecifications|[string]|true|none|Array of the product's specifications.|
|» allSpecificationsGroups|[string]|true|none|Array of the product's specifications groups.|
|» brand|string|true|none|Brand name.|
|» brandId|integer|true|none|Product brand ID.|
|» brandImageUrl|string|true|none|Product's brand image URL.|
|» categories|[object]|true|none|Array of the product's categories URLs.|
|» categoriesIds|[object]|true|none|Array of the product's categories IDs.|
|» categoryId|string|true|none|Product category ID.|
|» clusterHighlights|object|true|none|Cluster highlight ID and name.|
|» description|string \| null|true|none|Description of the main information related to the product. A simple and easy to understand summary for the customer.|
|» items|[object]|true|none|Array containing the product SKU general information.|
|» » Videos|[object]|true|none|Videos.|
|» » complementName|string|true|none|SKU complement name.|
|» » ean|string|true|none|SKU unique identification code (barcode), accepts up to 13 numerical characters.|
|» » estimatedDateArrival|string \| null|true|none|Estimated date arrival.|
|» » images|[object]|true|none|Array of information about the SKU image.|
|» » » imageId|string|true|none|Image ID.|
|» » » imageLabel|string|true|none|Image label.|
|» » » imageLastModified|string|true|none|Date and time of the last update of the image.|
|» » » imageTag|string|true|none|Image tag.|
|» » » imageText|string \| null|true|none|Image text.|
|» » » imageUrl|string|true|none|Image URL.|
|» » isKit|boolean|true|none|If the SKU is part of a kit.|
|» » itemId|string|true|none|SKU ID.|
|» » kitItems|[object]|true|none|Array with information of SKUs components from a Kit.|
|» » » amount|integer|true|none|Amount of the SKU component in the kit.|
|» » » itemId|string|true|none|SKU kit component ID.|
|» » measurementUnit|string|true|none|Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.|
|» » modalType|string \| null|true|none|Modal Type.|
|» » name|string|true|none|SKU name.|
|» » nameComplete|string|true|none|SKU complete name.|
|» » referenceId|[object]|true|none|Reference code ID.|
|» » » Key|string|true|none|Reference Code.|
|» » » Value|string|true|none|Unique reference code used internally for organizational purposes.|
|» » sellers|[object]|true|none|Array of SKU sellers.|
|» » » addToCartLink|string|true|none|URL to add the product to the cart.|
|» » » commertialOffer|object|true|none|AKA Commertial Condition.|
|» » » » AvailableQuantity|integer|true|none|Use the `IsAvailable` field instead.|
|» » » » BuyTogether|[object]|true|none|Array of other products that can be bought together with the product in question.|
|» » » » CacheVersionUsedToCallCheckout|string|true|none|Cache version used to call checkout.|
|» » » » DeliverySlaSamples|[object]|true|none|Delivery SLA samples.|
|» » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » Region|string \| null|true|none|Region.|
|» » » » DeliverySlaSamplesPerRegion|object|true|none|Delivery SLA samples per region.|
|» » » » » 0|object|false|none|Delivery SLA ID.|
|» » » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » » Region|string \| null|true|none|Region.|
|» » » » DiscountHighLight|[object]|true|none|Discount hightlight.|
|» » » » GetInfoErrorMessage|string \| null|true|none|Get info error message.|
|» » » » GiftSkuIds|[object]|true|none|Array of SKU gifts IDs.|
|» » » » Installments|[object]|true|none|Installments options.|
|» » » » » InterestRate|number|true|none|Interest rate of the installment.|
|» » » » » Name|string|true|none|Name of the installment.|
|» » » » » NumberOfInstallments|integer|true|none|Number of the installment.|
|» » » » » PaymentSystemGroupName|string|true|none|Payment system group name of the installment.|
|» » » » » PaymentSystemName|string|true|none|Payment system name of the installment.|
|» » » » » TotalValuePlusInterestRate|number|true|none|Total value plus interest rate of the installment.|
|» » » » » Value|number|true|none|Value of the installment.|
|» » » » IsAvailable|boolean|true|none|If the product is available or not.|
|» » » » ItemMetadataAttachment|[object]|true|none|Item metadata attachment.|
|» » » » ListPrice|number|true|none|List price of the product.|
|» » » » PaymentOptions|object|true|none|Payment options.|
|» » » » » availableAccounts|[object]|true|none|Available accounts.|
|» » » » » availableTokens|[object]|true|none|Available tokens.|
|» » » » » giftCardMessages|[object]|true|none|GiftCardMessages.|
|» » » » » giftCards|[object]|true|none|GiftCards.|
|» » » » » installmentOptions|[object]|true|none|installment options.|
|» » » » » » bin|string \| null|true|none|Bin.|
|» » » » » » installments|[object]|true|none|Installments.|
|» » » » » » » count|integer|true|none|Count.|
|» » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » sellerMerchantInstallments|[object]|true|none|Seller merchant installments.|
|» » » » » » » » count|integer|true|none|Count.|
|» » » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » » id|string|true|none|ID.|
|» » » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » » total|integer|true|none|Total.|
|» » » » » » » » value|integer|true|none|Value.|
|» » » » » » » total|integer|true|none|Total.|
|» » » » » » » value|integer|true|none|Value.|
|» » » » » » paymentGroupName|string|true|none|Payment group name.|
|» » » » » » paymentName|string|true|none|Payment name.|
|» » » » » » paymentSystem|string|true|none|Payment system.|
|» » » » » » value|integer|true|none|Value.|
|» » » » » paymentSystems|[object]|true|none|Payment systems.|
|» » » » » » availablePayments|string \| null|true|none|Available payments.|
|» » » » » » description|string \| null|true|none|Description.|
|» » » » » » dueDate|string|true|none|Due date.|
|» » » » » » groupName|string|true|none|Group name.|
|» » » » » » id|integer|true|none|ID.|
|» » » » » » isCustom|boolean|true|none|If is custom or not.|
|» » » » » » name|string|true|none|Name.|
|» » » » » » requiresAuthentication|boolean|true|none|If requires authentication.|
|» » » » » » requiresDocument|boolean|true|none|If requires document or not.|
|» » » » » » stringId|string|true|none|String ID.|
|» » » » » » template|string|true|none|Template.|
|» » » » » » validator|string \| null|true|none|Validator.|
|» » » » » payments|[object]|true|none|Payments.|
|» » » » Price|number|true|none|Price of the product.|
|» » » » PriceValidUntil|string|true|none|Price of the product valid until a certain date.|
|» » » » PriceWithoutDiscount|number|true|none|Price of the product without discount.|
|» » » » RewardValue|number|true|none|Reward value of the product.|
|» » » » SaleChannel|integer|true|none|Trade policy which the product is contained.|
|» » » » Tax|number|true|none|Tax of the product.|
|» » » » Teasers|[object]|true|none|Teasers.|
|» » » sellerDefault|boolean|true|none|If the seller is default or not.|
|» » » sellerId|string|true|none|SKU seller ID.|
|» » » sellerName|string|true|none|SKU seller name.|
|» » unitMultiplier|number|true|none|numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.|
|» link|string|true|none|Product URL.|
|» linkText|string|true|none|Product URL.|
|» metaTagDescription|string|true|none|Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.|
|» productClusters|object|true|none|Product clusters' IDs and names.|
|» productId|string|true|none|Product unique identifier.|
|» productName|string|true|none|Product name.|
|» productReference|string|true|none|Product reference.|
|» productReferenceCode|integer \| null|true|none|Product reference ID.|
|» productTitle|string|true|none|Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.|
|» releaseDate|string|true|none|Product release date.|
|» searchableClusters|object|true|none|Searchable clusters IDs and names|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Search Product by Product URL

<a id="opIdSearchbyproducturl"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/search/blue-shirt/p \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/search/{product-text-link}/p`

Retrieves general information about the product of the URL you searched for.

<h3 id="search-product-by-product-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|product-text-link|path|string|true|Product URL|

> Example responses

> 200 Response

```json
[
  {
    "Alcool": [
      "Percentual"
    ],
    "Ale": [
      "1"
    ],
    "Percentual": [
      "4,9"
    ],
    "Percentuals": [
      "4,9"
    ],
    "Teste da Api2": [
      "Teste de Api",
      "Ale"
    ],
    "Teste de Api": [
      "a"
    ],
    "Total": [
      "Percentuals",
      "Percentual"
    ],
    "allSpecifications": [
      "Percentuals",
      "Percentual",
      "Teste de Api",
      "Ale"
    ],
    "allSpecificationsGroups": [
      "Total",
      "Teste da Api2"
    ],
    "brand": "Hoegaarden",
    "brandId": 2000004,
    "brandImageUrl": "https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg",
    "categories": [
      "/Beers Beers Mesmo/"
    ],
    "categoriesIds": [
      "/1/"
    ],
    "categoryId": "1",
    "clusterHighlights": {
      "138": "teste2"
    },
    "description": "",
    "items": [
      {
        "Videos": [],
        "complementName": "",
        "ean": "",
        "estimatedDateArrival": null,
        "images": [
          {
            "imageId": "155489",
            "imageLabel": "",
            "imageLastModified": "2020-10-07T12:49:27.5800000Z",
            "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
            "imageText": "hoegaarden-kit",
            "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000"
          }
        ],
        "isKit": true,
        "itemId": "310118469",
        "kitItems": [
          {
            "amount": 6,
            "itemId": "310118466"
          }
        ],
        "measurementUnit": "un",
        "modalType": null,
        "name": "Kit com 6",
        "nameComplete": "Kit de Hoegaarden Kit com 6",
        "referenceId": [
          {
            "Key": "RefId",
            "Value": "000806"
          }
        ],
        "sellers": [
          {
            "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
            "commertialOffer": {
              "AvailableQuantity": 16,
              "BuyTogether": [],
              "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
              "DeliverySlaSamples": [
                {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              ],
              "DeliverySlaSamplesPerRegion": {
                "0": {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              },
              "DiscountHighLight": [],
              "GetInfoErrorMessage": null,
              "GiftSkuIds": [],
              "Installments": [
                {
                  "InterestRate": 0,
                  "Name": "Visa à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 2 vezes sem juros",
                  "NumberOfInstallments": 2,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 21
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 3 vezes sem juros",
                  "NumberOfInstallments": 3,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 14
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 4 vezes sem juros",
                  "NumberOfInstallments": 4,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 10.5
                },
                {
                  "InterestRate": 0,
                  "Name": "Promissory à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "promissoryPaymentGroup",
                  "PaymentSystemName": "Promissory",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                }
              ],
              "IsAvailable": true,
              "ItemMetadataAttachment": [],
              "ListPrice": 42,
              "PaymentOptions": {
                "availableAccounts": [],
                "availableTokens": [],
                "giftCardMessages": [],
                "giftCards": [],
                "installmentOptions": [
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      },
                      {
                        "count": 2,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 2,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 2100
                          }
                        ],
                        "total": 4200,
                        "value": 2100
                      },
                      {
                        "count": 3,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 3,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1400
                          }
                        ],
                        "total": 4200,
                        "value": 1400
                      },
                      {
                        "count": 4,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 4,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1050
                          }
                        ],
                        "total": 4200,
                        "value": 1050
                      }
                    ],
                    "paymentGroupName": "creditCardPaymentGroup",
                    "paymentName": "Visa",
                    "paymentSystem": "2",
                    "value": 4200
                  },
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      }
                    ],
                    "paymentGroupName": "promissoryPaymentGroup",
                    "paymentName": "Promissory",
                    "paymentSystem": "17",
                    "value": 4200
                  }
                ],
                "paymentSystems": [
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "promissoryPaymentGroup",
                    "id": 17,
                    "isCustom": false,
                    "name": "Promissory",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "17",
                    "template": "promissoryPaymentGroup-template",
                    "validator": null
                  },
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "creditCardPaymentGroup",
                    "id": 2,
                    "isCustom": false,
                    "name": "Visa",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "2",
                    "template": "creditCardPaymentGroup-template",
                    "validator": null
                  }
                ],
                "payments": []
              },
              "Price": 42,
              "PriceValidUntil": "4000-01-01T03:00:00Z",
              "PriceWithoutDiscount": 42,
              "RewardValue": 0,
              "SaleChannel": 0,
              "Tax": 0,
              "Teasers": []
            },
            "sellerDefault": true,
            "sellerId": "1",
            "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE"
          }
        ],
        "unitMultiplier": 1
      }
    ],
    "link": "https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p",
    "linkText": "kit-6-cerveja-hoegaarden",
    "metaTagDescription": "",
    "productClusters": {
      "138": "teste2",
      "143": "NaoPesquisavel",
      "146": "colecaotestesubcategoria",
      "161": "merch_import_test1"
    },
    "productId": "35",
    "productName": "Kit de Hoegaarden",
    "productReference": "000806",
    "productReferenceCode": null,
    "productTitle": "",
    "releaseDate": "2020-10-07T00:00:00",
    "searchableClusters": {
      "138": "teste2"
    }
  }
]
```

<h3 id="search-product-by-product-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="search-product-by-product-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» allSpecifications|[string]|true|none|Array of the product's specifications.|
|» allSpecificationsGroups|[string]|true|none|Array of the product's specifications groups.|
|» brand|string|true|none|Brand name.|
|» brandId|integer|true|none|Product brand ID.|
|» brandImageUrl|string|true|none|Product's brand image URL.|
|» categories|[object]|true|none|Array of the product's categories URLs.|
|» categoriesIds|[object]|true|none|Array of the product's categories IDs.|
|» categoryId|string|true|none|Product category ID.|
|» clusterHighlights|object|true|none|Cluster highlight ID and name.|
|» description|string \| null|true|none|Description of the main information related to the product. A simple and easy to understand summary for the customer.|
|» items|[object]|true|none|Array containing the product SKU general information.|
|» » Videos|[object]|true|none|Videos.|
|» » complementName|string|true|none|SKU complement name.|
|» » ean|string|true|none|SKU unique identification code (barcode), accepts up to 13 numerical characters.|
|» » estimatedDateArrival|string \| null|true|none|Estimated date arrival.|
|» » images|[object]|true|none|Array of information about the SKU image.|
|» » » imageId|string|true|none|Image ID.|
|» » » imageLabel|string|true|none|Image label.|
|» » » imageLastModified|string|true|none|Date and time of the last update of the image.|
|» » » imageTag|string|true|none|Image tag.|
|» » » imageText|string \| null|true|none|Image text.|
|» » » imageUrl|string|true|none|Image URL.|
|» » isKit|boolean|true|none|If the SKU is part of a kit.|
|» » itemId|string|true|none|SKU ID.|
|» » kitItems|[object]|true|none|Array with information of SKUs components from a Kit.|
|» » » amount|integer|true|none|Amount of the SKU component in the kit.|
|» » » itemId|string|true|none|SKU kit component ID.|
|» » measurementUnit|string|true|none|Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.|
|» » modalType|string \| null|true|none|Modal Type.|
|» » name|string|true|none|SKU name.|
|» » nameComplete|string|true|none|SKU complete name.|
|» » referenceId|[object]|true|none|Reference code ID.|
|» » » Key|string|true|none|Reference Code.|
|» » » Value|string|true|none|Unique reference code used internally for organizational purposes.|
|» » sellers|[object]|true|none|Array of SKU sellers.|
|» » » addToCartLink|string|true|none|URL to add the product to the cart.|
|» » » commertialOffer|object|true|none|AKA Commertial Condition.|
|» » » » AvailableQuantity|integer|true|none|Use the `IsAvailable` field instead.|
|» » » » BuyTogether|[object]|true|none|Array of other products that can be bought together with the product in question.|
|» » » » CacheVersionUsedToCallCheckout|string|true|none|Cache version used to call checkout.|
|» » » » DeliverySlaSamples|[object]|true|none|Delivery SLA samples.|
|» » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » Region|string \| null|true|none|Region.|
|» » » » DeliverySlaSamplesPerRegion|object|true|none|Delivery SLA samples per region.|
|» » » » » 0|object|false|none|Delivery SLA ID.|
|» » » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » » Region|string \| null|true|none|Region.|
|» » » » DiscountHighLight|[object]|true|none|Discount hightlight.|
|» » » » GetInfoErrorMessage|string \| null|true|none|Get info error message.|
|» » » » GiftSkuIds|[object]|true|none|Array of SKU gifts IDs.|
|» » » » Installments|[object]|true|none|Installments options.|
|» » » » » InterestRate|number|true|none|Interest rate of the installment.|
|» » » » » Name|string|true|none|Name of the installment.|
|» » » » » NumberOfInstallments|integer|true|none|Number of the installment.|
|» » » » » PaymentSystemGroupName|string|true|none|Payment system group name of the installment.|
|» » » » » PaymentSystemName|string|true|none|Payment system name of the installment.|
|» » » » » TotalValuePlusInterestRate|number|true|none|Total value plus interest rate of the installment.|
|» » » » » Value|number|true|none|Value of the installment.|
|» » » » IsAvailable|boolean|true|none|If the product is available or not.|
|» » » » ItemMetadataAttachment|[object]|true|none|Item metadata attachment.|
|» » » » ListPrice|number|true|none|List price of the product.|
|» » » » PaymentOptions|object|true|none|Payment options.|
|» » » » » availableAccounts|[object]|true|none|Available accounts.|
|» » » » » availableTokens|[object]|true|none|Available tokens.|
|» » » » » giftCardMessages|[object]|true|none|GiftCardMessages.|
|» » » » » giftCards|[object]|true|none|GiftCards.|
|» » » » » installmentOptions|[object]|true|none|installment options.|
|» » » » » » bin|string \| null|true|none|Bin.|
|» » » » » » installments|[object]|true|none|Installments.|
|» » » » » » » count|integer|true|none|Count.|
|» » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » sellerMerchantInstallments|[object]|true|none|Seller merchant installments.|
|» » » » » » » » count|integer|true|none|Count.|
|» » » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » » id|string|true|none|ID.|
|» » » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » » total|integer|true|none|Total.|
|» » » » » » » » value|integer|true|none|Value.|
|» » » » » » » total|integer|true|none|Total.|
|» » » » » » » value|integer|true|none|Value.|
|» » » » » » paymentGroupName|string|true|none|Payment group name.|
|» » » » » » paymentName|string|true|none|Payment name.|
|» » » » » » paymentSystem|string|true|none|Payment system.|
|» » » » » » value|integer|true|none|Value.|
|» » » » » paymentSystems|[object]|true|none|Payment systems.|
|» » » » » » availablePayments|string \| null|true|none|Available payments.|
|» » » » » » description|string \| null|true|none|Description.|
|» » » » » » dueDate|string|true|none|Due date.|
|» » » » » » groupName|string|true|none|Group name.|
|» » » » » » id|integer|true|none|ID.|
|» » » » » » isCustom|boolean|true|none|If is custom or not.|
|» » » » » » name|string|true|none|Name.|
|» » » » » » requiresAuthentication|boolean|true|none|If requires authentication.|
|» » » » » » requiresDocument|boolean|true|none|If requires document or not.|
|» » » » » » stringId|string|true|none|String ID.|
|» » » » » » template|string|true|none|Template.|
|» » » » » » validator|string \| null|true|none|Validator.|
|» » » » » payments|[object]|true|none|Payments.|
|» » » » Price|number|true|none|Price of the product.|
|» » » » PriceValidUntil|string|true|none|Price of the product valid until a certain date.|
|» » » » PriceWithoutDiscount|number|true|none|Price of the product without discount.|
|» » » » RewardValue|number|true|none|Reward value of the product.|
|» » » » SaleChannel|integer|true|none|Trade policy which the product is contained.|
|» » » » Tax|number|true|none|Tax of the product.|
|» » » » Teasers|[object]|true|none|Teasers.|
|» » » sellerDefault|boolean|true|none|If the seller is default or not.|
|» » » sellerId|string|true|none|SKU seller ID.|
|» » » sellerName|string|true|none|SKU seller name.|
|» » unitMultiplier|number|true|none|numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.|
|» link|string|true|none|Product URL.|
|» linkText|string|true|none|Product URL.|
|» metaTagDescription|string|true|none|Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.|
|» productClusters|object|true|none|Product clusters' IDs and names.|
|» productId|string|true|none|Product unique identifier.|
|» productName|string|true|none|Product name.|
|» productReference|string|true|none|Product reference.|
|» productReferenceCode|integer \| null|true|none|Product reference ID.|
|» productTitle|string|true|none|Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.|
|» releaseDate|string|true|none|Product release date.|
|» searchableClusters|object|true|none|Searchable clusters IDs and names|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Search for Products

<a id="opIdProductSearch"></a>

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/search/jacket \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/search/{search}`

Retrieves general information about the products related to the term searched. 
This is the main search used by the store. The user can type anything to be searched.  

For example, if they search for a "decanter", this is the URL: `https://{{accountName}}.{{environment}}.com.br/api/catalog_system/pub/products/search/decanter`. 

Note that maybe the response can be HTTP 200 or 206, 206 means that it's a partial content response.

If it is a 206 take a look at the Headers, will be an entry called resources. E.g.: resources → 0-9/19. This means that the response is showing items from 0 to 9, 10 items, but there were 19 items found. See more information at the paging route example.

<h3 id="search-for-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|search|path|string|true|Term used to search products|

> Example responses

> 200 Response

```json
[
  {
    "Alcool": [
      "Percentual"
    ],
    "Ale": [
      "1"
    ],
    "Percentual": [
      "4,9"
    ],
    "Percentuals": [
      "4,9"
    ],
    "Teste da Api2": [
      "Teste de Api",
      "Ale"
    ],
    "Teste de Api": [
      "a"
    ],
    "Total": [
      "Percentuals",
      "Percentual"
    ],
    "allSpecifications": [
      "Percentuals",
      "Percentual",
      "Teste de Api",
      "Ale"
    ],
    "allSpecificationsGroups": [
      "Total",
      "Teste da Api2"
    ],
    "brand": "Hoegaarden",
    "brandId": 2000004,
    "brandImageUrl": "https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg",
    "categories": [
      "/Beers Beers Mesmo/"
    ],
    "categoriesIds": [
      "/1/"
    ],
    "categoryId": "1",
    "clusterHighlights": {
      "138": "teste2"
    },
    "description": "",
    "items": [
      {
        "Videos": [],
        "complementName": "",
        "ean": "",
        "estimatedDateArrival": null,
        "images": [
          {
            "imageId": "155489",
            "imageLabel": "",
            "imageLastModified": "2020-10-07T12:49:27.5800000Z",
            "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
            "imageText": "hoegaarden-kit",
            "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000"
          }
        ],
        "isKit": true,
        "itemId": "310118469",
        "kitItems": [
          {
            "amount": 6,
            "itemId": "310118466"
          }
        ],
        "measurementUnit": "un",
        "modalType": null,
        "name": "Kit com 6",
        "nameComplete": "Kit de Hoegaarden Kit com 6",
        "referenceId": [
          {
            "Key": "RefId",
            "Value": "000806"
          }
        ],
        "sellers": [
          {
            "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
            "commertialOffer": {
              "AvailableQuantity": 16,
              "BuyTogether": [],
              "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
              "DeliverySlaSamples": [
                {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              ],
              "DeliverySlaSamplesPerRegion": {
                "0": {
                  "DeliverySlaPerTypes": [],
                  "Region": null
                }
              },
              "DiscountHighLight": [],
              "GetInfoErrorMessage": null,
              "GiftSkuIds": [],
              "Installments": [
                {
                  "InterestRate": 0,
                  "Name": "Visa à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 2 vezes sem juros",
                  "NumberOfInstallments": 2,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 21
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 3 vezes sem juros",
                  "NumberOfInstallments": 3,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 14
                },
                {
                  "InterestRate": 0,
                  "Name": "Visa 4 vezes sem juros",
                  "NumberOfInstallments": 4,
                  "PaymentSystemGroupName": "creditCardPaymentGroup",
                  "PaymentSystemName": "Visa",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 10.5
                },
                {
                  "InterestRate": 0,
                  "Name": "Promissory à vista",
                  "NumberOfInstallments": 1,
                  "PaymentSystemGroupName": "promissoryPaymentGroup",
                  "PaymentSystemName": "Promissory",
                  "TotalValuePlusInterestRate": 42,
                  "Value": 42
                }
              ],
              "IsAvailable": true,
              "ItemMetadataAttachment": [],
              "ListPrice": 42,
              "PaymentOptions": {
                "availableAccounts": [],
                "availableTokens": [],
                "giftCardMessages": [],
                "giftCards": [],
                "installmentOptions": [
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      },
                      {
                        "count": 2,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 2,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 2100
                          }
                        ],
                        "total": 4200,
                        "value": 2100
                      },
                      {
                        "count": 3,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 3,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1400
                          }
                        ],
                        "total": 4200,
                        "value": 1400
                      },
                      {
                        "count": 4,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 4,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 1050
                          }
                        ],
                        "total": 4200,
                        "value": 1050
                      }
                    ],
                    "paymentGroupName": "creditCardPaymentGroup",
                    "paymentName": "Visa",
                    "paymentSystem": "2",
                    "value": 4200
                  },
                  {
                    "bin": null,
                    "installments": [
                      {
                        "count": 1,
                        "hasInterestRate": false,
                        "interestRate": 0,
                        "sellerMerchantInstallments": [
                          {
                            "count": 1,
                            "hasInterestRate": false,
                            "id": "MERCH",
                            "interestRate": 0,
                            "total": 4200,
                            "value": 4200
                          }
                        ],
                        "total": 4200,
                        "value": 4200
                      }
                    ],
                    "paymentGroupName": "promissoryPaymentGroup",
                    "paymentName": "Promissory",
                    "paymentSystem": "17",
                    "value": 4200
                  }
                ],
                "paymentSystems": [
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "promissoryPaymentGroup",
                    "id": 17,
                    "isCustom": false,
                    "name": "Promissory",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "17",
                    "template": "promissoryPaymentGroup-template",
                    "validator": null
                  },
                  {
                    "availablePayments": null,
                    "description": null,
                    "dueDate": "2021-07-01T18:43:00.0264384Z",
                    "groupName": "creditCardPaymentGroup",
                    "id": 2,
                    "isCustom": false,
                    "name": "Visa",
                    "requiresAuthentication": false,
                    "requiresDocument": false,
                    "stringId": "2",
                    "template": "creditCardPaymentGroup-template",
                    "validator": null
                  }
                ],
                "payments": []
              },
              "Price": 42,
              "PriceValidUntil": "4000-01-01T03:00:00Z",
              "PriceWithoutDiscount": 42,
              "RewardValue": 0,
              "SaleChannel": 0,
              "Tax": 0,
              "Teasers": []
            },
            "sellerDefault": true,
            "sellerId": "1",
            "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE"
          }
        ],
        "unitMultiplier": 1
      }
    ],
    "link": "https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p",
    "linkText": "kit-6-cerveja-hoegaarden",
    "metaTagDescription": "",
    "productClusters": {
      "138": "teste2",
      "143": "NaoPesquisavel",
      "146": "colecaotestesubcategoria",
      "161": "merch_import_test1"
    },
    "productId": "35",
    "productName": "Kit de Hoegaarden",
    "productReference": "000806",
    "productReferenceCode": null,
    "productTitle": "",
    "releaseDate": "2020-10-07T00:00:00",
    "searchableClusters": {
      "138": "teste2"
    }
  }
]
```

<h3 id="search-for-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-for-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» allSpecifications|[string]|true|none|Array of the product's specifications.|
|» allSpecificationsGroups|[string]|true|none|Array of the product's specifications groups.|
|» brand|string|true|none|Brand name.|
|» brandId|integer|true|none|Product brand ID.|
|» brandImageUrl|string|true|none|Product's brand image URL.|
|» categories|[object]|true|none|Array of the product's categories URLs.|
|» categoriesIds|[object]|true|none|Array of the product's categories IDs.|
|» categoryId|string|true|none|Product category ID.|
|» clusterHighlights|object|true|none|Cluster highlight ID and name.|
|» description|string \| null|true|none|Description of the main information related to the product. A simple and easy to understand summary for the customer.|
|» items|[object]|true|none|Array containing the product SKU general information.|
|» » Videos|[object]|true|none|Videos.|
|» » complementName|string|true|none|SKU complement name.|
|» » ean|string|true|none|SKU unique identification code (barcode), accepts up to 13 numerical characters.|
|» » estimatedDateArrival|string \| null|true|none|Estimated date arrival.|
|» » images|[object]|true|none|Array of information about the SKU image.|
|» » » imageId|string|true|none|Image ID.|
|» » » imageLabel|string|true|none|Image label.|
|» » » imageLastModified|string|true|none|Date and time of the last update of the image.|
|» » » imageTag|string|true|none|Image tag.|
|» » » imageText|string \| null|true|none|Image text.|
|» » » imageUrl|string|true|none|Image URL.|
|» » isKit|boolean|true|none|If the SKU is part of a kit.|
|» » itemId|string|true|none|SKU ID.|
|» » kitItems|[object]|true|none|Array with information of SKUs components from a Kit.|
|» » » amount|integer|true|none|Amount of the SKU component in the kit.|
|» » » itemId|string|true|none|SKU kit component ID.|
|» » measurementUnit|string|true|none|Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.|
|» » modalType|string \| null|true|none|Modal Type.|
|» » name|string|true|none|SKU name.|
|» » nameComplete|string|true|none|SKU complete name.|
|» » referenceId|[object]|true|none|Reference code ID.|
|» » » Key|string|true|none|Reference Code.|
|» » » Value|string|true|none|Unique reference code used internally for organizational purposes.|
|» » sellers|[object]|true|none|Array of SKU sellers.|
|» » » addToCartLink|string|true|none|URL to add the product to the cart.|
|» » » commertialOffer|object|true|none|AKA Commertial Condition.|
|» » » » AvailableQuantity|integer|true|none|Use the `IsAvailable` field instead.|
|» » » » BuyTogether|[object]|true|none|Array of other products that can be bought together with the product in question.|
|» » » » CacheVersionUsedToCallCheckout|string|true|none|Cache version used to call checkout.|
|» » » » DeliverySlaSamples|[object]|true|none|Delivery SLA samples.|
|» » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » Region|string \| null|true|none|Region.|
|» » » » DeliverySlaSamplesPerRegion|object|true|none|Delivery SLA samples per region.|
|» » » » » 0|object|false|none|Delivery SLA ID.|
|» » » » » » DeliverySlaPerTypes|[object]|true|none|Delivery SLA per types.|
|» » » » » » Region|string \| null|true|none|Region.|
|» » » » DiscountHighLight|[object]|true|none|Discount hightlight.|
|» » » » GetInfoErrorMessage|string \| null|true|none|Get info error message.|
|» » » » GiftSkuIds|[object]|true|none|Array of SKU gifts IDs.|
|» » » » Installments|[object]|true|none|Installments options.|
|» » » » » InterestRate|number|true|none|Interest rate of the installment.|
|» » » » » Name|string|true|none|Name of the installment.|
|» » » » » NumberOfInstallments|integer|true|none|Number of the installment.|
|» » » » » PaymentSystemGroupName|string|true|none|Payment system group name of the installment.|
|» » » » » PaymentSystemName|string|true|none|Payment system name of the installment.|
|» » » » » TotalValuePlusInterestRate|number|true|none|Total value plus interest rate of the installment.|
|» » » » » Value|number|true|none|Value of the installment.|
|» » » » IsAvailable|boolean|true|none|If the product is available or not.|
|» » » » ItemMetadataAttachment|[object]|true|none|Item metadata attachment.|
|» » » » ListPrice|number|true|none|List price of the product.|
|» » » » PaymentOptions|object|true|none|Payment options.|
|» » » » » availableAccounts|[object]|true|none|Available accounts.|
|» » » » » availableTokens|[object]|true|none|Available tokens.|
|» » » » » giftCardMessages|[object]|true|none|GiftCardMessages.|
|» » » » » giftCards|[object]|true|none|GiftCards.|
|» » » » » installmentOptions|[object]|true|none|installment options.|
|» » » » » » bin|string \| null|true|none|Bin.|
|» » » » » » installments|[object]|true|none|Installments.|
|» » » » » » » count|integer|true|none|Count.|
|» » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » sellerMerchantInstallments|[object]|true|none|Seller merchant installments.|
|» » » » » » » » count|integer|true|none|Count.|
|» » » » » » » » hasInterestRate|boolean|true|none|Has interest rate.|
|» » » » » » » » id|string|true|none|ID.|
|» » » » » » » » interestRate|integer|true|none|Interest rate.|
|» » » » » » » » total|integer|true|none|Total.|
|» » » » » » » » value|integer|true|none|Value.|
|» » » » » » » total|integer|true|none|Total.|
|» » » » » » » value|integer|true|none|Value.|
|» » » » » » paymentGroupName|string|true|none|Payment group name.|
|» » » » » » paymentName|string|true|none|Payment name.|
|» » » » » » paymentSystem|string|true|none|Payment system.|
|» » » » » » value|integer|true|none|Value.|
|» » » » » paymentSystems|[object]|true|none|Payment systems.|
|» » » » » » availablePayments|string \| null|true|none|Available payments.|
|» » » » » » description|string \| null|true|none|Description.|
|» » » » » » dueDate|string|true|none|Due date.|
|» » » » » » groupName|string|true|none|Group name.|
|» » » » » » id|integer|true|none|ID.|
|» » » » » » isCustom|boolean|true|none|If is custom or not.|
|» » » » » » name|string|true|none|Name.|
|» » » » » » requiresAuthentication|boolean|true|none|If requires authentication.|
|» » » » » » requiresDocument|boolean|true|none|If requires document or not.|
|» » » » » » stringId|string|true|none|String ID.|
|» » » » » » template|string|true|none|Template.|
|» » » » » » validator|string \| null|true|none|Validator.|
|» » » » » payments|[object]|true|none|Payments.|
|» » » » Price|number|true|none|Price of the product.|
|» » » » PriceValidUntil|string|true|none|Price of the product valid until a certain date.|
|» » » » PriceWithoutDiscount|number|true|none|Price of the product without discount.|
|» » » » RewardValue|number|true|none|Reward value of the product.|
|» » » » SaleChannel|integer|true|none|Trade policy which the product is contained.|
|» » » » Tax|number|true|none|Tax of the product.|
|» » » » Teasers|[object]|true|none|Teasers.|
|» » » sellerDefault|boolean|true|none|If the seller is default or not.|
|» » » sellerId|string|true|none|SKU seller ID.|
|» » » sellerName|string|true|none|SKU seller name.|
|» » unitMultiplier|number|true|none|numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.|
|» link|string|true|none|Product URL.|
|» linkText|string|true|none|Product URL.|
|» metaTagDescription|string|true|none|Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.|
|» productClusters|object|true|none|Product clusters' IDs and names.|
|» productId|string|true|none|Product unique identifier.|
|» productName|string|true|none|Product name.|
|» productReference|string|true|none|Product reference.|
|» productReferenceCode|integer \| null|true|none|Product reference ID.|
|» productTitle|string|true|none|Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.|
|» releaseDate|string|true|none|Product release date.|
|» searchableClusters|object|true|none|Searchable clusters IDs and names|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="legacy-search-api-offers">Offers</h1>

## Search Product offers

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/offers/3 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/offers/{productId}`

Retrieves existing offers of a specific product.

<h3 id="search-product-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|string|true|Product unique number identifier.|

> Example responses

> 200 Response

```json
[
  {
    "EanId": "272727",
    "IsActive": true,
    "LastModified": "2021-07-06T19:13:45.831483",
    "MainImage": {
      "ImageId": "172754",
      "ImageLabel": null,
      "ImagePath": "~/arquivos/ids/172754-#width#-#height#/Diablo.jpg",
      "ImageTag": "<img src=\"~/arquivos/ids/172754-#width#-#height#/Diablo.jpg\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
      "ImageText": null,
      "IsMain": true,
      "IsZoomSize": false,
      "LastModified": "2021-03-24T15:37:24.877"
    },
    "Name": "Llf",
    "NameComplete": "Cacilds Llf",
    "Offers": [
      {
        "AvailableSalesChannels": null,
        "OffersPerSalesChannel": [
          {
            "AvailableQuantity": 0,
            "IsAvailable": false,
            "ListPrice": 200,
            "Price": 200,
            "PriceWithoutDiscount": 200,
            "SaleChannel": 1
          },
          {
            "AvailableQuantity": 0,
            "IsAvailable": false,
            "ListPrice": 200,
            "Price": 200,
            "PriceWithoutDiscount": 200,
            "SaleChannel": 2
          }
        ],
        "SellerId": "1",
        "SellerSkuId": "5"
      }
    ],
    "ProductId": "3",
    "RefId": "BIGHEROBML",
    "SkuId": "5"
  }
]
```

<h3 id="search-product-offers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-product-offers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» EanId|string|true|none|SKU unique identification code (barcode), accepts up to 13 numerical characters.|
|» IsActive|boolean|true|none|If the SKU is active or not.|
|» LastModified|string|true|none|Time that the offer was last modified.|
|» MainImage|object|true|none|General information of the main image of the SKU.|
|» » ImageId|string|true|none|Unique identifier of the association of the Image to the SKU.|
|» » ImageLabel|string \| null|true|none|Image Label.|
|» » ImagePath|string|true|none|Image file path.|
|» » ImageTag|string|true|none|Image HTML tag.|
|» » ImageText|string \| null|true|none|General text of the image.|
|» » IsMain|boolean|true|none|If the image is the main image of the SKU or not.|
|» » IsZoomSize|boolean|true|none|If the image has zoom applied.|
|» » LastModified|string|true|none|Time that the image was last modified.|
|» Name|string|true|none|SKU name.|
|» NameComplete|string|true|none|SKU complete name.|
|» Offers|[object]|true|none|AKA Commertial Condition.|
|» » AvailableSalesChannels|string \| null|true|none|Trade policy that the SKU in contained.|
|» » OffersPerSalesChannel|[object]|true|none|Offers per trade policy.|
|» » » AvailableQuantity|integer|true|none|SKU available quantity.|
|» » » IsAvailable|boolean|true|none|If the SKU is available or not.|
|» » » ListPrice|number|true|none|SKU list price.|
|» » » Price|number|true|none|SKU price.|
|» » » PriceWithoutDiscount|number|true|none|SKU precie without discount.|
|» » » SaleChannel|integer|true|none|SKU trade policy.|
|» » SellerId|string|true|none|Seller ID.|
|» » SellerSkuId|string|true|none|ID of the association of the SKU with the seller.|
|» ProductId|string|true|none|Product ID.|
|» RefId|string|true|none|Unique reference code used internally for organizational purposes.|
|» SkuId|string|true|none|SKU ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Search SKU offers

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/products/offers/3/sku/5 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/products/offers/{productId}/sku/{skuId}`

Retrieves existing offers of a specific SKU.

<h3 id="search-sku-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|productId|path|string|true|Product unique number identifier.|
|skuId|path|string|true|Product unique number identifier.|

> Example responses

> 200 Response

```json
[
  {
    "EanId": "272727",
    "IsActive": true,
    "LastModified": "2021-07-06T19:13:45.831483",
    "MainImage": {
      "ImageId": "172754",
      "ImageLabel": null,
      "ImagePath": "~/arquivos/ids/172754-#width#-#height#/Diablo.jpg",
      "ImageTag": "<img src=\"~/arquivos/ids/172754-#width#-#height#/Diablo.jpg\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
      "ImageText": null,
      "IsMain": true,
      "IsZoomSize": false,
      "LastModified": "2021-03-24T15:37:24.877"
    },
    "Name": "Llf",
    "NameComplete": "Cacilds Llf",
    "Offers": [
      {
        "AvailableSalesChannels": null,
        "OffersPerSalesChannel": [
          {
            "AvailableQuantity": 0,
            "IsAvailable": false,
            "ListPrice": 200,
            "Price": 200,
            "PriceWithoutDiscount": 200,
            "SaleChannel": 1
          },
          {
            "AvailableQuantity": 0,
            "IsAvailable": false,
            "ListPrice": 200,
            "Price": 200,
            "PriceWithoutDiscount": 200,
            "SaleChannel": 2
          }
        ],
        "SellerId": "1",
        "SellerSkuId": "5"
      }
    ],
    "ProductId": "3",
    "RefId": "BIGHEROBML",
    "SkuId": "5"
  }
]
```

<h3 id="search-sku-offers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-sku-offers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» EanId|string|true|none|SKU unique identification code (barcode), accepts up to 13 numerical characters.|
|» IsActive|boolean|true|none|If the SKU is active or not.|
|» LastModified|string|true|none|Time that the offer was last modified.|
|» MainImage|object|true|none|General information of the main image of the SKU.|
|» » ImageId|string|true|none|Unique identifier of the association of the Image to the SKU.|
|» » ImageLabel|string \| null|true|none|Image Label.|
|» » ImagePath|string|true|none|Image file path.|
|» » ImageTag|string|true|none|Image HTML tag.|
|» » ImageText|string \| null|true|none|General text of the image.|
|» » IsMain|boolean|true|none|If the image is the main image of the SKU or not.|
|» » IsZoomSize|boolean|true|none|If the image has zoom applied.|
|» » LastModified|string|true|none|Time that the image was last modified.|
|» Name|string|true|none|SKU name.|
|» NameComplete|string|true|none|SKU complete name.|
|» Offers|[object]|true|none|AKA Commertial Condition.|
|» » AvailableSalesChannels|string \| null|true|none|Trade policy that the SKU in contained.|
|» » OffersPerSalesChannel|[object]|true|none|Offers per trade policy.|
|» » » AvailableQuantity|integer|true|none|SKU available quantity.|
|» » » IsAvailable|boolean|true|none|If the SKU is available or not.|
|» » » ListPrice|number|true|none|SKU list price.|
|» » » Price|number|true|none|SKU price.|
|» » » PriceWithoutDiscount|number|true|none|SKU precie without discount.|
|» » » SaleChannel|integer|true|none|SKU trade policy.|
|» » SellerId|string|true|none|Seller ID.|
|» » SellerSkuId|string|true|none|ID of the association of the SKU with the seller.|
|» ProductId|string|true|none|Product ID.|
|» RefId|string|true|none|Unique reference code used internally for organizational purposes.|
|» SkuId|string|true|none|SKU ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="legacy-search-api-facets">Facets</h1>

## Get Category Facets

> Code samples

```bash
curl https://example.com/api/catalog_system/pub/facets/category/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/facets/category/{categoryId}`

Retrieves the names and IDs of the categories facets. 
>⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.

## Response body example:

```json
[
	[
    {
      "Name":"Tamanho Global",
      "Id":45
		},
		{
      "Name":"Percentuals",
      "Id":25
		}
	]
]
```

<h3 id="get-category-facets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|categoryId|path|string|true|Category unique number identifier.|
|_from|query|string|false|Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.|
|_to|query|string|false|Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.|

> Example responses

> 200 Response

```json
[
  {
    "Id": 45,
    "Name": "Tamanho Global"
  },
  {
    "Id": 25,
    "Name": "Percentuals"
  }
]
```

<h3 id="get-category-facets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-category-facets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|integer|true|none|Category's facet ID.|
|» Name|string|true|none|Category's facet name.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Search by Store Facets

<a id="opIdFacetscategory"></a>

> Code samples

```bash
curl 'https://example.com/api/catalog_system/pub/facets/search/2?map=c' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog_system/pub/facets/search/{term}`

Retrieves products by store facets. 
>⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.

## Response body example:

```json
{
	"Departments": [
  	{
    	"Quantity": 2,
      "Position": null,
      "Name": "Beers Beers Mesmo",
      "Link": "/Beers-Beers-Mesmo/1?map=c,b",
      "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
      "Map": "c",
      "Value": "Beers-Beers-Mesmo"
     },
     {
     	"Quantity": 2,
      "Position": null,
      "Name": "Merch Integration Category ||",
      "Link": "/Merch-Integration-Category-||/1?map=c,b",
      "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
      "Map": "c",
      "Value": "Merch-Integration-Category-||"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Jogos",
      "Link": "/Jogos/1?map=c,b",
      "LinkEncoded": "/Jogos/1?map=c,b",
      "Map": "c",
      "Value": "Jogos"
     },
     {
      "Quantity": 3,
      "Position": null,
      "Name": "189",
      "Link": "/189/1?map=c,b",
      "LinkEncoded": "/189/1?map=c,b",
      "Map": "c",
      "Value": "189"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Tests",
      "Link": "/Tests/1?map=c,b",
      "LinkEncoded": "/Tests/1?map=c,b",
      "Map": "c",
      "Value": "Tests"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Accessories",
      "Link": "/Accessories/1?map=c,b",
      "LinkEncoded": "/Accessories/1?map=c,b",
      "Map": "c",
      "Value": "Accessories"
     },
     {
      "Quantity": 2,
      "Position": null,
      "Name": "Bars",
      "Link": "/Bars/1?map=c,b",
      "LinkEncoded": "/Bars/1?map=c,b",
      "Map": "c",
      "Value": "Bars"
     },
     {
      "Quantity": 5,
      "Position": null,
      "Name": "Categoria Teste Timeout",
      "Link": "/Categoria-Teste-Timeout/1?map=c,b",
      "LinkEncoded": "/Categoria-Teste-Timeout/1?map=c,b",
      "Map": "c",
      "Value": "Categoria-Teste-Timeout"
     }
    ],
    "Brands": [
     {
      "Quantity": 2,
      "Position": null,
      "Name": "Merch XP",
      "Link": "/1/1234600/1/Merch-XP?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Merch-XP?map=c,c,b,b",
      "Map": "b",
      "Value": "Merch-XP"
     },
     {
      "Quantity": 2,
      "Position": null,
      "Name": "Zé",
      "Link": "/1/1234600/1/Ze?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Ze?map=c,c,b,b",
      "Map": "b",
      "Value": "Ze"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Odin",
      "Link": "/1/1234600/1/Odin?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Odin?map=c,c,b,b",
      "Map": "b",
      "Value": "Odin"
     },
     {
      "Quantity": 2,
      "Position": null,
      "Name": "Hoegaarden",
      "Link": "/1/1234600/1/Hoegaarden?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Hoegaarden?map=c,c,b,b",
      "Map": "b",
      "Value": "Hoegaarden"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Teste marcas",
      "Link": "/1/1234600/1/Teste-marcas?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Teste-marcas?map=c,c,b,b",
      "Map": "b",
      "Value": "Teste-marcas"
     },
     {
       "Quantity": 1,
       "Position": null,
       "Name": "Bitmap Bureau",
       "Link": "/1/1234600/1/Bitmap-Bureau?map=c,c,b,b",
       "LinkEncoded": "/1/1234600/1/Bitmap-Bureau?map=c,c,b,b",
       "Map": "b",
       "Value": "Bitmap-Bureau"
     },
      {
        "Quantity": 1,
        "Position": null,
        "Name": "Sega",
        "Link": "/1/1234600/1/Sega?map=c,c,b,b",
        "LinkEncoded": "/1/1234600/1/Sega?map=c,c,b,b",
        "Map": "b",
        "Value": "Sega"
      },
      {
        "Quantity": 3,
        "Position": null,
        "Name": "Technogym",
        "Link": "/1/1234600/1/Technogym?map=c,c,b,b",
        "LinkEncoded": "/1/1234600/1/Technogym?map=c,c,b,b",
        "Map": "b",
        "Value": "Technogym"
      },
      {
        "Quantity": 3,
        "Position": null,
        "Name": "Aptany",
        "Link": "/1/1234600/1/Aptany?map=c,c,b,b",
        "LinkEncoded": "/1/1234600/1/Aptany?map=c,c,b,b",
        "Map": "b",
        "Value": "Aptany"
      },
      {
        "Quantity": 1,
        "Position": null,
        "Name": "Tectoy",
        "Link": "/1/1234600/1/Tectoy?map=c,c,b,b",
        "LinkEncoded": "/1/1234600/1/Tectoy?map=c,c,b,b",
        "Map": "b",
        "Value": "Tectoy"
      }
    ],
      "SpecificationFilters": {},
        "CategoriesTrees": [
          {
            "Id": 1,
            "Quantity": 4,
            "Position": null,
            "Name": "Beers Beers Mesmo",
            "Link": "/Beers-Beers-Mesmo/1?map=c,b",
            "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
            "Map": "c",
            "Value": "Beers-Beers-Mesmo",
            "Children": [
              {
                "Id": 2,
                "Quantity": 1,
                "Position": null,
                "Name": "Lager Beers",
                "Link": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
                "LinkEncoded": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
                "Map": "c",
                "Value": "Lager-Beers",
                "Children": []
              }
            ]
          },
          {
            "Id": 1234571,
            "Quantity": 2,
            "Position": null,
            "Name": "Jogos",
            "Link": "/Jogos/1?map=c,b",
            "LinkEncoded": "/Jogos/1?map=c,b",
            "Map": "c",
            "Value": "Jogos",
            "Children": []
          },
          {
            "Id": 1234579,
            "Quantity": 3,
            "Position": null,
            "Name": "189",
            "Link": "/189/1?map=c,b",
            "LinkEncoded": "/189/1?map=c,b",
            "Map": "c",
            "Value": "189",
            "Children": []
          },
          {
            "Id": 1234587,
            "Quantity": 1,
            "Position": null,
            "Name": "Tests",
            "Link": "/Tests/1?map=c,b",
            "LinkEncoded": "/Tests/1?map=c,b",
            "Map": "c",
            "Value": "Tests",
            "Children": []
          },
          {
            "Id": 1234595,
            "Quantity": 1,
            "Position": null,
            "Name": "Accessories",
            "Link": "/Accessories/1?map=c,b",
            "LinkEncoded": "/Accessories/1?map=c,b",
            "Map": "c",
            "Value": "Accessories",
            "Children": [
              {
                "Id": 1234596,
                "Quantity": 1,
                "Position": null,
                "Name": "Foam rollers",
                "Link": "/Accessories/Foam-rollers/1?map=c,c,b",
                "LinkEncoded": "/Accessories/Foam-rollers/1?map=c,c,b",
                "Map": "c",
                "Value": "Foam-rollers",
                "Children": []
              }
            ]
          },
          {
            "Id": 1234597,
            "Quantity": 2,
            "Position": null,
            "Name": "Bars",
            "Link": "/Bars/1?map=c,b",
            "LinkEncoded": "/Bars/1?map=c,b",
            "Map": "c",
            "Value": "Bars",
            "Children": [
              {
                "Id": 1234598,
                "Quantity": 1,
                "Position": null,
                "Name": "Training Bars",
                "Link": "/Bars/Training-Bars/1?map=c,c,b",
                "LinkEncoded": "/Bars/Training-Bars/1?map=c,c,b",
                "Map": "c",
                "Value": "Training-Bars",
                "Children": []
              },
              {
                "Id": 1234599,
                "Quantity": 1,
                "Position": null,
                "Name": "Curl Bars",
                "Link": "/Bars/Curl-Bars/1?map=c,c,b",
                "LinkEncoded": "/Bars/Curl-Bars/1?map=c,c,b",
                "Map": "c",
                "Value": "Curl-Bars",
                "Children": []
              }
            ]
          },
          {
            "Id": 15,
            "Quantity": 1,
            "Position": null,
            "Name": "Coronas",
            "Link": "/Coronas/1?map=c,b",
            "LinkEncoded": "/Coronas/1?map=c,b",
            "Map": "c",
            "Value": "Coronas",
            "Children": [
              {
                "Id": 13,
                "Quantity": 1,
                "Position": null,
                "Name": "não tem limite!",
                "Link": "/Coronas/nao-tem-limite-/1?map=c,c,b",
                "LinkEncoded": "/Coronas/nao-tem-limite-/1?map=c,c,b",
                "Map": "c",
                "Value": "nao-tem-limite-",
                "Children": []
              }
            ]
          },
          {
            "Id": 4,
            "Quantity": 4,
            "Position": null,
            "Name": "Merch Integration Category ||",
            "Link": "/Merch-Integration-Category-||/1?map=c,b",
            "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
            "Map": "c",
            "Value": "Merch-Integration-Category-||",
            "Children": []
          }
        ],
          "PriceRanges": [],
            "Summary": {
              "Departments": {
                "DisplayedItems": 8,
                  "TotalItems": 8
              },
                "CategoriesTrees": {
                  "DisplayedItems": 13,
                    "TotalItems": 13
                },
                  "Brands": {
                    "DisplayedItems": 10,
                      "TotalItems": 10
                  },
                    "PriceRanges": {
                      "DisplayedItems": 0,
                        "TotalItems": 0
                    },
                      "SpecificationFilters": {}
            }
}
```

<h3 id="search-by-store-facets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|map|query|string|true|Mapping of the term. It can be `c` for a category, `b` for a brand, or `specificationFilter_{specificationId}` for a specification. You need to include a map for each term you are searching for in the same term's order.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|term|path|string|true|Term used for the facet's search. You can search for as much term as you want. The term can be: `categoryId`, `brandId`, `specificationId`.|
|_from|query|string|false|Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.|
|_to|query|string|false|Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.|

> Example responses

> 200 Response

```json
{
  "Brands": [
    {
      "Link": "/1/1234600/1/Merch-XP?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Merch-XP?map=c,c,b,b",
      "Map": "b",
      "Name": "Merch XP",
      "Position": null,
      "Quantity": 2,
      "Value": "Merch-XP"
    },
    {
      "Link": "/1/1234600/1/Ze?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Ze?map=c,c,b,b",
      "Map": "b",
      "Name": "Zé",
      "Position": null,
      "Quantity": 2,
      "Value": "Ze"
    },
    {
      "Link": "/1/1234600/1/Odin?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Odin?map=c,c,b,b",
      "Map": "b",
      "Name": "Odin",
      "Position": null,
      "Quantity": 1,
      "Value": "Odin"
    },
    {
      "Link": "/1/1234600/1/Hoegaarden?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Hoegaarden?map=c,c,b,b",
      "Map": "b",
      "Name": "Hoegaarden",
      "Position": null,
      "Quantity": 2,
      "Value": "Hoegaarden"
    },
    {
      "Link": "/1/1234600/1/Teste-marcas?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Teste-marcas?map=c,c,b,b",
      "Map": "b",
      "Name": "Teste marcas",
      "Position": null,
      "Quantity": 1,
      "Value": "Teste-marcas"
    },
    {
      "Link": "/1/1234600/1/Bitmap-Bureau?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Bitmap-Bureau?map=c,c,b,b",
      "Map": "b",
      "Name": "Bitmap Bureau",
      "Position": null,
      "Quantity": 1,
      "Value": "Bitmap-Bureau"
    },
    {
      "Link": "/1/1234600/1/Sega?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Sega?map=c,c,b,b",
      "Map": "b",
      "Name": "Sega",
      "Position": null,
      "Quantity": 1,
      "Value": "Sega"
    },
    {
      "Link": "/1/1234600/1/Technogym?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Technogym?map=c,c,b,b",
      "Map": "b",
      "Name": "Technogym",
      "Position": null,
      "Quantity": 3,
      "Value": "Technogym"
    },
    {
      "Link": "/1/1234600/1/Aptany?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Aptany?map=c,c,b,b",
      "Map": "b",
      "Name": "Aptany",
      "Position": null,
      "Quantity": 3,
      "Value": "Aptany"
    },
    {
      "Link": "/1/1234600/1/Tectoy?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Tectoy?map=c,c,b,b",
      "Map": "b",
      "Name": "Tectoy",
      "Position": null,
      "Quantity": 1,
      "Value": "Tectoy"
    }
  ],
  "CategoriesTrees": [
    {
      "Children": [
        {
          "Children": [],
          "Id": 2,
          "Link": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
          "LinkEncoded": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
          "Map": "c",
          "Name": "Lager Beers",
          "Position": null,
          "Quantity": 1,
          "Value": "Lager-Beers"
        }
      ],
      "Id": 1,
      "Link": "/Beers-Beers-Mesmo/1?map=c,b",
      "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
      "Map": "c",
      "Name": "Beers Beers Mesmo",
      "Position": null,
      "Quantity": 4,
      "Value": "Beers-Beers-Mesmo"
    },
    {
      "Children": [],
      "Id": 1234571,
      "Link": "/Jogos/1?map=c,b",
      "LinkEncoded": "/Jogos/1?map=c,b",
      "Map": "c",
      "Name": "Jogos",
      "Position": null,
      "Quantity": 2,
      "Value": "Jogos"
    },
    {
      "Children": [],
      "Id": 1234579,
      "Link": "/189/1?map=c,b",
      "LinkEncoded": "/189/1?map=c,b",
      "Map": "c",
      "Name": "189",
      "Position": null,
      "Quantity": 3,
      "Value": "189"
    },
    {
      "Children": [],
      "Id": 1234587,
      "Link": "/Tests/1?map=c,b",
      "LinkEncoded": "/Tests/1?map=c,b",
      "Map": "c",
      "Name": "Tests",
      "Position": null,
      "Quantity": 1,
      "Value": "Tests"
    },
    {
      "Children": [
        {
          "Children": [],
          "Id": 1234596,
          "Link": "/Accessories/Foam-rollers/1?map=c,c,b",
          "LinkEncoded": "/Accessories/Foam-rollers/1?map=c,c,b",
          "Map": "c",
          "Name": "Foam rollers",
          "Position": null,
          "Quantity": 1,
          "Value": "Foam-rollers"
        }
      ],
      "Id": 1234595,
      "Link": "/Accessories/1?map=c,b",
      "LinkEncoded": "/Accessories/1?map=c,b",
      "Map": "c",
      "Name": "Accessories",
      "Position": null,
      "Quantity": 1,
      "Value": "Accessories"
    },
    {
      "Children": [
        {
          "Children": [],
          "Id": 1234598,
          "Link": "/Bars/Training-Bars/1?map=c,c,b",
          "LinkEncoded": "/Bars/Training-Bars/1?map=c,c,b",
          "Map": "c",
          "Name": "Training Bars",
          "Position": null,
          "Quantity": 1,
          "Value": "Training-Bars"
        },
        {
          "Children": [],
          "Id": 1234599,
          "Link": "/Bars/Curl-Bars/1?map=c,c,b",
          "LinkEncoded": "/Bars/Curl-Bars/1?map=c,c,b",
          "Map": "c",
          "Name": "Curl Bars",
          "Position": null,
          "Quantity": 1,
          "Value": "Curl-Bars"
        }
      ],
      "Id": 1234597,
      "Link": "/Bars/1?map=c,b",
      "LinkEncoded": "/Bars/1?map=c,b",
      "Map": "c",
      "Name": "Bars",
      "Position": null,
      "Quantity": 2,
      "Value": "Bars"
    },
    {
      "Children": [
        {
          "Children": [],
          "Id": 13,
          "Link": "/Coronas/nao-tem-limite-/1?map=c,c,b",
          "LinkEncoded": "/Coronas/nao-tem-limite-/1?map=c,c,b",
          "Map": "c",
          "Name": "não tem limite!",
          "Position": null,
          "Quantity": 1,
          "Value": "nao-tem-limite-"
        }
      ],
      "Id": 15,
      "Link": "/Coronas/1?map=c,b",
      "LinkEncoded": "/Coronas/1?map=c,b",
      "Map": "c",
      "Name": "Coronas",
      "Position": null,
      "Quantity": 1,
      "Value": "Coronas"
    },
    {
      "Children": [],
      "Id": 4,
      "Link": "/Merch-Integration-Category-||/1?map=c,b",
      "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
      "Map": "c",
      "Name": "Merch Integration Category ||",
      "Position": null,
      "Quantity": 4,
      "Value": "Merch-Integration-Category-||"
    }
  ],
  "Departments": [
    {
      "Link": "/Beers-Beers-Mesmo/1?map=c,b",
      "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
      "Map": "c",
      "Name": "Beers Beers Mesmo",
      "Position": null,
      "Quantity": 2,
      "Value": "Beers-Beers-Mesmo"
    },
    {
      "Link": "/Merch-Integration-Category-||/1?map=c,b",
      "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
      "Map": "c",
      "Name": "Merch Integration Category ||",
      "Position": null,
      "Quantity": 2,
      "Value": "Merch-Integration-Category-||"
    },
    {
      "Link": "/Jogos/1?map=c,b",
      "LinkEncoded": "/Jogos/1?map=c,b",
      "Map": "c",
      "Name": "Jogos",
      "Position": null,
      "Quantity": 1,
      "Value": "Jogos"
    },
    {
      "Link": "/189/1?map=c,b",
      "LinkEncoded": "/189/1?map=c,b",
      "Map": "c",
      "Name": "189",
      "Position": null,
      "Quantity": 3,
      "Value": "189"
    },
    {
      "Link": "/Tests/1?map=c,b",
      "LinkEncoded": "/Tests/1?map=c,b",
      "Map": "c",
      "Name": "Tests",
      "Position": null,
      "Quantity": 1,
      "Value": "Tests"
    },
    {
      "Link": "/Accessories/1?map=c,b",
      "LinkEncoded": "/Accessories/1?map=c,b",
      "Map": "c",
      "Name": "Accessories",
      "Position": null,
      "Quantity": 1,
      "Value": "Accessories"
    },
    {
      "Link": "/Bars/1?map=c,b",
      "LinkEncoded": "/Bars/1?map=c,b",
      "Map": "c",
      "Name": "Bars",
      "Position": null,
      "Quantity": 2,
      "Value": "Bars"
    },
    {
      "Link": "/Categoria-Teste-Timeout/1?map=c,b",
      "LinkEncoded": "/Categoria-Teste-Timeout/1?map=c,b",
      "Map": "c",
      "Name": "Categoria Teste Timeout",
      "Position": null,
      "Quantity": 5,
      "Value": "Categoria-Teste-Timeout"
    }
  ],
  "PriceRanges": [],
  "SpecificationFilters": {},
  "Summary": {
    "Brands": {
      "DisplayedItems": 10,
      "TotalItems": 10
    },
    "CategoriesTrees": {
      "DisplayedItems": 13,
      "TotalItems": 13
    },
    "Departments": {
      "DisplayedItems": 8,
      "TotalItems": 8
    },
    "PriceRanges": {
      "DisplayedItems": 0,
      "TotalItems": 0
    },
    "SpecificationFilters": {}
  }
}
```

<h3 id="search-by-store-facets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-by-store-facets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Brands|[object]|true|none|Array of general information about the brands.|
|» Link|string|true|none|Link of the facet.|
|» LinkEncoded|string|true|none|Enconded link of the facet.|
|» Map|string|true|none|Mapping of the facet.|
|» Name|string|true|none|Brand name.|
|» Position|integer \| null|true|none|Position of the facet.|
|» Quantity|integer|true|none|Quantity of facets.|
|» Value|string|true|none|Value of the facet.|
|CategoriesTrees|[object]|true|none|Array of the category tree.|
|» Children|[object]|true|none|Category children.|
|» » Children|[object]|true|none|Category children.|
|» » Id|integer|true|none|Category ID.|
|» » Link|string|true|none|Link of the facet.|
|» » LinkEncoded|string|true|none|Encoded link of the facet.|
|» » Map|string|true|none|Mapping of the facet.|
|» » Name|string|true|none|Category name.|
|» » Position|integer \| null|true|none|Position of the facet.|
|» » Quantity|integer|true|none|Quantity of the facets.|
|» » Value|string|true|none|Value of the facet.|
|» Id|integer|true|none|Category ID.|
|» Link|string|true|none|Link of the facet.|
|» LinkEncoded|string|true|none|Encoded link of the facet.|
|» Map|string|true|none|Mapping of the facet.|
|» Name|string|true|none|Category name.|
|» Position|integer \| null|true|none|Position of the facet.|
|» Quantity|integer|true|none|Quantity of the facets.|
|» Value|string|true|none|Value of the facet.|
|Departments|[object]|true|none|Array of general information about the categories.|
|» Link|string|true|none|Link of the facet.|
|» LinkEncoded|string|true|none|Encoded link of the facet.|
|» Map|string|true|none|Mapping of the facet.|
|» Name|string|true|none|Category name.|
|» Position|integer \| null|true|none|Position of the facets.|
|» Quantity|integer|true|none|Quantity of facets.|
|» Value|string|true|none|Value of the facet.|
|PriceRanges|[object]|true|none|Array with general information of the price ranges.|
|SpecificationFilters|object|true|none|Object with general information of specifications.|
|Summary|object|true|none|Summary of the facets.|
|» Brands|object|true|none|Brands' quantity of displayed and total items.|
|» » DisplayedItems|integer|true|none|Quantity of displayed items.|
|» » TotalItems|integer|true|none|Quantity of total items.|
|» CategoriesTrees|object|true|none|Category tree's quantity of displayed and total items.|
|» » DisplayedItems|integer|true|none|Quantity of displayed items.|
|» » TotalItems|integer|true|none|Quantity of total items.|
|» Departments|object|true|none|Departments' quantity of displayed and total items.|
|» » DisplayedItems|integer|true|none|Quantity of displayed items.|
|» » TotalItems|integer|true|none|Quantity of total items.|
|» PriceRanges|object|true|none|Price ranges' quantity of displayed and total items.|
|» » DisplayedItems|integer|true|none|Quantity of displayed items.|
|» » TotalItems|integer|true|none|Quantity of total items.|
|» SpecificationFilters|object|true|none|Specification filters' quantity of displayed and total items.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="legacy-search-api-autocomplete">Autocomplete</h1>

## Product Search Autocomplete

<a id="opIdAutoComplete"></a>

> Code samples

```bash
curl 'https://example.com/buscaautocomplete?productNameContains=jeans' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /buscaautocomplete`

Retrieves product's information related to the searched string.
`{{searchString}} is the part of string the user is looking for.
E.g.: `ref` | `refrig` | `refrigerator`

<h3 id="product-search-autocomplete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|productNameContains|query|string|true|Part of the string that will be searched.|

> Example responses

> 200 Response

```json
{
  "itemsReturned": [
    {
      "criteria": "£Cacilds in Coronas¢/coronas/Cacilds",
      "href": "https://merch.vtexcommercestable.com.br/coronas/Cacilds",
      "items": [],
      "name": "Cacilds in Coronas",
      "thumb": "",
      "thumbUrl": null
    },
    {
      "criteria": null,
      "href": "https://merch.vtexcommercestable.com.br/bay-max-3/p",
      "items": [
        {
          "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/172754-25-25/Diablo.jpg?v=637521970448770000",
          "itemId": "5",
          "name": "Llf",
          "nameComplete": "Cacilds Llf",
          "productId": "3"
        }
      ],
      "name": "cacilds - llf",
      "thumb": "<img src=\"https://merch.vteximg.com.br/arquivos/ids/155400-25-25/image-433ec3e72d7e4b94964481e843c9dd88.jpg?v=637172099619830000\" width=\"25\" height=\"25\" alt=\"image-433ec3e72d7e4b94964481e843c9dd88\" id=\"\" />",
      "thumbUrl": "https://merch.vteximg.com.br/arquivos/ids/172754-25-25/Diablo.jpg?v=637521970448770000"
    }
  ]
}
```

<h3 id="product-search-autocomplete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="product-search-autocomplete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemsReturned|[object]|true|none|Autocomplete returned items.|
|» criteria|string \| null|true|none|Item criteria.|
|» href|string|true|none|Item URL.|
|» items|[object]|true|none|Array of products.|
|» name|string|true|none|Item name.|
|» thumb|string|true|none|Item thumbnail.|
|» thumbUrl|string \| null|true|none|Item thumbnail URL.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_AplicativosDeTV">AplicativosDeTV</h2>
<!-- backwards compatibility -->
<a id="schemaaplicativosdetv"></a>
<a id="schema_AplicativosDeTV"></a>
<a id="tocSaplicativosdetv"></a>
<a id="tocsaplicativosdetv"></a>

```json
{
  "Link": "/eletronicos/tv/Crackle?map=c,c,specificationFilter_1517",
  "Name": "Crackle",
  "Quantity": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|true|none|none|
|Name|string|true|none|none|
|Quantity|integer(int32)|true|none|none|

<h2 id="tocS_Brand">Brand</h2>
<!-- backwards compatibility -->
<a id="schemabrand"></a>
<a id="schema_Brand"></a>
<a id="tocSbrand"></a>
<a id="tocsbrand"></a>

```json
{
  "Link": "/eletronicos/tv/Philips",
  "Name": "Philips",
  "Quantity": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|true|none|none|
|Name|string|true|none|none|
|Quantity|integer(int32)|true|none|none|

<h2 id="tocS_CategoriesTree">CategoriesTree</h2>
<!-- backwards compatibility -->
<a id="schemacategoriestree"></a>
<a id="schema_CategoriesTree"></a>
<a id="tocScategoriestree"></a>
<a id="tocscategoriestree"></a>

```json
{
  "Children": [
    {
      "Children": [
        {
          "Children": [],
          "Link": "/Eletronicos/TV/TV-LED",
          "Name": "TV LED",
          "Quantity": 6
        },
        {
          "Children": [],
          "Link": "/Eletronicos/TV/Smart-TV",
          "Name": "Smart TV",
          "Quantity": 14
        }
      ],
      "Link": "/Eletronicos/TV",
      "Name": "TV",
      "Quantity": 20
    }
  ],
  "Link": "/Eletronicos",
  "Name": "Eletrônicos",
  "Quantity": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Children|[[Child](#schemachild)]|true|none|none|
|Link|string|true|none|none|
|Name|string|true|none|none|
|Quantity|integer(int32)|true|none|none|

<h2 id="tocS_Child">Child</h2>
<!-- backwards compatibility -->
<a id="schemachild"></a>
<a id="schema_Child"></a>
<a id="tocSchild"></a>
<a id="tocschild"></a>

```json
{
  "Children": [
    {
      "Children": [],
      "Link": "/Eletronicos/TV/TV-LED",
      "Name": "TV LED",
      "Quantity": 6
    },
    {
      "Children": [],
      "Link": "/Eletronicos/TV/Smart-TV",
      "Name": "Smart TV",
      "Quantity": 14
    }
  ],
  "Link": "/Eletronicos/TV",
  "Name": "TV",
  "Quantity": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Children|[[Child1](#schemachild1)]|true|none|none|
|Link|string|true|none|none|
|Name|string|true|none|none|
|Quantity|integer(int32)|true|none|none|

<h2 id="tocS_Child1">Child1</h2>
<!-- backwards compatibility -->
<a id="schemachild1"></a>
<a id="schema_Child1"></a>
<a id="tocSchild1"></a>
<a id="tocschild1"></a>

```json
{
  "Children": [],
  "Link": "/Eletronicos/TV/TV-LED",
  "Name": "TV LED",
  "Quantity": 6
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Children|[string]|true|none|none|
|Link|string|true|none|none|
|Name|string|true|none|none|
|Quantity|integer(int32)|true|none|none|

<h2 id="tocS_CommertialOffer">CommertialOffer</h2>
<!-- backwards compatibility -->
<a id="schemacommertialoffer"></a>
<a id="schema_CommertialOffer"></a>
<a id="tocScommertialoffer"></a>
<a id="tocscommertialoffer"></a>

```json
{
  "AvailableQuantity": 0,
  "BuyTogether": [
    "string"
  ],
  "CacheVersionUsedToCallCheckout": "string",
  "DeliverySlaSamples": [
    {
      "DeliverySlaPerTypes": [],
      "Region": null
    }
  ],
  "DeliverySlaSamplesPerRegion": {
    "property1": {
      "DeliverySlaPerTypes": [
        {
          "EstimatedTimeSpanToDelivery": "00:00:00",
          "Price": 4.11,
          "TypeName": "Econômica"
        },
        {
          "EstimatedTimeSpanToDelivery": "00:00:00",
          "Price": 6.5,
          "TypeName": "n2_2"
        },
        {
          "EstimatedTimeSpanToDelivery": "00:00:00",
          "Price": 6.5,
          "TypeName": "Normal"
        },
        {
          "EstimatedTimeSpanToDelivery": "00:00:00",
          "Price": 156.5,
          "TypeName": "P_T"
        }
      ],
      "Region": {
        "CountryCode": "BRA",
        "CultureInfoName": "pt-BR",
        "Id": 1,
        "IsPersisted": true,
        "IsRemoved": false,
        "Name": "Rio",
        "ZipCode": "22011050"
      }
    },
    "property2": {
      "DeliverySlaPerTypes": [
        {
          "EstimatedTimeSpanToDelivery": "00:00:00",
          "Price": 4.11,
          "TypeName": "Econômica"
        },
        {
          "EstimatedTimeSpanToDelivery": "00:00:00",
          "Price": 6.5,
          "TypeName": "n2_2"
        },
        {
          "EstimatedTimeSpanToDelivery": "00:00:00",
          "Price": 6.5,
          "TypeName": "Normal"
        },
        {
          "EstimatedTimeSpanToDelivery": "00:00:00",
          "Price": 156.5,
          "TypeName": "P_T"
        }
      ],
      "Region": {
        "CountryCode": "BRA",
        "CultureInfoName": "pt-BR",
        "Id": 1,
        "IsPersisted": true,
        "IsRemoved": false,
        "Name": "Rio",
        "ZipCode": "22011050"
      }
    }
  },
  "DiscountHighLight": [
    "string"
  ],
  "GetInfoErrorMessage": "string",
  "GiftSkuIds": [
    "string"
  ],
  "Installments": [
    {
      "InterestRate": 0,
      "Name": "American Express à vista",
      "NumberOfInstallments": 1,
      "PaymentSystemGroupName": "creditCardPaymentGroup",
      "PaymentSystemName": "American Express",
      "TotalValuePlusInterestRate": 1000,
      "Value": 1000
    }
  ],
  "ListPrice": 0,
  "Price": 0,
  "PriceValidUntil": "string",
  "Tax": 0,
  "Teasers": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailableQuantity|integer(int32)|true|none|none|
|BuyTogether|[string]|true|none|none|
|CacheVersionUsedToCallCheckout|string|true|none|none|
|DeliverySlaSamples|[[DeliverySlaSample](#schemadeliveryslasample)]|true|none|none|
|DeliverySlaSamplesPerRegion|object|true|none|none|
|DiscountHighLight|[string]|true|none|none|
|GetInfoErrorMessage|string \| null|true|none|none|
|GiftSkuIds|[string]|true|none|none|
|Installments|[[Installment](#schemainstallment)]|true|none|none|
|ListPrice|number|true|none|none|
|Price|number|true|none|none|
|PriceValidUntil|string|true|none|none|
|Tax|number|true|none|none|
|Teasers|[string]|true|none|none|

<h2 id="tocS_DeliverySlaPerType">DeliverySlaPerType</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslapertype"></a>
<a id="schema_DeliverySlaPerType"></a>
<a id="tocSdeliveryslapertype"></a>
<a id="tocsdeliveryslapertype"></a>

```json
{
  "EstimatedTimeSpanToDelivery": "00:00:00",
  "Price": 4.11,
  "TypeName": "Econômica"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimatedTimeSpanToDelivery|string|true|none|none|
|Price|number|true|none|none|
|TypeName|string|true|none|none|

<h2 id="tocS_DeliverySlaPerType2">DeliverySlaPerType2</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslapertype2"></a>
<a id="schema_DeliverySlaPerType2"></a>
<a id="tocSdeliveryslapertype2"></a>
<a id="tocsdeliveryslapertype2"></a>

```json
{
  "EstimatedTimeSpanToDelivery": "string",
  "Price": 0,
  "TypeName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimatedTimeSpanToDelivery|string|false|none|none|
|Price|number|false|none|none|
|TypeName|string|false|none|none|

<h2 id="tocS_DeliverySlaSample">DeliverySlaSample</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslasample"></a>
<a id="schema_DeliverySlaSample"></a>
<a id="tocSdeliveryslasample"></a>
<a id="tocsdeliveryslasample"></a>

```json
{
  "DeliverySlaPerTypes": [],
  "Region": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliverySlaPerTypes|[[DeliverySlaPerType2](#schemadeliveryslapertype2)]|true|none|none|
|Region|[Region2](#schemaregion2)|true|none|none|

<h2 id="tocS_Department">Department</h2>
<!-- backwards compatibility -->
<a id="schemadepartment"></a>
<a id="schema_Department"></a>
<a id="tocSdepartment"></a>
<a id="tocsdepartment"></a>

```json
{
  "Link": "/Eletro-Eletronicos",
  "Name": "Eletro-Eletronicos",
  "Quantity": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|true|none|none|
|Name|string|true|none|none|
|Quantity|integer(int32)|true|none|none|

<h2 id="tocS_Example">Example</h2>
<!-- backwards compatibility -->
<a id="schemaexample"></a>
<a id="schema_Example"></a>
<a id="tocSexample"></a>
<a id="tocsexample"></a>

```json
{
  "brand": "string",
  "categories": [
    "string"
  ],
  "description": "string",
  "items": [
    {
      "COR": [
        "string"
      ],
      "TAMANHO": [
        "string"
      ],
      "complementName": "string",
      "ean": "string",
      "images": [
        {
          "imageId": "168969",
          "imageLabel": "",
          "imageTag": "<img src=\"~/arquivos/ids/168969-#width#-#height#/geladeira.jpg\" width=\"#width#\" height=\"#height#\" alt=\"geladeira\" id=\"\" />",
          "imageText": "geladeira",
          "imageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168969/geladeira.jpg"
        }
      ],
      "itemId": "string",
      "measurementUnit": "string",
      "name": "string",
      "nameComplete": "string",
      "referenceId": [
        {
          "Key": "RefId",
          "Value": "969697"
        }
      ],
      "sellers": [
        {
          "addToCartLink": "string",
          "commertialOffer": {
            "AvailableQuantity": 0,
            "BuyTogether": [
              "string"
            ],
            "CacheVersionUsedToCallCheckout": "string",
            "DeliverySlaSamples": [
              {
                "DeliverySlaPerTypes": [],
                "Region": null
              }
            ],
            "DeliverySlaSamplesPerRegion": {
              "property1": {
                "DeliverySlaPerTypes": [
                  {
                    "EstimatedTimeSpanToDelivery": "00:00:00",
                    "Price": 4.11,
                    "TypeName": "Econômica"
                  },
                  {
                    "EstimatedTimeSpanToDelivery": "00:00:00",
                    "Price": 6.5,
                    "TypeName": "n2_2"
                  },
                  {
                    "EstimatedTimeSpanToDelivery": "00:00:00",
                    "Price": 6.5,
                    "TypeName": "Normal"
                  },
                  {
                    "EstimatedTimeSpanToDelivery": "00:00:00",
                    "Price": 156.5,
                    "TypeName": "P_T"
                  }
                ],
                "Region": {
                  "CountryCode": "BRA",
                  "CultureInfoName": "pt-BR",
                  "Id": 1,
                  "IsPersisted": true,
                  "IsRemoved": false,
                  "Name": "Rio",
                  "ZipCode": "22011050"
                }
              },
              "property2": {
                "DeliverySlaPerTypes": [
                  {
                    "EstimatedTimeSpanToDelivery": "00:00:00",
                    "Price": 4.11,
                    "TypeName": "Econômica"
                  },
                  {
                    "EstimatedTimeSpanToDelivery": "00:00:00",
                    "Price": 6.5,
                    "TypeName": "n2_2"
                  },
                  {
                    "EstimatedTimeSpanToDelivery": "00:00:00",
                    "Price": 6.5,
                    "TypeName": "Normal"
                  },
                  {
                    "EstimatedTimeSpanToDelivery": "00:00:00",
                    "Price": 156.5,
                    "TypeName": "P_T"
                  }
                ],
                "Region": {
                  "CountryCode": "BRA",
                  "CultureInfoName": "pt-BR",
                  "Id": 1,
                  "IsPersisted": true,
                  "IsRemoved": false,
                  "Name": "Rio",
                  "ZipCode": "22011050"
                }
              }
            },
            "DiscountHighLight": [
              "string"
            ],
            "GetInfoErrorMessage": "string",
            "GiftSkuIds": [
              "string"
            ],
            "Installments": [
              {
                "InterestRate": 0,
                "Name": "American Express à vista",
                "NumberOfInstallments": 1,
                "PaymentSystemGroupName": "creditCardPaymentGroup",
                "PaymentSystemName": "American Express",
                "TotalValuePlusInterestRate": 1000,
                "Value": 1000
              }
            ],
            "ListPrice": 0,
            "Price": 0,
            "PriceValidUntil": "string",
            "Tax": 0,
            "Teasers": [
              "string"
            ]
          },
          "sellerDefault": true,
          "sellerId": "string",
          "sellerName": "string"
        }
      ],
      "unitMultiplier": 0,
      "variations": [
        "string"
      ]
    }
  ],
  "link": "string",
  "linkText": "string",
  "productId": "string",
  "productName": "string",
  "productReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|true|none|none|
|categories|[string]|true|none|none|
|description|string \| null|true|none|none|
|items|[[Item](#schemaitem)]|true|none|none|
|link|string|true|none|none|
|linkText|string|true|none|none|
|productId|string|true|none|none|
|productName|string|true|none|none|
|productReference|string|true|none|none|

<h2 id="tocS_Example2">Example2</h2>
<!-- backwards compatibility -->
<a id="schemaexample2"></a>
<a id="schema_Example2"></a>
<a id="tocSexample2"></a>
<a id="tocsexample2"></a>

```json
{
  "Brands": [
    {
      "Link": "/eletronicos/tv/Philips",
      "Name": "Philips",
      "Quantity": 1
    },
    {
      "Link": "/eletronicos/tv/Samsung",
      "Name": "Samsung",
      "Quantity": 5
    },
    {
      "Link": "/eletronicos/tv/Philco",
      "Name": "Philco",
      "Quantity": 6
    },
    {
      "Link": "/eletronicos/tv/AOC",
      "Name": "AOC",
      "Quantity": 2
    },
    {
      "Link": "/eletronicos/tv/Semp",
      "Name": "Semp",
      "Quantity": 1
    },
    {
      "Link": "/eletronicos/tv/Toshiba",
      "Name": "Toshiba",
      "Quantity": 2
    },
    {
      "Link": "/eletronicos/tv/TCL",
      "Name": "TCL",
      "Quantity": 3
    }
  ],
  "CategoriesTrees": [
    {
      "Children": [
        {
          "Children": [
            {
              "Children": [],
              "Link": "/Eletronicos/TV/TV-LED",
              "Name": "TV LED",
              "Quantity": 6
            },
            {
              "Children": [],
              "Link": "/Eletronicos/TV/Smart-TV",
              "Name": "Smart TV",
              "Quantity": 14
            }
          ],
          "Link": "/Eletronicos/TV",
          "Name": "TV",
          "Quantity": 20
        }
      ],
      "Link": "/Eletronicos",
      "Name": "Eletrônicos",
      "Quantity": 20
    }
  ],
  "Departments": [
    {
      "Link": "/Eletro-Eletronicos",
      "Name": "Eletro-Eletronicos",
      "Quantity": 20
    }
  ],
  "SpecificationFilters": {
    "Aplicativos de TV": [
      {
        "Link": "/eletronicos/tv/Crackle?map=c,c,specificationFilter_1517",
        "Name": "Crackle",
        "Quantity": 4
      },
      {
        "Link": "/eletronicos/tv/NetFlix?map=c,c,specificationFilter_1517",
        "Name": "NetFlix",
        "Quantity": 12
      },
      {
        "Link": "/eletronicos/tv/NetMovies?map=c,c,specificationFilter_1517",
        "Name": "NetMovies",
        "Quantity": 4
      },
      {
        "Link": "/eletronicos/tv/Vimeo?map=c,c,specificationFilter_1517",
        "Name": "Vimeo",
        "Quantity": 4
      },
      {
        "Link": "/eletronicos/tv/YouTube?map=c,c,specificationFilter_1517",
        "Name": "YouTube",
        "Quantity": 13
      }
    ],
    "Resolução": [
      {
        "Link": "/eletronicos/tv/Full-HD?map=c,c,specificationFilter_73",
        "Name": "Full-HD",
        "Quantity": 10
      },
      {
        "Link": "/eletronicos/tv/HD-Ready?map=c,c,specificationFilter_73",
        "Name": "HD-Ready",
        "Quantity": 7
      },
      {
        "Link": "/eletronicos/tv/Ultra-HD?map=c,c,specificationFilter_73",
        "Name": "Ultra-HD",
        "Quantity": 2
      }
    ],
    "Tamanho da Tela": [
      {
        "Link": "/eletronicos/tv/Acima de 51 pol.?map=c,c,specificationFilter_74",
        "Name": "Acima de 51 pol.",
        "Quantity": 3
      },
      {
        "Link": "/eletronicos/tv/Até 19 pol.?map=c,c,specificationFilter_74",
        "Name": "Até 19 pol.",
        "Quantity": 1
      },
      {
        "Link": "/eletronicos/tv/De 20 a 29 pol.?map=c,c,specificationFilter_74",
        "Name": "De 20 a 29 pol.",
        "Quantity": 2
      },
      {
        "Link": "/eletronicos/tv/De 30 a 39 pol.?map=c,c,specificationFilter_74",
        "Name": "De 30 a 39 pol.",
        "Quantity": 5
      },
      {
        "Link": "/eletronicos/tv/De 40 a 51 pol.?map=c,c,specificationFilter_74",
        "Name": "De 40 a 51 pol.",
        "Quantity": 8
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Brands|[[Brand](#schemabrand)]|true|none|none|
|CategoriesTrees|[[CategoriesTree](#schemacategoriestree)]|true|none|none|
|Departments|[[Department](#schemadepartment)]|true|none|none|
|SpecificationFilters|[SpecificationFilters](#schemaspecificationfilters)|true|none|none|

<h2 id="tocS_Example3">Example3</h2>
<!-- backwards compatibility -->
<a id="schemaexample3"></a>
<a id="schema_Example3"></a>
<a id="tocSexample3"></a>
<a id="tocsexample3"></a>

```json
{
  "itemsReturned": [
    {
      "criteria": "£geladeira em Departamento 8¢/departamento-8/geladeira",
      "href": "https://ambienteqa.vtexcommercestable.com.br/departamento-8/geladeira",
      "name": "geladeira em Departamento 8",
      "thumb": ""
    },
    {
      "criteria": "£geladeira em Eletrodoméstico¢/eletrodomestico/geladeira",
      "href": "https://ambienteqa.vtexcommercestable.com.br/eletrodomestico/geladeira",
      "name": "geladeira em Eletrodoméstico",
      "thumb": ""
    },
    {
      "criteria": null,
      "href": "https://ambienteqa.vtexcommercestable.com.br/geladeiraeli/p",
      "name": "geladeira eli",
      "thumb": "<img src=\"https://ambienteqa.vteximg.com.br/arquivos/ids/168969-25-25/geladeira.jpg\" width=\"25\" height=\"25\" alt=\"geladeira\" id=\"\" />"
    },
    {
      "criteria": null,
      "href": "https://ambienteqa.vtexcommercestable.com.br/prevendageladeira/p",
      "name": "pre venda geladeira",
      "thumb": "<img src=\"https://ambienteqa.vteximg.com.br/arquivos/ids/168964-25-25/gela.jpg\" width=\"25\" height=\"25\" alt=\"gela\" id=\"\" />"
    },
    {
      "criteria": null,
      "href": "https://ambienteqa.vtexcommercestable.com.br/geladeira/p",
      "name": "geladeira",
      "thumb": "<img src=\"https://ambienteqa.vteximg.com.br/arquivos/ids/168951-25-25/geladeira.jpg\" width=\"25\" height=\"25\" alt=\"geladeira\" id=\"\" />"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemsReturned|[[ItemsReturned](#schemaitemsreturned)]|true|none|none|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "imageId": "168969",
  "imageLabel": "",
  "imageTag": "<img src=\"~/arquivos/ids/168969-#width#-#height#/geladeira.jpg\" width=\"#width#\" height=\"#height#\" alt=\"geladeira\" id=\"\" />",
  "imageText": "geladeira",
  "imageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168969/geladeira.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageId|string|true|none|none|
|imageLabel|string|true|none|none|
|imageTag|string|true|none|none|
|imageText|string \| null|true|none|none|
|imageUrl|string|true|none|none|

<h2 id="tocS_Installment">Installment</h2>
<!-- backwards compatibility -->
<a id="schemainstallment"></a>
<a id="schema_Installment"></a>
<a id="tocSinstallment"></a>
<a id="tocsinstallment"></a>

```json
{
  "InterestRate": 0,
  "Name": "American Express à vista",
  "NumberOfInstallments": 1,
  "PaymentSystemGroupName": "creditCardPaymentGroup",
  "PaymentSystemName": "American Express",
  "TotalValuePlusInterestRate": 1000,
  "Value": 1000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InterestRate|number|true|none|none|
|Name|string|true|none|none|
|NumberOfInstallments|integer(int32)|true|none|none|
|PaymentSystemGroupName|string|true|none|none|
|PaymentSystemName|string|true|none|none|
|TotalValuePlusInterestRate|number|true|none|none|
|Value|number|true|none|none|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "COR": [
    "string"
  ],
  "TAMANHO": [
    "string"
  ],
  "complementName": "string",
  "ean": "string",
  "images": [
    {
      "imageId": "168969",
      "imageLabel": "",
      "imageTag": "<img src=\"~/arquivos/ids/168969-#width#-#height#/geladeira.jpg\" width=\"#width#\" height=\"#height#\" alt=\"geladeira\" id=\"\" />",
      "imageText": "geladeira",
      "imageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168969/geladeira.jpg"
    }
  ],
  "itemId": "string",
  "measurementUnit": "string",
  "name": "string",
  "nameComplete": "string",
  "referenceId": [
    {
      "Key": "RefId",
      "Value": "969697"
    }
  ],
  "sellers": [
    {
      "addToCartLink": "string",
      "commertialOffer": {
        "AvailableQuantity": 0,
        "BuyTogether": [
          "string"
        ],
        "CacheVersionUsedToCallCheckout": "string",
        "DeliverySlaSamples": [
          {
            "DeliverySlaPerTypes": [],
            "Region": null
          }
        ],
        "DeliverySlaSamplesPerRegion": {
          "property1": {
            "DeliverySlaPerTypes": [
              {
                "EstimatedTimeSpanToDelivery": "00:00:00",
                "Price": 4.11,
                "TypeName": "Econômica"
              },
              {
                "EstimatedTimeSpanToDelivery": "00:00:00",
                "Price": 6.5,
                "TypeName": "n2_2"
              },
              {
                "EstimatedTimeSpanToDelivery": "00:00:00",
                "Price": 6.5,
                "TypeName": "Normal"
              },
              {
                "EstimatedTimeSpanToDelivery": "00:00:00",
                "Price": 156.5,
                "TypeName": "P_T"
              }
            ],
            "Region": {
              "CountryCode": "BRA",
              "CultureInfoName": "pt-BR",
              "Id": 1,
              "IsPersisted": true,
              "IsRemoved": false,
              "Name": "Rio",
              "ZipCode": "22011050"
            }
          },
          "property2": {
            "DeliverySlaPerTypes": [
              {
                "EstimatedTimeSpanToDelivery": "00:00:00",
                "Price": 4.11,
                "TypeName": "Econômica"
              },
              {
                "EstimatedTimeSpanToDelivery": "00:00:00",
                "Price": 6.5,
                "TypeName": "n2_2"
              },
              {
                "EstimatedTimeSpanToDelivery": "00:00:00",
                "Price": 6.5,
                "TypeName": "Normal"
              },
              {
                "EstimatedTimeSpanToDelivery": "00:00:00",
                "Price": 156.5,
                "TypeName": "P_T"
              }
            ],
            "Region": {
              "CountryCode": "BRA",
              "CultureInfoName": "pt-BR",
              "Id": 1,
              "IsPersisted": true,
              "IsRemoved": false,
              "Name": "Rio",
              "ZipCode": "22011050"
            }
          }
        },
        "DiscountHighLight": [
          "string"
        ],
        "GetInfoErrorMessage": "string",
        "GiftSkuIds": [
          "string"
        ],
        "Installments": [
          {
            "InterestRate": 0,
            "Name": "American Express à vista",
            "NumberOfInstallments": 1,
            "PaymentSystemGroupName": "creditCardPaymentGroup",
            "PaymentSystemName": "American Express",
            "TotalValuePlusInterestRate": 1000,
            "Value": 1000
          }
        ],
        "ListPrice": 0,
        "Price": 0,
        "PriceValidUntil": "string",
        "Tax": 0,
        "Teasers": [
          "string"
        ]
      },
      "sellerDefault": true,
      "sellerId": "string",
      "sellerName": "string"
    }
  ],
  "unitMultiplier": 0,
  "variations": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|COR|[string]|false|none|none|
|TAMANHO|[string]|false|none|none|
|complementName|string|true|none|none|
|ean|string|true|none|none|
|images|[[Image](#schemaimage)]|true|none|none|
|itemId|string|true|none|none|
|measurementUnit|string|true|none|none|
|name|string|true|none|none|
|nameComplete|string|true|none|none|
|referenceId|[[ReferenceId](#schemareferenceid)]|false|none|none|
|sellers|[[Seller](#schemaseller)]|true|none|none|
|unitMultiplier|number|true|none|none|
|variations|[string]|false|none|none|

<h2 id="tocS_ItemsReturned">ItemsReturned</h2>
<!-- backwards compatibility -->
<a id="schemaitemsreturned"></a>
<a id="schema_ItemsReturned"></a>
<a id="tocSitemsreturned"></a>
<a id="tocsitemsreturned"></a>

```json
{
  "criteria": "£geladeira em Departamento 8¢/departamento-8/geladeira",
  "href": "https://ambienteqa.vtexcommercestable.com.br/departamento-8/geladeira",
  "name": "geladeira em Departamento 8",
  "thumb": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteria|string \| null|true|none|none|
|href|string|true|none|none|
|name|string|true|none|none|
|thumb|string|true|none|none|

<h2 id="tocS_ReferenceId">ReferenceId</h2>
<!-- backwards compatibility -->
<a id="schemareferenceid"></a>
<a id="schema_ReferenceId"></a>
<a id="tocSreferenceid"></a>
<a id="tocsreferenceid"></a>

```json
{
  "Key": "RefId",
  "Value": "969697"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|string|true|none|none|
|Value|string|true|none|none|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "CountryCode": "BRA",
  "CultureInfoName": "pt-BR",
  "Id": 1,
  "IsPersisted": true,
  "IsRemoved": false,
  "Name": "Rio",
  "ZipCode": "22011050"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountryCode|string|true|none|none|
|CultureInfoName|string|true|none|none|
|Id|integer(int32)|true|none|none|
|IsPersisted|boolean|true|none|none|
|IsRemoved|boolean|true|none|none|
|Name|string|true|none|none|
|ZipCode|string|true|none|none|

<h2 id="tocS_Region2">Region2</h2>
<!-- backwards compatibility -->
<a id="schemaregion2"></a>
<a id="schema_Region2"></a>
<a id="tocSregion2"></a>
<a id="tocsregion2"></a>

```json
{
  "CountryCode": "string",
  "CultureInfoName": "string",
  "Id": 0,
  "IsPersisted": true,
  "IsRemoved": true,
  "Name": "string",
  "ZipCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountryCode|string|false|none|none|
|CultureInfoName|string|false|none|none|
|Id|integer(int32)|false|none|none|
|IsPersisted|boolean|false|none|none|
|IsRemoved|boolean|false|none|none|
|Name|string|false|none|none|
|ZipCode|string|false|none|none|

<h2 id="tocS_ResoluO">ResoluO</h2>
<!-- backwards compatibility -->
<a id="schemaresoluo"></a>
<a id="schema_ResoluO"></a>
<a id="tocSresoluo"></a>
<a id="tocsresoluo"></a>

```json
{
  "Link": "/eletronicos/tv/Full-HD?map=c,c,specificationFilter_73",
  "Name": "Full-HD",
  "Quantity": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|true|none|none|
|Name|string|true|none|none|
|Quantity|integer(int32)|true|none|none|

<h2 id="tocS_Seller">Seller</h2>
<!-- backwards compatibility -->
<a id="schemaseller"></a>
<a id="schema_Seller"></a>
<a id="tocSseller"></a>
<a id="tocsseller"></a>

```json
{
  "addToCartLink": "string",
  "commertialOffer": {
    "AvailableQuantity": 0,
    "BuyTogether": [
      "string"
    ],
    "CacheVersionUsedToCallCheckout": "string",
    "DeliverySlaSamples": [
      {
        "DeliverySlaPerTypes": [],
        "Region": null
      }
    ],
    "DeliverySlaSamplesPerRegion": {
      "property1": {
        "DeliverySlaPerTypes": [
          {
            "EstimatedTimeSpanToDelivery": "00:00:00",
            "Price": 4.11,
            "TypeName": "Econômica"
          },
          {
            "EstimatedTimeSpanToDelivery": "00:00:00",
            "Price": 6.5,
            "TypeName": "n2_2"
          },
          {
            "EstimatedTimeSpanToDelivery": "00:00:00",
            "Price": 6.5,
            "TypeName": "Normal"
          },
          {
            "EstimatedTimeSpanToDelivery": "00:00:00",
            "Price": 156.5,
            "TypeName": "P_T"
          }
        ],
        "Region": {
          "CountryCode": "BRA",
          "CultureInfoName": "pt-BR",
          "Id": 1,
          "IsPersisted": true,
          "IsRemoved": false,
          "Name": "Rio",
          "ZipCode": "22011050"
        }
      },
      "property2": {
        "DeliverySlaPerTypes": [
          {
            "EstimatedTimeSpanToDelivery": "00:00:00",
            "Price": 4.11,
            "TypeName": "Econômica"
          },
          {
            "EstimatedTimeSpanToDelivery": "00:00:00",
            "Price": 6.5,
            "TypeName": "n2_2"
          },
          {
            "EstimatedTimeSpanToDelivery": "00:00:00",
            "Price": 6.5,
            "TypeName": "Normal"
          },
          {
            "EstimatedTimeSpanToDelivery": "00:00:00",
            "Price": 156.5,
            "TypeName": "P_T"
          }
        ],
        "Region": {
          "CountryCode": "BRA",
          "CultureInfoName": "pt-BR",
          "Id": 1,
          "IsPersisted": true,
          "IsRemoved": false,
          "Name": "Rio",
          "ZipCode": "22011050"
        }
      }
    },
    "DiscountHighLight": [
      "string"
    ],
    "GetInfoErrorMessage": "string",
    "GiftSkuIds": [
      "string"
    ],
    "Installments": [
      {
        "InterestRate": 0,
        "Name": "American Express à vista",
        "NumberOfInstallments": 1,
        "PaymentSystemGroupName": "creditCardPaymentGroup",
        "PaymentSystemName": "American Express",
        "TotalValuePlusInterestRate": 1000,
        "Value": 1000
      }
    ],
    "ListPrice": 0,
    "Price": 0,
    "PriceValidUntil": "string",
    "Tax": 0,
    "Teasers": [
      "string"
    ]
  },
  "sellerDefault": true,
  "sellerId": "string",
  "sellerName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addToCartLink|string|true|none|none|
|commertialOffer|[CommertialOffer](#schemacommertialoffer)|true|none|none|
|sellerDefault|boolean|true|none|none|
|sellerId|string|true|none|none|
|sellerName|string|true|none|none|

<h2 id="tocS_SpecificationFilters">SpecificationFilters</h2>
<!-- backwards compatibility -->
<a id="schemaspecificationfilters"></a>
<a id="schema_SpecificationFilters"></a>
<a id="tocSspecificationfilters"></a>
<a id="tocsspecificationfilters"></a>

```json
{
  "Aplicativos de TV": [
    {
      "Link": "/eletronicos/tv/Crackle?map=c,c,specificationFilter_1517",
      "Name": "Crackle",
      "Quantity": 4
    },
    {
      "Link": "/eletronicos/tv/NetFlix?map=c,c,specificationFilter_1517",
      "Name": "NetFlix",
      "Quantity": 12
    },
    {
      "Link": "/eletronicos/tv/NetMovies?map=c,c,specificationFilter_1517",
      "Name": "NetMovies",
      "Quantity": 4
    },
    {
      "Link": "/eletronicos/tv/Vimeo?map=c,c,specificationFilter_1517",
      "Name": "Vimeo",
      "Quantity": 4
    },
    {
      "Link": "/eletronicos/tv/YouTube?map=c,c,specificationFilter_1517",
      "Name": "YouTube",
      "Quantity": 13
    }
  ],
  "Resolução": [
    {
      "Link": "/eletronicos/tv/Full-HD?map=c,c,specificationFilter_73",
      "Name": "Full-HD",
      "Quantity": 10
    },
    {
      "Link": "/eletronicos/tv/HD-Ready?map=c,c,specificationFilter_73",
      "Name": "HD-Ready",
      "Quantity": 7
    },
    {
      "Link": "/eletronicos/tv/Ultra-HD?map=c,c,specificationFilter_73",
      "Name": "Ultra-HD",
      "Quantity": 2
    }
  ],
  "Tamanho da Tela": [
    {
      "Link": "/eletronicos/tv/Acima de 51 pol.?map=c,c,specificationFilter_74",
      "Name": "Acima de 51 pol.",
      "Quantity": 3
    },
    {
      "Link": "/eletronicos/tv/Até 19 pol.?map=c,c,specificationFilter_74",
      "Name": "Até 19 pol.",
      "Quantity": 1
    },
    {
      "Link": "/eletronicos/tv/De 20 a 29 pol.?map=c,c,specificationFilter_74",
      "Name": "De 20 a 29 pol.",
      "Quantity": 2
    },
    {
      "Link": "/eletronicos/tv/De 30 a 39 pol.?map=c,c,specificationFilter_74",
      "Name": "De 30 a 39 pol.",
      "Quantity": 5
    },
    {
      "Link": "/eletronicos/tv/De 40 a 51 pol.?map=c,c,specificationFilter_74",
      "Name": "De 40 a 51 pol.",
      "Quantity": 8
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Aplicativos de TV|[[AplicativosDeTV](#schemaaplicativosdetv)]|true|none|none|
|Resolução|[[ResoluO](#schemaresoluo)]|true|none|none|
|Tamanho da Tela|[[TamanhoDaTela](#schematamanhodatela)]|true|none|none|

<h2 id="tocS_TamanhoDaTela">TamanhoDaTela</h2>
<!-- backwards compatibility -->
<a id="schematamanhodatela"></a>
<a id="schema_TamanhoDaTela"></a>
<a id="tocStamanhodatela"></a>
<a id="tocstamanhodatela"></a>

```json
{
  "Link": "/eletronicos/tv/Acima de 51 pol.?map=c,c,specificationFilter_74",
  "Name": "Acima de 51 pol.",
  "Quantity": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|true|none|none|
|Name|string|true|none|none|
|Quantity|integer(int32)|true|none|none|

<h2 id="tocS_generatedObject">generatedObject</h2>
<!-- backwards compatibility -->
<a id="schemageneratedobject"></a>
<a id="schema_generatedObject"></a>
<a id="tocSgeneratedobject"></a>
<a id="tocsgeneratedobject"></a>

```json
{
  "DeliverySlaPerTypes": [
    {
      "EstimatedTimeSpanToDelivery": "00:00:00",
      "Price": 4.11,
      "TypeName": "Econômica"
    },
    {
      "EstimatedTimeSpanToDelivery": "00:00:00",
      "Price": 6.5,
      "TypeName": "n2_2"
    },
    {
      "EstimatedTimeSpanToDelivery": "00:00:00",
      "Price": 6.5,
      "TypeName": "Normal"
    },
    {
      "EstimatedTimeSpanToDelivery": "00:00:00",
      "Price": 156.5,
      "TypeName": "P_T"
    }
  ],
  "Region": {
    "CountryCode": "BRA",
    "CultureInfoName": "pt-BR",
    "Id": 1,
    "IsPersisted": true,
    "IsRemoved": false,
    "Name": "Rio",
    "ZipCode": "22011050"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliverySlaPerTypes|[[DeliverySlaPerType](#schemadeliveryslapertype)]|true|none|none|
|Region|[Region](#schemaregion)|true|none|none|
