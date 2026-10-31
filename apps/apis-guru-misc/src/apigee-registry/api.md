<h1 id="registry-api">Registry API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Registry service allows teams to manage descriptions of APIs.

Base URLs:

* <a href="http://apigee.local">http://apigee.local</a>

* <a href="https://apigeeregistry.googleapis.com">https://apigeeregistry.googleapis.com</a>

<h1 id="registry-api-registry">Registry</h1>

## Registry_ListApis

<a id="opIdRegistry_ListApis"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis`

ListApis returns matching APIs.

<h3 id="registrylistapis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|pageSize|query|integer(int32)|false|The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token.|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.|

> Example responses

> 200 Response

```json
{
  "apis": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "availability": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "recommendedDeployment": "string",
      "recommendedVersion": "string",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrylistapis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListApisResponse](#schemalistapisresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_CreateApi

<a id="opIdRegistry_CreateApi"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "availability": "string",
    "description": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "recommendedDeployment": "string",
    "recommendedVersion": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/apis`

CreateApi creates a specified API.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "availability": "string",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "recommendedDeployment": "string",
  "recommendedVersion": "string"
}
```

<h3 id="registrycreateapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|apiId|query|string|false|Required. The ID to use for the api, which will become the final component of the api's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.|
|body|body|[Api](#schemaapi)|true|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» availability|body|string|false|A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|
|» recommendedDeployment|body|string|false|The recommended deployment of the API. Format: apis/{api}/deployments/{deployment}|
|» recommendedVersion|body|string|false|The recommended version of the API. Format: apis/{api}/versions/{version}|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "availability": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "recommendedDeployment": "string",
  "recommendedVersion": "string",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrycreateapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Api](#schemaapi)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_GetApi

<a id="opIdRegistry_GetApi"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}`

GetApi returns a specified API.

<h3 id="registrygetapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "availability": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "recommendedDeployment": "string",
  "recommendedVersion": "string",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrygetapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Api](#schemaapi)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_DeleteApi

<a id="opIdRegistry_DeleteApi"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/projects/{project}/locations/{location}/apis/{api}`

DeleteApi removes a specified API and all of the resources that it
 owns.

<h3 id="registrydeleteapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|force|query|boolean|false|If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)|

> Example responses

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrydeleteapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_UpdateApi

<a id="opIdRegistry_UpdateApi"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "availability": "string",
    "description": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "recommendedDeployment": "string",
    "recommendedVersion": "string"
  }'
```

`PATCH /v1/projects/{project}/locations/{location}/apis/{api}`

UpdateApi can be used to modify a specified API.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "availability": "string",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "recommendedDeployment": "string",
  "recommendedVersion": "string"
}
```

<h3 id="registryupdateapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|updateMask|query|string(field-mask)|false|The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.|
|allowMissing|query|boolean|false|If set to true, and the api is not found, a new api_versions will be created. In this situation, `update_mask` is ignored.|
|body|body|[Api](#schemaapi)|true|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» availability|body|string|false|A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|
|» recommendedDeployment|body|string|false|The recommended deployment of the API. Format: apis/{api}/deployments/{deployment}|
|» recommendedVersion|body|string|false|The recommended version of the API. Format: apis/{api}/versions/{version}|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "availability": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "recommendedDeployment": "string",
  "recommendedVersion": "string",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registryupdateapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Api](#schemaapi)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_ListApiDeployments

<a id="opIdRegistry_ListApiDeployments"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/deployments`

ListApiDeployments returns matching deployments.

<h3 id="registrylistapideployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|pageSize|query|integer(int32)|false|The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListApiDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiDeployments` must match the call that provided the page token.|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.|

> Example responses

> 200 Response

```json
{
  "apiDeployments": [
    {
      "accessGuidance": "string",
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiSpecRevision": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "endpointUri": "string",
      "externalChannelUri": "string",
      "intendedAudience": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "revisionCreateTime": "1970-01-01T00:00:00Z",
      "revisionId": "string",
      "revisionUpdateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrylistapideployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListApiDeploymentsResponse](#schemalistapideploymentsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_CreateApiDeployment

<a id="opIdRegistry_CreateApiDeployment"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accessGuidance": "string",
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "apiSpecRevision": "string",
    "description": "string",
    "displayName": "string",
    "endpointUri": "string",
    "externalChannelUri": "string",
    "intendedAudience": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/apis/{api}/deployments`

CreateApiDeployment creates a specified deployment.

> Body parameter

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="registrycreateapideployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|apiDeploymentId|query|string|false|Required. The ID to use for the deployment, which will become the final component of the deployment's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.|
|body|body|[ApiDeployment](#schemaapideployment)|true|none|
|» accessGuidance|body|string|false|Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» apiSpecRevision|body|string|false|The full resource name (including revision id) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: apis/{api}/deployments/{deployment}|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» endpointUri|body|string|false|The address where the deployment is serving. Changes to this value will update the revision.|
|» externalChannelUri|body|string|false|The address of the external channel of the API (e.g. the Developer Portal). Changes to this value will not affect the revision.|
|» intendedAudience|body|string|false|Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|

> Example responses

> 200 Response

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrycreateapideployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiDeployment](#schemaapideployment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_GetApiDeployment

<a id="opIdRegistry_GetApiDeployment"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments/string \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}`

GetApiDeployment returns a specified deployment.

<h3 id="registrygetapideployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|deployment|path|string|true|The deployment id.|

> Example responses

> 200 Response

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrygetapideployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiDeployment](#schemaapideployment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_DeleteApiDeployment

<a id="opIdRegistry_DeleteApiDeployment"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}`

DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).

