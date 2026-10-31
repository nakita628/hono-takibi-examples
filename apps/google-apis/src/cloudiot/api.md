<h1 id="cloud-iot-api">Cloud IoT API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Registers and manages IoT (Internet of Things) devices that connect to the Google Cloud Platform.

Base URLs:

* <a href="https://cloudiot.googleapis.com/">https://cloudiot.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/iot">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloudiot|Register and manage devices in the Google Cloud IoT service|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloudiot|Register and manage devices in the Google Cloud IoT service|

<h1 id="cloud-iot-api-projects">projects</h1>

## cloudiot.projects.locations.registries.devices.get

<a id="opIdcloudiot.projects.locations.registries.devices.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets details about a device.

<h3 id="cloudiotprojectslocationsregistriesdevicesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.|
|fieldMask|query|string|false|The fields of the `Device` resource to be returned in the response. If the field mask is unset or empty, all fields are returned. Fields have to be provided in snake_case format, for example: `last_heartbeat_time`.|
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
  "blocked": true,
  "config": {
    "binaryData": "string",
    "cloudUpdateTime": "string",
    "deviceAckTime": "string",
    "version": "string"
  },
  "credentials": [
    {
      "expirationTime": "string",
      "publicKey": {
        "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
        "key": "string"
      }
    }
  ],
  "gatewayConfig": {
    "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
    "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
    "lastAccessedGatewayId": "string",
    "lastAccessedGatewayTime": "string"
  },
  "id": "string",
  "lastConfigAckTime": "string",
  "lastConfigSendTime": "string",
  "lastErrorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "lastErrorTime": "string",
  "lastEventTime": "string",
  "lastHeartbeatTime": "string",
  "lastStateTime": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "numId": "string",
  "state": {
    "binaryData": "string",
    "updateTime": "string"
  }
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Device](#schemadevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.devices.delete

<a id="opIdcloudiot.projects.locations.registries.devices.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a device.

<h3 id="cloudiotprojectslocationsregistriesdevicesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.|
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

<h3 id="cloudiotprojectslocationsregistriesdevicesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.devices.patch

<a id="opIdcloudiot.projects.locations.registries.devices.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "blocked": true,
    "config": {
      "binaryData": "string",
      "cloudUpdateTime": "string",
      "deviceAckTime": "string",
      "version": "string"
    },
    "credentials": [
      {
        "expirationTime": "string",
        "publicKey": {
          "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
          "key": "string"
        }
      }
    ],
    "gatewayConfig": {
      "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
      "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
      "lastAccessedGatewayId": "string",
      "lastAccessedGatewayTime": "string"
    },
    "id": "string",
    "lastConfigAckTime": "string",
    "lastConfigSendTime": "string",
    "lastErrorStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "lastErrorTime": "string",
    "lastEventTime": "string",
    "lastHeartbeatTime": "string",
    "lastStateTime": "string",
    "logLevel": "LOG_LEVEL_UNSPECIFIED",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "numId": "string",
    "state": {
      "binaryData": "string",
      "updateTime": "string"
    }
  }'
