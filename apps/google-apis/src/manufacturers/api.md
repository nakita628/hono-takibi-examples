<h1 id="manufacturer-center-api">Manufacturer Center API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Public API for managing Manufacturer Center related data.

Base URLs:

* <a href="https://manufacturers.googleapis.com/">https://manufacturers.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/manufacturers/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/manufacturercenter|Manage your product listings for Google Manufacturer Center|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/manufacturercenter|Manage your product listings for Google Manufacturer Center|

<h1 id="manufacturer-center-api-accounts">accounts</h1>

## manufacturers.accounts.languages.productCertifications.get

<a id="opIdmanufacturers.accounts.languages.productCertifications.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a product certification by its name. This method can only be called by certification bodies.

<h3 id="manufacturersaccountslanguagesproductcertificationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the product certification to get. Format: accounts/{account}/languages/{language_code}/productCertifications/{id}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "brand": "string",
  "certification": [
    {
      "authority": "string",
      "link": "string",
      "logo": "string",
      "name": "string",
      "validUntil": "string",
      "value": "string"
    }
  ],
  "countryCode": [
    "string"
  ],
  "destinationStatuses": [
    {
      "destination": "string",
      "status": "UNKNOWN"
    }
  ],
  "issues": [
    {
      "attribute": "string",
      "description": "string",
      "destination": "string",
      "resolution": "RESOLUTION_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "timestamp": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "mpn": [
    "string"
  ],
  "name": "string",
  "productCode": [
    "string"
  ],
  "productType": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="manufacturersaccountslanguagesproductcertificationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProductCertification](#schemaproductcertification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/manufacturercenter ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/manufacturercenter )
</aside>

## manufacturers.accounts.languages.productCertifications.delete

<a id="opIdmanufacturers.accounts.languages.productCertifications.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a product certification by its name. This method can only be called by certification bodies.

<h3 id="manufacturersaccountslanguagesproductcertificationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the product certification to delete. Format: accounts/{account}/languages/{language_code}/productCertifications/{id}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="manufacturersaccountslanguagesproductcertificationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/manufacturercenter ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/manufacturercenter )
</aside>

## manufacturers.accounts.languages.productCertifications.patch

<a id="opIdmanufacturers.accounts.languages.productCertifications.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "brand": "string",
    "certification": [
      {
        "authority": "string",
        "link": "string",
        "logo": "string",
        "name": "string",
        "validUntil": "string",
        "value": "string"
      }
    ],
    "countryCode": [
      "string"
    ],
    "mpn": [
      "string"
    ],
    "name": "string",
    "productCode": [
      "string"
    ],
    "productType": [
      "string"
    ],
    "title": "string"
  }'