<h3 id="registrydeleteapideployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|deployment|path|string|true|The deployment id.|
|force|query|boolean|false|If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)|

> Example responses

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrydeleteapideployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_UpdateApiDeployment

<a id="opIdRegistry_UpdateApiDeployment"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accessGuidance": "string",
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "apiSpecRevision": "string",
    "description": "string",
    "displayName": "string",
    "endpointUri": "string",
    "externalChannelUri": "string",
    "intendedAudience": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`PATCH /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}`

UpdateApiDeployment can be used to modify a specified deployment.

> Body parameter

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="registryupdateapideployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|deployment|path|string|true|The deployment id.|
|updateMask|query|string(field-mask)|false|The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.|
|allowMissing|query|boolean|false|If set to true, and the deployment is not found, a new deployment will be created. In this situation, `update_mask` is ignored.|
|body|body|[ApiDeployment](#schemaapideployment)|true|none|
|» accessGuidance|body|string|false|Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» apiSpecRevision|body|string|false|The full resource name (including revision id) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: apis/{api}/deployments/{deployment}|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» endpointUri|body|string|false|The address where the deployment is serving. Changes to this value will update the revision.|
|» externalChannelUri|body|string|false|The address of the external channel of the API (e.g. the Developer Portal). Changes to this value will not affect the revision.|
|» intendedAudience|body|string|false|Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|

> Example responses

> 200 Response

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registryupdateapideployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiDeployment](#schemaapideployment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_DeleteApiDeploymentRevision

<a id="opIdRegistry_DeleteApiDeploymentRevision"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments/string:deleteRevision \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:deleteRevision`

DeleteApiDeploymentRevision deletes a revision of a deployment.

<h3 id="registrydeleteapideploymentrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|deployment|path|string|true|The deployment id.|

> Example responses

> 200 Response

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrydeleteapideploymentrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiDeployment](#schemaapideployment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_ListApiDeploymentRevisions

<a id="opIdRegistry_ListApiDeploymentRevisions"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments/string:listRevisions \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:listRevisions`

ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.

<h3 id="registrylistapideploymentrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|deployment|path|string|true|The deployment id.|
|pageSize|query|integer(int32)|false|The maximum number of revisions to return per page.|
|pageToken|query|string|false|The page token, received from a previous ListApiDeploymentRevisions call. Provide this to retrieve the subsequent page.|

> Example responses

> 200 Response

```json
{
  "apiDeployments": [
    {
      "accessGuidance": "string",
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiSpecRevision": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "endpointUri": "string",
      "externalChannelUri": "string",
      "intendedAudience": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "revisionCreateTime": "1970-01-01T00:00:00Z",
      "revisionId": "string",
      "revisionUpdateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrylistapideploymentrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListApiDeploymentRevisionsResponse](#schemalistapideploymentrevisionsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_RollbackApiDeployment

<a id="opIdRegistry_RollbackApiDeployment"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments/string:rollback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "revisionId": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:rollback`

RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.

> Body parameter

```json
{
  "name": "string",
  "revisionId": "string"
}
```

<h3 id="registryrollbackapideployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|deployment|path|string|true|The deployment id.|
|body|body|[RollbackApiDeploymentRequest](#schemarollbackapideploymentrequest)|true|none|
|» name|body|string|true|Required. The deployment being rolled back.|
|» revisionId|body|string|true|Required. The revision ID to roll back to. It must be a revision of the same deployment.   Example: c7cfa2a8|

> Example responses

> 200 Response

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registryrollbackapideployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiDeployment](#schemaapideployment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_TagApiDeploymentRevision

<a id="opIdRegistry_TagApiDeploymentRevision"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/deployments/string:tagRevision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "tag": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:tagRevision`

TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.

> Body parameter

```json
{
  "name": "string",
  "tag": "string"
}
```

<h3 id="registrytagapideploymentrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|deployment|path|string|true|The deployment id.|
|body|body|[TagApiDeploymentRevisionRequest](#schematagapideploymentrevisionrequest)|true|none|
|» name|body|string|true|Required. The name of the deployment to be tagged, including the revision ID.|
|» tag|body|string|true|Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.|

> Example responses

> 200 Response

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrytagapideploymentrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiDeployment](#schemaapideployment)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_ListApiVersions

<a id="opIdRegistry_ListApiVersions"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/versions`

ListApiVersions returns matching versions.

<h3 id="registrylistapiversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|pageSize|query|integer(int32)|false|The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListApiVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiVersions` must match the call that provided the page token.|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.|

> Example responses

> 200 Response

```json
{
  "apiVersions": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "string",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrylistapiversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListApiVersionsResponse](#schemalistapiversionsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_CreateApiVersion

<a id="opIdRegistry_CreateApiVersion"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "state": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/apis/{api}/versions`

CreateApiVersion creates a specified version.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "string"
}
```

<h3 id="registrycreateapiversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|apiVersionId|query|string|false|Required. The ID to use for the version, which will become the final component of the version's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.|
|body|body|[ApiVersion](#schemaapiversion)|true|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|
|» state|body|string|false|A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g. "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "string",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrycreateapiversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiVersion](#schemaapiversion)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_GetApiVersion

<a id="opIdRegistry_GetApiVersion"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}`

GetApiVersion returns a specified version.

<h3 id="registrygetapiversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "string",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrygetapiversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiVersion](#schemaapiversion)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_DeleteApiVersion

<a id="opIdRegistry_DeleteApiVersion"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}`

DeleteApiVersion removes a specified version and all of the resources that
 it owns.

<h3 id="registrydeleteapiversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|force|query|boolean|false|If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)|

> Example responses

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrydeleteapiversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_UpdateApiVersion

<a id="opIdRegistry_UpdateApiVersion"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "state": "string"
  }'
```

