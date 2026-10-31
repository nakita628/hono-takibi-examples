<h1 id="service-consumer-management-api">Service Consumer Management API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages the service consumers of a Service Infrastructure service.

Base URLs:

* <a href="https://serviceconsumermanagement.googleapis.com/">https://serviceconsumermanagement.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/service-consumer-management/docs/overview">External documentation</a>

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

<h1 id="service-consumer-management-api-services">services</h1>

## serviceconsumermanagement.services.consumerQuotaMetrics.limits.get

<a id="opIdserviceconsumermanagement.services.consumerQuotaMetrics.limits.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Retrieves a summary of quota information for a specific quota limit.

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`|
|view|query|string|false|Specifies the level of detail for quota information in the response.|
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
|view|QUOTA_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "isPrecise": true,
  "metric": "string",
  "name": "string",
  "quotaBuckets": [
    {
      "adminOverride": {
        "adminOverrideAncestor": "string",
        "dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "metric": "string",
        "name": "string",
        "overrideValue": "string",
        "unit": "string"
      },
      "consumerOverride": {
        "adminOverrideAncestor": "string",
        "dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "metric": "string",
        "name": "string",
        "overrideValue": "string",
        "unit": "string"
      },
      "defaultLimit": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "effectiveLimit": "string",
      "producerOverride": {
        "adminOverrideAncestor": "string",
        "dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "metric": "string",
        "name": "string",
        "overrideValue": "string",
        "unit": "string"
      }
    }
  ],
  "supportedLocations": [
    "string"
  ],
  "unit": "string"
}
```

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[V1Beta1ConsumerQuotaLimit](#schemav1beta1consumerquotalimit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## serviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.delete

<a id="opIdserviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a producer override.

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the override to delete. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`|
|force|query|boolean|false|Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.|
|forceOnly|query|[string]|false|The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.|
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
|forceOnly|QUOTA_SAFETY_CHECK_UNSPECIFIED|
|forceOnly|LIMIT_DECREASE_BELOW_USAGE|
|forceOnly|LIMIT_DECREASE_PERCENTAGE_TOO_HIGH|
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

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## serviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.patch

<a id="opIdserviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminOverrideAncestor": "string",
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "metric": "string",
    "name": "string",
    "overrideValue": "string",
    "unit": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates a producer override.

> Body parameter

```json
{
  "adminOverrideAncestor": "string",
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "metric": "string",
  "name": "string",
  "overrideValue": "string",
  "unit": "string"
}
```

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the override to update. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`|
|force|query|boolean|false|Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.|
|forceOnly|query|[string]|false|The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.|
|updateMask|query|string|false|Update only the specified fields. If unset, all modifiable fields will be updated.|
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
|body|body|[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)|false|none|
|» adminOverrideAncestor|body|string|false|The resource name of the ancestor that requested the override. For example: "organizations/12345" or "folders/67890". Used by admin overrides only.|
|» dimensions|body|object|false| If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota overrides that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map.|
|» » **additionalProperties**|body|string|false|none|
|» metric|body|string|false|The name of the metric to which this override applies. An example name would be: `compute.googleapis.com/cpus`|
|» name|body|string|false|The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`|
|» overrideValue|body|string(int64)|false|The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).|
|» unit|body|string|false|The limit unit of the limit to which this override applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|forceOnly|QUOTA_SAFETY_CHECK_UNSPECIFIED|
|forceOnly|LIMIT_DECREASE_BELOW_USAGE|
|forceOnly|LIMIT_DECREASE_PERCENTAGE_TOO_HIGH|
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

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## serviceconsumermanagement.services.consumerQuotaMetrics.list

<a id="opIdserviceconsumermanagement.services.consumerQuotaMetrics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/consumerQuotaMetrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/consumerQuotaMetrics`

Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

<h3 id="serviceconsumermanagementservicesconsumerquotametricslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent of the quotas resource. An example parent would be: `services/serviceconsumermanagement.googleapis.com/projects/123`|
|pageSize|query|integer|false|Requested size of the next page of data.|
|pageToken|query|string|false|Token identifying which result to start with; returned by a previous list call.|
|view|query|string|false|Specifies the level of detail for quota information in the response.|
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
|view|QUOTA_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "metrics": [
    {
      "consumerQuotaLimits": [
        {
          "isPrecise": true,
          "metric": "string",
          "name": "string",
          "quotaBuckets": [
            {
              "adminOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              },
              "consumerOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              },
              "defaultLimit": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "effectiveLimit": "string",
              "producerOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              }
            }
          ],
          "supportedLocations": [
            "string"
          ],
          "unit": "string"
        }
      ],
      "descendantConsumerQuotaLimits": [
        {
          "isPrecise": true,
          "metric": "string",
          "name": "string",
          "quotaBuckets": [
            {
              "adminOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              },
              "consumerOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              },
              "defaultLimit": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "effectiveLimit": "string",
              "producerOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              }
            }
          ],
          "supportedLocations": [
            "string"
          ],
          "unit": "string"
        }
      ],
      "displayName": "string",
      "metric": "string",
      "name": "string",
      "unit": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="serviceconsumermanagementservicesconsumerquotametricslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[V1Beta1ListConsumerQuotaMetricsResponse](#schemav1beta1listconsumerquotametricsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## serviceconsumermanagement.services.consumerQuotaMetrics.importProducerOverrides

<a id="opIdserviceconsumermanagement.services.consumerQuotaMetrics.importProducerOverrides"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/consumerQuotaMetrics:importProducerOverrides \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "force": true,
    "forceOnly": [
      "QUOTA_SAFETY_CHECK_UNSPECIFIED"
    ],
    "inlineSource": {
      "overrides": [
        {
          "adminOverrideAncestor": "string",
          "dimensions": {
            "property1": "string",
            "property2": "string"
          },
          "metric": "string",
          "name": "string",
          "overrideValue": "string",
          "unit": "string"
        }
      ]
    }
  }'
```

`POST /v1beta1/{parent}/consumerQuotaMetrics:importProducerOverrides`

Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

> Body parameter

```json
{
  "force": true,
  "forceOnly": [
    "QUOTA_SAFETY_CHECK_UNSPECIFIED"
  ],
  "inlineSource": {
    "overrides": [
      {
        "adminOverrideAncestor": "string",
        "dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "metric": "string",
        "name": "string",
        "overrideValue": "string",
        "unit": "string"
      }
    ]
  }
}
```

<h3 id="serviceconsumermanagementservicesconsumerquotametricsimportproduceroverrides-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the consumer. An example name would be: `services/compute.googleapis.com/projects/123`|
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
|body|body|[V1Beta1ImportProducerOverridesRequest](#schemav1beta1importproduceroverridesrequest)|false|none|
|» force|body|boolean|false|Whether to force the creation of the quota overrides. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.|
|» forceOnly|body|[string]|false|The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.|
|» inlineSource|body|[V1Beta1OverrideInlineSource](#schemav1beta1overrideinlinesource)|false|The import data is specified in the request message itself|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» forceOnly|QUOTA_SAFETY_CHECK_UNSPECIFIED|
|» forceOnly|LIMIT_DECREASE_BELOW_USAGE|
|» forceOnly|LIMIT_DECREASE_PERCENTAGE_TOO_HIGH|

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

<h3 id="serviceconsumermanagementservicesconsumerquotametricsimportproduceroverrides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## serviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.list

<a id="opIdserviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/producerOverrides \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/producerOverrides`

Lists all producer overrides on this limit.

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverrideslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`|
|pageSize|query|integer|false|Requested size of the next page of data.|
|pageToken|query|string|false|Token identifying which result to start with; returned by a previous list call.|
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
  "overrides": [
    {
      "adminOverrideAncestor": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "metric": "string",
      "name": "string",
      "overrideValue": "string",
      "unit": "string"
    }
  ]
}
```

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverrideslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[V1Beta1ListProducerOverridesResponse](#schemav1beta1listproduceroverridesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## serviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.create

<a id="opIdserviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/producerOverrides \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminOverrideAncestor": "string",
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "metric": "string",
    "name": "string",
    "overrideValue": "string",
    "unit": "string"
  }'
```

`POST /v1beta1/{parent}/producerOverrides`

Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.

> Body parameter

```json
{
  "adminOverrideAncestor": "string",
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "metric": "string",
  "name": "string",
  "overrideValue": "string",
  "unit": "string"
}
```

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`|
|force|query|boolean|false|Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.|
|forceOnly|query|[string]|false|The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.|
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
|body|body|[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)|false|none|
|» adminOverrideAncestor|body|string|false|The resource name of the ancestor that requested the override. For example: "organizations/12345" or "folders/67890". Used by admin overrides only.|
|» dimensions|body|object|false| If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota overrides that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map.|
|» » **additionalProperties**|body|string|false|none|
|» metric|body|string|false|The name of the metric to which this override applies. An example name would be: `compute.googleapis.com/cpus`|
|» name|body|string|false|The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`|
|» overrideValue|body|string(int64)|false|The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).|
|» unit|body|string|false|The limit unit of the limit to which this override applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|forceOnly|QUOTA_SAFETY_CHECK_UNSPECIFIED|
|forceOnly|LIMIT_DECREASE_BELOW_USAGE|
|forceOnly|LIMIT_DECREASE_PERCENTAGE_TOO_HIGH|
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

<h3 id="serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Api">Api</h2>
<!-- backwards compatibility -->
<a id="schemaapi"></a>
<a id="schema_Api"></a>
<a id="tocSapi"></a>
<a id="tocsapi"></a>

```json
{
  "methods": [
    {
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "requestStreaming": true,
      "requestTypeUrl": "string",
      "responseStreaming": true,
      "responseTypeUrl": "string",
      "syntax": "SYNTAX_PROTO2"
    }
  ],
  "mixins": [
    {
      "name": "string",
      "root": "string"
    }
  ],
  "name": "string",
  "options": [
    {
      "name": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "sourceContext": {
    "fileName": "string"
  },
  "syntax": "SYNTAX_PROTO2",
  "version": "string"
}
```

Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methods|[[Method](#schemamethod)]|false|none|The methods of this interface, in unspecified order.|
|mixins|[[Mixin](#schemamixin)]|false|none|Included interfaces. See Mixin.|
|name|string|false|none|The fully qualified name of this interface, including package name followed by the interface's simple name.|
|options|[[Option](#schemaoption)]|false|none|Any metadata attached to the interface.|
|sourceContext|[SourceContext](#schemasourcecontext)|false|none|Source context for the protocol buffer service represented by this message.|
|syntax|string|false|none|The source syntax of the service.|
|version|string|false|none|A version string for this interface. If specified, must have the form `major-version.minor-version`, as in `1.10`. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here. The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan. The major version is also reflected in the package name of the interface, which must end in `v`, as in `google.feature.v1`. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces. |

#### Enumerated Values

|Property|Value|
|---|---|
|syntax|SYNTAX_PROTO2|
|syntax|SYNTAX_PROTO3|
|syntax|SYNTAX_EDITIONS|

<h2 id="tocS_AuthProvider">AuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemaauthprovider"></a>
<a id="schema_AuthProvider"></a>
<a id="tocSauthprovider"></a>
<a id="tocsauthprovider"></a>

```json
{
  "audiences": "string",
  "authorizationUrl": "string",
  "id": "string",
  "issuer": "string",
  "jwksUri": "string",
  "jwtLocations": [
    {
      "cookie": "string",
      "header": "string",
      "query": "string",
      "valuePrefix": "string"
    }
  ]
}
```

Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audiences|string|false|none|The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, JWTs with audiences: - "https://[service.name]/[google.protobuf.Api.name]" - "https://[service.name]/" will be accepted. For example, if no audiences are in the setting, LibraryService API will accept JWTs with the following audiences: - https://library-example.googleapis.com/google.example.library.v1.LibraryService - https://library-example.googleapis.com/ Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com|
|authorizationUrl|string|false|none|Redirect URL if JWT token is required but not present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec.|
|id|string|false|none|The unique identifier of the auth provider. It will be referred to by `AuthRequirement.provider_id`. Example: "bookstore_auth".|
|issuer|string|false|none|Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address. Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com|
|jwksUri|string|false|none|URL of the provider's public key set to validate signature of the JWT. See [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). Optional if the key set document: - can be retrieved from [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) of the issuer. - can be inferred from the email domain of the issuer (e.g. a Google service account). Example: https://www.googleapis.com/oauth2/v1/certs|
|jwtLocations|[[JwtLocation](#schemajwtlocation)]|false|none|Defines the locations to extract the JWT. For now it is only used by the Cloud Endpoints to store the OpenAPI extension [x-google-jwt-locations] (https://cloud.google.com/endpoints/docs/openapi/openapi-extensions#x-google-jwt-locations) JWT locations can be one of HTTP headers, URL query parameters or cookies. The rule is that the first match wins. If not specified, default to use following 3 locations: 1) Authorization: Bearer 2) x-goog-iap-jwt-assertion 3) access_token query parameter Default locations can be specified as followings: jwt_locations: - header: Authorization value_prefix: "Bearer " - header: x-goog-iap-jwt-assertion - query: access_token|

<h2 id="tocS_AuthRequirement">AuthRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaauthrequirement"></a>
<a id="schema_AuthRequirement"></a>
<a id="tocSauthrequirement"></a>
<a id="tocsauthrequirement"></a>

```json
{
  "audiences": "string",
  "providerId": "string"
}
```

User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audiences|string|false|none|NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components. The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience "https://Service_name/API_name" will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience "https://library-example.googleapis.com/google.example.library.v1.LibraryService". Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com|
|providerId|string|false|none|id from authentication provider. Example: provider_id: bookstore_auth|

<h2 id="tocS_Authentication">Authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_Authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
{
  "providers": [
    {
      "audiences": "string",
      "authorizationUrl": "string",
      "id": "string",
      "issuer": "string",
      "jwksUri": "string",
      "jwtLocations": [
        {
          "cookie": "string",
          "header": "string",
          "query": "string",
          "valuePrefix": "string"
        }
      ]
    }
  ],
  "rules": [
    {
      "allowWithoutCredential": true,
      "oauth": {
        "canonicalScopes": "string"
      },
      "requirements": [
        {
          "audiences": "string",
          "providerId": "string"
        }
      ],
      "selector": "string"
    }
  ]
}
```

`Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[AuthProvider](#schemaauthprovider)]|false|none|Defines a set of authentication providers that a service supports.|
|rules|[[AuthenticationRule](#schemaauthenticationrule)]|false|none|A list of authentication rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.|

<h2 id="tocS_AuthenticationRule">AuthenticationRule</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationrule"></a>
<a id="schema_AuthenticationRule"></a>
<a id="tocSauthenticationrule"></a>
<a id="tocsauthenticationrule"></a>

```json
{
  "allowWithoutCredential": true,
  "oauth": {
    "canonicalScopes": "string"
  },
  "requirements": [
    {
      "audiences": "string",
      "providerId": "string"
    }
  ],
  "selector": "string"
}
```

Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowWithoutCredential|boolean|false|none|If true, the service accepts API keys without any other credential. This flag only applies to HTTP and gRPC requests.|
|oauth|[OAuthRequirements](#schemaoauthrequirements)|false|none|The requirements for OAuth credentials.|
|requirements|[[AuthRequirement](#schemaauthrequirement)]|false|none|Requirements for additional authentication providers.|
|selector|string|false|none|Selects the methods to which this rule applies. Refer to selector for syntax details.|

<h2 id="tocS_Backend">Backend</h2>
<!-- backwards compatibility -->
<a id="schemabackend"></a>
<a id="schema_Backend"></a>
<a id="tocSbackend"></a>
<a id="tocsbackend"></a>

```json
{
  "rules": [
    {
      "address": "string",
      "deadline": 0,
      "disableAuth": true,
      "jwtAudience": "string",
      "minDeadline": 0,
      "operationDeadline": 0,
      "overridesByRequestProtocol": {
        "property1": {},
        "property2": {}
      },
      "pathTranslation": "PATH_TRANSLATION_UNSPECIFIED",
      "protocol": "string",
      "selector": "string"
    }
  ]
}
```

`Backend` defines the backend configuration for a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[BackendRule](#schemabackendrule)]|false|none|A list of API backend rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.|

<h2 id="tocS_BackendRule">BackendRule</h2>
<!-- backwards compatibility -->
<a id="schemabackendrule"></a>
<a id="schema_BackendRule"></a>
<a id="tocSbackendrule"></a>
<a id="tocsbackendrule"></a>

```json
{
  "address": "string",
  "deadline": 0,
  "disableAuth": true,
  "jwtAudience": "string",
  "minDeadline": 0,
  "operationDeadline": 0,
  "overridesByRequestProtocol": {
    "property1": {
      "address": "string",
      "deadline": 0,
      "disableAuth": true,
      "jwtAudience": "string",
      "minDeadline": 0,
      "operationDeadline": 0,
      "overridesByRequestProtocol": {
        "property1": {},
        "property2": {}
      },
      "pathTranslation": "PATH_TRANSLATION_UNSPECIFIED",
      "protocol": "string",
      "selector": "string"
    },
    "property2": {
      "address": "string",
      "deadline": 0,
      "disableAuth": true,
      "jwtAudience": "string",
      "minDeadline": 0,
      "operationDeadline": 0,
      "overridesByRequestProtocol": {
        "property1": {},
        "property2": {}
      },
      "pathTranslation": "PATH_TRANSLATION_UNSPECIFIED",
      "protocol": "string",
      "selector": "string"
    }
  },
  "pathTranslation": "PATH_TRANSLATION_UNSPECIFIED",
  "protocol": "string",
  "selector": "string"
}
```

A backend rule provides configuration for an individual API element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address of the API backend. The scheme is used to determine the backend protocol and security. The following schemes are accepted: SCHEME PROTOCOL SECURITY http:// HTTP None https:// HTTP TLS grpc:// gRPC None grpcs:// gRPC TLS It is recommended to explicitly include a scheme. Leaving out the scheme may cause constrasting behaviors across platforms. If the port is unspecified, the default is: - 80 for schemes without TLS - 443 for schemes with TLS For HTTP backends, use protocol to specify the protocol version.|
|deadline|number(double)|false|none|The number of seconds to wait for a response from a request. The default varies based on the request protocol and deployment environment.|
|disableAuth|boolean|false|none|When disable_auth is true, a JWT ID token won't be generated and the original "Authorization" HTTP header will be preserved. If the header is used to carry the original token and is expected by the backend, this field must be set to true to preserve the header.|
|jwtAudience|string|false|none|The JWT audience is used when generating a JWT ID token for the backend. This ID token will be added in the HTTP "authorization" header, and sent to the backend.|
|minDeadline|number(double)|false|none|Deprecated, do not use.|
|operationDeadline|number(double)|false|none|The number of seconds to wait for the completion of a long running operation. The default is no deadline.|
|overridesByRequestProtocol|object|false|none|The map between request protocol and the backend address.|
|pathTranslation|string|false|none|none|
|protocol|string|false|none|The protocol used for sending a request to the backend. The supported values are "http/1.1" and "h2". The default value is inferred from the scheme in the address field: SCHEME PROTOCOL http:// http/1.1 https:// http/1.1 grpc:// h2 grpcs:// h2 For secure HTTP backends (https://) that support HTTP/2, set this field to "h2" for improved performance. Configuring this field to non-default values is only supported for secure HTTP backends. This field will be ignored for all other backends. See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for more details on the supported values.|
|selector|string|false|none|Selects the methods to which this rule applies. Refer to selector for syntax details.|

#### Enumerated Values

|Property|Value|
|---|---|
|pathTranslation|PATH_TRANSLATION_UNSPECIFIED|
|pathTranslation|CONSTANT_ADDRESS|
|pathTranslation|APPEND_PATH_TO_ADDRESS|

<h2 id="tocS_Billing">Billing</h2>
<!-- backwards compatibility -->
<a id="schemabilling"></a>
<a id="schema_Billing"></a>
<a id="tocSbilling"></a>
<a id="tocsbilling"></a>

```json
{
  "consumerDestinations": [
    {
      "metrics": [
        "string"
      ],
      "monitoredResource": "string"
    }
  ]
}
```

Billing related configuration of the service. The following example shows how to configure monitored resources and metrics for billing, `consumer_destinations` is the only supported destination and the monitored resources need at least one label key `cloud.googleapis.com/location` to indicate the location of the billing usage, using different monitored resources between monitoring and billing is recommended so they can be evolved independently: monitored_resources: - type: library.googleapis.com/billing_branch labels: - key: cloud.googleapis.com/location description: | Predefined label to support billing location restriction. - key: city description: | Custom label to define the city where the library branch is located in. - key: name description: Custom label to define the name of the library branch. metrics: - name: library.googleapis.com/book/borrowed_count metric_kind: DELTA value_type: INT64 unit: "1" billing: consumer_destinations: - monitored_resource: library.googleapis.com/billing_branch metrics: - library.googleapis.com/book/borrowed_count

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerDestinations|[[BillingDestination](#schemabillingdestination)]|false|none|Billing configurations for sending metrics to the consumer project. There can be multiple consumer destinations per service, each one must have a different monitored resource type. A metric can be used in at most one consumer destination.|

<h2 id="tocS_BillingDestination">BillingDestination</h2>
<!-- backwards compatibility -->
<a id="schemabillingdestination"></a>
<a id="schema_BillingDestination"></a>
<a id="tocSbillingdestination"></a>
<a id="tocsbillingdestination"></a>

```json
{
  "metrics": [
    "string"
  ],
  "monitoredResource": "string"
}
```

Configuration of a specific billing destination (Currently only support bill against consumer project).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[string]|false|none|Names of the metrics to report to this billing destination. Each name must be defined in Service.metrics section.|
|monitoredResource|string|false|none|The monitored resource type. The type must be defined in Service.monitored_resources section.|

<h2 id="tocS_ClientLibrarySettings">ClientLibrarySettings</h2>
<!-- backwards compatibility -->
<a id="schemaclientlibrarysettings"></a>
<a id="schema_ClientLibrarySettings"></a>
<a id="tocSclientlibrarysettings"></a>
<a id="tocsclientlibrarysettings"></a>

```json
{
  "cppSettings": {
    "common": {
      "destinations": [
        "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
      ],
      "referenceDocsUri": "string"
    }
  },
  "dotnetSettings": {
    "common": {
      "destinations": [
        "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
      ],
      "referenceDocsUri": "string"
    },
    "forcedNamespaceAliases": [
      "string"
    ],
    "handwrittenSignatures": [
      "string"
    ],
    "ignoredResources": [
      "string"
    ],
    "renamedResources": {
      "property1": "string",
      "property2": "string"
    },
    "renamedServices": {
      "property1": "string",
      "property2": "string"
    }
  },
  "goSettings": {
    "common": {
      "destinations": [
        "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
      ],
      "referenceDocsUri": "string"
    }
  },
  "javaSettings": {
    "common": {
      "destinations": [
        "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
      ],
      "referenceDocsUri": "string"
    },
    "libraryPackage": "string",
    "serviceClassNames": {
      "property1": "string",
      "property2": "string"
    }
  },
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "nodeSettings": {
    "common": {
      "destinations": [
        "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
      ],
      "referenceDocsUri": "string"
    }
  },
  "phpSettings": {
    "common": {
      "destinations": [
        "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
      ],
      "referenceDocsUri": "string"
    }
  },
  "pythonSettings": {
    "common": {
      "destinations": [
        "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
      ],
      "referenceDocsUri": "string"
    }
  },
  "restNumericEnums": true,
  "rubySettings": {
    "common": {
      "destinations": [
        "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
      ],
      "referenceDocsUri": "string"
    }
  },
  "version": "string"
}
```

Details about how and where to publish client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cppSettings|[CppSettings](#schemacppsettings)|false|none|Settings for C++ client libraries.|
|dotnetSettings|[DotnetSettings](#schemadotnetsettings)|false|none|Settings for .NET client libraries.|
|goSettings|[GoSettings](#schemagosettings)|false|none|Settings for Go client libraries.|
|javaSettings|[JavaSettings](#schemajavasettings)|false|none|Settings for legacy Java features, supported in the Service YAML.|
|launchStage|string|false|none|Launch stage of this version of the API.|
|nodeSettings|[NodeSettings](#schemanodesettings)|false|none|Settings for Node client libraries.|
|phpSettings|[PhpSettings](#schemaphpsettings)|false|none|Settings for PHP client libraries.|
|pythonSettings|[PythonSettings](#schemapythonsettings)|false|none|Settings for Python client libraries.|
|restNumericEnums|boolean|false|none|When using transport=rest, the client request will encode enums as numbers rather than strings.|
|rubySettings|[RubySettings](#schemarubysettings)|false|none|Settings for Ruby client libraries.|
|version|string|false|none|Version of the API to apply these settings to. This is the full protobuf package for the API, ending in the version element. Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1".|

#### Enumerated Values

|Property|Value|
|---|---|
|launchStage|LAUNCH_STAGE_UNSPECIFIED|
|launchStage|UNIMPLEMENTED|
|launchStage|PRELAUNCH|
|launchStage|EARLY_ACCESS|
|launchStage|ALPHA|
|launchStage|BETA|
|launchStage|GA|
|launchStage|DEPRECATED|

<h2 id="tocS_CommonLanguageSettings">CommonLanguageSettings</h2>
<!-- backwards compatibility -->
<a id="schemacommonlanguagesettings"></a>
<a id="schema_CommonLanguageSettings"></a>
<a id="tocScommonlanguagesettings"></a>
<a id="tocscommonlanguagesettings"></a>

```json
{
  "destinations": [
    "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
  ],
  "referenceDocsUri": "string"
}
```

Required information for every language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[string]|false|none|The destination where API teams want this client library to be published.|
|referenceDocsUri|string|false|none|Link to automatically generated reference documentation. Example: https://cloud.google.com/nodejs/docs/reference/asset/latest|

#### Enumerated Values

|Property|Value|
|---|---|
|destinations|CLIENT_LIBRARY_DESTINATION_UNSPECIFIED|
|destinations|GITHUB|
|destinations|PACKAGE_MANAGER|

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "rules": [
    {
      "allowedRequestExtensions": [
        "string"
      ],
      "allowedResponseExtensions": [
        "string"
      ],
      "provided": [
        "string"
      ],
      "requested": [
        "string"
      ],
      "selector": "string"
    }
  ]
}
```

`Context` defines which contexts an API requests. Example: context: rules: - selector: "*" requested: - google.rpc.context.ProjectContext - google.rpc.context.OriginContext The above specifies that all methods in the API request `google.rpc.context.ProjectContext` and `google.rpc.context.OriginContext`. Available context types are defined in package `google.rpc.context`. This also provides mechanism to allowlist any protobuf message extension that can be sent in grpc metadata using “x-goog-ext--bin” and “x-goog-ext--jspb” format. For example, list any service specific protobuf types that can appear in grpc metadata as follows in your yaml file: Example: context: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allowed_request_extensions: - google.foo.v1.NewExtension allowed_response_extensions: - google.foo.v1.NewExtension You can also specify extension ID instead of fully qualified extension name here.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[ContextRule](#schemacontextrule)]|false|none|A list of RPC context rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.|

<h2 id="tocS_ContextRule">ContextRule</h2>
<!-- backwards compatibility -->
<a id="schemacontextrule"></a>
<a id="schema_ContextRule"></a>
<a id="tocScontextrule"></a>
<a id="tocscontextrule"></a>

```json
{
  "allowedRequestExtensions": [
    "string"
  ],
  "allowedResponseExtensions": [
    "string"
  ],
  "provided": [
    "string"
  ],
  "requested": [
    "string"
  ],
  "selector": "string"
}
```

A context rule provides information about the context for an individual API element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedRequestExtensions|[string]|false|none|A list of full type names or extension IDs of extensions allowed in grpc side channel from client to backend.|
|allowedResponseExtensions|[string]|false|none|A list of full type names or extension IDs of extensions allowed in grpc side channel from backend to client.|
|provided|[string]|false|none|A list of full type names of provided contexts.|
|requested|[string]|false|none|A list of full type names of requested contexts.|
|selector|string|false|none|Selects the methods to which this rule applies. Refer to selector for syntax details.|

<h2 id="tocS_Control">Control</h2>
<!-- backwards compatibility -->
<a id="schemacontrol"></a>
<a id="schema_Control"></a>
<a id="tocScontrol"></a>
<a id="tocscontrol"></a>

```json
{
  "environment": "string"
}
```

Selects and configures the service controller used by the service. Example: control: environment: servicecontrol.googleapis.com

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|string|false|none|The service controller environment to use. If empty, no control plane feature (like quota and billing) will be enabled. The recommended value for most services is servicecontrol.googleapis.com|

<h2 id="tocS_CppSettings">CppSettings</h2>
<!-- backwards compatibility -->
<a id="schemacppsettings"></a>
<a id="schema_CppSettings"></a>
<a id="tocScppsettings"></a>
<a id="tocscppsettings"></a>

```json
{
  "common": {
    "destinations": [
      "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
    ],
    "referenceDocsUri": "string"
  }
}
```

Settings for C++ client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[CommonLanguageSettings](#schemacommonlanguagesettings)|false|none|Some settings.|

<h2 id="tocS_CustomError">CustomError</h2>
<!-- backwards compatibility -->
<a id="schemacustomerror"></a>
<a id="schema_CustomError"></a>
<a id="tocScustomerror"></a>
<a id="tocscustomerror"></a>

```json
{
  "rules": [
    {
      "isErrorType": true,
      "selector": "string"
    }
  ],
  "types": [
    "string"
  ]
}
```

Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[CustomErrorRule](#schemacustomerrorrule)]|false|none|The list of custom error rules that apply to individual API messages. **NOTE:** All service configuration rules follow "last one wins" order.|
|types|[string]|false|none|The list of custom error detail types, e.g. 'google.foo.v1.CustomError'.|

<h2 id="tocS_CustomErrorRule">CustomErrorRule</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrorrule"></a>
<a id="schema_CustomErrorRule"></a>
<a id="tocScustomerrorrule"></a>
<a id="tocscustomerrorrule"></a>

```json
{
  "isErrorType": true,
  "selector": "string"
}
```

A custom error rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isErrorType|boolean|false|none|Mark this message as possible payload in error response. Otherwise, objects of this type will be filtered when they appear in error payload.|
|selector|string|false|none|Selects messages to which this rule applies. Refer to selector for syntax details.|

<h2 id="tocS_CustomHttpPattern">CustomHttpPattern</h2>
<!-- backwards compatibility -->
<a id="schemacustomhttppattern"></a>
<a id="schema_CustomHttpPattern"></a>
<a id="tocScustomhttppattern"></a>
<a id="tocscustomhttppattern"></a>

```json
{
  "kind": "string",
  "path": "string"
}
```

A custom pattern is used for defining custom HTTP verb.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The name of this custom HTTP verb.|
|path|string|false|none|The path matched by this custom verb.|

<h2 id="tocS_Documentation">Documentation</h2>
<!-- backwards compatibility -->
<a id="schemadocumentation"></a>
<a id="schema_Documentation"></a>
<a id="tocSdocumentation"></a>
<a id="tocsdocumentation"></a>

```json
{
  "documentationRootUrl": "string",
  "overview": "string",
  "pages": [
    {
      "content": "string",
      "name": "string",
      "subpages": [
        {}
      ]
    }
  ],
  "rules": [
    {
      "deprecationDescription": "string",
      "description": "string",
      "selector": "string"
    }
  ],
  "serviceRootUrl": "string",
  "summary": "string"
}
```

`Documentation` provides the information for describing a service. Example: documentation: summary: > The Google Calendar API gives access to most calendar features. pages: - name: Overview content: (== include google/foo/overview.md ==) - name: Tutorial content: (== include google/foo/tutorial.md ==) subpages; - name: Java content: (== include google/foo/tutorial_java.md ==) rules: - selector: google.calendar.Calendar.Get description: > ... - selector: google.calendar.Calendar.Put description: > ... Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded. Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided. A number of constructs specific to the API platform are supported in documentation text. In order to reference a proto element, the following notation can be used: [fully.qualified.proto.name][] To override the display text used for the link, this can be used: [display text][fully.qualified.proto.name] Text can be excluded from doc using the following notation: (-- internal comment --) A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The `include` directive includes a markdown file from an external source: (== include path/to/file ==) The `resource_for` directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection: (== resource_for v1.shelves.books ==) The directive `suppress_warning` does not directly affect documentation and is documented together with service config validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentationRootUrl|string|false|none|The URL to the root of documentation.|
|overview|string|false|none|Declares a single overview page. For example: documentation: summary: ... overview: (== include overview.md ==) This is a shortcut for the following declaration (using pages style): documentation: summary: ... pages: - name: Overview content: (== include overview.md ==) Note: you cannot specify both `overview` field and `pages` field.|
|pages|[[Page](#schemapage)]|false|none|The top level pages for the documentation set.|
|rules|[[DocumentationRule](#schemadocumentationrule)]|false|none|A list of documentation rules that apply to individual API elements. **NOTE:** All service configuration rules follow "last one wins" order.|
|serviceRootUrl|string|false|none|Specifies the service root url if the default one (the service name from the yaml file) is not suitable. This can be seen in any fully specified service urls as well as sections that show a base that other urls are relative to.|
|summary|string|false|none|A short description of what the service does. The summary must be plain text. It becomes the overview of the service displayed in Google Cloud Console. NOTE: This field is equivalent to the standard field `description`.|

<h2 id="tocS_DocumentationRule">DocumentationRule</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationrule"></a>
<a id="schema_DocumentationRule"></a>
<a id="tocSdocumentationrule"></a>
<a id="tocsdocumentationrule"></a>

```json
{
  "deprecationDescription": "string",
  "description": "string",
  "selector": "string"
}
```

A documentation rule provides information about individual API elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deprecationDescription|string|false|none|Deprecation description of the selected element(s). It can be provided if an element is marked as `deprecated`.|
|description|string|false|none|Description of the selected proto element (e.g. a message, a method, a 'service' definition, or a field). Defaults to leading & trailing comments taken from the proto source definition of the proto element.|
|selector|string|false|none|The selector is a comma-separated list of patterns for any element such as a method, a field, an enum value. Each pattern is a qualified name of the element which may end in "*", indicating a wildcard. Wildcards are only allowed at the end and for a whole component of the qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A wildcard will match one or more components. To specify a default for all applicable elements, the whole pattern "*" is used.|

<h2 id="tocS_DotnetSettings">DotnetSettings</h2>
<!-- backwards compatibility -->
<a id="schemadotnetsettings"></a>
<a id="schema_DotnetSettings"></a>
<a id="tocSdotnetsettings"></a>
<a id="tocsdotnetsettings"></a>

```json
{
  "common": {
    "destinations": [
      "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
    ],
    "referenceDocsUri": "string"
  },
  "forcedNamespaceAliases": [
    "string"
  ],
  "handwrittenSignatures": [
    "string"
  ],
  "ignoredResources": [
    "string"
  ],
  "renamedResources": {
    "property1": "string",
    "property2": "string"
  },
  "renamedServices": {
    "property1": "string",
    "property2": "string"
  }
}
```

Settings for Dotnet client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[CommonLanguageSettings](#schemacommonlanguagesettings)|false|none|Some settings.|
|forcedNamespaceAliases|[string]|false|none|Namespaces which must be aliased in snippets due to a known (but non-generator-predictable) naming collision|
|handwrittenSignatures|[string]|false|none|Method signatures (in the form "service.method(signature)") which are provided separately, so shouldn't be generated. Snippets *calling* these methods are still generated, however.|
|ignoredResources|[string]|false|none|List of full resource types to ignore during generation. This is typically used for API-specific Location resources, which should be handled by the generator as if they were actually the common Location resources. Example entry: "documentai.googleapis.com/Location"|
|renamedResources|object|false|none|Map from full resource types to the effective short name for the resource. This is used when otherwise resource named from different services would cause naming collisions. Example entry: "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"|
|renamedServices|object|false|none|Map from original service names to renamed versions. This is used when the default generated types would cause a naming conflict. (Neither name is fully-qualified.) Example: Subscriber to SubscriberServiceApi.|

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

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "aliases": [
    "string"
  ],
  "allowCors": true,
  "name": "string",
  "target": "string"
}
```

`Endpoint` describes a network address of a service that serves a set of APIs. It is commonly known as a service endpoint. A service may expose any number of service endpoints, and all service endpoints share the same service definition, such as quota limits and monitoring metrics. Example: type: google.api.Service name: library-example.googleapis.com endpoints: # Declares network address `https://library-example.googleapis.com` # for service `library-example.googleapis.com`. The `https` scheme # is implicit for all service endpoints. Other schemes may be # supported in the future. - name: library-example.googleapis.com allow_cors: false - name: content-staging-library-example.googleapis.com # Allows HTTP OPTIONS calls to be passed to the API frontend, for it # to decide whether the subsequent cross-origin request is allowed # to proceed. allow_cors: true

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[string]|false|none|Unimplemented. Dot not use. DEPRECATED: This field is no longer supported. Instead of using aliases, please specify multiple google.api.Endpoint for each of the intended aliases. Additional names that this endpoint will be hosted on.|
|allowCors|boolean|false|none|Allowing [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka cross-domain traffic, would allow the backends served from this endpoint to receive and respond to HTTP OPTIONS requests. The response will be used by the browser to determine whether the subsequent cross-origin request is allowed to proceed.|
|name|string|false|none|The canonical name of this endpoint.|
|target|string|false|none|The specification of an Internet routable address of API frontend that will handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary). It should be either a valid IPv4 address or a fully-qualified domain name. For example, "8.8.8.8" or "myservice.appspot.com".|

<h2 id="tocS_Enum">Enum</h2>
<!-- backwards compatibility -->
<a id="schemaenum"></a>
<a id="schema_Enum"></a>
<a id="tocSenum"></a>
<a id="tocsenum"></a>

```json
{
  "edition": "string",
  "enumvalue": [
    {
      "name": "string",
      "number": 0,
      "options": [
        {
          "name": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        }
      ]
    }
  ],
  "name": "string",
  "options": [
    {
      "name": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "sourceContext": {
    "fileName": "string"
  },
  "syntax": "SYNTAX_PROTO2"
}
```

Enum type definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|edition|string|false|none|The source edition string, only valid when syntax is SYNTAX_EDITIONS.|
|enumvalue|[[EnumValue](#schemaenumvalue)]|false|none|Enum value definitions.|
|name|string|false|none|Enum type name.|
|options|[[Option](#schemaoption)]|false|none|Protocol buffer options.|
|sourceContext|[SourceContext](#schemasourcecontext)|false|none|The source context.|
|syntax|string|false|none|The source syntax.|

#### Enumerated Values

|Property|Value|
|---|---|
|syntax|SYNTAX_PROTO2|
|syntax|SYNTAX_PROTO3|
|syntax|SYNTAX_EDITIONS|

<h2 id="tocS_EnumValue">EnumValue</h2>
<!-- backwards compatibility -->
<a id="schemaenumvalue"></a>
<a id="schema_EnumValue"></a>
<a id="tocSenumvalue"></a>
<a id="tocsenumvalue"></a>

```json
{
  "name": "string",
  "number": 0,
  "options": [
    {
      "name": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Enum value definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Enum value name.|
|number|integer(int32)|false|none|Enum value number.|
|options|[[Option](#schemaoption)]|false|none|Protocol buffer options.|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "cardinality": "CARDINALITY_UNKNOWN",
  "defaultValue": "string",
  "jsonName": "string",
  "kind": "TYPE_UNKNOWN",
  "name": "string",
  "number": 0,
  "oneofIndex": 0,
  "options": [
    {
      "name": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "packed": true,
  "typeUrl": "string"
}
```

A single field of a message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardinality|string|false|none|The field cardinality.|
|defaultValue|string|false|none|The string value of the default value of this field. Proto2 syntax only.|
|jsonName|string|false|none|The field JSON name.|
|kind|string|false|none|The field type.|
|name|string|false|none|The field name.|
|number|integer(int32)|false|none|The field number.|
|oneofIndex|integer(int32)|false|none|The index of the field type in `Type.oneofs`, for message or enumeration types. The first type has index 1; zero means the type is not in the list.|
|options|[[Option](#schemaoption)]|false|none|The protocol buffer options.|
|packed|boolean|false|none|Whether to use alternative packed wire representation.|
|typeUrl|string|false|none|The field type URL, without the scheme, for message or enumeration types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.|

#### Enumerated Values

|Property|Value|
|---|---|
|cardinality|CARDINALITY_UNKNOWN|
|cardinality|CARDINALITY_OPTIONAL|
|cardinality|CARDINALITY_REQUIRED|
|cardinality|CARDINALITY_REPEATED|
|kind|TYPE_UNKNOWN|
|kind|TYPE_DOUBLE|
|kind|TYPE_FLOAT|
|kind|TYPE_INT64|
|kind|TYPE_UINT64|
|kind|TYPE_INT32|
|kind|TYPE_FIXED64|
|kind|TYPE_FIXED32|
|kind|TYPE_BOOL|
|kind|TYPE_STRING|
|kind|TYPE_GROUP|
|kind|TYPE_MESSAGE|
|kind|TYPE_BYTES|
|kind|TYPE_UINT32|
|kind|TYPE_ENUM|
|kind|TYPE_SFIXED32|
|kind|TYPE_SFIXED64|
|kind|TYPE_SINT32|
|kind|TYPE_SINT64|

<h2 id="tocS_GoSettings">GoSettings</h2>
<!-- backwards compatibility -->
<a id="schemagosettings"></a>
<a id="schema_GoSettings"></a>
<a id="tocSgosettings"></a>
<a id="tocsgosettings"></a>

```json
{
  "common": {
    "destinations": [
      "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
    ],
    "referenceDocsUri": "string"
  }
}
```

Settings for Go client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[CommonLanguageSettings](#schemacommonlanguagesettings)|false|none|Some settings.|

<h2 id="tocS_Http">Http</h2>
<!-- backwards compatibility -->
<a id="schemahttp"></a>
<a id="schema_Http"></a>
<a id="tocShttp"></a>
<a id="tocshttp"></a>

```json
{
  "fullyDecodeReservedExpansion": true,
  "rules": [
    {
      "additionalBindings": [
        {}
      ],
      "body": "string",
      "custom": {
        "kind": "string",
        "path": "string"
      },
      "delete": "string",
      "get": "string",
      "patch": "string",
      "post": "string",
      "put": "string",
      "responseBody": "string",
      "selector": "string"
    }
  ]
}
```

Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullyDecodeReservedExpansion|boolean|false|none|When set to true, URL path parameters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where "%2F" will be left encoded. The default behavior is to not decode RFC 6570 reserved characters in multi segment matches.|
|rules|[[HttpRule](#schemahttprule)]|false|none|A list of HTTP configuration rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.|

<h2 id="tocS_HttpRule">HttpRule</h2>
<!-- backwards compatibility -->
<a id="schemahttprule"></a>
<a id="schema_HttpRule"></a>
<a id="tocShttprule"></a>
<a id="tocshttprule"></a>

```json
{
  "additionalBindings": [
    {
      "additionalBindings": [
        {}
      ],
      "body": "string",
      "custom": {
        "kind": "string",
        "path": "string"
      },
      "delete": "string",
      "get": "string",
      "patch": "string",
      "post": "string",
      "put": "string",
      "responseBody": "string",
      "selector": "string"
    }
  ],
  "body": "string",
  "custom": {
    "kind": "string",
    "path": "string"
  },
  "delete": "string",
  "get": "string",
  "patch": "string",
  "post": "string",
  "put": "string",
  "responseBody": "string",
  "selector": "string"
}
```

# gRPC Transcoding gRPC Transcoding is a feature for mapping between a gRPC method and one or more HTTP REST endpoints. It allows developers to build a single API service that supports both gRPC APIs and REST APIs. Many systems, including [Google APIs](https://github.com/googleapis/googleapis), [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC Gateway](https://github.com/grpc-ecosystem/grpc-gateway), and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature and use it for large scale production services. `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies how different portions of the gRPC request message are mapped to the URL path, URL query parameters, and HTTP request body. It also controls how the gRPC response message is mapped to the HTTP response body. `HttpRule` is typically specified as an `google.api.http` annotation on the gRPC method. Each mapping specifies a URL path template and an HTTP method. The path template may refer to one or more fields in the gRPC request message, as long as each field is a non-repeated field with a primitive (non-message) type. The path template controls how fields of the request message are mapped to the URL path. Example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get: "/v1/{name=messages/*}" }; } } message GetMessageRequest { string name = 1; // Mapped to URL path. } message Message { string text = 1; // The resource content. } This enables an HTTP REST to gRPC mapping as below: HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(name: "messages/123456")` Any fields in the request message which are not bound by the path template automatically become HTTP query parameters if there is no HTTP request body. For example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get:"/v1/messages/{message_id}" }; } } message GetMessageRequest { message SubMessage { string subfield = 1; } string message_id = 1; // Mapped to URL path. int64 revision = 2; // Mapped to URL query parameter `revision`. SubMessage sub = 3; // Mapped to URL query parameter `sub.subfield`. } This enables a HTTP JSON to RPC mapping as below: HTTP | gRPC -----|----- `GET /v1/messages/123456?revision=2&sub.subfield=foo` | `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield: "foo"))` Note that fields which are mapped to URL query parameters must have a primitive type or a repeated primitive type or a non-repeated message type. In the case of a repeated type, the parameter can be repeated in the URL as `...?param=A&param=B`. In the case of a message type, each field of the message is mapped to a separate parameter, such as `...?foo.a=A&foo.b=B&foo.c=C`. For HTTP methods that allow a request body, the `body` field specifies the mapping. Consider a REST update method on the message resource collection: service Messaging { rpc UpdateMessage(UpdateMessageRequest) returns (Message) { option (google.api.http) = { patch: "/v1/messages/{message_id}" body: "message" }; } } message UpdateMessageRequest { string message_id = 1; // mapped to the URL Message message = 2; // mapped to the body } The following HTTP JSON to RPC mapping is enabled, where the representation of the JSON in the request body is determined by protos JSON encoding: HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "123456" message { text: "Hi!" })` The special name `*` can be used in the body mapping to define that every field not bound by the path template should be mapped to the request body. This enables the following alternative definition of the update method: service Messaging { rpc UpdateMessage(Message) returns (Message) { option (google.api.http) = { patch: "/v1/messages/{message_id}" body: "*" }; } } message Message { string message_id = 1; string text = 2; } The following HTTP JSON to RPC mapping is enabled: HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "123456" text: "Hi!")` Note that when using `*` in the body mapping, it is not possible to have HTTP parameters, as all fields not bound by the path end in the body. This makes this option more rarely used in practice when defining REST APIs. The common usage of `*` is in custom methods which don't use the URL at all for transferring data. It is possible to define multiple HTTP methods for one RPC by using the `additional_bindings` option. Example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get: "/v1/messages/{message_id}" additional_bindings { get: "/v1/users/{user_id}/messages/{message_id}" } }; } } message GetMessageRequest { string message_id = 1; string user_id = 2; } This enables the following two alternative HTTP JSON to RPC mappings: HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(message_id: "123456")` `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id: "123456")` ## Rules for HTTP mapping 1. Leaf request fields (recursive expansion nested messages in the request message) are classified into three categories: - Fields referred by the path template. They are passed via the URL path. - Fields referred by the HttpRule.body. They are passed via the HTTP request body. - All other fields are passed via the URL query parameters, and the parameter name is the field path in the request message. A repeated field can be represented as multiple query parameters under the same name. 2. If HttpRule.body is "*", there is no URL query parameter, all fields are passed via URL path and HTTP request body. 3. If HttpRule.body is omitted, there is no HTTP request body, all fields are passed via URL path and URL query parameters. ### Path template syntax Template = "/" Segments [ Verb ] ; Segments = Segment { "/" Segment } ; Segment = "*" | "**" | LITERAL | Variable ; Variable = "{" FieldPath [ "=" Segments ] "}" ; FieldPath = IDENT { "." IDENT } ; Verb = ":" LITERAL ; The syntax `*` matches a single URL path segment. The syntax `**` matches zero or more URL path segments, which must be the last part of the URL path except the `Verb`. The syntax `Variable` matches part of the URL path as specified by its template. A variable template must not contain other variables. If a variable matches a single path segment, its template may be omitted, e.g. `{var}` is equivalent to `{var=*}`. The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL` contains any reserved character, such characters should be percent-encoded before the matching. If a variable contains exactly one path segment, such as `"{var}"` or `"{var=*}"`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{var}`. If a variable contains multiple path segments, such as `"{var=foo/*}"` or `"{var=**}"`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding, except "%2F" and "%2f" are left unchanged. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{+var}`. ## Using gRPC API Service Configuration gRPC API Service Configuration (service config) is a configuration language for configuring a gRPC service to become a user-facing product. The service config is simply the YAML representation of the `google.api.Service` proto message. As an alternative to annotating your proto file, you can configure gRPC transcoding in your service config YAML files. You do this by specifying a `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same effect as the proto annotation. This can be particularly useful if you have a proto that is reused in multiple services. Note that any transcoding specified in the service config will override any matching transcoding configuration in the proto. Example: http: rules: # Selects a gRPC method and applies HttpRule to it. - selector: example.v1.Messaging.GetMessage get: /v1/messages/{message_id}/{sub.subfield} ## Special notes When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the proto to JSON conversion must follow the [proto3 specification](https://developers.google.com/protocol-buffers/docs/proto3#json). While the single segment variable follows the semantics of [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String Expansion, the multi segment variable **does not** follow RFC 6570 Section 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion does not expand special characters like `?` and `#`, which would lead to invalid URLs. As the result, gRPC Transcoding uses a custom encoding for multi segment variables. The path variables **must not** refer to any repeated or mapped field, because client libraries are not capable of handling such variable expansion. The path variables **must not** capture the leading "/" character. The reason is that the most common use case "{var}" does not capture the leading "/" character. For consistency, all path variables must share the same behavior. Repeated message fields must not be mapped to URL query parameters, because no client library can support such complicated mapping. If an API needs to use a JSON array for request or response body, it can map the request or response body to a repeated field. However, some gRPC Transcoding implementations may not support this feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalBindings|[[HttpRule](#schemahttprule)]|false|none|Additional HTTP bindings for the selector. Nested bindings must not contain an `additional_bindings` field themselves (that is, the nesting may only be one level deep).|
|body|string|false|none|The name of the request field whose value is mapped to the HTTP request body, or `*` for mapping all request fields not captured by the path pattern to the HTTP body, or omitted for not having any HTTP request body. NOTE: the referred field must be present at the top-level of the request message type.|
|custom|[CustomHttpPattern](#schemacustomhttppattern)|false|none|The custom pattern is used for specifying an HTTP method that is not included in the `pattern` field, such as HEAD, or "*" to leave the HTTP method unspecified for this rule. The wild-card rule is useful for services that provide content to Web (HTML) clients.|
|delete|string|false|none|Maps to HTTP DELETE. Used for deleting a resource.|
|get|string|false|none|Maps to HTTP GET. Used for listing and getting information about resources.|
|patch|string|false|none|Maps to HTTP PATCH. Used for updating a resource.|
|post|string|false|none|Maps to HTTP POST. Used for creating a resource or performing an action.|
|put|string|false|none|Maps to HTTP PUT. Used for replacing a resource.|
|responseBody|string|false|none|Optional. The name of the response field whose value is mapped to the HTTP response body. When omitted, the entire response message will be used as the HTTP response body. NOTE: The referred field must be present at the top-level of the response message type.|
|selector|string|false|none|Selects a method to which this rule applies. Refer to selector for syntax details.|

<h2 id="tocS_JavaSettings">JavaSettings</h2>
<!-- backwards compatibility -->
<a id="schemajavasettings"></a>
<a id="schema_JavaSettings"></a>
<a id="tocSjavasettings"></a>
<a id="tocsjavasettings"></a>

```json
{
  "common": {
    "destinations": [
      "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
    ],
    "referenceDocsUri": "string"
  },
  "libraryPackage": "string",
  "serviceClassNames": {
    "property1": "string",
    "property2": "string"
  }
}
```

Settings for Java client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[CommonLanguageSettings](#schemacommonlanguagesettings)|false|none|Some settings.|
|libraryPackage|string|false|none|The package name to use in Java. Clobbers the java_package option set in the protobuf. This should be used **only** by APIs who have already set the language_settings.java.package_name" field in gapic.yaml. API teams should use the protobuf java_package option where possible. Example of a YAML configuration:: publishing: java_settings: library_package: com.google.cloud.pubsub.v1|
|serviceClassNames|object|false|none|Configure the Java class name to use instead of the service's for its corresponding generated GAPIC client. Keys are fully-qualified service names as they appear in the protobuf (including the full the language_settings.java.interface_names" field in gapic.yaml. API teams should otherwise use the service name as it appears in the protobuf. Example of a YAML configuration:: publishing: java_settings: service_class_names: - google.pubsub.v1.Publisher: TopicAdmin - google.pubsub.v1.Subscriber: SubscriptionAdmin|

<h2 id="tocS_JwtLocation">JwtLocation</h2>
<!-- backwards compatibility -->
<a id="schemajwtlocation"></a>
<a id="schema_JwtLocation"></a>
<a id="tocSjwtlocation"></a>
<a id="tocsjwtlocation"></a>

```json
{
  "cookie": "string",
  "header": "string",
  "query": "string",
  "valuePrefix": "string"
}
```

Specifies a location to extract JWT from an API request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cookie|string|false|none|Specifies cookie name to extract JWT token.|
|header|string|false|none|Specifies HTTP header name to extract JWT token.|
|query|string|false|none|Specifies URL query parameter name to extract JWT token.|
|valuePrefix|string|false|none|The value prefix. The value format is "value_prefix{token}" Only applies to "in" header type. Must be empty for "in" query type. If not empty, the header value has to match (case sensitive) this prefix. If not matched, JWT will not be extracted. If matched, JWT will be extracted after the prefix is removed. For example, for "Authorization: Bearer {JWT}", value_prefix="Bearer " with a space at the end.|

<h2 id="tocS_LabelDescriptor">LabelDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemalabeldescriptor"></a>
<a id="schema_LabelDescriptor"></a>
<a id="tocSlabeldescriptor"></a>
<a id="tocslabeldescriptor"></a>

```json
{
  "description": "string",
  "key": "string",
  "valueType": "STRING"
}
```

A description of a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A human-readable description for the label.|
|key|string|false|none|The label key.|
|valueType|string|false|none|The type of data that can be assigned to the label.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|STRING|
|valueType|BOOL|
|valueType|INT64|

<h2 id="tocS_LogDescriptor">LogDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemalogdescriptor"></a>
<a id="schema_LogDescriptor"></a>
<a id="tocSlogdescriptor"></a>
<a id="tocslogdescriptor"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "labels": [
    {
      "description": "string",
      "key": "string",
      "valueType": "STRING"
    }
  ],
  "name": "string"
}
```

A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A human-readable description of this log. This information appears in the documentation and can contain details.|
|displayName|string|false|none|The human-readable name for this log. This information appears on the user interface and should be concise.|
|labels|[[LabelDescriptor](#schemalabeldescriptor)]|false|none|The set of labels that are available to describe a specific log entry. Runtime requests that contain labels not specified here are considered invalid.|
|name|string|false|none|The name of the log. It must be less than 512 characters long and can include the following characters: upper- and lower-case alphanumeric characters [A-Za-z0-9], and punctuation characters including slash, underscore, hyphen, period [/_-.].|

<h2 id="tocS_Logging">Logging</h2>
<!-- backwards compatibility -->
<a id="schemalogging"></a>
<a id="schema_Logging"></a>
<a id="tocSlogging"></a>
<a id="tocslogging"></a>

```json
{
  "consumerDestinations": [
    {
      "logs": [
        "string"
      ],
      "monitoredResource": "string"
    }
  ],
  "producerDestinations": [
    {
      "logs": [
        "string"
      ],
      "monitoredResource": "string"
    }
  ]
}
```

Logging configuration of the service. The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project. monitored_resources: - type: library.googleapis.com/branch labels: - key: /city description: The city where the library branch is located in. - key: /name description: The name of the branch. logs: - name: activity_history labels: - key: /customer_id - name: purchase_history logging: producer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history - purchase_history consumer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerDestinations|[[LoggingDestination](#schemaloggingdestination)]|false|none|Logging configurations for sending logs to the consumer project. There can be multiple consumer destinations, each one must have a different monitored resource type. A log can be used in at most one consumer destination.|
|producerDestinations|[[LoggingDestination](#schemaloggingdestination)]|false|none|Logging configurations for sending logs to the producer project. There can be multiple producer destinations, each one must have a different monitored resource type. A log can be used in at most one producer destination.|

<h2 id="tocS_LoggingDestination">LoggingDestination</h2>
<!-- backwards compatibility -->
<a id="schemaloggingdestination"></a>
<a id="schema_LoggingDestination"></a>
<a id="tocSloggingdestination"></a>
<a id="tocsloggingdestination"></a>

```json
{
  "logs": [
    "string"
  ],
  "monitoredResource": "string"
}
```

Configuration of a specific logging destination (the producer project or the consumer project).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[string]|false|none|Names of the logs to be sent to this destination. Each name must be defined in the Service.logs section. If the log name is not a domain scoped name, it will be automatically prefixed with the service name followed by "/".|
|monitoredResource|string|false|none|The monitored resource type. The type must be defined in the Service.monitored_resources section.|

<h2 id="tocS_LongRunning">LongRunning</h2>
<!-- backwards compatibility -->
<a id="schemalongrunning"></a>
<a id="schema_LongRunning"></a>
<a id="tocSlongrunning"></a>
<a id="tocslongrunning"></a>

```json
{
  "initialPollDelay": "string",
  "maxPollDelay": "string",
  "pollDelayMultiplier": 0,
  "totalPollTimeout": "string"
}
```

Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|initialPollDelay|string(google-duration)|false|none|Initial delay after which the first poll request will be made. Default value: 5 seconds.|
|maxPollDelay|string(google-duration)|false|none|Maximum time between two subsequent poll requests. Default value: 45 seconds.|
|pollDelayMultiplier|number(float)|false|none|Multiplier to gradually increase delay between subsequent polls until it reaches max_poll_delay. Default value: 1.5.|
|totalPollTimeout|string(google-duration)|false|none|Total polling timeout. Default value: 5 minutes.|

<h2 id="tocS_Method">Method</h2>
<!-- backwards compatibility -->
<a id="schemamethod"></a>
<a id="schema_Method"></a>
<a id="tocSmethod"></a>
<a id="tocsmethod"></a>

```json
{
  "name": "string",
  "options": [
    {
      "name": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "requestStreaming": true,
  "requestTypeUrl": "string",
  "responseStreaming": true,
  "responseTypeUrl": "string",
  "syntax": "SYNTAX_PROTO2"
}
```

Method represents a method of an API interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The simple name of this method.|
|options|[[Option](#schemaoption)]|false|none|Any metadata attached to the method.|
|requestStreaming|boolean|false|none|If true, the request is streamed.|
|requestTypeUrl|string|false|none|A URL of the input message type.|
|responseStreaming|boolean|false|none|If true, the response is streamed.|
|responseTypeUrl|string|false|none|The URL of the output message type.|
|syntax|string|false|none|The source syntax of this method.|

#### Enumerated Values

|Property|Value|
|---|---|
|syntax|SYNTAX_PROTO2|
|syntax|SYNTAX_PROTO3|
|syntax|SYNTAX_EDITIONS|

<h2 id="tocS_MethodSettings">MethodSettings</h2>
<!-- backwards compatibility -->
<a id="schemamethodsettings"></a>
<a id="schema_MethodSettings"></a>
<a id="tocSmethodsettings"></a>
<a id="tocsmethodsettings"></a>

```json
{
  "longRunning": {
    "initialPollDelay": "string",
    "maxPollDelay": "string",
    "pollDelayMultiplier": 0,
    "totalPollTimeout": "string"
  },
  "selector": "string"
}
```

Describes the generator configuration for a method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|longRunning|[LongRunning](#schemalongrunning)|false|none|Describes settings to use for long-running operations when generating API methods for RPCs. Complements RPCs that use the annotations in google/longrunning/operations.proto. Example of a YAML configuration:: publishing: method_settings: - selector: google.cloud.speech.v2.Speech.BatchRecognize long_running: initial_poll_delay: seconds: 60 # 1 minute poll_delay_multiplier: 1.5 max_poll_delay: seconds: 360 # 6 minutes total_poll_timeout: seconds: 54000 # 90 minutes|
|selector|string|false|none|The fully qualified name of the method, for which the options below apply. This is used to find the method to apply the options.|

<h2 id="tocS_MetricDescriptor">MetricDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemametricdescriptor"></a>
<a id="schema_MetricDescriptor"></a>
<a id="tocSmetricdescriptor"></a>
<a id="tocsmetricdescriptor"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "labels": [
    {
      "description": "string",
      "key": "string",
      "valueType": "STRING"
    }
  ],
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "metadata": {
    "ingestDelay": "string",
    "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
    "samplePeriod": "string"
  },
  "metricKind": "METRIC_KIND_UNSPECIFIED",
  "monitoredResourceTypes": [
    "string"
  ],
  "name": "string",
  "type": "string",
  "unit": "string",
  "valueType": "VALUE_TYPE_UNSPECIFIED"
}
```

Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A detailed description of the metric, which can be used in documentation.|
|displayName|string|false|none|A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.|
|labels|[[LabelDescriptor](#schemalabeldescriptor)]|false|none|The set of labels that can be used to describe a specific instance of this metric type. For example, the `appengine.googleapis.com/http/server/response_latencies` metric type has a label for the HTTP response code, `response_code`, so you can look at latencies for successful responses or just for responses that failed.|
|launchStage|string|false|none|Optional. The launch stage of the metric definition.|
|metadata|[MetricDescriptorMetadata](#schemametricdescriptormetadata)|false|none|Optional. Metadata which can be used to guide usage of the metric.|
|metricKind|string|false|none|Whether the metric records instantaneous values, changes to a value, etc. Some combinations of `metric_kind` and `value_type` might not be supported.|
|monitoredResourceTypes|[string]|false|none|Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.|
|name|string|false|none|The resource name of the metric descriptor.|
|type|string|false|none|The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name `custom.googleapis.com` or `external.googleapis.com`. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies"|
|unit|string|false|none|The units in which the metric value is reported. It is only applicable if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit` defines the representation of the stored metric values. Different systems might scale the values to be more easily displayed (so a value of `0.02kBy` _might_ be displayed as `20By`, and a value of `3523kBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is `kBy`, then the value of the metric is always in thousands of bytes, no matter how it might be displayed. If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005 CPU-seconds, then the value is written as `12005`. Alternatively, if you want a custom metric to record data in a more granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`), or use `Kis{CPU}` and write `11.723` (which is `12005/1024`). The supported units are a subset of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html) standard: **Basic units (UNIT)** * `bit` bit * `By` byte * `s` second * `min` minute * `h` hour * `d` day * `1` dimensionless **Prefixes (PREFIX)** * `k` kilo (10^3) * `M` mega (10^6) * `G` giga (10^9) * `T` tera (10^12) * `P` peta (10^15) * `E` exa (10^18) * `Z` zetta (10^21) * `Y` yotta (10^24) * `m` milli (10^-3) * `u` micro (10^-6) * `n` nano (10^-9) * `p` pico (10^-12) * `f` femto (10^-15) * `a` atto (10^-18) * `z` zepto (10^-21) * `y` yocto (10^-24) * `Ki` kibi (2^10) * `Mi` mebi (2^20) * `Gi` gibi (2^30) * `Ti` tebi (2^40) * `Pi` pebi (2^50) **Grammar** The grammar also includes these connectors: * `/` division or ratio (as an infix operator). For examples, `kBy/{email}` or `MiBy/10ms` (although you should almost never have `/s` in a metric `unit`; rates should always be computed at query time from the underlying cumulative or delta value). * `.` multiplication or composition (as an infix operator). For examples, `GBy.d` or `k{watt}.h`. The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT \| "%" ) [ Annotation ] \| Annotation \| "1" ; Annotation = "{" NAME "}" ; Notes: * `Annotation` is just a comment if it follows a `UNIT`. If the annotation is used alone, then the unit is equivalent to `1`. For examples, `{request}/s == 1/s`, `By{transmitted}/s == By/s`. * `NAME` is a sequence of non-blank printable ASCII characters not containing `{` or `}`. * `1` represents a unitary [dimensionless unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in `1/s`. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as `1/d` or `{new-users}/d` (and a metric value `5` would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric value of `5.3` would mean "5300 page views per day"). * `%` represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value `3` means "3 percent"). * `10^2.%` indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value `0.03` means "3 percent").|
|valueType|string|false|none|Whether the measurement is an integer, a floating-point number, etc. Some combinations of `metric_kind` and `value_type` might not be supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|launchStage|LAUNCH_STAGE_UNSPECIFIED|
|launchStage|UNIMPLEMENTED|
|launchStage|PRELAUNCH|
|launchStage|EARLY_ACCESS|
|launchStage|ALPHA|
|launchStage|BETA|
|launchStage|GA|
|launchStage|DEPRECATED|
|metricKind|METRIC_KIND_UNSPECIFIED|
|metricKind|GAUGE|
|metricKind|DELTA|
|metricKind|CUMULATIVE|
|valueType|VALUE_TYPE_UNSPECIFIED|
|valueType|BOOL|
|valueType|INT64|
|valueType|DOUBLE|
|valueType|STRING|
|valueType|DISTRIBUTION|
|valueType|MONEY|

<h2 id="tocS_MetricDescriptorMetadata">MetricDescriptorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemametricdescriptormetadata"></a>
<a id="schema_MetricDescriptorMetadata"></a>
<a id="tocSmetricdescriptormetadata"></a>
<a id="tocsmetricdescriptormetadata"></a>

```json
{
  "ingestDelay": "string",
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "samplePeriod": "string"
}
```

Additional annotations that can be used to guide the usage of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingestDelay|string(google-duration)|false|none|The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.|
|launchStage|string|false|none|Deprecated. Must use the MetricDescriptor.launch_stage instead.|
|samplePeriod|string(google-duration)|false|none|The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.|

#### Enumerated Values

|Property|Value|
|---|---|
|launchStage|LAUNCH_STAGE_UNSPECIFIED|
|launchStage|UNIMPLEMENTED|
|launchStage|PRELAUNCH|
|launchStage|EARLY_ACCESS|
|launchStage|ALPHA|
|launchStage|BETA|
|launchStage|GA|
|launchStage|DEPRECATED|

<h2 id="tocS_MetricRule">MetricRule</h2>
<!-- backwards compatibility -->
<a id="schemametricrule"></a>
<a id="schema_MetricRule"></a>
<a id="tocSmetricrule"></a>
<a id="tocsmetricrule"></a>

```json
{
  "metricCosts": {
    "property1": "string",
    "property2": "string"
  },
  "selector": "string"
}
```

Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricCosts|object|false|none|Metrics to update when the selected methods are called, and the associated cost applied to each metric. The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative.|
|selector|string|false|none|Selects the methods to which this rule applies. Refer to selector for syntax details.|

<h2 id="tocS_Mixin">Mixin</h2>
<!-- backwards compatibility -->
<a id="schemamixin"></a>
<a id="schema_Mixin"></a>
<a id="tocSmixin"></a>
<a id="tocsmixin"></a>

```json
{
  "name": "string",
  "root": "string"
}
```

Declares an API Interface to be included in this interface. The including interface must redeclare all the methods from the included interface, but documentation and options are inherited as follows: - If after comment and whitespace stripping, the documentation string of the redeclared method is empty, it will be inherited from the original method. - Each annotation belonging to the service config (http, visibility) which is not set in the redeclared method will be inherited. - If an http annotation is inherited, the path pattern will be modified as follows. Any version prefix will be replaced by the version of the including interface plus the root path if specified. Example of a simple mixin: package google.acl.v1; service AccessControl { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v1/{resource=**}:getAcl"; } } package google.storage.v2; service Storage { // rpc GetAcl(GetAclRequest) returns (Acl); // Get a data record. rpc GetData(GetDataRequest) returns (Data) { option (google.api.http).get = "/v2/{resource=**}"; } } Example of a mixin configuration: apis: - name: google.storage.v2.Storage mixins: - name: google.acl.v1.AccessControl The mixin construct implies that all methods in `AccessControl` are also declared with same name and request/response types in `Storage`. A documentation generator or annotation processor will see the effective `Storage.GetAcl` method after inherting documentation and annotations as follows: service Storage { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v2/{resource=**}:getAcl"; } ... } Note how the version in the path pattern changed from `v1` to `v2`. If the `root` field in the mixin is specified, it should be a relative path under which inherited HTTP paths are placed. Example: apis: - name: google.storage.v2.Storage mixins: - name: google.acl.v1.AccessControl root: acls This implies the following inherited HTTP annotation: service Storage { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v2/acls/{resource=**}:getAcl"; } ... }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The fully qualified name of the interface which is included.|
|root|string|false|none|If non-empty specifies a path under which inherited HTTP paths are rooted.|

<h2 id="tocS_MonitoredResourceDescriptor">MonitoredResourceDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemamonitoredresourcedescriptor"></a>
<a id="schema_MonitoredResourceDescriptor"></a>
<a id="tocSmonitoredresourcedescriptor"></a>
<a id="tocsmonitoredresourcedescriptor"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "labels": [
    {
      "description": "string",
      "key": "string",
      "valueType": "STRING"
    }
  ],
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "name": "string",
  "type": "string"
}
```

An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `"gce_instance"` and specifies the use of the labels `"instance_id"` and `"zone"` to identify particular VM instances. Different APIs can support different monitored resource types. APIs generally provide a `list` method that returns the monitored resource descriptors used by the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. A detailed description of the monitored resource type that might be used in documentation.|
|displayName|string|false|none|Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, `"Google Cloud SQL Database"`.|
|labels|[[LabelDescriptor](#schemalabeldescriptor)]|false|none|Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels `"database_id"` and `"zone"`.|
|launchStage|string|false|none|Optional. The launch stage of the monitored resource definition.|
|name|string|false|none|Optional. The resource name of the monitored resource descriptor: `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where {type} is the value of the `type` field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format `"monitoredResourceDescriptors/{type}"`.|
|type|string|false|none|Required. The monitored resource type. For example, the type `"cloudsql_database"` represents databases in Google Cloud SQL. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).|

#### Enumerated Values

|Property|Value|
|---|---|
|launchStage|LAUNCH_STAGE_UNSPECIFIED|
|launchStage|UNIMPLEMENTED|
|launchStage|PRELAUNCH|
|launchStage|EARLY_ACCESS|
|launchStage|ALPHA|
|launchStage|BETA|
|launchStage|GA|
|launchStage|DEPRECATED|

<h2 id="tocS_Monitoring">Monitoring</h2>
<!-- backwards compatibility -->
<a id="schemamonitoring"></a>
<a id="schema_Monitoring"></a>
<a id="tocSmonitoring"></a>
<a id="tocsmonitoring"></a>

```json
{
  "consumerDestinations": [
    {
      "metrics": [
        "string"
      ],
      "monitoredResource": "string"
    }
  ],
  "producerDestinations": [
    {
      "metrics": [
        "string"
      ],
      "monitoredResource": "string"
    }
  ]
}
```

Monitoring configuration of the service. The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The `library.googleapis.com/book/returned_count` metric is sent to both producer and consumer projects, whereas the `library.googleapis.com/book/num_overdue` metric is only sent to the consumer project. monitored_resources: - type: library.googleapis.com/Branch display_name: "Library Branch" description: "A branch of a library." launch_stage: GA labels: - key: resource_container description: "The Cloud container (ie. project id) for the Branch." - key: location description: "The location of the library branch." - key: branch_id description: "The id of the branch." metrics: - name: library.googleapis.com/book/returned_count display_name: "Books Returned" description: "The count of books that have been returned." launch_stage: GA metric_kind: DELTA value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." - name: library.googleapis.com/book/num_overdue display_name: "Books Overdue" description: "The current number of overdue books." launch_stage: GA metric_kind: GAUGE value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." monitoring: producer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count consumer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count - library.googleapis.com/book/num_overdue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerDestinations|[[MonitoringDestination](#schemamonitoringdestination)]|false|none|Monitoring configurations for sending metrics to the consumer project. There can be multiple consumer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.|
|producerDestinations|[[MonitoringDestination](#schemamonitoringdestination)]|false|none|Monitoring configurations for sending metrics to the producer project. There can be multiple producer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.|

<h2 id="tocS_MonitoringDestination">MonitoringDestination</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringdestination"></a>
<a id="schema_MonitoringDestination"></a>
<a id="tocSmonitoringdestination"></a>
<a id="tocsmonitoringdestination"></a>

```json
{
  "metrics": [
    "string"
  ],
  "monitoredResource": "string"
}
```

Configuration of a specific monitoring destination (the producer project or the consumer project).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[string]|false|none|Types of the metrics to report to this monitoring destination. Each type must be defined in Service.metrics section.|
|monitoredResource|string|false|none|The monitored resource type. The type must be defined in Service.monitored_resources section.|

<h2 id="tocS_NodeSettings">NodeSettings</h2>
<!-- backwards compatibility -->
<a id="schemanodesettings"></a>
<a id="schema_NodeSettings"></a>
<a id="tocSnodesettings"></a>
<a id="tocsnodesettings"></a>

```json
{
  "common": {
    "destinations": [
      "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
    ],
    "referenceDocsUri": "string"
  }
}
```

Settings for Node client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[CommonLanguageSettings](#schemacommonlanguagesettings)|false|none|Some settings.|

<h2 id="tocS_OAuthRequirements">OAuthRequirements</h2>
<!-- backwards compatibility -->
<a id="schemaoauthrequirements"></a>
<a id="schema_OAuthRequirements"></a>
<a id="tocSoauthrequirements"></a>
<a id="tocsoauthrequirements"></a>

```json
{
  "canonicalScopes": "string"
}
```

OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalScopes|string|false|none|The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted. Example: canonical_scopes: https://www.googleapis.com/auth/calendar, https://www.googleapis.com/auth/calendar.read|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

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
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
{
  "name": "string",
  "value": {
    "property1": null,
    "property2": null
  }
}
```

A protocol buffer option, which can be attached to a message, field, enumeration, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, `"map_entry"`. For custom options, it should be the fully-qualified name. For example, `"google.api.http"`.|
|value|object|false|none|The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "content": "string",
  "name": "string",
  "subpages": [
    {
      "content": "string",
      "name": "string",
      "subpages": [
        {}
      ]
    }
  ]
}
```

Represents a documentation page. A page can contain subpages to represent nested documentation set structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The Markdown content of the page. You can use (== include {path} ==) to include content from a Markdown file. The content can be used to produce the documentation page such as HTML format page.|
|name|string|false|none|The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with `.`) can be used as reference to the page in your documentation. For example: pages: - name: Tutorial content: (== include tutorial.md ==) subpages: - name: Java content: (== include tutorial_java.md ==) You can reference `Java` page using Markdown reference link syntax: `Java`.|
|subpages|[[Page](#schemapage)]|false|none|Subpages of this page. The order of subpages specified here will be honored in the generated docset.|

<h2 id="tocS_PhpSettings">PhpSettings</h2>
<!-- backwards compatibility -->
<a id="schemaphpsettings"></a>
<a id="schema_PhpSettings"></a>
<a id="tocSphpsettings"></a>
<a id="tocsphpsettings"></a>

```json
{
  "common": {
    "destinations": [
      "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
    ],
    "referenceDocsUri": "string"
  }
}
```

Settings for Php client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[CommonLanguageSettings](#schemacommonlanguagesettings)|false|none|Some settings.|

<h2 id="tocS_Publishing">Publishing</h2>
<!-- backwards compatibility -->
<a id="schemapublishing"></a>
<a id="schema_Publishing"></a>
<a id="tocSpublishing"></a>
<a id="tocspublishing"></a>

```json
{
  "apiShortName": "string",
  "codeownerGithubTeams": [
    "string"
  ],
  "docTagPrefix": "string",
  "documentationUri": "string",
  "githubLabel": "string",
  "librarySettings": [
    {
      "cppSettings": {
        "common": {
          "destinations": [
            "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
          ],
          "referenceDocsUri": "string"
        }
      },
      "dotnetSettings": {
        "common": {
          "destinations": [
            "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
          ],
          "referenceDocsUri": "string"
        },
        "forcedNamespaceAliases": [
          "string"
        ],
        "handwrittenSignatures": [
          "string"
        ],
        "ignoredResources": [
          "string"
        ],
        "renamedResources": {
          "property1": "string",
          "property2": "string"
        },
        "renamedServices": {
          "property1": "string",
          "property2": "string"
        }
      },
      "goSettings": {
        "common": {
          "destinations": [
            "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
          ],
          "referenceDocsUri": "string"
        }
      },
      "javaSettings": {
        "common": {
          "destinations": [
            "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
          ],
          "referenceDocsUri": "string"
        },
        "libraryPackage": "string",
        "serviceClassNames": {
          "property1": "string",
          "property2": "string"
        }
      },
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "nodeSettings": {
        "common": {
          "destinations": [
            "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
          ],
          "referenceDocsUri": "string"
        }
      },
      "phpSettings": {
        "common": {
          "destinations": [
            "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
          ],
          "referenceDocsUri": "string"
        }
      },
      "pythonSettings": {
        "common": {
          "destinations": [
            "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
          ],
          "referenceDocsUri": "string"
        }
      },
      "restNumericEnums": true,
      "rubySettings": {
        "common": {
          "destinations": [
            "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
          ],
          "referenceDocsUri": "string"
        }
      },
      "version": "string"
    }
  ],
  "methodSettings": [
    {
      "longRunning": {
        "initialPollDelay": "string",
        "maxPollDelay": "string",
        "pollDelayMultiplier": 0,
        "totalPollTimeout": "string"
      },
      "selector": "string"
    }
  ],
  "newIssueUri": "string",
  "organization": "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED",
  "protoReferenceDocumentationUri": "string"
}
```

This message configures the settings for publishing [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from the service config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiShortName|string|false|none|Used as a tracking tag when collecting data about the APIs developer relations artifacts like docs, packages delivered to package managers, etc. Example: "speech".|
|codeownerGithubTeams|[string]|false|none|GitHub teams to be added to CODEOWNERS in the directory in GitHub containing source code for the client libraries for this API.|
|docTagPrefix|string|false|none|A prefix used in sample code when demarking regions to be included in documentation.|
|documentationUri|string|false|none|Link to product home page. Example: https://cloud.google.com/asset-inventory/docs/overview|
|githubLabel|string|false|none|GitHub label to apply to issues and pull requests opened for this API.|
|librarySettings|[[ClientLibrarySettings](#schemaclientlibrarysettings)]|false|none|Client library settings. If the same version string appears multiple times in this list, then the last one wins. Settings from earlier settings with the same version string are discarded.|
|methodSettings|[[MethodSettings](#schemamethodsettings)]|false|none|A list of API method settings, e.g. the behavior for methods that use the long-running operation pattern.|
|newIssueUri|string|false|none|Link to a *public* URI where users can report issues. Example: https://issuetracker.google.com/issues/new?component=190865&template=1161103|
|organization|string|false|none|For whom the client library is being published.|
|protoReferenceDocumentationUri|string|false|none|Optional link to proto reference documentation. Example: https://cloud.google.com/pubsub/lite/docs/reference/rpc|

#### Enumerated Values

|Property|Value|
|---|---|
|organization|CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED|
|organization|CLOUD|
|organization|ADS|
|organization|PHOTOS|
|organization|STREET_VIEW|
|organization|SHOPPING|

<h2 id="tocS_PythonSettings">PythonSettings</h2>
<!-- backwards compatibility -->
<a id="schemapythonsettings"></a>
<a id="schema_PythonSettings"></a>
<a id="tocSpythonsettings"></a>
<a id="tocspythonsettings"></a>

```json
{
  "common": {
    "destinations": [
      "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
    ],
    "referenceDocsUri": "string"
  }
}
```

Settings for Python client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[CommonLanguageSettings](#schemacommonlanguagesettings)|false|none|Some settings.|

<h2 id="tocS_Quota">Quota</h2>
<!-- backwards compatibility -->
<a id="schemaquota"></a>
<a id="schema_Quota"></a>
<a id="tocSquota"></a>
<a id="tocsquota"></a>

```json
{
  "limits": [
    {
      "defaultLimit": "string",
      "description": "string",
      "displayName": "string",
      "duration": "string",
      "freeTier": "string",
      "maxLimit": "string",
      "metric": "string",
      "name": "string",
      "unit": "string",
      "values": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "metricRules": [
    {
      "metricCosts": {
        "property1": "string",
        "property2": "string"
      },
      "selector": "string"
    }
  ]
}
```

Quota configuration helps to achieve fairness and budgeting in service usage. The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with corresponding costs. - The quota.limits defines limits on the metrics, which will be used for quota checks at runtime. An example quota configuration in yaml format: quota: limits: - name: apiWriteQpsPerProject metric: library.googleapis.com/write_calls unit: "1/min/{project}" # rate limit for consumer projects values: STANDARD: 10000 (The metric rules bind all methods to the read_calls metric, except for the UpdateBook and DeleteBook methods. These two methods are mapped to the write_calls metric, with the UpdateBook method consuming at twice rate as the DeleteBook method.) metric_rules: - selector: "*" metric_costs: library.googleapis.com/read_calls: 1 - selector: google.example.library.v1.LibraryService.UpdateBook metric_costs: library.googleapis.com/write_calls: 2 - selector: google.example.library.v1.LibraryService.DeleteBook metric_costs: library.googleapis.com/write_calls: 1 Corresponding Metric definition: metrics: - name: library.googleapis.com/read_calls display_name: Read requests metric_kind: DELTA value_type: INT64 - name: library.googleapis.com/write_calls display_name: Write requests metric_kind: DELTA value_type: INT64

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limits|[[QuotaLimit](#schemaquotalimit)]|false|none|List of QuotaLimit definitions for the service.|
|metricRules|[[MetricRule](#schemametricrule)]|false|none|List of MetricRule definitions, each one mapping a selected method to one or more metrics.|

<h2 id="tocS_QuotaLimit">QuotaLimit</h2>
<!-- backwards compatibility -->
<a id="schemaquotalimit"></a>
<a id="schema_QuotaLimit"></a>
<a id="tocSquotalimit"></a>
<a id="tocsquotalimit"></a>

```json
{
  "defaultLimit": "string",
  "description": "string",
  "displayName": "string",
  "duration": "string",
  "freeTier": "string",
  "maxLimit": "string",
  "metric": "string",
  "name": "string",
  "unit": "string",
  "values": {
    "property1": "string",
    "property2": "string"
  }
}
```

`QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLimit|string(int64)|false|none|Default number of tokens that can be consumed during the specified duration. This is the number of tokens assigned when a client application developer activates the service for his/her project. Specifying a value of 0 will block all requests. This can be used if you are provisioning quota to selected consumers and blocking others. Similarly, a value of -1 will indicate an unlimited quota. No other negative values are allowed. Used by group-based quotas only.|
|description|string|false|none|Optional. User-visible, extended description for this quota limit. Should be used only when more context is needed to understand this limit than provided by the limit's display name (see: `display_name`).|
|displayName|string|false|none|User-visible display name for this limit. Optional. If not set, the UI will provide a default display name based on the quota configuration. This field can be used to override the default display name generated from the configuration.|
|duration|string|false|none|Duration of this limit in textual notation. Must be "100s" or "1d". Used by group-based quotas only.|
|freeTier|string(int64)|false|none|Free tier value displayed in the Developers Console for this limit. The free tier is the number of tokens that will be subtracted from the billed amount when billing is enabled. This field can only be set on a limit with duration "1d", in a billable group; it is invalid on any other limit. If this field is not set, it defaults to 0, indicating that there is no free tier for this service. Used by group-based quotas only.|
|maxLimit|string(int64)|false|none|Maximum number of tokens that can be consumed during the specified duration. Client application developers can override the default limit up to this maximum. If specified, this value cannot be set to a value less than the default limit. If not specified, it is set to the default limit. To allow clients to apply overrides with no upper bound, set this to -1, indicating unlimited maximum quota. Used by group-based quotas only.|
|metric|string|false|none|The name of the metric this quota limit applies to. The quota limits with the same metric will be checked together during runtime. The metric must be defined within the service config.|
|name|string|false|none|Name of the quota limit. The name must be provided, and it must be unique within the service. The name can only include alphanumeric characters as well as '-'. The maximum length of the limit name is 64 characters.|
|unit|string|false|none|Specify the unit of the quota limit. It uses the same syntax as Metric.unit. The supported unit kinds are determined by the quota backend system. Here are some examples: * "1/min/{project}" for quota per minute per project. Note: the order of unit components is insignificant. The "1" at the beginning is required to follow the metric unit syntax.|
|values|object|false|none|Tiered limit values. You must specify this as a key:value pair, with an integer value that is the maximum number of requests allowed for the specified unit. Currently only STANDARD is supported.|

<h2 id="tocS_RubySettings">RubySettings</h2>
<!-- backwards compatibility -->
<a id="schemarubysettings"></a>
<a id="schema_RubySettings"></a>
<a id="tocSrubysettings"></a>
<a id="tocsrubysettings"></a>

```json
{
  "common": {
    "destinations": [
      "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
    ],
    "referenceDocsUri": "string"
  }
}
```

Settings for Ruby client libraries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[CommonLanguageSettings](#schemacommonlanguagesettings)|false|none|Some settings.|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "apis": [
    {
      "methods": [
        {
          "name": "string",
          "options": [
            {
              "name": "string",
              "value": {
                "property1": null,
                "property2": null
              }
            }
          ],
          "requestStreaming": true,
          "requestTypeUrl": "string",
          "responseStreaming": true,
          "responseTypeUrl": "string",
          "syntax": "SYNTAX_PROTO2"
        }
      ],
      "mixins": [
        {
          "name": "string",
          "root": "string"
        }
      ],
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "sourceContext": {
        "fileName": "string"
      },
      "syntax": "SYNTAX_PROTO2",
      "version": "string"
    }
  ],
  "authentication": {
    "providers": [
      {
        "audiences": "string",
        "authorizationUrl": "string",
        "id": "string",
        "issuer": "string",
        "jwksUri": "string",
        "jwtLocations": [
          {
            "cookie": "string",
            "header": "string",
            "query": "string",
            "valuePrefix": "string"
          }
        ]
      }
    ],
    "rules": [
      {
        "allowWithoutCredential": true,
        "oauth": {
          "canonicalScopes": "string"
        },
        "requirements": [
          {
            "audiences": "string",
            "providerId": "string"
          }
        ],
        "selector": "string"
      }
    ]
  },
  "backend": {
    "rules": [
      {
        "address": "string",
        "deadline": 0,
        "disableAuth": true,
        "jwtAudience": "string",
        "minDeadline": 0,
        "operationDeadline": 0,
        "overridesByRequestProtocol": {
          "property1": {},
          "property2": {}
        },
        "pathTranslation": "PATH_TRANSLATION_UNSPECIFIED",
        "protocol": "string",
        "selector": "string"
      }
    ]
  },
  "billing": {
    "consumerDestinations": [
      {
        "metrics": [
          "string"
        ],
        "monitoredResource": "string"
      }
    ]
  },
  "configVersion": 0,
  "context": {
    "rules": [
      {
        "allowedRequestExtensions": [
          "string"
        ],
        "allowedResponseExtensions": [
          "string"
        ],
        "provided": [
          "string"
        ],
        "requested": [
          "string"
        ],
        "selector": "string"
      }
    ]
  },
  "control": {
    "environment": "string"
  },
  "customError": {
    "rules": [
      {
        "isErrorType": true,
        "selector": "string"
      }
    ],
    "types": [
      "string"
    ]
  },
  "documentation": {
    "documentationRootUrl": "string",
    "overview": "string",
    "pages": [
      {
        "content": "string",
        "name": "string",
        "subpages": [
          {}
        ]
      }
    ],
    "rules": [
      {
        "deprecationDescription": "string",
        "description": "string",
        "selector": "string"
      }
    ],
    "serviceRootUrl": "string",
    "summary": "string"
  },
  "endpoints": [
    {
      "aliases": [
        "string"
      ],
      "allowCors": true,
      "name": "string",
      "target": "string"
    }
  ],
  "enums": [
    {
      "edition": "string",
      "enumvalue": [
        {
          "name": "string",
          "number": 0,
          "options": [
            {
              "name": "string",
              "value": {
                "property1": null,
                "property2": null
              }
            }
          ]
        }
      ],
      "name": "string",
      "options": [
        {
          "name": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "sourceContext": {
        "fileName": "string"
      },
      "syntax": "SYNTAX_PROTO2"
    }
  ],
  "http": {
    "fullyDecodeReservedExpansion": true,
    "rules": [
      {
        "additionalBindings": [
          {}
        ],
        "body": "string",
        "custom": {
          "kind": "string",
          "path": "string"
        },
        "delete": "string",
        "get": "string",
        "patch": "string",
        "post": "string",
        "put": "string",
        "responseBody": "string",
        "selector": "string"
      }
    ]
  },
  "id": "string",
  "logging": {
    "consumerDestinations": [
      {
        "logs": [
          "string"
        ],
        "monitoredResource": "string"
      }
    ],
    "producerDestinations": [
      {
        "logs": [
          "string"
        ],
        "monitoredResource": "string"
      }
    ]
  },
  "logs": [
    {
      "description": "string",
      "displayName": "string",
      "labels": [
        {
          "description": "string",
          "key": "string",
          "valueType": "STRING"
        }
      ],
      "name": "string"
    }
  ],
  "metrics": [
    {
      "description": "string",
      "displayName": "string",
      "labels": [
        {
          "description": "string",
          "key": "string",
          "valueType": "STRING"
        }
      ],
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "metadata": {
        "ingestDelay": "string",
        "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
        "samplePeriod": "string"
      },
      "metricKind": "METRIC_KIND_UNSPECIFIED",
      "monitoredResourceTypes": [
        "string"
      ],
      "name": "string",
      "type": "string",
      "unit": "string",
      "valueType": "VALUE_TYPE_UNSPECIFIED"
    }
  ],
  "monitoredResources": [
    {
      "description": "string",
      "displayName": "string",
      "labels": [
        {
          "description": "string",
          "key": "string",
          "valueType": "STRING"
        }
      ],
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "name": "string",
      "type": "string"
    }
  ],
  "monitoring": {
    "consumerDestinations": [
      {
        "metrics": [
          "string"
        ],
        "monitoredResource": "string"
      }
    ],
    "producerDestinations": [
      {
        "metrics": [
          "string"
        ],
        "monitoredResource": "string"
      }
    ]
  },
  "name": "string",
  "producerProjectId": "string",
  "publishing": {
    "apiShortName": "string",
    "codeownerGithubTeams": [
      "string"
    ],
    "docTagPrefix": "string",
    "documentationUri": "string",
    "githubLabel": "string",
    "librarySettings": [
      {
        "cppSettings": {
          "common": {
            "destinations": [
              "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
            ],
            "referenceDocsUri": "string"
          }
        },
        "dotnetSettings": {
          "common": {
            "destinations": [
              "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
            ],
            "referenceDocsUri": "string"
          },
          "forcedNamespaceAliases": [
            "string"
          ],
          "handwrittenSignatures": [
            "string"
          ],
          "ignoredResources": [
            "string"
          ],
          "renamedResources": {
            "property1": "string",
            "property2": "string"
          },
          "renamedServices": {
            "property1": "string",
            "property2": "string"
          }
        },
        "goSettings": {
          "common": {
            "destinations": [
              "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
            ],
            "referenceDocsUri": "string"
          }
        },
        "javaSettings": {
          "common": {
            "destinations": [
              "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
            ],
            "referenceDocsUri": "string"
          },
          "libraryPackage": "string",
          "serviceClassNames": {
            "property1": "string",
            "property2": "string"
          }
        },
        "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
        "nodeSettings": {
          "common": {
            "destinations": [
              "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
            ],
            "referenceDocsUri": "string"
          }
        },
        "phpSettings": {
          "common": {
            "destinations": [
              "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
            ],
            "referenceDocsUri": "string"
          }
        },
        "pythonSettings": {
          "common": {
            "destinations": [
              "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
            ],
            "referenceDocsUri": "string"
          }
        },
        "restNumericEnums": true,
        "rubySettings": {
          "common": {
            "destinations": [
              "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
            ],
            "referenceDocsUri": "string"
          }
        },
        "version": "string"
      }
    ],
    "methodSettings": [
      {
        "longRunning": {
          "initialPollDelay": "string",
          "maxPollDelay": "string",
          "pollDelayMultiplier": 0,
          "totalPollTimeout": "string"
        },
        "selector": "string"
      }
    ],
    "newIssueUri": "string",
    "organization": "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED",
    "protoReferenceDocumentationUri": "string"
  },
  "quota": {
    "limits": [
      {
        "defaultLimit": "string",
        "description": "string",
        "displayName": "string",
        "duration": "string",
        "freeTier": "string",
        "maxLimit": "string",
        "metric": "string",
        "name": "string",
        "unit": "string",
        "values": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "metricRules": [
      {
        "metricCosts": {
          "property1": "string",
          "property2": "string"
        },
        "selector": "string"
      }
    ]
  },
  "sourceInfo": {
    "sourceFiles": [
      {
        "property1": null,
        "property2": null
      }
    ]
  },
  "systemParameters": {
    "rules": [
      {
        "parameters": [
          {
            "httpHeader": "string",
            "name": "string",
            "urlQueryParameter": "string"
          }
        ],
        "selector": "string"
      }
    ]
  },
  "systemTypes": [
    {
      "edition": "string",
      "fields": [
        {
          "cardinality": "CARDINALITY_UNKNOWN",
          "defaultValue": "string",
          "jsonName": "string",
          "kind": "TYPE_UNKNOWN",
          "name": "string",
          "number": 0,
          "oneofIndex": 0,
          "options": [
            {
              "name": "string",
              "value": {
                "property1": null,
                "property2": null
              }
            }
          ],
          "packed": true,
          "typeUrl": "string"
        }
      ],
      "name": "string",
      "oneofs": [
        "string"
      ],
      "options": [
        {
          "name": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "sourceContext": {
        "fileName": "string"
      },
      "syntax": "SYNTAX_PROTO2"
    }
  ],
  "title": "string",
  "types": [
    {
      "edition": "string",
      "fields": [
        {
          "cardinality": "CARDINALITY_UNKNOWN",
          "defaultValue": "string",
          "jsonName": "string",
          "kind": "TYPE_UNKNOWN",
          "name": "string",
          "number": 0,
          "oneofIndex": 0,
          "options": [
            {
              "name": "string",
              "value": {
                "property1": null,
                "property2": null
              }
            }
          ],
          "packed": true,
          "typeUrl": "string"
        }
      ],
      "name": "string",
      "oneofs": [
        "string"
      ],
      "options": [
        {
          "name": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "sourceContext": {
        "fileName": "string"
      },
      "syntax": "SYNTAX_PROTO2"
    }
  ],
  "usage": {
    "producerNotificationChannel": "string",
    "requirements": [
      "string"
    ],
    "rules": [
      {
        "allowUnregisteredCalls": true,
        "selector": "string",
        "skipServiceControl": true
      }
    ]
  }
}
```

`Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apis|[[Api](#schemaapi)]|false|none|A list of API interfaces exported by this service. Only the `name` field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files.|
|authentication|[Authentication](#schemaauthentication)|false|none|Auth configuration.|
|backend|[Backend](#schemabackend)|false|none|API backend configuration.|
|billing|[Billing](#schemabilling)|false|none|Billing configuration.|
|configVersion|integer(uint32)|false|none|Obsolete. Do not use. This field has no semantic meaning. The service config compiler always sets this field to `3`.|
|context|[Context](#schemacontext)|false|none|Context configuration.|
|control|[Control](#schemacontrol)|false|none|Configuration for the service control plane.|
|customError|[CustomError](#schemacustomerror)|false|none|Custom error configuration.|
|documentation|[Documentation](#schemadocumentation)|false|none|Additional API documentation.|
|endpoints|[[Endpoint](#schemaendpoint)]|false|none|Configuration for network endpoints. If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs.|
|enums|[[Enum](#schemaenum)]|false|none|A list of all enum types included in this API service. Enums referenced directly or indirectly by the `apis` are automatically included. Enums which are not referenced but shall be included should be listed here by name by the configuration author. Example: enums: - name: google.someapi.v1.SomeEnum|
|http|[Http](#schemahttp)|false|none|HTTP configuration.|
|id|string|false|none|A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If empty, the server may choose to generate one instead.|
|logging|[Logging](#schemalogging)|false|none|Logging configuration.|
|logs|[[LogDescriptor](#schemalogdescriptor)]|false|none|Defines the logs used by this service.|
|metrics|[[MetricDescriptor](#schemametricdescriptor)]|false|none|Defines the metrics used by this service.|
|monitoredResources|[[MonitoredResourceDescriptor](#schemamonitoredresourcedescriptor)]|false|none|Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations.|
|monitoring|[Monitoring](#schemamonitoring)|false|none|Monitoring configuration.|
|name|string|false|none|The service name, which is a DNS-like logical identifier for the service, such as `calendar.googleapis.com`. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name.|
|producerProjectId|string|false|none|The Google project that owns this service.|
|publishing|[Publishing](#schemapublishing)|false|none|Settings for [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from APIs defined as protocol buffers.|
|quota|[Quota](#schemaquota)|false|none|Quota configuration.|
|sourceInfo|[SourceInfo](#schemasourceinfo)|false|none|Output only. The source information for this configuration if available.|
|systemParameters|[SystemParameters](#schemasystemparameters)|false|none|System parameter configuration.|
|systemTypes|[[Type](#schematype)]|false|none|A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF.|
|title|string|false|none|The product title for this service, it is the name displayed in Google Cloud Console.|
|types|[[Type](#schematype)]|false|none|A list of all proto message types included in this API service. Types referenced directly or indirectly by the `apis` are automatically included. Messages which are not referenced but shall be included, such as types used by the `google.protobuf.Any` type, should be listed here by name by the configuration author. Example: types: - name: google.protobuf.Int32|
|usage|[Usage](#schemausage)|false|none|Configuration controlling usage of this service.|

<h2 id="tocS_SourceContext">SourceContext</h2>
<!-- backwards compatibility -->
<a id="schemasourcecontext"></a>
<a id="schema_SourceContext"></a>
<a id="tocSsourcecontext"></a>
<a id="tocssourcecontext"></a>

```json
{
  "fileName": "string"
}
```

`SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|The path-qualified name of the .proto file that contained the associated protobuf element. For example: `"google/protobuf/source_context.proto"`.|

<h2 id="tocS_SourceInfo">SourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemasourceinfo"></a>
<a id="schema_SourceInfo"></a>
<a id="tocSsourceinfo"></a>
<a id="tocssourceinfo"></a>

```json
{
  "sourceFiles": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Source information used to create a Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceFiles|[object]|false|none|All files used during config generation.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

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

<h2 id="tocS_SystemParameter">SystemParameter</h2>
<!-- backwards compatibility -->
<a id="schemasystemparameter"></a>
<a id="schema_SystemParameter"></a>
<a id="tocSsystemparameter"></a>
<a id="tocssystemparameter"></a>

```json
{
  "httpHeader": "string",
  "name": "string",
  "urlQueryParameter": "string"
}
```

Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpHeader|string|false|none|Define the HTTP header name to use for the parameter. It is case insensitive.|
|name|string|false|none|Define the name of the parameter, such as "api_key" . It is case sensitive.|
|urlQueryParameter|string|false|none|Define the URL query parameter name to use for the parameter. It is case sensitive.|

<h2 id="tocS_SystemParameterRule">SystemParameterRule</h2>
<!-- backwards compatibility -->
<a id="schemasystemparameterrule"></a>
<a id="schema_SystemParameterRule"></a>
<a id="tocSsystemparameterrule"></a>
<a id="tocssystemparameterrule"></a>

```json
{
  "parameters": [
    {
      "httpHeader": "string",
      "name": "string",
      "urlQueryParameter": "string"
    }
  ],
  "selector": "string"
}
```

Define a system parameter rule mapping system parameter definitions to methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|[[SystemParameter](#schemasystemparameter)]|false|none|Define parameters. Multiple names may be defined for a parameter. For a given method call, only one of them should be used. If multiple names are used the behavior is implementation-dependent. If none of the specified names are present the behavior is parameter-dependent.|
|selector|string|false|none|Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details.|

<h2 id="tocS_SystemParameters">SystemParameters</h2>
<!-- backwards compatibility -->
<a id="schemasystemparameters"></a>
<a id="schema_SystemParameters"></a>
<a id="tocSsystemparameters"></a>
<a id="tocssystemparameters"></a>

```json
{
  "rules": [
    {
      "parameters": [
        {
          "httpHeader": "string",
          "name": "string",
          "urlQueryParameter": "string"
        }
      ],
      "selector": "string"
    }
  ]
}
```

### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[SystemParameterRule](#schemasystemparameterrule)]|false|none|Define system parameters. The parameters defined here will override the default parameters implemented by the system. If this field is missing from the service config, default system parameters will be used. Default system parameters and names is implementation-dependent. Example: define api key for all methods system_parameters rules: - selector: "*" parameters: - name: api_key url_query_parameter: api_key Example: define 2 api key names for a specific method. system_parameters rules: - selector: "/ListShelves" parameters: - name: api_key http_header: Api-Key1 - name: api_key http_header: Api-Key2 **NOTE:** All service configuration rules follow "last one wins" order.|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
{
  "edition": "string",
  "fields": [
    {
      "cardinality": "CARDINALITY_UNKNOWN",
      "defaultValue": "string",
      "jsonName": "string",
      "kind": "TYPE_UNKNOWN",
      "name": "string",
      "number": 0,
      "oneofIndex": 0,
      "options": [
        {
          "name": "string",
          "value": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "packed": true,
      "typeUrl": "string"
    }
  ],
  "name": "string",
  "oneofs": [
    "string"
  ],
  "options": [
    {
      "name": "string",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "sourceContext": {
    "fileName": "string"
  },
  "syntax": "SYNTAX_PROTO2"
}
```

A protocol buffer message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|edition|string|false|none|The source edition string, only valid when syntax is SYNTAX_EDITIONS.|
|fields|[[Field](#schemafield)]|false|none|The list of fields.|
|name|string|false|none|The fully qualified message name.|
|oneofs|[string]|false|none|The list of types appearing in `oneof` definitions in this type.|
|options|[[Option](#schemaoption)]|false|none|The protocol buffer options.|
|sourceContext|[SourceContext](#schemasourcecontext)|false|none|The source context.|
|syntax|string|false|none|The source syntax.|

#### Enumerated Values

|Property|Value|
|---|---|
|syntax|SYNTAX_PROTO2|
|syntax|SYNTAX_PROTO3|
|syntax|SYNTAX_EDITIONS|

<h2 id="tocS_Usage">Usage</h2>
<!-- backwards compatibility -->
<a id="schemausage"></a>
<a id="schema_Usage"></a>
<a id="tocSusage"></a>
<a id="tocsusage"></a>

```json
{
  "producerNotificationChannel": "string",
  "requirements": [
    "string"
  ],
  "rules": [
    {
      "allowUnregisteredCalls": true,
      "selector": "string",
      "skipServiceControl": true
    }
  ]
}
```

Configuration controlling usage of a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|producerNotificationChannel|string|false|none|The full resource name of a channel used for sending notifications to the service producer. Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview.|
|requirements|[string]|false|none|Requirements that must be satisfied before a consumer project can use the service. Each requirement is of the form /; for example 'serviceusage.googleapis.com/billing-enabled'. For Google APIs, a Terms of Service requirement must be included here. Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud". Other Google APIs should include "serviceusage.googleapis.com/tos/universal". Additional ToS can be included based on the business needs.|
|rules|[[UsageRule](#schemausagerule)]|false|none|A list of usage rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.|

<h2 id="tocS_UsageRule">UsageRule</h2>
<!-- backwards compatibility -->
<a id="schemausagerule"></a>
<a id="schema_UsageRule"></a>
<a id="tocSusagerule"></a>
<a id="tocsusagerule"></a>

```json
{
  "allowUnregisteredCalls": true,
  "selector": "string",
  "skipServiceControl": true
}
```

Usage configuration rules for the service. NOTE: Under development. Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls. Example of an API that wants to allow unregistered calls for entire service. usage: rules: - selector: "*" allow_unregistered_calls: true Example of a method that wants to allow unregistered calls. usage: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allow_unregistered_calls: true

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowUnregisteredCalls|boolean|false|none|If true, the selected method allows unregistered calls, e.g. calls that don't identify any user or application.|
|selector|string|false|none|Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details.|
|skipServiceControl|boolean|false|none|If true, the selected method should skip service control and the control plane features, such as quota and billing, will not be available. This flag is used by Google Cloud Endpoints to bypass checks for internal methods, such as service health check methods.|

<h2 id="tocS_V1Beta1BatchCreateProducerOverridesResponse">V1Beta1BatchCreateProducerOverridesResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1batchcreateproduceroverridesresponse"></a>
<a id="schema_V1Beta1BatchCreateProducerOverridesResponse"></a>
<a id="tocSv1beta1batchcreateproduceroverridesresponse"></a>
<a id="tocsv1beta1batchcreateproduceroverridesresponse"></a>

```json
{
  "overrides": [
    {
      "adminOverrideAncestor": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "metric": "string",
      "name": "string",
      "overrideValue": "string",
      "unit": "string"
    }
  ]
}
```

Response message for BatchCreateProducerOverrides

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overrides|[[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)]|false|none|The overrides that were created.|

<h2 id="tocS_V1Beta1ConsumerQuotaLimit">V1Beta1ConsumerQuotaLimit</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1consumerquotalimit"></a>
<a id="schema_V1Beta1ConsumerQuotaLimit"></a>
<a id="tocSv1beta1consumerquotalimit"></a>
<a id="tocsv1beta1consumerquotalimit"></a>

```json
{
  "isPrecise": true,
  "metric": "string",
  "name": "string",
  "quotaBuckets": [
    {
      "adminOverride": {
        "adminOverrideAncestor": "string",
        "dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "metric": "string",
        "name": "string",
        "overrideValue": "string",
        "unit": "string"
      },
      "consumerOverride": {
        "adminOverrideAncestor": "string",
        "dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "metric": "string",
        "name": "string",
        "overrideValue": "string",
        "unit": "string"
      },
      "defaultLimit": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "effectiveLimit": "string",
      "producerOverride": {
        "adminOverrideAncestor": "string",
        "dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "metric": "string",
        "name": "string",
        "overrideValue": "string",
        "unit": "string"
      }
    }
  ],
  "supportedLocations": [
    "string"
  ],
  "unit": "string"
}
```

Consumer quota settings for a quota limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPrecise|boolean|false|none|Whether this limit is precise or imprecise.|
|metric|string|false|none|The name of the parent metric of this limit. An example name would be: `compute.googleapis.com/cpus`|
|name|string|false|none|The resource name of the quota limit. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future.|
|quotaBuckets|[[V1Beta1QuotaBucket](#schemav1beta1quotabucket)]|false|none|Summary of the enforced quota buckets, organized by quota dimension, ordered from least specific to most specific (for example, the global default bucket, with no quota dimensions, will always appear first).|
|supportedLocations|[string]|false|none|List of all supported locations. This field is present only if the limit has a {region} or {zone} dimension.|
|unit|string|false|none|The limit unit. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.|

<h2 id="tocS_V1Beta1ConsumerQuotaMetric">V1Beta1ConsumerQuotaMetric</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1consumerquotametric"></a>
<a id="schema_V1Beta1ConsumerQuotaMetric"></a>
<a id="tocSv1beta1consumerquotametric"></a>
<a id="tocsv1beta1consumerquotametric"></a>

```json
{
  "consumerQuotaLimits": [
    {
      "isPrecise": true,
      "metric": "string",
      "name": "string",
      "quotaBuckets": [
        {
          "adminOverride": {
            "adminOverrideAncestor": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "metric": "string",
            "name": "string",
            "overrideValue": "string",
            "unit": "string"
          },
          "consumerOverride": {
            "adminOverrideAncestor": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "metric": "string",
            "name": "string",
            "overrideValue": "string",
            "unit": "string"
          },
          "defaultLimit": "string",
          "dimensions": {
            "property1": "string",
            "property2": "string"
          },
          "effectiveLimit": "string",
          "producerOverride": {
            "adminOverrideAncestor": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "metric": "string",
            "name": "string",
            "overrideValue": "string",
            "unit": "string"
          }
        }
      ],
      "supportedLocations": [
        "string"
      ],
      "unit": "string"
    }
  ],
  "descendantConsumerQuotaLimits": [
    {
      "isPrecise": true,
      "metric": "string",
      "name": "string",
      "quotaBuckets": [
        {
          "adminOverride": {
            "adminOverrideAncestor": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "metric": "string",
            "name": "string",
            "overrideValue": "string",
            "unit": "string"
          },
          "consumerOverride": {
            "adminOverrideAncestor": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "metric": "string",
            "name": "string",
            "overrideValue": "string",
            "unit": "string"
          },
          "defaultLimit": "string",
          "dimensions": {
            "property1": "string",
            "property2": "string"
          },
          "effectiveLimit": "string",
          "producerOverride": {
            "adminOverrideAncestor": "string",
            "dimensions": {
              "property1": "string",
              "property2": "string"
            },
            "metric": "string",
            "name": "string",
            "overrideValue": "string",
            "unit": "string"
          }
        }
      ],
      "supportedLocations": [
        "string"
      ],
      "unit": "string"
    }
  ],
  "displayName": "string",
  "metric": "string",
  "name": "string",
  "unit": "string"
}
```

Consumer quota settings for a quota metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerQuotaLimits|[[V1Beta1ConsumerQuotaLimit](#schemav1beta1consumerquotalimit)]|false|none|The consumer quota for each quota limit defined on the metric.|
|descendantConsumerQuotaLimits|[[V1Beta1ConsumerQuotaLimit](#schemav1beta1consumerquotalimit)]|false|none|The quota limits targeting the descendant containers of the consumer in request. If the consumer in request is of type `organizations` or `folders`, the field will list per-project limits in the metric; if the consumer in request is of type `project`, the field will be empty. The `quota_buckets` field of each descendant consumer quota limit will not be populated.|
|displayName|string|false|none|The display name of the metric. An example name would be: "CPUs"|
|metric|string|false|none|The name of the metric. An example name would be: `compute.googleapis.com/cpus`|
|name|string|false|none|The resource name of the quota settings on this metric for this consumer. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus` The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future.|
|unit|string|false|none|The units in which the metric value is reported.|

<h2 id="tocS_V1Beta1DisableConsumerResponse">V1Beta1DisableConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1disableconsumerresponse"></a>
<a id="schema_V1Beta1DisableConsumerResponse"></a>
<a id="tocSv1beta1disableconsumerresponse"></a>
<a id="tocsv1beta1disableconsumerresponse"></a>

```json
{}
```

Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

<h2 id="tocS_V1Beta1EnableConsumerResponse">V1Beta1EnableConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1enableconsumerresponse"></a>
<a id="schema_V1Beta1EnableConsumerResponse"></a>
<a id="tocSv1beta1enableconsumerresponse"></a>
<a id="tocsv1beta1enableconsumerresponse"></a>

```json
{}
```

Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

<h2 id="tocS_V1Beta1GenerateServiceIdentityResponse">V1Beta1GenerateServiceIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1generateserviceidentityresponse"></a>
<a id="schema_V1Beta1GenerateServiceIdentityResponse"></a>
<a id="tocSv1beta1generateserviceidentityresponse"></a>
<a id="tocsv1beta1generateserviceidentityresponse"></a>

```json
{
  "identity": {
    "email": "string",
    "name": "string",
    "tag": "string",
    "uniqueId": "string"
  }
}
```

Response message for the `GenerateServiceIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|[V1Beta1ServiceIdentity](#schemav1beta1serviceidentity)|false|none|ServiceIdentity that was created or retrieved.|

<h2 id="tocS_V1Beta1ImportProducerOverridesRequest">V1Beta1ImportProducerOverridesRequest</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1importproduceroverridesrequest"></a>
<a id="schema_V1Beta1ImportProducerOverridesRequest"></a>
<a id="tocSv1beta1importproduceroverridesrequest"></a>
<a id="tocsv1beta1importproduceroverridesrequest"></a>

```json
{
  "force": true,
  "forceOnly": [
    "QUOTA_SAFETY_CHECK_UNSPECIFIED"
  ],
  "inlineSource": {
    "overrides": [
      {
        "adminOverrideAncestor": "string",
        "dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "metric": "string",
        "name": "string",
        "overrideValue": "string",
        "unit": "string"
      }
    ]
  }
}
```

Request message for ImportProducerOverrides

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|Whether to force the creation of the quota overrides. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.|
|forceOnly|[string]|false|none|The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.|
|inlineSource|[V1Beta1OverrideInlineSource](#schemav1beta1overrideinlinesource)|false|none|The import data is specified in the request message itself|

#### Enumerated Values

|Property|Value|
|---|---|
|forceOnly|QUOTA_SAFETY_CHECK_UNSPECIFIED|
|forceOnly|LIMIT_DECREASE_BELOW_USAGE|
|forceOnly|LIMIT_DECREASE_PERCENTAGE_TOO_HIGH|

<h2 id="tocS_V1Beta1ImportProducerOverridesResponse">V1Beta1ImportProducerOverridesResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1importproduceroverridesresponse"></a>
<a id="schema_V1Beta1ImportProducerOverridesResponse"></a>
<a id="tocSv1beta1importproduceroverridesresponse"></a>
<a id="tocsv1beta1importproduceroverridesresponse"></a>

```json
{
  "overrides": [
    {
      "adminOverrideAncestor": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "metric": "string",
      "name": "string",
      "overrideValue": "string",
      "unit": "string"
    }
  ]
}
```

Response message for ImportProducerOverrides

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overrides|[[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)]|false|none|The overrides that were created from the imported data.|

<h2 id="tocS_V1Beta1ImportProducerQuotaPoliciesResponse">V1Beta1ImportProducerQuotaPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1importproducerquotapoliciesresponse"></a>
<a id="schema_V1Beta1ImportProducerQuotaPoliciesResponse"></a>
<a id="tocSv1beta1importproducerquotapoliciesresponse"></a>
<a id="tocsv1beta1importproducerquotapoliciesresponse"></a>

```json
{
  "policies": [
    {
      "container": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "metric": "string",
      "name": "string",
      "policyValue": "string",
      "unit": "string"
    }
  ]
}
```

Response message for ImportProducerQuotaPolicies

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policies|[[V1Beta1ProducerQuotaPolicy](#schemav1beta1producerquotapolicy)]|false|none|The policies that were created from the imported data.|

<h2 id="tocS_V1Beta1ListConsumerQuotaMetricsResponse">V1Beta1ListConsumerQuotaMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1listconsumerquotametricsresponse"></a>
<a id="schema_V1Beta1ListConsumerQuotaMetricsResponse"></a>
<a id="tocSv1beta1listconsumerquotametricsresponse"></a>
<a id="tocsv1beta1listconsumerquotametricsresponse"></a>

```json
{
  "metrics": [
    {
      "consumerQuotaLimits": [
        {
          "isPrecise": true,
          "metric": "string",
          "name": "string",
          "quotaBuckets": [
            {
              "adminOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              },
              "consumerOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              },
              "defaultLimit": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "effectiveLimit": "string",
              "producerOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              }
            }
          ],
          "supportedLocations": [
            "string"
          ],
          "unit": "string"
        }
      ],
      "descendantConsumerQuotaLimits": [
        {
          "isPrecise": true,
          "metric": "string",
          "name": "string",
          "quotaBuckets": [
            {
              "adminOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              },
              "consumerOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              },
              "defaultLimit": "string",
              "dimensions": {
                "property1": "string",
                "property2": "string"
              },
              "effectiveLimit": "string",
              "producerOverride": {
                "adminOverrideAncestor": "string",
                "dimensions": {
                  "property1": "string",
                  "property2": "string"
                },
                "metric": "string",
                "name": "string",
                "overrideValue": "string",
                "unit": "string"
              }
            }
          ],
          "supportedLocations": [
            "string"
          ],
          "unit": "string"
        }
      ],
      "displayName": "string",
      "metric": "string",
      "name": "string",
      "unit": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListConsumerQuotaMetrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[[V1Beta1ConsumerQuotaMetric](#schemav1beta1consumerquotametric)]|false|none|Quota settings for the consumer, organized by quota metric.|
|nextPageToken|string|false|none|Token identifying which result to start with; returned by a previous list call.|

<h2 id="tocS_V1Beta1ListProducerOverridesResponse">V1Beta1ListProducerOverridesResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1listproduceroverridesresponse"></a>
<a id="schema_V1Beta1ListProducerOverridesResponse"></a>
<a id="tocSv1beta1listproduceroverridesresponse"></a>
<a id="tocsv1beta1listproduceroverridesresponse"></a>

```json
{
  "nextPageToken": "string",
  "overrides": [
    {
      "adminOverrideAncestor": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "metric": "string",
      "name": "string",
      "overrideValue": "string",
      "unit": "string"
    }
  ]
}
```

Response message for ListProducerOverrides.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token identifying which result to start with; returned by a previous list call.|
|overrides|[[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)]|false|none|Producer overrides on this limit.|

<h2 id="tocS_V1Beta1OverrideInlineSource">V1Beta1OverrideInlineSource</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1overrideinlinesource"></a>
<a id="schema_V1Beta1OverrideInlineSource"></a>
<a id="tocSv1beta1overrideinlinesource"></a>
<a id="tocsv1beta1overrideinlinesource"></a>

```json
{
  "overrides": [
    {
      "adminOverrideAncestor": "string",
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "metric": "string",
      "name": "string",
      "overrideValue": "string",
      "unit": "string"
    }
  ]
}
```

Import data embedded in the request message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overrides|[[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)]|false|none|The overrides to create. Each override must have a value for 'metric' and 'unit', to specify which metric and which limit the override should be applied to. The 'name' field of the override does not need to be set; it is ignored.|

<h2 id="tocS_V1Beta1ProducerQuotaPolicy">V1Beta1ProducerQuotaPolicy</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1producerquotapolicy"></a>
<a id="schema_V1Beta1ProducerQuotaPolicy"></a>
<a id="tocSv1beta1producerquotapolicy"></a>
<a id="tocsv1beta1producerquotapolicy"></a>

```json
{
  "container": "string",
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "metric": "string",
  "name": "string",
  "policyValue": "string",
  "unit": "string"
}
```

Quota policy created by service producer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|string|false|none|The cloud resource container at which the quota policy is created. The format is {container_type}/{container_number}|
|dimensions|object|false|none| If this map is nonempty, then this policy applies only to specific values for dimensions defined in the limit unit. For example, a policy on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the policy is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota polcies that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map.|
|metric|string|false|none|The name of the metric to which this policy applies. An example name would be: `compute.googleapis.com/cpus`|
|name|string|false|none|The resource name of the producer policy. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d`|
|policyValue|string(int64)|false|none|The quota policy value. Can be any nonnegative integer, or -1 (unlimited quota).|
|unit|string|false|none|The limit unit of the limit to which this policy applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.|

<h2 id="tocS_V1Beta1QuotaBucket">V1Beta1QuotaBucket</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1quotabucket"></a>
<a id="schema_V1Beta1QuotaBucket"></a>
<a id="tocSv1beta1quotabucket"></a>
<a id="tocsv1beta1quotabucket"></a>

```json
{
  "adminOverride": {
    "adminOverrideAncestor": "string",
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "metric": "string",
    "name": "string",
    "overrideValue": "string",
    "unit": "string"
  },
  "consumerOverride": {
    "adminOverrideAncestor": "string",
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "metric": "string",
    "name": "string",
    "overrideValue": "string",
    "unit": "string"
  },
  "defaultLimit": "string",
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "effectiveLimit": "string",
  "producerOverride": {
    "adminOverrideAncestor": "string",
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "metric": "string",
    "name": "string",
    "overrideValue": "string",
    "unit": "string"
  }
}
```

A quota bucket is a quota provisioning unit for a specific set of dimensions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminOverride|[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)|false|none|Admin override on this quota bucket.|
|consumerOverride|[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)|false|none|Consumer override on this quota bucket.|
|defaultLimit|string(int64)|false|none|The default limit of this quota bucket, as specified by the service configuration.|
|dimensions|object|false|none|The dimensions of this quota bucket. If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override. If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map. For example, if the map has key "region" and value "us-east-1", then the specified effective limit is only effective in that region, and the specified overrides apply only in that region.|
|effectiveLimit|string(int64)|false|none|The effective limit of this quota bucket. Equal to default_limit if there are no overrides.|
|producerOverride|[V1Beta1QuotaOverride](#schemav1beta1quotaoverride)|false|none|Producer override on this quota bucket.|

<h2 id="tocS_V1Beta1QuotaOverride">V1Beta1QuotaOverride</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1quotaoverride"></a>
<a id="schema_V1Beta1QuotaOverride"></a>
<a id="tocSv1beta1quotaoverride"></a>
<a id="tocsv1beta1quotaoverride"></a>

```json
{
  "adminOverrideAncestor": "string",
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "metric": "string",
  "name": "string",
  "overrideValue": "string",
  "unit": "string"
}
```

A quota override

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminOverrideAncestor|string|false|none|The resource name of the ancestor that requested the override. For example: "organizations/12345" or "folders/67890". Used by admin overrides only.|
|dimensions|object|false|none| If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota overrides that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map.|
|metric|string|false|none|The name of the metric to which this override applies. An example name would be: `compute.googleapis.com/cpus`|
|name|string|false|none|The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`|
|overrideValue|string(int64)|false|none|The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).|
|unit|string|false|none|The limit unit of the limit to which this override applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.|

<h2 id="tocS_V1Beta1RefreshConsumerResponse">V1Beta1RefreshConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1refreshconsumerresponse"></a>
<a id="schema_V1Beta1RefreshConsumerResponse"></a>
<a id="tocSv1beta1refreshconsumerresponse"></a>
<a id="tocsv1beta1refreshconsumerresponse"></a>

```json
{}
```

Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

<h2 id="tocS_V1Beta1ServiceIdentity">V1Beta1ServiceIdentity</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1serviceidentity"></a>
<a id="schema_V1Beta1ServiceIdentity"></a>
<a id="tocSv1beta1serviceidentity"></a>
<a id="tocsv1beta1serviceidentity"></a>

```json
{
  "email": "string",
  "name": "string",
  "tag": "string",
  "uniqueId": "string"
}
```

A service identity in the Identity and Access Management API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the service identity.|
|name|string|false|none|P4 service identity resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceIdentities/default`|
|tag|string|false|none|The P4 service identity configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to "default".|
|uniqueId|string|false|none|The unique and stable id of the service identity.|

<h2 id="tocS_V1beta1AddVisibilityLabelsResponse">V1beta1AddVisibilityLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1addvisibilitylabelsresponse"></a>
<a id="schema_V1beta1AddVisibilityLabelsResponse"></a>
<a id="tocSv1beta1addvisibilitylabelsresponse"></a>
<a id="tocsv1beta1addvisibilitylabelsresponse"></a>

```json
{
  "labels": [
    "string"
  ]
}
```

Response message for the `AddVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|false|none|The updated set of visibility labels for this consumer on this service.|

<h2 id="tocS_V1beta1DefaultIdentity">V1beta1DefaultIdentity</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1defaultidentity"></a>
<a id="schema_V1beta1DefaultIdentity"></a>
<a id="tocSv1beta1defaultidentity"></a>
<a id="tocsv1beta1defaultidentity"></a>

```json
{
  "email": "string",
  "name": "string",
  "tag": "string",
  "uniqueId": "string"
}
```

A default identity in the Identity and Access Management API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the default identity.|
|name|string|false|none|Default identity resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/defaultIdentity`|
|tag|string|false|none|The Default Identity tag. If specified when creating the account, the tag must be present in activation_grants. If not specified when creating the account, the tag is set to the tag specified in activation_grants.|
|uniqueId|string|false|none|The unique and stable id of the default identity.|

<h2 id="tocS_V1beta1DisableConsumerResponse">V1beta1DisableConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1disableconsumerresponse-1"></a>
<a id="schema_V1beta1DisableConsumerResponse"></a>
<a id="tocSv1beta1disableconsumerresponse-1"></a>
<a id="tocsv1beta1disableconsumerresponse-1"></a>

```json
{}
```

Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

<h2 id="tocS_V1beta1EnableConsumerResponse">V1beta1EnableConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1enableconsumerresponse-1"></a>
<a id="schema_V1beta1EnableConsumerResponse"></a>
<a id="tocSv1beta1enableconsumerresponse-1"></a>
<a id="tocsv1beta1enableconsumerresponse-1"></a>

```json
{}
```

Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

<h2 id="tocS_V1beta1GenerateDefaultIdentityResponse">V1beta1GenerateDefaultIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1generatedefaultidentityresponse"></a>
<a id="schema_V1beta1GenerateDefaultIdentityResponse"></a>
<a id="tocSv1beta1generatedefaultidentityresponse"></a>
<a id="tocsv1beta1generatedefaultidentityresponse"></a>

```json
{
  "attachStatus": "ATTACH_STATUS_UNSPECIFIED",
  "identity": {
    "email": "string",
    "name": "string",
    "tag": "string",
    "uniqueId": "string"
  },
  "role": "string"
}
```

Response message for the `GenerateDefaultIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachStatus|string|false|none|Status of the role attachment. Under development (go/si-attach-role), currently always return ATTACH_STATUS_UNSPECIFIED)|
|identity|[V1beta1DefaultIdentity](#schemav1beta1defaultidentity)|false|none|DefaultIdentity that was created or retrieved.|
|role|string|false|none|Role attached to consumer project. Empty if not attached in this request. (Under development, currently always return empty.)|

#### Enumerated Values

|Property|Value|
|---|---|
|attachStatus|ATTACH_STATUS_UNSPECIFIED|
|attachStatus|ATTACHED|
|attachStatus|ATTACH_SKIPPED|
|attachStatus|PREVIOUSLY_ATTACHED|
|attachStatus|ATTACH_DENIED_BY_ORG_POLICY|

<h2 id="tocS_V1beta1GenerateServiceAccountResponse">V1beta1GenerateServiceAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1generateserviceaccountresponse"></a>
<a id="schema_V1beta1GenerateServiceAccountResponse"></a>
<a id="tocSv1beta1generateserviceaccountresponse"></a>
<a id="tocsv1beta1generateserviceaccountresponse"></a>

```json
{
  "account": {
    "email": "string",
    "iamAccountName": "string",
    "name": "string",
    "tag": "string",
    "uniqueId": "string"
  }
}
```

Response message for the `GenerateServiceAccount` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[V1beta1ServiceAccount](#schemav1beta1serviceaccount)|false|none|ServiceAccount that was created or retrieved.|

<h2 id="tocS_V1beta1RefreshConsumerResponse">V1beta1RefreshConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1refreshconsumerresponse-1"></a>
<a id="schema_V1beta1RefreshConsumerResponse"></a>
<a id="tocSv1beta1refreshconsumerresponse-1"></a>
<a id="tocsv1beta1refreshconsumerresponse-1"></a>

```json
{}
```

Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

<h2 id="tocS_V1beta1RemoveVisibilityLabelsResponse">V1beta1RemoveVisibilityLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1removevisibilitylabelsresponse"></a>
<a id="schema_V1beta1RemoveVisibilityLabelsResponse"></a>
<a id="tocSv1beta1removevisibilitylabelsresponse"></a>
<a id="tocsv1beta1removevisibilitylabelsresponse"></a>

```json
{
  "labels": [
    "string"
  ]
}
```

Response message for the `RemoveVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|false|none|The updated set of visibility labels for this consumer on this service.|

<h2 id="tocS_V1beta1ServiceAccount">V1beta1ServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemav1beta1serviceaccount"></a>
<a id="schema_V1beta1ServiceAccount"></a>
<a id="tocSv1beta1serviceaccount"></a>
<a id="tocsv1beta1serviceaccount"></a>

```json
{
  "email": "string",
  "iamAccountName": "string",
  "name": "string",
  "tag": "string",
  "uniqueId": "string"
}
```

A service account in the Identity and Access Management API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the service account.|
|iamAccountName|string|false|none|Deprecated. See b/136209818.|
|name|string|false|none|P4 SA resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceAccounts/default`|
|tag|string|false|none|The P4 SA configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to "default".|
|uniqueId|string|false|none|The unique and stable id of the service account.|
