<h1 id="cloud-dataplex-api">Cloud Dataplex API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Dataplex API is used to manage the lifecycle of data lakes.

Base URLs:

* <a href="https://dataplex.googleapis.com/">https://dataplex.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/dataplex/docs">External documentation</a>

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

<h1 id="cloud-dataplex-api-projects">projects</h1>

## dataplex.projects.locations.operations.get

<a id="opIddataplex.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="dataplexprojectslocationsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
|view|query|string|false|Optional. Used to select the subset of entity information to return. Defaults to BASIC.|
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
|view|ENTITY_VIEW_UNSPECIFIED|
|view|BASIC|
|view|SCHEMA|
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

<h3 id="dataplexprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.entities.update

<a id="opIddataplex.projects.locations.lakes.zones.entities.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asset": "string",
    "dataPath": "string",
    "dataPathPattern": "string",
    "description": "string",
    "displayName": "string",
    "etag": "string",
    "format": {
      "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
      "csv": {
        "delimiter": "string",
        "encoding": "string",
        "headerRows": 0,
        "quote": "string"
      },
      "iceberg": {
        "metadataLocation": "string"
      },
      "json": {
        "encoding": "string"
      },
      "mimeType": "string"
    },
    "id": "string",
    "schema": {
      "fields": [
        {
          "description": "string",
          "fields": [
            {}
          ],
          "mode": "MODE_UNSPECIFIED",
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "partitionFields": [
        {
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
      "userManaged": true
    },
    "system": "STORAGE_SYSTEM_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`PUT /v1/{name}`

Update a metadata entity. Only supports full resource update.

> Body parameter

```json
{
  "asset": "string",
  "dataPath": "string",
  "dataPathPattern": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "format": {
    "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
    "csv": {
      "delimiter": "string",
      "encoding": "string",
      "headerRows": 0,
      "quote": "string"
    },
    "iceberg": {
      "metadataLocation": "string"
    },
    "json": {
      "encoding": "string"
    },
    "mimeType": "string"
  },
  "id": "string",
  "schema": {
    "fields": [
      {
        "description": "string",
        "fields": [
          {}
        ],
        "mode": "MODE_UNSPECIFIED",
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionFields": [
      {
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
    "userManaged": true
  },
  "system": "STORAGE_SYSTEM_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="dataplexprojectslocationslakeszonesentitiesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Entity](#schemagoogleclouddataplexv1entity)|false|none|
|» asset|body|string|false|Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.|
|» dataPath|body|string|false|Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.|
|» dataPathPattern|body|string|false|Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**/*.csv.|
|» description|body|string|false|Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.|
|» displayName|body|string|false|Optional. Display name must be shorter than or equal to 256 characters.|
|» etag|body|string|false|Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.|
|» format|body|[GoogleCloudDataplexV1StorageFormat](#schemagoogleclouddataplexv1storageformat)|false|Required. Identifies the storage format of the entity data. It does not apply to entities with data stored in BigQuery.|
|» id|body|string|false|Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters.|
|» schema|body|[GoogleCloudDataplexV1Schema](#schemagoogleclouddataplexv1schema)|false|Required. The description of the data structure and layout. The schema is not included in list responses. It is only included in SCHEMA and FULL entity views of a GetEntity response.|
|» system|body|string|false|Required. Immutable. Identifies the storage system of the entity data.|
|» type|body|string|false|Required. Immutable. The type of entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» system|STORAGE_SYSTEM_UNSPECIFIED|
|» system|CLOUD_STORAGE|
|» system|BIGQUERY|
|» type|TYPE_UNSPECIFIED|
|» type|TABLE|
|» type|FILESET|

> Example responses

> 200 Response

```json
{
  "access": {
    "read": "ACCESS_MODE_UNSPECIFIED"
  },
  "asset": "string",
  "catalogEntry": "string",
  "compatibility": {
    "bigquery": {
      "compatible": true,
      "reason": "string"
    },
    "hiveMetastore": {
      "compatible": true,
      "reason": "string"
    }
  },
  "createTime": "string",
  "dataPath": "string",
  "dataPathPattern": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "format": {
    "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
    "csv": {
      "delimiter": "string",
      "encoding": "string",
      "headerRows": 0,
      "quote": "string"
    },
    "format": "FORMAT_UNSPECIFIED",
    "iceberg": {
      "metadataLocation": "string"
    },
    "json": {
      "encoding": "string"
    },
    "mimeType": "string"
  },
  "id": "string",
  "name": "string",
  "schema": {
    "fields": [
      {
        "description": "string",
        "fields": [
          {}
        ],
        "mode": "MODE_UNSPECIFIED",
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionFields": [
      {
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
    "userManaged": true
  },
  "system": "STORAGE_SYSTEM_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

<h3 id="dataplexprojectslocationslakeszonesentitiesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1Entity](#schemagoogleclouddataplexv1entity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.operations.delete

<a id="opIddataplex.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

<h3 id="dataplexprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|etag|query|string|false|Optional. The etag associated with the partition.|
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

<h3 id="dataplexprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.assets.patch

<a id="opIddataplex.projects.locations.lakes.zones.assets.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "discoverySpec": {
      "csvOptions": {
        "delimiter": "string",
        "disableTypeInference": true,
        "encoding": "string",
        "headerRows": 0
      },
      "enabled": true,
      "excludePatterns": [
        "string"
      ],
      "includePatterns": [
        "string"
      ],
      "jsonOptions": {
        "disableTypeInference": true,
        "encoding": "string"
      },
      "schedule": "string"
    },
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceSpec": {
      "name": "string",
      "readAccessMode": "ACCESS_MODE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED"
    }
  }'
```

`PATCH /v1/{name}`

Updates an asset resource.

> Body parameter

```json
{
  "description": "string",
  "discoverySpec": {
    "csvOptions": {
      "delimiter": "string",
      "disableTypeInference": true,
      "encoding": "string",
      "headerRows": 0
    },
    "enabled": true,
    "excludePatterns": [
      "string"
    ],
    "includePatterns": [
      "string"
    ],
    "jsonOptions": {
      "disableTypeInference": true,
      "encoding": "string"
    },
    "schedule": "string"
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "resourceSpec": {
    "name": "string",
    "readAccessMode": "ACCESS_MODE_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

<h3 id="dataplexprojectslocationslakeszonesassetspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.|
|updateMask|query|string|false|Required. Mask of fields to update.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Asset](#schemagoogleclouddataplexv1asset)|false|none|
|» description|body|string|false|Optional. Description of the asset.|
|» discoverySpec|body|[GoogleCloudDataplexV1AssetDiscoverySpec](#schemagoogleclouddataplexv1assetdiscoveryspec)|false|Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» labels|body|object|false|Optional. User defined labels for the asset.|
|» » **additionalProperties**|body|string|false|none|
|» resourceSpec|body|[GoogleCloudDataplexV1AssetResourceSpec](#schemagoogleclouddataplexv1assetresourcespec)|false|Required. Specification of the resource that is referenced by this asset.|

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

<h3 id="dataplexprojectslocationslakeszonesassetspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.list

<a id="opIddataplex.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="dataplexprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.|
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

<h3 id="dataplexprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudLocationListLocationsResponse](#schemagooglecloudlocationlistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.operations.list

<a id="opIddataplex.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

<h3 id="dataplexprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="dataplexprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.operations.cancel

<a id="opIddataplex.projects.locations.operations.cancel"></a>

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

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

> Body parameter

```json
{}
```

<h3 id="dataplexprojectslocationsoperationscancel-parameters">Parameters</h3>

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
|body|body|[GoogleLongrunningCancelOperationRequest](#schemagooglelongrunningcanceloperationrequest)|false|none|

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

<h3 id="dataplexprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.tasks.run

<a id="opIddataplex.projects.locations.lakes.tasks.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:run`

Run an on demand execution of a Task.

> Body parameter

```json
{}
```

<h3 id="dataplexprojectslocationslakestasksrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}.|
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
|body|body|[GoogleCloudDataplexV1RunTaskRequest](#schemagoogleclouddataplexv1runtaskrequest)|false|none|

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
  "job": {
    "endTime": "string",
    "message": "string",
    "name": "string",
    "retryCount": 0,
    "service": "SERVICE_UNSPECIFIED",
    "serviceJob": "string",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "uid": "string"
  }
}
```

<h3 id="dataplexprojectslocationslakestasksrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1RunTaskResponse](#schemagoogleclouddataplexv1runtaskresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.assets.actions.list

<a id="opIddataplex.projects.locations.lakes.zones.assets.actions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/actions`

Lists action resources in an asset.

<h3 id="dataplexprojectslocationslakeszonesassetsactionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.|
|pageSize|query|integer|false|Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListAssetActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssetActions must match the call that provided the page token.|
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
  "actions": [
    {
      "asset": "string",
      "category": "CATEGORY_UNSPECIFIED",
      "dataLocations": [
        "string"
      ],
      "detectTime": "string",
      "failedSecurityPolicyApply": {
        "asset": "string"
      },
      "incompatibleDataSchema": {
        "existingSchema": "string",
        "newSchema": "string",
        "sampledDataLocations": [
          "string"
        ],
        "schemaChange": "SCHEMA_CHANGE_UNSPECIFIED",
        "table": "string"
      },
      "invalidDataFormat": {
        "expectedFormat": "string",
        "newFormat": "string",
        "sampledDataLocations": [
          "string"
        ]
      },
      "invalidDataOrganization": {},
      "invalidDataPartition": {
        "expectedStructure": "PARTITION_STRUCTURE_UNSPECIFIED"
      },
      "issue": "string",
      "lake": "string",
      "missingData": {},
      "missingResource": {},
      "name": "string",
      "unauthorizedResource": {},
      "zone": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataplexprojectslocationslakeszonesassetsactionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListActionsResponse](#schemagoogleclouddataplexv1listactionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.assets.list

<a id="opIddataplex.projects.locations.lakes.zones.assets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/assets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/assets`

Lists asset resources in a zone.

<h3 id="dataplexprojectslocationslakeszonesassetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.|
|filter|query|string|false|Optional. Filter request.|
|orderBy|query|string|false|Optional. Order by fields for the result.|
|pageSize|query|integer|false|Optional. Maximum number of asset to return. The service may return fewer than this value. If unspecified, at most 10 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListAssets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssets must match the call that provided the page token.|
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
  "assets": [
    {
      "createTime": "string",
      "description": "string",
      "discoverySpec": {
        "csvOptions": {
          "delimiter": "string",
          "disableTypeInference": true,
          "encoding": "string",
          "headerRows": 0
        },
        "enabled": true,
        "excludePatterns": [
          "string"
        ],
        "includePatterns": [
          "string"
        ],
        "jsonOptions": {
          "disableTypeInference": true,
          "encoding": "string"
        },
        "schedule": "string"
      },
      "discoveryStatus": {
        "lastRunDuration": "string",
        "lastRunTime": "string",
        "message": "string",
        "state": "STATE_UNSPECIFIED",
        "stats": {
          "dataItems": "string",
          "dataSize": "string",
          "filesets": "string",
          "tables": "string"
        },
        "updateTime": "string"
      },
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "resourceSpec": {
        "name": "string",
        "readAccessMode": "ACCESS_MODE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      },
      "resourceStatus": {
        "managedAccessIdentity": "string",
        "message": "string",
        "state": "STATE_UNSPECIFIED",
        "updateTime": "string"
      },
      "securityStatus": {
        "message": "string",
        "state": "STATE_UNSPECIFIED",
        "updateTime": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataplexprojectslocationslakeszonesassetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListAssetsResponse](#schemagoogleclouddataplexv1listassetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.assets.create

<a id="opIddataplex.projects.locations.lakes.zones.assets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/assets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "discoverySpec": {
      "csvOptions": {
        "delimiter": "string",
        "disableTypeInference": true,
        "encoding": "string",
        "headerRows": 0
      },
      "enabled": true,
      "excludePatterns": [
        "string"
      ],
      "includePatterns": [
        "string"
      ],
      "jsonOptions": {
        "disableTypeInference": true,
        "encoding": "string"
      },
      "schedule": "string"
    },
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceSpec": {
      "name": "string",
      "readAccessMode": "ACCESS_MODE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/assets`

Creates an asset resource.

> Body parameter

```json
{
  "description": "string",
  "discoverySpec": {
    "csvOptions": {
      "delimiter": "string",
      "disableTypeInference": true,
      "encoding": "string",
      "headerRows": 0
    },
    "enabled": true,
    "excludePatterns": [
      "string"
    ],
    "includePatterns": [
      "string"
    ],
    "jsonOptions": {
      "disableTypeInference": true,
      "encoding": "string"
    },
    "schedule": "string"
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "resourceSpec": {
    "name": "string",
    "readAccessMode": "ACCESS_MODE_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

<h3 id="dataplexprojectslocationslakeszonesassetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.|
|assetId|query|string|false|Required. Asset identifier. This ID will be used to generate names such as table names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the zone.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Asset](#schemagoogleclouddataplexv1asset)|false|none|
|» description|body|string|false|Optional. Description of the asset.|
|» discoverySpec|body|[GoogleCloudDataplexV1AssetDiscoverySpec](#schemagoogleclouddataplexv1assetdiscoveryspec)|false|Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» labels|body|object|false|Optional. User defined labels for the asset.|
|» » **additionalProperties**|body|string|false|none|
|» resourceSpec|body|[GoogleCloudDataplexV1AssetResourceSpec](#schemagoogleclouddataplexv1assetresourcespec)|false|Required. Specification of the resource that is referenced by this asset.|

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

<h3 id="dataplexprojectslocationslakeszonesassetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.dataTaxonomies.attributes.list

<a id="opIddataplex.projects.locations.dataTaxonomies.attributes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/attributes`

Lists Data Attribute resources in a DataTaxonomy.

<h3 id="dataplexprojectslocationsdatataxonomiesattributeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}|
|filter|query|string|false|Optional. Filter request.|
|orderBy|query|string|false|Optional. Order by fields for the result.|
|pageSize|query|integer|false|Optional. Maximum number of DataAttributes to return. The service may return fewer than this value. If unspecified, at most 10 dataAttributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListDataAttributes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributes must match the call that provided the page token.|
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
  "dataAttributes": [
    {
      "attributeCount": 0,
      "createTime": "string",
      "dataAccessSpec": {
        "readers": [
          "string"
        ]
      },
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parentId": "string",
      "resourceAccessSpec": {
        "owners": [
          "string"
        ],
        "readers": [
          "string"
        ],
        "writers": [
          "string"
        ]
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachableLocations": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationsdatataxonomiesattributeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListDataAttributesResponse](#schemagoogleclouddataplexv1listdataattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.dataTaxonomies.attributes.create

<a id="opIddataplex.projects.locations.dataTaxonomies.attributes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataAccessSpec": {
      "readers": [
        "string"
      ]
    },
    "description": "string",
    "displayName": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parentId": "string",
    "resourceAccessSpec": {
      "owners": [
        "string"
      ],
      "readers": [
        "string"
      ],
      "writers": [
        "string"
      ]
    }
  }'
```

`POST /v1/{parent}/attributes`

Create a DataAttribute resource.

> Body parameter

```json
{
  "dataAccessSpec": {
    "readers": [
      "string"
    ]
  },
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parentId": "string",
  "resourceAccessSpec": {
    "owners": [
      "string"
    ],
    "readers": [
      "string"
    ],
    "writers": [
      "string"
    ]
  }
}
```

<h3 id="dataplexprojectslocationsdatataxonomiesattributescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}|
|dataAttributeId|query|string|false|Required. DataAttribute identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the DataTaxonomy.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1DataAttribute](#schemagoogleclouddataplexv1dataattribute)|false|none|
|» dataAccessSpec|body|[GoogleCloudDataplexV1DataAccessSpec](#schemagoogleclouddataplexv1dataaccessspec)|false|Optional. Specified when applied to data stored on the resource (eg: rows, columns in BigQuery Tables).|
|» description|body|string|false|Optional. Description of the DataAttribute.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Optional. User-defined labels for the DataAttribute.|
|» » **additionalProperties**|body|string|false|none|
|» parentId|body|string|false|Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4|
|» resourceAccessSpec|body|[GoogleCloudDataplexV1ResourceAccessSpec](#schemagoogleclouddataplexv1resourceaccessspec)|false|Optional. Specified when applied to a resource (eg: Cloud Storage bucket, BigQuery dataset, BigQuery table).|

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

<h3 id="dataplexprojectslocationsdatataxonomiesattributescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.content.list

<a id="opIddataplex.projects.locations.lakes.content.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/content`

List content.

<h3 id="dataplexprojectslocationslakescontentlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}|
|filter|query|string|false|Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.|
|pageSize|query|integer|false|Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.|
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
  "content": [
    {
      "createTime": "string",
      "dataText": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notebook": {
        "kernelType": "KERNEL_TYPE_UNSPECIFIED"
      },
      "path": "string",
      "sqlScript": {
        "engine": "QUERY_ENGINE_UNSPECIFIED"
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataplexprojectslocationslakescontentlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListContentResponse](#schemagoogleclouddataplexv1listcontentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.content.create

<a id="opIddataplex.projects.locations.lakes.content.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/content \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataText": "string",
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "notebook": {
      "kernelType": "KERNEL_TYPE_UNSPECIFIED"
    },
    "path": "string",
    "sqlScript": {
      "engine": "QUERY_ENGINE_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/content`

Create a content.

> Body parameter

```json
{
  "dataText": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "notebook": {
    "kernelType": "KERNEL_TYPE_UNSPECIFIED"
  },
  "path": "string",
  "sqlScript": {
    "engine": "QUERY_ENGINE_UNSPECIFIED"
  }
}
```

<h3 id="dataplexprojectslocationslakescontentcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Content](#schemagoogleclouddataplexv1content)|false|none|
|» dataText|body|string|false|Required. Content data in string format.|
|» description|body|string|false|Optional. Description of the content.|
|» labels|body|object|false|Optional. User defined labels for the content.|
|» » **additionalProperties**|body|string|false|none|
|» notebook|body|[GoogleCloudDataplexV1ContentNotebook](#schemagoogleclouddataplexv1contentnotebook)|false|Notebook related configurations.|
|» path|body|string|false|Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.|
|» sqlScript|body|[GoogleCloudDataplexV1ContentSqlScript](#schemagoogleclouddataplexv1contentsqlscript)|false|Sql Script related configurations.|

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
  "createTime": "string",
  "dataText": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notebook": {
    "kernelType": "KERNEL_TYPE_UNSPECIFIED"
  },
  "path": "string",
  "sqlScript": {
    "engine": "QUERY_ENGINE_UNSPECIFIED"
  },
  "uid": "string",
  "updateTime": "string"
}
```

<h3 id="dataplexprojectslocationslakescontentcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1Content](#schemagoogleclouddataplexv1content)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.contentitems.list

<a id="opIddataplex.projects.locations.lakes.contentitems.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/contentitems \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/contentitems`

List content.

<h3 id="dataplexprojectslocationslakescontentitemslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}|
|filter|query|string|false|Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.|
|pageSize|query|integer|false|Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.|
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
  "content": [
    {
      "createTime": "string",
      "dataText": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notebook": {
        "kernelType": "KERNEL_TYPE_UNSPECIFIED"
      },
      "path": "string",
      "sqlScript": {
        "engine": "QUERY_ENGINE_UNSPECIFIED"
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataplexprojectslocationslakescontentitemslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListContentResponse](#schemagoogleclouddataplexv1listcontentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.contentitems.create

<a id="opIddataplex.projects.locations.lakes.contentitems.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/contentitems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataText": "string",
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "notebook": {
      "kernelType": "KERNEL_TYPE_UNSPECIFIED"
    },
    "path": "string",
    "sqlScript": {
      "engine": "QUERY_ENGINE_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/contentitems`

Create a content.

> Body parameter

```json
{
  "dataText": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "notebook": {
    "kernelType": "KERNEL_TYPE_UNSPECIFIED"
  },
  "path": "string",
  "sqlScript": {
    "engine": "QUERY_ENGINE_UNSPECIFIED"
  }
}
```

<h3 id="dataplexprojectslocationslakescontentitemscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Content](#schemagoogleclouddataplexv1content)|false|none|
|» dataText|body|string|false|Required. Content data in string format.|
|» description|body|string|false|Optional. Description of the content.|
|» labels|body|object|false|Optional. User defined labels for the content.|
|» » **additionalProperties**|body|string|false|none|
|» notebook|body|[GoogleCloudDataplexV1ContentNotebook](#schemagoogleclouddataplexv1contentnotebook)|false|Notebook related configurations.|
|» path|body|string|false|Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.|
|» sqlScript|body|[GoogleCloudDataplexV1ContentSqlScript](#schemagoogleclouddataplexv1contentsqlscript)|false|Sql Script related configurations.|

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
  "createTime": "string",
  "dataText": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notebook": {
    "kernelType": "KERNEL_TYPE_UNSPECIFIED"
  },
  "path": "string",
  "sqlScript": {
    "engine": "QUERY_ENGINE_UNSPECIFIED"
  },
  "uid": "string",
  "updateTime": "string"
}
```

<h3 id="dataplexprojectslocationslakescontentitemscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1Content](#schemagoogleclouddataplexv1content)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.dataAttributeBindings.list

<a id="opIddataplex.projects.locations.dataAttributeBindings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataAttributeBindings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/dataAttributeBindings`

Lists DataAttributeBinding resources in a project and location.

<h3 id="dataplexprojectslocationsdataattributebindingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the Location: projects/{project_number}/locations/{location_id}|
|filter|query|string|false|Optional. Filter request. Filter using resource: filter=resource:"resource-name" Filter using attribute: filter=attributes:"attribute-name" Filter using attribute in paths list: filter=paths.attributes:"attribute-name"|
|orderBy|query|string|false|Optional. Order by fields for the result.|
|pageSize|query|integer|false|Optional. Maximum number of DataAttributeBindings to return. The service may return fewer than this value. If unspecified, at most 10 DataAttributeBindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListDataAttributeBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributeBindings must match the call that provided the page token.|
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
  "dataAttributeBindings": [
    {
      "attributes": [
        "string"
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "paths": [
        {
          "attributes": [
            "string"
          ],
          "name": "string"
        }
      ],
      "resource": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachableLocations": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationsdataattributebindingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListDataAttributeBindingsResponse](#schemagoogleclouddataplexv1listdataattributebindingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.dataAttributeBindings.create

<a id="opIddataplex.projects.locations.dataAttributeBindings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataAttributeBindings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": [
      "string"
    ],
    "description": "string",
    "displayName": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "paths": [
      {
        "attributes": [
          "string"
        ],
        "name": "string"
      }
    ],
    "resource": "string"
  }'
```

`POST /v1/{parent}/dataAttributeBindings`

Create a DataAttributeBinding resource.

> Body parameter

```json
{
  "attributes": [
    "string"
  ],
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "paths": [
    {
      "attributes": [
        "string"
      ],
      "name": "string"
    }
  ],
  "resource": "string"
}
```

<h3 id="dataplexprojectslocationsdataattributebindingscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}|
|dataAttributeBindingId|query|string|false|Required. DataAttributeBinding identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Location.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1DataAttributeBinding](#schemagoogleclouddataplexv1dataattributebinding)|false|none|
|» attributes|body|[string]|false|Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}|
|» description|body|string|false|Optional. Description of the DataAttributeBinding.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method.|
|» labels|body|object|false|Optional. User-defined labels for the DataAttributeBinding.|
|» » **additionalProperties**|body|string|false|none|
|» paths|body|[[GoogleCloudDataplexV1DataAttributeBindingPath](#schemagoogleclouddataplexv1dataattributebindingpath)]|false|Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings.|
|» resource|body|string|false|Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource.|

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

<h3 id="dataplexprojectslocationsdataattributebindingscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.dataScans.list

<a id="opIddataplex.projects.locations.dataScans.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataScans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/dataScans`

Lists DataScans.

<h3 id="dataplexprojectslocationsdatascanslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a GCP region.|
|filter|query|string|false|Optional. Filter request.|
|orderBy|query|string|false|Optional. Order by fields (name or create_time) for the result. If not specified, the ordering is undefined.|
|pageSize|query|integer|false|Optional. Maximum number of dataScans to return. The service may return fewer than this value. If unspecified, at most 500 scans will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListDataScans call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScans must match the call that provided the page token.|
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
  "dataScans": [
    {
      "createTime": "string",
      "data": {
        "entity": "string",
        "resource": "string"
      },
      "dataProfileResult": {
        "profile": {
          "fields": [
            {
              "mode": "string",
              "name": "string",
              "profile": {
                "distinctRatio": 0,
                "doubleProfile": {
                  "average": 0,
                  "max": 0,
                  "min": 0,
                  "quartiles": [
                    0
                  ],
                  "standardDeviation": 0
                },
                "integerProfile": {
                  "average": 0,
                  "max": "string",
                  "min": "string",
                  "quartiles": [
                    "string"
                  ],
                  "standardDeviation": 0
                },
                "nullRatio": 0,
                "stringProfile": {
                  "averageLength": 0,
                  "maxLength": "string",
                  "minLength": "string"
                },
                "topNValues": [
                  {
                    "count": "string",
                    "value": "string"
                  }
                ]
              },
              "type": "string"
            }
          ]
        },
        "rowCount": "string",
        "scannedData": {
          "incrementalField": {
            "end": "string",
            "field": "string",
            "start": "string"
          }
        }
      },
      "dataProfileSpec": {},
      "dataQualityResult": {
        "dimensions": [
          {
            "passed": true
          }
        ],
        "passed": true,
        "rowCount": "string",
        "rules": [
          {
            "evaluatedCount": "string",
            "failingRowsQuery": "string",
            "nullCount": "string",
            "passRatio": 0,
            "passed": true,
            "passedCount": "string",
            "rule": {
              "column": "string",
              "dimension": "string",
              "ignoreNull": true,
              "nonNullExpectation": {},
              "rangeExpectation": {
                "maxValue": "string",
                "minValue": "string",
                "strictMaxEnabled": true,
                "strictMinEnabled": true
              },
              "regexExpectation": {
                "regex": "string"
              },
              "rowConditionExpectation": {
                "sqlExpression": "string"
              },
              "setExpectation": {
                "values": [
                  "string"
                ]
              },
              "statisticRangeExpectation": {
                "maxValue": "string",
                "minValue": "string",
                "statistic": "STATISTIC_UNDEFINED",
                "strictMaxEnabled": true,
                "strictMinEnabled": true
              },
              "tableConditionExpectation": {
                "sqlExpression": "string"
              },
              "threshold": 0,
              "uniquenessExpectation": {}
            }
          }
        ],
        "scannedData": {
          "incrementalField": {
            "end": "string",
            "field": "string",
            "start": "string"
          }
        }
      },
      "dataQualitySpec": {
        "rules": [
          {
            "column": "string",
            "dimension": "string",
            "ignoreNull": true,
            "nonNullExpectation": {},
            "rangeExpectation": {
              "maxValue": "string",
              "minValue": "string",
              "strictMaxEnabled": true,
              "strictMinEnabled": true
            },
            "regexExpectation": {
              "regex": "string"
            },
            "rowConditionExpectation": {
              "sqlExpression": "string"
            },
            "setExpectation": {
              "values": [
                "string"
              ]
            },
            "statisticRangeExpectation": {
              "maxValue": "string",
              "minValue": "string",
              "statistic": "STATISTIC_UNDEFINED",
              "strictMaxEnabled": true,
              "strictMinEnabled": true
            },
            "tableConditionExpectation": {
              "sqlExpression": "string"
            },
            "threshold": 0,
            "uniquenessExpectation": {}
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "executionSpec": {
        "field": "string",
        "trigger": {
          "onDemand": {},
          "schedule": {
            "cron": "string"
          }
        }
      },
      "executionStatus": {
        "latestJobEndTime": "string",
        "latestJobStartTime": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "DATA_SCAN_TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationsdatascanslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListDataScansResponse](#schemagoogleclouddataplexv1listdatascansresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.dataScans.create

<a id="opIddataplex.projects.locations.dataScans.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataScans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "entity": "string",
      "resource": "string"
    },
    "dataProfileSpec": {},
    "dataQualitySpec": {
      "rules": [
        {
          "column": "string",
          "dimension": "string",
          "ignoreNull": true,
          "nonNullExpectation": {},
          "rangeExpectation": {
            "maxValue": "string",
            "minValue": "string",
            "strictMaxEnabled": true,
            "strictMinEnabled": true
          },
          "regexExpectation": {
            "regex": "string"
          },
          "rowConditionExpectation": {
            "sqlExpression": "string"
          },
          "setExpectation": {
            "values": [
              "string"
            ]
          },
          "statisticRangeExpectation": {
            "maxValue": "string",
            "minValue": "string",
            "statistic": "STATISTIC_UNDEFINED",
            "strictMaxEnabled": true,
            "strictMinEnabled": true
          },
          "tableConditionExpectation": {
            "sqlExpression": "string"
          },
          "threshold": 0,
          "uniquenessExpectation": {}
        }
      ]
    },
    "description": "string",
    "displayName": "string",
    "executionSpec": {
      "field": "string",
      "trigger": {
        "onDemand": {},
        "schedule": {
          "cron": "string"
        }
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/{parent}/dataScans`

Creates a DataScan resource.

> Body parameter

```json
{
  "data": {
    "entity": "string",
    "resource": "string"
  },
  "dataProfileSpec": {},
  "dataQualitySpec": {
    "rules": [
      {
        "column": "string",
        "dimension": "string",
        "ignoreNull": true,
        "nonNullExpectation": {},
        "rangeExpectation": {
          "maxValue": "string",
          "minValue": "string",
          "strictMaxEnabled": true,
          "strictMinEnabled": true
        },
        "regexExpectation": {
          "regex": "string"
        },
        "rowConditionExpectation": {
          "sqlExpression": "string"
        },
        "setExpectation": {
          "values": [
            "string"
          ]
        },
        "statisticRangeExpectation": {
          "maxValue": "string",
          "minValue": "string",
          "statistic": "STATISTIC_UNDEFINED",
          "strictMaxEnabled": true,
          "strictMinEnabled": true
        },
        "tableConditionExpectation": {
          "sqlExpression": "string"
        },
        "threshold": 0,
        "uniquenessExpectation": {}
      }
    ]
  },
  "description": "string",
  "displayName": "string",
  "executionSpec": {
    "field": "string",
    "trigger": {
      "onDemand": {},
      "schedule": {
        "cron": "string"
      }
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="dataplexprojectslocationsdatascanscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a GCP region.|
|dataScanId|query|string|false|Required. DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter. Must be between 1-63 characters. Must be unique within the customer project / location.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1DataScan](#schemagoogleclouddataplexv1datascan)|false|none|
|» data|body|[GoogleCloudDataplexV1DataSource](#schemagoogleclouddataplexv1datasource)|false|Required. The data source for DataScan.|
|» dataProfileSpec|body|[GoogleCloudDataplexV1DataProfileSpec](#schemagoogleclouddataplexv1dataprofilespec)|false|DataProfileScan related setting.|
|» dataQualitySpec|body|[GoogleCloudDataplexV1DataQualitySpec](#schemagoogleclouddataplexv1dataqualityspec)|false|DataQualityScan related setting.|
|» description|body|string|false|Optional. Description of the scan. Must be between 1-1024 characters.|
|» displayName|body|string|false|Optional. User friendly display name. Must be between 1-256 characters.|
|» executionSpec|body|[GoogleCloudDataplexV1DataScanExecutionSpec](#schemagoogleclouddataplexv1datascanexecutionspec)|false|Optional. DataScan execution settings.If not specified, the fields in it will use their default values.|
|» labels|body|object|false|Optional. User-defined labels for the scan.|
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

<h3 id="dataplexprojectslocationsdatascanscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.dataTaxonomies.list

<a id="opIddataplex.projects.locations.dataTaxonomies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataTaxonomies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/dataTaxonomies`

Lists DataTaxonomy resources in a project and location.

<h3 id="dataplexprojectslocationsdatataxonomieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the DataTaxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.|
|filter|query|string|false|Optional. Filter request.|
|orderBy|query|string|false|Optional. Order by fields for the result.|
|pageSize|query|integer|false|Optional. Maximum number of DataTaxonomies to return. The service may return fewer than this value. If unspecified, at most 10 DataTaxonomies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListDataTaxonomies call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataTaxonomies must match the call that provided the page token.|
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
  "dataTaxonomies": [
    {
      "attributeCount": 0,
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachableLocations": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationsdatataxonomieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListDataTaxonomiesResponse](#schemagoogleclouddataplexv1listdatataxonomiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.dataTaxonomies.create

<a id="opIddataplex.projects.locations.dataTaxonomies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataTaxonomies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/{parent}/dataTaxonomies`

Create a DataTaxonomy resource.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="dataplexprojectslocationsdatataxonomiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the data taxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.|
|dataTaxonomyId|query|string|false|Required. DataTaxonomy identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Project.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1DataTaxonomy](#schemagoogleclouddataplexv1datataxonomy)|false|none|
|» description|body|string|false|Optional. Description of the DataTaxonomy.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Optional. User-defined labels for the DataTaxonomy.|
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

<h3 id="dataplexprojectslocationsdatataxonomiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.entities.list

<a id="opIddataplex.projects.locations.lakes.zones.entities.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/entities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/entities`

List metadata entities in a zone.

<h3 id="dataplexprojectslocationslakeszonesentitieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.|
|filter|query|string|false|Optional. The following filter parameters can be added to the URL to limit the entities returned by the API: Entity ID: ?filter="id=entityID" Asset ID: ?filter="asset=assetID" Data path ?filter="data_path=gs://my-bucket" Is HIVE compatible: ?filter="hive_compatible=true" Is BigQuery compatible: ?filter="bigquery_compatible=true"|
|pageSize|query|integer|false|Optional. Maximum number of entities to return. The service may return fewer than this value. If unspecified, 100 entities will be returned by default. The maximum value is 500; larger values will will be truncated to 500.|
|pageToken|query|string|false|Optional. Page token received from a previous ListEntities call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEntities must match the call that provided the page token.|
|view|query|string|false|Required. Specify the entity view to make a partial list request.|
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
|view|ENTITY_VIEW_UNSPECIFIED|
|view|TABLES|
|view|FILESETS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "access": {
        "read": "ACCESS_MODE_UNSPECIFIED"
      },
      "asset": "string",
      "catalogEntry": "string",
      "compatibility": {
        "bigquery": {
          "compatible": true,
          "reason": "string"
        },
        "hiveMetastore": {
          "compatible": true,
          "reason": "string"
        }
      },
      "createTime": "string",
      "dataPath": "string",
      "dataPathPattern": "string",
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "format": {
        "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
        "csv": {
          "delimiter": "string",
          "encoding": "string",
          "headerRows": 0,
          "quote": "string"
        },
        "format": "FORMAT_UNSPECIFIED",
        "iceberg": {
          "metadataLocation": "string"
        },
        "json": {
          "encoding": "string"
        },
        "mimeType": "string"
      },
      "id": "string",
      "name": "string",
      "schema": {
        "fields": [
          {
            "description": "string",
            "fields": [
              {}
            ],
            "mode": "MODE_UNSPECIFIED",
            "name": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "partitionFields": [
          {
            "name": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
        "userManaged": true
      },
      "system": "STORAGE_SYSTEM_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataplexprojectslocationslakeszonesentitieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListEntitiesResponse](#schemagoogleclouddataplexv1listentitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.entities.create

<a id="opIddataplex.projects.locations.lakes.zones.entities.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/entities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asset": "string",
    "dataPath": "string",
    "dataPathPattern": "string",
    "description": "string",
    "displayName": "string",
    "etag": "string",
    "format": {
      "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
      "csv": {
        "delimiter": "string",
        "encoding": "string",
        "headerRows": 0,
        "quote": "string"
      },
      "iceberg": {
        "metadataLocation": "string"
      },
      "json": {
        "encoding": "string"
      },
      "mimeType": "string"
    },
    "id": "string",
    "schema": {
      "fields": [
        {
          "description": "string",
          "fields": [
            {}
          ],
          "mode": "MODE_UNSPECIFIED",
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "partitionFields": [
        {
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
      "userManaged": true
    },
    "system": "STORAGE_SYSTEM_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/entities`

Create a metadata entity.

> Body parameter

```json
{
  "asset": "string",
  "dataPath": "string",
  "dataPathPattern": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "format": {
    "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
    "csv": {
      "delimiter": "string",
      "encoding": "string",
      "headerRows": 0,
      "quote": "string"
    },
    "iceberg": {
      "metadataLocation": "string"
    },
    "json": {
      "encoding": "string"
    },
    "mimeType": "string"
  },
  "id": "string",
  "schema": {
    "fields": [
      {
        "description": "string",
        "fields": [
          {}
        ],
        "mode": "MODE_UNSPECIFIED",
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionFields": [
      {
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
    "userManaged": true
  },
  "system": "STORAGE_SYSTEM_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="dataplexprojectslocationslakeszonesentitiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Entity](#schemagoogleclouddataplexv1entity)|false|none|
|» asset|body|string|false|Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.|
|» dataPath|body|string|false|Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.|
|» dataPathPattern|body|string|false|Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**/*.csv.|
|» description|body|string|false|Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.|
|» displayName|body|string|false|Optional. Display name must be shorter than or equal to 256 characters.|
|» etag|body|string|false|Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.|
|» format|body|[GoogleCloudDataplexV1StorageFormat](#schemagoogleclouddataplexv1storageformat)|false|Required. Identifies the storage format of the entity data. It does not apply to entities with data stored in BigQuery.|
|» id|body|string|false|Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters.|
|» schema|body|[GoogleCloudDataplexV1Schema](#schemagoogleclouddataplexv1schema)|false|Required. The description of the data structure and layout. The schema is not included in list responses. It is only included in SCHEMA and FULL entity views of a GetEntity response.|
|» system|body|string|false|Required. Immutable. Identifies the storage system of the entity data.|
|» type|body|string|false|Required. Immutable. The type of entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» system|STORAGE_SYSTEM_UNSPECIFIED|
|» system|CLOUD_STORAGE|
|» system|BIGQUERY|
|» type|TYPE_UNSPECIFIED|
|» type|TABLE|
|» type|FILESET|

> Example responses

> 200 Response

```json
{
  "access": {
    "read": "ACCESS_MODE_UNSPECIFIED"
  },
  "asset": "string",
  "catalogEntry": "string",
  "compatibility": {
    "bigquery": {
      "compatible": true,
      "reason": "string"
    },
    "hiveMetastore": {
      "compatible": true,
      "reason": "string"
    }
  },
  "createTime": "string",
  "dataPath": "string",
  "dataPathPattern": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "format": {
    "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
    "csv": {
      "delimiter": "string",
      "encoding": "string",
      "headerRows": 0,
      "quote": "string"
    },
    "format": "FORMAT_UNSPECIFIED",
    "iceberg": {
      "metadataLocation": "string"
    },
    "json": {
      "encoding": "string"
    },
    "mimeType": "string"
  },
  "id": "string",
  "name": "string",
  "schema": {
    "fields": [
      {
        "description": "string",
        "fields": [
          {}
        ],
        "mode": "MODE_UNSPECIFIED",
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionFields": [
      {
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
    "userManaged": true
  },
  "system": "STORAGE_SYSTEM_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

<h3 id="dataplexprojectslocationslakeszonesentitiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1Entity](#schemagoogleclouddataplexv1entity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.environments.list

<a id="opIddataplex.projects.locations.lakes.environments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/environments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/environments`

Lists environments under the given lake.

<h3 id="dataplexprojectslocationslakesenvironmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}.|
|filter|query|string|false|Optional. Filter request.|
|orderBy|query|string|false|Optional. Order by fields for the result.|
|pageSize|query|integer|false|Optional. Maximum number of environments to return. The service may return fewer than this value. If unspecified, at most 10 environments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListEnvironments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEnvironments must match the call that provided the page token.|
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
  "environments": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "endpoints": {
        "notebooks": "string",
        "sql": "string"
      },
      "infrastructureSpec": {
        "compute": {
          "diskSizeGb": 0,
          "maxNodeCount": 0,
          "nodeCount": 0
        },
        "osImage": {
          "imageVersion": "string",
          "javaLibraries": [
            "string"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "pythonPackages": [
            "string"
          ]
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "sessionSpec": {
        "enableFastStartup": true,
        "maxIdleDuration": "string"
      },
      "sessionStatus": {
        "active": true
      },
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataplexprojectslocationslakesenvironmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListEnvironmentsResponse](#schemagoogleclouddataplexv1listenvironmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.environments.create

<a id="opIddataplex.projects.locations.lakes.environments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/environments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "infrastructureSpec": {
      "compute": {
        "diskSizeGb": 0,
        "maxNodeCount": 0,
        "nodeCount": 0
      },
      "osImage": {
        "imageVersion": "string",
        "javaLibraries": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonPackages": [
          "string"
        ]
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "sessionSpec": {
      "enableFastStartup": true,
      "maxIdleDuration": "string"
    }
  }'
```

`POST /v1/{parent}/environments`

Create an environment resource.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "infrastructureSpec": {
    "compute": {
      "diskSizeGb": 0,
      "maxNodeCount": 0,
      "nodeCount": 0
    },
    "osImage": {
      "imageVersion": "string",
      "javaLibraries": [
        "string"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "pythonPackages": [
        "string"
      ]
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "sessionSpec": {
    "enableFastStartup": true,
    "maxIdleDuration": "string"
  }
}
```

<h3 id="dataplexprojectslocationslakesenvironmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}.|
|environmentId|query|string|false|Required. Environment identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the lake.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Environment](#schemagoogleclouddataplexv1environment)|false|none|
|» description|body|string|false|Optional. Description of the environment.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» infrastructureSpec|body|[GoogleCloudDataplexV1EnvironmentInfrastructureSpec](#schemagoogleclouddataplexv1environmentinfrastructurespec)|false|Required. Infrastructure specification for the Environment.|
|» labels|body|object|false|Optional. User defined labels for the environment.|
|» » **additionalProperties**|body|string|false|none|
|» sessionSpec|body|[GoogleCloudDataplexV1EnvironmentSessionSpec](#schemagoogleclouddataplexv1environmentsessionspec)|false|Optional. Configuration for sessions created for this environment.|

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

<h3 id="dataplexprojectslocationslakesenvironmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.tasks.jobs.list

<a id="opIddataplex.projects.locations.lakes.tasks.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/jobs`

Lists Jobs under the given task.

<h3 id="dataplexprojectslocationslakestasksjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}.|
|pageSize|query|integer|false|Optional. Maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 10 jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListJobs must match the call that provided the page token.|
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
  "jobs": [
    {
      "endTime": "string",
      "message": "string",
      "name": "string",
      "retryCount": 0,
      "service": "SERVICE_UNSPECIFIED",
      "serviceJob": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "uid": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataplexprojectslocationslakestasksjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListJobsResponse](#schemagoogleclouddataplexv1listjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.list

<a id="opIddataplex.projects.locations.lakes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/lakes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/lakes`

Lists lake resources in a project and location.

<h3 id="dataplexprojectslocationslakeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.|
|filter|query|string|false|Optional. Filter request.|
|orderBy|query|string|false|Optional. Order by fields for the result.|
|pageSize|query|integer|false|Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token.|
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
  "lakes": [
    {
      "assetStatus": {
        "activeAssets": 0,
        "securityPolicyApplyingAssets": 0,
        "updateTime": "string"
      },
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "metastore": {
        "service": "string"
      },
      "metastoreStatus": {
        "endpoint": "string",
        "message": "string",
        "state": "STATE_UNSPECIFIED",
        "updateTime": "string"
      },
      "name": "string",
      "serviceAccount": "string",
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachableLocations": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationslakeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListLakesResponse](#schemagoogleclouddataplexv1listlakesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.create

<a id="opIddataplex.projects.locations.lakes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/lakes \
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
    },
    "metastore": {
      "service": "string"
    }
  }'
```

`POST /v1/{parent}/lakes`

Creates a lake resource.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "metastore": {
    "service": "string"
  }
}
```

<h3 id="dataplexprojectslocationslakescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.|
|lakeId|query|string|false|Required. Lake identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the customer project / location.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Lake](#schemagoogleclouddataplexv1lake)|false|none|
|» description|body|string|false|Optional. Description of the lake.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» labels|body|object|false|Optional. User-defined labels for the lake.|
|» » **additionalProperties**|body|string|false|none|
|» metastore|body|[GoogleCloudDataplexV1LakeMetastore](#schemagoogleclouddataplexv1lakemetastore)|false|Optional. Settings to manage lake and Dataproc Metastore service instance association.|

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

<h3 id="dataplexprojectslocationslakescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.entities.partitions.list

<a id="opIddataplex.projects.locations.lakes.zones.entities.partitions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/partitions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/partitions`

List metadata partitions of an entity.

<h3 id="dataplexprojectslocationslakeszonesentitiespartitionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.|
|filter|query|string|false|Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: logic operators: AND, OR comparison operators: <, >, >=, <= ,=, != LIKE operators: The right hand of a LIKE operator supports "." and "*" for wildcard searches, for example "value1 LIKE ".*oo.*" parenthetical grouping: ( )Sample filter expression: `?filter="key1 < value1 OR key2 > value2"Notes: Keys to the left of operators are case insensitive. Partition results are sorted first by creation time, then by lexicographic order. Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.|
|pageSize|query|integer|false|Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.|
|pageToken|query|string|false|Optional. Page token received from a previous ListPartitions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListPartitions must match the call that provided the page token.|
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
  "partitions": [
    {
      "etag": "string",
      "location": "string",
      "name": "string",
      "values": [
        "string"
      ]
    }
  ]
}
```

<h3 id="dataplexprojectslocationslakeszonesentitiespartitionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListPartitionsResponse](#schemagoogleclouddataplexv1listpartitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.entities.partitions.create

<a id="opIddataplex.projects.locations.lakes.zones.entities.partitions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/partitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "location": "string",
    "values": [
      "string"
    ]
  }'
```

`POST /v1/{parent}/partitions`

Create a metadata partition.

> Body parameter

```json
{
  "etag": "string",
  "location": "string",
  "values": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationslakeszonesentitiespartitionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Partition](#schemagoogleclouddataplexv1partition)|false|none|
|» etag|body|string|false|Optional. The etag for this partition.|
|» location|body|string|false|Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/|
|» values|body|[string]|false|Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity.|

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
  "etag": "string",
  "location": "string",
  "name": "string",
  "values": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationslakeszonesentitiespartitionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1Partition](#schemagoogleclouddataplexv1partition)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.environments.sessions.list

<a id="opIddataplex.projects.locations.lakes.environments.sessions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/sessions`

Lists session resources in an environment.

<h3 id="dataplexprojectslocationslakesenvironmentssessionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}.|
|filter|query|string|false|Optional. Filter request. The following mode filter is supported to return only the sessions belonging to the requester when the mode is USER and return sessions of all the users when the mode is ADMIN. When no filter is sent default to USER mode. NOTE: When the mode is ADMIN, the requester should have dataplex.environments.listAllSessions permission to list all sessions, in absence of the permission, the request fails.mode = ADMIN \| USER|
|pageSize|query|integer|false|Optional. Maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 10 sessions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListSessions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListSessions must match the call that provided the page token.|
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
  "sessions": [
    {
      "createTime": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "userId": "string"
    }
  ]
}
```

<h3 id="dataplexprojectslocationslakesenvironmentssessionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListSessionsResponse](#schemagoogleclouddataplexv1listsessionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.tasks.list

<a id="opIddataplex.projects.locations.lakes.tasks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/tasks`

Lists tasks under the given lake.

<h3 id="dataplexprojectslocationslakestaskslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.|
|filter|query|string|false|Optional. Filter request.|
|orderBy|query|string|false|Optional. Order by fields for the result.|
|pageSize|query|integer|false|Optional. Maximum number of tasks to return. The service may return fewer than this value. If unspecified, at most 10 tasks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.|
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
  "tasks": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "executionSpec": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "kmsKey": "string",
        "maxJobExecutionLifetime": "string",
        "project": "string",
        "serviceAccount": "string"
      },
      "executionStatus": {
        "latestJob": {
          "endTime": "string",
          "message": "string",
          "name": "string",
          "retryCount": 0,
          "service": "SERVICE_UNSPECIFIED",
          "serviceJob": "string",
          "startTime": "string",
          "state": "STATE_UNSPECIFIED",
          "uid": "string"
        },
        "updateTime": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notebook": {
        "archiveUris": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "infrastructureSpec": {
          "batch": {
            "executorsCount": 0,
            "maxExecutorsCount": 0
          },
          "containerImage": {
            "image": "string",
            "javaJars": [
              "string"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "pythonPackages": [
              "string"
            ]
          },
          "vpcNetwork": {
            "network": "string",
            "networkTags": [
              "string"
            ],
            "subNetwork": "string"
          }
        },
        "notebook": "string"
      },
      "spark": {
        "archiveUris": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "infrastructureSpec": {
          "batch": {
            "executorsCount": 0,
            "maxExecutorsCount": 0
          },
          "containerImage": {
            "image": "string",
            "javaJars": [
              "string"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "pythonPackages": [
              "string"
            ]
          },
          "vpcNetwork": {
            "network": "string",
            "networkTags": [
              "string"
            ],
            "subNetwork": "string"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "pythonScriptFile": "string",
        "sqlScript": "string",
        "sqlScriptFile": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "triggerSpec": {
        "disabled": true,
        "maxRetries": 0,
        "schedule": "string",
        "startTime": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "unreachableLocations": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationslakestaskslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListTasksResponse](#schemagoogleclouddataplexv1listtasksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.tasks.create

<a id="opIddataplex.projects.locations.lakes.tasks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "executionSpec": {
      "args": {
        "property1": "string",
        "property2": "string"
      },
      "kmsKey": "string",
      "maxJobExecutionLifetime": "string",
      "project": "string",
      "serviceAccount": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "notebook": {
      "archiveUris": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "infrastructureSpec": {
        "batch": {
          "executorsCount": 0,
          "maxExecutorsCount": 0
        },
        "containerImage": {
          "image": "string",
          "javaJars": [
            "string"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "pythonPackages": [
            "string"
          ]
        },
        "vpcNetwork": {
          "network": "string",
          "networkTags": [
            "string"
          ],
          "subNetwork": "string"
        }
      },
      "notebook": "string"
    },
    "spark": {
      "archiveUris": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "infrastructureSpec": {
        "batch": {
          "executorsCount": 0,
          "maxExecutorsCount": 0
        },
        "containerImage": {
          "image": "string",
          "javaJars": [
            "string"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "pythonPackages": [
            "string"
          ]
        },
        "vpcNetwork": {
          "network": "string",
          "networkTags": [
            "string"
          ],
          "subNetwork": "string"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "pythonScriptFile": "string",
      "sqlScript": "string",
      "sqlScriptFile": "string"
    },
    "triggerSpec": {
      "disabled": true,
      "maxRetries": 0,
      "schedule": "string",
      "startTime": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/tasks`

Creates a task resource within a lake.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "executionSpec": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "kmsKey": "string",
    "maxJobExecutionLifetime": "string",
    "project": "string",
    "serviceAccount": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "notebook": {
    "archiveUris": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "infrastructureSpec": {
      "batch": {
        "executorsCount": 0,
        "maxExecutorsCount": 0
      },
      "containerImage": {
        "image": "string",
        "javaJars": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonPackages": [
          "string"
        ]
      },
      "vpcNetwork": {
        "network": "string",
        "networkTags": [
          "string"
        ],
        "subNetwork": "string"
      }
    },
    "notebook": "string"
  },
  "spark": {
    "archiveUris": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "infrastructureSpec": {
      "batch": {
        "executorsCount": 0,
        "maxExecutorsCount": 0
      },
      "containerImage": {
        "image": "string",
        "javaJars": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonPackages": [
          "string"
        ]
      },
      "vpcNetwork": {
        "network": "string",
        "networkTags": [
          "string"
        ],
        "subNetwork": "string"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "pythonScriptFile": "string",
    "sqlScript": "string",
    "sqlScriptFile": "string"
  },
  "triggerSpec": {
    "disabled": true,
    "maxRetries": 0,
    "schedule": "string",
    "startTime": "string",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

<h3 id="dataplexprojectslocationslakestaskscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.|
|taskId|query|string|false|Required. Task identifier.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
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
|body|body|[GoogleCloudDataplexV1Task](#schemagoogleclouddataplexv1task)|false|none|
|» description|body|string|false|Optional. Description of the task.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» executionSpec|body|[GoogleCloudDataplexV1TaskExecutionSpec](#schemagoogleclouddataplexv1taskexecutionspec)|false|Required. Spec related to how a task is executed.|
|» labels|body|object|false|Optional. User-defined labels for the task.|
|» » **additionalProperties**|body|string|false|none|
|» notebook|body|[GoogleCloudDataplexV1TaskNotebookTaskConfig](#schemagoogleclouddataplexv1tasknotebooktaskconfig)|false|Config related to running scheduled Notebooks.|
|» spark|body|[GoogleCloudDataplexV1TaskSparkTaskConfig](#schemagoogleclouddataplexv1tasksparktaskconfig)|false|Config related to running custom Spark tasks.|
|» triggerSpec|body|[GoogleCloudDataplexV1TaskTriggerSpec](#schemagoogleclouddataplexv1tasktriggerspec)|false|Required. Spec related to how often and when a task should be triggered.|

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

<h3 id="dataplexprojectslocationslakestaskscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.list

<a id="opIddataplex.projects.locations.lakes.zones.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/zones \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/zones`

Lists zone resources in a lake.

<h3 id="dataplexprojectslocationslakeszoneslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.|
|filter|query|string|false|Optional. Filter request.|
|orderBy|query|string|false|Optional. Order by fields for the result.|
|pageSize|query|integer|false|Optional. Maximum number of zones to return. The service may return fewer than this value. If unspecified, at most 10 zones will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.|
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
  "zones": [
    {
      "assetStatus": {
        "activeAssets": 0,
        "securityPolicyApplyingAssets": 0,
        "updateTime": "string"
      },
      "createTime": "string",
      "description": "string",
      "discoverySpec": {
        "csvOptions": {
          "delimiter": "string",
          "disableTypeInference": true,
          "encoding": "string",
          "headerRows": 0
        },
        "enabled": true,
        "excludePatterns": [
          "string"
        ],
        "includePatterns": [
          "string"
        ],
        "jsonOptions": {
          "disableTypeInference": true,
          "encoding": "string"
        },
        "schedule": "string"
      },
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "resourceSpec": {
        "locationType": "LOCATION_TYPE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="dataplexprojectslocationslakeszoneslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDataplexV1ListZonesResponse](#schemagoogleclouddataplexv1listzonesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.create

<a id="opIddataplex.projects.locations.lakes.zones.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/zones \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "discoverySpec": {
      "csvOptions": {
        "delimiter": "string",
        "disableTypeInference": true,
        "encoding": "string",
        "headerRows": 0
      },
      "enabled": true,
      "excludePatterns": [
        "string"
      ],
      "includePatterns": [
        "string"
      ],
      "jsonOptions": {
        "disableTypeInference": true,
        "encoding": "string"
      },
      "schedule": "string"
    },
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceSpec": {
      "locationType": "LOCATION_TYPE_UNSPECIFIED"
    },
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/zones`

Creates a zone resource within a lake.

> Body parameter

```json
{
  "description": "string",
  "discoverySpec": {
    "csvOptions": {
      "delimiter": "string",
      "disableTypeInference": true,
      "encoding": "string",
      "headerRows": 0
    },
    "enabled": true,
    "excludePatterns": [
      "string"
    ],
    "includePatterns": [
      "string"
    ],
    "jsonOptions": {
      "disableTypeInference": true,
      "encoding": "string"
    },
    "schedule": "string"
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "resourceSpec": {
    "locationType": "LOCATION_TYPE_UNSPECIFIED"
  },
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="dataplexprojectslocationslakeszonescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.|
|validateOnly|query|boolean|false|Optional. Only validate the request, but do not perform mutations. The default is false.|
|zoneId|query|string|false|Required. Zone identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique across all lakes from all locations in a project. * Must not be one of the reserved IDs (i.e. "default", "global-temp")|
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
|body|body|[GoogleCloudDataplexV1Zone](#schemagoogleclouddataplexv1zone)|false|none|
|» description|body|string|false|Optional. Description of the zone.|
|» discoverySpec|body|[GoogleCloudDataplexV1ZoneDiscoverySpec](#schemagoogleclouddataplexv1zonediscoveryspec)|false|Optional. Specification of the discovery feature applied to data in this zone.|
|» displayName|body|string|false|Optional. User friendly display name.|
|» labels|body|object|false|Optional. User defined labels for the zone.|
|» » **additionalProperties**|body|string|false|none|
|» resourceSpec|body|[GoogleCloudDataplexV1ZoneResourceSpec](#schemagoogleclouddataplexv1zoneresourcespec)|false|Required. Specification of the resources that are referenced by the assets within this zone.|
|» type|body|string|false|Required. Immutable. The type of the zone.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|TYPE_UNSPECIFIED|
|» type|RAW|
|» type|CURATED|

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

<h3 id="dataplexprojectslocationslakeszonescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.assets.getIamPolicy

<a id="opIddataplex.projects.locations.lakes.zones.assets.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="dataplexprojectslocationslakeszonesassetsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).|
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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

<h3 id="dataplexprojectslocationslakeszonesassetsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.assets.setIamPolicy

<a id="opIddataplex.projects.locations.lakes.zones.assets.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
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
    },
    "updateMask": "string"
  }'
```

`POST /v1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

<h3 id="dataplexprojectslocationslakeszonesassetssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GoogleIamV1SetIamPolicyRequest](#schemagoogleiamv1setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag"|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

<h3 id="dataplexprojectslocationslakeszonesassetssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataplex.projects.locations.lakes.zones.assets.testIamPermissions

<a id="opIddataplex.projects.locations.lakes.zones.assets.testIamPermissions"></a>

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

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="dataplexprojectslocationslakeszonesassetstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GoogleIamV1TestIamPermissionsRequest](#schemagoogleiamv1testiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).|

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

<h3 id="dataplexprojectslocationslakeszonesassetstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1TestIamPermissionsResponse](#schemagoogleiamv1testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

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

<h2 id="tocS_GoogleCloudDataplexV1Action">GoogleCloudDataplexV1Action</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1action"></a>
<a id="schema_GoogleCloudDataplexV1Action"></a>
<a id="tocSgoogleclouddataplexv1action"></a>
<a id="tocsgoogleclouddataplexv1action"></a>

```json
{
  "asset": "string",
  "category": "CATEGORY_UNSPECIFIED",
  "dataLocations": [
    "string"
  ],
  "detectTime": "string",
  "failedSecurityPolicyApply": {
    "asset": "string"
  },
  "incompatibleDataSchema": {
    "existingSchema": "string",
    "newSchema": "string",
    "sampledDataLocations": [
      "string"
    ],
    "schemaChange": "SCHEMA_CHANGE_UNSPECIFIED",
    "table": "string"
  },
  "invalidDataFormat": {
    "expectedFormat": "string",
    "newFormat": "string",
    "sampledDataLocations": [
      "string"
    ]
  },
  "invalidDataOrganization": {},
  "invalidDataPartition": {
    "expectedStructure": "PARTITION_STRUCTURE_UNSPECIFIED"
  },
  "issue": "string",
  "lake": "string",
  "missingData": {},
  "missingResource": {},
  "name": "string",
  "unauthorizedResource": {},
  "zone": "string"
}
```

Action represents an issue requiring administrator action for resolution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|string|false|read-only|Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.|
|category|string|false|none|The category of issue associated with the action.|
|dataLocations|[string]|false|none|The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id).|
|detectTime|string(google-datetime)|false|none|The time that the issue was detected.|
|failedSecurityPolicyApply|[GoogleCloudDataplexV1ActionFailedSecurityPolicyApply](#schemagoogleclouddataplexv1actionfailedsecuritypolicyapply)|false|none|Details for issues related to applying security policy.|
|incompatibleDataSchema|[GoogleCloudDataplexV1ActionIncompatibleDataSchema](#schemagoogleclouddataplexv1actionincompatibledataschema)|false|none|Details for issues related to incompatible schemas detected within data.|
|invalidDataFormat|[GoogleCloudDataplexV1ActionInvalidDataFormat](#schemagoogleclouddataplexv1actioninvaliddataformat)|false|none|Details for issues related to invalid or unsupported data formats.|
|invalidDataOrganization|[GoogleCloudDataplexV1ActionInvalidDataOrganization](#schemagoogleclouddataplexv1actioninvaliddataorganization)|false|none|Details for issues related to invalid data arrangement.|
|invalidDataPartition|[GoogleCloudDataplexV1ActionInvalidDataPartition](#schemagoogleclouddataplexv1actioninvaliddatapartition)|false|none|Details for issues related to invalid or unsupported data partition structure.|
|issue|string|false|none|Detailed description of the issue requiring action.|
|lake|string|false|read-only|Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.|
|missingData|[GoogleCloudDataplexV1ActionMissingData](#schemagoogleclouddataplexv1actionmissingdata)|false|none|Details for issues related to absence of data within managed resources.|
|missingResource|[GoogleCloudDataplexV1ActionMissingResource](#schemagoogleclouddataplexv1actionmissingresource)|false|none|Details for issues related to absence of a managed resource.|
|name|string|false|read-only|Output only. The relative resource name of the action, of the form: projects/{project}/locations/{location}/lakes/{lake}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/assets/{asset}/actions/{action}.|
|unauthorizedResource|[GoogleCloudDataplexV1ActionUnauthorizedResource](#schemagoogleclouddataplexv1actionunauthorizedresource)|false|none|Details for issues related to lack of permissions to access data resources.|
|zone|string|false|read-only|Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|CATEGORY_UNSPECIFIED|
|category|RESOURCE_MANAGEMENT|
|category|SECURITY_POLICY|
|category|DATA_DISCOVERY|

<h2 id="tocS_GoogleCloudDataplexV1ActionFailedSecurityPolicyApply">GoogleCloudDataplexV1ActionFailedSecurityPolicyApply</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1actionfailedsecuritypolicyapply"></a>
<a id="schema_GoogleCloudDataplexV1ActionFailedSecurityPolicyApply"></a>
<a id="tocSgoogleclouddataplexv1actionfailedsecuritypolicyapply"></a>
<a id="tocsgoogleclouddataplexv1actionfailedsecuritypolicyapply"></a>

```json
{
  "asset": "string"
}
```

Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|string|false|none|Resource name of one of the assets with failing security policy application. Populated for a lake or zone resource only.|

<h2 id="tocS_GoogleCloudDataplexV1ActionIncompatibleDataSchema">GoogleCloudDataplexV1ActionIncompatibleDataSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1actionincompatibledataschema"></a>
<a id="schema_GoogleCloudDataplexV1ActionIncompatibleDataSchema"></a>
<a id="tocSgoogleclouddataplexv1actionincompatibledataschema"></a>
<a id="tocsgoogleclouddataplexv1actionincompatibledataschema"></a>

```json
{
  "existingSchema": "string",
  "newSchema": "string",
  "sampledDataLocations": [
    "string"
  ],
  "schemaChange": "SCHEMA_CHANGE_UNSPECIFIED",
  "table": "string"
}
```

Action details for incompatible schemas detected by discovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|existingSchema|string|false|none|The existing and expected schema of the table. The schema is provided as a JSON formatted structure listing columns and data types.|
|newSchema|string|false|none|The new and incompatible schema within the table. The schema is provided as a JSON formatted structured listing columns and data types.|
|sampledDataLocations|[string]|false|none|The list of data locations sampled and used for format/schema inference.|
|schemaChange|string|false|none|Whether the action relates to a schema that is incompatible or modified.|
|table|string|false|none|The name of the table containing invalid data.|

#### Enumerated Values

|Property|Value|
|---|---|
|schemaChange|SCHEMA_CHANGE_UNSPECIFIED|
|schemaChange|INCOMPATIBLE|
|schemaChange|MODIFIED|

<h2 id="tocS_GoogleCloudDataplexV1ActionInvalidDataFormat">GoogleCloudDataplexV1ActionInvalidDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1actioninvaliddataformat"></a>
<a id="schema_GoogleCloudDataplexV1ActionInvalidDataFormat"></a>
<a id="tocSgoogleclouddataplexv1actioninvaliddataformat"></a>
<a id="tocsgoogleclouddataplexv1actioninvaliddataformat"></a>

```json
{
  "expectedFormat": "string",
  "newFormat": "string",
  "sampledDataLocations": [
    "string"
  ]
}
```

Action details for invalid or unsupported data files detected by discovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expectedFormat|string|false|none|The expected data format of the entity.|
|newFormat|string|false|none|The new unexpected data format within the entity.|
|sampledDataLocations|[string]|false|none|The list of data locations sampled and used for format/schema inference.|

<h2 id="tocS_GoogleCloudDataplexV1ActionInvalidDataOrganization">GoogleCloudDataplexV1ActionInvalidDataOrganization</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1actioninvaliddataorganization"></a>
<a id="schema_GoogleCloudDataplexV1ActionInvalidDataOrganization"></a>
<a id="tocSgoogleclouddataplexv1actioninvaliddataorganization"></a>
<a id="tocsgoogleclouddataplexv1actioninvaliddataorganization"></a>

```json
{}
```

Action details for invalid data arrangement.

<h2 id="tocS_GoogleCloudDataplexV1ActionInvalidDataPartition">GoogleCloudDataplexV1ActionInvalidDataPartition</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1actioninvaliddatapartition"></a>
<a id="schema_GoogleCloudDataplexV1ActionInvalidDataPartition"></a>
<a id="tocSgoogleclouddataplexv1actioninvaliddatapartition"></a>
<a id="tocsgoogleclouddataplexv1actioninvaliddatapartition"></a>

```json
{
  "expectedStructure": "PARTITION_STRUCTURE_UNSPECIFIED"
}
```

Action details for invalid or unsupported partitions detected by discovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expectedStructure|string|false|none|The issue type of InvalidDataPartition.|

#### Enumerated Values

|Property|Value|
|---|---|
|expectedStructure|PARTITION_STRUCTURE_UNSPECIFIED|
|expectedStructure|CONSISTENT_KEYS|
|expectedStructure|HIVE_STYLE_KEYS|

<h2 id="tocS_GoogleCloudDataplexV1ActionMissingData">GoogleCloudDataplexV1ActionMissingData</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1actionmissingdata"></a>
<a id="schema_GoogleCloudDataplexV1ActionMissingData"></a>
<a id="tocSgoogleclouddataplexv1actionmissingdata"></a>
<a id="tocsgoogleclouddataplexv1actionmissingdata"></a>

```json
{}
```

Action details for absence of data detected by discovery.

<h2 id="tocS_GoogleCloudDataplexV1ActionMissingResource">GoogleCloudDataplexV1ActionMissingResource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1actionmissingresource"></a>
<a id="schema_GoogleCloudDataplexV1ActionMissingResource"></a>
<a id="tocSgoogleclouddataplexv1actionmissingresource"></a>
<a id="tocsgoogleclouddataplexv1actionmissingresource"></a>

```json
{}
```

Action details for resource references in assets that cannot be located.

<h2 id="tocS_GoogleCloudDataplexV1ActionUnauthorizedResource">GoogleCloudDataplexV1ActionUnauthorizedResource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1actionunauthorizedresource"></a>
<a id="schema_GoogleCloudDataplexV1ActionUnauthorizedResource"></a>
<a id="tocSgoogleclouddataplexv1actionunauthorizedresource"></a>
<a id="tocsgoogleclouddataplexv1actionunauthorizedresource"></a>

```json
{}
```

Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset.

<h2 id="tocS_GoogleCloudDataplexV1Asset">GoogleCloudDataplexV1Asset</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1asset"></a>
<a id="schema_GoogleCloudDataplexV1Asset"></a>
<a id="tocSgoogleclouddataplexv1asset"></a>
<a id="tocsgoogleclouddataplexv1asset"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "discoverySpec": {
    "csvOptions": {
      "delimiter": "string",
      "disableTypeInference": true,
      "encoding": "string",
      "headerRows": 0
    },
    "enabled": true,
    "excludePatterns": [
      "string"
    ],
    "includePatterns": [
      "string"
    ],
    "jsonOptions": {
      "disableTypeInference": true,
      "encoding": "string"
    },
    "schedule": "string"
  },
  "discoveryStatus": {
    "lastRunDuration": "string",
    "lastRunTime": "string",
    "message": "string",
    "state": "STATE_UNSPECIFIED",
    "stats": {
      "dataItems": "string",
      "dataSize": "string",
      "filesets": "string",
      "tables": "string"
    },
    "updateTime": "string"
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "resourceSpec": {
    "name": "string",
    "readAccessMode": "ACCESS_MODE_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  },
  "resourceStatus": {
    "managedAccessIdentity": "string",
    "message": "string",
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string"
  },
  "securityStatus": {
    "message": "string",
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

An asset represents a cloud resource that is being managed within a lake as a member of a zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the asset was created.|
|description|string|false|none|Optional. Description of the asset.|
|discoverySpec|[GoogleCloudDataplexV1AssetDiscoverySpec](#schemagoogleclouddataplexv1assetdiscoveryspec)|false|none|Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.|
|discoveryStatus|[GoogleCloudDataplexV1AssetDiscoveryStatus](#schemagoogleclouddataplexv1assetdiscoverystatus)|false|none|Output only. Status of the discovery feature applied to data referenced by this asset.|
|displayName|string|false|none|Optional. User friendly display name.|
|labels|object|false|none|Optional. User defined labels for the asset.|
|name|string|false|read-only|Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.|
|resourceSpec|[GoogleCloudDataplexV1AssetResourceSpec](#schemagoogleclouddataplexv1assetresourcespec)|false|none|Required. Specification of the resource that is referenced by this asset.|
|resourceStatus|[GoogleCloudDataplexV1AssetResourceStatus](#schemagoogleclouddataplexv1assetresourcestatus)|false|none|Output only. Status of the resource referenced by this asset.|
|securityStatus|[GoogleCloudDataplexV1AssetSecurityStatus](#schemagoogleclouddataplexv1assetsecuritystatus)|false|none|Output only. Status of the security policy applied to resource referenced by this asset.|
|state|string|false|read-only|Output only. Current state of the asset.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the asset was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|CREATING|
|state|DELETING|
|state|ACTION_REQUIRED|

<h2 id="tocS_GoogleCloudDataplexV1AssetDiscoverySpec">GoogleCloudDataplexV1AssetDiscoverySpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetdiscoveryspec"></a>
<a id="schema_GoogleCloudDataplexV1AssetDiscoverySpec"></a>
<a id="tocSgoogleclouddataplexv1assetdiscoveryspec"></a>
<a id="tocsgoogleclouddataplexv1assetdiscoveryspec"></a>

```json
{
  "csvOptions": {
    "delimiter": "string",
    "disableTypeInference": true,
    "encoding": "string",
    "headerRows": 0
  },
  "enabled": true,
  "excludePatterns": [
    "string"
  ],
  "includePatterns": [
    "string"
  ],
  "jsonOptions": {
    "disableTypeInference": true,
    "encoding": "string"
  },
  "schedule": "string"
}
```

Settings to manage the metadata discovery and publishing for an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csvOptions|[GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions](#schemagoogleclouddataplexv1assetdiscoveryspeccsvoptions)|false|none|Optional. Configuration for CSV data.|
|enabled|boolean|false|none|Optional. Whether discovery is enabled.|
|excludePatterns|[string]|false|none|Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.|
|includePatterns|[string]|false|none|Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.|
|jsonOptions|[GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions](#schemagoogleclouddataplexv1assetdiscoveryspecjsonoptions)|false|none|Optional. Configuration for Json data.|
|schedule|string|false|none|Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.|

<h2 id="tocS_GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions">GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetdiscoveryspeccsvoptions"></a>
<a id="schema_GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions"></a>
<a id="tocSgoogleclouddataplexv1assetdiscoveryspeccsvoptions"></a>
<a id="tocsgoogleclouddataplexv1assetdiscoveryspeccsvoptions"></a>

```json
{
  "delimiter": "string",
  "disableTypeInference": true,
  "encoding": "string",
  "headerRows": 0
}
```

Describe CSV and similar semi-structured data formats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delimiter|string|false|none|Optional. The delimiter being used to separate values. This defaults to ','.|
|disableTypeInference|boolean|false|none|Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.|
|encoding|string|false|none|Optional. The character encoding of the data. The default is UTF-8.|
|headerRows|integer(int32)|false|none|Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.|

<h2 id="tocS_GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions">GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetdiscoveryspecjsonoptions"></a>
<a id="schema_GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions"></a>
<a id="tocSgoogleclouddataplexv1assetdiscoveryspecjsonoptions"></a>
<a id="tocsgoogleclouddataplexv1assetdiscoveryspecjsonoptions"></a>

```json
{
  "disableTypeInference": true,
  "encoding": "string"
}
```

Describe JSON data format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableTypeInference|boolean|false|none|Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).|
|encoding|string|false|none|Optional. The character encoding of the data. The default is UTF-8.|

<h2 id="tocS_GoogleCloudDataplexV1AssetDiscoveryStatus">GoogleCloudDataplexV1AssetDiscoveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetdiscoverystatus"></a>
<a id="schema_GoogleCloudDataplexV1AssetDiscoveryStatus"></a>
<a id="tocSgoogleclouddataplexv1assetdiscoverystatus"></a>
<a id="tocsgoogleclouddataplexv1assetdiscoverystatus"></a>

```json
{
  "lastRunDuration": "string",
  "lastRunTime": "string",
  "message": "string",
  "state": "STATE_UNSPECIFIED",
  "stats": {
    "dataItems": "string",
    "dataSize": "string",
    "filesets": "string",
    "tables": "string"
  },
  "updateTime": "string"
}
```

Status of discovery for an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastRunDuration|string(google-duration)|false|none|The duration of the last discovery run.|
|lastRunTime|string(google-datetime)|false|none|The start time of the last discovery run.|
|message|string|false|none|Additional information about the current state.|
|state|string|false|none|The current status of the discovery feature.|
|stats|[GoogleCloudDataplexV1AssetDiscoveryStatusStats](#schemagoogleclouddataplexv1assetdiscoverystatusstats)|false|none|Data Stats of the asset reported by discovery.|
|updateTime|string(google-datetime)|false|none|Last update time of the status.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|SCHEDULED|
|state|IN_PROGRESS|
|state|PAUSED|
|state|DISABLED|

<h2 id="tocS_GoogleCloudDataplexV1AssetDiscoveryStatusStats">GoogleCloudDataplexV1AssetDiscoveryStatusStats</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetdiscoverystatusstats"></a>
<a id="schema_GoogleCloudDataplexV1AssetDiscoveryStatusStats"></a>
<a id="tocSgoogleclouddataplexv1assetdiscoverystatusstats"></a>
<a id="tocsgoogleclouddataplexv1assetdiscoverystatusstats"></a>

```json
{
  "dataItems": "string",
  "dataSize": "string",
  "filesets": "string",
  "tables": "string"
}
```

The aggregated data statistics for the asset reported by discovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataItems|string(int64)|false|none|The count of data items within the referenced resource.|
|dataSize|string(int64)|false|none|The number of stored data bytes within the referenced resource.|
|filesets|string(int64)|false|none|The count of fileset entities within the referenced resource.|
|tables|string(int64)|false|none|The count of table entities within the referenced resource.|

<h2 id="tocS_GoogleCloudDataplexV1AssetResourceSpec">GoogleCloudDataplexV1AssetResourceSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetresourcespec"></a>
<a id="schema_GoogleCloudDataplexV1AssetResourceSpec"></a>
<a id="tocSgoogleclouddataplexv1assetresourcespec"></a>
<a id="tocsgoogleclouddataplexv1assetresourcespec"></a>

```json
{
  "name": "string",
  "readAccessMode": "ACCESS_MODE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

Identifies the cloud resource that is referenced by this asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: projects/{project_number}/buckets/{bucket_id} projects/{project_number}/datasets/{dataset_id}|
|readAccessMode|string|false|none|Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets.|
|type|string|false|none|Required. Immutable. Type of resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|readAccessMode|ACCESS_MODE_UNSPECIFIED|
|readAccessMode|DIRECT|
|readAccessMode|MANAGED|
|type|TYPE_UNSPECIFIED|
|type|STORAGE_BUCKET|
|type|BIGQUERY_DATASET|

<h2 id="tocS_GoogleCloudDataplexV1AssetResourceStatus">GoogleCloudDataplexV1AssetResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetresourcestatus"></a>
<a id="schema_GoogleCloudDataplexV1AssetResourceStatus"></a>
<a id="tocSgoogleclouddataplexv1assetresourcestatus"></a>
<a id="tocsgoogleclouddataplexv1assetresourcestatus"></a>

```json
{
  "managedAccessIdentity": "string",
  "message": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Status of the resource referenced by an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedAccessIdentity|string|false|read-only|Output only. Service account associated with the BigQuery Connection.|
|message|string|false|none|Additional information about the current state.|
|state|string|false|none|The current state of the managed resource.|
|updateTime|string(google-datetime)|false|none|Last update time of the status.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|READY|
|state|ERROR|

<h2 id="tocS_GoogleCloudDataplexV1AssetSecurityStatus">GoogleCloudDataplexV1AssetSecurityStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetsecuritystatus"></a>
<a id="schema_GoogleCloudDataplexV1AssetSecurityStatus"></a>
<a id="tocSgoogleclouddataplexv1assetsecuritystatus"></a>
<a id="tocsgoogleclouddataplexv1assetsecuritystatus"></a>

```json
{
  "message": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Additional information about the current state.|
|state|string|false|none|The current state of the security policy applied to the attached resource.|
|updateTime|string(google-datetime)|false|none|Last update time of the status.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|READY|
|state|APPLYING|
|state|ERROR|

<h2 id="tocS_GoogleCloudDataplexV1AssetStatus">GoogleCloudDataplexV1AssetStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1assetstatus"></a>
<a id="schema_GoogleCloudDataplexV1AssetStatus"></a>
<a id="tocSgoogleclouddataplexv1assetstatus"></a>
<a id="tocsgoogleclouddataplexv1assetstatus"></a>

```json
{
  "activeAssets": 0,
  "securityPolicyApplyingAssets": 0,
  "updateTime": "string"
}
```

Aggregated status of the underlying assets of a lake or zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeAssets|integer(int32)|false|none|Number of active assets.|
|securityPolicyApplyingAssets|integer(int32)|false|none|Number of assets that are in process of updating the security policy on attached resources.|
|updateTime|string(google-datetime)|false|none|Last update time of the status.|

<h2 id="tocS_GoogleCloudDataplexV1CancelJobRequest">GoogleCloudDataplexV1CancelJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1canceljobrequest"></a>
<a id="schema_GoogleCloudDataplexV1CancelJobRequest"></a>
<a id="tocSgoogleclouddataplexv1canceljobrequest"></a>
<a id="tocsgoogleclouddataplexv1canceljobrequest"></a>

```json
{}
```

Cancel task jobs.

<h2 id="tocS_GoogleCloudDataplexV1Content">GoogleCloudDataplexV1Content</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1content"></a>
<a id="schema_GoogleCloudDataplexV1Content"></a>
<a id="tocSgoogleclouddataplexv1content"></a>
<a id="tocsgoogleclouddataplexv1content"></a>

```json
{
  "createTime": "string",
  "dataText": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notebook": {
    "kernelType": "KERNEL_TYPE_UNSPECIFIED"
  },
  "path": "string",
  "sqlScript": {
    "engine": "QUERY_ENGINE_UNSPECIFIED"
  },
  "uid": "string",
  "updateTime": "string"
}
```

Content represents a user-visible notebook or a sql script

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Content creation time.|
|dataText|string|false|none|Required. Content data in string format.|
|description|string|false|none|Optional. Description of the content.|
|labels|object|false|none|Optional. User defined labels for the content.|
|name|string|false|read-only|Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}|
|notebook|[GoogleCloudDataplexV1ContentNotebook](#schemagoogleclouddataplexv1contentnotebook)|false|none|Notebook related configurations.|
|path|string|false|none|Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.|
|sqlScript|[GoogleCloudDataplexV1ContentSqlScript](#schemagoogleclouddataplexv1contentsqlscript)|false|none|Sql Script related configurations.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the content was last updated.|

<h2 id="tocS_GoogleCloudDataplexV1ContentNotebook">GoogleCloudDataplexV1ContentNotebook</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1contentnotebook"></a>
<a id="schema_GoogleCloudDataplexV1ContentNotebook"></a>
<a id="tocSgoogleclouddataplexv1contentnotebook"></a>
<a id="tocsgoogleclouddataplexv1contentnotebook"></a>

```json
{
  "kernelType": "KERNEL_TYPE_UNSPECIFIED"
}
```

Configuration for Notebook content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kernelType|string|false|none|Required. Kernel Type of the notebook.|

#### Enumerated Values

|Property|Value|
|---|---|
|kernelType|KERNEL_TYPE_UNSPECIFIED|
|kernelType|PYTHON3|

<h2 id="tocS_GoogleCloudDataplexV1ContentSqlScript">GoogleCloudDataplexV1ContentSqlScript</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1contentsqlscript"></a>
<a id="schema_GoogleCloudDataplexV1ContentSqlScript"></a>
<a id="tocSgoogleclouddataplexv1contentsqlscript"></a>
<a id="tocsgoogleclouddataplexv1contentsqlscript"></a>

```json
{
  "engine": "QUERY_ENGINE_UNSPECIFIED"
}
```

Configuration for the Sql Script content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|engine|string|false|none|Required. Query Engine to be used for the Sql Query.|

#### Enumerated Values

|Property|Value|
|---|---|
|engine|QUERY_ENGINE_UNSPECIFIED|
|engine|SPARK|

<h2 id="tocS_GoogleCloudDataplexV1DataAccessSpec">GoogleCloudDataplexV1DataAccessSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataaccessspec"></a>
<a id="schema_GoogleCloudDataplexV1DataAccessSpec"></a>
<a id="tocSgoogleclouddataplexv1dataaccessspec"></a>
<a id="tocsgoogleclouddataplexv1dataaccessspec"></a>

```json
{
  "readers": [
    "string"
  ]
}
```

DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|readers|[string]|false|none|Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on data stored within resources.|

<h2 id="tocS_GoogleCloudDataplexV1DataAttribute">GoogleCloudDataplexV1DataAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataattribute"></a>
<a id="schema_GoogleCloudDataplexV1DataAttribute"></a>
<a id="tocSgoogleclouddataplexv1dataattribute"></a>
<a id="tocsgoogleclouddataplexv1dataattribute"></a>

```json
{
  "attributeCount": 0,
  "createTime": "string",
  "dataAccessSpec": {
    "readers": [
      "string"
    ]
  },
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "parentId": "string",
  "resourceAccessSpec": {
    "owners": [
      "string"
    ],
    "readers": [
      "string"
    ],
    "writers": [
      "string"
    ]
  },
  "uid": "string",
  "updateTime": "string"
}
```

Denotes one dataAttribute in a dataTaxonomy, for example, PII. DataAttribute resources can be defined in a hierarchy. A single dataAttribute resource can contain specs of multiple types PII - ResourceAccessSpec : - readers :foo@bar.com - DataAccessSpec : - readers :bar@foo.com

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeCount|integer(int32)|false|read-only|Output only. The number of child attributes present for this attribute.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the DataAttribute was created.|
|dataAccessSpec|[GoogleCloudDataplexV1DataAccessSpec](#schemagoogleclouddataplexv1dataaccessspec)|false|none|Optional. Specified when applied to data stored on the resource (eg: rows, columns in BigQuery Tables).|
|description|string|false|none|Optional. Description of the DataAttribute.|
|displayName|string|false|none|Optional. User friendly display name.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|labels|object|false|none|Optional. User-defined labels for the DataAttribute.|
|name|string|false|read-only|Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}.|
|parentId|string|false|none|Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4|
|resourceAccessSpec|[GoogleCloudDataplexV1ResourceAccessSpec](#schemagoogleclouddataplexv1resourceaccessspec)|false|none|Optional. Specified when applied to a resource (eg: Cloud Storage bucket, BigQuery dataset, BigQuery table).|
|uid|string|false|read-only|Output only. System generated globally unique ID for the DataAttribute. This ID will be different if the DataAttribute is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the DataAttribute was last updated.|

<h2 id="tocS_GoogleCloudDataplexV1DataAttributeBinding">GoogleCloudDataplexV1DataAttributeBinding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataattributebinding"></a>
<a id="schema_GoogleCloudDataplexV1DataAttributeBinding"></a>
<a id="tocSgoogleclouddataplexv1dataattributebinding"></a>
<a id="tocsgoogleclouddataplexv1dataattributebinding"></a>

```json
{
  "attributes": [
    "string"
  ],
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "paths": [
    {
      "attributes": [
        "string"
      ],
      "name": "string"
    }
  ],
  "resource": "string",
  "uid": "string",
  "updateTime": "string"
}
```

DataAttributeBinding represents binding of attributes to resources. Eg: Bind 'CustomerInfo' entity with 'PII' attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[string]|false|none|Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the DataAttributeBinding was created.|
|description|string|false|none|Optional. Description of the DataAttributeBinding.|
|displayName|string|false|none|Optional. User friendly display name.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method.|
|labels|object|false|none|Optional. User-defined labels for the DataAttributeBinding.|
|name|string|false|read-only|Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id}|
|paths|[[GoogleCloudDataplexV1DataAttributeBindingPath](#schemagoogleclouddataplexv1dataattributebindingpath)]|false|none|Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings.|
|resource|string|false|none|Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the DataAttributeBinding was last updated.|

<h2 id="tocS_GoogleCloudDataplexV1DataAttributeBindingPath">GoogleCloudDataplexV1DataAttributeBindingPath</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataattributebindingpath"></a>
<a id="schema_GoogleCloudDataplexV1DataAttributeBindingPath"></a>
<a id="tocSgoogleclouddataplexv1dataattributebindingpath"></a>
<a id="tocsgoogleclouddataplexv1dataattributebindingpath"></a>

```json
{
  "attributes": [
    "string"
  ],
  "name": "string"
}
```

Represents a subresource of the given resource, and associated bindings with it. Currently supported subresources are column and partition schema fields within a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[string]|false|none|Optional. List of attributes to be associated with the path of the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}|
|name|string|false|none|Required. The name identifier of the path. Nested columns should be of the form: 'address.city'.|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileResult">GoogleCloudDataplexV1DataProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofileresult"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileResult"></a>
<a id="tocSgoogleclouddataplexv1dataprofileresult"></a>
<a id="tocsgoogleclouddataplexv1dataprofileresult"></a>

```json
{
  "profile": {
    "fields": [
      {
        "mode": "string",
        "name": "string",
        "profile": {
          "distinctRatio": 0,
          "doubleProfile": {
            "average": 0,
            "max": 0,
            "min": 0,
            "quartiles": [
              0
            ],
            "standardDeviation": 0
          },
          "integerProfile": {
            "average": 0,
            "max": "string",
            "min": "string",
            "quartiles": [
              "string"
            ],
            "standardDeviation": 0
          },
          "nullRatio": 0,
          "stringProfile": {
            "averageLength": 0,
            "maxLength": "string",
            "minLength": "string"
          },
          "topNValues": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "type": "string"
      }
    ]
  },
  "rowCount": "string",
  "scannedData": {
    "incrementalField": {
      "end": "string",
      "field": "string",
      "start": "string"
    }
  }
}
```

DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|[GoogleCloudDataplexV1DataProfileResultProfile](#schemagoogleclouddataplexv1dataprofileresultprofile)|false|none|The profile information per field.|
|rowCount|string(int64)|false|none|The count of rows scanned.|
|scannedData|[GoogleCloudDataplexV1ScannedData](#schemagoogleclouddataplexv1scanneddata)|false|none|The data scanned for this result.|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileResultProfile">GoogleCloudDataplexV1DataProfileResultProfile</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofileresultprofile"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileResultProfile"></a>
<a id="tocSgoogleclouddataplexv1dataprofileresultprofile"></a>
<a id="tocsgoogleclouddataplexv1dataprofileresultprofile"></a>

```json
{
  "fields": [
    {
      "mode": "string",
      "name": "string",
      "profile": {
        "distinctRatio": 0,
        "doubleProfile": {
          "average": 0,
          "max": 0,
          "min": 0,
          "quartiles": [
            0
          ],
          "standardDeviation": 0
        },
        "integerProfile": {
          "average": 0,
          "max": "string",
          "min": "string",
          "quartiles": [
            "string"
          ],
          "standardDeviation": 0
        },
        "nullRatio": 0,
        "stringProfile": {
          "averageLength": 0,
          "maxLength": "string",
          "minLength": "string"
        },
        "topNValues": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "type": "string"
    }
  ]
}
```

Contains name, type, mode and field type specific profile information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[GoogleCloudDataplexV1DataProfileResultProfileField](#schemagoogleclouddataplexv1dataprofileresultprofilefield)]|false|none|List of fields with structural and profile information for each field.|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileResultProfileField">GoogleCloudDataplexV1DataProfileResultProfileField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofileresultprofilefield"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileResultProfileField"></a>
<a id="tocSgoogleclouddataplexv1dataprofileresultprofilefield"></a>
<a id="tocsgoogleclouddataplexv1dataprofileresultprofilefield"></a>

```json
{
  "mode": "string",
  "name": "string",
  "profile": {
    "distinctRatio": 0,
    "doubleProfile": {
      "average": 0,
      "max": 0,
      "min": 0,
      "quartiles": [
        0
      ],
      "standardDeviation": 0
    },
    "integerProfile": {
      "average": 0,
      "max": "string",
      "min": "string",
      "quartiles": [
        "string"
      ],
      "standardDeviation": 0
    },
    "nullRatio": 0,
    "stringProfile": {
      "averageLength": 0,
      "maxLength": "string",
      "minLength": "string"
    },
    "topNValues": [
      {
        "count": "string",
        "value": "string"
      }
    ]
  },
  "type": "string"
}
```

A field within a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|The mode of the field. Possible values include: REQUIRED, if it is a required field. NULLABLE, if it is an optional field. REPEATED, if it is a repeated field.|
|name|string|false|none|The name of the field.|
|profile|[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo](#schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfo)|false|none|Profile information for the corresponding field.|
|type|string|false|none|The data type retrieved from the schema of the data source. For instance, for a BigQuery native table, it is the BigQuery Table Schema (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#tablefieldschema). For a Dataplex Entity, it is the Entity Schema (https://cloud.google.com/dataplex/docs/reference/rpc/google.cloud.dataplex.v1#type_3).|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo">GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfo"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo"></a>
<a id="tocSgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfo"></a>
<a id="tocsgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfo"></a>

```json
{
  "distinctRatio": 0,
  "doubleProfile": {
    "average": 0,
    "max": 0,
    "min": 0,
    "quartiles": [
      0
    ],
    "standardDeviation": 0
  },
  "integerProfile": {
    "average": 0,
    "max": "string",
    "min": "string",
    "quartiles": [
      "string"
    ],
    "standardDeviation": 0
  },
  "nullRatio": 0,
  "stringProfile": {
    "averageLength": 0,
    "maxLength": "string",
    "minLength": "string"
  },
  "topNValues": [
    {
      "count": "string",
      "value": "string"
    }
  ]
}
```

The profile information for each field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distinctRatio|number(double)|false|none|Ratio of rows with distinct values against total scanned rows. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode.|
|doubleProfile|[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo](#schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfodoublefieldinfo)|false|none|Double type field information.|
|integerProfile|[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo](#schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfointegerfieldinfo)|false|none|Integer type field information.|
|nullRatio|number(double)|false|none|Ratio of rows with null value against total scanned rows.|
|stringProfile|[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo](#schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfostringfieldinfo)|false|none|String type field information.|
|topNValues|[[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue](#schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfotopnvalue)]|false|none|The list of top N non-null values and number of times they occur in the scanned data. N is 10 or equal to the number of distinct values in the field, whichever is smaller. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode.|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo">GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfodoublefieldinfo"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo"></a>
<a id="tocSgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfodoublefieldinfo"></a>
<a id="tocsgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfodoublefieldinfo"></a>

```json
{
  "average": 0,
  "max": 0,
  "min": 0,
  "quartiles": [
    0
  ],
  "standardDeviation": 0
}
```

The profile information for a double type field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|number(double)|false|none|Average of non-null values in the scanned data. NaN, if the field has a NaN.|
|max|number(double)|false|none|Maximum of non-null values in the scanned data. NaN, if the field has a NaN.|
|min|number(double)|false|none|Minimum of non-null values in the scanned data. NaN, if the field has a NaN.|
|quartiles|[number(double)]|false|none|A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of quartile values for the scanned data, occurring in order Q1, median, Q3.|
|standardDeviation|number(double)|false|none|Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN.|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo">GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfointegerfieldinfo"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo"></a>
<a id="tocSgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfointegerfieldinfo"></a>
<a id="tocsgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfointegerfieldinfo"></a>

```json
{
  "average": 0,
  "max": "string",
  "min": "string",
  "quartiles": [
    "string"
  ],
  "standardDeviation": 0
}
```

The profile information for an integer type field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|number(double)|false|none|Average of non-null values in the scanned data. NaN, if the field has a NaN.|
|max|string(int64)|false|none|Maximum of non-null values in the scanned data. NaN, if the field has a NaN.|
|min|string(int64)|false|none|Minimum of non-null values in the scanned data. NaN, if the field has a NaN.|
|quartiles|[string(int64)]|false|none|A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of quartile values for the scanned data, occurring in order Q1, median, Q3.|
|standardDeviation|number(double)|false|none|Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN.|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo">GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfostringfieldinfo"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo"></a>
<a id="tocSgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfostringfieldinfo"></a>
<a id="tocsgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfostringfieldinfo"></a>

```json
{
  "averageLength": 0,
  "maxLength": "string",
  "minLength": "string"
}
```

The profile information for a string type field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageLength|number(double)|false|none|Average length of non-null values in the scanned data.|
|maxLength|string(int64)|false|none|Maximum length of non-null values in the scanned data.|
|minLength|string(int64)|false|none|Minimum length of non-null values in the scanned data.|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue">GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofileresultprofilefieldprofileinfotopnvalue"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue"></a>
<a id="tocSgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfotopnvalue"></a>
<a id="tocsgoogleclouddataplexv1dataprofileresultprofilefieldprofileinfotopnvalue"></a>

```json
{
  "count": "string",
  "value": "string"
}
```

Top N non-null values in the scanned data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|Count of the corresponding value in the scanned data.|
|value|string|false|none|String value of a top N non-null value.|

<h2 id="tocS_GoogleCloudDataplexV1DataProfileSpec">GoogleCloudDataplexV1DataProfileSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataprofilespec"></a>
<a id="schema_GoogleCloudDataplexV1DataProfileSpec"></a>
<a id="tocSgoogleclouddataplexv1dataprofilespec"></a>
<a id="tocsgoogleclouddataplexv1dataprofilespec"></a>

```json
{}
```

DataProfileScan related setting.

<h2 id="tocS_GoogleCloudDataplexV1DataQualityDimensionResult">GoogleCloudDataplexV1DataQualityDimensionResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualitydimensionresult"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityDimensionResult"></a>
<a id="tocSgoogleclouddataplexv1dataqualitydimensionresult"></a>
<a id="tocsgoogleclouddataplexv1dataqualitydimensionresult"></a>

```json
{
  "passed": true
}
```

DataQualityDimensionResult provides a more detailed, per-dimension view of the results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|passed|boolean|false|none|Whether the dimension passed or failed.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityResult">GoogleCloudDataplexV1DataQualityResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityresult"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityResult"></a>
<a id="tocSgoogleclouddataplexv1dataqualityresult"></a>
<a id="tocsgoogleclouddataplexv1dataqualityresult"></a>

```json
{
  "dimensions": [
    {
      "passed": true
    }
  ],
  "passed": true,
  "rowCount": "string",
  "rules": [
    {
      "evaluatedCount": "string",
      "failingRowsQuery": "string",
      "nullCount": "string",
      "passRatio": 0,
      "passed": true,
      "passedCount": "string",
      "rule": {
        "column": "string",
        "dimension": "string",
        "ignoreNull": true,
        "nonNullExpectation": {},
        "rangeExpectation": {
          "maxValue": "string",
          "minValue": "string",
          "strictMaxEnabled": true,
          "strictMinEnabled": true
        },
        "regexExpectation": {
          "regex": "string"
        },
        "rowConditionExpectation": {
          "sqlExpression": "string"
        },
        "setExpectation": {
          "values": [
            "string"
          ]
        },
        "statisticRangeExpectation": {
          "maxValue": "string",
          "minValue": "string",
          "statistic": "STATISTIC_UNDEFINED",
          "strictMaxEnabled": true,
          "strictMinEnabled": true
        },
        "tableConditionExpectation": {
          "sqlExpression": "string"
        },
        "threshold": 0,
        "uniquenessExpectation": {}
      }
    }
  ],
  "scannedData": {
    "incrementalField": {
      "end": "string",
      "field": "string",
      "start": "string"
    }
  }
}
```

The output of a DataQualityScan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[[GoogleCloudDataplexV1DataQualityDimensionResult](#schemagoogleclouddataplexv1dataqualitydimensionresult)]|false|none|A list of results at the dimension level.|
|passed|boolean|false|none|Overall data quality result -- true if all rules passed.|
|rowCount|string(int64)|false|none|The count of rows processed.|
|rules|[[GoogleCloudDataplexV1DataQualityRuleResult](#schemagoogleclouddataplexv1dataqualityruleresult)]|false|none|A list of all the rules in a job, and their results.|
|scannedData|[GoogleCloudDataplexV1ScannedData](#schemagoogleclouddataplexv1scanneddata)|false|none|The data scanned for this result.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRule">GoogleCloudDataplexV1DataQualityRule</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityrule"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRule"></a>
<a id="tocSgoogleclouddataplexv1dataqualityrule"></a>
<a id="tocsgoogleclouddataplexv1dataqualityrule"></a>

```json
{
  "column": "string",
  "dimension": "string",
  "ignoreNull": true,
  "nonNullExpectation": {},
  "rangeExpectation": {
    "maxValue": "string",
    "minValue": "string",
    "strictMaxEnabled": true,
    "strictMinEnabled": true
  },
  "regexExpectation": {
    "regex": "string"
  },
  "rowConditionExpectation": {
    "sqlExpression": "string"
  },
  "setExpectation": {
    "values": [
      "string"
    ]
  },
  "statisticRangeExpectation": {
    "maxValue": "string",
    "minValue": "string",
    "statistic": "STATISTIC_UNDEFINED",
    "strictMaxEnabled": true,
    "strictMinEnabled": true
  },
  "tableConditionExpectation": {
    "sqlExpression": "string"
  },
  "threshold": 0,
  "uniquenessExpectation": {}
}
```

A rule captures data quality intent about a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|false|none|Optional. The unnested column which this rule is evaluated against.|
|dimension|string|false|none|Required. The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are "COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"|
|ignoreNull|boolean|false|none|Optional. Rows with null values will automatically fail a rule, unless ignore_null is true. In that case, such null rows are trivially considered passing.Only applicable to ColumnMap rules.|
|nonNullExpectation|[GoogleCloudDataplexV1DataQualityRuleNonNullExpectation](#schemagoogleclouddataplexv1dataqualityrulenonnullexpectation)|false|none|ColumnMap rule which evaluates whether each column value is null.|
|rangeExpectation|[GoogleCloudDataplexV1DataQualityRuleRangeExpectation](#schemagoogleclouddataplexv1dataqualityrulerangeexpectation)|false|none|ColumnMap rule which evaluates whether each column value lies between a specified range.|
|regexExpectation|[GoogleCloudDataplexV1DataQualityRuleRegexExpectation](#schemagoogleclouddataplexv1dataqualityruleregexexpectation)|false|none|ColumnMap rule which evaluates whether each column value matches a specified regex.|
|rowConditionExpectation|[GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation](#schemagoogleclouddataplexv1dataqualityrulerowconditionexpectation)|false|none|Table rule which evaluates whether each row passes the specified condition.|
|setExpectation|[GoogleCloudDataplexV1DataQualityRuleSetExpectation](#schemagoogleclouddataplexv1dataqualityrulesetexpectation)|false|none|ColumnMap rule which evaluates whether each column value is contained by a specified set.|
|statisticRangeExpectation|[GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation](#schemagoogleclouddataplexv1dataqualityrulestatisticrangeexpectation)|false|none|ColumnAggregate rule which evaluates whether the column aggregate statistic lies between a specified range.|
|tableConditionExpectation|[GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation](#schemagoogleclouddataplexv1dataqualityruletableconditionexpectation)|false|none|Table rule which evaluates whether the provided expression is true.|
|threshold|number(double)|false|none|Optional. The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of 0.0, 1.0.0 indicates default value (i.e. 1.0).|
|uniquenessExpectation|[GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation](#schemagoogleclouddataplexv1dataqualityruleuniquenessexpectation)|false|none|ColumnAggregate rule which evaluates whether the column has duplicates.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleNonNullExpectation">GoogleCloudDataplexV1DataQualityRuleNonNullExpectation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityrulenonnullexpectation"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleNonNullExpectation"></a>
<a id="tocSgoogleclouddataplexv1dataqualityrulenonnullexpectation"></a>
<a id="tocsgoogleclouddataplexv1dataqualityrulenonnullexpectation"></a>

```json
{}
```

Evaluates whether each column value is null.

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleRangeExpectation">GoogleCloudDataplexV1DataQualityRuleRangeExpectation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityrulerangeexpectation"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleRangeExpectation"></a>
<a id="tocSgoogleclouddataplexv1dataqualityrulerangeexpectation"></a>
<a id="tocsgoogleclouddataplexv1dataqualityrulerangeexpectation"></a>

```json
{
  "maxValue": "string",
  "minValue": "string",
  "strictMaxEnabled": true,
  "strictMinEnabled": true
}
```

Evaluates whether each column value lies between a specified range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|string|false|none|Optional. The maximum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided.|
|minValue|string|false|none|Optional. The minimum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided.|
|strictMaxEnabled|boolean|false|none|Optional. Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false.|
|strictMinEnabled|boolean|false|none|Optional. Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleRegexExpectation">GoogleCloudDataplexV1DataQualityRuleRegexExpectation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityruleregexexpectation"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleRegexExpectation"></a>
<a id="tocSgoogleclouddataplexv1dataqualityruleregexexpectation"></a>
<a id="tocsgoogleclouddataplexv1dataqualityruleregexexpectation"></a>

```json
{
  "regex": "string"
}
```

Evaluates whether each column value matches a specified regex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regex|string|false|none|A regular expression the column value is expected to match.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleResult">GoogleCloudDataplexV1DataQualityRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityruleresult"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleResult"></a>
<a id="tocSgoogleclouddataplexv1dataqualityruleresult"></a>
<a id="tocsgoogleclouddataplexv1dataqualityruleresult"></a>

```json
{
  "evaluatedCount": "string",
  "failingRowsQuery": "string",
  "nullCount": "string",
  "passRatio": 0,
  "passed": true,
  "passedCount": "string",
  "rule": {
    "column": "string",
    "dimension": "string",
    "ignoreNull": true,
    "nonNullExpectation": {},
    "rangeExpectation": {
      "maxValue": "string",
      "minValue": "string",
      "strictMaxEnabled": true,
      "strictMinEnabled": true
    },
    "regexExpectation": {
      "regex": "string"
    },
    "rowConditionExpectation": {
      "sqlExpression": "string"
    },
    "setExpectation": {
      "values": [
        "string"
      ]
    },
    "statisticRangeExpectation": {
      "maxValue": "string",
      "minValue": "string",
      "statistic": "STATISTIC_UNDEFINED",
      "strictMaxEnabled": true,
      "strictMinEnabled": true
    },
    "tableConditionExpectation": {
      "sqlExpression": "string"
    },
    "threshold": 0,
    "uniquenessExpectation": {}
  }
}
```

DataQualityRuleResult provides a more detailed, per-rule view of the results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluatedCount|string(int64)|false|none|The number of rows a rule was evaluated against. This field is only valid for ColumnMap type rules.Evaluated count can be configured to either include all rows (default) - with null rows automatically failing rule evaluation, or exclude null rows from the evaluated_count, by setting ignore_nulls = true.|
|failingRowsQuery|string|false|none|The query to find rows that did not pass this rule. Only applies to ColumnMap and RowCondition rules.|
|nullCount|string(int64)|false|none|The number of rows with null values in the specified column.|
|passRatio|number(double)|false|none|The ratio of passed_count / evaluated_count. This field is only valid for ColumnMap type rules.|
|passed|boolean|false|none|Whether the rule passed or failed.|
|passedCount|string(int64)|false|none|The number of rows which passed a rule evaluation. This field is only valid for ColumnMap type rules.|
|rule|[GoogleCloudDataplexV1DataQualityRule](#schemagoogleclouddataplexv1dataqualityrule)|false|none|The rule specified in the DataQualitySpec, as is.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation">GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityrulerowconditionexpectation"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation"></a>
<a id="tocSgoogleclouddataplexv1dataqualityrulerowconditionexpectation"></a>
<a id="tocsgoogleclouddataplexv1dataqualityrulerowconditionexpectation"></a>

```json
{
  "sqlExpression": "string"
}
```

Evaluates whether each row passes the specified condition.The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean value per row as the result.Example: col1 >= 0 AND col2 < 10

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sqlExpression|string|false|none|The SQL expression.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleSetExpectation">GoogleCloudDataplexV1DataQualityRuleSetExpectation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityrulesetexpectation"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleSetExpectation"></a>
<a id="tocSgoogleclouddataplexv1dataqualityrulesetexpectation"></a>
<a id="tocsgoogleclouddataplexv1dataqualityrulesetexpectation"></a>

```json
{
  "values": [
    "string"
  ]
}
```

Evaluates whether each column value is contained by a specified set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|Expected values for the column value.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation">GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityrulestatisticrangeexpectation"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation"></a>
<a id="tocSgoogleclouddataplexv1dataqualityrulestatisticrangeexpectation"></a>
<a id="tocsgoogleclouddataplexv1dataqualityrulestatisticrangeexpectation"></a>

```json
{
  "maxValue": "string",
  "minValue": "string",
  "statistic": "STATISTIC_UNDEFINED",
  "strictMaxEnabled": true,
  "strictMinEnabled": true
}
```

Evaluates whether the column aggregate statistic lies between a specified range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|string|false|none|The maximum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided.|
|minValue|string|false|none|The minimum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided.|
|statistic|string|false|none|The aggregate metric to evaluate.|
|strictMaxEnabled|boolean|false|none|Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false.|
|strictMinEnabled|boolean|false|none|Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false.|

#### Enumerated Values

|Property|Value|
|---|---|
|statistic|STATISTIC_UNDEFINED|
|statistic|MEAN|
|statistic|MIN|
|statistic|MAX|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation">GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityruletableconditionexpectation"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation"></a>
<a id="tocSgoogleclouddataplexv1dataqualityruletableconditionexpectation"></a>
<a id="tocsgoogleclouddataplexv1dataqualityruletableconditionexpectation"></a>

```json
{
  "sqlExpression": "string"
}
```

Evaluates whether the provided expression is true.The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result.Example: MIN(col1) >= 0

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sqlExpression|string|false|none|The SQL expression.|

<h2 id="tocS_GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation">GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityruleuniquenessexpectation"></a>
<a id="schema_GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation"></a>
<a id="tocSgoogleclouddataplexv1dataqualityruleuniquenessexpectation"></a>
<a id="tocsgoogleclouddataplexv1dataqualityruleuniquenessexpectation"></a>

```json
{}
```

Evaluates whether the column has duplicates.

<h2 id="tocS_GoogleCloudDataplexV1DataQualitySpec">GoogleCloudDataplexV1DataQualitySpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1dataqualityspec"></a>
<a id="schema_GoogleCloudDataplexV1DataQualitySpec"></a>
<a id="tocSgoogleclouddataplexv1dataqualityspec"></a>
<a id="tocsgoogleclouddataplexv1dataqualityspec"></a>

```json
{
  "rules": [
    {
      "column": "string",
      "dimension": "string",
      "ignoreNull": true,
      "nonNullExpectation": {},
      "rangeExpectation": {
        "maxValue": "string",
        "minValue": "string",
        "strictMaxEnabled": true,
        "strictMinEnabled": true
      },
      "regexExpectation": {
        "regex": "string"
      },
      "rowConditionExpectation": {
        "sqlExpression": "string"
      },
      "setExpectation": {
        "values": [
          "string"
        ]
      },
      "statisticRangeExpectation": {
        "maxValue": "string",
        "minValue": "string",
        "statistic": "STATISTIC_UNDEFINED",
        "strictMaxEnabled": true,
        "strictMinEnabled": true
      },
      "tableConditionExpectation": {
        "sqlExpression": "string"
      },
      "threshold": 0,
      "uniquenessExpectation": {}
    }
  ]
}
```

DataQualityScan related setting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[GoogleCloudDataplexV1DataQualityRule](#schemagoogleclouddataplexv1dataqualityrule)]|false|none|The list of rules to evaluate against a data source. At least one rule is required.|

<h2 id="tocS_GoogleCloudDataplexV1DataScan">GoogleCloudDataplexV1DataScan</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datascan"></a>
<a id="schema_GoogleCloudDataplexV1DataScan"></a>
<a id="tocSgoogleclouddataplexv1datascan"></a>
<a id="tocsgoogleclouddataplexv1datascan"></a>

```json
{
  "createTime": "string",
  "data": {
    "entity": "string",
    "resource": "string"
  },
  "dataProfileResult": {
    "profile": {
      "fields": [
        {
          "mode": "string",
          "name": "string",
          "profile": {
            "distinctRatio": 0,
            "doubleProfile": {
              "average": 0,
              "max": 0,
              "min": 0,
              "quartiles": [
                0
              ],
              "standardDeviation": 0
            },
            "integerProfile": {
              "average": 0,
              "max": "string",
              "min": "string",
              "quartiles": [
                "string"
              ],
              "standardDeviation": 0
            },
            "nullRatio": 0,
            "stringProfile": {
              "averageLength": 0,
              "maxLength": "string",
              "minLength": "string"
            },
            "topNValues": [
              {
                "count": "string",
                "value": "string"
              }
            ]
          },
          "type": "string"
        }
      ]
    },
    "rowCount": "string",
    "scannedData": {
      "incrementalField": {
        "end": "string",
        "field": "string",
        "start": "string"
      }
    }
  },
  "dataProfileSpec": {},
  "dataQualityResult": {
    "dimensions": [
      {
        "passed": true
      }
    ],
    "passed": true,
    "rowCount": "string",
    "rules": [
      {
        "evaluatedCount": "string",
        "failingRowsQuery": "string",
        "nullCount": "string",
        "passRatio": 0,
        "passed": true,
        "passedCount": "string",
        "rule": {
          "column": "string",
          "dimension": "string",
          "ignoreNull": true,
          "nonNullExpectation": {},
          "rangeExpectation": {
            "maxValue": "string",
            "minValue": "string",
            "strictMaxEnabled": true,
            "strictMinEnabled": true
          },
          "regexExpectation": {
            "regex": "string"
          },
          "rowConditionExpectation": {
            "sqlExpression": "string"
          },
          "setExpectation": {
            "values": [
              "string"
            ]
          },
          "statisticRangeExpectation": {
            "maxValue": "string",
            "minValue": "string",
            "statistic": "STATISTIC_UNDEFINED",
            "strictMaxEnabled": true,
            "strictMinEnabled": true
          },
          "tableConditionExpectation": {
            "sqlExpression": "string"
          },
          "threshold": 0,
          "uniquenessExpectation": {}
        }
      }
    ],
    "scannedData": {
      "incrementalField": {
        "end": "string",
        "field": "string",
        "start": "string"
      }
    }
  },
  "dataQualitySpec": {
    "rules": [
      {
        "column": "string",
        "dimension": "string",
        "ignoreNull": true,
        "nonNullExpectation": {},
        "rangeExpectation": {
          "maxValue": "string",
          "minValue": "string",
          "strictMaxEnabled": true,
          "strictMinEnabled": true
        },
        "regexExpectation": {
          "regex": "string"
        },
        "rowConditionExpectation": {
          "sqlExpression": "string"
        },
        "setExpectation": {
          "values": [
            "string"
          ]
        },
        "statisticRangeExpectation": {
          "maxValue": "string",
          "minValue": "string",
          "statistic": "STATISTIC_UNDEFINED",
          "strictMaxEnabled": true,
          "strictMinEnabled": true
        },
        "tableConditionExpectation": {
          "sqlExpression": "string"
        },
        "threshold": 0,
        "uniquenessExpectation": {}
      }
    ]
  },
  "description": "string",
  "displayName": "string",
  "executionSpec": {
    "field": "string",
    "trigger": {
      "onDemand": {},
      "schedule": {
        "cron": "string"
      }
    }
  },
  "executionStatus": {
    "latestJobEndTime": "string",
    "latestJobStartTime": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "DATA_SCAN_TYPE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

Represents a user-visible job which provides the insights for the related data source.For example: Data Quality: generates queries based on the rules and runs against the data to get data quality check results. Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the scan was created.|
|data|[GoogleCloudDataplexV1DataSource](#schemagoogleclouddataplexv1datasource)|false|none|Required. The data source for DataScan.|
|dataProfileResult|[GoogleCloudDataplexV1DataProfileResult](#schemagoogleclouddataplexv1dataprofileresult)|false|none|Output only. The result of the data profile scan.|
|dataProfileSpec|[GoogleCloudDataplexV1DataProfileSpec](#schemagoogleclouddataplexv1dataprofilespec)|false|none|DataProfileScan related setting.|
|dataQualityResult|[GoogleCloudDataplexV1DataQualityResult](#schemagoogleclouddataplexv1dataqualityresult)|false|none|Output only. The result of the data quality scan.|
|dataQualitySpec|[GoogleCloudDataplexV1DataQualitySpec](#schemagoogleclouddataplexv1dataqualityspec)|false|none|DataQualityScan related setting.|
|description|string|false|none|Optional. Description of the scan. Must be between 1-1024 characters.|
|displayName|string|false|none|Optional. User friendly display name. Must be between 1-256 characters.|
|executionSpec|[GoogleCloudDataplexV1DataScanExecutionSpec](#schemagoogleclouddataplexv1datascanexecutionspec)|false|none|Optional. DataScan execution settings.If not specified, the fields in it will use their default values.|
|executionStatus|[GoogleCloudDataplexV1DataScanExecutionStatus](#schemagoogleclouddataplexv1datascanexecutionstatus)|false|none|Output only. Status of the data scan execution.|
|labels|object|false|none|Optional. User-defined labels for the scan.|
|name|string|false|read-only|Output only. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a GCP region.|
|state|string|false|read-only|Output only. Current state of the DataScan.|
|type|string|false|read-only|Output only. The type of DataScan.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the scan was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|CREATING|
|state|DELETING|
|state|ACTION_REQUIRED|
|type|DATA_SCAN_TYPE_UNSPECIFIED|
|type|DATA_QUALITY|
|type|DATA_PROFILE|

<h2 id="tocS_GoogleCloudDataplexV1DataScanEvent">GoogleCloudDataplexV1DataScanEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datascanevent"></a>
<a id="schema_GoogleCloudDataplexV1DataScanEvent"></a>
<a id="tocSgoogleclouddataplexv1datascanevent"></a>
<a id="tocsgoogleclouddataplexv1datascanevent"></a>

```json
{
  "dataProfile": {
    "rowCount": "string"
  },
  "dataQuality": {
    "dimensionPassed": {
      "property1": true,
      "property2": true
    },
    "passed": true,
    "rowCount": "string"
  },
  "dataSource": "string",
  "endTime": "string",
  "jobId": "string",
  "message": "string",
  "scope": "SCOPE_UNSPECIFIED",
  "specVersion": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trigger": "TRIGGER_UNSPECIFIED",
  "type": "SCAN_TYPE_UNSPECIFIED"
}
```

These messages contain information about the execution of a datascan. The monitored resource is 'DataScan'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataProfile|[GoogleCloudDataplexV1DataScanEventDataProfileResult](#schemagoogleclouddataplexv1datascaneventdataprofileresult)|false|none|Data profile result for data profile type data scan.|
|dataQuality|[GoogleCloudDataplexV1DataScanEventDataQualityResult](#schemagoogleclouddataplexv1datascaneventdataqualityresult)|false|none|Data quality result for data quality type data scan.|
|dataSource|string|false|none|The data source of the data scan|
|endTime|string(google-datetime)|false|none|The time when the data scan job finished.|
|jobId|string|false|none|The identifier of the specific data scan job this log entry is for.|
|message|string|false|none|The message describing the data scan job event.|
|scope|string|false|none|The scope of the data scan (e.g. full, incremental).|
|specVersion|string|false|none|A version identifier of the spec which was used to execute this job.|
|startTime|string(google-datetime)|false|none|The time when the data scan job started to run.|
|state|string|false|none|The status of the data scan job.|
|trigger|string|false|none|The trigger type of the data scan job.|
|type|string|false|none|The type of the data scan.|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|SCOPE_UNSPECIFIED|
|scope|FULL|
|scope|INCREMENTAL|
|state|STATE_UNSPECIFIED|
|state|STARTED|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|
|trigger|TRIGGER_UNSPECIFIED|
|trigger|ON_DEMAND|
|trigger|SCHEDULE|
|type|SCAN_TYPE_UNSPECIFIED|
|type|DATA_PROFILE|
|type|DATA_QUALITY|

<h2 id="tocS_GoogleCloudDataplexV1DataScanEventDataProfileResult">GoogleCloudDataplexV1DataScanEventDataProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datascaneventdataprofileresult"></a>
<a id="schema_GoogleCloudDataplexV1DataScanEventDataProfileResult"></a>
<a id="tocSgoogleclouddataplexv1datascaneventdataprofileresult"></a>
<a id="tocsgoogleclouddataplexv1datascaneventdataprofileresult"></a>

```json
{
  "rowCount": "string"
}
```

Data profile result for data scan job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowCount|string(int64)|false|none|The count of rows processed in the data scan job.|

<h2 id="tocS_GoogleCloudDataplexV1DataScanEventDataQualityResult">GoogleCloudDataplexV1DataScanEventDataQualityResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datascaneventdataqualityresult"></a>
<a id="schema_GoogleCloudDataplexV1DataScanEventDataQualityResult"></a>
<a id="tocSgoogleclouddataplexv1datascaneventdataqualityresult"></a>
<a id="tocsgoogleclouddataplexv1datascaneventdataqualityresult"></a>

```json
{
  "dimensionPassed": {
    "property1": true,
    "property2": true
  },
  "passed": true,
  "rowCount": "string"
}
```

Data quality result for data scan job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionPassed|object|false|none|The result of each dimension for data quality result. The key of the map is the name of the dimension. The value is the bool value depicting whether the dimension result was pass or not.|
|passed|boolean|false|none|Whether the data quality result was pass or not.|
|rowCount|string(int64)|false|none|The count of rows processed in the data scan job.|

<h2 id="tocS_GoogleCloudDataplexV1DataScanExecutionSpec">GoogleCloudDataplexV1DataScanExecutionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datascanexecutionspec"></a>
<a id="schema_GoogleCloudDataplexV1DataScanExecutionSpec"></a>
<a id="tocSgoogleclouddataplexv1datascanexecutionspec"></a>
<a id="tocsgoogleclouddataplexv1datascanexecutionspec"></a>

```json
{
  "field": "string",
  "trigger": {
    "onDemand": {},
    "schedule": {
      "cron": "string"
    }
  }
}
```

DataScan execution settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|Immutable. The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.If not specified, a data scan will run for all data in the table.|
|trigger|[GoogleCloudDataplexV1Trigger](#schemagoogleclouddataplexv1trigger)|false|none|Optional. Spec related to how often and when a scan should be triggered.If not specified, the default is OnDemand, which means the scan will not run until the user calls RunDataScan API.|

<h2 id="tocS_GoogleCloudDataplexV1DataScanExecutionStatus">GoogleCloudDataplexV1DataScanExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datascanexecutionstatus"></a>
<a id="schema_GoogleCloudDataplexV1DataScanExecutionStatus"></a>
<a id="tocSgoogleclouddataplexv1datascanexecutionstatus"></a>
<a id="tocsgoogleclouddataplexv1datascanexecutionstatus"></a>

```json
{
  "latestJobEndTime": "string",
  "latestJobStartTime": "string"
}
```

Status of the data scan execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestJobEndTime|string(google-datetime)|false|none|The time when the latest DataScanJob ended.|
|latestJobStartTime|string(google-datetime)|false|none|The time when the latest DataScanJob started.|

<h2 id="tocS_GoogleCloudDataplexV1DataScanJob">GoogleCloudDataplexV1DataScanJob</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datascanjob"></a>
<a id="schema_GoogleCloudDataplexV1DataScanJob"></a>
<a id="tocSgoogleclouddataplexv1datascanjob"></a>
<a id="tocsgoogleclouddataplexv1datascanjob"></a>

```json
{
  "dataProfileResult": {
    "profile": {
      "fields": [
        {
          "mode": "string",
          "name": "string",
          "profile": {
            "distinctRatio": 0,
            "doubleProfile": {
              "average": 0,
              "max": 0,
              "min": 0,
              "quartiles": [
                0
              ],
              "standardDeviation": 0
            },
            "integerProfile": {
              "average": 0,
              "max": "string",
              "min": "string",
              "quartiles": [
                "string"
              ],
              "standardDeviation": 0
            },
            "nullRatio": 0,
            "stringProfile": {
              "averageLength": 0,
              "maxLength": "string",
              "minLength": "string"
            },
            "topNValues": [
              {
                "count": "string",
                "value": "string"
              }
            ]
          },
          "type": "string"
        }
      ]
    },
    "rowCount": "string",
    "scannedData": {
      "incrementalField": {
        "end": "string",
        "field": "string",
        "start": "string"
      }
    }
  },
  "dataProfileSpec": {},
  "dataQualityResult": {
    "dimensions": [
      {
        "passed": true
      }
    ],
    "passed": true,
    "rowCount": "string",
    "rules": [
      {
        "evaluatedCount": "string",
        "failingRowsQuery": "string",
        "nullCount": "string",
        "passRatio": 0,
        "passed": true,
        "passedCount": "string",
        "rule": {
          "column": "string",
          "dimension": "string",
          "ignoreNull": true,
          "nonNullExpectation": {},
          "rangeExpectation": {
            "maxValue": "string",
            "minValue": "string",
            "strictMaxEnabled": true,
            "strictMinEnabled": true
          },
          "regexExpectation": {
            "regex": "string"
          },
          "rowConditionExpectation": {
            "sqlExpression": "string"
          },
          "setExpectation": {
            "values": [
              "string"
            ]
          },
          "statisticRangeExpectation": {
            "maxValue": "string",
            "minValue": "string",
            "statistic": "STATISTIC_UNDEFINED",
            "strictMaxEnabled": true,
            "strictMinEnabled": true
          },
          "tableConditionExpectation": {
            "sqlExpression": "string"
          },
          "threshold": 0,
          "uniquenessExpectation": {}
        }
      }
    ],
    "scannedData": {
      "incrementalField": {
        "end": "string",
        "field": "string",
        "start": "string"
      }
    }
  },
  "dataQualitySpec": {
    "rules": [
      {
        "column": "string",
        "dimension": "string",
        "ignoreNull": true,
        "nonNullExpectation": {},
        "rangeExpectation": {
          "maxValue": "string",
          "minValue": "string",
          "strictMaxEnabled": true,
          "strictMinEnabled": true
        },
        "regexExpectation": {
          "regex": "string"
        },
        "rowConditionExpectation": {
          "sqlExpression": "string"
        },
        "setExpectation": {
          "values": [
            "string"
          ]
        },
        "statisticRangeExpectation": {
          "maxValue": "string",
          "minValue": "string",
          "statistic": "STATISTIC_UNDEFINED",
          "strictMaxEnabled": true,
          "strictMinEnabled": true
        },
        "tableConditionExpectation": {
          "sqlExpression": "string"
        },
        "threshold": 0,
        "uniquenessExpectation": {}
      }
    ]
  },
  "endTime": "string",
  "message": "string",
  "name": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "DATA_SCAN_TYPE_UNSPECIFIED",
  "uid": "string"
}
```

A DataScanJob represents an instance of DataScan execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataProfileResult|[GoogleCloudDataplexV1DataProfileResult](#schemagoogleclouddataplexv1dataprofileresult)|false|none|Output only. The result of the data profile scan.|
|dataProfileSpec|[GoogleCloudDataplexV1DataProfileSpec](#schemagoogleclouddataplexv1dataprofilespec)|false|none|Output only. DataProfileScan related setting.|
|dataQualityResult|[GoogleCloudDataplexV1DataQualityResult](#schemagoogleclouddataplexv1dataqualityresult)|false|none|Output only. The result of the data quality scan.|
|dataQualitySpec|[GoogleCloudDataplexV1DataQualitySpec](#schemagoogleclouddataplexv1dataqualityspec)|false|none|Output only. DataQualityScan related setting.|
|endTime|string(google-datetime)|false|read-only|Output only. The time when the DataScanJob ended.|
|message|string|false|read-only|Output only. Additional information about the current state.|
|name|string|false|read-only|Output only. The relative resource name of the DataScanJob, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}/jobs/{job_id}, where project refers to a project_id or project_number and location_id refers to a GCP region.|
|startTime|string(google-datetime)|false|read-only|Output only. The time when the DataScanJob was started.|
|state|string|false|read-only|Output only. Execution state for the DataScanJob.|
|type|string|false|read-only|Output only. The type of the parent DataScan.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the DataScanJob.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|CANCELING|
|state|CANCELLED|
|state|SUCCEEDED|
|state|FAILED|
|state|PENDING|
|type|DATA_SCAN_TYPE_UNSPECIFIED|
|type|DATA_QUALITY|
|type|DATA_PROFILE|

<h2 id="tocS_GoogleCloudDataplexV1DataSource">GoogleCloudDataplexV1DataSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datasource"></a>
<a id="schema_GoogleCloudDataplexV1DataSource"></a>
<a id="tocSgoogleclouddataplexv1datasource"></a>
<a id="tocsgoogleclouddataplexv1datasource"></a>

```json
{
  "entity": "string",
  "resource": "string"
}
```

The data source for DataScan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|string|false|none|Immutable. The Dataplex entity that represents the data source (e.g. BigQuery table) for DataScan, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.|
|resource|string|false|none|Immutable. The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be: BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID|

<h2 id="tocS_GoogleCloudDataplexV1DataTaxonomy">GoogleCloudDataplexV1DataTaxonomy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1datataxonomy"></a>
<a id="schema_GoogleCloudDataplexV1DataTaxonomy"></a>
<a id="tocSgoogleclouddataplexv1datataxonomy"></a>
<a id="tocsgoogleclouddataplexv1datataxonomy"></a>

```json
{
  "attributeCount": 0,
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "uid": "string",
  "updateTime": "string"
}
```

DataTaxonomy represents a set of hierarchical DataAttributes resources, grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes to manage PII data. It is defined at project level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeCount|integer(int32)|false|read-only|Output only. The number of attributes in the DataTaxonomy.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the DataTaxonomy was created.|
|description|string|false|none|Optional. Description of the DataTaxonomy.|
|displayName|string|false|none|Optional. User friendly display name.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|labels|object|false|none|Optional. User-defined labels for the DataTaxonomy.|
|name|string|false|read-only|Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the DataTaxonomy was last updated.|

<h2 id="tocS_GoogleCloudDataplexV1DiscoveryEvent">GoogleCloudDataplexV1DiscoveryEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1discoveryevent"></a>
<a id="schema_GoogleCloudDataplexV1DiscoveryEvent"></a>
<a id="tocSgoogleclouddataplexv1discoveryevent"></a>
<a id="tocsgoogleclouddataplexv1discoveryevent"></a>

```json
{
  "action": {
    "type": "string"
  },
  "assetId": "string",
  "config": {
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "dataLocation": "string",
  "entity": {
    "entity": "string",
    "type": "ENTITY_TYPE_UNSPECIFIED"
  },
  "lakeId": "string",
  "message": "string",
  "partition": {
    "entity": "string",
    "partition": "string",
    "sampledDataLocations": [
      "string"
    ],
    "type": "ENTITY_TYPE_UNSPECIFIED"
  },
  "type": "EVENT_TYPE_UNSPECIFIED",
  "zoneId": "string"
}
```

The payload associated with Discovery data processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[GoogleCloudDataplexV1DiscoveryEventActionDetails](#schemagoogleclouddataplexv1discoveryeventactiondetails)|false|none|Details about the action associated with the event.|
|assetId|string|false|none|The id of the associated asset.|
|config|[GoogleCloudDataplexV1DiscoveryEventConfigDetails](#schemagoogleclouddataplexv1discoveryeventconfigdetails)|false|none|Details about discovery configuration in effect.|
|dataLocation|string|false|none|The data location associated with the event.|
|entity|[GoogleCloudDataplexV1DiscoveryEventEntityDetails](#schemagoogleclouddataplexv1discoveryevententitydetails)|false|none|Details about the entity associated with the event.|
|lakeId|string|false|none|The id of the associated lake.|
|message|string|false|none|The log message.|
|partition|[GoogleCloudDataplexV1DiscoveryEventPartitionDetails](#schemagoogleclouddataplexv1discoveryeventpartitiondetails)|false|none|Details about the partition associated with the event.|
|type|string|false|none|The type of the event being logged.|
|zoneId|string|false|none|The id of the associated zone.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EVENT_TYPE_UNSPECIFIED|
|type|CONFIG|
|type|ENTITY_CREATED|
|type|ENTITY_UPDATED|
|type|ENTITY_DELETED|
|type|PARTITION_CREATED|
|type|PARTITION_UPDATED|
|type|PARTITION_DELETED|

<h2 id="tocS_GoogleCloudDataplexV1DiscoveryEventActionDetails">GoogleCloudDataplexV1DiscoveryEventActionDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1discoveryeventactiondetails"></a>
<a id="schema_GoogleCloudDataplexV1DiscoveryEventActionDetails"></a>
<a id="tocSgoogleclouddataplexv1discoveryeventactiondetails"></a>
<a id="tocsgoogleclouddataplexv1discoveryeventactiondetails"></a>

```json
{
  "type": "string"
}
```

Details about the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of action. Eg. IncompatibleDataSchema, InvalidDataFormat|

<h2 id="tocS_GoogleCloudDataplexV1DiscoveryEventConfigDetails">GoogleCloudDataplexV1DiscoveryEventConfigDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1discoveryeventconfigdetails"></a>
<a id="schema_GoogleCloudDataplexV1DiscoveryEventConfigDetails"></a>
<a id="tocSgoogleclouddataplexv1discoveryeventconfigdetails"></a>
<a id="tocsgoogleclouddataplexv1discoveryeventconfigdetails"></a>

```json
{
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Details about configuration events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|A list of discovery configuration parameters in effect. The keys are the field paths within DiscoverySpec. Eg. includePatterns, excludePatterns, csvOptions.disableTypeInference, etc.|

<h2 id="tocS_GoogleCloudDataplexV1DiscoveryEventEntityDetails">GoogleCloudDataplexV1DiscoveryEventEntityDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1discoveryevententitydetails"></a>
<a id="schema_GoogleCloudDataplexV1DiscoveryEventEntityDetails"></a>
<a id="tocSgoogleclouddataplexv1discoveryevententitydetails"></a>
<a id="tocsgoogleclouddataplexv1discoveryevententitydetails"></a>

```json
{
  "entity": "string",
  "type": "ENTITY_TYPE_UNSPECIFIED"
}
```

Details about the entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|string|false|none|The name of the entity resource. The name is the fully-qualified resource name.|
|type|string|false|none|The type of the entity resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENTITY_TYPE_UNSPECIFIED|
|type|TABLE|
|type|FILESET|

<h2 id="tocS_GoogleCloudDataplexV1DiscoveryEventPartitionDetails">GoogleCloudDataplexV1DiscoveryEventPartitionDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1discoveryeventpartitiondetails"></a>
<a id="schema_GoogleCloudDataplexV1DiscoveryEventPartitionDetails"></a>
<a id="tocSgoogleclouddataplexv1discoveryeventpartitiondetails"></a>
<a id="tocsgoogleclouddataplexv1discoveryeventpartitiondetails"></a>

```json
{
  "entity": "string",
  "partition": "string",
  "sampledDataLocations": [
    "string"
  ],
  "type": "ENTITY_TYPE_UNSPECIFIED"
}
```

Details about the partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|string|false|none|The name to the containing entity resource. The name is the fully-qualified resource name.|
|partition|string|false|none|The name to the partition resource. The name is the fully-qualified resource name.|
|sampledDataLocations|[string]|false|none|The locations of the data items (e.g., a Cloud Storage objects) sampled for metadata inference.|
|type|string|false|none|The type of the containing entity resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENTITY_TYPE_UNSPECIFIED|
|type|TABLE|
|type|FILESET|

<h2 id="tocS_GoogleCloudDataplexV1Entity">GoogleCloudDataplexV1Entity</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1entity"></a>
<a id="schema_GoogleCloudDataplexV1Entity"></a>
<a id="tocSgoogleclouddataplexv1entity"></a>
<a id="tocsgoogleclouddataplexv1entity"></a>

```json
{
  "access": {
    "read": "ACCESS_MODE_UNSPECIFIED"
  },
  "asset": "string",
  "catalogEntry": "string",
  "compatibility": {
    "bigquery": {
      "compatible": true,
      "reason": "string"
    },
    "hiveMetastore": {
      "compatible": true,
      "reason": "string"
    }
  },
  "createTime": "string",
  "dataPath": "string",
  "dataPathPattern": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "format": {
    "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
    "csv": {
      "delimiter": "string",
      "encoding": "string",
      "headerRows": 0,
      "quote": "string"
    },
    "format": "FORMAT_UNSPECIFIED",
    "iceberg": {
      "metadataLocation": "string"
    },
    "json": {
      "encoding": "string"
    },
    "mimeType": "string"
  },
  "id": "string",
  "name": "string",
  "schema": {
    "fields": [
      {
        "description": "string",
        "fields": [
          {}
        ],
        "mode": "MODE_UNSPECIFIED",
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionFields": [
      {
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
    "userManaged": true
  },
  "system": "STORAGE_SYSTEM_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

Represents tables and fileset metadata contained within a zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[GoogleCloudDataplexV1StorageAccess](#schemagoogleclouddataplexv1storageaccess)|false|none|Output only. Identifies the access mechanism to the entity. Not user settable.|
|asset|string|false|none|Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.|
|catalogEntry|string|false|read-only|Output only. The name of the associated Data Catalog entry.|
|compatibility|[GoogleCloudDataplexV1EntityCompatibilityStatus](#schemagoogleclouddataplexv1entitycompatibilitystatus)|false|none|Output only. Metadata stores that the entity is compatible with.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the entity was created.|
|dataPath|string|false|none|Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.|
|dataPathPattern|string|false|none|Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**/*.csv.|
|description|string|false|none|Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.|
|displayName|string|false|none|Optional. Display name must be shorter than or equal to 256 characters.|
|etag|string|false|none|Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.|
|format|[GoogleCloudDataplexV1StorageFormat](#schemagoogleclouddataplexv1storageformat)|false|none|Required. Identifies the storage format of the entity data. It does not apply to entities with data stored in BigQuery.|
|id|string|false|none|Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters.|
|name|string|false|read-only|Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}.|
|schema|[GoogleCloudDataplexV1Schema](#schemagoogleclouddataplexv1schema)|false|none|Required. The description of the data structure and layout. The schema is not included in list responses. It is only included in SCHEMA and FULL entity views of a GetEntity response.|
|system|string|false|none|Required. Immutable. Identifies the storage system of the entity data.|
|type|string|false|none|Required. Immutable. The type of entity.|
|uid|string|false|read-only|Output only. System generated unique ID for the Entity. This ID will be different if the Entity is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the entity was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|system|STORAGE_SYSTEM_UNSPECIFIED|
|system|CLOUD_STORAGE|
|system|BIGQUERY|
|type|TYPE_UNSPECIFIED|
|type|TABLE|
|type|FILESET|

<h2 id="tocS_GoogleCloudDataplexV1EntityCompatibilityStatus">GoogleCloudDataplexV1EntityCompatibilityStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1entitycompatibilitystatus"></a>
<a id="schema_GoogleCloudDataplexV1EntityCompatibilityStatus"></a>
<a id="tocSgoogleclouddataplexv1entitycompatibilitystatus"></a>
<a id="tocsgoogleclouddataplexv1entitycompatibilitystatus"></a>

```json
{
  "bigquery": {
    "compatible": true,
    "reason": "string"
  },
  "hiveMetastore": {
    "compatible": true,
    "reason": "string"
  }
}
```

Provides compatibility information for various metadata stores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigquery|[GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility](#schemagoogleclouddataplexv1entitycompatibilitystatuscompatibility)|false|none|Output only. Whether this entity is compatible with BigQuery.|
|hiveMetastore|[GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility](#schemagoogleclouddataplexv1entitycompatibilitystatuscompatibility)|false|none|Output only. Whether this entity is compatible with Hive Metastore.|

<h2 id="tocS_GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility">GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1entitycompatibilitystatuscompatibility"></a>
<a id="schema_GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility"></a>
<a id="tocSgoogleclouddataplexv1entitycompatibilitystatuscompatibility"></a>
<a id="tocsgoogleclouddataplexv1entitycompatibilitystatuscompatibility"></a>

```json
{
  "compatible": true,
  "reason": "string"
}
```

Provides compatibility information for a specific metadata store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compatible|boolean|false|read-only|Output only. Whether the entity is compatible and can be represented in the metadata store.|
|reason|string|false|read-only|Output only. Provides additional detail if the entity is incompatible with the metadata store.|

<h2 id="tocS_GoogleCloudDataplexV1Environment">GoogleCloudDataplexV1Environment</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1environment"></a>
<a id="schema_GoogleCloudDataplexV1Environment"></a>
<a id="tocSgoogleclouddataplexv1environment"></a>
<a id="tocsgoogleclouddataplexv1environment"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "endpoints": {
    "notebooks": "string",
    "sql": "string"
  },
  "infrastructureSpec": {
    "compute": {
      "diskSizeGb": 0,
      "maxNodeCount": 0,
      "nodeCount": 0
    },
    "osImage": {
      "imageVersion": "string",
      "javaLibraries": [
        "string"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "pythonPackages": [
        "string"
      ]
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "sessionSpec": {
    "enableFastStartup": true,
    "maxIdleDuration": "string"
  },
  "sessionStatus": {
    "active": true
  },
  "state": "STATE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

Environment represents a user-visible compute infrastructure for analytics within a lake.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Environment creation time.|
|description|string|false|none|Optional. Description of the environment.|
|displayName|string|false|none|Optional. User friendly display name.|
|endpoints|[GoogleCloudDataplexV1EnvironmentEndpoints](#schemagoogleclouddataplexv1environmentendpoints)|false|none|Output only. URI Endpoints to access sessions associated with the Environment.|
|infrastructureSpec|[GoogleCloudDataplexV1EnvironmentInfrastructureSpec](#schemagoogleclouddataplexv1environmentinfrastructurespec)|false|none|Required. Infrastructure specification for the Environment.|
|labels|object|false|none|Optional. User defined labels for the environment.|
|name|string|false|read-only|Output only. The relative resource name of the environment, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}|
|sessionSpec|[GoogleCloudDataplexV1EnvironmentSessionSpec](#schemagoogleclouddataplexv1environmentsessionspec)|false|none|Optional. Configuration for sessions created for this environment.|
|sessionStatus|[GoogleCloudDataplexV1EnvironmentSessionStatus](#schemagoogleclouddataplexv1environmentsessionstatus)|false|none|Output only. Status of sessions created for this environment.|
|state|string|false|read-only|Output only. Current state of the environment.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the environment was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|CREATING|
|state|DELETING|
|state|ACTION_REQUIRED|

<h2 id="tocS_GoogleCloudDataplexV1EnvironmentEndpoints">GoogleCloudDataplexV1EnvironmentEndpoints</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1environmentendpoints"></a>
<a id="schema_GoogleCloudDataplexV1EnvironmentEndpoints"></a>
<a id="tocSgoogleclouddataplexv1environmentendpoints"></a>
<a id="tocsgoogleclouddataplexv1environmentendpoints"></a>

```json
{
  "notebooks": "string",
  "sql": "string"
}
```

URI Endpoints to access sessions associated with the Environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notebooks|string|false|read-only|Output only. URI to serve notebook APIs|
|sql|string|false|read-only|Output only. URI to serve SQL APIs|

<h2 id="tocS_GoogleCloudDataplexV1EnvironmentInfrastructureSpec">GoogleCloudDataplexV1EnvironmentInfrastructureSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1environmentinfrastructurespec"></a>
<a id="schema_GoogleCloudDataplexV1EnvironmentInfrastructureSpec"></a>
<a id="tocSgoogleclouddataplexv1environmentinfrastructurespec"></a>
<a id="tocsgoogleclouddataplexv1environmentinfrastructurespec"></a>

```json
{
  "compute": {
    "diskSizeGb": 0,
    "maxNodeCount": 0,
    "nodeCount": 0
  },
  "osImage": {
    "imageVersion": "string",
    "javaLibraries": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonPackages": [
      "string"
    ]
  }
}
```

Configuration for the underlying infrastructure used to run workloads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compute|[GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources](#schemagoogleclouddataplexv1environmentinfrastructurespeccomputeresources)|false|none|Optional. Compute resources needed for analyze interactive workloads.|
|osImage|[GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime](#schemagoogleclouddataplexv1environmentinfrastructurespecosimageruntime)|false|none|Required. Software Runtime Configuration for analyze interactive workloads.|

<h2 id="tocS_GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources">GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1environmentinfrastructurespeccomputeresources"></a>
<a id="schema_GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources"></a>
<a id="tocSgoogleclouddataplexv1environmentinfrastructurespeccomputeresources"></a>
<a id="tocsgoogleclouddataplexv1environmentinfrastructurespeccomputeresources"></a>

```json
{
  "diskSizeGb": 0,
  "maxNodeCount": 0,
  "nodeCount": 0
}
```

Compute resources associated with the analyze interactive workloads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSizeGb|integer(int32)|false|none|Optional. Size in GB of the disk. Default is 100 GB.|
|maxNodeCount|integer(int32)|false|none|Optional. Max configurable nodes. If max_node_count > node_count, then auto-scaling is enabled.|
|nodeCount|integer(int32)|false|none|Optional. Total number of nodes in the sessions created for this environment.|

<h2 id="tocS_GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime">GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1environmentinfrastructurespecosimageruntime"></a>
<a id="schema_GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime"></a>
<a id="tocSgoogleclouddataplexv1environmentinfrastructurespecosimageruntime"></a>
<a id="tocsgoogleclouddataplexv1environmentinfrastructurespecosimageruntime"></a>

```json
{
  "imageVersion": "string",
  "javaLibraries": [
    "string"
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "pythonPackages": [
    "string"
  ]
}
```

Software Runtime Configuration to run Analyze.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageVersion|string|false|none|Required. Dataplex Image version.|
|javaLibraries|[string]|false|none|Optional. List of Java jars to be included in the runtime environment. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar|
|properties|object|false|none|Optional. Spark properties to provide configuration for use in sessions created for this environment. The properties to set on daemon config files. Property keys are specified in prefix:property format. The prefix must be "spark".|
|pythonPackages|[string]|false|none|Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz|

<h2 id="tocS_GoogleCloudDataplexV1EnvironmentSessionSpec">GoogleCloudDataplexV1EnvironmentSessionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1environmentsessionspec"></a>
<a id="schema_GoogleCloudDataplexV1EnvironmentSessionSpec"></a>
<a id="tocSgoogleclouddataplexv1environmentsessionspec"></a>
<a id="tocsgoogleclouddataplexv1environmentsessionspec"></a>

```json
{
  "enableFastStartup": true,
  "maxIdleDuration": "string"
}
```

Configuration for sessions created for this environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableFastStartup|boolean|false|none|Optional. If True, this causes sessions to be pre-created and available for faster startup to enable interactive exploration use-cases. This defaults to False to avoid additional billed charges. These can only be set to True for the environment with name set to "default", and with default configuration.|
|maxIdleDuration|string(google-duration)|false|none|Optional. The idle time configuration of the session. The session will be auto-terminated at the end of this period.|

<h2 id="tocS_GoogleCloudDataplexV1EnvironmentSessionStatus">GoogleCloudDataplexV1EnvironmentSessionStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1environmentsessionstatus"></a>
<a id="schema_GoogleCloudDataplexV1EnvironmentSessionStatus"></a>
<a id="tocSgoogleclouddataplexv1environmentsessionstatus"></a>
<a id="tocsgoogleclouddataplexv1environmentsessionstatus"></a>

```json
{
  "active": true
}
```

Status of sessions created for this environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|read-only|Output only. Queries over sessions to mark whether the environment is currently active or not|

<h2 id="tocS_GoogleCloudDataplexV1Job">GoogleCloudDataplexV1Job</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1job"></a>
<a id="schema_GoogleCloudDataplexV1Job"></a>
<a id="tocSgoogleclouddataplexv1job"></a>
<a id="tocsgoogleclouddataplexv1job"></a>

```json
{
  "endTime": "string",
  "message": "string",
  "name": "string",
  "retryCount": 0,
  "service": "SERVICE_UNSPECIFIED",
  "serviceJob": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "uid": "string"
}
```

A job represents an instance of a task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|read-only|Output only. The time when the job ended.|
|message|string|false|read-only|Output only. Additional information about the current state.|
|name|string|false|read-only|Output only. The relative resource name of the job, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}.|
|retryCount|integer(uint32)|false|read-only|Output only. The number of times the job has been retried (excluding the initial attempt).|
|service|string|false|read-only|Output only. The underlying service running a job.|
|serviceJob|string|false|read-only|Output only. The full resource name for the job run under a particular service.|
|startTime|string(google-datetime)|false|read-only|Output only. The time when the job was started.|
|state|string|false|read-only|Output only. Execution state for the job.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|service|SERVICE_UNSPECIFIED|
|service|DATAPROC|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|CANCELLING|
|state|CANCELLED|
|state|SUCCEEDED|
|state|FAILED|
|state|ABORTED|

<h2 id="tocS_GoogleCloudDataplexV1JobEvent">GoogleCloudDataplexV1JobEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1jobevent"></a>
<a id="schema_GoogleCloudDataplexV1JobEvent"></a>
<a id="tocSgoogleclouddataplexv1jobevent"></a>
<a id="tocsgoogleclouddataplexv1jobevent"></a>

```json
{
  "endTime": "string",
  "jobId": "string",
  "message": "string",
  "retries": 0,
  "service": "SERVICE_UNSPECIFIED",
  "serviceJob": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

The payload associated with Job logs that contains events describing jobs that have run within a Lake.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time when the job ended running.|
|jobId|string|false|none|The unique id identifying the job.|
|message|string|false|none|The log message.|
|retries|integer(int32)|false|none|The number of retries.|
|service|string|false|none|The service used to execute the job.|
|serviceJob|string|false|none|The reference to the job within the service.|
|startTime|string(google-datetime)|false|none|The time when the job started running.|
|state|string|false|none|The job state on completion.|
|type|string|false|none|The type of the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|service|SERVICE_UNSPECIFIED|
|service|DATAPROC|
|state|STATE_UNSPECIFIED|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|
|state|ABORTED|
|type|TYPE_UNSPECIFIED|
|type|SPARK|
|type|NOTEBOOK|

<h2 id="tocS_GoogleCloudDataplexV1Lake">GoogleCloudDataplexV1Lake</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1lake"></a>
<a id="schema_GoogleCloudDataplexV1Lake"></a>
<a id="tocSgoogleclouddataplexv1lake"></a>
<a id="tocsgoogleclouddataplexv1lake"></a>

```json
{
  "assetStatus": {
    "activeAssets": 0,
    "securityPolicyApplyingAssets": 0,
    "updateTime": "string"
  },
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "metastore": {
    "service": "string"
  },
  "metastoreStatus": {
    "endpoint": "string",
    "message": "string",
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string"
  },
  "name": "string",
  "serviceAccount": "string",
  "state": "STATE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetStatus|[GoogleCloudDataplexV1AssetStatus](#schemagoogleclouddataplexv1assetstatus)|false|none|Output only. Aggregated status of the underlying assets of the lake.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the lake was created.|
|description|string|false|none|Optional. Description of the lake.|
|displayName|string|false|none|Optional. User friendly display name.|
|labels|object|false|none|Optional. User-defined labels for the lake.|
|metastore|[GoogleCloudDataplexV1LakeMetastore](#schemagoogleclouddataplexv1lakemetastore)|false|none|Optional. Settings to manage lake and Dataproc Metastore service instance association.|
|metastoreStatus|[GoogleCloudDataplexV1LakeMetastoreStatus](#schemagoogleclouddataplexv1lakemetastorestatus)|false|none|Output only. Metastore status of the lake.|
|name|string|false|read-only|Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.|
|serviceAccount|string|false|read-only|Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake.|
|state|string|false|read-only|Output only. Current state of the lake.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the lake was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|CREATING|
|state|DELETING|
|state|ACTION_REQUIRED|

<h2 id="tocS_GoogleCloudDataplexV1LakeMetastore">GoogleCloudDataplexV1LakeMetastore</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1lakemetastore"></a>
<a id="schema_GoogleCloudDataplexV1LakeMetastore"></a>
<a id="tocSgoogleclouddataplexv1lakemetastore"></a>
<a id="tocsgoogleclouddataplexv1lakemetastore"></a>

```json
{
  "service": "string"
}
```

Settings to manage association of Dataproc Metastore with a lake.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|string|false|none|Optional. A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service associated with the lake: projects/{project_id}/locations/{location_id}/services/{service_id}|

<h2 id="tocS_GoogleCloudDataplexV1LakeMetastoreStatus">GoogleCloudDataplexV1LakeMetastoreStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1lakemetastorestatus"></a>
<a id="schema_GoogleCloudDataplexV1LakeMetastoreStatus"></a>
<a id="tocSgoogleclouddataplexv1lakemetastorestatus"></a>
<a id="tocsgoogleclouddataplexv1lakemetastorestatus"></a>

```json
{
  "endpoint": "string",
  "message": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Status of Lake and Dataproc Metastore service instance association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|The URI of the endpoint used to access the Metastore service.|
|message|string|false|none|Additional information about the current status.|
|state|string|false|none|Current state of association.|
|updateTime|string(google-datetime)|false|none|Last update time of the metastore status of the lake.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NONE|
|state|READY|
|state|UPDATING|
|state|ERROR|

<h2 id="tocS_GoogleCloudDataplexV1ListActionsResponse">GoogleCloudDataplexV1ListActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listactionsresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListActionsResponse"></a>
<a id="tocSgoogleclouddataplexv1listactionsresponse"></a>
<a id="tocsgoogleclouddataplexv1listactionsresponse"></a>

```json
{
  "actions": [
    {
      "asset": "string",
      "category": "CATEGORY_UNSPECIFIED",
      "dataLocations": [
        "string"
      ],
      "detectTime": "string",
      "failedSecurityPolicyApply": {
        "asset": "string"
      },
      "incompatibleDataSchema": {
        "existingSchema": "string",
        "newSchema": "string",
        "sampledDataLocations": [
          "string"
        ],
        "schemaChange": "SCHEMA_CHANGE_UNSPECIFIED",
        "table": "string"
      },
      "invalidDataFormat": {
        "expectedFormat": "string",
        "newFormat": "string",
        "sampledDataLocations": [
          "string"
        ]
      },
      "invalidDataOrganization": {},
      "invalidDataPartition": {
        "expectedStructure": "PARTITION_STRUCTURE_UNSPECIFIED"
      },
      "issue": "string",
      "lake": "string",
      "missingData": {},
      "missingResource": {},
      "name": "string",
      "unauthorizedResource": {},
      "zone": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List actions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[GoogleCloudDataplexV1Action](#schemagoogleclouddataplexv1action)]|false|none|Actions under the given parent lake/zone/asset.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudDataplexV1ListAssetsResponse">GoogleCloudDataplexV1ListAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listassetsresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListAssetsResponse"></a>
<a id="tocSgoogleclouddataplexv1listassetsresponse"></a>
<a id="tocsgoogleclouddataplexv1listassetsresponse"></a>

```json
{
  "assets": [
    {
      "createTime": "string",
      "description": "string",
      "discoverySpec": {
        "csvOptions": {
          "delimiter": "string",
          "disableTypeInference": true,
          "encoding": "string",
          "headerRows": 0
        },
        "enabled": true,
        "excludePatterns": [
          "string"
        ],
        "includePatterns": [
          "string"
        ],
        "jsonOptions": {
          "disableTypeInference": true,
          "encoding": "string"
        },
        "schedule": "string"
      },
      "discoveryStatus": {
        "lastRunDuration": "string",
        "lastRunTime": "string",
        "message": "string",
        "state": "STATE_UNSPECIFIED",
        "stats": {
          "dataItems": "string",
          "dataSize": "string",
          "filesets": "string",
          "tables": "string"
        },
        "updateTime": "string"
      },
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "resourceSpec": {
        "name": "string",
        "readAccessMode": "ACCESS_MODE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      },
      "resourceStatus": {
        "managedAccessIdentity": "string",
        "message": "string",
        "state": "STATE_UNSPECIFIED",
        "updateTime": "string"
      },
      "securityStatus": {
        "message": "string",
        "state": "STATE_UNSPECIFIED",
        "updateTime": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List assets response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[GoogleCloudDataplexV1Asset](#schemagoogleclouddataplexv1asset)]|false|none|Asset under the given parent zone.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudDataplexV1ListContentResponse">GoogleCloudDataplexV1ListContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listcontentresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListContentResponse"></a>
<a id="tocSgoogleclouddataplexv1listcontentresponse"></a>
<a id="tocsgoogleclouddataplexv1listcontentresponse"></a>

```json
{
  "content": [
    {
      "createTime": "string",
      "dataText": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notebook": {
        "kernelType": "KERNEL_TYPE_UNSPECIFIED"
      },
      "path": "string",
      "sqlScript": {
        "engine": "QUERY_ENGINE_UNSPECIFIED"
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List content response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[GoogleCloudDataplexV1Content](#schemagoogleclouddataplexv1content)]|false|none|Content under the given parent lake.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudDataplexV1ListDataAttributeBindingsResponse">GoogleCloudDataplexV1ListDataAttributeBindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listdataattributebindingsresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListDataAttributeBindingsResponse"></a>
<a id="tocSgoogleclouddataplexv1listdataattributebindingsresponse"></a>
<a id="tocsgoogleclouddataplexv1listdataattributebindingsresponse"></a>

```json
{
  "dataAttributeBindings": [
    {
      "attributes": [
        "string"
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "paths": [
        {
          "attributes": [
            "string"
          ],
          "name": "string"
        }
      ],
      "resource": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachableLocations": [
    "string"
  ]
}
```

List DataAttributeBindings response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataAttributeBindings|[[GoogleCloudDataplexV1DataAttributeBinding](#schemagoogleclouddataplexv1dataattributebinding)]|false|none|DataAttributeBindings under the given parent Location.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachableLocations|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_GoogleCloudDataplexV1ListDataAttributesResponse">GoogleCloudDataplexV1ListDataAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listdataattributesresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListDataAttributesResponse"></a>
<a id="tocSgoogleclouddataplexv1listdataattributesresponse"></a>
<a id="tocsgoogleclouddataplexv1listdataattributesresponse"></a>

```json
{
  "dataAttributes": [
    {
      "attributeCount": 0,
      "createTime": "string",
      "dataAccessSpec": {
        "readers": [
          "string"
        ]
      },
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parentId": "string",
      "resourceAccessSpec": {
        "owners": [
          "string"
        ],
        "readers": [
          "string"
        ],
        "writers": [
          "string"
        ]
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachableLocations": [
    "string"
  ]
}
```

List DataAttributes response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataAttributes|[[GoogleCloudDataplexV1DataAttribute](#schemagoogleclouddataplexv1dataattribute)]|false|none|DataAttributes under the given parent DataTaxonomy.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachableLocations|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_GoogleCloudDataplexV1ListDataScanJobsResponse">GoogleCloudDataplexV1ListDataScanJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listdatascanjobsresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListDataScanJobsResponse"></a>
<a id="tocSgoogleclouddataplexv1listdatascanjobsresponse"></a>
<a id="tocsgoogleclouddataplexv1listdatascanjobsresponse"></a>

```json
{
  "dataScanJobs": [
    {
      "dataProfileResult": {
        "profile": {
          "fields": [
            {
              "mode": "string",
              "name": "string",
              "profile": {
                "distinctRatio": 0,
                "doubleProfile": {
                  "average": 0,
                  "max": 0,
                  "min": 0,
                  "quartiles": [
                    0
                  ],
                  "standardDeviation": 0
                },
                "integerProfile": {
                  "average": 0,
                  "max": "string",
                  "min": "string",
                  "quartiles": [
                    "string"
                  ],
                  "standardDeviation": 0
                },
                "nullRatio": 0,
                "stringProfile": {
                  "averageLength": 0,
                  "maxLength": "string",
                  "minLength": "string"
                },
                "topNValues": [
                  {
                    "count": "string",
                    "value": "string"
                  }
                ]
              },
              "type": "string"
            }
          ]
        },
        "rowCount": "string",
        "scannedData": {
          "incrementalField": {
            "end": "string",
            "field": "string",
            "start": "string"
          }
        }
      },
      "dataProfileSpec": {},
      "dataQualityResult": {
        "dimensions": [
          {
            "passed": true
          }
        ],
        "passed": true,
        "rowCount": "string",
        "rules": [
          {
            "evaluatedCount": "string",
            "failingRowsQuery": "string",
            "nullCount": "string",
            "passRatio": 0,
            "passed": true,
            "passedCount": "string",
            "rule": {
              "column": "string",
              "dimension": "string",
              "ignoreNull": true,
              "nonNullExpectation": {},
              "rangeExpectation": {
                "maxValue": "string",
                "minValue": "string",
                "strictMaxEnabled": true,
                "strictMinEnabled": true
              },
              "regexExpectation": {
                "regex": "string"
              },
              "rowConditionExpectation": {
                "sqlExpression": "string"
              },
              "setExpectation": {
                "values": [
                  "string"
                ]
              },
              "statisticRangeExpectation": {
                "maxValue": "string",
                "minValue": "string",
                "statistic": "STATISTIC_UNDEFINED",
                "strictMaxEnabled": true,
                "strictMinEnabled": true
              },
              "tableConditionExpectation": {
                "sqlExpression": "string"
              },
              "threshold": 0,
              "uniquenessExpectation": {}
            }
          }
        ],
        "scannedData": {
          "incrementalField": {
            "end": "string",
            "field": "string",
            "start": "string"
          }
        }
      },
      "dataQualitySpec": {
        "rules": [
          {
            "column": "string",
            "dimension": "string",
            "ignoreNull": true,
            "nonNullExpectation": {},
            "rangeExpectation": {
              "maxValue": "string",
              "minValue": "string",
              "strictMaxEnabled": true,
              "strictMinEnabled": true
            },
            "regexExpectation": {
              "regex": "string"
            },
            "rowConditionExpectation": {
              "sqlExpression": "string"
            },
            "setExpectation": {
              "values": [
                "string"
              ]
            },
            "statisticRangeExpectation": {
              "maxValue": "string",
              "minValue": "string",
              "statistic": "STATISTIC_UNDEFINED",
              "strictMaxEnabled": true,
              "strictMinEnabled": true
            },
            "tableConditionExpectation": {
              "sqlExpression": "string"
            },
            "threshold": 0,
            "uniquenessExpectation": {}
          }
        ]
      },
      "endTime": "string",
      "message": "string",
      "name": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "DATA_SCAN_TYPE_UNSPECIFIED",
      "uid": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List DataScanJobs response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataScanJobs|[[GoogleCloudDataplexV1DataScanJob](#schemagoogleclouddataplexv1datascanjob)]|false|none|DataScanJobs (BASIC view only) under a given dataScan.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudDataplexV1ListDataScansResponse">GoogleCloudDataplexV1ListDataScansResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listdatascansresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListDataScansResponse"></a>
<a id="tocSgoogleclouddataplexv1listdatascansresponse"></a>
<a id="tocsgoogleclouddataplexv1listdatascansresponse"></a>

```json
{
  "dataScans": [
    {
      "createTime": "string",
      "data": {
        "entity": "string",
        "resource": "string"
      },
      "dataProfileResult": {
        "profile": {
          "fields": [
            {
              "mode": "string",
              "name": "string",
              "profile": {
                "distinctRatio": 0,
                "doubleProfile": {
                  "average": 0,
                  "max": 0,
                  "min": 0,
                  "quartiles": [
                    0
                  ],
                  "standardDeviation": 0
                },
                "integerProfile": {
                  "average": 0,
                  "max": "string",
                  "min": "string",
                  "quartiles": [
                    "string"
                  ],
                  "standardDeviation": 0
                },
                "nullRatio": 0,
                "stringProfile": {
                  "averageLength": 0,
                  "maxLength": "string",
                  "minLength": "string"
                },
                "topNValues": [
                  {
                    "count": "string",
                    "value": "string"
                  }
                ]
              },
              "type": "string"
            }
          ]
        },
        "rowCount": "string",
        "scannedData": {
          "incrementalField": {
            "end": "string",
            "field": "string",
            "start": "string"
          }
        }
      },
      "dataProfileSpec": {},
      "dataQualityResult": {
        "dimensions": [
          {
            "passed": true
          }
        ],
        "passed": true,
        "rowCount": "string",
        "rules": [
          {
            "evaluatedCount": "string",
            "failingRowsQuery": "string",
            "nullCount": "string",
            "passRatio": 0,
            "passed": true,
            "passedCount": "string",
            "rule": {
              "column": "string",
              "dimension": "string",
              "ignoreNull": true,
              "nonNullExpectation": {},
              "rangeExpectation": {
                "maxValue": "string",
                "minValue": "string",
                "strictMaxEnabled": true,
                "strictMinEnabled": true
              },
              "regexExpectation": {
                "regex": "string"
              },
              "rowConditionExpectation": {
                "sqlExpression": "string"
              },
              "setExpectation": {
                "values": [
                  "string"
                ]
              },
              "statisticRangeExpectation": {
                "maxValue": "string",
                "minValue": "string",
                "statistic": "STATISTIC_UNDEFINED",
                "strictMaxEnabled": true,
                "strictMinEnabled": true
              },
              "tableConditionExpectation": {
                "sqlExpression": "string"
              },
              "threshold": 0,
              "uniquenessExpectation": {}
            }
          }
        ],
        "scannedData": {
          "incrementalField": {
            "end": "string",
            "field": "string",
            "start": "string"
          }
        }
      },
      "dataQualitySpec": {
        "rules": [
          {
            "column": "string",
            "dimension": "string",
            "ignoreNull": true,
            "nonNullExpectation": {},
            "rangeExpectation": {
              "maxValue": "string",
              "minValue": "string",
              "strictMaxEnabled": true,
              "strictMinEnabled": true
            },
            "regexExpectation": {
              "regex": "string"
            },
            "rowConditionExpectation": {
              "sqlExpression": "string"
            },
            "setExpectation": {
              "values": [
                "string"
              ]
            },
            "statisticRangeExpectation": {
              "maxValue": "string",
              "minValue": "string",
              "statistic": "STATISTIC_UNDEFINED",
              "strictMaxEnabled": true,
              "strictMinEnabled": true
            },
            "tableConditionExpectation": {
              "sqlExpression": "string"
            },
            "threshold": 0,
            "uniquenessExpectation": {}
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "executionSpec": {
        "field": "string",
        "trigger": {
          "onDemand": {},
          "schedule": {
            "cron": "string"
          }
        }
      },
      "executionStatus": {
        "latestJobEndTime": "string",
        "latestJobStartTime": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "DATA_SCAN_TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

List dataScans response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataScans|[[GoogleCloudDataplexV1DataScan](#schemagoogleclouddataplexv1datascan)]|false|none|DataScans (BASIC view only) under the given parent location.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_GoogleCloudDataplexV1ListDataTaxonomiesResponse">GoogleCloudDataplexV1ListDataTaxonomiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listdatataxonomiesresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListDataTaxonomiesResponse"></a>
<a id="tocSgoogleclouddataplexv1listdatataxonomiesresponse"></a>
<a id="tocsgoogleclouddataplexv1listdatataxonomiesresponse"></a>

```json
{
  "dataTaxonomies": [
    {
      "attributeCount": 0,
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachableLocations": [
    "string"
  ]
}
```

List DataTaxonomies response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataTaxonomies|[[GoogleCloudDataplexV1DataTaxonomy](#schemagoogleclouddataplexv1datataxonomy)]|false|none|DataTaxonomies under the given parent location.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachableLocations|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_GoogleCloudDataplexV1ListEntitiesResponse">GoogleCloudDataplexV1ListEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listentitiesresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListEntitiesResponse"></a>
<a id="tocSgoogleclouddataplexv1listentitiesresponse"></a>
<a id="tocsgoogleclouddataplexv1listentitiesresponse"></a>

```json
{
  "entities": [
    {
      "access": {
        "read": "ACCESS_MODE_UNSPECIFIED"
      },
      "asset": "string",
      "catalogEntry": "string",
      "compatibility": {
        "bigquery": {
          "compatible": true,
          "reason": "string"
        },
        "hiveMetastore": {
          "compatible": true,
          "reason": "string"
        }
      },
      "createTime": "string",
      "dataPath": "string",
      "dataPathPattern": "string",
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "format": {
        "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
        "csv": {
          "delimiter": "string",
          "encoding": "string",
          "headerRows": 0,
          "quote": "string"
        },
        "format": "FORMAT_UNSPECIFIED",
        "iceberg": {
          "metadataLocation": "string"
        },
        "json": {
          "encoding": "string"
        },
        "mimeType": "string"
      },
      "id": "string",
      "name": "string",
      "schema": {
        "fields": [
          {
            "description": "string",
            "fields": [
              {}
            ],
            "mode": "MODE_UNSPECIFIED",
            "name": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "partitionFields": [
          {
            "name": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
        "userManaged": true
      },
      "system": "STORAGE_SYSTEM_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List metadata entities response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[GoogleCloudDataplexV1Entity](#schemagoogleclouddataplexv1entity)]|false|none|Entities in the specified parent zone.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no remaining results in the list.|

<h2 id="tocS_GoogleCloudDataplexV1ListEnvironmentsResponse">GoogleCloudDataplexV1ListEnvironmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listenvironmentsresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListEnvironmentsResponse"></a>
<a id="tocSgoogleclouddataplexv1listenvironmentsresponse"></a>
<a id="tocsgoogleclouddataplexv1listenvironmentsresponse"></a>

```json
{
  "environments": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "endpoints": {
        "notebooks": "string",
        "sql": "string"
      },
      "infrastructureSpec": {
        "compute": {
          "diskSizeGb": 0,
          "maxNodeCount": 0,
          "nodeCount": 0
        },
        "osImage": {
          "imageVersion": "string",
          "javaLibraries": [
            "string"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "pythonPackages": [
            "string"
          ]
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "sessionSpec": {
        "enableFastStartup": true,
        "maxIdleDuration": "string"
      },
      "sessionStatus": {
        "active": true
      },
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List environments response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|[[GoogleCloudDataplexV1Environment](#schemagoogleclouddataplexv1environment)]|false|none|Environments under the given parent lake.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudDataplexV1ListJobsResponse">GoogleCloudDataplexV1ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listjobsresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListJobsResponse"></a>
<a id="tocSgoogleclouddataplexv1listjobsresponse"></a>
<a id="tocsgoogleclouddataplexv1listjobsresponse"></a>

```json
{
  "jobs": [
    {
      "endTime": "string",
      "message": "string",
      "name": "string",
      "retryCount": 0,
      "service": "SERVICE_UNSPECIFIED",
      "serviceJob": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "uid": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List jobs response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[GoogleCloudDataplexV1Job](#schemagoogleclouddataplexv1job)]|false|none|Jobs under a given task.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_GoogleCloudDataplexV1ListLakesResponse">GoogleCloudDataplexV1ListLakesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listlakesresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListLakesResponse"></a>
<a id="tocSgoogleclouddataplexv1listlakesresponse"></a>
<a id="tocsgoogleclouddataplexv1listlakesresponse"></a>

```json
{
  "lakes": [
    {
      "assetStatus": {
        "activeAssets": 0,
        "securityPolicyApplyingAssets": 0,
        "updateTime": "string"
      },
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "metastore": {
        "service": "string"
      },
      "metastoreStatus": {
        "endpoint": "string",
        "message": "string",
        "state": "STATE_UNSPECIFIED",
        "updateTime": "string"
      },
      "name": "string",
      "serviceAccount": "string",
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachableLocations": [
    "string"
  ]
}
```

List lakes response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lakes|[[GoogleCloudDataplexV1Lake](#schemagoogleclouddataplexv1lake)]|false|none|Lakes under the given parent location.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachableLocations|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_GoogleCloudDataplexV1ListPartitionsResponse">GoogleCloudDataplexV1ListPartitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listpartitionsresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListPartitionsResponse"></a>
<a id="tocSgoogleclouddataplexv1listpartitionsresponse"></a>
<a id="tocsgoogleclouddataplexv1listpartitionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "partitions": [
    {
      "etag": "string",
      "location": "string",
      "name": "string",
      "values": [
        "string"
      ]
    }
  ]
}
```

List metadata partitions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no remaining results in the list.|
|partitions|[[GoogleCloudDataplexV1Partition](#schemagoogleclouddataplexv1partition)]|false|none|Partitions under the specified parent entity.|

<h2 id="tocS_GoogleCloudDataplexV1ListSessionsResponse">GoogleCloudDataplexV1ListSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listsessionsresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListSessionsResponse"></a>
<a id="tocSgoogleclouddataplexv1listsessionsresponse"></a>
<a id="tocsgoogleclouddataplexv1listsessionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "sessions": [
    {
      "createTime": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "userId": "string"
    }
  ]
}
```

List sessions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|sessions|[[GoogleCloudDataplexV1Session](#schemagoogleclouddataplexv1session)]|false|none|Sessions under a given environment.|

<h2 id="tocS_GoogleCloudDataplexV1ListTasksResponse">GoogleCloudDataplexV1ListTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listtasksresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListTasksResponse"></a>
<a id="tocSgoogleclouddataplexv1listtasksresponse"></a>
<a id="tocsgoogleclouddataplexv1listtasksresponse"></a>

```json
{
  "nextPageToken": "string",
  "tasks": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "executionSpec": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "kmsKey": "string",
        "maxJobExecutionLifetime": "string",
        "project": "string",
        "serviceAccount": "string"
      },
      "executionStatus": {
        "latestJob": {
          "endTime": "string",
          "message": "string",
          "name": "string",
          "retryCount": 0,
          "service": "SERVICE_UNSPECIFIED",
          "serviceJob": "string",
          "startTime": "string",
          "state": "STATE_UNSPECIFIED",
          "uid": "string"
        },
        "updateTime": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notebook": {
        "archiveUris": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "infrastructureSpec": {
          "batch": {
            "executorsCount": 0,
            "maxExecutorsCount": 0
          },
          "containerImage": {
            "image": "string",
            "javaJars": [
              "string"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "pythonPackages": [
              "string"
            ]
          },
          "vpcNetwork": {
            "network": "string",
            "networkTags": [
              "string"
            ],
            "subNetwork": "string"
          }
        },
        "notebook": "string"
      },
      "spark": {
        "archiveUris": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "infrastructureSpec": {
          "batch": {
            "executorsCount": 0,
            "maxExecutorsCount": 0
          },
          "containerImage": {
            "image": "string",
            "javaJars": [
              "string"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "pythonPackages": [
              "string"
            ]
          },
          "vpcNetwork": {
            "network": "string",
            "networkTags": [
              "string"
            ],
            "subNetwork": "string"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "pythonScriptFile": "string",
        "sqlScript": "string",
        "sqlScriptFile": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "triggerSpec": {
        "disabled": true,
        "maxRetries": 0,
        "schedule": "string",
        "startTime": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "unreachableLocations": [
    "string"
  ]
}
```

List tasks response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|tasks|[[GoogleCloudDataplexV1Task](#schemagoogleclouddataplexv1task)]|false|none|Tasks under the given parent lake.|
|unreachableLocations|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_GoogleCloudDataplexV1ListZonesResponse">GoogleCloudDataplexV1ListZonesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1listzonesresponse"></a>
<a id="schema_GoogleCloudDataplexV1ListZonesResponse"></a>
<a id="tocSgoogleclouddataplexv1listzonesresponse"></a>
<a id="tocsgoogleclouddataplexv1listzonesresponse"></a>

```json
{
  "nextPageToken": "string",
  "zones": [
    {
      "assetStatus": {
        "activeAssets": 0,
        "securityPolicyApplyingAssets": 0,
        "updateTime": "string"
      },
      "createTime": "string",
      "description": "string",
      "discoverySpec": {
        "csvOptions": {
          "delimiter": "string",
          "disableTypeInference": true,
          "encoding": "string",
          "headerRows": 0
        },
        "enabled": true,
        "excludePatterns": [
          "string"
        ],
        "includePatterns": [
          "string"
        ],
        "jsonOptions": {
          "disableTypeInference": true,
          "encoding": "string"
        },
        "schedule": "string"
      },
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "resourceSpec": {
        "locationType": "LOCATION_TYPE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

List zones response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|zones|[[GoogleCloudDataplexV1Zone](#schemagoogleclouddataplexv1zone)]|false|none|Zones under the given parent lake.|

<h2 id="tocS_GoogleCloudDataplexV1OperationMetadata">GoogleCloudDataplexV1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1operationmetadata"></a>
<a id="schema_GoogleCloudDataplexV1OperationMetadata"></a>
<a id="tocSgoogleclouddataplexv1operationmetadata"></a>
<a id="tocsgoogleclouddataplexv1operationmetadata"></a>

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

Represents the metadata of a long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudDataplexV1Partition">GoogleCloudDataplexV1Partition</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1partition"></a>
<a id="schema_GoogleCloudDataplexV1Partition"></a>
<a id="tocSgoogleclouddataplexv1partition"></a>
<a id="tocsgoogleclouddataplexv1partition"></a>

```json
{
  "etag": "string",
  "location": "string",
  "name": "string",
  "values": [
    "string"
  ]
}
```

Represents partition metadata contained within entity instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Optional. The etag for this partition.|
|location|string|false|none|Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/|
|name|string|false|read-only|Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode "US:CA/CA#Sunnyvale so that the request URL ends with "/partitions/US%253ACA/CA%2523Sunnyvale". The name field in the response retains the encoded format.|
|values|[string]|false|none|Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity.|

<h2 id="tocS_GoogleCloudDataplexV1ResourceAccessSpec">GoogleCloudDataplexV1ResourceAccessSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1resourceaccessspec"></a>
<a id="schema_GoogleCloudDataplexV1ResourceAccessSpec"></a>
<a id="tocSgoogleclouddataplexv1resourceaccessspec"></a>
<a id="tocsgoogleclouddataplexv1resourceaccessspec"></a>

```json
{
  "owners": [
    "string"
  ],
  "readers": [
    "string"
  ],
  "writers": [
    "string"
  ]
}
```

ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owners|[string]|false|none|Optional. The set of principals to be granted owner role on the resource.|
|readers|[string]|false|none|Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on the resource.|
|writers|[string]|false|none|Optional. The set of principals to be granted writer role on the resource.|

<h2 id="tocS_GoogleCloudDataplexV1RunDataScanRequest">GoogleCloudDataplexV1RunDataScanRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1rundatascanrequest"></a>
<a id="schema_GoogleCloudDataplexV1RunDataScanRequest"></a>
<a id="tocSgoogleclouddataplexv1rundatascanrequest"></a>
<a id="tocsgoogleclouddataplexv1rundatascanrequest"></a>

```json
{}
```

Run DataScan Request

<h2 id="tocS_GoogleCloudDataplexV1RunDataScanResponse">GoogleCloudDataplexV1RunDataScanResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1rundatascanresponse"></a>
<a id="schema_GoogleCloudDataplexV1RunDataScanResponse"></a>
<a id="tocSgoogleclouddataplexv1rundatascanresponse"></a>
<a id="tocsgoogleclouddataplexv1rundatascanresponse"></a>

```json
{
  "job": {
    "dataProfileResult": {
      "profile": {
        "fields": [
          {
            "mode": "string",
            "name": "string",
            "profile": {
              "distinctRatio": 0,
              "doubleProfile": {
                "average": 0,
                "max": 0,
                "min": 0,
                "quartiles": [
                  0
                ],
                "standardDeviation": 0
              },
              "integerProfile": {
                "average": 0,
                "max": "string",
                "min": "string",
                "quartiles": [
                  "string"
                ],
                "standardDeviation": 0
              },
              "nullRatio": 0,
              "stringProfile": {
                "averageLength": 0,
                "maxLength": "string",
                "minLength": "string"
              },
              "topNValues": [
                {
                  "count": "string",
                  "value": "string"
                }
              ]
            },
            "type": "string"
          }
        ]
      },
      "rowCount": "string",
      "scannedData": {
        "incrementalField": {
          "end": "string",
          "field": "string",
          "start": "string"
        }
      }
    },
    "dataProfileSpec": {},
    "dataQualityResult": {
      "dimensions": [
        {
          "passed": true
        }
      ],
      "passed": true,
      "rowCount": "string",
      "rules": [
        {
          "evaluatedCount": "string",
          "failingRowsQuery": "string",
          "nullCount": "string",
          "passRatio": 0,
          "passed": true,
          "passedCount": "string",
          "rule": {
            "column": "string",
            "dimension": "string",
            "ignoreNull": true,
            "nonNullExpectation": {},
            "rangeExpectation": {
              "maxValue": "string",
              "minValue": "string",
              "strictMaxEnabled": true,
              "strictMinEnabled": true
            },
            "regexExpectation": {
              "regex": "string"
            },
            "rowConditionExpectation": {
              "sqlExpression": "string"
            },
            "setExpectation": {
              "values": [
                "string"
              ]
            },
            "statisticRangeExpectation": {
              "maxValue": "string",
              "minValue": "string",
              "statistic": "STATISTIC_UNDEFINED",
              "strictMaxEnabled": true,
              "strictMinEnabled": true
            },
            "tableConditionExpectation": {
              "sqlExpression": "string"
            },
            "threshold": 0,
            "uniquenessExpectation": {}
          }
        }
      ],
      "scannedData": {
        "incrementalField": {
          "end": "string",
          "field": "string",
          "start": "string"
        }
      }
    },
    "dataQualitySpec": {
      "rules": [
        {
          "column": "string",
          "dimension": "string",
          "ignoreNull": true,
          "nonNullExpectation": {},
          "rangeExpectation": {
            "maxValue": "string",
            "minValue": "string",
            "strictMaxEnabled": true,
            "strictMinEnabled": true
          },
          "regexExpectation": {
            "regex": "string"
          },
          "rowConditionExpectation": {
            "sqlExpression": "string"
          },
          "setExpectation": {
            "values": [
              "string"
            ]
          },
          "statisticRangeExpectation": {
            "maxValue": "string",
            "minValue": "string",
            "statistic": "STATISTIC_UNDEFINED",
            "strictMaxEnabled": true,
            "strictMinEnabled": true
          },
          "tableConditionExpectation": {
            "sqlExpression": "string"
          },
          "threshold": 0,
          "uniquenessExpectation": {}
        }
      ]
    },
    "endTime": "string",
    "message": "string",
    "name": "string",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "type": "DATA_SCAN_TYPE_UNSPECIFIED",
    "uid": "string"
  }
}
```

Run DataScan Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[GoogleCloudDataplexV1DataScanJob](#schemagoogleclouddataplexv1datascanjob)|false|none|DataScanJob created by RunDataScan request.|

<h2 id="tocS_GoogleCloudDataplexV1RunTaskRequest">GoogleCloudDataplexV1RunTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1runtaskrequest"></a>
<a id="schema_GoogleCloudDataplexV1RunTaskRequest"></a>
<a id="tocSgoogleclouddataplexv1runtaskrequest"></a>
<a id="tocsgoogleclouddataplexv1runtaskrequest"></a>

```json
{}
```

<h2 id="tocS_GoogleCloudDataplexV1RunTaskResponse">GoogleCloudDataplexV1RunTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1runtaskresponse"></a>
<a id="schema_GoogleCloudDataplexV1RunTaskResponse"></a>
<a id="tocSgoogleclouddataplexv1runtaskresponse"></a>
<a id="tocsgoogleclouddataplexv1runtaskresponse"></a>

```json
{
  "job": {
    "endTime": "string",
    "message": "string",
    "name": "string",
    "retryCount": 0,
    "service": "SERVICE_UNSPECIFIED",
    "serviceJob": "string",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "uid": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[GoogleCloudDataplexV1Job](#schemagoogleclouddataplexv1job)|false|none|Jobs created by RunTask API.|

<h2 id="tocS_GoogleCloudDataplexV1ScannedData">GoogleCloudDataplexV1ScannedData</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1scanneddata"></a>
<a id="schema_GoogleCloudDataplexV1ScannedData"></a>
<a id="tocSgoogleclouddataplexv1scanneddata"></a>
<a id="tocsgoogleclouddataplexv1scanneddata"></a>

```json
{
  "incrementalField": {
    "end": "string",
    "field": "string",
    "start": "string"
  }
}
```

The data scanned during processing (e.g. in incremental DataScan)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incrementalField|[GoogleCloudDataplexV1ScannedDataIncrementalField](#schemagoogleclouddataplexv1scanneddataincrementalfield)|false|none|The range denoted by values of an incremental field|

<h2 id="tocS_GoogleCloudDataplexV1ScannedDataIncrementalField">GoogleCloudDataplexV1ScannedDataIncrementalField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1scanneddataincrementalfield"></a>
<a id="schema_GoogleCloudDataplexV1ScannedDataIncrementalField"></a>
<a id="tocSgoogleclouddataplexv1scanneddataincrementalfield"></a>
<a id="tocsgoogleclouddataplexv1scanneddataincrementalfield"></a>

```json
{
  "end": "string",
  "field": "string",
  "start": "string"
}
```

A data range denoted by a pair of start/end values of a field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string|false|none|Value that marks the end of the range.|
|field|string|false|none|The field that contains values which monotonically increases over time (e.g. a timestamp column).|
|start|string|false|none|Value that marks the start of the range.|

<h2 id="tocS_GoogleCloudDataplexV1Schema">GoogleCloudDataplexV1Schema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1schema"></a>
<a id="schema_GoogleCloudDataplexV1Schema"></a>
<a id="tocSgoogleclouddataplexv1schema"></a>
<a id="tocsgoogleclouddataplexv1schema"></a>

```json
{
  "fields": [
    {
      "description": "string",
      "fields": [
        {}
      ],
      "mode": "MODE_UNSPECIFIED",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "partitionFields": [
    {
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "partitionStyle": "PARTITION_STYLE_UNSPECIFIED",
  "userManaged": true
}
```

Schema information describing the structure and layout of the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[GoogleCloudDataplexV1SchemaSchemaField](#schemagoogleclouddataplexv1schemaschemafield)]|false|none|Optional. The sequence of fields describing data in table entities. Note: BigQuery SchemaFields are immutable.|
|partitionFields|[[GoogleCloudDataplexV1SchemaPartitionField](#schemagoogleclouddataplexv1schemapartitionfield)]|false|none|Optional. The sequence of fields describing the partition structure in entities. If this field is empty, there are no partitions within the data.|
|partitionStyle|string|false|none|Optional. The structure of paths containing partition data within the entity.|
|userManaged|boolean|false|none|Required. Set to true if user-managed or false if managed by Dataplex. The default is false (managed by Dataplex). Set to falseto enable Dataplex discovery to update the schema. including new data discovery, schema inference, and schema evolution. Users retain the ability to input and edit the schema. Dataplex treats schema input by the user as though produced by a previous Dataplex discovery operation, and it will evolve the schema and take action based on that treatment. Set to true to fully manage the entity schema. This setting guarantees that Dataplex will not change schema fields.|

#### Enumerated Values

|Property|Value|
|---|---|
|partitionStyle|PARTITION_STYLE_UNSPECIFIED|
|partitionStyle|HIVE_COMPATIBLE|

<h2 id="tocS_GoogleCloudDataplexV1SchemaPartitionField">GoogleCloudDataplexV1SchemaPartitionField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1schemapartitionfield"></a>
<a id="schema_GoogleCloudDataplexV1SchemaPartitionField"></a>
<a id="tocSgoogleclouddataplexv1schemapartitionfield"></a>
<a id="tocsgoogleclouddataplexv1schemapartitionfield"></a>

```json
{
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. Partition field name must consist of letters, numbers, and underscores only, with a maximum of length of 256 characters, and must begin with a letter or underscore..|
|type|string|false|none|Required. Immutable. The type of field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|BOOLEAN|
|type|BYTE|
|type|INT16|
|type|INT32|
|type|INT64|
|type|FLOAT|
|type|DOUBLE|
|type|DECIMAL|
|type|STRING|
|type|BINARY|
|type|TIMESTAMP|
|type|DATE|
|type|TIME|
|type|RECORD|
|type|NULL|

<h2 id="tocS_GoogleCloudDataplexV1SchemaSchemaField">GoogleCloudDataplexV1SchemaSchemaField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1schemaschemafield"></a>
<a id="schema_GoogleCloudDataplexV1SchemaSchemaField"></a>
<a id="tocSgoogleclouddataplexv1schemaschemafield"></a>
<a id="tocsgoogleclouddataplexv1schemaschemafield"></a>

```json
{
  "description": "string",
  "fields": [
    {
      "description": "string",
      "fields": [
        {}
      ],
      "mode": "MODE_UNSPECIFIED",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "mode": "MODE_UNSPECIFIED",
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Represents a column field within a table schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. User friendly field description. Must be less than or equal to 1024 characters.|
|fields|[[GoogleCloudDataplexV1SchemaSchemaField](#schemagoogleclouddataplexv1schemaschemafield)]|false|none|Optional. Any nested field for complex types.|
|mode|string|false|none|Required. Additional field semantics.|
|name|string|false|none|Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore.|
|type|string|false|none|Required. The type of field.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|REQUIRED|
|mode|NULLABLE|
|mode|REPEATED|
|type|TYPE_UNSPECIFIED|
|type|BOOLEAN|
|type|BYTE|
|type|INT16|
|type|INT32|
|type|INT64|
|type|FLOAT|
|type|DOUBLE|
|type|DECIMAL|
|type|STRING|
|type|BINARY|
|type|TIMESTAMP|
|type|DATE|
|type|TIME|
|type|RECORD|
|type|NULL|

<h2 id="tocS_GoogleCloudDataplexV1Session">GoogleCloudDataplexV1Session</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1session"></a>
<a id="schema_GoogleCloudDataplexV1Session"></a>
<a id="tocSgoogleclouddataplexv1session"></a>
<a id="tocsgoogleclouddataplexv1session"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "userId": "string"
}
```

Represents an active analyze session running for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Session start time.|
|name|string|false|read-only|Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}/sessions/{session_id}|
|state|string|false|read-only|Output only. State of Session|
|userId|string|false|read-only|Output only. Email of user running the session.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|CREATING|
|state|DELETING|
|state|ACTION_REQUIRED|

<h2 id="tocS_GoogleCloudDataplexV1SessionEvent">GoogleCloudDataplexV1SessionEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1sessionevent"></a>
<a id="schema_GoogleCloudDataplexV1SessionEvent"></a>
<a id="tocSgoogleclouddataplexv1sessionevent"></a>
<a id="tocsgoogleclouddataplexv1sessionevent"></a>

```json
{
  "eventSucceeded": true,
  "fastStartupEnabled": true,
  "message": "string",
  "query": {
    "dataProcessedBytes": "string",
    "duration": "string",
    "engine": "ENGINE_UNSPECIFIED",
    "queryId": "string",
    "queryText": "string",
    "resultSizeBytes": "string"
  },
  "sessionId": "string",
  "type": "EVENT_TYPE_UNSPECIFIED",
  "unassignedDuration": "string",
  "userId": "string"
}
```

These messages contain information about sessions within an environment. The monitored resource is 'Environment'.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventSucceeded|boolean|false|none|The status of the event.|
|fastStartupEnabled|boolean|false|none|If the session is associated with an environment with fast startup enabled, and was created before being assigned to a user.|
|message|string|false|none|The log message.|
|query|[GoogleCloudDataplexV1SessionEventQueryDetail](#schemagoogleclouddataplexv1sessioneventquerydetail)|false|none|The execution details of the query.|
|sessionId|string|false|none|Unique identifier for the session.|
|type|string|false|none|The type of the event.|
|unassignedDuration|string(google-duration)|false|none|The idle duration of a warm pooled session before it is assigned to user.|
|userId|string|false|none|The information about the user that created the session. It will be the email address of the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EVENT_TYPE_UNSPECIFIED|
|type|START|
|type|STOP|
|type|QUERY|
|type|CREATE|

<h2 id="tocS_GoogleCloudDataplexV1SessionEventQueryDetail">GoogleCloudDataplexV1SessionEventQueryDetail</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1sessioneventquerydetail"></a>
<a id="schema_GoogleCloudDataplexV1SessionEventQueryDetail"></a>
<a id="tocSgoogleclouddataplexv1sessioneventquerydetail"></a>
<a id="tocsgoogleclouddataplexv1sessioneventquerydetail"></a>

```json
{
  "dataProcessedBytes": "string",
  "duration": "string",
  "engine": "ENGINE_UNSPECIFIED",
  "queryId": "string",
  "queryText": "string",
  "resultSizeBytes": "string"
}
```

Execution details of the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataProcessedBytes|string(int64)|false|none|The data processed by the query.|
|duration|string(google-duration)|false|none|Time taken for execution of the query.|
|engine|string|false|none|Query Execution engine.|
|queryId|string|false|none|The unique Query id identifying the query.|
|queryText|string|false|none|The query text executed.|
|resultSizeBytes|string(int64)|false|none|The size of results the query produced.|

#### Enumerated Values

|Property|Value|
|---|---|
|engine|ENGINE_UNSPECIFIED|
|engine|SPARK_SQL|
|engine|BIGQUERY|

<h2 id="tocS_GoogleCloudDataplexV1StorageAccess">GoogleCloudDataplexV1StorageAccess</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1storageaccess"></a>
<a id="schema_GoogleCloudDataplexV1StorageAccess"></a>
<a id="tocSgoogleclouddataplexv1storageaccess"></a>
<a id="tocsgoogleclouddataplexv1storageaccess"></a>

```json
{
  "read": "ACCESS_MODE_UNSPECIFIED"
}
```

Describes the access mechanism of the data within its storage location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|read|string|false|read-only|Output only. Describes the read access mechanism of the data. Not user settable.|

#### Enumerated Values

|Property|Value|
|---|---|
|read|ACCESS_MODE_UNSPECIFIED|
|read|DIRECT|
|read|MANAGED|

<h2 id="tocS_GoogleCloudDataplexV1StorageFormat">GoogleCloudDataplexV1StorageFormat</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1storageformat"></a>
<a id="schema_GoogleCloudDataplexV1StorageFormat"></a>
<a id="tocSgoogleclouddataplexv1storageformat"></a>
<a id="tocsgoogleclouddataplexv1storageformat"></a>

```json
{
  "compressionFormat": "COMPRESSION_FORMAT_UNSPECIFIED",
  "csv": {
    "delimiter": "string",
    "encoding": "string",
    "headerRows": 0,
    "quote": "string"
  },
  "format": "FORMAT_UNSPECIFIED",
  "iceberg": {
    "metadataLocation": "string"
  },
  "json": {
    "encoding": "string"
  },
  "mimeType": "string"
}
```

Describes the format of the data within its storage location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compressionFormat|string|false|none|Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed.|
|csv|[GoogleCloudDataplexV1StorageFormatCsvOptions](#schemagoogleclouddataplexv1storageformatcsvoptions)|false|none|Optional. Additional information about CSV formatted data.|
|format|string|false|read-only|Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type.|
|iceberg|[GoogleCloudDataplexV1StorageFormatIcebergOptions](#schemagoogleclouddataplexv1storageformaticebergoptions)|false|none|Optional. Additional information about iceberg tables.|
|json|[GoogleCloudDataplexV1StorageFormatJsonOptions](#schemagoogleclouddataplexv1storageformatjsonoptions)|false|none|Optional. Additional information about CSV formatted data.|
|mimeType|string|false|none|Required. The mime type descriptor for the data. Must match the pattern {type}/{subtype}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/x-parquet+iceberg application/x-avro+iceberg application/x-orc+iceberg application/json application/{subtypes} text/csv text/ image/{image subtype} video/{video subtype} audio/{audio subtype}|

#### Enumerated Values

|Property|Value|
|---|---|
|compressionFormat|COMPRESSION_FORMAT_UNSPECIFIED|
|compressionFormat|GZIP|
|compressionFormat|BZIP2|
|format|FORMAT_UNSPECIFIED|
|format|PARQUET|
|format|AVRO|
|format|ORC|
|format|CSV|
|format|JSON|
|format|IMAGE|
|format|AUDIO|
|format|VIDEO|
|format|TEXT|
|format|TFRECORD|
|format|OTHER|
|format|UNKNOWN|

<h2 id="tocS_GoogleCloudDataplexV1StorageFormatCsvOptions">GoogleCloudDataplexV1StorageFormatCsvOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1storageformatcsvoptions"></a>
<a id="schema_GoogleCloudDataplexV1StorageFormatCsvOptions"></a>
<a id="tocSgoogleclouddataplexv1storageformatcsvoptions"></a>
<a id="tocsgoogleclouddataplexv1storageformatcsvoptions"></a>

```json
{
  "delimiter": "string",
  "encoding": "string",
  "headerRows": 0,
  "quote": "string"
}
```

Describes CSV and similar semi-structured data formats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delimiter|string|false|none|Optional. The delimiter used to separate values. Defaults to ','.|
|encoding|string|false|none|Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8", and "ISO-8859-1". Defaults to UTF-8 if unspecified.|
|headerRows|integer(int32)|false|none|Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. Defaults to 0.|
|quote|string|false|none|Optional. The character used to quote column values. Accepts '"' (double quotation mark) or ''' (single quotation mark). Defaults to '"' (double quotation mark) if unspecified.|

<h2 id="tocS_GoogleCloudDataplexV1StorageFormatIcebergOptions">GoogleCloudDataplexV1StorageFormatIcebergOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1storageformaticebergoptions"></a>
<a id="schema_GoogleCloudDataplexV1StorageFormatIcebergOptions"></a>
<a id="tocSgoogleclouddataplexv1storageformaticebergoptions"></a>
<a id="tocsgoogleclouddataplexv1storageformaticebergoptions"></a>

```json
{
  "metadataLocation": "string"
}
```

Describes Iceberg data format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadataLocation|string|false|none|Optional. The location of where the iceberg metadata is present, must be within the table path|

<h2 id="tocS_GoogleCloudDataplexV1StorageFormatJsonOptions">GoogleCloudDataplexV1StorageFormatJsonOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1storageformatjsonoptions"></a>
<a id="schema_GoogleCloudDataplexV1StorageFormatJsonOptions"></a>
<a id="tocSgoogleclouddataplexv1storageformatjsonoptions"></a>
<a id="tocsgoogleclouddataplexv1storageformatjsonoptions"></a>

```json
{
  "encoding": "string"
}
```

Describes JSON data format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8" and "ISO-8859-1". Defaults to UTF-8 if not specified.|

<h2 id="tocS_GoogleCloudDataplexV1Task">GoogleCloudDataplexV1Task</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1task"></a>
<a id="schema_GoogleCloudDataplexV1Task"></a>
<a id="tocSgoogleclouddataplexv1task"></a>
<a id="tocsgoogleclouddataplexv1task"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "executionSpec": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "kmsKey": "string",
    "maxJobExecutionLifetime": "string",
    "project": "string",
    "serviceAccount": "string"
  },
  "executionStatus": {
    "latestJob": {
      "endTime": "string",
      "message": "string",
      "name": "string",
      "retryCount": 0,
      "service": "SERVICE_UNSPECIFIED",
      "serviceJob": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "uid": "string"
    },
    "updateTime": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notebook": {
    "archiveUris": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "infrastructureSpec": {
      "batch": {
        "executorsCount": 0,
        "maxExecutorsCount": 0
      },
      "containerImage": {
        "image": "string",
        "javaJars": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonPackages": [
          "string"
        ]
      },
      "vpcNetwork": {
        "network": "string",
        "networkTags": [
          "string"
        ],
        "subNetwork": "string"
      }
    },
    "notebook": "string"
  },
  "spark": {
    "archiveUris": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "infrastructureSpec": {
      "batch": {
        "executorsCount": 0,
        "maxExecutorsCount": 0
      },
      "containerImage": {
        "image": "string",
        "javaJars": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonPackages": [
          "string"
        ]
      },
      "vpcNetwork": {
        "network": "string",
        "networkTags": [
          "string"
        ],
        "subNetwork": "string"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "pythonScriptFile": "string",
    "sqlScript": "string",
    "sqlScriptFile": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "triggerSpec": {
    "disabled": true,
    "maxRetries": 0,
    "schedule": "string",
    "startTime": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "uid": "string",
  "updateTime": "string"
}
```

A task represents a user-visible job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the task was created.|
|description|string|false|none|Optional. Description of the task.|
|displayName|string|false|none|Optional. User friendly display name.|
|executionSpec|[GoogleCloudDataplexV1TaskExecutionSpec](#schemagoogleclouddataplexv1taskexecutionspec)|false|none|Required. Spec related to how a task is executed.|
|executionStatus|[GoogleCloudDataplexV1TaskExecutionStatus](#schemagoogleclouddataplexv1taskexecutionstatus)|false|none|Output only. Status of the latest task executions.|
|labels|object|false|none|Optional. User-defined labels for the task.|
|name|string|false|read-only|Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}.|
|notebook|[GoogleCloudDataplexV1TaskNotebookTaskConfig](#schemagoogleclouddataplexv1tasknotebooktaskconfig)|false|none|Config related to running scheduled Notebooks.|
|spark|[GoogleCloudDataplexV1TaskSparkTaskConfig](#schemagoogleclouddataplexv1tasksparktaskconfig)|false|none|Config related to running custom Spark tasks.|
|state|string|false|read-only|Output only. Current state of the task.|
|triggerSpec|[GoogleCloudDataplexV1TaskTriggerSpec](#schemagoogleclouddataplexv1tasktriggerspec)|false|none|Required. Spec related to how often and when a task should be triggered.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the task was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|CREATING|
|state|DELETING|
|state|ACTION_REQUIRED|

<h2 id="tocS_GoogleCloudDataplexV1TaskExecutionSpec">GoogleCloudDataplexV1TaskExecutionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1taskexecutionspec"></a>
<a id="schema_GoogleCloudDataplexV1TaskExecutionSpec"></a>
<a id="tocSgoogleclouddataplexv1taskexecutionspec"></a>
<a id="tocsgoogleclouddataplexv1taskexecutionspec"></a>

```json
{
  "args": {
    "property1": "string",
    "property2": "string"
  },
  "kmsKey": "string",
  "maxJobExecutionLifetime": "string",
  "project": "string",
  "serviceAccount": "string"
}
```

Execution related settings, like retry and service_account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|object|false|none|Optional. The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument.|
|kmsKey|string|false|none|Optional. The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.|
|maxJobExecutionLifetime|string(google-duration)|false|none|Optional. The maximum duration after which the job execution is expired.|
|project|string|false|none|Optional. The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.|
|serviceAccount|string|false|none|Required. Service account to use to execute a task. If not provided, the default Compute service account for the project is used.|

<h2 id="tocS_GoogleCloudDataplexV1TaskExecutionStatus">GoogleCloudDataplexV1TaskExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1taskexecutionstatus"></a>
<a id="schema_GoogleCloudDataplexV1TaskExecutionStatus"></a>
<a id="tocSgoogleclouddataplexv1taskexecutionstatus"></a>
<a id="tocsgoogleclouddataplexv1taskexecutionstatus"></a>

```json
{
  "latestJob": {
    "endTime": "string",
    "message": "string",
    "name": "string",
    "retryCount": 0,
    "service": "SERVICE_UNSPECIFIED",
    "serviceJob": "string",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "uid": "string"
  },
  "updateTime": "string"
}
```

Status of the task execution (e.g. Jobs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestJob|[GoogleCloudDataplexV1Job](#schemagoogleclouddataplexv1job)|false|none|Output only. latest job execution|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update time of the status.|

<h2 id="tocS_GoogleCloudDataplexV1TaskInfrastructureSpec">GoogleCloudDataplexV1TaskInfrastructureSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1taskinfrastructurespec"></a>
<a id="schema_GoogleCloudDataplexV1TaskInfrastructureSpec"></a>
<a id="tocSgoogleclouddataplexv1taskinfrastructurespec"></a>
<a id="tocsgoogleclouddataplexv1taskinfrastructurespec"></a>

```json
{
  "batch": {
    "executorsCount": 0,
    "maxExecutorsCount": 0
  },
  "containerImage": {
    "image": "string",
    "javaJars": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonPackages": [
      "string"
    ]
  },
  "vpcNetwork": {
    "network": "string",
    "networkTags": [
      "string"
    ],
    "subNetwork": "string"
  }
}
```

Configuration for the underlying infrastructure used to run workloads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch|[GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources](#schemagoogleclouddataplexv1taskinfrastructurespecbatchcomputeresources)|false|none|Compute resources needed for a Task when using Dataproc Serverless.|
|containerImage|[GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime](#schemagoogleclouddataplexv1taskinfrastructurespeccontainerimageruntime)|false|none|Container Image Runtime Configuration.|
|vpcNetwork|[GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork](#schemagoogleclouddataplexv1taskinfrastructurespecvpcnetwork)|false|none|Vpc network.|

<h2 id="tocS_GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources">GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1taskinfrastructurespecbatchcomputeresources"></a>
<a id="schema_GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources"></a>
<a id="tocSgoogleclouddataplexv1taskinfrastructurespecbatchcomputeresources"></a>
<a id="tocsgoogleclouddataplexv1taskinfrastructurespecbatchcomputeresources"></a>

```json
{
  "executorsCount": 0,
  "maxExecutorsCount": 0
}
```

Batch compute resources associated with the task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executorsCount|integer(int32)|false|none|Optional. Total number of job executors. Executor Count should be between 2 and 100. Default=2|
|maxExecutorsCount|integer(int32)|false|none|Optional. Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. Default=1000|

<h2 id="tocS_GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime">GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1taskinfrastructurespeccontainerimageruntime"></a>
<a id="schema_GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime"></a>
<a id="tocSgoogleclouddataplexv1taskinfrastructurespeccontainerimageruntime"></a>
<a id="tocsgoogleclouddataplexv1taskinfrastructurespeccontainerimageruntime"></a>

```json
{
  "image": "string",
  "javaJars": [
    "string"
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "pythonPackages": [
    "string"
  ]
}
```

Container Image Runtime Configuration used with Batch execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|Optional. Container image to use.|
|javaJars|[string]|false|none|Optional. A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar|
|properties|object|false|none|Optional. Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).|
|pythonPackages|[string]|false|none|Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz|

<h2 id="tocS_GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork">GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1taskinfrastructurespecvpcnetwork"></a>
<a id="schema_GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork"></a>
<a id="tocSgoogleclouddataplexv1taskinfrastructurespecvpcnetwork"></a>
<a id="tocsgoogleclouddataplexv1taskinfrastructurespecvpcnetwork"></a>

```json
{
  "network": "string",
  "networkTags": [
    "string"
  ],
  "subNetwork": "string"
}
```

Cloud VPC Network used to run the infrastructure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|string|false|none|Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.|
|networkTags|[string]|false|none|Optional. List of network tags to apply to the job.|
|subNetwork|string|false|none|Optional. The Cloud VPC sub-network in which the job is run.|

<h2 id="tocS_GoogleCloudDataplexV1TaskNotebookTaskConfig">GoogleCloudDataplexV1TaskNotebookTaskConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1tasknotebooktaskconfig"></a>
<a id="schema_GoogleCloudDataplexV1TaskNotebookTaskConfig"></a>
<a id="tocSgoogleclouddataplexv1tasknotebooktaskconfig"></a>
<a id="tocsgoogleclouddataplexv1tasknotebooktaskconfig"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "infrastructureSpec": {
    "batch": {
      "executorsCount": 0,
      "maxExecutorsCount": 0
    },
    "containerImage": {
      "image": "string",
      "javaJars": [
        "string"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "pythonPackages": [
        "string"
      ]
    },
    "vpcNetwork": {
      "network": "string",
      "networkTags": [
        "string"
      ],
      "subNetwork": "string"
    }
  },
  "notebook": "string"
}
```

Config for running scheduled notebooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.|
|fileUris|[string]|false|none|Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.|
|infrastructureSpec|[GoogleCloudDataplexV1TaskInfrastructureSpec](#schemagoogleclouddataplexv1taskinfrastructurespec)|false|none|Optional. Infrastructure specification for the execution.|
|notebook|string|false|none|Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).|

<h2 id="tocS_GoogleCloudDataplexV1TaskSparkTaskConfig">GoogleCloudDataplexV1TaskSparkTaskConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1tasksparktaskconfig"></a>
<a id="schema_GoogleCloudDataplexV1TaskSparkTaskConfig"></a>
<a id="tocSgoogleclouddataplexv1tasksparktaskconfig"></a>
<a id="tocsgoogleclouddataplexv1tasksparktaskconfig"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "infrastructureSpec": {
    "batch": {
      "executorsCount": 0,
      "maxExecutorsCount": 0
    },
    "containerImage": {
      "image": "string",
      "javaJars": [
        "string"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "pythonPackages": [
        "string"
      ]
    },
    "vpcNetwork": {
      "network": "string",
      "networkTags": [
        "string"
      ],
      "subNetwork": "string"
    }
  },
  "mainClass": "string",
  "mainJarFileUri": "string",
  "pythonScriptFile": "string",
  "sqlScript": "string",
  "sqlScriptFile": "string"
}
```

User-specified config for running a Spark task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.|
|fileUris|[string]|false|none|Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.|
|infrastructureSpec|[GoogleCloudDataplexV1TaskInfrastructureSpec](#schemagoogleclouddataplexv1taskinfrastructurespec)|false|none|Optional. Infrastructure specification for the execution.|
|mainClass|string|false|none|The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).|
|mainJarFileUri|string|false|none|The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).|
|pythonScriptFile|string|false|none|The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).|
|sqlScript|string|false|none|The query text. The execution args are used to declare a set of script variables (set key="value";).|
|sqlScriptFile|string|false|none|A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key="value";).|

<h2 id="tocS_GoogleCloudDataplexV1TaskTriggerSpec">GoogleCloudDataplexV1TaskTriggerSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1tasktriggerspec"></a>
<a id="schema_GoogleCloudDataplexV1TaskTriggerSpec"></a>
<a id="tocSgoogleclouddataplexv1tasktriggerspec"></a>
<a id="tocsgoogleclouddataplexv1tasktriggerspec"></a>

```json
{
  "disabled": true,
  "maxRetries": 0,
  "schedule": "string",
  "startTime": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Task scheduling and trigger settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Optional. Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.|
|maxRetries|integer(int32)|false|none|Optional. Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.|
|schedule|string|false|none|Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.|
|startTime|string(google-datetime)|false|none|Optional. The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.|
|type|string|false|none|Required. Immutable. Trigger type of the user-specified Task.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|ON_DEMAND|
|type|RECURRING|

<h2 id="tocS_GoogleCloudDataplexV1Trigger">GoogleCloudDataplexV1Trigger</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1trigger"></a>
<a id="schema_GoogleCloudDataplexV1Trigger"></a>
<a id="tocSgoogleclouddataplexv1trigger"></a>
<a id="tocsgoogleclouddataplexv1trigger"></a>

```json
{
  "onDemand": {},
  "schedule": {
    "cron": "string"
  }
}
```

DataScan scheduling and trigger settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onDemand|[GoogleCloudDataplexV1TriggerOnDemand](#schemagoogleclouddataplexv1triggerondemand)|false|none|The scan runs once via RunDataScan API.|
|schedule|[GoogleCloudDataplexV1TriggerSchedule](#schemagoogleclouddataplexv1triggerschedule)|false|none|The scan is scheduled to run periodically.|

<h2 id="tocS_GoogleCloudDataplexV1TriggerOnDemand">GoogleCloudDataplexV1TriggerOnDemand</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1triggerondemand"></a>
<a id="schema_GoogleCloudDataplexV1TriggerOnDemand"></a>
<a id="tocSgoogleclouddataplexv1triggerondemand"></a>
<a id="tocsgoogleclouddataplexv1triggerondemand"></a>

```json
{}
```

The scan runs once via RunDataScan API.

<h2 id="tocS_GoogleCloudDataplexV1TriggerSchedule">GoogleCloudDataplexV1TriggerSchedule</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1triggerschedule"></a>
<a id="schema_GoogleCloudDataplexV1TriggerSchedule"></a>
<a id="tocSgoogleclouddataplexv1triggerschedule"></a>
<a id="tocsgoogleclouddataplexv1triggerschedule"></a>

```json
{
  "cron": "string"
}
```

The scan is scheduled to run periodically.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cron|string|false|none|Required. Cron (https://en.wikipedia.org/wiki/Cron) schedule for running scans periodically.To explicitly set a timezone in the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database (wikipedia (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)). For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.This field is required for Schedule scans.|

<h2 id="tocS_GoogleCloudDataplexV1Zone">GoogleCloudDataplexV1Zone</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1zone"></a>
<a id="schema_GoogleCloudDataplexV1Zone"></a>
<a id="tocSgoogleclouddataplexv1zone"></a>
<a id="tocsgoogleclouddataplexv1zone"></a>

```json
{
  "assetStatus": {
    "activeAssets": 0,
    "securityPolicyApplyingAssets": 0,
    "updateTime": "string"
  },
  "createTime": "string",
  "description": "string",
  "discoverySpec": {
    "csvOptions": {
      "delimiter": "string",
      "disableTypeInference": true,
      "encoding": "string",
      "headerRows": 0
    },
    "enabled": true,
    "excludePatterns": [
      "string"
    ],
    "includePatterns": [
      "string"
    ],
    "jsonOptions": {
      "disableTypeInference": true,
      "encoding": "string"
    },
    "schedule": "string"
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "resourceSpec": {
    "locationType": "LOCATION_TYPE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetStatus|[GoogleCloudDataplexV1AssetStatus](#schemagoogleclouddataplexv1assetstatus)|false|none|Output only. Aggregated status of the underlying assets of the zone.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the zone was created.|
|description|string|false|none|Optional. Description of the zone.|
|discoverySpec|[GoogleCloudDataplexV1ZoneDiscoverySpec](#schemagoogleclouddataplexv1zonediscoveryspec)|false|none|Optional. Specification of the discovery feature applied to data in this zone.|
|displayName|string|false|none|Optional. User friendly display name.|
|labels|object|false|none|Optional. User defined labels for the zone.|
|name|string|false|read-only|Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.|
|resourceSpec|[GoogleCloudDataplexV1ZoneResourceSpec](#schemagoogleclouddataplexv1zoneresourcespec)|false|none|Required. Specification of the resources that are referenced by the assets within this zone.|
|state|string|false|read-only|Output only. Current state of the zone.|
|type|string|false|none|Required. Immutable. The type of the zone.|
|uid|string|false|read-only|Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the zone was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|CREATING|
|state|DELETING|
|state|ACTION_REQUIRED|
|type|TYPE_UNSPECIFIED|
|type|RAW|
|type|CURATED|

<h2 id="tocS_GoogleCloudDataplexV1ZoneDiscoverySpec">GoogleCloudDataplexV1ZoneDiscoverySpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1zonediscoveryspec"></a>
<a id="schema_GoogleCloudDataplexV1ZoneDiscoverySpec"></a>
<a id="tocSgoogleclouddataplexv1zonediscoveryspec"></a>
<a id="tocsgoogleclouddataplexv1zonediscoveryspec"></a>

```json
{
  "csvOptions": {
    "delimiter": "string",
    "disableTypeInference": true,
    "encoding": "string",
    "headerRows": 0
  },
  "enabled": true,
  "excludePatterns": [
    "string"
  ],
  "includePatterns": [
    "string"
  ],
  "jsonOptions": {
    "disableTypeInference": true,
    "encoding": "string"
  },
  "schedule": "string"
}
```

Settings to manage the metadata discovery and publishing in a zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csvOptions|[GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions](#schemagoogleclouddataplexv1zonediscoveryspeccsvoptions)|false|none|Optional. Configuration for CSV data.|
|enabled|boolean|false|none|Required. Whether discovery is enabled.|
|excludePatterns|[string]|false|none|Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.|
|includePatterns|[string]|false|none|Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.|
|jsonOptions|[GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions](#schemagoogleclouddataplexv1zonediscoveryspecjsonoptions)|false|none|Optional. Configuration for Json data.|
|schedule|string|false|none|Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.|

<h2 id="tocS_GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions">GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1zonediscoveryspeccsvoptions"></a>
<a id="schema_GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions"></a>
<a id="tocSgoogleclouddataplexv1zonediscoveryspeccsvoptions"></a>
<a id="tocsgoogleclouddataplexv1zonediscoveryspeccsvoptions"></a>

```json
{
  "delimiter": "string",
  "disableTypeInference": true,
  "encoding": "string",
  "headerRows": 0
}
```

Describe CSV and similar semi-structured data formats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delimiter|string|false|none|Optional. The delimiter being used to separate values. This defaults to ','.|
|disableTypeInference|boolean|false|none|Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.|
|encoding|string|false|none|Optional. The character encoding of the data. The default is UTF-8.|
|headerRows|integer(int32)|false|none|Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.|

<h2 id="tocS_GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions">GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1zonediscoveryspecjsonoptions"></a>
<a id="schema_GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions"></a>
<a id="tocSgoogleclouddataplexv1zonediscoveryspecjsonoptions"></a>
<a id="tocsgoogleclouddataplexv1zonediscoveryspecjsonoptions"></a>

```json
{
  "disableTypeInference": true,
  "encoding": "string"
}
```

Describe JSON data format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableTypeInference|boolean|false|none|Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).|
|encoding|string|false|none|Optional. The character encoding of the data. The default is UTF-8.|

<h2 id="tocS_GoogleCloudDataplexV1ZoneResourceSpec">GoogleCloudDataplexV1ZoneResourceSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddataplexv1zoneresourcespec"></a>
<a id="schema_GoogleCloudDataplexV1ZoneResourceSpec"></a>
<a id="tocSgoogleclouddataplexv1zoneresourcespec"></a>
<a id="tocsgoogleclouddataplexv1zoneresourcespec"></a>

```json
{
  "locationType": "LOCATION_TYPE_UNSPECIFIED"
}
```

Settings for resources attached as assets within a zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationType|string|false|none|Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone.|

#### Enumerated Values

|Property|Value|
|---|---|
|locationType|LOCATION_TYPE_UNSPECIFIED|
|locationType|SINGLE_REGION|
|locationType|MULTI_REGION|

<h2 id="tocS_GoogleCloudLocationListLocationsResponse">GoogleCloudLocationListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudlocationlistlocationsresponse"></a>
<a id="schema_GoogleCloudLocationListLocationsResponse"></a>
<a id="tocSgooglecloudlocationlistlocationsresponse"></a>
<a id="tocsgooglecloudlocationlistlocationsresponse"></a>

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
|locations|[[GoogleCloudLocationLocation](#schemagooglecloudlocationlocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_GoogleCloudLocationLocation">GoogleCloudLocationLocation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudlocationlocation"></a>
<a id="schema_GoogleCloudLocationLocation"></a>
<a id="tocSgooglecloudlocationlocation"></a>
<a id="tocsgooglecloudlocationlocation"></a>

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
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} |
|locationId|string|false|none|The canonical id for this location. For example: "us-east1".|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"|

<h2 id="tocS_GoogleIamV1AuditConfig">GoogleIamV1AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditconfig"></a>
<a id="schema_GoogleIamV1AuditConfig"></a>
<a id="tocSgoogleiamv1auditconfig"></a>
<a id="tocsgoogleiamv1auditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[GoogleIamV1AuditLogConfig](#schemagoogleiamv1auditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services.|

<h2 id="tocS_GoogleIamV1AuditLogConfig">GoogleIamV1AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditlogconfig"></a>
<a id="schema_GoogleIamV1AuditLogConfig"></a>
<a id="tocSgoogleiamv1auditlogconfig"></a>
<a id="tocsgoogleiamv1auditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

<h2 id="tocS_GoogleIamV1Binding">GoogleIamV1Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1binding"></a>
<a id="schema_GoogleIamV1Binding"></a>
<a id="tocSgoogleiamv1binding"></a>
<a id="tocsgoogleiamv1binding"></a>

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

Associates members, or principals, with a role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.|

<h2 id="tocS_GoogleIamV1Policy">GoogleIamV1Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1policy"></a>
<a id="schema_GoogleIamV1Policy"></a>
<a id="tocSgoogleiamv1policy"></a>
<a id="tocsgoogleiamv1policy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[GoogleIamV1AuditConfig](#schemagoogleiamv1auditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[GoogleIamV1Binding](#schemagoogleiamv1binding)]|false|none|Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy.|
|etag|string(byte)|false|none|etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1SetIamPolicyRequest">GoogleIamV1SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1setiampolicyrequest"></a>
<a id="schema_GoogleIamV1SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1setiampolicyrequest"></a>
<a id="tocsgoogleiamv1setiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

Request message for SetIamPolicy method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|none|REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag"|

<h2 id="tocS_GoogleIamV1TestIamPermissionsRequest">GoogleIamV1TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1testiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for TestIamPermissions method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_GoogleIamV1TestIamPermissionsResponse">GoogleIamV1TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1testiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for TestIamPermissions method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of TestPermissionsRequest.permissions that the caller is allowed.|

<h2 id="tocS_GoogleLongrunningCancelOperationRequest">GoogleLongrunningCancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningcanceloperationrequest"></a>
<a id="schema_GoogleLongrunningCancelOperationRequest"></a>
<a id="tocSgooglelongrunningcanceloperationrequest"></a>
<a id="tocsgooglelongrunningcanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

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
|done|boolean|false|none|If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.|

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

The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_GoogleTypeExpr">GoogleTypeExpr</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypeexpr"></a>
<a id="schema_GoogleTypeExpr"></a>
<a id="tocSgoogletypeexpr"></a>
<a id="tocsgoogletypeexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|
