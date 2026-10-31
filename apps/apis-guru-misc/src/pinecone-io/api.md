<h1 id="pinecone-api">Pinecone API v20230401.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Pinecone is a vector database. This is an unofficial, community-managed OpenAPI spec that (should) accurately model the Pinecone API. This project was developed independent of and is unaffiliated with Pinecone Systems. Users should switch to the official API spec, if and when Pinecone releases it.

Base URLs:

* <a href="https://controller.us-east1-gcp.pinecone.io">https://controller.us-east1-gcp.pinecone.io</a>

Web: <a href="https://github.com/sigpwned/pinecone-openapi-spec">Andy Boothe</a> 

<a href="https://docs.pinecone.io/">The official Pinecone API documentation</a>

# Authentication

* API Key (ApiKey)
    - Parameter Name: **Api-Key**, in: header.

<h1 id="pinecone-api-index-operations">Index Operations</h1>

Endpoints for manipulating indexes

## List collections

<a id="opIdlist_collections"></a>

> Code samples

```bash
curl https://example.com/collections \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /collections`

This operation returns a list of your Pinecone collections.

> Example responses

> 200 Response

```json
[
  "example"
]
```

<h3 id="list-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This operation returns a list of all the collections in your current project.|[CollectionsList](#schemacollectionslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create collection

<a id="opIdcreate_collection"></a>

> Code samples

```bash
curl https://example.com/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "name": "example",
    "source": "example"
  }'
```

`POST /collections`

This operation creates a Pinecone collection.

> Body parameter

```json
{
  "name": "example",
  "source": "example"
}
```

