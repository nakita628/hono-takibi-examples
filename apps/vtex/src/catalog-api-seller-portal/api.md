<h1 id="catalog-api---seller-portal">Catalog API - Seller Portal v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


With the Catalog API for Seller Portal, you will be able to create, edit and consult products and their variations, brands, and categories.

> This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).

## Index

### Product

`GET` [Get Product by ID](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/products/-productId-)
`PUT` [Update Product](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#put-/api/catalog-seller-portal/products/-productId-)
`GET` [Get Product Description by Product ID](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/products/-productId-/description)
`PUT` [Update Product Description by Product ID](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#put-/api/catalog-seller-portal/products/-productId-/description)
`GET` [Get Product by external ID, SKU ID, SKU external ID or slug](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/products/-param-)
`POST` [Create Product](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#post-/api/catalog-seller-portal/products)

### SKU

`GET` [Search for SKU](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/skus/_search)
`GET` [Get List of SKUs](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/skus/ids)

### Brand

`GET` [Get List of Brands](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/brands)
`POST` [Create a Brand](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#post-/api/catalog-seller-portal/brands)
`GET` [Get Brand by ID](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/brands/-brandId-)
`PUT` [Update Brand](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#put-/api/catalog-seller-portal/brands/-brandId-)

### Category

`GET` [Get Category Tree](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/category-tree)
`PUT` [Update Category Tree](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#put-/api/catalog-seller-portal/category-tree)
`GET` [Get Category by ID](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#get-/api/catalog-seller-portal/category-tree/categories/-categoryId-)
`POST` [Create a Category](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal#post-/api/catalog-seller-portal/category-tree/categories)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server URL.

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="catalog-api---seller-portal-product">Product</h1>

## Create Product

<a id="opIdPostProduct"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "attributes": [
      {
        "name": "Fabric",
        "value": "Cotton"
      },
      {
        "name": "Gender",
        "value": "Feminine"
      }
    ],
    "brandId": "1",
    "categoryIds": [
      "732"
    ],
    "description": "Shirt number 10 by VTEX.",
    "images": [
      {
        "alt": "VTEX",
        "id": "vtex_logo.jpg",
        "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg"
      }
    ],
    "name": "VTEX 10 Shirt",
    "origin": "vtxleo7778",
    "skus": [
      {
        "dimensions": {
          "height": 2.1,
          "length": 1.6,
          "width": 1.5
        },
        "externalId": "1909621862",
        "images": [
          "vtex_logo.jpg"
        ],
        "isActive": true,
        "manufacturerCode": "1234567",
        "name": "VTEX Shirt Black Size S",
        "specs": [
          {
            "name": "Color",
            "value": "Black"
          },
          {
            "name": "Size",
            "value": "S"
          }
        ],
        "weight": 300
      },
      {
        "dimensions": {
          "height": 2.1,
          "length": 1.6,
          "width": 1.5
        },
        "externalId": "1909621862",
        "images": [
          "vtex_logo.jpg"
        ],
        "isActive": true,
        "manufacturerCode": "1234568",
        "name": "VTEX Shirt White Size L",
        "specs": [
          {
            "name": "Color",
            "value": "White"
          },
          {
            "name": "Size",
            "value": "L"
          }
        ],
        "weight": 300
      }
    ],
    "slug": "/vtex-shirt",
    "specs": [
      {
        "name": "Color",
        "values": [
          "Black",
          "White"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "status": "active",
    "taxCode": "234",
    "transportModal": "110"
  }'
```

`POST /api/catalog-seller-portal/products`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Creates a new product and its SKUs. 


## Request body example

```json
{
    "status": "active",
    "name": "VTEX 10 Shirt",
    "description": "Shirt number 10 by VTEX.",
    "brandId": "1",
    "categoryIds": [
        "732"
    ],
    "specs": [
        {
            "name": "Color",
            "values": [
                "Black",
                "White"
            ]
        },
        {
            "name": "Size",
            "values": [
                "S",
                "M",
                "L"
            ]
        }
    ],
    "attributes": [
        {
            "name": "Fabric",
            "value": "Cotton"
        },
        {
            "name": "Gender",
            "value": "Feminine"
        }
    ],
    "slug": "/vtex-shirt",
    "images": [
        {
            "id": "vtex_logo.jpg",
            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
            "alt": "VTEX"
        }
    ],
    "skus": [
        {
            "name": "VTEX Shirt Black Size S",
            "externalId": "1909621862",
            "manufacturerCode": "1234567",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "Black"
                },
                {
                    "name": "Size",
                    "value": "S"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        },
        {
            "name": "VTEX Shirt White Size L",
            "externalId": "1909621862",
            "manufacturerCode": "1234568",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "White"
                },
                {
                    "name": "Size",
                    "value": "L"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        }
    ],
    "origin": "vtxleo7778",
    "transportModal": "110",
    "taxCode": "234"
}
```

## Response body example

```json
{
    "id": "189371",
    "status": "active",
    "name": "VTEX 10 Shirt",
    "brandId": "1",
    "brandName": "AOC",
    "categoryIds": [
        "732"
    ],
    "categoryNames": [
        "/Men/Acessories/"
    ],
    "specs": [
        {
            "name": "Color",
            "values": [
                "Black",
                "White"
            ]
        },
        {
            "name": "Size",
            "values": [
                "S",
                "M",
                "L"
            ]
        }
    ],
    "attributes": [
        {
            "name": "Fabric",
            "value": "Cotton"
        },
        {
            "name": "Gender",
            "value": "Feminine"
        }
    ],
    "slug": "/vtex-shirt",
    "images": [
        {
            "id": "vtex_logo.jpg",
            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
            "alt": "VTEX"
        }
    ],
    "skus": [
        {
            "id": "182907",
            "name": "VTEX Shirt Black Size S",
            "externalId": "1909621862",
            "manufacturerCode": "1234567",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "Black"
                },
                {
                    "name": "Size",
                    "value": "S"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        },
        {
            "id": "182908",
            "name": "VTEX Shirt White Size L",
            "externalId": "1909621862",
            "manufacturerCode": "1234568",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "White"
                },
                {
                    "name": "Size",
                    "value": "L"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        }
    ],
    "origin": "vtxleo7778",
    "transportModal": "110",
    "taxCode": "234",
    "createdAt": "2022-11-01T14:15:54.262702Z",
    "updatedAt": "2022-11-01T14:15:54.262702Z"
}
```

> Body parameter

```json
{
  "attributes": [
    {
      "name": "Fabric",
      "value": "Cotton"
    },
    {
      "name": "Gender",
      "value": "Feminine"
    }
  ],
  "brandId": "1",
  "categoryIds": [
    "732"
  ],
  "description": "Shirt number 10 by VTEX.",
  "images": [
    {
      "alt": "VTEX",
      "id": "vtex_logo.jpg",
      "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg"
    }
  ],
  "name": "VTEX 10 Shirt",
  "origin": "vtxleo7778",
  "skus": [
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234567",
      "name": "VTEX Shirt Black Size S",
      "specs": [
        {
          "name": "Color",
          "value": "Black"
        },
        {
          "name": "Size",
          "value": "S"
        }
      ],
      "weight": 300
    },
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234568",
      "name": "VTEX Shirt White Size L",
      "specs": [
        {
          "name": "Color",
          "value": "White"
        },
        {
          "name": "Size",
          "value": "L"
        }
      ],
      "weight": 300
    }
  ],
  "slug": "/vtex-shirt",
  "specs": [
    {
      "name": "Color",
      "values": [
        "Black",
        "White"
      ]
    },
    {
      "name": "Size",
      "values": [
        "S",
        "M",
        "L"
      ]
    }
  ],
  "status": "active",
  "taxCode": "234",
  "transportModal": "110"
}
```

<h3 id="create-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» attributes|body|[object]|true|Attributes of the product. Attributes are additional properties used to create site browsing filters.|
|» » name|body|string|true|Attribute name.|
|» » value|body|string|true|Attribute value.|
|» brandId|body|string|true|Product's Brand unique identifier number.|
|» categoryIds|body|[string]|true|Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.|
|» description|body|string|false|Description of the primary information related to the product. A simple and easy-to-understand summary for the customer.|
|» externalId|body|string|false|Product reference unique identifier number in the store.|
|» images|body|[object]|true|Information of the images of the product.|
|» » alt|body|string|false|Image alternative description.|
|» » id|body|string|true|Image ID.|
|» » url|body|string|true|Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).|
|» name|body|string|true|Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.|
|» origin|body|string|true|Origin account of the product. It is not possible to alter products where the origin is `marketplace`.|
|» skus|body|[object]|true|SKUs of the product.|
|» » dimensions|body|object|true|SKU dimensions.|
|» » » height|body|number|true|SKU height.|
|» » » length|body|number|true|SKU length.|
|» » » width|body|number|true|SKU width.|
|» » ean|body|string|false|Unique SKU identification code (barcode), composed of up to 13 numeric characters.|
|» » externalId|body|string|false|Unique reference code created to improve the store's organization. This is not a required field.|
|» » images|body|[object]|true|SKU's images IDs.|
|» » isActive|body|boolean|true|If the SKU is active (`true`) or inactive (`false`).|
|» » manufacturerCode|body|string|false|SKU reference code in the store.|
|» » name|body|string|true|SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.|
|» » specs|body|[object]|true|SKU specifications. This field is mandatory, but nullable if there is only one SKU.|
|» » » name|body|string|true|SKU's specification name.|
|» » » value|body|string|true|SKU's specification values.|
|» » weight|body|integer|true|SKU weight.|
|» slug|body|string|true|Reference of the product in the URL of the store.|
|» specs|body|[object]|true|Specifications that will differentiate the possible product SKUs.|
|» » name|body|string|true|Specification name.|
|» » values|body|[string]|true|Specification values.|
|» status|body|string|true|Status of the product. Its values can be `active` or `inactive`.|
|» taxCode|body|string \| null|false|Product tax code.|
|» transportModal|body|string \| null|false|Transport modal of the product.|

> Example responses

> 200 Response

```json
{
  "attributes": [
    {
      "name": "Fabric",
      "value": "Cotton"
    },
    {
      "name": "Gender",
      "value": "Feminine"
    }
  ],
  "brandId": "1",
  "brandName": "AOC",
  "categoryIds": [
    "732"
  ],
  "categoryNames": [
    "/sandboxintegracao/Acessórios/"
  ],
  "createdAt": "2021-01-18T14:41:45.696488+00:00",
  "id": "189371",
  "images": [
    {
      "alt": "VTEX",
      "id": "vtex_logo.jpg",
      "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg"
    }
  ],
  "name": "VTEX 10 Shirt",
  "origin": "vtxleo7778",
  "skus": [
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "id": "182907",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234567",
      "specs": [
        {
          "name": "Color",
          "value": "Black"
        },
        {
          "name": "Size",
          "value": "S"
        }
      ],
      "weight": 300
    },
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "id": "182908",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234568",
      "specs": [
        {
          "name": "Color",
          "value": "White"
        },
        {
          "name": "Size",
          "value": "L"
        }
      ],
      "weight": 300
    }
  ],
  "slug": "/vtex-shirt",
  "specs": [
    {
      "name": "Color",
      "values": [
        "Black",
        "White"
      ]
    },
    {
      "name": "Size",
      "values": [
        "S",
        "M",
        "L"
      ]
    }
  ],
  "status": "active",
  "taxCode": null,
  "transportModal": null,
  "updatedAt": "2021-01-18T14:41:45.696488+00:00"
}
```

<h3 id="create-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|204|No Content|No Content|None|

<h3 id="create-product-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[object]|true|none|Attributes of the product. Attributes are additional properties used to create site browsing filters.|
|» name|string|true|none|Attribute name.|
|» value|string|true|none|Attribute value.|
|brandId|string|true|none|Product's Brand unique identifier number.|
|brandName|string|true|none|Name of the Brand associated with the product.|
|categoryIds|[string]|true|none|Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.|
|categoryNames|[string]|true|none|Names of the product's categories, displayed in a path format.|
|createdAt|string|true|none|Date when the product was created.|
|externalId|string|false|none|Product reference unique identifier number in the store.|
|id|string|false|none|Product's unique identifier number.|
|images|[object]|true|none|Information of the images of the product.|
|» alt|string|false|none|Image alternative description.|
|» id|string|true|none|Image ID.|
|» url|string|true|none|Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).|
|name|string|true|none|Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.|
|origin|string|true|none|Origin account of the product. It is not possible to alter products where the origin is `marketplace`.|
|skus|[object]|true|none|SKUs of the product.|
|» dimensions|object|true|none|SKU dimensions.|
|» » height|number|true|none|SKU height.|
|» » length|number|true|none|SKU length.|
|» » width|number|true|none|SKU width.|
|» ean|string|false|none|Unique SKU identification code (barcode), composed of up to 13 numeric characters.|
|» externalId|string|false|none|Unique reference code created to improve the store's organization. This is not a required field.|
|» id|string|true|none|SKU unique identifier number.|
|» images|[object]|true|none|SKU's images IDs.|
|» isActive|boolean|true|none|If the SKU is active (`true`) or inactive (`false`).|
|» manufacturerCode|string|false|none|SKU reference code in the store.|
|» name|string|false|none|SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.|
|» specs|[object]|true|none|SKU specifications. This field is mandatory, but nullable if there is only one SKU.|
|» » name|string|true|none|SKU's specification name.|
|» » value|string|true|none|SKU's specification values.|
|» weight|integer|true|none|SKU weight.|
|slug|string|true|none|Reference of the product in the URL of the store.|
|specs|[object]|true|none|Specifications that will differentiate the possible product SKUs.|
|» name|string|true|none|Specification name.|
|» values|[string]|true|none|Specification values.|
|status|string|true|none|Status of the product. Its values can be `active` or `inactive`.|
|taxCode|string \| null|false|none|Product tax code.|
|transportModal|string \| null|false|none|Transport modal of the product.|
|updatedAt|string|true|none|Last date when the product was updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product by external ID, SKU ID, SKU external ID or slug

<a id="opIdGetProductQuery"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/products/external-id%3D189371 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/products/{param}`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves general information about a product by its external ID, SKU ID, SKU external ID or product slug. The response also has information about the product's SKUs. 
## Response body example

```json
{
    "id": "189371",
    "status": "active",
    "name": "VTEX 10 Shirt",
    "brandId": "1",
    "brandName": "AOC",
    "categoryIds": [
        "732"
    ],
    "categoryNames": [
        "/sandboxintegracao/Acessórios/"
    ],
    "specs": [
        {
            "name": "Color",
            "values": [
                "Black",
                "White"
            ]
        },
        {
            "name": "Size",
            "values": [
                "S",
                "M",
                "L"
            ]
        }
    ],
    "attributes": [
        {
            "name": "Fabric",
            "value": "Cotton"
        },
        {
            "name": "Gender",
            "value": "Feminine"
        }
    ],
    "slug": "/vtex-shirt",
    "images": [
        {
            "id": "vtex_logo.jpg",
            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
            "alt": "VTEX"
        }
    ],
    "skus": [
        {
            "id": "182907",
            "name": "VTEX Shirt Black Size S",
            "externalId": "1909621862",
            "manufacturerCode": "1234567",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "Black"
                },
                {
                    "name": "Size",
                    "value": "S"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        },
        {
            "id": "182908",
            "name": "VTEX Shirt White Size L",
            "externalId": "1909621862",
            "manufacturerCode": "1234568",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "White"
                },
                {
                    "name": "Size",
                    "value": "L"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        }
    ],
    "transportModal": "123",
    "taxCode": "100",
    "origin": "vtxleo7778",
    "createdAt": "2022-10-31T16:28:25.578067Z",
    "updatedAt": "2022-10-31T16:28:25.578067Z"
}
```

<h3 id="get-product-by-external-id-sku-id-sku-external-id-or-slug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|param|path|string|true|This part of the path must follow this format: `{param}={value}`. Replace `{param}` with the name of the parameter used to fetch a product, which can be one of the following: `external-id` (product reference unique identifier number in the store), `sku-id` (SKU unique identifier number), `sku-external-id` (SKU reference unique identifier number in the store) or `slug` (reference of the product in the URL of the store). Replace `{value}` with the value of the selected param. Make sure there is a `=` between them.|

> Example responses

> 200 Response

```json
{
  "attributes": [
    {
      "name": "Fabric",
      "value": "Cotton"
    },
    {
      "name": "Gender",
      "value": "Feminine"
    }
  ],
  "brandId": "1",
  "brandName": "AOC",
  "categoryIds": [
    "732"
  ],
  "categoryNames": [
    "/Men/Acessories/"
  ],
  "createdAt": "2022-10-31T16:28:25.578067Z",
  "id": "189371",
  "images": [
    {
      "alt": "VTEX",
      "id": "vtex_logo.jpg",
      "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg"
    }
  ],
  "name": "VTEX 10 Shirt",
  "origin": "vtxleo7778",
  "skus": [
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "id": "182907",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234567",
      "name": "VTEX Shirt Black Size S",
      "specs": [
        {
          "name": "Color",
          "value": "Black"
        },
        {
          "name": "Size",
          "value": "S"
        }
      ],
      "weight": 300
    },
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "id": "182908",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234568",
      "name": "VTEX Shirt White Size L",
      "specs": [
        {
          "name": "Color",
          "value": "White"
        },
        {
          "name": "Size",
          "value": "L"
        }
      ],
      "weight": 300
    }
  ],
  "slug": "/vtex-shirt",
  "specs": [
    {
      "name": "Color",
      "values": [
        "Black",
        "White"
      ]
    },
    {
      "name": "Size",
      "values": [
        "S",
        "M",
        "L"
      ]
    }
  ],
  "status": "active",
  "taxCode": "100",
  "transportModal": "123",
  "updatedAt": "2022-10-31T16:28:25.578067Z"
}
```

<h3 id="get-product-by-external-id-sku-id-sku-external-id-or-slug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-by-external-id-sku-id-sku-external-id-or-slug-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[object]|true|none|Attributes of the product. Attributes are additional properties used to create site browsing filters.|
|» name|string|true|none|Attribute name.|
|» value|string|true|none|Attribute value.|
|brandId|string|true|none|Product's Brand unique identifier number.|
|brandName|string|true|none|Name of the Brand associated with the product.|
|categoryIds|[string]|true|none|Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.|
|categoryNames|[string]|true|none|Names of the product's categories, displayed in a path format.|
|createdAt|string|true|none|Date when the product was created.|
|externalId|string|false|none|Product reference unique identifier number in the store.|
|id|string|false|none|Product's unique identifier number.|
|images|[object]|true|none|Information of the images of the product.|
|» alt|string|false|none|Image alternative description.|
|» id|string|true|none|Image ID.|
|» url|string|true|none|Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).|
|name|string|true|none|Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.|
|origin|string|true|none|Origin account of the product. It is not possible to alter products where the origin is `marketplace`.|
|skus|[object]|true|none|SKUs of the product.|
|» dimensions|object|true|none|SKU dimensions.|
|» » height|number|true|none|SKU height.|
|» » length|number|true|none|SKU length.|
|» » width|number|true|none|SKU width.|
|» ean|string|false|none|Unique SKU identification code (barcode), composed of up to 13 numeric characters.|
|» externalId|string|false|none|Unique reference code created to improve the store's organization. This is not a required field.|
|» id|string|true|none|SKU unique identifier number.|
|» images|[object]|true|none|SKU's images IDs.|
|» isActive|boolean|true|none|If the SKU is active (`true`) or inactive (`false`).|
|» manufacturerCode|string|false|none|SKU reference code in the store.|
|» specs|[object]|true|none|SKU specifications. This field is mandatory, but nullable if there is only one SKU.|
|» » name|string|true|none|SKU's specification name.|
|» » value|string|true|none|SKU's specification values.|
|» weight|integer|true|none|SKU weight.|
|slug|string|true|none|Reference of the product in the URL of the store.|
|specs|[object]|true|none|Specifications that will differentiate the possible product SKUs.|
|» name|string|true|none|Specification name.|
|» values|[string]|true|none|Specification values.|
|status|string|true|none|Status of the product. Its values can be `active` or `inactive`.|
|taxCode|string|false|none|Product tax code.|
|transportModal|string|false|none|Transport modal of the product.|
|updatedAt|string|true|none|Last date when the product was updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product by ID

<a id="opIdGetProduct"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/products/189371 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/products/{productId}`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves general information about a product by its ID. The response also has information about the product's SKUs. 

 ## Response body example

```json
{
    "id": "189371",
    "status": "active",
    "name": "VTEX 10 Shirt",
    "brandId": "1",
    "brandName": "AOC",
    "categoryIds": [
        "732"
    ],
    "categoryNames": [
        "/sandboxintegracao/Acessórios/"
    ],
    "specs": [
        {
            "name": "Color",
            "values": [
                "Black",
                "White"
            ]
        },
        {
            "name": "Size",
            "values": [
                "S",
                "M",
                "L"
            ]
        }
    ],
    "attributes": [
        {
            "name": "Fabric",
            "value": "Cotton"
        },
        {
            "name": "Gender",
            "value": "Feminine"
        }
    ],
    "slug": "/vtex-shirt",
    "images": [
        {
            "id": "vtex_logo.jpg",
            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
            "alt": "VTEX"
        }
    ],
    "skus": [
        {
            "id": "182907",
            "externalId": "1909621862",
            "manufacturerCode": "1234567",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "Black"
                },
                {
                    "name": "Size",
                    "value": "S"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        },
        {
            "id": "182908",
            "externalId": "1909621862",
            "manufacturerCode": "1234568",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "White"
                },
                {
                    "name": "Size",
                    "value": "L"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        }
    ],
    "transportModal": "123",
    "taxCode": "100",
    "origin": "vtxleo7778",
    "createdAt": "2022-10-31T16:28:25.578067Z",
    "updatedAt": "2022-10-31T17:09:12.639088Z"
}
```

<h3 id="get-product-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|string|true|Product unique identifier number.|

> Example responses

> 200 Response

```json
{
  "attributes": [
    {
      "name": "Fabric",
      "value": "Cotton"
    },
    {
      "name": "Gender",
      "value": "Feminine"
    }
  ],
  "brandId": "1",
  "brandName": "AOC",
  "categoryIds": [
    "732"
  ],
  "categoryNames": [
    "/sandboxintegracao/Acessórios/"
  ],
  "createdAt": "2022-10-31T16:28:25.578067Z",
  "id": "189371",
  "images": [
    {
      "alt": "VTEX",
      "id": "vtex_logo.jpg",
      "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg"
    }
  ],
  "name": "VTEX 10 Shirt",
  "origin": "vtxleo7778",
  "skus": [
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "id": "182907",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234567",
      "specs": [
        {
          "name": "Color",
          "value": "Black"
        },
        {
          "name": "Size",
          "value": "S"
        }
      ],
      "weight": 300
    },
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "id": "182908",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234568",
      "specs": [
        {
          "name": "Color",
          "value": "White"
        },
        {
          "name": "Size",
          "value": "L"
        }
      ],
      "weight": 300
    }
  ],
  "slug": "/vtex-shirt",
  "specs": [
    {
      "name": "Color",
      "values": [
        "Black",
        "White"
      ]
    },
    {
      "name": "Size",
      "values": [
        "S",
        "M",
        "L"
      ]
    }
  ],
  "status": "active",
  "taxCode": "100",
  "transportModal": "123",
  "updatedAt": "2022-10-31T17:09:12.639088Z"
}
```

<h3 id="get-product-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[object]|true|none|Attributes of the product. Attributes are additional properties used to create site browsing filters.|
|» name|string|true|none|Attribute name.|
|» value|string|true|none|Attribute value.|
|brandId|string|true|none|Product's Brand unique identifier number.|
|brandName|string|true|none|Name of the Brand associated with the product.|
|categoryIds|[string]|true|none|Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.|
|categoryNames|[string]|true|none|Names of the product's categories, displayed in a path format.|
|createdAt|string|true|none|Date when the product was created.|
|externalId|string|false|none|Product reference unique identifier number in the store.|
|id|string|false|none|Product's unique identifier number.|
|images|[object]|true|none|Information of the images of the product.|
|» alt|string|false|none|Image alternative description.|
|» id|string|true|none|Image ID.|
|» url|string|true|none|Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).|
|name|string|true|none|Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.|
|origin|string|true|none|Origin account of the product. It is not possible to alter products where the origin is `marketplace`.|
|skus|[object]|true|none|SKUs of the product.|
|» dimensions|object|true|none|SKU dimensions.|
|» » height|number|true|none|SKU height.|
|» » length|number|true|none|SKU length.|
|» » width|number|true|none|SKU width.|
|» ean|string|false|none|Unique SKU identification code (barcode), composed of up to 13 numeric characters.|
|» externalId|string|false|none|Unique reference code created to improve the store's organization. This is not a required field.|
|» id|string|true|none|SKU unique identifier number.|
|» images|[object]|true|none|SKU's images IDs.|
|» isActive|boolean|true|none|If the SKU is active (`true`) or inactive (`false`).|
|» manufacturerCode|string|false|none|SKU reference code in the store.|
|» specs|[object]|true|none|SKU specifications. This field is mandatory, but nullable if there is only one SKU.|
|» » name|string|true|none|SKU's specification name.|
|» » value|string|true|none|SKU's specification values.|
|» weight|integer|true|none|SKU weight.|
|slug|string|true|none|Reference of the product in the URL of the store.|
|specs|[object]|true|none|Specifications that will differentiate the possible product SKUs.|
|» name|string|true|none|Specification name.|
|» values|[string]|true|none|Specification values.|
|status|string|true|none|Status of the product. Its values can be `active` or `inactive`.|
|taxCode|string \| null|false|none|Product tax code.|
|transportModal|string \| null|false|none|Transport modal of the product.|
|updatedAt|string|true|none|Last date when the product was updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Product

<a id="opIdPutProduct"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/products/189371 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "attributes": [
      {
        "name": "Fabric",
        "value": "Cotton"
      },
      {
        "name": "Gender",
        "value": "Feminine"
      }
    ],
    "brandId": "1",
    "categoryIds": [
      "732"
    ],
    "id": "189371",
    "images": [
      {
        "alt": "VTEX",
        "id": "vtex_logo.jpg",
        "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg"
      }
    ],
    "name": "VTEX 10 Shirt",
    "origin": "vtxleo7778",
    "skus": [
      {
        "dimensions": {
          "height": 2.1,
          "length": 1.6,
          "width": 1.5
        },
        "externalId": "1909621862",
        "id": "182907",
        "images": [
          "vtex_logo.jpg"
        ],
        "isActive": true,
        "manufacturerCode": "1234567",
        "name": "VTEX Shirt Black Size S",
        "specs": [
          {
            "name": "Color",
            "value": "Black"
          },
          {
            "name": "Size",
            "value": "S"
          }
        ],
        "weight": 300
      },
      {
        "dimensions": {
          "height": 2.1,
          "length": 1.6,
          "width": 1.5
        },
        "externalId": "1909621862",
        "id": "182908",
        "images": [
          "vtex_logo.jpg"
        ],
        "isActive": true,
        "manufacturerCode": "1234568",
        "name": "VTEX Shirt White Size L",
        "specs": [
          {
            "name": "Color",
            "value": "White"
          },
          {
            "name": "Size",
            "value": "L"
          }
        ],
        "weight": 300
      }
    ],
    "slug": "/vtex-shirt",
    "specs": [
      {
        "name": "Color",
        "values": [
          "Black",
          "White"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      }
    ],
    "status": "active",
    "taxCode": null,
    "transportModal": null
  }'
```

`PUT /api/catalog-seller-portal/products/{productId}`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Updates an existing product and its SKUs. 

## Request body example

```json
{
    "id": "189371",
    "status": "active",
    "name": "VTEX 10 Shirt",
    "description": "Shirt number 10 by VTEX.",
    "brandId": "1",
    "categoryIds": [
        "732"
    ],
    "specs": [
        {
            "name": "Color",
            "values": [
                "Black",
                "White"
            ]
        },
        {
            "name": "Size",
            "values": [
                "S",
                "M",
                "L"
            ]
        }
    ],
    "attributes": [
        {
            "name": "Fabric",
            "value": "Cotton"
        },
        {
            "name": "Gender",
            "value": "Feminine"
        }
    ],
    "slug": "/vtex-shirt",
    "transportModal": null,
    "taxCode": null,
    "images": [
        {
            "id": "vtex_logo.jpg",
            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
            "alt": "VTEX"
        }
    ],
    "skus": [
        {
            "name": "VTEX Shirt Black Size S",
            "externalId": "1909621862",
            "manufacturerCode": "1234567",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "Black"
                },
                {
                    "name": "Size",
                    "value": "S"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        },
        {
            "name": "VTEX Shirt White Size L",
            "externalId": "1909621862",
            "manufacturerCode": "1234568",
            "isActive": true,
            "weight": 300,
            "dimensions": {
                "width": 1.5,
                "height": 2.1,
                "length": 1.6
            },
            "specs": [
                {
                    "name": "Color",
                    "value": "White"
                },
                {
                    "name": "Size",
                    "value": "L"
                }
            ],
            "images": [
                "vtex_logo.jpg"
            ]
        }
    ],
    "origin": "vtxleo7778"
}
```

> Body parameter

```json
{
  "attributes": [
    {
      "name": "Fabric",
      "value": "Cotton"
    },
    {
      "name": "Gender",
      "value": "Feminine"
    }
  ],
  "brandId": "1",
  "categoryIds": [
    "732"
  ],
  "id": "189371",
  "images": [
    {
      "alt": "VTEX",
      "id": "vtex_logo.jpg",
      "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg"
    }
  ],
  "name": "VTEX 10 Shirt",
  "origin": "vtxleo7778",
  "skus": [
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "id": "182907",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234567",
      "name": "VTEX Shirt Black Size S",
      "specs": [
        {
          "name": "Color",
          "value": "Black"
        },
        {
          "name": "Size",
          "value": "S"
        }
      ],
      "weight": 300
    },
    {
      "dimensions": {
        "height": 2.1,
        "length": 1.6,
        "width": 1.5
      },
      "externalId": "1909621862",
      "id": "182908",
      "images": [
        "vtex_logo.jpg"
      ],
      "isActive": true,
      "manufacturerCode": "1234568",
      "name": "VTEX Shirt White Size L",
      "specs": [
        {
          "name": "Color",
          "value": "White"
        },
        {
          "name": "Size",
          "value": "L"
        }
      ],
      "weight": 300
    }
  ],
  "slug": "/vtex-shirt",
  "specs": [
    {
      "name": "Color",
      "values": [
        "Black",
        "White"
      ]
    },
    {
      "name": "Size",
      "values": [
        "S",
        "M",
        "L"
      ]
    }
  ],
  "status": "active",
  "taxCode": null,
  "transportModal": null
}
```

<h3 id="update-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|string|true|Product unique identifier number.|
|body|body|object|false|none|
|» attributes|body|[object]|true|Attributes of the product. Attributes are additional properties used to create site browsing filters.|
|» » name|body|string|true|Attribute name.|
|» » value|body|string|true|Attribute value.|
|» brandId|body|string|true|Product's Brand unique identifier number.|
|» categoryIds|body|[string]|true|Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.|
|» externalId|body|string|false|Product reference unique identifier number in the store.|
|» id|body|string|false|Product's unique identifier number.|
|» images|body|[object]|true|Information of the images of the product.|
|» » alt|body|string|false|Image alternative description.|
|» » id|body|string|true|Image ID.|
|» » url|body|string|true|Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).|
|» name|body|string|true|Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.|
|» origin|body|string|true|Origin account of the product. It is not possible to alter products where the origin is `marketplace`.|
|» skus|body|[object]|true|SKUs of the product.|
|» » dimensions|body|object|true|SKU dimensions.|
|» » » height|body|number|true|SKU height.|
|» » » length|body|number|true|SKU length.|
|» » » width|body|number|true|SKU width.|
|» » ean|body|string|false|Unique SKU identification code (barcode), composed of up to 13 numeric characters.|
|» » externalId|body|string|false|Unique reference code created to improve the store's organization. This is not a required field.|
|» » id|body|string|false|SKU unique identifier number. Do not include this field when adding a new SKU, only when editing existing SKUs.|
|» » images|body|[object]|true|SKU's images IDs.|
|» » isActive|body|boolean|true|Defines if the SKU is active (`true`) or inactive (`false`).|
|» » manufacturerCode|body|string|false|SKU reference code in the store.|
|» » name|body|string|false|SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.|
|» » specs|body|[object]|true|SKU specifications. This field is mandatory, but nullable if there is only one SKU.|
|» » » name|body|string|true|SKU's specification name.|
|» » » value|body|string|true|SKU's specification values.|
|» » weight|body|integer|true|SKU weight.|
|» slug|body|string|true|Reference of the product in the URL of the store.|
|» specs|body|[object]|true|Specifications that will differentiate the possible product SKUs.|
|» » name|body|string|true|Specification name.|
|» » values|body|[string]|true|Specification values.|
|» status|body|string|true|Status of the product. Its values can be `active` or `inactive`.|
|» taxCode|body|string \| null|false|Product tax code.|
|» transportModal|body|string \| null|false|Transport modal of the product.|

<h3 id="update-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Product Description by Product ID

<a id="opIdGetProductDescription"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/products/189371/description \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/products/{productId}/description`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves the description of a product given a Product ID.

## Response body example

```json
{
    "productId": "61",
    "description": "Beautifully handmade laptop case/sleeve made in the Nepal Himalaya. It can be slipped inside your backpack or carried alone with space for all your work bits and pieces!",
    "createdAt": "2022-10-10T19:18:45.612317Z",
    "updatedAt": "2022-10-11T18:12:58.825544Z"
}
```

<h3 id="get-product-description-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|string|true|Product unique identifier number.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2022-10-10T19:18:45.612317Z",
  "description": "Beautifully handmade laptop case/sleeve made in the Nepal Himalaya. It can be slipped inside your backpack or carried alone with space for all your work bits and pieces!",
  "productId": "61",
  "updatedAt": "2022-10-11T18:12:58.825544Z"
}
```

<h3 id="get-product-description-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-description-by-product-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|true|none|Date when the brand was created.|
|productId|string|true|none|Product's unique identifier number.|
|updatedAt|string|true|none|Last date when the brand was updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Product Description by Product ID

<a id="opIdPutProductDescription"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/products/71/description \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "description": "White shirt.",
    "productId": "71"
  }'
```

`PUT /api/catalog-seller-portal/products/{productId}/description`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Updates the description of a product given a Product ID.

## Request body example

```json
{
    "productId": "71",
    "description": "White shirt."
}
```

> Body parameter

```json
{
  "description": "White shirt.",
  "productId": "71"
}
```

<h3 id="update-product-description-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|productId|path|string|true|Product unique identifier number.|
|body|body|object|false|none|
|» description|body|string|true|Product description.|
|» productId|body|string|true|Product's unique identifier number.|

<h3 id="update-product-description-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api---seller-portal-sku">SKU</h1>

## Search for SKU

<a id="opIdSearchSKU"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/skus/_search \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/skus/_search`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves general information about an SKU taking into consideration the defined search criteria. It is mandatory to use at least one query parameter. 

## Response body example

```json
{
  "data": [
    {
      "id": "2",
      "productId": "2",
      "externalId": "1909621862"
    }
  ],
  "_metadata": {
    "total": 1,
    "from": 1,
    "to": 15
  }
}
```

<h3 id="search-for-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|from|query|string|false|The first page of the interval of the product list.|
|to|query|string|false|The last page of the interval of the product list.|
|id|query|integer|false|SKU unique idenfier number.|
|externalid|query|integer|false|SKU reference unique identifier number in the store.|

> Example responses

> 200 Response

```json
{
  "_metadata": {
    "from": 1,
    "to": 15,
    "total": 1
  },
  "data": [
    {
      "externalId": "1909621862",
      "id": "2",
      "productId": "2"
    }
  ]
}
```

<h3 id="search-for-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-for-sku-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_metadata|object|false|none|Information about the organization and exhibition of the SKU list.|
|» from|integer|false|none|The first page of the interval of the SKU list.|
|» to|integer|false|none|The last page of the interval of the SKU list.|
|» total|integer|false|none|Total of SKUs on the list.|
|data|[object]|false|none|List with information about the SKU.|
|» externalId|string|false|none|Unique identifier number of the association of the SKU with a Franchise Account.|
|» id|string|false|none|SKU unique identifier number.|
|» productId|string|false|none|Product unique identifier number.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get List of SKUs

<a id="opIdListSKU"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/skus/ids \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/skus/ids`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves general information about all SKUs.

## Response body example

```json
{
    "data": [
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "19",
        "2",
        "20",
        "21",
        "22",
        "23",
        "24"
    ],
    "_metadata": {
        "total": 65,
        "from": 1,
        "to": 15
    }
}
```

<h3 id="get-list-of-skus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|from|query|string|false|The first page of the interval of the product list.|
|to|query|string|false|The last page of the interval of the product list.|

> Example responses

> 200 Response

```json
{
  "_metadata": {
    "from": 1,
    "to": 5,
    "total": 2
  },
  "data": [
    "1",
    "2"
  ]
}
```

<h3 id="get-list-of-skus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-list-of-skus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_metadata|object|false|none|Information about the organization and exhibition of the SKU list.|
|» from|integer|false|none|The first page of the interval of the SKU list.|
|» to|integer|false|none|The last page of the interval of the SKU list.|
|» total|integer|false|none|Total of SKUs on the list.|
|data|[string]|false|none|List with information about the SKU.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api---seller-portal-brand">Brand</h1>

## Get List of Brands

<a id="opIdListBrand"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/brands \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/brands`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves general information about all brands of the store. It is mandatory to use at least one query parameter. 

## Response body example

```json
{
    "data": [
        {
            "id": "7",
            "name": "All For Paws",
            "isActive": true,
            "createdAt": "2022-01-17T19:43:14.18678Z",
            "updatedAt": "2022-01-17T19:43:14.18678Z"
        },
        {
            "id": "1",
            "name": "AOC",
            "isActive": true,
            "createdAt": "2021-08-16T21:13:40.55189Z",
            "updatedAt": "2021-08-16T21:13:40.55189Z"
        }
    ],
    "_metadata": {
        "total": 18,
        "from": 1,
        "to": 2,
        "orderBy": "name,asc"
    }
}
```

<h3 id="get-list-of-brands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|q|query|string|false|Search word.|
|from|query|string|false|The first page of the interval of the brand list.|
|to|query|string|false|The last page of the interval of the brand list.|
|orderBy|query|string|false|The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order.|
|name|query|string|false|Brand name.|

> Example responses

> 200 Response

```json
{
  "_metadata": {
    "from": 1,
    "orderBy": "name,desc",
    "to": 10,
    "total": 1399
  },
  "data": [
    {
      "createdAt": "2021-01-18T14:41:45.696488+00:00",
      "id": "863",
      "isActive": false,
      "name": "Zwilling",
      "updatedAt": "2021-01-18T14:41:45.696488+00:00"
    },
    {
      "createdAt": "2021-01-18T14:45:32.900176+00:00",
      "id": "1298",
      "isActive": false,
      "name": "Zooz Pets",
      "updatedAt": "2021-01-18T14:45:32.900176+00:00"
    }
  ]
}
```

<h3 id="get-list-of-brands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-list-of-brands-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_metadata|object|true|none|Information about the organization and exhibition of the brand list.|
|» from|integer|true|none|The first page of the interval of the brand list.|
|» orderBy|string|true|none|The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order.|
|» to|integer|true|none|The last page of the interval of the brand list.|
|» total|integer|true|none|Total of brands on the list.|
|data|[object]|true|none|List with information about the store's brands.|
|» createdAt|string|true|none|Date when the brand was created.|
|» id|string|true|none|Brand unique identifier number.|
|» isActive|boolean|true|none|The condition defines if the brand is active (`true`) or inactive (`false`).|
|» name|string|true|none|Brand Name.|
|» updatedAt|string|true|none|Last date when the brand was updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Brand

<a id="opIdPostBrand"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/brands \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "isActive": true,
    "name": "Zwilling"
  }'
