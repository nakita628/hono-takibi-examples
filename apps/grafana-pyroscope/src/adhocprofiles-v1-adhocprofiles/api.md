<h1 id="adhocprofilesv1">adhocprofiles.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="adhocprofilesv1-adhocprofilesv1adhocprofileservice">adhocprofiles.v1.AdHocProfileService</h1>

## Computes a diff flamegraph from two previously uploaded profiles.

<a id="opIdadhocprofiles.v1.AdHocProfileService.Diff"></a>

> Code samples

```bash
curl http://localhost:4040/adhocprofiles.v1.AdHocProfileService/Diff \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "leftId": "string",
    "rightId": "string",
    "profileType": "string",
    "maxNodes": 0
  }'
```

`POST /adhocprofiles.v1.AdHocProfileService/Diff`

Computes a diff flamegraph from two previously uploaded profiles.

> Body parameter

```json
{
  "leftId": "string",
  "rightId": "string",
  "profileType": "string",
  "maxNodes": 0
}
```

<h3 id="computes-a-diff-flamegraph-from-two-previously-uploaded-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[adhocprofiles.v1.AdHocProfilesDiffRequest](#schemaadhocprofiles.v1.adhocprofilesdiffrequest)|true|none|
|» leftId|body|string|false|none|
|» rightId|body|string|false|none|
|» profileType|body|string \| null|false|none|
|» maxNodes|body|integer \| string(int64) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "profileTypes": [
    "string"
  ],
  "flamebearerProfile": "string"
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

<h3 id="computes-a-diff-flamegraph-from-two-previously-uploaded-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[adhocprofiles.v1.AdHocProfilesDiffResponse](#schemaadhocprofiles.v1.adhocprofilesdiffresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves a profile from the underlying store by id and an optional sample type. The response is similar to the one for the upload method.

<a id="opIdadhocprofiles.v1.AdHocProfileService.Get"></a>

> Code samples

```bash
curl http://localhost:4040/adhocprofiles.v1.AdHocProfileService/Get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "id": "string",
    "profileType": "string",
    "maxNodes": 0
  }'
```

`POST /adhocprofiles.v1.AdHocProfileService/Get`

Retrieves a profile from the underlying store by id and an optional sample type. The response is similar to the one
 for the upload method.

> Body parameter

```json
{
  "id": "string",
  "profileType": "string",
  "maxNodes": 0
}
```

<h3 id="retrieves-a-profile-from-the-underlying-store-by-id-and-an-optional-sample-type-the-response-is-similar-to-the-one-for-the-upload-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[adhocprofiles.v1.AdHocProfilesGetRequest](#schemaadhocprofiles.v1.adhocprofilesgetrequest)|true|none|
|» id|body|string|false|The unique identifier of the profile.|
|» profileType|body|string \| null|false|The desired profile type (e.g., cpu, samples) for the returned flame graph. If omitted the first profile is returned.|
|» maxNodes|body|integer \| string(int64) \| null|false|Max nodes can be used to truncate the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "uploadedAt": 0,
  "profileType": "string",
  "profileTypes": [
    "string"
  ],
  "flamebearerProfile": "string"
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

<h3 id="retrieves-a-profile-from-the-underlying-store-by-id-and-an-optional-sample-type-the-response-is-similar-to-the-one-for-the-upload-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[adhocprofiles.v1.AdHocProfilesGetResponse](#schemaadhocprofiles.v1.adhocprofilesgetresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves a list of profiles found in the underlying store.

<a id="opIdadhocprofiles.v1.AdHocProfileService.List"></a>

> Code samples

```bash
curl http://localhost:4040/adhocprofiles.v1.AdHocProfileService/List \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /adhocprofiles.v1.AdHocProfileService/List`

Retrieves a list of profiles found in the underlying store.

> Body parameter

```json
{}
```