`PATCH /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}`

UpdateApiVersion can be used to modify a specified version.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "string"
}
```

<h3 id="registryupdateapiversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|updateMask|query|string(field-mask)|false|The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.|
|allowMissing|query|boolean|false|If set to true, and the version is not found, a new version will be created. In this situation, `update_mask` is ignored.|
|body|body|[ApiVersion](#schemaapiversion)|true|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|
|» state|body|string|false|A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g. "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "string",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registryupdateapiversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiVersion](#schemaapiversion)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_ListApiSpecs

<a id="opIdRegistry_ListApiSpecs"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs`

ListApiSpecs returns matching specs.

<h3 id="registrylistapispecs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|pageSize|query|integer(int32)|false|The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListApiSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiSpecs` must match the call that provided the page token.|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.|

> Example responses

> 200 Response

```json
{
  "apiSpecs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "filename": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "revisionCreateTime": "1970-01-01T00:00:00Z",
      "revisionId": "string",
      "revisionUpdateTime": "1970-01-01T00:00:00Z",
      "sizeBytes": 0,
      "sourceUri": "string"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrylistapispecs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListApiSpecsResponse](#schemalistapispecsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_CreateApiSpec

<a id="opIdRegistry_CreateApiSpec"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "contents": "string",
    "description": "string",
    "filename": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mimeType": "string",
    "name": "string",
    "sourceUri": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs`

