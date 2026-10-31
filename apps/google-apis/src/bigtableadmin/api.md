<h1 id="cloud-bigtable-admin-api">Cloud Bigtable Admin API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Administer your Cloud Bigtable tables and instances.

Base URLs:

* <a href="https://bigtableadmin.googleapis.com/">https://bigtableadmin.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/bigtable/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/bigtable.admin|Administer your Cloud Bigtable tables and clusters|
|https://www.googleapis.com/auth/bigtable.admin.cluster|Administer your Cloud Bigtable clusters|
|https://www.googleapis.com/auth/bigtable.admin.instance|Administer your Cloud Bigtable clusters|
|https://www.googleapis.com/auth/bigtable.admin.table|Administer your Cloud Bigtable tables|
|https://www.googleapis.com/auth/cloud-bigtable.admin|Administer your Cloud Bigtable tables and clusters|
|https://www.googleapis.com/auth/cloud-bigtable.admin.cluster|Administer your Cloud Bigtable clusters|
|https://www.googleapis.com/auth/cloud-bigtable.admin.table|Administer your Cloud Bigtable tables|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/bigtable.admin|Administer your Cloud Bigtable tables and clusters|
|https://www.googleapis.com/auth/bigtable.admin.cluster|Administer your Cloud Bigtable clusters|
|https://www.googleapis.com/auth/bigtable.admin.instance|Administer your Cloud Bigtable clusters|
|https://www.googleapis.com/auth/bigtable.admin.table|Administer your Cloud Bigtable tables|
|https://www.googleapis.com/auth/cloud-bigtable.admin|Administer your Cloud Bigtable tables and clusters|
|https://www.googleapis.com/auth/cloud-bigtable.admin.cluster|Administer your Cloud Bigtable clusters|
|https://www.googleapis.com/auth/cloud-bigtable.admin.table|Administer your Cloud Bigtable tables|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

<h1 id="cloud-bigtable-admin-api-operations">operations</h1>

## bigtableadmin.operations.projects.operations.list

<a id="opIdbigtableadmin.operations.projects.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="bigtableadminoperationsprojectsoperationslist-parameters">Parameters</h3>

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

<h3 id="bigtableadminoperationsprojectsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigtableadmin.operations.cancel

<a id="opIdbigtableadmin.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

<h3 id="bigtableadminoperationscancel-parameters">Parameters</h3>

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

<h3 id="bigtableadminoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-bigtable-admin-api-projects">projects</h1>

## bigtableadmin.projects.locations.get

<a id="opIdbigtableadmin.projects.locations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Gets information about a location.

<h3 id="bigtableadminprojectslocationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name for the location.|
|view|query|string|false|The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.|
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
|view|VIEW_UNSPECIFIED|
|view|NAME_ONLY|
|view|SCHEMA_VIEW|
|view|REPLICATION_VIEW|
|view|ENCRYPTION_VIEW|
|view|STATS_VIEW|
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

<h3 id="bigtableadminprojectslocationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Location](#schemalocation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigtableadmin.projects.instances.clusters.update

<a id="opIdbigtableadmin.projects.instances.clusters.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterConfig": {
      "clusterAutoscalingConfig": {
        "autoscalingLimits": {
          "maxServeNodes": 0,
          "minServeNodes": 0
        },
        "autoscalingTargets": {
          "cpuUtilizationPercent": 0,
          "storageUtilizationGibPerNode": 0
        }
      }
    },
    "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "location": "string",
    "name": "string",
    "serveNodes": 0
  }'
```

`PUT /v2/{name}`

Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.

> Body parameter

```json
{
  "clusterConfig": {
    "clusterAutoscalingConfig": {
      "autoscalingLimits": {
        "maxServeNodes": 0,
        "minServeNodes": 0
      },
      "autoscalingTargets": {
        "cpuUtilizationPercent": 0,
        "storageUtilizationGibPerNode": 0
      }
    }
  },
  "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
  "encryptionConfig": {
    "kmsKeyName": "string"
  },
  "location": "string",
  "name": "string",
  "serveNodes": 0
}
```

<h3 id="bigtableadminprojectsinstancesclustersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.|
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
|body|body|[Cluster](#schemacluster)|false|none|
|» clusterConfig|body|[ClusterConfig](#schemaclusterconfig)|false|Configuration for this cluster.|
|» defaultStorageType|body|string|false|Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.|
|» encryptionConfig|body|[EncryptionConfig](#schemaencryptionconfig)|false|Immutable. The encryption configuration for CMEK-protected clusters.|
|» location|body|string|false|Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`.|
|» name|body|string|false|The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.|
|» serveNodes|body|integer(int32)|false|The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» defaultStorageType|STORAGE_TYPE_UNSPECIFIED|
|» defaultStorageType|SSD|
|» defaultStorageType|HDD|

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

<h3 id="bigtableadminprojectsinstancesclustersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.delete

<a id="opIdbigtableadmin.projects.instances.tables.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Permanently deletes a specified table and all of its data.

<h3 id="bigtableadminprojectsinstancestablesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique name of the table to be deleted. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.|
|ignoreWarnings|query|boolean|false|Required. If true, ignore safety checks when deleting the app profile.|
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

<h3 id="bigtableadminprojectsinstancestablesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.patch

<a id="opIdbigtableadmin.projects.instances.tables.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "columnFamilies": {
      "property1": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      },
      "property2": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      }
    },
    "deletionProtection": true,
    "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
    "name": "string",
    "stats": {
      "averageCellsPerColumn": 0,
      "averageColumnsPerRow": 0,
      "logicalDataBytes": "string",
      "rowCount": "string"
    }
  }'
```

`PATCH /v2/{name}`

Updates a specified table.

> Body parameter

```json
{
  "columnFamilies": {
    "property1": {
      "gcRule": {
        "intersection": {},
        "maxAge": "string",
        "maxNumVersions": 0,
        "union": {}
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string"
      }
    },
    "property2": {
      "gcRule": {
        "intersection": {},
        "maxAge": "string",
        "maxNumVersions": 0,
        "union": {}
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string"
      }
    }
  },
  "deletionProtection": true,
  "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
  "name": "string",
  "stats": {
    "averageCellsPerColumn": 0,
    "averageColumnsPerRow": 0,
    "logicalDataBytes": "string",
    "rowCount": "string"
  }
}
```

<h3 id="bigtableadminprojectsinstancestablespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`|
|updateMask|query|string|false|Required. The list of fields to update. A mask specifying which fields (e.g. `change_stream_config`) in the `table` field should be updated. This mask is relative to the `table` field, not to the request message. The wildcard (*) path is currently not supported. Currently UpdateTable is only supported for the following fields: * `change_stream_config` * `change_stream_config.retention_period` * `deletion_protection` If `column_families` is set in `update_mask`, it will return an UNIMPLEMENTED error.|
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
|body|body|[Table](#schematable)|false|none|
|» columnFamilies|body|object|false|The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL`|
|» » **additionalProperties**|body|[ColumnFamily](#schemacolumnfamily)|false|A set of columns within a table which share a common configuration.|
|» deletionProtection|body|boolean|false|Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs.|
|» granularity|body|string|false|Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.|
|» name|body|string|false|The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`|
|» stats|body|[TableStats](#schematablestats)|false|Only available with STATS_VIEW, this includes summary statistics about the entire table contents. For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» granularity|TIMESTAMP_GRANULARITY_UNSPECIFIED|
|» granularity|MILLIS|

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

<h3 id="bigtableadminprojectsinstancestablespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.locations.list

<a id="opIdbigtableadmin.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="bigtableadminprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="bigtableadminprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigtableadmin.projects.instances.tables.checkConsistency

<a id="opIdbigtableadmin.projects.instances.tables.checkConsistency"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:checkConsistency \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consistencyToken": "string"
  }'
```

`POST /v2/{name}:checkConsistency`

Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.

> Body parameter

```json
{
  "consistencyToken": "string"
}
```

<h3 id="bigtableadminprojectsinstancestablescheckconsistency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique name of the Table for which to check replication consistency. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.|
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
|body|body|[CheckConsistencyRequest](#schemacheckconsistencyrequest)|false|none|
|» consistencyToken|body|string|false|Required. The token created using GenerateConsistencyToken for the Table.|

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
  "consistent": true
}
```

<h3 id="bigtableadminprojectsinstancestablescheckconsistency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CheckConsistencyResponse](#schemacheckconsistencyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.dropRowRange

<a id="opIdbigtableadmin.projects.instances.tables.dropRowRange"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:dropRowRange \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deleteAllDataFromTable": true,
    "rowKeyPrefix": "string"
  }'
```

`POST /v2/{name}:dropRowRange`

Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.

> Body parameter

```json
{
  "deleteAllDataFromTable": true,
  "rowKeyPrefix": "string"
}
```

<h3 id="bigtableadminprojectsinstancestablesdroprowrange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique name of the table on which to drop a range of rows. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.|
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
|body|body|[DropRowRangeRequest](#schemadroprowrangerequest)|false|none|
|» deleteAllDataFromTable|body|boolean|false|Delete all rows in the table. Setting this to false is a no-op.|
|» rowKeyPrefix|body|string(byte)|false|Delete all rows that start with this row key prefix. Prefix cannot be zero length.|

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

<h3 id="bigtableadminprojectsinstancestablesdroprowrange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.generateConsistencyToken

<a id="opIdbigtableadmin.projects.instances.tables.generateConsistencyToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:generateConsistencyToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:generateConsistencyToken`

Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.

> Body parameter

```json
{}
```

<h3 id="bigtableadminprojectsinstancestablesgenerateconsistencytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique name of the Table for which to create a consistency token. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.|
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
|body|body|[GenerateConsistencyTokenRequest](#schemagenerateconsistencytokenrequest)|false|none|

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
  "consistencyToken": "string"
}
```

<h3 id="bigtableadminprojectsinstancestablesgenerateconsistencytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateConsistencyTokenResponse](#schemagenerateconsistencytokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.modifyColumnFamilies

<a id="opIdbigtableadmin.projects.instances.tables.modifyColumnFamilies"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:modifyColumnFamilies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "modifications": [
      {
        "create": {
          "gcRule": {
            "intersection": {},
            "maxAge": "string",
            "maxNumVersions": 0,
            "union": {}
          },
          "stats": {
            "averageCellsPerColumn": 0,
            "averageColumnsPerRow": 0,
            "logicalDataBytes": "string"
          }
        },
        "drop": true,
        "id": "string",
        "update": {
          "gcRule": {
            "intersection": {},
            "maxAge": "string",
            "maxNumVersions": 0,
            "union": {}
          },
          "stats": {
            "averageCellsPerColumn": 0,
            "averageColumnsPerRow": 0,
            "logicalDataBytes": "string"
          }
        }
      }
    ]
  }'
```

`POST /v2/{name}:modifyColumnFamilies`

Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.

> Body parameter

```json
{
  "modifications": [
    {
      "create": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      },
      "drop": true,
      "id": "string",
      "update": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      }
    }
  ]
}
```

