<h1 id="bare-metal-solution-api">Bare Metal Solution API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides ways to manage Bare Metal Solution hardware installed in a regional extension located near a Google Cloud data center.

Base URLs:

* <a href="https://baremetalsolution.googleapis.com/">https://baremetalsolution.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/bare-metal">External documentation</a>

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

<h1 id="bare-metal-solution-api-projects">projects</h1>

## baremetalsolution.projects.locations.instances.detachLun

<a id="opIdbaremetalsolution.projects.locations.instances.detachLun"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:detachLun \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "lun": "string",
    "skipReboot": true
  }'
```

`POST /v2/{instance}:detachLun`

Detach LUN from Instance.

> Body parameter

```json
{
  "lun": "string",
  "skipReboot": true
}
```

<h3 id="baremetalsolutionprojectslocationsinstancesdetachlun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instance|path|string|true|Required. Name of the instance.|
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
|body|body|[DetachLunRequest](#schemadetachlunrequest)|false|none|
|» lun|body|string|false|Required. Name of the Lun to detach.|
|» skipReboot|body|boolean|false|If true, performs lun unmapping without instance reboot.|

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

<h3 id="baremetalsolutionprojectslocationsinstancesdetachlun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.instanceProvisioningSettings.fetch

<a id="opIdbaremetalsolution.projects.locations.instanceProvisioningSettings.fetch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/instanceProvisioningSettings:fetch \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{location}/instanceProvisioningSettings:fetch`

Get instance provisioning settings for a given project. This is hidden method used by UI only.

<h3 id="baremetalsolutionprojectslocationsinstanceprovisioningsettingsfetch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The parent project and location containing the ProvisioningSettings.|
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
  "images": [
    {
      "applicableInstanceTypes": [
        "string"
      ],
      "code": "string",
      "description": "string",
      "name": "string",
      "supportedNetworkTemplates": [
        {
          "applicableInstanceTypes": [
            "string"
          ],
          "logicalInterfaces": [
            {
              "name": "string",
              "required": true,
              "type": "INTERFACE_TYPE_UNSPECIFIED"
            }
          ],
          "name": "string"
        }
      ]
    }
  ]
}
```

<h3 id="baremetalsolutionprojectslocationsinstanceprovisioningsettingsfetch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchInstanceProvisioningSettingsResponse](#schemafetchinstanceprovisioningsettingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.networks.listNetworkUsage

<a id="opIdbaremetalsolution.projects.locations.networks.listNetworkUsage"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/networks:listNetworkUsage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{location}/networks:listNetworkUsage`

List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.

<h3 id="baremetalsolutionprojectslocationsnetworkslistnetworkusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. Parent value (project and location).|
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
  "networks": [
    {
      "network": {
        "cidr": "string",
        "gatewayIp": "string",
        "id": "string",
        "ipAddress": "string",
        "jumboFramesEnabled": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "macAddress": [
          "string"
        ],
        "mountPoints": [
          {
            "defaultGateway": true,
            "instance": "string",
            "ipAddress": "string",
            "logicalInterface": "string"
          }
        ],
        "name": "string",
        "pod": "string",
        "reservations": [
          {
            "endAddress": "string",
            "note": "string",
            "startAddress": "string"
          }
        ],
        "servicesCidr": "string",
        "state": "STATE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "vlanId": "string",
        "vrf": {
          "name": "string",
          "qosPolicy": {
            "bandwidthGbps": 0
          },
          "state": "STATE_UNSPECIFIED",
          "vlanAttachments": [
            {
              "id": "string",
              "pairingKey": "string",
              "peerIp": "string",
              "peerVlanId": "string",
              "qosPolicy": {
                "bandwidthGbps": 0
              },
              "routerIp": "string"
            }
          ]
        }
      },
      "usedIps": [
        "string"
      ]
    }
  ]
}
```

<h3 id="baremetalsolutionprojectslocationsnetworkslistnetworkusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNetworkUsageResponse](#schemalistnetworkusageresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.snapshots.get

<a id="opIdbaremetalsolution.projects.locations.volumes.snapshots.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the snapshot.|
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
  "description": "string",
  "id": "string",
  "name": "string",
  "storageVolume": "string",
  "type": "SNAPSHOT_TYPE_UNSPECIFIED"
}
```

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VolumeSnapshot](#schemavolumesnapshot)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.snapshots.delete

<a id="opIdbaremetalsolution.projects.locations.volumes.snapshots.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the snapshot to delete.|
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

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.patch

<a id="opIdbaremetalsolution.projects.locations.volumes.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoGrownSizeGib": "string",
    "currentSizeGib": "string",
    "emergencySizeGib": "string",
    "id": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "maxSizeGib": "string",
    "notes": "string",
    "originallyRequestedSizeGib": "string",
    "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
    "pod": "string",
    "remainingSpaceGib": "string",
    "requestedSizeGib": "string",
    "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
    "snapshotEnabled": true,
    "snapshotReservationDetail": {
      "reservedSpaceGib": "string",
      "reservedSpacePercent": 0,
      "reservedSpaceRemainingGib": "string",
      "reservedSpaceUsedPercent": 0
    },
    "snapshotSchedulePolicy": "string",
    "state": "STATE_UNSPECIFIED",
    "storageAggregatePool": "string",
    "storageType": "STORAGE_TYPE_UNSPECIFIED",
    "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
  }'
