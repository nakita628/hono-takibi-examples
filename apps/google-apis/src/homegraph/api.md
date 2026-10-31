<h1 id="homegraph-api">HomeGraph API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://homegraph.googleapis.com/">https://homegraph.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.home.google.com/cloud-to-cloud/get-started">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/homegraph|Private Service: https://www.googleapis.com/auth/homegraph|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/homegraph|Private Service: https://www.googleapis.com/auth/homegraph|

<h1 id="homegraph-api-agentusers">agentUsers</h1>

## homegraph.agentUsers.delete

<a id="opIdhomegraph.agentUsers.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{agentUserId}`

Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and authentication](https://developers.home.google.com/cloud-to-cloud/primer/fulfillment). The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.

<h3 id="homegraphagentusersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentUserId|path|string|true|Required. Third-party user ID.|
|requestId|query|string|false|Request ID used for debugging.|
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

<h3 id="homegraphagentusersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/homegraph ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/homegraph )
</aside>

<h1 id="homegraph-api-devices">devices</h1>

## homegraph.devices.query

<a id="opIdhomegraph.devices.query"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/devices:query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agentUserId": "string",
    "inputs": [
      {
        "payload": {
          "devices": [
            {
              "id": "string"
            }
          ]
        }
      }
    ],
    "requestId": "string"
  }'
```

`POST /v1/devices:query`

Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.

> Body parameter

```json
{
  "agentUserId": "string",
  "inputs": [
    {
      "payload": {
        "devices": [
          {
            "id": "string"
          }
        ]
      }
    }
  ],
  "requestId": "string"
}
```

<h3 id="homegraphdevicesquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[QueryRequest](#schemaqueryrequest)|false|none|
|» agentUserId|body|string|false|Required. Third-party user ID.|
|» inputs|body|[[QueryRequestInput](#schemaqueryrequestinput)]|false|Required. Inputs containing third-party device IDs for which to get the device states.|
|» requestId|body|string|false|Request ID used for debugging.|

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
  "payload": {
    "devices": {
      "property1": {
        "property1": null,
        "property2": null
      },
      "property2": {
        "property1": null,
        "property2": null
      }
    }
  },
  "requestId": "string"
}
```

<h3 id="homegraphdevicesquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryResponse](#schemaqueryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/homegraph ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/homegraph )
</aside>

## homegraph.devices.reportStateAndNotification

<a id="opIdhomegraph.devices.reportStateAndNotification"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/devices:reportStateAndNotification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agentUserId": "string",
    "eventId": "string",
    "followUpToken": "string",
    "payload": {
      "devices": {
        "notifications": {
          "property1": null,
          "property2": null
        },
        "states": {
          "property1": null,
          "property2": null
        }
      }
    },
    "requestId": "string"
  }'
```

`POST /v1/devices:reportStateAndNotification`

Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.

> Body parameter

```json
{
  "agentUserId": "string",
  "eventId": "string",
  "followUpToken": "string",
  "payload": {
    "devices": {
      "notifications": {
        "property1": null,
        "property2": null
      },
      "states": {
        "property1": null,
        "property2": null
      }
    }
  },
  "requestId": "string"
}
```

<h3 id="homegraphdevicesreportstateandnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ReportStateAndNotificationRequest](#schemareportstateandnotificationrequest)|false|none|
|» agentUserId|body|string|false|Required. Third-party user ID.|
|» eventId|body|string|false|Unique identifier per event (for example, a doorbell press).|
|» followUpToken|body|string|false|Deprecated.|
|» payload|body|[StateAndNotificationPayload](#schemastateandnotificationpayload)|false|Required. State of devices to update and notification metadata for devices.|
|» requestId|body|string|false|Request ID used for debugging.|

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
  "requestId": "string"
}
```

<h3 id="homegraphdevicesreportstateandnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportStateAndNotificationResponse](#schemareportstateandnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/homegraph ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/homegraph )
</aside>

## homegraph.devices.requestSync

<a id="opIdhomegraph.devices.requestSync"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/devices:requestSync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agentUserId": "string",
    "async": true
  }'
