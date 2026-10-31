<h1 id="apigee-registry-api">Apigee Registry API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apigeeregistry.googleapis.com/">https://apigeeregistry.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/apigee/docs/api-hub/what-is-api-hub">External documentation</a>

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

<h1 id="apigee-registry-api-projects">projects</h1>

## apigeeregistry.projects.locations.operations.get

<a id="opIdapigeeregistry.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="apigeeregistryprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="apigeeregistryprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.artifacts.replaceArtifact

<a id="opIdapigeeregistry.projects.locations.artifacts.replaceArtifact"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "contents": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mimeType": "string",
    "name": "string"
  }'
```

`PUT /v1/{name}`

Used to replace a specified artifact.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "contents": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string"
}
```

<h3 id="apigeeregistryprojectslocationsartifactsreplaceartifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name.|
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
|body|body|[Artifact](#schemaartifact)|false|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» contents|body|string(byte)|false|Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» mimeType|body|string|false|A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|» name|body|string|false|Resource name.|

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
  "contents": "string",
  "createTime": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "sizeBytes": 0,
  "updateTime": "string"
}
```

<h3 id="apigeeregistryprojectslocationsartifactsreplaceartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Artifact](#schemaartifact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.operations.delete

<a id="opIdapigeeregistry.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="apigeeregistryprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|force|query|boolean|false|If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)|
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

<h3 id="apigeeregistryprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.specs.patch

<a id="opIdapigeeregistry.projects.locations.apis.versions.specs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
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

`PATCH /v1/{name}`

Used to modify a specified spec.

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

<h3 id="apigeeregistryprojectslocationsapisversionsspecspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name.|
|allowMissing|query|boolean|false|If set to true, and the spec is not found, a new spec will be created. In this situation, `update_mask` is ignored.|
|updateMask|query|string|false|The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.|
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
|body|body|[ApiSpec](#schemaapispec)|false|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» contents|body|string(byte)|false|Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.|
|» description|body|string|false|A detailed description.|
|» filename|body|string|false|A possibly-hierarchical name used to refer to the spec from other specs.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» mimeType|body|string|false|A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include `application/vnd.apigee.proto`, `application/vnd.apigee.openapi`, and `application/vnd.apigee.graphql`, with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|» name|body|string|false|Resource name.|
|» sourceUri|body|string|false|The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.|

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
  "contents": "string",
  "createTime": "string",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionUpdateTime": "string",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApiSpec](#schemaapispec)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.list

<a id="opIdapigeeregistry.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="apigeeregistryprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="apigeeregistryprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.operations.list

<a id="opIdapigeeregistry.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<h3 id="apigeeregistryprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="apigeeregistryprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.operations.cancel

<a id="opIdapigeeregistry.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="apigeeregistryprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="apigeeregistryprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.specs.deleteRevision

<a id="opIdapigeeregistry.projects.locations.apis.versions.specs.deleteRevision"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:deleteRevision \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}:deleteRevision`

Deletes a revision of a spec.

<h3 id="apigeeregistryprojectslocationsapisversionsspecsdeleterevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the spec revision to be deleted, with a revision ID explicitly included. Example: `projects/sample/locations/global/apis/petstore/versions/1.0.0/specs/openapi.yaml@c7cfa2a8`|
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
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "contents": "string",
  "createTime": "string",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionUpdateTime": "string",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecsdeleterevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApiSpec](#schemaapispec)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.artifacts.getContents

