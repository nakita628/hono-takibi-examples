<h1 id="product-library-api">Product Library API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Product Library API is used for managing merchant's product information and product images.

Base URLs:

* <a href="https://products.izettle.com">https://products.izettle.com</a> - Production

# Authentication

- oAuth2 authentication. For more information about authorization API visit: https://developer.zettle.com/docs/api/oauth/overview

    - Flow: authorizationCode
    - Authorization URL = [https://oauth.zettle.com/authorize](https://oauth.zettle.com/authorize)
    - Token URL = [https://oauth.zettle.com/token](https://oauth.zettle.com/token)

|Scope|Scope Description|
|---|---|
|READ:PRODUCT|Access to read product library data|
|WRITE:PRODUCT|Access to write product library data|

<h1 id="product-library-api-categories">categories</h1>

## Retrieve all categories

<a id="opIdgetProductTypes"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/categories/v2 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/categories/v2`

<h3 id="retrieve-all-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "categories": [
    {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

<h3 id="retrieve-all-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all categories|[CategoryResponse](#schemacategoryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Create a new category

<a id="opIdcreateCategories"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/categories/v2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      {
        "name": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }'
```

`POST /organizations/{organizationUuid}/categories/v2`

> Body parameter

```json
{
  "categories": [
    {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

<h3 id="create-a-new-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|body|body|[CreateCategoriesRequest](#schemacreatecategoriesrequest)|true|none|
|» categories|body|[[CategoryDTO](#schemacategorydto)]|true|none|

<h3 id="create-a-new-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Category created|None|
|400|Bad Request|Category already exists|None|
|404|Not Found|Organization not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Delete a category

<a id="opIddeleteCategory"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/categories/v2/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{organizationUuid}/categories/v2/{categoryUuid}`

<h3 id="delete-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|categoryUuid|path|string(uuid)|true|none|

<h3 id="delete-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Category deleted|None|
|404|Not Found|Organization not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Rename a category

<a id="opIdrenameCategory"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/categories/v2/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /organizations/{organizationUuid}/categories/v2/{categoryUuid}`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="rename-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|categoryUuid|path|string(uuid)|true|none|
|body|body|[RenameCategoryRequest](#schemarenamecategoryrequest)|true|none|
|» name|body|string|true|none|

<h3 id="rename-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Category renamed|None|
|400|Bad Request|Category already exists|None|
|404|Not Found|Organization not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

<h1 id="product-library-api-discounts">discounts</h1>

## Retrieve all discounts

<a id="opIdgetAllDiscounts"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/discounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/discounts`

<h3 id="retrieve-all-discounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "amount": {
      "amount": 0,
      "currencyId": "AED"
    },
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "etag": "string",
    "externalReference": "string",
    "imageLookupKeys": [
      "string"
    ],
    "name": "string",
    "percentage": 0,
    "updated": "1970-01-01T00:00:00Z",
    "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
]
```

<h3 id="retrieve-all-discounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all discounts|Inline|

<h3 id="retrieve-all-discounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DiscountResponse](#schemadiscountresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Create a discount

<a id="opIdcreateDiscount"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/discounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": {
      "amount": 0,
      "currencyId": "AED"
    },
    "description": "string",
    "externalReference": "string",
    "imageLookupKeys": [
      "string"
    ],
    "name": "string",
    "percentage": 0,
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /organizations/{organizationUuid}/discounts`

Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header

> Body parameter

```json
{
  "amount": {
    "amount": 0,
    "currencyId": "AED"
  },
  "description": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "name": "string",
  "percentage": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-a-discount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|body|body|[DiscountRequest](#schemadiscountrequest)|false|none|
|» amount|body|[Price](#schemaprice)|false|none|
|» description|body|string|false|none|
|» externalReference|body|string|false|none|
|» imageLookupKeys|body|[string]|false|none|
|» name|body|string|false|none|
|» percentage|body|number|false|none|
|» uuid|body|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "developerMessage": "string",
  "errorType": "string",
  "violations": [
    {
      "constraintType": "MUST_BE_FALSE",
      "developerMessage": "string",
      "expected": "string",
      "propertyName": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="create-a-discount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Discount created|None|
|400|Bad Request|Invalid request body|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|ETag|string||ETag value|
|201|Location|string||Location of newly created Discount|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Retrieve a single discount

<a id="opIdgetDiscount"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/discounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/discounts/{discountUuid}`

Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.

<h3 id="retrieve-a-single-discount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|none|
|organizationUuid|path|string(uuid)|true|none|
|discountUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "amount": {
    "amount": 0,
    "currencyId": "AED"
  },
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "etag": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "name": "string",
  "percentage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-a-single-discount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Discount|[DiscountResponse](#schemadiscountresponse)|
|304|Not Modified|Not modified|None|
|404|Not Found|Organization or Discount not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||ETag value|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Update a single discount

<a id="opIdupdateDiscount"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/discounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": {
      "amount": 0,
      "currencyId": "AED"
    },
    "description": "string",
    "externalReference": "string",
    "imageLookupKeys": [
      "string"
    ],
    "name": "string",
    "percentage": 0,
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`PUT /organizations/{organizationUuid}/discounts/{discountUuid}`

Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.

> Body parameter

```json
{
  "amount": {
    "amount": 0,
    "currencyId": "AED"
  },
  "description": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "name": "string",
  "percentage": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="update-a-single-discount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|none|
|organizationUuid|path|string(uuid)|true|none|
|discountUuid|path|string(uuid)|true|none|
|body|body|[DiscountRequest](#schemadiscountrequest)|true|none|
|» amount|body|[Price](#schemaprice)|false|none|
|» description|body|string|false|none|
|» externalReference|body|string|false|none|
|» imageLookupKeys|body|[string]|false|none|
|» name|body|string|false|none|
|» percentage|body|number|false|none|
|» uuid|body|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "developerMessage": "string",
  "errorType": "string",
  "violations": [
    {
      "constraintType": "MUST_BE_FALSE",
      "developerMessage": "string",
      "expected": "string",
      "propertyName": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="update-a-single-discount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Discount updated|None|
|400|Bad Request|Invalid request body|[ErrorResponse](#schemaerrorresponse)|
|412|Precondition Failed|Precondition failed: ETag did not match the expected value|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|ETag|string||ETag value|
|204|Location|string||Location of updated Discount|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Delete a single discount

<a id="opIddeleteDiscount"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/discounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{organizationUuid}/discounts/{discountUuid}`

<h3 id="delete-a-single-discount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|discountUuid|path|string(uuid)|true|none|

<h3 id="delete-a-single-discount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Discount deleted|None|
|404|Not Found|Organization or Discount not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

<h1 id="product-library-api-images">images</h1>

## Retrieve all library item images

<a id="opIdgetAllImageUrls"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/images \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/images`

Retrieves all library items images used by the organization, sorted by updated date

<h3 id="retrieve-all-library-item-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "imageUrls": [
    "string"
  ]
}
```

<h3 id="retrieve-all-library-item-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all image urls|[LibraryImagesResponse](#schemalibraryimagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

<h1 id="product-library-api-import">import</h1>

## Get status for latest import

<a id="opIdgetLatestImportStatus"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/import/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/import/status`

<h3 id="get-status-for-latest-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "errorMessage": "string",
  "finished": "1970-01-01T00:00:00Z",
  "items": 0,
  "state": "IMPORTING",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-status-for-latest-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Import status|[ImportResponse](#schemaimportresponse)|
|404|Not Found|Organization or import not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Get status for an import

<a id="opIdgetStatusByUuid"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/import/status/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/import/status/{importUuid}`