```

`POST /api/catalog-seller-portal/brands`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Creates a new brand.

## Request body example

```json
{
  "name": "Zwilling",
  "isActive": true
}
```

## Response body example

```json
{
  "id": "20",
  "name": "Zwilling",
  "isActive": true,
  "createdAt": "2021-05-17T15:20:36.077253+00:00",
  "updatedAt": "2021-01-18T14:41:45.696488+00:00"
}
```

> Body parameter

```json
{
  "isActive": true,
  "name": "Zwilling"
}
```

<h3 id="create-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» isActive|body|boolean|true|The condition defines if the brand is active (`true`) or inactive (`false`).|
|» name|body|string|true|Brand Name.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2021-05-17T15:20:36.077253+00:00",
  "id": "863",
  "isActive": true,
  "name": "Zwilling",
  "updatedAt": "2021-01-18T14:41:45.696488+00:00"
}
```

<h3 id="create-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-brand-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|false|none|Date when the brand was created.|
|id|string|false|none|Brand unique identifier number.|
|isActive|boolean|false|none|The condition defines if the brand is active (`true`) or inactive (`false`).|
|name|string|false|none|Brand Name.|
|updatedAt|string|false|none|Last date when the brand was updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Brand by ID

<a id="opIdGetBrand"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/brands/863 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/brands/{brandId}`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves general information about a brand by its ID.

## Response body example

```json
{
  "id": "863",
  "name": "Zwilling",
  "isActive": false,
  "createdAt": "2021-01-18T14:41:45.696488+00:00",
  "updatedAt": "2021-01-18T14:41:45.696488+00:00"
}
```

<h3 id="get-brand-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|brandId|path|string|true|Brand unique identifier number.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2021-01-18T14:41:45.696488+00:00",
  "id": "863",
  "isActive": false,
  "name": "Zwilling",
  "updatedAt": "2021-01-18T14:41:45.696488+00:00"
}
```

