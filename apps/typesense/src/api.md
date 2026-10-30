<h1 id="typesense-api">Typesense API v30.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An open source search engine for building delightful search experiences.

Base URLs:

* <a href="http://localhost:8108">http://localhost:8108</a> - Typesense Server

License: <a href="https://opensource.org/licenses/GPL-3.0">GPL-3.0</a>

<a href="https://typesense.org">Find out more about Typsesense</a>

# Authentication

* API Key (api_key_header)
    - Parameter Name: **X-TYPESENSE-API-KEY**, in: header.

<h1 id="typesense-api-collections">collections</h1>

A collection is defined by a schema

<a href="https://typesense.org/api/#create-collection">Find out more</a>

## List all collections

<a id="opIdgetCollections"></a>

> Code samples

```bash
curl http://localhost:8108/collections \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /collections`

Returns a summary of all your collections. The collections are returned sorted by creation date, with the most recent collections appearing first.

<h3 id="list-all-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|getCollectionsParameters|query|object|false|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "companies",
    "fields": [
      {
        "name": "num_employees",
        "type": "int32",
        "facet": false
      },
      {
        "name": "company_name",
        "type": "string",
        "facet": false
      },
      {
        "name": "country",
        "type": "string",
        "facet": true
      }
    ],
    "default_sorting_field": "num_employees",
    "token_separators": [],
    "synonym_sets": [
      "synonym_set_1"
    ],
    "enable_nested_fields": true,
    "symbols_to_index": [],
    "voice_query_model": {
      "model_name": "ts/whisper/base.en"
    },
    "metadata": {},
    "num_documents": 0,
    "created_at": 0
  }
]
```

<h3 id="list-all-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all collections|Inline|

<h3 id="list-all-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CollectionResponse](#schemacollectionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create a new collection

<a id="opIdcreateCollection"></a>

> Code samples

```bash
curl http://localhost:8108/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "name": "companies",
    "fields": [
      {
        "name": "num_employees",
        "type": "int32",
        "facet": false
      },
      {
        "name": "company_name",
        "type": "string",
        "facet": false
      },
      {
        "name": "country",
        "type": "string",
        "facet": true
      }
    ],
    "default_sorting_field": "num_employees",
    "token_separators": [],
    "synonym_sets": [
      "synonym_set_1"
    ],
    "enable_nested_fields": true,
    "symbols_to_index": [],
    "voice_query_model": {
      "model_name": "ts/whisper/base.en"
    },
    "metadata": {}
  }'
