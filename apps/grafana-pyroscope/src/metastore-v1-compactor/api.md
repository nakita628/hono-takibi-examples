<h1 id="metastorev1">metastore.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="metastorev1-metastorev1compactionservice">metastore.v1.CompactionService</h1>

## Plans whole-dataset deletion; dry runs are read-only, non-dry runs require the leader.

<a id="opIdmetastore.v1.CompactionService.DeleteDatasets"></a>

> Code samples

```bash
curl http://localhost:4040/metastore.v1.CompactionService/DeleteDatasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "tenant": "string",
    "minTime": 0,
    "maxTime": 0,
    "filter": {
      "serviceNameRegex": "string"
    },
    "dryRun": true,
    "minCompactionLevel": 0
  }'
```

`POST /metastore.v1.CompactionService/DeleteDatasets`

Plans whole-dataset deletion; dry runs are read-only, non-dry runs require the leader.

> Body parameter

```json
{
  "tenant": "string",
  "minTime": 0,
  "maxTime": 0,
  "filter": {
    "serviceNameRegex": "string"
  },
  "dryRun": true,
  "minCompactionLevel": 0
}
```

<h3 id="plans-whole-dataset-deletion-dry-runs-are-read-only-non-dry-runs-require-the-leader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[metastore.v1.DeleteDatasetsRequest](#schemametastore.v1.deletedatasetsrequest)|true|none|
|» tenant|body|string|false|Required, non-blank tenant. Cross-tenant deletion is not supported.|
|» minTime|body|integer \| string(int64)|false|Inclusive Unix nanosecond time window. Entire matching datasets in<br> overlapping blocks are removed, including data outside this window.<br> min_time must not exceed max_time; zero is the Unix epoch.|
|» maxTime|body|integer \| string(int64)|false|none|
|» filter|body|[metastore.v1.DeleteFilter](#schemametastore.v1.deletefilter)|false|Required selection filter.|
|» dryRun|body|boolean|false|Report planned work without scheduling jobs or changing state.|
|» minCompactionLevel|body|integer|false|Minimum compaction level of blocks to consider (0 by default).<br> Note that L0 multi-tenant segments are never eligible.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "dryRun": true,
  "matchedBlocksCount": 0,
  "plannedFullBlockDeletionsCount": 0,
  "plannedBlockRewritesCount": 0,
  "matchedDatasetsCount": 0,
  "matchedBytes": 0,
  "effectiveMatchedMinTime": 0,
  "effectiveMatchedMaxTime": 0,
  "blocks": [
    {
      "blockId": "string",
      "tenant": "string",
      "shard": 0,
      "compactionLevel": 0,
      "blockMinTime": 0,
      "blockMaxTime": 0,
      "matchedMinTime": 0,
      "matchedMaxTime": 0,
      "fullBlockPlanned": true,
      "matchedDatasetsCount": 0,
      "remainingDatasetsCount": 0,
      "matchedServices": [
        "string"
      ],
      "matchedBytes": 0
    }
  ],
  "scheduledJobNames": [
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

<h3 id="plans-whole-dataset-deletion-dry-runs-are-read-only-non-dry-runs-require-the-leader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[metastore.v1.DeleteDatasetsResponse](#schemametastore.v1.deletedatasetsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Read-only snapshot of queued and assigned jobs.

<a id="opIdmetastore.v1.CompactionService.ListCompactionJobs"></a>

> Code samples

```bash
curl http://localhost:4040/metastore.v1.CompactionService/ListCompactionJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "tenant": "string"
  }'
```

`POST /metastore.v1.CompactionService/ListCompactionJobs`

Read-only snapshot of queued and assigned jobs.

> Body parameter

```json
{
  "tenant": "string"
}
```

<h3 id="read-only-snapshot-of-queued-and-assigned-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[metastore.v1.ListCompactionJobsRequest](#schemametastore.v1.listcompactionjobsrequest)|true|none|
|» tenant|body|string|false|Empty selects all tenants.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "jobs": [
    {
      "job": {
        "name": "string",
        "shard": 0,
        "tenant": "string",
        "compactionLevel": 0,
        "sourceBlocks": [
          "string"
        ],
        "tombstones": [
          {
            "blocks": {
              "name": "string",
              "shard": 0,
              "tenant": "string",
              "compactionLevel": 0,
              "blocks": [
                "string"
              ]
            },
            "shard": {
              "name": "string",
              "timestamp": 0,
              "duration": 0,
              "shard": 0,
              "tenant": "string"
            }
          }
        ],
        "deleteFilter": {
          "serviceNameRegex": "string"
        }
      },
      "status": "COMPACTION_STATUS_UNSPECIFIED",
      "addedAt": 0,
      "leaseExpiresAt": 0,
      "failures": 0
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

<h3 id="read-only-snapshot-of-queued-and-assigned-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[metastore.v1.ListCompactionJobsResponse](#schemametastore.v1.listcompactionjobsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## Used to both retrieve jobs and update the jobs status at the same time.

<a id="opIdmetastore.v1.CompactionService.PollCompactionJobs"></a>

> Code samples

```bash
curl http://localhost:4040/metastore.v1.CompactionService/PollCompactionJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "statusUpdates": [
      {
        "name": "string",
        "token": 0,
        "status": "COMPACTION_STATUS_UNSPECIFIED",
        "compactedBlocks": {
          "sourceBlocks": {
            "tenant": "string",
            "shard": 0,
            "blocks": [
              "string"
            ]
          },
          "newBlocks": [
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
      }
    ],
    "jobCapacity": 0
  }'
```

`POST /metastore.v1.CompactionService/PollCompactionJobs`

Used to both retrieve jobs and update the jobs status at the same time.

> Body parameter

```json
{
  "statusUpdates": [
    {
      "name": "string",
      "token": 0,
      "status": "COMPACTION_STATUS_UNSPECIFIED",
      "compactedBlocks": {
        "sourceBlocks": {
          "tenant": "string",
          "shard": 0,
          "blocks": [
            "string"
          ]
        },
        "newBlocks": [
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
    }
  ],
  "jobCapacity": 0
}
```

<h3 id="used-to-both-retrieve-jobs-and-update-the-jobs-status-at-the-same-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[metastore.v1.PollCompactionJobsRequest](#schemametastore.v1.pollcompactionjobsrequest)|true|none|
|» statusUpdates|body|[[metastore.v1.CompactionJobStatusUpdate](#schemametastore.v1.compactionjobstatusupdate)]|false|none|
|» jobCapacity|body|integer|false|How many new jobs a worker can be assigned to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "compactionJobs": [
    {
      "name": "string",
      "shard": 0,
      "tenant": "string",
      "compactionLevel": 0,
      "sourceBlocks": [
        "string"
      ],
      "tombstones": [
        {
          "blocks": {
            "name": "string",
            "shard": 0,
            "tenant": "string",
            "compactionLevel": 0,
            "blocks": [
              "string"
            ]
          },
          "shard": {
            "name": "string",
            "timestamp": 0,
            "duration": 0,
            "shard": 0,
            "tenant": "string"
          }
        }
      ],
      "deleteFilter": {
        "serviceNameRegex": "string"
      }
    }
  ],
  "assignments": [
    {
      "name": "string",
      "token": 0,
      "leaseExpiresAt": 0
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

<h3 id="used-to-both-retrieve-jobs-and-update-the-jobs-status-at-the-same-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[metastore.v1.PollCompactionJobsResponse](#schemametastore.v1.pollcompactionjobsresponse)|
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

<h2 id="tocS_metastore.v1.BlockDeletionSummary">metastore.v1.BlockDeletionSummary</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.blockdeletionsummary"></a>
<a id="schema_metastore.v1.BlockDeletionSummary"></a>
<a id="tocSmetastore.v1.blockdeletionsummary"></a>
<a id="tocsmetastore.v1.blockdeletionsummary"></a>

```json
{
  "blockId": "string",
  "tenant": "string",
  "shard": 0,
  "compactionLevel": 0,
  "blockMinTime": 0,
  "blockMaxTime": 0,
  "matchedMinTime": 0,
  "matchedMaxTime": 0,
  "fullBlockPlanned": true,
  "matchedDatasetsCount": 0,
  "remainingDatasetsCount": 0,
  "matchedServices": [
    "string"
  ],
  "matchedBytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockId|string|false|none|none|
|tenant|string|false|none|none|
|shard|integer|false|none|none|
|compactionLevel|integer|false|none|none|
|blockMinTime|integer \| string(int64)|false|none|Full block bounds in Unix nanoseconds.|
|blockMaxTime|integer \| string(int64)|false|none|none|
|matchedMinTime|integer \| string(int64)|false|none|Matched dataset bounds in Unix nanoseconds, potentially outside the request.|
|matchedMaxTime|integer \| string(int64)|false|none|none|
|fullBlockPlanned|boolean|false|none|True when all service datasets match and the whole block will be removed.|
|matchedDatasetsCount|integer|false|none|none|
|remainingDatasetsCount|integer|false|none|none|
|matchedServices|[string]|false|none|none|
|matchedBytes|integer \| string(int64)|false|none|Sum of matched dataset sizes, not reclaimed object-storage bytes.|

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

<h2 id="tocS_metastore.v1.BlockTombstones">metastore.v1.BlockTombstones</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.blocktombstones"></a>
<a id="schema_metastore.v1.BlockTombstones"></a>
<a id="tocSmetastore.v1.blocktombstones"></a>
<a id="tocsmetastore.v1.blocktombstones"></a>

```json
{
  "name": "string",
  "shard": 0,
  "tenant": "string",
  "compactionLevel": 0,
  "blocks": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|shard|integer|false|none|none|
|tenant|string|false|none|none|
|compactionLevel|integer|false|none|none|
|blocks|[string]|false|none|none|

<h2 id="tocS_metastore.v1.CompactedBlocks">metastore.v1.CompactedBlocks</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.compactedblocks"></a>
<a id="schema_metastore.v1.CompactedBlocks"></a>
<a id="tocSmetastore.v1.compactedblocks"></a>
<a id="tocsmetastore.v1.compactedblocks"></a>

```json
{
  "sourceBlocks": {
    "tenant": "string",
    "shard": 0,
    "blocks": [
      "string"
    ]
  },
  "newBlocks": [
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
|sourceBlocks|[metastore.v1.BlockList](#schemametastore.v1.blocklist)|false|none|none|
|newBlocks|[[metastore.v1.BlockMeta](#schemametastore.v1.blockmeta)]|false|none|none|

<h2 id="tocS_metastore.v1.CompactionJob">metastore.v1.CompactionJob</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.compactionjob"></a>
<a id="schema_metastore.v1.CompactionJob"></a>
<a id="tocSmetastore.v1.compactionjob"></a>
<a id="tocsmetastore.v1.compactionjob"></a>

```json
{
  "name": "string",
  "shard": 0,
  "tenant": "string",
  "compactionLevel": 0,
  "sourceBlocks": [
    "string"
  ],
  "tombstones": [
    {
      "blocks": {
        "name": "string",
        "shard": 0,
        "tenant": "string",
        "compactionLevel": 0,
        "blocks": [
          "string"
        ]
      },
      "shard": {
        "name": "string",
        "timestamp": 0,
        "duration": 0,
        "shard": 0,
        "tenant": "string"
      }
    }
  ],
  "deleteFilter": {
    "serviceNameRegex": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|shard|integer|false|none|none|
|tenant|string|false|none|none|
|compactionLevel|integer|false|none|none|
|sourceBlocks|[string]|false|none|none|
|tombstones|[[metastore.v1.Tombstones](#schemametastore.v1.tombstones)]|false|none|none|
|deleteFilter|[metastore.v1.DeleteFilter](#schemametastore.v1.deletefilter)|false|none|Go/RE2 regular expression, matched against the entire dataset service_name.<br> An empty regex matches only an empty service name, not all services.<br> Use ".*" to match all services. Datasets without a service name are skipped.|

<h2 id="tocS_metastore.v1.CompactionJobAssignment">metastore.v1.CompactionJobAssignment</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.compactionjobassignment"></a>
<a id="schema_metastore.v1.CompactionJobAssignment"></a>
<a id="tocSmetastore.v1.compactionjobassignment"></a>
<a id="tocsmetastore.v1.compactionjobassignment"></a>

```json
{
  "name": "string",
  "token": 0,
  "leaseExpiresAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|token|integer \| string(int64)|false|none|none|
|leaseExpiresAt|integer \| string(int64)|false|none|none|

<h2 id="tocS_metastore.v1.CompactionJobInfo">metastore.v1.CompactionJobInfo</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.compactionjobinfo"></a>
<a id="schema_metastore.v1.CompactionJobInfo"></a>
<a id="tocSmetastore.v1.compactionjobinfo"></a>
<a id="tocsmetastore.v1.compactionjobinfo"></a>

```json
{
  "job": {
    "name": "string",
    "shard": 0,
    "tenant": "string",
    "compactionLevel": 0,
    "sourceBlocks": [
      "string"
    ],
    "tombstones": [
      {
        "blocks": {
          "name": "string",
          "shard": 0,
          "tenant": "string",
          "compactionLevel": 0,
          "blocks": [
            "string"
          ]
        },
        "shard": {
          "name": "string",
          "timestamp": 0,
          "duration": 0,
          "shard": 0,
          "tenant": "string"
        }
      }
    ],
    "deleteFilter": {
      "serviceNameRegex": "string"
    }
  },
  "status": "COMPACTION_STATUS_UNSPECIFIED",
  "addedAt": 0,
  "leaseExpiresAt": 0,
  "failures": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[metastore.v1.CompactionJob](#schemametastore.v1.compactionjob)|false|none|none|
|status|[metastore.v1.CompactionJobStatus](#schemametastore.v1.compactionjobstatus)|false|none|none|
|addedAt|integer \| string(int64)|false|none|Unix nanoseconds.|
|leaseExpiresAt|integer \| string(int64)|false|none|Unix nanoseconds; zero when not leased.|
|failures|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPACTION_STATUS_UNSPECIFIED|
|status|COMPACTION_STATUS_IN_PROGRESS|
|status|COMPACTION_STATUS_SUCCESS|

<h2 id="tocS_metastore.v1.CompactionJobStatus">metastore.v1.CompactionJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.compactionjobstatus"></a>
<a id="schema_metastore.v1.CompactionJobStatus"></a>
<a id="tocSmetastore.v1.compactionjobstatus"></a>
<a id="tocsmetastore.v1.compactionjobstatus"></a>

```json
"COMPACTION_STATUS_UNSPECIFIED"
```

<h2 id="tocS_metastore.v1.CompactionJobStatusUpdate">metastore.v1.CompactionJobStatusUpdate</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.compactionjobstatusupdate"></a>
<a id="schema_metastore.v1.CompactionJobStatusUpdate"></a>
<a id="tocSmetastore.v1.compactionjobstatusupdate"></a>
<a id="tocsmetastore.v1.compactionjobstatusupdate"></a>

```json
{
  "name": "string",
  "token": 0,
  "status": "COMPACTION_STATUS_UNSPECIFIED",
  "compactedBlocks": {
    "sourceBlocks": {
      "tenant": "string",
      "shard": 0,
      "blocks": [
        "string"
      ]
    },
    "newBlocks": [
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
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|token|integer \| string(int64)|false|none|none|
|status|[metastore.v1.CompactionJobStatus](#schemametastore.v1.compactionjobstatus)|false|none|none|
|compactedBlocks|[metastore.v1.CompactedBlocks](#schemametastore.v1.compactedblocks)|false|none|Only present if the job completed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPACTION_STATUS_UNSPECIFIED|
|status|COMPACTION_STATUS_IN_PROGRESS|
|status|COMPACTION_STATUS_SUCCESS|

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

<h2 id="tocS_metastore.v1.DeleteDatasetsRequest">metastore.v1.DeleteDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.deletedatasetsrequest"></a>
<a id="schema_metastore.v1.DeleteDatasetsRequest"></a>
<a id="tocSmetastore.v1.deletedatasetsrequest"></a>
<a id="tocsmetastore.v1.deletedatasetsrequest"></a>

```json
{
  "tenant": "string",
  "minTime": 0,
  "maxTime": 0,
  "filter": {
    "serviceNameRegex": "string"
  },
  "dryRun": true,
  "minCompactionLevel": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenant|string|false|none|Required, non-blank tenant. Cross-tenant deletion is not supported.|
|minTime|integer \| string(int64)|false|none|Inclusive Unix nanosecond time window. Entire matching datasets in<br> overlapping blocks are removed, including data outside this window.<br> min_time must not exceed max_time; zero is the Unix epoch.|
|maxTime|integer \| string(int64)|false|none|none|
|filter|[metastore.v1.DeleteFilter](#schemametastore.v1.deletefilter)|false|none|Required selection filter.|
|dryRun|boolean|false|none|Report planned work without scheduling jobs or changing state.|
|minCompactionLevel|integer|false|none|Minimum compaction level of blocks to consider (0 by default).<br> Note that L0 multi-tenant segments are never eligible.|

<h2 id="tocS_metastore.v1.DeleteDatasetsResponse">metastore.v1.DeleteDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.deletedatasetsresponse"></a>
<a id="schema_metastore.v1.DeleteDatasetsResponse"></a>
<a id="tocSmetastore.v1.deletedatasetsresponse"></a>
<a id="tocsmetastore.v1.deletedatasetsresponse"></a>

```json
{
  "dryRun": true,
  "matchedBlocksCount": 0,
  "plannedFullBlockDeletionsCount": 0,
  "plannedBlockRewritesCount": 0,
  "matchedDatasetsCount": 0,
  "matchedBytes": 0,
  "effectiveMatchedMinTime": 0,
  "effectiveMatchedMaxTime": 0,
  "blocks": [
    {
      "blockId": "string",
      "tenant": "string",
      "shard": 0,
      "compactionLevel": 0,
      "blockMinTime": 0,
      "blockMaxTime": 0,
      "matchedMinTime": 0,
      "matchedMaxTime": 0,
      "fullBlockPlanned": true,
      "matchedDatasetsCount": 0,
      "remainingDatasetsCount": 0,
      "matchedServices": [
        "string"
      ],
      "matchedBytes": 0
    }
  ],
  "scheduledJobNames": [
    "string"
  ]
}
```

Impact plan, not a completion acknowledgement. Counts describe selected work
 for both dry runs and scheduled deletions. Only single-tenant compacted blocks
 are eligible; L0/multi-tenant blocks and already tombstoned blocks are skipped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dryRun|boolean|false|none|none|
|matchedBlocksCount|integer|false|none|none|
|plannedFullBlockDeletionsCount|integer|false|none|none|
|plannedBlockRewritesCount|integer|false|none|none|
|matchedDatasetsCount|integer|false|none|none|
|matchedBytes|integer \| string(int64)|false|none|Sum of matched dataset sizes, not reclaimed object-storage bytes.|
|effectiveMatchedMinTime|integer \| string(int64)|false|none|Overall matched dataset bounds in Unix nanoseconds; both zero if no matches.|
|effectiveMatchedMaxTime|integer \| string(int64)|false|none|none|
|blocks|[[metastore.v1.BlockDeletionSummary](#schemametastore.v1.blockdeletionsummary)]|false|none|none|
|scheduledJobNames|[string]|false|none|Non-dry-run jobs are asynchronous; this is not a completion acknowledgement.|

<h2 id="tocS_metastore.v1.DeleteFilter">metastore.v1.DeleteFilter</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.deletefilter"></a>
<a id="schema_metastore.v1.DeleteFilter"></a>
<a id="tocSmetastore.v1.deletefilter"></a>
<a id="tocsmetastore.v1.deletefilter"></a>

```json
{
  "serviceNameRegex": "string"
}
```

Go/RE2 regular expression, matched against the entire dataset service_name.
 An empty regex matches only an empty service name, not all services.
 Use ".*" to match all services. Datasets without a service name are skipped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceNameRegex|string|false|none|none|

<h2 id="tocS_metastore.v1.ListCompactionJobsRequest">metastore.v1.ListCompactionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.listcompactionjobsrequest"></a>
<a id="schema_metastore.v1.ListCompactionJobsRequest"></a>
<a id="tocSmetastore.v1.listcompactionjobsrequest"></a>
<a id="tocsmetastore.v1.listcompactionjobsrequest"></a>

```json
{
  "tenant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenant|string|false|none|Empty selects all tenants.|

<h2 id="tocS_metastore.v1.ListCompactionJobsResponse">metastore.v1.ListCompactionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.listcompactionjobsresponse"></a>
<a id="schema_metastore.v1.ListCompactionJobsResponse"></a>
<a id="tocSmetastore.v1.listcompactionjobsresponse"></a>
<a id="tocsmetastore.v1.listcompactionjobsresponse"></a>

```json
{
  "jobs": [
    {
      "job": {
        "name": "string",
        "shard": 0,
        "tenant": "string",
        "compactionLevel": 0,
        "sourceBlocks": [
          "string"
        ],
        "tombstones": [
          {
            "blocks": {
              "name": "string",
              "shard": 0,
              "tenant": "string",
              "compactionLevel": 0,
              "blocks": [
                "string"
              ]
            },
            "shard": {
              "name": "string",
              "timestamp": 0,
              "duration": 0,
              "shard": 0,
              "tenant": "string"
            }
          }
        ],
        "deleteFilter": {
          "serviceNameRegex": "string"
        }
      },
      "status": "COMPACTION_STATUS_UNSPECIFIED",
      "addedAt": 0,
      "leaseExpiresAt": 0,
      "failures": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[metastore.v1.CompactionJobInfo](#schemametastore.v1.compactionjobinfo)]|false|none|none|

<h2 id="tocS_metastore.v1.PollCompactionJobsRequest">metastore.v1.PollCompactionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.pollcompactionjobsrequest"></a>
<a id="schema_metastore.v1.PollCompactionJobsRequest"></a>
<a id="tocSmetastore.v1.pollcompactionjobsrequest"></a>
<a id="tocsmetastore.v1.pollcompactionjobsrequest"></a>

```json
{
  "statusUpdates": [
    {
      "name": "string",
      "token": 0,
      "status": "COMPACTION_STATUS_UNSPECIFIED",
      "compactedBlocks": {
        "sourceBlocks": {
          "tenant": "string",
          "shard": 0,
          "blocks": [
            "string"
          ]
        },
        "newBlocks": [
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
    }
  ],
  "jobCapacity": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusUpdates|[[metastore.v1.CompactionJobStatusUpdate](#schemametastore.v1.compactionjobstatusupdate)]|false|none|none|
|jobCapacity|integer|false|none|How many new jobs a worker can be assigned to.|

<h2 id="tocS_metastore.v1.PollCompactionJobsResponse">metastore.v1.PollCompactionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.pollcompactionjobsresponse"></a>
<a id="schema_metastore.v1.PollCompactionJobsResponse"></a>
<a id="tocSmetastore.v1.pollcompactionjobsresponse"></a>
<a id="tocsmetastore.v1.pollcompactionjobsresponse"></a>

```json
{
  "compactionJobs": [
    {
      "name": "string",
      "shard": 0,
      "tenant": "string",
      "compactionLevel": 0,
      "sourceBlocks": [
        "string"
      ],
      "tombstones": [
        {
          "blocks": {
            "name": "string",
            "shard": 0,
            "tenant": "string",
            "compactionLevel": 0,
            "blocks": [
              "string"
            ]
          },
          "shard": {
            "name": "string",
            "timestamp": 0,
            "duration": 0,
            "shard": 0,
            "tenant": "string"
          }
        }
      ],
      "deleteFilter": {
        "serviceNameRegex": "string"
      }
    }
  ],
  "assignments": [
    {
      "name": "string",
      "token": 0,
      "leaseExpiresAt": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compactionJobs|[[metastore.v1.CompactionJob](#schemametastore.v1.compactionjob)]|false|none|none|
|assignments|[[metastore.v1.CompactionJobAssignment](#schemametastore.v1.compactionjobassignment)]|false|none|none|

<h2 id="tocS_metastore.v1.ShardTombstone">metastore.v1.ShardTombstone</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.shardtombstone"></a>
<a id="schema_metastore.v1.ShardTombstone"></a>
<a id="tocSmetastore.v1.shardtombstone"></a>
<a id="tocsmetastore.v1.shardtombstone"></a>

```json
{
  "name": "string",
  "timestamp": 0,
  "duration": 0,
  "shard": 0,
  "tenant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|timestamp|integer \| string(int64)|false|none|Lower time boundary. Unix epoch in nanoseconds.|
|duration|integer \| string(int64)|false|none|none|
|shard|integer|false|none|none|
|tenant|string|false|none|none|

<h2 id="tocS_metastore.v1.Tombstones">metastore.v1.Tombstones</h2>
<!-- backwards compatibility -->
<a id="schemametastore.v1.tombstones"></a>
<a id="schema_metastore.v1.Tombstones"></a>
<a id="tocSmetastore.v1.tombstones"></a>
<a id="tocsmetastore.v1.tombstones"></a>

```json
{
  "blocks": {
    "name": "string",
    "shard": 0,
    "tenant": "string",
    "compactionLevel": 0,
    "blocks": [
      "string"
    ]
  },
  "shard": {
    "name": "string",
    "timestamp": 0,
    "duration": 0,
    "shard": 0,
    "tenant": "string"
  }
}
```

Tombstones represent objects removed from the index but still stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[metastore.v1.BlockTombstones](#schemametastore.v1.blocktombstones)|false|none|none|
|shard|[metastore.v1.ShardTombstone](#schemametastore.v1.shardtombstone)|false|none|none|