```

`PATCH /v1/{name}`

Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.

> Body parameter

```json
{
  "brand": "string",
  "certification": [
    {
      "authority": "string",
      "link": "string",
      "logo": "string",
      "name": "string",
      "validUntil": "string",
      "value": "string"
    }
  ],
  "countryCode": [
    "string"
  ],
  "mpn": [
    "string"
  ],
  "name": "string",
  "productCode": [
    "string"
  ],
  "productType": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="manufacturersaccountslanguagesproductcertificationspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637.|
|updateMask|query|string|false|Optional. The list of fields to update according to aip.dev/134. However, only full update is supported as of right now. Therefore, it can be either ignored or set to "*". Setting any other values will returns UNIMPLEMENTED error.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ProductCertification](#schemaproductcertification)|false|none|
|» brand|body|string|false|Required. This is the product's brand name. The brand is used to help identify your product.|
|» certification|body|[[Certification](#schemacertification)]|false|Required. A list of certifications to link to the described product.|
|» countryCode|body|[string]|false|Optional. A 2-letter country code (ISO 3166-1 Alpha 2).|
|» mpn|body|[string]|false|Optional. These are the Manufacturer Part Numbers (MPN). MPNs are used to uniquely identify a specific product among all products from the same manufacturer|
|» name|body|string|false|Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637.|
|» productCode|body|[string]|false|Optional. Another name for GTIN.|
|» productType|body|[string]|false|Optional. These are your own product categorization system in your product data.|
|» title|body|string|false|Required. This is to clearly identify the product you are certifying.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "brand": "string",
  "certification": [
    {
      "authority": "string",
      "link": "string",
      "logo": "string",
      "name": "string",
      "validUntil": "string",
      "value": "string"
    }
  ],
  "countryCode": [
    "string"
  ],
  "destinationStatuses": [
    {
      "destination": "string",
      "status": "UNKNOWN"
    }
  ],
  "issues": [
    {
      "attribute": "string",
      "description": "string",
      "destination": "string",
      "resolution": "RESOLUTION_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "timestamp": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "mpn": [
    "string"
  ],
  "name": "string",
  "productCode": [
    "string"
  ],
  "productType": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="manufacturersaccountslanguagesproductcertificationspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProductCertification](#schemaproductcertification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/manufacturercenter ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/manufacturercenter )
</aside>

## manufacturers.accounts.languages.productCertifications.list

<a id="opIdmanufacturers.accounts.languages.productCertifications.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/productCertifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/productCertifications`

Lists product certifications from a specified certification body. This method can only be called by certification bodies.

<h3 id="manufacturersaccountslanguagesproductcertificationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of product certifications. Format: accounts/{account}/languages/{language_code}|
|pageSize|query|integer|false|Optional. The maximum number of product certifications to return. The service may return fewer than this value. If unspecified, at most 50 product certifications will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListProductCertifications` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductCertifications` must match the call that provided the page token. Required if requesting the second or higher page.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "productCertifications": [
    {
      "brand": "string",
      "certification": [
        {
          "authority": "string",
          "link": "string",
          "logo": "string",
          "name": "string",
          "validUntil": "string",
          "value": "string"
        }
      ],
      "countryCode": [
        "string"
      ],
      "destinationStatuses": [
        {
          "destination": "string",
          "status": "UNKNOWN"
        }
      ],
      "issues": [
        {
          "attribute": "string",
          "description": "string",
          "destination": "string",
          "resolution": "RESOLUTION_UNSPECIFIED",
          "severity": "SEVERITY_UNSPECIFIED",
          "timestamp": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "mpn": [
        "string"
      ],
      "name": "string",
      "productCode": [
        "string"
      ],
      "productType": [
        "string"
      ],
      "title": "string"
    }
  ]
}
```

<h3 id="manufacturersaccountslanguagesproductcertificationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListProductCertificationsResponse](#schemalistproductcertificationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/manufacturercenter ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/manufacturercenter )
</aside>

## manufacturers.accounts.products.list

<a id="opIdmanufacturers.accounts.products.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/products`

Lists all the products in a Manufacturer Center account.

<h3 id="manufacturersaccountsproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.|
|include|query|[string]|false|The information to be included in the response. Only sections listed here will be returned.|
|pageSize|query|integer|false|Maximum number of product statuses to return in the response, used for paging.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|UNKNOWN|
|include|ATTRIBUTES|
|include|ISSUES|
|include|DESTINATION_STATUSES|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "products": [
    {
      "attributes": {
        "additionalImageLink": [
          {
            "imageUrl": "string",
            "status": "STATUS_UNSPECIFIED",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "ageGroup": "string",
        "brand": "string",
        "capacity": {
          "unit": "string",
          "value": "string"
        },
        "color": "string",
        "count": {
          "unit": "string",
          "value": "string"
        },
        "description": "string",
        "disclosureDate": "string",
        "excludedDestination": [
          "string"
        ],
        "featureDescription": [
          {
            "headline": "string",
            "image": {
              "imageUrl": "string",
              "status": "STATUS_UNSPECIFIED",
              "type": "TYPE_UNSPECIFIED"
            },
            "text": "string"
          }
        ],
        "flavor": "string",
        "format": "string",
        "gender": "string",
        "grocery": {
          "activeIngredients": "string",
          "alcoholByVolume": 0,
          "allergens": "string",
          "derivedNutritionClaim": [
            "string"
          ],
          "directions": "string",
          "indications": "string",
          "ingredients": "string",
          "nutritionClaim": [
            "string"
          ],
          "storageInstructions": "string"
        },
        "gtin": [
          "string"
        ],
        "imageLink": {
          "imageUrl": "string",
          "status": "STATUS_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED"
        },
        "includedDestination": [
          "string"
        ],
        "itemGroupId": "string",
        "material": "string",
        "mpn": "string",
        "nutrition": {
          "addedSugars": {
            "amount": 0,
            "unit": "string"
          },
          "addedSugarsDailyPercentage": 0,
          "calcium": {
            "amount": 0,
            "unit": "string"
          },
          "calciumDailyPercentage": 0,
          "cholesterol": {
            "amount": 0,
            "unit": "string"
          },
          "cholesterolDailyPercentage": 0,
          "dietaryFiber": {
            "amount": 0,
            "unit": "string"
          },
          "dietaryFiberDailyPercentage": 0,
          "energy": {
            "amount": 0,
            "unit": "string"
          },
          "energyFromFat": {
            "amount": 0,
            "unit": "string"
          },
          "folateDailyPercentage": 0,
          "folateFolicAcid": {
            "amount": 0,
            "unit": "string"
          },
          "folateMcgDfe": 0,
          "iron": {
            "amount": 0,
            "unit": "string"
          },
          "ironDailyPercentage": 0,
          "monounsaturatedFat": {
            "amount": 0,
            "unit": "string"
          },
          "nutritionFactMeasure": "string",
          "polyols": {
            "amount": 0,
            "unit": "string"
          },
          "polyunsaturatedFat": {
            "amount": 0,
            "unit": "string"
          },
          "potassium": {
            "amount": 0,
            "unit": "string"
          },
          "potassiumDailyPercentage": 0,
          "preparedSizeDescription": "string",
          "protein": {
            "amount": 0,
            "unit": "string"
          },
          "proteinDailyPercentage": 0,
          "saturatedFat": {
            "amount": 0,
            "unit": "string"
          },
          "saturatedFatDailyPercentage": 0,
          "servingSizeDescription": "string",
          "servingSizeMeasure": {
            "amount": 0,
            "unit": "string"
          },
          "servingsPerContainer": "string",
          "sodium": {
            "amount": 0,
            "unit": "string"
          },
          "sodiumDailyPercentage": 0,
          "starch": {
            "amount": 0,
            "unit": "string"
          },
          "totalCarbohydrate": {
            "amount": 0,
            "unit": "string"
          },
          "totalCarbohydrateDailyPercentage": 0,
          "totalFat": {
            "amount": 0,
            "unit": "string"
          },
          "totalFatDailyPercentage": 0,
          "totalSugars": {
            "amount": 0,
            "unit": "string"
          },
          "totalSugarsDailyPercentage": 0,
          "transFat": {
            "amount": 0,
            "unit": "string"
          },
          "transFatDailyPercentage": 0,
          "vitaminD": {
            "amount": 0,
            "unit": "string"
          },
          "vitaminDDailyPercentage": 0,
          "voluntaryNutritionFact": [
            {
              "dailyPercentage": 0,
              "name": "string",
              "value": {
                "amount": 0,
                "unit": "string"
              }
            }
          ]
        },
        "pattern": "string",
        "productDetail": [
          {
            "attributeName": "string",
            "attributeValue": "string",
            "sectionName": "string"
          }
        ],
        "productHighlight": [
          "string"
        ],
        "productLine": "string",
        "productName": "string",
        "productPageUrl": "string",
        "productType": [
          "string"
        ],
        "releaseDate": "string",
        "richProductContent": [
          "string"
        ],
        "scent": "string",
        "size": "string",
        "sizeSystem": "string",
        "sizeType": [
          "string"
        ],
        "suggestedRetailPrice": {
          "amount": "string",
          "currency": "string"
        },
        "targetClientId": "string",
        "theme": "string",
        "title": "string",
        "videoLink": [
          "string"
        ]
      },
      "contentLanguage": "string",
      "destinationStatuses": [
        {
          "destination": "string",
          "status": "UNKNOWN"
        }
      ],
      "issues": [
        {
          "attribute": "string",
          "description": "string",
          "destination": "string",
          "resolution": "RESOLUTION_UNSPECIFIED",
          "severity": "SEVERITY_UNSPECIFIED",
          "timestamp": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "name": "string",
      "parent": "string",
      "productId": "string",
      "targetCountry": "string"
    }
  ]
}
```

<h3 id="manufacturersaccountsproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListProductsResponse](#schemalistproductsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/manufacturercenter ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/manufacturercenter )
</aside>

## manufacturers.accounts.products.get

<a id="opIdmanufacturers.accounts.products.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/products/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/products/{name}`

Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.

<h3 id="manufacturersaccountsproductsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.|
|name|path|string|true|Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.|
|include|query|[string]|false|The information to be included in the response. Only sections listed here will be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|UNKNOWN|
|include|ATTRIBUTES|
|include|ISSUES|
|include|DESTINATION_STATUSES|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "additionalImageLink": [
      {
        "imageUrl": "string",
        "status": "STATUS_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "ageGroup": "string",
    "brand": "string",
    "capacity": {
      "unit": "string",
      "value": "string"
    },
    "color": "string",
    "count": {
      "unit": "string",
      "value": "string"
    },
    "description": "string",
    "disclosureDate": "string",
    "excludedDestination": [
      "string"
    ],
    "featureDescription": [
      {
        "headline": "string",
        "image": {
          "imageUrl": "string",
          "status": "STATUS_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED"
        },
        "text": "string"
      }
    ],
    "flavor": "string",
    "format": "string",
    "gender": "string",
    "grocery": {
      "activeIngredients": "string",
      "alcoholByVolume": 0,
      "allergens": "string",
      "derivedNutritionClaim": [
        "string"
      ],
      "directions": "string",
      "indications": "string",
      "ingredients": "string",
      "nutritionClaim": [
        "string"
      ],
      "storageInstructions": "string"
    },
    "gtin": [
      "string"
    ],
    "imageLink": {
      "imageUrl": "string",
      "status": "STATUS_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED"
    },
    "includedDestination": [
      "string"
    ],
    "itemGroupId": "string",
    "material": "string",
    "mpn": "string",
    "nutrition": {
      "addedSugars": {
        "amount": 0,
        "unit": "string"
      },
      "addedSugarsDailyPercentage": 0,
      "calcium": {
        "amount": 0,
        "unit": "string"
      },
      "calciumDailyPercentage": 0,
      "cholesterol": {
        "amount": 0,
        "unit": "string"
      },
      "cholesterolDailyPercentage": 0,
      "dietaryFiber": {
        "amount": 0,
        "unit": "string"
      },
      "dietaryFiberDailyPercentage": 0,
      "energy": {
        "amount": 0,
        "unit": "string"
      },
      "energyFromFat": {
        "amount": 0,
        "unit": "string"
      },
      "folateDailyPercentage": 0,
      "folateFolicAcid": {
        "amount": 0,
        "unit": "string"
      },
      "folateMcgDfe": 0,
      "iron": {
        "amount": 0,
        "unit": "string"
      },
      "ironDailyPercentage": 0,
      "monounsaturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "nutritionFactMeasure": "string",
      "polyols": {
        "amount": 0,
        "unit": "string"
      },
      "polyunsaturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "potassium": {
        "amount": 0,
        "unit": "string"
      },
      "potassiumDailyPercentage": 0,
      "preparedSizeDescription": "string",
      "protein": {
        "amount": 0,
        "unit": "string"
      },
      "proteinDailyPercentage": 0,
      "saturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "saturatedFatDailyPercentage": 0,
      "servingSizeDescription": "string",
      "servingSizeMeasure": {
        "amount": 0,
        "unit": "string"
      },
      "servingsPerContainer": "string",
      "sodium": {
        "amount": 0,
        "unit": "string"
      },
      "sodiumDailyPercentage": 0,
      "starch": {
        "amount": 0,
        "unit": "string"
      },
      "totalCarbohydrate": {
        "amount": 0,
        "unit": "string"
      },
      "totalCarbohydrateDailyPercentage": 0,
      "totalFat": {
        "amount": 0,
        "unit": "string"
      },
      "totalFatDailyPercentage": 0,
      "totalSugars": {
        "amount": 0,
        "unit": "string"
      },
      "totalSugarsDailyPercentage": 0,
      "transFat": {
        "amount": 0,
        "unit": "string"
      },
      "transFatDailyPercentage": 0,
      "vitaminD": {
        "amount": 0,
        "unit": "string"
      },
      "vitaminDDailyPercentage": 0,
      "voluntaryNutritionFact": [
        {
          "dailyPercentage": 0,
          "name": "string",
          "value": {
            "amount": 0,
            "unit": "string"
          }
        }
      ]
    },
    "pattern": "string",
    "productDetail": [
      {
        "attributeName": "string",
        "attributeValue": "string",
        "sectionName": "string"
      }
    ],
    "productHighlight": [
      "string"
    ],
    "productLine": "string",
    "productName": "string",
    "productPageUrl": "string",
    "productType": [
      "string"
    ],
    "releaseDate": "string",
    "richProductContent": [
      "string"
    ],
    "scent": "string",
    "size": "string",
    "sizeSystem": "string",
    "sizeType": [
      "string"
    ],
    "suggestedRetailPrice": {
      "amount": "string",
      "currency": "string"
    },
    "targetClientId": "string",
    "theme": "string",
    "title": "string",
    "videoLink": [
      "string"
    ]
  },
  "contentLanguage": "string",
  "destinationStatuses": [
    {
      "destination": "string",
      "status": "UNKNOWN"
    }
  ],
  "issues": [
    {
      "attribute": "string",
      "description": "string",
      "destination": "string",
      "resolution": "RESOLUTION_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "timestamp": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "name": "string",
  "parent": "string",
  "productId": "string",
  "targetCountry": "string"
}
```

<h3 id="manufacturersaccountsproductsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Product](#schemaproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/manufacturercenter ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/manufacturercenter )
</aside>

## manufacturers.accounts.products.update

<a id="opIdmanufacturers.accounts.products.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/products/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalImageLink": [
      {
        "imageUrl": "string",
        "status": "STATUS_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "ageGroup": "string",
    "brand": "string",
    "capacity": {
      "unit": "string",
      "value": "string"
    },
    "color": "string",
    "count": {
      "unit": "string",
      "value": "string"
    },
    "description": "string",
    "disclosureDate": "string",
    "excludedDestination": [
      "string"
    ],
    "featureDescription": [
      {
        "headline": "string",
        "image": {
          "imageUrl": "string",
          "status": "STATUS_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED"
        },
        "text": "string"
      }
    ],
    "flavor": "string",
    "format": "string",
    "gender": "string",
    "grocery": {
      "activeIngredients": "string",
      "alcoholByVolume": 0,
      "allergens": "string",
      "derivedNutritionClaim": [
        "string"
      ],
      "directions": "string",
      "indications": "string",
      "ingredients": "string",
      "nutritionClaim": [
        "string"
      ],
      "storageInstructions": "string"
    },
    "gtin": [
      "string"
    ],
    "imageLink": {
      "imageUrl": "string",
      "status": "STATUS_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED"
    },
    "includedDestination": [
      "string"
    ],
    "itemGroupId": "string",
    "material": "string",
    "mpn": "string",
    "nutrition": {
      "addedSugars": {
        "amount": 0,
        "unit": "string"
      },
      "addedSugarsDailyPercentage": 0,
      "calcium": {
        "amount": 0,
        "unit": "string"
      },
      "calciumDailyPercentage": 0,
      "cholesterol": {
        "amount": 0,
        "unit": "string"
      },
      "cholesterolDailyPercentage": 0,
      "dietaryFiber": {
        "amount": 0,
        "unit": "string"
      },
      "dietaryFiberDailyPercentage": 0,
      "energy": {
        "amount": 0,
        "unit": "string"
      },
      "energyFromFat": {
        "amount": 0,
        "unit": "string"
      },
      "folateDailyPercentage": 0,
      "folateFolicAcid": {
        "amount": 0,
        "unit": "string"
      },
      "folateMcgDfe": 0,
      "iron": {
        "amount": 0,
        "unit": "string"
      },
      "ironDailyPercentage": 0,
      "monounsaturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "nutritionFactMeasure": "string",
      "polyols": {
        "amount": 0,
        "unit": "string"
      },
      "polyunsaturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "potassium": {
        "amount": 0,
        "unit": "string"
      },
      "potassiumDailyPercentage": 0,
      "preparedSizeDescription": "string",
      "protein": {
        "amount": 0,
        "unit": "string"
      },
      "proteinDailyPercentage": 0,
      "saturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "saturatedFatDailyPercentage": 0,
      "servingSizeDescription": "string",
      "servingSizeMeasure": {
        "amount": 0,
        "unit": "string"
      },
      "servingsPerContainer": "string",
      "sodium": {
        "amount": 0,
        "unit": "string"
      },
      "sodiumDailyPercentage": 0,
      "starch": {
        "amount": 0,
        "unit": "string"
      },
      "totalCarbohydrate": {
        "amount": 0,
        "unit": "string"
      },
      "totalCarbohydrateDailyPercentage": 0,
      "totalFat": {
        "amount": 0,
        "unit": "string"
      },
      "totalFatDailyPercentage": 0,
      "totalSugars": {
        "amount": 0,
        "unit": "string"
      },
      "totalSugarsDailyPercentage": 0,
      "transFat": {
        "amount": 0,
        "unit": "string"
      },
      "transFatDailyPercentage": 0,
      "vitaminD": {
        "amount": 0,
        "unit": "string"
      },
      "vitaminDDailyPercentage": 0,
      "voluntaryNutritionFact": [
        {
          "dailyPercentage": 0,
          "name": "string",
          "value": {
            "amount": 0,
            "unit": "string"
          }
        }
      ]
    },
    "pattern": "string",
    "productDetail": [
      {
        "attributeName": "string",
        "attributeValue": "string",
        "sectionName": "string"
      }
    ],
    "productHighlight": [
      "string"
    ],
    "productLine": "string",
    "productName": "string",
    "productPageUrl": "string",
    "productType": [
      "string"
    ],
    "releaseDate": "string",
    "richProductContent": [
      "string"
    ],
    "scent": "string",
    "size": "string",
    "sizeSystem": "string",
    "sizeType": [
      "string"
    ],
    "suggestedRetailPrice": {
      "amount": "string",
      "currency": "string"
    },
    "targetClientId": "string",
    "theme": "string",
    "title": "string",
    "videoLink": [
      "string"
    ]
  }'
```

`PUT /v1/{parent}/products/{name}`

Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.

> Body parameter

```json
{
  "additionalImageLink": [
    {
      "imageUrl": "string",
      "status": "STATUS_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "ageGroup": "string",
  "brand": "string",
  "capacity": {
    "unit": "string",
    "value": "string"
  },
  "color": "string",
  "count": {
    "unit": "string",
    "value": "string"
  },
  "description": "string",
  "disclosureDate": "string",
  "excludedDestination": [
    "string"
  ],
  "featureDescription": [
    {
      "headline": "string",
      "image": {
        "imageUrl": "string",
        "status": "STATUS_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      },
      "text": "string"
    }
  ],
  "flavor": "string",
  "format": "string",
  "gender": "string",
  "grocery": {
    "activeIngredients": "string",
    "alcoholByVolume": 0,
    "allergens": "string",
    "derivedNutritionClaim": [
      "string"
    ],
    "directions": "string",
    "indications": "string",
    "ingredients": "string",
    "nutritionClaim": [
      "string"
    ],
    "storageInstructions": "string"
  },
  "gtin": [
    "string"
  ],
  "imageLink": {
    "imageUrl": "string",
    "status": "STATUS_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  },
  "includedDestination": [
    "string"
  ],
  "itemGroupId": "string",
  "material": "string",
  "mpn": "string",
  "nutrition": {
    "addedSugars": {
      "amount": 0,
      "unit": "string"
    },
    "addedSugarsDailyPercentage": 0,
    "calcium": {
      "amount": 0,
      "unit": "string"
    },
    "calciumDailyPercentage": 0,
    "cholesterol": {
      "amount": 0,
      "unit": "string"
    },
    "cholesterolDailyPercentage": 0,
    "dietaryFiber": {
      "amount": 0,
      "unit": "string"
    },
    "dietaryFiberDailyPercentage": 0,
    "energy": {
      "amount": 0,
      "unit": "string"
    },
    "energyFromFat": {
      "amount": 0,
      "unit": "string"
    },
    "folateDailyPercentage": 0,
    "folateFolicAcid": {
      "amount": 0,
      "unit": "string"
    },
    "folateMcgDfe": 0,
    "iron": {
      "amount": 0,
      "unit": "string"
    },
    "ironDailyPercentage": 0,
    "monounsaturatedFat": {
      "amount": 0,
      "unit": "string"
    },
    "nutritionFactMeasure": "string",
    "polyols": {
      "amount": 0,
      "unit": "string"
    },
    "polyunsaturatedFat": {
      "amount": 0,
      "unit": "string"
    },
    "potassium": {
      "amount": 0,
      "unit": "string"
    },
    "potassiumDailyPercentage": 0,
    "preparedSizeDescription": "string",
    "protein": {
      "amount": 0,
      "unit": "string"
    },
    "proteinDailyPercentage": 0,
    "saturatedFat": {
      "amount": 0,
      "unit": "string"
    },
    "saturatedFatDailyPercentage": 0,
    "servingSizeDescription": "string",
    "servingSizeMeasure": {
      "amount": 0,
      "unit": "string"
    },
    "servingsPerContainer": "string",
    "sodium": {
      "amount": 0,
      "unit": "string"
    },
    "sodiumDailyPercentage": 0,
    "starch": {
      "amount": 0,
      "unit": "string"
    },
    "totalCarbohydrate": {
      "amount": 0,
      "unit": "string"
    },
    "totalCarbohydrateDailyPercentage": 0,
    "totalFat": {
      "amount": 0,
      "unit": "string"
    },
    "totalFatDailyPercentage": 0,
    "totalSugars": {
      "amount": 0,
      "unit": "string"
    },
    "totalSugarsDailyPercentage": 0,
    "transFat": {
      "amount": 0,
      "unit": "string"
    },
    "transFatDailyPercentage": 0,
    "vitaminD": {
      "amount": 0,
      "unit": "string"
    },
    "vitaminDDailyPercentage": 0,
    "voluntaryNutritionFact": [
      {
        "dailyPercentage": 0,
        "name": "string",
        "value": {
          "amount": 0,
          "unit": "string"
        }
      }
    ]
  },
  "pattern": "string",
  "productDetail": [
    {
      "attributeName": "string",
      "attributeValue": "string",
      "sectionName": "string"
    }
  ],
  "productHighlight": [
    "string"
  ],
  "productLine": "string",
  "productName": "string",
  "productPageUrl": "string",
  "productType": [
    "string"
  ],
  "releaseDate": "string",
  "richProductContent": [
    "string"
  ],
  "scent": "string",
  "size": "string",
  "sizeSystem": "string",
  "sizeType": [
    "string"
  ],
  "suggestedRetailPrice": {
    "amount": "string",
    "currency": "string"
  },
  "targetClientId": "string",
  "theme": "string",
  "title": "string",
  "videoLink": [
    "string"
  ]
}
```

<h3 id="manufacturersaccountsproductsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.|
|name|path|string|true|Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Attributes](#schemaattributes)|false|none|
|» additionalImageLink|body|[[Image](#schemaimage)]|false|The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage.|
|» ageGroup|body|string|false|The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup.|
|» brand|body|string|false|The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand.|
|» capacity|body|[Capacity](#schemacapacity)|false|The capacity of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.|
|» color|body|string|false|The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color.|
|» count|body|[Count](#schemacount)|false|The count of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#count.|
|» description|body|string|false|The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description.|
|» disclosureDate|body|string|false|The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure.|
|» excludedDestination|body|[string]|false|A list of excluded destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550|
|» featureDescription|body|[[FeatureDescription](#schemafeaturedescription)]|false|The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.|
|» flavor|body|string|false|The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor.|
|» format|body|string|false|The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format.|
|» gender|body|string|false|The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender.|
|» grocery|body|[Grocery](#schemagrocery)|false|Grocery Attributes. See more at https://support.google.com/manufacturers/answer/12098458#grocery.|
|» gtin|body|[string]|false|The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin.|
|» imageLink|body|[Image](#schemaimage)|false|The image of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#image.|
|» includedDestination|body|[string]|false|A list of included destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550|
|» itemGroupId|body|string|false|The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid.|
|» material|body|string|false|The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material.|
|» mpn|body|string|false|The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn.|
|» nutrition|body|[Nutrition](#schemanutrition)|false|Nutrition Attributes. See more at https://support.google.com/manufacturers/answer/12098458#food-servings.|
|» pattern|body|string|false|The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern.|
|» productDetail|body|[[ProductDetail](#schemaproductdetail)]|false|The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.|
|» productHighlight|body|[string]|false|The product highlights. For more information, see https://support.google.com/manufacturers/answer/10066942|
|» productLine|body|string|false|The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline.|
|» productName|body|string|false|The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname.|
|» productPageUrl|body|string|false|The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage.|
|» productType|body|[string]|false|The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype.|
|» releaseDate|body|string|false|The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release.|
|» richProductContent|body|[string]|false|Rich product content. For more information, see https://support.google.com/manufacturers/answer/9389865|
|» scent|body|string|false|The scent of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#scent.|
|» size|body|string|false|The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size.|
|» sizeSystem|body|string|false|The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem.|
|» sizeType|body|[string]|false|The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype.|
|» suggestedRetailPrice|body|[Price](#schemaprice)|false|The suggested retail price (MSRP) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#price.|
|» targetClientId|body|string|false|The target client id. Should only be used in the accounts of the data partners. For more information, see https://support.google.com/manufacturers/answer/10857344|
|» theme|body|string|false|The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme.|
|» title|body|string|false|The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title.|
|» videoLink|body|[string]|false|The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="manufacturersaccountsproductsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/manufacturercenter ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/manufacturercenter )
</aside>

## manufacturers.accounts.products.delete

<a id="opIdmanufacturers.accounts.products.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/products/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{parent}/products/{name}`

Deletes the product from a Manufacturer Center account.

<h3 id="manufacturersaccountsproductsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.|
|name|path|string|true|Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="manufacturersaccountsproductsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/manufacturercenter ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/manufacturercenter )
</aside>

# Schemas

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{
  "additionalImageLink": [
    {
      "imageUrl": "string",
      "status": "STATUS_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "ageGroup": "string",
  "brand": "string",
  "capacity": {
    "unit": "string",
    "value": "string"
  },
  "color": "string",
  "count": {
    "unit": "string",
    "value": "string"
  },
  "description": "string",
  "disclosureDate": "string",
  "excludedDestination": [
    "string"
  ],
  "featureDescription": [
    {
      "headline": "string",
      "image": {
        "imageUrl": "string",
        "status": "STATUS_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      },
      "text": "string"
    }
  ],
  "flavor": "string",
  "format": "string",
  "gender": "string",
  "grocery": {
    "activeIngredients": "string",
    "alcoholByVolume": 0,
    "allergens": "string",
    "derivedNutritionClaim": [
      "string"
    ],
    "directions": "string",
    "indications": "string",
    "ingredients": "string",
    "nutritionClaim": [
      "string"
    ],
    "storageInstructions": "string"
  },
  "gtin": [
    "string"
  ],
  "imageLink": {
    "imageUrl": "string",
    "status": "STATUS_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  },
  "includedDestination": [
    "string"
  ],
  "itemGroupId": "string",
  "material": "string",
  "mpn": "string",
  "nutrition": {
    "addedSugars": {
      "amount": 0,
      "unit": "string"
    },
    "addedSugarsDailyPercentage": 0,
    "calcium": {
      "amount": 0,
      "unit": "string"
    },
    "calciumDailyPercentage": 0,
    "cholesterol": {
      "amount": 0,
      "unit": "string"
    },
    "cholesterolDailyPercentage": 0,
    "dietaryFiber": {
      "amount": 0,
      "unit": "string"
    },
    "dietaryFiberDailyPercentage": 0,
    "energy": {
      "amount": 0,
      "unit": "string"
    },
    "energyFromFat": {
      "amount": 0,
      "unit": "string"
    },
    "folateDailyPercentage": 0,
    "folateFolicAcid": {
      "amount": 0,
      "unit": "string"
    },
    "folateMcgDfe": 0,
    "iron": {
      "amount": 0,
      "unit": "string"
    },
    "ironDailyPercentage": 0,
    "monounsaturatedFat": {
      "amount": 0,
      "unit": "string"
    },
    "nutritionFactMeasure": "string",
    "polyols": {
      "amount": 0,
      "unit": "string"
    },
    "polyunsaturatedFat": {
      "amount": 0,
      "unit": "string"
    },
    "potassium": {
      "amount": 0,
      "unit": "string"
    },
    "potassiumDailyPercentage": 0,
    "preparedSizeDescription": "string",
    "protein": {
      "amount": 0,
      "unit": "string"
    },
    "proteinDailyPercentage": 0,
    "saturatedFat": {
      "amount": 0,
      "unit": "string"
    },
    "saturatedFatDailyPercentage": 0,
    "servingSizeDescription": "string",
    "servingSizeMeasure": {
      "amount": 0,
      "unit": "string"
    },
    "servingsPerContainer": "string",
    "sodium": {
      "amount": 0,
      "unit": "string"
    },
    "sodiumDailyPercentage": 0,
    "starch": {
      "amount": 0,
      "unit": "string"
    },
    "totalCarbohydrate": {
      "amount": 0,
      "unit": "string"
    },
    "totalCarbohydrateDailyPercentage": 0,
    "totalFat": {
      "amount": 0,
      "unit": "string"
    },
    "totalFatDailyPercentage": 0,
    "totalSugars": {
      "amount": 0,
      "unit": "string"
    },
    "totalSugarsDailyPercentage": 0,
    "transFat": {
      "amount": 0,
      "unit": "string"
    },
    "transFatDailyPercentage": 0,
    "vitaminD": {
      "amount": 0,
      "unit": "string"
    },
    "vitaminDDailyPercentage": 0,
    "voluntaryNutritionFact": [
      {
        "dailyPercentage": 0,
        "name": "string",
        "value": {
          "amount": 0,
          "unit": "string"
        }
      }
    ]
  },
  "pattern": "string",
  "productDetail": [
    {
      "attributeName": "string",
      "attributeValue": "string",
      "sectionName": "string"
    }
  ],
  "productHighlight": [
    "string"
  ],
  "productLine": "string",
  "productName": "string",
  "productPageUrl": "string",
  "productType": [
    "string"
  ],
  "releaseDate": "string",
  "richProductContent": [
    "string"
  ],
  "scent": "string",
  "size": "string",
  "sizeSystem": "string",
  "sizeType": [
    "string"
  ],
  "suggestedRetailPrice": {
    "amount": "string",
    "currency": "string"
  },
  "targetClientId": "string",
  "theme": "string",
  "title": "string",
  "videoLink": [
    "string"
  ]
}
```

Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalImageLink|[[Image](#schemaimage)]|false|none|The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage.|
|ageGroup|string|false|none|The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup.|
|brand|string|false|none|The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand.|
|capacity|[Capacity](#schemacapacity)|false|none|The capacity of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.|
|color|string|false|none|The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color.|
|count|[Count](#schemacount)|false|none|The count of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#count.|
|description|string|false|none|The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description.|
|disclosureDate|string|false|none|The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure.|
|excludedDestination|[string]|false|none|A list of excluded destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550|
|featureDescription|[[FeatureDescription](#schemafeaturedescription)]|false|none|The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.|
|flavor|string|false|none|The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor.|
|format|string|false|none|The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format.|
|gender|string|false|none|The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender.|
|grocery|[Grocery](#schemagrocery)|false|none|Grocery Attributes. See more at https://support.google.com/manufacturers/answer/12098458#grocery.|
|gtin|[string]|false|none|The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin.|
|imageLink|[Image](#schemaimage)|false|none|The image of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#image.|
|includedDestination|[string]|false|none|A list of included destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550|
|itemGroupId|string|false|none|The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid.|
|material|string|false|none|The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material.|
|mpn|string|false|none|The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn.|
|nutrition|[Nutrition](#schemanutrition)|false|none|Nutrition Attributes. See more at https://support.google.com/manufacturers/answer/12098458#food-servings.|
|pattern|string|false|none|The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern.|
|productDetail|[[ProductDetail](#schemaproductdetail)]|false|none|The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.|
|productHighlight|[string]|false|none|The product highlights. For more information, see https://support.google.com/manufacturers/answer/10066942|
|productLine|string|false|none|The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline.|
|productName|string|false|none|The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname.|
|productPageUrl|string|false|none|The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage.|
|productType|[string]|false|none|The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype.|
|releaseDate|string|false|none|The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release.|
|richProductContent|[string]|false|none|Rich product content. For more information, see https://support.google.com/manufacturers/answer/9389865|
|scent|string|false|none|The scent of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#scent.|
|size|string|false|none|The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size.|
|sizeSystem|string|false|none|The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem.|
|sizeType|[string]|false|none|The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype.|
|suggestedRetailPrice|[Price](#schemaprice)|false|none|The suggested retail price (MSRP) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#price.|
|targetClientId|string|false|none|The target client id. Should only be used in the accounts of the data partners. For more information, see https://support.google.com/manufacturers/answer/10857344|
|theme|string|false|none|The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme.|
|title|string|false|none|The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title.|
|videoLink|[string]|false|none|The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video.|

<h2 id="tocS_Capacity">Capacity</h2>
<!-- backwards compatibility -->
<a id="schemacapacity"></a>
<a id="schema_Capacity"></a>
<a id="tocScapacity"></a>
<a id="tocscapacity"></a>

```json
{
  "unit": "string",
  "value": "string"
}
```

The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|false|none|The unit of the capacity, i.e., MB, GB, or TB.|
|value|string(int64)|false|none|The numeric value of the capacity.|

<h2 id="tocS_Certification">Certification</h2>
<!-- backwards compatibility -->
<a id="schemacertification"></a>
<a id="schema_Certification"></a>
<a id="tocScertification"></a>
<a id="tocscertification"></a>

```json
{
  "authority": "string",
  "link": "string",
  "logo": "string",
  "name": "string",
  "validUntil": "string",
  "value": "string"
}
```

Description of a certification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authority|string|false|none|Required. Name of the certification body.|
|link|string|false|none|Optional. A URL link to the certification.|
|logo|string|false|none|Optional. A URL link to the certification logo.|
|name|string|false|none|Required. Name of the certification.|
|validUntil|string|false|none|Optional. The expiration date (UTC).|
|value|string|false|none|Required. A custom value of the certification.|

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
{
  "unit": "string",
  "value": "string"
}
```

The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|false|none|The unit in which these products are counted.|
|value|string(int64)|false|none|The numeric value of the number of products in a package.|

<h2 id="tocS_DestinationStatus">DestinationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadestinationstatus"></a>
<a id="schema_DestinationStatus"></a>
<a id="tocSdestinationstatus"></a>
<a id="tocsdestinationstatus"></a>

```json
{
  "destination": "string",
  "status": "UNKNOWN"
}
```

The destination status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|The name of the destination.|
|status|string|false|none|The status of the destination.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNKNOWN|
|status|ACTIVE|
|status|PENDING|
|status|DISAPPROVED|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_FeatureDescription">FeatureDescription</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedescription"></a>
<a id="schema_FeatureDescription"></a>
<a id="tocSfeaturedescription"></a>
<a id="tocsfeaturedescription"></a>

```json
{
  "headline": "string",
  "image": {
    "imageUrl": "string",
    "status": "STATUS_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  },
  "text": "string"
}
```

A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headline|string|false|none|A short description of the feature.|
|image|[Image](#schemaimage)|false|none|An optional image describing the feature.|
|text|string|false|none|A detailed description of the feature.|

<h2 id="tocS_FloatUnit">FloatUnit</h2>
<!-- backwards compatibility -->
<a id="schemafloatunit"></a>
<a id="schema_FloatUnit"></a>
<a id="tocSfloatunit"></a>
<a id="tocsfloatunit"></a>

```json
{
  "amount": 0,
  "unit": "string"
}
```

Combination of float amount and unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|amount.|
|unit|string|false|none|unit.|

<h2 id="tocS_Grocery">Grocery</h2>
<!-- backwards compatibility -->
<a id="schemagrocery"></a>
<a id="schema_Grocery"></a>
<a id="tocSgrocery"></a>
<a id="tocsgrocery"></a>

```json
{
  "activeIngredients": "string",
  "alcoholByVolume": 0,
  "allergens": "string",
  "derivedNutritionClaim": [
    "string"
  ],
  "directions": "string",
  "indications": "string",
  "ingredients": "string",
  "nutritionClaim": [
    "string"
  ],
  "storageInstructions": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeIngredients|string|false|none|Active ingredients.|
|alcoholByVolume|number(double)|false|none|Alcohol by volume.|
|allergens|string|false|none|Allergens.|
|derivedNutritionClaim|[string]|false|none|Derived nutrition claim.|
|directions|string|false|none|Directions.|
|indications|string|false|none|Indications.|
|ingredients|string|false|none|Ingredients.|
|nutritionClaim|[string]|false|none|Nutrition claim.|
|storageInstructions|string|false|none|Storage instructions.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "imageUrl": "string",
  "status": "STATUS_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

An image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUrl|string|false|none|The URL of the image. For crawled images, this is the provided URL. For uploaded images, this is a serving URL from Google if the image has been processed successfully.|
|status|string|false|none|The status of the image. @OutputOnly|
|type|string|false|none|The type of the image, i.e., crawled or uploaded. @OutputOnly|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|PENDING_PROCESSING|
|status|PENDING_CRAWL|
|status|OK|
|status|ROBOTED|
|status|XROBOTED|
|status|CRAWL_ERROR|
|status|PROCESSING_ERROR|
|status|DECODING_ERROR|
|status|TOO_BIG|
|status|CRAWL_SKIPPED|
|status|HOSTLOADED|
|status|HTTP_404|
|type|TYPE_UNSPECIFIED|
|type|CRAWLED|
|type|UPLOADED|

<h2 id="tocS_Issue">Issue</h2>
<!-- backwards compatibility -->
<a id="schemaissue"></a>
<a id="schema_Issue"></a>
<a id="tocSissue"></a>
<a id="tocsissue"></a>

```json
{
  "attribute": "string",
  "description": "string",
  "destination": "string",
  "resolution": "RESOLUTION_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "timestamp": "string",
  "title": "string",
  "type": "string"
}
```

Product issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute|string|false|none|If present, the attribute that triggered the issue. For more information about attributes, see https://support.google.com/manufacturers/answer/6124116.|
|description|string|false|none|Longer description of the issue focused on how to resolve it.|
|destination|string|false|none|The destination this issue applies to.|
|resolution|string|false|none|What needs to happen to resolve the issue.|
|severity|string|false|none|The severity of the issue.|
|timestamp|string(google-datetime)|false|none|The timestamp when this issue appeared.|
|title|string|false|none|Short title describing the nature of the issue.|
|type|string|false|none|The server-generated type of the issue, for example, “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.|

#### Enumerated Values

|Property|Value|
|---|---|
|resolution|RESOLUTION_UNSPECIFIED|
|resolution|USER_ACTION|
|resolution|PENDING_PROCESSING|
|severity|SEVERITY_UNSPECIFIED|
|severity|ERROR|
|severity|WARNING|
|severity|INFO|

<h2 id="tocS_ListProductCertificationsResponse">ListProductCertificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistproductcertificationsresponse"></a>
<a id="schema_ListProductCertificationsResponse"></a>
<a id="tocSlistproductcertificationsresponse"></a>
<a id="tocslistproductcertificationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "productCertifications": [
    {
      "brand": "string",
      "certification": [
        {
          "authority": "string",
          "link": "string",
          "logo": "string",
          "name": "string",
          "validUntil": "string",
          "value": "string"
        }
      ],
      "countryCode": [
        "string"
      ],
      "destinationStatuses": [
        {
          "destination": "string",
          "status": "UNKNOWN"
        }
      ],
      "issues": [
        {
          "attribute": "string",
          "description": "string",
          "destination": "string",
          "resolution": "RESOLUTION_UNSPECIFIED",
          "severity": "SEVERITY_UNSPECIFIED",
          "timestamp": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "mpn": [
        "string"
      ],
      "name": "string",
      "productCode": [
        "string"
      ],
      "productType": [
        "string"
      ],
      "title": "string"
    }
  ]
}
```

Response for ListProductCertifications method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|productCertifications|[[ProductCertification](#schemaproductcertification)]|false|none|The product certifications from the specified certification body.|

<h2 id="tocS_ListProductsResponse">ListProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistproductsresponse"></a>
<a id="schema_ListProductsResponse"></a>
<a id="tocSlistproductsresponse"></a>
<a id="tocslistproductsresponse"></a>

```json
{
  "nextPageToken": "string",
  "products": [
    {
      "attributes": {
        "additionalImageLink": [
          {
            "imageUrl": "string",
            "status": "STATUS_UNSPECIFIED",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "ageGroup": "string",
        "brand": "string",
        "capacity": {
          "unit": "string",
          "value": "string"
        },
        "color": "string",
        "count": {
          "unit": "string",
          "value": "string"
        },
        "description": "string",
        "disclosureDate": "string",
        "excludedDestination": [
          "string"
        ],
        "featureDescription": [
          {
            "headline": "string",
            "image": {
              "imageUrl": "string",
              "status": "STATUS_UNSPECIFIED",
              "type": "TYPE_UNSPECIFIED"
            },
            "text": "string"
          }
        ],
        "flavor": "string",
        "format": "string",
        "gender": "string",
        "grocery": {
          "activeIngredients": "string",
          "alcoholByVolume": 0,
          "allergens": "string",
          "derivedNutritionClaim": [
            "string"
          ],
          "directions": "string",
          "indications": "string",
          "ingredients": "string",
          "nutritionClaim": [
            "string"
          ],
          "storageInstructions": "string"
        },
        "gtin": [
          "string"
        ],
        "imageLink": {
          "imageUrl": "string",
          "status": "STATUS_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED"
        },
        "includedDestination": [
          "string"
        ],
        "itemGroupId": "string",
        "material": "string",
        "mpn": "string",
        "nutrition": {
          "addedSugars": {
            "amount": 0,
            "unit": "string"
          },
          "addedSugarsDailyPercentage": 0,
          "calcium": {
            "amount": 0,
            "unit": "string"
          },
          "calciumDailyPercentage": 0,
          "cholesterol": {
            "amount": 0,
            "unit": "string"
          },
          "cholesterolDailyPercentage": 0,
          "dietaryFiber": {
            "amount": 0,
            "unit": "string"
          },
          "dietaryFiberDailyPercentage": 0,
          "energy": {
            "amount": 0,
            "unit": "string"
          },
          "energyFromFat": {
            "amount": 0,
            "unit": "string"
          },
          "folateDailyPercentage": 0,
          "folateFolicAcid": {
            "amount": 0,
            "unit": "string"
          },
          "folateMcgDfe": 0,
          "iron": {
            "amount": 0,
            "unit": "string"
          },
          "ironDailyPercentage": 0,
          "monounsaturatedFat": {
            "amount": 0,
            "unit": "string"
          },
          "nutritionFactMeasure": "string",
          "polyols": {
            "amount": 0,
            "unit": "string"
          },
          "polyunsaturatedFat": {
            "amount": 0,
            "unit": "string"
          },
          "potassium": {
            "amount": 0,
            "unit": "string"
          },
          "potassiumDailyPercentage": 0,
          "preparedSizeDescription": "string",
          "protein": {
            "amount": 0,
            "unit": "string"
          },
          "proteinDailyPercentage": 0,
          "saturatedFat": {
            "amount": 0,
            "unit": "string"
          },
          "saturatedFatDailyPercentage": 0,
          "servingSizeDescription": "string",
          "servingSizeMeasure": {
            "amount": 0,
            "unit": "string"
          },
          "servingsPerContainer": "string",
          "sodium": {
            "amount": 0,
            "unit": "string"
          },
          "sodiumDailyPercentage": 0,
          "starch": {
            "amount": 0,
            "unit": "string"
          },
          "totalCarbohydrate": {
            "amount": 0,
            "unit": "string"
          },
          "totalCarbohydrateDailyPercentage": 0,
          "totalFat": {
            "amount": 0,
            "unit": "string"
          },
          "totalFatDailyPercentage": 0,
          "totalSugars": {
            "amount": 0,
            "unit": "string"
          },
          "totalSugarsDailyPercentage": 0,
          "transFat": {
            "amount": 0,
            "unit": "string"
          },
          "transFatDailyPercentage": 0,
          "vitaminD": {
            "amount": 0,
            "unit": "string"
          },
          "vitaminDDailyPercentage": 0,
          "voluntaryNutritionFact": [
            {
              "dailyPercentage": 0,
              "name": "string",
              "value": {
                "amount": 0,
                "unit": "string"
              }
            }
          ]
        },
        "pattern": "string",
        "productDetail": [
          {
            "attributeName": "string",
            "attributeValue": "string",
            "sectionName": "string"
          }
        ],
        "productHighlight": [
          "string"
        ],
        "productLine": "string",
        "productName": "string",
        "productPageUrl": "string",
        "productType": [
          "string"
        ],
        "releaseDate": "string",
        "richProductContent": [
          "string"
        ],
        "scent": "string",
        "size": "string",
        "sizeSystem": "string",
        "sizeType": [
          "string"
        ],
        "suggestedRetailPrice": {
          "amount": "string",
          "currency": "string"
        },
        "targetClientId": "string",
        "theme": "string",
        "title": "string",
        "videoLink": [
          "string"
        ]
      },
      "contentLanguage": "string",
      "destinationStatuses": [
        {
          "destination": "string",
          "status": "UNKNOWN"
        }
      ],
      "issues": [
        {
          "attribute": "string",
          "description": "string",
          "destination": "string",
          "resolution": "RESOLUTION_UNSPECIFIED",
          "severity": "SEVERITY_UNSPECIFIED",
          "timestamp": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "name": "string",
      "parent": "string",
      "productId": "string",
      "targetCountry": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token for the retrieval of the next page of product statuses.|
|products|[[Product](#schemaproduct)]|false|none|List of the products.|

<h2 id="tocS_Nutrition">Nutrition</h2>
<!-- backwards compatibility -->
<a id="schemanutrition"></a>
<a id="schema_Nutrition"></a>
<a id="tocSnutrition"></a>
<a id="tocsnutrition"></a>

```json
{
  "addedSugars": {
    "amount": 0,
    "unit": "string"
  },
  "addedSugarsDailyPercentage": 0,
  "calcium": {
    "amount": 0,
    "unit": "string"
  },
  "calciumDailyPercentage": 0,
  "cholesterol": {
    "amount": 0,
    "unit": "string"
  },
  "cholesterolDailyPercentage": 0,
  "dietaryFiber": {
    "amount": 0,
    "unit": "string"
  },
  "dietaryFiberDailyPercentage": 0,
  "energy": {
    "amount": 0,
    "unit": "string"
  },
  "energyFromFat": {
    "amount": 0,
    "unit": "string"
  },
  "folateDailyPercentage": 0,
  "folateFolicAcid": {
    "amount": 0,
    "unit": "string"
  },
  "folateMcgDfe": 0,
  "iron": {
    "amount": 0,
    "unit": "string"
  },
  "ironDailyPercentage": 0,
  "monounsaturatedFat": {
    "amount": 0,
    "unit": "string"
  },
  "nutritionFactMeasure": "string",
  "polyols": {
    "amount": 0,
    "unit": "string"
  },
  "polyunsaturatedFat": {
    "amount": 0,
    "unit": "string"
  },
  "potassium": {
    "amount": 0,
    "unit": "string"
  },
  "potassiumDailyPercentage": 0,
  "preparedSizeDescription": "string",
  "protein": {
    "amount": 0,
    "unit": "string"
  },
  "proteinDailyPercentage": 0,
  "saturatedFat": {
    "amount": 0,
    "unit": "string"
  },
  "saturatedFatDailyPercentage": 0,
  "servingSizeDescription": "string",
  "servingSizeMeasure": {
    "amount": 0,
    "unit": "string"
  },
  "servingsPerContainer": "string",
  "sodium": {
    "amount": 0,
    "unit": "string"
  },
  "sodiumDailyPercentage": 0,
  "starch": {
    "amount": 0,
    "unit": "string"
  },
  "totalCarbohydrate": {
    "amount": 0,
    "unit": "string"
  },
  "totalCarbohydrateDailyPercentage": 0,
  "totalFat": {
    "amount": 0,
    "unit": "string"
  },
  "totalFatDailyPercentage": 0,
  "totalSugars": {
    "amount": 0,
    "unit": "string"
  },
  "totalSugarsDailyPercentage": 0,
  "transFat": {
    "amount": 0,
    "unit": "string"
  },
  "transFatDailyPercentage": 0,
  "vitaminD": {
    "amount": 0,
    "unit": "string"
  },
  "vitaminDDailyPercentage": 0,
  "voluntaryNutritionFact": [
    {
      "dailyPercentage": 0,
      "name": "string",
      "value": {
        "amount": 0,
        "unit": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedSugars|[FloatUnit](#schemafloatunit)|false|none|Added sugars.|
|addedSugarsDailyPercentage|number(double)|false|none|Added sugars daily percentage.|
|calcium|[FloatUnit](#schemafloatunit)|false|none|Calcium.|
|calciumDailyPercentage|number(double)|false|none|Calcium daily percentage.|
|cholesterol|[FloatUnit](#schemafloatunit)|false|none|Cholesterol.|
|cholesterolDailyPercentage|number(double)|false|none|Cholesterol daily percentage.|
|dietaryFiber|[FloatUnit](#schemafloatunit)|false|none|Dietary fiber.|
|dietaryFiberDailyPercentage|number(double)|false|none|Dietary fiber daily percentage.|
|energy|[FloatUnit](#schemafloatunit)|false|none|Mandatory Nutrition Facts. Energy.|
|energyFromFat|[FloatUnit](#schemafloatunit)|false|none|Energy from fat.|
|folateDailyPercentage|number(double)|false|none|Folate daily percentage.|
|folateFolicAcid|[FloatUnit](#schemafloatunit)|false|none|Folate folic acid.|
|folateMcgDfe|number(double)|false|none|Folate mcg DFE.|
|iron|[FloatUnit](#schemafloatunit)|false|none|Iron.|
|ironDailyPercentage|number(double)|false|none|Iron daily percentage.|
|monounsaturatedFat|[FloatUnit](#schemafloatunit)|false|none|Monounsaturated fat.|
|nutritionFactMeasure|string|false|none|Nutrition fact measure.|
|polyols|[FloatUnit](#schemafloatunit)|false|none|Polyols.|
|polyunsaturatedFat|[FloatUnit](#schemafloatunit)|false|none|Polyunsaturated fat.|
|potassium|[FloatUnit](#schemafloatunit)|false|none|Potassium.|
|potassiumDailyPercentage|number(double)|false|none|Potassium daily percentage.|
|preparedSizeDescription|string|false|none|Prepared size description.|
|protein|[FloatUnit](#schemafloatunit)|false|none|Protein.|
|proteinDailyPercentage|number(double)|false|none|Protein daily percentage.|
|saturatedFat|[FloatUnit](#schemafloatunit)|false|none|Saturated fat.|
|saturatedFatDailyPercentage|number(double)|false|none|Saturated fat daily percentage.|
|servingSizeDescription|string|false|none|Food Serving Size. Serving size description.|
|servingSizeMeasure|[FloatUnit](#schemafloatunit)|false|none|Serving size measure.|
|servingsPerContainer|string|false|none|Servings per container.|
|sodium|[FloatUnit](#schemafloatunit)|false|none|Sodium.|
|sodiumDailyPercentage|number(double)|false|none|Sodium daily percentage.|
|starch|[FloatUnit](#schemafloatunit)|false|none|Starch.|
|totalCarbohydrate|[FloatUnit](#schemafloatunit)|false|none|Total carbohydrate.|
|totalCarbohydrateDailyPercentage|number(double)|false|none|Total carbohydrate daily percentage.|
|totalFat|[FloatUnit](#schemafloatunit)|false|none|Total fat.|
|totalFatDailyPercentage|number(double)|false|none|Total fat daily percentage.|
|totalSugars|[FloatUnit](#schemafloatunit)|false|none|Total sugars.|
|totalSugarsDailyPercentage|number(double)|false|none|Total sugars daily percentage.|
|transFat|[FloatUnit](#schemafloatunit)|false|none|Trans fat.|
|transFatDailyPercentage|number(double)|false|none|Trans fat daily percentage.|
|vitaminD|[FloatUnit](#schemafloatunit)|false|none|Vitamin D.|
|vitaminDDailyPercentage|number(double)|false|none|Vitamin D daily percentage.|
|voluntaryNutritionFact|[[VoluntaryNutritionFact](#schemavoluntarynutritionfact)]|false|none|Voluntary nutrition fact.|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "amount": "string",
  "currency": "string"
}
```

A price.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|The numeric value of the price.|
|currency|string|false|none|The currency in which the price is denoted.|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "attributes": {
    "additionalImageLink": [
      {
        "imageUrl": "string",
        "status": "STATUS_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "ageGroup": "string",
    "brand": "string",
    "capacity": {
      "unit": "string",
      "value": "string"
    },
    "color": "string",
    "count": {
      "unit": "string",
      "value": "string"
    },
    "description": "string",
    "disclosureDate": "string",
    "excludedDestination": [
      "string"
    ],
    "featureDescription": [
      {
        "headline": "string",
        "image": {
          "imageUrl": "string",
          "status": "STATUS_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED"
        },
        "text": "string"
      }
    ],
    "flavor": "string",
    "format": "string",
    "gender": "string",
    "grocery": {
      "activeIngredients": "string",
      "alcoholByVolume": 0,
      "allergens": "string",
      "derivedNutritionClaim": [
        "string"
      ],
      "directions": "string",
      "indications": "string",
      "ingredients": "string",
      "nutritionClaim": [
        "string"
      ],
      "storageInstructions": "string"
    },
    "gtin": [
      "string"
    ],
    "imageLink": {
      "imageUrl": "string",
      "status": "STATUS_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED"
    },
    "includedDestination": [
      "string"
    ],
    "itemGroupId": "string",
    "material": "string",
    "mpn": "string",
    "nutrition": {
      "addedSugars": {
        "amount": 0,
        "unit": "string"
      },
      "addedSugarsDailyPercentage": 0,
      "calcium": {
        "amount": 0,
        "unit": "string"
      },
      "calciumDailyPercentage": 0,
      "cholesterol": {
        "amount": 0,
        "unit": "string"
      },
      "cholesterolDailyPercentage": 0,
      "dietaryFiber": {
        "amount": 0,
        "unit": "string"
      },
      "dietaryFiberDailyPercentage": 0,
      "energy": {
        "amount": 0,
        "unit": "string"
      },
      "energyFromFat": {
        "amount": 0,
        "unit": "string"
      },
      "folateDailyPercentage": 0,
      "folateFolicAcid": {
        "amount": 0,
        "unit": "string"
      },
      "folateMcgDfe": 0,
      "iron": {
        "amount": 0,
        "unit": "string"
      },
      "ironDailyPercentage": 0,
      "monounsaturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "nutritionFactMeasure": "string",
      "polyols": {
        "amount": 0,
        "unit": "string"
      },
      "polyunsaturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "potassium": {
        "amount": 0,
        "unit": "string"
      },
      "potassiumDailyPercentage": 0,
      "preparedSizeDescription": "string",
      "protein": {
        "amount": 0,
        "unit": "string"
      },
      "proteinDailyPercentage": 0,
      "saturatedFat": {
        "amount": 0,
        "unit": "string"
      },
      "saturatedFatDailyPercentage": 0,
      "servingSizeDescription": "string",
      "servingSizeMeasure": {
        "amount": 0,
        "unit": "string"
      },
      "servingsPerContainer": "string",
      "sodium": {
        "amount": 0,
        "unit": "string"
      },
      "sodiumDailyPercentage": 0,
      "starch": {
        "amount": 0,
        "unit": "string"
      },
      "totalCarbohydrate": {
        "amount": 0,
        "unit": "string"
      },
      "totalCarbohydrateDailyPercentage": 0,
      "totalFat": {
        "amount": 0,
        "unit": "string"
      },
      "totalFatDailyPercentage": 0,
      "totalSugars": {
        "amount": 0,
        "unit": "string"
      },
      "totalSugarsDailyPercentage": 0,
      "transFat": {
        "amount": 0,
        "unit": "string"
      },
      "transFatDailyPercentage": 0,
      "vitaminD": {
        "amount": 0,
        "unit": "string"
      },
      "vitaminDDailyPercentage": 0,
      "voluntaryNutritionFact": [
        {
          "dailyPercentage": 0,
          "name": "string",
          "value": {
            "amount": 0,
            "unit": "string"
          }
        }
      ]
    },
    "pattern": "string",
    "productDetail": [
      {
        "attributeName": "string",
        "attributeValue": "string",
        "sectionName": "string"
      }
    ],
    "productHighlight": [
      "string"
    ],
    "productLine": "string",
    "productName": "string",
    "productPageUrl": "string",
    "productType": [
      "string"
    ],
    "releaseDate": "string",
    "richProductContent": [
      "string"
    ],
    "scent": "string",
    "size": "string",
    "sizeSystem": "string",
    "sizeType": [
      "string"
    ],
    "suggestedRetailPrice": {
      "amount": "string",
      "currency": "string"
    },
    "targetClientId": "string",
    "theme": "string",
    "title": "string",
    "videoLink": [
      "string"
    ]
  },
  "contentLanguage": "string",
  "destinationStatuses": [
    {
      "destination": "string",
      "status": "UNKNOWN"
    }
  ],
  "issues": [
    {
      "attribute": "string",
      "description": "string",
      "destination": "string",
      "resolution": "RESOLUTION_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "timestamp": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "name": "string",
  "parent": "string",
  "productId": "string",
  "targetCountry": "string"
}
```

Product data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[Attributes](#schemaattributes)|false|none|Attributes of the product uploaded to the Manufacturer Center. Manually edited attributes are taken into account.|
|contentLanguage|string|false|none|The content language of the product as a two-letter ISO 639-1 language code (for example, en).|
|destinationStatuses|[[DestinationStatus](#schemadestinationstatus)]|false|none|The status of the destinations.|
|issues|[[Issue](#schemaissue)]|false|none|A server-generated list of issues associated with the product.|
|name|string|false|none|Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.|
|parent|string|false|none|Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.|
|productId|string|false|none|The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.|
|targetCountry|string|false|none|The target country of the product as a CLDR territory code (for example, US).|

<h2 id="tocS_ProductCertification">ProductCertification</h2>
<!-- backwards compatibility -->
<a id="schemaproductcertification"></a>
<a id="schema_ProductCertification"></a>
<a id="tocSproductcertification"></a>
<a id="tocsproductcertification"></a>

```json
{
  "brand": "string",
  "certification": [
    {
      "authority": "string",
      "link": "string",
      "logo": "string",
      "name": "string",
      "validUntil": "string",
      "value": "string"
    }
  ],
  "countryCode": [
    "string"
  ],
  "destinationStatuses": [
    {
      "destination": "string",
      "status": "UNKNOWN"
    }
  ],
  "issues": [
    {
      "attribute": "string",
      "description": "string",
      "destination": "string",
      "resolution": "RESOLUTION_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "timestamp": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "mpn": [
    "string"
  ],
  "name": "string",
  "productCode": [
    "string"
  ],
  "productType": [
    "string"
  ],
  "title": "string"
}
```

Product certification data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|false|none|Required. This is the product's brand name. The brand is used to help identify your product.|
|certification|[[Certification](#schemacertification)]|false|none|Required. A list of certifications to link to the described product.|
|countryCode|[string]|false|none|Optional. A 2-letter country code (ISO 3166-1 Alpha 2).|
|destinationStatuses|[[DestinationStatus](#schemadestinationstatus)]|false|read-only|Output only. The statuses of the destinations.|
|issues|[[Issue](#schemaissue)]|false|read-only|Output only. A server-generated list of issues associated with the product.|
|mpn|[string]|false|none|Optional. These are the Manufacturer Part Numbers (MPN). MPNs are used to uniquely identify a specific product among all products from the same manufacturer|
|name|string|false|none|Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637.|
|productCode|[string]|false|none|Optional. Another name for GTIN.|
|productType|[string]|false|none|Optional. These are your own product categorization system in your product data.|
|title|string|false|none|Required. This is to clearly identify the product you are certifying.|

<h2 id="tocS_ProductDetail">ProductDetail</h2>
<!-- backwards compatibility -->
<a id="schemaproductdetail"></a>
<a id="schema_ProductDetail"></a>
<a id="tocSproductdetail"></a>
<a id="tocsproductdetail"></a>

```json
{
  "attributeName": "string",
  "attributeValue": "string",
  "sectionName": "string"
}
```

A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|string|false|none|The name of the attribute.|
|attributeValue|string|false|none|The value of the attribute.|
|sectionName|string|false|none|A short section name that can be reused between multiple product details.|

<h2 id="tocS_VoluntaryNutritionFact">VoluntaryNutritionFact</h2>
<!-- backwards compatibility -->
<a id="schemavoluntarynutritionfact"></a>
<a id="schema_VoluntaryNutritionFact"></a>
<a id="tocSvoluntarynutritionfact"></a>
<a id="tocsvoluntarynutritionfact"></a>

```json
{
  "dailyPercentage": 0,
  "name": "string",
  "value": {
    "amount": 0,
    "unit": "string"
  }
}
```

Voluntary Nutrition Facts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyPercentage|number(double)|false|none|Daily percentage.|
|name|string|false|none|Name.|
|value|[FloatUnit](#schemafloatunit)|false|none|Value.|