<h3 id="get-brand-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-brand-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|false|none|Date when the brand was created.|
|id|string|false|none|Brand unique identifier number.|
|isActive|boolean|false|none|The condition defines if the brand is active (`true`) or inactive (`false`).|
|name|string|false|none|Brand Name.|
|updatedAt|string|false|none|Last date when the brand was updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Brand

<a id="opIdPutBrand"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/brands/20 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "id": "20",
    "isActive": true,
    "name": "Zwilling"
  }'
```

`PUT /api/catalog-seller-portal/brands/{brandId}`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Updates an existing brand. 

## Request body example

```json
{
  "id": "20",
  "name": "Zwilling",
  "isActive": true
}
```

> Body parameter

```json
{
  "id": "20",
  "isActive": true,
  "name": "Zwilling"
}
```

<h3 id="update-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|brandId|path|string|true|Brand unique identifier number.|
|body|body|object|false|none|
|» id|body|string|true|Brand unique identifier number.|
|» isActive|body|boolean|true|The condition defines if the brand is active (`true`) or inactive (`false`).|
|» name|body|string|true|Brand Name.|

<h3 id="update-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="catalog-api---seller-portal-category">Category</h1>

## Get Category Tree

<a id="opIdGetCategoryTree"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/category-tree \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/category-tree`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves general information about the category tree from the store.

