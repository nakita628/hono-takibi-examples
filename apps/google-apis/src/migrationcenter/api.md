<h1 id="migration-center-api">Migration Center API v1alpha1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://migrationcenter.googleapis.com/">https://migrationcenter.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/migration-center">External documentation</a>

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

<h1 id="migration-center-api-projects">projects</h1>

## migrationcenter.projects.locations.groups.addAssets

<a id="opIdmigrationcenter.projects.locations.groups.addAssets"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:addAssets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowExisting": true,
    "assets": {
      "assetIds": [
        "string"
      ]
    },
    "requestId": "string"
  }'
```

`POST /v1alpha1/{group}:addAssets`

Adds assets to a group.

> Body parameter

```json
{
  "allowExisting": true,
  "assets": {
    "assetIds": [
      "string"
    ]
  },
  "requestId": "string"
}
```

<h3 id="migrationcenterprojectslocationsgroupsaddassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|Required. Group reference.|
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
|body|body|[AddAssetsToGroupRequest](#schemaaddassetstogrouprequest)|false|none|
|» allowExisting|body|boolean|false|Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.|
|» assets|body|[AssetList](#schemaassetlist)|false|Required. List of assets to be added. The maximum number of assets that can be added in a single request is 1000.|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="migrationcenterprojectslocationsgroupsaddassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.groups.removeAssets

<a id="opIdmigrationcenter.projects.locations.groups.removeAssets"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:removeAssets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowMissing": true,
    "assets": {
      "assetIds": [
        "string"
      ]
    },
    "requestId": "string"
  }'
```

`POST /v1alpha1/{group}:removeAssets`

Removes assets from a group.

> Body parameter

```json
{
  "allowMissing": true,
  "assets": {
    "assetIds": [
      "string"
    ]
  },
  "requestId": "string"
}
```

<h3 id="migrationcenterprojectslocationsgroupsremoveassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|Required. Group reference.|
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
|body|body|[RemoveAssetsFromGroupRequest](#schemaremoveassetsfromgrouprequest)|false|none|
|» allowMissing|body|boolean|false|Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.|
|» assets|body|[AssetList](#schemaassetlist)|false|Required. List of assets to be removed. The maximum number of assets that can be removed in a single request is 1000.|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="migrationcenterprojectslocationsgroupsremoveassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.sources.get

<a id="opIdmigrationcenter.projects.locations.sources.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}`

Gets the details of a source.

<h3 id="migrationcenterprojectslocationssourcesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource.|
|view|query|string|false|Determines what information to retrieve for the Report.|
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
|view|REPORT_VIEW_UNSPECIFIED|
|view|REPORT_VIEW_BASIC|
|view|REPORT_VIEW_FULL|
|view|REPORT_VIEW_STANDARD|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "isManaged": true,
  "name": "string",
  "pendingFrameCount": 0,
  "priority": 0,
  "type": "SOURCE_TYPE_UNKNOWN",
  "updateTime": "string"
}
```

<h3 id="migrationcenterprojectslocationssourcesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Source](#schemasource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.sources.delete

<a id="opIdmigrationcenter.projects.locations.sources.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1alpha1/{name}`

Deletes a source.

<h3 id="migrationcenterprojectslocationssourcesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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

<h3 id="migrationcenterprojectslocationssourcesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.sources.patch

<a id="opIdmigrationcenter.projects.locations.sources.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "isManaged": true,
    "priority": 0,
    "type": "SOURCE_TYPE_UNKNOWN"
  }'
```

`PATCH /v1alpha1/{name}`

Updates the parameters of a source.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "isManaged": true,
  "priority": 0,
  "type": "SOURCE_TYPE_UNKNOWN"
}
```

