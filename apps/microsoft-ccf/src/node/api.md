<h1 id="ccf-public-node-api">CCF Public Node API v5.0.9</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides public, uncredentialed access to service and node state.

<h1 id="ccf-public-node-api-default">Default</h1>

## OpenAPI schema

<a id="opIdGetNodeApi"></a>

> Code samples

```bash
curl https://localhost:8000/node/api \
  -H 'Accept: application/json'
```

`GET /node/api`

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="openapi-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeAttestations

<a id="opIdGetNodeAttestations"></a>

> Code samples

```bash
curl https://localhost:8000/node/attestations \
  -H 'Accept: application/json'
```

`GET /node/attestations`

> Example responses

> 200 Response

```json
{
  "attestations": [
    {
      "endorsements": "string",
      "format": "OE_SGX_v1",
      "measurement": "string",
      "node_id": "string",
      "raw": "string",
      "uvm_endorsements": "string"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeattestations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetAttestations__Out](#schemagetattestations__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeAttestationsSelf

<a id="opIdGetNodeAttestationsSelf"></a>

> Code samples

```bash
curl https://localhost:8000/node/attestations/self \
  -H 'Accept: application/json'
```

`GET /node/attestations/self`

> Example responses

> 200 Response

```json
{
  "endorsements": "string",
  "format": "OE_SGX_v1",
  "measurement": "string",
  "node_id": "string",
  "raw": "string",
  "uvm_endorsements": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeattestationsself-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Attestation](#schemaattestation)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeBackup

<a id="opIdGetNodeBackup"></a>

> Code samples

```bash
curl https://localhost:8000/node/backup \
  -H 'Accept: application/json'
```

`GET /node/backup`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Current commit level

<a id="opIdGetNodeCommit"></a>

> Code samples

```bash
curl https://localhost:8000/node/commit \
  -H 'Accept: application/json'
```

`GET /node/commit`

Latest transaction ID that has been committed on the service

<h3 id="current-commit-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|view_history|query|[boolean](#schemaboolean)|false|none|
|view_history_since|query|[uint64](#schemauint64)|false|none|

> Example responses

> 200 Response

```json
{
  "transaction_id": "string",
  "view_history": [
    "string"
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="current-commit-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetCommit__Out](#schemagetcommit__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeConfig

<a id="opIdGetNodeConfig"></a>

> Code samples

```bash
curl https://localhost:8000/node/config \
  -H 'Accept: application/json'
```

`GET /node/config`

> Example responses

> 200 Response

```json
{
  "property1": {
    "address": "string"
  },
  "property2": {
    "address": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[string_to_ConsensusNodeConfig](#schemastring_to_consensusnodeconfig)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeConsensus

<a id="opIdGetNodeConsensus"></a>

> Code samples

```bash
curl https://localhost:8000/node/consensus \
  -H 'Accept: application/json'
```

`GET /node/consensus`

> Example responses

> 200 Response

```json
{
  "details": {
    "acks": {
      "property1": {
        "last_received_ms": 0,
        "seqno": 0
      },
      "property2": {
        "last_received_ms": 0,
        "seqno": 0
      }
    },
    "configs": [
      {
        "idx": 0,
        "nodes": {
          "property1": {
            "address": "string"
          },
          "property2": {
            "address": "string"
          }
        },
        "rid": 0
      }
    ],
    "current_view": 0,
    "leadership_state": "None",
    "learners": {
      "property1": 0,
      "property2": 0
    },
    "membership_state": "Active",
    "primary_id": "string",
    "reconfiguration_type": "OneTransaction",
    "retirement_phase": "Ordered",
    "ticking": true
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeconsensus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[ConsensusConfigDetails](#schemaconsensusconfigdetails)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeHistoricalCache

<a id="opIdGetNodeHistoricalCache"></a>

> Code samples

```bash
curl https://localhost:8000/node/historical_cache \
  -H 'Accept: application/json'
```

`GET /node/historical_cache`

> Example responses

> 200 Response

```json
{
  "estimated_size": 0
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodehistoricalcache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetHistoricalCacheInfo__Out](#schemagethistoricalcacheinfo__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeIndexStrategies

<a id="opIdGetNodeIndexStrategies"></a>

> Code samples

```bash
curl https://localhost:8000/node/index/strategies \
  -H 'Accept: application/json'
```

`GET /node/index/strategies`

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeindexstrategies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeJsMetrics

<a id="opIdGetNodeJsMetrics"></a>

> Code samples

```bash
curl https://localhost:8000/node/js_metrics \
  -H 'Accept: application/json'
```

`GET /node/js_metrics`

> Example responses

> 200 Response

```json
{
  "bytecode_size": 0,
  "bytecode_used": true,
  "max_cached_interpreters": 0,
  "max_execution_time": 0,
  "max_heap_size": 0,
  "max_stack_size": 0
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodejsmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[JavaScriptMetrics](#schemajavascriptmetrics)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeJwtKeysRefreshMetrics

<a id="opIdGetNodeJwtKeysRefreshMetrics"></a>

> Code samples

```bash
curl https://localhost:8000/node/jwt_keys/refresh/metrics \
  -H 'Accept: application/json'
```

`GET /node/jwt_keys/refresh/metrics`

> Example responses

> 200 Response

```json
{
  "attempts": 0,
  "failures": 0,
  "successes": 0
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodejwtkeysrefreshmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[JWTRefreshMetrics](#schemajwtrefreshmetrics)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Download ledger chunk

<a id="opIdGetNodeLedgerChunk"></a>

> Code samples

```bash
curl 'https://localhost:8000/node/ledger_chunk?since=0' \
  -H 'Accept: application/json'
```

`GET /node/ledger_chunk`

Redirect to the corresponding /node/ledger_chunk/{chunk_name} endpoint for the ledger chunk including the sequence number specified in the 'since' query parameter. If 'include_committed_prefix' is true and no committed file is available, this may temporarily redirect to a synthetic committed-prefix resource.

<h3 id="download-ledger-chunk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|[uint64](#schemauint64)|true|none|
|include_committed_prefix|query|[boolean](#schemaboolean)|false|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="download-ledger-chunk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|307|Temporary Redirect|Redirect to a temporary committed ledger prefix.|None|
|308|Permanent Redirect|Redirect to the selected ledger chunk.|None|
|404|Not Found|No matching ledger chunk is available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Ledger chunk metadata

<a id="opIdHeadNodeLedgerChunk"></a>

> Code samples

```bash
curl 'https://localhost:8000/node/ledger_chunk?since=0' \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /node/ledger_chunk`

Redirect to the corresponding /node/ledger_chunk/{chunk_name} endpoint for the ledger chunk including the sequence number specified in the 'since' query parameter. If 'include_committed_prefix' is true and no committed file is available, this may temporarily redirect to a synthetic committed-prefix resource.

<h3 id="ledger-chunk-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|[uint64](#schemauint64)|true|none|
|include_committed_prefix|query|[boolean](#schemaboolean)|false|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="ledger-chunk-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|307|Temporary Redirect|Redirect to a temporary committed ledger prefix.|None|
|308|Permanent Redirect|Redirect to the selected ledger chunk.|None|
|404|Not Found|No matching ledger chunk is available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Download committed ledger prefix

<a id="opIdGetNodeLedgerChunkCommittedPrefixChunkName"></a>

> Code samples

```bash
curl https://localhost:8000/node/ledger_chunk/committed_prefix/string \
  -H 'Accept: application/json'
```

`GET /node/ledger_chunk/committed_prefix/{chunk_name}`

Download a synthetic chunk containing only committed ledger entries. Supports HTTP Range and digest headers. The resource is not a canonical .committed ledger file and must not be used for recovery.

<h3 id="download-committed-ledger-prefix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chunk_name|path|string|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="download-committed-ledger-prefix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested committed ledger prefix.|[Binary](#schemabinary)|
|206|Partial Content|The requested byte range of the committed ledger prefix.|[Binary](#schemabinary)|
|304|Not Modified|The requested committed ledger prefix has not changed.|None|
|404|Not Found|The requested committed ledger prefix is not available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Committed ledger prefix metadata

<a id="opIdHeadNodeLedgerChunkCommittedPrefixChunkName"></a>

> Code samples

```bash
curl https://localhost:8000/node/ledger_chunk/committed_prefix/string \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /node/ledger_chunk/committed_prefix/{chunk_name}`

Metadata about a synthetic chunk containing only committed ledger entries. The resource is not a canonical .committed ledger file.

<h3 id="committed-ledger-prefix-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chunk_name|path|string|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="committed-ledger-prefix-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metadata for the requested committed ledger prefix.|None|
|206|Partial Content|Metadata for the requested committed ledger prefix range.|None|
|304|Not Modified|The requested committed ledger prefix has not changed.|None|
|404|Not Found|The requested committed ledger prefix is not available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Download ledger chunk

<a id="opIdGetNodeLedgerChunkChunkName"></a>

> Code samples

```bash
curl https://localhost:8000/node/ledger_chunk/string \
  -H 'Accept: application/json'
```

`GET /node/ledger_chunk/{chunk_name}`

Download a specific ledger chunk by name. Supports HTTP Range header for partial downloads.

<h3 id="download-ledger-chunk-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chunk_name|path|string|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="download-ledger-chunk-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested ledger chunk.|[Binary](#schemabinary)|
|206|Partial Content|The requested byte range of the ledger chunk.|[Binary](#schemabinary)|
|304|Not Modified|The requested ledger chunk has not changed.|None|
|404|Not Found|The requested ledger chunk is not available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Ledger chunk metadata

<a id="opIdHeadNodeLedgerChunkChunkName"></a>

> Code samples

```bash
curl https://localhost:8000/node/ledger_chunk/string \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /node/ledger_chunk/{chunk_name}`

Metadata about a specific ledger chunk (Content-Length and x-ms-ccf-ledger-chunk-name)

<h3 id="ledger-chunk-metadata-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chunk_name|path|string|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="ledger-chunk-metadata-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metadata for the requested ledger chunk.|None|
|206|Partial Content|Metadata for the requested ledger chunk range.|None|
|304|Not Modified|The requested ledger chunk has not changed.|None|
|404|Not Found|The requested ledger chunk is not available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeMetrics

<a id="opIdGetNodeMetrics"></a>

> Code samples

```bash
curl https://localhost:8000/node/metrics \
  -H 'Accept: application/json'
```

`GET /node/metrics`

> Example responses

> 200 Response

```json
{
  "sessions": {
    "active": 0,
    "interfaces": {
      "property1": {
        "active": 0,
        "errors": {
          "parsing": 0,
          "request_header_too_large": 0,
          "request_payload_too_large": 0,
          "request_target_too_long": 0
        },
        "hard_cap": 0,
        "peak": 0,
        "soft_cap": 0
      },
      "property2": {
        "active": 0,
        "errors": {
          "parsing": 0,
          "request_header_too_large": 0,
          "request_payload_too_large": 0,
          "request_target_too_long": 0
        },
        "hard_cap": 0,
        "peak": 0,
        "soft_cap": 0
      }
    },
    "peak": 0
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodemetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[NodeMetrics](#schemanodemetrics)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeNetwork

<a id="opIdGetNodeNetwork"></a>

> Code samples

```bash
curl https://localhost:8000/node/network \
  -H 'Accept: application/json'
```

`GET /node/network`

> Example responses

> 200 Response

```json
{
  "current_service_create_txid": "string",
  "current_view": 0,
  "primary_id": "string",
  "recovery_count": 0,
  "service_certificate": "string",
  "service_data": null,
  "service_status": "Opening"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodenetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetNetworkInfo__Out](#schemagetnetworkinfo__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeNetworkNodes

<a id="opIdGetNodeNetworkNodes"></a>

> Code samples

```bash
curl https://localhost:8000/node/network/nodes \
  -H 'Accept: application/json'
```

`GET /node/network/nodes`

<h3 id="getnodenetworknodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|query|[string](#schemastring)|false|none|
|port|query|[string](#schemastring)|false|none|
|status|query|[string](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "nodes": [
    {
      "last_written": 0,
      "node_data": null,
      "node_id": "string",
      "primary": true,
      "rpc_interfaces": {
        "property1": {
          "accepted_endpoints": [
            "string"
          ],
          "app_protocol": "string",
          "bind_address": "string",
          "enabled_operator_features": [
            "SnapshotRead"
          ],
          "endorsement": {
            "authority": "Node"
          },
          "forwarding_timeout_ms": 0,
          "http_configuration": {
            "initial_window_size": "string",
            "max_body_size": "string",
            "max_concurrent_streams_count": 0,
            "max_frame_size": "string",
            "max_header_size": "string",
            "max_headers_count": 0,
            "max_request_target_size": "string"
          },
          "max_open_sessions_hard": 0,
          "max_open_sessions_soft": 0,
          "protocol": "string",
          "published_address": "string",
          "redirections": {
            "to_backup": {
              "kind": "NodeByRole",
              "target": null
            },
            "to_primary": {
              "kind": "NodeByRole",
              "target": null
            }
          }
        },
        "property2": {
          "accepted_endpoints": [
            "string"
          ],
          "app_protocol": "string",
          "bind_address": "string",
          "enabled_operator_features": [
            "SnapshotRead"
          ],
          "endorsement": {
            "authority": "Node"
          },
          "forwarding_timeout_ms": 0,
          "http_configuration": {
            "initial_window_size": "string",
            "max_body_size": "string",
            "max_concurrent_streams_count": 0,
            "max_frame_size": "string",
            "max_header_size": "string",
            "max_headers_count": 0,
            "max_request_target_size": "string"
          },
          "max_open_sessions_hard": 0,
          "max_open_sessions_soft": 0,
          "protocol": "string",
          "published_address": "string",
          "redirections": {
            "to_backup": {
              "kind": "NodeByRole",
              "target": null
            },
            "to_primary": {
              "kind": "NodeByRole",
              "target": null
            }
          }
        }
      },
      "status": "Pending"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodenetworknodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetNodes__Out](#schemagetnodes__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeNetworkNodesPrimary

<a id="opIdGetNodeNetworkNodesPrimary"></a>

> Code samples

```bash
curl https://localhost:8000/node/network/nodes/primary \
  -H 'Accept: application/json'
```

`GET /node/network/nodes/primary`

> Example responses

> 200 Response

```json
{
  "last_written": 0,
  "node_data": null,
  "node_id": "string",
  "primary": true,
  "rpc_interfaces": {
    "property1": {
      "accepted_endpoints": [
        "string"
      ],
      "app_protocol": "string",
      "bind_address": "string",
      "enabled_operator_features": [
        "SnapshotRead"
      ],
      "endorsement": {
        "authority": "Node"
      },
      "forwarding_timeout_ms": 0,
      "http_configuration": {
        "initial_window_size": "string",
        "max_body_size": "string",
        "max_concurrent_streams_count": 0,
        "max_frame_size": "string",
        "max_header_size": "string",
        "max_headers_count": 0,
        "max_request_target_size": "string"
      },
      "max_open_sessions_hard": 0,
      "max_open_sessions_soft": 0,
      "protocol": "string",
      "published_address": "string",
      "redirections": {
        "to_backup": {
          "kind": "NodeByRole",
          "target": null
        },
        "to_primary": {
          "kind": "NodeByRole",
          "target": null
        }
      }
    },
    "property2": {
      "accepted_endpoints": [
        "string"
      ],
      "app_protocol": "string",
      "bind_address": "string",
      "enabled_operator_features": [
        "SnapshotRead"
      ],
      "endorsement": {
        "authority": "Node"
      },
      "forwarding_timeout_ms": 0,
      "http_configuration": {
        "initial_window_size": "string",
        "max_body_size": "string",
        "max_concurrent_streams_count": 0,
        "max_frame_size": "string",
        "max_header_size": "string",
        "max_headers_count": 0,
        "max_request_target_size": "string"
      },
      "max_open_sessions_hard": 0,
      "max_open_sessions_soft": 0,
      "protocol": "string",
      "published_address": "string",
      "redirections": {
        "to_backup": {
          "kind": "NodeByRole",
          "target": null
        },
        "to_primary": {
          "kind": "NodeByRole",
          "target": null
        }
      }
    }
  },
  "status": "Pending"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodenetworknodesprimary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetNode__NodeInfo](#schemagetnode__nodeinfo)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeNetworkNodesSelf

<a id="opIdGetNodeNetworkNodesSelf"></a>

> Code samples

```bash
curl https://localhost:8000/node/network/nodes/self \
  -H 'Accept: application/json'
```

`GET /node/network/nodes/self`

> Example responses

> 200 Response

```json
{
  "last_written": 0,
  "node_data": null,
  "node_id": "string",
  "primary": true,
  "rpc_interfaces": {
    "property1": {
      "accepted_endpoints": [
        "string"
      ],
      "app_protocol": "string",
      "bind_address": "string",
      "enabled_operator_features": [
        "SnapshotRead"
      ],
      "endorsement": {
        "authority": "Node"
      },
      "forwarding_timeout_ms": 0,
      "http_configuration": {
        "initial_window_size": "string",
        "max_body_size": "string",
        "max_concurrent_streams_count": 0,
        "max_frame_size": "string",
        "max_header_size": "string",
        "max_headers_count": 0,
        "max_request_target_size": "string"
      },
      "max_open_sessions_hard": 0,
      "max_open_sessions_soft": 0,
      "protocol": "string",
      "published_address": "string",
      "redirections": {
        "to_backup": {
          "kind": "NodeByRole",
          "target": null
        },
        "to_primary": {
          "kind": "NodeByRole",
          "target": null
        }
      }
    },
    "property2": {
      "accepted_endpoints": [
        "string"
      ],
      "app_protocol": "string",
      "bind_address": "string",
      "enabled_operator_features": [
        "SnapshotRead"
      ],
      "endorsement": {
        "authority": "Node"
      },
      "forwarding_timeout_ms": 0,
      "http_configuration": {
        "initial_window_size": "string",
        "max_body_size": "string",
        "max_concurrent_streams_count": 0,
        "max_frame_size": "string",
        "max_header_size": "string",
        "max_headers_count": 0,
        "max_request_target_size": "string"
      },
      "max_open_sessions_hard": 0,
      "max_open_sessions_soft": 0,
      "protocol": "string",
      "published_address": "string",
      "redirections": {
        "to_backup": {
          "kind": "NodeByRole",
          "target": null
        },
        "to_primary": {
          "kind": "NodeByRole",
          "target": null
        }
      }
    }
  },
  "status": "Pending"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodenetworknodesself-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetNode__NodeInfo](#schemagetnode__nodeinfo)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeNetworkNodesNodeId

<a id="opIdGetNodeNetworkNodesNodeId"></a>

> Code samples

```bash
curl https://localhost:8000/node/network/nodes/string \
  -H 'Accept: application/json'
```

`GET /node/network/nodes/{node_id}`

<h3 id="getnodenetworknodesnodeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "last_written": 0,
  "node_data": null,
  "node_id": "string",
  "primary": true,
  "rpc_interfaces": {
    "property1": {
      "accepted_endpoints": [
        "string"
      ],
      "app_protocol": "string",
      "bind_address": "string",
      "enabled_operator_features": [
        "SnapshotRead"
      ],
      "endorsement": {
        "authority": "Node"
      },
      "forwarding_timeout_ms": 0,
      "http_configuration": {
        "initial_window_size": "string",
        "max_body_size": "string",
        "max_concurrent_streams_count": 0,
        "max_frame_size": "string",
        "max_header_size": "string",
        "max_headers_count": 0,
        "max_request_target_size": "string"
      },
      "max_open_sessions_hard": 0,
      "max_open_sessions_soft": 0,
      "protocol": "string",
      "published_address": "string",
      "redirections": {
        "to_backup": {
          "kind": "NodeByRole",
          "target": null
        },
        "to_primary": {
          "kind": "NodeByRole",
          "target": null
        }
      }
    },
    "property2": {
      "accepted_endpoints": [
        "string"
      ],
      "app_protocol": "string",
      "bind_address": "string",
      "enabled_operator_features": [
        "SnapshotRead"
      ],
      "endorsement": {
        "authority": "Node"
      },
      "forwarding_timeout_ms": 0,
      "http_configuration": {
        "initial_window_size": "string",
        "max_body_size": "string",
        "max_concurrent_streams_count": 0,
        "max_frame_size": "string",
        "max_header_size": "string",
        "max_headers_count": 0,
        "max_request_target_size": "string"
      },
      "max_open_sessions_hard": 0,
      "max_open_sessions_soft": 0,
      "protocol": "string",
      "published_address": "string",
      "redirections": {
        "to_backup": {
          "kind": "NodeByRole",
          "target": null
        },
        "to_primary": {
          "kind": "NodeByRole",
          "target": null
        }
      }
    }
  },
  "status": "Pending"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodenetworknodesnodeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetNode__NodeInfo](#schemagetnode__nodeinfo)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## DeleteNodeNetworkNodesNodeId

<a id="opIdDeleteNodeNetworkNodesNodeId"></a>

> Code samples

```bash
curl https://localhost:8000/node/network/nodes/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /node/network/nodes/{node_id}`

<h3 id="deletenodenetworknodesnodeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|none|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="deletenodenetworknodesnodeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[boolean](#schemaboolean)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeNetworkRemovableNodes

<a id="opIdGetNodeNetworkRemovableNodes"></a>

> Code samples

```bash
curl https://localhost:8000/node/network/removable_nodes \
  -H 'Accept: application/json'
```

`GET /node/network/removable_nodes`

> Example responses

> 200 Response

```json
{
  "nodes": [
    {
      "last_written": 0,
      "node_data": null,
      "node_id": "string",
      "primary": true,
      "rpc_interfaces": {
        "property1": {
          "accepted_endpoints": [
            "string"
          ],
          "app_protocol": "string",
          "bind_address": "string",
          "enabled_operator_features": [
            "SnapshotRead"
          ],
          "endorsement": {
            "authority": "Node"
          },
          "forwarding_timeout_ms": 0,
          "http_configuration": {
            "initial_window_size": "string",
            "max_body_size": "string",
            "max_concurrent_streams_count": 0,
            "max_frame_size": "string",
            "max_header_size": "string",
            "max_headers_count": 0,
            "max_request_target_size": "string"
          },
          "max_open_sessions_hard": 0,
          "max_open_sessions_soft": 0,
          "protocol": "string",
          "published_address": "string",
          "redirections": {
            "to_backup": {
              "kind": "NodeByRole",
              "target": null
            },
            "to_primary": {
              "kind": "NodeByRole",
              "target": null
            }
          }
        },
        "property2": {
          "accepted_endpoints": [
            "string"
          ],
          "app_protocol": "string",
          "bind_address": "string",
          "enabled_operator_features": [
            "SnapshotRead"
          ],
          "endorsement": {
            "authority": "Node"
          },
          "forwarding_timeout_ms": 0,
          "http_configuration": {
            "initial_window_size": "string",
            "max_body_size": "string",
            "max_concurrent_streams_count": 0,
            "max_frame_size": "string",
            "max_header_size": "string",
            "max_headers_count": 0,
            "max_request_target_size": "string"
          },
          "max_open_sessions_hard": 0,
          "max_open_sessions_soft": 0,
          "protocol": "string",
          "published_address": "string",
          "redirections": {
            "to_backup": {
              "kind": "NodeByRole",
              "target": null
            },
            "to_primary": {
              "kind": "NodeByRole",
              "target": null
            }
          }
        }
      },
      "status": "Pending"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodenetworkremovablenodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetNodes__Out](#schemagetnodes__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodePrimary

<a id="opIdGetNodePrimary"></a>

> Code samples

```bash
curl https://localhost:8000/node/primary \
  -H 'Accept: application/json'
```

`GET /node/primary`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeprimary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## HeadNodePrimary

<a id="opIdHeadNodePrimary"></a>

> Code samples

```bash
curl https://localhost:8000/node/primary \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /node/primary`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="headnodeprimary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|308|Permanent Redirect|Redirect to the current primary node.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeQuotes

<a id="opIdGetNodeQuotes"></a>

> Code samples

```bash
curl https://localhost:8000/node/quotes \
  -H 'Accept: application/json'
```

`GET /node/quotes`

> Example responses

> 200 Response

```json
{
  "quotes": [
    {
      "endorsements": "string",
      "format": "OE_SGX_v1",
      "measurement": "string",
      "node_id": "string",
      "raw": "string",
      "uvm_endorsements": "string"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodequotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetQuotes__Out](#schemagetquotes__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeQuotesSelf

<a id="opIdGetNodeQuotesSelf"></a>

> Code samples

```bash
curl https://localhost:8000/node/quotes/self \
  -H 'Accept: application/json'
```

`GET /node/quotes/self`

> Example responses

> 200 Response

```json
{
  "endorsements": "string",
  "format": "OE_SGX_v1",
  "measurement": "string",
  "node_id": "string",
  "raw": "string",
  "uvm_endorsements": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodequotesself-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Quote](#schemaquote)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeReadyApp

<a id="opIdGetNodeReadyApp"></a>

> Code samples

```bash
curl https://localhost:8000/node/ready/app \
  -H 'Accept: application/json'
```

`GET /node/ready/app`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodereadyapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|503|Service Unavailable|The application frontend is not ready.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeReadyGov

<a id="opIdGetNodeReadyGov"></a>

> Code samples

```bash
curl https://localhost:8000/node/ready/gov \
  -H 'Accept: application/json'
```

`GET /node/ready/gov`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodereadygov-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|503|Service Unavailable|The governance frontend is not ready.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Receipt for a transaction

<a id="opIdGetNodeReceipt"></a>

> Code samples

```bash
curl 'https://localhost:8000/node/receipt?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /node/receipt`

A signed statement from the service over a transaction entry in the ledger

<h3 id="receipt-for-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="receipt-for-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|202|Accepted|The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## COSE receipt for a transaction

<a id="opIdGetNodeReceiptCose"></a>

> Code samples

```bash
curl 'https://localhost:8000/node/receipt/cose?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /node/receipt/cose`

A COSE Sign1 envelope containing a signed statement from the service over a transaction entry in the ledger, with a Merkle proof in the unprotected header. See https://datatracker.ietf.org/doc/draft-ietf-scitt-receipts-ccf-profile/ for a complete description.

<h3 id="cose-receipt-for-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="cose-receipt-for-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Cose](#schemacose)|
|202|Accepted|The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeSelfSignedCertificate

<a id="opIdGetNodeSelfSignedCertificate"></a>

> Code samples

```bash
curl https://localhost:8000/node/self_signed_certificate \
  -H 'Accept: application/json'
```

`GET /node/self_signed_certificate`

> Example responses

> 200 Response

```json
{
  "self_signed_certificate": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeselfsignedcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[SelfSignedNodeCertificateInfo](#schemaselfsignednodecertificateinfo)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeServiceConfiguration

<a id="opIdGetNodeServiceConfiguration"></a>

> Code samples

```bash
curl https://localhost:8000/node/service/configuration \
  -H 'Accept: application/json'
```

`GET /node/service/configuration`

> Example responses

> 200 Response

```json
{
  "consensus": "CFT",
  "maximum_node_certificate_validity_days": 0,
  "maximum_service_certificate_validity_days": 0,
  "recent_cose_proposals_window_size": 0,
  "reconfiguration_type": "OneTransaction",
  "recovery_threshold": 0
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeserviceconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[ServiceConfiguration](#schemaserviceconfiguration)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeServicePreviousIdentity

<a id="opIdGetNodeServicePreviousIdentity"></a>

> Code samples

```bash
curl https://localhost:8000/node/service/previous_identity \
  -H 'Accept: application/json'
```

`GET /node/service/previous_identity`

> Example responses

> 200 Response

```json
{
  "previous_service_identity": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeservicepreviousidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetServicePreviousIdentity__Out](#schemagetservicepreviousidentity__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeSnapshot

<a id="opIdGetNodeSnapshot"></a>

> Code samples

```bash
curl https://localhost:8000/node/snapshot \
  -H 'Accept: application/json'
```

`GET /node/snapshot`

<h3 id="getnodesnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|[uint64](#schemauint64)|false|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|308|Permanent Redirect|Redirect to the selected snapshot.|None|
|404|Not Found|No matching snapshot is available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## HeadNodeSnapshot

<a id="opIdHeadNodeSnapshot"></a>

> Code samples

```bash
curl https://localhost:8000/node/snapshot \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /node/snapshot`

<h3 id="headnodesnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|[uint64](#schemauint64)|false|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="headnodesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|308|Permanent Redirect|Redirect to the selected snapshot.|None|
|404|Not Found|No matching snapshot is available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeSnapshotSnapshotName

<a id="opIdGetNodeSnapshotSnapshotName"></a>

> Code samples

```bash
curl https://localhost:8000/node/snapshot/string \
  -H 'Accept: application/json'
```

`GET /node/snapshot/{snapshot_name}`

<h3 id="getnodesnapshotsnapshotname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshot_name|path|string|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodesnapshotsnapshotname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested snapshot.|[Binary](#schemabinary)|
|206|Partial Content|The requested byte range of the snapshot.|[Binary](#schemabinary)|
|304|Not Modified|The requested snapshot has not changed.|None|
|404|Not Found|The requested snapshot is not available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## HeadNodeSnapshotSnapshotName

<a id="opIdHeadNodeSnapshotSnapshotName"></a>

> Code samples

```bash
curl https://localhost:8000/node/snapshot/string \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /node/snapshot/{snapshot_name}`

<h3 id="headnodesnapshotsnapshotname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshot_name|path|string|true|none|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="headnodesnapshotsnapshotname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metadata for the requested snapshot.|None|
|206|Partial Content|Metadata for the requested snapshot range.|None|
|304|Not Modified|The requested snapshot has not changed.|None|
|404|Not Found|The requested snapshot is not available.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## PostNodeSnapshotCreate

<a id="opIdPostNodeSnapshotCreate"></a>

> Code samples

```bash
curl https://localhost:8000/node/snapshot:create \
  -X POST \
  -H 'Accept: application/json'
```

`POST /node/snapshot:create`

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="postnodesnapshotcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|404|Not Found|The required operator feature is not enabled on this interface.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeState

<a id="opIdGetNodeState"></a>

> Code samples

```bash
curl https://localhost:8000/node/state \
  -H 'Accept: application/json'
```

`GET /node/state`

> Example responses

> 200 Response

```json
{
  "last_recovered_seqno": 0,
  "last_signed_seqno": 0,
  "node_id": "string",
  "recovery_target_seqno": 0,
  "startup_seqno": 0,
  "state": "Uninitialized",
  "stop_notice": true
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodestate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetState__Out](#schemagetstate__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Current status of a transaction

<a id="opIdGetNodeTx"></a>

> Code samples

```bash
curl 'https://localhost:8000/node/tx?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /node/tx`

Possible statuses returned are Unknown, Pending, Committed or Invalid.

<h3 id="current-status-of-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "Unknown",
  "transaction_id": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="current-status-of-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetTxStatus__Out](#schemagettxstatus__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## GetNodeVersion

<a id="opIdGetNodeVersion"></a>

> Code samples

```bash
curl https://localhost:8000/node/version \
  -H 'Accept: application/json'
```

`GET /node/version`

> Example responses

> 200 Response

```json
{
  "ccf_version": "string",
  "quickjs_version": "string",
  "unsafe": true
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="getnodeversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetVersion__Out](#schemagetversion__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Attestation">Attestation</h2>
<!-- backwards compatibility -->
<a id="schemaattestation"></a>
<a id="schema_Attestation"></a>
<a id="tocSattestation"></a>
<a id="tocsattestation"></a>

```json
{
  "endorsements": "string",
  "format": "OE_SGX_v1",
  "measurement": "string",
  "node_id": "string",
  "raw": "string",
  "uvm_endorsements": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endorsements|[base64string](#schemabase64string)|true|none|none|
|format|[QuoteFormat](#schemaquoteformat)|true|none|none|
|measurement|[string](#schemastring)|false|none|none|
|node_id|[NodeId](#schemanodeid)|true|none|none|
|raw|[base64string](#schemabase64string)|true|none|none|
|uvm_endorsements|[base64string](#schemabase64string)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|format|OE_SGX_v1|
|format|Insecure_Virtual|
|format|AMD_SEV_SNP_v1|

<h2 id="tocS_Attestation_array">Attestation_array</h2>
<!-- backwards compatibility -->
<a id="schemaattestation_array"></a>
<a id="schema_Attestation_array"></a>
<a id="tocSattestation_array"></a>
<a id="tocsattestation_array"></a>

```json
[
  {
    "endorsements": "string",
    "format": "OE_SGX_v1",
    "measurement": "string",
    "node_id": "string",
    "raw": "string",
    "uvm_endorsements": "string"
  }
]
```

<h2 id="tocS_Authority">Authority</h2>
<!-- backwards compatibility -->
<a id="schemaauthority"></a>
<a id="schema_Authority"></a>
<a id="tocSauthority"></a>
<a id="tocsauthority"></a>

```json
"Node"
```

<h2 id="tocS_Binary">Binary</h2>
<!-- backwards compatibility -->
<a id="schemabinary"></a>
<a id="schema_Binary"></a>
<a id="tocSbinary"></a>
<a id="tocsbinary"></a>

```json
"string"
```

<h2 id="tocS_CCFError">CCFError</h2>
<!-- backwards compatibility -->
<a id="schemaccferror"></a>
<a id="schema_CCFError"></a>
<a id="tocSccferror"></a>
<a id="tocsccferror"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "idx": 0,
  "nodes": {
    "property1": {
      "address": "string"
    },
    "property2": {
      "address": "string"
    }
  },
  "rid": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idx|[uint64](#schemauint64)|true|none|none|
|nodes|[NodeId_to_Configuration__NodeInfo](#schemanodeid_to_configuration__nodeinfo)|true|none|none|
|rid|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_Configuration__NodeInfo">Configuration__NodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration__nodeinfo"></a>
<a id="schema_Configuration__NodeInfo"></a>
<a id="tocSconfiguration__nodeinfo"></a>
<a id="tocsconfiguration__nodeinfo"></a>

```json
{
  "address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[string](#schemastring)|true|none|none|

<h2 id="tocS_Configuration_array">Configuration_array</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration_array"></a>
<a id="schema_Configuration_array"></a>
<a id="tocSconfiguration_array"></a>
<a id="tocsconfiguration_array"></a>

```json
[
  {
    "idx": 0,
    "nodes": {
      "property1": {
        "address": "string"
      },
      "property2": {
        "address": "string"
      }
    },
    "rid": 0
  }
]
```

<h2 id="tocS_ConsensusConfigDetails">ConsensusConfigDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconsensusconfigdetails"></a>
<a id="schema_ConsensusConfigDetails"></a>
<a id="tocSconsensusconfigdetails"></a>
<a id="tocsconsensusconfigdetails"></a>

```json
{
  "details": {
    "acks": {
      "property1": {
        "last_received_ms": 0,
        "seqno": 0
      },
      "property2": {
        "last_received_ms": 0,
        "seqno": 0
      }
    },
    "configs": [
      {
        "idx": 0,
        "nodes": {
          "property1": {
            "address": "string"
          },
          "property2": {
            "address": "string"
          }
        },
        "rid": 0
      }
    ],
    "current_view": 0,
    "leadership_state": "None",
    "learners": {
      "property1": 0,
      "property2": 0
    },
    "membership_state": "Active",
    "primary_id": "string",
    "reconfiguration_type": "OneTransaction",
    "retirement_phase": "Ordered",
    "ticking": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[ConsensusDetails](#schemaconsensusdetails)|true|none|none|

<h2 id="tocS_ConsensusDetails">ConsensusDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconsensusdetails"></a>
<a id="schema_ConsensusDetails"></a>
<a id="tocSconsensusdetails"></a>
<a id="tocsconsensusdetails"></a>

```json
{
  "acks": {
    "property1": {
      "last_received_ms": 0,
      "seqno": 0
    },
    "property2": {
      "last_received_ms": 0,
      "seqno": 0
    }
  },
  "configs": [
    {
      "idx": 0,
      "nodes": {
        "property1": {
          "address": "string"
        },
        "property2": {
          "address": "string"
        }
      },
      "rid": 0
    }
  ],
  "current_view": 0,
  "leadership_state": "None",
  "learners": {
    "property1": 0,
    "property2": 0
  },
  "membership_state": "Active",
  "primary_id": "string",
  "reconfiguration_type": "OneTransaction",
  "retirement_phase": "Ordered",
  "ticking": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acks|[NodeId_to_ConsensusDetails__Ack](#schemanodeid_to_consensusdetails__ack)|true|none|none|
|configs|[Configuration_array](#schemaconfiguration_array)|true|none|none|
|current_view|[uint64](#schemauint64)|true|none|none|
|leadership_state|[LeadershipState](#schemaleadershipstate)|false|none|none|
|learners|[NodeId_to_uint64](#schemanodeid_to_uint64)|false|none|none|
|membership_state|[MembershipState](#schemamembershipstate)|true|none|none|
|primary_id|[NodeId](#schemanodeid) \| object \| null|true|none|none|
|reconfiguration_type|[ReconfigurationType](#schemareconfigurationtype)|false|none|none|
|retirement_phase|[RetirementPhase](#schemaretirementphase)|false|none|none|
|ticking|[boolean](#schemaboolean)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|leadership_state|None|
|leadership_state|Leader|
|leadership_state|Follower|
|leadership_state|PreVoteCandidate|
|leadership_state|Candidate|
|membership_state|Active|
|membership_state|Retired|
|reconfiguration_type|OneTransaction|
|reconfiguration_type|TwoTransaction|
|retirement_phase|Ordered|
|retirement_phase|Signed|
|retirement_phase|Completed|
|retirement_phase|RetiredCommitted|

<h2 id="tocS_ConsensusDetails__Ack">ConsensusDetails__Ack</h2>
<!-- backwards compatibility -->
<a id="schemaconsensusdetails__ack"></a>
<a id="schema_ConsensusDetails__Ack"></a>
<a id="tocSconsensusdetails__ack"></a>
<a id="tocsconsensusdetails__ack"></a>

```json
{
  "last_received_ms": 0,
  "seqno": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_received_ms|[uint64](#schemauint64)|true|none|none|
|seqno|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_ConsensusNodeConfig">ConsensusNodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemaconsensusnodeconfig"></a>
<a id="schema_ConsensusNodeConfig"></a>
<a id="tocSconsensusnodeconfig"></a>
<a id="tocsconsensusnodeconfig"></a>

```json
{
  "address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[string](#schemastring)|true|none|none|

<h2 id="tocS_ConsensusType">ConsensusType</h2>
<!-- backwards compatibility -->
<a id="schemaconsensustype"></a>
<a id="schema_ConsensusType"></a>
<a id="tocSconsensustype"></a>
<a id="tocsconsensustype"></a>

```json
"CFT"
```

<h2 id="tocS_Cose">Cose</h2>
<!-- backwards compatibility -->
<a id="schemacose"></a>
<a id="schema_Cose"></a>
<a id="tocScose"></a>
<a id="tocscose"></a>

```json
"string"
```

<h2 id="tocS_Endorsement">Endorsement</h2>
<!-- backwards compatibility -->
<a id="schemaendorsement"></a>
<a id="schema_Endorsement"></a>
<a id="tocSendorsement"></a>
<a id="tocsendorsement"></a>

```json
{
  "authority": "Node"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authority|[Authority](#schemaauthority)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authority|Node|
|authority|Service|
|authority|ACME|
|authority|Unsecured|

<h2 id="tocS_GetAttestations__Out">GetAttestations__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetattestations__out"></a>
<a id="schema_GetAttestations__Out"></a>
<a id="tocSgetattestations__out"></a>
<a id="tocsgetattestations__out"></a>

```json
{
  "attestations": [
    {
      "endorsements": "string",
      "format": "OE_SGX_v1",
      "measurement": "string",
      "node_id": "string",
      "raw": "string",
      "uvm_endorsements": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestations|[Attestation_array](#schemaattestation_array)|true|none|none|

<h2 id="tocS_GetCommit__Out">GetCommit__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetcommit__out"></a>
<a id="schema_GetCommit__Out"></a>
<a id="tocSgetcommit__out"></a>
<a id="tocsgetcommit__out"></a>

```json
{
  "transaction_id": "string",
  "view_history": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_id|[TransactionId](#schematransactionid)|true|none|none|
|view_history|[TransactionId_array](#schematransactionid_array)|false|none|none|

<h2 id="tocS_GetHistoricalCacheInfo__Out">GetHistoricalCacheInfo__Out</h2>
<!-- backwards compatibility -->
<a id="schemagethistoricalcacheinfo__out"></a>
<a id="schema_GetHistoricalCacheInfo__Out"></a>
<a id="tocSgethistoricalcacheinfo__out"></a>
<a id="tocsgethistoricalcacheinfo__out"></a>

```json
{
  "estimated_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimated_size|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_GetNetworkInfo__Out">GetNetworkInfo__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkinfo__out"></a>
<a id="schema_GetNetworkInfo__Out"></a>
<a id="tocSgetnetworkinfo__out"></a>
<a id="tocsgetnetworkinfo__out"></a>

```json
{
  "current_service_create_txid": "string",
  "current_view": 0,
  "primary_id": "string",
  "recovery_count": 0,
  "service_certificate": "string",
  "service_data": null,
  "service_status": "Opening"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_service_create_txid|[TransactionId](#schematransactionid) \| object \| null|true|none|none|
|current_view|[uint64](#schemauint64) \| object \| null|true|none|none|
|primary_id|[NodeId](#schemanodeid) \| object \| null|true|none|none|
|recovery_count|[uint64](#schemauint64)|true|none|none|
|service_certificate|[Pem](#schemapem)|true|none|none|
|service_data|[json](#schemajson)|true|none|none|
|service_status|[ServiceStatus](#schemaservicestatus)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|service_status|Opening|
|service_status|Open|
|service_status|WaitingForRecoveryShares|
|service_status|Recovering|

<h2 id="tocS_GetNode__NodeInfo">GetNode__NodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemagetnode__nodeinfo"></a>
<a id="schema_GetNode__NodeInfo"></a>
<a id="tocSgetnode__nodeinfo"></a>
<a id="tocsgetnode__nodeinfo"></a>

```json
{
  "last_written": 0,
  "node_data": null,
  "node_id": "string",
  "primary": true,
  "rpc_interfaces": {
    "property1": {
      "accepted_endpoints": [
        "string"
      ],
      "app_protocol": "string",
      "bind_address": "string",
      "enabled_operator_features": [
        "SnapshotRead"
      ],
      "endorsement": {
        "authority": "Node"
      },
      "forwarding_timeout_ms": 0,
      "http_configuration": {
        "initial_window_size": "string",
        "max_body_size": "string",
        "max_concurrent_streams_count": 0,
        "max_frame_size": "string",
        "max_header_size": "string",
        "max_headers_count": 0,
        "max_request_target_size": "string"
      },
      "max_open_sessions_hard": 0,
      "max_open_sessions_soft": 0,
      "protocol": "string",
      "published_address": "string",
      "redirections": {
        "to_backup": {
          "kind": "NodeByRole",
          "target": null
        },
        "to_primary": {
          "kind": "NodeByRole",
          "target": null
        }
      }
    },
    "property2": {
      "accepted_endpoints": [
        "string"
      ],
      "app_protocol": "string",
      "bind_address": "string",
      "enabled_operator_features": [
        "SnapshotRead"
      ],
      "endorsement": {
        "authority": "Node"
      },
      "forwarding_timeout_ms": 0,
      "http_configuration": {
        "initial_window_size": "string",
        "max_body_size": "string",
        "max_concurrent_streams_count": 0,
        "max_frame_size": "string",
        "max_header_size": "string",
        "max_headers_count": 0,
        "max_request_target_size": "string"
      },
      "max_open_sessions_hard": 0,
      "max_open_sessions_soft": 0,
      "protocol": "string",
      "published_address": "string",
      "redirections": {
        "to_backup": {
          "kind": "NodeByRole",
          "target": null
        },
        "to_primary": {
          "kind": "NodeByRole",
          "target": null
        }
      }
    }
  },
  "status": "Pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_written|[uint64](#schemauint64)|true|none|none|
|node_data|[json](#schemajson)|true|none|none|
|node_id|[NodeId](#schemanodeid)|true|none|none|
|primary|[boolean](#schemaboolean)|true|none|none|
|rpc_interfaces|[string_to_NodeInfoNetwork_v2__NetInterface](#schemastring_to_nodeinfonetwork_v2__netinterface)|true|none|none|
|status|[NodeStatus](#schemanodestatus)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Pending|
|status|Trusted|
|status|Retired|

<h2 id="tocS_GetNode__NodeInfo_array">GetNode__NodeInfo_array</h2>
<!-- backwards compatibility -->
<a id="schemagetnode__nodeinfo_array"></a>
<a id="schema_GetNode__NodeInfo_array"></a>
<a id="tocSgetnode__nodeinfo_array"></a>
<a id="tocsgetnode__nodeinfo_array"></a>

```json
[
  {
    "last_written": 0,
    "node_data": null,
    "node_id": "string",
    "primary": true,
    "rpc_interfaces": {
      "property1": {
        "accepted_endpoints": [
          "string"
        ],
        "app_protocol": "string",
        "bind_address": "string",
        "enabled_operator_features": [
          "SnapshotRead"
        ],
        "endorsement": {
          "authority": "Node"
        },
        "forwarding_timeout_ms": 0,
        "http_configuration": {
          "initial_window_size": "string",
          "max_body_size": "string",
          "max_concurrent_streams_count": 0,
          "max_frame_size": "string",
          "max_header_size": "string",
          "max_headers_count": 0,
          "max_request_target_size": "string"
        },
        "max_open_sessions_hard": 0,
        "max_open_sessions_soft": 0,
        "protocol": "string",
        "published_address": "string",
        "redirections": {
          "to_backup": {
            "kind": "NodeByRole",
            "target": null
          },
          "to_primary": {
            "kind": "NodeByRole",
            "target": null
          }
        }
      },
      "property2": {
        "accepted_endpoints": [
          "string"
        ],
        "app_protocol": "string",
        "bind_address": "string",
        "enabled_operator_features": [
          "SnapshotRead"
        ],
        "endorsement": {
          "authority": "Node"
        },
        "forwarding_timeout_ms": 0,
        "http_configuration": {
          "initial_window_size": "string",
          "max_body_size": "string",
          "max_concurrent_streams_count": 0,
          "max_frame_size": "string",
          "max_header_size": "string",
          "max_headers_count": 0,
          "max_request_target_size": "string"
        },
        "max_open_sessions_hard": 0,
        "max_open_sessions_soft": 0,
        "protocol": "string",
        "published_address": "string",
        "redirections": {
          "to_backup": {
            "kind": "NodeByRole",
            "target": null
          },
          "to_primary": {
            "kind": "NodeByRole",
            "target": null
          }
        }
      }
    },
    "status": "Pending"
  }
]
```

<h2 id="tocS_GetNodes__Out">GetNodes__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetnodes__out"></a>
<a id="schema_GetNodes__Out"></a>
<a id="tocSgetnodes__out"></a>
<a id="tocsgetnodes__out"></a>

```json
{
  "nodes": [
    {
      "last_written": 0,
      "node_data": null,
      "node_id": "string",
      "primary": true,
      "rpc_interfaces": {
        "property1": {
          "accepted_endpoints": [
            "string"
          ],
          "app_protocol": "string",
          "bind_address": "string",
          "enabled_operator_features": [
            "SnapshotRead"
          ],
          "endorsement": {
            "authority": "Node"
          },
          "forwarding_timeout_ms": 0,
          "http_configuration": {
            "initial_window_size": "string",
            "max_body_size": "string",
            "max_concurrent_streams_count": 0,
            "max_frame_size": "string",
            "max_header_size": "string",
            "max_headers_count": 0,
            "max_request_target_size": "string"
          },
          "max_open_sessions_hard": 0,
          "max_open_sessions_soft": 0,
          "protocol": "string",
          "published_address": "string",
          "redirections": {
            "to_backup": {
              "kind": "NodeByRole",
              "target": null
            },
            "to_primary": {
              "kind": "NodeByRole",
              "target": null
            }
          }
        },
        "property2": {
          "accepted_endpoints": [
            "string"
          ],
          "app_protocol": "string",
          "bind_address": "string",
          "enabled_operator_features": [
            "SnapshotRead"
          ],
          "endorsement": {
            "authority": "Node"
          },
          "forwarding_timeout_ms": 0,
          "http_configuration": {
            "initial_window_size": "string",
            "max_body_size": "string",
            "max_concurrent_streams_count": 0,
            "max_frame_size": "string",
            "max_header_size": "string",
            "max_headers_count": 0,
            "max_request_target_size": "string"
          },
          "max_open_sessions_hard": 0,
          "max_open_sessions_soft": 0,
          "protocol": "string",
          "published_address": "string",
          "redirections": {
            "to_backup": {
              "kind": "NodeByRole",
              "target": null
            },
            "to_primary": {
              "kind": "NodeByRole",
              "target": null
            }
          }
        }
      },
      "status": "Pending"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[GetNode__NodeInfo_array](#schemagetnode__nodeinfo_array)|true|none|none|

<h2 id="tocS_GetQuotes__Out">GetQuotes__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetquotes__out"></a>
<a id="schema_GetQuotes__Out"></a>
<a id="tocSgetquotes__out"></a>
<a id="tocsgetquotes__out"></a>

```json
{
  "quotes": [
    {
      "endorsements": "string",
      "format": "OE_SGX_v1",
      "measurement": "string",
      "node_id": "string",
      "raw": "string",
      "uvm_endorsements": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotes|[Quote_array](#schemaquote_array)|true|none|none|

<h2 id="tocS_GetServicePreviousIdentity__Out">GetServicePreviousIdentity__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetservicepreviousidentity__out"></a>
<a id="schema_GetServicePreviousIdentity__Out"></a>
<a id="tocSgetservicepreviousidentity__out"></a>
<a id="tocsgetservicepreviousidentity__out"></a>

```json
{
  "previous_service_identity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|previous_service_identity|[Pem](#schemapem)|true|none|none|

<h2 id="tocS_GetState__Out">GetState__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetstate__out"></a>
<a id="schema_GetState__Out"></a>
<a id="tocSgetstate__out"></a>
<a id="tocsgetstate__out"></a>

```json
{
  "last_recovered_seqno": 0,
  "last_signed_seqno": 0,
  "node_id": "string",
  "recovery_target_seqno": 0,
  "startup_seqno": 0,
  "state": "Uninitialized",
  "stop_notice": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_recovered_seqno|[uint64](#schemauint64)|false|none|none|
|last_signed_seqno|[uint64](#schemauint64)|true|none|none|
|node_id|[NodeId](#schemanodeid)|true|none|none|
|recovery_target_seqno|[uint64](#schemauint64)|false|none|none|
|startup_seqno|[uint64](#schemauint64)|true|none|none|
|state|[ccf__NodeStartupState](#schemaccf__nodestartupstate)|true|none|none|
|stop_notice|[boolean](#schemaboolean)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Uninitialized|
|state|Initialized|
|state|Pending|
|state|PartOfPublicNetwork|
|state|PartOfNetwork|
|state|ReadingPublicLedger|
|state|ReadingPrivateLedger|

<h2 id="tocS_GetTxStatus__Out">GetTxStatus__Out</h2>
<!-- backwards compatibility -->
<a id="schemagettxstatus__out"></a>
<a id="schema_GetTxStatus__Out"></a>
<a id="tocSgettxstatus__out"></a>
<a id="tocsgettxstatus__out"></a>

```json
{
  "status": "Unknown",
  "transaction_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[TxStatus](#schematxstatus)|true|none|none|
|transaction_id|[TransactionId](#schematransactionid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Unknown|
|status|Pending|
|status|Committed|
|status|Invalid|

<h2 id="tocS_GetVersion__Out">GetVersion__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetversion__out"></a>
<a id="schema_GetVersion__Out"></a>
<a id="tocSgetversion__out"></a>
<a id="tocsgetversion__out"></a>

```json
{
  "ccf_version": "string",
  "quickjs_version": "string",
  "unsafe": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ccf_version|[string](#schemastring)|true|none|none|
|quickjs_version|[string](#schemastring)|true|none|none|
|unsafe|[boolean](#schemaboolean)|true|none|none|

<h2 id="tocS_JWTRefreshMetrics">JWTRefreshMetrics</h2>
<!-- backwards compatibility -->
<a id="schemajwtrefreshmetrics"></a>
<a id="schema_JWTRefreshMetrics"></a>
<a id="tocSjwtrefreshmetrics"></a>
<a id="tocsjwtrefreshmetrics"></a>

```json
{
  "attempts": 0,
  "failures": 0,
  "successes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attempts|[uint64](#schemauint64)|true|none|none|
|failures|[uint64](#schemauint64)|true|none|none|
|successes|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_JavaScriptMetrics">JavaScriptMetrics</h2>
<!-- backwards compatibility -->
<a id="schemajavascriptmetrics"></a>
<a id="schema_JavaScriptMetrics"></a>
<a id="tocSjavascriptmetrics"></a>
<a id="tocsjavascriptmetrics"></a>

```json
{
  "bytecode_size": 0,
  "bytecode_used": true,
  "max_cached_interpreters": 0,
  "max_execution_time": 0,
  "max_heap_size": 0,
  "max_stack_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytecode_size|[uint64](#schemauint64)|true|none|none|
|bytecode_used|[boolean](#schemaboolean)|true|none|none|
|max_cached_interpreters|[uint64](#schemauint64)|true|none|none|
|max_execution_time|[uint64](#schemauint64)|true|none|none|
|max_heap_size|[uint64](#schemauint64)|true|none|none|
|max_stack_size|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_LeadershipState">LeadershipState</h2>
<!-- backwards compatibility -->
<a id="schemaleadershipstate"></a>
<a id="schema_LeadershipState"></a>
<a id="tocSleadershipstate"></a>
<a id="tocsleadershipstate"></a>

```json
"None"
```

<h2 id="tocS_MembershipState">MembershipState</h2>
<!-- backwards compatibility -->
<a id="schemamembershipstate"></a>
<a id="schema_MembershipState"></a>
<a id="tocSmembershipstate"></a>
<a id="tocsmembershipstate"></a>

```json
"Active"
```

<h2 id="tocS_NodeId">NodeId</h2>
<!-- backwards compatibility -->
<a id="schemanodeid"></a>
<a id="schema_NodeId"></a>
<a id="tocSnodeid"></a>
<a id="tocsnodeid"></a>

```json
"string"
```

<h2 id="tocS_NodeId_to_Configuration__NodeInfo">NodeId_to_Configuration__NodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemanodeid_to_configuration__nodeinfo"></a>
<a id="schema_NodeId_to_Configuration__NodeInfo"></a>
<a id="tocSnodeid_to_configuration__nodeinfo"></a>
<a id="tocsnodeid_to_configuration__nodeinfo"></a>

```json
{
  "property1": {
    "address": "string"
  },
  "property2": {
    "address": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Configuration__NodeInfo](#schemaconfiguration__nodeinfo)|false|none|none|

<h2 id="tocS_NodeId_to_ConsensusDetails__Ack">NodeId_to_ConsensusDetails__Ack</h2>
<!-- backwards compatibility -->
<a id="schemanodeid_to_consensusdetails__ack"></a>
<a id="schema_NodeId_to_ConsensusDetails__Ack"></a>
<a id="tocSnodeid_to_consensusdetails__ack"></a>
<a id="tocsnodeid_to_consensusdetails__ack"></a>

```json
{
  "property1": {
    "last_received_ms": 0,
    "seqno": 0
  },
  "property2": {
    "last_received_ms": 0,
    "seqno": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ConsensusDetails__Ack](#schemaconsensusdetails__ack)|false|none|none|

<h2 id="tocS_NodeId_to_uint64">NodeId_to_uint64</h2>
<!-- backwards compatibility -->
<a id="schemanodeid_to_uint64"></a>
<a id="schema_NodeId_to_uint64"></a>
<a id="tocSnodeid_to_uint64"></a>
<a id="tocsnodeid_to_uint64"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[uint64](#schemauint64)|false|none|none|

<h2 id="tocS_NodeInfoNetwork_v2__NetInterface">NodeInfoNetwork_v2__NetInterface</h2>
<!-- backwards compatibility -->
<a id="schemanodeinfonetwork_v2__netinterface"></a>
<a id="schema_NodeInfoNetwork_v2__NetInterface"></a>
<a id="tocSnodeinfonetwork_v2__netinterface"></a>
<a id="tocsnodeinfonetwork_v2__netinterface"></a>

```json
{
  "accepted_endpoints": [
    "string"
  ],
  "app_protocol": "string",
  "bind_address": "string",
  "enabled_operator_features": [
    "SnapshotRead"
  ],
  "endorsement": {
    "authority": "Node"
  },
  "forwarding_timeout_ms": 0,
  "http_configuration": {
    "initial_window_size": "string",
    "max_body_size": "string",
    "max_concurrent_streams_count": 0,
    "max_frame_size": "string",
    "max_header_size": "string",
    "max_headers_count": 0,
    "max_request_target_size": "string"
  },
  "max_open_sessions_hard": 0,
  "max_open_sessions_soft": 0,
  "protocol": "string",
  "published_address": "string",
  "redirections": {
    "to_backup": {
      "kind": "NodeByRole",
      "target": null
    },
    "to_primary": {
      "kind": "NodeByRole",
      "target": null
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted_endpoints|[string_array](#schemastring_array)|false|none|none|
|app_protocol|[string](#schemastring)|false|none|none|
|bind_address|[string](#schemastring)|true|none|none|
|enabled_operator_features|[OperatorFeature_set](#schemaoperatorfeature_set)|false|none|none|
|endorsement|[Endorsement](#schemaendorsement)|false|none|none|
|forwarding_timeout_ms|[uint64](#schemauint64)|false|none|none|
|http_configuration|[ParserConfiguration](#schemaparserconfiguration)|false|none|none|
|max_open_sessions_hard|[uint64](#schemauint64)|false|none|none|
|max_open_sessions_soft|[uint64](#schemauint64)|false|none|none|
|protocol|[string](#schemastring)|false|none|none|
|published_address|[string](#schemastring)|false|none|none|
|redirections|[NodeInfoNetwork_v2__NetInterface__Redirections](#schemanodeinfonetwork_v2__netinterface__redirections)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|enabled_operator_features|SnapshotRead|
|enabled_operator_features|LedgerChunkRead|
|enabled_operator_features|SnapshotCreate|

<h2 id="tocS_NodeInfoNetwork_v2__NetInterface__Redirections">NodeInfoNetwork_v2__NetInterface__Redirections</h2>
<!-- backwards compatibility -->
<a id="schemanodeinfonetwork_v2__netinterface__redirections"></a>
<a id="schema_NodeInfoNetwork_v2__NetInterface__Redirections"></a>
<a id="tocSnodeinfonetwork_v2__netinterface__redirections"></a>
<a id="tocsnodeinfonetwork_v2__netinterface__redirections"></a>

```json
{
  "to_backup": {
    "kind": "NodeByRole",
    "target": null
  },
  "to_primary": {
    "kind": "NodeByRole",
    "target": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to_backup|[RedirectionResolverConfig](#schemaredirectionresolverconfig)|false|none|none|
|to_primary|[RedirectionResolverConfig](#schemaredirectionresolverconfig)|false|none|none|

<h2 id="tocS_NodeMetrics">NodeMetrics</h2>
<!-- backwards compatibility -->
<a id="schemanodemetrics"></a>
<a id="schema_NodeMetrics"></a>
<a id="tocSnodemetrics"></a>
<a id="tocsnodemetrics"></a>

```json
{
  "sessions": {
    "active": 0,
    "interfaces": {
      "property1": {
        "active": 0,
        "errors": {
          "parsing": 0,
          "request_header_too_large": 0,
          "request_payload_too_large": 0,
          "request_target_too_long": 0
        },
        "hard_cap": 0,
        "peak": 0,
        "soft_cap": 0
      },
      "property2": {
        "active": 0,
        "errors": {
          "parsing": 0,
          "request_header_too_large": 0,
          "request_payload_too_large": 0,
          "request_target_too_long": 0
        },
        "hard_cap": 0,
        "peak": 0,
        "soft_cap": 0
      }
    },
    "peak": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessions|[SessionMetrics](#schemasessionmetrics)|true|none|none|

<h2 id="tocS_NodeStatus">NodeStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodestatus"></a>
<a id="schema_NodeStatus"></a>
<a id="tocSnodestatus"></a>
<a id="tocsnodestatus"></a>

```json
"Pending"
```

<h2 id="tocS_OperatorFeature">OperatorFeature</h2>
<!-- backwards compatibility -->
<a id="schemaoperatorfeature"></a>
<a id="schema_OperatorFeature"></a>
<a id="tocSoperatorfeature"></a>
<a id="tocsoperatorfeature"></a>

```json
"SnapshotRead"
```

<h2 id="tocS_OperatorFeature_set">OperatorFeature_set</h2>
<!-- backwards compatibility -->
<a id="schemaoperatorfeature_set"></a>
<a id="schema_OperatorFeature_set"></a>
<a id="tocSoperatorfeature_set"></a>
<a id="tocsoperatorfeature_set"></a>

```json
[
  "SnapshotRead"
]
```

<h2 id="tocS_ParserConfiguration">ParserConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaparserconfiguration"></a>
<a id="schema_ParserConfiguration"></a>
<a id="tocSparserconfiguration"></a>
<a id="tocsparserconfiguration"></a>

```json
{
  "initial_window_size": "string",
  "max_body_size": "string",
  "max_concurrent_streams_count": 0,
  "max_frame_size": "string",
  "max_header_size": "string",
  "max_headers_count": 0,
  "max_request_target_size": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|initial_window_size|[SizeString](#schemasizestring)|false|none|none|
|max_body_size|[SizeString](#schemasizestring)|false|none|none|
|max_concurrent_streams_count|[uint64](#schemauint64)|false|none|none|
|max_frame_size|[SizeString](#schemasizestring)|false|none|none|
|max_header_size|[SizeString](#schemasizestring)|false|none|none|
|max_headers_count|[uint32](#schemauint32)|false|none|none|
|max_request_target_size|[SizeString](#schemasizestring)|false|none|none|

<h2 id="tocS_Pem">Pem</h2>
<!-- backwards compatibility -->
<a id="schemapem"></a>
<a id="schema_Pem"></a>
<a id="tocSpem"></a>
<a id="tocspem"></a>

```json
"string"
```

<h2 id="tocS_Quote">Quote</h2>
<!-- backwards compatibility -->
<a id="schemaquote"></a>
<a id="schema_Quote"></a>
<a id="tocSquote"></a>
<a id="tocsquote"></a>

```json
{
  "endorsements": "string",
  "format": "OE_SGX_v1",
  "measurement": "string",
  "node_id": "string",
  "raw": "string",
  "uvm_endorsements": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endorsements|[base64string](#schemabase64string)|true|none|none|
|format|[QuoteFormat](#schemaquoteformat)|true|none|none|
|measurement|[string](#schemastring)|false|none|none|
|node_id|[NodeId](#schemanodeid)|true|none|none|
|raw|[base64string](#schemabase64string)|true|none|none|
|uvm_endorsements|[base64string](#schemabase64string)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|format|OE_SGX_v1|
|format|Insecure_Virtual|
|format|AMD_SEV_SNP_v1|

<h2 id="tocS_QuoteFormat">QuoteFormat</h2>
<!-- backwards compatibility -->
<a id="schemaquoteformat"></a>
<a id="schema_QuoteFormat"></a>
<a id="tocSquoteformat"></a>
<a id="tocsquoteformat"></a>

```json
"OE_SGX_v1"
```

<h2 id="tocS_Quote_array">Quote_array</h2>
<!-- backwards compatibility -->
<a id="schemaquote_array"></a>
<a id="schema_Quote_array"></a>
<a id="tocSquote_array"></a>
<a id="tocsquote_array"></a>

```json
[
  {
    "endorsements": "string",
    "format": "OE_SGX_v1",
    "measurement": "string",
    "node_id": "string",
    "raw": "string",
    "uvm_endorsements": "string"
  }
]
```

<h2 id="tocS_ReconfigurationType">ReconfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemareconfigurationtype"></a>
<a id="schema_ReconfigurationType"></a>
<a id="tocSreconfigurationtype"></a>
<a id="tocsreconfigurationtype"></a>

```json
"OneTransaction"
```

<h2 id="tocS_RedirectionResolutionKind">RedirectionResolutionKind</h2>
<!-- backwards compatibility -->
<a id="schemaredirectionresolutionkind"></a>
<a id="schema_RedirectionResolutionKind"></a>
<a id="tocSredirectionresolutionkind"></a>
<a id="tocsredirectionresolutionkind"></a>

```json
"NodeByRole"
```

<h2 id="tocS_RedirectionResolverConfig">RedirectionResolverConfig</h2>
<!-- backwards compatibility -->
<a id="schemaredirectionresolverconfig"></a>
<a id="schema_RedirectionResolverConfig"></a>
<a id="tocSredirectionresolverconfig"></a>
<a id="tocsredirectionresolverconfig"></a>

```json
{
  "kind": "NodeByRole",
  "target": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|[RedirectionResolutionKind](#schemaredirectionresolutionkind)|true|none|none|
|target|[json](#schemajson)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|NodeByRole|
|kind|StaticAddress|

<h2 id="tocS_RetirementPhase">RetirementPhase</h2>
<!-- backwards compatibility -->
<a id="schemaretirementphase"></a>
<a id="schema_RetirementPhase"></a>
<a id="tocSretirementphase"></a>
<a id="tocsretirementphase"></a>

```json
"Ordered"
```

<h2 id="tocS_SelfSignedNodeCertificateInfo">SelfSignedNodeCertificateInfo</h2>
<!-- backwards compatibility -->
<a id="schemaselfsignednodecertificateinfo"></a>
<a id="schema_SelfSignedNodeCertificateInfo"></a>
<a id="tocSselfsignednodecertificateinfo"></a>
<a id="tocsselfsignednodecertificateinfo"></a>

```json
{
  "self_signed_certificate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self_signed_certificate|[Pem](#schemapem)|true|none|none|

<h2 id="tocS_ServiceConfiguration">ServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconfiguration"></a>
<a id="schema_ServiceConfiguration"></a>
<a id="tocSserviceconfiguration"></a>
<a id="tocsserviceconfiguration"></a>

```json
{
  "consensus": "CFT",
  "maximum_node_certificate_validity_days": 0,
  "maximum_service_certificate_validity_days": 0,
  "recent_cose_proposals_window_size": 0,
  "reconfiguration_type": "OneTransaction",
  "recovery_threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consensus|[ConsensusType](#schemaconsensustype)|false|none|none|
|maximum_node_certificate_validity_days|[uint64](#schemauint64)|false|none|none|
|maximum_service_certificate_validity_days|[uint64](#schemauint64)|false|none|none|
|recent_cose_proposals_window_size|[uint64](#schemauint64)|false|none|none|
|reconfiguration_type|[ReconfigurationType](#schemareconfigurationtype)|false|none|none|
|recovery_threshold|[uint64](#schemauint64)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|consensus|CFT|
|consensus|BFT|
|reconfiguration_type|OneTransaction|
|reconfiguration_type|TwoTransaction|

<h2 id="tocS_ServiceStatus">ServiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaservicestatus"></a>
<a id="schema_ServiceStatus"></a>
<a id="tocSservicestatus"></a>
<a id="tocsservicestatus"></a>

```json
"Opening"
```

<h2 id="tocS_SessionMetrics">SessionMetrics</h2>
<!-- backwards compatibility -->
<a id="schemasessionmetrics"></a>
<a id="schema_SessionMetrics"></a>
<a id="tocSsessionmetrics"></a>
<a id="tocssessionmetrics"></a>

```json
{
  "active": 0,
  "interfaces": {
    "property1": {
      "active": 0,
      "errors": {
        "parsing": 0,
        "request_header_too_large": 0,
        "request_payload_too_large": 0,
        "request_target_too_long": 0
      },
      "hard_cap": 0,
      "peak": 0,
      "soft_cap": 0
    },
    "property2": {
      "active": 0,
      "errors": {
        "parsing": 0,
        "request_header_too_large": 0,
        "request_payload_too_large": 0,
        "request_target_too_long": 0
      },
      "hard_cap": 0,
      "peak": 0,
      "soft_cap": 0
    }
  },
  "peak": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|[uint64](#schemauint64)|true|none|none|
|interfaces|[string_to_SessionMetrics__PerInterface](#schemastring_to_sessionmetrics__perinterface)|true|none|none|
|peak|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_SessionMetrics__Errors">SessionMetrics__Errors</h2>
<!-- backwards compatibility -->
<a id="schemasessionmetrics__errors"></a>
<a id="schema_SessionMetrics__Errors"></a>
<a id="tocSsessionmetrics__errors"></a>
<a id="tocssessionmetrics__errors"></a>

```json
{
  "parsing": 0,
  "request_header_too_large": 0,
  "request_payload_too_large": 0,
  "request_target_too_long": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parsing|[uint64](#schemauint64)|true|none|none|
|request_header_too_large|[uint64](#schemauint64)|true|none|none|
|request_payload_too_large|[uint64](#schemauint64)|true|none|none|
|request_target_too_long|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_SessionMetrics__PerInterface">SessionMetrics__PerInterface</h2>
<!-- backwards compatibility -->
<a id="schemasessionmetrics__perinterface"></a>
<a id="schema_SessionMetrics__PerInterface"></a>
<a id="tocSsessionmetrics__perinterface"></a>
<a id="tocssessionmetrics__perinterface"></a>

```json
{
  "active": 0,
  "errors": {
    "parsing": 0,
    "request_header_too_large": 0,
    "request_payload_too_large": 0,
    "request_target_too_long": 0
  },
  "hard_cap": 0,
  "peak": 0,
  "soft_cap": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|[uint64](#schemauint64)|true|none|none|
|errors|[SessionMetrics__Errors](#schemasessionmetrics__errors)|true|none|none|
|hard_cap|[uint64](#schemauint64)|true|none|none|
|peak|[uint64](#schemauint64)|true|none|none|
|soft_cap|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_SizeString">SizeString</h2>
<!-- backwards compatibility -->
<a id="schemasizestring"></a>
<a id="schema_SizeString"></a>
<a id="tocSsizestring"></a>
<a id="tocssizestring"></a>

```json
"string"
```

<h2 id="tocS_TransactionId">TransactionId</h2>
<!-- backwards compatibility -->
<a id="schematransactionid"></a>
<a id="schema_TransactionId"></a>
<a id="tocStransactionid"></a>
<a id="tocstransactionid"></a>

```json
"string"
```

<h2 id="tocS_TransactionId_array">TransactionId_array</h2>
<!-- backwards compatibility -->
<a id="schematransactionid_array"></a>
<a id="schema_TransactionId_array"></a>
<a id="tocStransactionid_array"></a>
<a id="tocstransactionid_array"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TxStatus">TxStatus</h2>
<!-- backwards compatibility -->
<a id="schematxstatus"></a>
<a id="schema_TxStatus"></a>
<a id="tocStxstatus"></a>
<a id="tocstxstatus"></a>

```json
"Unknown"
```

<h2 id="tocS_base64string">base64string</h2>
<!-- backwards compatibility -->
<a id="schemabase64string"></a>
<a id="schema_base64string"></a>
<a id="tocSbase64string"></a>
<a id="tocsbase64string"></a>

```json
"string"
```

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_ccf__NodeStartupState">ccf__NodeStartupState</h2>
<!-- backwards compatibility -->
<a id="schemaccf__nodestartupstate"></a>
<a id="schema_ccf__NodeStartupState"></a>
<a id="tocSccf__nodestartupstate"></a>
<a id="tocsccf__nodestartupstate"></a>

```json
"Uninitialized"
```

<h2 id="tocS_json">json</h2>
<!-- backwards compatibility -->
<a id="schemajson"></a>
<a id="schema_json"></a>
<a id="tocSjson"></a>
<a id="tocsjson"></a>

```json
null
```

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_string_array">string_array</h2>
<!-- backwards compatibility -->
<a id="schemastring_array"></a>
<a id="schema_string_array"></a>
<a id="tocSstring_array"></a>
<a id="tocsstring_array"></a>

```json
[
  "string"
]
```

<h2 id="tocS_string_to_ConsensusNodeConfig">string_to_ConsensusNodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_consensusnodeconfig"></a>
<a id="schema_string_to_ConsensusNodeConfig"></a>
<a id="tocSstring_to_consensusnodeconfig"></a>
<a id="tocsstring_to_consensusnodeconfig"></a>

```json
{
  "property1": {
    "address": "string"
  },
  "property2": {
    "address": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ConsensusNodeConfig](#schemaconsensusnodeconfig)|false|none|none|

<h2 id="tocS_string_to_NodeInfoNetwork_v2__NetInterface">string_to_NodeInfoNetwork_v2__NetInterface</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_nodeinfonetwork_v2__netinterface"></a>
<a id="schema_string_to_NodeInfoNetwork_v2__NetInterface"></a>
<a id="tocSstring_to_nodeinfonetwork_v2__netinterface"></a>
<a id="tocsstring_to_nodeinfonetwork_v2__netinterface"></a>

```json
{
  "property1": {
    "accepted_endpoints": [
      "string"
    ],
    "app_protocol": "string",
    "bind_address": "string",
    "enabled_operator_features": [
      "SnapshotRead"
    ],
    "endorsement": {
      "authority": "Node"
    },
    "forwarding_timeout_ms": 0,
    "http_configuration": {
      "initial_window_size": "string",
      "max_body_size": "string",
      "max_concurrent_streams_count": 0,
      "max_frame_size": "string",
      "max_header_size": "string",
      "max_headers_count": 0,
      "max_request_target_size": "string"
    },
    "max_open_sessions_hard": 0,
    "max_open_sessions_soft": 0,
    "protocol": "string",
    "published_address": "string",
    "redirections": {
      "to_backup": {
        "kind": "NodeByRole",
        "target": null
      },
      "to_primary": {
        "kind": "NodeByRole",
        "target": null
      }
    }
  },
  "property2": {
    "accepted_endpoints": [
      "string"
    ],
    "app_protocol": "string",
    "bind_address": "string",
    "enabled_operator_features": [
      "SnapshotRead"
    ],
    "endorsement": {
      "authority": "Node"
    },
    "forwarding_timeout_ms": 0,
    "http_configuration": {
      "initial_window_size": "string",
      "max_body_size": "string",
      "max_concurrent_streams_count": 0,
      "max_frame_size": "string",
      "max_header_size": "string",
      "max_headers_count": 0,
      "max_request_target_size": "string"
    },
    "max_open_sessions_hard": 0,
    "max_open_sessions_soft": 0,
    "protocol": "string",
    "published_address": "string",
    "redirections": {
      "to_backup": {
        "kind": "NodeByRole",
        "target": null
      },
      "to_primary": {
        "kind": "NodeByRole",
        "target": null
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NodeInfoNetwork_v2__NetInterface](#schemanodeinfonetwork_v2__netinterface)|false|none|none|

<h2 id="tocS_string_to_SessionMetrics__PerInterface">string_to_SessionMetrics__PerInterface</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_sessionmetrics__perinterface"></a>
<a id="schema_string_to_SessionMetrics__PerInterface"></a>
<a id="tocSstring_to_sessionmetrics__perinterface"></a>
<a id="tocsstring_to_sessionmetrics__perinterface"></a>

```json
{
  "property1": {
    "active": 0,
    "errors": {
      "parsing": 0,
      "request_header_too_large": 0,
      "request_payload_too_large": 0,
      "request_target_too_long": 0
    },
    "hard_cap": 0,
    "peak": 0,
    "soft_cap": 0
  },
  "property2": {
    "active": 0,
    "errors": {
      "parsing": 0,
      "request_header_too_large": 0,
      "request_payload_too_large": 0,
      "request_target_too_long": 0
    },
    "hard_cap": 0,
    "peak": 0,
    "soft_cap": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SessionMetrics__PerInterface](#schemasessionmetrics__perinterface)|false|none|none|

<h2 id="tocS_uint32">uint32</h2>
<!-- backwards compatibility -->
<a id="schemauint32"></a>
<a id="schema_uint32"></a>
<a id="tocSuint32"></a>
<a id="tocsuint32"></a>

```json
0
```

<h2 id="tocS_uint64">uint64</h2>
<!-- backwards compatibility -->
<a id="schemauint64"></a>
<a id="schema_uint64"></a>
<a id="tocSuint64"></a>
<a id="tocsuint64"></a>

```json
0
```
