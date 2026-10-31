<h1 id="settingsv1">settings.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="settingsv1-settingsv1settingsservice">settings.v1.SettingsService</h1>

## Delete

<a id="opIdsettings.v1.SettingsService.Delete"></a>

> Code samples

```bash
curl http://localhost:4040/settings.v1.SettingsService/Delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "name": "string"
  }'
```

`POST /settings.v1.SettingsService/Delete`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[settings.v1.DeleteSettingsRequest](#schemasettings.v1.deletesettingsrequest)|true|none|
|» name|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[settings.v1.DeleteSettingsResponse](#schemasettings.v1.deletesettingsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Get

<a id="opIdsettings.v1.SettingsService.Get"></a>

> Code samples

```bash
curl http://localhost:4040/settings.v1.SettingsService/Get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /settings.v1.SettingsService/Get`

> Body parameter

```json
{}
```

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[settings.v1.GetSettingsRequest](#schemasettings.v1.getsettingsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "settings": [
    {
      "name": "string",
      "value": "string",
      "modifiedAt": 0
    }
  ]
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[settings.v1.GetSettingsResponse](#schemasettings.v1.getsettingsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Set

<a id="opIdsettings.v1.SettingsService.Set"></a>

> Code samples

```bash
curl http://localhost:4040/settings.v1.SettingsService/Set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "setting": {
      "name": "string",
      "value": "string",
      "modifiedAt": 0
    }
  }'
```

`POST /settings.v1.SettingsService/Set`

> Body parameter

```json
{
  "setting": {
    "name": "string",
    "value": "string",
    "modifiedAt": 0
  }
}
```

<h3 id="set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[settings.v1.SetSettingsRequest](#schemasettings.v1.setsettingsrequest)|true|none|
|» setting|body|[settings.v1.Setting](#schemasettings.v1.setting)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "setting": {
    "name": "string",
    "value": "string",
    "modifiedAt": 0
  }
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[settings.v1.SetSettingsResponse](#schemasettings.v1.setsettingsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_connect-protocol-version">connect-protocol-version</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-protocol-version"></a>
<a id="schema_connect-protocol-version"></a>
<a id="tocSconnect-protocol-version"></a>
<a id="tocsconnect-protocol-version"></a>

```json
1
```

Define the version of the Connect protocol

<h2 id="tocS_connect-timeout-header">connect-timeout-header</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-timeout-header"></a>
<a id="schema_connect-timeout-header"></a>
<a id="tocSconnect-timeout-header"></a>
<a id="tocsconnect-timeout-header"></a>

```json
0
```

Define the timeout, in ms

<h2 id="tocS_connect.error">connect.error</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error"></a>
<a id="schema_connect.error"></a>
<a id="tocSconnect.error"></a>
<a id="tocsconnect.error"></a>

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

Error type returned by Connect: https://connectrpc.com/docs/go/errors/#http-representation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.|
|details|[[connect.error_details.Any](#schemaconnect.error_details.any)]|false|none|A list of messages that carry the error details. There is no limit on the number of messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|canceled|
|code|unknown|
|code|invalid_argument|
|code|deadline_exceeded|
|code|not_found|
|code|already_exists|
|code|permission_denied|
|code|resource_exhausted|
|code|failed_precondition|
|code|aborted|
|code|out_of_range|
|code|unimplemented|
|code|internal|
|code|unavailable|
|code|data_loss|
|code|unauthenticated|

<h2 id="tocS_connect.error_details.Any">connect.error_details.Any</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error_details.any"></a>
<a id="schema_connect.error_details.Any"></a>
<a id="tocSconnect.error_details.any"></a>
<a id="tocsconnect.error_details.any"></a>

```json
{
  "type": "string",
  "value": "string",
  "debug": {}
}
```

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message, with an additional debug field for ConnectRPC error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|A URL that acts as a globally unique identifier for the type of the serialized message. For example: `type.googleapis.com/google.rpc.ErrorInfo`. This is used to determine the schema of the data in the `value` field and is the discriminator for the `debug` field.|
|value|string(binary)|false|none|The Protobuf message, serialized as bytes and base64-encoded. The specific message type is identified by the `type` field.|
|debug|object|false|none|Deserialized error detail payload. The 'type' field indicates the schema. This field is for easier debugging and should not be relied upon for application logic.|

<h2 id="tocS_settings.v1.DeleteSettingsRequest">settings.v1.DeleteSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.deletesettingsrequest"></a>
<a id="schema_settings.v1.DeleteSettingsRequest"></a>
<a id="tocSsettings.v1.deletesettingsrequest"></a>
<a id="tocssettings.v1.deletesettingsrequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_settings.v1.DeleteSettingsResponse">settings.v1.DeleteSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.deletesettingsresponse"></a>
<a id="schema_settings.v1.DeleteSettingsResponse"></a>
<a id="tocSsettings.v1.deletesettingsresponse"></a>
<a id="tocssettings.v1.deletesettingsresponse"></a>

```json
{}
```

<h2 id="tocS_settings.v1.GetSettingsRequest">settings.v1.GetSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.getsettingsrequest"></a>
<a id="schema_settings.v1.GetSettingsRequest"></a>
<a id="tocSsettings.v1.getsettingsrequest"></a>
<a id="tocssettings.v1.getsettingsrequest"></a>

```json
{}
```

<h2 id="tocS_settings.v1.GetSettingsResponse">settings.v1.GetSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.getsettingsresponse"></a>
<a id="schema_settings.v1.GetSettingsResponse"></a>
<a id="tocSsettings.v1.getsettingsresponse"></a>
<a id="tocssettings.v1.getsettingsresponse"></a>

```json
{
  "settings": [
    {
      "name": "string",
      "value": "string",
      "modifiedAt": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[[settings.v1.Setting](#schemasettings.v1.setting)]|false|none|none|

<h2 id="tocS_settings.v1.SetSettingsRequest">settings.v1.SetSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.setsettingsrequest"></a>
<a id="schema_settings.v1.SetSettingsRequest"></a>
<a id="tocSsettings.v1.setsettingsrequest"></a>
<a id="tocssettings.v1.setsettingsrequest"></a>

```json
{
  "setting": {
    "name": "string",
    "value": "string",
    "modifiedAt": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setting|[settings.v1.Setting](#schemasettings.v1.setting)|false|none|none|

<h2 id="tocS_settings.v1.SetSettingsResponse">settings.v1.SetSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.setsettingsresponse"></a>
<a id="schema_settings.v1.SetSettingsResponse"></a>
<a id="tocSsettings.v1.setsettingsresponse"></a>
<a id="tocssettings.v1.setsettingsresponse"></a>

```json
{
  "setting": {
    "name": "string",
    "value": "string",
    "modifiedAt": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setting|[settings.v1.Setting](#schemasettings.v1.setting)|false|none|none|

<h2 id="tocS_settings.v1.Setting">settings.v1.Setting</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.setting"></a>
<a id="schema_settings.v1.Setting"></a>
<a id="tocSsettings.v1.setting"></a>
<a id="tocssettings.v1.setting"></a>

```json
{
  "name": "string",
  "value": "string",
  "modifiedAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|string|false|none|none|
|modifiedAt|integer \| string(int64)|false|none|none|
