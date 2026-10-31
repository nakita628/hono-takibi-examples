<h1 id="debuginfov1">debuginfo.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

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

<h2 id="tocS_debuginfo.v1.FileMetadata">debuginfo.v1.FileMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1.filemetadata"></a>
<a id="schema_debuginfo.v1.FileMetadata"></a>
<a id="tocSdebuginfo.v1.filemetadata"></a>
<a id="tocsdebuginfo.v1.filemetadata"></a>

```json
{
  "GNU": "string",
  "Golang": "string",
  "OpenTelemetry": "string",
  "Name": "string",
  "type": "DEBUGINFO_TYPE_EXECUTABLE_FULL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GNU|string|false|none|none|
|Golang|string|false|none|none|
|OpenTelemetry|string|false|none|optional libpf.FileID rom the otel profiler|
|Name|string|false|none|none|
|type|[debuginfo.v1.FileMetadata.DebuginfoType](#schemadebuginfo.v1.filemetadata.debuginfotype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DEBUGINFO_TYPE_EXECUTABLE_FULL|
|type|DEBUGINFO_TYPE_EXECUTABLE_NO_TEXT|

<h2 id="tocS_debuginfo.v1.FileMetadata.DebuginfoType">debuginfo.v1.FileMetadata.DebuginfoType</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1.filemetadata.debuginfotype"></a>
<a id="schema_debuginfo.v1.FileMetadata.DebuginfoType"></a>
<a id="tocSdebuginfo.v1.filemetadata.debuginfotype"></a>
<a id="tocsdebuginfo.v1.filemetadata.debuginfotype"></a>

```json
"DEBUGINFO_TYPE_EXECUTABLE_FULL"
```

<h2 id="tocS_debuginfo.v1.ShouldInitiateUploadRequest">debuginfo.v1.ShouldInitiateUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1.shouldinitiateuploadrequest"></a>
<a id="schema_debuginfo.v1.ShouldInitiateUploadRequest"></a>
<a id="tocSdebuginfo.v1.shouldinitiateuploadrequest"></a>
<a id="tocsdebuginfo.v1.shouldinitiateuploadrequest"></a>

```json
{
  "file": {
    "GNU": "string",
    "Golang": "string",
    "OpenTelemetry": "string",
    "Name": "string",
    "type": "DEBUGINFO_TYPE_EXECUTABLE_FULL"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[debuginfo.v1.FileMetadata](#schemadebuginfo.v1.filemetadata)|false|none|bool force = ;|

<h2 id="tocS_debuginfo.v1.ShouldInitiateUploadResponse">debuginfo.v1.ShouldInitiateUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1.shouldinitiateuploadresponse"></a>
<a id="schema_debuginfo.v1.ShouldInitiateUploadResponse"></a>
<a id="tocSdebuginfo.v1.shouldinitiateuploadresponse"></a>
<a id="tocsdebuginfo.v1.shouldinitiateuploadresponse"></a>

```json
{
  "shouldInitiateUpload": true,
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shouldInitiateUpload|boolean|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_debuginfo.v1.UploadChunk">debuginfo.v1.UploadChunk</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1.uploadchunk"></a>
<a id="schema_debuginfo.v1.UploadChunk"></a>
<a id="tocSdebuginfo.v1.uploadchunk"></a>
<a id="tocsdebuginfo.v1.uploadchunk"></a>

```json
{
  "chunk": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chunk|string(byte)|false|none|none|

<h2 id="tocS_debuginfo.v1.UploadRequest">debuginfo.v1.UploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1.uploadrequest"></a>
<a id="schema_debuginfo.v1.UploadRequest"></a>
<a id="tocSdebuginfo.v1.uploadrequest"></a>
<a id="tocsdebuginfo.v1.uploadrequest"></a>

```json
{
  "chunk": {
    "chunk": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|chunk|[debuginfo.v1.UploadChunk](#schemadebuginfo.v1.uploadchunk)|true|none|none|
|*oneOf*|object|false|none|none|
|init|[debuginfo.v1.ShouldInitiateUploadRequest](#schemadebuginfo.v1.shouldinitiateuploadrequest)|true|none|none|

<h2 id="tocS_debuginfo.v1.UploadResponse">debuginfo.v1.UploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1.uploadresponse"></a>
<a id="schema_debuginfo.v1.UploadResponse"></a>
<a id="tocSdebuginfo.v1.uploadresponse"></a>
<a id="tocsdebuginfo.v1.uploadresponse"></a>

```json
{
  "init": {
    "shouldInitiateUpload": true,
    "reason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|init|[debuginfo.v1.ShouldInitiateUploadResponse](#schemadebuginfo.v1.shouldinitiateuploadresponse)|true|none|none|
