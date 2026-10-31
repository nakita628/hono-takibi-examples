<h1 id="configcat-public-management-api">ConfigCat Public Management API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

**Base API URL**: https://api.configcat.com

If you prefer the swagger documentation, you can find it here: [Swagger UI](https://api.configcat.com/swagger).

The purpose of this API is to access the ConfigCat platform programmatically. 
You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat. 

The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON 
and JSON+HAL format. Do not use this API for accessing and evaluating feature flag values. Use the [SDKs instead](https://configcat.com/docs/sdk-reference/overview).


# OpenAPI Specification

The complete specification is publicly available here: [swagger.json](v1/swagger.json). 
You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or
[Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.

# Authentication
This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication). 

<!-- ReDoc-Inject: <security-definitions> -->

# Throttling and rate limits
All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:

| Header | Description |
| :- | :- |
| X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. |
| X-Rate-Limit-Reset     | The time	when the current rate limit period resets.						  |

When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header.

Base URLs:

* <a href="https://api.configcat.com">https://api.configcat.com</a>

<a href="https://configcat.com/termsofserviceagreement">Terms of service</a>
Email: <a href="mailto:support@configcat.com">ConfigCat</a> 
Web: <a href="https://configcat.com">ConfigCat</a> 

# Authentication

- HTTP Authentication, scheme: basic To authenticate with the API you have to fill the `Authorization` HTTP request header with your Public API credentials.

You can create your credentials on the <a target="_blank" href="https://app.configcat.com/my-account/public-api-credentials">Public API credentials management page</a>.

<h1 id="configcat-public-management-api-feature-flag-setting-values-using-sdk-key">Feature Flag &amp; Setting values using SDK Key</h1>

With these endpoints you can control how your existing Feature Flags and Settings should serve their values. 
You can turn Feature Flags on or off, update Setting values and also add, remove or change the order of Percentage and Targeting Rules.

These endpoints are determining the Environment and Config by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in
the `X-CONFIGCAT-SDKKEY` request header. To identify the desired Feature Flag or Setting to change, 
you can use either its `settingId` or `key` attribute. You can get those attributes 
from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.

## Get value

<a id="opIdget-setting-value-by-sdkkey"></a>

> Code samples

```bash
curl https://example.com/v1/settings/string/value \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/settings/{settingKeyOrId}/value`

This endpoint returns the value of a Feature Flag or Setting 
in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).

<h3 id="get-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|settingKeyOrId|path|string|true|The key or id of the Setting.|
|X-CONFIGCAT-SDKKEY|header|string|false|The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)|

> Example responses

> 200 Response

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "integrationLinks": [
    {
      "description": "string",
      "integrationLinkType": "trello",
      "key": "string",
      "url": "string"
    }
  ],
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "readOnly": true,
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "settingTags": [
    {
      "color": "string",
      "name": "string",
      "settingTagId": 0,
      "tagId": 0
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

<h3 id="get-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SettingValueModel](#schemasettingvaluemodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Replace value

<a id="opIdreplace-setting-value-by-sdkkey"></a>

> Code samples

```bash
curl https://example.com/v1/settings/string/value \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "rolloutPercentageItems": [
      {
        "percentage": 30,
        "value": true
      },
      {
        "percentage": 70,
        "value": false
      }
    ],
    "value": true
  }'
```

`PUT /v1/settings/{settingKeyOrId}/value`

This endpoint replaces the value of a Feature Flag or Setting 
in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change to its original state. Not listing one means that it will reset.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send a replace request body as below:
```
{
	"value": true
}
```
Then besides that the default served value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"rolloutPercentageItems": [],
	"rolloutRules": [],
	"value": true
}
```

> Body parameter

```json
{
  "rolloutPercentageItems": [
    {
      "percentage": 30,
      "value": true
    },
    {
      "percentage": 70,
      "value": false
    }
  ],
  "value": true
}
```

<h3 id="replace-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|settingKeyOrId|path|string|true|The key or id of the Setting.|
|reason|query|string|false|The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.|
|X-CONFIGCAT-SDKKEY|header|string|false|The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)|
|body|body|[UpdateSettingValueModel](#schemaupdatesettingvaluemodel)|true|none|
|» rolloutPercentageItems|body|[[RolloutPercentageItemModel](#schemarolloutpercentageitemmodel)]|false|The percentage rule collection.|
|» rolloutRules|body|[[RolloutRuleModel](#schemarolloutrulemodel)]|false|The targeting rule collection.|
|» value|body|object \| null|false|The value to serve. It must respect the setting type.|

> Example responses

> 200 Response

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "integrationLinks": [
    {
      "description": "string",
      "integrationLinkType": "trello",
      "key": "string",
      "url": "string"
    }
  ],
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "readOnly": true,
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "settingTags": [
    {
      "color": "string",
      "name": "string",
      "settingTagId": 0,
      "tagId": 0
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

<h3 id="replace-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SettingValueModel](#schemasettingvaluemodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update value

<a id="opIdupdate-setting-value-by-sdkkey"></a>

> Code samples

```bash
curl https://example.com/v1/settings/string/value \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "/rolloutPercentageItems/-",
      "value": {
        "percentage": 30,
        "value": true
      }
    },
    {
      "op": "add",
      "path": "/rolloutPercentageItems/-",
      "value": {
        "percentage": 70,
        "value": false
      }
    }
  ]'
```

`PATCH /v1/settings/{settingKeyOrId}/value`

This endpoint updates the value of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change. It supports collection reordering, so it also 
can be used for reordering the targeting rules of a Feature Flag or Setting.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send an update request body as below:
```
[
	{
		"op": "replace",
		"path": "/value",
		"value": true
	}
]
```
Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
So we get a response like this:
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": true
}
```

> Body parameter

```json
[
  {
    "op": "add",
    "path": "/rolloutPercentageItems/-",
    "value": {
      "percentage": 30,
      "value": true
    }
  },
  {
    "op": "add",
    "path": "/rolloutPercentageItems/-",
    "value": {
      "percentage": 70,
      "value": false
    }
  }
]
```

