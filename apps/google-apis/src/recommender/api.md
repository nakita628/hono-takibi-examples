<h1 id="recommender-api">Recommender API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://recommender.googleapis.com/">https://recommender.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/recommender/docs/">External documentation</a>

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

<h1 id="recommender-api-projects">projects</h1>

## recommender.projects.locations.recommenders.recommendations.get

<a id="opIdrecommender.projects.locations.recommenders.recommendations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.

<h3 id="recommenderprojectslocationsrecommendersrecommendationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the recommendation.|
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
  "additionalImpact": [
    {
      "category": "CATEGORY_UNSPECIFIED",
      "costProjection": {
        "cost": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "duration": "string"
      },
      "reliabilityProjection": {
        "details": {
          "property1": null,
          "property2": null
        },
        "risks": [
          "RISK_TYPE_UNSPECIFIED"
        ]
      },
      "securityProjection": {
        "details": {
          "property1": null,
          "property2": null
        }
      },
      "sustainabilityProjection": {
        "duration": "string",
        "kgCO2e": 0
      }
    }
  ],
  "associatedInsights": [
    {
      "insight": "string"
    }
  ],
  "content": {
    "operationGroups": [
      {
        "operations": [
          {
            "action": "string",
            "path": "string",
            "pathFilters": {
              "property1": null,
              "property2": null
            },
            "pathValueMatchers": {
              "property1": {
                "matchesPattern": "string"
              },
              "property2": {
                "matchesPattern": "string"
              }
            },
            "resource": "string",
            "resourceType": "string",
            "sourcePath": "string",
            "sourceResource": "string",
            "value": null,
            "valueMatcher": {
              "matchesPattern": "string"
            }
          }
        ]
      }
    ],
    "overview": {
      "property1": null,
      "property2": null
    }
  },
  "description": "string",
  "etag": "string",
  "lastRefreshTime": "string",
  "name": "string",
  "primaryImpact": {
    "category": "CATEGORY_UNSPECIFIED",
    "costProjection": {
      "cost": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "duration": "string"
    },
    "reliabilityProjection": {
      "details": {
        "property1": null,
        "property2": null
      },
      "risks": [
        "RISK_TYPE_UNSPECIFIED"
      ]
    },
    "securityProjection": {
      "details": {
        "property1": null,
        "property2": null
      }
    },
    "sustainabilityProjection": {
      "duration": "string",
      "kgCO2e": 0
    }
  },
  "priority": "PRIORITY_UNSPECIFIED",
  "recommenderSubtype": "string",
  "stateInfo": {
    "state": "STATE_UNSPECIFIED",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "xorGroupId": "string"
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1Recommendation](#schemagooglecloudrecommenderv1beta1recommendation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommender.projects.locations.recommenders.updateConfig

<a id="opIdrecommender.projects.locations.recommenders.updateConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "displayName": "string",
    "etag": "string",
    "name": "string",
    "recommenderGenerationConfig": {
      "params": {
        "property1": null,
        "property2": null
      }
    },
    "updateTime": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates a Recommender Config. This will create a new revision of the config.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "recommenderGenerationConfig": {
    "params": {
      "property1": null,
      "property2": null
    }
  },
  "updateTime": "string"
}
```

<h3 id="recommenderprojectslocationsrecommendersupdateconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config|
|updateMask|query|string|false|The list of fields to be updated.|
|validateOnly|query|boolean|false|If true, validate the request and preview the change, but do not actually update it.|
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
|body|body|[GoogleCloudRecommenderV1beta1RecommenderConfig](#schemagooglecloudrecommenderv1beta1recommenderconfig)|false|none|
|» annotations|body|object|false|Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.|
|» » **additionalProperties**|body|string|false|none|
|» displayName|body|string|false|A user-settable field to provide a human-readable name to be used in user interfaces.|
|» etag|body|string|false|Fingerprint of the RecommenderConfig. Provides optimistic locking when updating.|
|» name|body|string|false|Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config|
|» recommenderGenerationConfig|body|[GoogleCloudRecommenderV1beta1RecommenderGenerationConfig](#schemagooglecloudrecommenderv1beta1recommendergenerationconfig)|false|RecommenderGenerationConfig which configures the Generation of recommendations for this recommender.|
|» updateTime|body|string(google-datetime)|false|Last time when the config was updated.|

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
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "recommenderGenerationConfig": {
    "params": {
      "property1": null,
      "property2": null
    }
  },
  "revisionId": "string",
  "updateTime": "string"
}
```

<h3 id="recommenderprojectslocationsrecommendersupdateconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1RecommenderConfig](#schemagooglecloudrecommenderv1beta1recommenderconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommender.projects.locations.insightTypes.insights.markAccepted

