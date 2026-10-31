<h1 id="google-cloud-memorystore-for-redis-api">Google Cloud Memorystore for Redis API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Creates and manages Redis instances on the Google Cloud Platform.

Base URLs:

* <a href="https://redis.googleapis.com/">https://redis.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/memorystore/docs/redis/">External documentation</a>

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

<h1 id="google-cloud-memorystore-for-redis-api-projects">projects</h1>

## redis.projects.locations.operations.get

<a id="opIdredis.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="redisprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="redisprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.operations.delete

<a id="opIdredis.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="redisprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
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

<h3 id="redisprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.patch

<a id="opIdredis.projects.locations.instances.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternativeLocationId": "string",
    "authEnabled": true,
    "authorizedNetwork": "string",
    "availableMaintenanceVersions": [
      "string"
    ],
    "connectMode": "CONNECT_MODE_UNSPECIFIED",
    "customerManagedKey": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "locationId": "string",
    "maintenancePolicy": {
      "description": "string",
      "weeklyMaintenanceWindow": [
        {
          "day": "DAY_OF_WEEK_UNSPECIFIED",
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    },
    "maintenanceVersion": "string",
    "memorySizeGb": 0,
    "name": "string",
    "persistenceConfig": {
      "persistenceMode": "PERSISTENCE_MODE_UNSPECIFIED",
      "rdbSnapshotPeriod": "SNAPSHOT_PERIOD_UNSPECIFIED",
      "rdbSnapshotStartTime": "string"
    },
    "readReplicasMode": "READ_REPLICAS_MODE_UNSPECIFIED",
    "redisConfigs": {
      "property1": "string",
      "property2": "string"
    },
    "redisVersion": "string",
    "replicaCount": 0,
    "reservedIpRange": "string",
    "secondaryIpRange": "string",
    "suspensionReasons": [
      "SUSPENSION_REASON_UNSPECIFIED"
    ],
    "tier": "TIER_UNSPECIFIED",
    "transitEncryptionMode": "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
  }'
```

`PATCH /v1/{name}`

Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

> Body parameter

```json
{
  "alternativeLocationId": "string",
  "authEnabled": true,
  "authorizedNetwork": "string",
  "availableMaintenanceVersions": [
    "string"
  ],
  "connectMode": "CONNECT_MODE_UNSPECIFIED",
  "customerManagedKey": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "maintenancePolicy": {
    "description": "string",
    "weeklyMaintenanceWindow": [
      {
        "day": "DAY_OF_WEEK_UNSPECIFIED",
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ]
  },
  "maintenanceVersion": "string",
  "memorySizeGb": 0,
  "name": "string",
  "persistenceConfig": {
    "persistenceMode": "PERSISTENCE_MODE_UNSPECIFIED",
    "rdbSnapshotPeriod": "SNAPSHOT_PERIOD_UNSPECIFIED",
    "rdbSnapshotStartTime": "string"
  },
  "readReplicasMode": "READ_REPLICAS_MODE_UNSPECIFIED",
  "redisConfigs": {
    "property1": "string",
    "property2": "string"
  },
  "redisVersion": "string",
  "replicaCount": 0,
  "reservedIpRange": "string",
  "secondaryIpRange": "string",
  "suspensionReasons": [
    "SUSPENSION_REASON_UNSPECIFIED"
  ],
  "tier": "TIER_UNSPECIFIED",
  "transitEncryptionMode": "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
}
```

<h3 id="redisprojectslocationsinstancespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.|
|updateMask|query|string|false|Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Instance: * `displayName` * `labels` * `memorySizeGb` * `redisConfig` * `replica_count`|
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
|» alternativeLocationId|body|string|false|Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.|
|» authEnabled|body|boolean|false|Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.|
|» authorizedNetwork|body|string|false|Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.|
|» availableMaintenanceVersions|body|[string]|false|Optional. The available maintenance versions that an instance could update to.|
|» connectMode|body|string|false|Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.|
|» customerManagedKey|body|string|false|Optional. The KMS key reference that the customer provides when trying to create the instance.|
|» displayName|body|string|false|An arbitrary and optional user-provided name for the instance.|
|» labels|body|object|false|Resource labels to represent user provided metadata|
|» » **additionalProperties**|body|string|false|none|
|» locationId|body|string|false|Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.|
|» maintenancePolicy|body|[MaintenancePolicy](#schemamaintenancepolicy)|false|Optional. The maintenance policy for the instance. If not provided, maintenance events can be performed at any time.|
|» maintenanceVersion|body|string|false|Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".|
|» memorySizeGb|body|integer(int32)|false|Required. Redis memory size in GiB.|
|» name|body|string|false|Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.|
|» persistenceConfig|body|[PersistenceConfig](#schemapersistenceconfig)|false|Optional. Persistence configuration parameters|
|» readReplicasMode|body|string|false|Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.|
|» redisConfigs|body|object|false|Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries|
|» » **additionalProperties**|body|string|false|none|
|» redisVersion|body|string|false|Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility|
|» replicaCount|body|integer(int32)|false|Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.|
|» reservedIpRange|body|string|false|Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.|
|» secondaryIpRange|body|string|false|Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".|
|» suspensionReasons|body|[string]|false|Optional. reasons that causes instance in "SUSPENDED" state.|
|» tier|body|string|false|Required. The service tier of the instance.|
|» transitEncryptionMode|body|string|false|Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» connectMode|CONNECT_MODE_UNSPECIFIED|
|» connectMode|DIRECT_PEERING|
|» connectMode|PRIVATE_SERVICE_ACCESS|
|» readReplicasMode|READ_REPLICAS_MODE_UNSPECIFIED|
|» readReplicasMode|READ_REPLICAS_DISABLED|
|» readReplicasMode|READ_REPLICAS_ENABLED|
|» suspensionReasons|SUSPENSION_REASON_UNSPECIFIED|
|» suspensionReasons|CUSTOMER_MANAGED_KEY_ISSUE|
|» tier|TIER_UNSPECIFIED|
|» tier|BASIC|
|» tier|STANDARD_HA|
|» transitEncryptionMode|TRANSIT_ENCRYPTION_MODE_UNSPECIFIED|
|» transitEncryptionMode|SERVER_AUTHENTICATION|
|» transitEncryptionMode|DISABLED|

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

<h3 id="redisprojectslocationsinstancespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.getAuthString

<a id="opIdredis.projects.locations.instances.getAuthString"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/authString \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/authString`

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

<h3 id="redisprojectslocationsinstancesgetauthstring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.|
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
  "authString": "string"
}
```

<h3 id="redisprojectslocationsinstancesgetauthstring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InstanceAuthString](#schemainstanceauthstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.list

<a id="opIdredis.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="redisprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="redisprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.operations.list

<a id="opIdredis.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="redisprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="redisprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.operations.cancel

<a id="opIdredis.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

<h3 id="redisprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="redisprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.export

<a id="opIdredis.projects.locations.instances.export"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "outputConfig": {
      "gcsDestination": {
        "uri": "string"
      }
    }
  }'
```

`POST /v1/{name}:export`

Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

> Body parameter

```json
{
  "outputConfig": {
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

<h3 id="redisprojectslocationsinstancesexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.|
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
|body|body|[ExportInstanceRequest](#schemaexportinstancerequest)|false|none|
|» outputConfig|body|[OutputConfig](#schemaoutputconfig)|false|Required. Specify data to be exported.|

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

<h3 id="redisprojectslocationsinstancesexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.failover

<a id="opIdredis.projects.locations.instances.failover"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:failover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataProtectionMode": "DATA_PROTECTION_MODE_UNSPECIFIED"
  }'
```

`POST /v1/{name}:failover`

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

> Body parameter

```json
{
  "dataProtectionMode": "DATA_PROTECTION_MODE_UNSPECIFIED"
}
```

<h3 id="redisprojectslocationsinstancesfailover-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.|
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
|body|body|[FailoverInstanceRequest](#schemafailoverinstancerequest)|false|none|
|» dataProtectionMode|body|string|false|Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED_DATA_LOSS by default.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» dataProtectionMode|DATA_PROTECTION_MODE_UNSPECIFIED|
|» dataProtectionMode|LIMITED_DATA_LOSS|
|» dataProtectionMode|FORCE_DATA_LOSS|

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

<h3 id="redisprojectslocationsinstancesfailover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.import

<a id="opIdredis.projects.locations.instances.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputConfig": {
      "gcsSource": {
        "uri": "string"
      }
    }
  }'
```

`POST /v1/{name}:import`

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

> Body parameter

```json
{
  "inputConfig": {
    "gcsSource": {
      "uri": "string"
    }
  }
}
```

<h3 id="redisprojectslocationsinstancesimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.|
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
|body|body|[ImportInstanceRequest](#schemaimportinstancerequest)|false|none|
|» inputConfig|body|[InputConfig](#schemainputconfig)|false|Required. Specify data to be imported.|

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

<h3 id="redisprojectslocationsinstancesimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.rescheduleMaintenance

<a id="opIdredis.projects.locations.instances.rescheduleMaintenance"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:rescheduleMaintenance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
    "scheduleTime": "string"
  }'
```

`POST /v1/{name}:rescheduleMaintenance`

Reschedule maintenance for a given instance in a given project and location.

> Body parameter

```json
{
  "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
  "scheduleTime": "string"
}
```

<h3 id="redisprojectslocationsinstancesreschedulemaintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.|
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
|body|body|[RescheduleMaintenanceRequest](#schemareschedulemaintenancerequest)|false|none|
|» rescheduleType|body|string|false|Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well.|
|» scheduleTime|body|string(google-datetime)|false|Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» rescheduleType|RESCHEDULE_TYPE_UNSPECIFIED|
|» rescheduleType|IMMEDIATE|
|» rescheduleType|NEXT_AVAILABLE_WINDOW|
|» rescheduleType|SPECIFIC_TIME|

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

<h3 id="redisprojectslocationsinstancesreschedulemaintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.upgrade

<a id="opIdredis.projects.locations.instances.upgrade"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:upgrade \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "redisVersion": "string"
  }'
```

`POST /v1/{name}:upgrade`

Upgrades Redis instance to the newer Redis version specified in the request.

> Body parameter

```json
{
  "redisVersion": "string"
}
```

<h3 id="redisprojectslocationsinstancesupgrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.|
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
|body|body|[UpgradeInstanceRequest](#schemaupgradeinstancerequest)|false|none|
|» redisVersion|body|string|false|Required. Specifies the target version of Redis software to upgrade to.|

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

<h3 id="redisprojectslocationsinstancesupgrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.list

<a id="opIdredis.projects.locations.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/instances`

Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

<h3 id="redisprojectslocationsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.|
|pageSize|query|integer|false|The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous ListInstances request, if any.|
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
  "instances": [
    {
      "alternativeLocationId": "string",
      "authEnabled": true,
      "authorizedNetwork": "string",
      "availableMaintenanceVersions": [
        "string"
      ],
      "connectMode": "CONNECT_MODE_UNSPECIFIED",
      "createTime": "string",
      "currentLocationId": "string",
      "customerManagedKey": "string",
      "displayName": "string",
      "host": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "maintenancePolicy": {
        "createTime": "string",
        "description": "string",
        "updateTime": "string",
        "weeklyMaintenanceWindow": [
          {
            "day": "DAY_OF_WEEK_UNSPECIFIED",
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      },
      "maintenanceSchedule": {
        "canReschedule": true,
        "endTime": "string",
        "scheduleDeadlineTime": "string",
        "startTime": "string"
      },
      "maintenanceVersion": "string",
      "memorySizeGb": 0,
      "name": "string",
      "nodes": [
        {
          "id": "string",
          "zone": "string"
        }
      ],
      "persistenceConfig": {
        "persistenceMode": "PERSISTENCE_MODE_UNSPECIFIED",
        "rdbNextSnapshotTime": "string",
        "rdbSnapshotPeriod": "SNAPSHOT_PERIOD_UNSPECIFIED",
        "rdbSnapshotStartTime": "string"
      },
      "persistenceIamIdentity": "string",
      "port": 0,
      "readEndpoint": "string",
      "readEndpointPort": 0,
      "readReplicasMode": "READ_REPLICAS_MODE_UNSPECIFIED",
      "redisConfigs": {
        "property1": "string",
        "property2": "string"
      },
      "redisVersion": "string",
      "replicaCount": 0,
      "reservedIpRange": "string",
      "secondaryIpRange": "string",
      "serverCaCerts": [
        {
          "cert": "string",
          "createTime": "string",
          "expireTime": "string",
          "serialNumber": "string",
          "sha1Fingerprint": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "tier": "TIER_UNSPECIFIED",
      "transitEncryptionMode": "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="redisprojectslocationsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstancesResponse](#schemalistinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## redis.projects.locations.instances.create

<a id="opIdredis.projects.locations.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternativeLocationId": "string",
    "authEnabled": true,
    "authorizedNetwork": "string",
    "availableMaintenanceVersions": [
      "string"
    ],
    "connectMode": "CONNECT_MODE_UNSPECIFIED",
    "customerManagedKey": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "locationId": "string",
    "maintenancePolicy": {
      "description": "string",
      "weeklyMaintenanceWindow": [
        {
          "day": "DAY_OF_WEEK_UNSPECIFIED",
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    },
    "maintenanceVersion": "string",
    "memorySizeGb": 0,
    "name": "string",
    "persistenceConfig": {
      "persistenceMode": "PERSISTENCE_MODE_UNSPECIFIED",
      "rdbSnapshotPeriod": "SNAPSHOT_PERIOD_UNSPECIFIED",
      "rdbSnapshotStartTime": "string"
    },
    "readReplicasMode": "READ_REPLICAS_MODE_UNSPECIFIED",
    "redisConfigs": {
      "property1": "string",
      "property2": "string"
    },
    "redisVersion": "string",
    "replicaCount": 0,
    "reservedIpRange": "string",
    "secondaryIpRange": "string",
    "suspensionReasons": [
      "SUSPENSION_REASON_UNSPECIFIED"
    ],
    "tier": "TIER_UNSPECIFIED",
    "transitEncryptionMode": "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/instances`

Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

> Body parameter

```json
{
  "alternativeLocationId": "string",
  "authEnabled": true,
  "authorizedNetwork": "string",
  "availableMaintenanceVersions": [
    "string"
  ],
  "connectMode": "CONNECT_MODE_UNSPECIFIED",
  "customerManagedKey": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "maintenancePolicy": {
    "description": "string",
    "weeklyMaintenanceWindow": [
      {
        "day": "DAY_OF_WEEK_UNSPECIFIED",
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ]
  },
  "maintenanceVersion": "string",
  "memorySizeGb": 0,
  "name": "string",
  "persistenceConfig": {
    "persistenceMode": "PERSISTENCE_MODE_UNSPECIFIED",
    "rdbSnapshotPeriod": "SNAPSHOT_PERIOD_UNSPECIFIED",
    "rdbSnapshotStartTime": "string"
  },
  "readReplicasMode": "READ_REPLICAS_MODE_UNSPECIFIED",
  "redisConfigs": {
    "property1": "string",
    "property2": "string"
  },
  "redisVersion": "string",
  "replicaCount": 0,
  "reservedIpRange": "string",
  "secondaryIpRange": "string",
  "suspensionReasons": [
    "SUSPENSION_REASON_UNSPECIFIED"
  ],
  "tier": "TIER_UNSPECIFIED",
  "transitEncryptionMode": "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
}
```

<h3 id="redisprojectslocationsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.|
|instanceId|query|string|false|Required. The logical name of the Redis instance in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location|
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
|» alternativeLocationId|body|string|false|Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.|
|» authEnabled|body|boolean|false|Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.|
|» authorizedNetwork|body|string|false|Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.|
|» availableMaintenanceVersions|body|[string]|false|Optional. The available maintenance versions that an instance could update to.|
|» connectMode|body|string|false|Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.|
|» customerManagedKey|body|string|false|Optional. The KMS key reference that the customer provides when trying to create the instance.|
|» displayName|body|string|false|An arbitrary and optional user-provided name for the instance.|
|» labels|body|object|false|Resource labels to represent user provided metadata|
|» » **additionalProperties**|body|string|false|none|
|» locationId|body|string|false|Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.|
|» maintenancePolicy|body|[MaintenancePolicy](#schemamaintenancepolicy)|false|Optional. The maintenance policy for the instance. If not provided, maintenance events can be performed at any time.|
|» maintenanceVersion|body|string|false|Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".|
|» memorySizeGb|body|integer(int32)|false|Required. Redis memory size in GiB.|
|» name|body|string|false|Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.|
|» persistenceConfig|body|[PersistenceConfig](#schemapersistenceconfig)|false|Optional. Persistence configuration parameters|
|» readReplicasMode|body|string|false|Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.|
|» redisConfigs|body|object|false|Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries|
|» » **additionalProperties**|body|string|false|none|
|» redisVersion|body|string|false|Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility|
|» replicaCount|body|integer(int32)|false|Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.|
|» reservedIpRange|body|string|false|Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.|
|» secondaryIpRange|body|string|false|Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".|
|» suspensionReasons|body|[string]|false|Optional. reasons that causes instance in "SUSPENDED" state.|
|» tier|body|string|false|Required. The service tier of the instance.|
|» transitEncryptionMode|body|string|false|Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» connectMode|CONNECT_MODE_UNSPECIFIED|
|» connectMode|DIRECT_PEERING|
|» connectMode|PRIVATE_SERVICE_ACCESS|
|» readReplicasMode|READ_REPLICAS_MODE_UNSPECIFIED|
|» readReplicasMode|READ_REPLICAS_DISABLED|
|» readReplicasMode|READ_REPLICAS_ENABLED|
|» suspensionReasons|SUSPENSION_REASON_UNSPECIFIED|
|» suspensionReasons|CUSTOMER_MANAGED_KEY_ISSUE|
|» tier|TIER_UNSPECIFIED|
|» tier|BASIC|
|» tier|STANDARD_HA|
|» transitEncryptionMode|TRANSIT_ENCRYPTION_MODE_UNSPECIFIED|
|» transitEncryptionMode|SERVER_AUTHENTICATION|
|» transitEncryptionMode|DISABLED|

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

<h3 id="redisprojectslocationsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

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

<h2 id="tocS_ExportInstanceRequest">ExportInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportinstancerequest"></a>
<a id="schema_ExportInstanceRequest"></a>
<a id="tocSexportinstancerequest"></a>
<a id="tocsexportinstancerequest"></a>

```json
{
  "outputConfig": {
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

Request for Export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[OutputConfig](#schemaoutputconfig)|false|none|Required. Specify data to be exported.|

<h2 id="tocS_FailoverInstanceRequest">FailoverInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemafailoverinstancerequest"></a>
<a id="schema_FailoverInstanceRequest"></a>
<a id="tocSfailoverinstancerequest"></a>
<a id="tocsfailoverinstancerequest"></a>

```json
{
  "dataProtectionMode": "DATA_PROTECTION_MODE_UNSPECIFIED"
}
```

Request for Failover.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataProtectionMode|string|false|none|Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED_DATA_LOSS by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataProtectionMode|DATA_PROTECTION_MODE_UNSPECIFIED|
|dataProtectionMode|LIMITED_DATA_LOSS|
|dataProtectionMode|FORCE_DATA_LOSS|

<h2 id="tocS_GcsDestination">GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagcsdestination"></a>
<a id="schema_GcsDestination"></a>
<a id="tocSgcsdestination"></a>
<a id="tocsgcsdestination"></a>

```json
{
  "uri": "string"
}
```

The Cloud Storage location for the output content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Required. Data destination URI (e.g. 'gs://my_bucket/my_object'). Existing files will be overwritten.|

<h2 id="tocS_GcsSource">GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagcssource"></a>
<a id="schema_GcsSource"></a>
<a id="tocSgcssource"></a>
<a id="tocsgcssource"></a>

```json
{
  "uri": "string"
}
```

The Cloud Storage location for the input content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Required. Source data URI. (e.g. 'gs://my_bucket/my_object').|

<h2 id="tocS_GoogleCloudRedisV1LocationMetadata">GoogleCloudRedisV1LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudredisv1locationmetadata"></a>
<a id="schema_GoogleCloudRedisV1LocationMetadata"></a>
<a id="tocSgooglecloudredisv1locationmetadata"></a>
<a id="tocsgooglecloudredisv1locationmetadata"></a>

```json
{
  "availableZones": {
    "property1": {},
    "property2": {}
  }
}
```

This location metadata represents additional configuration options for a given location where a Redis instance may be created. All fields are output only. It is returned as content of the `google.cloud.location.Location.metadata` field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableZones|object|false|read-only|Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance.|

<h2 id="tocS_GoogleCloudRedisV1OperationMetadata">GoogleCloudRedisV1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudredisv1operationmetadata"></a>
<a id="schema_GoogleCloudRedisV1OperationMetadata"></a>
<a id="tocSgooglecloudredisv1operationmetadata"></a>
<a id="tocsgooglecloudredisv1operationmetadata"></a>

```json
{
  "apiVersion": "string",
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the v1 metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version.|
|cancelRequested|boolean|false|none|Specifies if cancellation was requested for the operation.|
|createTime|string(google-datetime)|false|none|Creation timestamp.|
|endTime|string(google-datetime)|false|none|End timestamp.|
|statusDetail|string|false|none|Operation status details.|
|target|string|false|none|Operation target.|
|verb|string|false|none|Operation verb.|

<h2 id="tocS_GoogleCloudRedisV1ZoneMetadata">GoogleCloudRedisV1ZoneMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudredisv1zonemetadata"></a>
<a id="schema_GoogleCloudRedisV1ZoneMetadata"></a>
<a id="tocSgooglecloudredisv1zonemetadata"></a>
<a id="tocsgooglecloudredisv1zonemetadata"></a>

```json
{}
```

Defines specific information for a particular zone. Currently empty and reserved for future use only.

<h2 id="tocS_ImportInstanceRequest">ImportInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportinstancerequest"></a>
<a id="schema_ImportInstanceRequest"></a>
<a id="tocSimportinstancerequest"></a>
<a id="tocsimportinstancerequest"></a>

```json
{
  "inputConfig": {
    "gcsSource": {
      "uri": "string"
    }
  }
}
```

Request for Import.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfig|[InputConfig](#schemainputconfig)|false|none|Required. Specify data to be imported.|

<h2 id="tocS_InputConfig">InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputconfig"></a>
<a id="schema_InputConfig"></a>
<a id="tocSinputconfig"></a>
<a id="tocsinputconfig"></a>

```json
{
  "gcsSource": {
    "uri": "string"
  }
}
```

The input content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GcsSource](#schemagcssource)|false|none|Google Cloud Storage location where input content is located.|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "alternativeLocationId": "string",
  "authEnabled": true,
  "authorizedNetwork": "string",
  "availableMaintenanceVersions": [
    "string"
  ],
  "connectMode": "CONNECT_MODE_UNSPECIFIED",
  "createTime": "string",
  "currentLocationId": "string",
  "customerManagedKey": "string",
  "displayName": "string",
  "host": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "maintenancePolicy": {
    "createTime": "string",
    "description": "string",
    "updateTime": "string",
    "weeklyMaintenanceWindow": [
      {
        "day": "DAY_OF_WEEK_UNSPECIFIED",
        "duration": "string",
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ]
  },
  "maintenanceSchedule": {
    "canReschedule": true,
    "endTime": "string",
    "scheduleDeadlineTime": "string",
    "startTime": "string"
  },
  "maintenanceVersion": "string",
  "memorySizeGb": 0,
  "name": "string",
  "nodes": [
    {
      "id": "string",
      "zone": "string"
    }
  ],
  "persistenceConfig": {
    "persistenceMode": "PERSISTENCE_MODE_UNSPECIFIED",
    "rdbNextSnapshotTime": "string",
    "rdbSnapshotPeriod": "SNAPSHOT_PERIOD_UNSPECIFIED",
    "rdbSnapshotStartTime": "string"
  },
  "persistenceIamIdentity": "string",
  "port": 0,
  "readEndpoint": "string",
  "readEndpointPort": 0,
  "readReplicasMode": "READ_REPLICAS_MODE_UNSPECIFIED",
  "redisConfigs": {
    "property1": "string",
    "property2": "string"
  },
  "redisVersion": "string",
  "replicaCount": 0,
  "reservedIpRange": "string",
  "secondaryIpRange": "string",
  "serverCaCerts": [
    {
      "cert": "string",
      "createTime": "string",
      "expireTime": "string",
      "serialNumber": "string",
      "sha1Fingerprint": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "suspensionReasons": [
    "SUSPENSION_REASON_UNSPECIFIED"
  ],
  "tier": "TIER_UNSPECIFIED",
  "transitEncryptionMode": "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
}
```

A Memorystore for Redis instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternativeLocationId|string|false|none|Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.|
|authEnabled|boolean|false|none|Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.|
|authorizedNetwork|string|false|none|Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.|
|availableMaintenanceVersions|[string]|false|none|Optional. The available maintenance versions that an instance could update to.|
|connectMode|string|false|none|Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the instance was created.|
|currentLocationId|string|false|read-only|Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance.|
|customerManagedKey|string|false|none|Optional. The KMS key reference that the customer provides when trying to create the instance.|
|displayName|string|false|none|An arbitrary and optional user-provided name for the instance.|
|host|string|false|read-only|Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service.|
|labels|object|false|none|Resource labels to represent user provided metadata|
|locationId|string|false|none|Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.|
|maintenancePolicy|[MaintenancePolicy](#schemamaintenancepolicy)|false|none|Optional. The maintenance policy for the instance. If not provided, maintenance events can be performed at any time.|
|maintenanceSchedule|[MaintenanceSchedule](#schemamaintenanceschedule)|false|none|Output only. Date and time of upcoming maintenance events which have been scheduled.|
|maintenanceVersion|string|false|none|Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".|
|memorySizeGb|integer(int32)|false|none|Required. Redis memory size in GiB.|
|name|string|false|none|Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.|
|nodes|[[NodeInfo](#schemanodeinfo)]|false|read-only|Output only. Info per node.|
|persistenceConfig|[PersistenceConfig](#schemapersistenceconfig)|false|none|Optional. Persistence configuration parameters|
|persistenceIamIdentity|string|false|read-only|Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is "serviceAccount:". The value may change over time for a given instance so should be checked before each import/export operation.|
|port|integer(int32)|false|read-only|Output only. The port number of the exposed Redis endpoint.|
|readEndpoint|string|false|read-only|Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target 'host'.|
|readEndpointPort|integer(int32)|false|read-only|Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target 'port'.|
|readReplicasMode|string|false|none|Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.|
|redisConfigs|object|false|none|Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries|
|redisVersion|string|false|none|Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility|
|replicaCount|integer(int32)|false|none|Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.|
|reservedIpRange|string|false|none|Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.|
|secondaryIpRange|string|false|none|Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".|
|serverCaCerts|[[TlsCertificate](#schematlscertificate)]|false|read-only|Output only. List of server CA certificates for the instance.|
|state|string|false|read-only|Output only. The current state of this instance.|
|statusMessage|string|false|read-only|Output only. Additional information about the current status of this instance, if available.|
|suspensionReasons|[string]|false|none|Optional. reasons that causes instance in "SUSPENDED" state.|
|tier|string|false|none|Required. The service tier of the instance.|
|transitEncryptionMode|string|false|none|Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|connectMode|CONNECT_MODE_UNSPECIFIED|
|connectMode|DIRECT_PEERING|
|connectMode|PRIVATE_SERVICE_ACCESS|
|readReplicasMode|READ_REPLICAS_MODE_UNSPECIFIED|
|readReplicasMode|READ_REPLICAS_DISABLED|
|readReplicasMode|READ_REPLICAS_ENABLED|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|UPDATING|
|state|DELETING|
|state|REPAIRING|
|state|MAINTENANCE|
|state|IMPORTING|
|state|FAILING_OVER|
|suspensionReasons|SUSPENSION_REASON_UNSPECIFIED|
|suspensionReasons|CUSTOMER_MANAGED_KEY_ISSUE|
|tier|TIER_UNSPECIFIED|
|tier|BASIC|
|tier|STANDARD_HA|
|transitEncryptionMode|TRANSIT_ENCRYPTION_MODE_UNSPECIFIED|
|transitEncryptionMode|SERVER_AUTHENTICATION|
|transitEncryptionMode|DISABLED|

<h2 id="tocS_InstanceAuthString">InstanceAuthString</h2>
<!-- backwards compatibility -->
<a id="schemainstanceauthstring"></a>
<a id="schema_InstanceAuthString"></a>
<a id="tocSinstanceauthstring"></a>
<a id="tocsinstanceauthstring"></a>

```json
{
  "authString": "string"
}
```

Instance AUTH string details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authString|string|false|none|AUTH string set on the instance.|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "instances": [
    {
      "alternativeLocationId": "string",
      "authEnabled": true,
      "authorizedNetwork": "string",
      "availableMaintenanceVersions": [
        "string"
      ],
      "connectMode": "CONNECT_MODE_UNSPECIFIED",
      "createTime": "string",
      "currentLocationId": "string",
      "customerManagedKey": "string",
      "displayName": "string",
      "host": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "maintenancePolicy": {
        "createTime": "string",
        "description": "string",
        "updateTime": "string",
        "weeklyMaintenanceWindow": [
          {
            "day": "DAY_OF_WEEK_UNSPECIFIED",
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      },
      "maintenanceSchedule": {
        "canReschedule": true,
        "endTime": "string",
        "scheduleDeadlineTime": "string",
        "startTime": "string"
      },
      "maintenanceVersion": "string",
      "memorySizeGb": 0,
      "name": "string",
      "nodes": [
        {
          "id": "string",
          "zone": "string"
        }
      ],
      "persistenceConfig": {
        "persistenceMode": "PERSISTENCE_MODE_UNSPECIFIED",
        "rdbNextSnapshotTime": "string",
        "rdbSnapshotPeriod": "SNAPSHOT_PERIOD_UNSPECIFIED",
        "rdbSnapshotStartTime": "string"
      },
      "persistenceIamIdentity": "string",
      "port": 0,
      "readEndpoint": "string",
      "readEndpointPort": 0,
      "readReplicasMode": "READ_REPLICAS_MODE_UNSPECIFIED",
      "redisConfigs": {
        "property1": "string",
        "property2": "string"
      },
      "redisVersion": "string",
      "replicaCount": 0,
      "reservedIpRange": "string",
      "secondaryIpRange": "string",
      "serverCaCerts": [
        {
          "cert": "string",
          "createTime": "string",
          "expireTime": "string",
          "serialNumber": "string",
          "sha1Fingerprint": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "tier": "TIER_UNSPECIFIED",
      "transitEncryptionMode": "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for ListInstances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[Instance](#schemainstance)]|false|none|A list of Redis instances in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the `name` field set to a value of the form `projects/{project_id}/locations/{location_id}/instances/`- and the `status` field set to ERROR and `status_message` field set to "location not available for ListInstances".|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
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
|locationId|string|false|none|Resource ID for the region. For example: "us-east1".|
|metadata|object|false|none|Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance.|
|name|string|false|none|Full resource name for the region. For example: "projects/example-project/locations/us-east1".|

<h2 id="tocS_MaintenancePolicy">MaintenancePolicy</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancepolicy"></a>
<a id="schema_MaintenancePolicy"></a>
<a id="tocSmaintenancepolicy"></a>
<a id="tocsmaintenancepolicy"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "updateTime": "string",
  "weeklyMaintenanceWindow": [
    {
      "day": "DAY_OF_WEEK_UNSPECIFIED",
      "duration": "string",
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ]
}
```

Maintenance policy for an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the policy was created.|
|description|string|false|none|Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the policy was last updated.|
|weeklyMaintenanceWindow|[[WeeklyMaintenanceWindow](#schemaweeklymaintenancewindow)]|false|none|Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one.|

<h2 id="tocS_MaintenanceSchedule">MaintenanceSchedule</h2>
<!-- backwards compatibility -->
<a id="schemamaintenanceschedule"></a>
<a id="schema_MaintenanceSchedule"></a>
<a id="tocSmaintenanceschedule"></a>
<a id="tocsmaintenanceschedule"></a>

```json
{
  "canReschedule": true,
  "endTime": "string",
  "scheduleDeadlineTime": "string",
  "startTime": "string"
}
```

Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canReschedule|boolean|false|none|If the scheduled maintenance can be rescheduled, default is true.|
|endTime|string(google-datetime)|false|read-only|Output only. The end time of any upcoming scheduled maintenance for this instance.|
|scheduleDeadlineTime|string(google-datetime)|false|read-only|Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.|
|startTime|string(google-datetime)|false|read-only|Output only. The start time of any upcoming scheduled maintenance for this instance.|

<h2 id="tocS_NodeInfo">NodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemanodeinfo"></a>
<a id="schema_NodeInfo"></a>
<a id="tocSnodeinfo"></a>
<a id="tocsnodeinfo"></a>

```json
{
  "id": "string",
  "zone": "string"
}
```

Node specific properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|Output only. Node identifying string. e.g. 'node-0', 'node-1'|
|zone|string|false|read-only|Output only. Location of the node.|

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
|metadata|object|false|none|{ `createTime`: The time the operation was created. `endTime`: The time the operation finished running. `target`: Server-defined resource path for the target of the operation. `verb`: Name of the verb executed by the operation. `statusDetail`: Human-readable status of the operation, if any. `cancelRequested`: Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. `apiVersion`: API version used to start the operation. }|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OutputConfig">OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputconfig"></a>
<a id="schema_OutputConfig"></a>
<a id="tocSoutputconfig"></a>
<a id="tocsoutputconfig"></a>

```json
{
  "gcsDestination": {
    "uri": "string"
  }
}
```

The output content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|Google Cloud Storage destination for output content.|

<h2 id="tocS_PersistenceConfig">PersistenceConfig</h2>
<!-- backwards compatibility -->
<a id="schemapersistenceconfig"></a>
<a id="schema_PersistenceConfig"></a>
<a id="tocSpersistenceconfig"></a>
<a id="tocspersistenceconfig"></a>

```json
{
  "persistenceMode": "PERSISTENCE_MODE_UNSPECIFIED",
  "rdbNextSnapshotTime": "string",
  "rdbSnapshotPeriod": "SNAPSHOT_PERIOD_UNSPECIFIED",
  "rdbSnapshotStartTime": "string"
}
```

Configuration of the persistence functionality.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|persistenceMode|string|false|none|Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.|
|rdbNextSnapshotTime|string(google-datetime)|false|read-only|Output only. The next time that a snapshot attempt is scheduled to occur.|
|rdbSnapshotPeriod|string|false|none|Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default.|
|rdbSnapshotStartTime|string(google-datetime)|false|none|Optional. Date and time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used.|

#### Enumerated Values

|Property|Value|
|---|---|
|persistenceMode|PERSISTENCE_MODE_UNSPECIFIED|
|persistenceMode|DISABLED|
|persistenceMode|RDB|
|rdbSnapshotPeriod|SNAPSHOT_PERIOD_UNSPECIFIED|
|rdbSnapshotPeriod|ONE_HOUR|
|rdbSnapshotPeriod|SIX_HOURS|
|rdbSnapshotPeriod|TWELVE_HOURS|
|rdbSnapshotPeriod|TWENTY_FOUR_HOURS|

<h2 id="tocS_ReconciliationOperationMetadata">ReconciliationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemareconciliationoperationmetadata"></a>
<a id="schema_ReconciliationOperationMetadata"></a>
<a id="tocSreconciliationoperationmetadata"></a>
<a id="tocsreconciliationoperationmetadata"></a>

```json
{
  "deleteResource": true,
  "exclusiveAction": "UNKNOWN_REPAIR_ACTION"
}
```

Operation metadata returned by the CLH during resource state reconciliation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteResource|boolean|false|none|DEPRECATED. Use exclusive_action instead.|
|exclusiveAction|string|false|none|Excluisive action returned by the CLH.|

#### Enumerated Values

|Property|Value|
|---|---|
|exclusiveAction|UNKNOWN_REPAIR_ACTION|
|exclusiveAction|DELETE|
|exclusiveAction|RETRY|

<h2 id="tocS_RescheduleMaintenanceRequest">RescheduleMaintenanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemareschedulemaintenancerequest"></a>
<a id="schema_RescheduleMaintenanceRequest"></a>
<a id="tocSreschedulemaintenancerequest"></a>
<a id="tocsreschedulemaintenancerequest"></a>

```json
{
  "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
  "scheduleTime": "string"
}
```

Request for RescheduleMaintenance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rescheduleType|string|false|none|Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well.|
|scheduleTime|string(google-datetime)|false|none|Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.|

#### Enumerated Values

|Property|Value|
|---|---|
|rescheduleType|RESCHEDULE_TYPE_UNSPECIFIED|
|rescheduleType|IMMEDIATE|
|rescheduleType|NEXT_AVAILABLE_WINDOW|
|rescheduleType|SPECIFIC_TIME|

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

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_TlsCertificate">TlsCertificate</h2>
<!-- backwards compatibility -->
<a id="schematlscertificate"></a>
<a id="schema_TlsCertificate"></a>
<a id="tocStlscertificate"></a>
<a id="tocstlscertificate"></a>

```json
{
  "cert": "string",
  "createTime": "string",
  "expireTime": "string",
  "serialNumber": "string",
  "sha1Fingerprint": "string"
}
```

TlsCertificate Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cert|string|false|none|PEM representation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.|
|expireTime|string(google-datetime)|false|read-only|Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.|
|serialNumber|string|false|none|Serial number, as extracted from the certificate.|
|sha1Fingerprint|string|false|none|Sha1 Fingerprint of the certificate.|

<h2 id="tocS_UpgradeInstanceRequest">UpgradeInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeinstancerequest"></a>
<a id="schema_UpgradeInstanceRequest"></a>
<a id="tocSupgradeinstancerequest"></a>
<a id="tocsupgradeinstancerequest"></a>

```json
{
  "redisVersion": "string"
}
```

Request for UpgradeInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redisVersion|string|false|none|Required. Specifies the target version of Redis software to upgrade to.|

<h2 id="tocS_WeeklyMaintenanceWindow">WeeklyMaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemaweeklymaintenancewindow"></a>
<a id="schema_WeeklyMaintenanceWindow"></a>
<a id="tocSweeklymaintenancewindow"></a>
<a id="tocsweeklymaintenancewindow"></a>

```json
{
  "day": "DAY_OF_WEEK_UNSPECIFIED",
  "duration": "string",
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|false|none|Required. The day of week that maintenance updates occur.|
|duration|string(google-duration)|false|read-only|Output only. Duration of the maintenance window. The current window is fixed at 1 hour.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Required. Start time of the window in UTC time.|

#### Enumerated Values

|Property|Value|
|---|---|
|day|DAY_OF_WEEK_UNSPECIFIED|
|day|MONDAY|
|day|TUESDAY|
|day|WEDNESDAY|
|day|THURSDAY|
|day|FRIDAY|
|day|SATURDAY|
|day|SUNDAY|
