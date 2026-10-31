<h1 id="capabilitiesv1">capabilities.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="capabilitiesv1-capabilitiesv1featureflagsservice">capabilities.v1.FeatureFlagsService</h1>

## Retrieve feature flags that are enabled for a particular tenant

<a id="opIdcapabilities.v1.FeatureFlagsService.GetFeatureFlags"></a>

> Code samples

```bash
curl http://localhost:4040/capabilities.v1.FeatureFlagsService/GetFeatureFlags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /capabilities.v1.FeatureFlagsService/GetFeatureFlags`

Retrieve feature flags that are enabled for a particular tenant

> Body parameter

```json
{}
```

<h3 id="retrieve-feature-flags-that-are-enabled-for-a-particular-tenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[capabilities.v1.GetFeatureFlagsRequest](#schemacapabilities.v1.getfeatureflagsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "featureFlags": [
    {
      "name": "string",
      "enabled": true,
      "description": "string",
      "documentationUrl": "string"
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

<h3 id="retrieve-feature-flags-that-are-enabled-for-a-particular-tenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[capabilities.v1.GetFeatureFlagsResponse](#schemacapabilities.v1.getfeatureflagsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_capabilities.v1.FeatureFlag">capabilities.v1.FeatureFlag</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities.v1.featureflag"></a>
<a id="schema_capabilities.v1.FeatureFlag"></a>
<a id="tocScapabilities.v1.featureflag"></a>
<a id="tocscapabilities.v1.featureflag"></a>

```json
{
  "name": "string",
  "enabled": true,
  "description": "string",
  "documentationUrl": "string"
}
```

FeatureParameters contains the per feature flag parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the feature, please use lower camel case.|
|enabled|boolean|false|none|Wether the feature flag is enabled or disabled.|
|description|string \| null|false|none|Optional description of the feature flag.|
|documentationUrl|string \| null|false|none|Optional URL to the documentation page of the feature flag.|

<h2 id="tocS_capabilities.v1.GetFeatureFlagsRequest">capabilities.v1.GetFeatureFlagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities.v1.getfeatureflagsrequest"></a>
<a id="schema_capabilities.v1.GetFeatureFlagsRequest"></a>
<a id="tocScapabilities.v1.getfeatureflagsrequest"></a>
<a id="tocscapabilities.v1.getfeatureflagsrequest"></a>

```json
{}
```

<h2 id="tocS_capabilities.v1.GetFeatureFlagsResponse">capabilities.v1.GetFeatureFlagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities.v1.getfeatureflagsresponse"></a>
<a id="schema_capabilities.v1.GetFeatureFlagsResponse"></a>
<a id="tocScapabilities.v1.getfeatureflagsresponse"></a>
<a id="tocscapabilities.v1.getfeatureflagsresponse"></a>

```json
{
  "featureFlags": [
    {
      "name": "string",
      "enabled": true,
      "description": "string",
      "documentationUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureFlags|[[capabilities.v1.FeatureFlag](#schemacapabilities.v1.featureflag)]|false|none|Map containing all features, also disable features are returned|

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