## Response body example

```json
{
    "roots": [
        {
            "value": {
                "id": "2",
                "name": "Departamento Artesanato",
                "isActive": true
            },
            "children": [
                {
                    "value": {
                        "id": "3",
                        "name": "Artesanato de Barro",
                        "isActive": false
                    },
                    "children": [
                        {
                            "value": {
                                "id": "4",
                                "name": "Artesanato de Barro Vermelho",
                                "isActive": false
                            },
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "value": {
                "id": "5",
                "name": "Perfumes",
                "isActive": false
            },
            "children": [
                {
                    "value": {
                        "id": "6",
                        "name": "Perfume Feminino",
                        "isActive": false
                    },
                    "children": []
                },
                {
                    "value": {
                        "id": "7",
                        "name": "Perfume Masculino",
                        "isActive": false,
                        "displayOnMenu": false,
                        "score": 0,
                        "filterByBrand": false,
                        "isClickable": false
                    },
                    "children": []
                }
            ]
        }
    ],
    "createdAt": "2021-08-16T20:57:13.070813Z",
    "updatedAt": "2022-07-07T14:24:56.416337Z"
}
```

<h3 id="get-category-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|depth|query|integer|false|Category tree level.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2021-08-16T20:57:13.070813Z",
  "roots": [
    {
      "children": [
        {
          "children": [
            {
              "children": [],
              "value": {
                "id": "4",
                "isActive": false,
                "name": "Artesanato de Barro Vermelho"
              }
            }
          ],
          "value": {
            "id": "3",
            "isActive": false,
            "name": "Artesanato de Barro"
          }
        }
      ],
      "value": {
        "id": "2",
        "isActive": true,
        "name": "Departamento Artesanato"
      }
    },
    {
      "children": [
        {
          "children": [],
          "value": {
            "id": "6",
            "isActive": false,
            "name": "Perfume Feminino"
          }
        },
        {
          "children": [],
          "value": {
            "displayOnMenu": false,
            "filterByBrand": false,
            "id": "7",
            "isActive": false,
            "isClickable": false,
            "name": "Perfume Masculino",
            "score": 0
          }
        }
      ],
      "value": {
        "id": "5",
        "isActive": false,
        "name": "Perfumes"
      }
    }
  ],
  "updatedAt": "2022-07-07T14:24:56.416337Z"
}
```

<h3 id="get-category-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-category-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|false|none|Date when the category tree was created.|
|roots|[object]|true|none|List of all categories of the store.|
|» children|[object]|true|none|List of all children categories of the parent category.|
|» » value|object|true|none|Object with values of a children category.|
|» » » id|string|true|none|Children category unique identifier number.|
|» » » isActive|boolean|true|none|The condition defines if the children category is active (`true`) or inactive (`false`).|
|» » » name|string|true|none|Children category Name.|
|» value|object|true|none|Object with values of a category.|
|» » id|string|true|none|Category unique identifier number.|
|» » isActive|boolean|true|none|The condition defines if the category is active (`true`) or inactive (`false`).|
|» » name|string|true|none|Category Name.|
|updatedAt|string|false|none|Last date when the category tree was updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Category Tree

<a id="opIdUpdateCategoryTree"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/category-tree \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "roots": [
      {
        "children": [
          {
            "children": [
              {
                "children": [],
                "value": {
                  "id": "4",
                  "isActive": false,
                  "name": "Artesanato de Barro Vermelho"
                }
              }
            ],
            "value": {
              "id": "3",
              "isActive": false,
              "name": "Artesanato de Barro"
            }
          }
        ],
        "value": {
          "id": "2",
          "isActive": true,
          "name": "Departamento Artesanato"
        }
      },
      {
        "children": [
          {
            "children": [],
            "value": {
              "id": "6",
              "isActive": false,
              "name": "Perfume Feminino"
            }
          },
          {
            "children": [],
            "value": {
              "id": "7",
              "isActive": false,
              "name": "Perfume Masculino"
            }
          }
        ],
        "value": {
          "id": "5",
          "isActive": false,
          "name": "Perfumes"
        }
      }
    ]
  }'
```