CreateApiSpec creates a specified spec.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "contents": "string",
  "description": "string",
  "filename": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "sourceUri": "string"
}
```

<h3 id="registrycreateapispec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|apiSpecId|query|string|false|Required. The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.|
|body|body|[ApiSpec](#schemaapispec)|true|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» contents|body|string(bytes)|false|Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.|
|» description|body|string|false|A detailed description.|
|» filename|body|string|false|A possibly-hierarchical name used to refer to the spec from other specs.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» mimeType|body|string|false|A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include "application/vnd.apigee.proto", "application/vnd.apigee.openapi", and "application/vnd.apigee.graphql", with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|» name|body|string|false|Resource name.|
|» sourceUri|body|string|false|The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrycreateapispec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiSpec](#schemaapispec)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_GetApiSpec

<a id="opIdRegistry_GetApiSpec"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs/string \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`

GetApiSpec returns a specified spec.

<h3 id="registrygetapispec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|spec|path|string|true|The spec id.|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrygetapispec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiSpec](#schemaapispec)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_DeleteApiSpec

<a id="opIdRegistry_DeleteApiSpec"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`

DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).

<h3 id="registrydeleteapispec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|spec|path|string|true|The spec id.|
|force|query|boolean|false|If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)|

> Example responses

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrydeleteapispec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_UpdateApiSpec

<a id="opIdRegistry_UpdateApiSpec"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "contents": "string",
    "description": "string",
    "filename": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mimeType": "string",
    "name": "string",
    "sourceUri": "string"
  }'
```

`PATCH /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`

UpdateApiSpec can be used to modify a specified spec.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "contents": "string",
  "description": "string",
  "filename": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "sourceUri": "string"
}
```

<h3 id="registryupdateapispec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|spec|path|string|true|The spec id.|
|updateMask|query|string(field-mask)|false|The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.|
|allowMissing|query|boolean|false|If set to true, and the spec is not found, a new spec will be created. In this situation, `update_mask` is ignored.|
|body|body|[ApiSpec](#schemaapispec)|true|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» contents|body|string(bytes)|false|Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.|
|» description|body|string|false|A detailed description.|
|» filename|body|string|false|A possibly-hierarchical name used to refer to the spec from other specs.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» mimeType|body|string|false|A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include "application/vnd.apigee.proto", "application/vnd.apigee.openapi", and "application/vnd.apigee.graphql", with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|» name|body|string|false|Resource name.|
|» sourceUri|body|string|false|The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registryupdateapispec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiSpec](#schemaapispec)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_DeleteApiSpecRevision

<a id="opIdRegistry_DeleteApiSpecRevision"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs/string:deleteRevision \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:deleteRevision`

DeleteApiSpecRevision deletes a revision of a spec.

<h3 id="registrydeleteapispecrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|spec|path|string|true|The spec id.|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrydeleteapispecrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiSpec](#schemaapispec)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_GetApiSpecContents

<a id="opIdRegistry_GetApiSpecContents"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs/string:getContents \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:getContents`

GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).

<h3 id="registrygetapispeccontents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|spec|path|string|true|The spec id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrygetapispeccontents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_ListApiSpecRevisions

<a id="opIdRegistry_ListApiSpecRevisions"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs/string:listRevisions \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:listRevisions`

ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.

<h3 id="registrylistapispecrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|spec|path|string|true|The spec id.|
|pageSize|query|integer(int32)|false|The maximum number of revisions to return per page.|
|pageToken|query|string|false|The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page.|

> Example responses

> 200 Response

```json
{
  "apiSpecs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "filename": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "revisionCreateTime": "1970-01-01T00:00:00Z",
      "revisionId": "string",
      "revisionUpdateTime": "1970-01-01T00:00:00Z",
      "sizeBytes": 0,
      "sourceUri": "string"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrylistapispecrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListApiSpecRevisionsResponse](#schemalistapispecrevisionsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_RollbackApiSpec

<a id="opIdRegistry_RollbackApiSpec"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs/string:rollback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "revisionId": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:rollback`

RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.

> Body parameter

```json
{
  "name": "string",
  "revisionId": "string"
}
```

