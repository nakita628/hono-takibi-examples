<h1 id="dataproc-metastore-api">Dataproc Metastore API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Dataproc Metastore API is used to manage the lifecycle and configuration of metastore services.

Base URLs:

* <a href="https://metastore.googleapis.com/">https://metastore.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/dataproc-metastore/docs">External documentation</a>

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

<h1 id="dataproc-metastore-api-projects">projects</h1>

## metastore.projects.locations.services.metadataImports.get

<a id="opIdmetastore.projects.locations.services.metadataImports.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Gets details of a single import.

<h3 id="metastoreprojectslocationsservicesmetadataimportsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The relative resource name of the metadata import to retrieve, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{import_id}.|
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
  "createTime": "string",
  "databaseDump": {
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "gcsUri": "string",
    "sourceDatabase": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "description": "string",
  "endTime": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="metastoreprojectslocationsservicesmetadataimportsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MetadataImport](#schemametadataimport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.backups.delete

<a id="opIdmetastore.projects.locations.services.backups.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Deletes a single backup.

<h3 id="metastoreprojectslocationsservicesbackupsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The relative resource name of the backup to delete, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}.|
|requestId|query|string|false|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|
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

<h3 id="metastoreprojectslocationsservicesbackupsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.metadataImports.patch

<a id="opIdmetastore.projects.locations.services.metadataImports.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "databaseDump": {
      "databaseType": "DATABASE_TYPE_UNSPECIFIED",
      "gcsUri": "string",
      "sourceDatabase": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "description": "string",
    "name": "string"
  }'
