<h1 id="cloud-memorystore-for-memcached-api">Cloud Memorystore for Memcached API v1beta2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Google Cloud Memorystore for Memcached API is used for creating and managing Memcached instances in GCP.

Base URLs:

* <a href="https://memcache.googleapis.com/">https://memcache.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/memorystore/">External documentation</a>

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

<h1 id="cloud-memorystore-for-memcached-api-projects">projects</h1>

## memcache.projects.locations.instances.applySoftwareUpdate

<a id="opIdmemcache.projects.locations.instances.applySoftwareUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:applySoftwareUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applyAll": true,
    "nodeIds": [
      "string"
    ]
  }'
```

`POST /v1beta2/{instance}:applySoftwareUpdate`

Updates software on the selected nodes of the Instance.

> Body parameter

```json
{
  "applyAll": true,
  "nodeIds": [
    "string"
  ]
}
```

<h3 id="memcacheprojectslocationsinstancesapplysoftwareupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instance|path|string|true|Required. Resource name of the Memcached instance for which software update should be applied.|
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
|body|body|[ApplySoftwareUpdateRequest](#schemaapplysoftwareupdaterequest)|false|none|
|» applyAll|body|boolean|false|Whether to apply the update to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply software update to all nodes (where applicable) within the instance.|
|» nodeIds|body|[string]|false|Nodes to which we should apply the update to. Note all the selected nodes are updated in parallel.|

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

<h3 id="memcacheprojectslocationsinstancesapplysoftwareupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.instances.rescheduleMaintenance

<a id="opIdmemcache.projects.locations.instances.rescheduleMaintenance"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:rescheduleMaintenance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
    "scheduleTime": "string"
  }'
```

`POST /v1beta2/{instance}:rescheduleMaintenance`

Performs the apply phase of the RescheduleMaintenance verb.

> Body parameter

```json
{
  "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
  "scheduleTime": "string"
}
```

<h3 id="memcacheprojectslocationsinstancesreschedulemaintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instance|path|string|true|Required. Memcache instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.|
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
|» scheduleTime|body|string(google-datetime)|false|Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.|

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

<h3 id="memcacheprojectslocationsinstancesreschedulemaintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.operations.get

<a id="opIdmemcache.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="memcacheprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="memcacheprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.operations.delete

<a id="opIdmemcache.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta2/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="memcacheprojectslocationsoperationsdelete-parameters">Parameters</h3>

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

<h3 id="memcacheprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.instances.patch