<h3 id="migrationcenterprojectslocationssourcespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The full name of the source.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|query|string|false|Required. Field mask is used to specify the fields to be overwritten in the `Source` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.|
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
|body|body|[Source](#schemasource)|false|none|
|» description|body|string|false|Free-text description.|
|» displayName|body|string|false|User-friendly display name.|
|» isManaged|body|boolean|false|If `true`, the source is managed by other service(s).|
|» priority|body|integer(int32)|false|The information confidence of the source. The higher the value, the higher the confidence.|
|» type|body|string|false|Data source type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|SOURCE_TYPE_UNKNOWN|
|» type|SOURCE_TYPE_UPLOAD|
|» type|SOURCE_TYPE_GUEST_OS_SCAN|
|» type|SOURCE_TYPE_INVENTORY_SCAN|
|» type|SOURCE_TYPE_CUSTOM|

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

<h3 id="migrationcenterprojectslocationssourcespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.list

<a id="opIdmigrationcenter.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="migrationcenterprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
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
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="migrationcenterprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.operations.list

<a id="opIdmigrationcenter.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="migrationcenterprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="migrationcenterprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.operations.cancel

<a id="opIdmigrationcenter.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="migrationcenterprojectslocationsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
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
|body|body|[CancelOperationRequest](#schemacanceloperationrequest)|false|none|

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

<h3 id="migrationcenterprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.importJobs.run

<a id="opIdmigrationcenter.projects.locations.importJobs.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestId": "string"
  }'
```

`POST /v1alpha1/{name}:run`

Runs an import job.

> Body parameter

```json
{
  "requestId": "string"
}
```

<h3 id="migrationcenterprojectslocationsimportjobsrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the import job to run.|
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
|body|body|[RunImportJobRequest](#schemarunimportjobrequest)|false|none|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="migrationcenterprojectslocationsimportjobsrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.importJobs.validate

<a id="opIdmigrationcenter.projects.locations.importJobs.validate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestId": "string"
  }'
```

`POST /v1alpha1/{name}:validate`

Validates an import job.

> Body parameter

```json
{
  "requestId": "string"
}
```

<h3 id="migrationcenterprojectslocationsimportjobsvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the import job to validate.|
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
|body|body|[ValidateImportJobRequest](#schemavalidateimportjobrequest)|false|none|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="migrationcenterprojectslocationsimportjobsvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.assets.list

<a id="opIdmigrationcenter.projects.locations.assets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/assets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/assets`

Lists all the assets in a given project and location.

<h3 id="migrationcenterprojectslocationsassetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for `ListAssetsRequest`.|
|filter|query|string|false|Filtering results.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
|view|query|string|false|View of the assets. Defaults to BASIC.|
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
|view|ASSET_VIEW_UNSPECIFIED|
|view|ASSET_VIEW_BASIC|
|view|ASSET_VIEW_FULL|
|view|ASSET_VIEW_STANDARD|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assignedGroups": [
        "string"
      ],
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "insightList": {
        "insights": [
          {
            "migrationInsight": {
              "computeEngineTarget": {
                "shape": {
                  "logicalCoreCount": 0,
                  "machineType": "string",
                  "memoryMb": 0,
                  "physicalCoreCount": 0,
                  "series": "string"
                }
              },
              "fit": {
                "fitLevel": "FIT_LEVEL_UNSPECIFIED"
              },
              "gkeTarget": {},
              "vmwareEngineTarget": {}
            }
          }
        ],
        "updateTime": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "performanceData": {
        "dailyResourceUsageAggregations": [
          {
            "cpu": {
              "utilizationPercentage": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "date": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "disk": {
              "iops": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "memory": {
              "utilizationPercentage": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "network": {
              "egressBps": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              },
              "ingressBps": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            }
          }
        ]
      },
      "sources": [
        "string"
      ],
      "updateTime": "string",
      "virtualMachineDetails": {
        "coreCount": 0,
        "createTime": "string",
        "guestOs": {
          "config": {
            "fstab": {
              "entries": [
                {
                  "file": "string",
                  "freq": 0,
                  "mntops": "string",
                  "passno": 0,
                  "spec": "string",
                  "vfstype": "string"
                }
              ]
            },
            "hosts": {
              "entries": [
                {
                  "hostNames": [
                    "string"
                  ],
                  "ip": "string"
                }
              ]
            },
            "issue": "string",
            "nfsExports": {
              "entries": [
                {
                  "exportDirectory": "string",
                  "hosts": [
                    "string"
                  ]
                }
              ]
            },
            "selinux": {
              "enabled": true,
              "mode": "string"
            }
          },
          "runtime": {
            "domain": "string",
            "installedApps": {
              "entries": [
                {
                  "name": "string",
                  "path": "string",
                  "time": "string",
                  "vendor": "string",
                  "version": "string"
                }
              ]
            },
            "lastUptime": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "machineName": "string",
            "networkInfo": {
              "connections": {
                "entries": [
                  {
                    "localIpAddress": "string",
                    "localPort": 0,
                    "pid": "string",
                    "processName": "string",
                    "protocol": "string",
                    "remoteIpAddress": "string",
                    "remotePort": 0,
                    "state": "string"
                  }
                ]
              },
              "netstat": "string",
              "netstatTime": {
                "day": 0,
                "hours": 0,
                "minutes": 0,
                "month": 0,
                "nanos": 0,
                "seconds": 0,
                "timeZone": {
                  "id": "string",
                  "version": "string"
                },
                "utcOffset": "string",
                "year": 0
              }
            },
            "openFileList": {
              "entries": [
                {
                  "command": "string",
                  "filePath": "string",
                  "fileType": "string",
                  "user": "string"
                }
              ]
            },
            "processes": {
              "processes": [
                {
                  "attributes": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "cmdline": "string",
                  "exePath": "string",
                  "pid": "string",
                  "user": "string"
                }
              ]
            },
            "services": {
              "services": [
                {
                  "cmdline": "string",
                  "exePath": "string",
                  "name": "string",
                  "pid": "string",
                  "startMode": "string",
                  "state": "string",
                  "status": "string"
                }
              ]
            }
          }
        },
        "memoryMb": 0,
        "osFamily": "OS_FAMILY_UNKNOWN",
        "osName": "string",
        "osVersion": "string",
        "platform": {
          "awsEc2Details": {
            "location": "string",
            "machineTypeLabel": "string"
          },
          "azureVmDetails": {
            "location": "string",
            "machineTypeLabel": "string",
            "provisioningState": "string"
          },
          "genericDetails": {
            "location": "string"
          },
          "physicalDetails": {
            "location": "string"
          },
          "vmwareDetails": {
            "esxVersion": "string",
            "osid": "string",
            "vcenterVersion": "string"
          }
        },
        "powerState": "string",
        "vcenterFolder": "string",
        "vcenterUrl": "string",
        "vcenterVmId": "string",
        "vmArchitecture": {
          "bios": {
            "biosManufacturer": "string",
            "biosName": "string",
            "biosReleaseDate": "string",
            "biosVersion": "string",
            "smbiosUuid": "string"
          },
          "cpuArchitecture": "string",
          "cpuManufacturer": "string",
          "cpuName": "string",
          "cpuSocketCount": 0,
          "cpuThreadCount": 0,
          "firmware": "string",
          "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
          "vendor": "string"
        },
        "vmDisks": {
          "disks": {
            "entries": [
              {
                "diskLabel": "string",
                "diskLabelType": "string",
                "hwAddress": "string",
                "interfaceType": "string",
                "partitions": {
                  "entries": [
                    {}
                  ]
                },
                "status": "string",
                "totalCapacityBytes": "string",
                "totalFreeBytes": "string",
                "vmwareConfig": {
                  "backingType": "BACKING_TYPE_UNSPECIFIED",
                  "rdmCompatibilityMode": "string",
                  "shared": true,
                  "vmdkDiskMode": "string"
                }
              }
            ]
          },
          "hddTotalCapacityBytes": "string",
          "hddTotalFreeBytes": "string",
          "lsblkJson": "string"
        },
        "vmName": "string",
        "vmNetwork": {
          "defaultGw": "string",
          "networkAdapters": {
            "networkAdapters": [
              {
                "adapterType": "string",
                "addresses": {
                  "addresses": [
                    {
                      "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                      "bcast": "string",
                      "fqdn": "string",
                      "ipAddress": "string",
                      "subnetMask": "string"
                    }
                  ]
                },
                "macAddress": "string"
              }
            ]
          },
          "primaryIpAddress": "string",
          "primaryMacAddress": "string",
          "publicIpAddress": "string"
        },
        "vmUuid": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationsassetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAssetsResponse](#schemalistassetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.assets.aggregateValues

<a id="opIdmigrationcenter.projects.locations.assets.aggregateValues"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/assets:aggregateValues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "aggregations": [
      {
        "count": {},
        "field": "string",
        "frequency": {},
        "histogram": {
          "lowerBounds": [
            0
          ]
        },
        "sum": {}
      }
    ],
    "filter": "string"
  }'
```

`POST /v1alpha1/{parent}/assets:aggregateValues`

Aggregates the requested fields based on provided function.

> Body parameter

```json
{
  "aggregations": [
    {
      "count": {},
      "field": "string",
      "frequency": {},
      "histogram": {
        "lowerBounds": [
          0
        ]
      },
      "sum": {}
    }
  ],
  "filter": "string"
}
```

<h3 id="migrationcenterprojectslocationsassetsaggregatevalues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for `AggregateAssetsValuesRequest`.|
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
|body|body|[AggregateAssetsValuesRequest](#schemaaggregateassetsvaluesrequest)|false|none|
|» aggregations|body|[[Aggregation](#schemaaggregation)]|false|Array of aggregations to perform. Up to 25 aggregations can be defined.|
|» filter|body|string|false|The aggregation will be performed on assets that match the provided filter.|

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
  "results": [
    {
      "count": {
        "value": "string"
      },
      "field": "string",
      "frequency": {
        "values": {
          "property1": "string",
          "property2": "string"
        }
      },
      "histogram": {
        "buckets": [
          {
            "count": "string",
            "lowerBound": 0,
            "upperBound": 0
          }
        ]
      },
      "sum": {
        "value": 0
      }
    }
  ]
}
```

<h3 id="migrationcenterprojectslocationsassetsaggregatevalues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AggregateAssetsValuesResponse](#schemaaggregateassetsvaluesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.assets.batchDelete

<a id="opIdmigrationcenter.projects.locations.assets.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/assets:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowMissing": true,
    "names": [
      "string"
    ]
  }'
```

`POST /v1alpha1/{parent}/assets:batchDelete`

Deletes list of Assets.

> Body parameter

```json
{
  "allowMissing": true,
  "names": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationsassetsbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for batch asset delete.|
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
|body|body|[BatchDeleteAssetsRequest](#schemabatchdeleteassetsrequest)|false|none|
|» allowMissing|body|boolean|false|Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`.|
|» names|body|[string]|false|Required. The IDs of the assets to delete. A maximum of 10 assets can be deleted in a batch. format: projects/{project}/locations/{location}/asset/{name}.|

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

<h3 id="migrationcenterprojectslocationsassetsbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.assets.batchUpdate

<a id="opIdmigrationcenter.projects.locations.assets.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/assets:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "asset": {
          "attributes": {
            "property1": "string",
            "property2": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "requestId": "string",
        "updateMask": "string"
      }
    ]
  }'
```

`POST /v1alpha1/{parent}/assets:batchUpdate`

Updates the parameters of a list of assets.

> Body parameter

```json
{
  "requests": [
    {
      "asset": {
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "requestId": "string",
      "updateMask": "string"
    }
  ]
}
```

<h3 id="migrationcenterprojectslocationsassetsbatchupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for batch asset update.|
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
|body|body|[BatchUpdateAssetsRequest](#schemabatchupdateassetsrequest)|false|none|
|» requests|body|[[UpdateAssetRequest](#schemaupdateassetrequest)]|false|Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch.|

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
  "assets": [
    {
      "assignedGroups": [
        "string"
      ],
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "insightList": {
        "insights": [
          {
            "migrationInsight": {
              "computeEngineTarget": {
                "shape": {
                  "logicalCoreCount": 0,
                  "machineType": "string",
                  "memoryMb": 0,
                  "physicalCoreCount": 0,
                  "series": "string"
                }
              },
              "fit": {
                "fitLevel": "FIT_LEVEL_UNSPECIFIED"
              },
              "gkeTarget": {},
              "vmwareEngineTarget": {}
            }
          }
        ],
        "updateTime": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "performanceData": {
        "dailyResourceUsageAggregations": [
          {
            "cpu": {
              "utilizationPercentage": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "date": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "disk": {
              "iops": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "memory": {
              "utilizationPercentage": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "network": {
              "egressBps": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              },
              "ingressBps": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            }
          }
        ]
      },
      "sources": [
        "string"
      ],
      "updateTime": "string",
      "virtualMachineDetails": {
        "coreCount": 0,
        "createTime": "string",
        "guestOs": {
          "config": {
            "fstab": {
              "entries": [
                {
                  "file": "string",
                  "freq": 0,
                  "mntops": "string",
                  "passno": 0,
                  "spec": "string",
                  "vfstype": "string"
                }
              ]
            },
            "hosts": {
              "entries": [
                {
                  "hostNames": [
                    "string"
                  ],
                  "ip": "string"
                }
              ]
            },
            "issue": "string",
            "nfsExports": {
              "entries": [
                {
                  "exportDirectory": "string",
                  "hosts": [
                    "string"
                  ]
                }
              ]
            },
            "selinux": {
              "enabled": true,
              "mode": "string"
            }
          },
          "runtime": {
            "domain": "string",
            "installedApps": {
              "entries": [
                {
                  "name": "string",
                  "path": "string",
                  "time": "string",
                  "vendor": "string",
                  "version": "string"
                }
              ]
            },
            "lastUptime": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "machineName": "string",
            "networkInfo": {
              "connections": {
                "entries": [
                  {
                    "localIpAddress": "string",
                    "localPort": 0,
                    "pid": "string",
                    "processName": "string",
                    "protocol": "string",
                    "remoteIpAddress": "string",
                    "remotePort": 0,
                    "state": "string"
                  }
                ]
              },
              "netstat": "string",
              "netstatTime": {
                "day": 0,
                "hours": 0,
                "minutes": 0,
                "month": 0,
                "nanos": 0,
                "seconds": 0,
                "timeZone": {
                  "id": "string",
                  "version": "string"
                },
                "utcOffset": "string",
                "year": 0
              }
            },
            "openFileList": {
              "entries": [
                {
                  "command": "string",
                  "filePath": "string",
                  "fileType": "string",
                  "user": "string"
                }
              ]
            },
            "processes": {
              "processes": [
                {
                  "attributes": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "cmdline": "string",
                  "exePath": "string",
                  "pid": "string",
                  "user": "string"
                }
              ]
            },
            "services": {
              "services": [
                {
                  "cmdline": "string",
                  "exePath": "string",
                  "name": "string",
                  "pid": "string",
                  "startMode": "string",
                  "state": "string",
                  "status": "string"
                }
              ]
            }
          }
        },
        "memoryMb": 0,
        "osFamily": "OS_FAMILY_UNKNOWN",
        "osName": "string",
        "osVersion": "string",
        "platform": {
          "awsEc2Details": {
            "location": "string",
            "machineTypeLabel": "string"
          },
          "azureVmDetails": {
            "location": "string",
            "machineTypeLabel": "string",
            "provisioningState": "string"
          },
          "genericDetails": {
            "location": "string"
          },
          "physicalDetails": {
            "location": "string"
          },
          "vmwareDetails": {
            "esxVersion": "string",
            "osid": "string",
            "vcenterVersion": "string"
          }
        },
        "powerState": "string",
        "vcenterFolder": "string",
        "vcenterUrl": "string",
        "vcenterVmId": "string",
        "vmArchitecture": {
          "bios": {
            "biosManufacturer": "string",
            "biosName": "string",
            "biosReleaseDate": "string",
            "biosVersion": "string",
            "smbiosUuid": "string"
          },
          "cpuArchitecture": "string",
          "cpuManufacturer": "string",
          "cpuName": "string",
          "cpuSocketCount": 0,
          "cpuThreadCount": 0,
          "firmware": "string",
          "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
          "vendor": "string"
        },
        "vmDisks": {
          "disks": {
            "entries": [
              {
                "diskLabel": "string",
                "diskLabelType": "string",
                "hwAddress": "string",
                "interfaceType": "string",
                "partitions": {
                  "entries": [
                    {}
                  ]
                },
                "status": "string",
                "totalCapacityBytes": "string",
                "totalFreeBytes": "string",
                "vmwareConfig": {
                  "backingType": "BACKING_TYPE_UNSPECIFIED",
                  "rdmCompatibilityMode": "string",
                  "shared": true,
                  "vmdkDiskMode": "string"
                }
              }
            ]
          },
          "hddTotalCapacityBytes": "string",
          "hddTotalFreeBytes": "string",
          "lsblkJson": "string"
        },
        "vmName": "string",
        "vmNetwork": {
          "defaultGw": "string",
          "networkAdapters": {
            "networkAdapters": [
              {
                "adapterType": "string",
                "addresses": {
                  "addresses": [
                    {
                      "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                      "bcast": "string",
                      "fqdn": "string",
                      "ipAddress": "string",
                      "subnetMask": "string"
                    }
                  ]
                },
                "macAddress": "string"
              }
            ]
          },
          "primaryIpAddress": "string",
          "primaryMacAddress": "string",
          "publicIpAddress": "string"
        },
        "vmUuid": "string"
      }
    }
  ]
}
```

<h3 id="migrationcenterprojectslocationsassetsbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchUpdateAssetsResponse](#schemabatchupdateassetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.assets.reportAssetFrames

<a id="opIdmigrationcenter.projects.locations.assets.reportAssetFrames"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/assets:reportAssetFrames \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "framesData": [
      {
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "performanceSamples": [
          {
            "cpu": {
              "utilizedPercentage": 0
            },
            "disk": {
              "averageIops": 0
            },
            "memory": {
              "utilizedPercentage": 0
            },
            "network": {
              "averageEgressBps": 0,
              "averageIngressBps": 0
            },
            "sampleTime": "string"
          }
        ],
        "reportTime": "string",
        "traceToken": "string",
        "virtualMachineDetails": {
          "coreCount": 0,
          "createTime": "string",
          "guestOs": {
            "config": {
              "fstab": {
                "entries": [
                  {
                    "file": "string",
                    "freq": 0,
                    "mntops": "string",
                    "passno": 0,
                    "spec": "string",
                    "vfstype": "string"
                  }
                ]
              },
              "hosts": {
                "entries": [
                  {
                    "hostNames": [
                      "string"
                    ],
                    "ip": "string"
                  }
                ]
              },
              "issue": "string",
              "nfsExports": {
                "entries": [
                  {
                    "exportDirectory": "string",
                    "hosts": [
                      "string"
                    ]
                  }
                ]
              },
              "selinux": {
                "enabled": true,
                "mode": "string"
              }
            },
            "runtime": {
              "domain": "string",
              "installedApps": {
                "entries": [
                  {
                    "name": "string",
                    "path": "string",
                    "time": "string",
                    "vendor": "string",
                    "version": "string"
                  }
                ]
              },
              "lastUptime": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "machineName": "string",
              "networkInfo": {
                "connections": {
                  "entries": [
                    {
                      "localIpAddress": "string",
                      "localPort": 0,
                      "pid": "string",
                      "processName": "string",
                      "protocol": "string",
                      "remoteIpAddress": "string",
                      "remotePort": 0,
                      "state": "string"
                    }
                  ]
                },
                "netstat": "string",
                "netstatTime": {
                  "day": 0,
                  "hours": 0,
                  "minutes": 0,
                  "month": 0,
                  "nanos": 0,
                  "seconds": 0,
                  "timeZone": {
                    "id": "string",
                    "version": "string"
                  },
                  "utcOffset": "string",
                  "year": 0
                }
              },
              "openFileList": {
                "entries": [
                  {
                    "command": "string",
                    "filePath": "string",
                    "fileType": "string",
                    "user": "string"
                  }
                ]
              },
              "processes": {
                "processes": [
                  {
                    "attributes": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "cmdline": "string",
                    "exePath": "string",
                    "pid": "string",
                    "user": "string"
                  }
                ]
              },
              "services": {
                "services": [
                  {
                    "cmdline": "string",
                    "exePath": "string",
                    "name": "string",
                    "pid": "string",
                    "startMode": "string",
                    "state": "string",
                    "status": "string"
                  }
                ]
              }
            }
          },
          "memoryMb": 0,
          "osFamily": "OS_FAMILY_UNKNOWN",
          "osName": "string",
          "osVersion": "string",
          "platform": {
            "awsEc2Details": {
              "location": "string",
              "machineTypeLabel": "string"
            },
            "azureVmDetails": {
              "location": "string",
              "machineTypeLabel": "string",
              "provisioningState": "string"
            },
            "genericDetails": {
              "location": "string"
            },
            "physicalDetails": {
              "location": "string"
            },
            "vmwareDetails": {
              "esxVersion": "string",
              "osid": "string",
              "vcenterVersion": "string"
            }
          },
          "powerState": "string",
          "vcenterFolder": "string",
          "vcenterUrl": "string",
          "vcenterVmId": "string",
          "vmArchitecture": {
            "bios": {
              "biosManufacturer": "string",
              "biosName": "string",
              "biosReleaseDate": "string",
              "biosVersion": "string",
              "smbiosUuid": "string"
            },
            "cpuArchitecture": "string",
            "cpuManufacturer": "string",
            "cpuName": "string",
            "cpuSocketCount": 0,
            "cpuThreadCount": 0,
            "firmware": "string",
            "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
            "vendor": "string"
          },
          "vmDisks": {
            "disks": {
              "entries": [
                {
                  "diskLabel": "string",
                  "diskLabelType": "string",
                  "hwAddress": "string",
                  "interfaceType": "string",
                  "partitions": {
                    "entries": [
                      {}
                    ]
                  },
                  "status": "string",
                  "totalCapacityBytes": "string",
                  "totalFreeBytes": "string",
                  "vmwareConfig": {
                    "backingType": "BACKING_TYPE_UNSPECIFIED",
                    "rdmCompatibilityMode": "string",
                    "shared": true,
                    "vmdkDiskMode": "string"
                  }
                }
              ]
            },
            "hddTotalCapacityBytes": "string",
            "hddTotalFreeBytes": "string",
            "lsblkJson": "string"
          },
          "vmName": "string",
          "vmNetwork": {
            "defaultGw": "string",
            "networkAdapters": {
              "networkAdapters": [
                {
                  "adapterType": "string",
                  "addresses": {
                    "addresses": [
                      {
                        "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                        "bcast": "string",
                        "fqdn": "string",
                        "ipAddress": "string",
                        "subnetMask": "string"
                      }
                    ]
                  },
                  "macAddress": "string"
                }
              ]
            },
            "primaryIpAddress": "string",
            "primaryMacAddress": "string",
            "publicIpAddress": "string"
          },
          "vmUuid": "string"
        }
      }
    ]
  }'
```

`POST /v1alpha1/{parent}/assets:reportAssetFrames`

Reports a set of frames.

> Body parameter

```json
{
  "framesData": [
    {
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "performanceSamples": [
        {
          "cpu": {
            "utilizedPercentage": 0
          },
          "disk": {
            "averageIops": 0
          },
          "memory": {
            "utilizedPercentage": 0
          },
          "network": {
            "averageEgressBps": 0,
            "averageIngressBps": 0
          },
          "sampleTime": "string"
        }
      ],
      "reportTime": "string",
      "traceToken": "string",
      "virtualMachineDetails": {
        "coreCount": 0,
        "createTime": "string",
        "guestOs": {
          "config": {
            "fstab": {
              "entries": [
                {
                  "file": "string",
                  "freq": 0,
                  "mntops": "string",
                  "passno": 0,
                  "spec": "string",
                  "vfstype": "string"
                }
              ]
            },
            "hosts": {
              "entries": [
                {
                  "hostNames": [
                    "string"
                  ],
                  "ip": "string"
                }
              ]
            },
            "issue": "string",
            "nfsExports": {
              "entries": [
                {
                  "exportDirectory": "string",
                  "hosts": [
                    "string"
                  ]
                }
              ]
            },
            "selinux": {
              "enabled": true,
              "mode": "string"
            }
          },
          "runtime": {
            "domain": "string",
            "installedApps": {
              "entries": [
                {
                  "name": "string",
                  "path": "string",
                  "time": "string",
                  "vendor": "string",
                  "version": "string"
                }
              ]
            },
            "lastUptime": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "machineName": "string",
            "networkInfo": {
              "connections": {
                "entries": [
                  {
                    "localIpAddress": "string",
                    "localPort": 0,
                    "pid": "string",
                    "processName": "string",
                    "protocol": "string",
                    "remoteIpAddress": "string",
                    "remotePort": 0,
                    "state": "string"
                  }
                ]
              },
              "netstat": "string",
              "netstatTime": {
                "day": 0,
                "hours": 0,
                "minutes": 0,
                "month": 0,
                "nanos": 0,
                "seconds": 0,
                "timeZone": {
                  "id": "string",
                  "version": "string"
                },
                "utcOffset": "string",
                "year": 0
              }
            },
            "openFileList": {
              "entries": [
                {
                  "command": "string",
                  "filePath": "string",
                  "fileType": "string",
                  "user": "string"
                }
              ]
            },
            "processes": {
              "processes": [
                {
                  "attributes": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "cmdline": "string",
                  "exePath": "string",
                  "pid": "string",
                  "user": "string"
                }
              ]
            },
            "services": {
              "services": [
                {
                  "cmdline": "string",
                  "exePath": "string",
                  "name": "string",
                  "pid": "string",
                  "startMode": "string",
                  "state": "string",
                  "status": "string"
                }
              ]
            }
          }
        },
        "memoryMb": 0,
        "osFamily": "OS_FAMILY_UNKNOWN",
        "osName": "string",
        "osVersion": "string",
        "platform": {
          "awsEc2Details": {
            "location": "string",
            "machineTypeLabel": "string"
          },
          "azureVmDetails": {
            "location": "string",
            "machineTypeLabel": "string",
            "provisioningState": "string"
          },
          "genericDetails": {
            "location": "string"
          },
          "physicalDetails": {
            "location": "string"
          },
          "vmwareDetails": {
            "esxVersion": "string",
            "osid": "string",
            "vcenterVersion": "string"
          }
        },
        "powerState": "string",
        "vcenterFolder": "string",
        "vcenterUrl": "string",
        "vcenterVmId": "string",
        "vmArchitecture": {
          "bios": {
            "biosManufacturer": "string",
            "biosName": "string",
            "biosReleaseDate": "string",
            "biosVersion": "string",
            "smbiosUuid": "string"
          },
          "cpuArchitecture": "string",
          "cpuManufacturer": "string",
          "cpuName": "string",
          "cpuSocketCount": 0,
          "cpuThreadCount": 0,
          "firmware": "string",
          "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
          "vendor": "string"
        },
        "vmDisks": {
          "disks": {
            "entries": [
              {
                "diskLabel": "string",
                "diskLabelType": "string",
                "hwAddress": "string",
                "interfaceType": "string",
                "partitions": {
                  "entries": [
                    {}
                  ]
                },
                "status": "string",
                "totalCapacityBytes": "string",
                "totalFreeBytes": "string",
                "vmwareConfig": {
                  "backingType": "BACKING_TYPE_UNSPECIFIED",
                  "rdmCompatibilityMode": "string",
                  "shared": true,
                  "vmdkDiskMode": "string"
                }
              }
            ]
          },
          "hddTotalCapacityBytes": "string",
          "hddTotalFreeBytes": "string",
          "lsblkJson": "string"
        },
        "vmName": "string",
        "vmNetwork": {
          "defaultGw": "string",
          "networkAdapters": {
            "networkAdapters": [
              {
                "adapterType": "string",
                "addresses": {
                  "addresses": [
                    {
                      "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                      "bcast": "string",
                      "fqdn": "string",
                      "ipAddress": "string",
                      "subnetMask": "string"
                    }
                  ]
                },
                "macAddress": "string"
              }
            ]
          },
          "primaryIpAddress": "string",
          "primaryMacAddress": "string",
          "publicIpAddress": "string"
        },
        "vmUuid": "string"
      }
    }
  ]
}
```

<h3 id="migrationcenterprojectslocationsassetsreportassetframes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent of the resource.|
|source|query|string|false|Required. Reference to a source.|
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
|body|body|[Frames](#schemaframes)|false|none|
|» framesData|body|[[AssetFrame](#schemaassetframe)]|false|A repeated field of asset data.|

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

<h3 id="migrationcenterprojectslocationsassetsreportassetframes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportAssetFramesResponse](#schemareportassetframesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.groups.list

<a id="opIdmigrationcenter.projects.locations.groups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/groups`

Lists all groups in a given project and location.

<h3 id="migrationcenterprojectslocationsgroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for `ListGroupsRequest`.|
|filter|query|string|false|Filtering results.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
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
  "groups": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationsgroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGroupsResponse](#schemalistgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.groups.create

<a id="opIdmigrationcenter.projects.locations.groups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1alpha1/{parent}/groups`

Creates a new group in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="migrationcenterprojectslocationsgroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Value for parent.|
|groupId|query|string|false|Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[Group](#schemagroup)|false|none|
|» description|body|string|false|The description of the resource.|
|» displayName|body|string|false|User-friendly display name.|
|» labels|body|object|false|Labels as key value pairs.|
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

<h3 id="migrationcenterprojectslocationsgroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.importJobs.importDataFiles.list

<a id="opIdmigrationcenter.projects.locations.importJobs.importDataFiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/importDataFiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/importDataFiles`

List import data files.

<h3 id="migrationcenterprojectslocationsimportjobsimportdatafileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the parent of the `ImportDataFiles` resource.|
|filter|query|string|false|Filtering results.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token.|
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
  "importDataFiles": [
    {
      "createTime": "string",
      "displayName": "string",
      "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "uploadFileInfo": {
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "signedUri": "string",
        "uri": "string",
        "uriExpirationTime": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationsimportjobsimportdatafileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListImportDataFilesResponse](#schemalistimportdatafilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.importJobs.importDataFiles.create

<a id="opIdmigrationcenter.projects.locations.importJobs.importDataFiles.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/importDataFiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
    "uploadFileInfo": {}
  }'
```

`POST /v1alpha1/{parent}/importDataFiles`

Creates an import data file.

> Body parameter

```json
{
  "displayName": "string",
  "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
  "uploadFileInfo": {}
}
```

<h3 id="migrationcenterprojectslocationsimportjobsimportdatafilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the parent of the ImportDataFile.|
|importDataFileId|query|string|false|Required. The ID of the new data file.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[ImportDataFile](#schemaimportdatafile)|false|none|
|» displayName|body|string|false|User-friendly display name. Maximum length is 63 characters.|
|» format|body|string|false|Required. The payload format.|
|» uploadFileInfo|body|[UploadFileInfo](#schemauploadfileinfo)|false|Information about a file that is uploaded to a storage service.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» format|IMPORT_JOB_FORMAT_UNSPECIFIED|
|» format|IMPORT_JOB_FORMAT_CMDB|
|» format|IMPORT_JOB_FORMAT_RVTOOLS_XLSX|
|» format|IMPORT_JOB_FORMAT_RVTOOLS_CSV|
|» format|IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV|
|» format|IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV|
|» format|IMPORT_JOB_FORMAT_MANUAL_CSV|

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

<h3 id="migrationcenterprojectslocationsimportjobsimportdatafilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.importJobs.list

<a id="opIdmigrationcenter.projects.locations.importJobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/importJobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/importJobs`

Lists all import jobs.

<h3 id="migrationcenterprojectslocationsimportjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for `ListImportJobsRequest`.|
|filter|query|string|false|Filtering results.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
|view|query|string|false|Optional. The level of details of each import job. Default value is BASIC.|
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
|view|IMPORT_JOB_VIEW_UNSPECIFIED|
|view|IMPORT_JOB_VIEW_BASIC|
|view|IMPORT_JOB_VIEW_FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "importJobs": [
    {
      "assetSource": "string",
      "completeTime": "string",
      "createTime": "string",
      "displayName": "string",
      "executionReport": {
        "executionErrors": {
          "fileValidations": [
            {
              "fileErrors": [
                {
                  "errorDetails": "string",
                  "severity": "SEVERITY_UNSPECIFIED"
                }
              ],
              "fileName": "string",
              "partialReport": true,
              "rowErrors": [
                {
                  "errors": [
                    {
                      "errorDetails": "string",
                      "severity": "SEVERITY_UNSPECIFIED"
                    }
                  ],
                  "rowNumber": 0,
                  "vmName": "string",
                  "vmUuid": "string"
                }
              ]
            }
          ],
          "jobErrors": [
            {
              "errorDetails": "string",
              "severity": "SEVERITY_UNSPECIFIED"
            }
          ]
        },
        "framesReported": 0,
        "jobErrors": [
          {
            "errorDetails": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "totalRowsCount": 0
      },
      "gcsPayload": {
        "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
        "path": "string"
      },
      "inlinePayload": {
        "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
        "payload": [
          {
            "data": "string",
            "name": "string"
          }
        ]
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "IMPORT_JOB_STATE_UNSPECIFIED",
      "updateTime": "string",
      "validationReport": {
        "fileValidations": [
          {
            "fileErrors": [
              {
                "errorDetails": "string",
                "severity": "SEVERITY_UNSPECIFIED"
              }
            ],
            "fileName": "string",
            "partialReport": true,
            "rowErrors": [
              {
                "errors": [
                  {
                    "errorDetails": "string",
                    "severity": "SEVERITY_UNSPECIFIED"
                  }
                ],
                "rowNumber": 0,
                "vmName": "string",
                "vmUuid": "string"
              }
            ]
          }
        ],
        "jobErrors": [
          {
            "errorDetails": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ]
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationsimportjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListImportJobsResponse](#schemalistimportjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.importJobs.create

<a id="opIdmigrationcenter.projects.locations.importJobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/importJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assetSource": "string",
    "displayName": "string",
    "gcsPayload": {
      "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
      "path": "string"
    },
    "inlinePayload": {
      "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
      "payload": [
        {
          "data": "string",
          "name": "string"
        }
      ]
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1alpha1/{parent}/importJobs`

Creates an import job.

> Body parameter

```json
{
  "assetSource": "string",
  "displayName": "string",
  "gcsPayload": {
    "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
    "path": "string"
  },
  "inlinePayload": {
    "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
    "payload": [
      {
        "data": "string",
        "name": "string"
      }
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="migrationcenterprojectslocationsimportjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Value for parent.|
|importJobId|query|string|false|Required. ID of the import job.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[ImportJob](#schemaimportjob)|false|none|
|» assetSource|body|string|false|Required. Reference to a source.|
|» displayName|body|string|false|User-friendly display name. Maximum length is 63 characters.|
|» gcsPayload|body|[GCSPayloadInfo](#schemagcspayloadinfo)|false|The payload is in Google Cloud Storage.|
|» inlinePayload|body|[InlinePayloadInfo](#schemainlinepayloadinfo)|false|The payload is included in the request, mainly used for small import jobs.|
|» labels|body|object|false|Labels as key value pairs.|
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

<h3 id="migrationcenterprojectslocationsimportjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.preferenceSets.list

<a id="opIdmigrationcenter.projects.locations.preferenceSets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/preferenceSets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/preferenceSets`

Lists all the preference sets in a given project and location.

<h3 id="migrationcenterprojectslocationspreferencesetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for `ListPreferenceSetsRequest`.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
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
  "preferenceSets": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string",
      "virtualMachinePreferences": {
        "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
        "computeEnginePreferences": {
          "licenseType": "LICENSE_TYPE_UNSPECIFIED",
          "machinePreferences": {
            "allowedMachineSeries": [
              {
                "code": "string"
              }
            ]
          },
          "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
        },
        "regionPreferences": {
          "preferredRegions": [
            "string"
          ]
        },
        "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationspreferencesetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPreferenceSetsResponse](#schemalistpreferencesetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.preferenceSets.create

<a id="opIdmigrationcenter.projects.locations.preferenceSets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/preferenceSets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "virtualMachinePreferences": {
      "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
      "computeEnginePreferences": {
        "licenseType": "LICENSE_TYPE_UNSPECIFIED",
        "machinePreferences": {
          "allowedMachineSeries": [
            {
              "code": "string"
            }
          ]
        },
        "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
      },
      "regionPreferences": {
        "preferredRegions": [
          "string"
        ]
      },
      "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
    }
  }'
```

`POST /v1alpha1/{parent}/preferenceSets`

Creates a new preference set in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "virtualMachinePreferences": {
    "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
    "computeEnginePreferences": {
      "licenseType": "LICENSE_TYPE_UNSPECIFIED",
      "machinePreferences": {
        "allowedMachineSeries": [
          {
            "code": "string"
          }
        ]
      },
      "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    },
    "regionPreferences": {
      "preferredRegions": [
        "string"
      ]
    },
    "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
  }
}
```

<h3 id="migrationcenterprojectslocationspreferencesetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Value for parent.|
|preferenceSetId|query|string|false|none|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[PreferenceSet](#schemapreferenceset)|false|none|
|» description|body|string|false|A description of the preference set.|
|» displayName|body|string|false|User-friendly display name. Maximum length is 63 characters.|
|» virtualMachinePreferences|body|[VirtualMachinePreferences](#schemavirtualmachinepreferences)|false|A set of preferences that applies to all virtual machines in the context.|

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

<h3 id="migrationcenterprojectslocationspreferencesetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.reportConfigs.list

<a id="opIdmigrationcenter.projects.locations.reportConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/reportConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/reportConfigs`

Lists ReportConfigs in a given project and location.

<h3 id="migrationcenterprojectslocationsreportconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for `ListReportConfigsRequest`.|
|filter|query|string|false|Filtering results.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
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
  "reportConfigs": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "groupPreferencesetAssignments": [
        {
          "group": "string",
          "preferenceSet": "string"
        }
      ],
      "name": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationsreportconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReportConfigsResponse](#schemalistreportconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.reportConfigs.create

<a id="opIdmigrationcenter.projects.locations.reportConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/reportConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "groupPreferencesetAssignments": [
      {
        "group": "string",
        "preferenceSet": "string"
      }
    ]
  }'
```

`POST /v1alpha1/{parent}/reportConfigs`

Creates a report configuration.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "groupPreferencesetAssignments": [
    {
      "group": "string",
      "preferenceSet": "string"
    }
  ]
}
```

<h3 id="migrationcenterprojectslocationsreportconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Value for parent.|
|reportConfigId|query|string|false|Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[ReportConfig](#schemareportconfig)|false|none|
|» description|body|string|false|Free-text description.|
|» displayName|body|string|false|User-friendly display name. Maximum length is 63 characters.|
|» groupPreferencesetAssignments|body|[[ReportConfigGroupPreferenceSetAssignment](#schemareportconfiggrouppreferencesetassignment)]|false|Required. Collection of combinations of groups and preference sets.|

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

<h3 id="migrationcenterprojectslocationsreportconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.reportConfigs.reports.list

<a id="opIdmigrationcenter.projects.locations.reportConfigs.reports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/reports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/reports`

Lists Reports in a given ReportConfig.

<h3 id="migrationcenterprojectslocationsreportconfigsreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for `ListReportsRequest`.|
|filter|query|string|false|Filtering results.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.|
|pageToken|query|string|false|A token identifying a page of results that the server should return.|
|view|query|string|false|Determines what information to retrieve for each Report.|
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
|view|REPORT_VIEW_UNSPECIFIED|
|view|REPORT_VIEW_BASIC|
|view|REPORT_VIEW_FULL|
|view|REPORT_VIEW_STANDARD|
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
  "reports": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "summary": {
        "allAssetsStats": {
          "assetAge": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "coreCountHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "memoryBytesHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "memoryUtilization": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "memoryUtilizationChart": {
            "free": "string",
            "used": "string"
          },
          "operatingSystem": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "storageBytesHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "storageUtilization": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "storageUtilizationChart": {
            "free": "string",
            "used": "string"
          },
          "totalAssets": "string",
          "totalCores": "string",
          "totalMemoryBytes": "string",
          "totalStorageBytes": "string"
        },
        "groupFindings": [
          {
            "assetAggregateStats": {
              "assetAge": {
                "dataPoints": [
                  {
                    "label": "string",
                    "value": 0
                  }
                ]
              },
              "coreCountHistogram": {
                "buckets": [
                  {
                    "count": "string",
                    "lowerBound": "string",
                    "upperBound": "string"
                  }
                ]
              },
              "memoryBytesHistogram": {
                "buckets": [
                  {
                    "count": "string",
                    "lowerBound": "string",
                    "upperBound": "string"
                  }
                ]
              },
              "memoryUtilization": {
                "dataPoints": [
                  {
                    "label": "string",
                    "value": 0
                  }
                ]
              },
              "memoryUtilizationChart": {
                "free": "string",
                "used": "string"
              },
              "operatingSystem": {
                "dataPoints": [
                  {
                    "label": "string",
                    "value": 0
                  }
                ]
              },
              "storageBytesHistogram": {
                "buckets": [
                  {
                    "count": "string",
                    "lowerBound": "string",
                    "upperBound": "string"
                  }
                ]
              },
              "storageUtilization": {
                "dataPoints": [
                  {
                    "label": "string",
                    "value": 0
                  }
                ]
              },
              "storageUtilizationChart": {
                "free": "string",
                "used": "string"
              },
              "totalAssets": "string",
              "totalCores": "string",
              "totalMemoryBytes": "string",
              "totalStorageBytes": "string"
            },
            "description": "string",
            "displayName": "string",
            "overlappingAssetCount": "string",
            "preferenceSetFindings": [
              {
                "description": "string",
                "displayName": "string",
                "machineFinding": {
                  "allocatedAssetCount": "string",
                  "allocatedDiskTypes": [
                    "PERSISTENT_DISK_TYPE_UNSPECIFIED"
                  ],
                  "allocatedRegions": [
                    "string"
                  ],
                  "machineSeriesAllocations": [
                    {
                      "allocatedAssetCount": "string",
                      "machineSeries": {
                        "code": "string"
                      }
                    }
                  ]
                },
                "machinePreferences": {
                  "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
                  "computeEnginePreferences": {
                    "licenseType": "LICENSE_TYPE_UNSPECIFIED",
                    "machinePreferences": {
                      "allowedMachineSeries": [
                        {
                          "code": "string"
                        }
                      ]
                    },
                    "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
                  },
                  "regionPreferences": {
                    "preferredRegions": [
                      "string"
                    ]
                  },
                  "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
                },
                "monthlyCostCompute": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostNetworkEgress": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostOsLicense": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostOther": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostStorage": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostTotal": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "preferredRegion": "string",
                "pricingTrack": "string",
                "topPriority": "string"
              }
            ]
          }
        ]
      },
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationsreportconfigsreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReportsResponse](#schemalistreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.reportConfigs.reports.create

<a id="opIdmigrationcenter.projects.locations.reportConfigs.reports.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "state": "STATE_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1alpha1/{parent}/reports`

Creates a report.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="migrationcenterprojectslocationsreportconfigsreportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Value for parent.|
|reportId|query|string|false|Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[Report](#schemareport)|false|none|
|» description|body|string|false|Free-text description.|
|» displayName|body|string|false|User-friendly display name. Maximum length is 63 characters.|
|» state|body|string|false|Report creation state.|
|» type|body|string|false|Report type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|PENDING|
|» state|SUCCEEDED|
|» state|FAILED|
|» type|TYPE_UNSPECIFIED|
|» type|TOTAL_COST_OF_OWNERSHIP|

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

<h3 id="migrationcenterprojectslocationsreportconfigsreportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.sources.list

<a id="opIdmigrationcenter.projects.locations.sources.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/sources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/sources`

Lists all the sources in a given project and location.

<h3 id="migrationcenterprojectslocationssourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for `ListSourcesRequest`.|
|filter|query|string|false|Filtering results.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.|
|pageToken|query|string|false|A token identifying a page of results that the server should return.|
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
  "sources": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "isManaged": true,
      "name": "string",
      "pendingFrameCount": 0,
      "priority": 0,
      "type": "SOURCE_TYPE_UNKNOWN",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="migrationcenterprojectslocationssourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSourcesResponse](#schemalistsourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## migrationcenter.projects.locations.sources.create

<a id="opIdmigrationcenter.projects.locations.sources.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/sources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "isManaged": true,
    "priority": 0,
    "type": "SOURCE_TYPE_UNKNOWN"
  }'
```

`POST /v1alpha1/{parent}/sources`

Creates a new source in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "isManaged": true,
  "priority": 0,
  "type": "SOURCE_TYPE_UNKNOWN"
}
```

<h3 id="migrationcenterprojectslocationssourcescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Value for parent.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|sourceId|query|string|false|Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.|
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
|body|body|[Source](#schemasource)|false|none|
|» description|body|string|false|Free-text description.|
|» displayName|body|string|false|User-friendly display name.|
|» isManaged|body|boolean|false|If `true`, the source is managed by other service(s).|
|» priority|body|integer(int32)|false|The information confidence of the source. The higher the value, the higher the confidence.|
|» type|body|string|false|Data source type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|SOURCE_TYPE_UNKNOWN|
|» type|SOURCE_TYPE_UPLOAD|
|» type|SOURCE_TYPE_GUEST_OS_SCAN|
|» type|SOURCE_TYPE_INVENTORY_SCAN|
|» type|SOURCE_TYPE_CUSTOM|

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

<h3 id="migrationcenterprojectslocationssourcescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AddAssetsToGroupRequest">AddAssetsToGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddassetstogrouprequest"></a>
<a id="schema_AddAssetsToGroupRequest"></a>
<a id="tocSaddassetstogrouprequest"></a>
<a id="tocsaddassetstogrouprequest"></a>

```json
{
  "allowExisting": true,
  "assets": {
    "assetIds": [
      "string"
    ]
  },
  "requestId": "string"
}
```

A request to add assets to a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowExisting|boolean|false|none|Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.|
|assets|[AssetList](#schemaassetlist)|false|none|Required. List of assets to be added. The maximum number of assets that can be added in a single request is 1000.|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_AggregateAssetsValuesRequest">AggregateAssetsValuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateassetsvaluesrequest"></a>
<a id="schema_AggregateAssetsValuesRequest"></a>
<a id="tocSaggregateassetsvaluesrequest"></a>
<a id="tocsaggregateassetsvaluesrequest"></a>

```json
{
  "aggregations": [
    {
      "count": {},
      "field": "string",
      "frequency": {},
      "histogram": {
        "lowerBounds": [
          0
        ]
      },
      "sum": {}
    }
  ],
  "filter": "string"
}
```

A request to aggregate one or more values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregations|[[Aggregation](#schemaaggregation)]|false|none|Array of aggregations to perform. Up to 25 aggregations can be defined.|
|filter|string|false|none|The aggregation will be performed on assets that match the provided filter.|

<h2 id="tocS_AggregateAssetsValuesResponse">AggregateAssetsValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateassetsvaluesresponse"></a>
<a id="schema_AggregateAssetsValuesResponse"></a>
<a id="tocSaggregateassetsvaluesresponse"></a>
<a id="tocsaggregateassetsvaluesresponse"></a>

```json
{
  "results": [
    {
      "count": {
        "value": "string"
      },
      "field": "string",
      "frequency": {
        "values": {
          "property1": "string",
          "property2": "string"
        }
      },
      "histogram": {
        "buckets": [
          {
            "count": "string",
            "lowerBound": 0,
            "upperBound": 0
          }
        ]
      },
      "sum": {
        "value": 0
      }
    }
  ]
}
```

A response to a request to aggregated assets values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[AggregationResult](#schemaaggregationresult)]|false|none|The aggregation results.|

<h2 id="tocS_Aggregation">Aggregation</h2>
<!-- backwards compatibility -->
<a id="schemaaggregation"></a>
<a id="schema_Aggregation"></a>
<a id="tocSaggregation"></a>
<a id="tocsaggregation"></a>

```json
{
  "count": {},
  "field": "string",
  "frequency": {},
  "histogram": {
    "lowerBounds": [
      0
    ]
  },
  "sum": {}
}
```

Message describing an aggregation. The message includes the aggregation type, parameters, and the field on which to perform the aggregation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[AggregationCount](#schemaaggregationcount)|false|none|Count the number of matching objects.|
|field|string|false|none|The name of the field on which to aggregate.|
|frequency|[AggregationFrequency](#schemaaggregationfrequency)|false|none|Creates a frequency distribution of all field values.|
|histogram|[AggregationHistogram](#schemaaggregationhistogram)|false|none|Creates a bucketed histogram of field values.|
|sum|[AggregationSum](#schemaaggregationsum)|false|none|Sum over a numeric field.|

<h2 id="tocS_AggregationCount">AggregationCount</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationcount"></a>
<a id="schema_AggregationCount"></a>
<a id="tocSaggregationcount"></a>
<a id="tocsaggregationcount"></a>

```json
{}
```

Object count.

<h2 id="tocS_AggregationFrequency">AggregationFrequency</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationfrequency"></a>
<a id="schema_AggregationFrequency"></a>
<a id="tocSaggregationfrequency"></a>
<a id="tocsaggregationfrequency"></a>

```json
{}
```

Frequency distribution of all field values.

<h2 id="tocS_AggregationHistogram">AggregationHistogram</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationhistogram"></a>
<a id="schema_AggregationHistogram"></a>
<a id="tocSaggregationhistogram"></a>
<a id="tocsaggregationhistogram"></a>

```json
{
  "lowerBounds": [
    0
  ]
}
```

Histogram of bucketed assets counts by field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerBounds|[number(double)]|false|none|Lower bounds of buckets. The response will contain `n+1` buckets for `n` bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds.|

<h2 id="tocS_AggregationResult">AggregationResult</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationresult"></a>
<a id="schema_AggregationResult"></a>
<a id="tocSaggregationresult"></a>
<a id="tocsaggregationresult"></a>

```json
{
  "count": {
    "value": "string"
  },
  "field": "string",
  "frequency": {
    "values": {
      "property1": "string",
      "property2": "string"
    }
  },
  "histogram": {
    "buckets": [
      {
        "count": "string",
        "lowerBound": 0,
        "upperBound": 0
      }
    ]
  },
  "sum": {
    "value": 0
  }
}
```

Message describing a result of an aggregation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[AggregationResultCount](#schemaaggregationresultcount)|false|none|The result of a count aggregation.|
|field|string|false|none|none|
|frequency|[AggregationResultFrequency](#schemaaggregationresultfrequency)|false|none|The result of a frequency distribution aggregation.|
|histogram|[AggregationResultHistogram](#schemaaggregationresulthistogram)|false|none|The result of a bucketed histogram aggregation.|
|sum|[AggregationResultSum](#schemaaggregationresultsum)|false|none|The result of a sum aggregation.|

<h2 id="tocS_AggregationResultCount">AggregationResultCount</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationresultcount"></a>
<a id="schema_AggregationResultCount"></a>
<a id="tocSaggregationresultcount"></a>
<a id="tocsaggregationresultcount"></a>

```json
{
  "value": "string"
}
```

The result of a count aggregation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string(int64)|false|none|none|

<h2 id="tocS_AggregationResultFrequency">AggregationResultFrequency</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationresultfrequency"></a>
<a id="schema_AggregationResultFrequency"></a>
<a id="tocSaggregationresultfrequency"></a>
<a id="tocsaggregationresultfrequency"></a>

```json
{
  "values": {
    "property1": "string",
    "property2": "string"
  }
}
```

The result of a frequency distribution aggregation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|object|false|none|none|

<h2 id="tocS_AggregationResultHistogram">AggregationResultHistogram</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationresulthistogram"></a>
<a id="schema_AggregationResultHistogram"></a>
<a id="tocSaggregationresulthistogram"></a>
<a id="tocsaggregationresulthistogram"></a>

```json
{
  "buckets": [
    {
      "count": "string",
      "lowerBound": 0,
      "upperBound": 0
    }
  ]
}
```

The result of a bucketed histogram aggregation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|[[AggregationResultHistogramBucket](#schemaaggregationresulthistogrambucket)]|false|none|Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity.|

<h2 id="tocS_AggregationResultHistogramBucket">AggregationResultHistogramBucket</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationresulthistogrambucket"></a>
<a id="schema_AggregationResultHistogramBucket"></a>
<a id="tocSaggregationresulthistogrambucket"></a>
<a id="tocsaggregationresulthistogrambucket"></a>

```json
{
  "count": "string",
  "lowerBound": 0,
  "upperBound": 0
}
```

A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|Count of items in the bucket.|
|lowerBound|number(double)|false|none|Lower bound - inclusive.|
|upperBound|number(double)|false|none|Upper bound - exclusive.|

<h2 id="tocS_AggregationResultSum">AggregationResultSum</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationresultsum"></a>
<a id="schema_AggregationResultSum"></a>
<a id="tocSaggregationresultsum"></a>
<a id="tocsaggregationresultsum"></a>

```json
{
  "value": 0
}
```

The result of a sum aggregation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|false|none|none|

<h2 id="tocS_AggregationSum">AggregationSum</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationsum"></a>
<a id="schema_AggregationSum"></a>
<a id="tocSaggregationsum"></a>
<a id="tocsaggregationsum"></a>

```json
{}
```

Sum of field values.

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "assignedGroups": [
    "string"
  ],
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "insightList": {
    "insights": [
      {
        "migrationInsight": {
          "computeEngineTarget": {
            "shape": {
              "logicalCoreCount": 0,
              "machineType": "string",
              "memoryMb": 0,
              "physicalCoreCount": 0,
              "series": "string"
            }
          },
          "fit": {
            "fitLevel": "FIT_LEVEL_UNSPECIFIED"
          },
          "gkeTarget": {},
          "vmwareEngineTarget": {}
        }
      }
    ],
    "updateTime": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "performanceData": {
    "dailyResourceUsageAggregations": [
      {
        "cpu": {
          "utilizationPercentage": {
            "average": 0,
            "median": 0,
            "ninteyFifthPercentile": 0,
            "peak": 0
          }
        },
        "date": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "disk": {
          "iops": {
            "average": 0,
            "median": 0,
            "ninteyFifthPercentile": 0,
            "peak": 0
          }
        },
        "memory": {
          "utilizationPercentage": {
            "average": 0,
            "median": 0,
            "ninteyFifthPercentile": 0,
            "peak": 0
          }
        },
        "network": {
          "egressBps": {
            "average": 0,
            "median": 0,
            "ninteyFifthPercentile": 0,
            "peak": 0
          },
          "ingressBps": {
            "average": 0,
            "median": 0,
            "ninteyFifthPercentile": 0,
            "peak": 0
          }
        }
      }
    ]
  },
  "sources": [
    "string"
  ],
  "updateTime": "string",
  "virtualMachineDetails": {
    "coreCount": 0,
    "createTime": "string",
    "guestOs": {
      "config": {
        "fstab": {
          "entries": [
            {
              "file": "string",
              "freq": 0,
              "mntops": "string",
              "passno": 0,
              "spec": "string",
              "vfstype": "string"
            }
          ]
        },
        "hosts": {
          "entries": [
            {
              "hostNames": [
                "string"
              ],
              "ip": "string"
            }
          ]
        },
        "issue": "string",
        "nfsExports": {
          "entries": [
            {
              "exportDirectory": "string",
              "hosts": [
                "string"
              ]
            }
          ]
        },
        "selinux": {
          "enabled": true,
          "mode": "string"
        }
      },
      "runtime": {
        "domain": "string",
        "installedApps": {
          "entries": [
            {
              "name": "string",
              "path": "string",
              "time": "string",
              "vendor": "string",
              "version": "string"
            }
          ]
        },
        "lastUptime": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "machineName": "string",
        "networkInfo": {
          "connections": {
            "entries": [
              {
                "localIpAddress": "string",
                "localPort": 0,
                "pid": "string",
                "processName": "string",
                "protocol": "string",
                "remoteIpAddress": "string",
                "remotePort": 0,
                "state": "string"
              }
            ]
          },
          "netstat": "string",
          "netstatTime": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          }
        },
        "openFileList": {
          "entries": [
            {
              "command": "string",
              "filePath": "string",
              "fileType": "string",
              "user": "string"
            }
          ]
        },
        "processes": {
          "processes": [
            {
              "attributes": {
                "property1": "string",
                "property2": "string"
              },
              "cmdline": "string",
              "exePath": "string",
              "pid": "string",
              "user": "string"
            }
          ]
        },
        "services": {
          "services": [
            {
              "cmdline": "string",
              "exePath": "string",
              "name": "string",
              "pid": "string",
              "startMode": "string",
              "state": "string",
              "status": "string"
            }
          ]
        }
      }
    },
    "memoryMb": 0,
    "osFamily": "OS_FAMILY_UNKNOWN",
    "osName": "string",
    "osVersion": "string",
    "platform": {
      "awsEc2Details": {
        "location": "string",
        "machineTypeLabel": "string"
      },
      "azureVmDetails": {
        "location": "string",
        "machineTypeLabel": "string",
        "provisioningState": "string"
      },
      "genericDetails": {
        "location": "string"
      },
      "physicalDetails": {
        "location": "string"
      },
      "vmwareDetails": {
        "esxVersion": "string",
        "osid": "string",
        "vcenterVersion": "string"
      }
    },
    "powerState": "string",
    "vcenterFolder": "string",
    "vcenterUrl": "string",
    "vcenterVmId": "string",
    "vmArchitecture": {
      "bios": {
        "biosManufacturer": "string",
        "biosName": "string",
        "biosReleaseDate": "string",
        "biosVersion": "string",
        "smbiosUuid": "string"
      },
      "cpuArchitecture": "string",
      "cpuManufacturer": "string",
      "cpuName": "string",
      "cpuSocketCount": 0,
      "cpuThreadCount": 0,
      "firmware": "string",
      "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
      "vendor": "string"
    },
    "vmDisks": {
      "disks": {
        "entries": [
          {
            "diskLabel": "string",
            "diskLabelType": "string",
            "hwAddress": "string",
            "interfaceType": "string",
            "partitions": {
              "entries": [
                {}
              ]
            },
            "status": "string",
            "totalCapacityBytes": "string",
            "totalFreeBytes": "string",
            "vmwareConfig": {
              "backingType": "BACKING_TYPE_UNSPECIFIED",
              "rdmCompatibilityMode": "string",
              "shared": true,
              "vmdkDiskMode": "string"
            }
          }
        ]
      },
      "hddTotalCapacityBytes": "string",
      "hddTotalFreeBytes": "string",
      "lsblkJson": "string"
    },
    "vmName": "string",
    "vmNetwork": {
      "defaultGw": "string",
      "networkAdapters": {
        "networkAdapters": [
          {
            "adapterType": "string",
            "addresses": {
              "addresses": [
                {
                  "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                  "bcast": "string",
                  "fqdn": "string",
                  "ipAddress": "string",
                  "subnetMask": "string"
                }
              ]
            },
            "macAddress": "string"
          }
        ]
      },
      "primaryIpAddress": "string",
      "primaryMacAddress": "string",
      "publicIpAddress": "string"
    },
    "vmUuid": "string"
  }
}
```

An asset represents a resource in your environment. Asset types include virtual machines and databases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignedGroups|[string]|false|read-only|Output only. The list of groups that the asset is assigned to.|
|attributes|object|false|none|Generic asset attributes.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the asset was created.|
|insightList|[InsightList](#schemainsightlist)|false|none|Output only. The list of insights associated with the asset.|
|labels|object|false|none|Labels as key value pairs.|
|name|string|false|read-only|Output only. The full name of the asset.|
|performanceData|[AssetPerformanceData](#schemaassetperformancedata)|false|none|Output only. Performance data for the asset.|
|sources|[string]|false|read-only|Output only. The list of sources contributing to the asset.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the asset was last updated.|
|virtualMachineDetails|[VirtualMachineDetails](#schemavirtualmachinedetails)|false|none|Output only. Asset information specific for virtual machines.|

<h2 id="tocS_AssetFrame">AssetFrame</h2>
<!-- backwards compatibility -->
<a id="schemaassetframe"></a>
<a id="schema_AssetFrame"></a>
<a id="tocSassetframe"></a>
<a id="tocsassetframe"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "performanceSamples": [
    {
      "cpu": {
        "utilizedPercentage": 0
      },
      "disk": {
        "averageIops": 0
      },
      "memory": {
        "utilizedPercentage": 0
      },
      "network": {
        "averageEgressBps": 0,
        "averageIngressBps": 0
      },
      "sampleTime": "string"
    }
  ],
  "reportTime": "string",
  "traceToken": "string",
  "virtualMachineDetails": {
    "coreCount": 0,
    "createTime": "string",
    "guestOs": {
      "config": {
        "fstab": {
          "entries": [
            {
              "file": "string",
              "freq": 0,
              "mntops": "string",
              "passno": 0,
              "spec": "string",
              "vfstype": "string"
            }
          ]
        },
        "hosts": {
          "entries": [
            {
              "hostNames": [
                "string"
              ],
              "ip": "string"
            }
          ]
        },
        "issue": "string",
        "nfsExports": {
          "entries": [
            {
              "exportDirectory": "string",
              "hosts": [
                "string"
              ]
            }
          ]
        },
        "selinux": {
          "enabled": true,
          "mode": "string"
        }
      },
      "runtime": {
        "domain": "string",
        "installedApps": {
          "entries": [
            {
              "name": "string",
              "path": "string",
              "time": "string",
              "vendor": "string",
              "version": "string"
            }
          ]
        },
        "lastUptime": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "machineName": "string",
        "networkInfo": {
          "connections": {
            "entries": [
              {
                "localIpAddress": "string",
                "localPort": 0,
                "pid": "string",
                "processName": "string",
                "protocol": "string",
                "remoteIpAddress": "string",
                "remotePort": 0,
                "state": "string"
              }
            ]
          },
          "netstat": "string",
          "netstatTime": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          }
        },
        "openFileList": {
          "entries": [
            {
              "command": "string",
              "filePath": "string",
              "fileType": "string",
              "user": "string"
            }
          ]
        },
        "processes": {
          "processes": [
            {
              "attributes": {
                "property1": "string",
                "property2": "string"
              },
              "cmdline": "string",
              "exePath": "string",
              "pid": "string",
              "user": "string"
            }
          ]
        },
        "services": {
          "services": [
            {
              "cmdline": "string",
              "exePath": "string",
              "name": "string",
              "pid": "string",
              "startMode": "string",
              "state": "string",
              "status": "string"
            }
          ]
        }
      }
    },
    "memoryMb": 0,
    "osFamily": "OS_FAMILY_UNKNOWN",
    "osName": "string",
    "osVersion": "string",
    "platform": {
      "awsEc2Details": {
        "location": "string",
        "machineTypeLabel": "string"
      },
      "azureVmDetails": {
        "location": "string",
        "machineTypeLabel": "string",
        "provisioningState": "string"
      },
      "genericDetails": {
        "location": "string"
      },
      "physicalDetails": {
        "location": "string"
      },
      "vmwareDetails": {
        "esxVersion": "string",
        "osid": "string",
        "vcenterVersion": "string"
      }
    },
    "powerState": "string",
    "vcenterFolder": "string",
    "vcenterUrl": "string",
    "vcenterVmId": "string",
    "vmArchitecture": {
      "bios": {
        "biosManufacturer": "string",
        "biosName": "string",
        "biosReleaseDate": "string",
        "biosVersion": "string",
        "smbiosUuid": "string"
      },
      "cpuArchitecture": "string",
      "cpuManufacturer": "string",
      "cpuName": "string",
      "cpuSocketCount": 0,
      "cpuThreadCount": 0,
      "firmware": "string",
      "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
      "vendor": "string"
    },
    "vmDisks": {
      "disks": {
        "entries": [
          {
            "diskLabel": "string",
            "diskLabelType": "string",
            "hwAddress": "string",
            "interfaceType": "string",
            "partitions": {
              "entries": [
                {}
              ]
            },
            "status": "string",
            "totalCapacityBytes": "string",
            "totalFreeBytes": "string",
            "vmwareConfig": {
              "backingType": "BACKING_TYPE_UNSPECIFIED",
              "rdmCompatibilityMode": "string",
              "shared": true,
              "vmdkDiskMode": "string"
            }
          }
        ]
      },
      "hddTotalCapacityBytes": "string",
      "hddTotalFreeBytes": "string",
      "lsblkJson": "string"
    },
    "vmName": "string",
    "vmNetwork": {
      "defaultGw": "string",
      "networkAdapters": {
        "networkAdapters": [
          {
            "adapterType": "string",
            "addresses": {
              "addresses": [
                {
                  "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                  "bcast": "string",
                  "fqdn": "string",
                  "ipAddress": "string",
                  "subnetMask": "string"
                }
              ]
            },
            "macAddress": "string"
          }
        ]
      },
      "primaryIpAddress": "string",
      "primaryMacAddress": "string",
      "publicIpAddress": "string"
    },
    "vmUuid": "string"
  }
}
```

Contains data reported from an inventory source on an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Generic asset attributes.|
|labels|object|false|none|Labels as key value pairs.|
|performanceSamples|[[PerformanceSample](#schemaperformancesample)]|false|none|Asset performance data samples.|
|reportTime|string(google-datetime)|false|none|The time the data was reported.|
|traceToken|string|false|none|Optional. Trace token is optionally provided to assist with debugging and traceability.|
|virtualMachineDetails|[VirtualMachineDetails](#schemavirtualmachinedetails)|false|none|Asset information specific for virtual machines.|

<h2 id="tocS_AssetList">AssetList</h2>
<!-- backwards compatibility -->
<a id="schemaassetlist"></a>
<a id="schema_AssetList"></a>
<a id="tocSassetlist"></a>
<a id="tocsassetlist"></a>

```json
{
  "assetIds": [
    "string"
  ]
}
```

Lists the asset IDs of all assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetIds|[string]|false|none|Required. A list of asset IDs|

<h2 id="tocS_AssetPerformanceData">AssetPerformanceData</h2>
<!-- backwards compatibility -->
<a id="schemaassetperformancedata"></a>
<a id="schema_AssetPerformanceData"></a>
<a id="tocSassetperformancedata"></a>
<a id="tocsassetperformancedata"></a>

```json
{
  "dailyResourceUsageAggregations": [
    {
      "cpu": {
        "utilizationPercentage": {
          "average": 0,
          "median": 0,
          "ninteyFifthPercentile": 0,
          "peak": 0
        }
      },
      "date": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "disk": {
        "iops": {
          "average": 0,
          "median": 0,
          "ninteyFifthPercentile": 0,
          "peak": 0
        }
      },
      "memory": {
        "utilizationPercentage": {
          "average": 0,
          "median": 0,
          "ninteyFifthPercentile": 0,
          "peak": 0
        }
      },
      "network": {
        "egressBps": {
          "average": 0,
          "median": 0,
          "ninteyFifthPercentile": 0,
          "peak": 0
        },
        "ingressBps": {
          "average": 0,
          "median": 0,
          "ninteyFifthPercentile": 0,
          "peak": 0
        }
      }
    }
  ]
}
```

Performance data for an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyResourceUsageAggregations|[[DailyResourceUsageAggregation](#schemadailyresourceusageaggregation)]|false|none|Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days.|

<h2 id="tocS_AwsEc2PlatformDetails">AwsEc2PlatformDetails</h2>
<!-- backwards compatibility -->
<a id="schemaawsec2platformdetails"></a>
<a id="schema_AwsEc2PlatformDetails"></a>
<a id="tocSawsec2platformdetails"></a>
<a id="tocsawsec2platformdetails"></a>

```json
{
  "location": "string",
  "machineTypeLabel": "string"
}
```

AWS EC2 specific details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|The location of the machine in the AWS format.|
|machineTypeLabel|string|false|none|AWS platform's machine type label.|

<h2 id="tocS_AzureVmPlatformDetails">AzureVmPlatformDetails</h2>
<!-- backwards compatibility -->
<a id="schemaazurevmplatformdetails"></a>
<a id="schema_AzureVmPlatformDetails"></a>
<a id="tocSazurevmplatformdetails"></a>
<a id="tocsazurevmplatformdetails"></a>

```json
{
  "location": "string",
  "machineTypeLabel": "string",
  "provisioningState": "string"
}
```

Azure VM specific details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|The location of the machine in the Azure format.|
|machineTypeLabel|string|false|none|Azure platform's machine type label.|
|provisioningState|string|false|none|Azure platform's provisioning state.|

<h2 id="tocS_BatchDeleteAssetsRequest">BatchDeleteAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteassetsrequest"></a>
<a id="schema_BatchDeleteAssetsRequest"></a>
<a id="tocSbatchdeleteassetsrequest"></a>
<a id="tocsbatchdeleteassetsrequest"></a>

```json
{
  "allowMissing": true,
  "names": [
    "string"
  ]
}
```

A request to delete a list of asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMissing|boolean|false|none|Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`.|
|names|[string]|false|none|Required. The IDs of the assets to delete. A maximum of 10 assets can be deleted in a batch. format: projects/{project}/locations/{location}/asset/{name}.|

<h2 id="tocS_BatchUpdateAssetsRequest">BatchUpdateAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateassetsrequest"></a>
<a id="schema_BatchUpdateAssetsRequest"></a>
<a id="tocSbatchupdateassetsrequest"></a>
<a id="tocsbatchupdateassetsrequest"></a>

```json
{
  "requests": [
    {
      "asset": {
        "assignedGroups": [
          "string"
        ],
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "createTime": "string",
        "insightList": {
          "insights": [
            {
              "migrationInsight": {
                "computeEngineTarget": {
                  "shape": {
                    "logicalCoreCount": 0,
                    "machineType": "string",
                    "memoryMb": 0,
                    "physicalCoreCount": 0,
                    "series": "string"
                  }
                },
                "fit": {
                  "fitLevel": "FIT_LEVEL_UNSPECIFIED"
                },
                "gkeTarget": {},
                "vmwareEngineTarget": {}
              }
            }
          ],
          "updateTime": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "performanceData": {
          "dailyResourceUsageAggregations": [
            {
              "cpu": {
                "utilizationPercentage": {
                  "average": 0,
                  "median": 0,
                  "ninteyFifthPercentile": 0,
                  "peak": 0
                }
              },
              "date": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "disk": {
                "iops": {
                  "average": 0,
                  "median": 0,
                  "ninteyFifthPercentile": 0,
                  "peak": 0
                }
              },
              "memory": {
                "utilizationPercentage": {
                  "average": 0,
                  "median": 0,
                  "ninteyFifthPercentile": 0,
                  "peak": 0
                }
              },
              "network": {
                "egressBps": {
                  "average": 0,
                  "median": 0,
                  "ninteyFifthPercentile": 0,
                  "peak": 0
                },
                "ingressBps": {
                  "average": 0,
                  "median": 0,
                  "ninteyFifthPercentile": 0,
                  "peak": 0
                }
              }
            }
          ]
        },
        "sources": [
          "string"
        ],
        "updateTime": "string",
        "virtualMachineDetails": {
          "coreCount": 0,
          "createTime": "string",
          "guestOs": {
            "config": {
              "fstab": {
                "entries": [
                  {
                    "file": "string",
                    "freq": 0,
                    "mntops": "string",
                    "passno": 0,
                    "spec": "string",
                    "vfstype": "string"
                  }
                ]
              },
              "hosts": {
                "entries": [
                  {
                    "hostNames": [
                      "string"
                    ],
                    "ip": "string"
                  }
                ]
              },
              "issue": "string",
              "nfsExports": {
                "entries": [
                  {
                    "exportDirectory": "string",
                    "hosts": [
                      "string"
                    ]
                  }
                ]
              },
              "selinux": {
                "enabled": true,
                "mode": "string"
              }
            },
            "runtime": {
              "domain": "string",
              "installedApps": {
                "entries": [
                  {
                    "name": "string",
                    "path": "string",
                    "time": "string",
                    "vendor": "string",
                    "version": "string"
                  }
                ]
              },
              "lastUptime": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "machineName": "string",
              "networkInfo": {
                "connections": {
                  "entries": [
                    {
                      "localIpAddress": "string",
                      "localPort": 0,
                      "pid": "string",
                      "processName": "string",
                      "protocol": "string",
                      "remoteIpAddress": "string",
                      "remotePort": 0,
                      "state": "string"
                    }
                  ]
                },
                "netstat": "string",
                "netstatTime": {
                  "day": 0,
                  "hours": 0,
                  "minutes": 0,
                  "month": 0,
                  "nanos": 0,
                  "seconds": 0,
                  "timeZone": {
                    "id": "string",
                    "version": "string"
                  },
                  "utcOffset": "string",
                  "year": 0
                }
              },
              "openFileList": {
                "entries": [
                  {
                    "command": "string",
                    "filePath": "string",
                    "fileType": "string",
                    "user": "string"
                  }
                ]
              },
              "processes": {
                "processes": [
                  {
                    "attributes": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "cmdline": "string",
                    "exePath": "string",
                    "pid": "string",
                    "user": "string"
                  }
                ]
              },
              "services": {
                "services": [
                  {
                    "cmdline": "string",
                    "exePath": "string",
                    "name": "string",
                    "pid": "string",
                    "startMode": "string",
                    "state": "string",
                    "status": "string"
                  }
                ]
              }
            }
          },
          "memoryMb": 0,
          "osFamily": "OS_FAMILY_UNKNOWN",
          "osName": "string",
          "osVersion": "string",
          "platform": {
            "awsEc2Details": {
              "location": "string",
              "machineTypeLabel": "string"
            },
            "azureVmDetails": {
              "location": "string",
              "machineTypeLabel": "string",
              "provisioningState": "string"
            },
            "genericDetails": {
              "location": "string"
            },
            "physicalDetails": {
              "location": "string"
            },
            "vmwareDetails": {
              "esxVersion": "string",
              "osid": "string",
              "vcenterVersion": "string"
            }
          },
          "powerState": "string",
          "vcenterFolder": "string",
          "vcenterUrl": "string",
          "vcenterVmId": "string",
          "vmArchitecture": {
            "bios": {
              "biosManufacturer": "string",
              "biosName": "string",
              "biosReleaseDate": "string",
              "biosVersion": "string",
              "smbiosUuid": "string"
            },
            "cpuArchitecture": "string",
            "cpuManufacturer": "string",
            "cpuName": "string",
            "cpuSocketCount": 0,
            "cpuThreadCount": 0,
            "firmware": "string",
            "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
            "vendor": "string"
          },
          "vmDisks": {
            "disks": {
              "entries": [
                {
                  "diskLabel": "string",
                  "diskLabelType": "string",
                  "hwAddress": "string",
                  "interfaceType": "string",
                  "partitions": {
                    "entries": [
                      {}
                    ]
                  },
                  "status": "string",
                  "totalCapacityBytes": "string",
                  "totalFreeBytes": "string",
                  "vmwareConfig": {
                    "backingType": "BACKING_TYPE_UNSPECIFIED",
                    "rdmCompatibilityMode": "string",
                    "shared": true,
                    "vmdkDiskMode": "string"
                  }
                }
              ]
            },
            "hddTotalCapacityBytes": "string",
            "hddTotalFreeBytes": "string",
            "lsblkJson": "string"
          },
          "vmName": "string",
          "vmNetwork": {
            "defaultGw": "string",
            "networkAdapters": {
              "networkAdapters": [
                {
                  "adapterType": "string",
                  "addresses": {
                    "addresses": [
                      {
                        "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                        "bcast": "string",
                        "fqdn": "string",
                        "ipAddress": "string",
                        "subnetMask": "string"
                      }
                    ]
                  },
                  "macAddress": "string"
                }
              ]
            },
            "primaryIpAddress": "string",
            "primaryMacAddress": "string",
            "publicIpAddress": "string"
          },
          "vmUuid": "string"
        }
      },
      "requestId": "string",
      "updateMask": "string"
    }
  ]
}
```

A request to update a list of assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[UpdateAssetRequest](#schemaupdateassetrequest)]|false|none|Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch.|

<h2 id="tocS_BatchUpdateAssetsResponse">BatchUpdateAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateassetsresponse"></a>
<a id="schema_BatchUpdateAssetsResponse"></a>
<a id="tocSbatchupdateassetsresponse"></a>
<a id="tocsbatchupdateassetsresponse"></a>

```json
{
  "assets": [
    {
      "assignedGroups": [
        "string"
      ],
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "insightList": {
        "insights": [
          {
            "migrationInsight": {
              "computeEngineTarget": {
                "shape": {
                  "logicalCoreCount": 0,
                  "machineType": "string",
                  "memoryMb": 0,
                  "physicalCoreCount": 0,
                  "series": "string"
                }
              },
              "fit": {
                "fitLevel": "FIT_LEVEL_UNSPECIFIED"
              },
              "gkeTarget": {},
              "vmwareEngineTarget": {}
            }
          }
        ],
        "updateTime": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "performanceData": {
        "dailyResourceUsageAggregations": [
          {
            "cpu": {
              "utilizationPercentage": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "date": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "disk": {
              "iops": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "memory": {
              "utilizationPercentage": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "network": {
              "egressBps": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              },
              "ingressBps": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            }
          }
        ]
      },
      "sources": [
        "string"
      ],
      "updateTime": "string",
      "virtualMachineDetails": {
        "coreCount": 0,
        "createTime": "string",
        "guestOs": {
          "config": {
            "fstab": {
              "entries": [
                {
                  "file": "string",
                  "freq": 0,
                  "mntops": "string",
                  "passno": 0,
                  "spec": "string",
                  "vfstype": "string"
                }
              ]
            },
            "hosts": {
              "entries": [
                {
                  "hostNames": [
                    "string"
                  ],
                  "ip": "string"
                }
              ]
            },
            "issue": "string",
            "nfsExports": {
              "entries": [
                {
                  "exportDirectory": "string",
                  "hosts": [
                    "string"
                  ]
                }
              ]
            },
            "selinux": {
              "enabled": true,
              "mode": "string"
            }
          },
          "runtime": {
            "domain": "string",
            "installedApps": {
              "entries": [
                {
                  "name": "string",
                  "path": "string",
                  "time": "string",
                  "vendor": "string",
                  "version": "string"
                }
              ]
            },
            "lastUptime": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "machineName": "string",
            "networkInfo": {
              "connections": {
                "entries": [
                  {
                    "localIpAddress": "string",
                    "localPort": 0,
                    "pid": "string",
                    "processName": "string",
                    "protocol": "string",
                    "remoteIpAddress": "string",
                    "remotePort": 0,
                    "state": "string"
                  }
                ]
              },
              "netstat": "string",
              "netstatTime": {
                "day": 0,
                "hours": 0,
                "minutes": 0,
                "month": 0,
                "nanos": 0,
                "seconds": 0,
                "timeZone": {
                  "id": "string",
                  "version": "string"
                },
                "utcOffset": "string",
                "year": 0
              }
            },
            "openFileList": {
              "entries": [
                {
                  "command": "string",
                  "filePath": "string",
                  "fileType": "string",
                  "user": "string"
                }
              ]
            },
            "processes": {
              "processes": [
                {
                  "attributes": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "cmdline": "string",
                  "exePath": "string",
                  "pid": "string",
                  "user": "string"
                }
              ]
            },
            "services": {
              "services": [
                {
                  "cmdline": "string",
                  "exePath": "string",
                  "name": "string",
                  "pid": "string",
                  "startMode": "string",
                  "state": "string",
                  "status": "string"
                }
              ]
            }
          }
        },
        "memoryMb": 0,
        "osFamily": "OS_FAMILY_UNKNOWN",
        "osName": "string",
        "osVersion": "string",
        "platform": {
          "awsEc2Details": {
            "location": "string",
            "machineTypeLabel": "string"
          },
          "azureVmDetails": {
            "location": "string",
            "machineTypeLabel": "string",
            "provisioningState": "string"
          },
          "genericDetails": {
            "location": "string"
          },
          "physicalDetails": {
            "location": "string"
          },
          "vmwareDetails": {
            "esxVersion": "string",
            "osid": "string",
            "vcenterVersion": "string"
          }
        },
        "powerState": "string",
        "vcenterFolder": "string",
        "vcenterUrl": "string",
        "vcenterVmId": "string",
        "vmArchitecture": {
          "bios": {
            "biosManufacturer": "string",
            "biosName": "string",
            "biosReleaseDate": "string",
            "biosVersion": "string",
            "smbiosUuid": "string"
          },
          "cpuArchitecture": "string",
          "cpuManufacturer": "string",
          "cpuName": "string",
          "cpuSocketCount": 0,
          "cpuThreadCount": 0,
          "firmware": "string",
          "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
          "vendor": "string"
        },
        "vmDisks": {
          "disks": {
            "entries": [
              {
                "diskLabel": "string",
                "diskLabelType": "string",
                "hwAddress": "string",
                "interfaceType": "string",
                "partitions": {
                  "entries": [
                    {}
                  ]
                },
                "status": "string",
                "totalCapacityBytes": "string",
                "totalFreeBytes": "string",
                "vmwareConfig": {
                  "backingType": "BACKING_TYPE_UNSPECIFIED",
                  "rdmCompatibilityMode": "string",
                  "shared": true,
                  "vmdkDiskMode": "string"
                }
              }
            ]
          },
          "hddTotalCapacityBytes": "string",
          "hddTotalFreeBytes": "string",
          "lsblkJson": "string"
        },
        "vmName": "string",
        "vmNetwork": {
          "defaultGw": "string",
          "networkAdapters": {
            "networkAdapters": [
              {
                "adapterType": "string",
                "addresses": {
                  "addresses": [
                    {
                      "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                      "bcast": "string",
                      "fqdn": "string",
                      "ipAddress": "string",
                      "subnetMask": "string"
                    }
                  ]
                },
                "macAddress": "string"
              }
            ]
          },
          "primaryIpAddress": "string",
          "primaryMacAddress": "string",
          "publicIpAddress": "string"
        },
        "vmUuid": "string"
      }
    }
  ]
}
```

Response for updating a list of assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[Asset](#schemaasset)]|false|none|Update asset content. The content only includes values after field mask being applied.|

<h2 id="tocS_BiosDetails">BiosDetails</h2>
<!-- backwards compatibility -->
<a id="schemabiosdetails"></a>
<a id="schema_BiosDetails"></a>
<a id="tocSbiosdetails"></a>
<a id="tocsbiosdetails"></a>

```json
{
  "biosManufacturer": "string",
  "biosName": "string",
  "biosReleaseDate": "string",
  "biosVersion": "string",
  "smbiosUuid": "string"
}
```

Details about the BIOS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|biosManufacturer|string|false|none|BIOS manufacturer.|
|biosName|string|false|none|BIOS name.|
|biosReleaseDate|string|false|none|BIOS release date.|
|biosVersion|string|false|none|BIOS version.|
|smbiosUuid|string|false|none|SMBIOS UUID.|

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_ComputeEngineMigrationTarget">ComputeEngineMigrationTarget</h2>
<!-- backwards compatibility -->
<a id="schemacomputeenginemigrationtarget"></a>
<a id="schema_ComputeEngineMigrationTarget"></a>
<a id="tocScomputeenginemigrationtarget"></a>
<a id="tocscomputeenginemigrationtarget"></a>

```json
{
  "shape": {
    "logicalCoreCount": 0,
    "machineType": "string",
    "memoryMb": 0,
    "physicalCoreCount": 0,
    "series": "string"
  }
}
```

Compute engine migration target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shape|[ComputeEngineShapeDescriptor](#schemacomputeengineshapedescriptor)|false|none|Description of the suggested shape for the migration target.|

<h2 id="tocS_ComputeEnginePreferences">ComputeEnginePreferences</h2>
<!-- backwards compatibility -->
<a id="schemacomputeenginepreferences"></a>
<a id="schema_ComputeEnginePreferences"></a>
<a id="tocScomputeenginepreferences"></a>
<a id="tocscomputeenginepreferences"></a>

```json
{
  "licenseType": "LICENSE_TYPE_UNSPECIFIED",
  "machinePreferences": {
    "allowedMachineSeries": [
      {
        "code": "string"
      }
    ]
  },
  "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
}
```

The user preferences relating to Compute Engine target platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenseType|string|false|none|License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.|
|machinePreferences|[MachinePreferences](#schemamachinepreferences)|false|none|Preferences concerning the machine types to consider on Compute Engine.|
|persistentDiskType|string|false|none|Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data.|

#### Enumerated Values

|Property|Value|
|---|---|
|licenseType|LICENSE_TYPE_UNSPECIFIED|
|licenseType|LICENSE_TYPE_DEFAULT|
|licenseType|LICENSE_TYPE_BRING_YOUR_OWN_LICENSE|
|persistentDiskType|PERSISTENT_DISK_TYPE_UNSPECIFIED|
|persistentDiskType|PERSISTENT_DISK_TYPE_STANDARD|
|persistentDiskType|PERSISTENT_DISK_TYPE_BALANCED|
|persistentDiskType|PERSISTENT_DISK_TYPE_SSD|

<h2 id="tocS_ComputeEngineShapeDescriptor">ComputeEngineShapeDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemacomputeengineshapedescriptor"></a>
<a id="schema_ComputeEngineShapeDescriptor"></a>
<a id="tocScomputeengineshapedescriptor"></a>
<a id="tocscomputeengineshapedescriptor"></a>

```json
{
  "logicalCoreCount": 0,
  "machineType": "string",
  "memoryMb": 0,
  "physicalCoreCount": 0,
  "series": "string"
}
```

Compute Engine target shape descriptor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logicalCoreCount|integer(int32)|false|none|Number of logical cores.|
|machineType|string|false|none|Compute Engine machine type.|
|memoryMb|integer(int32)|false|none|Memory in mebibytes.|
|physicalCoreCount|integer(int32)|false|none|Number of physical cores.|
|series|string|false|none|Compute Engine machine series.|

<h2 id="tocS_CpuUsageSample">CpuUsageSample</h2>
<!-- backwards compatibility -->
<a id="schemacpuusagesample"></a>
<a id="schema_CpuUsageSample"></a>
<a id="tocScpuusagesample"></a>
<a id="tocscpuusagesample"></a>

```json
{
  "utilizedPercentage": 0
}
```

CPU usage sample.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|utilizedPercentage|number(float)|false|none|Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage.|

<h2 id="tocS_DailyResourceUsageAggregation">DailyResourceUsageAggregation</h2>
<!-- backwards compatibility -->
<a id="schemadailyresourceusageaggregation"></a>
<a id="schema_DailyResourceUsageAggregation"></a>
<a id="tocSdailyresourceusageaggregation"></a>
<a id="tocsdailyresourceusageaggregation"></a>

```json
{
  "cpu": {
    "utilizationPercentage": {
      "average": 0,
      "median": 0,
      "ninteyFifthPercentile": 0,
      "peak": 0
    }
  },
  "date": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "disk": {
    "iops": {
      "average": 0,
      "median": 0,
      "ninteyFifthPercentile": 0,
      "peak": 0
    }
  },
  "memory": {
    "utilizationPercentage": {
      "average": 0,
      "median": 0,
      "ninteyFifthPercentile": 0,
      "peak": 0
    }
  },
  "network": {
    "egressBps": {
      "average": 0,
      "median": 0,
      "ninteyFifthPercentile": 0,
      "peak": 0
    },
    "ingressBps": {
      "average": 0,
      "median": 0,
      "ninteyFifthPercentile": 0,
      "peak": 0
    }
  }
}
```

Usage data aggregation for a single day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|[DailyResourceUsageAggregationCPU](#schemadailyresourceusageaggregationcpu)|false|none|CPU usage.|
|date|[Date](#schemadate)|false|none|Aggregation date. Day boundaries are at midnight UTC.|
|disk|[DailyResourceUsageAggregationDisk](#schemadailyresourceusageaggregationdisk)|false|none|Disk usage.|
|memory|[DailyResourceUsageAggregationMemory](#schemadailyresourceusageaggregationmemory)|false|none|Memory usage.|
|network|[DailyResourceUsageAggregationNetwork](#schemadailyresourceusageaggregationnetwork)|false|none|Network usage.|

<h2 id="tocS_DailyResourceUsageAggregationCPU">DailyResourceUsageAggregationCPU</h2>
<!-- backwards compatibility -->
<a id="schemadailyresourceusageaggregationcpu"></a>
<a id="schema_DailyResourceUsageAggregationCPU"></a>
<a id="tocSdailyresourceusageaggregationcpu"></a>
<a id="tocsdailyresourceusageaggregationcpu"></a>

```json
{
  "utilizationPercentage": {
    "average": 0,
    "median": 0,
    "ninteyFifthPercentile": 0,
    "peak": 0
  }
}
```

Statistical aggregation of CPU usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|utilizationPercentage|[DailyResourceUsageAggregationStats](#schemadailyresourceusageaggregationstats)|false|none|CPU utilization percentage.|

<h2 id="tocS_DailyResourceUsageAggregationDisk">DailyResourceUsageAggregationDisk</h2>
<!-- backwards compatibility -->
<a id="schemadailyresourceusageaggregationdisk"></a>
<a id="schema_DailyResourceUsageAggregationDisk"></a>
<a id="tocSdailyresourceusageaggregationdisk"></a>
<a id="tocsdailyresourceusageaggregationdisk"></a>

```json
{
  "iops": {
    "average": 0,
    "median": 0,
    "ninteyFifthPercentile": 0,
    "peak": 0
  }
}
```

Statistical aggregation of disk usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iops|[DailyResourceUsageAggregationStats](#schemadailyresourceusageaggregationstats)|false|none|Disk I/O operations per second.|

<h2 id="tocS_DailyResourceUsageAggregationMemory">DailyResourceUsageAggregationMemory</h2>
<!-- backwards compatibility -->
<a id="schemadailyresourceusageaggregationmemory"></a>
<a id="schema_DailyResourceUsageAggregationMemory"></a>
<a id="tocSdailyresourceusageaggregationmemory"></a>
<a id="tocsdailyresourceusageaggregationmemory"></a>

```json
{
  "utilizationPercentage": {
    "average": 0,
    "median": 0,
    "ninteyFifthPercentile": 0,
    "peak": 0
  }
}
```

Statistical aggregation of memory usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|utilizationPercentage|[DailyResourceUsageAggregationStats](#schemadailyresourceusageaggregationstats)|false|none|Memory utilization percentage.|

<h2 id="tocS_DailyResourceUsageAggregationNetwork">DailyResourceUsageAggregationNetwork</h2>
<!-- backwards compatibility -->
<a id="schemadailyresourceusageaggregationnetwork"></a>
<a id="schema_DailyResourceUsageAggregationNetwork"></a>
<a id="tocSdailyresourceusageaggregationnetwork"></a>
<a id="tocsdailyresourceusageaggregationnetwork"></a>

```json
{
  "egressBps": {
    "average": 0,
    "median": 0,
    "ninteyFifthPercentile": 0,
    "peak": 0
  },
  "ingressBps": {
    "average": 0,
    "median": 0,
    "ninteyFifthPercentile": 0,
    "peak": 0
  }
}
```

Statistical aggregation of network usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|egressBps|[DailyResourceUsageAggregationStats](#schemadailyresourceusageaggregationstats)|false|none|Network egress in B/s.|
|ingressBps|[DailyResourceUsageAggregationStats](#schemadailyresourceusageaggregationstats)|false|none|Network ingress in B/s.|

<h2 id="tocS_DailyResourceUsageAggregationStats">DailyResourceUsageAggregationStats</h2>
<!-- backwards compatibility -->
<a id="schemadailyresourceusageaggregationstats"></a>
<a id="schema_DailyResourceUsageAggregationStats"></a>
<a id="tocSdailyresourceusageaggregationstats"></a>
<a id="tocsdailyresourceusageaggregationstats"></a>

```json
{
  "average": 0,
  "median": 0,
  "ninteyFifthPercentile": 0,
  "peak": 0
}
```

Statistical aggregation of samples for a single resource usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|number(float)|false|none|Average usage value.|
|median|number(float)|false|none|Median usage value.|
|ninteyFifthPercentile|number(float)|false|none|95th percentile usage value.|
|peak|number(float)|false|none|Peak usage value.|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
{
  "day": 0,
  "hours": 0,
  "minutes": 0,
  "month": 0,
  "nanos": 0,
  "seconds": 0,
  "timeZone": {
    "id": "string",
    "version": "string"
  },
  "utcOffset": "string",
  "year": 0
}
```

Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.|
|hours|integer(int32)|false|none|Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.|
|month|integer(int32)|false|none|Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.|
|nanos|integer(int32)|false|none|Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.|
|seconds|integer(int32)|false|none|Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.|
|timeZone|[TimeZone](#schematimezone)|false|none|Time zone.|
|utcOffset|string(google-duration)|false|none|UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.|
|year|integer(int32)|false|none|Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.|

<h2 id="tocS_DiskEntry">DiskEntry</h2>
<!-- backwards compatibility -->
<a id="schemadiskentry"></a>
<a id="schema_DiskEntry"></a>
<a id="tocSdiskentry"></a>
<a id="tocsdiskentry"></a>

```json
{
  "diskLabel": "string",
  "diskLabelType": "string",
  "hwAddress": "string",
  "interfaceType": "string",
  "partitions": {
    "entries": [
      {}
    ]
  },
  "status": "string",
  "totalCapacityBytes": "string",
  "totalFreeBytes": "string",
  "vmwareConfig": {
    "backingType": "BACKING_TYPE_UNSPECIFIED",
    "rdmCompatibilityMode": "string",
    "shared": true,
    "vmdkDiskMode": "string"
  }
}
```

Single disk entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskLabel|string|false|none|Disk label.|
|diskLabelType|string|false|none|Disk label type (e.g. BIOS/GPT)|
|hwAddress|string|false|none|Disk hardware address (e.g. 0:1 for SCSI).|
|interfaceType|string|false|none|Disks interface type (e.g. SATA/SCSI)|
|partitions|[DiskPartitionList](#schemadiskpartitionlist)|false|none|Partition layout.|
|status|string|false|none|Disk status (e.g. online).|
|totalCapacityBytes|string(int64)|false|none|Disk capacity.|
|totalFreeBytes|string(int64)|false|none|Disk free space.|
|vmwareConfig|[VmwareDiskConfig](#schemavmwarediskconfig)|false|none|VMware disk details.|

<h2 id="tocS_DiskEntryList">DiskEntryList</h2>
<!-- backwards compatibility -->
<a id="schemadiskentrylist"></a>
<a id="schema_DiskEntryList"></a>
<a id="tocSdiskentrylist"></a>
<a id="tocsdiskentrylist"></a>

```json
{
  "entries": [
    {
      "diskLabel": "string",
      "diskLabelType": "string",
      "hwAddress": "string",
      "interfaceType": "string",
      "partitions": {
        "entries": [
          {}
        ]
      },
      "status": "string",
      "totalCapacityBytes": "string",
      "totalFreeBytes": "string",
      "vmwareConfig": {
        "backingType": "BACKING_TYPE_UNSPECIFIED",
        "rdmCompatibilityMode": "string",
        "shared": true,
        "vmdkDiskMode": "string"
      }
    }
  ]
}
```

VM disks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[DiskEntry](#schemadiskentry)]|false|none|Disk entries.|

<h2 id="tocS_DiskPartition">DiskPartition</h2>
<!-- backwards compatibility -->
<a id="schemadiskpartition"></a>
<a id="schema_DiskPartition"></a>
<a id="tocSdiskpartition"></a>
<a id="tocsdiskpartition"></a>

```json
{
  "capacityBytes": "string",
  "fileSystem": "string",
  "freeBytes": "string",
  "mountPoint": "string",
  "subPartitions": {
    "entries": [
      {}
    ]
  },
  "type": "string",
  "uuid": "string"
}
```

Disk Partition details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityBytes|string(int64)|false|none|Partition capacity.|
|fileSystem|string|false|none|Partition file system.|
|freeBytes|string(int64)|false|none|Partition free space.|
|mountPoint|string|false|none|Mount pount (Linux/Windows) or drive letter (Windows).|
|subPartitions|[DiskPartitionList](#schemadiskpartitionlist)|false|none|Sub-partitions.|
|type|string|false|none|Partition type (e.g. BIOS boot).|
|uuid|string|false|none|Partition UUID.|

<h2 id="tocS_DiskPartitionList">DiskPartitionList</h2>
<!-- backwards compatibility -->
<a id="schemadiskpartitionlist"></a>
<a id="schema_DiskPartitionList"></a>
<a id="tocSdiskpartitionlist"></a>
<a id="tocsdiskpartitionlist"></a>

```json
{
  "entries": [
    {
      "capacityBytes": "string",
      "fileSystem": "string",
      "freeBytes": "string",
      "mountPoint": "string",
      "subPartitions": {},
      "type": "string",
      "uuid": "string"
    }
  ]
}
```

Disk partition list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[DiskPartition](#schemadiskpartition)]|false|none|Partition entries.|

<h2 id="tocS_DiskUsageSample">DiskUsageSample</h2>
<!-- backwards compatibility -->
<a id="schemadiskusagesample"></a>
<a id="schema_DiskUsageSample"></a>
<a id="tocSdiskusagesample"></a>
<a id="tocsdiskusagesample"></a>

```json
{
  "averageIops": 0
}
```

Disk usage sample. Values are across all disks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageIops|number(float)|false|none|Average IOPS sampled over a short window. Must be non-negative.|

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

<h2 id="tocS_ExecutionReport">ExecutionReport</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionreport"></a>
<a id="schema_ExecutionReport"></a>
<a id="tocSexecutionreport"></a>
<a id="tocsexecutionreport"></a>

```json
{
  "executionErrors": {
    "fileValidations": [
      {
        "fileErrors": [
          {
            "errorDetails": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "fileName": "string",
        "partialReport": true,
        "rowErrors": [
          {
            "errors": [
              {
                "errorDetails": "string",
                "severity": "SEVERITY_UNSPECIFIED"
              }
            ],
            "rowNumber": 0,
            "vmName": "string",
            "vmUuid": "string"
          }
        ]
      }
    ],
    "jobErrors": [
      {
        "errorDetails": "string",
        "severity": "SEVERITY_UNSPECIFIED"
      }
    ]
  },
  "framesReported": 0,
  "jobErrors": [
    {
      "errorDetails": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "totalRowsCount": 0
}
```

A resource that reports result of the import job execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionErrors|[ValidationReport](#schemavalidationreport)|false|none|Validation errors encountered during the execution of the import job.|
|framesReported|integer(int32)|false|none|Total number of asset frames reported for the import job.|
|jobErrors|[[ImportError](#schemaimporterror)]|false|none|List of job-level errors. Deprecated, use the job errors under execution_errors instead.|
|totalRowsCount|integer(int32)|false|none|Total number of rows in the import job.|

<h2 id="tocS_FileValidationReport">FileValidationReport</h2>
<!-- backwards compatibility -->
<a id="schemafilevalidationreport"></a>
<a id="schema_FileValidationReport"></a>
<a id="tocSfilevalidationreport"></a>
<a id="tocsfilevalidationreport"></a>

```json
{
  "fileErrors": [
    {
      "errorDetails": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "fileName": "string",
  "partialReport": true,
  "rowErrors": [
    {
      "errors": [
        {
          "errorDetails": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "rowNumber": 0,
      "vmName": "string",
      "vmUuid": "string"
    }
  ]
}
```

A resource that aggregates the validation errors found in an import job file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileErrors|[[ImportError](#schemaimporterror)]|false|none|List of file level errors.|
|fileName|string|false|none|The name of the file.|
|partialReport|boolean|false|none|Flag indicating that processing was aborted due to maximum number of errors.|
|rowErrors|[[ImportRowError](#schemaimportrowerror)]|false|none|Partial list of rows that encountered validation error.|

<h2 id="tocS_FitDescriptor">FitDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemafitdescriptor"></a>
<a id="schema_FitDescriptor"></a>
<a id="tocSfitdescriptor"></a>
<a id="tocsfitdescriptor"></a>

```json
{
  "fitLevel": "FIT_LEVEL_UNSPECIFIED"
}
```

Describes the fit level of an asset for migration to a specific target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fitLevel|string|false|none|Fit level.|

#### Enumerated Values

|Property|Value|
|---|---|
|fitLevel|FIT_LEVEL_UNSPECIFIED|
|fitLevel|FIT|
|fitLevel|NO_FIT|
|fitLevel|REQUIRES_EFFORT|

<h2 id="tocS_Frames">Frames</h2>
<!-- backwards compatibility -->
<a id="schemaframes"></a>
<a id="schema_Frames"></a>
<a id="tocSframes"></a>
<a id="tocsframes"></a>

```json
{
  "framesData": [
    {
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "performanceSamples": [
        {
          "cpu": {
            "utilizedPercentage": 0
          },
          "disk": {
            "averageIops": 0
          },
          "memory": {
            "utilizedPercentage": 0
          },
          "network": {
            "averageEgressBps": 0,
            "averageIngressBps": 0
          },
          "sampleTime": "string"
        }
      ],
      "reportTime": "string",
      "traceToken": "string",
      "virtualMachineDetails": {
        "coreCount": 0,
        "createTime": "string",
        "guestOs": {
          "config": {
            "fstab": {
              "entries": [
                {
                  "file": "string",
                  "freq": 0,
                  "mntops": "string",
                  "passno": 0,
                  "spec": "string",
                  "vfstype": "string"
                }
              ]
            },
            "hosts": {
              "entries": [
                {
                  "hostNames": [
                    "string"
                  ],
                  "ip": "string"
                }
              ]
            },
            "issue": "string",
            "nfsExports": {
              "entries": [
                {
                  "exportDirectory": "string",
                  "hosts": [
                    "string"
                  ]
                }
              ]
            },
            "selinux": {
              "enabled": true,
              "mode": "string"
            }
          },
          "runtime": {
            "domain": "string",
            "installedApps": {
              "entries": [
                {
                  "name": "string",
                  "path": "string",
                  "time": "string",
                  "vendor": "string",
                  "version": "string"
                }
              ]
            },
            "lastUptime": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "machineName": "string",
            "networkInfo": {
              "connections": {
                "entries": [
                  {
                    "localIpAddress": "string",
                    "localPort": 0,
                    "pid": "string",
                    "processName": "string",
                    "protocol": "string",
                    "remoteIpAddress": "string",
                    "remotePort": 0,
                    "state": "string"
                  }
                ]
              },
              "netstat": "string",
              "netstatTime": {
                "day": 0,
                "hours": 0,
                "minutes": 0,
                "month": 0,
                "nanos": 0,
                "seconds": 0,
                "timeZone": {
                  "id": "string",
                  "version": "string"
                },
                "utcOffset": "string",
                "year": 0
              }
            },
            "openFileList": {
              "entries": [
                {
                  "command": "string",
                  "filePath": "string",
                  "fileType": "string",
                  "user": "string"
                }
              ]
            },
            "processes": {
              "processes": [
                {
                  "attributes": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "cmdline": "string",
                  "exePath": "string",
                  "pid": "string",
                  "user": "string"
                }
              ]
            },
            "services": {
              "services": [
                {
                  "cmdline": "string",
                  "exePath": "string",
                  "name": "string",
                  "pid": "string",
                  "startMode": "string",
                  "state": "string",
                  "status": "string"
                }
              ]
            }
          }
        },
        "memoryMb": 0,
        "osFamily": "OS_FAMILY_UNKNOWN",
        "osName": "string",
        "osVersion": "string",
        "platform": {
          "awsEc2Details": {
            "location": "string",
            "machineTypeLabel": "string"
          },
          "azureVmDetails": {
            "location": "string",
            "machineTypeLabel": "string",
            "provisioningState": "string"
          },
          "genericDetails": {
            "location": "string"
          },
          "physicalDetails": {
            "location": "string"
          },
          "vmwareDetails": {
            "esxVersion": "string",
            "osid": "string",
            "vcenterVersion": "string"
          }
        },
        "powerState": "string",
        "vcenterFolder": "string",
        "vcenterUrl": "string",
        "vcenterVmId": "string",
        "vmArchitecture": {
          "bios": {
            "biosManufacturer": "string",
            "biosName": "string",
            "biosReleaseDate": "string",
            "biosVersion": "string",
            "smbiosUuid": "string"
          },
          "cpuArchitecture": "string",
          "cpuManufacturer": "string",
          "cpuName": "string",
          "cpuSocketCount": 0,
          "cpuThreadCount": 0,
          "firmware": "string",
          "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
          "vendor": "string"
        },
        "vmDisks": {
          "disks": {
            "entries": [
              {
                "diskLabel": "string",
                "diskLabelType": "string",
                "hwAddress": "string",
                "interfaceType": "string",
                "partitions": {
                  "entries": [
                    {}
                  ]
                },
                "status": "string",
                "totalCapacityBytes": "string",
                "totalFreeBytes": "string",
                "vmwareConfig": {
                  "backingType": "BACKING_TYPE_UNSPECIFIED",
                  "rdmCompatibilityMode": "string",
                  "shared": true,
                  "vmdkDiskMode": "string"
                }
              }
            ]
          },
          "hddTotalCapacityBytes": "string",
          "hddTotalFreeBytes": "string",
          "lsblkJson": "string"
        },
        "vmName": "string",
        "vmNetwork": {
          "defaultGw": "string",
          "networkAdapters": {
            "networkAdapters": [
              {
                "adapterType": "string",
                "addresses": {
                  "addresses": [
                    {
                      "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                      "bcast": "string",
                      "fqdn": "string",
                      "ipAddress": "string",
                      "subnetMask": "string"
                    }
                  ]
                },
                "macAddress": "string"
              }
            ]
          },
          "primaryIpAddress": "string",
          "primaryMacAddress": "string",
          "publicIpAddress": "string"
        },
        "vmUuid": "string"
      }
    }
  ]
}
```

Collection of frame data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|framesData|[[AssetFrame](#schemaassetframe)]|false|none|A repeated field of asset data.|

<h2 id="tocS_FstabEntry">FstabEntry</h2>
<!-- backwards compatibility -->
<a id="schemafstabentry"></a>
<a id="schema_FstabEntry"></a>
<a id="tocSfstabentry"></a>
<a id="tocsfstabentry"></a>

```json
{
  "file": "string",
  "freq": 0,
  "mntops": "string",
  "passno": 0,
  "spec": "string",
  "vfstype": "string"
}
```

Single fstab entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|The mount point for the filesystem.|
|freq|integer(int32)|false|none|Used by dump to determine which filesystems need to be dumped.|
|mntops|string|false|none|Mount options associated with the filesystem.|
|passno|integer(int32)|false|none|Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time.|
|spec|string|false|none|The block special device or remote filesystem to be mounted.|
|vfstype|string|false|none|The type of the filesystem.|

<h2 id="tocS_FstabEntryList">FstabEntryList</h2>
<!-- backwards compatibility -->
<a id="schemafstabentrylist"></a>
<a id="schema_FstabEntryList"></a>
<a id="tocSfstabentrylist"></a>
<a id="tocsfstabentrylist"></a>

```json
{
  "entries": [
    {
      "file": "string",
      "freq": 0,
      "mntops": "string",
      "passno": 0,
      "spec": "string",
      "vfstype": "string"
    }
  ]
}
```

Fstab content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[FstabEntry](#schemafstabentry)]|false|none|Fstab entries.|

<h2 id="tocS_GCSPayloadInfo">GCSPayloadInfo</h2>
<!-- backwards compatibility -->
<a id="schemagcspayloadinfo"></a>
<a id="schema_GCSPayloadInfo"></a>
<a id="tocSgcspayloadinfo"></a>
<a id="tocsgcspayloadinfo"></a>

```json
{
  "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
  "path": "string"
}
```

A resource that represents a payload hosted on Google Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|The import job format.|
|path|string|false|none|The payload path in Google Cloud Storage.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|IMPORT_JOB_FORMAT_UNSPECIFIED|
|format|IMPORT_JOB_FORMAT_CMDB|
|format|IMPORT_JOB_FORMAT_RVTOOLS_XLSX|
|format|IMPORT_JOB_FORMAT_RVTOOLS_CSV|
|format|IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV|
|format|IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV|
|format|IMPORT_JOB_FORMAT_MANUAL_CSV|

<h2 id="tocS_GenericPlatformDetails">GenericPlatformDetails</h2>
<!-- backwards compatibility -->
<a id="schemagenericplatformdetails"></a>
<a id="schema_GenericPlatformDetails"></a>
<a id="tocSgenericplatformdetails"></a>
<a id="tocsgenericplatformdetails"></a>

```json
{
  "location": "string"
}
```

Generic platform details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field.|

<h2 id="tocS_GoogleKubernetesEngineMigrationTarget">GoogleKubernetesEngineMigrationTarget</h2>
<!-- backwards compatibility -->
<a id="schemagooglekubernetesenginemigrationtarget"></a>
<a id="schema_GoogleKubernetesEngineMigrationTarget"></a>
<a id="tocSgooglekubernetesenginemigrationtarget"></a>
<a id="tocsgooglekubernetesenginemigrationtarget"></a>

```json
{}
```

GKE migration target.

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "updateTime": "string"
}
```

A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the group was created.|
|description|string|false|none|The description of the resource.|
|displayName|string|false|none|User-friendly display name.|
|labels|object|false|none|Labels as key value pairs.|
|name|string|false|read-only|Output only. The name of the group.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the group was last updated.|

<h2 id="tocS_GuestConfigDetails">GuestConfigDetails</h2>
<!-- backwards compatibility -->
<a id="schemaguestconfigdetails"></a>
<a id="schema_GuestConfigDetails"></a>
<a id="tocSguestconfigdetails"></a>
<a id="tocsguestconfigdetails"></a>

```json
{
  "fstab": {
    "entries": [
      {
        "file": "string",
        "freq": 0,
        "mntops": "string",
        "passno": 0,
        "spec": "string",
        "vfstype": "string"
      }
    ]
  },
  "hosts": {
    "entries": [
      {
        "hostNames": [
          "string"
        ],
        "ip": "string"
      }
    ]
  },
  "issue": "string",
  "nfsExports": {
    "entries": [
      {
        "exportDirectory": "string",
        "hosts": [
          "string"
        ]
      }
    ]
  },
  "selinux": {
    "enabled": true,
    "mode": "string"
  }
}
```

Guest OS config information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fstab|[FstabEntryList](#schemafstabentrylist)|false|none|Mount list (Linux fstab).|
|hosts|[HostsEntryList](#schemahostsentrylist)|false|none|Hosts file (/etc/hosts).|
|issue|string|false|none|OS issue (typically /etc/issue in Linux).|
|nfsExports|[NfsExportList](#schemanfsexportlist)|false|none|NFS exports.|
|selinux|[Selinux](#schemaselinux)|false|none|SELinux details.|

<h2 id="tocS_GuestInstalledApplication">GuestInstalledApplication</h2>
<!-- backwards compatibility -->
<a id="schemaguestinstalledapplication"></a>
<a id="schema_GuestInstalledApplication"></a>
<a id="tocSguestinstalledapplication"></a>
<a id="tocsguestinstalledapplication"></a>

```json
{
  "name": "string",
  "path": "string",
  "time": "string",
  "vendor": "string",
  "version": "string"
}
```

Guest installed application information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Installed application name.|
|path|string|false|none|Source path.|
|time|string|false|none|Date application was installed.|
|vendor|string|false|none|Installed application vendor.|
|version|string|false|none|Installed application version.|

<h2 id="tocS_GuestInstalledApplicationList">GuestInstalledApplicationList</h2>
<!-- backwards compatibility -->
<a id="schemaguestinstalledapplicationlist"></a>
<a id="schema_GuestInstalledApplicationList"></a>
<a id="tocSguestinstalledapplicationlist"></a>
<a id="tocsguestinstalledapplicationlist"></a>

```json
{
  "entries": [
    {
      "name": "string",
      "path": "string",
      "time": "string",
      "vendor": "string",
      "version": "string"
    }
  ]
}
```

Guest installed application list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[GuestInstalledApplication](#schemaguestinstalledapplication)]|false|none|Application entries.|

<h2 id="tocS_GuestOsDetails">GuestOsDetails</h2>
<!-- backwards compatibility -->
<a id="schemaguestosdetails"></a>
<a id="schema_GuestOsDetails"></a>
<a id="tocSguestosdetails"></a>
<a id="tocsguestosdetails"></a>

```json
{
  "config": {
    "fstab": {
      "entries": [
        {
          "file": "string",
          "freq": 0,
          "mntops": "string",
          "passno": 0,
          "spec": "string",
          "vfstype": "string"
        }
      ]
    },
    "hosts": {
      "entries": [
        {
          "hostNames": [
            "string"
          ],
          "ip": "string"
        }
      ]
    },
    "issue": "string",
    "nfsExports": {
      "entries": [
        {
          "exportDirectory": "string",
          "hosts": [
            "string"
          ]
        }
      ]
    },
    "selinux": {
      "enabled": true,
      "mode": "string"
    }
  },
  "runtime": {
    "domain": "string",
    "installedApps": {
      "entries": [
        {
          "name": "string",
          "path": "string",
          "time": "string",
          "vendor": "string",
          "version": "string"
        }
      ]
    },
    "lastUptime": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "machineName": "string",
    "networkInfo": {
      "connections": {
        "entries": [
          {
            "localIpAddress": "string",
            "localPort": 0,
            "pid": "string",
            "processName": "string",
            "protocol": "string",
            "remoteIpAddress": "string",
            "remotePort": 0,
            "state": "string"
          }
        ]
      },
      "netstat": "string",
      "netstatTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "openFileList": {
      "entries": [
        {
          "command": "string",
          "filePath": "string",
          "fileType": "string",
          "user": "string"
        }
      ]
    },
    "processes": {
      "processes": [
        {
          "attributes": {
            "property1": "string",
            "property2": "string"
          },
          "cmdline": "string",
          "exePath": "string",
          "pid": "string",
          "user": "string"
        }
      ]
    },
    "services": {
      "services": [
        {
          "cmdline": "string",
          "exePath": "string",
          "name": "string",
          "pid": "string",
          "startMode": "string",
          "state": "string",
          "status": "string"
        }
      ]
    }
  }
}
```

Information from Guest-level collections.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[GuestConfigDetails](#schemaguestconfigdetails)|false|none|OS and app configuration.|
|runtime|[GuestRuntimeDetails](#schemaguestruntimedetails)|false|none|Runtime information.|

<h2 id="tocS_GuestRuntimeDetails">GuestRuntimeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaguestruntimedetails"></a>
<a id="schema_GuestRuntimeDetails"></a>
<a id="tocSguestruntimedetails"></a>
<a id="tocsguestruntimedetails"></a>

```json
{
  "domain": "string",
  "installedApps": {
    "entries": [
      {
        "name": "string",
        "path": "string",
        "time": "string",
        "vendor": "string",
        "version": "string"
      }
    ]
  },
  "lastUptime": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "machineName": "string",
  "networkInfo": {
    "connections": {
      "entries": [
        {
          "localIpAddress": "string",
          "localPort": 0,
          "pid": "string",
          "processName": "string",
          "protocol": "string",
          "remoteIpAddress": "string",
          "remotePort": 0,
          "state": "string"
        }
      ]
    },
    "netstat": "string",
    "netstatTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    }
  },
  "openFileList": {
    "entries": [
      {
        "command": "string",
        "filePath": "string",
        "fileType": "string",
        "user": "string"
      }
    ]
  },
  "processes": {
    "processes": [
      {
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "cmdline": "string",
        "exePath": "string",
        "pid": "string",
        "user": "string"
      }
    ]
  },
  "services": {
    "services": [
      {
        "cmdline": "string",
        "exePath": "string",
        "name": "string",
        "pid": "string",
        "startMode": "string",
        "state": "string",
        "status": "string"
      }
    ]
  }
}
```

Guest OS runtime information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|Domain, e.g. c.stratozone-development.internal.|
|installedApps|[GuestInstalledApplicationList](#schemaguestinstalledapplicationlist)|false|none|Installed applications information.|
|lastUptime|[Date](#schemadate)|false|none|Date since last booted (last uptime date).|
|machineName|string|false|none|Machine name.|
|networkInfo|[RuntimeNetworkInfo](#schemaruntimenetworkinfo)|false|none|Runtime network information (connections, ports).|
|openFileList|[OpenFileList](#schemaopenfilelist)|false|none|Open files information.|
|processes|[RunningProcessList](#schemarunningprocesslist)|false|none|Running processes.|
|services|[RunningServiceList](#schemarunningservicelist)|false|none|Running background services.|

<h2 id="tocS_HostsEntry">HostsEntry</h2>
<!-- backwards compatibility -->
<a id="schemahostsentry"></a>
<a id="schema_HostsEntry"></a>
<a id="tocShostsentry"></a>
<a id="tocshostsentry"></a>

```json
{
  "hostNames": [
    "string"
  ],
  "ip": "string"
}
```

Single /etc/hosts entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostNames|[string]|false|none|List of host names / aliases.|
|ip|string|false|none|IP (raw, IPv4/6 agnostic).|

<h2 id="tocS_HostsEntryList">HostsEntryList</h2>
<!-- backwards compatibility -->
<a id="schemahostsentrylist"></a>
<a id="schema_HostsEntryList"></a>
<a id="tocShostsentrylist"></a>
<a id="tocshostsentrylist"></a>

```json
{
  "entries": [
    {
      "hostNames": [
        "string"
      ],
      "ip": "string"
    }
  ]
}
```

Hosts content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[HostsEntry](#schemahostsentry)]|false|none|Hosts entries.|

<h2 id="tocS_ImportDataFile">ImportDataFile</h2>
<!-- backwards compatibility -->
<a id="schemaimportdatafile"></a>
<a id="schema_ImportDataFile"></a>
<a id="tocSimportdatafile"></a>
<a id="tocsimportdatafile"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "uploadFileInfo": {
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "signedUri": "string",
    "uri": "string",
    "uriExpirationTime": "string"
  }
}
```

A resource that represents a payload file in an import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the file was created.|
|displayName|string|false|none|User-friendly display name. Maximum length is 63 characters.|
|format|string|false|none|Required. The payload format.|
|name|string|false|read-only|Output only. The name of the file.|
|state|string|false|read-only|Output only. The state of the import data file.|
|uploadFileInfo|[UploadFileInfo](#schemauploadfileinfo)|false|none|Information about a file that is uploaded to a storage service.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|IMPORT_JOB_FORMAT_UNSPECIFIED|
|format|IMPORT_JOB_FORMAT_CMDB|
|format|IMPORT_JOB_FORMAT_RVTOOLS_XLSX|
|format|IMPORT_JOB_FORMAT_RVTOOLS_CSV|
|format|IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV|
|format|IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV|
|format|IMPORT_JOB_FORMAT_MANUAL_CSV|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|

<h2 id="tocS_ImportError">ImportError</h2>
<!-- backwards compatibility -->
<a id="schemaimporterror"></a>
<a id="schema_ImportError"></a>
<a id="tocSimporterror"></a>
<a id="tocsimporterror"></a>

```json
{
  "errorDetails": "string",
  "severity": "SEVERITY_UNSPECIFIED"
}
```

A resource that reports the errors encountered while processing an import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorDetails|string|false|none|The error information.|
|severity|string|false|none|The severity of the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|ERROR|
|severity|WARNING|
|severity|INFO|

<h2 id="tocS_ImportJob">ImportJob</h2>
<!-- backwards compatibility -->
<a id="schemaimportjob"></a>
<a id="schema_ImportJob"></a>
<a id="tocSimportjob"></a>
<a id="tocsimportjob"></a>

```json
{
  "assetSource": "string",
  "completeTime": "string",
  "createTime": "string",
  "displayName": "string",
  "executionReport": {
    "executionErrors": {
      "fileValidations": [
        {
          "fileErrors": [
            {
              "errorDetails": "string",
              "severity": "SEVERITY_UNSPECIFIED"
            }
          ],
          "fileName": "string",
          "partialReport": true,
          "rowErrors": [
            {
              "errors": [
                {
                  "errorDetails": "string",
                  "severity": "SEVERITY_UNSPECIFIED"
                }
              ],
              "rowNumber": 0,
              "vmName": "string",
              "vmUuid": "string"
            }
          ]
        }
      ],
      "jobErrors": [
        {
          "errorDetails": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ]
    },
    "framesReported": 0,
    "jobErrors": [
      {
        "errorDetails": "string",
        "severity": "SEVERITY_UNSPECIFIED"
      }
    ],
    "totalRowsCount": 0
  },
  "gcsPayload": {
    "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
    "path": "string"
  },
  "inlinePayload": {
    "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
    "payload": [
      {
        "data": "string",
        "name": "string"
      }
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "IMPORT_JOB_STATE_UNSPECIFIED",
  "updateTime": "string",
  "validationReport": {
    "fileValidations": [
      {
        "fileErrors": [
          {
            "errorDetails": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "fileName": "string",
        "partialReport": true,
        "rowErrors": [
          {
            "errors": [
              {
                "errorDetails": "string",
                "severity": "SEVERITY_UNSPECIFIED"
              }
            ],
            "rowNumber": 0,
            "vmName": "string",
            "vmUuid": "string"
          }
        ]
      }
    ],
    "jobErrors": [
      {
        "errorDetails": "string",
        "severity": "SEVERITY_UNSPECIFIED"
      }
    ]
  }
}
```

A resource that represents the background job that imports asset frames.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetSource|string|false|none|Required. Reference to a source.|
|completeTime|string(google-datetime)|false|read-only|Output only. The timestamp when the import job was completed.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the import job was created.|
|displayName|string|false|none|User-friendly display name. Maximum length is 63 characters.|
|executionReport|[ExecutionReport](#schemaexecutionreport)|false|none|Output only. The report with the results of running the import job.|
|gcsPayload|[GCSPayloadInfo](#schemagcspayloadinfo)|false|none|The payload is in Google Cloud Storage.|
|inlinePayload|[InlinePayloadInfo](#schemainlinepayloadinfo)|false|none|The payload is included in the request, mainly used for small import jobs.|
|labels|object|false|none|Labels as key value pairs.|
|name|string|false|read-only|Output only. The full name of the import job.|
|state|string|false|read-only|Output only. The state of the import job.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the import job was last updated.|
|validationReport|[ValidationReport](#schemavalidationreport)|false|none|Output only. The report with the validation results of the import job.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|IMPORT_JOB_STATE_UNSPECIFIED|
|state|IMPORT_JOB_STATE_PENDING|
|state|IMPORT_JOB_STATE_RUNNING|
|state|IMPORT_JOB_STATE_COMPLETED|
|state|IMPORT_JOB_STATE_FAILED|
|state|IMPORT_JOB_STATE_VALIDATING|
|state|IMPORT_JOB_STATE_FAILED_VALIDATION|
|state|IMPORT_JOB_STATE_READY|

<h2 id="tocS_ImportRowError">ImportRowError</h2>
<!-- backwards compatibility -->
<a id="schemaimportrowerror"></a>
<a id="schema_ImportRowError"></a>
<a id="tocSimportrowerror"></a>
<a id="tocsimportrowerror"></a>

```json
{
  "errors": [
    {
      "errorDetails": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "rowNumber": 0,
  "vmName": "string",
  "vmUuid": "string"
}
```

A resource that reports the import job errors at row level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ImportError](#schemaimporterror)]|false|none|The list of errors detected in the row.|
|rowNumber|integer(int32)|false|none|The row number where the error was detected.|
|vmName|string|false|none|The name of the VM in the row.|
|vmUuid|string|false|none|The VM UUID.|

<h2 id="tocS_InlinePayloadInfo">InlinePayloadInfo</h2>
<!-- backwards compatibility -->
<a id="schemainlinepayloadinfo"></a>
<a id="schema_InlinePayloadInfo"></a>
<a id="tocSinlinepayloadinfo"></a>
<a id="tocsinlinepayloadinfo"></a>

```json
{
  "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
  "payload": [
    {
      "data": "string",
      "name": "string"
    }
  ]
}
```

A resource that represents the inline import job payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|The import job format.|
|payload|[[PayloadFile](#schemapayloadfile)]|false|none|List of payload files.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|IMPORT_JOB_FORMAT_UNSPECIFIED|
|format|IMPORT_JOB_FORMAT_CMDB|
|format|IMPORT_JOB_FORMAT_RVTOOLS_XLSX|
|format|IMPORT_JOB_FORMAT_RVTOOLS_CSV|
|format|IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV|
|format|IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV|
|format|IMPORT_JOB_FORMAT_MANUAL_CSV|

<h2 id="tocS_Insight">Insight</h2>
<!-- backwards compatibility -->
<a id="schemainsight"></a>
<a id="schema_Insight"></a>
<a id="tocSinsight"></a>
<a id="tocsinsight"></a>

```json
{
  "migrationInsight": {
    "computeEngineTarget": {
      "shape": {
        "logicalCoreCount": 0,
        "machineType": "string",
        "memoryMb": 0,
        "physicalCoreCount": 0,
        "series": "string"
      }
    },
    "fit": {
      "fitLevel": "FIT_LEVEL_UNSPECIFIED"
    },
    "gkeTarget": {},
    "vmwareEngineTarget": {}
  }
}
```

An insight about an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrationInsight|[MigrationInsight](#schemamigrationinsight)|false|none|Output only. An insight about potential migrations for an asset.|

<h2 id="tocS_InsightList">InsightList</h2>
<!-- backwards compatibility -->
<a id="schemainsightlist"></a>
<a id="schema_InsightList"></a>
<a id="tocSinsightlist"></a>
<a id="tocsinsightlist"></a>

```json
{
  "insights": [
    {
      "migrationInsight": {
        "computeEngineTarget": {
          "shape": {
            "logicalCoreCount": 0,
            "machineType": "string",
            "memoryMb": 0,
            "physicalCoreCount": 0,
            "series": "string"
          }
        },
        "fit": {
          "fitLevel": "FIT_LEVEL_UNSPECIFIED"
        },
        "gkeTarget": {},
        "vmwareEngineTarget": {}
      }
    }
  ],
  "updateTime": "string"
}
```

Message containing insights list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insights|[[Insight](#schemainsight)]|false|read-only|Output only. Insights of the list.|
|updateTime|string(google-datetime)|false|read-only|Output only. Update timestamp.|

<h2 id="tocS_ListAssetsResponse">ListAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsresponse"></a>
<a id="schema_ListAssetsResponse"></a>
<a id="tocSlistassetsresponse"></a>
<a id="tocslistassetsresponse"></a>

```json
{
  "assets": [
    {
      "assignedGroups": [
        "string"
      ],
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "insightList": {
        "insights": [
          {
            "migrationInsight": {
              "computeEngineTarget": {
                "shape": {
                  "logicalCoreCount": 0,
                  "machineType": "string",
                  "memoryMb": 0,
                  "physicalCoreCount": 0,
                  "series": "string"
                }
              },
              "fit": {
                "fitLevel": "FIT_LEVEL_UNSPECIFIED"
              },
              "gkeTarget": {},
              "vmwareEngineTarget": {}
            }
          }
        ],
        "updateTime": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "performanceData": {
        "dailyResourceUsageAggregations": [
          {
            "cpu": {
              "utilizationPercentage": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "date": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "disk": {
              "iops": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "memory": {
              "utilizationPercentage": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            },
            "network": {
              "egressBps": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              },
              "ingressBps": {
                "average": 0,
                "median": 0,
                "ninteyFifthPercentile": 0,
                "peak": 0
              }
            }
          }
        ]
      },
      "sources": [
        "string"
      ],
      "updateTime": "string",
      "virtualMachineDetails": {
        "coreCount": 0,
        "createTime": "string",
        "guestOs": {
          "config": {
            "fstab": {
              "entries": [
                {
                  "file": "string",
                  "freq": 0,
                  "mntops": "string",
                  "passno": 0,
                  "spec": "string",
                  "vfstype": "string"
                }
              ]
            },
            "hosts": {
              "entries": [
                {
                  "hostNames": [
                    "string"
                  ],
                  "ip": "string"
                }
              ]
            },
            "issue": "string",
            "nfsExports": {
              "entries": [
                {
                  "exportDirectory": "string",
                  "hosts": [
                    "string"
                  ]
                }
              ]
            },
            "selinux": {
              "enabled": true,
              "mode": "string"
            }
          },
          "runtime": {
            "domain": "string",
            "installedApps": {
              "entries": [
                {
                  "name": "string",
                  "path": "string",
                  "time": "string",
                  "vendor": "string",
                  "version": "string"
                }
              ]
            },
            "lastUptime": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "machineName": "string",
            "networkInfo": {
              "connections": {
                "entries": [
                  {
                    "localIpAddress": "string",
                    "localPort": 0,
                    "pid": "string",
                    "processName": "string",
                    "protocol": "string",
                    "remoteIpAddress": "string",
                    "remotePort": 0,
                    "state": "string"
                  }
                ]
              },
              "netstat": "string",
              "netstatTime": {
                "day": 0,
                "hours": 0,
                "minutes": 0,
                "month": 0,
                "nanos": 0,
                "seconds": 0,
                "timeZone": {
                  "id": "string",
                  "version": "string"
                },
                "utcOffset": "string",
                "year": 0
              }
            },
            "openFileList": {
              "entries": [
                {
                  "command": "string",
                  "filePath": "string",
                  "fileType": "string",
                  "user": "string"
                }
              ]
            },
            "processes": {
              "processes": [
                {
                  "attributes": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "cmdline": "string",
                  "exePath": "string",
                  "pid": "string",
                  "user": "string"
                }
              ]
            },
            "services": {
              "services": [
                {
                  "cmdline": "string",
                  "exePath": "string",
                  "name": "string",
                  "pid": "string",
                  "startMode": "string",
                  "state": "string",
                  "status": "string"
                }
              ]
            }
          }
        },
        "memoryMb": 0,
        "osFamily": "OS_FAMILY_UNKNOWN",
        "osName": "string",
        "osVersion": "string",
        "platform": {
          "awsEc2Details": {
            "location": "string",
            "machineTypeLabel": "string"
          },
          "azureVmDetails": {
            "location": "string",
            "machineTypeLabel": "string",
            "provisioningState": "string"
          },
          "genericDetails": {
            "location": "string"
          },
          "physicalDetails": {
            "location": "string"
          },
          "vmwareDetails": {
            "esxVersion": "string",
            "osid": "string",
            "vcenterVersion": "string"
          }
        },
        "powerState": "string",
        "vcenterFolder": "string",
        "vcenterUrl": "string",
        "vcenterVmId": "string",
        "vmArchitecture": {
          "bios": {
            "biosManufacturer": "string",
            "biosName": "string",
            "biosReleaseDate": "string",
            "biosVersion": "string",
            "smbiosUuid": "string"
          },
          "cpuArchitecture": "string",
          "cpuManufacturer": "string",
          "cpuName": "string",
          "cpuSocketCount": 0,
          "cpuThreadCount": 0,
          "firmware": "string",
          "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
          "vendor": "string"
        },
        "vmDisks": {
          "disks": {
            "entries": [
              {
                "diskLabel": "string",
                "diskLabelType": "string",
                "hwAddress": "string",
                "interfaceType": "string",
                "partitions": {
                  "entries": [
                    {}
                  ]
                },
                "status": "string",
                "totalCapacityBytes": "string",
                "totalFreeBytes": "string",
                "vmwareConfig": {
                  "backingType": "BACKING_TYPE_UNSPECIFIED",
                  "rdmCompatibilityMode": "string",
                  "shared": true,
                  "vmdkDiskMode": "string"
                }
              }
            ]
          },
          "hddTotalCapacityBytes": "string",
          "hddTotalFreeBytes": "string",
          "lsblkJson": "string"
        },
        "vmName": "string",
        "vmNetwork": {
          "defaultGw": "string",
          "networkAdapters": {
            "networkAdapters": [
              {
                "adapterType": "string",
                "addresses": {
                  "addresses": [
                    {
                      "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                      "bcast": "string",
                      "fqdn": "string",
                      "ipAddress": "string",
                      "subnetMask": "string"
                    }
                  ]
                },
                "macAddress": "string"
              }
            ]
          },
          "primaryIpAddress": "string",
          "primaryMacAddress": "string",
          "publicIpAddress": "string"
        },
        "vmUuid": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for listing assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[Asset](#schemaasset)]|false|none|A list of assets.|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListGroupsResponse">ListGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsresponse"></a>
<a id="schema_ListGroupsResponse"></a>
<a id="tocSlistgroupsresponse"></a>
<a id="tocslistgroupsresponse"></a>

```json
{
  "groups": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

A response for listing groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[Group](#schemagroup)]|false|none|The list of Group|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListImportDataFilesResponse">ListImportDataFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimportdatafilesresponse"></a>
<a id="schema_ListImportDataFilesResponse"></a>
<a id="tocSlistimportdatafilesresponse"></a>
<a id="tocslistimportdatafilesresponse"></a>

```json
{
  "importDataFiles": [
    {
      "createTime": "string",
      "displayName": "string",
      "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "uploadFileInfo": {
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "signedUri": "string",
        "uri": "string",
        "uriExpirationTime": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for listing payload files of an import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importDataFiles|[[ImportDataFile](#schemaimportdatafile)]|false|none|The list of import data files.|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListImportJobsResponse">ListImportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimportjobsresponse"></a>
<a id="schema_ListImportJobsResponse"></a>
<a id="tocSlistimportjobsresponse"></a>
<a id="tocslistimportjobsresponse"></a>

```json
{
  "importJobs": [
    {
      "assetSource": "string",
      "completeTime": "string",
      "createTime": "string",
      "displayName": "string",
      "executionReport": {
        "executionErrors": {
          "fileValidations": [
            {
              "fileErrors": [
                {
                  "errorDetails": "string",
                  "severity": "SEVERITY_UNSPECIFIED"
                }
              ],
              "fileName": "string",
              "partialReport": true,
              "rowErrors": [
                {
                  "errors": [
                    {
                      "errorDetails": "string",
                      "severity": "SEVERITY_UNSPECIFIED"
                    }
                  ],
                  "rowNumber": 0,
                  "vmName": "string",
                  "vmUuid": "string"
                }
              ]
            }
          ],
          "jobErrors": [
            {
              "errorDetails": "string",
              "severity": "SEVERITY_UNSPECIFIED"
            }
          ]
        },
        "framesReported": 0,
        "jobErrors": [
          {
            "errorDetails": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "totalRowsCount": 0
      },
      "gcsPayload": {
        "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
        "path": "string"
      },
      "inlinePayload": {
        "format": "IMPORT_JOB_FORMAT_UNSPECIFIED",
        "payload": [
          {
            "data": "string",
            "name": "string"
          }
        ]
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "IMPORT_JOB_STATE_UNSPECIFIED",
      "updateTime": "string",
      "validationReport": {
        "fileValidations": [
          {
            "fileErrors": [
              {
                "errorDetails": "string",
                "severity": "SEVERITY_UNSPECIFIED"
              }
            ],
            "fileName": "string",
            "partialReport": true,
            "rowErrors": [
              {
                "errors": [
                  {
                    "errorDetails": "string",
                    "severity": "SEVERITY_UNSPECIFIED"
                  }
                ],
                "rowNumber": 0,
                "vmName": "string",
                "vmUuid": "string"
              }
            ]
          }
        ],
        "jobErrors": [
          {
            "errorDetails": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ]
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

A response for listing import jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importJobs|[[ImportJob](#schemaimportjob)]|false|none|The list of import jobs.|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

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
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListPreferenceSetsResponse">ListPreferenceSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpreferencesetsresponse"></a>
<a id="schema_ListPreferenceSetsResponse"></a>
<a id="tocSlistpreferencesetsresponse"></a>
<a id="tocslistpreferencesetsresponse"></a>

```json
{
  "nextPageToken": "string",
  "preferenceSets": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string",
      "virtualMachinePreferences": {
        "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
        "computeEnginePreferences": {
          "licenseType": "LICENSE_TYPE_UNSPECIFIED",
          "machinePreferences": {
            "allowedMachineSeries": [
              {
                "code": "string"
              }
            ]
          },
          "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
        },
        "regionPreferences": {
          "preferredRegions": [
            "string"
          ]
        },
        "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for listing preference sets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|preferenceSets|[[PreferenceSet](#schemapreferenceset)]|false|none|The list of PreferenceSets|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListReportConfigsResponse">ListReportConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreportconfigsresponse"></a>
<a id="schema_ListReportConfigsResponse"></a>
<a id="tocSlistreportconfigsresponse"></a>
<a id="tocslistreportconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "reportConfigs": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "groupPreferencesetAssignments": [
        {
          "group": "string",
          "preferenceSet": "string"
        }
      ],
      "name": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for listing report configs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|reportConfigs|[[ReportConfig](#schemareportconfig)]|false|none|A list of report configs.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListReportsResponse">ListReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreportsresponse"></a>
<a id="schema_ListReportsResponse"></a>
<a id="tocSlistreportsresponse"></a>
<a id="tocslistreportsresponse"></a>

```json
{
  "nextPageToken": "string",
  "reports": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "summary": {
        "allAssetsStats": {
          "assetAge": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "coreCountHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "memoryBytesHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "memoryUtilization": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "memoryUtilizationChart": {
            "free": "string",
            "used": "string"
          },
          "operatingSystem": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "storageBytesHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "storageUtilization": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "storageUtilizationChart": {
            "free": "string",
            "used": "string"
          },
          "totalAssets": "string",
          "totalCores": "string",
          "totalMemoryBytes": "string",
          "totalStorageBytes": "string"
        },
        "groupFindings": [
          {
            "assetAggregateStats": {
              "assetAge": {
                "dataPoints": [
                  {
                    "label": "string",
                    "value": 0
                  }
                ]
              },
              "coreCountHistogram": {
                "buckets": [
                  {
                    "count": "string",
                    "lowerBound": "string",
                    "upperBound": "string"
                  }
                ]
              },
              "memoryBytesHistogram": {
                "buckets": [
                  {
                    "count": "string",
                    "lowerBound": "string",
                    "upperBound": "string"
                  }
                ]
              },
              "memoryUtilization": {
                "dataPoints": [
                  {
                    "label": "string",
                    "value": 0
                  }
                ]
              },
              "memoryUtilizationChart": {
                "free": "string",
                "used": "string"
              },
              "operatingSystem": {
                "dataPoints": [
                  {
                    "label": "string",
                    "value": 0
                  }
                ]
              },
              "storageBytesHistogram": {
                "buckets": [
                  {
                    "count": "string",
                    "lowerBound": "string",
                    "upperBound": "string"
                  }
                ]
              },
              "storageUtilization": {
                "dataPoints": [
                  {
                    "label": "string",
                    "value": 0
                  }
                ]
              },
              "storageUtilizationChart": {
                "free": "string",
                "used": "string"
              },
              "totalAssets": "string",
              "totalCores": "string",
              "totalMemoryBytes": "string",
              "totalStorageBytes": "string"
            },
            "description": "string",
            "displayName": "string",
            "overlappingAssetCount": "string",
            "preferenceSetFindings": [
              {
                "description": "string",
                "displayName": "string",
                "machineFinding": {
                  "allocatedAssetCount": "string",
                  "allocatedDiskTypes": [
                    "PERSISTENT_DISK_TYPE_UNSPECIFIED"
                  ],
                  "allocatedRegions": [
                    "string"
                  ],
                  "machineSeriesAllocations": [
                    {
                      "allocatedAssetCount": "string",
                      "machineSeries": {
                        "code": "string"
                      }
                    }
                  ]
                },
                "machinePreferences": {
                  "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
                  "computeEnginePreferences": {
                    "licenseType": "LICENSE_TYPE_UNSPECIFIED",
                    "machinePreferences": {
                      "allowedMachineSeries": [
                        {
                          "code": "string"
                        }
                      ]
                    },
                    "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
                  },
                  "regionPreferences": {
                    "preferredRegions": [
                      "string"
                    ]
                  },
                  "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
                },
                "monthlyCostCompute": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostNetworkEgress": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostOsLicense": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostOther": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostStorage": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "monthlyCostTotal": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "preferredRegion": "string",
                "pricingTrack": "string",
                "topPriority": "string"
              }
            ]
          }
        ]
      },
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for listing Reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|reports|[[Report](#schemareport)]|false|none|The list of Reports.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListSourcesResponse">ListSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsourcesresponse"></a>
<a id="schema_ListSourcesResponse"></a>
<a id="tocSlistsourcesresponse"></a>
<a id="tocslistsourcesresponse"></a>

```json
{
  "nextPageToken": "string",
  "sources": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "isManaged": true,
      "name": "string",
      "pendingFrameCount": 0,
      "priority": 0,
      "type": "SOURCE_TYPE_UNKNOWN",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for listing sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|sources|[[Source](#schemasource)]|false|none|The list of sources.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_MachinePreferences">MachinePreferences</h2>
<!-- backwards compatibility -->
<a id="schemamachinepreferences"></a>
<a id="schema_MachinePreferences"></a>
<a id="tocSmachinepreferences"></a>
<a id="tocsmachinepreferences"></a>

```json
{
  "allowedMachineSeries": [
    {
      "code": "string"
    }
  ]
}
```

The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedMachineSeries|[[MachineSeries](#schemamachineseries)]|false|none|Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.|

<h2 id="tocS_MachineSeries">MachineSeries</h2>
<!-- backwards compatibility -->
<a id="schemamachineseries"></a>
<a id="schema_MachineSeries"></a>
<a id="tocSmachineseries"></a>
<a id="tocsmachineseries"></a>

```json
{
  "code": "string"
}
```

A Compute Engine machine series.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series.|

<h2 id="tocS_MemoryUsageSample">MemoryUsageSample</h2>
<!-- backwards compatibility -->
<a id="schemamemoryusagesample"></a>
<a id="schema_MemoryUsageSample"></a>
<a id="tocSmemoryusagesample"></a>
<a id="tocsmemoryusagesample"></a>

```json
{
  "utilizedPercentage": 0
}
```

Memory usage sample.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|utilizedPercentage|number(float)|false|none|Percentage of system memory utilized. Must be in the interval [0, 100].|

<h2 id="tocS_MigrationInsight">MigrationInsight</h2>
<!-- backwards compatibility -->
<a id="schemamigrationinsight"></a>
<a id="schema_MigrationInsight"></a>
<a id="tocSmigrationinsight"></a>
<a id="tocsmigrationinsight"></a>

```json
{
  "computeEngineTarget": {
    "shape": {
      "logicalCoreCount": 0,
      "machineType": "string",
      "memoryMb": 0,
      "physicalCoreCount": 0,
      "series": "string"
    }
  },
  "fit": {
    "fitLevel": "FIT_LEVEL_UNSPECIFIED"
  },
  "gkeTarget": {},
  "vmwareEngineTarget": {}
}
```

An insight about potential migrations for an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEngineTarget|[ComputeEngineMigrationTarget](#schemacomputeenginemigrationtarget)|false|none|Output only. A Google Compute Engine target.|
|fit|[FitDescriptor](#schemafitdescriptor)|false|none|Output only. Description of how well the asset this insight is associated with fits the proposed migration.|
|gkeTarget|[GoogleKubernetesEngineMigrationTarget](#schemagooglekubernetesenginemigrationtarget)|false|none|Output only. A Google Kubernetes Engine target.|
|vmwareEngineTarget|[VmwareEngineMigrationTarget](#schemavmwareenginemigrationtarget)|false|none|Output only. A VMWare Engine target.|

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

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

<h2 id="tocS_NetworkAdapterDetails">NetworkAdapterDetails</h2>
<!-- backwards compatibility -->
<a id="schemanetworkadapterdetails"></a>
<a id="schema_NetworkAdapterDetails"></a>
<a id="tocSnetworkadapterdetails"></a>
<a id="tocsnetworkadapterdetails"></a>

```json
{
  "adapterType": "string",
  "addresses": {
    "addresses": [
      {
        "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
        "bcast": "string",
        "fqdn": "string",
        "ipAddress": "string",
        "subnetMask": "string"
      }
    ]
  },
  "macAddress": "string"
}
```

Details of network adapter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adapterType|string|false|none|Network adapter type (e.g. VMXNET3).|
|addresses|[NetworkAddressList](#schemanetworkaddresslist)|false|none|NetworkAddressList|
|macAddress|string|false|none|MAC address.|

<h2 id="tocS_NetworkAdapterList">NetworkAdapterList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkadapterlist"></a>
<a id="schema_NetworkAdapterList"></a>
<a id="tocSnetworkadapterlist"></a>
<a id="tocsnetworkadapterlist"></a>

```json
{
  "networkAdapters": [
    {
      "adapterType": "string",
      "addresses": {
        "addresses": [
          {
            "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
            "bcast": "string",
            "fqdn": "string",
            "ipAddress": "string",
            "subnetMask": "string"
          }
        ]
      },
      "macAddress": "string"
    }
  ]
}
```

List of network adapters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkAdapters|[[NetworkAdapterDetails](#schemanetworkadapterdetails)]|false|none|Network adapter descriptions.|

<h2 id="tocS_NetworkAddress">NetworkAddress</h2>
<!-- backwards compatibility -->
<a id="schemanetworkaddress"></a>
<a id="schema_NetworkAddress"></a>
<a id="tocSnetworkaddress"></a>
<a id="tocsnetworkaddress"></a>

```json
{
  "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
  "bcast": "string",
  "fqdn": "string",
  "ipAddress": "string",
  "subnetMask": "string"
}
```

Details of network address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignment|string|false|none|Whether DHCP is used to assign addresses.|
|bcast|string|false|none|Broadcast address.|
|fqdn|string|false|none|Fully qualified domain name.|
|ipAddress|string|false|none|Assigned or configured IP Address.|
|subnetMask|string|false|none|Subnet mask.|

#### Enumerated Values

|Property|Value|
|---|---|
|assignment|ADDRESS_ASSIGNMENT_UNSPECIFIED|
|assignment|ADDRESS_ASSIGNMENT_STATIC|
|assignment|ADDRESS_ASSIGNMENT_DHCP|

<h2 id="tocS_NetworkAddressList">NetworkAddressList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkaddresslist"></a>
<a id="schema_NetworkAddressList"></a>
<a id="tocSnetworkaddresslist"></a>
<a id="tocsnetworkaddresslist"></a>

```json
{
  "addresses": [
    {
      "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
      "bcast": "string",
      "fqdn": "string",
      "ipAddress": "string",
      "subnetMask": "string"
    }
  ]
}
```

List of allocated/assigned network addresses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[NetworkAddress](#schemanetworkaddress)]|false|none|Network address entries.|

<h2 id="tocS_NetworkConnection">NetworkConnection</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconnection"></a>
<a id="schema_NetworkConnection"></a>
<a id="tocSnetworkconnection"></a>
<a id="tocsnetworkconnection"></a>

```json
{
  "localIpAddress": "string",
  "localPort": 0,
  "pid": "string",
  "processName": "string",
  "protocol": "string",
  "remoteIpAddress": "string",
  "remotePort": 0,
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localIpAddress|string|false|none|Local IP address.|
|localPort|integer(int32)|false|none|Local port.|
|pid|string(int64)|false|none|Process ID.|
|processName|string|false|none|Process or service name.|
|protocol|string|false|none|Connection protocol (e.g. TCP/UDP).|
|remoteIpAddress|string|false|none|Remote IP address.|
|remotePort|integer(int32)|false|none|Remote port.|
|state|string|false|none|Connection state (e.g. CONNECTED).|

<h2 id="tocS_NetworkConnectionList">NetworkConnectionList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconnectionlist"></a>
<a id="schema_NetworkConnectionList"></a>
<a id="tocSnetworkconnectionlist"></a>
<a id="tocsnetworkconnectionlist"></a>

```json
{
  "entries": [
    {
      "localIpAddress": "string",
      "localPort": 0,
      "pid": "string",
      "processName": "string",
      "protocol": "string",
      "remoteIpAddress": "string",
      "remotePort": 0,
      "state": "string"
    }
  ]
}
```

Network connection list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[NetworkConnection](#schemanetworkconnection)]|false|none|Network connection entries.|

<h2 id="tocS_NetworkUsageSample">NetworkUsageSample</h2>
<!-- backwards compatibility -->
<a id="schemanetworkusagesample"></a>
<a id="schema_NetworkUsageSample"></a>
<a id="tocSnetworkusagesample"></a>
<a id="tocsnetworkusagesample"></a>

```json
{
  "averageEgressBps": 0,
  "averageIngressBps": 0
}
```

Network usage sample. Values are across all network interfaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageEgressBps|number(float)|false|none|Average network egress in B/s sampled over a short window. Must be non-negative.|
|averageIngressBps|number(float)|false|none|Average network ingress in B/s sampled over a short window. Must be non-negative.|

<h2 id="tocS_NfsExport">NfsExport</h2>
<!-- backwards compatibility -->
<a id="schemanfsexport"></a>
<a id="schema_NfsExport"></a>
<a id="tocSnfsexport"></a>
<a id="tocsnfsexport"></a>

```json
{
  "exportDirectory": "string",
  "hosts": [
    "string"
  ]
}
```

NFS export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportDirectory|string|false|none|The directory being exported.|
|hosts|[string]|false|none|The hosts or networks to which the export is being shared.|

<h2 id="tocS_NfsExportList">NfsExportList</h2>
<!-- backwards compatibility -->
<a id="schemanfsexportlist"></a>
<a id="schema_NfsExportList"></a>
<a id="tocSnfsexportlist"></a>
<a id="tocsnfsexportlist"></a>

```json
{
  "entries": [
    {
      "exportDirectory": "string",
      "hosts": [
        "string"
      ]
    }
  ]
}
```

NFS exports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[NfsExport](#schemanfsexport)]|false|none|NFS export entries.|

<h2 id="tocS_OpenFileDetails">OpenFileDetails</h2>
<!-- backwards compatibility -->
<a id="schemaopenfiledetails"></a>
<a id="schema_OpenFileDetails"></a>
<a id="tocSopenfiledetails"></a>
<a id="tocsopenfiledetails"></a>

```json
{
  "command": "string",
  "filePath": "string",
  "fileType": "string",
  "user": "string"
}
```

Open file Information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|string|false|none|Opened file command.|
|filePath|string|false|none|Opened file file path.|
|fileType|string|false|none|Opened file file type.|
|user|string|false|none|Opened file user.|

<h2 id="tocS_OpenFileList">OpenFileList</h2>
<!-- backwards compatibility -->
<a id="schemaopenfilelist"></a>
<a id="schema_OpenFileList"></a>
<a id="tocSopenfilelist"></a>
<a id="tocsopenfilelist"></a>

```json
{
  "entries": [
    {
      "command": "string",
      "filePath": "string",
      "fileType": "string",
      "user": "string"
    }
  ]
}
```

Open file list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[OpenFileDetails](#schemaopenfiledetails)]|false|none|Open file details entries.|

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

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "statusMessage": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_PayloadFile">PayloadFile</h2>
<!-- backwards compatibility -->
<a id="schemapayloadfile"></a>
<a id="schema_PayloadFile"></a>
<a id="tocSpayloadfile"></a>
<a id="tocspayloadfile"></a>

```json
{
  "data": "string",
  "name": "string"
}
```

Payload file for inline import job payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|The file data.|
|name|string|false|none|The file name.|

<h2 id="tocS_PerformanceSample">PerformanceSample</h2>
<!-- backwards compatibility -->
<a id="schemaperformancesample"></a>
<a id="schema_PerformanceSample"></a>
<a id="tocSperformancesample"></a>
<a id="tocsperformancesample"></a>

```json
{
  "cpu": {
    "utilizedPercentage": 0
  },
  "disk": {
    "averageIops": 0
  },
  "memory": {
    "utilizedPercentage": 0
  },
  "network": {
    "averageEgressBps": 0,
    "averageIngressBps": 0
  },
  "sampleTime": "string"
}
```

Performance data sample.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|[CpuUsageSample](#schemacpuusagesample)|false|none|CPU usage sample.|
|disk|[DiskUsageSample](#schemadiskusagesample)|false|none|Disk usage sample.|
|memory|[MemoryUsageSample](#schemamemoryusagesample)|false|none|Memory usage sample.|
|network|[NetworkUsageSample](#schemanetworkusagesample)|false|none|Network usage sample.|
|sampleTime|string(google-datetime)|false|none|Time the sample was collected.|

<h2 id="tocS_PhysicalPlatformDetails">PhysicalPlatformDetails</h2>
<!-- backwards compatibility -->
<a id="schemaphysicalplatformdetails"></a>
<a id="schema_PhysicalPlatformDetails"></a>
<a id="tocSphysicalplatformdetails"></a>
<a id="tocsphysicalplatformdetails"></a>

```json
{
  "location": "string"
}
```

Platform specific details for Physical Machines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field.|

<h2 id="tocS_PlatformDetails">PlatformDetails</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdetails"></a>
<a id="schema_PlatformDetails"></a>
<a id="tocSplatformdetails"></a>
<a id="tocsplatformdetails"></a>

```json
{
  "awsEc2Details": {
    "location": "string",
    "machineTypeLabel": "string"
  },
  "azureVmDetails": {
    "location": "string",
    "machineTypeLabel": "string",
    "provisioningState": "string"
  },
  "genericDetails": {
    "location": "string"
  },
  "physicalDetails": {
    "location": "string"
  },
  "vmwareDetails": {
    "esxVersion": "string",
    "osid": "string",
    "vcenterVersion": "string"
  }
}
```

Information about the platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsEc2Details|[AwsEc2PlatformDetails](#schemaawsec2platformdetails)|false|none|AWS EC2 specific details.|
|azureVmDetails|[AzureVmPlatformDetails](#schemaazurevmplatformdetails)|false|none|Azure VM specific details.|
|genericDetails|[GenericPlatformDetails](#schemagenericplatformdetails)|false|none|Generic platform details.|
|physicalDetails|[PhysicalPlatformDetails](#schemaphysicalplatformdetails)|false|none|Physical machines platform details.|
|vmwareDetails|[VmwarePlatformDetails](#schemavmwareplatformdetails)|false|none|VMware specific details.|

<h2 id="tocS_PreferenceSet">PreferenceSet</h2>
<!-- backwards compatibility -->
<a id="schemapreferenceset"></a>
<a id="schema_PreferenceSet"></a>
<a id="tocSpreferenceset"></a>
<a id="tocspreferenceset"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "updateTime": "string",
  "virtualMachinePreferences": {
    "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
    "computeEnginePreferences": {
      "licenseType": "LICENSE_TYPE_UNSPECIFIED",
      "machinePreferences": {
        "allowedMachineSeries": [
          {
            "code": "string"
          }
        ]
      },
      "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    },
    "regionPreferences": {
      "preferredRegions": [
        "string"
      ]
    },
    "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
  }
}
```

The preferences that apply to all assets in a given context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the preference set was created.|
|description|string|false|none|A description of the preference set.|
|displayName|string|false|none|User-friendly display name. Maximum length is 63 characters.|
|name|string|false|read-only|Output only. Name of the preference set.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the preference set was last updated.|
|virtualMachinePreferences|[VirtualMachinePreferences](#schemavirtualmachinepreferences)|false|none|A set of preferences that applies to all virtual machines in the context.|

<h2 id="tocS_RegionPreferences">RegionPreferences</h2>
<!-- backwards compatibility -->
<a id="schemaregionpreferences"></a>
<a id="schema_RegionPreferences"></a>
<a id="tocSregionpreferences"></a>
<a id="tocsregionpreferences"></a>

```json
{
  "preferredRegions": [
    "string"
  ]
}
```

The user preferences relating to target regions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preferredRegions|[string]|false|none|A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.|

<h2 id="tocS_RemoveAssetsFromGroupRequest">RemoveAssetsFromGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveassetsfromgrouprequest"></a>
<a id="schema_RemoveAssetsFromGroupRequest"></a>
<a id="tocSremoveassetsfromgrouprequest"></a>
<a id="tocsremoveassetsfromgrouprequest"></a>

```json
{
  "allowMissing": true,
  "assets": {
    "assetIds": [
      "string"
    ]
  },
  "requestId": "string"
}
```

A request to remove assets from a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMissing|boolean|false|none|Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.|
|assets|[AssetList](#schemaassetlist)|false|none|Required. List of assets to be removed. The maximum number of assets that can be removed in a single request is 1000.|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "summary": {
    "allAssetsStats": {
      "assetAge": {
        "dataPoints": [
          {
            "label": "string",
            "value": 0
          }
        ]
      },
      "coreCountHistogram": {
        "buckets": [
          {
            "count": "string",
            "lowerBound": "string",
            "upperBound": "string"
          }
        ]
      },
      "memoryBytesHistogram": {
        "buckets": [
          {
            "count": "string",
            "lowerBound": "string",
            "upperBound": "string"
          }
        ]
      },
      "memoryUtilization": {
        "dataPoints": [
          {
            "label": "string",
            "value": 0
          }
        ]
      },
      "memoryUtilizationChart": {
        "free": "string",
        "used": "string"
      },
      "operatingSystem": {
        "dataPoints": [
          {
            "label": "string",
            "value": 0
          }
        ]
      },
      "storageBytesHistogram": {
        "buckets": [
          {
            "count": "string",
            "lowerBound": "string",
            "upperBound": "string"
          }
        ]
      },
      "storageUtilization": {
        "dataPoints": [
          {
            "label": "string",
            "value": 0
          }
        ]
      },
      "storageUtilizationChart": {
        "free": "string",
        "used": "string"
      },
      "totalAssets": "string",
      "totalCores": "string",
      "totalMemoryBytes": "string",
      "totalStorageBytes": "string"
    },
    "groupFindings": [
      {
        "assetAggregateStats": {
          "assetAge": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "coreCountHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "memoryBytesHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "memoryUtilization": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "memoryUtilizationChart": {
            "free": "string",
            "used": "string"
          },
          "operatingSystem": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "storageBytesHistogram": {
            "buckets": [
              {
                "count": "string",
                "lowerBound": "string",
                "upperBound": "string"
              }
            ]
          },
          "storageUtilization": {
            "dataPoints": [
              {
                "label": "string",
                "value": 0
              }
            ]
          },
          "storageUtilizationChart": {
            "free": "string",
            "used": "string"
          },
          "totalAssets": "string",
          "totalCores": "string",
          "totalMemoryBytes": "string",
          "totalStorageBytes": "string"
        },
        "description": "string",
        "displayName": "string",
        "overlappingAssetCount": "string",
        "preferenceSetFindings": [
          {
            "description": "string",
            "displayName": "string",
            "machineFinding": {
              "allocatedAssetCount": "string",
              "allocatedDiskTypes": [
                "PERSISTENT_DISK_TYPE_UNSPECIFIED"
              ],
              "allocatedRegions": [
                "string"
              ],
              "machineSeriesAllocations": [
                {
                  "allocatedAssetCount": "string",
                  "machineSeries": {
                    "code": "string"
                  }
                }
              ]
            },
            "machinePreferences": {
              "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
              "computeEnginePreferences": {
                "licenseType": "LICENSE_TYPE_UNSPECIFIED",
                "machinePreferences": {
                  "allowedMachineSeries": [
                    {
                      "code": "string"
                    }
                  ]
                },
                "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
              },
              "regionPreferences": {
                "preferredRegions": [
                  "string"
                ]
              },
              "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
            },
            "monthlyCostCompute": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "monthlyCostNetworkEgress": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "monthlyCostOsLicense": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "monthlyCostOther": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "monthlyCostStorage": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "monthlyCostTotal": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "preferredRegion": "string",
            "pricingTrack": "string",
            "topPriority": "string"
          }
        ]
      }
    ]
  },
  "type": "TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

Report represents a point-in-time rendering of the ReportConfig results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Creation timestamp.|
|description|string|false|none|Free-text description.|
|displayName|string|false|none|User-friendly display name. Maximum length is 63 characters.|
|name|string|false|read-only|Output only. Name of resource.|
|state|string|false|none|Report creation state.|
|summary|[ReportSummary](#schemareportsummary)|false|none|Output only. Summary view of the Report.|
|type|string|false|none|Report type.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update timestamp.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|SUCCEEDED|
|state|FAILED|
|type|TYPE_UNSPECIFIED|
|type|TOTAL_COST_OF_OWNERSHIP|

<h2 id="tocS_ReportAssetFramesResponse">ReportAssetFramesResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportassetframesresponse"></a>
<a id="schema_ReportAssetFramesResponse"></a>
<a id="tocSreportassetframesresponse"></a>
<a id="tocsreportassetframesresponse"></a>

```json
{}
```

A response to a call to `ReportAssetFrame`.

<h2 id="tocS_ReportConfig">ReportConfig</h2>
<!-- backwards compatibility -->
<a id="schemareportconfig"></a>
<a id="schema_ReportConfig"></a>
<a id="tocSreportconfig"></a>
<a id="tocsreportconfig"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "groupPreferencesetAssignments": [
    {
      "group": "string",
      "preferenceSet": "string"
    }
  ],
  "name": "string",
  "updateTime": "string"
}
```

The groups and associated preference sets on which we can generate reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Free-text description.|
|displayName|string|false|none|User-friendly display name. Maximum length is 63 characters.|
|groupPreferencesetAssignments|[[ReportConfigGroupPreferenceSetAssignment](#schemareportconfiggrouppreferencesetassignment)]|false|none|Required. Collection of combinations of groups and preference sets.|
|name|string|false|read-only|Output only. Name of resource.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was last updated.|

<h2 id="tocS_ReportConfigGroupPreferenceSetAssignment">ReportConfigGroupPreferenceSetAssignment</h2>
<!-- backwards compatibility -->
<a id="schemareportconfiggrouppreferencesetassignment"></a>
<a id="schema_ReportConfigGroupPreferenceSetAssignment"></a>
<a id="tocSreportconfiggrouppreferencesetassignment"></a>
<a id="tocsreportconfiggrouppreferencesetassignment"></a>

```json
{
  "group": "string",
  "preferenceSet": "string"
}
```

Represents a combination of a group with a preference set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|string|false|none|Required. Name of the group.|
|preferenceSet|string|false|none|Required. Name of the Preference Set.|

<h2 id="tocS_ReportSummary">ReportSummary</h2>
<!-- backwards compatibility -->
<a id="schemareportsummary"></a>
<a id="schema_ReportSummary"></a>
<a id="tocSreportsummary"></a>
<a id="tocsreportsummary"></a>

```json
{
  "allAssetsStats": {
    "assetAge": {
      "dataPoints": [
        {
          "label": "string",
          "value": 0
        }
      ]
    },
    "coreCountHistogram": {
      "buckets": [
        {
          "count": "string",
          "lowerBound": "string",
          "upperBound": "string"
        }
      ]
    },
    "memoryBytesHistogram": {
      "buckets": [
        {
          "count": "string",
          "lowerBound": "string",
          "upperBound": "string"
        }
      ]
    },
    "memoryUtilization": {
      "dataPoints": [
        {
          "label": "string",
          "value": 0
        }
      ]
    },
    "memoryUtilizationChart": {
      "free": "string",
      "used": "string"
    },
    "operatingSystem": {
      "dataPoints": [
        {
          "label": "string",
          "value": 0
        }
      ]
    },
    "storageBytesHistogram": {
      "buckets": [
        {
          "count": "string",
          "lowerBound": "string",
          "upperBound": "string"
        }
      ]
    },
    "storageUtilization": {
      "dataPoints": [
        {
          "label": "string",
          "value": 0
        }
      ]
    },
    "storageUtilizationChart": {
      "free": "string",
      "used": "string"
    },
    "totalAssets": "string",
    "totalCores": "string",
    "totalMemoryBytes": "string",
    "totalStorageBytes": "string"
  },
  "groupFindings": [
    {
      "assetAggregateStats": {
        "assetAge": {
          "dataPoints": [
            {
              "label": "string",
              "value": 0
            }
          ]
        },
        "coreCountHistogram": {
          "buckets": [
            {
              "count": "string",
              "lowerBound": "string",
              "upperBound": "string"
            }
          ]
        },
        "memoryBytesHistogram": {
          "buckets": [
            {
              "count": "string",
              "lowerBound": "string",
              "upperBound": "string"
            }
          ]
        },
        "memoryUtilization": {
          "dataPoints": [
            {
              "label": "string",
              "value": 0
            }
          ]
        },
        "memoryUtilizationChart": {
          "free": "string",
          "used": "string"
        },
        "operatingSystem": {
          "dataPoints": [
            {
              "label": "string",
              "value": 0
            }
          ]
        },
        "storageBytesHistogram": {
          "buckets": [
            {
              "count": "string",
              "lowerBound": "string",
              "upperBound": "string"
            }
          ]
        },
        "storageUtilization": {
          "dataPoints": [
            {
              "label": "string",
              "value": 0
            }
          ]
        },
        "storageUtilizationChart": {
          "free": "string",
          "used": "string"
        },
        "totalAssets": "string",
        "totalCores": "string",
        "totalMemoryBytes": "string",
        "totalStorageBytes": "string"
      },
      "description": "string",
      "displayName": "string",
      "overlappingAssetCount": "string",
      "preferenceSetFindings": [
        {
          "description": "string",
          "displayName": "string",
          "machineFinding": {
            "allocatedAssetCount": "string",
            "allocatedDiskTypes": [
              "PERSISTENT_DISK_TYPE_UNSPECIFIED"
            ],
            "allocatedRegions": [
              "string"
            ],
            "machineSeriesAllocations": [
              {
                "allocatedAssetCount": "string",
                "machineSeries": {
                  "code": "string"
                }
              }
            ]
          },
          "machinePreferences": {
            "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
            "computeEnginePreferences": {
              "licenseType": "LICENSE_TYPE_UNSPECIFIED",
              "machinePreferences": {
                "allowedMachineSeries": [
                  {
                    "code": "string"
                  }
                ]
              },
              "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
            },
            "regionPreferences": {
              "preferredRegions": [
                "string"
              ]
            },
            "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
          },
          "monthlyCostCompute": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "monthlyCostNetworkEgress": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "monthlyCostOsLicense": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "monthlyCostOther": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "monthlyCostStorage": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "monthlyCostTotal": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "preferredRegion": "string",
          "pricingTrack": "string",
          "topPriority": "string"
        }
      ]
    }
  ]
}
```

Describes the Summary view of a Report, which contains aggregated values for all the groups and preference sets included in this Report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allAssetsStats|[ReportSummaryAssetAggregateStats](#schemareportsummaryassetaggregatestats)|false|none|Aggregate statistics for all the assets across all the groups.|
|groupFindings|[[ReportSummaryGroupFinding](#schemareportsummarygroupfinding)]|false|none|Findings for each Group included in this report.|

<h2 id="tocS_ReportSummaryAssetAggregateStats">ReportSummaryAssetAggregateStats</h2>
<!-- backwards compatibility -->
<a id="schemareportsummaryassetaggregatestats"></a>
<a id="schema_ReportSummaryAssetAggregateStats"></a>
<a id="tocSreportsummaryassetaggregatestats"></a>
<a id="tocsreportsummaryassetaggregatestats"></a>

```json
{
  "assetAge": {
    "dataPoints": [
      {
        "label": "string",
        "value": 0
      }
    ]
  },
  "coreCountHistogram": {
    "buckets": [
      {
        "count": "string",
        "lowerBound": "string",
        "upperBound": "string"
      }
    ]
  },
  "memoryBytesHistogram": {
    "buckets": [
      {
        "count": "string",
        "lowerBound": "string",
        "upperBound": "string"
      }
    ]
  },
  "memoryUtilization": {
    "dataPoints": [
      {
        "label": "string",
        "value": 0
      }
    ]
  },
  "memoryUtilizationChart": {
    "free": "string",
    "used": "string"
  },
  "operatingSystem": {
    "dataPoints": [
      {
        "label": "string",
        "value": 0
      }
    ]
  },
  "storageBytesHistogram": {
    "buckets": [
      {
        "count": "string",
        "lowerBound": "string",
        "upperBound": "string"
      }
    ]
  },
  "storageUtilization": {
    "dataPoints": [
      {
        "label": "string",
        "value": 0
      }
    ]
  },
  "storageUtilizationChart": {
    "free": "string",
    "used": "string"
  },
  "totalAssets": "string",
  "totalCores": "string",
  "totalMemoryBytes": "string",
  "totalStorageBytes": "string"
}
```

Aggregate statistics for a collection of assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetAge|[ReportSummaryChartData](#schemareportsummarychartdata)|false|none|Count of assets grouped by age.|
|coreCountHistogram|[ReportSummaryHistogramChartData](#schemareportsummaryhistogramchartdata)|false|none|Histogram showing a distribution of CPU core counts.|
|memoryBytesHistogram|[ReportSummaryHistogramChartData](#schemareportsummaryhistogramchartdata)|false|none|Histogram showing a distribution of memory sizes.|
|memoryUtilization|[ReportSummaryChartData](#schemareportsummarychartdata)|false|none|Total memory split into Used/Free buckets.|
|memoryUtilizationChart|[ReportSummaryUtilizationChartData](#schemareportsummaryutilizationchartdata)|false|none|Total memory split into Used/Free buckets.|
|operatingSystem|[ReportSummaryChartData](#schemareportsummarychartdata)|false|none|Count of assets grouped by Operating System families.|
|storageBytesHistogram|[ReportSummaryHistogramChartData](#schemareportsummaryhistogramchartdata)|false|none|Histogram showing a distribution of memory sizes.|
|storageUtilization|[ReportSummaryChartData](#schemareportsummarychartdata)|false|none|Total storage split into Used/Free buckets.|
|storageUtilizationChart|[ReportSummaryUtilizationChartData](#schemareportsummaryutilizationchartdata)|false|none|Total memory split into Used/Free buckets.|
|totalAssets|string(int64)|false|none|Count of the number of unique assets in this collection.|
|totalCores|string(int64)|false|none|Sum of the CPU core count of all the assets in this collection.|
|totalMemoryBytes|string(int64)|false|none|Sum of the memory in bytes of all the assets in this collection.|
|totalStorageBytes|string(int64)|false|none|Sum of persistent storage in bytes of all the assets in this collection.|

<h2 id="tocS_ReportSummaryChartData">ReportSummaryChartData</h2>
<!-- backwards compatibility -->
<a id="schemareportsummarychartdata"></a>
<a id="schema_ReportSummaryChartData"></a>
<a id="tocSreportsummarychartdata"></a>
<a id="tocsreportsummarychartdata"></a>

```json
{
  "dataPoints": [
    {
      "label": "string",
      "value": 0
    }
  ]
}
```

Describes a collection of data points rendered as a Chart.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataPoints|[[ReportSummaryChartDataDataPoint](#schemareportsummarychartdatadatapoint)]|false|none|Each data point in the chart is represented as a name-value pair with the name being the x-axis label, and the value being the y-axis value.|

<h2 id="tocS_ReportSummaryChartDataDataPoint">ReportSummaryChartDataDataPoint</h2>
<!-- backwards compatibility -->
<a id="schemareportsummarychartdatadatapoint"></a>
<a id="schema_ReportSummaryChartDataDataPoint"></a>
<a id="tocSreportsummarychartdatadatapoint"></a>
<a id="tocsreportsummarychartdatadatapoint"></a>

```json
{
  "label": "string",
  "value": 0
}
```

Describes a single data point in the Chart.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|The X-axis label for this data point.|
|value|number(double)|false|none|The Y-axis value for this data point.|

<h2 id="tocS_ReportSummaryGroupFinding">ReportSummaryGroupFinding</h2>
<!-- backwards compatibility -->
<a id="schemareportsummarygroupfinding"></a>
<a id="schema_ReportSummaryGroupFinding"></a>
<a id="tocSreportsummarygroupfinding"></a>
<a id="tocsreportsummarygroupfinding"></a>

```json
{
  "assetAggregateStats": {
    "assetAge": {
      "dataPoints": [
        {
          "label": "string",
          "value": 0
        }
      ]
    },
    "coreCountHistogram": {
      "buckets": [
        {
          "count": "string",
          "lowerBound": "string",
          "upperBound": "string"
        }
      ]
    },
    "memoryBytesHistogram": {
      "buckets": [
        {
          "count": "string",
          "lowerBound": "string",
          "upperBound": "string"
        }
      ]
    },
    "memoryUtilization": {
      "dataPoints": [
        {
          "label": "string",
          "value": 0
        }
      ]
    },
    "memoryUtilizationChart": {
      "free": "string",
      "used": "string"
    },
    "operatingSystem": {
      "dataPoints": [
        {
          "label": "string",
          "value": 0
        }
      ]
    },
    "storageBytesHistogram": {
      "buckets": [
        {
          "count": "string",
          "lowerBound": "string",
          "upperBound": "string"
        }
      ]
    },
    "storageUtilization": {
      "dataPoints": [
        {
          "label": "string",
          "value": 0
        }
      ]
    },
    "storageUtilizationChart": {
      "free": "string",
      "used": "string"
    },
    "totalAssets": "string",
    "totalCores": "string",
    "totalMemoryBytes": "string",
    "totalStorageBytes": "string"
  },
  "description": "string",
  "displayName": "string",
  "overlappingAssetCount": "string",
  "preferenceSetFindings": [
    {
      "description": "string",
      "displayName": "string",
      "machineFinding": {
        "allocatedAssetCount": "string",
        "allocatedDiskTypes": [
          "PERSISTENT_DISK_TYPE_UNSPECIFIED"
        ],
        "allocatedRegions": [
          "string"
        ],
        "machineSeriesAllocations": [
          {
            "allocatedAssetCount": "string",
            "machineSeries": {
              "code": "string"
            }
          }
        ]
      },
      "machinePreferences": {
        "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
        "computeEnginePreferences": {
          "licenseType": "LICENSE_TYPE_UNSPECIFIED",
          "machinePreferences": {
            "allowedMachineSeries": [
              {
                "code": "string"
              }
            ]
          },
          "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
        },
        "regionPreferences": {
          "preferredRegions": [
            "string"
          ]
        },
        "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
      },
      "monthlyCostCompute": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "monthlyCostNetworkEgress": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "monthlyCostOsLicense": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "monthlyCostOther": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "monthlyCostStorage": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "monthlyCostTotal": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "preferredRegion": "string",
      "pricingTrack": "string",
      "topPriority": "string"
    }
  ]
}
```

Summary Findings for a specific Group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetAggregateStats|[ReportSummaryAssetAggregateStats](#schemareportsummaryassetaggregatestats)|false|none|Summary statistics for all the assets in this group.|
|description|string|false|none|Description for the Group.|
|displayName|string|false|none|Display Name for the Group.|
|overlappingAssetCount|string(int64)|false|none|Count of the number of assets in this group which are also included in another group within the same report.|
|preferenceSetFindings|[[ReportSummaryGroupPreferenceSetFinding](#schemareportsummarygrouppreferencesetfinding)]|false|none|Findings for each of the PreferenceSets for this group.|

<h2 id="tocS_ReportSummaryGroupPreferenceSetFinding">ReportSummaryGroupPreferenceSetFinding</h2>
<!-- backwards compatibility -->
<a id="schemareportsummarygrouppreferencesetfinding"></a>
<a id="schema_ReportSummaryGroupPreferenceSetFinding"></a>
<a id="tocSreportsummarygrouppreferencesetfinding"></a>
<a id="tocsreportsummarygrouppreferencesetfinding"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "machineFinding": {
    "allocatedAssetCount": "string",
    "allocatedDiskTypes": [
      "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    ],
    "allocatedRegions": [
      "string"
    ],
    "machineSeriesAllocations": [
      {
        "allocatedAssetCount": "string",
        "machineSeries": {
          "code": "string"
        }
      }
    ]
  },
  "machinePreferences": {
    "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
    "computeEnginePreferences": {
      "licenseType": "LICENSE_TYPE_UNSPECIFIED",
      "machinePreferences": {
        "allowedMachineSeries": [
          {
            "code": "string"
          }
        ]
      },
      "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    },
    "regionPreferences": {
      "preferredRegions": [
        "string"
      ]
    },
    "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
  },
  "monthlyCostCompute": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "monthlyCostNetworkEgress": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "monthlyCostOsLicense": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "monthlyCostOther": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "monthlyCostStorage": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "monthlyCostTotal": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "preferredRegion": "string",
  "pricingTrack": "string",
  "topPriority": "string"
}
```

Summary Findings for a specific Group/PreferenceSet combination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description for the Preference Set.|
|displayName|string|false|none|Display Name of the Preference Set|
|machineFinding|[ReportSummaryMachineFinding](#schemareportsummarymachinefinding)|false|none|A set of findings that applies to all machines in the input.|
|machinePreferences|[VirtualMachinePreferences](#schemavirtualmachinepreferences)|false|none|A set of preferences that applies to all machines in the context.|
|monthlyCostCompute|[Money](#schemamoney)|false|none|Compute monthly cost for this preference set.|
|monthlyCostNetworkEgress|[Money](#schemamoney)|false|none|Network Egress monthly cost for this preference set.|
|monthlyCostOsLicense|[Money](#schemamoney)|false|none|Licensing monthly cost for this preference set.|
|monthlyCostOther|[Money](#schemamoney)|false|none|Miscellaneous monthly cost for this preference set.|
|monthlyCostStorage|[Money](#schemamoney)|false|none|Storage monthly cost for this preference set.|
|monthlyCostTotal|[Money](#schemamoney)|false|none|Total monthly cost for this preference set.|
|preferredRegion|string|false|none|Target region for this Preference Set|
|pricingTrack|string|false|none|Text describing the pricing track specified for this Preference Set|
|topPriority|string|false|none|Text describing the business priority specified for this Preference Set|

<h2 id="tocS_ReportSummaryHistogramChartData">ReportSummaryHistogramChartData</h2>
<!-- backwards compatibility -->
<a id="schemareportsummaryhistogramchartdata"></a>
<a id="schema_ReportSummaryHistogramChartData"></a>
<a id="tocSreportsummaryhistogramchartdata"></a>
<a id="tocsreportsummaryhistogramchartdata"></a>

```json
{
  "buckets": [
    {
      "count": "string",
      "lowerBound": "string",
      "upperBound": "string"
    }
  ]
}
```

A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|[[ReportSummaryHistogramChartDataBucket](#schemareportsummaryhistogramchartdatabucket)]|false|none|Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity.|

<h2 id="tocS_ReportSummaryHistogramChartDataBucket">ReportSummaryHistogramChartDataBucket</h2>
<!-- backwards compatibility -->
<a id="schemareportsummaryhistogramchartdatabucket"></a>
<a id="schema_ReportSummaryHistogramChartDataBucket"></a>
<a id="tocSreportsummaryhistogramchartdatabucket"></a>
<a id="tocsreportsummaryhistogramchartdatabucket"></a>

```json
{
  "count": "string",
  "lowerBound": "string",
  "upperBound": "string"
}
```

A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|Count of items in the bucket.|
|lowerBound|string(int64)|false|none|Lower bound - inclusive.|
|upperBound|string(int64)|false|none|Upper bound - exclusive.|

<h2 id="tocS_ReportSummaryMachineFinding">ReportSummaryMachineFinding</h2>
<!-- backwards compatibility -->
<a id="schemareportsummarymachinefinding"></a>
<a id="schema_ReportSummaryMachineFinding"></a>
<a id="tocSreportsummarymachinefinding"></a>
<a id="tocsreportsummarymachinefinding"></a>

```json
{
  "allocatedAssetCount": "string",
  "allocatedDiskTypes": [
    "PERSISTENT_DISK_TYPE_UNSPECIFIED"
  ],
  "allocatedRegions": [
    "string"
  ],
  "machineSeriesAllocations": [
    {
      "allocatedAssetCount": "string",
      "machineSeries": {
        "code": "string"
      }
    }
  ]
}
```

A set of findings that applies to assets of type Virtual/Physical Machine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocatedAssetCount|string(int64)|false|none|Count of assets which were allocated.|
|allocatedDiskTypes|[string]|false|none|Set of disk types allocated to assets.|
|allocatedRegions|[string]|false|none|Set of regions in which the assets were allocated.|
|machineSeriesAllocations|[[ReportSummaryMachineSeriesAllocation](#schemareportsummarymachineseriesallocation)]|false|none|Distribution of assets based on the Machine Series.|

#### Enumerated Values

|Property|Value|
|---|---|
|allocatedDiskTypes|PERSISTENT_DISK_TYPE_UNSPECIFIED|
|allocatedDiskTypes|PERSISTENT_DISK_TYPE_STANDARD|
|allocatedDiskTypes|PERSISTENT_DISK_TYPE_BALANCED|
|allocatedDiskTypes|PERSISTENT_DISK_TYPE_SSD|

<h2 id="tocS_ReportSummaryMachineSeriesAllocation">ReportSummaryMachineSeriesAllocation</h2>
<!-- backwards compatibility -->
<a id="schemareportsummarymachineseriesallocation"></a>
<a id="schema_ReportSummaryMachineSeriesAllocation"></a>
<a id="tocSreportsummarymachineseriesallocation"></a>
<a id="tocsreportsummarymachineseriesallocation"></a>

```json
{
  "allocatedAssetCount": "string",
  "machineSeries": {
    "code": "string"
  }
}
```

Represents a data point tracking the count of assets allocated for a specific Machine Series.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocatedAssetCount|string(int64)|false|none|Count of assets allocated to this machine series.|
|machineSeries|[MachineSeries](#schemamachineseries)|false|none|The Machine Series (e.g. "E2", "N2")|

<h2 id="tocS_ReportSummaryUtilizationChartData">ReportSummaryUtilizationChartData</h2>
<!-- backwards compatibility -->
<a id="schemareportsummaryutilizationchartdata"></a>
<a id="schema_ReportSummaryUtilizationChartData"></a>
<a id="tocSreportsummaryutilizationchartdata"></a>
<a id="tocsreportsummaryutilizationchartdata"></a>

```json
{
  "free": "string",
  "used": "string"
}
```

Utilization Chart is a specific type of visualization which displays a metric classified into "Used" and "Free" buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|free|string(int64)|false|none|Aggregate value which falls into the "Free" bucket.|
|used|string(int64)|false|none|Aggregate value which falls into the "Used" bucket.|

<h2 id="tocS_RunImportJobRequest">RunImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunimportjobrequest"></a>
<a id="schema_RunImportJobRequest"></a>
<a id="tocSrunimportjobrequest"></a>
<a id="tocsrunimportjobrequest"></a>

```json
{
  "requestId": "string"
}
```

A request to run an import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_RunningProcess">RunningProcess</h2>
<!-- backwards compatibility -->
<a id="schemarunningprocess"></a>
<a id="schema_RunningProcess"></a>
<a id="tocSrunningprocess"></a>
<a id="tocsrunningprocess"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "cmdline": "string",
  "exePath": "string",
  "pid": "string",
  "user": "string"
}
```

Guest OS running process details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Process extended attributes.|
|cmdline|string|false|none|Process full command line.|
|exePath|string|false|none|Process binary path.|
|pid|string(int64)|false|none|Process ID.|
|user|string|false|none|User running the process.|

<h2 id="tocS_RunningProcessList">RunningProcessList</h2>
<!-- backwards compatibility -->
<a id="schemarunningprocesslist"></a>
<a id="schema_RunningProcessList"></a>
<a id="tocSrunningprocesslist"></a>
<a id="tocsrunningprocesslist"></a>

```json
{
  "processes": [
    {
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "cmdline": "string",
      "exePath": "string",
      "pid": "string",
      "user": "string"
    }
  ]
}
```

List of running guest OS processes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processes|[[RunningProcess](#schemarunningprocess)]|false|none|Running process entries.|

<h2 id="tocS_RunningService">RunningService</h2>
<!-- backwards compatibility -->
<a id="schemarunningservice"></a>
<a id="schema_RunningService"></a>
<a id="tocSrunningservice"></a>
<a id="tocsrunningservice"></a>

```json
{
  "cmdline": "string",
  "exePath": "string",
  "name": "string",
  "pid": "string",
  "startMode": "string",
  "state": "string",
  "status": "string"
}
```

Guest OS running service details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cmdline|string|false|none|Service command line.|
|exePath|string|false|none|Service binary path.|
|name|string|false|none|Service name.|
|pid|string(int64)|false|none|Service pid.|
|startMode|string|false|none|Service start mode (raw, OS-agnostic).|
|state|string|false|none|Service state (raw, OS-agnostic).|
|status|string|false|none|Service status.|

<h2 id="tocS_RunningServiceList">RunningServiceList</h2>
<!-- backwards compatibility -->
<a id="schemarunningservicelist"></a>
<a id="schema_RunningServiceList"></a>
<a id="tocSrunningservicelist"></a>
<a id="tocsrunningservicelist"></a>

```json
{
  "services": [
    {
      "cmdline": "string",
      "exePath": "string",
      "name": "string",
      "pid": "string",
      "startMode": "string",
      "state": "string",
      "status": "string"
    }
  ]
}
```

List of running guest OS services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|services|[[RunningService](#schemarunningservice)]|false|none|Running service entries.|

<h2 id="tocS_RuntimeNetworkInfo">RuntimeNetworkInfo</h2>
<!-- backwards compatibility -->
<a id="schemaruntimenetworkinfo"></a>
<a id="schema_RuntimeNetworkInfo"></a>
<a id="tocSruntimenetworkinfo"></a>
<a id="tocsruntimenetworkinfo"></a>

```json
{
  "connections": {
    "entries": [
      {
        "localIpAddress": "string",
        "localPort": 0,
        "pid": "string",
        "processName": "string",
        "protocol": "string",
        "remoteIpAddress": "string",
        "remotePort": 0,
        "state": "string"
      }
    ]
  },
  "netstat": "string",
  "netstatTime": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  }
}
```

Runtime networking information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[NetworkConnectionList](#schemanetworkconnectionlist)|false|none|Network connections.|
|netstat|string|false|none|Netstat (raw, OS-agnostic).|
|netstatTime|[DateTime](#schemadatetime)|false|none|Netstat time collected.|

<h2 id="tocS_Selinux">Selinux</h2>
<!-- backwards compatibility -->
<a id="schemaselinux"></a>
<a id="schema_Selinux"></a>
<a id="tocSselinux"></a>
<a id="tocsselinux"></a>

```json
{
  "enabled": true,
  "mode": "string"
}
```

SELinux details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Is SELinux enabled.|
|mode|string|false|none|SELinux mode enforcing / permissive.|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "name": "string",
  "preferenceSet": "string"
}
```

Describes the Migration Center settings related to the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. The name of the resource.|
|preferenceSet|string|false|none|The preference set used by default for a project.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "isManaged": true,
  "name": "string",
  "pendingFrameCount": 0,
  "priority": 0,
  "type": "SOURCE_TYPE_UNKNOWN",
  "updateTime": "string"
}
```

Source represents an object from which asset information is streamed to Migration Center.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the source was created.|
|description|string|false|none|Free-text description.|
|displayName|string|false|none|User-friendly display name.|
|isManaged|boolean|false|none|If `true`, the source is managed by other service(s).|
|name|string|false|read-only|Output only. The full name of the source.|
|pendingFrameCount|integer(int32)|false|read-only|Output only. Number of frames that are still being processed.|
|priority|integer(int32)|false|none|The information confidence of the source. The higher the value, the higher the confidence.|
|type|string|false|none|Data source type.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the source was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SOURCE_TYPE_UNKNOWN|
|type|SOURCE_TYPE_UPLOAD|
|type|SOURCE_TYPE_GUEST_OS_SCAN|
|type|SOURCE_TYPE_INVENTORY_SCAN|
|type|SOURCE_TYPE_CUSTOM|

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

<h2 id="tocS_TimeZone">TimeZone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_TimeZone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "id": "string",
  "version": "string"
}
```

Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|IANA Time Zone Database time zone, e.g. "America/New_York".|
|version|string|false|none|Optional. IANA Time Zone Database version number, e.g. "2019a".|

<h2 id="tocS_UpdateAssetRequest">UpdateAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetrequest"></a>
<a id="schema_UpdateAssetRequest"></a>
<a id="tocSupdateassetrequest"></a>
<a id="tocsupdateassetrequest"></a>

```json
{
  "asset": {
    "assignedGroups": [
      "string"
    ],
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "createTime": "string",
    "insightList": {
      "insights": [
        {
          "migrationInsight": {
            "computeEngineTarget": {
              "shape": {
                "logicalCoreCount": 0,
                "machineType": "string",
                "memoryMb": 0,
                "physicalCoreCount": 0,
                "series": "string"
              }
            },
            "fit": {
              "fitLevel": "FIT_LEVEL_UNSPECIFIED"
            },
            "gkeTarget": {},
            "vmwareEngineTarget": {}
          }
        }
      ],
      "updateTime": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "performanceData": {
      "dailyResourceUsageAggregations": [
        {
          "cpu": {
            "utilizationPercentage": {
              "average": 0,
              "median": 0,
              "ninteyFifthPercentile": 0,
              "peak": 0
            }
          },
          "date": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "disk": {
            "iops": {
              "average": 0,
              "median": 0,
              "ninteyFifthPercentile": 0,
              "peak": 0
            }
          },
          "memory": {
            "utilizationPercentage": {
              "average": 0,
              "median": 0,
              "ninteyFifthPercentile": 0,
              "peak": 0
            }
          },
          "network": {
            "egressBps": {
              "average": 0,
              "median": 0,
              "ninteyFifthPercentile": 0,
              "peak": 0
            },
            "ingressBps": {
              "average": 0,
              "median": 0,
              "ninteyFifthPercentile": 0,
              "peak": 0
            }
          }
        }
      ]
    },
    "sources": [
      "string"
    ],
    "updateTime": "string",
    "virtualMachineDetails": {
      "coreCount": 0,
      "createTime": "string",
      "guestOs": {
        "config": {
          "fstab": {
            "entries": [
              {
                "file": "string",
                "freq": 0,
                "mntops": "string",
                "passno": 0,
                "spec": "string",
                "vfstype": "string"
              }
            ]
          },
          "hosts": {
            "entries": [
              {
                "hostNames": [
                  "string"
                ],
                "ip": "string"
              }
            ]
          },
          "issue": "string",
          "nfsExports": {
            "entries": [
              {
                "exportDirectory": "string",
                "hosts": [
                  "string"
                ]
              }
            ]
          },
          "selinux": {
            "enabled": true,
            "mode": "string"
          }
        },
        "runtime": {
          "domain": "string",
          "installedApps": {
            "entries": [
              {
                "name": "string",
                "path": "string",
                "time": "string",
                "vendor": "string",
                "version": "string"
              }
            ]
          },
          "lastUptime": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "machineName": "string",
          "networkInfo": {
            "connections": {
              "entries": [
                {
                  "localIpAddress": "string",
                  "localPort": 0,
                  "pid": "string",
                  "processName": "string",
                  "protocol": "string",
                  "remoteIpAddress": "string",
                  "remotePort": 0,
                  "state": "string"
                }
              ]
            },
            "netstat": "string",
            "netstatTime": {
              "day": 0,
              "hours": 0,
              "minutes": 0,
              "month": 0,
              "nanos": 0,
              "seconds": 0,
              "timeZone": {
                "id": "string",
                "version": "string"
              },
              "utcOffset": "string",
              "year": 0
            }
          },
          "openFileList": {
            "entries": [
              {
                "command": "string",
                "filePath": "string",
                "fileType": "string",
                "user": "string"
              }
            ]
          },
          "processes": {
            "processes": [
              {
                "attributes": {
                  "property1": "string",
                  "property2": "string"
                },
                "cmdline": "string",
                "exePath": "string",
                "pid": "string",
                "user": "string"
              }
            ]
          },
          "services": {
            "services": [
              {
                "cmdline": "string",
                "exePath": "string",
                "name": "string",
                "pid": "string",
                "startMode": "string",
                "state": "string",
                "status": "string"
              }
            ]
          }
        }
      },
      "memoryMb": 0,
      "osFamily": "OS_FAMILY_UNKNOWN",
      "osName": "string",
      "osVersion": "string",
      "platform": {
        "awsEc2Details": {
          "location": "string",
          "machineTypeLabel": "string"
        },
        "azureVmDetails": {
          "location": "string",
          "machineTypeLabel": "string",
          "provisioningState": "string"
        },
        "genericDetails": {
          "location": "string"
        },
        "physicalDetails": {
          "location": "string"
        },
        "vmwareDetails": {
          "esxVersion": "string",
          "osid": "string",
          "vcenterVersion": "string"
        }
      },
      "powerState": "string",
      "vcenterFolder": "string",
      "vcenterUrl": "string",
      "vcenterVmId": "string",
      "vmArchitecture": {
        "bios": {
          "biosManufacturer": "string",
          "biosName": "string",
          "biosReleaseDate": "string",
          "biosVersion": "string",
          "smbiosUuid": "string"
        },
        "cpuArchitecture": "string",
        "cpuManufacturer": "string",
        "cpuName": "string",
        "cpuSocketCount": 0,
        "cpuThreadCount": 0,
        "firmware": "string",
        "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
        "vendor": "string"
      },
      "vmDisks": {
        "disks": {
          "entries": [
            {
              "diskLabel": "string",
              "diskLabelType": "string",
              "hwAddress": "string",
              "interfaceType": "string",
              "partitions": {
                "entries": [
                  {}
                ]
              },
              "status": "string",
              "totalCapacityBytes": "string",
              "totalFreeBytes": "string",
              "vmwareConfig": {
                "backingType": "BACKING_TYPE_UNSPECIFIED",
                "rdmCompatibilityMode": "string",
                "shared": true,
                "vmdkDiskMode": "string"
              }
            }
          ]
        },
        "hddTotalCapacityBytes": "string",
        "hddTotalFreeBytes": "string",
        "lsblkJson": "string"
      },
      "vmName": "string",
      "vmNetwork": {
        "defaultGw": "string",
        "networkAdapters": {
          "networkAdapters": [
            {
              "adapterType": "string",
              "addresses": {
                "addresses": [
                  {
                    "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                    "bcast": "string",
                    "fqdn": "string",
                    "ipAddress": "string",
                    "subnetMask": "string"
                  }
                ]
              },
              "macAddress": "string"
            }
          ]
        },
        "primaryIpAddress": "string",
        "primaryMacAddress": "string",
        "publicIpAddress": "string"
      },
      "vmUuid": "string"
    }
  },
  "requestId": "string",
  "updateMask": "string"
}
```

A request to update an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|[Asset](#schemaasset)|false|none|Required. The resource being updated.|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|string(google-fieldmask)|false|none|Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.|

<h2 id="tocS_UploadFileInfo">UploadFileInfo</h2>
<!-- backwards compatibility -->
<a id="schemauploadfileinfo"></a>
<a id="schema_UploadFileInfo"></a>
<a id="tocSuploadfileinfo"></a>
<a id="tocsuploadfileinfo"></a>

```json
{
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "signedUri": "string",
  "uri": "string",
  "uriExpirationTime": "string"
}
```

A resource that contains a URI to which a data file can be uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|read-only|Output only. The headers that were used to sign the URL.|
|signedUri|string|false|read-only|Output only. Upload URI for the file.|
|uri|string|false|read-only|Output only. Upload URI for the file.|
|uriExpirationTime|string(google-datetime)|false|read-only|Output only. Expiration time of the upload URI.|

<h2 id="tocS_ValidateImportJobRequest">ValidateImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidateimportjobrequest"></a>
<a id="schema_ValidateImportJobRequest"></a>
<a id="tocSvalidateimportjobrequest"></a>
<a id="tocsvalidateimportjobrequest"></a>

```json
{
  "requestId": "string"
}
```

A request to validate an import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_ValidationReport">ValidationReport</h2>
<!-- backwards compatibility -->
<a id="schemavalidationreport"></a>
<a id="schema_ValidationReport"></a>
<a id="tocSvalidationreport"></a>
<a id="tocsvalidationreport"></a>

```json
{
  "fileValidations": [
    {
      "fileErrors": [
        {
          "errorDetails": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "fileName": "string",
      "partialReport": true,
      "rowErrors": [
        {
          "errors": [
            {
              "errorDetails": "string",
              "severity": "SEVERITY_UNSPECIFIED"
            }
          ],
          "rowNumber": 0,
          "vmName": "string",
          "vmUuid": "string"
        }
      ]
    }
  ],
  "jobErrors": [
    {
      "errorDetails": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ]
}
```

A resource that aggregates errors across import job files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileValidations|[[FileValidationReport](#schemafilevalidationreport)]|false|none|List of errors found in files.|
|jobErrors|[[ImportError](#schemaimporterror)]|false|none|List of job level errors.|

<h2 id="tocS_VirtualMachineArchitectureDetails">VirtualMachineArchitectureDetails</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachinearchitecturedetails"></a>
<a id="schema_VirtualMachineArchitectureDetails"></a>
<a id="tocSvirtualmachinearchitecturedetails"></a>
<a id="tocsvirtualmachinearchitecturedetails"></a>

```json
{
  "bios": {
    "biosManufacturer": "string",
    "biosName": "string",
    "biosReleaseDate": "string",
    "biosVersion": "string",
    "smbiosUuid": "string"
  },
  "cpuArchitecture": "string",
  "cpuManufacturer": "string",
  "cpuName": "string",
  "cpuSocketCount": 0,
  "cpuThreadCount": 0,
  "firmware": "string",
  "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
  "vendor": "string"
}
```

Details of the VM architecture.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bios|[BiosDetails](#schemabiosdetails)|false|none|BIOS Details.|
|cpuArchitecture|string|false|none|CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc.|
|cpuManufacturer|string|false|none|CPU manufacturer, e.g., "Intel", "AMD".|
|cpuName|string|false|none|CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc.|
|cpuSocketCount|integer(int32)|false|none|Number of processor sockets allocated to the machine.|
|cpuThreadCount|integer(int32)|false|none|Number of CPU threads allocated to the machine.|
|firmware|string|false|none|Firmware (BIOS/efi).|
|hyperthreading|string|false|none|CPU hyperthreading support.|
|vendor|string|false|none|Hardware vendor.|

#### Enumerated Values

|Property|Value|
|---|---|
|hyperthreading|HYPER_THREADING_UNSPECIFIED|
|hyperthreading|HYPER_THREADING_DISABLED|
|hyperthreading|HYPER_THREADING_ENABLED|

<h2 id="tocS_VirtualMachineDetails">VirtualMachineDetails</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachinedetails"></a>
<a id="schema_VirtualMachineDetails"></a>
<a id="tocSvirtualmachinedetails"></a>
<a id="tocsvirtualmachinedetails"></a>

```json
{
  "coreCount": 0,
  "createTime": "string",
  "guestOs": {
    "config": {
      "fstab": {
        "entries": [
          {
            "file": "string",
            "freq": 0,
            "mntops": "string",
            "passno": 0,
            "spec": "string",
            "vfstype": "string"
          }
        ]
      },
      "hosts": {
        "entries": [
          {
            "hostNames": [
              "string"
            ],
            "ip": "string"
          }
        ]
      },
      "issue": "string",
      "nfsExports": {
        "entries": [
          {
            "exportDirectory": "string",
            "hosts": [
              "string"
            ]
          }
        ]
      },
      "selinux": {
        "enabled": true,
        "mode": "string"
      }
    },
    "runtime": {
      "domain": "string",
      "installedApps": {
        "entries": [
          {
            "name": "string",
            "path": "string",
            "time": "string",
            "vendor": "string",
            "version": "string"
          }
        ]
      },
      "lastUptime": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "machineName": "string",
      "networkInfo": {
        "connections": {
          "entries": [
            {
              "localIpAddress": "string",
              "localPort": 0,
              "pid": "string",
              "processName": "string",
              "protocol": "string",
              "remoteIpAddress": "string",
              "remotePort": 0,
              "state": "string"
            }
          ]
        },
        "netstat": "string",
        "netstatTime": {
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "timeZone": {
            "id": "string",
            "version": "string"
          },
          "utcOffset": "string",
          "year": 0
        }
      },
      "openFileList": {
        "entries": [
          {
            "command": "string",
            "filePath": "string",
            "fileType": "string",
            "user": "string"
          }
        ]
      },
      "processes": {
        "processes": [
          {
            "attributes": {
              "property1": "string",
              "property2": "string"
            },
            "cmdline": "string",
            "exePath": "string",
            "pid": "string",
            "user": "string"
          }
        ]
      },
      "services": {
        "services": [
          {
            "cmdline": "string",
            "exePath": "string",
            "name": "string",
            "pid": "string",
            "startMode": "string",
            "state": "string",
            "status": "string"
          }
        ]
      }
    }
  },
  "memoryMb": 0,
  "osFamily": "OS_FAMILY_UNKNOWN",
  "osName": "string",
  "osVersion": "string",
  "platform": {
    "awsEc2Details": {
      "location": "string",
      "machineTypeLabel": "string"
    },
    "azureVmDetails": {
      "location": "string",
      "machineTypeLabel": "string",
      "provisioningState": "string"
    },
    "genericDetails": {
      "location": "string"
    },
    "physicalDetails": {
      "location": "string"
    },
    "vmwareDetails": {
      "esxVersion": "string",
      "osid": "string",
      "vcenterVersion": "string"
    }
  },
  "powerState": "string",
  "vcenterFolder": "string",
  "vcenterUrl": "string",
  "vcenterVmId": "string",
  "vmArchitecture": {
    "bios": {
      "biosManufacturer": "string",
      "biosName": "string",
      "biosReleaseDate": "string",
      "biosVersion": "string",
      "smbiosUuid": "string"
    },
    "cpuArchitecture": "string",
    "cpuManufacturer": "string",
    "cpuName": "string",
    "cpuSocketCount": 0,
    "cpuThreadCount": 0,
    "firmware": "string",
    "hyperthreading": "HYPER_THREADING_UNSPECIFIED",
    "vendor": "string"
  },
  "vmDisks": {
    "disks": {
      "entries": [
        {
          "diskLabel": "string",
          "diskLabelType": "string",
          "hwAddress": "string",
          "interfaceType": "string",
          "partitions": {
            "entries": [
              {}
            ]
          },
          "status": "string",
          "totalCapacityBytes": "string",
          "totalFreeBytes": "string",
          "vmwareConfig": {
            "backingType": "BACKING_TYPE_UNSPECIFIED",
            "rdmCompatibilityMode": "string",
            "shared": true,
            "vmdkDiskMode": "string"
          }
        }
      ]
    },
    "hddTotalCapacityBytes": "string",
    "hddTotalFreeBytes": "string",
    "lsblkJson": "string"
  },
  "vmName": "string",
  "vmNetwork": {
    "defaultGw": "string",
    "networkAdapters": {
      "networkAdapters": [
        {
          "adapterType": "string",
          "addresses": {
            "addresses": [
              {
                "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
                "bcast": "string",
                "fqdn": "string",
                "ipAddress": "string",
                "subnetMask": "string"
              }
            ]
          },
          "macAddress": "string"
        }
      ]
    },
    "primaryIpAddress": "string",
    "primaryMacAddress": "string",
    "publicIpAddress": "string"
  },
  "vmUuid": "string"
}
```

Details of a VirtualMachine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coreCount|integer(int32)|false|none|Number of CPU cores in the VirtualMachine. Must be non-negative.|
|createTime|string(google-datetime)|false|none|VM creation timestamp.|
|guestOs|[GuestOsDetails](#schemaguestosdetails)|false|none|Guest OS information.|
|memoryMb|integer(int32)|false|none|The amount of memory in the VirtualMachine. Must be non-negative.|
|osFamily|string|false|none|What family the OS belong to, if known.|
|osName|string|false|none|The name of the operating system running on the VirtualMachine.|
|osVersion|string|false|none|The version of the operating system running on the virtual machine.|
|platform|[PlatformDetails](#schemaplatformdetails)|false|none|Platform information.|
|powerState|string|false|none|Power state of VM (poweredOn or poweredOff).|
|vcenterFolder|string|false|none|Folder name in vCenter where asset resides.|
|vcenterUrl|string|false|none|vCenter URL used in collection.|
|vcenterVmId|string|false|none|vCenter VM ID.|
|vmArchitecture|[VirtualMachineArchitectureDetails](#schemavirtualmachinearchitecturedetails)|false|none|VM architecture details (vendor, cpu arch).|
|vmDisks|[VirtualMachineDiskDetails](#schemavirtualmachinediskdetails)|false|none|VM disk details.|
|vmName|string|false|none|Virtual Machine display name.|
|vmNetwork|[VirtualMachineNetworkDetails](#schemavirtualmachinenetworkdetails)|false|none|VM network details.|
|vmUuid|string|false|none|Virtual Machine unique identifier.|

#### Enumerated Values

|Property|Value|
|---|---|
|osFamily|OS_FAMILY_UNKNOWN|
|osFamily|OS_FAMILY_WINDOWS|
|osFamily|OS_FAMILY_LINUX|
|osFamily|OS_FAMILY_UNIX|

<h2 id="tocS_VirtualMachineDiskDetails">VirtualMachineDiskDetails</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachinediskdetails"></a>
<a id="schema_VirtualMachineDiskDetails"></a>
<a id="tocSvirtualmachinediskdetails"></a>
<a id="tocsvirtualmachinediskdetails"></a>

```json
{
  "disks": {
    "entries": [
      {
        "diskLabel": "string",
        "diskLabelType": "string",
        "hwAddress": "string",
        "interfaceType": "string",
        "partitions": {
          "entries": [
            {}
          ]
        },
        "status": "string",
        "totalCapacityBytes": "string",
        "totalFreeBytes": "string",
        "vmwareConfig": {
          "backingType": "BACKING_TYPE_UNSPECIFIED",
          "rdmCompatibilityMode": "string",
          "shared": true,
          "vmdkDiskMode": "string"
        }
      }
    ]
  },
  "hddTotalCapacityBytes": "string",
  "hddTotalFreeBytes": "string",
  "lsblkJson": "string"
}
```

Details of VM disks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disks|[DiskEntryList](#schemadiskentrylist)|false|none|List of disks.|
|hddTotalCapacityBytes|string(int64)|false|none|Disk total Capacity.|
|hddTotalFreeBytes|string(int64)|false|none|Total Disk Free Space.|
|lsblkJson|string|false|none|Raw lsblk output in json.|

<h2 id="tocS_VirtualMachineNetworkDetails">VirtualMachineNetworkDetails</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachinenetworkdetails"></a>
<a id="schema_VirtualMachineNetworkDetails"></a>
<a id="tocSvirtualmachinenetworkdetails"></a>
<a id="tocsvirtualmachinenetworkdetails"></a>

```json
{
  "defaultGw": "string",
  "networkAdapters": {
    "networkAdapters": [
      {
        "adapterType": "string",
        "addresses": {
          "addresses": [
            {
              "assignment": "ADDRESS_ASSIGNMENT_UNSPECIFIED",
              "bcast": "string",
              "fqdn": "string",
              "ipAddress": "string",
              "subnetMask": "string"
            }
          ]
        },
        "macAddress": "string"
      }
    ]
  },
  "primaryIpAddress": "string",
  "primaryMacAddress": "string",
  "publicIpAddress": "string"
}
```

Details of network adapters and settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultGw|string|false|none|Default gateway address.|
|networkAdapters|[NetworkAdapterList](#schemanetworkadapterlist)|false|none|List of network adapters.|
|primaryIpAddress|string|false|none|IP address of the machine.|
|primaryMacAddress|string|false|none|MAC address of the machine. This property is used to uniqly identify the machine.|
|publicIpAddress|string|false|none|Public IP address of the machine.|

<h2 id="tocS_VirtualMachinePreferences">VirtualMachinePreferences</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachinepreferences"></a>
<a id="schema_VirtualMachinePreferences"></a>
<a id="tocSvirtualmachinepreferences"></a>
<a id="tocsvirtualmachinepreferences"></a>

```json
{
  "commitmentPlan": "COMMITMENT_PLAN_UNSPECIFIED",
  "computeEnginePreferences": {
    "licenseType": "LICENSE_TYPE_UNSPECIFIED",
    "machinePreferences": {
      "allowedMachineSeries": [
        {
          "code": "string"
        }
      ]
    },
    "persistentDiskType": "PERSISTENT_DISK_TYPE_UNSPECIFIED"
  },
  "regionPreferences": {
    "preferredRegions": [
      "string"
    ]
  },
  "sizingOptimizationStrategy": "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
}
```

VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitmentPlan|string|false|none|Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.|
|computeEnginePreferences|[ComputeEnginePreferences](#schemacomputeenginepreferences)|false|none|Compute Engine preferences concern insights and recommendations for Compute Engine target.|
|regionPreferences|[RegionPreferences](#schemaregionpreferences)|false|none|Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with.|
|sizingOptimizationStrategy|string|false|none|Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.|

#### Enumerated Values

|Property|Value|
|---|---|
|commitmentPlan|COMMITMENT_PLAN_UNSPECIFIED|
|commitmentPlan|COMMITMENT_PLAN_NONE|
|commitmentPlan|COMMITMENT_PLAN_ONE_YEAR|
|commitmentPlan|COMMITMENT_PLAN_THREE_YEARS|
|sizingOptimizationStrategy|SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED|
|sizingOptimizationStrategy|SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE|
|sizingOptimizationStrategy|SIZING_OPTIMIZATION_STRATEGY_MODERATE|
|sizingOptimizationStrategy|SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE|

<h2 id="tocS_VmwareDiskConfig">VmwareDiskConfig</h2>
<!-- backwards compatibility -->
<a id="schemavmwarediskconfig"></a>
<a id="schema_VmwareDiskConfig"></a>
<a id="tocSvmwarediskconfig"></a>
<a id="tocsvmwarediskconfig"></a>

```json
{
  "backingType": "BACKING_TYPE_UNSPECIFIED",
  "rdmCompatibilityMode": "string",
  "shared": true,
  "vmdkDiskMode": "string"
}
```

VMware disk config details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backingType|string|false|none|VMDK backing type.|
|rdmCompatibilityMode|string|false|none|RDM compatibility mode.|
|shared|boolean|false|none|Is VMDK shared with other VMs.|
|vmdkDiskMode|string|false|none|VMDK disk mode.|

#### Enumerated Values

|Property|Value|
|---|---|
|backingType|BACKING_TYPE_UNSPECIFIED|
|backingType|BACKING_TYPE_FLAT_V1|
|backingType|BACKING_TYPE_FLAT_V2|
|backingType|BACKING_TYPE_PMEM|
|backingType|BACKING_TYPE_RDM_V1|
|backingType|BACKING_TYPE_RDM_V2|
|backingType|BACKING_TYPE_SESPARSE|
|backingType|BACKING_TYPE_SESPARSE_V1|
|backingType|BACKING_TYPE_SESPARSE_V2|

<h2 id="tocS_VmwareEngineMigrationTarget">VmwareEngineMigrationTarget</h2>
<!-- backwards compatibility -->
<a id="schemavmwareenginemigrationtarget"></a>
<a id="schema_VmwareEngineMigrationTarget"></a>
<a id="tocSvmwareenginemigrationtarget"></a>
<a id="tocsvmwareenginemigrationtarget"></a>

```json
{}
```

VMWare engine migration target.

<h2 id="tocS_VmwarePlatformDetails">VmwarePlatformDetails</h2>
<!-- backwards compatibility -->
<a id="schemavmwareplatformdetails"></a>
<a id="schema_VmwarePlatformDetails"></a>
<a id="tocSvmwareplatformdetails"></a>
<a id="tocsvmwareplatformdetails"></a>

```json
{
  "esxVersion": "string",
  "osid": "string",
  "vcenterVersion": "string"
}
```

VMware specific details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|esxVersion|string|false|none|ESX version.|
|osid|string|false|none|VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html.|
|vcenterVersion|string|false|none|vCenter version.|