<h3 id="get-status-for-an-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|importUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "errorMessage": "string",
  "finished": "1970-01-01T00:00:00Z",
  "items": 0,
  "state": "IMPORTING",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-status-for-an-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Import status|[ImportResponse](#schemaimportresponse)|
|404|Not Found|Organization or import not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Import library items

<a id="opIdimportLibraryV2"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/import/v2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "products": [
      {
        "categories": [
          "string"
        ],
        "category": {
          "name": "string",
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "description": "string",
        "externalReference": "string",
        "imageLookupKeys": [
          "string"
        ],
        "metadata": {
          "inPos": true,
          "source": {
            "external": true,
            "name": "string"
          }
        },
        "name": "string",
        "online": {
          "description": "string",
          "presentation": {
            "additionalImageUrls": [
              "http://example.com"
            ],
            "displayImageUrl": "http://example.com",
            "mediaUrls": [
              "http://example.com"
            ]
          },
          "seo": {
            "metaDescription": "string",
            "slug": "string",
            "title": "string"
          },
          "shipping": {
            "shippingPricingModel": "FREE",
            "weight": {
              "unit": "kg",
              "weight": 0
            },
            "weightInGrams": 0
          },
          "status": "ACTIVE",
          "title": "string"
        },
        "presentation": {
          "backgroundColor": "string",
          "imageUrl": "string",
          "textColor": "string"
        },
        "taxCode": "string",
        "taxExempt": true,
        "taxRates": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "unitName": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "variantOptionDefinitions": {
          "definitions": [
            {
              "name": "string",
              "properties": [
                {
                  "imageUrl": "string",
                  "value": "string"
                }
              ]
            }
          ]
        },
        "variants": [
          {
            "barcode": "string",
            "costPrice": {
              "amount": 0,
              "currencyId": "AED"
            },
            "description": "string",
            "name": "string",
            "options": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "presentation": {
              "backgroundColor": "string",
              "imageUrl": "string",
              "textColor": "string"
            },
            "price": {
              "amount": 0,
              "currencyId": "AED"
            },
            "sku": "string",
            "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "vatPercentage": 0
          }
        ],
        "vatPercentage": 0
      }
    ]
  }'
```

`POST /organizations/{organizationUuid}/import/v2`

> Body parameter

```json
{
  "products": [
    {
      "categories": [
        "string"
      ],
      "category": {
        "name": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "description": "string",
      "externalReference": "string",
      "imageLookupKeys": [
        "string"
      ],
      "metadata": {
        "inPos": true,
        "source": {
          "external": true,
          "name": "string"
        }
      },
      "name": "string",
      "online": {
        "description": "string",
        "presentation": {
          "additionalImageUrls": [
            "http://example.com"
          ],
          "displayImageUrl": "http://example.com",
          "mediaUrls": [
            "http://example.com"
          ]
        },
        "seo": {
          "metaDescription": "string",
          "slug": "string",
          "title": "string"
        },
        "shipping": {
          "shippingPricingModel": "FREE",
          "weight": {
            "unit": "kg",
            "weight": 0
          },
          "weightInGrams": 0
        },
        "status": "ACTIVE",
        "title": "string"
      },
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "taxCode": "string",
      "taxExempt": true,
      "taxRates": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "unitName": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "variantOptionDefinitions": {
        "definitions": [
          {
            "name": "string",
            "properties": [
              {
                "imageUrl": "string",
                "value": "string"
              }
            ]
          }
        ]
      },
      "variants": [
        {
          "barcode": "string",
          "costPrice": {
            "amount": 0,
            "currencyId": "AED"
          },
          "description": "string",
          "name": "string",
          "options": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "presentation": {
            "backgroundColor": "string",
            "imageUrl": "string",
            "textColor": "string"
          },
          "price": {
            "amount": 0,
            "currencyId": "AED"
          },
          "sku": "string",
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "vatPercentage": 0
        }
      ],
      "vatPercentage": 0
    }
  ]
}
```

<h3 id="import-library-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|body|body|[BulkImportRequest](#schemabulkimportrequest)|true|none|
|» products|body|[[FullProductUpdateRequest](#schemafullproductupdaterequest)]|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "errorMessage": "string",
  "finished": "1970-01-01T00:00:00Z",
  "items": 0,
  "state": "IMPORTING",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "developerMessage": "string",
  "errorType": "string",
  "violations": [
    {
      "constraintType": "MUST_BE_FALSE",
      "developerMessage": "string",
      "expected": "string",
      "propertyName": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="import-library-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Import status|[ImportResponse](#schemaimportresponse)|
|400|Bad Request|Invalid request body|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

<h1 id="product-library-api-library">library</h1>

## Retrieve the entire library

<a id="opIdgetLibrary"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/library \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/library`

Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:

<https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel="next"

where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any "next" value, all items have been sent to the client.

Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not "next" (there will never be more than one "next" though). See more at:

    IETF: https://tools.ietf.org/html/rfc5988
    GitHub: https://developer.github.com/guides/traversing-with-pagination/

If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.


<h3 id="retrieve-the-entire-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|eventLogUuid|query|string(uuid)|false|none|
|limit|query|integer(int32)|false|none|
|offset|query|string|false|none|
|all|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "deletedDiscounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "deletedProducts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "discounts": [
    {
      "amount": {
        "amount": 0,
        "currencyId": "AED"
      },
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "etag": "string",
      "externalReference": "string",
      "imageLookupKeys": [
        "string"
      ],
      "name": "string",
      "percentage": 0,
      "updated": "1970-01-01T00:00:00Z",
      "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "fromEventLogUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "products": [
    {
      "categories": [
        "string"
      ],
      "category": {
        "name": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "etag": "string",
      "externalReference": "string",
      "imageLookupKeys": [
        "string"
      ],
      "metadata": {
        "inPos": true,
        "source": {
          "external": true,
          "name": "string"
        }
      },
      "name": "string",
      "online": {
        "description": "string",
        "presentation": {
          "additionalImageUrls": [
            "http://example.com"
          ],
          "displayImageUrl": "http://example.com",
          "mediaUrls": [
            "http://example.com"
          ]
        },
        "seo": {
          "metaDescription": "string",
          "slug": "string",
          "title": "string"
        },
        "shipping": {
          "shippingPricingModel": "FREE",
          "weight": {
            "unit": "kg",
            "weight": 0
          },
          "weightInGrams": 0
        },
        "status": "ACTIVE",
        "title": "string"
      },
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "taxCode": "string",
      "taxExempt": true,
      "taxRates": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "unitName": "string",
      "updated": "1970-01-01T00:00:00Z",
      "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "variantOptionDefinitions": {
        "definitions": [
          {
            "name": "string",
            "properties": [
              {
                "imageUrl": "string",
                "value": "string"
              }
            ]
          }
        ]
      },
      "variants": [
        {
          "barcode": "string",
          "costPrice": {
            "amount": 0,
            "currencyId": "AED"
          },
          "description": "string",
          "name": "string",
          "options": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "presentation": {
            "backgroundColor": "string",
            "imageUrl": "string",
            "textColor": "string"
          },
          "price": {
            "amount": 0,
            "currencyId": "AED"
          },
          "sku": "string",
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "vatPercentage": 0
        }
      ],
      "vatPercentage": 0
    }
  ],
  "untilEventLogUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="retrieve-the-entire-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of library items|[LibraryResponse](#schemalibraryresponse)|
|412|Precondition Failed|Invalid event log uuid. If the eventLogUuid query parameter was provided a 412 response indicates that the number of changes in the product exceeds the limit since that particular event (currently 500 changes). <br>When this happens, the client should remove the eventLogUuid query parameters and try again.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||If the response is paginated this header will contain the URI for the next page. See more at: https://tools.ietf.org/html/rfc5988|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

<h1 id="product-library-api-products">products</h1>

## Retrieve all products visible in POS

<a id="opIdgetAllProductsInPos"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/products`

<h3 id="retrieve-all-products-visible-in-pos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "categories": [
      "string"
    ],
    "category": {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "etag": "string",
    "externalReference": "string",
    "imageLookupKeys": [
      "string"
    ],
    "metadata": {
      "inPos": true,
      "source": {
        "external": true,
        "name": "string"
      }
    },
    "name": "string",
    "online": {
      "description": "string",
      "presentation": {
        "additionalImageUrls": [
          "http://example.com"
        ],
        "displayImageUrl": "http://example.com",
        "mediaUrls": [
          "http://example.com"
        ]
      },
      "seo": {
        "metaDescription": "string",
        "slug": "string",
        "title": "string"
      },
      "shipping": {
        "shippingPricingModel": "FREE",
        "weight": {
          "unit": "kg",
          "weight": 0
        },
        "weightInGrams": 0
      },
      "status": "ACTIVE",
      "title": "string"
    },
    "presentation": {
      "backgroundColor": "string",
      "imageUrl": "string",
      "textColor": "string"
    },
    "taxCode": "string",
    "taxExempt": true,
    "taxRates": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "unitName": "string",
    "updated": "1970-01-01T00:00:00Z",
    "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "variantOptionDefinitions": {
      "definitions": [
        {
          "name": "string",
          "properties": [
            {
              "imageUrl": "string",
              "value": "string"
            }
          ]
        }
      ]
    },
    "variants": [
      {
        "barcode": "string",
        "costPrice": {
          "amount": 0,
          "currencyId": "AED"
        },
        "description": "string",
        "name": "string",
        "options": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "presentation": {
          "backgroundColor": "string",
          "imageUrl": "string",
          "textColor": "string"
        },
        "price": {
          "amount": 0,
          "currencyId": "AED"
        },
        "sku": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "vatPercentage": 0
      }
    ],
    "vatPercentage": 0
  }
]
```

<h3 id="retrieve-all-products-visible-in-pos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of products|Inline|

<h3 id="retrieve-all-products-visible-in-pos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductResponse](#schemaproductresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Create a new product

<a id="opIdcreateProduct"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      "string"
    ],
    "category": {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "createWithDefaultTax": true,
    "description": "string",
    "externalReference": "string",
    "imageLookupKeys": [
      "string"
    ],
    "metadata": {
      "inPos": true,
      "source": {
        "external": true,
        "name": "string"
      }
    },
    "name": "string",
    "online": {
      "description": "string",
      "presentation": {
        "additionalImageUrls": [
          "http://example.com"
        ],
        "displayImageUrl": "http://example.com",
        "mediaUrls": [
          "http://example.com"
        ]
      },
      "seo": {
        "metaDescription": "string",
        "slug": "string",
        "title": "string"
      },
      "shipping": {
        "shippingPricingModel": "FREE",
        "weight": {
          "unit": "kg",
          "weight": 0
        },
        "weightInGrams": 0
      },
      "status": "ACTIVE",
      "title": "string"
    },
    "presentation": {
      "backgroundColor": "string",
      "imageUrl": "string",
      "textColor": "string"
    },
    "taxCode": "string",
    "taxExempt": true,
    "taxRates": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "unitName": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "variantOptionDefinitions": {
      "definitions": [
        {
          "name": "string",
          "properties": [
            {
              "imageUrl": "string",
              "value": "string"
            }
          ]
        }
      ]
    },
    "variants": [
      {
        "barcode": "string",
        "costPrice": {
          "amount": 0,
          "currencyId": "AED"
        },
        "description": "string",
        "name": "string",
        "options": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "presentation": {
          "backgroundColor": "string",
          "imageUrl": "string",
          "textColor": "string"
        },
        "price": {
          "amount": 0,
          "currencyId": "AED"
        },
        "sku": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "vatPercentage": 0
      }
    ],
    "vatPercentage": 0
  }'
```

`POST /organizations/{organizationUuid}/products`

> Body parameter

```json
{
  "categories": [
    "string"
  ],
  "category": {
    "name": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "createWithDefaultTax": true,
  "description": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "metadata": {
    "inPos": true,
    "source": {
      "external": true,
      "name": "string"
    }
  },
  "name": "string",
  "online": {
    "description": "string",
    "presentation": {
      "additionalImageUrls": [
        "http://example.com"
      ],
      "displayImageUrl": "http://example.com",
      "mediaUrls": [
        "http://example.com"
      ]
    },
    "seo": {
      "metaDescription": "string",
      "slug": "string",
      "title": "string"
    },
    "shipping": {
      "shippingPricingModel": "FREE",
      "weight": {
        "unit": "kg",
        "weight": 0
      },
      "weightInGrams": 0
    },
    "status": "ACTIVE",
    "title": "string"
  },
  "presentation": {
    "backgroundColor": "string",
    "imageUrl": "string",
    "textColor": "string"
  },
  "taxCode": "string",
  "taxExempt": true,
  "taxRates": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "unitName": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "imageUrl": "string",
            "value": "string"
          }
        ]
      }
    ]
  },
  "variants": [
    {
      "barcode": "string",
      "costPrice": {
        "amount": 0,
        "currencyId": "AED"
      },
      "description": "string",
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "price": {
        "amount": 0,
        "currencyId": "AED"
      },
      "sku": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "vatPercentage": 0
    }
  ],
  "vatPercentage": 0
}
```

<h3 id="create-a-new-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|returnEntity|query|boolean|false|none|
|body|body|[ProductCreateRequest](#schemaproductcreaterequest)|true|none|
|» categories|body|[string]|false|none|
|» category|body|[CategoryDTO](#schemacategorydto)|false|none|
|» createWithDefaultTax|body|boolean|false|none|
|» description|body|string|false|none|
|» externalReference|body|string|false|none|
|» imageLookupKeys|body|[string]|false|none|
|» metadata|body|[MetadataDTO](#schemametadatadto)|false|none|
|» name|body|string|true|none|
|» online|body|[OnlineProperties](#schemaonlineproperties)|false|none|
|» presentation|body|[PresentationDTO](#schemapresentationdto)|false|none|
|» taxCode|body|string|false|none|
|» taxExempt|body|boolean|false|none|
|» taxRates|body|[string(uuid)]|false|none|
|» unitName|body|string|false|none|
|» uuid|body|string(uuid)|true|none|
|» variantOptionDefinitions|body|[VariantOptionDefinitions](#schemavariantoptiondefinitions)|false|none|
|» variants|body|[[VariantDTO](#schemavariantdto)]|false|none|
|» vatPercentage|body|number|false|none|

> Example responses

> 201 Response

```json
{
  "categories": [
    "string"
  ],
  "category": {
    "name": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "etag": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "metadata": {
    "inPos": true,
    "source": {
      "external": true,
      "name": "string"
    }
  },
  "name": "string",
  "online": {
    "description": "string",
    "presentation": {
      "additionalImageUrls": [
        "http://example.com"
      ],
      "displayImageUrl": "http://example.com",
      "mediaUrls": [
        "http://example.com"
      ]
    },
    "seo": {
      "metaDescription": "string",
      "slug": "string",
      "title": "string"
    },
    "shipping": {
      "shippingPricingModel": "FREE",
      "weight": {
        "unit": "kg",
        "weight": 0
      },
      "weightInGrams": 0
    },
    "status": "ACTIVE",
    "title": "string"
  },
  "presentation": {
    "backgroundColor": "string",
    "imageUrl": "string",
    "textColor": "string"
  },
  "taxCode": "string",
  "taxExempt": true,
  "taxRates": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "unitName": "string",
  "updated": "1970-01-01T00:00:00Z",
  "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "imageUrl": "string",
            "value": "string"
          }
        ]
      }
    ]
  },
  "variants": [
    {
      "barcode": "string",
      "costPrice": {
        "amount": 0,
        "currencyId": "AED"
      },
      "description": "string",
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "price": {
        "amount": 0,
        "currencyId": "AED"
      },
      "sku": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "vatPercentage": 0
    }
  ],
  "vatPercentage": 0
}
```

<h3 id="create-a-new-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Product created. It will include the Product in the response only if 'returnEntity' is true|[ProductResponse](#schemaproductresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|ETag|string||ETag value|
|201|Location|string||Location of newly created Product|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Delete a list of products

<a id="opIddeleteProducts"></a>

> Code samples

```bash
curl 'https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products?uuid=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{organizationUuid}/products`

