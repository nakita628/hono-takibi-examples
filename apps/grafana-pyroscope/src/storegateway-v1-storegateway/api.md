<h1 id="storegatewayv1">storegateway.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="storegatewayv1-storegatewayv1storegatewayservice">storegateway.v1.StoreGatewayService</h1>

## BlockMetadata

<a id="opIdstoregateway.v1.StoreGatewayService.BlockMetadata"></a>

> Code samples

```bash
curl http://localhost:4040/storegateway.v1.StoreGatewayService/BlockMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "start": 0,
    "end": 0
  }'
```

`POST /storegateway.v1.StoreGatewayService/BlockMetadata`

> Body parameter

```json
{
  "start": 0,
  "end": 0
}
```

<h3 id="blockmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[ingester.v1.BlockMetadataRequest](#schemaingester.v1.blockmetadatarequest)|true|none|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "blocks": [
    {
      "ulid": "string",
      "minTime": 0,
      "maxTime": 0,
      "compaction": {
        "level": 0,
        "sources": [
          "string"
        ],
        "parents": [
          "string"
        ]
      },
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ]
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

<h3 id="blockmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ingester.v1.BlockMetadataResponse](#schemaingester.v1.blockmetadataresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GetBlockStats

<a id="opIdstoregateway.v1.StoreGatewayService.GetBlockStats"></a>

> Code samples

```bash
curl http://localhost:4040/storegateway.v1.StoreGatewayService/GetBlockStats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "ulids": [
      "string"
    ]
  }'
```

`POST /storegateway.v1.StoreGatewayService/GetBlockStats`

> Body parameter

```json
{
  "ulids": [
    "string"
  ]
}
```