<a id="opIdrecommender.projects.locations.insightTypes.insights.markAccepted"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:markAccepted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{name}:markAccepted`

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.

> Body parameter

```json
{
  "etag": "string",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="recommenderprojectslocationsinsighttypesinsightsmarkaccepted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the insight.|
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
|body|body|[GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest](#schemagooglecloudrecommenderv1beta1markinsightacceptedrequest)|false|none|
|» etag|body|string|false|Required. Fingerprint of the Insight. Provides optimistic locking.|
|» stateMetadata|body|object|false|Optional. State properties user wish to include with this state. Full replace of the current state_metadata.|
|» » **additionalProperties**|body|string|false|none|

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
  "associatedRecommendations": [
    {
      "recommendation": "string"
    }
  ],
  "category": "CATEGORY_UNSPECIFIED",
  "content": {
    "property1": null,
    "property2": null
  },
  "description": "string",
  "etag": "string",
  "insightSubtype": "string",
  "lastRefreshTime": "string",
  "name": "string",
  "observationPeriod": "string",
  "severity": "SEVERITY_UNSPECIFIED",
  "stateInfo": {
    "state": "STATE_UNSPECIFIED",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "targetResources": [
    "string"
  ]
}
```

<h3 id="recommenderprojectslocationsinsighttypesinsightsmarkaccepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1Insight](#schemagooglecloudrecommenderv1beta1insight)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommender.projects.locations.recommenders.recommendations.markClaimed

<a id="opIdrecommender.projects.locations.recommenders.recommendations.markClaimed"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:markClaimed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{name}:markClaimed`

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

> Body parameter

```json
{
  "etag": "string",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsmarkclaimed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the recommendation.|
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
|body|body|[GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest](#schemagooglecloudrecommenderv1beta1markrecommendationclaimedrequest)|false|none|
|» etag|body|string|false|Required. Fingerprint of the Recommendation. Provides optimistic locking.|
|» stateMetadata|body|object|false|State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.|
|» » **additionalProperties**|body|string|false|none|

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
  "additionalImpact": [
    {
      "category": "CATEGORY_UNSPECIFIED",
      "costProjection": {
        "cost": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "duration": "string"
      },
      "reliabilityProjection": {
        "details": {
          "property1": null,
          "property2": null
        },
        "risks": [
          "RISK_TYPE_UNSPECIFIED"
        ]
      },
      "securityProjection": {
        "details": {
          "property1": null,
          "property2": null
        }
      },
      "sustainabilityProjection": {
        "duration": "string",
        "kgCO2e": 0
      }
    }
  ],
  "associatedInsights": [
    {
      "insight": "string"
    }
  ],
  "content": {
    "operationGroups": [
      {
        "operations": [
          {
            "action": "string",
            "path": "string",
            "pathFilters": {
              "property1": null,
              "property2": null
            },
            "pathValueMatchers": {
              "property1": {
                "matchesPattern": "string"
              },
              "property2": {
                "matchesPattern": "string"
              }
            },
            "resource": "string",
            "resourceType": "string",
            "sourcePath": "string",
            "sourceResource": "string",
            "value": null,
            "valueMatcher": {
              "matchesPattern": "string"
            }
          }
        ]
      }
    ],
    "overview": {
      "property1": null,
      "property2": null
    }
  },
  "description": "string",
  "etag": "string",
  "lastRefreshTime": "string",
  "name": "string",
  "primaryImpact": {
    "category": "CATEGORY_UNSPECIFIED",
    "costProjection": {
      "cost": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "duration": "string"
    },
    "reliabilityProjection": {
      "details": {
        "property1": null,
        "property2": null
      },
      "risks": [
        "RISK_TYPE_UNSPECIFIED"
      ]
    },
    "securityProjection": {
      "details": {
        "property1": null,
        "property2": null
      }
    },
    "sustainabilityProjection": {
      "duration": "string",
      "kgCO2e": 0
    }
  },
  "priority": "PRIORITY_UNSPECIFIED",
  "recommenderSubtype": "string",
  "stateInfo": {
    "state": "STATE_UNSPECIFIED",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "xorGroupId": "string"
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsmarkclaimed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1Recommendation](#schemagooglecloudrecommenderv1beta1recommendation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommender.projects.locations.recommenders.recommendations.markDismissed

<a id="opIdrecommender.projects.locations.recommenders.recommendations.markDismissed"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:markDismissed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string"
  }'
```

`POST /v1beta1/{name}:markDismissed`

Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

> Body parameter

```json
{
  "etag": "string"
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsmarkdismissed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the recommendation.|
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
|body|body|[GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest](#schemagooglecloudrecommenderv1beta1markrecommendationdismissedrequest)|false|none|
|» etag|body|string|false|Fingerprint of the Recommendation. Provides optimistic locking.|

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
  "additionalImpact": [
    {
      "category": "CATEGORY_UNSPECIFIED",
      "costProjection": {
        "cost": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "duration": "string"
      },
      "reliabilityProjection": {
        "details": {
          "property1": null,
          "property2": null
        },
        "risks": [
          "RISK_TYPE_UNSPECIFIED"
        ]
      },
      "securityProjection": {
        "details": {
          "property1": null,
          "property2": null
        }
      },
      "sustainabilityProjection": {
        "duration": "string",
        "kgCO2e": 0
      }
    }
  ],
  "associatedInsights": [
    {
      "insight": "string"
    }
  ],
  "content": {
    "operationGroups": [
      {
        "operations": [
          {
            "action": "string",
            "path": "string",
            "pathFilters": {
              "property1": null,
              "property2": null
            },
            "pathValueMatchers": {
              "property1": {
                "matchesPattern": "string"
              },
              "property2": {
                "matchesPattern": "string"
              }
            },
            "resource": "string",
            "resourceType": "string",
            "sourcePath": "string",
            "sourceResource": "string",
            "value": null,
            "valueMatcher": {
              "matchesPattern": "string"
            }
          }
        ]
      }
    ],
    "overview": {
      "property1": null,
      "property2": null
    }
  },
  "description": "string",
  "etag": "string",
  "lastRefreshTime": "string",
  "name": "string",
  "primaryImpact": {
    "category": "CATEGORY_UNSPECIFIED",
    "costProjection": {
      "cost": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "duration": "string"
    },
    "reliabilityProjection": {
      "details": {
        "property1": null,
        "property2": null
      },
      "risks": [
        "RISK_TYPE_UNSPECIFIED"
      ]
    },
    "securityProjection": {
      "details": {
        "property1": null,
        "property2": null
      }
    },
    "sustainabilityProjection": {
      "duration": "string",
      "kgCO2e": 0
    }
  },
  "priority": "PRIORITY_UNSPECIFIED",
  "recommenderSubtype": "string",
  "stateInfo": {
    "state": "STATE_UNSPECIFIED",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "xorGroupId": "string"
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsmarkdismissed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1Recommendation](#schemagooglecloudrecommenderv1beta1recommendation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommender.projects.locations.recommenders.recommendations.markFailed

<a id="opIdrecommender.projects.locations.recommenders.recommendations.markFailed"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:markFailed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{name}:markFailed`

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

> Body parameter

```json
{
  "etag": "string",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsmarkfailed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the recommendation.|
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
|body|body|[GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest](#schemagooglecloudrecommenderv1beta1markrecommendationfailedrequest)|false|none|
|» etag|body|string|false|Required. Fingerprint of the Recommendation. Provides optimistic locking.|
|» stateMetadata|body|object|false|State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.|
|» » **additionalProperties**|body|string|false|none|

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
  "additionalImpact": [
    {
      "category": "CATEGORY_UNSPECIFIED",
      "costProjection": {
        "cost": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "duration": "string"
      },
      "reliabilityProjection": {
        "details": {
          "property1": null,
          "property2": null
        },
        "risks": [
          "RISK_TYPE_UNSPECIFIED"
        ]
      },
      "securityProjection": {
        "details": {
          "property1": null,
          "property2": null
        }
      },
      "sustainabilityProjection": {
        "duration": "string",
        "kgCO2e": 0
      }
    }
  ],
  "associatedInsights": [
    {
      "insight": "string"
    }
  ],
  "content": {
    "operationGroups": [
      {
        "operations": [
          {
            "action": "string",
            "path": "string",
            "pathFilters": {
              "property1": null,
              "property2": null
            },
            "pathValueMatchers": {
              "property1": {
                "matchesPattern": "string"
              },
              "property2": {
                "matchesPattern": "string"
              }
            },
            "resource": "string",
            "resourceType": "string",
            "sourcePath": "string",
            "sourceResource": "string",
            "value": null,
            "valueMatcher": {
              "matchesPattern": "string"
            }
          }
        ]
      }
    ],
    "overview": {
      "property1": null,
      "property2": null
    }
  },
  "description": "string",
  "etag": "string",
  "lastRefreshTime": "string",
  "name": "string",
  "primaryImpact": {
    "category": "CATEGORY_UNSPECIFIED",
    "costProjection": {
      "cost": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "duration": "string"
    },
    "reliabilityProjection": {
      "details": {
        "property1": null,
        "property2": null
      },
      "risks": [
        "RISK_TYPE_UNSPECIFIED"
      ]
    },
    "securityProjection": {
      "details": {
        "property1": null,
        "property2": null
      }
    },
    "sustainabilityProjection": {
      "duration": "string",
      "kgCO2e": 0
    }
  },
  "priority": "PRIORITY_UNSPECIFIED",
  "recommenderSubtype": "string",
  "stateInfo": {
    "state": "STATE_UNSPECIFIED",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "xorGroupId": "string"
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsmarkfailed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1Recommendation](#schemagooglecloudrecommenderv1beta1recommendation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommender.projects.locations.recommenders.recommendations.markSucceeded

<a id="opIdrecommender.projects.locations.recommenders.recommendations.markSucceeded"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:markSucceeded \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{name}:markSucceeded`

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

> Body parameter

```json
{
  "etag": "string",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsmarksucceeded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the recommendation.|
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
|body|body|[GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest](#schemagooglecloudrecommenderv1beta1markrecommendationsucceededrequest)|false|none|
|» etag|body|string|false|Required. Fingerprint of the Recommendation. Provides optimistic locking.|
|» stateMetadata|body|object|false|State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.|
|» » **additionalProperties**|body|string|false|none|

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
  "additionalImpact": [
    {
      "category": "CATEGORY_UNSPECIFIED",
      "costProjection": {
        "cost": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "duration": "string"
      },
      "reliabilityProjection": {
        "details": {
          "property1": null,
          "property2": null
        },
        "risks": [
          "RISK_TYPE_UNSPECIFIED"
        ]
      },
      "securityProjection": {
        "details": {
          "property1": null,
          "property2": null
        }
      },
      "sustainabilityProjection": {
        "duration": "string",
        "kgCO2e": 0
      }
    }
  ],
  "associatedInsights": [
    {
      "insight": "string"
    }
  ],
  "content": {
    "operationGroups": [
      {
        "operations": [
          {
            "action": "string",
            "path": "string",
            "pathFilters": {
              "property1": null,
              "property2": null
            },
            "pathValueMatchers": {
              "property1": {
                "matchesPattern": "string"
              },
              "property2": {
                "matchesPattern": "string"
              }
            },
            "resource": "string",
            "resourceType": "string",
            "sourcePath": "string",
            "sourceResource": "string",
            "value": null,
            "valueMatcher": {
              "matchesPattern": "string"
            }
          }
        ]
      }
    ],
    "overview": {
      "property1": null,
      "property2": null
    }
  },
  "description": "string",
  "etag": "string",
  "lastRefreshTime": "string",
  "name": "string",
  "primaryImpact": {
    "category": "CATEGORY_UNSPECIFIED",
    "costProjection": {
      "cost": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "duration": "string"
    },
    "reliabilityProjection": {
      "details": {
        "property1": null,
        "property2": null
      },
      "risks": [
        "RISK_TYPE_UNSPECIFIED"
      ]
    },
    "securityProjection": {
      "details": {
        "property1": null,
        "property2": null
      }
    },
    "sustainabilityProjection": {
      "duration": "string",
      "kgCO2e": 0
    }
  },
  "priority": "PRIORITY_UNSPECIFIED",
  "recommenderSubtype": "string",
  "stateInfo": {
    "state": "STATE_UNSPECIFIED",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "xorGroupId": "string"
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationsmarksucceeded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1Recommendation](#schemagooglecloudrecommenderv1beta1recommendation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommender.projects.locations.insightTypes.insights.list

<a id="opIdrecommender.projects.locations.insightTypes.insights.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/insights \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/insights`

Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.

<h3 id="recommenderprojectslocationsinsighttypesinsightslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.|
|filter|query|string|false|Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` (These expressions are based on the filter language described at https://google.aip.dev/160)|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.|
|pageToken|query|string|false|Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.|
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
  "insights": [
    {
      "associatedRecommendations": [
        {
          "recommendation": "string"
        }
      ],
      "category": "CATEGORY_UNSPECIFIED",
      "content": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "etag": "string",
      "insightSubtype": "string",
      "lastRefreshTime": "string",
      "name": "string",
      "observationPeriod": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "stateInfo": {
        "state": "STATE_UNSPECIFIED",
        "stateMetadata": {
          "property1": "string",
          "property2": "string"
        }
      },
      "targetResources": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="recommenderprojectslocationsinsighttypesinsightslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1ListInsightsResponse](#schemagooglecloudrecommenderv1beta1listinsightsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## recommender.projects.locations.recommenders.recommendations.list

<a id="opIdrecommender.projects.locations.recommenders.recommendations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/recommendations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/recommendations`

Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.

<h3 id="recommenderprojectslocationsrecommendersrecommendationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.|
|filter|query|string|false|Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` (These expressions are based on the filter language described at https://google.aip.dev/160)|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.|
|pageToken|query|string|false|Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.|
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
  "recommendations": [
    {
      "additionalImpact": [
        {
          "category": "CATEGORY_UNSPECIFIED",
          "costProjection": {
            "cost": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "duration": "string"
          },
          "reliabilityProjection": {
            "details": {
              "property1": null,
              "property2": null
            },
            "risks": [
              "RISK_TYPE_UNSPECIFIED"
            ]
          },
          "securityProjection": {
            "details": {
              "property1": null,
              "property2": null
            }
          },
          "sustainabilityProjection": {
            "duration": "string",
            "kgCO2e": 0
          }
        }
      ],
      "associatedInsights": [
        {
          "insight": "string"
        }
      ],
      "content": {
        "operationGroups": [
          {
            "operations": [
              {
                "action": "string",
                "path": "string",
                "pathFilters": {
                  "property1": null,
                  "property2": null
                },
                "pathValueMatchers": {
                  "property1": {
                    "matchesPattern": "string"
                  },
                  "property2": {
                    "matchesPattern": "string"
                  }
                },
                "resource": "string",
                "resourceType": "string",
                "sourcePath": "string",
                "sourceResource": "string",
                "value": null,
                "valueMatcher": {
                  "matchesPattern": "string"
                }
              }
            ]
          }
        ],
        "overview": {
          "property1": null,
          "property2": null
        }
      },
      "description": "string",
      "etag": "string",
      "lastRefreshTime": "string",
      "name": "string",
      "primaryImpact": {
        "category": "CATEGORY_UNSPECIFIED",
        "costProjection": {
          "cost": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "duration": "string"
        },
        "reliabilityProjection": {
          "details": {
            "property1": null,
            "property2": null
          },
          "risks": [
            "RISK_TYPE_UNSPECIFIED"
          ]
        },
        "securityProjection": {
          "details": {
            "property1": null,
            "property2": null
          }
        },
        "sustainabilityProjection": {
          "duration": "string",
          "kgCO2e": 0
        }
      },
      "priority": "PRIORITY_UNSPECIFIED",
      "recommenderSubtype": "string",
      "stateInfo": {
        "state": "STATE_UNSPECIFIED",
        "stateMetadata": {
          "property1": "string",
          "property2": "string"
        }
      },
      "xorGroupId": "string"
    }
  ]
}
```

<h3 id="recommenderprojectslocationsrecommendersrecommendationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRecommenderV1beta1ListRecommendationsResponse](#schemagooglecloudrecommenderv1beta1listrecommendationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudRecommenderV1beta1CostProjection">GoogleCloudRecommenderV1beta1CostProjection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1costprojection"></a>
<a id="schema_GoogleCloudRecommenderV1beta1CostProjection"></a>
<a id="tocSgooglecloudrecommenderv1beta1costprojection"></a>
<a id="tocsgooglecloudrecommenderv1beta1costprojection"></a>

```json
{
  "cost": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "duration": "string"
}
```

Contains metadata about how much money a recommendation can save or incur.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|An approximate projection on amount saved or amount incurred. Negative cost units indicate cost savings and positive cost units indicate increase. See google.type.Money documentation for positive/negative units. A user's permissions may affect whether the cost is computed using list prices or custom contract prices.|
|duration|string(google-duration)|false|none|Duration for which this cost applies.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1Impact">GoogleCloudRecommenderV1beta1Impact</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1impact"></a>
<a id="schema_GoogleCloudRecommenderV1beta1Impact"></a>
<a id="tocSgooglecloudrecommenderv1beta1impact"></a>
<a id="tocsgooglecloudrecommenderv1beta1impact"></a>

```json
{
  "category": "CATEGORY_UNSPECIFIED",
  "costProjection": {
    "cost": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "duration": "string"
  },
  "reliabilityProjection": {
    "details": {
      "property1": null,
      "property2": null
    },
    "risks": [
      "RISK_TYPE_UNSPECIFIED"
    ]
  },
  "securityProjection": {
    "details": {
      "property1": null,
      "property2": null
    }
  },
  "sustainabilityProjection": {
    "duration": "string",
    "kgCO2e": 0
  }
}
```

Contains the impact a recommendation can have for a given category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Category that is being targeted.|
|costProjection|[GoogleCloudRecommenderV1beta1CostProjection](#schemagooglecloudrecommenderv1beta1costprojection)|false|none|Use with CategoryType.COST|
|reliabilityProjection|[GoogleCloudRecommenderV1beta1ReliabilityProjection](#schemagooglecloudrecommenderv1beta1reliabilityprojection)|false|none|Use with CategoryType.RELIABILITY|
|securityProjection|[GoogleCloudRecommenderV1beta1SecurityProjection](#schemagooglecloudrecommenderv1beta1securityprojection)|false|none|Use with CategoryType.SECURITY|
|sustainabilityProjection|[GoogleCloudRecommenderV1beta1SustainabilityProjection](#schemagooglecloudrecommenderv1beta1sustainabilityprojection)|false|none|Use with CategoryType.SUSTAINABILITY|

#### Enumerated Values

|Property|Value|
|---|---|
|category|CATEGORY_UNSPECIFIED|
|category|COST|
|category|SECURITY|
|category|PERFORMANCE|
|category|MANAGEABILITY|
|category|SUSTAINABILITY|
|category|RELIABILITY|

<h2 id="tocS_GoogleCloudRecommenderV1beta1Insight">GoogleCloudRecommenderV1beta1Insight</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1insight"></a>
<a id="schema_GoogleCloudRecommenderV1beta1Insight"></a>
<a id="tocSgooglecloudrecommenderv1beta1insight"></a>
<a id="tocsgooglecloudrecommenderv1beta1insight"></a>

```json
{
  "associatedRecommendations": [
    {
      "recommendation": "string"
    }
  ],
  "category": "CATEGORY_UNSPECIFIED",
  "content": {
    "property1": null,
    "property2": null
  },
  "description": "string",
  "etag": "string",
  "insightSubtype": "string",
  "lastRefreshTime": "string",
  "name": "string",
  "observationPeriod": "string",
  "severity": "SEVERITY_UNSPECIFIED",
  "stateInfo": {
    "state": "STATE_UNSPECIFIED",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "targetResources": [
    "string"
  ]
}
```

An insight along with the information used to derive the insight. The insight may have associated recommendations as well.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedRecommendations|[[GoogleCloudRecommenderV1beta1InsightRecommendationReference](#schemagooglecloudrecommenderv1beta1insightrecommendationreference)]|false|none|Recommendations derived from this insight.|
|category|string|false|none|Category being targeted by the insight.|
|content|object|false|none|A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"|
|description|string|false|none|Free-form human readable summary in English. The maximum length is 500 characters.|
|etag|string|false|none|Fingerprint of the Insight. Provides optimistic locking when updating states.|
|insightSubtype|string|false|none|Insight subtype. Insight content schema will be stable for a given subtype.|
|lastRefreshTime|string(google-datetime)|false|none|Timestamp of the latest data used to generate the insight.|
|name|string|false|none|Name of the insight.|
|observationPeriod|string(google-duration)|false|none|Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).|
|severity|string|false|none|Insight's severity.|
|stateInfo|[GoogleCloudRecommenderV1beta1InsightStateInfo](#schemagooglecloudrecommenderv1beta1insightstateinfo)|false|none|Information state and metadata.|
|targetResources|[string]|false|none|Fully qualified resource names that this insight is targeting.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|CATEGORY_UNSPECIFIED|
|category|COST|
|category|SECURITY|
|category|PERFORMANCE|
|category|MANAGEABILITY|
|category|SUSTAINABILITY|
|category|RELIABILITY|
|severity|SEVERITY_UNSPECIFIED|
|severity|LOW|
|severity|MEDIUM|
|severity|HIGH|
|severity|CRITICAL|

<h2 id="tocS_GoogleCloudRecommenderV1beta1InsightRecommendationReference">GoogleCloudRecommenderV1beta1InsightRecommendationReference</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1insightrecommendationreference"></a>
<a id="schema_GoogleCloudRecommenderV1beta1InsightRecommendationReference"></a>
<a id="tocSgooglecloudrecommenderv1beta1insightrecommendationreference"></a>
<a id="tocsgooglecloudrecommenderv1beta1insightrecommendationreference"></a>

```json
{
  "recommendation": "string"
}
```

Reference to an associated recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendation|string|false|none|Recommendation resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID]|

<h2 id="tocS_GoogleCloudRecommenderV1beta1InsightStateInfo">GoogleCloudRecommenderV1beta1InsightStateInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1insightstateinfo"></a>
<a id="schema_GoogleCloudRecommenderV1beta1InsightStateInfo"></a>
<a id="tocSgooglecloudrecommenderv1beta1insightstateinfo"></a>
<a id="tocsgooglecloudrecommenderv1beta1insightstateinfo"></a>

```json
{
  "state": "STATE_UNSPECIFIED",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information related to insight state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|Insight state.|
|stateMetadata|object|false|none|A map of metadata for the state, provided by user or automations systems.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|ACCEPTED|
|state|DISMISSED|

<h2 id="tocS_GoogleCloudRecommenderV1beta1InsightTypeConfig">GoogleCloudRecommenderV1beta1InsightTypeConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1insighttypeconfig"></a>
<a id="schema_GoogleCloudRecommenderV1beta1InsightTypeConfig"></a>
<a id="tocSgooglecloudrecommenderv1beta1insighttypeconfig"></a>
<a id="tocsgooglecloudrecommenderv1beta1insighttypeconfig"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "etag": "string",
  "insightTypeGenerationConfig": {
    "params": {
      "property1": null,
      "property2": null
    }
  },
  "name": "string",
  "revisionId": "string",
  "updateTime": "string"
}
```

Configuration for an InsightType.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.|
|displayName|string|false|none|A user-settable field to provide a human-readable name to be used in user interfaces.|
|etag|string|false|none|Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating.|
|insightTypeGenerationConfig|[GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig](#schemagooglecloudrecommenderv1beta1insighttypegenerationconfig)|false|none|InsightTypeGenerationConfig which configures the generation of insights for this insight type.|
|name|string|false|none|Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config|
|revisionId|string|false|read-only|Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.|
|updateTime|string(google-datetime)|false|none|Last time when the config was updated.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig">GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1insighttypegenerationconfig"></a>
<a id="schema_GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig"></a>
<a id="tocSgooglecloudrecommenderv1beta1insighttypegenerationconfig"></a>
<a id="tocsgooglecloudrecommenderv1beta1insighttypegenerationconfig"></a>

```json
{
  "params": {
    "property1": null,
    "property2": null
  }
}
```

A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|Parameters for this InsightTypeGenerationConfig. These configs can be used by or are applied to all subtypes.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1ListInsightsResponse">GoogleCloudRecommenderV1beta1ListInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1listinsightsresponse"></a>
<a id="schema_GoogleCloudRecommenderV1beta1ListInsightsResponse"></a>
<a id="tocSgooglecloudrecommenderv1beta1listinsightsresponse"></a>
<a id="tocsgooglecloudrecommenderv1beta1listinsightsresponse"></a>

```json
{
  "insights": [
    {
      "associatedRecommendations": [
        {
          "recommendation": "string"
        }
      ],
      "category": "CATEGORY_UNSPECIFIED",
      "content": {
        "property1": null,
        "property2": null
      },
      "description": "string",
      "etag": "string",
      "insightSubtype": "string",
      "lastRefreshTime": "string",
      "name": "string",
      "observationPeriod": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "stateInfo": {
        "state": "STATE_UNSPECIFIED",
        "stateMetadata": {
          "property1": "string",
          "property2": "string"
        }
      },
      "targetResources": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response to the `ListInsights` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insights|[[GoogleCloudRecommenderV1beta1Insight](#schemagooglecloudrecommenderv1beta1insight)]|false|none|The set of insights for the `parent` resource.|
|nextPageToken|string|false|none|A token that can be used to request the next page of results. This field is empty if there are no additional results.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1ListRecommendationsResponse">GoogleCloudRecommenderV1beta1ListRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1listrecommendationsresponse"></a>
<a id="schema_GoogleCloudRecommenderV1beta1ListRecommendationsResponse"></a>
<a id="tocSgooglecloudrecommenderv1beta1listrecommendationsresponse"></a>
<a id="tocsgooglecloudrecommenderv1beta1listrecommendationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "recommendations": [
    {
      "additionalImpact": [
        {
          "category": "CATEGORY_UNSPECIFIED",
          "costProjection": {
            "cost": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "duration": "string"
          },
          "reliabilityProjection": {
            "details": {
              "property1": null,
              "property2": null
            },
            "risks": [
              "RISK_TYPE_UNSPECIFIED"
            ]
          },
          "securityProjection": {
            "details": {
              "property1": null,
              "property2": null
            }
          },
          "sustainabilityProjection": {
            "duration": "string",
            "kgCO2e": 0
          }
        }
      ],
      "associatedInsights": [
        {
          "insight": "string"
        }
      ],
      "content": {
        "operationGroups": [
          {
            "operations": [
              {
                "action": "string",
                "path": "string",
                "pathFilters": {
                  "property1": null,
                  "property2": null
                },
                "pathValueMatchers": {
                  "property1": {
                    "matchesPattern": "string"
                  },
                  "property2": {
                    "matchesPattern": "string"
                  }
                },
                "resource": "string",
                "resourceType": "string",
                "sourcePath": "string",
                "sourceResource": "string",
                "value": null,
                "valueMatcher": {
                  "matchesPattern": "string"
                }
              }
            ]
          }
        ],
        "overview": {
          "property1": null,
          "property2": null
        }
      },
      "description": "string",
      "etag": "string",
      "lastRefreshTime": "string",
      "name": "string",
      "primaryImpact": {
        "category": "CATEGORY_UNSPECIFIED",
        "costProjection": {
          "cost": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "duration": "string"
        },
        "reliabilityProjection": {
          "details": {
            "property1": null,
            "property2": null
          },
          "risks": [
            "RISK_TYPE_UNSPECIFIED"
          ]
        },
        "securityProjection": {
          "details": {
            "property1": null,
            "property2": null
          }
        },
        "sustainabilityProjection": {
          "duration": "string",
          "kgCO2e": 0
        }
      },
      "priority": "PRIORITY_UNSPECIFIED",
      "recommenderSubtype": "string",
      "stateInfo": {
        "state": "STATE_UNSPECIFIED",
        "stateMetadata": {
          "property1": "string",
          "property2": "string"
        }
      },
      "xorGroupId": "string"
    }
  ]
}
```

Response to the `ListRecommendations` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be used to request the next page of results. This field is empty if there are no additional results.|
|recommendations|[[GoogleCloudRecommenderV1beta1Recommendation](#schemagooglecloudrecommenderv1beta1recommendation)]|false|none|The set of recommendations for the `parent` resource.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest">GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1markinsightacceptedrequest"></a>
<a id="schema_GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest"></a>
<a id="tocSgooglecloudrecommenderv1beta1markinsightacceptedrequest"></a>
<a id="tocsgooglecloudrecommenderv1beta1markinsightacceptedrequest"></a>

```json
{
  "etag": "string",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request for the `MarkInsightAccepted` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Required. Fingerprint of the Insight. Provides optimistic locking.|
|stateMetadata|object|false|none|Optional. State properties user wish to include with this state. Full replace of the current state_metadata.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest">GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1markrecommendationclaimedrequest"></a>
<a id="schema_GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest"></a>
<a id="tocSgooglecloudrecommenderv1beta1markrecommendationclaimedrequest"></a>
<a id="tocsgooglecloudrecommenderv1beta1markrecommendationclaimedrequest"></a>

```json
{
  "etag": "string",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request for the `MarkRecommendationClaimed` Method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Required. Fingerprint of the Recommendation. Provides optimistic locking.|
|stateMetadata|object|false|none|State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest">GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1markrecommendationdismissedrequest"></a>
<a id="schema_GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest"></a>
<a id="tocSgooglecloudrecommenderv1beta1markrecommendationdismissedrequest"></a>
<a id="tocsgooglecloudrecommenderv1beta1markrecommendationdismissedrequest"></a>

```json
{
  "etag": "string"
}
```

Request for the `MarkRecommendationDismissed` Method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Fingerprint of the Recommendation. Provides optimistic locking.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest">GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1markrecommendationfailedrequest"></a>
<a id="schema_GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest"></a>
<a id="tocSgooglecloudrecommenderv1beta1markrecommendationfailedrequest"></a>
<a id="tocsgooglecloudrecommenderv1beta1markrecommendationfailedrequest"></a>

```json
{
  "etag": "string",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request for the `MarkRecommendationFailed` Method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Required. Fingerprint of the Recommendation. Provides optimistic locking.|
|stateMetadata|object|false|none|State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest">GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1markrecommendationsucceededrequest"></a>
<a id="schema_GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest"></a>
<a id="tocSgooglecloudrecommenderv1beta1markrecommendationsucceededrequest"></a>
<a id="tocsgooglecloudrecommenderv1beta1markrecommendationsucceededrequest"></a>

```json
{
  "etag": "string",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request for the `MarkRecommendationSucceeded` Method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Required. Fingerprint of the Recommendation. Provides optimistic locking.|
|stateMetadata|object|false|none|State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1Operation">GoogleCloudRecommenderV1beta1Operation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1operation"></a>
<a id="schema_GoogleCloudRecommenderV1beta1Operation"></a>
<a id="tocSgooglecloudrecommenderv1beta1operation"></a>
<a id="tocsgooglecloudrecommenderv1beta1operation"></a>

```json
{
  "action": "string",
  "path": "string",
  "pathFilters": {
    "property1": null,
    "property2": null
  },
  "pathValueMatchers": {
    "property1": {
      "matchesPattern": "string"
    },
    "property2": {
      "matchesPattern": "string"
    }
  },
  "resource": "string",
  "resourceType": "string",
  "sourcePath": "string",
  "sourceResource": "string",
  "value": null,
  "valueMatcher": {
    "matchesPattern": "string"
  }
}
```

Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.|
|path|string|false|none|Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.|
|pathFilters|object|false|none|Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: ``` { "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 } ``` * Example: ``` { "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null } ``` * Example: ``` { "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] } ``` When both path_filters and path_value_matchers are set, an implicit AND must be performed.|
|pathValueMatchers|object|false|none|Similar to path_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed.|
|resource|string|false|none|Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.|
|resourceType|string|false|none|Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance|
|sourcePath|string|false|none|Can be set with action 'copy' or 'move' to indicate the source field within resource or source_resource, ignored if provided for other operation types.|
|sourceResource|string|false|none|Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source_resource = and resource_name = . This field is empty for all other values of `action`.|
|value|object|false|none|Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.|
|valueMatcher|[GoogleCloudRecommenderV1beta1ValueMatcher](#schemagooglecloudrecommenderv1beta1valuematcher)|false|none|Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1OperationGroup">GoogleCloudRecommenderV1beta1OperationGroup</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1operationgroup"></a>
<a id="schema_GoogleCloudRecommenderV1beta1OperationGroup"></a>
<a id="tocSgooglecloudrecommenderv1beta1operationgroup"></a>
<a id="tocsgooglecloudrecommenderv1beta1operationgroup"></a>

```json
{
  "operations": [
    {
      "action": "string",
      "path": "string",
      "pathFilters": {
        "property1": null,
        "property2": null
      },
      "pathValueMatchers": {
        "property1": {
          "matchesPattern": "string"
        },
        "property2": {
          "matchesPattern": "string"
        }
      },
      "resource": "string",
      "resourceType": "string",
      "sourcePath": "string",
      "sourceResource": "string",
      "value": null,
      "valueMatcher": {
        "matchesPattern": "string"
      }
    }
  ]
}
```

Group of operations that need to be performed atomically.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[GoogleCloudRecommenderV1beta1Operation](#schemagooglecloudrecommenderv1beta1operation)]|false|none|List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1Recommendation">GoogleCloudRecommenderV1beta1Recommendation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1recommendation"></a>
<a id="schema_GoogleCloudRecommenderV1beta1Recommendation"></a>
<a id="tocSgooglecloudrecommenderv1beta1recommendation"></a>
<a id="tocsgooglecloudrecommenderv1beta1recommendation"></a>

```json
{
  "additionalImpact": [
    {
      "category": "CATEGORY_UNSPECIFIED",
      "costProjection": {
        "cost": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "duration": "string"
      },
      "reliabilityProjection": {
        "details": {
          "property1": null,
          "property2": null
        },
        "risks": [
          "RISK_TYPE_UNSPECIFIED"
        ]
      },
      "securityProjection": {
        "details": {
          "property1": null,
          "property2": null
        }
      },
      "sustainabilityProjection": {
        "duration": "string",
        "kgCO2e": 0
      }
    }
  ],
  "associatedInsights": [
    {
      "insight": "string"
    }
  ],
  "content": {
    "operationGroups": [
      {
        "operations": [
          {
            "action": "string",
            "path": "string",
            "pathFilters": {
              "property1": null,
              "property2": null
            },
            "pathValueMatchers": {
              "property1": {
                "matchesPattern": "string"
              },
              "property2": {
                "matchesPattern": "string"
              }
            },
            "resource": "string",
            "resourceType": "string",
            "sourcePath": "string",
            "sourceResource": "string",
            "value": null,
            "valueMatcher": {
              "matchesPattern": "string"
            }
          }
        ]
      }
    ],
    "overview": {
      "property1": null,
      "property2": null
    }
  },
  "description": "string",
  "etag": "string",
  "lastRefreshTime": "string",
  "name": "string",
  "primaryImpact": {
    "category": "CATEGORY_UNSPECIFIED",
    "costProjection": {
      "cost": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "duration": "string"
    },
    "reliabilityProjection": {
      "details": {
        "property1": null,
        "property2": null
      },
      "risks": [
        "RISK_TYPE_UNSPECIFIED"
      ]
    },
    "securityProjection": {
      "details": {
        "property1": null,
        "property2": null
      }
    },
    "sustainabilityProjection": {
      "duration": "string",
      "kgCO2e": 0
    }
  },
  "priority": "PRIORITY_UNSPECIFIED",
  "recommenderSubtype": "string",
  "stateInfo": {
    "state": "STATE_UNSPECIFIED",
    "stateMetadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "xorGroupId": "string"
}
```

A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalImpact|[[GoogleCloudRecommenderV1beta1Impact](#schemagooglecloudrecommenderv1beta1impact)]|false|none|Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.|
|associatedInsights|[[GoogleCloudRecommenderV1beta1RecommendationInsightReference](#schemagooglecloudrecommenderv1beta1recommendationinsightreference)]|false|none|Insights that led to this recommendation.|
|content|[GoogleCloudRecommenderV1beta1RecommendationContent](#schemagooglecloudrecommenderv1beta1recommendationcontent)|false|none|Content of the recommendation describing recommended changes to resources.|
|description|string|false|none|Free-form human readable summary in English. The maximum length is 500 characters.|
|etag|string|false|none|Fingerprint of the Recommendation. Provides optimistic locking when updating states.|
|lastRefreshTime|string(google-datetime)|false|none|Last time this recommendation was refreshed by the system that created it in the first place.|
|name|string|false|none|Name of recommendation.|
|primaryImpact|[GoogleCloudRecommenderV1beta1Impact](#schemagooglecloudrecommenderv1beta1impact)|false|none|The primary impact that this recommendation can have while trying to optimize for one category.|
|priority|string|false|none|Recommendation's priority.|
|recommenderSubtype|string|false|none|Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"|
|stateInfo|[GoogleCloudRecommenderV1beta1RecommendationStateInfo](#schemagooglecloudrecommenderv1beta1recommendationstateinfo)|false|none|Information for state. Contains state and metadata.|
|xorGroupId|string|false|none|Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|PRIORITY_UNSPECIFIED|
|priority|P4|
|priority|P3|
|priority|P2|
|priority|P1|

<h2 id="tocS_GoogleCloudRecommenderV1beta1RecommendationContent">GoogleCloudRecommenderV1beta1RecommendationContent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1recommendationcontent"></a>
<a id="schema_GoogleCloudRecommenderV1beta1RecommendationContent"></a>
<a id="tocSgooglecloudrecommenderv1beta1recommendationcontent"></a>
<a id="tocsgooglecloudrecommenderv1beta1recommendationcontent"></a>

```json
{
  "operationGroups": [
    {
      "operations": [
        {
          "action": "string",
          "path": "string",
          "pathFilters": {
            "property1": null,
            "property2": null
          },
          "pathValueMatchers": {
            "property1": {
              "matchesPattern": "string"
            },
            "property2": {
              "matchesPattern": "string"
            }
          },
          "resource": "string",
          "resourceType": "string",
          "sourcePath": "string",
          "sourceResource": "string",
          "value": null,
          "valueMatcher": {
            "matchesPattern": "string"
          }
        }
      ]
    }
  ],
  "overview": {
    "property1": null,
    "property2": null
  }
}
```

Contains what resources are changing and how they are changing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationGroups|[[GoogleCloudRecommenderV1beta1OperationGroup](#schemagooglecloudrecommenderv1beta1operationgroup)]|false|none|Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order.|
|overview|object|false|none|Condensed overview information about the recommendation.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1RecommendationInsightReference">GoogleCloudRecommenderV1beta1RecommendationInsightReference</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1recommendationinsightreference"></a>
<a id="schema_GoogleCloudRecommenderV1beta1RecommendationInsightReference"></a>
<a id="tocSgooglecloudrecommenderv1beta1recommendationinsightreference"></a>
<a id="tocsgooglecloudrecommenderv1beta1recommendationinsightreference"></a>

```json
{
  "insight": "string"
}
```

Reference to an associated insight.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insight|string|false|none|Insight resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID]|

<h2 id="tocS_GoogleCloudRecommenderV1beta1RecommendationStateInfo">GoogleCloudRecommenderV1beta1RecommendationStateInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1recommendationstateinfo"></a>
<a id="schema_GoogleCloudRecommenderV1beta1RecommendationStateInfo"></a>
<a id="tocSgooglecloudrecommenderv1beta1recommendationstateinfo"></a>
<a id="tocsgooglecloudrecommenderv1beta1recommendationstateinfo"></a>

```json
{
  "state": "STATE_UNSPECIFIED",
  "stateMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information for state. Contains state and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED.|
|stateMetadata|object|false|none|A map of metadata for the state, provided by user or automations systems.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|CLAIMED|
|state|SUCCEEDED|
|state|FAILED|
|state|DISMISSED|

<h2 id="tocS_GoogleCloudRecommenderV1beta1RecommenderConfig">GoogleCloudRecommenderV1beta1RecommenderConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1recommenderconfig"></a>
<a id="schema_GoogleCloudRecommenderV1beta1RecommenderConfig"></a>
<a id="tocSgooglecloudrecommenderv1beta1recommenderconfig"></a>
<a id="tocsgooglecloudrecommenderv1beta1recommenderconfig"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "recommenderGenerationConfig": {
    "params": {
      "property1": null,
      "property2": null
    }
  },
  "revisionId": "string",
  "updateTime": "string"
}
```

Configuration for a Recommender.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.|
|displayName|string|false|none|A user-settable field to provide a human-readable name to be used in user interfaces.|
|etag|string|false|none|Fingerprint of the RecommenderConfig. Provides optimistic locking when updating.|
|name|string|false|none|Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config|
|recommenderGenerationConfig|[GoogleCloudRecommenderV1beta1RecommenderGenerationConfig](#schemagooglecloudrecommenderv1beta1recommendergenerationconfig)|false|none|RecommenderGenerationConfig which configures the Generation of recommendations for this recommender.|
|revisionId|string|false|read-only|Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.|
|updateTime|string(google-datetime)|false|none|Last time when the config was updated.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1RecommenderGenerationConfig">GoogleCloudRecommenderV1beta1RecommenderGenerationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1recommendergenerationconfig"></a>
<a id="schema_GoogleCloudRecommenderV1beta1RecommenderGenerationConfig"></a>
<a id="tocSgooglecloudrecommenderv1beta1recommendergenerationconfig"></a>
<a id="tocsgooglecloudrecommenderv1beta1recommendergenerationconfig"></a>

```json
{
  "params": {
    "property1": null,
    "property2": null
  }
}
```

A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|Parameters for this RecommenderGenerationConfig. These configs can be used by or are applied to all subtypes.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1ReliabilityProjection">GoogleCloudRecommenderV1beta1ReliabilityProjection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1reliabilityprojection"></a>
<a id="schema_GoogleCloudRecommenderV1beta1ReliabilityProjection"></a>
<a id="tocSgooglecloudrecommenderv1beta1reliabilityprojection"></a>
<a id="tocsgooglecloudrecommenderv1beta1reliabilityprojection"></a>

```json
{
  "details": {
    "property1": null,
    "property2": null
  },
  "risks": [
    "RISK_TYPE_UNSPECIFIED"
  ]
}
```

Contains information on the impact of a reliability recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|Per-recommender projection.|
|risks|[string]|false|none|Reliability risks mitigated by this recommendation.|

#### Enumerated Values

|Property|Value|
|---|---|
|risks|RISK_TYPE_UNSPECIFIED|
|risks|SERVICE_DISRUPTION|
|risks|DATA_LOSS|
|risks|ACCESS_DENY|

<h2 id="tocS_GoogleCloudRecommenderV1beta1SecurityProjection">GoogleCloudRecommenderV1beta1SecurityProjection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1securityprojection"></a>
<a id="schema_GoogleCloudRecommenderV1beta1SecurityProjection"></a>
<a id="tocSgooglecloudrecommenderv1beta1securityprojection"></a>
<a id="tocsgooglecloudrecommenderv1beta1securityprojection"></a>

```json
{
  "details": {
    "property1": null,
    "property2": null
  }
}
```

Contains various ways of describing the impact on Security.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|This field can be used by the recommender to define details specific to security impact.|

<h2 id="tocS_GoogleCloudRecommenderV1beta1SustainabilityProjection">GoogleCloudRecommenderV1beta1SustainabilityProjection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1sustainabilityprojection"></a>
<a id="schema_GoogleCloudRecommenderV1beta1SustainabilityProjection"></a>
<a id="tocSgooglecloudrecommenderv1beta1sustainabilityprojection"></a>
<a id="tocsgooglecloudrecommenderv1beta1sustainabilityprojection"></a>

```json
{
  "duration": "string",
  "kgCO2e": 0
}
```

Contains metadata about how much sustainability a recommendation can save or incur.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string(google-duration)|false|none|Duration for which this sustanability applies.|
|kgCO2e|number(double)|false|none|Carbon Footprint generated in kg of CO2 equivalent. Chose kg_c_o2e so that the name renders correctly in camelCase (kgCO2e).|

<h2 id="tocS_GoogleCloudRecommenderV1beta1ValueMatcher">GoogleCloudRecommenderV1beta1ValueMatcher</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudrecommenderv1beta1valuematcher"></a>
<a id="schema_GoogleCloudRecommenderV1beta1ValueMatcher"></a>
<a id="tocSgooglecloudrecommenderv1beta1valuematcher"></a>
<a id="tocsgooglecloudrecommenderv1beta1valuematcher"></a>

```json
{
  "matchesPattern": "string"
}
```

Contains various matching options for values for a GCP resource field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchesPattern|string|false|none|To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch|

<h2 id="tocS_GoogleTypeMoney">GoogleTypeMoney</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypemoney"></a>
<a id="schema_GoogleTypeMoney"></a>
<a id="tocSgoogletypemoney"></a>
<a id="tocsgoogletypemoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|