`PUT /api/catalog-seller-portal/category-tree`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Updates the existing categories in the category tree.

## Request body example

```json
{
  "roots": [
    {
      "value": {
        "id": "2",
        "name": "Departamento Artesanato",
        "isActive": true
      },
      "children": [
        {
          "value": {
            "id": "3",
            "name": "Artesanato de Barro",
            "isActive": false
          },
          "children": [
            {
              "value": {
                "id": "4",
                "name": "Artesanato de Barro Vermelho",
                "isActive": false
              },
              "children": []
            }
          ]
        }
      ]
    },
    {
      "value": {
        "id": "5",
        "name": "Perfumes",
        "isActive": false
      },
      "children": [
        {
          "value": {
            "id": "6",
            "name": "Perfume Feminino",
            "isActive": false
          },
          "children": []
        },
        {
          "value": {
            "id": "7",
            "name": "Perfume Masculino",
            "isActive": false,
            "displayOnMenu": false,
            "score": 0,
            "filterByBrand": false,
            "isClickable": false
          },
          "children": []
        }
      ]
    }
  ]
}
```

> Body parameter

```json
{
  "roots": [
    {
      "children": [
        {
          "children": [
            {
              "children": [],
              "value": {
                "id": "4",
                "isActive": false,
                "name": "Artesanato de Barro Vermelho"
              }
            }
          ],
          "value": {
            "id": "3",
            "isActive": false,
            "name": "Artesanato de Barro"
          }
        }
      ],
      "value": {
        "id": "2",
        "isActive": true,
        "name": "Departamento Artesanato"
      }
    },
    {
      "children": [
        {
          "children": [],
          "value": {
            "id": "6",
            "isActive": false,
            "name": "Perfume Feminino"
          }
        },
        {
          "children": [],
          "value": {
            "id": "7",
            "isActive": false,
            "name": "Perfume Masculino"
          }
        }
      ],
      "value": {
        "id": "5",
        "isActive": false,
        "name": "Perfumes"
      }
    }
  ]
}
```

