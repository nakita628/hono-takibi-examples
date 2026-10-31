<h1 id="discovery-engine-api">Discovery Engine API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Discovery Engine API.

Base URLs:

* <a href="https://discoveryengine.googleapis.com/">https://discoveryengine.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/discovery-engine/docs">External documentation</a>

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

<h1 id="discovery-engine-api-projects">projects</h1>

## discoveryengine.projects.operations.get

<a id="opIddiscoveryengine.projects.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="discoveryengineprojectsoperationsget-parameters">Parameters</h3>

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

<h3 id="discoveryengineprojectsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.branches.documents.delete

<a id="opIddiscoveryengine.projects.locations.dataStores.branches.documents.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Deletes a Document.

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Document to delete does not exist, a NOT_FOUND error is returned.|
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

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.branches.documents.patch

<a id="opIddiscoveryengine.projects.locations.dataStores.branches.documents.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "jsonData": "string",
    "name": "string",
    "parentDocumentId": "string",
    "schemaId": "string",
    "structData": {
      "property1": null,
      "property2": null
    }
  }'
```

`PATCH /v1beta/{name}`

Updates a Document.

> Body parameter

```json
{
  "id": "string",
  "jsonData": "string",
  "name": "string",
  "parentDocumentId": "string",
  "schemaId": "string",
  "structData": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.|
|allowMissing|query|boolean|false|If set to true, and the Document is not found, a new Document will be created.|
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
|body|body|[GoogleCloudDiscoveryengineV1betaDocument](#schemagoogleclouddiscoveryenginev1betadocument)|false|none|
|» id|body|string|false|Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.|
|» jsonData|body|string|false|The JSON string representation of the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.|
|» name|body|string|false|Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.|
|» parentDocumentId|body|string|false|The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.|
|» schemaId|body|string|false|The identifier of the schema located in the same data store.|
|» structData|body|object|false|The structured JSON data for the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.|
|» » **additionalProperties**|body|object|false|Properties of the object.|

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
  "id": "string",
  "jsonData": "string",
  "name": "string",
  "parentDocumentId": "string",
  "schemaId": "string",
  "structData": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDiscoveryengineV1betaDocument](#schemagoogleclouddiscoveryenginev1betadocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.operations.list

<a id="opIddiscoveryengine.projects.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="discoveryengineprojectsoperationslist-parameters">Parameters</h3>

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

<h3 id="discoveryengineprojectsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.branches.documents.list

<a id="opIddiscoveryengine.projects.locations.dataStores.branches.documents.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/documents`

Gets a list of Documents.

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documentss under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.|
|pageSize|query|integer|false|Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.|
|pageToken|query|string|false|A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.|
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
  "documents": [
    {
      "id": "string",
      "jsonData": "string",
      "name": "string",
      "parentDocumentId": "string",
      "schemaId": "string",
      "structData": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDiscoveryengineV1betaListDocumentsResponse](#schemagoogleclouddiscoveryenginev1betalistdocumentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.branches.documents.create

<a id="opIddiscoveryengine.projects.locations.dataStores.branches.documents.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "jsonData": "string",
    "name": "string",
    "parentDocumentId": "string",
    "schemaId": "string",
    "structData": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v1beta/{parent}/documents`

Creates a Document.

> Body parameter

```json
{
  "id": "string",
  "jsonData": "string",
  "name": "string",
  "parentDocumentId": "string",
  "schemaId": "string",
  "structData": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.|
|documentId|query|string|false|Required. The ID to use for the Document, which will become the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Documents with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
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
|body|body|[GoogleCloudDiscoveryengineV1betaDocument](#schemagoogleclouddiscoveryenginev1betadocument)|false|none|
|» id|body|string|false|Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.|
|» jsonData|body|string|false|The JSON string representation of the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.|
|» name|body|string|false|Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.|
|» parentDocumentId|body|string|false|The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.|
|» schemaId|body|string|false|The identifier of the schema located in the same data store.|
|» structData|body|object|false|The structured JSON data for the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.|
|» » **additionalProperties**|body|object|false|Properties of the object.|

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
  "id": "string",
  "jsonData": "string",
  "name": "string",
  "parentDocumentId": "string",
  "schemaId": "string",
  "structData": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDiscoveryengineV1betaDocument](#schemagoogleclouddiscoveryenginev1betadocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.branches.documents.import

<a id="opIddiscoveryengine.projects.locations.dataStores.branches.documents.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/documents:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigquerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    },
    "errorConfig": {
      "gcsPrefix": "string"
    },
    "gcsSource": {
      "dataSchema": "string",
      "inputUris": [
        "string"
      ]
    },
    "inlineSource": {
      "documents": [
        {
          "id": "string",
          "jsonData": "string",
          "name": "string",
          "parentDocumentId": "string",
          "schemaId": "string",
          "structData": {
            "property1": null,
            "property2": null
          }
        }
      ]
    },
    "reconciliationMode": "RECONCILIATION_MODE_UNSPECIFIED"
  }'
```

`POST /v1beta/{parent}/documents:import`

Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.

> Body parameter

```json
{
  "bigquerySource": {
    "dataSchema": "string",
    "datasetId": "string",
    "gcsStagingDir": "string",
    "partitionDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "projectId": "string",
    "tableId": "string"
  },
  "errorConfig": {
    "gcsPrefix": "string"
  },
  "gcsSource": {
    "dataSchema": "string",
    "inputUris": [
      "string"
    ]
  },
  "inlineSource": {
    "documents": [
      {
        "id": "string",
        "jsonData": "string",
        "name": "string",
        "parentDocumentId": "string",
        "schemaId": "string",
        "structData": {
          "property1": null,
          "property2": null
        }
      }
    ]
  },
  "reconciliationMode": "RECONCILIATION_MODE_UNSPECIFIED"
}
```

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Requires create/update permission.|
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
|body|body|[GoogleCloudDiscoveryengineV1betaImportDocumentsRequest](#schemagoogleclouddiscoveryenginev1betaimportdocumentsrequest)|false|none|
|» bigquerySource|body|[GoogleCloudDiscoveryengineV1betaBigQuerySource](#schemagoogleclouddiscoveryenginev1betabigquerysource)|false|BigQuery input source.|
|» errorConfig|body|[GoogleCloudDiscoveryengineV1betaImportErrorConfig](#schemagoogleclouddiscoveryenginev1betaimporterrorconfig)|false|The desired location of errors incurred during the Import.|
|» gcsSource|body|[GoogleCloudDiscoveryengineV1betaGcsSource](#schemagoogleclouddiscoveryenginev1betagcssource)|false|Cloud Storage location for the input content.|
|» inlineSource|body|[GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource](#schemagoogleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource)|false|The Inline source for the input content for documents.|
|» reconciliationMode|body|string|false|The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» reconciliationMode|RECONCILIATION_MODE_UNSPECIFIED|
|» reconciliationMode|INCREMENTAL|
|» reconciliationMode|FULL|

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

<h3 id="discoveryengineprojectslocationsdatastoresbranchesdocumentsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.userEvents.collect

<a id="opIddiscoveryengine.projects.locations.dataStores.userEvents.collect"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/userEvents:collect \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/userEvents:collect`

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

<h3 id="discoveryengineprojectslocationsdatastoresusereventscollect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent DataStore resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.|
|ets|query|string|false|The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.|
|uri|query|string|false|The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests.|
|userEvent|query|string|false|Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.|
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

<h3 id="discoveryengineprojectslocationsdatastoresusereventscollect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleApiHttpBody](#schemagoogleapihttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.userEvents.import

<a id="opIddiscoveryengine.projects.locations.dataStores.userEvents.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/userEvents:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigquerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    },
    "errorConfig": {
      "gcsPrefix": "string"
    },
    "gcsSource": {
      "dataSchema": "string",
      "inputUris": [
        "string"
      ]
    },
    "inlineSource": {
      "userEvents": [
        {
          "attributes": {
            "property1": {
              "numbers": [
                0
              ],
              "text": [
                "string"
              ]
            },
            "property2": {
              "numbers": [
                0
              ],
              "text": [
                "string"
              ]
            }
          },
          "attributionToken": "string",
          "completionInfo": {
            "selectedPosition": 0,
            "selectedSuggestion": "string"
          },
          "directUserRequest": true,
          "documents": [
            {
              "id": "string",
              "name": "string",
              "promotionIds": [
                "string"
              ],
              "quantity": 0
            }
          ],
          "eventTime": "string",
          "eventType": "string",
          "filter": "string",
          "mediaInfo": {
            "mediaProgressDuration": "string",
            "mediaProgressPercentage": 0
          },
          "pageInfo": {
            "pageCategory": "string",
            "pageviewId": "string",
            "referrerUri": "string",
            "uri": "string"
          },
          "panel": {
            "displayName": "string",
            "panelId": "string",
            "panelPosition": 0,
            "totalPanels": 0
          },
          "promotionIds": [
            "string"
          ],
          "searchInfo": {
            "offset": 0,
            "orderBy": "string",
            "searchQuery": "string"
          },
          "sessionId": "string",
          "tagIds": [
            "string"
          ],
          "transactionInfo": {
            "cost": 0,
            "currency": "string",
            "discountValue": 0,
            "tax": 0,
            "transactionId": "string",
            "value": 0
          },
          "userInfo": {
            "userAgent": "string",
            "userId": "string"
          },
          "userPseudoId": "string"
        }
      ]
    }
  }'
```

`POST /v1beta/{parent}/userEvents:import`

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

> Body parameter

```json
{
  "bigquerySource": {
    "dataSchema": "string",
    "datasetId": "string",
    "gcsStagingDir": "string",
    "partitionDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "projectId": "string",
    "tableId": "string"
  },
  "errorConfig": {
    "gcsPrefix": "string"
  },
  "gcsSource": {
    "dataSchema": "string",
    "inputUris": [
      "string"
    ]
  },
  "inlineSource": {
    "userEvents": [
      {
        "attributes": {
          "property1": {
            "numbers": [
              0
            ],
            "text": [
              "string"
            ]
          },
          "property2": {
            "numbers": [
              0
            ],
            "text": [
              "string"
            ]
          }
        },
        "attributionToken": "string",
        "completionInfo": {
          "selectedPosition": 0,
          "selectedSuggestion": "string"
        },
        "directUserRequest": true,
        "documents": [
          {
            "id": "string",
            "name": "string",
            "promotionIds": [
              "string"
            ],
            "quantity": 0
          }
        ],
        "eventTime": "string",
        "eventType": "string",
        "filter": "string",
        "mediaInfo": {
          "mediaProgressDuration": "string",
          "mediaProgressPercentage": 0
        },
        "pageInfo": {
          "pageCategory": "string",
          "pageviewId": "string",
          "referrerUri": "string",
          "uri": "string"
        },
        "panel": {
          "displayName": "string",
          "panelId": "string",
          "panelPosition": 0,
          "totalPanels": 0
        },
        "promotionIds": [
          "string"
        ],
        "searchInfo": {
          "offset": 0,
          "orderBy": "string",
          "searchQuery": "string"
        },
        "sessionId": "string",
        "tagIds": [
          "string"
        ],
        "transactionInfo": {
          "cost": 0,
          "currency": "string",
          "discountValue": 0,
          "tax": 0,
          "transactionId": "string",
          "value": 0
        },
        "userInfo": {
          "userAgent": "string",
          "userId": "string"
        },
        "userPseudoId": "string"
      }
    ]
  }
}
```

<h3 id="discoveryengineprojectslocationsdatastoresusereventsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`|
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
|body|body|[GoogleCloudDiscoveryengineV1betaImportUserEventsRequest](#schemagoogleclouddiscoveryenginev1betaimportusereventsrequest)|false|none|
|» bigquerySource|body|[GoogleCloudDiscoveryengineV1betaBigQuerySource](#schemagoogleclouddiscoveryenginev1betabigquerysource)|false|Required. BigQuery input source.|
|» errorConfig|body|[GoogleCloudDiscoveryengineV1betaImportErrorConfig](#schemagoogleclouddiscoveryenginev1betaimporterrorconfig)|false|The desired location of errors incurred during the Import. Cannot be set for inline user event imports.|
|» gcsSource|body|[GoogleCloudDiscoveryengineV1betaGcsSource](#schemagoogleclouddiscoveryenginev1betagcssource)|false|Required. Cloud Storage location for the input content.|
|» inlineSource|body|[GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource](#schemagoogleclouddiscoveryenginev1betaimportusereventsrequestinlinesource)|false|Required. The Inline source for the input content for UserEvents.|

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

<h3 id="discoveryengineprojectslocationsdatastoresusereventsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.userEvents.write

<a id="opIddiscoveryengine.projects.locations.dataStores.userEvents.write"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/userEvents:write \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {
      "property1": {
        "numbers": [
          0
        ],
        "text": [
          "string"
        ]
      },
      "property2": {
        "numbers": [
          0
        ],
        "text": [
          "string"
        ]
      }
    },
    "attributionToken": "string",
    "completionInfo": {
      "selectedPosition": 0,
      "selectedSuggestion": "string"
    },
    "directUserRequest": true,
    "documents": [
      {
        "id": "string",
        "name": "string",
        "promotionIds": [
          "string"
        ],
        "quantity": 0
      }
    ],
    "eventTime": "string",
    "eventType": "string",
    "filter": "string",
    "mediaInfo": {
      "mediaProgressDuration": "string",
      "mediaProgressPercentage": 0
    },
    "pageInfo": {
      "pageCategory": "string",
      "pageviewId": "string",
      "referrerUri": "string",
      "uri": "string"
    },
    "panel": {
      "displayName": "string",
      "panelId": "string",
      "panelPosition": 0,
      "totalPanels": 0
    },
    "promotionIds": [
      "string"
    ],
    "searchInfo": {
      "offset": 0,
      "orderBy": "string",
      "searchQuery": "string"
    },
    "sessionId": "string",
    "tagIds": [
      "string"
    ],
    "transactionInfo": {
      "cost": 0,
      "currency": "string",
      "discountValue": 0,
      "tax": 0,
      "transactionId": "string",
      "value": 0
    },
    "userInfo": {
      "userAgent": "string",
      "userId": "string"
    },
    "userPseudoId": "string"
  }'
```

`POST /v1beta/{parent}/userEvents:write`

Writes a single user event.

> Body parameter

```json
{
  "attributes": {
    "property1": {
      "numbers": [
        0
      ],
      "text": [
        "string"
      ]
    },
    "property2": {
      "numbers": [
        0
      ],
      "text": [
        "string"
      ]
    }
  },
  "attributionToken": "string",
  "completionInfo": {
    "selectedPosition": 0,
    "selectedSuggestion": "string"
  },
  "directUserRequest": true,
  "documents": [
    {
      "id": "string",
      "name": "string",
      "promotionIds": [
        "string"
      ],
      "quantity": 0
    }
  ],
  "eventTime": "string",
  "eventType": "string",
  "filter": "string",
  "mediaInfo": {
    "mediaProgressDuration": "string",
    "mediaProgressPercentage": 0
  },
  "pageInfo": {
    "pageCategory": "string",
    "pageviewId": "string",
    "referrerUri": "string",
    "uri": "string"
  },
  "panel": {
    "displayName": "string",
    "panelId": "string",
    "panelPosition": 0,
    "totalPanels": 0
  },
  "promotionIds": [
    "string"
  ],
  "searchInfo": {
    "offset": 0,
    "orderBy": "string",
    "searchQuery": "string"
  },
  "sessionId": "string",
  "tagIds": [
    "string"
  ],
  "transactionInfo": {
    "cost": 0,
    "currency": "string",
    "discountValue": 0,
    "tax": 0,
    "transactionId": "string",
    "value": 0
  },
  "userInfo": {
    "userAgent": "string",
    "userId": "string"
  },
  "userPseudoId": "string"
}
```

<h3 id="discoveryengineprojectslocationsdatastoresusereventswrite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent DataStore resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.|
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
|body|body|[GoogleCloudDiscoveryengineV1betaUserEvent](#schemagoogleclouddiscoveryenginev1betauserevent)|false|none|
|» attributes|body|object|false|Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.|
|» » **additionalProperties**|body|[GoogleCloudDiscoveryengineV1betaCustomAttribute](#schemagoogleclouddiscoveryenginev1betacustomattribute)|false|A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.|
|» attributionToken|body|string|false|Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be one of: * PredictResponse.attribution_token for events that are the result of PredictionService.Predict. * SearchResponse.attribution_token for events that are the result of SearchService.Search. * CompleteQueryResponse.attribution_token for events that are the result of SearchService.CompleteQuery. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.|
|» completionInfo|body|[GoogleCloudDiscoveryengineV1betaCompletionInfo](#schemagoogleclouddiscoveryenginev1betacompletioninfo)|false|CompleteQuery API details related to the event. This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.|
|» directUserRequest|body|boolean|false|Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.|
|» documents|body|[[GoogleCloudDiscoveryengineV1betaDocumentInfo](#schemagoogleclouddiscoveryenginev1betadocumentinfo)]|false|List of Documents associated with this user event. This field is optional except for the following event types: * `view-item` * `add-to-cart` * `purchase` * `media-play` * `media-complete` In a `search` event, this field represents the documents returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different UserEvent.documents is desired.|
|» eventTime|body|string(google-datetime)|false|Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.|
|» eventType|body|string|false|Required. User event type. Allowed values are: Generic values: * `search`: Search for Documents. * `view-item`: Detailed page view of a Document. * `view-item-list`: View of a panel or ordered list of Documents. * `view-home-page`: View of the home page. * `view-category-page`: View of a category page, e.g. Home > Men > Jeans Retail-related values: * `add-to-cart`: Add an item(s) to cart, e.g. in Retail online shopping * `purchase`: Purchase an item(s) Media-related values: * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc.|
|» filter|body|string|false|The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for `search` events, the associated SearchService.SearchRequest may contain a filter expression in SearchService.SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for `view-item-list` events that are generated from a PredictionService.PredictRequest, this field may be populated directly from PredictionService.PredictRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
|» mediaInfo|body|[GoogleCloudDiscoveryengineV1betaMediaInfo](#schemagoogleclouddiscoveryenginev1betamediainfo)|false|Media-specific info.|
|» pageInfo|body|[GoogleCloudDiscoveryengineV1betaPageInfo](#schemagoogleclouddiscoveryenginev1betapageinfo)|false|Page metadata such as categories and other critical information for certain event types such as `view-category-page`.|
|» panel|body|[GoogleCloudDiscoveryengineV1betaPanelInfo](#schemagoogleclouddiscoveryenginev1betapanelinfo)|false|Panel metadata associated with this user event.|
|» promotionIds|body|[string]|false|The promotion IDs if this is an event associated with promotions. Currently, this field is restricted to at most one ID.|
|» searchInfo|body|[GoogleCloudDiscoveryengineV1betaSearchInfo](#schemagoogleclouddiscoveryenginev1betasearchinfo)|false|Search API details related to the event. This field should be set for `search` event.|
|» sessionId|body|string|false|A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the session_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add UserEvent.user_pseudo_id as prefix.|
|» tagIds|body|[string]|false|A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups on the customer end.|
|» transactionInfo|body|[GoogleCloudDiscoveryengineV1betaTransactionInfo](#schemagoogleclouddiscoveryenginev1betatransactioninfo)|false|The transaction metadata (if any) associated with this user event.|
|» userInfo|body|[GoogleCloudDiscoveryengineV1betaUserInfo](#schemagoogleclouddiscoveryenginev1betauserinfo)|false|Information about the end user.|
|» userPseudoId|body|string|false|Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.|

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
  "attributes": {
    "property1": {
      "numbers": [
        0
      ],
      "text": [
        "string"
      ]
    },
    "property2": {
      "numbers": [
        0
      ],
      "text": [
        "string"
      ]
    }
  },
  "attributionToken": "string",
  "completionInfo": {
    "selectedPosition": 0,
    "selectedSuggestion": "string"
  },
  "directUserRequest": true,
  "documents": [
    {
      "id": "string",
      "name": "string",
      "promotionIds": [
        "string"
      ],
      "quantity": 0
    }
  ],
  "eventTime": "string",
  "eventType": "string",
  "filter": "string",
  "mediaInfo": {
    "mediaProgressDuration": "string",
    "mediaProgressPercentage": 0
  },
  "pageInfo": {
    "pageCategory": "string",
    "pageviewId": "string",
    "referrerUri": "string",
    "uri": "string"
  },
  "panel": {
    "displayName": "string",
    "panelId": "string",
    "panelPosition": 0,
    "totalPanels": 0
  },
  "promotionIds": [
    "string"
  ],
  "searchInfo": {
    "offset": 0,
    "orderBy": "string",
    "searchQuery": "string"
  },
  "sessionId": "string",
  "tagIds": [
    "string"
  ],
  "transactionInfo": {
    "cost": 0,
    "currency": "string",
    "discountValue": 0,
    "tax": 0,
    "transactionId": "string",
    "value": 0
  },
  "userInfo": {
    "userAgent": "string",
    "userId": "string"
  },
  "userPseudoId": "string"
}
```

<h3 id="discoveryengineprojectslocationsdatastoresusereventswrite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDiscoveryengineV1betaUserEvent](#schemagoogleclouddiscoveryenginev1betauserevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## discoveryengine.projects.locations.dataStores.servingConfigs.recommend

<a id="opIddiscoveryengine.projects.locations.dataStores.servingConfigs.recommend"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:recommend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": "string",
    "pageSize": 0,
    "params": {
      "property1": null,
      "property2": null
    },
    "userEvent": {
      "attributes": {
        "property1": {
          "numbers": [
            0
          ],
          "text": [
            "string"
          ]
        },
        "property2": {
          "numbers": [
            0
          ],
          "text": [
            "string"
          ]
        }
      },
      "attributionToken": "string",
      "completionInfo": {
        "selectedPosition": 0,
        "selectedSuggestion": "string"
      },
      "directUserRequest": true,
      "documents": [
        {
          "id": "string",
          "name": "string",
          "promotionIds": [
            "string"
          ],
          "quantity": 0
        }
      ],
      "eventTime": "string",
      "eventType": "string",
      "filter": "string",
      "mediaInfo": {
        "mediaProgressDuration": "string",
        "mediaProgressPercentage": 0
      },
      "pageInfo": {
        "pageCategory": "string",
        "pageviewId": "string",
        "referrerUri": "string",
        "uri": "string"
      },
      "panel": {
        "displayName": "string",
        "panelId": "string",
        "panelPosition": 0,
        "totalPanels": 0
      },
      "promotionIds": [
        "string"
      ],
      "searchInfo": {
        "offset": 0,
        "orderBy": "string",
        "searchQuery": "string"
      },
      "sessionId": "string",
      "tagIds": [
        "string"
      ],
      "transactionInfo": {
        "cost": 0,
        "currency": "string",
        "discountValue": 0,
        "tax": 0,
        "transactionId": "string",
        "value": 0
      },
      "userInfo": {
        "userAgent": "string",
        "userId": "string"
      },
      "userPseudoId": "string"
    },
    "userLabels": {
      "property1": "string",
      "property2": "string"
    },
    "validateOnly": true
  }'
```

`POST /v1beta/{servingConfig}:recommend`

Makes a recommendation, which requires a contextual user event.

> Body parameter

```json
{
  "filter": "string",
  "pageSize": 0,
  "params": {
    "property1": null,
    "property2": null
  },
  "userEvent": {
    "attributes": {
      "property1": {
        "numbers": [
          0
        ],
        "text": [
          "string"
        ]
      },
      "property2": {
        "numbers": [
          0
        ],
        "text": [
          "string"
        ]
      }
    },
    "attributionToken": "string",
    "completionInfo": {
      "selectedPosition": 0,
      "selectedSuggestion": "string"
    },
    "directUserRequest": true,
    "documents": [
      {
        "id": "string",
        "name": "string",
        "promotionIds": [
          "string"
        ],
        "quantity": 0
      }
    ],
    "eventTime": "string",
    "eventType": "string",
    "filter": "string",
    "mediaInfo": {
      "mediaProgressDuration": "string",
      "mediaProgressPercentage": 0
    },
    "pageInfo": {
      "pageCategory": "string",
      "pageviewId": "string",
      "referrerUri": "string",
      "uri": "string"
    },
    "panel": {
      "displayName": "string",
      "panelId": "string",
      "panelPosition": 0,
      "totalPanels": 0
    },
    "promotionIds": [
      "string"
    ],
    "searchInfo": {
      "offset": 0,
      "orderBy": "string",
      "searchQuery": "string"
    },
    "sessionId": "string",
    "tagIds": [
      "string"
    ],
    "transactionInfo": {
      "cost": 0,
      "currency": "string",
      "discountValue": 0,
      "tax": 0,
      "transactionId": "string",
      "value": 0
    },
    "userInfo": {
      "userAgent": "string",
      "userId": "string"
    },
    "userPseudoId": "string"
  },
  "userLabels": {
    "property1": "string",
    "property2": "string"
  },
  "validateOnly": true
}
```

<h3 id="discoveryengineprojectslocationsdatastoresservingconfigsrecommend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servingConfig|path|string|true|Required. Full resource name of the format: projects/*/locations/global/collections/*/dataStores/*/servingConfigs/* Before you can request recommendations from your model, you must create at least one serving config for it.|
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
|body|body|[GoogleCloudDiscoveryengineV1betaRecommendRequest](#schemagoogleclouddiscoveryenginev1betarecommendrequest)|false|none|
|» filter|body|string|false|Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported. Examples: * (filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold")) * (filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green")) If your filter blocks all results, the API will return generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to True in RecommendRequest.params to receive empty results instead. Note that the API will never return Documents with storageStatus of "EXPIRED" or "DELETED" regardless of filter choices.|
|» pageSize|body|integer(int32)|false|Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.|
|» params|body|object|false|Additional domain specific parameters for the recommendations. Allowed values: * `returnDocument`: Boolean. If set to true, the associated Document object will be returned in RecommendResponse.results.document. * `returnScore`: Boolean. If set to true, the recommendation 'score' corresponding to each returned Document will be set in RecommendResponse.results.metadata. The given 'score' indicates the probability of a Document conversion given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of: * 'no-diversity' * 'low-diversity' * 'medium-diversity' * 'high-diversity' * 'auto-diversity' This gives request-level control and adjusts recommendation results based on Document category.|
|» » **additionalProperties**|body|object|false|none|
|» userEvent|body|[GoogleCloudDiscoveryengineV1betaUserEvent](#schemagoogleclouddiscoveryenginev1betauserevent)|false|Required. Context about the user, what they are looking at and what action they took to trigger the Recommend request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserEvent.user_pseudo_id or UserEvent.user_info.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserEvent.user_pseudo_id to a random unique ID and leave UserEvent.user_info.user_id unset.|
|» userLabels|body|object|false|The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.|
|» » **additionalProperties**|body|string|false|none|
|» validateOnly|body|boolean|false|Use validate only mode for this recommendation query. If set to true, a fake model will be used that returns arbitrary Document IDs. Note that the validate only mode should only be used for testing the API, or if the model is not ready.|

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
  "attributionToken": "string",
  "missingIds": [
    "string"
  ],
  "results": [
    {
      "document": {
        "id": "string",
        "jsonData": "string",
        "name": "string",
        "parentDocumentId": "string",
        "schemaId": "string",
        "structData": {
          "property1": null,
          "property2": null
        }
      },
      "id": "string",
      "metadata": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "validateOnly": true
}
```

<h3 id="discoveryengineprojectslocationsdatastoresservingconfigsrecommend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDiscoveryengineV1betaRecommendResponse](#schemagoogleclouddiscoveryenginev1betarecommendresponse)|

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

<h2 id="tocS_GoogleCloudDiscoveryengineLoggingErrorContext">GoogleCloudDiscoveryengineLoggingErrorContext</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryengineloggingerrorcontext"></a>
<a id="schema_GoogleCloudDiscoveryengineLoggingErrorContext"></a>
<a id="tocSgoogleclouddiscoveryengineloggingerrorcontext"></a>
<a id="tocsgoogleclouddiscoveryengineloggingerrorcontext"></a>

```json
{
  "httpRequest": {
    "responseStatusCode": 0
  },
  "reportLocation": {
    "functionName": "string"
  }
}
```

A description of the context in which an error occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpRequest|[GoogleCloudDiscoveryengineLoggingHttpRequestContext](#schemagoogleclouddiscoveryenginelogginghttprequestcontext)|false|none|The HTTP request which was processed when the error was triggered.|
|reportLocation|[GoogleCloudDiscoveryengineLoggingSourceLocation](#schemagoogleclouddiscoveryengineloggingsourcelocation)|false|none|The location in the source code where the decision was made to report the error, usually the place where it was logged.|

<h2 id="tocS_GoogleCloudDiscoveryengineLoggingErrorLog">GoogleCloudDiscoveryengineLoggingErrorLog</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryengineloggingerrorlog"></a>
<a id="schema_GoogleCloudDiscoveryengineLoggingErrorLog"></a>
<a id="tocSgoogleclouddiscoveryengineloggingerrorlog"></a>
<a id="tocsgoogleclouddiscoveryengineloggingerrorlog"></a>

```json
{
  "context": {
    "httpRequest": {
      "responseStatusCode": 0
    },
    "reportLocation": {
      "functionName": "string"
    }
  },
  "importPayload": {
    "document": "string",
    "gcsPath": "string",
    "lineNumber": "string",
    "operation": "string",
    "userEvent": "string"
  },
  "message": "string",
  "requestPayload": {
    "property1": null,
    "property2": null
  },
  "responsePayload": {
    "property1": null,
    "property2": null
  },
  "serviceContext": {
    "service": "string"
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

An error log which is reported to the Error Reporting system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[GoogleCloudDiscoveryengineLoggingErrorContext](#schemagoogleclouddiscoveryengineloggingerrorcontext)|false|none|A description of the context in which the error occurred.|
|importPayload|[GoogleCloudDiscoveryengineLoggingImportErrorContext](#schemagoogleclouddiscoveryengineloggingimporterrorcontext)|false|none|The error payload that is populated on LRO import APIs.|
|message|string|false|none|A message describing the error.|
|requestPayload|object|false|none|The API request payload, represented as a protocol buffer. Most API request types are supported—for example: * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.DocumentService.CreateDocumentRequest` * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEventRequest`|
|responsePayload|object|false|none|The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported, and no PII is included: * `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend` * `google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEvent` * `google.cloud.discoveryengine.v1alpha.UserEventService.CollectUserEvent`|
|serviceContext|[GoogleCloudDiscoveryengineLoggingServiceContext](#schemagoogleclouddiscoveryengineloggingservicecontext)|false|none|The service context in which this error has occurred.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The RPC status associated with the error log.|

<h2 id="tocS_GoogleCloudDiscoveryengineLoggingHttpRequestContext">GoogleCloudDiscoveryengineLoggingHttpRequestContext</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginelogginghttprequestcontext"></a>
<a id="schema_GoogleCloudDiscoveryengineLoggingHttpRequestContext"></a>
<a id="tocSgoogleclouddiscoveryenginelogginghttprequestcontext"></a>
<a id="tocsgoogleclouddiscoveryenginelogginghttprequestcontext"></a>

```json
{
  "responseStatusCode": 0
}
```

HTTP request data that is related to a reported error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseStatusCode|integer(int32)|false|none|The HTTP response status code for the request.|

<h2 id="tocS_GoogleCloudDiscoveryengineLoggingImportErrorContext">GoogleCloudDiscoveryengineLoggingImportErrorContext</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryengineloggingimporterrorcontext"></a>
<a id="schema_GoogleCloudDiscoveryengineLoggingImportErrorContext"></a>
<a id="tocSgoogleclouddiscoveryengineloggingimporterrorcontext"></a>
<a id="tocsgoogleclouddiscoveryengineloggingimporterrorcontext"></a>

```json
{
  "document": "string",
  "gcsPath": "string",
  "lineNumber": "string",
  "operation": "string",
  "userEvent": "string"
}
```

The error payload that is populated on LRO import APIs, including the following: * `google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments` * `google.cloud.discoveryengine.v1alpha.UserEventService.ImportUserEvents`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|false|none|The detailed content which caused the error on importing a document.|
|gcsPath|string|false|none|Google Cloud Storage file path of the import source. Can be set for batch operation error.|
|lineNumber|string|false|none|Line number of the content in file. Should be empty for permission or batch operation error.|
|operation|string|false|none|The operation resource name of the LRO.|
|userEvent|string|false|none|The detailed content which caused the error on importing a user event.|

<h2 id="tocS_GoogleCloudDiscoveryengineLoggingServiceContext">GoogleCloudDiscoveryengineLoggingServiceContext</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryengineloggingservicecontext"></a>
<a id="schema_GoogleCloudDiscoveryengineLoggingServiceContext"></a>
<a id="tocSgoogleclouddiscoveryengineloggingservicecontext"></a>
<a id="tocsgoogleclouddiscoveryengineloggingservicecontext"></a>

```json
{
  "service": "string"
}
```

Describes a running service that sends errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|string|false|none|An identifier of the service—for example, `discoveryengine.googleapis.com`.|

<h2 id="tocS_GoogleCloudDiscoveryengineLoggingSourceLocation">GoogleCloudDiscoveryengineLoggingSourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryengineloggingsourcelocation"></a>
<a id="schema_GoogleCloudDiscoveryengineLoggingSourceLocation"></a>
<a id="tocSgoogleclouddiscoveryengineloggingsourcelocation"></a>
<a id="tocsgoogleclouddiscoveryengineloggingsourcelocation"></a>

```json
{
  "functionName": "string"
}
```

Indicates a location in the source code of the service for which errors are reported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionName|string|false|none|Human-readable name of a function or method—for example, `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend`.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata">GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1alphaimportdocumentsmetadata"></a>
<a id="schema_GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata"></a>
<a id="tocSgoogleclouddiscoveryenginev1alphaimportdocumentsmetadata"></a>
<a id="tocsgoogleclouddiscoveryenginev1alphaimportdocumentsmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
  "successCount": "string",
  "updateTime": "string"
}
```

Metadata related to the progress of the ImportDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|failureCount|string(int64)|false|none|Count of entries that encountered errors while processing.|
|successCount|string(int64)|false|none|Count of entries that were processed successfully.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1alphaImportDocumentsResponse">GoogleCloudDiscoveryengineV1alphaImportDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1alphaimportdocumentsresponse"></a>
<a id="schema_GoogleCloudDiscoveryengineV1alphaImportDocumentsResponse"></a>
<a id="tocSgoogleclouddiscoveryenginev1alphaimportdocumentsresponse"></a>
<a id="tocsgoogleclouddiscoveryenginev1alphaimportdocumentsresponse"></a>

```json
{
  "errorConfig": {
    "gcsPrefix": "string"
  },
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
  ]
}
```

Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorConfig|[GoogleCloudDiscoveryengineV1alphaImportErrorConfig](#schemagoogleclouddiscoveryenginev1alphaimporterrorconfig)|false|none|Echoes the destination for the complete errors in the request if set.|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1alphaImportErrorConfig">GoogleCloudDiscoveryengineV1alphaImportErrorConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1alphaimporterrorconfig"></a>
<a id="schema_GoogleCloudDiscoveryengineV1alphaImportErrorConfig"></a>
<a id="tocSgoogleclouddiscoveryenginev1alphaimporterrorconfig"></a>
<a id="tocsgoogleclouddiscoveryenginev1alphaimporterrorconfig"></a>

```json
{
  "gcsPrefix": "string"
}
```

Configuration of destination for Import related errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPrefix|string|false|none|Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors will be written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1alphaImportUserEventsMetadata">GoogleCloudDiscoveryengineV1alphaImportUserEventsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1alphaimportusereventsmetadata"></a>
<a id="schema_GoogleCloudDiscoveryengineV1alphaImportUserEventsMetadata"></a>
<a id="tocSgoogleclouddiscoveryenginev1alphaimportusereventsmetadata"></a>
<a id="tocsgoogleclouddiscoveryenginev1alphaimportusereventsmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
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
|successCount|string(int64)|false|none|Count of entries that were processed successfully.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse">GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1alphaimportusereventsresponse"></a>
<a id="schema_GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse"></a>
<a id="tocSgoogleclouddiscoveryenginev1alphaimportusereventsresponse"></a>
<a id="tocsgoogleclouddiscoveryenginev1alphaimportusereventsresponse"></a>

```json
{
  "errorConfig": {
    "gcsPrefix": "string"
  },
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
  "joinedEventsCount": "string",
  "unjoinedEventsCount": "string"
}
```

Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorConfig|[GoogleCloudDiscoveryengineV1alphaImportErrorConfig](#schemagoogleclouddiscoveryenginev1alphaimporterrorconfig)|false|none|Echoes the destination for the complete errors if this field was set in the request.|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|joinedEventsCount|string(int64)|false|none|Count of user events imported with complete existing Documents.|
|unjoinedEventsCount|string(int64)|false|none|Count of user events imported, but with Document information not found in the existing Branch.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1alphaSchema">GoogleCloudDiscoveryengineV1alphaSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1alphaschema"></a>
<a id="schema_GoogleCloudDiscoveryengineV1alphaSchema"></a>
<a id="tocSgoogleclouddiscoveryenginev1alphaschema"></a>
<a id="tocsgoogleclouddiscoveryenginev1alphaschema"></a>

```json
{
  "jsonSchema": "string",
  "name": "string",
  "structSchema": {
    "property1": null,
    "property2": null
  }
}
```

Defines the structure and layout of a type of document data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonSchema|string|false|none|The JSON representation of the schema.|
|name|string|false|none|Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.|
|structSchema|object|false|none|The structured representation of the schema.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaBigQuerySource">GoogleCloudDiscoveryengineV1betaBigQuerySource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betabigquerysource"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaBigQuerySource"></a>
<a id="tocSgoogleclouddiscoveryenginev1betabigquerysource"></a>
<a id="tocsgoogleclouddiscoveryenginev1betabigquerysource"></a>

```json
{
  "dataSchema": "string",
  "datasetId": "string",
  "gcsStagingDir": "string",
  "partitionDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "projectId": "string",
  "tableId": "string"
}
```

BigQuery source import data from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSchema|string|false|none|The schema to use when parsing the data from the source. Supported values for user event imports: * `user_event` (default): One UserEvent per row. Supported values for document imports: * `document` (default): One Document format per row. Each document must have a valid Document.id and one of Document.json_data or Document.struct_data. * `custom`: One custom data per row in arbitrary format that conforms the defined Schema of the data store. This can only be used by the GENERIC Data Store vertical.|
|datasetId|string|false|none|Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.|
|gcsStagingDir|string|false|none|Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.|
|partitionDate|[GoogleTypeDate](#schemagoogletypedate)|false|none|BigQuery time partitioned table's _PARTITIONDATE in YYYY-MM-DD format.|
|projectId|string|false|none|The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.|
|tableId|string|false|none|Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaCompletionInfo">GoogleCloudDiscoveryengineV1betaCompletionInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betacompletioninfo"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaCompletionInfo"></a>
<a id="tocSgoogleclouddiscoveryenginev1betacompletioninfo"></a>
<a id="tocsgoogleclouddiscoveryenginev1betacompletioninfo"></a>

```json
{
  "selectedPosition": 0,
  "selectedSuggestion": "string"
}
```

Detailed completion information including completion attribution token and clicked completion info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedPosition|integer(int32)|false|none|End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0.|
|selectedSuggestion|string|false|none|End user selected CompleteQueryResponse.CompletionResult.suggestion.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaCustomAttribute">GoogleCloudDiscoveryengineV1betaCustomAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betacustomattribute"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaCustomAttribute"></a>
<a id="tocSgoogleclouddiscoveryenginev1betacustomattribute"></a>
<a id="tocsgoogleclouddiscoveryenginev1betacustomattribute"></a>

```json
{
  "numbers": [
    0
  ],
  "text": [
    "string"
  ]
}
```

A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numbers|[number(double)]|false|none|The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.|
|text|[string]|false|none|The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaDocument">GoogleCloudDiscoveryengineV1betaDocument</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betadocument"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaDocument"></a>
<a id="tocSgoogleclouddiscoveryenginev1betadocument"></a>
<a id="tocsgoogleclouddiscoveryenginev1betadocument"></a>

```json
{
  "id": "string",
  "jsonData": "string",
  "name": "string",
  "parentDocumentId": "string",
  "schemaId": "string",
  "structData": {
    "property1": null,
    "property2": null
  }
}
```

Document captures all raw metadata information of items to be recommended or searched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.|
|jsonData|string|false|none|The JSON string representation of the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.|
|name|string|false|none|Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.|
|parentDocumentId|string|false|none|The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.|
|schemaId|string|false|none|The identifier of the schema located in the same data store.|
|structData|object|false|none|The structured JSON data for the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaDocumentInfo">GoogleCloudDiscoveryengineV1betaDocumentInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betadocumentinfo"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaDocumentInfo"></a>
<a id="tocSgoogleclouddiscoveryenginev1betadocumentinfo"></a>
<a id="tocsgoogleclouddiscoveryenginev1betadocumentinfo"></a>

```json
{
  "id": "string",
  "name": "string",
  "promotionIds": [
    "string"
  ],
  "quantity": 0
}
```

Detailed document information associated with a user event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Required. The Document resource ID.|
|name|string|false|none|Required. The Document resource full name, of the form: projects/{project\_id}/locations/{location}/collections/{collection\_id}/dataStores/{data\_store\_id}/branches/{branch\_id}/documents/{document\_id}|
|promotionIds|[string]|false|none|The promotion IDs associated with this Document. Currently, this field is restricted to at most one ID.|
|quantity|integer(int32)|false|none|Quantity of the Document associated with the user event. Defaults to 1. For example, this field will be 2 if two quantities of the same Document are involved in a `add-to-cart` event. Required for events of the following event types: * `add-to-cart` * `purchase`|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaGcsSource">GoogleCloudDiscoveryengineV1betaGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betagcssource"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaGcsSource"></a>
<a id="tocSgoogleclouddiscoveryenginev1betagcssource"></a>
<a id="tocsgoogleclouddiscoveryenginev1betagcssource"></a>

```json
{
  "dataSchema": "string",
  "inputUris": [
    "string"
  ]
}
```

Cloud Storage location for input content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSchema|string|false|none|The schema to use when parsing the data from the source. Supported values for document imports: * `document` (default): One JSON Document per line. Each document must have a valid Document.id. * `content`: Unstructured data (e.g. PDF, HTML). Each file matched by `input_uris` will become a document, with the ID set to the first 128 bits of SHA256(URI) encoded as a hex string. * `custom`: One custom data JSON per row in arbitrary format that conforms the defined Schema of the data store. This can only be used by the GENERIC Data Store vertical. Supported values for user even imports: * `user_event` (default): One JSON UserEvent per line.|
|inputUris|[string]|false|none|Required. Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/*.json`. A request can contain at most 100 files (or 100,000 files if `data_schema` is `content`). Each file can be up to 2 GB (or 100 MB if `data_schema` is `content`).|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportDocumentsMetadata">GoogleCloudDiscoveryengineV1betaImportDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimportdocumentsmetadata"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportDocumentsMetadata"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimportdocumentsmetadata"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimportdocumentsmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
  "successCount": "string",
  "updateTime": "string"
}
```

Metadata related to the progress of the ImportDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|failureCount|string(int64)|false|none|Count of entries that encountered errors while processing.|
|successCount|string(int64)|false|none|Count of entries that were processed successfully.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportDocumentsRequest">GoogleCloudDiscoveryengineV1betaImportDocumentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimportdocumentsrequest"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportDocumentsRequest"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimportdocumentsrequest"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimportdocumentsrequest"></a>

```json
{
  "bigquerySource": {
    "dataSchema": "string",
    "datasetId": "string",
    "gcsStagingDir": "string",
    "partitionDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "projectId": "string",
    "tableId": "string"
  },
  "errorConfig": {
    "gcsPrefix": "string"
  },
  "gcsSource": {
    "dataSchema": "string",
    "inputUris": [
      "string"
    ]
  },
  "inlineSource": {
    "documents": [
      {
        "id": "string",
        "jsonData": "string",
        "name": "string",
        "parentDocumentId": "string",
        "schemaId": "string",
        "structData": {
          "property1": null,
          "property2": null
        }
      }
    ]
  },
  "reconciliationMode": "RECONCILIATION_MODE_UNSPECIFIED"
}
```

Request message for Import methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigquerySource|[GoogleCloudDiscoveryengineV1betaBigQuerySource](#schemagoogleclouddiscoveryenginev1betabigquerysource)|false|none|BigQuery input source.|
|errorConfig|[GoogleCloudDiscoveryengineV1betaImportErrorConfig](#schemagoogleclouddiscoveryenginev1betaimporterrorconfig)|false|none|The desired location of errors incurred during the Import.|
|gcsSource|[GoogleCloudDiscoveryengineV1betaGcsSource](#schemagoogleclouddiscoveryenginev1betagcssource)|false|none|Cloud Storage location for the input content.|
|inlineSource|[GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource](#schemagoogleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource)|false|none|The Inline source for the input content for documents.|
|reconciliationMode|string|false|none|The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.|

#### Enumerated Values

|Property|Value|
|---|---|
|reconciliationMode|RECONCILIATION_MODE_UNSPECIFIED|
|reconciliationMode|INCREMENTAL|
|reconciliationMode|FULL|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource">GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource"></a>

```json
{
  "documents": [
    {
      "id": "string",
      "jsonData": "string",
      "name": "string",
      "parentDocumentId": "string",
      "schemaId": "string",
      "structData": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The inline source for the input config for ImportDocuments method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[[GoogleCloudDiscoveryengineV1betaDocument](#schemagoogleclouddiscoveryenginev1betadocument)]|false|none|Required. A list of documents to update/create. Each document must have a valid Document.id. Recommended max of 100 items.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportDocumentsResponse">GoogleCloudDiscoveryengineV1betaImportDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimportdocumentsresponse"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportDocumentsResponse"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimportdocumentsresponse"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimportdocumentsresponse"></a>

```json
{
  "errorConfig": {
    "gcsPrefix": "string"
  },
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
  ]
}
```

Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorConfig|[GoogleCloudDiscoveryengineV1betaImportErrorConfig](#schemagoogleclouddiscoveryenginev1betaimporterrorconfig)|false|none|Echoes the destination for the complete errors in the request if set.|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportErrorConfig">GoogleCloudDiscoveryengineV1betaImportErrorConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimporterrorconfig"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportErrorConfig"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimporterrorconfig"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimporterrorconfig"></a>

```json
{
  "gcsPrefix": "string"
}
```

Configuration of destination for Import related errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPrefix|string|false|none|Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors will be written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportUserEventsMetadata">GoogleCloudDiscoveryengineV1betaImportUserEventsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimportusereventsmetadata"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportUserEventsMetadata"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimportusereventsmetadata"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimportusereventsmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
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
|successCount|string(int64)|false|none|Count of entries that were processed successfully.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportUserEventsRequest">GoogleCloudDiscoveryengineV1betaImportUserEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimportusereventsrequest"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportUserEventsRequest"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimportusereventsrequest"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimportusereventsrequest"></a>

```json
{
  "bigquerySource": {
    "dataSchema": "string",
    "datasetId": "string",
    "gcsStagingDir": "string",
    "partitionDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "projectId": "string",
    "tableId": "string"
  },
  "errorConfig": {
    "gcsPrefix": "string"
  },
  "gcsSource": {
    "dataSchema": "string",
    "inputUris": [
      "string"
    ]
  },
  "inlineSource": {
    "userEvents": [
      {
        "attributes": {
          "property1": {
            "numbers": [
              0
            ],
            "text": [
              "string"
            ]
          },
          "property2": {
            "numbers": [
              0
            ],
            "text": [
              "string"
            ]
          }
        },
        "attributionToken": "string",
        "completionInfo": {
          "selectedPosition": 0,
          "selectedSuggestion": "string"
        },
        "directUserRequest": true,
        "documents": [
          {
            "id": "string",
            "name": "string",
            "promotionIds": [
              "string"
            ],
            "quantity": 0
          }
        ],
        "eventTime": "string",
        "eventType": "string",
        "filter": "string",
        "mediaInfo": {
          "mediaProgressDuration": "string",
          "mediaProgressPercentage": 0
        },
        "pageInfo": {
          "pageCategory": "string",
          "pageviewId": "string",
          "referrerUri": "string",
          "uri": "string"
        },
        "panel": {
          "displayName": "string",
          "panelId": "string",
          "panelPosition": 0,
          "totalPanels": 0
        },
        "promotionIds": [
          "string"
        ],
        "searchInfo": {
          "offset": 0,
          "orderBy": "string",
          "searchQuery": "string"
        },
        "sessionId": "string",
        "tagIds": [
          "string"
        ],
        "transactionInfo": {
          "cost": 0,
          "currency": "string",
          "discountValue": 0,
          "tax": 0,
          "transactionId": "string",
          "value": 0
        },
        "userInfo": {
          "userAgent": "string",
          "userId": "string"
        },
        "userPseudoId": "string"
      }
    ]
  }
}
```

Request message for the ImportUserEvents request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigquerySource|[GoogleCloudDiscoveryengineV1betaBigQuerySource](#schemagoogleclouddiscoveryenginev1betabigquerysource)|false|none|Required. BigQuery input source.|
|errorConfig|[GoogleCloudDiscoveryengineV1betaImportErrorConfig](#schemagoogleclouddiscoveryenginev1betaimporterrorconfig)|false|none|The desired location of errors incurred during the Import. Cannot be set for inline user event imports.|
|gcsSource|[GoogleCloudDiscoveryengineV1betaGcsSource](#schemagoogleclouddiscoveryenginev1betagcssource)|false|none|Required. Cloud Storage location for the input content.|
|inlineSource|[GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource](#schemagoogleclouddiscoveryenginev1betaimportusereventsrequestinlinesource)|false|none|Required. The Inline source for the input content for UserEvents.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource">GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimportusereventsrequestinlinesource"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimportusereventsrequestinlinesource"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimportusereventsrequestinlinesource"></a>

```json
{
  "userEvents": [
    {
      "attributes": {
        "property1": {
          "numbers": [
            0
          ],
          "text": [
            "string"
          ]
        },
        "property2": {
          "numbers": [
            0
          ],
          "text": [
            "string"
          ]
        }
      },
      "attributionToken": "string",
      "completionInfo": {
        "selectedPosition": 0,
        "selectedSuggestion": "string"
      },
      "directUserRequest": true,
      "documents": [
        {
          "id": "string",
          "name": "string",
          "promotionIds": [
            "string"
          ],
          "quantity": 0
        }
      ],
      "eventTime": "string",
      "eventType": "string",
      "filter": "string",
      "mediaInfo": {
        "mediaProgressDuration": "string",
        "mediaProgressPercentage": 0
      },
      "pageInfo": {
        "pageCategory": "string",
        "pageviewId": "string",
        "referrerUri": "string",
        "uri": "string"
      },
      "panel": {
        "displayName": "string",
        "panelId": "string",
        "panelPosition": 0,
        "totalPanels": 0
      },
      "promotionIds": [
        "string"
      ],
      "searchInfo": {
        "offset": 0,
        "orderBy": "string",
        "searchQuery": "string"
      },
      "sessionId": "string",
      "tagIds": [
        "string"
      ],
      "transactionInfo": {
        "cost": 0,
        "currency": "string",
        "discountValue": 0,
        "tax": 0,
        "transactionId": "string",
        "value": 0
      },
      "userInfo": {
        "userAgent": "string",
        "userId": "string"
      },
      "userPseudoId": "string"
    }
  ]
}
```

The inline source for the input config for ImportUserEvents method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userEvents|[[GoogleCloudDiscoveryengineV1betaUserEvent](#schemagoogleclouddiscoveryenginev1betauserevent)]|false|none|Required. A list of user events to import. Recommended max of 10k items.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaImportUserEventsResponse">GoogleCloudDiscoveryengineV1betaImportUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaimportusereventsresponse"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaImportUserEventsResponse"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaimportusereventsresponse"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaimportusereventsresponse"></a>

```json
{
  "errorConfig": {
    "gcsPrefix": "string"
  },
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
  "joinedEventsCount": "string",
  "unjoinedEventsCount": "string"
}
```

Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorConfig|[GoogleCloudDiscoveryengineV1betaImportErrorConfig](#schemagoogleclouddiscoveryenginev1betaimporterrorconfig)|false|none|Echoes the destination for the complete errors if this field was set in the request.|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|joinedEventsCount|string(int64)|false|none|Count of user events imported with complete existing Documents.|
|unjoinedEventsCount|string(int64)|false|none|Count of user events imported, but with Document information not found in the existing Branch.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaListDocumentsResponse">GoogleCloudDiscoveryengineV1betaListDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betalistdocumentsresponse"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaListDocumentsResponse"></a>
<a id="tocSgoogleclouddiscoveryenginev1betalistdocumentsresponse"></a>
<a id="tocsgoogleclouddiscoveryenginev1betalistdocumentsresponse"></a>

```json
{
  "documents": [
    {
      "id": "string",
      "jsonData": "string",
      "name": "string",
      "parentDocumentId": "string",
      "schemaId": "string",
      "structData": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for DocumentService.ListDocuments method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[[GoogleCloudDiscoveryengineV1betaDocument](#schemagoogleclouddiscoveryenginev1betadocument)]|false|none|The Documents.|
|nextPageToken|string|false|none|A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaMediaInfo">GoogleCloudDiscoveryengineV1betaMediaInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betamediainfo"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaMediaInfo"></a>
<a id="tocSgoogleclouddiscoveryenginev1betamediainfo"></a>
<a id="tocsgoogleclouddiscoveryenginev1betamediainfo"></a>

```json
{
  "mediaProgressDuration": "string",
  "mediaProgressPercentage": 0
}
```

Media-specific user event information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaProgressDuration|string(google-duration)|false|none|The media progress time in seconds, if applicable. For example, if the end user has finished 90 seconds of a playback video, then MediaInfo.media_progress_duration.seconds should be set to 90.|
|mediaProgressPercentage|number(float)|false|none|Media progress should be computed using only the media_progress_duration relative to the media total length. This value must be between [0, 1.0] inclusive. If this is not a playback or the progress cannot be computed (e.g. ongoing livestream), this field should be unset.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaPageInfo">GoogleCloudDiscoveryengineV1betaPageInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betapageinfo"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaPageInfo"></a>
<a id="tocSgoogleclouddiscoveryenginev1betapageinfo"></a>
<a id="tocsgoogleclouddiscoveryenginev1betapageinfo"></a>

```json
{
  "pageCategory": "string",
  "pageviewId": "string",
  "referrerUri": "string",
  "uri": "string"
}
```

Detailed page information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageCategory|string|false|none|The most specific category associated with a category page. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategory" : "Sales > 2017 Black Friday Deals". Required for `view-category-page` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|pageviewId|string|false|none|A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.|
|referrerUri|string|false|none|The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. However, some browser privacy restrictions may cause this field to be empty.|
|uri|string|false|none|Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaPanelInfo">GoogleCloudDiscoveryengineV1betaPanelInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betapanelinfo"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaPanelInfo"></a>
<a id="tocSgoogleclouddiscoveryenginev1betapanelinfo"></a>
<a id="tocsgoogleclouddiscoveryenginev1betapanelinfo"></a>

```json
{
  "displayName": "string",
  "panelId": "string",
  "panelPosition": 0,
  "totalPanels": 0
}
```

Detailed panel information associated with a user event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the panel.|
|panelId|string|false|none|Required. The panel ID.|
|panelPosition|integer(int32)|false|none|The ordered position of the panel, if shown to the user with other panels. If set, then total_panels must also be set.|
|totalPanels|integer(int32)|false|none|The total number of panels, including this one, shown to the user. Must be set if panel_position is set.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaRecommendRequest">GoogleCloudDiscoveryengineV1betaRecommendRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betarecommendrequest"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaRecommendRequest"></a>
<a id="tocSgoogleclouddiscoveryenginev1betarecommendrequest"></a>
<a id="tocsgoogleclouddiscoveryenginev1betarecommendrequest"></a>

```json
{
  "filter": "string",
  "pageSize": 0,
  "params": {
    "property1": null,
    "property2": null
  },
  "userEvent": {
    "attributes": {
      "property1": {
        "numbers": [
          0
        ],
        "text": [
          "string"
        ]
      },
      "property2": {
        "numbers": [
          0
        ],
        "text": [
          "string"
        ]
      }
    },
    "attributionToken": "string",
    "completionInfo": {
      "selectedPosition": 0,
      "selectedSuggestion": "string"
    },
    "directUserRequest": true,
    "documents": [
      {
        "id": "string",
        "name": "string",
        "promotionIds": [
          "string"
        ],
        "quantity": 0
      }
    ],
    "eventTime": "string",
    "eventType": "string",
    "filter": "string",
    "mediaInfo": {
      "mediaProgressDuration": "string",
      "mediaProgressPercentage": 0
    },
    "pageInfo": {
      "pageCategory": "string",
      "pageviewId": "string",
      "referrerUri": "string",
      "uri": "string"
    },
    "panel": {
      "displayName": "string",
      "panelId": "string",
      "panelPosition": 0,
      "totalPanels": 0
    },
    "promotionIds": [
      "string"
    ],
    "searchInfo": {
      "offset": 0,
      "orderBy": "string",
      "searchQuery": "string"
    },
    "sessionId": "string",
    "tagIds": [
      "string"
    ],
    "transactionInfo": {
      "cost": 0,
      "currency": "string",
      "discountValue": 0,
      "tax": 0,
      "transactionId": "string",
      "value": 0
    },
    "userInfo": {
      "userAgent": "string",
      "userId": "string"
    },
    "userPseudoId": "string"
  },
  "userLabels": {
    "property1": "string",
    "property2": "string"
  },
  "validateOnly": true
}
```

Request message for Recommend method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported. Examples: * (filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold")) * (filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green")) If your filter blocks all results, the API will return generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to True in RecommendRequest.params to receive empty results instead. Note that the API will never return Documents with storageStatus of "EXPIRED" or "DELETED" regardless of filter choices.|
|pageSize|integer(int32)|false|none|Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.|
|params|object|false|none|Additional domain specific parameters for the recommendations. Allowed values: * `returnDocument`: Boolean. If set to true, the associated Document object will be returned in RecommendResponse.results.document. * `returnScore`: Boolean. If set to true, the recommendation 'score' corresponding to each returned Document will be set in RecommendResponse.results.metadata. The given 'score' indicates the probability of a Document conversion given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of: * 'no-diversity' * 'low-diversity' * 'medium-diversity' * 'high-diversity' * 'auto-diversity' This gives request-level control and adjusts recommendation results based on Document category.|
|userEvent|[GoogleCloudDiscoveryengineV1betaUserEvent](#schemagoogleclouddiscoveryenginev1betauserevent)|false|none|Required. Context about the user, what they are looking at and what action they took to trigger the Recommend request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserEvent.user_pseudo_id or UserEvent.user_info.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserEvent.user_pseudo_id to a random unique ID and leave UserEvent.user_info.user_id unset.|
|userLabels|object|false|none|The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.|
|validateOnly|boolean|false|none|Use validate only mode for this recommendation query. If set to true, a fake model will be used that returns arbitrary Document IDs. Note that the validate only mode should only be used for testing the API, or if the model is not ready.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaRecommendResponse">GoogleCloudDiscoveryengineV1betaRecommendResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betarecommendresponse"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaRecommendResponse"></a>
<a id="tocSgoogleclouddiscoveryenginev1betarecommendresponse"></a>
<a id="tocsgoogleclouddiscoveryenginev1betarecommendresponse"></a>

```json
{
  "attributionToken": "string",
  "missingIds": [
    "string"
  ],
  "results": [
    {
      "document": {
        "id": "string",
        "jsonData": "string",
        "name": "string",
        "parentDocumentId": "string",
        "schemaId": "string",
        "structData": {
          "property1": null,
          "property2": null
        }
      },
      "id": "string",
      "metadata": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "validateOnly": true
}
```

Response message for Recommend method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributionToken|string|false|none|A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.|
|missingIds|[string]|false|none|IDs of documents in the request that were missing from the default Branch associated with the requested ServingConfig.|
|results|[[GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult](#schemagoogleclouddiscoveryenginev1betarecommendresponserecommendationresult)]|false|none|A list of recommended Documents. The order represents the ranking (from the most relevant Document to the least).|
|validateOnly|boolean|false|none|True if RecommendRequest.validate_only was set.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult">GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betarecommendresponserecommendationresult"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult"></a>
<a id="tocSgoogleclouddiscoveryenginev1betarecommendresponserecommendationresult"></a>
<a id="tocsgoogleclouddiscoveryenginev1betarecommendresponserecommendationresult"></a>

```json
{
  "document": {
    "id": "string",
    "jsonData": "string",
    "name": "string",
    "parentDocumentId": "string",
    "schemaId": "string",
    "structData": {
      "property1": null,
      "property2": null
    }
  },
  "id": "string",
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

RecommendationResult represents a generic recommendation result with associated metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[GoogleCloudDiscoveryengineV1betaDocument](#schemagoogleclouddiscoveryenginev1betadocument)|false|none|Set if `returnDocument` is set to true in RecommendRequest.params.|
|id|string|false|none|Resource ID of the recommended Document.|
|metadata|object|false|none|Additional Document metadata / annotations. Possible values: * `score`: Recommendation score in double value. Is set if `returnScore` is set to true in RecommendRequest.params.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaSchema">GoogleCloudDiscoveryengineV1betaSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betaschema"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaSchema"></a>
<a id="tocSgoogleclouddiscoveryenginev1betaschema"></a>
<a id="tocsgoogleclouddiscoveryenginev1betaschema"></a>

```json
{
  "jsonSchema": "string",
  "name": "string",
  "structSchema": {
    "property1": null,
    "property2": null
  }
}
```

Defines the structure and layout of a type of document data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonSchema|string|false|none|The JSON representation of the schema.|
|name|string|false|none|Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.|
|structSchema|object|false|none|The structured representation of the schema.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaSearchInfo">GoogleCloudDiscoveryengineV1betaSearchInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betasearchinfo"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaSearchInfo"></a>
<a id="tocSgoogleclouddiscoveryenginev1betasearchinfo"></a>
<a id="tocsgoogleclouddiscoveryenginev1betasearchinfo"></a>

```json
{
  "offset": 0,
  "orderBy": "string",
  "searchQuery": "string"
}
```

Detailed search information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|integer(int32)|false|none|An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an INVALID_ARGUMENT is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|orderBy|string|false|none|The order in which products are returned, if applicable. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|searchQuery|string|false|none|The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaTransactionInfo">GoogleCloudDiscoveryengineV1betaTransactionInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betatransactioninfo"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaTransactionInfo"></a>
<a id="tocSgoogleclouddiscoveryenginev1betatransactioninfo"></a>
<a id="tocsgoogleclouddiscoveryenginev1betatransactioninfo"></a>

```json
{
  "cost": 0,
  "currency": "string",
  "discountValue": 0,
  "tax": 0,
  "transactionId": "string",
  "value": 0
}
```

A transaction represents the entire purchase transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|number(float)|false|none|All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = value - tax - cost|
|currency|string|false|none|Required. Currency code. Use three-character ISO-4217 code.|
|discountValue|number(float)|false|none|The total discount(s) value applied to this transaction. This figure should be excluded from TransactionInfo.value For example, if a user paid TransactionInfo.value amount, then nominal (pre-discount) value of the transaction is the sum of TransactionInfo.value and TransactionInfo.discount_value This means that profit is calculated the same way, regardless of the discount value, and that TransactionInfo.discount_value can be larger than TransactionInfo.value: * Profit = value - tax - cost|
|tax|number(float)|false|none|All the taxes associated with the transaction.|
|transactionId|string|false|none|The transaction ID with a length limit of 128 characters.|
|value|number(float)|false|none|Required. Total non-zero value associated with the transaction. This value may include shipping, tax, or other adjustments to the total value that you want to include.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaUserEvent">GoogleCloudDiscoveryengineV1betaUserEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betauserevent"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaUserEvent"></a>
<a id="tocSgoogleclouddiscoveryenginev1betauserevent"></a>
<a id="tocsgoogleclouddiscoveryenginev1betauserevent"></a>

```json
{
  "attributes": {
    "property1": {
      "numbers": [
        0
      ],
      "text": [
        "string"
      ]
    },
    "property2": {
      "numbers": [
        0
      ],
      "text": [
        "string"
      ]
    }
  },
  "attributionToken": "string",
  "completionInfo": {
    "selectedPosition": 0,
    "selectedSuggestion": "string"
  },
  "directUserRequest": true,
  "documents": [
    {
      "id": "string",
      "name": "string",
      "promotionIds": [
        "string"
      ],
      "quantity": 0
    }
  ],
  "eventTime": "string",
  "eventType": "string",
  "filter": "string",
  "mediaInfo": {
    "mediaProgressDuration": "string",
    "mediaProgressPercentage": 0
  },
  "pageInfo": {
    "pageCategory": "string",
    "pageviewId": "string",
    "referrerUri": "string",
    "uri": "string"
  },
  "panel": {
    "displayName": "string",
    "panelId": "string",
    "panelPosition": 0,
    "totalPanels": 0
  },
  "promotionIds": [
    "string"
  ],
  "searchInfo": {
    "offset": 0,
    "orderBy": "string",
    "searchQuery": "string"
  },
  "sessionId": "string",
  "tagIds": [
    "string"
  ],
  "transactionInfo": {
    "cost": 0,
    "currency": "string",
    "discountValue": 0,
    "tax": 0,
    "transactionId": "string",
    "value": 0
  },
  "userInfo": {
    "userAgent": "string",
    "userId": "string"
  },
  "userPseudoId": "string"
}
```

UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.|
|attributionToken|string|false|none|Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be one of: * PredictResponse.attribution_token for events that are the result of PredictionService.Predict. * SearchResponse.attribution_token for events that are the result of SearchService.Search. * CompleteQueryResponse.attribution_token for events that are the result of SearchService.CompleteQuery. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.|
|completionInfo|[GoogleCloudDiscoveryengineV1betaCompletionInfo](#schemagoogleclouddiscoveryenginev1betacompletioninfo)|false|none|CompleteQuery API details related to the event. This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.|
|directUserRequest|boolean|false|none|Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.|
|documents|[[GoogleCloudDiscoveryengineV1betaDocumentInfo](#schemagoogleclouddiscoveryenginev1betadocumentinfo)]|false|none|List of Documents associated with this user event. This field is optional except for the following event types: * `view-item` * `add-to-cart` * `purchase` * `media-play` * `media-complete` In a `search` event, this field represents the documents returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different UserEvent.documents is desired.|
|eventTime|string(google-datetime)|false|none|Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.|
|eventType|string|false|none|Required. User event type. Allowed values are: Generic values: * `search`: Search for Documents. * `view-item`: Detailed page view of a Document. * `view-item-list`: View of a panel or ordered list of Documents. * `view-home-page`: View of the home page. * `view-category-page`: View of a category page, e.g. Home > Men > Jeans Retail-related values: * `add-to-cart`: Add an item(s) to cart, e.g. in Retail online shopping * `purchase`: Purchase an item(s) Media-related values: * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc.|
|filter|string|false|none|The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for `search` events, the associated SearchService.SearchRequest may contain a filter expression in SearchService.SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for `view-item-list` events that are generated from a PredictionService.PredictRequest, this field may be populated directly from PredictionService.PredictRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
|mediaInfo|[GoogleCloudDiscoveryengineV1betaMediaInfo](#schemagoogleclouddiscoveryenginev1betamediainfo)|false|none|Media-specific info.|
|pageInfo|[GoogleCloudDiscoveryengineV1betaPageInfo](#schemagoogleclouddiscoveryenginev1betapageinfo)|false|none|Page metadata such as categories and other critical information for certain event types such as `view-category-page`.|
|panel|[GoogleCloudDiscoveryengineV1betaPanelInfo](#schemagoogleclouddiscoveryenginev1betapanelinfo)|false|none|Panel metadata associated with this user event.|
|promotionIds|[string]|false|none|The promotion IDs if this is an event associated with promotions. Currently, this field is restricted to at most one ID.|
|searchInfo|[GoogleCloudDiscoveryengineV1betaSearchInfo](#schemagoogleclouddiscoveryenginev1betasearchinfo)|false|none|Search API details related to the event. This field should be set for `search` event.|
|sessionId|string|false|none|A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the session_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add UserEvent.user_pseudo_id as prefix.|
|tagIds|[string]|false|none|A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups on the customer end.|
|transactionInfo|[GoogleCloudDiscoveryengineV1betaTransactionInfo](#schemagoogleclouddiscoveryenginev1betatransactioninfo)|false|none|The transaction metadata (if any) associated with this user event.|
|userInfo|[GoogleCloudDiscoveryengineV1betaUserInfo](#schemagoogleclouddiscoveryenginev1betauserinfo)|false|none|Information about the end user.|
|userPseudoId|string|false|none|Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.|

<h2 id="tocS_GoogleCloudDiscoveryengineV1betaUserInfo">GoogleCloudDiscoveryengineV1betaUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddiscoveryenginev1betauserinfo"></a>
<a id="schema_GoogleCloudDiscoveryengineV1betaUserInfo"></a>
<a id="tocSgoogleclouddiscoveryenginev1betauserinfo"></a>
<a id="tocsgoogleclouddiscoveryenginev1betauserinfo"></a>

```json
{
  "userAgent": "string",
  "userId": "string"
}
```

Information of an end user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userAgent|string|false|none|User agent as included in the HTTP header. Required for getting SearchResponse.sponsored_results. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.|
|userId|string|false|none|Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|

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

<h2 id="tocS_GoogleTypeDate">GoogleTypeDate</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedate"></a>
<a id="schema_GoogleTypeDate"></a>
<a id="tocSgoogletypedate"></a>
<a id="tocsgoogletypedate"></a>

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
