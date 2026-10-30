<h1 id="qdrant-api">Qdrant API vmaster</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API description for Qdrant vector search engine.

This document describes CRUD and search operations on collections of points (vectors with payload).

Qdrant supports any combinations of `should`, `min_should`, `must` and `must_not` conditions, which makes it possible to use in applications when object could not be described solely by vector. It could be location features, availability flags, and other custom properties businesses should take into account.
## Examples
This examples cover the most basic use-cases - collection creation and basic vector search.
### Create collection
First - let's create a collection with dot-production metric.
```
curl -X PUT 'http://localhost:6333/collections/test_collection' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
      "size": 4,
      "distance": "Dot"
    }
  }'

```
Expected response:
```
{
    "result": true,
    "status": "ok",
    "time": 0.031095451
}
```
We can ensure that collection was created:
```
curl 'http://localhost:6333/collections/test_collection'
```
Expected response:
```
{
  "result": {
    "status": "green",
    "segments_count": 5,
    "disk_data_size": 0,
    "ram_data_size": 0,
    "config": {
      "params": {
        "vectors": {
          "size": 4,
          "distance": "Dot"
        }
      },
      "hnsw_config": {
        "m": 16,
        "ef_construct": 100,
        "full_scan_threshold": 10000
      },
      "optimizer_config": {
        "deleted_threshold": 0.2,
        "vacuum_min_vector_number": 1000,
        "default_segment_number": 2,
        "max_segment_size": null,
        "memmap_threshold": null,
        "indexing_threshold": 20000,
        "flush_interval_sec": 5,
        "max_optimization_threads": null
      },
      "wal_config": {
        "wal_capacity_mb": 32,
        "wal_segments_ahead": 0
      }
    }
  },
  "status": "ok",
  "time": 2.1199e-05
}
```

### Add points
Let's now add vectors with some payload:
```
curl -L -X PUT 'http://localhost:6333/collections/test_collection/points?wait=true' \ -H 'Content-Type: application/json' \ --data-raw '{
  "points": [
    {"id": 1, "vector": [0.05, 0.61, 0.76, 0.74], "payload": {"city": "Berlin"}},
    {"id": 2, "vector": [0.19, 0.81, 0.75, 0.11], "payload": {"city": ["Berlin", "London"] }},
    {"id": 3, "vector": [0.36, 0.55, 0.47, 0.94], "payload": {"city": ["Berlin", "Moscow"] }},
    {"id": 4, "vector": [0.18, 0.01, 0.85, 0.80], "payload": {"city": ["London", "Moscow"] }},
    {"id": 5, "vector": [0.24, 0.18, 0.22, 0.44], "payload": {"count": [0]}},
    {"id": 6, "vector": [0.35, 0.08, 0.11, 0.44]}
  ]
}'
```
Expected response:
```
{
    "result": {
        "operation_id": 0,
        "status": "completed"
    },
    "status": "ok",
    "time": 0.000206061
}
```
### Search with filtering
Let's start with a basic request:
```
curl -L -X POST 'http://localhost:6333/collections/test_collection/points/search' \ -H 'Content-Type: application/json' \ --data-raw '{
    "vector": [0.2,0.1,0.9,0.7],
    "top": 3
}'
```
Expected response:
```
{
    "result": [
        { "id": 4, "score": 1.362, "payload": null, "version": 0 },
        { "id": 1, "score": 1.273, "payload": null, "version": 0 },
        { "id": 3, "score": 1.208, "payload": null, "version": 0 }
    ],
    "status": "ok",
    "time": 0.000055785
}
```
But result is different if we add a filter:
```
curl -L -X POST 'http://localhost:6333/collections/test_collection/points/search' \ -H 'Content-Type: application/json' \ --data-raw '{
    "filter": {
        "should": [
            {
                "key": "city",
                "match": {
                    "value": "London"
                }
            }
        ]
    },
    "vector": [0.2, 0.1, 0.9, 0.7],
    "top": 3
}'
```
Expected response:
```
{
    "result": [
        { "id": 4, "score": 1.362, "payload": null, "version": 0 },
        { "id": 2, "score": 0.871, "payload": null, "version": 0 }
    ],
    "status": "ok",
    "time": 0.000093972
}
```

Base URLs:

* <a href="http://localhost:6333">http://localhost:6333</a>

Email: <a href="mailto:andrey@vasnetsov.com">andrey@vasnetsov.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://qdrant.tech/documentation/">Find out more about Qdrant applications and demo</a>

# Authentication

* API Key (api-key)
    - Parameter Name: **api-key**, in: header. Authorization key, either read-write or read-only

- HTTP Authentication, scheme: bearer

<h1 id="qdrant-api-collections">Collections</h1>

Searchable collections of points.

## List collections

<a id="opIdget_collections"></a>

> Code samples

```bash
curl http://localhost:6333/collections \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections`

Get list name of all existing collections

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "collections": [
      {
        "name": "arxiv-title"
      },
      {
        "name": "arxiv-abstract"
      },
      {
        "name": "medium-title"
      },
      {
        "name": "medium-text"
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="list-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[CollectionsResponse](#schemacollectionsresponse)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Collection info

<a id="opIdget_collection"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}`

Get detailed information about specified existing collection

<h3 id="collection-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to retrieve|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "status": "green",
    "optimizer_status": "ok",
    "warnings": [
      {
        "message": "string"
      }
    ],
    "indexed_vectors_count": 0,
    "points_count": 0,
    "segments_count": 0,
    "config": {
      "params": {
        "vectors": {
          "size": 1,
          "distance": "Cosine",
          "hnsw_config": {
            "m": 0,
            "ef_construct": 4,
            "full_scan_threshold": 10,
            "max_indexing_threads": 0,
            "on_disk": true,
            "memory": "cold",
            "payload_m": 0,
            "inline_storage": true
          },
          "quantization_config": {
            "scalar": {
              "type": "int8",
              "quantile": 0.5,
              "always_ram": true,
              "memory": "cold"
            }
          },
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32",
          "multivector_config": {
            "comparator": "max_sim"
          }
        },
        "shard_number": 1,
        "sharding_method": "auto",
        "replication_factor": 1,
        "write_consistency_factor": 1,
        "read_fan_out_factor": 0,
        "read_fan_out_delay_ms": 0,
        "on_disk_payload": true,
        "payload": {
          "memory": "cold"
        },
        "id_tracker": {
          "memory": "cold"
        },
        "sparse_vectors": {
          "property1": {
            "index": {
              "full_scan_threshold": 0,
              "on_disk": true,
              "memory": "cold",
              "datatype": "float32"
            },
            "modifier": "none"
          },
          "property2": {
            "index": {
              "full_scan_threshold": 0,
              "on_disk": true,
              "memory": "cold",
              "datatype": "float32"
            },
            "modifier": "none"
          }
        }
      },
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 0,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "optimizer_config": {
        "deleted_threshold": 0.2,
        "vacuum_min_vector_number": 1000,
        "default_segment_number": 0,
        "max_segment_size": null,
        "memmap_threshold": null,
        "indexing_threshold": null,
        "flush_interval_sec": 0,
        "max_optimization_threads": null,
        "prevent_unoptimized": null
      },
      "wal_config": {
        "wal_capacity_mb": 1,
        "wal_segments_ahead": 0,
        "wal_retain_closed": 1
      },
      "quantization_config": null,
      "strict_mode_config": {
        "enabled": true,
        "max_query_limit": 0,
        "max_timeout": 0,
        "unindexed_filtering_retrieve": true,
        "unindexed_filtering_update": true,
        "search_max_hnsw_ef": 0,
        "search_allow_exact": true,
        "search_max_oversampling": 0,
        "upsert_max_batchsize": 0,
        "search_max_batchsize": 0,
        "max_collection_vector_size_bytes": 0,
        "read_rate_limit": 0,
        "write_rate_limit": 0,
        "max_collection_payload_size_bytes": 0,
        "max_points_count": 0,
        "filter_max_conditions": 0,
        "condition_max_size": 0,
        "multivector_config": {
          "property1": {
            "max_vectors": 0
          },
          "property2": {
            "max_vectors": 0
          }
        },
        "sparse_config": {
          "property1": {
            "max_length": 0
          },
          "property2": {
            "max_length": 0
          }
        },
        "max_payload_index_count": 0,
        "max_resident_memory_percent": 0
      },
      "metadata": {
        "city": "London",
        "color": "green"
      }
    },
    "payload_schema": {
      "property1": {
        "data_type": "keyword",
        "params": {
          "type": "keyword",
          "is_tenant": true,
          "on_disk": true,
          "memory": "cold",
          "enable_hnsw": true,
          "prefix": true,
          "nested": "string"
        },
        "points": 0
      },
      "property2": {
        "data_type": "keyword",
        "params": {
          "type": "keyword",
          "is_tenant": true,
          "on_disk": true,
          "memory": "cold",
          "enable_hnsw": true,
          "prefix": true,
          "nested": "string"
        },
        "points": 0
      }
    },
    "update_queue": {
      "length": 0,
      "deferred_points": 0
    },
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="collection-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="collection-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[CollectionInfo](#schemacollectioninfo)|false|none|Current statistics and configuration of the collection|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Create collection

<a id="opIdcreate_collection"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "vectors": {
      "size": 1,
      "distance": "Cosine",
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 10,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "quantization_config": {
        "scalar": {
          "type": "int8",
          "quantile": 0.5,
          "always_ram": true,
          "memory": "cold"
        }
      },
      "on_disk": true,
      "memory": "cold",
      "datatype": "float32",
      "multivector_config": {
        "comparator": "max_sim"
      }
    },
    "shard_number": null,
    "sharding_method": null,
    "replication_factor": null,
    "write_consistency_factor": null,
    "on_disk_payload": null,
    "payload": null,
    "id_tracker": null,
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 10,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "wal_config": {
      "wal_capacity_mb": 1,
      "wal_segments_ahead": 0,
      "wal_retain_closed": 0
    },
    "optimizers_config": {
      "deleted_threshold": 0,
      "vacuum_min_vector_number": 100,
      "default_segment_number": 0,
      "max_segment_size": 1,
      "memmap_threshold": 0,
      "indexing_threshold": 0,
      "flush_interval_sec": 0,
      "max_optimization_threads": "auto",
      "prevent_unoptimized": null
    },
    "quantization_config": null,
    "sparse_vectors": {
      "property1": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      },
      "property2": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      }
    },
    "strict_mode_config": {
      "enabled": true,
      "max_query_limit": 1,
      "max_timeout": 1,
      "unindexed_filtering_retrieve": true,
      "unindexed_filtering_update": true,
      "search_max_hnsw_ef": 0,
      "search_allow_exact": true,
      "search_max_oversampling": 0,
      "upsert_max_batchsize": 0,
      "search_max_batchsize": 0,
      "max_collection_vector_size_bytes": 0,
      "read_rate_limit": 1,
      "write_rate_limit": 1,
      "max_collection_payload_size_bytes": 0,
      "max_points_count": 1,
      "filter_max_conditions": 0,
      "condition_max_size": 0,
      "multivector_config": {
        "property1": {
          "max_vectors": 1
        },
        "property2": {
          "max_vectors": 1
        }
      },
      "sparse_config": {
        "property1": {
          "max_length": 1
        },
        "property2": {
          "max_length": 1
        }
      },
      "max_payload_index_count": 0,
      "max_resident_memory_percent": 1
    },
    "metadata": {
      "city": "London",
      "color": "green"
    }
  }'
```

`PUT /collections/{collection_name}`

Create new collection with given parameters

> Body parameter

```json
{
  "vectors": {
    "size": 1,
    "distance": "Cosine",
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 10,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "quantization_config": {
      "scalar": {
        "type": "int8",
        "quantile": 0.5,
        "always_ram": true,
        "memory": "cold"
      }
    },
    "on_disk": true,
    "memory": "cold",
    "datatype": "float32",
    "multivector_config": {
      "comparator": "max_sim"
    }
  },
  "shard_number": null,
  "sharding_method": null,
  "replication_factor": null,
  "write_consistency_factor": null,
  "on_disk_payload": null,
  "payload": null,
  "id_tracker": null,
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 10,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "wal_config": {
    "wal_capacity_mb": 1,
    "wal_segments_ahead": 0,
    "wal_retain_closed": 0
  },
  "optimizers_config": {
    "deleted_threshold": 0,
    "vacuum_min_vector_number": 100,
    "default_segment_number": 0,
    "max_segment_size": 1,
    "memmap_threshold": 0,
    "indexing_threshold": 0,
    "flush_interval_sec": 0,
    "max_optimization_threads": "auto",
    "prevent_unoptimized": null
  },
  "quantization_config": null,
  "sparse_vectors": {
    "property1": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    },
    "property2": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    }
  },
  "strict_mode_config": {
    "enabled": true,
    "max_query_limit": 1,
    "max_timeout": 1,
    "unindexed_filtering_retrieve": true,
    "unindexed_filtering_update": true,
    "search_max_hnsw_ef": 0,
    "search_allow_exact": true,
    "search_max_oversampling": 0,
    "upsert_max_batchsize": 0,
    "search_max_batchsize": 0,
    "max_collection_vector_size_bytes": 0,
    "read_rate_limit": 1,
    "write_rate_limit": 1,
    "max_collection_payload_size_bytes": 0,
    "max_points_count": 1,
    "filter_max_conditions": 0,
    "condition_max_size": 0,
    "multivector_config": {
      "property1": {
        "max_vectors": 1
      },
      "property2": {
        "max_vectors": 1
      }
    },
    "sparse_config": {
      "property1": {
        "max_length": 1
      },
      "property2": {
        "max_length": 1
      }
    },
    "max_payload_index_count": 0,
    "max_resident_memory_percent": 1
  },
  "metadata": {
    "city": "London",
    "color": "green"
  }
}
```

<h3 id="create-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the new collection|
|timeout|query|integer|false|Wait for operation commit timeout in seconds.<br>If timeout is reached - request will return with service error.<br>|
|body|body|[CreateCollection](#schemacreatecollection)|false|Parameters of a new collection|
|» vectors|body|[VectorsConfig](#schemavectorsconfig)|false|Vector params separator for single and multiple vector modes Single mode:<br><br>{ "size": 128, "distance": "Cosine" }<br><br>or multiple mode:<br><br>{ "default": { "size": 128, "distance": "Cosine" } }|
|» shard_number|body|integer(uint32) \| null|false|For auto sharding: Number of shards in collection. - If not specified, selected automatically - Minimum is 1<br><br>For custom sharding: Number of shards in collection per shard group. - Default is 1, meaning that each shard key will be mapped to a single shard - Minimum is 1|
|» sharding_method|body|[ShardingMethod](#schemashardingmethod) \| object \| null|false|Sharding method Default is Auto - points are distributed across all available shards Custom - points are distributed across shards according to shard key|
|» » *anyOf*|body|[ShardingMethod](#schemashardingmethod)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» replication_factor|body|integer(uint32) \| null|false|Number of shards replicas. Default is 1 Minimum is 1|
|» write_consistency_factor|body|integer(uint32) \| null|false|Defines how many replicas should apply the operation for us to consider it successful. Increasing this number will make the collection more resilient to inconsistencies, but will also make it fail if not enough replicas are available. Does not have any performance impact.|
|» on_disk_payload|body|boolean \| null|false|**Deprecated.** Deprecated: use `payload.memory` instead. If true - point's payload will not be stored in memory. It will be read from the disk every time it is requested. This setting saves RAM by (slightly) increasing the response time. Note: those payload values that are involved in filtering and are indexed - remain in RAM.<br><br>Default: true|
|» payload|body|[PayloadStorageParams](#schemapayloadstorageparams) \| object \| null|false|Configuration of the payload storage|
|» » *anyOf*|body|[PayloadStorageParams](#schemapayloadstorageparams)|false|Params of the payload storage|
|» » *anyOf*|body|object \| null|false|none|
|» id_tracker|body|[IdTrackerParams](#schemaidtrackerparams) \| object \| null|false|Configuration of the point id tracker|
|» » *anyOf*|body|[IdTrackerParams](#schemaidtrackerparams)|false|Params of the point id tracker|
|» » *anyOf*|body|object \| null|false|none|
|» hnsw_config|body|[HnswConfigDiff](#schemahnswconfigdiff) \| object \| null|false|Custom params for HNSW index. If none - values from service configuration file are used.|
|» » *anyOf*|body|[HnswConfigDiff](#schemahnswconfigdiff)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» wal_config|body|[WalConfigDiff](#schemawalconfigdiff) \| object \| null|false|Custom params for WAL. If none - values from service configuration file are used.|
|» » *anyOf*|body|[WalConfigDiff](#schemawalconfigdiff)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» optimizers_config|body|[OptimizersConfigDiff](#schemaoptimizersconfigdiff) \| object \| null|false|Custom params for Optimizers.  If none - values from service configuration file are used.|
|» » *anyOf*|body|[OptimizersConfigDiff](#schemaoptimizersconfigdiff)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» quantization_config|body|[QuantizationConfig](#schemaquantizationconfig) \| object \| null|false|Quantization parameters. If none - quantization is disabled.|
|» » *anyOf*|body|[QuantizationConfig](#schemaquantizationconfig)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» sparse_vectors|body|object \| null|false|Sparse vector data config.|
|» » **additionalProperties**|body|[SparseVectorParams](#schemasparsevectorparams)|false|Params of single sparse vector data storage|
|» strict_mode_config|body|[StrictModeConfig](#schemastrictmodeconfig) \| object \| null|false|Strict-mode config.|
|» » *anyOf*|body|[StrictModeConfig](#schemastrictmodeconfig)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» metadata|body|[Payload](#schemapayload) \| object \| null|false|Arbitrary JSON metadata for the collection This can be used to store application-specific information such as creation time, migration data, inference model info, etc.|
|» » *anyOf*|body|[Payload](#schemapayload)|false|none|
|» » *anyOf*|body|object \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|auto|
|» » *anyOf*|custom|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="create-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete collection

<a id="opIddelete_collection"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /collections/{collection_name}`

Drop collection and all associated data

<h3 id="delete-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to delete|
|timeout|query|integer|false|Wait for operation commit timeout in seconds.<br>If timeout is reached - request will return with service error.<br>|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Update collection parameters

<a id="opIdupdate_collection"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "vectors": {
      "property1": {
        "hnsw_config": {
          "m": 0,
          "ef_construct": 4,
          "full_scan_threshold": 10,
          "max_indexing_threads": 0,
          "on_disk": true,
          "memory": "cold",
          "payload_m": 0,
          "inline_storage": true
        },
        "quantization_config": {
          "scalar": {
            "type": "int8",
            "quantile": 0.5,
            "always_ram": true,
            "memory": "cold"
          }
        },
        "on_disk": true,
        "memory": "cold"
      },
      "property2": {
        "hnsw_config": {
          "m": 0,
          "ef_construct": 4,
          "full_scan_threshold": 10,
          "max_indexing_threads": 0,
          "on_disk": true,
          "memory": "cold",
          "payload_m": 0,
          "inline_storage": true
        },
        "quantization_config": {
          "scalar": {
            "type": "int8",
            "quantile": 0.5,
            "always_ram": true,
            "memory": "cold"
          }
        },
        "on_disk": true,
        "memory": "cold"
      }
    },
    "optimizers_config": {
      "deleted_threshold": 0,
      "vacuum_min_vector_number": 100,
      "default_segment_number": 0,
      "max_segment_size": 1,
      "memmap_threshold": 0,
      "indexing_threshold": 0,
      "flush_interval_sec": 0,
      "max_optimization_threads": "auto",
      "prevent_unoptimized": null
    },
    "params": {
      "replication_factor": 1,
      "write_consistency_factor": 1,
      "read_fan_out_factor": 0,
      "read_fan_out_delay_ms": 0,
      "on_disk_payload": null,
      "payload": {
        "memory": "cold"
      },
      "id_tracker": {
        "memory": "cold"
      }
    },
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 10,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "quantization_config": null,
    "sparse_vectors": {
      "property1": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      },
      "property2": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      }
    },
    "strict_mode_config": {
      "enabled": true,
      "max_query_limit": 1,
      "max_timeout": 1,
      "unindexed_filtering_retrieve": true,
      "unindexed_filtering_update": true,
      "search_max_hnsw_ef": 0,
      "search_allow_exact": true,
      "search_max_oversampling": 0,
      "upsert_max_batchsize": 0,
      "search_max_batchsize": 0,
      "max_collection_vector_size_bytes": 0,
      "read_rate_limit": 1,
      "write_rate_limit": 1,
      "max_collection_payload_size_bytes": 0,
      "max_points_count": 1,
      "filter_max_conditions": 0,
      "condition_max_size": 0,
      "multivector_config": {
        "property1": {
          "max_vectors": 1
        },
        "property2": {
          "max_vectors": 1
        }
      },
      "sparse_config": {
        "property1": {
          "max_length": 1
        },
        "property2": {
          "max_length": 1
        }
      },
      "max_payload_index_count": 0,
      "max_resident_memory_percent": 1
    },
    "metadata": {
      "city": "London",
      "color": "green"
    }
  }'
```

`PATCH /collections/{collection_name}`

Update parameters of the existing collection

> Body parameter

```json
{
  "vectors": {
    "property1": {
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 10,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "quantization_config": {
        "scalar": {
          "type": "int8",
          "quantile": 0.5,
          "always_ram": true,
          "memory": "cold"
        }
      },
      "on_disk": true,
      "memory": "cold"
    },
    "property2": {
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 10,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "quantization_config": {
        "scalar": {
          "type": "int8",
          "quantile": 0.5,
          "always_ram": true,
          "memory": "cold"
        }
      },
      "on_disk": true,
      "memory": "cold"
    }
  },
  "optimizers_config": {
    "deleted_threshold": 0,
    "vacuum_min_vector_number": 100,
    "default_segment_number": 0,
    "max_segment_size": 1,
    "memmap_threshold": 0,
    "indexing_threshold": 0,
    "flush_interval_sec": 0,
    "max_optimization_threads": "auto",
    "prevent_unoptimized": null
  },
  "params": {
    "replication_factor": 1,
    "write_consistency_factor": 1,
    "read_fan_out_factor": 0,
    "read_fan_out_delay_ms": 0,
    "on_disk_payload": null,
    "payload": {
      "memory": "cold"
    },
    "id_tracker": {
      "memory": "cold"
    }
  },
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 10,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "quantization_config": null,
  "sparse_vectors": {
    "property1": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    },
    "property2": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    }
  },
  "strict_mode_config": {
    "enabled": true,
    "max_query_limit": 1,
    "max_timeout": 1,
    "unindexed_filtering_retrieve": true,
    "unindexed_filtering_update": true,
    "search_max_hnsw_ef": 0,
    "search_allow_exact": true,
    "search_max_oversampling": 0,
    "upsert_max_batchsize": 0,
    "search_max_batchsize": 0,
    "max_collection_vector_size_bytes": 0,
    "read_rate_limit": 1,
    "write_rate_limit": 1,
    "max_collection_payload_size_bytes": 0,
    "max_points_count": 1,
    "filter_max_conditions": 0,
    "condition_max_size": 0,
    "multivector_config": {
      "property1": {
        "max_vectors": 1
      },
      "property2": {
        "max_vectors": 1
      }
    },
    "sparse_config": {
      "property1": {
        "max_length": 1
      },
      "property2": {
        "max_length": 1
      }
    },
    "max_payload_index_count": 0,
    "max_resident_memory_percent": 1
  },
  "metadata": {
    "city": "London",
    "color": "green"
  }
}
```

<h3 id="update-collection-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to update|
|timeout|query|integer|false|Wait for operation commit timeout in seconds.<br>If timeout is reached - request will return with service error.<br>|
|body|body|[UpdateCollection](#schemaupdatecollection)|false|New parameters|
|» vectors|body|[VectorsConfigDiff](#schemavectorsconfigdiff) \| object \| null|false|Map of vector data parameters to update for each named vector. To update parameters in a collection having a single unnamed vector, use an empty string as name.|
|» » *anyOf*|body|[VectorsConfigDiff](#schemavectorsconfigdiff)|false|Vector update params for multiple vectors<br><br>{ "vector_name": { "hnsw_config": { "m": 8 } } }|
|» » *anyOf*|body|object \| null|false|none|
|» optimizers_config|body|[OptimizersConfigDiff](#schemaoptimizersconfigdiff) \| object \| null|false|Custom params for Optimizers.  If none - it is left unchanged. This operation is blocking, it will only proceed once all current optimizations are complete|
|» » *anyOf*|body|[OptimizersConfigDiff](#schemaoptimizersconfigdiff)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» params|body|[CollectionParamsDiff](#schemacollectionparamsdiff) \| object \| null|false|Collection base params. If none - it is left unchanged.|
|» » *anyOf*|body|[CollectionParamsDiff](#schemacollectionparamsdiff)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» hnsw_config|body|[HnswConfigDiff](#schemahnswconfigdiff) \| object \| null|false|HNSW parameters to update for the collection index. If none - it is left unchanged.|
|» » *anyOf*|body|[HnswConfigDiff](#schemahnswconfigdiff)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» quantization_config|body|[QuantizationConfigDiff](#schemaquantizationconfigdiff) \| object \| null|false|Quantization parameters to update. If none - it is left unchanged.|
|» » *anyOf*|body|[QuantizationConfigDiff](#schemaquantizationconfigdiff)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» sparse_vectors|body|[SparseVectorsConfig](#schemasparsevectorsconfig) \| object \| null|false|Map of sparse vector data parameters to update for each sparse vector.|
|» » *anyOf*|body|[SparseVectorsConfig](#schemasparsevectorsconfig)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» strict_mode_config|body|[StrictModeConfig](#schemastrictmodeconfig) \| object \| null|false|none|
|» » *anyOf*|body|[StrictModeConfig](#schemastrictmodeconfig)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» metadata|body|[Payload](#schemapayload) \| object \| null|false|Metadata to update for the collection. If provided, this will merge with existing metadata. Individual keys can be removed by setting their value to `null`.|
|» » *anyOf*|body|[Payload](#schemapayload)|false|none|
|» » *anyOf*|body|object \| null|false|none|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="update-collection-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="update-collection-parameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Check the existence of a collection

<a id="opIdcollection_exists"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/exists \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/exists`

Returns "true" if the given collection name exists, and "false" otherwise

<h3 id="check-the-existence-of-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "exists": true
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="check-the-existence-of-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="check-the-existence-of-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[CollectionExistence](#schemacollectionexistence)|false|none|State of existence of a collection, true = exists, false = does not exist|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Create named vector

<a id="opIdcreate_vector_name"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/vectors/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "dense": {
      "size": 1,
      "distance": "Cosine",
      "multivector_config": {
        "comparator": "max_sim"
      },
      "datatype": "float32"
    }
  }'
```

`PUT /collections/{collection_name}/vectors/{vector_name}`

Create a new named vector on an existing collection

> Body parameter

```json
{
  "dense": {
    "size": 1,
    "distance": "Cosine",
    "multivector_config": {
      "comparator": "max_sim"
    },
    "datatype": "float32"
  }
}
```

<h3 id="create-named-vector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|vector_name|path|string|true|Name of the vector to create|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[VectorNameConfig](#schemavectornameconfig)|false|Vector configuration - dense or sparse|
|» *anyOf*|body|[DenseVectorNameConfig](#schemadensevectornameconfig)|false|Wrapper for dense vector creation config.|
|» *anyOf*|body|[SparseVectorNameConfig](#schemasparsevectornameconfig)|false|Wrapper for sparse vector creation config.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="create-named-vector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-named-vector-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete named vector

<a id="opIddelete_vector_name"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/vectors/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /collections/{collection_name}/vectors/{vector_name}`

Delete a named vector from a collection

<h3 id="delete-named-vector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|vector_name|path|string|true|Name of the vector to delete|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-named-vector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-named-vector-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Get optimization progress

<a id="opIdget_optimizations"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/optimizations \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/optimizations`

Get progress of ongoing and completed optimizations for a collection

<h3 id="get-optimization-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|with|query|string|false|Comma-separated list of optional fields to include in the response.<br>Possible values: queued, completed, idle_segments.|
|completed_limit|query|integer|false|Maximum number of completed optimizations to return.<br>Ignored if `completed` is not in the `with` parameter.|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "summary": {
      "queued_optimizations": 0,
      "queued_segments": 0,
      "queued_points": 0,
      "idle_segments": 0
    },
    "running": [
      {
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "optimizer": "string",
        "status": "optimizing",
        "segments": [
          {
            "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "points_count": 0
          }
        ],
        "progress": {
          "name": "string",
          "started_at": "1970-01-01T00:00:00Z",
          "finished_at": "1970-01-01T00:00:00Z",
          "duration_sec": 0,
          "done": 0,
          "total": 0,
          "children": [
            {}
          ]
        }
      }
    ],
    "queued": [
      {
        "optimizer": "string",
        "segments": [
          {
            "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "points_count": 0
          }
        ]
      }
    ],
    "completed": [
      {
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "optimizer": "string",
        "status": "optimizing",
        "segments": [
          {
            "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "points_count": 0
          }
        ],
        "progress": {
          "name": "string",
          "started_at": "1970-01-01T00:00:00Z",
          "finished_at": "1970-01-01T00:00:00Z",
          "duration_sec": 0,
          "done": 0,
          "total": 0,
          "children": [
            {}
          ]
        }
      }
    ],
    "idle_segments": [
      {
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "points_count": 0
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="get-optimization-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-optimization-progress-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[OptimizationsResponse](#schemaoptimizationsresponse)|false|none|Optimizations progress for the collection|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-points">Points</h1>

Float-point vectors with payload.

## Get point

<a id="opIdget_point"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/42 \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/points/{id}`

Retrieve full information of single point by id

<h3 id="get-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to retrieve from|
|id|path|[ExtendedPointId](#schemaextendedpointid)|true|Id of the point|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "id": 42,
    "payload": {
      "city": "London",
      "color": "green"
    },
    "vector": [
      0.875,
      0.140625,
      0.897599995136261
    ],
    "shard_key": "region_1",
    "order_value": 42
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="get-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-point-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[Record](#schemarecord)|false|none|Point data|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Upsert points

<a id="opIdupsert_points"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "batch": {
      "ids": [
        42
      ],
      "vectors": [
        [
          0
        ]
      ],
      "payloads": [
        {
          "city": "London",
          "color": "green"
        }
      ]
    },
    "shard_key": "region_1",
    "update_filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "update_mode": "upsert"
  }'
```

`PUT /collections/{collection_name}/points`

Perform insert + updates on points. If point with given ID already exists - it will be overwritten.

> Body parameter

```json
{
  "batch": {
    "ids": [
      42
    ],
    "vectors": [
      [
        0
      ]
    ],
    "payloads": [
      {
        "city": "London",
        "color": "green"
      }
    ]
  },
  "shard_key": "region_1",
  "update_filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "update_mode": "upsert"
}
```

<h3 id="upsert-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to update from|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[PointInsertOperations](#schemapointinsertoperations)|false|Operation to perform on points|
|» *anyOf*|body|[PointsBatch](#schemapointsbatch)|false|none|
|» *anyOf*|body|[PointsList](#schemapointslist)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="upsert-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="upsert-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Get points

<a id="opIdget_points"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "ids": [
      42
    ],
    "with_payload": true,
    "with_vector": true
  }'
```

`POST /collections/{collection_name}/points`

Retrieve multiple points by specified IDs

> Body parameter

```json
{
  "shard_key": "region_1",
  "ids": [
    42
  ],
  "with_payload": true,
  "with_vector": true
}
```

<h3 id="get-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to retrieve from|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[PointRequest](#schemapointrequest)|false|List of points to retrieve|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|Specify in which shards to look for the points, if not specified - look in all shards|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» ids|body|[[ExtendedPointId](#schemaextendedpointid)]|true|Look for points with ids|
|» with_payload|body|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|Select which payload to return with the response. Default is true.|
|» » *anyOf*|body|[WithPayloadInterface](#schemawithpayloadinterface)|false|Options for specifying which payload to include or not|
|» » *anyOf*|body|object \| null|false|none|
|» with_vector|body|[WithVector](#schemawithvector)|false|Options for specifying which vector to include|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": [
    {
      "id": 42,
      "payload": {
        "city": "London",
        "color": "green"
      },
      "vector": [
        0.875,
        0.140625,
        0.897599995136261
      ],
      "shard_key": "region_1",
      "order_value": 42
    }
  ]
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="get-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[[Record](#schemarecord)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete points

<a id="opIddelete_points"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "points": [
      42
    ],
    "shard_key": "region_1"
  }'
```

`POST /collections/{collection_name}/points/delete`

Delete points

> Body parameter

```json
{
  "points": [
    42
  ],
  "shard_key": "region_1"
}
```

<h3 id="delete-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to delete from|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[PointsSelector](#schemapointsselector)|false|Operation to perform on points|
|» *anyOf*|body|[PointIdsList](#schemapointidslist)|false|none|
|» *anyOf*|body|[FilterSelector](#schemafilterselector)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Update vectors

<a id="opIdupdate_vectors"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/vectors \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "points": [
      {
        "id": 42,
        "vector": [
          0.875,
          0.140625,
          0.897599995136261
        ]
      }
    ],
    "shard_key": "region_1",
    "update_filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    }
  }'
```

`PUT /collections/{collection_name}/points/vectors`

Update specified named vectors on points, keep unspecified vectors intact.

> Body parameter

```json
{
  "points": [
    {
      "id": 42,
      "vector": [
        0.875,
        0.140625,
        0.897599995136261
      ]
    }
  ],
  "shard_key": "region_1",
  "update_filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  }
}
```

<h3 id="update-vectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to update from|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[UpdateVectors](#schemaupdatevectors)|false|Update named vectors on points|
|» points|body|[[PointVectors](#schemapointvectors)]|true|Points with named vectors|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» update_filter|body|[Filter](#schemafilter) \| object \| null|false|none|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="update-vectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="update-vectors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete vectors

<a id="opIddelete_vectors"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/vectors/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "points": [
      42
    ],
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "vector": [
      "string"
    ],
    "shard_key": "region_1"
  }'
```

`POST /collections/{collection_name}/points/vectors/delete`

Delete named vectors from the given points.

> Body parameter

```json
{
  "points": [
    42
  ],
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "vector": [
    "string"
  ],
  "shard_key": "region_1"
}
```

<h3 id="delete-vectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to delete from|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[DeleteVectors](#schemadeletevectors)|false|Delete named vectors from points|
|» points|body|[[ExtendedPointId](#schemaextendedpointid)]|false|Deletes values from each point in this list|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Deletes values from points that satisfy this filter condition|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» vector|body|[string]|true|Vector names|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-vectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-vectors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Overwrite payload

<a id="opIdoverwrite_payload"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/payload \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "payload": {
      "city": "London",
      "color": "green"
    },
    "points": [
      42
    ],
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "shard_key": "region_1",
    "key": "string"
  }'
```

`PUT /collections/{collection_name}/points/payload`

Replace full payload of points with new one

> Body parameter

```json
{
  "payload": {
    "city": "London",
    "color": "green"
  },
  "points": [
    42
  ],
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "shard_key": "region_1",
  "key": "string"
}
```

<h3 id="overwrite-payload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to set from|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[SetPayload](#schemasetpayload)|false|Payload and points selector|
|» payload|body|[Payload](#schemapayload)|true|none|
|» points|body|[[ExtendedPointId](#schemaextendedpointid)]|false|Assigns payload to each point in this list|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Assigns payload to each point that satisfy this filter condition|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» key|body|string \| null|false|Assigns payload to each point that satisfy this path of property|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="overwrite-payload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="overwrite-payload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Set payload

<a id="opIdset_payload"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/payload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "payload": {
      "city": "London",
      "color": "green"
    },
    "points": [
      42
    ],
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "shard_key": "region_1",
    "key": "string"
  }'
```

`POST /collections/{collection_name}/points/payload`

Set payload values for points

> Body parameter

```json
{
  "payload": {
    "city": "London",
    "color": "green"
  },
  "points": [
    42
  ],
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "shard_key": "region_1",
  "key": "string"
}
```

<h3 id="set-payload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to set from|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[SetPayload](#schemasetpayload)|false|Set payload on points|
|» payload|body|[Payload](#schemapayload)|true|none|
|» points|body|[[ExtendedPointId](#schemaextendedpointid)]|false|Assigns payload to each point in this list|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Assigns payload to each point that satisfy this filter condition|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» key|body|string \| null|false|Assigns payload to each point that satisfy this path of property|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="set-payload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="set-payload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete payload

<a id="opIddelete_payload"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/payload/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "keys": [
      "string"
    ],
    "points": [
      42
    ],
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "shard_key": "region_1"
  }'
```

`POST /collections/{collection_name}/points/payload/delete`

Delete specified key payload for points

> Body parameter

```json
{
  "keys": [
    "string"
  ],
  "points": [
    42
  ],
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "shard_key": "region_1"
}
```

<h3 id="delete-payload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to delete from|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[DeletePayload](#schemadeletepayload)|false|delete payload on points|
|» keys|body|[string]|true|List of payload keys to remove from payload|
|» points|body|[[ExtendedPointId](#schemaextendedpointid)]|false|Deletes values from each point in this list|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Deletes values from points that satisfy this filter condition|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-payload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-payload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Clear payload

<a id="opIdclear_payload"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/payload/clear \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "points": [
      42
    ],
    "shard_key": "region_1"
  }'
```

`POST /collections/{collection_name}/points/payload/clear`

Remove all payload for specified points

> Body parameter

```json
{
  "points": [
    42
  ],
  "shard_key": "region_1"
}
```

<h3 id="clear-payload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to clear payload from|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[PointsSelector](#schemapointsselector)|false|clear payload on points|
|» *anyOf*|body|[PointIdsList](#schemapointidslist)|false|none|
|» *anyOf*|body|[FilterSelector](#schemafilterselector)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="clear-payload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="clear-payload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Batch update points

<a id="opIdbatch_update"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "operations": [
      {
        "upsert": {
          "batch": {
            "ids": [
              42
            ],
            "vectors": [
              [
                0
              ]
            ],
            "payloads": [
              {
                "city": "London",
                "color": "green"
              }
            ]
          },
          "shard_key": "region_1",
          "update_filter": {
            "should": {},
            "min_should": {},
            "must": {},
            "must_not": {}
          },
          "update_mode": "upsert"
        }
      }
    ]
  }'
```

`POST /collections/{collection_name}/points/batch`

Apply a series of update operations for points, vectors and payloads

> Body parameter

```json
{
  "operations": [
    {
      "upsert": {
        "batch": {
          "ids": [
            42
          ],
          "vectors": [
            [
              0
            ]
          ],
          "payloads": [
            {
              "city": "London",
              "color": "green"
            }
          ]
        },
        "shard_key": "region_1",
        "update_filter": {
          "should": {},
          "min_should": {},
          "must": {},
          "must_not": {}
        },
        "update_mode": "upsert"
      }
    }
  ]
}
```

<h3 id="batch-update-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to apply operations on|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[UpdateOperations](#schemaupdateoperations)|false|update operations|
|» operations|body|[[UpdateOperation](#schemaupdateoperation)]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": [
    {
      "operation_id": 0,
      "status": "acknowledged"
    }
  ]
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="batch-update-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="batch-update-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[[UpdateResult](#schemaupdateresult)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Scroll points

<a id="opIdscroll_points"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/scroll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "offset": 42,
    "limit": 1,
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "with_payload": true,
    "with_vector": true,
    "order_by": "string"
  }'
```

`POST /collections/{collection_name}/points/scroll`

Scroll request - paginate over all points which matches given filtering condition

> Body parameter

```json
{
  "shard_key": "region_1",
  "offset": 42,
  "limit": 1,
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "with_payload": true,
  "with_vector": true,
  "order_by": "string"
}
```

<h3 id="scroll-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to retrieve from|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[ScrollRequest](#schemascrollrequest)|false|Pagination and filter parameters|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|Specify in which shards to look for the points, if not specified - look in all shards|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» offset|body|[ExtendedPointId](#schemaextendedpointid) \| object \| null|false|Start ID to read points from.|
|» » *anyOf*|body|[ExtendedPointId](#schemaextendedpointid)|false|Type, used for specifying point ID in user interface|
|» » *anyOf*|body|object \| null|false|none|
|» limit|body|integer(uint) \| null|false|Page size. Default: 10|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Look only for points which satisfies this conditions. If not provided - all points.|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» with_payload|body|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|Select which payload to return with the response. Default is true.|
|» » *anyOf*|body|[WithPayloadInterface](#schemawithpayloadinterface)|false|Options for specifying which payload to include or not|
|» » *anyOf*|body|object \| null|false|none|
|» with_vector|body|[WithVector](#schemawithvector)|false|Options for specifying which vector to include|
|» order_by|body|[OrderByInterface](#schemaorderbyinterface) \| object \| null|false|Order the records by a payload field.|
|» » *anyOf*|body|[OrderByInterface](#schemaorderbyinterface)|false|none|
|» » *anyOf*|body|object \| null|false|none|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "points": [
      {
        "id": 40,
        "payload": {
          "city": "London",
          "color": "green"
        },
        "vector": [
          0.875,
          0.140625,
          0.897599995136261
        ],
        "shard_key": "region_1"
      },
      {
        "id": 41,
        "payload": {
          "city": "Paris",
          "color": "red"
        },
        "vector": [
          0.75,
          0.640625,
          0.8945000171661377
        ],
        "shard_key": "region_1"
      }
    ],
    "next_page_offset": 42
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="scroll-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="scroll-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[ScrollResult](#schemascrollresult)|false|none|Result of the points read request|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Count points

<a id="opIdcount_points"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/count \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "exact": true
  }'
```

`POST /collections/{collection_name}/points/count`

Count points which matches given filtering condition

> Body parameter

```json
{
  "shard_key": "region_1",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "exact": true
}
```

<h3 id="count-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to count in|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[CountRequest](#schemacountrequest)|false|Request counts of points which matches given filtering condition|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|Specify in which shards to look for the points, if not specified - look in all shards|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Look only for points which satisfies this conditions|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» exact|body|boolean|false|If true, count exact number of points. If false, count approximate number of points faster. Approximate count might be unreliable during the indexing process. Default: true|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "count": 0
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="count-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="count-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[CountResult](#schemacountresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Facet a payload key with a given filter.

<a id="opIdfacet"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/facet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "key": "string",
    "limit": 1,
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "exact": true
  }'
```

`POST /collections/{collection_name}/facet`

Count points that satisfy the given filter for each unique value of a payload key.

> Body parameter

```json
{
  "shard_key": "region_1",
  "key": "string",
  "limit": 1,
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "exact": true
}
```

<h3 id="facet-a-payload-key-with-a-given-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to facet in|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[FacetRequest](#schemafacetrequest)|false|Request counts of points for each unique value of a payload key|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» key|body|string|true|Payload key to use for faceting.|
|» limit|body|integer(uint) \| null|false|Max number of hits to return. Default is 10.|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Filter conditions - only consider points that satisfy these conditions.|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» exact|body|boolean \| null|false|Whether to do a more expensive exact count for each of the values in the facet. Default is false.|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "hits": [
      {
        "value": "string",
        "count": 0
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="facet-a-payload-key-with-a-given-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="facet-a-payload-key-with-a-given-filter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[FacetResponse](#schemafacetresponse)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-search">Search</h1>

Find points in a collection.

## Query points

<a id="opIdquery_points"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "prefetch": null,
    "query": [
      0
    ],
    "using": "string",
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "params": {
      "hnsw_ef": 1,
      "exact": false,
      "quantization": {
        "ignore": false,
        "rescore": true,
        "oversampling": 1
      },
      "indexed_only": false,
      "acorn": {
        "enable": false,
        "max_selectivity": 0
      },
      "idf": "global"
    },
    "score_threshold": 0,
    "limit": 1,
    "offset": 0,
    "with_vector": true,
    "with_payload": true,
    "lookup_from": null
  }'
```

`POST /collections/{collection_name}/points/query`

Universally query points. This endpoint covers all capabilities of search, recommend, discover, filters. But also enables hybrid and multi-stage queries.

> Body parameter

```json
{
  "shard_key": "region_1",
  "prefetch": null,
  "query": [
    0
  ],
  "using": "string",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "params": {
    "hnsw_ef": 1,
    "exact": false,
    "quantization": {
      "ignore": false,
      "rescore": true,
      "oversampling": 1
    },
    "indexed_only": false,
    "acorn": {
      "enable": false,
      "max_selectivity": 0
    },
    "idf": "global"
  },
  "score_threshold": 0,
  "limit": 1,
  "offset": 0,
  "with_vector": true,
  "with_payload": true,
  "lookup_from": null
}
```

<h3 id="query-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to query|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[QueryRequest](#schemaqueryrequest)|false|Describes the query to make to the collection|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» prefetch|body|[Prefetch](#schemaprefetch) \| [[Prefetch](#schemaprefetch)] \| object \| null|false|Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es).|
|» » *anyOf*|body|[Prefetch](#schemaprefetch)|false|none|
|» » *anyOf*|body|[[Prefetch](#schemaprefetch)]|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» query|body|[QueryInterface](#schemaqueryinterface) \| object \| null|false|Query to perform. If missing without prefetches, returns points ordered by their IDs.|
|» » *anyOf*|body|[QueryInterface](#schemaqueryinterface)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» using|body|string \| null|false|Define which vector name to use for querying. If missing, the default vector is used. For a `text` query, the payload field whose text index to search.|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Filter conditions - return only those points that satisfy the specified conditions.|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» params|body|[SearchParams](#schemasearchparams) \| object \| null|false|Search params for when there is no prefetch|
|» » *anyOf*|body|[SearchParams](#schemasearchparams)|false|Additional parameters of the search|
|» » *anyOf*|body|object \| null|false|none|
|» score_threshold|body|number(float) \| null|false|Return points with scores better than this threshold.|
|» limit|body|integer(uint) \| null|false|Max number of points to return. Default is 10.|
|» offset|body|integer(uint) \| null|false|Offset of the result. Skip this many points. Default is 0|
|» with_vector|body|[WithVector](#schemawithvector) \| object \| null|false|Options for specifying which vectors to include into the response. Default is false.|
|» » *anyOf*|body|[WithVector](#schemawithvector)|false|Options for specifying which vector to include|
|» » *anyOf*|body|object \| null|false|none|
|» with_payload|body|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|Options for specifying which payload to include or not. Default is false.|
|» » *anyOf*|body|[WithPayloadInterface](#schemawithpayloadinterface)|false|Options for specifying which payload to include or not|
|» » *anyOf*|body|object \| null|false|none|
|» lookup_from|body|[LookupLocation](#schemalookuplocation) \| object \| null|false|The location to use for IDs lookup, if not specified - use the current collection and the 'using' vector Note: the other collection vectors should have the same vector size as the 'using' vector in the current collection|
|» » *anyOf*|body|[LookupLocation](#schemalookuplocation)|false|Defines a location to use for looking up the vector. Specifies collection and vector field name.|
|» » *anyOf*|body|object \| null|false|none|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "points": [
      {
        "id": 42,
        "version": 3,
        "score": 0.75,
        "payload": {
          "city": "London",
          "color": "green"
        },
        "vector": [
          0.875,
          0.140625,
          0.897599995136261
        ],
        "shard_key": "region_1",
        "order_value": 42
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="query-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="query-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[QueryResponse](#schemaqueryresponse)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Query points in batch

<a id="opIdquery_batch_points"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/query/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "searches": [
      {
        "shard_key": "region_1",
        "prefetch": null,
        "query": [
          0
        ],
        "using": "string",
        "filter": {
          "should": {},
          "min_should": {},
          "must": {},
          "must_not": {}
        },
        "params": {
          "hnsw_ef": 1,
          "exact": false,
          "quantization": {
            "ignore": false,
            "rescore": true,
            "oversampling": 1
          },
          "indexed_only": false,
          "acorn": {
            "enable": false,
            "max_selectivity": 0
          },
          "idf": "global"
        },
        "score_threshold": 0,
        "limit": 1,
        "offset": 0,
        "with_vector": true,
        "with_payload": true,
        "lookup_from": null
      }
    ]
  }'
```

`POST /collections/{collection_name}/points/query/batch`

Universally query points in batch. This endpoint covers all capabilities of search, recommend, discover, filters. But also enables hybrid and multi-stage queries.

> Body parameter

```json
{
  "searches": [
    {
      "shard_key": "region_1",
      "prefetch": null,
      "query": [
        0
      ],
      "using": "string",
      "filter": {
        "should": {},
        "min_should": {},
        "must": {},
        "must_not": {}
      },
      "params": {
        "hnsw_ef": 1,
        "exact": false,
        "quantization": {
          "ignore": false,
          "rescore": true,
          "oversampling": 1
        },
        "indexed_only": false,
        "acorn": {
          "enable": false,
          "max_selectivity": 0
        },
        "idf": "global"
      },
      "score_threshold": 0,
      "limit": 1,
      "offset": 0,
      "with_vector": true,
      "with_payload": true,
      "lookup_from": null
    }
  ]
}
```

<h3 id="query-points-in-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to query|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[QueryRequestBatch](#schemaqueryrequestbatch)|false|Describes the queries to make to the collection|
|» searches|body|[[QueryRequest](#schemaqueryrequest)]|true|none|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": [
    {
      "points": [
        {
          "id": 42,
          "version": 3,
          "score": 0.75,
          "payload": {
            "city": "London",
            "color": "green"
          },
          "vector": [
            0.875,
            0.140625,
            0.897599995136261
          ],
          "shard_key": "region_1",
          "order_value": 42
        }
      ]
    }
  ]
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="query-points-in-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="query-points-in-batch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[[QueryResponse](#schemaqueryresponse)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Query points, grouped by a given payload field

<a id="opIdquery_points_groups"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/query/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "prefetch": null,
    "query": [
      0
    ],
    "using": "string",
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "params": {
      "hnsw_ef": 1,
      "exact": false,
      "quantization": {
        "ignore": false,
        "rescore": true,
        "oversampling": 1
      },
      "indexed_only": false,
      "acorn": {
        "enable": false,
        "max_selectivity": 0
      },
      "idf": "global"
    },
    "score_threshold": 0,
    "with_vector": true,
    "with_payload": true,
    "lookup_from": null,
    "group_by": "string",
    "group_size": 1,
    "limit": 1,
    "with_lookup": "string"
  }'
```

`POST /collections/{collection_name}/points/query/groups`

Universally query points, grouped by a given payload field

> Body parameter

```json
{
  "shard_key": "region_1",
  "prefetch": null,
  "query": [
    0
  ],
  "using": "string",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "params": {
    "hnsw_ef": 1,
    "exact": false,
    "quantization": {
      "ignore": false,
      "rescore": true,
      "oversampling": 1
    },
    "indexed_only": false,
    "acorn": {
      "enable": false,
      "max_selectivity": 0
    },
    "idf": "global"
  },
  "score_threshold": 0,
  "with_vector": true,
  "with_payload": true,
  "lookup_from": null,
  "group_by": "string",
  "group_size": 1,
  "limit": 1,
  "with_lookup": "string"
}
```

<h3 id="query-points-grouped-by-a-given-payload-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to query|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[QueryGroupsRequest](#schemaquerygroupsrequest)|false|Describes the query to make to the collection|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» prefetch|body|[Prefetch](#schemaprefetch) \| [[Prefetch](#schemaprefetch)] \| object \| null|false|Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es).|
|» » *anyOf*|body|[Prefetch](#schemaprefetch)|false|none|
|» » *anyOf*|body|[[Prefetch](#schemaprefetch)]|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» query|body|[QueryInterface](#schemaqueryinterface) \| object \| null|false|Query to perform. If missing without prefetches, returns points ordered by their IDs.|
|» » *anyOf*|body|[QueryInterface](#schemaqueryinterface)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» using|body|string \| null|false|Define which vector name to use for querying. If missing, the default vector is used. For a `text` query, the payload field whose text index to search.|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Filter conditions - return only those points that satisfy the specified conditions.|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» params|body|[SearchParams](#schemasearchparams) \| object \| null|false|Search params for when there is no prefetch|
|» » *anyOf*|body|[SearchParams](#schemasearchparams)|false|Additional parameters of the search|
|» » *anyOf*|body|object \| null|false|none|
|» score_threshold|body|number(float) \| null|false|Return points with scores better than this threshold.|
|» with_vector|body|[WithVector](#schemawithvector) \| object \| null|false|Options for specifying which vectors to include into the response. Default is false.|
|» » *anyOf*|body|[WithVector](#schemawithvector)|false|Options for specifying which vector to include|
|» » *anyOf*|body|object \| null|false|none|
|» with_payload|body|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|Options for specifying which payload to include or not. Default is false.|
|» » *anyOf*|body|[WithPayloadInterface](#schemawithpayloadinterface)|false|Options for specifying which payload to include or not|
|» » *anyOf*|body|object \| null|false|none|
|» lookup_from|body|[LookupLocation](#schemalookuplocation) \| object \| null|false|The location to use for IDs lookup, if not specified - use the current collection and the 'using' vector Note: the other collection vectors should have the same vector size as the 'using' vector in the current collection|
|» » *anyOf*|body|[LookupLocation](#schemalookuplocation)|false|Defines a location to use for looking up the vector. Specifies collection and vector field name.|
|» » *anyOf*|body|object \| null|false|none|
|» group_by|body|string|true|Payload field to group by, must be a string or number field. If the field contains more than 1 value, all values will be used for grouping. One point can be in multiple groups.|
|» group_size|body|integer(uint) \| null|false|Maximum amount of points to return per group. Default is 3.|
|» limit|body|integer(uint) \| null|false|Maximum amount of groups to return. Default is 10.|
|» with_lookup|body|[WithLookupInterface](#schemawithlookupinterface) \| object \| null|false|Look for points in another collection using the group ids|
|» » *anyOf*|body|[WithLookupInterface](#schemawithlookupinterface)|false|none|
|» » *anyOf*|body|object \| null|false|none|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "groups": [
      {
        "hits": [
          {
            "id": 42,
            "version": 3,
            "score": 0.75,
            "payload": {
              "city": "London",
              "color": "green"
            },
            "vector": [
              0.875,
              0.140625,
              0.897599995136261
            ],
            "shard_key": "region_1",
            "order_value": 42
          }
        ],
        "id": "string",
        "lookup": {
          "id": 42,
          "payload": {
            "city": "London",
            "color": "green"
          },
          "vector": [
            0.875,
            0.140625,
            0.897599995136261
          ],
          "shard_key": "region_1",
          "order_value": 42
        }
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="query-points-grouped-by-a-given-payload-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="query-points-grouped-by-a-given-payload-field-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[GroupsResult](#schemagroupsresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Search points matrix distance pairs

<a id="opIdsearch_matrix_pairs"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/search/matrix/pairs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "sample": 2,
    "limit": 1,
    "using": "string"
  }'
```

`POST /collections/{collection_name}/points/search/matrix/pairs`

Compute distance matrix for sampled points with a pair based output format

> Body parameter

```json
{
  "shard_key": "region_1",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "sample": 2,
  "limit": 1,
  "using": "string"
}
```

<h3 id="search-points-matrix-distance-pairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to search in|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[SearchMatrixRequest](#schemasearchmatrixrequest)|false|Search matrix request with optional filtering|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|Specify in which shards to look for the points, if not specified - look in all shards|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Look only for points which satisfies this conditions|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» sample|body|integer(uint) \| null|false|How many points to select and search within. Default is 10.|
|» limit|body|integer(uint) \| null|false|How many neighbours per sample to find. Default is 3.|
|» using|body|string \| null|false|Define which vector name to use for querying. If missing, the default vector is used.|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "pairs": [
      {
        "a": 42,
        "b": 42,
        "score": 0
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="search-points-matrix-distance-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="search-points-matrix-distance-pairs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[SearchMatrixPairsResponse](#schemasearchmatrixpairsresponse)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Search points matrix distance offsets

<a id="opIdsearch_matrix_offsets"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/points/search/matrix/offsets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "sample": 2,
    "limit": 1,
    "using": "string"
  }'
```

`POST /collections/{collection_name}/points/search/matrix/offsets`

Compute distance matrix for sampled points with an offset based output format

> Body parameter

```json
{
  "shard_key": "region_1",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "sample": 2,
  "limit": 1,
  "using": "string"
}
```

<h3 id="search-points-matrix-distance-offsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to search in|
|consistency|query|[ReadConsistency](#schemareadconsistency)|false|Define read consistency guarantees for the operation|
|timeout|query|integer|false|If set, overrides global timeout for this request. Unit is seconds.|
|body|body|[SearchMatrixRequest](#schemasearchmatrixrequest)|false|Search matrix request with optional filtering|
|» shard_key|body|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|Specify in which shards to look for the points, if not specified - look in all shards|
|» » *anyOf*|body|[ShardKeySelector](#schemashardkeyselector)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» filter|body|[Filter](#schemafilter) \| object \| null|false|Look only for points which satisfies this conditions|
|» » *anyOf*|body|[Filter](#schemafilter)|false|none|
|» » *anyOf*|body|object \| null|false|none|
|» sample|body|integer(uint) \| null|false|How many points to select and search within. Default is 10.|
|» limit|body|integer(uint) \| null|false|How many neighbours per sample to find. Default is 3.|
|» using|body|string \| null|false|Define which vector name to use for querying. If missing, the default vector is used.|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "offsets_row": [
      0
    ],
    "offsets_col": [
      0
    ],
    "scores": [
      0
    ],
    "ids": [
      42
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="search-points-matrix-distance-offsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="search-points-matrix-distance-offsets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[SearchMatrixOffsetsResponse](#schemasearchmatrixoffsetsresponse)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-aliases">Aliases</h1>

Additional names for existing collections.

## Update aliases of the collections

<a id="opIdupdate_aliases"></a>

> Code samples

```bash
curl http://localhost:6333/collections/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "actions": [
      {
        "create_alias": {
          "collection_name": "string",
          "alias_name": "string"
        }
      }
    ]
  }'
```

`POST /collections/aliases`

> Body parameter

```json
{
  "actions": [
    {
      "create_alias": {
        "collection_name": "string",
        "alias_name": "string"
      }
    }
  ]
}
```

<h3 id="update-aliases-of-the-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeout|query|integer|false|Wait for operation commit timeout in seconds.<br>If timeout is reached - request will return with service error.<br>|
|body|body|[ChangeAliasesOperation](#schemachangealiasesoperation)|false|Alias update operations|
|» actions|body|[[AliasOperations](#schemaaliasoperations)]|true|none|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="update-aliases-of-the-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="update-aliases-of-the-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## List aliases for collection

<a id="opIdget_collection_aliases"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/aliases \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/aliases`

Get list of all aliases for a collection

<h3 id="list-aliases-for-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "aliases": [
      {
        "alias_name": "blogs-title",
        "collection_name": "arivx-title"
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="list-aliases-for-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-aliases-for-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[CollectionsAliasesResponse](#schemacollectionsaliasesresponse)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## List collections aliases

<a id="opIdget_collections_aliases"></a>

> Code samples

```bash
curl http://localhost:6333/aliases \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /aliases`

Get list of all existing collections aliases

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "aliases": [
      {
        "alias_name": "blogs-title",
        "collection_name": "arivx-title"
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="list-collections-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-collections-aliases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[CollectionsAliasesResponse](#schemacollectionsaliasesresponse)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-indexes">Indexes</h1>

Indexes for payloads associated with points.

## Create index for field in collection

<a id="opIdcreate_field_index"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/index \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "field_name": "string",
    "field_schema": "keyword"
  }'
```

`PUT /collections/{collection_name}/index`

Create index for field in collection

> Body parameter

```json
{
  "field_name": "string",
  "field_schema": "keyword"
}
```

<h3 id="create-index-for-field-in-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|
|body|body|[CreateFieldIndex](#schemacreatefieldindex)|false|Field name|
|» field_name|body|string|true|none|
|» field_schema|body|[PayloadFieldSchema](#schemapayloadfieldschema) \| object \| null|false|none|
|» » *anyOf*|body|[PayloadFieldSchema](#schemapayloadfieldschema)|false|none|
|» » *anyOf*|body|object \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="create-index-for-field-in-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-index-for-field-in-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete index for field in collection

<a id="opIddelete_field_index"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/index/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /collections/{collection_name}/index/{field_name}`

Delete field index for collection

<h3 id="delete-index-for-field-in-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|field_name|path|string|true|Name of the field where to delete the index|
|wait|query|boolean|false|If true, wait for changes to actually happen|
|ordering|query|[WriteOrdering](#schemawriteordering)|false|define ordering guarantees for the operation|
|timeout|query|integer|false|Timeout for the operation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ordering|weak|
|ordering|medium|
|ordering|strong|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "operation_id": 0,
    "status": "acknowledged"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-index-for-field-in-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-index-for-field-in-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[UpdateResult](#schemaupdateresult)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-distributed">Distributed</h1>

Service distributed setup.

## List shard keys

<a id="opIdlist_shard_keys"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/shards`

<h3 id="list-shard-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to list shard keys for|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "shard_keys": [
      {
        "key": "region_1"
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="list-shard-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-shard-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[ShardKeysResponse](#schemashardkeysresponse)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Create shard key

<a id="opIdcreate_shard_key"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1",
    "shards_number": 1,
    "replication_factor": 1,
    "placement": [
      0
    ],
    "initial_state": "Active"
  }'
```

`PUT /collections/{collection_name}/shards`

> Body parameter

```json
{
  "shard_key": "region_1",
  "shards_number": 1,
  "replication_factor": 1,
  "placement": [
    0
  ],
  "initial_state": "Active"
}
```

<h3 id="create-shard-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to create shards for|
|timeout|query|integer|false|Wait for operation commit timeout in seconds.<br>If timeout is reached - request will return with service error.<br>|
|body|body|[CreateShardingKey](#schemacreateshardingkey)|false|Shard key configuration|
|» shard_key|body|[ShardKey](#schemashardkey)|true|none|
|» shards_number|body|integer(uint32) \| null|false|How many shards to create for this key If not specified, will use the default value from config|
|» replication_factor|body|integer(uint32) \| null|false|How many replicas to create for each shard If not specified, will use the default value from config|
|» placement|body|[integer(uint64)]|false|Placement of shards for this key List of peer ids, that can be used to place shards for this key If not specified, will be randomly placed among all peers|
|» initial_state|body|[ReplicaState](#schemareplicastate) \| object \| null|false|Initial state of the shards for this key If not specified, will be `Initializing` first and then `Active` Warning: do not change this unless you know what you are doing|
|» » *anyOf*|body|[ReplicaState](#schemareplicastate)|false|State of the single shard within a replica set.|
|» » *anyOf*|body|object \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|Active|
|» » *anyOf*|Dead|
|» » *anyOf*|Partial|
|» » *anyOf*|Initializing|
|» » *anyOf*|Listener|
|» » *anyOf*|PartialSnapshot|
|» » *anyOf*|Recovery|
|» » *anyOf*|Resharding|
|» » *anyOf*|ReshardingScaleDown|
|» » *anyOf*|ActiveRead|
|» » *anyOf*|ManualRecovery|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="create-shard-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-shard-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete shard key

<a id="opIddelete_shard_key"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "shard_key": "region_1"
  }'
```

`POST /collections/{collection_name}/shards/delete`

> Body parameter

```json
{
  "shard_key": "region_1"
}
```

<h3 id="delete-shard-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to create shards for|
|timeout|query|integer|false|Wait for operation commit timeout in seconds.<br>If timeout is reached - request will return with service error.<br>|
|body|body|[DropShardingKey](#schemadropshardingkey)|false|Select shard key to delete|
|» shard_key|body|[ShardKey](#schemashardkey)|true|none|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-shard-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-shard-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Get cluster status info

<a id="opIdcluster_status"></a>

> Code samples

```bash
curl http://localhost:6333/cluster \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /cluster`

Get information about the current state and composition of the cluster

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "status": "disabled"
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="get-cluster-status-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-cluster-status-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[ClusterStatus](#schemaclusterstatus)|false|none|Information about current cluster status and structure|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Collect cluster telemetry data

<a id="opIdcluster_telemetry"></a>

> Code samples

```bash
curl http://localhost:6333/cluster/telemetry \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /cluster/telemetry`

Get telemetry data, from the point of view of the cluster. This includes peers info, collections info, shard transfers, and resharding status

<h3 id="collect-cluster-telemetry-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|details_level|query|integer|false|The level of detail to include in the response|
|timeout|query|integer|false|Timeout for this request|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "collections": {
      "property1": {
        "id": "string",
        "shards": [
          {
            "id": 0,
            "key": "region_1",
            "replicas": [
              {
                "peer_id": 0,
                "state": "Active",
                "status": "green",
                "total_optimized_points": 0,
                "vectors_size_bytes": 0,
                "payloads_size_bytes": 0,
                "num_points": 0,
                "num_vectors": 0,
                "num_vectors_by_name": {
                  "property1": 0,
                  "property2": 0
                },
                "shard_cleaning_status": "started",
                "partial_snapshot": {
                  "ongoing_create_snapshot_requests": 0,
                  "is_recovering": true,
                  "recovery_timestamp": 0
                }
              }
            ]
          }
        ],
        "reshardings": [
          {
            "direction": "up",
            "shard_id": 0,
            "peer_id": 0,
            "shard_key": "region_1"
          }
        ],
        "shard_transfers": [
          {
            "shard_id": 0,
            "to_shard_id": 0,
            "from": 0,
            "to": 0,
            "sync": true,
            "method": "stream_records",
            "comment": "string"
          }
        ]
      },
      "property2": {
        "id": "string",
        "shards": [
          {
            "id": 0,
            "key": "region_1",
            "replicas": [
              {
                "peer_id": 0,
                "state": "Active",
                "status": "green",
                "total_optimized_points": 0,
                "vectors_size_bytes": 0,
                "payloads_size_bytes": 0,
                "num_points": 0,
                "num_vectors": 0,
                "num_vectors_by_name": {
                  "property1": 0,
                  "property2": 0
                },
                "shard_cleaning_status": "started",
                "partial_snapshot": {
                  "ongoing_create_snapshot_requests": 0,
                  "is_recovering": true,
                  "recovery_timestamp": 0
                }
              }
            ]
          }
        ],
        "reshardings": [
          {
            "direction": "up",
            "shard_id": 0,
            "peer_id": 0,
            "shard_key": "region_1"
          }
        ],
        "shard_transfers": [
          {
            "shard_id": 0,
            "to_shard_id": 0,
            "from": 0,
            "to": 0,
            "sync": true,
            "method": "stream_records",
            "comment": "string"
          }
        ]
      }
    },
    "cluster": {
      "enabled": true,
      "number_of_peers": 0,
      "peers": {
        "property1": {
          "uri": "string",
          "responsive": true,
          "details": {
            "version": "string",
            "role": "Follower",
            "is_voter": true,
            "term": 0,
            "commit": 0,
            "num_pending_operations": 0,
            "consensus_thread_status": {
              "consensus_thread_status": "working",
              "last_update": "1970-01-01T00:00:00Z"
            }
          }
        },
        "property2": {
          "uri": "string",
          "responsive": true,
          "details": {
            "version": "string",
            "role": "Follower",
            "is_voter": true,
            "term": 0,
            "commit": 0,
            "num_pending_operations": 0,
            "consensus_thread_status": {
              "consensus_thread_status": "working",
              "last_update": "1970-01-01T00:00:00Z"
            }
          }
        }
      }
    }
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="collect-cluster-telemetry-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="collect-cluster-telemetry-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[DistributedTelemetryData](#schemadistributedtelemetrydata)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Tries to recover current peer Raft state.

<a id="opIdrecover_current_peer"></a>

> Code samples

```bash
curl http://localhost:6333/cluster/recover \
  -X POST \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`POST /cluster/recover`

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="tries-to-recover-current-peer-raft-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="tries-to-recover-current-peer-raft-state-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Remove peer from the cluster

<a id="opIdremove_peer"></a>

> Code samples

```bash
curl http://localhost:6333/cluster/peer/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /cluster/peer/{peer_id}`

Tries to remove peer from the cluster. Will return an error if peer has shards on it.

<h3 id="remove-peer-from-the-cluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|peer_id|path|integer|true|Id of the peer|
|timeout|query|integer|false|Wait for operation commit timeout in seconds.<br>If timeout is reached - request will return with service error.<br>|
|force|query|boolean|false|If true - removes peer even if it has shards/replicas on it.|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="remove-peer-from-the-cluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="remove-peer-from-the-cluster-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Collection cluster info

<a id="opIdcollection_cluster_info"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/cluster \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/cluster`

Get cluster information for a collection

<h3 id="collection-cluster-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection to retrieve the cluster info for|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "peer_id": 0,
    "shard_count": 0,
    "local_shards": [
      {
        "shard_id": 0,
        "shard_key": "region_1",
        "points_count": 0,
        "state": "Active"
      }
    ],
    "remote_shards": [
      {
        "shard_id": 0,
        "shard_key": "region_1",
        "peer_id": 0,
        "state": "Active"
      }
    ],
    "shard_transfers": [
      {
        "shard_id": 0,
        "to_shard_id": 0,
        "from": 0,
        "to": 0,
        "sync": true,
        "method": "stream_records",
        "comment": "string"
      }
    ],
    "resharding_operations": [
      {
        "direction": "up",
        "shard_id": 0,
        "peer_id": 0,
        "shard_key": "region_1"
      }
    ]
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="collection-cluster-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="collection-cluster-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[CollectionClusterInfo](#schemacollectionclusterinfo)|false|none|Current clustering distribution for the collection|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Update collection cluster setup

<a id="opIdupdate_collection_cluster"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/cluster \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "move_shard": {
      "shard_id": 0,
      "to_peer_id": 0,
      "from_peer_id": 0,
      "method": "stream_records"
    }
  }'
```

`POST /collections/{collection_name}/cluster`

> Body parameter

```json
{
  "move_shard": {
    "shard_id": 0,
    "to_peer_id": 0,
    "from_peer_id": 0,
    "method": "stream_records"
  }
}
```

<h3 id="update-collection-cluster-setup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection on which to to apply the cluster update operation|
|timeout|query|integer|false|Wait for operation commit timeout in seconds.<br>If timeout is reached - request will return with service error.<br>|
|body|body|[ClusterOperations](#schemaclusteroperations)|false|Collection cluster update operations|
|» *anyOf*|body|[MoveShardOperation](#schemamoveshardoperation)|false|none|
|» *anyOf*|body|[ReplicateShardOperation](#schemareplicateshardoperation)|false|none|
|» *anyOf*|body|[AbortTransferOperation](#schemaaborttransferoperation)|false|none|
|» *anyOf*|body|[DropReplicaOperation](#schemadropreplicaoperation)|false|none|
|» *anyOf*|body|[CreateShardingKeyOperation](#schemacreateshardingkeyoperation)|false|none|
|» *anyOf*|body|[DropShardingKeyOperation](#schemadropshardingkeyoperation)|false|none|
|» *anyOf*|body|[RestartTransferOperation](#schemarestarttransferoperation)|false|none|
|» *anyOf*|body|[StartReshardingOperation](#schemastartreshardingoperation)|false|none|
|» *anyOf*|body|[AbortReshardingOperation](#schemaabortreshardingoperation)|false|none|
|» *anyOf*|body|[ReplicatePointsOperation](#schemareplicatepointsoperation)|false|none|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="update-collection-cluster-setup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="update-collection-cluster-setup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-snapshots">Snapshots</h1>

Storage and collections snapshots.

## Recover from an uploaded snapshot

<a id="opIdrecover_from_uploaded_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/snapshots/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -F 'snapshot=@/path/to/file'
```

`POST /collections/{collection_name}/snapshots/upload`

Recover local collection data from an uploaded snapshot. This will overwrite any data, stored on this node, for the collection. If collection does not exist - it will be created.

> Body parameter

```yaml
snapshot: string
```

<h3 id="recover-from-an-uploaded-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|
|priority|query|[SnapshotPriority](#schemasnapshotpriority)|false|Defines source of truth for snapshot recovery|
|checksum|query|string|false|Optional SHA256 checksum to verify snapshot integrity before recovery.|
|body|body|object|false|Snapshot to recover from|
|» snapshot|body|string(binary)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|priority|no_sync|
|priority|snapshot|
|priority|replica|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="recover-from-an-uploaded-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="recover-from-an-uploaded-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Recover from a snapshot

<a id="opIdrecover_from_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/snapshots/recover \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "location": "http://example.com",
    "priority": null,
    "checksum": null,
    "api_key": null
  }'
```

`PUT /collections/{collection_name}/snapshots/recover`

Recover local collection data from a snapshot. This will overwrite any data, stored on this node, for the collection. If collection does not exist - it will be created.

> Body parameter

```json
{
  "location": "http://example.com",
  "priority": null,
  "checksum": null,
  "api_key": null
}
```

<h3 id="recover-from-a-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|
|body|body|[SnapshotRecover](#schemasnapshotrecover)|false|Snapshot to recover from|
|» location|body|string(uri)|true|Examples: - URL `http://localhost:8080/collections/my_collection/snapshots/my_snapshot` - Local path `file:///qdrant/snapshots/test_collection-2022-08-04-10-49-10.snapshot`|
|» priority|body|[SnapshotPriority](#schemasnapshotpriority) \| object \| null|false|Defines which data should be used as a source of truth if there are other replicas in the cluster. If set to `Snapshot`, the snapshot will be used as a source of truth, and the current state will be overwritten. If set to `Replica`, the current state will be used as a source of truth, and after recovery it will be synchronized from other replicas.|
|» » *anyOf*|body|[SnapshotPriority](#schemasnapshotpriority)|false|Defines source of truth for snapshot recovery:<br><br>`NoSync` means - restore snapshot without *any* additional synchronization. `Snapshot` means - prefer snapshot data over the current state. `Replica` means - prefer existing data over the snapshot.|
|» » *anyOf*|body|object \| null|false|none|
|» checksum|body|string \| null|false|Optional SHA256 checksum to verify snapshot integrity before recovery.|
|» api_key|body|string \| null|false|Optional API key used when fetching the snapshot from a remote URL.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|no_sync|
|» » *anyOf*|snapshot|
|» » *anyOf*|replica|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="recover-from-a-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="recover-from-a-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## List collection snapshots

<a id="opIdlist_snapshots"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/snapshots \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/snapshots`

Get list of snapshots for a collection

<h3 id="list-collection-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": [
    {
      "name": "my-collection-3766212330831337-2024-07-22-08-31-55.snapshot",
      "creation_time": "2022-08-04T10:49:10",
      "size": 1000000,
      "checksum": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"
    }
  ]
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="list-collection-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-collection-snapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[[SnapshotDescription](#schemasnapshotdescription)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Create collection snapshot

<a id="opIdcreate_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/snapshots \
  -X POST \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`POST /collections/{collection_name}/snapshots`

Create new snapshot for a collection

<h3 id="create-collection-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection for which to create a snapshot|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": {
    "name": "my-collection-3766212330831337-2024-07-22-08-31-55.snapshot",
    "creation_time": "2022-08-04T10:49:10",
    "size": 1000000,
    "checksum": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"
  }
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="create-collection-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-collection-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[SnapshotDescription](#schemasnapshotdescription)|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Download collection snapshot

<a id="opIdget_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/snapshots/string \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/snapshots/{snapshot_name}`

Download specified snapshot from a collection as a file

<h3 id="download-collection-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|snapshot_name|path|string|true|Name of the snapshot to download|

> Example responses

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="download-collection-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot file|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete collection snapshot

<a id="opIddelete_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/snapshots/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /collections/{collection_name}/snapshots/{snapshot_name}`

Delete snapshot for a collection

<h3 id="delete-collection-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection for which to delete a snapshot|
|snapshot_name|path|string|true|Name of the snapshot to delete|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-collection-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-collection-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## List of storage snapshots

<a id="opIdlist_full_snapshots"></a>

> Code samples

```bash
curl http://localhost:6333/snapshots \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /snapshots`

Get list of snapshots of the whole storage

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": [
    {
      "name": "my-collection-3766212330831337-2024-07-22-08-31-55.snapshot",
      "creation_time": "2022-08-04T10:49:10",
      "size": 1000000,
      "checksum": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"
    }
  ]
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="list-of-storage-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-of-storage-snapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[[SnapshotDescription](#schemasnapshotdescription)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Create storage snapshot

<a id="opIdcreate_full_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/snapshots \
  -X POST \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`POST /snapshots`

Create new snapshot of the whole storage

<h3 id="create-storage-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": {
    "name": "my-collection-3766212330831337-2024-07-22-08-31-55.snapshot",
    "creation_time": "2022-08-04T10:49:10",
    "size": 1000000,
    "checksum": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"
  }
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="create-storage-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-storage-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[SnapshotDescription](#schemasnapshotdescription)|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Download storage snapshot

<a id="opIdget_full_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/snapshots/string \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /snapshots/{snapshot_name}`

Download specified snapshot of the whole storage as a file

<h3 id="download-storage-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshot_name|path|string|true|Name of the snapshot to download|

> Example responses

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="download-storage-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot file|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete storage snapshot

<a id="opIddelete_full_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/snapshots/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /snapshots/{snapshot_name}`

Delete snapshot of the whole storage

<h3 id="delete-storage-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshot_name|path|string|true|Name of the full snapshot to delete|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-storage-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-storage-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Download shard snapshot

<a id="opIdstream_shard_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards/0/snapshot \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/shards/{shard_id}/snapshot`

Stream the current state of a shard as a snapshot file

<h3 id="download-shard-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|shard_id|path|integer|true|Id of the shard|

> Example responses

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="download-shard-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot file|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Recover shard from an uploaded snapshot

<a id="opIdrecover_shard_from_uploaded_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards/0/snapshots/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -F 'snapshot=@/path/to/file'
```

`POST /collections/{collection_name}/shards/{shard_id}/snapshots/upload`

Recover shard of a local collection from an uploaded snapshot. This will overwrite any data, stored on this node, for the collection shard.

> Body parameter

```yaml
snapshot: string
```

<h3 id="recover-shard-from-an-uploaded-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|shard_id|path|integer|true|Id of the shard to recover|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|
|priority|query|[SnapshotPriority](#schemasnapshotpriority)|false|Defines source of truth for snapshot recovery|
|checksum|query|string|false|Optional SHA256 checksum to verify snapshot integrity before recovery.|
|body|body|object|false|Snapshot to recover from|
|» snapshot|body|string(binary)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|priority|no_sync|
|priority|snapshot|
|priority|replica|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="recover-shard-from-an-uploaded-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="recover-shard-from-an-uploaded-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Recover from a snapshot

<a id="opIdrecover_shard_from_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards/0/snapshots/recover \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "location": "http://example.com",
    "priority": null,
    "checksum": null,
    "api_key": null
  }'
```

`PUT /collections/{collection_name}/shards/{shard_id}/snapshots/recover`

Recover shard of a local collection data from a snapshot. This will overwrite any data, stored in this shard, for the collection.

> Body parameter

```json
{
  "location": "http://example.com",
  "priority": null,
  "checksum": null,
  "api_key": null
}
```

<h3 id="recover-from-a-snapshot-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|shard_id|path|integer|true|Id of the shard to recover|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|
|body|body|[ShardSnapshotRecover](#schemashardsnapshotrecover)|false|Snapshot to recover from|
|» location|body|[ShardSnapshotLocation](#schemashardsnapshotlocation)|true|none|
|» priority|body|[SnapshotPriority](#schemasnapshotpriority) \| object \| null|false|none|
|» » *anyOf*|body|[SnapshotPriority](#schemasnapshotpriority)|false|Defines source of truth for snapshot recovery:<br><br>`NoSync` means - restore snapshot without *any* additional synchronization. `Snapshot` means - prefer snapshot data over the current state. `Replica` means - prefer existing data over the snapshot.|
|» » *anyOf*|body|object \| null|false|none|
|» checksum|body|string \| null|false|Optional SHA256 checksum to verify snapshot integrity before recovery.|
|» api_key|body|string \| null|false|Optional API key used when fetching the snapshot from a remote URL.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|no_sync|
|» » *anyOf*|snapshot|
|» » *anyOf*|replica|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="recover-from-a-snapshot-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="recover-from-a-snapshot-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## List shards snapshots for a collection

<a id="opIdlist_shard_snapshots"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards/0/snapshots \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/shards/{shard_id}/snapshots`

Get list of snapshots for a shard of a collection

<h3 id="list-shards-snapshots-for-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|shard_id|path|integer|true|Id of the shard|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": [
    {
      "name": "my-collection-3766212330831337-2024-07-22-08-31-55.snapshot",
      "creation_time": "2022-08-04T10:49:10",
      "size": 1000000,
      "checksum": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"
    }
  ]
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="list-shards-snapshots-for-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-shards-snapshots-for-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[[SnapshotDescription](#schemasnapshotdescription)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Create shard snapshot

<a id="opIdcreate_shard_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards/0/snapshots \
  -X POST \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`POST /collections/{collection_name}/shards/{shard_id}/snapshots`

Create new snapshot of a shard for a collection

<h3 id="create-shard-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection for which to create a snapshot|
|shard_id|path|integer|true|Id of the shard|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": {
    "name": "my-collection-3766212330831337-2024-07-22-08-31-55.snapshot",
    "creation_time": "2022-08-04T10:49:10",
    "size": 1000000,
    "checksum": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"
  }
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="create-shard-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-shard-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[SnapshotDescription](#schemasnapshotdescription)|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Download collection snapshot

<a id="opIdget_shard_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards/0/snapshots/string \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /collections/{collection_name}/shards/{shard_id}/snapshots/{snapshot_name}`

Download specified snapshot of a shard from a collection as a file

<h3 id="download-collection-snapshot-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection|
|shard_id|path|integer|true|Id of the shard|
|snapshot_name|path|string|true|Name of the snapshot to download|

> Example responses

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="download-collection-snapshot-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot file|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Delete shard snapshot

<a id="opIddelete_shard_snapshot"></a>

> Code samples

```bash
curl http://localhost:6333/collections/string/shards/0/snapshots/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /collections/{collection_name}/shards/{shard_id}/snapshots/{snapshot_name}`

Delete snapshot of a shard for a collection

<h3 id="delete-shard-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|Name of the collection for which to delete a snapshot|
|shard_id|path|integer|true|Id of the shard|
|snapshot_name|path|string|true|Name of the snapshot to delete|
|wait|query|boolean|false|If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.|

> Example responses

> 200 Response

```json
{
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> 202 Response

```json
{
  "time": 0,
  "status": "string"
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="delete-shard-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|202|Accepted|operation is accepted|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-shard-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-service">Service</h1>

Qdrant service utilities.

## Returns information about the running Qdrant instance

<a id="opIdroot"></a>

> Code samples

```bash
curl http://localhost:6333/ \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /`

Returns information about the running Qdrant instance like version and commit id

> Example responses

> 200 Response

```json
{
  "title": "string",
  "version": "string",
  "commit": "string"
}
```

<h3 id="returns-information-about-the-running-qdrant-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Qdrant server version information|[VersionInfo](#schemaversioninfo)|
|4XX|Client Error|error|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Collect telemetry data

<a id="opIdtelemetry"></a>

> Code samples

```bash
curl http://localhost:6333/telemetry \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /telemetry`

Collect telemetry data including app info, system info, collections info, cluster info, configs and statistics

<h3 id="collect-telemetry-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anonymize|query|boolean|false|If true, anonymize result|
|details_level|query|integer|false|Level of details in telemetry data. Minimal level is 0, maximal is infinity|
|per_collection|query|boolean|false|If true, include per-collection request statistics in the response|
|timeout|query|integer|false|Timeout for this request|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "id": "string",
    "app": {
      "name": "string",
      "version": "string",
      "features": {
        "debug": true,
        "service_debug_feature": true,
        "recovery_mode": true,
        "gpu": true,
        "rocksdb": true,
        "staging": true
      },
      "runtime_features": {
        "all": false,
        "incremental_hnsw_building": true,
        "appendable_quantization": true,
        "single_file_mmap_vector_storage": true,
        "async_payload_storage": true,
        "async_hnsw_graph": false,
        "write_segment_manifest": false,
        "append_only_mutations": false,
        "compact_bitmask": false,
        "append_only_storages": false,
        "compact_logstore_tracker": false,
        "transfer_raw_points": true,
        "transfer_raw_payloads": true,
        "persist_proxy_segments": false,
        "combined_vector_storage": true,
        "serverless_compatible": false
      },
      "low_memory_mode": "disabled",
      "hnsw_global_config": {
        "healing_threshold": 0.3
      },
      "system": {
        "distribution": "string",
        "distribution_version": "string",
        "is_docker": true,
        "container_runtime": "none",
        "cores": 0,
        "cpu_cores_used": 0,
        "ram_size": 0,
        "disk_size": 0,
        "cpu_flags": "string",
        "cpu_endian": "little",
        "gpu_devices": [
          {
            "name": "string"
          }
        ]
      },
      "jwt_rbac": true,
      "hide_jwt_dashboard": true,
      "audit": {
        "dir": "string",
        "rotation": "string",
        "max_log_files": 0,
        "trust_forwarded_headers": true,
        "log_api": true,
        "output": "string",
        "dir_size_bytes": 0
      },
      "startup": "1970-01-01T00:00:00Z"
    },
    "collections": {
      "number_of_collections": 0,
      "max_collections": 0,
      "collections": [
        {
          "id": "string",
          "init_time_ms": 0,
          "config": {
            "params": {
              "vectors": {
                "size": 1,
                "distance": "Cosine",
                "hnsw_config": {
                  "m": 0,
                  "ef_construct": 4,
                  "full_scan_threshold": 10,
                  "max_indexing_threads": 0,
                  "on_disk": true,
                  "memory": "cold",
                  "payload_m": 0,
                  "inline_storage": true
                },
                "quantization_config": {
                  "scalar": {
                    "type": "int8",
                    "quantile": 0.5,
                    "always_ram": true,
                    "memory": "cold"
                  }
                },
                "on_disk": true,
                "memory": "cold",
                "datatype": "float32",
                "multivector_config": {
                  "comparator": "max_sim"
                }
              },
              "shard_number": 1,
              "sharding_method": "auto",
              "replication_factor": 1,
              "write_consistency_factor": 1,
              "read_fan_out_factor": 0,
              "read_fan_out_delay_ms": 0,
              "on_disk_payload": true,
              "payload": {
                "memory": "cold"
              },
              "id_tracker": {
                "memory": "cold"
              },
              "sparse_vectors": {
                "property1": {
                  "index": {
                    "full_scan_threshold": 0,
                    "on_disk": true,
                    "memory": "cold",
                    "datatype": "float32"
                  },
                  "modifier": "none"
                },
                "property2": {
                  "index": {
                    "full_scan_threshold": 0,
                    "on_disk": true,
                    "memory": "cold",
                    "datatype": "float32"
                  },
                  "modifier": "none"
                }
              }
            },
            "hnsw_config": {
              "m": 0,
              "ef_construct": 4,
              "full_scan_threshold": 0,
              "max_indexing_threads": 0,
              "on_disk": true,
              "memory": "cold",
              "payload_m": 0,
              "inline_storage": true
            },
            "optimizer_config": {
              "deleted_threshold": 0.2,
              "vacuum_min_vector_number": 1000,
              "default_segment_number": 0,
              "max_segment_size": null,
              "memmap_threshold": null,
              "indexing_threshold": null,
              "flush_interval_sec": 0,
              "max_optimization_threads": null,
              "prevent_unoptimized": null
            },
            "wal_config": {
              "wal_capacity_mb": 1,
              "wal_segments_ahead": 0,
              "wal_retain_closed": 1
            },
            "quantization_config": null,
            "strict_mode_config": {
              "enabled": true,
              "max_query_limit": 0,
              "max_timeout": 0,
              "unindexed_filtering_retrieve": true,
              "unindexed_filtering_update": true,
              "search_max_hnsw_ef": 0,
              "search_allow_exact": true,
              "search_max_oversampling": 0,
              "upsert_max_batchsize": 0,
              "search_max_batchsize": 0,
              "max_collection_vector_size_bytes": 0,
              "read_rate_limit": 0,
              "write_rate_limit": 0,
              "max_collection_payload_size_bytes": 0,
              "max_points_count": 0,
              "filter_max_conditions": 0,
              "condition_max_size": 0,
              "multivector_config": {
                "property1": {
                  "max_vectors": 0
                },
                "property2": {
                  "max_vectors": 0
                }
              },
              "sparse_config": {
                "property1": {
                  "max_length": 0
                },
                "property2": {
                  "max_length": 0
                }
              },
              "max_payload_index_count": 0,
              "max_resident_memory_percent": 0
            },
            "uuid": null,
            "metadata": {
              "city": "London",
              "color": "green"
            }
          },
          "shards": [
            {
              "id": 0,
              "key": "region_1",
              "local": {
                "variant_name": "string",
                "status": "green",
                "total_optimized_points": 0,
                "vectors_size_bytes": 0,
                "payloads_size_bytes": 0,
                "num_points": 0,
                "num_vectors": 0,
                "num_vectors_by_name": {
                  "property1": 0,
                  "property2": 0
                },
                "segments": [
                  {
                    "info": {
                      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                      "segment_type": "plain",
                      "num_vectors": 0,
                      "num_points": 0,
                      "num_deferred_points": 0,
                      "num_deleted_deferred_points": 0,
                      "num_indexed_vectors": 0,
                      "num_deleted_vectors": 0,
                      "vectors_size_bytes": 0,
                      "payloads_size_bytes": 0,
                      "ram_usage_bytes": 0,
                      "disk_usage_bytes": 0,
                      "is_appendable": true,
                      "index_schema": {
                        "property1": {
                          "data_type": "keyword",
                          "params": {
                            "type": "keyword",
                            "is_tenant": true,
                            "on_disk": true,
                            "memory": "cold",
                            "enable_hnsw": true,
                            "prefix": true,
                            "nested": "string"
                          },
                          "points": 0
                        },
                        "property2": {
                          "data_type": "keyword",
                          "params": {
                            "type": "keyword",
                            "is_tenant": true,
                            "on_disk": true,
                            "memory": "cold",
                            "enable_hnsw": true,
                            "prefix": true,
                            "nested": "string"
                          },
                          "points": 0
                        }
                      },
                      "vector_data": {
                        "property1": {
                          "num_vectors": 0,
                          "num_indexed_vectors": 0,
                          "num_deleted_vectors": 0,
                          "io_backend": "mmap"
                        },
                        "property2": {
                          "num_vectors": 0,
                          "num_indexed_vectors": 0,
                          "num_deleted_vectors": 0,
                          "io_backend": "mmap"
                        }
                      },
                      "payload_storage_io_backend": "mmap",
                      "deferred_internal_id": 0
                    },
                    "config": {
                      "vector_data": {},
                      "sparse_vector_data": {
                        "property1": {
                          "index": {
                            "full_scan_threshold": 0,
                            "index_type": "MutableRam",
                            "datatype": "float32",
                            "memory": "cold"
                          },
                          "storage_type": "mmap",
                          "modifier": "none"
                        },
                        "property2": {
                          "index": {
                            "full_scan_threshold": 0,
                            "index_type": "MutableRam",
                            "datatype": "float32",
                            "memory": "cold"
                          },
                          "storage_type": "mmap",
                          "modifier": "none"
                        }
                      },
                      "payload_storage_type": {
                        "type": "mmap"
                      },
                      "id_tracker_memory": "cold"
                    },
                    "vector_index_searches": [
                      {
                        "index_name": "string",
                        "unfiltered_plain": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "unfiltered_hnsw": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "unfiltered_sparse": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "filtered_plain": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "filtered_small_cardinality": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "filtered_large_cardinality": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "filtered_acorn": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "filtered_exact": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "filtered_sparse": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        },
                        "unfiltered_exact": {
                          "count": 0,
                          "fail_count": 0,
                          "avg_duration_micros": 0,
                          "min_duration_micros": 0,
                          "max_duration_micros": 0,
                          "total_duration_micros": 0,
                          "last_responded": "1970-01-01T00:00:00Z"
                        }
                      }
                    ],
                    "payload_field_indices": [
                      {
                        "field_name": "string",
                        "index_type": "string",
                        "points_values_count": 0,
                        "points_count": 0,
                        "histogram_bucket_size": 0
                      }
                    ]
                  }
                ],
                "optimizations": {
                  "status": "ok",
                  "optimizations": {
                    "count": 0,
                    "fail_count": 0,
                    "avg_duration_micros": 0,
                    "min_duration_micros": 0,
                    "max_duration_micros": 0,
                    "total_duration_micros": 0,
                    "last_responded": "1970-01-01T00:00:00Z"
                  },
                  "log": [
                    {
                      "name": "string",
                      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                      "segment_ids": [
                        0
                      ],
                      "segment_uuids": [
                        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
                      ],
                      "status": "optimizing",
                      "start_at": "1970-01-01T00:00:00Z",
                      "end_at": "1970-01-01T00:00:00Z"
                    }
                  ]
                },
                "async_scorer": true,
                "indexed_only_excluded_vectors": {
                  "property1": 0,
                  "property2": 0
                },
                "update_queue": {
                  "length": 0,
                  "op_num": 0,
                  "deferred_points": 0
                }
              },
              "remote": [
                {
                  "shard_id": 0,
                  "peer_id": 0,
                  "searches": {
                    "count": 0,
                    "fail_count": 0,
                    "avg_duration_micros": 0,
                    "min_duration_micros": 0,
                    "max_duration_micros": 0,
                    "total_duration_micros": 0,
                    "last_responded": "1970-01-01T00:00:00Z"
                  },
                  "updates": {
                    "count": 0,
                    "fail_count": 0,
                    "avg_duration_micros": 0,
                    "min_duration_micros": 0,
                    "max_duration_micros": 0,
                    "total_duration_micros": 0,
                    "last_responded": "1970-01-01T00:00:00Z"
                  }
                }
              ],
              "replicate_states": {
                "property1": "Active",
                "property2": "Active"
              },
              "partial_snapshot": {
                "ongoing_create_snapshot_requests": 0,
                "is_recovering": true,
                "recovery_timestamp": 0
              }
            }
          ],
          "transfers": [
            {
              "shard_id": 0,
              "to_shard_id": 0,
              "from": 0,
              "to": 0,
              "sync": true,
              "method": "stream_records",
              "comment": "string"
            }
          ],
          "resharding": [
            {
              "stage": "migrating_points",
              "direction": "up",
              "shard_id": 0,
              "peer_id": 0,
              "shard_key": "region_1",
              "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
            }
          ],
          "shard_clean_tasks": {
            "property1": "started",
            "property2": "started"
          }
        }
      ],
      "snapshots": [
        {
          "id": "string",
          "running_snapshots": 0,
          "running_snapshot_recovery": 0,
          "total_snapshot_creations": 0
        }
      ]
    },
    "cluster": {
      "enabled": true,
      "status": {
        "number_of_peers": 0,
        "term": 0,
        "commit": 0,
        "pending_operations": 0,
        "role": "Follower",
        "is_voter": true,
        "peer_id": 0,
        "consensus_thread_status": {
          "consensus_thread_status": "working",
          "last_update": "1970-01-01T00:00:00Z"
        }
      },
      "config": {
        "grpc_timeout_ms": 0,
        "p2p": {
          "connection_pool_size": 0
        },
        "consensus": {
          "max_message_queue_size": 0,
          "tick_period_ms": 0,
          "bootstrap_timeout_sec": 0
        }
      },
      "peers": {
        "property1": {
          "uri": "string"
        },
        "property2": {
          "uri": "string"
        }
      },
      "peer_metadata": {
        "property1": {
          "version": "string"
        },
        "property2": {
          "version": "string"
        }
      },
      "metadata": {},
      "resharding_enabled": true
    },
    "requests": {
      "rest": {
        "responses": {
          "property1": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          },
          "property2": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          }
        },
        "per_collection_responses": {
          "property1": {
            "property1": {
              "property1": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "property2": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            },
            "property2": {
              "property1": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "property2": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            }
          },
          "property2": {
            "property1": {
              "property1": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "property2": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            },
            "property2": {
              "property1": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "property2": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            }
          }
        }
      },
      "grpc": {
        "responses": {
          "property1": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          },
          "property2": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          }
        },
        "per_collection_responses": {
          "property1": {
            "property1": {
              "property1": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "property2": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            },
            "property2": {
              "property1": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "property2": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            }
          },
          "property2": {
            "property1": {
              "property1": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "property2": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            },
            "property2": {
              "property1": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "property2": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            }
          }
        }
      }
    },
    "memory": {
      "active_bytes": 0,
      "allocated_bytes": 0,
      "metadata_bytes": 0,
      "resident_bytes": 0,
      "retained_bytes": 0
    },
    "hardware": {
      "collection_data": {
        "property1": {
          "cpu": 0,
          "payload_io_read": 0,
          "payload_io_write": 0,
          "payload_index_io_read": 0,
          "payload_index_io_write": 0,
          "vector_io_read": 0,
          "vector_io_write": 0
        },
        "property2": {
          "cpu": 0,
          "payload_io_read": 0,
          "payload_io_write": 0,
          "payload_index_io_read": 0,
          "payload_index_io_write": 0,
          "vector_io_read": 0,
          "vector_io_write": 0
        }
      }
    },
    "search_pool": {
      "mode": "string",
      "high_cpu_threads": 0,
      "high_io_threads": 0
    },
    "quota": {
      "config": {
        "enabled": false,
        "max_resident_memory_percent": 1,
        "max_disk_usage_percent": 1,
        "release_margin_percent": 0
      },
      "exceeded": {
        "resident_memory": true,
        "disk_usage": true
      }
    }
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="collect-telemetry-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="collect-telemetry-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[TelemetryData](#schematelemetrydata)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Collect Prometheus metrics data

<a id="opIdmetrics"></a>

> Code samples

```bash
curl http://localhost:6333/metrics \
  -H "api-key: ${API_KEY}"
```

`GET /metrics`

Collect metrics data including app info, collections info, cluster info and statistics

<h3 id="collect-prometheus-metrics-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anonymize|query|boolean|false|If true, anonymize result|
|per_collection|query|boolean|false|If true, include per-collection request metrics with a collection label instead of global request metrics|
|timeout|query|integer|false|Timeout for this request|

<h3 id="collect-prometheus-metrics-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics data in Prometheus format|Inline|
|4XX|Client Error|error|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Kubernetes healthz endpoint

<a id="opIdhealthz"></a>

> Code samples

```bash
curl http://localhost:6333/healthz \
  -H "api-key: ${API_KEY}"
```

`GET /healthz`

Liveness-style health check. Returns 200 as soon as the HTTP API is serving requests. It does not inspect collections, shards or consensus state, and is identical to `/livez`. Use it only to detect whether the process is up and responsive.

<h3 id="kubernetes-healthz-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Healthz response|Inline|
|4XX|Client Error|error|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Kubernetes livez endpoint

<a id="opIdlivez"></a>

> Code samples

```bash
curl http://localhost:6333/livez \
  -H "api-key: ${API_KEY}"
```

`GET /livez`

Kubernetes liveness probe. Returns 200 as soon as the HTTP API is serving requests. It does not inspect collections, shards or consensus state, and is identical to `/healthz`. A failure indicates the process is unresponsive and should be restarted.

<h3 id="kubernetes-livez-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Healthz response|Inline|
|4XX|Client Error|error|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Kubernetes readyz endpoint

<a id="opIdreadyz"></a>

> Code samples

```bash
curl http://localhost:6333/readyz \
  -H "api-key: ${API_KEY}"
```

`GET /readyz`

Kubernetes readiness probe. Checks the instance and waits out pending data operations to see when it can start accepting traffic. In a distributed deployment it returns 200 only once the node has caught up with the cluster consensus commit and its local shards are healthy; otherwise it returns 503. In a single-node deployment it always returns 200 once the API is up. Use it to decide when to route traffic to the instance.

<h3 id="kubernetes-readyz-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The instance is ready to accept traffic|Inline|
|503|Service Unavailable|The instance is not ready to accept traffic yet|Inline|
|4XX|Client Error|error|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-quotas">Quotas</h1>

Cluster-wide resource quotas.

## Get global quotas

<a id="opIdget_quotas"></a>

> Code samples

```bash
curl http://localhost:6333/quotas \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /quotas`

Get the cluster-wide resource quota configuration, together with the current utilization it is measured against.
The configuration is the same on every peer, but the reported utilization is for the node serving this request only -
memory and disk are node-local, so query each peer to see where the whole cluster stands.


> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": {
    "config": {
      "enabled": false,
      "max_resident_memory_percent": 1,
      "max_disk_usage_percent": 1,
      "release_margin_percent": 0
    },
    "usage": {
      "resident_memory_percent": 0,
      "disk_usage_percent": 0
    },
    "peers": {
      "property1": {
        "exceeded": true,
        "resident_memory_percent": 0,
        "disk_usage_percent": 0
      },
      "property2": {
        "exceeded": true,
        "resident_memory_percent": 0,
        "disk_usage_percent": 0
      }
    }
  }
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="get-global-quotas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-global-quotas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|[QuotaStatus](#schemaquotastatus)|false|none|Quota configuration in effect, and how close each peer is to it.<br><br>The configuration is cluster-wide; the utilization is not. `usage` is the node that served the request, and `peers` is what every peer that answered reports about itself — memory and disk are node-local, so one peer being under its limit says nothing about the others.|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Set global quotas

<a id="opIdupdate_quotas"></a>

> Code samples

```bash
curl http://localhost:6333/quotas \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "enabled": false,
    "max_resident_memory_percent": 1,
    "max_disk_usage_percent": 1,
    "release_margin_percent": 0
  }'
```

`PUT /quotas`

Replace the cluster-wide resource quota configuration. The new configuration is propagated to every peer through consensus and persisted, so it survives restarts

> Body parameter

```json
{
  "enabled": false,
  "max_resident_memory_percent": 1,
  "max_disk_usage_percent": 1,
  "release_margin_percent": 0
}
```

<h3 id="set-global-quotas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wait|query|boolean|false|If true, wait until the new configuration is confirmed by consensus on this peer.<br>If false - the request returns as soon as the change is proposed.<br>|
|body|body|[QuotaConfig](#schemaquotaconfig)|false|Quota configuration to apply|
|» enabled|body|boolean|false|Whether the limits below are enforced.|
|» max_resident_memory_percent|body|integer(uint8) \| null|false|Reject memory-consuming updates once process resident memory reaches this percentage of total system memory (or of the cgroup limit, if one applies).|
|» max_disk_usage_percent|body|integer(uint8) \| null|false|Reject disk-consuming updates once the filesystem hosting the storage directory is filled to this percentage of its capacity.|
|» release_margin_percent|body|integer(uint8) \| null|false|How many percentage points below its limit a resource has to fall before this node starts accepting work again.<br><br>Without a margin, a resource resting on its limit crosses it in both directions on the noise between two readings, putting the node in and out of service each time — and restarting a shard recovery with it. Raise it where usage is volatile; `0` disables the margin and releases as soon as usage is back under the limit.<br><br>Unset leaves the built-in default in force, so a config written today does not pin a number that a later release may want to revise.|

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="set-global-quotas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="set-global-quotas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

<h1 id="qdrant-api-beta">Beta</h1>

Beta features, do not depend on these yet.

## Get issues

<a id="opIdget_issues"></a>

> Code samples

```bash
curl http://localhost:6333/issues \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /issues`

Get a report of performance issues and configuration suggestions

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|4XX|Client Error|error|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

## Clear issues

<a id="opIdclear_issues"></a>

> Code samples

```bash
curl http://localhost:6333/issues \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /issues`

Removes all issues reported so far

> Example responses

> 200 Response

```json
{
  "usage": null,
  "time": 0.002,
  "status": "ok",
  "result": true
}
```

> default Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

> 4XX Response

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

<h3 id="clear-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|error|[ErrorResponse](#schemaerrorresponse)|
|4XX|Client Error|error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="clear-issues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage|[Usage](#schemausage) \| object \| null|false|none|none|
|» *anyOf*|[Usage](#schemausage)|false|none|Usage of the hardware resources, spent to process the request|
|» *anyOf*|object \| null|false|none|none|
|time|number(float)|false|none|Time spent to process this request|
|status|string|false|none|none|
|result|boolean|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key, bearerAuth
</aside>

# Schemas

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "time": 0,
  "status": {
    "error": "string"
  },
  "result": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number(float)|false|none|Time spent to process this request|
|status|object|false|none|none|
|result|object \| null|false|none|none|

<h2 id="tocS_CollectionsResponse">CollectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectionsresponse"></a>
<a id="schema_CollectionsResponse"></a>
<a id="tocScollectionsresponse"></a>
<a id="tocscollectionsresponse"></a>

```json
{
  "collections": [
    {
      "name": "arxiv-title"
    },
    {
      "name": "arxiv-abstract"
    },
    {
      "name": "medium-title"
    },
    {
      "name": "medium-text"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collections|[[CollectionDescription](#schemacollectiondescription)]|true|none|none|

<h2 id="tocS_CollectionDescription">CollectionDescription</h2>
<!-- backwards compatibility -->
<a id="schemacollectiondescription"></a>
<a id="schema_CollectionDescription"></a>
<a id="tocScollectiondescription"></a>
<a id="tocscollectiondescription"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_CollectionInfo">CollectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemacollectioninfo"></a>
<a id="schema_CollectionInfo"></a>
<a id="tocScollectioninfo"></a>
<a id="tocscollectioninfo"></a>

```json
{
  "status": "green",
  "optimizer_status": "ok",
  "warnings": [
    {
      "message": "string"
    }
  ],
  "indexed_vectors_count": 0,
  "points_count": 0,
  "segments_count": 0,
  "config": {
    "params": {
      "vectors": {
        "size": 1,
        "distance": "Cosine",
        "hnsw_config": {
          "m": 0,
          "ef_construct": 4,
          "full_scan_threshold": 10,
          "max_indexing_threads": 0,
          "on_disk": true,
          "memory": "cold",
          "payload_m": 0,
          "inline_storage": true
        },
        "quantization_config": {
          "scalar": {
            "type": "int8",
            "quantile": 0.5,
            "always_ram": true,
            "memory": "cold"
          }
        },
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32",
        "multivector_config": {
          "comparator": "max_sim"
        }
      },
      "shard_number": 1,
      "sharding_method": "auto",
      "replication_factor": 1,
      "write_consistency_factor": 1,
      "read_fan_out_factor": 0,
      "read_fan_out_delay_ms": 0,
      "on_disk_payload": true,
      "payload": {
        "memory": "cold"
      },
      "id_tracker": {
        "memory": "cold"
      },
      "sparse_vectors": {
        "property1": {
          "index": {
            "full_scan_threshold": 0,
            "on_disk": true,
            "memory": "cold",
            "datatype": "float32"
          },
          "modifier": "none"
        },
        "property2": {
          "index": {
            "full_scan_threshold": 0,
            "on_disk": true,
            "memory": "cold",
            "datatype": "float32"
          },
          "modifier": "none"
        }
      }
    },
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 0,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "optimizer_config": {
      "deleted_threshold": 0.2,
      "vacuum_min_vector_number": 1000,
      "default_segment_number": 0,
      "max_segment_size": null,
      "memmap_threshold": null,
      "indexing_threshold": null,
      "flush_interval_sec": 0,
      "max_optimization_threads": null,
      "prevent_unoptimized": null
    },
    "wal_config": {
      "wal_capacity_mb": 1,
      "wal_segments_ahead": 0,
      "wal_retain_closed": 1
    },
    "quantization_config": null,
    "strict_mode_config": {
      "enabled": true,
      "max_query_limit": 0,
      "max_timeout": 0,
      "unindexed_filtering_retrieve": true,
      "unindexed_filtering_update": true,
      "search_max_hnsw_ef": 0,
      "search_allow_exact": true,
      "search_max_oversampling": 0,
      "upsert_max_batchsize": 0,
      "search_max_batchsize": 0,
      "max_collection_vector_size_bytes": 0,
      "read_rate_limit": 0,
      "write_rate_limit": 0,
      "max_collection_payload_size_bytes": 0,
      "max_points_count": 0,
      "filter_max_conditions": 0,
      "condition_max_size": 0,
      "multivector_config": {
        "property1": {
          "max_vectors": 0
        },
        "property2": {
          "max_vectors": 0
        }
      },
      "sparse_config": {
        "property1": {
          "max_length": 0
        },
        "property2": {
          "max_length": 0
        }
      },
      "max_payload_index_count": 0,
      "max_resident_memory_percent": 0
    },
    "metadata": {
      "city": "London",
      "color": "green"
    }
  },
  "payload_schema": {
    "property1": {
      "data_type": "keyword",
      "params": {
        "type": "keyword",
        "is_tenant": true,
        "on_disk": true,
        "memory": "cold",
        "enable_hnsw": true,
        "prefix": true,
        "nested": "string"
      },
      "points": 0
    },
    "property2": {
      "data_type": "keyword",
      "params": {
        "type": "keyword",
        "is_tenant": true,
        "on_disk": true,
        "memory": "cold",
        "enable_hnsw": true,
        "prefix": true,
        "nested": "string"
      },
      "points": 0
    }
  },
  "update_queue": {
    "length": 0,
    "deferred_points": 0
  },
  "created_at": "1970-01-01T00:00:00Z"
}
```

Current statistics and configuration of the collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[CollectionStatus](#schemacollectionstatus)|true|none|Current state of the collection. `Green` - all good. `Yellow` - optimization is running, 'Grey' - optimizations are possible but not triggered, `Red` - some operations failed and was not recovered|
|optimizer_status|[OptimizersStatus](#schemaoptimizersstatus)|true|none|Current state of the collection|
|warnings|[[CollectionWarning](#schemacollectionwarning)]|false|none|Warnings related to the collection|
|indexed_vectors_count|integer(uint) \| null|false|none|Approximate number of indexed vectors in the collection. Indexed vectors in large segments are faster to query, as it is stored in a specialized vector index.|
|points_count|integer(uint) \| null|false|none|Approximate number of points (vectors + payloads) in collection. Each point could be accessed by unique id.|
|segments_count|integer(uint)|true|none|Number of segments in collection. Each segment has independent vector as payload indexes|
|config|[CollectionConfig](#schemacollectionconfig)|true|none|Information about the collection configuration|
|payload_schema|object|true|none|Types of stored payload|
|update_queue|[UpdateQueueInfo](#schemaupdatequeueinfo) \| object \| null|false|none|Update queue info|
|created_at|string(date-time) \| null|false|none|Time of the collection creation. Absent for collections created before Qdrant started recording it.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|green|
|status|yellow|
|status|grey|
|status|red|

<h2 id="tocS_CollectionStatus">CollectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemacollectionstatus"></a>
<a id="schema_CollectionStatus"></a>
<a id="tocScollectionstatus"></a>
<a id="tocscollectionstatus"></a>

```json
"green"
```

Current state of the collection. `Green` - all good. `Yellow` - optimization is running, 'Grey' - optimizations are possible but not triggered, `Red` - some operations failed and was not recovered

<h2 id="tocS_OptimizersStatus">OptimizersStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizersstatus"></a>
<a id="schema_OptimizersStatus"></a>
<a id="tocSoptimizersstatus"></a>
<a id="tocsoptimizersstatus"></a>

```json
"ok"
```

Current state of the collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Optimizers are reporting as expected|
|*oneOf*|object|false|none|Something wrong happened with optimizers|
|error|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|ok|

<h2 id="tocS_CollectionWarning">CollectionWarning</h2>
<!-- backwards compatibility -->
<a id="schemacollectionwarning"></a>
<a id="schema_CollectionWarning"></a>
<a id="tocScollectionwarning"></a>
<a id="tocscollectionwarning"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Warning message|

<h2 id="tocS_CollectionConfig">CollectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemacollectionconfig"></a>
<a id="schema_CollectionConfig"></a>
<a id="tocScollectionconfig"></a>
<a id="tocscollectionconfig"></a>

```json
{
  "params": {
    "vectors": {
      "size": 1,
      "distance": "Cosine",
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 10,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "quantization_config": {
        "scalar": {
          "type": "int8",
          "quantile": 0.5,
          "always_ram": true,
          "memory": "cold"
        }
      },
      "on_disk": true,
      "memory": "cold",
      "datatype": "float32",
      "multivector_config": {
        "comparator": "max_sim"
      }
    },
    "shard_number": 1,
    "sharding_method": "auto",
    "replication_factor": 1,
    "write_consistency_factor": 1,
    "read_fan_out_factor": 0,
    "read_fan_out_delay_ms": 0,
    "on_disk_payload": true,
    "payload": {
      "memory": "cold"
    },
    "id_tracker": {
      "memory": "cold"
    },
    "sparse_vectors": {
      "property1": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      },
      "property2": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      }
    }
  },
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 0,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "optimizer_config": {
    "deleted_threshold": 0.2,
    "vacuum_min_vector_number": 1000,
    "default_segment_number": 0,
    "max_segment_size": null,
    "memmap_threshold": null,
    "indexing_threshold": null,
    "flush_interval_sec": 0,
    "max_optimization_threads": null,
    "prevent_unoptimized": null
  },
  "wal_config": {
    "wal_capacity_mb": 1,
    "wal_segments_ahead": 0,
    "wal_retain_closed": 1
  },
  "quantization_config": null,
  "strict_mode_config": {
    "enabled": true,
    "max_query_limit": 0,
    "max_timeout": 0,
    "unindexed_filtering_retrieve": true,
    "unindexed_filtering_update": true,
    "search_max_hnsw_ef": 0,
    "search_allow_exact": true,
    "search_max_oversampling": 0,
    "upsert_max_batchsize": 0,
    "search_max_batchsize": 0,
    "max_collection_vector_size_bytes": 0,
    "read_rate_limit": 0,
    "write_rate_limit": 0,
    "max_collection_payload_size_bytes": 0,
    "max_points_count": 0,
    "filter_max_conditions": 0,
    "condition_max_size": 0,
    "multivector_config": {
      "property1": {
        "max_vectors": 0
      },
      "property2": {
        "max_vectors": 0
      }
    },
    "sparse_config": {
      "property1": {
        "max_length": 0
      },
      "property2": {
        "max_length": 0
      }
    },
    "max_payload_index_count": 0,
    "max_resident_memory_percent": 0
  },
  "metadata": {
    "city": "London",
    "color": "green"
  }
}
```

Information about the collection configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|[CollectionParams](#schemacollectionparams)|true|none|none|
|hnsw_config|[HnswConfig](#schemahnswconfig)|true|none|Config of HNSW index|
|optimizer_config|[OptimizersConfig](#schemaoptimizersconfig)|true|none|none|
|wal_config|[WalConfig](#schemawalconfig) \| object \| null|false|none|none|
|quantization_config|[QuantizationConfig](#schemaquantizationconfig) \| object \| null|false|none|none|
|strict_mode_config|[StrictModeConfigOutput](#schemastrictmodeconfigoutput) \| object \| null|false|none|none|
|metadata|[Payload](#schemapayload) \| object \| null|false|none|Arbitrary JSON metadata for the collection This can be used to store application-specific information such as creation time, migration data, inference model info, etc.|

<h2 id="tocS_CollectionParams">CollectionParams</h2>
<!-- backwards compatibility -->
<a id="schemacollectionparams"></a>
<a id="schema_CollectionParams"></a>
<a id="tocScollectionparams"></a>
<a id="tocscollectionparams"></a>

```json
{
  "vectors": {
    "size": 1,
    "distance": "Cosine",
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 10,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "quantization_config": {
      "scalar": {
        "type": "int8",
        "quantile": 0.5,
        "always_ram": true,
        "memory": "cold"
      }
    },
    "on_disk": true,
    "memory": "cold",
    "datatype": "float32",
    "multivector_config": {
      "comparator": "max_sim"
    }
  },
  "shard_number": 1,
  "sharding_method": "auto",
  "replication_factor": 1,
  "write_consistency_factor": 1,
  "read_fan_out_factor": 0,
  "read_fan_out_delay_ms": 0,
  "on_disk_payload": true,
  "payload": {
    "memory": "cold"
  },
  "id_tracker": {
    "memory": "cold"
  },
  "sparse_vectors": {
    "property1": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    },
    "property2": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vectors|[VectorsConfig](#schemavectorsconfig)|false|none|Vector params separator for single and multiple vector modes Single mode:<br><br>{ "size": 128, "distance": "Cosine" }<br><br>or multiple mode:<br><br>{ "default": { "size": 128, "distance": "Cosine" } }|
|shard_number|integer(uint32)|false|none|Number of shards the collection has|
|sharding_method|[ShardingMethod](#schemashardingmethod) \| object \| null|false|none|Sharding method Default is Auto - points are distributed across all available shards Custom - points are distributed across shards according to shard key|
|replication_factor|integer(uint32)|false|none|Number of replicas for each shard|
|write_consistency_factor|integer(uint32)|false|none|Defines how many replicas should apply the operation for us to consider it successful. Increasing this number will make the collection more resilient to inconsistencies, but will also make it fail if not enough replicas are available. Does not have any performance impact.|
|read_fan_out_factor|integer(uint32) \| null|false|none|Defines how many additional replicas should be processing read request at the same time. Default value is Auto, which means that fan-out will be determined automatically based on the busyness of the local replica. Having more than 0 might be useful to smooth latency spikes of individual nodes.|
|read_fan_out_delay_ms|integer(uint64) \| null|false|none|Define number of milliseconds to wait before attempting to read from another replica. This setting can help to reduce latency spikes in case of occasional slow replicas. Default is 0, which means delayed fan out request is disabled.|
|on_disk_payload|boolean \| null|false|none|**Deprecated.** Deprecated: use `payload.memory` instead. If true - point's payload will not be stored in memory. It will be read from the disk every time it is requested. This setting saves RAM by (slightly) increasing the response time. Note: those payload values that are involved in filtering and are indexed - remain in RAM.<br><br>Default: true|
|payload|[PayloadStorageParams](#schemapayloadstorageparams) \| object \| null|false|none|Configuration of the payload storage|
|id_tracker|[IdTrackerParams](#schemaidtrackerparams) \| object \| null|false|none|Configuration of the point id tracker|
|sparse_vectors|object \| null|false|none|Configuration of the sparse vector storage|

<h2 id="tocS_VectorsConfig">VectorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemavectorsconfig"></a>
<a id="schema_VectorsConfig"></a>
<a id="tocSvectorsconfig"></a>
<a id="tocsvectorsconfig"></a>

```json
{
  "size": 1,
  "distance": "Cosine",
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 10,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "quantization_config": {
    "scalar": {
      "type": "int8",
      "quantile": 0.5,
      "always_ram": true,
      "memory": "cold"
    }
  },
  "on_disk": true,
  "memory": "cold",
  "datatype": "float32",
  "multivector_config": {
    "comparator": "max_sim"
  }
}
```

Vector params separator for single and multiple vector modes Single mode:

{ "size": 128, "distance": "Cosine" }

or multiple mode:

{ "default": { "size": 128, "distance": "Cosine" } }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[VectorParams](#schemavectorparams)|false|none|Params of single vector data storage|
|*anyOf*|object|false|none|none|
|**additionalProperties**|[VectorParams](#schemavectorparams)|false|none|Params of single vector data storage|

<h2 id="tocS_VectorParams">VectorParams</h2>
<!-- backwards compatibility -->
<a id="schemavectorparams"></a>
<a id="schema_VectorParams"></a>
<a id="tocSvectorparams"></a>
<a id="tocsvectorparams"></a>

```json
{
  "size": 1,
  "distance": "Cosine",
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 10,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "quantization_config": {
    "scalar": {
      "type": "int8",
      "quantile": 0.5,
      "always_ram": true,
      "memory": "cold"
    }
  },
  "on_disk": true,
  "memory": "cold",
  "datatype": "float32",
  "multivector_config": {
    "comparator": "max_sim"
  }
}
```

Params of single vector data storage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(uint64)|true|none|Size of a vectors used|
|distance|[Distance](#schemadistance)|true|none|Type of internal tags, build from payload Distance function types used to compare vectors|
|hnsw_config|[HnswConfigDiff](#schemahnswconfigdiff) \| object \| null|false|none|Custom params for HNSW index. If none - values from collection configuration are used.|
|quantization_config|[QuantizationConfig](#schemaquantizationconfig) \| object \| null|false|none|Custom params for quantization. If none - values from collection configuration are used.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, vectors are served from disk, improving RAM usage at the cost of latency Default: false|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the original vector storage. Overrides the deprecated `on_disk` flag if both are set. `pinned` is not supported for dense vector storage. Default: `cached` (`cold` if `on_disk` is set to true).|
|datatype|[Datatype](#schemadatatype) \| object \| null|false|none|Defines which datatype should be used to represent vectors in the storage. Choosing different datatypes allows to optimize memory usage and performance vs accuracy.<br><br>- For `float32` datatype - vectors are stored as single-precision floating point numbers, 4 bytes. - For `float16` datatype - vectors are stored as half-precision floating point numbers, 2 bytes. - For `uint8` datatype - vectors are stored as unsigned 8-bit integers, 1 byte. It expects vector elements to be in range `[0, 255]`. - For `turbo4` datatype - vectors are quantized to 4 bits per element using the TurboQuant algorithm. - For `turbo8` datatype - vectors are quantized to 8 bits per element using the TurboQuant algorithm. - For `turbo16` datatype - vectors are quantized to 16 bits per element using the TurboQuant algorithm.|
|multivector_config|[MultiVectorConfig](#schemamultivectorconfig) \| object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|distance|Cosine|
|distance|Euclid|
|distance|Dot|
|distance|Manhattan|

<h2 id="tocS_Distance">Distance</h2>
<!-- backwards compatibility -->
<a id="schemadistance"></a>
<a id="schema_Distance"></a>
<a id="tocSdistance"></a>
<a id="tocsdistance"></a>

```json
"Cosine"
```

Type of internal tags, build from payload Distance function types used to compare vectors

<h2 id="tocS_HnswConfigDiff">HnswConfigDiff</h2>
<!-- backwards compatibility -->
<a id="schemahnswconfigdiff"></a>
<a id="schema_HnswConfigDiff"></a>
<a id="tocShnswconfigdiff"></a>
<a id="tocshnswconfigdiff"></a>

```json
{
  "m": 0,
  "ef_construct": 4,
  "full_scan_threshold": 10,
  "max_indexing_threads": 0,
  "on_disk": true,
  "memory": "cold",
  "payload_m": 0,
  "inline_storage": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|m|integer(uint) \| null|false|none|Number of edges per node in the index graph. Larger the value - more accurate the search, more space required. Set to 0 to disable the main HNSW graph. Additional payload-aware links may still be built when the effective payload M is positive (see payload_m). This setting alone does not guarantee exact search.|
|ef_construct|integer(uint) \| null|false|none|Number of neighbours to consider during the index building. Larger the value - more accurate the search, more time required to build the index.|
|full_scan_threshold|integer(uint) \| null|false|none|Minimal size threshold (in KiloBytes) below which full-scan is preferred over HNSW search. This measures the total size of vectors being queried against. When the maximum estimated amount of points that a condition satisfies is smaller than `full_scan_threshold_kb`, the query planner will use full-scan search instead of HNSW index traversal for better performance. Note: 1Kb = 1 vector of size 256|
|max_indexing_threads|integer(uint) \| null|false|none|Number of parallel threads used for background index building. If 0 - automatically select from 8 to 16. Best to keep between 8 and 16 to prevent likelihood of building broken/inefficient HNSW graphs. On small CPUs, less threads are used.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. Store HNSW index on disk. If set to false, the index will be stored in RAM. Default: false|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the HNSW graph. Overrides the deprecated `on_disk` flag if both are set. Default: `cached` (`cold` if `on_disk` is set to true).|
|payload_m|integer(uint) \| null|false|none|Number of additional payload-aware links per node. If unset, the value of m is used. An effective value of 0 disables these additional links. A positive value allows them for indexed payload fields with HNSW enabled, even when m is 0.|
|inline_storage|boolean \| null|false|none|Store copies of original and quantized vectors within the HNSW index file. Default: false. Enabling this option will trade the search speed for disk usage by reducing amount of random seeks during the search. Requires quantized vectors to be enabled. Multi-vectors are not supported.|

<h2 id="tocS_Memory">Memory</h2>
<!-- backwards compatibility -->
<a id="schemamemory"></a>
<a id="schema_Memory"></a>
<a id="tocSmemory"></a>
<a id="tocsmemory"></a>

```json
"cold"
```

Memory placement of a component's data.

Data is always persisted on disk regardless of this setting; it only controls how the data is held in RAM.

Options:

* `Cold` - Data is not pre-loaded from disk to RAM. Preferred for rarely queried components or components larger than RAM size. First request might be slow, but data is cached with usage.

* `Cached` - Data is pre-loaded into disk-cache RAM on start. First request is fast, but data may be evicted if there is not enough memory and some other component's data is used more frequently.

* `Pinned` - Data is loaded in RAM and never evicted. First request is fast, but the component must fit in RAM at all times. Recommended for frequently queried small components like quantized vectors or primary indexes.

<h2 id="tocS_QuantizationConfig">QuantizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaquantizationconfig"></a>
<a id="schema_QuantizationConfig"></a>
<a id="tocSquantizationconfig"></a>
<a id="tocsquantizationconfig"></a>

```json
{
  "scalar": {
    "type": "int8",
    "quantile": 0.5,
    "always_ram": true,
    "memory": "cold"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ScalarQuantization](#schemascalarquantization)|false|none|none|
|*anyOf*|[ProductQuantization](#schemaproductquantization)|false|none|none|
|*anyOf*|[BinaryQuantization](#schemabinaryquantization)|false|none|none|
|*anyOf*|[TurboQuantization](#schematurboquantization)|false|none|none|

<h2 id="tocS_ScalarQuantization">ScalarQuantization</h2>
<!-- backwards compatibility -->
<a id="schemascalarquantization"></a>
<a id="schema_ScalarQuantization"></a>
<a id="tocSscalarquantization"></a>
<a id="tocsscalarquantization"></a>

```json
{
  "scalar": {
    "type": "int8",
    "quantile": 0.5,
    "always_ram": true,
    "memory": "cold"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scalar|[ScalarQuantizationConfig](#schemascalarquantizationconfig)|true|none|none|

<h2 id="tocS_ScalarQuantizationConfig">ScalarQuantizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemascalarquantizationconfig"></a>
<a id="schema_ScalarQuantizationConfig"></a>
<a id="tocSscalarquantizationconfig"></a>
<a id="tocsscalarquantizationconfig"></a>

```json
{
  "type": "int8",
  "quantile": 0.5,
  "always_ram": true,
  "memory": "cold"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ScalarType](#schemascalartype)|true|none|none|
|quantile|number(float) \| null|false|none|Quantile for quantization. Expected value range in [0.5, 1.0]. If not set - use the whole range of values|
|always_ram|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true - quantized vectors always will be stored in RAM, ignoring the config of main storage|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of quantized vectors. Overrides the deprecated `always_ram` flag if both are set. Default: follow the memory placement of the original vector storage.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|int8|

<h2 id="tocS_ScalarType">ScalarType</h2>
<!-- backwards compatibility -->
<a id="schemascalartype"></a>
<a id="schema_ScalarType"></a>
<a id="tocSscalartype"></a>
<a id="tocsscalartype"></a>

```json
"int8"
```

<h2 id="tocS_ProductQuantization">ProductQuantization</h2>
<!-- backwards compatibility -->
<a id="schemaproductquantization"></a>
<a id="schema_ProductQuantization"></a>
<a id="tocSproductquantization"></a>
<a id="tocsproductquantization"></a>

```json
{
  "product": {
    "compression": "x4",
    "always_ram": true,
    "memory": "cold"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|[ProductQuantizationConfig](#schemaproductquantizationconfig)|true|none|none|

<h2 id="tocS_ProductQuantizationConfig">ProductQuantizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaproductquantizationconfig"></a>
<a id="schema_ProductQuantizationConfig"></a>
<a id="tocSproductquantizationconfig"></a>
<a id="tocsproductquantizationconfig"></a>

```json
{
  "compression": "x4",
  "always_ram": true,
  "memory": "cold"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compression|[CompressionRatio](#schemacompressionratio)|true|none|none|
|always_ram|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of quantized vectors. Overrides the deprecated `always_ram` flag if both are set. Default: follow the memory placement of the original vector storage.|

#### Enumerated Values

|Property|Value|
|---|---|
|compression|x4|
|compression|x8|
|compression|x16|
|compression|x32|
|compression|x64|

<h2 id="tocS_CompressionRatio">CompressionRatio</h2>
<!-- backwards compatibility -->
<a id="schemacompressionratio"></a>
<a id="schema_CompressionRatio"></a>
<a id="tocScompressionratio"></a>
<a id="tocscompressionratio"></a>

```json
"x4"
```

<h2 id="tocS_BinaryQuantization">BinaryQuantization</h2>
<!-- backwards compatibility -->
<a id="schemabinaryquantization"></a>
<a id="schema_BinaryQuantization"></a>
<a id="tocSbinaryquantization"></a>
<a id="tocsbinaryquantization"></a>

```json
{
  "binary": {
    "always_ram": true,
    "memory": "cold",
    "encoding": "one_bit",
    "query_encoding": "default"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binary|[BinaryQuantizationConfig](#schemabinaryquantizationconfig)|true|none|none|

<h2 id="tocS_BinaryQuantizationConfig">BinaryQuantizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemabinaryquantizationconfig"></a>
<a id="schema_BinaryQuantizationConfig"></a>
<a id="tocSbinaryquantizationconfig"></a>
<a id="tocsbinaryquantizationconfig"></a>

```json
{
  "always_ram": true,
  "memory": "cold",
  "encoding": "one_bit",
  "query_encoding": "default"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|always_ram|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of quantized vectors. Overrides the deprecated `always_ram` flag if both are set. Default: follow the memory placement of the original vector storage.|
|encoding|[BinaryQuantizationEncoding](#schemabinaryquantizationencoding) \| object \| null|false|none|none|
|query_encoding|[BinaryQuantizationQueryEncoding](#schemabinaryquantizationqueryencoding) \| object \| null|false|none|Asymmetric quantization configuration allows a query to have different quantization than stored vectors. It can increase the accuracy of search at the cost of performance.|

<h2 id="tocS_BinaryQuantizationEncoding">BinaryQuantizationEncoding</h2>
<!-- backwards compatibility -->
<a id="schemabinaryquantizationencoding"></a>
<a id="schema_BinaryQuantizationEncoding"></a>
<a id="tocSbinaryquantizationencoding"></a>
<a id="tocsbinaryquantizationencoding"></a>

```json
"one_bit"
```

<h2 id="tocS_BinaryQuantizationQueryEncoding">BinaryQuantizationQueryEncoding</h2>
<!-- backwards compatibility -->
<a id="schemabinaryquantizationqueryencoding"></a>
<a id="schema_BinaryQuantizationQueryEncoding"></a>
<a id="tocSbinaryquantizationqueryencoding"></a>
<a id="tocsbinaryquantizationqueryencoding"></a>

```json
"default"
```

<h2 id="tocS_TurboQuantization">TurboQuantization</h2>
<!-- backwards compatibility -->
<a id="schematurboquantization"></a>
<a id="schema_TurboQuantization"></a>
<a id="tocSturboquantization"></a>
<a id="tocsturboquantization"></a>

```json
{
  "turbo": {
    "always_ram": true,
    "memory": "cold",
    "bits": "bits1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|turbo|[TurboQuantQuantizationConfig](#schematurboquantquantizationconfig)|true|none|none|

<h2 id="tocS_TurboQuantQuantizationConfig">TurboQuantQuantizationConfig</h2>
<!-- backwards compatibility -->
<a id="schematurboquantquantizationconfig"></a>
<a id="schema_TurboQuantQuantizationConfig"></a>
<a id="tocSturboquantquantizationconfig"></a>
<a id="tocsturboquantquantizationconfig"></a>

```json
{
  "always_ram": true,
  "memory": "cold",
  "bits": "bits1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|always_ram|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of quantized vectors. Overrides the deprecated `always_ram` flag if both are set. Default: follow the memory placement of the original vector storage.|
|bits|[TurboQuantBitSize](#schematurboquantbitsize) \| object \| null|false|none|none|

<h2 id="tocS_TurboQuantBitSize">TurboQuantBitSize</h2>
<!-- backwards compatibility -->
<a id="schematurboquantbitsize"></a>
<a id="schema_TurboQuantBitSize"></a>
<a id="tocSturboquantbitsize"></a>
<a id="tocsturboquantbitsize"></a>

```json
"bits1"
```

<h2 id="tocS_Datatype">Datatype</h2>
<!-- backwards compatibility -->
<a id="schemadatatype"></a>
<a id="schema_Datatype"></a>
<a id="tocSdatatype"></a>
<a id="tocsdatatype"></a>

```json
"float32"
```

<h2 id="tocS_MultiVectorConfig">MultiVectorConfig</h2>
<!-- backwards compatibility -->
<a id="schemamultivectorconfig"></a>
<a id="schema_MultiVectorConfig"></a>
<a id="tocSmultivectorconfig"></a>
<a id="tocsmultivectorconfig"></a>

```json
{
  "comparator": "max_sim"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|[MultiVectorComparator](#schemamultivectorcomparator)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|comparator|max_sim|

<h2 id="tocS_MultiVectorComparator">MultiVectorComparator</h2>
<!-- backwards compatibility -->
<a id="schemamultivectorcomparator"></a>
<a id="schema_MultiVectorComparator"></a>
<a id="tocSmultivectorcomparator"></a>
<a id="tocsmultivectorcomparator"></a>

```json
"max_sim"
```

<h2 id="tocS_ShardingMethod">ShardingMethod</h2>
<!-- backwards compatibility -->
<a id="schemashardingmethod"></a>
<a id="schema_ShardingMethod"></a>
<a id="tocSshardingmethod"></a>
<a id="tocsshardingmethod"></a>

```json
"auto"
```

<h2 id="tocS_PayloadStorageParams">PayloadStorageParams</h2>
<!-- backwards compatibility -->
<a id="schemapayloadstorageparams"></a>
<a id="schema_PayloadStorageParams"></a>
<a id="tocSpayloadstorageparams"></a>
<a id="tocspayloadstorageparams"></a>

```json
{
  "memory": "cold"
}
```

Params of the payload storage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the payload storage. Overrides the deprecated `on_disk_payload` flag if both are set. `pinned` is not supported for payload storage. Default: `cold` (`cached` if `on_disk_payload` is set to false).|

<h2 id="tocS_IdTrackerParams">IdTrackerParams</h2>
<!-- backwards compatibility -->
<a id="schemaidtrackerparams"></a>
<a id="schema_IdTrackerParams"></a>
<a id="tocSidtrackerparams"></a>
<a id="tocsidtrackerparams"></a>

```json
{
  "memory": "cold"
}
```

Params of the point id tracker

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the point id mapping in indexed segments: `cold` keeps it on disk and reads it on demand, `cached` keeps it on disk but primes the page cache with it on load, `pinned` keeps it in RAM. Default: `pinned`.|

<h2 id="tocS_SparseVectorParams">SparseVectorParams</h2>
<!-- backwards compatibility -->
<a id="schemasparsevectorparams"></a>
<a id="schema_SparseVectorParams"></a>
<a id="tocSsparsevectorparams"></a>
<a id="tocssparsevectorparams"></a>

```json
{
  "index": {
    "full_scan_threshold": 0,
    "on_disk": true,
    "memory": "cold",
    "datatype": "float32"
  },
  "modifier": "none"
}
```

Params of single sparse vector data storage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|[SparseIndexParams](#schemasparseindexparams) \| object \| null|false|none|Custom params for index. If none - values from collection configuration are used.|
|modifier|[Modifier](#schemamodifier) \| object \| null|false|none|Configures addition value modifications for sparse vectors. Default: none|

<h2 id="tocS_SparseIndexParams">SparseIndexParams</h2>
<!-- backwards compatibility -->
<a id="schemasparseindexparams"></a>
<a id="schema_SparseIndexParams"></a>
<a id="tocSsparseindexparams"></a>
<a id="tocssparseindexparams"></a>

```json
{
  "full_scan_threshold": 0,
  "on_disk": true,
  "memory": "cold",
  "datatype": "float32"
}
```

Configuration for sparse inverted index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_scan_threshold|integer(uint) \| null|false|none|We prefer a full scan search upto (excluding) this number of vectors.<br><br>Note: this is number of vectors, not KiloBytes.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. Store index on disk. If set to false, the index will be stored in RAM. Default: false|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|datatype|[Datatype](#schemadatatype) \| object \| null|false|none|Defines which datatype should be used for the index. Choosing different datatypes allows to optimize memory usage and performance vs accuracy.<br><br>- For `float32` datatype - vectors are stored as single-precision floating point numbers, 4 bytes. - For `float16` datatype - vectors are stored as half-precision floating point numbers, 2 bytes. - For `uint8` datatype - vectors are quantized to unsigned 8-bit integers, 1 byte. Quantization to fit byte range `[0, 255]` happens during indexing automatically, so the actual vector data does not need to conform to this range.|

<h2 id="tocS_Modifier">Modifier</h2>
<!-- backwards compatibility -->
<a id="schemamodifier"></a>
<a id="schema_Modifier"></a>
<a id="tocSmodifier"></a>
<a id="tocsmodifier"></a>

```json
"none"
```

If used, include weight modification, which will be applied to sparse vectors at query time: None - no modification (default) Idf - inverse document frequency, based on statistics of the collection

<h2 id="tocS_HnswConfig">HnswConfig</h2>
<!-- backwards compatibility -->
<a id="schemahnswconfig"></a>
<a id="schema_HnswConfig"></a>
<a id="tocShnswconfig"></a>
<a id="tocshnswconfig"></a>

```json
{
  "m": 0,
  "ef_construct": 4,
  "full_scan_threshold": 0,
  "max_indexing_threads": 0,
  "on_disk": true,
  "memory": "cold",
  "payload_m": 0,
  "inline_storage": true
}
```

Config of HNSW index

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|m|integer(uint)|true|none|Number of edges per node in the index graph. Larger the value - more accurate the search, more space required. Set to 0 to disable the main HNSW graph. Additional payload-aware links may still be built when the effective payload M is positive (see payload_m). This setting alone does not guarantee exact search.|
|ef_construct|integer(uint)|true|none|Number of neighbours to consider during the index building. Larger the value - more accurate the search, more time required to build index.|
|full_scan_threshold|integer(uint)|true|none|Minimal size threshold (in KiloBytes) below which full-scan is preferred over HNSW search. This measures the total size of vectors being queried against. When the maximum estimated amount of points that a condition satisfies is smaller than `full_scan_threshold_kb`, the query planner will use full-scan search instead of HNSW index traversal for better performance. Note: 1Kb = 1 vector of size 256|
|max_indexing_threads|integer(uint)|false|none|Number of parallel threads used for background index building. If 0 - automatically select from 8 to 16. Best to keep between 8 and 16 to prevent likelihood of slow building or broken/inefficient HNSW graphs. On small CPUs, less threads are used.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. Store HNSW index on disk. If set to false, index will be stored in RAM. Default: false|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the HNSW graph. Overrides the deprecated `on_disk` flag if both are set. Default: `cached` (`cold` if `on_disk` is set to true).|
|payload_m|integer(uint) \| null|false|none|Number of additional payload-aware links per node. If unset, the value of m is used. An effective value of 0 disables these additional links. A positive value allows them for indexed payload fields with HNSW enabled, even when m is 0.|
|inline_storage|boolean \| null|false|none|Store copies of original and quantized vectors within the HNSW index file. Default: false. Enabling this option will trade the search speed for disk usage by reducing amount of random seeks during the search. Requires quantized vectors to be enabled. Multi-vectors are not supported.|

<h2 id="tocS_OptimizersConfig">OptimizersConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizersconfig"></a>
<a id="schema_OptimizersConfig"></a>
<a id="tocSoptimizersconfig"></a>
<a id="tocsoptimizersconfig"></a>

```json
{
  "deleted_threshold": 0.2,
  "vacuum_min_vector_number": 1000,
  "default_segment_number": 0,
  "max_segment_size": null,
  "memmap_threshold": null,
  "indexing_threshold": null,
  "flush_interval_sec": 0,
  "max_optimization_threads": null,
  "prevent_unoptimized": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted_threshold|number(double)|false|none|The minimal fraction of deleted vectors in a segment, required to perform segment optimization|
|vacuum_min_vector_number|integer(uint)|false|none|The minimal number of vectors in a segment, required to perform segment optimization|
|default_segment_number|integer(uint)|true|none|Target amount of segments optimizer will try to keep. Real amount of segments may vary depending on multiple parameters: - Amount of stored points - Current write RPS<br><br>It is recommended to select default number of segments as a factor of the number of search threads, so that each segment would be handled evenly by one of the threads. If `default_segment_number = 0`, will be automatically selected by the number of available CPUs.|
|max_segment_size|integer(uint) \| null|false|none|Do not create segments larger than this size (in kilobytes). Large segments might require disproportionately long indexation times, therefore it makes sense to limit the size of segments.<br><br>If indexing speed is more important - make this parameter lower. If search speed is more important - make this parameter higher. Note: 1Kb = 1 vector of size 256 If not set, will be automatically selected considering the number of available CPUs.|
|memmap_threshold|integer(uint) \| null|false|none|**Deprecated.** Maximum size (in kilobytes) of vectors to store in-memory per segment. Segments larger than this threshold will be stored as read-only memmapped file.<br><br>Memmap storage is disabled by default, to enable it, set this threshold to a reasonable value.<br><br>To disable memmap storage, set this to `0`. Internally it will use the largest threshold possible.<br><br>Note: 1Kb = 1 vector of size 256|
|indexing_threshold|integer(uint) \| null|false|none|Maximum size (in kilobytes) of vectors allowed for plain index, exceeding this threshold will enable vector indexing<br><br>Default value is 10,000, based on experiments and observations.<br><br>To disable vector indexing, set to `0`.<br><br>Note: 1kB = 1 vector of size 256.|
|flush_interval_sec|integer(uint64)|true|none|Minimum interval between forced flushes.|
|max_optimization_threads|integer(uint) \| null|false|none|Max number of threads (jobs) for running optimizations per shard. Note: each optimization job will also use `max_indexing_threads` threads by itself for index building. If null - have no limit and choose dynamically to saturate CPU. If 0 - no optimization threads, optimizations will be disabled.|
|prevent_unoptimized|boolean \| null|false|none|If enabled, the service will try to prevent the creation of large unoptimized segments. When enabled, new points written to segments larger than the indexing threshold are stored as "deferred points": they are persisted in the WAL and segments, but excluded from read/search results until the corresponding segments are optimized (e.g. indexed, quantized, or moved to mmap storage). Update requests with `wait=true` will only return after the deferred points become visible, which may significantly increase the perceived latency between submitting an update and its completion. Update requests with `wait=false` are not affected. Default is disabled.|

<h2 id="tocS_WalConfig">WalConfig</h2>
<!-- backwards compatibility -->
<a id="schemawalconfig"></a>
<a id="schema_WalConfig"></a>
<a id="tocSwalconfig"></a>
<a id="tocswalconfig"></a>

```json
{
  "wal_capacity_mb": 1,
  "wal_segments_ahead": 0,
  "wal_retain_closed": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wal_capacity_mb|integer(uint)|true|none|Size of a single WAL segment in MB|
|wal_segments_ahead|integer(uint)|true|none|Number of WAL segments to create ahead of actually used ones|
|wal_retain_closed|integer(uint)|false|none|Number of closed WAL segments to keep|

<h2 id="tocS_StrictModeConfigOutput">StrictModeConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodeconfigoutput"></a>
<a id="schema_StrictModeConfigOutput"></a>
<a id="tocSstrictmodeconfigoutput"></a>
<a id="tocsstrictmodeconfigoutput"></a>

```json
{
  "enabled": true,
  "max_query_limit": 0,
  "max_timeout": 0,
  "unindexed_filtering_retrieve": true,
  "unindexed_filtering_update": true,
  "search_max_hnsw_ef": 0,
  "search_allow_exact": true,
  "search_max_oversampling": 0,
  "upsert_max_batchsize": 0,
  "search_max_batchsize": 0,
  "max_collection_vector_size_bytes": 0,
  "read_rate_limit": 0,
  "write_rate_limit": 0,
  "max_collection_payload_size_bytes": 0,
  "max_points_count": 0,
  "filter_max_conditions": 0,
  "condition_max_size": 0,
  "multivector_config": {
    "property1": {
      "max_vectors": 0
    },
    "property2": {
      "max_vectors": 0
    }
  },
  "sparse_config": {
    "property1": {
      "max_length": 0
    },
    "property2": {
      "max_length": 0
    }
  },
  "max_payload_index_count": 0,
  "max_resident_memory_percent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean \| null|false|none|Whether strict mode is enabled for a collection or not.|
|max_query_limit|integer(uint) \| null|false|none|Max allowed `limit` parameter for all APIs that don't have their own max limit.|
|max_timeout|integer(uint) \| null|false|none|Max allowed `timeout` parameter.|
|unindexed_filtering_retrieve|boolean \| null|false|none|Allow usage of unindexed fields in retrieval based (e.g. search) filters.|
|unindexed_filtering_update|boolean \| null|false|none|Allow usage of unindexed fields in filtered updates (e.g. delete by payload).|
|search_max_hnsw_ef|integer(uint) \| null|false|none|Max HNSW value allowed in search parameters.|
|search_allow_exact|boolean \| null|false|none|Whether exact search is allowed or not.|
|search_max_oversampling|number(double) \| null|false|none|Max oversampling value allowed in search.|
|upsert_max_batchsize|integer(uint) \| null|false|none|Max batchsize when upserting|
|search_max_batchsize|integer(uint) \| null|false|none|Max batchsize when searching|
|max_collection_vector_size_bytes|integer(uint) \| null|false|none|Max size of a collections vector storage in bytes, ignoring replicas.|
|read_rate_limit|integer(uint) \| null|false|none|Max number of read operations per minute per replica|
|write_rate_limit|integer(uint) \| null|false|none|Max number of write operations per minute per replica|
|max_collection_payload_size_bytes|integer(uint) \| null|false|none|Max size of a collections payload storage in bytes|
|max_points_count|integer(uint) \| null|false|none|Max number of points estimated in a collection|
|filter_max_conditions|integer(uint) \| null|false|none|Max conditions a filter can have.|
|condition_max_size|integer(uint) \| null|false|none|Max size of a condition, eg. items in `MatchAny`.|
|multivector_config|[StrictModeMultivectorConfigOutput](#schemastrictmodemultivectorconfigoutput) \| object \| null|false|none|Multivector configuration|
|sparse_config|[StrictModeSparseConfigOutput](#schemastrictmodesparseconfigoutput) \| object \| null|false|none|Sparse vector configuration|
|max_payload_index_count|integer(uint) \| null|false|none|Max number of payload indexes in a collection|
|max_resident_memory_percent|integer(uint8) \| null|false|none|**Deprecated.** Deprecated: use the node-wide quota config instead. Reject memory-consuming update operations when resident memory exceeds this percentage of total RAM (1-100)|

<h2 id="tocS_StrictModeMultivectorConfigOutput">StrictModeMultivectorConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodemultivectorconfigoutput"></a>
<a id="schema_StrictModeMultivectorConfigOutput"></a>
<a id="tocSstrictmodemultivectorconfigoutput"></a>
<a id="tocsstrictmodemultivectorconfigoutput"></a>

```json
{
  "property1": {
    "max_vectors": 0
  },
  "property2": {
    "max_vectors": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StrictModeMultivectorOutput](#schemastrictmodemultivectoroutput)|false|none|none|

<h2 id="tocS_StrictModeMultivectorOutput">StrictModeMultivectorOutput</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodemultivectoroutput"></a>
<a id="schema_StrictModeMultivectorOutput"></a>
<a id="tocSstrictmodemultivectoroutput"></a>
<a id="tocsstrictmodemultivectoroutput"></a>

```json
{
  "max_vectors": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_vectors|integer(uint) \| null|false|none|Max number of vectors in a multivector|

<h2 id="tocS_StrictModeSparseConfigOutput">StrictModeSparseConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodesparseconfigoutput"></a>
<a id="schema_StrictModeSparseConfigOutput"></a>
<a id="tocSstrictmodesparseconfigoutput"></a>
<a id="tocsstrictmodesparseconfigoutput"></a>

```json
{
  "property1": {
    "max_length": 0
  },
  "property2": {
    "max_length": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StrictModeSparseOutput](#schemastrictmodesparseoutput)|false|none|none|

<h2 id="tocS_StrictModeSparseOutput">StrictModeSparseOutput</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodesparseoutput"></a>
<a id="schema_StrictModeSparseOutput"></a>
<a id="tocSstrictmodesparseoutput"></a>
<a id="tocsstrictmodesparseoutput"></a>

```json
{
  "max_length": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_length|integer(uint) \| null|false|none|Max length of sparse vector|

<h2 id="tocS_Payload">Payload</h2>
<!-- backwards compatibility -->
<a id="schemapayload"></a>
<a id="schema_Payload"></a>
<a id="tocSpayload"></a>
<a id="tocspayload"></a>

```json
{
  "city": "London",
  "color": "green"
}
```

<h2 id="tocS_PayloadIndexInfo">PayloadIndexInfo</h2>
<!-- backwards compatibility -->
<a id="schemapayloadindexinfo"></a>
<a id="schema_PayloadIndexInfo"></a>
<a id="tocSpayloadindexinfo"></a>
<a id="tocspayloadindexinfo"></a>

```json
{
  "data_type": "keyword",
  "params": {
    "type": "keyword",
    "is_tenant": true,
    "on_disk": true,
    "memory": "cold",
    "enable_hnsw": true,
    "prefix": true,
    "nested": "string"
  },
  "points": 0
}
```

Display payload field type & index information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_type|[PayloadSchemaType](#schemapayloadschematype)|true|none|All possible names of payload types|
|params|[PayloadSchemaParams](#schemapayloadschemaparams) \| object \| null|false|none|none|
|points|integer(uint)|true|none|Number of points indexed with this index|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|keyword|
|data_type|integer|
|data_type|float|
|data_type|geo|
|data_type|text|
|data_type|bool|
|data_type|datetime|
|data_type|uuid|

<h2 id="tocS_PayloadSchemaType">PayloadSchemaType</h2>
<!-- backwards compatibility -->
<a id="schemapayloadschematype"></a>
<a id="schema_PayloadSchemaType"></a>
<a id="tocSpayloadschematype"></a>
<a id="tocspayloadschematype"></a>

```json
"keyword"
```

All possible names of payload types

<h2 id="tocS_PayloadSchemaParams">PayloadSchemaParams</h2>
<!-- backwards compatibility -->
<a id="schemapayloadschemaparams"></a>
<a id="schema_PayloadSchemaParams"></a>
<a id="tocSpayloadschemaparams"></a>
<a id="tocspayloadschemaparams"></a>

```json
{
  "type": "keyword",
  "is_tenant": true,
  "on_disk": true,
  "memory": "cold",
  "enable_hnsw": true,
  "prefix": true,
  "nested": "string"
}
```

Payload type with parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[KeywordIndexParams](#schemakeywordindexparams)|false|none|none|
|*anyOf*|[IntegerIndexParams](#schemaintegerindexparams)|false|none|none|
|*anyOf*|[FloatIndexParams](#schemafloatindexparams)|false|none|none|
|*anyOf*|[GeoIndexParams](#schemageoindexparams)|false|none|none|
|*anyOf*|[TextIndexParams](#schematextindexparams)|false|none|none|
|*anyOf*|[BoolIndexParams](#schemaboolindexparams)|false|none|none|
|*anyOf*|[DatetimeIndexParams](#schemadatetimeindexparams)|false|none|none|
|*anyOf*|[UuidIndexParams](#schemauuidindexparams)|false|none|none|

<h2 id="tocS_KeywordIndexParams">KeywordIndexParams</h2>
<!-- backwards compatibility -->
<a id="schemakeywordindexparams"></a>
<a id="schema_KeywordIndexParams"></a>
<a id="tocSkeywordindexparams"></a>
<a id="tocskeywordindexparams"></a>

```json
{
  "type": "keyword",
  "is_tenant": true,
  "on_disk": true,
  "memory": "cold",
  "enable_hnsw": true,
  "prefix": true,
  "nested": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[KeywordIndexType](#schemakeywordindextype)|true|none|none|
|is_tenant|boolean \| null|false|none|If true - used for tenant optimization. Default: false.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, store the index on disk. Default: false.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|enable_hnsw|boolean \| null|false|none|Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.|
|prefix|boolean \| null|false|none|If true, enable prefix matching (`match: { "prefix": ... }`) on this field. Default: false.|
|nested|string \| null|false|none|Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|keyword|

<h2 id="tocS_KeywordIndexType">KeywordIndexType</h2>
<!-- backwards compatibility -->
<a id="schemakeywordindextype"></a>
<a id="schema_KeywordIndexType"></a>
<a id="tocSkeywordindextype"></a>
<a id="tocskeywordindextype"></a>

```json
"keyword"
```

<h2 id="tocS_IntegerIndexParams">IntegerIndexParams</h2>
<!-- backwards compatibility -->
<a id="schemaintegerindexparams"></a>
<a id="schema_IntegerIndexParams"></a>
<a id="tocSintegerindexparams"></a>
<a id="tocsintegerindexparams"></a>

```json
{
  "type": "integer",
  "lookup": true,
  "range": true,
  "is_principal": true,
  "on_disk": true,
  "memory": "cold",
  "enable_hnsw": true,
  "nested": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[IntegerIndexType](#schemaintegerindextype)|true|none|none|
|lookup|boolean \| null|false|none|If true - support direct lookups. Default is true.|
|range|boolean \| null|false|none|If true - support ranges filters. Default is true.|
|is_principal|boolean \| null|false|none|If true - use this key to organize storage of the collection data. This option assumes that this key will be used in majority of filtered requests. Default is false.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, store the index on disk. Default: false.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|enable_hnsw|boolean \| null|false|none|Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.|
|nested|string \| null|false|none|Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|integer|

<h2 id="tocS_IntegerIndexType">IntegerIndexType</h2>
<!-- backwards compatibility -->
<a id="schemaintegerindextype"></a>
<a id="schema_IntegerIndexType"></a>
<a id="tocSintegerindextype"></a>
<a id="tocsintegerindextype"></a>

```json
"integer"
```

<h2 id="tocS_FloatIndexParams">FloatIndexParams</h2>
<!-- backwards compatibility -->
<a id="schemafloatindexparams"></a>
<a id="schema_FloatIndexParams"></a>
<a id="tocSfloatindexparams"></a>
<a id="tocsfloatindexparams"></a>

```json
{
  "type": "float",
  "is_principal": true,
  "on_disk": true,
  "memory": "cold",
  "enable_hnsw": true,
  "nested": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[FloatIndexType](#schemafloatindextype)|true|none|none|
|is_principal|boolean \| null|false|none|If true - use this key to organize storage of the collection data. This option assumes that this key will be used in majority of filtered requests.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, store the index on disk. Default: false.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|enable_hnsw|boolean \| null|false|none|Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.|
|nested|string \| null|false|none|Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|float|

<h2 id="tocS_FloatIndexType">FloatIndexType</h2>
<!-- backwards compatibility -->
<a id="schemafloatindextype"></a>
<a id="schema_FloatIndexType"></a>
<a id="tocSfloatindextype"></a>
<a id="tocsfloatindextype"></a>

```json
"float"
```

<h2 id="tocS_GeoIndexParams">GeoIndexParams</h2>
<!-- backwards compatibility -->
<a id="schemageoindexparams"></a>
<a id="schema_GeoIndexParams"></a>
<a id="tocSgeoindexparams"></a>
<a id="tocsgeoindexparams"></a>

```json
{
  "type": "geo",
  "on_disk": true,
  "memory": "cold",
  "enable_hnsw": true,
  "nested": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[GeoIndexType](#schemageoindextype)|true|none|none|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, store the index on disk. Default: false.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|enable_hnsw|boolean \| null|false|none|Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.|
|nested|string \| null|false|none|Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|geo|

<h2 id="tocS_GeoIndexType">GeoIndexType</h2>
<!-- backwards compatibility -->
<a id="schemageoindextype"></a>
<a id="schema_GeoIndexType"></a>
<a id="tocSgeoindextype"></a>
<a id="tocsgeoindextype"></a>

```json
"geo"
```

<h2 id="tocS_TextIndexParams">TextIndexParams</h2>
<!-- backwards compatibility -->
<a id="schematextindexparams"></a>
<a id="schema_TextIndexParams"></a>
<a id="tocStextindexparams"></a>
<a id="tocstextindexparams"></a>

```json
{
  "type": "text",
  "tokenizer": "prefix",
  "min_token_len": 0,
  "max_token_len": 0,
  "lowercase": true,
  "ascii_folding": true,
  "phrase_matching": true,
  "stopwords": "arabic",
  "on_disk": true,
  "memory": "cold",
  "stemmer": {
    "type": "snowball",
    "language": "arabic"
  },
  "enable_hnsw": true,
  "scoring": true,
  "nested": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[TextIndexType](#schematextindextype)|true|none|none|
|tokenizer|[TokenizerType](#schematokenizertype)|false|none|none|
|min_token_len|integer(uint) \| null|false|none|Minimum characters to be tokenized.|
|max_token_len|integer(uint) \| null|false|none|Maximum characters to be tokenized.|
|lowercase|boolean \| null|false|none|If true, lowercase all tokens. Default: true.|
|ascii_folding|boolean \| null|false|none|If true, normalize tokens by folding accented characters to ASCII (e.g., "ação" -> "acao"). Default: false.|
|phrase_matching|boolean \| null|false|none|If true, support phrase matching. Default: false.|
|stopwords|[StopwordsInterface](#schemastopwordsinterface) \| object \| null|false|none|Ignore this set of tokens. Can select from predefined languages and/or provide a custom set.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, store the index on disk. Default: false.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|stemmer|[StemmingAlgorithm](#schemastemmingalgorithm) \| object \| null|false|none|Algorithm for stemming. Default: disabled.|
|enable_hnsw|boolean \| null|false|none|Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.|
|scoring|[TextScoringInterface](#schematextscoringinterface) \| object \| null|false|none|Enable ranking points by BM25 over this field; `true` for the defaults. Changing it rebuilds the index. Default: disabled.|
|nested|string \| null|false|none|Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].title`. The field must be inside the array's elements. Every query on the field, not only nested filters, treats each element as its own document: a condition matches a point when a single element matches it, and BM25 scores elements separately. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|tokenizer|prefix|
|tokenizer|whitespace|
|tokenizer|word|
|tokenizer|multilingual|
|tokenizer|code|

<h2 id="tocS_TextIndexType">TextIndexType</h2>
<!-- backwards compatibility -->
<a id="schematextindextype"></a>
<a id="schema_TextIndexType"></a>
<a id="tocStextindextype"></a>
<a id="tocstextindextype"></a>

```json
"text"
```

<h2 id="tocS_TokenizerType">TokenizerType</h2>
<!-- backwards compatibility -->
<a id="schematokenizertype"></a>
<a id="schema_TokenizerType"></a>
<a id="tocStokenizertype"></a>
<a id="tocstokenizertype"></a>

```json
"prefix"
```

<h2 id="tocS_StopwordsInterface">StopwordsInterface</h2>
<!-- backwards compatibility -->
<a id="schemastopwordsinterface"></a>
<a id="schema_StopwordsInterface"></a>
<a id="tocSstopwordsinterface"></a>
<a id="tocsstopwordsinterface"></a>

```json
"arabic"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[Language](#schemalanguage)|false|none|none|
|*anyOf*|[StopwordsSet](#schemastopwordsset)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anyOf*|arabic|
|*anyOf*|azerbaijani|
|*anyOf*|basque|
|*anyOf*|bengali|
|*anyOf*|catalan|
|*anyOf*|chinese|
|*anyOf*|danish|
|*anyOf*|dutch|
|*anyOf*|english|
|*anyOf*|finnish|
|*anyOf*|french|
|*anyOf*|german|
|*anyOf*|greek|
|*anyOf*|hebrew|
|*anyOf*|hinglish|
|*anyOf*|hungarian|
|*anyOf*|indonesian|
|*anyOf*|italian|
|*anyOf*|japanese|
|*anyOf*|kazakh|
|*anyOf*|nepali|
|*anyOf*|norwegian|
|*anyOf*|portuguese|
|*anyOf*|romanian|
|*anyOf*|russian|
|*anyOf*|slovene|
|*anyOf*|spanish|
|*anyOf*|swedish|
|*anyOf*|tajik|
|*anyOf*|turkish|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"arabic"
```

<h2 id="tocS_StopwordsSet">StopwordsSet</h2>
<!-- backwards compatibility -->
<a id="schemastopwordsset"></a>
<a id="schema_StopwordsSet"></a>
<a id="tocSstopwordsset"></a>
<a id="tocsstopwordsset"></a>

```json
{
  "languages": [
    "arabic"
  ],
  "custom": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|[[Language](#schemalanguage)]|false|none|Set of languages to use for stopwords. Multiple pre-defined lists of stopwords can be combined.|
|custom|[string]|false|none|Custom stopwords set. Will be merged with the languages set.|

#### Enumerated Values

|Property|Value|
|---|---|
|languages|arabic|
|languages|azerbaijani|
|languages|basque|
|languages|bengali|
|languages|catalan|
|languages|chinese|
|languages|danish|
|languages|dutch|
|languages|english|
|languages|finnish|
|languages|french|
|languages|german|
|languages|greek|
|languages|hebrew|
|languages|hinglish|
|languages|hungarian|
|languages|indonesian|
|languages|italian|
|languages|japanese|
|languages|kazakh|
|languages|nepali|
|languages|norwegian|
|languages|portuguese|
|languages|romanian|
|languages|russian|
|languages|slovene|
|languages|spanish|
|languages|swedish|
|languages|tajik|
|languages|turkish|

<h2 id="tocS_StemmingAlgorithm">StemmingAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemastemmingalgorithm"></a>
<a id="schema_StemmingAlgorithm"></a>
<a id="tocSstemmingalgorithm"></a>
<a id="tocsstemmingalgorithm"></a>

```json
{
  "type": "snowball",
  "language": "arabic"
}
```

Different stemming algorithms with their configs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[SnowballParams](#schemasnowballparams)|false|none|none|
|*anyOf*|[DisabledStemmerParams](#schemadisabledstemmerparams)|false|none|none|

<h2 id="tocS_SnowballParams">SnowballParams</h2>
<!-- backwards compatibility -->
<a id="schemasnowballparams"></a>
<a id="schema_SnowballParams"></a>
<a id="tocSsnowballparams"></a>
<a id="tocssnowballparams"></a>

```json
{
  "type": "snowball",
  "language": "arabic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[Snowball](#schemasnowball)|true|none|none|
|language|[SnowballLanguage](#schemasnowballlanguage)|true|none|Languages supported by snowball stemmer.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|snowball|
|language|arabic|
|language|armenian|
|language|danish|
|language|dutch|
|language|english|
|language|finnish|
|language|french|
|language|german|
|language|greek|
|language|hungarian|
|language|italian|
|language|norwegian|
|language|portuguese|
|language|romanian|
|language|russian|
|language|spanish|
|language|swedish|
|language|tamil|
|language|turkish|

<h2 id="tocS_Snowball">Snowball</h2>
<!-- backwards compatibility -->
<a id="schemasnowball"></a>
<a id="schema_Snowball"></a>
<a id="tocSsnowball"></a>
<a id="tocssnowball"></a>

```json
"snowball"
```

<h2 id="tocS_SnowballLanguage">SnowballLanguage</h2>
<!-- backwards compatibility -->
<a id="schemasnowballlanguage"></a>
<a id="schema_SnowballLanguage"></a>
<a id="tocSsnowballlanguage"></a>
<a id="tocssnowballlanguage"></a>

```json
"arabic"
```

Languages supported by snowball stemmer.

<h2 id="tocS_DisabledStemmerParams">DisabledStemmerParams</h2>
<!-- backwards compatibility -->
<a id="schemadisabledstemmerparams"></a>
<a id="schema_DisabledStemmerParams"></a>
<a id="tocSdisabledstemmerparams"></a>
<a id="tocsdisabledstemmerparams"></a>

```json
{
  "type": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[NoStemmer](#schemanostemmer)|true|none|Tag selecting the explicit "no stemming" algorithm.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|none|

<h2 id="tocS_NoStemmer">NoStemmer</h2>
<!-- backwards compatibility -->
<a id="schemanostemmer"></a>
<a id="schema_NoStemmer"></a>
<a id="tocSnostemmer"></a>
<a id="tocsnostemmer"></a>

```json
"none"
```

Tag selecting the explicit "no stemming" algorithm.

<h2 id="tocS_TextScoringInterface">TextScoringInterface</h2>
<!-- backwards compatibility -->
<a id="schematextscoringinterface"></a>
<a id="schema_TextScoringInterface"></a>
<a id="tocStextscoringinterface"></a>
<a id="tocstextscoringinterface"></a>

```json
true
```

BM25 scoring for a text index: `true` for the default parameters, `false` to disable it, or the parameters themselves.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|boolean|false|none|none|
|*anyOf*|[TextScoringParams](#schematextscoringparams)|false|none|Parameters of ranking over a text index. The index records the length of each document, which BM25 normalizes by. `k1` and `b` are set per query.|

<h2 id="tocS_TextScoringParams">TextScoringParams</h2>
<!-- backwards compatibility -->
<a id="schematextscoringparams"></a>
<a id="schema_TextScoringParams"></a>
<a id="tocStextscoringparams"></a>
<a id="tocstextscoringparams"></a>

```json
{
  "type": "bm25"
}
```

Parameters of ranking over a text index. The index records the length of each document, which BM25 normalizes by. `k1` and `b` are set per query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[TextScoringType](#schematextscoringtype)|true|none|How a text index ranks documents.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bm25|

<h2 id="tocS_TextScoringType">TextScoringType</h2>
<!-- backwards compatibility -->
<a id="schematextscoringtype"></a>
<a id="schema_TextScoringType"></a>
<a id="tocStextscoringtype"></a>
<a id="tocstextscoringtype"></a>

```json
"bm25"
```

How a text index ranks documents.

<h2 id="tocS_BoolIndexParams">BoolIndexParams</h2>
<!-- backwards compatibility -->
<a id="schemaboolindexparams"></a>
<a id="schema_BoolIndexParams"></a>
<a id="tocSboolindexparams"></a>
<a id="tocsboolindexparams"></a>

```json
{
  "type": "bool",
  "on_disk": true,
  "memory": "cold",
  "enable_hnsw": true,
  "nested": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[BoolIndexType](#schemaboolindextype)|true|none|none|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, store the index on disk. Default: false.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|enable_hnsw|boolean \| null|false|none|Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.|
|nested|string \| null|false|none|Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bool|

<h2 id="tocS_BoolIndexType">BoolIndexType</h2>
<!-- backwards compatibility -->
<a id="schemaboolindextype"></a>
<a id="schema_BoolIndexType"></a>
<a id="tocSboolindextype"></a>
<a id="tocsboolindextype"></a>

```json
"bool"
```

<h2 id="tocS_DatetimeIndexParams">DatetimeIndexParams</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeindexparams"></a>
<a id="schema_DatetimeIndexParams"></a>
<a id="tocSdatetimeindexparams"></a>
<a id="tocsdatetimeindexparams"></a>

```json
{
  "type": "datetime",
  "is_principal": true,
  "on_disk": true,
  "memory": "cold",
  "enable_hnsw": true,
  "nested": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[DatetimeIndexType](#schemadatetimeindextype)|true|none|none|
|is_principal|boolean \| null|false|none|If true - use this key to organize storage of the collection data. This option assumes that this key will be used in majority of filtered requests.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, store the index on disk. Default: false.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|enable_hnsw|boolean \| null|false|none|Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.|
|nested|string \| null|false|none|Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|datetime|

<h2 id="tocS_DatetimeIndexType">DatetimeIndexType</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeindextype"></a>
<a id="schema_DatetimeIndexType"></a>
<a id="tocSdatetimeindextype"></a>
<a id="tocsdatetimeindextype"></a>

```json
"datetime"
```

<h2 id="tocS_UuidIndexParams">UuidIndexParams</h2>
<!-- backwards compatibility -->
<a id="schemauuidindexparams"></a>
<a id="schema_UuidIndexParams"></a>
<a id="tocSuuidindexparams"></a>
<a id="tocsuuidindexparams"></a>

```json
{
  "type": "uuid",
  "is_tenant": true,
  "on_disk": true,
  "memory": "cold",
  "enable_hnsw": true,
  "nested": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[UuidIndexType](#schemauuidindextype)|true|none|none|
|is_tenant|boolean \| null|false|none|If true - used for tenant optimization.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, store the index on disk. Default: false.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).|
|enable_hnsw|boolean \| null|false|none|Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.|
|nested|string \| null|false|none|Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|uuid|

<h2 id="tocS_UuidIndexType">UuidIndexType</h2>
<!-- backwards compatibility -->
<a id="schemauuidindextype"></a>
<a id="schema_UuidIndexType"></a>
<a id="tocSuuidindextype"></a>
<a id="tocsuuidindextype"></a>

```json
"uuid"
```

<h2 id="tocS_UpdateQueueInfo">UpdateQueueInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequeueinfo"></a>
<a id="schema_UpdateQueueInfo"></a>
<a id="tocSupdatequeueinfo"></a>
<a id="tocsupdatequeueinfo"></a>

```json
{
  "length": 0,
  "deferred_points": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|integer(uint)|true|none|Number of elements in the queue|
|deferred_points|integer(uint) \| null|false|none|Number of points that are deferred (i.e hidden from search as they're not yet optimized).|

<h2 id="tocS_PointRequest">PointRequest</h2>
<!-- backwards compatibility -->
<a id="schemapointrequest"></a>
<a id="schema_PointRequest"></a>
<a id="tocSpointrequest"></a>
<a id="tocspointrequest"></a>

```json
{
  "shard_key": "region_1",
  "ids": [
    42
  ],
  "with_payload": true,
  "with_vector": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|Specify in which shards to look for the points, if not specified - look in all shards|
|ids|[[ExtendedPointId](#schemaextendedpointid)]|true|none|Look for points with ids|
|with_payload|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|none|Select which payload to return with the response. Default is true.|
|with_vector|[WithVector](#schemawithvector)|false|none|Options for specifying which vector to include|

<h2 id="tocS_ShardKeySelector">ShardKeySelector</h2>
<!-- backwards compatibility -->
<a id="schemashardkeyselector"></a>
<a id="schema_ShardKeySelector"></a>
<a id="tocSshardkeyselector"></a>
<a id="tocsshardkeyselector"></a>

```json
"region_1"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ShardKey](#schemashardkey)|false|none|none|
|*anyOf*|[[ShardKey](#schemashardkey)]|false|none|none|
|*anyOf*|[ShardKeyWithFallback](#schemashardkeywithfallback)|false|none|none|

<h2 id="tocS_ShardKey">ShardKey</h2>
<!-- backwards compatibility -->
<a id="schemashardkey"></a>
<a id="schema_ShardKey"></a>
<a id="tocSshardkey"></a>
<a id="tocsshardkey"></a>

```json
"region_1"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|integer(uint64)|false|none|none|

<h2 id="tocS_ShardKeyWithFallback">ShardKeyWithFallback</h2>
<!-- backwards compatibility -->
<a id="schemashardkeywithfallback"></a>
<a id="schema_ShardKeyWithFallback"></a>
<a id="tocSshardkeywithfallback"></a>
<a id="tocsshardkeywithfallback"></a>

```json
{
  "target": "region_1",
  "fallback": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|[ShardKey](#schemashardkey)|true|none|none|
|fallback|[ShardKey](#schemashardkey)|true|none|none|

<h2 id="tocS_ExtendedPointId">ExtendedPointId</h2>
<!-- backwards compatibility -->
<a id="schemaextendedpointid"></a>
<a id="schema_ExtendedPointId"></a>
<a id="tocSextendedpointid"></a>
<a id="tocsextendedpointid"></a>

```json
42
```

Type, used for specifying point ID in user interface

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|integer(uint64)|false|none|none|
|*anyOf*|string(uuid)|false|none|none|

<h2 id="tocS_WithPayloadInterface">WithPayloadInterface</h2>
<!-- backwards compatibility -->
<a id="schemawithpayloadinterface"></a>
<a id="schema_WithPayloadInterface"></a>
<a id="tocSwithpayloadinterface"></a>
<a id="tocswithpayloadinterface"></a>

```json
true
```

Options for specifying which payload to include or not

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|boolean|false|none|If `true` - return all payload, If `false` - do not return payload|
|*anyOf*|[string]|false|none|Specify which fields to return|
|*anyOf*|[PayloadSelector](#schemapayloadselector)|false|none|Specifies how to treat payload selector|

<h2 id="tocS_PayloadSelector">PayloadSelector</h2>
<!-- backwards compatibility -->
<a id="schemapayloadselector"></a>
<a id="schema_PayloadSelector"></a>
<a id="tocSpayloadselector"></a>
<a id="tocspayloadselector"></a>

```json
{
  "include": [
    "string"
  ]
}
```

Specifies how to treat payload selector

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[PayloadSelectorInclude](#schemapayloadselectorinclude)|false|none|none|
|*anyOf*|[PayloadSelectorExclude](#schemapayloadselectorexclude)|false|none|none|

<h2 id="tocS_PayloadSelectorInclude">PayloadSelectorInclude</h2>
<!-- backwards compatibility -->
<a id="schemapayloadselectorinclude"></a>
<a id="schema_PayloadSelectorInclude"></a>
<a id="tocSpayloadselectorinclude"></a>
<a id="tocspayloadselectorinclude"></a>

```json
{
  "include": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|include|[string]|true|none|Only include this payload keys|

<h2 id="tocS_PayloadSelectorExclude">PayloadSelectorExclude</h2>
<!-- backwards compatibility -->
<a id="schemapayloadselectorexclude"></a>
<a id="schema_PayloadSelectorExclude"></a>
<a id="tocSpayloadselectorexclude"></a>
<a id="tocspayloadselectorexclude"></a>

```json
{
  "exclude": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclude|[string]|true|none|Exclude this fields from returning payload|

<h2 id="tocS_WithVector">WithVector</h2>
<!-- backwards compatibility -->
<a id="schemawithvector"></a>
<a id="schema_WithVector"></a>
<a id="tocSwithvector"></a>
<a id="tocswithvector"></a>

```json
true
```

Options for specifying which vector to include

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|boolean|false|none|If `true` - return all vector, If `false` - do not return vector|
|*anyOf*|[string]|false|none|Specify which vector to return|

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "id": 42,
  "payload": {
    "city": "London",
    "color": "green"
  },
  "vector": [
    0.875,
    0.140625,
    0.897599995136261
  ],
  "shard_key": "region_1",
  "order_value": 42
}
```

Point data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ExtendedPointId](#schemaextendedpointid)|true|none|Type, used for specifying point ID in user interface|
|payload|[Payload](#schemapayload) \| object \| null|false|none|Payload - values assigned to the point|
|vector|[VectorStructOutput](#schemavectorstructoutput) \| object \| null|false|none|Vector of the point|
|shard_key|[ShardKey](#schemashardkey) \| object \| null|false|none|Shard Key|
|order_value|[OrderValue](#schemaordervalue) \| object \| null|false|none|none|

<h2 id="tocS_VectorStructOutput">VectorStructOutput</h2>
<!-- backwards compatibility -->
<a id="schemavectorstructoutput"></a>
<a id="schema_VectorStructOutput"></a>
<a id="tocSvectorstructoutput"></a>
<a id="tocsvectorstructoutput"></a>

```json
[
  0.875,
  0.140625,
  0.897599995136261
]
```

Vector data stored in Point

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[number(float)]|false|none|none|
|*anyOf*|[[number(float)]]|false|none|none|
|*anyOf*|object|false|none|none|
|**additionalProperties**|[VectorOutput](#schemavectoroutput)|false|none|Vector Data stored in Point|

<h2 id="tocS_VectorOutput">VectorOutput</h2>
<!-- backwards compatibility -->
<a id="schemavectoroutput"></a>
<a id="schema_VectorOutput"></a>
<a id="tocSvectoroutput"></a>
<a id="tocsvectoroutput"></a>

```json
[
  0
]
```

Vector Data stored in Point

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[number(float)]|false|none|none|
|*anyOf*|[SparseVector](#schemasparsevector)|false|none|Sparse vector structure|
|*anyOf*|[[number(float)]]|false|none|none|

<h2 id="tocS_SparseVector">SparseVector</h2>
<!-- backwards compatibility -->
<a id="schemasparsevector"></a>
<a id="schema_SparseVector"></a>
<a id="tocSsparsevector"></a>
<a id="tocssparsevector"></a>

```json
{
  "indices": [
    0
  ],
  "values": [
    0
  ]
}
```

Sparse vector structure

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indices|[integer(uint32)]|true|none|Indices must be unique|
|values|[number(float)]|true|none|Values and indices must be the same length|

<h2 id="tocS_OrderValue">OrderValue</h2>
<!-- backwards compatibility -->
<a id="schemaordervalue"></a>
<a id="schema_OrderValue"></a>
<a id="tocSordervalue"></a>
<a id="tocsordervalue"></a>

```json
42
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|integer(int64)|false|none|none|
|*anyOf*|number(double)|false|none|none|

<h2 id="tocS_ScoredPoint">ScoredPoint</h2>
<!-- backwards compatibility -->
<a id="schemascoredpoint"></a>
<a id="schema_ScoredPoint"></a>
<a id="tocSscoredpoint"></a>
<a id="tocsscoredpoint"></a>

```json
{
  "id": 42,
  "version": 3,
  "score": 0.75,
  "payload": {
    "city": "London",
    "color": "green"
  },
  "vector": [
    0.875,
    0.140625,
    0.897599995136261
  ],
  "shard_key": "region_1",
  "order_value": 42
}
```

Search result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ExtendedPointId](#schemaextendedpointid)|true|none|Type, used for specifying point ID in user interface|
|version|integer(uint64)|true|none|Point version|
|score|number(float)|true|none|Points vector distance to the query vector|
|payload|[Payload](#schemapayload) \| object \| null|false|none|Payload - values assigned to the point|
|vector|[VectorStructOutput](#schemavectorstructoutput) \| object \| null|false|none|Vector of the point|
|shard_key|[ShardKey](#schemashardkey) \| object \| null|false|none|Shard Key|
|order_value|[OrderValue](#schemaordervalue) \| object \| null|false|none|Order-by value|

<h2 id="tocS_UpdateResult">UpdateResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresult"></a>
<a id="schema_UpdateResult"></a>
<a id="tocSupdateresult"></a>
<a id="tocsupdateresult"></a>

```json
{
  "operation_id": 0,
  "status": "acknowledged"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation_id|integer(uint64) \| null|false|none|Sequential number of the operation|
|status|[UpdateStatus](#schemaupdatestatus)|true|none|`Acknowledged` - Request is saved to WAL and will be process in a queue. `Completed` - Request is completed, changes are actual. `WaitTimeout` - Request is waiting for timeout.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|acknowledged|
|status|completed|
|status|wait_timeout|

<h2 id="tocS_UpdateStatus">UpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatus"></a>
<a id="schema_UpdateStatus"></a>
<a id="tocSupdatestatus"></a>
<a id="tocsupdatestatus"></a>

```json
"acknowledged"
```

`Acknowledged` - Request is saved to WAL and will be process in a queue. `Completed` - Request is completed, changes are actual. `WaitTimeout` - Request is waiting for timeout.

<h2 id="tocS_ScrollRequest">ScrollRequest</h2>
<!-- backwards compatibility -->
<a id="schemascrollrequest"></a>
<a id="schema_ScrollRequest"></a>
<a id="tocSscrollrequest"></a>
<a id="tocsscrollrequest"></a>

```json
{
  "shard_key": "region_1",
  "offset": 42,
  "limit": 1,
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "with_payload": true,
  "with_vector": true,
  "order_by": "string"
}
```

Scroll request - paginate over all points which matches given condition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|Specify in which shards to look for the points, if not specified - look in all shards|
|offset|[ExtendedPointId](#schemaextendedpointid) \| object \| null|false|none|Start ID to read points from.|
|limit|integer(uint) \| null|false|none|Page size. Default: 10|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Look only for points which satisfies this conditions. If not provided - all points.|
|with_payload|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|none|Select which payload to return with the response. Default is true.|
|with_vector|[WithVector](#schemawithvector)|false|none|Options for specifying which vector to include|
|order_by|[OrderByInterface](#schemaorderbyinterface) \| object \| null|false|none|Order the records by a payload field.|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "should": {
    "key": "string",
    "match": {
      "value": "string"
    },
    "range": {
      "lt": 0,
      "gt": 0,
      "gte": 0,
      "lte": 0
    },
    "geo_bounding_box": {
      "top_left": {
        "lon": 0,
        "lat": 0
      },
      "bottom_right": {
        "lon": 0,
        "lat": 0
      }
    },
    "geo_radius": {
      "center": {
        "lon": 0,
        "lat": 0
      },
      "radius": 0
    },
    "geo_polygon": {
      "exterior": {
        "points": [
          {
            "lon": 0,
            "lat": 0
          }
        ]
      },
      "interiors": [
        {
          "points": [
            {
              "lon": 0,
              "lat": 0
            }
          ]
        }
      ]
    },
    "values_count": {
      "lt": 0,
      "gt": 0,
      "gte": 0,
      "lte": 0
    },
    "is_empty": true,
    "is_null": true
  },
  "min_should": {
    "conditions": [
      {}
    ],
    "min_count": 1
  },
  "must": {
    "key": "string",
    "match": {
      "value": "string"
    },
    "range": {
      "lt": 0,
      "gt": 0,
      "gte": 0,
      "lte": 0
    },
    "geo_bounding_box": {
      "top_left": {
        "lon": 0,
        "lat": 0
      },
      "bottom_right": {
        "lon": 0,
        "lat": 0
      }
    },
    "geo_radius": {
      "center": {
        "lon": 0,
        "lat": 0
      },
      "radius": 0
    },
    "geo_polygon": {
      "exterior": {
        "points": [
          {
            "lon": 0,
            "lat": 0
          }
        ]
      },
      "interiors": [
        {
          "points": [
            {
              "lon": 0,
              "lat": 0
            }
          ]
        }
      ]
    },
    "values_count": {
      "lt": 0,
      "gt": 0,
      "gte": 0,
      "lte": 0
    },
    "is_empty": true,
    "is_null": true
  },
  "must_not": {
    "key": "string",
    "match": {
      "value": "string"
    },
    "range": {
      "lt": 0,
      "gt": 0,
      "gte": 0,
      "lte": 0
    },
    "geo_bounding_box": {
      "top_left": {
        "lon": 0,
        "lat": 0
      },
      "bottom_right": {
        "lon": 0,
        "lat": 0
      }
    },
    "geo_radius": {
      "center": {
        "lon": 0,
        "lat": 0
      },
      "radius": 0
    },
    "geo_polygon": {
      "exterior": {
        "points": [
          {
            "lon": 0,
            "lat": 0
          }
        ]
      },
      "interiors": [
        {
          "points": [
            {
              "lon": 0,
              "lat": 0
            }
          ]
        }
      ]
    },
    "values_count": {
      "lt": 0,
      "gt": 0,
      "gte": 0,
      "lte": 0
    },
    "is_empty": true,
    "is_null": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|should|[Condition](#schemacondition) \| [[Condition](#schemacondition)] \| object \| null|false|none|At least one of those conditions should match|
|min_should|[MinShould](#schemaminshould) \| object \| null|false|none|At least minimum amount of given conditions should match|
|must|[Condition](#schemacondition) \| [[Condition](#schemacondition)] \| object \| null|false|none|All conditions must match|
|must_not|[Condition](#schemacondition) \| [[Condition](#schemacondition)] \| object \| null|false|none|All conditions must NOT match|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "key": "string",
  "match": {
    "value": "string"
  },
  "range": {
    "lt": 0,
    "gt": 0,
    "gte": 0,
    "lte": 0
  },
  "geo_bounding_box": {
    "top_left": {
      "lon": 0,
      "lat": 0
    },
    "bottom_right": {
      "lon": 0,
      "lat": 0
    }
  },
  "geo_radius": {
    "center": {
      "lon": 0,
      "lat": 0
    },
    "radius": 0
  },
  "geo_polygon": {
    "exterior": {
      "points": [
        {
          "lon": 0,
          "lat": 0
        }
      ]
    },
    "interiors": [
      {
        "points": [
          {
            "lon": 0,
            "lat": 0
          }
        ]
      }
    ]
  },
  "values_count": {
    "lt": 0,
    "gt": 0,
    "gte": 0,
    "lte": 0
  },
  "is_empty": true,
  "is_null": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[FieldCondition](#schemafieldcondition)|false|none|All possible payload filtering conditions|
|*anyOf*|[IsEmptyCondition](#schemaisemptycondition)|false|none|Select points with empty payload for a specified field|
|*anyOf*|[IsNullCondition](#schemaisnullcondition)|false|none|Select points with null payload for a specified field|
|*anyOf*|[HasIdCondition](#schemahasidcondition)|false|none|ID-based filtering condition|
|*anyOf*|[HasVectorCondition](#schemahasvectorcondition)|false|none|Filter points which have specific vector assigned|
|*anyOf*|[SliceCondition](#schemaslicecondition)|false|none|Select points that fall into one of `total` disjoint deterministic slices of the id space, for parallel scans and reproducible sampling.|
|*anyOf*|[NestedCondition](#schemanestedcondition)|false|none|none|
|*anyOf*|[Filter](#schemafilter)|false|none|none|

<h2 id="tocS_FieldCondition">FieldCondition</h2>
<!-- backwards compatibility -->
<a id="schemafieldcondition"></a>
<a id="schema_FieldCondition"></a>
<a id="tocSfieldcondition"></a>
<a id="tocsfieldcondition"></a>

```json
{
  "key": "string",
  "match": {
    "value": "string"
  },
  "range": {
    "lt": 0,
    "gt": 0,
    "gte": 0,
    "lte": 0
  },
  "geo_bounding_box": {
    "top_left": {
      "lon": 0,
      "lat": 0
    },
    "bottom_right": {
      "lon": 0,
      "lat": 0
    }
  },
  "geo_radius": {
    "center": {
      "lon": 0,
      "lat": 0
    },
    "radius": 0
  },
  "geo_polygon": {
    "exterior": {
      "points": [
        {
          "lon": 0,
          "lat": 0
        }
      ]
    },
    "interiors": [
      {
        "points": [
          {
            "lon": 0,
            "lat": 0
          }
        ]
      }
    ]
  },
  "values_count": {
    "lt": 0,
    "gt": 0,
    "gte": 0,
    "lte": 0
  },
  "is_empty": true,
  "is_null": true
}
```

All possible payload filtering conditions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Payload key|
|match|[Match](#schemamatch) \| object \| null|false|none|Check if point has field with a given value|
|range|[RangeInterface](#schemarangeinterface) \| object \| null|false|none|Check if points value lies in a given range|
|geo_bounding_box|[GeoBoundingBox](#schemageoboundingbox) \| object \| null|false|none|Check if points geolocation lies in a given area|
|geo_radius|[GeoRadius](#schemageoradius) \| object \| null|false|none|Check if geo point is within a given radius|
|geo_polygon|[GeoPolygon](#schemageopolygon) \| object \| null|false|none|Check if geo point is within a given polygon|
|values_count|[ValuesCount](#schemavaluescount) \| object \| null|false|none|Check number of values of the field|
|is_empty|boolean \| null|false|none|Check that the field is empty, alternative syntax for `is_empty: "field_name"`|
|is_null|boolean \| null|false|none|Check that the field is null, alternative syntax for `is_null: "field_name"`|

<h2 id="tocS_Match">Match</h2>
<!-- backwards compatibility -->
<a id="schemamatch"></a>
<a id="schema_Match"></a>
<a id="tocSmatch"></a>
<a id="tocsmatch"></a>

```json
{
  "value": "string"
}
```

Match filter request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[MatchValue](#schemamatchvalue)|false|none|Exact match of the given value|
|*anyOf*|[MatchText](#schemamatchtext)|false|none|Full-text match of the strings.|
|*anyOf*|[MatchTextAny](#schemamatchtextany)|false|none|Full-text match of at least one token of the string.|
|*anyOf*|[MatchPhrase](#schemamatchphrase)|false|none|Full-text phrase match of the string.|
|*anyOf*|[MatchPrefix](#schemamatchprefix)|false|none|Match keyword values that start with the given string.<br><br>Byte-wise (hence, for valid UTF-8, character-wise) and case-sensitive, consistent with exact keyword matching. Served efficiently by a keyword index created with the `prefix` option.|
|*anyOf*|[MatchSubstring](#schemamatchsubstring)|false|none|Match keyword values that contain the given string.<br><br>Byte-wise (hence, for valid UTF-8, character-wise) and case-sensitive, consistent with exact keyword and prefix matching. Served by a keyword index with the `prefix` option, through a scan of its key dictionary; without one, falls back to reading the payload.|
|*anyOf*|[MatchAny](#schemamatchany)|false|none|Exact match on any of the given values|
|*anyOf*|[MatchExcept](#schemamatchexcept)|false|none|Should have at least one value not matching the any given values|

<h2 id="tocS_MatchValue">MatchValue</h2>
<!-- backwards compatibility -->
<a id="schemamatchvalue"></a>
<a id="schema_MatchValue"></a>
<a id="tocSmatchvalue"></a>
<a id="tocsmatchvalue"></a>

```json
{
  "value": "string"
}
```

Exact match of the given value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[ValueVariants](#schemavaluevariants)|true|none|none|

<h2 id="tocS_ValueVariants">ValueVariants</h2>
<!-- backwards compatibility -->
<a id="schemavaluevariants"></a>
<a id="schema_ValueVariants"></a>
<a id="tocSvaluevariants"></a>
<a id="tocsvaluevariants"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|integer(int64)|false|none|none|
|*anyOf*|boolean|false|none|none|

<h2 id="tocS_MatchText">MatchText</h2>
<!-- backwards compatibility -->
<a id="schemamatchtext"></a>
<a id="schema_MatchText"></a>
<a id="tocSmatchtext"></a>
<a id="tocsmatchtext"></a>

```json
{
  "text": "string"
}
```

Full-text match of the strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|none|

<h2 id="tocS_MatchTextAny">MatchTextAny</h2>
<!-- backwards compatibility -->
<a id="schemamatchtextany"></a>
<a id="schema_MatchTextAny"></a>
<a id="tocSmatchtextany"></a>
<a id="tocsmatchtextany"></a>

```json
{
  "text_any": "string"
}
```

Full-text match of at least one token of the string.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text_any|string|true|none|none|

<h2 id="tocS_MatchPhrase">MatchPhrase</h2>
<!-- backwards compatibility -->
<a id="schemamatchphrase"></a>
<a id="schema_MatchPhrase"></a>
<a id="tocSmatchphrase"></a>
<a id="tocsmatchphrase"></a>

```json
{
  "phrase": "string"
}
```

Full-text phrase match of the string.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phrase|string|true|none|none|

<h2 id="tocS_MatchPrefix">MatchPrefix</h2>
<!-- backwards compatibility -->
<a id="schemamatchprefix"></a>
<a id="schema_MatchPrefix"></a>
<a id="tocSmatchprefix"></a>
<a id="tocsmatchprefix"></a>

```json
{
  "prefix": "string"
}
```

Match keyword values that start with the given string.

Byte-wise (hence, for valid UTF-8, character-wise) and case-sensitive, consistent with exact keyword matching. Served efficiently by a keyword index created with the `prefix` option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|string|true|none|none|

<h2 id="tocS_MatchSubstring">MatchSubstring</h2>
<!-- backwards compatibility -->
<a id="schemamatchsubstring"></a>
<a id="schema_MatchSubstring"></a>
<a id="tocSmatchsubstring"></a>
<a id="tocsmatchsubstring"></a>

```json
{
  "substring": "string"
}
```

Match keyword values that contain the given string.

Byte-wise (hence, for valid UTF-8, character-wise) and case-sensitive, consistent with exact keyword and prefix matching. Served by a keyword index with the `prefix` option, through a scan of its key dictionary; without one, falls back to reading the payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|substring|string|true|none|none|

<h2 id="tocS_MatchAny">MatchAny</h2>
<!-- backwards compatibility -->
<a id="schemamatchany"></a>
<a id="schema_MatchAny"></a>
<a id="tocSmatchany"></a>
<a id="tocsmatchany"></a>

```json
{
  "any": [
    "string"
  ]
}
```

Exact match on any of the given values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|any|[AnyVariants](#schemaanyvariants)|true|none|none|

<h2 id="tocS_AnyVariants">AnyVariants</h2>
<!-- backwards compatibility -->
<a id="schemaanyvariants"></a>
<a id="schema_AnyVariants"></a>
<a id="tocSanyvariants"></a>
<a id="tocsanyvariants"></a>

```json
[
  "string"
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[string]|false|none|none|
|*anyOf*|[integer(int64)]|false|none|none|

<h2 id="tocS_MatchExcept">MatchExcept</h2>
<!-- backwards compatibility -->
<a id="schemamatchexcept"></a>
<a id="schema_MatchExcept"></a>
<a id="tocSmatchexcept"></a>
<a id="tocsmatchexcept"></a>

```json
{
  "except": [
    "string"
  ]
}
```

Should have at least one value not matching the any given values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|except|[AnyVariants](#schemaanyvariants)|true|none|none|

<h2 id="tocS_RangeInterface">RangeInterface</h2>
<!-- backwards compatibility -->
<a id="schemarangeinterface"></a>
<a id="schema_RangeInterface"></a>
<a id="tocSrangeinterface"></a>
<a id="tocsrangeinterface"></a>

```json
{
  "lt": 0,
  "gt": 0,
  "gte": 0,
  "lte": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[Range](#schemarange)|false|none|Range filter request|
|*anyOf*|[DatetimeRange](#schemadatetimerange)|false|none|Range filter request|

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "lt": 0,
  "gt": 0,
  "gte": 0,
  "lte": 0
}
```

Range filter request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lt|number(double) \| null|false|none|point.key < range.lt|
|gt|number(double) \| null|false|none|point.key > range.gt|
|gte|number(double) \| null|false|none|point.key >= range.gte|
|lte|number(double) \| null|false|none|point.key <= range.lte|

<h2 id="tocS_DatetimeRange">DatetimeRange</h2>
<!-- backwards compatibility -->
<a id="schemadatetimerange"></a>
<a id="schema_DatetimeRange"></a>
<a id="tocSdatetimerange"></a>
<a id="tocsdatetimerange"></a>

```json
{
  "lt": "1970-01-01T00:00:00Z",
  "gt": "1970-01-01T00:00:00Z",
  "gte": "1970-01-01T00:00:00Z",
  "lte": "1970-01-01T00:00:00Z"
}
```

Range filter request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lt|string(date-time) \| null|false|none|point.key < range.lt|
|gt|string(date-time) \| null|false|none|point.key > range.gt|
|gte|string(date-time) \| null|false|none|point.key >= range.gte|
|lte|string(date-time) \| null|false|none|point.key <= range.lte|

<h2 id="tocS_GeoBoundingBox">GeoBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemageoboundingbox"></a>
<a id="schema_GeoBoundingBox"></a>
<a id="tocSgeoboundingbox"></a>
<a id="tocsgeoboundingbox"></a>

```json
{
  "top_left": {
    "lon": 0,
    "lat": 0
  },
  "bottom_right": {
    "lon": 0,
    "lat": 0
  }
}
```

Geo filter request

Matches coordinates inside the rectangle, described by coordinates of lop-left and bottom-right edges

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left|[GeoPoint](#schemageopoint)|true|none|Geo point payload schema|
|bottom_right|[GeoPoint](#schemageopoint)|true|none|Geo point payload schema|

<h2 id="tocS_GeoPoint">GeoPoint</h2>
<!-- backwards compatibility -->
<a id="schemageopoint"></a>
<a id="schema_GeoPoint"></a>
<a id="tocSgeopoint"></a>
<a id="tocsgeopoint"></a>

```json
{
  "lon": 0,
  "lat": 0
}
```

Geo point payload schema

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lon|number(double)|true|none|none|
|lat|number(double)|true|none|none|

<h2 id="tocS_GeoRadius">GeoRadius</h2>
<!-- backwards compatibility -->
<a id="schemageoradius"></a>
<a id="schema_GeoRadius"></a>
<a id="tocSgeoradius"></a>
<a id="tocsgeoradius"></a>

```json
{
  "center": {
    "lon": 0,
    "lat": 0
  },
  "radius": 0
}
```

Geo filter request

Matches coordinates inside the circle of `radius` and center with coordinates `center`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|center|[GeoPoint](#schemageopoint)|true|none|Geo point payload schema|
|radius|number(double)|true|none|Radius of the area in meters|

<h2 id="tocS_GeoPolygon">GeoPolygon</h2>
<!-- backwards compatibility -->
<a id="schemageopolygon"></a>
<a id="schema_GeoPolygon"></a>
<a id="tocSgeopolygon"></a>
<a id="tocsgeopolygon"></a>

```json
{
  "exterior": {
    "points": [
      {
        "lon": 0,
        "lat": 0
      }
    ]
  },
  "interiors": [
    {
      "points": [
        {
          "lon": 0,
          "lat": 0
        }
      ]
    }
  ]
}
```

Geo filter request

Matches coordinates inside the polygon, defined by `exterior` and `interiors`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exterior|[GeoLineString](#schemageolinestring)|true|none|Ordered sequence of GeoPoints representing the line|
|interiors|[[GeoLineString](#schemageolinestring)]|false|none|Interior lines (if present) bound holes within the surface each GeoLineString must consist of a minimum of 4 points, and the first and last points must be the same.|

<h2 id="tocS_GeoLineString">GeoLineString</h2>
<!-- backwards compatibility -->
<a id="schemageolinestring"></a>
<a id="schema_GeoLineString"></a>
<a id="tocSgeolinestring"></a>
<a id="tocsgeolinestring"></a>

```json
{
  "points": [
    {
      "lon": 0,
      "lat": 0
    }
  ]
}
```

Ordered sequence of GeoPoints representing the line

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|[[GeoPoint](#schemageopoint)]|true|none|none|

<h2 id="tocS_ValuesCount">ValuesCount</h2>
<!-- backwards compatibility -->
<a id="schemavaluescount"></a>
<a id="schema_ValuesCount"></a>
<a id="tocSvaluescount"></a>
<a id="tocsvaluescount"></a>

```json
{
  "lt": 0,
  "gt": 0,
  "gte": 0,
  "lte": 0
}
```

Values count filter request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lt|integer(uint) \| null|false|none|point.key.length() < values_count.lt|
|gt|integer(uint) \| null|false|none|point.key.length() > values_count.gt|
|gte|integer(uint) \| null|false|none|point.key.length() >= values_count.gte|
|lte|integer(uint) \| null|false|none|point.key.length() <= values_count.lte|

<h2 id="tocS_IsEmptyCondition">IsEmptyCondition</h2>
<!-- backwards compatibility -->
<a id="schemaisemptycondition"></a>
<a id="schema_IsEmptyCondition"></a>
<a id="tocSisemptycondition"></a>
<a id="tocsisemptycondition"></a>

```json
{
  "is_empty": {
    "key": "string"
  }
}
```

Select points with empty payload for a specified field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_empty|[PayloadField](#schemapayloadfield)|true|none|Payload field|

<h2 id="tocS_PayloadField">PayloadField</h2>
<!-- backwards compatibility -->
<a id="schemapayloadfield"></a>
<a id="schema_PayloadField"></a>
<a id="tocSpayloadfield"></a>
<a id="tocspayloadfield"></a>

```json
{
  "key": "string"
}
```

Payload field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Payload field name|

<h2 id="tocS_IsNullCondition">IsNullCondition</h2>
<!-- backwards compatibility -->
<a id="schemaisnullcondition"></a>
<a id="schema_IsNullCondition"></a>
<a id="tocSisnullcondition"></a>
<a id="tocsisnullcondition"></a>

```json
{
  "is_null": {
    "key": "string"
  }
}
```

Select points with null payload for a specified field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_null|[PayloadField](#schemapayloadfield)|true|none|Payload field|

<h2 id="tocS_HasIdCondition">HasIdCondition</h2>
<!-- backwards compatibility -->
<a id="schemahasidcondition"></a>
<a id="schema_HasIdCondition"></a>
<a id="tocShasidcondition"></a>
<a id="tocshasidcondition"></a>

```json
{
  "has_id": [
    42
  ]
}
```

ID-based filtering condition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_id|[[ExtendedPointId](#schemaextendedpointid)]|true|none|none|

<h2 id="tocS_HasVectorCondition">HasVectorCondition</h2>
<!-- backwards compatibility -->
<a id="schemahasvectorcondition"></a>
<a id="schema_HasVectorCondition"></a>
<a id="tocShasvectorcondition"></a>
<a id="tocshasvectorcondition"></a>

```json
{
  "has_vector": "string"
}
```

Filter points which have specific vector assigned

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_vector|string|true|none|none|

<h2 id="tocS_SliceCondition">SliceCondition</h2>
<!-- backwards compatibility -->
<a id="schemaslicecondition"></a>
<a id="schema_SliceCondition"></a>
<a id="tocSslicecondition"></a>
<a id="tocsslicecondition"></a>

```json
{
  "slice": {
    "total": 1,
    "index": 0
  }
}
```

Select points that fall into one of `total` disjoint deterministic slices of the id space, for parallel scans and reproducible sampling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slice|[Slice](#schemaslice)|true|none|One of `total` disjoint deterministic slices of the id space.<br><br>A point belongs to the slice iff `hash(id) % total == index`, where `hash` is SipHash-2-4 with a zero key over the canonical id bytes: 8 little-endian bytes for numeric ids, the 16 RFC 4122 bytes for UUIDs. For a fixed `total`, slices `0..total` are disjoint and together cover all points; membership is uniform regardless of the id scheme and stable across queries, segments, platforms and Qdrant versions.<br><br>Slices with different `total` values are correlated (same hash, no salt): e.g. slice `0` of `total: 4` is a strict subset of slice `0` of `total: 2`. This keeps a smaller sample contained in a larger one.|

<h2 id="tocS_Slice">Slice</h2>
<!-- backwards compatibility -->
<a id="schemaslice"></a>
<a id="schema_Slice"></a>
<a id="tocSslice"></a>
<a id="tocsslice"></a>

```json
{
  "total": 1,
  "index": 0
}
```

One of `total` disjoint deterministic slices of the id space.

A point belongs to the slice iff `hash(id) % total == index`, where `hash` is SipHash-2-4 with a zero key over the canonical id bytes: 8 little-endian bytes for numeric ids, the 16 RFC 4122 bytes for UUIDs. For a fixed `total`, slices `0..total` are disjoint and together cover all points; membership is uniform regardless of the id scheme and stable across queries, segments, platforms and Qdrant versions.

Slices with different `total` values are correlated (same hash, no salt): e.g. slice `0` of `total: 4` is a strict subset of slice `0` of `total: 2`. This keeps a smaller sample contained in a larger one.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(uint32)|true|none|Total number of disjoint slices the id space is split into|
|index|integer(uint32)|true|none|Which slice to select, must be in `0..total`|

<h2 id="tocS_NestedCondition">NestedCondition</h2>
<!-- backwards compatibility -->
<a id="schemanestedcondition"></a>
<a id="schema_NestedCondition"></a>
<a id="tocSnestedcondition"></a>
<a id="tocsnestedcondition"></a>

```json
{
  "nested": {
    "key": "string",
    "filter": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nested|[Nested](#schemanested)|true|none|Select points with payload for a specified nested field|

<h2 id="tocS_Nested">Nested</h2>
<!-- backwards compatibility -->
<a id="schemanested"></a>
<a id="schema_Nested"></a>
<a id="tocSnested"></a>
<a id="tocsnested"></a>

```json
{
  "key": "string",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  }
}
```

Select points with payload for a specified nested field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|filter|[Filter](#schemafilter)|true|none|none|

<h2 id="tocS_MinShould">MinShould</h2>
<!-- backwards compatibility -->
<a id="schemaminshould"></a>
<a id="schema_MinShould"></a>
<a id="tocSminshould"></a>
<a id="tocsminshould"></a>

```json
{
  "conditions": [
    {
      "key": "string",
      "match": {
        "value": "string"
      },
      "range": {
        "lt": 0,
        "gt": 0,
        "gte": 0,
        "lte": 0
      },
      "geo_bounding_box": {
        "top_left": {
          "lon": 0,
          "lat": 0
        },
        "bottom_right": {
          "lon": 0,
          "lat": 0
        }
      },
      "geo_radius": {
        "center": {
          "lon": 0,
          "lat": 0
        },
        "radius": 0
      },
      "geo_polygon": {
        "exterior": {
          "points": [
            {
              "lon": 0,
              "lat": 0
            }
          ]
        },
        "interiors": [
          {
            "points": [
              {
                "lon": 0,
                "lat": 0
              }
            ]
          }
        ]
      },
      "values_count": {
        "lt": 0,
        "gt": 0,
        "gte": 0,
        "lte": 0
      },
      "is_empty": true,
      "is_null": true
    }
  ],
  "min_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[Condition](#schemacondition)]|true|none|none|
|min_count|integer(uint)|true|none|none|

<h2 id="tocS_OrderByInterface">OrderByInterface</h2>
<!-- backwards compatibility -->
<a id="schemaorderbyinterface"></a>
<a id="schema_OrderByInterface"></a>
<a id="tocSorderbyinterface"></a>
<a id="tocsorderbyinterface"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|[OrderBy](#schemaorderby)|false|none|none|

<h2 id="tocS_OrderBy">OrderBy</h2>
<!-- backwards compatibility -->
<a id="schemaorderby"></a>
<a id="schema_OrderBy"></a>
<a id="tocSorderby"></a>
<a id="tocsorderby"></a>

```json
{
  "key": "string",
  "direction": "asc",
  "start_from": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Payload key to order by|
|direction|[Direction](#schemadirection) \| object \| null|false|none|Direction of ordering: `asc` or `desc`. Default is ascending.|
|start_from|[StartFrom](#schemastartfrom) \| object \| null|false|none|Which payload value to start scrolling from. Default is the lowest value for `asc` and the highest for `desc`|

<h2 id="tocS_Direction">Direction</h2>
<!-- backwards compatibility -->
<a id="schemadirection"></a>
<a id="schema_Direction"></a>
<a id="tocSdirection"></a>
<a id="tocsdirection"></a>

```json
"asc"
```

<h2 id="tocS_StartFrom">StartFrom</h2>
<!-- backwards compatibility -->
<a id="schemastartfrom"></a>
<a id="schema_StartFrom"></a>
<a id="tocSstartfrom"></a>
<a id="tocsstartfrom"></a>

```json
0
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|integer(int64)|false|none|none|
|*anyOf*|number(double)|false|none|none|
|*anyOf*|string(date-time)|false|none|none|

<h2 id="tocS_ScrollResult">ScrollResult</h2>
<!-- backwards compatibility -->
<a id="schemascrollresult"></a>
<a id="schema_ScrollResult"></a>
<a id="tocSscrollresult"></a>
<a id="tocsscrollresult"></a>

```json
{
  "points": [
    {
      "id": 40,
      "payload": {
        "city": "London",
        "color": "green"
      },
      "vector": [
        0.875,
        0.140625,
        0.897599995136261
      ],
      "shard_key": "region_1"
    },
    {
      "id": 41,
      "payload": {
        "city": "Paris",
        "color": "red"
      },
      "vector": [
        0.75,
        0.640625,
        0.8945000171661377
      ],
      "shard_key": "region_1"
    }
  ],
  "next_page_offset": 42
}
```

Result of the points read request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|[[Record](#schemarecord)]|true|none|List of retrieved points|
|next_page_offset|[ExtendedPointId](#schemaextendedpointid) \| object \| null|false|none|Offset which should be used to retrieve a next page result|

<h2 id="tocS_CreateCollection">CreateCollection</h2>
<!-- backwards compatibility -->
<a id="schemacreatecollection"></a>
<a id="schema_CreateCollection"></a>
<a id="tocScreatecollection"></a>
<a id="tocscreatecollection"></a>

```json
{
  "vectors": {
    "size": 1,
    "distance": "Cosine",
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 10,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "quantization_config": {
      "scalar": {
        "type": "int8",
        "quantile": 0.5,
        "always_ram": true,
        "memory": "cold"
      }
    },
    "on_disk": true,
    "memory": "cold",
    "datatype": "float32",
    "multivector_config": {
      "comparator": "max_sim"
    }
  },
  "shard_number": null,
  "sharding_method": null,
  "replication_factor": null,
  "write_consistency_factor": null,
  "on_disk_payload": null,
  "payload": null,
  "id_tracker": null,
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 10,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "wal_config": {
    "wal_capacity_mb": 1,
    "wal_segments_ahead": 0,
    "wal_retain_closed": 0
  },
  "optimizers_config": {
    "deleted_threshold": 0,
    "vacuum_min_vector_number": 100,
    "default_segment_number": 0,
    "max_segment_size": 1,
    "memmap_threshold": 0,
    "indexing_threshold": 0,
    "flush_interval_sec": 0,
    "max_optimization_threads": "auto",
    "prevent_unoptimized": null
  },
  "quantization_config": null,
  "sparse_vectors": {
    "property1": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    },
    "property2": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    }
  },
  "strict_mode_config": {
    "enabled": true,
    "max_query_limit": 1,
    "max_timeout": 1,
    "unindexed_filtering_retrieve": true,
    "unindexed_filtering_update": true,
    "search_max_hnsw_ef": 0,
    "search_allow_exact": true,
    "search_max_oversampling": 0,
    "upsert_max_batchsize": 0,
    "search_max_batchsize": 0,
    "max_collection_vector_size_bytes": 0,
    "read_rate_limit": 1,
    "write_rate_limit": 1,
    "max_collection_payload_size_bytes": 0,
    "max_points_count": 1,
    "filter_max_conditions": 0,
    "condition_max_size": 0,
    "multivector_config": {
      "property1": {
        "max_vectors": 1
      },
      "property2": {
        "max_vectors": 1
      }
    },
    "sparse_config": {
      "property1": {
        "max_length": 1
      },
      "property2": {
        "max_length": 1
      }
    },
    "max_payload_index_count": 0,
    "max_resident_memory_percent": 1
  },
  "metadata": {
    "city": "London",
    "color": "green"
  }
}
```

Operation for creating new collection and (optionally) specify index params

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vectors|[VectorsConfig](#schemavectorsconfig)|false|none|Vector params separator for single and multiple vector modes Single mode:<br><br>{ "size": 128, "distance": "Cosine" }<br><br>or multiple mode:<br><br>{ "default": { "size": 128, "distance": "Cosine" } }|
|shard_number|integer(uint32) \| null|false|none|For auto sharding: Number of shards in collection. - If not specified, selected automatically - Minimum is 1<br><br>For custom sharding: Number of shards in collection per shard group. - Default is 1, meaning that each shard key will be mapped to a single shard - Minimum is 1|
|sharding_method|[ShardingMethod](#schemashardingmethod) \| object \| null|false|none|Sharding method Default is Auto - points are distributed across all available shards Custom - points are distributed across shards according to shard key|
|replication_factor|integer(uint32) \| null|false|none|Number of shards replicas. Default is 1 Minimum is 1|
|write_consistency_factor|integer(uint32) \| null|false|none|Defines how many replicas should apply the operation for us to consider it successful. Increasing this number will make the collection more resilient to inconsistencies, but will also make it fail if not enough replicas are available. Does not have any performance impact.|
|on_disk_payload|boolean \| null|false|none|**Deprecated.** Deprecated: use `payload.memory` instead. If true - point's payload will not be stored in memory. It will be read from the disk every time it is requested. This setting saves RAM by (slightly) increasing the response time. Note: those payload values that are involved in filtering and are indexed - remain in RAM.<br><br>Default: true|
|payload|[PayloadStorageParams](#schemapayloadstorageparams) \| object \| null|false|none|Configuration of the payload storage|
|id_tracker|[IdTrackerParams](#schemaidtrackerparams) \| object \| null|false|none|Configuration of the point id tracker|
|hnsw_config|[HnswConfigDiff](#schemahnswconfigdiff) \| object \| null|false|none|Custom params for HNSW index. If none - values from service configuration file are used.|
|wal_config|[WalConfigDiff](#schemawalconfigdiff) \| object \| null|false|none|Custom params for WAL. If none - values from service configuration file are used.|
|optimizers_config|[OptimizersConfigDiff](#schemaoptimizersconfigdiff) \| object \| null|false|none|Custom params for Optimizers.  If none - values from service configuration file are used.|
|quantization_config|[QuantizationConfig](#schemaquantizationconfig) \| object \| null|false|none|Quantization parameters. If none - quantization is disabled.|
|sparse_vectors|object \| null|false|none|Sparse vector data config.|
|strict_mode_config|[StrictModeConfig](#schemastrictmodeconfig) \| object \| null|false|none|Strict-mode config.|
|metadata|[Payload](#schemapayload) \| object \| null|false|none|Arbitrary JSON metadata for the collection This can be used to store application-specific information such as creation time, migration data, inference model info, etc.|

<h2 id="tocS_WalConfigDiff">WalConfigDiff</h2>
<!-- backwards compatibility -->
<a id="schemawalconfigdiff"></a>
<a id="schema_WalConfigDiff"></a>
<a id="tocSwalconfigdiff"></a>
<a id="tocswalconfigdiff"></a>

```json
{
  "wal_capacity_mb": 1,
  "wal_segments_ahead": 0,
  "wal_retain_closed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wal_capacity_mb|integer(uint) \| null|false|none|Size of a single WAL segment in MB|
|wal_segments_ahead|integer(uint) \| null|false|none|Number of WAL segments to create ahead of actually used ones|
|wal_retain_closed|integer(uint) \| null|false|none|Number of closed WAL segments to retain|

<h2 id="tocS_OptimizersConfigDiff">OptimizersConfigDiff</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizersconfigdiff"></a>
<a id="schema_OptimizersConfigDiff"></a>
<a id="tocSoptimizersconfigdiff"></a>
<a id="tocsoptimizersconfigdiff"></a>

```json
{
  "deleted_threshold": 0,
  "vacuum_min_vector_number": 100,
  "default_segment_number": 0,
  "max_segment_size": 1,
  "memmap_threshold": 0,
  "indexing_threshold": 0,
  "flush_interval_sec": 0,
  "max_optimization_threads": "auto",
  "prevent_unoptimized": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted_threshold|number(double) \| null|false|none|The minimal fraction of deleted vectors in a segment, required to perform segment optimization|
|vacuum_min_vector_number|integer(uint) \| null|false|none|The minimal number of vectors in a segment, required to perform segment optimization|
|default_segment_number|integer(uint) \| null|false|none|Target amount of segments optimizer will try to keep. Real amount of segments may vary depending on multiple parameters: - Amount of stored points - Current write RPS<br><br>It is recommended to select default number of segments as a factor of the number of search threads, so that each segment would be handled evenly by one of the threads If `default_segment_number = 0`, will be automatically selected by the number of available CPUs|
|max_segment_size|integer(uint) \| null|false|none|Do not create segments larger than this size (in kilobytes). Large segments might require disproportionately long indexation times, therefore it makes sense to limit the size of segments.<br><br>If indexation speed have more priority for your - make this parameter lower. If search speed is more important - make this parameter higher. Note: 1Kb = 1 vector of size 256|
|memmap_threshold|integer(uint) \| null|false|none|**Deprecated.** Maximum size (in kilobytes) of vectors to store in-memory per segment. Segments larger than this threshold will be stored as read-only memmapped file.<br><br>Memmap storage is disabled by default, to enable it, set this threshold to a reasonable value.<br><br>To disable memmap storage, set this to `0`.<br><br>Note: 1Kb = 1 vector of size 256<br><br>Deprecated since Qdrant 1.15.0|
|indexing_threshold|integer(uint) \| null|false|none|Maximum size (in kilobytes) of vectors allowed for plain index, exceeding this threshold will enable vector indexing<br><br>Default value is 20,000, based on <https://github.com/google-research/google-research/blob/master/scann/docs/algorithms.md>.<br><br>To disable vector indexing, set to `0`.<br><br>Note: 1kB = 1 vector of size 256.|
|flush_interval_sec|integer(uint64) \| null|false|none|Minimum interval between forced flushes.|
|max_optimization_threads|[MaxOptimizationThreads](#schemamaxoptimizationthreads) \| object \| null|false|none|Max number of threads (jobs) for running optimizations per shard. Note: each optimization job will also use `max_indexing_threads` threads by itself for index building. If "auto" - have no limit and choose dynamically to saturate CPU. If 0 - no optimization threads, optimizations will be disabled.|
|prevent_unoptimized|boolean \| null|false|none|If enabled, the service will try to prevent the creation of large unoptimized segments. When enabled, new points written to segments larger than the indexing threshold are stored as "deferred points": they are persisted in the WAL and segments, but excluded from read/search results until the corresponding segments are optimized (e.g. indexed, quantized, or moved to mmap storage). Update requests with `wait=true` will only return after the deferred points become visible, which may significantly increase the perceived latency between submitting an update and its completion. Update requests with `wait=false` are not affected. Default is disabled.|

<h2 id="tocS_MaxOptimizationThreads">MaxOptimizationThreads</h2>
<!-- backwards compatibility -->
<a id="schemamaxoptimizationthreads"></a>
<a id="schema_MaxOptimizationThreads"></a>
<a id="tocSmaxoptimizationthreads"></a>
<a id="tocsmaxoptimizationthreads"></a>

```json
"auto"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[MaxOptimizationThreadsSetting](#schemamaxoptimizationthreadssetting)|false|none|none|
|*anyOf*|integer(uint)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anyOf*|auto|

<h2 id="tocS_MaxOptimizationThreadsSetting">MaxOptimizationThreadsSetting</h2>
<!-- backwards compatibility -->
<a id="schemamaxoptimizationthreadssetting"></a>
<a id="schema_MaxOptimizationThreadsSetting"></a>
<a id="tocSmaxoptimizationthreadssetting"></a>
<a id="tocsmaxoptimizationthreadssetting"></a>

```json
"auto"
```

<h2 id="tocS_StrictModeConfig">StrictModeConfig</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodeconfig"></a>
<a id="schema_StrictModeConfig"></a>
<a id="tocSstrictmodeconfig"></a>
<a id="tocsstrictmodeconfig"></a>

```json
{
  "enabled": true,
  "max_query_limit": 1,
  "max_timeout": 1,
  "unindexed_filtering_retrieve": true,
  "unindexed_filtering_update": true,
  "search_max_hnsw_ef": 0,
  "search_allow_exact": true,
  "search_max_oversampling": 0,
  "upsert_max_batchsize": 0,
  "search_max_batchsize": 0,
  "max_collection_vector_size_bytes": 0,
  "read_rate_limit": 1,
  "write_rate_limit": 1,
  "max_collection_payload_size_bytes": 0,
  "max_points_count": 1,
  "filter_max_conditions": 0,
  "condition_max_size": 0,
  "multivector_config": {
    "property1": {
      "max_vectors": 1
    },
    "property2": {
      "max_vectors": 1
    }
  },
  "sparse_config": {
    "property1": {
      "max_length": 1
    },
    "property2": {
      "max_length": 1
    }
  },
  "max_payload_index_count": 0,
  "max_resident_memory_percent": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean \| null|false|none|Whether strict mode is enabled for a collection or not.|
|max_query_limit|integer(uint) \| null|false|none|Max allowed `limit` parameter for all APIs that don't have their own max limit.|
|max_timeout|integer(uint) \| null|false|none|Max allowed `timeout` parameter.|
|unindexed_filtering_retrieve|boolean \| null|false|none|Allow usage of unindexed fields in retrieval based (e.g. search) filters.|
|unindexed_filtering_update|boolean \| null|false|none|Allow usage of unindexed fields in filtered updates (e.g. delete by payload).|
|search_max_hnsw_ef|integer(uint) \| null|false|none|Max HNSW ef value allowed in search parameters.|
|search_allow_exact|boolean \| null|false|none|Whether exact search is allowed.|
|search_max_oversampling|number(double) \| null|false|none|Max oversampling value allowed in search.|
|upsert_max_batchsize|integer(uint) \| null|false|none|Max batchsize when upserting|
|search_max_batchsize|integer(uint) \| null|false|none|Max batchsize when searching|
|max_collection_vector_size_bytes|integer(uint) \| null|false|none|Max size of a collections vector storage in bytes, ignoring replicas.|
|read_rate_limit|integer(uint) \| null|false|none|Max number of read operations per minute per replica|
|write_rate_limit|integer(uint) \| null|false|none|Max number of write operations per minute per replica|
|max_collection_payload_size_bytes|integer(uint) \| null|false|none|Max size of a collections payload storage in bytes|
|max_points_count|integer(uint) \| null|false|none|Max number of points estimated in a collection|
|filter_max_conditions|integer(uint) \| null|false|none|Max conditions a filter can have.|
|condition_max_size|integer(uint) \| null|false|none|Max size of a condition, eg. items in `MatchAny`.|
|multivector_config|[StrictModeMultivectorConfig](#schemastrictmodemultivectorconfig) \| object \| null|false|none|Multivector strict mode configuration|
|sparse_config|[StrictModeSparseConfig](#schemastrictmodesparseconfig) \| object \| null|false|none|Sparse vector strict mode configuration|
|max_payload_index_count|integer(uint) \| null|false|none|Max number of payload indexes in a collection|
|max_resident_memory_percent|integer(uint8) \| null|false|none|**Deprecated.** Deprecated: use the node-wide quota config (`PUT /quotas`) instead, which caps the same resource for every collection. Scheduled for removal in 1.21.<br><br>Reject memory-consuming update operations (e.g. upsert, set payload) when the process resident memory exceeds this percentage of total system memory (or cgroup limit). Value in [1, 100]. Memory is a node-wide resource, so this only tightens the quota for one collection; it cannot lift it. Delete operations are not affected, so callers can still free memory.|

<h2 id="tocS_StrictModeMultivectorConfig">StrictModeMultivectorConfig</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodemultivectorconfig"></a>
<a id="schema_StrictModeMultivectorConfig"></a>
<a id="tocSstrictmodemultivectorconfig"></a>
<a id="tocsstrictmodemultivectorconfig"></a>

```json
{
  "property1": {
    "max_vectors": 1
  },
  "property2": {
    "max_vectors": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StrictModeMultivector](#schemastrictmodemultivector)|false|none|none|

<h2 id="tocS_StrictModeMultivector">StrictModeMultivector</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodemultivector"></a>
<a id="schema_StrictModeMultivector"></a>
<a id="tocSstrictmodemultivector"></a>
<a id="tocsstrictmodemultivector"></a>

```json
{
  "max_vectors": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_vectors|integer(uint) \| null|false|none|Max number of vectors in a multivector|

<h2 id="tocS_StrictModeSparseConfig">StrictModeSparseConfig</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodesparseconfig"></a>
<a id="schema_StrictModeSparseConfig"></a>
<a id="tocSstrictmodesparseconfig"></a>
<a id="tocsstrictmodesparseconfig"></a>

```json
{
  "property1": {
    "max_length": 1
  },
  "property2": {
    "max_length": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StrictModeSparse](#schemastrictmodesparse)|false|none|none|

<h2 id="tocS_StrictModeSparse">StrictModeSparse</h2>
<!-- backwards compatibility -->
<a id="schemastrictmodesparse"></a>
<a id="schema_StrictModeSparse"></a>
<a id="tocSstrictmodesparse"></a>
<a id="tocsstrictmodesparse"></a>

```json
{
  "max_length": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_length|integer(uint) \| null|false|none|Max length of sparse vector|

<h2 id="tocS_UpdateCollection">UpdateCollection</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecollection"></a>
<a id="schema_UpdateCollection"></a>
<a id="tocSupdatecollection"></a>
<a id="tocsupdatecollection"></a>

```json
{
  "vectors": {
    "property1": {
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 10,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "quantization_config": {
        "scalar": {
          "type": "int8",
          "quantile": 0.5,
          "always_ram": true,
          "memory": "cold"
        }
      },
      "on_disk": true,
      "memory": "cold"
    },
    "property2": {
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 10,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "quantization_config": {
        "scalar": {
          "type": "int8",
          "quantile": 0.5,
          "always_ram": true,
          "memory": "cold"
        }
      },
      "on_disk": true,
      "memory": "cold"
    }
  },
  "optimizers_config": {
    "deleted_threshold": 0,
    "vacuum_min_vector_number": 100,
    "default_segment_number": 0,
    "max_segment_size": 1,
    "memmap_threshold": 0,
    "indexing_threshold": 0,
    "flush_interval_sec": 0,
    "max_optimization_threads": "auto",
    "prevent_unoptimized": null
  },
  "params": {
    "replication_factor": 1,
    "write_consistency_factor": 1,
    "read_fan_out_factor": 0,
    "read_fan_out_delay_ms": 0,
    "on_disk_payload": null,
    "payload": {
      "memory": "cold"
    },
    "id_tracker": {
      "memory": "cold"
    }
  },
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 10,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "quantization_config": null,
  "sparse_vectors": {
    "property1": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    },
    "property2": {
      "index": {
        "full_scan_threshold": 0,
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32"
      },
      "modifier": "none"
    }
  },
  "strict_mode_config": {
    "enabled": true,
    "max_query_limit": 1,
    "max_timeout": 1,
    "unindexed_filtering_retrieve": true,
    "unindexed_filtering_update": true,
    "search_max_hnsw_ef": 0,
    "search_allow_exact": true,
    "search_max_oversampling": 0,
    "upsert_max_batchsize": 0,
    "search_max_batchsize": 0,
    "max_collection_vector_size_bytes": 0,
    "read_rate_limit": 1,
    "write_rate_limit": 1,
    "max_collection_payload_size_bytes": 0,
    "max_points_count": 1,
    "filter_max_conditions": 0,
    "condition_max_size": 0,
    "multivector_config": {
      "property1": {
        "max_vectors": 1
      },
      "property2": {
        "max_vectors": 1
      }
    },
    "sparse_config": {
      "property1": {
        "max_length": 1
      },
      "property2": {
        "max_length": 1
      }
    },
    "max_payload_index_count": 0,
    "max_resident_memory_percent": 1
  },
  "metadata": {
    "city": "London",
    "color": "green"
  }
}
```

Operation for updating parameters of the existing collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vectors|[VectorsConfigDiff](#schemavectorsconfigdiff) \| object \| null|false|none|Map of vector data parameters to update for each named vector. To update parameters in a collection having a single unnamed vector, use an empty string as name.|
|optimizers_config|[OptimizersConfigDiff](#schemaoptimizersconfigdiff) \| object \| null|false|none|Custom params for Optimizers.  If none - it is left unchanged. This operation is blocking, it will only proceed once all current optimizations are complete|
|params|[CollectionParamsDiff](#schemacollectionparamsdiff) \| object \| null|false|none|Collection base params. If none - it is left unchanged.|
|hnsw_config|[HnswConfigDiff](#schemahnswconfigdiff) \| object \| null|false|none|HNSW parameters to update for the collection index. If none - it is left unchanged.|
|quantization_config|[QuantizationConfigDiff](#schemaquantizationconfigdiff) \| object \| null|false|none|Quantization parameters to update. If none - it is left unchanged.|
|sparse_vectors|[SparseVectorsConfig](#schemasparsevectorsconfig) \| object \| null|false|none|Map of sparse vector data parameters to update for each sparse vector.|
|strict_mode_config|[StrictModeConfig](#schemastrictmodeconfig) \| object \| null|false|none|none|
|metadata|[Payload](#schemapayload) \| object \| null|false|none|Metadata to update for the collection. If provided, this will merge with existing metadata. Individual keys can be removed by setting their value to `null`.|

<h2 id="tocS_VectorsConfigDiff">VectorsConfigDiff</h2>
<!-- backwards compatibility -->
<a id="schemavectorsconfigdiff"></a>
<a id="schema_VectorsConfigDiff"></a>
<a id="tocSvectorsconfigdiff"></a>
<a id="tocsvectorsconfigdiff"></a>

```json
{
  "property1": {
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 10,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "quantization_config": {
      "scalar": {
        "type": "int8",
        "quantile": 0.5,
        "always_ram": true,
        "memory": "cold"
      }
    },
    "on_disk": true,
    "memory": "cold"
  },
  "property2": {
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 10,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "quantization_config": {
      "scalar": {
        "type": "int8",
        "quantile": 0.5,
        "always_ram": true,
        "memory": "cold"
      }
    },
    "on_disk": true,
    "memory": "cold"
  }
}
```

Vector update params for multiple vectors

{ "vector_name": { "hnsw_config": { "m": 8 } } }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[VectorParamsDiff](#schemavectorparamsdiff)|false|none|none|

<h2 id="tocS_VectorParamsDiff">VectorParamsDiff</h2>
<!-- backwards compatibility -->
<a id="schemavectorparamsdiff"></a>
<a id="schema_VectorParamsDiff"></a>
<a id="tocSvectorparamsdiff"></a>
<a id="tocsvectorparamsdiff"></a>

```json
{
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 10,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "quantization_config": {
    "scalar": {
      "type": "int8",
      "quantile": 0.5,
      "always_ram": true,
      "memory": "cold"
    }
  },
  "on_disk": true,
  "memory": "cold"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hnsw_config|[HnswConfigDiff](#schemahnswconfigdiff) \| object \| null|false|none|Update params for HNSW index. If empty object - it will be unset.|
|quantization_config|[QuantizationConfigDiff](#schemaquantizationconfigdiff) \| object \| null|false|none|Update params for quantization. If none - it is left unchanged.|
|on_disk|boolean \| null|false|none|**Deprecated.** Deprecated: use `memory` instead. If true, vectors are served from disk, improving RAM usage at the cost of latency|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the original vector storage. Overrides the deprecated `on_disk` flag if both are set. `pinned` is not supported for dense vector storage.|

<h2 id="tocS_QuantizationConfigDiff">QuantizationConfigDiff</h2>
<!-- backwards compatibility -->
<a id="schemaquantizationconfigdiff"></a>
<a id="schema_QuantizationConfigDiff"></a>
<a id="tocSquantizationconfigdiff"></a>
<a id="tocsquantizationconfigdiff"></a>

```json
{
  "scalar": {
    "type": "int8",
    "quantile": 0.5,
    "always_ram": true,
    "memory": "cold"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ScalarQuantization](#schemascalarquantization)|false|none|none|
|*anyOf*|[ProductQuantization](#schemaproductquantization)|false|none|none|
|*anyOf*|[BinaryQuantization](#schemabinaryquantization)|false|none|none|
|*anyOf*|[TurboQuantization](#schematurboquantization)|false|none|none|
|*anyOf*|[Disabled](#schemadisabled)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anyOf*|Disabled|

<h2 id="tocS_Disabled">Disabled</h2>
<!-- backwards compatibility -->
<a id="schemadisabled"></a>
<a id="schema_Disabled"></a>
<a id="tocSdisabled"></a>
<a id="tocsdisabled"></a>

```json
"Disabled"
```

<h2 id="tocS_CollectionParamsDiff">CollectionParamsDiff</h2>
<!-- backwards compatibility -->
<a id="schemacollectionparamsdiff"></a>
<a id="schema_CollectionParamsDiff"></a>
<a id="tocScollectionparamsdiff"></a>
<a id="tocscollectionparamsdiff"></a>

```json
{
  "replication_factor": 1,
  "write_consistency_factor": 1,
  "read_fan_out_factor": 0,
  "read_fan_out_delay_ms": 0,
  "on_disk_payload": null,
  "payload": {
    "memory": "cold"
  },
  "id_tracker": {
    "memory": "cold"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replication_factor|integer(uint32) \| null|false|none|Number of replicas for each shard|
|write_consistency_factor|integer(uint32) \| null|false|none|Minimal number successful responses from replicas to consider operation successful|
|read_fan_out_factor|integer(uint32) \| null|false|none|Fan-out every read request to these many additional remote nodes (and return first available response)|
|read_fan_out_delay_ms|integer(uint64) \| null|false|none|Delay in milliseconds before sending read requests to remote nodes|
|on_disk_payload|boolean \| null|false|none|**Deprecated.** Deprecated: use `payload.memory` instead. If true - point's payload will not be stored in memory. It will be read from the disk every time it is requested. This setting saves RAM by (slightly) increasing the response time. Note: those payload values that are involved in filtering and are indexed - remain in RAM.|
|payload|[PayloadStorageParams](#schemapayloadstorageparams) \| object \| null|false|none|Update params of the payload storage. If none - it is left unchanged.|
|id_tracker|[IdTrackerParams](#schemaidtrackerparams) \| object \| null|false|none|Update params of the point id tracker. If none - it is left unchanged.|

<h2 id="tocS_SparseVectorsConfig">SparseVectorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemasparsevectorsconfig"></a>
<a id="schema_SparseVectorsConfig"></a>
<a id="tocSsparsevectorsconfig"></a>
<a id="tocssparsevectorsconfig"></a>

```json
{
  "property1": {
    "index": {
      "full_scan_threshold": 0,
      "on_disk": true,
      "memory": "cold",
      "datatype": "float32"
    },
    "modifier": "none"
  },
  "property2": {
    "index": {
      "full_scan_threshold": 0,
      "on_disk": true,
      "memory": "cold",
      "datatype": "float32"
    },
    "modifier": "none"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SparseVectorParams](#schemasparsevectorparams)|false|none|Params of single sparse vector data storage|

<h2 id="tocS_ChangeAliasesOperation">ChangeAliasesOperation</h2>
<!-- backwards compatibility -->
<a id="schemachangealiasesoperation"></a>
<a id="schema_ChangeAliasesOperation"></a>
<a id="tocSchangealiasesoperation"></a>
<a id="tocschangealiasesoperation"></a>

```json
{
  "actions": [
    {
      "create_alias": {
        "collection_name": "string",
        "alias_name": "string"
      }
    }
  ]
}
```

Operation for performing changes of collection aliases. Alias changes are atomic, meaning that no collection modifications can happen between alias operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[AliasOperations](#schemaaliasoperations)]|true|none|none|

<h2 id="tocS_AliasOperations">AliasOperations</h2>
<!-- backwards compatibility -->
<a id="schemaaliasoperations"></a>
<a id="schema_AliasOperations"></a>
<a id="tocSaliasoperations"></a>
<a id="tocsaliasoperations"></a>

```json
{
  "create_alias": {
    "collection_name": "string",
    "alias_name": "string"
  }
}
```

Group of all the possible operations related to collection aliases

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[CreateAliasOperation](#schemacreatealiasoperation)|false|none|none|
|*anyOf*|[DeleteAliasOperation](#schemadeletealiasoperation)|false|none|Delete alias if exists|
|*anyOf*|[RenameAliasOperation](#schemarenamealiasoperation)|false|none|Change alias to a new one|

<h2 id="tocS_CreateAliasOperation">CreateAliasOperation</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasoperation"></a>
<a id="schema_CreateAliasOperation"></a>
<a id="tocScreatealiasoperation"></a>
<a id="tocscreatealiasoperation"></a>

```json
{
  "create_alias": {
    "collection_name": "string",
    "alias_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_alias|[CreateAlias](#schemacreatealias)|true|none|Create alternative name for a collection. Collection will be available under both names for search, retrieve,|

<h2 id="tocS_CreateAlias">CreateAlias</h2>
<!-- backwards compatibility -->
<a id="schemacreatealias"></a>
<a id="schema_CreateAlias"></a>
<a id="tocScreatealias"></a>
<a id="tocscreatealias"></a>

```json
{
  "collection_name": "string",
  "alias_name": "string"
}
```

Create alternative name for a collection. Collection will be available under both names for search, retrieve,

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_name|string|true|none|none|
|alias_name|string|true|none|none|

<h2 id="tocS_DeleteAliasOperation">DeleteAliasOperation</h2>
<!-- backwards compatibility -->
<a id="schemadeletealiasoperation"></a>
<a id="schema_DeleteAliasOperation"></a>
<a id="tocSdeletealiasoperation"></a>
<a id="tocsdeletealiasoperation"></a>

```json
{
  "delete_alias": {
    "alias_name": "string"
  }
}
```

Delete alias if exists

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete_alias|[DeleteAlias](#schemadeletealias)|true|none|Delete alias if exists|

<h2 id="tocS_DeleteAlias">DeleteAlias</h2>
<!-- backwards compatibility -->
<a id="schemadeletealias"></a>
<a id="schema_DeleteAlias"></a>
<a id="tocSdeletealias"></a>
<a id="tocsdeletealias"></a>

```json
{
  "alias_name": "string"
}
```

Delete alias if exists

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias_name|string|true|none|none|

<h2 id="tocS_RenameAliasOperation">RenameAliasOperation</h2>
<!-- backwards compatibility -->
<a id="schemarenamealiasoperation"></a>
<a id="schema_RenameAliasOperation"></a>
<a id="tocSrenamealiasoperation"></a>
<a id="tocsrenamealiasoperation"></a>

```json
{
  "rename_alias": {
    "old_alias_name": "string",
    "new_alias_name": "string"
  }
}
```

Change alias to a new one

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rename_alias|[RenameAlias](#schemarenamealias)|true|none|Change alias to a new one|

<h2 id="tocS_RenameAlias">RenameAlias</h2>
<!-- backwards compatibility -->
<a id="schemarenamealias"></a>
<a id="schema_RenameAlias"></a>
<a id="tocSrenamealias"></a>
<a id="tocsrenamealias"></a>

```json
{
  "old_alias_name": "string",
  "new_alias_name": "string"
}
```

Change alias to a new one

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|old_alias_name|string|true|none|none|
|new_alias_name|string|true|none|none|

<h2 id="tocS_CreateFieldIndex">CreateFieldIndex</h2>
<!-- backwards compatibility -->
<a id="schemacreatefieldindex"></a>
<a id="schema_CreateFieldIndex"></a>
<a id="tocScreatefieldindex"></a>
<a id="tocscreatefieldindex"></a>

```json
{
  "field_name": "string",
  "field_schema": "keyword"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_name|string|true|none|none|
|field_schema|[PayloadFieldSchema](#schemapayloadfieldschema) \| object \| null|false|none|none|

<h2 id="tocS_PayloadFieldSchema">PayloadFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemapayloadfieldschema"></a>
<a id="schema_PayloadFieldSchema"></a>
<a id="tocSpayloadfieldschema"></a>
<a id="tocspayloadfieldschema"></a>

```json
"keyword"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[PayloadSchemaType](#schemapayloadschematype)|false|none|All possible names of payload types|
|*anyOf*|[PayloadSchemaParams](#schemapayloadschemaparams)|false|none|Payload type with parameters|

#### Enumerated Values

|Property|Value|
|---|---|
|*anyOf*|keyword|
|*anyOf*|integer|
|*anyOf*|float|
|*anyOf*|geo|
|*anyOf*|text|
|*anyOf*|bool|
|*anyOf*|datetime|
|*anyOf*|uuid|

<h2 id="tocS_PointsSelector">PointsSelector</h2>
<!-- backwards compatibility -->
<a id="schemapointsselector"></a>
<a id="schema_PointsSelector"></a>
<a id="tocSpointsselector"></a>
<a id="tocspointsselector"></a>

```json
{
  "points": [
    42
  ],
  "shard_key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[PointIdsList](#schemapointidslist)|false|none|none|
|*anyOf*|[FilterSelector](#schemafilterselector)|false|none|none|

<h2 id="tocS_PointIdsList">PointIdsList</h2>
<!-- backwards compatibility -->
<a id="schemapointidslist"></a>
<a id="schema_PointIdsList"></a>
<a id="tocSpointidslist"></a>
<a id="tocspointidslist"></a>

```json
{
  "points": [
    42
  ],
  "shard_key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|[[ExtendedPointId](#schemaextendedpointid)]|true|none|none|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|

<h2 id="tocS_FilterSelector">FilterSelector</h2>
<!-- backwards compatibility -->
<a id="schemafilterselector"></a>
<a id="schema_FilterSelector"></a>
<a id="tocSfilterselector"></a>
<a id="tocsfilterselector"></a>

```json
{
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "shard_key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Filter](#schemafilter)|true|none|none|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|

<h2 id="tocS_PointInsertOperations">PointInsertOperations</h2>
<!-- backwards compatibility -->
<a id="schemapointinsertoperations"></a>
<a id="schema_PointInsertOperations"></a>
<a id="tocSpointinsertoperations"></a>
<a id="tocspointinsertoperations"></a>

```json
{
  "batch": {
    "ids": [
      42
    ],
    "vectors": [
      [
        0
      ]
    ],
    "payloads": [
      {
        "city": "London",
        "color": "green"
      }
    ]
  },
  "shard_key": "region_1",
  "update_filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "update_mode": "upsert"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[PointsBatch](#schemapointsbatch)|false|none|none|
|*anyOf*|[PointsList](#schemapointslist)|false|none|none|

<h2 id="tocS_PointsBatch">PointsBatch</h2>
<!-- backwards compatibility -->
<a id="schemapointsbatch"></a>
<a id="schema_PointsBatch"></a>
<a id="tocSpointsbatch"></a>
<a id="tocspointsbatch"></a>

```json
{
  "batch": {
    "ids": [
      42
    ],
    "vectors": [
      [
        0
      ]
    ],
    "payloads": [
      {
        "city": "London",
        "color": "green"
      }
    ]
  },
  "shard_key": "region_1",
  "update_filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "update_mode": "upsert"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch|[Batch](#schemabatch)|true|none|none|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|
|update_filter|[Filter](#schemafilter) \| object \| null|false|none|Filter to apply when updating existing points. Only points matching this filter will be updated. Points that don't match will keep their current state. New points will be inserted regardless of the filter.|
|update_mode|[UpdateMode](#schemaupdatemode) \| object \| null|false|none|Mode of the upsert operation: insert_only, upsert (default), update_only|

<h2 id="tocS_Batch">Batch</h2>
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_Batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

```json
{
  "ids": [
    42
  ],
  "vectors": [
    [
      0
    ]
  ],
  "payloads": [
    {
      "city": "London",
      "color": "green"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[[ExtendedPointId](#schemaextendedpointid)]|true|none|none|
|vectors|[BatchVectorStruct](#schemabatchvectorstruct)|true|none|none|
|payloads|[[Payload](#schemapayload) \| object \| null]|false|none|none|

<h2 id="tocS_BatchVectorStruct">BatchVectorStruct</h2>
<!-- backwards compatibility -->
<a id="schemabatchvectorstruct"></a>
<a id="schema_BatchVectorStruct"></a>
<a id="tocSbatchvectorstruct"></a>
<a id="tocsbatchvectorstruct"></a>

```json
[
  [
    0
  ]
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[[number(float)]]|false|none|none|
|*anyOf*|[[[number(float)]]]|false|none|none|
|*anyOf*|object|false|none|none|
|**additionalProperties**|[[Vector](#schemavector)]|false|none|none|
|*anyOf*|[[Document](#schemadocument)]|false|none|none|
|*anyOf*|[[Image](#schemaimage)]|false|none|none|
|*anyOf*|[[InferenceObject](#schemainferenceobject)]|false|none|none|

<h2 id="tocS_Vector">Vector</h2>
<!-- backwards compatibility -->
<a id="schemavector"></a>
<a id="schema_Vector"></a>
<a id="tocSvector"></a>
<a id="tocsvector"></a>

```json
[
  0
]
```

Vector Data Vectors can be described directly with values Or specified with source "objects" for inference

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[number(float)]|false|none|none|
|*anyOf*|[SparseVector](#schemasparsevector)|false|none|Sparse vector structure|
|*anyOf*|[[number(float)]]|false|none|none|
|*anyOf*|[Document](#schemadocument)|false|none|WARN: Work-in-progress, unimplemented<br><br>Text document for embedding. Requires inference infrastructure, unimplemented.|
|*anyOf*|[Image](#schemaimage)|false|none|WARN: Work-in-progress, unimplemented<br><br>Image object for embedding. Requires inference infrastructure, unimplemented.|
|*anyOf*|[InferenceObject](#schemainferenceobject)|false|none|WARN: Work-in-progress, unimplemented<br><br>Custom object for embedding. Requires inference infrastructure, unimplemented.|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "text": "This is a document text",
  "model": "jinaai/jina-embeddings-v2-base-en",
  "options": {}
}
```

WARN: Work-in-progress, unimplemented

Text document for embedding. Requires inference infrastructure, unimplemented.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Text of the document. This field will be used as input for the embedding model.|
|model|string|true|none|Name of the model used to generate the vector. List of available models depends on a provider.|
|options|[DocumentOptions](#schemadocumentoptions) \| object \| null|false|none|Additional options for the model, will be passed to the inference service as-is. See model cards for available options.|

<h2 id="tocS_DocumentOptions">DocumentOptions</h2>
<!-- backwards compatibility -->
<a id="schemadocumentoptions"></a>
<a id="schema_DocumentOptions"></a>
<a id="tocSdocumentoptions"></a>
<a id="tocsdocumentoptions"></a>

```json
{}
```

Option variants for text documents. Ether general-purpose options or BM25-specific options. BM25-specific will only take effect if the `qdrant/bm25` is specified as a model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|*anyOf*|[Bm25Config](#schemabm25config)|false|none|Configuration of the local bm25 models.|

<h2 id="tocS_Bm25Config">Bm25Config</h2>
<!-- backwards compatibility -->
<a id="schemabm25config"></a>
<a id="schema_Bm25Config"></a>
<a id="tocSbm25config"></a>
<a id="tocsbm25config"></a>

```json
{
  "k": 1.2,
  "b": 0.75,
  "avg_len": 256,
  "tokenizer": "prefix",
  "language": "string",
  "lowercase": true,
  "ascii_folding": true,
  "stopwords": "arabic",
  "stemmer": {
    "type": "snowball",
    "language": "arabic"
  },
  "min_token_len": 0,
  "max_token_len": 0
}
```

Configuration of the local bm25 models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|k|number(double)|false|none|Controls term frequency saturation. Higher values mean term frequency has more impact. Default is 1.2|
|b|number(double)|false|none|Controls document length normalization. Ranges from 0 (no normalization) to 1 (full normalization). Higher values mean longer documents have less impact. Default is 0.75.|
|avg_len|number(double)|false|none|Expected average document length in the collection. Default is 256.|
|tokenizer|[TokenizerType](#schematokenizertype)|false|none|none|
|language|string \| null|false|none|Defines which language to use for text preprocessing. This parameter is used to construct default stopwords filter and stemmer. To disable language-specific processing, set `stemmer` to `{"type": "none"}` and configure an empty stopword set. The legacy `"language": "none"` hack is deprecated and may be rejected in a future release. If not specified, English is assumed.|
|lowercase|boolean \| null|false|none|Lowercase the text before tokenization. Default is `true`.|
|ascii_folding|boolean \| null|false|none|If true, normalize tokens by folding accented characters to ASCII (e.g., "ação" -> "acao"). Default is `false`.|
|stopwords|[StopwordsInterface](#schemastopwordsinterface) \| object \| null|false|none|Configuration of the stopwords filter. Supports list of pre-defined languages and custom stopwords. Default: initialized for specified `language` or English if not specified.|
|stemmer|[StemmingAlgorithm](#schemastemmingalgorithm) \| object \| null|false|none|Configuration of the stemmer. Processes tokens to their root form. Default: initialized Snowball stemmer for specified `language` or English if not specified.|
|min_token_len|integer(uint) \| null|false|none|Minimum token length to keep. If token is shorter than this, it will be discarded. Default is `None`, which means no minimum length.|
|max_token_len|integer(uint) \| null|false|none|Maximum token length to keep. If token is longer than this, it will be discarded. Default is `None`, which means no maximum length.|

#### Enumerated Values

|Property|Value|
|---|---|
|tokenizer|prefix|
|tokenizer|whitespace|
|tokenizer|word|
|tokenizer|multilingual|
|tokenizer|code|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "image": "https://example.com/image.jpg",
  "model": "Qdrant/clip-ViT-B-32-vision",
  "options": {}
}
```

WARN: Work-in-progress, unimplemented

Image object for embedding. Requires inference infrastructure, unimplemented.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|true|none|Image data: base64 encoded image or an URL|
|model|string|true|none|Name of the model used to generate the vector. List of available models depends on a provider.|
|options|object \| null|false|none|Parameters for the model Values of the parameters are model-specific|

<h2 id="tocS_InferenceObject">InferenceObject</h2>
<!-- backwards compatibility -->
<a id="schemainferenceobject"></a>
<a id="schema_InferenceObject"></a>
<a id="tocSinferenceobject"></a>
<a id="tocsinferenceobject"></a>

```json
{
  "object": null,
  "model": "jinaai/jina-embeddings-v2-base-en",
  "options": {}
}
```

WARN: Work-in-progress, unimplemented

Custom object for embedding. Requires inference infrastructure, unimplemented.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|Arbitrary data, used as input for the embedding model. Used if the model requires more than one input or a custom input.|
|model|string|true|none|Name of the model used to generate the vector. List of available models depends on a provider.|
|options|object \| null|false|none|Parameters for the model Values of the parameters are model-specific|

<h2 id="tocS_UpdateMode">UpdateMode</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemode"></a>
<a id="schema_UpdateMode"></a>
<a id="tocSupdatemode"></a>
<a id="tocsupdatemode"></a>

```json
"upsert"
```

Defines the mode of the upsert operation

* `upsert` - default mode, insert new points, update existing points * `insert_only` - only insert new points, do not update existing points * `update_only` - only update existing points, do not insert new points

<h2 id="tocS_PointsList">PointsList</h2>
<!-- backwards compatibility -->
<a id="schemapointslist"></a>
<a id="schema_PointsList"></a>
<a id="tocSpointslist"></a>
<a id="tocspointslist"></a>

```json
{
  "points": [
    {
      "id": 42,
      "vector": [
        0.875,
        0.140625,
        0.897599995136261
      ],
      "payload": {
        "city": "London",
        "color": "green"
      }
    }
  ],
  "shard_key": "region_1",
  "update_filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "update_mode": "upsert"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|[[PointStruct](#schemapointstruct)]|true|none|none|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|
|update_filter|[Filter](#schemafilter) \| object \| null|false|none|Filter to apply when updating existing points. Only points matching this filter will be updated. Points that don't match will keep their current state. New points will be inserted regardless of the filter.|
|update_mode|[UpdateMode](#schemaupdatemode) \| object \| null|false|none|Mode of the upsert operation: insert_only, upsert (default), update_only|

<h2 id="tocS_PointStruct">PointStruct</h2>
<!-- backwards compatibility -->
<a id="schemapointstruct"></a>
<a id="schema_PointStruct"></a>
<a id="tocSpointstruct"></a>
<a id="tocspointstruct"></a>

```json
{
  "id": 42,
  "vector": [
    0.875,
    0.140625,
    0.897599995136261
  ],
  "payload": {
    "city": "London",
    "color": "green"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ExtendedPointId](#schemaextendedpointid)|true|none|Type, used for specifying point ID in user interface|
|vector|[VectorStruct](#schemavectorstruct)|true|none|Full vector data per point separator with single and multiple vector modes|
|payload|[Payload](#schemapayload) \| object \| null|false|none|Payload values (optional)|

<h2 id="tocS_VectorStruct">VectorStruct</h2>
<!-- backwards compatibility -->
<a id="schemavectorstruct"></a>
<a id="schema_VectorStruct"></a>
<a id="tocSvectorstruct"></a>
<a id="tocsvectorstruct"></a>

```json
[
  0.875,
  0.140625,
  0.897599995136261
]
```

Full vector data per point separator with single and multiple vector modes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[number(float)]|false|none|none|
|*anyOf*|[[number(float)]]|false|none|none|
|*anyOf*|object|false|none|none|
|**additionalProperties**|[Vector](#schemavector)|false|none|Vector Data Vectors can be described directly with values Or specified with source "objects" for inference|
|*anyOf*|[Document](#schemadocument)|false|none|WARN: Work-in-progress, unimplemented<br><br>Text document for embedding. Requires inference infrastructure, unimplemented.|
|*anyOf*|[Image](#schemaimage)|false|none|WARN: Work-in-progress, unimplemented<br><br>Image object for embedding. Requires inference infrastructure, unimplemented.|
|*anyOf*|[InferenceObject](#schemainferenceobject)|false|none|WARN: Work-in-progress, unimplemented<br><br>Custom object for embedding. Requires inference infrastructure, unimplemented.|

<h2 id="tocS_SetPayload">SetPayload</h2>
<!-- backwards compatibility -->
<a id="schemasetpayload"></a>
<a id="schema_SetPayload"></a>
<a id="tocSsetpayload"></a>
<a id="tocssetpayload"></a>

```json
{
  "payload": {
    "city": "London",
    "color": "green"
  },
  "points": [
    42
  ],
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "shard_key": "region_1",
  "key": "string"
}
```

This data structure is used in API interface and applied across multiple shards

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[Payload](#schemapayload)|true|none|none|
|points|[[ExtendedPointId](#schemaextendedpointid)]|false|none|Assigns payload to each point in this list|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Assigns payload to each point that satisfy this filter condition|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|
|key|string \| null|false|none|Assigns payload to each point that satisfy this path of property|

<h2 id="tocS_DeletePayload">DeletePayload</h2>
<!-- backwards compatibility -->
<a id="schemadeletepayload"></a>
<a id="schema_DeletePayload"></a>
<a id="tocSdeletepayload"></a>
<a id="tocsdeletepayload"></a>

```json
{
  "keys": [
    "string"
  ],
  "points": [
    42
  ],
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "shard_key": "region_1"
}
```

This data structure is used in API interface and applied across multiple shards

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[string]|true|none|List of payload keys to remove from payload|
|points|[[ExtendedPointId](#schemaextendedpointid)]|false|none|Deletes values from each point in this list|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Deletes values from points that satisfy this filter condition|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|

<h2 id="tocS_ClusterStatus">ClusterStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatus"></a>
<a id="schema_ClusterStatus"></a>
<a id="tocSclusterstatus"></a>
<a id="tocsclusterstatus"></a>

```json
{
  "status": "disabled"
}
```

Information about current cluster status and structure

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|string|true|none|none|
|*oneOf*|object|false|none|Description of enabled cluster|
|status|string|true|none|none|
|peer_id|integer(uint64)|true|none|ID of this peer|
|peers|object|true|none|Peers composition of the cluster with main information|
|raft_info|[RaftInfo](#schemaraftinfo)|true|none|Summary information about the current raft state|
|consensus_thread_status|[ConsensusThreadStatus](#schemaconsensusthreadstatus)|true|none|Information about current consensus thread status|
|message_send_failures|object|true|none|Consequent failures of message send operations in consensus by peer address. On the first success to send to that peer - entry is removed from this hashmap.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|disabled|
|status|enabled|

<h2 id="tocS_PeerInfo">PeerInfo</h2>
<!-- backwards compatibility -->
<a id="schemapeerinfo"></a>
<a id="schema_PeerInfo"></a>
<a id="tocSpeerinfo"></a>
<a id="tocspeerinfo"></a>

```json
{
  "uri": "string"
}
```

Information of a peer in the cluster

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|true|none|none|

<h2 id="tocS_RaftInfo">RaftInfo</h2>
<!-- backwards compatibility -->
<a id="schemaraftinfo"></a>
<a id="schema_RaftInfo"></a>
<a id="tocSraftinfo"></a>
<a id="tocsraftinfo"></a>

```json
{
  "term": 0,
  "commit": 0,
  "pending_operations": 0,
  "leader": 0,
  "role": "Follower",
  "is_voter": true
}
```

Summary information about the current raft state

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|term|integer(uint64)|true|none|Raft divides time into terms of arbitrary length, each beginning with an election. If a candidate wins the election, it remains the leader for the rest of the term. The term number increases monotonically. Each server stores the current term number which is also exchanged in every communication.|
|commit|integer(uint64)|true|none|The index of the latest committed (finalized) operation that this peer is aware of.|
|pending_operations|integer(uint)|true|none|Number of consensus operations pending to be applied on this peer|
|leader|integer(uint64) \| null|false|none|Leader of the current term|
|role|[StateRole](#schemastaterole) \| object \| null|false|none|Role of this peer in the current term|
|is_voter|boolean|true|none|Is this peer a voter or a learner|

<h2 id="tocS_StateRole">StateRole</h2>
<!-- backwards compatibility -->
<a id="schemastaterole"></a>
<a id="schema_StateRole"></a>
<a id="tocSstaterole"></a>
<a id="tocsstaterole"></a>

```json
"Follower"
```

Role of the peer in the consensus

<h2 id="tocS_ConsensusThreadStatus">ConsensusThreadStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconsensusthreadstatus"></a>
<a id="schema_ConsensusThreadStatus"></a>
<a id="tocSconsensusthreadstatus"></a>
<a id="tocsconsensusthreadstatus"></a>

```json
{
  "consensus_thread_status": "working",
  "last_update": "1970-01-01T00:00:00Z"
}
```

Information about current consensus thread status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|consensus_thread_status|string|true|none|none|
|last_update|string(date-time)|true|none|none|
|*oneOf*|object|false|none|none|
|consensus_thread_status|string|true|none|none|
|*oneOf*|object|false|none|none|
|consensus_thread_status|string|true|none|none|
|err|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|consensus_thread_status|working|
|consensus_thread_status|stopped|
|consensus_thread_status|stopped_with_err|

<h2 id="tocS_MessageSendErrors">MessageSendErrors</h2>
<!-- backwards compatibility -->
<a id="schemamessagesenderrors"></a>
<a id="schema_MessageSendErrors"></a>
<a id="tocSmessagesenderrors"></a>
<a id="tocsmessagesenderrors"></a>

```json
{
  "count": 0,
  "latest_error": "string",
  "latest_error_timestamp": "1970-01-01T00:00:00Z"
}
```

Message send failures for a particular peer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(uint)|true|none|none|
|latest_error|string \| null|false|none|none|
|latest_error_timestamp|string(date-time) \| null|false|none|Timestamp of the latest error|

<h2 id="tocS_SnapshotDescription">SnapshotDescription</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotdescription"></a>
<a id="schema_SnapshotDescription"></a>
<a id="tocSsnapshotdescription"></a>
<a id="tocssnapshotdescription"></a>

```json
{
  "name": "my-collection-3766212330831337-2024-07-22-08-31-55.snapshot",
  "creation_time": "2022-08-04T10:49:10",
  "size": 1000000,
  "checksum": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|creation_time|string(partial-date-time) \| null|false|none|none|
|size|integer(uint64)|true|none|none|
|checksum|string \| null|false|none|none|

<h2 id="tocS_CountRequest">CountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacountrequest"></a>
<a id="schema_CountRequest"></a>
<a id="tocScountrequest"></a>
<a id="tocscountrequest"></a>

```json
{
  "shard_key": "region_1",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "exact": true
}
```

Count Request Counts the number of points which satisfy the given filter. If filter is not provided, the count of all points in the collection will be returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|Specify in which shards to look for the points, if not specified - look in all shards|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Look only for points which satisfies this conditions|
|exact|boolean|false|none|If true, count exact number of points. If false, count approximate number of points faster. Approximate count might be unreliable during the indexing process. Default: true|

<h2 id="tocS_CountResult">CountResult</h2>
<!-- backwards compatibility -->
<a id="schemacountresult"></a>
<a id="schema_CountResult"></a>
<a id="tocScountresult"></a>
<a id="tocscountresult"></a>

```json
{
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(uint)|true|none|Number of points which satisfy the conditions|

<h2 id="tocS_CollectionClusterInfo">CollectionClusterInfo</h2>
<!-- backwards compatibility -->
<a id="schemacollectionclusterinfo"></a>
<a id="schema_CollectionClusterInfo"></a>
<a id="tocScollectionclusterinfo"></a>
<a id="tocscollectionclusterinfo"></a>

```json
{
  "peer_id": 0,
  "shard_count": 0,
  "local_shards": [
    {
      "shard_id": 0,
      "shard_key": "region_1",
      "points_count": 0,
      "state": "Active"
    }
  ],
  "remote_shards": [
    {
      "shard_id": 0,
      "shard_key": "region_1",
      "peer_id": 0,
      "state": "Active"
    }
  ],
  "shard_transfers": [
    {
      "shard_id": 0,
      "to_shard_id": 0,
      "from": 0,
      "to": 0,
      "sync": true,
      "method": "stream_records",
      "comment": "string"
    }
  ],
  "resharding_operations": [
    {
      "direction": "up",
      "shard_id": 0,
      "peer_id": 0,
      "shard_key": "region_1"
    }
  ]
}
```

Current clustering distribution for the collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|peer_id|integer(uint64)|true|none|ID of this peer|
|shard_count|integer(uint)|true|none|Total number of shards|
|local_shards|[[LocalShardInfo](#schemalocalshardinfo)]|true|none|Local shards|
|remote_shards|[[RemoteShardInfo](#schemaremoteshardinfo)]|true|none|Remote shards|
|shard_transfers|[[ShardTransferInfo](#schemashardtransferinfo)]|true|none|Shard transfers|
|resharding_operations|[[ReshardingInfo](#schemareshardinginfo)]|false|none|Resharding operations|

<h2 id="tocS_LocalShardInfo">LocalShardInfo</h2>
<!-- backwards compatibility -->
<a id="schemalocalshardinfo"></a>
<a id="schema_LocalShardInfo"></a>
<a id="tocSlocalshardinfo"></a>
<a id="tocslocalshardinfo"></a>

```json
{
  "shard_id": 0,
  "shard_key": "region_1",
  "points_count": 0,
  "state": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|Local shard id|
|shard_key|[ShardKey](#schemashardkey) \| object \| null|false|none|User-defined sharding key|
|points_count|integer(uint)|true|none|Number of points in the shard|
|state|[ReplicaState](#schemareplicastate)|true|none|State of the single shard within a replica set.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Active|
|state|Dead|
|state|Partial|
|state|Initializing|
|state|Listener|
|state|PartialSnapshot|
|state|Recovery|
|state|Resharding|
|state|ReshardingScaleDown|
|state|ActiveRead|
|state|ManualRecovery|

<h2 id="tocS_ReplicaState">ReplicaState</h2>
<!-- backwards compatibility -->
<a id="schemareplicastate"></a>
<a id="schema_ReplicaState"></a>
<a id="tocSreplicastate"></a>
<a id="tocsreplicastate"></a>

```json
"Active"
```

State of the single shard within a replica set.

<h2 id="tocS_RemoteShardInfo">RemoteShardInfo</h2>
<!-- backwards compatibility -->
<a id="schemaremoteshardinfo"></a>
<a id="schema_RemoteShardInfo"></a>
<a id="tocSremoteshardinfo"></a>
<a id="tocsremoteshardinfo"></a>

```json
{
  "shard_id": 0,
  "shard_key": "region_1",
  "peer_id": 0,
  "state": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|Remote shard id|
|shard_key|[ShardKey](#schemashardkey) \| object \| null|false|none|User-defined sharding key|
|peer_id|integer(uint64)|true|none|Remote peer id|
|state|[ReplicaState](#schemareplicastate)|true|none|State of the single shard within a replica set.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Active|
|state|Dead|
|state|Partial|
|state|Initializing|
|state|Listener|
|state|PartialSnapshot|
|state|Recovery|
|state|Resharding|
|state|ReshardingScaleDown|
|state|ActiveRead|
|state|ManualRecovery|

<h2 id="tocS_ShardTransferInfo">ShardTransferInfo</h2>
<!-- backwards compatibility -->
<a id="schemashardtransferinfo"></a>
<a id="schema_ShardTransferInfo"></a>
<a id="tocSshardtransferinfo"></a>
<a id="tocsshardtransferinfo"></a>

```json
{
  "shard_id": 0,
  "to_shard_id": 0,
  "from": 0,
  "to": 0,
  "sync": true,
  "method": "stream_records",
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|none|
|to_shard_id|integer(uint32) \| null|false|none|Target shard ID if different than source shard ID<br><br>Used exclusively with `ReshardingStreamRecords` transfer method.|
|from|integer(uint64)|true|none|Source peer id|
|to|integer(uint64)|true|none|Destination peer id|
|sync|boolean|true|none|If `true` transfer is a synchronization of a replicas If `false` transfer is a moving of a shard from one peer to another|
|method|[ShardTransferMethod](#schemashardtransfermethod) \| object \| null|false|none|none|
|comment|string \| null|false|none|A human-readable report of the transfer progress. Available only on the source peer, and on the target peer during snapshot recovery.|

<h2 id="tocS_ShardTransferMethod">ShardTransferMethod</h2>
<!-- backwards compatibility -->
<a id="schemashardtransfermethod"></a>
<a id="schema_ShardTransferMethod"></a>
<a id="tocSshardtransfermethod"></a>
<a id="tocsshardtransfermethod"></a>

```json
"stream_records"
```

Methods for transferring a shard from one node to another.

- `stream_records` - Stream all shard records in batches until the whole shard is transferred.

- `snapshot` - Snapshot the shard, transfer and restore it on the receiver.

- `wal_delta` - Attempt to transfer shard difference by WAL delta.

- `resharding_stream_records` - Shard transfer for resharding: stream all records in batches until all points are transferred.

<h2 id="tocS_ReshardingInfo">ReshardingInfo</h2>
<!-- backwards compatibility -->
<a id="schemareshardinginfo"></a>
<a id="schema_ReshardingInfo"></a>
<a id="tocSreshardinginfo"></a>
<a id="tocsreshardinginfo"></a>

```json
{
  "direction": "up",
  "shard_id": 0,
  "peer_id": 0,
  "shard_key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|[ReshardingDirection](#schemareshardingdirection)|true|none|Resharding direction, scale up or down in number of shards<br><br>- `up` - Scale up, add a new shard<br><br>- `down` - Scale down, remove a shard|
|shard_id|integer(uint32)|true|none|none|
|peer_id|integer(uint64)|true|none|none|
|shard_key|[ShardKey](#schemashardkey) \| object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|up|
|direction|down|

<h2 id="tocS_ReshardingDirection">ReshardingDirection</h2>
<!-- backwards compatibility -->
<a id="schemareshardingdirection"></a>
<a id="schema_ReshardingDirection"></a>
<a id="tocSreshardingdirection"></a>
<a id="tocsreshardingdirection"></a>

```json
"up"
```

Resharding direction, scale up or down in number of shards

- `up` - Scale up, add a new shard

- `down` - Scale down, remove a shard

<h2 id="tocS_TelemetryData">TelemetryData</h2>
<!-- backwards compatibility -->
<a id="schematelemetrydata"></a>
<a id="schema_TelemetryData"></a>
<a id="tocStelemetrydata"></a>
<a id="tocstelemetrydata"></a>

```json
{
  "id": "string",
  "app": {
    "name": "string",
    "version": "string",
    "features": {
      "debug": true,
      "service_debug_feature": true,
      "recovery_mode": true,
      "gpu": true,
      "rocksdb": true,
      "staging": true
    },
    "runtime_features": {
      "all": false,
      "incremental_hnsw_building": true,
      "appendable_quantization": true,
      "single_file_mmap_vector_storage": true,
      "async_payload_storage": true,
      "async_hnsw_graph": false,
      "write_segment_manifest": false,
      "append_only_mutations": false,
      "compact_bitmask": false,
      "append_only_storages": false,
      "compact_logstore_tracker": false,
      "transfer_raw_points": true,
      "transfer_raw_payloads": true,
      "persist_proxy_segments": false,
      "combined_vector_storage": true,
      "serverless_compatible": false
    },
    "low_memory_mode": "disabled",
    "hnsw_global_config": {
      "healing_threshold": 0.3
    },
    "system": {
      "distribution": "string",
      "distribution_version": "string",
      "is_docker": true,
      "container_runtime": "none",
      "cores": 0,
      "cpu_cores_used": 0,
      "ram_size": 0,
      "disk_size": 0,
      "cpu_flags": "string",
      "cpu_endian": "little",
      "gpu_devices": [
        {
          "name": "string"
        }
      ]
    },
    "jwt_rbac": true,
    "hide_jwt_dashboard": true,
    "audit": {
      "dir": "string",
      "rotation": "string",
      "max_log_files": 0,
      "trust_forwarded_headers": true,
      "log_api": true,
      "output": "string",
      "dir_size_bytes": 0
    },
    "startup": "1970-01-01T00:00:00Z"
  },
  "collections": {
    "number_of_collections": 0,
    "max_collections": 0,
    "collections": [
      {
        "id": "string",
        "init_time_ms": 0,
        "config": {
          "params": {
            "vectors": {
              "size": 1,
              "distance": "Cosine",
              "hnsw_config": {
                "m": 0,
                "ef_construct": 4,
                "full_scan_threshold": 10,
                "max_indexing_threads": 0,
                "on_disk": true,
                "memory": "cold",
                "payload_m": 0,
                "inline_storage": true
              },
              "quantization_config": {
                "scalar": {
                  "type": "int8",
                  "quantile": 0.5,
                  "always_ram": true,
                  "memory": "cold"
                }
              },
              "on_disk": true,
              "memory": "cold",
              "datatype": "float32",
              "multivector_config": {
                "comparator": "max_sim"
              }
            },
            "shard_number": 1,
            "sharding_method": "auto",
            "replication_factor": 1,
            "write_consistency_factor": 1,
            "read_fan_out_factor": 0,
            "read_fan_out_delay_ms": 0,
            "on_disk_payload": true,
            "payload": {
              "memory": "cold"
            },
            "id_tracker": {
              "memory": "cold"
            },
            "sparse_vectors": {
              "property1": {
                "index": {
                  "full_scan_threshold": 0,
                  "on_disk": true,
                  "memory": "cold",
                  "datatype": "float32"
                },
                "modifier": "none"
              },
              "property2": {
                "index": {
                  "full_scan_threshold": 0,
                  "on_disk": true,
                  "memory": "cold",
                  "datatype": "float32"
                },
                "modifier": "none"
              }
            }
          },
          "hnsw_config": {
            "m": 0,
            "ef_construct": 4,
            "full_scan_threshold": 0,
            "max_indexing_threads": 0,
            "on_disk": true,
            "memory": "cold",
            "payload_m": 0,
            "inline_storage": true
          },
          "optimizer_config": {
            "deleted_threshold": 0.2,
            "vacuum_min_vector_number": 1000,
            "default_segment_number": 0,
            "max_segment_size": null,
            "memmap_threshold": null,
            "indexing_threshold": null,
            "flush_interval_sec": 0,
            "max_optimization_threads": null,
            "prevent_unoptimized": null
          },
          "wal_config": {
            "wal_capacity_mb": 1,
            "wal_segments_ahead": 0,
            "wal_retain_closed": 1
          },
          "quantization_config": null,
          "strict_mode_config": {
            "enabled": true,
            "max_query_limit": 0,
            "max_timeout": 0,
            "unindexed_filtering_retrieve": true,
            "unindexed_filtering_update": true,
            "search_max_hnsw_ef": 0,
            "search_allow_exact": true,
            "search_max_oversampling": 0,
            "upsert_max_batchsize": 0,
            "search_max_batchsize": 0,
            "max_collection_vector_size_bytes": 0,
            "read_rate_limit": 0,
            "write_rate_limit": 0,
            "max_collection_payload_size_bytes": 0,
            "max_points_count": 0,
            "filter_max_conditions": 0,
            "condition_max_size": 0,
            "multivector_config": {
              "property1": {
                "max_vectors": 0
              },
              "property2": {
                "max_vectors": 0
              }
            },
            "sparse_config": {
              "property1": {
                "max_length": 0
              },
              "property2": {
                "max_length": 0
              }
            },
            "max_payload_index_count": 0,
            "max_resident_memory_percent": 0
          },
          "uuid": null,
          "metadata": {
            "city": "London",
            "color": "green"
          }
        },
        "shards": [
          {
            "id": 0,
            "key": "region_1",
            "local": {
              "variant_name": "string",
              "status": "green",
              "total_optimized_points": 0,
              "vectors_size_bytes": 0,
              "payloads_size_bytes": 0,
              "num_points": 0,
              "num_vectors": 0,
              "num_vectors_by_name": {
                "property1": 0,
                "property2": 0
              },
              "segments": [
                {
                  "info": {
                    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "segment_type": "plain",
                    "num_vectors": 0,
                    "num_points": 0,
                    "num_deferred_points": 0,
                    "num_deleted_deferred_points": 0,
                    "num_indexed_vectors": 0,
                    "num_deleted_vectors": 0,
                    "vectors_size_bytes": 0,
                    "payloads_size_bytes": 0,
                    "ram_usage_bytes": 0,
                    "disk_usage_bytes": 0,
                    "is_appendable": true,
                    "index_schema": {
                      "property1": {
                        "data_type": "keyword",
                        "params": {
                          "type": "keyword",
                          "is_tenant": true,
                          "on_disk": true,
                          "memory": "cold",
                          "enable_hnsw": true,
                          "prefix": true,
                          "nested": "string"
                        },
                        "points": 0
                      },
                      "property2": {
                        "data_type": "keyword",
                        "params": {
                          "type": "keyword",
                          "is_tenant": true,
                          "on_disk": true,
                          "memory": "cold",
                          "enable_hnsw": true,
                          "prefix": true,
                          "nested": "string"
                        },
                        "points": 0
                      }
                    },
                    "vector_data": {
                      "property1": {
                        "num_vectors": 0,
                        "num_indexed_vectors": 0,
                        "num_deleted_vectors": 0,
                        "io_backend": "mmap"
                      },
                      "property2": {
                        "num_vectors": 0,
                        "num_indexed_vectors": 0,
                        "num_deleted_vectors": 0,
                        "io_backend": "mmap"
                      }
                    },
                    "payload_storage_io_backend": "mmap",
                    "deferred_internal_id": 0
                  },
                  "config": {
                    "vector_data": {},
                    "sparse_vector_data": {
                      "property1": {
                        "index": {
                          "full_scan_threshold": 0,
                          "index_type": "MutableRam",
                          "datatype": "float32",
                          "memory": "cold"
                        },
                        "storage_type": "mmap",
                        "modifier": "none"
                      },
                      "property2": {
                        "index": {
                          "full_scan_threshold": 0,
                          "index_type": "MutableRam",
                          "datatype": "float32",
                          "memory": "cold"
                        },
                        "storage_type": "mmap",
                        "modifier": "none"
                      }
                    },
                    "payload_storage_type": {
                      "type": "mmap"
                    },
                    "id_tracker_memory": "cold"
                  },
                  "vector_index_searches": [
                    {
                      "index_name": "string",
                      "unfiltered_plain": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "unfiltered_hnsw": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "unfiltered_sparse": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "filtered_plain": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "filtered_small_cardinality": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "filtered_large_cardinality": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "filtered_acorn": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "filtered_exact": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "filtered_sparse": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      },
                      "unfiltered_exact": {
                        "count": 0,
                        "fail_count": 0,
                        "avg_duration_micros": 0,
                        "min_duration_micros": 0,
                        "max_duration_micros": 0,
                        "total_duration_micros": 0,
                        "last_responded": "1970-01-01T00:00:00Z"
                      }
                    }
                  ],
                  "payload_field_indices": [
                    {
                      "field_name": "string",
                      "index_type": "string",
                      "points_values_count": 0,
                      "points_count": 0,
                      "histogram_bucket_size": 0
                    }
                  ]
                }
              ],
              "optimizations": {
                "status": "ok",
                "optimizations": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "log": [
                  {
                    "name": "string",
                    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "segment_ids": [
                      0
                    ],
                    "segment_uuids": [
                      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
                    ],
                    "status": "optimizing",
                    "start_at": "1970-01-01T00:00:00Z",
                    "end_at": "1970-01-01T00:00:00Z"
                  }
                ]
              },
              "async_scorer": true,
              "indexed_only_excluded_vectors": {
                "property1": 0,
                "property2": 0
              },
              "update_queue": {
                "length": 0,
                "op_num": 0,
                "deferred_points": 0
              }
            },
            "remote": [
              {
                "shard_id": 0,
                "peer_id": 0,
                "searches": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "updates": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                }
              }
            ],
            "replicate_states": {
              "property1": "Active",
              "property2": "Active"
            },
            "partial_snapshot": {
              "ongoing_create_snapshot_requests": 0,
              "is_recovering": true,
              "recovery_timestamp": 0
            }
          }
        ],
        "transfers": [
          {
            "shard_id": 0,
            "to_shard_id": 0,
            "from": 0,
            "to": 0,
            "sync": true,
            "method": "stream_records",
            "comment": "string"
          }
        ],
        "resharding": [
          {
            "stage": "migrating_points",
            "direction": "up",
            "shard_id": 0,
            "peer_id": 0,
            "shard_key": "region_1",
            "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          }
        ],
        "shard_clean_tasks": {
          "property1": "started",
          "property2": "started"
        }
      }
    ],
    "snapshots": [
      {
        "id": "string",
        "running_snapshots": 0,
        "running_snapshot_recovery": 0,
        "total_snapshot_creations": 0
      }
    ]
  },
  "cluster": {
    "enabled": true,
    "status": {
      "number_of_peers": 0,
      "term": 0,
      "commit": 0,
      "pending_operations": 0,
      "role": "Follower",
      "is_voter": true,
      "peer_id": 0,
      "consensus_thread_status": {
        "consensus_thread_status": "working",
        "last_update": "1970-01-01T00:00:00Z"
      }
    },
    "config": {
      "grpc_timeout_ms": 0,
      "p2p": {
        "connection_pool_size": 0
      },
      "consensus": {
        "max_message_queue_size": 0,
        "tick_period_ms": 0,
        "bootstrap_timeout_sec": 0
      }
    },
    "peers": {
      "property1": {
        "uri": "string"
      },
      "property2": {
        "uri": "string"
      }
    },
    "peer_metadata": {
      "property1": {
        "version": "string"
      },
      "property2": {
        "version": "string"
      }
    },
    "metadata": {},
    "resharding_enabled": true
  },
  "requests": {
    "rest": {
      "responses": {
        "property1": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        },
        "property2": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      },
      "per_collection_responses": {
        "property1": {
          "property1": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          },
          "property2": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          }
        },
        "property2": {
          "property1": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          },
          "property2": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          }
        }
      }
    },
    "grpc": {
      "responses": {
        "property1": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        },
        "property2": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      },
      "per_collection_responses": {
        "property1": {
          "property1": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          },
          "property2": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          }
        },
        "property2": {
          "property1": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          },
          "property2": {
            "property1": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "property2": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          }
        }
      }
    }
  },
  "memory": {
    "active_bytes": 0,
    "allocated_bytes": 0,
    "metadata_bytes": 0,
    "resident_bytes": 0,
    "retained_bytes": 0
  },
  "hardware": {
    "collection_data": {
      "property1": {
        "cpu": 0,
        "payload_io_read": 0,
        "payload_io_write": 0,
        "payload_index_io_read": 0,
        "payload_index_io_write": 0,
        "vector_io_read": 0,
        "vector_io_write": 0
      },
      "property2": {
        "cpu": 0,
        "payload_io_read": 0,
        "payload_io_write": 0,
        "payload_index_io_read": 0,
        "payload_index_io_write": 0,
        "vector_io_read": 0,
        "vector_io_write": 0
      }
    }
  },
  "search_pool": {
    "mode": "string",
    "high_cpu_threads": 0,
    "high_io_threads": 0
  },
  "quota": {
    "config": {
      "enabled": false,
      "max_resident_memory_percent": 1,
      "max_disk_usage_percent": 1,
      "release_margin_percent": 0
    },
    "exceeded": {
      "resident_memory": true,
      "disk_usage": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|app|[AppBuildTelemetry](#schemaappbuildtelemetry) \| object \| null|false|none|none|
|collections|[CollectionsTelemetry](#schemacollectionstelemetry)|true|none|none|
|cluster|[ClusterTelemetry](#schemaclustertelemetry) \| object \| null|false|none|none|
|requests|[RequestsTelemetry](#schemarequeststelemetry) \| object \| null|false|none|none|
|memory|[MemoryTelemetry](#schemamemorytelemetry) \| object \| null|false|none|none|
|hardware|[HardwareTelemetry](#schemahardwaretelemetry) \| object \| null|false|none|none|
|search_pool|[SearchThreadPoolTelemetry](#schemasearchthreadpooltelemetry) \| object \| null|false|none|none|
|quota|[QuotaTelemetry](#schemaquotatelemetry) \| object \| null|false|none|Resource quota this node is enforcing, and whether it is currently over it. The config is whatever this node last persisted, so a peer that missed a consensus update reports what it is actually applying rather than what the cluster agreed on. Absent for a token without global access, which `GET /quotas` requires as well.|

<h2 id="tocS_AppBuildTelemetry">AppBuildTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaappbuildtelemetry"></a>
<a id="schema_AppBuildTelemetry"></a>
<a id="tocSappbuildtelemetry"></a>
<a id="tocsappbuildtelemetry"></a>

```json
{
  "name": "string",
  "version": "string",
  "features": {
    "debug": true,
    "service_debug_feature": true,
    "recovery_mode": true,
    "gpu": true,
    "rocksdb": true,
    "staging": true
  },
  "runtime_features": {
    "all": false,
    "incremental_hnsw_building": true,
    "appendable_quantization": true,
    "single_file_mmap_vector_storage": true,
    "async_payload_storage": true,
    "async_hnsw_graph": false,
    "write_segment_manifest": false,
    "append_only_mutations": false,
    "compact_bitmask": false,
    "append_only_storages": false,
    "compact_logstore_tracker": false,
    "transfer_raw_points": true,
    "transfer_raw_payloads": true,
    "persist_proxy_segments": false,
    "combined_vector_storage": true,
    "serverless_compatible": false
  },
  "low_memory_mode": "disabled",
  "hnsw_global_config": {
    "healing_threshold": 0.3
  },
  "system": {
    "distribution": "string",
    "distribution_version": "string",
    "is_docker": true,
    "container_runtime": "none",
    "cores": 0,
    "cpu_cores_used": 0,
    "ram_size": 0,
    "disk_size": 0,
    "cpu_flags": "string",
    "cpu_endian": "little",
    "gpu_devices": [
      {
        "name": "string"
      }
    ]
  },
  "jwt_rbac": true,
  "hide_jwt_dashboard": true,
  "audit": {
    "dir": "string",
    "rotation": "string",
    "max_log_files": 0,
    "trust_forwarded_headers": true,
    "log_api": true,
    "output": "string",
    "dir_size_bytes": 0
  },
  "startup": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|version|string|true|none|none|
|features|[AppFeaturesTelemetry](#schemaappfeaturestelemetry) \| object \| null|false|none|none|
|runtime_features|[FeatureFlags](#schemafeatureflags) \| object \| null|false|none|none|
|low_memory_mode|[LowMemoryMode](#schemalowmemorymode) \| object \| null|false|none|none|
|hnsw_global_config|[HnswGlobalConfig](#schemahnswglobalconfig) \| object \| null|false|none|none|
|system|[RunningEnvironmentTelemetry](#schemarunningenvironmenttelemetry) \| object \| null|false|none|none|
|jwt_rbac|boolean \| null|false|none|none|
|hide_jwt_dashboard|boolean \| null|false|none|none|
|audit|[AuditTelemetry](#schemaaudittelemetry) \| object \| null|false|none|none|
|startup|string(date-time)|true|none|none|

<h2 id="tocS_AppFeaturesTelemetry">AppFeaturesTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaappfeaturestelemetry"></a>
<a id="schema_AppFeaturesTelemetry"></a>
<a id="tocSappfeaturestelemetry"></a>
<a id="tocsappfeaturestelemetry"></a>

```json
{
  "debug": true,
  "service_debug_feature": true,
  "recovery_mode": true,
  "gpu": true,
  "rocksdb": true,
  "staging": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|boolean|true|none|none|
|service_debug_feature|boolean|true|none|none|
|recovery_mode|boolean|true|none|none|
|gpu|boolean|true|none|none|
|rocksdb|boolean|true|none|none|
|staging|boolean|true|none|none|

<h2 id="tocS_FeatureFlags">FeatureFlags</h2>
<!-- backwards compatibility -->
<a id="schemafeatureflags"></a>
<a id="schema_FeatureFlags"></a>
<a id="tocSfeatureflags"></a>
<a id="tocsfeatureflags"></a>

```json
{
  "all": false,
  "incremental_hnsw_building": true,
  "appendable_quantization": true,
  "single_file_mmap_vector_storage": true,
  "async_payload_storage": true,
  "async_hnsw_graph": false,
  "write_segment_manifest": false,
  "append_only_mutations": false,
  "compact_bitmask": false,
  "append_only_storages": false,
  "compact_logstore_tracker": false,
  "transfer_raw_points": true,
  "transfer_raw_payloads": true,
  "persist_proxy_segments": false,
  "combined_vector_storage": true,
  "serverless_compatible": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|boolean|false|none|Magic feature flag that enables all features.<br><br>Note that this will only be applied to all flags when passed into [`init_feature_flags`].|
|incremental_hnsw_building|boolean|false|none|Use incremental HNSW building.<br><br>Enabled by default in Qdrant 1.14.1.|
|appendable_quantization|boolean|false|none|Use appendable quantization in appendable plain segments.<br><br>Enabled by default in Qdrant 1.16.0.|
|single_file_mmap_vector_storage|boolean|false|none|Use single-file mmap in-ram vector storage (InRamMmap)<br><br>Enabled by default in Qdrant 1.18.3+|
|async_payload_storage|boolean|false|none|Allow the io_uring-based payload storage implementation. When disabled, io_uring payload storage is *never* used. When enabled, payload storage backend is decided based on `storage.performance.io_uring` option and payload storage type.|
|async_hnsw_graph|boolean|false|none|Allow the batched io_uring-based HNSW graph search. When disabled, the HNSW graph is *never* opened on io_uring. When enabled, the graph backend is decided based on `storage.performance.io_uring` option and links placement.|
|write_segment_manifest|boolean|false|none|Write a segment manifest (`segments_manifest.json`, next to the `segments/` directory) listing the shard's segments and their state, so out-of-process readers can discover segments without scanning the filesystem.|
|append_only_mutations|boolean|false|none|Build new segments in append-only mode: in-place point mutations become clone-and-tombstone appends instead. Intended for testing the append-only storage path.|
|compact_bitmask|boolean|false|none|Persist write-once bitmasks in the compact `StoredBitmask` format instead of raw dense bitslices. Only gates writing: both formats are always readable.|
|append_only_storages|boolean|false|none|Create Blobstore-backed storages (payload storage, appendable field indexes, sparse vectors) in the append-only Logstore mode. Gates creation only: an existing storage keeps its persisted mode, and both modes are always readable.<br><br>Implies [`Self::append_only_mutations`], enforced by [`init_feature_flags`].|
|compact_logstore_tracker|boolean|false|none|In non-appendable segments built by the optimizer, store the tracker of an append-only payload storage in the compacted format: read into RAM whole on open instead of one lookup per value. Only has an effect together with [`Self::append_only_storages`]. Gates creation only: both formats are always readable.|
|transfer_raw_points|boolean|false|none|Transfer points as storage-native bytes (raw points), for every collection rather than only those whose vector storage would lose precision in a decode-encode round-trip (TurboQuant).<br><br>Read on the sending side only, where the transfer batch is prepared: nodes accept raw points regardless.|
|transfer_raw_payloads|boolean|false|none|Send the payload of a raw point as the byte blob it is stored as, so the sending node does not parse it and neither node builds a protobuf value tree for it. The receiving node still parses the blob, once, when the operation is applied. Only has an effect on points transferred raw, see [`Self::transfer_raw_points`].<br><br>Read on the sending side only: nodes accept raw payloads regardless.|
|persist_proxy_segments|boolean|false|none|Persist proxy segment changes on disk. Prevents pinning the WAL while proxy segments are open. Replays the persisted changes on startup to guarantee data consistency. Required for serverless deployments where storage and compute is separated.|
|combined_vector_storage|boolean|false|none|When `hnsw_config.inline_storage` enabled, use the `GraphInline` vector storage (aka inline-storage without standalone vector storage) for new segments.<br><br>Existing `GraphInline` segments are always readable, regardless of this flag.|
|serverless_compatible|boolean|false|none|Serverless-compatible deployment mode. Implies [`Self::write_segment_manifest`], [`Self::append_only_mutations`], [`Self::compact_bitmask`], [`Self::append_only_storages`], [`Self::compact_logstore_tracker`] and [`Self::persist_proxy_segments`].<br><br>Note that this will only be applied when passed into [`init_feature_flags`].|

<h2 id="tocS_LowMemoryMode">LowMemoryMode</h2>
<!-- backwards compatibility -->
<a id="schemalowmemorymode"></a>
<a id="schema_LowMemoryMode"></a>
<a id="tocSlowmemorymode"></a>
<a id="tocslowmemorymode"></a>

```json
"disabled"
```

Controls how segments are loaded on startup to reduce memory pressure.

Configured via `storage.low_memory_mode` in the configuration file.

This setting only affects *loading* — it never modifies the persisted configuration of any segment. The same data directory will behave differently depending on how this mode is set at startup, which makes it safe to toggle for recovery from out-of-memory crash loops.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|No special handling. Every component loads as persisted.|
|*oneOf*|string|false|none|Load RAM-friendly components as their on-disk variants where possible:<br><br>* Quantization is loaded as if `always_ram = false`. * Payload field indexes are loaded as if `on_disk = true`. * Payload storage is loaded as the mmap variant (lazy populate).|
|*oneOf*|string|false|none|Same as [`LowMemoryMode::NoResident`], plus mmap page population is skipped on load (for original vectors, HNSW graph and payload storage).|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|disabled|
|*oneOf*|no_resident|
|*oneOf*|no_populate|

<h2 id="tocS_HnswGlobalConfig">HnswGlobalConfig</h2>
<!-- backwards compatibility -->
<a id="schemahnswglobalconfig"></a>
<a id="schema_HnswGlobalConfig"></a>
<a id="tocShnswglobalconfig"></a>
<a id="tocshnswglobalconfig"></a>

```json
{
  "healing_threshold": 0.3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healing_threshold|number(double)|false|none|Enable HNSW healing if the ratio of missing points is no more than this value. To disable healing completely, set this value to `0.0`.|

<h2 id="tocS_RunningEnvironmentTelemetry">RunningEnvironmentTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemarunningenvironmenttelemetry"></a>
<a id="schema_RunningEnvironmentTelemetry"></a>
<a id="tocSrunningenvironmenttelemetry"></a>
<a id="tocsrunningenvironmenttelemetry"></a>

```json
{
  "distribution": "string",
  "distribution_version": "string",
  "is_docker": true,
  "container_runtime": "none",
  "cores": 0,
  "cpu_cores_used": 0,
  "ram_size": 0,
  "disk_size": 0,
  "cpu_flags": "string",
  "cpu_endian": "little",
  "gpu_devices": [
    {
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution|string \| null|false|none|none|
|distribution_version|string \| null|false|none|none|
|is_docker|boolean|true|none|none|
|container_runtime|[ContainerRuntime](#schemacontainerruntime)|true|none|Container runtime Qdrant is running under (`none` if bare metal).|
|cores|integer(uint) \| null|false|none|none|
|cpu_cores_used|number(float) \| null|false|none|Average number of CPU cores used by this process over roughly the last two seconds. `None` on unsupported platforms, before two samples are collected, or on transient failures reading process CPU time.|
|ram_size|integer(uint) \| null|false|none|Effective total memory for this process in KiB (cgroup limit or host RAM).|
|disk_size|integer(uint) \| null|false|none|Size in KiB of the filesystem hosting Qdrant's /storage path (if not available, fallback to host disk size)|
|cpu_flags|string|true|none|none|
|cpu_endian|[CpuEndian](#schemacpuendian) \| object \| null|false|none|none|
|gpu_devices|[[GpuDeviceTelemetry](#schemagpudevicetelemetry)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|container_runtime|none|
|container_runtime|docker|
|container_runtime|kubernetes|
|container_runtime|other|

<h2 id="tocS_ContainerRuntime">ContainerRuntime</h2>
<!-- backwards compatibility -->
<a id="schemacontainerruntime"></a>
<a id="schema_ContainerRuntime"></a>
<a id="tocScontainerruntime"></a>
<a id="tocscontainerruntime"></a>

```json
"none"
```

Container runtime Qdrant is running under (`none` if bare metal).

<h2 id="tocS_CpuEndian">CpuEndian</h2>
<!-- backwards compatibility -->
<a id="schemacpuendian"></a>
<a id="schema_CpuEndian"></a>
<a id="tocScpuendian"></a>
<a id="tocscpuendian"></a>

```json
"little"
```

<h2 id="tocS_GpuDeviceTelemetry">GpuDeviceTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemagpudevicetelemetry"></a>
<a id="schema_GpuDeviceTelemetry"></a>
<a id="tocSgpudevicetelemetry"></a>
<a id="tocsgpudevicetelemetry"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_AuditTelemetry">AuditTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaaudittelemetry"></a>
<a id="schema_AuditTelemetry"></a>
<a id="tocSaudittelemetry"></a>
<a id="tocsaudittelemetry"></a>

```json
{
  "dir": "string",
  "rotation": "string",
  "max_log_files": 0,
  "trust_forwarded_headers": true,
  "log_api": true,
  "output": "string",
  "dir_size_bytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dir|string|true|none|none|
|rotation|string|true|none|none|
|max_log_files|integer(uint)|true|none|none|
|trust_forwarded_headers|boolean|true|none|none|
|log_api|boolean|true|none|none|
|output|string|true|none|none|
|dir_size_bytes|integer(uint) \| null|false|none|none|

<h2 id="tocS_CollectionsTelemetry">CollectionsTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemacollectionstelemetry"></a>
<a id="schema_CollectionsTelemetry"></a>
<a id="tocScollectionstelemetry"></a>
<a id="tocscollectionstelemetry"></a>

```json
{
  "number_of_collections": 0,
  "max_collections": 0,
  "collections": [
    {
      "id": "string",
      "init_time_ms": 0,
      "config": {
        "params": {
          "vectors": {
            "size": 1,
            "distance": "Cosine",
            "hnsw_config": {
              "m": 0,
              "ef_construct": 4,
              "full_scan_threshold": 10,
              "max_indexing_threads": 0,
              "on_disk": true,
              "memory": "cold",
              "payload_m": 0,
              "inline_storage": true
            },
            "quantization_config": {
              "scalar": {
                "type": "int8",
                "quantile": 0.5,
                "always_ram": true,
                "memory": "cold"
              }
            },
            "on_disk": true,
            "memory": "cold",
            "datatype": "float32",
            "multivector_config": {
              "comparator": "max_sim"
            }
          },
          "shard_number": 1,
          "sharding_method": "auto",
          "replication_factor": 1,
          "write_consistency_factor": 1,
          "read_fan_out_factor": 0,
          "read_fan_out_delay_ms": 0,
          "on_disk_payload": true,
          "payload": {
            "memory": "cold"
          },
          "id_tracker": {
            "memory": "cold"
          },
          "sparse_vectors": {
            "property1": {
              "index": {
                "full_scan_threshold": 0,
                "on_disk": true,
                "memory": "cold",
                "datatype": "float32"
              },
              "modifier": "none"
            },
            "property2": {
              "index": {
                "full_scan_threshold": 0,
                "on_disk": true,
                "memory": "cold",
                "datatype": "float32"
              },
              "modifier": "none"
            }
          }
        },
        "hnsw_config": {
          "m": 0,
          "ef_construct": 4,
          "full_scan_threshold": 0,
          "max_indexing_threads": 0,
          "on_disk": true,
          "memory": "cold",
          "payload_m": 0,
          "inline_storage": true
        },
        "optimizer_config": {
          "deleted_threshold": 0.2,
          "vacuum_min_vector_number": 1000,
          "default_segment_number": 0,
          "max_segment_size": null,
          "memmap_threshold": null,
          "indexing_threshold": null,
          "flush_interval_sec": 0,
          "max_optimization_threads": null,
          "prevent_unoptimized": null
        },
        "wal_config": {
          "wal_capacity_mb": 1,
          "wal_segments_ahead": 0,
          "wal_retain_closed": 1
        },
        "quantization_config": null,
        "strict_mode_config": {
          "enabled": true,
          "max_query_limit": 0,
          "max_timeout": 0,
          "unindexed_filtering_retrieve": true,
          "unindexed_filtering_update": true,
          "search_max_hnsw_ef": 0,
          "search_allow_exact": true,
          "search_max_oversampling": 0,
          "upsert_max_batchsize": 0,
          "search_max_batchsize": 0,
          "max_collection_vector_size_bytes": 0,
          "read_rate_limit": 0,
          "write_rate_limit": 0,
          "max_collection_payload_size_bytes": 0,
          "max_points_count": 0,
          "filter_max_conditions": 0,
          "condition_max_size": 0,
          "multivector_config": {
            "property1": {
              "max_vectors": 0
            },
            "property2": {
              "max_vectors": 0
            }
          },
          "sparse_config": {
            "property1": {
              "max_length": 0
            },
            "property2": {
              "max_length": 0
            }
          },
          "max_payload_index_count": 0,
          "max_resident_memory_percent": 0
        },
        "uuid": null,
        "metadata": {
          "city": "London",
          "color": "green"
        }
      },
      "shards": [
        {
          "id": 0,
          "key": "region_1",
          "local": {
            "variant_name": "string",
            "status": "green",
            "total_optimized_points": 0,
            "vectors_size_bytes": 0,
            "payloads_size_bytes": 0,
            "num_points": 0,
            "num_vectors": 0,
            "num_vectors_by_name": {
              "property1": 0,
              "property2": 0
            },
            "segments": [
              {
                "info": {
                  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "segment_type": "plain",
                  "num_vectors": 0,
                  "num_points": 0,
                  "num_deferred_points": 0,
                  "num_deleted_deferred_points": 0,
                  "num_indexed_vectors": 0,
                  "num_deleted_vectors": 0,
                  "vectors_size_bytes": 0,
                  "payloads_size_bytes": 0,
                  "ram_usage_bytes": 0,
                  "disk_usage_bytes": 0,
                  "is_appendable": true,
                  "index_schema": {
                    "property1": {
                      "data_type": "keyword",
                      "params": {
                        "type": "keyword",
                        "is_tenant": true,
                        "on_disk": true,
                        "memory": "cold",
                        "enable_hnsw": true,
                        "prefix": true,
                        "nested": "string"
                      },
                      "points": 0
                    },
                    "property2": {
                      "data_type": "keyword",
                      "params": {
                        "type": "keyword",
                        "is_tenant": true,
                        "on_disk": true,
                        "memory": "cold",
                        "enable_hnsw": true,
                        "prefix": true,
                        "nested": "string"
                      },
                      "points": 0
                    }
                  },
                  "vector_data": {
                    "property1": {
                      "num_vectors": 0,
                      "num_indexed_vectors": 0,
                      "num_deleted_vectors": 0,
                      "io_backend": "mmap"
                    },
                    "property2": {
                      "num_vectors": 0,
                      "num_indexed_vectors": 0,
                      "num_deleted_vectors": 0,
                      "io_backend": "mmap"
                    }
                  },
                  "payload_storage_io_backend": "mmap",
                  "deferred_internal_id": 0
                },
                "config": {
                  "vector_data": {},
                  "sparse_vector_data": {
                    "property1": {
                      "index": {
                        "full_scan_threshold": 0,
                        "index_type": "MutableRam",
                        "datatype": "float32",
                        "memory": "cold"
                      },
                      "storage_type": "mmap",
                      "modifier": "none"
                    },
                    "property2": {
                      "index": {
                        "full_scan_threshold": 0,
                        "index_type": "MutableRam",
                        "datatype": "float32",
                        "memory": "cold"
                      },
                      "storage_type": "mmap",
                      "modifier": "none"
                    }
                  },
                  "payload_storage_type": {
                    "type": "mmap"
                  },
                  "id_tracker_memory": "cold"
                },
                "vector_index_searches": [
                  {
                    "index_name": "string",
                    "unfiltered_plain": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "unfiltered_hnsw": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "unfiltered_sparse": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "filtered_plain": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "filtered_small_cardinality": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "filtered_large_cardinality": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "filtered_acorn": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "filtered_exact": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "filtered_sparse": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    },
                    "unfiltered_exact": {
                      "count": 0,
                      "fail_count": 0,
                      "avg_duration_micros": 0,
                      "min_duration_micros": 0,
                      "max_duration_micros": 0,
                      "total_duration_micros": 0,
                      "last_responded": "1970-01-01T00:00:00Z"
                    }
                  }
                ],
                "payload_field_indices": [
                  {
                    "field_name": "string",
                    "index_type": "string",
                    "points_values_count": 0,
                    "points_count": 0,
                    "histogram_bucket_size": 0
                  }
                ]
              }
            ],
            "optimizations": {
              "status": "ok",
              "optimizations": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "log": [
                {
                  "name": "string",
                  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "segment_ids": [
                    0
                  ],
                  "segment_uuids": [
                    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
                  ],
                  "status": "optimizing",
                  "start_at": "1970-01-01T00:00:00Z",
                  "end_at": "1970-01-01T00:00:00Z"
                }
              ]
            },
            "async_scorer": true,
            "indexed_only_excluded_vectors": {
              "property1": 0,
              "property2": 0
            },
            "update_queue": {
              "length": 0,
              "op_num": 0,
              "deferred_points": 0
            }
          },
          "remote": [
            {
              "shard_id": 0,
              "peer_id": 0,
              "searches": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              },
              "updates": {
                "count": 0,
                "fail_count": 0,
                "avg_duration_micros": 0,
                "min_duration_micros": 0,
                "max_duration_micros": 0,
                "total_duration_micros": 0,
                "last_responded": "1970-01-01T00:00:00Z"
              }
            }
          ],
          "replicate_states": {
            "property1": "Active",
            "property2": "Active"
          },
          "partial_snapshot": {
            "ongoing_create_snapshot_requests": 0,
            "is_recovering": true,
            "recovery_timestamp": 0
          }
        }
      ],
      "transfers": [
        {
          "shard_id": 0,
          "to_shard_id": 0,
          "from": 0,
          "to": 0,
          "sync": true,
          "method": "stream_records",
          "comment": "string"
        }
      ],
      "resharding": [
        {
          "stage": "migrating_points",
          "direction": "up",
          "shard_id": 0,
          "peer_id": 0,
          "shard_key": "region_1",
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "shard_clean_tasks": {
        "property1": "started",
        "property2": "started"
      }
    }
  ],
  "snapshots": [
    {
      "id": "string",
      "running_snapshots": 0,
      "running_snapshot_recovery": 0,
      "total_snapshot_creations": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number_of_collections|integer(uint)|true|none|none|
|max_collections|integer(uint) \| null|false|none|none|
|collections|[[CollectionTelemetryEnum](#schemacollectiontelemetryenum)]|false|none|none|
|snapshots|[[CollectionSnapshotTelemetry](#schemacollectionsnapshottelemetry)]|false|none|none|

<h2 id="tocS_CollectionTelemetryEnum">CollectionTelemetryEnum</h2>
<!-- backwards compatibility -->
<a id="schemacollectiontelemetryenum"></a>
<a id="schema_CollectionTelemetryEnum"></a>
<a id="tocScollectiontelemetryenum"></a>
<a id="tocscollectiontelemetryenum"></a>

```json
{
  "id": "string",
  "init_time_ms": 0,
  "config": {
    "params": {
      "vectors": {
        "size": 1,
        "distance": "Cosine",
        "hnsw_config": {
          "m": 0,
          "ef_construct": 4,
          "full_scan_threshold": 10,
          "max_indexing_threads": 0,
          "on_disk": true,
          "memory": "cold",
          "payload_m": 0,
          "inline_storage": true
        },
        "quantization_config": {
          "scalar": {
            "type": "int8",
            "quantile": 0.5,
            "always_ram": true,
            "memory": "cold"
          }
        },
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32",
        "multivector_config": {
          "comparator": "max_sim"
        }
      },
      "shard_number": 1,
      "sharding_method": "auto",
      "replication_factor": 1,
      "write_consistency_factor": 1,
      "read_fan_out_factor": 0,
      "read_fan_out_delay_ms": 0,
      "on_disk_payload": true,
      "payload": {
        "memory": "cold"
      },
      "id_tracker": {
        "memory": "cold"
      },
      "sparse_vectors": {
        "property1": {
          "index": {
            "full_scan_threshold": 0,
            "on_disk": true,
            "memory": "cold",
            "datatype": "float32"
          },
          "modifier": "none"
        },
        "property2": {
          "index": {
            "full_scan_threshold": 0,
            "on_disk": true,
            "memory": "cold",
            "datatype": "float32"
          },
          "modifier": "none"
        }
      }
    },
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 0,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "optimizer_config": {
      "deleted_threshold": 0.2,
      "vacuum_min_vector_number": 1000,
      "default_segment_number": 0,
      "max_segment_size": null,
      "memmap_threshold": null,
      "indexing_threshold": null,
      "flush_interval_sec": 0,
      "max_optimization_threads": null,
      "prevent_unoptimized": null
    },
    "wal_config": {
      "wal_capacity_mb": 1,
      "wal_segments_ahead": 0,
      "wal_retain_closed": 1
    },
    "quantization_config": null,
    "strict_mode_config": {
      "enabled": true,
      "max_query_limit": 0,
      "max_timeout": 0,
      "unindexed_filtering_retrieve": true,
      "unindexed_filtering_update": true,
      "search_max_hnsw_ef": 0,
      "search_allow_exact": true,
      "search_max_oversampling": 0,
      "upsert_max_batchsize": 0,
      "search_max_batchsize": 0,
      "max_collection_vector_size_bytes": 0,
      "read_rate_limit": 0,
      "write_rate_limit": 0,
      "max_collection_payload_size_bytes": 0,
      "max_points_count": 0,
      "filter_max_conditions": 0,
      "condition_max_size": 0,
      "multivector_config": {
        "property1": {
          "max_vectors": 0
        },
        "property2": {
          "max_vectors": 0
        }
      },
      "sparse_config": {
        "property1": {
          "max_length": 0
        },
        "property2": {
          "max_length": 0
        }
      },
      "max_payload_index_count": 0,
      "max_resident_memory_percent": 0
    },
    "uuid": null,
    "metadata": {
      "city": "London",
      "color": "green"
    }
  },
  "shards": [
    {
      "id": 0,
      "key": "region_1",
      "local": {
        "variant_name": "string",
        "status": "green",
        "total_optimized_points": 0,
        "vectors_size_bytes": 0,
        "payloads_size_bytes": 0,
        "num_points": 0,
        "num_vectors": 0,
        "num_vectors_by_name": {
          "property1": 0,
          "property2": 0
        },
        "segments": [
          {
            "info": {
              "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "segment_type": "plain",
              "num_vectors": 0,
              "num_points": 0,
              "num_deferred_points": 0,
              "num_deleted_deferred_points": 0,
              "num_indexed_vectors": 0,
              "num_deleted_vectors": 0,
              "vectors_size_bytes": 0,
              "payloads_size_bytes": 0,
              "ram_usage_bytes": 0,
              "disk_usage_bytes": 0,
              "is_appendable": true,
              "index_schema": {
                "property1": {
                  "data_type": "keyword",
                  "params": {
                    "type": "keyword",
                    "is_tenant": true,
                    "on_disk": true,
                    "memory": "cold",
                    "enable_hnsw": true,
                    "prefix": true,
                    "nested": "string"
                  },
                  "points": 0
                },
                "property2": {
                  "data_type": "keyword",
                  "params": {
                    "type": "keyword",
                    "is_tenant": true,
                    "on_disk": true,
                    "memory": "cold",
                    "enable_hnsw": true,
                    "prefix": true,
                    "nested": "string"
                  },
                  "points": 0
                }
              },
              "vector_data": {
                "property1": {
                  "num_vectors": 0,
                  "num_indexed_vectors": 0,
                  "num_deleted_vectors": 0,
                  "io_backend": "mmap"
                },
                "property2": {
                  "num_vectors": 0,
                  "num_indexed_vectors": 0,
                  "num_deleted_vectors": 0,
                  "io_backend": "mmap"
                }
              },
              "payload_storage_io_backend": "mmap",
              "deferred_internal_id": 0
            },
            "config": {
              "vector_data": {},
              "sparse_vector_data": {
                "property1": {
                  "index": {
                    "full_scan_threshold": 0,
                    "index_type": "MutableRam",
                    "datatype": "float32",
                    "memory": "cold"
                  },
                  "storage_type": "mmap",
                  "modifier": "none"
                },
                "property2": {
                  "index": {
                    "full_scan_threshold": 0,
                    "index_type": "MutableRam",
                    "datatype": "float32",
                    "memory": "cold"
                  },
                  "storage_type": "mmap",
                  "modifier": "none"
                }
              },
              "payload_storage_type": {
                "type": "mmap"
              },
              "id_tracker_memory": "cold"
            },
            "vector_index_searches": [
              {
                "index_name": "string",
                "unfiltered_plain": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "unfiltered_hnsw": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "unfiltered_sparse": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_plain": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_small_cardinality": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_large_cardinality": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_acorn": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_exact": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_sparse": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "unfiltered_exact": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                }
              }
            ],
            "payload_field_indices": [
              {
                "field_name": "string",
                "index_type": "string",
                "points_values_count": 0,
                "points_count": 0,
                "histogram_bucket_size": 0
              }
            ]
          }
        ],
        "optimizations": {
          "status": "ok",
          "optimizations": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "log": [
            {
              "name": "string",
              "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "segment_ids": [
                0
              ],
              "segment_uuids": [
                "497f6eca-6276-4993-bfeb-53cbbbba6f08"
              ],
              "status": "optimizing",
              "start_at": "1970-01-01T00:00:00Z",
              "end_at": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "async_scorer": true,
        "indexed_only_excluded_vectors": {
          "property1": 0,
          "property2": 0
        },
        "update_queue": {
          "length": 0,
          "op_num": 0,
          "deferred_points": 0
        }
      },
      "remote": [
        {
          "shard_id": 0,
          "peer_id": 0,
          "searches": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "updates": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      ],
      "replicate_states": {
        "property1": "Active",
        "property2": "Active"
      },
      "partial_snapshot": {
        "ongoing_create_snapshot_requests": 0,
        "is_recovering": true,
        "recovery_timestamp": 0
      }
    }
  ],
  "transfers": [
    {
      "shard_id": 0,
      "to_shard_id": 0,
      "from": 0,
      "to": 0,
      "sync": true,
      "method": "stream_records",
      "comment": "string"
    }
  ],
  "resharding": [
    {
      "stage": "migrating_points",
      "direction": "up",
      "shard_id": 0,
      "peer_id": 0,
      "shard_key": "region_1",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "shard_clean_tasks": {
    "property1": "started",
    "property2": "started"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[CollectionTelemetry](#schemacollectiontelemetry)|false|none|none|
|*anyOf*|[CollectionsAggregatedTelemetry](#schemacollectionsaggregatedtelemetry)|false|none|none|

<h2 id="tocS_CollectionTelemetry">CollectionTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemacollectiontelemetry"></a>
<a id="schema_CollectionTelemetry"></a>
<a id="tocScollectiontelemetry"></a>
<a id="tocscollectiontelemetry"></a>

```json
{
  "id": "string",
  "init_time_ms": 0,
  "config": {
    "params": {
      "vectors": {
        "size": 1,
        "distance": "Cosine",
        "hnsw_config": {
          "m": 0,
          "ef_construct": 4,
          "full_scan_threshold": 10,
          "max_indexing_threads": 0,
          "on_disk": true,
          "memory": "cold",
          "payload_m": 0,
          "inline_storage": true
        },
        "quantization_config": {
          "scalar": {
            "type": "int8",
            "quantile": 0.5,
            "always_ram": true,
            "memory": "cold"
          }
        },
        "on_disk": true,
        "memory": "cold",
        "datatype": "float32",
        "multivector_config": {
          "comparator": "max_sim"
        }
      },
      "shard_number": 1,
      "sharding_method": "auto",
      "replication_factor": 1,
      "write_consistency_factor": 1,
      "read_fan_out_factor": 0,
      "read_fan_out_delay_ms": 0,
      "on_disk_payload": true,
      "payload": {
        "memory": "cold"
      },
      "id_tracker": {
        "memory": "cold"
      },
      "sparse_vectors": {
        "property1": {
          "index": {
            "full_scan_threshold": 0,
            "on_disk": true,
            "memory": "cold",
            "datatype": "float32"
          },
          "modifier": "none"
        },
        "property2": {
          "index": {
            "full_scan_threshold": 0,
            "on_disk": true,
            "memory": "cold",
            "datatype": "float32"
          },
          "modifier": "none"
        }
      }
    },
    "hnsw_config": {
      "m": 0,
      "ef_construct": 4,
      "full_scan_threshold": 0,
      "max_indexing_threads": 0,
      "on_disk": true,
      "memory": "cold",
      "payload_m": 0,
      "inline_storage": true
    },
    "optimizer_config": {
      "deleted_threshold": 0.2,
      "vacuum_min_vector_number": 1000,
      "default_segment_number": 0,
      "max_segment_size": null,
      "memmap_threshold": null,
      "indexing_threshold": null,
      "flush_interval_sec": 0,
      "max_optimization_threads": null,
      "prevent_unoptimized": null
    },
    "wal_config": {
      "wal_capacity_mb": 1,
      "wal_segments_ahead": 0,
      "wal_retain_closed": 1
    },
    "quantization_config": null,
    "strict_mode_config": {
      "enabled": true,
      "max_query_limit": 0,
      "max_timeout": 0,
      "unindexed_filtering_retrieve": true,
      "unindexed_filtering_update": true,
      "search_max_hnsw_ef": 0,
      "search_allow_exact": true,
      "search_max_oversampling": 0,
      "upsert_max_batchsize": 0,
      "search_max_batchsize": 0,
      "max_collection_vector_size_bytes": 0,
      "read_rate_limit": 0,
      "write_rate_limit": 0,
      "max_collection_payload_size_bytes": 0,
      "max_points_count": 0,
      "filter_max_conditions": 0,
      "condition_max_size": 0,
      "multivector_config": {
        "property1": {
          "max_vectors": 0
        },
        "property2": {
          "max_vectors": 0
        }
      },
      "sparse_config": {
        "property1": {
          "max_length": 0
        },
        "property2": {
          "max_length": 0
        }
      },
      "max_payload_index_count": 0,
      "max_resident_memory_percent": 0
    },
    "uuid": null,
    "metadata": {
      "city": "London",
      "color": "green"
    }
  },
  "shards": [
    {
      "id": 0,
      "key": "region_1",
      "local": {
        "variant_name": "string",
        "status": "green",
        "total_optimized_points": 0,
        "vectors_size_bytes": 0,
        "payloads_size_bytes": 0,
        "num_points": 0,
        "num_vectors": 0,
        "num_vectors_by_name": {
          "property1": 0,
          "property2": 0
        },
        "segments": [
          {
            "info": {
              "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "segment_type": "plain",
              "num_vectors": 0,
              "num_points": 0,
              "num_deferred_points": 0,
              "num_deleted_deferred_points": 0,
              "num_indexed_vectors": 0,
              "num_deleted_vectors": 0,
              "vectors_size_bytes": 0,
              "payloads_size_bytes": 0,
              "ram_usage_bytes": 0,
              "disk_usage_bytes": 0,
              "is_appendable": true,
              "index_schema": {
                "property1": {
                  "data_type": "keyword",
                  "params": {
                    "type": "keyword",
                    "is_tenant": true,
                    "on_disk": true,
                    "memory": "cold",
                    "enable_hnsw": true,
                    "prefix": true,
                    "nested": "string"
                  },
                  "points": 0
                },
                "property2": {
                  "data_type": "keyword",
                  "params": {
                    "type": "keyword",
                    "is_tenant": true,
                    "on_disk": true,
                    "memory": "cold",
                    "enable_hnsw": true,
                    "prefix": true,
                    "nested": "string"
                  },
                  "points": 0
                }
              },
              "vector_data": {
                "property1": {
                  "num_vectors": 0,
                  "num_indexed_vectors": 0,
                  "num_deleted_vectors": 0,
                  "io_backend": "mmap"
                },
                "property2": {
                  "num_vectors": 0,
                  "num_indexed_vectors": 0,
                  "num_deleted_vectors": 0,
                  "io_backend": "mmap"
                }
              },
              "payload_storage_io_backend": "mmap",
              "deferred_internal_id": 0
            },
            "config": {
              "vector_data": {},
              "sparse_vector_data": {
                "property1": {
                  "index": {
                    "full_scan_threshold": 0,
                    "index_type": "MutableRam",
                    "datatype": "float32",
                    "memory": "cold"
                  },
                  "storage_type": "mmap",
                  "modifier": "none"
                },
                "property2": {
                  "index": {
                    "full_scan_threshold": 0,
                    "index_type": "MutableRam",
                    "datatype": "float32",
                    "memory": "cold"
                  },
                  "storage_type": "mmap",
                  "modifier": "none"
                }
              },
              "payload_storage_type": {
                "type": "mmap"
              },
              "id_tracker_memory": "cold"
            },
            "vector_index_searches": [
              {
                "index_name": "string",
                "unfiltered_plain": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "unfiltered_hnsw": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "unfiltered_sparse": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_plain": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_small_cardinality": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_large_cardinality": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_acorn": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_exact": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "filtered_sparse": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                },
                "unfiltered_exact": {
                  "count": 0,
                  "fail_count": 0,
                  "avg_duration_micros": 0,
                  "min_duration_micros": 0,
                  "max_duration_micros": 0,
                  "total_duration_micros": 0,
                  "last_responded": "1970-01-01T00:00:00Z"
                }
              }
            ],
            "payload_field_indices": [
              {
                "field_name": "string",
                "index_type": "string",
                "points_values_count": 0,
                "points_count": 0,
                "histogram_bucket_size": 0
              }
            ]
          }
        ],
        "optimizations": {
          "status": "ok",
          "optimizations": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "log": [
            {
              "name": "string",
              "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "segment_ids": [
                0
              ],
              "segment_uuids": [
                "497f6eca-6276-4993-bfeb-53cbbbba6f08"
              ],
              "status": "optimizing",
              "start_at": "1970-01-01T00:00:00Z",
              "end_at": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "async_scorer": true,
        "indexed_only_excluded_vectors": {
          "property1": 0,
          "property2": 0
        },
        "update_queue": {
          "length": 0,
          "op_num": 0,
          "deferred_points": 0
        }
      },
      "remote": [
        {
          "shard_id": 0,
          "peer_id": 0,
          "searches": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "updates": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      ],
      "replicate_states": {
        "property1": "Active",
        "property2": "Active"
      },
      "partial_snapshot": {
        "ongoing_create_snapshot_requests": 0,
        "is_recovering": true,
        "recovery_timestamp": 0
      }
    }
  ],
  "transfers": [
    {
      "shard_id": 0,
      "to_shard_id": 0,
      "from": 0,
      "to": 0,
      "sync": true,
      "method": "stream_records",
      "comment": "string"
    }
  ],
  "resharding": [
    {
      "stage": "migrating_points",
      "direction": "up",
      "shard_id": 0,
      "peer_id": 0,
      "shard_key": "region_1",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "shard_clean_tasks": {
    "property1": "started",
    "property2": "started"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|init_time_ms|integer(uint64) \| null|false|none|none|
|config|[CollectionConfigTelemetry](#schemacollectionconfigtelemetry) \| object \| null|false|none|none|
|shards|[[ReplicaSetTelemetry](#schemareplicasettelemetry)]|false|none|none|
|transfers|[[ShardTransferInfo](#schemashardtransferinfo)]|false|none|none|
|resharding|[[ReshardingTelemetry](#schemareshardingtelemetry)]|false|none|none|
|shard_clean_tasks|object \| null|false|none|none|

<h2 id="tocS_CollectionConfigTelemetry">CollectionConfigTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemacollectionconfigtelemetry"></a>
<a id="schema_CollectionConfigTelemetry"></a>
<a id="tocScollectionconfigtelemetry"></a>
<a id="tocscollectionconfigtelemetry"></a>

```json
{
  "params": {
    "vectors": {
      "size": 1,
      "distance": "Cosine",
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 10,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "quantization_config": {
        "scalar": {
          "type": "int8",
          "quantile": 0.5,
          "always_ram": true,
          "memory": "cold"
        }
      },
      "on_disk": true,
      "memory": "cold",
      "datatype": "float32",
      "multivector_config": {
        "comparator": "max_sim"
      }
    },
    "shard_number": 1,
    "sharding_method": "auto",
    "replication_factor": 1,
    "write_consistency_factor": 1,
    "read_fan_out_factor": 0,
    "read_fan_out_delay_ms": 0,
    "on_disk_payload": true,
    "payload": {
      "memory": "cold"
    },
    "id_tracker": {
      "memory": "cold"
    },
    "sparse_vectors": {
      "property1": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      },
      "property2": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      }
    }
  },
  "hnsw_config": {
    "m": 0,
    "ef_construct": 4,
    "full_scan_threshold": 0,
    "max_indexing_threads": 0,
    "on_disk": true,
    "memory": "cold",
    "payload_m": 0,
    "inline_storage": true
  },
  "optimizer_config": {
    "deleted_threshold": 0.2,
    "vacuum_min_vector_number": 1000,
    "default_segment_number": 0,
    "max_segment_size": null,
    "memmap_threshold": null,
    "indexing_threshold": null,
    "flush_interval_sec": 0,
    "max_optimization_threads": null,
    "prevent_unoptimized": null
  },
  "wal_config": {
    "wal_capacity_mb": 1,
    "wal_segments_ahead": 0,
    "wal_retain_closed": 1
  },
  "quantization_config": null,
  "strict_mode_config": {
    "enabled": true,
    "max_query_limit": 0,
    "max_timeout": 0,
    "unindexed_filtering_retrieve": true,
    "unindexed_filtering_update": true,
    "search_max_hnsw_ef": 0,
    "search_allow_exact": true,
    "search_max_oversampling": 0,
    "upsert_max_batchsize": 0,
    "search_max_batchsize": 0,
    "max_collection_vector_size_bytes": 0,
    "read_rate_limit": 0,
    "write_rate_limit": 0,
    "max_collection_payload_size_bytes": 0,
    "max_points_count": 0,
    "filter_max_conditions": 0,
    "condition_max_size": 0,
    "multivector_config": {
      "property1": {
        "max_vectors": 0
      },
      "property2": {
        "max_vectors": 0
      }
    },
    "sparse_config": {
      "property1": {
        "max_length": 0
      },
      "property2": {
        "max_length": 0
      }
    },
    "max_payload_index_count": 0,
    "max_resident_memory_percent": 0
  },
  "uuid": null,
  "metadata": {
    "city": "London",
    "color": "green"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|[CollectionParams](#schemacollectionparams)|true|none|none|
|hnsw_config|[HnswConfig](#schemahnswconfig)|true|none|Config of HNSW index|
|optimizer_config|[OptimizersConfig](#schemaoptimizersconfig)|true|none|none|
|wal_config|[WalConfig](#schemawalconfig)|true|none|none|
|quantization_config|[QuantizationConfig](#schemaquantizationconfig) \| object \| null|false|none|none|
|strict_mode_config|[StrictModeConfigOutput](#schemastrictmodeconfigoutput) \| object \| null|false|none|none|
|uuid|string(uuid) \| null|false|none|none|
|metadata|[Payload](#schemapayload) \| object \| null|false|none|Arbitrary JSON metadata for the collection|

<h2 id="tocS_ReplicaSetTelemetry">ReplicaSetTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemareplicasettelemetry"></a>
<a id="schema_ReplicaSetTelemetry"></a>
<a id="tocSreplicasettelemetry"></a>
<a id="tocsreplicasettelemetry"></a>

```json
{
  "id": 0,
  "key": "region_1",
  "local": {
    "variant_name": "string",
    "status": "green",
    "total_optimized_points": 0,
    "vectors_size_bytes": 0,
    "payloads_size_bytes": 0,
    "num_points": 0,
    "num_vectors": 0,
    "num_vectors_by_name": {
      "property1": 0,
      "property2": 0
    },
    "segments": [
      {
        "info": {
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "segment_type": "plain",
          "num_vectors": 0,
          "num_points": 0,
          "num_deferred_points": 0,
          "num_deleted_deferred_points": 0,
          "num_indexed_vectors": 0,
          "num_deleted_vectors": 0,
          "vectors_size_bytes": 0,
          "payloads_size_bytes": 0,
          "ram_usage_bytes": 0,
          "disk_usage_bytes": 0,
          "is_appendable": true,
          "index_schema": {
            "property1": {
              "data_type": "keyword",
              "params": {
                "type": "keyword",
                "is_tenant": true,
                "on_disk": true,
                "memory": "cold",
                "enable_hnsw": true,
                "prefix": true,
                "nested": "string"
              },
              "points": 0
            },
            "property2": {
              "data_type": "keyword",
              "params": {
                "type": "keyword",
                "is_tenant": true,
                "on_disk": true,
                "memory": "cold",
                "enable_hnsw": true,
                "prefix": true,
                "nested": "string"
              },
              "points": 0
            }
          },
          "vector_data": {
            "property1": {
              "num_vectors": 0,
              "num_indexed_vectors": 0,
              "num_deleted_vectors": 0,
              "io_backend": "mmap"
            },
            "property2": {
              "num_vectors": 0,
              "num_indexed_vectors": 0,
              "num_deleted_vectors": 0,
              "io_backend": "mmap"
            }
          },
          "payload_storage_io_backend": "mmap",
          "deferred_internal_id": 0
        },
        "config": {
          "vector_data": {},
          "sparse_vector_data": {
            "property1": {
              "index": {
                "full_scan_threshold": 0,
                "index_type": "MutableRam",
                "datatype": "float32",
                "memory": "cold"
              },
              "storage_type": "mmap",
              "modifier": "none"
            },
            "property2": {
              "index": {
                "full_scan_threshold": 0,
                "index_type": "MutableRam",
                "datatype": "float32",
                "memory": "cold"
              },
              "storage_type": "mmap",
              "modifier": "none"
            }
          },
          "payload_storage_type": {
            "type": "mmap"
          },
          "id_tracker_memory": "cold"
        },
        "vector_index_searches": [
          {
            "index_name": "string",
            "unfiltered_plain": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "unfiltered_hnsw": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "unfiltered_sparse": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "filtered_plain": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "filtered_small_cardinality": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "filtered_large_cardinality": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "filtered_acorn": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "filtered_exact": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "filtered_sparse": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            },
            "unfiltered_exact": {
              "count": 0,
              "fail_count": 0,
              "avg_duration_micros": 0,
              "min_duration_micros": 0,
              "max_duration_micros": 0,
              "total_duration_micros": 0,
              "last_responded": "1970-01-01T00:00:00Z"
            }
          }
        ],
        "payload_field_indices": [
          {
            "field_name": "string",
            "index_type": "string",
            "points_values_count": 0,
            "points_count": 0,
            "histogram_bucket_size": 0
          }
        ]
      }
    ],
    "optimizations": {
      "status": "ok",
      "optimizations": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "log": [
        {
          "name": "string",
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "segment_ids": [
            0
          ],
          "segment_uuids": [
            "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          ],
          "status": "optimizing",
          "start_at": "1970-01-01T00:00:00Z",
          "end_at": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "async_scorer": true,
    "indexed_only_excluded_vectors": {
      "property1": 0,
      "property2": 0
    },
    "update_queue": {
      "length": 0,
      "op_num": 0,
      "deferred_points": 0
    }
  },
  "remote": [
    {
      "shard_id": 0,
      "peer_id": 0,
      "searches": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "updates": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "replicate_states": {
    "property1": "Active",
    "property2": "Active"
  },
  "partial_snapshot": {
    "ongoing_create_snapshot_requests": 0,
    "is_recovering": true,
    "recovery_timestamp": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(uint32)|true|none|none|
|key|[ShardKey](#schemashardkey) \| object \| null|false|none|none|
|local|[LocalShardTelemetry](#schemalocalshardtelemetry) \| object \| null|false|none|none|
|remote|[[RemoteShardTelemetry](#schemaremoteshardtelemetry)]|true|none|none|
|replicate_states|object|true|none|none|
|partial_snapshot|[PartialSnapshotTelemetry](#schemapartialsnapshottelemetry) \| object \| null|false|none|none|

<h2 id="tocS_LocalShardTelemetry">LocalShardTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemalocalshardtelemetry"></a>
<a id="schema_LocalShardTelemetry"></a>
<a id="tocSlocalshardtelemetry"></a>
<a id="tocslocalshardtelemetry"></a>

```json
{
  "variant_name": "string",
  "status": "green",
  "total_optimized_points": 0,
  "vectors_size_bytes": 0,
  "payloads_size_bytes": 0,
  "num_points": 0,
  "num_vectors": 0,
  "num_vectors_by_name": {
    "property1": 0,
    "property2": 0
  },
  "segments": [
    {
      "info": {
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "segment_type": "plain",
        "num_vectors": 0,
        "num_points": 0,
        "num_deferred_points": 0,
        "num_deleted_deferred_points": 0,
        "num_indexed_vectors": 0,
        "num_deleted_vectors": 0,
        "vectors_size_bytes": 0,
        "payloads_size_bytes": 0,
        "ram_usage_bytes": 0,
        "disk_usage_bytes": 0,
        "is_appendable": true,
        "index_schema": {
          "property1": {
            "data_type": "keyword",
            "params": {
              "type": "keyword",
              "is_tenant": true,
              "on_disk": true,
              "memory": "cold",
              "enable_hnsw": true,
              "prefix": true,
              "nested": "string"
            },
            "points": 0
          },
          "property2": {
            "data_type": "keyword",
            "params": {
              "type": "keyword",
              "is_tenant": true,
              "on_disk": true,
              "memory": "cold",
              "enable_hnsw": true,
              "prefix": true,
              "nested": "string"
            },
            "points": 0
          }
        },
        "vector_data": {
          "property1": {
            "num_vectors": 0,
            "num_indexed_vectors": 0,
            "num_deleted_vectors": 0,
            "io_backend": "mmap"
          },
          "property2": {
            "num_vectors": 0,
            "num_indexed_vectors": 0,
            "num_deleted_vectors": 0,
            "io_backend": "mmap"
          }
        },
        "payload_storage_io_backend": "mmap",
        "deferred_internal_id": 0
      },
      "config": {
        "vector_data": {},
        "sparse_vector_data": {
          "property1": {
            "index": {
              "full_scan_threshold": 0,
              "index_type": "MutableRam",
              "datatype": "float32",
              "memory": "cold"
            },
            "storage_type": "mmap",
            "modifier": "none"
          },
          "property2": {
            "index": {
              "full_scan_threshold": 0,
              "index_type": "MutableRam",
              "datatype": "float32",
              "memory": "cold"
            },
            "storage_type": "mmap",
            "modifier": "none"
          }
        },
        "payload_storage_type": {
          "type": "mmap"
        },
        "id_tracker_memory": "cold"
      },
      "vector_index_searches": [
        {
          "index_name": "string",
          "unfiltered_plain": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "unfiltered_hnsw": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "unfiltered_sparse": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "filtered_plain": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "filtered_small_cardinality": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "filtered_large_cardinality": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "filtered_acorn": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "filtered_exact": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "filtered_sparse": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "unfiltered_exact": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      ],
      "payload_field_indices": [
        {
          "field_name": "string",
          "index_type": "string",
          "points_values_count": 0,
          "points_count": 0,
          "histogram_bucket_size": 0
        }
      ]
    }
  ],
  "optimizations": {
    "status": "ok",
    "optimizations": {
      "count": 0,
      "fail_count": 0,
      "avg_duration_micros": 0,
      "min_duration_micros": 0,
      "max_duration_micros": 0,
      "total_duration_micros": 0,
      "last_responded": "1970-01-01T00:00:00Z"
    },
    "log": [
      {
        "name": "string",
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "segment_ids": [
          0
        ],
        "segment_uuids": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "status": "optimizing",
        "start_at": "1970-01-01T00:00:00Z",
        "end_at": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "async_scorer": true,
  "indexed_only_excluded_vectors": {
    "property1": 0,
    "property2": 0
  },
  "update_queue": {
    "length": 0,
    "op_num": 0,
    "deferred_points": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variant_name|string \| null|false|none|none|
|status|[ShardStatus](#schemashardstatus) \| object \| null|false|none|none|
|total_optimized_points|integer(uint)|true|none|Total number of optimized points since the last start.|
|vectors_size_bytes|integer(uint) \| null|false|none|An ESTIMATION of effective amount of bytes used for vectors Do NOT rely on this number unless you know what you are doing|
|payloads_size_bytes|integer(uint) \| null|false|none|An estimation of the effective amount of bytes used for payloads Do NOT rely on this number unless you know what you are doing|
|num_points|integer(uint) \| null|false|none|Sum of segment points This is an approximate number Do NOT rely on this number unless you know what you are doing|
|num_vectors|integer(uint) \| null|false|none|Sum of number of vectors in all segments This is an approximate number Do NOT rely on this number unless you know what you are doing|
|num_vectors_by_name|object \| null|false|none|Sum of number of vectors across all segments, grouped by their name. This is an approximate number. Do NOT rely on this number unless you know what you are doing|
|segments|[[SegmentTelemetry](#schemasegmenttelemetry)]|false|none|none|
|optimizations|[OptimizerTelemetry](#schemaoptimizertelemetry) \| object \| null|false|none|none|
|async_scorer|boolean \| null|false|none|none|
|indexed_only_excluded_vectors|object \| null|false|none|none|
|update_queue|[ShardUpdateQueueInfo](#schemashardupdatequeueinfo) \| object \| null|false|none|Update queue status|

<h2 id="tocS_ShardStatus">ShardStatus</h2>
<!-- backwards compatibility -->
<a id="schemashardstatus"></a>
<a id="schema_ShardStatus"></a>
<a id="tocSshardstatus"></a>
<a id="tocsshardstatus"></a>

```json
"green"
```

Current state of the shard (supports same states as the collection)

`Green` - all good. `Yellow` - optimization is running, 'Grey' - optimizations are possible but not triggered, `Red` - some operations failed and was not recovered

<h2 id="tocS_SegmentTelemetry">SegmentTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemasegmenttelemetry"></a>
<a id="schema_SegmentTelemetry"></a>
<a id="tocSsegmenttelemetry"></a>
<a id="tocssegmenttelemetry"></a>

```json
{
  "info": {
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "segment_type": "plain",
    "num_vectors": 0,
    "num_points": 0,
    "num_deferred_points": 0,
    "num_deleted_deferred_points": 0,
    "num_indexed_vectors": 0,
    "num_deleted_vectors": 0,
    "vectors_size_bytes": 0,
    "payloads_size_bytes": 0,
    "ram_usage_bytes": 0,
    "disk_usage_bytes": 0,
    "is_appendable": true,
    "index_schema": {
      "property1": {
        "data_type": "keyword",
        "params": {
          "type": "keyword",
          "is_tenant": true,
          "on_disk": true,
          "memory": "cold",
          "enable_hnsw": true,
          "prefix": true,
          "nested": "string"
        },
        "points": 0
      },
      "property2": {
        "data_type": "keyword",
        "params": {
          "type": "keyword",
          "is_tenant": true,
          "on_disk": true,
          "memory": "cold",
          "enable_hnsw": true,
          "prefix": true,
          "nested": "string"
        },
        "points": 0
      }
    },
    "vector_data": {
      "property1": {
        "num_vectors": 0,
        "num_indexed_vectors": 0,
        "num_deleted_vectors": 0,
        "io_backend": "mmap"
      },
      "property2": {
        "num_vectors": 0,
        "num_indexed_vectors": 0,
        "num_deleted_vectors": 0,
        "io_backend": "mmap"
      }
    },
    "payload_storage_io_backend": "mmap",
    "deferred_internal_id": 0
  },
  "config": {
    "vector_data": {},
    "sparse_vector_data": {
      "property1": {
        "index": {
          "full_scan_threshold": 0,
          "index_type": "MutableRam",
          "datatype": "float32",
          "memory": "cold"
        },
        "storage_type": "mmap",
        "modifier": "none"
      },
      "property2": {
        "index": {
          "full_scan_threshold": 0,
          "index_type": "MutableRam",
          "datatype": "float32",
          "memory": "cold"
        },
        "storage_type": "mmap",
        "modifier": "none"
      }
    },
    "payload_storage_type": {
      "type": "mmap"
    },
    "id_tracker_memory": "cold"
  },
  "vector_index_searches": [
    {
      "index_name": "string",
      "unfiltered_plain": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "unfiltered_hnsw": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "unfiltered_sparse": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "filtered_plain": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "filtered_small_cardinality": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "filtered_large_cardinality": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "filtered_acorn": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "filtered_exact": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "filtered_sparse": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "unfiltered_exact": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "payload_field_indices": [
    {
      "field_name": "string",
      "index_type": "string",
      "points_values_count": 0,
      "points_count": 0,
      "histogram_bucket_size": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[SegmentInfo](#schemasegmentinfo)|true|none|Aggregated information about segment|
|config|[SegmentConfig](#schemasegmentconfig)|true|none|none|
|vector_index_searches|[[VectorIndexSearchesTelemetry](#schemavectorindexsearchestelemetry)]|true|none|none|
|payload_field_indices|[[PayloadIndexTelemetry](#schemapayloadindextelemetry)]|true|none|none|

<h2 id="tocS_SegmentInfo">SegmentInfo</h2>
<!-- backwards compatibility -->
<a id="schemasegmentinfo"></a>
<a id="schema_SegmentInfo"></a>
<a id="tocSsegmentinfo"></a>
<a id="tocssegmentinfo"></a>

```json
{
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "segment_type": "plain",
  "num_vectors": 0,
  "num_points": 0,
  "num_deferred_points": 0,
  "num_deleted_deferred_points": 0,
  "num_indexed_vectors": 0,
  "num_deleted_vectors": 0,
  "vectors_size_bytes": 0,
  "payloads_size_bytes": 0,
  "ram_usage_bytes": 0,
  "disk_usage_bytes": 0,
  "is_appendable": true,
  "index_schema": {
    "property1": {
      "data_type": "keyword",
      "params": {
        "type": "keyword",
        "is_tenant": true,
        "on_disk": true,
        "memory": "cold",
        "enable_hnsw": true,
        "prefix": true,
        "nested": "string"
      },
      "points": 0
    },
    "property2": {
      "data_type": "keyword",
      "params": {
        "type": "keyword",
        "is_tenant": true,
        "on_disk": true,
        "memory": "cold",
        "enable_hnsw": true,
        "prefix": true,
        "nested": "string"
      },
      "points": 0
    }
  },
  "vector_data": {
    "property1": {
      "num_vectors": 0,
      "num_indexed_vectors": 0,
      "num_deleted_vectors": 0,
      "io_backend": "mmap"
    },
    "property2": {
      "num_vectors": 0,
      "num_indexed_vectors": 0,
      "num_deleted_vectors": 0,
      "io_backend": "mmap"
    }
  },
  "payload_storage_io_backend": "mmap",
  "deferred_internal_id": 0
}
```

Aggregated information about segment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string(uuid)|true|none|none|
|segment_type|[SegmentType](#schemasegmenttype)|true|none|Type of segment|
|num_vectors|integer(uint)|true|none|none|
|num_points|integer(uint)|true|none|none|
|num_deferred_points|integer(uint) \| null|false|none|none|
|num_deleted_deferred_points|integer(uint) \| null|false|none|none|
|num_indexed_vectors|integer(uint)|true|none|none|
|num_deleted_vectors|integer(uint)|true|none|none|
|vectors_size_bytes|integer(uint)|true|none|An ESTIMATION of effective amount of bytes used for vectors Do NOT rely on this number unless you know what you are doing|
|payloads_size_bytes|integer(uint)|true|none|An estimation of the effective amount of bytes used for payloads|
|ram_usage_bytes|integer(uint)|true|none|none|
|disk_usage_bytes|integer(uint)|true|none|none|
|is_appendable|boolean|true|none|none|
|index_schema|object|true|none|none|
|vector_data|object|true|none|none|
|payload_storage_io_backend|[IoBackend](#schemaiobackend) \| object \| null|false|none|Universal I/O backend that payload storage reads files with. Absent if payload storage does not support configurable backends or only supports a single backend type.|
|deferred_internal_id|integer(uint32) \| null|false|none|Internal ID from which points are deferred (hidden from reads). Only set for appendable segments.|

#### Enumerated Values

|Property|Value|
|---|---|
|segment_type|plain|
|segment_type|indexed|
|segment_type|special|

<h2 id="tocS_SegmentType">SegmentType</h2>
<!-- backwards compatibility -->
<a id="schemasegmenttype"></a>
<a id="schema_SegmentType"></a>
<a id="tocSsegmenttype"></a>
<a id="tocssegmenttype"></a>

```json
"plain"
```

Type of segment

<h2 id="tocS_VectorDataInfo">VectorDataInfo</h2>
<!-- backwards compatibility -->
<a id="schemavectordatainfo"></a>
<a id="schema_VectorDataInfo"></a>
<a id="tocSvectordatainfo"></a>
<a id="tocsvectordatainfo"></a>

```json
{
  "num_vectors": 0,
  "num_indexed_vectors": 0,
  "num_deleted_vectors": 0,
  "io_backend": "mmap"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_vectors|integer(uint)|true|none|none|
|num_indexed_vectors|integer(uint)|true|none|none|
|num_deleted_vectors|integer(uint)|true|none|none|
|io_backend|[IoBackend](#schemaiobackend) \| object \| null|false|none|Universal I/O backend that this vector storage reads files with. Absent if vector storage does not support configurable backends or only supports a single backend type.|

<h2 id="tocS_IoBackend">IoBackend</h2>
<!-- backwards compatibility -->
<a id="schemaiobackend"></a>
<a id="schema_IoBackend"></a>
<a id="tocSiobackend"></a>
<a id="tocsiobackend"></a>

```json
"mmap"
```

Universal I/O backend that is used to read files.

Decided when the component is opened based on `storage.performance.io_uring` option, component memory placement and kernel io_uring support.

Options:

* `Mmap` - Reads are served by the page cache through a memory mapping.

* `IoUring` - Reads are submitted to the kernel with io_uring.

<h2 id="tocS_SegmentConfig">SegmentConfig</h2>
<!-- backwards compatibility -->
<a id="schemasegmentconfig"></a>
<a id="schema_SegmentConfig"></a>
<a id="tocSsegmentconfig"></a>
<a id="tocssegmentconfig"></a>

```json
{
  "vector_data": {},
  "sparse_vector_data": {
    "property1": {
      "index": {
        "full_scan_threshold": 0,
        "index_type": "MutableRam",
        "datatype": "float32",
        "memory": "cold"
      },
      "storage_type": "mmap",
      "modifier": "none"
    },
    "property2": {
      "index": {
        "full_scan_threshold": 0,
        "index_type": "MutableRam",
        "datatype": "float32",
        "memory": "cold"
      },
      "storage_type": "mmap",
      "modifier": "none"
    }
  },
  "payload_storage_type": {
    "type": "mmap"
  },
  "id_tracker_memory": "cold"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vector_data|object|false|none|none|
|sparse_vector_data|object|false|none|none|
|payload_storage_type|[PayloadStorageType](#schemapayloadstoragetype)|true|none|Type of payload storage|
|id_tracker_memory|[Memory](#schemamemory) \| object \| null|false|none|Memory placement of the id tracker in non-appendable segments. Unset means the deployment default: `cold` in serverless-compatible mode, `pinned` otherwise.|

<h2 id="tocS_VectorDataConfig">VectorDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemavectordataconfig"></a>
<a id="schema_VectorDataConfig"></a>
<a id="tocSvectordataconfig"></a>
<a id="tocsvectordataconfig"></a>

```json
{
  "size": 0,
  "distance": "Cosine",
  "storage_type": "Memory",
  "index": {
    "type": "plain",
    "options": {}
  },
  "quantization_config": {
    "scalar": {
      "type": "int8",
      "quantile": 0.5,
      "always_ram": true,
      "memory": "cold"
    }
  },
  "multivector_config": {
    "comparator": "max_sim"
  },
  "datatype": "float32"
}
```

Config of single vector data storage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(uint)|true|none|Size/dimensionality of the vectors used|
|distance|[Distance](#schemadistance)|true|none|Type of internal tags, build from payload Distance function types used to compare vectors|
|storage_type|[VectorStorageType](#schemavectorstoragetype)|true|none|Storage types for vectors|
|index|[Indexes](#schemaindexes)|true|none|Vector index configuration|
|quantization_config|[QuantizationConfig](#schemaquantizationconfig) \| object \| null|false|none|Vector specific quantization config that overrides collection config|
|multivector_config|[MultiVectorConfig](#schemamultivectorconfig) \| object \| null|false|none|Vector specific configuration to enable multiple vectors per point|
|datatype|[VectorStorageDatatype](#schemavectorstoragedatatype) \| object \| null|false|none|Vector specific configuration to set specific storage element type|

#### Enumerated Values

|Property|Value|
|---|---|
|distance|Cosine|
|distance|Euclid|
|distance|Dot|
|distance|Manhattan|

<h2 id="tocS_VectorStorageType">VectorStorageType</h2>
<!-- backwards compatibility -->
<a id="schemavectorstoragetype"></a>
<a id="schema_VectorStorageType"></a>
<a id="tocSvectorstoragetype"></a>
<a id="tocsvectorstoragetype"></a>

```json
"Memory"
```

Storage types for vectors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Storage in memory (RAM)<br><br>Will be very fast at the cost of consuming a lot of memory.|
|*oneOf*|string|false|none|Storage in mmap file, not appendable<br><br>Search performance is defined by disk speed and the fraction of vectors that fit in memory.|
|*oneOf*|string|false|none|Storage in chunked mmap files, appendable<br><br>Search performance is defined by disk speed and the fraction of vectors that fit in memory.|
|*oneOf*|string|false|none|Same as `ChunkedMmap`, but vectors are forced to be locked in RAM In this way we avoid cold requests to disk, but risk to run out of memory|
|*oneOf*|string|false|none|Storage in a single mmap file, not appendable Pre-fetched into RAM on load|
|*oneOf*|string|false|none|Vectors are inlined in the HNSW links file, not in a dedicated storage. Not appendable.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Memory|
|*oneOf*|Mmap|
|*oneOf*|ChunkedMmap|
|*oneOf*|InRamChunkedMmap|
|*oneOf*|InRamMmap|
|*oneOf*|GraphInline|

<h2 id="tocS_Indexes">Indexes</h2>
<!-- backwards compatibility -->
<a id="schemaindexes"></a>
<a id="schema_Indexes"></a>
<a id="tocSindexes"></a>
<a id="tocsindexes"></a>

```json
{
  "type": "plain",
  "options": {}
}
```

Vector index configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Do not use any index, scan whole vector collection during search. Guarantee 100% precision, but may be time consuming on large collections.|
|type|string|true|none|none|
|options|object|true|none|none|
|*oneOf*|object|false|none|Use filterable HNSW index for approximate search. Is very fast even on a very huge collections, but require additional space to store index and additional time to build it.|
|type|string|true|none|none|
|options|[HnswConfig](#schemahnswconfig)|true|none|Config of HNSW index|

#### Enumerated Values

|Property|Value|
|---|---|
|type|plain|
|type|hnsw|

<h2 id="tocS_VectorStorageDatatype">VectorStorageDatatype</h2>
<!-- backwards compatibility -->
<a id="schemavectorstoragedatatype"></a>
<a id="schema_VectorStorageDatatype"></a>
<a id="tocSvectorstoragedatatype"></a>
<a id="tocsvectorstoragedatatype"></a>

```json
"float32"
```

Storage types for vectors

<h2 id="tocS_SparseVectorDataConfig">SparseVectorDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemasparsevectordataconfig"></a>
<a id="schema_SparseVectorDataConfig"></a>
<a id="tocSsparsevectordataconfig"></a>
<a id="tocssparsevectordataconfig"></a>

```json
{
  "index": {
    "full_scan_threshold": 0,
    "index_type": "MutableRam",
    "datatype": "float32",
    "memory": "cold"
  },
  "storage_type": "mmap",
  "modifier": "none"
}
```

Config of single sparse vector data storage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|[SparseIndexConfig](#schemasparseindexconfig)|true|none|Configuration for sparse inverted index.|
|storage_type|[SparseVectorStorageType](#schemasparsevectorstoragetype)|false|none|none|
|modifier|[Modifier](#schemamodifier) \| object \| null|false|none|Configures addition value modifications for sparse vectors. Default: none|

<h2 id="tocS_SparseIndexConfig">SparseIndexConfig</h2>
<!-- backwards compatibility -->
<a id="schemasparseindexconfig"></a>
<a id="schema_SparseIndexConfig"></a>
<a id="tocSsparseindexconfig"></a>
<a id="tocssparseindexconfig"></a>

```json
{
  "full_scan_threshold": 0,
  "index_type": "MutableRam",
  "datatype": "float32",
  "memory": "cold"
}
```

Configuration for sparse inverted index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_scan_threshold|integer(uint) \| null|false|none|We prefer a full scan search upto (excluding) this number of vectors.<br><br>Note: this is number of vectors, not KiloBytes.|
|index_type|[SparseIndexType](#schemasparseindextype)|true|none|Sparse index types|
|datatype|[VectorStorageDatatype](#schemavectorstoragedatatype) \| object \| null|false|none|Datatype used to store weights in the index.|
|memory|[Memory](#schemamemory) \| object \| null|false|none|Requested memory placement of the index.<br><br>The structural decision is carried by `index_type`; this field additionally distinguishes `cold` from `cached` for the mmap index variant.|

<h2 id="tocS_SparseIndexType">SparseIndexType</h2>
<!-- backwards compatibility -->
<a id="schemasparseindextype"></a>
<a id="schema_SparseIndexType"></a>
<a id="tocSsparseindextype"></a>
<a id="tocssparseindextype"></a>

```json
"MutableRam"
```

Sparse index types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Mutable RAM sparse index|
|*oneOf*|string|false|none|Immutable RAM sparse index|
|*oneOf*|string|false|none|Mmap sparse index|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|MutableRam|
|*oneOf*|ImmutableRam|
|*oneOf*|Mmap|

<h2 id="tocS_SparseVectorStorageType">SparseVectorStorageType</h2>
<!-- backwards compatibility -->
<a id="schemasparsevectorstoragetype"></a>
<a id="schema_SparseVectorStorageType"></a>
<a id="tocSsparsevectorstoragetype"></a>
<a id="tocssparsevectorstoragetype"></a>

```json
"mmap"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Storage in memory maps (gridstore storage)|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|mmap|

<h2 id="tocS_PayloadStorageType">PayloadStorageType</h2>
<!-- backwards compatibility -->
<a id="schemapayloadstoragetype"></a>
<a id="schema_PayloadStorageType"></a>
<a id="tocSpayloadstoragetype"></a>
<a id="tocspayloadstoragetype"></a>

```json
{
  "type": "mmap"
}
```

Type of payload storage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mmap|
|type|in_ram_mmap|

<h2 id="tocS_VectorIndexSearchesTelemetry">VectorIndexSearchesTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemavectorindexsearchestelemetry"></a>
<a id="schema_VectorIndexSearchesTelemetry"></a>
<a id="tocSvectorindexsearchestelemetry"></a>
<a id="tocsvectorindexsearchestelemetry"></a>

```json
{
  "index_name": "string",
  "unfiltered_plain": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "unfiltered_hnsw": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "unfiltered_sparse": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "filtered_plain": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "filtered_small_cardinality": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "filtered_large_cardinality": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "filtered_acorn": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "filtered_exact": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "filtered_sparse": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "unfiltered_exact": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index_name|string \| null|false|none|none|
|unfiltered_plain|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|unfiltered_hnsw|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|unfiltered_sparse|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|filtered_plain|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|filtered_small_cardinality|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|filtered_large_cardinality|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|filtered_acorn|[OperationDurationStatistics](#schemaoperationdurationstatistics)|false|none|none|
|filtered_exact|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|filtered_sparse|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|unfiltered_exact|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|

<h2 id="tocS_OperationDurationStatistics">OperationDurationStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaoperationdurationstatistics"></a>
<a id="schema_OperationDurationStatistics"></a>
<a id="tocSoperationdurationstatistics"></a>
<a id="tocsoperationdurationstatistics"></a>

```json
{
  "count": 0,
  "fail_count": 0,
  "avg_duration_micros": 0,
  "min_duration_micros": 0,
  "max_duration_micros": 0,
  "total_duration_micros": 0,
  "last_responded": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(uint)|true|none|none|
|fail_count|integer(uint) \| null|false|none|none|
|avg_duration_micros|number(float) \| null|false|none|The average time taken by 128 latest operations, calculated as a weighted mean.|
|min_duration_micros|number(float) \| null|false|none|The minimum duration of the operations across all the measurements.|
|max_duration_micros|number(float) \| null|false|none|The maximum duration of the operations across all the measurements.|
|total_duration_micros|integer(uint64) \| null|false|none|The total duration of all operations in microseconds.|
|last_responded|string(date-time) \| null|false|none|none|

<h2 id="tocS_PayloadIndexTelemetry">PayloadIndexTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemapayloadindextelemetry"></a>
<a id="schema_PayloadIndexTelemetry"></a>
<a id="tocSpayloadindextelemetry"></a>
<a id="tocspayloadindextelemetry"></a>

```json
{
  "field_name": "string",
  "index_type": "string",
  "points_values_count": 0,
  "points_count": 0,
  "histogram_bucket_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_name|string \| null|false|none|none|
|index_type|string|true|none|none|
|points_values_count|integer(uint)|true|none|The amount of values indexed for all points.|
|points_count|integer(uint)|true|none|The amount of points that have at least one value indexed.|
|histogram_bucket_size|integer(uint) \| null|false|none|none|

<h2 id="tocS_OptimizerTelemetry">OptimizerTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizertelemetry"></a>
<a id="schema_OptimizerTelemetry"></a>
<a id="tocSoptimizertelemetry"></a>
<a id="tocsoptimizertelemetry"></a>

```json
{
  "status": "ok",
  "optimizations": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "log": [
    {
      "name": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "segment_ids": [
        0
      ],
      "segment_uuids": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "status": "optimizing",
      "start_at": "1970-01-01T00:00:00Z",
      "end_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[OptimizersStatus](#schemaoptimizersstatus)|true|none|Current state of the collection|
|optimizations|[OperationDurationStatistics](#schemaoperationdurationstatistics)|true|none|none|
|log|[[TrackerTelemetry](#schematrackertelemetry)]|false|none|none|

<h2 id="tocS_TrackerTelemetry">TrackerTelemetry</h2>
<!-- backwards compatibility -->
<a id="schematrackertelemetry"></a>
<a id="schema_TrackerTelemetry"></a>
<a id="tocStrackertelemetry"></a>
<a id="tocstrackertelemetry"></a>

```json
{
  "name": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "segment_ids": [
    0
  ],
  "segment_uuids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "status": "optimizing",
  "start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z"
}
```

Tracker object used in telemetry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the optimizer|
|uuid|string(uuid)|true|none|UUID of the upcoming segment being created by the optimizer|
|segment_ids|[integer(uint)]|true|none|Internal segment IDs being optimized. These are local and in-memory, meaning that they can refer to different segments after a service restart.|
|segment_uuids|[string(uuid)]|true|none|Segment UUIDs being optimized. Refers to same segments as in `segment_ids`, but trackable across restarts, and reflect their directory name.|
|status|[TrackerStatus](#schematrackerstatus)|true|none|Represents the current state of the optimizer being tracked|
|start_at|string(date-time)|true|none|Start time of the optimizer|
|end_at|string(date-time) \| null|false|none|End time of the optimizer|

<h2 id="tocS_TrackerStatus">TrackerStatus</h2>
<!-- backwards compatibility -->
<a id="schematrackerstatus"></a>
<a id="schema_TrackerStatus"></a>
<a id="tocStrackerstatus"></a>
<a id="tocstrackerstatus"></a>

```json
"optimizing"
```

Represents the current state of the optimizer being tracked

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|object|false|none|none|
|cancelled|string|true|none|none|
|*oneOf*|object|false|none|none|
|error|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|optimizing|
|*oneOf*|done|

<h2 id="tocS_ShardUpdateQueueInfo">ShardUpdateQueueInfo</h2>
<!-- backwards compatibility -->
<a id="schemashardupdatequeueinfo"></a>
<a id="schema_ShardUpdateQueueInfo"></a>
<a id="tocSshardupdatequeueinfo"></a>
<a id="tocsshardupdatequeueinfo"></a>

```json
{
  "length": 0,
  "op_num": 0,
  "deferred_points": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|integer(uint)|true|none|Number of elements in the queue|
|op_num|integer(uint) \| null|false|none|last operation number processed|
|deferred_points|integer(uint) \| null|false|none|Number of points that are deferred (i.e hidden from search as they're not yet optimized).|

<h2 id="tocS_RemoteShardTelemetry">RemoteShardTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaremoteshardtelemetry"></a>
<a id="schema_RemoteShardTelemetry"></a>
<a id="tocSremoteshardtelemetry"></a>
<a id="tocsremoteshardtelemetry"></a>

```json
{
  "shard_id": 0,
  "peer_id": 0,
  "searches": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  },
  "updates": {
    "count": 0,
    "fail_count": 0,
    "avg_duration_micros": 0,
    "min_duration_micros": 0,
    "max_duration_micros": 0,
    "total_duration_micros": 0,
    "last_responded": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|none|
|peer_id|integer(uint64)|true|none|none|
|searches|[OperationDurationStatistics](#schemaoperationdurationstatistics) \| object \| null|false|none|none|
|updates|[OperationDurationStatistics](#schemaoperationdurationstatistics) \| object \| null|false|none|none|

<h2 id="tocS_PartialSnapshotTelemetry">PartialSnapshotTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemapartialsnapshottelemetry"></a>
<a id="schema_PartialSnapshotTelemetry"></a>
<a id="tocSpartialsnapshottelemetry"></a>
<a id="tocspartialsnapshottelemetry"></a>

```json
{
  "ongoing_create_snapshot_requests": 0,
  "is_recovering": true,
  "recovery_timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ongoing_create_snapshot_requests|integer(uint)|true|none|none|
|is_recovering|boolean|true|none|none|
|recovery_timestamp|integer(uint64)|true|none|none|

<h2 id="tocS_ReshardingTelemetry">ReshardingTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemareshardingtelemetry"></a>
<a id="schema_ReshardingTelemetry"></a>
<a id="tocSreshardingtelemetry"></a>
<a id="tocsreshardingtelemetry"></a>

```json
{
  "stage": "migrating_points",
  "direction": "up",
  "shard_id": 0,
  "peer_id": 0,
  "shard_key": "region_1",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stage|[ReshardingStage](#schemareshardingstage)|true|none|Resharding stages|
|direction|[ReshardingDirection](#schemareshardingdirection)|true|none|Resharding direction, scale up or down in number of shards<br><br>- `up` - Scale up, add a new shard<br><br>- `down` - Scale down, remove a shard|
|shard_id|integer(uint32)|true|none|none|
|peer_id|integer(uint64)|true|none|none|
|shard_key|[ShardKey](#schemashardkey) \| object \| null|false|none|none|
|uuid|string(uuid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|stage|migrating_points|
|stage|read_hash_ring_committed|
|stage|write_hash_ring_committed|
|direction|up|
|direction|down|

<h2 id="tocS_ReshardingStage">ReshardingStage</h2>
<!-- backwards compatibility -->
<a id="schemareshardingstage"></a>
<a id="schema_ReshardingStage"></a>
<a id="tocSreshardingstage"></a>
<a id="tocsreshardingstage"></a>

```json
"migrating_points"
```

Resharding stages

<h2 id="tocS_ShardCleanStatusTelemetry">ShardCleanStatusTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemashardcleanstatustelemetry"></a>
<a id="schema_ShardCleanStatusTelemetry"></a>
<a id="tocSshardcleanstatustelemetry"></a>
<a id="tocsshardcleanstatustelemetry"></a>

```json
"started"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|object|false|none|none|
|progress|[ShardCleanStatusProgressTelemetry](#schemashardcleanstatusprogresstelemetry)|true|none|none|
|*oneOf*|object|false|none|none|
|failed|[ShardCleanStatusFailedTelemetry](#schemashardcleanstatusfailedtelemetry)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|started|
|*oneOf*|done|
|*oneOf*|cancelled|

<h2 id="tocS_ShardCleanStatusProgressTelemetry">ShardCleanStatusProgressTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemashardcleanstatusprogresstelemetry"></a>
<a id="schema_ShardCleanStatusProgressTelemetry"></a>
<a id="tocSshardcleanstatusprogresstelemetry"></a>
<a id="tocsshardcleanstatusprogresstelemetry"></a>

```json
{
  "deleted_points": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted_points|integer(uint)|true|none|none|

<h2 id="tocS_ShardCleanStatusFailedTelemetry">ShardCleanStatusFailedTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemashardcleanstatusfailedtelemetry"></a>
<a id="schema_ShardCleanStatusFailedTelemetry"></a>
<a id="tocSshardcleanstatusfailedtelemetry"></a>
<a id="tocsshardcleanstatusfailedtelemetry"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|none|

<h2 id="tocS_CollectionsAggregatedTelemetry">CollectionsAggregatedTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemacollectionsaggregatedtelemetry"></a>
<a id="schema_CollectionsAggregatedTelemetry"></a>
<a id="tocScollectionsaggregatedtelemetry"></a>
<a id="tocscollectionsaggregatedtelemetry"></a>

```json
{
  "vectors": 0,
  "optimizers_status": "ok",
  "params": {
    "vectors": {
      "size": 1,
      "distance": "Cosine",
      "hnsw_config": {
        "m": 0,
        "ef_construct": 4,
        "full_scan_threshold": 10,
        "max_indexing_threads": 0,
        "on_disk": true,
        "memory": "cold",
        "payload_m": 0,
        "inline_storage": true
      },
      "quantization_config": {
        "scalar": {
          "type": "int8",
          "quantile": 0.5,
          "always_ram": true,
          "memory": "cold"
        }
      },
      "on_disk": true,
      "memory": "cold",
      "datatype": "float32",
      "multivector_config": {
        "comparator": "max_sim"
      }
    },
    "shard_number": 1,
    "sharding_method": "auto",
    "replication_factor": 1,
    "write_consistency_factor": 1,
    "read_fan_out_factor": 0,
    "read_fan_out_delay_ms": 0,
    "on_disk_payload": true,
    "payload": {
      "memory": "cold"
    },
    "id_tracker": {
      "memory": "cold"
    },
    "sparse_vectors": {
      "property1": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      },
      "property2": {
        "index": {
          "full_scan_threshold": 0,
          "on_disk": true,
          "memory": "cold",
          "datatype": "float32"
        },
        "modifier": "none"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vectors|integer(uint)|true|none|none|
|optimizers_status|[OptimizersStatus](#schemaoptimizersstatus)|true|none|Current state of the collection|
|params|[CollectionParams](#schemacollectionparams)|true|none|none|

<h2 id="tocS_CollectionSnapshotTelemetry">CollectionSnapshotTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemacollectionsnapshottelemetry"></a>
<a id="schema_CollectionSnapshotTelemetry"></a>
<a id="tocScollectionsnapshottelemetry"></a>
<a id="tocscollectionsnapshottelemetry"></a>

```json
{
  "id": "string",
  "running_snapshots": 0,
  "running_snapshot_recovery": 0,
  "total_snapshot_creations": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|running_snapshots|integer(uint) \| null|false|none|none|
|running_snapshot_recovery|integer(uint) \| null|false|none|none|
|total_snapshot_creations|integer(uint) \| null|false|none|none|

<h2 id="tocS_ClusterTelemetry">ClusterTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaclustertelemetry"></a>
<a id="schema_ClusterTelemetry"></a>
<a id="tocSclustertelemetry"></a>
<a id="tocsclustertelemetry"></a>

```json
{
  "enabled": true,
  "status": {
    "number_of_peers": 0,
    "term": 0,
    "commit": 0,
    "pending_operations": 0,
    "role": "Follower",
    "is_voter": true,
    "peer_id": 0,
    "consensus_thread_status": {
      "consensus_thread_status": "working",
      "last_update": "1970-01-01T00:00:00Z"
    }
  },
  "config": {
    "grpc_timeout_ms": 0,
    "p2p": {
      "connection_pool_size": 0
    },
    "consensus": {
      "max_message_queue_size": 0,
      "tick_period_ms": 0,
      "bootstrap_timeout_sec": 0
    }
  },
  "peers": {
    "property1": {
      "uri": "string"
    },
    "property2": {
      "uri": "string"
    }
  },
  "peer_metadata": {
    "property1": {
      "version": "string"
    },
    "property2": {
      "version": "string"
    }
  },
  "metadata": {},
  "resharding_enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|status|[ClusterStatusTelemetry](#schemaclusterstatustelemetry) \| object \| null|false|none|none|
|config|[ClusterConfigTelemetry](#schemaclusterconfigtelemetry) \| object \| null|false|none|none|
|peers|object \| null|false|none|none|
|peer_metadata|object \| null|false|none|none|
|metadata|object \| null|false|none|none|
|resharding_enabled|boolean \| null|false|none|none|

<h2 id="tocS_ClusterStatusTelemetry">ClusterStatusTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatustelemetry"></a>
<a id="schema_ClusterStatusTelemetry"></a>
<a id="tocSclusterstatustelemetry"></a>
<a id="tocsclusterstatustelemetry"></a>

```json
{
  "number_of_peers": 0,
  "term": 0,
  "commit": 0,
  "pending_operations": 0,
  "role": "Follower",
  "is_voter": true,
  "peer_id": 0,
  "consensus_thread_status": {
    "consensus_thread_status": "working",
    "last_update": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number_of_peers|integer(uint)|true|none|none|
|term|integer(uint64)|true|none|none|
|commit|integer(uint64)|true|none|none|
|pending_operations|integer(uint)|true|none|none|
|role|[StateRole](#schemastaterole) \| object \| null|false|none|none|
|is_voter|boolean|true|none|none|
|peer_id|integer(uint64) \| null|false|none|none|
|consensus_thread_status|[ConsensusThreadStatus](#schemaconsensusthreadstatus)|true|none|Information about current consensus thread status|

<h2 id="tocS_ClusterConfigTelemetry">ClusterConfigTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfigtelemetry"></a>
<a id="schema_ClusterConfigTelemetry"></a>
<a id="tocSclusterconfigtelemetry"></a>
<a id="tocsclusterconfigtelemetry"></a>

```json
{
  "grpc_timeout_ms": 0,
  "p2p": {
    "connection_pool_size": 0
  },
  "consensus": {
    "max_message_queue_size": 0,
    "tick_period_ms": 0,
    "bootstrap_timeout_sec": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grpc_timeout_ms|integer(uint64)|true|none|none|
|p2p|[P2pConfigTelemetry](#schemap2pconfigtelemetry)|true|none|none|
|consensus|[ConsensusConfigTelemetry](#schemaconsensusconfigtelemetry)|true|none|none|

<h2 id="tocS_P2pConfigTelemetry">P2pConfigTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemap2pconfigtelemetry"></a>
<a id="schema_P2pConfigTelemetry"></a>
<a id="tocSp2pconfigtelemetry"></a>
<a id="tocsp2pconfigtelemetry"></a>

```json
{
  "connection_pool_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_pool_size|integer(uint)|true|none|none|

<h2 id="tocS_ConsensusConfigTelemetry">ConsensusConfigTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaconsensusconfigtelemetry"></a>
<a id="schema_ConsensusConfigTelemetry"></a>
<a id="tocSconsensusconfigtelemetry"></a>
<a id="tocsconsensusconfigtelemetry"></a>

```json
{
  "max_message_queue_size": 0,
  "tick_period_ms": 0,
  "bootstrap_timeout_sec": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_message_queue_size|integer(uint)|true|none|none|
|tick_period_ms|integer(uint64)|true|none|none|
|bootstrap_timeout_sec|integer(uint64)|true|none|none|

<h2 id="tocS_PeerMetadata">PeerMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapeermetadata"></a>
<a id="schema_PeerMetadata"></a>
<a id="tocSpeermetadata"></a>
<a id="tocspeermetadata"></a>

```json
{
  "version": "string"
}
```

Metadata describing extra properties for each peer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Peer Qdrant version|

<h2 id="tocS_RequestsTelemetry">RequestsTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemarequeststelemetry"></a>
<a id="schema_RequestsTelemetry"></a>
<a id="tocSrequeststelemetry"></a>
<a id="tocsrequeststelemetry"></a>

```json
{
  "rest": {
    "responses": {
      "property1": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      },
      "property2": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      }
    },
    "per_collection_responses": {
      "property1": {
        "property1": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        },
        "property2": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      },
      "property2": {
        "property1": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        },
        "property2": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      }
    }
  },
  "grpc": {
    "responses": {
      "property1": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      },
      "property2": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      }
    },
    "per_collection_responses": {
      "property1": {
        "property1": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        },
        "property2": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      },
      "property2": {
        "property1": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        },
        "property2": {
          "property1": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          },
          "property2": {
            "count": 0,
            "fail_count": 0,
            "avg_duration_micros": 0,
            "min_duration_micros": 0,
            "max_duration_micros": 0,
            "total_duration_micros": 0,
            "last_responded": "1970-01-01T00:00:00Z"
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rest|[WebApiTelemetry](#schemawebapitelemetry)|true|none|none|
|grpc|[GrpcTelemetry](#schemagrpctelemetry)|true|none|none|

<h2 id="tocS_WebApiTelemetry">WebApiTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemawebapitelemetry"></a>
<a id="schema_WebApiTelemetry"></a>
<a id="tocSwebapitelemetry"></a>
<a id="tocswebapitelemetry"></a>

```json
{
  "responses": {
    "property1": {
      "property1": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      }
    },
    "property2": {
      "property1": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      }
    }
  },
  "per_collection_responses": {
    "property1": {
      "property1": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      },
      "property2": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      }
    },
    "property2": {
      "property1": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      },
      "property2": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|object|true|none|none|
|per_collection_responses|object|false|none|none|

<h2 id="tocS_GrpcTelemetry">GrpcTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemagrpctelemetry"></a>
<a id="schema_GrpcTelemetry"></a>
<a id="tocSgrpctelemetry"></a>
<a id="tocsgrpctelemetry"></a>

```json
{
  "responses": {
    "property1": {
      "property1": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      }
    },
    "property2": {
      "property1": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "count": 0,
        "fail_count": 0,
        "avg_duration_micros": 0,
        "min_duration_micros": 0,
        "max_duration_micros": 0,
        "total_duration_micros": 0,
        "last_responded": "1970-01-01T00:00:00Z"
      }
    }
  },
  "per_collection_responses": {
    "property1": {
      "property1": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      },
      "property2": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      }
    },
    "property2": {
      "property1": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      },
      "property2": {
        "property1": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "count": 0,
          "fail_count": 0,
          "avg_duration_micros": 0,
          "min_duration_micros": 0,
          "max_duration_micros": 0,
          "total_duration_micros": 0,
          "last_responded": "1970-01-01T00:00:00Z"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|object|true|none|none|
|per_collection_responses|object|false|none|none|

<h2 id="tocS_MemoryTelemetry">MemoryTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemamemorytelemetry"></a>
<a id="schema_MemoryTelemetry"></a>
<a id="tocSmemorytelemetry"></a>
<a id="tocsmemorytelemetry"></a>

```json
{
  "active_bytes": 0,
  "allocated_bytes": 0,
  "metadata_bytes": 0,
  "resident_bytes": 0,
  "retained_bytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_bytes|integer(uint)|true|none|Total number of bytes in active pages allocated by the application|
|allocated_bytes|integer(uint)|true|none|Total number of bytes allocated by the application|
|metadata_bytes|integer(uint)|true|none|Total number of bytes dedicated to metadata|
|resident_bytes|integer(uint)|true|none|Maximum number of bytes in physically resident data pages mapped|
|retained_bytes|integer(uint)|true|none|Total number of bytes in virtual memory mappings|

<h2 id="tocS_HardwareTelemetry">HardwareTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemahardwaretelemetry"></a>
<a id="schema_HardwareTelemetry"></a>
<a id="tocShardwaretelemetry"></a>
<a id="tocshardwaretelemetry"></a>

```json
{
  "collection_data": {
    "property1": {
      "cpu": 0,
      "payload_io_read": 0,
      "payload_io_write": 0,
      "payload_index_io_read": 0,
      "payload_index_io_write": 0,
      "vector_io_read": 0,
      "vector_io_write": 0
    },
    "property2": {
      "cpu": 0,
      "payload_io_read": 0,
      "payload_io_write": 0,
      "payload_index_io_read": 0,
      "payload_index_io_write": 0,
      "vector_io_read": 0,
      "vector_io_write": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_data|object|true|none|none|

<h2 id="tocS_HardwareUsage">HardwareUsage</h2>
<!-- backwards compatibility -->
<a id="schemahardwareusage"></a>
<a id="schema_HardwareUsage"></a>
<a id="tocShardwareusage"></a>
<a id="tocshardwareusage"></a>

```json
{
  "cpu": 0,
  "payload_io_read": 0,
  "payload_io_write": 0,
  "payload_index_io_read": 0,
  "payload_index_io_write": 0,
  "vector_io_read": 0,
  "vector_io_write": 0
}
```

Usage of the hardware resources, spent to process the request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|integer(uint)|true|none|none|
|payload_io_read|integer(uint)|true|none|none|
|payload_io_write|integer(uint)|true|none|none|
|payload_index_io_read|integer(uint)|true|none|none|
|payload_index_io_write|integer(uint)|true|none|none|
|vector_io_read|integer(uint)|true|none|none|
|vector_io_write|integer(uint)|true|none|none|

<h2 id="tocS_SearchThreadPoolTelemetry">SearchThreadPoolTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemasearchthreadpooltelemetry"></a>
<a id="schema_SearchThreadPoolTelemetry"></a>
<a id="tocSsearchthreadpooltelemetry"></a>
<a id="tocssearchthreadpooltelemetry"></a>

```json
{
  "mode": "string",
  "high_cpu_threads": 0,
  "high_io_threads": 0
}
```

Live snapshot of the adaptive search routing.

`mode` is the runtime currently selected by [`SearchMode`]; `high_cpu_threads` and `high_io_threads` are the blocking-thread budgets of the two underlying runtimes that the adaptive handle routes between.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|true|none|Currently active mode (`high_cpu` or `high_io`).|
|high_cpu_threads|integer(uint)|true|none|Blocking-thread count of the high-CPU runtime.|
|high_io_threads|integer(uint)|true|none|Blocking-thread count of the high-IO runtime.|

<h2 id="tocS_QuotaTelemetry">QuotaTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaquotatelemetry"></a>
<a id="schema_QuotaTelemetry"></a>
<a id="tocSquotatelemetry"></a>
<a id="tocsquotatelemetry"></a>

```json
{
  "config": {
    "enabled": false,
    "max_resident_memory_percent": 1,
    "max_disk_usage_percent": 1,
    "release_margin_percent": 0
  },
  "exceeded": {
    "resident_memory": true,
    "disk_usage": true
  }
}
```

What a node reports about the quota it is enforcing.

Carries the verdict rather than the raw utilization, because the point of reporting it is to know whether this node is currently refusing writes — which depends on the limits as well as the readings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[QuotaConfig](#schemaquotaconfig)|true|none|Cluster-wide limits on node resources.<br><br>An unset limit means the corresponding resource is not capped. Limits are only enforced while `enabled` is true.|
|exceeded|[QuotaExceeded](#schemaquotaexceeded)|true|none|Which of the enforced limits a node is currently refusing work over.<br><br>Reported per resource because they are freed by different actions: disk by deleting or optimizing, memory by unloading. A single flag would not say which one to go and fix.<br><br>`true` outlasts the reading that caused it: a resource that reaches its limit stays flagged until it has fallen a margin below, so that one resting near the limit does not flip the node in and out of service. Expect to see it set while the reported utilization is already back under the configured limit.<br><br>A field is `null` when the node is not enforcing that resource — the quota is disabled, no limit is set for it, or it cannot be measured here. That is deliberately distinct from `false`: a resource that can never trip must not be reported as one that is within its limits, or it invites an alert that can never fire.|

<h2 id="tocS_QuotaConfig">QuotaConfig</h2>
<!-- backwards compatibility -->
<a id="schemaquotaconfig"></a>
<a id="schema_QuotaConfig"></a>
<a id="tocSquotaconfig"></a>
<a id="tocsquotaconfig"></a>

```json
{
  "enabled": false,
  "max_resident_memory_percent": 1,
  "max_disk_usage_percent": 1,
  "release_margin_percent": 0
}
```

Cluster-wide limits on node resources.

An unset limit means the corresponding resource is not capped. Limits are only enforced while `enabled` is true.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the limits below are enforced.|
|max_resident_memory_percent|integer(uint8) \| null|false|none|Reject memory-consuming updates once process resident memory reaches this percentage of total system memory (or of the cgroup limit, if one applies).|
|max_disk_usage_percent|integer(uint8) \| null|false|none|Reject disk-consuming updates once the filesystem hosting the storage directory is filled to this percentage of its capacity.|
|release_margin_percent|integer(uint8) \| null|false|none|How many percentage points below its limit a resource has to fall before this node starts accepting work again.<br><br>Without a margin, a resource resting on its limit crosses it in both directions on the noise between two readings, putting the node in and out of service each time — and restarting a shard recovery with it. Raise it where usage is volatile; `0` disables the margin and releases as soon as usage is back under the limit.<br><br>Unset leaves the built-in default in force, so a config written today does not pin a number that a later release may want to revise.|

<h2 id="tocS_QuotaExceeded">QuotaExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaquotaexceeded"></a>
<a id="schema_QuotaExceeded"></a>
<a id="tocSquotaexceeded"></a>
<a id="tocsquotaexceeded"></a>

```json
{
  "resident_memory": true,
  "disk_usage": true
}
```

Which of the enforced limits a node is currently refusing work over.

Reported per resource because they are freed by different actions: disk by deleting or optimizing, memory by unloading. A single flag would not say which one to go and fix.

`true` outlasts the reading that caused it: a resource that reaches its limit stays flagged until it has fallen a margin below, so that one resting near the limit does not flip the node in and out of service. Expect to see it set while the reported utilization is already back under the configured limit.

A field is `null` when the node is not enforcing that resource — the quota is disabled, no limit is set for it, or it cannot be measured here. That is deliberately distinct from `false`: a resource that can never trip must not be reported as one that is within its limits, or it invites an alert that can never fire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resident_memory|boolean \| null|false|none|none|
|disk_usage|boolean \| null|false|none|none|

<h2 id="tocS_ClusterOperations">ClusterOperations</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperations"></a>
<a id="schema_ClusterOperations"></a>
<a id="tocSclusteroperations"></a>
<a id="tocsclusteroperations"></a>

```json
{
  "move_shard": {
    "shard_id": 0,
    "to_peer_id": 0,
    "from_peer_id": 0,
    "method": "stream_records"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[MoveShardOperation](#schemamoveshardoperation)|false|none|none|
|*anyOf*|[ReplicateShardOperation](#schemareplicateshardoperation)|false|none|none|
|*anyOf*|[AbortTransferOperation](#schemaaborttransferoperation)|false|none|none|
|*anyOf*|[DropReplicaOperation](#schemadropreplicaoperation)|false|none|none|
|*anyOf*|[CreateShardingKeyOperation](#schemacreateshardingkeyoperation)|false|none|none|
|*anyOf*|[DropShardingKeyOperation](#schemadropshardingkeyoperation)|false|none|none|
|*anyOf*|[RestartTransferOperation](#schemarestarttransferoperation)|false|none|none|
|*anyOf*|[StartReshardingOperation](#schemastartreshardingoperation)|false|none|none|
|*anyOf*|[AbortReshardingOperation](#schemaabortreshardingoperation)|false|none|none|
|*anyOf*|[ReplicatePointsOperation](#schemareplicatepointsoperation)|false|none|none|

<h2 id="tocS_MoveShardOperation">MoveShardOperation</h2>
<!-- backwards compatibility -->
<a id="schemamoveshardoperation"></a>
<a id="schema_MoveShardOperation"></a>
<a id="tocSmoveshardoperation"></a>
<a id="tocsmoveshardoperation"></a>

```json
{
  "move_shard": {
    "shard_id": 0,
    "to_peer_id": 0,
    "from_peer_id": 0,
    "method": "stream_records"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|move_shard|[MoveShard](#schemamoveshard)|true|none|none|

<h2 id="tocS_MoveShard">MoveShard</h2>
<!-- backwards compatibility -->
<a id="schemamoveshard"></a>
<a id="schema_MoveShard"></a>
<a id="tocSmoveshard"></a>
<a id="tocsmoveshard"></a>

```json
{
  "shard_id": 0,
  "to_peer_id": 0,
  "from_peer_id": 0,
  "method": "stream_records"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|none|
|to_peer_id|integer(uint64)|true|none|none|
|from_peer_id|integer(uint64)|true|none|none|
|method|[ShardTransferMethod](#schemashardtransfermethod) \| object \| null|false|none|Method for transferring the shard from one node to another|

<h2 id="tocS_ReplicateShardOperation">ReplicateShardOperation</h2>
<!-- backwards compatibility -->
<a id="schemareplicateshardoperation"></a>
<a id="schema_ReplicateShardOperation"></a>
<a id="tocSreplicateshardoperation"></a>
<a id="tocsreplicateshardoperation"></a>

```json
{
  "replicate_shard": {
    "shard_id": 0,
    "to_peer_id": 0,
    "from_peer_id": 0,
    "method": "stream_records"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicate_shard|[ReplicateShard](#schemareplicateshard)|true|none|none|

<h2 id="tocS_ReplicateShard">ReplicateShard</h2>
<!-- backwards compatibility -->
<a id="schemareplicateshard"></a>
<a id="schema_ReplicateShard"></a>
<a id="tocSreplicateshard"></a>
<a id="tocsreplicateshard"></a>

```json
{
  "shard_id": 0,
  "to_peer_id": 0,
  "from_peer_id": 0,
  "method": "stream_records"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|none|
|to_peer_id|integer(uint64)|true|none|none|
|from_peer_id|integer(uint64)|true|none|none|
|method|[ShardTransferMethod](#schemashardtransfermethod) \| object \| null|false|none|Method for transferring the shard from one node to another|

<h2 id="tocS_AbortTransferOperation">AbortTransferOperation</h2>
<!-- backwards compatibility -->
<a id="schemaaborttransferoperation"></a>
<a id="schema_AbortTransferOperation"></a>
<a id="tocSaborttransferoperation"></a>
<a id="tocsaborttransferoperation"></a>

```json
{
  "abort_transfer": {
    "shard_id": 0,
    "to_peer_id": 0,
    "from_peer_id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abort_transfer|[AbortShardTransfer](#schemaabortshardtransfer)|true|none|none|

<h2 id="tocS_AbortShardTransfer">AbortShardTransfer</h2>
<!-- backwards compatibility -->
<a id="schemaabortshardtransfer"></a>
<a id="schema_AbortShardTransfer"></a>
<a id="tocSabortshardtransfer"></a>
<a id="tocsabortshardtransfer"></a>

```json
{
  "shard_id": 0,
  "to_peer_id": 0,
  "from_peer_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|none|
|to_peer_id|integer(uint64)|true|none|none|
|from_peer_id|integer(uint64)|true|none|none|

<h2 id="tocS_DropReplicaOperation">DropReplicaOperation</h2>
<!-- backwards compatibility -->
<a id="schemadropreplicaoperation"></a>
<a id="schema_DropReplicaOperation"></a>
<a id="tocSdropreplicaoperation"></a>
<a id="tocsdropreplicaoperation"></a>

```json
{
  "drop_replica": {
    "shard_id": 0,
    "peer_id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drop_replica|[Replica](#schemareplica)|true|none|none|

<h2 id="tocS_Replica">Replica</h2>
<!-- backwards compatibility -->
<a id="schemareplica"></a>
<a id="schema_Replica"></a>
<a id="tocSreplica"></a>
<a id="tocsreplica"></a>

```json
{
  "shard_id": 0,
  "peer_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|none|
|peer_id|integer(uint64)|true|none|none|

<h2 id="tocS_CreateShardingKeyOperation">CreateShardingKeyOperation</h2>
<!-- backwards compatibility -->
<a id="schemacreateshardingkeyoperation"></a>
<a id="schema_CreateShardingKeyOperation"></a>
<a id="tocScreateshardingkeyoperation"></a>
<a id="tocscreateshardingkeyoperation"></a>

```json
{
  "create_sharding_key": {
    "shard_key": "region_1",
    "shards_number": 1,
    "replication_factor": 1,
    "placement": [
      0
    ],
    "initial_state": "Active"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_sharding_key|[CreateShardingKey](#schemacreateshardingkey)|true|none|none|

<h2 id="tocS_CreateShardingKey">CreateShardingKey</h2>
<!-- backwards compatibility -->
<a id="schemacreateshardingkey"></a>
<a id="schema_CreateShardingKey"></a>
<a id="tocScreateshardingkey"></a>
<a id="tocscreateshardingkey"></a>

```json
{
  "shard_key": "region_1",
  "shards_number": 1,
  "replication_factor": 1,
  "placement": [
    0
  ],
  "initial_state": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKey](#schemashardkey)|true|none|none|
|shards_number|integer(uint32) \| null|false|none|How many shards to create for this key If not specified, will use the default value from config|
|replication_factor|integer(uint32) \| null|false|none|How many replicas to create for each shard If not specified, will use the default value from config|
|placement|[integer(uint64)]|false|none|Placement of shards for this key List of peer ids, that can be used to place shards for this key If not specified, will be randomly placed among all peers|
|initial_state|[ReplicaState](#schemareplicastate) \| object \| null|false|none|Initial state of the shards for this key If not specified, will be `Initializing` first and then `Active` Warning: do not change this unless you know what you are doing|

<h2 id="tocS_DropShardingKeyOperation">DropShardingKeyOperation</h2>
<!-- backwards compatibility -->
<a id="schemadropshardingkeyoperation"></a>
<a id="schema_DropShardingKeyOperation"></a>
<a id="tocSdropshardingkeyoperation"></a>
<a id="tocsdropshardingkeyoperation"></a>

```json
{
  "drop_sharding_key": {
    "shard_key": "region_1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drop_sharding_key|[DropShardingKey](#schemadropshardingkey)|true|none|none|

<h2 id="tocS_DropShardingKey">DropShardingKey</h2>
<!-- backwards compatibility -->
<a id="schemadropshardingkey"></a>
<a id="schema_DropShardingKey"></a>
<a id="tocSdropshardingkey"></a>
<a id="tocsdropshardingkey"></a>

```json
{
  "shard_key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKey](#schemashardkey)|true|none|none|

<h2 id="tocS_RestartTransferOperation">RestartTransferOperation</h2>
<!-- backwards compatibility -->
<a id="schemarestarttransferoperation"></a>
<a id="schema_RestartTransferOperation"></a>
<a id="tocSrestarttransferoperation"></a>
<a id="tocsrestarttransferoperation"></a>

```json
{
  "restart_transfer": {
    "shard_id": 0,
    "from_peer_id": 0,
    "to_peer_id": 0,
    "method": "stream_records"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restart_transfer|[RestartTransfer](#schemarestarttransfer)|true|none|none|

<h2 id="tocS_RestartTransfer">RestartTransfer</h2>
<!-- backwards compatibility -->
<a id="schemarestarttransfer"></a>
<a id="schema_RestartTransfer"></a>
<a id="tocSrestarttransfer"></a>
<a id="tocsrestarttransfer"></a>

```json
{
  "shard_id": 0,
  "from_peer_id": 0,
  "to_peer_id": 0,
  "method": "stream_records"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_id|integer(uint32)|true|none|none|
|from_peer_id|integer(uint64)|true|none|none|
|to_peer_id|integer(uint64)|true|none|none|
|method|[ShardTransferMethod](#schemashardtransfermethod)|true|none|Methods for transferring a shard from one node to another.<br><br>- `stream_records` - Stream all shard records in batches until the whole shard is transferred.<br><br>- `snapshot` - Snapshot the shard, transfer and restore it on the receiver.<br><br>- `wal_delta` - Attempt to transfer shard difference by WAL delta.<br><br>- `resharding_stream_records` - Shard transfer for resharding: stream all records in batches until all points are transferred.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|stream_records|
|method|snapshot|
|method|wal_delta|
|method|resharding_stream_records|

<h2 id="tocS_StartReshardingOperation">StartReshardingOperation</h2>
<!-- backwards compatibility -->
<a id="schemastartreshardingoperation"></a>
<a id="schema_StartReshardingOperation"></a>
<a id="tocSstartreshardingoperation"></a>
<a id="tocsstartreshardingoperation"></a>

```json
{
  "start_resharding": {
    "direction": "up",
    "peer_id": 0,
    "shard_key": "region_1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_resharding|[StartResharding](#schemastartresharding)|true|none|none|

<h2 id="tocS_StartResharding">StartResharding</h2>
<!-- backwards compatibility -->
<a id="schemastartresharding"></a>
<a id="schema_StartResharding"></a>
<a id="tocSstartresharding"></a>
<a id="tocsstartresharding"></a>

```json
{
  "direction": "up",
  "peer_id": 0,
  "shard_key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|[ReshardingDirection](#schemareshardingdirection)|true|none|Resharding direction, scale up or down in number of shards<br><br>- `up` - Scale up, add a new shard<br><br>- `down` - Scale down, remove a shard|
|peer_id|integer(uint64) \| null|false|none|Peer to create the new shard on, or to migrate points away from when scaling down. If not specified, the least loaded peer is picked when scaling up, a peer holding the removed shard when scaling down.|
|shard_key|[ShardKey](#schemashardkey) \| object \| null|false|none|Custom shard key to reshard, must already exist. If not specified, shards without a shard key are resharded.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|up|
|direction|down|

<h2 id="tocS_AbortReshardingOperation">AbortReshardingOperation</h2>
<!-- backwards compatibility -->
<a id="schemaabortreshardingoperation"></a>
<a id="schema_AbortReshardingOperation"></a>
<a id="tocSabortreshardingoperation"></a>
<a id="tocsabortreshardingoperation"></a>

```json
{
  "abort_resharding": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abort_resharding|[AbortResharding](#schemaabortresharding)|true|none|none|

<h2 id="tocS_AbortResharding">AbortResharding</h2>
<!-- backwards compatibility -->
<a id="schemaabortresharding"></a>
<a id="schema_AbortResharding"></a>
<a id="tocSabortresharding"></a>
<a id="tocsabortresharding"></a>

```json
{}
```

<h2 id="tocS_ReplicatePointsOperation">ReplicatePointsOperation</h2>
<!-- backwards compatibility -->
<a id="schemareplicatepointsoperation"></a>
<a id="schema_ReplicatePointsOperation"></a>
<a id="tocSreplicatepointsoperation"></a>
<a id="tocsreplicatepointsoperation"></a>

```json
{
  "replicate_points": {
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "from_shard_key": "region_1",
    "to_shard_key": "region_1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicate_points|[ReplicatePoints](#schemareplicatepoints)|true|none|none|

<h2 id="tocS_ReplicatePoints">ReplicatePoints</h2>
<!-- backwards compatibility -->
<a id="schemareplicatepoints"></a>
<a id="schema_ReplicatePoints"></a>
<a id="tocSreplicatepoints"></a>
<a id="tocsreplicatepoints"></a>

```json
{
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "from_shard_key": "region_1",
  "to_shard_key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Filter](#schemafilter) \| object \| null|false|none|none|
|from_shard_key|[ShardKey](#schemashardkey)|true|none|none|
|to_shard_key|[ShardKey](#schemashardkey)|true|none|none|

<h2 id="tocS_SnapshotRecover">SnapshotRecover</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotrecover"></a>
<a id="schema_SnapshotRecover"></a>
<a id="tocSsnapshotrecover"></a>
<a id="tocssnapshotrecover"></a>

```json
{
  "location": "http://example.com",
  "priority": null,
  "checksum": null,
  "api_key": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string(uri)|true|none|Examples: - URL `http://localhost:8080/collections/my_collection/snapshots/my_snapshot` - Local path `file:///qdrant/snapshots/test_collection-2022-08-04-10-49-10.snapshot`|
|priority|[SnapshotPriority](#schemasnapshotpriority) \| object \| null|false|none|Defines which data should be used as a source of truth if there are other replicas in the cluster. If set to `Snapshot`, the snapshot will be used as a source of truth, and the current state will be overwritten. If set to `Replica`, the current state will be used as a source of truth, and after recovery it will be synchronized from other replicas.|
|checksum|string \| null|false|none|Optional SHA256 checksum to verify snapshot integrity before recovery.|
|api_key|string \| null|false|none|Optional API key used when fetching the snapshot from a remote URL.|

<h2 id="tocS_SnapshotPriority">SnapshotPriority</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotpriority"></a>
<a id="schema_SnapshotPriority"></a>
<a id="tocSsnapshotpriority"></a>
<a id="tocssnapshotpriority"></a>

```json
"no_sync"
```

Defines source of truth for snapshot recovery:

`NoSync` means - restore snapshot without *any* additional synchronization. `Snapshot` means - prefer snapshot data over the current state. `Replica` means - prefer existing data over the snapshot.

<h2 id="tocS_CollectionsAliasesResponse">CollectionsAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectionsaliasesresponse"></a>
<a id="schema_CollectionsAliasesResponse"></a>
<a id="tocScollectionsaliasesresponse"></a>
<a id="tocscollectionsaliasesresponse"></a>

```json
{
  "aliases": [
    {
      "alias_name": "blogs-title",
      "collection_name": "arivx-title"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[[AliasDescription](#schemaaliasdescription)]|true|none|none|

<h2 id="tocS_AliasDescription">AliasDescription</h2>
<!-- backwards compatibility -->
<a id="schemaaliasdescription"></a>
<a id="schema_AliasDescription"></a>
<a id="tocSaliasdescription"></a>
<a id="tocsaliasdescription"></a>

```json
{
  "alias_name": "blogs-title",
  "collection_name": "arivx-title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias_name|string|true|none|none|
|collection_name|string|true|none|none|

<h2 id="tocS_WriteOrdering">WriteOrdering</h2>
<!-- backwards compatibility -->
<a id="schemawriteordering"></a>
<a id="schema_WriteOrdering"></a>
<a id="tocSwriteordering"></a>
<a id="tocswriteordering"></a>

```json
"weak"
```

Defines write ordering guarantees for collection operations

* `weak` - write operations may be reordered, works faster, default

* `medium` - write operations go through dynamically selected leader, may be inconsistent for a short period of time in case of leader change

* `strong` - Write operations go through the permanent leader, consistent, but may be unavailable if leader is down

<h2 id="tocS_ReadConsistency">ReadConsistency</h2>
<!-- backwards compatibility -->
<a id="schemareadconsistency"></a>
<a id="schema_ReadConsistency"></a>
<a id="tocSreadconsistency"></a>
<a id="tocsreadconsistency"></a>

```json
1
```

Read consistency parameter

Defines how many replicas should be queried to get the result

* `N` - send N random request and return points, which present on all of them

* `majority` - send N/2+1 random request and return points, which present on all of them

* `quorum` - send requests to all nodes and return points which present on majority of them

* `all` - send requests to all nodes and return points which present on all of them

Default value is `Factor(1)`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|integer(uint)|false|none|none|
|*anyOf*|[ReadConsistencyType](#schemareadconsistencytype)|false|none|* `majority` - send N/2+1 random request and return points, which present on all of them<br><br>* `quorum` - send requests to all nodes and return points which present on majority of nodes<br><br>* `all` - send requests to all nodes and return points which present on all nodes|

#### Enumerated Values

|Property|Value|
|---|---|
|*anyOf*|majority|
|*anyOf*|quorum|
|*anyOf*|all|

<h2 id="tocS_ReadConsistencyType">ReadConsistencyType</h2>
<!-- backwards compatibility -->
<a id="schemareadconsistencytype"></a>
<a id="schema_ReadConsistencyType"></a>
<a id="tocSreadconsistencytype"></a>
<a id="tocsreadconsistencytype"></a>

```json
"majority"
```

* `majority` - send N/2+1 random request and return points, which present on all of them

* `quorum` - send requests to all nodes and return points which present on majority of nodes

* `all` - send requests to all nodes and return points which present on all nodes

<h2 id="tocS_UpdateVectors">UpdateVectors</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevectors"></a>
<a id="schema_UpdateVectors"></a>
<a id="tocSupdatevectors"></a>
<a id="tocsupdatevectors"></a>

```json
{
  "points": [
    {
      "id": 42,
      "vector": [
        0.875,
        0.140625,
        0.897599995136261
      ]
    }
  ],
  "shard_key": "region_1",
  "update_filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|[[PointVectors](#schemapointvectors)]|true|none|Points with named vectors|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|
|update_filter|[Filter](#schemafilter) \| object \| null|false|none|none|

<h2 id="tocS_PointVectors">PointVectors</h2>
<!-- backwards compatibility -->
<a id="schemapointvectors"></a>
<a id="schema_PointVectors"></a>
<a id="tocSpointvectors"></a>
<a id="tocspointvectors"></a>

```json
{
  "id": 42,
  "vector": [
    0.875,
    0.140625,
    0.897599995136261
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ExtendedPointId](#schemaextendedpointid)|true|none|Type, used for specifying point ID in user interface|
|vector|[VectorStruct](#schemavectorstruct)|true|none|Full vector data per point separator with single and multiple vector modes|

<h2 id="tocS_DeleteVectors">DeleteVectors</h2>
<!-- backwards compatibility -->
<a id="schemadeletevectors"></a>
<a id="schema_DeleteVectors"></a>
<a id="tocSdeletevectors"></a>
<a id="tocsdeletevectors"></a>

```json
{
  "points": [
    42
  ],
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "vector": [
    "string"
  ],
  "shard_key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|[[ExtendedPointId](#schemaextendedpointid)]|false|none|Deletes values from each point in this list|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Deletes values from points that satisfy this filter condition|
|vector|[string]|true|none|Vector names|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|

<h2 id="tocS_PointGroup">PointGroup</h2>
<!-- backwards compatibility -->
<a id="schemapointgroup"></a>
<a id="schema_PointGroup"></a>
<a id="tocSpointgroup"></a>
<a id="tocspointgroup"></a>

```json
{
  "hits": [
    {
      "id": 42,
      "version": 3,
      "score": 0.75,
      "payload": {
        "city": "London",
        "color": "green"
      },
      "vector": [
        0.875,
        0.140625,
        0.897599995136261
      ],
      "shard_key": "region_1",
      "order_value": 42
    }
  ],
  "id": "string",
  "lookup": {
    "id": 42,
    "payload": {
      "city": "London",
      "color": "green"
    },
    "vector": [
      0.875,
      0.140625,
      0.897599995136261
    ],
    "shard_key": "region_1",
    "order_value": 42
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[ScoredPoint](#schemascoredpoint)]|true|none|Scored points that have the same value of the group_by key|
|id|[GroupId](#schemagroupid)|true|none|Value of the group_by key, shared across all the hits in the group|
|lookup|[Record](#schemarecord) \| object \| null|false|none|Record that has been looked up using the group id|

<h2 id="tocS_GroupId">GroupId</h2>
<!-- backwards compatibility -->
<a id="schemagroupid"></a>
<a id="schema_GroupId"></a>
<a id="tocSgroupid"></a>
<a id="tocsgroupid"></a>

```json
"string"
```

Value of the group_by key, shared across all the hits in the group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|integer(uint64)|false|none|none|
|*anyOf*|integer(int64)|false|none|none|

<h2 id="tocS_GroupsResult">GroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemagroupsresult"></a>
<a id="schema_GroupsResult"></a>
<a id="tocSgroupsresult"></a>
<a id="tocsgroupsresult"></a>

```json
{
  "groups": [
    {
      "hits": [
        {
          "id": 42,
          "version": 3,
          "score": 0.75,
          "payload": {
            "city": "London",
            "color": "green"
          },
          "vector": [
            0.875,
            0.140625,
            0.897599995136261
          ],
          "shard_key": "region_1",
          "order_value": 42
        }
      ],
      "id": "string",
      "lookup": {
        "id": 42,
        "payload": {
          "city": "London",
          "color": "green"
        },
        "vector": [
          0.875,
          0.140625,
          0.897599995136261
        ],
        "shard_key": "region_1",
        "order_value": 42
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[PointGroup](#schemapointgroup)]|true|none|none|

<h2 id="tocS_UpdateOperations">UpdateOperations</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoperations"></a>
<a id="schema_UpdateOperations"></a>
<a id="tocSupdateoperations"></a>
<a id="tocsupdateoperations"></a>

```json
{
  "operations": [
    {
      "upsert": {
        "batch": {
          "ids": [
            42
          ],
          "vectors": [
            [
              0
            ]
          ],
          "payloads": [
            {
              "city": "London",
              "color": "green"
            }
          ]
        },
        "shard_key": "region_1",
        "update_filter": {
          "should": {},
          "min_should": {},
          "must": {},
          "must_not": {}
        },
        "update_mode": "upsert"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[UpdateOperation](#schemaupdateoperation)]|true|none|none|

<h2 id="tocS_UpdateOperation">UpdateOperation</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoperation"></a>
<a id="schema_UpdateOperation"></a>
<a id="tocSupdateoperation"></a>
<a id="tocsupdateoperation"></a>

```json
{
  "upsert": {
    "batch": {
      "ids": [
        42
      ],
      "vectors": [
        [
          0
        ]
      ],
      "payloads": [
        {
          "city": "London",
          "color": "green"
        }
      ]
    },
    "shard_key": "region_1",
    "update_filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "update_mode": "upsert"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[UpsertOperation](#schemaupsertoperation)|false|none|none|
|*anyOf*|[DeleteOperation](#schemadeleteoperation)|false|none|none|
|*anyOf*|[SetPayloadOperation](#schemasetpayloadoperation)|false|none|none|
|*anyOf*|[OverwritePayloadOperation](#schemaoverwritepayloadoperation)|false|none|none|
|*anyOf*|[DeletePayloadOperation](#schemadeletepayloadoperation)|false|none|none|
|*anyOf*|[ClearPayloadOperation](#schemaclearpayloadoperation)|false|none|none|
|*anyOf*|[UpdateVectorsOperation](#schemaupdatevectorsoperation)|false|none|none|
|*anyOf*|[DeleteVectorsOperation](#schemadeletevectorsoperation)|false|none|none|

<h2 id="tocS_UpsertOperation">UpsertOperation</h2>
<!-- backwards compatibility -->
<a id="schemaupsertoperation"></a>
<a id="schema_UpsertOperation"></a>
<a id="tocSupsertoperation"></a>
<a id="tocsupsertoperation"></a>

```json
{
  "upsert": {
    "batch": {
      "ids": [
        42
      ],
      "vectors": [
        [
          0
        ]
      ],
      "payloads": [
        {
          "city": "London",
          "color": "green"
        }
      ]
    },
    "shard_key": "region_1",
    "update_filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "update_mode": "upsert"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upsert|[PointInsertOperations](#schemapointinsertoperations)|true|none|none|

<h2 id="tocS_DeleteOperation">DeleteOperation</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoperation"></a>
<a id="schema_DeleteOperation"></a>
<a id="tocSdeleteoperation"></a>
<a id="tocsdeleteoperation"></a>

```json
{
  "delete": {
    "points": [
      42
    ],
    "shard_key": "region_1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|[PointsSelector](#schemapointsselector)|true|none|none|

<h2 id="tocS_SetPayloadOperation">SetPayloadOperation</h2>
<!-- backwards compatibility -->
<a id="schemasetpayloadoperation"></a>
<a id="schema_SetPayloadOperation"></a>
<a id="tocSsetpayloadoperation"></a>
<a id="tocssetpayloadoperation"></a>

```json
{
  "set_payload": {
    "payload": {
      "city": "London",
      "color": "green"
    },
    "points": [
      42
    ],
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "shard_key": "region_1",
    "key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|set_payload|[SetPayload](#schemasetpayload)|true|none|This data structure is used in API interface and applied across multiple shards|

<h2 id="tocS_OverwritePayloadOperation">OverwritePayloadOperation</h2>
<!-- backwards compatibility -->
<a id="schemaoverwritepayloadoperation"></a>
<a id="schema_OverwritePayloadOperation"></a>
<a id="tocSoverwritepayloadoperation"></a>
<a id="tocsoverwritepayloadoperation"></a>

```json
{
  "overwrite_payload": {
    "payload": {
      "city": "London",
      "color": "green"
    },
    "points": [
      42
    ],
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "shard_key": "region_1",
    "key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overwrite_payload|[SetPayload](#schemasetpayload)|true|none|This data structure is used in API interface and applied across multiple shards|

<h2 id="tocS_DeletePayloadOperation">DeletePayloadOperation</h2>
<!-- backwards compatibility -->
<a id="schemadeletepayloadoperation"></a>
<a id="schema_DeletePayloadOperation"></a>
<a id="tocSdeletepayloadoperation"></a>
<a id="tocsdeletepayloadoperation"></a>

```json
{
  "delete_payload": {
    "keys": [
      "string"
    ],
    "points": [
      42
    ],
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "shard_key": "region_1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete_payload|[DeletePayload](#schemadeletepayload)|true|none|This data structure is used in API interface and applied across multiple shards|

<h2 id="tocS_ClearPayloadOperation">ClearPayloadOperation</h2>
<!-- backwards compatibility -->
<a id="schemaclearpayloadoperation"></a>
<a id="schema_ClearPayloadOperation"></a>
<a id="tocSclearpayloadoperation"></a>
<a id="tocsclearpayloadoperation"></a>

```json
{
  "clear_payload": {
    "points": [
      42
    ],
    "shard_key": "region_1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clear_payload|[PointsSelector](#schemapointsselector)|true|none|none|

<h2 id="tocS_UpdateVectorsOperation">UpdateVectorsOperation</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevectorsoperation"></a>
<a id="schema_UpdateVectorsOperation"></a>
<a id="tocSupdatevectorsoperation"></a>
<a id="tocsupdatevectorsoperation"></a>

```json
{
  "update_vectors": {
    "points": [
      {
        "id": 42,
        "vector": [
          0.875,
          0.140625,
          0.897599995136261
        ]
      }
    ],
    "shard_key": "region_1",
    "update_filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update_vectors|[UpdateVectors](#schemaupdatevectors)|true|none|none|

<h2 id="tocS_DeleteVectorsOperation">DeleteVectorsOperation</h2>
<!-- backwards compatibility -->
<a id="schemadeletevectorsoperation"></a>
<a id="schema_DeleteVectorsOperation"></a>
<a id="tocSdeletevectorsoperation"></a>
<a id="tocsdeletevectorsoperation"></a>

```json
{
  "delete_vectors": {
    "points": [
      42
    ],
    "filter": {
      "should": {},
      "min_should": {},
      "must": {},
      "must_not": {}
    },
    "vector": [
      "string"
    ],
    "shard_key": "region_1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete_vectors|[DeleteVectors](#schemadeletevectors)|true|none|none|

<h2 id="tocS_ShardSnapshotRecover">ShardSnapshotRecover</h2>
<!-- backwards compatibility -->
<a id="schemashardsnapshotrecover"></a>
<a id="schema_ShardSnapshotRecover"></a>
<a id="tocSshardsnapshotrecover"></a>
<a id="tocsshardsnapshotrecover"></a>

```json
{
  "location": "http://example.com",
  "priority": null,
  "checksum": null,
  "api_key": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[ShardSnapshotLocation](#schemashardsnapshotlocation)|true|none|none|
|priority|[SnapshotPriority](#schemasnapshotpriority) \| object \| null|false|none|none|
|checksum|string \| null|false|none|Optional SHA256 checksum to verify snapshot integrity before recovery.|
|api_key|string \| null|false|none|Optional API key used when fetching the snapshot from a remote URL.|

<h2 id="tocS_ShardSnapshotLocation">ShardSnapshotLocation</h2>
<!-- backwards compatibility -->
<a id="schemashardsnapshotlocation"></a>
<a id="schema_ShardSnapshotLocation"></a>
<a id="tocSshardsnapshotlocation"></a>
<a id="tocsshardsnapshotlocation"></a>

```json
"http://example.com"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string(uri)|false|none|none|
|*anyOf*|string|false|none|none|

<h2 id="tocS_VersionInfo">VersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaversioninfo"></a>
<a id="schema_VersionInfo"></a>
<a id="tocSversioninfo"></a>
<a id="tocsversioninfo"></a>

```json
{
  "title": "string",
  "version": "string",
  "commit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|version|string|true|none|none|
|commit|string \| null|false|none|none|

<h2 id="tocS_CollectionExistence">CollectionExistence</h2>
<!-- backwards compatibility -->
<a id="schemacollectionexistence"></a>
<a id="schema_CollectionExistence"></a>
<a id="tocScollectionexistence"></a>
<a id="tocscollectionexistence"></a>

```json
{
  "exists": true
}
```

State of existence of a collection, true = exists, false = does not exist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exists|boolean|true|none|none|

<h2 id="tocS_QueryRequest">QueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequest"></a>
<a id="schema_QueryRequest"></a>
<a id="tocSqueryrequest"></a>
<a id="tocsqueryrequest"></a>

```json
{
  "shard_key": "region_1",
  "prefetch": null,
  "query": [
    0
  ],
  "using": "string",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "params": {
    "hnsw_ef": 1,
    "exact": false,
    "quantization": {
      "ignore": false,
      "rescore": true,
      "oversampling": 1
    },
    "indexed_only": false,
    "acorn": {
      "enable": false,
      "max_selectivity": 0
    },
    "idf": "global"
  },
  "score_threshold": 0,
  "limit": 1,
  "offset": 0,
  "with_vector": true,
  "with_payload": true,
  "lookup_from": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|
|prefetch|[Prefetch](#schemaprefetch) \| [[Prefetch](#schemaprefetch)] \| object \| null|false|none|Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es).|
|query|[QueryInterface](#schemaqueryinterface) \| object \| null|false|none|Query to perform. If missing without prefetches, returns points ordered by their IDs.|
|using|string \| null|false|none|Define which vector name to use for querying. If missing, the default vector is used. For a `text` query, the payload field whose text index to search.|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Filter conditions - return only those points that satisfy the specified conditions.|
|params|[SearchParams](#schemasearchparams) \| object \| null|false|none|Search params for when there is no prefetch|
|score_threshold|number(float) \| null|false|none|Return points with scores better than this threshold.|
|limit|integer(uint) \| null|false|none|Max number of points to return. Default is 10.|
|offset|integer(uint) \| null|false|none|Offset of the result. Skip this many points. Default is 0|
|with_vector|[WithVector](#schemawithvector) \| object \| null|false|none|Options for specifying which vectors to include into the response. Default is false.|
|with_payload|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|none|Options for specifying which payload to include or not. Default is false.|
|lookup_from|[LookupLocation](#schemalookuplocation) \| object \| null|false|none|The location to use for IDs lookup, if not specified - use the current collection and the 'using' vector Note: the other collection vectors should have the same vector size as the 'using' vector in the current collection|

<h2 id="tocS_Prefetch">Prefetch</h2>
<!-- backwards compatibility -->
<a id="schemaprefetch"></a>
<a id="schema_Prefetch"></a>
<a id="tocSprefetch"></a>
<a id="tocsprefetch"></a>

```json
{
  "prefetch": null,
  "query": [
    0
  ],
  "using": "string",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "params": {
    "hnsw_ef": 1,
    "exact": false,
    "quantization": {
      "ignore": false,
      "rescore": true,
      "oversampling": 1
    },
    "indexed_only": false,
    "acorn": {
      "enable": false,
      "max_selectivity": 0
    },
    "idf": "global"
  },
  "score_threshold": 0,
  "limit": 1,
  "lookup_from": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefetch|[Prefetch](#schemaprefetch) \| [[Prefetch](#schemaprefetch)] \| object \| null|false|none|Sub-requests to perform first. If present, the query will be performed on the results of the prefetches.|
|query|[QueryInterface](#schemaqueryinterface) \| object \| null|false|none|Query to perform. If missing without prefetches, returns points ordered by their IDs.|
|using|string \| null|false|none|Define which vector name to use for querying. If missing, the default vector is used. For a `text` query, the payload field whose text index to search.|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Filter conditions - return only those points that satisfy the specified conditions.|
|params|[SearchParams](#schemasearchparams) \| object \| null|false|none|Search params for when there is no prefetch|
|score_threshold|number(float) \| null|false|none|Return points with scores better than this threshold.|
|limit|integer(uint) \| null|false|none|Max number of points to return. Default is 10.|
|lookup_from|[LookupLocation](#schemalookuplocation) \| object \| null|false|none|The location to use for IDs lookup, if not specified - use the current collection and the 'using' vector Note: the other collection vectors should have the same vector size as the 'using' vector in the current collection|

<h2 id="tocS_QueryInterface">QueryInterface</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinterface"></a>
<a id="schema_QueryInterface"></a>
<a id="tocSqueryinterface"></a>
<a id="tocsqueryinterface"></a>

```json
[
  0
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[VectorInput](#schemavectorinput)|false|none|none|
|*anyOf*|[Query](#schemaquery)|false|none|none|

<h2 id="tocS_VectorInput">VectorInput</h2>
<!-- backwards compatibility -->
<a id="schemavectorinput"></a>
<a id="schema_VectorInput"></a>
<a id="tocSvectorinput"></a>
<a id="tocsvectorinput"></a>

```json
[
  0
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[number(float)]|false|none|none|
|*anyOf*|[SparseVector](#schemasparsevector)|false|none|Sparse vector structure|
|*anyOf*|[[number(float)]]|false|none|none|
|*anyOf*|[ExtendedPointId](#schemaextendedpointid)|false|none|Type, used for specifying point ID in user interface|
|*anyOf*|[Document](#schemadocument)|false|none|WARN: Work-in-progress, unimplemented<br><br>Text document for embedding. Requires inference infrastructure, unimplemented.|
|*anyOf*|[Image](#schemaimage)|false|none|WARN: Work-in-progress, unimplemented<br><br>Image object for embedding. Requires inference infrastructure, unimplemented.|
|*anyOf*|[InferenceObject](#schemainferenceobject)|false|none|WARN: Work-in-progress, unimplemented<br><br>Custom object for embedding. Requires inference infrastructure, unimplemented.|

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "nearest": [
    0
  ],
  "mmr": {
    "diversity": 0,
    "candidates_limit": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[NearestQuery](#schemanearestquery)|false|none|none|
|*anyOf*|[RecommendQuery](#schemarecommendquery)|false|none|none|
|*anyOf*|[DiscoverQuery](#schemadiscoverquery)|false|none|none|
|*anyOf*|[ContextQuery](#schemacontextquery)|false|none|none|
|*anyOf*|[OrderByQuery](#schemaorderbyquery)|false|none|none|
|*anyOf*|[FusionQuery](#schemafusionquery)|false|none|none|
|*anyOf*|[RrfQuery](#schemarrfquery)|false|none|none|
|*anyOf*|[FormulaQuery](#schemaformulaquery)|false|none|none|
|*anyOf*|[SampleQuery](#schemasamplequery)|false|none|none|
|*anyOf*|[RelevanceFeedbackQuery](#schemarelevancefeedbackquery)|false|none|none|
|*anyOf*|[TextQuery](#schematextquery)|false|none|Rank by BM25 over the text index of the payload field named by `using`, which must have `scoring` set. A point scores when it holds any of the query's terms: required or excluded terms belong in the request's `filter`.|

<h2 id="tocS_NearestQuery">NearestQuery</h2>
<!-- backwards compatibility -->
<a id="schemanearestquery"></a>
<a id="schema_NearestQuery"></a>
<a id="tocSnearestquery"></a>
<a id="tocsnearestquery"></a>

```json
{
  "nearest": [
    0
  ],
  "mmr": {
    "diversity": 0,
    "candidates_limit": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nearest|[VectorInput](#schemavectorinput)|true|none|none|
|mmr|[Mmr](#schemammr) \| object \| null|false|none|Perform MMR (Maximal Marginal Relevance) reranking after search, using the same vector in this query to calculate relevance.|

<h2 id="tocS_Mmr">Mmr</h2>
<!-- backwards compatibility -->
<a id="schemammr"></a>
<a id="schema_Mmr"></a>
<a id="tocSmmr"></a>
<a id="tocsmmr"></a>

```json
{
  "diversity": 0,
  "candidates_limit": 0
}
```

Maximal Marginal Relevance (MMR) algorithm for re-ranking the points.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diversity|number(float) \| null|false|none|Tunable parameter for the MMR algorithm. Determines the balance between diversity and relevance.<br><br>A higher value favors diversity (dissimilarity to selected results), while a lower value favors relevance (similarity to the query vector).<br><br>Must be in the range [0, 1]. Default value is 0.5.|
|candidates_limit|integer(uint) \| null|false|none|The maximum number of candidates to consider for re-ranking.<br><br>If not specified, the `limit` value is used.|

<h2 id="tocS_RecommendQuery">RecommendQuery</h2>
<!-- backwards compatibility -->
<a id="schemarecommendquery"></a>
<a id="schema_RecommendQuery"></a>
<a id="tocSrecommendquery"></a>
<a id="tocsrecommendquery"></a>

```json
{
  "recommend": {
    "positive": [
      [
        0
      ]
    ],
    "negative": [
      [
        0
      ]
    ],
    "strategy": "average_vector"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommend|[RecommendInput](#schemarecommendinput)|true|none|none|

<h2 id="tocS_RecommendInput">RecommendInput</h2>
<!-- backwards compatibility -->
<a id="schemarecommendinput"></a>
<a id="schema_RecommendInput"></a>
<a id="tocSrecommendinput"></a>
<a id="tocsrecommendinput"></a>

```json
{
  "positive": [
    [
      0
    ]
  ],
  "negative": [
    [
      0
    ]
  ],
  "strategy": "average_vector"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|positive|[[VectorInput](#schemavectorinput)]|false|none|Look for vectors closest to the vectors from these points|
|negative|[[VectorInput](#schemavectorinput)]|false|none|Try to avoid vectors like the vector from these points|
|strategy|[RecommendStrategy](#schemarecommendstrategy) \| object \| null|false|none|How to use the provided vectors to find the results|

<h2 id="tocS_RecommendStrategy">RecommendStrategy</h2>
<!-- backwards compatibility -->
<a id="schemarecommendstrategy"></a>
<a id="schema_RecommendStrategy"></a>
<a id="tocSrecommendstrategy"></a>
<a id="tocsrecommendstrategy"></a>

```json
"average_vector"
```

How to use positive and negative examples to find the results, default is `average_vector`:

* `average_vector` - Average positive and negative vectors and create a single query with the formula `query = avg_pos + avg_pos - avg_neg`. Then performs normal search.

* `best_score` - Uses custom search objective. Each candidate is compared against all examples, its score is then chosen from the `max(max_pos_score, max_neg_score)`. If the `max_neg_score` is chosen then it is squared and negated, otherwise it is just the `max_pos_score`.

* `sum_scores` - Uses custom search objective. Compares against all inputs, sums all the scores. Scores against positive vectors are added, against negatives are subtracted.

<h2 id="tocS_DiscoverQuery">DiscoverQuery</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverquery"></a>
<a id="schema_DiscoverQuery"></a>
<a id="tocSdiscoverquery"></a>
<a id="tocsdiscoverquery"></a>

```json
{
  "discover": {
    "target": [
      0
    ],
    "context": {
      "positive": [
        0
      ],
      "negative": [
        0
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discover|[DiscoverInput](#schemadiscoverinput)|true|none|none|

<h2 id="tocS_DiscoverInput">DiscoverInput</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverinput"></a>
<a id="schema_DiscoverInput"></a>
<a id="tocSdiscoverinput"></a>
<a id="tocsdiscoverinput"></a>

```json
{
  "target": [
    0
  ],
  "context": {
    "positive": [
      0
    ],
    "negative": [
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|[VectorInput](#schemavectorinput)|true|none|none|
|context|[ContextPair](#schemacontextpair) \| [[ContextPair](#schemacontextpair)] \| object \| null|true|none|Search space will be constrained by these pairs of vectors|

<h2 id="tocS_ContextPair">ContextPair</h2>
<!-- backwards compatibility -->
<a id="schemacontextpair"></a>
<a id="schema_ContextPair"></a>
<a id="tocScontextpair"></a>
<a id="tocscontextpair"></a>

```json
{
  "positive": [
    0
  ],
  "negative": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|positive|[VectorInput](#schemavectorinput)|true|none|none|
|negative|[VectorInput](#schemavectorinput)|true|none|none|

<h2 id="tocS_ContextQuery">ContextQuery</h2>
<!-- backwards compatibility -->
<a id="schemacontextquery"></a>
<a id="schema_ContextQuery"></a>
<a id="tocScontextquery"></a>
<a id="tocscontextquery"></a>

```json
{
  "context": {
    "positive": [
      0
    ],
    "negative": [
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[ContextInput](#schemacontextinput)|true|none|none|

<h2 id="tocS_ContextInput">ContextInput</h2>
<!-- backwards compatibility -->
<a id="schemacontextinput"></a>
<a id="schema_ContextInput"></a>
<a id="tocScontextinput"></a>
<a id="tocscontextinput"></a>

```json
{
  "positive": [
    0
  ],
  "negative": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ContextPair](#schemacontextpair)|false|none|none|
|*anyOf*|[[ContextPair](#schemacontextpair)]|false|none|none|
|*anyOf*|object \| null|false|none|none|

<h2 id="tocS_OrderByQuery">OrderByQuery</h2>
<!-- backwards compatibility -->
<a id="schemaorderbyquery"></a>
<a id="schema_OrderByQuery"></a>
<a id="tocSorderbyquery"></a>
<a id="tocsorderbyquery"></a>

```json
{
  "order_by": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order_by|[OrderByInterface](#schemaorderbyinterface)|true|none|none|

<h2 id="tocS_FusionQuery">FusionQuery</h2>
<!-- backwards compatibility -->
<a id="schemafusionquery"></a>
<a id="schema_FusionQuery"></a>
<a id="tocSfusionquery"></a>
<a id="tocsfusionquery"></a>

```json
{
  "fusion": "rrf"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fusion|[Fusion](#schemafusion)|true|none|Fusion algorithm allows to combine results of multiple prefetches.<br><br>Available fusion algorithms:<br><br>* `rrf` - Reciprocal Rank Fusion (with default parameters) * `dbsf` - Distribution-Based Score Fusion|

#### Enumerated Values

|Property|Value|
|---|---|
|fusion|rrf|
|fusion|dbsf|

<h2 id="tocS_Fusion">Fusion</h2>
<!-- backwards compatibility -->
<a id="schemafusion"></a>
<a id="schema_Fusion"></a>
<a id="tocSfusion"></a>
<a id="tocsfusion"></a>

```json
"rrf"
```

Fusion algorithm allows to combine results of multiple prefetches.

Available fusion algorithms:

* `rrf` - Reciprocal Rank Fusion (with default parameters) * `dbsf` - Distribution-Based Score Fusion

<h2 id="tocS_RrfQuery">RrfQuery</h2>
<!-- backwards compatibility -->
<a id="schemarrfquery"></a>
<a id="schema_RrfQuery"></a>
<a id="tocSrrfquery"></a>
<a id="tocsrrfquery"></a>

```json
{
  "rrf": {
    "k": null,
    "weights": [
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rrf|[Rrf](#schemarrf)|true|none|Parameters for Reciprocal Rank Fusion|

<h2 id="tocS_Rrf">Rrf</h2>
<!-- backwards compatibility -->
<a id="schemarrf"></a>
<a id="schema_Rrf"></a>
<a id="tocSrrf"></a>
<a id="tocsrrf"></a>

```json
{
  "k": null,
  "weights": [
    0
  ]
}
```

Parameters for Reciprocal Rank Fusion

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|k|integer(uint) \| null|false|none|K parameter for reciprocal rank fusion|
|weights|[number(float)]|false|none|Weights for each prefetch source. Higher weight gives more influence on the final ranking. If not specified, all prefetches are weighted equally. The number of weights should match the number of prefetches.|

<h2 id="tocS_FormulaQuery">FormulaQuery</h2>
<!-- backwards compatibility -->
<a id="schemaformulaquery"></a>
<a id="schema_FormulaQuery"></a>
<a id="tocSformulaquery"></a>
<a id="tocsformulaquery"></a>

```json
{
  "formula": 0,
  "defaults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formula|[Expression](#schemaexpression)|true|none|none|
|defaults|object|false|none|none|

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
0
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|number(float)|false|none|none|
|*anyOf*|string|false|none|none|
|*anyOf*|[Condition](#schemacondition)|false|none|none|
|*anyOf*|[GeoDistance](#schemageodistance)|false|none|none|
|*anyOf*|[DatetimeExpression](#schemadatetimeexpression)|false|none|none|
|*anyOf*|[DatetimeKeyExpression](#schemadatetimekeyexpression)|false|none|none|
|*anyOf*|[MultExpression](#schemamultexpression)|false|none|none|
|*anyOf*|[SumExpression](#schemasumexpression)|false|none|none|
|*anyOf*|[MaxExpression](#schemamaxexpression)|false|none|Largest of the given expressions. Requires at least one operand.|
|*anyOf*|[MinExpression](#schemaminexpression)|false|none|Smallest of the given expressions. Requires at least one operand.|
|*anyOf*|[NegExpression](#schemanegexpression)|false|none|none|
|*anyOf*|[AbsExpression](#schemaabsexpression)|false|none|none|
|*anyOf*|[DivExpression](#schemadivexpression)|false|none|none|
|*anyOf*|[SqrtExpression](#schemasqrtexpression)|false|none|none|
|*anyOf*|[PowExpression](#schemapowexpression)|false|none|none|
|*anyOf*|[ExpExpression](#schemaexpexpression)|false|none|none|
|*anyOf*|[Log10Expression](#schemalog10expression)|false|none|none|
|*anyOf*|[LnExpression](#schemalnexpression)|false|none|none|
|*anyOf*|[AcoshExpression](#schemaacoshexpression)|false|none|none|
|*anyOf*|[LinDecayExpression](#schemalindecayexpression)|false|none|none|
|*anyOf*|[ExpDecayExpression](#schemaexpdecayexpression)|false|none|none|
|*anyOf*|[GaussDecayExpression](#schemagaussdecayexpression)|false|none|none|

<h2 id="tocS_GeoDistance">GeoDistance</h2>
<!-- backwards compatibility -->
<a id="schemageodistance"></a>
<a id="schema_GeoDistance"></a>
<a id="tocSgeodistance"></a>
<a id="tocsgeodistance"></a>

```json
{
  "geo_distance": {
    "origin": {
      "lon": 0,
      "lat": 0
    },
    "to": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geo_distance|[GeoDistanceParams](#schemageodistanceparams)|true|none|none|

<h2 id="tocS_GeoDistanceParams">GeoDistanceParams</h2>
<!-- backwards compatibility -->
<a id="schemageodistanceparams"></a>
<a id="schema_GeoDistanceParams"></a>
<a id="tocSgeodistanceparams"></a>
<a id="tocsgeodistanceparams"></a>

```json
{
  "origin": {
    "lon": 0,
    "lat": 0
  },
  "to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin|[GeoPoint](#schemageopoint)|true|none|Geo point payload schema|
|to|string|true|none|Payload field with the destination geo point|

<h2 id="tocS_DatetimeExpression">DatetimeExpression</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeexpression"></a>
<a id="schema_DatetimeExpression"></a>
<a id="tocSdatetimeexpression"></a>
<a id="tocsdatetimeexpression"></a>

```json
{
  "datetime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datetime|string|true|none|none|

<h2 id="tocS_DatetimeKeyExpression">DatetimeKeyExpression</h2>
<!-- backwards compatibility -->
<a id="schemadatetimekeyexpression"></a>
<a id="schema_DatetimeKeyExpression"></a>
<a id="tocSdatetimekeyexpression"></a>
<a id="tocsdatetimekeyexpression"></a>

```json
{
  "datetime_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datetime_key|string|true|none|none|

<h2 id="tocS_MultExpression">MultExpression</h2>
<!-- backwards compatibility -->
<a id="schemamultexpression"></a>
<a id="schema_MultExpression"></a>
<a id="tocSmultexpression"></a>
<a id="tocsmultexpression"></a>

```json
{
  "mult": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mult|[[Expression](#schemaexpression)]|true|none|none|

<h2 id="tocS_SumExpression">SumExpression</h2>
<!-- backwards compatibility -->
<a id="schemasumexpression"></a>
<a id="schema_SumExpression"></a>
<a id="tocSsumexpression"></a>
<a id="tocssumexpression"></a>

```json
{
  "sum": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sum|[[Expression](#schemaexpression)]|true|none|none|

<h2 id="tocS_MaxExpression">MaxExpression</h2>
<!-- backwards compatibility -->
<a id="schemamaxexpression"></a>
<a id="schema_MaxExpression"></a>
<a id="tocSmaxexpression"></a>
<a id="tocsmaxexpression"></a>

```json
{
  "max": [
    0
  ]
}
```

Largest of the given expressions. Requires at least one operand.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max|[[Expression](#schemaexpression)]|true|none|none|

<h2 id="tocS_MinExpression">MinExpression</h2>
<!-- backwards compatibility -->
<a id="schemaminexpression"></a>
<a id="schema_MinExpression"></a>
<a id="tocSminexpression"></a>
<a id="tocsminexpression"></a>

```json
{
  "min": [
    0
  ]
}
```

Smallest of the given expressions. Requires at least one operand.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min|[[Expression](#schemaexpression)]|true|none|none|

<h2 id="tocS_NegExpression">NegExpression</h2>
<!-- backwards compatibility -->
<a id="schemanegexpression"></a>
<a id="schema_NegExpression"></a>
<a id="tocSnegexpression"></a>
<a id="tocsnegexpression"></a>

```json
{
  "neg": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|neg|[Expression](#schemaexpression)|true|none|none|

<h2 id="tocS_AbsExpression">AbsExpression</h2>
<!-- backwards compatibility -->
<a id="schemaabsexpression"></a>
<a id="schema_AbsExpression"></a>
<a id="tocSabsexpression"></a>
<a id="tocsabsexpression"></a>

```json
{
  "abs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abs|[Expression](#schemaexpression)|true|none|none|

<h2 id="tocS_DivExpression">DivExpression</h2>
<!-- backwards compatibility -->
<a id="schemadivexpression"></a>
<a id="schema_DivExpression"></a>
<a id="tocSdivexpression"></a>
<a id="tocsdivexpression"></a>

```json
{
  "div": {
    "left": {},
    "right": {},
    "by_zero_default": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|div|[DivParams](#schemadivparams)|true|none|none|

<h2 id="tocS_DivParams">DivParams</h2>
<!-- backwards compatibility -->
<a id="schemadivparams"></a>
<a id="schema_DivParams"></a>
<a id="tocSdivparams"></a>
<a id="tocsdivparams"></a>

```json
{
  "left": 0,
  "right": 0,
  "by_zero_default": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|left|[Expression](#schemaexpression)|true|none|none|
|right|[Expression](#schemaexpression)|true|none|none|
|by_zero_default|number(float) \| null|false|none|none|

<h2 id="tocS_SqrtExpression">SqrtExpression</h2>
<!-- backwards compatibility -->
<a id="schemasqrtexpression"></a>
<a id="schema_SqrtExpression"></a>
<a id="tocSsqrtexpression"></a>
<a id="tocssqrtexpression"></a>

```json
{
  "sqrt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sqrt|[Expression](#schemaexpression)|true|none|none|

<h2 id="tocS_PowExpression">PowExpression</h2>
<!-- backwards compatibility -->
<a id="schemapowexpression"></a>
<a id="schema_PowExpression"></a>
<a id="tocSpowexpression"></a>
<a id="tocspowexpression"></a>

```json
{
  "pow": {
    "base": {},
    "exponent": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pow|[PowParams](#schemapowparams)|true|none|none|

<h2 id="tocS_PowParams">PowParams</h2>
<!-- backwards compatibility -->
<a id="schemapowparams"></a>
<a id="schema_PowParams"></a>
<a id="tocSpowparams"></a>
<a id="tocspowparams"></a>

```json
{
  "base": 0,
  "exponent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base|[Expression](#schemaexpression)|true|none|none|
|exponent|[Expression](#schemaexpression)|true|none|none|

<h2 id="tocS_ExpExpression">ExpExpression</h2>
<!-- backwards compatibility -->
<a id="schemaexpexpression"></a>
<a id="schema_ExpExpression"></a>
<a id="tocSexpexpression"></a>
<a id="tocsexpexpression"></a>

```json
{
  "exp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exp|[Expression](#schemaexpression)|true|none|none|

<h2 id="tocS_Log10Expression">Log10Expression</h2>
<!-- backwards compatibility -->
<a id="schemalog10expression"></a>
<a id="schema_Log10Expression"></a>
<a id="tocSlog10expression"></a>
<a id="tocslog10expression"></a>

```json
{
  "log10": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log10|[Expression](#schemaexpression)|true|none|none|

<h2 id="tocS_LnExpression">LnExpression</h2>
<!-- backwards compatibility -->
<a id="schemalnexpression"></a>
<a id="schema_LnExpression"></a>
<a id="tocSlnexpression"></a>
<a id="tocslnexpression"></a>

```json
{
  "ln": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ln|[Expression](#schemaexpression)|true|none|none|

<h2 id="tocS_AcoshExpression">AcoshExpression</h2>
<!-- backwards compatibility -->
<a id="schemaacoshexpression"></a>
<a id="schema_AcoshExpression"></a>
<a id="tocSacoshexpression"></a>
<a id="tocsacoshexpression"></a>

```json
{
  "acosh": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acosh|[Expression](#schemaexpression)|true|none|none|

<h2 id="tocS_LinDecayExpression">LinDecayExpression</h2>
<!-- backwards compatibility -->
<a id="schemalindecayexpression"></a>
<a id="schema_LinDecayExpression"></a>
<a id="tocSlindecayexpression"></a>
<a id="tocslindecayexpression"></a>

```json
{
  "lin_decay": {
    "x": {},
    "target": {},
    "scale": 0,
    "midpoint": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lin_decay|[DecayParamsExpression](#schemadecayparamsexpression)|true|none|none|

<h2 id="tocS_DecayParamsExpression">DecayParamsExpression</h2>
<!-- backwards compatibility -->
<a id="schemadecayparamsexpression"></a>
<a id="schema_DecayParamsExpression"></a>
<a id="tocSdecayparamsexpression"></a>
<a id="tocsdecayparamsexpression"></a>

```json
{
  "x": 0,
  "target": 0,
  "scale": 0,
  "midpoint": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|[Expression](#schemaexpression)|true|none|none|
|target|[Expression](#schemaexpression) \| object \| null|false|none|The target value to start decaying from. Defaults to 0.|
|scale|number(float) \| null|false|none|The scale factor of the decay, in terms of `x`. Defaults to 1.0. Must be a non-zero positive number.|
|midpoint|number(float) \| null|false|none|The midpoint of the decay. Should be between 0 and 1.Defaults to 0.5. Output will be this value when `\|x - target\| == scale`.|

<h2 id="tocS_ExpDecayExpression">ExpDecayExpression</h2>
<!-- backwards compatibility -->
<a id="schemaexpdecayexpression"></a>
<a id="schema_ExpDecayExpression"></a>
<a id="tocSexpdecayexpression"></a>
<a id="tocsexpdecayexpression"></a>

```json
{
  "exp_decay": {
    "x": {},
    "target": {},
    "scale": 0,
    "midpoint": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exp_decay|[DecayParamsExpression](#schemadecayparamsexpression)|true|none|none|

<h2 id="tocS_GaussDecayExpression">GaussDecayExpression</h2>
<!-- backwards compatibility -->
<a id="schemagaussdecayexpression"></a>
<a id="schema_GaussDecayExpression"></a>
<a id="tocSgaussdecayexpression"></a>
<a id="tocsgaussdecayexpression"></a>

```json
{
  "gauss_decay": {
    "x": {},
    "target": {},
    "scale": 0,
    "midpoint": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gauss_decay|[DecayParamsExpression](#schemadecayparamsexpression)|true|none|none|

<h2 id="tocS_SampleQuery">SampleQuery</h2>
<!-- backwards compatibility -->
<a id="schemasamplequery"></a>
<a id="schema_SampleQuery"></a>
<a id="tocSsamplequery"></a>
<a id="tocssamplequery"></a>

```json
{
  "sample": "random"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sample|[Sample](#schemasample)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sample|random|

<h2 id="tocS_Sample">Sample</h2>
<!-- backwards compatibility -->
<a id="schemasample"></a>
<a id="schema_Sample"></a>
<a id="tocSsample"></a>
<a id="tocssample"></a>

```json
"random"
```

<h2 id="tocS_RelevanceFeedbackQuery">RelevanceFeedbackQuery</h2>
<!-- backwards compatibility -->
<a id="schemarelevancefeedbackquery"></a>
<a id="schema_RelevanceFeedbackQuery"></a>
<a id="tocSrelevancefeedbackquery"></a>
<a id="tocsrelevancefeedbackquery"></a>

```json
{
  "relevance_feedback": {
    "target": [
      0
    ],
    "feedback": [
      {
        "example": [
          0
        ],
        "score": 0
      }
    ],
    "strategy": {
      "naive": {
        "a": 0,
        "b": 0,
        "c": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relevance_feedback|[RelevanceFeedbackInput](#schemarelevancefeedbackinput)|true|none|none|

<h2 id="tocS_RelevanceFeedbackInput">RelevanceFeedbackInput</h2>
<!-- backwards compatibility -->
<a id="schemarelevancefeedbackinput"></a>
<a id="schema_RelevanceFeedbackInput"></a>
<a id="tocSrelevancefeedbackinput"></a>
<a id="tocsrelevancefeedbackinput"></a>

```json
{
  "target": [
    0
  ],
  "feedback": [
    {
      "example": [
        0
      ],
      "score": 0
    }
  ],
  "strategy": {
    "naive": {
      "a": 0,
      "b": 0,
      "c": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|[VectorInput](#schemavectorinput)|true|none|none|
|feedback|[[FeedbackItem](#schemafeedbackitem)]|true|none|none|
|strategy|[FeedbackStrategy](#schemafeedbackstrategy)|true|none|none|

<h2 id="tocS_FeedbackItem">FeedbackItem</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackitem"></a>
<a id="schema_FeedbackItem"></a>
<a id="tocSfeedbackitem"></a>
<a id="tocsfeedbackitem"></a>

```json
{
  "example": [
    0
  ],
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|example|[VectorInput](#schemavectorinput)|true|none|none|
|score|number(float)|true|none|none|

<h2 id="tocS_FeedbackStrategy">FeedbackStrategy</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackstrategy"></a>
<a id="schema_FeedbackStrategy"></a>
<a id="tocSfeedbackstrategy"></a>
<a id="tocsfeedbackstrategy"></a>

```json
{
  "naive": {
    "a": 0,
    "b": 0,
    "c": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[NaiveFeedbackStrategy](#schemanaivefeedbackstrategy)|false|none|none|

<h2 id="tocS_NaiveFeedbackStrategy">NaiveFeedbackStrategy</h2>
<!-- backwards compatibility -->
<a id="schemanaivefeedbackstrategy"></a>
<a id="schema_NaiveFeedbackStrategy"></a>
<a id="tocSnaivefeedbackstrategy"></a>
<a id="tocsnaivefeedbackstrategy"></a>

```json
{
  "naive": {
    "a": 0,
    "b": 0,
    "c": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|naive|[NaiveFeedbackStrategyParams](#schemanaivefeedbackstrategyparams)|true|none|none|

<h2 id="tocS_NaiveFeedbackStrategyParams">NaiveFeedbackStrategyParams</h2>
<!-- backwards compatibility -->
<a id="schemanaivefeedbackstrategyparams"></a>
<a id="schema_NaiveFeedbackStrategyParams"></a>
<a id="tocSnaivefeedbackstrategyparams"></a>
<a id="tocsnaivefeedbackstrategyparams"></a>

```json
{
  "a": 0,
  "b": 0,
  "c": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|a|number(float)|true|none|none|
|b|number(float)|true|none|none|
|c|number(float)|true|none|none|

<h2 id="tocS_TextQuery">TextQuery</h2>
<!-- backwards compatibility -->
<a id="schematextquery"></a>
<a id="schema_TextQuery"></a>
<a id="tocStextquery"></a>
<a id="tocstextquery"></a>

```json
{
  "text": "string"
}
```

Rank by BM25 over the text index of the payload field named by `using`, which must have `scoring` set. A point scores when it holds any of the query's terms: required or excluded terms belong in the request's `filter`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|[TextInterface](#schematextinterface)|true|none|The text to search for, or the text with scorer parameters.|

<h2 id="tocS_TextInterface">TextInterface</h2>
<!-- backwards compatibility -->
<a id="schematextinterface"></a>
<a id="schema_TextInterface"></a>
<a id="tocStextinterface"></a>
<a id="tocstextinterface"></a>

```json
"string"
```

The text to search for, or the text with scorer parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|[TextQueryInput](#schematextqueryinput)|false|none|none|

<h2 id="tocS_TextQueryInput">TextQueryInput</h2>
<!-- backwards compatibility -->
<a id="schematextqueryinput"></a>
<a id="schema_TextQueryInput"></a>
<a id="tocStextqueryinput"></a>
<a id="tocstextqueryinput"></a>

```json
{
  "query": "string",
  "scoring": {
    "bm25": {
      "k": 0,
      "b": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Text to search for, tokenized by the field's text index.|
|scoring|[TextQueryScoring](#schematextqueryscoring) \| object \| null|false|none|Parameters of the scorer, keyed by its name. They must match the `scoring` type of the field's text index. If absent, the scorer runs with its defaults.|

<h2 id="tocS_TextQueryScoring">TextQueryScoring</h2>
<!-- backwards compatibility -->
<a id="schematextqueryscoring"></a>
<a id="schema_TextQueryScoring"></a>
<a id="tocStextqueryscoring"></a>
<a id="tocstextqueryscoring"></a>

```json
{
  "bm25": {
    "k": 0,
    "b": 0
  }
}
```

Parameters of one scorer, keyed by its name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[Bm25Scoring](#schemabm25scoring)|false|none|none|

<h2 id="tocS_Bm25Scoring">Bm25Scoring</h2>
<!-- backwards compatibility -->
<a id="schemabm25scoring"></a>
<a id="schema_Bm25Scoring"></a>
<a id="tocSbm25scoring"></a>
<a id="tocsbm25scoring"></a>

```json
{
  "bm25": {
    "k": 0,
    "b": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bm25|[Bm25Params](#schemabm25params)|true|none|none|

<h2 id="tocS_Bm25Params">Bm25Params</h2>
<!-- backwards compatibility -->
<a id="schemabm25params"></a>
<a id="schema_Bm25Params"></a>
<a id="tocSbm25params"></a>
<a id="tocsbm25params"></a>

```json
{
  "k": 0,
  "b": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|k|number(float) \| null|false|none|Term frequency saturation. Default is 1.2.|
|b|number(float) \| null|false|none|Document length normalization, from 0 (none) to 1 (full). Default is 0.75.|

<h2 id="tocS_SearchParams">SearchParams</h2>
<!-- backwards compatibility -->
<a id="schemasearchparams"></a>
<a id="schema_SearchParams"></a>
<a id="tocSsearchparams"></a>
<a id="tocssearchparams"></a>

```json
{
  "hnsw_ef": 1,
  "exact": false,
  "quantization": {
    "ignore": false,
    "rescore": true,
    "oversampling": 1
  },
  "indexed_only": false,
  "acorn": {
    "enable": false,
    "max_selectivity": 0
  },
  "idf": "global"
}
```

Additional parameters of the search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hnsw_ef|integer(uint) \| null|false|none|Params relevant to HNSW index Size of the beam in a beam-search. Larger the value - more accurate the result, more time required for search.|
|exact|boolean|false|none|Search without approximation. If set to true, search may run long but with exact results.|
|quantization|[QuantizationSearchParams](#schemaquantizationsearchparams) \| object \| null|false|none|Quantization params|
|indexed_only|boolean|false|none|If enabled, the engine will only perform search among indexed or small segments. Using this option prevents slow searches in case of delayed index, but does not guarantee that all uploaded vectors will be included in search results|
|acorn|[AcornSearchParams](#schemaacornsearchparams) \| object \| null|false|none|ACORN search params|
|idf|[IdfParams](#schemaidfparams) \| object \| null|false|none|Which population IDF statistics are computed over. By default (or with explicit `"global"`) statistics are collection-wide. Only applicable to sparse vectors with the IDF modifier enabled, and to BM25 over a text index.|

<h2 id="tocS_QuantizationSearchParams">QuantizationSearchParams</h2>
<!-- backwards compatibility -->
<a id="schemaquantizationsearchparams"></a>
<a id="schema_QuantizationSearchParams"></a>
<a id="tocSquantizationsearchparams"></a>
<a id="tocsquantizationsearchparams"></a>

```json
{
  "ignore": false,
  "rescore": true,
  "oversampling": 1
}
```

Additional parameters of the search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignore|boolean|false|none|If true, quantized vectors are ignored. Default is false.|
|rescore|boolean \| null|false|none|If true, use original vectors to re-score top-k results. Might require more time in case if original vectors are stored on disk. If not set, qdrant decides automatically apply rescoring or not.|
|oversampling|number(double) \| null|false|none|Oversampling factor for quantization. Default is 1.0.<br><br>Defines how many extra vectors should be preselected using quantized index, and then re-scored using original vectors.<br><br>For example, if `oversampling` is 2.4 and `limit` is 100, then 240 vectors will be preselected using quantized index, and then top-100 will be returned after re-scoring.|

<h2 id="tocS_AcornSearchParams">AcornSearchParams</h2>
<!-- backwards compatibility -->
<a id="schemaacornsearchparams"></a>
<a id="schema_AcornSearchParams"></a>
<a id="tocSacornsearchparams"></a>
<a id="tocsacornsearchparams"></a>

```json
{
  "enable": false,
  "max_selectivity": 0
}
```

ACORN-related search parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable|boolean|false|none|If true, then ACORN may be used for the HNSW search based on filters selectivity. Improves search recall for searches with multiple low-selectivity payload filters, at cost of performance.|
|max_selectivity|number(double) \| null|false|none|Maximum selectivity of filters to enable ACORN.<br><br>If estimated filters selectivity is higher than this value, ACORN will not be used. Selectivity is estimated as: `estimated number of points satisfying the filters / total number of points`.<br><br>0.0 for never, 1.0 for always. Default is 0.4.|

<h2 id="tocS_IdfParams">IdfParams</h2>
<!-- backwards compatibility -->
<a id="schemaidfparams"></a>
<a id="schema_IdfParams"></a>
<a id="tocSidfparams"></a>
<a id="tocsidfparams"></a>

```json
"global"
```

Population over which IDF statistics are computed for scoring — the *IDF corpus*.

- `"global"` — collection-wide statistics, same as omitting the parameter. - `{ "corpus": <filter> }` — document count and per-term document frequencies (and, for BM25 over a text index, the average document length) are computed over the points matching the corpus filter only. The corpus is independent of the retrieval filter and is usually broader than it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[IdfScope](#schemaidfscope)|false|none|Named IDF scope without a corpus filter.|
|*anyOf*|[IdfCorpusParams](#schemaidfcorpusparams)|false|none|IDF statistics computed over the points matching a corpus filter.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anyOf*|global|

<h2 id="tocS_IdfScope">IdfScope</h2>
<!-- backwards compatibility -->
<a id="schemaidfscope"></a>
<a id="schema_IdfScope"></a>
<a id="tocSidfscope"></a>
<a id="tocsidfscope"></a>

```json
"global"
```

Named IDF scope without a corpus filter.

<h2 id="tocS_IdfCorpusParams">IdfCorpusParams</h2>
<!-- backwards compatibility -->
<a id="schemaidfcorpusparams"></a>
<a id="schema_IdfCorpusParams"></a>
<a id="tocSidfcorpusparams"></a>
<a id="tocsidfcorpusparams"></a>

```json
{
  "corpus": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  }
}
```

IDF statistics computed over the points matching a corpus filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corpus|[Filter](#schemafilter)|true|none|none|

<h2 id="tocS_LookupLocation">LookupLocation</h2>
<!-- backwards compatibility -->
<a id="schemalookuplocation"></a>
<a id="schema_LookupLocation"></a>
<a id="tocSlookuplocation"></a>
<a id="tocslookuplocation"></a>

```json
{
  "collection": "string",
  "vector": null,
  "shard_key": "region_1"
}
```

Defines a location to use for looking up the vector. Specifies collection and vector field name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|true|none|Name of the collection used for lookup|
|vector|string \| null|false|none|Optional name of the vector field within the collection. If not provided, the default vector field will be used.|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|Specify in which shards to look for the points, if not specified - look in all shards|

<h2 id="tocS_QueryRequestBatch">QueryRequestBatch</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequestbatch"></a>
<a id="schema_QueryRequestBatch"></a>
<a id="tocSqueryrequestbatch"></a>
<a id="tocsqueryrequestbatch"></a>

```json
{
  "searches": [
    {
      "shard_key": "region_1",
      "prefetch": null,
      "query": [
        0
      ],
      "using": "string",
      "filter": {
        "should": {},
        "min_should": {},
        "must": {},
        "must_not": {}
      },
      "params": {
        "hnsw_ef": 1,
        "exact": false,
        "quantization": {
          "ignore": false,
          "rescore": true,
          "oversampling": 1
        },
        "indexed_only": false,
        "acorn": {
          "enable": false,
          "max_selectivity": 0
        },
        "idf": "global"
      },
      "score_threshold": 0,
      "limit": 1,
      "offset": 0,
      "with_vector": true,
      "with_payload": true,
      "lookup_from": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searches|[[QueryRequest](#schemaqueryrequest)]|true|none|none|

<h2 id="tocS_QueryResponse">QueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresponse"></a>
<a id="schema_QueryResponse"></a>
<a id="tocSqueryresponse"></a>
<a id="tocsqueryresponse"></a>

```json
{
  "points": [
    {
      "id": 42,
      "version": 3,
      "score": 0.75,
      "payload": {
        "city": "London",
        "color": "green"
      },
      "vector": [
        0.875,
        0.140625,
        0.897599995136261
      ],
      "shard_key": "region_1",
      "order_value": 42
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|[[ScoredPoint](#schemascoredpoint)]|true|none|none|

<h2 id="tocS_QueryGroupsRequest">QueryGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerygroupsrequest"></a>
<a id="schema_QueryGroupsRequest"></a>
<a id="tocSquerygroupsrequest"></a>
<a id="tocsquerygroupsrequest"></a>

```json
{
  "shard_key": "region_1",
  "prefetch": null,
  "query": [
    0
  ],
  "using": "string",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "params": {
    "hnsw_ef": 1,
    "exact": false,
    "quantization": {
      "ignore": false,
      "rescore": true,
      "oversampling": 1
    },
    "indexed_only": false,
    "acorn": {
      "enable": false,
      "max_selectivity": 0
    },
    "idf": "global"
  },
  "score_threshold": 0,
  "with_vector": true,
  "with_payload": true,
  "lookup_from": null,
  "group_by": "string",
  "group_size": 1,
  "limit": 1,
  "with_lookup": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|
|prefetch|[Prefetch](#schemaprefetch) \| [[Prefetch](#schemaprefetch)] \| object \| null|false|none|Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es).|
|query|[QueryInterface](#schemaqueryinterface) \| object \| null|false|none|Query to perform. If missing without prefetches, returns points ordered by their IDs.|
|using|string \| null|false|none|Define which vector name to use for querying. If missing, the default vector is used. For a `text` query, the payload field whose text index to search.|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Filter conditions - return only those points that satisfy the specified conditions.|
|params|[SearchParams](#schemasearchparams) \| object \| null|false|none|Search params for when there is no prefetch|
|score_threshold|number(float) \| null|false|none|Return points with scores better than this threshold.|
|with_vector|[WithVector](#schemawithvector) \| object \| null|false|none|Options for specifying which vectors to include into the response. Default is false.|
|with_payload|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|none|Options for specifying which payload to include or not. Default is false.|
|lookup_from|[LookupLocation](#schemalookuplocation) \| object \| null|false|none|The location to use for IDs lookup, if not specified - use the current collection and the 'using' vector Note: the other collection vectors should have the same vector size as the 'using' vector in the current collection|
|group_by|string|true|none|Payload field to group by, must be a string or number field. If the field contains more than 1 value, all values will be used for grouping. One point can be in multiple groups.|
|group_size|integer(uint) \| null|false|none|Maximum amount of points to return per group. Default is 3.|
|limit|integer(uint) \| null|false|none|Maximum amount of groups to return. Default is 10.|
|with_lookup|[WithLookupInterface](#schemawithlookupinterface) \| object \| null|false|none|Look for points in another collection using the group ids|

<h2 id="tocS_WithLookupInterface">WithLookupInterface</h2>
<!-- backwards compatibility -->
<a id="schemawithlookupinterface"></a>
<a id="schema_WithLookupInterface"></a>
<a id="tocSwithlookupinterface"></a>
<a id="tocswithlookupinterface"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|[WithLookup](#schemawithlookup)|false|none|none|

<h2 id="tocS_WithLookup">WithLookup</h2>
<!-- backwards compatibility -->
<a id="schemawithlookup"></a>
<a id="schema_WithLookup"></a>
<a id="tocSwithlookup"></a>
<a id="tocswithlookup"></a>

```json
{
  "collection": "string",
  "with_payload": true,
  "with_vectors": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|true|none|Name of the collection to use for points lookup|
|with_payload|[WithPayloadInterface](#schemawithpayloadinterface) \| object \| null|false|none|Options for specifying which payload to include (or not)|
|with_vectors|[WithVector](#schemawithvector) \| object \| null|false|none|Options for specifying which vectors to include (or not)|

<h2 id="tocS_SearchMatrixRequest">SearchMatrixRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchmatrixrequest"></a>
<a id="schema_SearchMatrixRequest"></a>
<a id="tocSsearchmatrixrequest"></a>
<a id="tocssearchmatrixrequest"></a>

```json
{
  "shard_key": "region_1",
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "sample": 2,
  "limit": 1,
  "using": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|Specify in which shards to look for the points, if not specified - look in all shards|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Look only for points which satisfies this conditions|
|sample|integer(uint) \| null|false|none|How many points to select and search within. Default is 10.|
|limit|integer(uint) \| null|false|none|How many neighbours per sample to find. Default is 3.|
|using|string \| null|false|none|Define which vector name to use for querying. If missing, the default vector is used.|

<h2 id="tocS_SearchMatrixOffsetsResponse">SearchMatrixOffsetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchmatrixoffsetsresponse"></a>
<a id="schema_SearchMatrixOffsetsResponse"></a>
<a id="tocSsearchmatrixoffsetsresponse"></a>
<a id="tocssearchmatrixoffsetsresponse"></a>

```json
{
  "offsets_row": [
    0
  ],
  "offsets_col": [
    0
  ],
  "scores": [
    0
  ],
  "ids": [
    42
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offsets_row|[integer(uint64)]|true|none|Row indices of the matrix|
|offsets_col|[integer(uint64)]|true|none|Column indices of the matrix|
|scores|[number(float)]|true|none|Scores associated with matrix coordinates|
|ids|[[ExtendedPointId](#schemaextendedpointid)]|true|none|Ids of the points in order|

<h2 id="tocS_SearchMatrixPairsResponse">SearchMatrixPairsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchmatrixpairsresponse"></a>
<a id="schema_SearchMatrixPairsResponse"></a>
<a id="tocSsearchmatrixpairsresponse"></a>
<a id="tocssearchmatrixpairsresponse"></a>

```json
{
  "pairs": [
    {
      "a": 42,
      "b": 42,
      "score": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pairs|[[SearchMatrixPair](#schemasearchmatrixpair)]|true|none|List of pairs of points with scores|

<h2 id="tocS_SearchMatrixPair">SearchMatrixPair</h2>
<!-- backwards compatibility -->
<a id="schemasearchmatrixpair"></a>
<a id="schema_SearchMatrixPair"></a>
<a id="tocSsearchmatrixpair"></a>
<a id="tocssearchmatrixpair"></a>

```json
{
  "a": 42,
  "b": 42,
  "score": 0
}
```

Pair of points (a, b) with score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|a|[ExtendedPointId](#schemaextendedpointid)|true|none|Type, used for specifying point ID in user interface|
|b|[ExtendedPointId](#schemaextendedpointid)|true|none|Type, used for specifying point ID in user interface|
|score|number(float)|true|none|none|

<h2 id="tocS_FacetRequest">FacetRequest</h2>
<!-- backwards compatibility -->
<a id="schemafacetrequest"></a>
<a id="schema_FacetRequest"></a>
<a id="tocSfacetrequest"></a>
<a id="tocsfacetrequest"></a>

```json
{
  "shard_key": "region_1",
  "key": "string",
  "limit": 1,
  "filter": {
    "should": {},
    "min_should": {},
    "must": {},
    "must_not": {}
  },
  "exact": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_key|[ShardKeySelector](#schemashardkeyselector) \| object \| null|false|none|none|
|key|string|true|none|Payload key to use for faceting.|
|limit|integer(uint) \| null|false|none|Max number of hits to return. Default is 10.|
|filter|[Filter](#schemafilter) \| object \| null|false|none|Filter conditions - only consider points that satisfy these conditions.|
|exact|boolean \| null|false|none|Whether to do a more expensive exact count for each of the values in the facet. Default is false.|

<h2 id="tocS_FacetResponse">FacetResponse</h2>
<!-- backwards compatibility -->
<a id="schemafacetresponse"></a>
<a id="schema_FacetResponse"></a>
<a id="tocSfacetresponse"></a>
<a id="tocsfacetresponse"></a>

```json
{
  "hits": [
    {
      "value": "string",
      "count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[FacetValueHit](#schemafacetvaluehit)]|true|none|none|

<h2 id="tocS_FacetValueHit">FacetValueHit</h2>
<!-- backwards compatibility -->
<a id="schemafacetvaluehit"></a>
<a id="schema_FacetValueHit"></a>
<a id="tocSfacetvaluehit"></a>
<a id="tocsfacetvaluehit"></a>

```json
{
  "value": "string",
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[FacetValue](#schemafacetvalue)|true|none|none|
|count|integer(uint)|true|none|none|

<h2 id="tocS_FacetValue">FacetValue</h2>
<!-- backwards compatibility -->
<a id="schemafacetvalue"></a>
<a id="schema_FacetValue"></a>
<a id="tocSfacetvalue"></a>
<a id="tocsfacetvalue"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|integer(int64)|false|none|none|
|*anyOf*|boolean|false|none|none|

<h2 id="tocS_Usage">Usage</h2>
<!-- backwards compatibility -->
<a id="schemausage"></a>
<a id="schema_Usage"></a>
<a id="tocSusage"></a>
<a id="tocsusage"></a>

```json
{
  "hardware": {
    "cpu": 0,
    "payload_io_read": 0,
    "payload_io_write": 0,
    "payload_index_io_read": 0,
    "payload_index_io_write": 0,
    "vector_io_read": 0,
    "vector_io_write": 0
  },
  "inference": {
    "models": {
      "property1": {
        "tokens": 0
      },
      "property2": {
        "tokens": 0
      }
    }
  }
}
```

Usage of the hardware resources, spent to process the request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hardware|[HardwareUsage](#schemahardwareusage) \| object \| null|false|none|none|
|inference|[InferenceUsage](#schemainferenceusage) \| object \| null|false|none|none|

<h2 id="tocS_InferenceUsage">InferenceUsage</h2>
<!-- backwards compatibility -->
<a id="schemainferenceusage"></a>
<a id="schema_InferenceUsage"></a>
<a id="tocSinferenceusage"></a>
<a id="tocsinferenceusage"></a>

```json
{
  "models": {
    "property1": {
      "tokens": 0
    },
    "property2": {
      "tokens": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|object|true|none|none|

<h2 id="tocS_ModelUsage">ModelUsage</h2>
<!-- backwards compatibility -->
<a id="schemamodelusage"></a>
<a id="schema_ModelUsage"></a>
<a id="tocSmodelusage"></a>
<a id="tocsmodelusage"></a>

```json
{
  "tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokens|integer(uint64)|true|none|none|

<h2 id="tocS_ShardKeysResponse">ShardKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemashardkeysresponse"></a>
<a id="schema_ShardKeysResponse"></a>
<a id="tocSshardkeysresponse"></a>
<a id="tocsshardkeysresponse"></a>

```json
{
  "shard_keys": [
    {
      "key": "region_1"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_keys|[[ShardKeyDescription](#schemashardkeydescription)]|false|none|The existing shard keys. Only available when sharding method is `custom`|

<h2 id="tocS_ShardKeyDescription">ShardKeyDescription</h2>
<!-- backwards compatibility -->
<a id="schemashardkeydescription"></a>
<a id="schema_ShardKeyDescription"></a>
<a id="tocSshardkeydescription"></a>
<a id="tocsshardkeydescription"></a>

```json
{
  "key": "region_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[ShardKey](#schemashardkey)|true|none|none|

<h2 id="tocS_OptimizationsResponse">OptimizationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizationsresponse"></a>
<a id="schema_OptimizationsResponse"></a>
<a id="tocSoptimizationsresponse"></a>
<a id="tocsoptimizationsresponse"></a>

```json
{
  "summary": {
    "queued_optimizations": 0,
    "queued_segments": 0,
    "queued_points": 0,
    "idle_segments": 0
  },
  "running": [
    {
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "optimizer": "string",
      "status": "optimizing",
      "segments": [
        {
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "points_count": 0
        }
      ],
      "progress": {
        "name": "string",
        "started_at": "1970-01-01T00:00:00Z",
        "finished_at": "1970-01-01T00:00:00Z",
        "duration_sec": 0,
        "done": 0,
        "total": 0,
        "children": [
          {}
        ]
      }
    }
  ],
  "queued": [
    {
      "optimizer": "string",
      "segments": [
        {
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "points_count": 0
        }
      ]
    }
  ],
  "completed": [
    {
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "optimizer": "string",
      "status": "optimizing",
      "segments": [
        {
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "points_count": 0
        }
      ],
      "progress": {
        "name": "string",
        "started_at": "1970-01-01T00:00:00Z",
        "finished_at": "1970-01-01T00:00:00Z",
        "duration_sec": 0,
        "done": 0,
        "total": 0,
        "children": [
          {}
        ]
      }
    }
  ],
  "idle_segments": [
    {
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "points_count": 0
    }
  ]
}
```

Optimizations progress for the collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|[OptimizationsSummary](#schemaoptimizationssummary)|true|none|none|
|running|[[Optimization](#schemaoptimization)]|true|none|Currently running optimizations.|
|queued|[[PendingOptimization](#schemapendingoptimization)]|false|none|An estimated queue of pending optimizations. Requires `?with=queued`.|
|completed|[[Optimization](#schemaoptimization)]|false|none|Completed optimizations. Requires `?with=completed`. Limited by `?completed_limit=N`.|
|idle_segments|[[OptimizationSegmentInfo](#schemaoptimizationsegmentinfo)]|false|none|Segments that don't require optimization. Requires `?with=idle_segments`.|

<h2 id="tocS_OptimizationsSummary">OptimizationsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizationssummary"></a>
<a id="schema_OptimizationsSummary"></a>
<a id="tocSoptimizationssummary"></a>
<a id="tocsoptimizationssummary"></a>

```json
{
  "queued_optimizations": 0,
  "queued_segments": 0,
  "queued_points": 0,
  "idle_segments": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queued_optimizations|integer(uint)|true|none|Number of pending optimizations in the queue. Each optimization will take one or more unoptimized segments and produce one optimized segment.|
|queued_segments|integer(uint)|true|none|Number of unoptimized segments in the queue.|
|queued_points|integer(uint)|true|none|Number of points in unoptimized segments in the queue.|
|idle_segments|integer(uint)|true|none|Number of segments that don't require optimization.|

<h2 id="tocS_Optimization">Optimization</h2>
<!-- backwards compatibility -->
<a id="schemaoptimization"></a>
<a id="schema_Optimization"></a>
<a id="tocSoptimization"></a>
<a id="tocsoptimization"></a>

```json
{
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "optimizer": "string",
  "status": "optimizing",
  "segments": [
    {
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "points_count": 0
    }
  ],
  "progress": {
    "name": "string",
    "started_at": "1970-01-01T00:00:00Z",
    "finished_at": "1970-01-01T00:00:00Z",
    "duration_sec": 0,
    "done": 0,
    "total": 0,
    "children": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string(uuid)|true|none|Unique identifier of the optimization process.<br><br>After the optimization is complete, a new segment will be created with this UUID.|
|optimizer|string|true|none|Name of the optimizer that performed this optimization.|
|status|[TrackerStatus](#schematrackerstatus)|true|none|Represents the current state of the optimizer being tracked|
|segments|[[OptimizationSegmentInfo](#schemaoptimizationsegmentinfo)]|true|none|Segments being optimized.<br><br>After the optimization is complete, these segments will be replaced by the new optimized segment.|
|progress|[ProgressTree](#schemaprogresstree)|true|none|none|

<h2 id="tocS_OptimizationSegmentInfo">OptimizationSegmentInfo</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizationsegmentinfo"></a>
<a id="schema_OptimizationSegmentInfo"></a>
<a id="tocSoptimizationsegmentinfo"></a>
<a id="tocsoptimizationsegmentinfo"></a>

```json
{
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "points_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string(uuid)|true|none|Unique identifier of the segment.|
|points_count|integer(uint)|true|none|Number of non-deleted points in the segment.|

<h2 id="tocS_ProgressTree">ProgressTree</h2>
<!-- backwards compatibility -->
<a id="schemaprogresstree"></a>
<a id="schema_ProgressTree"></a>
<a id="tocSprogresstree"></a>
<a id="tocsprogresstree"></a>

```json
{
  "name": "string",
  "started_at": "1970-01-01T00:00:00Z",
  "finished_at": "1970-01-01T00:00:00Z",
  "duration_sec": 0,
  "done": 0,
  "total": 0,
  "children": [
    {
      "name": "string",
      "started_at": "1970-01-01T00:00:00Z",
      "finished_at": "1970-01-01T00:00:00Z",
      "duration_sec": 0,
      "done": 0,
      "total": 0,
      "children": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the operation.|
|started_at|string(date-time) \| null|false|none|When the operation started.|
|finished_at|string(date-time) \| null|false|none|When the operation finished.|
|duration_sec|number(double) \| null|false|none|For finished operations, how long they took, in seconds.|
|done|integer(uint64) \| null|false|none|Number of completed units of work, if applicable.|
|total|integer(uint64) \| null|false|none|Total number of units of work, if applicable and known.|
|children|[[ProgressTree](#schemaprogresstree)]|false|none|Child operations.|

<h2 id="tocS_PendingOptimization">PendingOptimization</h2>
<!-- backwards compatibility -->
<a id="schemapendingoptimization"></a>
<a id="schema_PendingOptimization"></a>
<a id="tocSpendingoptimization"></a>
<a id="tocspendingoptimization"></a>

```json
{
  "optimizer": "string",
  "segments": [
    {
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "points_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|optimizer|string|true|none|Name of the optimizer that scheduled this optimization.|
|segments|[[OptimizationSegmentInfo](#schemaoptimizationsegmentinfo)]|true|none|Segments that will be optimized.|

<h2 id="tocS_DistributedTelemetryData">DistributedTelemetryData</h2>
<!-- backwards compatibility -->
<a id="schemadistributedtelemetrydata"></a>
<a id="schema_DistributedTelemetryData"></a>
<a id="tocSdistributedtelemetrydata"></a>
<a id="tocsdistributedtelemetrydata"></a>

```json
{
  "collections": {
    "property1": {
      "id": "string",
      "shards": [
        {
          "id": 0,
          "key": "region_1",
          "replicas": [
            {
              "peer_id": 0,
              "state": "Active",
              "status": "green",
              "total_optimized_points": 0,
              "vectors_size_bytes": 0,
              "payloads_size_bytes": 0,
              "num_points": 0,
              "num_vectors": 0,
              "num_vectors_by_name": {
                "property1": 0,
                "property2": 0
              },
              "shard_cleaning_status": "started",
              "partial_snapshot": {
                "ongoing_create_snapshot_requests": 0,
                "is_recovering": true,
                "recovery_timestamp": 0
              }
            }
          ]
        }
      ],
      "reshardings": [
        {
          "direction": "up",
          "shard_id": 0,
          "peer_id": 0,
          "shard_key": "region_1"
        }
      ],
      "shard_transfers": [
        {
          "shard_id": 0,
          "to_shard_id": 0,
          "from": 0,
          "to": 0,
          "sync": true,
          "method": "stream_records",
          "comment": "string"
        }
      ]
    },
    "property2": {
      "id": "string",
      "shards": [
        {
          "id": 0,
          "key": "region_1",
          "replicas": [
            {
              "peer_id": 0,
              "state": "Active",
              "status": "green",
              "total_optimized_points": 0,
              "vectors_size_bytes": 0,
              "payloads_size_bytes": 0,
              "num_points": 0,
              "num_vectors": 0,
              "num_vectors_by_name": {
                "property1": 0,
                "property2": 0
              },
              "shard_cleaning_status": "started",
              "partial_snapshot": {
                "ongoing_create_snapshot_requests": 0,
                "is_recovering": true,
                "recovery_timestamp": 0
              }
            }
          ]
        }
      ],
      "reshardings": [
        {
          "direction": "up",
          "shard_id": 0,
          "peer_id": 0,
          "shard_key": "region_1"
        }
      ],
      "shard_transfers": [
        {
          "shard_id": 0,
          "to_shard_id": 0,
          "from": 0,
          "to": 0,
          "sync": true,
          "method": "stream_records",
          "comment": "string"
        }
      ]
    }
  },
  "cluster": {
    "enabled": true,
    "number_of_peers": 0,
    "peers": {
      "property1": {
        "uri": "string",
        "responsive": true,
        "details": {
          "version": "string",
          "role": "Follower",
          "is_voter": true,
          "term": 0,
          "commit": 0,
          "num_pending_operations": 0,
          "consensus_thread_status": {
            "consensus_thread_status": "working",
            "last_update": "1970-01-01T00:00:00Z"
          }
        }
      },
      "property2": {
        "uri": "string",
        "responsive": true,
        "details": {
          "version": "string",
          "role": "Follower",
          "is_voter": true,
          "term": 0,
          "commit": 0,
          "num_pending_operations": 0,
          "consensus_thread_status": {
            "consensus_thread_status": "working",
            "last_update": "1970-01-01T00:00:00Z"
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collections|object|true|none|none|
|cluster|[DistributedClusterTelemetry](#schemadistributedclustertelemetry) \| object \| null|false|none|none|

<h2 id="tocS_DistributedCollectionTelemetry">DistributedCollectionTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemadistributedcollectiontelemetry"></a>
<a id="schema_DistributedCollectionTelemetry"></a>
<a id="tocSdistributedcollectiontelemetry"></a>
<a id="tocsdistributedcollectiontelemetry"></a>

```json
{
  "id": "string",
  "shards": [
    {
      "id": 0,
      "key": "region_1",
      "replicas": [
        {
          "peer_id": 0,
          "state": "Active",
          "status": "green",
          "total_optimized_points": 0,
          "vectors_size_bytes": 0,
          "payloads_size_bytes": 0,
          "num_points": 0,
          "num_vectors": 0,
          "num_vectors_by_name": {
            "property1": 0,
            "property2": 0
          },
          "shard_cleaning_status": "started",
          "partial_snapshot": {
            "ongoing_create_snapshot_requests": 0,
            "is_recovering": true,
            "recovery_timestamp": 0
          }
        }
      ]
    }
  ],
  "reshardings": [
    {
      "direction": "up",
      "shard_id": 0,
      "peer_id": 0,
      "shard_key": "region_1"
    }
  ],
  "shard_transfers": [
    {
      "shard_id": 0,
      "to_shard_id": 0,
      "from": 0,
      "to": 0,
      "sync": true,
      "method": "stream_records",
      "comment": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Collection name|
|shards|[[DistributedShardTelemetry](#schemadistributedshardtelemetry)]|false|none|Shards topology|
|reshardings|[[ReshardingInfo](#schemareshardinginfo)]|false|none|Ongoing resharding operations|
|shard_transfers|[[ShardTransferInfo](#schemashardtransferinfo)]|false|none|Ongoing shard transfers|

<h2 id="tocS_DistributedShardTelemetry">DistributedShardTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemadistributedshardtelemetry"></a>
<a id="schema_DistributedShardTelemetry"></a>
<a id="tocSdistributedshardtelemetry"></a>
<a id="tocsdistributedshardtelemetry"></a>

```json
{
  "id": 0,
  "key": "region_1",
  "replicas": [
    {
      "peer_id": 0,
      "state": "Active",
      "status": "green",
      "total_optimized_points": 0,
      "vectors_size_bytes": 0,
      "payloads_size_bytes": 0,
      "num_points": 0,
      "num_vectors": 0,
      "num_vectors_by_name": {
        "property1": 0,
        "property2": 0
      },
      "shard_cleaning_status": "started",
      "partial_snapshot": {
        "ongoing_create_snapshot_requests": 0,
        "is_recovering": true,
        "recovery_timestamp": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(uint32)|true|none|Shard ID|
|key|[ShardKey](#schemashardkey) \| object \| null|false|none|Optional shard key|
|replicas|[[DistributedReplicaTelemetry](#schemadistributedreplicatelemetry)]|true|none|Replica information|

<h2 id="tocS_DistributedReplicaTelemetry">DistributedReplicaTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemadistributedreplicatelemetry"></a>
<a id="schema_DistributedReplicaTelemetry"></a>
<a id="tocSdistributedreplicatelemetry"></a>
<a id="tocsdistributedreplicatelemetry"></a>

```json
{
  "peer_id": 0,
  "state": "Active",
  "status": "green",
  "total_optimized_points": 0,
  "vectors_size_bytes": 0,
  "payloads_size_bytes": 0,
  "num_points": 0,
  "num_vectors": 0,
  "num_vectors_by_name": {
    "property1": 0,
    "property2": 0
  },
  "shard_cleaning_status": "started",
  "partial_snapshot": {
    "ongoing_create_snapshot_requests": 0,
    "is_recovering": true,
    "recovery_timestamp": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|peer_id|integer(uint64)|true|none|Peer ID hosting this replica|
|state|[ReplicaState](#schemareplicastate)|true|none|State of the single shard within a replica set.|
|status|[ShardStatus](#schemashardstatus) \| object \| null|false|none|Shard status|
|total_optimized_points|integer(uint) \| null|false|none|Total optimized points|
|vectors_size_bytes|integer(uint) \| null|false|none|Estimated vectors size in bytes|
|payloads_size_bytes|integer(uint) \| null|false|none|Estimated payloads size in bytes|
|num_points|integer(uint) \| null|false|none|Approximate number of points|
|num_vectors|integer(uint) \| null|false|none|Approximate number of vectors|
|num_vectors_by_name|object \| null|false|none|Approximate number of vectors by name|
|shard_cleaning_status|[ShardCleanStatusTelemetry](#schemashardcleanstatustelemetry) \| object \| null|false|none|Shard cleaning task status. After a resharding, a cleanup task is performed to remove outdated points from this shard.|
|partial_snapshot|[PartialSnapshotTelemetry](#schemapartialsnapshottelemetry) \| object \| null|false|none|Partial snapshot telemetry|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Active|
|state|Dead|
|state|Partial|
|state|Initializing|
|state|Listener|
|state|PartialSnapshot|
|state|Recovery|
|state|Resharding|
|state|ReshardingScaleDown|
|state|ActiveRead|
|state|ManualRecovery|

<h2 id="tocS_DistributedClusterTelemetry">DistributedClusterTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemadistributedclustertelemetry"></a>
<a id="schema_DistributedClusterTelemetry"></a>
<a id="tocSdistributedclustertelemetry"></a>
<a id="tocsdistributedclustertelemetry"></a>

```json
{
  "enabled": true,
  "number_of_peers": 0,
  "peers": {
    "property1": {
      "uri": "string",
      "responsive": true,
      "details": {
        "version": "string",
        "role": "Follower",
        "is_voter": true,
        "term": 0,
        "commit": 0,
        "num_pending_operations": 0,
        "consensus_thread_status": {
          "consensus_thread_status": "working",
          "last_update": "1970-01-01T00:00:00Z"
        }
      }
    },
    "property2": {
      "uri": "string",
      "responsive": true,
      "details": {
        "version": "string",
        "role": "Follower",
        "is_voter": true,
        "term": 0,
        "commit": 0,
        "num_pending_operations": 0,
        "consensus_thread_status": {
          "consensus_thread_status": "working",
          "last_update": "1970-01-01T00:00:00Z"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|number_of_peers|integer(uint64) \| null|false|none|none|
|peers|object|true|none|none|

<h2 id="tocS_DistributedPeerInfo">DistributedPeerInfo</h2>
<!-- backwards compatibility -->
<a id="schemadistributedpeerinfo"></a>
<a id="schema_DistributedPeerInfo"></a>
<a id="tocSdistributedpeerinfo"></a>
<a id="tocsdistributedpeerinfo"></a>

```json
{
  "uri": "string",
  "responsive": true,
  "details": {
    "version": "string",
    "role": "Follower",
    "is_voter": true,
    "term": 0,
    "commit": 0,
    "num_pending_operations": 0,
    "consensus_thread_status": {
      "consensus_thread_status": "working",
      "last_update": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|true|none|URI of the peer|
|responsive|boolean|true|none|Whether this peer responded for this request|
|details|[DistributedPeerDetails](#schemadistributedpeerdetails) \| object \| null|false|none|If responsive, these details should be available|

<h2 id="tocS_DistributedPeerDetails">DistributedPeerDetails</h2>
<!-- backwards compatibility -->
<a id="schemadistributedpeerdetails"></a>
<a id="schema_DistributedPeerDetails"></a>
<a id="tocSdistributedpeerdetails"></a>
<a id="tocsdistributedpeerdetails"></a>

```json
{
  "version": "string",
  "role": "Follower",
  "is_voter": true,
  "term": 0,
  "commit": 0,
  "num_pending_operations": 0,
  "consensus_thread_status": {
    "consensus_thread_status": "working",
    "last_update": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Qdrant version|
|role|[StateRole](#schemastaterole) \| object \| null|false|none|Consensus role for the peer|
|is_voter|boolean|true|none|Whether it can participate in leader elections|
|term|integer(uint64)|true|none|Election term|
|commit|integer(uint64)|true|none|Latest accepted commit|
|num_pending_operations|integer(uint64)|true|none|Number of operations pending for being applied|
|consensus_thread_status|[ConsensusThreadStatus](#schemaconsensusthreadstatus)|true|none|Information about current consensus thread status|

<h2 id="tocS_VectorNameConfig">VectorNameConfig</h2>
<!-- backwards compatibility -->
<a id="schemavectornameconfig"></a>
<a id="schema_VectorNameConfig"></a>
<a id="tocSvectornameconfig"></a>
<a id="tocsvectornameconfig"></a>

```json
{
  "dense": {
    "size": 1,
    "distance": "Cosine",
    "multivector_config": {
      "comparator": "max_sim"
    },
    "datatype": "float32"
  }
}
```

Configuration for creating a new named vector.

Contains only the immutable properties that define a vector space. Storage type, index, and quantization are determined automatically based on the segment type and can be configured separately later.

Example JSON for a dense vector: ```json { "dense": { "size": 768, "distance": "Cosine" } } ```

Example JSON for a sparse vector: ```json { "sparse": { "modifier": "Idf" } } ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[DenseVectorNameConfig](#schemadensevectornameconfig)|false|none|Wrapper for dense vector creation config.|
|*anyOf*|[SparseVectorNameConfig](#schemasparsevectornameconfig)|false|none|Wrapper for sparse vector creation config.|

<h2 id="tocS_DenseVectorNameConfig">DenseVectorNameConfig</h2>
<!-- backwards compatibility -->
<a id="schemadensevectornameconfig"></a>
<a id="schema_DenseVectorNameConfig"></a>
<a id="tocSdensevectornameconfig"></a>
<a id="tocsdensevectornameconfig"></a>

```json
{
  "dense": {
    "size": 1,
    "distance": "Cosine",
    "multivector_config": {
      "comparator": "max_sim"
    },
    "datatype": "float32"
  }
}
```

Wrapper for dense vector creation config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dense|[DenseVectorConfig](#schemadensevectorconfig)|true|none|Configuration for creating a new dense named vector.<br><br>Only includes properties that define the vector space and cannot be changed after creation. Storage type, index type, and quantization are inferred.|

<h2 id="tocS_DenseVectorConfig">DenseVectorConfig</h2>
<!-- backwards compatibility -->
<a id="schemadensevectorconfig"></a>
<a id="schema_DenseVectorConfig"></a>
<a id="tocSdensevectorconfig"></a>
<a id="tocsdensevectorconfig"></a>

```json
{
  "size": 1,
  "distance": "Cosine",
  "multivector_config": {
    "comparator": "max_sim"
  },
  "datatype": "float32"
}
```

Configuration for creating a new dense named vector.

Only includes properties that define the vector space and cannot be changed after creation. Storage type, index type, and quantization are inferred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(uint)|true|none|Dimensionality of the vectors|
|distance|[Distance](#schemadistance)|true|none|Type of internal tags, build from payload Distance function types used to compare vectors|
|multivector_config|[MultiVectorConfig](#schemamultivectorconfig) \| object \| null|false|none|Configuration for multi-vector points (e.g., ColBERT)|
|datatype|[VectorStorageDatatype](#schemavectorstoragedatatype) \| object \| null|false|none|Element storage type (Float32, Float16, Uint8, Turbo4, Turbo8, Turbo16)|

#### Enumerated Values

|Property|Value|
|---|---|
|distance|Cosine|
|distance|Euclid|
|distance|Dot|
|distance|Manhattan|

<h2 id="tocS_SparseVectorNameConfig">SparseVectorNameConfig</h2>
<!-- backwards compatibility -->
<a id="schemasparsevectornameconfig"></a>
<a id="schema_SparseVectorNameConfig"></a>
<a id="tocSsparsevectornameconfig"></a>
<a id="tocssparsevectornameconfig"></a>

```json
{
  "sparse": {
    "modifier": "none",
    "datatype": "float32"
  }
}
```

Wrapper for sparse vector creation config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sparse|[SparseVectorConfig](#schemasparsevectorconfig)|true|none|Configuration for creating a new sparse named vector.<br><br>Only includes properties that define the vector space and cannot be changed after creation.|

<h2 id="tocS_SparseVectorConfig">SparseVectorConfig</h2>
<!-- backwards compatibility -->
<a id="schemasparsevectorconfig"></a>
<a id="schema_SparseVectorConfig"></a>
<a id="tocSsparsevectorconfig"></a>
<a id="tocssparsevectorconfig"></a>

```json
{
  "modifier": "none",
  "datatype": "float32"
}
```

Configuration for creating a new sparse named vector.

Only includes properties that define the vector space and cannot be changed after creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modifier|[Modifier](#schemamodifier) \| object \| null|false|none|Value modifier for sparse vectors (e.g., IDF)|
|datatype|[VectorStorageDatatype](#schemavectorstoragedatatype) \| object \| null|false|none|Datatype used to store weights in the index|

<h2 id="tocS_QuotaStatus">QuotaStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquotastatus"></a>
<a id="schema_QuotaStatus"></a>
<a id="tocSquotastatus"></a>
<a id="tocsquotastatus"></a>

```json
{
  "config": {
    "enabled": false,
    "max_resident_memory_percent": 1,
    "max_disk_usage_percent": 1,
    "release_margin_percent": 0
  },
  "usage": {
    "resident_memory_percent": 0,
    "disk_usage_percent": 0
  },
  "peers": {
    "property1": {
      "exceeded": true,
      "resident_memory_percent": 0,
      "disk_usage_percent": 0
    },
    "property2": {
      "exceeded": true,
      "resident_memory_percent": 0,
      "disk_usage_percent": 0
    }
  }
}
```

Quota configuration in effect, and how close each peer is to it.

The configuration is cluster-wide; the utilization is not. `usage` is the node that served the request, and `peers` is what every peer that answered reports about itself — memory and disk are node-local, so one peer being under its limit says nothing about the others.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[QuotaConfig](#schemaquotaconfig)|true|none|Cluster-wide limits on node resources.<br><br>An unset limit means the corresponding resource is not capped. Limits are only enforced while `enabled` is true.|
|usage|[QuotaUsage](#schemaquotausage)|true|none|Utilization of the quota-managed resources **on this node alone** — memory and disk are node-local, so a peer under its limit says nothing about the rest of the cluster.<br><br>A field is `null` when the platform does not expose the underlying stat.|
|peers|object \| null|false|none|Utilization reported by each peer, keyed by peer ID, including the one that served the request.<br><br>Only peers that answered are listed: a peer missing from the map could not be reached, which is itself worth seeing. Absent entirely outside distributed mode, where there are no peers to ask.|

<h2 id="tocS_QuotaUsage">QuotaUsage</h2>
<!-- backwards compatibility -->
<a id="schemaquotausage"></a>
<a id="schema_QuotaUsage"></a>
<a id="tocSquotausage"></a>
<a id="tocsquotausage"></a>

```json
{
  "resident_memory_percent": 0,
  "disk_usage_percent": 0
}
```

Utilization of the quota-managed resources **on this node alone** — memory and disk are node-local, so a peer under its limit says nothing about the rest of the cluster.

A field is `null` when the platform does not expose the underlying stat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resident_memory_percent|integer(uint8) \| null|false|none|Resident memory of this node's process, as a percentage of the memory available to it (cgroup limit if one applies, else total system memory).|
|disk_usage_percent|integer(uint8) \| null|false|none|Used space of this node's storage filesystem, as a percentage of its capacity.|

<h2 id="tocS_PeerQuotaUsage">PeerQuotaUsage</h2>
<!-- backwards compatibility -->
<a id="schemapeerquotausage"></a>
<a id="schema_PeerQuotaUsage"></a>
<a id="tocSpeerquotausage"></a>
<a id="tocspeerquotausage"></a>

```json
{
  "exceeded": true,
  "resident_memory_percent": 0,
  "disk_usage_percent": 0
}
```

What one peer reports about the quota it is enforcing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exceeded|boolean|true|none|Whether this peer is at or over one of the enforced limits, and so is currently refusing updates. Always false while the quota is disabled.|
|resident_memory_percent|integer(uint8) \| null|false|none|Resident memory of this node's process, as a percentage of the memory available to it (cgroup limit if one applies, else total system memory).|
|disk_usage_percent|integer(uint8) \| null|false|none|Used space of this node's storage filesystem, as a percentage of its capacity.|
