<h1 id="pushv1">push.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="pushv1-scopepublic">scope/public</h1>

This operation is considered part of the public API scope

## Push

<a id="opIdpush.v1.PusherService.Push"></a>

> Code samples

```bash
curl http://localhost:4040/push.v1.PusherService/Push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "series": [
      {
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ],
        "samples": [
          {
            "rawProfile": "PROFILE_BASE64",
            "ID": "734FD599-6865-419E-9475-932762D8F469"
          }
        ],
        "annotations": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    ]
  }'
```

`POST /push.v1.PusherService/Push`

> Body parameter

```json
{
  "series": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "samples": [
        {
          "rawProfile": "PROFILE_BASE64",
          "ID": "734FD599-6865-419E-9475-932762D8F469"
        }
      ],
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

<h3 id="push-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[push.v1.PushRequest](#schemapush.v1.pushrequest)|true|none|
|» series|body|[[push.v1.RawProfileSeries](#schemapush.v1.rawprofileseries)]|false|series is a set raw pprof profiles and accompanying labels|

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
|200|OK|Success|[push.v1.PushResponse](#schemapush.v1.pushresponse)|
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

<h2 id="tocS_push.v1.PushRequest">push.v1.PushRequest</h2>
<!-- backwards compatibility -->
<a id="schemapush.v1.pushrequest"></a>
<a id="schema_push.v1.PushRequest"></a>
<a id="tocSpush.v1.pushrequest"></a>
<a id="tocspush.v1.pushrequest"></a>

```json
{
  "series": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "samples": [
        {
          "rawProfile": "PROFILE_BASE64",
          "ID": "734FD599-6865-419E-9475-932762D8F469"
        }
      ],
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

WriteRawRequest writes a pprof profile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|series|[[push.v1.RawProfileSeries](#schemapush.v1.rawprofileseries)]|false|none|series is a set raw pprof profiles and accompanying labels|

<h2 id="tocS_push.v1.PushResponse">push.v1.PushResponse</h2>
<!-- backwards compatibility -->
<a id="schemapush.v1.pushresponse"></a>
<a id="schema_push.v1.PushResponse"></a>
<a id="tocSpush.v1.pushresponse"></a>
<a id="tocspush.v1.pushresponse"></a>

```json
{}
```

<h2 id="tocS_push.v1.RawProfileSeries">push.v1.RawProfileSeries</h2>
<!-- backwards compatibility -->
<a id="schemapush.v1.rawprofileseries"></a>
<a id="schema_push.v1.RawProfileSeries"></a>
<a id="tocSpush.v1.rawprofileseries"></a>
<a id="tocspush.v1.rawprofileseries"></a>

```json
{
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "samples": [
    {
      "rawProfile": "PROFILE_BASE64",
      "ID": "734FD599-6865-419E-9475-932762D8F469"
    }
  ],
  "annotations": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

RawProfileSeries represents the pprof profile and its associated labels

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|LabelPair is the key value pairs to identify the corresponding profile|
|samples|[[push.v1.RawSample](#schemapush.v1.rawsample)]|false|none|samples are the set of profile bytes|
|annotations|[[types.v1.ProfileAnnotation](#schematypes.v1.profileannotation)]|false|none|Annotations provide additional metadata for a profile.<br><br> The main differences between labels and annotations are:<br>  - annotations cannot be used in query selectors<br>  - annotation keys don't have to be unique<br><br> Currently annotations are applied internally by distributors,<br> any annotation passed via the push API will be dropped.|

<h2 id="tocS_push.v1.RawSample">push.v1.RawSample</h2>
<!-- backwards compatibility -->
<a id="schemapush.v1.rawsample"></a>
<a id="schema_push.v1.RawSample"></a>
<a id="tocSpush.v1.rawsample"></a>
<a id="tocspush.v1.rawsample"></a>

```json
{
  "rawProfile": "PROFILE_BASE64",
  "ID": "734FD599-6865-419E-9475-932762D8F469"
}
```

RawSample is the set of bytes that correspond to a pprof profile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawProfile|string(byte)|false|none|raw_profile is the set of bytes of the pprof profile|
|ID|string|false|none|UUID of the profile|

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