```

`POST /collections`

When a collection is created, we give it a name and describe the fields that will be indexed from the documents added to the collection.

> Body parameter

```json
{
  "name": "companies",
  "fields": [
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "default_sorting_field": "num_employees",
  "token_separators": [],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "enable_nested_fields": true,
  "symbols_to_index": [],
  "voice_query_model": {
    "model_name": "ts/whisper/base.en"
  },
  "metadata": {}
}
```

<h3 id="create-a-new-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionSchema](#schemacollectionschema)|true|The collection object to be created|
|» name|body|string|true|Name of the collection|
|» fields|body|[[Field](#schemafield)]|true|A list of fields for querying, filtering and faceting|
|» default_sorting_field|body|string|false|The name of an int32 / float field that determines the order in which the search results are ranked when a sort_by clause is not provided during searching. This field must indicate some kind of popularity.|
|» token_separators|body|[string]|false|List of symbols or special characters to be used for splitting the text into individual words in addition to space and new-line characters.<br>|
|» synonym_sets|body|[string]|false|List of synonym set names to associate with this collection|
|» enable_nested_fields|body|boolean|false|Enables experimental support at a collection level for nested object or object array fields. This field is only available if the Typesense server is version `0.24.0.rcn34` or later.|
|» symbols_to_index|body|[string]|false|List of symbols or special characters to be indexed.<br>|
|» voice_query_model|body|[VoiceQueryModelCollectionConfig](#schemavoicequerymodelcollectionconfig)|false|Configuration for the voice query model<br>|
|» metadata|body|object|false|Optional details about the collection, e.g., when it was created, who created it etc.<br>|

> Example responses

> 201 Response

```json
{
  "name": "companies",
  "fields": [
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "default_sorting_field": "num_employees",
  "token_separators": [],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "enable_nested_fields": true,
  "symbols_to_index": [],
  "voice_query_model": {
    "model_name": "ts/whisper/base.en"
  },
  "metadata": {},
  "num_documents": 0,
  "created_at": 0
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 409 Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-new-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Collection successfully created|[CollectionResponse](#schemacollectionresponse)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|409|Conflict|Collection already exists|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a single collection

<a id="opIdgetCollection"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /collections/{collectionName}`

Retrieve the details of a collection, given its name.

<h3 id="retrieve-a-single-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to retrieve|

> Example responses

> 200 Response

```json
{
  "name": "companies",
  "fields": [
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "default_sorting_field": "num_employees",
  "token_separators": [],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "enable_nested_fields": true,
  "symbols_to_index": [],
  "voice_query_model": {
    "model_name": "ts/whisper/base.en"
  },
  "metadata": {},
  "num_documents": 0,
  "created_at": 0
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-single-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection fetched|[CollectionResponse](#schemacollectionresponse)|
|404|Not Found|Collection not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a collection

<a id="opIddeleteCollection"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /collections/{collectionName}`

Permanently drops a collection. This action cannot be undone. For large collections, this might have an impact on read latencies.

<h3 id="delete-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to delete|

> Example responses

> 200 Response

```json
{
  "name": "companies",
  "fields": [
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "default_sorting_field": "num_employees",
  "token_separators": [],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "enable_nested_fields": true,
  "symbols_to_index": [],
  "voice_query_model": {
    "model_name": "ts/whisper/base.en"
  },
  "metadata": {},
  "num_documents": 0,
  "created_at": 0
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection deleted|[CollectionResponse](#schemacollectionresponse)|
|404|Not Found|Collection not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Update a collection

<a id="opIdupdateCollection"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "fields": [
      {
        "name": "company_name",
        "type": "string",
        "facet": false
      },
      {
        "name": "num_employees",
        "type": "int32",
        "facet": false
      },
      {
        "name": "country",
        "type": "string",
        "facet": true
      }
    ],
    "synonym_sets": [
      "synonym_set_1"
    ],
    "metadata": {}
  }'
```

`PATCH /collections/{collectionName}`

Update a collection's schema to modify the fields and their types.

> Body parameter

```json
{
  "fields": [
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "metadata": {}
}
```

<h3 id="update-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to update|
|body|body|[CollectionUpdateSchema](#schemacollectionupdateschema)|true|The document object with fields to be updated|
|» fields|body|[[Field](#schemafield)]|false|A list of fields for querying, filtering and faceting|
|» synonym_sets|body|[string]|false|List of synonym set names to associate with this collection|
|» metadata|body|object|false|Optional details about the collection, e.g., when it was created, who created it etc.<br>|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "metadata": {}
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="update-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated partial collection schema|[CollectionUpdateSchema](#schemacollectionupdateschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|404|Not Found|The collection was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## List all aliases

<a id="opIdgetAliases"></a>

> Code samples

```bash
curl http://localhost:8108/aliases \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /aliases`

List all aliases and the corresponding collections that they map to.

> Example responses

> 200 Response

```json
{
  "aliases": [
    {
      "name": "string",
      "collection_name": "string"
    }
  ]
}
```

<h3 id="list-all-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all collection aliases|[CollectionAliasesResponse](#schemacollectionaliasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve an alias

<a id="opIdgetAlias"></a>

> Code samples

```bash
curl http://localhost:8108/aliases/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /aliases/{aliasName}`

Find out which collection an alias points to by fetching it

<h3 id="retrieve-an-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasName|path|string|true|The name of the alias to retrieve|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "collection_name": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-an-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection alias fetched|[CollectionAlias](#schemacollectionalias)|
|404|Not Found|The alias was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create or update a collection alias

<a id="opIdupsertAlias"></a>

> Code samples

```bash
curl http://localhost:8108/aliases/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "collection_name": "string"
  }'
```

`PUT /aliases/{aliasName}`

Create or update a collection alias. An alias is a virtual collection name that points to a real collection. If you're familiar with symbolic links on Linux, it's very similar to that. Aliases are useful when you want to reindex your data in the background on a new collection and switch your application to it without any changes to your code.

> Body parameter

```json
{
  "collection_name": "string"
}
```

<h3 id="create-or-update-a-collection-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasName|path|string|true|The name of the alias to create/update|
|body|body|[CollectionAliasSchema](#schemacollectionaliasschema)|false|Collection alias to be created/updated|
|» collection_name|body|string|true|Name of the collection you wish to map the alias to|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "collection_name": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="create-or-update-a-collection-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The collection alias was created/updated|[CollectionAlias](#schemacollectionalias)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|404|Not Found|Alias not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete an alias

<a id="opIddeleteAlias"></a>

> Code samples

```bash
curl http://localhost:8108/aliases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /aliases/{aliasName}`

<h3 id="delete-an-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasName|path|string|true|The name of the alias to delete|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "collection_name": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-an-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection alias was deleted|[CollectionAlias](#schemacollectionalias)|
|404|Not Found|Alias not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-documents">documents</h1>

A document is an individual record to be indexed and belongs to a collection

<a href="https://typesense.org/api/#index-document">Find out more</a>

## Index a document

<a id="opIdindexDocument"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{}'
```

`POST /collections/{collectionName}/documents`

A document to be indexed in a given collection must conform to the schema of the collection.

> Body parameter

```json
{}
```

<h3 id="index-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to add the document to|
|action|query|[IndexAction](#schemaindexaction)|false|Additional action to perform|
|dirty_values|query|[DirtyValues](#schemadirtyvalues)|false|Dealing with Dirty Data|
|body|body|object|true|The document object to be indexed|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|create|
|action|update|
|action|upsert|
|action|emplace|
|dirty_values|coerce_or_reject|
|dirty_values|coerce_or_drop|
|dirty_values|drop|
|dirty_values|reject|

> Example responses

> 201 Response

```json
{}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="index-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Document successfully created/indexed|Inline|
|404|Not Found|Collection not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a bunch of documents

<a id="opIddeleteDocuments"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string/documents \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /collections/{collectionName}/documents`

Delete a bunch of documents that match a specific filter condition. Use the `batch_size` parameter to control the number of documents that should deleted at a time. A larger value will speed up deletions, but will impact performance of other operations running on the server.

<h3 id="delete-a-bunch-of-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to delete documents from|
|deleteDocumentsParameters|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "num_deleted": 0
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-bunch-of-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Documents successfully deleted|Inline|
|404|Not Found|Collection not found|[ApiResponse](#schemaapiresponse)|

<h3 id="delete-a-bunch-of-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_deleted|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Update documents with conditional query

<a id="opIdupdateDocuments"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string/documents \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{}'
```

`PATCH /collections/{collectionName}/documents`

The filter_by query parameter is used to filter to specify a condition against which the documents are matched. The request body contains the fields that should be updated for any documents that match the filter condition. This endpoint is only available if the Typesense server is version `0.25.0.rc12` or later.

> Body parameter

```json
{}
```

<h3 id="update-documents-with-conditional-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to update documents in|
|updateDocumentsParameters|query|object|false|none|
|body|body|object|true|The document fields to be updated|

> Example responses

> 200 Response

```json
{
  "num_updated": 1
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="update-documents-with-conditional-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response contains a single field, `num_updated`, indicating the number of documents affected.|Inline|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|404|Not Found|The collection was not found|[ApiResponse](#schemaapiresponse)|

<h3 id="update-documents-with-conditional-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_updated|integer|true|none|The number of documents that have been updated|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Search for documents in a collection

<a id="opIdsearchCollection"></a>

> Code samples

```bash
curl 'http://localhost:8108/collections/string/documents/search?q=string&query_by=string&validate_field_names=true&nl_query=true&nl_model_id=string&query_by_weights=string&text_match_type=string&prefix=string&infix=string&max_extra_prefix=0&max_extra_suffix=0&filter_by=num_employees%3A%3E100%20%26%26%20country%3A%20%5BUSA%2C%20UK%5D&enable_lazy_filter=true&max_filter_by_candidates=0&sort_by=num_employees%3Adesc&facet_by=string&max_facet_values=0&facet_query=string&facet_query_num_typos=0&num_typos=string&page=0&per_page=0&limit=0&offset=0&group_by=string&group_limit=0&group_missing_values=true&group_max_candidates=0&include_fields=string&exclude_fields=string&highlight_full_fields=string&highlight_affix_num_tokens=0&highlight_start_tag=string&highlight_end_tag=string&enable_highlight_v1=true&enable_analytics=true&snippet_threshold=0&synonym_sets=synonym_set_1%2Csynonym_set_2&drop_tokens_threshold=0&drop_tokens_mode=right_to_left&typo_tokens_threshold=0&enable_typos_for_alpha_numerical_tokens=true&filter_curated_hits=true&enable_synonyms=true&synonym_prefix=true&demote_synonym_match=true&synonym_num_typos=0&pinned_hits=string&hidden_hits=string&curation_tags=string&highlight_fields=string&rerank_hybrid_matches=false&split_join_tokens=string&pre_segmented_query=true&preset=string&enable_curations=false&prioritize_exact_match=true&max_candidates=0&prioritize_token_position=false&prioritize_num_matching_fields=true&enable_typos_for_numerical_tokens=true&exhaustive_search=true&search_cutoff_ms=0&limit_hits=0&use_cache=true&cache_ttl=0&min_len_1typo=0&min_len_2typo=0&vector_query=string&remote_embedding_timeout_ms=0&remote_embedding_num_tries=0&facet_strategy=string&stopwords=string&facet_return_parent=string&facet_sample_percent=0&facet_sample_threshold=0&facet_sample_slope=0&voice_query=string&conversation=true&conversation_model_id=string&conversation_id=string' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /collections/{collectionName}/documents/search`

Search for documents in a collection that match the search criteria.

<h3 id="search-for-documents-in-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to search for the document under|
|searchParameters|query|[SearchParameters](#schemasearchparameters)|true|none|

> Example responses

> 200 Response

```json
{
  "facet_counts": [
    {
      "counts": [
        {
          "count": 0,
          "highlighted": "string",
          "value": "string",
          "parent": {}
        }
      ],
      "field_name": "string",
      "sampled": true,
      "stats": {
        "max": 0,
        "min": 0,
        "sum": 0,
        "total_values": 0,
        "avg": 0
      }
    }
  ],
  "found": 0,
  "found_docs": 0,
  "search_time_ms": 0,
  "out_of": 0,
  "search_cutoff": true,
  "page": 0,
  "grouped_hits": [
    {
      "found": 0,
      "group_key": [
        null
      ],
      "hits": [
        {
          "highlights": {
            "company_name": {
              "field": "company_name",
              "snippet": "<mark>Stark</mark> Industries"
            }
          },
          "document": {
            "id": "124",
            "company_name": "Stark Industries",
            "num_employees": 5215,
            "country": "USA"
          },
          "text_match": 1234556
        }
      ]
    }
  ],
  "hits": [
    {
      "highlights": {
        "company_name": {
          "field": "company_name",
          "snippet": "<mark>Stark</mark> Industries"
        }
      },
      "document": {
        "id": "124",
        "company_name": "Stark Industries",
        "num_employees": 5215,
        "country": "USA"
      },
      "text_match": 1234556
    }
  ],
  "request_params": {
    "collection_name": "string",
    "first_q": "string",
    "q": "string",
    "per_page": 0,
    "voice_query": {
      "transcribed_query": "string"
    }
  },
  "conversation": {
    "answer": "string",
    "conversation_history": [
      {}
    ],
    "conversation_id": "string",
    "query": "string"
  },
  "union_request_params": [
    {
      "collection_name": "string",
      "first_q": "string",
      "q": "string",
      "per_page": 0,
      "voice_query": {
        "transcribed_query": "string"
      }
    }
  ],
  "metadata": {}
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="search-for-documents-in-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search results|[SearchResult](#schemasearchresult)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|404|Not Found|The collection or field was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Export all documents in a collection

<a id="opIdexportDocuments"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string/documents/export \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /collections/{collectionName}/documents/export`

Export all documents in a collection in JSON lines format.

<h3 id="export-all-documents-in-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection|
|exportDocumentsParameters|query|object|false|none|

> Example responses

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="export-all-documents-in-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exports all the documents in a given collection.|Inline|
|404|Not Found|The collection was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Import documents into a collection

<a id="opIdimportDocuments"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string/documents/import \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d 'string'
```

`POST /collections/{collectionName}/documents/import`

The documents to be imported must be formatted in a newline delimited JSON structure. You can feed the output file from a Typesense export operation directly as import.

> Body parameter

```text
string
```

<h3 id="import-documents-into-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection|
|importDocumentsParameters|query|object|false|none|
|body|body|string|true|The json array of documents or the JSONL file to import|

> Example responses

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="import-documents-into-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of the import operation. Each line of the response indicates the result of each document present in the request body (in the same order). If the import of a single document fails, it does not affect the other documents. If there is a failure, the response line will include a corresponding error message and as well as the actual document content.|Inline|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|404|Not Found|The collection was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a document

<a id="opIdgetDocument"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string/documents/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /collections/{collectionName}/documents/{documentId}`

Fetch an individual document from a collection by using its ID.

<h3 id="retrieve-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to search for the document under|
|documentId|path|string|true|The Document ID|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document referenced by the ID|Inline|
|404|Not Found|The document or collection was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a document

<a id="opIddeleteDocument"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string/documents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /collections/{collectionName}/documents/{documentId}`

Delete an individual document from a collection by using its ID.

<h3 id="delete-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to search for the document under|
|documentId|path|string|true|The Document ID|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document referenced by the ID was deleted|Inline|
|404|Not Found|The document or collection was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Update a document

<a id="opIdupdateDocument"></a>

> Code samples

```bash
curl http://localhost:8108/collections/string/documents/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{}'
```

`PATCH /collections/{collectionName}/documents/{documentId}`

Update an individual document from a collection by using its ID. The update can be partial.

> Body parameter

```json
{}
```

<h3 id="update-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionName|path|string|true|The name of the collection to search for the document under|
|documentId|path|string|true|The Document ID|
|dirty_values|query|[DirtyValues](#schemadirtyvalues)|false|Dealing with Dirty Data|
|body|body|object|true|The document object with fields to be updated|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dirty_values|coerce_or_reject|
|dirty_values|coerce_or_drop|
|dirty_values|drop|
|dirty_values|reject|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="update-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document referenced by the ID was updated|Inline|
|404|Not Found|The document or collection was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## send multiple search requests in a single HTTP request

<a id="opIdmultiSearch"></a>

> Code samples

```bash
curl 'http://localhost:8108/multi_search?q=string&query_by=string&query_by_weights=string&text_match_type=string&prefix=string&infix=string&max_extra_prefix=0&max_extra_suffix=0&filter_by=num_employees%3A%3E100%20%26%26%20country%3A%20%5BUSA%2C%20UK%5D&enable_lazy_filter=true&max_filter_by_candidates=0&sort_by=string&facet_by=string&max_facet_values=0&facet_query=string&facet_query_num_typos=0&num_typos=string&page=0&per_page=0&limit=0&offset=0&group_by=string&group_limit=0&group_missing_values=true&group_max_candidates=0&include_fields=string&exclude_fields=string&highlight_full_fields=string&highlight_affix_num_tokens=0&highlight_start_tag=string&highlight_end_tag=string&snippet_threshold=0&drop_tokens_threshold=0&drop_tokens_mode=right_to_left&typo_tokens_threshold=0&enable_typos_for_alpha_numerical_tokens=true&filter_curated_hits=true&enable_synonyms=true&enable_analytics=true&synonym_prefix=true&demote_synonym_match=true&synonym_num_typos=0&pinned_hits=string&hidden_hits=string&curation_tags=string&highlight_fields=string&rerank_hybrid_matches=false&pre_segmented_query=false&preset=string&enable_curations=false&prioritize_exact_match=true&prioritize_token_position=false&prioritize_num_matching_fields=true&enable_typos_for_numerical_tokens=true&exhaustive_search=true&search_cutoff_ms=0&limit_hits=0&use_cache=true&cache_ttl=0&min_len_1typo=0&min_len_2typo=0&vector_query=string&remote_embedding_timeout_ms=0&remote_embedding_num_tries=0&facet_strategy=string&stopwords=string&facet_return_parent=string&facet_sample_percent=0&facet_sample_threshold=0&facet_sample_slope=0&voice_query=string&conversation=true&conversation_model_id=string&conversation_id=string&validate_field_names=true' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "union": false,
    "searches": [
      {
        "q": "string",
        "query_by": "string",
        "query_by_weights": "string",
        "text_match_type": "string",
        "prefix": "string",
        "infix": "string",
        "max_extra_prefix": 0,
        "max_extra_suffix": 0,
        "filter_by": "num_employees:>100 && country: [USA, UK]",
        "enable_lazy_filter": true,
        "max_filter_by_candidates": 0,
        "sort_by": "string",
        "facet_by": "string",
        "max_facet_values": 0,
        "facet_query": "string",
        "facet_query_num_typos": 0,
        "num_typos": "string",
        "page": 0,
        "per_page": 0,
        "limit": 0,
        "offset": 0,
        "group_by": "string",
        "group_limit": 0,
        "group_missing_values": true,
        "group_max_candidates": 0,
        "include_fields": "string",
        "exclude_fields": "string",
        "highlight_full_fields": "string",
        "highlight_affix_num_tokens": 0,
        "highlight_start_tag": "string",
        "highlight_end_tag": "string",
        "snippet_threshold": 0,
        "drop_tokens_threshold": 0,
        "drop_tokens_mode": "right_to_left",
        "typo_tokens_threshold": 0,
        "enable_typos_for_alpha_numerical_tokens": true,
        "filter_curated_hits": true,
        "enable_synonyms": true,
        "enable_analytics": true,
        "synonym_prefix": true,
        "demote_synonym_match": true,
        "synonym_num_typos": 0,
        "pinned_hits": "string",
        "hidden_hits": "string",
        "curation_tags": "string",
        "highlight_fields": "string",
        "rerank_hybrid_matches": false,
        "pre_segmented_query": false,
        "preset": "string",
        "enable_curations": false,
        "prioritize_exact_match": true,
        "prioritize_token_position": false,
        "prioritize_num_matching_fields": true,
        "enable_typos_for_numerical_tokens": true,
        "exhaustive_search": true,
        "search_cutoff_ms": 0,
        "limit_hits": 0,
        "use_cache": true,
        "cache_ttl": 0,
        "min_len_1typo": 0,
        "min_len_2typo": 0,
        "vector_query": "string",
        "remote_embedding_timeout_ms": 0,
        "remote_embedding_num_tries": 0,
        "facet_strategy": "string",
        "stopwords": "string",
        "facet_return_parent": "string",
        "facet_sample_percent": 0,
        "facet_sample_threshold": 0,
        "facet_sample_slope": 0,
        "voice_query": "string",
        "conversation": true,
        "conversation_model_id": "string",
        "conversation_id": "string",
        "validate_field_names": true,
        "collection": "string",
        "x-typesense-api-key": "string"
      }
    ]
  }'
```

`POST /multi_search`

This is especially useful to avoid round-trip network latencies incurred otherwise if each of these requests are sent in separate HTTP requests. You can also use this feature to do a federated search across multiple collections in a single HTTP request.

> Body parameter

```json
{
  "union": false,
  "searches": [
    {
      "q": "string",
      "query_by": "string",
      "query_by_weights": "string",
      "text_match_type": "string",
      "prefix": "string",
      "infix": "string",
      "max_extra_prefix": 0,
      "max_extra_suffix": 0,
      "filter_by": "num_employees:>100 && country: [USA, UK]",
      "enable_lazy_filter": true,
      "max_filter_by_candidates": 0,
      "sort_by": "string",
      "facet_by": "string",
      "max_facet_values": 0,
      "facet_query": "string",
      "facet_query_num_typos": 0,
      "num_typos": "string",
      "page": 0,
      "per_page": 0,
      "limit": 0,
      "offset": 0,
      "group_by": "string",
      "group_limit": 0,
      "group_missing_values": true,
      "group_max_candidates": 0,
      "include_fields": "string",
      "exclude_fields": "string",
      "highlight_full_fields": "string",
      "highlight_affix_num_tokens": 0,
      "highlight_start_tag": "string",
      "highlight_end_tag": "string",
      "snippet_threshold": 0,
      "drop_tokens_threshold": 0,
      "drop_tokens_mode": "right_to_left",
      "typo_tokens_threshold": 0,
      "enable_typos_for_alpha_numerical_tokens": true,
      "filter_curated_hits": true,
      "enable_synonyms": true,
      "enable_analytics": true,
      "synonym_prefix": true,
      "demote_synonym_match": true,
      "synonym_num_typos": 0,
      "pinned_hits": "string",
      "hidden_hits": "string",
      "curation_tags": "string",
      "highlight_fields": "string",
      "rerank_hybrid_matches": false,
      "pre_segmented_query": false,
      "preset": "string",
      "enable_curations": false,
      "prioritize_exact_match": true,
      "prioritize_token_position": false,
      "prioritize_num_matching_fields": true,
      "enable_typos_for_numerical_tokens": true,
      "exhaustive_search": true,
      "search_cutoff_ms": 0,
      "limit_hits": 0,
      "use_cache": true,
      "cache_ttl": 0,
      "min_len_1typo": 0,
      "min_len_2typo": 0,
      "vector_query": "string",
      "remote_embedding_timeout_ms": 0,
      "remote_embedding_num_tries": 0,
      "facet_strategy": "string",
      "stopwords": "string",
      "facet_return_parent": "string",
      "facet_sample_percent": 0,
      "facet_sample_threshold": 0,
      "facet_sample_slope": 0,
      "voice_query": "string",
      "conversation": true,
      "conversation_model_id": "string",
      "conversation_id": "string",
      "validate_field_names": true,
      "collection": "string",
      "x-typesense-api-key": "string"
    }
  ]
}
```

<h3 id="send-multiple-search-requests-in-a-single-http-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiSearchParameters|query|[MultiSearchParameters](#schemamultisearchparameters)|true|none|
|body|body|[MultiSearchSearchesParameter](#schemamultisearchsearchesparameter)|false|none|
|» union|body|boolean|false|When true, merges the search results from each search query into a single ordered set of hits.|
|» searches|body|[[MultiSearchCollectionParameters](#schemamultisearchcollectionparameters)]|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "facet_counts": [
        {
          "counts": [
            {
              "count": 0,
              "highlighted": "string",
              "value": "string",
              "parent": {}
            }
          ],
          "field_name": "string",
          "sampled": true,
          "stats": {
            "max": 0,
            "min": 0,
            "sum": 0,
            "total_values": 0,
            "avg": 0
          }
        }
      ],
      "found": 0,
      "found_docs": 0,
      "search_time_ms": 0,
      "out_of": 0,
      "search_cutoff": true,
      "page": 0,
      "grouped_hits": [
        {
          "found": 0,
          "group_key": [
            null
          ],
          "hits": [
            {
              "highlights": {
                "company_name": {
                  "field": "company_name",
                  "snippet": "<mark>Stark</mark> Industries"
                }
              },
              "document": {
                "id": "124",
                "company_name": "Stark Industries",
                "num_employees": 5215,
                "country": "USA"
              },
              "text_match": 1234556
            }
          ]
        }
      ],
      "hits": [
        {
          "highlights": {
            "company_name": {
              "field": "company_name",
              "snippet": "<mark>Stark</mark> Industries"
            }
          },
          "document": {
            "id": "124",
            "company_name": "Stark Industries",
            "num_employees": 5215,
            "country": "USA"
          },
          "text_match": 1234556
        }
      ],
      "request_params": {
        "collection_name": "string",
        "first_q": "string",
        "q": "string",
        "per_page": 0,
        "voice_query": {
          "transcribed_query": "string"
        }
      },
      "conversation": {
        "answer": "string",
        "conversation_history": [
          {}
        ],
        "conversation_id": "string",
        "query": "string"
      },
      "union_request_params": [
        {
          "collection_name": "string",
          "first_q": "string",
          "q": "string",
          "per_page": 0,
          "voice_query": {
            "transcribed_query": "string"
          }
        }
      ],
      "metadata": {},
      "code": 0,
      "error": "string"
    }
  ],
  "conversation": {
    "answer": "string",
    "conversation_history": [
      {}
    ],
    "conversation_id": "string",
    "query": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="send-multiple-search-requests-in-a-single-http-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search results|[MultiSearchResult](#schemamultisearchresult)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-analytics">analytics</h1>

Typesense can aggregate search queries for both analytics purposes and for query suggestions.

<a href="https://typesense.org/docs/28.0/api/analytics-query-suggestions.html">Find out more</a>

## Retrieve analytics events

<a id="opIdgetAnalyticsEvents"></a>

> Code samples

```bash
curl 'http://localhost:8108/analytics/events?user_id=string&name=string&n=0' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /analytics/events`

Retrieve the most recent events for a user and rule.

<h3 id="retrieve-analytics-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|true|none|
|name|query|string|true|Analytics rule name|
|n|query|integer|true|Number of events to return (max 1000)|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "name": "string",
      "event_type": "string",
      "collection": "string",
      "timestamp": 0,
      "user_id": "string",
      "doc_id": "string",
      "doc_ids": [
        "string"
      ],
      "query": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-analytics-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Events fetched|[AnalyticsEventsResponse](#schemaanalyticseventsresponse)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create an analytics event

<a id="opIdcreateAnalyticsEvent"></a>

> Code samples

```bash
curl http://localhost:8108/analytics/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "name": "string",
    "event_type": "string",
    "data": {
      "user_id": "string",
      "doc_id": "string",
      "doc_ids": [
        "string"
      ],
      "q": "string",
      "analytics_tag": "string"
    }
  }'
```

`POST /analytics/events`

Submit a single analytics event. The event must correspond to an existing analytics rule by name.

> Body parameter

```json
{
  "name": "string",
  "event_type": "string",
  "data": {
    "user_id": "string",
    "doc_id": "string",
    "doc_ids": [
      "string"
    ],
    "q": "string",
    "analytics_tag": "string"
  }
}
```

<h3 id="create-an-analytics-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnalyticsEvent](#schemaanalyticsevent)|true|The analytics event to be created|
|» name|body|string|true|Name of the analytics rule this event corresponds to|
|» event_type|body|string|true|Type of event (e.g., click, conversion, query, visit)|
|» data|body|object|true|Event payload|
|» » user_id|body|string|false|none|
|» » doc_id|body|string|false|none|
|» » doc_ids|body|[string]|false|none|
|» » q|body|string|false|none|
|» » analytics_tag|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="create-an-analytics-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analytics event successfully created|[AnalyticsEventCreateResponse](#schemaanalyticseventcreateresponse)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Flush in-memory analytics to disk

<a id="opIdflushAnalytics"></a>

> Code samples

```bash
curl http://localhost:8108/analytics/flush \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`POST /analytics/flush`

Triggers a flush of analytics data to persistent storage.

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

<h3 id="flush-in-memory-analytics-to-disk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flush triggered|[AnalyticsEventCreateResponse](#schemaanalyticseventcreateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Get analytics subsystem status

<a id="opIdgetAnalyticsStatus"></a>

> Code samples

```bash
curl http://localhost:8108/analytics/status \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /analytics/status`

Returns sizes of internal analytics buffers and queues.

> Example responses

> 200 Response

```json
{
  "popular_prefix_queries": 0,
  "nohits_prefix_queries": 0,
  "log_prefix_queries": 0,
  "query_log_events": 0,
  "query_counter_events": 0,
  "doc_log_events": 0,
  "doc_counter_events": 0
}
```

<h3 id="get-analytics-subsystem-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status fetched|[AnalyticsStatus](#schemaanalyticsstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve analytics rules

<a id="opIdretrieveAnalyticsRules"></a>

> Code samples

```bash
curl http://localhost:8108/analytics/rules \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /analytics/rules`

Retrieve all analytics rules. Use the optional rule_tag filter to narrow down results.

<h3 id="retrieve-analytics-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_tag|query|string|false|Filter rules by rule_tag|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "type": "popular_queries",
    "collection": "string",
    "event_type": "string",
    "rule_tag": "string",
    "params": {
      "destination_collection": "string",
      "limit": 0,
      "capture_search_requests": true,
      "meta_fields": [
        "string"
      ],
      "expand_query": true,
      "counter_field": "string",
      "weight": 0
    }
  }
]
```

<h3 id="retrieve-analytics-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analytics rules fetched|Inline|

<h3 id="retrieve-analytics-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AnalyticsRule](#schemaanalyticsrule)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create analytics rule(s)

<a id="opIdcreateAnalyticsRule"></a>

> Code samples

```bash
curl http://localhost:8108/analytics/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "name": "string",
    "type": "popular_queries",
    "collection": "string",
    "event_type": "string",
    "rule_tag": "string",
    "params": {
      "destination_collection": "string",
      "limit": 0,
      "capture_search_requests": true,
      "meta_fields": [
        "string"
      ],
      "expand_query": true,
      "counter_field": "string",
      "weight": 0
    }
  }'
```

`POST /analytics/rules`

Create one or more analytics rules. You can send a single rule object or an array of rule objects.

> Body parameter

```json
{
  "name": "string",
  "type": "popular_queries",
  "collection": "string",
  "event_type": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

<h3 id="create-analytics-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnalyticsRuleCreate](#schemaanalyticsrulecreate) \| [[AnalyticsRuleCreate](#schemaanalyticsrulecreate)]|true|The analytics rule(s) to be created|
|» *oneOf*|body|[AnalyticsRuleCreate](#schemaanalyticsrulecreate)|false|none|
|» *oneOf*|body|[[AnalyticsRuleCreate](#schemaanalyticsrulecreate)]|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "popular_queries",
  "collection": "string",
  "event_type": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="create-analytics-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analytics rule(s) successfully created|Inline|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<h3 id="create-analytics-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AnalyticsRule](#schemaanalyticsrule)|false|none|none|
|*oneOf*|[[AnalyticsRule](#schemaanalyticsrule) \| object]|false|none|none|
|*anonymous*|[[AnalyticsRule](#schemaanalyticsrule) \| object]|false|none|none|
|» *oneOf*|[AnalyticsRule](#schemaanalyticsrule)|false|none|none|
|» *oneOf*|object|false|none|none|
|» error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieves an analytics rule

<a id="opIdretrieveAnalyticsRule"></a>

> Code samples

```bash
curl http://localhost:8108/analytics/rules/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /analytics/rules/{ruleName}`

Retrieve the details of an analytics rule, given it's name

<h3 id="retrieves-an-analytics-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleName|path|string|true|The name of the analytics rule to retrieve|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "popular_queries",
  "collection": "string",
  "event_type": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieves-an-analytics-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analytics rule fetched|[AnalyticsRule](#schemaanalyticsrule)|
|404|Not Found|Analytics rule not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Upserts an analytics rule

<a id="opIdupsertAnalyticsRule"></a>

> Code samples

```bash
curl http://localhost:8108/analytics/rules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "name": "string",
    "rule_tag": "string",
    "params": {
      "destination_collection": "string",
      "limit": 0,
      "capture_search_requests": true,
      "meta_fields": [
        "string"
      ],
      "expand_query": true,
      "counter_field": "string",
      "weight": 0
    }
  }'
```

`PUT /analytics/rules/{ruleName}`

Upserts an analytics rule with the given name.

> Body parameter

```json
{
  "name": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

<h3 id="upserts-an-analytics-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleName|path|string|true|The name of the analytics rule to upsert|
|body|body|[AnalyticsRuleUpdate](#schemaanalyticsruleupdate)|true|The Analytics rule to be upserted|
|» name|body|string|false|none|
|» rule_tag|body|string|false|none|
|» params|body|object|false|none|
|» » destination_collection|body|string|false|none|
|» » limit|body|integer|false|none|
|» » capture_search_requests|body|boolean|false|none|
|» » meta_fields|body|[string]|false|none|
|» » expand_query|body|boolean|false|none|
|» » counter_field|body|string|false|none|
|» » weight|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "popular_queries",
  "collection": "string",
  "event_type": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="upserts-an-analytics-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analytics rule successfully upserted|[AnalyticsRule](#schemaanalyticsrule)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete an analytics rule

<a id="opIddeleteAnalyticsRule"></a>

> Code samples

```bash
curl http://localhost:8108/analytics/rules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /analytics/rules/{ruleName}`

Permanently deletes an analytics rule, given it's name

<h3 id="delete-an-analytics-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleName|path|string|true|The name of the analytics rule to delete|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "popular_queries",
  "collection": "string",
  "event_type": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-an-analytics-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analytics rule deleted|[AnalyticsRule](#schemaanalyticsrule)|
|404|Not Found|Analytics rule not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-keys">keys</h1>

Manage API Keys with fine-grain access control

<a href="https://typesense.org/docs/0.23.0/api/#api-keys">Find out more</a>

## Retrieve (metadata about) all keys.

<a id="opIdgetKeys"></a>

> Code samples

```bash
curl http://localhost:8108/keys \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /keys`

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "value": "string",
      "description": "string",
      "actions": [
        "string"
      ],
      "collections": [
        "string"
      ],
      "expires_at": 0,
      "id": 0,
      "value_prefix": "string"
    }
  ]
}
```

<h3 id="retrieve-metadata-about-all-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all keys|[ApiKeysResponse](#schemaapikeysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create an API Key

<a id="opIdcreateKey"></a>

> Code samples

```bash
curl http://localhost:8108/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "value": "string",
    "description": "string",
    "actions": [
      "string"
    ],
    "collections": [
      "string"
    ],
    "expires_at": 0
  }'
```

`POST /keys`

Create an API Key with fine-grain access control. You can restrict access on both a per-collection and per-action level. The generated key is returned only during creation. You want to store this key carefully in a secure place.

> Body parameter

```json
{
  "value": "string",
  "description": "string",
  "actions": [
    "string"
  ],
  "collections": [
    "string"
  ],
  "expires_at": 0
}
```

<h3 id="create-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiKeySchema](#schemaapikeyschema)|false|The object that describes API key scope|
|» value|body|string|false|none|
|» description|body|string|true|none|
|» actions|body|[string]|true|none|
|» collections|body|[string]|true|none|
|» expires_at|body|integer(int64)|false|none|

> Example responses

> 201 Response

```json
{
  "value": "string",
  "description": "string",
  "actions": [
    "string"
  ],
  "collections": [
    "string"
  ],
  "expires_at": 0,
  "id": 0,
  "value_prefix": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 409 Response

```json
{
  "message": "string"
}
```

<h3 id="create-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created API key|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|409|Conflict|API key generation conflict|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve (metadata about) a key

<a id="opIdgetKey"></a>

> Code samples

```bash
curl http://localhost:8108/keys/0 \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /keys/{keyId}`

Retrieve (metadata about) a key. Only the key prefix is returned when you retrieve a key. Due to security reasons, only the create endpoint returns the full API key.

<h3 id="retrieve-metadata-about-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyId|path|integer(int64)|true|The ID of the key to retrieve|

> Example responses

> 200 Response

```json
{
  "value": "string",
  "description": "string",
  "actions": [
    "string"
  ],
  "collections": [
    "string"
  ],
  "expires_at": 0,
  "id": 0,
  "value_prefix": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-metadata-about-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The key referenced by the ID|[ApiKey](#schemaapikey)|
|404|Not Found|The key was not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete an API key given its ID.

<a id="opIddeleteKey"></a>

> Code samples

```bash
curl http://localhost:8108/keys/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /keys/{keyId}`

<h3 id="delete-an-api-key-given-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyId|path|integer(int64)|true|The ID of the key to delete|

> Example responses

> 200 Response

```json
{
  "id": 0
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-an-api-key-given-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The key referenced by the ID|[ApiKeyDeleteResponse](#schemaapikeydeleteresponse)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|404|Not Found|Key not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-debug">debug</h1>

Debugging information

## Print debugging information

<a id="opIddebug"></a>

> Code samples

```bash
curl http://localhost:8108/debug \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /debug`

Print debugging information

> Example responses

> 200 Response

```json
{
  "version": "string"
}
```

<h3 id="print-debugging-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Debugging information|Inline|

<h3 id="print-debugging-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-operations">operations</h1>

Manage Typesense cluster

<a href="https://typesense.org/docs/28.0/api/cluster-operations.html">Find out more</a>

## Get the status of in-progress schema change operations

<a id="opIdgetSchemaChanges"></a>

> Code samples

```bash
curl http://localhost:8108/operations/schema_changes \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /operations/schema_changes`

Returns the status of any ongoing schema change operations. If no schema changes are in progress, returns an empty response.

> Example responses

> 200 Response

```json
[
  {
    "collection": "string",
    "validated_docs": 0,
    "altered_docs": 0
  }
]
```

<h3 id="get-the-status-of-in-progress-schema-change-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of schema changes in progress|Inline|

<h3 id="get-the-status-of-in-progress-schema-change-operations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SchemaChangeStatus](#schemaschemachangestatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Creates a point-in-time snapshot of a Typesense node's state and data in the specified directory.

<a id="opIdtakeSnapshot"></a>

> Code samples

```bash
curl 'http://localhost:8108/operations/snapshot?snapshot_path=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`POST /operations/snapshot`

Creates a point-in-time snapshot of a Typesense node's state and data in the specified directory. You can then backup the snapshot directory that gets created and later restore it as a data directory, as needed.

<h3 id="creates-a-point-in-time-snapshot-of-a-typesense-nodes-state-and-data-in-the-specified-directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshot_path|query|string|true|The directory on the server where the snapshot should be saved.|

> Example responses

> 201 Response

```json
{
  "success": true
}
```

<h3 id="creates-a-point-in-time-snapshot-of-a-typesense-nodes-state-and-data-in-the-specified-directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Snapshot is created.|[SuccessStatus](#schemasuccessstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Triggers a follower node to initiate the raft voting process, which triggers leader re-election.

<a id="opIdvote"></a>

> Code samples

```bash
curl http://localhost:8108/operations/vote \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`POST /operations/vote`

Triggers a follower node to initiate the raft voting process, which triggers leader re-election. The follower node that you run this operation against will become the new leader, once this command succeeds.

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="triggers-a-follower-node-to-initiate-the-raft-voting-process-which-triggers-leader-re-election-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Re-election is performed.|[SuccessStatus](#schemasuccessstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Clear the cached responses of search requests in the LRU cache.

<a id="opIdclearCache"></a>

> Code samples

```bash
curl http://localhost:8108/operations/cache/clear \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`POST /operations/cache/clear`

Clear the cached responses of search requests that are sent with `use_cache` parameter in the LRU cache.

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="clear-the-cached-responses-of-search-requests-in-the-lru-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Clear cache succeeded.|[SuccessStatus](#schemasuccessstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Compacting the on-disk database

<a id="opIdcompactDb"></a>

> Code samples

```bash
curl http://localhost:8108/operations/db/compact \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`POST /operations/db/compact`

Typesense uses RocksDB to store your documents on the disk. If you do frequent writes or updates, you could benefit from running a compaction of the underlying RocksDB database. This could reduce the size of the database and decrease read latency. While the database will not block during this operation, we recommend running it during off-peak hours.

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="compacting-the-on-disk-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Compacting the on-disk database succeeded.|[SuccessStatus](#schemasuccessstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Toggle Slow Request Log

<a id="opIdtoggleSlowRequestLog"></a>

> Code samples

```bash
curl http://localhost:8108/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '"{\"log-slow-requests-time-ms\": 2000}\n"'
```

`POST /config`

Enable logging of requests that take over a defined threshold of time. Default is `-1` which disables slow request logging. Slow requests are logged to the primary log file, with the prefix SLOW REQUEST.

> Body parameter

```json
"{\"log-slow-requests-time-ms\": 2000}\n"
```

<h3 id="toggle-slow-request-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» log-slow-requests-time-ms|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="toggle-slow-request-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Toggle Slow Request Log database succeeded.|[SuccessStatus](#schemasuccessstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Get current RAM, CPU, Disk &amp; Network usage metrics.

<a id="opIdretrieveMetrics"></a>

> Code samples

```bash
curl http://localhost:8108/metrics.json \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /metrics.json`

Retrieve the metrics.

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-current-ram-cpu-disk-network-usage-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics fetched.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Get stats about API endpoints.

<a id="opIdretrieveAPIStats"></a>

> Code samples

```bash
curl http://localhost:8108/stats.json \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /stats.json`

Retrieve the stats about API endpoints.

> Example responses

> 200 Response

```json
{
  "delete_latency_ms": 0,
  "delete_requests_per_second": 0,
  "import_latency_ms": 0,
  "import_requests_per_second": 0,
  "latency_ms": {},
  "overloaded_requests_per_second": 0,
  "pending_write_batches": 0,
  "requests_per_second": {},
  "search_latency_ms": 0,
  "search_requests_per_second": 0,
  "total_requests_per_second": 0,
  "write_latency_ms": 0,
  "write_requests_per_second": 0
}
```

<h3 id="get-stats-about-api-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stats fetched.|[APIStatsResponse](#schemaapistatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-stopwords">stopwords</h1>

Manage stopwords sets

<a href="https://typesense.org/docs/28.0/api/stopwords.html">Find out more</a>

## Retrieves all stopwords sets.

<a id="opIdretrieveStopwordsSets"></a>

> Code samples

```bash
curl http://localhost:8108/stopwords \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /stopwords`

Retrieve the details of all stopwords sets

> Example responses

> 200 Response

```json
"{\"stopwords\": [{\"id\": \"countries\", \"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}]}\n"
```

<h3 id="retrieves-all-stopwords-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stopwords sets fetched.|[StopwordsSetsRetrieveAllSchema](#schemastopwordssetsretrieveallschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieves a stopwords set.

<a id="opIdretrieveStopwordsSet"></a>

> Code samples

```bash
curl http://localhost:8108/stopwords/countries \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /stopwords/{setId}`

Retrieve the details of a stopwords set, given it's name.

<h3 id="retrieves-a-stopwords-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|setId|path|string|true|The ID of the stopwords set to retrieve.|

> Example responses

> 200 Response

```json
"{\"stopwords\": {\"id\": \"countries\", \"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}}\n"
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieves-a-stopwords-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stopwords set fetched.|[StopwordsSetRetrieveSchema](#schemastopwordssetretrieveschema)|
|404|Not Found|Stopwords set not found.|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Upserts a stopwords set.

<a id="opIdupsertStopwordsSet"></a>

> Code samples

```bash
curl http://localhost:8108/stopwords/countries \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '"{\"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}\n"'
```

`PUT /stopwords/{setId}`

When an analytics rule is created, we give it a name and describe the type, the source collections and the destination collection.

> Body parameter

```json
"{\"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}\n"
```

<h3 id="upserts-a-stopwords-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|setId|path|string|true|The ID of the stopwords set to upsert.|
|body|body|[StopwordsSetUpsertSchema](#schemastopwordssetupsertschema)|true|The stopwords set to upsert.|
|» stopwords|body|[string]|true|none|
|» locale|body|string|false|none|

> Example responses

> 200 Response

```json
"{\"id\": \"countries\", \"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}\n"
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="upserts-a-stopwords-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stopwords set successfully upserted.|[StopwordsSetSchema](#schemastopwordssetschema)|
|400|Bad Request|Bad request, see error message for details.|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a stopwords set.

<a id="opIddeleteStopwordsSet"></a>

> Code samples

```bash
curl http://localhost:8108/stopwords/countries \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /stopwords/{setId}`

Permanently deletes a stopwords set, given it's name.

<h3 id="delete-a-stopwords-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|setId|path|string|true|The ID of the stopwords set to delete.|

> Example responses

> 200 Response

```json
"{\"id\": \"countries\"}\n"
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-stopwords-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stopwords set rule deleted.|Inline|
|404|Not Found|Stopwords set not found.|[ApiResponse](#schemaapiresponse)|

<h3 id="delete-a-stopwords-set-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-presets">presets</h1>

Store and reference search parameters

<a href="https://typesense.org/docs/28.0/api/search.html#presets">Find out more</a>

## Retrieves all presets.

<a id="opIdretrieveAllPresets"></a>

> Code samples

```bash
curl http://localhost:8108/presets \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /presets`

Retrieve the details of all presets

> Example responses

> 200 Response

```json
{
  "presets": [
    {
      "value": {
        "q": "string",
        "query_by": "string",
        "validate_field_names": true,
        "nl_query": true,
        "nl_model_id": "string",
        "query_by_weights": "string",
        "text_match_type": "string",
        "prefix": "string",
        "infix": "string",
        "max_extra_prefix": 0,
        "max_extra_suffix": 0,
        "filter_by": "num_employees:>100 && country: [USA, UK]",
        "enable_lazy_filter": true,
        "max_filter_by_candidates": 0,
        "sort_by": "num_employees:desc",
        "facet_by": "string",
        "max_facet_values": 0,
        "facet_query": "string",
        "facet_query_num_typos": 0,
        "num_typos": "string",
        "page": 0,
        "per_page": 0,
        "limit": 0,
        "offset": 0,
        "group_by": "string",
        "group_limit": 0,
        "group_missing_values": true,
        "group_max_candidates": 0,
        "include_fields": "string",
        "exclude_fields": "string",
        "highlight_full_fields": "string",
        "highlight_affix_num_tokens": 0,
        "highlight_start_tag": "string",
        "highlight_end_tag": "string",
        "enable_highlight_v1": true,
        "enable_analytics": true,
        "snippet_threshold": 0,
        "synonym_sets": "synonym_set_1,synonym_set_2",
        "drop_tokens_threshold": 0,
        "drop_tokens_mode": "right_to_left",
        "typo_tokens_threshold": 0,
        "enable_typos_for_alpha_numerical_tokens": true,
        "filter_curated_hits": true,
        "enable_synonyms": true,
        "synonym_prefix": true,
        "demote_synonym_match": true,
        "synonym_num_typos": 0,
        "pinned_hits": "string",
        "hidden_hits": "string",
        "curation_tags": "string",
        "highlight_fields": "string",
        "rerank_hybrid_matches": false,
        "split_join_tokens": "string",
        "pre_segmented_query": true,
        "preset": "string",
        "enable_curations": false,
        "prioritize_exact_match": true,
        "max_candidates": 0,
        "prioritize_token_position": false,
        "prioritize_num_matching_fields": true,
        "enable_typos_for_numerical_tokens": true,
        "exhaustive_search": true,
        "search_cutoff_ms": 0,
        "limit_hits": 0,
        "use_cache": true,
        "cache_ttl": 0,
        "min_len_1typo": 0,
        "min_len_2typo": 0,
        "vector_query": "string",
        "remote_embedding_timeout_ms": 0,
        "remote_embedding_num_tries": 0,
        "facet_strategy": "string",
        "stopwords": "string",
        "facet_return_parent": "string",
        "facet_sample_percent": 0,
        "facet_sample_threshold": 0,
        "facet_sample_slope": 0,
        "voice_query": "string",
        "conversation": true,
        "conversation_model_id": "string",
        "conversation_id": "string"
      },
      "name": "string"
    }
  ]
}
```

<h3 id="retrieves-all-presets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Presets fetched.|[PresetsRetrieveSchema](#schemapresetsretrieveschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieves a preset.

<a id="opIdretrievePreset"></a>

> Code samples

```bash
curl http://localhost:8108/presets/listing_view \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /presets/{presetId}`

Retrieve the details of a preset, given it's name.

<h3 id="retrieves-a-preset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|presetId|path|string|true|The ID of the preset to retrieve.|

> Example responses

> 200 Response

```json
{
  "value": {
    "q": "string",
    "query_by": "string",
    "validate_field_names": true,
    "nl_query": true,
    "nl_model_id": "string",
    "query_by_weights": "string",
    "text_match_type": "string",
    "prefix": "string",
    "infix": "string",
    "max_extra_prefix": 0,
    "max_extra_suffix": 0,
    "filter_by": "num_employees:>100 && country: [USA, UK]",
    "enable_lazy_filter": true,
    "max_filter_by_candidates": 0,
    "sort_by": "num_employees:desc",
    "facet_by": "string",
    "max_facet_values": 0,
    "facet_query": "string",
    "facet_query_num_typos": 0,
    "num_typos": "string",
    "page": 0,
    "per_page": 0,
    "limit": 0,
    "offset": 0,
    "group_by": "string",
    "group_limit": 0,
    "group_missing_values": true,
    "group_max_candidates": 0,
    "include_fields": "string",
    "exclude_fields": "string",
    "highlight_full_fields": "string",
    "highlight_affix_num_tokens": 0,
    "highlight_start_tag": "string",
    "highlight_end_tag": "string",
    "enable_highlight_v1": true,
    "enable_analytics": true,
    "snippet_threshold": 0,
    "synonym_sets": "synonym_set_1,synonym_set_2",
    "drop_tokens_threshold": 0,
    "drop_tokens_mode": "right_to_left",
    "typo_tokens_threshold": 0,
    "enable_typos_for_alpha_numerical_tokens": true,
    "filter_curated_hits": true,
    "enable_synonyms": true,
    "synonym_prefix": true,
    "demote_synonym_match": true,
    "synonym_num_typos": 0,
    "pinned_hits": "string",
    "hidden_hits": "string",
    "curation_tags": "string",
    "highlight_fields": "string",
    "rerank_hybrid_matches": false,
    "split_join_tokens": "string",
    "pre_segmented_query": true,
    "preset": "string",
    "enable_curations": false,
    "prioritize_exact_match": true,
    "max_candidates": 0,
    "prioritize_token_position": false,
    "prioritize_num_matching_fields": true,
    "enable_typos_for_numerical_tokens": true,
    "exhaustive_search": true,
    "search_cutoff_ms": 0,
    "limit_hits": 0,
    "use_cache": true,
    "cache_ttl": 0,
    "min_len_1typo": 0,
    "min_len_2typo": 0,
    "vector_query": "string",
    "remote_embedding_timeout_ms": 0,
    "remote_embedding_num_tries": 0,
    "facet_strategy": "string",
    "stopwords": "string",
    "facet_return_parent": "string",
    "facet_sample_percent": 0,
    "facet_sample_threshold": 0,
    "facet_sample_slope": 0,
    "voice_query": "string",
    "conversation": true,
    "conversation_model_id": "string",
    "conversation_id": "string"
  },
  "name": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieves-a-preset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preset fetched.|[PresetSchema](#schemapresetschema)|
|404|Not Found|Preset not found.|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Upserts a preset.

<a id="opIdupsertPreset"></a>

> Code samples

```bash
curl http://localhost:8108/presets/listing_view \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "value": {
      "q": "string",
      "query_by": "string",
      "validate_field_names": true,
      "nl_query": true,
      "nl_model_id": "string",
      "query_by_weights": "string",
      "text_match_type": "string",
      "prefix": "string",
      "infix": "string",
      "max_extra_prefix": 0,
      "max_extra_suffix": 0,
      "filter_by": "num_employees:>100 && country: [USA, UK]",
      "enable_lazy_filter": true,
      "max_filter_by_candidates": 0,
      "sort_by": "num_employees:desc",
      "facet_by": "string",
      "max_facet_values": 0,
      "facet_query": "string",
      "facet_query_num_typos": 0,
      "num_typos": "string",
      "page": 0,
      "per_page": 0,
      "limit": 0,
      "offset": 0,
      "group_by": "string",
      "group_limit": 0,
      "group_missing_values": true,
      "group_max_candidates": 0,
      "include_fields": "string",
      "exclude_fields": "string",
      "highlight_full_fields": "string",
      "highlight_affix_num_tokens": 0,
      "highlight_start_tag": "string",
      "highlight_end_tag": "string",
      "enable_highlight_v1": true,
      "enable_analytics": true,
      "snippet_threshold": 0,
      "synonym_sets": "synonym_set_1,synonym_set_2",
      "drop_tokens_threshold": 0,
      "drop_tokens_mode": "right_to_left",
      "typo_tokens_threshold": 0,
      "enable_typos_for_alpha_numerical_tokens": true,
      "filter_curated_hits": true,
      "enable_synonyms": true,
      "synonym_prefix": true,
      "demote_synonym_match": true,
      "synonym_num_typos": 0,
      "pinned_hits": "string",
      "hidden_hits": "string",
      "curation_tags": "string",
      "highlight_fields": "string",
      "rerank_hybrid_matches": false,
      "split_join_tokens": "string",
      "pre_segmented_query": true,
      "preset": "string",
      "enable_curations": false,
      "prioritize_exact_match": true,
      "max_candidates": 0,
      "prioritize_token_position": false,
      "prioritize_num_matching_fields": true,
      "enable_typos_for_numerical_tokens": true,
      "exhaustive_search": true,
      "search_cutoff_ms": 0,
      "limit_hits": 0,
      "use_cache": true,
      "cache_ttl": 0,
      "min_len_1typo": 0,
      "min_len_2typo": 0,
      "vector_query": "string",
      "remote_embedding_timeout_ms": 0,
      "remote_embedding_num_tries": 0,
      "facet_strategy": "string",
      "stopwords": "string",
      "facet_return_parent": "string",
      "facet_sample_percent": 0,
      "facet_sample_threshold": 0,
      "facet_sample_slope": 0,
      "voice_query": "string",
      "conversation": true,
      "conversation_model_id": "string",
      "conversation_id": "string"
    }
  }'
```

`PUT /presets/{presetId}`

Create or update an existing preset.

> Body parameter

```json
{
  "value": {
    "q": "string",
    "query_by": "string",
    "validate_field_names": true,
    "nl_query": true,
    "nl_model_id": "string",
    "query_by_weights": "string",
    "text_match_type": "string",
    "prefix": "string",
    "infix": "string",
    "max_extra_prefix": 0,
    "max_extra_suffix": 0,
    "filter_by": "num_employees:>100 && country: [USA, UK]",
    "enable_lazy_filter": true,
    "max_filter_by_candidates": 0,
    "sort_by": "num_employees:desc",
    "facet_by": "string",
    "max_facet_values": 0,
    "facet_query": "string",
    "facet_query_num_typos": 0,
    "num_typos": "string",
    "page": 0,
    "per_page": 0,
    "limit": 0,
    "offset": 0,
    "group_by": "string",
    "group_limit": 0,
    "group_missing_values": true,
    "group_max_candidates": 0,
    "include_fields": "string",
    "exclude_fields": "string",
    "highlight_full_fields": "string",
    "highlight_affix_num_tokens": 0,
    "highlight_start_tag": "string",
    "highlight_end_tag": "string",
    "enable_highlight_v1": true,
    "enable_analytics": true,
    "snippet_threshold": 0,
    "synonym_sets": "synonym_set_1,synonym_set_2",
    "drop_tokens_threshold": 0,
    "drop_tokens_mode": "right_to_left",
    "typo_tokens_threshold": 0,
    "enable_typos_for_alpha_numerical_tokens": true,
    "filter_curated_hits": true,
    "enable_synonyms": true,
    "synonym_prefix": true,
    "demote_synonym_match": true,
    "synonym_num_typos": 0,
    "pinned_hits": "string",
    "hidden_hits": "string",
    "curation_tags": "string",
    "highlight_fields": "string",
    "rerank_hybrid_matches": false,
    "split_join_tokens": "string",
    "pre_segmented_query": true,
    "preset": "string",
    "enable_curations": false,
    "prioritize_exact_match": true,
    "max_candidates": 0,
    "prioritize_token_position": false,
    "prioritize_num_matching_fields": true,
    "enable_typos_for_numerical_tokens": true,
    "exhaustive_search": true,
    "search_cutoff_ms": 0,
    "limit_hits": 0,
    "use_cache": true,
    "cache_ttl": 0,
    "min_len_1typo": 0,
    "min_len_2typo": 0,
    "vector_query": "string",
    "remote_embedding_timeout_ms": 0,
    "remote_embedding_num_tries": 0,
    "facet_strategy": "string",
    "stopwords": "string",
    "facet_return_parent": "string",
    "facet_sample_percent": 0,
    "facet_sample_threshold": 0,
    "facet_sample_slope": 0,
    "voice_query": "string",
    "conversation": true,
    "conversation_model_id": "string",
    "conversation_id": "string"
  }
}
```

<h3 id="upserts-a-preset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|presetId|path|string|true|The name of the preset set to upsert.|
|body|body|[PresetUpsertSchema](#schemapresetupsertschema)|true|The stopwords set to upsert.|
|» value|body|[SearchParameters](#schemasearchparameters) \| [MultiSearchSearchesParameter](#schemamultisearchsearchesparameter)|true|none|
|» » *oneOf*|body|[SearchParameters](#schemasearchparameters)|false|none|
|» » *oneOf*|body|[MultiSearchSearchesParameter](#schemamultisearchsearchesparameter)|false|none|

> Example responses

> 200 Response

```json
{
  "value": {
    "q": "string",
    "query_by": "string",
    "validate_field_names": true,
    "nl_query": true,
    "nl_model_id": "string",
    "query_by_weights": "string",
    "text_match_type": "string",
    "prefix": "string",
    "infix": "string",
    "max_extra_prefix": 0,
    "max_extra_suffix": 0,
    "filter_by": "num_employees:>100 && country: [USA, UK]",
    "enable_lazy_filter": true,
    "max_filter_by_candidates": 0,
    "sort_by": "num_employees:desc",
    "facet_by": "string",
    "max_facet_values": 0,
    "facet_query": "string",
    "facet_query_num_typos": 0,
    "num_typos": "string",
    "page": 0,
    "per_page": 0,
    "limit": 0,
    "offset": 0,
    "group_by": "string",
    "group_limit": 0,
    "group_missing_values": true,
    "group_max_candidates": 0,
    "include_fields": "string",
    "exclude_fields": "string",
    "highlight_full_fields": "string",
    "highlight_affix_num_tokens": 0,
    "highlight_start_tag": "string",
    "highlight_end_tag": "string",
    "enable_highlight_v1": true,
    "enable_analytics": true,
    "snippet_threshold": 0,
    "synonym_sets": "synonym_set_1,synonym_set_2",
    "drop_tokens_threshold": 0,
    "drop_tokens_mode": "right_to_left",
    "typo_tokens_threshold": 0,
    "enable_typos_for_alpha_numerical_tokens": true,
    "filter_curated_hits": true,
    "enable_synonyms": true,
    "synonym_prefix": true,
    "demote_synonym_match": true,
    "synonym_num_typos": 0,
    "pinned_hits": "string",
    "hidden_hits": "string",
    "curation_tags": "string",
    "highlight_fields": "string",
    "rerank_hybrid_matches": false,
    "split_join_tokens": "string",
    "pre_segmented_query": true,
    "preset": "string",
    "enable_curations": false,
    "prioritize_exact_match": true,
    "max_candidates": 0,
    "prioritize_token_position": false,
    "prioritize_num_matching_fields": true,
    "enable_typos_for_numerical_tokens": true,
    "exhaustive_search": true,
    "search_cutoff_ms": 0,
    "limit_hits": 0,
    "use_cache": true,
    "cache_ttl": 0,
    "min_len_1typo": 0,
    "min_len_2typo": 0,
    "vector_query": "string",
    "remote_embedding_timeout_ms": 0,
    "remote_embedding_num_tries": 0,
    "facet_strategy": "string",
    "stopwords": "string",
    "facet_return_parent": "string",
    "facet_sample_percent": 0,
    "facet_sample_threshold": 0,
    "facet_sample_slope": 0,
    "voice_query": "string",
    "conversation": true,
    "conversation_model_id": "string",
    "conversation_id": "string"
  },
  "name": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="upserts-a-preset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preset successfully upserted.|[PresetSchema](#schemapresetschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a preset.

<a id="opIddeletePreset"></a>

> Code samples

```bash
curl http://localhost:8108/presets/listing_view \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /presets/{presetId}`

Permanently deletes a preset, given it's name.

<h3 id="delete-a-preset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|presetId|path|string|true|The ID of the preset to delete.|

> Example responses

> 200 Response

```json
{
  "name": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-preset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preset deleted.|[PresetDeleteSchema](#schemapresetdeleteschema)|
|404|Not Found|Preset not found.|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-conversations">conversations</h1>

Conversational Search (RAG)

<a href="https://typesense.org/docs/28.0/api/conversational-search-rag.html">Find out more</a>

## List all conversation models

<a id="opIdretrieveAllConversationModels"></a>

> Code samples

```bash
curl http://localhost:8108/conversations/models \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /conversations/models`

Retrieve all conversation models

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "model_name": "string",
    "api_key": "string",
    "history_collection": "string",
    "account_id": "string",
    "system_prompt": "string",
    "ttl": 0,
    "max_bytes": 0,
    "vllm_url": "string"
  }
]
```

<h3 id="list-all-conversation-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all conversation models|Inline|

<h3 id="list-all-conversation-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConversationModelSchema](#schemaconversationmodelschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create a conversation model

<a id="opIdcreateConversationModel"></a>

> Code samples

```bash
curl http://localhost:8108/conversations/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "id": "string",
    "model_name": "string",
    "api_key": "string",
    "history_collection": "string",
    "account_id": "string",
    "system_prompt": "string",
    "ttl": 0,
    "max_bytes": 0,
    "vllm_url": "string"
  }'
```

`POST /conversations/models`

Create a Conversation Model

> Body parameter

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

<h3 id="create-a-conversation-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConversationModelCreateSchema](#schemaconversationmodelcreateschema)|true|none|
|» id|body|string|false|An explicit id for the model, otherwise the API will return a response with an auto-generated conversation model id.|
|» model_name|body|string|true|Name of the LLM model offered by OpenAI, Cloudflare or vLLM|
|» api_key|body|string|false|The LLM service's API Key|
|» history_collection|body|string|true|Typesense collection that stores the historical conversations|
|» account_id|body|string|false|LLM service's account ID (only applicable for Cloudflare)|
|» system_prompt|body|string|false|The system prompt that contains special instructions to the LLM|
|» ttl|body|integer|false|Time interval in seconds after which the messages would be deleted. Default: 86400 (24 hours)<br>|
|» max_bytes|body|integer|true|The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.<br>|
|» vllm_url|body|string|false|URL of vLLM service|
|» model_name|body|string|true|Name of the LLM model offered by OpenAI, Cloudflare or vLLM|
|» max_bytes|body|integer|true|The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.<br>|
|» history_collection|body|string|true|Typesense collection that stores the historical conversations|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-conversation-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created Conversation Model|[ConversationModelSchema](#schemaconversationmodelschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a conversation model

<a id="opIdretrieveConversationModel"></a>

> Code samples

```bash
curl http://localhost:8108/conversations/models/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /conversations/models/{modelId}`

Retrieve a conversation model

<h3 id="retrieve-a-conversation-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|The id of the conversation model to retrieve|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

<h3 id="retrieve-a-conversation-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A conversation model|[ConversationModelSchema](#schemaconversationmodelschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Update a conversation model

<a id="opIdupdateConversationModel"></a>

> Code samples

```bash
curl http://localhost:8108/conversations/models/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "id": "string",
    "model_name": "string",
    "api_key": "string",
    "history_collection": "string",
    "account_id": "string",
    "system_prompt": "string",
    "ttl": 0,
    "max_bytes": 0,
    "vllm_url": "string"
  }'
```

`PUT /conversations/models/{modelId}`

Update a conversation model

> Body parameter

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

<h3 id="update-a-conversation-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|The id of the conversation model to update|
|body|body|[ConversationModelUpdateSchema](#schemaconversationmodelupdateschema)|true|none|
|» id|body|string|false|An explicit id for the model, otherwise the API will return a response with an auto-generated conversation model id.|
|» model_name|body|string|false|Name of the LLM model offered by OpenAI, Cloudflare or vLLM|
|» api_key|body|string|false|The LLM service's API Key|
|» history_collection|body|string|false|Typesense collection that stores the historical conversations|
|» account_id|body|string|false|LLM service's account ID (only applicable for Cloudflare)|
|» system_prompt|body|string|false|The system prompt that contains special instructions to the LLM|
|» ttl|body|integer|false|Time interval in seconds after which the messages would be deleted. Default: 86400 (24 hours)<br>|
|» max_bytes|body|integer|false|The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.<br>|
|» vllm_url|body|string|false|URL of vLLM service|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

<h3 id="update-a-conversation-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation model was successfully updated|[ConversationModelSchema](#schemaconversationmodelschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a conversation model

<a id="opIddeleteConversationModel"></a>

> Code samples

```bash
curl http://localhost:8108/conversations/models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /conversations/models/{modelId}`

Delete a conversation model

<h3 id="delete-a-conversation-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|The id of the conversation model to delete|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

<h3 id="delete-a-conversation-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation model was successfully deleted|[ConversationModelSchema](#schemaconversationmodelschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-synonyms">synonyms</h1>

Manage synonyms

<a href="https://typesense.org/docs/28.0/api/synonyms.html">Find out more</a>

## List all synonym sets

<a id="opIdretrieveSynonymSets"></a>

> Code samples

```bash
curl http://localhost:8108/synonym_sets \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /synonym_sets`

Retrieve all synonym sets

> Example responses

> 200 Response

```json
[
  {
    "items": [
      {
        "id": "string",
        "synonyms": [
          "string"
        ],
        "root": "string",
        "locale": "string",
        "symbols_to_index": [
          "string"
        ]
      }
    ],
    "name": "string"
  }
]
```

<h3 id="list-all-synonym-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all synonym sets|Inline|

<h3 id="list-all-synonym-sets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SynonymSetSchema](#schemasynonymsetschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a synonym set

<a id="opIdretrieveSynonymSet"></a>

> Code samples

```bash
curl http://localhost:8108/synonym_sets/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /synonym_sets/{synonymSetName}`

Retrieve a specific synonym set by its name

<h3 id="retrieve-a-synonym-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|synonymSetName|path|string|true|The name of the synonym set to retrieve|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "synonyms": [
        "string"
      ],
      "root": "string",
      "locale": "string",
      "symbols_to_index": [
        "string"
      ]
    }
  ],
  "name": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-synonym-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Synonym set fetched|[SynonymSetSchema](#schemasynonymsetschema)|
|404|Not Found|Synonym set not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create or update a synonym set

<a id="opIdupsertSynonymSet"></a>

> Code samples

```bash
curl http://localhost:8108/synonym_sets/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "items": [
      {
        "id": "string",
        "synonyms": [
          "string"
        ],
        "root": "string",
        "locale": "string",
        "symbols_to_index": [
          "string"
        ]
      }
    ]
  }'
```

`PUT /synonym_sets/{synonymSetName}`

Create or update a synonym set with the given name

> Body parameter

```json
{
  "items": [
    {
      "id": "string",
      "synonyms": [
        "string"
      ],
      "root": "string",
      "locale": "string",
      "symbols_to_index": [
        "string"
      ]
    }
  ]
}
```

<h3 id="create-or-update-a-synonym-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|synonymSetName|path|string|true|The name of the synonym set to create/update|
|body|body|[SynonymSetCreateSchema](#schemasynonymsetcreateschema)|true|The synonym set to be created/updated|
|» items|body|[[SynonymItemSchema](#schemasynonymitemschema)]|true|Array of synonym items|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "synonyms": [
        "string"
      ],
      "root": "string",
      "locale": "string",
      "symbols_to_index": [
        "string"
      ]
    }
  ],
  "name": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="create-or-update-a-synonym-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Synonym set successfully created/updated|[SynonymSetSchema](#schemasynonymsetschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a synonym set

<a id="opIddeleteSynonymSet"></a>

> Code samples

```bash
curl http://localhost:8108/synonym_sets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /synonym_sets/{synonymSetName}`

Delete a specific synonym set by its name

<h3 id="delete-a-synonym-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|synonymSetName|path|string|true|The name of the synonym set to delete|

> Example responses

> 200 Response

```json
{
  "name": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-synonym-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Synonym set successfully deleted|[SynonymSetDeleteSchema](#schemasynonymsetdeleteschema)|
|404|Not Found|Synonym set not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## List items in a synonym set

<a id="opIdretrieveSynonymSetItems"></a>

> Code samples

```bash
curl http://localhost:8108/synonym_sets/string/items \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /synonym_sets/{synonymSetName}/items`

Retrieve all synonym items in a set

<h3 id="list-items-in-a-synonym-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|synonymSetName|path|string|true|The name of the synonym set to retrieve items for|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "synonyms": [
      "string"
    ],
    "root": "string",
    "locale": "string",
    "symbols_to_index": [
      "string"
    ]
  }
]
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="list-items-in-a-synonym-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of synonym items|Inline|
|404|Not Found|Synonym set not found|[ApiResponse](#schemaapiresponse)|

<h3 id="list-items-in-a-synonym-set-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SynonymItemSchema](#schemasynonymitemschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a synonym set item

<a id="opIdretrieveSynonymSetItem"></a>

> Code samples

```bash
curl http://localhost:8108/synonym_sets/string/items/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /synonym_sets/{synonymSetName}/items/{itemId}`

Retrieve a specific synonym item by its id

<h3 id="retrieve-a-synonym-set-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|synonymSetName|path|string|true|The name of the synonym set|
|itemId|path|string|true|The id of the synonym item to retrieve|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "synonyms": [
    "string"
  ],
  "root": "string",
  "locale": "string",
  "symbols_to_index": [
    "string"
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-synonym-set-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Synonym item fetched|[SynonymItemSchema](#schemasynonymitemschema)|
|404|Not Found|Synonym item not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create or update a synonym set item

<a id="opIdupsertSynonymSetItem"></a>

> Code samples

```bash
curl http://localhost:8108/synonym_sets/string/items/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "synonyms": [
      "string"
    ],
    "root": "string",
    "locale": "string",
    "symbols_to_index": [
      "string"
    ]
  }'
```

`PUT /synonym_sets/{synonymSetName}/items/{itemId}`

Create or update a synonym set item with the given id

> Body parameter

```json
{
  "synonyms": [
    "string"
  ],
  "root": "string",
  "locale": "string",
  "symbols_to_index": [
    "string"
  ]
}
```

<h3 id="create-or-update-a-synonym-set-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|synonymSetName|path|string|true|The name of the synonym set|
|itemId|path|string|true|The id of the synonym item to upsert|
|body|body|[SynonymItemUpsertSchema](#schemasynonymitemupsertschema)|true|The synonym item to be created/updated|
|» synonyms|body|[string]|true|Array of words that should be considered as synonyms|
|» root|body|string|false|For 1-way synonyms, indicates the root word that words in the synonyms parameter map to|
|» locale|body|string|false|Locale for the synonym, leave blank to use the standard tokenizer|
|» symbols_to_index|body|[string]|false|By default, special characters are dropped from synonyms. Use this attribute to specify which special characters should be indexed as is|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "synonyms": [
    "string"
  ],
  "root": "string",
  "locale": "string",
  "symbols_to_index": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="create-or-update-a-synonym-set-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Synonym item successfully created/updated|[SynonymItemSchema](#schemasynonymitemschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a synonym set item

<a id="opIddeleteSynonymSetItem"></a>

> Code samples

```bash
curl http://localhost:8108/synonym_sets/string/items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /synonym_sets/{synonymSetName}/items/{itemId}`

Delete a specific synonym item by its id

<h3 id="delete-a-synonym-set-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|synonymSetName|path|string|true|The name of the synonym set|
|itemId|path|string|true|The id of the synonym item to delete|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-synonym-set-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Synonym item successfully deleted|[SynonymItemDeleteSchema](#schemasynonymitemdeleteschema)|
|404|Not Found|Synonym item not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-curationsets">curation_sets</h1>

Manage curation sets

## List all curation sets

<a id="opIdretrieveCurationSets"></a>

> Code samples

```bash
curl http://localhost:8108/curation_sets \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /curation_sets`

Retrieve all curation sets

> Example responses

> 200 Response

```json
[
  {
    "items": [
      {
        "rule": {
          "tags": [
            "string"
          ],
          "query": "string",
          "match": "exact",
          "filter_by": "string"
        },
        "includes": [
          {
            "id": "string",
            "position": 0
          }
        ],
        "excludes": [
          {
            "id": "string"
          }
        ],
        "filter_by": "string",
        "remove_matched_tokens": true,
        "metadata": {},
        "sort_by": "string",
        "replace_query": "string",
        "filter_curated_hits": true,
        "effective_from_ts": 0,
        "effective_to_ts": 0,
        "stop_processing": true,
        "id": "string"
      }
    ],
    "description": "string",
    "name": "string"
  }
]
```

<h3 id="list-all-curation-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all curation sets|Inline|

<h3 id="list-all-curation-sets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CurationSetSchema](#schemacurationsetschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a curation set

<a id="opIdretrieveCurationSet"></a>

> Code samples

```bash
curl http://localhost:8108/curation_sets/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /curation_sets/{curationSetName}`

Retrieve a specific curation set by its name

<h3 id="retrieve-a-curation-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curationSetName|path|string|true|The name of the curation set to retrieve|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "rule": {
        "tags": [
          "string"
        ],
        "query": "string",
        "match": "exact",
        "filter_by": "string"
      },
      "includes": [
        {
          "id": "string",
          "position": 0
        }
      ],
      "excludes": [
        {
          "id": "string"
        }
      ],
      "filter_by": "string",
      "remove_matched_tokens": true,
      "metadata": {},
      "sort_by": "string",
      "replace_query": "string",
      "filter_curated_hits": true,
      "effective_from_ts": 0,
      "effective_to_ts": 0,
      "stop_processing": true,
      "id": "string"
    }
  ],
  "description": "string",
  "name": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-curation-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Curation set fetched|[CurationSetSchema](#schemacurationsetschema)|
|404|Not Found|Curation set not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create or update a curation set

<a id="opIdupsertCurationSet"></a>

> Code samples

```bash
curl http://localhost:8108/curation_sets/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "items": [
      {
        "rule": {
          "tags": [
            "string"
          ],
          "query": "string",
          "match": "exact",
          "filter_by": "string"
        },
        "includes": [
          {
            "id": "string",
            "position": 0
          }
        ],
        "excludes": [
          {
            "id": "string"
          }
        ],
        "filter_by": "string",
        "remove_matched_tokens": true,
        "metadata": {},
        "sort_by": "string",
        "replace_query": "string",
        "filter_curated_hits": true,
        "effective_from_ts": 0,
        "effective_to_ts": 0,
        "stop_processing": true,
        "id": "string"
      }
    ],
    "description": "string"
  }'
```

`PUT /curation_sets/{curationSetName}`

Create or update a curation set with the given name

> Body parameter

```json
{
  "items": [
    {
      "rule": {
        "tags": [
          "string"
        ],
        "query": "string",
        "match": "exact",
        "filter_by": "string"
      },
      "includes": [
        {
          "id": "string",
          "position": 0
        }
      ],
      "excludes": [
        {
          "id": "string"
        }
      ],
      "filter_by": "string",
      "remove_matched_tokens": true,
      "metadata": {},
      "sort_by": "string",
      "replace_query": "string",
      "filter_curated_hits": true,
      "effective_from_ts": 0,
      "effective_to_ts": 0,
      "stop_processing": true,
      "id": "string"
    }
  ],
  "description": "string"
}
```

<h3 id="create-or-update-a-curation-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curationSetName|path|string|true|The name of the curation set to create/update|
|body|body|[CurationSetCreateSchema](#schemacurationsetcreateschema)|true|The curation set to be created/updated|
|» items|body|[[CurationItemCreateSchema](#schemacurationitemcreateschema)]|true|Array of curation items|
|» description|body|string|false|Optional description for the curation set|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "rule": {
        "tags": [
          "string"
        ],
        "query": "string",
        "match": "exact",
        "filter_by": "string"
      },
      "includes": [
        {
          "id": "string",
          "position": 0
        }
      ],
      "excludes": [
        {
          "id": "string"
        }
      ],
      "filter_by": "string",
      "remove_matched_tokens": true,
      "metadata": {},
      "sort_by": "string",
      "replace_query": "string",
      "filter_curated_hits": true,
      "effective_from_ts": 0,
      "effective_to_ts": 0,
      "stop_processing": true,
      "id": "string"
    }
  ],
  "description": "string",
  "name": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="create-or-update-a-curation-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Curation set successfully created/updated|[CurationSetSchema](#schemacurationsetschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a curation set

<a id="opIddeleteCurationSet"></a>

> Code samples

```bash
curl http://localhost:8108/curation_sets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /curation_sets/{curationSetName}`

Delete a specific curation set by its name

<h3 id="delete-a-curation-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curationSetName|path|string|true|The name of the curation set to delete|

> Example responses

> 200 Response

```json
{
  "name": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-curation-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Curation set successfully deleted|[CurationSetDeleteSchema](#schemacurationsetdeleteschema)|
|404|Not Found|Curation set not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## List items in a curation set

<a id="opIdretrieveCurationSetItems"></a>

> Code samples

```bash
curl http://localhost:8108/curation_sets/string/items \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /curation_sets/{curationSetName}/items`

Retrieve all curation items in a set

<h3 id="list-items-in-a-curation-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curationSetName|path|string|true|The name of the curation set to retrieve items for|

> Example responses

> 200 Response

```json
[
  {
    "rule": {
      "tags": [
        "string"
      ],
      "query": "string",
      "match": "exact",
      "filter_by": "string"
    },
    "includes": [
      {
        "id": "string",
        "position": 0
      }
    ],
    "excludes": [
      {
        "id": "string"
      }
    ],
    "filter_by": "string",
    "remove_matched_tokens": true,
    "metadata": {},
    "sort_by": "string",
    "replace_query": "string",
    "filter_curated_hits": true,
    "effective_from_ts": 0,
    "effective_to_ts": 0,
    "stop_processing": true,
    "id": "string"
  }
]
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="list-items-in-a-curation-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of curation items|Inline|
|404|Not Found|Curation set not found|[ApiResponse](#schemaapiresponse)|

<h3 id="list-items-in-a-curation-set-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CurationItemSchema](#schemacurationitemschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a curation set item

<a id="opIdretrieveCurationSetItem"></a>

> Code samples

```bash
curl http://localhost:8108/curation_sets/string/items/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /curation_sets/{curationSetName}/items/{itemId}`

Retrieve a specific curation item by its id

<h3 id="retrieve-a-curation-set-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curationSetName|path|string|true|The name of the curation set|
|itemId|path|string|true|The id of the curation item to retrieve|

> Example responses

> 200 Response

```json
{
  "rule": {
    "tags": [
      "string"
    ],
    "query": "string",
    "match": "exact",
    "filter_by": "string"
  },
  "includes": [
    {
      "id": "string",
      "position": 0
    }
  ],
  "excludes": [
    {
      "id": "string"
    }
  ],
  "filter_by": "string",
  "remove_matched_tokens": true,
  "metadata": {},
  "sort_by": "string",
  "replace_query": "string",
  "filter_curated_hits": true,
  "effective_from_ts": 0,
  "effective_to_ts": 0,
  "stop_processing": true,
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-curation-set-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Curation item fetched|[CurationItemSchema](#schemacurationitemschema)|
|404|Not Found|Curation item not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create or update a curation set item

<a id="opIdupsertCurationSetItem"></a>

> Code samples

```bash
curl http://localhost:8108/curation_sets/string/items/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "rule": {
      "tags": [
        "string"
      ],
      "query": "string",
      "match": "exact",
      "filter_by": "string"
    },
    "includes": [
      {
        "id": "string",
        "position": 0
      }
    ],
    "excludes": [
      {
        "id": "string"
      }
    ],
    "filter_by": "string",
    "remove_matched_tokens": true,
    "metadata": {},
    "sort_by": "string",
    "replace_query": "string",
    "filter_curated_hits": true,
    "effective_from_ts": 0,
    "effective_to_ts": 0,
    "stop_processing": true,
    "id": "string"
  }'
```

`PUT /curation_sets/{curationSetName}/items/{itemId}`

Create or update a curation set item with the given id

> Body parameter

```json
{
  "rule": {
    "tags": [
      "string"
    ],
    "query": "string",
    "match": "exact",
    "filter_by": "string"
  },
  "includes": [
    {
      "id": "string",
      "position": 0
    }
  ],
  "excludes": [
    {
      "id": "string"
    }
  ],
  "filter_by": "string",
  "remove_matched_tokens": true,
  "metadata": {},
  "sort_by": "string",
  "replace_query": "string",
  "filter_curated_hits": true,
  "effective_from_ts": 0,
  "effective_to_ts": 0,
  "stop_processing": true,
  "id": "string"
}
```

<h3 id="create-or-update-a-curation-set-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curationSetName|path|string|true|The name of the curation set|
|itemId|path|string|true|The id of the curation item to upsert|
|body|body|[CurationItemCreateSchema](#schemacurationitemcreateschema)|true|The curation item to be created/updated|
|» rule|body|[CurationRule](#schemacurationrule)|true|none|
|» includes|body|[[CurationInclude](#schemacurationinclude)]|false|List of document `id`s that should be included in the search results with their corresponding `position`s.|
|» excludes|body|[[CurationExclude](#schemacurationexclude)]|false|List of document `id`s that should be excluded from the search results.|
|» filter_by|body|string|false|A filter by clause that is applied to any search query that matches the curation rule.<br>|
|» remove_matched_tokens|body|boolean|false|Indicates whether search query tokens that exist in the curation's rule should be removed from the search query.<br>|
|» metadata|body|object|false|Return a custom JSON object in the Search API response, when this rule is triggered. This can can be used to display a pre-defined message (eg: a promotion banner) on the front-end when a particular rule is triggered.<br>|
|» sort_by|body|string|false|A sort by clause that is applied to any search query that matches the curation rule.<br>|
|» replace_query|body|string|false|Replaces the current search query with this value, when the search query matches the curation rule.<br>|
|» filter_curated_hits|body|boolean|false|When set to true, the filter conditions of the query is applied to the curated records as well. Default: false.<br>|
|» effective_from_ts|body|integer|false|A Unix timestamp that indicates the date/time from which the curation will be active. You can use this to create rules that start applying from a future point in time.<br>|
|» effective_to_ts|body|integer|false|A Unix timestamp that indicates the date/time until which the curation will be active. You can use this to create rules that stop applying after a period of time.<br>|
|» stop_processing|body|boolean|false|When set to true, curation processing will stop at the first matching rule. When set to false curation processing will continue and multiple curation actions will be triggered in sequence. Curations are processed in the lexical sort order of their id field.<br>|
|» id|body|string|false|ID of the curation item|

> Example responses

> 200 Response

```json
{
  "rule": {
    "tags": [
      "string"
    ],
    "query": "string",
    "match": "exact",
    "filter_by": "string"
  },
  "includes": [
    {
      "id": "string",
      "position": 0
    }
  ],
  "excludes": [
    {
      "id": "string"
    }
  ],
  "filter_by": "string",
  "remove_matched_tokens": true,
  "metadata": {},
  "sort_by": "string",
  "replace_query": "string",
  "filter_curated_hits": true,
  "effective_from_ts": 0,
  "effective_to_ts": 0,
  "stop_processing": true,
  "id": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="create-or-update-a-curation-set-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Curation item successfully created/updated|[CurationItemSchema](#schemacurationitemschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a curation set item

<a id="opIddeleteCurationSetItem"></a>

> Code samples

```bash
curl http://localhost:8108/curation_sets/string/items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /curation_sets/{curationSetName}/items/{itemId}`

Delete a specific curation item by its id

<h3 id="delete-a-curation-set-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curationSetName|path|string|true|The name of the curation set|
|itemId|path|string|true|The id of the curation item to delete|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-curation-set-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Curation item successfully deleted|[CurationItemDeleteSchema](#schemacurationitemdeleteschema)|
|404|Not Found|Curation item not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-stemming">stemming</h1>

Manage stemming dictionaries

<a href="https://typesense.org/docs/28.0/api/stemming.html">Find out more</a>

## List all stemming dictionaries

<a id="opIdlistStemmingDictionaries"></a>

> Code samples

```bash
curl http://localhost:8108/stemming/dictionaries \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /stemming/dictionaries`

Retrieve a list of all available stemming dictionaries.

> Example responses

> 200 Response

```json
{
  "dictionaries": [
    "irregular-plurals",
    "company-terms"
  ]
}
```

<h3 id="list-all-stemming-dictionaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all dictionaries|Inline|

<h3 id="list-all-stemming-dictionaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dictionaries|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a stemming dictionary

<a id="opIdgetStemmingDictionary"></a>

> Code samples

```bash
curl http://localhost:8108/stemming/dictionaries/irregular-plurals \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /stemming/dictionaries/{dictionaryId}`

Fetch details of a specific stemming dictionary.

<h3 id="retrieve-a-stemming-dictionary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dictionaryId|path|string|true|The ID of the dictionary to retrieve|

> Example responses

> 200 Response

```json
{
  "id": "irregular-plurals",
  "words": [
    {
      "word": "people",
      "root": "person"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-stemming-dictionary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stemming dictionary details|[StemmingDictionary](#schemastemmingdictionary)|
|404|Not Found|Dictionary not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Import a stemming dictionary

<a id="opIdimportStemmingDictionary"></a>

> Code samples

```bash
curl 'http://localhost:8108/stemming/dictionaries/import?id=irregular-plurals' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '"{\"word\": \"people\", \"root\": \"person\"}\n{\"word\": \"children\", \"root\": \"child\"}\n"'
```

`POST /stemming/dictionaries/import`

Upload a JSONL file containing word mappings to create or update a stemming dictionary.

> Body parameter

```json
"{\"word\": \"people\", \"root\": \"person\"}\n{\"word\": \"children\", \"root\": \"child\"}\n"
```

<h3 id="import-a-stemming-dictionary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The ID to assign to the dictionary|
|body|body|string|true|The JSONL file containing word mappings|

> Example responses

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="import-a-stemming-dictionary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dictionary successfully imported|Inline|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-nlsearchmodels">nl_search_models</h1>

Manage NL search models

<a href="https://typesense.org/docs/29.0/api/natural-language-search.html">Find out more</a>

## List all NL search models

<a id="opIdretrieveAllNLSearchModels"></a>

> Code samples

```bash
curl http://localhost:8108/nl_search_models \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /nl_search_models`

Retrieve all NL search models.

> Example responses

> 200 Response

```json
[
  {
    "model_name": "string",
    "api_key": "string",
    "api_url": "string",
    "max_bytes": 0,
    "temperature": 0,
    "system_prompt": "string",
    "top_p": 0,
    "top_k": 0,
    "stop_sequences": [
      "string"
    ],
    "api_version": "string",
    "project_id": "string",
    "access_token": "string",
    "refresh_token": "string",
    "client_id": "string",
    "client_secret": "string",
    "region": "string",
    "max_output_tokens": 0,
    "account_id": "string",
    "id": "string"
  }
]
```

<h3 id="list-all-nl-search-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all NL search models|Inline|

<h3 id="list-all-nl-search-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NLSearchModelSchema](#schemanlsearchmodelschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Create a NL search model

<a id="opIdcreateNLSearchModel"></a>

> Code samples

```bash
curl http://localhost:8108/nl_search_models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "model_name": "string",
    "api_key": "string",
    "api_url": "string",
    "max_bytes": 0,
    "temperature": 0,
    "system_prompt": "string",
    "top_p": 0,
    "top_k": 0,
    "stop_sequences": [
      "string"
    ],
    "api_version": "string",
    "project_id": "string",
    "access_token": "string",
    "refresh_token": "string",
    "client_id": "string",
    "client_secret": "string",
    "region": "string",
    "max_output_tokens": 0,
    "account_id": "string",
    "id": "string"
  }'
```

`POST /nl_search_models`

Create a new NL search model.

> Body parameter

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string",
  "id": "string"
}
```

<h3 id="create-a-nl-search-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NLSearchModelCreateSchema](#schemanlsearchmodelcreateschema)|true|The NL search model to be created|
|» model_name|body|string|false|Name of the NL model to use|
|» api_key|body|string|false|API key for the NL model service|
|» api_url|body|string|false|Custom API URL for the NL model service|
|» max_bytes|body|integer|false|Maximum number of bytes to process|
|» temperature|body|number|false|Temperature parameter for the NL model|
|» system_prompt|body|string|false|System prompt for the NL model|
|» top_p|body|number|false|Top-p parameter for the NL model (Google-specific)|
|» top_k|body|integer|false|Top-k parameter for the NL model (Google-specific)|
|» stop_sequences|body|[string]|false|Stop sequences for the NL model (Google-specific)|
|» api_version|body|string|false|API version for the NL model service|
|» project_id|body|string|false|Project ID for GCP Vertex AI|
|» access_token|body|string|false|Access token for GCP Vertex AI|
|» refresh_token|body|string|false|Refresh token for GCP Vertex AI|
|» client_id|body|string|false|Client ID for GCP Vertex AI|
|» client_secret|body|string|false|Client secret for GCP Vertex AI|
|» region|body|string|false|Region for GCP Vertex AI|
|» max_output_tokens|body|integer|false|Maximum output tokens for GCP Vertex AI|
|» account_id|body|string|false|Account ID for Cloudflare-specific models|
|» id|body|string|false|Optional ID for the NL search model|

> Example responses

> 201 Response

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string",
  "id": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-nl-search-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|NL search model successfully created|[NLSearchModelSchema](#schemanlsearchmodelschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Retrieve a NL search model

<a id="opIdretrieveNLSearchModel"></a>

> Code samples

```bash
curl http://localhost:8108/nl_search_models/string \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /nl_search_models/{modelId}`

Retrieve a specific NL search model by its ID.

<h3 id="retrieve-a-nl-search-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|The ID of the NL search model to retrieve|

> Example responses

> 200 Response

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-nl-search-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NL search model fetched|[NLSearchModelSchema](#schemanlsearchmodelschema)|
|404|Not Found|NL search model not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Update a NL search model

<a id="opIdupdateNLSearchModel"></a>

> Code samples

```bash
curl http://localhost:8108/nl_search_models/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}" \
  -d '{
    "model_name": "string",
    "api_key": "string",
    "api_url": "string",
    "max_bytes": 0,
    "temperature": 0,
    "system_prompt": "string",
    "top_p": 0,
    "top_k": 0,
    "stop_sequences": [
      "string"
    ],
    "api_version": "string",
    "project_id": "string",
    "access_token": "string",
    "refresh_token": "string",
    "client_id": "string",
    "client_secret": "string",
    "region": "string",
    "max_output_tokens": 0,
    "account_id": "string",
    "id": "string"
  }'
```

`PUT /nl_search_models/{modelId}`

Update an existing NL search model.

> Body parameter

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string",
  "id": "string"
}
```

<h3 id="update-a-nl-search-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|The ID of the NL search model to update|
|body|body|[NLSearchModelCreateSchema](#schemanlsearchmodelcreateschema)|true|The NL search model fields to update|
|» model_name|body|string|false|Name of the NL model to use|
|» api_key|body|string|false|API key for the NL model service|
|» api_url|body|string|false|Custom API URL for the NL model service|
|» max_bytes|body|integer|false|Maximum number of bytes to process|
|» temperature|body|number|false|Temperature parameter for the NL model|
|» system_prompt|body|string|false|System prompt for the NL model|
|» top_p|body|number|false|Top-p parameter for the NL model (Google-specific)|
|» top_k|body|integer|false|Top-k parameter for the NL model (Google-specific)|
|» stop_sequences|body|[string]|false|Stop sequences for the NL model (Google-specific)|
|» api_version|body|string|false|API version for the NL model service|
|» project_id|body|string|false|Project ID for GCP Vertex AI|
|» access_token|body|string|false|Access token for GCP Vertex AI|
|» refresh_token|body|string|false|Refresh token for GCP Vertex AI|
|» client_id|body|string|false|Client ID for GCP Vertex AI|
|» client_secret|body|string|false|Client secret for GCP Vertex AI|
|» region|body|string|false|Region for GCP Vertex AI|
|» max_output_tokens|body|integer|false|Maximum output tokens for GCP Vertex AI|
|» account_id|body|string|false|Account ID for Cloudflare-specific models|
|» id|body|string|false|Optional ID for the NL search model|

> Example responses

> 200 Response

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string",
  "id": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="update-a-nl-search-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NL search model successfully updated|[NLSearchModelSchema](#schemanlsearchmodelschema)|
|400|Bad Request|Bad request, see error message for details|[ApiResponse](#schemaapiresponse)|
|404|Not Found|NL search model not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

## Delete a NL search model

<a id="opIddeleteNLSearchModel"></a>

> Code samples

```bash
curl http://localhost:8108/nl_search_models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`DELETE /nl_search_models/{modelId}`

Delete a specific NL search model by its ID.

<h3 id="delete-a-nl-search-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|The ID of the NL search model to delete|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-nl-search-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NL search model successfully deleted|[NLSearchModelDeleteSchema](#schemanlsearchmodeldeleteschema)|
|404|Not Found|NL search model not found|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

<h1 id="typesense-api-health">health</h1>

## Checks if Typesense server is ready to accept requests.

<a id="opIdhealth"></a>

> Code samples

```bash
curl http://localhost:8108/health \
  -H 'Accept: application/json' \
  -H "X-TYPESENSE-API-KEY: ${API_KEY}"
```

`GET /health`

Checks if Typesense server is ready to accept requests.

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

<h3 id="checks-if-typesense-server-is-ready-to-accept-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search service is ready for requests.|[HealthStatus](#schemahealthstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_header
</aside>

# Schemas

<h2 id="tocS_CollectionSchema">CollectionSchema</h2>
<!-- backwards compatibility -->
<a id="schemacollectionschema"></a>
<a id="schema_CollectionSchema"></a>
<a id="tocScollectionschema"></a>
<a id="tocscollectionschema"></a>

```json
{
  "name": "companies",
  "fields": [
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "default_sorting_field": "num_employees",
  "token_separators": [],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "enable_nested_fields": true,
  "symbols_to_index": [],
  "voice_query_model": {
    "model_name": "ts/whisper/base.en"
  },
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the collection|
|fields|[[Field](#schemafield)]|true|none|A list of fields for querying, filtering and faceting|
|default_sorting_field|string|false|none|The name of an int32 / float field that determines the order in which the search results are ranked when a sort_by clause is not provided during searching. This field must indicate some kind of popularity.|
|token_separators|[string]|false|none|List of symbols or special characters to be used for splitting the text into individual words in addition to space and new-line characters.<br>|
|synonym_sets|[string]|false|none|List of synonym set names to associate with this collection|
|enable_nested_fields|boolean|false|none|Enables experimental support at a collection level for nested object or object array fields. This field is only available if the Typesense server is version `0.24.0.rcn34` or later.|
|symbols_to_index|[string]|false|none|List of symbols or special characters to be indexed.<br>|
|voice_query_model|[VoiceQueryModelCollectionConfig](#schemavoicequerymodelcollectionconfig)|false|none|Configuration for the voice query model<br>|
|metadata|object|false|none|Optional details about the collection, e.g., when it was created, who created it etc.<br>|

<h2 id="tocS_CollectionUpdateSchema">CollectionUpdateSchema</h2>
<!-- backwards compatibility -->
<a id="schemacollectionupdateschema"></a>
<a id="schema_CollectionUpdateSchema"></a>
<a id="tocScollectionupdateschema"></a>
<a id="tocscollectionupdateschema"></a>

```json
{
  "fields": [
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[Field](#schemafield)]|false|none|A list of fields for querying, filtering and faceting|
|synonym_sets|[string]|false|none|List of synonym set names to associate with this collection|
|metadata|object|false|none|Optional details about the collection, e.g., when it was created, who created it etc.<br>|

<h2 id="tocS_CollectionResponse">CollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponse"></a>
<a id="schema_CollectionResponse"></a>
<a id="tocScollectionresponse"></a>
<a id="tocscollectionresponse"></a>

```json
{
  "name": "companies",
  "fields": [
    {
      "name": "num_employees",
      "type": "int32",
      "facet": false
    },
    {
      "name": "company_name",
      "type": "string",
      "facet": false
    },
    {
      "name": "country",
      "type": "string",
      "facet": true
    }
  ],
  "default_sorting_field": "num_employees",
  "token_separators": [],
  "synonym_sets": [
    "synonym_set_1"
  ],
  "enable_nested_fields": true,
  "symbols_to_index": [],
  "voice_query_model": {
    "model_name": "ts/whisper/base.en"
  },
  "metadata": {},
  "num_documents": 0,
  "created_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the collection|
|fields|[[Field](#schemafield)]|true|none|A list of fields for querying, filtering and faceting|
|default_sorting_field|string|false|none|The name of an int32 / float field that determines the order in which the search results are ranked when a sort_by clause is not provided during searching. This field must indicate some kind of popularity.|
|token_separators|[string]|false|none|List of symbols or special characters to be used for splitting the text into individual words in addition to space and new-line characters.<br>|
|synonym_sets|[string]|false|none|List of synonym set names to associate with this collection|
|enable_nested_fields|boolean|false|none|Enables experimental support at a collection level for nested object or object array fields. This field is only available if the Typesense server is version `0.24.0.rcn34` or later.|
|symbols_to_index|[string]|false|none|List of symbols or special characters to be indexed.<br>|
|voice_query_model|[VoiceQueryModelCollectionConfig](#schemavoicequerymodelcollectionconfig)|false|none|Configuration for the voice query model<br>|
|metadata|object|false|none|Optional details about the collection, e.g., when it was created, who created it etc.<br>|
|num_documents|integer(int64)|true|read-only|Number of documents in the collection|
|created_at|integer(int64)|true|read-only|Timestamp of when the collection was created (Unix epoch in seconds)|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "name": "company_name",
  "type": "string",
  "optional": true,
  "facet": false,
  "index": true,
  "locale": "el",
  "sort": true,
  "infix": true,
  "reference": "string",
  "async_reference": true,
  "num_dim": 256,
  "drop": true,
  "store": true,
  "vec_dist": "string",
  "range_index": true,
  "stem": true,
  "stem_dictionary": "irregular-plurals",
  "token_separators": [],
  "symbols_to_index": [],
  "embed": {
    "from": [
      "string"
    ],
    "model_config": {
      "model_name": "string",
      "api_key": "string",
      "url": "string",
      "access_token": "string",
      "refresh_token": "string",
      "client_id": "string",
      "client_secret": "string",
      "project_id": "string",
      "indexing_prefix": "string",
      "query_prefix": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|optional|boolean|false|none|none|
|facet|boolean|false|none|none|
|index|boolean|false|none|none|
|locale|string|false|none|none|
|sort|boolean|false|none|none|
|infix|boolean|false|none|none|
|reference|string|false|none|Name of a field in another collection that should be linked to this collection so that it can be joined during query.<br>|
|async_reference|boolean|false|none|Allow documents to be indexed successfully even when the referenced document doesn't exist yet.<br>|
|num_dim|integer|false|none|none|
|drop|boolean|false|none|none|
|store|boolean|false|none|When set to false, the field value will not be stored on disk. Default: true.<br>|
|vec_dist|string|false|none|The distance metric to be used for vector search. Default: `cosine`. You can also use `ip` for inner product.<br>|
|range_index|boolean|false|none|Enables an index optimized for range filtering on numerical fields (e.g. rating:>3.5). Default: false.<br>|
|stem|boolean|false|none|Values are stemmed before indexing in-memory. Default: false.<br>|
|stem_dictionary|string|false|none|Name of the stemming dictionary to use for this field|
|token_separators|[string]|false|none|List of symbols or special characters to be used for splitting the text into individual words in addition to space and new-line characters.<br>|
|symbols_to_index|[string]|false|none|List of symbols or special characters to be indexed.<br>|
|embed|object|false|none|none|

<h2 id="tocS_VoiceQueryModelCollectionConfig">VoiceQueryModelCollectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemavoicequerymodelcollectionconfig"></a>
<a id="schema_VoiceQueryModelCollectionConfig"></a>
<a id="tocSvoicequerymodelcollectionconfig"></a>
<a id="tocsvoicequerymodelcollectionconfig"></a>

```json
{
  "model_name": "ts/whisper/base.en"
}
```

Configuration for the voice query model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|false|none|none|

<h2 id="tocS_CollectionAliasSchema">CollectionAliasSchema</h2>
<!-- backwards compatibility -->
<a id="schemacollectionaliasschema"></a>
<a id="schema_CollectionAliasSchema"></a>
<a id="tocScollectionaliasschema"></a>
<a id="tocscollectionaliasschema"></a>

```json
{
  "collection_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_name|string|true|none|Name of the collection you wish to map the alias to|

<h2 id="tocS_CollectionAlias">CollectionAlias</h2>
<!-- backwards compatibility -->
<a id="schemacollectionalias"></a>
<a id="schema_CollectionAlias"></a>
<a id="tocScollectionalias"></a>
<a id="tocscollectionalias"></a>

```json
{
  "name": "string",
  "collection_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|read-only|Name of the collection alias|
|collection_name|string|true|none|Name of the collection the alias mapped to|

<h2 id="tocS_CollectionAliasesResponse">CollectionAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectionaliasesresponse"></a>
<a id="schema_CollectionAliasesResponse"></a>
<a id="tocScollectionaliasesresponse"></a>
<a id="tocscollectionaliasesresponse"></a>

```json
{
  "aliases": [
    {
      "name": "string",
      "collection_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[[CollectionAlias](#schemacollectionalias)]|true|none|none|

<h2 id="tocS_SearchResult">SearchResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchresult"></a>
<a id="schema_SearchResult"></a>
<a id="tocSsearchresult"></a>
<a id="tocssearchresult"></a>

```json
{
  "facet_counts": [
    {
      "counts": [
        {
          "count": 0,
          "highlighted": "string",
          "value": "string",
          "parent": {}
        }
      ],
      "field_name": "string",
      "sampled": true,
      "stats": {
        "max": 0,
        "min": 0,
        "sum": 0,
        "total_values": 0,
        "avg": 0
      }
    }
  ],
  "found": 0,
  "found_docs": 0,
  "search_time_ms": 0,
  "out_of": 0,
  "search_cutoff": true,
  "page": 0,
  "grouped_hits": [
    {
      "found": 0,
      "group_key": [
        null
      ],
      "hits": [
        {
          "highlights": {
            "company_name": {
              "field": "company_name",
              "snippet": "<mark>Stark</mark> Industries"
            }
          },
          "document": {
            "id": "124",
            "company_name": "Stark Industries",
            "num_employees": 5215,
            "country": "USA"
          },
          "text_match": 1234556
        }
      ]
    }
  ],
  "hits": [
    {
      "highlights": {
        "company_name": {
          "field": "company_name",
          "snippet": "<mark>Stark</mark> Industries"
        }
      },
      "document": {
        "id": "124",
        "company_name": "Stark Industries",
        "num_employees": 5215,
        "country": "USA"
      },
      "text_match": 1234556
    }
  ],
  "request_params": {
    "collection_name": "string",
    "first_q": "string",
    "q": "string",
    "per_page": 0,
    "voice_query": {
      "transcribed_query": "string"
    }
  },
  "conversation": {
    "answer": "string",
    "conversation_history": [
      {}
    ],
    "conversation_id": "string",
    "query": "string"
  },
  "union_request_params": [
    {
      "collection_name": "string",
      "first_q": "string",
      "q": "string",
      "per_page": 0,
      "voice_query": {
        "transcribed_query": "string"
      }
    }
  ],
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet_counts|[[FacetCounts](#schemafacetcounts)]|false|none|none|
|found|integer|false|none|The number of documents found|
|found_docs|integer|false|none|none|
|search_time_ms|integer|false|none|The number of milliseconds the search took|
|out_of|integer|false|none|The total number of documents in the collection|
|search_cutoff|boolean|false|none|Whether the search was cut off|
|page|integer|false|none|The search result page number|
|grouped_hits|[[SearchGroupedHit](#schemasearchgroupedhit)]|false|none|none|
|hits|[[SearchResultHit](#schemasearchresulthit)]|false|none|The documents that matched the search query|
|request_params|[SearchRequestParams](#schemasearchrequestparams)|false|none|none|
|conversation|[SearchResultConversation](#schemasearchresultconversation)|false|none|none|
|union_request_params|[[SearchRequestParams](#schemasearchrequestparams)]|false|none|Returned only for union query response.|
|metadata|object|false|none|Custom JSON object that can be returned in the search response|

<h2 id="tocS_SearchRequestParams">SearchRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemasearchrequestparams"></a>
<a id="schema_SearchRequestParams"></a>
<a id="tocSsearchrequestparams"></a>
<a id="tocssearchrequestparams"></a>

```json
{
  "collection_name": "string",
  "first_q": "string",
  "q": "string",
  "per_page": 0,
  "voice_query": {
    "transcribed_query": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_name|string|true|none|none|
|first_q|string|false|none|none|
|q|string|true|none|none|
|per_page|integer|true|none|none|
|voice_query|object|false|none|none|

<h2 id="tocS_SearchResultConversation">SearchResultConversation</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultconversation"></a>
<a id="schema_SearchResultConversation"></a>
<a id="tocSsearchresultconversation"></a>
<a id="tocssearchresultconversation"></a>

```json
{
  "answer": "string",
  "conversation_history": [
    {}
  ],
  "conversation_id": "string",
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|true|none|none|
|conversation_history|[object]|true|none|none|
|conversation_id|string|true|none|none|
|query|string|true|none|none|

<h2 id="tocS_SearchGroupedHit">SearchGroupedHit</h2>
<!-- backwards compatibility -->
<a id="schemasearchgroupedhit"></a>
<a id="schema_SearchGroupedHit"></a>
<a id="tocSsearchgroupedhit"></a>
<a id="tocssearchgroupedhit"></a>

```json
{
  "found": 0,
  "group_key": [
    null
  ],
  "hits": [
    {
      "highlights": {
        "company_name": {
          "field": "company_name",
          "snippet": "<mark>Stark</mark> Industries"
        }
      },
      "document": {
        "id": "124",
        "company_name": "Stark Industries",
        "num_employees": 5215,
        "country": "USA"
      },
      "text_match": 1234556
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|found|integer|false|none|none|
|group_key|[object]|true|none|none|
|hits|[[SearchResultHit](#schemasearchresulthit)]|true|none|The documents that matched the search query|

<h2 id="tocS_SearchResultHit">SearchResultHit</h2>
<!-- backwards compatibility -->
<a id="schemasearchresulthit"></a>
<a id="schema_SearchResultHit"></a>
<a id="tocSsearchresulthit"></a>
<a id="tocssearchresulthit"></a>

```json
{
  "highlights": {
    "company_name": {
      "field": "company_name",
      "snippet": "<mark>Stark</mark> Industries"
    }
  },
  "document": {
    "id": "124",
    "company_name": "Stark Industries",
    "num_employees": 5215,
    "country": "USA"
  },
  "text_match": 1234556
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highlights|[[SearchHighlight](#schemasearchhighlight)]|false|none|(Deprecated) Contains highlighted portions of the search fields|
|highlight|object|false|none|Highlighted version of the matching document|
|document|object|false|none|Can be any key-value pair|
|text_match|integer(int64)|false|none|none|
|text_match_info|object|false|none|none|
|geo_distance_meters|object|false|none|Can be any key-value pair|
|vector_distance|number(float)|false|none|Distance between the query vector and matching document's vector value|
|hybrid_search_info|object|false|none|Information about hybrid search scoring|
|search_index|integer|false|none|Returned only for union query response. Indicates the index of the query which this document matched to.|

<h2 id="tocS_SearchHighlight">SearchHighlight</h2>
<!-- backwards compatibility -->
<a id="schemasearchhighlight"></a>
<a id="schema_SearchHighlight"></a>
<a id="tocSsearchhighlight"></a>
<a id="tocssearchhighlight"></a>

```json
{
  "field": "company_name",
  "snippet": "<mark>Stark</mark> Industries",
  "snippets": [
    "<mark>Stark</mark> Industries",
    "<mark>Stark</mark> Corp"
  ],
  "value": "<mark>Stark</mark> Industries is a major supplier of space equipment.",
  "values": [
    "<mark>Stark</mark> Industries",
    "<mark>Stark</mark> Corp"
  ],
  "indices": 1,
  "matched_tokens": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|snippet|string|false|none|Present only for (non-array) string fields|
|snippets|[string]|false|none|Present only for (array) string[] fields|
|value|string|false|none|Full field value with highlighting, present only for (non-array) string fields|
|values|[string]|false|none|Full field value with highlighting, present only for (array) string[] fields|
|indices|[integer]|false|none|The indices property will be present only for string[] fields and will contain the corresponding indices of the snippets in the search field|
|matched_tokens|[object]|false|none|none|

<h2 id="tocS_SearchSynonymSchema">SearchSynonymSchema</h2>
<!-- backwards compatibility -->
<a id="schemasearchsynonymschema"></a>
<a id="schema_SearchSynonymSchema"></a>
<a id="tocSsearchsynonymschema"></a>
<a id="tocssearchsynonymschema"></a>

```json
{
  "root": "string",
  "synonyms": [
    "string"
  ],
  "locale": "string",
  "symbols_to_index": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|root|string|false|none|For 1-way synonyms, indicates the root word that words in the `synonyms` parameter map to.|
|synonyms|[string]|true|none|Array of words that should be considered as synonyms.|
|locale|string|false|none|Locale for the synonym, leave blank to use the standard tokenizer.|
|symbols_to_index|[string]|false|none|By default, special characters are dropped from synonyms. Use this attribute to specify which special characters should be indexed as is.|

<h2 id="tocS_SearchSynonym">SearchSynonym</h2>
<!-- backwards compatibility -->
<a id="schemasearchsynonym"></a>
<a id="schema_SearchSynonym"></a>
<a id="tocSsearchsynonym"></a>
<a id="tocssearchsynonym"></a>

```json
{
  "root": "string",
  "synonyms": [
    "string"
  ],
  "locale": "string",
  "symbols_to_index": [
    "string"
  ],
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|root|string|false|none|For 1-way synonyms, indicates the root word that words in the `synonyms` parameter map to.|
|synonyms|[string]|true|none|Array of words that should be considered as synonyms.|
|locale|string|false|none|Locale for the synonym, leave blank to use the standard tokenizer.|
|symbols_to_index|[string]|false|none|By default, special characters are dropped from synonyms. Use this attribute to specify which special characters should be indexed as is.|
|id|string|true|read-only|none|

<h2 id="tocS_SearchSynonymDeleteResponse">SearchSynonymDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchsynonymdeleteresponse"></a>
<a id="schema_SearchSynonymDeleteResponse"></a>
<a id="tocSsearchsynonymdeleteresponse"></a>
<a id="tocssearchsynonymdeleteresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The id of the synonym that was deleted|

<h2 id="tocS_SearchSynonymsResponse">SearchSynonymsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchsynonymsresponse"></a>
<a id="schema_SearchSynonymsResponse"></a>
<a id="tocSsearchsynonymsresponse"></a>
<a id="tocssearchsynonymsresponse"></a>

```json
{
  "synonyms": [
    {
      "root": "string",
      "synonyms": [
        "string"
      ],
      "locale": "string",
      "symbols_to_index": [
        "string"
      ],
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|synonyms|[[SearchSynonym](#schemasearchsynonym)]|true|none|none|

<h2 id="tocS_HealthStatus">HealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_HealthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
{
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|

<h2 id="tocS_SchemaChangeStatus">SchemaChangeStatus</h2>
<!-- backwards compatibility -->
<a id="schemaschemachangestatus"></a>
<a id="schema_SchemaChangeStatus"></a>
<a id="tocSschemachangestatus"></a>
<a id="tocsschemachangestatus"></a>

```json
{
  "collection": "string",
  "validated_docs": 0,
  "altered_docs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|false|none|Name of the collection being modified|
|validated_docs|integer|false|none|Number of documents that have been validated|
|altered_docs|integer|false|none|Number of documents that have been altered|

<h2 id="tocS_SuccessStatus">SuccessStatus</h2>
<!-- backwards compatibility -->
<a id="schemasuccessstatus"></a>
<a id="schema_SuccessStatus"></a>
<a id="tocSsuccessstatus"></a>
<a id="tocssuccessstatus"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_ApiKeySchema">ApiKeySchema</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyschema"></a>
<a id="schema_ApiKeySchema"></a>
<a id="tocSapikeyschema"></a>
<a id="tocsapikeyschema"></a>

```json
{
  "value": "string",
  "description": "string",
  "actions": [
    "string"
  ],
  "collections": [
    "string"
  ],
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|
|description|string|true|none|none|
|actions|[string]|true|none|none|
|collections|[string]|true|none|none|
|expires_at|integer(int64)|false|none|none|

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "value": "string",
  "description": "string",
  "actions": [
    "string"
  ],
  "collections": [
    "string"
  ],
  "expires_at": 0,
  "id": 0,
  "value_prefix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|
|description|string|true|none|none|
|actions|[string]|true|none|none|
|collections|[string]|true|none|none|
|expires_at|integer(int64)|false|none|none|
|id|integer(int64)|false|read-only|none|
|value_prefix|string|false|read-only|none|

<h2 id="tocS_ApiKeyDeleteResponse">ApiKeyDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeydeleteresponse"></a>
<a id="schema_ApiKeyDeleteResponse"></a>
<a id="tocSapikeydeleteresponse"></a>
<a id="tocsapikeydeleteresponse"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The id of the API key that was deleted|

<h2 id="tocS_ApiKeysResponse">ApiKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeysresponse"></a>
<a id="schema_ApiKeysResponse"></a>
<a id="tocSapikeysresponse"></a>
<a id="tocsapikeysresponse"></a>

```json
{
  "keys": [
    {
      "value": "string",
      "description": "string",
      "actions": [
        "string"
      ],
      "collections": [
        "string"
      ],
      "expires_at": 0,
      "id": 0,
      "value_prefix": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[ApiKey](#schemaapikey)]|true|none|none|

<h2 id="tocS_MultiSearchResult">MultiSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemamultisearchresult"></a>
<a id="schema_MultiSearchResult"></a>
<a id="tocSmultisearchresult"></a>
<a id="tocsmultisearchresult"></a>

```json
{
  "results": [
    {
      "facet_counts": [
        {
          "counts": [
            {
              "count": 0,
              "highlighted": "string",
              "value": "string",
              "parent": {}
            }
          ],
          "field_name": "string",
          "sampled": true,
          "stats": {
            "max": 0,
            "min": 0,
            "sum": 0,
            "total_values": 0,
            "avg": 0
          }
        }
      ],
      "found": 0,
      "found_docs": 0,
      "search_time_ms": 0,
      "out_of": 0,
      "search_cutoff": true,
      "page": 0,
      "grouped_hits": [
        {
          "found": 0,
          "group_key": [
            null
          ],
          "hits": [
            {
              "highlights": {
                "company_name": {
                  "field": "company_name",
                  "snippet": "<mark>Stark</mark> Industries"
                }
              },
              "document": {
                "id": "124",
                "company_name": "Stark Industries",
                "num_employees": 5215,
                "country": "USA"
              },
              "text_match": 1234556
            }
          ]
        }
      ],
      "hits": [
        {
          "highlights": {
            "company_name": {
              "field": "company_name",
              "snippet": "<mark>Stark</mark> Industries"
            }
          },
          "document": {
            "id": "124",
            "company_name": "Stark Industries",
            "num_employees": 5215,
            "country": "USA"
          },
          "text_match": 1234556
        }
      ],
      "request_params": {
        "collection_name": "string",
        "first_q": "string",
        "q": "string",
        "per_page": 0,
        "voice_query": {
          "transcribed_query": "string"
        }
      },
      "conversation": {
        "answer": "string",
        "conversation_history": [
          {}
        ],
        "conversation_id": "string",
        "query": "string"
      },
      "union_request_params": [
        {
          "collection_name": "string",
          "first_q": "string",
          "q": "string",
          "per_page": 0,
          "voice_query": {
            "transcribed_query": "string"
          }
        }
      ],
      "metadata": {},
      "code": 0,
      "error": "string"
    }
  ],
  "conversation": {
    "answer": "string",
    "conversation_history": [
      {}
    ],
    "conversation_id": "string",
    "query": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[MultiSearchResultItem](#schemamultisearchresultitem)]|true|none|none|
|conversation|[SearchResultConversation](#schemasearchresultconversation)|false|none|none|

<h2 id="tocS_MultiSearchResultItem">MultiSearchResultItem</h2>
<!-- backwards compatibility -->
<a id="schemamultisearchresultitem"></a>
<a id="schema_MultiSearchResultItem"></a>
<a id="tocSmultisearchresultitem"></a>
<a id="tocsmultisearchresultitem"></a>

```json
{
  "facet_counts": [
    {
      "counts": [
        {
          "count": 0,
          "highlighted": "string",
          "value": "string",
          "parent": {}
        }
      ],
      "field_name": "string",
      "sampled": true,
      "stats": {
        "max": 0,
        "min": 0,
        "sum": 0,
        "total_values": 0,
        "avg": 0
      }
    }
  ],
  "found": 0,
  "found_docs": 0,
  "search_time_ms": 0,
  "out_of": 0,
  "search_cutoff": true,
  "page": 0,
  "grouped_hits": [
    {
      "found": 0,
      "group_key": [
        null
      ],
      "hits": [
        {
          "highlights": {
            "company_name": {
              "field": "company_name",
              "snippet": "<mark>Stark</mark> Industries"
            }
          },
          "document": {
            "id": "124",
            "company_name": "Stark Industries",
            "num_employees": 5215,
            "country": "USA"
          },
          "text_match": 1234556
        }
      ]
    }
  ],
  "hits": [
    {
      "highlights": {
        "company_name": {
          "field": "company_name",
          "snippet": "<mark>Stark</mark> Industries"
        }
      },
      "document": {
        "id": "124",
        "company_name": "Stark Industries",
        "num_employees": 5215,
        "country": "USA"
      },
      "text_match": 1234556
    }
  ],
  "request_params": {
    "collection_name": "string",
    "first_q": "string",
    "q": "string",
    "per_page": 0,
    "voice_query": {
      "transcribed_query": "string"
    }
  },
  "conversation": {
    "answer": "string",
    "conversation_history": [
      {}
    ],
    "conversation_id": "string",
    "query": "string"
  },
  "union_request_params": [
    {
      "collection_name": "string",
      "first_q": "string",
      "q": "string",
      "per_page": 0,
      "voice_query": {
        "transcribed_query": "string"
      }
    }
  ],
  "metadata": {},
  "code": 0,
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet_counts|[[FacetCounts](#schemafacetcounts)]|false|none|none|
|found|integer|false|none|The number of documents found|
|found_docs|integer|false|none|none|
|search_time_ms|integer|false|none|The number of milliseconds the search took|
|out_of|integer|false|none|The total number of documents in the collection|
|search_cutoff|boolean|false|none|Whether the search was cut off|
|page|integer|false|none|The search result page number|
|grouped_hits|[[SearchGroupedHit](#schemasearchgroupedhit)]|false|none|none|
|hits|[[SearchResultHit](#schemasearchresulthit)]|false|none|The documents that matched the search query|
|request_params|[SearchRequestParams](#schemasearchrequestparams)|false|none|none|
|conversation|[SearchResultConversation](#schemasearchresultconversation)|false|none|none|
|union_request_params|[[SearchRequestParams](#schemasearchrequestparams)]|false|none|Returned only for union query response.|
|metadata|object|false|none|Custom JSON object that can be returned in the search response|
|code|integer(int64)|false|none|HTTP error code|
|error|string|false|none|Error description|

<h2 id="tocS_SearchParameters">SearchParameters</h2>
<!-- backwards compatibility -->
<a id="schemasearchparameters"></a>
<a id="schema_SearchParameters"></a>
<a id="tocSsearchparameters"></a>
<a id="tocssearchparameters"></a>

```json
{
  "q": "string",
  "query_by": "string",
  "validate_field_names": true,
  "nl_query": true,
  "nl_model_id": "string",
  "query_by_weights": "string",
  "text_match_type": "string",
  "prefix": "string",
  "infix": "string",
  "max_extra_prefix": 0,
  "max_extra_suffix": 0,
  "filter_by": "num_employees:>100 && country: [USA, UK]",
  "enable_lazy_filter": true,
  "max_filter_by_candidates": 0,
  "sort_by": "num_employees:desc",
  "facet_by": "string",
  "max_facet_values": 0,
  "facet_query": "string",
  "facet_query_num_typos": 0,
  "num_typos": "string",
  "page": 0,
  "per_page": 0,
  "limit": 0,
  "offset": 0,
  "group_by": "string",
  "group_limit": 0,
  "group_missing_values": true,
  "group_max_candidates": 0,
  "include_fields": "string",
  "exclude_fields": "string",
  "highlight_full_fields": "string",
  "highlight_affix_num_tokens": 0,
  "highlight_start_tag": "string",
  "highlight_end_tag": "string",
  "enable_highlight_v1": true,
  "enable_analytics": true,
  "snippet_threshold": 0,
  "synonym_sets": "synonym_set_1,synonym_set_2",
  "drop_tokens_threshold": 0,
  "drop_tokens_mode": "right_to_left",
  "typo_tokens_threshold": 0,
  "enable_typos_for_alpha_numerical_tokens": true,
  "filter_curated_hits": true,
  "enable_synonyms": true,
  "synonym_prefix": true,
  "demote_synonym_match": true,
  "synonym_num_typos": 0,
  "pinned_hits": "string",
  "hidden_hits": "string",
  "curation_tags": "string",
  "highlight_fields": "string",
  "rerank_hybrid_matches": false,
  "split_join_tokens": "string",
  "pre_segmented_query": true,
  "preset": "string",
  "enable_curations": false,
  "prioritize_exact_match": true,
  "max_candidates": 0,
  "prioritize_token_position": false,
  "prioritize_num_matching_fields": true,
  "enable_typos_for_numerical_tokens": true,
  "exhaustive_search": true,
  "search_cutoff_ms": 0,
  "limit_hits": 0,
  "use_cache": true,
  "cache_ttl": 0,
  "min_len_1typo": 0,
  "min_len_2typo": 0,
  "vector_query": "string",
  "remote_embedding_timeout_ms": 0,
  "remote_embedding_num_tries": 0,
  "facet_strategy": "string",
  "stopwords": "string",
  "facet_return_parent": "string",
  "facet_sample_percent": 0,
  "facet_sample_threshold": 0,
  "facet_sample_slope": 0,
  "voice_query": "string",
  "conversation": true,
  "conversation_model_id": "string",
  "conversation_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|q|string|false|none|The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.|
|query_by|string|false|none|A list of `string` fields that should be queried against. Multiple fields are separated with a comma.|
|validate_field_names|boolean|false|none|Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.<br>|
|nl_query|boolean|false|none|Whether to use natural language processing to parse the query.|
|nl_model_id|string|false|none|The ID of the natural language model to use.|
|query_by_weights|string|false|none|The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.|
|text_match_type|string|false|none|In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.|
|prefix|string|false|none|Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.|
|infix|string|false|none|If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results|
|max_extra_prefix|integer|false|none|There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.|
|max_extra_suffix|integer|false|none|There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.|
|filter_by|string|false|none|Filter conditions for refining your open api validator search results. Separate multiple conditions with &&.|
|enable_lazy_filter|boolean|false|none|Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false<br>|
|max_filter_by_candidates|integer|false|none|Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.|
|sort_by|string|false|none|A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`|
|facet_by|string|false|none|A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.|
|max_facet_values|integer|false|none|Maximum number of facet values to be returned.|
|facet_query|string|false|none|Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".|
|facet_query_num_typos|integer|false|none|Controls the fuzziness of the facet query filter. Default: 2.<br>|
|num_typos|string|false|none|The number of typographical errors (1 or 2) that would be tolerated. Default: 2<br>|
|page|integer|false|none|Results from this specific page number would be fetched.|
|per_page|integer|false|none|Number of results to fetch per page. Default: 10|
|limit|integer|false|none|Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.<br>|
|offset|integer|false|none|Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.|
|group_by|string|false|none|You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.|
|group_limit|integer|false|none|Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3<br>|
|group_missing_values|boolean|false|none|Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true<br>|
|group_max_candidates|integer|false|none|Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.<br>|
|include_fields|string|false|none|List of fields from the document to include in the search result|
|exclude_fields|string|false|none|List of fields from the document to exclude in the search result|
|highlight_full_fields|string|false|none|List of fields which should be highlighted fully without snippeting|
|highlight_affix_num_tokens|integer|false|none|The number of tokens that should surround the highlighted text on each side. Default: 4<br>|
|highlight_start_tag|string|false|none|The start tag used for the highlighted snippets. Default: `<mark>`<br>|
|highlight_end_tag|string|false|none|The end tag used for the highlighted snippets. Default: `</mark>`<br>|
|enable_highlight_v1|boolean|false|none|Flag for enabling/disabling the deprecated, old highlight structure in the response. Default: true<br>|
|enable_analytics|boolean|false|none|Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).<br>|
|snippet_threshold|integer|false|none|Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30<br>|
|synonym_sets|string|false|none|List of synonym set names to associate with this search query|
|drop_tokens_threshold|integer|false|none|If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10<br>|
|drop_tokens_mode|[DropTokensMode](#schemadroptokensmode)|false|none|Dictates the direction in which the words in the query must be dropped when the original words in the query do not appear in any document. Values: right_to_left (default), left_to_right, both_sides:3 A note on both_sides:3 - for queries up to 3 tokens (words) in length, this mode will drop tokens from both sides and exhaustively rank all matching results. If query length is greater than 3 words, Typesense will just fallback to default behavior of right_to_left<br>|
|typo_tokens_threshold|integer|false|none|If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100<br>|
|enable_typos_for_alpha_numerical_tokens|boolean|false|none|Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.<br>|
|filter_curated_hits|boolean|false|none|Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false<br>|
|enable_synonyms|boolean|false|none|If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true<br>|
|synonym_prefix|boolean|false|none|Allow synonym resolution on word prefixes in the query. Default: false<br>|
|demote_synonym_match|boolean|false|none|When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false<br>|
|synonym_num_typos|integer|false|none|Allow synonym resolution on typo-corrected words in the query. Default: 0<br>|
|pinned_hits|string|false|none|A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.<br>You could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.<br>|
|hidden_hits|string|false|none|A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.<br>You could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.<br>|
|curation_tags|string|false|none|Comma separated list of tags to trigger the curations rules that match the tags.|
|highlight_fields|string|false|none|A list of custom fields that must be highlighted even if you don't query for them<br>|
|rerank_hybrid_matches|boolean|false|none|When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.<br>|
|split_join_tokens|string|false|none|Treat space as typo: search for q=basket ball if q=basketball is not found or vice-versa. Splitting/joining of tokens will only be attempted if the original query produces no results. To always trigger this behavior, set value to `always``. To disable, set value to `off`. Default is `fallback`.<br>|
|pre_segmented_query|boolean|false|none|You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.<br>Set this parameter to true to do the same<br>|
|preset|string|false|none|Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.<br>|
|enable_curations|boolean|false|none|If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false<br>|
|prioritize_exact_match|boolean|false|none|Set this parameter to true to ensure that an exact match is ranked above the others<br>|
|max_candidates|integer|false|none|Control the number of words that Typesense considers for typo and prefix searching.<br>|
|prioritize_token_position|boolean|false|none|Make Typesense prioritize documents where the query words appear earlier in the text.<br>|
|prioritize_num_matching_fields|boolean|false|none|Make Typesense prioritize documents where the query words appear in more number of fields.<br>|
|enable_typos_for_numerical_tokens|boolean|false|none|Make Typesense disable typos for numerical tokens.<br>|
|exhaustive_search|boolean|false|none|Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).<br>|
|search_cutoff_ms|integer|false|none|Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.<br>|
|limit_hits|integer|false|none|Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.<br>|
|use_cache|boolean|false|none|Enable server side caching of search query results. By default, caching is disabled.<br>|
|cache_ttl|integer|false|none|The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.<br>|
|min_len_1typo|integer|false|none|Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.<br>|
|min_len_2typo|integer|false|none|Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.<br>|
|vector_query|string|false|none|Vector query expression for fetching documents "closest" to a given query/document vector.<br>|
|remote_embedding_timeout_ms|integer|false|none|Timeout (in milliseconds) for fetching remote embeddings.<br>|
|remote_embedding_num_tries|integer|false|none|Number of times to retry fetching remote embeddings.<br>|
|facet_strategy|string|false|none|Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).<br>|
|stopwords|string|false|none|Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.<br>|
|facet_return_parent|string|false|none|Comma separated string of nested facet fields whose parent object should be returned in facet response.<br>|
|facet_sample_percent|integer|false|none|Percentage of hits that will be used to estimate facet counts. Default: 100.<br>|
|facet_sample_threshold|integer|false|none|Minimum number of hits above which the facet counts are sampled. Default: 0.<br>|
|facet_sample_slope|number|false|none|Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.<br>|
|voice_query|string|false|none|The base64 encoded audio file in 16 khz 16-bit WAV format.<br>|
|conversation|boolean|false|none|Enable conversational search.<br>|
|conversation_model_id|string|false|none|The Id of Conversation Model to be used.<br>|
|conversation_id|string|false|none|The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|drop_tokens_mode|right_to_left|
|drop_tokens_mode|left_to_right|
|drop_tokens_mode|both_sides:3|

<h2 id="tocS_MultiSearchParameters">MultiSearchParameters</h2>
<!-- backwards compatibility -->
<a id="schemamultisearchparameters"></a>
<a id="schema_MultiSearchParameters"></a>
<a id="tocSmultisearchparameters"></a>
<a id="tocsmultisearchparameters"></a>

```json
{
  "q": "string",
  "query_by": "string",
  "query_by_weights": "string",
  "text_match_type": "string",
  "prefix": "string",
  "infix": "string",
  "max_extra_prefix": 0,
  "max_extra_suffix": 0,
  "filter_by": "num_employees:>100 && country: [USA, UK]",
  "enable_lazy_filter": true,
  "max_filter_by_candidates": 0,
  "sort_by": "string",
  "facet_by": "string",
  "max_facet_values": 0,
  "facet_query": "string",
  "facet_query_num_typos": 0,
  "num_typos": "string",
  "page": 0,
  "per_page": 0,
  "limit": 0,
  "offset": 0,
  "group_by": "string",
  "group_limit": 0,
  "group_missing_values": true,
  "group_max_candidates": 0,
  "include_fields": "string",
  "exclude_fields": "string",
  "highlight_full_fields": "string",
  "highlight_affix_num_tokens": 0,
  "highlight_start_tag": "string",
  "highlight_end_tag": "string",
  "snippet_threshold": 0,
  "drop_tokens_threshold": 0,
  "drop_tokens_mode": "right_to_left",
  "typo_tokens_threshold": 0,
  "enable_typos_for_alpha_numerical_tokens": true,
  "filter_curated_hits": true,
  "enable_synonyms": true,
  "enable_analytics": true,
  "synonym_prefix": true,
  "demote_synonym_match": true,
  "synonym_num_typos": 0,
  "pinned_hits": "string",
  "hidden_hits": "string",
  "curation_tags": "string",
  "highlight_fields": "string",
  "rerank_hybrid_matches": false,
  "pre_segmented_query": false,
  "preset": "string",
  "enable_curations": false,
  "prioritize_exact_match": true,
  "prioritize_token_position": false,
  "prioritize_num_matching_fields": true,
  "enable_typos_for_numerical_tokens": true,
  "exhaustive_search": true,
  "search_cutoff_ms": 0,
  "limit_hits": 0,
  "use_cache": true,
  "cache_ttl": 0,
  "min_len_1typo": 0,
  "min_len_2typo": 0,
  "vector_query": "string",
  "remote_embedding_timeout_ms": 0,
  "remote_embedding_num_tries": 0,
  "facet_strategy": "string",
  "stopwords": "string",
  "facet_return_parent": "string",
  "facet_sample_percent": 0,
  "facet_sample_threshold": 0,
  "facet_sample_slope": 0,
  "voice_query": "string",
  "conversation": true,
  "conversation_model_id": "string",
  "conversation_id": "string",
  "validate_field_names": true
}
```

Parameters for the multi search API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|q|string|false|none|The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.|
|query_by|string|false|none|A list of `string` fields that should be queried against. Multiple fields are separated with a comma.|
|query_by_weights|string|false|none|The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.|
|text_match_type|string|false|none|In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.|
|prefix|string|false|none|Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.|
|infix|string|false|none|If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results|
|max_extra_prefix|integer|false|none|There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.|
|max_extra_suffix|integer|false|none|There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.|
|filter_by|string|false|none|Filter conditions for refining youropen api validator search results. Separate multiple conditions with &&.|
|enable_lazy_filter|boolean|false|none|Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false<br>|
|max_filter_by_candidates|integer|false|none|Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.|
|sort_by|string|false|none|A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`|
|facet_by|string|false|none|A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.|
|max_facet_values|integer|false|none|Maximum number of facet values to be returned.|
|facet_query|string|false|none|Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".|
|facet_query_num_typos|integer|false|none|Controls the fuzziness of the facet query filter. Default: 2.<br>|
|num_typos|string|false|none|The number of typographical errors (1 or 2) that would be tolerated. Default: 2<br>|
|page|integer|false|none|Results from this specific page number would be fetched.|
|per_page|integer|false|none|Number of results to fetch per page. Default: 10|
|limit|integer|false|none|Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.<br>|
|offset|integer|false|none|Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.|
|group_by|string|false|none|You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.|
|group_limit|integer|false|none|Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3<br>|
|group_missing_values|boolean|false|none|Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true<br>|
|group_max_candidates|integer|false|none|Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.<br>|
|include_fields|string|false|none|List of fields from the document to include in the search result|
|exclude_fields|string|false|none|List of fields from the document to exclude in the search result|
|highlight_full_fields|string|false|none|List of fields which should be highlighted fully without snippeting|
|highlight_affix_num_tokens|integer|false|none|The number of tokens that should surround the highlighted text on each side. Default: 4<br>|
|highlight_start_tag|string|false|none|The start tag used for the highlighted snippets. Default: `<mark>`<br>|
|highlight_end_tag|string|false|none|The end tag used for the highlighted snippets. Default: `</mark>`<br>|
|snippet_threshold|integer|false|none|Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30<br>|
|drop_tokens_threshold|integer|false|none|If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10<br>|
|drop_tokens_mode|[DropTokensMode](#schemadroptokensmode)|false|none|Dictates the direction in which the words in the query must be dropped when the original words in the query do not appear in any document. Values: right_to_left (default), left_to_right, both_sides:3 A note on both_sides:3 - for queries up to 3 tokens (words) in length, this mode will drop tokens from both sides and exhaustively rank all matching results. If query length is greater than 3 words, Typesense will just fallback to default behavior of right_to_left<br>|
|typo_tokens_threshold|integer|false|none|If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100<br>|
|enable_typos_for_alpha_numerical_tokens|boolean|false|none|Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.<br>|
|filter_curated_hits|boolean|false|none|Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false<br>|
|enable_synonyms|boolean|false|none|If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true<br>|
|enable_analytics|boolean|false|none|Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).<br>|
|synonym_prefix|boolean|false|none|Allow synonym resolution on word prefixes in the query. Default: false<br>|
|demote_synonym_match|boolean|false|none|When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false<br>|
|synonym_num_typos|integer|false|none|Allow synonym resolution on typo-corrected words in the query. Default: 0<br>|
|pinned_hits|string|false|none|A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.<br>You could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.<br>|
|hidden_hits|string|false|none|A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.<br>You could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.<br>|
|curation_tags|string|false|none|Comma separated list of tags to trigger the curations rules that match the tags.|
|highlight_fields|string|false|none|A list of custom fields that must be highlighted even if you don't query for them<br>|
|rerank_hybrid_matches|boolean|false|none|When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.<br>|
|pre_segmented_query|boolean|false|none|You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.<br>Set this parameter to true to do the same<br>|
|preset|string|false|none|Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.<br>|
|enable_curations|boolean|false|none|If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false<br>|
|prioritize_exact_match|boolean|false|none|Set this parameter to true to ensure that an exact match is ranked above the others<br>|
|prioritize_token_position|boolean|false|none|Make Typesense prioritize documents where the query words appear earlier in the text.<br>|
|prioritize_num_matching_fields|boolean|false|none|Make Typesense prioritize documents where the query words appear in more number of fields.<br>|
|enable_typos_for_numerical_tokens|boolean|false|none|Make Typesense disable typos for numerical tokens.<br>|
|exhaustive_search|boolean|false|none|Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).<br>|
|search_cutoff_ms|integer|false|none|Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.<br>|
|limit_hits|integer|false|none|Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.<br>|
|use_cache|boolean|false|none|Enable server side caching of search query results. By default, caching is disabled.<br>|
|cache_ttl|integer|false|none|The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.<br>|
|min_len_1typo|integer|false|none|Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.<br>|
|min_len_2typo|integer|false|none|Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.<br>|
|vector_query|string|false|none|Vector query expression for fetching documents "closest" to a given query/document vector.<br>|
|remote_embedding_timeout_ms|integer|false|none|Timeout (in milliseconds) for fetching remote embeddings.<br>|
|remote_embedding_num_tries|integer|false|none|Number of times to retry fetching remote embeddings.<br>|
|facet_strategy|string|false|none|Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).<br>|
|stopwords|string|false|none|Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.<br>|
|facet_return_parent|string|false|none|Comma separated string of nested facet fields whose parent object should be returned in facet response.<br>|
|facet_sample_percent|integer|false|none|Percentage of hits that will be used to estimate facet counts. Default: 100.<br>|
|facet_sample_threshold|integer|false|none|Minimum number of hits above which the facet counts are sampled. Default: 0.<br>|
|facet_sample_slope|number|false|none|Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.<br>|
|voice_query|string|false|none|The base64 encoded audio file in 16 khz 16-bit WAV format.<br>|
|conversation|boolean|false|none|Enable conversational search.<br>|
|conversation_model_id|string|false|none|The Id of Conversation Model to be used.<br>|
|conversation_id|string|false|none|The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.<br>|
|validate_field_names|boolean|false|none|Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|drop_tokens_mode|right_to_left|
|drop_tokens_mode|left_to_right|
|drop_tokens_mode|both_sides:3|

<h2 id="tocS_MultiSearchSearchesParameter">MultiSearchSearchesParameter</h2>
<!-- backwards compatibility -->
<a id="schemamultisearchsearchesparameter"></a>
<a id="schema_MultiSearchSearchesParameter"></a>
<a id="tocSmultisearchsearchesparameter"></a>
<a id="tocsmultisearchsearchesparameter"></a>

```json
{
  "union": false,
  "searches": [
    {
      "q": "string",
      "query_by": "string",
      "query_by_weights": "string",
      "text_match_type": "string",
      "prefix": "string",
      "infix": "string",
      "max_extra_prefix": 0,
      "max_extra_suffix": 0,
      "filter_by": "num_employees:>100 && country: [USA, UK]",
      "enable_lazy_filter": true,
      "max_filter_by_candidates": 0,
      "sort_by": "string",
      "facet_by": "string",
      "max_facet_values": 0,
      "facet_query": "string",
      "facet_query_num_typos": 0,
      "num_typos": "string",
      "page": 0,
      "per_page": 0,
      "limit": 0,
      "offset": 0,
      "group_by": "string",
      "group_limit": 0,
      "group_missing_values": true,
      "group_max_candidates": 0,
      "include_fields": "string",
      "exclude_fields": "string",
      "highlight_full_fields": "string",
      "highlight_affix_num_tokens": 0,
      "highlight_start_tag": "string",
      "highlight_end_tag": "string",
      "snippet_threshold": 0,
      "drop_tokens_threshold": 0,
      "drop_tokens_mode": "right_to_left",
      "typo_tokens_threshold": 0,
      "enable_typos_for_alpha_numerical_tokens": true,
      "filter_curated_hits": true,
      "enable_synonyms": true,
      "enable_analytics": true,
      "synonym_prefix": true,
      "demote_synonym_match": true,
      "synonym_num_typos": 0,
      "pinned_hits": "string",
      "hidden_hits": "string",
      "curation_tags": "string",
      "highlight_fields": "string",
      "rerank_hybrid_matches": false,
      "pre_segmented_query": false,
      "preset": "string",
      "enable_curations": false,
      "prioritize_exact_match": true,
      "prioritize_token_position": false,
      "prioritize_num_matching_fields": true,
      "enable_typos_for_numerical_tokens": true,
      "exhaustive_search": true,
      "search_cutoff_ms": 0,
      "limit_hits": 0,
      "use_cache": true,
      "cache_ttl": 0,
      "min_len_1typo": 0,
      "min_len_2typo": 0,
      "vector_query": "string",
      "remote_embedding_timeout_ms": 0,
      "remote_embedding_num_tries": 0,
      "facet_strategy": "string",
      "stopwords": "string",
      "facet_return_parent": "string",
      "facet_sample_percent": 0,
      "facet_sample_threshold": 0,
      "facet_sample_slope": 0,
      "voice_query": "string",
      "conversation": true,
      "conversation_model_id": "string",
      "conversation_id": "string",
      "validate_field_names": true,
      "collection": "string",
      "x-typesense-api-key": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|union|boolean|false|none|When true, merges the search results from each search query into a single ordered set of hits.|
|searches|[[MultiSearchCollectionParameters](#schemamultisearchcollectionparameters)]|true|none|none|

<h2 id="tocS_MultiSearchCollectionParameters">MultiSearchCollectionParameters</h2>
<!-- backwards compatibility -->
<a id="schemamultisearchcollectionparameters"></a>
<a id="schema_MultiSearchCollectionParameters"></a>
<a id="tocSmultisearchcollectionparameters"></a>
<a id="tocsmultisearchcollectionparameters"></a>

```json
{
  "q": "string",
  "query_by": "string",
  "query_by_weights": "string",
  "text_match_type": "string",
  "prefix": "string",
  "infix": "string",
  "max_extra_prefix": 0,
  "max_extra_suffix": 0,
  "filter_by": "num_employees:>100 && country: [USA, UK]",
  "enable_lazy_filter": true,
  "max_filter_by_candidates": 0,
  "sort_by": "string",
  "facet_by": "string",
  "max_facet_values": 0,
  "facet_query": "string",
  "facet_query_num_typos": 0,
  "num_typos": "string",
  "page": 0,
  "per_page": 0,
  "limit": 0,
  "offset": 0,
  "group_by": "string",
  "group_limit": 0,
  "group_missing_values": true,
  "group_max_candidates": 0,
  "include_fields": "string",
  "exclude_fields": "string",
  "highlight_full_fields": "string",
  "highlight_affix_num_tokens": 0,
  "highlight_start_tag": "string",
  "highlight_end_tag": "string",
  "snippet_threshold": 0,
  "drop_tokens_threshold": 0,
  "drop_tokens_mode": "right_to_left",
  "typo_tokens_threshold": 0,
  "enable_typos_for_alpha_numerical_tokens": true,
  "filter_curated_hits": true,
  "enable_synonyms": true,
  "enable_analytics": true,
  "synonym_prefix": true,
  "demote_synonym_match": true,
  "synonym_num_typos": 0,
  "pinned_hits": "string",
  "hidden_hits": "string",
  "curation_tags": "string",
  "highlight_fields": "string",
  "rerank_hybrid_matches": false,
  "pre_segmented_query": false,
  "preset": "string",
  "enable_curations": false,
  "prioritize_exact_match": true,
  "prioritize_token_position": false,
  "prioritize_num_matching_fields": true,
  "enable_typos_for_numerical_tokens": true,
  "exhaustive_search": true,
  "search_cutoff_ms": 0,
  "limit_hits": 0,
  "use_cache": true,
  "cache_ttl": 0,
  "min_len_1typo": 0,
  "min_len_2typo": 0,
  "vector_query": "string",
  "remote_embedding_timeout_ms": 0,
  "remote_embedding_num_tries": 0,
  "facet_strategy": "string",
  "stopwords": "string",
  "facet_return_parent": "string",
  "facet_sample_percent": 0,
  "facet_sample_threshold": 0,
  "facet_sample_slope": 0,
  "voice_query": "string",
  "conversation": true,
  "conversation_model_id": "string",
  "conversation_id": "string",
  "validate_field_names": true,
  "collection": "string",
  "x-typesense-api-key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|q|string|false|none|The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.|
|query_by|string|false|none|A list of `string` fields that should be queried against. Multiple fields are separated with a comma.|
|query_by_weights|string|false|none|The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.|
|text_match_type|string|false|none|In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.|
|prefix|string|false|none|Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.|
|infix|string|false|none|If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results|
|max_extra_prefix|integer|false|none|There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.|
|max_extra_suffix|integer|false|none|There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.|
|filter_by|string|false|none|Filter conditions for refining youropen api validator search results. Separate multiple conditions with &&.|
|enable_lazy_filter|boolean|false|none|Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false<br>|
|max_filter_by_candidates|integer|false|none|Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.|
|sort_by|string|false|none|A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`|
|facet_by|string|false|none|A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.|
|max_facet_values|integer|false|none|Maximum number of facet values to be returned.|
|facet_query|string|false|none|Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".|
|facet_query_num_typos|integer|false|none|Controls the fuzziness of the facet query filter. Default: 2.<br>|
|num_typos|string|false|none|The number of typographical errors (1 or 2) that would be tolerated. Default: 2<br>|
|page|integer|false|none|Results from this specific page number would be fetched.|
|per_page|integer|false|none|Number of results to fetch per page. Default: 10|
|limit|integer|false|none|Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.<br>|
|offset|integer|false|none|Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.|
|group_by|string|false|none|You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.|
|group_limit|integer|false|none|Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3<br>|
|group_missing_values|boolean|false|none|Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true<br>|
|group_max_candidates|integer|false|none|Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.<br>|
|include_fields|string|false|none|List of fields from the document to include in the search result|
|exclude_fields|string|false|none|List of fields from the document to exclude in the search result|
|highlight_full_fields|string|false|none|List of fields which should be highlighted fully without snippeting|
|highlight_affix_num_tokens|integer|false|none|The number of tokens that should surround the highlighted text on each side. Default: 4<br>|
|highlight_start_tag|string|false|none|The start tag used for the highlighted snippets. Default: `<mark>`<br>|
|highlight_end_tag|string|false|none|The end tag used for the highlighted snippets. Default: `</mark>`<br>|
|snippet_threshold|integer|false|none|Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30<br>|
|drop_tokens_threshold|integer|false|none|If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10<br>|
|drop_tokens_mode|[DropTokensMode](#schemadroptokensmode)|false|none|Dictates the direction in which the words in the query must be dropped when the original words in the query do not appear in any document. Values: right_to_left (default), left_to_right, both_sides:3 A note on both_sides:3 - for queries up to 3 tokens (words) in length, this mode will drop tokens from both sides and exhaustively rank all matching results. If query length is greater than 3 words, Typesense will just fallback to default behavior of right_to_left<br>|
|typo_tokens_threshold|integer|false|none|If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100<br>|
|enable_typos_for_alpha_numerical_tokens|boolean|false|none|Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.<br>|
|filter_curated_hits|boolean|false|none|Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false<br>|
|enable_synonyms|boolean|false|none|If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true<br>|
|enable_analytics|boolean|false|none|Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).<br>|
|synonym_prefix|boolean|false|none|Allow synonym resolution on word prefixes in the query. Default: false<br>|
|demote_synonym_match|boolean|false|none|When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false<br>|
|synonym_num_typos|integer|false|none|Allow synonym resolution on typo-corrected words in the query. Default: 0<br>|
|pinned_hits|string|false|none|A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.<br>You could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.<br>|
|hidden_hits|string|false|none|A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.<br>You could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.<br>|
|curation_tags|string|false|none|Comma separated list of tags to trigger the curations rules that match the tags.|
|highlight_fields|string|false|none|A list of custom fields that must be highlighted even if you don't query for them<br>|
|rerank_hybrid_matches|boolean|false|none|When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.<br>|
|pre_segmented_query|boolean|false|none|You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.<br>Set this parameter to true to do the same<br>|
|preset|string|false|none|Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.<br>|
|enable_curations|boolean|false|none|If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false<br>|
|prioritize_exact_match|boolean|false|none|Set this parameter to true to ensure that an exact match is ranked above the others<br>|
|prioritize_token_position|boolean|false|none|Make Typesense prioritize documents where the query words appear earlier in the text.<br>|
|prioritize_num_matching_fields|boolean|false|none|Make Typesense prioritize documents where the query words appear in more number of fields.<br>|
|enable_typos_for_numerical_tokens|boolean|false|none|Make Typesense disable typos for numerical tokens.<br>|
|exhaustive_search|boolean|false|none|Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).<br>|
|search_cutoff_ms|integer|false|none|Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.<br>|
|limit_hits|integer|false|none|Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.<br>|
|use_cache|boolean|false|none|Enable server side caching of search query results. By default, caching is disabled.<br>|
|cache_ttl|integer|false|none|The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.<br>|
|min_len_1typo|integer|false|none|Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.<br>|
|min_len_2typo|integer|false|none|Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.<br>|
|vector_query|string|false|none|Vector query expression for fetching documents "closest" to a given query/document vector.<br>|
|remote_embedding_timeout_ms|integer|false|none|Timeout (in milliseconds) for fetching remote embeddings.<br>|
|remote_embedding_num_tries|integer|false|none|Number of times to retry fetching remote embeddings.<br>|
|facet_strategy|string|false|none|Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).<br>|
|stopwords|string|false|none|Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.<br>|
|facet_return_parent|string|false|none|Comma separated string of nested facet fields whose parent object should be returned in facet response.<br>|
|facet_sample_percent|integer|false|none|Percentage of hits that will be used to estimate facet counts. Default: 100.<br>|
|facet_sample_threshold|integer|false|none|Minimum number of hits above which the facet counts are sampled. Default: 0.<br>|
|facet_sample_slope|number|false|none|Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.<br>|
|voice_query|string|false|none|The base64 encoded audio file in 16 khz 16-bit WAV format.<br>|
|conversation|boolean|false|none|Enable conversational search.<br>|
|conversation_model_id|string|false|none|The Id of Conversation Model to be used.<br>|
|conversation_id|string|false|none|The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.<br>|
|validate_field_names|boolean|false|none|Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.<br>|
|collection|string|false|none|The collection to search in.<br>|
|x-typesense-api-key|string|false|none|A separate search API key for each search within a multi_search request|

#### Enumerated Values

|Property|Value|
|---|---|
|drop_tokens_mode|right_to_left|
|drop_tokens_mode|left_to_right|
|drop_tokens_mode|both_sides:3|

<h2 id="tocS_FacetCounts">FacetCounts</h2>
<!-- backwards compatibility -->
<a id="schemafacetcounts"></a>
<a id="schema_FacetCounts"></a>
<a id="tocSfacetcounts"></a>
<a id="tocsfacetcounts"></a>

```json
{
  "counts": [
    {
      "count": 0,
      "highlighted": "string",
      "value": "string",
      "parent": {}
    }
  ],
  "field_name": "string",
  "sampled": true,
  "stats": {
    "max": 0,
    "min": 0,
    "sum": 0,
    "total_values": 0,
    "avg": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counts|[object]|false|none|none|
|field_name|string|false|none|none|
|sampled|boolean|false|none|none|
|stats|object|false|none|none|

<h2 id="tocS_AnalyticsEventCreateResponse">AnalyticsEventCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticseventcreateresponse"></a>
<a id="schema_AnalyticsEventCreateResponse"></a>
<a id="tocSanalyticseventcreateresponse"></a>
<a id="tocsanalyticseventcreateresponse"></a>

```json
{
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|

<h2 id="tocS_AnalyticsEvent">AnalyticsEvent</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsevent"></a>
<a id="schema_AnalyticsEvent"></a>
<a id="tocSanalyticsevent"></a>
<a id="tocsanalyticsevent"></a>

```json
{
  "name": "string",
  "event_type": "string",
  "data": {
    "user_id": "string",
    "doc_id": "string",
    "doc_ids": [
      "string"
    ],
    "q": "string",
    "analytics_tag": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the analytics rule this event corresponds to|
|event_type|string|true|none|Type of event (e.g., click, conversion, query, visit)|
|data|object|true|none|Event payload|

<h2 id="tocS_AnalyticsEventsResponse">AnalyticsEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticseventsresponse"></a>
<a id="schema_AnalyticsEventsResponse"></a>
<a id="tocSanalyticseventsresponse"></a>
<a id="tocsanalyticseventsresponse"></a>

```json
{
  "events": [
    {
      "name": "string",
      "event_type": "string",
      "collection": "string",
      "timestamp": 0,
      "user_id": "string",
      "doc_id": "string",
      "doc_ids": [
        "string"
      ],
      "query": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[object]|true|none|none|

<h2 id="tocS_AnalyticsRuleCreate">AnalyticsRuleCreate</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsrulecreate"></a>
<a id="schema_AnalyticsRuleCreate"></a>
<a id="tocSanalyticsrulecreate"></a>
<a id="tocsanalyticsrulecreate"></a>

```json
{
  "name": "string",
  "type": "popular_queries",
  "collection": "string",
  "event_type": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|[AnalyticsRuleType](#schemaanalyticsruletype)|true|none|none|
|collection|string|true|none|none|
|event_type|string|true|none|none|
|rule_tag|string|false|none|none|
|params|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|popular_queries|
|type|nohits_queries|
|type|counter|
|type|log|

<h2 id="tocS_AnalyticsRuleType">AnalyticsRuleType</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsruletype"></a>
<a id="schema_AnalyticsRuleType"></a>
<a id="tocSanalyticsruletype"></a>
<a id="tocsanalyticsruletype"></a>

```json
"popular_queries"
```

<h2 id="tocS_AnalyticsRuleUpdate">AnalyticsRuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsruleupdate"></a>
<a id="schema_AnalyticsRuleUpdate"></a>
<a id="tocSanalyticsruleupdate"></a>
<a id="tocsanalyticsruleupdate"></a>

```json
{
  "name": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

Fields allowed to update on an analytics rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|rule_tag|string|false|none|none|
|params|object|false|none|none|

<h2 id="tocS_AnalyticsRule">AnalyticsRule</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsrule"></a>
<a id="schema_AnalyticsRule"></a>
<a id="tocSanalyticsrule"></a>
<a id="tocsanalyticsrule"></a>

```json
{
  "name": "string",
  "type": "popular_queries",
  "collection": "string",
  "event_type": "string",
  "rule_tag": "string",
  "params": {
    "destination_collection": "string",
    "limit": 0,
    "capture_search_requests": true,
    "meta_fields": [
      "string"
    ],
    "expand_query": true,
    "counter_field": "string",
    "weight": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|[AnalyticsRuleType](#schemaanalyticsruletype)|true|none|none|
|collection|string|true|none|none|
|event_type|string|true|none|none|
|rule_tag|string|false|none|none|
|params|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|popular_queries|
|type|nohits_queries|
|type|counter|
|type|log|

<h2 id="tocS_AnalyticsStatus">AnalyticsStatus</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsstatus"></a>
<a id="schema_AnalyticsStatus"></a>
<a id="tocSanalyticsstatus"></a>
<a id="tocsanalyticsstatus"></a>

```json
{
  "popular_prefix_queries": 0,
  "nohits_prefix_queries": 0,
  "log_prefix_queries": 0,
  "query_log_events": 0,
  "query_counter_events": 0,
  "doc_log_events": 0,
  "doc_counter_events": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|popular_prefix_queries|integer|false|none|none|
|nohits_prefix_queries|integer|false|none|none|
|log_prefix_queries|integer|false|none|none|
|query_log_events|integer|false|none|none|
|query_counter_events|integer|false|none|none|
|doc_log_events|integer|false|none|none|
|doc_counter_events|integer|false|none|none|

<h2 id="tocS_APIStatsResponse">APIStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapistatsresponse"></a>
<a id="schema_APIStatsResponse"></a>
<a id="tocSapistatsresponse"></a>
<a id="tocsapistatsresponse"></a>

```json
{
  "delete_latency_ms": 0,
  "delete_requests_per_second": 0,
  "import_latency_ms": 0,
  "import_requests_per_second": 0,
  "latency_ms": {},
  "overloaded_requests_per_second": 0,
  "pending_write_batches": 0,
  "requests_per_second": {},
  "search_latency_ms": 0,
  "search_requests_per_second": 0,
  "total_requests_per_second": 0,
  "write_latency_ms": 0,
  "write_requests_per_second": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete_latency_ms|number(double)|false|none|none|
|delete_requests_per_second|number(double)|false|none|none|
|import_latency_ms|number(double)|false|none|none|
|import_requests_per_second|number(double)|false|none|none|
|latency_ms|object|false|none|none|
|overloaded_requests_per_second|number(double)|false|none|none|
|pending_write_batches|number(double)|false|none|none|
|requests_per_second|object|false|none|none|
|search_latency_ms|number(double)|false|none|none|
|search_requests_per_second|number(double)|false|none|none|
|total_requests_per_second|number(double)|false|none|none|
|write_latency_ms|number(double)|false|none|none|
|write_requests_per_second|number(double)|false|none|none|

<h2 id="tocS_StopwordsSetUpsertSchema">StopwordsSetUpsertSchema</h2>
<!-- backwards compatibility -->
<a id="schemastopwordssetupsertschema"></a>
<a id="schema_StopwordsSetUpsertSchema"></a>
<a id="tocSstopwordssetupsertschema"></a>
<a id="tocsstopwordssetupsertschema"></a>

```json
"{\"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}\n"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stopwords|[string]|true|none|none|
|locale|string|false|none|none|

<h2 id="tocS_StopwordsSetSchema">StopwordsSetSchema</h2>
<!-- backwards compatibility -->
<a id="schemastopwordssetschema"></a>
<a id="schema_StopwordsSetSchema"></a>
<a id="tocSstopwordssetschema"></a>
<a id="tocsstopwordssetschema"></a>

```json
"{\"id\": \"countries\", \"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}\n"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|stopwords|[string]|true|none|none|
|locale|string|false|none|none|

<h2 id="tocS_StopwordsSetRetrieveSchema">StopwordsSetRetrieveSchema</h2>
<!-- backwards compatibility -->
<a id="schemastopwordssetretrieveschema"></a>
<a id="schema_StopwordsSetRetrieveSchema"></a>
<a id="tocSstopwordssetretrieveschema"></a>
<a id="tocsstopwordssetretrieveschema"></a>

```json
"{\"stopwords\": {\"id\": \"countries\", \"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}}\n"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stopwords|[StopwordsSetSchema](#schemastopwordssetschema)|true|none|none|

<h2 id="tocS_StopwordsSetsRetrieveAllSchema">StopwordsSetsRetrieveAllSchema</h2>
<!-- backwards compatibility -->
<a id="schemastopwordssetsretrieveallschema"></a>
<a id="schema_StopwordsSetsRetrieveAllSchema"></a>
<a id="tocSstopwordssetsretrieveallschema"></a>
<a id="tocsstopwordssetsretrieveallschema"></a>

```json
"{\"stopwords\": [{\"id\": \"countries\", \"stopwords\": [\"Germany\", \"France\", \"Italy\"], \"locale\": \"en\"}]}\n"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stopwords|[[StopwordsSetSchema](#schemastopwordssetschema)]|true|none|none|

<h2 id="tocS_PresetUpsertSchema">PresetUpsertSchema</h2>
<!-- backwards compatibility -->
<a id="schemapresetupsertschema"></a>
<a id="schema_PresetUpsertSchema"></a>
<a id="tocSpresetupsertschema"></a>
<a id="tocspresetupsertschema"></a>

```json
{
  "value": {
    "q": "string",
    "query_by": "string",
    "validate_field_names": true,
    "nl_query": true,
    "nl_model_id": "string",
    "query_by_weights": "string",
    "text_match_type": "string",
    "prefix": "string",
    "infix": "string",
    "max_extra_prefix": 0,
    "max_extra_suffix": 0,
    "filter_by": "num_employees:>100 && country: [USA, UK]",
    "enable_lazy_filter": true,
    "max_filter_by_candidates": 0,
    "sort_by": "num_employees:desc",
    "facet_by": "string",
    "max_facet_values": 0,
    "facet_query": "string",
    "facet_query_num_typos": 0,
    "num_typos": "string",
    "page": 0,
    "per_page": 0,
    "limit": 0,
    "offset": 0,
    "group_by": "string",
    "group_limit": 0,
    "group_missing_values": true,
    "group_max_candidates": 0,
    "include_fields": "string",
    "exclude_fields": "string",
    "highlight_full_fields": "string",
    "highlight_affix_num_tokens": 0,
    "highlight_start_tag": "string",
    "highlight_end_tag": "string",
    "enable_highlight_v1": true,
    "enable_analytics": true,
    "snippet_threshold": 0,
    "synonym_sets": "synonym_set_1,synonym_set_2",
    "drop_tokens_threshold": 0,
    "drop_tokens_mode": "right_to_left",
    "typo_tokens_threshold": 0,
    "enable_typos_for_alpha_numerical_tokens": true,
    "filter_curated_hits": true,
    "enable_synonyms": true,
    "synonym_prefix": true,
    "demote_synonym_match": true,
    "synonym_num_typos": 0,
    "pinned_hits": "string",
    "hidden_hits": "string",
    "curation_tags": "string",
    "highlight_fields": "string",
    "rerank_hybrid_matches": false,
    "split_join_tokens": "string",
    "pre_segmented_query": true,
    "preset": "string",
    "enable_curations": false,
    "prioritize_exact_match": true,
    "max_candidates": 0,
    "prioritize_token_position": false,
    "prioritize_num_matching_fields": true,
    "enable_typos_for_numerical_tokens": true,
    "exhaustive_search": true,
    "search_cutoff_ms": 0,
    "limit_hits": 0,
    "use_cache": true,
    "cache_ttl": 0,
    "min_len_1typo": 0,
    "min_len_2typo": 0,
    "vector_query": "string",
    "remote_embedding_timeout_ms": 0,
    "remote_embedding_num_tries": 0,
    "facet_strategy": "string",
    "stopwords": "string",
    "facet_return_parent": "string",
    "facet_sample_percent": 0,
    "facet_sample_threshold": 0,
    "facet_sample_slope": 0,
    "voice_query": "string",
    "conversation": true,
    "conversation_model_id": "string",
    "conversation_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[SearchParameters](#schemasearchparameters) \| [MultiSearchSearchesParameter](#schemamultisearchsearchesparameter)|true|none|none|

<h2 id="tocS_PresetSchema">PresetSchema</h2>
<!-- backwards compatibility -->
<a id="schemapresetschema"></a>
<a id="schema_PresetSchema"></a>
<a id="tocSpresetschema"></a>
<a id="tocspresetschema"></a>

```json
{
  "value": {
    "q": "string",
    "query_by": "string",
    "validate_field_names": true,
    "nl_query": true,
    "nl_model_id": "string",
    "query_by_weights": "string",
    "text_match_type": "string",
    "prefix": "string",
    "infix": "string",
    "max_extra_prefix": 0,
    "max_extra_suffix": 0,
    "filter_by": "num_employees:>100 && country: [USA, UK]",
    "enable_lazy_filter": true,
    "max_filter_by_candidates": 0,
    "sort_by": "num_employees:desc",
    "facet_by": "string",
    "max_facet_values": 0,
    "facet_query": "string",
    "facet_query_num_typos": 0,
    "num_typos": "string",
    "page": 0,
    "per_page": 0,
    "limit": 0,
    "offset": 0,
    "group_by": "string",
    "group_limit": 0,
    "group_missing_values": true,
    "group_max_candidates": 0,
    "include_fields": "string",
    "exclude_fields": "string",
    "highlight_full_fields": "string",
    "highlight_affix_num_tokens": 0,
    "highlight_start_tag": "string",
    "highlight_end_tag": "string",
    "enable_highlight_v1": true,
    "enable_analytics": true,
    "snippet_threshold": 0,
    "synonym_sets": "synonym_set_1,synonym_set_2",
    "drop_tokens_threshold": 0,
    "drop_tokens_mode": "right_to_left",
    "typo_tokens_threshold": 0,
    "enable_typos_for_alpha_numerical_tokens": true,
    "filter_curated_hits": true,
    "enable_synonyms": true,
    "synonym_prefix": true,
    "demote_synonym_match": true,
    "synonym_num_typos": 0,
    "pinned_hits": "string",
    "hidden_hits": "string",
    "curation_tags": "string",
    "highlight_fields": "string",
    "rerank_hybrid_matches": false,
    "split_join_tokens": "string",
    "pre_segmented_query": true,
    "preset": "string",
    "enable_curations": false,
    "prioritize_exact_match": true,
    "max_candidates": 0,
    "prioritize_token_position": false,
    "prioritize_num_matching_fields": true,
    "enable_typos_for_numerical_tokens": true,
    "exhaustive_search": true,
    "search_cutoff_ms": 0,
    "limit_hits": 0,
    "use_cache": true,
    "cache_ttl": 0,
    "min_len_1typo": 0,
    "min_len_2typo": 0,
    "vector_query": "string",
    "remote_embedding_timeout_ms": 0,
    "remote_embedding_num_tries": 0,
    "facet_strategy": "string",
    "stopwords": "string",
    "facet_return_parent": "string",
    "facet_sample_percent": 0,
    "facet_sample_threshold": 0,
    "facet_sample_slope": 0,
    "voice_query": "string",
    "conversation": true,
    "conversation_model_id": "string",
    "conversation_id": "string"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[SearchParameters](#schemasearchparameters) \| [MultiSearchSearchesParameter](#schemamultisearchsearchesparameter)|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_PresetsRetrieveSchema">PresetsRetrieveSchema</h2>
<!-- backwards compatibility -->
<a id="schemapresetsretrieveschema"></a>
<a id="schema_PresetsRetrieveSchema"></a>
<a id="tocSpresetsretrieveschema"></a>
<a id="tocspresetsretrieveschema"></a>

```json
{
  "presets": [
    {
      "value": {
        "q": "string",
        "query_by": "string",
        "validate_field_names": true,
        "nl_query": true,
        "nl_model_id": "string",
        "query_by_weights": "string",
        "text_match_type": "string",
        "prefix": "string",
        "infix": "string",
        "max_extra_prefix": 0,
        "max_extra_suffix": 0,
        "filter_by": "num_employees:>100 && country: [USA, UK]",
        "enable_lazy_filter": true,
        "max_filter_by_candidates": 0,
        "sort_by": "num_employees:desc",
        "facet_by": "string",
        "max_facet_values": 0,
        "facet_query": "string",
        "facet_query_num_typos": 0,
        "num_typos": "string",
        "page": 0,
        "per_page": 0,
        "limit": 0,
        "offset": 0,
        "group_by": "string",
        "group_limit": 0,
        "group_missing_values": true,
        "group_max_candidates": 0,
        "include_fields": "string",
        "exclude_fields": "string",
        "highlight_full_fields": "string",
        "highlight_affix_num_tokens": 0,
        "highlight_start_tag": "string",
        "highlight_end_tag": "string",
        "enable_highlight_v1": true,
        "enable_analytics": true,
        "snippet_threshold": 0,
        "synonym_sets": "synonym_set_1,synonym_set_2",
        "drop_tokens_threshold": 0,
        "drop_tokens_mode": "right_to_left",
        "typo_tokens_threshold": 0,
        "enable_typos_for_alpha_numerical_tokens": true,
        "filter_curated_hits": true,
        "enable_synonyms": true,
        "synonym_prefix": true,
        "demote_synonym_match": true,
        "synonym_num_typos": 0,
        "pinned_hits": "string",
        "hidden_hits": "string",
        "curation_tags": "string",
        "highlight_fields": "string",
        "rerank_hybrid_matches": false,
        "split_join_tokens": "string",
        "pre_segmented_query": true,
        "preset": "string",
        "enable_curations": false,
        "prioritize_exact_match": true,
        "max_candidates": 0,
        "prioritize_token_position": false,
        "prioritize_num_matching_fields": true,
        "enable_typos_for_numerical_tokens": true,
        "exhaustive_search": true,
        "search_cutoff_ms": 0,
        "limit_hits": 0,
        "use_cache": true,
        "cache_ttl": 0,
        "min_len_1typo": 0,
        "min_len_2typo": 0,
        "vector_query": "string",
        "remote_embedding_timeout_ms": 0,
        "remote_embedding_num_tries": 0,
        "facet_strategy": "string",
        "stopwords": "string",
        "facet_return_parent": "string",
        "facet_sample_percent": 0,
        "facet_sample_threshold": 0,
        "facet_sample_slope": 0,
        "voice_query": "string",
        "conversation": true,
        "conversation_model_id": "string",
        "conversation_id": "string"
      },
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presets|[[PresetSchema](#schemapresetschema)]|true|none|none|

<h2 id="tocS_PresetDeleteSchema">PresetDeleteSchema</h2>
<!-- backwards compatibility -->
<a id="schemapresetdeleteschema"></a>
<a id="schema_PresetDeleteSchema"></a>
<a id="tocSpresetdeleteschema"></a>
<a id="tocspresetdeleteschema"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_DirtyValues">DirtyValues</h2>
<!-- backwards compatibility -->
<a id="schemadirtyvalues"></a>
<a id="schema_DirtyValues"></a>
<a id="tocSdirtyvalues"></a>
<a id="tocsdirtyvalues"></a>

```json
"coerce_or_reject"
```

<h2 id="tocS_IndexAction">IndexAction</h2>
<!-- backwards compatibility -->
<a id="schemaindexaction"></a>
<a id="schema_IndexAction"></a>
<a id="tocSindexaction"></a>
<a id="tocsindexaction"></a>

```json
"create"
```

<h2 id="tocS_DropTokensMode">DropTokensMode</h2>
<!-- backwards compatibility -->
<a id="schemadroptokensmode"></a>
<a id="schema_DropTokensMode"></a>
<a id="tocSdroptokensmode"></a>
<a id="tocsdroptokensmode"></a>

```json
"right_to_left"
```

Dictates the direction in which the words in the query must be dropped when the original words in the query do not appear in any document. Values: right_to_left (default), left_to_right, both_sides:3 A note on both_sides:3 - for queries up to 3 tokens (words) in length, this mode will drop tokens from both sides and exhaustively rank all matching results. If query length is greater than 3 words, Typesense will just fallback to default behavior of right_to_left

<h2 id="tocS_ConversationModelCreateSchema">ConversationModelCreateSchema</h2>
<!-- backwards compatibility -->
<a id="schemaconversationmodelcreateschema"></a>
<a id="schema_ConversationModelCreateSchema"></a>
<a id="tocSconversationmodelcreateschema"></a>
<a id="tocsconversationmodelcreateschema"></a>

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|An explicit id for the model, otherwise the API will return a response with an auto-generated conversation model id.|
|model_name|string|true|none|Name of the LLM model offered by OpenAI, Cloudflare or vLLM|
|api_key|string|false|none|The LLM service's API Key|
|history_collection|string|true|none|Typesense collection that stores the historical conversations|
|account_id|string|false|none|LLM service's account ID (only applicable for Cloudflare)|
|system_prompt|string|false|none|The system prompt that contains special instructions to the LLM|
|ttl|integer|false|none|Time interval in seconds after which the messages would be deleted. Default: 86400 (24 hours)<br>|
|max_bytes|integer|true|none|The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.<br>|
|vllm_url|string|false|none|URL of vLLM service|
|model_name|string|true|none|Name of the LLM model offered by OpenAI, Cloudflare or vLLM|
|max_bytes|integer|true|none|The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.<br>|
|history_collection|string|true|none|Typesense collection that stores the historical conversations|

<h2 id="tocS_ConversationModelUpdateSchema">ConversationModelUpdateSchema</h2>
<!-- backwards compatibility -->
<a id="schemaconversationmodelupdateschema"></a>
<a id="schema_ConversationModelUpdateSchema"></a>
<a id="tocSconversationmodelupdateschema"></a>
<a id="tocsconversationmodelupdateschema"></a>

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|An explicit id for the model, otherwise the API will return a response with an auto-generated conversation model id.|
|model_name|string|false|none|Name of the LLM model offered by OpenAI, Cloudflare or vLLM|
|api_key|string|false|none|The LLM service's API Key|
|history_collection|string|false|none|Typesense collection that stores the historical conversations|
|account_id|string|false|none|LLM service's account ID (only applicable for Cloudflare)|
|system_prompt|string|false|none|The system prompt that contains special instructions to the LLM|
|ttl|integer|false|none|Time interval in seconds after which the messages would be deleted. Default: 86400 (24 hours)<br>|
|max_bytes|integer|false|none|The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.<br>|
|vllm_url|string|false|none|URL of vLLM service|

<h2 id="tocS_ConversationModelSchema">ConversationModelSchema</h2>
<!-- backwards compatibility -->
<a id="schemaconversationmodelschema"></a>
<a id="schema_ConversationModelSchema"></a>
<a id="tocSconversationmodelschema"></a>
<a id="tocsconversationmodelschema"></a>

```json
{
  "id": "string",
  "model_name": "string",
  "api_key": "string",
  "history_collection": "string",
  "account_id": "string",
  "system_prompt": "string",
  "ttl": 0,
  "max_bytes": 0,
  "vllm_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An explicit id for the model, otherwise the API will return a response with an auto-generated conversation model id.|
|model_name|string|true|none|Name of the LLM model offered by OpenAI, Cloudflare or vLLM|
|api_key|string|false|none|The LLM service's API Key|
|history_collection|string|true|none|Typesense collection that stores the historical conversations|
|account_id|string|false|none|LLM service's account ID (only applicable for Cloudflare)|
|system_prompt|string|false|none|The system prompt that contains special instructions to the LLM|
|ttl|integer|false|none|Time interval in seconds after which the messages would be deleted. Default: 86400 (24 hours)<br>|
|max_bytes|integer|true|none|The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.<br>|
|vllm_url|string|false|none|URL of vLLM service|
|model_name|string|true|none|Name of the LLM model offered by OpenAI, Cloudflare or vLLM|
|max_bytes|integer|true|none|The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.<br>|
|history_collection|string|true|none|Typesense collection that stores the historical conversations|
|id|string|true|none|An explicit id for the model, otherwise the API will return a response with an auto-generated conversation model id.|

<h2 id="tocS_StemmingDictionary">StemmingDictionary</h2>
<!-- backwards compatibility -->
<a id="schemastemmingdictionary"></a>
<a id="schema_StemmingDictionary"></a>
<a id="tocSstemmingdictionary"></a>
<a id="tocsstemmingdictionary"></a>

```json
{
  "id": "irregular-plurals",
  "words": [
    {
      "word": "people",
      "root": "person"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the dictionary|
|words|[object]|true|none|List of word mappings in the dictionary|

<h2 id="tocS_NLSearchModelBase">NLSearchModelBase</h2>
<!-- backwards compatibility -->
<a id="schemanlsearchmodelbase"></a>
<a id="schema_NLSearchModelBase"></a>
<a id="tocSnlsearchmodelbase"></a>
<a id="tocsnlsearchmodelbase"></a>

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|false|none|Name of the NL model to use|
|api_key|string|false|none|API key for the NL model service|
|api_url|string|false|none|Custom API URL for the NL model service|
|max_bytes|integer|false|none|Maximum number of bytes to process|
|temperature|number|false|none|Temperature parameter for the NL model|
|system_prompt|string|false|none|System prompt for the NL model|
|top_p|number|false|none|Top-p parameter for the NL model (Google-specific)|
|top_k|integer|false|none|Top-k parameter for the NL model (Google-specific)|
|stop_sequences|[string]|false|none|Stop sequences for the NL model (Google-specific)|
|api_version|string|false|none|API version for the NL model service|
|project_id|string|false|none|Project ID for GCP Vertex AI|
|access_token|string|false|none|Access token for GCP Vertex AI|
|refresh_token|string|false|none|Refresh token for GCP Vertex AI|
|client_id|string|false|none|Client ID for GCP Vertex AI|
|client_secret|string|false|none|Client secret for GCP Vertex AI|
|region|string|false|none|Region for GCP Vertex AI|
|max_output_tokens|integer|false|none|Maximum output tokens for GCP Vertex AI|
|account_id|string|false|none|Account ID for Cloudflare-specific models|

<h2 id="tocS_NLSearchModelCreateSchema">NLSearchModelCreateSchema</h2>
<!-- backwards compatibility -->
<a id="schemanlsearchmodelcreateschema"></a>
<a id="schema_NLSearchModelCreateSchema"></a>
<a id="tocSnlsearchmodelcreateschema"></a>
<a id="tocsnlsearchmodelcreateschema"></a>

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|false|none|Name of the NL model to use|
|api_key|string|false|none|API key for the NL model service|
|api_url|string|false|none|Custom API URL for the NL model service|
|max_bytes|integer|false|none|Maximum number of bytes to process|
|temperature|number|false|none|Temperature parameter for the NL model|
|system_prompt|string|false|none|System prompt for the NL model|
|top_p|number|false|none|Top-p parameter for the NL model (Google-specific)|
|top_k|integer|false|none|Top-k parameter for the NL model (Google-specific)|
|stop_sequences|[string]|false|none|Stop sequences for the NL model (Google-specific)|
|api_version|string|false|none|API version for the NL model service|
|project_id|string|false|none|Project ID for GCP Vertex AI|
|access_token|string|false|none|Access token for GCP Vertex AI|
|refresh_token|string|false|none|Refresh token for GCP Vertex AI|
|client_id|string|false|none|Client ID for GCP Vertex AI|
|client_secret|string|false|none|Client secret for GCP Vertex AI|
|region|string|false|none|Region for GCP Vertex AI|
|max_output_tokens|integer|false|none|Maximum output tokens for GCP Vertex AI|
|account_id|string|false|none|Account ID for Cloudflare-specific models|
|id|string|false|none|Optional ID for the NL search model|

<h2 id="tocS_NLSearchModelSchema">NLSearchModelSchema</h2>
<!-- backwards compatibility -->
<a id="schemanlsearchmodelschema"></a>
<a id="schema_NLSearchModelSchema"></a>
<a id="tocSnlsearchmodelschema"></a>
<a id="tocsnlsearchmodelschema"></a>

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|false|none|Name of the NL model to use|
|api_key|string|false|none|API key for the NL model service|
|api_url|string|false|none|Custom API URL for the NL model service|
|max_bytes|integer|false|none|Maximum number of bytes to process|
|temperature|number|false|none|Temperature parameter for the NL model|
|system_prompt|string|false|none|System prompt for the NL model|
|top_p|number|false|none|Top-p parameter for the NL model (Google-specific)|
|top_k|integer|false|none|Top-k parameter for the NL model (Google-specific)|
|stop_sequences|[string]|false|none|Stop sequences for the NL model (Google-specific)|
|api_version|string|false|none|API version for the NL model service|
|project_id|string|false|none|Project ID for GCP Vertex AI|
|access_token|string|false|none|Access token for GCP Vertex AI|
|refresh_token|string|false|none|Refresh token for GCP Vertex AI|
|client_id|string|false|none|Client ID for GCP Vertex AI|
|client_secret|string|false|none|Client secret for GCP Vertex AI|
|region|string|false|none|Region for GCP Vertex AI|
|max_output_tokens|integer|false|none|Maximum output tokens for GCP Vertex AI|
|account_id|string|false|none|Account ID for Cloudflare-specific models|
|id|string|true|none|Optional ID for the NL search model|
|id|string|true|none|ID of the NL search model|

<h2 id="tocS_NLSearchModelUpdateSchema">NLSearchModelUpdateSchema</h2>
<!-- backwards compatibility -->
<a id="schemanlsearchmodelupdateschema"></a>
<a id="schema_NLSearchModelUpdateSchema"></a>
<a id="tocSnlsearchmodelupdateschema"></a>
<a id="tocsnlsearchmodelupdateschema"></a>

```json
{
  "model_name": "string",
  "api_key": "string",
  "api_url": "string",
  "max_bytes": 0,
  "temperature": 0,
  "system_prompt": "string",
  "top_p": 0,
  "top_k": 0,
  "stop_sequences": [
    "string"
  ],
  "api_version": "string",
  "project_id": "string",
  "access_token": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string",
  "region": "string",
  "max_output_tokens": 0,
  "account_id": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|false|none|Name of the NL model to use|
|api_key|string|false|none|API key for the NL model service|
|api_url|string|false|none|Custom API URL for the NL model service|
|max_bytes|integer|false|none|Maximum number of bytes to process|
|temperature|number|false|none|Temperature parameter for the NL model|
|system_prompt|string|false|none|System prompt for the NL model|
|top_p|number|false|none|Top-p parameter for the NL model (Google-specific)|
|top_k|integer|false|none|Top-k parameter for the NL model (Google-specific)|
|stop_sequences|[string]|false|none|Stop sequences for the NL model (Google-specific)|
|api_version|string|false|none|API version for the NL model service|
|project_id|string|false|none|Project ID for GCP Vertex AI|
|access_token|string|false|none|Access token for GCP Vertex AI|
|refresh_token|string|false|none|Refresh token for GCP Vertex AI|
|client_id|string|false|none|Client ID for GCP Vertex AI|
|client_secret|string|false|none|Client secret for GCP Vertex AI|
|region|string|false|none|Region for GCP Vertex AI|
|max_output_tokens|integer|false|none|Maximum output tokens for GCP Vertex AI|
|account_id|string|false|none|Account ID for Cloudflare-specific models|
|id|string|false|none|Optional ID for the NL search model|

<h2 id="tocS_NLSearchModelDeleteSchema">NLSearchModelDeleteSchema</h2>
<!-- backwards compatibility -->
<a id="schemanlsearchmodeldeleteschema"></a>
<a id="schema_NLSearchModelDeleteSchema"></a>
<a id="tocSnlsearchmodeldeleteschema"></a>
<a id="tocsnlsearchmodeldeleteschema"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the deleted NL search model|

<h2 id="tocS_SynonymItemUpsertSchema">SynonymItemUpsertSchema</h2>
<!-- backwards compatibility -->
<a id="schemasynonymitemupsertschema"></a>
<a id="schema_SynonymItemUpsertSchema"></a>
<a id="tocSsynonymitemupsertschema"></a>
<a id="tocssynonymitemupsertschema"></a>

```json
{
  "synonyms": [
    "string"
  ],
  "root": "string",
  "locale": "string",
  "symbols_to_index": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|synonyms|[string]|true|none|Array of words that should be considered as synonyms|
|root|string|false|none|For 1-way synonyms, indicates the root word that words in the synonyms parameter map to|
|locale|string|false|none|Locale for the synonym, leave blank to use the standard tokenizer|
|symbols_to_index|[string]|false|none|By default, special characters are dropped from synonyms. Use this attribute to specify which special characters should be indexed as is|

<h2 id="tocS_SynonymItemSchema">SynonymItemSchema</h2>
<!-- backwards compatibility -->
<a id="schemasynonymitemschema"></a>
<a id="schema_SynonymItemSchema"></a>
<a id="tocSsynonymitemschema"></a>
<a id="tocssynonymitemschema"></a>

```json
{
  "id": "string",
  "synonyms": [
    "string"
  ],
  "root": "string",
  "locale": "string",
  "symbols_to_index": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the synonym item|
|synonyms|[string]|true|none|Array of words that should be considered as synonyms|
|root|string|false|none|For 1-way synonyms, indicates the root word that words in the synonyms parameter map to|
|locale|string|false|none|Locale for the synonym, leave blank to use the standard tokenizer|
|symbols_to_index|[string]|false|none|By default, special characters are dropped from synonyms. Use this attribute to specify which special characters should be indexed as is|

<h2 id="tocS_SynonymSetCreateSchema">SynonymSetCreateSchema</h2>
<!-- backwards compatibility -->
<a id="schemasynonymsetcreateschema"></a>
<a id="schema_SynonymSetCreateSchema"></a>
<a id="tocSsynonymsetcreateschema"></a>
<a id="tocssynonymsetcreateschema"></a>

```json
{
  "items": [
    {
      "id": "string",
      "synonyms": [
        "string"
      ],
      "root": "string",
      "locale": "string",
      "symbols_to_index": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SynonymItemSchema](#schemasynonymitemschema)]|true|none|Array of synonym items|

<h2 id="tocS_SynonymSetSchema">SynonymSetSchema</h2>
<!-- backwards compatibility -->
<a id="schemasynonymsetschema"></a>
<a id="schema_SynonymSetSchema"></a>
<a id="tocSsynonymsetschema"></a>
<a id="tocssynonymsetschema"></a>

```json
{
  "items": [
    {
      "id": "string",
      "synonyms": [
        "string"
      ],
      "root": "string",
      "locale": "string",
      "symbols_to_index": [
        "string"
      ]
    }
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SynonymItemSchema](#schemasynonymitemschema)]|true|none|Array of synonym items|
|name|string|true|none|Name of the synonym set|

<h2 id="tocS_SynonymSetsRetrieveSchema">SynonymSetsRetrieveSchema</h2>
<!-- backwards compatibility -->
<a id="schemasynonymsetsretrieveschema"></a>
<a id="schema_SynonymSetsRetrieveSchema"></a>
<a id="tocSsynonymsetsretrieveschema"></a>
<a id="tocssynonymsetsretrieveschema"></a>

```json
{
  "synonym_sets": [
    {
      "items": [
        {
          "id": "string",
          "synonyms": [
            "string"
          ],
          "root": "string",
          "locale": "string",
          "symbols_to_index": [
            "string"
          ]
        }
      ],
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|synonym_sets|[[SynonymSetSchema](#schemasynonymsetschema)]|true|none|Array of synonym sets|

<h2 id="tocS_SynonymSetDeleteSchema">SynonymSetDeleteSchema</h2>
<!-- backwards compatibility -->
<a id="schemasynonymsetdeleteschema"></a>
<a id="schema_SynonymSetDeleteSchema"></a>
<a id="tocSsynonymsetdeleteschema"></a>
<a id="tocssynonymsetdeleteschema"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the deleted synonym set|

<h2 id="tocS_SynonymItemDeleteSchema">SynonymItemDeleteSchema</h2>
<!-- backwards compatibility -->
<a id="schemasynonymitemdeleteschema"></a>
<a id="schema_SynonymItemDeleteSchema"></a>
<a id="tocSsynonymitemdeleteschema"></a>
<a id="tocssynonymitemdeleteschema"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the deleted synonym item|

<h2 id="tocS_CurationItemCreateSchema">CurationItemCreateSchema</h2>
<!-- backwards compatibility -->
<a id="schemacurationitemcreateschema"></a>
<a id="schema_CurationItemCreateSchema"></a>
<a id="tocScurationitemcreateschema"></a>
<a id="tocscurationitemcreateschema"></a>

```json
{
  "rule": {
    "tags": [
      "string"
    ],
    "query": "string",
    "match": "exact",
    "filter_by": "string"
  },
  "includes": [
    {
      "id": "string",
      "position": 0
    }
  ],
  "excludes": [
    {
      "id": "string"
    }
  ],
  "filter_by": "string",
  "remove_matched_tokens": true,
  "metadata": {},
  "sort_by": "string",
  "replace_query": "string",
  "filter_curated_hits": true,
  "effective_from_ts": 0,
  "effective_to_ts": 0,
  "stop_processing": true,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[CurationRule](#schemacurationrule)|true|none|none|
|includes|[[CurationInclude](#schemacurationinclude)]|false|none|List of document `id`s that should be included in the search results with their corresponding `position`s.|
|excludes|[[CurationExclude](#schemacurationexclude)]|false|none|List of document `id`s that should be excluded from the search results.|
|filter_by|string|false|none|A filter by clause that is applied to any search query that matches the curation rule.<br>|
|remove_matched_tokens|boolean|false|none|Indicates whether search query tokens that exist in the curation's rule should be removed from the search query.<br>|
|metadata|object|false|none|Return a custom JSON object in the Search API response, when this rule is triggered. This can can be used to display a pre-defined message (eg: a promotion banner) on the front-end when a particular rule is triggered.<br>|
|sort_by|string|false|none|A sort by clause that is applied to any search query that matches the curation rule.<br>|
|replace_query|string|false|none|Replaces the current search query with this value, when the search query matches the curation rule.<br>|
|filter_curated_hits|boolean|false|none|When set to true, the filter conditions of the query is applied to the curated records as well. Default: false.<br>|
|effective_from_ts|integer|false|none|A Unix timestamp that indicates the date/time from which the curation will be active. You can use this to create rules that start applying from a future point in time.<br>|
|effective_to_ts|integer|false|none|A Unix timestamp that indicates the date/time until which the curation will be active. You can use this to create rules that stop applying after a period of time.<br>|
|stop_processing|boolean|false|none|When set to true, curation processing will stop at the first matching rule. When set to false curation processing will continue and multiple curation actions will be triggered in sequence. Curations are processed in the lexical sort order of their id field.<br>|
|id|string|false|none|ID of the curation item|

<h2 id="tocS_CurationItemSchema">CurationItemSchema</h2>
<!-- backwards compatibility -->
<a id="schemacurationitemschema"></a>
<a id="schema_CurationItemSchema"></a>
<a id="tocScurationitemschema"></a>
<a id="tocscurationitemschema"></a>

```json
{
  "rule": {
    "tags": [
      "string"
    ],
    "query": "string",
    "match": "exact",
    "filter_by": "string"
  },
  "includes": [
    {
      "id": "string",
      "position": 0
    }
  ],
  "excludes": [
    {
      "id": "string"
    }
  ],
  "filter_by": "string",
  "remove_matched_tokens": true,
  "metadata": {},
  "sort_by": "string",
  "replace_query": "string",
  "filter_curated_hits": true,
  "effective_from_ts": 0,
  "effective_to_ts": 0,
  "stop_processing": true,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[CurationRule](#schemacurationrule)|true|none|none|
|includes|[[CurationInclude](#schemacurationinclude)]|false|none|List of document `id`s that should be included in the search results with their corresponding `position`s.|
|excludes|[[CurationExclude](#schemacurationexclude)]|false|none|List of document `id`s that should be excluded from the search results.|
|filter_by|string|false|none|A filter by clause that is applied to any search query that matches the curation rule.<br>|
|remove_matched_tokens|boolean|false|none|Indicates whether search query tokens that exist in the curation's rule should be removed from the search query.<br>|
|metadata|object|false|none|Return a custom JSON object in the Search API response, when this rule is triggered. This can can be used to display a pre-defined message (eg: a promotion banner) on the front-end when a particular rule is triggered.<br>|
|sort_by|string|false|none|A sort by clause that is applied to any search query that matches the curation rule.<br>|
|replace_query|string|false|none|Replaces the current search query with this value, when the search query matches the curation rule.<br>|
|filter_curated_hits|boolean|false|none|When set to true, the filter conditions of the query is applied to the curated records as well. Default: false.<br>|
|effective_from_ts|integer|false|none|A Unix timestamp that indicates the date/time from which the curation will be active. You can use this to create rules that start applying from a future point in time.<br>|
|effective_to_ts|integer|false|none|A Unix timestamp that indicates the date/time until which the curation will be active. You can use this to create rules that stop applying after a period of time.<br>|
|stop_processing|boolean|false|none|When set to true, curation processing will stop at the first matching rule. When set to false curation processing will continue and multiple curation actions will be triggered in sequence. Curations are processed in the lexical sort order of their id field.<br>|
|id|string|true|none|ID of the curation item|
|id|string|true|none|none|

<h2 id="tocS_CurationSetCreateSchema">CurationSetCreateSchema</h2>
<!-- backwards compatibility -->
<a id="schemacurationsetcreateschema"></a>
<a id="schema_CurationSetCreateSchema"></a>
<a id="tocScurationsetcreateschema"></a>
<a id="tocscurationsetcreateschema"></a>

```json
{
  "items": [
    {
      "rule": {
        "tags": [
          "string"
        ],
        "query": "string",
        "match": "exact",
        "filter_by": "string"
      },
      "includes": [
        {
          "id": "string",
          "position": 0
        }
      ],
      "excludes": [
        {
          "id": "string"
        }
      ],
      "filter_by": "string",
      "remove_matched_tokens": true,
      "metadata": {},
      "sort_by": "string",
      "replace_query": "string",
      "filter_curated_hits": true,
      "effective_from_ts": 0,
      "effective_to_ts": 0,
      "stop_processing": true,
      "id": "string"
    }
  ],
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CurationItemCreateSchema](#schemacurationitemcreateschema)]|true|none|Array of curation items|
|description|string|false|none|Optional description for the curation set|

<h2 id="tocS_CurationSetSchema">CurationSetSchema</h2>
<!-- backwards compatibility -->
<a id="schemacurationsetschema"></a>
<a id="schema_CurationSetSchema"></a>
<a id="tocScurationsetschema"></a>
<a id="tocscurationsetschema"></a>

```json
{
  "items": [
    {
      "rule": {
        "tags": [
          "string"
        ],
        "query": "string",
        "match": "exact",
        "filter_by": "string"
      },
      "includes": [
        {
          "id": "string",
          "position": 0
        }
      ],
      "excludes": [
        {
          "id": "string"
        }
      ],
      "filter_by": "string",
      "remove_matched_tokens": true,
      "metadata": {},
      "sort_by": "string",
      "replace_query": "string",
      "filter_curated_hits": true,
      "effective_from_ts": 0,
      "effective_to_ts": 0,
      "stop_processing": true,
      "id": "string"
    }
  ],
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CurationItemCreateSchema](#schemacurationitemcreateschema)]|true|none|Array of curation items|
|description|string|false|none|Optional description for the curation set|
|name|string|true|none|none|

<h2 id="tocS_CurationRule">CurationRule</h2>
<!-- backwards compatibility -->
<a id="schemacurationrule"></a>
<a id="schema_CurationRule"></a>
<a id="tocScurationrule"></a>
<a id="tocscurationrule"></a>

```json
{
  "tags": [
    "string"
  ],
  "query": "string",
  "match": "exact",
  "filter_by": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|false|none|List of tag values to associate with this curation rule.|
|query|string|false|none|Indicates what search queries should be curated|
|match|string|false|none|Indicates whether the match on the query term should be `exact` or `contains`. If we want to match all queries that contained the word `apple`, we will use the `contains` match instead.<br>|
|filter_by|string|false|none|Indicates that the curation should apply when the filter_by parameter in a search query exactly matches the string specified here (including backticks, spaces, brackets, etc).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|match|exact|
|match|contains|

<h2 id="tocS_CurationInclude">CurationInclude</h2>
<!-- backwards compatibility -->
<a id="schemacurationinclude"></a>
<a id="schema_CurationInclude"></a>
<a id="tocScurationinclude"></a>
<a id="tocscurationinclude"></a>

```json
{
  "id": "string",
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|document id that should be included|
|position|integer|true|none|position number where document should be included in the search results|

<h2 id="tocS_CurationExclude">CurationExclude</h2>
<!-- backwards compatibility -->
<a id="schemacurationexclude"></a>
<a id="schema_CurationExclude"></a>
<a id="tocScurationexclude"></a>
<a id="tocscurationexclude"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|document id that should be excluded from the search results.|

<h2 id="tocS_CurationSetDeleteSchema">CurationSetDeleteSchema</h2>
<!-- backwards compatibility -->
<a id="schemacurationsetdeleteschema"></a>
<a id="schema_CurationSetDeleteSchema"></a>
<a id="tocScurationsetdeleteschema"></a>
<a id="tocscurationsetdeleteschema"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the deleted curation set|

<h2 id="tocS_CurationItemDeleteSchema">CurationItemDeleteSchema</h2>
<!-- backwards compatibility -->
<a id="schemacurationitemdeleteschema"></a>
<a id="schema_CurationItemDeleteSchema"></a>
<a id="tocScurationitemdeleteschema"></a>
<a id="tocscurationitemdeleteschema"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the deleted curation item|