```

`PATCH /v1/{name}`

Updates a device.

> Body parameter

```json
{
  "blocked": true,
  "config": {
    "binaryData": "string",
    "cloudUpdateTime": "string",
    "deviceAckTime": "string",
    "version": "string"
  },
  "credentials": [
    {
      "expirationTime": "string",
      "publicKey": {
        "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
        "key": "string"
      }
    }
  ],
  "gatewayConfig": {
    "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
    "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
    "lastAccessedGatewayId": "string",
    "lastAccessedGatewayTime": "string"
  },
  "id": "string",
  "lastConfigAckTime": "string",
  "lastConfigSendTime": "string",
  "lastErrorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "lastErrorTime": "string",
  "lastEventTime": "string",
  "lastHeartbeatTime": "string",
  "lastStateTime": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "numId": "string",
  "state": {
    "binaryData": "string",
    "updateTime": "string"
  }
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.|
|updateMask|query|string|false|Required. Only updates the `device` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `credentials`, `blocked`, and `metadata`|
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
|body|body|[Device](#schemadevice)|false|none|
|» blocked|body|boolean|false|If a device is blocked, connections or requests from this device will fail. Can be used to temporarily prevent the device from connecting if, for example, the sensor is generating bad data and needs maintenance.|
|» config|body|[DeviceConfig](#schemadeviceconfig)|false|The most recent device configuration, which is eventually sent from Cloud IoT Core to the device. If not present on creation, the configuration will be initialized with an empty payload and version value of `1`. To update this field after creation, use the `DeviceManager.ModifyCloudToDeviceConfig` method.|
|» credentials|body|[[DeviceCredential](#schemadevicecredential)]|false|The credentials used to authenticate this device. To allow credential rotation without interruption, multiple device credentials can be bound to this device. No more than 3 credentials can be bound to a single device at a time. When new credentials are added to a device, they are verified against the registry credentials. For details, see the description of the `DeviceRegistry.credentials` field.|
|» gatewayConfig|body|[GatewayConfig](#schemagatewayconfig)|false|Gateway-related configuration and state.|
|» id|body|string|false|The user-defined device identifier. The device ID must be unique within a device registry.|
|» lastConfigAckTime|body|string(google-datetime)|false|[Output only] The last time a cloud-to-device config version acknowledgment was received from the device. This field is only for configurations sent through MQTT.|
|» lastConfigSendTime|body|string(google-datetime)|false|[Output only] The last time a cloud-to-device config version was sent to the device.|
|» lastErrorStatus|body|[Status](#schemastatus)|false|[Output only] The error message of the most recent error, such as a failure to publish to Cloud Pub/Sub. 'last_error_time' is the timestamp of this field. If no errors have occurred, this field has an empty message and the status code 0 == OK. Otherwise, this field is expected to have a status code other than OK.|
|» lastErrorTime|body|string(google-datetime)|false|[Output only] The time the most recent error occurred, such as a failure to publish to Cloud Pub/Sub. This field is the timestamp of 'last_error_status'.|
|» lastEventTime|body|string(google-datetime)|false|[Output only] The last time a telemetry event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|» lastHeartbeatTime|body|string(google-datetime)|false|[Output only] The last time an MQTT `PINGREQ` was received. This field applies only to devices connecting through MQTT. MQTT clients usually only send `PINGREQ` messages if the connection is idle, and no other messages have been sent. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|» lastStateTime|body|string(google-datetime)|false|[Output only] The last time a state event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|» logLevel|body|string|false|**Beta Feature** The logging verbosity for device activity. If unspecified, DeviceRegistry.log_level will be used.|
|» metadata|body|object|false|The metadata key-value pairs assigned to the device. This metadata is not interpreted or indexed by Cloud IoT Core. It can be used to add contextual information for the device. Keys must conform to the regular expression a-zA-Z+ and be less than 128 bytes in length. Values are free-form strings. Each value must be less than or equal to 32 KB in size. The total size of all keys and values must be less than 256 KB, and the maximum number of key-value pairs is 500.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.|
|» numId|body|string(uint64)|false|[Output only] A server-defined unique numeric ID for the device. This is a more compact way to identify devices, and it is globally unique.|
|» state|body|[DeviceState](#schemadevicestate)|false|[Output only] The state most recently received from the device. If no state has been reported, this field is not present.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» logLevel|LOG_LEVEL_UNSPECIFIED|
|» logLevel|NONE|
|» logLevel|ERROR|
|» logLevel|INFO|
|» logLevel|DEBUG|

> Example responses

> 200 Response

```json
{
  "blocked": true,
  "config": {
    "binaryData": "string",
    "cloudUpdateTime": "string",
    "deviceAckTime": "string",
    "version": "string"
  },
  "credentials": [
    {
      "expirationTime": "string",
      "publicKey": {
        "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
        "key": "string"
      }
    }
  ],
  "gatewayConfig": {
    "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
    "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
    "lastAccessedGatewayId": "string",
    "lastAccessedGatewayTime": "string"
  },
  "id": "string",
  "lastConfigAckTime": "string",
  "lastConfigSendTime": "string",
  "lastErrorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "lastErrorTime": "string",
  "lastEventTime": "string",
  "lastHeartbeatTime": "string",
  "lastStateTime": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "numId": "string",
  "state": {
    "binaryData": "string",
    "updateTime": "string"
  }
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Device](#schemadevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.devices.configVersions.list

<a id="opIdcloudiot.projects.locations.registries.devices.configVersions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/configVersions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/configVersions`

Lists the last few versions of the device configuration in descending order (i.e.: newest first).

<h3 id="cloudiotprojectslocationsregistriesdevicesconfigversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.|
|numVersions|query|integer|false|The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.|
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
  "deviceConfigs": [
    {
      "binaryData": "string",
      "cloudUpdateTime": "string",
      "deviceAckTime": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicesconfigversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDeviceConfigVersionsResponse](#schemalistdeviceconfigversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.devices.states.list

<a id="opIdcloudiot.projects.locations.registries.devices.states.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/states \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/states`

Lists the last few versions of the device state in descending order (i.e.: newest first).

<h3 id="cloudiotprojectslocationsregistriesdevicesstateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.|
|numStates|query|integer|false|The number of states to list. States are listed in descending order of update time. The maximum number of states retained is 10. If this value is zero, it will return all the states available.|
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
  "deviceStates": [
    {
      "binaryData": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicesstateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDeviceStatesResponse](#schemalistdevicestatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig

<a id="opIdcloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:modifyCloudToDeviceConfig \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "binaryData": "string",
    "versionToUpdate": "string"
  }'
```

`POST /v1/{name}:modifyCloudToDeviceConfig`

Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.

> Body parameter

```json
{
  "binaryData": "string",
  "versionToUpdate": "string"
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicesmodifycloudtodeviceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.|
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
|body|body|[ModifyCloudToDeviceConfigRequest](#schemamodifycloudtodeviceconfigrequest)|false|none|
|» binaryData|body|string(byte)|false|Required. The configuration data for the device.|
|» versionToUpdate|body|string(int64)|false|The version number to update. If this value is zero, it will not check the version number of the server and will always update the current version; otherwise, this update will fail if the version number found on the server does not match this version number. This is used to support multiple simultaneous updates without losing data.|

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
  "binaryData": "string",
  "cloudUpdateTime": "string",
  "deviceAckTime": "string",
  "version": "string"
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicesmodifycloudtodeviceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeviceConfig](#schemadeviceconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.devices.sendCommandToDevice

<a id="opIdcloudiot.projects.locations.registries.devices.sendCommandToDevice"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:sendCommandToDevice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "binaryData": "string",
    "subfolder": "string"
  }'
```

`POST /v1/{name}:sendCommandToDevice`

Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.

> Body parameter

```json
{
  "binaryData": "string",
  "subfolder": "string"
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicessendcommandtodevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.|
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
|body|body|[SendCommandToDeviceRequest](#schemasendcommandtodevicerequest)|false|none|
|» binaryData|body|string(byte)|false|Required. The command data to send to the device.|
|» subfolder|body|string|false|Optional subfolder for the command. If empty, the command will be delivered to the /devices/{device-id}/commands topic, otherwise it will be delivered to the /devices/{device-id}/commands/{subfolder} topic. Multi-level subfolders are allowed. This field must not have more than 256 characters, and must not contain any MQTT wildcards ("+" or "#") or null characters.|

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

<h3 id="cloudiotprojectslocationsregistriesdevicessendcommandtodevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendCommandToDeviceResponse](#schemasendcommandtodeviceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.groups.devices.list

<a id="opIdcloudiot.projects.locations.registries.groups.devices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/devices`

List devices in a device registry.

<h3 id="cloudiotprojectslocationsregistriesgroupsdeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The device registry path. Required. For example, `projects/my-project/locations/us-central1/registries/my-registry`.|
|deviceIds|query|[string]|false|A list of device string IDs. For example, `['device0', 'device12']`. If empty, this field is ignored. Maximum IDs: 10,000|
|deviceNumIds|query|[string]|false|A list of device numeric IDs. If empty, this field is ignored. Maximum IDs: 10,000.|
|fieldMask|query|string|false|The fields of the `Device` resource to be returned in the response. The fields `id` and `num_id` are always returned, along with any other fields specified in snake_case format, for example: `last_heartbeat_time`.|
|gatewayListOptions.associationsDeviceId|query|string|false|If set, returns only the gateways with which the specified device is associated. The device ID can be numeric (`num_id`) or the user-defined string (`id`). For example, if `456` is specified, returns only the gateways to which the device with `num_id` 456 is bound.|
|gatewayListOptions.associationsGatewayId|query|string|false|If set, only devices associated with the specified gateway are returned. The gateway ID can be numeric (`num_id`) or the user-defined string (`id`). For example, if `123` is specified, only devices bound to the gateway with `num_id` 123 are returned.|
|gatewayListOptions.gatewayType|query|string|false|If `GATEWAY` is specified, only gateways are returned. If `NON_GATEWAY` is specified, only non-gateway devices are returned. If `GATEWAY_TYPE_UNSPECIFIED` is specified, all devices are returned.|
|pageSize|query|integer|false|The maximum number of devices to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.|
|pageToken|query|string|false|The value returned by the last `ListDevicesResponse`; indicates that this is a continuation of a prior `ListDevices` call and the system should return the next page of data.|
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
|gatewayListOptions.gatewayType|GATEWAY_TYPE_UNSPECIFIED|
|gatewayListOptions.gatewayType|GATEWAY|
|gatewayListOptions.gatewayType|NON_GATEWAY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "devices": [
    {
      "blocked": true,
      "config": {
        "binaryData": "string",
        "cloudUpdateTime": "string",
        "deviceAckTime": "string",
        "version": "string"
      },
      "credentials": [
        {
          "expirationTime": "string",
          "publicKey": {
            "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
            "key": "string"
          }
        }
      ],
      "gatewayConfig": {
        "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
        "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
        "lastAccessedGatewayId": "string",
        "lastAccessedGatewayTime": "string"
      },
      "id": "string",
      "lastConfigAckTime": "string",
      "lastConfigSendTime": "string",
      "lastErrorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "lastErrorTime": "string",
      "lastEventTime": "string",
      "lastHeartbeatTime": "string",
      "lastStateTime": "string",
      "logLevel": "LOG_LEVEL_UNSPECIFIED",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "numId": "string",
      "state": {
        "binaryData": "string",
        "updateTime": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudiotprojectslocationsregistriesgroupsdeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDevicesResponse](#schemalistdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.devices.create

<a id="opIdcloudiot.projects.locations.registries.devices.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/devices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "blocked": true,
    "config": {
      "binaryData": "string",
      "cloudUpdateTime": "string",
      "deviceAckTime": "string",
      "version": "string"
    },
    "credentials": [
      {
        "expirationTime": "string",
        "publicKey": {
          "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
          "key": "string"
        }
      }
    ],
    "gatewayConfig": {
      "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
      "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
      "lastAccessedGatewayId": "string",
      "lastAccessedGatewayTime": "string"
    },
    "id": "string",
    "lastConfigAckTime": "string",
    "lastConfigSendTime": "string",
    "lastErrorStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "lastErrorTime": "string",
    "lastEventTime": "string",
    "lastHeartbeatTime": "string",
    "lastStateTime": "string",
    "logLevel": "LOG_LEVEL_UNSPECIFIED",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "numId": "string",
    "state": {
      "binaryData": "string",
      "updateTime": "string"
    }
  }'
```

`POST /v1/{parent}/devices`

Creates a device in a device registry.

> Body parameter

```json
{
  "blocked": true,
  "config": {
    "binaryData": "string",
    "cloudUpdateTime": "string",
    "deviceAckTime": "string",
    "version": "string"
  },
  "credentials": [
    {
      "expirationTime": "string",
      "publicKey": {
        "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
        "key": "string"
      }
    }
  ],
  "gatewayConfig": {
    "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
    "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
    "lastAccessedGatewayId": "string",
    "lastAccessedGatewayTime": "string"
  },
  "id": "string",
  "lastConfigAckTime": "string",
  "lastConfigSendTime": "string",
  "lastErrorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "lastErrorTime": "string",
  "lastEventTime": "string",
  "lastHeartbeatTime": "string",
  "lastStateTime": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "numId": "string",
  "state": {
    "binaryData": "string",
    "updateTime": "string"
  }
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the device registry where this device should be created. For example, `projects/example-project/locations/us-central1/registries/my-registry`.|
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
|body|body|[Device](#schemadevice)|false|none|
|» blocked|body|boolean|false|If a device is blocked, connections or requests from this device will fail. Can be used to temporarily prevent the device from connecting if, for example, the sensor is generating bad data and needs maintenance.|
|» config|body|[DeviceConfig](#schemadeviceconfig)|false|The most recent device configuration, which is eventually sent from Cloud IoT Core to the device. If not present on creation, the configuration will be initialized with an empty payload and version value of `1`. To update this field after creation, use the `DeviceManager.ModifyCloudToDeviceConfig` method.|
|» credentials|body|[[DeviceCredential](#schemadevicecredential)]|false|The credentials used to authenticate this device. To allow credential rotation without interruption, multiple device credentials can be bound to this device. No more than 3 credentials can be bound to a single device at a time. When new credentials are added to a device, they are verified against the registry credentials. For details, see the description of the `DeviceRegistry.credentials` field.|
|» gatewayConfig|body|[GatewayConfig](#schemagatewayconfig)|false|Gateway-related configuration and state.|
|» id|body|string|false|The user-defined device identifier. The device ID must be unique within a device registry.|
|» lastConfigAckTime|body|string(google-datetime)|false|[Output only] The last time a cloud-to-device config version acknowledgment was received from the device. This field is only for configurations sent through MQTT.|
|» lastConfigSendTime|body|string(google-datetime)|false|[Output only] The last time a cloud-to-device config version was sent to the device.|
|» lastErrorStatus|body|[Status](#schemastatus)|false|[Output only] The error message of the most recent error, such as a failure to publish to Cloud Pub/Sub. 'last_error_time' is the timestamp of this field. If no errors have occurred, this field has an empty message and the status code 0 == OK. Otherwise, this field is expected to have a status code other than OK.|
|» lastErrorTime|body|string(google-datetime)|false|[Output only] The time the most recent error occurred, such as a failure to publish to Cloud Pub/Sub. This field is the timestamp of 'last_error_status'.|
|» lastEventTime|body|string(google-datetime)|false|[Output only] The last time a telemetry event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|» lastHeartbeatTime|body|string(google-datetime)|false|[Output only] The last time an MQTT `PINGREQ` was received. This field applies only to devices connecting through MQTT. MQTT clients usually only send `PINGREQ` messages if the connection is idle, and no other messages have been sent. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|» lastStateTime|body|string(google-datetime)|false|[Output only] The last time a state event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|» logLevel|body|string|false|**Beta Feature** The logging verbosity for device activity. If unspecified, DeviceRegistry.log_level will be used.|
|» metadata|body|object|false|The metadata key-value pairs assigned to the device. This metadata is not interpreted or indexed by Cloud IoT Core. It can be used to add contextual information for the device. Keys must conform to the regular expression a-zA-Z+ and be less than 128 bytes in length. Values are free-form strings. Each value must be less than or equal to 32 KB in size. The total size of all keys and values must be less than 256 KB, and the maximum number of key-value pairs is 500.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.|
|» numId|body|string(uint64)|false|[Output only] A server-defined unique numeric ID for the device. This is a more compact way to identify devices, and it is globally unique.|
|» state|body|[DeviceState](#schemadevicestate)|false|[Output only] The state most recently received from the device. If no state has been reported, this field is not present.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» logLevel|LOG_LEVEL_UNSPECIFIED|
|» logLevel|NONE|
|» logLevel|ERROR|
|» logLevel|INFO|
|» logLevel|DEBUG|

> Example responses

> 200 Response

```json
{
  "blocked": true,
  "config": {
    "binaryData": "string",
    "cloudUpdateTime": "string",
    "deviceAckTime": "string",
    "version": "string"
  },
  "credentials": [
    {
      "expirationTime": "string",
      "publicKey": {
        "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
        "key": "string"
      }
    }
  ],
  "gatewayConfig": {
    "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
    "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
    "lastAccessedGatewayId": "string",
    "lastAccessedGatewayTime": "string"
  },
  "id": "string",
  "lastConfigAckTime": "string",
  "lastConfigSendTime": "string",
  "lastErrorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "lastErrorTime": "string",
  "lastEventTime": "string",
  "lastHeartbeatTime": "string",
  "lastStateTime": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "numId": "string",
  "state": {
    "binaryData": "string",
    "updateTime": "string"
  }
}
```

<h3 id="cloudiotprojectslocationsregistriesdevicescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Device](#schemadevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.list

<a id="opIdcloudiot.projects.locations.registries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/registries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/registries`

Lists device registries.

<h3 id="cloudiotprojectslocationsregistrieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and cloud region path. For example, `projects/example-project/locations/us-central1`.|
|pageSize|query|integer|false|The maximum number of registries to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.|
|pageToken|query|string|false|The value returned by the last `ListDeviceRegistriesResponse`; indicates that this is a continuation of a prior `ListDeviceRegistries` call and the system should return the next page of data.|
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
  "deviceRegistries": [
    {
      "credentials": [
        {
          "publicKeyCertificate": {
            "certificate": "string",
            "format": "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
            "x509Details": {
              "expiryTime": "string",
              "issuer": "string",
              "publicKeyType": "string",
              "signatureAlgorithm": "string",
              "startTime": "string",
              "subject": "string"
            }
          }
        }
      ],
      "eventNotificationConfigs": [
        {
          "pubsubTopicName": "string",
          "subfolderMatches": "string"
        }
      ],
      "httpConfig": {
        "httpEnabledState": "HTTP_STATE_UNSPECIFIED"
      },
      "id": "string",
      "logLevel": "LOG_LEVEL_UNSPECIFIED",
      "mqttConfig": {
        "mqttEnabledState": "MQTT_STATE_UNSPECIFIED"
      },
      "name": "string",
      "stateNotificationConfig": {
        "pubsubTopicName": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudiotprojectslocationsregistrieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDeviceRegistriesResponse](#schemalistdeviceregistriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.create

<a id="opIdcloudiot.projects.locations.registries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/registries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "credentials": [
      {
        "publicKeyCertificate": {
          "certificate": "string",
          "format": "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
          "x509Details": {
            "expiryTime": "string",
            "issuer": "string",
            "publicKeyType": "string",
            "signatureAlgorithm": "string",
            "startTime": "string",
            "subject": "string"
          }
        }
      }
    ],
    "eventNotificationConfigs": [
      {
        "pubsubTopicName": "string",
        "subfolderMatches": "string"
      }
    ],
    "httpConfig": {
      "httpEnabledState": "HTTP_STATE_UNSPECIFIED"
    },
    "id": "string",
    "logLevel": "LOG_LEVEL_UNSPECIFIED",
    "mqttConfig": {
      "mqttEnabledState": "MQTT_STATE_UNSPECIFIED"
    },
    "name": "string",
    "stateNotificationConfig": {
      "pubsubTopicName": "string"
    }
  }'
```

`POST /v1/{parent}/registries`

Creates a device registry that contains devices.

> Body parameter

```json
{
  "credentials": [
    {
      "publicKeyCertificate": {
        "certificate": "string",
        "format": "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
        "x509Details": {
          "expiryTime": "string",
          "issuer": "string",
          "publicKeyType": "string",
          "signatureAlgorithm": "string",
          "startTime": "string",
          "subject": "string"
        }
      }
    }
  ],
  "eventNotificationConfigs": [
    {
      "pubsubTopicName": "string",
      "subfolderMatches": "string"
    }
  ],
  "httpConfig": {
    "httpEnabledState": "HTTP_STATE_UNSPECIFIED"
  },
  "id": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "mqttConfig": {
    "mqttEnabledState": "MQTT_STATE_UNSPECIFIED"
  },
  "name": "string",
  "stateNotificationConfig": {
    "pubsubTopicName": "string"
  }
}
```

<h3 id="cloudiotprojectslocationsregistriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and cloud region where this device registry must be created. For example, `projects/example-project/locations/us-central1`.|
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
|body|body|[DeviceRegistry](#schemadeviceregistry)|false|none|
|» credentials|body|[[RegistryCredential](#schemaregistrycredential)]|false|The credentials used to verify the device credentials. No more than 10 credentials can be bound to a single registry at a time. The verification process occurs at the time of device creation or update. If this field is empty, no verification is performed. Otherwise, the credentials of a newly created device or added credentials of an updated device should be signed with one of these registry credentials. Note, however, that existing devices will never be affected by modifications to this list of credentials: after a device has been successfully created in a registry, it should be able to connect even if its registry credentials are revoked, deleted, or modified.|
|» eventNotificationConfigs|body|[[EventNotificationConfig](#schemaeventnotificationconfig)]|false|The configuration for notification of telemetry events received from the device. All telemetry events that were successfully published by the device and acknowledged by Cloud IoT Core are guaranteed to be delivered to Cloud Pub/Sub. If multiple configurations match a message, only the first matching configuration is used. If you try to publish a device telemetry event using MQTT without specifying a Cloud Pub/Sub topic for the device's registry, the connection closes automatically. If you try to do so using an HTTP connection, an error is returned. Up to 10 configurations may be provided.|
|» httpConfig|body|[HttpConfig](#schemahttpconfig)|false|The DeviceService (HTTP) configuration for this device registry.|
|» id|body|string|false|The identifier of this device registry. For example, `myRegistry`.|
|» logLevel|body|string|false|**Beta Feature** The default logging verbosity for activity from devices in this registry. The verbosity level can be overridden by Device.log_level.|
|» mqttConfig|body|[MqttConfig](#schemamqttconfig)|false|The MQTT configuration for this device registry.|
|» name|body|string|false|The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.|
|» stateNotificationConfig|body|[StateNotificationConfig](#schemastatenotificationconfig)|false|The configuration for notification of new states received from the device. State updates are guaranteed to be stored in the state history, but notifications to Cloud Pub/Sub are not guaranteed. For example, if permissions are misconfigured or the specified topic doesn't exist, no notification will be published but the state will still be stored in Cloud IoT Core.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» logLevel|LOG_LEVEL_UNSPECIFIED|
|» logLevel|NONE|
|» logLevel|ERROR|
|» logLevel|INFO|
|» logLevel|DEBUG|

> Example responses

> 200 Response

```json
{
  "credentials": [
    {
      "publicKeyCertificate": {
        "certificate": "string",
        "format": "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
        "x509Details": {
          "expiryTime": "string",
          "issuer": "string",
          "publicKeyType": "string",
          "signatureAlgorithm": "string",
          "startTime": "string",
          "subject": "string"
        }
      }
    }
  ],
  "eventNotificationConfigs": [
    {
      "pubsubTopicName": "string",
      "subfolderMatches": "string"
    }
  ],
  "httpConfig": {
    "httpEnabledState": "HTTP_STATE_UNSPECIFIED"
  },
  "id": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "mqttConfig": {
    "mqttEnabledState": "MQTT_STATE_UNSPECIFIED"
  },
  "name": "string",
  "stateNotificationConfig": {
    "pubsubTopicName": "string"
  }
}
```

<h3 id="cloudiotprojectslocationsregistriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeviceRegistry](#schemadeviceregistry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.bindDeviceToGateway

<a id="opIdcloudiot.projects.locations.registries.bindDeviceToGateway"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:bindDeviceToGateway \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deviceId": "string",
    "gatewayId": "string"
  }'
```

`POST /v1/{parent}:bindDeviceToGateway`

Associates the device with the gateway.

> Body parameter

```json
{
  "deviceId": "string",
  "gatewayId": "string"
}
```

<h3 id="cloudiotprojectslocationsregistriesbinddevicetogateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.|
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
|body|body|[BindDeviceToGatewayRequest](#schemabinddevicetogatewayrequest)|false|none|
|» deviceId|body|string|false|Required. The device to associate with the specified gateway. The value of `device_id` can be either the device numeric ID or the user-defined device identifier.|
|» gatewayId|body|string|false|Required. The value of `gateway_id` can be either the device numeric ID or the user-defined device identifier.|

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

<h3 id="cloudiotprojectslocationsregistriesbinddevicetogateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BindDeviceToGatewayResponse](#schemabinddevicetogatewayresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.unbindDeviceFromGateway

<a id="opIdcloudiot.projects.locations.registries.unbindDeviceFromGateway"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:unbindDeviceFromGateway \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deviceId": "string",
    "gatewayId": "string"
  }'
```

`POST /v1/{parent}:unbindDeviceFromGateway`

Deletes the association between the device and the gateway.

> Body parameter

```json
{
  "deviceId": "string",
  "gatewayId": "string"
}
```

<h3 id="cloudiotprojectslocationsregistriesunbinddevicefromgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.|
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
|body|body|[UnbindDeviceFromGatewayRequest](#schemaunbinddevicefromgatewayrequest)|false|none|
|» deviceId|body|string|false|Required. The device to disassociate from the specified gateway. The value of `device_id` can be either the device numeric ID or the user-defined device identifier.|
|» gatewayId|body|string|false|Required. The value of `gateway_id` can be either the device numeric ID or the user-defined device identifier.|

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

<h3 id="cloudiotprojectslocationsregistriesunbinddevicefromgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UnbindDeviceFromGatewayResponse](#schemaunbinddevicefromgatewayresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.groups.getIamPolicy

<a id="opIdcloudiot.projects.locations.registries.groups.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
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

`POST /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="cloudiotprojectslocationsregistriesgroupsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="cloudiotprojectslocationsregistriesgroupsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.groups.setIamPolicy

<a id="opIdcloudiot.projects.locations.registries.groups.setIamPolicy"></a>

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

Sets the access control policy on the specified resource. Replaces any existing policy.

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

<h3 id="cloudiotprojectslocationsregistriesgroupssetiampolicy-parameters">Parameters</h3>

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

<h3 id="cloudiotprojectslocationsregistriesgroupssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

## cloudiot.projects.locations.registries.groups.testIamPermissions

<a id="opIdcloudiot.projects.locations.registries.groups.testIamPermissions"></a>

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

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="cloudiotprojectslocationsregistriesgroupstestiampermissions-parameters">Parameters</h3>

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

<h3 id="cloudiotprojectslocationsregistriesgroupstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudiot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudiot )
</aside>

# Schemas

<h2 id="tocS_BindDeviceToGatewayRequest">BindDeviceToGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemabinddevicetogatewayrequest"></a>
<a id="schema_BindDeviceToGatewayRequest"></a>
<a id="tocSbinddevicetogatewayrequest"></a>
<a id="tocsbinddevicetogatewayrequest"></a>

```json
{
  "deviceId": "string",
  "gatewayId": "string"
}
```

Request for `BindDeviceToGateway`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|Required. The device to associate with the specified gateway. The value of `device_id` can be either the device numeric ID or the user-defined device identifier.|
|gatewayId|string|false|none|Required. The value of `gateway_id` can be either the device numeric ID or the user-defined device identifier.|

<h2 id="tocS_BindDeviceToGatewayResponse">BindDeviceToGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemabinddevicetogatewayresponse"></a>
<a id="schema_BindDeviceToGatewayResponse"></a>
<a id="tocSbinddevicetogatewayresponse"></a>
<a id="tocsbinddevicetogatewayresponse"></a>

```json
{}
```

Response for `BindDeviceToGateway`.

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

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "blocked": true,
  "config": {
    "binaryData": "string",
    "cloudUpdateTime": "string",
    "deviceAckTime": "string",
    "version": "string"
  },
  "credentials": [
    {
      "expirationTime": "string",
      "publicKey": {
        "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
        "key": "string"
      }
    }
  ],
  "gatewayConfig": {
    "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
    "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
    "lastAccessedGatewayId": "string",
    "lastAccessedGatewayTime": "string"
  },
  "id": "string",
  "lastConfigAckTime": "string",
  "lastConfigSendTime": "string",
  "lastErrorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "lastErrorTime": "string",
  "lastEventTime": "string",
  "lastHeartbeatTime": "string",
  "lastStateTime": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "numId": "string",
  "state": {
    "binaryData": "string",
    "updateTime": "string"
  }
}
```

The device resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocked|boolean|false|none|If a device is blocked, connections or requests from this device will fail. Can be used to temporarily prevent the device from connecting if, for example, the sensor is generating bad data and needs maintenance.|
|config|[DeviceConfig](#schemadeviceconfig)|false|none|The most recent device configuration, which is eventually sent from Cloud IoT Core to the device. If not present on creation, the configuration will be initialized with an empty payload and version value of `1`. To update this field after creation, use the `DeviceManager.ModifyCloudToDeviceConfig` method.|
|credentials|[[DeviceCredential](#schemadevicecredential)]|false|none|The credentials used to authenticate this device. To allow credential rotation without interruption, multiple device credentials can be bound to this device. No more than 3 credentials can be bound to a single device at a time. When new credentials are added to a device, they are verified against the registry credentials. For details, see the description of the `DeviceRegistry.credentials` field.|
|gatewayConfig|[GatewayConfig](#schemagatewayconfig)|false|none|Gateway-related configuration and state.|
|id|string|false|none|The user-defined device identifier. The device ID must be unique within a device registry.|
|lastConfigAckTime|string(google-datetime)|false|none|[Output only] The last time a cloud-to-device config version acknowledgment was received from the device. This field is only for configurations sent through MQTT.|
|lastConfigSendTime|string(google-datetime)|false|none|[Output only] The last time a cloud-to-device config version was sent to the device.|
|lastErrorStatus|[Status](#schemastatus)|false|none|[Output only] The error message of the most recent error, such as a failure to publish to Cloud Pub/Sub. 'last_error_time' is the timestamp of this field. If no errors have occurred, this field has an empty message and the status code 0 == OK. Otherwise, this field is expected to have a status code other than OK.|
|lastErrorTime|string(google-datetime)|false|none|[Output only] The time the most recent error occurred, such as a failure to publish to Cloud Pub/Sub. This field is the timestamp of 'last_error_status'.|
|lastEventTime|string(google-datetime)|false|none|[Output only] The last time a telemetry event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|lastHeartbeatTime|string(google-datetime)|false|none|[Output only] The last time an MQTT `PINGREQ` was received. This field applies only to devices connecting through MQTT. MQTT clients usually only send `PINGREQ` messages if the connection is idle, and no other messages have been sent. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|lastStateTime|string(google-datetime)|false|none|[Output only] The last time a state event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.|
|logLevel|string|false|none|**Beta Feature** The logging verbosity for device activity. If unspecified, DeviceRegistry.log_level will be used.|
|metadata|object|false|none|The metadata key-value pairs assigned to the device. This metadata is not interpreted or indexed by Cloud IoT Core. It can be used to add contextual information for the device. Keys must conform to the regular expression a-zA-Z+ and be less than 128 bytes in length. Values are free-form strings. Each value must be less than or equal to 32 KB in size. The total size of all keys and values must be less than 256 KB, and the maximum number of key-value pairs is 500.|
|name|string|false|none|The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.|
|numId|string(uint64)|false|none|[Output only] A server-defined unique numeric ID for the device. This is a more compact way to identify devices, and it is globally unique.|
|state|[DeviceState](#schemadevicestate)|false|none|[Output only] The state most recently received from the device. If no state has been reported, this field is not present.|

#### Enumerated Values

|Property|Value|
|---|---|
|logLevel|LOG_LEVEL_UNSPECIFIED|
|logLevel|NONE|
|logLevel|ERROR|
|logLevel|INFO|
|logLevel|DEBUG|

<h2 id="tocS_DeviceConfig">DeviceConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeviceconfig"></a>
<a id="schema_DeviceConfig"></a>
<a id="tocSdeviceconfig"></a>
<a id="tocsdeviceconfig"></a>

```json
{
  "binaryData": "string",
  "cloudUpdateTime": "string",
  "deviceAckTime": "string",
  "version": "string"
}
```

The device configuration. Eventually delivered to devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binaryData|string(byte)|false|none|The device configuration data.|
|cloudUpdateTime|string(google-datetime)|false|none|[Output only] The time at which this configuration version was updated in Cloud IoT Core. This timestamp is set by the server.|
|deviceAckTime|string(google-datetime)|false|none|[Output only] The time at which Cloud IoT Core received the acknowledgment from the device, indicating that the device has received this configuration version. If this field is not present, the device has not yet acknowledged that it received this version. Note that when the config was sent to the device, many config versions may have been available in Cloud IoT Core while the device was disconnected, and on connection, only the latest version is sent to the device. Some versions may never be sent to the device, and therefore are never acknowledged. This timestamp is set by Cloud IoT Core.|
|version|string(int64)|false|none|[Output only] The version of this update. The version number is assigned by the server, and is always greater than 0 after device creation. The version must be 0 on the `CreateDevice` request if a `config` is specified; the response of `CreateDevice` will always have a value of 1.|

<h2 id="tocS_DeviceCredential">DeviceCredential</h2>
<!-- backwards compatibility -->
<a id="schemadevicecredential"></a>
<a id="schema_DeviceCredential"></a>
<a id="tocSdevicecredential"></a>
<a id="tocsdevicecredential"></a>

```json
{
  "expirationTime": "string",
  "publicKey": {
    "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
    "key": "string"
  }
}
```

A server-stored device credential used for authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationTime|string(google-datetime)|false|none|[Optional] The time at which this credential becomes invalid. This credential will be ignored for new client authentication requests after this timestamp; however, it will not be automatically deleted.|
|publicKey|[PublicKeyCredential](#schemapublickeycredential)|false|none|A public key used to verify the signature of JSON Web Tokens (JWTs). When adding a new device credential, either via device creation or via modifications, this public key credential may be required to be signed by one of the registry level certificates. More specifically, if the registry contains at least one certificate, any new device credential must be signed by one of the registry certificates. As a result, when the registry contains certificates, only X.509 certificates are accepted as device credentials. However, if the registry does not contain a certificate, self-signed certificates and public keys will be accepted. New device credentials must be different from every registry-level certificate.|

<h2 id="tocS_DeviceRegistry">DeviceRegistry</h2>
<!-- backwards compatibility -->
<a id="schemadeviceregistry"></a>
<a id="schema_DeviceRegistry"></a>
<a id="tocSdeviceregistry"></a>
<a id="tocsdeviceregistry"></a>

```json
{
  "credentials": [
    {
      "publicKeyCertificate": {
        "certificate": "string",
        "format": "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
        "x509Details": {
          "expiryTime": "string",
          "issuer": "string",
          "publicKeyType": "string",
          "signatureAlgorithm": "string",
          "startTime": "string",
          "subject": "string"
        }
      }
    }
  ],
  "eventNotificationConfigs": [
    {
      "pubsubTopicName": "string",
      "subfolderMatches": "string"
    }
  ],
  "httpConfig": {
    "httpEnabledState": "HTTP_STATE_UNSPECIFIED"
  },
  "id": "string",
  "logLevel": "LOG_LEVEL_UNSPECIFIED",
  "mqttConfig": {
    "mqttEnabledState": "MQTT_STATE_UNSPECIFIED"
  },
  "name": "string",
  "stateNotificationConfig": {
    "pubsubTopicName": "string"
  }
}
```

A container for a group of devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[[RegistryCredential](#schemaregistrycredential)]|false|none|The credentials used to verify the device credentials. No more than 10 credentials can be bound to a single registry at a time. The verification process occurs at the time of device creation or update. If this field is empty, no verification is performed. Otherwise, the credentials of a newly created device or added credentials of an updated device should be signed with one of these registry credentials. Note, however, that existing devices will never be affected by modifications to this list of credentials: after a device has been successfully created in a registry, it should be able to connect even if its registry credentials are revoked, deleted, or modified.|
|eventNotificationConfigs|[[EventNotificationConfig](#schemaeventnotificationconfig)]|false|none|The configuration for notification of telemetry events received from the device. All telemetry events that were successfully published by the device and acknowledged by Cloud IoT Core are guaranteed to be delivered to Cloud Pub/Sub. If multiple configurations match a message, only the first matching configuration is used. If you try to publish a device telemetry event using MQTT without specifying a Cloud Pub/Sub topic for the device's registry, the connection closes automatically. If you try to do so using an HTTP connection, an error is returned. Up to 10 configurations may be provided.|
|httpConfig|[HttpConfig](#schemahttpconfig)|false|none|The DeviceService (HTTP) configuration for this device registry.|
|id|string|false|none|The identifier of this device registry. For example, `myRegistry`.|
|logLevel|string|false|none|**Beta Feature** The default logging verbosity for activity from devices in this registry. The verbosity level can be overridden by Device.log_level.|
|mqttConfig|[MqttConfig](#schemamqttconfig)|false|none|The MQTT configuration for this device registry.|
|name|string|false|none|The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.|
|stateNotificationConfig|[StateNotificationConfig](#schemastatenotificationconfig)|false|none|The configuration for notification of new states received from the device. State updates are guaranteed to be stored in the state history, but notifications to Cloud Pub/Sub are not guaranteed. For example, if permissions are misconfigured or the specified topic doesn't exist, no notification will be published but the state will still be stored in Cloud IoT Core.|

#### Enumerated Values

|Property|Value|
|---|---|
|logLevel|LOG_LEVEL_UNSPECIFIED|
|logLevel|NONE|
|logLevel|ERROR|
|logLevel|INFO|
|logLevel|DEBUG|

<h2 id="tocS_DeviceState">DeviceState</h2>
<!-- backwards compatibility -->
<a id="schemadevicestate"></a>
<a id="schema_DeviceState"></a>
<a id="tocSdevicestate"></a>
<a id="tocsdevicestate"></a>

```json
{
  "binaryData": "string",
  "updateTime": "string"
}
```

The device state, as reported by the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binaryData|string(byte)|false|none|The device state data.|
|updateTime|string(google-datetime)|false|none|[Output only] The time at which this state version was updated in Cloud IoT Core.|

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

<h2 id="tocS_EventNotificationConfig">EventNotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaeventnotificationconfig"></a>
<a id="schema_EventNotificationConfig"></a>
<a id="tocSeventnotificationconfig"></a>
<a id="tocseventnotificationconfig"></a>

```json
{
  "pubsubTopicName": "string",
  "subfolderMatches": "string"
}
```

The configuration for forwarding telemetry events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pubsubTopicName|string|false|none|A Cloud Pub/Sub topic name. For example, `projects/myProject/topics/deviceEvents`.|
|subfolderMatches|string|false|none|If the subfolder name matches this string exactly, this configuration will be used. The string must not include the leading '/' character. If empty, all strings are matched. This field is used only for telemetry events; subfolders are not supported for state changes.|

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

<h2 id="tocS_GatewayConfig">GatewayConfig</h2>
<!-- backwards compatibility -->
<a id="schemagatewayconfig"></a>
<a id="schema_GatewayConfig"></a>
<a id="tocSgatewayconfig"></a>
<a id="tocsgatewayconfig"></a>

```json
{
  "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
  "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
  "lastAccessedGatewayId": "string",
  "lastAccessedGatewayTime": "string"
}
```

Gateway-related configuration and state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayAuthMethod|string|false|none|Indicates how to authorize and/or authenticate devices to access the gateway.|
|gatewayType|string|false|none|Indicates whether the device is a gateway.|
|lastAccessedGatewayId|string|false|none|[Output only] The ID of the gateway the device accessed most recently.|
|lastAccessedGatewayTime|string(google-datetime)|false|none|[Output only] The most recent time at which the device accessed the gateway specified in `last_accessed_gateway`.|

#### Enumerated Values

|Property|Value|
|---|---|
|gatewayAuthMethod|GATEWAY_AUTH_METHOD_UNSPECIFIED|
|gatewayAuthMethod|ASSOCIATION_ONLY|
|gatewayAuthMethod|DEVICE_AUTH_TOKEN_ONLY|
|gatewayAuthMethod|ASSOCIATION_AND_DEVICE_AUTH_TOKEN|
|gatewayType|GATEWAY_TYPE_UNSPECIFIED|
|gatewayType|GATEWAY|
|gatewayType|NON_GATEWAY|

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

<h2 id="tocS_HttpConfig">HttpConfig</h2>
<!-- backwards compatibility -->
<a id="schemahttpconfig"></a>
<a id="schema_HttpConfig"></a>
<a id="tocShttpconfig"></a>
<a id="tocshttpconfig"></a>

```json
{
  "httpEnabledState": "HTTP_STATE_UNSPECIFIED"
}
```

The configuration of the HTTP bridge for a device registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpEnabledState|string|false|none|If enabled, allows devices to use DeviceService via the HTTP protocol. Otherwise, any requests to DeviceService will fail for this registry.|

#### Enumerated Values

|Property|Value|
|---|---|
|httpEnabledState|HTTP_STATE_UNSPECIFIED|
|httpEnabledState|HTTP_ENABLED|
|httpEnabledState|HTTP_DISABLED|

<h2 id="tocS_ListDeviceConfigVersionsResponse">ListDeviceConfigVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceconfigversionsresponse"></a>
<a id="schema_ListDeviceConfigVersionsResponse"></a>
<a id="tocSlistdeviceconfigversionsresponse"></a>
<a id="tocslistdeviceconfigversionsresponse"></a>

```json
{
  "deviceConfigs": [
    {
      "binaryData": "string",
      "cloudUpdateTime": "string",
      "deviceAckTime": "string",
      "version": "string"
    }
  ]
}
```

Response for `ListDeviceConfigVersions`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceConfigs|[[DeviceConfig](#schemadeviceconfig)]|false|none|The device configuration for the last few versions. Versions are listed in decreasing order, starting from the most recent one.|

<h2 id="tocS_ListDeviceRegistriesResponse">ListDeviceRegistriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceregistriesresponse"></a>
<a id="schema_ListDeviceRegistriesResponse"></a>
<a id="tocSlistdeviceregistriesresponse"></a>
<a id="tocslistdeviceregistriesresponse"></a>

```json
{
  "deviceRegistries": [
    {
      "credentials": [
        {
          "publicKeyCertificate": {
            "certificate": "string",
            "format": "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
            "x509Details": {
              "expiryTime": "string",
              "issuer": "string",
              "publicKeyType": "string",
              "signatureAlgorithm": "string",
              "startTime": "string",
              "subject": "string"
            }
          }
        }
      ],
      "eventNotificationConfigs": [
        {
          "pubsubTopicName": "string",
          "subfolderMatches": "string"
        }
      ],
      "httpConfig": {
        "httpEnabledState": "HTTP_STATE_UNSPECIFIED"
      },
      "id": "string",
      "logLevel": "LOG_LEVEL_UNSPECIFIED",
      "mqttConfig": {
        "mqttEnabledState": "MQTT_STATE_UNSPECIFIED"
      },
      "name": "string",
      "stateNotificationConfig": {
        "pubsubTopicName": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response for `ListDeviceRegistries`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceRegistries|[[DeviceRegistry](#schemadeviceregistry)]|false|none|The registries that matched the query.|
|nextPageToken|string|false|none|If not empty, indicates that there may be more registries that match the request; this value should be passed in a new `ListDeviceRegistriesRequest`.|

<h2 id="tocS_ListDeviceStatesResponse">ListDeviceStatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicestatesresponse"></a>
<a id="schema_ListDeviceStatesResponse"></a>
<a id="tocSlistdevicestatesresponse"></a>
<a id="tocslistdevicestatesresponse"></a>

```json
{
  "deviceStates": [
    {
      "binaryData": "string",
      "updateTime": "string"
    }
  ]
}
```

Response for `ListDeviceStates`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceStates|[[DeviceState](#schemadevicestate)]|false|none|The last few device states. States are listed in descending order of server update time, starting from the most recent one.|

<h2 id="tocS_ListDevicesResponse">ListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesresponse"></a>
<a id="schema_ListDevicesResponse"></a>
<a id="tocSlistdevicesresponse"></a>
<a id="tocslistdevicesresponse"></a>

```json
{
  "devices": [
    {
      "blocked": true,
      "config": {
        "binaryData": "string",
        "cloudUpdateTime": "string",
        "deviceAckTime": "string",
        "version": "string"
      },
      "credentials": [
        {
          "expirationTime": "string",
          "publicKey": {
            "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
            "key": "string"
          }
        }
      ],
      "gatewayConfig": {
        "gatewayAuthMethod": "GATEWAY_AUTH_METHOD_UNSPECIFIED",
        "gatewayType": "GATEWAY_TYPE_UNSPECIFIED",
        "lastAccessedGatewayId": "string",
        "lastAccessedGatewayTime": "string"
      },
      "id": "string",
      "lastConfigAckTime": "string",
      "lastConfigSendTime": "string",
      "lastErrorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "lastErrorTime": "string",
      "lastEventTime": "string",
      "lastHeartbeatTime": "string",
      "lastStateTime": "string",
      "logLevel": "LOG_LEVEL_UNSPECIFIED",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "numId": "string",
      "state": {
        "binaryData": "string",
        "updateTime": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response for `ListDevices`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[Device](#schemadevice)]|false|none|The devices that match the request.|
|nextPageToken|string|false|none|If not empty, indicates that there may be more devices that match the request; this value should be passed in a new `ListDevicesRequest`.|

<h2 id="tocS_ModifyCloudToDeviceConfigRequest">ModifyCloudToDeviceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifycloudtodeviceconfigrequest"></a>
<a id="schema_ModifyCloudToDeviceConfigRequest"></a>
<a id="tocSmodifycloudtodeviceconfigrequest"></a>
<a id="tocsmodifycloudtodeviceconfigrequest"></a>

```json
{
  "binaryData": "string",
  "versionToUpdate": "string"
}
```

Request for `ModifyCloudToDeviceConfig`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binaryData|string(byte)|false|none|Required. The configuration data for the device.|
|versionToUpdate|string(int64)|false|none|The version number to update. If this value is zero, it will not check the version number of the server and will always update the current version; otherwise, this update will fail if the version number found on the server does not match this version number. This is used to support multiple simultaneous updates without losing data.|

<h2 id="tocS_MqttConfig">MqttConfig</h2>
<!-- backwards compatibility -->
<a id="schemamqttconfig"></a>
<a id="schema_MqttConfig"></a>
<a id="tocSmqttconfig"></a>
<a id="tocsmqttconfig"></a>

```json
{
  "mqttEnabledState": "MQTT_STATE_UNSPECIFIED"
}
```

The configuration of MQTT for a device registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mqttEnabledState|string|false|none|If enabled, allows connections using the MQTT protocol. Otherwise, MQTT connections to this registry will fail.|

#### Enumerated Values

|Property|Value|
|---|---|
|mqttEnabledState|MQTT_STATE_UNSPECIFIED|
|mqttEnabledState|MQTT_ENABLED|
|mqttEnabledState|MQTT_DISABLED|

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

<h2 id="tocS_PublicKeyCertificate">PublicKeyCertificate</h2>
<!-- backwards compatibility -->
<a id="schemapublickeycertificate"></a>
<a id="schema_PublicKeyCertificate"></a>
<a id="tocSpublickeycertificate"></a>
<a id="tocspublickeycertificate"></a>

```json
{
  "certificate": "string",
  "format": "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
  "x509Details": {
    "expiryTime": "string",
    "issuer": "string",
    "publicKeyType": "string",
    "signatureAlgorithm": "string",
    "startTime": "string",
    "subject": "string"
  }
}
```

A public key certificate format and data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|false|none|The certificate data.|
|format|string|false|none|The certificate format.|
|x509Details|[X509CertificateDetails](#schemax509certificatedetails)|false|none|[Output only] The certificate details. Used only for X.509 certificates.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT|
|format|X509_CERTIFICATE_PEM|

<h2 id="tocS_PublicKeyCredential">PublicKeyCredential</h2>
<!-- backwards compatibility -->
<a id="schemapublickeycredential"></a>
<a id="schema_PublicKeyCredential"></a>
<a id="tocSpublickeycredential"></a>
<a id="tocspublickeycredential"></a>

```json
{
  "format": "UNSPECIFIED_PUBLIC_KEY_FORMAT",
  "key": "string"
}
```

A public key format and data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|The format of the key.|
|key|string|false|none|The key data.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|UNSPECIFIED_PUBLIC_KEY_FORMAT|
|format|RSA_PEM|
|format|RSA_X509_PEM|
|format|ES256_PEM|
|format|ES256_X509_PEM|

<h2 id="tocS_RegistryCredential">RegistryCredential</h2>
<!-- backwards compatibility -->
<a id="schemaregistrycredential"></a>
<a id="schema_RegistryCredential"></a>
<a id="tocSregistrycredential"></a>
<a id="tocsregistrycredential"></a>

```json
{
  "publicKeyCertificate": {
    "certificate": "string",
    "format": "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
    "x509Details": {
      "expiryTime": "string",
      "issuer": "string",
      "publicKeyType": "string",
      "signatureAlgorithm": "string",
      "startTime": "string",
      "subject": "string"
    }
  }
}
```

A server-stored registry credential used to validate device credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKeyCertificate|[PublicKeyCertificate](#schemapublickeycertificate)|false|none|A public key certificate used to verify the device credentials.|

<h2 id="tocS_SendCommandToDeviceRequest">SendCommandToDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendcommandtodevicerequest"></a>
<a id="schema_SendCommandToDeviceRequest"></a>
<a id="tocSsendcommandtodevicerequest"></a>
<a id="tocssendcommandtodevicerequest"></a>

```json
{
  "binaryData": "string",
  "subfolder": "string"
}
```

Request for `SendCommandToDevice`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binaryData|string(byte)|false|none|Required. The command data to send to the device.|
|subfolder|string|false|none|Optional subfolder for the command. If empty, the command will be delivered to the /devices/{device-id}/commands topic, otherwise it will be delivered to the /devices/{device-id}/commands/{subfolder} topic. Multi-level subfolders are allowed. This field must not have more than 256 characters, and must not contain any MQTT wildcards ("+" or "#") or null characters.|

<h2 id="tocS_SendCommandToDeviceResponse">SendCommandToDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendcommandtodeviceresponse"></a>
<a id="schema_SendCommandToDeviceResponse"></a>
<a id="tocSsendcommandtodeviceresponse"></a>
<a id="tocssendcommandtodeviceresponse"></a>

```json
{}
```

Response for `SendCommandToDevice`.

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

<h2 id="tocS_StateNotificationConfig">StateNotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemastatenotificationconfig"></a>
<a id="schema_StateNotificationConfig"></a>
<a id="tocSstatenotificationconfig"></a>
<a id="tocsstatenotificationconfig"></a>

```json
{
  "pubsubTopicName": "string"
}
```

The configuration for notification of new states received from the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pubsubTopicName|string|false|none|A Cloud Pub/Sub topic name. For example, `projects/myProject/topics/deviceEvents`.|

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

<h2 id="tocS_UnbindDeviceFromGatewayRequest">UnbindDeviceFromGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunbinddevicefromgatewayrequest"></a>
<a id="schema_UnbindDeviceFromGatewayRequest"></a>
<a id="tocSunbinddevicefromgatewayrequest"></a>
<a id="tocsunbinddevicefromgatewayrequest"></a>

```json
{
  "deviceId": "string",
  "gatewayId": "string"
}
```

Request for `UnbindDeviceFromGateway`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|Required. The device to disassociate from the specified gateway. The value of `device_id` can be either the device numeric ID or the user-defined device identifier.|
|gatewayId|string|false|none|Required. The value of `gateway_id` can be either the device numeric ID or the user-defined device identifier.|

<h2 id="tocS_UnbindDeviceFromGatewayResponse">UnbindDeviceFromGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunbinddevicefromgatewayresponse"></a>
<a id="schema_UnbindDeviceFromGatewayResponse"></a>
<a id="tocSunbinddevicefromgatewayresponse"></a>
<a id="tocsunbinddevicefromgatewayresponse"></a>

```json
{}
```

Response for `UnbindDeviceFromGateway`.

<h2 id="tocS_X509CertificateDetails">X509CertificateDetails</h2>
<!-- backwards compatibility -->
<a id="schemax509certificatedetails"></a>
<a id="schema_X509CertificateDetails"></a>
<a id="tocSx509certificatedetails"></a>
<a id="tocsx509certificatedetails"></a>

```json
{
  "expiryTime": "string",
  "issuer": "string",
  "publicKeyType": "string",
  "signatureAlgorithm": "string",
  "startTime": "string",
  "subject": "string"
}
```

Details of an X.509 certificate. For informational purposes only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiryTime|string(google-datetime)|false|none|The time the certificate becomes invalid.|
|issuer|string|false|none|The entity that signed the certificate.|
|publicKeyType|string|false|none|The type of public key in the certificate.|
|signatureAlgorithm|string|false|none|The algorithm used to sign the certificate.|
|startTime|string(google-datetime)|false|none|The time the certificate becomes valid.|
|subject|string|false|none|The entity the certificate and public key belong to.|