<h3 id="registryrollbackapispec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|spec|path|string|true|The spec id.|
|body|body|[RollbackApiSpecRequest](#schemarollbackapispecrequest)|true|none|
|» name|body|string|true|Required. The spec being rolled back.|
|» revisionId|body|string|true|Required. The revision ID to roll back to. It must be a revision of the same spec.   Example: c7cfa2a8|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registryrollbackapispec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiSpec](#schemaapispec)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_TagApiSpecRevision

<a id="opIdRegistry_TagApiSpecRevision"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/apis/string/versions/string/specs/string:tagRevision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "tag": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:tagRevision`

TagApiSpecRevision adds a tag to a specified revision of a spec.

> Body parameter

```json
{
  "name": "string",
  "tag": "string"
}
```

<h3 id="registrytagapispecrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|api|path|string|true|The api id.|
|version|path|string|true|The version id.|
|spec|path|string|true|The spec id.|
|body|body|[TagApiSpecRevisionRequest](#schematagapispecrevisionrequest)|true|none|
|» name|body|string|true|Required. The name of the spec to be tagged, including the revision ID.|
|» tag|body|string|true|Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrytagapispecrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiSpec](#schemaapispec)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_ListArtifacts

<a id="opIdRegistry_ListArtifacts"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/artifacts \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/artifacts`

ListArtifacts returns matching artifacts.

<h3 id="registrylistartifacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|pageSize|query|integer(int32)|false|The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.|

> Example responses

> 200 Response

```json
{
  "artifacts": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "hash": "string",
      "mimeType": "string",
      "name": "string",
      "sizeBytes": 0,
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrylistartifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListArtifactsResponse](#schemalistartifactsresponse)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_CreateArtifact

<a id="opIdRegistry_CreateArtifact"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/artifacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contents": "string",
    "mimeType": "string",
    "name": "string"
  }'
```

`POST /v1/projects/{project}/locations/{location}/artifacts`

CreateArtifact creates a specified artifact.

> Body parameter

```json
{
  "contents": "string",
  "mimeType": "string",
  "name": "string"
}
```

<h3 id="registrycreateartifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|artifactId|query|string|false|Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.|
|body|body|[Artifact](#schemaartifact)|true|none|
|» contents|body|string(bytes)|false|Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.|
|» mimeType|body|string|false|A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|» name|body|string|false|Resource name.|

> Example responses

> 200 Response

```json
{
  "createTime": "1970-01-01T00:00:00Z",
  "hash": "string",
  "mimeType": "string",
  "name": "string",
  "sizeBytes": 0,
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrycreateartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Artifact](#schemaartifact)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_GetArtifact

<a id="opIdRegistry_GetArtifact"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/artifacts/string \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/artifacts/{artifact}`

GetArtifact returns a specified artifact.

<h3 id="registrygetartifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|artifact|path|string|true|The artifact id.|

> Example responses

> 200 Response

```json
{
  "createTime": "1970-01-01T00:00:00Z",
  "hash": "string",
  "mimeType": "string",
  "name": "string",
  "sizeBytes": 0,
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrygetartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Artifact](#schemaartifact)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_ReplaceArtifact

<a id="opIdRegistry_ReplaceArtifact"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/artifacts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contents": "string",
    "mimeType": "string",
    "name": "string"
  }'
```

`PUT /v1/projects/{project}/locations/{location}/artifacts/{artifact}`

ReplaceArtifact can be used to replace a specified artifact.

> Body parameter

```json
{
  "contents": "string",
  "mimeType": "string",
  "name": "string"
}
```

<h3 id="registryreplaceartifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|artifact|path|string|true|The artifact id.|
|body|body|[Artifact](#schemaartifact)|true|none|
|» contents|body|string(bytes)|false|Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.|
|» mimeType|body|string|false|A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|» name|body|string|false|Resource name.|

> Example responses

> 200 Response

```json
{
  "createTime": "1970-01-01T00:00:00Z",
  "hash": "string",
  "mimeType": "string",
  "name": "string",
  "sizeBytes": 0,
  "updateTime": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registryreplaceartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Artifact](#schemaartifact)|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_DeleteArtifact

<a id="opIdRegistry_DeleteArtifact"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/artifacts/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/projects/{project}/locations/{location}/artifacts/{artifact}`

DeleteArtifact removes a specified artifact.

<h3 id="registrydeleteartifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|artifact|path|string|true|The artifact id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrydeleteartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Registry_GetArtifactContents

<a id="opIdRegistry_GetArtifactContents"></a>

> Code samples

```bash
curl https://example.com/v1/projects/string/locations/string/artifacts/string:getContents \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project}/locations/{location}/artifacts/{artifact}:getContents`

GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).

<h3 id="registrygetartifactcontents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project id.|
|location|path|string|true|The location id.|
|artifact|path|string|true|The artifact id.|

> Example responses

> default Response

```json
{
  "code": 0,
  "details": [
    {
      "@type": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="registrygetartifactcontents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|Default error response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
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
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "availability": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "recommendedDeployment": "string",
  "recommendedVersion": "string",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

An Api is a top-level description of an API. Apis are produced by producers and are commitments to provide services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|availability|string|false|none|A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".|
|createTime|string(date-time)|false|read-only|Output only. Creation timestamp.|
|description|string|false|none|A detailed description.|
|displayName|string|false|none|Human-meaningful name.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|name|string|false|none|Resource name.|
|recommendedDeployment|string|false|none|The recommended deployment of the API. Format: apis/{api}/deployments/{deployment}|
|recommendedVersion|string|false|none|The recommended version of the API. Format: apis/{api}/versions/{version}|
|updateTime|string(date-time)|false|read-only|Output only. Last update timestamp.|

<h2 id="tocS_ApiDeployment">ApiDeployment</h2>
<!-- backwards compatibility -->
<a id="schemaapideployment"></a>
<a id="schema_ApiDeployment"></a>
<a id="tocSapideployment"></a>
<a id="tocsapideployment"></a>

```json
{
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "endpointUri": "string",
  "externalChannelUri": "string",
  "intendedAudience": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z"
}
```

An ApiDeployment describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessGuidance|string|false|none|Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|apiSpecRevision|string|false|none|The full resource name (including revision id) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: apis/{api}/deployments/{deployment}|
|createTime|string(date-time)|false|read-only|Output only. Creation timestamp; when the deployment resource was created.|
|description|string|false|none|A detailed description.|
|displayName|string|false|none|Human-meaningful name.|
|endpointUri|string|false|none|The address where the deployment is serving. Changes to this value will update the revision.|
|externalChannelUri|string|false|none|The address of the external channel of the API (e.g. the Developer Portal). Changes to this value will not affect the revision.|
|intendedAudience|string|false|none|Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.|
|name|string|false|none|Resource name.|
|revisionCreateTime|string(date-time)|false|read-only|Output only. Revision creation timestamp; when the represented revision was created.|
|revisionId|string|false|read-only|Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string.|
|revisionUpdateTime|string(date-time)|false|read-only|Output only. Last update timestamp: when the represented revision was last modified.|

<h2 id="tocS_ApiSpec">ApiSpec</h2>
<!-- backwards compatibility -->
<a id="schemaapispec"></a>
<a id="schema_ApiSpec"></a>
<a id="tocSapispec"></a>
<a id="tocsapispec"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "contents": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "1970-01-01T00:00:00Z",
  "revisionId": "string",
  "revisionUpdateTime": "1970-01-01T00:00:00Z",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

An ApiSpec describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g. in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|contents|string(bytes)|false|write-only|Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.|
|createTime|string(date-time)|false|read-only|Output only. Creation timestamp; when the spec resource was created.|
|description|string|false|none|A detailed description.|
|filename|string|false|none|A possibly-hierarchical name used to refer to the spec from other specs.|
|hash|string|false|read-only|Output only. A SHA-256 hash of the spec's contents. If the spec is gzipped, this is the hash of the uncompressed spec.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|mimeType|string|false|none|A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include "application/vnd.apigee.proto", "application/vnd.apigee.openapi", and "application/vnd.apigee.graphql", with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|name|string|false|none|Resource name.|
|revisionCreateTime|string(date-time)|false|read-only|Output only. Revision creation timestamp; when the represented revision was created.|
|revisionId|string|false|read-only|Output only. Immutable. The revision ID of the spec. A new revision is committed whenever the spec contents are changed. The format is an 8-character hexadecimal string.|
|revisionUpdateTime|string(date-time)|false|read-only|Output only. Last update timestamp: when the represented revision was last modified.|
|sizeBytes|integer(int32)|false|read-only|Output only. The size of the spec file in bytes. If the spec is gzipped, this is the size of the uncompressed spec.|
|sourceUri|string|false|none|The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.|

<h2 id="tocS_ApiVersion">ApiVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapiversion"></a>
<a id="schema_ApiVersion"></a>
<a id="tocSapiversion"></a>
<a id="tocsapiversion"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "string",
  "updateTime": "1970-01-01T00:00:00Z"
}
```

An ApiVersion describes a particular version of an API. ApiVersions are what consumers actually use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|createTime|string(date-time)|false|read-only|Output only. Creation timestamp.|
|description|string|false|none|A detailed description.|
|displayName|string|false|none|Human-meaningful name.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.|
|name|string|false|none|Resource name.|
|state|string|false|none|A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g. "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".|
|updateTime|string(date-time)|false|read-only|Output only. Last update timestamp.|

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "contents": "string",
  "createTime": "1970-01-01T00:00:00Z",
  "hash": "string",
  "mimeType": "string",
  "name": "string",
  "sizeBytes": 0,
  "updateTime": "1970-01-01T00:00:00Z"
}
```

Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e. not for display in primary views of the resource but perhaps displayed or downloaded upon request. The ListArtifacts method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string(bytes)|false|write-only|Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.|
|createTime|string(date-time)|false|read-only|Output only. Creation timestamp.|
|hash|string|false|read-only|Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.|
|mimeType|string|false|none|A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|name|string|false|none|Resource name.|
|sizeBytes|integer(int32)|false|read-only|Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.|
|updateTime|string(date-time)|false|read-only|Output only. Last update timestamp.|

<h2 id="tocS_GoogleProtobufAny">GoogleProtobufAny</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufany"></a>
<a id="schema_GoogleProtobufAny"></a>
<a id="tocSgoogleprotobufany"></a>
<a id="tocsgoogleprotobufany"></a>

```json
{
  "@type": "string"
}
```

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@type|string|false|none|The type of the serialized message.|

<h2 id="tocS_ListApiDeploymentRevisionsResponse">ListApiDeploymentRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapideploymentrevisionsresponse"></a>
<a id="schema_ListApiDeploymentRevisionsResponse"></a>
<a id="tocSlistapideploymentrevisionsresponse"></a>
<a id="tocslistapideploymentrevisionsresponse"></a>

```json
{
  "apiDeployments": [
    {
      "accessGuidance": "string",
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiSpecRevision": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "endpointUri": "string",
      "externalChannelUri": "string",
      "intendedAudience": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "revisionCreateTime": "1970-01-01T00:00:00Z",
      "revisionId": "string",
      "revisionUpdateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListApiDeploymentRevisionsResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiDeployments|[[ApiDeployment](#schemaapideployment)]|false|none|The revisions of the deployment.|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListApiDeploymentsResponse">ListApiDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapideploymentsresponse"></a>
<a id="schema_ListApiDeploymentsResponse"></a>
<a id="tocSlistapideploymentsresponse"></a>
<a id="tocslistapideploymentsresponse"></a>

```json
{
  "apiDeployments": [
    {
      "accessGuidance": "string",
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiSpecRevision": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "endpointUri": "string",
      "externalChannelUri": "string",
      "intendedAudience": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "revisionCreateTime": "1970-01-01T00:00:00Z",
      "revisionId": "string",
      "revisionUpdateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListApiDeployments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiDeployments|[[ApiDeployment](#schemaapideployment)]|false|none|The deployments from the specified publisher.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListApiSpecRevisionsResponse">ListApiSpecRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapispecrevisionsresponse"></a>
<a id="schema_ListApiSpecRevisionsResponse"></a>
<a id="tocSlistapispecrevisionsresponse"></a>
<a id="tocslistapispecrevisionsresponse"></a>

```json
{
  "apiSpecs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "contents": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "filename": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "revisionCreateTime": "1970-01-01T00:00:00Z",
      "revisionId": "string",
      "revisionUpdateTime": "1970-01-01T00:00:00Z",
      "sizeBytes": 0,
      "sourceUri": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListApiSpecRevisionsResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiSpecs|[[ApiSpec](#schemaapispec)]|false|none|The revisions of the spec.|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListApiSpecsResponse">ListApiSpecsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapispecsresponse"></a>
<a id="schema_ListApiSpecsResponse"></a>
<a id="tocSlistapispecsresponse"></a>
<a id="tocslistapispecsresponse"></a>

```json
{
  "apiSpecs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "contents": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "filename": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "revisionCreateTime": "1970-01-01T00:00:00Z",
      "revisionId": "string",
      "revisionUpdateTime": "1970-01-01T00:00:00Z",
      "sizeBytes": 0,
      "sourceUri": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListApiSpecs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiSpecs|[[ApiSpec](#schemaapispec)]|false|none|The specs from the specified publisher.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListApiVersionsResponse">ListApiVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapiversionsresponse"></a>
<a id="schema_ListApiVersionsResponse"></a>
<a id="tocSlistapiversionsresponse"></a>
<a id="tocslistapiversionsresponse"></a>

```json
{
  "apiVersions": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "string",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListApiVersions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersions|[[ApiVersion](#schemaapiversion)]|false|none|The versions from the specified publisher.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListApisResponse">ListApisResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapisresponse"></a>
<a id="schema_ListApisResponse"></a>
<a id="tocSlistapisresponse"></a>
<a id="tocslistapisresponse"></a>

```json
{
  "apis": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "availability": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "recommendedDeployment": "string",
      "recommendedVersion": "string",
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListApis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apis|[[Api](#schemaapi)]|false|none|The APIs from the specified publisher.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListArtifactsResponse">ListArtifactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistartifactsresponse"></a>
<a id="schema_ListArtifactsResponse"></a>
<a id="tocSlistartifactsresponse"></a>
<a id="tocslistartifactsresponse"></a>

```json
{
  "artifacts": [
    {
      "contents": "string",
      "createTime": "1970-01-01T00:00:00Z",
      "hash": "string",
      "mimeType": "string",
      "name": "string",
      "sizeBytes": 0,
      "updateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListArtifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifacts|[[Artifact](#schemaartifact)]|false|none|The artifacts from the specified publisher.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_RollbackApiDeploymentRequest">RollbackApiDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbackapideploymentrequest"></a>
<a id="schema_RollbackApiDeploymentRequest"></a>
<a id="tocSrollbackapideploymentrequest"></a>
<a id="tocsrollbackapideploymentrequest"></a>

```json
{
  "name": "string",
  "revisionId": "string"
}
```

Request message for RollbackApiDeployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The deployment being rolled back.|
|revisionId|string|true|none|Required. The revision ID to roll back to. It must be a revision of the same deployment.   Example: c7cfa2a8|

<h2 id="tocS_RollbackApiSpecRequest">RollbackApiSpecRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbackapispecrequest"></a>
<a id="schema_RollbackApiSpecRequest"></a>
<a id="tocSrollbackapispecrequest"></a>
<a id="tocsrollbackapispecrequest"></a>

```json
{
  "name": "string",
  "revisionId": "string"
}
```

Request message for RollbackApiSpec.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The spec being rolled back.|
|revisionId|string|true|none|Required. The revision ID to roll back to. It must be a revision of the same spec.   Example: c7cfa2a8|

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
      "@type": "string"
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].|
|details|[[GoogleProtobufAny](#schemagoogleprotobufany)]|false|none|A list of messages that carry the error details.  There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.|

<h2 id="tocS_TagApiDeploymentRevisionRequest">TagApiDeploymentRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schematagapideploymentrevisionrequest"></a>
<a id="schema_TagApiDeploymentRevisionRequest"></a>
<a id="tocStagapideploymentrevisionrequest"></a>
<a id="tocstagapideploymentrevisionrequest"></a>

```json
{
  "name": "string",
  "tag": "string"
}
```

Request message for TagApiDeploymentRevision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The name of the deployment to be tagged, including the revision ID.|
|tag|string|true|none|Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.|

<h2 id="tocS_TagApiSpecRevisionRequest">TagApiSpecRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schematagapispecrevisionrequest"></a>
<a id="schema_TagApiSpecRevisionRequest"></a>
<a id="tocStagapispecrevisionrequest"></a>
<a id="tocstagapispecrevisionrequest"></a>

```json
{
  "name": "string",
  "tag": "string"
}
```

Request message for TagApiSpecRevision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Required. The name of the spec to be tagged, including the revision ID.|
|tag|string|true|none|Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.|