<h3 id="update-category-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|OK|
|» roots|body|[object]|true|List of all categories of the store.|
|» » children|body|[object]|true|List of all children categories of the parent category.|
|» » » value|body|object|true|Object with values of a children category.|
|» » » » id|body|string|true|Children category unique identifier number.|
|» » » » isActive|body|boolean|true|The condition defines if the children category is active (`true`) or inactive (`false`).|
|» » » » name|body|string|true|Children category Name.|
|» » value|body|object|true|Object with values of a category.|
|» » » id|body|string|true|Category unique identifier number.|
|» » » isActive|body|boolean|true|The condition defines if the category is active (`true`) or inactive (`false`).|
|» » » name|body|string|true|Category Name.|

<h3 id="update-category-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Category

<a id="opIdCreateCategory"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/category-tree/categories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Name": "Beauty",
    "parentId": "567"
  }'
```

`POST /api/catalog-seller-portal/category-tree/categories`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Creates a new category.

## Request body example

```json
{
  "parentId": "567",
  "Name": "Beauty"
}
```

## Response body example

```json
{
  "value": {
    "id": "1",
    "name": "Beauty",
    "isActive": false
  },
  "children": [
    {
      "value": {
        "id": "2",
        "name": "Perfumes",
        "isActive": false
      }
    }
  ]
}
```

> Body parameter

```json
{
  "Name": "Beauty",
  "parentId": "567"
}
```

<h3 id="create-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» Name|body|string|true|Category name.|
|» parentId|body|string|true|Parent category unique identifier number.|

> Example responses

> 200 Response

```json
{
  "children": [
    {
      "value": {
        "id": "2",
        "isActive": false,
        "name": "Perfumes"
      }
    }
  ],
  "value": {
    "id": "1",
    "isActive": false,
    "name": "Beauty"
  }
}
```

<h3 id="create-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[object]|true|none|List of all children categories of the parent category.|
|» value|object|true|none|Object with values of a children category.|
|» » id|string|true|none|Children category unique identifier number.|
|» » isActive|boolean|true|none|The condition defines if the children category is active (`true`) or inactive (`false`).|
|» » name|string|true|none|Children category Name.|
|value|object|true|none|Object with values of a category.|
|» id|string|true|none|Category unique identifier number.|
|» isActive|boolean|true|none|The condition defines if the category is active (`true`) or inactive (`false`).|
|» name|string|true|none|Category Name.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Category by ID

<a id="opIdGetbyid"></a>

> Code samples

```bash
curl https://example.com/api/catalog-seller-portal/category-tree/categories/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/catalog-seller-portal/category-tree/categories/{categoryId}`

 >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). 

 Retrieves general information about a category by its ID. 

## Response body example

```json
{
  "value": {
    "id": "1",
    "name": "sandboxintegracao",
    "isActive": false
  },
  "children": [
    {
      "value": {
        "id": "2",
        "name": "Perfumes",
        "isActive": false
      }
    }
  ]
}
```

<h3 id="get-category-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|categoryId|path|string|true|Category unique identifier number.|

> Example responses

> 200 Response

```json
{
  "children": [
    {
      "value": {
        "id": "2",
        "isActive": false,
        "name": "Perfumes"
      }
    }
  ],
  "value": {
    "id": "1",
    "isActive": false,
    "name": "sandboxintegracao"
  }
}
```

<h3 id="get-category-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-category-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[object]|true|none|List of all children categories of the parent category.|
|» value|object|true|none|Object with values of a children category.|
|» » id|string|true|none|Children category unique identifier number.|
|» » isActive|boolean|true|none|The condition defines if the children category is active (`true`) or inactive (`false`).|
|» » name|string|true|none|Children category Name.|
|value|object|true|none|Object with values of a category.|
|» id|string|true|none|Category unique identifier number.|
|» isActive|boolean|true|none|The condition defines if the category is active (`true`) or inactive (`false`).|
|» name|string|true|none|Category Name.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>