<h3 id="update-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|settingKeyOrId|path|string|true|The key or id of the Setting.|
|reason|query|string|false|The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.|
|X-CONFIGCAT-SDKKEY|header|string|false|The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)|
|body|body|[JsonPatch](#schemajsonpatch)|true|none|
|» operations|body|[[PatchOperation](#schemapatchoperation)]|false|none|

> Example responses

> 200 Response

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "integrationLinks": [
    {
      "description": "string",
      "integrationLinkType": "trello",
      "key": "string",
      "url": "string"
    }
  ],
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "readOnly": true,
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "settingTags": [
    {
      "color": "string",
      "name": "string",
      "settingTagId": 0,
      "tagId": 0
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

<h3 id="update-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SettingValueModel](#schemasettingvaluemodel)|
|204|No Content|When no change applied on the resource.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-feature-flag-setting-values">Feature Flag &amp; Setting values</h1>

With these endpoints you can control how your existing Feature Flags and Settings should serve their values. 
You can turn Feature Flags on or off, update Setting values and also add, remove or reorder Percentage and Targeting Rules.

To determine which Feature Flag or Setting you want to work with you have to pass its `settingId`. It can be
obtained from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.

You also have to specify in which Environment you want to change the served value configuration by its
`environmentId` which can be obtained from the [List Environments](#operation/get-environments) endpoint.

## Get values

<a id="opIdget-setting-values"></a>

> Code samples

```bash
curl https://example.com/v1/configs/497f6eca-6276-4993-bfeb-53cbbbba6f08/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/values \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/configs/{configId}/environments/{environmentId}/values`

This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
in a specified Environment identified by the `environmentId` parameter.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).

<h3 id="get-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string(uuid)|true|The identifier of the Config.|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|

> Example responses

> 200 Response

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "readOnly": true,
  "settingValues": [
    {
      "integrationLinks": [
        {
          "description": "string",
          "integrationLinkType": "trello",
          "key": "string",
          "url": "string"
        }
      ],
      "lastUpdaterUserEmail": "string",
      "lastUpdaterUserFullName": "string",
      "rolloutPercentageItems": [
        {
          "percentage": 0,
          "value": null
        }
      ],
      "rolloutRules": [
        {
          "comparator": "isOneOf",
          "comparisonAttribute": "string",
          "comparisonValue": "string",
          "segmentComparator": "isIn",
          "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": null
        }
      ],
      "setting": {
        "createdAt": "1970-01-01T00:00:00Z",
        "creatorEmail": "string",
        "creatorFullName": "string",
        "hint": "string",
        "isWatching": true,
        "key": "string",
        "name": "string",
        "order": 0,
        "settingId": 0,
        "settingType": "boolean"
      },
      "settingTags": [
        {
          "color": "string",
          "name": "string",
          "settingTagId": 0,
          "tagId": 0
        }
      ],
      "updatedAt": "1970-01-01T00:00:00Z",
      "value": null
    }
  ]
}
```

<h3 id="get-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the setting values returned.|[ConfigSettingValuesModel](#schemaconfigsettingvaluesmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Get value

<a id="opIdget-setting-value"></a>

> Code samples

```bash
curl https://example.com/v1/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings/0/value \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/environments/{environmentId}/settings/{settingId}/value`

This endpoint returns the value of a Feature Flag or Setting 
in a specified Environment identified by the `environmentId` parameter.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).

<h3 id="get-value-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|
|settingId|path|integer(int32)|true|The id of the Setting.|

> Example responses

> 200 Response

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "integrationLinks": [
    {
      "description": "string",
      "integrationLinkType": "trello",
      "key": "string",
      "url": "string"
    }
  ],
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "readOnly": true,
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "settingTags": [
    {
      "color": "string",
      "name": "string",
      "settingTagId": 0,
      "tagId": 0
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

<h3 id="get-value-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the setting value data returned.|[SettingValueModel](#schemasettingvaluemodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Replace value

<a id="opIdreplace-setting-value"></a>

> Code samples

```bash
curl https://example.com/v1/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings/0/value \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "rolloutPercentageItems": [
      {
        "percentage": 30,
        "value": true
      },
      {
        "percentage": 70,
        "value": false
      }
    ],
    "value": true
  }'
```

`PUT /v1/environments/{environmentId}/settings/{settingId}/value`

This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change in its original state. Not listing one means that it will reset.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send a replace request body as below:
```
{
	"value": true
}
```
Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"rolloutPercentageItems": [],
	"rolloutRules": [],
	"value": true
}
```

The `rolloutRules` property describes two types of rules:

- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

> Body parameter

```json
{
  "rolloutPercentageItems": [
    {
      "percentage": 30,
      "value": true
    },
    {
      "percentage": 70,
      "value": false
    }
  ],
  "value": true
}
```

<h3 id="replace-value-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|
|settingId|path|integer(int32)|true|The id of the Setting.|
|reason|query|string|false|The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.|
|body|body|[UpdateSettingValueModel](#schemaupdatesettingvaluemodel)|true|none|
|» rolloutPercentageItems|body|[[RolloutPercentageItemModel](#schemarolloutpercentageitemmodel)]|false|The percentage rule collection.|
|» rolloutRules|body|[[RolloutRuleModel](#schemarolloutrulemodel)]|false|The targeting rule collection.|
|» value|body|object \| null|false|The value to serve. It must respect the setting type.|

> Example responses

> 200 Response

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "integrationLinks": [
    {
      "description": "string",
      "integrationLinkType": "trello",
      "key": "string",
      "url": "string"
    }
  ],
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "readOnly": true,
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "settingTags": [
    {
      "color": "string",
      "name": "string",
      "settingTagId": 0,
      "tagId": 0
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

<h3 id="replace-value-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SettingValueModel](#schemasettingvaluemodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update value

<a id="opIdupdate-setting-value"></a>

> Code samples

```bash
curl https://example.com/v1/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings/0/value \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "op": "add",
      "path": "/rolloutPercentageItems/-",
      "value": {
        "percentage": 30,
        "value": true
      }
    },
    {
      "op": "add",
      "path": "/rolloutPercentageItems/-",
      "value": {
        "percentage": 70,
        "value": false
      }
    }
  ]'
```

`PATCH /v1/environments/{environmentId}/settings/{settingId}/value`

This endpoint updates the value of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change. It supports collection reordering, so it also 
can be used for reordering the targeting rules of a Feature Flag or Setting.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send an update request body as below:
```
[
	{
		"op": "replace",
		"path": "/value",
		"value": true
	}
]
```
Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
So we get a response like this:
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": true
}
```

The `rolloutRules` property describes two types of rules:

- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

> Body parameter

```json
[
  {
    "op": "add",
    "path": "/rolloutPercentageItems/-",
    "value": {
      "percentage": 30,
      "value": true
    }
  },
  {
    "op": "add",
    "path": "/rolloutPercentageItems/-",
    "value": {
      "percentage": 70,
      "value": false
    }
  }
]
```

<h3 id="update-value-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|
|settingId|path|integer(int32)|true|The id of the Setting.|
|reason|query|string|false|The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.|
|body|body|[JsonPatch](#schemajsonpatch)|true|none|
|» operations|body|[[PatchOperation](#schemapatchoperation)]|false|none|

> Example responses

> 200 Response

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "integrationLinks": [
    {
      "description": "string",
      "integrationLinkType": "trello",
      "key": "string",
      "url": "string"
    }
  ],
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "readOnly": true,
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "settingTags": [
    {
      "color": "string",
      "name": "string",
      "settingTagId": 0,
      "tagId": 0
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

<h3 id="update-value-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When the patch was successful.|[SettingValueModel](#schemasettingvaluemodel)|
|204|No Content|When no change applied on the resource.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-feature-flags-settings">Feature Flags &amp; Settings</h1>

With these endpoints you can manage your Feature Flags or Settings within a Config. 
However you can't use them for manipulating the values of your Feature Flags and Settings,
to do that please visit the [Feature Flag & Setting values using SDK Key](#tag/Feature-Flag-and-Setting-values-using-SDK-Key)
and [Feature Flag & Setting values](#tag/Feature-Flag-and-Setting-values) sections of the API.

For using these endpoints, first you have to select which Config you want to work with by its `configId` 
which can be obtained from the [List Configs](#operation/get-configs) endpoint. 
Then you can use it to create new Feature Flags or to get information about existing ones.

Then you can obtain the `settingId` or `key` of your desired Feature Flag or Setting 
to use them for further operations in this API. 

<a href="https://configcat.com/docs/main-concepts/#setting" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Settings.

## List Flags

<a id="opIdget-settings"></a>

> Code samples

```bash
curl https://example.com/v1/configs/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/configs/{configId}/settings`

This endpoint returns the list of the Feature Flags and Settings defined in a 
specified Config, identified by the `configId` parameter.

<h3 id="list-flags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string(uuid)|true|The identifier of the Config.|

> Example responses

> 200 Response

```json
[
  {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "configName": "string",
    "hint": "string",
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean",
    "tags": [
      {
        "color": "string",
        "name": "string",
        "product": {
          "description": "string",
          "name": "string",
          "order": 0,
          "organization": {
            "name": "string",
            "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          },
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        },
        "tagId": 0
      }
    ]
  }
]
```

<h3 id="list-flags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-flags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SettingModel](#schemasettingmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Create Flag

<a id="opIdcreate-setting"></a>

> Code samples

```bash
curl https://example.com/v1/configs/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "hint": "string",
    "initialValues": [
      {
        "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "value": null
      }
    ],
    "key": "string",
    "name": "string",
    "settingType": "boolean",
    "tags": [
      0
    ]
  }'
```

`POST /v1/configs/{configId}/settings`

This endpoint creates a new Feature Flag or Setting in a specified Config
identified by the `configId` parameter.

**Important:** The `key` attribute must be unique within the given Config.

> Body parameter

```json
{
  "hint": "string",
  "initialValues": [
    {
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "key": "string",
  "name": "string",
  "settingType": "boolean",
  "tags": [
    0
  ]
}
```

<h3 id="create-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string(uuid)|true|The identifier of the Config.|
|body|body|[CreateSettingInitialValues](#schemacreatesettinginitialvalues)|true|none|
|» hint|body|string \| null|false|A short description for the setting, shown on the Dashboard UI.|
|» initialValues|body|[[InitialValue](#schemainitialvalue)]|false|Optional, initial values of the feature flag or setting in the given Environments.|
|» key|body|string|true|The key of the setting.|
|» name|body|string|true|The name of the setting, shown on the Dashboard UI.|
|» settingType|body|[SettingType](#schemasettingtype)|true|none|
|» tags|body|[integer(int64)]|false|The IDs of the tags which are attached to the setting.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» settingType|boolean|
|» settingType|string|
|» settingType|int|
|» settingType|double|

> Example responses

> 201 Response

```json
{
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "configName": "string",
  "hint": "string",
  "key": "string",
  "name": "string",
  "order": 0,
  "settingId": 0,
  "settingType": "boolean",
  "tags": [
    {
      "color": "string",
      "name": "string",
      "product": {
        "description": "string",
        "name": "string",
        "order": 0,
        "organization": {
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reasonRequired": true
      },
      "tagId": 0
    }
  ]
}
```

<h3 id="create-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|When the creation was successful.|[SettingModel](#schemasettingmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Get Flag

<a id="opIdget-setting"></a>

> Code samples

```bash
curl https://example.com/v1/settings/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/settings/{settingId}`

This endpoint returns the metadata attributes of a Feature Flag or Setting 
identified by the `settingId` parameter.

<h3 id="get-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|settingId|path|integer(int32)|true|The identifier of the Setting.|

> Example responses

> 200 Response

```json
{
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "configName": "string",
  "hint": "string",
  "key": "string",
  "name": "string",
  "order": 0,
  "settingId": 0,
  "settingType": "boolean",
  "tags": [
    {
      "color": "string",
      "name": "string",
      "product": {
        "description": "string",
        "name": "string",
        "order": 0,
        "organization": {
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reasonRequired": true
      },
      "tagId": 0
    }
  ]
}
```

<h3 id="get-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the setting data returned.|[SettingModel](#schemasettingmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Flag

<a id="opIddelete-setting"></a>

> Code samples

```bash
curl https://example.com/v1/settings/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/settings/{settingId}`

This endpoint removes a Feature Flag or Setting from a specified Config, 
identified by the `configId` parameter.

<h3 id="delete-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|settingId|path|integer(int32)|true|The identifier of the Setting.|

<h3 id="delete-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update Flag

<a id="opIdupdate-setting"></a>

> Code samples

```bash
curl https://example.com/v1/settings/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "operations": [
      {
        "from": {
          "kind": "unspecified"
        },
        "op": "unknown",
        "path": {
          "kind": "unspecified"
        },
        "value": {
          "options": {
            "propertyNameCaseInsensitive": true
          },
          "parent": {},
          "root": {}
        }
      }
    ]
  }'
```

`PATCH /v1/settings/{settingId}`

This endpoint updates the metadata of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.

Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change.

For example: We have the following resource.
```
{
	"settingId": 5345,
	"key": "myGrandFeature",
	"name": "Tihs is a naem with soem typos.",
	"hint": "This flag controls my grandioso feature.",
	"settingType": "boolean",
	"tags": [
		{
			"tagId": 0,
			"name": "sample tag",
			"color": "whale"
		}
	]
}
```
If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
```
[
	{
		"op": "replace",
		"path": "/name",
		"value": "This is the name without typos."
	},
	{
		"op": "add",
		"path": "/tags/-",
		"value": 2
	}
]
```
Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
So we get a response like this:
```
{
	"settingId": 5345,
	"key": "myGrandFeature",
	"name": "This is the name without typos.",
	"hint": "This flag controls my grandioso feature.",
	"settingType": "boolean",
	"tags": [
		{
			"tagId": 0,
			"name": "sample tag",
			"color": "whale"
		},
		{
			"tagId": 2,
			"name": "another tag",
			"color": "koala"
		}
	]
}
```

> Body parameter

```json
{
  "operations": [
    {
      "from": {
        "kind": "unspecified"
      },
      "op": "unknown",
      "path": {
        "kind": "unspecified"
      },
      "value": {
        "options": {
          "propertyNameCaseInsensitive": true
        },
        "parent": {},
        "root": {}
      }
    }
  ]
}
```

<h3 id="update-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|settingId|path|integer(int32)|true|The identifier of the Setting.|
|body|body|[JsonPatch](#schemajsonpatch)|true|none|
|» operations|body|[[PatchOperation](#schemapatchoperation)]|false|none|

> Example responses

> 200 Response

```json
{
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "configName": "string",
  "hint": "string",
  "key": "string",
  "name": "string",
  "order": 0,
  "settingId": 0,
  "settingType": "boolean",
  "tags": [
    {
      "color": "string",
      "name": "string",
      "product": {
        "description": "string",
        "name": "string",
        "order": 0,
        "organization": {
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reasonRequired": true
      },
      "tagId": 0
    }
  ]
}
```

<h3 id="update-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When the update was successful.|[SettingModel](#schemasettingmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-organizations">Organizations</h1>

With these endpoints you can get useful information about your Organizations.
This also can be used to manage your [Products](#tag/Products).

<a href="https://configcat.com/docs/organization/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the Organizations.

## List Organizations

<a id="opIdget-organizations"></a>

> Code samples

```bash
curl https://example.com/v1/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/organizations`

This endpoint returns the list of the Organizations that belongs to the user.

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
]
```

<h3 id="list-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrganizationModel](#schemaorganizationmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-members">Members</h1>

With these endpoints you can manage your Members.

<a href="https://configcat.com/docs/advanced/team-collaboration" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Team Collaboration.

## List Organization Members

<a id="opIdget-organization-members"></a>

> Code samples

```bash
curl https://example.com/v1/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/members \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/organizations/{organizationId}/members`

This endpoint returns the list of Members that belongs 
to the given Organization, identified by the `organizationId` parameter.

<h3 id="list-organization-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string(uuid)|true|The identifier of the Organization.|

> Example responses

> 200 Response

```json
[
  {
    "email": "string",
    "fullName": "string",
    "userId": "string"
  }
]
```

<h3 id="list-organization-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-organization-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserModel](#schemausermodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update Member Permissions

<a id="opIdadd-member-to-group"></a>

> Code samples

```bash
curl https://example.com/v1/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/members/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "permissionGroupIds": [
      0
    ]
  }'
```

`POST /v1/organizations/{organizationId}/members/{userId}`

This endpoint adds a Member identified by the `userId` to one or more Permission Groups. 
This endpoint can also be used to move a Member between Permission Groups within a Product.
Only a single Permission Group can be set per Product.

> Body parameter

```json
{
  "permissionGroupIds": [
    0
  ]
}
```

<h3 id="update-member-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string(uuid)|true|The identifier of the Organization.|
|userId|path|string|true|The identifier of the Member.|
|body|body|[AddUserToGroupRequest](#schemaaddusertogrouprequest)|true|none|
|» permissionGroupIds|body|[integer(int64)]|true|none|

<h3 id="update-member-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When the addition was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Member from Organization

<a id="opIddelete-organization-member"></a>

> Code samples

```bash
curl https://example.com/v1/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/members/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/organizations/{organizationId}/members/{userId}`

This endpoint removes a Member identified by the `userId` from the 
given Organization identified by the `organizationId` parameter.

<h3 id="delete-member-from-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string(uuid)|true|The identifier of the Organization.|
|userId|path|string|true|The identifier of the Member.|

<h3 id="delete-member-from-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## List Product Members

<a id="opIdget-product-members"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/members \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products/{productId}/members`

This endpoint returns the list of Members that belongs 
to the given Product, identified by the `productId` parameter.

<h3 id="list-product-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|

> Example responses

> 200 Response

```json
[
  {
    "email": "string",
    "fullName": "string",
    "permissionGroupId": 0,
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "string"
  }
]
```

<h3 id="list-product-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-product-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MemberModel](#schemamembermodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Invite Member

<a id="opIdinvite-member"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/members/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "emails": [
      "string"
    ],
    "permissionGroupId": 0
  }'
```

`POST /v1/products/{productId}/members/invite`

This endpoint invites a Member into the given Product identified by the `productId` parameter.

> Body parameter

```json
{
  "emails": [
    "string"
  ],
  "permissionGroupId": 0
}
```

<h3 id="invite-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|
|body|body|[InviteMembersRequest](#schemainvitemembersrequest)|true|none|
|» emails|body|[string]|true|none|
|» permissionGroupId|body|integer(int64)|true|none|

<h3 id="invite-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When the invite was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Member from Product

<a id="opIddelete-product-member"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/members/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/products/{productId}/members/{userId}`

This endpoint removes a Member identified by the `userId` from the 
given Product identified by the `productId` parameter.

<h3 id="delete-member-from-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|
|userId|path|string|true|The identifier of the Member.|

<h3 id="delete-member-from-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-permission-groups">Permission Groups</h1>

With these endpoints you can manage your Permission Groups.

<a href="https://configcat.com/docs/advanced/team-collaboration#permissions--groups" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Permissions.

## Get Permission Group

<a id="opIdget-permission-group"></a>

> Code samples

```bash
curl https://example.com/v1/permissions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/permissions/{permissionGroupId}`

This endpoint returns the metadata of a Permission Group 
identified by the `permissionGroupId`.

<h3 id="get-permission-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|integer(int64)|true|The identifier of the Permission Group.|

> Example responses

> 200 Response

```json
{
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full",
  "permissionGroupId": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
}
```

<h3 id="get-permission-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the permission group data returned.|[PermissionGroupModel](#schemapermissiongroupmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update Permission Group

<a id="opIdupdate-permission-group"></a>

> Code samples

```bash
curl https://example.com/v1/permissions/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accessType": "readOnly",
    "canCreateOrUpdateConfig": true,
    "canCreateOrUpdateEnvironment": true,
    "canCreateOrUpdateSegments": true,
    "canCreateOrUpdateSetting": true,
    "canCreateOrUpdateTag": true,
    "canDeleteConfig": true,
    "canDeleteEnvironment": true,
    "canDeleteSegments": true,
    "canDeleteSetting": true,
    "canDeleteTag": true,
    "canManageIntegrations": true,
    "canManageMembers": true,
    "canManageProductPreferences": true,
    "canManageWebhook": true,
    "canRotateSdkKey": true,
    "canTagSetting": true,
    "canUseExportImport": true,
    "canViewProductAuditLog": true,
    "canViewProductStatistics": true,
    "canViewSdkKey": true,
    "environmentAccesses": [
      {
        "color": "string",
        "description": "string",
        "environmentAccessType": "full",
        "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "order": 0,
        "reasonRequired": true
      }
    ],
    "name": "string",
    "newEnvironmentAccessType": "full"
  }'
```

`PUT /v1/permissions/{permissionGroupId}`

This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.

> Body parameter

```json
{
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full"
}
```

<h3 id="update-permission-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|integer(int64)|true|The identifier of the Permission Group.|
|body|body|[UpdatePermissionGroupRequest](#schemaupdatepermissiongrouprequest)|true|none|
|» accessType|body|[AccessType](#schemaaccesstype)|false|none|
|» canCreateOrUpdateConfig|body|boolean \| null|false|none|
|» canCreateOrUpdateEnvironment|body|boolean \| null|false|none|
|» canCreateOrUpdateSegments|body|boolean \| null|false|none|
|» canCreateOrUpdateSetting|body|boolean \| null|false|none|
|» canCreateOrUpdateTag|body|boolean \| null|false|none|
|» canDeleteConfig|body|boolean \| null|false|none|
|» canDeleteEnvironment|body|boolean \| null|false|none|
|» canDeleteSegments|body|boolean \| null|false|none|
|» canDeleteSetting|body|boolean \| null|false|none|
|» canDeleteTag|body|boolean \| null|false|none|
|» canManageIntegrations|body|boolean \| null|false|none|
|» canManageMembers|body|boolean \| null|false|none|
|» canManageProductPreferences|body|boolean \| null|false|none|
|» canManageWebhook|body|boolean \| null|false|none|
|» canRotateSdkKey|body|boolean \| null|false|none|
|» canTagSetting|body|boolean \| null|false|none|
|» canUseExportImport|body|boolean \| null|false|none|
|» canViewProductAuditLog|body|boolean \| null|false|none|
|» canViewProductStatistics|body|boolean \| null|false|none|
|» canViewSdkKey|body|boolean \| null|false|none|
|» environmentAccesses|body|[[CreateOrUpdateEnvironmentAccessModel](#schemacreateorupdateenvironmentaccessmodel)]|false|none|
|» name|body|string \| null|false|none|
|» newEnvironmentAccessType|body|[EnvironmentAccessType](#schemaenvironmentaccesstype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» accessType|readOnly|
|» accessType|full|
|» accessType|custom|
|» newEnvironmentAccessType|full|
|» newEnvironmentAccessType|readOnly|
|» newEnvironmentAccessType|none|

> Example responses

> 200 Response

```json
{
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full",
  "permissionGroupId": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
}
```

<h3 id="update-permission-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PermissionGroupModel](#schemapermissiongroupmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Permission Group

<a id="opIddelete-permission-group"></a>

> Code samples

```bash
curl https://example.com/v1/permissions/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/permissions/{permissionGroupId}`

This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.

<h3 id="delete-permission-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|integer(int64)|true|The identifier of the Permission Group.|

<h3 id="delete-permission-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## List Permission Groups

<a id="opIdget-permission-groups"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products/{productId}/permissions`

This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

<h3 id="list-permission-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|

> Example responses

> 200 Response

```json
[
  {
    "accessType": "readOnly",
    "canCreateOrUpdateConfig": true,
    "canCreateOrUpdateEnvironment": true,
    "canCreateOrUpdateSegments": true,
    "canCreateOrUpdateSetting": true,
    "canCreateOrUpdateTag": true,
    "canDeleteConfig": true,
    "canDeleteEnvironment": true,
    "canDeleteSegments": true,
    "canDeleteSetting": true,
    "canDeleteTag": true,
    "canManageIntegrations": true,
    "canManageMembers": true,
    "canManageProductPreferences": true,
    "canManageWebhook": true,
    "canRotateSdkKey": true,
    "canTagSetting": true,
    "canUseExportImport": true,
    "canViewProductAuditLog": true,
    "canViewProductStatistics": true,
    "canViewSdkKey": true,
    "environmentAccesses": [
      {
        "color": "string",
        "description": "string",
        "environmentAccessType": "full",
        "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "order": 0,
        "reasonRequired": true
      }
    ],
    "name": "string",
    "newEnvironmentAccessType": "full",
    "permissionGroupId": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  }
]
```

<h3 id="list-permission-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-permission-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PermissionGroupModel](#schemapermissiongroupmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Create Permission Group

<a id="opIdcreate-permission-group"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accessType": "readOnly",
    "canCreateOrUpdateConfig": true,
    "canCreateOrUpdateEnvironment": true,
    "canCreateOrUpdateSegments": true,
    "canCreateOrUpdateSetting": true,
    "canCreateOrUpdateTag": true,
    "canDeleteConfig": true,
    "canDeleteEnvironment": true,
    "canDeleteSegments": true,
    "canDeleteSetting": true,
    "canDeleteTag": true,
    "canManageIntegrations": true,
    "canManageMembers": true,
    "canManageProductPreferences": true,
    "canManageWebhook": true,
    "canRotateSdkKey": true,
    "canTagSetting": true,
    "canUseExportImport": true,
    "canViewProductAuditLog": true,
    "canViewProductStatistics": true,
    "canViewSdkKey": true,
    "environmentAccesses": [
      {
        "color": "string",
        "description": "string",
        "environmentAccessType": "full",
        "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "order": 0,
        "reasonRequired": true
      }
    ],
    "name": "string",
    "newEnvironmentAccessType": "full"
  }'
```

`POST /v1/products/{productId}/permissions`

This endpoint creates a new Permission Group in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

> Body parameter

```json
{
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full"
}
```

<h3 id="create-permission-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|
|body|body|[CreatePermissionGroupRequest](#schemacreatepermissiongrouprequest)|true|none|
|» accessType|body|[AccessType](#schemaaccesstype)|false|none|
|» canCreateOrUpdateConfig|body|boolean|false|none|
|» canCreateOrUpdateEnvironment|body|boolean|false|none|
|» canCreateOrUpdateSegments|body|boolean|false|none|
|» canCreateOrUpdateSetting|body|boolean|false|none|
|» canCreateOrUpdateTag|body|boolean|false|none|
|» canDeleteConfig|body|boolean|false|none|
|» canDeleteEnvironment|body|boolean|false|none|
|» canDeleteSegments|body|boolean|false|none|
|» canDeleteSetting|body|boolean|false|none|
|» canDeleteTag|body|boolean|false|none|
|» canManageIntegrations|body|boolean|false|none|
|» canManageMembers|body|boolean|false|none|
|» canManageProductPreferences|body|boolean|false|none|
|» canManageWebhook|body|boolean|false|none|
|» canRotateSdkKey|body|boolean|false|none|
|» canTagSetting|body|boolean|false|none|
|» canUseExportImport|body|boolean|false|none|
|» canViewProductAuditLog|body|boolean|false|none|
|» canViewProductStatistics|body|boolean|false|none|
|» canViewSdkKey|body|boolean|false|none|
|» environmentAccesses|body|[[CreateOrUpdateEnvironmentAccessModel](#schemacreateorupdateenvironmentaccessmodel)]|false|none|
|» name|body|string|true|none|
|» newEnvironmentAccessType|body|[EnvironmentAccessType](#schemaenvironmentaccesstype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» accessType|readOnly|
|» accessType|full|
|» accessType|custom|
|» newEnvironmentAccessType|full|
|» newEnvironmentAccessType|readOnly|
|» newEnvironmentAccessType|none|

> Example responses

> 201 Response

```json
{
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full",
  "permissionGroupId": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
}
```

<h3 id="create-permission-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|When the creation was successful.|[PermissionGroupModel](#schemapermissiongroupmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-products">Products</h1>

With these endpoints you can manage your Products.
This also can be used to manage [Environments](#tag/Environments), [Configs](#tag/Configs), [Tags](#tag/Tags) and [Permission Groups](#tag/Permission-Groups) through this API.

<a href="https://configcat.com/docs/main-concepts/#product" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Products.

## Create Product

<a id="opIdcreate-product"></a>

> Code samples

```bash
curl https://example.com/v1/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`POST /v1/organizations/{organizationId}/products`

This endpoint creates a new Product in a specified Organization 
identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="create-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string(uuid)|true|The identifier of the Organization.|
|body|body|[CreateProductRequest](#schemacreateproductrequest)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "name": "string",
  "order": 0,
  "organization": {
    "name": "string",
    "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reasonRequired": true
}
```

<h3 id="create-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|When the creation was successful.|[ProductModel](#schemaproductmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## List Products

<a id="opIdget-products"></a>

> Code samples

```bash
curl https://example.com/v1/products \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products`

This endpoint returns the list of the Products that belongs to the user.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
]
```

<h3 id="list-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductModel](#schemaproductmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Get Product

<a id="opIdget-product"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products/{productId}`

This endpoint returns the metadata of a Product 
identified by the `productId`.

<h3 id="get-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "name": "string",
  "order": 0,
  "organization": {
    "name": "string",
    "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reasonRequired": true
}
```

<h3 id="get-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the product data returned.|[ProductModel](#schemaproductmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update Product

<a id="opIdupdate-product"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`PUT /v1/products/{productId}`

This endpoint updates a Product identified by the `productId` parameter.

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="update-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|
|body|body|[UpdateProductRequest](#schemaupdateproductrequest)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "name": "string",
  "order": 0,
  "organization": {
    "name": "string",
    "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reasonRequired": true
}
```

<h3 id="update-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProductModel](#schemaproductmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Product

<a id="opIddelete-product"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/products/{productId}`

This endpoint removes a Product identified by the `productId` parameter.

<h3 id="delete-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|

<h3 id="delete-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-configs">Configs</h1>

With these endpoints you can manage your Configs.
This also can be used to manage [Feature Flags and Settings](#tag/Feature-Flags-and-Settings) and their 
[served values](#tag/Feature-Flag-and-Setting-values) through this API.

<a href="https://configcat.com/docs/main-concepts/#config" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Configs.

## Get Config

<a id="opIdget-config"></a>

> Code samples

```bash
curl https://example.com/v1/configs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/configs/{configId}`

This endpoint returns the metadata of a Config
identified by the `configId`.

<h3 id="get-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string(uuid)|true|The identifier of the Config.|

> Example responses

> 200 Response

```json
{
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "name": "string",
  "order": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
}
```

<h3 id="get-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the config data returned.|[ConfigModel](#schemaconfigmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update Config

<a id="opIdupdate-config"></a>

> Code samples

```bash
curl https://example.com/v1/configs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`PUT /v1/configs/{configId}`

This endpoint updates a Config identified by the `configId` parameter.

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="update-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string(uuid)|true|The identifier of the Config.|
|body|body|[UpdateConfigRequest](#schemaupdateconfigrequest)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "name": "string",
  "order": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
}
```

<h3 id="update-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConfigModel](#schemaconfigmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Config

<a id="opIddelete-config"></a>

> Code samples

```bash
curl https://example.com/v1/configs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/configs/{configId}`

This endpoint removes a Config identified by the `configId` parameter.

<h3 id="delete-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string(uuid)|true|The identifier of the Config.|

<h3 id="delete-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## List Configs

<a id="opIdget-configs"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/configs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products/{productId}/configs`

This endpoint returns the list of the Configs that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

<h3 id="list-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|

> Example responses

> 200 Response

```json
[
  {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  }
]
```

<h3 id="list-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-configs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConfigModel](#schemaconfigmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Create Config

<a id="opIdcreate-config"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/configs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`POST /v1/products/{productId}/configs`

This endpoint creates a new Config in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="create-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|
|body|body|[CreateConfigRequest](#schemacreateconfigrequest)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "name": "string",
  "order": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
}
```

<h3 id="create-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|When the creation was successful.|[ConfigModel](#schemaconfigmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-environments">Environments</h1>

With these endpoints you can update existing Environments or add new ones into your selected [Product](#tag/Products). 

<a href="https://configcat.com/docs/main-concepts/#environment" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Environments.

## Get Environment

<a id="opIdget-environment"></a>

> Code samples

```bash
curl https://example.com/v1/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/environments/{environmentId}`

This endpoint returns the metadata of an Environment 
identified by the `environmentId`.

<h3 id="get-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "order": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "reasonRequired": true
}
```

<h3 id="get-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the environment data returned.|[EnvironmentModel](#schemaenvironmentmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update Environment

<a id="opIdupdate-environment"></a>

> Code samples

```bash
curl https://example.com/v1/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string"
  }'
```

`PUT /v1/environments/{environmentId}`

This endpoint updates an Environment identified by the `environmentId` parameter.

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="update-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|
|body|body|[UpdateEnvironmentModel](#schemaupdateenvironmentmodel)|true|none|
|» color|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "order": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "reasonRequired": true
}
```

<h3 id="update-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EnvironmentModel](#schemaenvironmentmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Environment

<a id="opIddelete-environment"></a>

> Code samples

```bash
curl https://example.com/v1/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/environments/{environmentId}`

This endpoint removes an Environment identified by the `environmentId` parameter.

<h3 id="delete-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|

<h3 id="delete-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## List Environments

<a id="opIdget-environments"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/environments \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products/{productId}/environments`

This endpoint returns the list of the Environments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

<h3 id="list-environments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|

> Example responses

> 200 Response

```json
[
  {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  }
]
```

<h3 id="list-environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-environments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EnvironmentModel](#schemaenvironmentmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Create Environment

<a id="opIdcreate-environment"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/environments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string"
  }'
```

`POST /v1/products/{productId}/environments`

This endpoint creates a new Environment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="create-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|
|body|body|[CreateEnvironmentModel](#schemacreateenvironmentmodel)|true|none|
|» color|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "color": "string",
  "description": "string",
  "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "order": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "reasonRequired": true
}
```

<h3 id="create-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|When the creation was successful.|[EnvironmentModel](#schemaenvironmentmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-segments">Segments</h1>

With these endpoints you can manage your Segments.
Segments allow you to group your users based on any of their properties. Define user segments and add them to multiple feature flags.

## List Segments

<a id="opIdget-segments"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/segments \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products/{productId}/segments`

This endpoint returns the list of the Segments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

<h3 id="list-segments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "description": "string",
    "lastUpdaterEmail": "string",
    "lastUpdaterFullName": "string",
    "name": "string",
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "updatedAt": "1970-01-01T00:00:00Z",
    "usage": 0
  }
]
```

<h3 id="list-segments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-segments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SegmentListModel](#schemasegmentlistmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Create Segment

<a id="opIdcreate-segment"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/segments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "comparator": "isOneOf",
    "comparisonAttribute": "string",
    "comparisonValue": "string",
    "description": "string",
    "name": "string"
  }'
```

`POST /v1/products/{productId}/segments`

This endpoint creates a new Segment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

> Body parameter

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="create-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|
|body|body|[CreateSegmentModel](#schemacreatesegmentmodel)|true|none|
|» comparator|body|[RolloutRuleComparator](#schemarolloutrulecomparator)|true|none|
|» comparisonAttribute|body|string|true|none|
|» comparisonValue|body|string|true|none|
|» description|body|string \| null|false|none|
|» name|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» comparator|isOneOf|
|» comparator|isNotOneOf|
|» comparator|contains|
|» comparator|doesNotContain|
|» comparator|semVerIsOneOf|
|» comparator|semVerIsNotOneOf|
|» comparator|semVerLess|
|» comparator|semVerLessOrEquals|
|» comparator|semVerGreater|
|» comparator|semVerGreaterOrEquals|
|» comparator|numberEquals|
|» comparator|numberDoesNotEqual|
|» comparator|numberLess|
|» comparator|numberLessOrEquals|
|» comparator|numberGreater|
|» comparator|numberGreaterOrEquals|
|» comparator|sensitiveIsOneOf|
|» comparator|sensitiveIsNotOneOf|

> Example responses

> 201 Response

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "creatorEmail": "string",
  "creatorFullName": "string",
  "description": "string",
  "lastUpdaterEmail": "string",
  "lastUpdaterFullName": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|When the creation was successful.|[SegmentModel](#schemasegmentmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Get Segment

<a id="opIdget-segment"></a>

> Code samples

```bash
curl https://example.com/v1/segments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/segments/{segmentId}`

This endpoint returns the metadata of a Segment
identified by the `segmentId`.

<h3 id="get-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|segmentId|path|string(uuid)|true|The identifier of the Segment.|

> Example responses

> 200 Response

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "creatorEmail": "string",
  "creatorFullName": "string",
  "description": "string",
  "lastUpdaterEmail": "string",
  "lastUpdaterFullName": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the config data returned.|[SegmentModel](#schemasegmentmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update Segment

<a id="opIdupdate-segment"></a>

> Code samples

```bash
curl https://example.com/v1/segments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "comparator": "isOneOf",
    "comparisonAttribute": "string",
    "comparisonValue": "string",
    "description": "string",
    "name": "string"
  }'
```

`PUT /v1/segments/{segmentId}`

This endpoint updates a Segment identified by the `segmentId` parameter.

> Body parameter

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="update-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|segmentId|path|string(uuid)|true|The identifier of the Segment.|
|body|body|[UpdateSegmentModel](#schemaupdatesegmentmodel)|true|none|
|» comparator|body|[RolloutRuleComparator](#schemarolloutrulecomparator)|false|none|
|» comparisonAttribute|body|string \| null|false|none|
|» comparisonValue|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» comparator|isOneOf|
|» comparator|isNotOneOf|
|» comparator|contains|
|» comparator|doesNotContain|
|» comparator|semVerIsOneOf|
|» comparator|semVerIsNotOneOf|
|» comparator|semVerLess|
|» comparator|semVerLessOrEquals|
|» comparator|semVerGreater|
|» comparator|semVerGreaterOrEquals|
|» comparator|numberEquals|
|» comparator|numberDoesNotEqual|
|» comparator|numberLess|
|» comparator|numberLessOrEquals|
|» comparator|numberGreater|
|» comparator|numberGreaterOrEquals|
|» comparator|sensitiveIsOneOf|
|» comparator|sensitiveIsNotOneOf|

> Example responses

> 200 Response

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "creatorEmail": "string",
  "creatorFullName": "string",
  "description": "string",
  "lastUpdaterEmail": "string",
  "lastUpdaterFullName": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SegmentModel](#schemasegmentmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Segment

<a id="opIddelete-segment"></a>

> Code samples

```bash
curl https://example.com/v1/segments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/segments/{segmentId}`

This endpoint removes a Segment identified by the `segmentId` parameter.

<h3 id="delete-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|segmentId|path|string(uuid)|true|The identifier of the Segment.|

<h3 id="delete-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-sdk-keys">SDK Keys</h1>

With these endpoints you can manage your SDK Keys.

## Get SDK Key

<a id="opIdget-sdk-keys"></a>

> Code samples

```bash
curl https://example.com/v1/configs/497f6eca-6276-4993-bfeb-53cbbbba6f08/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/configs/{configId}/environments/{environmentId}`

This endpoint returns the SDK Key for your Config in a specified Environment.

<h3 id="get-sdk-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string(uuid)|true|The identifier of the Config.|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|

> Example responses

> 200 Response

```json
{
  "primary": "string",
  "secondary": "string"
}
```

<h3 id="get-sdk-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SdkKeysModel](#schemasdkkeysmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-tags">Tags</h1>

With these endpoints you can manage Tags. Tags are stored under a Product. You can  and add a Tag to a Feature Flag or Setting using the [Update Flag](#operation/update-setting) endpoint.

## List Tags

<a id="opIdget-tags"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products/{productId}/tags`

This endpoint returns the list of the Tags in a 
specified Product, identified by the `productId` parameter.

<h3 id="list-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|

> Example responses

> 200 Response

```json
[
  {
    "color": "string",
    "name": "string",
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "tagId": 0
  }
]
```

<h3 id="list-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagModel](#schematagmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Create Tag

<a id="opIdcreate-tag"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "color": "string",
    "name": "string"
  }'
```

`POST /v1/products/{productId}/tags`

This endpoint creates a new Tag in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

> Body parameter

```json
{
  "color": "string",
  "name": "string"
}
```

<h3 id="create-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Organization.|
|body|body|[CreateTagModel](#schemacreatetagmodel)|true|none|
|» color|body|string \| null|false|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "color": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "tagId": 0
}
```

<h3 id="create-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|When the creation was successful.|[TagModel](#schematagmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Get Tag

<a id="opIdget-tag"></a>

> Code samples

```bash
curl https://example.com/v1/tags/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/tags/{tagId}`

This endpoint returns the metadata of a Tag 
identified by the `tagId`.

<h3 id="get-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|The identifier of the Tag.|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "tagId": 0
}
```

<h3 id="get-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the tag data returned.|[TagModel](#schematagmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Update Tag

<a id="opIdupdate-tag"></a>

> Code samples

```bash
curl https://example.com/v1/tags/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "color": "string",
    "name": "string"
  }'
```

`PUT /v1/tags/{tagId}`

This endpoint updates a Tag identified by the `tagId` parameter.

> Body parameter

```json
{
  "color": "string",
  "name": "string"
}
```

<h3 id="update-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|The identifier of the Tag.|
|body|body|[UpdateTagModel](#schemaupdatetagmodel)|true|none|
|» color|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "tagId": 0
}
```

<h3 id="update-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TagModel](#schematagmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Tag

<a id="opIddelete-tag"></a>

> Code samples

```bash
curl https://example.com/v1/tags/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/tags/{tagId}`

This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.

<h3 id="delete-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|The identifier of the Tag.|

<h3 id="delete-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete was successful.|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## List Settings by Tag

<a id="opIdget-settings-by-tag"></a>

> Code samples

```bash
curl https://example.com/v1/tags/0/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/tags/{tagId}/settings`

This endpoint returns the list of the Settings that 
has the specified Tag, identified by the `tagId` parameter.

<h3 id="list-settings-by-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|The identifier of the Tag.|

> Example responses

> 200 Response

```json
[
  {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "configName": "string",
    "hint": "string",
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean",
    "tags": [
      {
        "color": "string",
        "name": "string",
        "product": {
          "description": "string",
          "name": "string",
          "order": 0,
          "organization": {
            "name": "string",
            "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          },
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        },
        "tagId": 0
      }
    ]
  }
]
```

<h3 id="list-settings-by-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the settings data returned.|Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-settings-by-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SettingModel](#schemasettingmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-audit-logs">Audit logs</h1>

Access audit log entries.

## List Deleted Settings

<a id="opIdget-deleted-settings"></a>

> Code samples

```bash
curl https://example.com/v1/configs/497f6eca-6276-4993-bfeb-53cbbbba6f08/deleted-settings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/configs/{configId}/deleted-settings`

This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.

<h3 id="list-deleted-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string(uuid)|true|The identifier of the Config.|

> Example responses

> 200 Response

```json
[
  {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "configName": "string",
    "hint": "string",
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean",
    "tags": [
      {
        "color": "string",
        "name": "string",
        "product": {
          "description": "string",
          "name": "string",
          "order": 0,
          "organization": {
            "name": "string",
            "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          },
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        },
        "tagId": 0
      }
    ]
  }
]
```

<h3 id="list-deleted-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-deleted-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SettingModel](#schemasettingmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## List Audit log items for Organization

<a id="opIdget-organization-auditlogs"></a>

> Code samples

```bash
curl https://example.com/v1/organizations/497f6eca-6276-4993-bfeb-53cbbbba6f08/auditlogs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/organizations/{organizationId}/auditlogs`

This endpoint returns the list of Audit log items for a given Organization 
and the result can be optionally filtered by Product and/or Config and/or Environment.

<h3 id="list-audit-log-items-for-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string(uuid)|true|The identifier of the Organization.|
|productId|query|string(uuid)|false|The identifier of the Product.|
|configId|query|string(uuid)|false|The identifier of the Config.|
|environmentId|query|string(uuid)|false|The identifier of the Environment.|
|auditLogType|query|object \| null|false|Filter Audit logs by Audit log type.|
|fromUtcDateTime|query|string(date-time)|false|Filter Audit logs by starting UTC date.|
|toUtcDateTime|query|string(date-time)|false|Filter Audit logs by ending UTC date.|

> Example responses

> 200 Response

```json
[
  {
    "actionTarget": "string",
    "auditLogDateTime": "1970-01-01T00:00:00Z",
    "auditLogId": 0,
    "auditLogType": "string",
    "auditLogTypeEnum": "productCreated",
    "details": "string",
    "userEmail": "string",
    "userName": "string",
    "where": "string",
    "why": "string"
  }
]
```

<h3 id="list-audit-log-items-for-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-audit-log-items-for-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AuditLogItemModel](#schemaauditlogitemmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## List Audit log items for Product

<a id="opIdget-auditlogs"></a>

> Code samples

```bash
curl https://example.com/v1/products/497f6eca-6276-4993-bfeb-53cbbbba6f08/auditlogs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/products/{productId}/auditlogs`

This endpoint returns the list of Audit log items for a given Product 
and the result can be optionally filtered by Config and/or Environment.

<h3 id="list-audit-log-items-for-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string(uuid)|true|The identifier of the Product.|
|configId|query|string(uuid)|false|The identifier of the Config.|
|environmentId|query|string(uuid)|false|The identifier of the Environment.|
|auditLogType|query|object \| null|false|Filter Audit logs by Audit log type.|
|fromUtcDateTime|query|string(date-time)|false|Filter Audit logs by starting UTC date.|
|toUtcDateTime|query|string(date-time)|false|Filter Audit logs by ending UTC date.|

> Example responses

> 200 Response

```json
[
  {
    "actionTarget": "string",
    "auditLogDateTime": "1970-01-01T00:00:00Z",
    "auditLogId": 0,
    "auditLogType": "string",
    "auditLogTypeEnum": "productCreated",
    "details": "string",
    "userEmail": "string",
    "userName": "string",
    "where": "string",
    "why": "string"
  }
]
```

<h3 id="list-audit-log-items-for-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<h3 id="list-audit-log-items-for-product-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AuditLogItemModel](#schemaauditlogitemmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-me">Me</h1>

Information about the current user.

## Get authenticated user details

<a id="opIdget-me"></a>

> Code samples

```bash
curl https://example.com/v1/me \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/me`

> Example responses

> 200 Response

```json
{
  "email": "string",
  "fullName": "string"
}
```

<h3 id="get-authenticated-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MeModel](#schemamemodel)|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-code-references">Code References</h1>

With this endpoint you can upload Feature Flag and Setting usage references that will be shown on the ConfigCat Dashboard.

<a href="https://configcat.com/docs/advanced/code-references/overview/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Code References.

## post/v1/code-references

> Code samples

```bash
curl https://example.com/v1/code-references \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "activeBranches": [
      "string"
    ],
    "branch": "string",
    "commitHash": "string",
    "commitUrl": "string",
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "flagReferences": [
      {
        "references": [
          {
            "file": "string",
            "fileUrl": "string",
            "postLines": [
              {
                "lineNumber": 0,
                "lineText": "string"
              }
            ],
            "preLines": [
              {
                "lineNumber": 0,
                "lineText": "string"
              }
            ],
            "referenceLine": {
              "lineNumber": 0,
              "lineText": "string"
            }
          }
        ],
        "settingId": 0
      }
    ],
    "repository": "string",
    "uploader": "string"
  }'
```

`POST /v1/code-references`

> Body parameter

```json
{
  "activeBranches": [
    "string"
  ],
  "branch": "string",
  "commitHash": "string",
  "commitUrl": "string",
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "flagReferences": [
    {
      "references": [
        {
          "file": "string",
          "fileUrl": "string",
          "postLines": [
            {
              "lineNumber": 0,
              "lineText": "string"
            }
          ],
          "preLines": [
            {
              "lineNumber": 0,
              "lineText": "string"
            }
          ],
          "referenceLine": {
            "lineNumber": 0,
            "lineText": "string"
          }
        }
      ],
      "settingId": 0
    }
  ],
  "repository": "string",
  "uploader": "string"
}
```

<h3 id="postv1code-references-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CodeReferenceRequest](#schemacodereferencerequest)|true|none|
|» activeBranches|body|[string]|false|The currently active branches of the repository. Each previously uploaded report that belongs to a non-reported active branch is being deleted.|
|» branch|body|string|true|The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard)|
|» commitHash|body|string \| null|false|The related commit's hash. (Appears on the ConfigCat Dashboard)|
|» commitUrl|body|string \| null|false|The related commit's URL. (Appears on the ConfigCat Dashboard)|
|» configId|body|string(uuid)|true|The Config's identifier the scanning was performed against.|
|» flagReferences|body|[[FlagReference](#schemaflagreference)]|false|The actual code reference collection.|
|» repository|body|string|true|The source control repository that contains the scanned code. (Source of the repository selector on the ConfigCat Dashboard)|
|» uploader|body|string \| null|false|The scanning tool's name. (Appears on the ConfigCat Dashboard)|

<h3 id="postv1code-references-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## post/v1/code-references/delete-reports

> Code samples

```bash
curl https://example.com/v1/code-references/delete-reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "branch": "string",
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "repository": "string",
    "settingId": 0
  }'
```

`POST /v1/code-references/delete-reports`

> Body parameter

```json
{
  "branch": "string",
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "repository": "string",
  "settingId": 0
}
```

<h3 id="postv1code-referencesdelete-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteRepositoryReportsRequest](#schemadeleterepositoryreportsrequest)|true|none|
|» branch|body|string \| null|false|If it's set, only this branch's reports belonging to the given repository will be deleted.|
|» configId|body|string(uuid)|true|The Config's identifier from where the reports should be deleted.|
|» repository|body|string|true|The source control repository which's reports should be deleted.|
|» settingId|body|integer(int32) \| null|false|If it's set, only this setting's reports belonging to the given repository will be deleted.|

<h3 id="postv1code-referencesdelete-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="configcat-public-management-api-integration-links">Integration links</h1>

## Add or update Integration link

<a id="opIdadd-or-update-integration-link"></a>

> Code samples

```bash
curl https://example.com/v1/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings/0/integrationLinks/trello/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "description": "string",
    "url": "string"
  }'
```

`POST /v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}`

> Body parameter

```json
{
  "description": "string",
  "url": "string"
}
```

<h3 id="add-or-update-integration-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|
|settingId|path|integer(int32)|true|The id of the Setting.|
|integrationLinkType|path|[IntegrationLinkType](#schemaintegrationlinktype)|true|The integration link's type.|
|key|path|string|true|The key of the integration link.|
|body|body|[AddOrUpdateIntegrationLinkModel](#schemaaddorupdateintegrationlinkmodel)|false|none|
|» description|body|string \| null|false|none|
|» url|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|integrationLinkType|trello|
|integrationLinkType|jira|
|integrationLinkType|monday|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "integrationLinkType": "trello",
  "key": "string",
  "url": "string"
}
```

<h3 id="add-or-update-integration-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the integration link data returned.|[IntegrationLinkModel](#schemaintegrationlinkmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Delete Integration link

<a id="opIddelete-integration-link"></a>

> Code samples

```bash
curl https://example.com/v1/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings/0/integrationLinks/trello/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}`

<h3 id="delete-integration-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|
|settingId|path|integer(int32)|true|The id of the Setting.|
|integrationLinkType|path|[IntegrationLinkType](#schemaintegrationlinktype)|true|The integration's type.|
|key|path|string|true|The key of the integration link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|integrationLinkType|trello|
|integrationLinkType|jira|
|integrationLinkType|monday|

> Example responses

> 200 Response

```json
{
  "hasRemainingIntegrationLink": true
}
```

<h3 id="delete-integration-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok.|[DeleteIntegrationLinkModel](#schemadeleteintegrationlinkmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## Get Integration link

<a id="opIdget-integration-link-details"></a>

> Code samples

```bash
curl https://example.com/v1/integrationLink/trello/string/details \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v1/integrationLink/{integrationLinkType}/{key}/details`

<h3 id="get-integration-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|integrationLinkType|path|[IntegrationLinkType](#schemaintegrationlinktype)|true|The integration link's type.|
|key|path|string|true|The key of the integration link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|integrationLinkType|trello|
|integrationLinkType|jira|
|integrationLinkType|monday|

> Example responses

> 200 Response

```json
{
  "allIntegrationLinkCount": 0,
  "details": [
    {
      "config": {
        "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "name": "string",
        "order": 0,
        "product": {
          "description": "string",
          "name": "string",
          "order": 0,
          "organization": {
            "name": "string",
            "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          },
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        }
      },
      "environment": {
        "color": "string",
        "description": "string",
        "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "order": 0,
        "product": {
          "description": "string",
          "name": "string",
          "order": 0,
          "organization": {
            "name": "string",
            "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          },
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        },
        "reasonRequired": true
      },
      "product": {
        "description": "string",
        "name": "string",
        "order": 0,
        "organization": {
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reasonRequired": true
      },
      "readOnly": true,
      "setting": {
        "createdAt": "1970-01-01T00:00:00Z",
        "creatorEmail": "string",
        "creatorFullName": "string",
        "hint": "string",
        "isWatching": true,
        "key": "string",
        "name": "string",
        "order": 0,
        "settingId": 0,
        "settingType": "boolean"
      },
      "status": "string"
    }
  ]
}
```

<h3 id="get-integration-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the details for the integration link returned.|[IntegrationLinkDetailsModel](#schemaintegrationlinkdetailsmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## post/v1/jira/Connect

> Code samples

```bash
curl https://example.com/v1/jira/Connect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "clientKey": "string",
    "jiraJwtToken": "string"
  }'
```

`POST /v1/jira/Connect`

> Body parameter

```json
{
  "clientKey": "string",
  "jiraJwtToken": "string"
}
```

<h3 id="postv1jiraconnect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectRequest](#schemaconnectrequest)|false|none|
|» clientKey|body|string|true|none|
|» jiraJwtToken|body|string|true|none|

<h3 id="postv1jiraconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## jira-add-or-update-integration-link

<a id="opIdjira-add-or-update-integration-link"></a>

> Code samples

```bash
curl https://example.com/v1/jira/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings/0/integrationLinks/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "clientKey": "string",
    "description": "string",
    "jiraJwtToken": "string",
    "url": "string"
  }'
```

`POST /v1/jira/environments/{environmentId}/settings/{settingId}/integrationLinks/{key}`

> Body parameter

```json
{
  "clientKey": "string",
  "description": "string",
  "jiraJwtToken": "string",
  "url": "string"
}
```

<h3 id="jira-add-or-update-integration-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|The identifier of the Environment.|
|settingId|path|integer(int32)|true|The id of the Setting.|
|key|path|string|true|The key of the integration link.|
|body|body|[AddOrUpdateJiraIntegrationLinkModel](#schemaaddorupdatejiraintegrationlinkmodel)|false|none|
|» clientKey|body|string|true|none|
|» description|body|string \| null|false|none|
|» jiraJwtToken|body|string|true|none|
|» url|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "integrationLinkType": "trello",
  "key": "string",
  "url": "string"
}
```

<h3 id="jira-add-or-update-integration-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When everything is ok, the integration link data returned.|[IntegrationLinkModel](#schemaintegrationlinkmodel)|
|400|Bad Request|Bad request.|None|
|401|Unauthorized|Unauthorized. In case of the Public Management API credentials are invalid.|None|
|404|Not Found|Not found.|None|
|429|Too Many Requests|Too many requests. In case of the request rate exceeds the rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

# Schemas

<h2 id="tocS_AccessType">AccessType</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstype"></a>
<a id="schema_AccessType"></a>
<a id="tocSaccesstype"></a>
<a id="tocsaccesstype"></a>

```json
"readOnly"
```

<h2 id="tocS_AddOrUpdateIntegrationLinkModel">AddOrUpdateIntegrationLinkModel</h2>
<!-- backwards compatibility -->
<a id="schemaaddorupdateintegrationlinkmodel"></a>
<a id="schema_AddOrUpdateIntegrationLinkModel"></a>
<a id="tocSaddorupdateintegrationlinkmodel"></a>
<a id="tocsaddorupdateintegrationlinkmodel"></a>

```json
{
  "description": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_AddOrUpdateJiraIntegrationLinkModel">AddOrUpdateJiraIntegrationLinkModel</h2>
<!-- backwards compatibility -->
<a id="schemaaddorupdatejiraintegrationlinkmodel"></a>
<a id="schema_AddOrUpdateJiraIntegrationLinkModel"></a>
<a id="tocSaddorupdatejiraintegrationlinkmodel"></a>
<a id="tocsaddorupdatejiraintegrationlinkmodel"></a>

```json
{
  "clientKey": "string",
  "description": "string",
  "jiraJwtToken": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientKey|string|true|none|none|
|description|string \| null|false|none|none|
|jiraJwtToken|string|true|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_AddUserToGroupRequest">AddUserToGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddusertogrouprequest"></a>
<a id="schema_AddUserToGroupRequest"></a>
<a id="tocSaddusertogrouprequest"></a>
<a id="tocsaddusertogrouprequest"></a>

```json
{
  "permissionGroupIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroupIds|[integer(int64)]|true|none|none|

<h2 id="tocS_AuditLogItemModel">AuditLogItemModel</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogitemmodel"></a>
<a id="schema_AuditLogItemModel"></a>
<a id="tocSauditlogitemmodel"></a>
<a id="tocsauditlogitemmodel"></a>

```json
{
  "actionTarget": "string",
  "auditLogDateTime": "1970-01-01T00:00:00Z",
  "auditLogId": 0,
  "auditLogType": "string",
  "auditLogTypeEnum": "productCreated",
  "details": "string",
  "userEmail": "string",
  "userName": "string",
  "where": "string",
  "why": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTarget|string \| null|false|none|none|
|auditLogDateTime|string(date-time)|false|none|none|
|auditLogId|integer(int64)|false|none|none|
|auditLogType|string \| null|false|none|none|
|auditLogTypeEnum|[AuditLogType](#schemaauditlogtype)|false|none|none|
|details|string \| null|false|none|none|
|userEmail|string \| null|false|none|none|
|userName|string \| null|false|none|none|
|where|string \| null|false|none|none|
|why|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|auditLogTypeEnum|productCreated|
|auditLogTypeEnum|productChanged|
|auditLogTypeEnum|productOwnershipTransferred|
|auditLogTypeEnum|productDeleted|
|auditLogTypeEnum|productsReordered|
|auditLogTypeEnum|teamMemberInvited|
|auditLogTypeEnum|teamMemberInvitationRevoked|
|auditLogTypeEnum|teamMemberJoined|
|auditLogTypeEnum|teamMemberPermissionGroupChanged|
|auditLogTypeEnum|teamMemberRemoved|
|auditLogTypeEnum|teamMemberLeft|
|auditLogTypeEnum|teamMemberInvitationChanged|
|auditLogTypeEnum|teamMemberInvitationResent|
|auditLogTypeEnum|teamMemberInvitationRejected|
|auditLogTypeEnum|configCreated|
|auditLogTypeEnum|configChanged|
|auditLogTypeEnum|configDeleted|
|auditLogTypeEnum|configsReordered|
|auditLogTypeEnum|environmentCreated|
|auditLogTypeEnum|environmentChanged|
|auditLogTypeEnum|environmentDeleted|
|auditLogTypeEnum|environmentsReordered|
|auditLogTypeEnum|settingCreated|
|auditLogTypeEnum|settingChanged|
|auditLogTypeEnum|settingDeleted|
|auditLogTypeEnum|settingsReordered|
|auditLogTypeEnum|settingValueChanged|
|auditLogTypeEnum|webHookCreated|
|auditLogTypeEnum|webHookChanged|
|auditLogTypeEnum|webHookDeleted|
|auditLogTypeEnum|subscriptionChanged|
|auditLogTypeEnum|permissionGroupCreated|
|auditLogTypeEnum|permissionGroupChanged|
|auditLogTypeEnum|permissionGroupDeleted|
|auditLogTypeEnum|permissionGroupDefault|
|auditLogTypeEnum|apiKeyAdded|
|auditLogTypeEnum|apiKeyRemoved|
|auditLogTypeEnum|integrationAdded|
|auditLogTypeEnum|integrationChanged|
|auditLogTypeEnum|integrationRemoved|
|auditLogTypeEnum|apiKeyConnected|
|auditLogTypeEnum|integrationLinkAdded|
|auditLogTypeEnum|integrationLinkRemoved|
|auditLogTypeEnum|organizationAdded|
|auditLogTypeEnum|organizationRemoved|
|auditLogTypeEnum|organizationChanged|
|auditLogTypeEnum|organizationSubscriptionTypeChanged|
|auditLogTypeEnum|organizationAdminChanged|
|auditLogTypeEnum|organizationAdminLeft|
|auditLogTypeEnum|organizationAdminDisabled2FA|
|auditLogTypeEnum|tagAdded|
|auditLogTypeEnum|tagChanged|
|auditLogTypeEnum|tagRemoved|
|auditLogTypeEnum|settingTagAdded|
|auditLogTypeEnum|settingTagRemoved|
|auditLogTypeEnum|publicApiAccessTokenAdded|
|auditLogTypeEnum|publicApiAccessTokenRemoved|
|auditLogTypeEnum|domainAdded|
|auditLogTypeEnum|domainVerified|
|auditLogTypeEnum|domainRemoved|
|auditLogTypeEnum|domainSamlConfigured|
|auditLogTypeEnum|domainSamlDeleted|
|auditLogTypeEnum|autoProvisioningConfigurationChanged|
|auditLogTypeEnum|organizationMemberJoined|
|auditLogTypeEnum|organizationMemberProductJoinRequested|
|auditLogTypeEnum|organizationMemberProductJoinRequestRejected|
|auditLogTypeEnum|organizationMemberProductJoinRequestApproved|
|auditLogTypeEnum|codeReferencesUploaded|
|auditLogTypeEnum|codeReferenceDeleted|
|auditLogTypeEnum|codeReferenceStaleBranchDeleted|
|auditLogTypeEnum|segmentCreated|
|auditLogTypeEnum|segmentChanged|
|auditLogTypeEnum|segmentDeleted|
|auditLogTypeEnum|webhookSigningKeyDeleted|
|auditLogTypeEnum|webhookSigningKeyCreated|

<h2 id="tocS_AuditLogType">AuditLogType</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogtype"></a>
<a id="schema_AuditLogType"></a>
<a id="tocSauditlogtype"></a>
<a id="tocsauditlogtype"></a>

```json
"productCreated"
```

<h2 id="tocS_CodeReferenceRequest">CodeReferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacodereferencerequest"></a>
<a id="schema_CodeReferenceRequest"></a>
<a id="tocScodereferencerequest"></a>
<a id="tocscodereferencerequest"></a>

```json
{
  "activeBranches": [
    "string"
  ],
  "branch": "string",
  "commitHash": "string",
  "commitUrl": "string",
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "flagReferences": [
    {
      "references": [
        {
          "file": "string",
          "fileUrl": "string",
          "postLines": [
            {
              "lineNumber": 0,
              "lineText": "string"
            }
          ],
          "preLines": [
            {
              "lineNumber": 0,
              "lineText": "string"
            }
          ],
          "referenceLine": {
            "lineNumber": 0,
            "lineText": "string"
          }
        }
      ],
      "settingId": 0
    }
  ],
  "repository": "string",
  "uploader": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeBranches|[string]|false|none|The currently active branches of the repository. Each previously uploaded report that belongs to a non-reported active branch is being deleted.|
|branch|string|true|none|The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard)|
|commitHash|string \| null|false|none|The related commit's hash. (Appears on the ConfigCat Dashboard)|
|commitUrl|string \| null|false|none|The related commit's URL. (Appears on the ConfigCat Dashboard)|
|configId|string(uuid)|true|none|The Config's identifier the scanning was performed against.|
|flagReferences|[[FlagReference](#schemaflagreference)]|false|none|The actual code reference collection.|
|repository|string|true|none|The source control repository that contains the scanned code. (Source of the repository selector on the ConfigCat Dashboard)|
|uploader|string \| null|false|none|The scanning tool's name. (Appears on the ConfigCat Dashboard)|

<h2 id="tocS_ConfigModel">ConfigModel</h2>
<!-- backwards compatibility -->
<a id="schemaconfigmodel"></a>
<a id="schema_ConfigModel"></a>
<a id="tocSconfigmodel"></a>
<a id="tocsconfigmodel"></a>

```json
{
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "name": "string",
  "order": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configId|string(uuid)|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|product|[ProductModel](#schemaproductmodel)|false|none|none|

<h2 id="tocS_ConfigModel-haljson">ConfigModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemaconfigmodel-haljson"></a>
<a id="schema_ConfigModel-haljson"></a>
<a id="tocSconfigmodel-haljson"></a>
<a id="tocsconfigmodel-haljson"></a>

```json
{
  "_embedded": {
    "product": {
      "_embedded": {
        "organization": {
          "_links": {
            "members": "string",
            "products": "string"
          },
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      },
      "_links": {
        "configs": "string",
        "environments": "string",
        "members": "string",
        "permission-groups": "string",
        "segments": "string",
        "self": "string",
        "tags": "string"
      },
      "description": "string",
      "name": "string",
      "order": 0,
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "_links": {
    "self": "string",
    "settings": "string"
  },
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "name": "string",
  "order": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|configId|string(uuid)|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|

<h2 id="tocS_ConfigSettingValueModel">ConfigSettingValueModel</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsettingvaluemodel"></a>
<a id="schema_ConfigSettingValueModel"></a>
<a id="tocSconfigsettingvaluemodel"></a>
<a id="tocsconfigsettingvaluemodel"></a>

```json
{
  "integrationLinks": [
    {
      "description": "string",
      "integrationLinkType": "trello",
      "key": "string",
      "url": "string"
    }
  ],
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "settingTags": [
    {
      "color": "string",
      "name": "string",
      "settingTagId": 0,
      "tagId": 0
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrationLinks|[[IntegrationLinkModel](#schemaintegrationlinkmodel)]|false|none|none|
|lastUpdaterUserEmail|string \| null|false|none|none|
|lastUpdaterUserFullName|string \| null|false|none|none|
|rolloutPercentageItems|[[RolloutPercentageItemModel](#schemarolloutpercentageitemmodel)]|false|none|The percentage rule collection.|
|rolloutRules|[[RolloutRuleModel](#schemarolloutrulemodel)]|false|none|The targeting rule collection.|
|setting|[SettingDataModel](#schemasettingdatamodel)|false|none|none|
|settingTags|[[SettingTagModel](#schemasettingtagmodel)]|false|none|none|
|updatedAt|string(date-time) \| null|false|none|none|
|value|object \| null|false|none|The value to serve. It must respect the setting type.|

<h2 id="tocS_ConfigSettingValuesModel">ConfigSettingValuesModel</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsettingvaluesmodel"></a>
<a id="schema_ConfigSettingValuesModel"></a>
<a id="tocSconfigsettingvaluesmodel"></a>
<a id="tocsconfigsettingvaluesmodel"></a>

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "readOnly": true,
  "settingValues": [
    {
      "integrationLinks": [
        {
          "description": "string",
          "integrationLinkType": "trello",
          "key": "string",
          "url": "string"
        }
      ],
      "lastUpdaterUserEmail": "string",
      "lastUpdaterUserFullName": "string",
      "rolloutPercentageItems": [
        {
          "percentage": 0,
          "value": null
        }
      ],
      "rolloutRules": [
        {
          "comparator": "isOneOf",
          "comparisonAttribute": "string",
          "comparisonValue": "string",
          "segmentComparator": "isIn",
          "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "value": null
        }
      ],
      "setting": {
        "createdAt": "1970-01-01T00:00:00Z",
        "creatorEmail": "string",
        "creatorFullName": "string",
        "hint": "string",
        "isWatching": true,
        "key": "string",
        "name": "string",
        "order": 0,
        "settingId": 0,
        "settingType": "boolean"
      },
      "settingTags": [
        {
          "color": "string",
          "name": "string",
          "settingTagId": 0,
          "tagId": 0
        }
      ],
      "updatedAt": "1970-01-01T00:00:00Z",
      "value": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[ConfigModel](#schemaconfigmodel)|false|none|none|
|environment|[EnvironmentModel](#schemaenvironmentmodel)|false|none|none|
|readOnly|boolean|false|none|none|
|settingValues|[[ConfigSettingValueModel](#schemaconfigsettingvaluemodel)]|false|none|none|

<h2 id="tocS_ConnectRequest">ConnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectrequest"></a>
<a id="schema_ConnectRequest"></a>
<a id="tocSconnectrequest"></a>
<a id="tocsconnectrequest"></a>

```json
{
  "clientKey": "string",
  "jiraJwtToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientKey|string|true|none|none|
|jiraJwtToken|string|true|none|none|

<h2 id="tocS_CreateConfigRequest">CreateConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigrequest"></a>
<a id="schema_CreateConfigRequest"></a>
<a id="tocScreateconfigrequest"></a>
<a id="tocscreateconfigrequest"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_CreateEnvironmentModel">CreateEnvironmentModel</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentmodel"></a>
<a id="schema_CreateEnvironmentModel"></a>
<a id="tocScreateenvironmentmodel"></a>
<a id="tocscreateenvironmentmodel"></a>

```json
{
  "color": "string",
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|description|string \| null|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_CreateOrUpdateEnvironmentAccessModel">CreateOrUpdateEnvironmentAccessModel</h2>
<!-- backwards compatibility -->
<a id="schemacreateorupdateenvironmentaccessmodel"></a>
<a id="schema_CreateOrUpdateEnvironmentAccessModel"></a>
<a id="tocScreateorupdateenvironmentaccessmodel"></a>
<a id="tocscreateorupdateenvironmentaccessmodel"></a>

```json
{
  "color": "string",
  "description": "string",
  "environmentAccessType": "full",
  "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "order": 0,
  "reasonRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|description|string \| null|false|none|none|
|environmentAccessType|[EnvironmentAccessType](#schemaenvironmentaccesstype)|false|none|none|
|environmentId|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|reasonRequired|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|environmentAccessType|full|
|environmentAccessType|readOnly|
|environmentAccessType|none|

<h2 id="tocS_CreatePermissionGroupRequest">CreatePermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissiongrouprequest"></a>
<a id="schema_CreatePermissionGroupRequest"></a>
<a id="tocScreatepermissiongrouprequest"></a>
<a id="tocscreatepermissiongrouprequest"></a>

```json
{
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessType|[AccessType](#schemaaccesstype)|false|none|none|
|canCreateOrUpdateConfig|boolean|false|none|none|
|canCreateOrUpdateEnvironment|boolean|false|none|none|
|canCreateOrUpdateSegments|boolean|false|none|none|
|canCreateOrUpdateSetting|boolean|false|none|none|
|canCreateOrUpdateTag|boolean|false|none|none|
|canDeleteConfig|boolean|false|none|none|
|canDeleteEnvironment|boolean|false|none|none|
|canDeleteSegments|boolean|false|none|none|
|canDeleteSetting|boolean|false|none|none|
|canDeleteTag|boolean|false|none|none|
|canManageIntegrations|boolean|false|none|none|
|canManageMembers|boolean|false|none|none|
|canManageProductPreferences|boolean|false|none|none|
|canManageWebhook|boolean|false|none|none|
|canRotateSdkKey|boolean|false|none|none|
|canTagSetting|boolean|false|none|none|
|canUseExportImport|boolean|false|none|none|
|canViewProductAuditLog|boolean|false|none|none|
|canViewProductStatistics|boolean|false|none|none|
|canViewSdkKey|boolean|false|none|none|
|environmentAccesses|[[CreateOrUpdateEnvironmentAccessModel](#schemacreateorupdateenvironmentaccessmodel)]|false|none|none|
|name|string|true|none|none|
|newEnvironmentAccessType|[EnvironmentAccessType](#schemaenvironmentaccesstype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accessType|readOnly|
|accessType|full|
|accessType|custom|
|newEnvironmentAccessType|full|
|newEnvironmentAccessType|readOnly|
|newEnvironmentAccessType|none|

<h2 id="tocS_CreateProductRequest">CreateProductRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateproductrequest"></a>
<a id="schema_CreateProductRequest"></a>
<a id="tocScreateproductrequest"></a>
<a id="tocscreateproductrequest"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_CreateSegmentModel">CreateSegmentModel</h2>
<!-- backwards compatibility -->
<a id="schemacreatesegmentmodel"></a>
<a id="schema_CreateSegmentModel"></a>
<a id="tocScreatesegmentmodel"></a>
<a id="tocscreatesegmentmodel"></a>

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|[RolloutRuleComparator](#schemarolloutrulecomparator)|true|none|none|
|comparisonAttribute|string|true|none|none|
|comparisonValue|string|true|none|none|
|description|string \| null|false|none|none|
|name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|comparator|isOneOf|
|comparator|isNotOneOf|
|comparator|contains|
|comparator|doesNotContain|
|comparator|semVerIsOneOf|
|comparator|semVerIsNotOneOf|
|comparator|semVerLess|
|comparator|semVerLessOrEquals|
|comparator|semVerGreater|
|comparator|semVerGreaterOrEquals|
|comparator|numberEquals|
|comparator|numberDoesNotEqual|
|comparator|numberLess|
|comparator|numberLessOrEquals|
|comparator|numberGreater|
|comparator|numberGreaterOrEquals|
|comparator|sensitiveIsOneOf|
|comparator|sensitiveIsNotOneOf|

<h2 id="tocS_CreateSettingInitialValues">CreateSettingInitialValues</h2>
<!-- backwards compatibility -->
<a id="schemacreatesettinginitialvalues"></a>
<a id="schema_CreateSettingInitialValues"></a>
<a id="tocScreatesettinginitialvalues"></a>
<a id="tocscreatesettinginitialvalues"></a>

```json
{
  "hint": "string",
  "initialValues": [
    {
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "key": "string",
  "name": "string",
  "settingType": "boolean",
  "tags": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hint|string \| null|false|none|A short description for the setting, shown on the Dashboard UI.|
|initialValues|[[InitialValue](#schemainitialvalue)]|false|none|Optional, initial values of the feature flag or setting in the given Environments.|
|key|string|true|none|The key of the setting.|
|name|string|true|none|The name of the setting, shown on the Dashboard UI.|
|settingType|[SettingType](#schemasettingtype)|true|none|none|
|tags|[integer(int64)]|false|none|The IDs of the tags which are attached to the setting.|

#### Enumerated Values

|Property|Value|
|---|---|
|settingType|boolean|
|settingType|string|
|settingType|int|
|settingType|double|

<h2 id="tocS_CreateTagModel">CreateTagModel</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagmodel"></a>
<a id="schema_CreateTagModel"></a>
<a id="tocScreatetagmodel"></a>
<a id="tocscreatetagmodel"></a>

```json
{
  "color": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_DeleteIntegrationLinkModel">DeleteIntegrationLinkModel</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintegrationlinkmodel"></a>
<a id="schema_DeleteIntegrationLinkModel"></a>
<a id="tocSdeleteintegrationlinkmodel"></a>
<a id="tocsdeleteintegrationlinkmodel"></a>

```json
{
  "hasRemainingIntegrationLink": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasRemainingIntegrationLink|boolean|false|none|none|

<h2 id="tocS_DeleteRepositoryReportsRequest">DeleteRepositoryReportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryreportsrequest"></a>
<a id="schema_DeleteRepositoryReportsRequest"></a>
<a id="tocSdeleterepositoryreportsrequest"></a>
<a id="tocsdeleterepositoryreportsrequest"></a>

```json
{
  "branch": "string",
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "repository": "string",
  "settingId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string \| null|false|none|If it's set, only this branch's reports belonging to the given repository will be deleted.|
|configId|string(uuid)|true|none|The Config's identifier from where the reports should be deleted.|
|repository|string|true|none|The source control repository which's reports should be deleted.|
|settingId|integer(int32) \| null|false|none|If it's set, only this setting's reports belonging to the given repository will be deleted.|

<h2 id="tocS_EnvironmentAccessModel">EnvironmentAccessModel</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccessmodel"></a>
<a id="schema_EnvironmentAccessModel"></a>
<a id="tocSenvironmentaccessmodel"></a>
<a id="tocsenvironmentaccessmodel"></a>

```json
{
  "color": "string",
  "description": "string",
  "environmentAccessType": "full",
  "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "order": 0,
  "reasonRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|description|string \| null|false|none|none|
|environmentAccessType|[EnvironmentAccessType](#schemaenvironmentaccesstype)|false|none|none|
|environmentId|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|reasonRequired|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|environmentAccessType|full|
|environmentAccessType|readOnly|
|environmentAccessType|none|

<h2 id="tocS_EnvironmentAccessType">EnvironmentAccessType</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccesstype"></a>
<a id="schema_EnvironmentAccessType"></a>
<a id="tocSenvironmentaccesstype"></a>
<a id="tocsenvironmentaccesstype"></a>

```json
"full"
```

<h2 id="tocS_EnvironmentModel">EnvironmentModel</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentmodel"></a>
<a id="schema_EnvironmentModel"></a>
<a id="tocSenvironmentmodel"></a>
<a id="tocsenvironmentmodel"></a>

```json
{
  "color": "string",
  "description": "string",
  "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "order": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "reasonRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|description|string \| null|false|none|none|
|environmentId|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|product|[ProductModel](#schemaproductmodel)|false|none|none|
|reasonRequired|boolean|false|none|none|

<h2 id="tocS_EnvironmentModel-haljson">EnvironmentModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentmodel-haljson"></a>
<a id="schema_EnvironmentModel-haljson"></a>
<a id="tocSenvironmentmodel-haljson"></a>
<a id="tocsenvironmentmodel-haljson"></a>

```json
{
  "_embedded": {
    "product": {
      "_embedded": {
        "organization": {
          "_links": {
            "members": "string",
            "products": "string"
          },
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      },
      "_links": {
        "configs": "string",
        "environments": "string",
        "members": "string",
        "permission-groups": "string",
        "segments": "string",
        "self": "string",
        "tags": "string"
      },
      "description": "string",
      "name": "string",
      "order": 0,
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "_links": {
    "self": "string"
  },
  "color": "string",
  "description": "string",
  "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "order": 0,
  "reasonRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|color|string \| null|false|none|none|
|description|string \| null|false|none|none|
|environmentId|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|reasonRequired|boolean|false|none|none|

<h2 id="tocS_FlagReference">FlagReference</h2>
<!-- backwards compatibility -->
<a id="schemaflagreference"></a>
<a id="schema_FlagReference"></a>
<a id="tocSflagreference"></a>
<a id="tocsflagreference"></a>

```json
{
  "references": [
    {
      "file": "string",
      "fileUrl": "string",
      "postLines": [
        {
          "lineNumber": 0,
          "lineText": "string"
        }
      ],
      "preLines": [
        {
          "lineNumber": 0,
          "lineText": "string"
        }
      ],
      "referenceLine": {
        "lineNumber": 0,
        "lineText": "string"
      }
    }
  ],
  "settingId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|references|[[ReferenceLines](#schemareferencelines)]|true|none|The actual references to the given Feature Flag or Setting.|
|settingId|integer(int32)|true|none|The identifier of the Feature Flag or Setting the code reference belongs to.|

<h2 id="tocS_InitialValue">InitialValue</h2>
<!-- backwards compatibility -->
<a id="schemainitialvalue"></a>
<a id="schema_InitialValue"></a>
<a id="tocSinitialvalue"></a>
<a id="tocsinitialvalue"></a>

```json
{
  "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|string(uuid)|false|none|The ID of the Environment where the initial value should be set.|
|value|object \| null|false|none|The initial value in the given Environment. It must respect the setting type.|

<h2 id="tocS_IntegrationLinkDetail">IntegrationLinkDetail</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationlinkdetail"></a>
<a id="schema_IntegrationLinkDetail"></a>
<a id="tocSintegrationlinkdetail"></a>
<a id="tocsintegrationlinkdetail"></a>

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "readOnly": true,
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[ConfigModel](#schemaconfigmodel)|false|none|none|
|environment|[EnvironmentModel](#schemaenvironmentmodel)|false|none|none|
|product|[ProductModel](#schemaproductmodel)|false|none|none|
|readOnly|boolean|false|none|none|
|setting|[SettingDataModel](#schemasettingdatamodel)|false|none|none|
|status|string \| null|false|none|none|

<h2 id="tocS_IntegrationLinkDetailsModel">IntegrationLinkDetailsModel</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationlinkdetailsmodel"></a>
<a id="schema_IntegrationLinkDetailsModel"></a>
<a id="tocSintegrationlinkdetailsmodel"></a>
<a id="tocsintegrationlinkdetailsmodel"></a>

```json
{
  "allIntegrationLinkCount": 0,
  "details": [
    {
      "config": {
        "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "name": "string",
        "order": 0,
        "product": {
          "description": "string",
          "name": "string",
          "order": 0,
          "organization": {
            "name": "string",
            "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          },
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        }
      },
      "environment": {
        "color": "string",
        "description": "string",
        "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "order": 0,
        "product": {
          "description": "string",
          "name": "string",
          "order": 0,
          "organization": {
            "name": "string",
            "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          },
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        },
        "reasonRequired": true
      },
      "product": {
        "description": "string",
        "name": "string",
        "order": 0,
        "organization": {
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reasonRequired": true
      },
      "readOnly": true,
      "setting": {
        "createdAt": "1970-01-01T00:00:00Z",
        "creatorEmail": "string",
        "creatorFullName": "string",
        "hint": "string",
        "isWatching": true,
        "key": "string",
        "name": "string",
        "order": 0,
        "settingId": 0,
        "settingType": "boolean"
      },
      "status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allIntegrationLinkCount|integer(int32)|false|none|none|
|details|[[IntegrationLinkDetail](#schemaintegrationlinkdetail)]|false|read-only|none|

<h2 id="tocS_IntegrationLinkModel">IntegrationLinkModel</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationlinkmodel"></a>
<a id="schema_IntegrationLinkModel"></a>
<a id="tocSintegrationlinkmodel"></a>
<a id="tocsintegrationlinkmodel"></a>

```json
{
  "description": "string",
  "integrationLinkType": "trello",
  "key": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|integrationLinkType|[IntegrationLinkType](#schemaintegrationlinktype)|false|none|none|
|key|string \| null|false|none|none|
|url|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|integrationLinkType|trello|
|integrationLinkType|jira|
|integrationLinkType|monday|

<h2 id="tocS_IntegrationLinkType">IntegrationLinkType</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationlinktype"></a>
<a id="schema_IntegrationLinkType"></a>
<a id="tocSintegrationlinktype"></a>
<a id="tocsintegrationlinktype"></a>

```json
"trello"
```

<h2 id="tocS_InviteMembersRequest">InviteMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvitemembersrequest"></a>
<a id="schema_InviteMembersRequest"></a>
<a id="tocSinvitemembersrequest"></a>
<a id="tocsinvitemembersrequest"></a>

```json
{
  "emails": [
    "string"
  ],
  "permissionGroupId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|true|none|none|
|permissionGroupId|integer(int64)|true|none|none|

<h2 id="tocS_JsonNode">JsonNode</h2>
<!-- backwards compatibility -->
<a id="schemajsonnode"></a>
<a id="schema_JsonNode"></a>
<a id="tocSjsonnode"></a>
<a id="tocsjsonnode"></a>

```json
{
  "options": {
    "propertyNameCaseInsensitive": true
  },
  "parent": {
    "options": {
      "propertyNameCaseInsensitive": true
    },
    "parent": {},
    "root": {}
  },
  "root": {
    "options": {
      "propertyNameCaseInsensitive": true
    },
    "parent": {},
    "root": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[JsonNodeOptions](#schemajsonnodeoptions)|false|none|none|
|parent|[JsonNode](#schemajsonnode)|false|none|none|
|root|[JsonNode](#schemajsonnode)|false|none|none|

<h2 id="tocS_JsonNodeOptions">JsonNodeOptions</h2>
<!-- backwards compatibility -->
<a id="schemajsonnodeoptions"></a>
<a id="schema_JsonNodeOptions"></a>
<a id="tocSjsonnodeoptions"></a>
<a id="tocsjsonnodeoptions"></a>

```json
{
  "propertyNameCaseInsensitive": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyNameCaseInsensitive|boolean|false|none|none|

<h2 id="tocS_JsonPatch">JsonPatch</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatch"></a>
<a id="schema_JsonPatch"></a>
<a id="tocSjsonpatch"></a>
<a id="tocsjsonpatch"></a>

```json
{
  "operations": [
    {
      "from": {
        "isUriEncoded": true,
        "kind": "unspecified",
        "segments": [
          {
            "source": "string",
            "value": "string"
          }
        ],
        "source": "string"
      },
      "op": "unknown",
      "path": {
        "isUriEncoded": true,
        "kind": "unspecified",
        "segments": [
          {
            "source": "string",
            "value": "string"
          }
        ],
        "source": "string"
      },
      "value": {
        "options": {
          "propertyNameCaseInsensitive": true
        },
        "parent": {},
        "root": {}
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[PatchOperation](#schemapatchoperation)]|false|none|none|

<h2 id="tocS_JsonPointer">JsonPointer</h2>
<!-- backwards compatibility -->
<a id="schemajsonpointer"></a>
<a id="schema_JsonPointer"></a>
<a id="tocSjsonpointer"></a>
<a id="tocsjsonpointer"></a>

```json
{
  "isUriEncoded": true,
  "kind": "unspecified",
  "segments": [
    {
      "source": "string",
      "value": "string"
    }
  ],
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isUriEncoded|boolean|false|read-only|none|
|kind|[JsonPointerKind](#schemajsonpointerkind)|false|none|none|
|segments|[[PointerSegment](#schemapointersegment)]|false|read-only|none|
|source|string \| null|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|unspecified|
|kind|plain|
|kind|uriEncoded|

<h2 id="tocS_JsonPointerKind">JsonPointerKind</h2>
<!-- backwards compatibility -->
<a id="schemajsonpointerkind"></a>
<a id="schema_JsonPointerKind"></a>
<a id="tocSjsonpointerkind"></a>
<a id="tocsjsonpointerkind"></a>

```json
"unspecified"
```

<h2 id="tocS_MeModel">MeModel</h2>
<!-- backwards compatibility -->
<a id="schemamemodel"></a>
<a id="schema_MeModel"></a>
<a id="tocSmemodel"></a>
<a id="tocsmemodel"></a>

```json
{
  "email": "string",
  "fullName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|read-only|none|
|fullName|string \| null|false|read-only|none|

<h2 id="tocS_MemberModel">MemberModel</h2>
<!-- backwards compatibility -->
<a id="schemamembermodel"></a>
<a id="schema_MemberModel"></a>
<a id="tocSmembermodel"></a>
<a id="tocsmembermodel"></a>

```json
{
  "email": "string",
  "fullName": "string",
  "permissionGroupId": 0,
  "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|fullName|string \| null|false|none|none|
|permissionGroupId|integer(int64)|false|none|none|
|productId|string(uuid)|false|none|none|
|userId|string \| null|false|none|none|

<h2 id="tocS_OperationType">OperationType</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtype"></a>
<a id="schema_OperationType"></a>
<a id="tocSoperationtype"></a>
<a id="tocsoperationtype"></a>

```json
"unknown"
```

<h2 id="tocS_OrganizationModel">OrganizationModel</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationmodel"></a>
<a id="schema_OrganizationModel"></a>
<a id="tocSorganizationmodel"></a>
<a id="tocsorganizationmodel"></a>

```json
{
  "name": "string",
  "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|organizationId|string(uuid)|false|none|none|

<h2 id="tocS_OrganizationModel-haljson">OrganizationModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationmodel-haljson"></a>
<a id="schema_OrganizationModel-haljson"></a>
<a id="tocSorganizationmodel-haljson"></a>
<a id="tocsorganizationmodel-haljson"></a>

```json
{
  "_links": {
    "members": "string",
    "products": "string"
  },
  "name": "string",
  "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|name|string \| null|false|none|none|
|organizationId|string(uuid)|false|none|none|

<h2 id="tocS_PatchOperation">PatchOperation</h2>
<!-- backwards compatibility -->
<a id="schemapatchoperation"></a>
<a id="schema_PatchOperation"></a>
<a id="tocSpatchoperation"></a>
<a id="tocspatchoperation"></a>

```json
{
  "from": {
    "isUriEncoded": true,
    "kind": "unspecified",
    "segments": [
      {
        "source": "string",
        "value": "string"
      }
    ],
    "source": "string"
  },
  "op": "unknown",
  "path": {
    "isUriEncoded": true,
    "kind": "unspecified",
    "segments": [
      {
        "source": "string",
        "value": "string"
      }
    ],
    "source": "string"
  },
  "value": {
    "options": {
      "propertyNameCaseInsensitive": true
    },
    "parent": {},
    "root": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[JsonPointer](#schemajsonpointer)|false|none|none|
|op|[OperationType](#schemaoperationtype)|false|none|none|
|path|[JsonPointer](#schemajsonpointer)|false|none|none|
|value|[JsonNode](#schemajsonnode)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|op|unknown|
|op|add|
|op|remove|
|op|replace|
|op|move|
|op|copy|
|op|test|

<h2 id="tocS_PermissionGroupModel">PermissionGroupModel</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupmodel"></a>
<a id="schema_PermissionGroupModel"></a>
<a id="tocSpermissiongroupmodel"></a>
<a id="tocspermissiongroupmodel"></a>

```json
{
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full",
  "permissionGroupId": 0,
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessType|[AccessType](#schemaaccesstype)|false|none|none|
|canCreateOrUpdateConfig|boolean|false|none|none|
|canCreateOrUpdateEnvironment|boolean|false|none|none|
|canCreateOrUpdateSegments|boolean|false|none|none|
|canCreateOrUpdateSetting|boolean|false|none|none|
|canCreateOrUpdateTag|boolean|false|none|none|
|canDeleteConfig|boolean|false|none|none|
|canDeleteEnvironment|boolean|false|none|none|
|canDeleteSegments|boolean|false|none|none|
|canDeleteSetting|boolean|false|none|none|
|canDeleteTag|boolean|false|none|none|
|canManageIntegrations|boolean|false|none|none|
|canManageMembers|boolean|false|none|none|
|canManageProductPreferences|boolean|false|none|none|
|canManageWebhook|boolean|false|none|none|
|canRotateSdkKey|boolean|false|none|none|
|canTagSetting|boolean|false|none|none|
|canUseExportImport|boolean|false|none|none|
|canViewProductAuditLog|boolean|false|none|none|
|canViewProductStatistics|boolean|false|none|none|
|canViewSdkKey|boolean|false|none|none|
|environmentAccesses|[[EnvironmentAccessModel](#schemaenvironmentaccessmodel)]|false|none|none|
|name|string \| null|false|none|none|
|newEnvironmentAccessType|[EnvironmentAccessType](#schemaenvironmentaccesstype)|false|none|none|
|permissionGroupId|integer(int64)|false|none|none|
|product|[ProductModel](#schemaproductmodel)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accessType|readOnly|
|accessType|full|
|accessType|custom|
|newEnvironmentAccessType|full|
|newEnvironmentAccessType|readOnly|
|newEnvironmentAccessType|none|

<h2 id="tocS_PermissionGroupModel-haljson">PermissionGroupModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupmodel-haljson"></a>
<a id="schema_PermissionGroupModel-haljson"></a>
<a id="tocSpermissiongroupmodel-haljson"></a>
<a id="tocspermissiongroupmodel-haljson"></a>

```json
{
  "_embedded": {
    "product": {
      "_embedded": {
        "organization": {
          "_links": {
            "members": "string",
            "products": "string"
          },
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      },
      "_links": {
        "configs": "string",
        "environments": "string",
        "members": "string",
        "permission-groups": "string",
        "segments": "string",
        "self": "string",
        "tags": "string"
      },
      "description": "string",
      "name": "string",
      "order": 0,
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "_links": {
    "self": "string"
  },
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full",
  "permissionGroupId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|accessType|[AccessType](#schemaaccesstype)|false|none|none|
|canCreateOrUpdateConfig|boolean|false|none|none|
|canCreateOrUpdateEnvironment|boolean|false|none|none|
|canCreateOrUpdateSegments|boolean|false|none|none|
|canCreateOrUpdateSetting|boolean|false|none|none|
|canCreateOrUpdateTag|boolean|false|none|none|
|canDeleteConfig|boolean|false|none|none|
|canDeleteEnvironment|boolean|false|none|none|
|canDeleteSegments|boolean|false|none|none|
|canDeleteSetting|boolean|false|none|none|
|canDeleteTag|boolean|false|none|none|
|canManageIntegrations|boolean|false|none|none|
|canManageMembers|boolean|false|none|none|
|canManageProductPreferences|boolean|false|none|none|
|canManageWebhook|boolean|false|none|none|
|canRotateSdkKey|boolean|false|none|none|
|canTagSetting|boolean|false|none|none|
|canUseExportImport|boolean|false|none|none|
|canViewProductAuditLog|boolean|false|none|none|
|canViewProductStatistics|boolean|false|none|none|
|canViewSdkKey|boolean|false|none|none|
|environmentAccesses|[[EnvironmentAccessModel](#schemaenvironmentaccessmodel)]|false|none|none|
|name|string \| null|false|none|none|
|newEnvironmentAccessType|[EnvironmentAccessType](#schemaenvironmentaccesstype)|false|none|none|
|permissionGroupId|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accessType|readOnly|
|accessType|full|
|accessType|custom|
|newEnvironmentAccessType|full|
|newEnvironmentAccessType|readOnly|
|newEnvironmentAccessType|none|

<h2 id="tocS_PointerSegment">PointerSegment</h2>
<!-- backwards compatibility -->
<a id="schemapointersegment"></a>
<a id="schema_PointerSegment"></a>
<a id="tocSpointersegment"></a>
<a id="tocspointersegment"></a>

```json
{
  "source": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string \| null|false|read-only|none|
|value|string \| null|false|read-only|none|

<h2 id="tocS_ProductModel">ProductModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductmodel"></a>
<a id="schema_ProductModel"></a>
<a id="tocSproductmodel"></a>
<a id="tocsproductmodel"></a>

```json
{
  "description": "string",
  "name": "string",
  "order": 0,
  "organization": {
    "name": "string",
    "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reasonRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|organization|[OrganizationModel](#schemaorganizationmodel)|false|none|none|
|productId|string(uuid)|false|none|none|
|reasonRequired|boolean|false|none|none|

<h2 id="tocS_ProductModel-haljson">ProductModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemaproductmodel-haljson"></a>
<a id="schema_ProductModel-haljson"></a>
<a id="tocSproductmodel-haljson"></a>
<a id="tocsproductmodel-haljson"></a>

```json
{
  "_embedded": {
    "organization": {
      "_links": {
        "members": "string",
        "products": "string"
      },
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  },
  "_links": {
    "configs": "string",
    "environments": "string",
    "members": "string",
    "permission-groups": "string",
    "segments": "string",
    "self": "string",
    "tags": "string"
  },
  "description": "string",
  "name": "string",
  "order": 0,
  "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reasonRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|productId|string(uuid)|false|none|none|
|reasonRequired|boolean|false|none|none|

<h2 id="tocS_ReferenceLine">ReferenceLine</h2>
<!-- backwards compatibility -->
<a id="schemareferenceline"></a>
<a id="schema_ReferenceLine"></a>
<a id="tocSreferenceline"></a>
<a id="tocsreferenceline"></a>

```json
{
  "lineNumber": 0,
  "lineText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineNumber|integer(int32)|true|none|The line number of the reference line.|
|lineText|string \| null|false|none|The content of the reference line.|

<h2 id="tocS_ReferenceLines">ReferenceLines</h2>
<!-- backwards compatibility -->
<a id="schemareferencelines"></a>
<a id="schema_ReferenceLines"></a>
<a id="tocSreferencelines"></a>
<a id="tocsreferencelines"></a>

```json
{
  "file": "string",
  "fileUrl": "string",
  "postLines": [
    {
      "lineNumber": 0,
      "lineText": "string"
    }
  ],
  "preLines": [
    {
      "lineNumber": 0,
      "lineText": "string"
    }
  ],
  "referenceLine": {
    "lineNumber": 0,
    "lineText": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|true|none|The file's name in where the code reference has been found. (Appears on the ConfigCat Dashboard)|
|fileUrl|string \| null|false|none|The file's url. (Used to point to the file on the repository's website)|
|postLines|[[ReferenceLine](#schemareferenceline)]|false|none|The lines after the actual reference line.|
|preLines|[[ReferenceLine](#schemareferenceline)]|false|none|The lines before the actual reference line.|
|referenceLine|[ReferenceLine](#schemareferenceline)|true|none|none|

<h2 id="tocS_RolloutPercentageItemModel">RolloutPercentageItemModel</h2>
<!-- backwards compatibility -->
<a id="schemarolloutpercentageitemmodel"></a>
<a id="schema_RolloutPercentageItemModel"></a>
<a id="tocSrolloutpercentageitemmodel"></a>
<a id="tocsrolloutpercentageitemmodel"></a>

```json
{
  "percentage": 0,
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentage|integer(int64)|true|none|The percentage value for the rule.|
|value|object \| null|false|none|The value to serve when the user falls in the percentage rule. It must respect the setting type.|

<h2 id="tocS_RolloutRuleComparator">RolloutRuleComparator</h2>
<!-- backwards compatibility -->
<a id="schemarolloutrulecomparator"></a>
<a id="schema_RolloutRuleComparator"></a>
<a id="tocSrolloutrulecomparator"></a>
<a id="tocsrolloutrulecomparator"></a>

```json
"isOneOf"
```

<h2 id="tocS_RolloutRuleModel">RolloutRuleModel</h2>
<!-- backwards compatibility -->
<a id="schemarolloutrulemodel"></a>
<a id="schema_RolloutRuleModel"></a>
<a id="tocSrolloutrulemodel"></a>
<a id="tocsrolloutrulemodel"></a>

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "segmentComparator": "isIn",
  "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|[RolloutRuleComparator](#schemarolloutrulecomparator)|false|none|none|
|comparisonAttribute|string \| null|false|none|The user attribute to compare.|
|comparisonValue|string \| null|false|none|The value to compare against.|
|segmentComparator|[SegmentComparator](#schemasegmentcomparator)|false|none|none|
|segmentId|string(uuid) \| null|false|none|The segment to compare against.|
|value|object \| null|false|none|The value to serve when the comparison matches. It must respect the setting type.|

#### Enumerated Values

|Property|Value|
|---|---|
|comparator|isOneOf|
|comparator|isNotOneOf|
|comparator|contains|
|comparator|doesNotContain|
|comparator|semVerIsOneOf|
|comparator|semVerIsNotOneOf|
|comparator|semVerLess|
|comparator|semVerLessOrEquals|
|comparator|semVerGreater|
|comparator|semVerGreaterOrEquals|
|comparator|numberEquals|
|comparator|numberDoesNotEqual|
|comparator|numberLess|
|comparator|numberLessOrEquals|
|comparator|numberGreater|
|comparator|numberGreaterOrEquals|
|comparator|sensitiveIsOneOf|
|comparator|sensitiveIsNotOneOf|
|segmentComparator|isIn|
|segmentComparator|isNotIn|

<h2 id="tocS_SdkKeysModel">SdkKeysModel</h2>
<!-- backwards compatibility -->
<a id="schemasdkkeysmodel"></a>
<a id="schema_SdkKeysModel"></a>
<a id="tocSsdkkeysmodel"></a>
<a id="tocssdkkeysmodel"></a>

```json
{
  "primary": "string",
  "secondary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary|string \| null|false|none|none|
|secondary|string \| null|false|none|none|

<h2 id="tocS_SegmentComparator">SegmentComparator</h2>
<!-- backwards compatibility -->
<a id="schemasegmentcomparator"></a>
<a id="schema_SegmentComparator"></a>
<a id="tocSsegmentcomparator"></a>
<a id="tocssegmentcomparator"></a>

```json
"isIn"
```

<h2 id="tocS_SegmentListModel">SegmentListModel</h2>
<!-- backwards compatibility -->
<a id="schemasegmentlistmodel"></a>
<a id="schema_SegmentListModel"></a>
<a id="tocSsegmentlistmodel"></a>
<a id="tocssegmentlistmodel"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "creatorEmail": "string",
  "creatorFullName": "string",
  "description": "string",
  "lastUpdaterEmail": "string",
  "lastUpdaterFullName": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedAt": "1970-01-01T00:00:00Z",
  "usage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|creatorEmail|string \| null|false|none|none|
|creatorFullName|string \| null|false|none|none|
|description|string \| null|false|none|none|
|lastUpdaterEmail|string \| null|false|none|none|
|lastUpdaterFullName|string \| null|false|none|none|
|name|string \| null|false|none|none|
|product|[ProductModel](#schemaproductmodel)|false|none|none|
|segmentId|string(uuid)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|usage|integer(int32)|false|none|none|

<h2 id="tocS_SegmentListModel-haljson">SegmentListModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemasegmentlistmodel-haljson"></a>
<a id="schema_SegmentListModel-haljson"></a>
<a id="tocSsegmentlistmodel-haljson"></a>
<a id="tocssegmentlistmodel-haljson"></a>

```json
{
  "_embedded": {
    "product": {
      "_embedded": {
        "organization": {
          "_links": {
            "members": "string",
            "products": "string"
          },
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      },
      "_links": {
        "configs": "string",
        "environments": "string",
        "members": "string",
        "permission-groups": "string",
        "segments": "string",
        "self": "string",
        "tags": "string"
      },
      "description": "string",
      "name": "string",
      "order": 0,
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "_links": {
    "self": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "creatorEmail": "string",
  "creatorFullName": "string",
  "description": "string",
  "lastUpdaterEmail": "string",
  "lastUpdaterFullName": "string",
  "name": "string",
  "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedAt": "1970-01-01T00:00:00Z",
  "usage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|createdAt|string(date-time)|false|none|none|
|creatorEmail|string \| null|false|none|none|
|creatorFullName|string \| null|false|none|none|
|description|string \| null|false|none|none|
|lastUpdaterEmail|string \| null|false|none|none|
|lastUpdaterFullName|string \| null|false|none|none|
|name|string \| null|false|none|none|
|segmentId|string(uuid)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|usage|integer(int32)|false|none|none|

<h2 id="tocS_SegmentModel">SegmentModel</h2>
<!-- backwards compatibility -->
<a id="schemasegmentmodel"></a>
<a id="schema_SegmentModel"></a>
<a id="tocSsegmentmodel"></a>
<a id="tocssegmentmodel"></a>

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "creatorEmail": "string",
  "creatorFullName": "string",
  "description": "string",
  "lastUpdaterEmail": "string",
  "lastUpdaterFullName": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|[RolloutRuleComparator](#schemarolloutrulecomparator)|false|none|none|
|comparisonAttribute|string \| null|false|none|none|
|comparisonValue|string \| null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|creatorEmail|string \| null|false|none|none|
|creatorFullName|string \| null|false|none|none|
|description|string \| null|false|none|none|
|lastUpdaterEmail|string \| null|false|none|none|
|lastUpdaterFullName|string \| null|false|none|none|
|name|string \| null|false|none|none|
|product|[ProductModel](#schemaproductmodel)|false|none|none|
|segmentId|string(uuid)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|comparator|isOneOf|
|comparator|isNotOneOf|
|comparator|contains|
|comparator|doesNotContain|
|comparator|semVerIsOneOf|
|comparator|semVerIsNotOneOf|
|comparator|semVerLess|
|comparator|semVerLessOrEquals|
|comparator|semVerGreater|
|comparator|semVerGreaterOrEquals|
|comparator|numberEquals|
|comparator|numberDoesNotEqual|
|comparator|numberLess|
|comparator|numberLessOrEquals|
|comparator|numberGreater|
|comparator|numberGreaterOrEquals|
|comparator|sensitiveIsOneOf|
|comparator|sensitiveIsNotOneOf|

<h2 id="tocS_SegmentModel-haljson">SegmentModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemasegmentmodel-haljson"></a>
<a id="schema_SegmentModel-haljson"></a>
<a id="tocSsegmentmodel-haljson"></a>
<a id="tocssegmentmodel-haljson"></a>

```json
{
  "_embedded": {
    "product": {
      "_embedded": {
        "organization": {
          "_links": {
            "members": "string",
            "products": "string"
          },
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      },
      "_links": {
        "configs": "string",
        "environments": "string",
        "members": "string",
        "permission-groups": "string",
        "segments": "string",
        "self": "string",
        "tags": "string"
      },
      "description": "string",
      "name": "string",
      "order": 0,
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "_links": {
    "self": "string"
  },
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "creatorEmail": "string",
  "creatorFullName": "string",
  "description": "string",
  "lastUpdaterEmail": "string",
  "lastUpdaterFullName": "string",
  "name": "string",
  "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|comparator|[RolloutRuleComparator](#schemarolloutrulecomparator)|false|none|none|
|comparisonAttribute|string \| null|false|none|none|
|comparisonValue|string \| null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|creatorEmail|string \| null|false|none|none|
|creatorFullName|string \| null|false|none|none|
|description|string \| null|false|none|none|
|lastUpdaterEmail|string \| null|false|none|none|
|lastUpdaterFullName|string \| null|false|none|none|
|name|string \| null|false|none|none|
|segmentId|string(uuid)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|comparator|isOneOf|
|comparator|isNotOneOf|
|comparator|contains|
|comparator|doesNotContain|
|comparator|semVerIsOneOf|
|comparator|semVerIsNotOneOf|
|comparator|semVerLess|
|comparator|semVerLessOrEquals|
|comparator|semVerGreater|
|comparator|semVerGreaterOrEquals|
|comparator|numberEquals|
|comparator|numberDoesNotEqual|
|comparator|numberLess|
|comparator|numberLessOrEquals|
|comparator|numberGreater|
|comparator|numberGreaterOrEquals|
|comparator|sensitiveIsOneOf|
|comparator|sensitiveIsNotOneOf|

<h2 id="tocS_SettingDataModel">SettingDataModel</h2>
<!-- backwards compatibility -->
<a id="schemasettingdatamodel"></a>
<a id="schema_SettingDataModel"></a>
<a id="tocSsettingdatamodel"></a>
<a id="tocssettingdatamodel"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "creatorEmail": "string",
  "creatorFullName": "string",
  "hint": "string",
  "isWatching": true,
  "key": "string",
  "name": "string",
  "order": 0,
  "settingId": 0,
  "settingType": "boolean"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time) \| null|false|none|none|
|creatorEmail|string \| null|false|none|none|
|creatorFullName|string \| null|false|none|none|
|hint|string \| null|false|none|none|
|isWatching|boolean|false|none|none|
|key|string \| null|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|settingId|integer(int32)|false|none|none|
|settingType|[SettingType](#schemasettingtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|settingType|boolean|
|settingType|string|
|settingType|int|
|settingType|double|

<h2 id="tocS_SettingModel">SettingModel</h2>
<!-- backwards compatibility -->
<a id="schemasettingmodel"></a>
<a id="schema_SettingModel"></a>
<a id="tocSsettingmodel"></a>
<a id="tocssettingmodel"></a>

```json
{
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "configName": "string",
  "hint": "string",
  "key": "string",
  "name": "string",
  "order": 0,
  "settingId": 0,
  "settingType": "boolean",
  "tags": [
    {
      "color": "string",
      "name": "string",
      "product": {
        "description": "string",
        "name": "string",
        "order": 0,
        "organization": {
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reasonRequired": true
      },
      "tagId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configId|string(uuid)|false|none|none|
|configName|string \| null|false|none|none|
|hint|string \| null|false|none|none|
|key|string \| null|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|settingId|integer(int32)|false|none|none|
|settingType|[SettingType](#schemasettingtype)|false|none|none|
|tags|[[TagModel](#schematagmodel)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|settingType|boolean|
|settingType|string|
|settingType|int|
|settingType|double|

<h2 id="tocS_SettingModel-haljson">SettingModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemasettingmodel-haljson"></a>
<a id="schema_SettingModel-haljson"></a>
<a id="tocSsettingmodel-haljson"></a>
<a id="tocssettingmodel-haljson"></a>

```json
{
  "_embedded": {
    "tags": [
      {
        "_embedded": {
          "product": {
            "_embedded": {
              "organization": {
                "_links": {
                  "members": "string",
                  "products": "string"
                },
                "name": "string",
                "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
              }
            },
            "_links": {
              "configs": "string",
              "environments": "string",
              "members": "string",
              "permission-groups": "string",
              "segments": "string",
              "self": "string",
              "tags": "string"
            },
            "description": "string",
            "name": "string",
            "order": 0,
            "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "reasonRequired": true
          }
        },
        "_links": {
          "self": "string"
        },
        "color": "string",
        "name": "string",
        "tagId": 0
      }
    ]
  },
  "_links": {
    "self": "string"
  },
  "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "configName": "string",
  "hint": "string",
  "key": "string",
  "name": "string",
  "order": 0,
  "settingId": 0,
  "settingType": "boolean"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|configId|string(uuid)|false|none|none|
|configName|string \| null|false|none|none|
|hint|string \| null|false|none|none|
|key|string \| null|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|settingId|integer(int32)|false|none|none|
|settingType|[SettingType](#schemasettingtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|settingType|boolean|
|settingType|string|
|settingType|int|
|settingType|double|

<h2 id="tocS_SettingTagModel">SettingTagModel</h2>
<!-- backwards compatibility -->
<a id="schemasettingtagmodel"></a>
<a id="schema_SettingTagModel"></a>
<a id="tocSsettingtagmodel"></a>
<a id="tocssettingtagmodel"></a>

```json
{
  "color": "string",
  "name": "string",
  "settingTagId": 0,
  "tagId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|name|string \| null|false|none|none|
|settingTagId|integer(int64)|false|none|none|
|tagId|integer(int64)|false|none|none|

<h2 id="tocS_SettingType">SettingType</h2>
<!-- backwards compatibility -->
<a id="schemasettingtype"></a>
<a id="schema_SettingType"></a>
<a id="tocSsettingtype"></a>
<a id="tocssettingtype"></a>

```json
"boolean"
```

<h2 id="tocS_SettingValueModel">SettingValueModel</h2>
<!-- backwards compatibility -->
<a id="schemasettingvaluemodel"></a>
<a id="schema_SettingValueModel"></a>
<a id="tocSsettingvaluemodel"></a>
<a id="tocssettingvaluemodel"></a>

```json
{
  "config": {
    "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "description": "string",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "environment": {
    "color": "string",
    "description": "string",
    "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "order": 0,
    "product": {
      "description": "string",
      "name": "string",
      "order": 0,
      "organization": {
        "name": "string",
        "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    },
    "reasonRequired": true
  },
  "integrationLinks": [
    {
      "description": "string",
      "integrationLinkType": "trello",
      "key": "string",
      "url": "string"
    }
  ],
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "readOnly": true,
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "setting": {
    "createdAt": "1970-01-01T00:00:00Z",
    "creatorEmail": "string",
    "creatorFullName": "string",
    "hint": "string",
    "isWatching": true,
    "key": "string",
    "name": "string",
    "order": 0,
    "settingId": 0,
    "settingType": "boolean"
  },
  "settingTags": [
    {
      "color": "string",
      "name": "string",
      "settingTagId": 0,
      "tagId": 0
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[ConfigModel](#schemaconfigmodel)|false|none|none|
|environment|[EnvironmentModel](#schemaenvironmentmodel)|false|none|none|
|integrationLinks|[[IntegrationLinkModel](#schemaintegrationlinkmodel)]|false|none|none|
|lastUpdaterUserEmail|string \| null|false|none|none|
|lastUpdaterUserFullName|string \| null|false|none|none|
|readOnly|boolean|false|none|none|
|rolloutPercentageItems|[[RolloutPercentageItemModel](#schemarolloutpercentageitemmodel)]|false|none|The percentage rule collection.|
|rolloutRules|[[RolloutRuleModel](#schemarolloutrulemodel)]|false|none|The targeting rule collection.|
|setting|[SettingDataModel](#schemasettingdatamodel)|false|none|none|
|settingTags|[[SettingTagModel](#schemasettingtagmodel)]|false|none|none|
|updatedAt|string(date-time) \| null|false|none|none|
|value|object \| null|false|none|The value to serve. It must respect the setting type.|

<h2 id="tocS_SettingValueModel-haljson">SettingValueModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schemasettingvaluemodel-haljson"></a>
<a id="schema_SettingValueModel-haljson"></a>
<a id="tocSsettingvaluemodel-haljson"></a>
<a id="tocssettingvaluemodel-haljson"></a>

```json
{
  "_embedded": {
    "config": {
      "_embedded": {
        "product": {
          "_embedded": {
            "organization": {
              "_links": {
                "members": "string",
                "products": "string"
              },
              "name": "string",
              "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
            }
          },
          "_links": {
            "configs": "string",
            "environments": "string",
            "members": "string",
            "permission-groups": "string",
            "segments": "string",
            "self": "string",
            "tags": "string"
          },
          "description": "string",
          "name": "string",
          "order": 0,
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        }
      },
      "_links": {
        "self": "string",
        "settings": "string"
      },
      "configId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "description": "string",
      "name": "string",
      "order": 0
    },
    "environment": {
      "_embedded": {
        "product": {
          "_embedded": {
            "organization": {
              "_links": {
                "members": "string",
                "products": "string"
              },
              "name": "string",
              "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
            }
          },
          "_links": {
            "configs": "string",
            "environments": "string",
            "members": "string",
            "permission-groups": "string",
            "segments": "string",
            "self": "string",
            "tags": "string"
          },
          "description": "string",
          "name": "string",
          "order": 0,
          "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reasonRequired": true
        }
      },
      "_links": {
        "self": "string"
      },
      "color": "string",
      "description": "string",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    },
    "integrationLinks": [
      {
        "description": "string",
        "integrationLinkType": "trello",
        "key": "string",
        "url": "string"
      }
    ],
    "setting": {
      "createdAt": "1970-01-01T00:00:00Z",
      "creatorEmail": "string",
      "creatorFullName": "string",
      "hint": "string",
      "isWatching": true,
      "key": "string",
      "name": "string",
      "order": 0,
      "settingId": 0,
      "settingType": "boolean"
    },
    "settingTags": [
      {
        "color": "string",
        "name": "string",
        "settingTagId": 0,
        "tagId": 0
      }
    ]
  },
  "_links": {
    "self": "string"
  },
  "lastUpdaterUserEmail": "string",
  "lastUpdaterUserFullName": "string",
  "readOnly": true,
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "updatedAt": "1970-01-01T00:00:00Z",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|lastUpdaterUserEmail|string \| null|false|none|none|
|lastUpdaterUserFullName|string \| null|false|none|none|
|readOnly|boolean|false|none|none|
|rolloutPercentageItems|[[RolloutPercentageItemModel](#schemarolloutpercentageitemmodel)]|false|none|The percentage rule collection.|
|rolloutRules|[[RolloutRuleModel](#schemarolloutrulemodel)]|false|none|The targeting rule collection.|
|updatedAt|string(date-time) \| null|false|none|none|
|value|object \| null|false|none|The value to serve. It must respect the setting type.|

<h2 id="tocS_TagModel">TagModel</h2>
<!-- backwards compatibility -->
<a id="schematagmodel"></a>
<a id="schema_TagModel"></a>
<a id="tocStagmodel"></a>
<a id="tocstagmodel"></a>

```json
{
  "color": "string",
  "name": "string",
  "product": {
    "description": "string",
    "name": "string",
    "order": 0,
    "organization": {
      "name": "string",
      "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "reasonRequired": true
  },
  "tagId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|name|string \| null|false|none|none|
|product|[ProductModel](#schemaproductmodel)|false|none|none|
|tagId|integer(int64)|false|none|none|

<h2 id="tocS_TagModel-haljson">TagModel-haljson</h2>
<!-- backwards compatibility -->
<a id="schematagmodel-haljson"></a>
<a id="schema_TagModel-haljson"></a>
<a id="tocStagmodel-haljson"></a>
<a id="tocstagmodel-haljson"></a>

```json
{
  "_embedded": {
    "product": {
      "_embedded": {
        "organization": {
          "_links": {
            "members": "string",
            "products": "string"
          },
          "name": "string",
          "organizationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      },
      "_links": {
        "configs": "string",
        "environments": "string",
        "members": "string",
        "permission-groups": "string",
        "segments": "string",
        "self": "string",
        "tags": "string"
      },
      "description": "string",
      "name": "string",
      "order": 0,
      "productId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reasonRequired": true
    }
  },
  "_links": {
    "self": "string"
  },
  "color": "string",
  "name": "string",
  "tagId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|_links|object|false|none|none|
|color|string \| null|false|none|none|
|name|string \| null|false|none|none|
|tagId|integer(int64)|false|none|none|

<h2 id="tocS_UpdateConfigRequest">UpdateConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigrequest"></a>
<a id="schema_UpdateConfigRequest"></a>
<a id="tocSupdateconfigrequest"></a>
<a id="tocsupdateconfigrequest"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_UpdateEnvironmentModel">UpdateEnvironmentModel</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentmodel"></a>
<a id="schema_UpdateEnvironmentModel"></a>
<a id="tocSupdateenvironmentmodel"></a>
<a id="tocsupdateenvironmentmodel"></a>

```json
{
  "color": "string",
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_UpdatePermissionGroupRequest">UpdatePermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepermissiongrouprequest"></a>
<a id="schema_UpdatePermissionGroupRequest"></a>
<a id="tocSupdatepermissiongrouprequest"></a>
<a id="tocsupdatepermissiongrouprequest"></a>

```json
{
  "accessType": "readOnly",
  "canCreateOrUpdateConfig": true,
  "canCreateOrUpdateEnvironment": true,
  "canCreateOrUpdateSegments": true,
  "canCreateOrUpdateSetting": true,
  "canCreateOrUpdateTag": true,
  "canDeleteConfig": true,
  "canDeleteEnvironment": true,
  "canDeleteSegments": true,
  "canDeleteSetting": true,
  "canDeleteTag": true,
  "canManageIntegrations": true,
  "canManageMembers": true,
  "canManageProductPreferences": true,
  "canManageWebhook": true,
  "canRotateSdkKey": true,
  "canTagSetting": true,
  "canUseExportImport": true,
  "canViewProductAuditLog": true,
  "canViewProductStatistics": true,
  "canViewSdkKey": true,
  "environmentAccesses": [
    {
      "color": "string",
      "description": "string",
      "environmentAccessType": "full",
      "environmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "order": 0,
      "reasonRequired": true
    }
  ],
  "name": "string",
  "newEnvironmentAccessType": "full"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessType|[AccessType](#schemaaccesstype)|false|none|none|
|canCreateOrUpdateConfig|boolean \| null|false|none|none|
|canCreateOrUpdateEnvironment|boolean \| null|false|none|none|
|canCreateOrUpdateSegments|boolean \| null|false|none|none|
|canCreateOrUpdateSetting|boolean \| null|false|none|none|
|canCreateOrUpdateTag|boolean \| null|false|none|none|
|canDeleteConfig|boolean \| null|false|none|none|
|canDeleteEnvironment|boolean \| null|false|none|none|
|canDeleteSegments|boolean \| null|false|none|none|
|canDeleteSetting|boolean \| null|false|none|none|
|canDeleteTag|boolean \| null|false|none|none|
|canManageIntegrations|boolean \| null|false|none|none|
|canManageMembers|boolean \| null|false|none|none|
|canManageProductPreferences|boolean \| null|false|none|none|
|canManageWebhook|boolean \| null|false|none|none|
|canRotateSdkKey|boolean \| null|false|none|none|
|canTagSetting|boolean \| null|false|none|none|
|canUseExportImport|boolean \| null|false|none|none|
|canViewProductAuditLog|boolean \| null|false|none|none|
|canViewProductStatistics|boolean \| null|false|none|none|
|canViewSdkKey|boolean \| null|false|none|none|
|environmentAccesses|[[CreateOrUpdateEnvironmentAccessModel](#schemacreateorupdateenvironmentaccessmodel)]|false|none|none|
|name|string \| null|false|none|none|
|newEnvironmentAccessType|[EnvironmentAccessType](#schemaenvironmentaccesstype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accessType|readOnly|
|accessType|full|
|accessType|custom|
|newEnvironmentAccessType|full|
|newEnvironmentAccessType|readOnly|
|newEnvironmentAccessType|none|

<h2 id="tocS_UpdateProductRequest">UpdateProductRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateproductrequest"></a>
<a id="schema_UpdateProductRequest"></a>
<a id="tocSupdateproductrequest"></a>
<a id="tocsupdateproductrequest"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_UpdateSegmentModel">UpdateSegmentModel</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesegmentmodel"></a>
<a id="schema_UpdateSegmentModel"></a>
<a id="tocSupdatesegmentmodel"></a>
<a id="tocsupdatesegmentmodel"></a>

```json
{
  "comparator": "isOneOf",
  "comparisonAttribute": "string",
  "comparisonValue": "string",
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|[RolloutRuleComparator](#schemarolloutrulecomparator)|false|none|none|
|comparisonAttribute|string \| null|false|none|none|
|comparisonValue|string \| null|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|comparator|isOneOf|
|comparator|isNotOneOf|
|comparator|contains|
|comparator|doesNotContain|
|comparator|semVerIsOneOf|
|comparator|semVerIsNotOneOf|
|comparator|semVerLess|
|comparator|semVerLessOrEquals|
|comparator|semVerGreater|
|comparator|semVerGreaterOrEquals|
|comparator|numberEquals|
|comparator|numberDoesNotEqual|
|comparator|numberLess|
|comparator|numberLessOrEquals|
|comparator|numberGreater|
|comparator|numberGreaterOrEquals|
|comparator|sensitiveIsOneOf|
|comparator|sensitiveIsNotOneOf|

<h2 id="tocS_UpdateSettingValueModel">UpdateSettingValueModel</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingvaluemodel"></a>
<a id="schema_UpdateSettingValueModel"></a>
<a id="tocSupdatesettingvaluemodel"></a>
<a id="tocsupdatesettingvaluemodel"></a>

```json
{
  "rolloutPercentageItems": [
    {
      "percentage": 0,
      "value": null
    }
  ],
  "rolloutRules": [
    {
      "comparator": "isOneOf",
      "comparisonAttribute": "string",
      "comparisonValue": "string",
      "segmentComparator": "isIn",
      "segmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": null
    }
  ],
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rolloutPercentageItems|[[RolloutPercentageItemModel](#schemarolloutpercentageitemmodel)]|false|none|The percentage rule collection.|
|rolloutRules|[[RolloutRuleModel](#schemarolloutrulemodel)]|false|none|The targeting rule collection.|
|value|object \| null|false|none|The value to serve. It must respect the setting type.|

<h2 id="tocS_UpdateTagModel">UpdateTagModel</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagmodel"></a>
<a id="schema_UpdateTagModel"></a>
<a id="tocSupdatetagmodel"></a>
<a id="tocsupdatetagmodel"></a>

```json
{
  "color": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_UserModel">UserModel</h2>
<!-- backwards compatibility -->
<a id="schemausermodel"></a>
<a id="schema_UserModel"></a>
<a id="tocSusermodel"></a>
<a id="tocsusermodel"></a>

```json
{
  "email": "string",
  "fullName": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|fullName|string \| null|false|none|none|
|userId|string \| null|false|none|none|