<h3 id="retrieves-a-list-of-profiles-found-in-the-underlying-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[adhocprofiles.v1.AdHocProfilesListRequest](#schemaadhocprofiles.v1.adhocprofileslistrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "profiles": [
    {
      "id": "string",
      "name": "string",
      "uploadedAt": 0
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

<h3 id="retrieves-a-list-of-profiles-found-in-the-underlying-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[adhocprofiles.v1.AdHocProfilesListResponse](#schemaadhocprofiles.v1.adhocprofileslistresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Upload a profile to the underlying store. The request contains a name and a base64 encoded pprof file. The response contains a generated unique identifier, a flamegraph and a list of found sample types within the profile.

<a id="opIdadhocprofiles.v1.AdHocProfileService.Upload"></a>

> Code samples

```bash
curl http://localhost:4040/adhocprofiles.v1.AdHocProfileService/Upload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "name": "string",
    "profile": "string",
    "maxNodes": 0
  }'
```

`POST /adhocprofiles.v1.AdHocProfileService/Upload`

Upload a profile to the underlying store. The request contains a name and a base64 encoded pprof file. The response
 contains a generated unique identifier, a flamegraph and a list of found sample types within the profile.

> Body parameter

```json
{
  "name": "string",
  "profile": "string",
  "maxNodes": 0
}
```

<h3 id="upload-a-profile-to-the-underlying-store-the-request-contains-a-name-and-a-base64-encoded-pprof-file-the-response-contains-a-generated-unique-identifier-a-flamegraph-and-a-list-of-found-sample-types-within-the-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[adhocprofiles.v1.AdHocProfilesUploadRequest](#schemaadhocprofiles.v1.adhocprofilesuploadrequest)|true|none|
|» name|body|string|false|This is typically the file name and it serves as a human readable name for the profile.|
|» profile|body|string|false|This is the profile encoded in base64. The supported formats are pprof, json, collapsed and perf-script.|
|» maxNodes|body|integer \| string(int64) \| null|false|Max nodes can be used to truncate the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "uploadedAt": 0,
  "profileType": "string",
  "profileTypes": [
    "string"
  ],
  "flamebearerProfile": "string"
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

<h3 id="upload-a-profile-to-the-underlying-store-the-request-contains-a-name-and-a-base64-encoded-pprof-file-the-response-contains-a-generated-unique-identifier-a-flamegraph-and-a-list-of-found-sample-types-within-the-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[adhocprofiles.v1.AdHocProfilesGetResponse](#schemaadhocprofiles.v1.adhocprofilesgetresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_adhocprofiles.v1.AdHocProfilesDiffRequest">adhocprofiles.v1.AdHocProfilesDiffRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadhocprofiles.v1.adhocprofilesdiffrequest"></a>
<a id="schema_adhocprofiles.v1.AdHocProfilesDiffRequest"></a>
<a id="tocSadhocprofiles.v1.adhocprofilesdiffrequest"></a>
<a id="tocsadhocprofiles.v1.adhocprofilesdiffrequest"></a>

```json
{
  "leftId": "string",
  "rightId": "string",
  "profileType": "string",
  "maxNodes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leftId|string|false|none|none|
|rightId|string|false|none|none|
|profileType|string \| null|false|none|none|
|maxNodes|integer \| string(int64) \| null|false|none|none|

<h2 id="tocS_adhocprofiles.v1.AdHocProfilesDiffResponse">adhocprofiles.v1.AdHocProfilesDiffResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadhocprofiles.v1.adhocprofilesdiffresponse"></a>
<a id="schema_adhocprofiles.v1.AdHocProfilesDiffResponse"></a>
<a id="tocSadhocprofiles.v1.adhocprofilesdiffresponse"></a>
<a id="tocsadhocprofiles.v1.adhocprofilesdiffresponse"></a>

```json
{
  "profileTypes": [
    "string"
  ],
  "flamebearerProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypes|[string]|false|none|none|
|flamebearerProfile|string|false|none|none|

<h2 id="tocS_adhocprofiles.v1.AdHocProfilesGetRequest">adhocprofiles.v1.AdHocProfilesGetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadhocprofiles.v1.adhocprofilesgetrequest"></a>
<a id="schema_adhocprofiles.v1.AdHocProfilesGetRequest"></a>
<a id="tocSadhocprofiles.v1.adhocprofilesgetrequest"></a>
<a id="tocsadhocprofiles.v1.adhocprofilesgetrequest"></a>

```json
{
  "id": "string",
  "profileType": "string",
  "maxNodes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the profile.|
|profileType|string \| null|false|none|The desired profile type (e.g., cpu, samples) for the returned flame graph. If omitted the first profile is returned.|
|maxNodes|integer \| string(int64) \| null|false|none|Max nodes can be used to truncate the response.|

<h2 id="tocS_adhocprofiles.v1.AdHocProfilesGetResponse">adhocprofiles.v1.AdHocProfilesGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadhocprofiles.v1.adhocprofilesgetresponse"></a>
<a id="schema_adhocprofiles.v1.AdHocProfilesGetResponse"></a>
<a id="tocSadhocprofiles.v1.adhocprofilesgetresponse"></a>
<a id="tocsadhocprofiles.v1.adhocprofilesgetresponse"></a>

```json
{
  "id": "string",
  "name": "string",
  "uploadedAt": 0,
  "profileType": "string",
  "profileTypes": [
    "string"
  ],
  "flamebearerProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|uploadedAt|integer \| string(int64)|false|none|timestamp in milliseconds|
|profileType|string|false|none|none|
|profileTypes|[string]|false|none|Some profiles formats (like pprof) can contain multiple profile (sample) types inside. One of these can be passed<br> in the Get request using the profile_type field.|
|flamebearerProfile|string|false|none|none|

<h2 id="tocS_adhocprofiles.v1.AdHocProfilesListRequest">adhocprofiles.v1.AdHocProfilesListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadhocprofiles.v1.adhocprofileslistrequest"></a>
<a id="schema_adhocprofiles.v1.AdHocProfilesListRequest"></a>
<a id="tocSadhocprofiles.v1.adhocprofileslistrequest"></a>
<a id="tocsadhocprofiles.v1.adhocprofileslistrequest"></a>

```json
{}
```

<h2 id="tocS_adhocprofiles.v1.AdHocProfilesListResponse">adhocprofiles.v1.AdHocProfilesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadhocprofiles.v1.adhocprofileslistresponse"></a>
<a id="schema_adhocprofiles.v1.AdHocProfilesListResponse"></a>
<a id="tocSadhocprofiles.v1.adhocprofileslistresponse"></a>
<a id="tocsadhocprofiles.v1.adhocprofileslistresponse"></a>

```json
{
  "profiles": [
    {
      "id": "string",
      "name": "string",
      "uploadedAt": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profiles|[[adhocprofiles.v1.AdHocProfilesProfileMetadata](#schemaadhocprofiles.v1.adhocprofilesprofilemetadata)]|false|none|none|

<h2 id="tocS_adhocprofiles.v1.AdHocProfilesProfileMetadata">adhocprofiles.v1.AdHocProfilesProfileMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaadhocprofiles.v1.adhocprofilesprofilemetadata"></a>
<a id="schema_adhocprofiles.v1.AdHocProfilesProfileMetadata"></a>
<a id="tocSadhocprofiles.v1.adhocprofilesprofilemetadata"></a>
<a id="tocsadhocprofiles.v1.adhocprofilesprofilemetadata"></a>

```json
{
  "id": "string",
  "name": "string",
  "uploadedAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|uploadedAt|integer \| string(int64)|false|none|timestamp in milliseconds|

<h2 id="tocS_adhocprofiles.v1.AdHocProfilesUploadRequest">adhocprofiles.v1.AdHocProfilesUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadhocprofiles.v1.adhocprofilesuploadrequest"></a>
<a id="schema_adhocprofiles.v1.AdHocProfilesUploadRequest"></a>
<a id="tocSadhocprofiles.v1.adhocprofilesuploadrequest"></a>
<a id="tocsadhocprofiles.v1.adhocprofilesuploadrequest"></a>

```json
{
  "name": "string",
  "profile": "string",
  "maxNodes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|This is typically the file name and it serves as a human readable name for the profile.|
|profile|string|false|none|This is the profile encoded in base64. The supported formats are pprof, json, collapsed and perf-script.|
|maxNodes|integer \| string(int64) \| null|false|none|Max nodes can be used to truncate the response.|

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
