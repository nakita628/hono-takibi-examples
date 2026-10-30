<h1 id="pinecone-control-plane-api">Pinecone Control Plane API v2025-04</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.

Base URLs:

* <a href="https://api.pinecone.io">https://api.pinecone.io</a> - Production API endpoints

Email: <a href="mailto:support@pinecone.io">Pinecone Support</a> 
Web: <a href="https://support.pinecone.io">Pinecone Support</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>

<a href="https://docs.pinecone.io/introduction">More Pinecone.io API docs</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **Api-Key**, in: header. An API Key is required to call Pinecone APIs. Get yours from the [console](https://app.pinecone.io/).

<h1 id="pinecone-control-plane-api-manage-indexes">Manage Indexes</h1>

Actions that manage indexes

## List indexes

<a id="opIdlist_indexes"></a>

> Code samples

```bash
curl https://api.pinecone.io/indexes \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /indexes`

List all indexes in a project.

> Example responses

> 200 Response

```json
{
  "indexes": [
    {
      "dimension": 384,
      "host": "semantic-search-c01b5b5.svc.us-west1-gcp.pinecone.io",
      "metric": "cosine",
      "name": "semantic-search",
      "spec": {
        "pod": {
          "environment": "us-west1-gcp",
          "pod_type": "p1.x1",
          "pods": 4,
          "replicas": 2,
          "shards": 2
        }
      },
      "status": {
        "ready": true,
        "state": "Ready"
      },
      "vector_type": "dense"
    },
    {
      "dimension": 200,
      "host": "image-search-a31f9c1.svc.us-east1-gcp.pinecone.io",
      "metric": "dotproduct",
      "name": "image-search",
      "spec": {
        "serverless": {
          "cloud": "aws",
          "region": "us-east-1"
        }
      },
      "status": {
        "ready": false,
        "state": "Initializing"
      },
      "vector_type": "dense"
    },
    {
      "host": "sparse-index-1a2b3c4d.svc.us-east1-gcp.pinecone.io",
      "metric": "dotproduct",
      "name": "sparse-index",
      "spec": {
        "serverless": {
          "cloud": "aws",
          "region": "us-east-1"
        }
      },
      "status": {
        "ready": true,
        "state": "Ready"
      },
      "vector_type": "sparse"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="list-indexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This operation returns a list of all the indexes that you have previously created, and which are associated with the given project|[IndexList](#schemaindexlist)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create an index

<a id="opIdcreate_index"></a>

> Code samples

```bash
curl https://api.pinecone.io/indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "deletion_protection": "enabled",
    "dimension": 1536,
    "metric": "cosine",
    "name": "movie-recommendations",
    "spec": {
      "serverless": {
        "cloud": "gcp",
        "region": "us-east1",
        "source_collection": "movie-embeddings"
      }
    }
  }'
