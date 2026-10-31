<h1 id="recommendations-ai-beta">Recommendations AI (Beta) v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Note that we now highly recommend new customers to use Retail API, which incorporates the GA version of the Recommendations AI funtionalities. To enable Retail API, please visit https://console.cloud.google.com/apis/library/retail.googleapis.com. The Recommendations AI service enables customers to build end-to-end personalized recommendation systems without requiring a high level of expertise in machine learning, recommendation system, or Google Cloud.

Base URLs:

* <a href="https://recommendationengine.googleapis.com/">https://recommendationengine.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/recommendations-ai/docs">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="recommendations-ai-beta-projects">projects</h1>

## recommendationengine.projects.locations.catalogs.operations.get

<a id="opIdrecommendationengine.projects.locations.catalogs.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="recommendationengineprojectslocationscatalogsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.delete

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Unregister an apiKey from using for predict method.

<h3 id="recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The API key to unregister including full resource path. `projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/predictionApiKeyRegistrations/`|
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

<h3 id="recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.catalogItems.patch

<a id="opIdrecommendationengine.projects.locations.catalogs.catalogItems.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryHierarchies": [
      {
        "categories": [
          "string"
        ]
      }
    ],
    "description": "string",
    "id": "string",
    "itemAttributes": {
      "categoricalFeatures": {
        "property1": {
          "value": [
            "string"
          ]
        },
        "property2": {
          "value": [
            "string"
          ]
        }
      },
      "numericalFeatures": {
        "property1": {
          "value": [
            0
          ]
        },
        "property2": {
          "value": [
            0
          ]
        }
      }
    },
    "itemGroupId": "string",
    "languageCode": "string",
    "productMetadata": {
      "availableQuantity": "string",
      "canonicalProductUri": "string",
      "costs": {
        "property1": 0,
        "property2": 0
      },
      "currencyCode": "string",
      "exactPrice": {
        "displayPrice": 0,
        "originalPrice": 0
      },
      "images": [
        {
          "height": 0,
          "uri": "string",
          "width": 0
        }
      ],
      "priceRange": {
        "max": 0,
        "min": 0
      },
      "stockState": "STOCK_STATE_UNSPECIFIED"
    },
    "tags": [
      "string"
    ],
    "title": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates a catalog item. Partial updating is supported. Non-existing items will be created.

> Body parameter

