<h1 id="metastorev1">metastore.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="metastorev1-metastorev1tenantservice">metastore.v1.TenantService</h1>

## DeleteTenant

<a id="opIdmetastore.v1.TenantService.DeleteTenant"></a>

> Code samples

```bash
curl http://localhost:4040/metastore.v1.TenantService/DeleteTenant \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "tenantId": "string"
  }'
```

`POST /metastore.v1.TenantService/DeleteTenant`

> Body parameter

```json
{
  "tenantId": "string"
}
```

<h3 id="deletetenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[metastore.v1.DeleteTenantRequest](#schemametastore.v1.deletetenantrequest)|true|none|
|» tenantId|body|string|false|none|

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

<h3 id="deletetenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[metastore.v1.DeleteTenantResponse](#schemametastore.v1.deletetenantresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GetTenant

<a id="opIdmetastore.v1.TenantService.GetTenant"></a>

> Code samples

```bash
curl http://localhost:4040/metastore.v1.TenantService/GetTenant \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "tenantId": "string"
  }'
```

`POST /metastore.v1.TenantService/GetTenant`

> Body parameter

```json
{
  "tenantId": "string"
}
```

<h3 id="gettenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[metastore.v1.GetTenantRequest](#schemametastore.v1.gettenantrequest)|true|none|
|» tenantId|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "stats": {
    "dataIngested": true,
    "oldestProfileTime": 0,
    "newestProfileTime": 0
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

<h3 id="gettenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[metastore.v1.GetTenantResponse](#schemametastore.v1.gettenantresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GetTenants

<a id="opIdmetastore.v1.TenantService.GetTenants"></a>

> Code samples

```bash
curl http://localhost:4040/metastore.v1.TenantService/GetTenants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /metastore.v1.TenantService/GetTenants`

> Body parameter

```json
{}
```

<h3 id="gettenants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[metastore.v1.GetTenantsRequest](#schemametastore.v1.gettenantsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "tenantIds": [
    "string"
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

<h3 id="gettenants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[metastore.v1.GetTenantsResponse](#schemametastore.v1.gettenantsresponse)|
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

<h2 id="tocS_metastore.v1.DeleteTenantRequest">metastore.v1.DeleteTenantRequest</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.deletetenantrequest"></a>
<a id="schema_metastore.v1.DeleteTenantRequest"></a>
<a id="tocSmetastore.v1.deletetenantrequest"></a>
<a id="tocsmetastore.v1.deletetenantrequest"></a>

```json
{
  "tenantId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenantId|string|false|none|none|

<h2 id="tocS_metastore.v1.DeleteTenantResponse">metastore.v1.DeleteTenantResponse</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.deletetenantresponse"></a>
<a id="schema_metastore.v1.DeleteTenantResponse"></a>
<a id="tocSmetastore.v1.deletetenantresponse"></a>
<a id="tocsmetastore.v1.deletetenantresponse"></a>

```json
{}
```

<h2 id="tocS_metastore.v1.GetTenantRequest">metastore.v1.GetTenantRequest</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.gettenantrequest"></a>
<a id="schema_metastore.v1.GetTenantRequest"></a>
<a id="tocSmetastore.v1.gettenantrequest"></a>
<a id="tocsmetastore.v1.gettenantrequest"></a>

```json
{
  "tenantId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenantId|string|false|none|none|

<h2 id="tocS_metastore.v1.GetTenantResponse">metastore.v1.GetTenantResponse</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.gettenantresponse"></a>
<a id="schema_metastore.v1.GetTenantResponse"></a>
<a id="tocSmetastore.v1.gettenantresponse"></a>
<a id="tocsmetastore.v1.gettenantresponse"></a>

```json
{
  "stats": {
    "dataIngested": true,
    "oldestProfileTime": 0,
    "newestProfileTime": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stats|[metastore.v1.TenantStats](#schemametastore.v1.tenantstats)|false|none|none|

<h2 id="tocS_metastore.v1.GetTenantsRequest">metastore.v1.GetTenantsRequest</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.gettenantsrequest"></a>
<a id="schema_metastore.v1.GetTenantsRequest"></a>
<a id="tocSmetastore.v1.gettenantsrequest"></a>
<a id="tocsmetastore.v1.gettenantsrequest"></a>

```json
{}
```

<h2 id="tocS_metastore.v1.GetTenantsResponse">metastore.v1.GetTenantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.gettenantsresponse"></a>
<a id="schema_metastore.v1.GetTenantsResponse"></a>
<a id="tocSmetastore.v1.gettenantsresponse"></a>
<a id="tocsmetastore.v1.gettenantsresponse"></a>

```json
{
  "tenantIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenantIds|[string]|false|none|none|

<h2 id="tocS_metastore.v1.TenantStats">metastore.v1.TenantStats</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.tenantstats"></a>
<a id="schema_metastore.v1.TenantStats"></a>
<a id="tocSmetastore.v1.tenantstats"></a>
<a id="tocsmetastore.v1.tenantstats"></a>

```json
{
  "dataIngested": true,
  "oldestProfileTime": 0,
  "newestProfileTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataIngested|boolean|false|none|Whether we received any data at any time in the past.|
|oldestProfileTime|integer \| string(int64)|false|none|Milliseconds since epoch.|
|newestProfileTime|integer \| string(int64)|false|none|Milliseconds since epoch.|