<h3 id="delete-a-list-of-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|uuid|query|[string(uuid)]|true|List of product UUIDs to be deleted|

<h3 id="delete-a-list-of-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Products deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Retrieve an aggregate of active Options in the library

<a id="opIdgetAllOptions"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products/options \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/products/options`

<h3 id="retrieve-an-aggregate-of-active-options-in-the-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "options": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ]
  }
]
```

<h3 id="retrieve-an-aggregate-of-active-options-in-the-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Options|Inline|

<h3 id="retrieve-an-aggregate-of-active-options-in-the-library-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VariantOptionsResponse](#schemavariantoptionsresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Retrieve all products visible in POS – v2

<a id="opIdgetAllProductsV2"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products/v2 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/products/v2`

<h3 id="retrieve-all-products-visible-in-pos-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|sort|query|boolean|false|If true, sorts response by created date|

> Example responses

> 200 Response

```json
[
  {
    "categories": [
      "string"
    ],
    "category": {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "etag": "string",
    "externalReference": "string",
    "imageLookupKeys": [
      "string"
    ],
    "metadata": {
      "inPos": true,
      "source": {
        "external": true,
        "name": "string"
      }
    },
    "name": "string",
    "online": {
      "description": "string",
      "presentation": {
        "additionalImageUrls": [
          "http://example.com"
        ],
        "displayImageUrl": "http://example.com",
        "mediaUrls": [
          "http://example.com"
        ]
      },
      "seo": {
        "metaDescription": "string",
        "slug": "string",
        "title": "string"
      },
      "shipping": {
        "shippingPricingModel": "FREE",
        "weight": {
          "unit": "kg",
          "weight": 0
        },
        "weightInGrams": 0
      },
      "status": "ACTIVE",
      "title": "string"
    },
    "presentation": {
      "backgroundColor": "string",
      "imageUrl": "string",
      "textColor": "string"
    },
    "taxCode": "string",
    "taxExempt": true,
    "taxRates": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "unitName": "string",
    "updated": "1970-01-01T00:00:00Z",
    "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "variantOptionDefinitions": {
      "definitions": [
        {
          "name": "string",
          "properties": [
            {
              "imageUrl": "string",
              "value": "string"
            }
          ]
        }
      ]
    },
    "variants": [
      {
        "barcode": "string",
        "costPrice": {
          "amount": 0,
          "currencyId": "AED"
        },
        "description": "string",
        "name": "string",
        "options": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "presentation": {
          "backgroundColor": "string",
          "imageUrl": "string",
          "textColor": "string"
        },
        "price": {
          "amount": 0,
          "currencyId": "AED"
        },
        "sku": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "vatPercentage": 0
      }
    ],
    "vatPercentage": 0
  }
]
```

<h3 id="retrieve-all-products-visible-in-pos-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of products|Inline|

<h3 id="retrieve-all-products-visible-in-pos-v2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductResponse](#schemaproductresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Retrieve the count of existing products

<a id="opIdcountAllProducts"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products/v2/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/products/v2/count`

<h3 id="retrieve-the-count-of-existing-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "productCount": 0
  }
]
```

<h3 id="retrieve-the-count-of-existing-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Count of existing products|Inline|

<h3 id="retrieve-the-count-of-existing-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductCountResponse](#schemaproductcountresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Update a single product

<a id="opIdupdateProduct"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products/v2/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      "string"
    ],
    "category": {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "description": "string",
    "externalReference": "string",
    "imageLookupKeys": [
      "string"
    ],
    "metadata": {
      "inPos": true,
      "source": {
        "external": true,
        "name": "string"
      }
    },
    "name": "string",
    "online": {
      "description": "string",
      "presentation": {
        "additionalImageUrls": [
          "http://example.com"
        ],
        "displayImageUrl": "http://example.com",
        "mediaUrls": [
          "http://example.com"
        ]
      },
      "seo": {
        "metaDescription": "string",
        "slug": "string",
        "title": "string"
      },
      "shipping": {
        "shippingPricingModel": "FREE",
        "weight": {
          "unit": "kg",
          "weight": 0
        },
        "weightInGrams": 0
      },
      "status": "ACTIVE",
      "title": "string"
    },
    "presentation": {
      "backgroundColor": "string",
      "imageUrl": "string",
      "textColor": "string"
    },
    "taxCode": "string",
    "taxExempt": true,
    "taxRates": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "unitName": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "variantOptionDefinitions": {
      "definitions": [
        {
          "name": "string",
          "properties": [
            {
              "imageUrl": "string",
              "value": "string"
            }
          ]
        }
      ]
    },
    "variants": [
      {
        "barcode": "string",
        "costPrice": {
          "amount": 0,
          "currencyId": "AED"
        },
        "description": "string",
        "name": "string",
        "options": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "presentation": {
          "backgroundColor": "string",
          "imageUrl": "string",
          "textColor": "string"
        },
        "price": {
          "amount": 0,
          "currencyId": "AED"
        },
        "sku": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "vatPercentage": 0
      }
    ],
    "vatPercentage": 0
  }'
```