```

`POST /v1/devices:requestSync`

Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.

> Body parameter

```json
{
  "agentUserId": "string",
  "async": true
}
```

<h3 id="homegraphdevicesrequestsync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[RequestSyncDevicesRequest](#schemarequestsyncdevicesrequest)|false|none|
|» agentUserId|body|string|false|Required. Third-party user ID.|
|» async|body|boolean|false|Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses.|

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

<h3 id="homegraphdevicesrequestsync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RequestSyncDevicesResponse](#schemarequestsyncdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/homegraph ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/homegraph )
</aside>

## homegraph.devices.sync

<a id="opIdhomegraph.devices.sync"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/devices:sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agentUserId": "string",
    "requestId": "string"
  }'
```

`POST /v1/devices:sync`

Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.

> Body parameter

```json
{
  "agentUserId": "string",
  "requestId": "string"
}
```

<h3 id="homegraphdevicessync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[SyncRequest](#schemasyncrequest)|false|none|
|» agentUserId|body|string|false|Required. Third-party user ID.|
|» requestId|body|string|false|Request ID used for debugging.|

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
  "payload": {
    "agentUserId": "string",
    "devices": [
      {
        "attributes": {
          "property1": null,
          "property2": null
        },
        "customData": {
          "property1": null,
          "property2": null
        },
        "deviceInfo": {
          "hwVersion": "string",
          "manufacturer": "string",
          "model": "string",
          "swVersion": "string"
        },
        "id": "string",
        "name": {
          "defaultNames": [
            "string"
          ],
          "name": "string",
          "nicknames": [
            "string"
          ]
        },
        "notificationSupportedByAgent": true,
        "otherDeviceIds": [
          {
            "agentId": "string",
            "deviceId": "string"
          }
        ],
        "roomHint": "string",
        "structureHint": "string",
        "traits": [
          "string"
        ],
        "type": "string",
        "willReportState": true
      }
    ]
  },
  "requestId": "string"
}
```

<h3 id="homegraphdevicessync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SyncResponse](#schemasyncresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/homegraph ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/homegraph )
</aside>

# Schemas

<h2 id="tocS_AgentDeviceId">AgentDeviceId</h2>
<!-- backwards compatibility -->
<a id="schemaagentdeviceid"></a>
<a id="schema_AgentDeviceId"></a>
<a id="tocSagentdeviceid"></a>
<a id="tocsagentdeviceid"></a>

```json
{
  "id": "string"
}
```

Third-party device ID for one device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Third-party device ID.|

<h2 id="tocS_AgentOtherDeviceId">AgentOtherDeviceId</h2>
<!-- backwards compatibility -->
<a id="schemaagentotherdeviceid"></a>
<a id="schema_AgentOtherDeviceId"></a>
<a id="tocSagentotherdeviceid"></a>
<a id="tocsagentotherdeviceid"></a>

```json
{
  "agentId": "string",
  "deviceId": "string"
}
```

Alternate third-party device ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|string|false|none|Project ID for your smart home Action.|
|deviceId|string|false|none|Unique third-party device ID.|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "attributes": {
    "property1": null,
    "property2": null
  },
  "customData": {
    "property1": null,
    "property2": null
  },
  "deviceInfo": {
    "hwVersion": "string",
    "manufacturer": "string",
    "model": "string",
    "swVersion": "string"
  },
  "id": "string",
  "name": {
    "defaultNames": [
      "string"
    ],
    "name": "string",
    "nicknames": [
      "string"
    ]
  },
  "notificationSupportedByAgent": true,
  "otherDeviceIds": [
    {
      "agentId": "string",
      "deviceId": "string"
    }
  ],
  "roomHint": "string",
  "structureHint": "string",
  "traits": [
    "string"
  ],
  "type": "string",
  "willReportState": true
}
```