```

`PATCH /v2/{name}`

Update details of a single storage volume.

> Body parameter

```json
{
  "autoGrownSizeGib": "string",
  "currentSizeGib": "string",
  "emergencySizeGib": "string",
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maxSizeGib": "string",
  "notes": "string",
  "originallyRequestedSizeGib": "string",
  "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
  "pod": "string",
  "remainingSpaceGib": "string",
  "requestedSizeGib": "string",
  "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
  "snapshotEnabled": true,
  "snapshotReservationDetail": {
    "reservedSpaceGib": "string",
    "reservedSpacePercent": 0,
    "reservedSpaceRemainingGib": "string",
    "reservedSpaceUsedPercent": 0
  },
  "snapshotSchedulePolicy": "string",
  "state": "STATE_UNSPECIFIED",
  "storageAggregatePool": "string",
  "storageType": "STORAGE_TYPE_UNSPECIFIED",
  "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
}
```

<h3 id="baremetalsolutionprojectslocationsvolumespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}`|
|updateMask|query|string|false|The list of fields to update. The only currently supported fields are: 'labels'|
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
|body|body|[Volume](#schemavolume)|false|none|
|» autoGrownSizeGib|body|string(int64)|false|The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0.|
|» currentSizeGib|body|string(int64)|false|The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink.|
|» emergencySizeGib|body|string(int64)|false|Additional emergency size that was requested for this Volume, in GiB. current_size_gib includes this value.|
|» id|body|string|false|An identifier for the `Volume`, generated by the backend.|
|» labels|body|object|false|Labels as key value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» maxSizeGib|body|string(int64)|false|Maximum size volume can be expanded to in case of evergency, in GiB.|
|» notes|body|string|false|Input only. User-specified notes for new Volume. Used to provision Volumes that require manual intervention.|
|» originallyRequestedSizeGib|body|string(int64)|false|Originally requested size, in GiB.|
|» performanceTier|body|string|false|Immutable. Performance tier of the Volume. Default is SHARED.|
|» pod|body|string|false|Immutable. Pod name.|
|» remainingSpaceGib|body|string(int64)|false|The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots.|
|» requestedSizeGib|body|string(int64)|false|The requested size of this storage volume, in GiB.|
|» snapshotAutoDeleteBehavior|body|string|false|The behavior to use when snapshot reserved space is full.|
|» snapshotEnabled|body|boolean|false|Whether snapshots are enabled.|
|» snapshotReservationDetail|body|[SnapshotReservationDetail](#schemasnapshotreservationdetail)|false|Details about snapshot space reservation and usage on the storage volume.|
|» snapshotSchedulePolicy|body|string|false|The name of the snapshot schedule policy in use for this volume, if any.|
|» state|body|string|false|The state of this storage volume.|
|» storageAggregatePool|body|string|false|Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.|
|» storageType|body|string|false|The storage type for this volume.|
|» workloadProfile|body|string|false|The workload profile for the volume.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» performanceTier|VOLUME_PERFORMANCE_TIER_UNSPECIFIED|
|» performanceTier|VOLUME_PERFORMANCE_TIER_SHARED|
|» performanceTier|VOLUME_PERFORMANCE_TIER_ASSIGNED|
|» performanceTier|VOLUME_PERFORMANCE_TIER_HT|
|» snapshotAutoDeleteBehavior|SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED|
|» snapshotAutoDeleteBehavior|DISABLED|
|» snapshotAutoDeleteBehavior|OLDEST_FIRST|
|» snapshotAutoDeleteBehavior|NEWEST_FIRST|
|» state|STATE_UNSPECIFIED|
|» state|CREATING|
|» state|READY|
|» state|DELETING|
|» state|UPDATING|
|» state|COOL_OFF|
|» storageType|STORAGE_TYPE_UNSPECIFIED|
|» storageType|SSD|
|» storageType|HDD|
|» workloadProfile|WORKLOAD_PROFILE_UNSPECIFIED|
|» workloadProfile|GENERIC|
|» workloadProfile|HANA|

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

<h3 id="baremetalsolutionprojectslocationsvolumespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.list

<a id="opIdbaremetalsolution.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="baremetalsolutionprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="baremetalsolutionprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.instances.disableInteractiveSerialConsole

<a id="opIdbaremetalsolution.projects.locations.instances.disableInteractiveSerialConsole"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:disableInteractiveSerialConsole \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:disableInteractiveSerialConsole`

Disable the interactive serial console feature on an instance.

> Body parameter

```json
{}
```

<h3 id="baremetalsolutionprojectslocationsinstancesdisableinteractiveserialconsole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource.|
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
|body|body|[DisableInteractiveSerialConsoleRequest](#schemadisableinteractiveserialconsolerequest)|false|none|

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

<h3 id="baremetalsolutionprojectslocationsinstancesdisableinteractiveserialconsole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.instances.enableInteractiveSerialConsole

<a id="opIdbaremetalsolution.projects.locations.instances.enableInteractiveSerialConsole"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:enableInteractiveSerialConsole \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:enableInteractiveSerialConsole`

Enable the interactive serial console feature on an instance.

> Body parameter

```json
{}
```

<h3 id="baremetalsolutionprojectslocationsinstancesenableinteractiveserialconsole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource.|
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
|body|body|[EnableInteractiveSerialConsoleRequest](#schemaenableinteractiveserialconsolerequest)|false|none|

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

<h3 id="baremetalsolutionprojectslocationsinstancesenableinteractiveserialconsole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.luns.evict

<a id="opIdbaremetalsolution.projects.locations.volumes.luns.evict"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:evict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:evict`

Skips lun's cooloff and deletes it now. Lun must be in cooloff state.

> Body parameter

```json
{}
```

<h3 id="baremetalsolutionprojectslocationsvolumeslunsevict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the lun.|
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
|body|body|[EvictLunRequest](#schemaevictlunrequest)|false|none|

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

<h3 id="baremetalsolutionprojectslocationsvolumeslunsevict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.rename

<a id="opIdbaremetalsolution.projects.locations.volumes.rename"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:rename \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newVolumeId": "string"
  }'
```

`POST /v2/{name}:rename`

RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.

> Body parameter

```json
{
  "newVolumeId": "string"
}
```

<h3 id="baremetalsolutionprojectslocationsvolumesrename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The `name` field is used to identify the volume. Format: projects/{project}/locations/{location}/volumes/{volume}|
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
|body|body|[RenameVolumeRequest](#schemarenamevolumerequest)|false|none|
|» newVolumeId|body|string|false|Required. The new `id` of the volume.|

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
  "attached": true,
  "autoGrownSizeGib": "string",
  "bootVolume": true,
  "currentSizeGib": "string",
  "emergencySizeGib": "string",
  "expireTime": "string",
  "id": "string",
  "instances": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maxSizeGib": "string",
  "name": "string",
  "notes": "string",
  "originallyRequestedSizeGib": "string",
  "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
  "pod": "string",
  "protocol": "PROTOCOL_UNSPECIFIED",
  "remainingSpaceGib": "string",
  "requestedSizeGib": "string",
  "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
  "snapshotEnabled": true,
  "snapshotReservationDetail": {
    "reservedSpaceGib": "string",
    "reservedSpacePercent": 0,
    "reservedSpaceRemainingGib": "string",
    "reservedSpaceUsedPercent": 0
  },
  "snapshotSchedulePolicy": "string",
  "state": "STATE_UNSPECIFIED",
  "storageAggregatePool": "string",
  "storageType": "STORAGE_TYPE_UNSPECIFIED",
  "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
}
```

<h3 id="baremetalsolutionprojectslocationsvolumesrename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volume](#schemavolume)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.instances.reset

<a id="opIdbaremetalsolution.projects.locations.instances.reset"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:reset`

Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.

> Body parameter

```json
{}
```

<h3 id="baremetalsolutionprojectslocationsinstancesreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource.|
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
|body|body|[ResetInstanceRequest](#schemaresetinstancerequest)|false|none|

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

<h3 id="baremetalsolutionprojectslocationsinstancesreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.instances.start

<a id="opIdbaremetalsolution.projects.locations.instances.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:start`

Starts a server that was shutdown.

> Body parameter

```json
{}
```

<h3 id="baremetalsolutionprojectslocationsinstancesstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource.|
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
|body|body|[StartInstanceRequest](#schemastartinstancerequest)|false|none|

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

<h3 id="baremetalsolutionprojectslocationsinstancesstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.instances.stop

<a id="opIdbaremetalsolution.projects.locations.instances.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:stop`

Stop a running server.

> Body parameter

```json
{}
```

<h3 id="baremetalsolutionprojectslocationsinstancesstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource.|
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
|body|body|[StopInstanceRequest](#schemastopinstancerequest)|false|none|

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

<h3 id="baremetalsolutionprojectslocationsinstancesstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.instances.list

<a id="opIdbaremetalsolution.projects.locations.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/instances`

List servers in a given project and location.

<h3 id="baremetalsolutionprojectslocationsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListInstancesRequest.|
|filter|query|string|false|List filter.|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results from the server.|
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
      "createTime": "string",
      "firmwareVersion": "string",
      "hyperthreadingEnabled": true,
      "id": "string",
      "interactiveSerialConsoleEnabled": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logicalInterfaces": [
        {
          "interfaceIndex": 0,
          "logicalNetworkInterfaces": [
            {
              "defaultGateway": true,
              "id": "string",
              "ipAddress": "string",
              "network": "string",
              "networkType": "TYPE_UNSPECIFIED"
            }
          ],
          "name": "string"
        }
      ],
      "loginInfo": "string",
      "luns": [
        {
          "bootLun": true,
          "expireTime": "string",
          "id": "string",
          "instances": [
            "string"
          ],
          "multiprotocolType": "MULTIPROTOCOL_TYPE_UNSPECIFIED",
          "name": "string",
          "shareable": true,
          "sizeGb": "string",
          "state": "STATE_UNSPECIFIED",
          "storageType": "STORAGE_TYPE_UNSPECIFIED",
          "storageVolume": "string",
          "wwid": "string"
        }
      ],
      "machineType": "string",
      "name": "string",
      "networkTemplate": "string",
      "networks": [
        {
          "cidr": "string",
          "gatewayIp": "string",
          "id": "string",
          "ipAddress": "string",
          "jumboFramesEnabled": true,
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "macAddress": [
            "string"
          ],
          "mountPoints": [
            {
              "defaultGateway": true,
              "instance": "string",
              "ipAddress": "string",
              "logicalInterface": "string"
            }
          ],
          "name": "string",
          "pod": "string",
          "reservations": [
            {
              "endAddress": "string",
              "note": "string",
              "startAddress": "string"
            }
          ],
          "servicesCidr": "string",
          "state": "STATE_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED",
          "vlanId": "string",
          "vrf": {
            "name": "string",
            "qosPolicy": {
              "bandwidthGbps": 0
            },
            "state": "STATE_UNSPECIFIED",
            "vlanAttachments": [
              {
                "id": "string",
                "pairingKey": "string",
                "peerIp": "string",
                "peerVlanId": "string",
                "qosPolicy": {
                  "bandwidthGbps": 0
                },
                "routerIp": "string"
              }
            ]
          }
        }
      ],
      "osImage": "string",
      "pod": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "volumes": [
        {
          "attached": true,
          "autoGrownSizeGib": "string",
          "bootVolume": true,
          "currentSizeGib": "string",
          "emergencySizeGib": "string",
          "expireTime": "string",
          "id": "string",
          "instances": [
            "string"
          ],
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "maxSizeGib": "string",
          "name": "string",
          "notes": "string",
          "originallyRequestedSizeGib": "string",
          "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
          "pod": "string",
          "protocol": "PROTOCOL_UNSPECIFIED",
          "remainingSpaceGib": "string",
          "requestedSizeGib": "string",
          "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
          "snapshotEnabled": true,
          "snapshotReservationDetail": {
            "reservedSpaceGib": "string",
            "reservedSpacePercent": 0,
            "reservedSpaceRemainingGib": "string",
            "reservedSpaceUsedPercent": 0
          },
          "snapshotSchedulePolicy": "string",
          "state": "STATE_UNSPECIFIED",
          "storageAggregatePool": "string",
          "storageType": "STORAGE_TYPE_UNSPECIFIED",
          "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
        }
      ],
      "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="baremetalsolutionprojectslocationsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstancesResponse](#schemalistinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.instances.create

<a id="opIdbaremetalsolution.projects.locations.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hyperthreadingEnabled": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "logicalInterfaces": [
      {
        "interfaceIndex": 0,
        "logicalNetworkInterfaces": [
          {
            "defaultGateway": true,
            "id": "string",
            "ipAddress": "string",
            "network": "string",
            "networkType": "TYPE_UNSPECIFIED"
          }
        ],
        "name": "string"
      }
    ],
    "luns": [
      {
        "bootLun": true,
        "id": "string",
        "multiprotocolType": "MULTIPROTOCOL_TYPE_UNSPECIFIED",
        "shareable": true,
        "sizeGb": "string",
        "state": "STATE_UNSPECIFIED",
        "storageType": "STORAGE_TYPE_UNSPECIFIED",
        "storageVolume": "string",
        "wwid": "string"
      }
    ],
    "machineType": "string",
    "name": "string",
    "networkTemplate": "string",
    "osImage": "string",
    "pod": "string",
    "volumes": [
      {
        "autoGrownSizeGib": "string",
        "currentSizeGib": "string",
        "emergencySizeGib": "string",
        "id": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "maxSizeGib": "string",
        "notes": "string",
        "originallyRequestedSizeGib": "string",
        "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
        "pod": "string",
        "remainingSpaceGib": "string",
        "requestedSizeGib": "string",
        "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
        "snapshotEnabled": true,
        "snapshotReservationDetail": {
          "reservedSpaceGib": "string",
          "reservedSpacePercent": 0,
          "reservedSpaceRemainingGib": "string",
          "reservedSpaceUsedPercent": 0
        },
        "snapshotSchedulePolicy": "string",
        "state": "STATE_UNSPECIFIED",
        "storageAggregatePool": "string",
        "storageType": "STORAGE_TYPE_UNSPECIFIED",
        "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
      }
    ],
    "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
  }'
```

`POST /v2/{parent}/instances`

Create an Instance.

> Body parameter

```json
{
  "hyperthreadingEnabled": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logicalInterfaces": [
    {
      "interfaceIndex": 0,
      "logicalNetworkInterfaces": [
        {
          "defaultGateway": true,
          "id": "string",
          "ipAddress": "string",
          "network": "string",
          "networkType": "TYPE_UNSPECIFIED"
        }
      ],
      "name": "string"
    }
  ],
  "luns": [
    {
      "bootLun": true,
      "id": "string",
      "multiprotocolType": "MULTIPROTOCOL_TYPE_UNSPECIFIED",
      "shareable": true,
      "sizeGb": "string",
      "state": "STATE_UNSPECIFIED",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "storageVolume": "string",
      "wwid": "string"
    }
  ],
  "machineType": "string",
  "name": "string",
  "networkTemplate": "string",
  "osImage": "string",
  "pod": "string",
  "volumes": [
    {
      "autoGrownSizeGib": "string",
      "currentSizeGib": "string",
      "emergencySizeGib": "string",
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "maxSizeGib": "string",
      "notes": "string",
      "originallyRequestedSizeGib": "string",
      "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
      "pod": "string",
      "remainingSpaceGib": "string",
      "requestedSizeGib": "string",
      "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
      "snapshotEnabled": true,
      "snapshotReservationDetail": {
        "reservedSpaceGib": "string",
        "reservedSpacePercent": 0,
        "reservedSpaceRemainingGib": "string",
        "reservedSpaceUsedPercent": 0
      },
      "snapshotSchedulePolicy": "string",
      "state": "STATE_UNSPECIFIED",
      "storageAggregatePool": "string",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
    }
  ],
  "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
}
```

<h3 id="baremetalsolutionprojectslocationsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project and location.|
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
|» hyperthreadingEnabled|body|boolean|false|True if you enable hyperthreading for the server, otherwise false. The default value is false.|
|» labels|body|object|false|Labels as key value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» logicalInterfaces|body|[[GoogleCloudBaremetalsolutionV2LogicalInterface](#schemagooglecloudbaremetalsolutionv2logicalinterface)]|false|List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. For the non-multivlan configurations (for eg, existing servers) that use existing default network template (bondaa-bondaa), both the Instance.networks field and the Instance.logical_interfaces fields will be filled to ensure backward compatibility. For the others, only Instance.logical_interfaces will be filled.|
|» luns|body|[[Lun](#schemalun)]|false|Immutable. List of LUNs associated with this server.|
|» machineType|body|string|false|Immutable. The server type. [Available server types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)|
|» name|body|string|false|Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}`|
|» networkTemplate|body|string|false|Instance network template name. For eg, bondaa-bondaa, bondab-nic, etc. Generally, the template name follows the syntax of "bond" or "nic".|
|» osImage|body|string|false|The OS image currently installed on the server.|
|» pod|body|string|false|Immutable. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes) allocated in the same pod only.|
|» volumes|body|[[Volume](#schemavolume)]|false|Input only. List of Volumes to attach to this Instance on creation. This field won't be populated in Get/List responses.|
|» workloadProfile|body|string|false|The workload profile for the instance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» workloadProfile|WORKLOAD_PROFILE_UNSPECIFIED|
|» workloadProfile|WORKLOAD_PROFILE_GENERIC|
|» workloadProfile|WORKLOAD_PROFILE_HANA|

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

<h3 id="baremetalsolutionprojectslocationsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.luns.list

<a id="opIdbaremetalsolution.projects.locations.volumes.luns.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/luns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/luns`

List storage volume luns for given storage volume.

<h3 id="baremetalsolutionprojectslocationsvolumeslunslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListLunsRequest.|
|pageSize|query|integer|false|Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results from the server.|
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
  "luns": [
    {
      "bootLun": true,
      "expireTime": "string",
      "id": "string",
      "instances": [
        "string"
      ],
      "multiprotocolType": "MULTIPROTOCOL_TYPE_UNSPECIFIED",
      "name": "string",
      "shareable": true,
      "sizeGb": "string",
      "state": "STATE_UNSPECIFIED",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "storageVolume": "string",
      "wwid": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="baremetalsolutionprojectslocationsvolumeslunslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLunsResponse](#schemalistlunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.networks.list

<a id="opIdbaremetalsolution.projects.locations.networks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/networks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/networks`

List network in a given project and location.

<h3 id="baremetalsolutionprojectslocationsnetworkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListNetworksRequest.|
|filter|query|string|false|List filter.|
|pageSize|query|integer|false|Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results from the server.|
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
  "networks": [
    {
      "cidr": "string",
      "gatewayIp": "string",
      "id": "string",
      "ipAddress": "string",
      "jumboFramesEnabled": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "macAddress": [
        "string"
      ],
      "mountPoints": [
        {
          "defaultGateway": true,
          "instance": "string",
          "ipAddress": "string",
          "logicalInterface": "string"
        }
      ],
      "name": "string",
      "pod": "string",
      "reservations": [
        {
          "endAddress": "string",
          "note": "string",
          "startAddress": "string"
        }
      ],
      "servicesCidr": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "vlanId": "string",
      "vrf": {
        "name": "string",
        "qosPolicy": {
          "bandwidthGbps": 0
        },
        "state": "STATE_UNSPECIFIED",
        "vlanAttachments": [
          {
            "id": "string",
            "pairingKey": "string",
            "peerIp": "string",
            "peerVlanId": "string",
            "qosPolicy": {
              "bandwidthGbps": 0
            },
            "routerIp": "string"
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

<h3 id="baremetalsolutionprojectslocationsnetworkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNetworksResponse](#schemalistnetworksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.nfsShares.list

<a id="opIdbaremetalsolution.projects.locations.nfsShares.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/nfsShares \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/nfsShares`

List NFS shares.

<h3 id="baremetalsolutionprojectslocationsnfsshareslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListNfsSharesRequest.|
|filter|query|string|false|List filter.|
|pageSize|query|integer|false|Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results from the server.|
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
  "nfsShares": [
    {
      "allowedClients": [
        {
          "allowDev": true,
          "allowSuid": true,
          "allowedClientsCidr": "string",
          "mountPermissions": "MOUNT_PERMISSIONS_UNSPECIFIED",
          "network": "string",
          "nfsPath": "string",
          "noRootSquash": true,
          "shareIp": "string"
        }
      ],
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nfsShareId": "string",
      "requestedSizeGib": "string",
      "state": "STATE_UNSPECIFIED",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "volume": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="baremetalsolutionprojectslocationsnfsshareslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNfsSharesResponse](#schemalistnfssharesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.nfsShares.create

<a id="opIdbaremetalsolution.projects.locations.nfsShares.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/nfsShares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowedClients": [
      {
        "allowDev": true,
        "allowSuid": true,
        "allowedClientsCidr": "string",
        "mountPermissions": "MOUNT_PERMISSIONS_UNSPECIFIED",
        "network": "string",
        "noRootSquash": true
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "requestedSizeGib": "string",
    "storageType": "STORAGE_TYPE_UNSPECIFIED"
  }'
```

`POST /v2/{parent}/nfsShares`

Create an NFS share.

> Body parameter

```json
{
  "allowedClients": [
    {
      "allowDev": true,
      "allowSuid": true,
      "allowedClientsCidr": "string",
      "mountPermissions": "MOUNT_PERMISSIONS_UNSPECIFIED",
      "network": "string",
      "noRootSquash": true
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "requestedSizeGib": "string",
  "storageType": "STORAGE_TYPE_UNSPECIFIED"
}
```

<h3 id="baremetalsolutionprojectslocationsnfssharescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project and location.|
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
|body|body|[NfsShare](#schemanfsshare)|false|none|
|» allowedClients|body|[[AllowedClient](#schemaallowedclient)]|false|List of allowed access points.|
|» labels|body|object|false|Labels as key value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Immutable. The name of the NFS share.|
|» requestedSizeGib|body|string(int64)|false|The requested size, in GiB.|
|» storageType|body|string|false|Immutable. The storage type of the underlying volume.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» storageType|STORAGE_TYPE_UNSPECIFIED|
|» storageType|SSD|
|» storageType|HDD|

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

<h3 id="baremetalsolutionprojectslocationsnfssharescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.provisioningConfigs.create

<a id="opIdbaremetalsolution.projects.locations.provisioningConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/provisioningConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customId": "string",
    "email": "string",
    "handoverServiceAccount": "string",
    "instances": [
      {
        "accountNetworksEnabled": true,
        "clientNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "hyperthreading": true,
        "id": "string",
        "instanceType": "string",
        "logicalInterfaces": [
          {
            "interfaceIndex": 0,
            "logicalNetworkInterfaces": [
              {
                "defaultGateway": true,
                "id": "string",
                "ipAddress": "string",
                "network": "string",
                "networkType": "TYPE_UNSPECIFIED"
              }
            ],
            "name": "string"
          }
        ],
        "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
        "networkTemplate": "string",
        "osImage": "string",
        "privateNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "userNote": "string"
      }
    ],
    "location": "string",
    "networks": [
      {
        "bandwidth": "BANDWIDTH_UNSPECIFIED",
        "cidr": "string",
        "gcpService": "string",
        "id": "string",
        "jumboFramesEnabled": true,
        "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string",
        "vlanAttachments": [
          {
            "id": "string",
            "pairingKey": "string"
          }
        ],
        "vlanSameProject": true
      }
    ],
    "statusMessage": "string",
    "ticketId": "string",
    "volumes": [
      {
        "gcpService": "string",
        "id": "string",
        "lunRanges": [
          {
            "quantity": 0,
            "sizeGb": 0
          }
        ],
        "machineIds": [
          "string"
        ],
        "nfsExports": [
          {
            "allowDev": true,
            "allowSuid": true,
            "cidr": "string",
            "machineId": "string",
            "networkId": "string",
            "noRootSquash": true,
            "permissions": "PERMISSIONS_UNSPECIFIED"
          }
        ],
        "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
        "protocol": "PROTOCOL_UNSPECIFIED",
        "sizeGb": 0,
        "snapshotsEnabled": true,
        "storageAggregatePool": "string",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string"
      }
    ],
    "vpcScEnabled": true
  }'
```

`POST /v2/{parent}/provisioningConfigs`

Create new ProvisioningConfig.

> Body parameter

```json
{
  "customId": "string",
  "email": "string",
  "handoverServiceAccount": "string",
  "instances": [
    {
      "accountNetworksEnabled": true,
      "clientNetwork": {
        "address": "string",
        "existingNetworkId": "string",
        "networkId": "string"
      },
      "hyperthreading": true,
      "id": "string",
      "instanceType": "string",
      "logicalInterfaces": [
        {
          "interfaceIndex": 0,
          "logicalNetworkInterfaces": [
            {
              "defaultGateway": true,
              "id": "string",
              "ipAddress": "string",
              "network": "string",
              "networkType": "TYPE_UNSPECIFIED"
            }
          ],
          "name": "string"
        }
      ],
      "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
      "networkTemplate": "string",
      "osImage": "string",
      "privateNetwork": {
        "address": "string",
        "existingNetworkId": "string",
        "networkId": "string"
      },
      "userNote": "string"
    }
  ],
  "location": "string",
  "networks": [
    {
      "bandwidth": "BANDWIDTH_UNSPECIFIED",
      "cidr": "string",
      "gcpService": "string",
      "id": "string",
      "jumboFramesEnabled": true,
      "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "userNote": "string",
      "vlanAttachments": [
        {
          "id": "string",
          "pairingKey": "string"
        }
      ],
      "vlanSameProject": true
    }
  ],
  "statusMessage": "string",
  "ticketId": "string",
  "volumes": [
    {
      "gcpService": "string",
      "id": "string",
      "lunRanges": [
        {
          "quantity": 0,
          "sizeGb": 0
        }
      ],
      "machineIds": [
        "string"
      ],
      "nfsExports": [
        {
          "allowDev": true,
          "allowSuid": true,
          "cidr": "string",
          "machineId": "string",
          "networkId": "string",
          "noRootSquash": true,
          "permissions": "PERMISSIONS_UNSPECIFIED"
        }
      ],
      "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
      "protocol": "PROTOCOL_UNSPECIFIED",
      "sizeGb": 0,
      "snapshotsEnabled": true,
      "storageAggregatePool": "string",
      "type": "TYPE_UNSPECIFIED",
      "userNote": "string"
    }
  ],
  "vpcScEnabled": true
}
```

<h3 id="baremetalsolutionprojectslocationsprovisioningconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project and location containing the ProvisioningConfig.|
|email|query|string|false|Optional. Email provided to send a confirmation with provisioning config to.|
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
|body|body|[ProvisioningConfig](#schemaprovisioningconfig)|false|none|
|» customId|body|string|false|Optional. The user-defined identifier of the provisioning config.|
|» email|body|string|false|Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages.|
|» handoverServiceAccount|body|string|false|A service account to enable customers to access instance credentials upon handover.|
|» instances|body|[[InstanceConfig](#schemainstanceconfig)]|false|Instances to be created.|
|» location|body|string|false|Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period.|
|» networks|body|[[NetworkConfig](#schemanetworkconfig)]|false|Networks to be created.|
|» statusMessage|body|string|false|Optional status messages associated with the FAILED state.|
|» ticketId|body|string|false|A generated ticket id to track provisioning request.|
|» volumes|body|[[VolumeConfig](#schemavolumeconfig)]|false|Volumes to be created.|
|» vpcScEnabled|body|boolean|false|If true, VPC SC is enabled for the cluster.|

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
  "cloudConsoleUri": "string",
  "customId": "string",
  "email": "string",
  "handoverServiceAccount": "string",
  "instances": [
    {
      "accountNetworksEnabled": true,
      "clientNetwork": {
        "address": "string",
        "existingNetworkId": "string",
        "networkId": "string"
      },
      "hyperthreading": true,
      "id": "string",
      "instanceType": "string",
      "logicalInterfaces": [
        {
          "interfaceIndex": 0,
          "logicalNetworkInterfaces": [
            {
              "defaultGateway": true,
              "id": "string",
              "ipAddress": "string",
              "network": "string",
              "networkType": "TYPE_UNSPECIFIED"
            }
          ],
          "name": "string"
        }
      ],
      "name": "string",
      "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
      "networkTemplate": "string",
      "osImage": "string",
      "privateNetwork": {
        "address": "string",
        "existingNetworkId": "string",
        "networkId": "string"
      },
      "userNote": "string"
    }
  ],
  "location": "string",
  "name": "string",
  "networks": [
    {
      "bandwidth": "BANDWIDTH_UNSPECIFIED",
      "cidr": "string",
      "gcpService": "string",
      "id": "string",
      "jumboFramesEnabled": true,
      "name": "string",
      "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "userNote": "string",
      "vlanAttachments": [
        {
          "id": "string",
          "pairingKey": "string"
        }
      ],
      "vlanSameProject": true
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "ticketId": "string",
  "updateTime": "string",
  "volumes": [
    {
      "gcpService": "string",
      "id": "string",
      "lunRanges": [
        {
          "quantity": 0,
          "sizeGb": 0
        }
      ],
      "machineIds": [
        "string"
      ],
      "name": "string",
      "nfsExports": [
        {
          "allowDev": true,
          "allowSuid": true,
          "cidr": "string",
          "machineId": "string",
          "networkId": "string",
          "noRootSquash": true,
          "permissions": "PERMISSIONS_UNSPECIFIED"
        }
      ],
      "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
      "protocol": "PROTOCOL_UNSPECIFIED",
      "sizeGb": 0,
      "snapshotsEnabled": true,
      "storageAggregatePool": "string",
      "type": "TYPE_UNSPECIFIED",
      "userNote": "string"
    }
  ],
  "vpcScEnabled": true
}
```

<h3 id="baremetalsolutionprojectslocationsprovisioningconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProvisioningConfig](#schemaprovisioningconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.provisioningConfigs.submit

<a id="opIdbaremetalsolution.projects.locations.provisioningConfigs.submit"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/provisioningConfigs:submit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string",
    "provisioningConfig": {
      "customId": "string",
      "email": "string",
      "handoverServiceAccount": "string",
      "instances": [
        {
          "accountNetworksEnabled": true,
          "clientNetwork": {
            "address": "string",
            "existingNetworkId": "string",
            "networkId": "string"
          },
          "hyperthreading": true,
          "id": "string",
          "instanceType": "string",
          "logicalInterfaces": [
            {
              "interfaceIndex": 0,
              "logicalNetworkInterfaces": [
                {
                  "defaultGateway": true,
                  "id": "string",
                  "ipAddress": "string",
                  "network": "string",
                  "networkType": "TYPE_UNSPECIFIED"
                }
              ],
              "name": "string"
            }
          ],
          "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
          "networkTemplate": "string",
          "osImage": "string",
          "privateNetwork": {
            "address": "string",
            "existingNetworkId": "string",
            "networkId": "string"
          },
          "userNote": "string"
        }
      ],
      "location": "string",
      "networks": [
        {
          "bandwidth": "BANDWIDTH_UNSPECIFIED",
          "cidr": "string",
          "gcpService": "string",
          "id": "string",
          "jumboFramesEnabled": true,
          "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED",
          "userNote": "string",
          "vlanAttachments": [
            {
              "id": "string",
              "pairingKey": "string"
            }
          ],
          "vlanSameProject": true
        }
      ],
      "statusMessage": "string",
      "ticketId": "string",
      "volumes": [
        {
          "gcpService": "string",
          "id": "string",
          "lunRanges": [
            {
              "quantity": 0,
              "sizeGb": 0
            }
          ],
          "machineIds": [
            "string"
          ],
          "nfsExports": [
            {
              "allowDev": true,
              "allowSuid": true,
              "cidr": "string",
              "machineId": "string",
              "networkId": "string",
              "noRootSquash": true,
              "permissions": "PERMISSIONS_UNSPECIFIED"
            }
          ],
          "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
          "protocol": "PROTOCOL_UNSPECIFIED",
          "sizeGb": 0,
          "snapshotsEnabled": true,
          "storageAggregatePool": "string",
          "type": "TYPE_UNSPECIFIED",
          "userNote": "string"
        }
      ],
      "vpcScEnabled": true
    }
  }'
```

`POST /v2/{parent}/provisioningConfigs:submit`

Submit a provisiong configuration for a given project.

> Body parameter

```json
{
  "email": "string",
  "provisioningConfig": {
    "customId": "string",
    "email": "string",
    "handoverServiceAccount": "string",
    "instances": [
      {
        "accountNetworksEnabled": true,
        "clientNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "hyperthreading": true,
        "id": "string",
        "instanceType": "string",
        "logicalInterfaces": [
          {
            "interfaceIndex": 0,
            "logicalNetworkInterfaces": [
              {
                "defaultGateway": true,
                "id": "string",
                "ipAddress": "string",
                "network": "string",
                "networkType": "TYPE_UNSPECIFIED"
              }
            ],
            "name": "string"
          }
        ],
        "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
        "networkTemplate": "string",
        "osImage": "string",
        "privateNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "userNote": "string"
      }
    ],
    "location": "string",
    "networks": [
      {
        "bandwidth": "BANDWIDTH_UNSPECIFIED",
        "cidr": "string",
        "gcpService": "string",
        "id": "string",
        "jumboFramesEnabled": true,
        "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string",
        "vlanAttachments": [
          {
            "id": "string",
            "pairingKey": "string"
          }
        ],
        "vlanSameProject": true
      }
    ],
    "statusMessage": "string",
    "ticketId": "string",
    "volumes": [
      {
        "gcpService": "string",
        "id": "string",
        "lunRanges": [
          {
            "quantity": 0,
            "sizeGb": 0
          }
        ],
        "machineIds": [
          "string"
        ],
        "nfsExports": [
          {
            "allowDev": true,
            "allowSuid": true,
            "cidr": "string",
            "machineId": "string",
            "networkId": "string",
            "noRootSquash": true,
            "permissions": "PERMISSIONS_UNSPECIFIED"
          }
        ],
        "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
        "protocol": "PROTOCOL_UNSPECIFIED",
        "sizeGb": 0,
        "snapshotsEnabled": true,
        "storageAggregatePool": "string",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string"
      }
    ],
    "vpcScEnabled": true
  }
}
```

<h3 id="baremetalsolutionprojectslocationsprovisioningconfigssubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project and location containing the ProvisioningConfig.|
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
|body|body|[SubmitProvisioningConfigRequest](#schemasubmitprovisioningconfigrequest)|false|none|
|» email|body|string|false|Optional. Email provided to send a confirmation with provisioning config to.|
|» provisioningConfig|body|[ProvisioningConfig](#schemaprovisioningconfig)|false|Required. The ProvisioningConfig to create.|

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
  "provisioningConfig": {
    "cloudConsoleUri": "string",
    "customId": "string",
    "email": "string",
    "handoverServiceAccount": "string",
    "instances": [
      {
        "accountNetworksEnabled": true,
        "clientNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "hyperthreading": true,
        "id": "string",
        "instanceType": "string",
        "logicalInterfaces": [
          {
            "interfaceIndex": 0,
            "logicalNetworkInterfaces": [
              {
                "defaultGateway": true,
                "id": "string",
                "ipAddress": "string",
                "network": "string",
                "networkType": "TYPE_UNSPECIFIED"
              }
            ],
            "name": "string"
          }
        ],
        "name": "string",
        "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
        "networkTemplate": "string",
        "osImage": "string",
        "privateNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "userNote": "string"
      }
    ],
    "location": "string",
    "name": "string",
    "networks": [
      {
        "bandwidth": "BANDWIDTH_UNSPECIFIED",
        "cidr": "string",
        "gcpService": "string",
        "id": "string",
        "jumboFramesEnabled": true,
        "name": "string",
        "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string",
        "vlanAttachments": [
          {
            "id": "string",
            "pairingKey": "string"
          }
        ],
        "vlanSameProject": true
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "statusMessage": "string",
    "ticketId": "string",
    "updateTime": "string",
    "volumes": [
      {
        "gcpService": "string",
        "id": "string",
        "lunRanges": [
          {
            "quantity": 0,
            "sizeGb": 0
          }
        ],
        "machineIds": [
          "string"
        ],
        "name": "string",
        "nfsExports": [
          {
            "allowDev": true,
            "allowSuid": true,
            "cidr": "string",
            "machineId": "string",
            "networkId": "string",
            "noRootSquash": true,
            "permissions": "PERMISSIONS_UNSPECIFIED"
          }
        ],
        "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
        "protocol": "PROTOCOL_UNSPECIFIED",
        "sizeGb": 0,
        "snapshotsEnabled": true,
        "storageAggregatePool": "string",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string"
      }
    ],
    "vpcScEnabled": true
  }
}
```

<h3 id="baremetalsolutionprojectslocationsprovisioningconfigssubmit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubmitProvisioningConfigResponse](#schemasubmitprovisioningconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.provisioningQuotas.list

<a id="opIdbaremetalsolution.projects.locations.provisioningQuotas.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/provisioningQuotas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/provisioningQuotas`

List the budget details to provision resources on a given project.

<h3 id="baremetalsolutionprojectslocationsprovisioningquotaslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListProvisioningQuotasRequest.|
|pageSize|query|integer|false|Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.|
|pageToken|query|string|false|A token identifying a page of results from the server.|
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
  "provisioningQuotas": [
    {
      "assetType": "ASSET_TYPE_UNSPECIFIED",
      "availableCount": 0,
      "gcpService": "string",
      "instanceQuota": {
        "availableMachineCount": 0,
        "gcpService": "string",
        "instanceType": "string",
        "location": "string",
        "name": "string"
      },
      "location": "string",
      "name": "string",
      "networkBandwidth": "string",
      "serverCount": "string",
      "storageGib": "string"
    }
  ]
}
```

<h3 id="baremetalsolutionprojectslocationsprovisioningquotaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListProvisioningQuotasResponse](#schemalistprovisioningquotasresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.snapshots.list

<a id="opIdbaremetalsolution.projects.locations.volumes.snapshots.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/snapshots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/snapshots`

Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListVolumesRequest.|
|pageSize|query|integer|false|Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results from the server.|
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
  "unreachable": [
    "string"
  ],
  "volumeSnapshots": [
    {
      "createTime": "string",
      "description": "string",
      "id": "string",
      "name": "string",
      "storageVolume": "string",
      "type": "SNAPSHOT_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVolumeSnapshotsResponse](#schemalistvolumesnapshotsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.snapshots.create

<a id="opIdbaremetalsolution.projects.locations.volumes.snapshots.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/snapshots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`POST /v2/{parent}/snapshots`

Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The volume to snapshot.|
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
|body|body|[VolumeSnapshot](#schemavolumesnapshot)|false|none|
|» description|body|string|false|The description of the snapshot.|
|» name|body|string|false|The name of the snapshot.|

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
  "description": "string",
  "id": "string",
  "name": "string",
  "storageVolume": "string",
  "type": "SNAPSHOT_TYPE_UNSPECIFIED"
}
```

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VolumeSnapshot](#schemavolumesnapshot)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.sshKeys.list

<a id="opIdbaremetalsolution.projects.locations.sshKeys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/sshKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/sshKeys`

Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.

<h3 id="baremetalsolutionprojectslocationssshkeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent containing the SSH keys. Currently, the only valid value for the location is "global".|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "sshKeys": [
    {
      "name": "string",
      "publicKey": "string"
    }
  ]
}
```

<h3 id="baremetalsolutionprojectslocationssshkeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSSHKeysResponse](#schemalistsshkeysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.sshKeys.create

<a id="opIdbaremetalsolution.projects.locations.sshKeys.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/sshKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "publicKey": "string"
  }'
```

`POST /v2/{parent}/sshKeys`

Register a public SSH key in the specified project for use with the interactive serial console feature.

> Body parameter

```json
{
  "publicKey": "string"
}
```

<h3 id="baremetalsolutionprojectslocationssshkeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent containing the SSH keys.|
|sshKeyId|query|string|false|Required. The ID to use for the key, which will become the final component of the key's resource name. This value must match the regex: [a-zA-Z0-9@.\-_]{1,64}|
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
|body|body|[SSHKey](#schemasshkey)|false|none|
|» publicKey|body|string|false|The public SSH key. This must be in OpenSSH .authorized_keys format.|

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
  "name": "string",
  "publicKey": "string"
}
```

<h3 id="baremetalsolutionprojectslocationssshkeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SSHKey](#schemasshkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.list

<a id="opIdbaremetalsolution.projects.locations.volumes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/volumes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/volumes`

List storage volumes in a given project and location.

<h3 id="baremetalsolutionprojectslocationsvolumeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListVolumesRequest.|
|filter|query|string|false|List filter.|
|pageSize|query|integer|false|Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results from the server.|
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
  "unreachable": [
    "string"
  ],
  "volumes": [
    {
      "attached": true,
      "autoGrownSizeGib": "string",
      "bootVolume": true,
      "currentSizeGib": "string",
      "emergencySizeGib": "string",
      "expireTime": "string",
      "id": "string",
      "instances": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "maxSizeGib": "string",
      "name": "string",
      "notes": "string",
      "originallyRequestedSizeGib": "string",
      "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
      "pod": "string",
      "protocol": "PROTOCOL_UNSPECIFIED",
      "remainingSpaceGib": "string",
      "requestedSizeGib": "string",
      "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
      "snapshotEnabled": true,
      "snapshotReservationDetail": {
        "reservedSpaceGib": "string",
        "reservedSpacePercent": 0,
        "reservedSpaceRemainingGib": "string",
        "reservedSpaceUsedPercent": 0
      },
      "snapshotSchedulePolicy": "string",
      "state": "STATE_UNSPECIFIED",
      "storageAggregatePool": "string",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="baremetalsolutionprojectslocationsvolumeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVolumesResponse](#schemalistvolumesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.snapshots.restoreVolumeSnapshot

<a id="opIdbaremetalsolution.projects.locations.volumes.snapshots.restoreVolumeSnapshot"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:restoreVolumeSnapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{volumeSnapshot}:restoreVolumeSnapshot`

Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

> Body parameter

```json
{}
```

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotsrestorevolumesnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeSnapshot|path|string|true|Required. Name of the snapshot which will be used to restore its parent volume.|
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
|body|body|[RestoreVolumeSnapshotRequest](#schemarestorevolumesnapshotrequest)|false|none|

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

<h3 id="baremetalsolutionprojectslocationsvolumessnapshotsrestorevolumesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## baremetalsolution.projects.locations.volumes.resize

<a id="opIdbaremetalsolution.projects.locations.volumes.resize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:resize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sizeGib": "string"
  }'
```

`POST /v2/{volume}:resize`

Emergency Volume resize.

> Body parameter

```json
{
  "sizeGib": "string"
}
```

<h3 id="baremetalsolutionprojectslocationsvolumesresize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volume|path|string|true|Required. Volume to resize.|
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
|body|body|[ResizeVolumeRequest](#schemaresizevolumerequest)|false|none|
|» sizeGib|body|string(int64)|false|New Volume size, in GiB.|

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

<h3 id="baremetalsolutionprojectslocationsvolumesresize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AllowedClient">AllowedClient</h2>
<!-- backwards compatibility -->
<a id="schemaallowedclient"></a>
<a id="schema_AllowedClient"></a>
<a id="tocSallowedclient"></a>
<a id="tocsallowedclient"></a>

```json
{
  "allowDev": true,
  "allowSuid": true,
  "allowedClientsCidr": "string",
  "mountPermissions": "MOUNT_PERMISSIONS_UNSPECIFIED",
  "network": "string",
  "nfsPath": "string",
  "noRootSquash": true,
  "shareIp": "string"
}
```

Represents an 'access point' for the share.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowDev|boolean|false|none|Allow dev flag. Which controls whether to allow creation of devices.|
|allowSuid|boolean|false|none|Allow the setuid flag.|
|allowedClientsCidr|string|false|none|The subnet of IP addresses permitted to access the share.|
|mountPermissions|string|false|none|Mount permissions.|
|network|string|false|none|The network the access point sits on.|
|nfsPath|string|false|read-only|Output only. The path to access NFS, in format shareIP:/InstanceID InstanceID is the generated ID instead of customer provided name. example like "10.0.0.0:/g123456789-nfs001"|
|noRootSquash|boolean|false|none|Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.|
|shareIp|string|false|read-only|Output only. The IP address of the share on this network. Assigned automatically during provisioning based on the network's services_cidr.|

#### Enumerated Values

|Property|Value|
|---|---|
|mountPermissions|MOUNT_PERMISSIONS_UNSPECIFIED|
|mountPermissions|READ|
|mountPermissions|READ_WRITE|

<h2 id="tocS_DetachLunRequest">DetachLunRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachlunrequest"></a>
<a id="schema_DetachLunRequest"></a>
<a id="tocSdetachlunrequest"></a>
<a id="tocsdetachlunrequest"></a>

```json
{
  "lun": "string",
  "skipReboot": true
}
```

Message for detach specific LUN from an Instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lun|string|false|none|Required. Name of the Lun to detach.|
|skipReboot|boolean|false|none|If true, performs lun unmapping without instance reboot.|

<h2 id="tocS_DisableInteractiveSerialConsoleRequest">DisableInteractiveSerialConsoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableinteractiveserialconsolerequest"></a>
<a id="schema_DisableInteractiveSerialConsoleRequest"></a>
<a id="tocSdisableinteractiveserialconsolerequest"></a>
<a id="tocsdisableinteractiveserialconsolerequest"></a>

```json
{}
```

Message for disabling the interactive serial console on an instance.

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

<h2 id="tocS_EnableInteractiveSerialConsoleRequest">EnableInteractiveSerialConsoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableinteractiveserialconsolerequest"></a>
<a id="schema_EnableInteractiveSerialConsoleRequest"></a>
<a id="tocSenableinteractiveserialconsolerequest"></a>
<a id="tocsenableinteractiveserialconsolerequest"></a>

```json
{}
```

Message for enabling the interactive serial console on an instance.

<h2 id="tocS_EvictLunRequest">EvictLunRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevictlunrequest"></a>
<a id="schema_EvictLunRequest"></a>
<a id="tocSevictlunrequest"></a>
<a id="tocsevictlunrequest"></a>

```json
{}
```

Request for skip lun cooloff and delete it.

<h2 id="tocS_EvictVolumeRequest">EvictVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevictvolumerequest"></a>
<a id="schema_EvictVolumeRequest"></a>
<a id="tocSevictvolumerequest"></a>
<a id="tocsevictvolumerequest"></a>

```json
{}
```

Request for skip volume cooloff and delete it.

<h2 id="tocS_FetchInstanceProvisioningSettingsResponse">FetchInstanceProvisioningSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchinstanceprovisioningsettingsresponse"></a>
<a id="schema_FetchInstanceProvisioningSettingsResponse"></a>
<a id="tocSfetchinstanceprovisioningsettingsresponse"></a>
<a id="tocsfetchinstanceprovisioningsettingsresponse"></a>

```json
{
  "images": [
    {
      "applicableInstanceTypes": [
        "string"
      ],
      "code": "string",
      "description": "string",
      "name": "string",
      "supportedNetworkTemplates": [
        {
          "applicableInstanceTypes": [
            "string"
          ],
          "logicalInterfaces": [
            {
              "name": "string",
              "required": true,
              "type": "INTERFACE_TYPE_UNSPECIFIED"
            }
          ],
          "name": "string"
        }
      ]
    }
  ]
}
```

Response with all provisioning settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[OSImage](#schemaosimage)]|false|none|The OS images available.|

<h2 id="tocS_GoogleCloudBaremetalsolutionV2LogicalInterface">GoogleCloudBaremetalsolutionV2LogicalInterface</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbaremetalsolutionv2logicalinterface"></a>
<a id="schema_GoogleCloudBaremetalsolutionV2LogicalInterface"></a>
<a id="tocSgooglecloudbaremetalsolutionv2logicalinterface"></a>
<a id="tocsgooglecloudbaremetalsolutionv2logicalinterface"></a>

```json
{
  "interfaceIndex": 0,
  "logicalNetworkInterfaces": [
    {
      "defaultGateway": true,
      "id": "string",
      "ipAddress": "string",
      "network": "string",
      "networkType": "TYPE_UNSPECIFIED"
    }
  ],
  "name": "string"
}
```

Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interfaceIndex|integer(int32)|false|none|The index of the logical interface mapping to the index of the hardware bond or nic on the chosen network template. This field is deprecated.|
|logicalNetworkInterfaces|[[LogicalNetworkInterface](#schemalogicalnetworkinterface)]|false|none|List of logical network interfaces within a logical interface.|
|name|string|false|none|Interface name. This is of syntax or and forms part of the network template name.|

<h2 id="tocS_GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface">GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbaremetalsolutionv2servernetworktemplatelogicalinterface"></a>
<a id="schema_GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface"></a>
<a id="tocSgooglecloudbaremetalsolutionv2servernetworktemplatelogicalinterface"></a>
<a id="tocsgooglecloudbaremetalsolutionv2servernetworktemplatelogicalinterface"></a>

```json
{
  "name": "string",
  "required": true,
  "type": "INTERFACE_TYPE_UNSPECIFIED"
}
```

Logical interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Interface name. This is not a globally unique identifier. Name is unique only inside the ServerNetworkTemplate. This is of syntax or and forms part of the network template name.|
|required|boolean|false|none|If true, interface must have network connected.|
|type|string|false|none|Interface type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INTERFACE_TYPE_UNSPECIFIED|
|type|BOND|
|type|NIC|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "createTime": "string",
  "firmwareVersion": "string",
  "hyperthreadingEnabled": true,
  "id": "string",
  "interactiveSerialConsoleEnabled": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logicalInterfaces": [
    {
      "interfaceIndex": 0,
      "logicalNetworkInterfaces": [
        {
          "defaultGateway": true,
          "id": "string",
          "ipAddress": "string",
          "network": "string",
          "networkType": "TYPE_UNSPECIFIED"
        }
      ],
      "name": "string"
    }
  ],
  "loginInfo": "string",
  "luns": [
    {
      "bootLun": true,
      "expireTime": "string",
      "id": "string",
      "instances": [
        "string"
      ],
      "multiprotocolType": "MULTIPROTOCOL_TYPE_UNSPECIFIED",
      "name": "string",
      "shareable": true,
      "sizeGb": "string",
      "state": "STATE_UNSPECIFIED",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "storageVolume": "string",
      "wwid": "string"
    }
  ],
  "machineType": "string",
  "name": "string",
  "networkTemplate": "string",
  "networks": [
    {
      "cidr": "string",
      "gatewayIp": "string",
      "id": "string",
      "ipAddress": "string",
      "jumboFramesEnabled": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "macAddress": [
        "string"
      ],
      "mountPoints": [
        {
          "defaultGateway": true,
          "instance": "string",
          "ipAddress": "string",
          "logicalInterface": "string"
        }
      ],
      "name": "string",
      "pod": "string",
      "reservations": [
        {
          "endAddress": "string",
          "note": "string",
          "startAddress": "string"
        }
      ],
      "servicesCidr": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "vlanId": "string",
      "vrf": {
        "name": "string",
        "qosPolicy": {
          "bandwidthGbps": 0
        },
        "state": "STATE_UNSPECIFIED",
        "vlanAttachments": [
          {
            "id": "string",
            "pairingKey": "string",
            "peerIp": "string",
            "peerVlanId": "string",
            "qosPolicy": {
              "bandwidthGbps": 0
            },
            "routerIp": "string"
          }
        ]
      }
    }
  ],
  "osImage": "string",
  "pod": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "volumes": [
    {
      "attached": true,
      "autoGrownSizeGib": "string",
      "bootVolume": true,
      "currentSizeGib": "string",
      "emergencySizeGib": "string",
      "expireTime": "string",
      "id": "string",
      "instances": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "maxSizeGib": "string",
      "name": "string",
      "notes": "string",
      "originallyRequestedSizeGib": "string",
      "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
      "pod": "string",
      "protocol": "PROTOCOL_UNSPECIFIED",
      "remainingSpaceGib": "string",
      "requestedSizeGib": "string",
      "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
      "snapshotEnabled": true,
      "snapshotReservationDetail": {
        "reservedSpaceGib": "string",
        "reservedSpacePercent": 0,
        "reservedSpaceRemainingGib": "string",
        "reservedSpaceUsedPercent": 0
      },
      "snapshotSchedulePolicy": "string",
      "state": "STATE_UNSPECIFIED",
      "storageAggregatePool": "string",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
    }
  ],
  "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
}
```

A server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Create a time stamp.|
|firmwareVersion|string|false|read-only|Output only. The firmware version for the instance.|
|hyperthreadingEnabled|boolean|false|none|True if you enable hyperthreading for the server, otherwise false. The default value is false.|
|id|string|false|read-only|Output only. An identifier for the `Instance`, generated by the backend.|
|interactiveSerialConsoleEnabled|boolean|false|read-only|Output only. True if the interactive serial console feature is enabled for the instance, false otherwise. The default value is false.|
|labels|object|false|none|Labels as key value pairs.|
|logicalInterfaces|[[GoogleCloudBaremetalsolutionV2LogicalInterface](#schemagooglecloudbaremetalsolutionv2logicalinterface)]|false|none|List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. For the non-multivlan configurations (for eg, existing servers) that use existing default network template (bondaa-bondaa), both the Instance.networks field and the Instance.logical_interfaces fields will be filled to ensure backward compatibility. For the others, only Instance.logical_interfaces will be filled.|
|loginInfo|string|false|read-only|Output only. Text field about info for logging in.|
|luns|[[Lun](#schemalun)]|false|none|Immutable. List of LUNs associated with this server.|
|machineType|string|false|none|Immutable. The server type. [Available server types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)|
|name|string|false|none|Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}`|
|networkTemplate|string|false|none|Instance network template name. For eg, bondaa-bondaa, bondab-nic, etc. Generally, the template name follows the syntax of "bond" or "nic".|
|networks|[[Network](#schemanetwork)]|false|read-only|Output only. List of networks associated with this server.|
|osImage|string|false|none|The OS image currently installed on the server.|
|pod|string|false|none|Immutable. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes) allocated in the same pod only.|
|state|string|false|read-only|Output only. The state of the server.|
|updateTime|string(google-datetime)|false|read-only|Output only. Update a time stamp.|
|volumes|[[Volume](#schemavolume)]|false|none|Input only. List of Volumes to attach to this Instance on creation. This field won't be populated in Get/List responses.|
|workloadProfile|string|false|none|The workload profile for the instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PROVISIONING|
|state|RUNNING|
|state|DELETED|
|state|UPDATING|
|state|STARTING|
|state|STOPPING|
|state|SHUTDOWN|
|workloadProfile|WORKLOAD_PROFILE_UNSPECIFIED|
|workloadProfile|WORKLOAD_PROFILE_GENERIC|
|workloadProfile|WORKLOAD_PROFILE_HANA|

<h2 id="tocS_InstanceConfig">InstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconfig"></a>
<a id="schema_InstanceConfig"></a>
<a id="tocSinstanceconfig"></a>
<a id="tocsinstanceconfig"></a>

```json
{
  "accountNetworksEnabled": true,
  "clientNetwork": {
    "address": "string",
    "existingNetworkId": "string",
    "networkId": "string"
  },
  "hyperthreading": true,
  "id": "string",
  "instanceType": "string",
  "logicalInterfaces": [
    {
      "interfaceIndex": 0,
      "logicalNetworkInterfaces": [
        {
          "defaultGateway": true,
          "id": "string",
          "ipAddress": "string",
          "network": "string",
          "networkType": "TYPE_UNSPECIFIED"
        }
      ],
      "name": "string"
    }
  ],
  "name": "string",
  "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
  "networkTemplate": "string",
  "osImage": "string",
  "privateNetwork": {
    "address": "string",
    "existingNetworkId": "string",
    "networkId": "string"
  },
  "userNote": "string"
}
```

Configuration parameters for a new instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNetworksEnabled|boolean|false|none|If true networks can be from different projects of the same vendor account.|
|clientNetwork|[NetworkAddress](#schemanetworkaddress)|false|none|Client network address. Filled if InstanceConfig.multivlan_config is false.|
|hyperthreading|boolean|false|none|Whether the instance should be provisioned with Hyperthreading enabled.|
|id|string|false|none|A transient unique identifier to idenfity an instance within an ProvisioningConfig request.|
|instanceType|string|false|none|Instance type. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)|
|logicalInterfaces|[[GoogleCloudBaremetalsolutionV2LogicalInterface](#schemagooglecloudbaremetalsolutionv2logicalinterface)]|false|none|List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. Filled if InstanceConfig.multivlan_config is true.|
|name|string|false|read-only|Output only. The name of the instance config.|
|networkConfig|string|false|none|The type of network configuration on the instance.|
|networkTemplate|string|false|none|Server network template name. Filled if InstanceConfig.multivlan_config is true.|
|osImage|string|false|none|OS image to initialize the instance. [Available images](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)|
|privateNetwork|[NetworkAddress](#schemanetworkaddress)|false|none|Private network address, if any. Filled if InstanceConfig.multivlan_config is false.|
|userNote|string|false|none|User note field, it can be used by customers to add additional information for the BMS Ops team .|

#### Enumerated Values

|Property|Value|
|---|---|
|networkConfig|NETWORKCONFIG_UNSPECIFIED|
|networkConfig|SINGLE_VLAN|
|networkConfig|MULTI_VLAN|

<h2 id="tocS_InstanceQuota">InstanceQuota</h2>
<!-- backwards compatibility -->
<a id="schemainstancequota"></a>
<a id="schema_InstanceQuota"></a>
<a id="tocSinstancequota"></a>
<a id="tocsinstancequota"></a>

```json
{
  "availableMachineCount": 0,
  "gcpService": "string",
  "instanceType": "string",
  "location": "string",
  "name": "string"
}
```

A resource budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableMachineCount|integer(int32)|false|none|Number of machines than can be created for the given location and instance_type.|
|gcpService|string|false|none|The gcp service of the provisioning quota.|
|instanceType|string|false|none|Instance type. Deprecated: use gcp_service.|
|location|string|false|none|Location where the quota applies.|
|name|string|false|read-only|Output only. The name of the instance quota.|

<h2 id="tocS_IntakeVlanAttachment">IntakeVlanAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaintakevlanattachment"></a>
<a id="schema_IntakeVlanAttachment"></a>
<a id="tocSintakevlanattachment"></a>
<a id="tocsintakevlanattachment"></a>

```json
{
  "id": "string",
  "pairingKey": "string"
}
```

A GCP vlan attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Identifier of the VLAN attachment.|
|pairingKey|string|false|none|Attachment pairing key.|

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
      "createTime": "string",
      "firmwareVersion": "string",
      "hyperthreadingEnabled": true,
      "id": "string",
      "interactiveSerialConsoleEnabled": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logicalInterfaces": [
        {
          "interfaceIndex": 0,
          "logicalNetworkInterfaces": [
            {
              "defaultGateway": true,
              "id": "string",
              "ipAddress": "string",
              "network": "string",
              "networkType": "TYPE_UNSPECIFIED"
            }
          ],
          "name": "string"
        }
      ],
      "loginInfo": "string",
      "luns": [
        {
          "bootLun": true,
          "expireTime": "string",
          "id": "string",
          "instances": [
            "string"
          ],
          "multiprotocolType": "MULTIPROTOCOL_TYPE_UNSPECIFIED",
          "name": "string",
          "shareable": true,
          "sizeGb": "string",
          "state": "STATE_UNSPECIFIED",
          "storageType": "STORAGE_TYPE_UNSPECIFIED",
          "storageVolume": "string",
          "wwid": "string"
        }
      ],
      "machineType": "string",
      "name": "string",
      "networkTemplate": "string",
      "networks": [
        {
          "cidr": "string",
          "gatewayIp": "string",
          "id": "string",
          "ipAddress": "string",
          "jumboFramesEnabled": true,
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "macAddress": [
            "string"
          ],
          "mountPoints": [
            {
              "defaultGateway": true,
              "instance": "string",
              "ipAddress": "string",
              "logicalInterface": "string"
            }
          ],
          "name": "string",
          "pod": "string",
          "reservations": [
            {
              "endAddress": "string",
              "note": "string",
              "startAddress": "string"
            }
          ],
          "servicesCidr": "string",
          "state": "STATE_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED",
          "vlanId": "string",
          "vrf": {
            "name": "string",
            "qosPolicy": {
              "bandwidthGbps": 0
            },
            "state": "STATE_UNSPECIFIED",
            "vlanAttachments": [
              {
                "id": "string",
                "pairingKey": "string",
                "peerIp": "string",
                "peerVlanId": "string",
                "qosPolicy": {
                  "bandwidthGbps": 0
                },
                "routerIp": "string"
              }
            ]
          }
        }
      ],
      "osImage": "string",
      "pod": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "volumes": [
        {
          "attached": true,
          "autoGrownSizeGib": "string",
          "bootVolume": true,
          "currentSizeGib": "string",
          "emergencySizeGib": "string",
          "expireTime": "string",
          "id": "string",
          "instances": [
            "string"
          ],
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "maxSizeGib": "string",
          "name": "string",
          "notes": "string",
          "originallyRequestedSizeGib": "string",
          "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
          "pod": "string",
          "protocol": "PROTOCOL_UNSPECIFIED",
          "remainingSpaceGib": "string",
          "requestedSizeGib": "string",
          "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
          "snapshotEnabled": true,
          "snapshotReservationDetail": {
            "reservedSpaceGib": "string",
            "reservedSpacePercent": 0,
            "reservedSpaceRemainingGib": "string",
            "reservedSpaceUsedPercent": 0
          },
          "snapshotSchedulePolicy": "string",
          "state": "STATE_UNSPECIFIED",
          "storageAggregatePool": "string",
          "storageType": "STORAGE_TYPE_UNSPECIFIED",
          "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
        }
      ],
      "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for the list of servers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[Instance](#schemainstance)]|false|none|The list of servers.|
|nextPageToken|string|false|none|A token identifying a page of results from the server.|
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

<h2 id="tocS_ListLunsResponse">ListLunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlunsresponse"></a>
<a id="schema_ListLunsResponse"></a>
<a id="tocSlistlunsresponse"></a>
<a id="tocslistlunsresponse"></a>

```json
{
  "luns": [
    {
      "bootLun": true,
      "expireTime": "string",
      "id": "string",
      "instances": [
        "string"
      ],
      "multiprotocolType": "MULTIPROTOCOL_TYPE_UNSPECIFIED",
      "name": "string",
      "shareable": true,
      "sizeGb": "string",
      "state": "STATE_UNSPECIFIED",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "storageVolume": "string",
      "wwid": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message containing the list of storage volume luns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|luns|[[Lun](#schemalun)]|false|none|The list of luns.|
|nextPageToken|string|false|none|A token identifying a page of results from the server.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListNetworkUsageResponse">ListNetworkUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworkusageresponse"></a>
<a id="schema_ListNetworkUsageResponse"></a>
<a id="tocSlistnetworkusageresponse"></a>
<a id="tocslistnetworkusageresponse"></a>

```json
{
  "networks": [
    {
      "network": {
        "cidr": "string",
        "gatewayIp": "string",
        "id": "string",
        "ipAddress": "string",
        "jumboFramesEnabled": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "macAddress": [
          "string"
        ],
        "mountPoints": [
          {
            "defaultGateway": true,
            "instance": "string",
            "ipAddress": "string",
            "logicalInterface": "string"
          }
        ],
        "name": "string",
        "pod": "string",
        "reservations": [
          {
            "endAddress": "string",
            "note": "string",
            "startAddress": "string"
          }
        ],
        "servicesCidr": "string",
        "state": "STATE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "vlanId": "string",
        "vrf": {
          "name": "string",
          "qosPolicy": {
            "bandwidthGbps": 0
          },
          "state": "STATE_UNSPECIFIED",
          "vlanAttachments": [
            {
              "id": "string",
              "pairingKey": "string",
              "peerIp": "string",
              "peerVlanId": "string",
              "qosPolicy": {
                "bandwidthGbps": 0
              },
              "routerIp": "string"
            }
          ]
        }
      },
      "usedIps": [
        "string"
      ]
    }
  ]
}
```

Response with Networks with IPs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networks|[[NetworkUsage](#schemanetworkusage)]|false|none|Networks with IPs.|

<h2 id="tocS_ListNetworksResponse">ListNetworksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworksresponse"></a>
<a id="schema_ListNetworksResponse"></a>
<a id="tocSlistnetworksresponse"></a>
<a id="tocslistnetworksresponse"></a>

```json
{
  "networks": [
    {
      "cidr": "string",
      "gatewayIp": "string",
      "id": "string",
      "ipAddress": "string",
      "jumboFramesEnabled": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "macAddress": [
        "string"
      ],
      "mountPoints": [
        {
          "defaultGateway": true,
          "instance": "string",
          "ipAddress": "string",
          "logicalInterface": "string"
        }
      ],
      "name": "string",
      "pod": "string",
      "reservations": [
        {
          "endAddress": "string",
          "note": "string",
          "startAddress": "string"
        }
      ],
      "servicesCidr": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "vlanId": "string",
      "vrf": {
        "name": "string",
        "qosPolicy": {
          "bandwidthGbps": 0
        },
        "state": "STATE_UNSPECIFIED",
        "vlanAttachments": [
          {
            "id": "string",
            "pairingKey": "string",
            "peerIp": "string",
            "peerVlanId": "string",
            "qosPolicy": {
              "bandwidthGbps": 0
            },
            "routerIp": "string"
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

Response message containing the list of networks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networks|[[Network](#schemanetwork)]|false|none|The list of networks.|
|nextPageToken|string|false|none|A token identifying a page of results from the server.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListNfsSharesResponse">ListNfsSharesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnfssharesresponse"></a>
<a id="schema_ListNfsSharesResponse"></a>
<a id="tocSlistnfssharesresponse"></a>
<a id="tocslistnfssharesresponse"></a>

```json
{
  "nextPageToken": "string",
  "nfsShares": [
    {
      "allowedClients": [
        {
          "allowDev": true,
          "allowSuid": true,
          "allowedClientsCidr": "string",
          "mountPermissions": "MOUNT_PERMISSIONS_UNSPECIFIED",
          "network": "string",
          "nfsPath": "string",
          "noRootSquash": true,
          "shareIp": "string"
        }
      ],
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nfsShareId": "string",
      "requestedSizeGib": "string",
      "state": "STATE_UNSPECIFIED",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "volume": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message containing the list of NFS shares.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token identifying a page of results from the server.|
|nfsShares|[[NfsShare](#schemanfsshare)]|false|none|The list of NFS shares.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListProvisioningQuotasResponse">ListProvisioningQuotasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisioningquotasresponse"></a>
<a id="schema_ListProvisioningQuotasResponse"></a>
<a id="tocSlistprovisioningquotasresponse"></a>
<a id="tocslistprovisioningquotasresponse"></a>

```json
{
  "nextPageToken": "string",
  "provisioningQuotas": [
    {
      "assetType": "ASSET_TYPE_UNSPECIFIED",
      "availableCount": 0,
      "gcpService": "string",
      "instanceQuota": {
        "availableMachineCount": 0,
        "gcpService": "string",
        "instanceType": "string",
        "location": "string",
        "name": "string"
      },
      "location": "string",
      "name": "string",
      "networkBandwidth": "string",
      "serverCount": "string",
      "storageGib": "string"
    }
  ]
}
```

Response message for the list of provisioning quotas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|provisioningQuotas|[[ProvisioningQuota](#schemaprovisioningquota)]|false|none|The provisioning quotas registered in this project.|

<h2 id="tocS_ListSSHKeysResponse">ListSSHKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsshkeysresponse"></a>
<a id="schema_ListSSHKeysResponse"></a>
<a id="tocSlistsshkeysresponse"></a>
<a id="tocslistsshkeysresponse"></a>

```json
{
  "nextPageToken": "string",
  "sshKeys": [
    {
      "name": "string",
      "publicKey": "string"
    }
  ]
}
```

Message for response of ListSSHKeys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|sshKeys|[[SSHKey](#schemasshkey)]|false|none|The SSH keys registered in the project.|

<h2 id="tocS_ListVolumeSnapshotsResponse">ListVolumeSnapshotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumesnapshotsresponse"></a>
<a id="schema_ListVolumeSnapshotsResponse"></a>
<a id="tocSlistvolumesnapshotsresponse"></a>
<a id="tocslistvolumesnapshotsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "volumeSnapshots": [
    {
      "createTime": "string",
      "description": "string",
      "id": "string",
      "name": "string",
      "storageVolume": "string",
      "type": "SNAPSHOT_TYPE_UNSPECIFIED"
    }
  ]
}
```

Response message containing the list of volume snapshots.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token identifying a page of results from the server.|
|unreachable|[string]|false|none|Locations that could not be reached.|
|volumeSnapshots|[[VolumeSnapshot](#schemavolumesnapshot)]|false|none|The list of snapshots.|

<h2 id="tocS_ListVolumesResponse">ListVolumesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumesresponse"></a>
<a id="schema_ListVolumesResponse"></a>
<a id="tocSlistvolumesresponse"></a>
<a id="tocslistvolumesresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "volumes": [
    {
      "attached": true,
      "autoGrownSizeGib": "string",
      "bootVolume": true,
      "currentSizeGib": "string",
      "emergencySizeGib": "string",
      "expireTime": "string",
      "id": "string",
      "instances": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "maxSizeGib": "string",
      "name": "string",
      "notes": "string",
      "originallyRequestedSizeGib": "string",
      "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
      "pod": "string",
      "protocol": "PROTOCOL_UNSPECIFIED",
      "remainingSpaceGib": "string",
      "requestedSizeGib": "string",
      "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
      "snapshotEnabled": true,
      "snapshotReservationDetail": {
        "reservedSpaceGib": "string",
        "reservedSpacePercent": 0,
        "reservedSpaceRemainingGib": "string",
        "reservedSpaceUsedPercent": 0
      },
      "snapshotSchedulePolicy": "string",
      "state": "STATE_UNSPECIFIED",
      "storageAggregatePool": "string",
      "storageType": "STORAGE_TYPE_UNSPECIFIED",
      "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
    }
  ]
}
```

Response message containing the list of storage volumes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token identifying a page of results from the server.|
|unreachable|[string]|false|none|Locations that could not be reached.|
|volumes|[[Volume](#schemavolume)]|false|none|The list of storage volumes.|

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

<h2 id="tocS_LogicalNetworkInterface">LogicalNetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemalogicalnetworkinterface"></a>
<a id="schema_LogicalNetworkInterface"></a>
<a id="tocSlogicalnetworkinterface"></a>
<a id="tocslogicalnetworkinterface"></a>

```json
{
  "defaultGateway": true,
  "id": "string",
  "ipAddress": "string",
  "network": "string",
  "networkType": "TYPE_UNSPECIFIED"
}
```

Each logical network interface is effectively a network and IP pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultGateway|boolean|false|none|Whether this interface is the default gateway for the instance. Only one interface can be the default gateway for the instance.|
|id|string|false|none|An identifier for the `Network`, generated by the backend.|
|ipAddress|string|false|none|IP address in the network|
|network|string|false|none|Name of the network|
|networkType|string|false|none|Type of network.|

#### Enumerated Values

|Property|Value|
|---|---|
|networkType|TYPE_UNSPECIFIED|
|networkType|CLIENT|
|networkType|PRIVATE|

<h2 id="tocS_Lun">Lun</h2>
<!-- backwards compatibility -->
<a id="schemalun"></a>
<a id="schema_Lun"></a>
<a id="tocSlun"></a>
<a id="tocslun"></a>

```json
{
  "bootLun": true,
  "expireTime": "string",
  "id": "string",
  "instances": [
    "string"
  ],
  "multiprotocolType": "MULTIPROTOCOL_TYPE_UNSPECIFIED",
  "name": "string",
  "shareable": true,
  "sizeGb": "string",
  "state": "STATE_UNSPECIFIED",
  "storageType": "STORAGE_TYPE_UNSPECIFIED",
  "storageVolume": "string",
  "wwid": "string"
}
```

A storage volume logical unit number (LUN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootLun|boolean|false|none|Display if this LUN is a boot LUN.|
|expireTime|string(google-datetime)|false|read-only|Output only. Time after which LUN will be fully deleted. It is filled only for LUNs in COOL_OFF state.|
|id|string|false|none|An identifier for the LUN, generated by the backend.|
|instances|[string]|false|read-only|Output only. Instances this Lun is attached to.|
|multiprotocolType|string|false|none|The LUN multiprotocol type ensures the characteristics of the LUN are optimized for each operating system.|
|name|string|false|read-only|Output only. The name of the LUN.|
|shareable|boolean|false|none|Display if this LUN can be shared between multiple physical servers.|
|sizeGb|string(int64)|false|none|The size of this LUN, in gigabytes.|
|state|string|false|none|The state of this storage volume.|
|storageType|string|false|none|The storage type for this LUN.|
|storageVolume|string|false|none|Display the storage volume for this LUN.|
|wwid|string|false|none|The WWID for this LUN.|

#### Enumerated Values

|Property|Value|
|---|---|
|multiprotocolType|MULTIPROTOCOL_TYPE_UNSPECIFIED|
|multiprotocolType|LINUX|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|UPDATING|
|state|READY|
|state|DELETING|
|state|COOL_OFF|
|storageType|STORAGE_TYPE_UNSPECIFIED|
|storageType|SSD|
|storageType|HDD|

<h2 id="tocS_LunRange">LunRange</h2>
<!-- backwards compatibility -->
<a id="schemalunrange"></a>
<a id="schema_LunRange"></a>
<a id="tocSlunrange"></a>
<a id="tocslunrange"></a>

```json
{
  "quantity": 0,
  "sizeGb": 0
}
```

A LUN(Logical Unit Number) range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|integer(int32)|false|none|Number of LUNs to create.|
|sizeGb|integer(int32)|false|none|The requested size of each LUN, in GB.|

<h2 id="tocS_Network">Network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_Network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
{
  "cidr": "string",
  "gatewayIp": "string",
  "id": "string",
  "ipAddress": "string",
  "jumboFramesEnabled": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "macAddress": [
    "string"
  ],
  "mountPoints": [
    {
      "defaultGateway": true,
      "instance": "string",
      "ipAddress": "string",
      "logicalInterface": "string"
    }
  ],
  "name": "string",
  "pod": "string",
  "reservations": [
    {
      "endAddress": "string",
      "note": "string",
      "startAddress": "string"
    }
  ],
  "servicesCidr": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED",
  "vlanId": "string",
  "vrf": {
    "name": "string",
    "qosPolicy": {
      "bandwidthGbps": 0
    },
    "state": "STATE_UNSPECIFIED",
    "vlanAttachments": [
      {
        "id": "string",
        "pairingKey": "string",
        "peerIp": "string",
        "peerVlanId": "string",
        "qosPolicy": {
          "bandwidthGbps": 0
        },
        "routerIp": "string"
      }
    ]
  }
}
```

A Network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cidr|string|false|none|The cidr of the Network.|
|gatewayIp|string|false|read-only|Output only. Gateway ip address.|
|id|string|false|none|An identifier for the `Network`, generated by the backend.|
|ipAddress|string|false|none|IP address configured.|
|jumboFramesEnabled|boolean|false|none|Whether network uses standard frames or jumbo ones.|
|labels|object|false|none|Labels as key value pairs.|
|macAddress|[string]|false|none|List of physical interfaces.|
|mountPoints|[[NetworkMountPoint](#schemanetworkmountpoint)]|false|none|Input only. List of mount points to attach the network to.|
|name|string|false|read-only|Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/networks/{network}`|
|pod|string|false|read-only|Output only. Pod name.|
|reservations|[[NetworkAddressReservation](#schemanetworkaddressreservation)]|false|none|List of IP address reservations in this network. When updating this field, an error will be generated if a reservation conflicts with an IP address already allocated to a physical server.|
|servicesCidr|string|false|none|IP range for reserved for services (e.g. NFS).|
|state|string|false|none|The Network state.|
|type|string|false|none|The type of this network.|
|vlanId|string|false|none|The vlan id of the Network.|
|vrf|[VRF](#schemavrf)|false|none|The vrf for the Network.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PROVISIONING|
|state|PROVISIONED|
|state|DEPROVISIONING|
|state|UPDATING|
|type|TYPE_UNSPECIFIED|
|type|CLIENT|
|type|PRIVATE|

<h2 id="tocS_NetworkAddress">NetworkAddress</h2>
<!-- backwards compatibility -->
<a id="schemanetworkaddress"></a>
<a id="schema_NetworkAddress"></a>
<a id="tocSnetworkaddress"></a>
<a id="tocsnetworkaddress"></a>

```json
{
  "address": "string",
  "existingNetworkId": "string",
  "networkId": "string"
}
```

A network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|IPv4 address to be assigned to the server.|
|existingNetworkId|string|false|none|Name of the existing network to use.|
|networkId|string|false|none|Id of the network to use, within the same ProvisioningConfig request.|

<h2 id="tocS_NetworkAddressReservation">NetworkAddressReservation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkaddressreservation"></a>
<a id="schema_NetworkAddressReservation"></a>
<a id="tocSnetworkaddressreservation"></a>
<a id="tocsnetworkaddressreservation"></a>

```json
{
  "endAddress": "string",
  "note": "string",
  "startAddress": "string"
}
```

A reservation of one or more addresses in a network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endAddress|string|false|none|The last address of this reservation block, inclusive. I.e., for cases when reservations are only single addresses, end_address and start_address will be the same. Must be specified as a single IPv4 address, e.g. 10.1.2.2.|
|note|string|false|none|A note about this reservation, intended for human consumption.|
|startAddress|string|false|none|The first address of this reservation block. Must be specified as a single IPv4 address, e.g. 10.1.2.2.|

<h2 id="tocS_NetworkConfig">NetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfig"></a>
<a id="schema_NetworkConfig"></a>
<a id="tocSnetworkconfig"></a>
<a id="tocsnetworkconfig"></a>

```json
{
  "bandwidth": "BANDWIDTH_UNSPECIFIED",
  "cidr": "string",
  "gcpService": "string",
  "id": "string",
  "jumboFramesEnabled": true,
  "name": "string",
  "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED",
  "userNote": "string",
  "vlanAttachments": [
    {
      "id": "string",
      "pairingKey": "string"
    }
  ],
  "vlanSameProject": true
}
```

Configuration parameters for a new network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth|string|false|none|Interconnect bandwidth. Set only when type is CLIENT.|
|cidr|string|false|none|CIDR range of the network.|
|gcpService|string|false|none|The GCP service of the network. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning.|
|id|string|false|none|A transient unique identifier to identify a volume within an ProvisioningConfig request.|
|jumboFramesEnabled|boolean|false|none|The JumboFramesEnabled option for customer to set.|
|name|string|false|read-only|Output only. The name of the network config.|
|serviceCidr|string|false|none|Service CIDR, if any.|
|type|string|false|none|The type of this network, either Client or Private.|
|userNote|string|false|none|User note field, it can be used by customers to add additional information for the BMS Ops team .|
|vlanAttachments|[[IntakeVlanAttachment](#schemaintakevlanattachment)]|false|none|List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan).|
|vlanSameProject|boolean|false|none|Whether the VLAN attachment pair is located in the same project.|

#### Enumerated Values

|Property|Value|
|---|---|
|bandwidth|BANDWIDTH_UNSPECIFIED|
|bandwidth|BW_1_GBPS|
|bandwidth|BW_2_GBPS|
|bandwidth|BW_5_GBPS|
|bandwidth|BW_10_GBPS|
|serviceCidr|SERVICE_CIDR_UNSPECIFIED|
|serviceCidr|DISABLED|
|serviceCidr|HIGH_26|
|serviceCidr|HIGH_27|
|serviceCidr|HIGH_28|
|type|TYPE_UNSPECIFIED|
|type|CLIENT|
|type|PRIVATE|

<h2 id="tocS_NetworkMountPoint">NetworkMountPoint</h2>
<!-- backwards compatibility -->
<a id="schemanetworkmountpoint"></a>
<a id="schema_NetworkMountPoint"></a>
<a id="tocSnetworkmountpoint"></a>
<a id="tocsnetworkmountpoint"></a>

```json
{
  "defaultGateway": true,
  "instance": "string",
  "ipAddress": "string",
  "logicalInterface": "string"
}
```

Mount point for a network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultGateway|boolean|false|none|Network should be a default gateway.|
|instance|string|false|none|Instance to attach network to.|
|ipAddress|string|false|none|Ip address of the server.|
|logicalInterface|string|false|none|Logical interface to detach from.|

<h2 id="tocS_NetworkUsage">NetworkUsage</h2>
<!-- backwards compatibility -->
<a id="schemanetworkusage"></a>
<a id="schema_NetworkUsage"></a>
<a id="tocSnetworkusage"></a>
<a id="tocsnetworkusage"></a>

```json
{
  "network": {
    "cidr": "string",
    "gatewayIp": "string",
    "id": "string",
    "ipAddress": "string",
    "jumboFramesEnabled": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "macAddress": [
      "string"
    ],
    "mountPoints": [
      {
        "defaultGateway": true,
        "instance": "string",
        "ipAddress": "string",
        "logicalInterface": "string"
      }
    ],
    "name": "string",
    "pod": "string",
    "reservations": [
      {
        "endAddress": "string",
        "note": "string",
        "startAddress": "string"
      }
    ],
    "servicesCidr": "string",
    "state": "STATE_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED",
    "vlanId": "string",
    "vrf": {
      "name": "string",
      "qosPolicy": {
        "bandwidthGbps": 0
      },
      "state": "STATE_UNSPECIFIED",
      "vlanAttachments": [
        {
          "id": "string",
          "pairingKey": "string",
          "peerIp": "string",
          "peerVlanId": "string",
          "qosPolicy": {
            "bandwidthGbps": 0
          },
          "routerIp": "string"
        }
      ]
    }
  },
  "usedIps": [
    "string"
  ]
}
```

Network with all used IP addresses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|[Network](#schemanetwork)|false|none|Network.|
|usedIps|[string]|false|none|All used IP addresses in this network.|

<h2 id="tocS_NfsExport">NfsExport</h2>
<!-- backwards compatibility -->
<a id="schemanfsexport"></a>
<a id="schema_NfsExport"></a>
<a id="tocSnfsexport"></a>
<a id="tocsnfsexport"></a>

```json
{
  "allowDev": true,
  "allowSuid": true,
  "cidr": "string",
  "machineId": "string",
  "networkId": "string",
  "noRootSquash": true,
  "permissions": "PERMISSIONS_UNSPECIFIED"
}
```

A NFS export entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowDev|boolean|false|none|Allow dev flag in NfsShare AllowedClientsRequest.|
|allowSuid|boolean|false|none|Allow the setuid flag.|
|cidr|string|false|none|A CIDR range.|
|machineId|string|false|none|Either a single machine, identified by an ID, or a comma-separated list of machine IDs.|
|networkId|string|false|none|Network to use to publish the export.|
|noRootSquash|boolean|false|none|Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.|
|permissions|string|false|none|Export permissions.|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|PERMISSIONS_UNSPECIFIED|
|permissions|READ_ONLY|
|permissions|READ_WRITE|

<h2 id="tocS_NfsShare">NfsShare</h2>
<!-- backwards compatibility -->
<a id="schemanfsshare"></a>
<a id="schema_NfsShare"></a>
<a id="tocSnfsshare"></a>
<a id="tocsnfsshare"></a>

```json
{
  "allowedClients": [
    {
      "allowDev": true,
      "allowSuid": true,
      "allowedClientsCidr": "string",
      "mountPermissions": "MOUNT_PERMISSIONS_UNSPECIFIED",
      "network": "string",
      "nfsPath": "string",
      "noRootSquash": true,
      "shareIp": "string"
    }
  ],
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nfsShareId": "string",
  "requestedSizeGib": "string",
  "state": "STATE_UNSPECIFIED",
  "storageType": "STORAGE_TYPE_UNSPECIFIED",
  "volume": "string"
}
```

An NFS share.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedClients|[[AllowedClient](#schemaallowedclient)]|false|none|List of allowed access points.|
|id|string|false|read-only|Output only. An identifier for the NFS share, generated by the backend. This is the same value as nfs_share_id and will replace it in the future.|
|labels|object|false|none|Labels as key value pairs.|
|name|string|false|none|Immutable. The name of the NFS share.|
|nfsShareId|string|false|read-only|Output only. An identifier for the NFS share, generated by the backend. This field will be deprecated in the future, use `id` instead.|
|requestedSizeGib|string(int64)|false|none|The requested size, in GiB.|
|state|string|false|read-only|Output only. The state of the NFS share.|
|storageType|string|false|none|Immutable. The storage type of the underlying volume.|
|volume|string|false|read-only|Output only. The underlying volume of the share. Created automatically during provisioning.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PROVISIONED|
|state|CREATING|
|state|UPDATING|
|state|DELETING|
|storageType|STORAGE_TYPE_UNSPECIFIED|
|storageType|SSD|
|storageType|HDD|

<h2 id="tocS_OSImage">OSImage</h2>
<!-- backwards compatibility -->
<a id="schemaosimage"></a>
<a id="schema_OSImage"></a>
<a id="tocSosimage"></a>
<a id="tocsosimage"></a>

```json
{
  "applicableInstanceTypes": [
    "string"
  ],
  "code": "string",
  "description": "string",
  "name": "string",
  "supportedNetworkTemplates": [
    {
      "applicableInstanceTypes": [
        "string"
      ],
      "logicalInterfaces": [
        {
          "name": "string",
          "required": true,
          "type": "INTERFACE_TYPE_UNSPECIFIED"
        }
      ],
      "name": "string"
    }
  ]
}
```

Operation System image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicableInstanceTypes|[string]|false|none|Instance types this image is applicable to. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)|
|code|string|false|none|OS Image code.|
|description|string|false|none|OS Image description.|
|name|string|false|read-only|Output only. OS Image's unique name.|
|supportedNetworkTemplates|[[ServerNetworkTemplate](#schemaservernetworktemplate)]|false|none|Network templates that can be used with this OS Image.|

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

<h2 id="tocS_ProvisioningConfig">ProvisioningConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningconfig"></a>
<a id="schema_ProvisioningConfig"></a>
<a id="tocSprovisioningconfig"></a>
<a id="tocsprovisioningconfig"></a>

```json
{
  "cloudConsoleUri": "string",
  "customId": "string",
  "email": "string",
  "handoverServiceAccount": "string",
  "instances": [
    {
      "accountNetworksEnabled": true,
      "clientNetwork": {
        "address": "string",
        "existingNetworkId": "string",
        "networkId": "string"
      },
      "hyperthreading": true,
      "id": "string",
      "instanceType": "string",
      "logicalInterfaces": [
        {
          "interfaceIndex": 0,
          "logicalNetworkInterfaces": [
            {
              "defaultGateway": true,
              "id": "string",
              "ipAddress": "string",
              "network": "string",
              "networkType": "TYPE_UNSPECIFIED"
            }
          ],
          "name": "string"
        }
      ],
      "name": "string",
      "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
      "networkTemplate": "string",
      "osImage": "string",
      "privateNetwork": {
        "address": "string",
        "existingNetworkId": "string",
        "networkId": "string"
      },
      "userNote": "string"
    }
  ],
  "location": "string",
  "name": "string",
  "networks": [
    {
      "bandwidth": "BANDWIDTH_UNSPECIFIED",
      "cidr": "string",
      "gcpService": "string",
      "id": "string",
      "jumboFramesEnabled": true,
      "name": "string",
      "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "userNote": "string",
      "vlanAttachments": [
        {
          "id": "string",
          "pairingKey": "string"
        }
      ],
      "vlanSameProject": true
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "ticketId": "string",
  "updateTime": "string",
  "volumes": [
    {
      "gcpService": "string",
      "id": "string",
      "lunRanges": [
        {
          "quantity": 0,
          "sizeGb": 0
        }
      ],
      "machineIds": [
        "string"
      ],
      "name": "string",
      "nfsExports": [
        {
          "allowDev": true,
          "allowSuid": true,
          "cidr": "string",
          "machineId": "string",
          "networkId": "string",
          "noRootSquash": true,
          "permissions": "PERMISSIONS_UNSPECIFIED"
        }
      ],
      "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
      "protocol": "PROTOCOL_UNSPECIFIED",
      "sizeGb": 0,
      "snapshotsEnabled": true,
      "storageAggregatePool": "string",
      "type": "TYPE_UNSPECIFIED",
      "userNote": "string"
    }
  ],
  "vpcScEnabled": true
}
```

A provisioning configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudConsoleUri|string|false|read-only|Output only. URI to Cloud Console UI view of this provisioning config.|
|customId|string|false|none|Optional. The user-defined identifier of the provisioning config.|
|email|string|false|none|Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages.|
|handoverServiceAccount|string|false|none|A service account to enable customers to access instance credentials upon handover.|
|instances|[[InstanceConfig](#schemainstanceconfig)]|false|none|Instances to be created.|
|location|string|false|none|Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period.|
|name|string|false|read-only|Output only. The system-generated name of the provisioning config. This follows the UUID format.|
|networks|[[NetworkConfig](#schemanetworkconfig)]|false|none|Networks to be created.|
|state|string|false|read-only|Output only. State of ProvisioningConfig.|
|statusMessage|string|false|none|Optional status messages associated with the FAILED state.|
|ticketId|string|false|none|A generated ticket id to track provisioning request.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update timestamp.|
|volumes|[[VolumeConfig](#schemavolumeconfig)]|false|none|Volumes to be created.|
|vpcScEnabled|boolean|false|none|If true, VPC SC is enabled for the cluster.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|DRAFT|
|state|SUBMITTED|
|state|PROVISIONING|
|state|PROVISIONED|
|state|VALIDATED|
|state|CANCELLED|
|state|FAILED|

<h2 id="tocS_ProvisioningQuota">ProvisioningQuota</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningquota"></a>
<a id="schema_ProvisioningQuota"></a>
<a id="tocSprovisioningquota"></a>
<a id="tocsprovisioningquota"></a>

```json
{
  "assetType": "ASSET_TYPE_UNSPECIFIED",
  "availableCount": 0,
  "gcpService": "string",
  "instanceQuota": {
    "availableMachineCount": 0,
    "gcpService": "string",
    "instanceType": "string",
    "location": "string",
    "name": "string"
  },
  "location": "string",
  "name": "string",
  "networkBandwidth": "string",
  "serverCount": "string",
  "storageGib": "string"
}
```

A provisioning quota for a given project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetType|string|false|none|The asset type of this provisioning quota.|
|availableCount|integer(int32)|false|none|The available count of the provisioning quota.|
|gcpService|string|false|none|The gcp service of the provisioning quota.|
|instanceQuota|[InstanceQuota](#schemainstancequota)|false|none|Instance quota.|
|location|string|false|none|The specific location of the provisioining quota.|
|name|string|false|read-only|Output only. The name of the provisioning quota.|
|networkBandwidth|string(int64)|false|none|Network bandwidth, Gbps|
|serverCount|string(int64)|false|none|Server count.|
|storageGib|string(int64)|false|none|Storage size (GB).|

#### Enumerated Values

|Property|Value|
|---|---|
|assetType|ASSET_TYPE_UNSPECIFIED|
|assetType|ASSET_TYPE_SERVER|
|assetType|ASSET_TYPE_STORAGE|
|assetType|ASSET_TYPE_NETWORK|

<h2 id="tocS_QosPolicy">QosPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaqospolicy"></a>
<a id="schema_QosPolicy"></a>
<a id="tocSqospolicy"></a>
<a id="tocsqospolicy"></a>

```json
{
  "bandwidthGbps": 0
}
```

QOS policy parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidthGbps|number(double)|false|none|The bandwidth permitted by the QOS policy, in gbps.|

<h2 id="tocS_RenameInstanceRequest">RenameInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenameinstancerequest"></a>
<a id="schema_RenameInstanceRequest"></a>
<a id="tocSrenameinstancerequest"></a>
<a id="tocsrenameinstancerequest"></a>

```json
{
  "newInstanceId": "string"
}
```

Message requesting rename of a server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newInstanceId|string|false|none|Required. The new `id` of the instance.|

<h2 id="tocS_RenameNetworkRequest">RenameNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenamenetworkrequest"></a>
<a id="schema_RenameNetworkRequest"></a>
<a id="tocSrenamenetworkrequest"></a>
<a id="tocsrenamenetworkrequest"></a>

```json
{
  "newNetworkId": "string"
}
```

Message requesting rename of a server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newNetworkId|string|false|none|Required. The new `id` of the network.|

<h2 id="tocS_RenameNfsShareRequest">RenameNfsShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenamenfssharerequest"></a>
<a id="schema_RenameNfsShareRequest"></a>
<a id="tocSrenamenfssharerequest"></a>
<a id="tocsrenamenfssharerequest"></a>

```json
{
  "newNfsshareId": "string"
}
```

Message requesting rename of a server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newNfsshareId|string|false|none|Required. The new `id` of the nfsshare.|

<h2 id="tocS_RenameVolumeRequest">RenameVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenamevolumerequest"></a>
<a id="schema_RenameVolumeRequest"></a>
<a id="tocSrenamevolumerequest"></a>
<a id="tocsrenamevolumerequest"></a>

```json
{
  "newVolumeId": "string"
}
```

Message requesting rename of a server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newVolumeId|string|false|none|Required. The new `id` of the volume.|

<h2 id="tocS_ResetInstanceRequest">ResetInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetinstancerequest"></a>
<a id="schema_ResetInstanceRequest"></a>
<a id="tocSresetinstancerequest"></a>
<a id="tocsresetinstancerequest"></a>

```json
{}
```

Message requesting to reset a server.

<h2 id="tocS_ResizeVolumeRequest">ResizeVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresizevolumerequest"></a>
<a id="schema_ResizeVolumeRequest"></a>
<a id="tocSresizevolumerequest"></a>
<a id="tocsresizevolumerequest"></a>

```json
{
  "sizeGib": "string"
}
```

Request for emergency resize Volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sizeGib|string(int64)|false|none|New Volume size, in GiB.|

<h2 id="tocS_RestoreVolumeSnapshotRequest">RestoreVolumeSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorevolumesnapshotrequest"></a>
<a id="schema_RestoreVolumeSnapshotRequest"></a>
<a id="tocSrestorevolumesnapshotrequest"></a>
<a id="tocsrestorevolumesnapshotrequest"></a>

```json
{}
```

Message for restoring a volume snapshot.

<h2 id="tocS_SSHKey">SSHKey</h2>
<!-- backwards compatibility -->
<a id="schemasshkey"></a>
<a id="schema_SSHKey"></a>
<a id="tocSsshkey"></a>
<a id="tocssshkey"></a>

```json
{
  "name": "string",
  "publicKey": "string"
}
```

An SSH key, used for authorizing with the interactive serial console feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. The name of this SSH key. Currently, the only valid value for the location is "global".|
|publicKey|string|false|none|The public SSH key. This must be in OpenSSH .authorized_keys format.|

<h2 id="tocS_ServerNetworkTemplate">ServerNetworkTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaservernetworktemplate"></a>
<a id="schema_ServerNetworkTemplate"></a>
<a id="tocSservernetworktemplate"></a>
<a id="tocsservernetworktemplate"></a>

```json
{
  "applicableInstanceTypes": [
    "string"
  ],
  "logicalInterfaces": [
    {
      "name": "string",
      "required": true,
      "type": "INTERFACE_TYPE_UNSPECIFIED"
    }
  ],
  "name": "string"
}
```

Network template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicableInstanceTypes|[string]|false|none|Instance types this template is applicable to.|
|logicalInterfaces|[[GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface](#schemagooglecloudbaremetalsolutionv2servernetworktemplatelogicalinterface)]|false|none|Logical interfaces.|
|name|string|false|read-only|Output only. Template's unique name. The full resource name follows the pattern: `projects/{project}/locations/{location}/serverNetworkTemplate/{server_network_template}` Generally, the {server_network_template} follows the syntax of "bond" or "nic".|

<h2 id="tocS_SnapshotReservationDetail">SnapshotReservationDetail</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotreservationdetail"></a>
<a id="schema_SnapshotReservationDetail"></a>
<a id="tocSsnapshotreservationdetail"></a>
<a id="tocssnapshotreservationdetail"></a>

```json
{
  "reservedSpaceGib": "string",
  "reservedSpacePercent": 0,
  "reservedSpaceRemainingGib": "string",
  "reservedSpaceUsedPercent": 0
}
```

Details about snapshot space reservation and usage on the storage volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservedSpaceGib|string(int64)|false|none|The space on this storage volume reserved for snapshots, shown in GiB.|
|reservedSpacePercent|integer(int32)|false|none|Percent of the total Volume size reserved for snapshot copies. Enabling snapshots requires reserving 20% or more of the storage volume space for snapshots. Maximum reserved space for snapshots is 40%. Setting this field will effectively set snapshot_enabled to true.|
|reservedSpaceRemainingGib|string(int64)|false|none|The amount, in GiB, of available space in this storage volume's reserved snapshot space.|
|reservedSpaceUsedPercent|integer(int32)|false|none|The percent of snapshot space on this storage volume actually being used by the snapshot copies. This value might be higher than 100% if the snapshot copies have overflowed into the data portion of the storage volume.|

<h2 id="tocS_StartInstanceRequest">StartInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartinstancerequest"></a>
<a id="schema_StartInstanceRequest"></a>
<a id="tocSstartinstancerequest"></a>
<a id="tocsstartinstancerequest"></a>

```json
{}
```

Message requesting to start a server.

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

<h2 id="tocS_StopInstanceRequest">StopInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopinstancerequest"></a>
<a id="schema_StopInstanceRequest"></a>
<a id="tocSstopinstancerequest"></a>
<a id="tocsstopinstancerequest"></a>

```json
{}
```

Message requesting to stop a server.

<h2 id="tocS_SubmitProvisioningConfigRequest">SubmitProvisioningConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitprovisioningconfigrequest"></a>
<a id="schema_SubmitProvisioningConfigRequest"></a>
<a id="tocSsubmitprovisioningconfigrequest"></a>
<a id="tocssubmitprovisioningconfigrequest"></a>

```json
{
  "email": "string",
  "provisioningConfig": {
    "cloudConsoleUri": "string",
    "customId": "string",
    "email": "string",
    "handoverServiceAccount": "string",
    "instances": [
      {
        "accountNetworksEnabled": true,
        "clientNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "hyperthreading": true,
        "id": "string",
        "instanceType": "string",
        "logicalInterfaces": [
          {
            "interfaceIndex": 0,
            "logicalNetworkInterfaces": [
              {
                "defaultGateway": true,
                "id": "string",
                "ipAddress": "string",
                "network": "string",
                "networkType": "TYPE_UNSPECIFIED"
              }
            ],
            "name": "string"
          }
        ],
        "name": "string",
        "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
        "networkTemplate": "string",
        "osImage": "string",
        "privateNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "userNote": "string"
      }
    ],
    "location": "string",
    "name": "string",
    "networks": [
      {
        "bandwidth": "BANDWIDTH_UNSPECIFIED",
        "cidr": "string",
        "gcpService": "string",
        "id": "string",
        "jumboFramesEnabled": true,
        "name": "string",
        "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string",
        "vlanAttachments": [
          {
            "id": "string",
            "pairingKey": "string"
          }
        ],
        "vlanSameProject": true
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "statusMessage": "string",
    "ticketId": "string",
    "updateTime": "string",
    "volumes": [
      {
        "gcpService": "string",
        "id": "string",
        "lunRanges": [
          {
            "quantity": 0,
            "sizeGb": 0
          }
        ],
        "machineIds": [
          "string"
        ],
        "name": "string",
        "nfsExports": [
          {
            "allowDev": true,
            "allowSuid": true,
            "cidr": "string",
            "machineId": "string",
            "networkId": "string",
            "noRootSquash": true,
            "permissions": "PERMISSIONS_UNSPECIFIED"
          }
        ],
        "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
        "protocol": "PROTOCOL_UNSPECIFIED",
        "sizeGb": 0,
        "snapshotsEnabled": true,
        "storageAggregatePool": "string",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string"
      }
    ],
    "vpcScEnabled": true
  }
}
```

Request for SubmitProvisioningConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Optional. Email provided to send a confirmation with provisioning config to.|
|provisioningConfig|[ProvisioningConfig](#schemaprovisioningconfig)|false|none|Required. The ProvisioningConfig to create.|

<h2 id="tocS_SubmitProvisioningConfigResponse">SubmitProvisioningConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitprovisioningconfigresponse"></a>
<a id="schema_SubmitProvisioningConfigResponse"></a>
<a id="tocSsubmitprovisioningconfigresponse"></a>
<a id="tocssubmitprovisioningconfigresponse"></a>

```json
{
  "provisioningConfig": {
    "cloudConsoleUri": "string",
    "customId": "string",
    "email": "string",
    "handoverServiceAccount": "string",
    "instances": [
      {
        "accountNetworksEnabled": true,
        "clientNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "hyperthreading": true,
        "id": "string",
        "instanceType": "string",
        "logicalInterfaces": [
          {
            "interfaceIndex": 0,
            "logicalNetworkInterfaces": [
              {
                "defaultGateway": true,
                "id": "string",
                "ipAddress": "string",
                "network": "string",
                "networkType": "TYPE_UNSPECIFIED"
              }
            ],
            "name": "string"
          }
        ],
        "name": "string",
        "networkConfig": "NETWORKCONFIG_UNSPECIFIED",
        "networkTemplate": "string",
        "osImage": "string",
        "privateNetwork": {
          "address": "string",
          "existingNetworkId": "string",
          "networkId": "string"
        },
        "userNote": "string"
      }
    ],
    "location": "string",
    "name": "string",
    "networks": [
      {
        "bandwidth": "BANDWIDTH_UNSPECIFIED",
        "cidr": "string",
        "gcpService": "string",
        "id": "string",
        "jumboFramesEnabled": true,
        "name": "string",
        "serviceCidr": "SERVICE_CIDR_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string",
        "vlanAttachments": [
          {
            "id": "string",
            "pairingKey": "string"
          }
        ],
        "vlanSameProject": true
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "statusMessage": "string",
    "ticketId": "string",
    "updateTime": "string",
    "volumes": [
      {
        "gcpService": "string",
        "id": "string",
        "lunRanges": [
          {
            "quantity": 0,
            "sizeGb": 0
          }
        ],
        "machineIds": [
          "string"
        ],
        "name": "string",
        "nfsExports": [
          {
            "allowDev": true,
            "allowSuid": true,
            "cidr": "string",
            "machineId": "string",
            "networkId": "string",
            "noRootSquash": true,
            "permissions": "PERMISSIONS_UNSPECIFIED"
          }
        ],
        "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
        "protocol": "PROTOCOL_UNSPECIFIED",
        "sizeGb": 0,
        "snapshotsEnabled": true,
        "storageAggregatePool": "string",
        "type": "TYPE_UNSPECIFIED",
        "userNote": "string"
      }
    ],
    "vpcScEnabled": true
  }
}
```

Response for SubmitProvisioningConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provisioningConfig|[ProvisioningConfig](#schemaprovisioningconfig)|false|none|The submitted provisioning config.|

<h2 id="tocS_VRF">VRF</h2>
<!-- backwards compatibility -->
<a id="schemavrf"></a>
<a id="schema_VRF"></a>
<a id="tocSvrf"></a>
<a id="tocsvrf"></a>

```json
{
  "name": "string",
  "qosPolicy": {
    "bandwidthGbps": 0
  },
  "state": "STATE_UNSPECIFIED",
  "vlanAttachments": [
    {
      "id": "string",
      "pairingKey": "string",
      "peerIp": "string",
      "peerVlanId": "string",
      "qosPolicy": {
        "bandwidthGbps": 0
      },
      "routerIp": "string"
    }
  ]
}
```

A network VRF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the VRF.|
|qosPolicy|[QosPolicy](#schemaqospolicy)|false|none|The QOS policy applied to this VRF. The value is only meaningful when all the vlan attachments have the same QoS. This field should not be used for new integrations, use vlan attachment level qos instead. The field is left for backward-compatibility.|
|state|string|false|none|The possible state of VRF.|
|vlanAttachments|[[VlanAttachment](#schemavlanattachment)]|false|none|The list of VLAN attachments for the VRF.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PROVISIONING|
|state|PROVISIONED|

<h2 id="tocS_VlanAttachment">VlanAttachment</h2>
<!-- backwards compatibility -->
<a id="schemavlanattachment"></a>
<a id="schema_VlanAttachment"></a>
<a id="tocSvlanattachment"></a>
<a id="tocsvlanattachment"></a>

```json
{
  "id": "string",
  "pairingKey": "string",
  "peerIp": "string",
  "peerVlanId": "string",
  "qosPolicy": {
    "bandwidthGbps": 0
  },
  "routerIp": "string"
}
```

VLAN attachment details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Immutable. The identifier of the attachment within vrf.|
|pairingKey|string|false|none|Input only. Pairing key.|
|peerIp|string|false|none|The peer IP of the attachment.|
|peerVlanId|string(int64)|false|none|The peer vlan ID of the attachment.|
|qosPolicy|[QosPolicy](#schemaqospolicy)|false|none|The QOS policy applied to this VLAN attachment. This value should be preferred to using qos at vrf level.|
|routerIp|string|false|none|The router IP of the attachment.|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "attached": true,
  "autoGrownSizeGib": "string",
  "bootVolume": true,
  "currentSizeGib": "string",
  "emergencySizeGib": "string",
  "expireTime": "string",
  "id": "string",
  "instances": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maxSizeGib": "string",
  "name": "string",
  "notes": "string",
  "originallyRequestedSizeGib": "string",
  "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
  "pod": "string",
  "protocol": "PROTOCOL_UNSPECIFIED",
  "remainingSpaceGib": "string",
  "requestedSizeGib": "string",
  "snapshotAutoDeleteBehavior": "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
  "snapshotEnabled": true,
  "snapshotReservationDetail": {
    "reservedSpaceGib": "string",
    "reservedSpacePercent": 0,
    "reservedSpaceRemainingGib": "string",
    "reservedSpaceUsedPercent": 0
  },
  "snapshotSchedulePolicy": "string",
  "state": "STATE_UNSPECIFIED",
  "storageAggregatePool": "string",
  "storageType": "STORAGE_TYPE_UNSPECIFIED",
  "workloadProfile": "WORKLOAD_PROFILE_UNSPECIFIED"
}
```

A storage volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attached|boolean|false|read-only|Output only. Is the Volume attached at at least one instance. This field is a lightweight counterpart of `instances` field. It is filled in List responses as well.|
|autoGrownSizeGib|string(int64)|false|none|The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0.|
|bootVolume|boolean|false|read-only|Output only. Whether this volume is a boot volume. A boot volume is one which contains a boot LUN.|
|currentSizeGib|string(int64)|false|none|The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink.|
|emergencySizeGib|string(int64)|false|none|Additional emergency size that was requested for this Volume, in GiB. current_size_gib includes this value.|
|expireTime|string(google-datetime)|false|read-only|Output only. Time after which volume will be fully deleted. It is filled only for volumes in COOLOFF state.|
|id|string|false|none|An identifier for the `Volume`, generated by the backend.|
|instances|[string]|false|read-only|Output only. Instances this Volume is attached to. This field is set only in Get requests.|
|labels|object|false|none|Labels as key value pairs.|
|maxSizeGib|string(int64)|false|none|Maximum size volume can be expanded to in case of evergency, in GiB.|
|name|string|false|read-only|Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}`|
|notes|string|false|none|Input only. User-specified notes for new Volume. Used to provision Volumes that require manual intervention.|
|originallyRequestedSizeGib|string(int64)|false|none|Originally requested size, in GiB.|
|performanceTier|string|false|none|Immutable. Performance tier of the Volume. Default is SHARED.|
|pod|string|false|none|Immutable. Pod name.|
|protocol|string|false|read-only|Output only. Storage protocol for the Volume.|
|remainingSpaceGib|string(int64)|false|none|The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots.|
|requestedSizeGib|string(int64)|false|none|The requested size of this storage volume, in GiB.|
|snapshotAutoDeleteBehavior|string|false|none|The behavior to use when snapshot reserved space is full.|
|snapshotEnabled|boolean|false|none|Whether snapshots are enabled.|
|snapshotReservationDetail|[SnapshotReservationDetail](#schemasnapshotreservationdetail)|false|none|Details about snapshot space reservation and usage on the storage volume.|
|snapshotSchedulePolicy|string|false|none|The name of the snapshot schedule policy in use for this volume, if any.|
|state|string|false|none|The state of this storage volume.|
|storageAggregatePool|string|false|none|Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.|
|storageType|string|false|none|The storage type for this volume.|
|workloadProfile|string|false|none|The workload profile for the volume.|

#### Enumerated Values

|Property|Value|
|---|---|
|performanceTier|VOLUME_PERFORMANCE_TIER_UNSPECIFIED|
|performanceTier|VOLUME_PERFORMANCE_TIER_SHARED|
|performanceTier|VOLUME_PERFORMANCE_TIER_ASSIGNED|
|performanceTier|VOLUME_PERFORMANCE_TIER_HT|
|protocol|PROTOCOL_UNSPECIFIED|
|protocol|FIBRE_CHANNEL|
|protocol|NFS|
|snapshotAutoDeleteBehavior|SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED|
|snapshotAutoDeleteBehavior|DISABLED|
|snapshotAutoDeleteBehavior|OLDEST_FIRST|
|snapshotAutoDeleteBehavior|NEWEST_FIRST|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|DELETING|
|state|UPDATING|
|state|COOL_OFF|
|storageType|STORAGE_TYPE_UNSPECIFIED|
|storageType|SSD|
|storageType|HDD|
|workloadProfile|WORKLOAD_PROFILE_UNSPECIFIED|
|workloadProfile|GENERIC|
|workloadProfile|HANA|

<h2 id="tocS_VolumeConfig">VolumeConfig</h2>
<!-- backwards compatibility -->
<a id="schemavolumeconfig"></a>
<a id="schema_VolumeConfig"></a>
<a id="tocSvolumeconfig"></a>
<a id="tocsvolumeconfig"></a>

```json
{
  "gcpService": "string",
  "id": "string",
  "lunRanges": [
    {
      "quantity": 0,
      "sizeGb": 0
    }
  ],
  "machineIds": [
    "string"
  ],
  "name": "string",
  "nfsExports": [
    {
      "allowDev": true,
      "allowSuid": true,
      "cidr": "string",
      "machineId": "string",
      "networkId": "string",
      "noRootSquash": true,
      "permissions": "PERMISSIONS_UNSPECIFIED"
    }
  ],
  "performanceTier": "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
  "protocol": "PROTOCOL_UNSPECIFIED",
  "sizeGb": 0,
  "snapshotsEnabled": true,
  "storageAggregatePool": "string",
  "type": "TYPE_UNSPECIFIED",
  "userNote": "string"
}
```

Configuration parameters for a new volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcpService|string|false|none|The GCP service of the storage volume. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning.|
|id|string|false|none|A transient unique identifier to identify a volume within an ProvisioningConfig request.|
|lunRanges|[[LunRange](#schemalunrange)]|false|none|LUN ranges to be configured. Set only when protocol is PROTOCOL_FC.|
|machineIds|[string]|false|none|Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC.|
|name|string|false|read-only|Output only. The name of the volume config.|
|nfsExports|[[NfsExport](#schemanfsexport)]|false|none|NFS exports. Set only when protocol is PROTOCOL_NFS.|
|performanceTier|string|false|none|Performance tier of the Volume. Default is SHARED.|
|protocol|string|false|none|Volume protocol.|
|sizeGb|integer(int32)|false|none|The requested size of this volume, in GB.|
|snapshotsEnabled|boolean|false|none|Whether snapshots should be enabled.|
|storageAggregatePool|string|false|none|Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.|
|type|string|false|none|The type of this Volume.|
|userNote|string|false|none|User note field, it can be used by customers to add additional information for the BMS Ops team .|

#### Enumerated Values

|Property|Value|
|---|---|
|performanceTier|VOLUME_PERFORMANCE_TIER_UNSPECIFIED|
|performanceTier|VOLUME_PERFORMANCE_TIER_SHARED|
|performanceTier|VOLUME_PERFORMANCE_TIER_ASSIGNED|
|performanceTier|VOLUME_PERFORMANCE_TIER_HT|
|protocol|PROTOCOL_UNSPECIFIED|
|protocol|PROTOCOL_FC|
|protocol|PROTOCOL_NFS|
|type|TYPE_UNSPECIFIED|
|type|FLASH|
|type|DISK|

<h2 id="tocS_VolumeSnapshot">VolumeSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemavolumesnapshot"></a>
<a id="schema_VolumeSnapshot"></a>
<a id="tocSvolumesnapshot"></a>
<a id="tocsvolumesnapshot"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "id": "string",
  "name": "string",
  "storageVolume": "string",
  "type": "SNAPSHOT_TYPE_UNSPECIFIED"
}
```

A snapshot of a volume. Only boot volumes can have snapshots.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The creation time of the snapshot.|
|description|string|false|none|The description of the snapshot.|
|id|string|false|read-only|Output only. An identifier for the snapshot, generated by the backend.|
|name|string|false|none|The name of the snapshot.|
|storageVolume|string|false|read-only|Output only. The name of the volume which this snapshot belongs to.|
|type|string|false|read-only|Output only. The type of the snapshot which indicates whether it was scheduled or manual/ad-hoc.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SNAPSHOT_TYPE_UNSPECIFIED|
|type|AD_HOC|
|type|SCHEDULED|