`PUT /organizations/{organizationUuid}/products/v2/{productUuid}`

Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.

> Body parameter

```json
{
  "categories": [
    "string"
  ],
  "category": {
    "name": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "description": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "metadata": {
    "inPos": true,
    "source": {
      "external": true,
      "name": "string"
    }
  },
  "name": "string",
  "online": {
    "description": "string",
    "presentation": {
      "additionalImageUrls": [
        "http://example.com"
      ],
      "displayImageUrl": "http://example.com",
      "mediaUrls": [
        "http://example.com"
      ]
    },
    "seo": {
      "metaDescription": "string",
      "slug": "string",
      "title": "string"
    },
    "shipping": {
      "shippingPricingModel": "FREE",
      "weight": {
        "unit": "kg",
        "weight": 0
      },
      "weightInGrams": 0
    },
    "status": "ACTIVE",
    "title": "string"
  },
  "presentation": {
    "backgroundColor": "string",
    "imageUrl": "string",
    "textColor": "string"
  },
  "taxCode": "string",
  "taxExempt": true,
  "taxRates": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "unitName": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "imageUrl": "string",
            "value": "string"
          }
        ]
      }
    ]
  },
  "variants": [
    {
      "barcode": "string",
      "costPrice": {
        "amount": 0,
        "currencyId": "AED"
      },
      "description": "string",
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "price": {
        "amount": 0,
        "currencyId": "AED"
      },
      "sku": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "vatPercentage": 0
    }
  ],
  "vatPercentage": 0
}
```

