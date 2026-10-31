<h1 id="metastorev1">metastore.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="metastorev1-metastorev1indexservice">metastore.v1.IndexService</h1>

## AddBlock

<a id="opIdmetastore.v1.IndexService.AddBlock"></a>

> Code samples

```bash
curl http://localhost:4040/metastore.v1.IndexService/AddBlock \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "block": {
      "formatVersion": 0,
      "id": "string",
      "tenant": 0,
      "shard": 0,
      "compactionLevel": 0,
      "minTime": 0,
      "maxTime": 0,
      "createdBy": 0,
      "metadataOffset": 0,
      "size": 0,
      "datasets": [
        {
          "format": 0,
          "tenant": 0,
          "name": 0,
          "minTime": 0,
          "maxTime": 0,
          "tableOfContents": [
            0
          ],
          "size": 0,
          "labels": [
            0
          ]
        }
      ],
      "stringTable": [
        "string"
      ]
    }
  }'
```

`POST /metastore.v1.IndexService/AddBlock`

> Body parameter

```json
{
  "block": {
    "formatVersion": 0,
    "id": "string",
    "tenant": 0,
    "shard": 0,
    "compactionLevel": 0,
    "minTime": 0,
    "maxTime": 0,
    "createdBy": 0,
    "metadataOffset": 0,
    "size": 0,
    "datasets": [
      {
        "format": 0,
        "tenant": 0,
        "name": 0,
        "minTime": 0,
        "maxTime": 0,
        "tableOfContents": [
          0
        ],
        "size": 0,
        "labels": [
          0
        ]
      }
    ],
    "stringTable": [
      "string"
    ]
  }
}
```