```json
{
  "categoryHierarchies": [
    {
      "categories": [
        "string"
      ]
    }
  ],
  "description": "string",
  "id": "string",
  "itemAttributes": {
    "categoricalFeatures": {
      "property1": {
        "value": [
          "string"
        ]
      },
      "property2": {
        "value": [
          "string"
        ]
      }
    },
    "numericalFeatures": {
      "property1": {
        "value": [
          0
        ]
      },
      "property2": {
        "value": [
          0
        ]
      }
    }
  },
  "itemGroupId": "string",
  "languageCode": "string",
  "productMetadata": {
    "availableQuantity": "string",
    "canonicalProductUri": "string",
    "costs": {
      "property1": 0,
      "property2": 0
    },
    "currencyCode": "string",
    "exactPrice": {
      "displayPrice": 0,
      "originalPrice": 0
    },
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "priceRange": {
      "max": 0,
      "min": 0
    },
    "stockState": "STOCK_STATE_UNSPECIFIED"
  },
  "tags": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogscatalogitemspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Full resource name of catalog item, such as `projects/*/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.|
|updateMask|query|string|false|Optional. Indicates which fields in the provided 'item' to update. If not set, will by default update all fields.|
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
|body|body|[GoogleCloudRecommendationengineV1beta1CatalogItem](#schemagooglecloudrecommendationenginev1beta1catalogitem)|false|none|
|» categoryHierarchies|body|[[GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy](#schemagooglecloudrecommendationenginev1beta1catalogitemcategoryhierarchy)]|false|Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] } ]|
|» description|body|string|false|Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.|
|» id|body|string|false|Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.|
|» itemAttributes|body|[GoogleCloudRecommendationengineV1beta1FeatureMap](#schemagooglecloudrecommendationenginev1beta1featuremap)|false|Optional. Highly encouraged. Extra catalog item attributes to be included in the recommendation model. For example, for retail products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the item attributes here.|
|» itemGroupId|body|string|false|Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).|
|» languageCode|body|string|false|Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.|
|» productMetadata|body|[GoogleCloudRecommendationengineV1beta1ProductCatalogItem](#schemagooglecloudrecommendationenginev1beta1productcatalogitem)|false|Optional. Metadata specific to retail products.|
|» tags|body|[string]|false|Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.|
|» title|body|string|false|Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.|

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
  "categoryHierarchies": [
    {
      "categories": [
        "string"
      ]
    }
  ],
  "description": "string",
  "id": "string",
  "itemAttributes": {
    "categoricalFeatures": {
      "property1": {
        "value": [
          "string"
        ]
      },
      "property2": {
        "value": [
          "string"
        ]
      }
    },
    "numericalFeatures": {
      "property1": {
        "value": [
          0
        ]
      },
      "property2": {
        "value": [
          0
        ]
      }
    }
  },
  "itemGroupId": "string",
  "languageCode": "string",
  "productMetadata": {
    "availableQuantity": "string",
    "canonicalProductUri": "string",
    "costs": {
      "property1": 0,
      "property2": 0
    },
    "currencyCode": "string",
    "exactPrice": {
      "displayPrice": 0,
      "originalPrice": 0
    },
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "priceRange": {
      "max": 0,
      "min": 0
    },
    "stockState": "STOCK_STATE_UNSPECIFIED"
  },
  "tags": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogscatalogitemspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1CatalogItem](#schemagooglecloudrecommendationenginev1beta1catalogitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.operations.list

<a id="opIdrecommendationengine.projects.locations.catalogs.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="recommendationengineprojectslocationscatalogsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="recommendationengineprojectslocationscatalogsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.placements.predict

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.placements.predict"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:predict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dryRun": true,
    "filter": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "pageSize": 0,
    "pageToken": "string",
    "params": {
      "property1": null,
      "property2": null
    },
    "userEvent": {
      "eventDetail": {
        "eventAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "experimentIds": [
          "string"
        ],
        "pageViewId": "string",
        "recommendationToken": "string",
        "referrerUri": "string",
        "uri": "string"
      },
      "eventSource": "EVENT_SOURCE_UNSPECIFIED",
      "eventTime": "string",
      "eventType": "string",
      "productEventDetail": {
        "cartId": "string",
        "listId": "string",
        "pageCategories": [
          {
            "categories": [
              "string"
            ]
          }
        ],
        "productDetails": [
          {
            "availableQuantity": 0,
            "currencyCode": "string",
            "displayPrice": 0,
            "id": "string",
            "itemAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "originalPrice": 0,
            "quantity": 0,
            "stockState": "STOCK_STATE_UNSPECIFIED"
          }
        ],
        "purchaseTransaction": {
          "costs": {
            "property1": 0,
            "property2": 0
          },
          "currencyCode": "string",
          "id": "string",
          "revenue": 0,
          "taxes": {
            "property1": 0,
            "property2": 0
          }
        },
        "searchQuery": "string"
      },
      "userInfo": {
        "directUserRequest": true,
        "ipAddress": "string",
        "userAgent": "string",
        "userId": "string",
        "visitorId": "string"
      }
    }
  }'
```

`POST /v1beta1/{name}:predict`

Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).

> Body parameter

```json
{
  "dryRun": true,
  "filter": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pageSize": 0,
  "pageToken": "string",
  "params": {
    "property1": null,
    "property2": null
  },
  "userEvent": {
    "eventDetail": {
      "eventAttributes": {
        "categoricalFeatures": {
          "property1": {
            "value": [
              "string"
            ]
          },
          "property2": {
            "value": [
              "string"
            ]
          }
        },
        "numericalFeatures": {
          "property1": {
            "value": [
              0
            ]
          },
          "property2": {
            "value": [
              0
            ]
          }
        }
      },
      "experimentIds": [
        "string"
      ],
      "pageViewId": "string",
      "recommendationToken": "string",
      "referrerUri": "string",
      "uri": "string"
    },
    "eventSource": "EVENT_SOURCE_UNSPECIFIED",
    "eventTime": "string",
    "eventType": "string",
    "productEventDetail": {
      "cartId": "string",
      "listId": "string",
      "pageCategories": [
        {
          "categories": [
            "string"
          ]
        }
      ],
      "productDetails": [
        {
          "availableQuantity": 0,
          "currencyCode": "string",
          "displayPrice": 0,
          "id": "string",
          "itemAttributes": {
            "categoricalFeatures": {
              "property1": {
                "value": [
                  "string"
                ]
              },
              "property2": {
                "value": [
                  "string"
                ]
              }
            },
            "numericalFeatures": {
              "property1": {
                "value": [
                  0
                ]
              },
              "property2": {
                "value": [
                  0
                ]
              }
            }
          },
          "originalPrice": 0,
          "quantity": 0,
          "stockState": "STOCK_STATE_UNSPECIFIED"
        }
      ],
      "purchaseTransaction": {
        "costs": {
          "property1": 0,
          "property2": 0
        },
        "currencyCode": "string",
        "id": "string",
        "revenue": 0,
        "taxes": {
          "property1": 0,
          "property2": 0
        }
      },
      "searchQuery": "string"
    },
    "userInfo": {
      "directUserRequest": true,
      "ipAddress": "string",
      "userAgent": "string",
      "userId": "string",
      "visitorId": "string"
    }
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresplacementspredict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
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
|body|body|[GoogleCloudRecommendationengineV1beta1PredictRequest](#schemagooglecloudrecommendationenginev1beta1predictrequest)|false|none|
|» dryRun|body|boolean|false|Optional. Use dryRun mode for this prediction query. If set to true, a fake model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.|
|» filter|body|string|false|Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB. * filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular items to be returned instead, set `strictFiltering` to false in `PredictRequest.params`.|
|» labels|body|object|false|Optional. The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels.|
|» » **additionalProperties**|body|string|false|none|
|» pageSize|body|integer(int32)|false|Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.|
|» pageToken|body|string|false|Optional. The previous PredictResponse.next_page_token.|
|» params|body|object|false|Optional. Additional domain specific parameters for the predictions. Allowed values: * `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response. * `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular items instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request level control and adjust prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request level control and adjust prediction results based on product category.|
|» » **additionalProperties**|body|object|false|none|
|» userEvent|body|[GoogleCloudRecommendationengineV1beta1UserEvent](#schemagooglecloudrecommendationenginev1beta1userevent)|false|Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserInfo.visitor_id or UserInfo.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserInfo.visitor_id to a random unique ID and leave UserInfo.user_id unset.|

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
  "dryRun": true,
  "itemsMissingInCatalog": [
    "string"
  ],
  "metadata": {
    "property1": null,
    "property2": null
  },
  "nextPageToken": "string",
  "recommendationToken": "string",
  "results": [
    {
      "id": "string",
      "itemMetadata": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresplacementspredict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1PredictResponse](#schemagooglecloudrecommendationenginev1beta1predictresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.catalogItems.list

<a id="opIdrecommendationengine.projects.locations.catalogs.catalogItems.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/catalogItems \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/catalogItems`

Gets a list of catalog items.

<h3 id="recommendationengineprojectslocationscatalogscatalogitemslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`.|
|filter|query|string|false|Optional. Use of this field is not supported by version v1beta1.|
|pageSize|query|integer|false|Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.|
|pageToken|query|string|false|Optional. The previous ListCatalogItemsResponse.next_page_token.|
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
  "catalogItems": [
    {
      "categoryHierarchies": [
        {
          "categories": [
            "string"
          ]
        }
      ],
      "description": "string",
      "id": "string",
      "itemAttributes": {
        "categoricalFeatures": {
          "property1": {
            "value": [
              "string"
            ]
          },
          "property2": {
            "value": [
              "string"
            ]
          }
        },
        "numericalFeatures": {
          "property1": {
            "value": [
              0
            ]
          },
          "property2": {
            "value": [
              0
            ]
          }
        }
      },
      "itemGroupId": "string",
      "languageCode": "string",
      "productMetadata": {
        "availableQuantity": "string",
        "canonicalProductUri": "string",
        "costs": {
          "property1": 0,
          "property2": 0
        },
        "currencyCode": "string",
        "exactPrice": {
          "displayPrice": 0,
          "originalPrice": 0
        },
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "priceRange": {
          "max": 0,
          "min": 0
        },
        "stockState": "STOCK_STATE_UNSPECIFIED"
      },
      "tags": [
        "string"
      ],
      "title": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogscatalogitemslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse](#schemagooglecloudrecommendationenginev1beta1listcatalogitemsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.catalogItems.create

<a id="opIdrecommendationengine.projects.locations.catalogs.catalogItems.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/catalogItems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categoryHierarchies": [
      {
        "categories": [
          "string"
        ]
      }
    ],
    "description": "string",
    "id": "string",
    "itemAttributes": {
      "categoricalFeatures": {
        "property1": {
          "value": [
            "string"
          ]
        },
        "property2": {
          "value": [
            "string"
          ]
        }
      },
      "numericalFeatures": {
        "property1": {
          "value": [
            0
          ]
        },
        "property2": {
          "value": [
            0
          ]
        }
      }
    },
    "itemGroupId": "string",
    "languageCode": "string",
    "productMetadata": {
      "availableQuantity": "string",
      "canonicalProductUri": "string",
      "costs": {
        "property1": 0,
        "property2": 0
      },
      "currencyCode": "string",
      "exactPrice": {
        "displayPrice": 0,
        "originalPrice": 0
      },
      "images": [
        {
          "height": 0,
          "uri": "string",
          "width": 0
        }
      ],
      "priceRange": {
        "max": 0,
        "min": 0
      },
      "stockState": "STOCK_STATE_UNSPECIFIED"
    },
    "tags": [
      "string"
    ],
    "title": "string"
  }'
```

`POST /v1beta1/{parent}/catalogItems`

Creates a catalog item.

> Body parameter

```json
{
  "categoryHierarchies": [
    {
      "categories": [
        "string"
      ]
    }
  ],
  "description": "string",
  "id": "string",
  "itemAttributes": {
    "categoricalFeatures": {
      "property1": {
        "value": [
          "string"
        ]
      },
      "property2": {
        "value": [
          "string"
        ]
      }
    },
    "numericalFeatures": {
      "property1": {
        "value": [
          0
        ]
      },
      "property2": {
        "value": [
          0
        ]
      }
    }
  },
  "itemGroupId": "string",
  "languageCode": "string",
  "productMetadata": {
    "availableQuantity": "string",
    "canonicalProductUri": "string",
    "costs": {
      "property1": 0,
      "property2": 0
    },
    "currencyCode": "string",
    "exactPrice": {
      "displayPrice": 0,
      "originalPrice": 0
    },
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "priceRange": {
      "max": 0,
      "min": 0
    },
    "stockState": "STOCK_STATE_UNSPECIFIED"
  },
  "tags": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogscatalogitemscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`.|
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
|body|body|[GoogleCloudRecommendationengineV1beta1CatalogItem](#schemagooglecloudrecommendationenginev1beta1catalogitem)|false|none|
|» categoryHierarchies|body|[[GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy](#schemagooglecloudrecommendationenginev1beta1catalogitemcategoryhierarchy)]|false|Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] } ]|
|» description|body|string|false|Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.|
|» id|body|string|false|Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.|
|» itemAttributes|body|[GoogleCloudRecommendationengineV1beta1FeatureMap](#schemagooglecloudrecommendationenginev1beta1featuremap)|false|Optional. Highly encouraged. Extra catalog item attributes to be included in the recommendation model. For example, for retail products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the item attributes here.|
|» itemGroupId|body|string|false|Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).|
|» languageCode|body|string|false|Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.|
|» productMetadata|body|[GoogleCloudRecommendationengineV1beta1ProductCatalogItem](#schemagooglecloudrecommendationenginev1beta1productcatalogitem)|false|Optional. Metadata specific to retail products.|
|» tags|body|[string]|false|Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.|
|» title|body|string|false|Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.|

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
  "categoryHierarchies": [
    {
      "categories": [
        "string"
      ]
    }
  ],
  "description": "string",
  "id": "string",
  "itemAttributes": {
    "categoricalFeatures": {
      "property1": {
        "value": [
          "string"
        ]
      },
      "property2": {
        "value": [
          "string"
        ]
      }
    },
    "numericalFeatures": {
      "property1": {
        "value": [
          0
        ]
      },
      "property2": {
        "value": [
          0
        ]
      }
    }
  },
  "itemGroupId": "string",
  "languageCode": "string",
  "productMetadata": {
    "availableQuantity": "string",
    "canonicalProductUri": "string",
    "costs": {
      "property1": 0,
      "property2": 0
    },
    "currencyCode": "string",
    "exactPrice": {
      "displayPrice": 0,
      "originalPrice": 0
    },
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "priceRange": {
      "max": 0,
      "min": 0
    },
    "stockState": "STOCK_STATE_UNSPECIFIED"
  },
  "tags": [
    "string"
  ],
  "title": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogscatalogitemscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1CatalogItem](#schemagooglecloudrecommendationenginev1beta1catalogitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.catalogItems.import

<a id="opIdrecommendationengine.projects.locations.catalogs.catalogItems.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/catalogItems:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "errorsConfig": {
      "gcsPrefix": "string"
    },
    "inputConfig": {
      "bigQuerySource": {
        "dataSchema": "string",
        "datasetId": "string",
        "gcsStagingDir": "string",
        "projectId": "string",
        "tableId": "string"
      },
      "catalogInlineSource": {
        "catalogItems": [
          {
            "categoryHierarchies": [
              {
                "categories": [
                  "string"
                ]
              }
            ],
            "description": "string",
            "id": "string",
            "itemAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "itemGroupId": "string",
            "languageCode": "string",
            "productMetadata": {
              "availableQuantity": "string",
              "canonicalProductUri": "string",
              "costs": {
                "property1": 0,
                "property2": 0
              },
              "currencyCode": "string",
              "exactPrice": {
                "displayPrice": 0,
                "originalPrice": 0
              },
              "images": [
                {
                  "height": 0,
                  "uri": "string",
                  "width": 0
                }
              ],
              "priceRange": {
                "max": 0,
                "min": 0
              },
              "stockState": "STOCK_STATE_UNSPECIFIED"
            },
            "tags": [
              "string"
            ],
            "title": "string"
          }
        ]
      },
      "gcsSource": {
        "inputUris": [
          "string"
        ],
        "jsonSchema": "string"
      },
      "userEventInlineSource": {
        "userEvents": [
          {
            "eventDetail": {
              "eventAttributes": {
                "categoricalFeatures": {
                  "property1": {
                    "value": [
                      "string"
                    ]
                  },
                  "property2": {
                    "value": [
                      "string"
                    ]
                  }
                },
                "numericalFeatures": {
                  "property1": {
                    "value": [
                      0
                    ]
                  },
                  "property2": {
                    "value": [
                      0
                    ]
                  }
                }
              },
              "experimentIds": [
                "string"
              ],
              "pageViewId": "string",
              "recommendationToken": "string",
              "referrerUri": "string",
              "uri": "string"
            },
            "eventSource": "EVENT_SOURCE_UNSPECIFIED",
            "eventTime": "string",
            "eventType": "string",
            "productEventDetail": {
              "cartId": "string",
              "listId": "string",
              "pageCategories": [
                {
                  "categories": [
                    "string"
                  ]
                }
              ],
              "productDetails": [
                {
                  "availableQuantity": 0,
                  "currencyCode": "string",
                  "displayPrice": 0,
                  "id": "string",
                  "itemAttributes": {
                    "categoricalFeatures": {
                      "property1": {
                        "value": [
                          "string"
                        ]
                      },
                      "property2": {
                        "value": [
                          "string"
                        ]
                      }
                    },
                    "numericalFeatures": {
                      "property1": {
                        "value": [
                          0
                        ]
                      },
                      "property2": {
                        "value": [
                          0
                        ]
                      }
                    }
                  },
                  "originalPrice": 0,
                  "quantity": 0,
                  "stockState": "STOCK_STATE_UNSPECIFIED"
                }
              ],
              "purchaseTransaction": {
                "costs": {
                  "property1": 0,
                  "property2": 0
                },
                "currencyCode": "string",
                "id": "string",
                "revenue": 0,
                "taxes": {
                  "property1": 0,
                  "property2": 0
                }
              },
              "searchQuery": "string"
            },
            "userInfo": {
              "directUserRequest": true,
              "ipAddress": "string",
              "userAgent": "string",
              "userId": "string",
              "visitorId": "string"
            }
          }
        ]
      }
    },
    "requestId": "string",
    "updateMask": "string"
  }'
```

`POST /v1beta1/{parent}/catalogItems:import`

Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.

> Body parameter

```json
{
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "projectId": "string",
      "tableId": "string"
    },
    "catalogInlineSource": {
      "catalogItems": [
        {
          "categoryHierarchies": [
            {
              "categories": [
                "string"
              ]
            }
          ],
          "description": "string",
          "id": "string",
          "itemAttributes": {
            "categoricalFeatures": {
              "property1": {
                "value": [
                  "string"
                ]
              },
              "property2": {
                "value": [
                  "string"
                ]
              }
            },
            "numericalFeatures": {
              "property1": {
                "value": [
                  0
                ]
              },
              "property2": {
                "value": [
                  0
                ]
              }
            }
          },
          "itemGroupId": "string",
          "languageCode": "string",
          "productMetadata": {
            "availableQuantity": "string",
            "canonicalProductUri": "string",
            "costs": {
              "property1": 0,
              "property2": 0
            },
            "currencyCode": "string",
            "exactPrice": {
              "displayPrice": 0,
              "originalPrice": 0
            },
            "images": [
              {
                "height": 0,
                "uri": "string",
                "width": 0
              }
            ],
            "priceRange": {
              "max": 0,
              "min": 0
            },
            "stockState": "STOCK_STATE_UNSPECIFIED"
          },
          "tags": [
            "string"
          ],
          "title": "string"
        }
      ]
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ],
      "jsonSchema": "string"
    },
    "userEventInlineSource": {
      "userEvents": [
        {
          "eventDetail": {
            "eventAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "experimentIds": [
              "string"
            ],
            "pageViewId": "string",
            "recommendationToken": "string",
            "referrerUri": "string",
            "uri": "string"
          },
          "eventSource": "EVENT_SOURCE_UNSPECIFIED",
          "eventTime": "string",
          "eventType": "string",
          "productEventDetail": {
            "cartId": "string",
            "listId": "string",
            "pageCategories": [
              {
                "categories": [
                  "string"
                ]
              }
            ],
            "productDetails": [
              {
                "availableQuantity": 0,
                "currencyCode": "string",
                "displayPrice": 0,
                "id": "string",
                "itemAttributes": {
                  "categoricalFeatures": {
                    "property1": {
                      "value": [
                        "string"
                      ]
                    },
                    "property2": {
                      "value": [
                        "string"
                      ]
                    }
                  },
                  "numericalFeatures": {
                    "property1": {
                      "value": [
                        0
                      ]
                    },
                    "property2": {
                      "value": [
                        0
                      ]
                    }
                  }
                },
                "originalPrice": 0,
                "quantity": 0,
                "stockState": "STOCK_STATE_UNSPECIFIED"
              }
            ],
            "purchaseTransaction": {
              "costs": {
                "property1": 0,
                "property2": 0
              },
              "currencyCode": "string",
              "id": "string",
              "revenue": 0,
              "taxes": {
                "property1": 0,
                "property2": 0
              }
            },
            "searchQuery": "string"
          },
          "userInfo": {
            "directUserRequest": true,
            "ipAddress": "string",
            "userAgent": "string",
            "userId": "string",
            "visitorId": "string"
          }
        }
      ]
    }
  },
  "requestId": "string",
  "updateMask": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogscatalogitemsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. `projects/1234/locations/global/catalogs/default_catalog` If no updateMask is specified, requires catalogItems.create permission. If updateMask is specified, requires catalogItems.update permission.|
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
|body|body|[GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest](#schemagooglecloudrecommendationenginev1beta1importcatalogitemsrequest)|false|none|
|» errorsConfig|body|[GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#schemagooglecloudrecommendationenginev1beta1importerrorsconfig)|false|Optional. The desired location of errors incurred during the Import.|
|» inputConfig|body|[GoogleCloudRecommendationengineV1beta1InputConfig](#schemagooglecloudrecommendationenginev1beta1inputconfig)|false|Required. The desired input location of the data.|
|» requestId|body|string|false|Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response.|
|» updateMask|body|string(google-fieldmask)|false|Optional. Indicates which fields in the provided imported 'items' to update. If not set, will by default update all fields.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogscatalogitemsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.list

<a id="opIdrecommendationengine.projects.locations.catalogs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/catalogs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/catalogs`

Lists all the catalog configurations associated with the project.

<h3 id="recommendationengineprojectslocationscatalogslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The account resource name with an associated location.|
|pageSize|query|integer|false|Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page.|
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
  "catalogs": [
    {
      "catalogItemLevelConfig": {
        "eventItemLevel": "CATALOG_ITEM_LEVEL_UNSPECIFIED",
        "predictItemLevel": "CATALOG_ITEM_LEVEL_UNSPECIFIED"
      },
      "defaultEventStoreId": "string",
      "displayName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1ListCatalogsResponse](#schemagooglecloudrecommendationenginev1beta1listcatalogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.list

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/predictionApiKeyRegistrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/predictionApiKeyRegistrations`

List the registered apiKeys for use with predict method.

<h3 id="recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent placement resource name such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`|
|pageSize|query|integer|false|Optional. Maximum number of results to return per page. If unset, the service will choose a reasonable default.|
|pageToken|query|string|false|Optional. The previous `ListPredictionApiKeyRegistration.nextPageToken`.|
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
  "predictionApiKeyRegistrations": [
    {
      "apiKey": "string"
    }
  ]
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse](#schemagooglecloudrecommendationenginev1beta1listpredictionapikeyregistrationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.create

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/predictionApiKeyRegistrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "predictionApiKeyRegistration": {
      "apiKey": "string"
    }
  }'
```

`POST /v1beta1/{parent}/predictionApiKeyRegistrations`

Register an API key for use with predict method.

> Body parameter

```json
{
  "predictionApiKeyRegistration": {
    "apiKey": "string"
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource path. `projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store`.|
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
|body|body|[GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest](#schemagooglecloudrecommendationenginev1beta1createpredictionapikeyregistrationrequest)|false|none|
|» predictionApiKeyRegistration|body|[GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration](#schemagooglecloudrecommendationenginev1beta1predictionapikeyregistration)|false|Required. The prediction API key registration.|

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
  "apiKey": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration](#schemagooglecloudrecommendationenginev1beta1predictionapikeyregistration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.userEvents.list

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.userEvents.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userEvents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/userEvents`

Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent eventStore resource name, such as `projects/*/locations/*/catalogs/default_catalog/eventStores/default_event_store`.|
|filter|query|string|false|Optional. Filtering expression to specify restrictions over returned events. This is a sequence of terms, where each term applies some kind of a restriction to the returned user events. Use this expression to restrict results to a specific time range, or filter events by eventType. eg: eventTime > "2012-04-23T18:25:43.511Z" eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z" eventType=search We expect only 3 types of fields: * eventTime: this can be specified a maximum of 2 times, once with a less than operator and once with a greater than operator. The eventTime restrict should result in one contiguous valid eventTime range. * eventType: only 1 eventType restriction can be specified. * eventsMissingCatalogItems: specififying this will restrict results to events for which catalog items were not found in the catalog. The default behavior is to return only those events for which catalog items were found. Some examples of valid filters expressions: * Example 1: eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z" * Example 2: eventTime > "2012-04-23T18:25:43.511Z" eventType = detail-page-view * Example 3: eventsMissingCatalogItems eventType = search eventTime < "2018-04-23T18:30:43.511Z" * Example 4: eventTime > "2012-04-23T18:25:43.511Z" * Example 5: eventType = search * Example 6: eventsMissingCatalogItems|
|pageSize|query|integer|false|Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.|
|pageToken|query|string|false|Optional. The previous ListUserEventsResponse.next_page_token.|
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
  "userEvents": [
    {
      "eventDetail": {
        "eventAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "experimentIds": [
          "string"
        ],
        "pageViewId": "string",
        "recommendationToken": "string",
        "referrerUri": "string",
        "uri": "string"
      },
      "eventSource": "EVENT_SOURCE_UNSPECIFIED",
      "eventTime": "string",
      "eventType": "string",
      "productEventDetail": {
        "cartId": "string",
        "listId": "string",
        "pageCategories": [
          {
            "categories": [
              "string"
            ]
          }
        ],
        "productDetails": [
          {
            "availableQuantity": 0,
            "currencyCode": "string",
            "displayPrice": 0,
            "id": "string",
            "itemAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "originalPrice": 0,
            "quantity": 0,
            "stockState": "STOCK_STATE_UNSPECIFIED"
          }
        ],
        "purchaseTransaction": {
          "costs": {
            "property1": 0,
            "property2": 0
          },
          "currencyCode": "string",
          "id": "string",
          "revenue": 0,
          "taxes": {
            "property1": 0,
            "property2": 0
          }
        },
        "searchQuery": "string"
      },
      "userInfo": {
        "directUserRequest": true,
        "ipAddress": "string",
        "userAgent": "string",
        "userId": "string",
        "visitorId": "string"
      }
    }
  ]
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1ListUserEventsResponse](#schemagooglecloudrecommendationenginev1beta1listusereventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.userEvents.collect

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.userEvents.collect"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userEvents:collect \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/userEvents:collect`

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventscollect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent eventStore name, such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`.|
|ets|query|string|false|Optional. The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.|
|uri|query|string|false|Optional. The url including cgi-parameters but excluding the hash fragment. The URL must be truncated to 1.5K bytes to conservatively be under the 2K bytes. This is often more useful than the referer url, because many browsers only send the domain for 3rd party requests.|
|userEvent|query|string|false|Required. URL encoded UserEvent proto.|
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
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventscollect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleApiHttpBody](#schemagoogleapihttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.userEvents.import

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.userEvents.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userEvents:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "errorsConfig": {
      "gcsPrefix": "string"
    },
    "inputConfig": {
      "bigQuerySource": {
        "dataSchema": "string",
        "datasetId": "string",
        "gcsStagingDir": "string",
        "projectId": "string",
        "tableId": "string"
      },
      "catalogInlineSource": {
        "catalogItems": [
          {
            "categoryHierarchies": [
              {
                "categories": [
                  "string"
                ]
              }
            ],
            "description": "string",
            "id": "string",
            "itemAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "itemGroupId": "string",
            "languageCode": "string",
            "productMetadata": {
              "availableQuantity": "string",
              "canonicalProductUri": "string",
              "costs": {
                "property1": 0,
                "property2": 0
              },
              "currencyCode": "string",
              "exactPrice": {
                "displayPrice": 0,
                "originalPrice": 0
              },
              "images": [
                {
                  "height": 0,
                  "uri": "string",
                  "width": 0
                }
              ],
              "priceRange": {
                "max": 0,
                "min": 0
              },
              "stockState": "STOCK_STATE_UNSPECIFIED"
            },
            "tags": [
              "string"
            ],
            "title": "string"
          }
        ]
      },
      "gcsSource": {
        "inputUris": [
          "string"
        ],
        "jsonSchema": "string"
      },
      "userEventInlineSource": {
        "userEvents": [
          {
            "eventDetail": {
              "eventAttributes": {
                "categoricalFeatures": {
                  "property1": {
                    "value": [
                      "string"
                    ]
                  },
                  "property2": {
                    "value": [
                      "string"
                    ]
                  }
                },
                "numericalFeatures": {
                  "property1": {
                    "value": [
                      0
                    ]
                  },
                  "property2": {
                    "value": [
                      0
                    ]
                  }
                }
              },
              "experimentIds": [
                "string"
              ],
              "pageViewId": "string",
              "recommendationToken": "string",
              "referrerUri": "string",
              "uri": "string"
            },
            "eventSource": "EVENT_SOURCE_UNSPECIFIED",
            "eventTime": "string",
            "eventType": "string",
            "productEventDetail": {
              "cartId": "string",
              "listId": "string",
              "pageCategories": [
                {
                  "categories": [
                    "string"
                  ]
                }
              ],
              "productDetails": [
                {
                  "availableQuantity": 0,
                  "currencyCode": "string",
                  "displayPrice": 0,
                  "id": "string",
                  "itemAttributes": {
                    "categoricalFeatures": {
                      "property1": {
                        "value": [
                          "string"
                        ]
                      },
                      "property2": {
                        "value": [
                          "string"
                        ]
                      }
                    },
                    "numericalFeatures": {
                      "property1": {
                        "value": [
                          0
                        ]
                      },
                      "property2": {
                        "value": [
                          0
                        ]
                      }
                    }
                  },
                  "originalPrice": 0,
                  "quantity": 0,
                  "stockState": "STOCK_STATE_UNSPECIFIED"
                }
              ],
              "purchaseTransaction": {
                "costs": {
                  "property1": 0,
                  "property2": 0
                },
                "currencyCode": "string",
                "id": "string",
                "revenue": 0,
                "taxes": {
                  "property1": 0,
                  "property2": 0
                }
              },
              "searchQuery": "string"
            },
            "userInfo": {
              "directUserRequest": true,
              "ipAddress": "string",
              "userAgent": "string",
              "userId": "string",
              "visitorId": "string"
            }
          }
        ]
      }
    },
    "requestId": "string"
  }'
```

`POST /v1beta1/{parent}/userEvents:import`

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

> Body parameter

```json
{
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "projectId": "string",
      "tableId": "string"
    },
    "catalogInlineSource": {
      "catalogItems": [
        {
          "categoryHierarchies": [
            {
              "categories": [
                "string"
              ]
            }
          ],
          "description": "string",
          "id": "string",
          "itemAttributes": {
            "categoricalFeatures": {
              "property1": {
                "value": [
                  "string"
                ]
              },
              "property2": {
                "value": [
                  "string"
                ]
              }
            },
            "numericalFeatures": {
              "property1": {
                "value": [
                  0
                ]
              },
              "property2": {
                "value": [
                  0
                ]
              }
            }
          },
          "itemGroupId": "string",
          "languageCode": "string",
          "productMetadata": {
            "availableQuantity": "string",
            "canonicalProductUri": "string",
            "costs": {
              "property1": 0,
              "property2": 0
            },
            "currencyCode": "string",
            "exactPrice": {
              "displayPrice": 0,
              "originalPrice": 0
            },
            "images": [
              {
                "height": 0,
                "uri": "string",
                "width": 0
              }
            ],
            "priceRange": {
              "max": 0,
              "min": 0
            },
            "stockState": "STOCK_STATE_UNSPECIFIED"
          },
          "tags": [
            "string"
          ],
          "title": "string"
        }
      ]
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ],
      "jsonSchema": "string"
    },
    "userEventInlineSource": {
      "userEvents": [
        {
          "eventDetail": {
            "eventAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "experimentIds": [
              "string"
            ],
            "pageViewId": "string",
            "recommendationToken": "string",
            "referrerUri": "string",
            "uri": "string"
          },
          "eventSource": "EVENT_SOURCE_UNSPECIFIED",
          "eventTime": "string",
          "eventType": "string",
          "productEventDetail": {
            "cartId": "string",
            "listId": "string",
            "pageCategories": [
              {
                "categories": [
                  "string"
                ]
              }
            ],
            "productDetails": [
              {
                "availableQuantity": 0,
                "currencyCode": "string",
                "displayPrice": 0,
                "id": "string",
                "itemAttributes": {
                  "categoricalFeatures": {
                    "property1": {
                      "value": [
                        "string"
                      ]
                    },
                    "property2": {
                      "value": [
                        "string"
                      ]
                    }
                  },
                  "numericalFeatures": {
                    "property1": {
                      "value": [
                        0
                      ]
                    },
                    "property2": {
                      "value": [
                        0
                      ]
                    }
                  }
                },
                "originalPrice": 0,
                "quantity": 0,
                "stockState": "STOCK_STATE_UNSPECIFIED"
              }
            ],
            "purchaseTransaction": {
              "costs": {
                "property1": 0,
                "property2": 0
              },
              "currencyCode": "string",
              "id": "string",
              "revenue": 0,
              "taxes": {
                "property1": 0,
                "property2": 0
              }
            },
            "searchQuery": "string"
          },
          "userInfo": {
            "directUserRequest": true,
            "ipAddress": "string",
            "userAgent": "string",
            "userId": "string",
            "visitorId": "string"
          }
        }
      ]
    }
  },
  "requestId": "string"
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`|
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
|body|body|[GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest](#schemagooglecloudrecommendationenginev1beta1importusereventsrequest)|false|none|
|» errorsConfig|body|[GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#schemagooglecloudrecommendationenginev1beta1importerrorsconfig)|false|Optional. The desired location of errors incurred during the Import.|
|» inputConfig|body|[GoogleCloudRecommendationengineV1beta1InputConfig](#schemagooglecloudrecommendationenginev1beta1inputconfig)|false|Required. The desired input location of the data.|
|» requestId|body|string|false|Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.userEvents.purge

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.userEvents.purge"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userEvents:purge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": "string",
    "force": true
  }'
```

`POST /v1beta1/{parent}/userEvents:purge`

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

> Body parameter

```json
{
  "filter": "string",
  "force": true
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventspurge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the event_store under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/eventStores/${eventStoreId}`|
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
|body|body|[GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest](#schemagooglecloudrecommendationenginev1beta1purgeusereventsrequest)|false|none|
|» filter|body|string|false|Required. The filter string to specify the events to be deleted. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: UserEvent.eventType field of type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: field of type string. Specifying this will delete all events associated with a visitor. * `userId`: field of type string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.|
|» force|body|boolean|false|Optional. The default value is false. Override this flag to true to actually perform the purge. If the field is not set to true, a sampling of events to be deleted will be returned.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventspurge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.userEvents.rejoin

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.userEvents.rejoin"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userEvents:rejoin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "userEventRejoinScope": "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
  }'
```

`POST /v1beta1/{parent}/userEvents:rejoin`

Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.

> Body parameter

```json
{
  "userEventRejoinScope": "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventsrejoin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Full resource name of user event, such as `projects/*/locations/*/catalogs/default_catalog/eventStores/default_event_store`.|
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
|body|body|[GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest](#schemagooglecloudrecommendationenginev1beta1rejoinusereventsrequest)|false|none|
|» userEventRejoinScope|body|string|false|Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» userEventRejoinScope|USER_EVENT_REJOIN_SCOPE_UNSPECIFIED|
|» userEventRejoinScope|JOINED_EVENTS|
|» userEventRejoinScope|UNJOINED_EVENTS|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventsrejoin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommendationengine.projects.locations.catalogs.eventStores.userEvents.write

<a id="opIdrecommendationengine.projects.locations.catalogs.eventStores.userEvents.write"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userEvents:write \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "eventDetail": {
      "eventAttributes": {
        "categoricalFeatures": {
          "property1": {
            "value": [
              "string"
            ]
          },
          "property2": {
            "value": [
              "string"
            ]
          }
        },
        "numericalFeatures": {
          "property1": {
            "value": [
              0
            ]
          },
          "property2": {
            "value": [
              0
            ]
          }
        }
      },
      "experimentIds": [
        "string"
      ],
      "pageViewId": "string",
      "recommendationToken": "string",
      "referrerUri": "string",
      "uri": "string"
    },
    "eventSource": "EVENT_SOURCE_UNSPECIFIED",
    "eventTime": "string",
    "eventType": "string",
    "productEventDetail": {
      "cartId": "string",
      "listId": "string",
      "pageCategories": [
        {
          "categories": [
            "string"
          ]
        }
      ],
      "productDetails": [
        {
          "availableQuantity": 0,
          "currencyCode": "string",
          "displayPrice": 0,
          "id": "string",
          "itemAttributes": {
            "categoricalFeatures": {
              "property1": {
                "value": [
                  "string"
                ]
              },
              "property2": {
                "value": [
                  "string"
                ]
              }
            },
            "numericalFeatures": {
              "property1": {
                "value": [
                  0
                ]
              },
              "property2": {
                "value": [
                  0
                ]
              }
            }
          },
          "originalPrice": 0,
          "quantity": 0,
          "stockState": "STOCK_STATE_UNSPECIFIED"
        }
      ],
      "purchaseTransaction": {
        "costs": {
          "property1": 0,
          "property2": 0
        },
        "currencyCode": "string",
        "id": "string",
        "revenue": 0,
        "taxes": {
          "property1": 0,
          "property2": 0
        }
      },
      "searchQuery": "string"
    },
    "userInfo": {
      "directUserRequest": true,
      "ipAddress": "string",
      "userAgent": "string",
      "userId": "string",
      "visitorId": "string"
    }
  }'
```

`POST /v1beta1/{parent}/userEvents:write`

Writes a single user event.

> Body parameter

```json
{
  "eventDetail": {
    "eventAttributes": {
      "categoricalFeatures": {
        "property1": {
          "value": [
            "string"
          ]
        },
        "property2": {
          "value": [
            "string"
          ]
        }
      },
      "numericalFeatures": {
        "property1": {
          "value": [
            0
          ]
        },
        "property2": {
          "value": [
            0
          ]
        }
      }
    },
    "experimentIds": [
      "string"
    ],
    "pageViewId": "string",
    "recommendationToken": "string",
    "referrerUri": "string",
    "uri": "string"
  },
  "eventSource": "EVENT_SOURCE_UNSPECIFIED",
  "eventTime": "string",
  "eventType": "string",
  "productEventDetail": {
    "cartId": "string",
    "listId": "string",
    "pageCategories": [
      {
        "categories": [
          "string"
        ]
      }
    ],
    "productDetails": [
      {
        "availableQuantity": 0,
        "currencyCode": "string",
        "displayPrice": 0,
        "id": "string",
        "itemAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "originalPrice": 0,
        "quantity": 0,
        "stockState": "STOCK_STATE_UNSPECIFIED"
      }
    ],
    "purchaseTransaction": {
      "costs": {
        "property1": 0,
        "property2": 0
      },
      "currencyCode": "string",
      "id": "string",
      "revenue": 0,
      "taxes": {
        "property1": 0,
        "property2": 0
      }
    },
    "searchQuery": "string"
  },
  "userInfo": {
    "directUserRequest": true,
    "ipAddress": "string",
    "userAgent": "string",
    "userId": "string",
    "visitorId": "string"
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventswrite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent eventStore resource name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store".|
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
|body|body|[GoogleCloudRecommendationengineV1beta1UserEvent](#schemagooglecloudrecommendationenginev1beta1userevent)|false|none|
|» eventDetail|body|[GoogleCloudRecommendationengineV1beta1EventDetail](#schemagooglecloudrecommendationenginev1beta1eventdetail)|false|Optional. User event detailed information common across different recommendation types.|
|» eventSource|body|string|false|Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`.|
|» eventTime|body|string(google-datetime)|false|Optional. Only required for ImportUserEvents method. Timestamp of user event created.|
|» eventType|body|string|false|Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager.|
|» productEventDetail|body|[GoogleCloudRecommendationengineV1beta1ProductEventDetail](#schemagooglecloudrecommendationenginev1beta1producteventdetail)|false|Optional. Retail product specific user event metadata. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `category-page-view` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` * `search` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_event_detail' should be set for this unless the shopping cart is empty. This field is not allowed for the following event types: * `home-page-view`|
|» userInfo|body|[GoogleCloudRecommendationengineV1beta1UserInfo](#schemagooglecloudrecommendationenginev1beta1userinfo)|false|Required. User information.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» eventSource|EVENT_SOURCE_UNSPECIFIED|
|» eventSource|AUTOML|
|» eventSource|ECOMMERCE|
|» eventSource|BATCH_UPLOAD|

> Example responses

> 200 Response

```json
{
  "eventDetail": {
    "eventAttributes": {
      "categoricalFeatures": {
        "property1": {
          "value": [
            "string"
          ]
        },
        "property2": {
          "value": [
            "string"
          ]
        }
      },
      "numericalFeatures": {
        "property1": {
          "value": [
            0
          ]
        },
        "property2": {
          "value": [
            0
          ]
        }
      }
    },
    "experimentIds": [
      "string"
    ],
    "pageViewId": "string",
    "recommendationToken": "string",
    "referrerUri": "string",
    "uri": "string"
  },
  "eventSource": "EVENT_SOURCE_UNSPECIFIED",
  "eventTime": "string",
  "eventType": "string",
  "productEventDetail": {
    "cartId": "string",
    "listId": "string",
    "pageCategories": [
      {
        "categories": [
          "string"
        ]
      }
    ],
    "productDetails": [
      {
        "availableQuantity": 0,
        "currencyCode": "string",
        "displayPrice": 0,
        "id": "string",
        "itemAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "originalPrice": 0,
        "quantity": 0,
        "stockState": "STOCK_STATE_UNSPECIFIED"
      }
    ],
    "purchaseTransaction": {
      "costs": {
        "property1": 0,
        "property2": 0
      },
      "currencyCode": "string",
      "id": "string",
      "revenue": 0,
      "taxes": {
        "property1": 0,
        "property2": 0
      }
    },
    "searchQuery": "string"
  },
  "userInfo": {
    "directUserRequest": true,
    "ipAddress": "string",
    "userAgent": "string",
    "userId": "string",
    "visitorId": "string"
  }
}
```

<h3 id="recommendationengineprojectslocationscatalogseventstoresusereventswrite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommendationengineV1beta1UserEvent](#schemagooglecloudrecommendationenginev1beta1userevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleApiHttpBody">GoogleApiHttpBody</h2>
<!-- backwards compatibility -->
<a id="schemagoogleapihttpbody"></a>
<a id="schema_GoogleApiHttpBody"></a>
<a id="tocSgoogleapihttpbody"></a>
<a id="tocsgoogleapihttpbody"></a>

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The HTTP Content-Type header value specifying the content type of the body.|
|data|string(byte)|false|none|The HTTP request/response body as raw binary.|
|extensions|[object]|false|none|Application specific response metadata. Must be set in the first response for streaming APIs.|

<h2 id="tocS_GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadata">GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1alpharejoincatalogmetadata"></a>
<a id="schema_GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadata"></a>
<a id="tocSgooglecloudrecommendationenginev1alpharejoincatalogmetadata"></a>
<a id="tocsgooglecloudrecommendationenginev1alpharejoincatalogmetadata"></a>

```json
{}
```

Metadata for TriggerCatalogRejoin method.

<h2 id="tocS_GoogleCloudRecommendationengineV1alphaRejoinCatalogResponse">GoogleCloudRecommendationengineV1alphaRejoinCatalogResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1alpharejoincatalogresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1alphaRejoinCatalogResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1alpharejoincatalogresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1alpharejoincatalogresponse"></a>

```json
{
  "rejoinedUserEventsCount": "string"
}
```

Response message for TriggerCatalogRejoin method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rejoinedUserEventsCount|string(int64)|false|none|Number of user events that were joined with latest catalog items.|

<h2 id="tocS_GoogleCloudRecommendationengineV1alphaTuningMetadata">GoogleCloudRecommendationengineV1alphaTuningMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1alphatuningmetadata"></a>
<a id="schema_GoogleCloudRecommendationengineV1alphaTuningMetadata"></a>
<a id="tocSgooglecloudrecommendationenginev1alphatuningmetadata"></a>
<a id="tocsgooglecloudrecommendationenginev1alphatuningmetadata"></a>

```json
{
  "recommendationModel": "string"
}
```

Metadata associated with a tune operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendationModel|string|false|none|The resource name of the recommendation model that this tune applies to. Format: projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/eventStores/{event_store_id}/recommendationModels/{recommendation_model_id}|

<h2 id="tocS_GoogleCloudRecommendationengineV1alphaTuningResponse">GoogleCloudRecommendationengineV1alphaTuningResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1alphatuningresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1alphaTuningResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1alphatuningresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1alphatuningresponse"></a>

```json
{}
```

Response associated with a tune operation.

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1BigQuerySource">GoogleCloudRecommendationengineV1beta1BigQuerySource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1bigquerysource"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1BigQuerySource"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1bigquerysource"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1bigquerysource"></a>

```json
{
  "dataSchema": "string",
  "datasetId": "string",
  "gcsStagingDir": "string",
  "projectId": "string",
  "tableId": "string"
}
```

BigQuery source import data from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSchema|string|false|none|Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user event imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en|
|datasetId|string|false|none|Required. The BigQuery data set to copy the data from.|
|gcsStagingDir|string|false|none|Optional. Intermediate Cloud Storage directory used for the import. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.|
|projectId|string|false|none|Optional. The project id (can be project # or id) that the BigQuery source is in. If not specified, inherits the project id from the parent request.|
|tableId|string|false|none|Required. The BigQuery table to copy the data from.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1Catalog">GoogleCloudRecommendationengineV1beta1Catalog</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1catalog"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1Catalog"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1catalog"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1catalog"></a>

```json
{
  "catalogItemLevelConfig": {
    "eventItemLevel": "CATALOG_ITEM_LEVEL_UNSPECIFIED",
    "predictItemLevel": "CATALOG_ITEM_LEVEL_UNSPECIFIED"
  },
  "defaultEventStoreId": "string",
  "displayName": "string",
  "name": "string"
}
```

The catalog configuration. Next ID: 5.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogItemLevelConfig|[GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig](#schemagooglecloudrecommendationenginev1beta1catalogitemlevelconfig)|false|none|Required. The catalog item level configuration.|
|defaultEventStoreId|string|false|none|Required. The ID of the default event store.|
|displayName|string|false|none|Required. The catalog display name.|
|name|string|false|none|The fully qualified resource name of the catalog.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1CatalogInlineSource">GoogleCloudRecommendationengineV1beta1CatalogInlineSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1cataloginlinesource"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1CatalogInlineSource"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1cataloginlinesource"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1cataloginlinesource"></a>

```json
{
  "catalogItems": [
    {
      "categoryHierarchies": [
        {
          "categories": [
            "string"
          ]
        }
      ],
      "description": "string",
      "id": "string",
      "itemAttributes": {
        "categoricalFeatures": {
          "property1": {
            "value": [
              "string"
            ]
          },
          "property2": {
            "value": [
              "string"
            ]
          }
        },
        "numericalFeatures": {
          "property1": {
            "value": [
              0
            ]
          },
          "property2": {
            "value": [
              0
            ]
          }
        }
      },
      "itemGroupId": "string",
      "languageCode": "string",
      "productMetadata": {
        "availableQuantity": "string",
        "canonicalProductUri": "string",
        "costs": {
          "property1": 0,
          "property2": 0
        },
        "currencyCode": "string",
        "exactPrice": {
          "displayPrice": 0,
          "originalPrice": 0
        },
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "priceRange": {
          "max": 0,
          "min": 0
        },
        "stockState": "STOCK_STATE_UNSPECIFIED"
      },
      "tags": [
        "string"
      ],
      "title": "string"
    }
  ]
}
```

The inline source for the input config for ImportCatalogItems method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogItems|[[GoogleCloudRecommendationengineV1beta1CatalogItem](#schemagooglecloudrecommendationenginev1beta1catalogitem)]|false|none|Optional. A list of catalog items to update/create. Recommended max of 10k items.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1CatalogItem">GoogleCloudRecommendationengineV1beta1CatalogItem</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1catalogitem"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1CatalogItem"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1catalogitem"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1catalogitem"></a>

```json
{
  "categoryHierarchies": [
    {
      "categories": [
        "string"
      ]
    }
  ],
  "description": "string",
  "id": "string",
  "itemAttributes": {
    "categoricalFeatures": {
      "property1": {
        "value": [
          "string"
        ]
      },
      "property2": {
        "value": [
          "string"
        ]
      }
    },
    "numericalFeatures": {
      "property1": {
        "value": [
          0
        ]
      },
      "property2": {
        "value": [
          0
        ]
      }
    }
  },
  "itemGroupId": "string",
  "languageCode": "string",
  "productMetadata": {
    "availableQuantity": "string",
    "canonicalProductUri": "string",
    "costs": {
      "property1": 0,
      "property2": 0
    },
    "currencyCode": "string",
    "exactPrice": {
      "displayPrice": 0,
      "originalPrice": 0
    },
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "priceRange": {
      "max": 0,
      "min": 0
    },
    "stockState": "STOCK_STATE_UNSPECIFIED"
  },
  "tags": [
    "string"
  ],
  "title": "string"
}
```

CatalogItem captures all metadata information of items to be recommended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryHierarchies|[[GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy](#schemagooglecloudrecommendationenginev1beta1catalogitemcategoryhierarchy)]|false|none|Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] } ]|
|description|string|false|none|Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.|
|id|string|false|none|Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.|
|itemAttributes|[GoogleCloudRecommendationengineV1beta1FeatureMap](#schemagooglecloudrecommendationenginev1beta1featuremap)|false|none|Optional. Highly encouraged. Extra catalog item attributes to be included in the recommendation model. For example, for retail products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the item attributes here.|
|itemGroupId|string|false|none|Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).|
|languageCode|string|false|none|Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.|
|productMetadata|[GoogleCloudRecommendationengineV1beta1ProductCatalogItem](#schemagooglecloudrecommendationenginev1beta1productcatalogitem)|false|none|Optional. Metadata specific to retail products.|
|tags|[string]|false|none|Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.|
|title|string|false|none|Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy">GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1catalogitemcategoryhierarchy"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1catalogitemcategoryhierarchy"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1catalogitemcategoryhierarchy"></a>

```json
{
  "categories": [
    "string"
  ]
}
```

Category represents catalog item category hierarchy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|Required. Catalog item categories. Each category should be a UTF-8 encoded string with a length limit of 2 KiB. Note that the order in the list denotes the specificity (from least to most specific).|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig">GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1catalogitemlevelconfig"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1catalogitemlevelconfig"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1catalogitemlevelconfig"></a>

```json
{
  "eventItemLevel": "CATALOG_ITEM_LEVEL_UNSPECIFIED",
  "predictItemLevel": "CATALOG_ITEM_LEVEL_UNSPECIFIED"
}
```

Configures the catalog level that users send events to, and the level at which predictions are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventItemLevel|string|false|none|Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.|
|predictItemLevel|string|false|none|Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventItemLevel|CATALOG_ITEM_LEVEL_UNSPECIFIED|
|eventItemLevel|VARIANT|
|eventItemLevel|MASTER|
|predictItemLevel|CATALOG_ITEM_LEVEL_UNSPECIFIED|
|predictItemLevel|VARIANT|
|predictItemLevel|MASTER|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest">GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1createpredictionapikeyregistrationrequest"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1createpredictionapikeyregistrationrequest"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1createpredictionapikeyregistrationrequest"></a>

```json
{
  "predictionApiKeyRegistration": {
    "apiKey": "string"
  }
}
```

Request message for the `CreatePredictionApiKeyRegistration` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|predictionApiKeyRegistration|[GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration](#schemagooglecloudrecommendationenginev1beta1predictionapikeyregistration)|false|none|Required. The prediction API key registration.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1EventDetail">GoogleCloudRecommendationengineV1beta1EventDetail</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1eventdetail"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1EventDetail"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1eventdetail"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1eventdetail"></a>

```json
{
  "eventAttributes": {
    "categoricalFeatures": {
      "property1": {
        "value": [
          "string"
        ]
      },
      "property2": {
        "value": [
          "string"
        ]
      }
    },
    "numericalFeatures": {
      "property1": {
        "value": [
          0
        ]
      },
      "property2": {
        "value": [
          0
        ]
      }
    }
  },
  "experimentIds": [
    "string"
  ],
  "pageViewId": "string",
  "recommendationToken": "string",
  "referrerUri": "string",
  "uri": "string"
}
```

User event details shared by all recommendation types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventAttributes|[GoogleCloudRecommendationengineV1beta1FeatureMap](#schemagooglecloudrecommendationenginev1beta1featuremap)|false|none|Optional. Extra user event features to include in the recommendation model. For product recommendation, an example of extra user information is traffic_channel, i.e. how user arrives at the site. Users can arrive at the site by coming to the site directly, or coming through Google search, and etc.|
|experimentIds|[string]|false|none|Optional. A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Recommendation Engine system, using different recommendation models).|
|pageViewId|string|false|none|Optional. A unique id of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. This `pageViewId` will be automatically generated if using the JavaScript pixel.|
|recommendationToken|string|false|none|Optional. Recommendation token included in the recommendation prediction response. This field enables accurate attribution of recommendation model performance. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased item. If user clicks on product K in the recommendation results, pass the `PredictResponse.recommendationToken` property as a url parameter to product K's page. When recording events on product K's page, log the PredictResponse.recommendation_token to this field. Optional, but highly encouraged for user events that are the result of a recommendation prediction query.|
|referrerUri|string|false|none|Optional. The referrer url of the current page. When using the JavaScript pixel, this value is filled in automatically.|
|uri|string|false|none|Optional. Complete url (window.location.href) of the user's current page. When using the JavaScript pixel, this value is filled in automatically. Maximum length 5KB.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1FeatureMap">GoogleCloudRecommendationengineV1beta1FeatureMap</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1featuremap"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1FeatureMap"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1featuremap"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1featuremap"></a>

```json
{
  "categoricalFeatures": {
    "property1": {
      "value": [
        "string"
      ]
    },
    "property2": {
      "value": [
        "string"
      ]
    }
  },
  "numericalFeatures": {
    "property1": {
      "value": [
        0
      ]
    },
    "property2": {
      "value": [
        0
      ]
    }
  }
}
```

FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoricalFeatures|object|false|none|Categorical features that can take on one of a limited number of possible values. Some examples would be the brand/maker of a product, or country of a customer. Feature names and values must be UTF-8 encoded strings. For example: `{ "colors": {"value": ["yellow", "green"]}, "sizes": {"value":["S", "M"]}`|
|numericalFeatures|object|false|none|Numerical features. Some examples would be the height/weight of a product, or age of a customer. Feature names must be UTF-8 encoded strings. For example: `{ "lengths_cm": {"value":[2.3, 15.4]}, "heights_cm": {"value":[8.1, 6.4]} }`|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1FeatureMapFloatList">GoogleCloudRecommendationengineV1beta1FeatureMapFloatList</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1featuremapfloatlist"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1FeatureMapFloatList"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1featuremapfloatlist"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1featuremapfloatlist"></a>

```json
{
  "value": [
    0
  ]
}
```

A list of float features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[number(float)]|false|none|Float feature value.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1FeatureMapStringList">GoogleCloudRecommendationengineV1beta1FeatureMapStringList</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1featuremapstringlist"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1FeatureMapStringList"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1featuremapstringlist"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1featuremapstringlist"></a>

```json
{
  "value": [
    "string"
  ]
}
```

A list of string features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[string]|false|none|String feature value with a length limit of 128 bytes.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1GcsSource">GoogleCloudRecommendationengineV1beta1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1gcssource"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1GcsSource"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1gcssource"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1gcssource"></a>

```json
{
  "inputUris": [
    "string"
  ],
  "jsonSchema": "string"
}
```

Google Cloud Storage location for input content. format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputUris|[string]|false|none|Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/*.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing catalog information](/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions.|
|jsonSchema|string|false|none|Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user events imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1Image">GoogleCloudRecommendationengineV1beta1Image</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1image"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1Image"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1image"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1image"></a>

```json
{
  "height": 0,
  "uri": "string",
  "width": 0
}
```

Catalog item thumbnail/detail image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|Optional. Height of the image in number of pixels.|
|uri|string|false|none|Required. URL of the image with a length limit of 5 KiB.|
|width|integer(int32)|false|none|Optional. Width of the image in number of pixels.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest">GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1importcatalogitemsrequest"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1importcatalogitemsrequest"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1importcatalogitemsrequest"></a>

```json
{
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "projectId": "string",
      "tableId": "string"
    },
    "catalogInlineSource": {
      "catalogItems": [
        {
          "categoryHierarchies": [
            {
              "categories": [
                "string"
              ]
            }
          ],
          "description": "string",
          "id": "string",
          "itemAttributes": {
            "categoricalFeatures": {
              "property1": {
                "value": [
                  "string"
                ]
              },
              "property2": {
                "value": [
                  "string"
                ]
              }
            },
            "numericalFeatures": {
              "property1": {
                "value": [
                  0
                ]
              },
              "property2": {
                "value": [
                  0
                ]
              }
            }
          },
          "itemGroupId": "string",
          "languageCode": "string",
          "productMetadata": {
            "availableQuantity": "string",
            "canonicalProductUri": "string",
            "costs": {
              "property1": 0,
              "property2": 0
            },
            "currencyCode": "string",
            "exactPrice": {
              "displayPrice": 0,
              "originalPrice": 0
            },
            "images": [
              {
                "height": 0,
                "uri": "string",
                "width": 0
              }
            ],
            "priceRange": {
              "max": 0,
              "min": 0
            },
            "stockState": "STOCK_STATE_UNSPECIFIED"
          },
          "tags": [
            "string"
          ],
          "title": "string"
        }
      ]
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ],
      "jsonSchema": "string"
    },
    "userEventInlineSource": {
      "userEvents": [
        {
          "eventDetail": {
            "eventAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "experimentIds": [
              "string"
            ],
            "pageViewId": "string",
            "recommendationToken": "string",
            "referrerUri": "string",
            "uri": "string"
          },
          "eventSource": "EVENT_SOURCE_UNSPECIFIED",
          "eventTime": "string",
          "eventType": "string",
          "productEventDetail": {
            "cartId": "string",
            "listId": "string",
            "pageCategories": [
              {
                "categories": [
                  "string"
                ]
              }
            ],
            "productDetails": [
              {
                "availableQuantity": 0,
                "currencyCode": "string",
                "displayPrice": 0,
                "id": "string",
                "itemAttributes": {
                  "categoricalFeatures": {
                    "property1": {
                      "value": [
                        "string"
                      ]
                    },
                    "property2": {
                      "value": [
                        "string"
                      ]
                    }
                  },
                  "numericalFeatures": {
                    "property1": {
                      "value": [
                        0
                      ]
                    },
                    "property2": {
                      "value": [
                        0
                      ]
                    }
                  }
                },
                "originalPrice": 0,
                "quantity": 0,
                "stockState": "STOCK_STATE_UNSPECIFIED"
              }
            ],
            "purchaseTransaction": {
              "costs": {
                "property1": 0,
                "property2": 0
              },
              "currencyCode": "string",
              "id": "string",
              "revenue": 0,
              "taxes": {
                "property1": 0,
                "property2": 0
              }
            },
            "searchQuery": "string"
          },
          "userInfo": {
            "directUserRequest": true,
            "ipAddress": "string",
            "userAgent": "string",
            "userId": "string",
            "visitorId": "string"
          }
        }
      ]
    }
  },
  "requestId": "string",
  "updateMask": "string"
}
```

Request message for Import methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorsConfig|[GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#schemagooglecloudrecommendationenginev1beta1importerrorsconfig)|false|none|Optional. The desired location of errors incurred during the Import.|
|inputConfig|[GoogleCloudRecommendationengineV1beta1InputConfig](#schemagooglecloudrecommendationenginev1beta1inputconfig)|false|none|Required. The desired input location of the data.|
|requestId|string|false|none|Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response.|
|updateMask|string(google-fieldmask)|false|none|Optional. Indicates which fields in the provided imported 'items' to update. If not set, will by default update all fields.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponse">GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1importcatalogitemsresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1importcatalogitemsresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1importcatalogitemsresponse"></a>

```json
{
  "errorSamples": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "errorsConfig": {
    "gcsPrefix": "string"
  }
}
```

Response of the ImportCatalogItemsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#schemagooglecloudrecommendationenginev1beta1importerrorsconfig)|false|none|Echoes the destination for the complete errors in the request if set.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ImportErrorsConfig">GoogleCloudRecommendationengineV1beta1ImportErrorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1importerrorsconfig"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ImportErrorsConfig"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1importerrorsconfig"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1importerrorsconfig"></a>

```json
{
  "gcsPrefix": "string"
}
```

Configuration of destination for Import related errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPrefix|string|false|none|Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ImportMetadata">GoogleCloudRecommendationengineV1beta1ImportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1importmetadata"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ImportMetadata"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1importmetadata"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1importmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
  "operationName": "string",
  "requestId": "string",
  "successCount": "string",
  "updateTime": "string"
}
```

Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|failureCount|string(int64)|false|none|Count of entries that encountered errors while processing.|
|operationName|string|false|none|Name of the operation.|
|requestId|string|false|none|Id of the request / operation. This is parroting back the requestId that was passed in the request.|
|successCount|string(int64)|false|none|Count of entries that were processed successfully.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest">GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1importusereventsrequest"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1importusereventsrequest"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1importusereventsrequest"></a>

```json
{
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "projectId": "string",
      "tableId": "string"
    },
    "catalogInlineSource": {
      "catalogItems": [
        {
          "categoryHierarchies": [
            {
              "categories": [
                "string"
              ]
            }
          ],
          "description": "string",
          "id": "string",
          "itemAttributes": {
            "categoricalFeatures": {
              "property1": {
                "value": [
                  "string"
                ]
              },
              "property2": {
                "value": [
                  "string"
                ]
              }
            },
            "numericalFeatures": {
              "property1": {
                "value": [
                  0
                ]
              },
              "property2": {
                "value": [
                  0
                ]
              }
            }
          },
          "itemGroupId": "string",
          "languageCode": "string",
          "productMetadata": {
            "availableQuantity": "string",
            "canonicalProductUri": "string",
            "costs": {
              "property1": 0,
              "property2": 0
            },
            "currencyCode": "string",
            "exactPrice": {
              "displayPrice": 0,
              "originalPrice": 0
            },
            "images": [
              {
                "height": 0,
                "uri": "string",
                "width": 0
              }
            ],
            "priceRange": {
              "max": 0,
              "min": 0
            },
            "stockState": "STOCK_STATE_UNSPECIFIED"
          },
          "tags": [
            "string"
          ],
          "title": "string"
        }
      ]
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ],
      "jsonSchema": "string"
    },
    "userEventInlineSource": {
      "userEvents": [
        {
          "eventDetail": {
            "eventAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "experimentIds": [
              "string"
            ],
            "pageViewId": "string",
            "recommendationToken": "string",
            "referrerUri": "string",
            "uri": "string"
          },
          "eventSource": "EVENT_SOURCE_UNSPECIFIED",
          "eventTime": "string",
          "eventType": "string",
          "productEventDetail": {
            "cartId": "string",
            "listId": "string",
            "pageCategories": [
              {
                "categories": [
                  "string"
                ]
              }
            ],
            "productDetails": [
              {
                "availableQuantity": 0,
                "currencyCode": "string",
                "displayPrice": 0,
                "id": "string",
                "itemAttributes": {
                  "categoricalFeatures": {
                    "property1": {
                      "value": [
                        "string"
                      ]
                    },
                    "property2": {
                      "value": [
                        "string"
                      ]
                    }
                  },
                  "numericalFeatures": {
                    "property1": {
                      "value": [
                        0
                      ]
                    },
                    "property2": {
                      "value": [
                        0
                      ]
                    }
                  }
                },
                "originalPrice": 0,
                "quantity": 0,
                "stockState": "STOCK_STATE_UNSPECIFIED"
              }
            ],
            "purchaseTransaction": {
              "costs": {
                "property1": 0,
                "property2": 0
              },
              "currencyCode": "string",
              "id": "string",
              "revenue": 0,
              "taxes": {
                "property1": 0,
                "property2": 0
              }
            },
            "searchQuery": "string"
          },
          "userInfo": {
            "directUserRequest": true,
            "ipAddress": "string",
            "userAgent": "string",
            "userId": "string",
            "visitorId": "string"
          }
        }
      ]
    }
  },
  "requestId": "string"
}
```

Request message for the ImportUserEvents request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorsConfig|[GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#schemagooglecloudrecommendationenginev1beta1importerrorsconfig)|false|none|Optional. The desired location of errors incurred during the Import.|
|inputConfig|[GoogleCloudRecommendationengineV1beta1InputConfig](#schemagooglecloudrecommendationenginev1beta1inputconfig)|false|none|Required. The desired input location of the data.|
|requestId|string|false|none|Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse">GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1importusereventsresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1importusereventsresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1importusereventsresponse"></a>

```json
{
  "errorSamples": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "importSummary": {
    "joinedEventsCount": "string",
    "unjoinedEventsCount": "string"
  }
}
```

Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#schemagooglecloudrecommendationenginev1beta1importerrorsconfig)|false|none|Echoes the destination for the complete errors if this field was set in the request.|
|importSummary|[GoogleCloudRecommendationengineV1beta1UserEventImportSummary](#schemagooglecloudrecommendationenginev1beta1usereventimportsummary)|false|none|Aggregated statistics of user event import status.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1InputConfig">GoogleCloudRecommendationengineV1beta1InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1inputconfig"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1InputConfig"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1inputconfig"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1inputconfig"></a>

```json
{
  "bigQuerySource": {
    "dataSchema": "string",
    "datasetId": "string",
    "gcsStagingDir": "string",
    "projectId": "string",
    "tableId": "string"
  },
  "catalogInlineSource": {
    "catalogItems": [
      {
        "categoryHierarchies": [
          {
            "categories": [
              "string"
            ]
          }
        ],
        "description": "string",
        "id": "string",
        "itemAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "itemGroupId": "string",
        "languageCode": "string",
        "productMetadata": {
          "availableQuantity": "string",
          "canonicalProductUri": "string",
          "costs": {
            "property1": 0,
            "property2": 0
          },
          "currencyCode": "string",
          "exactPrice": {
            "displayPrice": 0,
            "originalPrice": 0
          },
          "images": [
            {
              "height": 0,
              "uri": "string",
              "width": 0
            }
          ],
          "priceRange": {
            "max": 0,
            "min": 0
          },
          "stockState": "STOCK_STATE_UNSPECIFIED"
        },
        "tags": [
          "string"
        ],
        "title": "string"
      }
    ]
  },
  "gcsSource": {
    "inputUris": [
      "string"
    ],
    "jsonSchema": "string"
  },
  "userEventInlineSource": {
    "userEvents": [
      {
        "eventDetail": {
          "eventAttributes": {
            "categoricalFeatures": {
              "property1": {
                "value": [
                  "string"
                ]
              },
              "property2": {
                "value": [
                  "string"
                ]
              }
            },
            "numericalFeatures": {
              "property1": {
                "value": [
                  0
                ]
              },
              "property2": {
                "value": [
                  0
                ]
              }
            }
          },
          "experimentIds": [
            "string"
          ],
          "pageViewId": "string",
          "recommendationToken": "string",
          "referrerUri": "string",
          "uri": "string"
        },
        "eventSource": "EVENT_SOURCE_UNSPECIFIED",
        "eventTime": "string",
        "eventType": "string",
        "productEventDetail": {
          "cartId": "string",
          "listId": "string",
          "pageCategories": [
            {
              "categories": [
                "string"
              ]
            }
          ],
          "productDetails": [
            {
              "availableQuantity": 0,
              "currencyCode": "string",
              "displayPrice": 0,
              "id": "string",
              "itemAttributes": {
                "categoricalFeatures": {
                  "property1": {
                    "value": [
                      "string"
                    ]
                  },
                  "property2": {
                    "value": [
                      "string"
                    ]
                  }
                },
                "numericalFeatures": {
                  "property1": {
                    "value": [
                      0
                    ]
                  },
                  "property2": {
                    "value": [
                      0
                    ]
                  }
                }
              },
              "originalPrice": 0,
              "quantity": 0,
              "stockState": "STOCK_STATE_UNSPECIFIED"
            }
          ],
          "purchaseTransaction": {
            "costs": {
              "property1": 0,
              "property2": 0
            },
            "currencyCode": "string",
            "id": "string",
            "revenue": 0,
            "taxes": {
              "property1": 0,
              "property2": 0
            }
          },
          "searchQuery": "string"
        },
        "userInfo": {
          "directUserRequest": true,
          "ipAddress": "string",
          "userAgent": "string",
          "userId": "string",
          "visitorId": "string"
        }
      }
    ]
  }
}
```

The input config source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigQuerySource|[GoogleCloudRecommendationengineV1beta1BigQuerySource](#schemagooglecloudrecommendationenginev1beta1bigquerysource)|false|none|BigQuery input source.|
|catalogInlineSource|[GoogleCloudRecommendationengineV1beta1CatalogInlineSource](#schemagooglecloudrecommendationenginev1beta1cataloginlinesource)|false|none|The Inline source for the input content for Catalog items.|
|gcsSource|[GoogleCloudRecommendationengineV1beta1GcsSource](#schemagooglecloudrecommendationenginev1beta1gcssource)|false|none|Google Cloud Storage location for the input content.|
|userEventInlineSource|[GoogleCloudRecommendationengineV1beta1UserEventInlineSource](#schemagooglecloudrecommendationenginev1beta1usereventinlinesource)|false|none|The Inline source for the input content for UserEvents.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse">GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1listcatalogitemsresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1listcatalogitemsresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1listcatalogitemsresponse"></a>

```json
{
  "catalogItems": [
    {
      "categoryHierarchies": [
        {
          "categories": [
            "string"
          ]
        }
      ],
      "description": "string",
      "id": "string",
      "itemAttributes": {
        "categoricalFeatures": {
          "property1": {
            "value": [
              "string"
            ]
          },
          "property2": {
            "value": [
              "string"
            ]
          }
        },
        "numericalFeatures": {
          "property1": {
            "value": [
              0
            ]
          },
          "property2": {
            "value": [
              0
            ]
          }
        }
      },
      "itemGroupId": "string",
      "languageCode": "string",
      "productMetadata": {
        "availableQuantity": "string",
        "canonicalProductUri": "string",
        "costs": {
          "property1": 0,
          "property2": 0
        },
        "currencyCode": "string",
        "exactPrice": {
          "displayPrice": 0,
          "originalPrice": 0
        },
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "priceRange": {
          "max": 0,
          "min": 0
        },
        "stockState": "STOCK_STATE_UNSPECIFIED"
      },
      "tags": [
        "string"
      ],
      "title": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListCatalogItems method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogItems|[[GoogleCloudRecommendationengineV1beta1CatalogItem](#schemagooglecloudrecommendationenginev1beta1catalogitem)]|false|none|The catalog items.|
|nextPageToken|string|false|none|If empty, the list is complete. If nonempty, the token to pass to the next request's ListCatalogItemRequest.page_token.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ListCatalogsResponse">GoogleCloudRecommendationengineV1beta1ListCatalogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1listcatalogsresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ListCatalogsResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1listcatalogsresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1listcatalogsresponse"></a>

```json
{
  "catalogs": [
    {
      "catalogItemLevelConfig": {
        "eventItemLevel": "CATALOG_ITEM_LEVEL_UNSPECIFIED",
        "predictItemLevel": "CATALOG_ITEM_LEVEL_UNSPECIFIED"
      },
      "defaultEventStoreId": "string",
      "displayName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListCatalogs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogs|[[GoogleCloudRecommendationengineV1beta1Catalog](#schemagooglecloudrecommendationenginev1beta1catalog)]|false|read-only|Output only. All the customer's catalogs.|
|nextPageToken|string|false|none|Pagination token, if not returned indicates the last page.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse">GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1listpredictionapikeyregistrationsresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1listpredictionapikeyregistrationsresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1listpredictionapikeyregistrationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "predictionApiKeyRegistrations": [
    {
      "apiKey": "string"
    }
  ]
}
```

Response message for the `ListPredictionApiKeyRegistrations`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If empty, the list is complete. If nonempty, pass the token to the next request's `ListPredictionApiKeysRegistrationsRequest.pageToken`.|
|predictionApiKeyRegistrations|[[GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration](#schemagooglecloudrecommendationenginev1beta1predictionapikeyregistration)]|false|none|The list of registered API keys.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ListUserEventsResponse">GoogleCloudRecommendationengineV1beta1ListUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1listusereventsresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ListUserEventsResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1listusereventsresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1listusereventsresponse"></a>

```json
{
  "nextPageToken": "string",
  "userEvents": [
    {
      "eventDetail": {
        "eventAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "experimentIds": [
          "string"
        ],
        "pageViewId": "string",
        "recommendationToken": "string",
        "referrerUri": "string",
        "uri": "string"
      },
      "eventSource": "EVENT_SOURCE_UNSPECIFIED",
      "eventTime": "string",
      "eventType": "string",
      "productEventDetail": {
        "cartId": "string",
        "listId": "string",
        "pageCategories": [
          {
            "categories": [
              "string"
            ]
          }
        ],
        "productDetails": [
          {
            "availableQuantity": 0,
            "currencyCode": "string",
            "displayPrice": 0,
            "id": "string",
            "itemAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "originalPrice": 0,
            "quantity": 0,
            "stockState": "STOCK_STATE_UNSPECIFIED"
          }
        ],
        "purchaseTransaction": {
          "costs": {
            "property1": 0,
            "property2": 0
          },
          "currencyCode": "string",
          "id": "string",
          "revenue": 0,
          "taxes": {
            "property1": 0,
            "property2": 0
          }
        },
        "searchQuery": "string"
      },
      "userInfo": {
        "directUserRequest": true,
        "ipAddress": "string",
        "userAgent": "string",
        "userId": "string",
        "visitorId": "string"
      }
    }
  ]
}
```

Response message for ListUserEvents method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If empty, the list is complete. If nonempty, the token to pass to the next request's ListUserEvents.page_token.|
|userEvents|[[GoogleCloudRecommendationengineV1beta1UserEvent](#schemagooglecloudrecommendationenginev1beta1userevent)]|false|none|The user events.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1PredictRequest">GoogleCloudRecommendationengineV1beta1PredictRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1predictrequest"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1PredictRequest"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1predictrequest"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1predictrequest"></a>

```json
{
  "dryRun": true,
  "filter": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pageSize": 0,
  "pageToken": "string",
  "params": {
    "property1": null,
    "property2": null
  },
  "userEvent": {
    "eventDetail": {
      "eventAttributes": {
        "categoricalFeatures": {
          "property1": {
            "value": [
              "string"
            ]
          },
          "property2": {
            "value": [
              "string"
            ]
          }
        },
        "numericalFeatures": {
          "property1": {
            "value": [
              0
            ]
          },
          "property2": {
            "value": [
              0
            ]
          }
        }
      },
      "experimentIds": [
        "string"
      ],
      "pageViewId": "string",
      "recommendationToken": "string",
      "referrerUri": "string",
      "uri": "string"
    },
    "eventSource": "EVENT_SOURCE_UNSPECIFIED",
    "eventTime": "string",
    "eventType": "string",
    "productEventDetail": {
      "cartId": "string",
      "listId": "string",
      "pageCategories": [
        {
          "categories": [
            "string"
          ]
        }
      ],
      "productDetails": [
        {
          "availableQuantity": 0,
          "currencyCode": "string",
          "displayPrice": 0,
          "id": "string",
          "itemAttributes": {
            "categoricalFeatures": {
              "property1": {
                "value": [
                  "string"
                ]
              },
              "property2": {
                "value": [
                  "string"
                ]
              }
            },
            "numericalFeatures": {
              "property1": {
                "value": [
                  0
                ]
              },
              "property2": {
                "value": [
                  0
                ]
              }
            }
          },
          "originalPrice": 0,
          "quantity": 0,
          "stockState": "STOCK_STATE_UNSPECIFIED"
        }
      ],
      "purchaseTransaction": {
        "costs": {
          "property1": 0,
          "property2": 0
        },
        "currencyCode": "string",
        "id": "string",
        "revenue": 0,
        "taxes": {
          "property1": 0,
          "property2": 0
        }
      },
      "searchQuery": "string"
    },
    "userInfo": {
      "directUserRequest": true,
      "ipAddress": "string",
      "userAgent": "string",
      "userId": "string",
      "visitorId": "string"
    }
  }
}
```

Request message for Predict method. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dryRun|boolean|false|none|Optional. Use dryRun mode for this prediction query. If set to true, a fake model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.|
|filter|string|false|none|Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB. * filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular items to be returned instead, set `strictFiltering` to false in `PredictRequest.params`.|
|labels|object|false|none|Optional. The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels.|
|pageSize|integer(int32)|false|none|Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.|
|pageToken|string|false|none|Optional. The previous PredictResponse.next_page_token.|
|params|object|false|none|Optional. Additional domain specific parameters for the predictions. Allowed values: * `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response. * `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular items instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request level control and adjust prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request level control and adjust prediction results based on product category.|
|userEvent|[GoogleCloudRecommendationengineV1beta1UserEvent](#schemagooglecloudrecommendationenginev1beta1userevent)|false|none|Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserInfo.visitor_id or UserInfo.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserInfo.visitor_id to a random unique ID and leave UserInfo.user_id unset.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1PredictResponse">GoogleCloudRecommendationengineV1beta1PredictResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1predictresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1PredictResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1predictresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1predictresponse"></a>

```json
{
  "dryRun": true,
  "itemsMissingInCatalog": [
    "string"
  ],
  "metadata": {
    "property1": null,
    "property2": null
  },
  "nextPageToken": "string",
  "recommendationToken": "string",
  "results": [
    {
      "id": "string",
      "itemMetadata": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Response message for predict method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dryRun|boolean|false|none|True if the dryRun property was set in the request.|
|itemsMissingInCatalog|[string]|false|none|IDs of items in the request that were missing from the catalog.|
|metadata|object|false|none|Additional domain specific prediction response metadata.|
|nextPageToken|string|false|none|If empty, the list is complete. If nonempty, the token to pass to the next request's PredictRequest.page_token.|
|recommendationToken|string|false|none|A unique recommendation token. This should be included in the user event logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.|
|results|[[GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult](#schemagooglecloudrecommendationenginev1beta1predictresponsepredictionresult)]|false|none|A list of recommended items. The order represents the ranking (from the most relevant item to the least).|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult">GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1predictresponsepredictionresult"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1predictresponsepredictionresult"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1predictresponsepredictionresult"></a>

```json
{
  "id": "string",
  "itemMetadata": {
    "property1": null,
    "property2": null
  }
}
```

PredictionResult represents the recommendation prediction results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the recommended catalog item|
|itemMetadata|object|false|none|Additional item metadata / annotations. Possible values: * `catalogItem`: JSON representation of the catalogItem. Will be set if `returnCatalogItem` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Will be set if `returnItemScore` is set to true in `PredictRequest.params`.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration">GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1predictionapikeyregistration"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1predictionapikeyregistration"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1predictionapikeyregistration"></a>

```json
{
  "apiKey": "string"
}
```

Registered Api Key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|The API key.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ProductCatalogItem">GoogleCloudRecommendationengineV1beta1ProductCatalogItem</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1productcatalogitem"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ProductCatalogItem"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1productcatalogitem"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1productcatalogitem"></a>

```json
{
  "availableQuantity": "string",
  "canonicalProductUri": "string",
  "costs": {
    "property1": 0,
    "property2": 0
  },
  "currencyCode": "string",
  "exactPrice": {
    "displayPrice": 0,
    "originalPrice": 0
  },
  "images": [
    {
      "height": 0,
      "uri": "string",
      "width": 0
    }
  ],
  "priceRange": {
    "max": 0,
    "min": 0
  },
  "stockState": "STOCK_STATE_UNSPECIFIED"
}
```

ProductCatalogItem captures item metadata specific to retail products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableQuantity|string(int64)|false|none|Optional. The available quantity of the item.|
|canonicalProductUri|string|false|none|Optional. Canonical URL directly linking to the item detail page with a length limit of 5 KiB..|
|costs|object|false|none|Optional. A map to pass the costs associated with the product. For example: {"manufacturing": 45.5} The profit of selling this item is computed like so: * If 'exactPrice' is provided, profit = displayPrice - sum(costs) * If 'priceRange' is provided, profit = minPrice - sum(costs)|
|currencyCode|string|false|none|Optional. Only required if the price is set. Currency code for price/costs. Use three-character ISO-4217 code.|
|exactPrice|[GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice](#schemagooglecloudrecommendationenginev1beta1productcatalogitemexactprice)|false|none|Optional. The exact product price.|
|images|[[GoogleCloudRecommendationengineV1beta1Image](#schemagooglecloudrecommendationenginev1beta1image)]|false|none|Optional. Product images for the catalog item.|
|priceRange|[GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange](#schemagooglecloudrecommendationenginev1beta1productcatalogitempricerange)|false|none|Optional. The product price range.|
|stockState|string|false|none|Optional. Online stock state of the catalog item. Default is `IN_STOCK`.|

#### Enumerated Values

|Property|Value|
|---|---|
|stockState|STOCK_STATE_UNSPECIFIED|
|stockState|IN_STOCK|
|stockState|OUT_OF_STOCK|
|stockState|PREORDER|
|stockState|BACKORDER|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice">GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1productcatalogitemexactprice"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1productcatalogitemexactprice"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1productcatalogitemexactprice"></a>

```json
{
  "displayPrice": 0,
  "originalPrice": 0
}
```

Exact product price.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayPrice|number(float)|false|none|Optional. Display price of the product.|
|originalPrice|number(float)|false|none|Optional. Price of the product without any discount. If zero, by default set to be the 'displayPrice'.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange">GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1productcatalogitempricerange"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1productcatalogitempricerange"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1productcatalogitempricerange"></a>

```json
{
  "max": 0,
  "min": 0
}
```

Product price range when there are a range of prices for different variations of the same product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max|number(float)|false|none|Required. The maximum product price.|
|min|number(float)|false|none|Required. The minimum product price.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ProductDetail">GoogleCloudRecommendationengineV1beta1ProductDetail</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1productdetail"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ProductDetail"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1productdetail"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1productdetail"></a>

```json
{
  "availableQuantity": 0,
  "currencyCode": "string",
  "displayPrice": 0,
  "id": "string",
  "itemAttributes": {
    "categoricalFeatures": {
      "property1": {
        "value": [
          "string"
        ]
      },
      "property2": {
        "value": [
          "string"
        ]
      }
    },
    "numericalFeatures": {
      "property1": {
        "value": [
          0
        ]
      },
      "property2": {
        "value": [
          0
        ]
      }
    }
  },
  "originalPrice": 0,
  "quantity": 0,
  "stockState": "STOCK_STATE_UNSPECIFIED"
}
```

Detailed product information associated with a user event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableQuantity|integer(int32)|false|none|Optional. Quantity of the products in stock when a user event happens. Optional. If provided, this overrides the available quantity in Catalog for this event. and can only be set if `stock_status` is set to `IN_STOCK`. Note that if an item is out of stock, you must set the `stock_state` field to be `OUT_OF_STOCK`. Leaving this field unspecified / as zero is not sufficient to mark the item out of stock.|
|currencyCode|string|false|none|Optional. Currency code for price/costs. Use three-character ISO-4217 code. Required only if originalPrice or displayPrice is set.|
|displayPrice|number(float)|false|none|Optional. Display price of the product (e.g. discounted price). If provided, this will override the display price in Catalog for this product.|
|id|string|false|none|Required. Catalog item ID. UTF-8 encoded string with a length limit of 128 characters.|
|itemAttributes|[GoogleCloudRecommendationengineV1beta1FeatureMap](#schemagooglecloudrecommendationenginev1beta1featuremap)|false|none|Optional. Extra features associated with a product in the user event.|
|originalPrice|number(float)|false|none|Optional. Original price of the product. If provided, this will override the original price in Catalog for this product.|
|quantity|integer(int32)|false|none|Optional. Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `add-to-cart` event. Required for `add-to-cart`, `add-to-list`, `remove-from-cart`, `checkout-start`, `purchase-complete`, `refund` event types.|
|stockState|string|false|none|Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event.|

#### Enumerated Values

|Property|Value|
|---|---|
|stockState|STOCK_STATE_UNSPECIFIED|
|stockState|IN_STOCK|
|stockState|OUT_OF_STOCK|
|stockState|PREORDER|
|stockState|BACKORDER|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1ProductEventDetail">GoogleCloudRecommendationengineV1beta1ProductEventDetail</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1producteventdetail"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1ProductEventDetail"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1producteventdetail"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1producteventdetail"></a>

```json
{
  "cartId": "string",
  "listId": "string",
  "pageCategories": [
    {
      "categories": [
        "string"
      ]
    }
  ],
  "productDetails": [
    {
      "availableQuantity": 0,
      "currencyCode": "string",
      "displayPrice": 0,
      "id": "string",
      "itemAttributes": {
        "categoricalFeatures": {
          "property1": {
            "value": [
              "string"
            ]
          },
          "property2": {
            "value": [
              "string"
            ]
          }
        },
        "numericalFeatures": {
          "property1": {
            "value": [
              0
            ]
          },
          "property2": {
            "value": [
              0
            ]
          }
        }
      },
      "originalPrice": 0,
      "quantity": 0,
      "stockState": "STOCK_STATE_UNSPECIFIED"
    }
  ],
  "purchaseTransaction": {
    "costs": {
      "property1": 0,
      "property2": 0
    },
    "currencyCode": "string",
    "id": "string",
    "revenue": 0,
    "taxes": {
      "property1": 0,
      "property2": 0
    }
  },
  "searchQuery": "string"
}
```

ProductEventDetail captures user event information specific to retail products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cartId|string|false|none|Optional. The id or name of the associated shopping cart. This id is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `remove-from-cart`, `checkout-start`, `purchase-complete`, or `shopping-cart-page-view` events.|
|listId|string|false|none|Required for `add-to-list` and `remove-from-list` events. The id or name of the list that the item is being added to or removed from. Other event types should not set this field.|
|pageCategories|[[GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy](#schemagooglecloudrecommendationenginev1beta1catalogitemcategoryhierarchy)]|false|none|Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The categories associated with a category page. Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: categories : ["Sales", "2017 Black Friday Deals"].|
|productDetails|[[GoogleCloudRecommendationengineV1beta1ProductDetail](#schemagooglecloudrecommendationenginev1beta1productdetail)]|false|none|The main product details related to the event. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_details' should be set for this unless the shopping cart is empty. * `search` (highly encouraged) In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished broswing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new SEARCH event with different product_details is desired. The end user may have not finished broswing the whole page yet. This field is not allowed for the following event types: * `category-page-view` * `home-page-view`|
|purchaseTransaction|[GoogleCloudRecommendationengineV1beta1PurchaseTransaction](#schemagooglecloudrecommendationenginev1beta1purchasetransaction)|false|none|Optional. A transaction represents the entire purchase transaction. Required for `purchase-complete` events. Optional for `checkout-start` events. Other event types should not set this field.|
|searchQuery|string|false|none|At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The user's search query as UTF-8 encoded text with a length limit of 5 KiB.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1PurchaseTransaction">GoogleCloudRecommendationengineV1beta1PurchaseTransaction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1purchasetransaction"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1PurchaseTransaction"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1purchasetransaction"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1purchasetransaction"></a>

```json
{
  "costs": {
    "property1": 0,
    "property2": 0
  },
  "currencyCode": "string",
  "id": "string",
  "revenue": 0,
  "taxes": {
    "property1": 0,
    "property2": 0
  }
}
```

A transaction represents the entire purchase transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costs|object|false|none|Optional. All the costs associated with the product. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs. Total product cost such that profit = revenue - (sum(taxes) + sum(costs)) If product_cost is not set, then profit = revenue - tax - shipping - sum(CatalogItem.costs). If CatalogItem.cost is not specified for one of the items, CatalogItem.cost based profit *cannot* be calculated for this Transaction.|
|currencyCode|string|false|none|Required. Currency code. Use three-character ISO-4217 code. This field is not required if the event type is `refund`.|
|id|string|false|none|Optional. The transaction ID with a length limit of 128 bytes.|
|revenue|number(float)|false|none|Required. Total revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. This field is not required if the event type is `refund`.|
|taxes|object|false|none|Optional. All the taxes associated with the transaction.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata">GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1purgeusereventsmetadata"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1purgeusereventsmetadata"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1purgeusereventsmetadata"></a>

```json
{
  "createTime": "string",
  "operationName": "string"
}
```

Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|operationName|string|false|none|The ID of the request / operation.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest">GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1purgeusereventsrequest"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1purgeusereventsrequest"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1purgeusereventsrequest"></a>

```json
{
  "filter": "string",
  "force": true
}
```

Request message for PurgeUserEvents method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Required. The filter string to specify the events to be deleted. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: UserEvent.eventType field of type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: field of type string. Specifying this will delete all events associated with a visitor. * `userId`: field of type string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.|
|force|boolean|false|none|Optional. The default value is false. Override this flag to true to actually perform the purge. If the field is not set to true, a sampling of events to be deleted will be returned.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse">GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1purgeusereventsresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1purgeusereventsresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1purgeusereventsresponse"></a>

```json
{
  "purgedEventsCount": "string",
  "userEventsSample": [
    {
      "eventDetail": {
        "eventAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "experimentIds": [
          "string"
        ],
        "pageViewId": "string",
        "recommendationToken": "string",
        "referrerUri": "string",
        "uri": "string"
      },
      "eventSource": "EVENT_SOURCE_UNSPECIFIED",
      "eventTime": "string",
      "eventType": "string",
      "productEventDetail": {
        "cartId": "string",
        "listId": "string",
        "pageCategories": [
          {
            "categories": [
              "string"
            ]
          }
        ],
        "productDetails": [
          {
            "availableQuantity": 0,
            "currencyCode": "string",
            "displayPrice": 0,
            "id": "string",
            "itemAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "originalPrice": 0,
            "quantity": 0,
            "stockState": "STOCK_STATE_UNSPECIFIED"
          }
        ],
        "purchaseTransaction": {
          "costs": {
            "property1": 0,
            "property2": 0
          },
          "currencyCode": "string",
          "id": "string",
          "revenue": 0,
          "taxes": {
            "property1": 0,
            "property2": 0
          }
        },
        "searchQuery": "string"
      },
      "userInfo": {
        "directUserRequest": true,
        "ipAddress": "string",
        "userAgent": "string",
        "userId": "string",
        "visitorId": "string"
      }
    }
  ]
}
```

Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purgedEventsCount|string(int64)|false|none|The total count of events purged as a result of the operation.|
|userEventsSample|[[GoogleCloudRecommendationengineV1beta1UserEvent](#schemagooglecloudrecommendationenginev1beta1userevent)]|false|none|A sampling of events deleted (or will be deleted) depending on the `force` property in the request. Max of 500 items will be returned.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadata">GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1rejoinusereventsmetadata"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadata"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1rejoinusereventsmetadata"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1rejoinusereventsmetadata"></a>

```json
{}
```

Metadata for RejoinUserEvents method.

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest">GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1rejoinusereventsrequest"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1rejoinusereventsrequest"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1rejoinusereventsrequest"></a>

```json
{
  "userEventRejoinScope": "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
}
```

Request message for CatalogRejoin method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userEventRejoinScope|string|false|none|Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items.|

#### Enumerated Values

|Property|Value|
|---|---|
|userEventRejoinScope|USER_EVENT_REJOIN_SCOPE_UNSPECIFIED|
|userEventRejoinScope|JOINED_EVENTS|
|userEventRejoinScope|UNJOINED_EVENTS|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse">GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1rejoinusereventsresponse"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1rejoinusereventsresponse"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1rejoinusereventsresponse"></a>

```json
{
  "rejoinedUserEventsCount": "string"
}
```

Response message for RejoinUserEvents method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rejoinedUserEventsCount|string(int64)|false|none|Number of user events that were joined with latest catalog items.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1UserEvent">GoogleCloudRecommendationengineV1beta1UserEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1userevent"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1UserEvent"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1userevent"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1userevent"></a>

```json
{
  "eventDetail": {
    "eventAttributes": {
      "categoricalFeatures": {
        "property1": {
          "value": [
            "string"
          ]
        },
        "property2": {
          "value": [
            "string"
          ]
        }
      },
      "numericalFeatures": {
        "property1": {
          "value": [
            0
          ]
        },
        "property2": {
          "value": [
            0
          ]
        }
      }
    },
    "experimentIds": [
      "string"
    ],
    "pageViewId": "string",
    "recommendationToken": "string",
    "referrerUri": "string",
    "uri": "string"
  },
  "eventSource": "EVENT_SOURCE_UNSPECIFIED",
  "eventTime": "string",
  "eventType": "string",
  "productEventDetail": {
    "cartId": "string",
    "listId": "string",
    "pageCategories": [
      {
        "categories": [
          "string"
        ]
      }
    ],
    "productDetails": [
      {
        "availableQuantity": 0,
        "currencyCode": "string",
        "displayPrice": 0,
        "id": "string",
        "itemAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "originalPrice": 0,
        "quantity": 0,
        "stockState": "STOCK_STATE_UNSPECIFIED"
      }
    ],
    "purchaseTransaction": {
      "costs": {
        "property1": 0,
        "property2": 0
      },
      "currencyCode": "string",
      "id": "string",
      "revenue": 0,
      "taxes": {
        "property1": 0,
        "property2": 0
      }
    },
    "searchQuery": "string"
  },
  "userInfo": {
    "directUserRequest": true,
    "ipAddress": "string",
    "userAgent": "string",
    "userId": "string",
    "visitorId": "string"
  }
}
```

UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventDetail|[GoogleCloudRecommendationengineV1beta1EventDetail](#schemagooglecloudrecommendationenginev1beta1eventdetail)|false|none|Optional. User event detailed information common across different recommendation types.|
|eventSource|string|false|none|Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`.|
|eventTime|string(google-datetime)|false|none|Optional. Only required for ImportUserEvents method. Timestamp of user event created.|
|eventType|string|false|none|Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager.|
|productEventDetail|[GoogleCloudRecommendationengineV1beta1ProductEventDetail](#schemagooglecloudrecommendationenginev1beta1producteventdetail)|false|none|Optional. Retail product specific user event metadata. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `category-page-view` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` * `search` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_event_detail' should be set for this unless the shopping cart is empty. This field is not allowed for the following event types: * `home-page-view`|
|userInfo|[GoogleCloudRecommendationengineV1beta1UserInfo](#schemagooglecloudrecommendationenginev1beta1userinfo)|false|none|Required. User information.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventSource|EVENT_SOURCE_UNSPECIFIED|
|eventSource|AUTOML|
|eventSource|ECOMMERCE|
|eventSource|BATCH_UPLOAD|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1UserEventImportSummary">GoogleCloudRecommendationengineV1beta1UserEventImportSummary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1usereventimportsummary"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1UserEventImportSummary"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1usereventimportsummary"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1usereventimportsummary"></a>

```json
{
  "joinedEventsCount": "string",
  "unjoinedEventsCount": "string"
}
```

A summary of import result. The UserEventImportSummary summarizes the import status for user events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|joinedEventsCount|string(int64)|false|none|Count of user events imported with complete existing catalog information.|
|unjoinedEventsCount|string(int64)|false|none|Count of user events imported, but with catalog information not found in the imported catalog.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1UserEventInlineSource">GoogleCloudRecommendationengineV1beta1UserEventInlineSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1usereventinlinesource"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1UserEventInlineSource"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1usereventinlinesource"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1usereventinlinesource"></a>

```json
{
  "userEvents": [
    {
      "eventDetail": {
        "eventAttributes": {
          "categoricalFeatures": {
            "property1": {
              "value": [
                "string"
              ]
            },
            "property2": {
              "value": [
                "string"
              ]
            }
          },
          "numericalFeatures": {
            "property1": {
              "value": [
                0
              ]
            },
            "property2": {
              "value": [
                0
              ]
            }
          }
        },
        "experimentIds": [
          "string"
        ],
        "pageViewId": "string",
        "recommendationToken": "string",
        "referrerUri": "string",
        "uri": "string"
      },
      "eventSource": "EVENT_SOURCE_UNSPECIFIED",
      "eventTime": "string",
      "eventType": "string",
      "productEventDetail": {
        "cartId": "string",
        "listId": "string",
        "pageCategories": [
          {
            "categories": [
              "string"
            ]
          }
        ],
        "productDetails": [
          {
            "availableQuantity": 0,
            "currencyCode": "string",
            "displayPrice": 0,
            "id": "string",
            "itemAttributes": {
              "categoricalFeatures": {
                "property1": {
                  "value": [
                    "string"
                  ]
                },
                "property2": {
                  "value": [
                    "string"
                  ]
                }
              },
              "numericalFeatures": {
                "property1": {
                  "value": [
                    0
                  ]
                },
                "property2": {
                  "value": [
                    0
                  ]
                }
              }
            },
            "originalPrice": 0,
            "quantity": 0,
            "stockState": "STOCK_STATE_UNSPECIFIED"
          }
        ],
        "purchaseTransaction": {
          "costs": {
            "property1": 0,
            "property2": 0
          },
          "currencyCode": "string",
          "id": "string",
          "revenue": 0,
          "taxes": {
            "property1": 0,
            "property2": 0
          }
        },
        "searchQuery": "string"
      },
      "userInfo": {
        "directUserRequest": true,
        "ipAddress": "string",
        "userAgent": "string",
        "userId": "string",
        "visitorId": "string"
      }
    }
  ]
}
```

The inline source for the input config for ImportUserEvents method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userEvents|[[GoogleCloudRecommendationengineV1beta1UserEvent](#schemagooglecloudrecommendationenginev1beta1userevent)]|false|none|Optional. A list of user events to import. Recommended max of 10k items.|

<h2 id="tocS_GoogleCloudRecommendationengineV1beta1UserInfo">GoogleCloudRecommendationengineV1beta1UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommendationenginev1beta1userinfo"></a>
<a id="schema_GoogleCloudRecommendationengineV1beta1UserInfo"></a>
<a id="tocSgooglecloudrecommendationenginev1beta1userinfo"></a>
<a id="tocsgooglecloudrecommendationenginev1beta1userinfo"></a>

```json
{
  "directUserRequest": true,
  "ipAddress": "string",
  "userAgent": "string",
  "userId": "string",
  "visitorId": "string"
}
```

Information of end users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directUserRequest|boolean|false|none|Optional. Indicates if the request is made directly from the end user in which case the user_agent and ip_address fields can be populated from the HTTP request. This should *not* be set when using the javascript pixel. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events).|
|ipAddress|string|false|none|Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should *not* be set when using the javascript pixel or if `direct_user_request` is set. Used to extract location information for personalization.|
|userAgent|string|false|none|Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB. This should *not* be set when using the JavaScript pixel or if `directUserRequest` is set.|
|userId|string|false|none|Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users. Don't set for anonymous users. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.|
|visitorId|string|false|none|Required. A unique identifier for tracking visitors with a length limit of 128 bytes. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. Maximum length 128 bytes. Cannot be empty. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.|

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|