<h3 id="update-a-single-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|none|
|organizationUuid|path|string(uuid)|true|none|
|productUuid|path|string(uuid)|true|none|
|body|body|[FullProductUpdateRequest](#schemafullproductupdaterequest)|true|none|
|» categories|body|[string]|false|none|
|» category|body|[CategoryDTO](#schemacategorydto)|false|none|
|» description|body|string|false|none|
|» externalReference|body|string|false|none|
|» imageLookupKeys|body|[string]|false|none|
|» metadata|body|[MetadataDTO](#schemametadatadto)|false|none|
|» name|body|string|true|none|
|» online|body|[OnlineProperties](#schemaonlineproperties)|false|none|
|» presentation|body|[PresentationDTO](#schemapresentationdto)|false|none|
|» taxCode|body|string|false|none|
|» taxExempt|body|boolean|false|none|
|» taxRates|body|[string(uuid)]|false|none|
|» unitName|body|string|false|none|
|» uuid|body|string(uuid)|true|none|
|» variantOptionDefinitions|body|[VariantOptionDefinitions](#schemavariantoptiondefinitions)|false|none|
|» variants|body|[[VariantDTO](#schemavariantdto)]|false|none|
|» vatPercentage|body|number|false|none|

> Example responses

> 400 Response

```json
{
  "developerMessage": "string",
  "errorType": "string",
  "violations": [
    {
      "constraintType": "MUST_BE_FALSE",
      "developerMessage": "string",
      "expected": "string",
      "propertyName": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="update-a-single-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Product updated|None|
|400|Bad Request|Invalid request body|[ErrorResponse](#schemaerrorresponse)|
|412|Precondition Failed|Precondition failed: ETag did not match the expected value|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|ETag|string||ETag value|
|204|Location|string||Location of updated product|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Retrieve a single product

<a id="opIdgetProduct"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationUuid}/products/{productUuid}`

Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.

<h3 id="retrieve-a-single-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|none|
|organizationUuid|path|string(uuid)|true|none|
|productUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "categories": [
    "string"
  ],
  "category": {
    "name": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "etag": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "metadata": {
    "inPos": true,
    "source": {
      "external": true,
      "name": "string"
    }
  },
  "name": "string",
  "online": {
    "description": "string",
    "presentation": {
      "additionalImageUrls": [
        "http://example.com"
      ],
      "displayImageUrl": "http://example.com",
      "mediaUrls": [
        "http://example.com"
      ]
    },
    "seo": {
      "metaDescription": "string",
      "slug": "string",
      "title": "string"
    },
    "shipping": {
      "shippingPricingModel": "FREE",
      "weight": {
        "unit": "kg",
        "weight": 0
      },
      "weightInGrams": 0
    },
    "status": "ACTIVE",
    "title": "string"
  },
  "presentation": {
    "backgroundColor": "string",
    "imageUrl": "string",
    "textColor": "string"
  },
  "taxCode": "string",
  "taxExempt": true,
  "taxRates": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "unitName": "string",
  "updated": "1970-01-01T00:00:00Z",
  "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "imageUrl": "string",
            "value": "string"
          }
        ]
      }
    ]
  },
  "variants": [
    {
      "barcode": "string",
      "costPrice": {
        "amount": 0,
        "currencyId": "AED"
      },
      "description": "string",
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "price": {
        "amount": 0,
        "currencyId": "AED"
      },
      "sku": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "vatPercentage": 0
    }
  ],
  "vatPercentage": 0
}
```

<h3 id="retrieve-a-single-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product|[ProductResponse](#schemaproductresponse)|
|304|Not Modified|Not modified|None|
|400|Bad Request|Malformed ETag|None|
|404|Not Found|Organization or Product not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||ETag value|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Delete a single product

<a id="opIddeleteProduct"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{organizationUuid}/products/{productUuid}`

<h3 id="delete-a-single-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|productUuid|path|string(uuid)|true|none|

<h3 id="delete-a-single-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Product deleted|None|
|404|Not Found|Organization or Product not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

<h1 id="product-library-api-productsonline">products/online</h1>

## Create a product identifier

<a id="opIdcreateProductSlug"></a>

> Code samples

```bash
curl https://example.com/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products/online/slug \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "productName": "string"
  }'
```

`POST /organizations/{organizationUuid}/products/online/slug`

Creates a unique slug (identifier) for a product. The slug is used to create a product URL

> Body parameter

```json
{
  "productName": "string"
}
```

<h3 id="create-a-product-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationUuid|path|string(uuid)|true|none|
|body|body|[CreateSlugRequest](#schemacreateslugrequest)|true|none|
|» productName|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "productName": "string",
  "slug": "string"
}
```

<h3 id="create-a-product-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product slug|[SlugResponse](#schemaslugresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

<h1 id="product-library-api-taxes">taxes</h1>

## Get all available tax rates

<a id="opIdgetTaxRates"></a>

> Code samples

```bash
curl https://example.com/v1/taxes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/taxes`

> Example responses

> 200 Response

```json
[
  {
    "taxRates": [
      {
        "default": true,
        "label": "string",
        "percentage": 0,
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }
]
```

<h3 id="get-all-available-tax-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of tax rates|Inline|
|403|Forbidden|Not a sales tax user|None|

<h3 id="get-all-available-tax-rates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TaxRatesResponse](#schemataxratesresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Create new tax rates

<a id="opIdcreateTaxRates"></a>

> Code samples

```bash
curl https://example.com/v1/taxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "taxRates": [
      {
        "default": true,
        "label": "string",
        "percentage": 0,
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }'
```

`POST /v1/taxes`

> Body parameter

```json
{
  "taxRates": [
    {
      "default": true,
      "label": "string",
      "percentage": 0,
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

<h3 id="create-new-tax-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TaxRatesCreateRequest](#schemataxratescreaterequest)|true|none|
|» taxRates|body|[[TaxRate](#schemataxrate)]|true|none|

> Example responses

> 201 Response

```json
{
  "taxRates": [
    {
      "default": true,
      "label": "string",
      "percentage": 0,
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

> 400 Response

```json
{
  "developerMessage": "string",
  "errorType": "string",
  "violations": [
    {
      "constraintType": "MUST_BE_FALSE",
      "developerMessage": "string",
      "expected": "string",
      "propertyName": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="create-new-tax-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Tax rates created|[TaxRatesResponse](#schemataxratesresponse)|
|400|Bad Request|Invalid request body|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Not a sales tax user|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Get all tax rates and a count of products associated with each

<a id="opIdgetProductCountForAllTaxes"></a>

> Code samples

```bash
curl https://example.com/v1/taxes/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/taxes/count`

> Example responses

> 200 Response

```json
{
  "counts": [
    {
      "count": 0,
      "taxRateUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

<h3 id="get-all-tax-rates-and-a-count-of-products-associated-with-each-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Count of products for each tax rate|[TaxRateProductCountResponse](#schemataxrateproductcountresponse)|
|403|Forbidden|Not a sales tax user|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Get the organization tax settings

<a id="opIdgetTaxSettings"></a>

> Code samples

```bash
curl https://example.com/v1/taxes/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/taxes/settings`

> Example responses

> 200 Response

```json
{
  "organizationUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "taxationMode": "EXCLUSIVE",
  "taxationType": "NONE"
}
```

<h3 id="get-the-organization-tax-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tax settings|[TaxSettingsResponse](#schemataxsettingsresponse)|
|403|Forbidden|Not a sales tax user|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Update the organization tax settings

<a id="opIdsetTaxationMode"></a>

> Code samples

```bash
curl https://example.com/v1/taxes/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "taxationMode": "EXCLUSIVE"
  }'
```

`PUT /v1/taxes/settings`

> Body parameter

```json
{
  "taxationMode": "EXCLUSIVE"
}
```

<h3 id="update-the-organization-tax-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TaxSettingsUpdateRequest](#schemataxsettingsupdaterequest)|true|none|
|» taxationMode|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» taxationMode|EXCLUSIVE|
|» taxationMode|INCLUSIVE|

> Example responses

> 200 Response

```json
{
  "organizationUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "taxationMode": "EXCLUSIVE",
  "taxationType": "NONE"
}
```

> 400 Response

```json
{
  "developerMessage": "string",
  "errorType": "string",
  "violations": [
    {
      "constraintType": "MUST_BE_FALSE",
      "developerMessage": "string",
      "expected": "string",
      "propertyName": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="update-the-organization-tax-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated tax settings|[TaxSettingsResponse](#schemataxsettingsresponse)|
|400|Bad Request|Invalid request body|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Not a sales tax user|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Get a single tax rate

<a id="opIdgetTaxRate"></a>

> Code samples

```bash
curl https://example.com/v1/taxes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/taxes/{taxRateUuid}`

<h3 id="get-a-single-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxRateUuid|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "default": true,
  "label": "string",
  "percentage": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-a-single-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Single tax rate|[TaxRate](#schemataxrate)|
|403|Forbidden|Not a sales tax user|None|
|404|Not Found|Tax rate not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: READ:PRODUCT )
</aside>

## Update a single tax rate

<a id="opIdupdateTaxRate"></a>

> Code samples

```bash
curl https://example.com/v1/taxes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "default": true,
    "label": "string",
    "percentage": 0
  }'
```

`PUT /v1/taxes/{taxRateUuid}`

> Body parameter

```json
{
  "default": true,
  "label": "string",
  "percentage": 0
}
```

<h3 id="update-a-single-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxRateUuid|path|string(uuid)|true|none|
|body|body|[TaxRateUpdateRequest](#schemataxrateupdaterequest)|true|none|
|» default|body|boolean|false|none|
|» label|body|string|false|none|
|» percentage|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "default": true,
  "label": "string",
  "percentage": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "developerMessage": "string",
  "errorType": "string",
  "violations": [
    {
      "constraintType": "MUST_BE_FALSE",
      "developerMessage": "string",
      "expected": "string",
      "propertyName": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="update-a-single-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated tax rate|[TaxRate](#schemataxrate)|
|400|Bad Request|Invalid request body|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Not a sales tax user|None|
|404|Not Found|Tax rate not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

## Delete a single tax rate

<a id="opIddeleteTaxRate"></a>

> Code samples

```bash
curl https://example.com/v1/taxes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/taxes/{taxRateUuid}`

<h3 id="delete-a-single-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxRateUuid|path|string(uuid)|true|none|

<h3 id="delete-a-single-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Tax rate deleted|None|
|403|Forbidden|Not a sales tax user|None|
|404|Not Found|Tax rate not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ZettleOauth ( Scopes: WRITE:PRODUCT )
</aside>

# Schemas

<h2 id="tocS_BulkImportRequest">BulkImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkimportrequest"></a>
<a id="schema_BulkImportRequest"></a>
<a id="tocSbulkimportrequest"></a>
<a id="tocsbulkimportrequest"></a>

```json
{
  "products": [
    {
      "categories": [
        "string"
      ],
      "category": {
        "name": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "description": "string",
      "externalReference": "string",
      "imageLookupKeys": [
        "string"
      ],
      "metadata": {
        "inPos": true,
        "source": {
          "external": true,
          "name": "string"
        }
      },
      "name": "string",
      "online": {
        "description": "string",
        "presentation": {
          "additionalImageUrls": [
            "http://example.com"
          ],
          "displayImageUrl": "http://example.com",
          "mediaUrls": [
            "http://example.com"
          ]
        },
        "seo": {
          "metaDescription": "string",
          "slug": "string",
          "title": "string"
        },
        "shipping": {
          "shippingPricingModel": "FREE",
          "weight": {
            "unit": "kg",
            "weight": 0
          },
          "weightInGrams": 0
        },
        "status": "ACTIVE",
        "title": "string"
      },
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "taxCode": "string",
      "taxExempt": true,
      "taxRates": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "unitName": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "variantOptionDefinitions": {
        "definitions": [
          {
            "name": "string",
            "properties": [
              {
                "imageUrl": "string",
                "value": "string"
              }
            ]
          }
        ]
      },
      "variants": [
        {
          "barcode": "string",
          "costPrice": {
            "amount": 0,
            "currencyId": "AED"
          },
          "description": "string",
          "name": "string",
          "options": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "presentation": {
            "backgroundColor": "string",
            "imageUrl": "string",
            "textColor": "string"
          },
          "price": {
            "amount": 0,
            "currencyId": "AED"
          },
          "sku": "string",
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "vatPercentage": 0
        }
      ],
      "vatPercentage": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|products|[[FullProductUpdateRequest](#schemafullproductupdaterequest)]|true|none|none|

<h2 id="tocS_CategoryDTO">CategoryDTO</h2>
<!-- backwards compatibility -->
<a id="schemacategorydto"></a>
<a id="schema_CategoryDTO"></a>
<a id="tocScategorydto"></a>
<a id="tocscategorydto"></a>

```json
{
  "name": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|uuid|string(uuid)|true|none|none|

<h2 id="tocS_CategoryResponse">CategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacategoryresponse"></a>
<a id="schema_CategoryResponse"></a>
<a id="tocScategoryresponse"></a>
<a id="tocscategoryresponse"></a>

```json
{
  "categories": [
    {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[CategoryDTO](#schemacategorydto)]|true|none|none|

<h2 id="tocS_ConstraintViolation">ConstraintViolation</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintviolation"></a>
<a id="schema_ConstraintViolation"></a>
<a id="tocSconstraintviolation"></a>
<a id="tocsconstraintviolation"></a>

```json
{
  "constraintType": "MUST_BE_FALSE",
  "developerMessage": "string",
  "expected": "string",
  "propertyName": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintType|string|false|none|none|
|developerMessage|string|false|none|none|
|expected|string|false|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintType|MUST_BE_FALSE|
|constraintType|MUST_BE_TRUE|
|constraintType|MUST_BE_LESS_THAN|
|constraintType|MUST_BE_GREATER_THAN|
|constraintType|DIGIT_OUT_OF_BOUNDS|
|constraintType|DATE_MUST_BE_IN_THE_FUTURE|
|constraintType|MUST_BE_LESS_OR_EQUAL_THAN|
|constraintType|MUST_BE_GREATER_OR_EQUAL_TO|
|constraintType|MUST_NOT_BE_NULL|
|constraintType|MUST_BE_NULL|
|constraintType|DATE_MUST_BE_IN_THE_PAST|
|constraintType|MUST_MATCH_PATTERN|
|constraintType|INVALID_SIZE|
|constraintType|INVALID_EMAIL|
|constraintType|MUST_NOT_BE_EMPTY|
|constraintType|INVALID_RANGE|
|constraintType|UNKNOWN|

<h2 id="tocS_CreateCategoriesRequest">CreateCategoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecategoriesrequest"></a>
<a id="schema_CreateCategoriesRequest"></a>
<a id="tocScreatecategoriesrequest"></a>
<a id="tocscreatecategoriesrequest"></a>

```json
{
  "categories": [
    {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[CategoryDTO](#schemacategorydto)]|true|none|none|

<h2 id="tocS_CreateSlugRequest">CreateSlugRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateslugrequest"></a>
<a id="schema_CreateSlugRequest"></a>
<a id="tocScreateslugrequest"></a>
<a id="tocscreateslugrequest"></a>

```json
{
  "productName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productName|string|true|none|none|

<h2 id="tocS_DiscountRequest">DiscountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscountrequest"></a>
<a id="schema_DiscountRequest"></a>
<a id="tocSdiscountrequest"></a>
<a id="tocsdiscountrequest"></a>

```json
{
  "amount": {
    "amount": 0,
    "currencyId": "AED"
  },
  "description": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "name": "string",
  "percentage": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Price](#schemaprice)|false|none|none|
|description|string|false|none|none|
|externalReference|string|false|none|none|
|imageLookupKeys|[string]|false|none|none|
|name|string|false|none|none|
|percentage|number|false|none|none|
|uuid|string(uuid)|true|none|none|

<h2 id="tocS_DiscountResponse">DiscountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscountresponse"></a>
<a id="schema_DiscountResponse"></a>
<a id="tocSdiscountresponse"></a>
<a id="tocsdiscountresponse"></a>

```json
{
  "amount": {
    "amount": 0,
    "currencyId": "AED"
  },
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "etag": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "name": "string",
  "percentage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Price](#schemaprice)|false|none|none|
|created|string(date-time)|true|none|none|
|description|string|false|none|none|
|etag|string|true|none|none|
|externalReference|string|false|none|none|
|imageLookupKeys|[string]|false|none|none|
|name|string|true|none|none|
|percentage|number|false|none|none|
|updated|string(date-time)|true|none|none|
|updatedBy|string(uuid)|false|none|none|
|uuid|string(uuid)|true|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "developerMessage": "string",
  "errorType": "string",
  "violations": [
    {
      "constraintType": "MUST_BE_FALSE",
      "developerMessage": "string",
      "expected": "string",
      "propertyName": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerMessage|string|false|none|none|
|errorType|string|false|none|none|
|violations|[[ConstraintViolation](#schemaconstraintviolation)]|false|none|none|

<h2 id="tocS_FullProductUpdateRequest">FullProductUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemafullproductupdaterequest"></a>
<a id="schema_FullProductUpdateRequest"></a>
<a id="tocSfullproductupdaterequest"></a>
<a id="tocsfullproductupdaterequest"></a>

```json
{
  "categories": [
    "string"
  ],
  "category": {
    "name": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "description": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "metadata": {
    "inPos": true,
    "source": {
      "external": true,
      "name": "string"
    }
  },
  "name": "string",
  "online": {
    "description": "string",
    "presentation": {
      "additionalImageUrls": [
        "http://example.com"
      ],
      "displayImageUrl": "http://example.com",
      "mediaUrls": [
        "http://example.com"
      ]
    },
    "seo": {
      "metaDescription": "string",
      "slug": "string",
      "title": "string"
    },
    "shipping": {
      "shippingPricingModel": "FREE",
      "weight": {
        "unit": "kg",
        "weight": 0
      },
      "weightInGrams": 0
    },
    "status": "ACTIVE",
    "title": "string"
  },
  "presentation": {
    "backgroundColor": "string",
    "imageUrl": "string",
    "textColor": "string"
  },
  "taxCode": "string",
  "taxExempt": true,
  "taxRates": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "unitName": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "imageUrl": "string",
            "value": "string"
          }
        ]
      }
    ]
  },
  "variants": [
    {
      "barcode": "string",
      "costPrice": {
        "amount": 0,
        "currencyId": "AED"
      },
      "description": "string",
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "price": {
        "amount": 0,
        "currencyId": "AED"
      },
      "sku": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "vatPercentage": 0
    }
  ],
  "vatPercentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|none|
|category|[CategoryDTO](#schemacategorydto)|false|none|none|
|description|string|false|none|none|
|externalReference|string|false|none|none|
|imageLookupKeys|[string]|false|none|none|
|metadata|[MetadataDTO](#schemametadatadto)|false|none|none|
|name|string|true|none|none|
|online|[OnlineProperties](#schemaonlineproperties)|false|none|none|
|presentation|[PresentationDTO](#schemapresentationdto)|false|none|none|
|taxCode|string|false|none|none|
|taxExempt|boolean|false|none|none|
|taxRates|[string(uuid)]|false|none|none|
|unitName|string|false|none|none|
|uuid|string(uuid)|true|none|none|
|variantOptionDefinitions|[VariantOptionDefinitions](#schemavariantoptiondefinitions)|false|none|none|
|variants|[[VariantDTO](#schemavariantdto)]|false|none|none|
|vatPercentage|number|false|none|none|

<h2 id="tocS_ImportResponse">ImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportresponse"></a>
<a id="schema_ImportResponse"></a>
<a id="tocSimportresponse"></a>
<a id="tocsimportresponse"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "errorMessage": "string",
  "finished": "1970-01-01T00:00:00Z",
  "items": 0,
  "state": "IMPORTING",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|errorMessage|string|false|none|none|
|finished|string(date-time)|false|none|none|
|items|integer(int64)|false|none|none|
|state|string|false|none|none|
|uuid|string(uuid)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|IMPORTING|
|state|FINISHED_SUCCESS|
|state|FINISHED_FAILED|

<h2 id="tocS_LibraryImagesResponse">LibraryImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalibraryimagesresponse"></a>
<a id="schema_LibraryImagesResponse"></a>
<a id="tocSlibraryimagesresponse"></a>
<a id="tocslibraryimagesresponse"></a>

```json
{
  "imageUrls": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUrls|[string]|false|none|none|

<h2 id="tocS_LibraryResponse">LibraryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalibraryresponse"></a>
<a id="schema_LibraryResponse"></a>
<a id="tocSlibraryresponse"></a>
<a id="tocslibraryresponse"></a>

```json
{
  "deletedDiscounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "deletedProducts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "discounts": [
    {
      "amount": {
        "amount": 0,
        "currencyId": "AED"
      },
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "etag": "string",
      "externalReference": "string",
      "imageLookupKeys": [
        "string"
      ],
      "name": "string",
      "percentage": 0,
      "updated": "1970-01-01T00:00:00Z",
      "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "fromEventLogUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "products": [
    {
      "categories": [
        "string"
      ],
      "category": {
        "name": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "etag": "string",
      "externalReference": "string",
      "imageLookupKeys": [
        "string"
      ],
      "metadata": {
        "inPos": true,
        "source": {
          "external": true,
          "name": "string"
        }
      },
      "name": "string",
      "online": {
        "description": "string",
        "presentation": {
          "additionalImageUrls": [
            "http://example.com"
          ],
          "displayImageUrl": "http://example.com",
          "mediaUrls": [
            "http://example.com"
          ]
        },
        "seo": {
          "metaDescription": "string",
          "slug": "string",
          "title": "string"
        },
        "shipping": {
          "shippingPricingModel": "FREE",
          "weight": {
            "unit": "kg",
            "weight": 0
          },
          "weightInGrams": 0
        },
        "status": "ACTIVE",
        "title": "string"
      },
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "taxCode": "string",
      "taxExempt": true,
      "taxRates": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "unitName": "string",
      "updated": "1970-01-01T00:00:00Z",
      "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "variantOptionDefinitions": {
        "definitions": [
          {
            "name": "string",
            "properties": [
              {
                "imageUrl": "string",
                "value": "string"
              }
            ]
          }
        ]
      },
      "variants": [
        {
          "barcode": "string",
          "costPrice": {
            "amount": 0,
            "currencyId": "AED"
          },
          "description": "string",
          "name": "string",
          "options": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "presentation": {
            "backgroundColor": "string",
            "imageUrl": "string",
            "textColor": "string"
          },
          "price": {
            "amount": 0,
            "currencyId": "AED"
          },
          "sku": "string",
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "vatPercentage": 0
        }
      ],
      "vatPercentage": 0
    }
  ],
  "untilEventLogUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedDiscounts|[string(uuid)]|false|none|none|
|deletedProducts|[string(uuid)]|false|none|none|
|discounts|[[DiscountResponse](#schemadiscountresponse)]|false|none|none|
|fromEventLogUuid|string(uuid)|false|none|none|
|products|[[ProductResponse](#schemaproductresponse)]|false|none|none|
|untilEventLogUuid|string(uuid)|false|none|none|

<h2 id="tocS_MetadataDTO">MetadataDTO</h2>
<!-- backwards compatibility -->
<a id="schemametadatadto"></a>
<a id="schema_MetadataDTO"></a>
<a id="tocSmetadatadto"></a>
<a id="tocsmetadatadto"></a>

```json
{
  "inPos": true,
  "source": {
    "external": true,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inPos|boolean|true|none|none|
|source|[SourceDTO](#schemasourcedto)|false|none|none|

<h2 id="tocS_OnlineProperties">OnlineProperties</h2>
<!-- backwards compatibility -->
<a id="schemaonlineproperties"></a>
<a id="schema_OnlineProperties"></a>
<a id="tocSonlineproperties"></a>
<a id="tocsonlineproperties"></a>

```json
{
  "description": "string",
  "presentation": {
    "additionalImageUrls": [
      "http://example.com"
    ],
    "displayImageUrl": "http://example.com",
    "mediaUrls": [
      "http://example.com"
    ]
  },
  "seo": {
    "metaDescription": "string",
    "slug": "string",
    "title": "string"
  },
  "shipping": {
    "shippingPricingModel": "FREE",
    "weight": {
      "unit": "kg",
      "weight": 0
    },
    "weightInGrams": 0
  },
  "status": "ACTIVE",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|presentation|[Presentation](#schemapresentation)|false|none|none|
|seo|[SearchEngineOptimization](#schemasearchengineoptimization)|false|none|none|
|shipping|[Shipping](#schemashipping)|false|none|none|
|status|string|true|none|none|
|title|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|HIDDEN|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
{
  "name": "string",
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|values|[string]|false|none|none|

<h2 id="tocS_Presentation">Presentation</h2>
<!-- backwards compatibility -->
<a id="schemapresentation"></a>
<a id="schema_Presentation"></a>
<a id="tocSpresentation"></a>
<a id="tocspresentation"></a>

```json
{
  "additionalImageUrls": [
    "http://example.com"
  ],
  "displayImageUrl": "http://example.com",
  "mediaUrls": [
    "http://example.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalImageUrls|[string(url)]|false|none|none|
|displayImageUrl|string(url)|false|none|none|
|mediaUrls|[string(url)]|false|none|none|

<h2 id="tocS_PresentationDTO">PresentationDTO</h2>
<!-- backwards compatibility -->
<a id="schemapresentationdto"></a>
<a id="schema_PresentationDTO"></a>
<a id="tocSpresentationdto"></a>
<a id="tocspresentationdto"></a>

```json
{
  "backgroundColor": "string",
  "imageUrl": "string",
  "textColor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|string|false|none|none|
|imageUrl|string|false|none|none|
|textColor|string|false|none|none|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "amount": 0,
  "currencyId": "AED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|none|
|currencyId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currencyId|AED|
|currencyId|AFA|
|currencyId|AFN|
|currencyId|ALL|
|currencyId|AMD|
|currencyId|ANG|
|currencyId|AOA|
|currencyId|ARS|
|currencyId|AUD|
|currencyId|AWG|
|currencyId|AZM|
|currencyId|AZN|
|currencyId|BAM|
|currencyId|BBD|
|currencyId|BDT|
|currencyId|BGN|
|currencyId|BHD|
|currencyId|BIF|
|currencyId|BMD|
|currencyId|BND|
|currencyId|BOB|
|currencyId|BRL|
|currencyId|BSD|
|currencyId|BTN|
|currencyId|BWP|
|currencyId|BYR|
|currencyId|BZD|
|currencyId|CAD|
|currencyId|CDF|
|currencyId|CHF|
|currencyId|CLP|
|currencyId|CNY|
|currencyId|COP|
|currencyId|CRC|
|currencyId|CSD|
|currencyId|CUC|
|currencyId|CUP|
|currencyId|CVE|
|currencyId|CYP|
|currencyId|CZK|
|currencyId|DJF|
|currencyId|DKK|
|currencyId|DOP|
|currencyId|DZD|
|currencyId|EEK|
|currencyId|EGP|
|currencyId|ERN|
|currencyId|ETB|
|currencyId|EUR|
|currencyId|FJD|
|currencyId|FKP|
|currencyId|GBP|
|currencyId|GEL|
|currencyId|GGP|
|currencyId|GHC|
|currencyId|GHS|
|currencyId|GIP|
|currencyId|GMD|
|currencyId|GNF|
|currencyId|GTQ|
|currencyId|GYD|
|currencyId|HKD|
|currencyId|HNL|
|currencyId|HRK|
|currencyId|HTG|
|currencyId|HUF|
|currencyId|IDR|
|currencyId|ILS|
|currencyId|IMP|
|currencyId|INR|
|currencyId|IQD|
|currencyId|IRR|
|currencyId|ISK|
|currencyId|JEP|
|currencyId|JMD|
|currencyId|JOD|
|currencyId|JPY|
|currencyId|KES|
|currencyId|KGS|
|currencyId|KHR|
|currencyId|KMF|
|currencyId|KPW|
|currencyId|KRW|
|currencyId|KWD|
|currencyId|KYD|
|currencyId|KZT|
|currencyId|LAK|
|currencyId|LBP|
|currencyId|LKR|
|currencyId|LRD|
|currencyId|LSL|
|currencyId|LTL|
|currencyId|LVL|
|currencyId|LYD|
|currencyId|MAD|
|currencyId|MDL|
|currencyId|MGA|
|currencyId|MKD|
|currencyId|MMK|
|currencyId|MNT|
|currencyId|MOP|
|currencyId|MRO|
|currencyId|MTL|
|currencyId|MUR|
|currencyId|MVR|
|currencyId|MWK|
|currencyId|MXN|
|currencyId|MYR|
|currencyId|MZM|
|currencyId|MZN|
|currencyId|NAD|
|currencyId|NGN|
|currencyId|NIO|
|currencyId|NOK|
|currencyId|NPR|
|currencyId|NZD|
|currencyId|OMR|
|currencyId|PAB|
|currencyId|PEN|
|currencyId|PGK|
|currencyId|PHP|
|currencyId|PKR|
|currencyId|PLN|
|currencyId|PYG|
|currencyId|QAR|
|currencyId|RON|
|currencyId|RSD|
|currencyId|RUB|
|currencyId|RWF|
|currencyId|SAR|
|currencyId|SBD|
|currencyId|SCR|
|currencyId|SDD|
|currencyId|SDG|
|currencyId|SEK|
|currencyId|SGD|
|currencyId|SHP|
|currencyId|SIT|
|currencyId|SKK|
|currencyId|SLL|
|currencyId|SOS|
|currencyId|SPL|
|currencyId|SRD|
|currencyId|SSP|
|currencyId|STD|
|currencyId|SVC|
|currencyId|SYP|
|currencyId|SZL|
|currencyId|THB|
|currencyId|TJS|
|currencyId|TMM|
|currencyId|TMT|
|currencyId|TND|
|currencyId|TOP|
|currencyId|TRL|
|currencyId|TRY|
|currencyId|TTD|
|currencyId|TVD|
|currencyId|TWD|
|currencyId|TZS|
|currencyId|UAH|
|currencyId|UGX|
|currencyId|USD|
|currencyId|UYU|
|currencyId|UZS|
|currencyId|VEB|
|currencyId|VEF|
|currencyId|VND|
|currencyId|VUV|
|currencyId|WST|
|currencyId|XAF|
|currencyId|XAG|
|currencyId|XAU|
|currencyId|XCD|
|currencyId|XDR|
|currencyId|XOF|
|currencyId|XPD|
|currencyId|XPF|
|currencyId|XPT|
|currencyId|YER|
|currencyId|ZAR|
|currencyId|ZMK|
|currencyId|ZMW|
|currencyId|ZWD|
|currencyId|ZWL|

<h2 id="tocS_ProductCountResponse">ProductCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproductcountresponse"></a>
<a id="schema_ProductCountResponse"></a>
<a id="tocSproductcountresponse"></a>
<a id="tocsproductcountresponse"></a>

```json
{
  "productCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productCount|integer(int32)|true|none|none|

<h2 id="tocS_ProductCreateRequest">ProductCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaproductcreaterequest"></a>
<a id="schema_ProductCreateRequest"></a>
<a id="tocSproductcreaterequest"></a>
<a id="tocsproductcreaterequest"></a>

```json
{
  "categories": [
    "string"
  ],
  "category": {
    "name": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "createWithDefaultTax": true,
  "description": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "metadata": {
    "inPos": true,
    "source": {
      "external": true,
      "name": "string"
    }
  },
  "name": "string",
  "online": {
    "description": "string",
    "presentation": {
      "additionalImageUrls": [
        "http://example.com"
      ],
      "displayImageUrl": "http://example.com",
      "mediaUrls": [
        "http://example.com"
      ]
    },
    "seo": {
      "metaDescription": "string",
      "slug": "string",
      "title": "string"
    },
    "shipping": {
      "shippingPricingModel": "FREE",
      "weight": {
        "unit": "kg",
        "weight": 0
      },
      "weightInGrams": 0
    },
    "status": "ACTIVE",
    "title": "string"
  },
  "presentation": {
    "backgroundColor": "string",
    "imageUrl": "string",
    "textColor": "string"
  },
  "taxCode": "string",
  "taxExempt": true,
  "taxRates": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "unitName": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "imageUrl": "string",
            "value": "string"
          }
        ]
      }
    ]
  },
  "variants": [
    {
      "barcode": "string",
      "costPrice": {
        "amount": 0,
        "currencyId": "AED"
      },
      "description": "string",
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "price": {
        "amount": 0,
        "currencyId": "AED"
      },
      "sku": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "vatPercentage": 0
    }
  ],
  "vatPercentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|none|
|category|[CategoryDTO](#schemacategorydto)|false|none|none|
|createWithDefaultTax|boolean|false|none|none|
|description|string|false|none|none|
|externalReference|string|false|none|none|
|imageLookupKeys|[string]|false|none|none|
|metadata|[MetadataDTO](#schemametadatadto)|false|none|none|
|name|string|true|none|none|
|online|[OnlineProperties](#schemaonlineproperties)|false|none|none|
|presentation|[PresentationDTO](#schemapresentationdto)|false|none|none|
|taxCode|string|false|none|none|
|taxExempt|boolean|false|none|none|
|taxRates|[string(uuid)]|false|none|none|
|unitName|string|false|none|none|
|uuid|string(uuid)|true|none|none|
|variantOptionDefinitions|[VariantOptionDefinitions](#schemavariantoptiondefinitions)|false|none|none|
|variants|[[VariantDTO](#schemavariantdto)]|false|none|none|
|vatPercentage|number|false|none|none|

<h2 id="tocS_ProductResponse">ProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproductresponse"></a>
<a id="schema_ProductResponse"></a>
<a id="tocSproductresponse"></a>
<a id="tocsproductresponse"></a>

```json
{
  "categories": [
    "string"
  ],
  "category": {
    "name": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "etag": "string",
  "externalReference": "string",
  "imageLookupKeys": [
    "string"
  ],
  "metadata": {
    "inPos": true,
    "source": {
      "external": true,
      "name": "string"
    }
  },
  "name": "string",
  "online": {
    "description": "string",
    "presentation": {
      "additionalImageUrls": [
        "http://example.com"
      ],
      "displayImageUrl": "http://example.com",
      "mediaUrls": [
        "http://example.com"
      ]
    },
    "seo": {
      "metaDescription": "string",
      "slug": "string",
      "title": "string"
    },
    "shipping": {
      "shippingPricingModel": "FREE",
      "weight": {
        "unit": "kg",
        "weight": 0
      },
      "weightInGrams": 0
    },
    "status": "ACTIVE",
    "title": "string"
  },
  "presentation": {
    "backgroundColor": "string",
    "imageUrl": "string",
    "textColor": "string"
  },
  "taxCode": "string",
  "taxExempt": true,
  "taxRates": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "unitName": "string",
  "updated": "1970-01-01T00:00:00Z",
  "updatedBy": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "imageUrl": "string",
            "value": "string"
          }
        ]
      }
    ]
  },
  "variants": [
    {
      "barcode": "string",
      "costPrice": {
        "amount": 0,
        "currencyId": "AED"
      },
      "description": "string",
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "presentation": {
        "backgroundColor": "string",
        "imageUrl": "string",
        "textColor": "string"
      },
      "price": {
        "amount": 0,
        "currencyId": "AED"
      },
      "sku": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "vatPercentage": 0
    }
  ],
  "vatPercentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|none|
|category|[CategoryDTO](#schemacategorydto)|false|none|none|
|created|string(date-time)|true|none|none|
|description|string|false|none|none|
|etag|string|true|none|none|
|externalReference|string|false|none|none|
|imageLookupKeys|[string]|false|none|none|
|metadata|[MetadataDTO](#schemametadatadto)|false|none|none|
|name|string|true|none|none|
|online|[OnlineProperties](#schemaonlineproperties)|false|none|none|
|presentation|[PresentationDTO](#schemapresentationdto)|false|none|none|
|taxCode|string|false|none|none|
|taxExempt|boolean|false|none|none|
|taxRates|[string(uuid)]|false|none|none|
|unitName|string|false|none|none|
|updated|string(date-time)|true|none|none|
|updatedBy|string(uuid)|false|none|none|
|uuid|string(uuid)|true|none|none|
|variantOptionDefinitions|[VariantOptionDefinitions](#schemavariantoptiondefinitions)|false|none|none|
|variants|[[VariantDTO](#schemavariantdto)]|true|none|none|
|vatPercentage|number|false|none|none|

<h2 id="tocS_RenameCategoryRequest">RenameCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenamecategoryrequest"></a>
<a id="schema_RenameCategoryRequest"></a>
<a id="tocSrenamecategoryrequest"></a>
<a id="tocsrenamecategoryrequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_SearchEngineOptimization">SearchEngineOptimization</h2>
<!-- backwards compatibility -->
<a id="schemasearchengineoptimization"></a>
<a id="schema_SearchEngineOptimization"></a>
<a id="tocSsearchengineoptimization"></a>
<a id="tocssearchengineoptimization"></a>

```json
{
  "metaDescription": "string",
  "slug": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metaDescription|string|false|none|none|
|slug|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_Shipping">Shipping</h2>
<!-- backwards compatibility -->
<a id="schemashipping"></a>
<a id="schema_Shipping"></a>
<a id="tocSshipping"></a>
<a id="tocsshipping"></a>

```json
{
  "shippingPricingModel": "FREE",
  "weight": {
    "unit": "kg",
    "weight": 0
  },
  "weightInGrams": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shippingPricingModel|string|false|none|none|
|weight|[Weight](#schemaweight)|false|none|none|
|weightInGrams|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shippingPricingModel|FREE|
|shippingPricingModel|STANDARD|

<h2 id="tocS_SlugResponse">SlugResponse</h2>
<!-- backwards compatibility -->
<a id="schemaslugresponse"></a>
<a id="schema_SlugResponse"></a>
<a id="tocSslugresponse"></a>
<a id="tocsslugresponse"></a>

```json
{
  "productName": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productName|string|false|none|none|
|slug|string|false|none|none|

<h2 id="tocS_SourceDTO">SourceDTO</h2>
<!-- backwards compatibility -->
<a id="schemasourcedto"></a>
<a id="schema_SourceDTO"></a>
<a id="tocSsourcedto"></a>
<a id="tocssourcedto"></a>

```json
{
  "external": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external|boolean|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_TaxRate">TaxRate</h2>
<!-- backwards compatibility -->
<a id="schemataxrate"></a>
<a id="schema_TaxRate"></a>
<a id="tocStaxrate"></a>
<a id="tocstaxrate"></a>

```json
{
  "default": true,
  "label": "string",
  "percentage": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|boolean|false|none|none|
|label|string|true|none|none|
|percentage|number|false|none|none|
|uuid|string(uuid)|true|none|none|

<h2 id="tocS_TaxRateProductCount">TaxRateProductCount</h2>
<!-- backwards compatibility -->
<a id="schemataxrateproductcount"></a>
<a id="schema_TaxRateProductCount"></a>
<a id="tocStaxrateproductcount"></a>
<a id="tocstaxrateproductcount"></a>

```json
{
  "count": 0,
  "taxRateUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|taxRateUuid|string(uuid)|false|none|none|

<h2 id="tocS_TaxRateProductCountResponse">TaxRateProductCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemataxrateproductcountresponse"></a>
<a id="schema_TaxRateProductCountResponse"></a>
<a id="tocStaxrateproductcountresponse"></a>
<a id="tocstaxrateproductcountresponse"></a>

```json
{
  "counts": [
    {
      "count": 0,
      "taxRateUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counts|[[TaxRateProductCount](#schemataxrateproductcount)]|false|none|none|

<h2 id="tocS_TaxRateUpdateRequest">TaxRateUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemataxrateupdaterequest"></a>
<a id="schema_TaxRateUpdateRequest"></a>
<a id="tocStaxrateupdaterequest"></a>
<a id="tocstaxrateupdaterequest"></a>

```json
{
  "default": true,
  "label": "string",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|boolean|false|none|none|
|label|string|false|none|none|
|percentage|number|false|none|none|

<h2 id="tocS_TaxRatesCreateRequest">TaxRatesCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemataxratescreaterequest"></a>
<a id="schema_TaxRatesCreateRequest"></a>
<a id="tocStaxratescreaterequest"></a>
<a id="tocstaxratescreaterequest"></a>

```json
{
  "taxRates": [
    {
      "default": true,
      "label": "string",
      "percentage": 0,
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxRates|[[TaxRate](#schemataxrate)]|true|none|none|

<h2 id="tocS_TaxRatesResponse">TaxRatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemataxratesresponse"></a>
<a id="schema_TaxRatesResponse"></a>
<a id="tocStaxratesresponse"></a>
<a id="tocstaxratesresponse"></a>

```json
{
  "taxRates": [
    {
      "default": true,
      "label": "string",
      "percentage": 0,
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxRates|[[TaxRate](#schemataxrate)]|false|none|none|

<h2 id="tocS_TaxSettingsResponse">TaxSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemataxsettingsresponse"></a>
<a id="schema_TaxSettingsResponse"></a>
<a id="tocStaxsettingsresponse"></a>
<a id="tocstaxsettingsresponse"></a>

```json
{
  "organizationUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "taxationMode": "EXCLUSIVE",
  "taxationType": "NONE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationUuid|string(uuid)|false|none|none|
|taxationMode|string|false|none|none|
|taxationType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|taxationMode|EXCLUSIVE|
|taxationMode|INCLUSIVE|
|taxationType|NONE|
|taxationType|SALES_TAX|
|taxationType|VAT|

<h2 id="tocS_TaxSettingsUpdateRequest">TaxSettingsUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemataxsettingsupdaterequest"></a>
<a id="schema_TaxSettingsUpdateRequest"></a>
<a id="tocStaxsettingsupdaterequest"></a>
<a id="tocstaxsettingsupdaterequest"></a>

```json
{
  "taxationMode": "EXCLUSIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxationMode|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|taxationMode|EXCLUSIVE|
|taxationMode|INCLUSIVE|

<h2 id="tocS_VariantDTO">VariantDTO</h2>
<!-- backwards compatibility -->
<a id="schemavariantdto"></a>
<a id="schema_VariantDTO"></a>
<a id="tocSvariantdto"></a>
<a id="tocsvariantdto"></a>

```json
{
  "barcode": "string",
  "costPrice": {
    "amount": 0,
    "currencyId": "AED"
  },
  "description": "string",
  "name": "string",
  "options": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "presentation": {
    "backgroundColor": "string",
    "imageUrl": "string",
    "textColor": "string"
  },
  "price": {
    "amount": 0,
    "currencyId": "AED"
  },
  "sku": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "vatPercentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|barcode|string|false|none|none|
|costPrice|[Price](#schemaprice)|false|none|none|
|description|string|false|none|none|
|name|string|false|none|none|
|options|[[VariantOption](#schemavariantoption)]|false|none|none|
|presentation|[PresentationDTO](#schemapresentationdto)|false|none|none|
|price|[Price](#schemaprice)|false|none|none|
|sku|string|false|none|none|
|uuid|string(uuid)|true|none|none|
|vatPercentage|number|false|none|**Deprecated.**|

<h2 id="tocS_VariantOption">VariantOption</h2>
<!-- backwards compatibility -->
<a id="schemavariantoption"></a>
<a id="schema_VariantOption"></a>
<a id="tocSvariantoption"></a>
<a id="tocsvariantoption"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_VariantOptionDefinition">VariantOptionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemavariantoptiondefinition"></a>
<a id="schema_VariantOptionDefinition"></a>
<a id="tocSvariantoptiondefinition"></a>
<a id="tocsvariantoptiondefinition"></a>

```json
{
  "name": "string",
  "properties": [
    {
      "imageUrl": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|properties|[[VariantOptionProperties](#schemavariantoptionproperties)]|true|none|none|

<h2 id="tocS_VariantOptionDefinitions">VariantOptionDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemavariantoptiondefinitions"></a>
<a id="schema_VariantOptionDefinitions"></a>
<a id="tocSvariantoptiondefinitions"></a>
<a id="tocsvariantoptiondefinitions"></a>

```json
{
  "definitions": [
    {
      "name": "string",
      "properties": [
        {
          "imageUrl": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definitions|[[VariantOptionDefinition](#schemavariantoptiondefinition)]|true|none|none|

<h2 id="tocS_VariantOptionProperties">VariantOptionProperties</h2>
<!-- backwards compatibility -->
<a id="schemavariantoptionproperties"></a>
<a id="schema_VariantOptionProperties"></a>
<a id="tocSvariantoptionproperties"></a>
<a id="tocsvariantoptionproperties"></a>

```json
{
  "imageUrl": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUrl|string|false|none|none|
|value|string|true|none|none|

<h2 id="tocS_VariantOptionsResponse">VariantOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemavariantoptionsresponse"></a>
<a id="schema_VariantOptionsResponse"></a>
<a id="tocSvariantoptionsresponse"></a>
<a id="tocsvariantoptionsresponse"></a>

```json
{
  "options": [
    {
      "name": "string",
      "values": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[[Option](#schemaoption)]|false|none|none|

<h2 id="tocS_Weight">Weight</h2>
<!-- backwards compatibility -->
<a id="schemaweight"></a>
<a id="schema_Weight"></a>
<a id="tocSweight"></a>
<a id="tocsweight"></a>

```json
{
  "unit": "kg",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|true|none|none|
|weight|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|kg|
|unit|g|
|unit|oz|
|unit|lb|