```

`POST /indexes`

Create a Pinecone index. This is where you specify the measure of similarity, the dimension of vectors to be stored in the index, which cloud provider you would like to deploy with, and more.
  
For guidance and examples, see [Create an index](https://docs.pinecone.io/guides/index-data/create-an-index).


> Body parameter

```json
{
  "deletion_protection": "enabled",
  "dimension": 1536,
  "metric": "cosine",
  "name": "movie-recommendations",
  "spec": {
    "serverless": {
      "cloud": "gcp",
      "region": "us-east1",
      "source_collection": "movie-embeddings"
    }
  }
}
```

<h3 id="create-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateIndexRequest](#schemacreateindexrequest)|true|The desired configuration for the index.|
|» name|body|string|true|The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|» dimension|body|integer(int32)|false|The dimensions of the vectors to be inserted in the index.|
|» metric|body|string|false|The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the `vector_type` is `dense`, the metric defaults to 'cosine'.|
|» deletion_protection|body|[DeletionProtection](#schemadeletionprotection)|false|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|
|» tags|body|[IndexTags](#schemaindextags)|false|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|» spec|body|[IndexSpec](#schemaindexspec)|true|The spec object defines how the index should be deployed.<br><br>For serverless indexes, you set only the [cloud and region](http://docs.pinecone.io/guides/index-data/create-an-index#cloud-regions) where the index should be hosted. For pod-based indexes, you set the [environment](http://docs.pinecone.io/guides/indexes/pods/understanding-pod-based-indexes#pod-environments) where the index should be hosted, the [pod type and size](http://docs.pinecone.io/guides/indexes/pods/understanding-pod-based-indexes#pod-types) to use, and other index characteristics. For [BYOC indexes](http://docs.pinecone.io/guides/production/bring-your-own-cloud), you set the environment name provided to you during onboarding.<br>|
|» vector_type|body|string|false|The index vector type. You can use 'dense' or 'sparse'. If 'dense', the vector dimension must be specified.  If 'sparse', the vector dimension should not be specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» metric|cosine|
|» metric|euclidean|
|» metric|dotproduct|
|» deletion_protection|disabled|
|» deletion_protection|enabled|

> Example responses

> 201 Response

```json
{
  "name": "example-index",
  "dimension": 1536,
  "metric": "cosine",
  "host": "semantic-search-c01b5b5.svc.us-west1-gcp.pinecone.io",
  "private_host": "semantic-search-c01b5b5.svc.private.us-west1-gcp.pinecone.io",
  "deletion_protection": "disabled",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "embed": {
    "field_map": {
      "text": "your-text-field"
    },
    "metric": "cosine",
    "model": "multilingual-e5-large",
    "read_parameters": {
      "input_type": "query",
      "truncate": "NONE"
    },
    "write_parameters": {
      "input_type": "passage"
    }
  },
  "spec": {
    "pod": {
      "environment": "us-east-1-aws",
      "metadata_config": {
        "indexed": [
          "genre",
          "title",
          "imdb_rating"
        ]
      },
      "pod_type": "p1.x1",
      "pods": 1,
      "replicas": 1,
      "shards": 1
    }
  },
  "status": {
    "ready": true,
    "state": "ScalingUpPodSize"
  },
  "vector_type": "dense"
}
```

> 400 Response

```json
{
  "error": {
    "code": "INVALID_ARGUMENT",
    "message": "Bad request. The request body included invalid request parameters."
  },
  "status": 400
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 402 Response

```json
{
  "error": {
    "code": "PAYMENT_REQUIRED",
    "message": "Request failed. Pay all past due invoices to lift restrictions on your account."
  },
  "status": 402
}
```

> 403 Response

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Increase your quota or upgrade to create more indexes."
  },
  "status": 403
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource cloud: aws region: us-west1 not found."
  },
  "status": 404
}
```

> 409 Response

```json
{
  "error": {
    "code": "ALREADY_EXISTS",
    "message": "Resource already exists."
  },
  "status": 409
}
```

> 422 Response

```json
{
  "error": {
    "code": "UNPROCESSABLE_ENTITY",
    "message": "Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16"
  },
  "status": 422
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="create-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The index has been successfully created.|[IndexModel](#schemaindexmodel)|
|400|Bad Request|Bad request. The request body included invalid request parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|Payment required. Organization is on a paid plan and is delinquent on payment.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|You've exceed your pod quota.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Unknown cloud or region when creating a serverless index.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Index of given name already exists.|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable entity. The request body could not be deserialized.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Describe an index

<a id="opIddescribe_index"></a>

> Code samples

```bash
curl https://api.pinecone.io/indexes/test-index \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /indexes/{index_name}`

Get a description of an index.

<h3 id="describe-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index_name|path|string|true|The name of the index to be described.|

> Example responses

> 200 Response

```json
{
  "dimension": 1536,
  "host": "movie-recommendations-c01b5b5.svc.us-east1-gcp.pinecone.io",
  "metric": "cosine",
  "name": "movie-recommendations",
  "spec": {
    "serverless": {
      "cloud": "aws",
      "region": "us-east-1"
    }
  },
  "status": {
    "ready": false,
    "state": "Initializing"
  },
  "vector_type": "dense"
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Index example-index not found."
  },
  "status": 404
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="describe-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration information and deployment status of the index.|[IndexModel](#schemaindexmodel)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Index not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete an index

<a id="opIddelete_index"></a>

> Code samples

```bash
curl https://api.pinecone.io/indexes/test-index \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /indexes/{index_name}`

Delete an existing index.

<h3 id="delete-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index_name|path|string|true|The name of the index to delete.|

> Example responses

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 403 Response

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Deletion protection is enabled for this index. Disable deletion protection before retrying."
  },
  "status": 403
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Index example-index not found."
  },
  "status": 404
}
```

> 412 Response

```json
{
  "error": {
    "code": "FAILED_PRECONDITION",
    "message": "Unable to delete an index. There are pending collections for this index: ['test-collection']"
  },
  "status": 412
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="delete-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The request to delete the index has been accepted.|None|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Deletion protection enabled.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Index not found.|[ErrorResponse](#schemaerrorresponse)|
|412|Precondition Failed|There is a pending collection created from this index.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Configure an index

<a id="opIdconfigure_index"></a>

> Code samples

```bash
curl https://api.pinecone.io/indexes/test-index \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "spec": {
      "pod": {
        "pod_type": "p1.x2"
      }
    }
  }'
```

`PATCH /indexes/{index_name}`

Configure an existing index. For serverless indexes, you can configure index deletion protection, tags, and integrated inference embedding settings for the index. For pod-based indexes, you can configure the pod size, number of replicas, tags, and index deletion protection.

It is not possible to change the pod type of a pod-based index. However, you can create a collection from a pod-based index and then [create a new pod-based index with a different pod type](http://docs.pinecone.io/guides/indexes/pods/create-a-pod-based-index#create-a-pod-index-from-a-collection) from the collection. For guidance and examples, see [Configure an index](http://docs.pinecone.io/guides/indexes/pods/manage-pod-based-indexes).

> Body parameter

```json
{
  "spec": {
    "pod": {
      "pod_type": "p1.x2"
    }
  }
}
```

<h3 id="configure-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index_name|path|string|true|The name of the index to configure.|
|body|body|[ConfigureIndexRequest](#schemaconfigureindexrequest)|true|The desired pod size and replica configuration for the index.|
|» spec|body|object|false|none|
|» » pod|body|object|true|none|
|» » » replicas|body|integer(int32)|false|The number of replicas. Replicas duplicate your index. They provide higher availability and throughput. Replicas can be scaled up or down as your needs change.|
|» » » pod_type|body|string|false|The type of pod to use. One of `s1`, `p1`, or `p2` appended with `.` and one of `x1`, `x2`, `x4`, or `x8`.|
|» deletion_protection|body|[DeletionProtection](#schemadeletionprotection)|false|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|
|» tags|body|[IndexTags](#schemaindextags)|false|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|» embed|body|object|false|Configure the integrated inference embedding settings for this index.<br><br>You can convert an existing index to an integrated index by specifying the embedding model and field_map. The index vector type and dimension must match the model vector type and dimension, and the index similarity metric must be supported by the model. Refer to the [model guide](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) for available models and model details.<br><br>You can later change the embedding configuration to update the field map, read parameters, or write parameters. Once set, the model cannot be changed.|
|» » model|body|string|false|The name of the embedding model to use with the index. The index dimension and model dimension must match, and the index similarity metric must be supported by the model. The index embedding model cannot be changed once set.|
|» » field_map|body|object|false|Identifies the name of the text field from your document model that will be embedded.|
|» » read_parameters|body|object|false|The read parameters for the embedding model.|
|» » write_parameters|body|object|false|The write parameters for the embedding model.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» deletion_protection|disabled|
|» deletion_protection|enabled|

> Example responses

> 202 Response

```json
{
  "name": "example-index",
  "dimension": 1536,
  "metric": "cosine",
  "host": "semantic-search-c01b5b5.svc.us-west1-gcp.pinecone.io",
  "private_host": "semantic-search-c01b5b5.svc.private.us-west1-gcp.pinecone.io",
  "deletion_protection": "disabled",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "embed": {
    "field_map": {
      "text": "your-text-field"
    },
    "metric": "cosine",
    "model": "multilingual-e5-large",
    "read_parameters": {
      "input_type": "query",
      "truncate": "NONE"
    },
    "write_parameters": {
      "input_type": "passage"
    }
  },
  "spec": {
    "pod": {
      "environment": "us-east-1-aws",
      "metadata_config": {
        "indexed": [
          "genre",
          "title",
          "imdb_rating"
        ]
      },
      "pod_type": "p1.x1",
      "pods": 1,
      "replicas": 1,
      "shards": 1
    }
  },
  "status": {
    "ready": true,
    "state": "ScalingUpPodSize"
  },
  "vector_type": "dense"
}
```

> 400 Response

```json
{
  "error": {
    "code": "INVALID_ARGUMENT",
    "message": "Bad request. The request body included invalid request parameters."
  },
  "status": 400
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 402 Response

```json
{
  "error": {
    "code": "PAYMENT_REQUIRED",
    "message": "Request failed. Pay all past due invoices to lift restrictions on your account."
  },
  "status": 402
}
```

> 403 Response

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Increase your quota or upgrade to create more indexes."
  },
  "status": 403
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Index example-index not found."
  },
  "status": 404
}
```

> 422 Response

```json
{
  "error": {
    "code": "UNPROCESSABLE_ENTITY",
    "message": "Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16"
  },
  "status": 422
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="configure-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The request to configure the index has been accepted. Check the  index status to see when the change has been applied.|[IndexModel](#schemaindexmodel)|
|400|Bad Request|Bad request. The request body included invalid request parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|Payment required. Organization is on a paid plan and is delinquent on payment.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|You've exceed your pod quota.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Index not found.|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable entity. The request body could not be deserialized.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List backups for an index

<a id="opIdlist_index_backups"></a>

> Code samples

```bash
curl https://api.pinecone.io/indexes/string/backups \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /indexes/{index_name}/backups`

List all backups for an index.

<h3 id="list-backups-for-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index_name|path|string|true|Name of the backed up index|
|limit|query|integer|false|The number of results to return per page.|
|paginationToken|query|string|false|The token to use to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "backup_id": "bkp_123abc",
      "cloud": "aws",
      "created_at": "2024-03-15T10:30:00Z",
      "description": "Monthly backup of production index",
      "dimension": 1536,
      "metric": "cosine",
      "name": "backup_2024_03_15",
      "namespace_count": 3,
      "record_count": 120000,
      "region": "us-east-1",
      "size_bytes": 10000000,
      "source_index_id": "idx_456",
      "source_index_name": "my-index",
      "status": "Ready",
      "tags": {
        "environment": "production",
        "type": "monthly"
      }
    },
    {
      "backup_id": "bkp_789xyz",
      "cloud": "aws",
      "created_at": "2024-03-20T15:45:00Z",
      "description": "Pre-deployment safety backup",
      "dimension": 1536,
      "metric": "cosine",
      "name": "backup_2024_03_20",
      "namespace_count": 4,
      "record_count": 125000,
      "region": "us-east-1",
      "size_bytes": 10500000,
      "source_index_id": "idx_456",
      "source_index_name": "my-index",
      "status": "Ready",
      "tags": {
        "environment": "production",
        "type": "pre-deploy"
      }
    }
  ],
  "pagination": {
    "next": "dXNlcl9pZD11c2VyXzE="
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Index example-index not found."
  },
  "status": 404
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="list-backups-for-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This operation returns a list of all the backups that you have previously created, and which are associated with the given index.|[BackupList](#schemabackuplist)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Index not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a backup of an index

<a id="opIdcreate_backup"></a>

> Code samples

```bash
curl https://api.pinecone.io/indexes/string/backups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{}'
```

`POST /indexes/{index_name}/backups`

Create a backup of an index.


> Body parameter

```json
{}
```

<h3 id="create-a-backup-of-an-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index_name|path|string|true|Name of the index to backup|
|body|body|[CreateBackupRequest](#schemacreatebackuprequest)|true|The desired configuration for the backup.|
|» name|body|string|false|The name of the backup.|
|» description|body|string|false|A description of the backup.|

> Example responses

> 201 Response

```json
{
  "backup_id": "670e8400-e29b-41d4-a716-446655440001",
  "source_index_name": "my-index",
  "source_index_id": "670e8400-e29b-41d4-a716-446655440000",
  "name": "backup-2025-02-04",
  "description": "Backup before bulk update.",
  "status": "Ready",
  "cloud": "aws",
  "region": "us-east-1",
  "dimension": 1536,
  "metric": "cosine",
  "record_count": 120000,
  "namespace_count": 3,
  "size_bytes": 10000000,
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "created_at": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "INVALID_ARGUMENT",
    "message": "Bad request. The request body included invalid request parameters."
  },
  "status": 400
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 402 Response

```json
{
  "error": {
    "code": "PAYMENT_REQUIRED",
    "message": "Request failed. Pay all past due invoices to lift restrictions on your account."
  },
  "status": 402
}
```

> 403 Response

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Increase your quota or upgrade to create more backups."
  },
  "status": 403
}
```

> 422 Response

```json
{
  "error": {
    "code": "UNPROCESSABLE_ENTITY",
    "message": "Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16"
  },
  "status": 422
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="create-a-backup-of-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The backup has been successfully created.|[BackupModel](#schemabackupmodel)|
|400|Bad Request|Bad request. The request body included invalid request parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|Payment required. Organization is on a paid plan and is delinquent on payment.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|You've exceed your backup quota.|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable entity. The request body could not be deserialized.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List collections

<a id="opIdlist_collections"></a>

> Code samples

```bash
curl https://api.pinecone.io/collections \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /collections`

List all collections in a project.
Serverless indexes do not support collections.


> Example responses

> 200 Response

```json
{
  "collections": [
    {
      "dimension": 3,
      "environment": "us-east1-gcp",
      "name": "small-collection",
      "size": 3126700,
      "status": "Ready",
      "vector_count": 99
    },
    {
      "dimension": 3,
      "environment": "us-east1-gcp",
      "name": "small-collection-new",
      "size": 3126700,
      "status": "Initializing",
      "vector_count": 99
    },
    {
      "dimension": 1536,
      "environment": "us-east1-gcp",
      "name": "big-collection",
      "size": 160087040000000,
      "status": "Ready",
      "vector_count": 10000000
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="list-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List all the collections in your current project.|[CollectionList](#schemacollectionlist)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a collection

<a id="opIdcreate_collection"></a>

> Code samples

```bash
curl https://api.pinecone.io/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "name": "example-collection",
    "source": "example-source-index"
  }'
```

`POST /collections`

Create a Pinecone collection.
  
Serverless indexes do not support collections.


> Body parameter

```json
{
  "name": "example-collection",
  "source": "example-source-index"
}
```

<h3 id="create-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCollectionRequest](#schemacreatecollectionrequest)|true|The desired configuration for the collection.|
|» name|body|string|true|The name of the collection to be created. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|» source|body|string|true|The name of the index to be used as the source for the collection.|

> Example responses

> 201 Response

```json
{
  "name": "example-collection",
  "size": 10000000,
  "status": "Initializing",
  "dimension": 1536,
  "vector_count": 120000,
  "environment": "us-east1-gcp"
}
```

> 400 Response

```json
{
  "error": {
    "code": "INVALID_ARGUMENT",
    "message": "Bad request. The request body included invalid request parameters."
  },
  "status": 400
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 402 Response

```json
{
  "error": {
    "code": "PAYMENT_REQUIRED",
    "message": "Request failed. Pay all past due invoices to lift restrictions on your account."
  },
  "status": 402
}
```

> 403 Response

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Collection exceeds quota. Maximum allowed on your account is 1. Currently have 1."
  },
  "status": 403
}
```

> 409 Response

```json
{
  "error": {
    "code": "ALREADY_EXISTS",
    "message": "Resource already exists."
  },
  "status": 409
}
```

> 422 Response

```json
{
  "error": {
    "code": "UNPROCESSABLE_ENTITY",
    "message": "Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16"
  },
  "status": 422
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="create-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The collection has been successfully created.|[CollectionModel](#schemacollectionmodel)|
|400|Bad Request|Bad request. The request body included invalid request parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|Payment required. Organization is on a paid plan and is delinquent on payment.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|You've exceed your collections quota.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Collection of given name already exists.|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable entity. The request body could not be deserialized.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create an index with integrated embedding

<a id="opIdcreate_index_for_model"></a>

> Code samples

```bash
curl https://api.pinecone.io/indexes/create-for-model \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "cloud": "gcp",
    "deletion_protection": "enabled",
    "embed": {
      "field_map": {
        "text": "your-text-field"
      },
      "metric": "cosine",
      "model": "multilingual-e5-large"
    },
    "name": "multilingual-e5-large-index",
    "region": "us-east1"
  }'
```

`POST /indexes/create-for-model`

Create an index with integrated embedding.

With this type of index, you provide source text, and Pinecone uses a [hosted embedding model](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) to convert the text automatically during [upsert](https://docs.pinecone.io/reference/api/2025-01/data-plane/upsert_records) and [search](https://docs.pinecone.io/reference/api/2025-01/data-plane/search_records).

For guidance and examples, see [Create an index](https://docs.pinecone.io/guides/index-data/create-an-index#integrated-embedding).

> Body parameter

```json
{
  "cloud": "gcp",
  "deletion_protection": "enabled",
  "embed": {
    "field_map": {
      "text": "your-text-field"
    },
    "metric": "cosine",
    "model": "multilingual-e5-large"
  },
  "name": "multilingual-e5-large-index",
  "region": "us-east1"
}
```

<h3 id="create-an-index-with-integrated-embedding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateIndexForModelRequest](#schemacreateindexformodelrequest)|true|The desired configuration for the index and associated embedding model.|
|» name|body|string|true|The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|» cloud|body|string|true|The public cloud where you would like your index hosted.|
|» region|body|string|true|The region where you would like your index to be created.|
|» deletion_protection|body|[DeletionProtection](#schemadeletionprotection)|false|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|
|» tags|body|[IndexTags](#schemaindextags)|false|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|» embed|body|object|true|Specify the integrated inference embedding configuration for the index.<br><br>Once set the model cannot be changed, but you can later update the embedding configuration for an integrated inference index including field map, read parameters, or write parameters.<br><br>Refer to the [model guide](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) for available models and model details.|
|» » model|body|string|true|The name of the embedding model to use for the index.|
|» » metric|body|string|false|The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If not specified, the metric will be defaulted according to the model. Cannot be updated once set.|
|» » field_map|body|object|true|Identifies the name of the text field from your document model that will be embedded.|
|» » dimension|body|integer|false|The dimension of embedding vectors produced for the index.|
|» » read_parameters|body|object|false|The read parameters for the embedding model.|
|» » write_parameters|body|object|false|The write parameters for the embedding model.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» cloud|gcp|
|» cloud|aws|
|» cloud|azure|
|» deletion_protection|disabled|
|» deletion_protection|enabled|
|» » metric|cosine|
|» » metric|euclidean|
|» » metric|dotproduct|

> Example responses

> 201 Response

```json
{
  "name": "example-index",
  "dimension": 1536,
  "metric": "cosine",
  "host": "semantic-search-c01b5b5.svc.us-west1-gcp.pinecone.io",
  "private_host": "semantic-search-c01b5b5.svc.private.us-west1-gcp.pinecone.io",
  "deletion_protection": "disabled",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "embed": {
    "field_map": {
      "text": "your-text-field"
    },
    "metric": "cosine",
    "model": "multilingual-e5-large",
    "read_parameters": {
      "input_type": "query",
      "truncate": "NONE"
    },
    "write_parameters": {
      "input_type": "passage"
    }
  },
  "spec": {
    "pod": {
      "environment": "us-east-1-aws",
      "metadata_config": {
        "indexed": [
          "genre",
          "title",
          "imdb_rating"
        ]
      },
      "pod_type": "p1.x1",
      "pods": 1,
      "replicas": 1,
      "shards": 1
    }
  },
  "status": {
    "ready": true,
    "state": "ScalingUpPodSize"
  },
  "vector_type": "dense"
}
```

> 400 Response

```json
{
  "error": {
    "code": "INVALID_ARGUMENT",
    "message": "Bad request. The request body included invalid request parameters."
  },
  "status": 400
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource cloud: aws region: us-west1 not found."
  },
  "status": 404
}
```

> 409 Response

```json
{
  "error": {
    "code": "ALREADY_EXISTS",
    "message": "Resource already exists."
  },
  "status": 409
}
```

> 422 Response

```json
{
  "error": {
    "code": "UNPROCESSABLE_ENTITY",
    "message": "Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16"
  },
  "status": 422
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="create-an-index-with-integrated-embedding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The index has successfully been created for the embedding model.|[IndexModel](#schemaindexmodel)|
|400|Bad Request|Bad request. The request body included invalid request parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Unknown cloud or region when creating a serverless index.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Index of given name already exists.|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable entity. The request body could not be deserialized.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List backups for all indexes in a project

<a id="opIdlist_project_backups"></a>

> Code samples

```bash
curl https://api.pinecone.io/backups \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /backups`

List all backups for a project.

<h3 id="list-backups-for-all-indexes-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The number of results to return per page.|
|paginationToken|query|string|false|The token to use to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "backup_id": "670e8400-e29b-41d4-a716-446655440000",
      "cloud": "aws",
      "created_at": "2024-03-15T10:30:00Z",
      "description": "Monthly backup of production index",
      "dimension": 1536,
      "metric": "cosine",
      "name": "backup_2024_03_15",
      "namespace_count": 3,
      "record_count": 120000,
      "region": "us-east-1",
      "size_bytes": 10000000,
      "source_index_id": "idx_456",
      "source_index_name": "my-index",
      "status": "Ready",
      "tags": {
        "environment": "production",
        "type": "monthly"
      }
    },
    {
      "backup_id": "670e8400-e29b-41d4-a716-446655440001",
      "cloud": "aws",
      "created_at": "2024-03-20T15:45:00Z",
      "description": "Pre-deployment safety backup",
      "dimension": 1536,
      "metric": "cosine",
      "name": "backup_2024_03_20",
      "namespace_count": 4,
      "record_count": 125000,
      "region": "us-east-1",
      "size_bytes": 10500000,
      "source_index_id": "idx_789",
      "source_index_name": "my-index-2",
      "status": "Ready",
      "tags": {
        "environment": "production",
        "type": "pre-deploy"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="list-backups-for-all-indexes-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This operation returns a list of all the backups for the given index that you have previously created.|[BackupList](#schemabackuplist)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Describe a backup

<a id="opIddescribe_backup"></a>

> Code samples

```bash
curl https://api.pinecone.io/backups/670e8400-e29b-41d4-a716-446655440000 \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /backups/{backup_id}`

Get a description of a backup.

<h3 id="describe-a-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backup_id|path|string|true|The ID of the backup to describe.|

> Example responses

> 200 Response

```json
{
  "backup_id": "670e8400-e29b-41d4-a716-446655440000",
  "cloud": "aws",
  "created_at": "2024-03-15T10:30:00Z",
  "description": "Monthly backup of production index",
  "dimension": 1536,
  "metric": "cosine",
  "name": "backup_2024_03_15",
  "namespace_count": 3,
  "record_count": 120000,
  "region": "us-east-1",
  "size_bytes": 10000000,
  "source_index_id": "670e8400-e29b-41d4-a716-446655440001",
  "source_index_name": "my-index",
  "status": "Ready",
  "tags": {
    "environment": "production",
    "type": "monthly"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Backup bkp_123abc not found."
  },
  "status": 404
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="describe-a-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration information and deployment status of the backup.|[BackupModel](#schemabackupmodel)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Backup not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a backup

<a id="opIddelete_backup"></a>

> Code samples

```bash
curl https://api.pinecone.io/backups/670e8400-e29b-41d4-a716-446655440000 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /backups/{backup_id}`

Delete a backup.

<h3 id="delete-a-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backup_id|path|string|true|The ID of the backup to delete.|

> Example responses

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Backup bkp_123abc not found."
  },
  "status": 404
}
```

> 412 Response

```json
{
  "error": {
    "code": "FAILED_PRECONDITION",
    "message": "Unable to delete backup. There are pending restore jobs for this backup: ['670e8400-e29b-41d4-a716-446655440000']"
  },
  "status": 412
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="delete-a-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The request to delete the backup has been accepted.|None|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Backup not found.|[ErrorResponse](#schemaerrorresponse)|
|412|Precondition Failed|There is a pending restore job created from this backup.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create an index from a backup

<a id="opIdcreate_index_from_backup_operation"></a>

> Code samples

```bash
curl https://api.pinecone.io/backups/670e8400-e29b-41d4-a716-446655440000/create-index \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "name": "example-index",
    "tags": {
      "tag0": "val0",
      "tag1": "val1"
    },
    "deletion_protection": "disabled"
  }'
```

`POST /backups/{backup_id}/create-index`

Create an index from a backup.

> Body parameter

```json
{
  "name": "example-index",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "deletion_protection": "disabled"
}
```

<h3 id="create-an-index-from-a-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backup_id|path|string|true|The ID of the backup to create an index from.|
|body|body|[CreateIndexFromBackupRequest](#schemacreateindexfrombackuprequest)|true|The desired configuration for the index created from a backup.|
|» name|body|string|true|The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|» tags|body|[IndexTags](#schemaindextags)|false|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|» deletion_protection|body|[DeletionProtection](#schemadeletionprotection)|false|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» deletion_protection|disabled|
|» deletion_protection|enabled|

> Example responses

> 202 Response

```json
{
  "restore_job_id": "670e8400-e29b-41d4-a716-446655440000",
  "index_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

> 400 Response

```json
{
  "error": {
    "code": "INVALID_ARGUMENT",
    "message": "Bad request. The request body included invalid request parameters."
  },
  "status": 400
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 402 Response

```json
{
  "error": {
    "code": "PAYMENT_REQUIRED",
    "message": "Request failed. Pay all past due invoices to lift restrictions on your account."
  },
  "status": 402
}
```

> 403 Response

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Increase your quota or upgrade to create more indexes."
  },
  "status": 403
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Backup bkp_123abc not found."
  },
  "status": 404
}
```

> 409 Response

```json
{
  "error": {
    "code": "QUOTA_EXCEEDED",
    "message": "The index exceeds the project quota of 5 pods by 2 pods. Upgrade your account or change the project settings to increase the quota."
  },
  "status": 429
}
```

> 422 Response

```json
{
  "error": {
    "code": "UNPROCESSABLE_ENTITY",
    "message": "Failed to deserialize the JSON body into the target type: missing field `metric` at line 1 column 16"
  },
  "status": 422
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="create-an-index-from-a-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The request to create the index has been accepted.|[CreateIndexFromBackupResponse](#schemacreateindexfrombackupresponse)|
|400|Bad Request|Bad request. The request body included invalid request parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|Payment required. Organization is on a paid plan and is delinquent on payment.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|You've exceed your pod quota.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Backup not found.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Index of given name already exists.|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable entity. The request body could not be deserialized.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List restore jobs

<a id="opIdlist_restore_jobs"></a>

> Code samples

```bash
curl https://api.pinecone.io/restore-jobs \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /restore-jobs`

List all restore jobs for a project.

<h3 id="list-restore-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The number of results to return per page.|
|paginationToken|query|string|false|The token to use to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "backup_id": "670e8400-e29b-41d4-a716-446655440000",
      "completed_at": "2024-03-15T10:35:00Z",
      "created_at": "2024-03-15T10:30:00Z",
      "percent_complete": 100,
      "restore_job_id": "670e8400-e29b-41d4-a716-446655440001",
      "status": "Completed",
      "target_index_id": "idx_456",
      "target_index_name": "my-index"
    }
  ],
  "pagination": {
    "next": "dXNlcl9pZD11c2VyXzE="
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="list-restore-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This operation returns a list of all the restore jobs that you have previously created.|[RestoreJobList](#schemarestorejoblist)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Describe a restore job

<a id="opIddescribe_restore_job"></a>

> Code samples

```bash
curl https://api.pinecone.io/restore-jobs/670e8400-e29b-41d4-a716-446655440000 \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /restore-jobs/{job_id}`

Get a description of a restore job.

<h3 id="describe-a-restore-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string|true|The ID of the restore job to describe.|

> Example responses

> 200 Response

```json
{
  "restore_job_id": "670e8400-e29b-41d4-a716-446655440001",
  "backup_id": "670e8400-e29b-41d4-a716-446655440000",
  "target_index_name": "sample-index",
  "target_index_id": "670e8400-e29b-41d4-a716-446655440002",
  "status": "Completed",
  "created_at": "2025-02-04T13:00:00Z",
  "completed_at": "2025-02-04T14:00:00Z",
  "percent_complete": 42.2
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Restore job 670e8400-e29b-41d4-a716-446655440002 not found."
  },
  "status": 404
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="describe-a-restore-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration information and deployment status of the restore job.|[RestoreJobModel](#schemarestorejobmodel)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Restore job not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Describe a collection

<a id="opIddescribe_collection"></a>

> Code samples

```bash
curl https://api.pinecone.io/collections/tiny-collection \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /collections/{collection_name}`

Get a description of a collection.
Serverless indexes do not support collections.


<h3 id="describe-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|The name of the collection to be described.|

> Example responses

> 200 Response

```json
{
  "dimension": 3,
  "environment": "us-east1-gcp",
  "name": "tiny-collection",
  "size": 3126700,
  "status": "Ready",
  "vector_count": 99
}
```

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Collection example-collection not found."
  },
  "status": 404
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="describe-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration information and status of the collection.|[CollectionModel](#schemacollectionmodel)|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Collection not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a collection

<a id="opIddelete_collection"></a>

> Code samples

```bash
curl https://api.pinecone.io/collections/test-collection \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /collections/{collection_name}`

Delete an existing collection.
Serverless indexes do not support collections.


<h3 id="delete-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_name|path|string|true|The name of the collection.|

> Example responses

> 401 Response

```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "Invalid API key."
  },
  "status": 401
}
```

> 404 Response

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Collection example-collection not found."
  },
  "status": 404
}
```

> 500 Response

```json
{
  "error": {
    "code": "UNKNOWN",
    "message": "Internal server error"
  },
  "status": 500
}
```

<h3 id="delete-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The collection has been successfully deleted.|None|
|401|Unauthorized|Unauthorized. Possible causes: Invalid API key.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Collection not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_PaginationResponse">PaginationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginationresponse"></a>
<a id="schema_PaginationResponse"></a>
<a id="tocSpaginationresponse"></a>
<a id="tocspaginationresponse"></a>

```json
{
  "next": "dXNlcl9pZD11c2VyXzE="
}
```

The pagination object that is returned with paginated responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string|true|none|The token to use to retrieve the next page of results.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "code": "QUOTA_EXCEEDED",
    "message": "The index exceeds the project quota of 5 pods by 2 pods. Upgrade your account or change the project settings to increase the quota."
  },
  "status": 429
}
```

The response shape used for all error responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|true|none|The HTTP status code of the error.|
|error|object|true|none|Detailed information about the error that occurred.|

<h2 id="tocS_CreateIndexFromBackupRequest">CreateIndexFromBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateindexfrombackuprequest"></a>
<a id="schema_CreateIndexFromBackupRequest"></a>
<a id="tocScreateindexfrombackuprequest"></a>
<a id="tocscreateindexfrombackuprequest"></a>

```json
{
  "name": "example-index",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "deletion_protection": "disabled"
}
```

The configuration needed to create a Pinecone index from a backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|tags|[IndexTags](#schemaindextags)|false|none|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|deletion_protection|[DeletionProtection](#schemadeletionprotection)|false|none|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|deletion_protection|disabled|
|deletion_protection|enabled|

<h2 id="tocS_IndexTags">IndexTags</h2>
<!-- backwards compatibility -->
<a id="schemaindextags"></a>
<a id="schema_IndexTags"></a>
<a id="tocSindextags"></a>
<a id="tocsindextags"></a>

```json
{
  "tag0": "val0",
  "tag1": "val1"
}
```

Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_ModelIndexEmbed">ModelIndexEmbed</h2>
<!-- backwards compatibility -->
<a id="schemamodelindexembed"></a>
<a id="schema_ModelIndexEmbed"></a>
<a id="tocSmodelindexembed"></a>
<a id="tocsmodelindexembed"></a>

```json
{
  "field_map": {
    "text": "your-text-field"
  },
  "metric": "cosine",
  "model": "multilingual-e5-large",
  "read_parameters": {
    "input_type": "query",
    "truncate": "NONE"
  },
  "write_parameters": {
    "input_type": "passage"
  }
}
```

The embedding model and document fields mapped to embedding inputs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|The name of the embedding model used to create the index.|
|metric|string|false|none|The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If not specified, the metric will be defaulted according to the model. Cannot be updated once set.|
|dimension|integer(int32)|false|none|The dimensions of the vectors to be inserted in the index.|
|vector_type|string|false|none|The index vector type. You can use 'dense' or 'sparse'. If 'dense', the vector dimension must be specified.  If 'sparse', the vector dimension should not be specified.|
|field_map|object|false|none|Identifies the name of the text field from your document model that is embedded.|
|read_parameters|object|false|none|The read parameters for the embedding model.|
|write_parameters|object|false|none|The write parameters for the embedding model.|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|cosine|
|metric|euclidean|
|metric|dotproduct|

<h2 id="tocS_BackupList">BackupList</h2>
<!-- backwards compatibility -->
<a id="schemabackuplist"></a>
<a id="schema_BackupList"></a>
<a id="tocSbackuplist"></a>
<a id="tocsbackuplist"></a>

```json
{
  "data": [
    {
      "backup_id": "670e8400-e29b-41d4-a716-446655440001",
      "source_index_name": "my-index",
      "source_index_id": "670e8400-e29b-41d4-a716-446655440000",
      "name": "backup-2025-02-04",
      "description": "Backup before bulk update.",
      "status": "Ready",
      "cloud": "aws",
      "region": "us-east-1",
      "dimension": 1536,
      "metric": "cosine",
      "record_count": 120000,
      "namespace_count": 3,
      "size_bytes": 10000000,
      "tags": {
        "tag0": "val0",
        "tag1": "val1"
      },
      "created_at": "string"
    }
  ],
  "pagination": {
    "next": "dXNlcl9pZD11c2VyXzE="
  }
}
```

The list of backups that exist in the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BackupModel](#schemabackupmodel)]|false|none|none|
|pagination|[PaginationResponse](#schemapaginationresponse)|false|none|The pagination object that is returned with paginated responses.|

<h2 id="tocS_DeletionProtection">DeletionProtection</h2>
<!-- backwards compatibility -->
<a id="schemadeletionprotection"></a>
<a id="schema_DeletionProtection"></a>
<a id="tocSdeletionprotection"></a>
<a id="tocsdeletionprotection"></a>

```json
"disabled"
```

Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.

<h2 id="tocS_CreateIndexRequest">CreateIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateindexrequest"></a>
<a id="schema_CreateIndexRequest"></a>
<a id="tocScreateindexrequest"></a>
<a id="tocscreateindexrequest"></a>

```json
{
  "name": "example-index",
  "dimension": 1536,
  "metric": "cosine",
  "deletion_protection": "disabled",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "spec": {
    "serverless": {
      "cloud": "aws",
      "region": "us-east-1",
      "source_collection": "string"
    },
    "pod": {
      "environment": "us-east1-gcp",
      "metadata_config": {
        "indexed": [
          "genre",
          "title",
          "imdb_rating"
        ]
      },
      "pod_type": "p1.x1",
      "pods": 1,
      "replicas": 1,
      "shards": 1,
      "source_collection": "movie-embeddings"
    },
    "byoc": {
      "environment": "aws-us-east-1-b921"
    }
  },
  "vector_type": "dense"
}
```

The configuration needed to create a Pinecone index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|dimension|integer(int32)|false|none|The dimensions of the vectors to be inserted in the index.|
|metric|string|false|none|The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the `vector_type` is `dense`, the metric defaults to 'cosine'.|
|deletion_protection|[DeletionProtection](#schemadeletionprotection)|false|none|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|
|tags|[IndexTags](#schemaindextags)|false|none|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|spec|[IndexSpec](#schemaindexspec)|true|none|The spec object defines how the index should be deployed.<br><br>For serverless indexes, you set only the [cloud and region](http://docs.pinecone.io/guides/index-data/create-an-index#cloud-regions) where the index should be hosted. For pod-based indexes, you set the [environment](http://docs.pinecone.io/guides/indexes/pods/understanding-pod-based-indexes#pod-environments) where the index should be hosted, the [pod type and size](http://docs.pinecone.io/guides/indexes/pods/understanding-pod-based-indexes#pod-types) to use, and other index characteristics. For [BYOC indexes](http://docs.pinecone.io/guides/production/bring-your-own-cloud), you set the environment name provided to you during onboarding.<br>|
|vector_type|string|false|none|The index vector type. You can use 'dense' or 'sparse'. If 'dense', the vector dimension must be specified.  If 'sparse', the vector dimension should not be specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|cosine|
|metric|euclidean|
|metric|dotproduct|
|deletion_protection|disabled|
|deletion_protection|enabled|

<h2 id="tocS_IndexList">IndexList</h2>
<!-- backwards compatibility -->
<a id="schemaindexlist"></a>
<a id="schema_IndexList"></a>
<a id="tocSindexlist"></a>
<a id="tocsindexlist"></a>

```json
{
  "indexes": [
    {
      "name": "example-index",
      "dimension": 1536,
      "metric": "cosine",
      "host": "semantic-search-c01b5b5.svc.us-west1-gcp.pinecone.io",
      "private_host": "semantic-search-c01b5b5.svc.private.us-west1-gcp.pinecone.io",
      "deletion_protection": "disabled",
      "tags": {
        "tag0": "val0",
        "tag1": "val1"
      },
      "embed": {
        "field_map": {
          "text": "your-text-field"
        },
        "metric": "cosine",
        "model": "multilingual-e5-large",
        "read_parameters": {
          "input_type": "query",
          "truncate": "NONE"
        },
        "write_parameters": {
          "input_type": "passage"
        }
      },
      "spec": {
        "pod": {
          "environment": "us-east-1-aws",
          "metadata_config": {
            "indexed": [
              "genre",
              "title",
              "imdb_rating"
            ]
          },
          "pod_type": "p1.x1",
          "pods": 1,
          "replicas": 1,
          "shards": 1
        }
      },
      "status": {
        "ready": true,
        "state": "ScalingUpPodSize"
      },
      "vector_type": "dense"
    }
  ]
}
```

The list of indexes that exist in the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexes|[[IndexModel](#schemaindexmodel)]|false|none|none|

<h2 id="tocS_RestoreJobList">RestoreJobList</h2>
<!-- backwards compatibility -->
<a id="schemarestorejoblist"></a>
<a id="schema_RestoreJobList"></a>
<a id="tocSrestorejoblist"></a>
<a id="tocsrestorejoblist"></a>

```json
{
  "data": [
    {
      "restore_job_id": "670e8400-e29b-41d4-a716-446655440001",
      "backup_id": "670e8400-e29b-41d4-a716-446655440000",
      "target_index_name": "sample-index",
      "target_index_id": "670e8400-e29b-41d4-a716-446655440002",
      "status": "Completed",
      "created_at": "2025-02-04T13:00:00Z",
      "completed_at": "2025-02-04T14:00:00Z",
      "percent_complete": 42.2
    }
  ],
  "pagination": {
    "next": "dXNlcl9pZD11c2VyXzE="
  }
}
```

The list of restore jobs that exist in the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[RestoreJobModel](#schemarestorejobmodel)]|true|none|none|
|pagination|[PaginationResponse](#schemapaginationresponse)|false|none|The pagination object that is returned with paginated responses.|

<h2 id="tocS_IndexSpec">IndexSpec</h2>
<!-- backwards compatibility -->
<a id="schemaindexspec"></a>
<a id="schema_IndexSpec"></a>
<a id="tocSindexspec"></a>
<a id="tocsindexspec"></a>

```json
{
  "serverless": {
    "cloud": "aws",
    "region": "us-east-1",
    "source_collection": "string"
  },
  "pod": {
    "environment": "us-east1-gcp",
    "metadata_config": {
      "indexed": [
        "genre",
        "title",
        "imdb_rating"
      ]
    },
    "pod_type": "p1.x1",
    "pods": 1,
    "replicas": 1,
    "shards": 1,
    "source_collection": "movie-embeddings"
  },
  "byoc": {
    "environment": "aws-us-east-1-b921"
  }
}
```

The spec object defines how the index should be deployed.

For serverless indexes, you set only the [cloud and region](http://docs.pinecone.io/guides/index-data/create-an-index#cloud-regions) where the index should be hosted. For pod-based indexes, you set the [environment](http://docs.pinecone.io/guides/indexes/pods/understanding-pod-based-indexes#pod-environments) where the index should be hosted, the [pod type and size](http://docs.pinecone.io/guides/indexes/pods/understanding-pod-based-indexes#pod-types) to use, and other index characteristics. For [BYOC indexes](http://docs.pinecone.io/guides/production/bring-your-own-cloud), you set the environment name provided to you during onboarding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverless|[ServerlessSpec](#schemaserverlessspec)|false|none|Configuration needed to deploy a serverless index.|
|pod|[PodSpec](#schemapodspec)|false|none|Configuration needed to deploy a pod-based index.|
|byoc|[ByocSpec](#schemabyocspec)|false|none|Configuration needed to deploy an index in a BYOC environment.|
|*oneOf*|object|false|none|none|
|*oneOf*|object|false|none|none|
|*oneOf*|object|false|none|none|

<h2 id="tocS_ServerlessSpec">ServerlessSpec</h2>
<!-- backwards compatibility -->
<a id="schemaserverlessspec"></a>
<a id="schema_ServerlessSpec"></a>
<a id="tocSserverlessspec"></a>
<a id="tocsserverlessspec"></a>

```json
{
  "cloud": "aws",
  "region": "us-east-1",
  "source_collection": "string"
}
```

Configuration needed to deploy a serverless index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloud|string|true|none|The public cloud where you would like your index hosted.|
|region|string|true|none|The region where you would like your index to be created.|
|source_collection|string|false|none|The name of the collection to be used as the source for the index.|

#### Enumerated Values

|Property|Value|
|---|---|
|cloud|gcp|
|cloud|aws|
|cloud|azure|

<h2 id="tocS_CreateCollectionRequest">CreateCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecollectionrequest"></a>
<a id="schema_CreateCollectionRequest"></a>
<a id="tocScreatecollectionrequest"></a>
<a id="tocscreatecollectionrequest"></a>

```json
{
  "name": "string",
  "source": "example-source-index"
}
```

The configuration needed to create a Pinecone collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the collection to be created. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|source|string|true|none|The name of the index to be used as the source for the collection.|

<h2 id="tocS_CreateIndexForModelRequest">CreateIndexForModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateindexformodelrequest"></a>
<a id="schema_CreateIndexForModelRequest"></a>
<a id="tocScreateindexformodelrequest"></a>
<a id="tocscreateindexformodelrequest"></a>

```json
{
  "name": "example-index",
  "cloud": "aws",
  "region": "us-east-1",
  "deletion_protection": "disabled",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "embed": {
    "field_map": {
      "text": "your-text-field"
    },
    "metric": "cosine",
    "model": "multilingual-e5-large",
    "read_parameters": {
      "input_type": "query",
      "truncate": "NONE"
    },
    "write_parameters": {
      "input_type": "passage"
    }
  }
}
```

The desired configuration for the index and associated embedding model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|cloud|string|true|none|The public cloud where you would like your index hosted.|
|region|string|true|none|The region where you would like your index to be created.|
|deletion_protection|[DeletionProtection](#schemadeletionprotection)|false|none|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|
|tags|[IndexTags](#schemaindextags)|false|none|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|embed|object|true|none|Specify the integrated inference embedding configuration for the index.<br><br>Once set the model cannot be changed, but you can later update the embedding configuration for an integrated inference index including field map, read parameters, or write parameters.<br><br>Refer to the [model guide](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) for available models and model details.|

#### Enumerated Values

|Property|Value|
|---|---|
|cloud|gcp|
|cloud|aws|
|cloud|azure|
|deletion_protection|disabled|
|deletion_protection|enabled|

<h2 id="tocS_PodSpec">PodSpec</h2>
<!-- backwards compatibility -->
<a id="schemapodspec"></a>
<a id="schema_PodSpec"></a>
<a id="tocSpodspec"></a>
<a id="tocspodspec"></a>

```json
{
  "environment": "us-east1-gcp",
  "metadata_config": {
    "indexed": [
      "genre",
      "title",
      "imdb_rating"
    ]
  },
  "pod_type": "p1.x1",
  "pods": 1,
  "replicas": 1,
  "shards": 1,
  "source_collection": "movie-embeddings"
}
```

Configuration needed to deploy a pod-based index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|string|true|none|The environment where the index is hosted.|
|replicas|integer(int32)|false|none|The number of replicas. Replicas duplicate your index. They provide higher availability and throughput. Replicas can be scaled up or down as your needs change.|
|shards|integer(int32)|false|none|The number of shards. Shards split your data across multiple pods so you can fit more data into an index.|
|pod_type|string|true|none|The type of pod to use. One of `s1`, `p1`, or `p2` appended with `.` and one of `x1`, `x2`, `x4`, or `x8`.|
|pods|integer|false|none|The number of pods to be used in the index. This should be equal to `shards` x `replicas`.'|
|metadata_config|object|false|none|Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when `metadata_config` is present, only specified metadata fields are indexed. These configurations are only valid for use with pod-based indexes.|
|source_collection|string|false|none|The name of the collection to be used as the source for the index.|

<h2 id="tocS_ConfigureIndexRequest">ConfigureIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigureindexrequest"></a>
<a id="schema_ConfigureIndexRequest"></a>
<a id="tocSconfigureindexrequest"></a>
<a id="tocsconfigureindexrequest"></a>

```json
{
  "spec": {
    "pod": {
      "replicas": 1,
      "pod_type": "p1.x1"
    }
  },
  "deletion_protection": "disabled",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "embed": {
    "field_map": {
      "text": "your-text-field"
    },
    "model": "multilingual-e5-large",
    "read_parameters": {
      "input_type": "query",
      "truncate": "NONE"
    },
    "write_parameters": {
      "input_type": "passage"
    }
  }
}
```

Configuration used to scale an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec|object|false|none|none|
|deletion_protection|[DeletionProtection](#schemadeletionprotection)|false|none|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|
|tags|[IndexTags](#schemaindextags)|false|none|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|embed|object|false|none|Configure the integrated inference embedding settings for this index.<br><br>You can convert an existing index to an integrated index by specifying the embedding model and field_map. The index vector type and dimension must match the model vector type and dimension, and the index similarity metric must be supported by the model. Refer to the [model guide](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) for available models and model details.<br><br>You can later change the embedding configuration to update the field map, read parameters, or write parameters. Once set, the model cannot be changed.|

#### Enumerated Values

|Property|Value|
|---|---|
|deletion_protection|disabled|
|deletion_protection|enabled|

<h2 id="tocS_IndexModel">IndexModel</h2>
<!-- backwards compatibility -->
<a id="schemaindexmodel"></a>
<a id="schema_IndexModel"></a>
<a id="tocSindexmodel"></a>
<a id="tocsindexmodel"></a>

```json
{
  "name": "example-index",
  "dimension": 1536,
  "metric": "cosine",
  "host": "semantic-search-c01b5b5.svc.us-west1-gcp.pinecone.io",
  "private_host": "semantic-search-c01b5b5.svc.private.us-west1-gcp.pinecone.io",
  "deletion_protection": "disabled",
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "embed": {
    "field_map": {
      "text": "your-text-field"
    },
    "metric": "cosine",
    "model": "multilingual-e5-large",
    "read_parameters": {
      "input_type": "query",
      "truncate": "NONE"
    },
    "write_parameters": {
      "input_type": "passage"
    }
  },
  "spec": {
    "pod": {
      "environment": "us-east-1-aws",
      "metadata_config": {
        "indexed": [
          "genre",
          "title",
          "imdb_rating"
        ]
      },
      "pod_type": "p1.x1",
      "pods": 1,
      "replicas": 1,
      "shards": 1
    }
  },
  "status": {
    "ready": true,
    "state": "ScalingUpPodSize"
  },
  "vector_type": "dense"
}
```

The IndexModel describes the configuration and status of a Pinecone index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the index. Resource name must be 1-45 characters long, start and end with an alphanumeric character, and consist only of lower case alphanumeric characters or '-'.<br>|
|dimension|integer(int32)|false|none|The dimensions of the vectors to be inserted in the index.|
|metric|string|true|none|The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the `vector_type` is `dense`, the metric defaults to 'cosine'.|
|host|string|true|none|The URL address where the index is hosted.|
|private_host|string|false|none|The private endpoint URL of an index.|
|deletion_protection|[DeletionProtection](#schemadeletionprotection)|false|none|Whether [deletion protection](http://docs.pinecone.io/guides/manage-data/manage-indexes#configure-deletion-protection) is enabled/disabled for the index.<br>|
|tags|[IndexTags](#schemaindextags)|false|none|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|embed|[ModelIndexEmbed](#schemamodelindexembed)|false|none|The embedding model and document fields mapped to embedding inputs.|
|spec|object|true|none|none|
|status|object|true|none|none|
|vector_type|string|true|none|The index vector type. You can use 'dense' or 'sparse'. If 'dense', the vector dimension must be specified.  If 'sparse', the vector dimension should not be specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|cosine|
|metric|euclidean|
|metric|dotproduct|
|deletion_protection|disabled|
|deletion_protection|enabled|

<h2 id="tocS_ByocSpec">ByocSpec</h2>
<!-- backwards compatibility -->
<a id="schemabyocspec"></a>
<a id="schema_ByocSpec"></a>
<a id="tocSbyocspec"></a>
<a id="tocsbyocspec"></a>

```json
{
  "environment": "aws-us-east-1-b921"
}
```

Configuration needed to deploy an index in a BYOC environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|string|true|none|The environment where the index is hosted.|

<h2 id="tocS_CreateIndexFromBackupResponse">CreateIndexFromBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateindexfrombackupresponse"></a>
<a id="schema_CreateIndexFromBackupResponse"></a>
<a id="tocScreateindexfrombackupresponse"></a>
<a id="tocscreateindexfrombackupresponse"></a>

```json
{
  "restore_job_id": "670e8400-e29b-41d4-a716-446655440000",
  "index_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

The response for creating an index from a backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restore_job_id|string|true|none|The ID of the restore job that was created.|
|index_id|string|true|none|The ID of the index that was created from the backup.|

<h2 id="tocS_CollectionList">CollectionList</h2>
<!-- backwards compatibility -->
<a id="schemacollectionlist"></a>
<a id="schema_CollectionList"></a>
<a id="tocScollectionlist"></a>
<a id="tocscollectionlist"></a>

```json
{
  "collections": [
    {
      "name": "example-collection",
      "size": 10000000,
      "status": "Initializing",
      "dimension": 1536,
      "vector_count": 120000,
      "environment": "us-east1-gcp"
    }
  ]
}
```

The list of collections that exist in the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collections|[[CollectionModel](#schemacollectionmodel)]|false|none|none|

<h2 id="tocS_RestoreJobModel">RestoreJobModel</h2>
<!-- backwards compatibility -->
<a id="schemarestorejobmodel"></a>
<a id="schema_RestoreJobModel"></a>
<a id="tocSrestorejobmodel"></a>
<a id="tocsrestorejobmodel"></a>

```json
{
  "restore_job_id": "670e8400-e29b-41d4-a716-446655440001",
  "backup_id": "670e8400-e29b-41d4-a716-446655440000",
  "target_index_name": "sample-index",
  "target_index_id": "670e8400-e29b-41d4-a716-446655440002",
  "status": "Completed",
  "created_at": "2025-02-04T13:00:00Z",
  "completed_at": "2025-02-04T14:00:00Z",
  "percent_complete": 42.2
}
```

The RestoreJobModel describes the status of a restore job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restore_job_id|string|true|none|Unique identifier for the restore job|
|backup_id|string|true|none|Backup used for the restore|
|target_index_name|string|true|none|Name of the index into which data is being restored|
|target_index_id|string|true|none|ID of the index|
|status|string|true|none|Status of the restore job|
|created_at|string(date-time)|true|none|Timestamp when the restore job started|
|completed_at|string(date-time)|false|none|Timestamp when the restore job finished|
|percent_complete|number(float)|false|none|The progress made by the restore job out of 100|

<h2 id="tocS_CreateBackupRequest">CreateBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackuprequest"></a>
<a id="schema_CreateBackupRequest"></a>
<a id="tocScreatebackuprequest"></a>
<a id="tocscreatebackuprequest"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

The configuration needed to create a backup of an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the backup.|
|description|string|false|none|A description of the backup.|

<h2 id="tocS_BackupModel">BackupModel</h2>
<!-- backwards compatibility -->
<a id="schemabackupmodel"></a>
<a id="schema_BackupModel"></a>
<a id="tocSbackupmodel"></a>
<a id="tocsbackupmodel"></a>

```json
{
  "backup_id": "670e8400-e29b-41d4-a716-446655440001",
  "source_index_name": "my-index",
  "source_index_id": "670e8400-e29b-41d4-a716-446655440000",
  "name": "backup-2025-02-04",
  "description": "Backup before bulk update.",
  "status": "Ready",
  "cloud": "aws",
  "region": "us-east-1",
  "dimension": 1536,
  "metric": "cosine",
  "record_count": 120000,
  "namespace_count": 3,
  "size_bytes": 10000000,
  "tags": {
    "tag0": "val0",
    "tag1": "val1"
  },
  "created_at": "string"
}
```

The BackupModel describes the configuration and status of a Pinecone backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup_id|string|true|none|Unique identifier for the backup.|
|source_index_name|string|true|none|Name of the index from which the backup was taken.|
|source_index_id|string|true|none|ID of the index.|
|name|string|false|none|Optional user-defined name for the backup.|
|description|string|false|none|Optional description providing context for the backup.|
|status|string|true|none|Current status of the backup (e.g., Initializing, Ready, Failed).|
|cloud|string|true|none|Cloud provider where the backup is stored.|
|region|string|true|none|Cloud region where the backup is stored.|
|dimension|integer(int32)|false|none|The dimensions of the vectors to be inserted in the index.|
|metric|string|false|none|The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the `vector_type` is `dense`, the metric defaults to 'cosine'.|
|record_count|integer|false|none|Total number of records in the backup.|
|namespace_count|integer|false|none|Number of namespaces in the backup.|
|size_bytes|integer|false|none|Size of the backup in bytes.|
|tags|[IndexTags](#schemaindextags)|false|none|Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '_', or '-'.  Values must be alphanumeric, ';', '@', '_', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.|
|created_at|string|false|none|Timestamp when the backup was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|cosine|
|metric|euclidean|
|metric|dotproduct|

<h2 id="tocS_CollectionModel">CollectionModel</h2>
<!-- backwards compatibility -->
<a id="schemacollectionmodel"></a>
<a id="schema_CollectionModel"></a>
<a id="tocScollectionmodel"></a>
<a id="tocscollectionmodel"></a>

```json
{
  "name": "example-collection",
  "size": 10000000,
  "status": "Initializing",
  "dimension": 1536,
  "vector_count": 120000,
  "environment": "us-east1-gcp"
}
```

The CollectionModel describes the configuration and status of a Pinecone collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the collection.|
|size|integer(int64)|false|none|The size of the collection in bytes.|
|status|string|true|none|The status of the collection.|
|dimension|integer(int32)|false|none|The dimension of the vectors stored in each record held in the collection.|
|vector_count|integer(int32)|false|none|The number of records stored in the collection.|
|environment|string|true|none|The environment where the collection is hosted.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Initializing|
|status|Ready|
|status|Terminating|