```

`PATCH /v1beta/{name}`

Updates a single import. Only the description field of MetadataImport is supported to be updated.

> Body parameter

```json
{
  "databaseDump": {
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "gcsUri": "string",
    "sourceDatabase": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "description": "string",
  "name": "string"
}
```

<h3 id="metastoreprojectslocationsservicesmetadataimportspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.|
|requestId|query|string|false|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|
|updateMask|query|string|false|Required. A field mask used to specify the fields to be overwritten in the metadata import resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.|
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
|body|body|[MetadataImport](#schemametadataimport)|false|none|
|» databaseDump|body|[DatabaseDump](#schemadatabasedump)|false|Immutable. A database dump from a pre-existing metastore's database.|
|» description|body|string|false|The description of the metadata import.|
|» name|body|string|false|Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.|

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

<h3 id="metastoreprojectslocationsservicesmetadataimportspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.list

<a id="opIdmetastore.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="metastoreprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="metastoreprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.operations.list

<a id="opIdmetastore.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

<h3 id="metastoreprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="metastoreprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.operations.cancel

<a id="opIdmetastore.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

> Body parameter

```json
{}
```

<h3 id="metastoreprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="metastoreprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.backups.list

<a id="opIdmetastore.projects.locations.services.backups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/backups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/backups`

Lists backups in a service.

<h3 id="metastoreprojectslocationsservicesbackupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the service whose backups to list, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups.|
|filter|query|string|false|Optional. The filter to apply to list results.|
|orderBy|query|string|false|Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.|
|pageSize|query|integer|false|Optional. The maximum number of backups to return. The response may contain less than the maximum number. If unspecified, no more than 500 backups are returned. The maximum value is 1000; values above 1000 are changed to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous DataprocMetastore.ListBackups call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListBackups must match the call that provided the page token.|
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
  "backups": [
    {
      "createTime": "string",
      "description": "string",
      "endTime": "string",
      "name": "string",
      "restoringServices": [
        "string"
      ],
      "serviceRevision": {
        "artifactGcsUri": "string",
        "createTime": "string",
        "databaseType": "DATABASE_TYPE_UNSPECIFIED",
        "encryptionConfig": {
          "kmsKey": "string"
        },
        "endpointUri": "string",
        "hiveMetastoreConfig": {
          "auxiliaryVersions": {
            "property1": {
              "configOverrides": {
                "property1": "string",
                "property2": "string"
              },
              "networkConfig": {
                "consumers": [
                  {
                    "endpointUri": "string",
                    "subnetwork": "string"
                  }
                ],
                "customRoutesEnabled": true
              },
              "version": "string"
            },
            "property2": {
              "configOverrides": {
                "property1": "string",
                "property2": "string"
              },
              "networkConfig": {
                "consumers": [
                  {
                    "endpointUri": "string",
                    "subnetwork": "string"
                  }
                ],
                "customRoutesEnabled": true
              },
              "version": "string"
            }
          },
          "configOverrides": {
            "property1": "string",
            "property2": "string"
          },
          "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
          "kerberosConfig": {
            "keytab": {
              "cloudSecret": "string"
            },
            "krb5ConfigGcsUri": "string",
            "principal": "string"
          },
          "version": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "maintenanceWindow": {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "hourOfDay": 0
        },
        "metadataIntegration": {
          "dataCatalogConfig": {
            "enabled": true
          },
          "dataplexConfig": {
            "lakeResources": {
              "property1": {
                "name": "string"
              },
              "property2": {
                "name": "string"
              }
            }
          }
        },
        "metadataManagementActivity": {
          "metadataExports": [
            {
              "databaseDumpType": "TYPE_UNSPECIFIED",
              "destinationGcsUri": "string",
              "endTime": "string",
              "startTime": "string",
              "state": "STATE_UNSPECIFIED"
            }
          ],
          "restores": [
            {
              "backup": "string",
              "details": "string",
              "endTime": "string",
              "startTime": "string",
              "state": "STATE_UNSPECIFIED",
              "type": "RESTORE_TYPE_UNSPECIFIED"
            }
          ]
        },
        "name": "string",
        "network": "string",
        "networkConfig": {
          "consumers": [
            {
              "endpointUri": "string",
              "subnetwork": "string"
            }
          ],
          "customRoutesEnabled": true
        },
        "port": 0,
        "releaseChannel": "RELEASE_CHANNEL_UNSPECIFIED",
        "scalingConfig": {
          "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
          "scalingFactor": 0
        },
        "state": "STATE_UNSPECIFIED",
        "stateMessage": "string",
        "telemetryConfig": {
          "logFormat": "LOG_FORMAT_UNSPECIFIED"
        },
        "tier": "TIER_UNSPECIFIED",
        "uid": "string",
        "updateTime": "string"
      },
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="metastoreprojectslocationsservicesbackupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBackupsResponse](#schemalistbackupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.backups.create

<a id="opIdmetastore.projects.locations.services.backups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/backups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`POST /v1beta/{parent}/backups`

Creates a new backup in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="metastoreprojectslocationsservicesbackupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the service in which to create a backup of the following form:projects/{project_number}/locations/{location_id}/services/{service_id}.|
|backupId|query|string|false|Required. The ID of the backup, which is used as the final component of the backup's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.|
|requestId|query|string|false|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|
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
|body|body|[Backup](#schemabackup)|false|none|
|» description|body|string|false|The description of the backup.|
|» name|body|string|false|Immutable. The relative resource name of the backup, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}|

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

<h3 id="metastoreprojectslocationsservicesbackupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.federations.list

<a id="opIdmetastore.projects.locations.federations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/federations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/federations`

Lists federations in a project and location.

<h3 id="metastoreprojectslocationsfederationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the location of metastore federations to list, in the following form: projects/{project_number}/locations/{location_id}.|
|filter|query|string|false|Optional. The filter to apply to list results.|
|orderBy|query|string|false|Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.|
|pageSize|query|integer|false|Optional. The maximum number of federations to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous ListFederationServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to ListFederationServices must match the call that provided the page token.|
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
  "federations": [
    {
      "backendMetastores": {
        "property1": {
          "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
          "name": "string"
        },
        "property2": {
          "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
          "name": "string"
        }
      },
      "createTime": "string",
      "endpointUri": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "uid": "string",
      "updateTime": "string",
      "version": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="metastoreprojectslocationsfederationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFederationsResponse](#schemalistfederationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.federations.create

<a id="opIdmetastore.projects.locations.federations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/federations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backendMetastores": {
      "property1": {
        "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
        "name": "string"
      },
      "property2": {
        "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
        "name": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "version": "string"
  }'
```

`POST /v1beta/{parent}/federations`

Creates a metastore federation in a project and location.

> Body parameter

```json
{
  "backendMetastores": {
    "property1": {
      "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
      "name": "string"
    },
    "property2": {
      "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
      "name": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "version": "string"
}
```

<h3 id="metastoreprojectslocationsfederationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the location in which to create a federation service, in the following form:projects/{project_number}/locations/{location_id}.|
|federationId|query|string|false|Required. The ID of the metastore federation, which is used as the final component of the metastore federation's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.|
|requestId|query|string|false|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|
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
|body|body|[Federation](#schemafederation)|false|none|
|» backendMetastores|body|object|false|A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.|
|» » **additionalProperties**|body|[BackendMetastore](#schemabackendmetastore)|false|Represents a backend metastore for the federation.|
|» labels|body|object|false|User-defined labels for the metastore federation.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}`.|
|» version|body|string|false|Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.|

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

<h3 id="metastoreprojectslocationsfederationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.metadataImports.list

<a id="opIdmetastore.projects.locations.services.metadataImports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/metadataImports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/metadataImports`

Lists imports in a service.

<h3 id="metastoreprojectslocationsservicesmetadataimportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the service whose metadata imports to list, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports.|
|filter|query|string|false|Optional. The filter to apply to list results.|
|orderBy|query|string|false|Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.|
|pageSize|query|integer|false|Optional. The maximum number of imports to return. The response may contain less than the maximum number. If unspecified, no more than 500 imports are returned. The maximum value is 1000; values above 1000 are changed to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token.|
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
  "metadataImports": [
    {
      "createTime": "string",
      "databaseDump": {
        "databaseType": "DATABASE_TYPE_UNSPECIFIED",
        "gcsUri": "string",
        "sourceDatabase": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "description": "string",
      "endTime": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="metastoreprojectslocationsservicesmetadataimportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMetadataImportsResponse](#schemalistmetadataimportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.metadataImports.create

<a id="opIdmetastore.projects.locations.services.metadataImports.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/metadataImports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "databaseDump": {
      "databaseType": "DATABASE_TYPE_UNSPECIFIED",
      "gcsUri": "string",
      "sourceDatabase": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "description": "string",
    "name": "string"
  }'
```

`POST /v1beta/{parent}/metadataImports`

Creates a new MetadataImport in a given project and location.

> Body parameter

```json
{
  "databaseDump": {
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "gcsUri": "string",
    "sourceDatabase": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "description": "string",
  "name": "string"
}
```

<h3 id="metastoreprojectslocationsservicesmetadataimportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the service in which to create a metastore import, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}.|
|metadataImportId|query|string|false|Required. The ID of the metadata import, which is used as the final component of the metadata import's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.|
|requestId|query|string|false|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|
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
|body|body|[MetadataImport](#schemametadataimport)|false|none|
|» databaseDump|body|[DatabaseDump](#schemadatabasedump)|false|Immutable. A database dump from a pre-existing metastore's database.|
|» description|body|string|false|The description of the metadata import.|
|» name|body|string|false|Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.|

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

<h3 id="metastoreprojectslocationsservicesmetadataimportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.list

<a id="opIdmetastore.projects.locations.services.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/services`

Lists services in a project and location.

<h3 id="metastoreprojectslocationsserviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the location of metastore services to list, in the following form:projects/{project_number}/locations/{location_id}.|
|filter|query|string|false|Optional. The filter to apply to list results.|
|orderBy|query|string|false|Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.|
|pageSize|query|integer|false|Optional. The maximum number of services to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token.|
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
  "services": [
    {
      "artifactGcsUri": "string",
      "createTime": "string",
      "databaseType": "DATABASE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKey": "string"
      },
      "endpointUri": "string",
      "hiveMetastoreConfig": {
        "auxiliaryVersions": {
          "property1": {
            "configOverrides": {
              "property1": "string",
              "property2": "string"
            },
            "networkConfig": {
              "consumers": [
                {
                  "endpointUri": "string",
                  "subnetwork": "string"
                }
              ],
              "customRoutesEnabled": true
            },
            "version": "string"
          },
          "property2": {
            "configOverrides": {
              "property1": "string",
              "property2": "string"
            },
            "networkConfig": {
              "consumers": [
                {
                  "endpointUri": "string",
                  "subnetwork": "string"
                }
              ],
              "customRoutesEnabled": true
            },
            "version": "string"
          }
        },
        "configOverrides": {
          "property1": "string",
          "property2": "string"
        },
        "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
        "kerberosConfig": {
          "keytab": {
            "cloudSecret": "string"
          },
          "krb5ConfigGcsUri": "string",
          "principal": "string"
        },
        "version": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "maintenanceWindow": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "hourOfDay": 0
      },
      "metadataIntegration": {
        "dataCatalogConfig": {
          "enabled": true
        },
        "dataplexConfig": {
          "lakeResources": {
            "property1": {
              "name": "string"
            },
            "property2": {
              "name": "string"
            }
          }
        }
      },
      "metadataManagementActivity": {
        "metadataExports": [
          {
            "databaseDumpType": "TYPE_UNSPECIFIED",
            "destinationGcsUri": "string",
            "endTime": "string",
            "startTime": "string",
            "state": "STATE_UNSPECIFIED"
          }
        ],
        "restores": [
          {
            "backup": "string",
            "details": "string",
            "endTime": "string",
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "type": "RESTORE_TYPE_UNSPECIFIED"
          }
        ]
      },
      "name": "string",
      "network": "string",
      "networkConfig": {
        "consumers": [
          {
            "endpointUri": "string",
            "subnetwork": "string"
          }
        ],
        "customRoutesEnabled": true
      },
      "port": 0,
      "releaseChannel": "RELEASE_CHANNEL_UNSPECIFIED",
      "scalingConfig": {
        "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
        "scalingFactor": 0
      },
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "telemetryConfig": {
        "logFormat": "LOG_FORMAT_UNSPECIFIED"
      },
      "tier": "TIER_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="metastoreprojectslocationsserviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListServicesResponse](#schemalistservicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.create

<a id="opIdmetastore.projects.locations.services.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/services \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "encryptionConfig": {
      "kmsKey": "string"
    },
    "hiveMetastoreConfig": {
      "auxiliaryVersions": {
        "property1": {
          "configOverrides": {
            "property1": "string",
            "property2": "string"
          },
          "version": "string"
        },
        "property2": {
          "configOverrides": {
            "property1": "string",
            "property2": "string"
          },
          "version": "string"
        }
      },
      "configOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
      "kerberosConfig": {
        "keytab": {
          "cloudSecret": "string"
        },
        "krb5ConfigGcsUri": "string",
        "principal": "string"
      },
      "version": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "maintenanceWindow": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
      "hourOfDay": 0
    },
    "metadataIntegration": {
      "dataCatalogConfig": {
        "enabled": true
      },
      "dataplexConfig": {
        "lakeResources": {
          "property1": {
            "name": "string"
          },
          "property2": {
            "name": "string"
          }
        }
      }
    },
    "name": "string",
    "network": "string",
    "networkConfig": {
      "consumers": [
        {
          "subnetwork": "string"
        }
      ],
      "customRoutesEnabled": true
    },
    "port": 0,
    "releaseChannel": "RELEASE_CHANNEL_UNSPECIFIED",
    "scalingConfig": {
      "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
      "scalingFactor": 0
    },
    "telemetryConfig": {
      "logFormat": "LOG_FORMAT_UNSPECIFIED"
    },
    "tier": "TIER_UNSPECIFIED"
  }'
```

`POST /v1beta/{parent}/services`

Creates a metastore service in a project and location.

> Body parameter

```json
{
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "encryptionConfig": {
    "kmsKey": "string"
  },
  "hiveMetastoreConfig": {
    "auxiliaryVersions": {
      "property1": {
        "configOverrides": {
          "property1": "string",
          "property2": "string"
        },
        "version": "string"
      },
      "property2": {
        "configOverrides": {
          "property1": "string",
          "property2": "string"
        },
        "version": "string"
      }
    },
    "configOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
    "kerberosConfig": {
      "keytab": {
        "cloudSecret": "string"
      },
      "krb5ConfigGcsUri": "string",
      "principal": "string"
    },
    "version": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maintenanceWindow": {
    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
    "hourOfDay": 0
  },
  "metadataIntegration": {
    "dataCatalogConfig": {
      "enabled": true
    },
    "dataplexConfig": {
      "lakeResources": {
        "property1": {
          "name": "string"
        },
        "property2": {
          "name": "string"
        }
      }
    }
  },
  "name": "string",
  "network": "string",
  "networkConfig": {
    "consumers": [
      {
        "subnetwork": "string"
      }
    ],
    "customRoutesEnabled": true
  },
  "port": 0,
  "releaseChannel": "RELEASE_CHANNEL_UNSPECIFIED",
  "scalingConfig": {
    "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
    "scalingFactor": 0
  },
  "telemetryConfig": {
    "logFormat": "LOG_FORMAT_UNSPECIFIED"
  },
  "tier": "TIER_UNSPECIFIED"
}
```

<h3 id="metastoreprojectslocationsservicescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative resource name of the location in which to create a metastore service, in the following form:projects/{project_number}/locations/{location_id}.|
|requestId|query|string|false|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|
|serviceId|query|string|false|Required. The ID of the metastore service, which is used as the final component of the metastore service's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.|
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
|body|body|[Service](#schemaservice)|false|none|
|» databaseType|body|string|false|Immutable. The database type that the Metastore service stores its data.|
|» encryptionConfig|body|[EncryptionConfig](#schemaencryptionconfig)|false|Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot be updated.|
|» hiveMetastoreConfig|body|[HiveMetastoreConfig](#schemahivemetastoreconfig)|false|Configuration information specific to running Hive metastore software as the metastore service.|
|» labels|body|object|false|User-defined labels for the metastore service.|
|» » **additionalProperties**|body|string|false|none|
|» maintenanceWindow|body|[MaintenanceWindow](#schemamaintenancewindow)|false|The one hour maintenance window of the metastore service. This specifies when the service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER database type.|
|» metadataIntegration|body|[MetadataIntegration](#schemametadataintegration)|false|The setting that defines how metastore metadata should be integrated with external services and systems.|
|» name|body|string|false|Immutable. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}.|
|» network|body|string|false|Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}.|
|» networkConfig|body|[NetworkConfig](#schemanetworkconfig)|false|The configuration specifying the network settings for the Dataproc Metastore service.|
|» port|body|integer(int32)|false|The TCP port at which the metastore service is reached. Default: 9083.|
|» releaseChannel|body|string|false|Immutable. The release channel of the service. If unspecified, defaults to STABLE.|
|» scalingConfig|body|[ScalingConfig](#schemascalingconfig)|false|Scaling configuration of the metastore service.|
|» telemetryConfig|body|[TelemetryConfig](#schematelemetryconfig)|false|The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.|
|» tier|body|string|false|The tier of the service.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» databaseType|DATABASE_TYPE_UNSPECIFIED|
|» databaseType|MYSQL|
|» databaseType|SPANNER|
|» releaseChannel|RELEASE_CHANNEL_UNSPECIFIED|
|» releaseChannel|CANARY|
|» releaseChannel|STABLE|
|» tier|TIER_UNSPECIFIED|
|» tier|DEVELOPER|
|» tier|ENTERPRISE|

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

<h3 id="metastoreprojectslocationsservicescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.databases.tables.getIamPolicy

<a id="opIdmetastore.projects.locations.services.databases.tables.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="metastoreprojectslocationsservicesdatabasestablesgetiampolicy-parameters">Parameters</h3>

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

<h3 id="metastoreprojectslocationsservicesdatabasestablesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.removeIamPolicy

<a id="opIdmetastore.projects.locations.services.removeIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:removeIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asynchronous": true
  }'
```

`POST /v1beta/{resource}:removeIamPolicy`

Removes the attached IAM policies for a resource

> Body parameter

```json
{
  "asynchronous": true
}
```

<h3 id="metastoreprojectslocationsservicesremoveiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|Required. The relative resource name of the dataplane resource to remove IAM policy, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/databases/{database_id} or projects/{project_id}/locations/{location_id}/services/{service_id}/databases/{database_id}/tables/{table_id}.|
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
|body|body|[RemoveIamPolicyRequest](#schemaremoveiampolicyrequest)|false|none|
|» asynchronous|body|boolean|false|Optional. Removes IAM policy attached to database or table asynchronously when it is set. The default is false.|

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
  "success": true
}
```

<h3 id="metastoreprojectslocationsservicesremoveiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RemoveIamPolicyResponse](#schemaremoveiampolicyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.databases.tables.setIamPolicy

<a id="opIdmetastore.projects.locations.services.databases.tables.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:setIamPolicy \
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

`POST /v1beta/{resource}:setIamPolicy`

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

<h3 id="metastoreprojectslocationsservicesdatabasestablessetiampolicy-parameters">Parameters</h3>

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
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
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

<h3 id="metastoreprojectslocationsservicesdatabasestablessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.databases.tables.testIamPermissions

<a id="opIdmetastore.projects.locations.services.databases.tables.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:testIamPermissions \
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

`POST /v1beta/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="metastoreprojectslocationsservicesdatabasestablestestiampermissions-parameters">Parameters</h3>

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
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
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

<h3 id="metastoreprojectslocationsservicesdatabasestablestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.alterLocation

<a id="opIdmetastore.projects.locations.services.alterLocation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:alterLocation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "locationUri": "string",
    "resourceName": "string"
  }'
```

`POST /v1beta/{service}:alterLocation`

Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.

> Body parameter

```json
{
  "locationUri": "string",
  "resourceName": "string"
}
```

<h3 id="metastoreprojectslocationsservicesalterlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service|path|string|true|Required. The relative resource name of the metastore service to mutate metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.|
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
|body|body|[AlterMetadataResourceLocationRequest](#schemaaltermetadataresourcelocationrequest)|false|none|
|» locationUri|body|string|false|Required. The new location URI for the metadata resource.|
|» resourceName|body|string|false|Required. The relative metadata resource name in the following format.databases/{database_id} or databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id}|

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

<h3 id="metastoreprojectslocationsservicesalterlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.exportMetadata

<a id="opIdmetastore.projects.locations.services.exportMetadata"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:exportMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "databaseDumpType": "TYPE_UNSPECIFIED",
    "destinationGcsFolder": "string",
    "requestId": "string"
  }'
```

`POST /v1beta/{service}:exportMetadata`

Exports metadata from a service.

> Body parameter

```json
{
  "databaseDumpType": "TYPE_UNSPECIFIED",
  "destinationGcsFolder": "string",
  "requestId": "string"
}
```

<h3 id="metastoreprojectslocationsservicesexportmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service|path|string|true|Required. The relative resource name of the metastore service to run export, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}.|
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
|body|body|[ExportMetadataRequest](#schemaexportmetadatarequest)|false|none|
|» databaseDumpType|body|string|false|Optional. The type of the database dump. If unspecified, defaults to MYSQL.|
|» destinationGcsFolder|body|string|false|A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files will be created below it.|
|» requestId|body|string|false|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» databaseDumpType|TYPE_UNSPECIFIED|
|» databaseDumpType|MYSQL|
|» databaseDumpType|AVRO|

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

<h3 id="metastoreprojectslocationsservicesexportmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.moveTableToDatabase

<a id="opIdmetastore.projects.locations.services.moveTableToDatabase"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:moveTableToDatabase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dbName": "string",
    "destinationDbName": "string",
    "tableName": "string"
  }'
```

`POST /v1beta/{service}:moveTableToDatabase`

Move a table to another database.

> Body parameter

```json
{
  "dbName": "string",
  "destinationDbName": "string",
  "tableName": "string"
}
```

<h3 id="metastoreprojectslocationsservicesmovetabletodatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service|path|string|true|Required. The relative resource name of the metastore service to mutate metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.|
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
|body|body|[MoveTableToDatabaseRequest](#schemamovetabletodatabaserequest)|false|none|
|» dbName|body|string|false|Required. The name of the database where the table resides.|
|» destinationDbName|body|string|false|Required. The name of the database where the table should be moved.|
|» tableName|body|string|false|Required. The name of the table to be moved.|

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

<h3 id="metastoreprojectslocationsservicesmovetabletodatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.queryMetadata

<a id="opIdmetastore.projects.locations.services.queryMetadata"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:queryMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "string"
  }'
```

`POST /v1beta/{service}:queryMetadata`

Query DPMS metadata.

> Body parameter

```json
{
  "query": "string"
}
```

<h3 id="metastoreprojectslocationsservicesquerymetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service|path|string|true|Required. The relative resource name of the metastore service to query metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.|
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
|body|body|[QueryMetadataRequest](#schemaquerymetadatarequest)|false|none|
|» query|body|string|false|Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the data.|

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

<h3 id="metastoreprojectslocationsservicesquerymetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## metastore.projects.locations.services.restore

<a id="opIdmetastore.projects.locations.services.restore"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backup": "string",
    "requestId": "string",
    "restoreType": "RESTORE_TYPE_UNSPECIFIED"
  }'
```

`POST /v1beta/{service}:restore`

Restores a service from a backup.

> Body parameter

```json
{
  "backup": "string",
  "requestId": "string",
  "restoreType": "RESTORE_TYPE_UNSPECIFIED"
}
```

<h3 id="metastoreprojectslocationsservicesrestore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service|path|string|true|Required. The relative resource name of the metastore service to run restore, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}.|
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
|body|body|[RestoreServiceRequest](#schemarestoreservicerequest)|false|none|
|» backup|body|string|false|Required. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}.|
|» requestId|body|string|false|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|
|» restoreType|body|string|false|Optional. The type of restore. If unspecified, defaults to METADATA_ONLY.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» restoreType|RESTORE_TYPE_UNSPECIFIED|
|» restoreType|FULL|
|» restoreType|METADATA_ONLY|

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

<h3 id="metastoreprojectslocationsservicesrestore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AlterMetadataResourceLocationRequest">AlterMetadataResourceLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaltermetadataresourcelocationrequest"></a>
<a id="schema_AlterMetadataResourceLocationRequest"></a>
<a id="tocSaltermetadataresourcelocationrequest"></a>
<a id="tocsaltermetadataresourcelocationrequest"></a>

```json
{
  "locationUri": "string",
  "resourceName": "string"
}
```

Request message for DataprocMetastore.AlterMetadataResourceLocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationUri|string|false|none|Required. The new location URI for the metadata resource.|
|resourceName|string|false|none|Required. The relative metadata resource name in the following format.databases/{database_id} or databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id}|

<h2 id="tocS_AlterMetadataResourceLocationResponse">AlterMetadataResourceLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaltermetadataresourcelocationresponse"></a>
<a id="schema_AlterMetadataResourceLocationResponse"></a>
<a id="tocSaltermetadataresourcelocationresponse"></a>
<a id="tocsaltermetadataresourcelocationresponse"></a>

```json
{}
```

Response message for DataprocMetastore.AlterMetadataResourceLocation.

<h2 id="tocS_AuditConfig">AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditconfig"></a>
<a id="schema_AuditConfig"></a>
<a id="tocSauditconfig"></a>
<a id="tocsauditconfig"></a>

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
|auditLogConfigs|[[AuditLogConfig](#schemaauditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services.|

<h2 id="tocS_AuditLogConfig">AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogconfig"></a>
<a id="schema_AuditLogConfig"></a>
<a id="tocSauditlogconfig"></a>
<a id="tocsauditlogconfig"></a>

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

<h2 id="tocS_AuxiliaryVersionConfig">AuxiliaryVersionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauxiliaryversionconfig"></a>
<a id="schema_AuxiliaryVersionConfig"></a>
<a id="tocSauxiliaryversionconfig"></a>
<a id="tocsauxiliaryversionconfig"></a>

```json
{
  "configOverrides": {
    "property1": "string",
    "property2": "string"
  },
  "networkConfig": {
    "consumers": [
      {
        "endpointUri": "string",
        "subnetwork": "string"
      }
    ],
    "customRoutesEnabled": true
  },
  "version": "string"
}
```

Configuration information for the auxiliary service versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configOverrides|object|false|none|A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.|
|networkConfig|[NetworkConfig](#schemanetworkconfig)|false|none|Output only. The network configuration contains the endpoint URI(s) of the auxiliary Hive metastore service.|
|version|string|false|none|The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.|

<h2 id="tocS_BackendMetastore">BackendMetastore</h2>
<!-- backwards compatibility -->
<a id="schemabackendmetastore"></a>
<a id="schema_BackendMetastore"></a>
<a id="tocSbackendmetastore"></a>
<a id="tocsbackendmetastore"></a>

```json
{
  "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
  "name": "string"
}
```

Represents a backend metastore for the federation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metastoreType|string|false|none|The type of the backend metastore.|
|name|string|false|none|The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: BigQuery projects/{project_id} Dataproc Metastore projects/{project_id}/locations/{location}/services/{service_id}|

#### Enumerated Values

|Property|Value|
|---|---|
|metastoreType|METASTORE_TYPE_UNSPECIFIED|
|metastoreType|DATAPLEX|
|metastoreType|BIGQUERY|
|metastoreType|DATAPROC_METASTORE|

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "endTime": "string",
  "name": "string",
  "restoringServices": [
    "string"
  ],
  "serviceRevision": {
    "artifactGcsUri": "string",
    "createTime": "string",
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "encryptionConfig": {
      "kmsKey": "string"
    },
    "endpointUri": "string",
    "hiveMetastoreConfig": {
      "auxiliaryVersions": {
        "property1": {
          "configOverrides": {
            "property1": "string",
            "property2": "string"
          },
          "networkConfig": {
            "consumers": [
              {
                "endpointUri": "string",
                "subnetwork": "string"
              }
            ],
            "customRoutesEnabled": true
          },
          "version": "string"
        },
        "property2": {
          "configOverrides": {
            "property1": "string",
            "property2": "string"
          },
          "networkConfig": {
            "consumers": [
              {
                "endpointUri": "string",
                "subnetwork": "string"
              }
            ],
            "customRoutesEnabled": true
          },
          "version": "string"
        }
      },
      "configOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
      "kerberosConfig": {
        "keytab": {
          "cloudSecret": "string"
        },
        "krb5ConfigGcsUri": "string",
        "principal": "string"
      },
      "version": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "maintenanceWindow": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
      "hourOfDay": 0
    },
    "metadataIntegration": {
      "dataCatalogConfig": {
        "enabled": true
      },
      "dataplexConfig": {
        "lakeResources": {
          "property1": {
            "name": "string"
          },
          "property2": {
            "name": "string"
          }
        }
      }
    },
    "metadataManagementActivity": {
      "metadataExports": [
        {
          "databaseDumpType": "TYPE_UNSPECIFIED",
          "destinationGcsUri": "string",
          "endTime": "string",
          "startTime": "string",
          "state": "STATE_UNSPECIFIED"
        }
      ],
      "restores": [
        {
          "backup": "string",
          "details": "string",
          "endTime": "string",
          "startTime": "string",
          "state": "STATE_UNSPECIFIED",
          "type": "RESTORE_TYPE_UNSPECIFIED"
        }
      ]
    },
    "name": "string",
    "network": "string",
    "networkConfig": {
      "consumers": [
        {
          "endpointUri": "string",
          "subnetwork": "string"
        }
      ],
      "customRoutesEnabled": true
    },
    "port": 0,
    "releaseChannel": "RELEASE_CHANNEL_UNSPECIFIED",
    "scalingConfig": {
      "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
      "scalingFactor": 0
    },
    "state": "STATE_UNSPECIFIED",
    "stateMessage": "string",
    "telemetryConfig": {
      "logFormat": "LOG_FORMAT_UNSPECIFIED"
    },
    "tier": "TIER_UNSPECIFIED",
    "uid": "string",
    "updateTime": "string"
  },
  "state": "STATE_UNSPECIFIED"
}
```

The details of a backup resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the backup was started.|
|description|string|false|none|The description of the backup.|
|endTime|string(google-datetime)|false|read-only|Output only. The time when the backup finished creating.|
|name|string|false|none|Immutable. The relative resource name of the backup, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}|
|restoringServices|[string]|false|read-only|Output only. Services that are restoring from the backup.|
|serviceRevision|[Service](#schemaservice)|false|none|Output only. The revision of the service at the time of backup.|
|state|string|false|read-only|Output only. The current state of the backup.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|DELETING|
|state|ACTIVE|
|state|FAILED|
|state|RESTORING|

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

Associates members, or principals, with a role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.|

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

<h2 id="tocS_Consumer">Consumer</h2>
<!-- backwards compatibility -->
<a id="schemaconsumer"></a>
<a id="schema_Consumer"></a>
<a id="tocSconsumer"></a>
<a id="tocsconsumer"></a>

```json
{
  "endpointUri": "string",
  "subnetwork": "string"
}
```

Contains information of the customer's network configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointUri|string|false|read-only|Output only. The URI of the endpoint used to access the metastore service.|
|subnetwork|string|false|none|Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network. There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id}|

<h2 id="tocS_DataCatalogConfig">DataCatalogConfig</h2>
<!-- backwards compatibility -->
<a id="schemadatacatalogconfig"></a>
<a id="schema_DataCatalogConfig"></a>
<a id="tocSdatacatalogconfig"></a>
<a id="tocsdatacatalogconfig"></a>

```json
{
  "enabled": true
}
```

Specifies how metastore metadata should be integrated with the Data Catalog service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog.|

<h2 id="tocS_DatabaseDump">DatabaseDump</h2>
<!-- backwards compatibility -->
<a id="schemadatabasedump"></a>
<a id="schema_DatabaseDump"></a>
<a id="tocSdatabasedump"></a>
<a id="tocsdatabasedump"></a>

```json
{
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "gcsUri": "string",
  "sourceDatabase": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

A specification of the location of and metadata about a database dump from a relational database management system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseType|string|false|none|The type of the database.|
|gcsUri|string|false|none|A Cloud Storage object or folder URI that specifies the source from which to import metadata. It must begin with gs://.|
|sourceDatabase|string|false|none|The name of the source database.|
|type|string|false|none|Optional. The type of the database dump. If unspecified, defaults to MYSQL.|

#### Enumerated Values

|Property|Value|
|---|---|
|databaseType|DATABASE_TYPE_UNSPECIFIED|
|databaseType|MYSQL|
|type|TYPE_UNSPECIFIED|
|type|MYSQL|
|type|AVRO|

<h2 id="tocS_DataplexConfig">DataplexConfig</h2>
<!-- backwards compatibility -->
<a id="schemadataplexconfig"></a>
<a id="schema_DataplexConfig"></a>
<a id="tocSdataplexconfig"></a>
<a id="tocsdataplexconfig"></a>

```json
{
  "lakeResources": {
    "property1": {
      "name": "string"
    },
    "property2": {
      "name": "string"
    }
  }
}
```

Specifies how metastore metadata should be integrated with the Dataplex service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lakeResources|object|false|none|A reference to the Lake resources that this metastore service is attached to. The key is the lake resource name. Example: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.|

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

<h2 id="tocS_EncryptionConfig">EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfig"></a>
<a id="schema_EncryptionConfig"></a>
<a id="tocSencryptionconfig"></a>
<a id="tocsencryptionconfig"></a>

```json
{
  "kmsKey": "string"
}
```

Encryption settings for the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKey|string|false|none|The fully qualified customer provided Cloud KMS key name to use for customer data encryption, in the following form:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}.|

<h2 id="tocS_ExportMetadataRequest">ExportMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportmetadatarequest"></a>
<a id="schema_ExportMetadataRequest"></a>
<a id="tocSexportmetadatarequest"></a>
<a id="tocsexportmetadatarequest"></a>

```json
{
  "databaseDumpType": "TYPE_UNSPECIFIED",
  "destinationGcsFolder": "string",
  "requestId": "string"
}
```

Request message for DataprocMetastore.ExportMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseDumpType|string|false|none|Optional. The type of the database dump. If unspecified, defaults to MYSQL.|
|destinationGcsFolder|string|false|none|A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files will be created below it.|
|requestId|string|false|none|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|databaseDumpType|TYPE_UNSPECIFIED|
|databaseDumpType|MYSQL|
|databaseDumpType|AVRO|

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

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_Federation">Federation</h2>
<!-- backwards compatibility -->
<a id="schemafederation"></a>
<a id="schema_Federation"></a>
<a id="tocSfederation"></a>
<a id="tocsfederation"></a>

```json
{
  "backendMetastores": {
    "property1": {
      "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
      "name": "string"
    },
    "property2": {
      "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
      "name": "string"
    }
  },
  "createTime": "string",
  "endpointUri": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "uid": "string",
  "updateTime": "string",
  "version": "string"
}
```

Represents a federation of multiple backend metastores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendMetastores|object|false|none|A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the metastore federation was created.|
|endpointUri|string|false|read-only|Output only. The federation endpoint.|
|labels|object|false|none|User-defined labels for the metastore federation.|
|name|string|false|none|Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}`.|
|state|string|false|read-only|Output only. The current state of the federation.|
|stateMessage|string|false|read-only|Output only. Additional information about the current state of the metastore federation, if available.|
|uid|string|false|read-only|Output only. The globally unique resource identifier of the metastore federation.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the metastore federation was last updated.|
|version|string|false|none|Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|UPDATING|
|state|DELETING|
|state|ERROR|

<h2 id="tocS_HiveMetastoreConfig">HiveMetastoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemahivemetastoreconfig"></a>
<a id="schema_HiveMetastoreConfig"></a>
<a id="tocShivemetastoreconfig"></a>
<a id="tocshivemetastoreconfig"></a>

```json
{
  "auxiliaryVersions": {
    "property1": {
      "configOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "networkConfig": {
        "consumers": [
          {
            "endpointUri": "string",
            "subnetwork": "string"
          }
        ],
        "customRoutesEnabled": true
      },
      "version": "string"
    },
    "property2": {
      "configOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "networkConfig": {
        "consumers": [
          {
            "endpointUri": "string",
            "subnetwork": "string"
          }
        ],
        "customRoutesEnabled": true
      },
      "version": "string"
    }
  },
  "configOverrides": {
    "property1": "string",
    "property2": "string"
  },
  "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
  "kerberosConfig": {
    "keytab": {
      "cloudSecret": "string"
    },
    "krb5ConfigGcsUri": "string",
    "principal": "string"
  },
  "version": "string"
}
```

Specifies configuration information specific to running Hive metastore software as the metastore service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auxiliaryVersions|object|false|none|A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression a-z?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.|
|configOverrides|object|false|none|A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's AuxiliaryVersionConfig.|
|endpointProtocol|string|false|none|The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT.|
|kerberosConfig|[KerberosConfig](#schemakerberosconfig)|false|none|Information used to configure the Hive metastore service as a service principal in a Kerberos realm. To disable Kerberos, use the UpdateService method and specify this field's path (hive_metastore_config.kerberos_config) in the request's update_mask while omitting this field from the request's service.|
|version|string|false|none|Immutable. The Hive metastore schema version.|

#### Enumerated Values

|Property|Value|
|---|---|
|endpointProtocol|ENDPOINT_PROTOCOL_UNSPECIFIED|
|endpointProtocol|THRIFT|
|endpointProtocol|GRPC|

<h2 id="tocS_HiveMetastoreVersion">HiveMetastoreVersion</h2>
<!-- backwards compatibility -->
<a id="schemahivemetastoreversion"></a>
<a id="schema_HiveMetastoreVersion"></a>
<a id="tocShivemetastoreversion"></a>
<a id="tocshivemetastoreversion"></a>

```json
{
  "isDefault": true,
  "version": "string"
}
```

A specification of a supported version of the Hive Metastore software.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isDefault|boolean|false|none|Whether version will be chosen by the server if a metastore service is created with a HiveMetastoreConfig that omits the version.|
|version|string|false|none|The semantic version of the Hive Metastore software.|

<h2 id="tocS_KerberosConfig">KerberosConfig</h2>
<!-- backwards compatibility -->
<a id="schemakerberosconfig"></a>
<a id="schema_KerberosConfig"></a>
<a id="tocSkerberosconfig"></a>
<a id="tocskerberosconfig"></a>

```json
{
  "keytab": {
    "cloudSecret": "string"
  },
  "krb5ConfigGcsUri": "string",
  "principal": "string"
}
```

Configuration information for a Kerberos principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keytab|[Secret](#schemasecret)|false|none|A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center (KDC).|
|krb5ConfigGcsUri|string|false|none|A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.|
|principal|string|false|none|A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form primary/instance@REALM, but there is no exact format.|

<h2 id="tocS_Lake">Lake</h2>
<!-- backwards compatibility -->
<a id="schemalake"></a>
<a id="schema_Lake"></a>
<a id="tocSlake"></a>
<a id="tocslake"></a>

```json
{
  "name": "string"
}
```

Represents a Lake resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The Lake resource name. Example: projects/{project_number}/locations/{location_id}/lakes/{lake_id}|

<h2 id="tocS_ListBackupsResponse">ListBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupsresponse"></a>
<a id="schema_ListBackupsResponse"></a>
<a id="tocSlistbackupsresponse"></a>
<a id="tocslistbackupsresponse"></a>

```json
{
  "backups": [
    {
      "createTime": "string",
      "description": "string",
      "endTime": "string",
      "name": "string",
      "restoringServices": [
        "string"
      ],
      "serviceRevision": {
        "artifactGcsUri": "string",
        "createTime": "string",
        "databaseType": "DATABASE_TYPE_UNSPECIFIED",
        "encryptionConfig": {
          "kmsKey": "string"
        },
        "endpointUri": "string",
        "hiveMetastoreConfig": {
          "auxiliaryVersions": {
            "property1": {
              "configOverrides": {
                "property1": "string",
                "property2": "string"
              },
              "networkConfig": {
                "consumers": [
                  {
                    "endpointUri": "string",
                    "subnetwork": "string"
                  }
                ],
                "customRoutesEnabled": true
              },
              "version": "string"
            },
            "property2": {
              "configOverrides": {
                "property1": "string",
                "property2": "string"
              },
              "networkConfig": {
                "consumers": [
                  {
                    "endpointUri": "string",
                    "subnetwork": "string"
                  }
                ],
                "customRoutesEnabled": true
              },
              "version": "string"
            }
          },
          "configOverrides": {
            "property1": "string",
            "property2": "string"
          },
          "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
          "kerberosConfig": {
            "keytab": {
              "cloudSecret": "string"
            },
            "krb5ConfigGcsUri": "string",
            "principal": "string"
          },
          "version": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "maintenanceWindow": {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "hourOfDay": 0
        },
        "metadataIntegration": {
          "dataCatalogConfig": {
            "enabled": true
          },
          "dataplexConfig": {
            "lakeResources": {
              "property1": {
                "name": "string"
              },
              "property2": {
                "name": "string"
              }
            }
          }
        },
        "metadataManagementActivity": {
          "metadataExports": [
            {
              "databaseDumpType": "TYPE_UNSPECIFIED",
              "destinationGcsUri": "string",
              "endTime": "string",
              "startTime": "string",
              "state": "STATE_UNSPECIFIED"
            }
          ],
          "restores": [
            {
              "backup": "string",
              "details": "string",
              "endTime": "string",
              "startTime": "string",
              "state": "STATE_UNSPECIFIED",
              "type": "RESTORE_TYPE_UNSPECIFIED"
            }
          ]
        },
        "name": "string",
        "network": "string",
        "networkConfig": {
          "consumers": [
            {
              "endpointUri": "string",
              "subnetwork": "string"
            }
          ],
          "customRoutesEnabled": true
        },
        "port": 0,
        "releaseChannel": "RELEASE_CHANNEL_UNSPECIFIED",
        "scalingConfig": {
          "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
          "scalingFactor": 0
        },
        "state": "STATE_UNSPECIFIED",
        "stateMessage": "string",
        "telemetryConfig": {
          "logFormat": "LOG_FORMAT_UNSPECIFIED"
        },
        "tier": "TIER_UNSPECIFIED",
        "uid": "string",
        "updateTime": "string"
      },
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for DataprocMetastore.ListBackups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backups|[[Backup](#schemabackup)]|false|none|The backups of the specified service.|
|nextPageToken|string|false|none|A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListFederationsResponse">ListFederationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfederationsresponse"></a>
<a id="schema_ListFederationsResponse"></a>
<a id="tocSlistfederationsresponse"></a>
<a id="tocslistfederationsresponse"></a>

```json
{
  "federations": [
    {
      "backendMetastores": {
        "property1": {
          "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
          "name": "string"
        },
        "property2": {
          "metastoreType": "METASTORE_TYPE_UNSPECIFIED",
          "name": "string"
        }
      },
      "createTime": "string",
      "endpointUri": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "uid": "string",
      "updateTime": "string",
      "version": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for ListFederations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|federations|[[Federation](#schemafederation)]|false|none|The services in the specified location.|
|nextPageToken|string|false|none|A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|
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

<h2 id="tocS_ListMetadataImportsResponse">ListMetadataImportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmetadataimportsresponse"></a>
<a id="schema_ListMetadataImportsResponse"></a>
<a id="tocSlistmetadataimportsresponse"></a>
<a id="tocslistmetadataimportsresponse"></a>

```json
{
  "metadataImports": [
    {
      "createTime": "string",
      "databaseDump": {
        "databaseType": "DATABASE_TYPE_UNSPECIFIED",
        "gcsUri": "string",
        "sourceDatabase": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "description": "string",
      "endTime": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for DataprocMetastore.ListMetadataImports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadataImports|[[MetadataImport](#schemametadataimport)]|false|none|The imports in the specified service.|
|nextPageToken|string|false|none|A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations that could not be reached.|

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

<h2 id="tocS_ListServicesResponse">ListServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesresponse"></a>
<a id="schema_ListServicesResponse"></a>
<a id="tocSlistservicesresponse"></a>
<a id="tocslistservicesresponse"></a>

```json
{
  "nextPageToken": "string",
  "services": [
    {
      "artifactGcsUri": "string",
      "createTime": "string",
      "databaseType": "DATABASE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKey": "string"
      },
      "endpointUri": "string",
      "hiveMetastoreConfig": {
        "auxiliaryVersions": {
          "property1": {
            "configOverrides": {
              "property1": "string",
              "property2": "string"
            },
            "networkConfig": {
              "consumers": [
                {
                  "endpointUri": "string",
                  "subnetwork": "string"
                }
              ],
              "customRoutesEnabled": true
            },
            "version": "string"
          },
          "property2": {
            "configOverrides": {
              "property1": "string",
              "property2": "string"
            },
            "networkConfig": {
              "consumers": [
                {
                  "endpointUri": "string",
                  "subnetwork": "string"
                }
              ],
              "customRoutesEnabled": true
            },
            "version": "string"
          }
        },
        "configOverrides": {
          "property1": "string",
          "property2": "string"
        },
        "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
        "kerberosConfig": {
          "keytab": {
            "cloudSecret": "string"
          },
          "krb5ConfigGcsUri": "string",
          "principal": "string"
        },
        "version": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "maintenanceWindow": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "hourOfDay": 0
      },
      "metadataIntegration": {
        "dataCatalogConfig": {
          "enabled": true
        },
        "dataplexConfig": {
          "lakeResources": {
            "property1": {
              "name": "string"
            },
            "property2": {
              "name": "string"
            }
          }
        }
      },
      "metadataManagementActivity": {
        "metadataExports": [
          {
            "databaseDumpType": "TYPE_UNSPECIFIED",
            "destinationGcsUri": "string",
            "endTime": "string",
            "startTime": "string",
            "state": "STATE_UNSPECIFIED"
          }
        ],
        "restores": [
          {
            "backup": "string",
            "details": "string",
            "endTime": "string",
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "type": "RESTORE_TYPE_UNSPECIFIED"
          }
        ]
      },
      "name": "string",
      "network": "string",
      "networkConfig": {
        "consumers": [
          {
            "endpointUri": "string",
            "subnetwork": "string"
          }
        ],
        "customRoutesEnabled": true
      },
      "port": 0,
      "releaseChannel": "RELEASE_CHANNEL_UNSPECIFIED",
      "scalingConfig": {
        "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
        "scalingFactor": 0
      },
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "telemetryConfig": {
        "logFormat": "LOG_FORMAT_UNSPECIFIED"
      },
      "tier": "TIER_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for DataprocMetastore.ListServices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|services|[[Service](#schemaservice)]|false|none|The services in the specified location.|
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
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} |
|locationId|string|false|none|The canonical id for this location. For example: "us-east1".|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"|

<h2 id="tocS_LocationMetadata">LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalocationmetadata"></a>
<a id="schema_LocationMetadata"></a>
<a id="tocSlocationmetadata"></a>
<a id="tocslocationmetadata"></a>

```json
{
  "supportedHiveMetastoreVersions": [
    {
      "isDefault": true,
      "version": "string"
    }
  ]
}
```

Metadata about the service in a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supportedHiveMetastoreVersions|[[HiveMetastoreVersion](#schemahivemetastoreversion)]|false|none|The versions of Hive Metastore that can be used when creating a new metastore service in this location. The server guarantees that exactly one HiveMetastoreVersion in the list will set is_default.|

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
  "hourOfDay": 0
}
```

Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|false|none|The day of week, when the window starts.|
|hourOfDay|integer(int32)|false|none|The hour of day (0-23) when the window starts.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|DAY_OF_WEEK_UNSPECIFIED|
|dayOfWeek|MONDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|FRIDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|

<h2 id="tocS_MetadataExport">MetadataExport</h2>
<!-- backwards compatibility -->
<a id="schemametadataexport"></a>
<a id="schema_MetadataExport"></a>
<a id="tocSmetadataexport"></a>
<a id="tocsmetadataexport"></a>

```json
{
  "databaseDumpType": "TYPE_UNSPECIFIED",
  "destinationGcsUri": "string",
  "endTime": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

The details of a metadata export operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseDumpType|string|false|read-only|Output only. The type of the database dump.|
|destinationGcsUri|string|false|read-only|Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of gs:////, where is automatically generated.|
|endTime|string(google-datetime)|false|read-only|Output only. The time when the export ended.|
|startTime|string(google-datetime)|false|read-only|Output only. The time when the export started.|
|state|string|false|read-only|Output only. The current state of the export.|

#### Enumerated Values

|Property|Value|
|---|---|
|databaseDumpType|TYPE_UNSPECIFIED|
|databaseDumpType|MYSQL|
|databaseDumpType|AVRO|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_MetadataImport">MetadataImport</h2>
<!-- backwards compatibility -->
<a id="schemametadataimport"></a>
<a id="schema_MetadataImport"></a>
<a id="tocSmetadataimport"></a>
<a id="tocsmetadataimport"></a>

```json
{
  "createTime": "string",
  "databaseDump": {
    "databaseType": "DATABASE_TYPE_UNSPECIFIED",
    "gcsUri": "string",
    "sourceDatabase": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "description": "string",
  "endTime": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

A metastore resource that imports metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the metadata import was started.|
|databaseDump|[DatabaseDump](#schemadatabasedump)|false|none|Immutable. A database dump from a pre-existing metastore's database.|
|description|string|false|none|The description of the metadata import.|
|endTime|string(google-datetime)|false|read-only|Output only. The time when the metadata import finished.|
|name|string|false|none|Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.|
|state|string|false|read-only|Output only. The current state of the metadata import.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the metadata import was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|SUCCEEDED|
|state|UPDATING|
|state|FAILED|

<h2 id="tocS_MetadataIntegration">MetadataIntegration</h2>
<!-- backwards compatibility -->
<a id="schemametadataintegration"></a>
<a id="schema_MetadataIntegration"></a>
<a id="tocSmetadataintegration"></a>
<a id="tocsmetadataintegration"></a>

```json
{
  "dataCatalogConfig": {
    "enabled": true
  },
  "dataplexConfig": {
    "lakeResources": {
      "property1": {
        "name": "string"
      },
      "property2": {
        "name": "string"
      }
    }
  }
}
```

Specifies how metastore metadata should be integrated with external services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataCatalogConfig|[DataCatalogConfig](#schemadatacatalogconfig)|false|none|The integration config for the Data Catalog service.|
|dataplexConfig|[DataplexConfig](#schemadataplexconfig)|false|none|The integration config for the Dataplex service.|

<h2 id="tocS_MetadataManagementActivity">MetadataManagementActivity</h2>
<!-- backwards compatibility -->
<a id="schemametadatamanagementactivity"></a>
<a id="schema_MetadataManagementActivity"></a>
<a id="tocSmetadatamanagementactivity"></a>
<a id="tocsmetadatamanagementactivity"></a>

```json
{
  "metadataExports": [
    {
      "databaseDumpType": "TYPE_UNSPECIFIED",
      "destinationGcsUri": "string",
      "endTime": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "restores": [
    {
      "backup": "string",
      "details": "string",
      "endTime": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "RESTORE_TYPE_UNSPECIFIED"
    }
  ]
}
```

The metadata management activities of the metastore service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadataExports|[[MetadataExport](#schemametadataexport)]|false|read-only|Output only. The latest metadata exports of the metastore service.|
|restores|[[Restore](#schemarestore)]|false|read-only|Output only. The latest restores of the metastore service.|

<h2 id="tocS_MoveTableToDatabaseRequest">MoveTableToDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemamovetabletodatabaserequest"></a>
<a id="schema_MoveTableToDatabaseRequest"></a>
<a id="tocSmovetabletodatabaserequest"></a>
<a id="tocsmovetabletodatabaserequest"></a>

```json
{
  "dbName": "string",
  "destinationDbName": "string",
  "tableName": "string"
}
```

Request message for DataprocMetastore.MoveTableToDatabase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbName|string|false|none|Required. The name of the database where the table resides.|
|destinationDbName|string|false|none|Required. The name of the database where the table should be moved.|
|tableName|string|false|none|Required. The name of the table to be moved.|

<h2 id="tocS_MoveTableToDatabaseResponse">MoveTableToDatabaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemamovetabletodatabaseresponse"></a>
<a id="schema_MoveTableToDatabaseResponse"></a>
<a id="tocSmovetabletodatabaseresponse"></a>
<a id="tocsmovetabletodatabaseresponse"></a>

```json
{}
```

Response message for DataprocMetastore.MoveTableToDatabase.

<h2 id="tocS_NetworkConfig">NetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfig"></a>
<a id="schema_NetworkConfig"></a>
<a id="tocSnetworkconfig"></a>
<a id="tocsnetworkconfig"></a>

```json
{
  "consumers": [
    {
      "endpointUri": "string",
      "subnetwork": "string"
    }
  ],
  "customRoutesEnabled": true
}
```

Network configuration for the Dataproc Metastore service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumers|[[Consumer](#schemaconsumer)]|false|none|Immutable. The consumer-side network configuration for the Dataproc Metastore instance.|
|customRoutesEnabled|boolean|false|none|Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.|

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
|done|boolean|false|none|If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.|

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

Represents the metadata of a long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

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
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy.|
|etag|string(byte)|false|none|etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_QueryMetadataRequest">QueryMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerymetadatarequest"></a>
<a id="schema_QueryMetadataRequest"></a>
<a id="tocSquerymetadatarequest"></a>
<a id="tocsquerymetadatarequest"></a>

```json
{
  "query": "string"
}
```

Request message for DataprocMetastore.QueryMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the data.|

<h2 id="tocS_QueryMetadataResponse">QueryMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerymetadataresponse"></a>
<a id="schema_QueryMetadataResponse"></a>
<a id="tocSquerymetadataresponse"></a>
<a id="tocsquerymetadataresponse"></a>

```json
{
  "resultManifestUri": "string"
}
```

Response message for DataprocMetastore.QueryMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultManifestUri|string|false|none|The manifest URI is link to a JSON instance in Cloud Storage. This instance manifests immediately along with QueryMetadataResponse. The content of the URI is not retriable until the long-running operation query against the metadata finishes.|

<h2 id="tocS_RemoveIamPolicyRequest">RemoveIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveiampolicyrequest"></a>
<a id="schema_RemoveIamPolicyRequest"></a>
<a id="tocSremoveiampolicyrequest"></a>
<a id="tocsremoveiampolicyrequest"></a>

```json
{
  "asynchronous": true
}
```

Request message for DataprocMetastore.RemoveIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asynchronous|boolean|false|none|Optional. Removes IAM policy attached to database or table asynchronously when it is set. The default is false.|

<h2 id="tocS_RemoveIamPolicyResponse">RemoveIamPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveiampolicyresponse"></a>
<a id="schema_RemoveIamPolicyResponse"></a>
<a id="tocSremoveiampolicyresponse"></a>
<a id="tocsremoveiampolicyresponse"></a>

```json
{
  "success": true
}
```

Response message for DataprocMetastore.RemoveIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|True if the policy is successfully removed.|

<h2 id="tocS_Restore">Restore</h2>
<!-- backwards compatibility -->
<a id="schemarestore"></a>
<a id="schema_Restore"></a>
<a id="tocSrestore"></a>
<a id="tocsrestore"></a>

```json
{
  "backup": "string",
  "details": "string",
  "endTime": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "RESTORE_TYPE_UNSPECIFIED"
}
```

The details of a metadata restore operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|string|false|read-only|Output only. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}.|
|details|string|false|read-only|Output only. The restore details containing the revision of the service to be restored to, in format of JSON.|
|endTime|string(google-datetime)|false|read-only|Output only. The time when the restore ended.|
|startTime|string(google-datetime)|false|read-only|Output only. The time when the restore started.|
|state|string|false|read-only|Output only. The current state of the restore.|
|type|string|false|read-only|Output only. The type of restore.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|
|type|RESTORE_TYPE_UNSPECIFIED|
|type|FULL|
|type|METADATA_ONLY|

<h2 id="tocS_RestoreServiceRequest">RestoreServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoreservicerequest"></a>
<a id="schema_RestoreServiceRequest"></a>
<a id="tocSrestoreservicerequest"></a>
<a id="tocsrestoreservicerequest"></a>

```json
{
  "backup": "string",
  "requestId": "string",
  "restoreType": "RESTORE_TYPE_UNSPECIFIED"
}
```

Request message for DataprocMetastore.Restore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|string|false|none|Required. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}.|
|requestId|string|false|none|Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.|
|restoreType|string|false|none|Optional. The type of restore. If unspecified, defaults to METADATA_ONLY.|

#### Enumerated Values

|Property|Value|
|---|---|
|restoreType|RESTORE_TYPE_UNSPECIFIED|
|restoreType|FULL|
|restoreType|METADATA_ONLY|

<h2 id="tocS_ScalingConfig">ScalingConfig</h2>
<!-- backwards compatibility -->
<a id="schemascalingconfig"></a>
<a id="schema_ScalingConfig"></a>
<a id="tocSscalingconfig"></a>
<a id="tocsscalingconfig"></a>

```json
{
  "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
  "scalingFactor": 0
}
```

Represents the scaling configuration of a metastore service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSize|string|false|none|An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))|
|scalingFactor|number(float)|false|none|Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.|

#### Enumerated Values

|Property|Value|
|---|---|
|instanceSize|INSTANCE_SIZE_UNSPECIFIED|
|instanceSize|EXTRA_SMALL|
|instanceSize|SMALL|
|instanceSize|MEDIUM|
|instanceSize|LARGE|
|instanceSize|EXTRA_LARGE|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "cloudSecret": "string"
}
```

A securely stored value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudSecret|string|false|none|The relative resource name of a Secret Manager secret version, in the following form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}.|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "artifactGcsUri": "string",
  "createTime": "string",
  "databaseType": "DATABASE_TYPE_UNSPECIFIED",
  "encryptionConfig": {
    "kmsKey": "string"
  },
  "endpointUri": "string",
  "hiveMetastoreConfig": {
    "auxiliaryVersions": {
      "property1": {
        "configOverrides": {
          "property1": "string",
          "property2": "string"
        },
        "networkConfig": {
          "consumers": [
            {
              "endpointUri": "string",
              "subnetwork": "string"
            }
          ],
          "customRoutesEnabled": true
        },
        "version": "string"
      },
      "property2": {
        "configOverrides": {
          "property1": "string",
          "property2": "string"
        },
        "networkConfig": {
          "consumers": [
            {
              "endpointUri": "string",
              "subnetwork": "string"
            }
          ],
          "customRoutesEnabled": true
        },
        "version": "string"
      }
    },
    "configOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "endpointProtocol": "ENDPOINT_PROTOCOL_UNSPECIFIED",
    "kerberosConfig": {
      "keytab": {
        "cloudSecret": "string"
      },
      "krb5ConfigGcsUri": "string",
      "principal": "string"
    },
    "version": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maintenanceWindow": {
    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
    "hourOfDay": 0
  },
  "metadataIntegration": {
    "dataCatalogConfig": {
      "enabled": true
    },
    "dataplexConfig": {
      "lakeResources": {
        "property1": {
          "name": "string"
        },
        "property2": {
          "name": "string"
        }
      }
    }
  },
  "metadataManagementActivity": {
    "metadataExports": [
      {
        "databaseDumpType": "TYPE_UNSPECIFIED",
        "destinationGcsUri": "string",
        "endTime": "string",
        "startTime": "string",
        "state": "STATE_UNSPECIFIED"
      }
    ],
    "restores": [
      {
        "backup": "string",
        "details": "string",
        "endTime": "string",
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "type": "RESTORE_TYPE_UNSPECIFIED"
      }
    ]
  },
  "name": "string",
  "network": "string",
  "networkConfig": {
    "consumers": [
      {
        "endpointUri": "string",
        "subnetwork": "string"
      }
    ],
    "customRoutesEnabled": true
  },
  "port": 0,
  "releaseChannel": "RELEASE_CHANNEL_UNSPECIFIED",
  "scalingConfig": {
    "instanceSize": "INSTANCE_SIZE_UNSPECIFIED",
    "scalingFactor": 0
  },
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "telemetryConfig": {
    "logFormat": "LOG_FORMAT_UNSPECIFIED"
  },
  "tier": "TIER_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

A managed metastore service that serves metadata queries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactGcsUri|string|false|read-only|Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the metastore service was created.|
|databaseType|string|false|none|Immutable. The database type that the Metastore service stores its data.|
|encryptionConfig|[EncryptionConfig](#schemaencryptionconfig)|false|none|Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot be updated.|
|endpointUri|string|false|read-only|Output only. The URI of the endpoint used to access the metastore service.|
|hiveMetastoreConfig|[HiveMetastoreConfig](#schemahivemetastoreconfig)|false|none|Configuration information specific to running Hive metastore software as the metastore service.|
|labels|object|false|none|User-defined labels for the metastore service.|
|maintenanceWindow|[MaintenanceWindow](#schemamaintenancewindow)|false|none|The one hour maintenance window of the metastore service. This specifies when the service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER database type.|
|metadataIntegration|[MetadataIntegration](#schemametadataintegration)|false|none|The setting that defines how metastore metadata should be integrated with external services and systems.|
|metadataManagementActivity|[MetadataManagementActivity](#schemametadatamanagementactivity)|false|none|Output only. The metadata management activities of the metastore service.|
|name|string|false|none|Immutable. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}.|
|network|string|false|none|Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}.|
|networkConfig|[NetworkConfig](#schemanetworkconfig)|false|none|The configuration specifying the network settings for the Dataproc Metastore service.|
|port|integer(int32)|false|none|The TCP port at which the metastore service is reached. Default: 9083.|
|releaseChannel|string|false|none|Immutable. The release channel of the service. If unspecified, defaults to STABLE.|
|scalingConfig|[ScalingConfig](#schemascalingconfig)|false|none|Scaling configuration of the metastore service.|
|state|string|false|read-only|Output only. The current state of the metastore service.|
|stateMessage|string|false|read-only|Output only. Additional information about the current state of the metastore service, if available.|
|telemetryConfig|[TelemetryConfig](#schematelemetryconfig)|false|none|The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.|
|tier|string|false|none|The tier of the service.|
|uid|string|false|read-only|Output only. The globally unique resource identifier of the metastore service.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the metastore service was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|databaseType|DATABASE_TYPE_UNSPECIFIED|
|databaseType|MYSQL|
|databaseType|SPANNER|
|releaseChannel|RELEASE_CHANNEL_UNSPECIFIED|
|releaseChannel|CANARY|
|releaseChannel|STABLE|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|SUSPENDING|
|state|SUSPENDED|
|state|UPDATING|
|state|DELETING|
|state|ERROR|
|tier|TIER_UNSPECIFIED|
|tier|DEVELOPER|
|tier|ENTERPRISE|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

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
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag"|

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

The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_TelemetryConfig">TelemetryConfig</h2>
<!-- backwards compatibility -->
<a id="schematelemetryconfig"></a>
<a id="schema_TelemetryConfig"></a>
<a id="tocStelemetryconfig"></a>
<a id="tocstelemetryconfig"></a>

```json
{
  "logFormat": "LOG_FORMAT_UNSPECIFIED"
}
```

Telemetry Configuration for the Dataproc Metastore service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logFormat|string|false|none|The output format of the Dataproc Metastore service's logs.|

#### Enumerated Values

|Property|Value|
|---|---|
|logFormat|LOG_FORMAT_UNSPECIFIED|
|logFormat|LEGACY|
|logFormat|JSON|

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

Request message for TestIamPermissions method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).|

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

Response message for TestIamPermissions method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of TestPermissionsRequest.permissions that the caller is allowed.|