<h3 id="create-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionDefinition](#schemacollectiondefinition)|true|none|
|» name|body|[CollectionName](#schemacollectionname)|true|The unique name of a collection.|
|» source|body|[IndexName](#schemaindexname)|true|The unique name of an index.|

> Example responses

> 201 Response

```text
Created
```

<h3 id="create-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The collection has been successfully created.|Inline|
|400|Bad Request|Quota exceeded, or invalid parameters.|[ErrorMessage](#schemaerrormessage)|
|409|Conflict|A collection with the name provided already exists.|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal error. Can be caused by invalid parameters.|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Describe collection

<a id="opIddescribe_collection"></a>

> Code samples

```bash
curl https://example.com/collections/example \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /collections/{collectionName}`

Get a description of a collection.

<h3 id="describe-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|[CollectionName](#schemacollectionname)|true|none|

> Example responses

> 200 Response

```json
{
  "name": "example",
  "size": 3590359,
  "status": "Ready"
}
```

<h3 id="describe-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This operation returns a list of all the collections in your current project.|[Collection](#schemacollection)|
|404|Not Found|Collection not found.|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal error. Can be caused by invalid parameters.|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete Collection

<a id="opIddelete_collection"></a>

> Code samples

```bash
curl https://example.com/collections/example \
  -X DELETE \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /collections/{collectionName}`

This operation deletes an existing collection.

<h3 id="delete-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|[CollectionName](#schemacollectionname)|true|none|

> Example responses

> 202 Response

```text
Accepted
```

<h3 id="delete-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The collection has been successfully deleted.|Inline|
|404|Not Found|Collection not found.|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal error. Can be caused by invalid parameters.|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List indexes

<a id="opIdlist_indexes"></a>

> Code samples

```bash
curl https://example.com/indexes \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /indexes`

This operation returns a list of your Pinecone indexes.

> Example responses

> 200 Response

```json
[
  "example"
]
```

<h3 id="list-indexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This operation returns a list of all the indexes that you have previously created, and which are associated with the given API key|[IndexesList](#schemaindexeslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create index

<a id="opIdcreate_index"></a>

> Code samples

```bash
curl https://example.com/indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "dimension": 1,
    "metadata_config": {
      "indexed": [
        "hello"
      ]
    },
    "metric": "euclidean",
    "name": "example",
    "pod_type": "s1.x1",
    "pods": 1,
    "replicas": 1,
    "source_collection": "example"
  }'
```

`POST /indexes`

This operation creates a Pinecone index. You can use it to specify the measure of similarity, the dimension of vectors to be stored in the index, the numbers of replicas to use, and more.

> Body parameter

```json
{
  "dimension": 1,
  "metadata_config": {
    "indexed": [
      "hello"
    ]
  },
  "metric": "euclidean",
  "name": "example",
  "pod_type": "s1.x1",
  "pods": 1,
  "replicas": 1,
  "source_collection": "example"
}
```

<h3 id="create-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndexDefinition](#schemaindexdefinition)|true|none|
|» dimension|body|[VectorDimensionality](#schemavectordimensionality)|true|The number of dimensions in the vector representation|
|» metadata_config|body|[IndexMetadataConfig](#schemaindexmetadataconfig)|false|Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed.|
|» metric|body|[IndexMetric](#schemaindexmetric)|false|The vector similarity metric of the index|
|» name|body|[IndexName](#schemaindexname)|true|The unique name of an index.|
|» pod_type|body|[PodType](#schemapodtype)|false|The pod type|
|» pods|body|integer(int32)|false|The number of pods for the index to use,including replicas.|
|» replicas|body|integer(int32)|false|The number of replicas. Replicas duplicate your index. They provide higher availability and throughput.|
|» source_collection|body|[CollectionName](#schemacollectionname)|false|The unique name of a collection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» metric|euclidean|
|» metric|cosine|
|» metric|dotproduct|
|» pod_type|s1.x1|
|» pod_type|s1.x2|
|» pod_type|s1.x4|
|» pod_type|s1.x8|
|» pod_type|p1.x1|
|» pod_type|p1.x2|
|» pod_type|p1.x4|
|» pod_type|p1.x8|
|» pod_type|p2.x1|
|» pod_type|p2.x2|
|» pod_type|p2.x4|
|» pod_type|p2.x8|

> Example responses

> 201 Response

```text
Created
```

<h3 id="create-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The collection has been successfully created.|Inline|
|400|Bad Request|Quota exceeded, or invalid parameters.|[ErrorMessage](#schemaerrormessage)|
|409|Conflict|Index of given name already exists.|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal error. Can be caused by invalid parameters.|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Describe index

<a id="opIddescribe_index"></a>

> Code samples

```bash
curl https://example.com/indexes/example \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /indexes/{indexName}`

Get a description of an index.

<h3 id="describe-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|[IndexName](#schemaindexname)|true|none|

> Example responses

> 200 Response

```json
{
  "database": {
    "dimension": 1,
    "metric": "euclidean",
    "name": "example",
    "pod_type": "s1.x1",
    "pods": 1,
    "replicas": 1,
    "shards": 1
  },
  "status": {
    "host": "string",
    "port": 0,
    "ready": true,
    "state": "Ready"
  }
}
```

<h3 id="describe-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This operation returns a list of all the collections in your current project.|[Index](#schemaindex)|
|404|Not Found|Index not found.|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal error. Can be caused by invalid parameters.|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete Index

<a id="opIddelete_index"></a>

> Code samples

```bash
curl https://example.com/indexes/example \
  -X DELETE \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /indexes/{indexName}`

This operation deletes an existing index.

<h3 id="delete-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|[IndexName](#schemaindexname)|true|none|

> Example responses

> 202 Response

```text
Accepted
```

<h3 id="delete-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The index has been successfully deleted.|Inline|
|404|Not Found|Index not found.|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal error. Can be caused by invalid parameters.|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Configure index

<a id="opIdconfigure_index"></a>

> Code samples

```bash
curl https://example.com/indexes/example \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "pod_type": "s1.x1",
    "replicas": 1
  }'
```

`PATCH /indexes/{indexName}`

This operation specifies the pod type and number of replicas for an index.

> Body parameter

```json
{
  "pod_type": "s1.x1",
  "replicas": 1
}
```

<h3 id="configure-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexName|path|[IndexName](#schemaindexname)|true|none|
|body|body|[IndexConfiguration](#schemaindexconfiguration)|true|none|
|» pod_type|body|[PodType](#schemapodtype)|false|The pod type|
|» replicas|body|integer(int32)|false|The desired number of replicas for the index.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» pod_type|s1.x1|
|» pod_type|s1.x2|
|» pod_type|s1.x4|
|» pod_type|s1.x8|
|» pod_type|p1.x1|
|» pod_type|p1.x2|
|» pod_type|p1.x4|
|» pod_type|p1.x8|
|» pod_type|p2.x1|
|» pod_type|p2.x2|
|» pod_type|p2.x4|
|» pod_type|p2.x8|

> Example responses

> 201 Response

```text
Accepted
```

<h3 id="configure-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The index has been successfully updated.|Inline|
|400|Bad Request|Quota exceeded, or invalid parameters.|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Index not found.|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal error. Can be caused by invalid parameters.|[ErrorMessage](#schemaerrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="pinecone-api-vector-operations">Vector Operations</h1>

Endpoints for manipulating vectors

## Describe Index Stats

<a id="opIdDescribeIndexStats"></a>

> Code samples

```bash
curl https://example.com/describe_index_stats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "filter": {
      "hello": [
        "alpha",
        "bravo"
      ]
    }
  }'
```

`POST /describe_index_stats`

The `DescribeIndexStats` operation returns statistics about the index's contents, including the vector count per namespace and the number of dimensions.

> Body parameter

```json
{
  "filter": {
    "hello": [
      "alpha",
      "bravo"
    ]
  }
}
```

<h3 id="describe-index-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DescribeIndexStatsRequest](#schemadescribeindexstatsrequest)|true|none|
|» filter|body|[VectorFilter](#schemavectorfilter)|false|If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.|

> Example responses

> 200 Response

```json
{
  "dimension": 1,
  "indexFullness": 0,
  "namespaces": {
    "property1": {
      "vectorCount": 0
    },
    "property2": {
      "vectorCount": 0
    }
  },
  "totalVectorCount": 0
}
```

<h3 id="describe-index-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response|[DescribeIndexStatsResponse](#schemadescribeindexstatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Query

<a id="opIdQuery"></a>

> Code samples

```bash
curl https://example.com/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "filter": {
      "hello": [
        "alpha",
        "bravo"
      ]
    },
    "id": "vector-0",
    "includeMetadata": false,
    "includeValues": false,
    "namespace": "namespace-0",
    "sparseVector": {
      "indices": [
        1
      ],
      "values": [
        2
      ]
    },
    "topK": 100,
    "vector": [
      1,
      2,
      3
    ]
  }'
```

`POST /query`

The `Query` operation searches a namespace, using a query vector. It retrieves the ids of the most similar items in a namespace, along with their similarity scores.

> Body parameter

```json
{
  "filter": {
    "hello": [
      "alpha",
      "bravo"
    ]
  },
  "id": "vector-0",
  "includeMetadata": false,
  "includeValues": false,
  "namespace": "namespace-0",
  "sparseVector": {
    "indices": [
      1
    ],
    "values": [
      2
    ]
  },
  "topK": 100,
  "vector": [
    1,
    2,
    3
  ]
}
```

<h3 id="query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueryRequest](#schemaqueryrequest)|true|none|
|» filter|body|[VectorFilter](#schemavectorfilter)|false|If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.|
|» id|body|[VectorId](#schemavectorid)|false|The unique ID of a vector|
|» includeMetadata|body|boolean|false|none|
|» includeValues|body|boolean|false|none|
|» namespace|body|[NamespaceName](#schemanamespacename)|false|An index namespace name|
|» sparseVector|body|[SparseVectorData](#schemasparsevectordata)|false|Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length.|
|» topK|body|integer(int64)|true|The number of results to return for each query.|
|» vector|body|[VectorData](#schemavectordata)|false|Vector dense data. This should be the same length as the dimension of the index being queried.|

> Example responses

> 200 Response

```json
{
  "matches": [
    {
      "id": "vector-0",
      "metadata": {
        "hello": "alpha"
      },
      "score": 0,
      "sparseValues": {
        "indices": [
          1
        ],
        "values": [
          2
        ]
      },
      "values": [
        1,
        2,
        3
      ]
    }
  ],
  "namespace": "namespace-0"
}
```

<h3 id="query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response|[QueryResponse](#schemaqueryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete

<a id="opIdDelete"></a>

> Code samples

```bash
curl https://example.com/vectors/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "deleteAll": false,
    "filter": {
      "hello": [
        "alpha",
        "bravo"
      ]
    },
    "ids": [
      "vector-0"
    ],
    "namespace": "namespace-0"
  }'
```

`POST /vectors/delete`

The `Delete` operation deletes vectors, by id, from a single namespace. You can delete items by their id, from a single namespace.

> Body parameter

```json
{
  "deleteAll": false,
  "filter": {
    "hello": [
      "alpha",
      "bravo"
    ]
  },
  "ids": [
    "vector-0"
  ],
  "namespace": "namespace-0"
}
```

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteRequest](#schemadeleterequest)|true|none|
|» deleteAll|body|boolean|false|none|
|» filter|body|[VectorFilter](#schemavectorfilter)|false|If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.|
|» ids|body|[[VectorId](#schemavectorid)]|false|none|
|» namespace|body|[NamespaceName](#schemanamespacename)|false|An index namespace name|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response|[DeleteResponse](#schemadeleteresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Fetch

<a id="opIdFetch"></a>

> Code samples

```bash
curl https://example.com/vectors/fetch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      "vector-0"
    ],
    "namespace": "namespace-0"
  }'
```

`POST /vectors/fetch`

The `Fetch` operation looks up and returns vectors, by ID, from a single namespace. The returned vectors include the vector data and/or metadata.

> Body parameter

```json
{
  "ids": [
    "vector-0"
  ],
  "namespace": "namespace-0"
}
```

<h3 id="fetch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FetchRequest](#schemafetchrequest)|true|none|
|» ids|body|[[VectorId](#schemavectorid)]|true|none|
|» namespace|body|[NamespaceName](#schemanamespacename)|false|An index namespace name|

> Example responses

> 200 Response

```json
{
  "namespace": "namespace-0",
  "vectors": {
    "property1": [
      1,
      2,
      3
    ],
    "property2": [
      1,
      2,
      3
    ]
  }
}
```

<h3 id="fetch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response|[FetchResponse](#schemafetchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Fetch

<a id="opIdUpdate"></a>

> Code samples

```bash
curl https://example.com/vectors/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "id": "string",
    "namespace": "namespace-0",
    "setMetadata": {
      "hello": "alpha"
    },
    "sparseValues": {
      "indices": [
        1
      ],
      "values": [
        2
      ]
    },
    "values": [
      1,
      2,
      3
    ]
  }'
```

`POST /vectors/update`

The `Update` operation updates vector in a namespace. If a value is included, it will overwrite the previous value. If a set_metadata is included, the values of the fields specified in it will be added or overwrite the previous value.

> Body parameter

```json
{
  "id": "string",
  "namespace": "namespace-0",
  "setMetadata": {
    "hello": "alpha"
  },
  "sparseValues": {
    "indices": [
      1
    ],
    "values": [
      2
    ]
  },
  "values": [
    1,
    2,
    3
  ]
}
```

<h3 id="fetch-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateRequest](#schemaupdaterequest)|true|none|
|» id|body|string(VectorId)|true|The vector's unique ID|
|» namespace|body|[NamespaceName](#schemanamespacename)|false|An index namespace name|
|» setMetadata|body|[VectorMetadata](#schemavectormetadata)|false|none|
|» sparseValues|body|[SparseVectorData](#schemasparsevectordata)|false|Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length.|
|» values|body|[VectorData](#schemavectordata)|false|Vector dense data. This should be the same length as the dimension of the index being queried.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="fetch-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response|[UpdateResponse](#schemaupdateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Upsert

<a id="opIdUpsert"></a>

> Code samples

```bash
curl https://example.com/vectors/upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "namespace": "namespace-0",
    "vectors": [
      {
        "id": "vector-0",
        "metadata": {
          "hello": "alpha"
        },
        "sparseValues": {
          "indices": [
            1
          ],
          "values": [
            2
          ]
        },
        "values": [
          1,
          2,
          3
        ]
      }
    ]
  }'
```

`POST /vectors/upsert`

The Upsert operation writes vectors into a namespace. If a new value is upserted for an existing vector id, it will overwrite the previous value.

> Body parameter

```json
{
  "namespace": "namespace-0",
  "vectors": [
    {
      "id": "vector-0",
      "metadata": {
        "hello": "alpha"
      },
      "sparseValues": {
        "indices": [
          1
        ],
        "values": [
          2
        ]
      },
      "values": [
        1,
        2,
        3
      ]
    }
  ]
}
```

<h3 id="upsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpsertRequest](#schemaupsertrequest)|true|none|
|» namespace|body|[NamespaceName](#schemanamespacename)|false|An index namespace name|
|» vectors|body|[[UpsertVector](#schemaupsertvector)]|true|none|

> Example responses

> 200 Response

```json
{
  "upsertedCount": 0
}
```

<h3 id="upsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response|[UpsertResponse](#schemaupsertresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

# Schemas

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "name": "example",
  "size": 3590359,
  "status": "Ready"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[CollectionName](#schemacollectionname)|true|none|The unique name of a collection.|
|size|integer(int64)|true|none|none|
|status|[CollectionState](#schemacollectionstate)|true|none|The current status of a collection.|

<h2 id="tocS_CollectionDefinition">CollectionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacollectiondefinition"></a>
<a id="schema_CollectionDefinition"></a>
<a id="tocScollectiondefinition"></a>
<a id="tocscollectiondefinition"></a>

```json
{
  "name": "example",
  "source": "example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[CollectionName](#schemacollectionname)|true|none|The unique name of a collection.|
|source|[IndexName](#schemaindexname)|true|none|The unique name of an index.|

<h2 id="tocS_CollectionName">CollectionName</h2>
<!-- backwards compatibility -->
<a id="schemacollectionname"></a>
<a id="schema_CollectionName"></a>
<a id="tocScollectionname"></a>
<a id="tocscollectionname"></a>

```json
"example"
```

The unique name of a collection.

<h2 id="tocS_CollectionState">CollectionState</h2>
<!-- backwards compatibility -->
<a id="schemacollectionstate"></a>
<a id="schema_CollectionState"></a>
<a id="tocScollectionstate"></a>
<a id="tocscollectionstate"></a>

```json
"Ready"
```

The current status of a collection.

<h2 id="tocS_CollectionsList">CollectionsList</h2>
<!-- backwards compatibility -->
<a id="schemacollectionslist"></a>
<a id="schema_CollectionsList"></a>
<a id="tocScollectionslist"></a>
<a id="tocscollectionslist"></a>

```json
[
  "example"
]
```

<h2 id="tocS_DeleteRequest">DeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterequest"></a>
<a id="schema_DeleteRequest"></a>
<a id="tocSdeleterequest"></a>
<a id="tocsdeleterequest"></a>

```json
{
  "deleteAll": false,
  "filter": {
    "hello": [
      "alpha",
      "bravo"
    ]
  },
  "ids": [
    "vector-0"
  ],
  "namespace": "namespace-0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteAll|boolean|false|none|none|
|filter|[VectorFilter](#schemavectorfilter)|false|none|If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.|
|ids|[[VectorId](#schemavectorid)]|false|none|none|
|namespace|[NamespaceName](#schemanamespacename)|false|none|An index namespace name|

<h2 id="tocS_DeleteResponse">DeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresponse"></a>
<a id="schema_DeleteResponse"></a>
<a id="tocSdeleteresponse"></a>
<a id="tocsdeleteresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeIndexStatsRequest">DescribeIndexStatsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeindexstatsrequest"></a>
<a id="schema_DescribeIndexStatsRequest"></a>
<a id="tocSdescribeindexstatsrequest"></a>
<a id="tocsdescribeindexstatsrequest"></a>

```json
{
  "filter": {
    "hello": [
      "alpha",
      "bravo"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[VectorFilter](#schemavectorfilter)|false|none|If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.|

<h2 id="tocS_DescribeIndexStatsResponse">DescribeIndexStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeindexstatsresponse"></a>
<a id="schema_DescribeIndexStatsResponse"></a>
<a id="tocSdescribeindexstatsresponse"></a>
<a id="tocsdescribeindexstatsresponse"></a>

```json
{
  "dimension": 1,
  "indexFullness": 0,
  "namespaces": {
    "property1": {
      "vectorCount": 0
    },
    "property2": {
      "vectorCount": 0
    }
  },
  "totalVectorCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|[VectorDimensionality](#schemavectordimensionality)|false|none|The number of dimensions in the vector representation|
|indexFullness|number(float)|false|none|The fullness of the index, regardless of whether a metadata filter expression was passed. The granularity of this metric is 10%.|
|namespaces|object|false|none|none|
|totalVectorCount|integer(int64)|false|none|none|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
"us-west1-gcp"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_FetchRequest">FetchRequest</h2>
<!-- backwards compatibility -->
<a id="schemafetchrequest"></a>
<a id="schema_FetchRequest"></a>
<a id="tocSfetchrequest"></a>
<a id="tocsfetchrequest"></a>

```json
{
  "ids": [
    "vector-0"
  ],
  "namespace": "namespace-0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[[VectorId](#schemavectorid)]|true|none|none|
|namespace|[NamespaceName](#schemanamespacename)|false|none|An index namespace name|

<h2 id="tocS_FetchResponse">FetchResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchresponse"></a>
<a id="schema_FetchResponse"></a>
<a id="tocSfetchresponse"></a>
<a id="tocsfetchresponse"></a>

```json
{
  "namespace": "namespace-0",
  "vectors": {
    "property1": [
      1,
      2,
      3
    ],
    "property2": [
      1,
      2,
      3
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|[NamespaceName](#schemanamespacename)|false|none|An index namespace name|
|vectors|object|false|none|none|

<h2 id="tocS_Index">Index</h2>
<!-- backwards compatibility -->
<a id="schemaindex"></a>
<a id="schema_Index"></a>
<a id="tocSindex"></a>
<a id="tocsindex"></a>

```json
{
  "database": {
    "dimension": 1,
    "metric": "euclidean",
    "name": "example",
    "pod_type": "s1.x1",
    "pods": 1,
    "replicas": 1,
    "shards": 1
  },
  "status": {
    "host": "string",
    "port": 0,
    "ready": true,
    "state": "Ready"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|[IndexDatabase](#schemaindexdatabase)|false|none|none|
|status|[IndexStatus](#schemaindexstatus)|false|none|none|

<h2 id="tocS_IndexConfiguration">IndexConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaindexconfiguration"></a>
<a id="schema_IndexConfiguration"></a>
<a id="tocSindexconfiguration"></a>
<a id="tocsindexconfiguration"></a>

```json
{
  "pod_type": "s1.x1",
  "replicas": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pod_type|[PodType](#schemapodtype)|false|none|The pod type|
|replicas|integer(int32)|false|none|The desired number of replicas for the index.|

#### Enumerated Values

|Property|Value|
|---|---|
|pod_type|s1.x1|
|pod_type|s1.x2|
|pod_type|s1.x4|
|pod_type|s1.x8|
|pod_type|p1.x1|
|pod_type|p1.x2|
|pod_type|p1.x4|
|pod_type|p1.x8|
|pod_type|p2.x1|
|pod_type|p2.x2|
|pod_type|p2.x4|
|pod_type|p2.x8|

<h2 id="tocS_IndexDatabase">IndexDatabase</h2>
<!-- backwards compatibility -->
<a id="schemaindexdatabase"></a>
<a id="schema_IndexDatabase"></a>
<a id="tocSindexdatabase"></a>
<a id="tocsindexdatabase"></a>

```json
{
  "dimension": 1,
  "metric": "euclidean",
  "name": "example",
  "pod_type": "s1.x1",
  "pods": 1,
  "replicas": 1,
  "shards": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|[VectorDimensionality](#schemavectordimensionality)|false|none|The number of dimensions in the vector representation|
|metric|[IndexMetric](#schemaindexmetric)|false|none|The vector similarity metric of the index|
|name|[IndexName](#schemaindexname)|false|none|The unique name of an index.|
|pod_type|[PodType](#schemapodtype)|false|none|The pod type|
|pods|integer(int32)|false|none|none|
|replicas|integer(int32)|false|none|none|
|shards|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|euclidean|
|metric|cosine|
|metric|dotproduct|
|pod_type|s1.x1|
|pod_type|s1.x2|
|pod_type|s1.x4|
|pod_type|s1.x8|
|pod_type|p1.x1|
|pod_type|p1.x2|
|pod_type|p1.x4|
|pod_type|p1.x8|
|pod_type|p2.x1|
|pod_type|p2.x2|
|pod_type|p2.x4|
|pod_type|p2.x8|

<h2 id="tocS_IndexDefinition">IndexDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaindexdefinition"></a>
<a id="schema_IndexDefinition"></a>
<a id="tocSindexdefinition"></a>
<a id="tocsindexdefinition"></a>

```json
{
  "dimension": 1,
  "metadata_config": {
    "indexed": [
      "hello"
    ]
  },
  "metric": "euclidean",
  "name": "example",
  "pod_type": "s1.x1",
  "pods": 1,
  "replicas": 1,
  "source_collection": "example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|[VectorDimensionality](#schemavectordimensionality)|true|none|The number of dimensions in the vector representation|
|metadata_config|[IndexMetadataConfig](#schemaindexmetadataconfig)|false|none|Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed.|
|metric|[IndexMetric](#schemaindexmetric)|false|none|The vector similarity metric of the index|
|name|[IndexName](#schemaindexname)|true|none|The unique name of an index.|
|pod_type|[PodType](#schemapodtype)|false|none|The pod type|
|pods|integer(int32)|false|none|The number of pods for the index to use,including replicas.|
|replicas|integer(int32)|false|none|The number of replicas. Replicas duplicate your index. They provide higher availability and throughput.|
|source_collection|[CollectionName](#schemacollectionname)|false|none|The unique name of a collection.|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|euclidean|
|metric|cosine|
|metric|dotproduct|
|pod_type|s1.x1|
|pod_type|s1.x2|
|pod_type|s1.x4|
|pod_type|s1.x8|
|pod_type|p1.x1|
|pod_type|p1.x2|
|pod_type|p1.x4|
|pod_type|p1.x8|
|pod_type|p2.x1|
|pod_type|p2.x2|
|pod_type|p2.x4|
|pod_type|p2.x8|

<h2 id="tocS_IndexMetadataConfig">IndexMetadataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaindexmetadataconfig"></a>
<a id="schema_IndexMetadataConfig"></a>
<a id="tocSindexmetadataconfig"></a>
<a id="tocsindexmetadataconfig"></a>

```json
{
  "indexed": [
    "hello"
  ]
}
```

Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexed|[string]|false|none|none|

<h2 id="tocS_IndexMetric">IndexMetric</h2>
<!-- backwards compatibility -->
<a id="schemaindexmetric"></a>
<a id="schema_IndexMetric"></a>
<a id="tocSindexmetric"></a>
<a id="tocsindexmetric"></a>

```json
"euclidean"
```

The vector similarity metric of the index

<h2 id="tocS_IndexName">IndexName</h2>
<!-- backwards compatibility -->
<a id="schemaindexname"></a>
<a id="schema_IndexName"></a>
<a id="tocSindexname"></a>
<a id="tocsindexname"></a>

```json
"example"
```

The unique name of an index.

<h2 id="tocS_IndexNamespaceStats">IndexNamespaceStats</h2>
<!-- backwards compatibility -->
<a id="schemaindexnamespacestats"></a>
<a id="schema_IndexNamespaceStats"></a>
<a id="tocSindexnamespacestats"></a>
<a id="tocsindexnamespacestats"></a>

```json
{
  "vectorCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vectorCount|integer(int64)|false|none|none|

<h2 id="tocS_IndexState">IndexState</h2>
<!-- backwards compatibility -->
<a id="schemaindexstate"></a>
<a id="schema_IndexState"></a>
<a id="tocSindexstate"></a>
<a id="tocsindexstate"></a>

```json
"Ready"
```

The current status of a index.

<h2 id="tocS_IndexStatus">IndexStatus</h2>
<!-- backwards compatibility -->
<a id="schemaindexstatus"></a>
<a id="schema_IndexStatus"></a>
<a id="tocSindexstatus"></a>
<a id="tocsindexstatus"></a>

```json
{
  "host": "string",
  "port": 0,
  "ready": true,
  "state": "Ready"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string(Hostname)|false|none|none|
|port|integer(int32)|false|none|none|
|ready|boolean|false|none|none|
|state|[IndexState](#schemaindexstate)|false|none|The current status of a index.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Initializing|
|state|ScalingUp|
|state|ScalingDown|
|state|Terminating|
|state|Ready|

<h2 id="tocS_IndexesList">IndexesList</h2>
<!-- backwards compatibility -->
<a id="schemaindexeslist"></a>
<a id="schema_IndexesList"></a>
<a id="tocSindexeslist"></a>
<a id="tocsindexeslist"></a>

```json
[
  "example"
]
```

<h2 id="tocS_NamespaceName">NamespaceName</h2>
<!-- backwards compatibility -->
<a id="schemanamespacename"></a>
<a id="schema_NamespaceName"></a>
<a id="tocSnamespacename"></a>
<a id="tocsnamespacename"></a>

```json
"namespace-0"
```

An index namespace name

<h2 id="tocS_PodType">PodType</h2>
<!-- backwards compatibility -->
<a id="schemapodtype"></a>
<a id="schema_PodType"></a>
<a id="tocSpodtype"></a>
<a id="tocspodtype"></a>

```json
"s1.x1"
```

The pod type

<h2 id="tocS_QueryMatch">QueryMatch</h2>
<!-- backwards compatibility -->
<a id="schemaquerymatch"></a>
<a id="schema_QueryMatch"></a>
<a id="tocSquerymatch"></a>
<a id="tocsquerymatch"></a>

```json
{
  "id": "vector-0",
  "metadata": {
    "hello": "alpha"
  },
  "score": 0,
  "sparseValues": {
    "indices": [
      1
    ],
    "values": [
      2
    ]
  },
  "values": [
    1,
    2,
    3
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VectorId](#schemavectorid)|true|none|The unique ID of a vector|
|metadata|[VectorMetadata](#schemavectormetadata)|false|none|none|
|score|number(float)|false|none|none|
|sparseValues|[SparseVectorData](#schemasparsevectordata)|false|none|Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length.|
|values|[VectorData](#schemavectordata)|false|none|Vector dense data. This should be the same length as the dimension of the index being queried.|

<h2 id="tocS_QueryRequest">QueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequest"></a>
<a id="schema_QueryRequest"></a>
<a id="tocSqueryrequest"></a>
<a id="tocsqueryrequest"></a>

```json
{
  "filter": {
    "hello": [
      "alpha",
      "bravo"
    ]
  },
  "id": "vector-0",
  "includeMetadata": false,
  "includeValues": false,
  "namespace": "namespace-0",
  "sparseVector": {
    "indices": [
      1
    ],
    "values": [
      2
    ]
  },
  "topK": 100,
  "vector": [
    1,
    2,
    3
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[VectorFilter](#schemavectorfilter)|false|none|If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.|
|id|[VectorId](#schemavectorid)|false|none|The unique ID of a vector|
|includeMetadata|boolean|false|none|none|
|includeValues|boolean|false|none|none|
|namespace|[NamespaceName](#schemanamespacename)|false|none|An index namespace name|
|sparseVector|[SparseVectorData](#schemasparsevectordata)|false|none|Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length.|
|topK|integer(int64)|true|none|The number of results to return for each query.|
|vector|[VectorData](#schemavectordata)|false|none|Vector dense data. This should be the same length as the dimension of the index being queried.|

<h2 id="tocS_QueryResponse">QueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresponse"></a>
<a id="schema_QueryResponse"></a>
<a id="tocSqueryresponse"></a>
<a id="tocsqueryresponse"></a>

```json
{
  "matches": [
    {
      "id": "vector-0",
      "metadata": {
        "hello": "alpha"
      },
      "score": 0,
      "sparseValues": {
        "indices": [
          1
        ],
        "values": [
          2
        ]
      },
      "values": [
        1,
        2,
        3
      ]
    }
  ],
  "namespace": "namespace-0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[[QueryMatch](#schemaquerymatch)]|false|none|none|
|namespace|[NamespaceName](#schemanamespacename)|false|none|An index namespace name|

<h2 id="tocS_SparseVectorData">SparseVectorData</h2>
<!-- backwards compatibility -->
<a id="schemasparsevectordata"></a>
<a id="schema_SparseVectorData"></a>
<a id="tocSsparsevectordata"></a>
<a id="tocssparsevectordata"></a>

```json
{
  "indices": [
    1
  ],
  "values": [
    2
  ]
}
```

Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indices|[integer(int64)]|true|none|The indices of the sparse data.|
|values|[number(float)]|true|none|The corresponding values of the sparse data, which must be the same length as the indices.|

<h2 id="tocS_UpdateRequest">UpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterequest"></a>
<a id="schema_UpdateRequest"></a>
<a id="tocSupdaterequest"></a>
<a id="tocsupdaterequest"></a>

```json
{
  "id": "string",
  "namespace": "namespace-0",
  "setMetadata": {
    "hello": "alpha"
  },
  "sparseValues": {
    "indices": [
      1
    ],
    "values": [
      2
    ]
  },
  "values": [
    1,
    2,
    3
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(VectorId)|true|none|The vector's unique ID|
|namespace|[NamespaceName](#schemanamespacename)|false|none|An index namespace name|
|setMetadata|[VectorMetadata](#schemavectormetadata)|false|none|none|
|sparseValues|[SparseVectorData](#schemasparsevectordata)|false|none|Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length.|
|values|[VectorData](#schemavectordata)|false|none|Vector dense data. This should be the same length as the dimension of the index being queried.|

<h2 id="tocS_UpdateResponse">UpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresponse"></a>
<a id="schema_UpdateResponse"></a>
<a id="tocSupdateresponse"></a>
<a id="tocsupdateresponse"></a>

```json
{}
```

<h2 id="tocS_UpsertRequest">UpsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertrequest"></a>
<a id="schema_UpsertRequest"></a>
<a id="tocSupsertrequest"></a>
<a id="tocsupsertrequest"></a>

```json
{
  "namespace": "namespace-0",
  "vectors": [
    {
      "id": "vector-0",
      "metadata": {
        "hello": "alpha"
      },
      "sparseValues": {
        "indices": [
          1
        ],
        "values": [
          2
        ]
      },
      "values": [
        1,
        2,
        3
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|[NamespaceName](#schemanamespacename)|false|none|An index namespace name|
|vectors|[[UpsertVector](#schemaupsertvector)]|true|none|none|

<h2 id="tocS_UpsertResponse">UpsertResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupsertresponse"></a>
<a id="schema_UpsertResponse"></a>
<a id="tocSupsertresponse"></a>
<a id="tocsupsertresponse"></a>

```json
{
  "upsertedCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upsertedCount|integer(int64)|false|none|none|

<h2 id="tocS_UpsertVector">UpsertVector</h2>
<!-- backwards compatibility -->
<a id="schemaupsertvector"></a>
<a id="schema_UpsertVector"></a>
<a id="tocSupsertvector"></a>
<a id="tocsupsertvector"></a>

```json
{
  "id": "vector-0",
  "metadata": {
    "hello": "alpha"
  },
  "sparseValues": {
    "indices": [
      1
    ],
    "values": [
      2
    ]
  },
  "values": [
    1,
    2,
    3
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VectorId](#schemavectorid)|false|none|The unique ID of a vector|
|metadata|[VectorMetadata](#schemavectormetadata)|false|none|none|
|sparseValues|[SparseVectorData](#schemasparsevectordata)|false|none|Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length.|
|values|[VectorData](#schemavectordata)|false|none|Vector dense data. This should be the same length as the dimension of the index being queried.|

<h2 id="tocS_VectorData">VectorData</h2>
<!-- backwards compatibility -->
<a id="schemavectordata"></a>
<a id="schema_VectorData"></a>
<a id="tocSvectordata"></a>
<a id="tocsvectordata"></a>

```json
[
  1,
  2,
  3
]
```

Vector dense data. This should be the same length as the dimension of the index being queried.

<h2 id="tocS_VectorDimensionality">VectorDimensionality</h2>
<!-- backwards compatibility -->
<a id="schemavectordimensionality"></a>
<a id="schema_VectorDimensionality"></a>
<a id="tocSvectordimensionality"></a>
<a id="tocsvectordimensionality"></a>

```json
1
```

The number of dimensions in the vector representation

<h2 id="tocS_VectorFilter">VectorFilter</h2>
<!-- backwards compatibility -->
<a id="schemavectorfilter"></a>
<a id="schema_VectorFilter"></a>
<a id="tocSvectorfilter"></a>
<a id="tocsvectorfilter"></a>

```json
{
  "hello": [
    "alpha",
    "bravo"
  ]
}
```

If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.

<h2 id="tocS_VectorId">VectorId</h2>
<!-- backwards compatibility -->
<a id="schemavectorid"></a>
<a id="schema_VectorId"></a>
<a id="tocSvectorid"></a>
<a id="tocsvectorid"></a>

```json
"vector-0"
```

The unique ID of a vector

<h2 id="tocS_VectorMetadata">VectorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemavectormetadata"></a>
<a id="schema_VectorMetadata"></a>
<a id="tocSvectormetadata"></a>
<a id="tocsvectormetadata"></a>

```json
{
  "hello": "alpha"
}
```