<h3 id="addblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[metastore.v1.AddBlockRequest](#schemametastore.v1.addblockrequest)|true|none|
|» block|body|[metastore.v1.BlockMeta](#schemametastore.v1.blockmeta)|false|BlockMeta is a metadata entry that describes the block's contents. A block<br> is a collection of datasets that share certain properties, such as shard ID,<br> compaction level, tenant ID, time range, creation time, and more.<br><br> The block content's format denotes the binary format of the datasets and the<br> metadata entry (to address logical dependencies). Each dataset has its own<br> table of contents that lists the sections within the dataset. Each dataset<br> has its own set of attributes (labels) that describe its specific contents.|

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

<h3 id="addblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[metastore.v1.AddBlockResponse](#schemametastore.v1.addblockresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GetBlockMetadata

<a id="opIdmetastore.v1.IndexService.GetBlockMetadata"></a>

> Code samples

```bash
curl http://localhost:4040/metastore.v1.IndexService/GetBlockMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "blocks": {
      "tenant": "string",
      "shard": 0,
      "blocks": [
        "string"
      ]
    }
  }'
```

`POST /metastore.v1.IndexService/GetBlockMetadata`

> Body parameter

```json
{
  "blocks": {
    "tenant": "string",
    "shard": 0,
    "blocks": [
      "string"
    ]
  }
}
```

<h3 id="getblockmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[metastore.v1.GetBlockMetadataRequest](#schemametastore.v1.getblockmetadatarequest)|true|none|
|» blocks|body|[metastore.v1.BlockList](#schemametastore.v1.blocklist)|false|none|

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
      "formatVersion": 0,
      "id": "string",
      "tenant": 0,
      "shard": 0,
      "compactionLevel": 0,
      "minTime": 0,
      "maxTime": 0,
      "createdBy": 0,
      "metadataOffset": 0,
      "size": 0,
      "datasets": [
        {
          "format": 0,
          "tenant": 0,
          "name": 0,
          "minTime": 0,
          "maxTime": 0,
          "tableOfContents": [
            0
          ],
          "size": 0,
          "labels": [
            0
          ]
        }
      ],
      "stringTable": [
        "string"
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

<h3 id="getblockmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[metastore.v1.GetBlockMetadataResponse](#schemametastore.v1.getblockmetadataresponse)|
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

<h2 id="tocS_metastore.v1.AddBlockRequest">metastore.v1.AddBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.addblockrequest"></a>
<a id="schema_metastore.v1.AddBlockRequest"></a>
<a id="tocSmetastore.v1.addblockrequest"></a>
<a id="tocsmetastore.v1.addblockrequest"></a>

```json
{
  "block": {
    "formatVersion": 0,
    "id": "string",
    "tenant": 0,
    "shard": 0,
    "compactionLevel": 0,
    "minTime": 0,
    "maxTime": 0,
    "createdBy": 0,
    "metadataOffset": 0,
    "size": 0,
    "datasets": [
      {
        "format": 0,
        "tenant": 0,
        "name": 0,
        "minTime": 0,
        "maxTime": 0,
        "tableOfContents": [
          0
        ],
        "size": 0,
        "labels": [
          0
        ]
      }
    ],
    "stringTable": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block|[metastore.v1.BlockMeta](#schemametastore.v1.blockmeta)|false|none|BlockMeta is a metadata entry that describes the block's contents. A block<br> is a collection of datasets that share certain properties, such as shard ID,<br> compaction level, tenant ID, time range, creation time, and more.<br><br> The block content's format denotes the binary format of the datasets and the<br> metadata entry (to address logical dependencies). Each dataset has its own<br> table of contents that lists the sections within the dataset. Each dataset<br> has its own set of attributes (labels) that describe its specific contents.|

<h2 id="tocS_metastore.v1.AddBlockResponse">metastore.v1.AddBlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.addblockresponse"></a>
<a id="schema_metastore.v1.AddBlockResponse"></a>
<a id="tocSmetastore.v1.addblockresponse"></a>
<a id="tocsmetastore.v1.addblockresponse"></a>

```json
{}
```

<h2 id="tocS_metastore.v1.BlockList">metastore.v1.BlockList</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.blocklist"></a>
<a id="schema_metastore.v1.BlockList"></a>
<a id="tocSmetastore.v1.blocklist"></a>
<a id="tocsmetastore.v1.blocklist"></a>

```json
{
  "tenant": "string",
  "shard": 0,
  "blocks": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenant|string|false|none|none|
|shard|integer|false|none|none|
|blocks|[string]|false|none|none|

<h2 id="tocS_metastore.v1.BlockMeta">metastore.v1.BlockMeta</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.blockmeta"></a>
<a id="schema_metastore.v1.BlockMeta"></a>
<a id="tocSmetastore.v1.blockmeta"></a>
<a id="tocsmetastore.v1.blockmeta"></a>

```json
{
  "formatVersion": 0,
  "id": "string",
  "tenant": 0,
  "shard": 0,
  "compactionLevel": 0,
  "minTime": 0,
  "maxTime": 0,
  "createdBy": 0,
  "metadataOffset": 0,
  "size": 0,
  "datasets": [
    {
      "format": 0,
      "tenant": 0,
      "name": 0,
      "minTime": 0,
      "maxTime": 0,
      "tableOfContents": [
        0
      ],
      "size": 0,
      "labels": [
        0
      ]
    }
  ],
  "stringTable": [
    "string"
  ]
}
```

BlockMeta is a metadata entry that describes the block's contents. A block
 is a collection of datasets that share certain properties, such as shard ID,
 compaction level, tenant ID, time range, creation time, and more.

 The block content's format denotes the binary format of the datasets and the
 metadata entry (to address logical dependencies). Each dataset has its own
 table of contents that lists the sections within the dataset. Each dataset
 has its own set of attributes (labels) that describe its specific contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formatVersion|integer|false|none|none|
|id|string|false|none|Block ID is a unique identifier for the block.<br> This is the only field that is not included into<br> the string table.|
|tenant|integer(int32)|false|none|If empty, datasets belong to distinct tenants.|
|shard|integer|false|none|none|
|compactionLevel|integer|false|none|none|
|minTime|integer \| string(int64)|false|none|none|
|maxTime|integer \| string(int64)|false|none|none|
|createdBy|integer(int32)|false|none|none|
|metadataOffset|integer \| string(int64)|false|none|none|
|size|integer \| string(int64)|false|none|none|
|datasets|[[metastore.v1.Dataset](#schemametastore.v1.dataset)]|false|none|none|
|stringTable|[string]|false|none|String table contains strings of the block.<br> By convention, the first string is always an empty string.|

<h2 id="tocS_metastore.v1.Dataset">metastore.v1.Dataset</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.dataset"></a>
<a id="schema_metastore.v1.Dataset"></a>
<a id="tocSmetastore.v1.dataset"></a>
<a id="tocsmetastore.v1.dataset"></a>

```json
{
  "format": 0,
  "tenant": 0,
  "name": 0,
  "minTime": 0,
  "maxTime": 0,
  "tableOfContents": [
    0
  ],
  "size": 0,
  "labels": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|integer|false|none|none|
|tenant|integer(int32)|false|none|none|
|name|integer(int32)|false|none|none|
|minTime|integer \| string(int64)|false|none|none|
|maxTime|integer \| string(int64)|false|none|none|
|tableOfContents|[integer \| string(int64)]|false|none|Table of contents lists data sections within the tenant<br> service region. The offsets are absolute.<br><br> The interpretation of the table of contents is specific<br> to the format.<br><br> By default (format 0), the sections are:<br>  - 0: profiles.parquet<br>  - 1: index.tsdb<br>  - 2: symbols.symdb<br><br> Format 1 corresponds to the tenant-wide index:<br>  - 0: index.tsdb (dataset index)|
|size|integer \| string(int64)|false|none|Size of the dataset in bytes.|
|labels|[integer(int32)]|false|none|Length prefixed label key-value pairs.<br><br> Multiple label sets can be associated with a dataset to denote relationships<br> across multiple dimensions. For example, each dataset currently stores data<br> for multiple profile types:<br>   - service_name=A, profile_type=cpu<br>   - service_name=A, profile_type=memory<br><br> Labels are primarily used to filter datasets based on their attributes.<br> For instance, labels can be used to select datasets containing a specific<br> service.<br><br> The set of attributes is extensible and can grow over time. For example, a<br> namespace attribute could be added to datasets:<br>   - service_name=A, profile_type=cpu<br>   - service_name=A, profile_type=memory<br>   - service_name=B, namespace=N, profile_type=cpu<br>   - service_name=B, namespace=N, profile_type=memory<br>   - service_name=C, namespace=N, profile_type=cpu<br>   - service_name=C, namespace=N, profile_type=memory<br><br> This organization enables querying datasets by namespace without accessing<br> the block contents, which significantly improves performance.<br><br> Metadata labels are not required to be included in the block's TSDB index<br> and may be orthogonal to the data dimensions. Generally, attributes serve<br> two primary purposes:<br>   - To create data scopes that span multiple service, reducing the need to<br>     scan the entire set of block satisfying the query expression, i.e.,<br>     the time range and tenant ID.<br>   - To provide additional information about datasets without altering the<br>     storage schema or access methods.<br><br> For example, this approach can support cost attribution or similar breakdown<br> analyses. It can also handle data dependencies (e.g., links to external data)<br> using labels.<br><br> The cardinality of the labels is expected to remain relatively low (fewer<br> than a million unique combinations globally). However, this depends on the<br> metadata storage system.<br><br> Metadata labels are represented as a slice of `int32` values that refer to<br> strings in the metadata entry's string table. The slice is a sequence of<br> length-prefixed key-value (KV) pairs:<br><br> len(2) \| k1 \| v1 \| k2 \| v2 \| len(3) \| k1 \| v3 \| k2 \| v4 \| k3 \| v5<br><br> The order of KV pairs is not defined. The format is optimized for indexing<br> rather than querying, and it is not intended to be the most space-efficient<br> representation. Since entries are supposed to be indexed, the redundancy of<br> denormalized relationships is not a concern.|

<h2 id="tocS_metastore.v1.GetBlockMetadataRequest">metastore.v1.GetBlockMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.getblockmetadatarequest"></a>
<a id="schema_metastore.v1.GetBlockMetadataRequest"></a>
<a id="tocSmetastore.v1.getblockmetadatarequest"></a>
<a id="tocsmetastore.v1.getblockmetadatarequest"></a>

```json
{
  "blocks": {
    "tenant": "string",
    "shard": 0,
    "blocks": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[metastore.v1.BlockList](#schemametastore.v1.blocklist)|false|none|none|

<h2 id="tocS_metastore.v1.GetBlockMetadataResponse">metastore.v1.GetBlockMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.getblockmetadataresponse"></a>
<a id="schema_metastore.v1.GetBlockMetadataResponse"></a>
<a id="tocSmetastore.v1.getblockmetadataresponse"></a>
<a id="tocsmetastore.v1.getblockmetadataresponse"></a>

```json
{
  "blocks": [
    {
      "formatVersion": 0,
      "id": "string",
      "tenant": 0,
      "shard": 0,
      "compactionLevel": 0,
      "minTime": 0,
      "maxTime": 0,
      "createdBy": 0,
      "metadataOffset": 0,
      "size": 0,
      "datasets": [
        {
          "format": 0,
          "tenant": 0,
          "name": 0,
          "minTime": 0,
          "maxTime": 0,
          "tableOfContents": [
            0
          ],
          "size": 0,
          "labels": [
            0
          ]
        }
      ],
      "stringTable": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[metastore.v1.BlockMeta](#schemametastore.v1.blockmeta)]|false|none|none|