<h3 id="bigtableadminprojectsinstancestablesmodifycolumnfamilies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique name of the table whose families should be modified. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.|
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
|body|body|[ModifyColumnFamiliesRequest](#schemamodifycolumnfamiliesrequest)|false|none|
|» modifications|body|[[Modification](#schemamodification)]|false|Required. Modifications to be atomically applied to the specified table's families. Entries are applied in order, meaning that earlier modifications can be masked by later ones (in the case of repeated updates to the same family, for example).|

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
  "clusterStates": {
    "property1": {
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "replicationState": "STATE_NOT_KNOWN"
    },
    "property2": {
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "replicationState": "STATE_NOT_KNOWN"
    }
  },
  "columnFamilies": {
    "property1": {
      "gcRule": {
        "intersection": {},
        "maxAge": "string",
        "maxNumVersions": 0,
        "union": {}
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string"
      }
    },
    "property2": {
      "gcRule": {
        "intersection": {},
        "maxAge": "string",
        "maxNumVersions": 0,
        "union": {}
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string"
      }
    }
  },
  "deletionProtection": true,
  "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
  "name": "string",
  "restoreInfo": {
    "backupInfo": {
      "backup": "string",
      "endTime": "string",
      "sourceBackup": "string",
      "sourceTable": "string",
      "startTime": "string"
    },
    "sourceType": "RESTORE_SOURCE_TYPE_UNSPECIFIED"
  },
  "stats": {
    "averageCellsPerColumn": 0,
    "averageColumnsPerRow": 0,
    "logicalDataBytes": "string",
    "rowCount": "string"
  }
}
```

<h3 id="bigtableadminprojectsinstancestablesmodifycolumnfamilies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Table](#schematable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.undelete

<a id="opIdbigtableadmin.projects.instances.tables.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:undelete`

Restores a specified table which was accidentally deleted.

> Body parameter

```json
{}
```

<h3 id="bigtableadminprojectsinstancestablesundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique name of the table to be restored. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.|
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
|body|body|[UndeleteTableRequest](#schemaundeletetablerequest)|false|none|

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

<h3 id="bigtableadminprojectsinstancestablesundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.appProfiles.list

<a id="opIdbigtableadmin.projects.instances.appProfiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/appProfiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/appProfiles`

Lists information about app profiles in an instance.

<h3 id="bigtableadminprojectsinstancesappprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the instance for which a list of app profiles is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list AppProfiles for all Instances in a project, e.g., `projects/myproject/instances/-`.|
|pageSize|query|integer|false|Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.|
|pageToken|query|string|false|The value of `next_page_token` returned by a previous call.|
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
  "appProfiles": [
    {
      "description": "string",
      "etag": "string",
      "multiClusterRoutingUseAny": {
        "clusterIds": [
          "string"
        ]
      },
      "name": "string",
      "singleClusterRouting": {
        "allowTransactionalWrites": true,
        "clusterId": "string"
      }
    }
  ],
  "failedLocations": [
    "string"
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigtableadminprojectsinstancesappprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAppProfilesResponse](#schemalistappprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.appProfiles.create

<a id="opIdbigtableadmin.projects.instances.appProfiles.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/appProfiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "multiClusterRoutingUseAny": {
      "clusterIds": [
        "string"
      ]
    },
    "name": "string",
    "singleClusterRouting": {
      "allowTransactionalWrites": true,
      "clusterId": "string"
    }
  }'
```

`POST /v2/{parent}/appProfiles`

Creates an app profile within an instance.

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "multiClusterRoutingUseAny": {
    "clusterIds": [
      "string"
    ]
  },
  "name": "string",
  "singleClusterRouting": {
    "allowTransactionalWrites": true,
    "clusterId": "string"
  }
}
```

<h3 id="bigtableadminprojectsinstancesappprofilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the instance in which to create the new app profile. Values are of the form `projects/{project}/instances/{instance}`.|
|appProfileId|query|string|false|Required. The ID to be used when referring to the new app profile within its instance, e.g., just `myprofile` rather than `projects/myproject/instances/myinstance/appProfiles/myprofile`.|
|ignoreWarnings|query|boolean|false|If true, ignore safety checks when creating the app profile.|
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
|body|body|[AppProfile](#schemaappprofile)|false|none|
|» description|body|string|false|Long form description of the use case for this AppProfile.|
|» etag|body|string|false|Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details.|
|» multiClusterRoutingUseAny|body|[MultiClusterRoutingUseAny](#schemamulticlusterroutinguseany)|false|Use a multi-cluster routing policy.|
|» name|body|string|false|The unique name of the app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`.|
|» singleClusterRouting|body|[SingleClusterRouting](#schemasingleclusterrouting)|false|Use a single-cluster routing policy.|

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
  "description": "string",
  "etag": "string",
  "multiClusterRoutingUseAny": {
    "clusterIds": [
      "string"
    ]
  },
  "name": "string",
  "singleClusterRouting": {
    "allowTransactionalWrites": true,
    "clusterId": "string"
  }
}
```

<h3 id="bigtableadminprojectsinstancesappprofilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppProfile](#schemaappprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.clusters.backups.list

<a id="opIdbigtableadmin.projects.instances.clusters.backups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/backups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/backups`

Lists Cloud Bigtable backups. Returns both completed and pending backups.

<h3 id="bigtableadminprojectsinstancesclustersbackupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The cluster to list backups from. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. Use `{cluster} = '-'` to list backups for all clusters in an instance, e.g., `projects/{project}/instances/{instance}/clusters/-`.|
|filter|query|string|false|A filter expression that filters backups listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be <, >, <=, >=, !=, =, or :. Colon ':' represents a HAS operator which is roughly synonymous with equality. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `source_table` * `state` * `start_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `end_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` To filter on multiple expressions, provide each separate expression within parentheses. By default, each expression is an AND expression. However, you can include AND, OR, and NOT expressions explicitly. Some examples of using filters are: * `name:"exact"` --> The backup's name is the string "exact". * `name:howl` --> The backup's name contains the string "howl". * `source_table:prod` --> The source_table's name contains the string "prod". * `state:CREATING` --> The backup is pending creation. * `state:READY` --> The backup is fully created and ready for use. * `(name:howl) AND (start_time < \"2018-03-28T14:50:00Z\")` --> The backup name contains the string "howl" and start_time of the backup is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` --> The backup's size is greater than 10GB|
|orderBy|query|string|false|An expression for specifying the sort order of the results of the request. The string value should specify one or more fields in Backup. The full syntax is described at https://aip.dev/132#ordering. Fields supported are: * name * source_table * expire_time * start_time * end_time * size_bytes * state For example, "start_time". The default sorting order is ascending. To specify descending order for the field, a suffix " desc" should be appended to the field name. For example, "start_time desc". Redundant space characters in the syntax are insigificant. If order_by is empty, results will be sorted by `start_time` in descending order starting from the most recently created backup.|
|pageSize|query|integer|false|Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.|
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
      "encryptionInfo": {
        "encryptionStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
        "kmsKeyVersion": "string"
      },
      "endTime": "string",
      "expireTime": "string",
      "name": "string",
      "sizeBytes": "string",
      "sourceBackup": "string",
      "sourceTable": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigtableadminprojectsinstancesclustersbackupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBackupsResponse](#schemalistbackupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.clusters.backups.create

<a id="opIdbigtableadmin.projects.instances.clusters.backups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/backups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expireTime": "string",
    "name": "string",
    "sourceTable": "string"
  }'
```

`POST /v2/{parent}/backups`

Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.

> Body parameter

```json
{
  "expireTime": "string",
  "name": "string",
  "sourceTable": "string"
}
```

<h3 id="bigtableadminprojectsinstancesclustersbackupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. This must be one of the clusters in the instance in which this table is located. The backup will be stored in this cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.|
|backupId|query|string|false|Required. The id of the backup to be created. The `backup_id` along with the parent `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*.|
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
|» expireTime|body|string(google-datetime)|false|Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.|
|» name|body|string|false|A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.|
|» sourceTable|body|string|false|Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project}/instances/{instance}/tables/{source_table}`.|

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

<h3 id="bigtableadminprojectsinstancesclustersbackupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.clusters.backups.copy

<a id="opIdbigtableadmin.projects.instances.clusters.backups.copy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/backups:copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backupId": "string",
    "expireTime": "string",
    "sourceBackup": "string"
  }'
```

`POST /v2/{parent}/backups:copy`

Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.

> Body parameter

```json
{
  "backupId": "string",
  "expireTime": "string",
  "sourceBackup": "string"
}
```

<h3 id="bigtableadminprojectsinstancesclustersbackupscopy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the destination cluster that will contain the backup copy. The cluster must already exists. Values are of the form: `projects/{project}/instances/{instance}/clusters/{cluster}`.|
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
|body|body|[CopyBackupRequest](#schemacopybackuprequest)|false|none|
|» backupId|body|string|false|Required. The id of the new backup. The `backup_id` along with `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*.|
|» expireTime|body|string(google-datetime)|false|Required. Required. The expiration time of the copied backup with microsecond granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.|
|» sourceBackup|body|string|false|Required. The source backup to be copied from. The source backup needs to be in READY state for it to be copied. Copying a copied backup is not allowed. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//clusters//backups/`.|

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

<h3 id="bigtableadminprojectsinstancesclustersbackupscopy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.clusters.list

<a id="opIdbigtableadmin.projects.instances.clusters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/clusters`

Lists information about clusters in an instance.

<h3 id="bigtableadminprojectsinstancesclusterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the instance for which a list of clusters is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list Clusters for all Instances in a project, e.g., `projects/myproject/instances/-`.|
|pageToken|query|string|false|DEPRECATED: This field is unused and ignored.|
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
  "clusters": [
    {
      "clusterConfig": {
        "clusterAutoscalingConfig": {
          "autoscalingLimits": {
            "maxServeNodes": 0,
            "minServeNodes": 0
          },
          "autoscalingTargets": {
            "cpuUtilizationPercent": 0,
            "storageUtilizationGibPerNode": 0
          }
        }
      },
      "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "location": "string",
      "name": "string",
      "serveNodes": 0,
      "state": "STATE_NOT_KNOWN"
    }
  ],
  "failedLocations": [
    "string"
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigtableadminprojectsinstancesclusterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClustersResponse](#schemalistclustersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigtableadmin.projects.instances.clusters.create

<a id="opIdbigtableadmin.projects.instances.clusters.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterConfig": {
      "clusterAutoscalingConfig": {
        "autoscalingLimits": {
          "maxServeNodes": 0,
          "minServeNodes": 0
        },
        "autoscalingTargets": {
          "cpuUtilizationPercent": 0,
          "storageUtilizationGibPerNode": 0
        }
      }
    },
    "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "location": "string",
    "name": "string",
    "serveNodes": 0
  }'
```

`POST /v2/{parent}/clusters`

Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

> Body parameter

```json
{
  "clusterConfig": {
    "clusterAutoscalingConfig": {
      "autoscalingLimits": {
        "maxServeNodes": 0,
        "minServeNodes": 0
      },
      "autoscalingTargets": {
        "cpuUtilizationPercent": 0,
        "storageUtilizationGibPerNode": 0
      }
    }
  },
  "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
  "encryptionConfig": {
    "kmsKeyName": "string"
  },
  "location": "string",
  "name": "string",
  "serveNodes": 0
}
```

<h3 id="bigtableadminprojectsinstancesclusterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`.|
|clusterId|query|string|false|Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.|
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
|body|body|[Cluster](#schemacluster)|false|none|
|» clusterConfig|body|[ClusterConfig](#schemaclusterconfig)|false|Configuration for this cluster.|
|» defaultStorageType|body|string|false|Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.|
|» encryptionConfig|body|[EncryptionConfig](#schemaencryptionconfig)|false|Immutable. The encryption configuration for CMEK-protected clusters.|
|» location|body|string|false|Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`.|
|» name|body|string|false|The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.|
|» serveNodes|body|integer(int32)|false|The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» defaultStorageType|STORAGE_TYPE_UNSPECIFIED|
|» defaultStorageType|SSD|
|» defaultStorageType|HDD|

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

<h3 id="bigtableadminprojectsinstancesclusterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.clusters.hotTablets.list

<a id="opIdbigtableadmin.projects.instances.clusters.hotTablets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/hotTablets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/hotTablets`

Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.

<h3 id="bigtableadminprojectsinstancesclustershottabletslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The cluster name to list hot tablets. Value is in the following form: `projects/{project}/instances/{instance}/clusters/{cluster}`.|
|endTime|query|string|false|The end time to list hot tablets.|
|pageSize|query|integer|false|Maximum number of results per page. A page_size that is empty or zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls do not need a page_size field. If a page_size is set in subsequent calls, it must match the page_size given in the first request.|
|pageToken|query|string|false|The value of `next_page_token` returned by a previous call.|
|startTime|query|string|false|The start time to list hot tablets. The hot tablets in the response will have start times between the requested start time and end time. Start time defaults to Now if it is unset, and end time defaults to Now - 24 hours if it is unset. The start time should be less than the end time, and the maximum allowed time range between start time and end time is 48 hours. Start time and end time should have values between Now and Now - 14 days.|
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
  "hotTablets": [
    {
      "endKey": "string",
      "endTime": "string",
      "name": "string",
      "nodeCpuUsagePercent": 0,
      "startKey": "string",
      "startTime": "string",
      "tableName": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigtableadminprojectsinstancesclustershottabletslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHotTabletsResponse](#schemalisthottabletsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.list

<a id="opIdbigtableadmin.projects.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/instances`

Lists information about instances in a project.

<h3 id="bigtableadminprojectsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the project for which a list of instances is requested. Values are of the form `projects/{project}`.|
|pageToken|query|string|false|DEPRECATED: This field is unused and ignored.|
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
  "failedLocations": [
    "string"
  ],
  "instances": [
    {
      "createTime": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "satisfiesPzs": true,
      "state": "STATE_NOT_KNOWN",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigtableadminprojectsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstancesResponse](#schemalistinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigtableadmin.projects.instances.create

<a id="opIdbigtableadmin.projects.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusters": {
      "property1": {
        "clusterConfig": {
          "clusterAutoscalingConfig": {
            "autoscalingLimits": {
              "maxServeNodes": 0,
              "minServeNodes": 0
            },
            "autoscalingTargets": {
              "cpuUtilizationPercent": 0,
              "storageUtilizationGibPerNode": 0
            }
          }
        },
        "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
        "encryptionConfig": {
          "kmsKeyName": "string"
        },
        "location": "string",
        "name": "string",
        "serveNodes": 0
      },
      "property2": {
        "clusterConfig": {
          "clusterAutoscalingConfig": {
            "autoscalingLimits": {
              "maxServeNodes": 0,
              "minServeNodes": 0
            },
            "autoscalingTargets": {
              "cpuUtilizationPercent": 0,
              "storageUtilizationGibPerNode": 0
            }
          }
        },
        "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
        "encryptionConfig": {
          "kmsKeyName": "string"
        },
        "location": "string",
        "name": "string",
        "serveNodes": 0
      }
    },
    "instance": {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "instanceId": "string",
    "parent": "string"
  }'
```

`POST /v2/{parent}/instances`

Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

> Body parameter

```json
{
  "clusters": {
    "property1": {
      "clusterConfig": {
        "clusterAutoscalingConfig": {
          "autoscalingLimits": {
            "maxServeNodes": 0,
            "minServeNodes": 0
          },
          "autoscalingTargets": {
            "cpuUtilizationPercent": 0,
            "storageUtilizationGibPerNode": 0
          }
        }
      },
      "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "location": "string",
      "name": "string",
      "serveNodes": 0
    },
    "property2": {
      "clusterConfig": {
        "clusterAutoscalingConfig": {
          "autoscalingLimits": {
            "maxServeNodes": 0,
            "minServeNodes": 0
          },
          "autoscalingTargets": {
            "cpuUtilizationPercent": 0,
            "storageUtilizationGibPerNode": 0
          }
        }
      },
      "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "location": "string",
      "name": "string",
      "serveNodes": 0
    }
  },
  "instance": {
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "instanceId": "string",
  "parent": "string"
}
```

<h3 id="bigtableadminprojectsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`.|
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
|body|body|[CreateInstanceRequest](#schemacreateinstancerequest)|false|none|
|» clusters|body|object|false|Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank.|
|» » **additionalProperties**|body|[Cluster](#schemacluster)|false|A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.|
|» instance|body|[Instance](#schemainstance)|false|Required. The instance to create. Fields marked `OutputOnly` must be left blank.|
|» instanceId|body|string|false|Required. The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`.|
|» parent|body|string|false|Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`.|

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

<h3 id="bigtableadminprojectsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.instance ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.cluster ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.list

<a id="opIdbigtableadmin.projects.instances.tables.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/tables \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/tables`

Lists all tables served from a specified instance.

<h3 id="bigtableadminprojectsinstancestableslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the instance for which tables should be listed. Values are of the form `projects/{project}/instances/{instance}`.|
|pageSize|query|integer|false|Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.|
|pageToken|query|string|false|The value of `next_page_token` returned by a previous call.|
|view|query|string|false|The view to be applied to the returned tables' fields. Only NAME_ONLY view (default), REPLICATION_VIEW and ENCRYPTION_VIEW are supported.|
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
|view|VIEW_UNSPECIFIED|
|view|NAME_ONLY|
|view|SCHEMA_VIEW|
|view|REPLICATION_VIEW|
|view|ENCRYPTION_VIEW|
|view|STATS_VIEW|
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
  "nextPageToken": "string",
  "tables": [
    {
      "clusterStates": {
        "property1": {
          "encryptionInfo": [
            {
              "encryptionStatus": {
                "code": 0,
                "details": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "message": "string"
              },
              "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
              "kmsKeyVersion": "string"
            }
          ],
          "replicationState": "STATE_NOT_KNOWN"
        },
        "property2": {
          "encryptionInfo": [
            {
              "encryptionStatus": {
                "code": 0,
                "details": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "message": "string"
              },
              "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
              "kmsKeyVersion": "string"
            }
          ],
          "replicationState": "STATE_NOT_KNOWN"
        }
      },
      "columnFamilies": {
        "property1": {
          "gcRule": {
            "intersection": {},
            "maxAge": "string",
            "maxNumVersions": 0,
            "union": {}
          },
          "stats": {
            "averageCellsPerColumn": 0,
            "averageColumnsPerRow": 0,
            "logicalDataBytes": "string"
          }
        },
        "property2": {
          "gcRule": {
            "intersection": {},
            "maxAge": "string",
            "maxNumVersions": 0,
            "union": {}
          },
          "stats": {
            "averageCellsPerColumn": 0,
            "averageColumnsPerRow": 0,
            "logicalDataBytes": "string"
          }
        }
      },
      "deletionProtection": true,
      "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
      "name": "string",
      "restoreInfo": {
        "backupInfo": {
          "backup": "string",
          "endTime": "string",
          "sourceBackup": "string",
          "sourceTable": "string",
          "startTime": "string"
        },
        "sourceType": "RESTORE_SOURCE_TYPE_UNSPECIFIED"
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string",
        "rowCount": "string"
      }
    }
  ]
}
```

<h3 id="bigtableadminprojectsinstancestableslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTablesResponse](#schemalisttablesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigtableadmin.projects.instances.tables.create

<a id="opIdbigtableadmin.projects.instances.tables.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/tables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "initialSplits": [
      {
        "key": "string"
      }
    ],
    "table": {
      "columnFamilies": {
        "property1": {
          "gcRule": {
            "intersection": {},
            "maxAge": "string",
            "maxNumVersions": 0,
            "union": {}
          },
          "stats": {
            "averageCellsPerColumn": 0,
            "averageColumnsPerRow": 0,
            "logicalDataBytes": "string"
          }
        },
        "property2": {
          "gcRule": {
            "intersection": {},
            "maxAge": "string",
            "maxNumVersions": 0,
            "union": {}
          },
          "stats": {
            "averageCellsPerColumn": 0,
            "averageColumnsPerRow": 0,
            "logicalDataBytes": "string"
          }
        }
      },
      "deletionProtection": true,
      "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
      "name": "string",
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string",
        "rowCount": "string"
      }
    },
    "tableId": "string"
  }'
```

`POST /v2/{parent}/tables`

Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.

> Body parameter

```json
{
  "initialSplits": [
    {
      "key": "string"
    }
  ],
  "table": {
    "columnFamilies": {
      "property1": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      },
      "property2": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      }
    },
    "deletionProtection": true,
    "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
    "name": "string",
    "stats": {
      "averageCellsPerColumn": 0,
      "averageColumnsPerRow": 0,
      "logicalDataBytes": "string",
      "rowCount": "string"
    }
  },
  "tableId": "string"
}
```

<h3 id="bigtableadminprojectsinstancestablescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the instance in which to create the table. Values are of the form `projects/{project}/instances/{instance}`.|
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
|body|body|[CreateTableRequest](#schemacreatetablerequest)|false|none|
|» initialSplits|body|[[Split](#schemasplit)]|false|The optional list of row keys that will be used to initially split the table into several tablets (tablets are similar to HBase regions). Given two split keys, `s1` and `s2`, three tablets will be created, spanning the key ranges: `[, s1), [s1, s2), [s2, )`. Example: * Row keys := `["a", "apple", "custom", "customer_1", "customer_2",` `"other", "zz"]` * initial_split_keys := `["apple", "customer_1", "customer_2", "other"]` * Key assignment: - Tablet 1 `[, apple) => {"a"}.` - Tablet 2 `[apple, customer_1) => {"apple", "custom"}.` - Tablet 3 `[customer_1, customer_2) => {"customer_1"}.` - Tablet 4 `[customer_2, other) => {"customer_2"}.` - Tablet 5 `[other, ) => {"other", "zz"}.`|
|» table|body|[Table](#schematable)|false|Required. The Table to create.|
|» tableId|body|string|false|Required. The name by which the new table should be referred to within the parent instance, e.g., `foobar` rather than `{parent}/tables/foobar`. Maximum 50 characters.|

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
  "clusterStates": {
    "property1": {
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "replicationState": "STATE_NOT_KNOWN"
    },
    "property2": {
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "replicationState": "STATE_NOT_KNOWN"
    }
  },
  "columnFamilies": {
    "property1": {
      "gcRule": {
        "intersection": {},
        "maxAge": "string",
        "maxNumVersions": 0,
        "union": {}
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string"
      }
    },
    "property2": {
      "gcRule": {
        "intersection": {},
        "maxAge": "string",
        "maxNumVersions": 0,
        "union": {}
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string"
      }
    }
  },
  "deletionProtection": true,
  "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
  "name": "string",
  "restoreInfo": {
    "backupInfo": {
      "backup": "string",
      "endTime": "string",
      "sourceBackup": "string",
      "sourceTable": "string",
      "startTime": "string"
    },
    "sourceType": "RESTORE_SOURCE_TYPE_UNSPECIFIED"
  },
  "stats": {
    "averageCellsPerColumn": 0,
    "averageColumnsPerRow": 0,
    "logicalDataBytes": "string",
    "rowCount": "string"
  }
}
```

<h3 id="bigtableadminprojectsinstancestablescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Table](#schematable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.restore

<a id="opIdbigtableadmin.projects.instances.tables.restore"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/tables:restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backup": "string",
    "tableId": "string"
  }'
```

`POST /v2/{parent}/tables:restore`

Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.

> Body parameter

```json
{
  "backup": "string",
  "tableId": "string"
}
```

<h3 id="bigtableadminprojectsinstancestablesrestore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the instance in which to create the restored table. Values are of the form `projects//instances/`.|
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
|body|body|[RestoreTableRequest](#schemarestoretablerequest)|false|none|
|» backup|body|string|false|Name of the backup from which to restore. Values are of the form `projects//instances//clusters//backups/`.|
|» tableId|body|string|false|Required. The id of the table to create and restore to. This table must not already exist. The `table_id` appended to `parent` forms the full table name of the form `projects//instances//tables/`.|

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

<h3 id="bigtableadminprojectsinstancestablesrestore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.getIamPolicy

<a id="opIdbigtableadmin.projects.instances.tables.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:getIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "requestedPolicyVersion": 0
    }
  }'
```

`POST /v2/{resource}:getIamPolicy`

Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="bigtableadminprojectsinstancestablesgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GetIamPolicyRequest](#schemagetiampolicyrequest)|false|none|
|» options|body|[GetPolicyOptions](#schemagetpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

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

<h3 id="bigtableadminprojectsinstancestablesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.setIamPolicy

<a id="opIdbigtableadmin.projects.instances.tables.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:setIamPolicy \
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

`POST /v2/{resource}:setIamPolicy`

Sets the access control policy on a Table resource. Replaces any existing policy.

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

<h3 id="bigtableadminprojectsinstancestablessetiampolicy-parameters">Parameters</h3>

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
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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

<h3 id="bigtableadminprojectsinstancestablessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigtableadmin.projects.instances.tables.testIamPermissions

<a id="opIdbigtableadmin.projects.instances.tables.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:testIamPermissions \
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

`POST /v2/{resource}:testIamPermissions`

Returns permissions that the caller has on the specified table resource.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="bigtableadminprojectsinstancestablestestiampermissions-parameters">Parameters</h3>

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

<h3 id="bigtableadminprojectsinstancestablestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-bigtable.admin.table ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AppProfile">AppProfile</h2>
<!-- backwards compatibility -->
<a id="schemaappprofile"></a>
<a id="schema_AppProfile"></a>
<a id="tocSappprofile"></a>
<a id="tocsappprofile"></a>

```json
{
  "description": "string",
  "etag": "string",
  "multiClusterRoutingUseAny": {
    "clusterIds": [
      "string"
    ]
  },
  "name": "string",
  "singleClusterRouting": {
    "allowTransactionalWrites": true,
    "clusterId": "string"
  }
}
```

A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Long form description of the use case for this AppProfile.|
|etag|string|false|none|Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details.|
|multiClusterRoutingUseAny|[MultiClusterRoutingUseAny](#schemamulticlusterroutinguseany)|false|none|Use a multi-cluster routing policy.|
|name|string|false|none|The unique name of the app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`.|
|singleClusterRouting|[SingleClusterRouting](#schemasingleclusterrouting)|false|none|Use a single-cluster routing policy.|

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

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[AuditLogConfig](#schemaauditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

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

<h2 id="tocS_AutoscalingLimits">AutoscalingLimits</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinglimits"></a>
<a id="schema_AutoscalingLimits"></a>
<a id="tocSautoscalinglimits"></a>
<a id="tocsautoscalinglimits"></a>

```json
{
  "maxServeNodes": 0,
  "minServeNodes": 0
}
```

Limits for the number of nodes a Cluster can autoscale up/down to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxServeNodes|integer(int32)|false|none|Required. Maximum number of nodes to scale up to.|
|minServeNodes|integer(int32)|false|none|Required. Minimum number of nodes to scale down to.|

<h2 id="tocS_AutoscalingTargets">AutoscalingTargets</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingtargets"></a>
<a id="schema_AutoscalingTargets"></a>
<a id="tocSautoscalingtargets"></a>
<a id="tocsautoscalingtargets"></a>

```json
{
  "cpuUtilizationPercent": 0,
  "storageUtilizationGibPerNode": 0
}
```

The Autoscaling targets for a Cluster. These determine the recommended nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuUtilizationPercent|integer(int32)|false|none|The cpu utilization that the Autoscaler should be trying to achieve. This number is on a scale from 0 (no utilization) to 100 (total utilization), and is limited between 10 and 80, otherwise it will return INVALID_ARGUMENT error.|
|storageUtilizationGibPerNode|integer(int32)|false|none|The storage utilization that the Autoscaler should be trying to achieve. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16TiB) for an HDD cluster, otherwise it will return INVALID_ARGUMENT error. If this value is set to 0, it will be treated as if it were set to the default value: 2560 for SSD, 8192 for HDD.|

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "encryptionInfo": {
    "encryptionStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
    "kmsKeyVersion": "string"
  },
  "endTime": "string",
  "expireTime": "string",
  "name": "string",
  "sizeBytes": "string",
  "sourceBackup": "string",
  "sourceTable": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

A backup of a Cloud Bigtable table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionInfo|[EncryptionInfo](#schemaencryptioninfo)|false|none|Output only. The encryption information for the backup.|
|endTime|string(google-datetime)|false|read-only|Output only. `end_time` is the time that the backup was finished. The row data in the backup will be no newer than this timestamp.|
|expireTime|string(google-datetime)|false|none|Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.|
|name|string|false|none|A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.|
|sizeBytes|string(int64)|false|read-only|Output only. Size of the backup in bytes.|
|sourceBackup|string|false|read-only|Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/.|
|sourceTable|string|false|none|Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project}/instances/{instance}/tables/{source_table}`.|
|startTime|string(google-datetime)|false|read-only|Output only. `start_time` is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp.|
|state|string|false|read-only|Output only. The current state of the backup.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|

<h2 id="tocS_BackupInfo">BackupInfo</h2>
<!-- backwards compatibility -->
<a id="schemabackupinfo"></a>
<a id="schema_BackupInfo"></a>
<a id="tocSbackupinfo"></a>
<a id="tocsbackupinfo"></a>

```json
{
  "backup": "string",
  "endTime": "string",
  "sourceBackup": "string",
  "sourceTable": "string",
  "startTime": "string"
}
```

Information about a backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|string|false|read-only|Output only. Name of the backup.|
|endTime|string(google-datetime)|false|read-only|Output only. This time that the backup was finished. Row data in the backup will be no newer than this timestamp.|
|sourceBackup|string|false|read-only|Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/.|
|sourceTable|string|false|read-only|Output only. Name of the table the backup was created from.|
|startTime|string(google-datetime)|false|read-only|Output only. The time that the backup was started. Row data in the backup will be no older than this timestamp.|

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

<h2 id="tocS_CheckConsistencyRequest">CheckConsistencyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckconsistencyrequest"></a>
<a id="schema_CheckConsistencyRequest"></a>
<a id="tocScheckconsistencyrequest"></a>
<a id="tocscheckconsistencyrequest"></a>

```json
{
  "consistencyToken": "string"
}
```

Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consistencyToken|string|false|none|Required. The token created using GenerateConsistencyToken for the Table.|

<h2 id="tocS_CheckConsistencyResponse">CheckConsistencyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckconsistencyresponse"></a>
<a id="schema_CheckConsistencyResponse"></a>
<a id="tocScheckconsistencyresponse"></a>
<a id="tocscheckconsistencyresponse"></a>

```json
{
  "consistent": true
}
```

Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consistent|boolean|false|none|True only if the token is consistent. A token is consistent if replication has caught up with the restrictions specified in the request.|

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "clusterConfig": {
    "clusterAutoscalingConfig": {
      "autoscalingLimits": {
        "maxServeNodes": 0,
        "minServeNodes": 0
      },
      "autoscalingTargets": {
        "cpuUtilizationPercent": 0,
        "storageUtilizationGibPerNode": 0
      }
    }
  },
  "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
  "encryptionConfig": {
    "kmsKeyName": "string"
  },
  "location": "string",
  "name": "string",
  "serveNodes": 0,
  "state": "STATE_NOT_KNOWN"
}
```

A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterConfig|[ClusterConfig](#schemaclusterconfig)|false|none|Configuration for this cluster.|
|defaultStorageType|string|false|none|Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.|
|encryptionConfig|[EncryptionConfig](#schemaencryptionconfig)|false|none|Immutable. The encryption configuration for CMEK-protected clusters.|
|location|string|false|none|Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`.|
|name|string|false|none|The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.|
|serveNodes|integer(int32)|false|none|The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.|
|state|string|false|read-only|Output only. The current state of the cluster.|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultStorageType|STORAGE_TYPE_UNSPECIFIED|
|defaultStorageType|SSD|
|defaultStorageType|HDD|
|state|STATE_NOT_KNOWN|
|state|READY|
|state|CREATING|
|state|RESIZING|
|state|DISABLED|

<h2 id="tocS_ClusterAutoscalingConfig">ClusterAutoscalingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaclusterautoscalingconfig"></a>
<a id="schema_ClusterAutoscalingConfig"></a>
<a id="tocSclusterautoscalingconfig"></a>
<a id="tocsclusterautoscalingconfig"></a>

```json
{
  "autoscalingLimits": {
    "maxServeNodes": 0,
    "minServeNodes": 0
  },
  "autoscalingTargets": {
    "cpuUtilizationPercent": 0,
    "storageUtilizationGibPerNode": 0
  }
}
```

Autoscaling config for a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoscalingLimits|[AutoscalingLimits](#schemaautoscalinglimits)|false|none|Required. Autoscaling limits for this cluster.|
|autoscalingTargets|[AutoscalingTargets](#schemaautoscalingtargets)|false|none|Required. Autoscaling targets for this cluster.|

<h2 id="tocS_ClusterConfig">ClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfig"></a>
<a id="schema_ClusterConfig"></a>
<a id="tocSclusterconfig"></a>
<a id="tocsclusterconfig"></a>

```json
{
  "clusterAutoscalingConfig": {
    "autoscalingLimits": {
      "maxServeNodes": 0,
      "minServeNodes": 0
    },
    "autoscalingTargets": {
      "cpuUtilizationPercent": 0,
      "storageUtilizationGibPerNode": 0
    }
  }
}
```

Configuration for a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterAutoscalingConfig|[ClusterAutoscalingConfig](#schemaclusterautoscalingconfig)|false|none|Autoscaling configuration for this cluster.|

<h2 id="tocS_ClusterState">ClusterState</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstate"></a>
<a id="schema_ClusterState"></a>
<a id="tocSclusterstate"></a>
<a id="tocsclusterstate"></a>

```json
{
  "encryptionInfo": [
    {
      "encryptionStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
      "kmsKeyVersion": "string"
    }
  ],
  "replicationState": "STATE_NOT_KNOWN"
}
```

The state of a table's data in a particular cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionInfo|[[EncryptionInfo](#schemaencryptioninfo)]|false|read-only|Output only. The encryption information for the table in this cluster. If the encryption key protecting this resource is customer managed, then its version can be rotated in Cloud Key Management Service (Cloud KMS). The primary version of the key and its status will be reflected here when changes propagate from Cloud KMS.|
|replicationState|string|false|read-only|Output only. The state of replication for the table in this cluster.|

#### Enumerated Values

|Property|Value|
|---|---|
|replicationState|STATE_NOT_KNOWN|
|replicationState|INITIALIZING|
|replicationState|PLANNED_MAINTENANCE|
|replicationState|UNPLANNED_MAINTENANCE|
|replicationState|READY|
|replicationState|READY_OPTIMIZING|

<h2 id="tocS_ColumnFamily">ColumnFamily</h2>
<!-- backwards compatibility -->
<a id="schemacolumnfamily"></a>
<a id="schema_ColumnFamily"></a>
<a id="tocScolumnfamily"></a>
<a id="tocscolumnfamily"></a>

```json
{
  "gcRule": {
    "intersection": {},
    "maxAge": "string",
    "maxNumVersions": 0,
    "union": {}
  },
  "stats": {
    "averageCellsPerColumn": 0,
    "averageColumnsPerRow": 0,
    "logicalDataBytes": "string"
  }
}
```

A set of columns within a table which share a common configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcRule|[GcRule](#schemagcrule)|false|none|Garbage collection rule specified as a protobuf. Must serialize to at most 500 bytes. NOTE: Garbage collection executes opportunistically in the background, and so it's possible for reads to return a cell even if it matches the active GC expression for its family.|
|stats|[ColumnFamilyStats](#schemacolumnfamilystats)|false|none|Only available with STATS_VIEW, this includes summary statistics about column family contents. For statistics over an entire table, see TableStats above.|

<h2 id="tocS_ColumnFamilyStats">ColumnFamilyStats</h2>
<!-- backwards compatibility -->
<a id="schemacolumnfamilystats"></a>
<a id="schema_ColumnFamilyStats"></a>
<a id="tocScolumnfamilystats"></a>
<a id="tocscolumnfamilystats"></a>

```json
{
  "averageCellsPerColumn": 0,
  "averageColumnsPerRow": 0,
  "logicalDataBytes": "string"
}
```

Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageCellsPerColumn|number(double)|false|none|How many cells are present per column qualifier in this column family, averaged over all rows containing any column in the column family. e.g. For column family "family" in a table with 3 rows: * A row with 3 cells in "family:col" and 1 cell in "other:col" (3 cells / 1 column in "family") * A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (8 cells / 2 columns in "family") * A row with 3 cells in "other:col" (0 columns in "family", "family" not present) would report (3 + 8 + 0)/(1 + 2 + 0) = 3.66 in this field.|
|averageColumnsPerRow|number(double)|false|none|How many column qualifiers are present in this column family, averaged over all rows in the table. e.g. For column family "family" in a table with 3 rows: * A row with cells in "family:col" and "other:col" (1 column in "family") * A row with cells in "family:col", "family:other_col", and "other:data" (2 columns in "family") * A row with cells in "other:col" (0 columns in "family", "family" not present) would report (1 + 2 + 0)/3 = 1.5 in this field.|
|logicalDataBytes|string(int64)|false|none|How much space the data in the column family occupies. This is roughly how many bytes would be needed to read the contents of the entire column family (e.g. by streaming all contents out).|

<h2 id="tocS_CopyBackupMetadata">CopyBackupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacopybackupmetadata"></a>
<a id="schema_CopyBackupMetadata"></a>
<a id="tocScopybackupmetadata"></a>
<a id="tocscopybackupmetadata"></a>

```json
{
  "name": "string",
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  },
  "sourceBackupInfo": {
    "backup": "string",
    "endTime": "string",
    "sourceBackup": "string",
    "sourceTable": "string",
    "startTime": "string"
  }
}
```

Metadata type for the google.longrunning.Operation returned by CopyBackup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the backup being created through the copy operation. Values are of the form `projects//instances//clusters//backups/`.|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|The progress of the CopyBackup operation.|
|sourceBackupInfo|[BackupInfo](#schemabackupinfo)|false|none|Information about the source backup that is being copied from.|

<h2 id="tocS_CopyBackupRequest">CopyBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopybackuprequest"></a>
<a id="schema_CopyBackupRequest"></a>
<a id="tocScopybackuprequest"></a>
<a id="tocscopybackuprequest"></a>

```json
{
  "backupId": "string",
  "expireTime": "string",
  "sourceBackup": "string"
}
```

The request for CopyBackup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupId|string|false|none|Required. The id of the new backup. The `backup_id` along with `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*.|
|expireTime|string(google-datetime)|false|none|Required. Required. The expiration time of the copied backup with microsecond granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.|
|sourceBackup|string|false|none|Required. The source backup to be copied from. The source backup needs to be in READY state for it to be copied. Copying a copied backup is not allowed. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//clusters//backups/`.|

<h2 id="tocS_CreateBackupMetadata">CreateBackupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupmetadata"></a>
<a id="schema_CreateBackupMetadata"></a>
<a id="tocScreatebackupmetadata"></a>
<a id="tocscreatebackupmetadata"></a>

```json
{
  "endTime": "string",
  "name": "string",
  "sourceTable": "string",
  "startTime": "string"
}
```

Metadata type for the operation returned by CreateBackup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|If set, the time at which this operation finished or was cancelled.|
|name|string|false|none|The name of the backup being created.|
|sourceTable|string|false|none|The name of the table the backup is created from.|
|startTime|string(google-datetime)|false|none|The time at which this operation started.|

<h2 id="tocS_CreateClusterMetadata">CreateClusterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateclustermetadata"></a>
<a id="schema_CreateClusterMetadata"></a>
<a id="tocScreateclustermetadata"></a>
<a id="tocscreateclustermetadata"></a>

```json
{
  "finishTime": "string",
  "originalRequest": {
    "cluster": {
      "clusterConfig": {
        "clusterAutoscalingConfig": {
          "autoscalingLimits": {
            "maxServeNodes": 0,
            "minServeNodes": 0
          },
          "autoscalingTargets": {
            "cpuUtilizationPercent": 0,
            "storageUtilizationGibPerNode": 0
          }
        }
      },
      "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "location": "string",
      "name": "string",
      "serveNodes": 0,
      "state": "STATE_NOT_KNOWN"
    },
    "clusterId": "string",
    "parent": "string"
  },
  "requestTime": "string",
  "tables": {
    "property1": {
      "estimatedCopiedBytes": "string",
      "estimatedSizeBytes": "string",
      "state": "STATE_UNSPECIFIED"
    },
    "property2": {
      "estimatedCopiedBytes": "string",
      "estimatedSizeBytes": "string",
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

The metadata for the Operation returned by CreateCluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finishTime|string(google-datetime)|false|none|The time at which the operation failed or was completed successfully.|
|originalRequest|[CreateClusterRequest](#schemacreateclusterrequest)|false|none|The request that prompted the initiation of this CreateCluster operation.|
|requestTime|string(google-datetime)|false|none|The time at which the original request was received.|
|tables|object|false|none|Keys: the full `name` of each table that existed in the instance when CreateCluster was first called, i.e. `projects//instances//tables/`. Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one. Values: information on how much of a table's data has been copied to the newly-created cluster so far.|

<h2 id="tocS_CreateClusterRequest">CreateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterrequest"></a>
<a id="schema_CreateClusterRequest"></a>
<a id="tocScreateclusterrequest"></a>
<a id="tocscreateclusterrequest"></a>

```json
{
  "cluster": {
    "clusterConfig": {
      "clusterAutoscalingConfig": {
        "autoscalingLimits": {
          "maxServeNodes": 0,
          "minServeNodes": 0
        },
        "autoscalingTargets": {
          "cpuUtilizationPercent": 0,
          "storageUtilizationGibPerNode": 0
        }
      }
    },
    "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "location": "string",
    "name": "string",
    "serveNodes": 0,
    "state": "STATE_NOT_KNOWN"
  },
  "clusterId": "string",
  "parent": "string"
}
```

Request message for BigtableInstanceAdmin.CreateCluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|[Cluster](#schemacluster)|false|none|Required. The cluster to be created. Fields marked `OutputOnly` must be left blank.|
|clusterId|string|false|none|Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.|
|parent|string|false|none|Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`.|

<h2 id="tocS_CreateInstanceMetadata">CreateInstanceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancemetadata"></a>
<a id="schema_CreateInstanceMetadata"></a>
<a id="tocScreateinstancemetadata"></a>
<a id="tocscreateinstancemetadata"></a>

```json
{
  "finishTime": "string",
  "originalRequest": {
    "clusters": {
      "property1": {
        "clusterConfig": {
          "clusterAutoscalingConfig": {
            "autoscalingLimits": {
              "maxServeNodes": 0,
              "minServeNodes": 0
            },
            "autoscalingTargets": {
              "cpuUtilizationPercent": 0,
              "storageUtilizationGibPerNode": 0
            }
          }
        },
        "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
        "encryptionConfig": {
          "kmsKeyName": "string"
        },
        "location": "string",
        "name": "string",
        "serveNodes": 0,
        "state": "STATE_NOT_KNOWN"
      },
      "property2": {
        "clusterConfig": {
          "clusterAutoscalingConfig": {
            "autoscalingLimits": {
              "maxServeNodes": 0,
              "minServeNodes": 0
            },
            "autoscalingTargets": {
              "cpuUtilizationPercent": 0,
              "storageUtilizationGibPerNode": 0
            }
          }
        },
        "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
        "encryptionConfig": {
          "kmsKeyName": "string"
        },
        "location": "string",
        "name": "string",
        "serveNodes": 0,
        "state": "STATE_NOT_KNOWN"
      }
    },
    "instance": {
      "createTime": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "satisfiesPzs": true,
      "state": "STATE_NOT_KNOWN",
      "type": "TYPE_UNSPECIFIED"
    },
    "instanceId": "string",
    "parent": "string"
  },
  "requestTime": "string"
}
```

The metadata for the Operation returned by CreateInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finishTime|string(google-datetime)|false|none|The time at which the operation failed or was completed successfully.|
|originalRequest|[CreateInstanceRequest](#schemacreateinstancerequest)|false|none|The request that prompted the initiation of this CreateInstance operation.|
|requestTime|string(google-datetime)|false|none|The time at which the original request was received.|

<h2 id="tocS_CreateInstanceRequest">CreateInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancerequest"></a>
<a id="schema_CreateInstanceRequest"></a>
<a id="tocScreateinstancerequest"></a>
<a id="tocscreateinstancerequest"></a>

```json
{
  "clusters": {
    "property1": {
      "clusterConfig": {
        "clusterAutoscalingConfig": {
          "autoscalingLimits": {
            "maxServeNodes": 0,
            "minServeNodes": 0
          },
          "autoscalingTargets": {
            "cpuUtilizationPercent": 0,
            "storageUtilizationGibPerNode": 0
          }
        }
      },
      "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "location": "string",
      "name": "string",
      "serveNodes": 0,
      "state": "STATE_NOT_KNOWN"
    },
    "property2": {
      "clusterConfig": {
        "clusterAutoscalingConfig": {
          "autoscalingLimits": {
            "maxServeNodes": 0,
            "minServeNodes": 0
          },
          "autoscalingTargets": {
            "cpuUtilizationPercent": 0,
            "storageUtilizationGibPerNode": 0
          }
        }
      },
      "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "location": "string",
      "name": "string",
      "serveNodes": 0,
      "state": "STATE_NOT_KNOWN"
    }
  },
  "instance": {
    "createTime": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "satisfiesPzs": true,
    "state": "STATE_NOT_KNOWN",
    "type": "TYPE_UNSPECIFIED"
  },
  "instanceId": "string",
  "parent": "string"
}
```

Request message for BigtableInstanceAdmin.CreateInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|object|false|none|Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank.|
|instance|[Instance](#schemainstance)|false|none|Required. The instance to create. Fields marked `OutputOnly` must be left blank.|
|instanceId|string|false|none|Required. The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`.|
|parent|string|false|none|Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`.|

<h2 id="tocS_CreateTableRequest">CreateTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetablerequest"></a>
<a id="schema_CreateTableRequest"></a>
<a id="tocScreatetablerequest"></a>
<a id="tocscreatetablerequest"></a>

```json
{
  "initialSplits": [
    {
      "key": "string"
    }
  ],
  "table": {
    "clusterStates": {
      "property1": {
        "encryptionInfo": [
          {
            "encryptionStatus": {
              "code": 0,
              "details": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "message": "string"
            },
            "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
            "kmsKeyVersion": "string"
          }
        ],
        "replicationState": "STATE_NOT_KNOWN"
      },
      "property2": {
        "encryptionInfo": [
          {
            "encryptionStatus": {
              "code": 0,
              "details": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "message": "string"
            },
            "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
            "kmsKeyVersion": "string"
          }
        ],
        "replicationState": "STATE_NOT_KNOWN"
      }
    },
    "columnFamilies": {
      "property1": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      },
      "property2": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      }
    },
    "deletionProtection": true,
    "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
    "name": "string",
    "restoreInfo": {
      "backupInfo": {
        "backup": "string",
        "endTime": "string",
        "sourceBackup": "string",
        "sourceTable": "string",
        "startTime": "string"
      },
      "sourceType": "RESTORE_SOURCE_TYPE_UNSPECIFIED"
    },
    "stats": {
      "averageCellsPerColumn": 0,
      "averageColumnsPerRow": 0,
      "logicalDataBytes": "string",
      "rowCount": "string"
    }
  },
  "tableId": "string"
}
```

Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|initialSplits|[[Split](#schemasplit)]|false|none|The optional list of row keys that will be used to initially split the table into several tablets (tablets are similar to HBase regions). Given two split keys, `s1` and `s2`, three tablets will be created, spanning the key ranges: `[, s1), [s1, s2), [s2, )`. Example: * Row keys := `["a", "apple", "custom", "customer_1", "customer_2",` `"other", "zz"]` * initial_split_keys := `["apple", "customer_1", "customer_2", "other"]` * Key assignment: - Tablet 1 `[, apple) => {"a"}.` - Tablet 2 `[apple, customer_1) => {"apple", "custom"}.` - Tablet 3 `[customer_1, customer_2) => {"customer_1"}.` - Tablet 4 `[customer_2, other) => {"customer_2"}.` - Tablet 5 `[other, ) => {"other", "zz"}.`|
|table|[Table](#schematable)|false|none|Required. The Table to create.|
|tableId|string|false|none|Required. The name by which the new table should be referred to within the parent instance, e.g., `foobar` rather than `{parent}/tables/foobar`. Maximum 50 characters.|

<h2 id="tocS_DropRowRangeRequest">DropRowRangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadroprowrangerequest"></a>
<a id="schema_DropRowRangeRequest"></a>
<a id="tocSdroprowrangerequest"></a>
<a id="tocsdroprowrangerequest"></a>

```json
{
  "deleteAllDataFromTable": true,
  "rowKeyPrefix": "string"
}
```

Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteAllDataFromTable|boolean|false|none|Delete all rows in the table. Setting this to false is a no-op.|
|rowKeyPrefix|string(byte)|false|none|Delete all rows that start with this row key prefix. Prefix cannot be zero length.|

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
  "kmsKeyName": "string"
}
```

Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyName|string|false|none|Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the `cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. Values are of the form `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}`|

<h2 id="tocS_EncryptionInfo">EncryptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaencryptioninfo"></a>
<a id="schema_EncryptionInfo"></a>
<a id="tocSencryptioninfo"></a>
<a id="tocsencryptioninfo"></a>

```json
{
  "encryptionStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
  "kmsKeyVersion": "string"
}
```

Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionStatus|[Status](#schemastatus)|false|none|Output only. The status of encrypt/decrypt calls on underlying data for this resource. Regardless of status, the existing data is always encrypted at rest.|
|encryptionType|string|false|read-only|Output only. The type of encryption used to protect this resource.|
|kmsKeyVersion|string|false|read-only|Output only. The version of the Cloud KMS key specified in the parent cluster that is in use for the data underlying this table.|

#### Enumerated Values

|Property|Value|
|---|---|
|encryptionType|ENCRYPTION_TYPE_UNSPECIFIED|
|encryptionType|GOOGLE_DEFAULT_ENCRYPTION|
|encryptionType|CUSTOMER_MANAGED_ENCRYPTION|

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

<h2 id="tocS_GcRule">GcRule</h2>
<!-- backwards compatibility -->
<a id="schemagcrule"></a>
<a id="schema_GcRule"></a>
<a id="tocSgcrule"></a>
<a id="tocsgcrule"></a>

```json
{
  "intersection": {
    "rules": [
      {}
    ]
  },
  "maxAge": "string",
  "maxNumVersions": 0,
  "union": {
    "rules": [
      {}
    ]
  }
}
```

Rule for determining which cells to delete during garbage collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intersection|[Intersection](#schemaintersection)|false|none|Delete cells that would be deleted by every nested rule.|
|maxAge|string(google-duration)|false|none|Delete cells in a column older than the given age. Values must be at least one millisecond, and will be truncated to microsecond granularity.|
|maxNumVersions|integer(int32)|false|none|Delete all cells in a column except the most recent N.|
|union|[Union](#schemaunion)|false|none|Delete cells that would be deleted by any nested rule.|

<h2 id="tocS_GenerateConsistencyTokenRequest">GenerateConsistencyTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateconsistencytokenrequest"></a>
<a id="schema_GenerateConsistencyTokenRequest"></a>
<a id="tocSgenerateconsistencytokenrequest"></a>
<a id="tocsgenerateconsistencytokenrequest"></a>

```json
{}
```

Request message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken

<h2 id="tocS_GenerateConsistencyTokenResponse">GenerateConsistencyTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateconsistencytokenresponse"></a>
<a id="schema_GenerateConsistencyTokenResponse"></a>
<a id="tocSgenerateconsistencytokenresponse"></a>
<a id="tocsgenerateconsistencytokenresponse"></a>

```json
{
  "consistencyToken": "string"
}
```

Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consistencyToken|string|false|none|The generated consistency token.|

<h2 id="tocS_GetIamPolicyRequest">GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiampolicyrequest"></a>
<a id="schema_GetIamPolicyRequest"></a>
<a id="tocSgetiampolicyrequest"></a>
<a id="tocsgetiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GetPolicyOptions](#schemagetpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

<h2 id="tocS_GetPolicyOptions">GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyoptions"></a>
<a id="schema_GetPolicyOptions"></a>
<a id="tocSgetpolicyoptions"></a>
<a id="tocsgetpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_HotTablet">HotTablet</h2>
<!-- backwards compatibility -->
<a id="schemahottablet"></a>
<a id="schema_HotTablet"></a>
<a id="tocShottablet"></a>
<a id="tocshottablet"></a>

```json
{
  "endKey": "string",
  "endTime": "string",
  "name": "string",
  "nodeCpuUsagePercent": 0,
  "startKey": "string",
  "startTime": "string",
  "tableName": "string"
}
```

A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endKey|string|false|none|Tablet End Key (inclusive).|
|endTime|string(google-datetime)|false|read-only|Output only. The end time of the hot tablet.|
|name|string|false|none|The unique name of the hot tablet. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/hotTablets/[a-zA-Z0-9_-]*`.|
|nodeCpuUsagePercent|number(float)|false|read-only|Output only. The average CPU usage spent by a node on this tablet over the start_time to end_time time range. The percentage is the amount of CPU used by the node to serve the tablet, from 0% (tablet was not interacted with) to 100% (the node spent all cycles serving the hot tablet).|
|startKey|string|false|none|Tablet Start Key (inclusive).|
|startTime|string(google-datetime)|false|read-only|Output only. The start time of the hot tablet.|
|tableName|string|false|none|Name of the table that contains the tablet. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`.|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "satisfiesPzs": true,
  "state": "STATE_NOT_KNOWN",
  "type": "TYPE_UNSPECIFIED"
}
```

A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. A commit timestamp representing when this Instance was created. For instances created before this field was added (August 2021), this value is `seconds: 0, nanos: 1`.|
|displayName|string|false|none|Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion.|
|labels|object|false|none|Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics. * Label keys must be between 1 and 63 characters long and must conform to the regular expression: `\p{Ll}\p{Lo}{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes.|
|name|string|false|none|The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`.|
|satisfiesPzs|boolean|false|read-only|Output only. Reserved for future use.|
|state|string|false|read-only|Output only. The current state of the instance.|
|type|string|false|none|The type of the instance. Defaults to `PRODUCTION`.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_NOT_KNOWN|
|state|READY|
|state|CREATING|
|type|TYPE_UNSPECIFIED|
|type|PRODUCTION|
|type|DEVELOPMENT|

<h2 id="tocS_Intersection">Intersection</h2>
<!-- backwards compatibility -->
<a id="schemaintersection"></a>
<a id="schema_Intersection"></a>
<a id="tocSintersection"></a>
<a id="tocsintersection"></a>

```json
{
  "rules": [
    {
      "intersection": {},
      "maxAge": "string",
      "maxNumVersions": 0,
      "union": {}
    }
  ]
}
```

A GcRule which deletes cells matching all of the given rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[GcRule](#schemagcrule)]|false|none|Only delete cells which would be deleted by every element of `rules`.|

<h2 id="tocS_ListAppProfilesResponse">ListAppProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappprofilesresponse"></a>
<a id="schema_ListAppProfilesResponse"></a>
<a id="tocSlistappprofilesresponse"></a>
<a id="tocslistappprofilesresponse"></a>

```json
{
  "appProfiles": [
    {
      "description": "string",
      "etag": "string",
      "multiClusterRoutingUseAny": {
        "clusterIds": [
          "string"
        ]
      },
      "name": "string",
      "singleClusterRouting": {
        "allowTransactionalWrites": true,
        "clusterId": "string"
      }
    }
  ],
  "failedLocations": [
    "string"
  ],
  "nextPageToken": "string"
}
```

Response message for BigtableInstanceAdmin.ListAppProfiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appProfiles|[[AppProfile](#schemaappprofile)]|false|none|The list of requested app profiles.|
|failedLocations|[string]|false|none|Locations from which AppProfile information could not be retrieved, due to an outage or some other transient condition. AppProfiles from these locations may be missing from `app_profiles`. Values are of the form `projects//locations/`|
|nextPageToken|string|false|none|Set if not all app profiles could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.|

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
      "encryptionInfo": {
        "encryptionStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
        "kmsKeyVersion": "string"
      },
      "endTime": "string",
      "expireTime": "string",
      "name": "string",
      "sizeBytes": "string",
      "sourceBackup": "string",
      "sourceTable": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The response for ListBackups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backups|[[Backup](#schemabackup)]|false|none|The list of matching backups.|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListBackups call to fetch more of the matching backups.|

<h2 id="tocS_ListClustersResponse">ListClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersresponse"></a>
<a id="schema_ListClustersResponse"></a>
<a id="tocSlistclustersresponse"></a>
<a id="tocslistclustersresponse"></a>

```json
{
  "clusters": [
    {
      "clusterConfig": {
        "clusterAutoscalingConfig": {
          "autoscalingLimits": {
            "maxServeNodes": 0,
            "minServeNodes": 0
          },
          "autoscalingTargets": {
            "cpuUtilizationPercent": 0,
            "storageUtilizationGibPerNode": 0
          }
        }
      },
      "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "location": "string",
      "name": "string",
      "serveNodes": 0,
      "state": "STATE_NOT_KNOWN"
    }
  ],
  "failedLocations": [
    "string"
  ],
  "nextPageToken": "string"
}
```

Response message for BigtableInstanceAdmin.ListClusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|[[Cluster](#schemacluster)]|false|none|The list of requested clusters.|
|failedLocations|[string]|false|none|Locations from which Cluster information could not be retrieved, due to an outage or some other transient condition. Clusters from these locations may be missing from `clusters`, or may only have partial information returned. Values are of the form `projects//locations/`|
|nextPageToken|string|false|none|DEPRECATED: This field is unused and ignored.|

<h2 id="tocS_ListHotTabletsResponse">ListHotTabletsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthottabletsresponse"></a>
<a id="schema_ListHotTabletsResponse"></a>
<a id="tocSlisthottabletsresponse"></a>
<a id="tocslisthottabletsresponse"></a>

```json
{
  "hotTablets": [
    {
      "endKey": "string",
      "endTime": "string",
      "name": "string",
      "nodeCpuUsagePercent": 0,
      "startKey": "string",
      "startTime": "string",
      "tableName": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for BigtableInstanceAdmin.ListHotTablets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotTablets|[[HotTablet](#schemahottablet)]|false|none|List of hot tablets in the tables of the requested cluster that fall within the requested time range. Hot tablets are ordered by node cpu usage percent. If there are multiple hot tablets that correspond to the same tablet within a 15-minute interval, only the hot tablet with the highest node cpu usage will be included in the response.|
|nextPageToken|string|false|none|Set if not all hot tablets could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "failedLocations": [
    "string"
  ],
  "instances": [
    {
      "createTime": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "satisfiesPzs": true,
      "state": "STATE_NOT_KNOWN",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for BigtableInstanceAdmin.ListInstances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedLocations|[string]|false|none|Locations from which Instance information could not be retrieved, due to an outage or some other transient condition. Instances whose Clusters are all in one of the failed locations may be missing from `instances`, and Instances with at least one Cluster in a failed location may only have partial information returned. Values are of the form `projects//locations/`|
|instances|[[Instance](#schemainstance)]|false|none|The list of requested instances.|
|nextPageToken|string|false|none|DEPRECATED: This field is unused and ignored.|

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

<h2 id="tocS_ListTablesResponse">ListTablesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesresponse"></a>
<a id="schema_ListTablesResponse"></a>
<a id="tocSlisttablesresponse"></a>
<a id="tocslisttablesresponse"></a>

```json
{
  "nextPageToken": "string",
  "tables": [
    {
      "clusterStates": {
        "property1": {
          "encryptionInfo": [
            {
              "encryptionStatus": {
                "code": 0,
                "details": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "message": "string"
              },
              "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
              "kmsKeyVersion": "string"
            }
          ],
          "replicationState": "STATE_NOT_KNOWN"
        },
        "property2": {
          "encryptionInfo": [
            {
              "encryptionStatus": {
                "code": 0,
                "details": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "message": "string"
              },
              "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
              "kmsKeyVersion": "string"
            }
          ],
          "replicationState": "STATE_NOT_KNOWN"
        }
      },
      "columnFamilies": {
        "property1": {
          "gcRule": {
            "intersection": {},
            "maxAge": "string",
            "maxNumVersions": 0,
            "union": {}
          },
          "stats": {
            "averageCellsPerColumn": 0,
            "averageColumnsPerRow": 0,
            "logicalDataBytes": "string"
          }
        },
        "property2": {
          "gcRule": {
            "intersection": {},
            "maxAge": "string",
            "maxNumVersions": 0,
            "union": {}
          },
          "stats": {
            "averageCellsPerColumn": 0,
            "averageColumnsPerRow": 0,
            "logicalDataBytes": "string"
          }
        }
      },
      "deletionProtection": true,
      "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
      "name": "string",
      "restoreInfo": {
        "backupInfo": {
          "backup": "string",
          "endTime": "string",
          "sourceBackup": "string",
          "sourceTable": "string",
          "startTime": "string"
        },
        "sourceType": "RESTORE_SOURCE_TYPE_UNSPECIFIED"
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string",
        "rowCount": "string"
      }
    }
  ]
}
```

Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Set if not all tables could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.|
|tables|[[Table](#schematable)]|false|none|The tables present in the requested instance.|

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

<h2 id="tocS_Modification">Modification</h2>
<!-- backwards compatibility -->
<a id="schemamodification"></a>
<a id="schema_Modification"></a>
<a id="tocSmodification"></a>
<a id="tocsmodification"></a>

```json
{
  "create": {
    "gcRule": {
      "intersection": {},
      "maxAge": "string",
      "maxNumVersions": 0,
      "union": {}
    },
    "stats": {
      "averageCellsPerColumn": 0,
      "averageColumnsPerRow": 0,
      "logicalDataBytes": "string"
    }
  },
  "drop": true,
  "id": "string",
  "update": {
    "gcRule": {
      "intersection": {},
      "maxAge": "string",
      "maxNumVersions": 0,
      "union": {}
    },
    "stats": {
      "averageCellsPerColumn": 0,
      "averageColumnsPerRow": 0,
      "logicalDataBytes": "string"
    }
  }
}
```

A create, update, or delete of a particular column family.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create|[ColumnFamily](#schemacolumnfamily)|false|none|Create a new column family with the specified schema, or fail if one already exists with the given ID.|
|drop|boolean|false|none|Drop (delete) the column family with the given ID, or fail if no such family exists.|
|id|string|false|none|The ID of the column family to be modified.|
|update|[ColumnFamily](#schemacolumnfamily)|false|none|Update an existing column family to the specified schema, or fail if no column family exists with the given ID.|

<h2 id="tocS_ModifyColumnFamiliesRequest">ModifyColumnFamiliesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifycolumnfamiliesrequest"></a>
<a id="schema_ModifyColumnFamiliesRequest"></a>
<a id="tocSmodifycolumnfamiliesrequest"></a>
<a id="tocsmodifycolumnfamiliesrequest"></a>

```json
{
  "modifications": [
    {
      "create": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      },
      "drop": true,
      "id": "string",
      "update": {
        "gcRule": {
          "intersection": {},
          "maxAge": "string",
          "maxNumVersions": 0,
          "union": {}
        },
        "stats": {
          "averageCellsPerColumn": 0,
          "averageColumnsPerRow": 0,
          "logicalDataBytes": "string"
        }
      }
    }
  ]
}
```

Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modifications|[[Modification](#schemamodification)]|false|none|Required. Modifications to be atomically applied to the specified table's families. Entries are applied in order, meaning that earlier modifications can be masked by later ones (in the case of repeated updates to the same family, for example).|

<h2 id="tocS_MultiClusterRoutingUseAny">MultiClusterRoutingUseAny</h2>
<!-- backwards compatibility -->
<a id="schemamulticlusterroutinguseany"></a>
<a id="schema_MultiClusterRoutingUseAny"></a>
<a id="tocSmulticlusterroutinguseany"></a>
<a id="tocsmulticlusterroutinguseany"></a>

```json
{
  "clusterIds": [
    "string"
  ]
}
```

Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterIds|[string]|false|none|The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.|

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

<h2 id="tocS_OperationProgress">OperationProgress</h2>
<!-- backwards compatibility -->
<a id="schemaoperationprogress"></a>
<a id="schema_OperationProgress"></a>
<a id="tocSoperationprogress"></a>
<a id="tocsoperationprogress"></a>

```json
{
  "endTime": "string",
  "progressPercent": 0,
  "startTime": "string"
}
```

Encapsulates progress related information for a Cloud Bigtable long running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|If set, the time at which this operation failed or was completed successfully.|
|progressPercent|integer(int32)|false|none|Percent completion of the operation. Values are between 0 and 100 inclusive.|
|startTime|string(google-datetime)|false|none|Time the request was received.|

<h2 id="tocS_OptimizeRestoredTableMetadata">OptimizeRestoredTableMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizerestoredtablemetadata"></a>
<a id="schema_OptimizeRestoredTableMetadata"></a>
<a id="tocSoptimizerestoredtablemetadata"></a>
<a id="tocsoptimizerestoredtablemetadata"></a>

```json
{
  "name": "string",
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  }
}
```

Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored table. This long-running operation is automatically created by the system after the successful completion of a table restore, and cannot be cancelled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the restored table being optimized.|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|The progress of the post-restore optimizations.|

<h2 id="tocS_PartialUpdateClusterMetadata">PartialUpdateClusterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapartialupdateclustermetadata"></a>
<a id="schema_PartialUpdateClusterMetadata"></a>
<a id="tocSpartialupdateclustermetadata"></a>
<a id="tocspartialupdateclustermetadata"></a>

```json
{
  "finishTime": "string",
  "originalRequest": {
    "cluster": {
      "clusterConfig": {
        "clusterAutoscalingConfig": {
          "autoscalingLimits": {
            "maxServeNodes": 0,
            "minServeNodes": 0
          },
          "autoscalingTargets": {
            "cpuUtilizationPercent": 0,
            "storageUtilizationGibPerNode": 0
          }
        }
      },
      "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "location": "string",
      "name": "string",
      "serveNodes": 0,
      "state": "STATE_NOT_KNOWN"
    },
    "updateMask": "string"
  },
  "requestTime": "string"
}
```

The metadata for the Operation returned by PartialUpdateCluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finishTime|string(google-datetime)|false|none|The time at which the operation failed or was completed successfully.|
|originalRequest|[PartialUpdateClusterRequest](#schemapartialupdateclusterrequest)|false|none|The original request for PartialUpdateCluster.|
|requestTime|string(google-datetime)|false|none|The time at which the original request was received.|

<h2 id="tocS_PartialUpdateClusterRequest">PartialUpdateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemapartialupdateclusterrequest"></a>
<a id="schema_PartialUpdateClusterRequest"></a>
<a id="tocSpartialupdateclusterrequest"></a>
<a id="tocspartialupdateclusterrequest"></a>

```json
{
  "cluster": {
    "clusterConfig": {
      "clusterAutoscalingConfig": {
        "autoscalingLimits": {
          "maxServeNodes": 0,
          "minServeNodes": 0
        },
        "autoscalingTargets": {
          "cpuUtilizationPercent": 0,
          "storageUtilizationGibPerNode": 0
        }
      }
    },
    "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "location": "string",
    "name": "string",
    "serveNodes": 0,
    "state": "STATE_NOT_KNOWN"
  },
  "updateMask": "string"
}
```

Request message for BigtableInstanceAdmin.PartialUpdateCluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|[Cluster](#schemacluster)|false|none|Required. The Cluster which contains the partial updates to be applied, subject to the update_mask.|
|updateMask|string(google-fieldmask)|false|none|Required. The subset of Cluster fields which should be replaced.|

<h2 id="tocS_PartialUpdateInstanceRequest">PartialUpdateInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemapartialupdateinstancerequest"></a>
<a id="schema_PartialUpdateInstanceRequest"></a>
<a id="tocSpartialupdateinstancerequest"></a>
<a id="tocspartialupdateinstancerequest"></a>

```json
{
  "instance": {
    "createTime": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "satisfiesPzs": true,
    "state": "STATE_NOT_KNOWN",
    "type": "TYPE_UNSPECIFIED"
  },
  "updateMask": "string"
}
```

Request message for BigtableInstanceAdmin.PartialUpdateInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|[Instance](#schemainstance)|false|none|Required. The Instance which will (partially) replace the current value.|
|updateMask|string(google-fieldmask)|false|none|Required. The subset of Instance fields which should be replaced. Must be explicitly set.|

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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_RestoreInfo">RestoreInfo</h2>
<!-- backwards compatibility -->
<a id="schemarestoreinfo"></a>
<a id="schema_RestoreInfo"></a>
<a id="tocSrestoreinfo"></a>
<a id="tocsrestoreinfo"></a>

```json
{
  "backupInfo": {
    "backup": "string",
    "endTime": "string",
    "sourceBackup": "string",
    "sourceTable": "string",
    "startTime": "string"
  },
  "sourceType": "RESTORE_SOURCE_TYPE_UNSPECIFIED"
}
```

Information about a table restore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupInfo|[BackupInfo](#schemabackupinfo)|false|none|Information about the backup used to restore the table. The backup may no longer exist.|
|sourceType|string|false|none|The type of the restore source.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|RESTORE_SOURCE_TYPE_UNSPECIFIED|
|sourceType|BACKUP|

<h2 id="tocS_RestoreTableMetadata">RestoreTableMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarestoretablemetadata"></a>
<a id="schema_RestoreTableMetadata"></a>
<a id="tocSrestoretablemetadata"></a>
<a id="tocsrestoretablemetadata"></a>

```json
{
  "backupInfo": {
    "backup": "string",
    "endTime": "string",
    "sourceBackup": "string",
    "sourceTable": "string",
    "startTime": "string"
  },
  "name": "string",
  "optimizeTableOperationName": "string",
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  },
  "sourceType": "RESTORE_SOURCE_TYPE_UNSPECIFIED"
}
```

Metadata type for the long-running operation returned by RestoreTable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupInfo|[BackupInfo](#schemabackupinfo)|false|none|Information about a backup.|
|name|string|false|none|Name of the table being created and restored to.|
|optimizeTableOperationName|string|false|none|If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored table. The metadata type of the long-running operation is OptimizeRestoreTableMetadata. The response type is Empty. This long-running operation may be automatically created by the system if applicable after the RestoreTable long-running operation completes successfully. This operation may not be created if the table is already optimized or the restore was not successful.|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|The progress of the RestoreTable operation.|
|sourceType|string|false|none|The type of the restore source.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|RESTORE_SOURCE_TYPE_UNSPECIFIED|
|sourceType|BACKUP|

<h2 id="tocS_RestoreTableRequest">RestoreTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoretablerequest"></a>
<a id="schema_RestoreTableRequest"></a>
<a id="tocSrestoretablerequest"></a>
<a id="tocsrestoretablerequest"></a>

```json
{
  "backup": "string",
  "tableId": "string"
}
```

The request for RestoreTable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|string|false|none|Name of the backup from which to restore. Values are of the form `projects//instances//clusters//backups/`.|
|tableId|string|false|none|Required. The id of the table to create and restore to. This table must not already exist. The `table_id` appended to `parent` forms the full table name of the form `projects//instances//tables/`.|

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

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_SingleClusterRouting">SingleClusterRouting</h2>
<!-- backwards compatibility -->
<a id="schemasingleclusterrouting"></a>
<a id="schema_SingleClusterRouting"></a>
<a id="tocSsingleclusterrouting"></a>
<a id="tocssingleclusterrouting"></a>

```json
{
  "allowTransactionalWrites": true,
  "clusterId": "string"
}
```

Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowTransactionalWrites|boolean|false|none|Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters.|
|clusterId|string|false|none|The cluster to which read/write requests should be routed.|

<h2 id="tocS_Split">Split</h2>
<!-- backwards compatibility -->
<a id="schemasplit"></a>
<a id="schema_Split"></a>
<a id="tocSsplit"></a>
<a id="tocssplit"></a>

```json
{
  "key": "string"
}
```

An initial split point for a newly created table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string(byte)|false|none|Row key to use as an initial tablet boundary.|

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

<h2 id="tocS_Table">Table</h2>
<!-- backwards compatibility -->
<a id="schematable"></a>
<a id="schema_Table"></a>
<a id="tocStable"></a>
<a id="tocstable"></a>

```json
{
  "clusterStates": {
    "property1": {
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "replicationState": "STATE_NOT_KNOWN"
    },
    "property2": {
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "replicationState": "STATE_NOT_KNOWN"
    }
  },
  "columnFamilies": {
    "property1": {
      "gcRule": {
        "intersection": {},
        "maxAge": "string",
        "maxNumVersions": 0,
        "union": {}
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string"
      }
    },
    "property2": {
      "gcRule": {
        "intersection": {},
        "maxAge": "string",
        "maxNumVersions": 0,
        "union": {}
      },
      "stats": {
        "averageCellsPerColumn": 0,
        "averageColumnsPerRow": 0,
        "logicalDataBytes": "string"
      }
    }
  },
  "deletionProtection": true,
  "granularity": "TIMESTAMP_GRANULARITY_UNSPECIFIED",
  "name": "string",
  "restoreInfo": {
    "backupInfo": {
      "backup": "string",
      "endTime": "string",
      "sourceBackup": "string",
      "sourceTable": "string",
      "startTime": "string"
    },
    "sourceType": "RESTORE_SOURCE_TYPE_UNSPECIFIED"
  },
  "stats": {
    "averageCellsPerColumn": 0,
    "averageColumnsPerRow": 0,
    "logicalDataBytes": "string",
    "rowCount": "string"
  }
}
```

A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterStates|object|false|read-only|Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN `replication_status`. Views: `REPLICATION_VIEW`, `ENCRYPTION_VIEW`, `FULL`|
|columnFamilies|object|false|none|The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL`|
|deletionProtection|boolean|false|none|Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs.|
|granularity|string|false|none|Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.|
|name|string|false|none|The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`|
|restoreInfo|[RestoreInfo](#schemarestoreinfo)|false|none|Output only. If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore.|
|stats|[TableStats](#schematablestats)|false|none|Only available with STATS_VIEW, this includes summary statistics about the entire table contents. For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above.|

#### Enumerated Values

|Property|Value|
|---|---|
|granularity|TIMESTAMP_GRANULARITY_UNSPECIFIED|
|granularity|MILLIS|

<h2 id="tocS_TableProgress">TableProgress</h2>
<!-- backwards compatibility -->
<a id="schematableprogress"></a>
<a id="schema_TableProgress"></a>
<a id="tocStableprogress"></a>
<a id="tocstableprogress"></a>

```json
{
  "estimatedCopiedBytes": "string",
  "estimatedSizeBytes": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Progress info for copying a table's data to the new cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedCopiedBytes|string(int64)|false|none|Estimate of the number of bytes copied so far for this table. This will eventually reach 'estimated_size_bytes' unless the table copy is CANCELLED.|
|estimatedSizeBytes|string(int64)|false|none|Estimate of the size of the table to be copied.|
|state|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|COPYING|
|state|COMPLETED|
|state|CANCELLED|

<h2 id="tocS_TableStats">TableStats</h2>
<!-- backwards compatibility -->
<a id="schematablestats"></a>
<a id="schema_TableStats"></a>
<a id="tocStablestats"></a>
<a id="tocstablestats"></a>

```json
{
  "averageCellsPerColumn": 0,
  "averageColumnsPerRow": 0,
  "logicalDataBytes": "string",
  "rowCount": "string"
}
```

Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageCellsPerColumn|number(double)|false|none|How many cells are present per column (column family, column qualifier) combinations, averaged over all columns in all rows in the table. e.g. A table with 2 rows: * A row with 3 cells in "family:col" and 1 cell in "other:col" (4 cells / 2 columns) * A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (15 cells / 3 columns) would report (4 + 15)/(2 + 3) = 3.8 in this field.|
|averageColumnsPerRow|number(double)|false|none|How many (column family, column qualifier) combinations are present per row in the table, averaged over all rows in the table. e.g. A table with 2 rows: * A row with cells in "family:col" and "other:col" (2 distinct columns) * A row with cells in "family:col", "family:other_col", and "other:data" (3 distinct columns) would report (2 + 3)/2 = 2.5 in this field.|
|logicalDataBytes|string(int64)|false|none|This is roughly how many bytes would be needed to read the entire table (e.g. by streaming all contents out).|
|rowCount|string(int64)|false|none|How many rows are in the table.|

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

<h2 id="tocS_UndeleteTableMetadata">UndeleteTableMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaundeletetablemetadata"></a>
<a id="schema_UndeleteTableMetadata"></a>
<a id="tocSundeletetablemetadata"></a>
<a id="tocsundeletetablemetadata"></a>

```json
{
  "endTime": "string",
  "name": "string",
  "startTime": "string"
}
```

Metadata type for the operation returned by google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|If set, the time at which this operation finished or was cancelled.|
|name|string|false|none|The name of the table being restored.|
|startTime|string(google-datetime)|false|none|The time at which this operation started.|

<h2 id="tocS_UndeleteTableRequest">UndeleteTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeletetablerequest"></a>
<a id="schema_UndeleteTableRequest"></a>
<a id="tocSundeletetablerequest"></a>
<a id="tocsundeletetablerequest"></a>

```json
{}
```

Request message for google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable

<h2 id="tocS_Union">Union</h2>
<!-- backwards compatibility -->
<a id="schemaunion"></a>
<a id="schema_Union"></a>
<a id="tocSunion"></a>
<a id="tocsunion"></a>

```json
{
  "rules": [
    {
      "intersection": {},
      "maxAge": "string",
      "maxNumVersions": 0,
      "union": {}
    }
  ]
}
```

A GcRule which deletes cells matching any of the given rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[GcRule](#schemagcrule)]|false|none|Delete cells which would be deleted by any element of `rules`.|

<h2 id="tocS_UpdateAppProfileMetadata">UpdateAppProfileMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateappprofilemetadata"></a>
<a id="schema_UpdateAppProfileMetadata"></a>
<a id="tocSupdateappprofilemetadata"></a>
<a id="tocsupdateappprofilemetadata"></a>

```json
{}
```

The metadata for the Operation returned by UpdateAppProfile.

<h2 id="tocS_UpdateClusterMetadata">UpdateClusterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclustermetadata"></a>
<a id="schema_UpdateClusterMetadata"></a>
<a id="tocSupdateclustermetadata"></a>
<a id="tocsupdateclustermetadata"></a>

```json
{
  "finishTime": "string",
  "originalRequest": {
    "clusterConfig": {
      "clusterAutoscalingConfig": {
        "autoscalingLimits": {
          "maxServeNodes": 0,
          "minServeNodes": 0
        },
        "autoscalingTargets": {
          "cpuUtilizationPercent": 0,
          "storageUtilizationGibPerNode": 0
        }
      }
    },
    "defaultStorageType": "STORAGE_TYPE_UNSPECIFIED",
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "location": "string",
    "name": "string",
    "serveNodes": 0,
    "state": "STATE_NOT_KNOWN"
  },
  "requestTime": "string"
}
```

The metadata for the Operation returned by UpdateCluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finishTime|string(google-datetime)|false|none|The time at which the operation failed or was completed successfully.|
|originalRequest|[Cluster](#schemacluster)|false|none|The request that prompted the initiation of this UpdateCluster operation.|
|requestTime|string(google-datetime)|false|none|The time at which the original request was received.|

<h2 id="tocS_UpdateInstanceMetadata">UpdateInstanceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstancemetadata"></a>
<a id="schema_UpdateInstanceMetadata"></a>
<a id="tocSupdateinstancemetadata"></a>
<a id="tocsupdateinstancemetadata"></a>

```json
{
  "finishTime": "string",
  "originalRequest": {
    "instance": {
      "createTime": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "satisfiesPzs": true,
      "state": "STATE_NOT_KNOWN",
      "type": "TYPE_UNSPECIFIED"
    },
    "updateMask": "string"
  },
  "requestTime": "string"
}
```

The metadata for the Operation returned by UpdateInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finishTime|string(google-datetime)|false|none|The time at which the operation failed or was completed successfully.|
|originalRequest|[PartialUpdateInstanceRequest](#schemapartialupdateinstancerequest)|false|none|The request that prompted the initiation of this UpdateInstance operation.|
|requestTime|string(google-datetime)|false|none|The time at which the original request was received.|

<h2 id="tocS_UpdateTableMetadata">UpdateTableMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablemetadata"></a>
<a id="schema_UpdateTableMetadata"></a>
<a id="tocSupdatetablemetadata"></a>
<a id="tocsupdatetablemetadata"></a>

```json
{
  "endTime": "string",
  "name": "string",
  "startTime": "string"
}
```

Metadata type for the operation returned by UpdateTable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|If set, the time at which this operation finished or was canceled.|
|name|string|false|none|The name of the table being updated.|
|startTime|string(google-datetime)|false|none|The time at which this operation started.|