Third-party device definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Attributes for the traits supported by the device.|
|customData|object|false|none|Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.home.google.com/cloud-to-cloud/intents/query) and [EXECUTE](https://developers.home.google.com/cloud-to-cloud/intents/execute) intent. Data in this object has a few constraints: No sensitive information, including but not limited to Personally Identifiable Information.|
|deviceInfo|[DeviceInfo](#schemadeviceinfo)|false|none|Device manufacturer, model, hardware version, and software version.|
|id|string|false|none|Third-party device ID.|
|name|[DeviceNames](#schemadevicenames)|false|none|Names given to this device by your smart home Action.|
|notificationSupportedByAgent|boolean|false|none|Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices.|
|otherDeviceIds|[[AgentOtherDeviceId](#schemaagentotherdeviceid)]|false|none|Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.home.google.com/local-home/overview).|
|roomHint|string|false|none|Suggested name for the room where this device is installed. Google attempts to use this value during user setup.|
|structureHint|string|false|none|Suggested name for the structure where this device is installed. Google attempts to use this value during user setup.|
|traits|[string]|false|none|Traits supported by the device. See [device traits](https://developers.home.google.com/cloud-to-cloud/traits).|
|type|string|false|none|Hardware type of the device. See [device types](https://developers.home.google.com/cloud-to-cloud/guides).|
|willReportState|boolean|false|none|Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification.|

<h2 id="tocS_DeviceInfo">DeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinfo"></a>
<a id="schema_DeviceInfo"></a>
<a id="tocSdeviceinfo"></a>
<a id="tocsdeviceinfo"></a>

```json
{
  "hwVersion": "string",
  "manufacturer": "string",
  "model": "string",
  "swVersion": "string"
}
```

Device information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hwVersion|string|false|none|Device hardware version.|
|manufacturer|string|false|none|Device manufacturer.|
|model|string|false|none|Device model.|
|swVersion|string|false|none|Device software version.|

<h2 id="tocS_DeviceNames">DeviceNames</h2>
<!-- backwards compatibility -->
<a id="schemadevicenames"></a>
<a id="schema_DeviceNames"></a>
<a id="tocSdevicenames"></a>
<a id="tocsdevicenames"></a>

```json
{
  "defaultNames": [
    "string"
  ],
  "name": "string",
  "nicknames": [
    "string"
  ]
}
```

Identifiers used to describe the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultNames|[string]|false|none|List of names provided by the manufacturer rather than the user, such as serial numbers, SKUs, etc.|
|name|string|false|none|Primary name of the device, generally provided by the user.|
|nicknames|[string]|false|none|Additional names provided by the user for the device.|

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

<h2 id="tocS_QueryRequest">QueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequest"></a>
<a id="schema_QueryRequest"></a>
<a id="tocSqueryrequest"></a>
<a id="tocsqueryrequest"></a>

```json
{
  "agentUserId": "string",
  "inputs": [
    {
      "payload": {
        "devices": [
          {
            "id": "string"
          }
        ]
      }
    }
  ],
  "requestId": "string"
}
```

Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentUserId|string|false|none|Required. Third-party user ID.|
|inputs|[[QueryRequestInput](#schemaqueryrequestinput)]|false|none|Required. Inputs containing third-party device IDs for which to get the device states.|
|requestId|string|false|none|Request ID used for debugging.|

<h2 id="tocS_QueryRequestInput">QueryRequestInput</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequestinput"></a>
<a id="schema_QueryRequestInput"></a>
<a id="tocSqueryrequestinput"></a>
<a id="tocsqueryrequestinput"></a>

```json
{
  "payload": {
    "devices": [
      {
        "id": "string"
      }
    ]
  }
}
```

Device ID inputs to QueryRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[QueryRequestPayload](#schemaqueryrequestpayload)|false|none|Payload containing third-party device IDs.|

<h2 id="tocS_QueryRequestPayload">QueryRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequestpayload"></a>
<a id="schema_QueryRequestPayload"></a>
<a id="tocSqueryrequestpayload"></a>
<a id="tocsqueryrequestpayload"></a>

```json
{
  "devices": [
    {
      "id": "string"
    }
  ]
}
```

Payload containing device IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[AgentDeviceId](#schemaagentdeviceid)]|false|none|Third-party device IDs for which to get the device states.|

<h2 id="tocS_QueryResponse">QueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresponse"></a>
<a id="schema_QueryResponse"></a>
<a id="tocSqueryresponse"></a>
<a id="tocsqueryresponse"></a>

```json
{
  "payload": {
    "devices": {
      "property1": {
        "property1": null,
        "property2": null
      },
      "property2": {
        "property1": null,
        "property2": null
      }
    }
  },
  "requestId": "string"
}
```

Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.home.google.com/cloud-to-cloud/intents/query). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "devices": { "123": { "on": true, "online": true }, "456": { "on": true, "online": true, "brightness": 80, "color": { "name": "cerulean", "spectrumRGB": 31655 } } } } } ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[QueryResponsePayload](#schemaqueryresponsepayload)|false|none|Device states for the devices given in the request.|
|requestId|string|false|none|Request ID used for debugging. Copied from the request.|

<h2 id="tocS_QueryResponsePayload">QueryResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresponsepayload"></a>
<a id="schema_QueryResponsePayload"></a>
<a id="tocSqueryresponsepayload"></a>
<a id="tocsqueryresponsepayload"></a>

```json
{
  "devices": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  }
}
```

Payload containing device states information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|object|false|none|States of the devices. Map of third-party device ID to struct of device states.|

<h2 id="tocS_ReportStateAndNotificationDevice">ReportStateAndNotificationDevice</h2>
<!-- backwards compatibility -->
<a id="schemareportstateandnotificationdevice"></a>
<a id="schema_ReportStateAndNotificationDevice"></a>
<a id="tocSreportstateandnotificationdevice"></a>
<a id="tocsreportstateandnotificationdevice"></a>

```json
{
  "notifications": {
    "property1": null,
    "property2": null
  },
  "states": {
    "property1": null,
    "property2": null
  }
}
```

The states and notifications specific to a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notifications|object|false|none|Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits).|
|states|object|false|none|States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits).|

<h2 id="tocS_ReportStateAndNotificationRequest">ReportStateAndNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportstateandnotificationrequest"></a>
<a id="schema_ReportStateAndNotificationRequest"></a>
<a id="tocSreportstateandnotificationrequest"></a>
<a id="tocsreportstateandnotificationrequest"></a>

```json
{
  "agentUserId": "string",
  "eventId": "string",
  "followUpToken": "string",
  "payload": {
    "devices": {
      "notifications": {
        "property1": null,
        "property2": null
      },
      "states": {
        "property1": null,
        "property2": null
      }
    }
  },
  "requestId": "string"
}
```

Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, "123" and "456" in the following example). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "agentUserId": "1234", "payload": { "devices": { "states": { "123": { "on": true }, "456": { "on": true, "brightness": 10 } }, } } } ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentUserId|string|false|none|Required. Third-party user ID.|
|eventId|string|false|none|Unique identifier per event (for example, a doorbell press).|
|followUpToken|string|false|none|Deprecated.|
|payload|[StateAndNotificationPayload](#schemastateandnotificationpayload)|false|none|Required. State of devices to update and notification metadata for devices.|
|requestId|string|false|none|Request ID used for debugging.|

<h2 id="tocS_ReportStateAndNotificationResponse">ReportStateAndNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportstateandnotificationresponse"></a>
<a id="schema_ReportStateAndNotificationResponse"></a>
<a id="tocSreportstateandnotificationresponse"></a>
<a id="tocsreportstateandnotificationresponse"></a>

```json
{
  "requestId": "string"
}
```

Response type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Request ID copied from ReportStateAndNotificationRequest.|

<h2 id="tocS_RequestSyncDevicesRequest">RequestSyncDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemarequestsyncdevicesrequest"></a>
<a id="schema_RequestSyncDevicesRequest"></a>
<a id="tocSrequestsyncdevicesrequest"></a>
<a id="tocsrequestsyncdevicesrequest"></a>

```json
{
  "agentUserId": "string",
  "async": true
}
```

Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentUserId|string|false|none|Required. Third-party user ID.|
|async|boolean|false|none|Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses.|

<h2 id="tocS_RequestSyncDevicesResponse">RequestSyncDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequestsyncdevicesresponse"></a>
<a id="schema_RequestSyncDevicesResponse"></a>
<a id="tocSrequestsyncdevicesresponse"></a>
<a id="tocsrequestsyncdevicesresponse"></a>

```json
{}
```

Response type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call. Intentionally empty upon success. An HTTP response code is returned with more details upon failure.

<h2 id="tocS_StateAndNotificationPayload">StateAndNotificationPayload</h2>
<!-- backwards compatibility -->
<a id="schemastateandnotificationpayload"></a>
<a id="schema_StateAndNotificationPayload"></a>
<a id="tocSstateandnotificationpayload"></a>
<a id="tocsstateandnotificationpayload"></a>

```json
{
  "devices": {
    "notifications": {
      "property1": null,
      "property2": null
    },
    "states": {
      "property1": null,
      "property2": null
    }
  }
}
```

Payload containing the state and notification information for devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[ReportStateAndNotificationDevice](#schemareportstateandnotificationdevice)|false|none|The devices for updating state and sending notifications.|

<h2 id="tocS_SyncRequest">SyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemasyncrequest"></a>
<a id="schema_SyncRequest"></a>
<a id="tocSsyncrequest"></a>
<a id="tocssyncrequest"></a>

```json
{
  "agentUserId": "string",
  "requestId": "string"
}
```

Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentUserId|string|false|none|Required. Third-party user ID.|
|requestId|string|false|none|Request ID used for debugging.|

<h2 id="tocS_SyncResponse">SyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemasyncresponse"></a>
<a id="schema_SyncResponse"></a>
<a id="tocSsyncresponse"></a>
<a id="tocssyncresponse"></a>

```json
{
  "payload": {
    "agentUserId": "string",
    "devices": [
      {
        "attributes": {
          "property1": null,
          "property2": null
        },
        "customData": {
          "property1": null,
          "property2": null
        },
        "deviceInfo": {
          "hwVersion": "string",
          "manufacturer": "string",
          "model": "string",
          "swVersion": "string"
        },
        "id": "string",
        "name": {
          "defaultNames": [
            "string"
          ],
          "name": "string",
          "nicknames": [
            "string"
          ]
        },
        "notificationSupportedByAgent": true,
        "otherDeviceIds": [
          {
            "agentId": "string",
            "deviceId": "string"
          }
        ],
        "roomHint": "string",
        "structureHint": "string",
        "traits": [
          "string"
        ],
        "type": "string",
        "willReportState": true
      }
    ]
  },
  "requestId": "string"
}
```

Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.home.google.com/cloud-to-cloud/intents/sync). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "agentUserId": "1836.15267389", "devices": [{ "id": "123", "type": "action.devices.types.OUTLET", "traits": [ "action.devices.traits.OnOff" ], "name": { "defaultNames": ["My Outlet 1234"], "name": "Night light", "nicknames": ["wall plug"] }, "willReportState": false, "deviceInfo": { "manufacturer": "lights-out-inc", "model": "hs1234", "hwVersion": "3.2", "swVersion": "11.4" }, "customData": { "fooValue": 74, "barValue": true, "bazValue": "foo" } }] } } ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[SyncResponsePayload](#schemasyncresponsepayload)|false|none|Devices associated with the third-party user.|
|requestId|string|false|none|Request ID used for debugging. Copied from the request.|

<h2 id="tocS_SyncResponsePayload">SyncResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemasyncresponsepayload"></a>
<a id="schema_SyncResponsePayload"></a>
<a id="tocSsyncresponsepayload"></a>
<a id="tocssyncresponsepayload"></a>

```json
{
  "agentUserId": "string",
  "devices": [
    {
      "attributes": {
        "property1": null,
        "property2": null
      },
      "customData": {
        "property1": null,
        "property2": null
      },
      "deviceInfo": {
        "hwVersion": "string",
        "manufacturer": "string",
        "model": "string",
        "swVersion": "string"
      },
      "id": "string",
      "name": {
        "defaultNames": [
          "string"
        ],
        "name": "string",
        "nicknames": [
          "string"
        ]
      },
      "notificationSupportedByAgent": true,
      "otherDeviceIds": [
        {
          "agentId": "string",
          "deviceId": "string"
        }
      ],
      "roomHint": "string",
      "structureHint": "string",
      "traits": [
        "string"
      ],
      "type": "string",
      "willReportState": true
    }
  ]
}
```

Payload containing device information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentUserId|string|false|none|Third-party user ID|
|devices|[[Device](#schemadevice)]|false|none|Devices associated with the third-party user.|
