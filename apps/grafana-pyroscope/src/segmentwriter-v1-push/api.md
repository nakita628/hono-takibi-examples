<h1 id="segmentwriterv1">segmentwriter.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="segmentwriterv1-segmentwriterv1segmentwriterservice">segmentwriter.v1.SegmentWriterService</h1>

## Push

<a id="opIdsegmentwriter.v1.SegmentWriterService.Push"></a>

> Code samples

```bash
curl http://localhost:4040/segmentwriter.v1.SegmentWriterService/Push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "tenantId": "string",
    "labels": [
      {
        "name": "service_name",
        "value": "my_service"
      }
    ],
    "profile": "string",
    "profileId": "string",
    "shard": 0,
    "annotations": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  }'
```

`POST /segmentwriter.v1.SegmentWriterService/Push`

> Body parameter

```json
{
  "tenantId": "string",
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "profile": "string",
  "profileId": "string",
  "shard": 0,
  "annotations": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="push-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[segmentwriter.v1.PushRequest](#schemasegmentwriter.v1.pushrequest)|true|none|
|» tenantId|body|string|false|Unique identifier for the tenant submitting the request.|
|» labels|body|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|Label KV pairs of the series the profile belongs to.|
|» profile|body|string(byte)|false|Profile data in binary format. Default format is pprof.|
|» profileId|body|string(byte)|false|Unique identifier of the profile.|
|» shard|body|integer|false|Shard identifier the profile belongs to.|
|» annotations|body|[[types.v1.ProfileAnnotation](#schematypes.v1.profileannotation)]|false|Profile annotations with additional metadata.|

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

<h3 id="push-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[segmentwriter.v1.PushResponse](#schemasegmentwriter.v1.pushresponse)|
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

<h2 id="tocS_segmentwriter.v1.PushRequest">segmentwriter.v1.PushRequest</h2>
<!-- backwards compatibility -->
<a id="schemasegmentwriter.v1.pushrequest"></a>
<a id="schema_segmentwriter.v1.PushRequest"></a>
<a id="tocSsegmentwriter.v1.pushrequest"></a>
<a id="tocssegmentwriter.v1.pushrequest"></a>

```json
{
  "tenantId": "string",
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "profile": "string",
  "profileId": "string",
  "shard": 0,
  "annotations": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenantId|string|false|none|Unique identifier for the tenant submitting the request.|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|Label KV pairs of the series the profile belongs to.|
|profile|string(byte)|false|none|Profile data in binary format. Default format is pprof.|
|profileId|string(byte)|false|none|Unique identifier of the profile.|
|shard|integer|false|none|Shard identifier the profile belongs to.|
|annotations|[[types.v1.ProfileAnnotation](#schematypes.v1.profileannotation)]|false|none|Profile annotations with additional metadata.|

<h2 id="tocS_segmentwriter.v1.PushResponse">segmentwriter.v1.PushResponse</h2>
<!-- backwards compatibility -->
<a id="schemasegmentwriter.v1.pushresponse"></a>
<a id="schema_segmentwriter.v1.PushResponse"></a>
<a id="tocSsegmentwriter.v1.pushresponse"></a>
<a id="tocssegmentwriter.v1.pushresponse"></a>

```json
{}
```

<h2 id="tocS_types.v1.LabelPair">types.v1.LabelPair</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelpair"></a>
<a id="schema_types.v1.LabelPair"></a>
<a id="tocStypes.v1.labelpair"></a>
<a id="tocstypes.v1.labelpair"></a>

```json
{
  "name": "service_name",
  "value": "my_service"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Label name|
|value|string|false|none|Label value|

<h2 id="tocS_types.v1.ProfileAnnotation">types.v1.ProfileAnnotation</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.profileannotation"></a>
<a id="schema_types.v1.ProfileAnnotation"></a>
<a id="tocStypes.v1.profileannotation"></a>
<a id="tocstypes.v1.profileannotation"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Annotations provide additional metadata for a profile.

 The main differences between labels and annotations are:
   - annotations cannot be used in query selectors
   - annotation keys don't have to be unique

 Currently annotations are applied internally by distributors,
 any annotation passed via the push API will be dropped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Annotation key [hidden]|
|value|string|false|none|Annotation value [hidden]|