<a id="opIdapigeeregistry.projects.locations.artifacts.getContents"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getContents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}:getContents`

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

<h3 id="apigeeregistryprojectslocationsartifactsgetcontents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the artifact whose contents should be retrieved. Format: `{parent}/artifacts/*`|
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

<h3 id="apigeeregistryprojectslocationsartifactsgetcontents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.specs.listRevisions

<a id="opIdapigeeregistry.projects.locations.apis.versions.specs.listRevisions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:listRevisions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}:listRevisions`

Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.

<h3 id="apigeeregistryprojectslocationsapisversionsspecslistrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the spec to list revisions for.|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.|
|pageSize|query|integer|false|The maximum number of revisions to return per page.|
|pageToken|query|string|false|The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page.|
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
  "apiSpecs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "contents": "string",
      "createTime": "string",
      "description": "string",
      "filename": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionUpdateTime": "string",
      "sizeBytes": 0,
      "sourceUri": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecslistrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListApiSpecRevisionsResponse](#schemalistapispecrevisionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.specs.rollback

<a id="opIdapigeeregistry.projects.locations.apis.versions.specs.rollback"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:rollback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "revisionId": "string"
  }'
```

`POST /v1/{name}:rollback`

Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.

> Body parameter

```json
{
  "revisionId": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecsrollback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The spec being rolled back.|
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
|body|body|[RollbackApiSpecRequest](#schemarollbackapispecrequest)|false|none|
|» revisionId|body|string|false|Required. The revision ID to roll back to. It must be a revision of the same spec. Example: `c7cfa2a8`|

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
  "contents": "string",
  "createTime": "string",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionUpdateTime": "string",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecsrollback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApiSpec](#schemaapispec)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.specs.tagRevision

<a id="opIdapigeeregistry.projects.locations.apis.versions.specs.tagRevision"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:tagRevision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tag": "string"
  }'
```

`POST /v1/{name}:tagRevision`

Adds a tag to a specified revision of a spec.

> Body parameter

```json
{
  "tag": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecstagrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the spec to be tagged, including the revision ID.|
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
|body|body|[TagApiSpecRevisionRequest](#schematagapispecrevisionrequest)|false|none|
|» tag|body|string|false|Required. The tag to apply. The tag should be at most 40 characters, and match `a-z{3,39}`.|

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
  "contents": "string",
  "createTime": "string",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionUpdateTime": "string",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecstagrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApiSpec](#schemaapispec)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.list

<a id="opIdapigeeregistry.projects.locations.apis.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apis \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apis`

Returns matching APIs.

<h3 id="apigeeregistryprojectslocationsapislist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of APIs. Format: `projects/*/locations/*`|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.|
|orderBy|query|string|false|A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"|
|pageSize|query|integer|false|The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token.|
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
  "apis": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "availability": "string",
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "recommendedDeployment": "string",
      "recommendedVersion": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapislist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListApisResponse](#schemalistapisresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.create

<a id="opIdapigeeregistry.projects.locations.apis.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
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

`POST /v1/{parent}/apis`

Creates a specified API.

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

<h3 id="apigeeregistryprojectslocationsapiscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of APIs. Format: `projects/*/locations/*`|
|apiId|query|string|false|Required. The ID to use for the API, which will become the final component of the API's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.|
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
|body|body|[Api](#schemaapi)|false|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» availability|body|string|false|A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g., "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|
|» recommendedDeployment|body|string|false|The recommended deployment of the API. Format: `projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}`|
|» recommendedVersion|body|string|false|The recommended version of the API. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`|

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
  "availability": "string",
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "recommendedDeployment": "string",
  "recommendedVersion": "string",
  "updateTime": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapiscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Api](#schemaapi)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.artifacts.list

<a id="opIdapigeeregistry.projects.locations.artifacts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/artifacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/artifacts`

Returns matching artifacts.

<h3 id="apigeeregistryprojectslocationsartifactslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of artifacts. Format: `{parent}`|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.|
|orderBy|query|string|false|A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"|
|pageSize|query|integer|false|The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.|
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
  "artifacts": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "contents": "string",
      "createTime": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "sizeBytes": 0,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeregistryprojectslocationsartifactslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListArtifactsResponse](#schemalistartifactsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.artifacts.create

<a id="opIdapigeeregistry.projects.locations.artifacts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/artifacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "contents": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mimeType": "string",
    "name": "string"
  }'
```

`POST /v1/{parent}/artifacts`

Creates a specified artifact.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "contents": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string"
}
```

<h3 id="apigeeregistryprojectslocationsartifactscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of artifacts. Format: `{parent}`|
|artifactId|query|string|false|Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.|
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
|body|body|[Artifact](#schemaartifact)|false|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» contents|body|string(byte)|false|Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» mimeType|body|string|false|A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|» name|body|string|false|Resource name.|

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
  "contents": "string",
  "createTime": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "sizeBytes": 0,
  "updateTime": "string"
}
```

<h3 id="apigeeregistryprojectslocationsartifactscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Artifact](#schemaartifact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.deployments.list

<a id="opIdapigeeregistry.projects.locations.apis.deployments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/deployments`

Returns matching deployments.

<h3 id="apigeeregistryprojectslocationsapisdeploymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of deployments. Format: `projects/*/locations/*/apis/*`|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.|
|orderBy|query|string|false|A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"|
|pageSize|query|integer|false|The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListApiDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiDeployments` must match the call that provided the page token.|
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
  "apiDeployments": [
    {
      "accessGuidance": "string",
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "apiSpecRevision": "string",
      "createTime": "string",
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
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionUpdateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisdeploymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListApiDeploymentsResponse](#schemalistapideploymentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.deployments.create

<a id="opIdapigeeregistry.projects.locations.apis.deployments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
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

`POST /v1/{parent}/deployments`

Creates a specified deployment.

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

<h3 id="apigeeregistryprojectslocationsapisdeploymentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of deployments. Format: `projects/*/locations/*/apis/*`|
|apiDeploymentId|query|string|false|Required. The ID to use for the deployment, which will become the final component of the deployment's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.|
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
|body|body|[ApiDeployment](#schemaapideployment)|false|none|
|» accessGuidance|body|string|false|Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» apiSpecRevision|body|string|false|The full resource name (including revision ID) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec@revision}`|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» endpointUri|body|string|false|The address where the deployment is serving. Changes to this value will update the revision.|
|» externalChannelUri|body|string|false|The address of the external channel of the API (e.g., the Developer Portal). Changes to this value will not affect the revision.|
|» intendedAudience|body|string|false|Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|

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
  "accessGuidance": "string",
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "apiSpecRevision": "string",
  "createTime": "string",
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
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionUpdateTime": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisdeploymentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApiDeployment](#schemaapideployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.instances.create

<a id="opIdapigeeregistry.projects.locations.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "cmekKeyName": "string"
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/instances`

Provisions instance resources for the Registry.

> Body parameter

```json
{
  "config": {
    "cmekKeyName": "string"
  },
  "name": "string"
}
```

<h3 id="apigeeregistryprojectslocationsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource of the Instance, of the form: `projects/*/locations/*`|
|instanceId|query|string|false|Required. Identifier to assign to the Instance. Must be unique within scope of the parent resource.|
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
|body|body|[Instance](#schemainstance)|false|none|
|» config|body|[Config](#schemaconfig)|false|Required. Config of the Instance.|
|» name|body|string|false|Format: `projects/*/locations/*/instance`. Currently only `locations/global` is supported.|

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

<h3 id="apigeeregistryprojectslocationsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.specs.list

<a id="opIdapigeeregistry.projects.locations.apis.versions.specs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/specs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/specs`

Returns matching specs.

<h3 id="apigeeregistryprojectslocationsapisversionsspecslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of specs. Format: `projects/*/locations/*/apis/*/versions/*`|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.|
|orderBy|query|string|false|A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"|
|pageSize|query|integer|false|The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListApiSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiSpecs` must match the call that provided the page token.|
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
  "apiSpecs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "contents": "string",
      "createTime": "string",
      "description": "string",
      "filename": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionUpdateTime": "string",
      "sizeBytes": 0,
      "sourceUri": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListApiSpecsResponse](#schemalistapispecsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.specs.create

<a id="opIdapigeeregistry.projects.locations.apis.versions.specs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/specs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
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

`POST /v1/{parent}/specs`

Creates a specified spec.

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

<h3 id="apigeeregistryprojectslocationsapisversionsspecscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of specs. Format: `projects/*/locations/*/apis/*/versions/*`|
|apiSpecId|query|string|false|Required. The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.|
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
|body|body|[ApiSpec](#schemaapispec)|false|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» contents|body|string(byte)|false|Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.|
|» description|body|string|false|A detailed description.|
|» filename|body|string|false|A possibly-hierarchical name used to refer to the spec from other specs.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» mimeType|body|string|false|A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include `application/vnd.apigee.proto`, `application/vnd.apigee.openapi`, and `application/vnd.apigee.graphql`, with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|» name|body|string|false|Resource name.|
|» sourceUri|body|string|false|The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.|

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
  "contents": "string",
  "createTime": "string",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionUpdateTime": "string",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionsspecscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApiSpec](#schemaapispec)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.list

<a id="opIdapigeeregistry.projects.locations.apis.versions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/versions`

Returns matching versions.

<h3 id="apigeeregistryprojectslocationsapisversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of versions. Format: `projects/*/locations/*/apis/*`|
|filter|query|string|false|An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.|
|orderBy|query|string|false|A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"|
|pageSize|query|integer|false|The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListApiVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiVersions` must match the call that provided the page token.|
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
  "apiVersions": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "primarySpec": "string",
      "state": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListApiVersionsResponse](#schemalistapiversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.apis.versions.create

<a id="opIdapigeeregistry.projects.locations.apis.versions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
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
    "primarySpec": "string",
    "state": "string"
  }'
```

`POST /v1/{parent}/versions`

Creates a specified version.

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
  "primarySpec": "string",
  "state": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of versions. Format: `projects/*/locations/*/apis/*`|
|apiVersionId|query|string|false|Required. The ID to use for the version, which will become the final component of the version's resource name. This value should be 1-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.|
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
|body|body|[ApiVersion](#schemaapiversion)|false|none|
|» annotations|body|object|false|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|» » **additionalProperties**|body|string|false|none|
|» description|body|string|false|A detailed description.|
|» displayName|body|string|false|Human-meaningful name.|
|» labels|body|object|false|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name.|
|» primarySpec|body|string|false|The primary spec for this version. Format: projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}|
|» state|body|string|false|A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g., "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".|

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
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "primarySpec": "string",
  "state": "string",
  "updateTime": "string"
}
```

<h3 id="apigeeregistryprojectslocationsapisversionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApiVersion](#schemaapiversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.runtime.getIamPolicy

<a id="opIdapigeeregistry.projects.locations.runtime.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="apigeeregistryprojectslocationsruntimegetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
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
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="apigeeregistryprojectslocationsruntimegetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.runtime.setIamPolicy

<a id="opIdapigeeregistry.projects.locations.runtime.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    }
  }'
```

`POST /v1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

> Body parameter

```json
{
  "policy": {
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

<h3 id="apigeeregistryprojectslocationsruntimesetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="apigeeregistryprojectslocationsruntimesetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigeeregistry.projects.locations.runtime.testIamPermissions

<a id="opIdapigeeregistry.projects.locations.runtime.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="apigeeregistryprojectslocationsruntimetestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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
  "permissions": [
    "string"
  ]
}
```

<h3 id="apigeeregistryprojectslocationsruntimetestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

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
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "availability": "string",
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "recommendedDeployment": "string",
  "recommendedVersion": "string",
  "updateTime": "string"
}
```

A top-level description of an API. Produced by producers and are commitments to provide services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|availability|string|false|none|A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g., "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".|
|createTime|string(google-datetime)|false|read-only|Output only. Creation timestamp.|
|description|string|false|none|A detailed description.|
|displayName|string|false|none|Human-meaningful name.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|name|string|false|none|Resource name.|
|recommendedDeployment|string|false|none|The recommended deployment of the API. Format: `projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}`|
|recommendedVersion|string|false|none|The recommended version of the API. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update timestamp.|

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
  "createTime": "string",
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
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionUpdateTime": "string"
}
```

Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessGuidance|string|false|none|Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|apiSpecRevision|string|false|none|The full resource name (including revision ID) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec@revision}`|
|createTime|string(google-datetime)|false|read-only|Output only. Creation timestamp; when the deployment resource was created.|
|description|string|false|none|A detailed description.|
|displayName|string|false|none|Human-meaningful name.|
|endpointUri|string|false|none|The address where the deployment is serving. Changes to this value will update the revision.|
|externalChannelUri|string|false|none|The address of the external channel of the API (e.g., the Developer Portal). Changes to this value will not affect the revision.|
|intendedAudience|string|false|none|Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|name|string|false|none|Resource name.|
|revisionCreateTime|string(google-datetime)|false|read-only|Output only. Revision creation timestamp; when the represented revision was created.|
|revisionId|string|false|read-only|Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string.|
|revisionUpdateTime|string(google-datetime)|false|read-only|Output only. Last update timestamp: when the represented revision was last modified.|

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
  "createTime": "string",
  "description": "string",
  "filename": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionUpdateTime": "string",
  "sizeBytes": 0,
  "sourceUri": "string"
}
```

Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|contents|string(byte)|false|none|Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.|
|createTime|string(google-datetime)|false|read-only|Output only. Creation timestamp; when the spec resource was created.|
|description|string|false|none|A detailed description.|
|filename|string|false|none|A possibly-hierarchical name used to refer to the spec from other specs.|
|hash|string|false|read-only|Output only. A SHA-256 hash of the spec's contents. If the spec is gzipped, this is the hash of the uncompressed spec.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|mimeType|string|false|none|A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include `application/vnd.apigee.proto`, `application/vnd.apigee.openapi`, and `application/vnd.apigee.graphql`, with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|name|string|false|none|Resource name.|
|revisionCreateTime|string(google-datetime)|false|read-only|Output only. Revision creation timestamp; when the represented revision was created.|
|revisionId|string|false|read-only|Output only. Immutable. The revision ID of the spec. A new revision is committed whenever the spec contents are changed. The format is an 8-character hexadecimal string.|
|revisionUpdateTime|string(google-datetime)|false|read-only|Output only. Last update timestamp: when the represented revision was last modified.|
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
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "primarySpec": "string",
  "state": "string",
  "updateTime": "string"
}
```

Describes a particular version of an API. ApiVersions are what consumers actually use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|createTime|string(google-datetime)|false|read-only|Output only. Creation timestamp.|
|description|string|false|none|A detailed description.|
|displayName|string|false|none|Human-meaningful name.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.|
|name|string|false|none|Resource name.|
|primarySpec|string|false|none|The primary spec for this version. Format: projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}|
|state|string|false|none|A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g., "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update timestamp.|

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "contents": "string",
  "createTime": "string",
  "hash": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "name": "string",
  "sizeBytes": 0,
  "updateTime": "string"
}
```

Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.|
|contents|string(byte)|false|none|Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.|
|createTime|string(google-datetime)|false|read-only|Output only. Creation timestamp.|
|hash|string|false|read-only|Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.|
|labels|object|false|none|Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.|
|mimeType|string|false|none|A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").|
|name|string|false|none|Resource name.|
|sizeBytes|integer(int32)|false|read-only|Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update timestamp.|

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_Build">Build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_Build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "commitId": "string",
  "commitTime": "string",
  "repo": "string"
}
```

Build information of the Instance if it's in `ACTIVE` state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|string|false|read-only|Output only. Commit ID of the latest commit in the build.|
|commitTime|string(google-datetime)|false|read-only|Output only. Commit time of the latest commit in the build.|
|repo|string|false|read-only|Output only. Path of the open source repository: github.com/apigee/registry.|

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

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "cmekKeyName": "string",
  "location": "string"
}
```

Available configurations to provision an Instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cmekKeyName|string|false|none|Required. The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name should follow the format of `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`, where the `location` must match InstanceConfig.location.|
|location|string|false|read-only|Output only. The GCP location where the Instance resides.|

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

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_HttpBody">HttpBody</h2>
<!-- backwards compatibility -->
<a id="schemahttpbody"></a>
<a id="schema_HttpBody"></a>
<a id="tocShttpbody"></a>
<a id="tocshttpbody"></a>

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

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "build": {
    "commitId": "string",
    "commitTime": "string",
    "repo": "string"
  },
  "config": {
    "cmekKeyName": "string",
    "location": "string"
  },
  "createTime": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "updateTime": "string"
}
```

An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[Build](#schemabuild)|false|none|Output only. Build info of the Instance if it's in `ACTIVE` state.|
|config|[Config](#schemaconfig)|false|none|Required. Config of the Instance.|
|createTime|string(google-datetime)|false|read-only|Output only. Creation timestamp.|
|name|string|false|none|Format: `projects/*/locations/*/instance`. Currently only `locations/global` is supported.|
|state|string|false|read-only|Output only. The current state of the Instance.|
|stateMessage|string|false|read-only|Output only. Extra information of Instance.State if the state is `FAILED`.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update timestamp.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|INACTIVE|
|state|CREATING|
|state|ACTIVE|
|state|UPDATING|
|state|DELETING|
|state|FAILED|

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
      "createTime": "string",
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
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionUpdateTime": "string"
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
      "createTime": "string",
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
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionUpdateTime": "string"
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
      "createTime": "string",
      "description": "string",
      "filename": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionUpdateTime": "string",
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
      "createTime": "string",
      "description": "string",
      "filename": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionUpdateTime": "string",
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
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "primarySpec": "string",
      "state": "string",
      "updateTime": "string"
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
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "recommendedDeployment": "string",
      "recommendedVersion": "string",
      "updateTime": "string"
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
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "contents": "string",
      "createTime": "string",
      "hash": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mimeType": "string",
      "name": "string",
      "sizeBytes": 0,
      "updateTime": "string"
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
  "cancellationRequested": true,
  "createTime": "string",
  "endTime": "string",
  "statusMessage": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version used to start the operation.|
|cancellationRequested|boolean|false|none|Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|statusMessage|string|false|none|Human-readable status of the operation, if any.|
|target|string|false|none|Server-defined resource path for the target of the operation.|
|verb|string|false|none|Name of the verb executed by the operation.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_RollbackApiDeploymentRequest">RollbackApiDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbackapideploymentrequest"></a>
<a id="schema_RollbackApiDeploymentRequest"></a>
<a id="tocSrollbackapideploymentrequest"></a>
<a id="tocsrollbackapideploymentrequest"></a>

```json
{
  "revisionId": "string"
}
```

Request message for RollbackApiDeployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|string|false|none|Required. The revision ID to roll back to. It must be a revision of the same deployment. Example: `c7cfa2a8`|

<h2 id="tocS_RollbackApiSpecRequest">RollbackApiSpecRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbackapispecrequest"></a>
<a id="schema_RollbackApiSpecRequest"></a>
<a id="tocSrollbackapispecrequest"></a>
<a id="tocsrollbackapispecrequest"></a>

```json
{
  "revisionId": "string"
}
```

Request message for RollbackApiSpec.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|string|false|none|Required. The revision ID to roll back to. It must be a revision of the same spec. Example: `c7cfa2a8`|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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

<h2 id="tocS_TagApiDeploymentRevisionRequest">TagApiDeploymentRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schematagapideploymentrevisionrequest"></a>
<a id="schema_TagApiDeploymentRevisionRequest"></a>
<a id="tocStagapideploymentrevisionrequest"></a>
<a id="tocstagapideploymentrevisionrequest"></a>

```json
{
  "tag": "string"
}
```

Request message for TagApiDeploymentRevision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|false|none|Required. The tag to apply. The tag should be at most 40 characters, and match `a-z{3,39}`.|

<h2 id="tocS_TagApiSpecRevisionRequest">TagApiSpecRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schematagapispecrevisionrequest"></a>
<a id="schema_TagApiSpecRevisionRequest"></a>
<a id="tocStagapispecrevisionrequest"></a>
<a id="tocstagapispecrevisionrequest"></a>

```json
{
  "tag": "string"
}
```

Request message for TagApiSpecRevision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|false|none|Required. The tag to apply. The tag should be at most 40 characters, and match `a-z{3,39}`.|

<h2 id="tocS_TestIamPermissionsRequest">TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsrequest"></a>
<a id="schema_TestIamPermissionsRequest"></a>
<a id="tocStestiampermissionsrequest"></a>
<a id="tocstestiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|
