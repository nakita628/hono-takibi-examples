<h1 id="smart-device-management-api">Smart Device Management API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Allow select enterprise partners to access, control, and manage Google and Nest devices programmatically.

Base URLs:

* <a href="https://smartdevicemanagement.googleapis.com/">https://smartdevicemanagement.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/nest/device-access">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/sdm.service|See and/or control the devices that you selected|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/sdm.service|See and/or control the devices that you selected|

<h1 id="smart-device-management-api-enterprises">enterprises</h1>

## smartdevicemanagement.enterprises.structures.rooms.get

<a id="opIdsmartdevicemanagement.enterprises.structures.rooms.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a room managed by the enterprise.

<h3 id="smartdevicemanagemententerprisesstructuresroomsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".|
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
  "name": "string",
  "traits": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="smartdevicemanagemententerprisesstructuresroomsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleHomeEnterpriseSdmV1Room](#schemagooglehomeenterprisesdmv1room)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/sdm.service ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sdm.service )
</aside>

## smartdevicemanagement.enterprises.devices.executeCommand

<a id="opIdsmartdevicemanagement.enterprises.devices.executeCommand"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:executeCommand \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "command": "string",
    "params": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v1/{name}:executeCommand`

Executes a command to device managed by the enterprise.

> Body parameter

```json
{
  "command": "string",
  "params": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="smartdevicemanagemententerprisesdevicesexecutecommand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the device requested. For example: "enterprises/XYZ/devices/123"|
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
|body|body|[GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest](#schemagooglehomeenterprisesdmv1executedevicecommandrequest)|false|none|
|» command|body|string|false|The command name to execute, represented by the fully qualified protobuf message name.|
|» params|body|object|false|The command message to execute, represented as a Struct.|
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
  "results": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="smartdevicemanagemententerprisesdevicesexecutecommand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse](#schemagooglehomeenterprisesdmv1executedevicecommandresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/sdm.service ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sdm.service )
</aside>

## smartdevicemanagement.enterprises.devices.list

<a id="opIdsmartdevicemanagement.enterprises.devices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/devices`

Lists devices managed by the enterprise.

<h3 id="smartdevicemanagemententerprisesdeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent enterprise to list devices under. E.g. "enterprises/XYZ".|
|filter|query|string|false|Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'|
|pageSize|query|integer|false|Optional requested page size. Server may return fewer devices than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|Optional token of the page to retrieve.|
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
  "devices": [
    {
      "name": "string",
      "parentRelations": [
        {
          "displayName": "string",
          "parent": "string"
        }
      ],
      "traits": {
        "property1": null,
        "property2": null
      },
      "type": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="smartdevicemanagemententerprisesdeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleHomeEnterpriseSdmV1ListDevicesResponse](#schemagooglehomeenterprisesdmv1listdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/sdm.service ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sdm.service )
</aside>

## smartdevicemanagement.enterprises.structures.rooms.list

<a id="opIdsmartdevicemanagement.enterprises.structures.rooms.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/rooms \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/rooms`

Lists rooms managed by the enterprise.

<h3 id="smartdevicemanagemententerprisesstructuresroomslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".|
|pageSize|query|integer|false|Requested page size. Server may return fewer rooms than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|The token of the page to retrieve.|
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
  "rooms": [
    {
      "name": "string",
      "traits": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="smartdevicemanagemententerprisesstructuresroomslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleHomeEnterpriseSdmV1ListRoomsResponse](#schemagooglehomeenterprisesdmv1listroomsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/sdm.service ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sdm.service )
</aside>

## smartdevicemanagement.enterprises.structures.list

<a id="opIdsmartdevicemanagement.enterprises.structures.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/structures \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/structures`

Lists structures managed by the enterprise.

<h3 id="smartdevicemanagemententerprisesstructureslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent enterprise to list structures under. E.g. "enterprises/XYZ".|
|filter|query|string|false|Optional filter to list structures.|
|pageSize|query|integer|false|Requested page size. Server may return fewer structures than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|The token of the page to retrieve.|
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
  "structures": [
    {
      "name": "string",
      "traits": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="smartdevicemanagemententerprisesstructureslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleHomeEnterpriseSdmV1ListStructuresResponse](#schemagooglehomeenterprisesdmv1liststructuresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/sdm.service ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sdm.service )
</aside>

# Schemas

<h2 id="tocS_GoogleHomeEnterpriseSdmV1Device">GoogleHomeEnterpriseSdmV1Device</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1device"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1Device"></a>
<a id="tocSgooglehomeenterprisesdmv1device"></a>
<a id="tocsgooglehomeenterprisesdmv1device"></a>

```json
{
  "name": "string",
  "parentRelations": [
    {
      "displayName": "string",
      "parent": "string"
    }
  ],
  "traits": {
    "property1": null,
    "property2": null
  },
  "type": "string"
}
```

Device resource represents an instance of enterprise managed device in the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The resource name of the device. For example: "enterprises/XYZ/devices/123".|
|parentRelations|[[GoogleHomeEnterpriseSdmV1ParentRelation](#schemagooglehomeenterprisesdmv1parentrelation)]|false|none|Assignee details of the device.|
|traits|object|false|read-only|Output only. Device traits.|
|type|string|false|read-only|Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device.|

<h2 id="tocS_GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest">GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1executedevicecommandrequest"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest"></a>
<a id="tocSgooglehomeenterprisesdmv1executedevicecommandrequest"></a>
<a id="tocsgooglehomeenterprisesdmv1executedevicecommandrequest"></a>

```json
{
  "command": "string",
  "params": {
    "property1": null,
    "property2": null
  }
}
```

Request message for SmartDeviceManagementService.ExecuteDeviceCommand

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|string|false|none|The command name to execute, represented by the fully qualified protobuf message name.|
|params|object|false|none|The command message to execute, represented as a Struct.|

<h2 id="tocS_GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse">GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1executedevicecommandresponse"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse"></a>
<a id="tocSgooglehomeenterprisesdmv1executedevicecommandresponse"></a>
<a id="tocsgooglehomeenterprisesdmv1executedevicecommandresponse"></a>

```json
{
  "results": {
    "property1": null,
    "property2": null
  }
}
```

Response message for SmartDeviceManagementService.ExecuteDeviceCommand

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|The results of executing the command.|

<h2 id="tocS_GoogleHomeEnterpriseSdmV1ListDevicesResponse">GoogleHomeEnterpriseSdmV1ListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1listdevicesresponse"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1ListDevicesResponse"></a>
<a id="tocSgooglehomeenterprisesdmv1listdevicesresponse"></a>
<a id="tocsgooglehomeenterprisesdmv1listdevicesresponse"></a>

```json
{
  "devices": [
    {
      "name": "string",
      "parentRelations": [
        {
          "displayName": "string",
          "parent": "string"
        }
      ],
      "traits": {
        "property1": null,
        "property2": null
      },
      "type": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for SmartDeviceManagementService.ListDevices

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[GoogleHomeEnterpriseSdmV1Device](#schemagooglehomeenterprisesdmv1device)]|false|none|The list of devices.|
|nextPageToken|string|false|none|The pagination token to retrieve the next page of results.|

<h2 id="tocS_GoogleHomeEnterpriseSdmV1ListRoomsResponse">GoogleHomeEnterpriseSdmV1ListRoomsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1listroomsresponse"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1ListRoomsResponse"></a>
<a id="tocSgooglehomeenterprisesdmv1listroomsresponse"></a>
<a id="tocsgooglehomeenterprisesdmv1listroomsresponse"></a>

```json
{
  "nextPageToken": "string",
  "rooms": [
    {
      "name": "string",
      "traits": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Response message for SmartDeviceManagementService.ListRooms

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages.|
|rooms|[[GoogleHomeEnterpriseSdmV1Room](#schemagooglehomeenterprisesdmv1room)]|false|none|The list of rooms.|

<h2 id="tocS_GoogleHomeEnterpriseSdmV1ListStructuresResponse">GoogleHomeEnterpriseSdmV1ListStructuresResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1liststructuresresponse"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1ListStructuresResponse"></a>
<a id="tocSgooglehomeenterprisesdmv1liststructuresresponse"></a>
<a id="tocsgooglehomeenterprisesdmv1liststructuresresponse"></a>

```json
{
  "nextPageToken": "string",
  "structures": [
    {
      "name": "string",
      "traits": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Response message for SmartDeviceManagementService.ListStructures

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages.|
|structures|[[GoogleHomeEnterpriseSdmV1Structure](#schemagooglehomeenterprisesdmv1structure)]|false|none|The list of structures.|

<h2 id="tocS_GoogleHomeEnterpriseSdmV1ParentRelation">GoogleHomeEnterpriseSdmV1ParentRelation</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1parentrelation"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1ParentRelation"></a>
<a id="tocSgooglehomeenterprisesdmv1parentrelation"></a>
<a id="tocsgooglehomeenterprisesdmv1parentrelation"></a>

```json
{
  "displayName": "string",
  "parent": "string"
}
```

Represents device relationships, for instance, structure/room to which the device is assigned to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to.|
|parent|string|false|read-only|Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123"|

<h2 id="tocS_GoogleHomeEnterpriseSdmV1Room">GoogleHomeEnterpriseSdmV1Room</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1room"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1Room"></a>
<a id="tocSgooglehomeenterprisesdmv1room"></a>
<a id="tocsgooglehomeenterprisesdmv1room"></a>

```json
{
  "name": "string",
  "traits": {
    "property1": null,
    "property2": null
  }
}
```

Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123".|
|traits|object|false|none|Room traits.|

<h2 id="tocS_GoogleHomeEnterpriseSdmV1Structure">GoogleHomeEnterpriseSdmV1Structure</h2>
<!-- backwards compatibility -->
<a id="schemagooglehomeenterprisesdmv1structure"></a>
<a id="schema_GoogleHomeEnterpriseSdmV1Structure"></a>
<a id="tocSgooglehomeenterprisesdmv1structure"></a>
<a id="tocsgooglehomeenterprisesdmv1structure"></a>

```json
{
  "name": "string",
  "traits": {
    "property1": null,
    "property2": null
  }
}
```

Structure resource represents an instance of enterprise managed home or hotel room.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC".|
|traits|object|false|none|Structure traits.|