<a id="opIdmemcache.projects.locations.instances.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorizedNetwork": "string",
    "displayName": "string",
    "instanceMessages": [
      {
        "code": "CODE_UNSPECIFIED",
        "message": "string"
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "maintenancePolicy": {
      "description": "string",
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
    "memcacheVersion": "MEMCACHE_VERSION_UNSPECIFIED",
    "name": "string",
    "nodeConfig": {
      "cpuCount": 0,
      "memorySizeMb": 0
    },
    "nodeCount": 0,
    "parameters": {
      "params": {
        "property1": "string",
        "property2": "string"
      }
    },
    "zones": [
      "string"
    ]
  }'
```

`PATCH /v1beta2/{name}`

Updates an existing Instance in a given project and location.

> Body parameter

```json
{
  "authorizedNetwork": "string",
  "displayName": "string",
  "instanceMessages": [
    {
      "code": "CODE_UNSPECIFIED",
      "message": "string"
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maintenancePolicy": {
    "description": "string",
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
  "memcacheVersion": "MEMCACHE_VERSION_UNSPECIFIED",
  "name": "string",
  "nodeConfig": {
    "cpuCount": 0,
    "memorySizeMb": 0
  },
  "nodeCount": 0,
  "parameters": {
    "params": {
      "property1": "string",
      "property2": "string"
    }
  },
  "zones": [
    "string"
  ]
}
```

<h3 id="memcacheprojectslocationsinstancespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.|
|updateMask|query|string|false|Required. Mask of fields to update. * `displayName`|
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
|» authorizedNetwork|body|string|false|The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.|
|» displayName|body|string|false|User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.|
|» instanceMessages|body|[[InstanceMessage](#schemainstancemessage)]|false|List of messages that describe the current state of the Memcached instance.|
|» labels|body|object|false|Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources|
|» » **additionalProperties**|body|string|false|none|
|» maintenancePolicy|body|[GoogleCloudMemcacheV1beta2MaintenancePolicy](#schemagooglecloudmemcachev1beta2maintenancepolicy)|false|The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule.|
|» memcacheVersion|body|string|false|The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.|
|» name|body|string|false|Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.|
|» nodeConfig|body|[NodeConfig](#schemanodeconfig)|false|Required. Configuration for Memcached nodes.|
|» nodeCount|body|integer(int32)|false|Required. Number of nodes in the Memcached instance.|
|» parameters|body|[MemcacheParameters](#schemamemcacheparameters)|false|User defined parameters to apply to the memcached process on each node.|
|» zones|body|[string]|false|Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» memcacheVersion|MEMCACHE_VERSION_UNSPECIFIED|
|» memcacheVersion|MEMCACHE_1_5|

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

<h3 id="memcacheprojectslocationsinstancespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.list

<a id="opIdmemcache.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="memcacheprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="memcacheprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.operations.list

<a id="opIdmemcache.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="memcacheprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="memcacheprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.instances.applyParameters

<a id="opIdmemcache.projects.locations.instances.applyParameters"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:applyParameters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applyAll": true,
    "nodeIds": [
      "string"
    ]
  }'
```

`POST /v1beta2/{name}:applyParameters`

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

> Body parameter

```json
{
  "applyAll": true,
  "nodeIds": [
    "string"
  ]
}
```

<h3 id="memcacheprojectslocationsinstancesapplyparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the Memcached instance for which parameter group updates should be applied.|
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
|body|body|[ApplyParametersRequest](#schemaapplyparametersrequest)|false|none|
|» applyAll|body|boolean|false|Whether to apply instance-level parameter group to all nodes. If set to true, users are restricted from specifying individual nodes, and `ApplyParameters` updates all nodes within the instance.|
|» nodeIds|body|[string]|false|Nodes to which the instance-level parameter group is applied.|

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

<h3 id="memcacheprojectslocationsinstancesapplyparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.operations.cancel

<a id="opIdmemcache.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta2/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="memcacheprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="memcacheprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.instances.updateParameters

<a id="opIdmemcache.projects.locations.instances.updateParameters"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:updateParameters \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "parameters": {
      "params": {
        "property1": "string",
        "property2": "string"
      }
    },
    "updateMask": "string"
  }'
```

`PATCH /v1beta2/{name}:updateParameters`

Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.

> Body parameter

```json
{
  "parameters": {
    "params": {
      "property1": "string",
      "property2": "string"
    }
  },
  "updateMask": "string"
}
```

<h3 id="memcacheprojectslocationsinstancesupdateparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the Memcached instance for which the parameters should be updated.|
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
|body|body|[UpdateParametersRequest](#schemaupdateparametersrequest)|false|none|
|» parameters|body|[MemcacheParameters](#schemamemcacheparameters)|false|The parameters to apply to the instance.|
|» updateMask|body|string(google-fieldmask)|false|Required. Mask of fields to update.|

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

<h3 id="memcacheprojectslocationsinstancesupdateparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.instances.list

<a id="opIdmemcache.projects.locations.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/instances`

Lists Instances in a given location.

<h3 id="memcacheprojectslocationsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region|
|filter|query|string|false|List filter. For example, exclude all Memcached instances with name as my-instance by specifying `"name != my-instance"`.|
|orderBy|query|string|false|Sort results. Supported values are "name", "name desc" or "" (unsorted).|
|pageSize|query|integer|false|The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the `page_size` value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous List request, if any.|
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
  "resources": [
    {
      "authorizedNetwork": "string",
      "createTime": "string",
      "discoveryEndpoint": "string",
      "displayName": "string",
      "instanceMessages": [
        {
          "code": "CODE_UNSPECIFIED",
          "message": "string"
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
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
        "endTime": "string",
        "scheduleDeadlineTime": "string",
        "startTime": "string"
      },
      "memcacheFullVersion": "string",
      "memcacheNodes": [
        {
          "host": "string",
          "nodeId": "string",
          "parameters": {
            "id": "string",
            "params": {
              "property1": "string",
              "property2": "string"
            }
          },
          "port": 0,
          "state": "STATE_UNSPECIFIED",
          "updateAvailable": true,
          "zone": "string"
        }
      ],
      "memcacheVersion": "MEMCACHE_VERSION_UNSPECIFIED",
      "name": "string",
      "nodeConfig": {
        "cpuCount": 0,
        "memorySizeMb": 0
      },
      "nodeCount": 0,
      "parameters": {
        "id": "string",
        "params": {
          "property1": "string",
          "property2": "string"
        }
      },
      "state": "STATE_UNSPECIFIED",
      "updateAvailable": true,
      "updateTime": "string",
      "zones": [
        "string"
      ]
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="memcacheprojectslocationsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstancesResponse](#schemalistinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## memcache.projects.locations.instances.create

<a id="opIdmemcache.projects.locations.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorizedNetwork": "string",
    "displayName": "string",
    "instanceMessages": [
      {
        "code": "CODE_UNSPECIFIED",
        "message": "string"
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "maintenancePolicy": {
      "description": "string",
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
    "memcacheVersion": "MEMCACHE_VERSION_UNSPECIFIED",
    "name": "string",
    "nodeConfig": {
      "cpuCount": 0,
      "memorySizeMb": 0
    },
    "nodeCount": 0,
    "parameters": {
      "params": {
        "property1": "string",
        "property2": "string"
      }
    },
    "zones": [
      "string"
    ]
  }'
```

`POST /v1beta2/{parent}/instances`

Creates a new Instance in a given location.

> Body parameter

```json
{
  "authorizedNetwork": "string",
  "displayName": "string",
  "instanceMessages": [
    {
      "code": "CODE_UNSPECIFIED",
      "message": "string"
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maintenancePolicy": {
    "description": "string",
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
  "memcacheVersion": "MEMCACHE_VERSION_UNSPECIFIED",
  "name": "string",
  "nodeConfig": {
    "cpuCount": 0,
    "memorySizeMb": 0
  },
  "nodeCount": 0,
  "parameters": {
    "params": {
      "property1": "string",
      "property2": "string"
    }
  },
  "zones": [
    "string"
  ]
}
```

<h3 id="memcacheprojectslocationsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region|
|instanceId|query|string|false|Required. The logical name of the Memcached instance in the user project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the user project / location. If any of the above are not met, the API raises an invalid argument error.|
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
|» authorizedNetwork|body|string|false|The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.|
|» displayName|body|string|false|User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.|
|» instanceMessages|body|[[InstanceMessage](#schemainstancemessage)]|false|List of messages that describe the current state of the Memcached instance.|
|» labels|body|object|false|Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources|
|» » **additionalProperties**|body|string|false|none|
|» maintenancePolicy|body|[GoogleCloudMemcacheV1beta2MaintenancePolicy](#schemagooglecloudmemcachev1beta2maintenancepolicy)|false|The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule.|
|» memcacheVersion|body|string|false|The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.|
|» name|body|string|false|Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.|
|» nodeConfig|body|[NodeConfig](#schemanodeconfig)|false|Required. Configuration for Memcached nodes.|
|» nodeCount|body|integer(int32)|false|Required. Number of nodes in the Memcached instance.|
|» parameters|body|[MemcacheParameters](#schemamemcacheparameters)|false|User defined parameters to apply to the memcached process on each node.|
|» zones|body|[string]|false|Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» memcacheVersion|MEMCACHE_VERSION_UNSPECIFIED|
|» memcacheVersion|MEMCACHE_1_5|

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

<h3 id="memcacheprojectslocationsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_ApplyParametersRequest">ApplyParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapplyparametersrequest"></a>
<a id="schema_ApplyParametersRequest"></a>
<a id="tocSapplyparametersrequest"></a>
<a id="tocsapplyparametersrequest"></a>

```json
{
  "applyAll": true,
  "nodeIds": [
    "string"
  ]
}
```

Request for ApplyParameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applyAll|boolean|false|none|Whether to apply instance-level parameter group to all nodes. If set to true, users are restricted from specifying individual nodes, and `ApplyParameters` updates all nodes within the instance.|
|nodeIds|[string]|false|none|Nodes to which the instance-level parameter group is applied.|

<h2 id="tocS_ApplySoftwareUpdateRequest">ApplySoftwareUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapplysoftwareupdaterequest"></a>
<a id="schema_ApplySoftwareUpdateRequest"></a>
<a id="tocSapplysoftwareupdaterequest"></a>
<a id="tocsapplysoftwareupdaterequest"></a>

```json
{
  "applyAll": true,
  "nodeIds": [
    "string"
  ]
}
```

Request for ApplySoftwareUpdate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applyAll|boolean|false|none|Whether to apply the update to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply software update to all nodes (where applicable) within the instance.|
|nodeIds|[string]|false|none|Nodes to which we should apply the update to. Note all the selected nodes are updated in parallel.|

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

<h2 id="tocS_DailyCycle">DailyCycle</h2>
<!-- backwards compatibility -->
<a id="schemadailycycle"></a>
<a id="schema_DailyCycle"></a>
<a id="tocSdailycycle"></a>
<a id="tocsdailycycle"></a>

```json
{
  "duration": "string",
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Time window specified for daily operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string(google-duration)|false|none|Output only. Duration of the time window, set by service producer.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Time within the day to start the operations.|

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

<h2 id="tocS_DenyMaintenancePeriod">DenyMaintenancePeriod</h2>
<!-- backwards compatibility -->
<a id="schemadenymaintenanceperiod"></a>
<a id="schema_DenyMaintenancePeriod"></a>
<a id="tocSdenymaintenanceperiod"></a>
<a id="tocsdenymaintenanceperiod"></a>

```json
{
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "time": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|[Date](#schemadate)|false|none|Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end.|
|startDate|[Date](#schemadate)|false|none|Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start.|
|time|[TimeOfDay](#schematimeofday)|false|none|Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC|

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

<h2 id="tocS_GoogleCloudMemcacheV1beta2LocationMetadata">GoogleCloudMemcacheV1beta2LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmemcachev1beta2locationmetadata"></a>
<a id="schema_GoogleCloudMemcacheV1beta2LocationMetadata"></a>
<a id="tocSgooglecloudmemcachev1beta2locationmetadata"></a>
<a id="tocsgooglecloudmemcachev1beta2locationmetadata"></a>

```json
{
  "availableZones": {
    "property1": {},
    "property2": {}
  }
}
```

Metadata for the given google.cloud.location.Location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableZones|object|false|read-only|Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance.|

<h2 id="tocS_GoogleCloudMemcacheV1beta2MaintenancePolicy">GoogleCloudMemcacheV1beta2MaintenancePolicy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmemcachev1beta2maintenancepolicy"></a>
<a id="schema_GoogleCloudMemcacheV1beta2MaintenancePolicy"></a>
<a id="tocSgooglecloudmemcachev1beta2maintenancepolicy"></a>
<a id="tocsgooglecloudmemcachev1beta2maintenancepolicy"></a>

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

Maintenance policy per instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the policy was created.|
|description|string|false|none|Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the policy was updated.|
|weeklyMaintenanceWindow|[[WeeklyMaintenanceWindow](#schemaweeklymaintenancewindow)]|false|none|Required. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_maintenance_windows is expected to be one.|

<h2 id="tocS_GoogleCloudMemcacheV1beta2OperationMetadata">GoogleCloudMemcacheV1beta2OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmemcachev1beta2operationmetadata"></a>
<a id="schema_GoogleCloudMemcacheV1beta2OperationMetadata"></a>
<a id="tocSgooglecloudmemcachev1beta2operationmetadata"></a>
<a id="tocsgooglecloudmemcachev1beta2operationmetadata"></a>

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

Represents the metadata of a long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|cancelRequested|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. Time when the operation finished running.|
|statusDetail|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudMemcacheV1beta2ZoneMetadata">GoogleCloudMemcacheV1beta2ZoneMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmemcachev1beta2zonemetadata"></a>
<a id="schema_GoogleCloudMemcacheV1beta2ZoneMetadata"></a>
<a id="tocSgooglecloudmemcachev1beta2zonemetadata"></a>
<a id="tocsgooglecloudmemcachev1beta2zonemetadata"></a>

```json
{}
```

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1Instance">GoogleCloudSaasacceleratorManagementProvidersV1Instance</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1instance"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1Instance"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1instance"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1instance"></a>

```json
{
  "consumerDefinedName": "string",
  "createTime": "string",
  "instanceType": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maintenancePolicyNames": {
    "property1": "string",
    "property2": "string"
  },
  "maintenanceSchedules": {
    "property1": {
      "canReschedule": true,
      "endTime": "string",
      "rolloutManagementPolicy": "string",
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    },
    "property2": {
      "canReschedule": true,
      "endTime": "string",
      "rolloutManagementPolicy": "string",
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    }
  },
  "maintenanceSettings": {
    "exclude": true,
    "isRollback": true,
    "maintenancePolicies": {
      "property1": {
        "createTime": "string",
        "description": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "state": "STATE_UNSPECIFIED",
        "updatePolicy": {
          "channel": "UPDATE_CHANNEL_UNSPECIFIED",
          "denyMaintenancePeriods": [
            {
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "time": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "window": {
            "dailyCycle": {
              "duration": "string",
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            },
            "weeklyCycle": {
              "schedule": [
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
          }
        },
        "updateTime": "string"
      },
      "property2": {
        "createTime": "string",
        "description": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "state": "STATE_UNSPECIFIED",
        "updatePolicy": {
          "channel": "UPDATE_CHANNEL_UNSPECIFIED",
          "denyMaintenancePeriods": [
            {
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "time": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "window": {
            "dailyCycle": {
              "duration": "string",
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            },
            "weeklyCycle": {
              "schedule": [
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
          }
        },
        "updateTime": "string"
      }
    }
  },
  "name": "string",
  "notificationParameters": {
    "property1": {
      "values": [
        "string"
      ]
    },
    "property2": {
      "values": [
        "string"
      ]
    }
  },
  "producerMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "provisionedResources": [
    {
      "resourceType": "string",
      "resourceUrl": "string"
    }
  ],
  "slmInstanceTemplate": "string",
  "sloMetadata": {
    "nodes": [
      {
        "location": "string",
        "nodeId": "string",
        "perSliEligibility": {
          "eligibilities": {
            "property1": {
              "eligible": true,
              "reason": "string"
            },
            "property2": {
              "eligible": true,
              "reason": "string"
            }
          }
        }
      }
    ],
    "perSliEligibility": {
      "eligibilities": {
        "property1": {
          "eligible": true,
          "reason": "string"
        },
        "property2": {
          "eligible": true,
          "reason": "string"
        }
      }
    },
    "tier": "string"
  },
  "softwareVersions": {
    "property1": "string",
    "property2": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "tenantProjectId": "string",
  "updateTime": "string"
}
```

Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerDefinedName|string|false|none|consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites).|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was created.|
|instanceType|string|false|none|Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.|
|maintenancePolicyNames|object|false|none|Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_settings.maintenance_policies is set.|
|maintenanceSchedules|object|false|none|The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.|
|maintenanceSettings|[GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings](#schemagooglecloudsaasacceleratormanagementprovidersv1maintenancesettings)|false|none|Optional. The MaintenanceSettings associated with instance.|
|name|string|false|none|Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details.|
|notificationParameters|object|false|none|Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose.|
|producerMetadata|object|false|read-only|Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.|
|provisionedResources|[[GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource](#schemagooglecloudsaasacceleratormanagementprovidersv1provisionedresource)]|false|read-only|Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.|
|slmInstanceTemplate|string|false|none|Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.|
|sloMetadata|[GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata](#schemagooglecloudsaasacceleratormanagementprovidersv1slometadata)|false|none|Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.|
|softwareVersions|object|false|none|Software versions that are used to deploy this instance. This can be mutated by rollout services.|
|state|string|false|read-only|Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).|
|tenantProjectId|string|false|read-only|Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|UPDATING|
|state|REPAIRING|
|state|DELETING|
|state|ERROR|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule">GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>

```json
{
  "canReschedule": true,
  "endTime": "string",
  "rolloutManagementPolicy": "string",
  "scheduleDeadlineTime": "string",
  "startTime": "string"
}
```

Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canReschedule|boolean|false|none|This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers.|
|endTime|string(google-datetime)|false|none|The scheduled end time for the maintenance.|
|rolloutManagementPolicy|string|false|none|The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.|
|scheduleDeadlineTime|string(google-datetime)|false|none|schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline.|
|startTime|string(google-datetime)|false|none|The scheduled start time for the maintenance.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings">GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>

```json
{
  "exclude": true,
  "isRollback": true,
  "maintenancePolicies": {
    "property1": {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updatePolicy": {
        "channel": "UPDATE_CHANNEL_UNSPECIFIED",
        "denyMaintenancePeriods": [
          {
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "time": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "window": {
          "dailyCycle": {
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          },
          "weeklyCycle": {
            "schedule": [
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
        }
      },
      "updateTime": "string"
    },
    "property2": {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updatePolicy": {
        "channel": "UPDATE_CHANNEL_UNSPECIFIED",
        "denyMaintenancePeriods": [
          {
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "time": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "window": {
          "dailyCycle": {
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          },
          "weeklyCycle": {
            "schedule": [
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
        }
      },
      "updateTime": "string"
    }
  }
}
```

Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclude|boolean|false|none|Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.|
|isRollback|boolean|false|none|Optional. If the update call is triggered from rollback, set the value as true.|
|maintenancePolicies|object|false|none|Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata">GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>

```json
{
  "location": "string",
  "nodeId": "string",
  "perSliEligibility": {
    "eligibilities": {
      "property1": {
        "eligible": true,
        "reason": "string"
      },
      "property2": {
        "eligible": true,
        "reason": "string"
      }
    }
  }
}
```

Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|The location of the node, if different from instance location.|
|nodeId|string|false|none|The id of the node. This should be equal to SaasInstanceNode.node_id.|
|perSliEligibility|[GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility](#schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility)|false|none|If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter">GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>

```json
{
  "values": [
    "string"
  ]
}
```

Contains notification related data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|Optional. Array of string values. e.g. instance's replica information.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility">GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>

```json
{
  "eligibilities": {
    "property1": {
      "eligible": true,
      "reason": "string"
    },
    "property2": {
      "eligible": true,
      "reason": "string"
    }
  }
}
```

PerSliSloEligibility is a mapping from an SLI name to eligibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibilities|object|false|none|An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource">GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>

```json
{
  "resourceType": "string",
  "resourceUrl": "string"
}
```

Describes provisioned dataplane resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|string|false|none|Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.|
|resourceUrl|string|false|none|URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility">GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>

```json
{
  "eligible": true,
  "reason": "string"
}
```

SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligible|boolean|false|none|Whether an instance is eligible or ineligible.|
|reason|string|false|none|User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata">GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>

```json
{
  "nodes": [
    {
      "location": "string",
      "nodeId": "string",
      "perSliEligibility": {
        "eligibilities": {
          "property1": {
            "eligible": true,
            "reason": "string"
          },
          "property2": {
            "eligible": true,
            "reason": "string"
          }
        }
      }
    }
  ],
  "perSliEligibility": {
    "eligibilities": {
      "property1": {
        "eligible": true,
        "reason": "string"
      },
      "property2": {
        "eligible": true,
        "reason": "string"
      }
    }
  },
  "tier": "string"
}
```

SloMetadata contains resources required for proper SLO classification of the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[[GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata](#schemagooglecloudsaasacceleratormanagementprovidersv1nodeslometadata)]|false|none|Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.|
|perSliEligibility|[GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility](#schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility)|false|none|Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs.|
|tier|string|false|none|Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "authorizedNetwork": "string",
  "createTime": "string",
  "discoveryEndpoint": "string",
  "displayName": "string",
  "instanceMessages": [
    {
      "code": "CODE_UNSPECIFIED",
      "message": "string"
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
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
    "endTime": "string",
    "scheduleDeadlineTime": "string",
    "startTime": "string"
  },
  "memcacheFullVersion": "string",
  "memcacheNodes": [
    {
      "host": "string",
      "nodeId": "string",
      "parameters": {
        "id": "string",
        "params": {
          "property1": "string",
          "property2": "string"
        }
      },
      "port": 0,
      "state": "STATE_UNSPECIFIED",
      "updateAvailable": true,
      "zone": "string"
    }
  ],
  "memcacheVersion": "MEMCACHE_VERSION_UNSPECIFIED",
  "name": "string",
  "nodeConfig": {
    "cpuCount": 0,
    "memorySizeMb": 0
  },
  "nodeCount": 0,
  "parameters": {
    "id": "string",
    "params": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "STATE_UNSPECIFIED",
  "updateAvailable": true,
  "updateTime": "string",
  "zones": [
    "string"
  ]
}
```

A Memorystore for Memcached instance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizedNetwork|string|false|none|The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the instance was created.|
|discoveryEndpoint|string|false|read-only|Output only. Endpoint for the Discovery API.|
|displayName|string|false|none|User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.|
|instanceMessages|[[InstanceMessage](#schemainstancemessage)]|false|none|List of messages that describe the current state of the Memcached instance.|
|labels|object|false|none|Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources|
|maintenancePolicy|[GoogleCloudMemcacheV1beta2MaintenancePolicy](#schemagooglecloudmemcachev1beta2maintenancepolicy)|false|none|The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule.|
|maintenanceSchedule|[MaintenanceSchedule](#schemamaintenanceschedule)|false|none|Output only. Published maintenance schedule.|
|memcacheFullVersion|string|false|read-only|Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16".|
|memcacheNodes|[[Node](#schemanode)]|false|read-only|Output only. List of Memcached nodes. Refer to Node message for more details.|
|memcacheVersion|string|false|none|The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.|
|name|string|false|none|Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.|
|nodeConfig|[NodeConfig](#schemanodeconfig)|false|none|Required. Configuration for Memcached nodes.|
|nodeCount|integer(int32)|false|none|Required. Number of nodes in the Memcached instance.|
|parameters|[MemcacheParameters](#schemamemcacheparameters)|false|none|User defined parameters to apply to the memcached process on each node.|
|state|string|false|read-only|Output only. The state of this Memcached instance.|
|updateAvailable|boolean|false|read-only|Output only. Returns true if there is an update waiting to be applied|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the instance was updated.|
|zones|[string]|false|none|Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|memcacheVersion|MEMCACHE_VERSION_UNSPECIFIED|
|memcacheVersion|MEMCACHE_1_5|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|UPDATING|
|state|DELETING|
|state|PERFORMING_MAINTENANCE|

<h2 id="tocS_InstanceMessage">InstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemainstancemessage"></a>
<a id="schema_InstanceMessage"></a>
<a id="tocSinstancemessage"></a>
<a id="tocsinstancemessage"></a>

```json
{
  "code": "CODE_UNSPECIFIED",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|A code that correspond to one type of user-facing message.|
|message|string|false|none|Message on memcached instance which will be exposed to users.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|CODE_UNSPECIFIED|
|code|ZONE_DISTRIBUTION_UNBALANCED|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "nextPageToken": "string",
  "resources": [
    {
      "authorizedNetwork": "string",
      "createTime": "string",
      "discoveryEndpoint": "string",
      "displayName": "string",
      "instanceMessages": [
        {
          "code": "CODE_UNSPECIFIED",
          "message": "string"
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
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
        "endTime": "string",
        "scheduleDeadlineTime": "string",
        "startTime": "string"
      },
      "memcacheFullVersion": "string",
      "memcacheNodes": [
        {
          "host": "string",
          "nodeId": "string",
          "parameters": {
            "id": "string",
            "params": {
              "property1": "string",
              "property2": "string"
            }
          },
          "port": 0,
          "state": "STATE_UNSPECIFIED",
          "updateAvailable": true,
          "zone": "string"
        }
      ],
      "memcacheVersion": "MEMCACHE_VERSION_UNSPECIFIED",
      "name": "string",
      "nodeConfig": {
        "cpuCount": 0,
        "memorySizeMb": 0
      },
      "nodeCount": 0,
      "parameters": {
        "id": "string",
        "params": {
          "property1": "string",
          "property2": "string"
        }
      },
      "state": "STATE_UNSPECIFIED",
      "updateAvailable": true,
      "updateTime": "string",
      "zones": [
        "string"
      ]
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response for ListInstances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|resources|[[Instance](#schemainstance)]|false|none|A list of Memcached instances in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated.|
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
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_LocationMetadata">LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalocationmetadata"></a>
<a id="schema_LocationMetadata"></a>
<a id="tocSlocationmetadata"></a>
<a id="tocslocationmetadata"></a>

```json
{
  "availableZones": {
    "property1": {},
    "property2": {}
  }
}
```

Metadata for the given google.cloud.location.Location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableZones|object|false|read-only|Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance.|

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
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updatePolicy": {
    "channel": "UPDATE_CHANNEL_UNSPECIFIED",
    "denyMaintenancePeriods": [
      {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "time": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ],
    "window": {
      "dailyCycle": {
        "duration": "string",
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      },
      "weeklyCycle": {
        "schedule": [
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
    }
  },
  "updateTime": "string"
}
```

LINT.IfChange Defines policies to service maintenance events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The time when the resource was created.|
|description|string|false|none|Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.|
|name|string|false|none|Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.|
|state|string|false|none|Optional. The state of the policy.|
|updatePolicy|[UpdatePolicy](#schemaupdatepolicy)|false|none|Maintenance policy applicable to instance update.|
|updateTime|string(google-datetime)|false|none|Output only. The time when the resource was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|READY|
|state|DELETING|

<h2 id="tocS_MaintenanceSchedule">MaintenanceSchedule</h2>
<!-- backwards compatibility -->
<a id="schemamaintenanceschedule"></a>
<a id="schema_MaintenanceSchedule"></a>
<a id="tocSmaintenanceschedule"></a>
<a id="tocsmaintenanceschedule"></a>

```json
{
  "endTime": "string",
  "scheduleDeadlineTime": "string",
  "startTime": "string"
}
```

Upcoming maintenance schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|read-only|Output only. The end time of any upcoming scheduled maintenance for this instance.|
|scheduleDeadlineTime|string(google-datetime)|false|read-only|Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.|
|startTime|string(google-datetime)|false|read-only|Output only. The start time of any upcoming scheduled maintenance for this instance.|

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "dailyCycle": {
    "duration": "string",
    "startTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "weeklyCycle": {
    "schedule": [
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
}
```

MaintenanceWindow definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyCycle|[DailyCycle](#schemadailycycle)|false|none|Daily cycle.|
|weeklyCycle|[WeeklyCycle](#schemaweeklycycle)|false|none|Weekly cycle.|

<h2 id="tocS_MemcacheParameters">MemcacheParameters</h2>
<!-- backwards compatibility -->
<a id="schemamemcacheparameters"></a>
<a id="schema_MemcacheParameters"></a>
<a id="tocSmemcacheparameters"></a>
<a id="tocsmemcacheparameters"></a>

```json
{
  "id": "string",
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|Output only. The unique ID associated with this set of parameters. Users can use this id to determine if the parameters associated with the instance differ from the parameters associated with the nodes. A discrepancy between parameter ids can inform users that they may need to take action to apply parameters on nodes.|
|params|object|false|none|User defined set of parameters to use in the memcached process.|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "host": "string",
  "nodeId": "string",
  "parameters": {
    "id": "string",
    "params": {
      "property1": "string",
      "property2": "string"
    }
  },
  "port": 0,
  "state": "STATE_UNSPECIFIED",
  "updateAvailable": true,
  "zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|read-only|Output only. Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.|
|nodeId|string|false|read-only|Output only. Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name.|
|parameters|[MemcacheParameters](#schemamemcacheparameters)|false|none|User defined parameters currently applied to the node.|
|port|integer(int32)|false|read-only|Output only. The port number of the Memcached server on this node.|
|state|string|false|read-only|Output only. Current state of the Memcached node.|
|updateAvailable|boolean|false|read-only|Output only. Returns true if there is an update waiting to be applied|
|zone|string|false|read-only|Output only. Location (GCP Zone) for the Memcached node.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|DELETING|
|state|UPDATING|

<h2 id="tocS_NodeConfig">NodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodeconfig"></a>
<a id="schema_NodeConfig"></a>
<a id="tocSnodeconfig"></a>
<a id="tocsnodeconfig"></a>

```json
{
  "cpuCount": 0,
  "memorySizeMb": 0
}
```

Configuration for a Memcached Node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuCount|integer(int32)|false|none|Required. Number of cpus per Memcached node.|
|memorySizeMb|integer(int32)|false|none|Required. Memory size in MiB for each Memcached node.|

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
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of a long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|cancelRequested|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. Time when the operation finished running.|
|statusDetail|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

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
|scheduleTime|string(google-datetime)|false|none|Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.|

#### Enumerated Values

|Property|Value|
|---|---|
|rescheduleType|RESCHEDULE_TYPE_UNSPECIFIED|
|rescheduleType|IMMEDIATE|
|rescheduleType|NEXT_AVAILABLE_WINDOW|
|rescheduleType|SPECIFIC_TIME|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

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

Configure the schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|false|none|Allows to define schedule that runs specified day of the week.|
|duration|string(google-duration)|false|none|Output only. Duration of the time window, set by service producer.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Time within the window to start the operations.|

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

<h2 id="tocS_UpdateParametersRequest">UpdateParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparametersrequest"></a>
<a id="schema_UpdateParametersRequest"></a>
<a id="tocSupdateparametersrequest"></a>
<a id="tocsupdateparametersrequest"></a>

```json
{
  "parameters": {
    "id": "string",
    "params": {
      "property1": "string",
      "property2": "string"
    }
  },
  "updateMask": "string"
}
```

Request for UpdateParameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|[MemcacheParameters](#schemamemcacheparameters)|false|none|The parameters to apply to the instance.|
|updateMask|string(google-fieldmask)|false|none|Required. Mask of fields to update.|

<h2 id="tocS_UpdatePolicy">UpdatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepolicy"></a>
<a id="schema_UpdatePolicy"></a>
<a id="tocSupdatepolicy"></a>
<a id="tocsupdatepolicy"></a>

```json
{
  "channel": "UPDATE_CHANNEL_UNSPECIFIED",
  "denyMaintenancePeriods": [
    {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "time": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ],
  "window": {
    "dailyCycle": {
      "duration": "string",
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "weeklyCycle": {
      "schedule": [
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
  }
}
```

Maintenance policy applicable to instance updates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|Optional. Relative scheduling channel applied to resource.|
|denyMaintenancePeriods|[[DenyMaintenancePeriod](#schemadenymaintenanceperiod)]|false|none|Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. User can specify zero or more non-overlapping deny periods. Maximum number of deny_maintenance_periods expected is one.|
|window|[MaintenanceWindow](#schemamaintenancewindow)|false|none|Optional. Maintenance window that is applied to resources covered by this policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|UPDATE_CHANNEL_UNSPECIFIED|
|channel|EARLIER|
|channel|LATER|
|channel|WEEK1|
|channel|WEEK2|
|channel|WEEK5|

<h2 id="tocS_WeeklyCycle">WeeklyCycle</h2>
<!-- backwards compatibility -->
<a id="schemaweeklycycle"></a>
<a id="schema_WeeklyCycle"></a>
<a id="tocSweeklycycle"></a>
<a id="tocsweeklycycle"></a>

```json
{
  "schedule": [
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

Time window specified for weekly operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|[[Schedule](#schemaschedule)]|false|none|User can specify multiple windows in a week. Minimum of 1 window.|

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

Time window specified for weekly operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|false|none|Required. Allows to define schedule that runs specified day of the week.|
|duration|string(google-duration)|false|none|Required. Duration of the time window.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Required. Start time of the window in UTC.|

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

<h2 id="tocS_ZoneMetadata">ZoneMetadata</h2>
<!-- backwards compatibility -->
<a id="schemazonemetadata"></a>
<a id="schema_ZoneMetadata"></a>
<a id="tocSzonemetadata"></a>
<a id="tocszonemetadata"></a>

```json
{}
```
