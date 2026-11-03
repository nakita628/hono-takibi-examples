<h1 id="search-api">Search API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Algolia Search API lets you search, configure, and manage your indices and records

## Client libraries

Use Algolia's API clients and libraries to reliably integrate Algolia's APIs with your apps.
The official API clients are covered by Algolia's [Service Level Agreement](https://www.algolia.com/policies/sla).

For more information, see [Algolia's ecosystem](https://www.algolia.com/doc/libraries).

## Base URLs

Base URLs for the Search API:

- `https://{APPLICATION_ID}.algolia.net`
- `https://{APPLICATION_ID}-dsn.algolia.net`.
  If your subscription includes a [Distributed Search Network](https://dashboard.algolia.com/infra),
  this ensures that requests are sent to servers closest to users.

Both URLs provide high availability by distributing requests with load balancing.

**All requests must use HTTPS.**

## Retry strategy

To guarantee high availability, implement a retry strategy for all API requests using the URLs of your servers as fallbacks:

- `https://{APPLICATION_ID}-1.algolianet.com`
- `https://{APPLICATION_ID}-2.algolianet.com`
- `https://{APPLICATION_ID}-3.algolianet.com`

These URLs use a different DNS provider than the primary URLs.
Randomize this list to ensure an even load across the three servers.

All Algolia API clients implement this retry strategy.

## Authentication

Add these headers to authenticate requests:

- `x-algolia-application-id`. Your Algolia application ID.
- `x-algolia-api-key`. An API key with the necessary permissions to make the request.
  The required access control list (ACL) to make a request is listed in each endpoint's reference.

You can find your application ID and API key in the [Algolia dashboard](https://dashboard.algolia.com/account/api-keys).

## Request format

Depending on the endpoint, request bodies are either JSON objects or arrays of JSON objects.

## Parameters

Parameters are passed as query parameters for GET and DELETE requests,
and in the request body for POST and PUT requests.

Query parameters must be [URL-encoded](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding).
Non-ASCII characters must be UTF-8 encoded.
Plus characters (`+`) are interpreted as spaces.
Arrays as query parameters must be one of:

- A comma-separated string: `attributesToRetrieve=title,description`
- A URL-encoded JSON array: `attributesToRetrieve=%5B%22title%22,%22description%22%D`

## Response status and errors

The Search API returns JSON responses.
Since JSON doesn't guarantee any specific ordering, don't rely on the order of attributes in the API response.

Successful responses return `2xx` statuses. Client errors return `4xx` statuses. Server errors return `5xx` statuses.
Error responses have a `message` property with more information.

## Request identifiers

Every response includes a `Correlation-ID` header that identifies the request in Algolia's logs.
When contacting the Algolia support team about a specific request, include this identifier in your ticket.

To tag requests with your own identifier, send a `Request-ID` header with exactly 11 alphanumeric characters.
Clusters that support it embed the identifier at the end of the `Correlation-ID`,
so all attempts of a retried operation can be found by searching for those characters.
Headers that don't match the expected format are ignored.

Don't use the `Correlation-ID` as a unique key: retried requests may receive the same identifier.

## Version

The current version of the Search API is version 1, indicated by the `/1/` in each endpoint's URL.

Base URLs:

* <a href="https://ALGOLIA_APPLICATION_ID.algolia.net">https://ALGOLIA_APPLICATION_ID.algolia.net</a>

* <a href="https://ALGOLIA_APPLICATION_ID-1.algolianet.com">https://ALGOLIA_APPLICATION_ID-1.algolianet.com</a>

* <a href="https://ALGOLIA_APPLICATION_ID-2.algolianet.com">https://ALGOLIA_APPLICATION_ID-2.algolianet.com</a>

* <a href="https://ALGOLIA_APPLICATION_ID-3.algolianet.com">https://ALGOLIA_APPLICATION_ID-3.algolianet.com</a>

* <a href="https://ALGOLIA_APPLICATION_ID-dsn.algolia.net">https://ALGOLIA_APPLICATION_ID-dsn.algolia.net</a>

# Authentication

* API Key (appId)
    - Parameter Name: **x-algolia-application-id**, in: header. Your Algolia application ID.

* API Key (apiKey)
    - Parameter Name: **x-algolia-api-key**, in: header. Your Algolia API key with the necessary permissions to make the request.
Permissions are controlled through access control lists (ACL) and access restrictions.
The required ACL to make a request is listed in each endpoint's reference.

<h1 id="search-api-search">search</h1>

## Send requests to the Algolia REST API

<a id="opIdcustomGet"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/%2Fkeys' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /{path}`

This method lets you send requests to the Algolia REST API.

<h3 id="send-requests-to-the-algolia-rest-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path of the endpoint, for example `1/newFeature`.|
|parameters|query|object|false|Query parameters to apply to the current query.|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="send-requests-to-the-algolia-rest-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Send requests to the Algolia REST API

<a id="opIdcustomPut"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/%2Fkeys' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{}'
```

`PUT /{path}`

This method lets you send requests to the Algolia REST API.

> Body parameter

```json
{}
```

<h3 id="send-requests-to-the-algolia-rest-api-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path of the endpoint, for example `1/newFeature`.|
|parameters|query|object|false|Query parameters to apply to the current query.|
|body|body|object|false|Parameters to send with the custom request.|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="send-requests-to-the-algolia-rest-api-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Send requests to the Algolia REST API

<a id="opIdcustomPost"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/%2Fkeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{}'
```

`POST /{path}`

This method lets you send requests to the Algolia REST API.

> Body parameter

```json
{}
```

<h3 id="send-requests-to-the-algolia-rest-api-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path of the endpoint, for example `1/newFeature`.|
|parameters|query|object|false|Query parameters to apply to the current query.|
|body|body|object|false|Parameters to send with the custom request.|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="send-requests-to-the-algolia-rest-api-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Send requests to the Algolia REST API

<a id="opIdcustomDelete"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/%2Fkeys' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`DELETE /{path}`

This method lets you send requests to the Algolia REST API.

<h3 id="send-requests-to-the-algolia-rest-api-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path of the endpoint, for example `1/newFeature`.|
|parameters|query|object|false|Query parameters to apply to the current query.|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="send-requests-to-the-algolia-rest-api-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Search an index

<a id="opIdsearchSingleIndex"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/query' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "params": "hitsPerPage=2&getRankingInfo=1"
  }'
```

`POST /1/indexes/{indexName}/query`

Searches a single index and returns matching search results as hits.

This method lets you retrieve up to 1,000 hits.
If you need more, use the [`browse` operation](https://www.algolia.com/doc/rest-api/search/browse) or increase the `paginatedLimitedTo` index setting.


> Body parameter

```json
{
  "params": "hitsPerPage=2&getRankingInfo=1"
}
```

<h3 id="search-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|body|body|[searchParams](#schemasearchparams)|false|none|
|» *oneOf*|body|[searchParamsString](#schemasearchparamsstring)|false|Search parameters as query string.|
|» *oneOf*|body|[searchParamsObject](#schemasearchparamsobject)|false|Each parameter value, including the `query` must not be larger than 512 bytes.|

> Example responses

> 200 Response

```json
{
  "abTestID": 0,
  "abTestVariantID": 1,
  "aroundLatLng": "40.71,-74.01",
  "automaticRadius": "string",
  "exhaustive": {
    "facetsCount": true,
    "facetValues": true,
    "nbHits": true,
    "rulesMatch": true,
    "typo": true
  },
  "appliedRules": [
    {}
  ],
  "exhaustiveFacetsCount": true,
  "exhaustiveNbHits": true,
  "exhaustiveTypo": true,
  "facets": {
    "category": {
      "food": 1,
      "tech": 42
    }
  },
  "facets_stats": {
    "property1": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    },
    "property2": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    }
  },
  "index": "indexName",
  "indexUsed": "indexNameAlt",
  "message": "string",
  "nbSortedHits": 20,
  "parsedQuery": "george clo",
  "processingTimeMS": 20,
  "processingTimingsMS": {},
  "queryAfterRemoval": "string",
  "redirect": {
    "index": [
      {
        "source": "string",
        "dest": "string",
        "reason": "string",
        "succeed": true,
        "data": {
          "ruleObjectID": "string"
        }
      }
    ]
  },
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "serverTimeMS": 20,
  "serverUsed": "c2-uk-3.algolia.net",
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "queryID": "a00dbc80a8d13c4565a442e7e2dca80a",
  "_automaticInsights": true,
  "page": 0,
  "nbHits": 20,
  "nbPages": 1,
  "hitsPerPage": 20,
  "hits": [
    {
      "objectID": "test-record-123",
      "_highlightResult": {
        "property1": {},
        "property2": {}
      },
      "_snippetResult": {
        "property1": {},
        "property2": {}
      },
      "_rankingInfo": {
        "filters": 0,
        "firstMatchedWord": 0,
        "geoDistance": 0,
        "geoPrecision": 1,
        "matchedGeoLocation": {
          "lat": 0,
          "lng": 0,
          "distance": 0
        },
        "personalization": {
          "filtersScore": 0,
          "rankingScore": 0,
          "score": 0
        },
        "nbExactWords": 0,
        "nbTypos": 0,
        "promoted": true,
        "proximityDistance": 0,
        "userScore": 0,
        "words": 1,
        "promotedByReRanking": true
      },
      "_distinctSeqID": 0
    }
  ],
  "query": "",
  "params": "query=a&hitsPerPage=20",
  "extensions": {
    "queryCategorization": {
      "normalizedQuery": "string",
      "count": 0,
      "type": "narrow",
      "categories": [
        {
          "bin": "certain",
          "hierarchyPath": [
            {
              "facetName": "string",
              "facetValue": "string",
              "depth": 0
            }
          ]
        }
      ],
      "autofiltering": {
        "enabled": true,
        "maxDepth": 0,
        "facetFilters": [
          "string"
        ],
        "optionalFilters": [
          "string"
        ]
      }
    }
  }
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="search-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[searchResponse](#schemasearchresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Search multiple queries

<a id="opIdsearch"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/*/queries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "requests": [
      {
        "params": "hitsPerPage=2&getRankingInfo=1",
        "indexName": "products",
        "type": "default",
        "extensions": {
          "queryCategorization": {
            "enableCategoriesRetrieval": false,
            "enableAutoFiltering": false
          }
        }
      }
    ],
    "strategy": "none"
  }'
```

`POST /1/indexes/*/queries`

Runs multiple search queries against one or more indices in a single API request.

Use cases include:

- Searching different indices, such as products and marketing content.
- Run multiple queries on the same index with different parameters or filters.

If you know the expected result type, use the `searchForHits` or `searchForFacets` helper to simplify the response format.


> Body parameter

```json
{
  "requests": [
    {
      "params": "hitsPerPage=2&getRankingInfo=1",
      "indexName": "products",
      "type": "default",
      "extensions": {
        "queryCategorization": {
          "enableCategoriesRetrieval": false,
          "enableAutoFiltering": false
        }
      }
    }
  ],
  "strategy": "none"
}
```

<h3 id="search-multiple-queries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Multi-query search request body. Results are returned in the same order as the requests.|
|» requests|body|[[SearchQuery](#schemasearchquery)]|true|none|
|» strategy|body|[searchStrategy](#schemasearchstrategy)|false|Strategy for multiple search queries:<br><br>- `none`. Run all queries.<br>- `stopIfEnoughMatches`. Run the queries one by one, stopping as soon as a query matches at least the `hitsPerPage` number of results.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» strategy|none|
|» strategy|stopIfEnoughMatches|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "abTestID": 0,
      "abTestVariantID": 1,
      "aroundLatLng": "40.71,-74.01",
      "automaticRadius": "string",
      "exhaustive": {
        "facetsCount": true,
        "facetValues": true,
        "nbHits": true,
        "rulesMatch": true,
        "typo": true
      },
      "appliedRules": [
        {}
      ],
      "exhaustiveFacetsCount": true,
      "exhaustiveNbHits": true,
      "exhaustiveTypo": true,
      "facets": {
        "category": {
          "food": 1,
          "tech": 42
        }
      },
      "facets_stats": {
        "property1": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "sum": 0
        },
        "property2": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "sum": 0
        }
      },
      "index": "indexName",
      "indexUsed": "indexNameAlt",
      "message": "string",
      "nbSortedHits": 20,
      "parsedQuery": "george clo",
      "processingTimeMS": 20,
      "processingTimingsMS": {},
      "queryAfterRemoval": "string",
      "redirect": {
        "index": [
          {
            "source": "string",
            "dest": "string",
            "reason": "string",
            "succeed": true,
            "data": {
              "ruleObjectID": "string"
            }
          }
        ]
      },
      "renderingContent": {
        "facetOrdering": {
          "facets": {
            "order": [
              "string"
            ]
          },
          "values": {
            "property1": {
              "order": [
                "string"
              ],
              "sortRemainingBy": "count",
              "hide": [
                "string"
              ]
            },
            "property2": {
              "order": [
                "string"
              ],
              "sortRemainingBy": "count",
              "hide": [
                "string"
              ]
            }
          }
        },
        "redirect": {
          "url": "string"
        },
        "widgets": {
          "banners": [
            {
              "image": {
                "urls": [
                  {
                    "url": "string"
                  }
                ],
                "title": "string"
              },
              "link": {
                "url": "string"
              }
            }
          ],
          "resultCard": {
            "enabled": true
          }
        }
      },
      "serverTimeMS": 20,
      "serverUsed": "c2-uk-3.algolia.net",
      "userData": {
        "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
        "pluginVersion": "1.6.0"
      },
      "queryID": "a00dbc80a8d13c4565a442e7e2dca80a",
      "_automaticInsights": true,
      "page": 0,
      "nbHits": 20,
      "nbPages": 1,
      "hitsPerPage": 20,
      "hits": [
        {
          "objectID": "test-record-123",
          "_highlightResult": {
            "property1": {},
            "property2": {}
          },
          "_snippetResult": {
            "property1": {},
            "property2": {}
          },
          "_rankingInfo": {
            "filters": 0,
            "firstMatchedWord": 0,
            "geoDistance": 0,
            "geoPrecision": 1,
            "matchedGeoLocation": {
              "lat": 0,
              "lng": 0,
              "distance": 0
            },
            "personalization": {
              "filtersScore": 0,
              "rankingScore": 0,
              "score": 0
            },
            "nbExactWords": 0,
            "nbTypos": 0,
            "promoted": true,
            "proximityDistance": 0,
            "userScore": 0,
            "words": 1,
            "promotedByReRanking": true
          },
          "_distinctSeqID": 0
        }
      ],
      "query": "",
      "params": "query=a&hitsPerPage=20",
      "extensions": {
        "queryCategorization": {
          "normalizedQuery": "string",
          "count": 0,
          "type": "narrow",
          "categories": [
            {
              "bin": "certain",
              "hierarchyPath": [
                {
                  "facetName": "string",
                  "facetValue": "string",
                  "depth": 0
                }
              ]
            }
          ],
          "autofiltering": {
            "enabled": true,
            "maxDepth": 0,
            "facetFilters": [
              "string"
            ],
            "optionalFilters": [
              "string"
            ]
          }
        }
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="search-multiple-queries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="search-multiple-queries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[searchResult](#schemasearchresult)]|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Search for facet values

<a id="opIdsearchForFacetValues"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/facets/string/query' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "params": "hitsPerPage=2&getRankingInfo=1",
    "facetQuery": "george",
    "maxFacetHits": 10
  }'
```

`POST /1/indexes/{indexName}/facets/{facetName}/query`

Searches for values of a specified facet attribute.

- By default, facet values are sorted by decreasing count.
  You can adjust this with the `sortFacetValueBy` parameter.
- Searching for facet values doesn't work if you have **more than 65 searchable facets and searchable attributes combined**.


> Body parameter

```json
{
  "params": "hitsPerPage=2&getRankingInfo=1",
  "facetQuery": "george",
  "maxFacetHits": 10
}
```

<h3 id="search-for-facet-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|facetName|path|string|true|Facet attribute in which to search for values.<br><br>This attribute must be included in the `attributesForFaceting` index setting with the `searchable()` modifier.<br>|
|body|body|object|false|none|
|» params|body|[paramsAsString](#schemaparamsasstring)|false|Search parameters as a URL-encoded query string.|
|» facetQuery|body|[facetQuery](#schemafacetquery)|false|Text to search inside the facet's values.|
|» maxFacetHits|body|[maxFacetHits](#schemamaxfacethits)|false|Maximum number of facet values to return when [searching for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).|

> Example responses

> 200 Response

```json
{
  "facetHits": [
    {
      "value": "Mobile phone",
      "highlighted": "<em>George</em> <em>Clo</em>oney",
      "count": 0
    }
  ],
  "exhaustiveFacetsCount": true,
  "processingTimeMS": 20
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="search-for-facet-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[searchForFacetValuesResponse](#schemasearchforfacetvaluesresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Browse for records

<a id="opIdbrowse"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/browse' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "query": "",
    "similarQuery": "comedy drama crime Macy Buscemi",
    "filters": "(category:Book OR category:Ebook) AND _tags:published",
    "facetFilters": [
      [
        "category:Book",
        "category:-Movie"
      ],
      "author:John Doe"
    ],
    "optionalFilters": [
      "category:Book",
      "author:John Doe"
    ],
    "numericFilters": [
      [
        "inStock = 1",
        "deliveryDate < 1441755506"
      ],
      "price < 1000"
    ],
    "tagFilters": [
      [
        "Book",
        "Movie"
      ],
      "SciFi"
    ],
    "sumOrFiltersScores": false,
    "restrictSearchableAttributes": [
      "title",
      "author"
    ],
    "facets": [
      "*"
    ],
    "facetingAfterDistinct": false,
    "page": 0,
    "offset": 0,
    "length": 0,
    "aroundLatLng": "40.71,-74.01",
    "aroundLatLngViaIP": false,
    "aroundRadius": 1,
    "aroundPrecision": 10,
    "minimumAroundRadius": 1,
    "insideBoundingBox": "string",
    "insidePolygon": [
      [
        47.3165,
        4.9665,
        47.3424,
        5.0201,
        47.32,
        4.9
      ],
      [
        40.9234,
        2.1185,
        38.643,
        1.9916,
        39.2587,
        2.0104
      ]
    ],
    "naturalLanguages": [],
    "ruleContexts": [
      "mobile"
    ],
    "personalizationImpact": 100,
    "userToken": "test-user-123",
    "getRankingInfo": false,
    "synonyms": true,
    "clickAnalytics": false,
    "analytics": true,
    "analyticsTags": [],
    "percentileComputation": true,
    "enableABTest": true,
    "attributesToRetrieve": [
      "author",
      "title",
      "content"
    ],
    "ranking": [
      "typo",
      "geo",
      "words",
      "filters",
      "proximity",
      "attribute",
      "exact",
      "custom"
    ],
    "relevancyStrictness": 90,
    "attributesToHighlight": [
      "author",
      "title",
      "conten",
      "content"
    ],
    "attributesToSnippet": [
      "content:80",
      "description"
    ],
    "highlightPreTag": "<em>",
    "highlightPostTag": "</em>",
    "snippetEllipsisText": "…",
    "restrictHighlightAndSnippetArrays": false,
    "hitsPerPage": 20,
    "minWordSizefor1Typo": 4,
    "minWordSizefor2Typos": 8,
    "typoTolerance": true,
    "allowTyposOnNumericTokens": true,
    "disableTypoToleranceOnAttributes": [
      "sku"
    ],
    "ignorePlurals": [
      "ca",
      "es"
    ],
    "removeStopWords": [
      "ca",
      "es"
    ],
    "queryLanguages": [
      "es"
    ],
    "decompoundQuery": true,
    "enableRules": true,
    "enablePersonalization": false,
    "queryType": "prefixLast",
    "removeWordsIfNoResults": "firstWords",
    "mode": "keywordSearch",
    "semanticSearch": {
      "eventSources": [
        "string"
      ]
    },
    "advancedSyntax": false,
    "optionalWords": "string",
    "disableExactOnAttributes": [
      "description"
    ],
    "exactOnSingleWordQuery": "attribute",
    "alternativesAsExact": [
      "ignorePlurals",
      "singleWordSynonym"
    ],
    "advancedSyntaxFeatures": [
      "exactPhrase",
      "excludeWords"
    ],
    "distinct": 1,
    "replaceSynonymsInHighlight": false,
    "minProximity": 1,
    "responseFields": [
      "*"
    ],
    "maxValuesPerFacet": 100,
    "sortFacetValuesBy": "count",
    "attributeCriteriaComputedByMinProximity": false,
    "attributeCriteriaComputedBy": "best",
    "renderingContent": {
      "facetOrdering": {
        "facets": {
          "order": [
            "string"
          ]
        },
        "values": {
          "property1": {
            "order": [
              "string"
            ],
            "sortRemainingBy": "count",
            "hide": [
              "string"
            ]
          },
          "property2": {
            "order": [
              "string"
            ],
            "sortRemainingBy": "count",
            "hide": [
              "string"
            ]
          }
        }
      },
      "redirect": {
        "url": "string"
      },
      "widgets": {
        "banners": [
          {
            "image": {
              "urls": [
                {
                  "url": "string"
                }
              ],
              "title": "string"
            },
            "link": {
              "url": "string"
            }
          }
        ],
        "resultCard": {
          "enabled": true
        }
      }
    },
    "enableReRanking": true,
    "reRankingApplyFilter": [
      {}
    ],
    "cursor": "jMDY3M2MwM2QwMWUxMmQwYWI0ZTN"
  }'
```

`POST /1/indexes/{indexName}/browse`

Retrieves records from an index, up to 1,000 per request.

Searching returns _hits_ (records augmented with highlighting and ranking details).
Browsing returns matching records only.
Use browse to export your indices.

- The Analytics API doesn't collect data when using `browse`.
- Records are ranked by attributes and custom ranking.
- There's no ranking for typo tolerance, number of matched words, proximity, or geo distance.

Browse requests automatically apply these settings:

- `advancedSyntax`: `false`
- `attributesToHighlight`: `[]`
- `attributesToSnippet`: `[]`
- `distinct`: `false`
- `enablePersonalization`: `false`
- `enableRules`: `false`
- `facets`: `[]`
- `getRankingInfo`: `false`
- `ignorePlurals`: `false`
- `optionalFilters`: `[]`
- `typoTolerance`: `true` or `false` (`min` and `strict` evaluate to `true`)

If you send these parameters with your browse requests, they're ignored.


> Body parameter

```json
{
  "query": "",
  "similarQuery": "comedy drama crime Macy Buscemi",
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "optionalFilters": [
    "category:Book",
    "author:John Doe"
  ],
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "sumOrFiltersScores": false,
  "restrictSearchableAttributes": [
    "title",
    "author"
  ],
  "facets": [
    "*"
  ],
  "facetingAfterDistinct": false,
  "page": 0,
  "offset": 0,
  "length": 0,
  "aroundLatLng": "40.71,-74.01",
  "aroundLatLngViaIP": false,
  "aroundRadius": 1,
  "aroundPrecision": 10,
  "minimumAroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ],
  "naturalLanguages": [],
  "ruleContexts": [
    "mobile"
  ],
  "personalizationImpact": 100,
  "userToken": "test-user-123",
  "getRankingInfo": false,
  "synonyms": true,
  "clickAnalytics": false,
  "analytics": true,
  "analyticsTags": [],
  "percentileComputation": true,
  "enableABTest": true,
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ],
  "cursor": "jMDY3M2MwM2QwMWUxMmQwYWI0ZTN"
}
```

<h3 id="browse-for-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|body|body|[browseParams](#schemabrowseparams)|false|none|
|» *oneOf*|body|[browseParamsObject](#schemabrowseparamsobject)|false|none|
|» *oneOf*|body|[searchParamsString](#schemasearchparamsstring)|false|Search parameters as query string.|

> Example responses

> 200 Response

```json
{
  "abTestID": 0,
  "abTestVariantID": 1,
  "aroundLatLng": "40.71,-74.01",
  "automaticRadius": "string",
  "exhaustive": {
    "facetsCount": true,
    "facetValues": true,
    "nbHits": true,
    "rulesMatch": true,
    "typo": true
  },
  "appliedRules": [
    {}
  ],
  "exhaustiveFacetsCount": true,
  "exhaustiveNbHits": true,
  "exhaustiveTypo": true,
  "facets": {
    "category": {
      "food": 1,
      "tech": 42
    }
  },
  "facets_stats": {
    "property1": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    },
    "property2": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    }
  },
  "index": "indexName",
  "indexUsed": "indexNameAlt",
  "message": "string",
  "nbSortedHits": 20,
  "parsedQuery": "george clo",
  "processingTimeMS": 20,
  "processingTimingsMS": {},
  "queryAfterRemoval": "string",
  "redirect": {
    "index": [
      {
        "source": "string",
        "dest": "string",
        "reason": "string",
        "succeed": true,
        "data": {
          "ruleObjectID": "string"
        }
      }
    ]
  },
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "serverTimeMS": 20,
  "serverUsed": "c2-uk-3.algolia.net",
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "queryID": "a00dbc80a8d13c4565a442e7e2dca80a",
  "_automaticInsights": true,
  "page": 0,
  "nbHits": 20,
  "nbPages": 1,
  "hitsPerPage": 20,
  "hits": [
    {
      "objectID": "test-record-123",
      "_highlightResult": {
        "property1": {},
        "property2": {}
      },
      "_snippetResult": {
        "property1": {},
        "property2": {}
      },
      "_rankingInfo": {
        "filters": 0,
        "firstMatchedWord": 0,
        "geoDistance": 0,
        "geoPrecision": 1,
        "matchedGeoLocation": {
          "lat": 0,
          "lng": 0,
          "distance": 0
        },
        "personalization": {
          "filtersScore": 0,
          "rankingScore": 0,
          "score": 0
        },
        "nbExactWords": 0,
        "nbTypos": 0,
        "promoted": true,
        "proximityDistance": 0,
        "userScore": 0,
        "words": 1,
        "promotedByReRanking": true
      },
      "_distinctSeqID": 0
    }
  ],
  "query": "",
  "params": "query=a&hitsPerPage=20",
  "extensions": {
    "queryCategorization": {
      "normalizedQuery": "string",
      "count": 0,
      "type": "narrow",
      "categories": [
        {
          "bin": "certain",
          "hierarchyPath": [
            {
              "facetName": "string",
              "facetValue": "string",
              "depth": 0
            }
          ]
        }
      ],
      "autofiltering": {
        "enabled": true,
        "maxDepth": 0,
        "facetFilters": [
          "string"
        ],
        "optionalFilters": [
          "string"
        ]
      }
    }
  },
  "cursor": "jMDY3M2MwM2QwMWUxMmQwYWI0ZTN"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="browse-for-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[browseResponse](#schemabrowseresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Add a new record (with auto-generated object ID)

<a id="opIdsaveObject"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "objectID": "blackTShirt",
    "name": "Black T-shirt",
    "color": "#000000"
  }'
```

`POST /1/indexes/{indexName}`

Adds a record to an index or replaces it.

- If the record doesn't have an object ID, a new record with an auto-generated object ID is added to your index.
- If a record with the specified object ID exists, the existing record is replaced.
- If a record with the specified object ID doesn't exist, a new record is added to your index.
- If you add a record to an index that doesn't exist yet, a new index is created.

To update _some_ attributes of a record, use the [`partial` operation](https://www.algolia.com/doc/rest-api/search/partial-update-object).
To add, update, or replace multiple records, use the [`batch` operation](https://www.algolia.com/doc/rest-api/search/batch).

This operation is subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


> Body parameter

```json
{
  "objectID": "blackTShirt",
  "name": "Black T-shirt",
  "color": "#000000"
}
```

<h3 id="add-a-new-record-with-auto-generated-object-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|body|body|object|true|The record. A schemaless object with attributes that are useful in the context of search and discovery.|

> Example responses

> 201 Response

```json
{
  "createdAt": "2023-07-04T12:49:15Z",
  "taskID": 1514562690001,
  "objectID": "test-record-123"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="add-a-new-record-with-auto-generated-object-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="add-a-new-record-with-auto-generated-object-id-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|[createdAt](#schemacreatedat)|true|none|Date and time when the object was created, in RFC 3339 format.|
|taskID|[taskID](#schemataskid)|true|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|objectID|[objectID](#schemaobjectid)|false|none|Unique record identifier.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete an index

<a id="opIddeleteIndex"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`DELETE /1/indexes/{indexName}`

Deletes an index and all its settings.

- Deleting an index doesn't delete its analytics data.
- If you try to delete a non-existing index, the operation is ignored without warning.
- If the index you want to delete has replica indices, the replicas become independent indices.
- If the index you want to delete is a replica index, you must first unlink it from its primary index before you can delete it.
  For more information, see [Delete replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/deleting-replicas).


<a href="https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices">Delete indices.</a>

<h3 id="delete-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "deletedAt": "2023-06-27T14:42:38.831Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="delete-an-index-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|[taskID](#schemataskid)|true|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|deletedAt|[deletedAt](#schemadeletedat)|true|none|Date and time when the object was deleted, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve a record

<a id="opIdgetObject"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/test-record-123' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/indexes/{indexName}/{objectID}`

Retrieves one record by its object ID.

To retrieve more than one record, use the [`objects` operation](https://www.algolia.com/doc/rest-api/search/get-objects).


<h3 id="retrieve-a-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|[objectID](#schemaobjectid)|true|Unique record identifier.|
|attributesToRetrieve|query|[string]|false|Attributes to include with the records in the response.<br>This is useful to reduce the size of the API response.<br>By default, all retrievable attributes are returned.<br><br>`objectID` is always retrieved.<br><br>Attributes included in `unretrievableAttributes`<br>won't be retrieved unless the request is authenticated with the admin API key.<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-a-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Add or replace a record

<a id="opIdaddOrUpdateObject"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/test-record-123' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "objectID": "blackTShirt",
    "name": "Black T-shirt",
    "color": "#000000"
  }'
```

`PUT /1/indexes/{indexName}/{objectID}`

If a record with the specified object ID exists, the existing record is replaced.
Otherwise, a new record is added to the index.

If you want to use auto-generated object IDs, use the [`saveObject` operation](https://www.algolia.com/doc/rest-api/search/save-object).
To update _some_ attributes of an existing record, use the [`partial` operation](https://www.algolia.com/doc/rest-api/search/partial-update-object) instead.
To add, update, or replace multiple records, use the [`batch` operation](https://www.algolia.com/doc/rest-api/search/batch).


> Body parameter

```json
{
  "objectID": "blackTShirt",
  "name": "Black T-shirt",
  "color": "#000000"
}
```

<h3 id="add-or-replace-a-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|[objectID](#schemaobjectid)|true|Unique record identifier.|
|body|body|object|true|The record. A schemaless object with attributes that are useful in the context of search and discovery.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z",
  "objectID": "test-record-123"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="add-or-replace-a-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="add-or-replace-a-record-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|[taskID](#schemataskid)|false|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|updatedAt|[updatedAt](#schemaupdatedat)|false|none|Date and time when the object was updated, in RFC 3339 format.|
|objectID|[objectID](#schemaobjectid)|false|none|Unique record identifier.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete a record

<a id="opIddeleteObject"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/test-record-123' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`DELETE /1/indexes/{indexName}/{objectID}`

Deletes a record by its object ID.

To delete more than one record, use the [`batch` operation](https://www.algolia.com/doc/rest-api/search/batch).
To delete records matching a query, use the [`deleteBy` operation](https://www.algolia.com/doc/rest-api/search/delete-by).


<h3 id="delete-a-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|[objectID](#schemaobjectid)|true|Unique record identifier.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "deletedAt": "2023-06-27T14:42:38.831Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-a-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="delete-a-record-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|[taskID](#schemataskid)|true|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|deletedAt|[deletedAt](#schemadeletedat)|true|none|Date and time when the object was deleted, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete records matching a filter

<a id="opIddeleteBy"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/deleteByQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "facetFilters": [
      [
        "category:Book",
        "category:-Movie"
      ],
      "author:John Doe"
    ],
    "filters": "(category:Book OR category:Ebook) AND _tags:published",
    "numericFilters": [
      [
        "inStock = 1",
        "deliveryDate < 1441755506"
      ],
      "price < 1000"
    ],
    "tagFilters": [
      [
        "Book",
        "Movie"
      ],
      "SciFi"
    ],
    "aroundLatLng": "40.71,-74.01",
    "aroundRadius": 1,
    "insideBoundingBox": "string",
    "insidePolygon": [
      [
        47.3165,
        4.9665,
        47.3424,
        5.0201,
        47.32,
        4.9
      ],
      [
        40.9234,
        2.1185,
        38.643,
        1.9916,
        39.2587,
        2.0104
      ]
    ]
  }'
```

`POST /1/indexes/{indexName}/deleteByQuery`

This operation doesn't accept empty filters.

This operation is resource-intensive.
Use it only if you can't get the object IDs of the records you want to delete.
It's more efficient to get a list of object IDs with the [`browse` operation](https://www.algolia.com/doc/rest-api/search/browse),
and then delete the records using the [`batch` operation](https://www.algolia.com/doc/rest-api/search/batch).

This operation is subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


<a href="https://support.algolia.com/hc/articles/16385098766353-Should-I-use-the-deleteBy-method-for-deleting-records-that-match-a-query">Should I use the deleteBy method for deleting records.</a>

> Body parameter

```json
{
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "aroundLatLng": "40.71,-74.01",
  "aroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ]
}
```

<h3 id="delete-records-matching-a-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|body|body|[deleteByParams](#schemadeletebyparams)|true|none|
|» facetFilters|body|[facetFilters](#schemafacetfilters)|false|Filter the search by facet values, so that only records with the same facet values are retrieved.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>- `[filter1, filter2]` is interpreted as `filter1 AND filter2`.<br>- `[[filter1, filter2], filter3]` is interpreted as `filter1 OR filter2 AND filter3`.<br>- `facet:-value` is interpreted as `NOT facet:value`.<br><br>While it's best to avoid attributes that start with a `-`, you can still filter them by escaping with a backslash:<br>`facet:\-value`.<br>|
|» filters|body|[filters](#schemafilters)|false|Filter expression to only include items that match the filter criteria in the response.<br><br>You can use these filter expressions:<br><br>- **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>- **Ranges.** `<facet>:<lower> TO <upper>`, where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive).<br>- **Facet filters.** `<facet>:<value>`, where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value.<br>- **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive).<br>- **Boolean filters.** `<facet>: true \| false`.<br><br>You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:<br><br>- You can only combine filters of the same type with `OR`.<br>  **Not supported:** `facet:value OR num > 3`.<br>- You can't use `NOT` with combinations of filters.<br>  **Not supported:** `NOT(facet:value OR facet:value)`<br>- You can't combine conjunctions (`AND`) with `OR`.<br>  **Not supported:** `facet:value OR (facet:value AND facet:value)`<br><br>Use quotes if the facet attribute name or facet value contains spaces, keywords (`OR`, `AND`, `NOT`), or quotes.<br>If a facet attribute is an array, the filter matches if it matches at least one element of the array.<br><br>For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering).<br>|
|» numericFilters|body|[numericFilters](#schemanumericfilters)|false|Filter by numeric facets.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>You can use numeric comparison operators: `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>Comparisons are precise up to 3 decimals.<br>You can also provide ranges: `facet:<lower> TO <upper>`. The range includes the lower and upper boundaries.<br>The same combination rules apply as for `facetFilters`.<br>|
|» tagFilters|body|[tagFilters](#schematagfilters)|false|Filter the search by values of the special `_tags` attribute.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>Different from regular facets, `_tags` can only be used for filtering (including or excluding records).<br>You won't get a facet count.<br>The same combination and escaping rules apply as for `facetFilters`.<br>|
|» aroundLatLng|body|[aroundLatLng](#schemaaroundlatlng)|false|Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.<br><br>Only records included within a circle around this central location are included in the results.<br>The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings.<br>This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.<br>|
|» aroundRadius|body|[aroundRadius](#schemaaroundradius)|false|Maximum radius for a search around a central location.<br><br>This parameter works in combination with the `aroundLatLng` and `aroundLatLngViaIP` parameters.<br>By default, the search radius is determined automatically from the density of hits around the central location.<br>The search radius is small if there are many hits close to the central coordinates.<br>|
|» insideBoundingBox|body|[insideBoundingBox](#schemainsideboundingbox)|false|none|
|» insidePolygon|body|[insidePolygon](#schemainsidepolygon)|false|Coordinates of a polygon in which to search.<br><br>Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude.<br>Provide multiple polygons as nested arrays.<br>For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).<br>This parameter is ignored if you also specify `insideBoundingBox`.<br>|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-records-matching-a-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete all records from an index

<a id="opIdclearObjects"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/clear' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`POST /1/indexes/{indexName}/clear`

Deletes only the records from an index while keeping settings, synonyms, and rules.
This operation is resource-intensive and subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


<h3 id="delete-all-records-from-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-all-records-from-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Add or update attributes

<a id="opIdpartialUpdateObject"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/test-record-123/partial' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{}'
```

`POST /1/indexes/{indexName}/{objectID}/partial`

Adds new attributes to a record, or updates existing ones.

- If a record with the specified object ID doesn't exist,
  a new record is added to the index **if** `createIfNotExists` is true.
- If the index doesn't exist yet, this method creates a new index.
- Use first-level attributes only. Nested attributes aren't supported.
  If you specify a nested attribute, this operation replaces its first-level ancestor.

To update attributes without replacing the full record, use these built-in operations.
These operations are useful when the initial data isn't available.

- `Increment`: increment a numeric attribute.
- `Decrement`: decrement a numeric attribute.
- `Add`: append a number or string element to an array attribute.
- `Remove`: remove all matching number or string elements from an array attribute made of numbers or strings.
- `AddUnique`: add a number or string element to an array attribute made of numbers or strings only if it's not already present.
- `IncrementFrom`: increment a numeric integer attribute only if the provided value matches the current value. Otherwise, the update is ignored.
  Example: If you pass an `IncrementFrom` value of 2 for the `version` attribute but the current value is 1, the API ignores the update.
  If the object doesn't exist, the API only creates it if you pass an `IncrementFrom` value of 0.
- `IncrementSet`: increment a numeric integer attribute only if the provided value is greater than the current value. Otherwise, the update is ignored.
  Example: If you pass an `IncrementSet` value of 2 for the `version` attribute and the current value is 1, the API updates the object.
  If the object doesn't exist yet, the API only creates it if you pass an `IncrementSet` value greater than 0.

Specify an operation by providing an object with the attribute to update as the key and its value as an object with these properties:

- `_operation`: the operation to apply on the attribute.
- `value`: the right-hand side argument to the operation, for example, increment or decrement step, or a value to add or remove.

When updating multiple attributes or using multiple operations targeting the same record, use a single partial update for faster processing.

This operation is subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


> Body parameter

```json
{}
```

<h3 id="add-or-update-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|[objectID](#schemaobjectid)|true|Unique record identifier.|
|createIfNotExists|query|boolean|false|Whether to create a new record if it doesn't exist.|
|body|body|object|true|Attributes with their values.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z",
  "objectID": "test-record-123"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="add-or-update-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="add-or-update-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|[taskID](#schemataskid)|false|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|updatedAt|[updatedAt](#schemaupdatedat)|false|none|Date and time when the object was updated, in RFC 3339 format.|
|objectID|[objectID](#schemaobjectid)|false|none|Unique record identifier.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Batch indexing operations on one index

<a id="opIdbatch"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/batch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "requests": [
      {
        "action": "addObject",
        "body": {
          "name": "Betty Jane McCamey",
          "company": "Vita Foods Inc.",
          "email": "betty@mccamey.com"
        }
      },
      {
        "action": "addObject",
        "body": {
          "name": "Gayla geimer",
          "company": "Ortman McCain Co.",
          "email": "gayla@geimer.com"
        }
      }
    ]
  }'
```

`POST /1/indexes/{indexName}/batch`

Adds, updates, or deletes records in one index with a single API request.

Batching index updates reduces latency and increases data integrity.

- Actions are applied in the order they're specified.
- Actions are equivalent to the individual API requests of the same name.

This operation is subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


> Body parameter

```json
{
  "requests": [
    {
      "action": "addObject",
      "body": {
        "name": "Betty Jane McCamey",
        "company": "Vita Foods Inc.",
        "email": "betty@mccamey.com"
      }
    },
    {
      "action": "addObject",
      "body": {
        "name": "Gayla geimer",
        "company": "Ortman McCain Co.",
        "email": "gayla@geimer.com"
      }
    }
  ]
}
```

<h3 id="batch-indexing-operations-on-one-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|body|body|[batchWriteParams](#schemabatchwriteparams)|true|none|
|» requests|body|[object]|true|none|
|» » action|body|[action](#schemaaction)|true|Which indexing operation to perform:<br><br>- `addObject`: adds records to an index.<br>   Equivalent to the "Add a new record (with auto-generated object ID)" operation.<br>- `updateObject`: adds or replaces records in an index.<br>   Equivalent to the "Add or replace a record" operation.<br>- `partialUpdateObject`: adds or updates attributes within records.<br>   Equivalent to the "Add or update attributes" operation with the `createIfNoExists` parameter set to true.<br>   (If a record with the specified `objectID` doesn't exist in the specified index, this action adds the record to the index).<br>- `partialUpdateObjectNoCreate`: same as `partialUpdateObject`, but with `createIfNoExists` set to false.<br>   (A record isn't added to the index if its `objectID` doesn't exist).<br>- `deleteObject`: delete records from an index.<br>  Equivalent to the "Delete a record" operation.<br>- `delete`. Delete an index. Equivalent to the "Delete an index" operation.<br>- `clear`: delete all records from an index. Equivalent to the "Delete all records from an index operation".<br>|
|» » body|body|object|true|Operation arguments (varies with specified `action`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » action|addObject|
|» » action|updateObject|
|» » action|partialUpdateObject|
|» » action|partialUpdateObjectNoCreate|
|» » action|deleteObject|
|» » action|delete|
|» » action|clear|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "objectIDs": [
    "record-1",
    "record-2"
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="batch-indexing-operations-on-one-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[batchResponse](#schemabatchresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Batch indexing operations on multiple indices

<a id="opIdmultipleBatch"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/*/batch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "requests": [
      {
        "action": "addObject",
        "indexName": "contacts",
        "body": {
          "name": "Betty Jane McCamey",
          "company": "Vita Foods Inc.",
          "email": "betty@mccamey.com"
        }
      },
      {
        "action": "addObject",
        "indexName": "public_contacts",
        "body": {
          "name": "Gayla Geimer",
          "company": "Ortman McCain Co.",
          "email": "gayla@geimer.com"
        }
      }
    ]
  }'
```

`POST /1/indexes/*/batch`

Adds, updates, or deletes records in multiple indices with a single API request.

- Actions are applied in the order they are specified.
- Actions are equivalent to the individual API requests of the same name.

This operation is subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


> Body parameter

```json
{
  "requests": [
    {
      "action": "addObject",
      "indexName": "contacts",
      "body": {
        "name": "Betty Jane McCamey",
        "company": "Vita Foods Inc.",
        "email": "betty@mccamey.com"
      }
    },
    {
      "action": "addObject",
      "indexName": "public_contacts",
      "body": {
        "name": "Gayla Geimer",
        "company": "Ortman McCain Co.",
        "email": "gayla@geimer.com"
      }
    }
  ]
}
```

<h3 id="batch-indexing-operations-on-multiple-indices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» requests|body|[object]|true|none|
|» » action|body|[action](#schemaaction)|true|Which indexing operation to perform:<br><br>- `addObject`: adds records to an index.<br>   Equivalent to the "Add a new record (with auto-generated object ID)" operation.<br>- `updateObject`: adds or replaces records in an index.<br>   Equivalent to the "Add or replace a record" operation.<br>- `partialUpdateObject`: adds or updates attributes within records.<br>   Equivalent to the "Add or update attributes" operation with the `createIfNoExists` parameter set to true.<br>   (If a record with the specified `objectID` doesn't exist in the specified index, this action adds the record to the index).<br>- `partialUpdateObjectNoCreate`: same as `partialUpdateObject`, but with `createIfNoExists` set to false.<br>   (A record isn't added to the index if its `objectID` doesn't exist).<br>- `deleteObject`: delete records from an index.<br>  Equivalent to the "Delete a record" operation.<br>- `delete`. Delete an index. Equivalent to the "Delete an index" operation.<br>- `clear`: delete all records from an index. Equivalent to the "Delete all records from an index operation".<br>|
|» » body|body|object|false|Operation arguments (varies with specified `action`).|
|» » indexName|body|[indexName](#schemaindexname)|true|Index name (case-sensitive).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » action|addObject|
|» » action|updateObject|
|» » action|partialUpdateObject|
|» » action|partialUpdateObjectNoCreate|
|» » action|deleteObject|
|» » action|delete|
|» » action|clear|

> Example responses

> 200 Response

```json
{
  "taskID": {
    "property1": 1514562690001,
    "property2": 1514562690001
  },
  "objectIDs": [
    "record-1",
    "record-2"
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="batch-indexing-operations-on-multiple-indices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="batch-indexing-operations-on-multiple-indices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|object|true|none|Task IDs. One for each index.|
|» **additionalProperties**|[taskID](#schemataskid)|false|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|objectIDs|[objectIDs](#schemaobjectids)|true|none|Unique record identifiers.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve records

<a id="opIdgetObjects"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/*/objects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "requests": [
      {
        "attributesToRetrieve": [
          "author",
          "title",
          "content"
        ],
        "objectID": "product-1",
        "indexName": "books"
      }
    ]
  }'
```

`POST /1/indexes/*/objects`

Retrieves one or more records, potentially from different indices.

Records are returned in the same order as the requests.


> Body parameter

```json
{
  "requests": [
    {
      "attributesToRetrieve": [
        "author",
        "title",
        "content"
      ],
      "objectID": "product-1",
      "indexName": "books"
    }
  ]
}
```

<h3 id="retrieve-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Request object.|
|» requests|body|[object]|true|none|
|» » attributesToRetrieve|body|[string]|false|Attributes to retrieve.<br>If not specified, all retrievable attributes are returned.<br>|
|» » objectID|body|string|true|Object ID for the record to retrieve.|
|» » indexName|body|string|true|Index from which to retrieve the records.|

> Example responses

> 200 Response

```json
{
  "message": "Index INDEX_NAME does not exist.",
  "results": [
    {}
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="retrieve-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|An optional status message.|
|results|[object \| null]|true|none|Retrieved records.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve index settings

<a id="opIdgetSettings"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/settings' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/indexes/{indexName}/settings`

Retrieves an object with non-null index settings.

<h3 id="retrieve-index-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|getVersion|query|integer|false|When set to 2, the endpoint will not include `synonyms` in the response. This parameter is here for backward compatibility.|

> Example responses

> 200 Response

```json
{
  "attributesForFaceting": [
    "author",
    "filterOnly(isbn)",
    "searchable(edition)",
    "afterDistinct(category)",
    "afterDistinct(searchable(publisher))"
  ],
  "replicas": [
    "virtual(prod_products_price_asc)",
    "dev_products_replica"
  ],
  "paginationLimitedTo": 100,
  "unretrievableAttributes": [
    "total_sales"
  ],
  "disableTypoToleranceOnWords": [
    "wheel",
    "1X2BCD"
  ],
  "attributesToTransliterate": [
    "name",
    "description"
  ],
  "camelCaseAttributes": [
    "description"
  ],
  "decompoundedAttributes": {
    "de": [
      "name"
    ]
  },
  "indexLanguages": [
    "ja"
  ],
  "disablePrefixOnAttributes": [
    "sku"
  ],
  "allowCompressionOfIntegerArray": false,
  "numericAttributesForFiltering": [
    "equalOnly(quantity)",
    "popularity"
  ],
  "separatorsToIndex": "+#",
  "searchableAttributes": [
    "title,alternative_title",
    "author",
    "unordered(text)",
    "emails.personal"
  ],
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "customNormalization": {
    "default": {
      "ä": "ae",
      "ü": "ue"
    }
  },
  "attributeForDistinct": "url",
  "maxFacetHits": 10,
  "keepDiacriticsOnCharacters": "øé",
  "customRanking": [
    "desc(popularity)",
    "asc(price)"
  ],
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ],
  "primary": "string"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-index-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[settingsResponse](#schemasettingsresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Update index settings

<a id="opIdsetSettings"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/settings' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "attributesForFaceting": [
      "author",
      "filterOnly(isbn)",
      "searchable(edition)",
      "afterDistinct(category)",
      "afterDistinct(searchable(publisher))"
    ],
    "replicas": [
      "virtual(prod_products_price_asc)",
      "dev_products_replica"
    ],
    "paginationLimitedTo": 100,
    "unretrievableAttributes": [
      "total_sales"
    ],
    "disableTypoToleranceOnWords": [
      "wheel",
      "1X2BCD"
    ],
    "attributesToTransliterate": [
      "name",
      "description"
    ],
    "camelCaseAttributes": [
      "description"
    ],
    "decompoundedAttributes": {
      "de": [
        "name"
      ]
    },
    "indexLanguages": [
      "ja"
    ],
    "disablePrefixOnAttributes": [
      "sku"
    ],
    "allowCompressionOfIntegerArray": false,
    "numericAttributesForFiltering": [
      "equalOnly(quantity)",
      "popularity"
    ],
    "separatorsToIndex": "+#",
    "searchableAttributes": [
      "title,alternative_title",
      "author",
      "unordered(text)",
      "emails.personal"
    ],
    "userData": {
      "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
      "pluginVersion": "1.6.0"
    },
    "customNormalization": {
      "default": {
        "ä": "ae",
        "ü": "ue"
      }
    },
    "attributeForDistinct": "url",
    "maxFacetHits": 10,
    "keepDiacriticsOnCharacters": "øé",
    "customRanking": [
      "desc(popularity)",
      "asc(price)"
    ],
    "attributesToRetrieve": [
      "author",
      "title",
      "content"
    ],
    "ranking": [
      "typo",
      "geo",
      "words",
      "filters",
      "proximity",
      "attribute",
      "exact",
      "custom"
    ],
    "relevancyStrictness": 90,
    "attributesToHighlight": [
      "author",
      "title",
      "conten",
      "content"
    ],
    "attributesToSnippet": [
      "content:80",
      "description"
    ],
    "highlightPreTag": "<em>",
    "highlightPostTag": "</em>",
    "snippetEllipsisText": "…",
    "restrictHighlightAndSnippetArrays": false,
    "hitsPerPage": 20,
    "minWordSizefor1Typo": 4,
    "minWordSizefor2Typos": 8,
    "typoTolerance": true,
    "allowTyposOnNumericTokens": true,
    "disableTypoToleranceOnAttributes": [
      "sku"
    ],
    "ignorePlurals": [
      "ca",
      "es"
    ],
    "removeStopWords": [
      "ca",
      "es"
    ],
    "queryLanguages": [
      "es"
    ],
    "decompoundQuery": true,
    "enableRules": true,
    "enablePersonalization": false,
    "queryType": "prefixLast",
    "removeWordsIfNoResults": "firstWords",
    "mode": "keywordSearch",
    "semanticSearch": {
      "eventSources": [
        "string"
      ]
    },
    "advancedSyntax": false,
    "optionalWords": "string",
    "disableExactOnAttributes": [
      "description"
    ],
    "exactOnSingleWordQuery": "attribute",
    "alternativesAsExact": [
      "ignorePlurals",
      "singleWordSynonym"
    ],
    "advancedSyntaxFeatures": [
      "exactPhrase",
      "excludeWords"
    ],
    "distinct": 1,
    "replaceSynonymsInHighlight": false,
    "minProximity": 1,
    "responseFields": [
      "*"
    ],
    "maxValuesPerFacet": 100,
    "sortFacetValuesBy": "count",
    "attributeCriteriaComputedByMinProximity": false,
    "attributeCriteriaComputedBy": "best",
    "renderingContent": {
      "facetOrdering": {
        "facets": {
          "order": [
            "string"
          ]
        },
        "values": {
          "property1": {
            "order": [
              "string"
            ],
            "sortRemainingBy": "count",
            "hide": [
              "string"
            ]
          },
          "property2": {
            "order": [
              "string"
            ],
            "sortRemainingBy": "count",
            "hide": [
              "string"
            ]
          }
        }
      },
      "redirect": {
        "url": "string"
      },
      "widgets": {
        "banners": [
          {
            "image": {
              "urls": [
                {
                  "url": "string"
                }
              ],
              "title": "string"
            },
            "link": {
              "url": "string"
            }
          }
        ],
        "resultCard": {
          "enabled": true
        }
      }
    },
    "enableReRanking": true,
    "reRankingApplyFilter": [
      {}
    ]
  }'
```

`PUT /1/indexes/{indexName}/settings`

Update the specified index settings.

Index settings that you don't specify are left unchanged.
Specify `null` to reset a setting to its default value.

For best performance, update the index settings before you add new records to your index.


> Body parameter

```json
{
  "attributesForFaceting": [
    "author",
    "filterOnly(isbn)",
    "searchable(edition)",
    "afterDistinct(category)",
    "afterDistinct(searchable(publisher))"
  ],
  "replicas": [
    "virtual(prod_products_price_asc)",
    "dev_products_replica"
  ],
  "paginationLimitedTo": 100,
  "unretrievableAttributes": [
    "total_sales"
  ],
  "disableTypoToleranceOnWords": [
    "wheel",
    "1X2BCD"
  ],
  "attributesToTransliterate": [
    "name",
    "description"
  ],
  "camelCaseAttributes": [
    "description"
  ],
  "decompoundedAttributes": {
    "de": [
      "name"
    ]
  },
  "indexLanguages": [
    "ja"
  ],
  "disablePrefixOnAttributes": [
    "sku"
  ],
  "allowCompressionOfIntegerArray": false,
  "numericAttributesForFiltering": [
    "equalOnly(quantity)",
    "popularity"
  ],
  "separatorsToIndex": "+#",
  "searchableAttributes": [
    "title,alternative_title",
    "author",
    "unordered(text)",
    "emails.personal"
  ],
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "customNormalization": {
    "default": {
      "ä": "ae",
      "ü": "ue"
    }
  },
  "attributeForDistinct": "url",
  "maxFacetHits": 10,
  "keepDiacriticsOnCharacters": "øé",
  "customRanking": [
    "desc(popularity)",
    "asc(price)"
  ],
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ]
}
```

<h3 id="update-index-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|
|body|body|[indexSettings](#schemaindexsettings)|true|none|
|» attributesForFaceting|body|[string]|false|Attributes used for [faceting](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting).<br><br>Facets are attributes that let you categorize search results.<br>They can be used for filtering search results.<br>By default, no attribute is used for faceting.<br>Attribute names are case-sensitive.<br><br>**Modifiers**<br><br>- `filterOnly("ATTRIBUTE")`.<br>  Allows the attribute to be used as a filter but doesn't evaluate the facet values.<br><br>- `searchable("ATTRIBUTE")`.<br>  Allows searching for facet values.<br><br>- `afterDistinct("ATTRIBUTE")`.<br>  Evaluates the facet count _after_ deduplication with `distinct`.<br>  This ensures accurate facet counts.<br>  You can apply this modifier to searchable facets: `afterDistinct(searchable(ATTRIBUTE))`.<br>|
|» replicas|body|[string]|false|Creates [replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas).<br><br>Replicas are copies of a primary index with the same records but different settings, synonyms, or rules.<br>If you want to offer a different ranking or sorting of your search results, you'll use replica indices.<br>All index operations on a primary index are automatically forwarded to its replicas.<br>To add a replica index, you must provide the complete set of replicas to this parameter.<br>If you omit a replica from this list, the replica turns into a regular, standalone index that will no longer be synced with the primary index.<br><br>**Modifier**<br><br>- `virtual("REPLICA")`.<br>  Create a virtual replica,<br>  Virtual replicas don't increase the number of records and are optimized for [Relevant sorting](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|» paginationLimitedTo|body|integer(int64)|false|Maximum number of search results that can be obtained through pagination.<br><br>Higher pagination limits might slow down your search.<br>For pagination limits above 1,000, the sorting of results beyond the 1,000th hit can't be guaranteed.<br>|
|» unretrievableAttributes|body|[string]|false|Attributes that can't be retrieved at query time.<br><br>This can be useful if you want to use an attribute for ranking or to [restrict access](https://www.algolia.com/doc/guides/security/api-keys/how-to/user-restricted-access-to-data),<br>but don't want to include it in the search results.<br>Attribute names are case-sensitive.<br>|
|» disableTypoToleranceOnWords|body|[string]|false|Creates a list of [words which require exact matches](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#turn-off-typo-tolerance-for-certain-words).<br>This also turns off [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) for the specified words.<br>|
|» attributesToTransliterate|body|[string]|false|Attributes, for which you want to support [Japanese transliteration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#japanese-transliteration-and-type-ahead).<br><br>Transliteration supports searching in any of the Japanese writing systems.<br>To support transliteration, you must set the indexing language to Japanese.<br>Attribute names are case-sensitive.<br>|
|» camelCaseAttributes|body|[string]|false|Attributes for which to split [camel case](https://wikipedia.org/wiki/Camel_case) words.<br>Attribute names are case-sensitive.<br>|
|» decompoundedAttributes|body|object|false|Searchable attributes to which Algolia should apply [word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/customize-segmentation) (decompounding).<br>Attribute names are case-sensitive.<br><br>Compound words are formed by combining two or more individual words,<br>and are particularly prevalent in Germanic languages—for example, "firefighter".<br>With decompounding, the individual components are indexed separately.<br><br>You can specify different lists for different languages.<br>Decompounding is supported for these languages:<br>Dutch (`nl`), German (`de`), Finnish (`fi`), Danish (`da`), Swedish (`sv`), and Norwegian (`no`).<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|» indexLanguages|body|[[supportedLanguage](#schemasupportedlanguage)]|false|Languages for language-specific processing steps, such as word detection and dictionary settings.<br><br>**Always specify an indexing language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|» disablePrefixOnAttributes|body|[string]|false|Searchable attributes for which you want to turn off [prefix matching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/#adjust-prefix-search).<br>Attribute names are case-sensitive.<br>|
|» allowCompressionOfIntegerArray|body|boolean|false|Whether arrays with exclusively non-negative integers should be compressed for better performance.<br>If true, the compressed arrays may be reordered.<br>|
|» numericAttributesForFiltering|body|[string]|false|Numeric attributes that can be used as [numerical filters](https://www.algolia.com/doc/guides/managing-results/rules/detecting-intent/how-to/applying-a-custom-filter-for-a-specific-query/#numerical-filters).<br>Attribute names are case-sensitive.<br><br>By default, all numeric attributes are available as numerical filters.<br>For faster indexing, reduce the number of numeric attributes.<br><br>To turn off filtering for all numeric attributes, specify an attribute that doesn't exist in your index, such as `NO_NUMERIC_FILTERING`.<br><br>**Modifier**<br><br>- `equalOnly("ATTRIBUTE")`.<br>  Support only filtering based on equality comparisons `=` and `!=`.<br>|
|» separatorsToIndex|body|string|false|Control which non-alphanumeric characters are indexed.<br><br>By default, Algolia ignores [non-alphanumeric characters](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes/#handling-non-alphanumeric-characters) like hyphen (`-`), plus (`+`), and parentheses (`(`,`)`).<br>To include such characters, define them with `separatorsToIndex`.<br><br>Separators are all non-letter characters except spaces and currency characters, such as $€£¥.<br><br>With `separatorsToIndex`, Algolia treats separator characters as separate words.<br>For example, in a search for "Disney+", Algolia considers "Disney" and "+" as two separate words.<br>|
|» searchableAttributes|body|[string]|false|Attributes used for searching. Attribute names are case-sensitive.<br><br>By default, all attributes are searchable and the [Attribute](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#attribute) ranking criterion is turned off.<br>With a non-empty list, Algolia only returns results with matches in the selected attributes.<br>In addition, the Attribute ranking criterion is turned on: matches in attributes that are higher in the list of `searchableAttributes` rank first.<br>To make matches in two attributes rank equally, include them in a comma-separated string, such as `"title,alternate_title"`.<br>Attributes with the same priority are always unordered.<br><br>For more information, see [Searchable attributes](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/setting-searchable-attributes).<br><br>**Modifier**<br><br>- `unordered("ATTRIBUTE")`.<br>  Ignore the position of a match within the attribute.<br><br>Without a modifier, matches at the beginning of an attribute rank higher than matches at the end.<br>|
|» userData|body|[userData](#schemauserdata)|false|An object with custom data.<br><br>You can store up to 32kB as custom data.<br>|
|» customNormalization|body|object|false|Characters and their normalized replacements.<br>This overrides Algolia's default [normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization).<br>|
|» » **additionalProperties**|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» attributeForDistinct|body|string|false|Attribute that should be used to establish groups of results.<br>Attribute names are case-sensitive.<br><br>All records with the same value for this attribute are considered a group.<br>You can combine `attributeForDistinct` with the `distinct` search parameter to control<br>how many items per group are included in the search results.<br><br>If you want to use the same attribute also for faceting, use the `afterDistinct` modifier of the `attributesForFaceting` setting.<br>This applies faceting _after_ deduplication, which will result in accurate facet counts.<br>|
|» maxFacetHits|body|[maxFacetHits](#schemamaxfacethits)|false|Maximum number of facet values to return when [searching for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).|
|» keepDiacriticsOnCharacters|body|string|false|Characters for which diacritics should be preserved.<br><br>By default, Algolia removes diacritics from letters.<br>For example, `é` becomes `e`. If this causes issues in your search,<br>you can specify characters that should keep their diacritics.<br>|
|» customRanking|body|[string]|false|Attributes to use as [custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking).<br>Attribute names are case-sensitive.<br><br>The custom ranking attributes decide which items are shown first if the other ranking criteria are equal.<br><br>Records with missing values for your selected custom ranking attributes are always sorted last.<br>Boolean attributes are sorted based on their alphabetical order.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br><br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>If you use two or more custom ranking attributes,<br>[reduce the precision](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/how-to/controlling-custom-ranking-metrics-precision) of your first attributes,<br>or the other attributes will never be applied.<br>|
|» attributesToRetrieve|body|[attributesToRetrieve](#schemaattributestoretrieve)|false|Attributes to include in the API response.<br>To reduce the size of your response, you can retrieve only some of the attributes.<br>Attribute names are case-sensitive<br>- `*` retrieves all attributes, except attributes included in the `customRanking` and `unretrievableAttributes` settings.<br>- To retrieve all attributes except a specific one, prefix the attribute with a dash and combine it with the `*`: `["*", "-ATTRIBUTE"]`.<br>- The `objectID` attribute is always included.<br>|
|» ranking|body|[string]|false|Determines the order in which Algolia returns your results.<br><br>By default, each entry corresponds to a [ranking criteria](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria).<br>The tie-breaking algorithm sequentially applies each criterion in the order they're specified.<br>If you configure a replica index for [sorting by an attribute](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-by-attribute),<br>you put the sorting attribute at the top of the list.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>Before you modify the default setting,<br>test your changes in the dashboard,<br>and by [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing).<br>|
|» relevancyStrictness|body|[relevancyStrictness](#schemarelevancystrictness)|false|Relevancy threshold below which less relevant results aren't included in the results.<br>You can only set `relevancyStrictness` on [virtual replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/#standard-and-virtual-replicas).<br>Use this setting to strike a balance between the relevance and number of returned results.<br>|
|» attributesToHighlight|body|[attributesToHighlight](#schemaattributestohighlight)|false|Attributes to highlight.<br>By default, all searchable attributes are highlighted.<br>Use `*` to highlight all attributes or use an empty array `[]` to turn off highlighting.<br>Attribute names are case-sensitive<br>With highlighting, strings that match the search query are surrounded by HTML tags defined by `highlightPreTag` and `highlightPostTag`.<br>You can use this to visually highlight matching parts of a search query in your UI<br>For more information, see [Highlighting and snippeting](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/highlighting-snippeting/js).<br>|
|» attributesToSnippet|body|[attributesToSnippet](#schemaattributestosnippet)|false|Attributes for which to enable snippets.<br>Attribute names are case-sensitive<br>Snippets provide additional context to matched words.<br>If you enable snippets, they include 10 words, including the matched word.<br>The matched word will also be wrapped by HTML tags for highlighting.<br>You can adjust the number of words with the following notation: `ATTRIBUTE:NUMBER`,<br>where `NUMBER` is the number of words to be extracted.<br>|
|» highlightPreTag|body|[highlightPreTag](#schemahighlightpretag)|false|HTML tag to insert before the highlighted parts in all highlighted results and snippets.|
|» highlightPostTag|body|[highlightPostTag](#schemahighlightposttag)|false|HTML tag to insert after the highlighted parts in all highlighted results and snippets.|
|» snippetEllipsisText|body|[snippetEllipsisText](#schemasnippetellipsistext)|false|String used as an ellipsis indicator when a snippet is truncated.|
|» restrictHighlightAndSnippetArrays|body|[restrictHighlightAndSnippetArrays](#schemarestricthighlightandsnippetarrays)|false|Whether to restrict highlighting and snippeting to items that at least partially matched the search query.<br>By default, all items are highlighted and snippeted.<br>|
|» hitsPerPage|body|[hitsPerPage](#schemahitsperpage)|false|Number of hits per page.|
|» minWordSizefor1Typo|body|[minWordSizefor1Typo](#schemaminwordsizefor1typo)|false|Minimum number of characters a word in the search query must contain to accept matches with [one typo](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|» minWordSizefor2Typos|body|[minWordSizefor2Typos](#schemaminwordsizefor2typos)|false|Minimum number of characters a word in the search query must contain to accept matches with [two typos](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|» typoTolerance|body|[typoTolerance](#schematypotolerance)|false|Whether [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance) is enabled and how it is applied.<br><br>If typo tolerance is true, `min`, or `strict`, [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) are also active.<br>|
|» allowTyposOnNumericTokens|body|[allowTyposOnNumericTokens](#schemaallowtyposonnumerictokens)|false|Whether to allow typos on numbers in the search query.<br>Turn off this setting to reduce the number of irrelevant matches<br>when searching in large sets of similar numbers.<br>|
|» disableTypoToleranceOnAttributes|body|[disableTypoToleranceOnAttributes](#schemadisabletypotoleranceonattributes)|false|Attributes for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance).<br>Attribute names are case-sensitive<br>Returning only exact matches can help when<br>- [Searching in hyphenated attributes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes).<br>- Reducing the number of matches when you have too many.<br>  This can happen with attributes that are long blocks of text, such as product descriptions.<br>Consider alternatives such as `disableTypoToleranceOnWords` or adding synonyms if your attributes have intentional unusual spellings that might look like typos.<br>|
|» ignorePlurals|body|[ignorePlurals](#schemaignoreplurals)|false|Treat singular, plurals, and other forms of declensions as equivalent.<br>Only use this feature for the languages used in your index.<br>|
|» removeStopWords|body|[removeStopWords](#schemaremovestopwords)|false|Removes stop words from the search query.<br><br>Stop words are common words like articles, conjunctions, prepositions, or pronouns that have little or no meaning on their own.<br>In English, "the", "a", or "and" are stop words.<br><br>Only use this feature for the languages used in your index.<br>|
|» queryLanguages|body|[queryLanguages](#schemaquerylanguages)|false|Languages for language-specific query processing steps such as plurals, stop-word removal, and word-detection dictionaries.<br>This setting sets a default list of languages used by the `removeStopWords` and `ignorePlurals` settings.<br>This setting also sets a dictionary for word detection in the logogram-based [CJK](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/#normalization-for-logogram-based-languages-cjk) languages.<br>To support this, place the CJK language **first**.<br>**Always specify a query language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|» decompoundQuery|body|[decompoundQuery](#schemadecompoundquery)|false|Whether to split compound words in the query into their building blocks.<br>For more information, see [Word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#split-compound-words).<br>Word segmentation is supported for these languages: German, Dutch, Finnish, Swedish, and Norwegian.<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|» enableRules|body|[enableRules](#schemaenablerules)|false|Whether to enable rules.|
|» enablePersonalization|body|[enablePersonalization](#schemaenablepersonalization)|false|Whether to enable Personalization.|
|» queryType|body|[queryType](#schemaquerytype)|false|Determines if and how query words are interpreted as prefixes.<br><br>By default, only the last query word is treated as a prefix (`prefixLast`).<br>To turn off prefix search, use `prefixNone`.<br>Avoid `prefixAll`, which treats all query words as prefixes.<br>This might lead to counterintuitive results and makes your search slower.<br><br>For more information, see [Prefix searching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/prefix-searching).<br>|
|» removeWordsIfNoResults|body|[removeWordsIfNoResults](#schemaremovewordsifnoresults)|false|Strategy for removing words from the query when it doesn't return any results.<br>This helps to avoid returning empty search results.<br><br>- `none`.<br>  No words are removed when a query doesn't return results.<br><br>- `lastWords`.<br>  Treat the last (then second to last, then third to last) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `firstWords`.<br>  Treat the first (then second, then third) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `allOptional`.<br>  Treat all words as optional.<br><br>For more information, see [Remove words to improve results](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/in-depth/why-use-remove-words-if-no-results).<br>|
|» mode|body|[mode](#schemamode)|false|Search mode the index will use to query for results.<br><br>This setting only applies to indices, for which Algolia enabled NeuralSearch for you.<br>|
|» semanticSearch|body|[semanticSearch](#schemasemanticsearch)|false|Settings for the semantic search part of NeuralSearch.<br>Only used when `mode` is `neuralSearch`.<br>|
|» advancedSyntax|body|[advancedSyntax](#schemaadvancedsyntax)|false|Whether to support phrase matching and excluding words from search queries.<br>Use the `advancedSyntaxFeatures` parameter to control which feature is supported.<br>|
|» optionalWords|body|[optionalWords](#schemaoptionalwords)|false|Words that should be considered optional when found in the query.<br><br>By default, records must match all words in the search query to be included in the search results.<br>Adding optional words can increase the number of search results by running an additional search query that doesn't include the optional words.<br>For example, if the search query is "action video" and "video" is optional,<br>the search engine runs two queries: one for "action video" and one for "action".<br>Records that match all words are ranked higher.<br><br>For a search query with 4 or more words **and** all its words are optional,<br>the number of matched words required for a record to be included in the search results increases for every 1,000 records:<br><br>- If `optionalWords` has fewer than 10 words, the required number of matched words increases by 1:<br>  results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 2 matched words.<br>- If `optionalWords` has 10 or more words, the required number of matched words increases by the number of optional words divided by 5 (rounded down).<br>  Example: with 18 optional words, results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 4 matched words.<br><br>For more information, see [Optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).<br>|
|» disableExactOnAttributes|body|[disableExactOnAttributes](#schemadisableexactonattributes)|false|Searchable attributes for which you want to [turn off the Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes).<br>Attribute names are case-sensitive<br>This can be useful for attributes with long values, where the likelihood of an exact match is high,<br>such as product descriptions.<br>Turning off the Exact ranking criterion for these attributes favors exact matching on other attributes.<br>This reduces the impact of individual attributes with a lot of content on ranking.<br>|
|» exactOnSingleWordQuery|body|[exactOnSingleWordQuery](#schemaexactonsinglewordquery)|false|Determines how the [Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes) is computed when the search query has only one word.<br><br>- `attribute`.<br>  The Exact ranking criterion is 1 if the query word and attribute value are the same.<br>  For example, a search for "road" will match the value "road", but not "road trip".<br><br>- `none`.<br>  The Exact ranking criterion is ignored on single-word searches.<br><br>- `word`.<br>  The Exact ranking criterion is 1 if the query word is found in the attribute value.<br>  The query word must have at least 3 characters and must not be a stop word.<br>  Only exact matches will be highlighted,<br>  partial and prefix matches won't.<br>|
|» alternativesAsExact|body|[IndexSettings_alternativesAsExact](#schemaindexsettings_alternativesasexact)|false|Determine which plurals and synonyms should be considered an exact matches.<br>By default, Algolia treats singular and plural forms of a word, and single-word synonyms, as [exact](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#exact) matches when searching.<br>For example:<br>- "swimsuit" and "swimsuits" are treated the same.<br>- "swimsuit" and "swimwear" are treated the same (if they are [synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/#regular-synonyms)).<br>- `ignorePlurals`.<br>  Plurals and similar declensions added by the `ignorePlurals` setting are considered exact matches.<br>- `singleWordSynonym`.<br>  Single-word synonyms, such as "NY" = "NYC", are considered exact matches.<br>- `multiWordsSynonym`.<br>  Multi-word synonyms, such as "NY" = "New York", are considered exact matches.<br>|
|» advancedSyntaxFeatures|body|[IndexSettings_advancedSyntaxFeatures](#schemaindexsettings_advancedsyntaxfeatures)|false|Advanced search syntax features you want to support.<br>- `exactPhrase`.<br>  Phrases in quotes must match exactly.<br>  For example, `sparkly blue "iPhone case"` only returns records with the exact string "iPhone case".<br>- `excludeWords`.<br>  Query words prefixed with a `-` must not occur in a record.<br>  For example, `search -engine` matches records that contain "search" but not "engine".<br>This setting only has an effect if `advancedSyntax` is true.<br>|
|» distinct|body|[distinct](#schemadistinct)|false|Determines how many records of a group are included in the search results.<br><br>Records with the same value for the `attributeForDistinct` attribute are considered a group.<br>The `distinct` setting controls how many members of the group are returned.<br>This is useful for [deduplication and grouping](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#deduplicate-results-with-distinct).<br><br>The `distinct` setting is ignored if `attributeForDistinct` is not set.<br>|
|» replaceSynonymsInHighlight|body|[replaceSynonymsInHighlight](#schemareplacesynonymsinhighlight)|false|Whether to replace a highlighted word with the matched synonym.<br>By default, the original words are highlighted even if a synonym matches.<br>For example, with `home` as a synonym for `house` and a search for `home`,<br>records matching either "home" or "house" are included in the search results,<br>and either "home" or "house" are highlighted<br>With `replaceSynonymsInHighlight` set to `true`, a search for `home` still matches the same records,<br>but all occurrences of "house" are replaced by "home" in the highlighted response.<br>|
|» minProximity|body|[minProximity](#schemaminproximity)|false|Minimum proximity score for two matching words.<br>This adjusts the [Proximity ranking criterion](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#proximity)<br>by equally scoring matches that are farther apart<br>For example, if `minProximity` is 2, neighboring matches and matches with one word between them would have the same score.<br>|
|» responseFields|body|[responseFields](#schemaresponsefields)|false|Properties to include in the API response of search and browse requests.<br>By default, all response properties are included.<br>To reduce the response size, you can select which properties should be included<br>An empty list may lead to an empty API response (except properties you can't exclude)<br>You can't exclude these properties:<br>`message`, `warning`, `cursor`, `abTestVariantID`,<br>or any property added by setting `getRankingInfo` to true<br>Your search depends on the `hits` field. If you omit this field, searches won't return any results.<br>Your UI might also depend on other properties, for example, for pagination.<br>Before restricting the response size, check the impact on your search experience.<br>|
|» maxValuesPerFacet|body|[maxValuesPerFacet](#schemamaxvaluesperfacet)|false|Maximum number of facet values to return for each facet.|
|» sortFacetValuesBy|body|[sortFacetValuesBy](#schemasortfacetvaluesby)|false|Order in which to retrieve facet values.<br>- `count`.<br>  Facet values are retrieved by decreasing count.<br>  The count is the number of matching records containing this facet value.<br>- `alpha`.<br>  Retrieve facet values alphabetically.<br>This setting doesn't influence how facet values are displayed in your UI (see `renderingContent`).<br>For more information, see [facet value display](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js).<br>|
|» attributeCriteriaComputedByMinProximity|body|[attributeCriteriaComputedByMinProximity](#schemaattributecriteriacomputedbyminproximity)|false|Whether the best matching attribute should be determined by minimum proximity.<br>This setting only affects ranking if the Attribute ranking criterion comes before Proximity in the `ranking` setting.<br>If true, the best matching attribute is selected based on the minimum proximity of multiple matches.<br>Otherwise, the best matching attribute is determined by the order in the `searchableAttributes` setting.<br><br>Prefer `attributeCriteriaComputedBy`, which expresses the same two behaviors and adds the `sum` strategy.<br>If you set both, `attributeCriteriaComputedBy` takes precedence.<br>|
|» attributeCriteriaComputedBy|body|[attributeCriteriaComputedBy](#schemaattributecriteriacomputedby)|false|Strategy for computing the Attribute ranking criterion.<br>This mainly affects multi-word queries with matches in more than one attribute.<br><br>The `ranking` setting decides whether `best` takes effect.<br>When Attribute comes after Proximity, which is the default order, the engine always uses the `minProximity` strategy and ignores `best`.<br>To select `best`, move Attribute before Proximity in `ranking`.<br>The `sum` strategy applies in both orders.<br><br>- `minProximity`.<br>  Pick the best matching attribute from the attributes that form the best proximity score.<br>  On an ordered attribute, the match position breaks ties.<br>- `best`.<br>  Pick the best matching attribute from all attributes that match any query word.<br>  On an ordered attribute, the match position breaks ties.<br>- `sum`.<br>  Add up a score for every query word instead of picking one attribute.<br>  Each word's score comes from the attribute it matched, and from its position in that attribute when the attribute is ordered.<br>  A query word that matches nothing adds a large penalty.<br>  A record with a lower total ranks higher.<br>  A record therefore cannot rank high only because one word of a multi-word query matched a top attribute.<br>  Use `sum` with short, relevant attributes, and set long-text attributes to unordered.<br>|
|» renderingContent|body|[renderingContent](#schemarenderingcontent)|false|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|» enableReRanking|body|[enableReRanking](#schemaenablereranking)|false|Whether this search will use [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking).<br>This setting only has an effect if you activated Dynamic Re-Ranking for this index in the Algolia dashboard.<br>|
|» reRankingApplyFilter|body|[reRankingApplyFilter](#schemarerankingapplyfilter) \| null|false|none|
|» » *oneOf*|body|[reRankingApplyFilter](#schemarerankingapplyfilter)|false|Restrict [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking) to records that match these filters.<br>|
|» » *oneOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» indexLanguages|af|
|» indexLanguages|ar|
|» indexLanguages|az|
|» indexLanguages|bg|
|» indexLanguages|bn|
|» indexLanguages|ca|
|» indexLanguages|cs|
|» indexLanguages|cy|
|» indexLanguages|da|
|» indexLanguages|de|
|» indexLanguages|el|
|» indexLanguages|en|
|» indexLanguages|eo|
|» indexLanguages|es|
|» indexLanguages|et|
|» indexLanguages|eu|
|» indexLanguages|fa|
|» indexLanguages|fi|
|» indexLanguages|fo|
|» indexLanguages|fr|
|» indexLanguages|ga|
|» indexLanguages|gl|
|» indexLanguages|he|
|» indexLanguages|hi|
|» indexLanguages|hu|
|» indexLanguages|hy|
|» indexLanguages|id|
|» indexLanguages|is|
|» indexLanguages|it|
|» indexLanguages|ja|
|» indexLanguages|ka|
|» indexLanguages|kk|
|» indexLanguages|ko|
|» indexLanguages|ku|
|» indexLanguages|ky|
|» indexLanguages|lt|
|» indexLanguages|lv|
|» indexLanguages|mi|
|» indexLanguages|mn|
|» indexLanguages|mr|
|» indexLanguages|ms|
|» indexLanguages|mt|
|» indexLanguages|nb|
|» indexLanguages|nl|
|» indexLanguages|no|
|» indexLanguages|ns|
|» indexLanguages|pl|
|» indexLanguages|ps|
|» indexLanguages|pt|
|» indexLanguages|pt-br|
|» indexLanguages|qu|
|» indexLanguages|ro|
|» indexLanguages|ru|
|» indexLanguages|sk|
|» indexLanguages|sq|
|» indexLanguages|sv|
|» indexLanguages|sw|
|» indexLanguages|ta|
|» indexLanguages|te|
|» indexLanguages|th|
|» indexLanguages|tl|
|» indexLanguages|tn|
|» indexLanguages|tr|
|» indexLanguages|tt|
|» indexLanguages|uk|
|» indexLanguages|ur|
|» indexLanguages|uz|
|» indexLanguages|zh|
|» queryLanguages|af|
|» queryLanguages|ar|
|» queryLanguages|az|
|» queryLanguages|bg|
|» queryLanguages|bn|
|» queryLanguages|ca|
|» queryLanguages|cs|
|» queryLanguages|cy|
|» queryLanguages|da|
|» queryLanguages|de|
|» queryLanguages|el|
|» queryLanguages|en|
|» queryLanguages|eo|
|» queryLanguages|es|
|» queryLanguages|et|
|» queryLanguages|eu|
|» queryLanguages|fa|
|» queryLanguages|fi|
|» queryLanguages|fo|
|» queryLanguages|fr|
|» queryLanguages|ga|
|» queryLanguages|gl|
|» queryLanguages|he|
|» queryLanguages|hi|
|» queryLanguages|hu|
|» queryLanguages|hy|
|» queryLanguages|id|
|» queryLanguages|is|
|» queryLanguages|it|
|» queryLanguages|ja|
|» queryLanguages|ka|
|» queryLanguages|kk|
|» queryLanguages|ko|
|» queryLanguages|ku|
|» queryLanguages|ky|
|» queryLanguages|lt|
|» queryLanguages|lv|
|» queryLanguages|mi|
|» queryLanguages|mn|
|» queryLanguages|mr|
|» queryLanguages|ms|
|» queryLanguages|mt|
|» queryLanguages|nb|
|» queryLanguages|nl|
|» queryLanguages|no|
|» queryLanguages|ns|
|» queryLanguages|pl|
|» queryLanguages|ps|
|» queryLanguages|pt|
|» queryLanguages|pt-br|
|» queryLanguages|qu|
|» queryLanguages|ro|
|» queryLanguages|ru|
|» queryLanguages|sk|
|» queryLanguages|sq|
|» queryLanguages|sv|
|» queryLanguages|sw|
|» queryLanguages|ta|
|» queryLanguages|te|
|» queryLanguages|th|
|» queryLanguages|tl|
|» queryLanguages|tn|
|» queryLanguages|tr|
|» queryLanguages|tt|
|» queryLanguages|uk|
|» queryLanguages|ur|
|» queryLanguages|uz|
|» queryLanguages|zh|
|» queryType|prefixLast|
|» queryType|prefixAll|
|» queryType|prefixNone|
|» removeWordsIfNoResults|none|
|» removeWordsIfNoResults|lastWords|
|» removeWordsIfNoResults|firstWords|
|» removeWordsIfNoResults|allOptional|
|» mode|neuralSearch|
|» mode|keywordSearch|
|» exactOnSingleWordQuery|attribute|
|» exactOnSingleWordQuery|none|
|» exactOnSingleWordQuery|word|
|» alternativesAsExact|ignorePlurals|
|» alternativesAsExact|singleWordSynonym|
|» alternativesAsExact|multiWordsSynonym|
|» alternativesAsExact|ignoreConjugations|
|» advancedSyntaxFeatures|exactPhrase|
|» advancedSyntaxFeatures|excludeWords|
|» attributeCriteriaComputedBy|minProximity|
|» attributeCriteriaComputedBy|best|
|» attributeCriteriaComputedBy|sum|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="update-index-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve a synonym

<a id="opIdgetSynonym"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/synonyms/synonymID' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/indexes/{indexName}/synonyms/{objectID}`

Retrieves a synonym by its ID.
To find the object IDs for your synonyms,
use the [`search` operation](https://www.algolia.com/doc/rest-api/search/search-synonyms).


<h3 id="retrieve-a-synonym-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|string|true|Unique identifier of a synonym object.|

> Example responses

> 200 Response

```json
{
  "objectID": "synonymID",
  "type": "onewaysynonym",
  "synonyms": [
    "vehicle",
    "auto"
  ],
  "input": "car",
  "word": "car",
  "corrections": [
    "vehicle",
    "auto"
  ],
  "placeholder": "<Street>",
  "replacements": [
    "street",
    "st"
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-a-synonym-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[synonymHit](#schemasynonymhit)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Create or replace a synonym

<a id="opIdsaveSynonym"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/synonyms/synonymID' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "objectID": "synonymID",
    "type": "onewaysynonym",
    "synonyms": [
      "vehicle",
      "auto"
    ],
    "input": "car",
    "word": "car",
    "corrections": [
      "vehicle",
      "auto"
    ],
    "placeholder": "<Street>",
    "replacements": [
      "street",
      "st"
    ]
  }'
```

`PUT /1/indexes/{indexName}/synonyms/{objectID}`

If a synonym with the specified object ID doesn't exist, Algolia adds a new one.
Otherwise, the existing synonym is replaced.
To add multiple synonyms in a single API request, use the [`batch` operation](https://www.algolia.com/doc/rest-api/search/save-synonyms).


> Body parameter

```json
{
  "objectID": "synonymID",
  "type": "onewaysynonym",
  "synonyms": [
    "vehicle",
    "auto"
  ],
  "input": "car",
  "word": "car",
  "corrections": [
    "vehicle",
    "auto"
  ],
  "placeholder": "<Street>",
  "replacements": [
    "street",
    "st"
  ]
}
```

<h3 id="create-or-replace-a-synonym-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|string|true|Unique identifier of a synonym object.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|
|body|body|[synonymHit](#schemasynonymhit)|true|none|
|» objectID|body|string|true|Unique identifier of a synonym object.|
|» type|body|[SynonymType](#schemasynonymtype)|true|Synonym type.|
|» synonyms|body|[string]|false|Words or phrases considered equivalent.|
|» input|body|string|false|Word or phrase to appear in query strings (for [`onewaysynonym`s](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/in-depth/one-way-synonyms)).|
|» word|body|string|false|Word or phrase to appear in query strings (for [`altcorrection1` and `altcorrection2`](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/in-depth/synonyms-alternative-corrections)).|
|» corrections|body|[string]|false|Words to be matched in records.|
|» placeholder|body|string|false|[Placeholder token](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/in-depth/synonyms-placeholders) to be put inside records.<br>|
|» replacements|body|[string]|false|Query words that will match the [placeholder token](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/in-depth/synonyms-placeholders).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|synonym|
|» type|onewaysynonym|
|» type|altcorrection1|
|» type|altcorrection2|
|» type|placeholder|
|» type|oneWaySynonym|
|» type|altCorrection1|
|» type|altCorrection2|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z",
  "id": "12"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="create-or-replace-a-synonym-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="create-or-replace-a-synonym-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|[taskID](#schemataskid)|true|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|updatedAt|[updatedAt](#schemaupdatedat)|true|none|Date and time when the object was updated, in RFC 3339 format.|
|id|[id](#schemaid)|true|none|Unique identifier of a synonym object.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete a synonym

<a id="opIddeleteSynonym"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/synonyms/synonymID' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`DELETE /1/indexes/{indexName}/synonyms/{objectID}`

Deletes a synonym by its ID.
To find the object IDs of your synonyms, use the [`search` operation](https://www.algolia.com/doc/rest-api/search/search-synonyms).


<h3 id="delete-a-synonym-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|string|true|Unique identifier of a synonym object.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "deletedAt": "2023-06-27T14:42:38.831Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-a-synonym-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="delete-a-synonym-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|[taskID](#schemataskid)|true|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|deletedAt|[deletedAt](#schemadeletedat)|true|none|Date and time when the object was deleted, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Create or replace synonyms

<a id="opIdsaveSynonyms"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/synonyms/batch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '[
    {
      "objectID": "synonymID",
      "type": "onewaysynonym",
      "synonyms": [
        "vehicle",
        "auto"
      ],
      "input": "car",
      "word": "car",
      "corrections": [
        "vehicle",
        "auto"
      ],
      "placeholder": "<Street>",
      "replacements": [
        "street",
        "st"
      ]
    }
  ]'
```

`POST /1/indexes/{indexName}/synonyms/batch`

If a synonym with the `objectID` doesn't exist, Algolia adds a new one.
Otherwise, existing synonyms are replaced.

This operation is subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


> Body parameter

```json
[
  {
    "objectID": "synonymID",
    "type": "onewaysynonym",
    "synonyms": [
      "vehicle",
      "auto"
    ],
    "input": "car",
    "word": "car",
    "corrections": [
      "vehicle",
      "auto"
    ],
    "placeholder": "<Street>",
    "replacements": [
      "street",
      "st"
    ]
  }
]
```

<h3 id="create-or-replace-synonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|
|replaceExistingSynonyms|query|boolean|false|Whether to replace all synonyms in the index with the ones sent with this request.|
|body|body|[synonymHits](#schemasynonymhits)|true|none|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="create-or-replace-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete all synonyms

<a id="opIdclearSynonyms"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/synonyms/clear' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`POST /1/indexes/{indexName}/synonyms/clear`

Deletes all synonyms from the index.

<h3 id="delete-all-synonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-all-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Search for synonyms

<a id="opIdsearchSynonyms"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/synonyms/search' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "query": "",
    "type": "onewaysynonym",
    "page": 0,
    "hitsPerPage": 20
  }'
```

`POST /1/indexes/{indexName}/synonyms/search`

Searches for synonyms in your index.

> Body parameter

```json
{
  "query": "",
  "type": "onewaysynonym",
  "page": 0,
  "hitsPerPage": 20
}
```

<h3 id="search-for-synonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|body|body|object|false|Body of the `searchSynonyms` operation.|
|» query|body|[query](#schemaquery)|false|Search query.|
|» type|body|[SynonymType](#schemasynonymtype)|false|Synonym type.|
|» page|body|[page](#schemapage)|false|Page of search results to retrieve.|
|» hitsPerPage|body|[hitsPerPage](#schemahitsperpage)|false|Number of hits per page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|synonym|
|» type|onewaysynonym|
|» type|altcorrection1|
|» type|altcorrection2|
|» type|placeholder|
|» type|oneWaySynonym|
|» type|altCorrection1|
|» type|altCorrection2|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "objectID": "synonymID",
      "type": "onewaysynonym",
      "synonyms": [
        "vehicle",
        "auto"
      ],
      "input": "car",
      "word": "car",
      "corrections": [
        "vehicle",
        "auto"
      ],
      "placeholder": "<Street>",
      "replacements": [
        "street",
        "st"
      ]
    }
  ],
  "nbHits": 20
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="search-for-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[searchSynonymsResponse](#schemasearchsynonymsresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## List API keys

<a id="opIdlistApiKeys"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/keys' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/keys`

Lists all API keys associated with your Algolia application, including their permissions and restrictions.

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "value": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
      "createdAt": 1656345570000,
      "acl": [
        "search",
        "addObject"
      ],
      "description": "Used for indexing by the CLI",
      "indexes": [
        "dev_*",
        "prod_en_products"
      ],
      "maxHitsPerQuery": 0,
      "maxQueriesPerIPPerHour": 0,
      "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
      "referers": [
        "*algolia.com*"
      ],
      "validity": 86400
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="list-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="list-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[getApiKeyResponse](#schemagetapikeyresponse)]|true|none|API keys.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Create an API key

<a id="opIdaddApiKey"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/keys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "acl": [
      "search",
      "addObject"
    ],
    "description": "Used for indexing by the CLI",
    "indexes": [
      "dev_*",
      "prod_en_products"
    ],
    "maxHitsPerQuery": 0,
    "maxQueriesPerIPPerHour": 0,
    "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
    "referers": [
      "*algolia.com*"
    ],
    "validity": 86400
  }'
```

`POST /1/keys`

Creates a new API key with specific permissions and restrictions.

> Body parameter

```json
{
  "acl": [
    "search",
    "addObject"
  ],
  "description": "Used for indexing by the CLI",
  "indexes": [
    "dev_*",
    "prod_en_products"
  ],
  "maxHitsPerQuery": 0,
  "maxQueriesPerIPPerHour": 0,
  "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
  "referers": [
    "*algolia.com*"
  ],
  "validity": 86400
}
```

<h3 id="create-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[apiKey](#schemaapikey)|true|none|
|» acl|body|[[acl](#schemaacl)]|true|Permissions that determine the type of API requests this key can make.<br>The required ACL is listed in each endpoint's reference.<br>For more information, see [access control list](https://www.algolia.com/doc/guides/security/api-keys/#access-control-list-acl).<br>|
|» description|body|string|false|Description of an API key to help you identify this API key.|
|» indexes|body|[string]|false|Index names or patterns that this API key can access.<br>By default, an API key can access all indices in the same application.<br><br>You can use leading and trailing wildcard characters (`*`):<br><br>- `dev_*` matches all indices starting with "dev_".<br>- `*_dev` matches all indices ending with "_dev".<br>- `*_products_*` matches all indices containing "_products_".<br>|
|» maxHitsPerQuery|body|integer|false|Maximum number of hits this API key can retrieve per page.<br><br>If you set this to 0, the maximum allowed value (1,000) applies.<br>If you also set `hitsPerPage` on the index, the engine uses the lower of the two values.<br>|
|» maxQueriesPerIPPerHour|body|integer|false|Maximum number of API requests allowed per IP address or [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken) per hour.<br><br>If this limit is reached, the API returns an error with status code `429`.<br>By default, there's no limit.<br>|
|» queryParameters|body|string|false|Query parameters to add when making API requests with this API key.<br><br>To restrict this API key to specific IP addresses, add the `restrictSources` parameter.<br>You can only add a single source, but you can provide a range of IP addresses.<br><br>Creating an API key fails if the request is made from an IP address outside the restricted range.<br>|
|» referers|body|[string]|false|Allowed HTTP referrers for this API key.<br><br>By default, all referrers are allowed.<br>You can use leading and trailing wildcard characters (`*`):<br><br>- `https://algolia.com/*` allows all referrers starting with "https://algolia.com/".<br>- `*.algolia.com` allows all referrers ending with ".algolia.com".<br>- `*algolia.com*` allows all referrers in the domain "algolia.com".<br><br>Like all HTTP headers, referrers can be spoofed. Don't rely on them to secure your data.<br>For more information, see [HTTP referrer restrictions](https://www.algolia.com/doc/guides/security/security-best-practices/#http-referrer-restrictions).<br>|
|» validity|body|integer|false|Duration (in seconds) after which the API key expires.<br>By default, API keys don't expire.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» acl|addObject|
|» acl|analytics|
|» acl|browse|
|» acl|deleteObject|
|» acl|deleteIndex|
|» acl|editSettings|
|» acl|inference|
|» acl|listIndexes|
|» acl|logs|
|» acl|personalization|
|» acl|recommendation|
|» acl|search|
|» acl|seeUnretrievableAttributes|
|» acl|settings|
|» acl|usage|
|» acl|nluWriteProject|
|» acl|nluReadProject|
|» acl|nluWriteEntity|
|» acl|nluReadEntity|
|» acl|nluWriteIntent|
|» acl|nluReadIntent|
|» acl|nluPrediction|
|» acl|nluReadAnswers|

> Example responses

> 200 Response

```json
{
  "key": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
  "createdAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="create-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[addApiKeyResponse](#schemaaddapikeyresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve API key permissions

<a id="opIdgetApiKey"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/keys/ALGOLIA_API_KEY' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/keys/{key}`

Gets the permissions and restrictions of an API key.

When authenticating with the admin API key, you can request information for any of your application's keys.
When authenticating with other API keys, you can only retrieve information for that key,
with the description replaced by `<redacted>`.


<h3 id="retrieve-api-key-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|API key.|

> Example responses

> 200 Response

```json
{
  "value": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
  "createdAt": 1656345570000,
  "acl": [
    "search",
    "addObject"
  ],
  "description": "Used for indexing by the CLI",
  "indexes": [
    "dev_*",
    "prod_en_products"
  ],
  "maxHitsPerQuery": 0,
  "maxQueriesPerIPPerHour": 0,
  "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
  "referers": [
    "*algolia.com*"
  ],
  "validity": 86400
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-api-key-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getApiKeyResponse](#schemagetapikeyresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Update an API key

<a id="opIdupdateApiKey"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/keys/ALGOLIA_API_KEY' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "acl": [
      "search",
      "addObject"
    ],
    "description": "Used for indexing by the CLI",
    "indexes": [
      "dev_*",
      "prod_en_products"
    ],
    "maxHitsPerQuery": 0,
    "maxQueriesPerIPPerHour": 0,
    "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
    "referers": [
      "*algolia.com*"
    ],
    "validity": 86400
  }'
```

`PUT /1/keys/{key}`

Replaces the permissions of an existing API key.

Any unspecified attribute resets that attribute to its default value.


> Body parameter

```json
{
  "acl": [
    "search",
    "addObject"
  ],
  "description": "Used for indexing by the CLI",
  "indexes": [
    "dev_*",
    "prod_en_products"
  ],
  "maxHitsPerQuery": 0,
  "maxQueriesPerIPPerHour": 0,
  "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
  "referers": [
    "*algolia.com*"
  ],
  "validity": 86400
}
```

<h3 id="update-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|API key.|
|body|body|[apiKey](#schemaapikey)|true|none|
|» acl|body|[[acl](#schemaacl)]|true|Permissions that determine the type of API requests this key can make.<br>The required ACL is listed in each endpoint's reference.<br>For more information, see [access control list](https://www.algolia.com/doc/guides/security/api-keys/#access-control-list-acl).<br>|
|» description|body|string|false|Description of an API key to help you identify this API key.|
|» indexes|body|[string]|false|Index names or patterns that this API key can access.<br>By default, an API key can access all indices in the same application.<br><br>You can use leading and trailing wildcard characters (`*`):<br><br>- `dev_*` matches all indices starting with "dev_".<br>- `*_dev` matches all indices ending with "_dev".<br>- `*_products_*` matches all indices containing "_products_".<br>|
|» maxHitsPerQuery|body|integer|false|Maximum number of hits this API key can retrieve per page.<br><br>If you set this to 0, the maximum allowed value (1,000) applies.<br>If you also set `hitsPerPage` on the index, the engine uses the lower of the two values.<br>|
|» maxQueriesPerIPPerHour|body|integer|false|Maximum number of API requests allowed per IP address or [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken) per hour.<br><br>If this limit is reached, the API returns an error with status code `429`.<br>By default, there's no limit.<br>|
|» queryParameters|body|string|false|Query parameters to add when making API requests with this API key.<br><br>To restrict this API key to specific IP addresses, add the `restrictSources` parameter.<br>You can only add a single source, but you can provide a range of IP addresses.<br><br>Creating an API key fails if the request is made from an IP address outside the restricted range.<br>|
|» referers|body|[string]|false|Allowed HTTP referrers for this API key.<br><br>By default, all referrers are allowed.<br>You can use leading and trailing wildcard characters (`*`):<br><br>- `https://algolia.com/*` allows all referrers starting with "https://algolia.com/".<br>- `*.algolia.com` allows all referrers ending with ".algolia.com".<br>- `*algolia.com*` allows all referrers in the domain "algolia.com".<br><br>Like all HTTP headers, referrers can be spoofed. Don't rely on them to secure your data.<br>For more information, see [HTTP referrer restrictions](https://www.algolia.com/doc/guides/security/security-best-practices/#http-referrer-restrictions).<br>|
|» validity|body|integer|false|Duration (in seconds) after which the API key expires.<br>By default, API keys don't expire.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» acl|addObject|
|» acl|analytics|
|» acl|browse|
|» acl|deleteObject|
|» acl|deleteIndex|
|» acl|editSettings|
|» acl|inference|
|» acl|listIndexes|
|» acl|logs|
|» acl|personalization|
|» acl|recommendation|
|» acl|search|
|» acl|seeUnretrievableAttributes|
|» acl|settings|
|» acl|usage|
|» acl|nluWriteProject|
|» acl|nluReadProject|
|» acl|nluWriteEntity|
|» acl|nluReadEntity|
|» acl|nluWriteIntent|
|» acl|nluReadIntent|
|» acl|nluPrediction|
|» acl|nluReadAnswers|

> Example responses

> 200 Response

```json
{
  "key": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="update-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="update-an-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[keyString](#schemakeystring)|true|none|API key.|
|updatedAt|[updatedAt](#schemaupdatedat)|true|none|Date and time when the object was updated, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete an API key

<a id="opIddeleteApiKey"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/keys/ALGOLIA_API_KEY' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`DELETE /1/keys/{key}`

Deletes the API key.

<h3 id="delete-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|API key.|

> Example responses

> 200 Response

```json
{
  "deletedAt": "2023-06-27T14:42:38.831Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="delete-an-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedAt|[deletedAt](#schemadeletedat)|true|none|Date and time when the object was deleted, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Restore an API key

<a id="opIdrestoreApiKey"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/keys/ALGOLIA_API_KEY/restore' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`POST /1/keys/{key}/restore`

Restores a deleted API key.

Restoring resets the `validity` attribute to `0`.

Algolia stores up to 1,000 API keys per application.
If you create more, the oldest API keys are deleted and can't be restored.


<h3 id="restore-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|API key.|

> Example responses

> 200 Response

```json
{
  "key": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
  "createdAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="restore-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[addApiKeyResponse](#schemaaddapikeyresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve a rule

<a id="opIdgetRule"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/rules/string' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/indexes/{indexName}/rules/{objectID}`

Retrieves a rule by its ID.
To find the object ID of rules, use the [`search` operation](https://www.algolia.com/doc/rest-api/search/search-rules).


<h3 id="retrieve-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|[ruleID](#schemaruleid)|true|Unique identifier of a rule object.|

> Example responses

> 200 Response

```json
{
  "objectID": "string",
  "conditions": [
    {
      "pattern": "{facet:genre}",
      "anchoring": "is",
      "alternatives": false,
      "context": "mobile",
      "filters": "genre:comedy"
    }
  ],
  "consequence": {
    "params": {
      "similarQuery": "comedy drama crime Macy Buscemi",
      "filters": "(category:Book OR category:Ebook) AND _tags:published",
      "facetFilters": [
        [
          "category:Book",
          "category:-Movie"
        ],
        "author:John Doe"
      ],
      "optionalFilters": [
        "category:Book",
        "author:John Doe"
      ],
      "numericFilters": [
        [
          "inStock = 1",
          "deliveryDate < 1441755506"
        ],
        "price < 1000"
      ],
      "tagFilters": [
        [
          "Book",
          "Movie"
        ],
        "SciFi"
      ],
      "sumOrFiltersScores": false,
      "restrictSearchableAttributes": [
        "title",
        "author"
      ],
      "facets": [
        "*"
      ],
      "facetingAfterDistinct": false,
      "page": 0,
      "offset": 0,
      "length": 0,
      "aroundLatLng": "40.71,-74.01",
      "aroundLatLngViaIP": false,
      "aroundRadius": 1,
      "aroundPrecision": 10,
      "minimumAroundRadius": 1,
      "insideBoundingBox": "string",
      "insidePolygon": [
        [
          47.3165,
          4.9665,
          47.3424,
          5.0201,
          47.32,
          4.9
        ],
        [
          40.9234,
          2.1185,
          38.643,
          1.9916,
          39.2587,
          2.0104
        ]
      ],
      "naturalLanguages": [],
      "ruleContexts": [
        "mobile"
      ],
      "personalizationImpact": 100,
      "userToken": "test-user-123",
      "getRankingInfo": false,
      "synonyms": true,
      "clickAnalytics": false,
      "analytics": true,
      "analyticsTags": [],
      "percentileComputation": true,
      "enableABTest": true,
      "attributesToRetrieve": [
        "author",
        "title",
        "content"
      ],
      "ranking": [
        "typo",
        "geo",
        "words",
        "filters",
        "proximity",
        "attribute",
        "exact",
        "custom"
      ],
      "relevancyStrictness": 90,
      "attributesToHighlight": [
        "author",
        "title",
        "conten",
        "content"
      ],
      "attributesToSnippet": [
        "content:80",
        "description"
      ],
      "highlightPreTag": "<em>",
      "highlightPostTag": "</em>",
      "snippetEllipsisText": "…",
      "restrictHighlightAndSnippetArrays": false,
      "hitsPerPage": 20,
      "minWordSizefor1Typo": 4,
      "minWordSizefor2Typos": 8,
      "typoTolerance": true,
      "allowTyposOnNumericTokens": true,
      "disableTypoToleranceOnAttributes": [
        "sku"
      ],
      "ignorePlurals": [
        "ca",
        "es"
      ],
      "removeStopWords": [
        "ca",
        "es"
      ],
      "queryLanguages": [
        "es"
      ],
      "decompoundQuery": true,
      "enableRules": true,
      "enablePersonalization": false,
      "queryType": "prefixLast",
      "removeWordsIfNoResults": "firstWords",
      "mode": "keywordSearch",
      "semanticSearch": {
        "eventSources": [
          "string"
        ]
      },
      "advancedSyntax": false,
      "optionalWords": "string",
      "disableExactOnAttributes": [
        "description"
      ],
      "exactOnSingleWordQuery": "attribute",
      "alternativesAsExact": [
        "ignorePlurals",
        "singleWordSynonym"
      ],
      "advancedSyntaxFeatures": [
        "exactPhrase",
        "excludeWords"
      ],
      "distinct": 1,
      "replaceSynonymsInHighlight": false,
      "minProximity": 1,
      "responseFields": [
        "*"
      ],
      "maxValuesPerFacet": 100,
      "sortFacetValuesBy": "count",
      "attributeCriteriaComputedByMinProximity": false,
      "attributeCriteriaComputedBy": "best",
      "renderingContent": {
        "facetOrdering": {
          "facets": {
            "order": [
              "string"
            ]
          },
          "values": {
            "property1": {
              "order": [
                "string"
              ],
              "sortRemainingBy": "count",
              "hide": [
                "string"
              ]
            },
            "property2": {
              "order": [
                "string"
              ],
              "sortRemainingBy": "count",
              "hide": [
                "string"
              ]
            }
          }
        },
        "redirect": {
          "url": "string"
        },
        "widgets": {
          "banners": [
            {
              "image": {
                "urls": [
                  {
                    "url": "string"
                  }
                ],
                "title": "string"
              },
              "link": {
                "url": "string"
              }
            }
          ],
          "resultCard": {
            "enabled": true
          }
        }
      },
      "enableReRanking": true,
      "reRankingApplyFilter": [
        {}
      ],
      "query": {
        "remove": [
          "string"
        ],
        "edits": [
          {
            "type": "remove",
            "delete": "string",
            "insert": "string"
          }
        ]
      },
      "automaticFacetFilters": [
        {
          "facet": "string",
          "score": 1,
          "disjunctive": false
        }
      ],
      "automaticOptionalFacetFilters": [
        {
          "facet": "string",
          "score": 1,
          "disjunctive": false
        }
      ]
    },
    "promote": [
      {
        "objectIDs": [
          "test-record-123"
        ],
        "position": 0
      }
    ],
    "filterPromotes": false,
    "hide": [
      {
        "objectID": "test-record-123"
      }
    ],
    "redirect": {
      "indexName": "string"
    },
    "userData": {
      "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
      "pluginVersion": "1.6.0"
    }
  },
  "description": "Display a promotional banner",
  "enabled": true,
  "validity": [
    {
      "from": 0,
      "until": 0
    }
  ],
  "tags": [
    "string"
  ],
  "scope": "string",
  "condition": {
    "pattern": "{facet:genre}",
    "anchoring": "is",
    "alternatives": false,
    "context": "mobile",
    "filters": "genre:comedy"
  }
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[rule](#schemarule)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Create or replace a rule

<a id="opIdsaveRule"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/rules/string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "objectID": "string",
    "conditions": [
      {
        "pattern": "{facet:genre}",
        "anchoring": "is",
        "alternatives": false,
        "context": "mobile",
        "filters": "genre:comedy"
      }
    ],
    "consequence": {
      "params": {
        "similarQuery": "comedy drama crime Macy Buscemi",
        "filters": "(category:Book OR category:Ebook) AND _tags:published",
        "facetFilters": [
          [
            "category:Book",
            "category:-Movie"
          ],
          "author:John Doe"
        ],
        "optionalFilters": [
          "category:Book",
          "author:John Doe"
        ],
        "numericFilters": [
          [
            "inStock = 1",
            "deliveryDate < 1441755506"
          ],
          "price < 1000"
        ],
        "tagFilters": [
          [
            "Book",
            "Movie"
          ],
          "SciFi"
        ],
        "sumOrFiltersScores": false,
        "restrictSearchableAttributes": [
          "title",
          "author"
        ],
        "facets": [
          "*"
        ],
        "facetingAfterDistinct": false,
        "page": 0,
        "offset": 0,
        "length": 0,
        "aroundLatLng": "40.71,-74.01",
        "aroundLatLngViaIP": false,
        "aroundRadius": 1,
        "aroundPrecision": 10,
        "minimumAroundRadius": 1,
        "insideBoundingBox": "string",
        "insidePolygon": [
          [
            47.3165,
            4.9665,
            47.3424,
            5.0201,
            47.32,
            4.9
          ],
          [
            40.9234,
            2.1185,
            38.643,
            1.9916,
            39.2587,
            2.0104
          ]
        ],
        "naturalLanguages": [],
        "ruleContexts": [
          "mobile"
        ],
        "personalizationImpact": 100,
        "userToken": "test-user-123",
        "getRankingInfo": false,
        "synonyms": true,
        "clickAnalytics": false,
        "analytics": true,
        "analyticsTags": [],
        "percentileComputation": true,
        "enableABTest": true,
        "attributesToRetrieve": [
          "author",
          "title",
          "content"
        ],
        "ranking": [
          "typo",
          "geo",
          "words",
          "filters",
          "proximity",
          "attribute",
          "exact",
          "custom"
        ],
        "relevancyStrictness": 90,
        "attributesToHighlight": [
          "author",
          "title",
          "conten",
          "content"
        ],
        "attributesToSnippet": [
          "content:80",
          "description"
        ],
        "highlightPreTag": "<em>",
        "highlightPostTag": "</em>",
        "snippetEllipsisText": "…",
        "restrictHighlightAndSnippetArrays": false,
        "hitsPerPage": 20,
        "minWordSizefor1Typo": 4,
        "minWordSizefor2Typos": 8,
        "typoTolerance": true,
        "allowTyposOnNumericTokens": true,
        "disableTypoToleranceOnAttributes": [
          "sku"
        ],
        "ignorePlurals": [
          "ca",
          "es"
        ],
        "removeStopWords": [
          "ca",
          "es"
        ],
        "queryLanguages": [
          "es"
        ],
        "decompoundQuery": true,
        "enableRules": true,
        "enablePersonalization": false,
        "queryType": "prefixLast",
        "removeWordsIfNoResults": "firstWords",
        "mode": "keywordSearch",
        "semanticSearch": {
          "eventSources": [
            "string"
          ]
        },
        "advancedSyntax": false,
        "optionalWords": "string",
        "disableExactOnAttributes": [
          "description"
        ],
        "exactOnSingleWordQuery": "attribute",
        "alternativesAsExact": [
          "ignorePlurals",
          "singleWordSynonym"
        ],
        "advancedSyntaxFeatures": [
          "exactPhrase",
          "excludeWords"
        ],
        "distinct": 1,
        "replaceSynonymsInHighlight": false,
        "minProximity": 1,
        "responseFields": [
          "*"
        ],
        "maxValuesPerFacet": 100,
        "sortFacetValuesBy": "count",
        "attributeCriteriaComputedByMinProximity": false,
        "attributeCriteriaComputedBy": "best",
        "renderingContent": {
          "facetOrdering": {
            "facets": {
              "order": [
                "string"
              ]
            },
            "values": {
              "property1": {
                "order": [
                  "string"
                ],
                "sortRemainingBy": "count",
                "hide": [
                  "string"
                ]
              },
              "property2": {
                "order": [
                  "string"
                ],
                "sortRemainingBy": "count",
                "hide": [
                  "string"
                ]
              }
            }
          },
          "redirect": {
            "url": "string"
          },
          "widgets": {
            "banners": [
              {
                "image": {
                  "urls": [
                    {
                      "url": "string"
                    }
                  ],
                  "title": "string"
                },
                "link": {
                  "url": "string"
                }
              }
            ],
            "resultCard": {
              "enabled": true
            }
          }
        },
        "enableReRanking": true,
        "reRankingApplyFilter": [
          {}
        ],
        "query": {
          "remove": [
            "string"
          ],
          "edits": [
            {
              "type": "remove",
              "delete": "string",
              "insert": "string"
            }
          ]
        },
        "automaticFacetFilters": [
          {
            "facet": "string",
            "score": 1,
            "disjunctive": false
          }
        ],
        "automaticOptionalFacetFilters": [
          {
            "facet": "string",
            "score": 1,
            "disjunctive": false
          }
        ]
      },
      "promote": [
        {
          "objectIDs": [
            "test-record-123"
          ],
          "position": 0
        }
      ],
      "filterPromotes": false,
      "hide": [
        {
          "objectID": "test-record-123"
        }
      ],
      "redirect": {
        "indexName": "string"
      },
      "userData": {
        "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
        "pluginVersion": "1.6.0"
      }
    },
    "description": "Display a promotional banner",
    "enabled": true,
    "validity": [
      {
        "from": 0,
        "until": 0
      }
    ],
    "tags": [
      "string"
    ],
    "scope": "string",
    "condition": {
      "pattern": "{facet:genre}",
      "anchoring": "is",
      "alternatives": false,
      "context": "mobile",
      "filters": "genre:comedy"
    }
  }'
```

`PUT /1/indexes/{indexName}/rules/{objectID}`

If a rule with the specified object ID doesn't exist, it's created.
Otherwise, the existing rule is replaced.

To create or update more than one rule, use the [`batch` operation](https://www.algolia.com/doc/rest-api/search/save-rules).


> Body parameter

```json
{
  "objectID": "string",
  "conditions": [
    {
      "pattern": "{facet:genre}",
      "anchoring": "is",
      "alternatives": false,
      "context": "mobile",
      "filters": "genre:comedy"
    }
  ],
  "consequence": {
    "params": {
      "similarQuery": "comedy drama crime Macy Buscemi",
      "filters": "(category:Book OR category:Ebook) AND _tags:published",
      "facetFilters": [
        [
          "category:Book",
          "category:-Movie"
        ],
        "author:John Doe"
      ],
      "optionalFilters": [
        "category:Book",
        "author:John Doe"
      ],
      "numericFilters": [
        [
          "inStock = 1",
          "deliveryDate < 1441755506"
        ],
        "price < 1000"
      ],
      "tagFilters": [
        [
          "Book",
          "Movie"
        ],
        "SciFi"
      ],
      "sumOrFiltersScores": false,
      "restrictSearchableAttributes": [
        "title",
        "author"
      ],
      "facets": [
        "*"
      ],
      "facetingAfterDistinct": false,
      "page": 0,
      "offset": 0,
      "length": 0,
      "aroundLatLng": "40.71,-74.01",
      "aroundLatLngViaIP": false,
      "aroundRadius": 1,
      "aroundPrecision": 10,
      "minimumAroundRadius": 1,
      "insideBoundingBox": "string",
      "insidePolygon": [
        [
          47.3165,
          4.9665,
          47.3424,
          5.0201,
          47.32,
          4.9
        ],
        [
          40.9234,
          2.1185,
          38.643,
          1.9916,
          39.2587,
          2.0104
        ]
      ],
      "naturalLanguages": [],
      "ruleContexts": [
        "mobile"
      ],
      "personalizationImpact": 100,
      "userToken": "test-user-123",
      "getRankingInfo": false,
      "synonyms": true,
      "clickAnalytics": false,
      "analytics": true,
      "analyticsTags": [],
      "percentileComputation": true,
      "enableABTest": true,
      "attributesToRetrieve": [
        "author",
        "title",
        "content"
      ],
      "ranking": [
        "typo",
        "geo",
        "words",
        "filters",
        "proximity",
        "attribute",
        "exact",
        "custom"
      ],
      "relevancyStrictness": 90,
      "attributesToHighlight": [
        "author",
        "title",
        "conten",
        "content"
      ],
      "attributesToSnippet": [
        "content:80",
        "description"
      ],
      "highlightPreTag": "<em>",
      "highlightPostTag": "</em>",
      "snippetEllipsisText": "…",
      "restrictHighlightAndSnippetArrays": false,
      "hitsPerPage": 20,
      "minWordSizefor1Typo": 4,
      "minWordSizefor2Typos": 8,
      "typoTolerance": true,
      "allowTyposOnNumericTokens": true,
      "disableTypoToleranceOnAttributes": [
        "sku"
      ],
      "ignorePlurals": [
        "ca",
        "es"
      ],
      "removeStopWords": [
        "ca",
        "es"
      ],
      "queryLanguages": [
        "es"
      ],
      "decompoundQuery": true,
      "enableRules": true,
      "enablePersonalization": false,
      "queryType": "prefixLast",
      "removeWordsIfNoResults": "firstWords",
      "mode": "keywordSearch",
      "semanticSearch": {
        "eventSources": [
          "string"
        ]
      },
      "advancedSyntax": false,
      "optionalWords": "string",
      "disableExactOnAttributes": [
        "description"
      ],
      "exactOnSingleWordQuery": "attribute",
      "alternativesAsExact": [
        "ignorePlurals",
        "singleWordSynonym"
      ],
      "advancedSyntaxFeatures": [
        "exactPhrase",
        "excludeWords"
      ],
      "distinct": 1,
      "replaceSynonymsInHighlight": false,
      "minProximity": 1,
      "responseFields": [
        "*"
      ],
      "maxValuesPerFacet": 100,
      "sortFacetValuesBy": "count",
      "attributeCriteriaComputedByMinProximity": false,
      "attributeCriteriaComputedBy": "best",
      "renderingContent": {
        "facetOrdering": {
          "facets": {
            "order": [
              "string"
            ]
          },
          "values": {
            "property1": {
              "order": [
                "string"
              ],
              "sortRemainingBy": "count",
              "hide": [
                "string"
              ]
            },
            "property2": {
              "order": [
                "string"
              ],
              "sortRemainingBy": "count",
              "hide": [
                "string"
              ]
            }
          }
        },
        "redirect": {
          "url": "string"
        },
        "widgets": {
          "banners": [
            {
              "image": {
                "urls": [
                  {
                    "url": "string"
                  }
                ],
                "title": "string"
              },
              "link": {
                "url": "string"
              }
            }
          ],
          "resultCard": {
            "enabled": true
          }
        }
      },
      "enableReRanking": true,
      "reRankingApplyFilter": [
        {}
      ],
      "query": {
        "remove": [
          "string"
        ],
        "edits": [
          {
            "type": "remove",
            "delete": "string",
            "insert": "string"
          }
        ]
      },
      "automaticFacetFilters": [
        {
          "facet": "string",
          "score": 1,
          "disjunctive": false
        }
      ],
      "automaticOptionalFacetFilters": [
        {
          "facet": "string",
          "score": 1,
          "disjunctive": false
        }
      ]
    },
    "promote": [
      {
        "objectIDs": [
          "test-record-123"
        ],
        "position": 0
      }
    ],
    "filterPromotes": false,
    "hide": [
      {
        "objectID": "test-record-123"
      }
    ],
    "redirect": {
      "indexName": "string"
    },
    "userData": {
      "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
      "pluginVersion": "1.6.0"
    }
  },
  "description": "Display a promotional banner",
  "enabled": true,
  "validity": [
    {
      "from": 0,
      "until": 0
    }
  ],
  "tags": [
    "string"
  ],
  "scope": "string",
  "condition": {
    "pattern": "{facet:genre}",
    "anchoring": "is",
    "alternatives": false,
    "context": "mobile",
    "filters": "genre:comedy"
  }
}
```

<h3 id="create-or-replace-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|[ruleID](#schemaruleid)|true|Unique identifier of a rule object.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|
|body|body|[rule](#schemarule)|true|none|
|» objectID|body|[ruleID](#schemaruleid)|true|Unique identifier of a rule object.|
|» conditions|body|[[condition](#schemacondition)]|false|Conditions that trigger a rule.<br><br>Some consequences require specific conditions or don't require any condition.<br>For more information, see [Conditions](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/#conditions).<br>|
|» consequence|body|[consequence](#schemaconsequence)|true|Effect of the rule.<br><br>For more information, see [Consequences](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/#consequences).<br>|
|» description|body|string|false|Description of the rule's purpose to help you distinguish between different rules.|
|» enabled|body|boolean|false|Whether the rule is active.|
|» validity|body|[[timeRange](#schematimerange)]|false|Time periods when the rule is active.|
|» tags|body|[string]|false|none|
|» scope|body|string|false|none|
|» condition|body|[condition](#schemacondition)|false|**Deprecated.** Legacy field for a single condition. This field is maintained for backward compatibility <br>with older rules but should not be used in new implementations.<br>|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="create-or-replace-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete a rule

<a id="opIddeleteRule"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/rules/string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`DELETE /1/indexes/{indexName}/rules/{objectID}`

Deletes a rule by its ID.
To find the object ID for rules,
use the [`search` operation](https://www.algolia.com/doc/rest-api/search/search-rules).


<h3 id="delete-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|objectID|path|[ruleID](#schemaruleid)|true|Unique identifier of a rule object.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Create or update rules

<a id="opIdsaveRules"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/rules/batch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '[
    {
      "objectID": "string",
      "conditions": [
        {
          "pattern": "{facet:genre}",
          "anchoring": "is",
          "alternatives": false,
          "context": "mobile",
          "filters": "genre:comedy"
        }
      ],
      "consequence": {
        "params": {
          "similarQuery": "comedy drama crime Macy Buscemi",
          "filters": "(category:Book OR category:Ebook) AND _tags:published",
          "facetFilters": [
            [
              "category:Book",
              "category:-Movie"
            ],
            "author:John Doe"
          ],
          "optionalFilters": [
            "category:Book",
            "author:John Doe"
          ],
          "numericFilters": [
            [
              "inStock = 1",
              "deliveryDate < 1441755506"
            ],
            "price < 1000"
          ],
          "tagFilters": [
            [
              "Book",
              "Movie"
            ],
            "SciFi"
          ],
          "sumOrFiltersScores": false,
          "restrictSearchableAttributes": [
            "title",
            "author"
          ],
          "facets": [
            "*"
          ],
          "facetingAfterDistinct": false,
          "page": 0,
          "offset": 0,
          "length": 0,
          "aroundLatLng": "40.71,-74.01",
          "aroundLatLngViaIP": false,
          "aroundRadius": 1,
          "aroundPrecision": 10,
          "minimumAroundRadius": 1,
          "insideBoundingBox": "string",
          "insidePolygon": [
            [
              47.3165,
              4.9665,
              47.3424,
              5.0201,
              47.32,
              4.9
            ],
            [
              40.9234,
              2.1185,
              38.643,
              1.9916,
              39.2587,
              2.0104
            ]
          ],
          "naturalLanguages": [],
          "ruleContexts": [
            "mobile"
          ],
          "personalizationImpact": 100,
          "userToken": "test-user-123",
          "getRankingInfo": false,
          "synonyms": true,
          "clickAnalytics": false,
          "analytics": true,
          "analyticsTags": [],
          "percentileComputation": true,
          "enableABTest": true,
          "attributesToRetrieve": [
            "author",
            "title",
            "content"
          ],
          "ranking": [
            "typo",
            "geo",
            "words",
            "filters",
            "proximity",
            "attribute",
            "exact",
            "custom"
          ],
          "relevancyStrictness": 90,
          "attributesToHighlight": [
            "author",
            "title",
            "conten",
            "content"
          ],
          "attributesToSnippet": [
            "content:80",
            "description"
          ],
          "highlightPreTag": "<em>",
          "highlightPostTag": "</em>",
          "snippetEllipsisText": "…",
          "restrictHighlightAndSnippetArrays": false,
          "hitsPerPage": 20,
          "minWordSizefor1Typo": 4,
          "minWordSizefor2Typos": 8,
          "typoTolerance": true,
          "allowTyposOnNumericTokens": true,
          "disableTypoToleranceOnAttributes": [
            "sku"
          ],
          "ignorePlurals": [
            "ca",
            "es"
          ],
          "removeStopWords": [
            "ca",
            "es"
          ],
          "queryLanguages": [
            "es"
          ],
          "decompoundQuery": true,
          "enableRules": true,
          "enablePersonalization": false,
          "queryType": "prefixLast",
          "removeWordsIfNoResults": "firstWords",
          "mode": "keywordSearch",
          "semanticSearch": {
            "eventSources": [
              "string"
            ]
          },
          "advancedSyntax": false,
          "optionalWords": "string",
          "disableExactOnAttributes": [
            "description"
          ],
          "exactOnSingleWordQuery": "attribute",
          "alternativesAsExact": [
            "ignorePlurals",
            "singleWordSynonym"
          ],
          "advancedSyntaxFeatures": [
            "exactPhrase",
            "excludeWords"
          ],
          "distinct": 1,
          "replaceSynonymsInHighlight": false,
          "minProximity": 1,
          "responseFields": [
            "*"
          ],
          "maxValuesPerFacet": 100,
          "sortFacetValuesBy": "count",
          "attributeCriteriaComputedByMinProximity": false,
          "attributeCriteriaComputedBy": "best",
          "renderingContent": {
            "facetOrdering": {
              "facets": {
                "order": [
                  "string"
                ]
              },
              "values": {
                "property1": {
                  "order": [
                    "string"
                  ],
                  "sortRemainingBy": "count",
                  "hide": [
                    "string"
                  ]
                },
                "property2": {
                  "order": [
                    "string"
                  ],
                  "sortRemainingBy": "count",
                  "hide": [
                    "string"
                  ]
                }
              }
            },
            "redirect": {
              "url": "string"
            },
            "widgets": {
              "banners": [
                {
                  "image": {
                    "urls": [
                      {
                        "url": "string"
                      }
                    ],
                    "title": "string"
                  },
                  "link": {
                    "url": "string"
                  }
                }
              ],
              "resultCard": {
                "enabled": true
              }
            }
          },
          "enableReRanking": true,
          "reRankingApplyFilter": [
            {}
          ],
          "query": {
            "remove": [
              "string"
            ],
            "edits": [
              {
                "type": "remove",
                "delete": "string",
                "insert": "string"
              }
            ]
          },
          "automaticFacetFilters": [
            {
              "facet": "string",
              "score": 1,
              "disjunctive": false
            }
          ],
          "automaticOptionalFacetFilters": [
            {
              "facet": "string",
              "score": 1,
              "disjunctive": false
            }
          ]
        },
        "promote": [
          {
            "objectIDs": [
              "test-record-123"
            ],
            "position": 0
          }
        ],
        "filterPromotes": false,
        "hide": [
          {
            "objectID": "test-record-123"
          }
        ],
        "redirect": {
          "indexName": "string"
        },
        "userData": {
          "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
          "pluginVersion": "1.6.0"
        }
      },
      "description": "Display a promotional banner",
      "enabled": true,
      "validity": [
        {
          "from": 0,
          "until": 0
        }
      ],
      "tags": [
        "string"
      ],
      "scope": "string",
      "condition": {
        "pattern": "{facet:genre}",
        "anchoring": "is",
        "alternatives": false,
        "context": "mobile",
        "filters": "genre:comedy"
      }
    }
  ]'
```

`POST /1/indexes/{indexName}/rules/batch`

Create or update multiple rules.

If a rule with the specified object ID doesn't exist, Algolia creates a new one.
Otherwise, existing rules are replaced.

This operation is subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


> Body parameter

```json
[
  {
    "objectID": "string",
    "conditions": [
      {
        "pattern": "{facet:genre}",
        "anchoring": "is",
        "alternatives": false,
        "context": "mobile",
        "filters": "genre:comedy"
      }
    ],
    "consequence": {
      "params": {
        "similarQuery": "comedy drama crime Macy Buscemi",
        "filters": "(category:Book OR category:Ebook) AND _tags:published",
        "facetFilters": [
          [
            "category:Book",
            "category:-Movie"
          ],
          "author:John Doe"
        ],
        "optionalFilters": [
          "category:Book",
          "author:John Doe"
        ],
        "numericFilters": [
          [
            "inStock = 1",
            "deliveryDate < 1441755506"
          ],
          "price < 1000"
        ],
        "tagFilters": [
          [
            "Book",
            "Movie"
          ],
          "SciFi"
        ],
        "sumOrFiltersScores": false,
        "restrictSearchableAttributes": [
          "title",
          "author"
        ],
        "facets": [
          "*"
        ],
        "facetingAfterDistinct": false,
        "page": 0,
        "offset": 0,
        "length": 0,
        "aroundLatLng": "40.71,-74.01",
        "aroundLatLngViaIP": false,
        "aroundRadius": 1,
        "aroundPrecision": 10,
        "minimumAroundRadius": 1,
        "insideBoundingBox": "string",
        "insidePolygon": [
          [
            47.3165,
            4.9665,
            47.3424,
            5.0201,
            47.32,
            4.9
          ],
          [
            40.9234,
            2.1185,
            38.643,
            1.9916,
            39.2587,
            2.0104
          ]
        ],
        "naturalLanguages": [],
        "ruleContexts": [
          "mobile"
        ],
        "personalizationImpact": 100,
        "userToken": "test-user-123",
        "getRankingInfo": false,
        "synonyms": true,
        "clickAnalytics": false,
        "analytics": true,
        "analyticsTags": [],
        "percentileComputation": true,
        "enableABTest": true,
        "attributesToRetrieve": [
          "author",
          "title",
          "content"
        ],
        "ranking": [
          "typo",
          "geo",
          "words",
          "filters",
          "proximity",
          "attribute",
          "exact",
          "custom"
        ],
        "relevancyStrictness": 90,
        "attributesToHighlight": [
          "author",
          "title",
          "conten",
          "content"
        ],
        "attributesToSnippet": [
          "content:80",
          "description"
        ],
        "highlightPreTag": "<em>",
        "highlightPostTag": "</em>",
        "snippetEllipsisText": "…",
        "restrictHighlightAndSnippetArrays": false,
        "hitsPerPage": 20,
        "minWordSizefor1Typo": 4,
        "minWordSizefor2Typos": 8,
        "typoTolerance": true,
        "allowTyposOnNumericTokens": true,
        "disableTypoToleranceOnAttributes": [
          "sku"
        ],
        "ignorePlurals": [
          "ca",
          "es"
        ],
        "removeStopWords": [
          "ca",
          "es"
        ],
        "queryLanguages": [
          "es"
        ],
        "decompoundQuery": true,
        "enableRules": true,
        "enablePersonalization": false,
        "queryType": "prefixLast",
        "removeWordsIfNoResults": "firstWords",
        "mode": "keywordSearch",
        "semanticSearch": {
          "eventSources": [
            "string"
          ]
        },
        "advancedSyntax": false,
        "optionalWords": "string",
        "disableExactOnAttributes": [
          "description"
        ],
        "exactOnSingleWordQuery": "attribute",
        "alternativesAsExact": [
          "ignorePlurals",
          "singleWordSynonym"
        ],
        "advancedSyntaxFeatures": [
          "exactPhrase",
          "excludeWords"
        ],
        "distinct": 1,
        "replaceSynonymsInHighlight": false,
        "minProximity": 1,
        "responseFields": [
          "*"
        ],
        "maxValuesPerFacet": 100,
        "sortFacetValuesBy": "count",
        "attributeCriteriaComputedByMinProximity": false,
        "attributeCriteriaComputedBy": "best",
        "renderingContent": {
          "facetOrdering": {
            "facets": {
              "order": [
                "string"
              ]
            },
            "values": {
              "property1": {
                "order": [
                  "string"
                ],
                "sortRemainingBy": "count",
                "hide": [
                  "string"
                ]
              },
              "property2": {
                "order": [
                  "string"
                ],
                "sortRemainingBy": "count",
                "hide": [
                  "string"
                ]
              }
            }
          },
          "redirect": {
            "url": "string"
          },
          "widgets": {
            "banners": [
              {
                "image": {
                  "urls": [
                    {
                      "url": "string"
                    }
                  ],
                  "title": "string"
                },
                "link": {
                  "url": "string"
                }
              }
            ],
            "resultCard": {
              "enabled": true
            }
          }
        },
        "enableReRanking": true,
        "reRankingApplyFilter": [
          {}
        ],
        "query": {
          "remove": [
            "string"
          ],
          "edits": [
            {
              "type": "remove",
              "delete": "string",
              "insert": "string"
            }
          ]
        },
        "automaticFacetFilters": [
          {
            "facet": "string",
            "score": 1,
            "disjunctive": false
          }
        ],
        "automaticOptionalFacetFilters": [
          {
            "facet": "string",
            "score": 1,
            "disjunctive": false
          }
        ]
      },
      "promote": [
        {
          "objectIDs": [
            "test-record-123"
          ],
          "position": 0
        }
      ],
      "filterPromotes": false,
      "hide": [
        {
          "objectID": "test-record-123"
        }
      ],
      "redirect": {
        "indexName": "string"
      },
      "userData": {
        "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
        "pluginVersion": "1.6.0"
      }
    },
    "description": "Display a promotional banner",
    "enabled": true,
    "validity": [
      {
        "from": 0,
        "until": 0
      }
    ],
    "tags": [
      "string"
    ],
    "scope": "string",
    "condition": {
      "pattern": "{facet:genre}",
      "anchoring": "is",
      "alternatives": false,
      "context": "mobile",
      "filters": "genre:comedy"
    }
  }
]
```

<h3 id="create-or-update-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|
|clearExistingRules|query|boolean|false|Whether existing rules should be deleted before adding this batch.|
|body|body|[[rule](#schemarule)]|true|none|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="create-or-update-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete all rules

<a id="opIdclearRules"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/rules/clear' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`POST /1/indexes/{indexName}/rules/clear`

Deletes all rules from the index.

<h3 id="delete-all-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|forwardToReplicas|query|boolean|false|Whether changes are applied to replica indices.|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-all-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Search for rules

<a id="opIdsearchRules"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/rules/search' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "query": "",
    "anchoring": "is",
    "context": "mobile",
    "page": 0,
    "hitsPerPage": 20,
    "enabled": null
  }'
```

`POST /1/indexes/{indexName}/rules/search`

Searches for rules in your index.

> Body parameter

```json
{
  "query": "",
  "anchoring": "is",
  "context": "mobile",
  "page": 0,
  "hitsPerPage": 20,
  "enabled": null
}
```

<h3 id="search-for-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|body|body|object|false|none|
|» query|body|[parameters_query](#schemaparameters_query)|false|Search query for rules.|
|» anchoring|body|[anchoring](#schemaanchoring)|false|Which part of the search query the pattern should match:<br><br>- `startsWith`. The pattern must match the beginning of the query.<br>- `endsWith`. The pattern must match the end of the query.<br>- `is`. The pattern must match the query exactly.<br>- `contains`. The pattern must match anywhere in the query.<br><br>Empty queries are only allowed as patterns with `anchoring: is`.<br>|
|» context|body|string|false|Only return rules that match the context (exact match).|
|» page|body|[parameters_page](#schemaparameters_page)|false|Requested page of the API response.<br><br>Algolia uses `page` and `hitsPerPage` to control how search results are displayed ([paginated](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/pagination/js)).<br><br>- `hitsPerPage`: sets the number of search results (_hits_) displayed per page.<br>- `page`: specifies the page number of the search results you want to retrieve. Page numbering starts at 0, so the first page is `page=0`, the second is `page=1`, and so on.<br><br>For example, to display 10 results per page starting from the third page, set `hitsPerPage` to 10 and `page` to 2.<br>|
|» hitsPerPage|body|[parameters_hitsPerPage](#schemaparameters_hitsperpage)|false|Maximum number of hits per page.<br><br>Algolia uses `page` and `hitsPerPage` to control how search results are displayed ([paginated](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/pagination/js)).<br><br>- `hitsPerPage`: sets the number of search results (_hits_) displayed per page.<br>- `page`: specifies the page number of the search results you want to retrieve. Page numbering starts at 0, so the first page is `page=0`, the second is `page=1`, and so on.<br><br>For example, to display 10 results per page starting from the third page, set `hitsPerPage` to 10 and `page` to 2.<br>|
|» enabled|body|boolean \| null|false|none|
|» » *oneOf*|body|boolean|false|If `true`, return only enabled rules.<br>If `false`, return only inactive rules.<br>By default, _all_ rules are returned.<br>|
|» » *oneOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» anchoring|is|
|» anchoring|startsWith|
|» anchoring|endsWith|
|» anchoring|contains|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "objectID": "string",
      "conditions": [
        {
          "pattern": "{facet:genre}",
          "anchoring": "is",
          "alternatives": false,
          "context": "mobile",
          "filters": "genre:comedy"
        }
      ],
      "consequence": {
        "params": {
          "similarQuery": "comedy drama crime Macy Buscemi",
          "filters": "(category:Book OR category:Ebook) AND _tags:published",
          "facetFilters": [
            [
              "category:Book",
              "category:-Movie"
            ],
            "author:John Doe"
          ],
          "optionalFilters": [
            "category:Book",
            "author:John Doe"
          ],
          "numericFilters": [
            [
              "inStock = 1",
              "deliveryDate < 1441755506"
            ],
            "price < 1000"
          ],
          "tagFilters": [
            [
              "Book",
              "Movie"
            ],
            "SciFi"
          ],
          "sumOrFiltersScores": false,
          "restrictSearchableAttributes": [
            "title",
            "author"
          ],
          "facets": [
            "*"
          ],
          "facetingAfterDistinct": false,
          "page": 0,
          "offset": 0,
          "length": 0,
          "aroundLatLng": "40.71,-74.01",
          "aroundLatLngViaIP": false,
          "aroundRadius": 1,
          "aroundPrecision": 10,
          "minimumAroundRadius": 1,
          "insideBoundingBox": "string",
          "insidePolygon": [
            [
              47.3165,
              4.9665,
              47.3424,
              5.0201,
              47.32,
              4.9
            ],
            [
              40.9234,
              2.1185,
              38.643,
              1.9916,
              39.2587,
              2.0104
            ]
          ],
          "naturalLanguages": [],
          "ruleContexts": [
            "mobile"
          ],
          "personalizationImpact": 100,
          "userToken": "test-user-123",
          "getRankingInfo": false,
          "synonyms": true,
          "clickAnalytics": false,
          "analytics": true,
          "analyticsTags": [],
          "percentileComputation": true,
          "enableABTest": true,
          "attributesToRetrieve": [
            "author",
            "title",
            "content"
          ],
          "ranking": [
            "typo",
            "geo",
            "words",
            "filters",
            "proximity",
            "attribute",
            "exact",
            "custom"
          ],
          "relevancyStrictness": 90,
          "attributesToHighlight": [
            "author",
            "title",
            "conten",
            "content"
          ],
          "attributesToSnippet": [
            "content:80",
            "description"
          ],
          "highlightPreTag": "<em>",
          "highlightPostTag": "</em>",
          "snippetEllipsisText": "…",
          "restrictHighlightAndSnippetArrays": false,
          "hitsPerPage": 20,
          "minWordSizefor1Typo": 4,
          "minWordSizefor2Typos": 8,
          "typoTolerance": true,
          "allowTyposOnNumericTokens": true,
          "disableTypoToleranceOnAttributes": [
            "sku"
          ],
          "ignorePlurals": [
            "ca",
            "es"
          ],
          "removeStopWords": [
            "ca",
            "es"
          ],
          "queryLanguages": [
            "es"
          ],
          "decompoundQuery": true,
          "enableRules": true,
          "enablePersonalization": false,
          "queryType": "prefixLast",
          "removeWordsIfNoResults": "firstWords",
          "mode": "keywordSearch",
          "semanticSearch": {
            "eventSources": [
              "string"
            ]
          },
          "advancedSyntax": false,
          "optionalWords": "string",
          "disableExactOnAttributes": [
            "description"
          ],
          "exactOnSingleWordQuery": "attribute",
          "alternativesAsExact": [
            "ignorePlurals",
            "singleWordSynonym"
          ],
          "advancedSyntaxFeatures": [
            "exactPhrase",
            "excludeWords"
          ],
          "distinct": 1,
          "replaceSynonymsInHighlight": false,
          "minProximity": 1,
          "responseFields": [
            "*"
          ],
          "maxValuesPerFacet": 100,
          "sortFacetValuesBy": "count",
          "attributeCriteriaComputedByMinProximity": false,
          "attributeCriteriaComputedBy": "best",
          "renderingContent": {
            "facetOrdering": {
              "facets": {
                "order": [
                  "string"
                ]
              },
              "values": {
                "property1": {
                  "order": [
                    "string"
                  ],
                  "sortRemainingBy": "count",
                  "hide": [
                    "string"
                  ]
                },
                "property2": {
                  "order": [
                    "string"
                  ],
                  "sortRemainingBy": "count",
                  "hide": [
                    "string"
                  ]
                }
              }
            },
            "redirect": {
              "url": "string"
            },
            "widgets": {
              "banners": [
                {
                  "image": {
                    "urls": [
                      {
                        "url": "string"
                      }
                    ],
                    "title": "string"
                  },
                  "link": {
                    "url": "string"
                  }
                }
              ],
              "resultCard": {
                "enabled": true
              }
            }
          },
          "enableReRanking": true,
          "reRankingApplyFilter": [
            {}
          ],
          "query": {
            "remove": [
              "string"
            ],
            "edits": [
              {
                "type": "remove",
                "delete": "string",
                "insert": "string"
              }
            ]
          },
          "automaticFacetFilters": [
            {
              "facet": "string",
              "score": 1,
              "disjunctive": false
            }
          ],
          "automaticOptionalFacetFilters": [
            {
              "facet": "string",
              "score": 1,
              "disjunctive": false
            }
          ]
        },
        "promote": [
          {
            "objectIDs": [
              "test-record-123"
            ],
            "position": 0
          }
        ],
        "filterPromotes": false,
        "hide": [
          {
            "objectID": "test-record-123"
          }
        ],
        "redirect": {
          "indexName": "string"
        },
        "userData": {
          "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
          "pluginVersion": "1.6.0"
        }
      },
      "description": "Display a promotional banner",
      "enabled": true,
      "validity": [
        {
          "from": 0,
          "until": 0
        }
      ],
      "tags": [
        "string"
      ],
      "scope": "string",
      "condition": {
        "pattern": "{facet:genre}",
        "anchoring": "is",
        "alternatives": false,
        "context": "mobile",
        "filters": "genre:comedy"
      }
    }
  ],
  "nbHits": 0,
  "page": 0,
  "nbPages": 0
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="search-for-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="search-for-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[rule](#schemarule)]|true|none|Rules that matched the search criteria.|
|nbHits|integer|true|none|Number of rules that matched the search criteria.|
|page|integer|true|none|Current page.|
|nbPages|integer|true|none|Number of pages.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Add or delete dictionary entries

<a id="opIdbatchDictionaryEntries"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/dictionaries/plurals/batch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "clearExistingDictionaryEntries": false,
    "requests": [
      {
        "action": "addEntry",
        "body": {
          "objectID": "828afd405e1f4fe950b6b98c2c43c032",
          "language": "af",
          "word": "the",
          "words": [
            "cheval",
            "cheveaux"
          ],
          "decomposition": [
            "kopf",
            "schmerz",
            "tablette"
          ],
          "state": "enabled",
          "type": "custom"
        }
      }
    ]
  }'
```

`POST /1/dictionaries/{dictionaryName}/batch`

Adds or deletes multiple entries from your plurals, segmentation, or stop word dictionaries.

> Body parameter

```json
{
  "clearExistingDictionaryEntries": false,
  "requests": [
    {
      "action": "addEntry",
      "body": {
        "objectID": "828afd405e1f4fe950b6b98c2c43c032",
        "language": "af",
        "word": "the",
        "words": [
          "cheval",
          "cheveaux"
        ],
        "decomposition": [
          "kopf",
          "schmerz",
          "tablette"
        ],
        "state": "enabled",
        "type": "custom"
      }
    }
  ]
}
```

<h3 id="add-or-delete-dictionary-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dictionaryName|path|[dictionaryType](#schemadictionarytype)|true|Dictionary type in which to search.|
|body|body|object|true|none|
|» clearExistingDictionaryEntries|body|boolean|false|Whether to replace all custom entries in the dictionary with the ones sent with this request.|
|» requests|body|[object]|true|List of additions and deletions to your dictionaries.|
|» » action|body|[dictionaryAction](#schemadictionaryaction)|true|Actions to perform.|
|» » body|body|[dictionaryEntry](#schemadictionaryentry)|true|Dictionary entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dictionaryName|plurals|
|dictionaryName|stopwords|
|dictionaryName|compounds|
|» » action|addEntry|
|» » action|deleteEntry|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="add-or-delete-dictionary-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Search dictionary entries

<a id="opIdsearchDictionaryEntries"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/dictionaries/plurals/search' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "query": "",
    "page": 0,
    "hitsPerPage": 20,
    "language": "af"
  }'
```

`POST /1/dictionaries/{dictionaryName}/search`

Searches for standard and custom dictionary entries.

> Body parameter

```json
{
  "query": "",
  "page": 0,
  "hitsPerPage": 20,
  "language": "af"
}
```

<h3 id="search-dictionary-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dictionaryName|path|[dictionaryType](#schemadictionarytype)|true|Dictionary type in which to search.|
|body|body|object|true|none|
|» query|body|[query](#schemaquery)|true|Search query.|
|» page|body|[page](#schemapage)|false|Page of search results to retrieve.|
|» hitsPerPage|body|[hitsPerPage](#schemahitsperpage)|false|Number of hits per page.|
|» language|body|[supportedLanguage](#schemasupportedlanguage)|false|ISO code for a supported language.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dictionaryName|plurals|
|dictionaryName|stopwords|
|dictionaryName|compounds|
|» language|af|
|» language|ar|
|» language|az|
|» language|bg|
|» language|bn|
|» language|ca|
|» language|cs|
|» language|cy|
|» language|da|
|» language|de|
|» language|el|
|» language|en|
|» language|eo|
|» language|es|
|» language|et|
|» language|eu|
|» language|fa|
|» language|fi|
|» language|fo|
|» language|fr|
|» language|ga|
|» language|gl|
|» language|he|
|» language|hi|
|» language|hu|
|» language|hy|
|» language|id|
|» language|is|
|» language|it|
|» language|ja|
|» language|ka|
|» language|kk|
|» language|ko|
|» language|ku|
|» language|ky|
|» language|lt|
|» language|lv|
|» language|mi|
|» language|mn|
|» language|mr|
|» language|ms|
|» language|mt|
|» language|nb|
|» language|nl|
|» language|no|
|» language|ns|
|» language|pl|
|» language|ps|
|» language|pt|
|» language|pt-br|
|» language|qu|
|» language|ro|
|» language|ru|
|» language|sk|
|» language|sq|
|» language|sv|
|» language|sw|
|» language|ta|
|» language|te|
|» language|th|
|» language|tl|
|» language|tn|
|» language|tr|
|» language|tt|
|» language|uk|
|» language|ur|
|» language|uz|
|» language|zh|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "objectID": "828afd405e1f4fe950b6b98c2c43c032",
      "language": "af",
      "word": "the",
      "words": [
        "cheval",
        "cheveaux"
      ],
      "decomposition": [
        "kopf",
        "schmerz",
        "tablette"
      ],
      "state": "enabled",
      "type": "custom"
    }
  ],
  "page": 0,
  "nbHits": 20,
  "nbPages": 1
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="search-dictionary-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[searchDictionaryEntriesResponse](#schemasearchdictionaryentriesresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve dictionary settings

<a id="opIdgetDictionarySettings"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/dictionaries/*/settings' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/dictionaries/*/settings`

Retrieves the languages for which standard dictionary entries are turned off.

> Example responses

> 200 Response

```json
{
  "disableStandardEntries": {
    "plurals": {
      "fr": false
    },
    "stopwords": {
      "fr": false
    },
    "compounds": {
      "fr": false
    }
  }
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-dictionary-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="retrieve-dictionary-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableStandardEntries|[standardEntries](#schemastandardentries)|true|none|Turn off the built-in Algolia stop words for specific languages.<br>Only `stopwords` is supported.<br>The keys of the `stopwords` object are [language ISO codes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages) of languages with a built-in stop-word dictionary.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Update dictionary settings

<a id="opIdsetDictionarySettings"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/dictionaries/*/settings' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "disableStandardEntries": {
      "plurals": {
        "fr": false
      },
      "stopwords": {
        "fr": false
      },
      "compounds": {
        "fr": false
      }
    }
  }'
```

`PUT /1/dictionaries/*/settings`

Turns standard stop word dictionary entries on or off for a given language.

> Body parameter

```json
{
  "disableStandardEntries": {
    "plurals": {
      "fr": false
    },
    "stopwords": {
      "fr": false
    },
    "compounds": {
      "fr": false
    }
  }
}
```

<h3 id="update-dictionary-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» disableStandardEntries|body|[standardEntries](#schemastandardentries)|true|Turn off the built-in Algolia stop words for specific languages.<br>Only `stopwords` is supported.<br>The keys of the `stopwords` object are [language ISO codes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages) of languages with a built-in stop-word dictionary.<br>|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="update-dictionary-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## List available languages

<a id="opIdgetDictionaryLanguages"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/dictionaries/*/languages' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/dictionaries/*/languages`

Lists supported languages with their supported dictionary types and number of custom entries.


<a href="https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages">Supported languages.</a>

> Example responses

> 200 Response

```json
{
  "property1": {
    "plurals": {
      "nbCustomEntries": 0
    },
    "stopwords": {
      "nbCustomEntries": 0
    },
    "compounds": {
      "nbCustomEntries": 0
    }
  },
  "property2": {
    "plurals": {
      "nbCustomEntries": 0
    },
    "stopwords": {
      "nbCustomEntries": 0
    },
    "compounds": {
      "nbCustomEntries": 0
    }
  }
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="list-available-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="list-available-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[languages](#schemalanguages)|false|none|Dictionary language.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## List user IDs

<a id="opIdlistUserIds"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters/mapping' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/clusters/mapping`

<aside class="warning">
This operation is deprecated
</aside>

Lists the userIDs assigned to a multi-cluster application.

Since it can take a few seconds to get the data from the different clusters,
the response isn't real-time.


<h3 id="list-user-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|Requested page of the API response.<br>If `null`, the API response is not paginated.<br>|
|hitsPerPage|query|integer|false|Number of hits per page.|

> Example responses

> 200 Response

```json
{
  "userIDs": [
    {
      "userID": "user1",
      "clusterName": "c1-test",
      "nbRecords": 42,
      "dataSize": 0
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="list-user-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="list-user-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userIDs|[[userId](#schemauserid-1)]|true|none|User IDs.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Assign or move a user ID

<a id="opIdassignUserId"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters/mapping' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -H 'X-Algolia-User-ID: user1' \
  -d '{
    "cluster": "c11-test"
  }'
```

`POST /1/clusters/mapping`

<aside class="warning">
This operation is deprecated
</aside>

Assigns or moves a user ID to a cluster.

The time it takes to move a user is proportional to the amount of data linked to the user ID.


> Body parameter

```json
{
  "cluster": "c11-test"
}
```

<h3 id="assign-or-move-a-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Algolia-User-ID|header|[userID](#schemauserid)|true|Unique identifier of the user who makes the search request.|
|body|body|object|true|none|
|» cluster|body|[clusterName](#schemaclustername)|true|Cluster name.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="assign-or-move-a-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="assign-or-move-a-user-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|[createdAt](#schemacreatedat)|true|none|Date and time when the object was created, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Assign multiple userIDs

<a id="opIdbatchAssignUserIds"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters/mapping/batch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -H 'X-Algolia-User-ID: user1' \
  -d '{
    "cluster": "c11-test",
    "users": [
      "einstein",
      "bohr",
      "feynman"
    ]
  }'
```

`POST /1/clusters/mapping/batch`

<aside class="warning">
This operation is deprecated
</aside>

Assigns multiple user IDs to a cluster.

**You can't move users with this operation**.


> Body parameter

```json
{
  "cluster": "c11-test",
  "users": [
    "einstein",
    "bohr",
    "feynman"
  ]
}
```

<h3 id="assign-multiple-userids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Algolia-User-ID|header|[userID](#schemauserid)|true|Unique identifier of the user who makes the search request.|
|body|body|object|true|none|
|» cluster|body|[clusterName](#schemaclustername)|true|Cluster name.|
|» users|body|[string]|true|User IDs to assign.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="assign-multiple-userids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="assign-multiple-userids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|[createdAt](#schemacreatedat)|true|none|Date and time when the object was created, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Get top user IDs

<a id="opIdgetTopUserIds"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters/mapping/top' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/clusters/mapping/top`

<aside class="warning">
This operation is deprecated
</aside>

Get the IDs of the 10 users with the highest number of records per cluster.

Since it can take a few seconds to get the data from the different clusters,
the response isn't real-time.


> Example responses

> 200 Response

```json
{
  "topUsers": [
    {
      "property1": [
        {
          "userID": "user1",
          "clusterName": "c1-test",
          "nbRecords": 42,
          "dataSize": 0
        }
      ],
      "property2": [
        {
          "userID": "user1",
          "clusterName": "c1-test",
          "nbRecords": 42,
          "dataSize": 0
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="get-top-user-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="get-top-user-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topUsers|[object]|true|none|Key-value pairs with cluster names as keys and lists of users with the highest number of records per cluster as values.|
|» **additionalProperties**|[[userId](#schemauserid-1)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve user ID

<a id="opIdgetUserId"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters/mapping/user1' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/clusters/mapping/{userID}`

<aside class="warning">
This operation is deprecated
</aside>

Returns the user ID data stored in the mapping.

Since it can take a few seconds to get the data from the different clusters,
the response isn't real-time.


<h3 id="retrieve-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userID|path|[userID](#schemauserid)|true|Unique identifier of the user who makes the search request.|

> Example responses

> 200 Response

```json
{
  "userID": "user1",
  "clusterName": "c1-test",
  "nbRecords": 42,
  "dataSize": 0
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[userId](#schemauserid-1)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete user ID

<a id="opIdremoveUserId"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters/mapping/user1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`DELETE /1/clusters/mapping/{userID}`

<aside class="warning">
This operation is deprecated
</aside>

Deletes a user ID and its associated data from the clusters.

<h3 id="delete-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userID|path|[userID](#schemauserid)|true|Unique identifier of the user who makes the search request.|

> Example responses

> 200 Response

```json
{
  "deletedAt": "2023-06-27T14:42:38.831Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="delete-user-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedAt|[deletedAt](#schemadeletedat)|true|none|Date and time when the object was deleted, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## List clusters

<a id="opIdlistClusters"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/clusters`

<aside class="warning">
This operation is deprecated
</aside>

Lists the available clusters in a multi-cluster setup.

> Example responses

> 200 Response

```json
{
  "topUsers": [
    "c11-test"
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="list-clusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="list-clusters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topUsers|[[clusterName](#schemaclustername)]|true|none|Key-value pairs with cluster names as keys and lists of users with the highest number of records per cluster as values.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Search for user IDs

<a id="opIdsearchUserIds"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters/mapping/search' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "query": "string",
    "clusterName": "c11-test",
    "page": 0,
    "hitsPerPage": 20
  }'
```

`POST /1/clusters/mapping/search`

<aside class="warning">
This operation is deprecated
</aside>

Since it can take a few seconds to get the data from the different clusters,
the response isn't real-time.

To ensure rapid updates, the user IDs index isn't built at the same time as the mapping. Instead, it's built every 12 hours, at the same time as the update of user ID usage. For example, if you add or move a user ID, the search will show an old value until the next time the mapping is rebuilt (every 12 hours).


> Body parameter

```json
{
  "query": "string",
  "clusterName": "c11-test",
  "page": 0,
  "hitsPerPage": 20
}
```

<h3 id="search-for-user-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|string|true|none|
|» clusterName|body|[clusterName](#schemaclustername)|false|Cluster name.|
|» page|body|[page](#schemapage)|false|Page of search results to retrieve.|
|» hitsPerPage|body|[hitsPerPage](#schemahitsperpage)|false|Number of hits per page.|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "userID": "user1",
      "clusterName": "c11-test",
      "nbRecords": 3,
      "dataSize": 481,
      "objectID": "string",
      "_highlightResult": {
        "userID": {
          "value": "<em>George</em> <em>Clo</em>oney",
          "matchLevel": "none",
          "matchedWords": [
            "action"
          ],
          "fullyHighlighted": true
        },
        "clusterName": {
          "value": "<em>George</em> <em>Clo</em>oney",
          "matchLevel": "none",
          "matchedWords": [
            "action"
          ],
          "fullyHighlighted": true
        }
      }
    }
  ],
  "nbHits": 20,
  "page": 0,
  "hitsPerPage": 20,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="search-for-user-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="search-for-user-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[object]|true|none|User objects that match the query.|
|» userID|[userID](#schemauserid)|true|none|Unique identifier of the user who makes the search request.|
|» clusterName|[clusterName](#schemaclustername)|true|none|Cluster name.|
|» nbRecords|[nbRecords](#schemanbrecords)|true|none|Number of records in the cluster.|
|» dataSize|[dataSize](#schemadatasize)|true|none|Data size taken by all the users assigned to the cluster.|
|» objectID|string|true|none|userID of the requested user. Same as userID.|
|» _highlightResult|object|true|none|none|
|» » userID|[highlightResult](#schemahighlightresult)|true|none|none|
|» » clusterName|[highlightResult](#schemahighlightresult)|true|none|none|
|nbHits|[nbHits](#schemanbhits)|true|none|Number of results (hits).|
|page|[page](#schemapage)|true|none|Page of search results to retrieve.|
|hitsPerPage|[parameters_hitsPerPage](#schemaparameters_hitsperpage)|true|none|Maximum number of hits per page.<br><br>Algolia uses `page` and `hitsPerPage` to control how search results are displayed ([paginated](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/pagination/js)).<br><br>- `hitsPerPage`: sets the number of search results (_hits_) displayed per page.<br>- `page`: specifies the page number of the search results you want to retrieve. Page numbering starts at 0, so the first page is `page=0`, the second is `page=1`, and so on.<br><br>For example, to display 10 results per page starting from the third page, set `hitsPerPage` to 10 and `page` to 2.<br>|
|updatedAt|[updatedAt](#schemaupdatedat)|true|none|Date and time when the object was updated, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Get migration and user mapping status

<a id="opIdhasPendingMappings"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/clusters/mapping/pending' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/clusters/mapping/pending`

<aside class="warning">
This operation is deprecated
</aside>

To determine when the time-consuming process of creating a large batch of users or migrating users from one cluster to another is complete, this operation retrieves the status of the process.


<h3 id="get-migration-and-user-mapping-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|getClusters|query|boolean|false|Whether to include the cluster's pending mapping state in the response.|

> Example responses

> 200 Response

```json
{
  "pending": true,
  "clusters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="get-migration-and-user-mapping-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="get-migration-and-user-mapping-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pending|boolean|true|none|Whether there are clusters undergoing migration, creation, or deletion.|
|clusters|object|false|none|Cluster pending mapping state: migrating, creating, deleting.<br>|
|» **additionalProperties**|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## List allowed sources

<a id="opIdgetSources"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/security/sources' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/security/sources`

Retrieves all allowed IP addresses with access to your application.

> Example responses

> 200 Response

```json
[
  {
    "source": "10.0.0.1/32",
    "description": "Server subnet"
  }
]
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="list-allowed-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[sources](#schemasources)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Replace allowed sources

<a id="opIdreplaceSources"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/security/sources' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '[
    {
      "source": "10.0.0.1/32",
      "description": "Server subnet"
    }
  ]'
```

`PUT /1/security/sources`

Replaces the list of allowed sources.

> Body parameter

```json
[
  {
    "source": "10.0.0.1/32",
    "description": "Server subnet"
  }
]
```

<h3 id="replace-allowed-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[sources](#schemasources)|true|Allowed sources.|

> Example responses

> 200 Response

```json
{
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="replace-allowed-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="replace-allowed-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updatedAt|[updatedAt](#schemaupdatedat)|true|none|Date and time when the object was updated, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Add a source

<a id="opIdappendSource"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/security/sources/append' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "source": "10.0.0.1/32",
    "description": "Server subnet"
  }'
```

`POST /1/security/sources/append`

Adds a source to the list of allowed sources.

> Body parameter

```json
{
  "source": "10.0.0.1/32",
  "description": "Server subnet"
}
```

<h3 id="add-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[source](#schemasource)|true|Source to add.|
|» source|body|string|true|IP address range of the source.|
|» description|body|string|false|Source description.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="add-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="add-a-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|[createdAt](#schemacreatedat)|true|none|Date and time when the object was created, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Delete a source

<a id="opIddeleteSource"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/security/sources/10.0.0.1%2F32' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`DELETE /1/security/sources/{source}`

Deletes a source from the list of allowed sources.

<h3 id="delete-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|IP address range of the source.|

> Example responses

> 200 Response

```json
{
  "deletedAt": "2023-06-27T14:42:38.831Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="delete-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="delete-a-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedAt|[deletedAt](#schemadeletedat)|true|none|Date and time when the object was deleted, in RFC 3339 format.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Retrieve log entries

<a id="opIdgetLogs"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/logs' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/logs`

The request must be authenticated by an API key with the [`logs` ACL](https://www.algolia.com/doc/guides/security/api-keys/#access-control-list-acl).

- Logs are held for the last seven days.
- Up to 1,000 API requests per server are logged.
- This request counts towards your [operations quota](https://support.algolia.com/hc/articles/17245378392977-How-does-Algolia-count-records-and-operations) but doesn't appear in the logs itself.


<h3 id="retrieve-log-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|First log entry to retrieve. The most recent entries are listed first.|
|length|query|integer|false|Maximum number of entries to retrieve.|
|indexName|query|string \| null|false|Index for which to retrieve log entries.<br>By default, log entries are retrieved for all indices.<br>|
|type|query|[logType](#schemalogtype)|false|Type of log entries to retrieve.<br>By default, all log entries are retrieved.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|query|
|type|build|
|type|error|

> Example responses

> 200 Response

```json
{
  "logs": [
    {
      "cid": "MyAppl-1tMcE-a7BqLm2Pd0Z",
      "timestamp": "2023-03-08T12:34:56Z",
      "method": "GET",
      "answer_code": "200",
      "query_body": "{\\n \\\"requests\\\": [\\n  {\\n   \\\"indexName\\\": \\\"best_buy\\\",\\n   \\\"params\\\": \\\"query=&hitsPerPage=10&page=0&attributesToRetrieve=*&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&getRankingInfo=1&facets=%5B%22brand%22%2C%22categories%22%2C%22free_shipping%22%2C%22type%22%5D&tagFilters=\\\"\\n  }\\n ]\\n}\\n",
      "answer": "'n{\\n \"results\": [\\n  {\\n   \"hits\": [\\n    {\\n     \"name\": \"Amazon - Fire TV Stick\",\\n     \"description\": \"Amazon Fire TV Stick connects to your TV's HDMI port. Just grab and go to enjoy Netflix, Prime Instant Video, Hulu Plus, YouTube.com, music, and much more.\",\\n     \"brand\": \"Amazon\",\\n     \"categories\": [\\n      \"TV & Home Theater\",\\n      \"Streaming Media Players\"\\n     ],\\n     \"hierarchicalCategories\": {\\n      \"lvl0\": \"TV & Home Theater\",\\n      \"lvl1\": \"TV & Home Theater > Streaming Media Players\"\\n     },\\n     \"type\": \"Streaming media player\",\\n     \"price\": 39.99,\\n     \"price_range\": \"1 }\\n   ]\\n  }\\n ]\\n}'\n",
      "url": "/1/indexes",
      "ip": "93.184.216.34",
      "query_headers": "User-Agent: curl/7.24.0 (x86_64-apple-darwin12.0) libcurl/7.24.0 OpenSSL/0.9.8x zlib/1.2.5\\nHost: example.com\\nAccept: */*\\nContent-Type: application/json; charset=utf-8\\nX-Algolia-API-Key: 20f***************************\\nX-Algolia-Application-Id: MyApplicationID\\n",
      "sha1": "26c53bd7e38ca71f4741b71994cd94a600b7ac68",
      "nb_api_calls": "1",
      "processing_time_ms": "2",
      "index": "products",
      "query_params": "query=georgia&attributesToRetrieve=name,city,country",
      "query_nb_hits": "1",
      "inner_queries": [
        {
          "index_name": "products",
          "user_token": "93.189.166.128",
          "query_id": "96f59a3145dd9bd8963dc223950507c8"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="retrieve-log-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="retrieve-log-entries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[object]|true|none|none|
|» cid|string|false|none|Correlation ID of the logged API request, also returned in that request's `Correlation-ID` response header.|
|» timestamp|string|true|none|Date and time of the API request, in RFC 3339 format.|
|» method|string|true|none|HTTP method of the request.|
|» answer_code|string|true|none|HTTP status code of the response.|
|» query_body|string|true|none|Request body.|
|» answer|string|true|none|Response body.|
|» url|string(uri-reference)|true|none|URL of the API endpoint.|
|» ip|string(ipv4)|true|none|IP address of the client that performed the request.|
|» query_headers|string|true|none|Request headers (API keys are obfuscated).|
|» sha1|string|true|none|SHA1 signature of the log entry.|
|» nb_api_calls|string|false|none|Number of API requests.|
|» processing_time_ms|string|true|none|Processing time for the query in milliseconds.<br>This doesn't include latency due to the network.<br>|
|» index|string|false|none|Index targeted by the query.|
|» query_params|string|false|none|Query parameters sent with the request.|
|» query_nb_hits|string|false|none|Number of search results (hits) returned for the query.|
|» inner_queries|[object]|false|none|Queries performed for the given request.|
|» » index_name|string|false|none|Index targeted by the query.|
|» » user_token|string|false|none|A user identifier.|
|» » query_id|string|false|none|Unique query identifier.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Check application task status

<a id="opIdgetAppTask"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/task/1506303845001' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/task/{taskID}`

Checks the status of a given application task.


<h3 id="check-application-task-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskID|path|integer(int64)|true|Unique task identifier.|

> Example responses

> 200 Response

```json
{
  "status": "published"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="check-application-task-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetTaskResponse](#schemagettaskresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Check task status

<a id="opIdgetTask"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/task/1506303845001' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/indexes/{indexName}/task/{taskID}`

Checks the status of a given task.

Indexing tasks are asynchronous.
When you add, update, or delete records or indices,
a task is created on a queue and completed depending on the load on the server.

The indexing tasks' responses include a task ID that you can use to check the status.


<h3 id="check-task-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|taskID|path|integer(int64)|true|Unique task identifier.|

> Example responses

> 200 Response

```json
{
  "status": "published"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="check-task-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetTaskResponse](#schemagettaskresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Copy or move an index

<a id="opIdoperationIndex"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes/ALGOLIA_INDEX_NAME/operation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}" \
  -d '{
    "operation": "copy",
    "destination": "products",
    "scope": [
      "settings"
    ]
  }'
```

`POST /1/indexes/{indexName}/operation`

Copies or moves (renames) an index within the same Algolia application.

Notes:
- Existing destination indices are overwritten, except for their analytics data.
- If the destination index doesn't exist yet, it's created.
- This operation is resource-intensive.

**Copy**

- If the source index doesn't exist, copying creates a new index with 0 records and default settings.
- You can't copy the `enableReRanking`, `mode`, and `replicas` settings.
- You can't copy to a destination index that already has replicas.
- Be aware of the [size limits](https://www.algolia.com/doc/guides/scaling/algolia-service-limits/#application-record-and-index-limits).
- For more information, see [Copy indices](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/copy-indices).

**Move**

- If the source index doesn't exist, moving is ignored without returning an error.
- When moving an index, the analytics data keeps its original name, and a new set of analytics data is started for the new name.
  To access the original analytics in the dashboard, create an index with the original name.
- If the destination index has replicas, moving will overwrite the existing index and copy the data to the replica indices.
- For more information, see [Move indices](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/move-indices).

This operation is subject to [indexing rate limits](https://support.algolia.com/hc/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).


> Body parameter

```json
{
  "operation": "copy",
  "destination": "products",
  "scope": [
    "settings"
  ]
}
```

<h3 id="copy-or-move-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|string|true|Name of the index on which to perform the operation.|
|body|body|object|true|none|
|» operation|body|[operationType](#schemaoperationtype)|true|Operation to perform on the index.|
|» destination|body|[indexName](#schemaindexname)|true|Index name (case-sensitive).|
|» scope|body|[[scopeType](#schemascopetype)]|false|**Only for copying.**<br><br>If you specify a scope, only the selected scopes are copied. Records and the other scopes are left unchanged.<br>If you omit the `scope` parameter, everything is copied: records, settings, synonyms, and rules.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operation|move|
|» operation|copy|
|» scope|settings|
|» scope|synonyms|
|» scope|rules|

> Example responses

> 200 Response

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="copy-or-move-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[updatedAtResponse](#schemaupdatedatresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## List indices

<a id="opIdlistIndices"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/1/indexes' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /1/indexes`

Lists all indices in the current Algolia application.

The request follows any index restrictions of the API key you use to make the request.


<h3 id="list-indices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|Requested page of the API response.<br>If `null`, the API response is not paginated.<br>|
|hitsPerPage|query|integer|false|Number of hits per page.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "movies",
      "createdAt": "2022-09-19T16:36:44.471Z",
      "updatedAt": "2023-07-04T12:49:15Z",
      "entries": 100,
      "dataSize": 48450,
      "fileSize": 112927,
      "lastBuildTimeS": 3,
      "numberOfPendingTasks": 0,
      "pendingTask": false,
      "primary": "T02",
      "replicas": [
        "T02_push",
        "T2replica"
      ],
      "virtual": true,
      "abTest": {
        "id": 12345,
        "version": 2,
        "type": "index-configuration",
        "target": {
          "indexName": "movies"
        },
        "variants": [
          {
            "indexName": "movies",
            "percentage": 50,
            "customSearchParameters": "string",
            "payload": {}
          }
        ]
      },
      "sourceABTest": "movies_dev_a"
    }
  ],
  "nbPages": 100
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 402 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="list-indices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[listIndicesResponse](#schemalistindicesresponse)|
|400|Bad Request|Bad request or request arguments.|[ErrorBase](#schemaerrorbase)|
|402|Payment Required|This feature is not enabled on your Algolia account.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Method not allowed with this API key.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Correlation-ID|string||Identifies the request in Algolia's logs, where it's the `cid` property of a log entry.<br>Include it when you contact the Algolia support team about a specific request.<br>Retried requests can share an identifier, so don't use it as a unique key.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Wait for an API key operation

<a id="opIdwaitForApiKey"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/waitForApiKey?key=string&operation=add' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /waitForApiKey`

Waits for an API key to be added, updated, or deleted.

<h3 id="wait-for-an-api-key-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|API key to wait for.|
|operation|query|[apiKeyOperation](#schemaapikeyoperation)|true|Whether the API key was created, updated, or deleted.|
|apiKey|query|[apiKey](#schemaapikey)|false|Used to compare fields of the `getApiKey` response on an `update` operation, to check if the `key` has been updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|add|
|operation|delete|
|operation|update|

> Example responses

> 200 Response

```json
{
  "value": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
  "createdAt": 1656345570000,
  "acl": [
    "search",
    "addObject"
  ],
  "description": "Used for indexing by the CLI",
  "indexes": [
    "dev_*",
    "prod_en_products"
  ],
  "maxHitsPerQuery": 0,
  "maxQueriesPerIPPerHour": 0,
  "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
  "referers": [
    "*algolia.com*"
  ],
  "validity": 86400
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="wait-for-an-api-key-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getApiKeyResponse](#schemagetapikeyresponse)|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Wait for operation to complete

<a id="opIdwaitForTask"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/waitForTask?indexName=string&taskID=0' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /waitForTask`

Wait for a task to complete to ensure synchronized index updates.

All Algolia write operations are asynchronous. When you make a request for a write operation, for example, to add or update records in your index, Algolia creates a task on a queue and returns a taskID. The task itself runs separately, depending on the server load.


<h3 id="wait-for-operation-to-complete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The name of the index on which the operation was performed.|
|taskID|query|integer(int64)|true|The taskID returned by the operation.|

> Example responses

> 200 Response

```json
{
  "status": "published"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="wait-for-operation-to-complete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetTaskResponse](#schemagettaskresponse)|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Wait for application-level operation to complete

<a id="opIdwaitForAppTask"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/waitForAppTask?taskID=0' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /waitForAppTask`

Wait for a application-level task to complete.

<h3 id="wait-for-application-level-operation-to-complete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskID|query|integer(int64)|true|The taskID returned by the operation.|

> Example responses

> 200 Response

```json
{
  "status": "published"
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="wait-for-application-level-operation-to-complete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetTaskResponse](#schemagettaskresponse)|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Get all records from an index

<a id="opIdbrowseObjects"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/browseObjects?indexName=string&query=&similarQuery=comedy%20drama%20crime%20Macy%20Buscemi&filters=(category%3ABook%20OR%20category%3AEbook)%20AND%20_tags%3Apublished&facetFilters=%5B%5B%22category%3ABook%22%2C%22category%3A-Movie%22%5D%2C%22author%3AJohn%20Doe%22%5D&optionalFilters=%5B%22category%3ABook%22%2C%22author%3AJohn%20Doe%22%5D&numericFilters=%5B%5B%22inStock%20%3D%201%22%2C%22deliveryDate%20%3C%201441755506%22%5D%2C%22price%20%3C%201000%22%5D&tagFilters=%5B%5B%22Book%22%2C%22Movie%22%5D%2C%22SciFi%22%5D&sumOrFiltersScores=false&restrictSearchableAttributes=%5B%22title%22%2C%22author%22%5D&facets=%5B%22*%22%5D&facetingAfterDistinct=false&page=0&offset=0&length=0&aroundLatLng=40.71%2C-74.01&aroundLatLngViaIP=false&aroundRadius=1&aroundPrecision=10&minimumAroundRadius=1&insideBoundingBox=string&insidePolygon=%5B%5B47.3165%2C4.9665%2C47.3424%2C5.0201%2C47.32%2C4.9%5D%2C%5B40.9234%2C2.1185%2C38.643%2C1.9916%2C39.2587%2C2.0104%5D%5D&naturalLanguages=%5B%5D&ruleContexts=%5B%22mobile%22%5D&personalizationImpact=100&userToken=test-user-123&getRankingInfo=false&synonyms=true&clickAnalytics=false&analytics=true&analyticsTags=%5B%5D&percentileComputation=true&enableABTest=true&attributesToRetrieve=%5B%22author%22%2C%22title%22%2C%22content%22%5D&ranking=%5B%22typo%22%2C%22geo%22%2C%22words%22%2C%22filters%22%2C%22proximity%22%2C%22attribute%22%2C%22exact%22%2C%22custom%22%5D&relevancyStrictness=90&attributesToHighlight=%5B%22author%22%2C%22title%22%2C%22conten%22%2C%22content%22%5D&attributesToSnippet=%5B%22content%3A80%22%2C%22description%22%5D&highlightPreTag=%3Cem%3E&highlightPostTag=%3C%2Fem%3E&snippetEllipsisText=%E2%80%A6&restrictHighlightAndSnippetArrays=false&hitsPerPage=20&minWordSizefor1Typo=4&minWordSizefor2Typos=8&typoTolerance=true&allowTyposOnNumericTokens=true&disableTypoToleranceOnAttributes=%5B%22sku%22%5D&ignorePlurals=%5B%22ca%22%2C%22es%22%5D&removeStopWords=%5B%22ca%22%2C%22es%22%5D&queryLanguages=%5B%22es%22%5D&decompoundQuery=true&enableRules=true&enablePersonalization=false&queryType=prefixLast&removeWordsIfNoResults=firstWords&mode=keywordSearch&semanticSearch=%7B%22eventSources%22%3A%5B%22string%22%5D%7D&advancedSyntax=false&optionalWords=string&disableExactOnAttributes=%5B%22description%22%5D&exactOnSingleWordQuery=attribute&alternativesAsExact=%5B%22ignorePlurals%22%2C%22singleWordSynonym%22%5D&advancedSyntaxFeatures=%5B%22exactPhrase%22%2C%22excludeWords%22%5D&distinct=1&replaceSynonymsInHighlight=false&minProximity=1&responseFields=%5B%22*%22%5D&maxValuesPerFacet=100&sortFacetValuesBy=count&attributeCriteriaComputedByMinProximity=false&attributeCriteriaComputedBy=best&renderingContent=%7B%22facetOrdering%22%3A%7B%22facets%22%3A%7B%22order%22%3A%5B%22string%22%5D%7D%2C%22values%22%3A%7B%22property1%22%3A%7B%22order%22%3A%5B%22string%22%5D%2C%22sortRemainingBy%22%3A%22count%22%2C%22hide%22%3A%5B%22string%22%5D%7D%2C%22property2%22%3A%7B%22order%22%3A%5B%22string%22%5D%2C%22sortRemainingBy%22%3A%22count%22%2C%22hide%22%3A%5B%22string%22%5D%7D%7D%7D%2C%22redirect%22%3A%7B%22url%22%3A%22string%22%7D%2C%22widgets%22%3A%7B%22banners%22%3A%5B%7B%22image%22%3A%7B%22urls%22%3A%5B%7B%22url%22%3A%22string%22%7D%5D%2C%22title%22%3A%22string%22%7D%2C%22link%22%3A%7B%22url%22%3A%22string%22%7D%7D%5D%2C%22resultCard%22%3A%7B%22enabled%22%3Atrue%7D%7D%7D&enableReRanking=true&reRankingApplyFilter=%5B%7B%7D%5D&cursor=jMDY3M2MwM2QwMWUxMmQwYWI0ZTN' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /browseObjects`

You can use the browse method to get records from an index—for example, to export your index as a backup. To export all records, use an empty query.

Use browse instead of search when exporting records from your index, when ranking, or analytics, isn't important. The Analytics API doesn't collect data when using browse.

Don't use this method for building a search UI. Use search instead.


<h3 id="get-all-records-from-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The name of the index on which the operation was performed.|
|browseParams|query|[browseParamsObject](#schemabrowseparamsobject)|true|Browse parameters.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="get-all-records-from-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content.|None|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Create secured API keys

<a id="opIdgenerateSecuredApiKey"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/generateSecuredApiKey?parentApiKey=string&searchParams=%7B%22query%22%3A%22%22%2C%22similarQuery%22%3A%22comedy%20drama%20crime%20Macy%20Buscemi%22%2C%22filters%22%3A%22(category%3ABook%20OR%20category%3AEbook)%20AND%20_tags%3Apublished%22%2C%22facetFilters%22%3A%5B%5B%22category%3ABook%22%2C%22category%3A-Movie%22%5D%2C%22author%3AJohn%20Doe%22%5D%2C%22optionalFilters%22%3A%5B%22category%3ABook%22%2C%22author%3AJohn%20Doe%22%5D%2C%22numericFilters%22%3A%5B%5B%22inStock%20%3D%201%22%2C%22deliveryDate%20%3C%201441755506%22%5D%2C%22price%20%3C%201000%22%5D%2C%22tagFilters%22%3A%5B%5B%22Book%22%2C%22Movie%22%5D%2C%22SciFi%22%5D%2C%22sumOrFiltersScores%22%3Afalse%2C%22restrictSearchableAttributes%22%3A%5B%22title%22%2C%22author%22%5D%2C%22facets%22%3A%5B%22*%22%5D%2C%22facetingAfterDistinct%22%3Afalse%2C%22page%22%3A0%2C%22offset%22%3A0%2C%22length%22%3A0%2C%22aroundLatLng%22%3A%2240.71%2C-74.01%22%2C%22aroundLatLngViaIP%22%3Afalse%2C%22aroundRadius%22%3A1%2C%22aroundPrecision%22%3A10%2C%22minimumAroundRadius%22%3A1%2C%22insideBoundingBox%22%3A%22string%22%2C%22insidePolygon%22%3A%5B%5B47.3165%2C4.9665%2C47.3424%2C5.0201%2C47.32%2C4.9%5D%2C%5B40.9234%2C2.1185%2C38.643%2C1.9916%2C39.2587%2C2.0104%5D%5D%2C%22naturalLanguages%22%3A%5B%5D%2C%22ruleContexts%22%3A%5B%22mobile%22%5D%2C%22personalizationImpact%22%3A100%2C%22userToken%22%3A%22test-user-123%22%2C%22getRankingInfo%22%3Afalse%2C%22synonyms%22%3Atrue%2C%22clickAnalytics%22%3Afalse%2C%22analytics%22%3Atrue%2C%22analyticsTags%22%3A%5B%5D%2C%22percentileComputation%22%3Atrue%2C%22enableABTest%22%3Atrue%2C%22attributesToRetrieve%22%3A%5B%22author%22%2C%22title%22%2C%22content%22%5D%2C%22ranking%22%3A%5B%22typo%22%2C%22geo%22%2C%22words%22%2C%22filters%22%2C%22proximity%22%2C%22attribute%22%2C%22exact%22%2C%22custom%22%5D%2C%22relevancyStrictness%22%3A90%2C%22attributesToHighlight%22%3A%5B%22author%22%2C%22title%22%2C%22conten%22%2C%22content%22%5D%2C%22attributesToSnippet%22%3A%5B%22content%3A80%22%2C%22description%22%5D%2C%22highlightPreTag%22%3A%22%3Cem%3E%22%2C%22highlightPostTag%22%3A%22%3C%2Fem%3E%22%2C%22snippetEllipsisText%22%3A%22%E2%80%A6%22%2C%22restrictHighlightAndSnippetArrays%22%3Afalse%2C%22hitsPerPage%22%3A20%2C%22minWordSizefor1Typo%22%3A4%2C%22minWordSizefor2Typos%22%3A8%2C%22typoTolerance%22%3Atrue%2C%22allowTyposOnNumericTokens%22%3Atrue%2C%22disableTypoToleranceOnAttributes%22%3A%5B%22sku%22%5D%2C%22ignorePlurals%22%3A%5B%22ca%22%2C%22es%22%5D%2C%22removeStopWords%22%3A%5B%22ca%22%2C%22es%22%5D%2C%22queryLanguages%22%3A%5B%22es%22%5D%2C%22decompoundQuery%22%3Atrue%2C%22enableRules%22%3Atrue%2C%22enablePersonalization%22%3Afalse%2C%22queryType%22%3A%22prefixLast%22%2C%22removeWordsIfNoResults%22%3A%22firstWords%22%2C%22mode%22%3A%22keywordSearch%22%2C%22semanticSearch%22%3A%7B%22eventSources%22%3A%5B%22string%22%5D%7D%2C%22advancedSyntax%22%3Afalse%2C%22optionalWords%22%3A%22string%22%2C%22disableExactOnAttributes%22%3A%5B%22description%22%5D%2C%22exactOnSingleWordQuery%22%3A%22attribute%22%2C%22alternativesAsExact%22%3A%5B%22ignorePlurals%22%2C%22singleWordSynonym%22%5D%2C%22advancedSyntaxFeatures%22%3A%5B%22exactPhrase%22%2C%22excludeWords%22%5D%2C%22distinct%22%3A1%2C%22replaceSynonymsInHighlight%22%3Afalse%2C%22minProximity%22%3A1%2C%22responseFields%22%3A%5B%22*%22%5D%2C%22maxValuesPerFacet%22%3A100%2C%22sortFacetValuesBy%22%3A%22count%22%2C%22attributeCriteriaComputedByMinProximity%22%3Afalse%2C%22attributeCriteriaComputedBy%22%3A%22best%22%2C%22renderingContent%22%3A%7B%22facetOrdering%22%3A%7B%22facets%22%3A%7B%22order%22%3A%5B%22string%22%5D%7D%2C%22values%22%3A%7B%22property1%22%3A%7B%22order%22%3A%5B%22string%22%5D%2C%22sortRemainingBy%22%3A%22count%22%2C%22hide%22%3A%5B%22string%22%5D%7D%2C%22property2%22%3A%7B%22order%22%3A%5B%22string%22%5D%2C%22sortRemainingBy%22%3A%22count%22%2C%22hide%22%3A%5B%22string%22%5D%7D%7D%7D%2C%22redirect%22%3A%7B%22url%22%3A%22string%22%7D%2C%22widgets%22%3A%7B%22banners%22%3A%5B%7B%22image%22%3A%7B%22urls%22%3A%5B%7B%22url%22%3A%22string%22%7D%5D%2C%22title%22%3A%22string%22%7D%2C%22link%22%3A%7B%22url%22%3A%22string%22%7D%7D%5D%2C%22resultCard%22%3A%7B%22enabled%22%3Atrue%7D%7D%7D%2C%22enableReRanking%22%3Atrue%2C%22reRankingApplyFilter%22%3A%5B%7B%7D%5D%7D&filters=string&validUntil=0&restrictIndices=%5B%22string%22%5D&restrictSources=192.168.1.0%2F24&userToken=string' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /generateSecuredApiKey`

Generates a secured API key without any requests to Algolia's servers.

Secured API keys are API keys that you generate on your server without any API request to Algolia.
Use secured API keys when you can't update client-side code, such as in mobile apps,
or when you need to restrict access to part of an index for each user.

When users start searching, your app requests a short-lived secured API key from your server instead of using the Search API key.
Your server uses this method to generate the secured API key with restrictions such as filters, index access restrictions,
or expiration times, and returns it to your app. The API key gets longer as you add restrictions.

You can't create secured API keys from other secured API keys or from your Admin API key.
The generated API key can have the same restrictions as the parent API key, or be more restrictive.


<h3 id="create-secured-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parentApiKey|query|string|true|API key from which the secured API key will inherit its restrictions.|
|restrictions|query|[securedApiKeyRestrictions](#schemasecuredapikeyrestrictions)|true|Restrictions to add to the API key.|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="create-secured-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Copies the given `sourceIndexName` records, rules and synonyms to an other Algolia application for the given `destinationIndexName`

<a id="opIdaccountCopyIndex"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/accountCopyIndex?sourceIndexName=string&destinationAppID=string&destinationApiKey=string&destinationIndexName=string' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /accountCopyIndex`

Copies the given `sourceIndexName` records, rules and synonyms to an other Algolia application for the given `destinationIndexName`.


<h3 id="copies-the-given-sourceindexname-records-rules-and-synonyms-to-an-other-algolia-application-for-the-given-destinationindexname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceIndexName|query|string|true|The name of the index to copy.|
|destinationAppID|query|string|true|The application ID to write the index to.|
|destinationApiKey|query|string|true|The API Key of the `destinationAppID` to write the index to, must have write ACLs.|
|destinationIndexName|query|string|true|The name of the index to write the copied index to.|
|batchSize|query|integer|false|The size of the chunk of `objects`. Defaults to 1,000.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 403 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

> 404 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="copies-the-given-sourceindexname-records-rules-and-synonyms-to-an-other-algolia-application-for-the-given-destinationindexname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Indices are in the same application. Use operationIndex instead.|[ErrorBase](#schemaerrorbase)|
|403|Forbidden|Destination index already exists.|[ErrorBase](#schemaerrorbase)|
|404|Not Found|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Replace all records in an index

<a id="opIdreplaceAllObjects"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/replaceAllObjects?indexName=string&objects=%7B%7D' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /replaceAllObjects`

This method replaces all records in an index without interrupting ongoing searches.

It combines [batch](https://www.algolia.com/doc/rest-api/search/batch) and [copy/move](https://www.algolia.com/doc/rest-api/search/operation-index) index operations:
1. Copy settings, synonyms, and rules to a temporary index.
2. Add the records from the `objects` parameter to the temporary index.
3. Replace the original index with the temporary one.

Notes:
- If there's an error during one of these steps, the temporary index is deleted if your API key has the `deleteIndex` ACL.
- If your API key restricts access to specific indices, make sure it also grants access to the temporary index `INDEX_NAME_tmp_*` (replace `INDEX_NAME` with the name of your original index).
- This method is subject to [indexing rate limits](https://support.algolia.com/hc/en-us/articles/4406975251089-Is-there-a-rate-limit-for-indexing-on-Algolia).
- The response includes the results of the individual API requests.
- This method creates a temporary index, which temporarily doubles your record count.
- Algolia doesn't count the three days with the highest number of records toward your monthly usage.


<h3 id="replace-all-records-in-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The `indexName` to replace `objects` in.|
|objects|query|[object]|true|List of objects to replace the current objects with.|
|batchSize|query|integer|false|The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1,000.|
|scopes|query|[[scopeType](#schemascopetype)]|false|List of scopes to keep in the index. Defaults to `settings`, `synonyms`, and `rules`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scopes|settings|
|scopes|synonyms|
|scopes|rules|

> Example responses

> 200 Response

```json
{
  "copyOperationResponse": {
    "taskID": 1514562690001,
    "updatedAt": "2023-07-04T12:49:15Z"
  },
  "batchResponses": [
    {
      "taskID": 1514562690001,
      "objectIDs": [
        "record-1",
        "record-2"
      ]
    }
  ],
  "moveOperationResponse": {
    "taskID": 1514562690001,
    "updatedAt": "2023-07-04T12:49:15Z"
  }
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="replace-all-records-in-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[replaceAllObjectsResponse](#schemareplaceallobjectsresponse)|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Replace all records in an index

<a id="opIdreplaceAllObjectsWithTransformation"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/replaceAllObjectsWithTransformation?indexName=string&objects=%7B%7D' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /replaceAllObjectsWithTransformation`

Replace all records in your index with a new set of records by using the Transformation pipeline in the Push connector (https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/connectors/push).

This method replaces all records without downtime. It performs these operations:
  1. Copy settings, synonyms, and rules from your original index to a temporary index.
  2. Add your new records to the temporary index.
  3. Replace your original index with the temporary index.

Notes:
- Use the `safe` parameter to run these (asynchronous) operations in sequence.
- If there's an error during one of these steps, the temporary index isn't deleted.
- This operation is rate-limited.
- This method creates a temporary index, which temporarily doubles your record count.
- Algolia doesn't count the three days with the highest number of records toward your monthly usage.
- If you're on a legacy plan (before July 2020), this method counts two operations toward your usage (in addition to the number of records): `copySettings` and `moveIndex`.
- The API key you use for this operation must have access to the index `YourIndex` and the temporary index `YourIndex_tmp`.


<h3 id="replace-all-records-in-an-index-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The `indexName` to replace `objects` in.|
|objects|query|[object]|true|List of objects to replace the current objects with.|
|batchSize|query|integer|false|The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1,000.|
|scopes|query|[[scopeType](#schemascopetype)]|false|List of scopes to keep in the index. Defaults to `settings`, `synonyms`, and `rules`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scopes|settings|
|scopes|synonyms|
|scopes|rules|

> Example responses

> 200 Response

```json
{
  "copyOperationResponse": {
    "taskID": 1514562690001,
    "updatedAt": "2023-07-04T12:49:15Z"
  },
  "watchResponses": [
    {
      "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
      "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
      "data": [
        {}
      ],
      "events": [
        {
          "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
          "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
          "status": "created",
          "type": "fetch",
          "batchSize": 10,
          "data": {},
          "publishedAt": "string"
        }
      ],
      "message": "string",
      "createdAt": "string"
    }
  ],
  "moveOperationResponse": {
    "taskID": 1514562690001,
    "updatedAt": "2023-07-04T12:49:15Z"
  }
}
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="replace-all-records-in-an-index-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[replaceAllObjectsWithTransformationResponse](#schemareplaceallobjectswithtransformationresponse)|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Replace all records in an index

<a id="opIdchunkedBatch"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/chunkedBatch?indexName=string&objects=%7B%7D' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /chunkedBatch`

Helper: Chunks the given `objects` list in subset of 1000 elements max in order to make it fit in `batch` requests.


<h3 id="replace-all-records-in-an-index-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The `indexName` to replace `objects` in.|
|objects|query|[object]|true|List of objects to replace the current objects with.|
|action|query|[action](#schemaaction)|false|The `batch` `action` to perform on the given array of `objects`, defaults to `addObject`.|
|waitForTasks|query|boolean|false|Whether to wait until every `batch` task has been processed. This may take longer but is more reliable.|
|batchSize|query|integer|false|The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1,000.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|addObject|
|action|updateObject|
|action|partialUpdateObject|
|action|partialUpdateObjectNoCreate|
|action|deleteObject|
|action|delete|
|action|clear|

> Example responses

> 200 Response

```json
[
  {
    "taskID": 1514562690001,
    "objectIDs": [
      "record-1",
      "record-2"
    ]
  }
]
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="replace-all-records-in-an-index-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="replace-all-records-in-an-index-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[batchResponse](#schemabatchresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Saves the given array of objects in the given index

<a id="opIdsaveObjects"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/saveObjects?indexName=string&objects=%7B%7D' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /saveObjects`

Helper: Saves the given array of objects in the given index. The `chunkedBatch` helper splits this into `batch` requests with at most 1,000 objects each.


<h3 id="saves-the-given-array-of-objects-in-the-given-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The `indexName` to save `objects` into.|
|objects|query|[object]|true|The objects to save in the index.|
|waitForTasks|query|boolean|false|Whether to wait until every `batch` task has been processed. This may take longer but is more reliable.|
|batchSize|query|integer|false|The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1,000.|
|requestOptions|query|object|false|The request options to pass to the `batch` method.|

> Example responses

> 200 Response

```json
[
  {
    "taskID": 1514562690001,
    "objectIDs": [
      "record-1",
      "record-2"
    ]
  }
]
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="saves-the-given-array-of-objects-in-the-given-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="saves-the-given-array-of-objects-in-the-given-index-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[batchResponse](#schemabatchresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Save objects to an Algolia index by leveraging the Transformation pipeline setup using the Push connector (https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/connectors/push)

<a id="opIdsaveObjectsWithTransformation"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/saveObjectsWithTransformation?indexName=string&objects=%7B%7D' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /saveObjectsWithTransformation`

Helper: Similar to the `saveObjects` method but requires a Push connector (https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/connectors/push) to be created first, in order to transform records before indexing them to Algolia. The `region` must have been passed to the client instantiation method.


<h3 id="save-objects-to-an-algolia-index-by-leveraging-the-transformation-pipeline-setup-using-the-push-connector-httpswwwalgoliacomdocguidessending-and-managing-datasend-and-update-your-dataconnectorspush-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The `indexName` to save `objects` into.|
|objects|query|[object]|true|The objects to save in the index.|
|waitForTasks|query|boolean|false|Whether to wait until every `batch` task has been processed. This may take longer but is more reliable.|
|batchSize|query|integer|false|The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1,000.|
|requestOptions|query|object|false|The request options to pass to the `batch` method.|

> Example responses

> 200 Response

```json
[
  {
    "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
    "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
    "data": [
      {}
    ],
    "events": [
      {
        "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
        "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
        "status": "created",
        "type": "fetch",
        "batchSize": 10,
        "data": {},
        "publishedAt": "string"
      }
    ],
    "message": "string",
    "createdAt": "string"
  }
]
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="save-objects-to-an-algolia-index-by-leveraging-the-transformation-pipeline-setup-using-the-push-connector-httpswwwalgoliacomdocguidessending-and-managing-datasend-and-update-your-dataconnectorspush-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="save-objects-to-an-algolia-index-by-leveraging-the-transformation-pipeline-setup-using-the-push-connector-httpswwwalgoliacomdocguidessending-and-managing-datasend-and-update-your-dataconnectorspush-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WatchResponse](#schemawatchresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Deletes every records for the given objectIDs

<a id="opIddeleteObjects"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/deleteObjects?indexName=string&objectIDs=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`POST /deleteObjects`

Helper: Deletes every records for the given objectIDs. The `chunkedBatch` helper splits this into `batch` requests with at most 1,000 objectIDs each.


<h3 id="deletes-every-records-for-the-given-objectids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The `indexName` to delete `objectIDs` from.|
|objectIDs|query|[string]|true|The objectIDs to delete.|
|waitForTasks|query|boolean|false|Whether to wait until every `batch` task has been processed. This may take longer but is more reliable.|
|batchSize|query|integer|false|The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1,000.|
|requestOptions|query|object|false|The request options to pass to the `batch` method.|

> Example responses

> 200 Response

```json
[
  {
    "taskID": 1514562690001,
    "objectIDs": [
      "record-1",
      "record-2"
    ]
  }
]
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="deletes-every-records-for-the-given-objectids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="deletes-every-records-for-the-given-objectids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[batchResponse](#schemabatchresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Replaces object content of all the given objects according to their respective `objectID` field

<a id="opIdpartialUpdateObjects"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/partialUpdateObjects?indexName=string&objects=%7B%7D' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`POST /partialUpdateObjects`

Helper: Replaces object content of all the given objects according to their respective `objectID` field. The `chunkedBatch` helper splits this into `batch` requests with at most 1,000 objects each.


<h3 id="replaces-object-content-of-all-the-given-objects-according-to-their-respective-objectid-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The `indexName` where to update `objects`.|
|objects|query|[object]|true|The objects to update.|
|createIfNotExists|query|boolean|false|To be provided if non-existing objects are passed, otherwise, the call will fail.|
|waitForTasks|query|boolean|false|Whether to wait until every `batch` task has been processed. This may take longer but is more reliable.|
|batchSize|query|integer|false|The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1,000.|
|requestOptions|query|object|false|The request options to pass to the `batch` method.|

> Example responses

> 200 Response

```json
[
  {
    "taskID": 1514562690001,
    "objectIDs": [
      "record-1",
      "record-2"
    ]
  }
]
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="replaces-object-content-of-all-the-given-objects-according-to-their-respective-objectid-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="replaces-object-content-of-all-the-given-objects-according-to-their-respective-objectid-field-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[batchResponse](#schemabatchresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Save objects to an Algolia index by leveraging the Transformation pipeline setup using the Push connector (https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/connectors/push)

<a id="opIdpartialUpdateObjectsWithTransformation"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/partialUpdateObjectsWithTransformation?indexName=string&objects=%7B%7D' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`POST /partialUpdateObjectsWithTransformation`

Helper: Similar to the `partialUpdateObjects` method but requires a Push connector (https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/connectors/push) to be created first, in order to transform records before indexing them to Algolia. The `region` must have been passed to the client instantiation method.


<h3 id="save-objects-to-an-algolia-index-by-leveraging-the-transformation-pipeline-setup-using-the-push-connector-httpswwwalgoliacomdocguidessending-and-managing-datasend-and-update-your-dataconnectorspush-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The `indexName` where to update `objects`.|
|objects|query|[object]|true|The objects to update.|
|createIfNotExists|query|boolean|false|To be provided if non-existing objects are passed, otherwise, the call will fail.|
|waitForTasks|query|boolean|false|Whether to wait until every `batch` task has been processed. This may take longer but is more reliable.|
|batchSize|query|integer|false|The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1,000.|
|requestOptions|query|object|false|The request options to pass to the `batch` method.|

> Example responses

> 200 Response

```json
[
  {
    "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
    "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
    "data": [
      {}
    ],
    "events": [
      {
        "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
        "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
        "status": "created",
        "type": "fetch",
        "batchSize": 10,
        "data": {},
        "publishedAt": "string"
      }
    ],
    "message": "string",
    "createdAt": "string"
  }
]
```

> 400 Response

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

<h3 id="save-objects-to-an-algolia-index-by-leveraging-the-transformation-pipeline-setup-using-the-push-connector-httpswwwalgoliacomdocguidessending-and-managing-datasend-and-update-your-dataconnectorspush-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Index not found.|[ErrorBase](#schemaerrorbase)|

<h3 id="save-objects-to-an-algolia-index-by-leveraging-the-transformation-pipeline-setup-using-the-push-connector-httpswwwalgoliacomdocguidessending-and-managing-datasend-and-update-your-dataconnectorspush-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WatchResponse](#schemawatchresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Check if an index exists or not

<a id="opIdindexExists"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/indexExists?indexName=string' \
  -H 'Accept: application/json' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /indexExists`

You can initialize an index with any name. The index is created on Algolia's servers when you add objects or set settings. To prevent accidentally creating new indices, or changing existing indices, you can use the exists method. The exists method returns a boolean that indicates whether an initialized index has been created.


<h3 id="check-if-an-index-exists-or-not-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|query|string|true|The name of the index to check.|

> Example responses

> 200 Response

```json
true
```

<h3 id="check-if-an-index-exists-or-not-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index exists.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

## Switch the API key used to authenticate requests

<a id="opIdsetClientApiKey"></a>

> Code samples

```bash
curl 'https://{appId}.algolia.net/setClientApiKey?apiKey=string' \
  -H "x-algolia-application-id: ${API_KEY}" \
  -H "x-algolia-api-key: ${API_KEY}"
```

`GET /setClientApiKey`

Switch the API key used to authenticate requests.


<h3 id="switch-the-api-key-used-to-authenticate-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|query|string|true|API key to use for subsequent requests.|

<h3 id="switch-the-api-key-used-to-authenticate-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appId & apiKey
</aside>

# Schemas

<h2 id="tocS_attributeToUpdate">attributeToUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaattributetoupdate"></a>
<a id="schema_attributeToUpdate"></a>
<a id="tocSattributetoupdate"></a>
<a id="tocsattributetoupdate"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[builtInOperation](#schemabuiltinoperation)|false|none|Update to perform on the attribute.|

<h2 id="tocS_ErrorBase">ErrorBase</h2>
<!-- backwards compatibility -->
<a id="schemaerrorbase"></a>
<a id="schema_ErrorBase"></a>
<a id="tocSerrorbase"></a>
<a id="tocserrorbase"></a>

```json
{
  "message": "Invalid Application-Id or API-Key"
}
```

Error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_paramsAsString">paramsAsString</h2>
<!-- backwards compatibility -->
<a id="schemaparamsasstring"></a>
<a id="schema_paramsAsString"></a>
<a id="tocSparamsasstring"></a>
<a id="tocsparamsasstring"></a>

```json
"hitsPerPage=2&getRankingInfo=1"
```

Search parameters as a URL-encoded query string.

<h2 id="tocS_searchParamsString">searchParamsString</h2>
<!-- backwards compatibility -->
<a id="schemasearchparamsstring"></a>
<a id="schema_searchParamsString"></a>
<a id="tocSsearchparamsstring"></a>
<a id="tocssearchparamsstring"></a>

```json
{
  "params": "hitsPerPage=2&getRankingInfo=1"
}
```

Search parameters as query string.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|[paramsAsString](#schemaparamsasstring)|false|none|Search parameters as a URL-encoded query string.|

<h2 id="tocS_query">query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
""
```

Search query.

<h2 id="tocS_searchParamsQuery">searchParamsQuery</h2>
<!-- backwards compatibility -->
<a id="schemasearchparamsquery"></a>
<a id="schema_searchParamsQuery"></a>
<a id="tocSsearchparamsquery"></a>
<a id="tocssearchparamsquery"></a>

```json
{
  "query": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query](#schemaquery)|false|none|Search query.|

<h2 id="tocS_similarQuery">similarQuery</h2>
<!-- backwards compatibility -->
<a id="schemasimilarquery"></a>
<a id="schema_similarQuery"></a>
<a id="tocSsimilarquery"></a>
<a id="tocssimilarquery"></a>

```json
"comedy drama crime Macy Buscemi"
```

Keywords to be used instead of the search query to conduct a more broader search.
Using the `similarQuery` parameter changes other settings
- `queryType` is set to `prefixNone`.
- `removeStopWords` is set to true.
- `words` is set as the first ranking criterion.
- All remaining words are treated as `optionalWords`.
Since the `similarQuery` is supposed to do a broad search, they usually return many results.
Combine it with `filters` to narrow down the list of results.

<h2 id="tocS_filters">filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
"(category:Book OR category:Ebook) AND _tags:published"
```

Filter expression to only include items that match the filter criteria in the response.

You can use these filter expressions:

- **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`.
- **Ranges.** `<facet>:<lower> TO <upper>`, where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive).
- **Facet filters.** `<facet>:<value>`, where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value.
- **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive).
- **Boolean filters.** `<facet>: true | false`.

You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:

- You can only combine filters of the same type with `OR`.
  **Not supported:** `facet:value OR num > 3`.
- You can't use `NOT` with combinations of filters.
  **Not supported:** `NOT(facet:value OR facet:value)`
- You can't combine conjunctions (`AND`) with `OR`.
  **Not supported:** `facet:value OR (facet:value AND facet:value)`

Use quotes if the facet attribute name or facet value contains spaces, keywords (`OR`, `AND`, `NOT`), or quotes.
If a facet attribute is an array, the filter matches if it matches at least one element of the array.

For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering).

<h2 id="tocS_facetFilters">facetFilters</h2>
<!-- backwards compatibility -->
<a id="schemafacetfilters"></a>
<a id="schema_facetFilters"></a>
<a id="tocSfacetfilters"></a>
<a id="tocsfacetfilters"></a>

```json
[
  [
    "category:Book",
    "category:-Movie"
  ],
  "author:John Doe"
]
```

Filter the search by facet values, so that only records with the same facet values are retrieved.

**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**

- `[filter1, filter2]` is interpreted as `filter1 AND filter2`.
- `[[filter1, filter2], filter3]` is interpreted as `filter1 OR filter2 AND filter3`.
- `facet:-value` is interpreted as `NOT facet:value`.

While it's best to avoid attributes that start with a `-`, you can still filter them by escaping with a backslash:
`facet:\-value`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[facetFilters](#schemafacetfilters)]|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_optionalFilters">optionalFilters</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalfilters"></a>
<a id="schema_optionalFilters"></a>
<a id="tocSoptionalfilters"></a>
<a id="tocsoptionalfilters"></a>

```json
[
  "category:Book",
  "author:John Doe"
]
```

Filters to promote or demote records in the search results.

Optional filters work like facet filters, but they don't exclude records from the search results.
Records that match the optional filter rank before records that don't match.
If you're using a negative filter `facet:-value`, matching records rank after records that don't match.

- Optional filters are applied _after_ sort-by attributes.
- Optional filters are applied _before_ custom ranking attributes (in the default [ranking](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria)).
- Optional filters don't work with numeric attributes.
- On virtual replicas, optional filters are applied _after_ the replica's [relevant sort](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[optionalFilters](#schemaoptionalfilters)]|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_numericFilters">numericFilters</h2>
<!-- backwards compatibility -->
<a id="schemanumericfilters"></a>
<a id="schema_numericFilters"></a>
<a id="tocSnumericfilters"></a>
<a id="tocsnumericfilters"></a>

```json
[
  [
    "inStock = 1",
    "deliveryDate < 1441755506"
  ],
  "price < 1000"
]
```

Filter by numeric facets.

**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**

You can use numeric comparison operators: `<`, `<=`, `=`, `!=`, `>`, `>=`.
Comparisons are precise up to 3 decimals.
You can also provide ranges: `facet:<lower> TO <upper>`. The range includes the lower and upper boundaries.
The same combination rules apply as for `facetFilters`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[numericFilters](#schemanumericfilters)]|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_tagFilters">tagFilters</h2>
<!-- backwards compatibility -->
<a id="schematagfilters"></a>
<a id="schema_tagFilters"></a>
<a id="tocStagfilters"></a>
<a id="tocstagfilters"></a>

```json
[
  [
    "Book",
    "Movie"
  ],
  "SciFi"
]
```

Filter the search by values of the special `_tags` attribute.

**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**

Different from regular facets, `_tags` can only be used for filtering (including or excluding records).
You won't get a facet count.
The same combination and escaping rules apply as for `facetFilters`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[tagFilters](#schematagfilters)]|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_sumOrFiltersScores">sumOrFiltersScores</h2>
<!-- backwards compatibility -->
<a id="schemasumorfiltersscores"></a>
<a id="schema_sumOrFiltersScores"></a>
<a id="tocSsumorfiltersscores"></a>
<a id="tocssumorfiltersscores"></a>

```json
false
```

Whether to sum all filter scores.
If true, all filter scores are summed.
Otherwise, the maximum filter score is kept.
For more information, see [filter scores](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/filter-scoring/#accumulate-scores-with-sumorfiltersscores).

<h2 id="tocS_restrictSearchableAttributes">restrictSearchableAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarestrictsearchableattributes"></a>
<a id="schema_restrictSearchableAttributes"></a>
<a id="tocSrestrictsearchableattributes"></a>
<a id="tocsrestrictsearchableattributes"></a>

```json
[
  "title",
  "author"
]
```

Restricts a search to a subset of your searchable attributes.
Attribute names are case-sensitive.

<h2 id="tocS_facetingAfterDistinct">facetingAfterDistinct</h2>
<!-- backwards compatibility -->
<a id="schemafacetingafterdistinct"></a>
<a id="schema_facetingAfterDistinct"></a>
<a id="tocSfacetingafterdistinct"></a>
<a id="tocsfacetingafterdistinct"></a>

```json
false
```

Whether faceting should be applied after deduplication with `distinct`.
This leads to accurate facet counts when using faceting in combination with `distinct`.
It's usually better to use `afterDistinct` modifiers in the `attributesForFaceting` setting,
as `facetingAfterDistinct` only computes correct facet counts if all records have the same facet values for the `attributeForDistinct`.

<h2 id="tocS_page">page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
0
```

Page of search results to retrieve.

<h2 id="tocS_length">length</h2>
<!-- backwards compatibility -->
<a id="schemalength"></a>
<a id="schema_length"></a>
<a id="tocSlength"></a>
<a id="tocslength"></a>

```json
0
```

Number of hits to retrieve (used in combination with `offset`).

<h2 id="tocS_aroundLatLng">aroundLatLng</h2>
<!-- backwards compatibility -->
<a id="schemaaroundlatlng"></a>
<a id="schema_aroundLatLng"></a>
<a id="tocSaroundlatlng"></a>
<a id="tocsaroundlatlng"></a>

```json
"40.71,-74.01"
```

Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.

Only records included within a circle around this central location are included in the results.
The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings.
This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.

<h2 id="tocS_aroundLatLngViaIP">aroundLatLngViaIP</h2>
<!-- backwards compatibility -->
<a id="schemaaroundlatlngviaip"></a>
<a id="schema_aroundLatLngViaIP"></a>
<a id="tocSaroundlatlngviaip"></a>
<a id="tocsaroundlatlngviaip"></a>

```json
false
```

Whether to obtain the coordinates from the request's IP address.

<h2 id="tocS_aroundRadiusAll">aroundRadiusAll</h2>
<!-- backwards compatibility -->
<a id="schemaaroundradiusall"></a>
<a id="schema_aroundRadiusAll"></a>
<a id="tocSaroundradiusall"></a>
<a id="tocsaroundradiusall"></a>

```json
"all"
```

Return all records with a valid `_geoloc` attribute. Don't filter by distance.

<h2 id="tocS_aroundRadius">aroundRadius</h2>
<!-- backwards compatibility -->
<a id="schemaaroundradius"></a>
<a id="schema_aroundRadius"></a>
<a id="tocSaroundradius"></a>
<a id="tocsaroundradius"></a>

```json
1
```

Maximum radius for a search around a central location.

This parameter works in combination with the `aroundLatLng` and `aroundLatLngViaIP` parameters.
By default, the search radius is determined automatically from the density of hits around the central location.
The search radius is small if there are many hits close to the central coordinates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|integer|false|none|Maximum search radius around a central location in meters.|
|*oneOf*|[aroundRadiusAll](#schemaaroundradiusall)|false|none|Return all records with a valid `_geoloc` attribute. Don't filter by distance.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|all|

<h2 id="tocS_aroundPrecisionFromValue">aroundPrecisionFromValue</h2>
<!-- backwards compatibility -->
<a id="schemaaroundprecisionfromvalue"></a>
<a id="schema_aroundPrecisionFromValue"></a>
<a id="tocSaroundprecisionfromvalue"></a>
<a id="tocsaroundprecisionfromvalue"></a>

```json
[
  {
    "from": 20,
    "value": 0
  }
]
```

<h2 id="tocS_aroundPrecision">aroundPrecision</h2>
<!-- backwards compatibility -->
<a id="schemaaroundprecision"></a>
<a id="schema_aroundPrecision"></a>
<a id="tocSaroundprecision"></a>
<a id="tocsaroundprecision"></a>

```json
10
```

Precision of a coordinate-based search in meters to group results with similar distances.

The Geo ranking criterion considers all matches within the same range of distances to be equal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|integer|false|none|Distance in meters to group results by similar distances.<br><br>For example, if you set `aroundPrecision` to 100, records wihin 100 meters to the central coordinate are considered to have the same distance,<br>as are records between 100 and 199 meters.<br>|
|*oneOf*|[aroundPrecisionFromValue](#schemaaroundprecisionfromvalue)|false|none|none|

<h2 id="tocS_minimumAroundRadius">minimumAroundRadius</h2>
<!-- backwards compatibility -->
<a id="schemaminimumaroundradius"></a>
<a id="schema_minimumAroundRadius"></a>
<a id="tocSminimumaroundradius"></a>
<a id="tocsminimumaroundradius"></a>

```json
1
```

Minimum radius (in meters) for a search around a location when `aroundRadius` isn't set.

<h2 id="tocS_insideBoundingBoxArray">insideBoundingBoxArray</h2>
<!-- backwards compatibility -->
<a id="schemainsideboundingboxarray"></a>
<a id="schema_insideBoundingBoxArray"></a>
<a id="tocSinsideboundingboxarray"></a>
<a id="tocsinsideboundingboxarray"></a>

```json
[
  [
    47.3165,
    4.9665,
    47.3424,
    5.0201
  ],
  [
    40.9234,
    2.1185,
    38.643,
    1.9916
  ]
]
```

Coordinates for a rectangular area in which to search.

Each bounding box is defined by the two opposite points of its diagonal, and expressed as latitude and longitude pair:
`[p1 lat, p1 long, p2 lat, p2 long]`.
Provide multiple bounding boxes as nested arrays.
For more information, see [rectangular area](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).

<h2 id="tocS_insideBoundingBox">insideBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemainsideboundingbox"></a>
<a id="schema_insideBoundingBox"></a>
<a id="tocSinsideboundingbox"></a>
<a id="tocsinsideboundingbox"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|null|false|none|none|
|*oneOf*|[insideBoundingBoxArray](#schemainsideboundingboxarray)|false|none|Coordinates for a rectangular area in which to search.<br><br>Each bounding box is defined by the two opposite points of its diagonal, and expressed as latitude and longitude pair:<br>`[p1 lat, p1 long, p2 lat, p2 long]`.<br>Provide multiple bounding boxes as nested arrays.<br>For more information, see [rectangular area](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).<br>|

<h2 id="tocS_insidePolygon">insidePolygon</h2>
<!-- backwards compatibility -->
<a id="schemainsidepolygon"></a>
<a id="schema_insidePolygon"></a>
<a id="tocSinsidepolygon"></a>
<a id="tocsinsidepolygon"></a>

```json
[
  [
    47.3165,
    4.9665,
    47.3424,
    5.0201,
    47.32,
    4.9
  ],
  [
    40.9234,
    2.1185,
    38.643,
    1.9916,
    39.2587,
    2.0104
  ]
]
```

Coordinates of a polygon in which to search.

Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude.
Provide multiple polygons as nested arrays.
For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).
This parameter is ignored if you also specify `insideBoundingBox`.

<h2 id="tocS_supportedLanguage">supportedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemasupportedlanguage"></a>
<a id="schema_supportedLanguage"></a>
<a id="tocSsupportedlanguage"></a>
<a id="tocssupportedlanguage"></a>

```json
"af"
```

ISO code for a supported language.

<h2 id="tocS_naturalLanguages">naturalLanguages</h2>
<!-- backwards compatibility -->
<a id="schemanaturallanguages"></a>
<a id="schema_naturalLanguages"></a>
<a id="tocSnaturallanguages"></a>
<a id="tocsnaturallanguages"></a>

```json
[]
```

ISO language codes that adjust settings that are useful for processing natural language queries (as opposed to keyword searches).
- Sets `removeStopWords` and `ignorePlurals` to the list of provided languages.
- Sets `removeWordsIfNoResults` to `allOptional`.
- Adds a `natural_language` attribute to `ruleContexts` and `analyticsTags`.

<h2 id="tocS_ruleContexts">ruleContexts</h2>
<!-- backwards compatibility -->
<a id="schemarulecontexts"></a>
<a id="schema_ruleContexts"></a>
<a id="tocSrulecontexts"></a>
<a id="tocsrulecontexts"></a>

```json
[
  "mobile"
]
```

Assigns a rule context to the search query.
[Rule contexts](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/how-to/customize-search-results-by-platform/#assign-context) are strings that you can use to trigger matching rules.

<h2 id="tocS_personalizationImpact">personalizationImpact</h2>
<!-- backwards compatibility -->
<a id="schemapersonalizationimpact"></a>
<a id="schema_personalizationImpact"></a>
<a id="tocSpersonalizationimpact"></a>
<a id="tocspersonalizationimpact"></a>

```json
100
```

Impact that Personalization should have on this search.
The higher this value is, the more Personalization determines the ranking compared to other factors.
For more information, see [Understanding Personalization impact](https://www.algolia.com/doc/guides/personalization/personalizing-results/in-depth/configuring-personalization/#understanding-personalization-impact).

<h2 id="tocS_userToken">userToken</h2>
<!-- backwards compatibility -->
<a id="schemausertoken"></a>
<a id="schema_userToken"></a>
<a id="tocSusertoken"></a>
<a id="tocsusertoken"></a>

```json
"test-user-123"
```

Unique pseudonymous or anonymous user identifier.

This helps with analytics and click and conversion events.
For more information, see [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken).

<h2 id="tocS_getRankingInfo">getRankingInfo</h2>
<!-- backwards compatibility -->
<a id="schemagetrankinginfo"></a>
<a id="schema_getRankingInfo"></a>
<a id="tocSgetrankinginfo"></a>
<a id="tocsgetrankinginfo"></a>

```json
false
```

Whether the search response should include detailed ranking information.

<h2 id="tocS_synonyms">synonyms</h2>
<!-- backwards compatibility -->
<a id="schemasynonyms"></a>
<a id="schema_synonyms"></a>
<a id="tocSsynonyms"></a>
<a id="tocssynonyms"></a>

```json
true
```

Whether to take into account an index's synonyms for this search.

<h2 id="tocS_clickAnalytics">clickAnalytics</h2>
<!-- backwards compatibility -->
<a id="schemaclickanalytics"></a>
<a id="schema_clickAnalytics"></a>
<a id="tocSclickanalytics"></a>
<a id="tocsclickanalytics"></a>

```json
false
```

Whether to include a `queryID` attribute in the response.
The query ID is a unique identifier for a search query and is required for tracking [click and conversion events](https://www.algolia.com/doc/guides/sending-events/getting-started).

<h2 id="tocS_analytics">analytics</h2>
<!-- backwards compatibility -->
<a id="schemaanalytics"></a>
<a id="schema_analytics"></a>
<a id="tocSanalytics"></a>
<a id="tocsanalytics"></a>

```json
true
```

Whether this search will be included in Analytics.

<h2 id="tocS_analyticsTags">analyticsTags</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticstags"></a>
<a id="schema_analyticsTags"></a>
<a id="tocSanalyticstags"></a>
<a id="tocsanalyticstags"></a>

```json
[]
```

Tags to apply to the query for [segmenting analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments).

<h2 id="tocS_percentileComputation">percentileComputation</h2>
<!-- backwards compatibility -->
<a id="schemapercentilecomputation"></a>
<a id="schema_percentileComputation"></a>
<a id="tocSpercentilecomputation"></a>
<a id="tocspercentilecomputation"></a>

```json
true
```

Whether to include this search when calculating processing-time percentiles.

<h2 id="tocS_enableABTest">enableABTest</h2>
<!-- backwards compatibility -->
<a id="schemaenableabtest"></a>
<a id="schema_enableABTest"></a>
<a id="tocSenableabtest"></a>
<a id="tocsenableabtest"></a>

```json
true
```

Whether to enable A/B testing for this search.

<h2 id="tocS_baseSearchParamsWithoutQuery">baseSearchParamsWithoutQuery</h2>
<!-- backwards compatibility -->
<a id="schemabasesearchparamswithoutquery"></a>
<a id="schema_baseSearchParamsWithoutQuery"></a>
<a id="tocSbasesearchparamswithoutquery"></a>
<a id="tocsbasesearchparamswithoutquery"></a>

```json
{
  "similarQuery": "comedy drama crime Macy Buscemi",
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "optionalFilters": [
    "category:Book",
    "author:John Doe"
  ],
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "sumOrFiltersScores": false,
  "restrictSearchableAttributes": [
    "title",
    "author"
  ],
  "facets": [
    "*"
  ],
  "facetingAfterDistinct": false,
  "page": 0,
  "offset": 0,
  "length": 0,
  "aroundLatLng": "40.71,-74.01",
  "aroundLatLngViaIP": false,
  "aroundRadius": 1,
  "aroundPrecision": 10,
  "minimumAroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ],
  "naturalLanguages": [],
  "ruleContexts": [
    "mobile"
  ],
  "personalizationImpact": 100,
  "userToken": "test-user-123",
  "getRankingInfo": false,
  "synonyms": true,
  "clickAnalytics": false,
  "analytics": true,
  "analyticsTags": [],
  "percentileComputation": true,
  "enableABTest": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|similarQuery|[similarQuery](#schemasimilarquery)|false|none|Keywords to be used instead of the search query to conduct a more broader search.<br>Using the `similarQuery` parameter changes other settings<br>- `queryType` is set to `prefixNone`.<br>- `removeStopWords` is set to true.<br>- `words` is set as the first ranking criterion.<br>- All remaining words are treated as `optionalWords`.<br>Since the `similarQuery` is supposed to do a broad search, they usually return many results.<br>Combine it with `filters` to narrow down the list of results.<br>|
|filters|[filters](#schemafilters)|false|none|Filter expression to only include items that match the filter criteria in the response.<br><br>You can use these filter expressions:<br><br>- **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>- **Ranges.** `<facet>:<lower> TO <upper>`, where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive).<br>- **Facet filters.** `<facet>:<value>`, where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value.<br>- **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive).<br>- **Boolean filters.** `<facet>: true \| false`.<br><br>You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:<br><br>- You can only combine filters of the same type with `OR`.<br>  **Not supported:** `facet:value OR num > 3`.<br>- You can't use `NOT` with combinations of filters.<br>  **Not supported:** `NOT(facet:value OR facet:value)`<br>- You can't combine conjunctions (`AND`) with `OR`.<br>  **Not supported:** `facet:value OR (facet:value AND facet:value)`<br><br>Use quotes if the facet attribute name or facet value contains spaces, keywords (`OR`, `AND`, `NOT`), or quotes.<br>If a facet attribute is an array, the filter matches if it matches at least one element of the array.<br><br>For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering).<br>|
|facetFilters|[facetFilters](#schemafacetfilters)|false|none|Filter the search by facet values, so that only records with the same facet values are retrieved.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>- `[filter1, filter2]` is interpreted as `filter1 AND filter2`.<br>- `[[filter1, filter2], filter3]` is interpreted as `filter1 OR filter2 AND filter3`.<br>- `facet:-value` is interpreted as `NOT facet:value`.<br><br>While it's best to avoid attributes that start with a `-`, you can still filter them by escaping with a backslash:<br>`facet:\-value`.<br>|
|optionalFilters|[optionalFilters](#schemaoptionalfilters)|false|none|Filters to promote or demote records in the search results.<br><br>Optional filters work like facet filters, but they don't exclude records from the search results.<br>Records that match the optional filter rank before records that don't match.<br>If you're using a negative filter `facet:-value`, matching records rank after records that don't match.<br><br>- Optional filters are applied _after_ sort-by attributes.<br>- Optional filters are applied _before_ custom ranking attributes (in the default [ranking](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria)).<br>- Optional filters don't work with numeric attributes.<br>- On virtual replicas, optional filters are applied _after_ the replica's [relevant sort](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|numericFilters|[numericFilters](#schemanumericfilters)|false|none|Filter by numeric facets.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>You can use numeric comparison operators: `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>Comparisons are precise up to 3 decimals.<br>You can also provide ranges: `facet:<lower> TO <upper>`. The range includes the lower and upper boundaries.<br>The same combination rules apply as for `facetFilters`.<br>|
|tagFilters|[tagFilters](#schematagfilters)|false|none|Filter the search by values of the special `_tags` attribute.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>Different from regular facets, `_tags` can only be used for filtering (including or excluding records).<br>You won't get a facet count.<br>The same combination and escaping rules apply as for `facetFilters`.<br>|
|sumOrFiltersScores|[sumOrFiltersScores](#schemasumorfiltersscores)|false|none|Whether to sum all filter scores.<br>If true, all filter scores are summed.<br>Otherwise, the maximum filter score is kept.<br>For more information, see [filter scores](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/filter-scoring/#accumulate-scores-with-sumorfiltersscores).<br>|
|restrictSearchableAttributes|[restrictSearchableAttributes](#schemarestrictsearchableattributes)|false|none|Restricts a search to a subset of your searchable attributes.<br>Attribute names are case-sensitive.<br>|
|facets|[string]|false|none|Facets for which to retrieve facet values that match the search criteria and the number of matching facet values.<br>To retrieve all facets, use the wildcard character `*`.<br>For more information, see [facets](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#contextual-facet-values-and-counts).<br>|
|facetingAfterDistinct|[facetingAfterDistinct](#schemafacetingafterdistinct)|false|none|Whether faceting should be applied after deduplication with `distinct`.<br>This leads to accurate facet counts when using faceting in combination with `distinct`.<br>It's usually better to use `afterDistinct` modifiers in the `attributesForFaceting` setting,<br>as `facetingAfterDistinct` only computes correct facet counts if all records have the same facet values for the `attributeForDistinct`.<br>|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|offset|integer|false|none|Position of the first hit to retrieve.|
|length|[length](#schemalength)|false|none|Number of hits to retrieve (used in combination with `offset`).|
|aroundLatLng|[aroundLatLng](#schemaaroundlatlng)|false|none|Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.<br><br>Only records included within a circle around this central location are included in the results.<br>The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings.<br>This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.<br>|
|aroundLatLngViaIP|[aroundLatLngViaIP](#schemaaroundlatlngviaip)|false|none|Whether to obtain the coordinates from the request's IP address.|
|aroundRadius|[aroundRadius](#schemaaroundradius)|false|none|Maximum radius for a search around a central location.<br><br>This parameter works in combination with the `aroundLatLng` and `aroundLatLngViaIP` parameters.<br>By default, the search radius is determined automatically from the density of hits around the central location.<br>The search radius is small if there are many hits close to the central coordinates.<br>|
|aroundPrecision|[aroundPrecision](#schemaaroundprecision)|false|none|Precision of a coordinate-based search in meters to group results with similar distances.<br><br>The Geo ranking criterion considers all matches within the same range of distances to be equal.<br>|
|minimumAroundRadius|[minimumAroundRadius](#schemaminimumaroundradius)|false|none|Minimum radius (in meters) for a search around a location when `aroundRadius` isn't set.|
|insideBoundingBox|[insideBoundingBox](#schemainsideboundingbox)|false|none|none|
|insidePolygon|[insidePolygon](#schemainsidepolygon)|false|none|Coordinates of a polygon in which to search.<br><br>Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude.<br>Provide multiple polygons as nested arrays.<br>For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).<br>This parameter is ignored if you also specify `insideBoundingBox`.<br>|
|naturalLanguages|[naturalLanguages](#schemanaturallanguages)|false|none|ISO language codes that adjust settings that are useful for processing natural language queries (as opposed to keyword searches).<br>- Sets `removeStopWords` and `ignorePlurals` to the list of provided languages.<br>- Sets `removeWordsIfNoResults` to `allOptional`.<br>- Adds a `natural_language` attribute to `ruleContexts` and `analyticsTags`.<br>|
|ruleContexts|[ruleContexts](#schemarulecontexts)|false|none|Assigns a rule context to the search query.<br>[Rule contexts](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/how-to/customize-search-results-by-platform/#assign-context) are strings that you can use to trigger matching rules.<br>|
|personalizationImpact|[personalizationImpact](#schemapersonalizationimpact)|false|none|Impact that Personalization should have on this search.<br>The higher this value is, the more Personalization determines the ranking compared to other factors.<br>For more information, see [Understanding Personalization impact](https://www.algolia.com/doc/guides/personalization/personalizing-results/in-depth/configuring-personalization/#understanding-personalization-impact).<br>|
|userToken|[userToken](#schemausertoken)|false|none|Unique pseudonymous or anonymous user identifier.<br><br>This helps with analytics and click and conversion events.<br>For more information, see [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken).<br>|
|getRankingInfo|[getRankingInfo](#schemagetrankinginfo)|false|none|Whether the search response should include detailed ranking information.|
|synonyms|[synonyms](#schemasynonyms)|false|none|Whether to take into account an index's synonyms for this search.|
|clickAnalytics|[clickAnalytics](#schemaclickanalytics)|false|none|Whether to include a `queryID` attribute in the response.<br>The query ID is a unique identifier for a search query and is required for tracking [click and conversion events](https://www.algolia.com/doc/guides/sending-events/getting-started).<br>|
|analytics|[analytics](#schemaanalytics)|false|none|Whether this search will be included in Analytics.|
|analyticsTags|[analyticsTags](#schemaanalyticstags)|false|none|Tags to apply to the query for [segmenting analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments).|
|percentileComputation|[percentileComputation](#schemapercentilecomputation)|false|none|Whether to include this search when calculating processing-time percentiles.|
|enableABTest|[enableABTest](#schemaenableabtest)|false|none|Whether to enable A/B testing for this search.|

#### Enumerated Values

|Property|Value|
|---|---|
|naturalLanguages|af|
|naturalLanguages|ar|
|naturalLanguages|az|
|naturalLanguages|bg|
|naturalLanguages|bn|
|naturalLanguages|ca|
|naturalLanguages|cs|
|naturalLanguages|cy|
|naturalLanguages|da|
|naturalLanguages|de|
|naturalLanguages|el|
|naturalLanguages|en|
|naturalLanguages|eo|
|naturalLanguages|es|
|naturalLanguages|et|
|naturalLanguages|eu|
|naturalLanguages|fa|
|naturalLanguages|fi|
|naturalLanguages|fo|
|naturalLanguages|fr|
|naturalLanguages|ga|
|naturalLanguages|gl|
|naturalLanguages|he|
|naturalLanguages|hi|
|naturalLanguages|hu|
|naturalLanguages|hy|
|naturalLanguages|id|
|naturalLanguages|is|
|naturalLanguages|it|
|naturalLanguages|ja|
|naturalLanguages|ka|
|naturalLanguages|kk|
|naturalLanguages|ko|
|naturalLanguages|ku|
|naturalLanguages|ky|
|naturalLanguages|lt|
|naturalLanguages|lv|
|naturalLanguages|mi|
|naturalLanguages|mn|
|naturalLanguages|mr|
|naturalLanguages|ms|
|naturalLanguages|mt|
|naturalLanguages|nb|
|naturalLanguages|nl|
|naturalLanguages|no|
|naturalLanguages|ns|
|naturalLanguages|pl|
|naturalLanguages|ps|
|naturalLanguages|pt|
|naturalLanguages|pt-br|
|naturalLanguages|qu|
|naturalLanguages|ro|
|naturalLanguages|ru|
|naturalLanguages|sk|
|naturalLanguages|sq|
|naturalLanguages|sv|
|naturalLanguages|sw|
|naturalLanguages|ta|
|naturalLanguages|te|
|naturalLanguages|th|
|naturalLanguages|tl|
|naturalLanguages|tn|
|naturalLanguages|tr|
|naturalLanguages|tt|
|naturalLanguages|uk|
|naturalLanguages|ur|
|naturalLanguages|uz|
|naturalLanguages|zh|

<h2 id="tocS_baseSearchParams">baseSearchParams</h2>
<!-- backwards compatibility -->
<a id="schemabasesearchparams"></a>
<a id="schema_baseSearchParams"></a>
<a id="tocSbasesearchparams"></a>
<a id="tocsbasesearchparams"></a>

```json
{
  "query": "",
  "similarQuery": "comedy drama crime Macy Buscemi",
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "optionalFilters": [
    "category:Book",
    "author:John Doe"
  ],
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "sumOrFiltersScores": false,
  "restrictSearchableAttributes": [
    "title",
    "author"
  ],
  "facets": [
    "*"
  ],
  "facetingAfterDistinct": false,
  "page": 0,
  "offset": 0,
  "length": 0,
  "aroundLatLng": "40.71,-74.01",
  "aroundLatLngViaIP": false,
  "aroundRadius": 1,
  "aroundPrecision": 10,
  "minimumAroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ],
  "naturalLanguages": [],
  "ruleContexts": [
    "mobile"
  ],
  "personalizationImpact": 100,
  "userToken": "test-user-123",
  "getRankingInfo": false,
  "synonyms": true,
  "clickAnalytics": false,
  "analytics": true,
  "analyticsTags": [],
  "percentileComputation": true,
  "enableABTest": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query](#schemaquery)|false|none|Search query.|
|similarQuery|[similarQuery](#schemasimilarquery)|false|none|Keywords to be used instead of the search query to conduct a more broader search.<br>Using the `similarQuery` parameter changes other settings<br>- `queryType` is set to `prefixNone`.<br>- `removeStopWords` is set to true.<br>- `words` is set as the first ranking criterion.<br>- All remaining words are treated as `optionalWords`.<br>Since the `similarQuery` is supposed to do a broad search, they usually return many results.<br>Combine it with `filters` to narrow down the list of results.<br>|
|filters|[filters](#schemafilters)|false|none|Filter expression to only include items that match the filter criteria in the response.<br><br>You can use these filter expressions:<br><br>- **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>- **Ranges.** `<facet>:<lower> TO <upper>`, where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive).<br>- **Facet filters.** `<facet>:<value>`, where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value.<br>- **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive).<br>- **Boolean filters.** `<facet>: true \| false`.<br><br>You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:<br><br>- You can only combine filters of the same type with `OR`.<br>  **Not supported:** `facet:value OR num > 3`.<br>- You can't use `NOT` with combinations of filters.<br>  **Not supported:** `NOT(facet:value OR facet:value)`<br>- You can't combine conjunctions (`AND`) with `OR`.<br>  **Not supported:** `facet:value OR (facet:value AND facet:value)`<br><br>Use quotes if the facet attribute name or facet value contains spaces, keywords (`OR`, `AND`, `NOT`), or quotes.<br>If a facet attribute is an array, the filter matches if it matches at least one element of the array.<br><br>For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering).<br>|
|facetFilters|[facetFilters](#schemafacetfilters)|false|none|Filter the search by facet values, so that only records with the same facet values are retrieved.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>- `[filter1, filter2]` is interpreted as `filter1 AND filter2`.<br>- `[[filter1, filter2], filter3]` is interpreted as `filter1 OR filter2 AND filter3`.<br>- `facet:-value` is interpreted as `NOT facet:value`.<br><br>While it's best to avoid attributes that start with a `-`, you can still filter them by escaping with a backslash:<br>`facet:\-value`.<br>|
|optionalFilters|[optionalFilters](#schemaoptionalfilters)|false|none|Filters to promote or demote records in the search results.<br><br>Optional filters work like facet filters, but they don't exclude records from the search results.<br>Records that match the optional filter rank before records that don't match.<br>If you're using a negative filter `facet:-value`, matching records rank after records that don't match.<br><br>- Optional filters are applied _after_ sort-by attributes.<br>- Optional filters are applied _before_ custom ranking attributes (in the default [ranking](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria)).<br>- Optional filters don't work with numeric attributes.<br>- On virtual replicas, optional filters are applied _after_ the replica's [relevant sort](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|numericFilters|[numericFilters](#schemanumericfilters)|false|none|Filter by numeric facets.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>You can use numeric comparison operators: `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>Comparisons are precise up to 3 decimals.<br>You can also provide ranges: `facet:<lower> TO <upper>`. The range includes the lower and upper boundaries.<br>The same combination rules apply as for `facetFilters`.<br>|
|tagFilters|[tagFilters](#schematagfilters)|false|none|Filter the search by values of the special `_tags` attribute.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>Different from regular facets, `_tags` can only be used for filtering (including or excluding records).<br>You won't get a facet count.<br>The same combination and escaping rules apply as for `facetFilters`.<br>|
|sumOrFiltersScores|[sumOrFiltersScores](#schemasumorfiltersscores)|false|none|Whether to sum all filter scores.<br>If true, all filter scores are summed.<br>Otherwise, the maximum filter score is kept.<br>For more information, see [filter scores](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/filter-scoring/#accumulate-scores-with-sumorfiltersscores).<br>|
|restrictSearchableAttributes|[restrictSearchableAttributes](#schemarestrictsearchableattributes)|false|none|Restricts a search to a subset of your searchable attributes.<br>Attribute names are case-sensitive.<br>|
|facets|[string]|false|none|Facets for which to retrieve facet values that match the search criteria and the number of matching facet values.<br>To retrieve all facets, use the wildcard character `*`.<br>For more information, see [facets](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#contextual-facet-values-and-counts).<br>|
|facetingAfterDistinct|[facetingAfterDistinct](#schemafacetingafterdistinct)|false|none|Whether faceting should be applied after deduplication with `distinct`.<br>This leads to accurate facet counts when using faceting in combination with `distinct`.<br>It's usually better to use `afterDistinct` modifiers in the `attributesForFaceting` setting,<br>as `facetingAfterDistinct` only computes correct facet counts if all records have the same facet values for the `attributeForDistinct`.<br>|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|offset|integer|false|none|Position of the first hit to retrieve.|
|length|[length](#schemalength)|false|none|Number of hits to retrieve (used in combination with `offset`).|
|aroundLatLng|[aroundLatLng](#schemaaroundlatlng)|false|none|Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.<br><br>Only records included within a circle around this central location are included in the results.<br>The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings.<br>This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.<br>|
|aroundLatLngViaIP|[aroundLatLngViaIP](#schemaaroundlatlngviaip)|false|none|Whether to obtain the coordinates from the request's IP address.|
|aroundRadius|[aroundRadius](#schemaaroundradius)|false|none|Maximum radius for a search around a central location.<br><br>This parameter works in combination with the `aroundLatLng` and `aroundLatLngViaIP` parameters.<br>By default, the search radius is determined automatically from the density of hits around the central location.<br>The search radius is small if there are many hits close to the central coordinates.<br>|
|aroundPrecision|[aroundPrecision](#schemaaroundprecision)|false|none|Precision of a coordinate-based search in meters to group results with similar distances.<br><br>The Geo ranking criterion considers all matches within the same range of distances to be equal.<br>|
|minimumAroundRadius|[minimumAroundRadius](#schemaminimumaroundradius)|false|none|Minimum radius (in meters) for a search around a location when `aroundRadius` isn't set.|
|insideBoundingBox|[insideBoundingBox](#schemainsideboundingbox)|false|none|none|
|insidePolygon|[insidePolygon](#schemainsidepolygon)|false|none|Coordinates of a polygon in which to search.<br><br>Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude.<br>Provide multiple polygons as nested arrays.<br>For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).<br>This parameter is ignored if you also specify `insideBoundingBox`.<br>|
|naturalLanguages|[naturalLanguages](#schemanaturallanguages)|false|none|ISO language codes that adjust settings that are useful for processing natural language queries (as opposed to keyword searches).<br>- Sets `removeStopWords` and `ignorePlurals` to the list of provided languages.<br>- Sets `removeWordsIfNoResults` to `allOptional`.<br>- Adds a `natural_language` attribute to `ruleContexts` and `analyticsTags`.<br>|
|ruleContexts|[ruleContexts](#schemarulecontexts)|false|none|Assigns a rule context to the search query.<br>[Rule contexts](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/how-to/customize-search-results-by-platform/#assign-context) are strings that you can use to trigger matching rules.<br>|
|personalizationImpact|[personalizationImpact](#schemapersonalizationimpact)|false|none|Impact that Personalization should have on this search.<br>The higher this value is, the more Personalization determines the ranking compared to other factors.<br>For more information, see [Understanding Personalization impact](https://www.algolia.com/doc/guides/personalization/personalizing-results/in-depth/configuring-personalization/#understanding-personalization-impact).<br>|
|userToken|[userToken](#schemausertoken)|false|none|Unique pseudonymous or anonymous user identifier.<br><br>This helps with analytics and click and conversion events.<br>For more information, see [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken).<br>|
|getRankingInfo|[getRankingInfo](#schemagetrankinginfo)|false|none|Whether the search response should include detailed ranking information.|
|synonyms|[synonyms](#schemasynonyms)|false|none|Whether to take into account an index's synonyms for this search.|
|clickAnalytics|[clickAnalytics](#schemaclickanalytics)|false|none|Whether to include a `queryID` attribute in the response.<br>The query ID is a unique identifier for a search query and is required for tracking [click and conversion events](https://www.algolia.com/doc/guides/sending-events/getting-started).<br>|
|analytics|[analytics](#schemaanalytics)|false|none|Whether this search will be included in Analytics.|
|analyticsTags|[analyticsTags](#schemaanalyticstags)|false|none|Tags to apply to the query for [segmenting analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments).|
|percentileComputation|[percentileComputation](#schemapercentilecomputation)|false|none|Whether to include this search when calculating processing-time percentiles.|
|enableABTest|[enableABTest](#schemaenableabtest)|false|none|Whether to enable A/B testing for this search.|

#### Enumerated Values

|Property|Value|
|---|---|
|naturalLanguages|af|
|naturalLanguages|ar|
|naturalLanguages|az|
|naturalLanguages|bg|
|naturalLanguages|bn|
|naturalLanguages|ca|
|naturalLanguages|cs|
|naturalLanguages|cy|
|naturalLanguages|da|
|naturalLanguages|de|
|naturalLanguages|el|
|naturalLanguages|en|
|naturalLanguages|eo|
|naturalLanguages|es|
|naturalLanguages|et|
|naturalLanguages|eu|
|naturalLanguages|fa|
|naturalLanguages|fi|
|naturalLanguages|fo|
|naturalLanguages|fr|
|naturalLanguages|ga|
|naturalLanguages|gl|
|naturalLanguages|he|
|naturalLanguages|hi|
|naturalLanguages|hu|
|naturalLanguages|hy|
|naturalLanguages|id|
|naturalLanguages|is|
|naturalLanguages|it|
|naturalLanguages|ja|
|naturalLanguages|ka|
|naturalLanguages|kk|
|naturalLanguages|ko|
|naturalLanguages|ku|
|naturalLanguages|ky|
|naturalLanguages|lt|
|naturalLanguages|lv|
|naturalLanguages|mi|
|naturalLanguages|mn|
|naturalLanguages|mr|
|naturalLanguages|ms|
|naturalLanguages|mt|
|naturalLanguages|nb|
|naturalLanguages|nl|
|naturalLanguages|no|
|naturalLanguages|ns|
|naturalLanguages|pl|
|naturalLanguages|ps|
|naturalLanguages|pt|
|naturalLanguages|pt-br|
|naturalLanguages|qu|
|naturalLanguages|ro|
|naturalLanguages|ru|
|naturalLanguages|sk|
|naturalLanguages|sq|
|naturalLanguages|sv|
|naturalLanguages|sw|
|naturalLanguages|ta|
|naturalLanguages|te|
|naturalLanguages|th|
|naturalLanguages|tl|
|naturalLanguages|tn|
|naturalLanguages|tr|
|naturalLanguages|tt|
|naturalLanguages|uk|
|naturalLanguages|ur|
|naturalLanguages|uz|
|naturalLanguages|zh|

<h2 id="tocS_attributesToRetrieve">attributesToRetrieve</h2>
<!-- backwards compatibility -->
<a id="schemaattributestoretrieve"></a>
<a id="schema_attributesToRetrieve"></a>
<a id="tocSattributestoretrieve"></a>
<a id="tocsattributestoretrieve"></a>

```json
[
  "author",
  "title",
  "content"
]
```

Attributes to include in the API response.
To reduce the size of your response, you can retrieve only some of the attributes.
Attribute names are case-sensitive
- `*` retrieves all attributes, except attributes included in the `customRanking` and `unretrievableAttributes` settings.
- To retrieve all attributes except a specific one, prefix the attribute with a dash and combine it with the `*`: `["*", "-ATTRIBUTE"]`.
- The `objectID` attribute is always included.

<h2 id="tocS_relevancyStrictness">relevancyStrictness</h2>
<!-- backwards compatibility -->
<a id="schemarelevancystrictness"></a>
<a id="schema_relevancyStrictness"></a>
<a id="tocSrelevancystrictness"></a>
<a id="tocsrelevancystrictness"></a>

```json
90
```

Relevancy threshold below which less relevant results aren't included in the results.
You can only set `relevancyStrictness` on [virtual replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/#standard-and-virtual-replicas).
Use this setting to strike a balance between the relevance and number of returned results.

<h2 id="tocS_attributesToHighlight">attributesToHighlight</h2>
<!-- backwards compatibility -->
<a id="schemaattributestohighlight"></a>
<a id="schema_attributesToHighlight"></a>
<a id="tocSattributestohighlight"></a>
<a id="tocsattributestohighlight"></a>

```json
[
  "author",
  "title",
  "conten",
  "content"
]
```

Attributes to highlight.
By default, all searchable attributes are highlighted.
Use `*` to highlight all attributes or use an empty array `[]` to turn off highlighting.
Attribute names are case-sensitive
With highlighting, strings that match the search query are surrounded by HTML tags defined by `highlightPreTag` and `highlightPostTag`.
You can use this to visually highlight matching parts of a search query in your UI
For more information, see [Highlighting and snippeting](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/highlighting-snippeting/js).

<h2 id="tocS_attributesToSnippet">attributesToSnippet</h2>
<!-- backwards compatibility -->
<a id="schemaattributestosnippet"></a>
<a id="schema_attributesToSnippet"></a>
<a id="tocSattributestosnippet"></a>
<a id="tocsattributestosnippet"></a>

```json
[
  "content:80",
  "description"
]
```

Attributes for which to enable snippets.
Attribute names are case-sensitive
Snippets provide additional context to matched words.
If you enable snippets, they include 10 words, including the matched word.
The matched word will also be wrapped by HTML tags for highlighting.
You can adjust the number of words with the following notation: `ATTRIBUTE:NUMBER`,
where `NUMBER` is the number of words to be extracted.

<h2 id="tocS_highlightPreTag">highlightPreTag</h2>
<!-- backwards compatibility -->
<a id="schemahighlightpretag"></a>
<a id="schema_highlightPreTag"></a>
<a id="tocShighlightpretag"></a>
<a id="tocshighlightpretag"></a>

```json
"<em>"
```

HTML tag to insert before the highlighted parts in all highlighted results and snippets.

<h2 id="tocS_highlightPostTag">highlightPostTag</h2>
<!-- backwards compatibility -->
<a id="schemahighlightposttag"></a>
<a id="schema_highlightPostTag"></a>
<a id="tocShighlightposttag"></a>
<a id="tocshighlightposttag"></a>

```json
"</em>"
```

HTML tag to insert after the highlighted parts in all highlighted results and snippets.

<h2 id="tocS_snippetEllipsisText">snippetEllipsisText</h2>
<!-- backwards compatibility -->
<a id="schemasnippetellipsistext"></a>
<a id="schema_snippetEllipsisText"></a>
<a id="tocSsnippetellipsistext"></a>
<a id="tocssnippetellipsistext"></a>

```json
"…"
```

String used as an ellipsis indicator when a snippet is truncated.

<h2 id="tocS_restrictHighlightAndSnippetArrays">restrictHighlightAndSnippetArrays</h2>
<!-- backwards compatibility -->
<a id="schemarestricthighlightandsnippetarrays"></a>
<a id="schema_restrictHighlightAndSnippetArrays"></a>
<a id="tocSrestricthighlightandsnippetarrays"></a>
<a id="tocsrestricthighlightandsnippetarrays"></a>

```json
false
```

Whether to restrict highlighting and snippeting to items that at least partially matched the search query.
By default, all items are highlighted and snippeted.

<h2 id="tocS_hitsPerPage">hitsPerPage</h2>
<!-- backwards compatibility -->
<a id="schemahitsperpage"></a>
<a id="schema_hitsPerPage"></a>
<a id="tocShitsperpage"></a>
<a id="tocshitsperpage"></a>

```json
20
```

Number of hits per page.

<h2 id="tocS_minWordSizefor1Typo">minWordSizefor1Typo</h2>
<!-- backwards compatibility -->
<a id="schemaminwordsizefor1typo"></a>
<a id="schema_minWordSizefor1Typo"></a>
<a id="tocSminwordsizefor1typo"></a>
<a id="tocsminwordsizefor1typo"></a>

```json
4
```

Minimum number of characters a word in the search query must contain to accept matches with [one typo](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).

<h2 id="tocS_minWordSizefor2Typos">minWordSizefor2Typos</h2>
<!-- backwards compatibility -->
<a id="schemaminwordsizefor2typos"></a>
<a id="schema_minWordSizefor2Typos"></a>
<a id="tocSminwordsizefor2typos"></a>
<a id="tocsminwordsizefor2typos"></a>

```json
8
```

Minimum number of characters a word in the search query must contain to accept matches with [two typos](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).

<h2 id="tocS_typoToleranceEnum">typoToleranceEnum</h2>
<!-- backwards compatibility -->
<a id="schematypotoleranceenum"></a>
<a id="schema_typoToleranceEnum"></a>
<a id="tocStypotoleranceenum"></a>
<a id="tocstypotoleranceenum"></a>

```json
"min"
```

- `min`. Return matches with the lowest number of typos.
  For example, if you have matches without typos, only include those.
  But if there are no matches without typos (with 1 typo), include matches with 1 typo (2 typos).
- `strict`. Return matches with the two lowest numbers of typos.
  With `strict`, the Typo ranking criterion is applied first in the `ranking` setting.

<h2 id="tocS_typoTolerance">typoTolerance</h2>
<!-- backwards compatibility -->
<a id="schematypotolerance"></a>
<a id="schema_typoTolerance"></a>
<a id="tocStypotolerance"></a>
<a id="tocstypotolerance"></a>

```json
true
```

Whether [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance) is enabled and how it is applied.

If typo tolerance is true, `min`, or `strict`, [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) are also active.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|boolean|false|none|Whether typo tolerance is active. If true, matches with typos are included in the search results and rank after exact matches.|
|*oneOf*|[typoToleranceEnum](#schematypotoleranceenum)|false|none|- `min`. Return matches with the lowest number of typos.<br>  For example, if you have matches without typos, only include those.<br>  But if there are no matches without typos (with 1 typo), include matches with 1 typo (2 typos).<br>- `strict`. Return matches with the two lowest numbers of typos.<br>  With `strict`, the Typo ranking criterion is applied first in the `ranking` setting.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|min|
|*oneOf*|strict|
|*oneOf*|true|
|*oneOf*|false|

<h2 id="tocS_allowTyposOnNumericTokens">allowTyposOnNumericTokens</h2>
<!-- backwards compatibility -->
<a id="schemaallowtyposonnumerictokens"></a>
<a id="schema_allowTyposOnNumericTokens"></a>
<a id="tocSallowtyposonnumerictokens"></a>
<a id="tocsallowtyposonnumerictokens"></a>

```json
true
```

Whether to allow typos on numbers in the search query.
Turn off this setting to reduce the number of irrelevant matches
when searching in large sets of similar numbers.

<h2 id="tocS_disableTypoToleranceOnAttributes">disableTypoToleranceOnAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadisabletypotoleranceonattributes"></a>
<a id="schema_disableTypoToleranceOnAttributes"></a>
<a id="tocSdisabletypotoleranceonattributes"></a>
<a id="tocsdisabletypotoleranceonattributes"></a>

```json
[
  "sku"
]
```

Attributes for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance).
Attribute names are case-sensitive
Returning only exact matches can help when
- [Searching in hyphenated attributes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes).
- Reducing the number of matches when you have too many.
  This can happen with attributes that are long blocks of text, such as product descriptions.
Consider alternatives such as `disableTypoToleranceOnWords` or adding synonyms if your attributes have intentional unusual spellings that might look like typos.

<h2 id="tocS_booleanString">booleanString</h2>
<!-- backwards compatibility -->
<a id="schemabooleanstring"></a>
<a id="schema_booleanString"></a>
<a id="tocSbooleanstring"></a>
<a id="tocsbooleanstring"></a>

```json
"true"
```

<h2 id="tocS_ignorePlurals">ignorePlurals</h2>
<!-- backwards compatibility -->
<a id="schemaignoreplurals"></a>
<a id="schema_ignorePlurals"></a>
<a id="tocSignoreplurals"></a>
<a id="tocsignoreplurals"></a>

```json
[
  "ca",
  "es"
]
```

Treat singular, plurals, and other forms of declensions as equivalent.
Only use this feature for the languages used in your index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[supportedLanguage](#schemasupportedlanguage)]|false|none|ISO code for languages for which this feature should be active.<br>This overrides languages you set with `queryLanguages`.<br>|
|*oneOf*|[booleanString](#schemabooleanstring)|false|none|none|
|*oneOf*|boolean|false|none|If true, `ignorePlurals` is active for all languages included in `queryLanguages`, or for all supported languages, if `queryLanguges` is empty.<br>If false, singulars, plurals, and other declensions won't be considered equivalent.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|af|
|*oneOf*|ar|
|*oneOf*|az|
|*oneOf*|bg|
|*oneOf*|bn|
|*oneOf*|ca|
|*oneOf*|cs|
|*oneOf*|cy|
|*oneOf*|da|
|*oneOf*|de|
|*oneOf*|el|
|*oneOf*|en|
|*oneOf*|eo|
|*oneOf*|es|
|*oneOf*|et|
|*oneOf*|eu|
|*oneOf*|fa|
|*oneOf*|fi|
|*oneOf*|fo|
|*oneOf*|fr|
|*oneOf*|ga|
|*oneOf*|gl|
|*oneOf*|he|
|*oneOf*|hi|
|*oneOf*|hu|
|*oneOf*|hy|
|*oneOf*|id|
|*oneOf*|is|
|*oneOf*|it|
|*oneOf*|ja|
|*oneOf*|ka|
|*oneOf*|kk|
|*oneOf*|ko|
|*oneOf*|ku|
|*oneOf*|ky|
|*oneOf*|lt|
|*oneOf*|lv|
|*oneOf*|mi|
|*oneOf*|mn|
|*oneOf*|mr|
|*oneOf*|ms|
|*oneOf*|mt|
|*oneOf*|nb|
|*oneOf*|nl|
|*oneOf*|no|
|*oneOf*|ns|
|*oneOf*|pl|
|*oneOf*|ps|
|*oneOf*|pt|
|*oneOf*|pt-br|
|*oneOf*|qu|
|*oneOf*|ro|
|*oneOf*|ru|
|*oneOf*|sk|
|*oneOf*|sq|
|*oneOf*|sv|
|*oneOf*|sw|
|*oneOf*|ta|
|*oneOf*|te|
|*oneOf*|th|
|*oneOf*|tl|
|*oneOf*|tn|
|*oneOf*|tr|
|*oneOf*|tt|
|*oneOf*|uk|
|*oneOf*|ur|
|*oneOf*|uz|
|*oneOf*|zh|
|*oneOf*|true|
|*oneOf*|false|

<h2 id="tocS_removeStopWords">removeStopWords</h2>
<!-- backwards compatibility -->
<a id="schemaremovestopwords"></a>
<a id="schema_removeStopWords"></a>
<a id="tocSremovestopwords"></a>
<a id="tocsremovestopwords"></a>

```json
[
  "ca",
  "es"
]
```

Removes stop words from the search query.

Stop words are common words like articles, conjunctions, prepositions, or pronouns that have little or no meaning on their own.
In English, "the", "a", or "and" are stop words.

Only use this feature for the languages used in your index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[supportedLanguage](#schemasupportedlanguage)]|false|none|ISO code for languages for which stop words should be removed. This overrides languages you set in `queryLanguges`.|
|*oneOf*|boolean|false|none|If true, stop words are removed for all languages you included in `queryLanguages`, or for all supported languages, if `queryLanguages` is empty.<br>If false, stop words are not removed.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|af|
|*oneOf*|ar|
|*oneOf*|az|
|*oneOf*|bg|
|*oneOf*|bn|
|*oneOf*|ca|
|*oneOf*|cs|
|*oneOf*|cy|
|*oneOf*|da|
|*oneOf*|de|
|*oneOf*|el|
|*oneOf*|en|
|*oneOf*|eo|
|*oneOf*|es|
|*oneOf*|et|
|*oneOf*|eu|
|*oneOf*|fa|
|*oneOf*|fi|
|*oneOf*|fo|
|*oneOf*|fr|
|*oneOf*|ga|
|*oneOf*|gl|
|*oneOf*|he|
|*oneOf*|hi|
|*oneOf*|hu|
|*oneOf*|hy|
|*oneOf*|id|
|*oneOf*|is|
|*oneOf*|it|
|*oneOf*|ja|
|*oneOf*|ka|
|*oneOf*|kk|
|*oneOf*|ko|
|*oneOf*|ku|
|*oneOf*|ky|
|*oneOf*|lt|
|*oneOf*|lv|
|*oneOf*|mi|
|*oneOf*|mn|
|*oneOf*|mr|
|*oneOf*|ms|
|*oneOf*|mt|
|*oneOf*|nb|
|*oneOf*|nl|
|*oneOf*|no|
|*oneOf*|ns|
|*oneOf*|pl|
|*oneOf*|ps|
|*oneOf*|pt|
|*oneOf*|pt-br|
|*oneOf*|qu|
|*oneOf*|ro|
|*oneOf*|ru|
|*oneOf*|sk|
|*oneOf*|sq|
|*oneOf*|sv|
|*oneOf*|sw|
|*oneOf*|ta|
|*oneOf*|te|
|*oneOf*|th|
|*oneOf*|tl|
|*oneOf*|tn|
|*oneOf*|tr|
|*oneOf*|tt|
|*oneOf*|uk|
|*oneOf*|ur|
|*oneOf*|uz|
|*oneOf*|zh|

<h2 id="tocS_queryLanguages">queryLanguages</h2>
<!-- backwards compatibility -->
<a id="schemaquerylanguages"></a>
<a id="schema_queryLanguages"></a>
<a id="tocSquerylanguages"></a>
<a id="tocsquerylanguages"></a>

```json
[
  "es"
]
```

Languages for language-specific query processing steps such as plurals, stop-word removal, and word-detection dictionaries.
This setting sets a default list of languages used by the `removeStopWords` and `ignorePlurals` settings.
This setting also sets a dictionary for word detection in the logogram-based [CJK](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/#normalization-for-logogram-based-languages-cjk) languages.
To support this, place the CJK language **first**.
**Always specify a query language.**
If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),
or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.
This can lead to unexpected search results.
For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).

<h2 id="tocS_decompoundQuery">decompoundQuery</h2>
<!-- backwards compatibility -->
<a id="schemadecompoundquery"></a>
<a id="schema_decompoundQuery"></a>
<a id="tocSdecompoundquery"></a>
<a id="tocsdecompoundquery"></a>

```json
true
```

Whether to split compound words in the query into their building blocks.
For more information, see [Word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#split-compound-words).
Word segmentation is supported for these languages: German, Dutch, Finnish, Swedish, and Norwegian.
Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).
For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).

<h2 id="tocS_enableRules">enableRules</h2>
<!-- backwards compatibility -->
<a id="schemaenablerules"></a>
<a id="schema_enableRules"></a>
<a id="tocSenablerules"></a>
<a id="tocsenablerules"></a>

```json
true
```

Whether to enable rules.

<h2 id="tocS_enablePersonalization">enablePersonalization</h2>
<!-- backwards compatibility -->
<a id="schemaenablepersonalization"></a>
<a id="schema_enablePersonalization"></a>
<a id="tocSenablepersonalization"></a>
<a id="tocsenablepersonalization"></a>

```json
false
```

Whether to enable Personalization.

<h2 id="tocS_queryType">queryType</h2>
<!-- backwards compatibility -->
<a id="schemaquerytype"></a>
<a id="schema_queryType"></a>
<a id="tocSquerytype"></a>
<a id="tocsquerytype"></a>

```json
"prefixLast"
```

Determines if and how query words are interpreted as prefixes.

By default, only the last query word is treated as a prefix (`prefixLast`).
To turn off prefix search, use `prefixNone`.
Avoid `prefixAll`, which treats all query words as prefixes.
This might lead to counterintuitive results and makes your search slower.

For more information, see [Prefix searching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/prefix-searching).

<h2 id="tocS_removeWordsIfNoResults">removeWordsIfNoResults</h2>
<!-- backwards compatibility -->
<a id="schemaremovewordsifnoresults"></a>
<a id="schema_removeWordsIfNoResults"></a>
<a id="tocSremovewordsifnoresults"></a>
<a id="tocsremovewordsifnoresults"></a>

```json
"firstWords"
```

Strategy for removing words from the query when it doesn't return any results.
This helps to avoid returning empty search results.

- `none`.
  No words are removed when a query doesn't return results.

- `lastWords`.
  Treat the last (then second to last, then third to last) word as optional,
  until there are results or at most 5 words have been removed.

- `firstWords`.
  Treat the first (then second, then third) word as optional,
  until there are results or at most 5 words have been removed.

- `allOptional`.
  Treat all words as optional.

For more information, see [Remove words to improve results](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/in-depth/why-use-remove-words-if-no-results).

<h2 id="tocS_mode">mode</h2>
<!-- backwards compatibility -->
<a id="schemamode"></a>
<a id="schema_mode"></a>
<a id="tocSmode"></a>
<a id="tocsmode"></a>

```json
"keywordSearch"
```

Search mode the index will use to query for results.

This setting only applies to indices, for which Algolia enabled NeuralSearch for you.

<h2 id="tocS_semanticSearch">semanticSearch</h2>
<!-- backwards compatibility -->
<a id="schemasemanticsearch"></a>
<a id="schema_semanticSearch"></a>
<a id="tocSsemanticsearch"></a>
<a id="tocssemanticsearch"></a>

```json
{
  "eventSources": [
    "string"
  ]
}
```

Settings for the semantic search part of NeuralSearch.
Only used when `mode` is `neuralSearch`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventSources|[string] \| null|false|none|none|

<h2 id="tocS_advancedSyntax">advancedSyntax</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedsyntax"></a>
<a id="schema_advancedSyntax"></a>
<a id="tocSadvancedsyntax"></a>
<a id="tocsadvancedsyntax"></a>

```json
false
```

Whether to support phrase matching and excluding words from search queries.
Use the `advancedSyntaxFeatures` parameter to control which feature is supported.

<h2 id="tocS_optionalWordsArray">optionalWordsArray</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalwordsarray"></a>
<a id="schema_optionalWordsArray"></a>
<a id="tocSoptionalwordsarray"></a>
<a id="tocsoptionalwordsarray"></a>

```json
[
  "blue",
  "iphone case"
]
```

List of [optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).

<h2 id="tocS_optionalWords">optionalWords</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalwords"></a>
<a id="schema_optionalWords"></a>
<a id="tocSoptionalwords"></a>
<a id="tocsoptionalwords"></a>

```json
"string"
```

Words that should be considered optional when found in the query.

By default, records must match all words in the search query to be included in the search results.
Adding optional words can increase the number of search results by running an additional search query that doesn't include the optional words.
For example, if the search query is "action video" and "video" is optional,
the search engine runs two queries: one for "action video" and one for "action".
Records that match all words are ranked higher.

For a search query with 4 or more words **and** all its words are optional,
the number of matched words required for a record to be included in the search results increases for every 1,000 records:

- If `optionalWords` has fewer than 10 words, the required number of matched words increases by 1:
  results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 2 matched words.
- If `optionalWords` has 10 or more words, the required number of matched words increases by the number of optional words divided by 5 (rounded down).
  Example: with 18 optional words, results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 4 matched words.

For more information, see [Optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|null|false|none|none|
|*oneOf*|[optionalWordsArray](#schemaoptionalwordsarray)|false|none|List of [optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).|

<h2 id="tocS_disableExactOnAttributes">disableExactOnAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadisableexactonattributes"></a>
<a id="schema_disableExactOnAttributes"></a>
<a id="tocSdisableexactonattributes"></a>
<a id="tocsdisableexactonattributes"></a>

```json
[
  "description"
]
```

Searchable attributes for which you want to [turn off the Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes).
Attribute names are case-sensitive
This can be useful for attributes with long values, where the likelihood of an exact match is high,
such as product descriptions.
Turning off the Exact ranking criterion for these attributes favors exact matching on other attributes.
This reduces the impact of individual attributes with a lot of content on ranking.

<h2 id="tocS_exactOnSingleWordQuery">exactOnSingleWordQuery</h2>
<!-- backwards compatibility -->
<a id="schemaexactonsinglewordquery"></a>
<a id="schema_exactOnSingleWordQuery"></a>
<a id="tocSexactonsinglewordquery"></a>
<a id="tocsexactonsinglewordquery"></a>

```json
"attribute"
```

Determines how the [Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes) is computed when the search query has only one word.

- `attribute`.
  The Exact ranking criterion is 1 if the query word and attribute value are the same.
  For example, a search for "road" will match the value "road", but not "road trip".

- `none`.
  The Exact ranking criterion is ignored on single-word searches.

- `word`.
  The Exact ranking criterion is 1 if the query word is found in the attribute value.
  The query word must have at least 3 characters and must not be a stop word.
  Only exact matches will be highlighted,
  partial and prefix matches won't.

<h2 id="tocS_alternativesAsExact">alternativesAsExact</h2>
<!-- backwards compatibility -->
<a id="schemaalternativesasexact"></a>
<a id="schema_alternativesAsExact"></a>
<a id="tocSalternativesasexact"></a>
<a id="tocsalternativesasexact"></a>

```json
"ignorePlurals"
```

<h2 id="tocS_IndexSettings_alternativesAsExact">IndexSettings_alternativesAsExact</h2>
<!-- backwards compatibility -->
<a id="schemaindexsettings_alternativesasexact"></a>
<a id="schema_IndexSettings_alternativesAsExact"></a>
<a id="tocSindexsettings_alternativesasexact"></a>
<a id="tocsindexsettings_alternativesasexact"></a>

```json
[
  "ignorePlurals",
  "singleWordSynonym"
]
```

Determine which plurals and synonyms should be considered an exact matches.
By default, Algolia treats singular and plural forms of a word, and single-word synonyms, as [exact](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#exact) matches when searching.
For example:
- "swimsuit" and "swimsuits" are treated the same.
- "swimsuit" and "swimwear" are treated the same (if they are [synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/#regular-synonyms)).
- `ignorePlurals`.
  Plurals and similar declensions added by the `ignorePlurals` setting are considered exact matches.
- `singleWordSynonym`.
  Single-word synonyms, such as "NY" = "NYC", are considered exact matches.
- `multiWordsSynonym`.
  Multi-word synonyms, such as "NY" = "New York", are considered exact matches.

<h2 id="tocS_advancedSyntaxFeatures">advancedSyntaxFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedsyntaxfeatures"></a>
<a id="schema_advancedSyntaxFeatures"></a>
<a id="tocSadvancedsyntaxfeatures"></a>
<a id="tocsadvancedsyntaxfeatures"></a>

```json
"exactPhrase"
```

<h2 id="tocS_IndexSettings_advancedSyntaxFeatures">IndexSettings_advancedSyntaxFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaindexsettings_advancedsyntaxfeatures"></a>
<a id="schema_IndexSettings_advancedSyntaxFeatures"></a>
<a id="tocSindexsettings_advancedsyntaxfeatures"></a>
<a id="tocsindexsettings_advancedsyntaxfeatures"></a>

```json
[
  "exactPhrase",
  "excludeWords"
]
```

Advanced search syntax features you want to support.
- `exactPhrase`.
  Phrases in quotes must match exactly.
  For example, `sparkly blue "iPhone case"` only returns records with the exact string "iPhone case".
- `excludeWords`.
  Query words prefixed with a `-` must not occur in a record.
  For example, `search -engine` matches records that contain "search" but not "engine".
This setting only has an effect if `advancedSyntax` is true.

<h2 id="tocS_distinct">distinct</h2>
<!-- backwards compatibility -->
<a id="schemadistinct"></a>
<a id="schema_distinct"></a>
<a id="tocSdistinct"></a>
<a id="tocsdistinct"></a>

```json
1
```

Determines how many records of a group are included in the search results.

Records with the same value for the `attributeForDistinct` attribute are considered a group.
The `distinct` setting controls how many members of the group are returned.
This is useful for [deduplication and grouping](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#deduplicate-results-with-distinct).

The `distinct` setting is ignored if `attributeForDistinct` is not set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|boolean|false|none|Whether deduplication is turned on. If true, only one member of a group is shown in the search results.|
|*oneOf*|integer|false|none|Number of members of a group of records to include in the search results.<br><br>- Don't use `distinct > 1` for records that might be [promoted by rules](https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting/how-to/promote-hits).<br>  The number of hits won't be correct and faceting won't work as expected.<br>- With `distinct > 1`, the `hitsPerPage` parameter controls the number of returned groups.<br>  For example, with `hitsPerPage: 10` and `distinct: 2`, up to 20 records are returned.<br>  Likewise, the `nbHits` response attribute contains the number of returned groups.<br>|

<h2 id="tocS_replaceSynonymsInHighlight">replaceSynonymsInHighlight</h2>
<!-- backwards compatibility -->
<a id="schemareplacesynonymsinhighlight"></a>
<a id="schema_replaceSynonymsInHighlight"></a>
<a id="tocSreplacesynonymsinhighlight"></a>
<a id="tocsreplacesynonymsinhighlight"></a>

```json
false
```

Whether to replace a highlighted word with the matched synonym.
By default, the original words are highlighted even if a synonym matches.
For example, with `home` as a synonym for `house` and a search for `home`,
records matching either "home" or "house" are included in the search results,
and either "home" or "house" are highlighted
With `replaceSynonymsInHighlight` set to `true`, a search for `home` still matches the same records,
but all occurrences of "house" are replaced by "home" in the highlighted response.

<h2 id="tocS_minProximity">minProximity</h2>
<!-- backwards compatibility -->
<a id="schemaminproximity"></a>
<a id="schema_minProximity"></a>
<a id="tocSminproximity"></a>
<a id="tocsminproximity"></a>

```json
1
```

Minimum proximity score for two matching words.
This adjusts the [Proximity ranking criterion](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#proximity)
by equally scoring matches that are farther apart
For example, if `minProximity` is 2, neighboring matches and matches with one word between them would have the same score.

<h2 id="tocS_responseFields">responseFields</h2>
<!-- backwards compatibility -->
<a id="schemaresponsefields"></a>
<a id="schema_responseFields"></a>
<a id="tocSresponsefields"></a>
<a id="tocsresponsefields"></a>

```json
[
  "*"
]
```

Properties to include in the API response of search and browse requests.
By default, all response properties are included.
To reduce the response size, you can select which properties should be included
An empty list may lead to an empty API response (except properties you can't exclude)
You can't exclude these properties:
`message`, `warning`, `cursor`, `abTestVariantID`,
or any property added by setting `getRankingInfo` to true
Your search depends on the `hits` field. If you omit this field, searches won't return any results.
Your UI might also depend on other properties, for example, for pagination.
Before restricting the response size, check the impact on your search experience.

<h2 id="tocS_maxValuesPerFacet">maxValuesPerFacet</h2>
<!-- backwards compatibility -->
<a id="schemamaxvaluesperfacet"></a>
<a id="schema_maxValuesPerFacet"></a>
<a id="tocSmaxvaluesperfacet"></a>
<a id="tocsmaxvaluesperfacet"></a>

```json
100
```

Maximum number of facet values to return for each facet.

<h2 id="tocS_sortFacetValuesBy">sortFacetValuesBy</h2>
<!-- backwards compatibility -->
<a id="schemasortfacetvaluesby"></a>
<a id="schema_sortFacetValuesBy"></a>
<a id="tocSsortfacetvaluesby"></a>
<a id="tocssortfacetvaluesby"></a>

```json
"count"
```

Order in which to retrieve facet values.
- `count`.
  Facet values are retrieved by decreasing count.
  The count is the number of matching records containing this facet value.
- `alpha`.
  Retrieve facet values alphabetically.
This setting doesn't influence how facet values are displayed in your UI (see `renderingContent`).
For more information, see [facet value display](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js).

<h2 id="tocS_attributeCriteriaComputedByMinProximity">attributeCriteriaComputedByMinProximity</h2>
<!-- backwards compatibility -->
<a id="schemaattributecriteriacomputedbyminproximity"></a>
<a id="schema_attributeCriteriaComputedByMinProximity"></a>
<a id="tocSattributecriteriacomputedbyminproximity"></a>
<a id="tocsattributecriteriacomputedbyminproximity"></a>

```json
false
```

Whether the best matching attribute should be determined by minimum proximity.
This setting only affects ranking if the Attribute ranking criterion comes before Proximity in the `ranking` setting.
If true, the best matching attribute is selected based on the minimum proximity of multiple matches.
Otherwise, the best matching attribute is determined by the order in the `searchableAttributes` setting.

Prefer `attributeCriteriaComputedBy`, which expresses the same two behaviors and adds the `sum` strategy.
If you set both, `attributeCriteriaComputedBy` takes precedence.

<h2 id="tocS_attributeCriteriaComputedBy">attributeCriteriaComputedBy</h2>
<!-- backwards compatibility -->
<a id="schemaattributecriteriacomputedby"></a>
<a id="schema_attributeCriteriaComputedBy"></a>
<a id="tocSattributecriteriacomputedby"></a>
<a id="tocsattributecriteriacomputedby"></a>

```json
"best"
```

Strategy for computing the Attribute ranking criterion.
This mainly affects multi-word queries with matches in more than one attribute.

The `ranking` setting decides whether `best` takes effect.
When Attribute comes after Proximity, which is the default order, the engine always uses the `minProximity` strategy and ignores `best`.
To select `best`, move Attribute before Proximity in `ranking`.
The `sum` strategy applies in both orders.

- `minProximity`.
  Pick the best matching attribute from the attributes that form the best proximity score.
  On an ordered attribute, the match position breaks ties.
- `best`.
  Pick the best matching attribute from all attributes that match any query word.
  On an ordered attribute, the match position breaks ties.
- `sum`.
  Add up a score for every query word instead of picking one attribute.
  Each word's score comes from the attribute it matched, and from its position in that attribute when the attribute is ordered.
  A query word that matches nothing adds a large penalty.
  A record with a lower total ranks higher.
  A record therefore cannot rank high only because one word of a multi-word query matched a top attribute.
  Use `sum` with short, relevant attributes, and set long-text attributes to unordered.

<h2 id="tocS_order">order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
[
  "string"
]
```

Explicit order of facets or facet values.

This setting lets you always show specific facets or facet values at the top of the list.

<h2 id="tocS_facets">facets</h2>
<!-- backwards compatibility -->
<a id="schemafacets"></a>
<a id="schema_facets"></a>
<a id="tocSfacets"></a>
<a id="tocsfacets"></a>

```json
{
  "order": [
    "string"
  ]
}
```

Order of facet names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order|[order](#schemaorder)|false|none|Explicit order of facets or facet values.<br><br>This setting lets you always show specific facets or facet values at the top of the list.<br>|

<h2 id="tocS_sortRemainingBy">sortRemainingBy</h2>
<!-- backwards compatibility -->
<a id="schemasortremainingby"></a>
<a id="schema_sortRemainingBy"></a>
<a id="tocSsortremainingby"></a>
<a id="tocssortremainingby"></a>

```json
"count"
```

Order of facet values that aren't explicitly positioned with the `order` setting.

- `count`.
  Order remaining facet values by decreasing count.
  The count is the number of matching records containing this facet value.

- `alpha`.
  Sort facet values alphabetically.

- `hidden`.
  Don't show facet values that aren't explicitly positioned.

<h2 id="tocS_hide">hide</h2>
<!-- backwards compatibility -->
<a id="schemahide"></a>
<a id="schema_hide"></a>
<a id="tocShide"></a>
<a id="tocshide"></a>

```json
[
  "string"
]
```

Hide facet values.

<h2 id="tocS_value">value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
{
  "order": [
    "string"
  ],
  "sortRemainingBy": "count",
  "hide": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order|[order](#schemaorder)|false|none|Explicit order of facets or facet values.<br><br>This setting lets you always show specific facets or facet values at the top of the list.<br>|
|sortRemainingBy|[sortRemainingBy](#schemasortremainingby)|false|none|Order of facet values that aren't explicitly positioned with the `order` setting.<br><br>- `count`.<br>  Order remaining facet values by decreasing count.<br>  The count is the number of matching records containing this facet value.<br><br>- `alpha`.<br>  Sort facet values alphabetically.<br><br>- `hidden`.<br>  Don't show facet values that aren't explicitly positioned.<br>|
|hide|[hide](#schemahide)|false|none|Hide facet values.|

#### Enumerated Values

|Property|Value|
|---|---|
|sortRemainingBy|count|
|sortRemainingBy|alpha|
|sortRemainingBy|hidden|

<h2 id="tocS_values">values</h2>
<!-- backwards compatibility -->
<a id="schemavalues"></a>
<a id="schema_values"></a>
<a id="tocSvalues"></a>
<a id="tocsvalues"></a>

```json
{
  "property1": {
    "order": [
      "string"
    ],
    "sortRemainingBy": "count",
    "hide": [
      "string"
    ]
  },
  "property2": {
    "order": [
      "string"
    ],
    "sortRemainingBy": "count",
    "hide": [
      "string"
    ]
  }
}
```

Order of facet values. One object for each facet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[value](#schemavalue)|false|none|none|

<h2 id="tocS_facetOrdering">facetOrdering</h2>
<!-- backwards compatibility -->
<a id="schemafacetordering"></a>
<a id="schema_facetOrdering"></a>
<a id="tocSfacetordering"></a>
<a id="tocsfacetordering"></a>

```json
{
  "facets": {
    "order": [
      "string"
    ]
  },
  "values": {
    "property1": {
      "order": [
        "string"
      ],
      "sortRemainingBy": "count",
      "hide": [
        "string"
      ]
    },
    "property2": {
      "order": [
        "string"
      ],
      "sortRemainingBy": "count",
      "hide": [
        "string"
      ]
    }
  }
}
```

Order of facet names and facet values in your UI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|[facets](#schemafacets)|false|none|Order of facet names.|
|values|[values](#schemavalues)|false|none|Order of facet values. One object for each facet.|

<h2 id="tocS_redirectURL">redirectURL</h2>
<!-- backwards compatibility -->
<a id="schemaredirecturl"></a>
<a id="schema_redirectURL"></a>
<a id="tocSredirecturl"></a>
<a id="tocsredirecturl"></a>

```json
{
  "url": "string"
}
```

The redirect rule container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|

<h2 id="tocS_bannerImageUrl">bannerImageUrl</h2>
<!-- backwards compatibility -->
<a id="schemabannerimageurl"></a>
<a id="schema_bannerImageUrl"></a>
<a id="tocSbannerimageurl"></a>
<a id="tocsbannerimageurl"></a>

```json
{
  "url": "string"
}
```

URL for an image to show inside a banner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|

<h2 id="tocS_bannerImage">bannerImage</h2>
<!-- backwards compatibility -->
<a id="schemabannerimage"></a>
<a id="schema_bannerImage"></a>
<a id="tocSbannerimage"></a>
<a id="tocsbannerimage"></a>

```json
{
  "urls": [
    {
      "url": "string"
    }
  ],
  "title": "string"
}
```

Image to show inside a banner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urls|[[bannerImageUrl](#schemabannerimageurl)]|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_bannerLink">bannerLink</h2>
<!-- backwards compatibility -->
<a id="schemabannerlink"></a>
<a id="schema_bannerLink"></a>
<a id="tocSbannerlink"></a>
<a id="tocsbannerlink"></a>

```json
{
  "url": "string"
}
```

Link for a banner defined in the Merchandising Studio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|

<h2 id="tocS_banner">banner</h2>
<!-- backwards compatibility -->
<a id="schemabanner"></a>
<a id="schema_banner"></a>
<a id="tocSbanner"></a>
<a id="tocsbanner"></a>

```json
{
  "image": {
    "urls": [
      {
        "url": "string"
      }
    ],
    "title": "string"
  },
  "link": {
    "url": "string"
  }
}
```

Banner with image and link to redirect users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[bannerImage](#schemabannerimage)|false|none|Image to show inside a banner.|
|link|[bannerLink](#schemabannerlink)|false|none|Link for a banner defined in the Merchandising Studio.|

<h2 id="tocS_banners">banners</h2>
<!-- backwards compatibility -->
<a id="schemabanners"></a>
<a id="schema_banners"></a>
<a id="tocSbanners"></a>
<a id="tocsbanners"></a>

```json
[
  {
    "image": {
      "urls": [
        {
          "url": "string"
        }
      ],
      "title": "string"
    },
    "link": {
      "url": "string"
    }
  }
]
```

Banners defined in the Merchandising Studio for a given search.

<h2 id="tocS_resultCard">resultCard</h2>
<!-- backwards compatibility -->
<a id="schemaresultcard"></a>
<a id="schema_resultCard"></a>
<a id="tocSresultcard"></a>
<a id="tocsresultcard"></a>

```json
{
  "enabled": true
}
```

Agent Studio Result Card to display for a given search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether to show the Result Card for the current search.|

<h2 id="tocS_widgets">widgets</h2>
<!-- backwards compatibility -->
<a id="schemawidgets"></a>
<a id="schema_widgets"></a>
<a id="tocSwidgets"></a>
<a id="tocswidgets"></a>

```json
{
  "banners": [
    {
      "image": {
        "urls": [
          {
            "url": "string"
          }
        ],
        "title": "string"
      },
      "link": {
        "url": "string"
      }
    }
  ],
  "resultCard": {
    "enabled": true
  }
}
```

Widgets returned from any rules that are applied to the current search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banners|[banners](#schemabanners)|false|none|Banners defined in the Merchandising Studio for a given search.|
|resultCard|[resultCard](#schemaresultcard)|false|none|Agent Studio Result Card to display for a given search.|

<h2 id="tocS_renderingContent">renderingContent</h2>
<!-- backwards compatibility -->
<a id="schemarenderingcontent"></a>
<a id="schema_renderingContent"></a>
<a id="tocSrenderingcontent"></a>
<a id="tocsrenderingcontent"></a>

```json
{
  "facetOrdering": {
    "facets": {
      "order": [
        "string"
      ]
    },
    "values": {
      "property1": {
        "order": [
          "string"
        ],
        "sortRemainingBy": "count",
        "hide": [
          "string"
        ]
      },
      "property2": {
        "order": [
          "string"
        ],
        "sortRemainingBy": "count",
        "hide": [
          "string"
        ]
      }
    }
  },
  "redirect": {
    "url": "string"
  },
  "widgets": {
    "banners": [
      {
        "image": {
          "urls": [
            {
              "url": "string"
            }
          ],
          "title": "string"
        },
        "link": {
          "url": "string"
        }
      }
    ],
    "resultCard": {
      "enabled": true
    }
  }
}
```

Extra data that can be used in the search UI.

You can use this to control aspects of your search UI, such as the order of facet names and values
without changing your frontend code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facetOrdering|[facetOrdering](#schemafacetordering)|false|none|Order of facet names and facet values in your UI.|
|redirect|[redirectURL](#schemaredirecturl)|false|none|The redirect rule container.|
|widgets|[widgets](#schemawidgets)|false|none|Widgets returned from any rules that are applied to the current search.|

<h2 id="tocS_enableReRanking">enableReRanking</h2>
<!-- backwards compatibility -->
<a id="schemaenablereranking"></a>
<a id="schema_enableReRanking"></a>
<a id="tocSenablereranking"></a>
<a id="tocsenablereranking"></a>

```json
true
```

Whether this search will use [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking).
This setting only has an effect if you activated Dynamic Re-Ranking for this index in the Algolia dashboard.

<h2 id="tocS_reRankingApplyFilter">reRankingApplyFilter</h2>
<!-- backwards compatibility -->
<a id="schemarerankingapplyfilter"></a>
<a id="schema_reRankingApplyFilter"></a>
<a id="tocSrerankingapplyfilter"></a>
<a id="tocsrerankingapplyfilter"></a>

```json
[
  [
    {}
  ]
]
```

Restrict [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking) to records that match these filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[reRankingApplyFilter](#schemarerankingapplyfilter)]|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_indexSettingsAsSearchParams">indexSettingsAsSearchParams</h2>
<!-- backwards compatibility -->
<a id="schemaindexsettingsassearchparams"></a>
<a id="schema_indexSettingsAsSearchParams"></a>
<a id="tocSindexsettingsassearchparams"></a>
<a id="tocsindexsettingsassearchparams"></a>

```json
{
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributesToRetrieve|[attributesToRetrieve](#schemaattributestoretrieve)|false|none|Attributes to include in the API response.<br>To reduce the size of your response, you can retrieve only some of the attributes.<br>Attribute names are case-sensitive<br>- `*` retrieves all attributes, except attributes included in the `customRanking` and `unretrievableAttributes` settings.<br>- To retrieve all attributes except a specific one, prefix the attribute with a dash and combine it with the `*`: `["*", "-ATTRIBUTE"]`.<br>- The `objectID` attribute is always included.<br>|
|ranking|[string]|false|none|Determines the order in which Algolia returns your results.<br><br>By default, each entry corresponds to a [ranking criteria](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria).<br>The tie-breaking algorithm sequentially applies each criterion in the order they're specified.<br>If you configure a replica index for [sorting by an attribute](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-by-attribute),<br>you put the sorting attribute at the top of the list.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>Before you modify the default setting,<br>test your changes in the dashboard,<br>and by [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing).<br>|
|relevancyStrictness|[relevancyStrictness](#schemarelevancystrictness)|false|none|Relevancy threshold below which less relevant results aren't included in the results.<br>You can only set `relevancyStrictness` on [virtual replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/#standard-and-virtual-replicas).<br>Use this setting to strike a balance between the relevance and number of returned results.<br>|
|attributesToHighlight|[attributesToHighlight](#schemaattributestohighlight)|false|none|Attributes to highlight.<br>By default, all searchable attributes are highlighted.<br>Use `*` to highlight all attributes or use an empty array `[]` to turn off highlighting.<br>Attribute names are case-sensitive<br>With highlighting, strings that match the search query are surrounded by HTML tags defined by `highlightPreTag` and `highlightPostTag`.<br>You can use this to visually highlight matching parts of a search query in your UI<br>For more information, see [Highlighting and snippeting](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/highlighting-snippeting/js).<br>|
|attributesToSnippet|[attributesToSnippet](#schemaattributestosnippet)|false|none|Attributes for which to enable snippets.<br>Attribute names are case-sensitive<br>Snippets provide additional context to matched words.<br>If you enable snippets, they include 10 words, including the matched word.<br>The matched word will also be wrapped by HTML tags for highlighting.<br>You can adjust the number of words with the following notation: `ATTRIBUTE:NUMBER`,<br>where `NUMBER` is the number of words to be extracted.<br>|
|highlightPreTag|[highlightPreTag](#schemahighlightpretag)|false|none|HTML tag to insert before the highlighted parts in all highlighted results and snippets.|
|highlightPostTag|[highlightPostTag](#schemahighlightposttag)|false|none|HTML tag to insert after the highlighted parts in all highlighted results and snippets.|
|snippetEllipsisText|[snippetEllipsisText](#schemasnippetellipsistext)|false|none|String used as an ellipsis indicator when a snippet is truncated.|
|restrictHighlightAndSnippetArrays|[restrictHighlightAndSnippetArrays](#schemarestricthighlightandsnippetarrays)|false|none|Whether to restrict highlighting and snippeting to items that at least partially matched the search query.<br>By default, all items are highlighted and snippeted.<br>|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|minWordSizefor1Typo|[minWordSizefor1Typo](#schemaminwordsizefor1typo)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [one typo](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|minWordSizefor2Typos|[minWordSizefor2Typos](#schemaminwordsizefor2typos)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [two typos](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|typoTolerance|[typoTolerance](#schematypotolerance)|false|none|Whether [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance) is enabled and how it is applied.<br><br>If typo tolerance is true, `min`, or `strict`, [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) are also active.<br>|
|allowTyposOnNumericTokens|[allowTyposOnNumericTokens](#schemaallowtyposonnumerictokens)|false|none|Whether to allow typos on numbers in the search query.<br>Turn off this setting to reduce the number of irrelevant matches<br>when searching in large sets of similar numbers.<br>|
|disableTypoToleranceOnAttributes|[disableTypoToleranceOnAttributes](#schemadisabletypotoleranceonattributes)|false|none|Attributes for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance).<br>Attribute names are case-sensitive<br>Returning only exact matches can help when<br>- [Searching in hyphenated attributes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes).<br>- Reducing the number of matches when you have too many.<br>  This can happen with attributes that are long blocks of text, such as product descriptions.<br>Consider alternatives such as `disableTypoToleranceOnWords` or adding synonyms if your attributes have intentional unusual spellings that might look like typos.<br>|
|ignorePlurals|[ignorePlurals](#schemaignoreplurals)|false|none|Treat singular, plurals, and other forms of declensions as equivalent.<br>Only use this feature for the languages used in your index.<br>|
|removeStopWords|[removeStopWords](#schemaremovestopwords)|false|none|Removes stop words from the search query.<br><br>Stop words are common words like articles, conjunctions, prepositions, or pronouns that have little or no meaning on their own.<br>In English, "the", "a", or "and" are stop words.<br><br>Only use this feature for the languages used in your index.<br>|
|queryLanguages|[queryLanguages](#schemaquerylanguages)|false|none|Languages for language-specific query processing steps such as plurals, stop-word removal, and word-detection dictionaries.<br>This setting sets a default list of languages used by the `removeStopWords` and `ignorePlurals` settings.<br>This setting also sets a dictionary for word detection in the logogram-based [CJK](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/#normalization-for-logogram-based-languages-cjk) languages.<br>To support this, place the CJK language **first**.<br>**Always specify a query language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|decompoundQuery|[decompoundQuery](#schemadecompoundquery)|false|none|Whether to split compound words in the query into their building blocks.<br>For more information, see [Word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#split-compound-words).<br>Word segmentation is supported for these languages: German, Dutch, Finnish, Swedish, and Norwegian.<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|enableRules|[enableRules](#schemaenablerules)|false|none|Whether to enable rules.|
|enablePersonalization|[enablePersonalization](#schemaenablepersonalization)|false|none|Whether to enable Personalization.|
|queryType|[queryType](#schemaquerytype)|false|none|Determines if and how query words are interpreted as prefixes.<br><br>By default, only the last query word is treated as a prefix (`prefixLast`).<br>To turn off prefix search, use `prefixNone`.<br>Avoid `prefixAll`, which treats all query words as prefixes.<br>This might lead to counterintuitive results and makes your search slower.<br><br>For more information, see [Prefix searching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/prefix-searching).<br>|
|removeWordsIfNoResults|[removeWordsIfNoResults](#schemaremovewordsifnoresults)|false|none|Strategy for removing words from the query when it doesn't return any results.<br>This helps to avoid returning empty search results.<br><br>- `none`.<br>  No words are removed when a query doesn't return results.<br><br>- `lastWords`.<br>  Treat the last (then second to last, then third to last) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `firstWords`.<br>  Treat the first (then second, then third) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `allOptional`.<br>  Treat all words as optional.<br><br>For more information, see [Remove words to improve results](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/in-depth/why-use-remove-words-if-no-results).<br>|
|mode|[mode](#schemamode)|false|none|Search mode the index will use to query for results.<br><br>This setting only applies to indices, for which Algolia enabled NeuralSearch for you.<br>|
|semanticSearch|[semanticSearch](#schemasemanticsearch)|false|none|Settings for the semantic search part of NeuralSearch.<br>Only used when `mode` is `neuralSearch`.<br>|
|advancedSyntax|[advancedSyntax](#schemaadvancedsyntax)|false|none|Whether to support phrase matching and excluding words from search queries.<br>Use the `advancedSyntaxFeatures` parameter to control which feature is supported.<br>|
|optionalWords|[optionalWords](#schemaoptionalwords)|false|none|Words that should be considered optional when found in the query.<br><br>By default, records must match all words in the search query to be included in the search results.<br>Adding optional words can increase the number of search results by running an additional search query that doesn't include the optional words.<br>For example, if the search query is "action video" and "video" is optional,<br>the search engine runs two queries: one for "action video" and one for "action".<br>Records that match all words are ranked higher.<br><br>For a search query with 4 or more words **and** all its words are optional,<br>the number of matched words required for a record to be included in the search results increases for every 1,000 records:<br><br>- If `optionalWords` has fewer than 10 words, the required number of matched words increases by 1:<br>  results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 2 matched words.<br>- If `optionalWords` has 10 or more words, the required number of matched words increases by the number of optional words divided by 5 (rounded down).<br>  Example: with 18 optional words, results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 4 matched words.<br><br>For more information, see [Optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).<br>|
|disableExactOnAttributes|[disableExactOnAttributes](#schemadisableexactonattributes)|false|none|Searchable attributes for which you want to [turn off the Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes).<br>Attribute names are case-sensitive<br>This can be useful for attributes with long values, where the likelihood of an exact match is high,<br>such as product descriptions.<br>Turning off the Exact ranking criterion for these attributes favors exact matching on other attributes.<br>This reduces the impact of individual attributes with a lot of content on ranking.<br>|
|exactOnSingleWordQuery|[exactOnSingleWordQuery](#schemaexactonsinglewordquery)|false|none|Determines how the [Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes) is computed when the search query has only one word.<br><br>- `attribute`.<br>  The Exact ranking criterion is 1 if the query word and attribute value are the same.<br>  For example, a search for "road" will match the value "road", but not "road trip".<br><br>- `none`.<br>  The Exact ranking criterion is ignored on single-word searches.<br><br>- `word`.<br>  The Exact ranking criterion is 1 if the query word is found in the attribute value.<br>  The query word must have at least 3 characters and must not be a stop word.<br>  Only exact matches will be highlighted,<br>  partial and prefix matches won't.<br>|
|alternativesAsExact|[IndexSettings_alternativesAsExact](#schemaindexsettings_alternativesasexact)|false|none|Determine which plurals and synonyms should be considered an exact matches.<br>By default, Algolia treats singular and plural forms of a word, and single-word synonyms, as [exact](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#exact) matches when searching.<br>For example:<br>- "swimsuit" and "swimsuits" are treated the same.<br>- "swimsuit" and "swimwear" are treated the same (if they are [synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/#regular-synonyms)).<br>- `ignorePlurals`.<br>  Plurals and similar declensions added by the `ignorePlurals` setting are considered exact matches.<br>- `singleWordSynonym`.<br>  Single-word synonyms, such as "NY" = "NYC", are considered exact matches.<br>- `multiWordsSynonym`.<br>  Multi-word synonyms, such as "NY" = "New York", are considered exact matches.<br>|
|advancedSyntaxFeatures|[IndexSettings_advancedSyntaxFeatures](#schemaindexsettings_advancedsyntaxfeatures)|false|none|Advanced search syntax features you want to support.<br>- `exactPhrase`.<br>  Phrases in quotes must match exactly.<br>  For example, `sparkly blue "iPhone case"` only returns records with the exact string "iPhone case".<br>- `excludeWords`.<br>  Query words prefixed with a `-` must not occur in a record.<br>  For example, `search -engine` matches records that contain "search" but not "engine".<br>This setting only has an effect if `advancedSyntax` is true.<br>|
|distinct|[distinct](#schemadistinct)|false|none|Determines how many records of a group are included in the search results.<br><br>Records with the same value for the `attributeForDistinct` attribute are considered a group.<br>The `distinct` setting controls how many members of the group are returned.<br>This is useful for [deduplication and grouping](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#deduplicate-results-with-distinct).<br><br>The `distinct` setting is ignored if `attributeForDistinct` is not set.<br>|
|replaceSynonymsInHighlight|[replaceSynonymsInHighlight](#schemareplacesynonymsinhighlight)|false|none|Whether to replace a highlighted word with the matched synonym.<br>By default, the original words are highlighted even if a synonym matches.<br>For example, with `home` as a synonym for `house` and a search for `home`,<br>records matching either "home" or "house" are included in the search results,<br>and either "home" or "house" are highlighted<br>With `replaceSynonymsInHighlight` set to `true`, a search for `home` still matches the same records,<br>but all occurrences of "house" are replaced by "home" in the highlighted response.<br>|
|minProximity|[minProximity](#schemaminproximity)|false|none|Minimum proximity score for two matching words.<br>This adjusts the [Proximity ranking criterion](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#proximity)<br>by equally scoring matches that are farther apart<br>For example, if `minProximity` is 2, neighboring matches and matches with one word between them would have the same score.<br>|
|responseFields|[responseFields](#schemaresponsefields)|false|none|Properties to include in the API response of search and browse requests.<br>By default, all response properties are included.<br>To reduce the response size, you can select which properties should be included<br>An empty list may lead to an empty API response (except properties you can't exclude)<br>You can't exclude these properties:<br>`message`, `warning`, `cursor`, `abTestVariantID`,<br>or any property added by setting `getRankingInfo` to true<br>Your search depends on the `hits` field. If you omit this field, searches won't return any results.<br>Your UI might also depend on other properties, for example, for pagination.<br>Before restricting the response size, check the impact on your search experience.<br>|
|maxValuesPerFacet|[maxValuesPerFacet](#schemamaxvaluesperfacet)|false|none|Maximum number of facet values to return for each facet.|
|sortFacetValuesBy|[sortFacetValuesBy](#schemasortfacetvaluesby)|false|none|Order in which to retrieve facet values.<br>- `count`.<br>  Facet values are retrieved by decreasing count.<br>  The count is the number of matching records containing this facet value.<br>- `alpha`.<br>  Retrieve facet values alphabetically.<br>This setting doesn't influence how facet values are displayed in your UI (see `renderingContent`).<br>For more information, see [facet value display](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js).<br>|
|attributeCriteriaComputedByMinProximity|[attributeCriteriaComputedByMinProximity](#schemaattributecriteriacomputedbyminproximity)|false|none|Whether the best matching attribute should be determined by minimum proximity.<br>This setting only affects ranking if the Attribute ranking criterion comes before Proximity in the `ranking` setting.<br>If true, the best matching attribute is selected based on the minimum proximity of multiple matches.<br>Otherwise, the best matching attribute is determined by the order in the `searchableAttributes` setting.<br><br>Prefer `attributeCriteriaComputedBy`, which expresses the same two behaviors and adds the `sum` strategy.<br>If you set both, `attributeCriteriaComputedBy` takes precedence.<br>|
|attributeCriteriaComputedBy|[attributeCriteriaComputedBy](#schemaattributecriteriacomputedby)|false|none|Strategy for computing the Attribute ranking criterion.<br>This mainly affects multi-word queries with matches in more than one attribute.<br><br>The `ranking` setting decides whether `best` takes effect.<br>When Attribute comes after Proximity, which is the default order, the engine always uses the `minProximity` strategy and ignores `best`.<br>To select `best`, move Attribute before Proximity in `ranking`.<br>The `sum` strategy applies in both orders.<br><br>- `minProximity`.<br>  Pick the best matching attribute from the attributes that form the best proximity score.<br>  On an ordered attribute, the match position breaks ties.<br>- `best`.<br>  Pick the best matching attribute from all attributes that match any query word.<br>  On an ordered attribute, the match position breaks ties.<br>- `sum`.<br>  Add up a score for every query word instead of picking one attribute.<br>  Each word's score comes from the attribute it matched, and from its position in that attribute when the attribute is ordered.<br>  A query word that matches nothing adds a large penalty.<br>  A record with a lower total ranks higher.<br>  A record therefore cannot rank high only because one word of a multi-word query matched a top attribute.<br>  Use `sum` with short, relevant attributes, and set long-text attributes to unordered.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|enableReRanking|[enableReRanking](#schemaenablereranking)|false|none|Whether this search will use [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking).<br>This setting only has an effect if you activated Dynamic Re-Ranking for this index in the Algolia dashboard.<br>|
|reRankingApplyFilter|[reRankingApplyFilter](#schemarerankingapplyfilter) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|queryLanguages|af|
|queryLanguages|ar|
|queryLanguages|az|
|queryLanguages|bg|
|queryLanguages|bn|
|queryLanguages|ca|
|queryLanguages|cs|
|queryLanguages|cy|
|queryLanguages|da|
|queryLanguages|de|
|queryLanguages|el|
|queryLanguages|en|
|queryLanguages|eo|
|queryLanguages|es|
|queryLanguages|et|
|queryLanguages|eu|
|queryLanguages|fa|
|queryLanguages|fi|
|queryLanguages|fo|
|queryLanguages|fr|
|queryLanguages|ga|
|queryLanguages|gl|
|queryLanguages|he|
|queryLanguages|hi|
|queryLanguages|hu|
|queryLanguages|hy|
|queryLanguages|id|
|queryLanguages|is|
|queryLanguages|it|
|queryLanguages|ja|
|queryLanguages|ka|
|queryLanguages|kk|
|queryLanguages|ko|
|queryLanguages|ku|
|queryLanguages|ky|
|queryLanguages|lt|
|queryLanguages|lv|
|queryLanguages|mi|
|queryLanguages|mn|
|queryLanguages|mr|
|queryLanguages|ms|
|queryLanguages|mt|
|queryLanguages|nb|
|queryLanguages|nl|
|queryLanguages|no|
|queryLanguages|ns|
|queryLanguages|pl|
|queryLanguages|ps|
|queryLanguages|pt|
|queryLanguages|pt-br|
|queryLanguages|qu|
|queryLanguages|ro|
|queryLanguages|ru|
|queryLanguages|sk|
|queryLanguages|sq|
|queryLanguages|sv|
|queryLanguages|sw|
|queryLanguages|ta|
|queryLanguages|te|
|queryLanguages|th|
|queryLanguages|tl|
|queryLanguages|tn|
|queryLanguages|tr|
|queryLanguages|tt|
|queryLanguages|uk|
|queryLanguages|ur|
|queryLanguages|uz|
|queryLanguages|zh|
|queryType|prefixLast|
|queryType|prefixAll|
|queryType|prefixNone|
|removeWordsIfNoResults|none|
|removeWordsIfNoResults|lastWords|
|removeWordsIfNoResults|firstWords|
|removeWordsIfNoResults|allOptional|
|mode|neuralSearch|
|mode|keywordSearch|
|exactOnSingleWordQuery|attribute|
|exactOnSingleWordQuery|none|
|exactOnSingleWordQuery|word|
|alternativesAsExact|ignorePlurals|
|alternativesAsExact|singleWordSynonym|
|alternativesAsExact|multiWordsSynonym|
|alternativesAsExact|ignoreConjugations|
|advancedSyntaxFeatures|exactPhrase|
|advancedSyntaxFeatures|excludeWords|
|attributeCriteriaComputedBy|minProximity|
|attributeCriteriaComputedBy|best|
|attributeCriteriaComputedBy|sum|

<h2 id="tocS_searchParamsObject">searchParamsObject</h2>
<!-- backwards compatibility -->
<a id="schemasearchparamsobject"></a>
<a id="schema_searchParamsObject"></a>
<a id="tocSsearchparamsobject"></a>
<a id="tocssearchparamsobject"></a>

```json
{
  "query": "",
  "similarQuery": "comedy drama crime Macy Buscemi",
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "optionalFilters": [
    "category:Book",
    "author:John Doe"
  ],
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "sumOrFiltersScores": false,
  "restrictSearchableAttributes": [
    "title",
    "author"
  ],
  "facets": [
    "*"
  ],
  "facetingAfterDistinct": false,
  "page": 0,
  "offset": 0,
  "length": 0,
  "aroundLatLng": "40.71,-74.01",
  "aroundLatLngViaIP": false,
  "aroundRadius": 1,
  "aroundPrecision": 10,
  "minimumAroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ],
  "naturalLanguages": [],
  "ruleContexts": [
    "mobile"
  ],
  "personalizationImpact": 100,
  "userToken": "test-user-123",
  "getRankingInfo": false,
  "synonyms": true,
  "clickAnalytics": false,
  "analytics": true,
  "analyticsTags": [],
  "percentileComputation": true,
  "enableABTest": true,
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ]
}
```

Each parameter value, including the `query` must not be larger than 512 bytes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query](#schemaquery)|false|none|Search query.|
|similarQuery|[similarQuery](#schemasimilarquery)|false|none|Keywords to be used instead of the search query to conduct a more broader search.<br>Using the `similarQuery` parameter changes other settings<br>- `queryType` is set to `prefixNone`.<br>- `removeStopWords` is set to true.<br>- `words` is set as the first ranking criterion.<br>- All remaining words are treated as `optionalWords`.<br>Since the `similarQuery` is supposed to do a broad search, they usually return many results.<br>Combine it with `filters` to narrow down the list of results.<br>|
|filters|[filters](#schemafilters)|false|none|Filter expression to only include items that match the filter criteria in the response.<br><br>You can use these filter expressions:<br><br>- **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>- **Ranges.** `<facet>:<lower> TO <upper>`, where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive).<br>- **Facet filters.** `<facet>:<value>`, where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value.<br>- **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive).<br>- **Boolean filters.** `<facet>: true \| false`.<br><br>You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:<br><br>- You can only combine filters of the same type with `OR`.<br>  **Not supported:** `facet:value OR num > 3`.<br>- You can't use `NOT` with combinations of filters.<br>  **Not supported:** `NOT(facet:value OR facet:value)`<br>- You can't combine conjunctions (`AND`) with `OR`.<br>  **Not supported:** `facet:value OR (facet:value AND facet:value)`<br><br>Use quotes if the facet attribute name or facet value contains spaces, keywords (`OR`, `AND`, `NOT`), or quotes.<br>If a facet attribute is an array, the filter matches if it matches at least one element of the array.<br><br>For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering).<br>|
|facetFilters|[facetFilters](#schemafacetfilters)|false|none|Filter the search by facet values, so that only records with the same facet values are retrieved.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>- `[filter1, filter2]` is interpreted as `filter1 AND filter2`.<br>- `[[filter1, filter2], filter3]` is interpreted as `filter1 OR filter2 AND filter3`.<br>- `facet:-value` is interpreted as `NOT facet:value`.<br><br>While it's best to avoid attributes that start with a `-`, you can still filter them by escaping with a backslash:<br>`facet:\-value`.<br>|
|optionalFilters|[optionalFilters](#schemaoptionalfilters)|false|none|Filters to promote or demote records in the search results.<br><br>Optional filters work like facet filters, but they don't exclude records from the search results.<br>Records that match the optional filter rank before records that don't match.<br>If you're using a negative filter `facet:-value`, matching records rank after records that don't match.<br><br>- Optional filters are applied _after_ sort-by attributes.<br>- Optional filters are applied _before_ custom ranking attributes (in the default [ranking](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria)).<br>- Optional filters don't work with numeric attributes.<br>- On virtual replicas, optional filters are applied _after_ the replica's [relevant sort](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|numericFilters|[numericFilters](#schemanumericfilters)|false|none|Filter by numeric facets.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>You can use numeric comparison operators: `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>Comparisons are precise up to 3 decimals.<br>You can also provide ranges: `facet:<lower> TO <upper>`. The range includes the lower and upper boundaries.<br>The same combination rules apply as for `facetFilters`.<br>|
|tagFilters|[tagFilters](#schematagfilters)|false|none|Filter the search by values of the special `_tags` attribute.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>Different from regular facets, `_tags` can only be used for filtering (including or excluding records).<br>You won't get a facet count.<br>The same combination and escaping rules apply as for `facetFilters`.<br>|
|sumOrFiltersScores|[sumOrFiltersScores](#schemasumorfiltersscores)|false|none|Whether to sum all filter scores.<br>If true, all filter scores are summed.<br>Otherwise, the maximum filter score is kept.<br>For more information, see [filter scores](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/filter-scoring/#accumulate-scores-with-sumorfiltersscores).<br>|
|restrictSearchableAttributes|[restrictSearchableAttributes](#schemarestrictsearchableattributes)|false|none|Restricts a search to a subset of your searchable attributes.<br>Attribute names are case-sensitive.<br>|
|facets|[string]|false|none|Facets for which to retrieve facet values that match the search criteria and the number of matching facet values.<br>To retrieve all facets, use the wildcard character `*`.<br>For more information, see [facets](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#contextual-facet-values-and-counts).<br>|
|facetingAfterDistinct|[facetingAfterDistinct](#schemafacetingafterdistinct)|false|none|Whether faceting should be applied after deduplication with `distinct`.<br>This leads to accurate facet counts when using faceting in combination with `distinct`.<br>It's usually better to use `afterDistinct` modifiers in the `attributesForFaceting` setting,<br>as `facetingAfterDistinct` only computes correct facet counts if all records have the same facet values for the `attributeForDistinct`.<br>|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|offset|integer|false|none|Position of the first hit to retrieve.|
|length|[length](#schemalength)|false|none|Number of hits to retrieve (used in combination with `offset`).|
|aroundLatLng|[aroundLatLng](#schemaaroundlatlng)|false|none|Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.<br><br>Only records included within a circle around this central location are included in the results.<br>The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings.<br>This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.<br>|
|aroundLatLngViaIP|[aroundLatLngViaIP](#schemaaroundlatlngviaip)|false|none|Whether to obtain the coordinates from the request's IP address.|
|aroundRadius|[aroundRadius](#schemaaroundradius)|false|none|Maximum radius for a search around a central location.<br><br>This parameter works in combination with the `aroundLatLng` and `aroundLatLngViaIP` parameters.<br>By default, the search radius is determined automatically from the density of hits around the central location.<br>The search radius is small if there are many hits close to the central coordinates.<br>|
|aroundPrecision|[aroundPrecision](#schemaaroundprecision)|false|none|Precision of a coordinate-based search in meters to group results with similar distances.<br><br>The Geo ranking criterion considers all matches within the same range of distances to be equal.<br>|
|minimumAroundRadius|[minimumAroundRadius](#schemaminimumaroundradius)|false|none|Minimum radius (in meters) for a search around a location when `aroundRadius` isn't set.|
|insideBoundingBox|[insideBoundingBox](#schemainsideboundingbox)|false|none|none|
|insidePolygon|[insidePolygon](#schemainsidepolygon)|false|none|Coordinates of a polygon in which to search.<br><br>Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude.<br>Provide multiple polygons as nested arrays.<br>For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).<br>This parameter is ignored if you also specify `insideBoundingBox`.<br>|
|naturalLanguages|[naturalLanguages](#schemanaturallanguages)|false|none|ISO language codes that adjust settings that are useful for processing natural language queries (as opposed to keyword searches).<br>- Sets `removeStopWords` and `ignorePlurals` to the list of provided languages.<br>- Sets `removeWordsIfNoResults` to `allOptional`.<br>- Adds a `natural_language` attribute to `ruleContexts` and `analyticsTags`.<br>|
|ruleContexts|[ruleContexts](#schemarulecontexts)|false|none|Assigns a rule context to the search query.<br>[Rule contexts](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/how-to/customize-search-results-by-platform/#assign-context) are strings that you can use to trigger matching rules.<br>|
|personalizationImpact|[personalizationImpact](#schemapersonalizationimpact)|false|none|Impact that Personalization should have on this search.<br>The higher this value is, the more Personalization determines the ranking compared to other factors.<br>For more information, see [Understanding Personalization impact](https://www.algolia.com/doc/guides/personalization/personalizing-results/in-depth/configuring-personalization/#understanding-personalization-impact).<br>|
|userToken|[userToken](#schemausertoken)|false|none|Unique pseudonymous or anonymous user identifier.<br><br>This helps with analytics and click and conversion events.<br>For more information, see [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken).<br>|
|getRankingInfo|[getRankingInfo](#schemagetrankinginfo)|false|none|Whether the search response should include detailed ranking information.|
|synonyms|[synonyms](#schemasynonyms)|false|none|Whether to take into account an index's synonyms for this search.|
|clickAnalytics|[clickAnalytics](#schemaclickanalytics)|false|none|Whether to include a `queryID` attribute in the response.<br>The query ID is a unique identifier for a search query and is required for tracking [click and conversion events](https://www.algolia.com/doc/guides/sending-events/getting-started).<br>|
|analytics|[analytics](#schemaanalytics)|false|none|Whether this search will be included in Analytics.|
|analyticsTags|[analyticsTags](#schemaanalyticstags)|false|none|Tags to apply to the query for [segmenting analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments).|
|percentileComputation|[percentileComputation](#schemapercentilecomputation)|false|none|Whether to include this search when calculating processing-time percentiles.|
|enableABTest|[enableABTest](#schemaenableabtest)|false|none|Whether to enable A/B testing for this search.|
|attributesToRetrieve|[attributesToRetrieve](#schemaattributestoretrieve)|false|none|Attributes to include in the API response.<br>To reduce the size of your response, you can retrieve only some of the attributes.<br>Attribute names are case-sensitive<br>- `*` retrieves all attributes, except attributes included in the `customRanking` and `unretrievableAttributes` settings.<br>- To retrieve all attributes except a specific one, prefix the attribute with a dash and combine it with the `*`: `["*", "-ATTRIBUTE"]`.<br>- The `objectID` attribute is always included.<br>|
|ranking|[string]|false|none|Determines the order in which Algolia returns your results.<br><br>By default, each entry corresponds to a [ranking criteria](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria).<br>The tie-breaking algorithm sequentially applies each criterion in the order they're specified.<br>If you configure a replica index for [sorting by an attribute](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-by-attribute),<br>you put the sorting attribute at the top of the list.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>Before you modify the default setting,<br>test your changes in the dashboard,<br>and by [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing).<br>|
|relevancyStrictness|[relevancyStrictness](#schemarelevancystrictness)|false|none|Relevancy threshold below which less relevant results aren't included in the results.<br>You can only set `relevancyStrictness` on [virtual replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/#standard-and-virtual-replicas).<br>Use this setting to strike a balance between the relevance and number of returned results.<br>|
|attributesToHighlight|[attributesToHighlight](#schemaattributestohighlight)|false|none|Attributes to highlight.<br>By default, all searchable attributes are highlighted.<br>Use `*` to highlight all attributes or use an empty array `[]` to turn off highlighting.<br>Attribute names are case-sensitive<br>With highlighting, strings that match the search query are surrounded by HTML tags defined by `highlightPreTag` and `highlightPostTag`.<br>You can use this to visually highlight matching parts of a search query in your UI<br>For more information, see [Highlighting and snippeting](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/highlighting-snippeting/js).<br>|
|attributesToSnippet|[attributesToSnippet](#schemaattributestosnippet)|false|none|Attributes for which to enable snippets.<br>Attribute names are case-sensitive<br>Snippets provide additional context to matched words.<br>If you enable snippets, they include 10 words, including the matched word.<br>The matched word will also be wrapped by HTML tags for highlighting.<br>You can adjust the number of words with the following notation: `ATTRIBUTE:NUMBER`,<br>where `NUMBER` is the number of words to be extracted.<br>|
|highlightPreTag|[highlightPreTag](#schemahighlightpretag)|false|none|HTML tag to insert before the highlighted parts in all highlighted results and snippets.|
|highlightPostTag|[highlightPostTag](#schemahighlightposttag)|false|none|HTML tag to insert after the highlighted parts in all highlighted results and snippets.|
|snippetEllipsisText|[snippetEllipsisText](#schemasnippetellipsistext)|false|none|String used as an ellipsis indicator when a snippet is truncated.|
|restrictHighlightAndSnippetArrays|[restrictHighlightAndSnippetArrays](#schemarestricthighlightandsnippetarrays)|false|none|Whether to restrict highlighting and snippeting to items that at least partially matched the search query.<br>By default, all items are highlighted and snippeted.<br>|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|minWordSizefor1Typo|[minWordSizefor1Typo](#schemaminwordsizefor1typo)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [one typo](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|minWordSizefor2Typos|[minWordSizefor2Typos](#schemaminwordsizefor2typos)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [two typos](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|typoTolerance|[typoTolerance](#schematypotolerance)|false|none|Whether [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance) is enabled and how it is applied.<br><br>If typo tolerance is true, `min`, or `strict`, [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) are also active.<br>|
|allowTyposOnNumericTokens|[allowTyposOnNumericTokens](#schemaallowtyposonnumerictokens)|false|none|Whether to allow typos on numbers in the search query.<br>Turn off this setting to reduce the number of irrelevant matches<br>when searching in large sets of similar numbers.<br>|
|disableTypoToleranceOnAttributes|[disableTypoToleranceOnAttributes](#schemadisabletypotoleranceonattributes)|false|none|Attributes for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance).<br>Attribute names are case-sensitive<br>Returning only exact matches can help when<br>- [Searching in hyphenated attributes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes).<br>- Reducing the number of matches when you have too many.<br>  This can happen with attributes that are long blocks of text, such as product descriptions.<br>Consider alternatives such as `disableTypoToleranceOnWords` or adding synonyms if your attributes have intentional unusual spellings that might look like typos.<br>|
|ignorePlurals|[ignorePlurals](#schemaignoreplurals)|false|none|Treat singular, plurals, and other forms of declensions as equivalent.<br>Only use this feature for the languages used in your index.<br>|
|removeStopWords|[removeStopWords](#schemaremovestopwords)|false|none|Removes stop words from the search query.<br><br>Stop words are common words like articles, conjunctions, prepositions, or pronouns that have little or no meaning on their own.<br>In English, "the", "a", or "and" are stop words.<br><br>Only use this feature for the languages used in your index.<br>|
|queryLanguages|[queryLanguages](#schemaquerylanguages)|false|none|Languages for language-specific query processing steps such as plurals, stop-word removal, and word-detection dictionaries.<br>This setting sets a default list of languages used by the `removeStopWords` and `ignorePlurals` settings.<br>This setting also sets a dictionary for word detection in the logogram-based [CJK](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/#normalization-for-logogram-based-languages-cjk) languages.<br>To support this, place the CJK language **first**.<br>**Always specify a query language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|decompoundQuery|[decompoundQuery](#schemadecompoundquery)|false|none|Whether to split compound words in the query into their building blocks.<br>For more information, see [Word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#split-compound-words).<br>Word segmentation is supported for these languages: German, Dutch, Finnish, Swedish, and Norwegian.<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|enableRules|[enableRules](#schemaenablerules)|false|none|Whether to enable rules.|
|enablePersonalization|[enablePersonalization](#schemaenablepersonalization)|false|none|Whether to enable Personalization.|
|queryType|[queryType](#schemaquerytype)|false|none|Determines if and how query words are interpreted as prefixes.<br><br>By default, only the last query word is treated as a prefix (`prefixLast`).<br>To turn off prefix search, use `prefixNone`.<br>Avoid `prefixAll`, which treats all query words as prefixes.<br>This might lead to counterintuitive results and makes your search slower.<br><br>For more information, see [Prefix searching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/prefix-searching).<br>|
|removeWordsIfNoResults|[removeWordsIfNoResults](#schemaremovewordsifnoresults)|false|none|Strategy for removing words from the query when it doesn't return any results.<br>This helps to avoid returning empty search results.<br><br>- `none`.<br>  No words are removed when a query doesn't return results.<br><br>- `lastWords`.<br>  Treat the last (then second to last, then third to last) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `firstWords`.<br>  Treat the first (then second, then third) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `allOptional`.<br>  Treat all words as optional.<br><br>For more information, see [Remove words to improve results](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/in-depth/why-use-remove-words-if-no-results).<br>|
|mode|[mode](#schemamode)|false|none|Search mode the index will use to query for results.<br><br>This setting only applies to indices, for which Algolia enabled NeuralSearch for you.<br>|
|semanticSearch|[semanticSearch](#schemasemanticsearch)|false|none|Settings for the semantic search part of NeuralSearch.<br>Only used when `mode` is `neuralSearch`.<br>|
|advancedSyntax|[advancedSyntax](#schemaadvancedsyntax)|false|none|Whether to support phrase matching and excluding words from search queries.<br>Use the `advancedSyntaxFeatures` parameter to control which feature is supported.<br>|
|optionalWords|[optionalWords](#schemaoptionalwords)|false|none|Words that should be considered optional when found in the query.<br><br>By default, records must match all words in the search query to be included in the search results.<br>Adding optional words can increase the number of search results by running an additional search query that doesn't include the optional words.<br>For example, if the search query is "action video" and "video" is optional,<br>the search engine runs two queries: one for "action video" and one for "action".<br>Records that match all words are ranked higher.<br><br>For a search query with 4 or more words **and** all its words are optional,<br>the number of matched words required for a record to be included in the search results increases for every 1,000 records:<br><br>- If `optionalWords` has fewer than 10 words, the required number of matched words increases by 1:<br>  results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 2 matched words.<br>- If `optionalWords` has 10 or more words, the required number of matched words increases by the number of optional words divided by 5 (rounded down).<br>  Example: with 18 optional words, results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 4 matched words.<br><br>For more information, see [Optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).<br>|
|disableExactOnAttributes|[disableExactOnAttributes](#schemadisableexactonattributes)|false|none|Searchable attributes for which you want to [turn off the Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes).<br>Attribute names are case-sensitive<br>This can be useful for attributes with long values, where the likelihood of an exact match is high,<br>such as product descriptions.<br>Turning off the Exact ranking criterion for these attributes favors exact matching on other attributes.<br>This reduces the impact of individual attributes with a lot of content on ranking.<br>|
|exactOnSingleWordQuery|[exactOnSingleWordQuery](#schemaexactonsinglewordquery)|false|none|Determines how the [Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes) is computed when the search query has only one word.<br><br>- `attribute`.<br>  The Exact ranking criterion is 1 if the query word and attribute value are the same.<br>  For example, a search for "road" will match the value "road", but not "road trip".<br><br>- `none`.<br>  The Exact ranking criterion is ignored on single-word searches.<br><br>- `word`.<br>  The Exact ranking criterion is 1 if the query word is found in the attribute value.<br>  The query word must have at least 3 characters and must not be a stop word.<br>  Only exact matches will be highlighted,<br>  partial and prefix matches won't.<br>|
|alternativesAsExact|[IndexSettings_alternativesAsExact](#schemaindexsettings_alternativesasexact)|false|none|Determine which plurals and synonyms should be considered an exact matches.<br>By default, Algolia treats singular and plural forms of a word, and single-word synonyms, as [exact](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#exact) matches when searching.<br>For example:<br>- "swimsuit" and "swimsuits" are treated the same.<br>- "swimsuit" and "swimwear" are treated the same (if they are [synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/#regular-synonyms)).<br>- `ignorePlurals`.<br>  Plurals and similar declensions added by the `ignorePlurals` setting are considered exact matches.<br>- `singleWordSynonym`.<br>  Single-word synonyms, such as "NY" = "NYC", are considered exact matches.<br>- `multiWordsSynonym`.<br>  Multi-word synonyms, such as "NY" = "New York", are considered exact matches.<br>|
|advancedSyntaxFeatures|[IndexSettings_advancedSyntaxFeatures](#schemaindexsettings_advancedsyntaxfeatures)|false|none|Advanced search syntax features you want to support.<br>- `exactPhrase`.<br>  Phrases in quotes must match exactly.<br>  For example, `sparkly blue "iPhone case"` only returns records with the exact string "iPhone case".<br>- `excludeWords`.<br>  Query words prefixed with a `-` must not occur in a record.<br>  For example, `search -engine` matches records that contain "search" but not "engine".<br>This setting only has an effect if `advancedSyntax` is true.<br>|
|distinct|[distinct](#schemadistinct)|false|none|Determines how many records of a group are included in the search results.<br><br>Records with the same value for the `attributeForDistinct` attribute are considered a group.<br>The `distinct` setting controls how many members of the group are returned.<br>This is useful for [deduplication and grouping](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#deduplicate-results-with-distinct).<br><br>The `distinct` setting is ignored if `attributeForDistinct` is not set.<br>|
|replaceSynonymsInHighlight|[replaceSynonymsInHighlight](#schemareplacesynonymsinhighlight)|false|none|Whether to replace a highlighted word with the matched synonym.<br>By default, the original words are highlighted even if a synonym matches.<br>For example, with `home` as a synonym for `house` and a search for `home`,<br>records matching either "home" or "house" are included in the search results,<br>and either "home" or "house" are highlighted<br>With `replaceSynonymsInHighlight` set to `true`, a search for `home` still matches the same records,<br>but all occurrences of "house" are replaced by "home" in the highlighted response.<br>|
|minProximity|[minProximity](#schemaminproximity)|false|none|Minimum proximity score for two matching words.<br>This adjusts the [Proximity ranking criterion](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#proximity)<br>by equally scoring matches that are farther apart<br>For example, if `minProximity` is 2, neighboring matches and matches with one word between them would have the same score.<br>|
|responseFields|[responseFields](#schemaresponsefields)|false|none|Properties to include in the API response of search and browse requests.<br>By default, all response properties are included.<br>To reduce the response size, you can select which properties should be included<br>An empty list may lead to an empty API response (except properties you can't exclude)<br>You can't exclude these properties:<br>`message`, `warning`, `cursor`, `abTestVariantID`,<br>or any property added by setting `getRankingInfo` to true<br>Your search depends on the `hits` field. If you omit this field, searches won't return any results.<br>Your UI might also depend on other properties, for example, for pagination.<br>Before restricting the response size, check the impact on your search experience.<br>|
|maxValuesPerFacet|[maxValuesPerFacet](#schemamaxvaluesperfacet)|false|none|Maximum number of facet values to return for each facet.|
|sortFacetValuesBy|[sortFacetValuesBy](#schemasortfacetvaluesby)|false|none|Order in which to retrieve facet values.<br>- `count`.<br>  Facet values are retrieved by decreasing count.<br>  The count is the number of matching records containing this facet value.<br>- `alpha`.<br>  Retrieve facet values alphabetically.<br>This setting doesn't influence how facet values are displayed in your UI (see `renderingContent`).<br>For more information, see [facet value display](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js).<br>|
|attributeCriteriaComputedByMinProximity|[attributeCriteriaComputedByMinProximity](#schemaattributecriteriacomputedbyminproximity)|false|none|Whether the best matching attribute should be determined by minimum proximity.<br>This setting only affects ranking if the Attribute ranking criterion comes before Proximity in the `ranking` setting.<br>If true, the best matching attribute is selected based on the minimum proximity of multiple matches.<br>Otherwise, the best matching attribute is determined by the order in the `searchableAttributes` setting.<br><br>Prefer `attributeCriteriaComputedBy`, which expresses the same two behaviors and adds the `sum` strategy.<br>If you set both, `attributeCriteriaComputedBy` takes precedence.<br>|
|attributeCriteriaComputedBy|[attributeCriteriaComputedBy](#schemaattributecriteriacomputedby)|false|none|Strategy for computing the Attribute ranking criterion.<br>This mainly affects multi-word queries with matches in more than one attribute.<br><br>The `ranking` setting decides whether `best` takes effect.<br>When Attribute comes after Proximity, which is the default order, the engine always uses the `minProximity` strategy and ignores `best`.<br>To select `best`, move Attribute before Proximity in `ranking`.<br>The `sum` strategy applies in both orders.<br><br>- `minProximity`.<br>  Pick the best matching attribute from the attributes that form the best proximity score.<br>  On an ordered attribute, the match position breaks ties.<br>- `best`.<br>  Pick the best matching attribute from all attributes that match any query word.<br>  On an ordered attribute, the match position breaks ties.<br>- `sum`.<br>  Add up a score for every query word instead of picking one attribute.<br>  Each word's score comes from the attribute it matched, and from its position in that attribute when the attribute is ordered.<br>  A query word that matches nothing adds a large penalty.<br>  A record with a lower total ranks higher.<br>  A record therefore cannot rank high only because one word of a multi-word query matched a top attribute.<br>  Use `sum` with short, relevant attributes, and set long-text attributes to unordered.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|enableReRanking|[enableReRanking](#schemaenablereranking)|false|none|Whether this search will use [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking).<br>This setting only has an effect if you activated Dynamic Re-Ranking for this index in the Algolia dashboard.<br>|
|reRankingApplyFilter|[reRankingApplyFilter](#schemarerankingapplyfilter) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|naturalLanguages|af|
|naturalLanguages|ar|
|naturalLanguages|az|
|naturalLanguages|bg|
|naturalLanguages|bn|
|naturalLanguages|ca|
|naturalLanguages|cs|
|naturalLanguages|cy|
|naturalLanguages|da|
|naturalLanguages|de|
|naturalLanguages|el|
|naturalLanguages|en|
|naturalLanguages|eo|
|naturalLanguages|es|
|naturalLanguages|et|
|naturalLanguages|eu|
|naturalLanguages|fa|
|naturalLanguages|fi|
|naturalLanguages|fo|
|naturalLanguages|fr|
|naturalLanguages|ga|
|naturalLanguages|gl|
|naturalLanguages|he|
|naturalLanguages|hi|
|naturalLanguages|hu|
|naturalLanguages|hy|
|naturalLanguages|id|
|naturalLanguages|is|
|naturalLanguages|it|
|naturalLanguages|ja|
|naturalLanguages|ka|
|naturalLanguages|kk|
|naturalLanguages|ko|
|naturalLanguages|ku|
|naturalLanguages|ky|
|naturalLanguages|lt|
|naturalLanguages|lv|
|naturalLanguages|mi|
|naturalLanguages|mn|
|naturalLanguages|mr|
|naturalLanguages|ms|
|naturalLanguages|mt|
|naturalLanguages|nb|
|naturalLanguages|nl|
|naturalLanguages|no|
|naturalLanguages|ns|
|naturalLanguages|pl|
|naturalLanguages|ps|
|naturalLanguages|pt|
|naturalLanguages|pt-br|
|naturalLanguages|qu|
|naturalLanguages|ro|
|naturalLanguages|ru|
|naturalLanguages|sk|
|naturalLanguages|sq|
|naturalLanguages|sv|
|naturalLanguages|sw|
|naturalLanguages|ta|
|naturalLanguages|te|
|naturalLanguages|th|
|naturalLanguages|tl|
|naturalLanguages|tn|
|naturalLanguages|tr|
|naturalLanguages|tt|
|naturalLanguages|uk|
|naturalLanguages|ur|
|naturalLanguages|uz|
|naturalLanguages|zh|
|queryLanguages|af|
|queryLanguages|ar|
|queryLanguages|az|
|queryLanguages|bg|
|queryLanguages|bn|
|queryLanguages|ca|
|queryLanguages|cs|
|queryLanguages|cy|
|queryLanguages|da|
|queryLanguages|de|
|queryLanguages|el|
|queryLanguages|en|
|queryLanguages|eo|
|queryLanguages|es|
|queryLanguages|et|
|queryLanguages|eu|
|queryLanguages|fa|
|queryLanguages|fi|
|queryLanguages|fo|
|queryLanguages|fr|
|queryLanguages|ga|
|queryLanguages|gl|
|queryLanguages|he|
|queryLanguages|hi|
|queryLanguages|hu|
|queryLanguages|hy|
|queryLanguages|id|
|queryLanguages|is|
|queryLanguages|it|
|queryLanguages|ja|
|queryLanguages|ka|
|queryLanguages|kk|
|queryLanguages|ko|
|queryLanguages|ku|
|queryLanguages|ky|
|queryLanguages|lt|
|queryLanguages|lv|
|queryLanguages|mi|
|queryLanguages|mn|
|queryLanguages|mr|
|queryLanguages|ms|
|queryLanguages|mt|
|queryLanguages|nb|
|queryLanguages|nl|
|queryLanguages|no|
|queryLanguages|ns|
|queryLanguages|pl|
|queryLanguages|ps|
|queryLanguages|pt|
|queryLanguages|pt-br|
|queryLanguages|qu|
|queryLanguages|ro|
|queryLanguages|ru|
|queryLanguages|sk|
|queryLanguages|sq|
|queryLanguages|sv|
|queryLanguages|sw|
|queryLanguages|ta|
|queryLanguages|te|
|queryLanguages|th|
|queryLanguages|tl|
|queryLanguages|tn|
|queryLanguages|tr|
|queryLanguages|tt|
|queryLanguages|uk|
|queryLanguages|ur|
|queryLanguages|uz|
|queryLanguages|zh|
|queryType|prefixLast|
|queryType|prefixAll|
|queryType|prefixNone|
|removeWordsIfNoResults|none|
|removeWordsIfNoResults|lastWords|
|removeWordsIfNoResults|firstWords|
|removeWordsIfNoResults|allOptional|
|mode|neuralSearch|
|mode|keywordSearch|
|exactOnSingleWordQuery|attribute|
|exactOnSingleWordQuery|none|
|exactOnSingleWordQuery|word|
|alternativesAsExact|ignorePlurals|
|alternativesAsExact|singleWordSynonym|
|alternativesAsExact|multiWordsSynonym|
|alternativesAsExact|ignoreConjugations|
|advancedSyntaxFeatures|exactPhrase|
|advancedSyntaxFeatures|excludeWords|
|attributeCriteriaComputedBy|minProximity|
|attributeCriteriaComputedBy|best|
|attributeCriteriaComputedBy|sum|

<h2 id="tocS_searchParams">searchParams</h2>
<!-- backwards compatibility -->
<a id="schemasearchparams"></a>
<a id="schema_searchParams"></a>
<a id="tocSsearchparams"></a>
<a id="tocssearchparams"></a>

```json
{
  "params": "hitsPerPage=2&getRankingInfo=1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[searchParamsString](#schemasearchparamsstring)|false|none|Search parameters as query string.|
|*oneOf*|[searchParamsObject](#schemasearchparamsobject)|false|none|Each parameter value, including the `query` must not be larger than 512 bytes.|

<h2 id="tocS_processingTimeMS">processingTimeMS</h2>
<!-- backwards compatibility -->
<a id="schemaprocessingtimems"></a>
<a id="schema_processingTimeMS"></a>
<a id="tocSprocessingtimems"></a>
<a id="tocsprocessingtimems"></a>

```json
20
```

Time the server took to process the request, in milliseconds.

<h2 id="tocS_RedirectRuleIndexMetadata">RedirectRuleIndexMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaredirectruleindexmetadata"></a>
<a id="schema_RedirectRuleIndexMetadata"></a>
<a id="tocSredirectruleindexmetadata"></a>
<a id="tocsredirectruleindexmetadata"></a>

```json
{
  "source": "string",
  "dest": "string",
  "reason": "string",
  "succeed": true,
  "data": {
    "ruleObjectID": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|Source index for the redirect rule.|
|dest|string|true|none|Destination index for the redirect rule.|
|reason|string|true|none|Reason for the redirect rule.|
|succeed|boolean|true|none|Redirect rule status.|
|data|object|true|none|Redirect rule data.|

<h2 id="tocS_userData">userData</h2>
<!-- backwards compatibility -->
<a id="schemauserdata"></a>
<a id="schema_userData"></a>
<a id="tocSuserdata"></a>
<a id="tocsuserdata"></a>

```json
{
  "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
  "pluginVersion": "1.6.0"
}
```

An object with custom data.

You can store up to 32kB as custom data.

<h2 id="tocS_baseSearchResponse">baseSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemabasesearchresponse"></a>
<a id="schema_baseSearchResponse"></a>
<a id="tocSbasesearchresponse"></a>
<a id="tocsbasesearchresponse"></a>

```json
{
  "abTestID": 0,
  "abTestVariantID": 1,
  "aroundLatLng": "40.71,-74.01",
  "automaticRadius": "string",
  "exhaustive": {
    "facetsCount": true,
    "facetValues": true,
    "nbHits": true,
    "rulesMatch": true,
    "typo": true
  },
  "appliedRules": [
    {}
  ],
  "exhaustiveFacetsCount": true,
  "exhaustiveNbHits": true,
  "exhaustiveTypo": true,
  "facets": {
    "category": {
      "food": 1,
      "tech": 42
    }
  },
  "facets_stats": {
    "property1": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    },
    "property2": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    }
  },
  "index": "indexName",
  "indexUsed": "indexNameAlt",
  "message": "string",
  "nbSortedHits": 20,
  "parsedQuery": "george clo",
  "processingTimeMS": 20,
  "processingTimingsMS": {},
  "queryAfterRemoval": "string",
  "redirect": {
    "index": [
      {
        "source": "string",
        "dest": "string",
        "reason": "string",
        "succeed": true,
        "data": {
          "ruleObjectID": "string"
        }
      }
    ]
  },
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "serverTimeMS": 20,
  "serverUsed": "c2-uk-3.algolia.net",
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "queryID": "a00dbc80a8d13c4565a442e7e2dca80a",
  "_automaticInsights": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abTestID|integer|false|none|A/B test ID. This is only included in the response for indices that are part of an A/B test.|
|abTestVariantID|integer|false|none|Variant ID. This is only included in the response for indices that are part of an A/B test.|
|aroundLatLng|string|false|none|Computed geographical location.|
|automaticRadius|string|false|none|Distance from a central coordinate provided by `aroundLatLng`.|
|exhaustive|object|false|none|Whether certain properties of the search response are calculated exhaustive (exact) or approximated.|
|appliedRules|[object]|false|none|Rules applied to the query.|
|exhaustiveFacetsCount|boolean|false|none|**Deprecated.** See the `facetsCount` field of the `exhaustive` object in the response.|
|exhaustiveNbHits|boolean|false|none|**Deprecated.** See the `nbHits` field of the `exhaustive` object in the response.|
|exhaustiveTypo|boolean|false|none|**Deprecated.** See the `typo` field of the `exhaustive` object in the response.|
|facets|object|false|none|Facet counts.|
|facets_stats|object|false|none|Statistics for numerical facets.|
|index|string|false|none|Index name used for the query.|
|indexUsed|string|false|none|Index name used for the query. During A/B testing, the targeted index isn't always the index used by the query.|
|message|string|false|none|Warnings about the query.|
|nbSortedHits|integer|false|none|Number of hits selected and sorted by the relevant sort algorithm.|
|parsedQuery|string|false|none|Post-[normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/#what-does-normalization-mean) query string that will be searched.|
|processingTimeMS|[processingTimeMS](#schemaprocessingtimems)|false|none|Time the server took to process the request, in milliseconds.|
|processingTimingsMS|object|false|none|Experimental. List of processing steps and their times, in milliseconds. You can use this list to investigate performance issues.|
|queryAfterRemoval|string|false|none|Markup text indicating which parts of the original query have been removed to retrieve a non-empty result set.|
|redirect|object|false|none|[Redirect results to a URL](https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting/how-to/redirects), this this parameter is for internal use only.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|serverTimeMS|integer|false|none|Time the server took to process the request, in milliseconds.|
|serverUsed|string|false|none|Host name of the server that processed the request.|
|userData|[userData](#schemauserdata)|false|none|An object with custom data.<br><br>You can store up to 32kB as custom data.<br>|
|queryID|string|false|none|Unique identifier for the query. This is used for [click analytics](https://www.algolia.com/doc/guides/analytics/click-analytics).|
|_automaticInsights|boolean|false|none|Whether automatic events collection is enabled for the application.|

<h2 id="tocS_nbHits">nbHits</h2>
<!-- backwards compatibility -->
<a id="schemanbhits"></a>
<a id="schema_nbHits"></a>
<a id="tocSnbhits"></a>
<a id="tocsnbhits"></a>

```json
20
```

Number of results (hits).

<h2 id="tocS_nbPages">nbPages</h2>
<!-- backwards compatibility -->
<a id="schemanbpages"></a>
<a id="schema_nbPages"></a>
<a id="tocSnbpages"></a>
<a id="tocsnbpages"></a>

```json
1
```

Number of pages of results.

<h2 id="tocS_SearchPagination">SearchPagination</h2>
<!-- backwards compatibility -->
<a id="schemasearchpagination"></a>
<a id="schema_SearchPagination"></a>
<a id="tocSsearchpagination"></a>
<a id="tocssearchpagination"></a>

```json
{
  "page": 0,
  "nbHits": 20,
  "nbPages": 1,
  "hitsPerPage": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|nbHits|[nbHits](#schemanbhits)|false|none|Number of results (hits).|
|nbPages|[nbPages](#schemanbpages)|false|none|Number of pages of results.|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|

<h2 id="tocS_objectID">objectID</h2>
<!-- backwards compatibility -->
<a id="schemaobjectid"></a>
<a id="schema_objectID"></a>
<a id="tocSobjectid"></a>
<a id="tocsobjectid"></a>

```json
"test-record-123"
```

Unique record identifier.

<h2 id="tocS_highlightedValue">highlightedValue</h2>
<!-- backwards compatibility -->
<a id="schemahighlightedvalue"></a>
<a id="schema_highlightedValue"></a>
<a id="tocShighlightedvalue"></a>
<a id="tocshighlightedvalue"></a>

```json
"<em>George</em> <em>Clo</em>oney"
```

Highlighted attribute value, including HTML tags.

<h2 id="tocS_matchLevel">matchLevel</h2>
<!-- backwards compatibility -->
<a id="schemamatchlevel"></a>
<a id="schema_matchLevel"></a>
<a id="tocSmatchlevel"></a>
<a id="tocsmatchlevel"></a>

```json
"none"
```

Whether the whole query string matches or only a part.

<h2 id="tocS_highlightResultOption">highlightResultOption</h2>
<!-- backwards compatibility -->
<a id="schemahighlightresultoption"></a>
<a id="schema_highlightResultOption"></a>
<a id="tocShighlightresultoption"></a>
<a id="tocshighlightresultoption"></a>

```json
{
  "value": "<em>George</em> <em>Clo</em>oney",
  "matchLevel": "none",
  "matchedWords": [
    "action"
  ],
  "fullyHighlighted": true
}
```

Surround words that match the query with HTML tags for highlighting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[highlightedValue](#schemahighlightedvalue)|true|none|Highlighted attribute value, including HTML tags.|
|matchLevel|[matchLevel](#schemamatchlevel)|true|none|Whether the whole query string matches or only a part.|
|matchedWords|[string]|true|none|List of matched words from the search query.|
|fullyHighlighted|boolean|false|none|Whether the entire attribute value is highlighted.|

#### Enumerated Values

|Property|Value|
|---|---|
|matchLevel|none|
|matchLevel|partial|
|matchLevel|full|

<h2 id="tocS_highlightResultMap">highlightResultMap</h2>
<!-- backwards compatibility -->
<a id="schemahighlightresultmap"></a>
<a id="schema_highlightResultMap"></a>
<a id="tocShighlightresultmap"></a>
<a id="tocshighlightresultmap"></a>

```json
{
  "property1": {
    "value": "<em>George</em> <em>Clo</em>oney",
    "matchLevel": "none",
    "matchedWords": [
      "action"
    ],
    "fullyHighlighted": true
  },
  "property2": {
    "value": "<em>George</em> <em>Clo</em>oney",
    "matchLevel": "none",
    "matchedWords": [
      "action"
    ],
    "fullyHighlighted": true
  }
}
```

Surround words that match the query with HTML tags for highlighting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[highlightResult](#schemahighlightresult)|false|none|none|

<h2 id="tocS_highlightResult">highlightResult</h2>
<!-- backwards compatibility -->
<a id="schemahighlightresult"></a>
<a id="schema_highlightResult"></a>
<a id="tocShighlightresult"></a>
<a id="tocshighlightresult"></a>

```json
{
  "value": "<em>George</em> <em>Clo</em>oney",
  "matchLevel": "none",
  "matchedWords": [
    "action"
  ],
  "fullyHighlighted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[highlightResultOption](#schemahighlightresultoption)|false|none|Surround words that match the query with HTML tags for highlighting.|
|*oneOf*|[highlightResultMap](#schemahighlightresultmap)|false|none|Surround words that match the query with HTML tags for highlighting.|
|*oneOf*|[highlightResultArray](#schemahighlightresultarray)|false|none|Surround words that match the query with HTML tags for highlighting.|

<h2 id="tocS_highlightResultArray">highlightResultArray</h2>
<!-- backwards compatibility -->
<a id="schemahighlightresultarray"></a>
<a id="schema_highlightResultArray"></a>
<a id="tocShighlightresultarray"></a>
<a id="tocshighlightresultarray"></a>

```json
[
  {
    "value": "<em>George</em> <em>Clo</em>oney",
    "matchLevel": "none",
    "matchedWords": [
      "action"
    ],
    "fullyHighlighted": true
  }
]
```

Surround words that match the query with HTML tags for highlighting.

<h2 id="tocS_snippetResultOption">snippetResultOption</h2>
<!-- backwards compatibility -->
<a id="schemasnippetresultoption"></a>
<a id="schema_snippetResultOption"></a>
<a id="tocSsnippetresultoption"></a>
<a id="tocssnippetresultoption"></a>

```json
{
  "value": "<em>George</em> <em>Clo</em>oney",
  "matchLevel": "none"
}
```

Snippets that show the context around a matching search query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[highlightedValue](#schemahighlightedvalue)|true|none|Highlighted attribute value, including HTML tags.|
|matchLevel|[matchLevel](#schemamatchlevel)|true|none|Whether the whole query string matches or only a part.|

#### Enumerated Values

|Property|Value|
|---|---|
|matchLevel|none|
|matchLevel|partial|
|matchLevel|full|

<h2 id="tocS_snippetResultMap">snippetResultMap</h2>
<!-- backwards compatibility -->
<a id="schemasnippetresultmap"></a>
<a id="schema_snippetResultMap"></a>
<a id="tocSsnippetresultmap"></a>
<a id="tocssnippetresultmap"></a>

```json
{
  "property1": {
    "value": "<em>George</em> <em>Clo</em>oney",
    "matchLevel": "none"
  },
  "property2": {
    "value": "<em>George</em> <em>Clo</em>oney",
    "matchLevel": "none"
  }
}
```

Snippets that show the context around a matching search query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[snippetResult](#schemasnippetresult)|false|none|none|

<h2 id="tocS_snippetResult">snippetResult</h2>
<!-- backwards compatibility -->
<a id="schemasnippetresult"></a>
<a id="schema_snippetResult"></a>
<a id="tocSsnippetresult"></a>
<a id="tocssnippetresult"></a>

```json
{
  "value": "<em>George</em> <em>Clo</em>oney",
  "matchLevel": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[snippetResultOption](#schemasnippetresultoption)|false|none|Snippets that show the context around a matching search query.|
|*oneOf*|[snippetResultMap](#schemasnippetresultmap)|false|none|Snippets that show the context around a matching search query.|
|*oneOf*|[snippetResultArray](#schemasnippetresultarray)|false|none|Snippets that show the context around a matching search query.|

<h2 id="tocS_snippetResultArray">snippetResultArray</h2>
<!-- backwards compatibility -->
<a id="schemasnippetresultarray"></a>
<a id="schema_snippetResultArray"></a>
<a id="tocSsnippetresultarray"></a>
<a id="tocssnippetresultarray"></a>

```json
[
  {
    "value": "<em>George</em> <em>Clo</em>oney",
    "matchLevel": "none"
  }
]
```

Snippets that show the context around a matching search query.

<h2 id="tocS_matchedGeoLocation">matchedGeoLocation</h2>
<!-- backwards compatibility -->
<a id="schemamatchedgeolocation"></a>
<a id="schema_matchedGeoLocation"></a>
<a id="tocSmatchedgeolocation"></a>
<a id="tocsmatchedgeolocation"></a>

```json
{
  "lat": 0,
  "lng": 0,
  "distance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|false|none|Latitude of the matched location.|
|lng|number(double)|false|none|Longitude of the matched location.|
|distance|integer|false|none|Distance between the matched location and the search location (in meters).|

<h2 id="tocS_personalization">personalization</h2>
<!-- backwards compatibility -->
<a id="schemapersonalization"></a>
<a id="schema_personalization"></a>
<a id="tocSpersonalization"></a>
<a id="tocspersonalization"></a>

```json
{
  "filtersScore": 0,
  "rankingScore": 0,
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filtersScore|integer|false|none|The score of the filters.|
|rankingScore|integer|false|none|The score of the ranking.|
|score|integer|false|none|The score of the event.|

<h2 id="tocS_rankingInfo">rankingInfo</h2>
<!-- backwards compatibility -->
<a id="schemarankinginfo"></a>
<a id="schema_rankingInfo"></a>
<a id="tocSrankinginfo"></a>
<a id="tocsrankinginfo"></a>

```json
{
  "filters": 0,
  "firstMatchedWord": 0,
  "geoDistance": 0,
  "geoPrecision": 1,
  "matchedGeoLocation": {
    "lat": 0,
    "lng": 0,
    "distance": 0
  },
  "personalization": {
    "filtersScore": 0,
    "rankingScore": 0,
    "score": 0
  },
  "nbExactWords": 0,
  "nbTypos": 0,
  "promoted": true,
  "proximityDistance": 0,
  "userScore": 0,
  "words": 1,
  "promotedByReRanking": true
}
```

Object with detailed information about the record's ranking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|integer|false|none|Whether a filter matched the query.|
|firstMatchedWord|integer|true|none|Position of the first matched word in the best matching attribute of the record.|
|geoDistance|integer|true|none|Distance between the geo location in the search query and the best matching geo location in the record, divided by the geo precision (in meters).|
|geoPrecision|integer|false|none|Precision used when computing the geo distance, in meters.|
|matchedGeoLocation|[matchedGeoLocation](#schemamatchedgeolocation)|false|none|none|
|personalization|[personalization](#schemapersonalization)|false|none|none|
|nbExactWords|integer|true|none|Number of exactly matched words.|
|nbTypos|integer|true|none|Number of typos encountered when matching the record.|
|promoted|boolean|false|none|Whether the record was promoted by a rule.|
|proximityDistance|integer|false|none|Number of words between multiple matches in the query plus 1. For single word queries, `proximityDistance` is 0.|
|userScore|integer|true|none|Overall ranking of the record, expressed as a single integer. This attribute is internal.|
|words|integer|false|none|Number of matched words.|
|promotedByReRanking|boolean|false|none|Whether the record is re-ranked.|

<h2 id="tocS_distinctSeqID">distinctSeqID</h2>
<!-- backwards compatibility -->
<a id="schemadistinctseqid"></a>
<a id="schema_distinctSeqID"></a>
<a id="tocSdistinctseqid"></a>
<a id="tocsdistinctseqid"></a>

```json
0
```

<h2 id="tocS_hit">hit</h2>
<!-- backwards compatibility -->
<a id="schemahit"></a>
<a id="schema_hit"></a>
<a id="tocShit"></a>
<a id="tocshit"></a>

```json
{
  "objectID": "test-record-123",
  "_highlightResult": {
    "property1": {},
    "property2": {}
  },
  "_snippetResult": {
    "property1": {},
    "property2": {}
  },
  "_rankingInfo": {
    "filters": 0,
    "firstMatchedWord": 0,
    "geoDistance": 0,
    "geoPrecision": 1,
    "matchedGeoLocation": {
      "lat": 0,
      "lng": 0,
      "distance": 0
    },
    "personalization": {
      "filtersScore": 0,
      "rankingScore": 0,
      "score": 0
    },
    "nbExactWords": 0,
    "nbTypos": 0,
    "promoted": true,
    "proximityDistance": 0,
    "userScore": 0,
    "words": 1,
    "promotedByReRanking": true
  },
  "_distinctSeqID": 0
}
```

Search result.

A hit is a record from your index, augmented with special attributes for highlighting, snippeting, and ranking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectID|[objectID](#schemaobjectid)|true|none|Unique record identifier.|
|_highlightResult|[highlightResultMap](#schemahighlightresultmap)|false|none|Surround words that match the query with HTML tags for highlighting.|
|_snippetResult|[snippetResultMap](#schemasnippetresultmap)|false|none|Snippets that show the context around a matching search query.|
|_rankingInfo|[rankingInfo](#schemarankinginfo)|false|none|Object with detailed information about the record's ranking.|
|_distinctSeqID|[distinctSeqID](#schemadistinctseqid)|false|none|none|

<h2 id="tocS_queryCategorization_type">queryCategorization_type</h2>
<!-- backwards compatibility -->
<a id="schemaquerycategorization_type"></a>
<a id="schema_queryCategorization_type"></a>
<a id="tocSquerycategorization_type"></a>
<a id="tocsquerycategorization_type"></a>

```json
"narrow"
```

Classification of the query scope.

<h2 id="tocS_categoryPrediction_bin">categoryPrediction_bin</h2>
<!-- backwards compatibility -->
<a id="schemacategoryprediction_bin"></a>
<a id="schema_categoryPrediction_bin"></a>
<a id="tocScategoryprediction_bin"></a>
<a id="tocscategoryprediction_bin"></a>

```json
"certain"
```

Confidence level of the category prediction.

<h2 id="tocS_hierarchyPathEntry">hierarchyPathEntry</h2>
<!-- backwards compatibility -->
<a id="schemahierarchypathentry"></a>
<a id="schema_hierarchyPathEntry"></a>
<a id="tocShierarchypathentry"></a>
<a id="tocshierarchypathentry"></a>

```json
{
  "facetName": "string",
  "facetValue": "string",
  "depth": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facetName|string|false|none|Facet attribute name at this hierarchy level, for example, `categories.lvl0`.|
|facetValue|string|false|none|Facet value at this level of the category hierarchy.|
|depth|integer|false|none|Depth level in the category hierarchy, starting at 0.|

<h2 id="tocS_categoryPrediction">categoryPrediction</h2>
<!-- backwards compatibility -->
<a id="schemacategoryprediction"></a>
<a id="schema_categoryPrediction"></a>
<a id="tocScategoryprediction"></a>
<a id="tocscategoryprediction"></a>

```json
{
  "bin": "certain",
  "hierarchyPath": [
    {
      "facetName": "string",
      "facetValue": "string",
      "depth": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bin|[categoryPrediction_bin](#schemacategoryprediction_bin)|false|none|Confidence level of the category prediction.|
|hierarchyPath|[[hierarchyPathEntry](#schemahierarchypathentry)]|false|none|Ordered list of category levels from root to the predicted category.|

#### Enumerated Values

|Property|Value|
|---|---|
|bin|certain|
|bin|very high|
|bin|high|
|bin|low|
|bin|very low|

<h2 id="tocS_autoFilteringFilterEntry">autoFilteringFilterEntry</h2>
<!-- backwards compatibility -->
<a id="schemaautofilteringfilterentry"></a>
<a id="schema_autoFilteringFilterEntry"></a>
<a id="tocSautofilteringfilterentry"></a>
<a id="tocsautofilteringfilterentry"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_autoFilteringResult">autoFilteringResult</h2>
<!-- backwards compatibility -->
<a id="schemaautofilteringresult"></a>
<a id="schema_autoFilteringResult"></a>
<a id="tocSautofilteringresult"></a>
<a id="tocsautofilteringresult"></a>

```json
{
  "enabled": true,
  "maxDepth": 0,
  "facetFilters": [
    "string"
  ],
  "optionalFilters": [
    "string"
  ]
}
```

Result of automatic filtering applied by Query Categorization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether automatic filtering was applied to this query.|
|maxDepth|integer|false|none|Maximum category hierarchy depth used for filtering.|
|facetFilters|[[autoFilteringFilterEntry](#schemaautofilteringfilterentry)]|false|none|Facet filters automatically applied to the query.|
|optionalFilters|[[autoFilteringFilterEntry](#schemaautofilteringfilterentry)]|false|none|Optional filters automatically applied to boost relevant categories.|

<h2 id="tocS_queryCategorization">queryCategorization</h2>
<!-- backwards compatibility -->
<a id="schemaquerycategorization"></a>
<a id="schema_queryCategorization"></a>
<a id="tocSquerycategorization"></a>
<a id="tocsquerycategorization"></a>

```json
{
  "normalizedQuery": "string",
  "count": 0,
  "type": "narrow",
  "categories": [
    {
      "bin": "certain",
      "hierarchyPath": [
        {
          "facetName": "string",
          "facetValue": "string",
          "depth": 0
        }
      ]
    }
  ],
  "autofiltering": {
    "enabled": true,
    "maxDepth": 0,
    "facetFilters": [
      "string"
    ],
    "optionalFilters": [
      "string"
    ]
  }
}
```

Query Categorization prediction returned by the AI model.
This field is empty when the model cannot categorize the query.
See [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedQuery|string|false|none|Processed and normalized version of the original search query.|
|count|integer|false|none|Number of times this normalized query was observed during the training window.|
|type|[queryCategorization_type](#schemaquerycategorization_type)|false|none|Classification of the query scope.|
|categories|[[categoryPrediction](#schemacategoryprediction)]|false|none|List of category predictions with confidence levels.|
|autofiltering|[autoFilteringResult](#schemaautofilteringresult)|false|none|Result of automatic filtering applied by Query Categorization.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|narrow|
|type|broad|
|type|ambiguous|
|type|none|

<h2 id="tocS_responseExtensions">responseExtensions</h2>
<!-- backwards compatibility -->
<a id="schemaresponseextensions"></a>
<a id="schema_responseExtensions"></a>
<a id="tocSresponseextensions"></a>
<a id="tocsresponseextensions"></a>

```json
{
  "queryCategorization": {
    "normalizedQuery": "string",
    "count": 0,
    "type": "narrow",
    "categories": [
      {
        "bin": "certain",
        "hierarchyPath": [
          {
            "facetName": "string",
            "facetValue": "string",
            "depth": 0
          }
        ]
      }
    ],
    "autofiltering": {
      "enabled": true,
      "maxDepth": 0,
      "facetFilters": [
        "string"
      ],
      "optionalFilters": [
        "string"
      ]
    }
  }
}
```

AI-generated metadata returned alongside search results.
Present when Algolia AI features such as [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) are enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryCategorization|[queryCategorization](#schemaquerycategorization)|false|none|Query Categorization prediction returned by the AI model.<br>This field is empty when the model cannot categorize the query.<br>See [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/).<br>|

<h2 id="tocS_searchHits">searchHits</h2>
<!-- backwards compatibility -->
<a id="schemasearchhits"></a>
<a id="schema_searchHits"></a>
<a id="tocSsearchhits"></a>
<a id="tocssearchhits"></a>

```json
{
  "hits": [
    {
      "objectID": "test-record-123",
      "_highlightResult": {
        "property1": {},
        "property2": {}
      },
      "_snippetResult": {
        "property1": {},
        "property2": {}
      },
      "_rankingInfo": {
        "filters": 0,
        "firstMatchedWord": 0,
        "geoDistance": 0,
        "geoPrecision": 1,
        "matchedGeoLocation": {
          "lat": 0,
          "lng": 0,
          "distance": 0
        },
        "personalization": {
          "filtersScore": 0,
          "rankingScore": 0,
          "score": 0
        },
        "nbExactWords": 0,
        "nbTypos": 0,
        "promoted": true,
        "proximityDistance": 0,
        "userScore": 0,
        "words": 1,
        "promotedByReRanking": true
      },
      "_distinctSeqID": 0
    }
  ],
  "query": "",
  "params": "query=a&hitsPerPage=20",
  "extensions": {
    "queryCategorization": {
      "normalizedQuery": "string",
      "count": 0,
      "type": "narrow",
      "categories": [
        {
          "bin": "certain",
          "hierarchyPath": [
            {
              "facetName": "string",
              "facetValue": "string",
              "depth": 0
            }
          ]
        }
      ],
      "autofiltering": {
        "enabled": true,
        "maxDepth": 0,
        "facetFilters": [
          "string"
        ],
        "optionalFilters": [
          "string"
        ]
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[hit](#schemahit)]|true|none|Search results (hits).<br><br>Hits are records from your index that match the search criteria, augmented with additional attributes, such as, for highlighting.<br>|
|query|[query](#schemaquery)|false|none|Search query.|
|params|string|false|none|URL-encoded string of all search parameters.|
|extensions|[responseExtensions](#schemaresponseextensions)|false|none|AI-generated metadata returned alongside search results.<br>Present when Algolia AI features such as [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) are enabled.<br>|

<h2 id="tocS_searchResponse">searchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_searchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "abTestID": 0,
  "abTestVariantID": 1,
  "aroundLatLng": "40.71,-74.01",
  "automaticRadius": "string",
  "exhaustive": {
    "facetsCount": true,
    "facetValues": true,
    "nbHits": true,
    "rulesMatch": true,
    "typo": true
  },
  "appliedRules": [
    {}
  ],
  "exhaustiveFacetsCount": true,
  "exhaustiveNbHits": true,
  "exhaustiveTypo": true,
  "facets": {
    "category": {
      "food": 1,
      "tech": 42
    }
  },
  "facets_stats": {
    "property1": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    },
    "property2": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    }
  },
  "index": "indexName",
  "indexUsed": "indexNameAlt",
  "message": "string",
  "nbSortedHits": 20,
  "parsedQuery": "george clo",
  "processingTimeMS": 20,
  "processingTimingsMS": {},
  "queryAfterRemoval": "string",
  "redirect": {
    "index": [
      {
        "source": "string",
        "dest": "string",
        "reason": "string",
        "succeed": true,
        "data": {
          "ruleObjectID": "string"
        }
      }
    ]
  },
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "serverTimeMS": 20,
  "serverUsed": "c2-uk-3.algolia.net",
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "queryID": "a00dbc80a8d13c4565a442e7e2dca80a",
  "_automaticInsights": true,
  "page": 0,
  "nbHits": 20,
  "nbPages": 1,
  "hitsPerPage": 20,
  "hits": [
    {
      "objectID": "test-record-123",
      "_highlightResult": {
        "property1": {},
        "property2": {}
      },
      "_snippetResult": {
        "property1": {},
        "property2": {}
      },
      "_rankingInfo": {
        "filters": 0,
        "firstMatchedWord": 0,
        "geoDistance": 0,
        "geoPrecision": 1,
        "matchedGeoLocation": {
          "lat": 0,
          "lng": 0,
          "distance": 0
        },
        "personalization": {
          "filtersScore": 0,
          "rankingScore": 0,
          "score": 0
        },
        "nbExactWords": 0,
        "nbTypos": 0,
        "promoted": true,
        "proximityDistance": 0,
        "userScore": 0,
        "words": 1,
        "promotedByReRanking": true
      },
      "_distinctSeqID": 0
    }
  ],
  "query": "",
  "params": "query=a&hitsPerPage=20",
  "extensions": {
    "queryCategorization": {
      "normalizedQuery": "string",
      "count": 0,
      "type": "narrow",
      "categories": [
        {
          "bin": "certain",
          "hierarchyPath": [
            {
              "facetName": "string",
              "facetValue": "string",
              "depth": 0
            }
          ]
        }
      ],
      "autofiltering": {
        "enabled": true,
        "maxDepth": 0,
        "facetFilters": [
          "string"
        ],
        "optionalFilters": [
          "string"
        ]
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abTestID|integer|false|none|A/B test ID. This is only included in the response for indices that are part of an A/B test.|
|abTestVariantID|integer|false|none|Variant ID. This is only included in the response for indices that are part of an A/B test.|
|aroundLatLng|string|false|none|Computed geographical location.|
|automaticRadius|string|false|none|Distance from a central coordinate provided by `aroundLatLng`.|
|exhaustive|object|false|none|Whether certain properties of the search response are calculated exhaustive (exact) or approximated.|
|appliedRules|[object]|false|none|Rules applied to the query.|
|exhaustiveFacetsCount|boolean|false|none|**Deprecated.** See the `facetsCount` field of the `exhaustive` object in the response.|
|exhaustiveNbHits|boolean|false|none|**Deprecated.** See the `nbHits` field of the `exhaustive` object in the response.|
|exhaustiveTypo|boolean|false|none|**Deprecated.** See the `typo` field of the `exhaustive` object in the response.|
|facets|object|false|none|Facet counts.|
|facets_stats|object|false|none|Statistics for numerical facets.|
|index|string|false|none|Index name used for the query.|
|indexUsed|string|false|none|Index name used for the query. During A/B testing, the targeted index isn't always the index used by the query.|
|message|string|false|none|Warnings about the query.|
|nbSortedHits|integer|false|none|Number of hits selected and sorted by the relevant sort algorithm.|
|parsedQuery|string|false|none|Post-[normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/#what-does-normalization-mean) query string that will be searched.|
|processingTimeMS|[processingTimeMS](#schemaprocessingtimems)|false|none|Time the server took to process the request, in milliseconds.|
|processingTimingsMS|object|false|none|Experimental. List of processing steps and their times, in milliseconds. You can use this list to investigate performance issues.|
|queryAfterRemoval|string|false|none|Markup text indicating which parts of the original query have been removed to retrieve a non-empty result set.|
|redirect|object|false|none|[Redirect results to a URL](https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting/how-to/redirects), this this parameter is for internal use only.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|serverTimeMS|integer|false|none|Time the server took to process the request, in milliseconds.|
|serverUsed|string|false|none|Host name of the server that processed the request.|
|userData|[userData](#schemauserdata)|false|none|An object with custom data.<br><br>You can store up to 32kB as custom data.<br>|
|queryID|string|false|none|Unique identifier for the query. This is used for [click analytics](https://www.algolia.com/doc/guides/analytics/click-analytics).|
|_automaticInsights|boolean|false|none|Whether automatic events collection is enabled for the application.|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|nbHits|[nbHits](#schemanbhits)|false|none|Number of results (hits).|
|nbPages|[nbPages](#schemanbpages)|false|none|Number of pages of results.|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|hits|[[hit](#schemahit)]|true|none|Search results (hits).<br><br>Hits are records from your index that match the search criteria, augmented with additional attributes, such as, for highlighting.<br>|
|query|[query](#schemaquery)|false|none|Search query.|
|params|string|false|none|URL-encoded string of all search parameters.|
|extensions|[responseExtensions](#schemaresponseextensions)|false|none|AI-generated metadata returned alongside search results.<br>Present when Algolia AI features such as [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) are enabled.<br>|

<h2 id="tocS_indexName">indexName</h2>
<!-- backwards compatibility -->
<a id="schemaindexname"></a>
<a id="schema_indexName"></a>
<a id="tocSindexname"></a>
<a id="tocsindexname"></a>

```json
"products"
```

Index name (case-sensitive).

<h2 id="tocS_searchTypeDefault">searchTypeDefault</h2>
<!-- backwards compatibility -->
<a id="schemasearchtypedefault"></a>
<a id="schema_searchTypeDefault"></a>
<a id="tocSsearchtypedefault"></a>
<a id="tocssearchtypedefault"></a>

```json
"default"
```

- `default`: perform a search query.
- `facet` [searches for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).

<h2 id="tocS_searchExtensionsQueryCategorization">searchExtensionsQueryCategorization</h2>
<!-- backwards compatibility -->
<a id="schemasearchextensionsquerycategorization"></a>
<a id="schema_searchExtensionsQueryCategorization"></a>
<a id="tocSsearchextensionsquerycategorization"></a>
<a id="tocssearchextensionsquerycategorization"></a>

```json
{
  "enableCategoriesRetrieval": false,
  "enableAutoFiltering": false
}
```

Parameters for the [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) AI feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableCategoriesRetrieval|boolean|false|none|Whether to retrieve category predictions in the response `extensions.queryCategorization` field.|
|enableAutoFiltering|boolean|false|none|Whether to automatically apply category-based filters and boosts to search results.|

<h2 id="tocS_searchExtensions">searchExtensions</h2>
<!-- backwards compatibility -->
<a id="schemasearchextensions"></a>
<a id="schema_searchExtensions"></a>
<a id="tocSsearchextensions"></a>
<a id="tocssearchextensions"></a>

```json
{
  "queryCategorization": {
    "enableCategoriesRetrieval": false,
    "enableAutoFiltering": false
  }
}
```

Additional parameters for Algolia AI features.
Used to enable [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) and other AI-powered capabilities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryCategorization|[searchExtensionsQueryCategorization](#schemasearchextensionsquerycategorization)|false|none|Parameters for the [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) AI feature.|

<h2 id="tocS_searchForHitsOptions">searchForHitsOptions</h2>
<!-- backwards compatibility -->
<a id="schemasearchforhitsoptions"></a>
<a id="schema_searchForHitsOptions"></a>
<a id="tocSsearchforhitsoptions"></a>
<a id="tocssearchforhitsoptions"></a>

```json
{
  "indexName": "products",
  "type": "default",
  "extensions": {
    "queryCategorization": {
      "enableCategoriesRetrieval": false,
      "enableAutoFiltering": false
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexName|[indexName](#schemaindexname)|true|none|Index name (case-sensitive).|
|type|[searchTypeDefault](#schemasearchtypedefault)|false|none|- `default`: perform a search query.<br>- `facet` [searches for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).<br>|
|extensions|[searchExtensions](#schemasearchextensions)|false|none|Additional parameters for Algolia AI features.<br>Used to enable [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) and other AI-powered capabilities.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|default|

<h2 id="tocS_SearchForHits">SearchForHits</h2>
<!-- backwards compatibility -->
<a id="schemasearchforhits"></a>
<a id="schema_SearchForHits"></a>
<a id="tocSsearchforhits"></a>
<a id="tocssearchforhits"></a>

```json
{
  "params": "hitsPerPage=2&getRankingInfo=1",
  "indexName": "products",
  "type": "default",
  "extensions": {
    "queryCategorization": {
      "enableCategoriesRetrieval": false,
      "enableAutoFiltering": false
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[searchParamsString](#schemasearchparamsstring)|false|none|Search parameters as query string.|
|*oneOf*|[searchParamsObject](#schemasearchparamsobject)|false|none|Each parameter value, including the `query` must not be larger than 512 bytes.|
|indexName|[indexName](#schemaindexname)|true|none|Index name (case-sensitive).|
|type|[searchTypeDefault](#schemasearchtypedefault)|false|none|- `default`: perform a search query.<br>- `facet` [searches for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).<br>|
|extensions|[searchExtensions](#schemasearchextensions)|false|none|Additional parameters for Algolia AI features.<br>Used to enable [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) and other AI-powered capabilities.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|default|

<h2 id="tocS_facetQuery">facetQuery</h2>
<!-- backwards compatibility -->
<a id="schemafacetquery"></a>
<a id="schema_facetQuery"></a>
<a id="tocSfacetquery"></a>
<a id="tocsfacetquery"></a>

```json
"george"
```

Text to search inside the facet's values.

<h2 id="tocS_maxFacetHits">maxFacetHits</h2>
<!-- backwards compatibility -->
<a id="schemamaxfacethits"></a>
<a id="schema_maxFacetHits"></a>
<a id="tocSmaxfacethits"></a>
<a id="tocsmaxfacethits"></a>

```json
10
```

Maximum number of facet values to return when [searching for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).

<h2 id="tocS_searchTypeFacet">searchTypeFacet</h2>
<!-- backwards compatibility -->
<a id="schemasearchtypefacet"></a>
<a id="schema_searchTypeFacet"></a>
<a id="tocSsearchtypefacet"></a>
<a id="tocssearchtypefacet"></a>

```json
"facet"
```

- `default`: perform a search query.
- `facet` [searches for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).

<h2 id="tocS_searchForFacetsOptions">searchForFacetsOptions</h2>
<!-- backwards compatibility -->
<a id="schemasearchforfacetsoptions"></a>
<a id="schema_searchForFacetsOptions"></a>
<a id="tocSsearchforfacetsoptions"></a>
<a id="tocssearchforfacetsoptions"></a>

```json
{
  "facet": "string",
  "indexName": "products",
  "facetQuery": "george",
  "maxFacetHits": 10,
  "type": "facet"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet|string|true|none|Facet name.|
|indexName|[indexName](#schemaindexname)|true|none|Index name (case-sensitive).|
|facetQuery|[facetQuery](#schemafacetquery)|false|none|Text to search inside the facet's values.|
|maxFacetHits|[maxFacetHits](#schemamaxfacethits)|false|none|Maximum number of facet values to return when [searching for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).|
|type|[searchTypeFacet](#schemasearchtypefacet)|true|none|- `default`: perform a search query.<br>- `facet` [searches for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|facet|

<h2 id="tocS_SearchForFacets">SearchForFacets</h2>
<!-- backwards compatibility -->
<a id="schemasearchforfacets"></a>
<a id="schema_SearchForFacets"></a>
<a id="tocSsearchforfacets"></a>
<a id="tocssearchforfacets"></a>

```json
{
  "params": "hitsPerPage=2&getRankingInfo=1",
  "facet": "string",
  "indexName": "products",
  "facetQuery": "george",
  "maxFacetHits": 10,
  "type": "facet"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[searchParamsString](#schemasearchparamsstring)|false|none|Search parameters as query string.|
|*oneOf*|[searchParamsObject](#schemasearchparamsobject)|false|none|Each parameter value, including the `query` must not be larger than 512 bytes.|
|facet|string|true|none|Facet name.|
|indexName|[indexName](#schemaindexname)|true|none|Index name (case-sensitive).|
|facetQuery|[facetQuery](#schemafacetquery)|false|none|Text to search inside the facet's values.|
|maxFacetHits|[maxFacetHits](#schemamaxfacethits)|false|none|Maximum number of facet values to return when [searching for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).|
|type|[searchTypeFacet](#schemasearchtypefacet)|true|none|- `default`: perform a search query.<br>- `facet` [searches for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|facet|

<h2 id="tocS_SearchQuery">SearchQuery</h2>
<!-- backwards compatibility -->
<a id="schemasearchquery"></a>
<a id="schema_SearchQuery"></a>
<a id="tocSsearchquery"></a>
<a id="tocssearchquery"></a>

```json
{
  "params": "hitsPerPage=2&getRankingInfo=1",
  "indexName": "products",
  "type": "default",
  "extensions": {
    "queryCategorization": {
      "enableCategoriesRetrieval": false,
      "enableAutoFiltering": false
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SearchForHits](#schemasearchforhits)|false|none|none|
|*oneOf*|[SearchForFacets](#schemasearchforfacets)|false|none|none|

<h2 id="tocS_searchStrategy">searchStrategy</h2>
<!-- backwards compatibility -->
<a id="schemasearchstrategy"></a>
<a id="schema_searchStrategy"></a>
<a id="tocSsearchstrategy"></a>
<a id="tocssearchstrategy"></a>

```json
"none"
```

Strategy for multiple search queries:

- `none`. Run all queries.
- `stopIfEnoughMatches`. Run the queries one by one, stopping as soon as a query matches at least the `hitsPerPage` number of results.

<h2 id="tocS_searchForFacetValuesResponse">searchForFacetValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchforfacetvaluesresponse"></a>
<a id="schema_searchForFacetValuesResponse"></a>
<a id="tocSsearchforfacetvaluesresponse"></a>
<a id="tocssearchforfacetvaluesresponse"></a>

```json
{
  "facetHits": [
    {
      "value": "Mobile phone",
      "highlighted": "<em>George</em> <em>Clo</em>oney",
      "count": 0
    }
  ],
  "exhaustiveFacetsCount": true,
  "processingTimeMS": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facetHits|[object]|true|none|Matching facet values.|
|exhaustiveFacetsCount|boolean|true|none|Whether the facet count is exhaustive (true) or approximate (false).<br>For more information, see [Why are my facet and hit counts not accurate](https://support.algolia.com/hc/articles/4406975248145-Why-are-my-facet-and-hit-counts-not-accurate).<br>|
|processingTimeMS|[processingTimeMS](#schemaprocessingtimems)|false|none|Time the server took to process the request, in milliseconds.|

<h2 id="tocS_searchResponsePartial">searchResponsePartial</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponsepartial"></a>
<a id="schema_searchResponsePartial"></a>
<a id="tocSsearchresponsepartial"></a>
<a id="tocssearchresponsepartial"></a>

```json
{
  "abTestID": 0,
  "abTestVariantID": 1,
  "aroundLatLng": "40.71,-74.01",
  "automaticRadius": "string",
  "exhaustive": {
    "facetsCount": true,
    "facetValues": true,
    "nbHits": true,
    "rulesMatch": true,
    "typo": true
  },
  "appliedRules": [
    {}
  ],
  "exhaustiveFacetsCount": true,
  "exhaustiveNbHits": true,
  "exhaustiveTypo": true,
  "facets": {
    "category": {
      "food": 1,
      "tech": 42
    }
  },
  "facets_stats": {
    "property1": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    },
    "property2": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    }
  },
  "index": "indexName",
  "indexUsed": "indexNameAlt",
  "message": "string",
  "nbSortedHits": 20,
  "parsedQuery": "george clo",
  "processingTimeMS": 20,
  "processingTimingsMS": {},
  "queryAfterRemoval": "string",
  "redirect": {
    "index": [
      {
        "source": "string",
        "dest": "string",
        "reason": "string",
        "succeed": true,
        "data": {
          "ruleObjectID": "string"
        }
      }
    ]
  },
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "serverTimeMS": 20,
  "serverUsed": "c2-uk-3.algolia.net",
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "queryID": "a00dbc80a8d13c4565a442e7e2dca80a",
  "_automaticInsights": true,
  "page": 0,
  "nbHits": 20,
  "nbPages": 1,
  "hitsPerPage": 20,
  "hits": [
    {
      "objectID": "test-record-123",
      "_highlightResult": {
        "property1": {},
        "property2": {}
      },
      "_snippetResult": {
        "property1": {},
        "property2": {}
      },
      "_rankingInfo": {
        "filters": 0,
        "firstMatchedWord": 0,
        "geoDistance": 0,
        "geoPrecision": 1,
        "matchedGeoLocation": {
          "lat": 0,
          "lng": 0,
          "distance": 0
        },
        "personalization": {
          "filtersScore": 0,
          "rankingScore": 0,
          "score": 0
        },
        "nbExactWords": 0,
        "nbTypos": 0,
        "promoted": true,
        "proximityDistance": 0,
        "userScore": 0,
        "words": 1,
        "promotedByReRanking": true
      },
      "_distinctSeqID": 0
    }
  ],
  "query": "",
  "params": "query=a&hitsPerPage=20",
  "extensions": {
    "queryCategorization": {
      "normalizedQuery": "string",
      "count": 0,
      "type": "narrow",
      "categories": [
        {
          "bin": "certain",
          "hierarchyPath": [
            {
              "facetName": "string",
              "facetValue": "string",
              "depth": 0
            }
          ]
        }
      ],
      "autofiltering": {
        "enabled": true,
        "maxDepth": 0,
        "facetFilters": [
          "string"
        ],
        "optionalFilters": [
          "string"
        ]
      }
    }
  }
}
```

Partial search response returned when the `responseFields` parameter excludes
fields like `hits`. Contains all possible search response properties but
none are required, so it acts as an unconditional fallback during oneOf
deserialization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abTestID|integer|false|none|A/B test ID. This is only included in the response for indices that are part of an A/B test.|
|abTestVariantID|integer|false|none|Variant ID. This is only included in the response for indices that are part of an A/B test.|
|aroundLatLng|string|false|none|Computed geographical location.|
|automaticRadius|string|false|none|Distance from a central coordinate provided by `aroundLatLng`.|
|exhaustive|object|false|none|Whether certain properties of the search response are calculated exhaustive (exact) or approximated.|
|appliedRules|[object]|false|none|Rules applied to the query.|
|exhaustiveFacetsCount|boolean|false|none|**Deprecated.** See the `facetsCount` field of the `exhaustive` object in the response.|
|exhaustiveNbHits|boolean|false|none|**Deprecated.** See the `nbHits` field of the `exhaustive` object in the response.|
|exhaustiveTypo|boolean|false|none|**Deprecated.** See the `typo` field of the `exhaustive` object in the response.|
|facets|object|false|none|Facet counts.|
|facets_stats|object|false|none|Statistics for numerical facets.|
|index|string|false|none|Index name used for the query.|
|indexUsed|string|false|none|Index name used for the query. During A/B testing, the targeted index isn't always the index used by the query.|
|message|string|false|none|Warnings about the query.|
|nbSortedHits|integer|false|none|Number of hits selected and sorted by the relevant sort algorithm.|
|parsedQuery|string|false|none|Post-[normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/#what-does-normalization-mean) query string that will be searched.|
|processingTimeMS|[processingTimeMS](#schemaprocessingtimems)|false|none|Time the server took to process the request, in milliseconds.|
|processingTimingsMS|object|false|none|Experimental. List of processing steps and their times, in milliseconds. You can use this list to investigate performance issues.|
|queryAfterRemoval|string|false|none|Markup text indicating which parts of the original query have been removed to retrieve a non-empty result set.|
|redirect|object|false|none|[Redirect results to a URL](https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting/how-to/redirects), this this parameter is for internal use only.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|serverTimeMS|integer|false|none|Time the server took to process the request, in milliseconds.|
|serverUsed|string|false|none|Host name of the server that processed the request.|
|userData|[userData](#schemauserdata)|false|none|An object with custom data.<br><br>You can store up to 32kB as custom data.<br>|
|queryID|string|false|none|Unique identifier for the query. This is used for [click analytics](https://www.algolia.com/doc/guides/analytics/click-analytics).|
|_automaticInsights|boolean|false|none|Whether automatic events collection is enabled for the application.|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|nbHits|[nbHits](#schemanbhits)|false|none|Number of results (hits).|
|nbPages|[nbPages](#schemanbpages)|false|none|Number of pages of results.|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|hits|[[hit](#schemahit)]|false|none|Search results (hits).<br><br>Hits are records from your index that match the search criteria, augmented with additional attributes, such as, for highlighting.<br>|
|query|[query](#schemaquery)|false|none|Search query.|
|params|string|false|none|URL-encoded string of all search parameters.|
|extensions|[responseExtensions](#schemaresponseextensions)|false|none|AI-generated metadata returned alongside search results.<br>Present when Algolia AI features such as [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) are enabled.<br>|

<h2 id="tocS_searchResult">searchResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchresult"></a>
<a id="schema_searchResult"></a>
<a id="tocSsearchresult"></a>
<a id="tocssearchresult"></a>

```json
{
  "abTestID": 0,
  "abTestVariantID": 1,
  "aroundLatLng": "40.71,-74.01",
  "automaticRadius": "string",
  "exhaustive": {
    "facetsCount": true,
    "facetValues": true,
    "nbHits": true,
    "rulesMatch": true,
    "typo": true
  },
  "appliedRules": [
    {}
  ],
  "exhaustiveFacetsCount": true,
  "exhaustiveNbHits": true,
  "exhaustiveTypo": true,
  "facets": {
    "category": {
      "food": 1,
      "tech": 42
    }
  },
  "facets_stats": {
    "property1": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    },
    "property2": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    }
  },
  "index": "indexName",
  "indexUsed": "indexNameAlt",
  "message": "string",
  "nbSortedHits": 20,
  "parsedQuery": "george clo",
  "processingTimeMS": 20,
  "processingTimingsMS": {},
  "queryAfterRemoval": "string",
  "redirect": {
    "index": [
      {
        "source": "string",
        "dest": "string",
        "reason": "string",
        "succeed": true,
        "data": {
          "ruleObjectID": "string"
        }
      }
    ]
  },
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "serverTimeMS": 20,
  "serverUsed": "c2-uk-3.algolia.net",
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "queryID": "a00dbc80a8d13c4565a442e7e2dca80a",
  "_automaticInsights": true,
  "page": 0,
  "nbHits": 20,
  "nbPages": 1,
  "hitsPerPage": 20,
  "hits": [
    {
      "objectID": "test-record-123",
      "_highlightResult": {
        "property1": {},
        "property2": {}
      },
      "_snippetResult": {
        "property1": {},
        "property2": {}
      },
      "_rankingInfo": {
        "filters": 0,
        "firstMatchedWord": 0,
        "geoDistance": 0,
        "geoPrecision": 1,
        "matchedGeoLocation": {
          "lat": 0,
          "lng": 0,
          "distance": 0
        },
        "personalization": {
          "filtersScore": 0,
          "rankingScore": 0,
          "score": 0
        },
        "nbExactWords": 0,
        "nbTypos": 0,
        "promoted": true,
        "proximityDistance": 0,
        "userScore": 0,
        "words": 1,
        "promotedByReRanking": true
      },
      "_distinctSeqID": 0
    }
  ],
  "query": "",
  "params": "query=a&hitsPerPage=20",
  "extensions": {
    "queryCategorization": {
      "normalizedQuery": "string",
      "count": 0,
      "type": "narrow",
      "categories": [
        {
          "bin": "certain",
          "hierarchyPath": [
            {
              "facetName": "string",
              "facetValue": "string",
              "depth": 0
            }
          ]
        }
      ],
      "autofiltering": {
        "enabled": true,
        "maxDepth": 0,
        "facetFilters": [
          "string"
        ],
        "optionalFilters": [
          "string"
        ]
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[searchResponse](#schemasearchresponse)|false|none|none|
|*oneOf*|[searchForFacetValuesResponse](#schemasearchforfacetvaluesresponse)|false|none|none|
|*oneOf*|[searchResponsePartial](#schemasearchresponsepartial)|false|none|Partial search response returned when the `responseFields` parameter excludes<br>fields like `hits`. Contains all possible search response properties but<br>none are required, so it acts as an unconditional fallback during oneOf<br>deserialization.<br>|

<h2 id="tocS_cursor">cursor</h2>
<!-- backwards compatibility -->
<a id="schemacursor"></a>
<a id="schema_cursor"></a>
<a id="tocScursor"></a>
<a id="tocscursor"></a>

```json
{
  "cursor": "jMDY3M2MwM2QwMWUxMmQwYWI0ZTN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|Cursor to get the next page of the response.<br><br>The parameter must match the value returned in the response of a previous request.<br>The last page of the response does not return a `cursor` attribute.<br>|

<h2 id="tocS_browseParamsObject">browseParamsObject</h2>
<!-- backwards compatibility -->
<a id="schemabrowseparamsobject"></a>
<a id="schema_browseParamsObject"></a>
<a id="tocSbrowseparamsobject"></a>
<a id="tocsbrowseparamsobject"></a>

```json
{
  "query": "",
  "similarQuery": "comedy drama crime Macy Buscemi",
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "optionalFilters": [
    "category:Book",
    "author:John Doe"
  ],
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "sumOrFiltersScores": false,
  "restrictSearchableAttributes": [
    "title",
    "author"
  ],
  "facets": [
    "*"
  ],
  "facetingAfterDistinct": false,
  "page": 0,
  "offset": 0,
  "length": 0,
  "aroundLatLng": "40.71,-74.01",
  "aroundLatLngViaIP": false,
  "aroundRadius": 1,
  "aroundPrecision": 10,
  "minimumAroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ],
  "naturalLanguages": [],
  "ruleContexts": [
    "mobile"
  ],
  "personalizationImpact": 100,
  "userToken": "test-user-123",
  "getRankingInfo": false,
  "synonyms": true,
  "clickAnalytics": false,
  "analytics": true,
  "analyticsTags": [],
  "percentileComputation": true,
  "enableABTest": true,
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ],
  "cursor": "jMDY3M2MwM2QwMWUxMmQwYWI0ZTN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[query](#schemaquery)|false|none|Search query.|
|similarQuery|[similarQuery](#schemasimilarquery)|false|none|Keywords to be used instead of the search query to conduct a more broader search.<br>Using the `similarQuery` parameter changes other settings<br>- `queryType` is set to `prefixNone`.<br>- `removeStopWords` is set to true.<br>- `words` is set as the first ranking criterion.<br>- All remaining words are treated as `optionalWords`.<br>Since the `similarQuery` is supposed to do a broad search, they usually return many results.<br>Combine it with `filters` to narrow down the list of results.<br>|
|filters|[filters](#schemafilters)|false|none|Filter expression to only include items that match the filter criteria in the response.<br><br>You can use these filter expressions:<br><br>- **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>- **Ranges.** `<facet>:<lower> TO <upper>`, where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive).<br>- **Facet filters.** `<facet>:<value>`, where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value.<br>- **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive).<br>- **Boolean filters.** `<facet>: true \| false`.<br><br>You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:<br><br>- You can only combine filters of the same type with `OR`.<br>  **Not supported:** `facet:value OR num > 3`.<br>- You can't use `NOT` with combinations of filters.<br>  **Not supported:** `NOT(facet:value OR facet:value)`<br>- You can't combine conjunctions (`AND`) with `OR`.<br>  **Not supported:** `facet:value OR (facet:value AND facet:value)`<br><br>Use quotes if the facet attribute name or facet value contains spaces, keywords (`OR`, `AND`, `NOT`), or quotes.<br>If a facet attribute is an array, the filter matches if it matches at least one element of the array.<br><br>For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering).<br>|
|facetFilters|[facetFilters](#schemafacetfilters)|false|none|Filter the search by facet values, so that only records with the same facet values are retrieved.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>- `[filter1, filter2]` is interpreted as `filter1 AND filter2`.<br>- `[[filter1, filter2], filter3]` is interpreted as `filter1 OR filter2 AND filter3`.<br>- `facet:-value` is interpreted as `NOT facet:value`.<br><br>While it's best to avoid attributes that start with a `-`, you can still filter them by escaping with a backslash:<br>`facet:\-value`.<br>|
|optionalFilters|[optionalFilters](#schemaoptionalfilters)|false|none|Filters to promote or demote records in the search results.<br><br>Optional filters work like facet filters, but they don't exclude records from the search results.<br>Records that match the optional filter rank before records that don't match.<br>If you're using a negative filter `facet:-value`, matching records rank after records that don't match.<br><br>- Optional filters are applied _after_ sort-by attributes.<br>- Optional filters are applied _before_ custom ranking attributes (in the default [ranking](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria)).<br>- Optional filters don't work with numeric attributes.<br>- On virtual replicas, optional filters are applied _after_ the replica's [relevant sort](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|numericFilters|[numericFilters](#schemanumericfilters)|false|none|Filter by numeric facets.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>You can use numeric comparison operators: `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>Comparisons are precise up to 3 decimals.<br>You can also provide ranges: `facet:<lower> TO <upper>`. The range includes the lower and upper boundaries.<br>The same combination rules apply as for `facetFilters`.<br>|
|tagFilters|[tagFilters](#schematagfilters)|false|none|Filter the search by values of the special `_tags` attribute.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>Different from regular facets, `_tags` can only be used for filtering (including or excluding records).<br>You won't get a facet count.<br>The same combination and escaping rules apply as for `facetFilters`.<br>|
|sumOrFiltersScores|[sumOrFiltersScores](#schemasumorfiltersscores)|false|none|Whether to sum all filter scores.<br>If true, all filter scores are summed.<br>Otherwise, the maximum filter score is kept.<br>For more information, see [filter scores](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/filter-scoring/#accumulate-scores-with-sumorfiltersscores).<br>|
|restrictSearchableAttributes|[restrictSearchableAttributes](#schemarestrictsearchableattributes)|false|none|Restricts a search to a subset of your searchable attributes.<br>Attribute names are case-sensitive.<br>|
|facets|[string]|false|none|Facets for which to retrieve facet values that match the search criteria and the number of matching facet values.<br>To retrieve all facets, use the wildcard character `*`.<br>For more information, see [facets](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#contextual-facet-values-and-counts).<br>|
|facetingAfterDistinct|[facetingAfterDistinct](#schemafacetingafterdistinct)|false|none|Whether faceting should be applied after deduplication with `distinct`.<br>This leads to accurate facet counts when using faceting in combination with `distinct`.<br>It's usually better to use `afterDistinct` modifiers in the `attributesForFaceting` setting,<br>as `facetingAfterDistinct` only computes correct facet counts if all records have the same facet values for the `attributeForDistinct`.<br>|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|offset|integer|false|none|Position of the first hit to retrieve.|
|length|[length](#schemalength)|false|none|Number of hits to retrieve (used in combination with `offset`).|
|aroundLatLng|[aroundLatLng](#schemaaroundlatlng)|false|none|Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.<br><br>Only records included within a circle around this central location are included in the results.<br>The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings.<br>This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.<br>|
|aroundLatLngViaIP|[aroundLatLngViaIP](#schemaaroundlatlngviaip)|false|none|Whether to obtain the coordinates from the request's IP address.|
|aroundRadius|[aroundRadius](#schemaaroundradius)|false|none|Maximum radius for a search around a central location.<br><br>This parameter works in combination with the `aroundLatLng` and `aroundLatLngViaIP` parameters.<br>By default, the search radius is determined automatically from the density of hits around the central location.<br>The search radius is small if there are many hits close to the central coordinates.<br>|
|aroundPrecision|[aroundPrecision](#schemaaroundprecision)|false|none|Precision of a coordinate-based search in meters to group results with similar distances.<br><br>The Geo ranking criterion considers all matches within the same range of distances to be equal.<br>|
|minimumAroundRadius|[minimumAroundRadius](#schemaminimumaroundradius)|false|none|Minimum radius (in meters) for a search around a location when `aroundRadius` isn't set.|
|insideBoundingBox|[insideBoundingBox](#schemainsideboundingbox)|false|none|none|
|insidePolygon|[insidePolygon](#schemainsidepolygon)|false|none|Coordinates of a polygon in which to search.<br><br>Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude.<br>Provide multiple polygons as nested arrays.<br>For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).<br>This parameter is ignored if you also specify `insideBoundingBox`.<br>|
|naturalLanguages|[naturalLanguages](#schemanaturallanguages)|false|none|ISO language codes that adjust settings that are useful for processing natural language queries (as opposed to keyword searches).<br>- Sets `removeStopWords` and `ignorePlurals` to the list of provided languages.<br>- Sets `removeWordsIfNoResults` to `allOptional`.<br>- Adds a `natural_language` attribute to `ruleContexts` and `analyticsTags`.<br>|
|ruleContexts|[ruleContexts](#schemarulecontexts)|false|none|Assigns a rule context to the search query.<br>[Rule contexts](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/how-to/customize-search-results-by-platform/#assign-context) are strings that you can use to trigger matching rules.<br>|
|personalizationImpact|[personalizationImpact](#schemapersonalizationimpact)|false|none|Impact that Personalization should have on this search.<br>The higher this value is, the more Personalization determines the ranking compared to other factors.<br>For more information, see [Understanding Personalization impact](https://www.algolia.com/doc/guides/personalization/personalizing-results/in-depth/configuring-personalization/#understanding-personalization-impact).<br>|
|userToken|[userToken](#schemausertoken)|false|none|Unique pseudonymous or anonymous user identifier.<br><br>This helps with analytics and click and conversion events.<br>For more information, see [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken).<br>|
|getRankingInfo|[getRankingInfo](#schemagetrankinginfo)|false|none|Whether the search response should include detailed ranking information.|
|synonyms|[synonyms](#schemasynonyms)|false|none|Whether to take into account an index's synonyms for this search.|
|clickAnalytics|[clickAnalytics](#schemaclickanalytics)|false|none|Whether to include a `queryID` attribute in the response.<br>The query ID is a unique identifier for a search query and is required for tracking [click and conversion events](https://www.algolia.com/doc/guides/sending-events/getting-started).<br>|
|analytics|[analytics](#schemaanalytics)|false|none|Whether this search will be included in Analytics.|
|analyticsTags|[analyticsTags](#schemaanalyticstags)|false|none|Tags to apply to the query for [segmenting analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments).|
|percentileComputation|[percentileComputation](#schemapercentilecomputation)|false|none|Whether to include this search when calculating processing-time percentiles.|
|enableABTest|[enableABTest](#schemaenableabtest)|false|none|Whether to enable A/B testing for this search.|
|attributesToRetrieve|[attributesToRetrieve](#schemaattributestoretrieve)|false|none|Attributes to include in the API response.<br>To reduce the size of your response, you can retrieve only some of the attributes.<br>Attribute names are case-sensitive<br>- `*` retrieves all attributes, except attributes included in the `customRanking` and `unretrievableAttributes` settings.<br>- To retrieve all attributes except a specific one, prefix the attribute with a dash and combine it with the `*`: `["*", "-ATTRIBUTE"]`.<br>- The `objectID` attribute is always included.<br>|
|ranking|[string]|false|none|Determines the order in which Algolia returns your results.<br><br>By default, each entry corresponds to a [ranking criteria](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria).<br>The tie-breaking algorithm sequentially applies each criterion in the order they're specified.<br>If you configure a replica index for [sorting by an attribute](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-by-attribute),<br>you put the sorting attribute at the top of the list.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>Before you modify the default setting,<br>test your changes in the dashboard,<br>and by [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing).<br>|
|relevancyStrictness|[relevancyStrictness](#schemarelevancystrictness)|false|none|Relevancy threshold below which less relevant results aren't included in the results.<br>You can only set `relevancyStrictness` on [virtual replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/#standard-and-virtual-replicas).<br>Use this setting to strike a balance between the relevance and number of returned results.<br>|
|attributesToHighlight|[attributesToHighlight](#schemaattributestohighlight)|false|none|Attributes to highlight.<br>By default, all searchable attributes are highlighted.<br>Use `*` to highlight all attributes or use an empty array `[]` to turn off highlighting.<br>Attribute names are case-sensitive<br>With highlighting, strings that match the search query are surrounded by HTML tags defined by `highlightPreTag` and `highlightPostTag`.<br>You can use this to visually highlight matching parts of a search query in your UI<br>For more information, see [Highlighting and snippeting](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/highlighting-snippeting/js).<br>|
|attributesToSnippet|[attributesToSnippet](#schemaattributestosnippet)|false|none|Attributes for which to enable snippets.<br>Attribute names are case-sensitive<br>Snippets provide additional context to matched words.<br>If you enable snippets, they include 10 words, including the matched word.<br>The matched word will also be wrapped by HTML tags for highlighting.<br>You can adjust the number of words with the following notation: `ATTRIBUTE:NUMBER`,<br>where `NUMBER` is the number of words to be extracted.<br>|
|highlightPreTag|[highlightPreTag](#schemahighlightpretag)|false|none|HTML tag to insert before the highlighted parts in all highlighted results and snippets.|
|highlightPostTag|[highlightPostTag](#schemahighlightposttag)|false|none|HTML tag to insert after the highlighted parts in all highlighted results and snippets.|
|snippetEllipsisText|[snippetEllipsisText](#schemasnippetellipsistext)|false|none|String used as an ellipsis indicator when a snippet is truncated.|
|restrictHighlightAndSnippetArrays|[restrictHighlightAndSnippetArrays](#schemarestricthighlightandsnippetarrays)|false|none|Whether to restrict highlighting and snippeting to items that at least partially matched the search query.<br>By default, all items are highlighted and snippeted.<br>|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|minWordSizefor1Typo|[minWordSizefor1Typo](#schemaminwordsizefor1typo)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [one typo](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|minWordSizefor2Typos|[minWordSizefor2Typos](#schemaminwordsizefor2typos)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [two typos](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|typoTolerance|[typoTolerance](#schematypotolerance)|false|none|Whether [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance) is enabled and how it is applied.<br><br>If typo tolerance is true, `min`, or `strict`, [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) are also active.<br>|
|allowTyposOnNumericTokens|[allowTyposOnNumericTokens](#schemaallowtyposonnumerictokens)|false|none|Whether to allow typos on numbers in the search query.<br>Turn off this setting to reduce the number of irrelevant matches<br>when searching in large sets of similar numbers.<br>|
|disableTypoToleranceOnAttributes|[disableTypoToleranceOnAttributes](#schemadisabletypotoleranceonattributes)|false|none|Attributes for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance).<br>Attribute names are case-sensitive<br>Returning only exact matches can help when<br>- [Searching in hyphenated attributes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes).<br>- Reducing the number of matches when you have too many.<br>  This can happen with attributes that are long blocks of text, such as product descriptions.<br>Consider alternatives such as `disableTypoToleranceOnWords` or adding synonyms if your attributes have intentional unusual spellings that might look like typos.<br>|
|ignorePlurals|[ignorePlurals](#schemaignoreplurals)|false|none|Treat singular, plurals, and other forms of declensions as equivalent.<br>Only use this feature for the languages used in your index.<br>|
|removeStopWords|[removeStopWords](#schemaremovestopwords)|false|none|Removes stop words from the search query.<br><br>Stop words are common words like articles, conjunctions, prepositions, or pronouns that have little or no meaning on their own.<br>In English, "the", "a", or "and" are stop words.<br><br>Only use this feature for the languages used in your index.<br>|
|queryLanguages|[queryLanguages](#schemaquerylanguages)|false|none|Languages for language-specific query processing steps such as plurals, stop-word removal, and word-detection dictionaries.<br>This setting sets a default list of languages used by the `removeStopWords` and `ignorePlurals` settings.<br>This setting also sets a dictionary for word detection in the logogram-based [CJK](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/#normalization-for-logogram-based-languages-cjk) languages.<br>To support this, place the CJK language **first**.<br>**Always specify a query language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|decompoundQuery|[decompoundQuery](#schemadecompoundquery)|false|none|Whether to split compound words in the query into their building blocks.<br>For more information, see [Word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#split-compound-words).<br>Word segmentation is supported for these languages: German, Dutch, Finnish, Swedish, and Norwegian.<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|enableRules|[enableRules](#schemaenablerules)|false|none|Whether to enable rules.|
|enablePersonalization|[enablePersonalization](#schemaenablepersonalization)|false|none|Whether to enable Personalization.|
|queryType|[queryType](#schemaquerytype)|false|none|Determines if and how query words are interpreted as prefixes.<br><br>By default, only the last query word is treated as a prefix (`prefixLast`).<br>To turn off prefix search, use `prefixNone`.<br>Avoid `prefixAll`, which treats all query words as prefixes.<br>This might lead to counterintuitive results and makes your search slower.<br><br>For more information, see [Prefix searching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/prefix-searching).<br>|
|removeWordsIfNoResults|[removeWordsIfNoResults](#schemaremovewordsifnoresults)|false|none|Strategy for removing words from the query when it doesn't return any results.<br>This helps to avoid returning empty search results.<br><br>- `none`.<br>  No words are removed when a query doesn't return results.<br><br>- `lastWords`.<br>  Treat the last (then second to last, then third to last) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `firstWords`.<br>  Treat the first (then second, then third) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `allOptional`.<br>  Treat all words as optional.<br><br>For more information, see [Remove words to improve results](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/in-depth/why-use-remove-words-if-no-results).<br>|
|mode|[mode](#schemamode)|false|none|Search mode the index will use to query for results.<br><br>This setting only applies to indices, for which Algolia enabled NeuralSearch for you.<br>|
|semanticSearch|[semanticSearch](#schemasemanticsearch)|false|none|Settings for the semantic search part of NeuralSearch.<br>Only used when `mode` is `neuralSearch`.<br>|
|advancedSyntax|[advancedSyntax](#schemaadvancedsyntax)|false|none|Whether to support phrase matching and excluding words from search queries.<br>Use the `advancedSyntaxFeatures` parameter to control which feature is supported.<br>|
|optionalWords|[optionalWords](#schemaoptionalwords)|false|none|Words that should be considered optional when found in the query.<br><br>By default, records must match all words in the search query to be included in the search results.<br>Adding optional words can increase the number of search results by running an additional search query that doesn't include the optional words.<br>For example, if the search query is "action video" and "video" is optional,<br>the search engine runs two queries: one for "action video" and one for "action".<br>Records that match all words are ranked higher.<br><br>For a search query with 4 or more words **and** all its words are optional,<br>the number of matched words required for a record to be included in the search results increases for every 1,000 records:<br><br>- If `optionalWords` has fewer than 10 words, the required number of matched words increases by 1:<br>  results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 2 matched words.<br>- If `optionalWords` has 10 or more words, the required number of matched words increases by the number of optional words divided by 5 (rounded down).<br>  Example: with 18 optional words, results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 4 matched words.<br><br>For more information, see [Optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).<br>|
|disableExactOnAttributes|[disableExactOnAttributes](#schemadisableexactonattributes)|false|none|Searchable attributes for which you want to [turn off the Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes).<br>Attribute names are case-sensitive<br>This can be useful for attributes with long values, where the likelihood of an exact match is high,<br>such as product descriptions.<br>Turning off the Exact ranking criterion for these attributes favors exact matching on other attributes.<br>This reduces the impact of individual attributes with a lot of content on ranking.<br>|
|exactOnSingleWordQuery|[exactOnSingleWordQuery](#schemaexactonsinglewordquery)|false|none|Determines how the [Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes) is computed when the search query has only one word.<br><br>- `attribute`.<br>  The Exact ranking criterion is 1 if the query word and attribute value are the same.<br>  For example, a search for "road" will match the value "road", but not "road trip".<br><br>- `none`.<br>  The Exact ranking criterion is ignored on single-word searches.<br><br>- `word`.<br>  The Exact ranking criterion is 1 if the query word is found in the attribute value.<br>  The query word must have at least 3 characters and must not be a stop word.<br>  Only exact matches will be highlighted,<br>  partial and prefix matches won't.<br>|
|alternativesAsExact|[IndexSettings_alternativesAsExact](#schemaindexsettings_alternativesasexact)|false|none|Determine which plurals and synonyms should be considered an exact matches.<br>By default, Algolia treats singular and plural forms of a word, and single-word synonyms, as [exact](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#exact) matches when searching.<br>For example:<br>- "swimsuit" and "swimsuits" are treated the same.<br>- "swimsuit" and "swimwear" are treated the same (if they are [synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/#regular-synonyms)).<br>- `ignorePlurals`.<br>  Plurals and similar declensions added by the `ignorePlurals` setting are considered exact matches.<br>- `singleWordSynonym`.<br>  Single-word synonyms, such as "NY" = "NYC", are considered exact matches.<br>- `multiWordsSynonym`.<br>  Multi-word synonyms, such as "NY" = "New York", are considered exact matches.<br>|
|advancedSyntaxFeatures|[IndexSettings_advancedSyntaxFeatures](#schemaindexsettings_advancedsyntaxfeatures)|false|none|Advanced search syntax features you want to support.<br>- `exactPhrase`.<br>  Phrases in quotes must match exactly.<br>  For example, `sparkly blue "iPhone case"` only returns records with the exact string "iPhone case".<br>- `excludeWords`.<br>  Query words prefixed with a `-` must not occur in a record.<br>  For example, `search -engine` matches records that contain "search" but not "engine".<br>This setting only has an effect if `advancedSyntax` is true.<br>|
|distinct|[distinct](#schemadistinct)|false|none|Determines how many records of a group are included in the search results.<br><br>Records with the same value for the `attributeForDistinct` attribute are considered a group.<br>The `distinct` setting controls how many members of the group are returned.<br>This is useful for [deduplication and grouping](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#deduplicate-results-with-distinct).<br><br>The `distinct` setting is ignored if `attributeForDistinct` is not set.<br>|
|replaceSynonymsInHighlight|[replaceSynonymsInHighlight](#schemareplacesynonymsinhighlight)|false|none|Whether to replace a highlighted word with the matched synonym.<br>By default, the original words are highlighted even if a synonym matches.<br>For example, with `home` as a synonym for `house` and a search for `home`,<br>records matching either "home" or "house" are included in the search results,<br>and either "home" or "house" are highlighted<br>With `replaceSynonymsInHighlight` set to `true`, a search for `home` still matches the same records,<br>but all occurrences of "house" are replaced by "home" in the highlighted response.<br>|
|minProximity|[minProximity](#schemaminproximity)|false|none|Minimum proximity score for two matching words.<br>This adjusts the [Proximity ranking criterion](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#proximity)<br>by equally scoring matches that are farther apart<br>For example, if `minProximity` is 2, neighboring matches and matches with one word between them would have the same score.<br>|
|responseFields|[responseFields](#schemaresponsefields)|false|none|Properties to include in the API response of search and browse requests.<br>By default, all response properties are included.<br>To reduce the response size, you can select which properties should be included<br>An empty list may lead to an empty API response (except properties you can't exclude)<br>You can't exclude these properties:<br>`message`, `warning`, `cursor`, `abTestVariantID`,<br>or any property added by setting `getRankingInfo` to true<br>Your search depends on the `hits` field. If you omit this field, searches won't return any results.<br>Your UI might also depend on other properties, for example, for pagination.<br>Before restricting the response size, check the impact on your search experience.<br>|
|maxValuesPerFacet|[maxValuesPerFacet](#schemamaxvaluesperfacet)|false|none|Maximum number of facet values to return for each facet.|
|sortFacetValuesBy|[sortFacetValuesBy](#schemasortfacetvaluesby)|false|none|Order in which to retrieve facet values.<br>- `count`.<br>  Facet values are retrieved by decreasing count.<br>  The count is the number of matching records containing this facet value.<br>- `alpha`.<br>  Retrieve facet values alphabetically.<br>This setting doesn't influence how facet values are displayed in your UI (see `renderingContent`).<br>For more information, see [facet value display](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js).<br>|
|attributeCriteriaComputedByMinProximity|[attributeCriteriaComputedByMinProximity](#schemaattributecriteriacomputedbyminproximity)|false|none|Whether the best matching attribute should be determined by minimum proximity.<br>This setting only affects ranking if the Attribute ranking criterion comes before Proximity in the `ranking` setting.<br>If true, the best matching attribute is selected based on the minimum proximity of multiple matches.<br>Otherwise, the best matching attribute is determined by the order in the `searchableAttributes` setting.<br><br>Prefer `attributeCriteriaComputedBy`, which expresses the same two behaviors and adds the `sum` strategy.<br>If you set both, `attributeCriteriaComputedBy` takes precedence.<br>|
|attributeCriteriaComputedBy|[attributeCriteriaComputedBy](#schemaattributecriteriacomputedby)|false|none|Strategy for computing the Attribute ranking criterion.<br>This mainly affects multi-word queries with matches in more than one attribute.<br><br>The `ranking` setting decides whether `best` takes effect.<br>When Attribute comes after Proximity, which is the default order, the engine always uses the `minProximity` strategy and ignores `best`.<br>To select `best`, move Attribute before Proximity in `ranking`.<br>The `sum` strategy applies in both orders.<br><br>- `minProximity`.<br>  Pick the best matching attribute from the attributes that form the best proximity score.<br>  On an ordered attribute, the match position breaks ties.<br>- `best`.<br>  Pick the best matching attribute from all attributes that match any query word.<br>  On an ordered attribute, the match position breaks ties.<br>- `sum`.<br>  Add up a score for every query word instead of picking one attribute.<br>  Each word's score comes from the attribute it matched, and from its position in that attribute when the attribute is ordered.<br>  A query word that matches nothing adds a large penalty.<br>  A record with a lower total ranks higher.<br>  A record therefore cannot rank high only because one word of a multi-word query matched a top attribute.<br>  Use `sum` with short, relevant attributes, and set long-text attributes to unordered.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|enableReRanking|[enableReRanking](#schemaenablereranking)|false|none|Whether this search will use [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking).<br>This setting only has an effect if you activated Dynamic Re-Ranking for this index in the Algolia dashboard.<br>|
|reRankingApplyFilter|[reRankingApplyFilter](#schemarerankingapplyfilter) \| null|false|none|none|
|cursor|string|false|none|Cursor to get the next page of the response.<br><br>The parameter must match the value returned in the response of a previous request.<br>The last page of the response does not return a `cursor` attribute.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|naturalLanguages|af|
|naturalLanguages|ar|
|naturalLanguages|az|
|naturalLanguages|bg|
|naturalLanguages|bn|
|naturalLanguages|ca|
|naturalLanguages|cs|
|naturalLanguages|cy|
|naturalLanguages|da|
|naturalLanguages|de|
|naturalLanguages|el|
|naturalLanguages|en|
|naturalLanguages|eo|
|naturalLanguages|es|
|naturalLanguages|et|
|naturalLanguages|eu|
|naturalLanguages|fa|
|naturalLanguages|fi|
|naturalLanguages|fo|
|naturalLanguages|fr|
|naturalLanguages|ga|
|naturalLanguages|gl|
|naturalLanguages|he|
|naturalLanguages|hi|
|naturalLanguages|hu|
|naturalLanguages|hy|
|naturalLanguages|id|
|naturalLanguages|is|
|naturalLanguages|it|
|naturalLanguages|ja|
|naturalLanguages|ka|
|naturalLanguages|kk|
|naturalLanguages|ko|
|naturalLanguages|ku|
|naturalLanguages|ky|
|naturalLanguages|lt|
|naturalLanguages|lv|
|naturalLanguages|mi|
|naturalLanguages|mn|
|naturalLanguages|mr|
|naturalLanguages|ms|
|naturalLanguages|mt|
|naturalLanguages|nb|
|naturalLanguages|nl|
|naturalLanguages|no|
|naturalLanguages|ns|
|naturalLanguages|pl|
|naturalLanguages|ps|
|naturalLanguages|pt|
|naturalLanguages|pt-br|
|naturalLanguages|qu|
|naturalLanguages|ro|
|naturalLanguages|ru|
|naturalLanguages|sk|
|naturalLanguages|sq|
|naturalLanguages|sv|
|naturalLanguages|sw|
|naturalLanguages|ta|
|naturalLanguages|te|
|naturalLanguages|th|
|naturalLanguages|tl|
|naturalLanguages|tn|
|naturalLanguages|tr|
|naturalLanguages|tt|
|naturalLanguages|uk|
|naturalLanguages|ur|
|naturalLanguages|uz|
|naturalLanguages|zh|
|queryLanguages|af|
|queryLanguages|ar|
|queryLanguages|az|
|queryLanguages|bg|
|queryLanguages|bn|
|queryLanguages|ca|
|queryLanguages|cs|
|queryLanguages|cy|
|queryLanguages|da|
|queryLanguages|de|
|queryLanguages|el|
|queryLanguages|en|
|queryLanguages|eo|
|queryLanguages|es|
|queryLanguages|et|
|queryLanguages|eu|
|queryLanguages|fa|
|queryLanguages|fi|
|queryLanguages|fo|
|queryLanguages|fr|
|queryLanguages|ga|
|queryLanguages|gl|
|queryLanguages|he|
|queryLanguages|hi|
|queryLanguages|hu|
|queryLanguages|hy|
|queryLanguages|id|
|queryLanguages|is|
|queryLanguages|it|
|queryLanguages|ja|
|queryLanguages|ka|
|queryLanguages|kk|
|queryLanguages|ko|
|queryLanguages|ku|
|queryLanguages|ky|
|queryLanguages|lt|
|queryLanguages|lv|
|queryLanguages|mi|
|queryLanguages|mn|
|queryLanguages|mr|
|queryLanguages|ms|
|queryLanguages|mt|
|queryLanguages|nb|
|queryLanguages|nl|
|queryLanguages|no|
|queryLanguages|ns|
|queryLanguages|pl|
|queryLanguages|ps|
|queryLanguages|pt|
|queryLanguages|pt-br|
|queryLanguages|qu|
|queryLanguages|ro|
|queryLanguages|ru|
|queryLanguages|sk|
|queryLanguages|sq|
|queryLanguages|sv|
|queryLanguages|sw|
|queryLanguages|ta|
|queryLanguages|te|
|queryLanguages|th|
|queryLanguages|tl|
|queryLanguages|tn|
|queryLanguages|tr|
|queryLanguages|tt|
|queryLanguages|uk|
|queryLanguages|ur|
|queryLanguages|uz|
|queryLanguages|zh|
|queryType|prefixLast|
|queryType|prefixAll|
|queryType|prefixNone|
|removeWordsIfNoResults|none|
|removeWordsIfNoResults|lastWords|
|removeWordsIfNoResults|firstWords|
|removeWordsIfNoResults|allOptional|
|mode|neuralSearch|
|mode|keywordSearch|
|exactOnSingleWordQuery|attribute|
|exactOnSingleWordQuery|none|
|exactOnSingleWordQuery|word|
|alternativesAsExact|ignorePlurals|
|alternativesAsExact|singleWordSynonym|
|alternativesAsExact|multiWordsSynonym|
|alternativesAsExact|ignoreConjugations|
|advancedSyntaxFeatures|exactPhrase|
|advancedSyntaxFeatures|excludeWords|
|attributeCriteriaComputedBy|minProximity|
|attributeCriteriaComputedBy|best|
|attributeCriteriaComputedBy|sum|

<h2 id="tocS_browseParams">browseParams</h2>
<!-- backwards compatibility -->
<a id="schemabrowseparams"></a>
<a id="schema_browseParams"></a>
<a id="tocSbrowseparams"></a>
<a id="tocsbrowseparams"></a>

```json
{
  "query": "",
  "similarQuery": "comedy drama crime Macy Buscemi",
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "optionalFilters": [
    "category:Book",
    "author:John Doe"
  ],
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "sumOrFiltersScores": false,
  "restrictSearchableAttributes": [
    "title",
    "author"
  ],
  "facets": [
    "*"
  ],
  "facetingAfterDistinct": false,
  "page": 0,
  "offset": 0,
  "length": 0,
  "aroundLatLng": "40.71,-74.01",
  "aroundLatLngViaIP": false,
  "aroundRadius": 1,
  "aroundPrecision": 10,
  "minimumAroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ],
  "naturalLanguages": [],
  "ruleContexts": [
    "mobile"
  ],
  "personalizationImpact": 100,
  "userToken": "test-user-123",
  "getRankingInfo": false,
  "synonyms": true,
  "clickAnalytics": false,
  "analytics": true,
  "analyticsTags": [],
  "percentileComputation": true,
  "enableABTest": true,
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ],
  "cursor": "jMDY3M2MwM2QwMWUxMmQwYWI0ZTN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[browseParamsObject](#schemabrowseparamsobject)|false|none|none|
|*oneOf*|[searchParamsString](#schemasearchparamsstring)|false|none|Search parameters as query string.|

<h2 id="tocS_BrowsePagination">BrowsePagination</h2>
<!-- backwards compatibility -->
<a id="schemabrowsepagination"></a>
<a id="schema_BrowsePagination"></a>
<a id="tocSbrowsepagination"></a>
<a id="tocsbrowsepagination"></a>

```json
{
  "page": 0,
  "nbHits": 20,
  "nbPages": 1,
  "hitsPerPage": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|nbHits|[nbHits](#schemanbhits)|false|none|Number of results (hits).|
|nbPages|[nbPages](#schemanbpages)|false|none|Number of pages of results.|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|

<h2 id="tocS_browseResponse">browseResponse</h2>
<!-- backwards compatibility -->
<a id="schemabrowseresponse"></a>
<a id="schema_browseResponse"></a>
<a id="tocSbrowseresponse"></a>
<a id="tocsbrowseresponse"></a>

```json
{
  "abTestID": 0,
  "abTestVariantID": 1,
  "aroundLatLng": "40.71,-74.01",
  "automaticRadius": "string",
  "exhaustive": {
    "facetsCount": true,
    "facetValues": true,
    "nbHits": true,
    "rulesMatch": true,
    "typo": true
  },
  "appliedRules": [
    {}
  ],
  "exhaustiveFacetsCount": true,
  "exhaustiveNbHits": true,
  "exhaustiveTypo": true,
  "facets": {
    "category": {
      "food": 1,
      "tech": 42
    }
  },
  "facets_stats": {
    "property1": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    },
    "property2": {
      "min": 0,
      "max": 0,
      "avg": 0,
      "sum": 0
    }
  },
  "index": "indexName",
  "indexUsed": "indexNameAlt",
  "message": "string",
  "nbSortedHits": 20,
  "parsedQuery": "george clo",
  "processingTimeMS": 20,
  "processingTimingsMS": {},
  "queryAfterRemoval": "string",
  "redirect": {
    "index": [
      {
        "source": "string",
        "dest": "string",
        "reason": "string",
        "succeed": true,
        "data": {
          "ruleObjectID": "string"
        }
      }
    ]
  },
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "serverTimeMS": 20,
  "serverUsed": "c2-uk-3.algolia.net",
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "queryID": "a00dbc80a8d13c4565a442e7e2dca80a",
  "_automaticInsights": true,
  "page": 0,
  "nbHits": 20,
  "nbPages": 1,
  "hitsPerPage": 20,
  "hits": [
    {
      "objectID": "test-record-123",
      "_highlightResult": {
        "property1": {},
        "property2": {}
      },
      "_snippetResult": {
        "property1": {},
        "property2": {}
      },
      "_rankingInfo": {
        "filters": 0,
        "firstMatchedWord": 0,
        "geoDistance": 0,
        "geoPrecision": 1,
        "matchedGeoLocation": {
          "lat": 0,
          "lng": 0,
          "distance": 0
        },
        "personalization": {
          "filtersScore": 0,
          "rankingScore": 0,
          "score": 0
        },
        "nbExactWords": 0,
        "nbTypos": 0,
        "promoted": true,
        "proximityDistance": 0,
        "userScore": 0,
        "words": 1,
        "promotedByReRanking": true
      },
      "_distinctSeqID": 0
    }
  ],
  "query": "",
  "params": "query=a&hitsPerPage=20",
  "extensions": {
    "queryCategorization": {
      "normalizedQuery": "string",
      "count": 0,
      "type": "narrow",
      "categories": [
        {
          "bin": "certain",
          "hierarchyPath": [
            {
              "facetName": "string",
              "facetValue": "string",
              "depth": 0
            }
          ]
        }
      ],
      "autofiltering": {
        "enabled": true,
        "maxDepth": 0,
        "facetFilters": [
          "string"
        ],
        "optionalFilters": [
          "string"
        ]
      }
    }
  },
  "cursor": "jMDY3M2MwM2QwMWUxMmQwYWI0ZTN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abTestID|integer|false|none|A/B test ID. This is only included in the response for indices that are part of an A/B test.|
|abTestVariantID|integer|false|none|Variant ID. This is only included in the response for indices that are part of an A/B test.|
|aroundLatLng|string|false|none|Computed geographical location.|
|automaticRadius|string|false|none|Distance from a central coordinate provided by `aroundLatLng`.|
|exhaustive|object|false|none|Whether certain properties of the search response are calculated exhaustive (exact) or approximated.|
|appliedRules|[object]|false|none|Rules applied to the query.|
|exhaustiveFacetsCount|boolean|false|none|**Deprecated.** See the `facetsCount` field of the `exhaustive` object in the response.|
|exhaustiveNbHits|boolean|false|none|**Deprecated.** See the `nbHits` field of the `exhaustive` object in the response.|
|exhaustiveTypo|boolean|false|none|**Deprecated.** See the `typo` field of the `exhaustive` object in the response.|
|facets|object|false|none|Facet counts.|
|facets_stats|object|false|none|Statistics for numerical facets.|
|index|string|false|none|Index name used for the query.|
|indexUsed|string|false|none|Index name used for the query. During A/B testing, the targeted index isn't always the index used by the query.|
|message|string|false|none|Warnings about the query.|
|nbSortedHits|integer|false|none|Number of hits selected and sorted by the relevant sort algorithm.|
|parsedQuery|string|false|none|Post-[normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/#what-does-normalization-mean) query string that will be searched.|
|processingTimeMS|[processingTimeMS](#schemaprocessingtimems)|false|none|Time the server took to process the request, in milliseconds.|
|processingTimingsMS|object|false|none|Experimental. List of processing steps and their times, in milliseconds. You can use this list to investigate performance issues.|
|queryAfterRemoval|string|false|none|Markup text indicating which parts of the original query have been removed to retrieve a non-empty result set.|
|redirect|object|false|none|[Redirect results to a URL](https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting/how-to/redirects), this this parameter is for internal use only.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|serverTimeMS|integer|false|none|Time the server took to process the request, in milliseconds.|
|serverUsed|string|false|none|Host name of the server that processed the request.|
|userData|[userData](#schemauserdata)|false|none|An object with custom data.<br><br>You can store up to 32kB as custom data.<br>|
|queryID|string|false|none|Unique identifier for the query. This is used for [click analytics](https://www.algolia.com/doc/guides/analytics/click-analytics).|
|_automaticInsights|boolean|false|none|Whether automatic events collection is enabled for the application.|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|nbHits|[nbHits](#schemanbhits)|false|none|Number of results (hits).|
|nbPages|[nbPages](#schemanbpages)|false|none|Number of pages of results.|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|hits|[[hit](#schemahit)]|true|none|Search results (hits).<br><br>Hits are records from your index that match the search criteria, augmented with additional attributes, such as, for highlighting.<br>|
|query|[query](#schemaquery)|false|none|Search query.|
|params|string|false|none|URL-encoded string of all search parameters.|
|extensions|[responseExtensions](#schemaresponseextensions)|false|none|AI-generated metadata returned alongside search results.<br>Present when Algolia AI features such as [Query Categorization](https://www.algolia.com/doc/guides/algolia-ai/query-categorization/) are enabled.<br>|
|cursor|string|false|none|Cursor to get the next page of the response.<br><br>The parameter must match the value returned in the response of a previous request.<br>The last page of the response does not return a `cursor` attribute.<br>|

<h2 id="tocS_createdAt">createdAt</h2>
<!-- backwards compatibility -->
<a id="schemacreatedat"></a>
<a id="schema_createdAt"></a>
<a id="tocScreatedat"></a>
<a id="tocscreatedat"></a>

```json
"2023-07-04T12:49:15Z"
```

Date and time when the object was created, in RFC 3339 format.

<h2 id="tocS_taskID">taskID</h2>
<!-- backwards compatibility -->
<a id="schemataskid"></a>
<a id="schema_taskID"></a>
<a id="tocStaskid"></a>
<a id="tocstaskid"></a>

```json
1514562690001
```

Unique identifier of a task.

A successful API response means that a task was added to a queue.
It might not run immediately.
You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.

<h2 id="tocS_deletedAt">deletedAt</h2>
<!-- backwards compatibility -->
<a id="schemadeletedat"></a>
<a id="schema_deletedAt"></a>
<a id="tocSdeletedat"></a>
<a id="tocsdeletedat"></a>

```json
"2023-06-27T14:42:38.831Z"
```

Date and time when the object was deleted, in RFC 3339 format.

<h2 id="tocS_updatedAt">updatedAt</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedat"></a>
<a id="schema_updatedAt"></a>
<a id="tocSupdatedat"></a>
<a id="tocsupdatedat"></a>

```json
"2023-07-04T12:49:15Z"
```

Date and time when the object was updated, in RFC 3339 format.

<h2 id="tocS_deleteByParams">deleteByParams</h2>
<!-- backwards compatibility -->
<a id="schemadeletebyparams"></a>
<a id="schema_deleteByParams"></a>
<a id="tocSdeletebyparams"></a>
<a id="tocsdeletebyparams"></a>

```json
{
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "aroundLatLng": "40.71,-74.01",
  "aroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facetFilters|[facetFilters](#schemafacetfilters)|false|none|Filter the search by facet values, so that only records with the same facet values are retrieved.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>- `[filter1, filter2]` is interpreted as `filter1 AND filter2`.<br>- `[[filter1, filter2], filter3]` is interpreted as `filter1 OR filter2 AND filter3`.<br>- `facet:-value` is interpreted as `NOT facet:value`.<br><br>While it's best to avoid attributes that start with a `-`, you can still filter them by escaping with a backslash:<br>`facet:\-value`.<br>|
|filters|[filters](#schemafilters)|false|none|Filter expression to only include items that match the filter criteria in the response.<br><br>You can use these filter expressions:<br><br>- **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>- **Ranges.** `<facet>:<lower> TO <upper>`, where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive).<br>- **Facet filters.** `<facet>:<value>`, where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value.<br>- **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive).<br>- **Boolean filters.** `<facet>: true \| false`.<br><br>You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:<br><br>- You can only combine filters of the same type with `OR`.<br>  **Not supported:** `facet:value OR num > 3`.<br>- You can't use `NOT` with combinations of filters.<br>  **Not supported:** `NOT(facet:value OR facet:value)`<br>- You can't combine conjunctions (`AND`) with `OR`.<br>  **Not supported:** `facet:value OR (facet:value AND facet:value)`<br><br>Use quotes if the facet attribute name or facet value contains spaces, keywords (`OR`, `AND`, `NOT`), or quotes.<br>If a facet attribute is an array, the filter matches if it matches at least one element of the array.<br><br>For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering).<br>|
|numericFilters|[numericFilters](#schemanumericfilters)|false|none|Filter by numeric facets.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>You can use numeric comparison operators: `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>Comparisons are precise up to 3 decimals.<br>You can also provide ranges: `facet:<lower> TO <upper>`. The range includes the lower and upper boundaries.<br>The same combination rules apply as for `facetFilters`.<br>|
|tagFilters|[tagFilters](#schematagfilters)|false|none|Filter the search by values of the special `_tags` attribute.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>Different from regular facets, `_tags` can only be used for filtering (including or excluding records).<br>You won't get a facet count.<br>The same combination and escaping rules apply as for `facetFilters`.<br>|
|aroundLatLng|[aroundLatLng](#schemaaroundlatlng)|false|none|Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.<br><br>Only records included within a circle around this central location are included in the results.<br>The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings.<br>This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.<br>|
|aroundRadius|[aroundRadius](#schemaaroundradius)|false|none|Maximum radius for a search around a central location.<br><br>This parameter works in combination with the `aroundLatLng` and `aroundLatLngViaIP` parameters.<br>By default, the search radius is determined automatically from the density of hits around the central location.<br>The search radius is small if there are many hits close to the central coordinates.<br>|
|insideBoundingBox|[insideBoundingBox](#schemainsideboundingbox)|false|none|none|
|insidePolygon|[insidePolygon](#schemainsidepolygon)|false|none|Coordinates of a polygon in which to search.<br><br>Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude.<br>Provide multiple polygons as nested arrays.<br>For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).<br>This parameter is ignored if you also specify `insideBoundingBox`.<br>|

<h2 id="tocS_updatedAtResponse">updatedAtResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatresponse"></a>
<a id="schema_updatedAtResponse"></a>
<a id="tocSupdatedatresponse"></a>
<a id="tocsupdatedatresponse"></a>

```json
{
  "taskID": 1514562690001,
  "updatedAt": "2023-07-04T12:49:15Z"
}
```

Response, taskID, and update timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|[taskID](#schemataskid)|true|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|updatedAt|[updatedAt](#schemaupdatedat)|true|none|Date and time when the object was updated, in RFC 3339 format.|

<h2 id="tocS_action">action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"addObject"
```

Which indexing operation to perform:

- `addObject`: adds records to an index.
   Equivalent to the "Add a new record (with auto-generated object ID)" operation.
- `updateObject`: adds or replaces records in an index.
   Equivalent to the "Add or replace a record" operation.
- `partialUpdateObject`: adds or updates attributes within records.
   Equivalent to the "Add or update attributes" operation with the `createIfNoExists` parameter set to true.
   (If a record with the specified `objectID` doesn't exist in the specified index, this action adds the record to the index).
- `partialUpdateObjectNoCreate`: same as `partialUpdateObject`, but with `createIfNoExists` set to false.
   (A record isn't added to the index if its `objectID` doesn't exist).
- `deleteObject`: delete records from an index.
  Equivalent to the "Delete a record" operation.
- `delete`. Delete an index. Equivalent to the "Delete an index" operation.
- `clear`: delete all records from an index. Equivalent to the "Delete all records from an index operation".

<h2 id="tocS_batchWriteParams">batchWriteParams</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteparams"></a>
<a id="schema_batchWriteParams"></a>
<a id="tocSbatchwriteparams"></a>
<a id="tocsbatchwriteparams"></a>

```json
{
  "requests": [
    {
      "action": "addObject",
      "body": {
        "name": "Betty Jane McCamey",
        "company": "Vita Foods Inc.",
        "email": "betty@mccamey.com"
      }
    },
    {
      "action": "addObject",
      "body": {
        "name": "Gayla geimer",
        "company": "Ortman McCain Co.",
        "email": "gayla@geimer.com"
      }
    }
  ]
}
```

Batch parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[object]|true|none|none|

<h2 id="tocS_objectIDs">objectIDs</h2>
<!-- backwards compatibility -->
<a id="schemaobjectids"></a>
<a id="schema_objectIDs"></a>
<a id="tocSobjectids"></a>
<a id="tocsobjectids"></a>

```json
[
  "record-1",
  "record-2"
]
```

Unique record identifiers.

<h2 id="tocS_batchResponse">batchResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponse"></a>
<a id="schema_batchResponse"></a>
<a id="tocSbatchresponse"></a>
<a id="tocsbatchresponse"></a>

```json
{
  "taskID": 1514562690001,
  "objectIDs": [
    "record-1",
    "record-2"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskID|[taskID](#schemataskid)|true|none|Unique identifier of a task.<br><br>A successful API response means that a task was added to a queue.<br>It might not run immediately.<br>You can check the task's progress with the [`task` operation](https://www.algolia.com/doc/rest-api/search/get-task) and this task ID.<br>|
|objectIDs|[objectIDs](#schemaobjectids)|true|none|Unique record identifiers.|

<h2 id="tocS_baseIndexSettings">baseIndexSettings</h2>
<!-- backwards compatibility -->
<a id="schemabaseindexsettings"></a>
<a id="schema_baseIndexSettings"></a>
<a id="tocSbaseindexsettings"></a>
<a id="tocsbaseindexsettings"></a>

```json
{
  "attributesForFaceting": [
    "author",
    "filterOnly(isbn)",
    "searchable(edition)",
    "afterDistinct(category)",
    "afterDistinct(searchable(publisher))"
  ],
  "replicas": [
    "virtual(prod_products_price_asc)",
    "dev_products_replica"
  ],
  "paginationLimitedTo": 100,
  "unretrievableAttributes": [
    "total_sales"
  ],
  "disableTypoToleranceOnWords": [
    "wheel",
    "1X2BCD"
  ],
  "attributesToTransliterate": [
    "name",
    "description"
  ],
  "camelCaseAttributes": [
    "description"
  ],
  "decompoundedAttributes": {
    "de": [
      "name"
    ]
  },
  "indexLanguages": [
    "ja"
  ],
  "disablePrefixOnAttributes": [
    "sku"
  ],
  "allowCompressionOfIntegerArray": false,
  "numericAttributesForFiltering": [
    "equalOnly(quantity)",
    "popularity"
  ],
  "separatorsToIndex": "+#",
  "searchableAttributes": [
    "title,alternative_title",
    "author",
    "unordered(text)",
    "emails.personal"
  ],
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "customNormalization": {
    "default": {
      "ä": "ae",
      "ü": "ue"
    }
  },
  "attributeForDistinct": "url",
  "maxFacetHits": 10,
  "keepDiacriticsOnCharacters": "øé",
  "customRanking": [
    "desc(popularity)",
    "asc(price)"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributesForFaceting|[string]|false|none|Attributes used for [faceting](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting).<br><br>Facets are attributes that let you categorize search results.<br>They can be used for filtering search results.<br>By default, no attribute is used for faceting.<br>Attribute names are case-sensitive.<br><br>**Modifiers**<br><br>- `filterOnly("ATTRIBUTE")`.<br>  Allows the attribute to be used as a filter but doesn't evaluate the facet values.<br><br>- `searchable("ATTRIBUTE")`.<br>  Allows searching for facet values.<br><br>- `afterDistinct("ATTRIBUTE")`.<br>  Evaluates the facet count _after_ deduplication with `distinct`.<br>  This ensures accurate facet counts.<br>  You can apply this modifier to searchable facets: `afterDistinct(searchable(ATTRIBUTE))`.<br>|
|replicas|[string]|false|none|Creates [replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas).<br><br>Replicas are copies of a primary index with the same records but different settings, synonyms, or rules.<br>If you want to offer a different ranking or sorting of your search results, you'll use replica indices.<br>All index operations on a primary index are automatically forwarded to its replicas.<br>To add a replica index, you must provide the complete set of replicas to this parameter.<br>If you omit a replica from this list, the replica turns into a regular, standalone index that will no longer be synced with the primary index.<br><br>**Modifier**<br><br>- `virtual("REPLICA")`.<br>  Create a virtual replica,<br>  Virtual replicas don't increase the number of records and are optimized for [Relevant sorting](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|paginationLimitedTo|integer(int64)|false|none|Maximum number of search results that can be obtained through pagination.<br><br>Higher pagination limits might slow down your search.<br>For pagination limits above 1,000, the sorting of results beyond the 1,000th hit can't be guaranteed.<br>|
|unretrievableAttributes|[string]|false|none|Attributes that can't be retrieved at query time.<br><br>This can be useful if you want to use an attribute for ranking or to [restrict access](https://www.algolia.com/doc/guides/security/api-keys/how-to/user-restricted-access-to-data),<br>but don't want to include it in the search results.<br>Attribute names are case-sensitive.<br>|
|disableTypoToleranceOnWords|[string]|false|none|Creates a list of [words which require exact matches](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#turn-off-typo-tolerance-for-certain-words).<br>This also turns off [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) for the specified words.<br>|
|attributesToTransliterate|[string]|false|none|Attributes, for which you want to support [Japanese transliteration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#japanese-transliteration-and-type-ahead).<br><br>Transliteration supports searching in any of the Japanese writing systems.<br>To support transliteration, you must set the indexing language to Japanese.<br>Attribute names are case-sensitive.<br>|
|camelCaseAttributes|[string]|false|none|Attributes for which to split [camel case](https://wikipedia.org/wiki/Camel_case) words.<br>Attribute names are case-sensitive.<br>|
|decompoundedAttributes|object|false|none|Searchable attributes to which Algolia should apply [word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/customize-segmentation) (decompounding).<br>Attribute names are case-sensitive.<br><br>Compound words are formed by combining two or more individual words,<br>and are particularly prevalent in Germanic languages—for example, "firefighter".<br>With decompounding, the individual components are indexed separately.<br><br>You can specify different lists for different languages.<br>Decompounding is supported for these languages:<br>Dutch (`nl`), German (`de`), Finnish (`fi`), Danish (`da`), Swedish (`sv`), and Norwegian (`no`).<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|indexLanguages|[[supportedLanguage](#schemasupportedlanguage)]|false|none|Languages for language-specific processing steps, such as word detection and dictionary settings.<br><br>**Always specify an indexing language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|disablePrefixOnAttributes|[string]|false|none|Searchable attributes for which you want to turn off [prefix matching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/#adjust-prefix-search).<br>Attribute names are case-sensitive.<br>|
|allowCompressionOfIntegerArray|boolean|false|none|Whether arrays with exclusively non-negative integers should be compressed for better performance.<br>If true, the compressed arrays may be reordered.<br>|
|numericAttributesForFiltering|[string]|false|none|Numeric attributes that can be used as [numerical filters](https://www.algolia.com/doc/guides/managing-results/rules/detecting-intent/how-to/applying-a-custom-filter-for-a-specific-query/#numerical-filters).<br>Attribute names are case-sensitive.<br><br>By default, all numeric attributes are available as numerical filters.<br>For faster indexing, reduce the number of numeric attributes.<br><br>To turn off filtering for all numeric attributes, specify an attribute that doesn't exist in your index, such as `NO_NUMERIC_FILTERING`.<br><br>**Modifier**<br><br>- `equalOnly("ATTRIBUTE")`.<br>  Support only filtering based on equality comparisons `=` and `!=`.<br>|
|separatorsToIndex|string|false|none|Control which non-alphanumeric characters are indexed.<br><br>By default, Algolia ignores [non-alphanumeric characters](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes/#handling-non-alphanumeric-characters) like hyphen (`-`), plus (`+`), and parentheses (`(`,`)`).<br>To include such characters, define them with `separatorsToIndex`.<br><br>Separators are all non-letter characters except spaces and currency characters, such as $€£¥.<br><br>With `separatorsToIndex`, Algolia treats separator characters as separate words.<br>For example, in a search for "Disney+", Algolia considers "Disney" and "+" as two separate words.<br>|
|searchableAttributes|[string]|false|none|Attributes used for searching. Attribute names are case-sensitive.<br><br>By default, all attributes are searchable and the [Attribute](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#attribute) ranking criterion is turned off.<br>With a non-empty list, Algolia only returns results with matches in the selected attributes.<br>In addition, the Attribute ranking criterion is turned on: matches in attributes that are higher in the list of `searchableAttributes` rank first.<br>To make matches in two attributes rank equally, include them in a comma-separated string, such as `"title,alternate_title"`.<br>Attributes with the same priority are always unordered.<br><br>For more information, see [Searchable attributes](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/setting-searchable-attributes).<br><br>**Modifier**<br><br>- `unordered("ATTRIBUTE")`.<br>  Ignore the position of a match within the attribute.<br><br>Without a modifier, matches at the beginning of an attribute rank higher than matches at the end.<br>|
|userData|[userData](#schemauserdata)|false|none|An object with custom data.<br><br>You can store up to 32kB as custom data.<br>|
|customNormalization|object|false|none|Characters and their normalized replacements.<br>This overrides Algolia's default [normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization).<br>|
|attributeForDistinct|string|false|none|Attribute that should be used to establish groups of results.<br>Attribute names are case-sensitive.<br><br>All records with the same value for this attribute are considered a group.<br>You can combine `attributeForDistinct` with the `distinct` search parameter to control<br>how many items per group are included in the search results.<br><br>If you want to use the same attribute also for faceting, use the `afterDistinct` modifier of the `attributesForFaceting` setting.<br>This applies faceting _after_ deduplication, which will result in accurate facet counts.<br>|
|maxFacetHits|[maxFacetHits](#schemamaxfacethits)|false|none|Maximum number of facet values to return when [searching for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).|
|keepDiacriticsOnCharacters|string|false|none|Characters for which diacritics should be preserved.<br><br>By default, Algolia removes diacritics from letters.<br>For example, `é` becomes `e`. If this causes issues in your search,<br>you can specify characters that should keep their diacritics.<br>|
|customRanking|[string]|false|none|Attributes to use as [custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking).<br>Attribute names are case-sensitive.<br><br>The custom ranking attributes decide which items are shown first if the other ranking criteria are equal.<br><br>Records with missing values for your selected custom ranking attributes are always sorted last.<br>Boolean attributes are sorted based on their alphabetical order.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br><br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>If you use two or more custom ranking attributes,<br>[reduce the precision](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/how-to/controlling-custom-ranking-metrics-precision) of your first attributes,<br>or the other attributes will never be applied.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|indexLanguages|af|
|indexLanguages|ar|
|indexLanguages|az|
|indexLanguages|bg|
|indexLanguages|bn|
|indexLanguages|ca|
|indexLanguages|cs|
|indexLanguages|cy|
|indexLanguages|da|
|indexLanguages|de|
|indexLanguages|el|
|indexLanguages|en|
|indexLanguages|eo|
|indexLanguages|es|
|indexLanguages|et|
|indexLanguages|eu|
|indexLanguages|fa|
|indexLanguages|fi|
|indexLanguages|fo|
|indexLanguages|fr|
|indexLanguages|ga|
|indexLanguages|gl|
|indexLanguages|he|
|indexLanguages|hi|
|indexLanguages|hu|
|indexLanguages|hy|
|indexLanguages|id|
|indexLanguages|is|
|indexLanguages|it|
|indexLanguages|ja|
|indexLanguages|ka|
|indexLanguages|kk|
|indexLanguages|ko|
|indexLanguages|ku|
|indexLanguages|ky|
|indexLanguages|lt|
|indexLanguages|lv|
|indexLanguages|mi|
|indexLanguages|mn|
|indexLanguages|mr|
|indexLanguages|ms|
|indexLanguages|mt|
|indexLanguages|nb|
|indexLanguages|nl|
|indexLanguages|no|
|indexLanguages|ns|
|indexLanguages|pl|
|indexLanguages|ps|
|indexLanguages|pt|
|indexLanguages|pt-br|
|indexLanguages|qu|
|indexLanguages|ro|
|indexLanguages|ru|
|indexLanguages|sk|
|indexLanguages|sq|
|indexLanguages|sv|
|indexLanguages|sw|
|indexLanguages|ta|
|indexLanguages|te|
|indexLanguages|th|
|indexLanguages|tl|
|indexLanguages|tn|
|indexLanguages|tr|
|indexLanguages|tt|
|indexLanguages|uk|
|indexLanguages|ur|
|indexLanguages|uz|
|indexLanguages|zh|

<h2 id="tocS_indexSettings">indexSettings</h2>
<!-- backwards compatibility -->
<a id="schemaindexsettings"></a>
<a id="schema_indexSettings"></a>
<a id="tocSindexsettings"></a>
<a id="tocsindexsettings"></a>

```json
{
  "attributesForFaceting": [
    "author",
    "filterOnly(isbn)",
    "searchable(edition)",
    "afterDistinct(category)",
    "afterDistinct(searchable(publisher))"
  ],
  "replicas": [
    "virtual(prod_products_price_asc)",
    "dev_products_replica"
  ],
  "paginationLimitedTo": 100,
  "unretrievableAttributes": [
    "total_sales"
  ],
  "disableTypoToleranceOnWords": [
    "wheel",
    "1X2BCD"
  ],
  "attributesToTransliterate": [
    "name",
    "description"
  ],
  "camelCaseAttributes": [
    "description"
  ],
  "decompoundedAttributes": {
    "de": [
      "name"
    ]
  },
  "indexLanguages": [
    "ja"
  ],
  "disablePrefixOnAttributes": [
    "sku"
  ],
  "allowCompressionOfIntegerArray": false,
  "numericAttributesForFiltering": [
    "equalOnly(quantity)",
    "popularity"
  ],
  "separatorsToIndex": "+#",
  "searchableAttributes": [
    "title,alternative_title",
    "author",
    "unordered(text)",
    "emails.personal"
  ],
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "customNormalization": {
    "default": {
      "ä": "ae",
      "ü": "ue"
    }
  },
  "attributeForDistinct": "url",
  "maxFacetHits": 10,
  "keepDiacriticsOnCharacters": "øé",
  "customRanking": [
    "desc(popularity)",
    "asc(price)"
  ],
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ]
}
```

Index settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributesForFaceting|[string]|false|none|Attributes used for [faceting](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting).<br><br>Facets are attributes that let you categorize search results.<br>They can be used for filtering search results.<br>By default, no attribute is used for faceting.<br>Attribute names are case-sensitive.<br><br>**Modifiers**<br><br>- `filterOnly("ATTRIBUTE")`.<br>  Allows the attribute to be used as a filter but doesn't evaluate the facet values.<br><br>- `searchable("ATTRIBUTE")`.<br>  Allows searching for facet values.<br><br>- `afterDistinct("ATTRIBUTE")`.<br>  Evaluates the facet count _after_ deduplication with `distinct`.<br>  This ensures accurate facet counts.<br>  You can apply this modifier to searchable facets: `afterDistinct(searchable(ATTRIBUTE))`.<br>|
|replicas|[string]|false|none|Creates [replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas).<br><br>Replicas are copies of a primary index with the same records but different settings, synonyms, or rules.<br>If you want to offer a different ranking or sorting of your search results, you'll use replica indices.<br>All index operations on a primary index are automatically forwarded to its replicas.<br>To add a replica index, you must provide the complete set of replicas to this parameter.<br>If you omit a replica from this list, the replica turns into a regular, standalone index that will no longer be synced with the primary index.<br><br>**Modifier**<br><br>- `virtual("REPLICA")`.<br>  Create a virtual replica,<br>  Virtual replicas don't increase the number of records and are optimized for [Relevant sorting](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|paginationLimitedTo|integer(int64)|false|none|Maximum number of search results that can be obtained through pagination.<br><br>Higher pagination limits might slow down your search.<br>For pagination limits above 1,000, the sorting of results beyond the 1,000th hit can't be guaranteed.<br>|
|unretrievableAttributes|[string]|false|none|Attributes that can't be retrieved at query time.<br><br>This can be useful if you want to use an attribute for ranking or to [restrict access](https://www.algolia.com/doc/guides/security/api-keys/how-to/user-restricted-access-to-data),<br>but don't want to include it in the search results.<br>Attribute names are case-sensitive.<br>|
|disableTypoToleranceOnWords|[string]|false|none|Creates a list of [words which require exact matches](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#turn-off-typo-tolerance-for-certain-words).<br>This also turns off [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) for the specified words.<br>|
|attributesToTransliterate|[string]|false|none|Attributes, for which you want to support [Japanese transliteration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#japanese-transliteration-and-type-ahead).<br><br>Transliteration supports searching in any of the Japanese writing systems.<br>To support transliteration, you must set the indexing language to Japanese.<br>Attribute names are case-sensitive.<br>|
|camelCaseAttributes|[string]|false|none|Attributes for which to split [camel case](https://wikipedia.org/wiki/Camel_case) words.<br>Attribute names are case-sensitive.<br>|
|decompoundedAttributes|object|false|none|Searchable attributes to which Algolia should apply [word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/customize-segmentation) (decompounding).<br>Attribute names are case-sensitive.<br><br>Compound words are formed by combining two or more individual words,<br>and are particularly prevalent in Germanic languages—for example, "firefighter".<br>With decompounding, the individual components are indexed separately.<br><br>You can specify different lists for different languages.<br>Decompounding is supported for these languages:<br>Dutch (`nl`), German (`de`), Finnish (`fi`), Danish (`da`), Swedish (`sv`), and Norwegian (`no`).<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|indexLanguages|[[supportedLanguage](#schemasupportedlanguage)]|false|none|Languages for language-specific processing steps, such as word detection and dictionary settings.<br><br>**Always specify an indexing language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|disablePrefixOnAttributes|[string]|false|none|Searchable attributes for which you want to turn off [prefix matching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/#adjust-prefix-search).<br>Attribute names are case-sensitive.<br>|
|allowCompressionOfIntegerArray|boolean|false|none|Whether arrays with exclusively non-negative integers should be compressed for better performance.<br>If true, the compressed arrays may be reordered.<br>|
|numericAttributesForFiltering|[string]|false|none|Numeric attributes that can be used as [numerical filters](https://www.algolia.com/doc/guides/managing-results/rules/detecting-intent/how-to/applying-a-custom-filter-for-a-specific-query/#numerical-filters).<br>Attribute names are case-sensitive.<br><br>By default, all numeric attributes are available as numerical filters.<br>For faster indexing, reduce the number of numeric attributes.<br><br>To turn off filtering for all numeric attributes, specify an attribute that doesn't exist in your index, such as `NO_NUMERIC_FILTERING`.<br><br>**Modifier**<br><br>- `equalOnly("ATTRIBUTE")`.<br>  Support only filtering based on equality comparisons `=` and `!=`.<br>|
|separatorsToIndex|string|false|none|Control which non-alphanumeric characters are indexed.<br><br>By default, Algolia ignores [non-alphanumeric characters](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes/#handling-non-alphanumeric-characters) like hyphen (`-`), plus (`+`), and parentheses (`(`,`)`).<br>To include such characters, define them with `separatorsToIndex`.<br><br>Separators are all non-letter characters except spaces and currency characters, such as $€£¥.<br><br>With `separatorsToIndex`, Algolia treats separator characters as separate words.<br>For example, in a search for "Disney+", Algolia considers "Disney" and "+" as two separate words.<br>|
|searchableAttributes|[string]|false|none|Attributes used for searching. Attribute names are case-sensitive.<br><br>By default, all attributes are searchable and the [Attribute](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#attribute) ranking criterion is turned off.<br>With a non-empty list, Algolia only returns results with matches in the selected attributes.<br>In addition, the Attribute ranking criterion is turned on: matches in attributes that are higher in the list of `searchableAttributes` rank first.<br>To make matches in two attributes rank equally, include them in a comma-separated string, such as `"title,alternate_title"`.<br>Attributes with the same priority are always unordered.<br><br>For more information, see [Searchable attributes](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/setting-searchable-attributes).<br><br>**Modifier**<br><br>- `unordered("ATTRIBUTE")`.<br>  Ignore the position of a match within the attribute.<br><br>Without a modifier, matches at the beginning of an attribute rank higher than matches at the end.<br>|
|userData|[userData](#schemauserdata)|false|none|An object with custom data.<br><br>You can store up to 32kB as custom data.<br>|
|customNormalization|object|false|none|Characters and their normalized replacements.<br>This overrides Algolia's default [normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization).<br>|
|attributeForDistinct|string|false|none|Attribute that should be used to establish groups of results.<br>Attribute names are case-sensitive.<br><br>All records with the same value for this attribute are considered a group.<br>You can combine `attributeForDistinct` with the `distinct` search parameter to control<br>how many items per group are included in the search results.<br><br>If you want to use the same attribute also for faceting, use the `afterDistinct` modifier of the `attributesForFaceting` setting.<br>This applies faceting _after_ deduplication, which will result in accurate facet counts.<br>|
|maxFacetHits|[maxFacetHits](#schemamaxfacethits)|false|none|Maximum number of facet values to return when [searching for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).|
|keepDiacriticsOnCharacters|string|false|none|Characters for which diacritics should be preserved.<br><br>By default, Algolia removes diacritics from letters.<br>For example, `é` becomes `e`. If this causes issues in your search,<br>you can specify characters that should keep their diacritics.<br>|
|customRanking|[string]|false|none|Attributes to use as [custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking).<br>Attribute names are case-sensitive.<br><br>The custom ranking attributes decide which items are shown first if the other ranking criteria are equal.<br><br>Records with missing values for your selected custom ranking attributes are always sorted last.<br>Boolean attributes are sorted based on their alphabetical order.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br><br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>If you use two or more custom ranking attributes,<br>[reduce the precision](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/how-to/controlling-custom-ranking-metrics-precision) of your first attributes,<br>or the other attributes will never be applied.<br>|
|attributesToRetrieve|[attributesToRetrieve](#schemaattributestoretrieve)|false|none|Attributes to include in the API response.<br>To reduce the size of your response, you can retrieve only some of the attributes.<br>Attribute names are case-sensitive<br>- `*` retrieves all attributes, except attributes included in the `customRanking` and `unretrievableAttributes` settings.<br>- To retrieve all attributes except a specific one, prefix the attribute with a dash and combine it with the `*`: `["*", "-ATTRIBUTE"]`.<br>- The `objectID` attribute is always included.<br>|
|ranking|[string]|false|none|Determines the order in which Algolia returns your results.<br><br>By default, each entry corresponds to a [ranking criteria](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria).<br>The tie-breaking algorithm sequentially applies each criterion in the order they're specified.<br>If you configure a replica index for [sorting by an attribute](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-by-attribute),<br>you put the sorting attribute at the top of the list.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>Before you modify the default setting,<br>test your changes in the dashboard,<br>and by [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing).<br>|
|relevancyStrictness|[relevancyStrictness](#schemarelevancystrictness)|false|none|Relevancy threshold below which less relevant results aren't included in the results.<br>You can only set `relevancyStrictness` on [virtual replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/#standard-and-virtual-replicas).<br>Use this setting to strike a balance between the relevance and number of returned results.<br>|
|attributesToHighlight|[attributesToHighlight](#schemaattributestohighlight)|false|none|Attributes to highlight.<br>By default, all searchable attributes are highlighted.<br>Use `*` to highlight all attributes or use an empty array `[]` to turn off highlighting.<br>Attribute names are case-sensitive<br>With highlighting, strings that match the search query are surrounded by HTML tags defined by `highlightPreTag` and `highlightPostTag`.<br>You can use this to visually highlight matching parts of a search query in your UI<br>For more information, see [Highlighting and snippeting](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/highlighting-snippeting/js).<br>|
|attributesToSnippet|[attributesToSnippet](#schemaattributestosnippet)|false|none|Attributes for which to enable snippets.<br>Attribute names are case-sensitive<br>Snippets provide additional context to matched words.<br>If you enable snippets, they include 10 words, including the matched word.<br>The matched word will also be wrapped by HTML tags for highlighting.<br>You can adjust the number of words with the following notation: `ATTRIBUTE:NUMBER`,<br>where `NUMBER` is the number of words to be extracted.<br>|
|highlightPreTag|[highlightPreTag](#schemahighlightpretag)|false|none|HTML tag to insert before the highlighted parts in all highlighted results and snippets.|
|highlightPostTag|[highlightPostTag](#schemahighlightposttag)|false|none|HTML tag to insert after the highlighted parts in all highlighted results and snippets.|
|snippetEllipsisText|[snippetEllipsisText](#schemasnippetellipsistext)|false|none|String used as an ellipsis indicator when a snippet is truncated.|
|restrictHighlightAndSnippetArrays|[restrictHighlightAndSnippetArrays](#schemarestricthighlightandsnippetarrays)|false|none|Whether to restrict highlighting and snippeting to items that at least partially matched the search query.<br>By default, all items are highlighted and snippeted.<br>|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|minWordSizefor1Typo|[minWordSizefor1Typo](#schemaminwordsizefor1typo)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [one typo](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|minWordSizefor2Typos|[minWordSizefor2Typos](#schemaminwordsizefor2typos)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [two typos](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|typoTolerance|[typoTolerance](#schematypotolerance)|false|none|Whether [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance) is enabled and how it is applied.<br><br>If typo tolerance is true, `min`, or `strict`, [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) are also active.<br>|
|allowTyposOnNumericTokens|[allowTyposOnNumericTokens](#schemaallowtyposonnumerictokens)|false|none|Whether to allow typos on numbers in the search query.<br>Turn off this setting to reduce the number of irrelevant matches<br>when searching in large sets of similar numbers.<br>|
|disableTypoToleranceOnAttributes|[disableTypoToleranceOnAttributes](#schemadisabletypotoleranceonattributes)|false|none|Attributes for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance).<br>Attribute names are case-sensitive<br>Returning only exact matches can help when<br>- [Searching in hyphenated attributes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes).<br>- Reducing the number of matches when you have too many.<br>  This can happen with attributes that are long blocks of text, such as product descriptions.<br>Consider alternatives such as `disableTypoToleranceOnWords` or adding synonyms if your attributes have intentional unusual spellings that might look like typos.<br>|
|ignorePlurals|[ignorePlurals](#schemaignoreplurals)|false|none|Treat singular, plurals, and other forms of declensions as equivalent.<br>Only use this feature for the languages used in your index.<br>|
|removeStopWords|[removeStopWords](#schemaremovestopwords)|false|none|Removes stop words from the search query.<br><br>Stop words are common words like articles, conjunctions, prepositions, or pronouns that have little or no meaning on their own.<br>In English, "the", "a", or "and" are stop words.<br><br>Only use this feature for the languages used in your index.<br>|
|queryLanguages|[queryLanguages](#schemaquerylanguages)|false|none|Languages for language-specific query processing steps such as plurals, stop-word removal, and word-detection dictionaries.<br>This setting sets a default list of languages used by the `removeStopWords` and `ignorePlurals` settings.<br>This setting also sets a dictionary for word detection in the logogram-based [CJK](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/#normalization-for-logogram-based-languages-cjk) languages.<br>To support this, place the CJK language **first**.<br>**Always specify a query language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|decompoundQuery|[decompoundQuery](#schemadecompoundquery)|false|none|Whether to split compound words in the query into their building blocks.<br>For more information, see [Word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#split-compound-words).<br>Word segmentation is supported for these languages: German, Dutch, Finnish, Swedish, and Norwegian.<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|enableRules|[enableRules](#schemaenablerules)|false|none|Whether to enable rules.|
|enablePersonalization|[enablePersonalization](#schemaenablepersonalization)|false|none|Whether to enable Personalization.|
|queryType|[queryType](#schemaquerytype)|false|none|Determines if and how query words are interpreted as prefixes.<br><br>By default, only the last query word is treated as a prefix (`prefixLast`).<br>To turn off prefix search, use `prefixNone`.<br>Avoid `prefixAll`, which treats all query words as prefixes.<br>This might lead to counterintuitive results and makes your search slower.<br><br>For more information, see [Prefix searching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/prefix-searching).<br>|
|removeWordsIfNoResults|[removeWordsIfNoResults](#schemaremovewordsifnoresults)|false|none|Strategy for removing words from the query when it doesn't return any results.<br>This helps to avoid returning empty search results.<br><br>- `none`.<br>  No words are removed when a query doesn't return results.<br><br>- `lastWords`.<br>  Treat the last (then second to last, then third to last) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `firstWords`.<br>  Treat the first (then second, then third) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `allOptional`.<br>  Treat all words as optional.<br><br>For more information, see [Remove words to improve results](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/in-depth/why-use-remove-words-if-no-results).<br>|
|mode|[mode](#schemamode)|false|none|Search mode the index will use to query for results.<br><br>This setting only applies to indices, for which Algolia enabled NeuralSearch for you.<br>|
|semanticSearch|[semanticSearch](#schemasemanticsearch)|false|none|Settings for the semantic search part of NeuralSearch.<br>Only used when `mode` is `neuralSearch`.<br>|
|advancedSyntax|[advancedSyntax](#schemaadvancedsyntax)|false|none|Whether to support phrase matching and excluding words from search queries.<br>Use the `advancedSyntaxFeatures` parameter to control which feature is supported.<br>|
|optionalWords|[optionalWords](#schemaoptionalwords)|false|none|Words that should be considered optional when found in the query.<br><br>By default, records must match all words in the search query to be included in the search results.<br>Adding optional words can increase the number of search results by running an additional search query that doesn't include the optional words.<br>For example, if the search query is "action video" and "video" is optional,<br>the search engine runs two queries: one for "action video" and one for "action".<br>Records that match all words are ranked higher.<br><br>For a search query with 4 or more words **and** all its words are optional,<br>the number of matched words required for a record to be included in the search results increases for every 1,000 records:<br><br>- If `optionalWords` has fewer than 10 words, the required number of matched words increases by 1:<br>  results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 2 matched words.<br>- If `optionalWords` has 10 or more words, the required number of matched words increases by the number of optional words divided by 5 (rounded down).<br>  Example: with 18 optional words, results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 4 matched words.<br><br>For more information, see [Optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).<br>|
|disableExactOnAttributes|[disableExactOnAttributes](#schemadisableexactonattributes)|false|none|Searchable attributes for which you want to [turn off the Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes).<br>Attribute names are case-sensitive<br>This can be useful for attributes with long values, where the likelihood of an exact match is high,<br>such as product descriptions.<br>Turning off the Exact ranking criterion for these attributes favors exact matching on other attributes.<br>This reduces the impact of individual attributes with a lot of content on ranking.<br>|
|exactOnSingleWordQuery|[exactOnSingleWordQuery](#schemaexactonsinglewordquery)|false|none|Determines how the [Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes) is computed when the search query has only one word.<br><br>- `attribute`.<br>  The Exact ranking criterion is 1 if the query word and attribute value are the same.<br>  For example, a search for "road" will match the value "road", but not "road trip".<br><br>- `none`.<br>  The Exact ranking criterion is ignored on single-word searches.<br><br>- `word`.<br>  The Exact ranking criterion is 1 if the query word is found in the attribute value.<br>  The query word must have at least 3 characters and must not be a stop word.<br>  Only exact matches will be highlighted,<br>  partial and prefix matches won't.<br>|
|alternativesAsExact|[IndexSettings_alternativesAsExact](#schemaindexsettings_alternativesasexact)|false|none|Determine which plurals and synonyms should be considered an exact matches.<br>By default, Algolia treats singular and plural forms of a word, and single-word synonyms, as [exact](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#exact) matches when searching.<br>For example:<br>- "swimsuit" and "swimsuits" are treated the same.<br>- "swimsuit" and "swimwear" are treated the same (if they are [synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/#regular-synonyms)).<br>- `ignorePlurals`.<br>  Plurals and similar declensions added by the `ignorePlurals` setting are considered exact matches.<br>- `singleWordSynonym`.<br>  Single-word synonyms, such as "NY" = "NYC", are considered exact matches.<br>- `multiWordsSynonym`.<br>  Multi-word synonyms, such as "NY" = "New York", are considered exact matches.<br>|
|advancedSyntaxFeatures|[IndexSettings_advancedSyntaxFeatures](#schemaindexsettings_advancedsyntaxfeatures)|false|none|Advanced search syntax features you want to support.<br>- `exactPhrase`.<br>  Phrases in quotes must match exactly.<br>  For example, `sparkly blue "iPhone case"` only returns records with the exact string "iPhone case".<br>- `excludeWords`.<br>  Query words prefixed with a `-` must not occur in a record.<br>  For example, `search -engine` matches records that contain "search" but not "engine".<br>This setting only has an effect if `advancedSyntax` is true.<br>|
|distinct|[distinct](#schemadistinct)|false|none|Determines how many records of a group are included in the search results.<br><br>Records with the same value for the `attributeForDistinct` attribute are considered a group.<br>The `distinct` setting controls how many members of the group are returned.<br>This is useful for [deduplication and grouping](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#deduplicate-results-with-distinct).<br><br>The `distinct` setting is ignored if `attributeForDistinct` is not set.<br>|
|replaceSynonymsInHighlight|[replaceSynonymsInHighlight](#schemareplacesynonymsinhighlight)|false|none|Whether to replace a highlighted word with the matched synonym.<br>By default, the original words are highlighted even if a synonym matches.<br>For example, with `home` as a synonym for `house` and a search for `home`,<br>records matching either "home" or "house" are included in the search results,<br>and either "home" or "house" are highlighted<br>With `replaceSynonymsInHighlight` set to `true`, a search for `home` still matches the same records,<br>but all occurrences of "house" are replaced by "home" in the highlighted response.<br>|
|minProximity|[minProximity](#schemaminproximity)|false|none|Minimum proximity score for two matching words.<br>This adjusts the [Proximity ranking criterion](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#proximity)<br>by equally scoring matches that are farther apart<br>For example, if `minProximity` is 2, neighboring matches and matches with one word between them would have the same score.<br>|
|responseFields|[responseFields](#schemaresponsefields)|false|none|Properties to include in the API response of search and browse requests.<br>By default, all response properties are included.<br>To reduce the response size, you can select which properties should be included<br>An empty list may lead to an empty API response (except properties you can't exclude)<br>You can't exclude these properties:<br>`message`, `warning`, `cursor`, `abTestVariantID`,<br>or any property added by setting `getRankingInfo` to true<br>Your search depends on the `hits` field. If you omit this field, searches won't return any results.<br>Your UI might also depend on other properties, for example, for pagination.<br>Before restricting the response size, check the impact on your search experience.<br>|
|maxValuesPerFacet|[maxValuesPerFacet](#schemamaxvaluesperfacet)|false|none|Maximum number of facet values to return for each facet.|
|sortFacetValuesBy|[sortFacetValuesBy](#schemasortfacetvaluesby)|false|none|Order in which to retrieve facet values.<br>- `count`.<br>  Facet values are retrieved by decreasing count.<br>  The count is the number of matching records containing this facet value.<br>- `alpha`.<br>  Retrieve facet values alphabetically.<br>This setting doesn't influence how facet values are displayed in your UI (see `renderingContent`).<br>For more information, see [facet value display](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js).<br>|
|attributeCriteriaComputedByMinProximity|[attributeCriteriaComputedByMinProximity](#schemaattributecriteriacomputedbyminproximity)|false|none|Whether the best matching attribute should be determined by minimum proximity.<br>This setting only affects ranking if the Attribute ranking criterion comes before Proximity in the `ranking` setting.<br>If true, the best matching attribute is selected based on the minimum proximity of multiple matches.<br>Otherwise, the best matching attribute is determined by the order in the `searchableAttributes` setting.<br><br>Prefer `attributeCriteriaComputedBy`, which expresses the same two behaviors and adds the `sum` strategy.<br>If you set both, `attributeCriteriaComputedBy` takes precedence.<br>|
|attributeCriteriaComputedBy|[attributeCriteriaComputedBy](#schemaattributecriteriacomputedby)|false|none|Strategy for computing the Attribute ranking criterion.<br>This mainly affects multi-word queries with matches in more than one attribute.<br><br>The `ranking` setting decides whether `best` takes effect.<br>When Attribute comes after Proximity, which is the default order, the engine always uses the `minProximity` strategy and ignores `best`.<br>To select `best`, move Attribute before Proximity in `ranking`.<br>The `sum` strategy applies in both orders.<br><br>- `minProximity`.<br>  Pick the best matching attribute from the attributes that form the best proximity score.<br>  On an ordered attribute, the match position breaks ties.<br>- `best`.<br>  Pick the best matching attribute from all attributes that match any query word.<br>  On an ordered attribute, the match position breaks ties.<br>- `sum`.<br>  Add up a score for every query word instead of picking one attribute.<br>  Each word's score comes from the attribute it matched, and from its position in that attribute when the attribute is ordered.<br>  A query word that matches nothing adds a large penalty.<br>  A record with a lower total ranks higher.<br>  A record therefore cannot rank high only because one word of a multi-word query matched a top attribute.<br>  Use `sum` with short, relevant attributes, and set long-text attributes to unordered.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|enableReRanking|[enableReRanking](#schemaenablereranking)|false|none|Whether this search will use [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking).<br>This setting only has an effect if you activated Dynamic Re-Ranking for this index in the Algolia dashboard.<br>|
|reRankingApplyFilter|[reRankingApplyFilter](#schemarerankingapplyfilter) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|indexLanguages|af|
|indexLanguages|ar|
|indexLanguages|az|
|indexLanguages|bg|
|indexLanguages|bn|
|indexLanguages|ca|
|indexLanguages|cs|
|indexLanguages|cy|
|indexLanguages|da|
|indexLanguages|de|
|indexLanguages|el|
|indexLanguages|en|
|indexLanguages|eo|
|indexLanguages|es|
|indexLanguages|et|
|indexLanguages|eu|
|indexLanguages|fa|
|indexLanguages|fi|
|indexLanguages|fo|
|indexLanguages|fr|
|indexLanguages|ga|
|indexLanguages|gl|
|indexLanguages|he|
|indexLanguages|hi|
|indexLanguages|hu|
|indexLanguages|hy|
|indexLanguages|id|
|indexLanguages|is|
|indexLanguages|it|
|indexLanguages|ja|
|indexLanguages|ka|
|indexLanguages|kk|
|indexLanguages|ko|
|indexLanguages|ku|
|indexLanguages|ky|
|indexLanguages|lt|
|indexLanguages|lv|
|indexLanguages|mi|
|indexLanguages|mn|
|indexLanguages|mr|
|indexLanguages|ms|
|indexLanguages|mt|
|indexLanguages|nb|
|indexLanguages|nl|
|indexLanguages|no|
|indexLanguages|ns|
|indexLanguages|pl|
|indexLanguages|ps|
|indexLanguages|pt|
|indexLanguages|pt-br|
|indexLanguages|qu|
|indexLanguages|ro|
|indexLanguages|ru|
|indexLanguages|sk|
|indexLanguages|sq|
|indexLanguages|sv|
|indexLanguages|sw|
|indexLanguages|ta|
|indexLanguages|te|
|indexLanguages|th|
|indexLanguages|tl|
|indexLanguages|tn|
|indexLanguages|tr|
|indexLanguages|tt|
|indexLanguages|uk|
|indexLanguages|ur|
|indexLanguages|uz|
|indexLanguages|zh|
|queryLanguages|af|
|queryLanguages|ar|
|queryLanguages|az|
|queryLanguages|bg|
|queryLanguages|bn|
|queryLanguages|ca|
|queryLanguages|cs|
|queryLanguages|cy|
|queryLanguages|da|
|queryLanguages|de|
|queryLanguages|el|
|queryLanguages|en|
|queryLanguages|eo|
|queryLanguages|es|
|queryLanguages|et|
|queryLanguages|eu|
|queryLanguages|fa|
|queryLanguages|fi|
|queryLanguages|fo|
|queryLanguages|fr|
|queryLanguages|ga|
|queryLanguages|gl|
|queryLanguages|he|
|queryLanguages|hi|
|queryLanguages|hu|
|queryLanguages|hy|
|queryLanguages|id|
|queryLanguages|is|
|queryLanguages|it|
|queryLanguages|ja|
|queryLanguages|ka|
|queryLanguages|kk|
|queryLanguages|ko|
|queryLanguages|ku|
|queryLanguages|ky|
|queryLanguages|lt|
|queryLanguages|lv|
|queryLanguages|mi|
|queryLanguages|mn|
|queryLanguages|mr|
|queryLanguages|ms|
|queryLanguages|mt|
|queryLanguages|nb|
|queryLanguages|nl|
|queryLanguages|no|
|queryLanguages|ns|
|queryLanguages|pl|
|queryLanguages|ps|
|queryLanguages|pt|
|queryLanguages|pt-br|
|queryLanguages|qu|
|queryLanguages|ro|
|queryLanguages|ru|
|queryLanguages|sk|
|queryLanguages|sq|
|queryLanguages|sv|
|queryLanguages|sw|
|queryLanguages|ta|
|queryLanguages|te|
|queryLanguages|th|
|queryLanguages|tl|
|queryLanguages|tn|
|queryLanguages|tr|
|queryLanguages|tt|
|queryLanguages|uk|
|queryLanguages|ur|
|queryLanguages|uz|
|queryLanguages|zh|
|queryType|prefixLast|
|queryType|prefixAll|
|queryType|prefixNone|
|removeWordsIfNoResults|none|
|removeWordsIfNoResults|lastWords|
|removeWordsIfNoResults|firstWords|
|removeWordsIfNoResults|allOptional|
|mode|neuralSearch|
|mode|keywordSearch|
|exactOnSingleWordQuery|attribute|
|exactOnSingleWordQuery|none|
|exactOnSingleWordQuery|word|
|alternativesAsExact|ignorePlurals|
|alternativesAsExact|singleWordSynonym|
|alternativesAsExact|multiWordsSynonym|
|alternativesAsExact|ignoreConjugations|
|advancedSyntaxFeatures|exactPhrase|
|advancedSyntaxFeatures|excludeWords|
|attributeCriteriaComputedBy|minProximity|
|attributeCriteriaComputedBy|best|
|attributeCriteriaComputedBy|sum|

<h2 id="tocS_WithPrimary">WithPrimary</h2>
<!-- backwards compatibility -->
<a id="schemawithprimary"></a>
<a id="schema_WithPrimary"></a>
<a id="tocSwithprimary"></a>
<a id="tocswithprimary"></a>

```json
{
  "primary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary|string|false|none|Replica indices only: the name of the primary index for this replica.<br>|

<h2 id="tocS_settingsResponse">settingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettingsresponse"></a>
<a id="schema_settingsResponse"></a>
<a id="tocSsettingsresponse"></a>
<a id="tocssettingsresponse"></a>

```json
{
  "attributesForFaceting": [
    "author",
    "filterOnly(isbn)",
    "searchable(edition)",
    "afterDistinct(category)",
    "afterDistinct(searchable(publisher))"
  ],
  "replicas": [
    "virtual(prod_products_price_asc)",
    "dev_products_replica"
  ],
  "paginationLimitedTo": 100,
  "unretrievableAttributes": [
    "total_sales"
  ],
  "disableTypoToleranceOnWords": [
    "wheel",
    "1X2BCD"
  ],
  "attributesToTransliterate": [
    "name",
    "description"
  ],
  "camelCaseAttributes": [
    "description"
  ],
  "decompoundedAttributes": {
    "de": [
      "name"
    ]
  },
  "indexLanguages": [
    "ja"
  ],
  "disablePrefixOnAttributes": [
    "sku"
  ],
  "allowCompressionOfIntegerArray": false,
  "numericAttributesForFiltering": [
    "equalOnly(quantity)",
    "popularity"
  ],
  "separatorsToIndex": "+#",
  "searchableAttributes": [
    "title,alternative_title",
    "author",
    "unordered(text)",
    "emails.personal"
  ],
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  },
  "customNormalization": {
    "default": {
      "ä": "ae",
      "ü": "ue"
    }
  },
  "attributeForDistinct": "url",
  "maxFacetHits": 10,
  "keepDiacriticsOnCharacters": "øé",
  "customRanking": [
    "desc(popularity)",
    "asc(price)"
  ],
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ],
  "primary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributesForFaceting|[string]|false|none|Attributes used for [faceting](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting).<br><br>Facets are attributes that let you categorize search results.<br>They can be used for filtering search results.<br>By default, no attribute is used for faceting.<br>Attribute names are case-sensitive.<br><br>**Modifiers**<br><br>- `filterOnly("ATTRIBUTE")`.<br>  Allows the attribute to be used as a filter but doesn't evaluate the facet values.<br><br>- `searchable("ATTRIBUTE")`.<br>  Allows searching for facet values.<br><br>- `afterDistinct("ATTRIBUTE")`.<br>  Evaluates the facet count _after_ deduplication with `distinct`.<br>  This ensures accurate facet counts.<br>  You can apply this modifier to searchable facets: `afterDistinct(searchable(ATTRIBUTE))`.<br>|
|replicas|[string]|false|none|Creates [replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas).<br><br>Replicas are copies of a primary index with the same records but different settings, synonyms, or rules.<br>If you want to offer a different ranking or sorting of your search results, you'll use replica indices.<br>All index operations on a primary index are automatically forwarded to its replicas.<br>To add a replica index, you must provide the complete set of replicas to this parameter.<br>If you omit a replica from this list, the replica turns into a regular, standalone index that will no longer be synced with the primary index.<br><br>**Modifier**<br><br>- `virtual("REPLICA")`.<br>  Create a virtual replica,<br>  Virtual replicas don't increase the number of records and are optimized for [Relevant sorting](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|paginationLimitedTo|integer(int64)|false|none|Maximum number of search results that can be obtained through pagination.<br><br>Higher pagination limits might slow down your search.<br>For pagination limits above 1,000, the sorting of results beyond the 1,000th hit can't be guaranteed.<br>|
|unretrievableAttributes|[string]|false|none|Attributes that can't be retrieved at query time.<br><br>This can be useful if you want to use an attribute for ranking or to [restrict access](https://www.algolia.com/doc/guides/security/api-keys/how-to/user-restricted-access-to-data),<br>but don't want to include it in the search results.<br>Attribute names are case-sensitive.<br>|
|disableTypoToleranceOnWords|[string]|false|none|Creates a list of [words which require exact matches](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#turn-off-typo-tolerance-for-certain-words).<br>This also turns off [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) for the specified words.<br>|
|attributesToTransliterate|[string]|false|none|Attributes, for which you want to support [Japanese transliteration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#japanese-transliteration-and-type-ahead).<br><br>Transliteration supports searching in any of the Japanese writing systems.<br>To support transliteration, you must set the indexing language to Japanese.<br>Attribute names are case-sensitive.<br>|
|camelCaseAttributes|[string]|false|none|Attributes for which to split [camel case](https://wikipedia.org/wiki/Camel_case) words.<br>Attribute names are case-sensitive.<br>|
|decompoundedAttributes|object|false|none|Searchable attributes to which Algolia should apply [word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/customize-segmentation) (decompounding).<br>Attribute names are case-sensitive.<br><br>Compound words are formed by combining two or more individual words,<br>and are particularly prevalent in Germanic languages—for example, "firefighter".<br>With decompounding, the individual components are indexed separately.<br><br>You can specify different lists for different languages.<br>Decompounding is supported for these languages:<br>Dutch (`nl`), German (`de`), Finnish (`fi`), Danish (`da`), Swedish (`sv`), and Norwegian (`no`).<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|indexLanguages|[[supportedLanguage](#schemasupportedlanguage)]|false|none|Languages for language-specific processing steps, such as word detection and dictionary settings.<br><br>**Always specify an indexing language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|disablePrefixOnAttributes|[string]|false|none|Searchable attributes for which you want to turn off [prefix matching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/#adjust-prefix-search).<br>Attribute names are case-sensitive.<br>|
|allowCompressionOfIntegerArray|boolean|false|none|Whether arrays with exclusively non-negative integers should be compressed for better performance.<br>If true, the compressed arrays may be reordered.<br>|
|numericAttributesForFiltering|[string]|false|none|Numeric attributes that can be used as [numerical filters](https://www.algolia.com/doc/guides/managing-results/rules/detecting-intent/how-to/applying-a-custom-filter-for-a-specific-query/#numerical-filters).<br>Attribute names are case-sensitive.<br><br>By default, all numeric attributes are available as numerical filters.<br>For faster indexing, reduce the number of numeric attributes.<br><br>To turn off filtering for all numeric attributes, specify an attribute that doesn't exist in your index, such as `NO_NUMERIC_FILTERING`.<br><br>**Modifier**<br><br>- `equalOnly("ATTRIBUTE")`.<br>  Support only filtering based on equality comparisons `=` and `!=`.<br>|
|separatorsToIndex|string|false|none|Control which non-alphanumeric characters are indexed.<br><br>By default, Algolia ignores [non-alphanumeric characters](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes/#handling-non-alphanumeric-characters) like hyphen (`-`), plus (`+`), and parentheses (`(`,`)`).<br>To include such characters, define them with `separatorsToIndex`.<br><br>Separators are all non-letter characters except spaces and currency characters, such as $€£¥.<br><br>With `separatorsToIndex`, Algolia treats separator characters as separate words.<br>For example, in a search for "Disney+", Algolia considers "Disney" and "+" as two separate words.<br>|
|searchableAttributes|[string]|false|none|Attributes used for searching. Attribute names are case-sensitive.<br><br>By default, all attributes are searchable and the [Attribute](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#attribute) ranking criterion is turned off.<br>With a non-empty list, Algolia only returns results with matches in the selected attributes.<br>In addition, the Attribute ranking criterion is turned on: matches in attributes that are higher in the list of `searchableAttributes` rank first.<br>To make matches in two attributes rank equally, include them in a comma-separated string, such as `"title,alternate_title"`.<br>Attributes with the same priority are always unordered.<br><br>For more information, see [Searchable attributes](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/setting-searchable-attributes).<br><br>**Modifier**<br><br>- `unordered("ATTRIBUTE")`.<br>  Ignore the position of a match within the attribute.<br><br>Without a modifier, matches at the beginning of an attribute rank higher than matches at the end.<br>|
|userData|[userData](#schemauserdata)|false|none|An object with custom data.<br><br>You can store up to 32kB as custom data.<br>|
|customNormalization|object|false|none|Characters and their normalized replacements.<br>This overrides Algolia's default [normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization).<br>|
|attributeForDistinct|string|false|none|Attribute that should be used to establish groups of results.<br>Attribute names are case-sensitive.<br><br>All records with the same value for this attribute are considered a group.<br>You can combine `attributeForDistinct` with the `distinct` search parameter to control<br>how many items per group are included in the search results.<br><br>If you want to use the same attribute also for faceting, use the `afterDistinct` modifier of the `attributesForFaceting` setting.<br>This applies faceting _after_ deduplication, which will result in accurate facet counts.<br>|
|maxFacetHits|[maxFacetHits](#schemamaxfacethits)|false|none|Maximum number of facet values to return when [searching for facet values](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#search-for-facet-values).|
|keepDiacriticsOnCharacters|string|false|none|Characters for which diacritics should be preserved.<br><br>By default, Algolia removes diacritics from letters.<br>For example, `é` becomes `e`. If this causes issues in your search,<br>you can specify characters that should keep their diacritics.<br>|
|customRanking|[string]|false|none|Attributes to use as [custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking).<br>Attribute names are case-sensitive.<br><br>The custom ranking attributes decide which items are shown first if the other ranking criteria are equal.<br><br>Records with missing values for your selected custom ranking attributes are always sorted last.<br>Boolean attributes are sorted based on their alphabetical order.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br><br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>If you use two or more custom ranking attributes,<br>[reduce the precision](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/how-to/controlling-custom-ranking-metrics-precision) of your first attributes,<br>or the other attributes will never be applied.<br>|
|attributesToRetrieve|[attributesToRetrieve](#schemaattributestoretrieve)|false|none|Attributes to include in the API response.<br>To reduce the size of your response, you can retrieve only some of the attributes.<br>Attribute names are case-sensitive<br>- `*` retrieves all attributes, except attributes included in the `customRanking` and `unretrievableAttributes` settings.<br>- To retrieve all attributes except a specific one, prefix the attribute with a dash and combine it with the `*`: `["*", "-ATTRIBUTE"]`.<br>- The `objectID` attribute is always included.<br>|
|ranking|[string]|false|none|Determines the order in which Algolia returns your results.<br><br>By default, each entry corresponds to a [ranking criteria](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria).<br>The tie-breaking algorithm sequentially applies each criterion in the order they're specified.<br>If you configure a replica index for [sorting by an attribute](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-by-attribute),<br>you put the sorting attribute at the top of the list.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>Before you modify the default setting,<br>test your changes in the dashboard,<br>and by [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing).<br>|
|relevancyStrictness|[relevancyStrictness](#schemarelevancystrictness)|false|none|Relevancy threshold below which less relevant results aren't included in the results.<br>You can only set `relevancyStrictness` on [virtual replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/#standard-and-virtual-replicas).<br>Use this setting to strike a balance between the relevance and number of returned results.<br>|
|attributesToHighlight|[attributesToHighlight](#schemaattributestohighlight)|false|none|Attributes to highlight.<br>By default, all searchable attributes are highlighted.<br>Use `*` to highlight all attributes or use an empty array `[]` to turn off highlighting.<br>Attribute names are case-sensitive<br>With highlighting, strings that match the search query are surrounded by HTML tags defined by `highlightPreTag` and `highlightPostTag`.<br>You can use this to visually highlight matching parts of a search query in your UI<br>For more information, see [Highlighting and snippeting](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/highlighting-snippeting/js).<br>|
|attributesToSnippet|[attributesToSnippet](#schemaattributestosnippet)|false|none|Attributes for which to enable snippets.<br>Attribute names are case-sensitive<br>Snippets provide additional context to matched words.<br>If you enable snippets, they include 10 words, including the matched word.<br>The matched word will also be wrapped by HTML tags for highlighting.<br>You can adjust the number of words with the following notation: `ATTRIBUTE:NUMBER`,<br>where `NUMBER` is the number of words to be extracted.<br>|
|highlightPreTag|[highlightPreTag](#schemahighlightpretag)|false|none|HTML tag to insert before the highlighted parts in all highlighted results and snippets.|
|highlightPostTag|[highlightPostTag](#schemahighlightposttag)|false|none|HTML tag to insert after the highlighted parts in all highlighted results and snippets.|
|snippetEllipsisText|[snippetEllipsisText](#schemasnippetellipsistext)|false|none|String used as an ellipsis indicator when a snippet is truncated.|
|restrictHighlightAndSnippetArrays|[restrictHighlightAndSnippetArrays](#schemarestricthighlightandsnippetarrays)|false|none|Whether to restrict highlighting and snippeting to items that at least partially matched the search query.<br>By default, all items are highlighted and snippeted.<br>|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|minWordSizefor1Typo|[minWordSizefor1Typo](#schemaminwordsizefor1typo)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [one typo](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|minWordSizefor2Typos|[minWordSizefor2Typos](#schemaminwordsizefor2typos)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [two typos](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|typoTolerance|[typoTolerance](#schematypotolerance)|false|none|Whether [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance) is enabled and how it is applied.<br><br>If typo tolerance is true, `min`, or `strict`, [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) are also active.<br>|
|allowTyposOnNumericTokens|[allowTyposOnNumericTokens](#schemaallowtyposonnumerictokens)|false|none|Whether to allow typos on numbers in the search query.<br>Turn off this setting to reduce the number of irrelevant matches<br>when searching in large sets of similar numbers.<br>|
|disableTypoToleranceOnAttributes|[disableTypoToleranceOnAttributes](#schemadisabletypotoleranceonattributes)|false|none|Attributes for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance).<br>Attribute names are case-sensitive<br>Returning only exact matches can help when<br>- [Searching in hyphenated attributes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes).<br>- Reducing the number of matches when you have too many.<br>  This can happen with attributes that are long blocks of text, such as product descriptions.<br>Consider alternatives such as `disableTypoToleranceOnWords` or adding synonyms if your attributes have intentional unusual spellings that might look like typos.<br>|
|ignorePlurals|[ignorePlurals](#schemaignoreplurals)|false|none|Treat singular, plurals, and other forms of declensions as equivalent.<br>Only use this feature for the languages used in your index.<br>|
|removeStopWords|[removeStopWords](#schemaremovestopwords)|false|none|Removes stop words from the search query.<br><br>Stop words are common words like articles, conjunctions, prepositions, or pronouns that have little or no meaning on their own.<br>In English, "the", "a", or "and" are stop words.<br><br>Only use this feature for the languages used in your index.<br>|
|queryLanguages|[queryLanguages](#schemaquerylanguages)|false|none|Languages for language-specific query processing steps such as plurals, stop-word removal, and word-detection dictionaries.<br>This setting sets a default list of languages used by the `removeStopWords` and `ignorePlurals` settings.<br>This setting also sets a dictionary for word detection in the logogram-based [CJK](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/#normalization-for-logogram-based-languages-cjk) languages.<br>To support this, place the CJK language **first**.<br>**Always specify a query language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|decompoundQuery|[decompoundQuery](#schemadecompoundquery)|false|none|Whether to split compound words in the query into their building blocks.<br>For more information, see [Word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#split-compound-words).<br>Word segmentation is supported for these languages: German, Dutch, Finnish, Swedish, and Norwegian.<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|enableRules|[enableRules](#schemaenablerules)|false|none|Whether to enable rules.|
|enablePersonalization|[enablePersonalization](#schemaenablepersonalization)|false|none|Whether to enable Personalization.|
|queryType|[queryType](#schemaquerytype)|false|none|Determines if and how query words are interpreted as prefixes.<br><br>By default, only the last query word is treated as a prefix (`prefixLast`).<br>To turn off prefix search, use `prefixNone`.<br>Avoid `prefixAll`, which treats all query words as prefixes.<br>This might lead to counterintuitive results and makes your search slower.<br><br>For more information, see [Prefix searching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/prefix-searching).<br>|
|removeWordsIfNoResults|[removeWordsIfNoResults](#schemaremovewordsifnoresults)|false|none|Strategy for removing words from the query when it doesn't return any results.<br>This helps to avoid returning empty search results.<br><br>- `none`.<br>  No words are removed when a query doesn't return results.<br><br>- `lastWords`.<br>  Treat the last (then second to last, then third to last) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `firstWords`.<br>  Treat the first (then second, then third) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `allOptional`.<br>  Treat all words as optional.<br><br>For more information, see [Remove words to improve results](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/in-depth/why-use-remove-words-if-no-results).<br>|
|mode|[mode](#schemamode)|false|none|Search mode the index will use to query for results.<br><br>This setting only applies to indices, for which Algolia enabled NeuralSearch for you.<br>|
|semanticSearch|[semanticSearch](#schemasemanticsearch)|false|none|Settings for the semantic search part of NeuralSearch.<br>Only used when `mode` is `neuralSearch`.<br>|
|advancedSyntax|[advancedSyntax](#schemaadvancedsyntax)|false|none|Whether to support phrase matching and excluding words from search queries.<br>Use the `advancedSyntaxFeatures` parameter to control which feature is supported.<br>|
|optionalWords|[optionalWords](#schemaoptionalwords)|false|none|Words that should be considered optional when found in the query.<br><br>By default, records must match all words in the search query to be included in the search results.<br>Adding optional words can increase the number of search results by running an additional search query that doesn't include the optional words.<br>For example, if the search query is "action video" and "video" is optional,<br>the search engine runs two queries: one for "action video" and one for "action".<br>Records that match all words are ranked higher.<br><br>For a search query with 4 or more words **and** all its words are optional,<br>the number of matched words required for a record to be included in the search results increases for every 1,000 records:<br><br>- If `optionalWords` has fewer than 10 words, the required number of matched words increases by 1:<br>  results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 2 matched words.<br>- If `optionalWords` has 10 or more words, the required number of matched words increases by the number of optional words divided by 5 (rounded down).<br>  Example: with 18 optional words, results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 4 matched words.<br><br>For more information, see [Optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).<br>|
|disableExactOnAttributes|[disableExactOnAttributes](#schemadisableexactonattributes)|false|none|Searchable attributes for which you want to [turn off the Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes).<br>Attribute names are case-sensitive<br>This can be useful for attributes with long values, where the likelihood of an exact match is high,<br>such as product descriptions.<br>Turning off the Exact ranking criterion for these attributes favors exact matching on other attributes.<br>This reduces the impact of individual attributes with a lot of content on ranking.<br>|
|exactOnSingleWordQuery|[exactOnSingleWordQuery](#schemaexactonsinglewordquery)|false|none|Determines how the [Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes) is computed when the search query has only one word.<br><br>- `attribute`.<br>  The Exact ranking criterion is 1 if the query word and attribute value are the same.<br>  For example, a search for "road" will match the value "road", but not "road trip".<br><br>- `none`.<br>  The Exact ranking criterion is ignored on single-word searches.<br><br>- `word`.<br>  The Exact ranking criterion is 1 if the query word is found in the attribute value.<br>  The query word must have at least 3 characters and must not be a stop word.<br>  Only exact matches will be highlighted,<br>  partial and prefix matches won't.<br>|
|alternativesAsExact|[IndexSettings_alternativesAsExact](#schemaindexsettings_alternativesasexact)|false|none|Determine which plurals and synonyms should be considered an exact matches.<br>By default, Algolia treats singular and plural forms of a word, and single-word synonyms, as [exact](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#exact) matches when searching.<br>For example:<br>- "swimsuit" and "swimsuits" are treated the same.<br>- "swimsuit" and "swimwear" are treated the same (if they are [synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/#regular-synonyms)).<br>- `ignorePlurals`.<br>  Plurals and similar declensions added by the `ignorePlurals` setting are considered exact matches.<br>- `singleWordSynonym`.<br>  Single-word synonyms, such as "NY" = "NYC", are considered exact matches.<br>- `multiWordsSynonym`.<br>  Multi-word synonyms, such as "NY" = "New York", are considered exact matches.<br>|
|advancedSyntaxFeatures|[IndexSettings_advancedSyntaxFeatures](#schemaindexsettings_advancedsyntaxfeatures)|false|none|Advanced search syntax features you want to support.<br>- `exactPhrase`.<br>  Phrases in quotes must match exactly.<br>  For example, `sparkly blue "iPhone case"` only returns records with the exact string "iPhone case".<br>- `excludeWords`.<br>  Query words prefixed with a `-` must not occur in a record.<br>  For example, `search -engine` matches records that contain "search" but not "engine".<br>This setting only has an effect if `advancedSyntax` is true.<br>|
|distinct|[distinct](#schemadistinct)|false|none|Determines how many records of a group are included in the search results.<br><br>Records with the same value for the `attributeForDistinct` attribute are considered a group.<br>The `distinct` setting controls how many members of the group are returned.<br>This is useful for [deduplication and grouping](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#deduplicate-results-with-distinct).<br><br>The `distinct` setting is ignored if `attributeForDistinct` is not set.<br>|
|replaceSynonymsInHighlight|[replaceSynonymsInHighlight](#schemareplacesynonymsinhighlight)|false|none|Whether to replace a highlighted word with the matched synonym.<br>By default, the original words are highlighted even if a synonym matches.<br>For example, with `home` as a synonym for `house` and a search for `home`,<br>records matching either "home" or "house" are included in the search results,<br>and either "home" or "house" are highlighted<br>With `replaceSynonymsInHighlight` set to `true`, a search for `home` still matches the same records,<br>but all occurrences of "house" are replaced by "home" in the highlighted response.<br>|
|minProximity|[minProximity](#schemaminproximity)|false|none|Minimum proximity score for two matching words.<br>This adjusts the [Proximity ranking criterion](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#proximity)<br>by equally scoring matches that are farther apart<br>For example, if `minProximity` is 2, neighboring matches and matches with one word between them would have the same score.<br>|
|responseFields|[responseFields](#schemaresponsefields)|false|none|Properties to include in the API response of search and browse requests.<br>By default, all response properties are included.<br>To reduce the response size, you can select which properties should be included<br>An empty list may lead to an empty API response (except properties you can't exclude)<br>You can't exclude these properties:<br>`message`, `warning`, `cursor`, `abTestVariantID`,<br>or any property added by setting `getRankingInfo` to true<br>Your search depends on the `hits` field. If you omit this field, searches won't return any results.<br>Your UI might also depend on other properties, for example, for pagination.<br>Before restricting the response size, check the impact on your search experience.<br>|
|maxValuesPerFacet|[maxValuesPerFacet](#schemamaxvaluesperfacet)|false|none|Maximum number of facet values to return for each facet.|
|sortFacetValuesBy|[sortFacetValuesBy](#schemasortfacetvaluesby)|false|none|Order in which to retrieve facet values.<br>- `count`.<br>  Facet values are retrieved by decreasing count.<br>  The count is the number of matching records containing this facet value.<br>- `alpha`.<br>  Retrieve facet values alphabetically.<br>This setting doesn't influence how facet values are displayed in your UI (see `renderingContent`).<br>For more information, see [facet value display](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js).<br>|
|attributeCriteriaComputedByMinProximity|[attributeCriteriaComputedByMinProximity](#schemaattributecriteriacomputedbyminproximity)|false|none|Whether the best matching attribute should be determined by minimum proximity.<br>This setting only affects ranking if the Attribute ranking criterion comes before Proximity in the `ranking` setting.<br>If true, the best matching attribute is selected based on the minimum proximity of multiple matches.<br>Otherwise, the best matching attribute is determined by the order in the `searchableAttributes` setting.<br><br>Prefer `attributeCriteriaComputedBy`, which expresses the same two behaviors and adds the `sum` strategy.<br>If you set both, `attributeCriteriaComputedBy` takes precedence.<br>|
|attributeCriteriaComputedBy|[attributeCriteriaComputedBy](#schemaattributecriteriacomputedby)|false|none|Strategy for computing the Attribute ranking criterion.<br>This mainly affects multi-word queries with matches in more than one attribute.<br><br>The `ranking` setting decides whether `best` takes effect.<br>When Attribute comes after Proximity, which is the default order, the engine always uses the `minProximity` strategy and ignores `best`.<br>To select `best`, move Attribute before Proximity in `ranking`.<br>The `sum` strategy applies in both orders.<br><br>- `minProximity`.<br>  Pick the best matching attribute from the attributes that form the best proximity score.<br>  On an ordered attribute, the match position breaks ties.<br>- `best`.<br>  Pick the best matching attribute from all attributes that match any query word.<br>  On an ordered attribute, the match position breaks ties.<br>- `sum`.<br>  Add up a score for every query word instead of picking one attribute.<br>  Each word's score comes from the attribute it matched, and from its position in that attribute when the attribute is ordered.<br>  A query word that matches nothing adds a large penalty.<br>  A record with a lower total ranks higher.<br>  A record therefore cannot rank high only because one word of a multi-word query matched a top attribute.<br>  Use `sum` with short, relevant attributes, and set long-text attributes to unordered.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|enableReRanking|[enableReRanking](#schemaenablereranking)|false|none|Whether this search will use [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking).<br>This setting only has an effect if you activated Dynamic Re-Ranking for this index in the Algolia dashboard.<br>|
|reRankingApplyFilter|[reRankingApplyFilter](#schemarerankingapplyfilter) \| null|false|none|none|
|primary|string|false|none|Replica indices only: the name of the primary index for this replica.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|indexLanguages|af|
|indexLanguages|ar|
|indexLanguages|az|
|indexLanguages|bg|
|indexLanguages|bn|
|indexLanguages|ca|
|indexLanguages|cs|
|indexLanguages|cy|
|indexLanguages|da|
|indexLanguages|de|
|indexLanguages|el|
|indexLanguages|en|
|indexLanguages|eo|
|indexLanguages|es|
|indexLanguages|et|
|indexLanguages|eu|
|indexLanguages|fa|
|indexLanguages|fi|
|indexLanguages|fo|
|indexLanguages|fr|
|indexLanguages|ga|
|indexLanguages|gl|
|indexLanguages|he|
|indexLanguages|hi|
|indexLanguages|hu|
|indexLanguages|hy|
|indexLanguages|id|
|indexLanguages|is|
|indexLanguages|it|
|indexLanguages|ja|
|indexLanguages|ka|
|indexLanguages|kk|
|indexLanguages|ko|
|indexLanguages|ku|
|indexLanguages|ky|
|indexLanguages|lt|
|indexLanguages|lv|
|indexLanguages|mi|
|indexLanguages|mn|
|indexLanguages|mr|
|indexLanguages|ms|
|indexLanguages|mt|
|indexLanguages|nb|
|indexLanguages|nl|
|indexLanguages|no|
|indexLanguages|ns|
|indexLanguages|pl|
|indexLanguages|ps|
|indexLanguages|pt|
|indexLanguages|pt-br|
|indexLanguages|qu|
|indexLanguages|ro|
|indexLanguages|ru|
|indexLanguages|sk|
|indexLanguages|sq|
|indexLanguages|sv|
|indexLanguages|sw|
|indexLanguages|ta|
|indexLanguages|te|
|indexLanguages|th|
|indexLanguages|tl|
|indexLanguages|tn|
|indexLanguages|tr|
|indexLanguages|tt|
|indexLanguages|uk|
|indexLanguages|ur|
|indexLanguages|uz|
|indexLanguages|zh|
|queryLanguages|af|
|queryLanguages|ar|
|queryLanguages|az|
|queryLanguages|bg|
|queryLanguages|bn|
|queryLanguages|ca|
|queryLanguages|cs|
|queryLanguages|cy|
|queryLanguages|da|
|queryLanguages|de|
|queryLanguages|el|
|queryLanguages|en|
|queryLanguages|eo|
|queryLanguages|es|
|queryLanguages|et|
|queryLanguages|eu|
|queryLanguages|fa|
|queryLanguages|fi|
|queryLanguages|fo|
|queryLanguages|fr|
|queryLanguages|ga|
|queryLanguages|gl|
|queryLanguages|he|
|queryLanguages|hi|
|queryLanguages|hu|
|queryLanguages|hy|
|queryLanguages|id|
|queryLanguages|is|
|queryLanguages|it|
|queryLanguages|ja|
|queryLanguages|ka|
|queryLanguages|kk|
|queryLanguages|ko|
|queryLanguages|ku|
|queryLanguages|ky|
|queryLanguages|lt|
|queryLanguages|lv|
|queryLanguages|mi|
|queryLanguages|mn|
|queryLanguages|mr|
|queryLanguages|ms|
|queryLanguages|mt|
|queryLanguages|nb|
|queryLanguages|nl|
|queryLanguages|no|
|queryLanguages|ns|
|queryLanguages|pl|
|queryLanguages|ps|
|queryLanguages|pt|
|queryLanguages|pt-br|
|queryLanguages|qu|
|queryLanguages|ro|
|queryLanguages|ru|
|queryLanguages|sk|
|queryLanguages|sq|
|queryLanguages|sv|
|queryLanguages|sw|
|queryLanguages|ta|
|queryLanguages|te|
|queryLanguages|th|
|queryLanguages|tl|
|queryLanguages|tn|
|queryLanguages|tr|
|queryLanguages|tt|
|queryLanguages|uk|
|queryLanguages|ur|
|queryLanguages|uz|
|queryLanguages|zh|
|queryType|prefixLast|
|queryType|prefixAll|
|queryType|prefixNone|
|removeWordsIfNoResults|none|
|removeWordsIfNoResults|lastWords|
|removeWordsIfNoResults|firstWords|
|removeWordsIfNoResults|allOptional|
|mode|neuralSearch|
|mode|keywordSearch|
|exactOnSingleWordQuery|attribute|
|exactOnSingleWordQuery|none|
|exactOnSingleWordQuery|word|
|alternativesAsExact|ignorePlurals|
|alternativesAsExact|singleWordSynonym|
|alternativesAsExact|multiWordsSynonym|
|alternativesAsExact|ignoreConjugations|
|advancedSyntaxFeatures|exactPhrase|
|advancedSyntaxFeatures|excludeWords|
|attributeCriteriaComputedBy|minProximity|
|attributeCriteriaComputedBy|best|
|attributeCriteriaComputedBy|sum|

<h2 id="tocS_SynonymType">SynonymType</h2>
<!-- backwards compatibility -->
<a id="schemasynonymtype"></a>
<a id="schema_SynonymType"></a>
<a id="tocSsynonymtype"></a>
<a id="tocssynonymtype"></a>

```json
"onewaysynonym"
```

Synonym type.

<h2 id="tocS_synonymHit">synonymHit</h2>
<!-- backwards compatibility -->
<a id="schemasynonymhit"></a>
<a id="schema_synonymHit"></a>
<a id="tocSsynonymhit"></a>
<a id="tocssynonymhit"></a>

```json
{
  "objectID": "synonymID",
  "type": "onewaysynonym",
  "synonyms": [
    "vehicle",
    "auto"
  ],
  "input": "car",
  "word": "car",
  "corrections": [
    "vehicle",
    "auto"
  ],
  "placeholder": "<Street>",
  "replacements": [
    "street",
    "st"
  ]
}
```

Synonym object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectID|string|true|none|Unique identifier of a synonym object.|
|type|[SynonymType](#schemasynonymtype)|true|none|Synonym type.|
|synonyms|[string]|false|none|Words or phrases considered equivalent.|
|input|string|false|none|Word or phrase to appear in query strings (for [`onewaysynonym`s](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/in-depth/one-way-synonyms)).|
|word|string|false|none|Word or phrase to appear in query strings (for [`altcorrection1` and `altcorrection2`](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/in-depth/synonyms-alternative-corrections)).|
|corrections|[string]|false|none|Words to be matched in records.|
|placeholder|string|false|none|[Placeholder token](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/in-depth/synonyms-placeholders) to be put inside records.<br>|
|replacements|[string]|false|none|Query words that will match the [placeholder token](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/in-depth/synonyms-placeholders).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|synonym|
|type|onewaysynonym|
|type|altcorrection1|
|type|altcorrection2|
|type|placeholder|
|type|oneWaySynonym|
|type|altCorrection1|
|type|altCorrection2|

<h2 id="tocS_id">id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"12"
```

Unique identifier of a synonym object.

<h2 id="tocS_synonymHits">synonymHits</h2>
<!-- backwards compatibility -->
<a id="schemasynonymhits"></a>
<a id="schema_synonymHits"></a>
<a id="tocSsynonymhits"></a>
<a id="tocssynonymhits"></a>

```json
[
  {
    "objectID": "synonymID",
    "type": "onewaysynonym",
    "synonyms": [
      "vehicle",
      "auto"
    ],
    "input": "car",
    "word": "car",
    "corrections": [
      "vehicle",
      "auto"
    ],
    "placeholder": "<Street>",
    "replacements": [
      "street",
      "st"
    ]
  }
]
```

Matching synonyms.

<h2 id="tocS_searchSynonymsResponse">searchSynonymsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchsynonymsresponse"></a>
<a id="schema_searchSynonymsResponse"></a>
<a id="tocSsearchsynonymsresponse"></a>
<a id="tocssearchsynonymsresponse"></a>

```json
{
  "hits": [
    {
      "objectID": "synonymID",
      "type": "onewaysynonym",
      "synonyms": [
        "vehicle",
        "auto"
      ],
      "input": "car",
      "word": "car",
      "corrections": [
        "vehicle",
        "auto"
      ],
      "placeholder": "<Street>",
      "replacements": [
        "street",
        "st"
      ]
    }
  ],
  "nbHits": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[synonymHits](#schemasynonymhits)|true|none|Matching synonyms.|
|nbHits|[nbHits](#schemanbhits)|true|none|Number of results (hits).|

<h2 id="tocS_keyString">keyString</h2>
<!-- backwards compatibility -->
<a id="schemakeystring"></a>
<a id="schema_keyString"></a>
<a id="tocSkeystring"></a>
<a id="tocskeystring"></a>

```json
"13ad45b4d0a2f6ea65ecbddf6aa260f2"
```

API key.

<h2 id="tocS_createdAtTimestamp">createdAtTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemacreatedattimestamp"></a>
<a id="schema_createdAtTimestamp"></a>
<a id="tocScreatedattimestamp"></a>
<a id="tocscreatedattimestamp"></a>

```json
1656345570000
```

Timestamp when the object was created, in milliseconds since the Unix epoch.

<h2 id="tocS_baseGetApiKeyResponse">baseGetApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemabasegetapikeyresponse"></a>
<a id="schema_baseGetApiKeyResponse"></a>
<a id="tocSbasegetapikeyresponse"></a>
<a id="tocsbasegetapikeyresponse"></a>

```json
{
  "value": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
  "createdAt": 1656345570000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[keyString](#schemakeystring)|true|none|API key.|
|createdAt|[createdAtTimestamp](#schemacreatedattimestamp)|true|none|Timestamp when the object was created, in milliseconds since the Unix epoch.|

<h2 id="tocS_acl">acl</h2>
<!-- backwards compatibility -->
<a id="schemaacl"></a>
<a id="schema_acl"></a>
<a id="tocSacl"></a>
<a id="tocsacl"></a>

```json
"addObject"
```

Access control list permissions.

<h2 id="tocS_apiKey">apiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_apiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "acl": [
    "search",
    "addObject"
  ],
  "description": "Used for indexing by the CLI",
  "indexes": [
    "dev_*",
    "prod_en_products"
  ],
  "maxHitsPerQuery": 0,
  "maxQueriesPerIPPerHour": 0,
  "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
  "referers": [
    "*algolia.com*"
  ],
  "validity": 86400
}
```

API key object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|[[acl](#schemaacl)]|true|none|Permissions that determine the type of API requests this key can make.<br>The required ACL is listed in each endpoint's reference.<br>For more information, see [access control list](https://www.algolia.com/doc/guides/security/api-keys/#access-control-list-acl).<br>|
|description|string|false|none|Description of an API key to help you identify this API key.|
|indexes|[string]|false|none|Index names or patterns that this API key can access.<br>By default, an API key can access all indices in the same application.<br><br>You can use leading and trailing wildcard characters (`*`):<br><br>- `dev_*` matches all indices starting with "dev_".<br>- `*_dev` matches all indices ending with "_dev".<br>- `*_products_*` matches all indices containing "_products_".<br>|
|maxHitsPerQuery|integer|false|none|Maximum number of hits this API key can retrieve per page.<br><br>If you set this to 0, the maximum allowed value (1,000) applies.<br>If you also set `hitsPerPage` on the index, the engine uses the lower of the two values.<br>|
|maxQueriesPerIPPerHour|integer|false|none|Maximum number of API requests allowed per IP address or [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken) per hour.<br><br>If this limit is reached, the API returns an error with status code `429`.<br>By default, there's no limit.<br>|
|queryParameters|string|false|none|Query parameters to add when making API requests with this API key.<br><br>To restrict this API key to specific IP addresses, add the `restrictSources` parameter.<br>You can only add a single source, but you can provide a range of IP addresses.<br><br>Creating an API key fails if the request is made from an IP address outside the restricted range.<br>|
|referers|[string]|false|none|Allowed HTTP referrers for this API key.<br><br>By default, all referrers are allowed.<br>You can use leading and trailing wildcard characters (`*`):<br><br>- `https://algolia.com/*` allows all referrers starting with "https://algolia.com/".<br>- `*.algolia.com` allows all referrers ending with ".algolia.com".<br>- `*algolia.com*` allows all referrers in the domain "algolia.com".<br><br>Like all HTTP headers, referrers can be spoofed. Don't rely on them to secure your data.<br>For more information, see [HTTP referrer restrictions](https://www.algolia.com/doc/guides/security/security-best-practices/#http-referrer-restrictions).<br>|
|validity|integer|false|none|Duration (in seconds) after which the API key expires.<br>By default, API keys don't expire.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|acl|addObject|
|acl|analytics|
|acl|browse|
|acl|deleteObject|
|acl|deleteIndex|
|acl|editSettings|
|acl|inference|
|acl|listIndexes|
|acl|logs|
|acl|personalization|
|acl|recommendation|
|acl|search|
|acl|seeUnretrievableAttributes|
|acl|settings|
|acl|usage|
|acl|nluWriteProject|
|acl|nluReadProject|
|acl|nluWriteEntity|
|acl|nluReadEntity|
|acl|nluWriteIntent|
|acl|nluReadIntent|
|acl|nluPrediction|
|acl|nluReadAnswers|

<h2 id="tocS_getApiKeyResponse">getApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapikeyresponse"></a>
<a id="schema_getApiKeyResponse"></a>
<a id="tocSgetapikeyresponse"></a>
<a id="tocsgetapikeyresponse"></a>

```json
{
  "value": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
  "createdAt": 1656345570000,
  "acl": [
    "search",
    "addObject"
  ],
  "description": "Used for indexing by the CLI",
  "indexes": [
    "dev_*",
    "prod_en_products"
  ],
  "maxHitsPerQuery": 0,
  "maxQueriesPerIPPerHour": 0,
  "queryParameters": "typoTolerance=strict&restrictSources=192.168.1.0/24",
  "referers": [
    "*algolia.com*"
  ],
  "validity": 86400
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[keyString](#schemakeystring)|true|none|API key.|
|createdAt|[createdAtTimestamp](#schemacreatedattimestamp)|true|none|Timestamp when the object was created, in milliseconds since the Unix epoch.|
|acl|[[acl](#schemaacl)]|true|none|Permissions that determine the type of API requests this key can make.<br>The required ACL is listed in each endpoint's reference.<br>For more information, see [access control list](https://www.algolia.com/doc/guides/security/api-keys/#access-control-list-acl).<br>|
|description|string|false|none|Description of an API key to help you identify this API key.|
|indexes|[string]|false|none|Index names or patterns that this API key can access.<br>By default, an API key can access all indices in the same application.<br><br>You can use leading and trailing wildcard characters (`*`):<br><br>- `dev_*` matches all indices starting with "dev_".<br>- `*_dev` matches all indices ending with "_dev".<br>- `*_products_*` matches all indices containing "_products_".<br>|
|maxHitsPerQuery|integer|false|none|Maximum number of hits this API key can retrieve per page.<br><br>If you set this to 0, the maximum allowed value (1,000) applies.<br>If you also set `hitsPerPage` on the index, the engine uses the lower of the two values.<br>|
|maxQueriesPerIPPerHour|integer|false|none|Maximum number of API requests allowed per IP address or [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken) per hour.<br><br>If this limit is reached, the API returns an error with status code `429`.<br>By default, there's no limit.<br>|
|queryParameters|string|false|none|Query parameters to add when making API requests with this API key.<br><br>To restrict this API key to specific IP addresses, add the `restrictSources` parameter.<br>You can only add a single source, but you can provide a range of IP addresses.<br><br>Creating an API key fails if the request is made from an IP address outside the restricted range.<br>|
|referers|[string]|false|none|Allowed HTTP referrers for this API key.<br><br>By default, all referrers are allowed.<br>You can use leading and trailing wildcard characters (`*`):<br><br>- `https://algolia.com/*` allows all referrers starting with "https://algolia.com/".<br>- `*.algolia.com` allows all referrers ending with ".algolia.com".<br>- `*algolia.com*` allows all referrers in the domain "algolia.com".<br><br>Like all HTTP headers, referrers can be spoofed. Don't rely on them to secure your data.<br>For more information, see [HTTP referrer restrictions](https://www.algolia.com/doc/guides/security/security-best-practices/#http-referrer-restrictions).<br>|
|validity|integer|false|none|Duration (in seconds) after which the API key expires.<br>By default, API keys don't expire.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|acl|addObject|
|acl|analytics|
|acl|browse|
|acl|deleteObject|
|acl|deleteIndex|
|acl|editSettings|
|acl|inference|
|acl|listIndexes|
|acl|logs|
|acl|personalization|
|acl|recommendation|
|acl|search|
|acl|seeUnretrievableAttributes|
|acl|settings|
|acl|usage|
|acl|nluWriteProject|
|acl|nluReadProject|
|acl|nluWriteEntity|
|acl|nluReadEntity|
|acl|nluWriteIntent|
|acl|nluReadIntent|
|acl|nluPrediction|
|acl|nluReadAnswers|

<h2 id="tocS_addApiKeyResponse">addApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddapikeyresponse"></a>
<a id="schema_addApiKeyResponse"></a>
<a id="tocSaddapikeyresponse"></a>
<a id="tocsaddapikeyresponse"></a>

```json
{
  "key": "13ad45b4d0a2f6ea65ecbddf6aa260f2",
  "createdAt": "2023-07-04T12:49:15Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[keyString](#schemakeystring)|true|none|API key.|
|createdAt|[createdAt](#schemacreatedat)|true|none|Date and time when the object was created, in RFC 3339 format.|

<h2 id="tocS_ruleID">ruleID</h2>
<!-- backwards compatibility -->
<a id="schemaruleid"></a>
<a id="schema_ruleID"></a>
<a id="tocSruleid"></a>
<a id="tocsruleid"></a>

```json
"string"
```

Unique identifier of a rule object.

<h2 id="tocS_anchoring">anchoring</h2>
<!-- backwards compatibility -->
<a id="schemaanchoring"></a>
<a id="schema_anchoring"></a>
<a id="tocSanchoring"></a>
<a id="tocsanchoring"></a>

```json
"is"
```

Which part of the search query the pattern should match:

- `startsWith`. The pattern must match the beginning of the query.
- `endsWith`. The pattern must match the end of the query.
- `is`. The pattern must match the query exactly.
- `contains`. The pattern must match anywhere in the query.

Empty queries are only allowed as patterns with `anchoring: is`.

<h2 id="tocS_context">context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
"mobile"
```

An additional restriction that only triggers the rule, when the search has the same value as `ruleContexts` parameter.
For example, if `context: mobile`, the rule is only triggered when the search request has a matching `ruleContexts: mobile`.
A rule context must only contain alphanumeric characters.

<h2 id="tocS_condition">condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "pattern": "{facet:genre}",
  "anchoring": "is",
  "alternatives": false,
  "context": "mobile",
  "filters": "genre:comedy"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pattern|string|false|none|Query pattern that triggers the rule.<br><br>You can use either a literal string, or a special pattern `{facet:ATTRIBUTE}`, where `ATTRIBUTE` is a facet name.<br>The rule is triggered if the query matches the literal string or a value of the specified facet.<br>For example, with `pattern: {facet:genre}`, the rule is triggered when users search for a genre, such as "comedy".<br>|
|anchoring|[anchoring](#schemaanchoring)|false|none|Which part of the search query the pattern should match:<br><br>- `startsWith`. The pattern must match the beginning of the query.<br>- `endsWith`. The pattern must match the end of the query.<br>- `is`. The pattern must match the query exactly.<br>- `contains`. The pattern must match anywhere in the query.<br><br>Empty queries are only allowed as patterns with `anchoring: is`.<br>|
|alternatives|boolean|false|none|Whether the pattern should match plurals, synonyms, and typos.|
|context|[context](#schemacontext)|false|none|An additional restriction that only triggers the rule, when the search has the same value as `ruleContexts` parameter.<br>For example, if `context: mobile`, the rule is only triggered when the search request has a matching `ruleContexts: mobile`.<br>A rule context must only contain alphanumeric characters.<br>|
|filters|string|false|none|Filters that trigger the rule.<br><br>You can add filters using the syntax `facet:value` so that the rule is triggered, when the specific filter is selected.<br>You can use `filters` on its own or combine it with the `pattern` parameter.<br>You can't combine multiple filters with `OR` and you can't use numeric filters.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|anchoring|is|
|anchoring|startsWith|
|anchoring|endsWith|
|anchoring|contains|

<h2 id="tocS_editType">editType</h2>
<!-- backwards compatibility -->
<a id="schemaedittype"></a>
<a id="schema_editType"></a>
<a id="tocSedittype"></a>
<a id="tocsedittype"></a>

```json
"remove"
```

Type of edit.

<h2 id="tocS_edit">edit</h2>
<!-- backwards compatibility -->
<a id="schemaedit"></a>
<a id="schema_edit"></a>
<a id="tocSedit"></a>
<a id="tocsedit"></a>

```json
{
  "type": "remove",
  "delete": "string",
  "insert": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[editType](#schemaedittype)|false|none|Type of edit.|
|delete|string|false|none|Text or patterns to remove from the query string.|
|insert|string|false|none|Text to be added in place of the deleted text inside the query string.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|remove|
|type|replace|

<h2 id="tocS_consequenceQueryObject">consequenceQueryObject</h2>
<!-- backwards compatibility -->
<a id="schemaconsequencequeryobject"></a>
<a id="schema_consequenceQueryObject"></a>
<a id="tocSconsequencequeryobject"></a>
<a id="tocsconsequencequeryobject"></a>

```json
{
  "remove": [
    "string"
  ],
  "edits": [
    {
      "type": "remove",
      "delete": "string",
      "insert": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remove|[string]|false|none|Words to remove from the search query.|
|edits|[[edit](#schemaedit)]|false|none|Changes to make to the search query.|

<h2 id="tocS_consequenceQuery">consequenceQuery</h2>
<!-- backwards compatibility -->
<a id="schemaconsequencequery"></a>
<a id="schema_consequenceQuery"></a>
<a id="tocSconsequencequery"></a>
<a id="tocsconsequencequery"></a>

```json
{
  "remove": [
    "string"
  ],
  "edits": [
    {
      "type": "remove",
      "delete": "string",
      "insert": "string"
    }
  ]
}
```

Replace or edit the search query.

If `consequenceQuery` is a string, the entire search query is replaced with that string.
If `consequenceQuery` is an object, it describes incremental edits made to the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[consequenceQueryObject](#schemaconsequencequeryobject)|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_automaticFacetFilter">automaticFacetFilter</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticfacetfilter"></a>
<a id="schema_automaticFacetFilter"></a>
<a id="tocSautomaticfacetfilter"></a>
<a id="tocsautomaticfacetfilter"></a>

```json
{
  "facet": "string",
  "score": 1,
  "disjunctive": false
}
```

Filter or optional filter to be applied to the search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet|string|true|none|Facet name to be applied as filter.<br>The name must match placeholders in the `pattern` parameter.<br>For example, with `pattern: {facet:genre}`, `automaticFacetFilters` must be `genre`.<br>|
|score|integer|false|none|Filter scores to give different weights to individual filters.|
|disjunctive|boolean|false|none|Whether the filter is disjunctive or conjunctive.<br><br>If true the filter has multiple matches, multiple occurrences are combined with the logical `OR` operation.<br>If false, multiple occurrences are combined with the logical `AND` operation.<br>|

<h2 id="tocS_automaticFacetFilters">automaticFacetFilters</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticfacetfilters"></a>
<a id="schema_automaticFacetFilters"></a>
<a id="tocSautomaticfacetfilters"></a>
<a id="tocsautomaticfacetfilters"></a>

```json
[
  {
    "facet": "string",
    "score": 1,
    "disjunctive": false
  }
]
```

Filter to be applied to the search.

You can use this to respond to search queries that match a facet value.
For example, if users search for "comedy", which matches a facet value of the "genre" facet,
you can filter the results to show the top-ranked comedy movies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[automaticFacetFilter](#schemaautomaticfacetfilter)]|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_params">params</h2>
<!-- backwards compatibility -->
<a id="schemaparams"></a>
<a id="schema_params"></a>
<a id="tocSparams"></a>
<a id="tocsparams"></a>

```json
{
  "query": {
    "remove": [
      "string"
    ],
    "edits": [
      {
        "type": "remove",
        "delete": "string",
        "insert": "string"
      }
    ]
  },
  "automaticFacetFilters": [
    {
      "facet": "string",
      "score": 1,
      "disjunctive": false
    }
  ],
  "automaticOptionalFacetFilters": [
    {
      "facet": "string",
      "score": 1,
      "disjunctive": false
    }
  ],
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  }
}
```

Parameters to apply to this search.

You can use all search parameters, plus special `automaticFacetFilters`, `automaticOptionalFacetFilters`, and `query`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[consequenceQuery](#schemaconsequencequery)|false|none|Replace or edit the search query.<br><br>If `consequenceQuery` is a string, the entire search query is replaced with that string.<br>If `consequenceQuery` is an object, it describes incremental edits made to the query.<br>|
|automaticFacetFilters|[automaticFacetFilters](#schemaautomaticfacetfilters)|false|none|Filter to be applied to the search.<br><br>You can use this to respond to search queries that match a facet value.<br>For example, if users search for "comedy", which matches a facet value of the "genre" facet,<br>you can filter the results to show the top-ranked comedy movies.<br>|
|automaticOptionalFacetFilters|[automaticFacetFilters](#schemaautomaticfacetfilters)|false|none|Filter to be applied to the search.<br><br>You can use this to respond to search queries that match a facet value.<br>For example, if users search for "comedy", which matches a facet value of the "genre" facet,<br>you can filter the results to show the top-ranked comedy movies.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|

<h2 id="tocS_consequenceParams">consequenceParams</h2>
<!-- backwards compatibility -->
<a id="schemaconsequenceparams"></a>
<a id="schema_consequenceParams"></a>
<a id="tocSconsequenceparams"></a>
<a id="tocsconsequenceparams"></a>

```json
{
  "similarQuery": "comedy drama crime Macy Buscemi",
  "filters": "(category:Book OR category:Ebook) AND _tags:published",
  "facetFilters": [
    [
      "category:Book",
      "category:-Movie"
    ],
    "author:John Doe"
  ],
  "optionalFilters": [
    "category:Book",
    "author:John Doe"
  ],
  "numericFilters": [
    [
      "inStock = 1",
      "deliveryDate < 1441755506"
    ],
    "price < 1000"
  ],
  "tagFilters": [
    [
      "Book",
      "Movie"
    ],
    "SciFi"
  ],
  "sumOrFiltersScores": false,
  "restrictSearchableAttributes": [
    "title",
    "author"
  ],
  "facets": [
    "*"
  ],
  "facetingAfterDistinct": false,
  "page": 0,
  "offset": 0,
  "length": 0,
  "aroundLatLng": "40.71,-74.01",
  "aroundLatLngViaIP": false,
  "aroundRadius": 1,
  "aroundPrecision": 10,
  "minimumAroundRadius": 1,
  "insideBoundingBox": "string",
  "insidePolygon": [
    [
      47.3165,
      4.9665,
      47.3424,
      5.0201,
      47.32,
      4.9
    ],
    [
      40.9234,
      2.1185,
      38.643,
      1.9916,
      39.2587,
      2.0104
    ]
  ],
  "naturalLanguages": [],
  "ruleContexts": [
    "mobile"
  ],
  "personalizationImpact": 100,
  "userToken": "test-user-123",
  "getRankingInfo": false,
  "synonyms": true,
  "clickAnalytics": false,
  "analytics": true,
  "analyticsTags": [],
  "percentileComputation": true,
  "enableABTest": true,
  "attributesToRetrieve": [
    "author",
    "title",
    "content"
  ],
  "ranking": [
    "typo",
    "geo",
    "words",
    "filters",
    "proximity",
    "attribute",
    "exact",
    "custom"
  ],
  "relevancyStrictness": 90,
  "attributesToHighlight": [
    "author",
    "title",
    "conten",
    "content"
  ],
  "attributesToSnippet": [
    "content:80",
    "description"
  ],
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "snippetEllipsisText": "…",
  "restrictHighlightAndSnippetArrays": false,
  "hitsPerPage": 20,
  "minWordSizefor1Typo": 4,
  "minWordSizefor2Typos": 8,
  "typoTolerance": true,
  "allowTyposOnNumericTokens": true,
  "disableTypoToleranceOnAttributes": [
    "sku"
  ],
  "ignorePlurals": [
    "ca",
    "es"
  ],
  "removeStopWords": [
    "ca",
    "es"
  ],
  "queryLanguages": [
    "es"
  ],
  "decompoundQuery": true,
  "enableRules": true,
  "enablePersonalization": false,
  "queryType": "prefixLast",
  "removeWordsIfNoResults": "firstWords",
  "mode": "keywordSearch",
  "semanticSearch": {
    "eventSources": [
      "string"
    ]
  },
  "advancedSyntax": false,
  "optionalWords": "string",
  "disableExactOnAttributes": [
    "description"
  ],
  "exactOnSingleWordQuery": "attribute",
  "alternativesAsExact": [
    "ignorePlurals",
    "singleWordSynonym"
  ],
  "advancedSyntaxFeatures": [
    "exactPhrase",
    "excludeWords"
  ],
  "distinct": 1,
  "replaceSynonymsInHighlight": false,
  "minProximity": 1,
  "responseFields": [
    "*"
  ],
  "maxValuesPerFacet": 100,
  "sortFacetValuesBy": "count",
  "attributeCriteriaComputedByMinProximity": false,
  "attributeCriteriaComputedBy": "best",
  "renderingContent": {
    "facetOrdering": {
      "facets": {
        "order": [
          "string"
        ]
      },
      "values": {
        "property1": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        },
        "property2": {
          "order": [
            "string"
          ],
          "sortRemainingBy": "count",
          "hide": [
            "string"
          ]
        }
      }
    },
    "redirect": {
      "url": "string"
    },
    "widgets": {
      "banners": [
        {
          "image": {
            "urls": [
              {
                "url": "string"
              }
            ],
            "title": "string"
          },
          "link": {
            "url": "string"
          }
        }
      ],
      "resultCard": {
        "enabled": true
      }
    }
  },
  "enableReRanking": true,
  "reRankingApplyFilter": [
    {}
  ],
  "query": {
    "remove": [
      "string"
    ],
    "edits": [
      {
        "type": "remove",
        "delete": "string",
        "insert": "string"
      }
    ]
  },
  "automaticFacetFilters": [
    {
      "facet": "string",
      "score": 1,
      "disjunctive": false
    }
  ],
  "automaticOptionalFacetFilters": [
    {
      "facet": "string",
      "score": 1,
      "disjunctive": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|similarQuery|[similarQuery](#schemasimilarquery)|false|none|Keywords to be used instead of the search query to conduct a more broader search.<br>Using the `similarQuery` parameter changes other settings<br>- `queryType` is set to `prefixNone`.<br>- `removeStopWords` is set to true.<br>- `words` is set as the first ranking criterion.<br>- All remaining words are treated as `optionalWords`.<br>Since the `similarQuery` is supposed to do a broad search, they usually return many results.<br>Combine it with `filters` to narrow down the list of results.<br>|
|filters|[filters](#schemafilters)|false|none|Filter expression to only include items that match the filter criteria in the response.<br><br>You can use these filter expressions:<br><br>- **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>- **Ranges.** `<facet>:<lower> TO <upper>`, where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive).<br>- **Facet filters.** `<facet>:<value>`, where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value.<br>- **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive).<br>- **Boolean filters.** `<facet>: true \| false`.<br><br>You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:<br><br>- You can only combine filters of the same type with `OR`.<br>  **Not supported:** `facet:value OR num > 3`.<br>- You can't use `NOT` with combinations of filters.<br>  **Not supported:** `NOT(facet:value OR facet:value)`<br>- You can't combine conjunctions (`AND`) with `OR`.<br>  **Not supported:** `facet:value OR (facet:value AND facet:value)`<br><br>Use quotes if the facet attribute name or facet value contains spaces, keywords (`OR`, `AND`, `NOT`), or quotes.<br>If a facet attribute is an array, the filter matches if it matches at least one element of the array.<br><br>For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering).<br>|
|facetFilters|[facetFilters](#schemafacetfilters)|false|none|Filter the search by facet values, so that only records with the same facet values are retrieved.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>- `[filter1, filter2]` is interpreted as `filter1 AND filter2`.<br>- `[[filter1, filter2], filter3]` is interpreted as `filter1 OR filter2 AND filter3`.<br>- `facet:-value` is interpreted as `NOT facet:value`.<br><br>While it's best to avoid attributes that start with a `-`, you can still filter them by escaping with a backslash:<br>`facet:\-value`.<br>|
|optionalFilters|[optionalFilters](#schemaoptionalfilters)|false|none|Filters to promote or demote records in the search results.<br><br>Optional filters work like facet filters, but they don't exclude records from the search results.<br>Records that match the optional filter rank before records that don't match.<br>If you're using a negative filter `facet:-value`, matching records rank after records that don't match.<br><br>- Optional filters are applied _after_ sort-by attributes.<br>- Optional filters are applied _before_ custom ranking attributes (in the default [ranking](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria)).<br>- Optional filters don't work with numeric attributes.<br>- On virtual replicas, optional filters are applied _after_ the replica's [relevant sort](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/relevant-sort).<br>|
|numericFilters|[numericFilters](#schemanumericfilters)|false|none|Filter by numeric facets.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>You can use numeric comparison operators: `<`, `<=`, `=`, `!=`, `>`, `>=`.<br>Comparisons are precise up to 3 decimals.<br>You can also provide ranges: `facet:<lower> TO <upper>`. The range includes the lower and upper boundaries.<br>The same combination rules apply as for `facetFilters`.<br>|
|tagFilters|[tagFilters](#schematagfilters)|false|none|Filter the search by values of the special `_tags` attribute.<br><br>**Prefer using the `filters` parameter, which supports all filter types and combinations with boolean operators.**<br><br>Different from regular facets, `_tags` can only be used for filtering (including or excluding records).<br>You won't get a facet count.<br>The same combination and escaping rules apply as for `facetFilters`.<br>|
|sumOrFiltersScores|[sumOrFiltersScores](#schemasumorfiltersscores)|false|none|Whether to sum all filter scores.<br>If true, all filter scores are summed.<br>Otherwise, the maximum filter score is kept.<br>For more information, see [filter scores](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/filter-scoring/#accumulate-scores-with-sumorfiltersscores).<br>|
|restrictSearchableAttributes|[restrictSearchableAttributes](#schemarestrictsearchableattributes)|false|none|Restricts a search to a subset of your searchable attributes.<br>Attribute names are case-sensitive.<br>|
|facets|[string]|false|none|Facets for which to retrieve facet values that match the search criteria and the number of matching facet values.<br>To retrieve all facets, use the wildcard character `*`.<br>For more information, see [facets](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#contextual-facet-values-and-counts).<br>|
|facetingAfterDistinct|[facetingAfterDistinct](#schemafacetingafterdistinct)|false|none|Whether faceting should be applied after deduplication with `distinct`.<br>This leads to accurate facet counts when using faceting in combination with `distinct`.<br>It's usually better to use `afterDistinct` modifiers in the `attributesForFaceting` setting,<br>as `facetingAfterDistinct` only computes correct facet counts if all records have the same facet values for the `attributeForDistinct`.<br>|
|page|[page](#schemapage)|false|none|Page of search results to retrieve.|
|offset|integer|false|none|Position of the first hit to retrieve.|
|length|[length](#schemalength)|false|none|Number of hits to retrieve (used in combination with `offset`).|
|aroundLatLng|[aroundLatLng](#schemaaroundlatlng)|false|none|Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.<br><br>Only records included within a circle around this central location are included in the results.<br>The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings.<br>This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.<br>|
|aroundLatLngViaIP|[aroundLatLngViaIP](#schemaaroundlatlngviaip)|false|none|Whether to obtain the coordinates from the request's IP address.|
|aroundRadius|[aroundRadius](#schemaaroundradius)|false|none|Maximum radius for a search around a central location.<br><br>This parameter works in combination with the `aroundLatLng` and `aroundLatLngViaIP` parameters.<br>By default, the search radius is determined automatically from the density of hits around the central location.<br>The search radius is small if there are many hits close to the central coordinates.<br>|
|aroundPrecision|[aroundPrecision](#schemaaroundprecision)|false|none|Precision of a coordinate-based search in meters to group results with similar distances.<br><br>The Geo ranking criterion considers all matches within the same range of distances to be equal.<br>|
|minimumAroundRadius|[minimumAroundRadius](#schemaminimumaroundradius)|false|none|Minimum radius (in meters) for a search around a location when `aroundRadius` isn't set.|
|insideBoundingBox|[insideBoundingBox](#schemainsideboundingbox)|false|none|none|
|insidePolygon|[insidePolygon](#schemainsidepolygon)|false|none|Coordinates of a polygon in which to search.<br><br>Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude.<br>Provide multiple polygons as nested arrays.<br>For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).<br>This parameter is ignored if you also specify `insideBoundingBox`.<br>|
|naturalLanguages|[naturalLanguages](#schemanaturallanguages)|false|none|ISO language codes that adjust settings that are useful for processing natural language queries (as opposed to keyword searches).<br>- Sets `removeStopWords` and `ignorePlurals` to the list of provided languages.<br>- Sets `removeWordsIfNoResults` to `allOptional`.<br>- Adds a `natural_language` attribute to `ruleContexts` and `analyticsTags`.<br>|
|ruleContexts|[ruleContexts](#schemarulecontexts)|false|none|Assigns a rule context to the search query.<br>[Rule contexts](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/how-to/customize-search-results-by-platform/#assign-context) are strings that you can use to trigger matching rules.<br>|
|personalizationImpact|[personalizationImpact](#schemapersonalizationimpact)|false|none|Impact that Personalization should have on this search.<br>The higher this value is, the more Personalization determines the ranking compared to other factors.<br>For more information, see [Understanding Personalization impact](https://www.algolia.com/doc/guides/personalization/personalizing-results/in-depth/configuring-personalization/#understanding-personalization-impact).<br>|
|userToken|[userToken](#schemausertoken)|false|none|Unique pseudonymous or anonymous user identifier.<br><br>This helps with analytics and click and conversion events.<br>For more information, see [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken).<br>|
|getRankingInfo|[getRankingInfo](#schemagetrankinginfo)|false|none|Whether the search response should include detailed ranking information.|
|synonyms|[synonyms](#schemasynonyms)|false|none|Whether to take into account an index's synonyms for this search.|
|clickAnalytics|[clickAnalytics](#schemaclickanalytics)|false|none|Whether to include a `queryID` attribute in the response.<br>The query ID is a unique identifier for a search query and is required for tracking [click and conversion events](https://www.algolia.com/doc/guides/sending-events/getting-started).<br>|
|analytics|[analytics](#schemaanalytics)|false|none|Whether this search will be included in Analytics.|
|analyticsTags|[analyticsTags](#schemaanalyticstags)|false|none|Tags to apply to the query for [segmenting analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments).|
|percentileComputation|[percentileComputation](#schemapercentilecomputation)|false|none|Whether to include this search when calculating processing-time percentiles.|
|enableABTest|[enableABTest](#schemaenableabtest)|false|none|Whether to enable A/B testing for this search.|
|attributesToRetrieve|[attributesToRetrieve](#schemaattributestoretrieve)|false|none|Attributes to include in the API response.<br>To reduce the size of your response, you can retrieve only some of the attributes.<br>Attribute names are case-sensitive<br>- `*` retrieves all attributes, except attributes included in the `customRanking` and `unretrievableAttributes` settings.<br>- To retrieve all attributes except a specific one, prefix the attribute with a dash and combine it with the `*`: `["*", "-ATTRIBUTE"]`.<br>- The `objectID` attribute is always included.<br>|
|ranking|[string]|false|none|Determines the order in which Algolia returns your results.<br><br>By default, each entry corresponds to a [ranking criteria](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria).<br>The tie-breaking algorithm sequentially applies each criterion in the order they're specified.<br>If you configure a replica index for [sorting by an attribute](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-by-attribute),<br>you put the sorting attribute at the top of the list.<br><br>**Modifiers**<br><br>- `asc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in ascending order.<br>- `desc("ATTRIBUTE")`.<br>  Sort the index by the values of an attribute, in descending order.<br><br>Before you modify the default setting,<br>test your changes in the dashboard,<br>and by [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing).<br>|
|relevancyStrictness|[relevancyStrictness](#schemarelevancystrictness)|false|none|Relevancy threshold below which less relevant results aren't included in the results.<br>You can only set `relevancyStrictness` on [virtual replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/#standard-and-virtual-replicas).<br>Use this setting to strike a balance between the relevance and number of returned results.<br>|
|attributesToHighlight|[attributesToHighlight](#schemaattributestohighlight)|false|none|Attributes to highlight.<br>By default, all searchable attributes are highlighted.<br>Use `*` to highlight all attributes or use an empty array `[]` to turn off highlighting.<br>Attribute names are case-sensitive<br>With highlighting, strings that match the search query are surrounded by HTML tags defined by `highlightPreTag` and `highlightPostTag`.<br>You can use this to visually highlight matching parts of a search query in your UI<br>For more information, see [Highlighting and snippeting](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/highlighting-snippeting/js).<br>|
|attributesToSnippet|[attributesToSnippet](#schemaattributestosnippet)|false|none|Attributes for which to enable snippets.<br>Attribute names are case-sensitive<br>Snippets provide additional context to matched words.<br>If you enable snippets, they include 10 words, including the matched word.<br>The matched word will also be wrapped by HTML tags for highlighting.<br>You can adjust the number of words with the following notation: `ATTRIBUTE:NUMBER`,<br>where `NUMBER` is the number of words to be extracted.<br>|
|highlightPreTag|[highlightPreTag](#schemahighlightpretag)|false|none|HTML tag to insert before the highlighted parts in all highlighted results and snippets.|
|highlightPostTag|[highlightPostTag](#schemahighlightposttag)|false|none|HTML tag to insert after the highlighted parts in all highlighted results and snippets.|
|snippetEllipsisText|[snippetEllipsisText](#schemasnippetellipsistext)|false|none|String used as an ellipsis indicator when a snippet is truncated.|
|restrictHighlightAndSnippetArrays|[restrictHighlightAndSnippetArrays](#schemarestricthighlightandsnippetarrays)|false|none|Whether to restrict highlighting and snippeting to items that at least partially matched the search query.<br>By default, all items are highlighted and snippeted.<br>|
|hitsPerPage|[hitsPerPage](#schemahitsperpage)|false|none|Number of hits per page.|
|minWordSizefor1Typo|[minWordSizefor1Typo](#schemaminwordsizefor1typo)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [one typo](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|minWordSizefor2Typos|[minWordSizefor2Typos](#schemaminwordsizefor2typos)|false|none|Minimum number of characters a word in the search query must contain to accept matches with [two typos](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/in-depth/configuring-typo-tolerance/#configure-word-size-threshold-for-typos).|
|typoTolerance|[typoTolerance](#schematypotolerance)|false|none|Whether [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance) is enabled and how it is applied.<br><br>If typo tolerance is true, `min`, or `strict`, [word splitting and concatenation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/splitting-and-concatenation) are also active.<br>|
|allowTyposOnNumericTokens|[allowTyposOnNumericTokens](#schemaallowtyposonnumerictokens)|false|none|Whether to allow typos on numbers in the search query.<br>Turn off this setting to reduce the number of irrelevant matches<br>when searching in large sets of similar numbers.<br>|
|disableTypoToleranceOnAttributes|[disableTypoToleranceOnAttributes](#schemadisabletypotoleranceonattributes)|false|none|Attributes for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance).<br>Attribute names are case-sensitive<br>Returning only exact matches can help when<br>- [Searching in hyphenated attributes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/how-to/how-to-search-in-hyphenated-attributes).<br>- Reducing the number of matches when you have too many.<br>  This can happen with attributes that are long blocks of text, such as product descriptions.<br>Consider alternatives such as `disableTypoToleranceOnWords` or adding synonyms if your attributes have intentional unusual spellings that might look like typos.<br>|
|ignorePlurals|[ignorePlurals](#schemaignoreplurals)|false|none|Treat singular, plurals, and other forms of declensions as equivalent.<br>Only use this feature for the languages used in your index.<br>|
|removeStopWords|[removeStopWords](#schemaremovestopwords)|false|none|Removes stop words from the search query.<br><br>Stop words are common words like articles, conjunctions, prepositions, or pronouns that have little or no meaning on their own.<br>In English, "the", "a", or "and" are stop words.<br><br>Only use this feature for the languages used in your index.<br>|
|queryLanguages|[queryLanguages](#schemaquerylanguages)|false|none|Languages for language-specific query processing steps such as plurals, stop-word removal, and word-detection dictionaries.<br>This setting sets a default list of languages used by the `removeStopWords` and `ignorePlurals` settings.<br>This setting also sets a dictionary for word detection in the logogram-based [CJK](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/#normalization-for-logogram-based-languages-cjk) languages.<br>To support this, place the CJK language **first**.<br>**Always specify a query language.**<br>If you don't specify an indexing language, the search engine uses all [supported languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages),<br>or the languages you specified with the `ignorePlurals` or `removeStopWords` parameters.<br>This can lead to unexpected search results.<br>For more information, see [Language-specific configuration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations).<br>|
|decompoundQuery|[decompoundQuery](#schemadecompoundquery)|false|none|Whether to split compound words in the query into their building blocks.<br>For more information, see [Word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#split-compound-words).<br>Word segmentation is supported for these languages: German, Dutch, Finnish, Swedish, and Norwegian.<br>Decompounding doesn't work for words with [non-spacing mark Unicode characters](https://www.charactercodes.net/category/non-spacing_mark).<br>For example, `Gartenstühle` won't be decompounded if the `ü` consists of `u` (U+0075) and `◌̈` (U+0308).<br>|
|enableRules|[enableRules](#schemaenablerules)|false|none|Whether to enable rules.|
|enablePersonalization|[enablePersonalization](#schemaenablepersonalization)|false|none|Whether to enable Personalization.|
|queryType|[queryType](#schemaquerytype)|false|none|Determines if and how query words are interpreted as prefixes.<br><br>By default, only the last query word is treated as a prefix (`prefixLast`).<br>To turn off prefix search, use `prefixNone`.<br>Avoid `prefixAll`, which treats all query words as prefixes.<br>This might lead to counterintuitive results and makes your search slower.<br><br>For more information, see [Prefix searching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/prefix-searching).<br>|
|removeWordsIfNoResults|[removeWordsIfNoResults](#schemaremovewordsifnoresults)|false|none|Strategy for removing words from the query when it doesn't return any results.<br>This helps to avoid returning empty search results.<br><br>- `none`.<br>  No words are removed when a query doesn't return results.<br><br>- `lastWords`.<br>  Treat the last (then second to last, then third to last) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `firstWords`.<br>  Treat the first (then second, then third) word as optional,<br>  until there are results or at most 5 words have been removed.<br><br>- `allOptional`.<br>  Treat all words as optional.<br><br>For more information, see [Remove words to improve results](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/in-depth/why-use-remove-words-if-no-results).<br>|
|mode|[mode](#schemamode)|false|none|Search mode the index will use to query for results.<br><br>This setting only applies to indices, for which Algolia enabled NeuralSearch for you.<br>|
|semanticSearch|[semanticSearch](#schemasemanticsearch)|false|none|Settings for the semantic search part of NeuralSearch.<br>Only used when `mode` is `neuralSearch`.<br>|
|advancedSyntax|[advancedSyntax](#schemaadvancedsyntax)|false|none|Whether to support phrase matching and excluding words from search queries.<br>Use the `advancedSyntaxFeatures` parameter to control which feature is supported.<br>|
|optionalWords|[optionalWords](#schemaoptionalwords)|false|none|Words that should be considered optional when found in the query.<br><br>By default, records must match all words in the search query to be included in the search results.<br>Adding optional words can increase the number of search results by running an additional search query that doesn't include the optional words.<br>For example, if the search query is "action video" and "video" is optional,<br>the search engine runs two queries: one for "action video" and one for "action".<br>Records that match all words are ranked higher.<br><br>For a search query with 4 or more words **and** all its words are optional,<br>the number of matched words required for a record to be included in the search results increases for every 1,000 records:<br><br>- If `optionalWords` has fewer than 10 words, the required number of matched words increases by 1:<br>  results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 2 matched words.<br>- If `optionalWords` has 10 or more words, the required number of matched words increases by the number of optional words divided by 5 (rounded down).<br>  Example: with 18 optional words, results 1 to 1,000 require 1 matched word; results 1,001 to 2,000 need 4 matched words.<br><br>For more information, see [Optional words](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/empty-or-insufficient-results/#create-a-list-of-optional-words).<br>|
|disableExactOnAttributes|[disableExactOnAttributes](#schemadisableexactonattributes)|false|none|Searchable attributes for which you want to [turn off the Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes).<br>Attribute names are case-sensitive<br>This can be useful for attributes with long values, where the likelihood of an exact match is high,<br>such as product descriptions.<br>Turning off the Exact ranking criterion for these attributes favors exact matching on other attributes.<br>This reduces the impact of individual attributes with a lot of content on ranking.<br>|
|exactOnSingleWordQuery|[exactOnSingleWordQuery](#schemaexactonsinglewordquery)|false|none|Determines how the [Exact ranking criterion](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/in-depth/adjust-exact-settings/#turn-off-exact-for-some-attributes) is computed when the search query has only one word.<br><br>- `attribute`.<br>  The Exact ranking criterion is 1 if the query word and attribute value are the same.<br>  For example, a search for "road" will match the value "road", but not "road trip".<br><br>- `none`.<br>  The Exact ranking criterion is ignored on single-word searches.<br><br>- `word`.<br>  The Exact ranking criterion is 1 if the query word is found in the attribute value.<br>  The query word must have at least 3 characters and must not be a stop word.<br>  Only exact matches will be highlighted,<br>  partial and prefix matches won't.<br>|
|alternativesAsExact|[IndexSettings_alternativesAsExact](#schemaindexsettings_alternativesasexact)|false|none|Determine which plurals and synonyms should be considered an exact matches.<br>By default, Algolia treats singular and plural forms of a word, and single-word synonyms, as [exact](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#exact) matches when searching.<br>For example:<br>- "swimsuit" and "swimsuits" are treated the same.<br>- "swimsuit" and "swimwear" are treated the same (if they are [synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/#regular-synonyms)).<br>- `ignorePlurals`.<br>  Plurals and similar declensions added by the `ignorePlurals` setting are considered exact matches.<br>- `singleWordSynonym`.<br>  Single-word synonyms, such as "NY" = "NYC", are considered exact matches.<br>- `multiWordsSynonym`.<br>  Multi-word synonyms, such as "NY" = "New York", are considered exact matches.<br>|
|advancedSyntaxFeatures|[IndexSettings_advancedSyntaxFeatures](#schemaindexsettings_advancedsyntaxfeatures)|false|none|Advanced search syntax features you want to support.<br>- `exactPhrase`.<br>  Phrases in quotes must match exactly.<br>  For example, `sparkly blue "iPhone case"` only returns records with the exact string "iPhone case".<br>- `excludeWords`.<br>  Query words prefixed with a `-` must not occur in a record.<br>  For example, `search -engine` matches records that contain "search" but not "engine".<br>This setting only has an effect if `advancedSyntax` is true.<br>|
|distinct|[distinct](#schemadistinct)|false|none|Determines how many records of a group are included in the search results.<br><br>Records with the same value for the `attributeForDistinct` attribute are considered a group.<br>The `distinct` setting controls how many members of the group are returned.<br>This is useful for [deduplication and grouping](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#deduplicate-results-with-distinct).<br><br>The `distinct` setting is ignored if `attributeForDistinct` is not set.<br>|
|replaceSynonymsInHighlight|[replaceSynonymsInHighlight](#schemareplacesynonymsinhighlight)|false|none|Whether to replace a highlighted word with the matched synonym.<br>By default, the original words are highlighted even if a synonym matches.<br>For example, with `home` as a synonym for `house` and a search for `home`,<br>records matching either "home" or "house" are included in the search results,<br>and either "home" or "house" are highlighted<br>With `replaceSynonymsInHighlight` set to `true`, a search for `home` still matches the same records,<br>but all occurrences of "house" are replaced by "home" in the highlighted response.<br>|
|minProximity|[minProximity](#schemaminproximity)|false|none|Minimum proximity score for two matching words.<br>This adjusts the [Proximity ranking criterion](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/#proximity)<br>by equally scoring matches that are farther apart<br>For example, if `minProximity` is 2, neighboring matches and matches with one word between them would have the same score.<br>|
|responseFields|[responseFields](#schemaresponsefields)|false|none|Properties to include in the API response of search and browse requests.<br>By default, all response properties are included.<br>To reduce the response size, you can select which properties should be included<br>An empty list may lead to an empty API response (except properties you can't exclude)<br>You can't exclude these properties:<br>`message`, `warning`, `cursor`, `abTestVariantID`,<br>or any property added by setting `getRankingInfo` to true<br>Your search depends on the `hits` field. If you omit this field, searches won't return any results.<br>Your UI might also depend on other properties, for example, for pagination.<br>Before restricting the response size, check the impact on your search experience.<br>|
|maxValuesPerFacet|[maxValuesPerFacet](#schemamaxvaluesperfacet)|false|none|Maximum number of facet values to return for each facet.|
|sortFacetValuesBy|[sortFacetValuesBy](#schemasortfacetvaluesby)|false|none|Order in which to retrieve facet values.<br>- `count`.<br>  Facet values are retrieved by decreasing count.<br>  The count is the number of matching records containing this facet value.<br>- `alpha`.<br>  Retrieve facet values alphabetically.<br>This setting doesn't influence how facet values are displayed in your UI (see `renderingContent`).<br>For more information, see [facet value display](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js).<br>|
|attributeCriteriaComputedByMinProximity|[attributeCriteriaComputedByMinProximity](#schemaattributecriteriacomputedbyminproximity)|false|none|Whether the best matching attribute should be determined by minimum proximity.<br>This setting only affects ranking if the Attribute ranking criterion comes before Proximity in the `ranking` setting.<br>If true, the best matching attribute is selected based on the minimum proximity of multiple matches.<br>Otherwise, the best matching attribute is determined by the order in the `searchableAttributes` setting.<br><br>Prefer `attributeCriteriaComputedBy`, which expresses the same two behaviors and adds the `sum` strategy.<br>If you set both, `attributeCriteriaComputedBy` takes precedence.<br>|
|attributeCriteriaComputedBy|[attributeCriteriaComputedBy](#schemaattributecriteriacomputedby)|false|none|Strategy for computing the Attribute ranking criterion.<br>This mainly affects multi-word queries with matches in more than one attribute.<br><br>The `ranking` setting decides whether `best` takes effect.<br>When Attribute comes after Proximity, which is the default order, the engine always uses the `minProximity` strategy and ignores `best`.<br>To select `best`, move Attribute before Proximity in `ranking`.<br>The `sum` strategy applies in both orders.<br><br>- `minProximity`.<br>  Pick the best matching attribute from the attributes that form the best proximity score.<br>  On an ordered attribute, the match position breaks ties.<br>- `best`.<br>  Pick the best matching attribute from all attributes that match any query word.<br>  On an ordered attribute, the match position breaks ties.<br>- `sum`.<br>  Add up a score for every query word instead of picking one attribute.<br>  Each word's score comes from the attribute it matched, and from its position in that attribute when the attribute is ordered.<br>  A query word that matches nothing adds a large penalty.<br>  A record with a lower total ranks higher.<br>  A record therefore cannot rank high only because one word of a multi-word query matched a top attribute.<br>  Use `sum` with short, relevant attributes, and set long-text attributes to unordered.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|
|enableReRanking|[enableReRanking](#schemaenablereranking)|false|none|Whether this search will use [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking).<br>This setting only has an effect if you activated Dynamic Re-Ranking for this index in the Algolia dashboard.<br>|
|reRankingApplyFilter|[reRankingApplyFilter](#schemarerankingapplyfilter) \| null|false|none|none|
|query|[consequenceQuery](#schemaconsequencequery)|false|none|Replace or edit the search query.<br><br>If `consequenceQuery` is a string, the entire search query is replaced with that string.<br>If `consequenceQuery` is an object, it describes incremental edits made to the query.<br>|
|automaticFacetFilters|[automaticFacetFilters](#schemaautomaticfacetfilters)|false|none|Filter to be applied to the search.<br><br>You can use this to respond to search queries that match a facet value.<br>For example, if users search for "comedy", which matches a facet value of the "genre" facet,<br>you can filter the results to show the top-ranked comedy movies.<br>|
|automaticOptionalFacetFilters|[automaticFacetFilters](#schemaautomaticfacetfilters)|false|none|Filter to be applied to the search.<br><br>You can use this to respond to search queries that match a facet value.<br>For example, if users search for "comedy", which matches a facet value of the "genre" facet,<br>you can filter the results to show the top-ranked comedy movies.<br>|
|renderingContent|[renderingContent](#schemarenderingcontent)|false|none|Extra data that can be used in the search UI.<br><br>You can use this to control aspects of your search UI, such as the order of facet names and values<br>without changing your frontend code.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|naturalLanguages|af|
|naturalLanguages|ar|
|naturalLanguages|az|
|naturalLanguages|bg|
|naturalLanguages|bn|
|naturalLanguages|ca|
|naturalLanguages|cs|
|naturalLanguages|cy|
|naturalLanguages|da|
|naturalLanguages|de|
|naturalLanguages|el|
|naturalLanguages|en|
|naturalLanguages|eo|
|naturalLanguages|es|
|naturalLanguages|et|
|naturalLanguages|eu|
|naturalLanguages|fa|
|naturalLanguages|fi|
|naturalLanguages|fo|
|naturalLanguages|fr|
|naturalLanguages|ga|
|naturalLanguages|gl|
|naturalLanguages|he|
|naturalLanguages|hi|
|naturalLanguages|hu|
|naturalLanguages|hy|
|naturalLanguages|id|
|naturalLanguages|is|
|naturalLanguages|it|
|naturalLanguages|ja|
|naturalLanguages|ka|
|naturalLanguages|kk|
|naturalLanguages|ko|
|naturalLanguages|ku|
|naturalLanguages|ky|
|naturalLanguages|lt|
|naturalLanguages|lv|
|naturalLanguages|mi|
|naturalLanguages|mn|
|naturalLanguages|mr|
|naturalLanguages|ms|
|naturalLanguages|mt|
|naturalLanguages|nb|
|naturalLanguages|nl|
|naturalLanguages|no|
|naturalLanguages|ns|
|naturalLanguages|pl|
|naturalLanguages|ps|
|naturalLanguages|pt|
|naturalLanguages|pt-br|
|naturalLanguages|qu|
|naturalLanguages|ro|
|naturalLanguages|ru|
|naturalLanguages|sk|
|naturalLanguages|sq|
|naturalLanguages|sv|
|naturalLanguages|sw|
|naturalLanguages|ta|
|naturalLanguages|te|
|naturalLanguages|th|
|naturalLanguages|tl|
|naturalLanguages|tn|
|naturalLanguages|tr|
|naturalLanguages|tt|
|naturalLanguages|uk|
|naturalLanguages|ur|
|naturalLanguages|uz|
|naturalLanguages|zh|
|queryLanguages|af|
|queryLanguages|ar|
|queryLanguages|az|
|queryLanguages|bg|
|queryLanguages|bn|
|queryLanguages|ca|
|queryLanguages|cs|
|queryLanguages|cy|
|queryLanguages|da|
|queryLanguages|de|
|queryLanguages|el|
|queryLanguages|en|
|queryLanguages|eo|
|queryLanguages|es|
|queryLanguages|et|
|queryLanguages|eu|
|queryLanguages|fa|
|queryLanguages|fi|
|queryLanguages|fo|
|queryLanguages|fr|
|queryLanguages|ga|
|queryLanguages|gl|
|queryLanguages|he|
|queryLanguages|hi|
|queryLanguages|hu|
|queryLanguages|hy|
|queryLanguages|id|
|queryLanguages|is|
|queryLanguages|it|
|queryLanguages|ja|
|queryLanguages|ka|
|queryLanguages|kk|
|queryLanguages|ko|
|queryLanguages|ku|
|queryLanguages|ky|
|queryLanguages|lt|
|queryLanguages|lv|
|queryLanguages|mi|
|queryLanguages|mn|
|queryLanguages|mr|
|queryLanguages|ms|
|queryLanguages|mt|
|queryLanguages|nb|
|queryLanguages|nl|
|queryLanguages|no|
|queryLanguages|ns|
|queryLanguages|pl|
|queryLanguages|ps|
|queryLanguages|pt|
|queryLanguages|pt-br|
|queryLanguages|qu|
|queryLanguages|ro|
|queryLanguages|ru|
|queryLanguages|sk|
|queryLanguages|sq|
|queryLanguages|sv|
|queryLanguages|sw|
|queryLanguages|ta|
|queryLanguages|te|
|queryLanguages|th|
|queryLanguages|tl|
|queryLanguages|tn|
|queryLanguages|tr|
|queryLanguages|tt|
|queryLanguages|uk|
|queryLanguages|ur|
|queryLanguages|uz|
|queryLanguages|zh|
|queryType|prefixLast|
|queryType|prefixAll|
|queryType|prefixNone|
|removeWordsIfNoResults|none|
|removeWordsIfNoResults|lastWords|
|removeWordsIfNoResults|firstWords|
|removeWordsIfNoResults|allOptional|
|mode|neuralSearch|
|mode|keywordSearch|
|exactOnSingleWordQuery|attribute|
|exactOnSingleWordQuery|none|
|exactOnSingleWordQuery|word|
|alternativesAsExact|ignorePlurals|
|alternativesAsExact|singleWordSynonym|
|alternativesAsExact|multiWordsSynonym|
|alternativesAsExact|ignoreConjugations|
|advancedSyntaxFeatures|exactPhrase|
|advancedSyntaxFeatures|excludeWords|
|attributeCriteriaComputedBy|minProximity|
|attributeCriteriaComputedBy|best|
|attributeCriteriaComputedBy|sum|

<h2 id="tocS_promotePosition">promotePosition</h2>
<!-- backwards compatibility -->
<a id="schemapromoteposition"></a>
<a id="schema_promotePosition"></a>
<a id="tocSpromoteposition"></a>
<a id="tocspromoteposition"></a>

```json
0
```

Position in the search results where you want to show the promoted records.

<h2 id="tocS_promoteObjectIDs">promoteObjectIDs</h2>
<!-- backwards compatibility -->
<a id="schemapromoteobjectids"></a>
<a id="schema_promoteObjectIDs"></a>
<a id="tocSpromoteobjectids"></a>
<a id="tocspromoteobjectids"></a>

```json
{
  "objectIDs": [
    "test-record-123"
  ],
  "position": 0
}
```

Records to promote.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectIDs|[[objectID](#schemaobjectid)]|true|none|Object IDs of the records you want to promote.<br><br>The records are placed as a group at the `position`.<br>For example, if you want to promote four records to position `0`,<br>they will be the first four search results.<br>|
|position|[promotePosition](#schemapromoteposition)|true|none|Position in the search results where you want to show the promoted records.|

<h2 id="tocS_promoteObjectID">promoteObjectID</h2>
<!-- backwards compatibility -->
<a id="schemapromoteobjectid"></a>
<a id="schema_promoteObjectID"></a>
<a id="tocSpromoteobjectid"></a>
<a id="tocspromoteobjectid"></a>

```json
{
  "objectID": "test-record-123",
  "position": 0
}
```

Record to promote.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectID|[objectID](#schemaobjectid)|true|none|Unique record identifier.|
|position|[promotePosition](#schemapromoteposition)|true|none|Position in the search results where you want to show the promoted records.|

<h2 id="tocS_promote">promote</h2>
<!-- backwards compatibility -->
<a id="schemapromote"></a>
<a id="schema_promote"></a>
<a id="tocSpromote"></a>
<a id="tocspromote"></a>

```json
{
  "objectIDs": [
    "test-record-123"
  ],
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[promoteObjectIDs](#schemapromoteobjectids)|false|none|Records to promote.|
|*oneOf*|[promoteObjectID](#schemapromoteobjectid)|false|none|Record to promote.|

<h2 id="tocS_consequence">consequence</h2>
<!-- backwards compatibility -->
<a id="schemaconsequence"></a>
<a id="schema_consequence"></a>
<a id="tocSconsequence"></a>
<a id="tocsconsequence"></a>

```json
{
  "params": {
    "similarQuery": "comedy drama crime Macy Buscemi",
    "filters": "(category:Book OR category:Ebook) AND _tags:published",
    "facetFilters": [
      [
        "category:Book",
        "category:-Movie"
      ],
      "author:John Doe"
    ],
    "optionalFilters": [
      "category:Book",
      "author:John Doe"
    ],
    "numericFilters": [
      [
        "inStock = 1",
        "deliveryDate < 1441755506"
      ],
      "price < 1000"
    ],
    "tagFilters": [
      [
        "Book",
        "Movie"
      ],
      "SciFi"
    ],
    "sumOrFiltersScores": false,
    "restrictSearchableAttributes": [
      "title",
      "author"
    ],
    "facets": [
      "*"
    ],
    "facetingAfterDistinct": false,
    "page": 0,
    "offset": 0,
    "length": 0,
    "aroundLatLng": "40.71,-74.01",
    "aroundLatLngViaIP": false,
    "aroundRadius": 1,
    "aroundPrecision": 10,
    "minimumAroundRadius": 1,
    "insideBoundingBox": "string",
    "insidePolygon": [
      [
        47.3165,
        4.9665,
        47.3424,
        5.0201,
        47.32,
        4.9
      ],
      [
        40.9234,
        2.1185,
        38.643,
        1.9916,
        39.2587,
        2.0104
      ]
    ],
    "naturalLanguages": [],
    "ruleContexts": [
      "mobile"
    ],
    "personalizationImpact": 100,
    "userToken": "test-user-123",
    "getRankingInfo": false,
    "synonyms": true,
    "clickAnalytics": false,
    "analytics": true,
    "analyticsTags": [],
    "percentileComputation": true,
    "enableABTest": true,
    "attributesToRetrieve": [
      "author",
      "title",
      "content"
    ],
    "ranking": [
      "typo",
      "geo",
      "words",
      "filters",
      "proximity",
      "attribute",
      "exact",
      "custom"
    ],
    "relevancyStrictness": 90,
    "attributesToHighlight": [
      "author",
      "title",
      "conten",
      "content"
    ],
    "attributesToSnippet": [
      "content:80",
      "description"
    ],
    "highlightPreTag": "<em>",
    "highlightPostTag": "</em>",
    "snippetEllipsisText": "…",
    "restrictHighlightAndSnippetArrays": false,
    "hitsPerPage": 20,
    "minWordSizefor1Typo": 4,
    "minWordSizefor2Typos": 8,
    "typoTolerance": true,
    "allowTyposOnNumericTokens": true,
    "disableTypoToleranceOnAttributes": [
      "sku"
    ],
    "ignorePlurals": [
      "ca",
      "es"
    ],
    "removeStopWords": [
      "ca",
      "es"
    ],
    "queryLanguages": [
      "es"
    ],
    "decompoundQuery": true,
    "enableRules": true,
    "enablePersonalization": false,
    "queryType": "prefixLast",
    "removeWordsIfNoResults": "firstWords",
    "mode": "keywordSearch",
    "semanticSearch": {
      "eventSources": [
        "string"
      ]
    },
    "advancedSyntax": false,
    "optionalWords": "string",
    "disableExactOnAttributes": [
      "description"
    ],
    "exactOnSingleWordQuery": "attribute",
    "alternativesAsExact": [
      "ignorePlurals",
      "singleWordSynonym"
    ],
    "advancedSyntaxFeatures": [
      "exactPhrase",
      "excludeWords"
    ],
    "distinct": 1,
    "replaceSynonymsInHighlight": false,
    "minProximity": 1,
    "responseFields": [
      "*"
    ],
    "maxValuesPerFacet": 100,
    "sortFacetValuesBy": "count",
    "attributeCriteriaComputedByMinProximity": false,
    "attributeCriteriaComputedBy": "best",
    "renderingContent": {
      "facetOrdering": {
        "facets": {
          "order": [
            "string"
          ]
        },
        "values": {
          "property1": {
            "order": [
              "string"
            ],
            "sortRemainingBy": "count",
            "hide": [
              "string"
            ]
          },
          "property2": {
            "order": [
              "string"
            ],
            "sortRemainingBy": "count",
            "hide": [
              "string"
            ]
          }
        }
      },
      "redirect": {
        "url": "string"
      },
      "widgets": {
        "banners": [
          {
            "image": {
              "urls": [
                {
                  "url": "string"
                }
              ],
              "title": "string"
            },
            "link": {
              "url": "string"
            }
          }
        ],
        "resultCard": {
          "enabled": true
        }
      }
    },
    "enableReRanking": true,
    "reRankingApplyFilter": [
      {}
    ],
    "query": {
      "remove": [
        "string"
      ],
      "edits": [
        {
          "type": "remove",
          "delete": "string",
          "insert": "string"
        }
      ]
    },
    "automaticFacetFilters": [
      {
        "facet": "string",
        "score": 1,
        "disjunctive": false
      }
    ],
    "automaticOptionalFacetFilters": [
      {
        "facet": "string",
        "score": 1,
        "disjunctive": false
      }
    ]
  },
  "promote": [
    {
      "objectIDs": [
        "test-record-123"
      ],
      "position": 0
    }
  ],
  "filterPromotes": false,
  "hide": [
    {
      "objectID": "test-record-123"
    }
  ],
  "redirect": {
    "indexName": "string"
  },
  "userData": {
    "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
    "pluginVersion": "1.6.0"
  }
}
```

Effect of the rule.

For more information, see [Consequences](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/#consequences).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|[consequenceParams](#schemaconsequenceparams)|false|none|none|
|promote|[[promote](#schemapromote)]|false|none|Records you want to pin to a specific position in the search results.<br><br>You can promote up to 300 records, either individually, or as groups of up to 100 records each.<br>|
|filterPromotes|boolean|false|none|Determines whether promoted records must also match active filters for the consequence to apply.<br><br>This ensures user-applied filters take priority and irrelevant matches aren't shown.<br>For example, if you promote a record with `color: red` but the user filters for `color: blue`,<br>the "red" record won't be shown.<br><br>> In the Algolia dashboard, when you use the **Pin an item** consequence, `filterPromotes` appears as the checkbox: **Pinned items must match active filters to be displayed.** For examples, see [Promote results with rules](https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting/how-to/promote-hits/#promote-results-matching-active-filters).<br>|
|hide|[object]|false|none|Records you want to hide from the search results.|
|redirect|object|false|none|Redirect to a virtual replica index.<br><br>This consequence is only valid for rules with `scope: redirect`.<br>|
|userData|object|false|none|A JSON object with custom data that will be appended to the `userData` array in the response.<br>This object isn't interpreted by the API and is limited to 1&nbsp;kB of minified JSON.<br>|

<h2 id="tocS_timeRange">timeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_timeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "from": 0,
  "until": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|integer(int64)|false|none|Timestamp when the rule should start to be active, measured in seconds since the Unix epoch.|
|until|integer(int64)|false|none|Timestamp when the rule should stop to be active, measured in seconds since the Unix epoch.|

<h2 id="tocS_rule">rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "objectID": "string",
  "conditions": [
    {
      "pattern": "{facet:genre}",
      "anchoring": "is",
      "alternatives": false,
      "context": "mobile",
      "filters": "genre:comedy"
    }
  ],
  "consequence": {
    "params": {
      "similarQuery": "comedy drama crime Macy Buscemi",
      "filters": "(category:Book OR category:Ebook) AND _tags:published",
      "facetFilters": [
        [
          "category:Book",
          "category:-Movie"
        ],
        "author:John Doe"
      ],
      "optionalFilters": [
        "category:Book",
        "author:John Doe"
      ],
      "numericFilters": [
        [
          "inStock = 1",
          "deliveryDate < 1441755506"
        ],
        "price < 1000"
      ],
      "tagFilters": [
        [
          "Book",
          "Movie"
        ],
        "SciFi"
      ],
      "sumOrFiltersScores": false,
      "restrictSearchableAttributes": [
        "title",
        "author"
      ],
      "facets": [
        "*"
      ],
      "facetingAfterDistinct": false,
      "page": 0,
      "offset": 0,
      "length": 0,
      "aroundLatLng": "40.71,-74.01",
      "aroundLatLngViaIP": false,
      "aroundRadius": 1,
      "aroundPrecision": 10,
      "minimumAroundRadius": 1,
      "insideBoundingBox": "string",
      "insidePolygon": [
        [
          47.3165,
          4.9665,
          47.3424,
          5.0201,
          47.32,
          4.9
        ],
        [
          40.9234,
          2.1185,
          38.643,
          1.9916,
          39.2587,
          2.0104
        ]
      ],
      "naturalLanguages": [],
      "ruleContexts": [
        "mobile"
      ],
      "personalizationImpact": 100,
      "userToken": "test-user-123",
      "getRankingInfo": false,
      "synonyms": true,
      "clickAnalytics": false,
      "analytics": true,
      "analyticsTags": [],
      "percentileComputation": true,
      "enableABTest": true,
      "attributesToRetrieve": [
        "author",
        "title",
        "content"
      ],
      "ranking": [
        "typo",
        "geo",
        "words",
        "filters",
        "proximity",
        "attribute",
        "exact",
        "custom"
      ],
      "relevancyStrictness": 90,
      "attributesToHighlight": [
        "author",
        "title",
        "conten",
        "content"
      ],
      "attributesToSnippet": [
        "content:80",
        "description"
      ],
      "highlightPreTag": "<em>",
      "highlightPostTag": "</em>",
      "snippetEllipsisText": "…",
      "restrictHighlightAndSnippetArrays": false,
      "hitsPerPage": 20,
      "minWordSizefor1Typo": 4,
      "minWordSizefor2Typos": 8,
      "typoTolerance": true,
      "allowTyposOnNumericTokens": true,
      "disableTypoToleranceOnAttributes": [
        "sku"
      ],
      "ignorePlurals": [
        "ca",
        "es"
      ],
      "removeStopWords": [
        "ca",
        "es"
      ],
      "queryLanguages": [
        "es"
      ],
      "decompoundQuery": true,
      "enableRules": true,
      "enablePersonalization": false,
      "queryType": "prefixLast",
      "removeWordsIfNoResults": "firstWords",
      "mode": "keywordSearch",
      "semanticSearch": {
        "eventSources": [
          "string"
        ]
      },
      "advancedSyntax": false,
      "optionalWords": "string",
      "disableExactOnAttributes": [
        "description"
      ],
      "exactOnSingleWordQuery": "attribute",
      "alternativesAsExact": [
        "ignorePlurals",
        "singleWordSynonym"
      ],
      "advancedSyntaxFeatures": [
        "exactPhrase",
        "excludeWords"
      ],
      "distinct": 1,
      "replaceSynonymsInHighlight": false,
      "minProximity": 1,
      "responseFields": [
        "*"
      ],
      "maxValuesPerFacet": 100,
      "sortFacetValuesBy": "count",
      "attributeCriteriaComputedByMinProximity": false,
      "attributeCriteriaComputedBy": "best",
      "renderingContent": {
        "facetOrdering": {
          "facets": {
            "order": [
              "string"
            ]
          },
          "values": {
            "property1": {
              "order": [
                "string"
              ],
              "sortRemainingBy": "count",
              "hide": [
                "string"
              ]
            },
            "property2": {
              "order": [
                "string"
              ],
              "sortRemainingBy": "count",
              "hide": [
                "string"
              ]
            }
          }
        },
        "redirect": {
          "url": "string"
        },
        "widgets": {
          "banners": [
            {
              "image": {
                "urls": [
                  {
                    "url": "string"
                  }
                ],
                "title": "string"
              },
              "link": {
                "url": "string"
              }
            }
          ],
          "resultCard": {
            "enabled": true
          }
        }
      },
      "enableReRanking": true,
      "reRankingApplyFilter": [
        {}
      ],
      "query": {
        "remove": [
          "string"
        ],
        "edits": [
          {
            "type": "remove",
            "delete": "string",
            "insert": "string"
          }
        ]
      },
      "automaticFacetFilters": [
        {
          "facet": "string",
          "score": 1,
          "disjunctive": false
        }
      ],
      "automaticOptionalFacetFilters": [
        {
          "facet": "string",
          "score": 1,
          "disjunctive": false
        }
      ]
    },
    "promote": [
      {
        "objectIDs": [
          "test-record-123"
        ],
        "position": 0
      }
    ],
    "filterPromotes": false,
    "hide": [
      {
        "objectID": "test-record-123"
      }
    ],
    "redirect": {
      "indexName": "string"
    },
    "userData": {
      "settingID": "f2a7b51e3503acc6a39b3784ffb84300",
      "pluginVersion": "1.6.0"
    }
  },
  "description": "Display a promotional banner",
  "enabled": true,
  "validity": [
    {
      "from": 0,
      "until": 0
    }
  ],
  "tags": [
    "string"
  ],
  "scope": "string",
  "condition": {
    "pattern": "{facet:genre}",
    "anchoring": "is",
    "alternatives": false,
    "context": "mobile",
    "filters": "genre:comedy"
  }
}
```

Rule object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectID|[ruleID](#schemaruleid)|true|none|Unique identifier of a rule object.|
|conditions|[[condition](#schemacondition)]|false|none|Conditions that trigger a rule.<br><br>Some consequences require specific conditions or don't require any condition.<br>For more information, see [Conditions](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/#conditions).<br>|
|consequence|[consequence](#schemaconsequence)|true|none|Effect of the rule.<br><br>For more information, see [Consequences](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/#consequences).<br>|
|description|string|false|none|Description of the rule's purpose to help you distinguish between different rules.|
|enabled|boolean|false|none|Whether the rule is active.|
|validity|[[timeRange](#schematimerange)]|false|none|Time periods when the rule is active.|
|tags|[string]|false|none|none|
|scope|string|false|none|none|
|condition|[condition](#schemacondition)|false|none|**Deprecated.** Legacy field for a single condition. This field is maintained for backward compatibility <br>with older rules but should not be used in new implementations.<br>|

<h2 id="tocS_parameters_query">parameters_query</h2>
<!-- backwards compatibility -->
<a id="schemaparameters_query"></a>
<a id="schema_parameters_query"></a>
<a id="tocSparameters_query"></a>
<a id="tocsparameters_query"></a>

```json
""
```

Search query for rules.

<h2 id="tocS_parameters_page">parameters_page</h2>
<!-- backwards compatibility -->
<a id="schemaparameters_page"></a>
<a id="schema_parameters_page"></a>
<a id="tocSparameters_page"></a>
<a id="tocsparameters_page"></a>

```json
0
```

Requested page of the API response.

Algolia uses `page` and `hitsPerPage` to control how search results are displayed ([paginated](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/pagination/js)).

- `hitsPerPage`: sets the number of search results (_hits_) displayed per page.
- `page`: specifies the page number of the search results you want to retrieve. Page numbering starts at 0, so the first page is `page=0`, the second is `page=1`, and so on.

For example, to display 10 results per page starting from the third page, set `hitsPerPage` to 10 and `page` to 2.

<h2 id="tocS_parameters_hitsPerPage">parameters_hitsPerPage</h2>
<!-- backwards compatibility -->
<a id="schemaparameters_hitsperpage"></a>
<a id="schema_parameters_hitsPerPage"></a>
<a id="tocSparameters_hitsperpage"></a>
<a id="tocsparameters_hitsperpage"></a>

```json
20
```

Maximum number of hits per page.

Algolia uses `page` and `hitsPerPage` to control how search results are displayed ([paginated](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/pagination/js)).

- `hitsPerPage`: sets the number of search results (_hits_) displayed per page.
- `page`: specifies the page number of the search results you want to retrieve. Page numbering starts at 0, so the first page is `page=0`, the second is `page=1`, and so on.

For example, to display 10 results per page starting from the third page, set `hitsPerPage` to 10 and `page` to 2.

<h2 id="tocS_dictionaryType">dictionaryType</h2>
<!-- backwards compatibility -->
<a id="schemadictionarytype"></a>
<a id="schema_dictionaryType"></a>
<a id="tocSdictionarytype"></a>
<a id="tocsdictionarytype"></a>

```json
"plurals"
```

<h2 id="tocS_dictionaryAction">dictionaryAction</h2>
<!-- backwards compatibility -->
<a id="schemadictionaryaction"></a>
<a id="schema_dictionaryAction"></a>
<a id="tocSdictionaryaction"></a>
<a id="tocsdictionaryaction"></a>

```json
"addEntry"
```

Actions to perform.

<h2 id="tocS_dictionaryEntryState">dictionaryEntryState</h2>
<!-- backwards compatibility -->
<a id="schemadictionaryentrystate"></a>
<a id="schema_dictionaryEntryState"></a>
<a id="tocSdictionaryentrystate"></a>
<a id="tocsdictionaryentrystate"></a>

```json
"enabled"
```

Whether a dictionary entry is active.

<h2 id="tocS_dictionaryEntryType">dictionaryEntryType</h2>
<!-- backwards compatibility -->
<a id="schemadictionaryentrytype"></a>
<a id="schema_dictionaryEntryType"></a>
<a id="tocSdictionaryentrytype"></a>
<a id="tocsdictionaryentrytype"></a>

```json
"custom"
```

Whether a dictionary entry is provided by Algolia (standard), or has been added by you (custom).

<h2 id="tocS_dictionaryEntry">dictionaryEntry</h2>
<!-- backwards compatibility -->
<a id="schemadictionaryentry"></a>
<a id="schema_dictionaryEntry"></a>
<a id="tocSdictionaryentry"></a>
<a id="tocsdictionaryentry"></a>

```json
{
  "objectID": "828afd405e1f4fe950b6b98c2c43c032",
  "language": "af",
  "word": "the",
  "words": [
    "cheval",
    "cheveaux"
  ],
  "decomposition": [
    "kopf",
    "schmerz",
    "tablette"
  ],
  "state": "enabled",
  "type": "custom"
}
```

Dictionary entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectID|string|true|none|Unique identifier for the dictionary entry.|
|language|[supportedLanguage](#schemasupportedlanguage)|false|none|ISO code for a supported language.|
|word|string|false|none|Matching dictionary word for `stopwords` and `compounds` dictionaries.|
|words|[string]|false|none|Matching words in the `plurals` dictionary including declensions.|
|decomposition|[string]|false|none|Invividual components of a compound word in the `compounds` dictionary.|
|state|[dictionaryEntryState](#schemadictionaryentrystate)|false|none|Whether a dictionary entry is active.|
|type|[dictionaryEntryType](#schemadictionaryentrytype)|false|none|Whether a dictionary entry is provided by Algolia (standard), or has been added by you (custom).|

#### Enumerated Values

|Property|Value|
|---|---|
|language|af|
|language|ar|
|language|az|
|language|bg|
|language|bn|
|language|ca|
|language|cs|
|language|cy|
|language|da|
|language|de|
|language|el|
|language|en|
|language|eo|
|language|es|
|language|et|
|language|eu|
|language|fa|
|language|fi|
|language|fo|
|language|fr|
|language|ga|
|language|gl|
|language|he|
|language|hi|
|language|hu|
|language|hy|
|language|id|
|language|is|
|language|it|
|language|ja|
|language|ka|
|language|kk|
|language|ko|
|language|ku|
|language|ky|
|language|lt|
|language|lv|
|language|mi|
|language|mn|
|language|mr|
|language|ms|
|language|mt|
|language|nb|
|language|nl|
|language|no|
|language|ns|
|language|pl|
|language|ps|
|language|pt|
|language|pt-br|
|language|qu|
|language|ro|
|language|ru|
|language|sk|
|language|sq|
|language|sv|
|language|sw|
|language|ta|
|language|te|
|language|th|
|language|tl|
|language|tn|
|language|tr|
|language|tt|
|language|uk|
|language|ur|
|language|uz|
|language|zh|
|state|enabled|
|state|disabled|
|type|custom|
|type|standard|

<h2 id="tocS_searchDictionaryEntriesResponse">searchDictionaryEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchdictionaryentriesresponse"></a>
<a id="schema_searchDictionaryEntriesResponse"></a>
<a id="tocSsearchdictionaryentriesresponse"></a>
<a id="tocssearchdictionaryentriesresponse"></a>

```json
{
  "hits": [
    {
      "objectID": "828afd405e1f4fe950b6b98c2c43c032",
      "language": "af",
      "word": "the",
      "words": [
        "cheval",
        "cheveaux"
      ],
      "decomposition": [
        "kopf",
        "schmerz",
        "tablette"
      ],
      "state": "enabled",
      "type": "custom"
    }
  ],
  "page": 0,
  "nbHits": 20,
  "nbPages": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[dictionaryEntry](#schemadictionaryentry)]|true|none|Dictionary entries matching the search criteria.|
|page|[parameters_page](#schemaparameters_page)|true|none|Requested page of the API response.<br><br>Algolia uses `page` and `hitsPerPage` to control how search results are displayed ([paginated](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/pagination/js)).<br><br>- `hitsPerPage`: sets the number of search results (_hits_) displayed per page.<br>- `page`: specifies the page number of the search results you want to retrieve. Page numbering starts at 0, so the first page is `page=0`, the second is `page=1`, and so on.<br><br>For example, to display 10 results per page starting from the third page, set `hitsPerPage` to 10 and `page` to 2.<br>|
|nbHits|[nbHits](#schemanbhits)|true|none|Number of results (hits).|
|nbPages|[nbPages](#schemanbpages)|true|none|Number of pages of results.|

<h2 id="tocS_standardEntry">standardEntry</h2>
<!-- backwards compatibility -->
<a id="schemastandardentry"></a>
<a id="schema_standardEntry"></a>
<a id="tocSstandardentry"></a>
<a id="tocsstandardentry"></a>

```json
{
  "fr": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Key-value pair of a language ISO code and a boolean value.|
|**additionalProperties**|boolean|false|none|none|
|*oneOf*|null|false|none|none|

<h2 id="tocS_standardEntries">standardEntries</h2>
<!-- backwards compatibility -->
<a id="schemastandardentries"></a>
<a id="schema_standardEntries"></a>
<a id="tocSstandardentries"></a>
<a id="tocsstandardentries"></a>

```json
{
  "plurals": {
    "fr": false
  },
  "stopwords": {
    "fr": false
  },
  "compounds": {
    "fr": false
  }
}
```

Turn off the built-in Algolia stop words for specific languages.
Only `stopwords` is supported.
The keys of the `stopwords` object are [language ISO codes](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages) of languages with a built-in stop-word dictionary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plurals|[standardEntry](#schemastandardentry)|false|none|**Deprecated.** Not supported. The API rejects this property with HTTP 400.<br>You cannot turn off the built-in plurals dictionary.<br>|
|stopwords|[standardEntry](#schemastandardentry)|false|none|none|
|compounds|[standardEntry](#schemastandardentry)|false|none|**Deprecated.** Not supported. The API rejects this property with HTTP 400.<br>You cannot turn off the built-in compounds dictionary.<br>|

<h2 id="tocS_dictionaryLanguage">dictionaryLanguage</h2>
<!-- backwards compatibility -->
<a id="schemadictionarylanguage"></a>
<a id="schema_dictionaryLanguage"></a>
<a id="tocSdictionarylanguage"></a>
<a id="tocsdictionarylanguage"></a>

```json
{
  "nbCustomEntries": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Dictionary type. If `null`, this dictionary type isn't supported for the language.|
|nbCustomEntries|integer|false|none|Number of custom dictionary entries.|
|*oneOf*|null|false|none|none|

<h2 id="tocS_languages">languages</h2>
<!-- backwards compatibility -->
<a id="schemalanguages"></a>
<a id="schema_languages"></a>
<a id="tocSlanguages"></a>
<a id="tocslanguages"></a>

```json
{
  "plurals": {
    "nbCustomEntries": 0
  },
  "stopwords": {
    "nbCustomEntries": 0
  },
  "compounds": {
    "nbCustomEntries": 0
  }
}
```

Dictionary language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plurals|[dictionaryLanguage](#schemadictionarylanguage)|true|none|none|
|stopwords|[dictionaryLanguage](#schemadictionarylanguage)|true|none|none|
|compounds|[dictionaryLanguage](#schemadictionarylanguage)|true|none|none|

<h2 id="tocS_userID">userID</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_userID"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"user1"
```

Unique identifier of the user who makes the search request.

<h2 id="tocS_userId">userId</h2>
<!-- backwards compatibility -->
<a id="schemauserid-1"></a>
<a id="schema_userId"></a>
<a id="tocSuserid-1"></a>
<a id="tocsuserid-1"></a>

```json
{
  "userID": "user1",
  "clusterName": "c1-test",
  "nbRecords": 42,
  "dataSize": 0
}
```

Unique user ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userID|[userID](#schemauserid)|true|none|Unique identifier of the user who makes the search request.|
|clusterName|string|true|none|Cluster to which the user is assigned.|
|nbRecords|integer|true|none|Number of records belonging to the user.|
|dataSize|integer|true|none|Data size used by the user.|

<h2 id="tocS_clusterName">clusterName</h2>
<!-- backwards compatibility -->
<a id="schemaclustername"></a>
<a id="schema_clusterName"></a>
<a id="tocSclustername"></a>
<a id="tocsclustername"></a>

```json
"c11-test"
```

Cluster name.

<h2 id="tocS_nbRecords">nbRecords</h2>
<!-- backwards compatibility -->
<a id="schemanbrecords"></a>
<a id="schema_nbRecords"></a>
<a id="tocSnbrecords"></a>
<a id="tocsnbrecords"></a>

```json
3
```

Number of records in the cluster.

<h2 id="tocS_dataSize">dataSize</h2>
<!-- backwards compatibility -->
<a id="schemadatasize"></a>
<a id="schema_dataSize"></a>
<a id="tocSdatasize"></a>
<a id="tocsdatasize"></a>

```json
481
```

Data size taken by all the users assigned to the cluster.

<h2 id="tocS_source">source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "source": "10.0.0.1/32",
  "description": "Server subnet"
}
```

Source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|IP address range of the source.|
|description|string|false|none|Source description.|

<h2 id="tocS_sources">sources</h2>
<!-- backwards compatibility -->
<a id="schemasources"></a>
<a id="schema_sources"></a>
<a id="tocSsources"></a>
<a id="tocssources"></a>

```json
[
  {
    "source": "10.0.0.1/32",
    "description": "Server subnet"
  }
]
```

Sources.

<h2 id="tocS_logType">logType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_logType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"all"
```

<h2 id="tocS_taskStatus">taskStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskstatus"></a>
<a id="schema_taskStatus"></a>
<a id="tocStaskstatus"></a>
<a id="tocstaskstatus"></a>

```json
"published"
```

Task status, `published` if the task is completed, `notPublished` otherwise.

<h2 id="tocS_GetTaskResponse">GetTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettaskresponse"></a>
<a id="schema_GetTaskResponse"></a>
<a id="tocSgettaskresponse"></a>
<a id="tocsgettaskresponse"></a>

```json
{
  "status": "published"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[taskStatus](#schemataskstatus)|true|none|Task status, `published` if the task is completed, `notPublished` otherwise.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|published|
|status|notPublished|

<h2 id="tocS_operationType">operationType</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtype"></a>
<a id="schema_operationType"></a>
<a id="tocSoperationtype"></a>
<a id="tocsoperationtype"></a>

```json
"copy"
```

Operation to perform on the index.

<h2 id="tocS_scopeType">scopeType</h2>
<!-- backwards compatibility -->
<a id="schemascopetype"></a>
<a id="schema_scopeType"></a>
<a id="tocSscopetype"></a>
<a id="tocsscopetype"></a>

```json
"settings"
```

<h2 id="tocS_fetchedIndexAbTestTarget">fetchedIndexAbTestTarget</h2>
<!-- backwards compatibility -->
<a id="schemafetchedindexabtesttarget"></a>
<a id="schema_fetchedIndexAbTestTarget"></a>
<a id="tocSfetchedindexabtesttarget"></a>
<a id="tocsfetchedindexabtesttarget"></a>

```json
{
  "indexName": "movies"
}
```

A/B test target criteria. Only present for v2 and later tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexName|string|true|none|Index name to match. Use `*` to target the entire application.|

<h2 id="tocS_fetchedIndexAbTestVariant">fetchedIndexAbTestVariant</h2>
<!-- backwards compatibility -->
<a id="schemafetchedindexabtestvariant"></a>
<a id="schema_fetchedIndexAbTestVariant"></a>
<a id="tocSfetchedindexabtestvariant"></a>
<a id="tocsfetchedindexabtestvariant"></a>

```json
{
  "indexName": "movies",
  "percentage": 50,
  "customSearchParameters": "string",
  "payload": {}
}
```

A/B test variant for an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexName|string|false|none|Index name of the variant. Only present for v0/v1 tests; in v2 this moves into `payload`.|
|percentage|integer|true|none|Percentage of search traffic routed to this variant.|
|customSearchParameters|string|false|none|URL-encoded custom search parameters applied to this variant. Only present for v0/v1 tests; in v2 this moves into `payload`.|
|payload|object|false|none|Type-specific configuration. Only present for v2 and later tests. Shape depends on the parent A/B test's `type`.|

<h2 id="tocS_fetchedIndexAbTest">fetchedIndexAbTest</h2>
<!-- backwards compatibility -->
<a id="schemafetchedindexabtest"></a>
<a id="schema_fetchedIndexAbTest"></a>
<a id="tocSfetchedindexabtest"></a>
<a id="tocsfetchedindexabtest"></a>

```json
{
  "id": 12345,
  "version": 2,
  "type": "index-configuration",
  "target": {
    "indexName": "movies"
  },
  "variants": [
    {
      "indexName": "movies",
      "percentage": 50,
      "customSearchParameters": "string",
      "payload": {}
    }
  ]
}
```

A/B test metadata. Only present if the index is part of an active A/B test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|A/B test ID.|
|version|integer|false|none|A/B test schema version. Only present for v2 and later tests.|
|type|string|false|none|A/B test type. Only present for v2 and later tests. Currently always `index-configuration`.|
|target|[fetchedIndexAbTestTarget](#schemafetchedindexabtesttarget)|false|none|A/B test target criteria. Only present for v2 and later tests.|
|variants|[[fetchedIndexAbTestVariant](#schemafetchedindexabtestvariant)]|true|none|A/B test variants.|

<h2 id="tocS_fetchedIndex">fetchedIndex</h2>
<!-- backwards compatibility -->
<a id="schemafetchedindex"></a>
<a id="schema_fetchedIndex"></a>
<a id="tocSfetchedindex"></a>
<a id="tocsfetchedindex"></a>

```json
{
  "name": "movies",
  "createdAt": "2022-09-19T16:36:44.471Z",
  "updatedAt": "2023-07-04T12:49:15Z",
  "entries": 100,
  "dataSize": 48450,
  "fileSize": 112927,
  "lastBuildTimeS": 3,
  "numberOfPendingTasks": 0,
  "pendingTask": false,
  "primary": "T02",
  "replicas": [
    "T02_push",
    "T2replica"
  ],
  "virtual": true,
  "abTest": {
    "id": 12345,
    "version": 2,
    "type": "index-configuration",
    "target": {
      "indexName": "movies"
    },
    "variants": [
      {
        "indexName": "movies",
        "percentage": 50,
        "customSearchParameters": "string",
        "payload": {}
      }
    ]
  },
  "sourceABTest": "movies_dev_a"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Index name.|
|createdAt|string|true|none|Index creation date. An empty string means that the index has no records.|
|updatedAt|[updatedAt](#schemaupdatedat)|true|none|Date and time when the object was updated, in RFC 3339 format.|
|entries|integer|true|none|Number of records contained in the index.|
|dataSize|integer(int64)|true|none|Number of bytes of the index in minified format.|
|fileSize|integer(int64)|true|none|Number of bytes of the index binary file.|
|lastBuildTimeS|integer|true|none|Last build time.|
|numberOfPendingTasks|integer|true|none|Number of pending indexing operations. This value is deprecated and should not be used.|
|pendingTask|boolean|true|none|A boolean which says whether the index has pending tasks. This value is deprecated and should not be used.|
|primary|string|false|none|Only present if the index is a replica. Contains the name of the related primary index.|
|replicas|[string]|false|none|Only present if the index is a primary index with replicas. Contains the names of all linked replicas.|
|virtual|boolean|false|none|Only present if the index is a [virtual replica](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-an-index-alphabetically/#virtual-replicas).|
|abTest|[fetchedIndexAbTest](#schemafetchedindexabtest)|false|none|A/B test metadata. Only present if the index is part of an active A/B test.|
|sourceABTest|string|false|none|Name of the index that owns the A/B test configuration. Only present when this index participates in an A/B test configured on another index.|

<h2 id="tocS_listIndicesResponse">listIndicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistindicesresponse"></a>
<a id="schema_listIndicesResponse"></a>
<a id="tocSlistindicesresponse"></a>
<a id="tocslistindicesresponse"></a>

```json
{
  "items": [
    {
      "name": "movies",
      "createdAt": "2022-09-19T16:36:44.471Z",
      "updatedAt": "2023-07-04T12:49:15Z",
      "entries": 100,
      "dataSize": 48450,
      "fileSize": 112927,
      "lastBuildTimeS": 3,
      "numberOfPendingTasks": 0,
      "pendingTask": false,
      "primary": "T02",
      "replicas": [
        "T02_push",
        "T2replica"
      ],
      "virtual": true,
      "abTest": {
        "id": 12345,
        "version": 2,
        "type": "index-configuration",
        "target": {
          "indexName": "movies"
        },
        "variants": [
          {
            "indexName": "movies",
            "percentage": 50,
            "customSearchParameters": "string",
            "payload": {}
          }
        ]
      },
      "sourceABTest": "movies_dev_a"
    }
  ],
  "nbPages": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[fetchedIndex](#schemafetchedindex)]|true|none|All indices in your Algolia application.|
|nbPages|integer|false|none|Number of pages.|

<h2 id="tocS_apiKeyOperation">apiKeyOperation</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyoperation"></a>
<a id="schema_apiKeyOperation"></a>
<a id="tocSapikeyoperation"></a>
<a id="tocsapikeyoperation"></a>

```json
"add"
```

<h2 id="tocS_securedApiKeyRestrictions">securedApiKeyRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemasecuredapikeyrestrictions"></a>
<a id="schema_securedApiKeyRestrictions"></a>
<a id="tocSsecuredapikeyrestrictions"></a>
<a id="tocssecuredapikeyrestrictions"></a>

```json
{
  "searchParams": {
    "query": "",
    "similarQuery": "comedy drama crime Macy Buscemi",
    "filters": "(category:Book OR category:Ebook) AND _tags:published",
    "facetFilters": [
      [
        "category:Book",
        "category:-Movie"
      ],
      "author:John Doe"
    ],
    "optionalFilters": [
      "category:Book",
      "author:John Doe"
    ],
    "numericFilters": [
      [
        "inStock = 1",
        "deliveryDate < 1441755506"
      ],
      "price < 1000"
    ],
    "tagFilters": [
      [
        "Book",
        "Movie"
      ],
      "SciFi"
    ],
    "sumOrFiltersScores": false,
    "restrictSearchableAttributes": [
      "title",
      "author"
    ],
    "facets": [
      "*"
    ],
    "facetingAfterDistinct": false,
    "page": 0,
    "offset": 0,
    "length": 0,
    "aroundLatLng": "40.71,-74.01",
    "aroundLatLngViaIP": false,
    "aroundRadius": 1,
    "aroundPrecision": 10,
    "minimumAroundRadius": 1,
    "insideBoundingBox": "string",
    "insidePolygon": [
      [
        47.3165,
        4.9665,
        47.3424,
        5.0201,
        47.32,
        4.9
      ],
      [
        40.9234,
        2.1185,
        38.643,
        1.9916,
        39.2587,
        2.0104
      ]
    ],
    "naturalLanguages": [],
    "ruleContexts": [
      "mobile"
    ],
    "personalizationImpact": 100,
    "userToken": "test-user-123",
    "getRankingInfo": false,
    "synonyms": true,
    "clickAnalytics": false,
    "analytics": true,
    "analyticsTags": [],
    "percentileComputation": true,
    "enableABTest": true,
    "attributesToRetrieve": [
      "author",
      "title",
      "content"
    ],
    "ranking": [
      "typo",
      "geo",
      "words",
      "filters",
      "proximity",
      "attribute",
      "exact",
      "custom"
    ],
    "relevancyStrictness": 90,
    "attributesToHighlight": [
      "author",
      "title",
      "conten",
      "content"
    ],
    "attributesToSnippet": [
      "content:80",
      "description"
    ],
    "highlightPreTag": "<em>",
    "highlightPostTag": "</em>",
    "snippetEllipsisText": "…",
    "restrictHighlightAndSnippetArrays": false,
    "hitsPerPage": 20,
    "minWordSizefor1Typo": 4,
    "minWordSizefor2Typos": 8,
    "typoTolerance": true,
    "allowTyposOnNumericTokens": true,
    "disableTypoToleranceOnAttributes": [
      "sku"
    ],
    "ignorePlurals": [
      "ca",
      "es"
    ],
    "removeStopWords": [
      "ca",
      "es"
    ],
    "queryLanguages": [
      "es"
    ],
    "decompoundQuery": true,
    "enableRules": true,
    "enablePersonalization": false,
    "queryType": "prefixLast",
    "removeWordsIfNoResults": "firstWords",
    "mode": "keywordSearch",
    "semanticSearch": {
      "eventSources": [
        "string"
      ]
    },
    "advancedSyntax": false,
    "optionalWords": "string",
    "disableExactOnAttributes": [
      "description"
    ],
    "exactOnSingleWordQuery": "attribute",
    "alternativesAsExact": [
      "ignorePlurals",
      "singleWordSynonym"
    ],
    "advancedSyntaxFeatures": [
      "exactPhrase",
      "excludeWords"
    ],
    "distinct": 1,
    "replaceSynonymsInHighlight": false,
    "minProximity": 1,
    "responseFields": [
      "*"
    ],
    "maxValuesPerFacet": 100,
    "sortFacetValuesBy": "count",
    "attributeCriteriaComputedByMinProximity": false,
    "attributeCriteriaComputedBy": "best",
    "renderingContent": {
      "facetOrdering": {
        "facets": {
          "order": [
            "string"
          ]
        },
        "values": {
          "property1": {
            "order": [
              "string"
            ],
            "sortRemainingBy": "count",
            "hide": [
              "string"
            ]
          },
          "property2": {
            "order": [
              "string"
            ],
            "sortRemainingBy": "count",
            "hide": [
              "string"
            ]
          }
        }
      },
      "redirect": {
        "url": "string"
      },
      "widgets": {
        "banners": [
          {
            "image": {
              "urls": [
                {
                  "url": "string"
                }
              ],
              "title": "string"
            },
            "link": {
              "url": "string"
            }
          }
        ],
        "resultCard": {
          "enabled": true
        }
      }
    },
    "enableReRanking": true,
    "reRankingApplyFilter": [
      {}
    ]
  },
  "filters": "string",
  "validUntil": 0,
  "restrictIndices": [
    "string"
  ],
  "restrictSources": "192.168.1.0/24",
  "userToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchParams|[searchParamsObject](#schemasearchparamsobject)|false|none|Each parameter value, including the `query` must not be larger than 512 bytes.|
|filters|string|false|none|Filters that apply to every search made with the secured API key.<br>Extra filters added at search time will be combined with `AND`.<br>For example, if you set `group:admin` as fixed filter on your generated API key,<br>and add `groups:visitors` to the search query, the complete set of filters will be `group:admin AND groups:visitors`.<br>|
|validUntil|integer(int64)|false|none|Timestamp when the secured API key expires, measured in seconds since the Unix epoch.|
|restrictIndices|[string]|false|none|Index names or patterns that this API key can access.<br>By default, an API key can access all indices in the same application.<br><br>You can use leading and trailing wildcard characters (`*`):<br><br>- `dev_*` matches all indices starting with "dev_".<br>- `*_dev` matches all indices ending with "_dev".<br>- `*_products_*` matches all indices containing "_products_".<br>|
|restrictSources|string|false|none|IP network that are allowed to use this key.<br><br>You can only add a single source, but you can provide a range of IP addresses.<br>Use this to protect against API key leaking and reuse.<br>|
|userToken|string|false|none|Pseudonymous user identifier to restrict usage of this API key to specific users.<br><br>By default, rate limits are set based on IP addresses. This can be an issue if many users search from the same IP address.<br>To avoid this, add a user token to each generated API key.<br>|

<h2 id="tocS_replaceAllObjectsResponse">replaceAllObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplaceallobjectsresponse"></a>
<a id="schema_replaceAllObjectsResponse"></a>
<a id="tocSreplaceallobjectsresponse"></a>
<a id="tocsreplaceallobjectsresponse"></a>

```json
{
  "copyOperationResponse": {
    "taskID": 1514562690001,
    "updatedAt": "2023-07-04T12:49:15Z"
  },
  "batchResponses": [
    {
      "taskID": 1514562690001,
      "objectIDs": [
        "record-1",
        "record-2"
      ]
    }
  ],
  "moveOperationResponse": {
    "taskID": 1514562690001,
    "updatedAt": "2023-07-04T12:49:15Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyOperationResponse|[updatedAtResponse](#schemaupdatedatresponse)|true|none|The response of the `operationIndex` request for the `copy` operation.|
|batchResponses|[[batchResponse](#schemabatchresponse)]|true|none|The response of the `batch` request(s).|
|moveOperationResponse|[updatedAtResponse](#schemaupdatedatresponse)|true|none|The response of the `operationIndex` request for the `move` operation.|

<h2 id="tocS_RunID">RunID</h2>
<!-- backwards compatibility -->
<a id="schemarunid"></a>
<a id="schema_RunID"></a>
<a id="tocSrunid"></a>
<a id="tocsrunid"></a>

```json
"6c02aeb1-775e-418e-870b-1faccd4b2c0f"
```

Universally unique identifier (UUID) of a task run.

<h2 id="tocS_EventID">EventID</h2>
<!-- backwards compatibility -->
<a id="schemaeventid"></a>
<a id="schema_EventID"></a>
<a id="tocSeventid"></a>
<a id="tocseventid"></a>

```json
"6c02aeb1-775e-418e-870b-1faccd4b2c0f"
```

Universally unique identifier (UUID) of an event.

<h2 id="tocS_EventStatus">EventStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeventstatus"></a>
<a id="schema_EventStatus"></a>
<a id="tocSeventstatus"></a>
<a id="tocseventstatus"></a>

```json
"created"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|created|
|*oneOf*|started|
|*oneOf*|retried|
|*oneOf*|failed|
|*oneOf*|succeeded|
|*oneOf*|critical|

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"fetch"
```

<h2 id="tocS_PublishedAt">PublishedAt</h2>
<!-- backwards compatibility -->
<a id="schemapublishedat"></a>
<a id="schema_PublishedAt"></a>
<a id="tocSpublishedat"></a>
<a id="tocspublishedat"></a>

```json
"string"
```

Date and time when the resource was published, in RFC 3339 format.

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
  "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
  "status": "created",
  "type": "fetch",
  "batchSize": 10,
  "data": {},
  "publishedAt": "string"
}
```

An event describe a step of the task execution flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventID|[EventID](#schemaeventid)|true|none|Universally unique identifier (UUID) of an event.|
|runID|[RunID](#schemarunid)|true|none|Universally unique identifier (UUID) of a task run.|
|status|[EventStatus](#schemaeventstatus)|true|none|none|
|type|[EventType](#schemaeventtype)|true|none|none|
|batchSize|integer|true|none|The extracted record batch size.|
|data|object \| null|false|none|none|
|publishedAt|[PublishedAt](#schemapublishedat)|true|none|Date and time when the resource was published, in RFC 3339 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|fetch|
|type|record|
|type|log|
|type|transform|

<h2 id="tocS_CreatedAt2">CreatedAt2</h2>
<!-- backwards compatibility -->
<a id="schemacreatedat2"></a>
<a id="schema_CreatedAt2"></a>
<a id="tocScreatedat2"></a>
<a id="tocscreatedat2"></a>

```json
"string"
```

Date and time when the resource was created, in RFC 3339 format.

<h2 id="tocS_WatchResponse">WatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemawatchresponse"></a>
<a id="schema_WatchResponse"></a>
<a id="tocSwatchresponse"></a>
<a id="tocswatchresponse"></a>

```json
{
  "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
  "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
  "data": [
    {}
  ],
  "events": [
    {
      "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
      "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
      "status": "created",
      "type": "fetch",
      "batchSize": 10,
      "data": {},
      "publishedAt": "string"
    }
  ],
  "message": "string",
  "createdAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runID|[RunID](#schemarunid)|true|none|Universally unique identifier (UUID) of a task run.|
|eventID|[EventID](#schemaeventid)|false|none|Universally unique identifier (UUID) of an event.|
|data|[object]|false|none|This field is always null when used with the Push endpoint.<br>When used for a source discover or source validate run, it will include the sampled data of the source.<br>|
|events|[[Event](#schemaevent)]|false|none|in case of error, observability events will be added to the response.|
|message|string|false|none|a message describing the outcome of the operation that has been ran (push, discover or validate) run.|
|createdAt|[CreatedAt2](#schemacreatedat2)|false|none|Date and time when the resource was created, in RFC 3339 format.|

<h2 id="tocS_replaceAllObjectsWithTransformationResponse">replaceAllObjectsWithTransformationResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplaceallobjectswithtransformationresponse"></a>
<a id="schema_replaceAllObjectsWithTransformationResponse"></a>
<a id="tocSreplaceallobjectswithtransformationresponse"></a>
<a id="tocsreplaceallobjectswithtransformationresponse"></a>

```json
{
  "copyOperationResponse": {
    "taskID": 1514562690001,
    "updatedAt": "2023-07-04T12:49:15Z"
  },
  "watchResponses": [
    {
      "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
      "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
      "data": [
        {}
      ],
      "events": [
        {
          "eventID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
          "runID": "6c02aeb1-775e-418e-870b-1faccd4b2c0f",
          "status": "created",
          "type": "fetch",
          "batchSize": 10,
          "data": {},
          "publishedAt": "string"
        }
      ],
      "message": "string",
      "createdAt": "string"
    }
  ],
  "moveOperationResponse": {
    "taskID": 1514562690001,
    "updatedAt": "2023-07-04T12:49:15Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyOperationResponse|[updatedAtResponse](#schemaupdatedatresponse)|true|none|The response of the `operationIndex` request for the `copy` operation.|
|watchResponses|[[WatchResponse](#schemawatchresponse)]|true|none|The response of the `push` request(s).|
|moveOperationResponse|[updatedAtResponse](#schemaupdatedatresponse)|true|none|The response of the `operationIndex` request for the `move` operation.|

<h2 id="tocS_builtInOperationType">builtInOperationType</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinoperationtype"></a>
<a id="schema_builtInOperationType"></a>
<a id="tocSbuiltinoperationtype"></a>
<a id="tocsbuiltinoperationtype"></a>

```json
"Increment"
```

How to change the attribute.

<h2 id="tocS_builtInOperationValue">builtInOperationValue</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinoperationvalue"></a>
<a id="schema_builtInOperationValue"></a>
<a id="tocSbuiltinoperationvalue"></a>
<a id="tocsbuiltinoperationvalue"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|A string to append or remove for the `Add`, `Remove`, and `AddUnique` operations.|
|*oneOf*|integer|false|none|A number to add, remove, or append, depending on the operation.|

<h2 id="tocS_builtInOperation">builtInOperation</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinoperation"></a>
<a id="schema_builtInOperation"></a>
<a id="tocSbuiltinoperation"></a>
<a id="tocsbuiltinoperation"></a>

```json
{
  "_operation": "Increment",
  "value": "string"
}
```

Update to perform on the attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_operation|[builtInOperationType](#schemabuiltinoperationtype)|true|none|How to change the attribute.|
|value|[builtInOperationValue](#schemabuiltinoperationvalue)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|_operation|Increment|
|_operation|Decrement|
|_operation|Add|
|_operation|Remove|
|_operation|AddUnique|
|_operation|IncrementFrom|
|_operation|IncrementSet|