<h3 id="getblockstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[ingester.v1.GetBlockStatsRequest](#schemaingester.v1.getblockstatsrequest)|true|none|
|» ulids|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "blockStats": [
    {
      "seriesCount": 0,
      "profileCount": 0,
      "sampleCount": 0,
      "indexBytes": 0,
      "profileBytes": 0,
      "symbolBytes": 0
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

<h3 id="getblockstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ingester.v1.GetBlockStatsResponse](#schemaingester.v1.getblockstatsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## LabelNames

<a id="opIdstoregateway.v1.StoreGatewayService.LabelNames"></a>

> Code samples

```bash
curl http://localhost:4040/storegateway.v1.StoreGatewayService/LabelNames \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "matchers": [
      "string"
    ],
    "start": "1676282400000",
    "end": "1676289600000"
  }'
```

`POST /storegateway.v1.StoreGatewayService/LabelNames`

> Body parameter

```json
{
  "matchers": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

<h3 id="labelnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[types.v1.LabelNamesRequest](#schematypes.v1.labelnamesrequest)|true|none|
|» matchers|body|[string]|false|List of Label selectors|
|» start|body|integer \| string(int64)|false|Query from this point in time, given in Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Query to this point in time, given in Milliseconds since epoch.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "names": [
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

<h3 id="labelnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[types.v1.LabelNamesResponse](#schematypes.v1.labelnamesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## LabelValues

<a id="opIdstoregateway.v1.StoreGatewayService.LabelValues"></a>

> Code samples

```bash
curl http://localhost:4040/storegateway.v1.StoreGatewayService/LabelValues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "name": "service_name",
    "matchers": [
      "string"
    ],
    "start": "1676282400000",
    "end": "1676289600000"
  }'
```

`POST /storegateway.v1.StoreGatewayService/LabelValues`

> Body parameter

```json
{
  "name": "service_name",
  "matchers": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

<h3 id="labelvalues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[types.v1.LabelValuesRequest](#schematypes.v1.labelvaluesrequest)|true|none|
|» name|body|string|false|Name of the label|
|» matchers|body|[string]|false|List of Label selectors|
|» start|body|integer \| string(int64)|false|Query from this point in time, given in Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Query to this point in time, given in Milliseconds since epoch.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "names": [
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

<h3 id="labelvalues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[types.v1.LabelValuesResponse](#schematypes.v1.labelvaluesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Deprecated: ProfileType call is deprecated in the store components TODO: Remove this call in release v1.4

<a id="opIdstoregateway.v1.StoreGatewayService.ProfileTypes"></a>

> Code samples

```bash
curl http://localhost:4040/storegateway.v1.StoreGatewayService/ProfileTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "start": 0,
    "end": 0
  }'
```

`POST /storegateway.v1.StoreGatewayService/ProfileTypes`

Deprecated: ProfileType call is deprecated in the store components
 TODO: Remove this call in release v1.4

> Body parameter

```json
{
  "start": 0,
  "end": 0
}
```

<h3 id="deprecated-profiletype-call-is-deprecated-in-the-store-components-todo-remove-this-call-in-release-v14-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[ingester.v1.ProfileTypesRequest](#schemaingester.v1.profiletypesrequest)|true|none|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "profileTypes": [
    {
      "ID": "string",
      "name": "string",
      "sampleType": "string",
      "sampleUnit": "string",
      "periodType": "string",
      "periodUnit": "string"
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

<h3 id="deprecated-profiletype-call-is-deprecated-in-the-store-components-todo-remove-this-call-in-release-v14-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ingester.v1.ProfileTypesResponse](#schemaingester.v1.profiletypesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Series

<a id="opIdstoregateway.v1.StoreGatewayService.Series"></a>

> Code samples

```bash
curl http://localhost:4040/storegateway.v1.StoreGatewayService/Series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "matchers": [
      "string"
    ],
    "labelNames": [
      "string"
    ],
    "start": 0,
    "end": 0
  }'
```

`POST /storegateway.v1.StoreGatewayService/Series`

> Body parameter

```json
{
  "matchers": [
    "string"
  ],
  "labelNames": [
    "string"
  ],
  "start": 0,
  "end": 0
}
```

<h3 id="series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[ingester.v1.SeriesRequest](#schemaingester.v1.seriesrequest)|true|none|
|» matchers|body|[string]|false|none|
|» labelNames|body|[string]|false|none|
|» start|body|integer \| string(int64)|false|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|
|» end|body|integer \| string(int64)|false|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "labelsSet": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ]
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

<h3 id="series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ingester.v1.SeriesResponse](#schemaingester.v1.seriesresponse)|
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

<h2 id="tocS_ingester.v1.BlockHints">ingester.v1.BlockHints</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.blockhints"></a>
<a id="schema_ingester.v1.BlockHints"></a>
<a id="tocSingester.v1.blockhints"></a>
<a id="tocsingester.v1.blockhints"></a>

```json
{
  "ulids": [
    "string"
  ],
  "deduplication": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ulids|[string]|false|none|The ULID of blocks to query|
|deduplication|boolean|false|none|When all blocks are compacted, there is no effect of the replication factor, hence we do not need to run deduplication.|

<h2 id="tocS_ingester.v1.BlockMetadataRequest">ingester.v1.BlockMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.blockmetadatarequest"></a>
<a id="schema_ingester.v1.BlockMetadataRequest"></a>
<a id="tocSingester.v1.blockmetadatarequest"></a>
<a id="tocsingester.v1.blockmetadatarequest"></a>

```json
{
  "start": 0,
  "end": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer \| string(int64)|false|none|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|

<h2 id="tocS_ingester.v1.BlockMetadataResponse">ingester.v1.BlockMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.blockmetadataresponse"></a>
<a id="schema_ingester.v1.BlockMetadataResponse"></a>
<a id="tocSingester.v1.blockmetadataresponse"></a>
<a id="tocsingester.v1.blockmetadataresponse"></a>

```json
{
  "blocks": [
    {
      "ulid": "string",
      "minTime": 0,
      "maxTime": 0,
      "compaction": {
        "level": 0,
        "sources": [
          "string"
        ],
        "parents": [
          "string"
        ]
      },
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[types.v1.BlockInfo](#schematypes.v1.blockinfo)]|false|none|Blocks that are present on the instance for the start to end period|

<h2 id="tocS_ingester.v1.BlockStats">ingester.v1.BlockStats</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.blockstats"></a>
<a id="schema_ingester.v1.BlockStats"></a>
<a id="tocSingester.v1.blockstats"></a>
<a id="tocsingester.v1.blockstats"></a>

```json
{
  "seriesCount": 0,
  "profileCount": 0,
  "sampleCount": 0,
  "indexBytes": 0,
  "profileBytes": 0,
  "symbolBytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seriesCount|integer \| string(int64)|false|none|none|
|profileCount|integer \| string(int64)|false|none|none|
|sampleCount|integer \| string(int64)|false|none|none|
|indexBytes|integer \| string(int64)|false|none|none|
|profileBytes|integer \| string(int64)|false|none|none|
|symbolBytes|integer \| string(int64)|false|none|none|

<h2 id="tocS_ingester.v1.GetBlockStatsRequest">ingester.v1.GetBlockStatsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.getblockstatsrequest"></a>
<a id="schema_ingester.v1.GetBlockStatsRequest"></a>
<a id="tocSingester.v1.getblockstatsrequest"></a>
<a id="tocsingester.v1.getblockstatsrequest"></a>

```json
{
  "ulids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ulids|[string]|false|none|none|

<h2 id="tocS_ingester.v1.GetBlockStatsResponse">ingester.v1.GetBlockStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.getblockstatsresponse"></a>
<a id="schema_ingester.v1.GetBlockStatsResponse"></a>
<a id="tocSingester.v1.getblockstatsresponse"></a>
<a id="tocsingester.v1.getblockstatsresponse"></a>

```json
{
  "blockStats": [
    {
      "seriesCount": 0,
      "profileCount": 0,
      "sampleCount": 0,
      "indexBytes": 0,
      "profileBytes": 0,
      "symbolBytes": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockStats|[[ingester.v1.BlockStats](#schemaingester.v1.blockstats)]|false|none|none|

<h2 id="tocS_ingester.v1.Hints">ingester.v1.Hints</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.hints"></a>
<a id="schema_ingester.v1.Hints"></a>
<a id="tocSingester.v1.hints"></a>
<a id="tocsingester.v1.hints"></a>

```json
{
  "block": {
    "ulids": [
      "string"
    ],
    "deduplication": true
  }
}
```

Hints are used to propagate information about querying

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block|[ingester.v1.BlockHints](#schemaingester.v1.blockhints)|false|none|none|

<h2 id="tocS_ingester.v1.MergeProfilesLabelsRequest">ingester.v1.MergeProfilesLabelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergeprofileslabelsrequest"></a>
<a id="schema_ingester.v1.MergeProfilesLabelsRequest"></a>
<a id="tocSingester.v1.mergeprofileslabelsrequest"></a>
<a id="tocsingester.v1.mergeprofileslabelsrequest"></a>

```json
{
  "request": {
    "labelSelector": "string",
    "type": {
      "ID": "string",
      "name": "string",
      "sampleType": "string",
      "sampleUnit": "string",
      "periodType": "string",
      "periodUnit": "string"
    },
    "start": 0,
    "end": 0,
    "hints": {
      "block": {
        "ulids": [
          "string"
        ],
        "deduplication": true
      }
    },
    "aggregation": "TIME_SERIES_AGGREGATION_TYPE_SUM"
  },
  "by": [
    "string"
  ],
  "stackTraceSelector": {
    "callSite": [
      {
        "name": "string"
      }
    ],
    "goPgo": {
      "keepLocations": 0,
      "aggregateCallees": true
    }
  },
  "profiles": [
    true
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[ingester.v1.SelectProfilesRequest](#schemaingester.v1.selectprofilesrequest)|false|none|The client starts the stream with a request containing the profile type and the labels.|
|by|[string]|false|none|The labels to merge by|
|stackTraceSelector|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|none|Select stack traces that match the provided selector.|
|profiles|[boolean]|false|none|On a batch of profiles, the client sends the profiles to keep for merging.|

<h2 id="tocS_ingester.v1.MergeProfilesLabelsResponse">ingester.v1.MergeProfilesLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergeprofileslabelsresponse"></a>
<a id="schema_ingester.v1.MergeProfilesLabelsResponse"></a>
<a id="tocSingester.v1.mergeprofileslabelsresponse"></a>
<a id="tocsingester.v1.mergeprofileslabelsresponse"></a>

```json
{
  "selectedProfiles": {
    "labelsSets": [
      {
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ]
      }
    ],
    "profiles": [
      {
        "labelIndex": 0,
        "timestamp": 0
      }
    ],
    "fingerprints": [
      0
    ]
  },
  "series": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "points": [
        {
          "value": 0,
          "timestamp": 0,
          "annotations": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "exemplars": [
            {
              "timestamp": "1730000023000",
              "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
              "spanId": "00f067aa0ba902b7",
              "value": "2450000000",
              "labels": [
                {
                  "name": "service_name",
                  "value": "my_service"
                }
              ],
              "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedProfiles|[ingester.v1.ProfileSets](#schemaingester.v1.profilesets)|false|none|The server replies batch of profiles.<br> A last message without profiles signals the next message will be the result of the merge.|
|series|[[types.v1.Series](#schematypes.v1.series)]|false|none|The list of series for the profile with their respective value|

<h2 id="tocS_ingester.v1.MergeProfilesPprofRequest">ingester.v1.MergeProfilesPprofRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergeprofilespprofrequest"></a>
<a id="schema_ingester.v1.MergeProfilesPprofRequest"></a>
<a id="tocSingester.v1.mergeprofilespprofrequest"></a>
<a id="tocsingester.v1.mergeprofilespprofrequest"></a>

```json
{
  "request": {
    "labelSelector": "string",
    "type": {
      "ID": "string",
      "name": "string",
      "sampleType": "string",
      "sampleUnit": "string",
      "periodType": "string",
      "periodUnit": "string"
    },
    "start": 0,
    "end": 0,
    "hints": {
      "block": {
        "ulids": [
          "string"
        ],
        "deduplication": true
      }
    },
    "aggregation": "TIME_SERIES_AGGREGATION_TYPE_SUM"
  },
  "maxNodes": 0,
  "stackTraceSelector": {
    "callSite": [
      {
        "name": "string"
      }
    ],
    "goPgo": {
      "keepLocations": 0,
      "aggregateCallees": true
    }
  },
  "profiles": [
    true
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[ingester.v1.SelectProfilesRequest](#schemaingester.v1.selectprofilesrequest)|false|none|The client starts the stream with a request containing the profile type and the labels.|
|maxNodes|integer \| string(int64) \| null|false|none|Max nodes in the resulting profile.|
|stackTraceSelector|[types.v1.StackTraceSelector](#schematypes.v1.stacktraceselector)|false|none|Select stack traces that match the provided selector.|
|profiles|[boolean]|false|none|On a batch of profiles, the client sends the profiles to keep for merging.|

<h2 id="tocS_ingester.v1.MergeProfilesPprofResponse">ingester.v1.MergeProfilesPprofResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergeprofilespprofresponse"></a>
<a id="schema_ingester.v1.MergeProfilesPprofResponse"></a>
<a id="tocSingester.v1.mergeprofilespprofresponse"></a>
<a id="tocsingester.v1.mergeprofilespprofresponse"></a>

```json
{
  "selectedProfiles": {
    "labelsSets": [
      {
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ]
      }
    ],
    "profiles": [
      {
        "labelIndex": 0,
        "timestamp": 0
      }
    ],
    "fingerprints": [
      0
    ]
  },
  "result": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedProfiles|[ingester.v1.ProfileSets](#schemaingester.v1.profilesets)|false|none|The server replies batch of profiles.<br> A last message without profiles signals the next message will be the result of the merge.|
|result|string(byte)|false|none|The merge result in the pprof format.|

<h2 id="tocS_ingester.v1.MergeProfilesStacktracesRequest">ingester.v1.MergeProfilesStacktracesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergeprofilesstacktracesrequest"></a>
<a id="schema_ingester.v1.MergeProfilesStacktracesRequest"></a>
<a id="tocSingester.v1.mergeprofilesstacktracesrequest"></a>
<a id="tocsingester.v1.mergeprofilesstacktracesrequest"></a>

```json
{
  "request": {
    "labelSelector": "string",
    "type": {
      "ID": "string",
      "name": "string",
      "sampleType": "string",
      "sampleUnit": "string",
      "periodType": "string",
      "periodUnit": "string"
    },
    "start": 0,
    "end": 0,
    "hints": {
      "block": {
        "ulids": [
          "string"
        ],
        "deduplication": true
      }
    },
    "aggregation": "TIME_SERIES_AGGREGATION_TYPE_SUM"
  },
  "maxNodes": 0,
  "profiles": [
    true
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[ingester.v1.SelectProfilesRequest](#schemaingester.v1.selectprofilesrequest)|false|none|The client starts the stream with a request containing the profile type and the labels.|
|maxNodes|integer \| string(int64) \| null|false|none|Max nodes in the resulting tree.|
|profiles|[boolean]|false|none|On a batch of profiles, the client sends the profiles to keep for merging.|

<h2 id="tocS_ingester.v1.MergeProfilesStacktracesResponse">ingester.v1.MergeProfilesStacktracesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergeprofilesstacktracesresponse"></a>
<a id="schema_ingester.v1.MergeProfilesStacktracesResponse"></a>
<a id="tocSingester.v1.mergeprofilesstacktracesresponse"></a>
<a id="tocsingester.v1.mergeprofilesstacktracesresponse"></a>

```json
{
  "selectedProfiles": {
    "labelsSets": [
      {
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ]
      }
    ],
    "profiles": [
      {
        "labelIndex": 0,
        "timestamp": 0
      }
    ],
    "fingerprints": [
      0
    ]
  },
  "result": {
    "format": "MERGE_FORMAT_UNSPECIFIED",
    "stacktraces": [
      {
        "functionIds": [
          0
        ],
        "value": 0
      }
    ],
    "functionNames": [
      "string"
    ],
    "treeBytes": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedProfiles|[ingester.v1.ProfileSets](#schemaingester.v1.profilesets)|false|none|The server replies batch of profiles.<br> A last message without profiles signals the next message will be the result of the merge.|
|result|[ingester.v1.MergeProfilesStacktracesResult](#schemaingester.v1.mergeprofilesstacktracesresult)|false|none|The list of stracktraces for the profile with their respective value|

<h2 id="tocS_ingester.v1.MergeProfilesStacktracesResult">ingester.v1.MergeProfilesStacktracesResult</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergeprofilesstacktracesresult"></a>
<a id="schema_ingester.v1.MergeProfilesStacktracesResult"></a>
<a id="tocSingester.v1.mergeprofilesstacktracesresult"></a>
<a id="tocsingester.v1.mergeprofilesstacktracesresult"></a>

```json
{
  "format": "MERGE_FORMAT_UNSPECIFIED",
  "stacktraces": [
    {
      "functionIds": [
        0
      ],
      "value": 0
    }
  ],
  "functionNames": [
    "string"
  ],
  "treeBytes": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|[ingester.v1.StacktracesMergeFormat](#schemaingester.v1.stacktracesmergeformat)|false|none|none|
|stacktraces|[[ingester.v1.StacktraceSample](#schemaingester.v1.stacktracesample)]|false|none|The list of stracktraces with their respective value|
|functionNames|[string]|false|none|none|
|treeBytes|string(byte)|false|none|Merge result marshaled to pyroscope tree bytes.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|MERGE_FORMAT_UNSPECIFIED|
|format|MERGE_FORMAT_STACKTRACES|
|format|MERGE_FORMAT_TREE|

<h2 id="tocS_ingester.v1.MergeSpanProfileRequest">ingester.v1.MergeSpanProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergespanprofilerequest"></a>
<a id="schema_ingester.v1.MergeSpanProfileRequest"></a>
<a id="tocSingester.v1.mergespanprofilerequest"></a>
<a id="tocsingester.v1.mergespanprofilerequest"></a>

```json
{
  "request": {
    "labelSelector": "string",
    "type": {
      "ID": "string",
      "name": "string",
      "sampleType": "string",
      "sampleUnit": "string",
      "periodType": "string",
      "periodUnit": "string"
    },
    "start": 0,
    "end": 0,
    "spanSelector": [
      "string"
    ],
    "hints": {
      "block": {
        "ulids": [
          "string"
        ],
        "deduplication": true
      }
    }
  },
  "maxNodes": 0,
  "profiles": [
    true
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[ingester.v1.SelectSpanProfileRequest](#schemaingester.v1.selectspanprofilerequest)|false|none|The client starts the stream with a request containing the profile type and the labels.|
|maxNodes|integer \| string(int64) \| null|false|none|Max nodes in the resulting tree.|
|profiles|[boolean]|false|none|On a batch of profiles, the client sends the profiles to keep for merging.|

<h2 id="tocS_ingester.v1.MergeSpanProfileResponse">ingester.v1.MergeSpanProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergespanprofileresponse"></a>
<a id="schema_ingester.v1.MergeSpanProfileResponse"></a>
<a id="tocSingester.v1.mergespanprofileresponse"></a>
<a id="tocsingester.v1.mergespanprofileresponse"></a>

```json
{
  "selectedProfiles": {
    "labelsSets": [
      {
        "labels": [
          {
            "name": "service_name",
            "value": "my_service"
          }
        ]
      }
    ],
    "profiles": [
      {
        "labelIndex": 0,
        "timestamp": 0
      }
    ],
    "fingerprints": [
      0
    ]
  },
  "result": {
    "treeBytes": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedProfiles|[ingester.v1.ProfileSets](#schemaingester.v1.profilesets)|false|none|The server replies batch of profiles.<br> A last message without profiles signals the next message will be the result of the merge.|
|result|[ingester.v1.MergeSpanProfileResult](#schemaingester.v1.mergespanprofileresult)|false|none|The list of stracktraces for the profile with their respective value|

<h2 id="tocS_ingester.v1.MergeSpanProfileResult">ingester.v1.MergeSpanProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.mergespanprofileresult"></a>
<a id="schema_ingester.v1.MergeSpanProfileResult"></a>
<a id="tocSingester.v1.mergespanprofileresult"></a>
<a id="tocsingester.v1.mergespanprofileresult"></a>

```json
{
  "treeBytes": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|treeBytes|string(byte)|false|none|none|

<h2 id="tocS_ingester.v1.ProfileSets">ingester.v1.ProfileSets</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.profilesets"></a>
<a id="schema_ingester.v1.ProfileSets"></a>
<a id="tocSingester.v1.profilesets"></a>
<a id="tocsingester.v1.profilesets"></a>

```json
{
  "labelsSets": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ]
    }
  ],
  "profiles": [
    {
      "labelIndex": 0,
      "timestamp": 0
    }
  ],
  "fingerprints": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelsSets|[[types.v1.Labels](#schematypes.v1.labels)]|false|none|DEPRECATED: Use fingerprints instead.|
|profiles|[[ingester.v1.SeriesProfile](#schemaingester.v1.seriesprofile)]|false|none|none|
|fingerprints|[integer \| string(int64)]|false|none|none|

<h2 id="tocS_ingester.v1.ProfileTypesRequest">ingester.v1.ProfileTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.profiletypesrequest"></a>
<a id="schema_ingester.v1.ProfileTypesRequest"></a>
<a id="tocSingester.v1.profiletypesrequest"></a>
<a id="tocsingester.v1.profiletypesrequest"></a>

```json
{
  "start": 0,
  "end": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|

<h2 id="tocS_ingester.v1.ProfileTypesResponse">ingester.v1.ProfileTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.profiletypesresponse"></a>
<a id="schema_ingester.v1.ProfileTypesResponse"></a>
<a id="tocSingester.v1.profiletypesresponse"></a>
<a id="tocsingester.v1.profiletypesresponse"></a>

```json
{
  "profileTypes": [
    {
      "ID": "string",
      "name": "string",
      "sampleType": "string",
      "sampleUnit": "string",
      "periodType": "string",
      "periodUnit": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileTypes|[[types.v1.ProfileType](#schematypes.v1.profiletype)]|false|none|none|

<h2 id="tocS_ingester.v1.SelectProfilesRequest">ingester.v1.SelectProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.selectprofilesrequest"></a>
<a id="schema_ingester.v1.SelectProfilesRequest"></a>
<a id="tocSingester.v1.selectprofilesrequest"></a>
<a id="tocsingester.v1.selectprofilesrequest"></a>

```json
{
  "labelSelector": "string",
  "type": {
    "ID": "string",
    "name": "string",
    "sampleType": "string",
    "sampleUnit": "string",
    "periodType": "string",
    "periodUnit": "string"
  },
  "start": 0,
  "end": 0,
  "hints": {
    "block": {
      "ulids": [
        "string"
      ],
      "deduplication": true
    }
  },
  "aggregation": "TIME_SERIES_AGGREGATION_TYPE_SUM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelSelector|string|false|none|none|
|type|[types.v1.ProfileType](#schematypes.v1.profiletype)|false|none|none|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|
|hints|[ingester.v1.Hints](#schemaingester.v1.hints)|false|none|Optional: Hints for querying|
|aggregation|[types.v1.TimeSeriesAggregationType](#schematypes.v1.timeseriesaggregationtype)|false|none|Optional: Aggregation|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregation|TIME_SERIES_AGGREGATION_TYPE_SUM|
|aggregation|TIME_SERIES_AGGREGATION_TYPE_AVERAGE|

<h2 id="tocS_ingester.v1.SelectSpanProfileRequest">ingester.v1.SelectSpanProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.selectspanprofilerequest"></a>
<a id="schema_ingester.v1.SelectSpanProfileRequest"></a>
<a id="tocSingester.v1.selectspanprofilerequest"></a>
<a id="tocsingester.v1.selectspanprofilerequest"></a>

```json
{
  "labelSelector": "string",
  "type": {
    "ID": "string",
    "name": "string",
    "sampleType": "string",
    "sampleUnit": "string",
    "periodType": "string",
    "periodUnit": "string"
  },
  "start": 0,
  "end": 0,
  "spanSelector": [
    "string"
  ],
  "hints": {
    "block": {
      "ulids": [
        "string"
      ],
      "deduplication": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelSelector|string|false|none|none|
|type|[types.v1.ProfileType](#schematypes.v1.profiletype)|false|none|none|
|start|integer \| string(int64)|false|none|Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch.|
|spanSelector|[string]|false|none|List of span identifiers.|
|hints|[ingester.v1.Hints](#schemaingester.v1.hints)|false|none|Optional: Hints for querying|

<h2 id="tocS_ingester.v1.SeriesProfile">ingester.v1.SeriesProfile</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.seriesprofile"></a>
<a id="schema_ingester.v1.SeriesProfile"></a>
<a id="tocSingester.v1.seriesprofile"></a>
<a id="tocsingester.v1.seriesprofile"></a>

```json
{
  "labelIndex": 0,
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelIndex|integer(int32)|false|none|The labels index of the series|
|timestamp|integer \| string(int64)|false|none|timestamp in milliseconds|

<h2 id="tocS_ingester.v1.SeriesRequest">ingester.v1.SeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.seriesrequest"></a>
<a id="schema_ingester.v1.SeriesRequest"></a>
<a id="tocSingester.v1.seriesrequest"></a>
<a id="tocsingester.v1.seriesrequest"></a>

```json
{
  "matchers": [
    "string"
  ],
  "labelNames": [
    "string"
  ],
  "start": 0,
  "end": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchers|[string]|false|none|none|
|labelNames|[string]|false|none|none|
|start|integer \| string(int64)|false|none|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|
|end|integer \| string(int64)|false|none|Milliseconds since epoch. If missing or zero, only the ingesters will be<br> queried.|

<h2 id="tocS_ingester.v1.SeriesResponse">ingester.v1.SeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.seriesresponse"></a>
<a id="schema_ingester.v1.SeriesResponse"></a>
<a id="tocSingester.v1.seriesresponse"></a>
<a id="tocsingester.v1.seriesresponse"></a>

```json
{
  "labelsSet": [
    {
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelsSet|[[types.v1.Labels](#schematypes.v1.labels)]|false|none|none|

<h2 id="tocS_ingester.v1.StacktraceSample">ingester.v1.StacktraceSample</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.stacktracesample"></a>
<a id="schema_ingester.v1.StacktraceSample"></a>
<a id="tocSingester.v1.stacktracesample"></a>
<a id="tocsingester.v1.stacktracesample"></a>

```json
{
  "functionIds": [
    0
  ],
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionIds|[integer(int32)]|false|none|none|
|value|integer \| string(int64)|false|none|none|

<h2 id="tocS_ingester.v1.StacktracesMergeFormat">ingester.v1.StacktracesMergeFormat</h2>
<!-- backwards compatibility -->
<a id="schemaingester.v1.stacktracesmergeformat"></a>
<a id="schema_ingester.v1.StacktracesMergeFormat"></a>
<a id="tocSingester.v1.stacktracesmergeformat"></a>
<a id="tocsingester.v1.stacktracesmergeformat"></a>

```json
"MERGE_FORMAT_UNSPECIFIED"
```

<h2 id="tocS_types.v1.BlockCompaction">types.v1.BlockCompaction</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.blockcompaction"></a>
<a id="schema_types.v1.BlockCompaction"></a>
<a id="tocStypes.v1.blockcompaction"></a>
<a id="tocstypes.v1.blockcompaction"></a>

```json
{
  "level": 0,
  "sources": [
    "string"
  ],
  "parents": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|integer(int32)|false|none|none|
|sources|[string]|false|none|none|
|parents|[string]|false|none|none|

<h2 id="tocS_types.v1.BlockInfo">types.v1.BlockInfo</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.blockinfo"></a>
<a id="schema_types.v1.BlockInfo"></a>
<a id="tocStypes.v1.blockinfo"></a>
<a id="tocstypes.v1.blockinfo"></a>

```json
{
  "ulid": "string",
  "minTime": 0,
  "maxTime": 0,
  "compaction": {
    "level": 0,
    "sources": [
      "string"
    ],
    "parents": [
      "string"
    ]
  },
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ulid|string|false|none|none|
|minTime|integer \| string(int64)|false|none|none|
|maxTime|integer \| string(int64)|false|none|none|
|compaction|[types.v1.BlockCompaction](#schematypes.v1.blockcompaction)|false|none|none|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|none|

<h2 id="tocS_types.v1.Exemplar">types.v1.Exemplar</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.exemplar"></a>
<a id="schema_types.v1.Exemplar"></a>
<a id="tocStypes.v1.exemplar"></a>
<a id="tocstypes.v1.exemplar"></a>

```json
{
  "timestamp": "1730000023000",
  "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  "spanId": "00f067aa0ba902b7",
  "value": "2450000000",
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
}
```

Exemplar represents metadata for an individual profile sample.
 Exemplars allow users to drill down from aggregated timeline views
 to specific profile instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|integer \| string(int64)|false|none|Milliseconds since epoch when the profile was captured.|
|profileId|string|false|none|Unique identifier for the profile (UUID).|
|spanId|string|false|none|Span ID if this profile was split by span during ingestion.|
|value|integer \| string(int64)|false|none|Total sample value for this profile (e.g., CPU nanoseconds, bytes allocated).|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|Labels specific to this exemplar (e.g., pod name, node name). When an exemplar<br> label overlaps with the series label, it is not included here.|
|traceId|string|false|none|Trace ID associated with the span, encoded as 32 lowercase hexadecimal characters.|

<h2 id="tocS_types.v1.GoPGO">types.v1.GoPGO</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.gopgo"></a>
<a id="schema_types.v1.GoPGO"></a>
<a id="tocStypes.v1.gopgo"></a>
<a id="tocstypes.v1.gopgo"></a>

```json
{
  "keepLocations": 0,
  "aggregateCallees": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keepLocations|integer|false|none|Specifies the number of leaf locations to keep.|
|aggregateCallees|boolean|false|none|Aggregate callees causes the leaf location line number to be ignored,<br> thus aggregating all callee samples (but not callers).|

<h2 id="tocS_types.v1.LabelNamesRequest">types.v1.LabelNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelnamesrequest"></a>
<a id="schema_types.v1.LabelNamesRequest"></a>
<a id="tocStypes.v1.labelnamesrequest"></a>
<a id="tocstypes.v1.labelnamesrequest"></a>

```json
{
  "matchers": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchers|[string]|false|none|List of Label selectors|
|start|integer \| string(int64)|false|none|Query from this point in time, given in Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Query to this point in time, given in Milliseconds since epoch.|

<h2 id="tocS_types.v1.LabelNamesResponse">types.v1.LabelNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelnamesresponse"></a>
<a id="schema_types.v1.LabelNamesResponse"></a>
<a id="tocStypes.v1.labelnamesresponse"></a>
<a id="tocstypes.v1.labelnamesresponse"></a>

```json
{
  "names": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|none|

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

<h2 id="tocS_types.v1.LabelValuesRequest">types.v1.LabelValuesRequest</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelvaluesrequest"></a>
<a id="schema_types.v1.LabelValuesRequest"></a>
<a id="tocStypes.v1.labelvaluesrequest"></a>
<a id="tocstypes.v1.labelvaluesrequest"></a>

```json
{
  "name": "service_name",
  "matchers": [
    "string"
  ],
  "start": "1676282400000",
  "end": "1676289600000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the label|
|matchers|[string]|false|none|List of Label selectors|
|start|integer \| string(int64)|false|none|Query from this point in time, given in Milliseconds since epoch.|
|end|integer \| string(int64)|false|none|Query to this point in time, given in Milliseconds since epoch.|

<h2 id="tocS_types.v1.LabelValuesResponse">types.v1.LabelValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelvaluesresponse"></a>
<a id="schema_types.v1.LabelValuesResponse"></a>
<a id="tocStypes.v1.labelvaluesresponse"></a>
<a id="tocstypes.v1.labelvaluesresponse"></a>

```json
{
  "names": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|none|

<h2 id="tocS_types.v1.Labels">types.v1.Labels</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labels"></a>
<a id="schema_types.v1.Labels"></a>
<a id="tocStypes.v1.labels"></a>
<a id="tocstypes.v1.labels"></a>

```json
{
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|LabelPair is the key value pairs to identify the corresponding profile|

<h2 id="tocS_types.v1.Location">types.v1.Location</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.location"></a>
<a id="schema_types.v1.Location"></a>
<a id="tocStypes.v1.location"></a>
<a id="tocstypes.v1.location"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_types.v1.Point">types.v1.Point</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.point"></a>
<a id="schema_types.v1.Point"></a>
<a id="tocStypes.v1.point"></a>
<a id="tocstypes.v1.point"></a>

```json
{
  "value": 0,
  "timestamp": 0,
  "annotations": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "exemplars": [
    {
      "timestamp": "1730000023000",
      "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
      "spanId": "00f067aa0ba902b7",
      "value": "2450000000",
      "labels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|false|none|none|
|timestamp|integer \| string(int64)|false|none|Milliseconds unix timestamp|
|annotations|[[types.v1.ProfileAnnotation](#schematypes.v1.profileannotation)]|false|none|none|
|exemplars|[[types.v1.Exemplar](#schematypes.v1.exemplar)]|false|none|Exemplars are samples of individual profiles that contributed to this aggregated point|

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

<h2 id="tocS_types.v1.ProfileType">types.v1.ProfileType</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.profiletype"></a>
<a id="schema_types.v1.ProfileType"></a>
<a id="tocStypes.v1.profiletype"></a>
<a id="tocstypes.v1.profiletype"></a>

```json
{
  "ID": "string",
  "name": "string",
  "sampleType": "string",
  "sampleUnit": "string",
  "periodType": "string",
  "periodUnit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|none|
|name|string|false|none|none|
|sampleType|string|false|none|none|
|sampleUnit|string|false|none|none|
|periodType|string|false|none|none|
|periodUnit|string|false|none|none|

<h2 id="tocS_types.v1.Series">types.v1.Series</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.series"></a>
<a id="schema_types.v1.Series"></a>
<a id="tocStypes.v1.series"></a>
<a id="tocstypes.v1.series"></a>

```json
{
  "labels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "points": [
    {
      "value": 0,
      "timestamp": 0,
      "annotations": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "exemplars": [
        {
          "timestamp": "1730000023000",
          "profileId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
          "spanId": "00f067aa0ba902b7",
          "value": "2450000000",
          "labels": [
            {
              "name": "service_name",
              "value": "my_service"
            }
          ],
          "traceId": "4bf92f3577b34da6a3ce929d0e0e4736"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|none|
|points|[[types.v1.Point](#schematypes.v1.point)]|false|none|none|

<h2 id="tocS_types.v1.StackTraceSelector">types.v1.StackTraceSelector</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.stacktraceselector"></a>
<a id="schema_types.v1.StackTraceSelector"></a>
<a id="tocStypes.v1.stacktraceselector"></a>
<a id="tocstypes.v1.stacktraceselector"></a>

```json
{
  "callSite": [
    {
      "name": "string"
    }
  ],
  "goPgo": {
    "keepLocations": 0,
    "aggregateCallees": true
  }
}
```

StackTraceSelector is used for filtering stack traces by locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callSite|[[types.v1.Location](#schematypes.v1.location)]|false|none|Stack trace of the call site. Root at call_site[0].<br> Only stack traces having the prefix provided will be selected.<br> If empty, the filter is ignored.|
|goPgo|[types.v1.GoPGO](#schematypes.v1.gopgo)|false|none|Stack trace selector for profiles purposed for Go PGO.<br> If set, call_site is ignored.|

<h2 id="tocS_types.v1.TimeSeriesAggregationType">types.v1.TimeSeriesAggregationType</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.timeseriesaggregationtype"></a>
<a id="schema_types.v1.TimeSeriesAggregationType"></a>
<a id="tocStypes.v1.timeseriesaggregationtype"></a>
<a id="tocstypes.v1.timeseriesaggregationtype"></a>

```json
"TIME_SERIES_AGGREGATION_TYPE_SUM"
```
