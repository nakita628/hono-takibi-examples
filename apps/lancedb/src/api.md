<h1 id="lancedb-rest-api">LanceDB REST API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The LanceDB REST API is a RESTful API that allows users to access and modify data stored in LanceDB Enterprise or LanceDB Cloud (legacy).
Table actions are considered temporary resource creations and all use POST method.

Base URLs:

* <a href="https://.us-east-1.api.lancedb.com">https://.us-east-1.api.lancedb.com</a> - LanceDB Cloud (legacy) REST endpoint. For LanceDB Enterprise, use your deployment's endpoint.

Email: <a href="mailto:contact@lancedb.com">LanceDB support</a> 
Web: <a href="https://lancedb.com">LanceDB support</a> 

# Authentication

* API Key (key_auth)
    - Parameter Name: **x-api-key**, in: header.

<h1 id="lancedb-rest-api-tables">Tables</h1>

## List Tables

<a id="opIdlistTables"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/ \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /v1/table/`

List tables, optionally, with pagination.

<h3 id="list-tables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limits the number of items to return.|
|page_token|query|string|false|Specifies the starting position of the next query|

> Example responses

> 200 Response

```json
{
  "tables": [
    "string"
  ],
  "page_token": "string"
}
```

<h3 id="list-tables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned a list of tables in the DB|Inline|
|400|Bad Request|Invalid request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-tables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tables|[string]|false|none|none|
|page_token|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Create a new table

<a id="opIdcreateTable"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/create/ \
  -X POST \
  -H 'Content-Type: application/vnd.apache.arrow.stream' \
  -H "x-api-key: ${API_KEY}" \
  --data-binary '@/path/to/file'
```

`POST /v1/table/{name}/create/`

Create a new table

<h3 id="create-a-new-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|body|body|string(binary)|true|Arrow IPC stream buffer|

<h3 id="create-a-new-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Table successfully created|None|
|400|Bad Request|Invalid request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Drop a table

<a id="opIddropTable"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/drop/ \
  -X POST \
  -H 'Content-Type: application/vnd.apache.arrow.stream' \
  -H "x-api-key: ${API_KEY}" \
  --data-binary '@/path/to/file'
```

`POST /v1/table/{name}/drop/`

Drop a table

<h3 id="drop-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|body|body|string(binary)|true|Arrow IPC stream buffer|

<h3 id="drop-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Drop successful|None|
|401|Unauthorized|Unauthorized|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Describe a table

<a id="opIddescribeTable"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/describe/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /v1/table/{name}/describe/`

Describe a table and return Table Information.

<h3 id="describe-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|

> Example responses

> 200 Response

```json
{
  "table": "string",
  "version": 0,
  "schema": "string",
  "stats": {}
}
```

<h3 id="describe-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Table information|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="describe-a-table-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|false|none|none|
|version|integer|false|none|none|
|schema|string|false|none|none|
|stats|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## List indexes of a table

<a id="opIdlistIndexes"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/index/list/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /v1/table/{name}/index/list/`

List indexes of a table

<h3 id="list-indexes-of-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|

> Example responses

> 200 Response

```json
{
  "indexes": [
    {
      "columns": [
        "string"
      ],
      "index_name": "string",
      "index_uuid": "string"
    }
  ]
}
```

<h3 id="list-indexes-of-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available list of indexes on the table.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-indexes-of-a-table-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexes|[object]|false|none|none|
|» columns|[string]|false|none|none|
|» index_name|string|false|none|none|
|» index_uuid|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Create vector index on a Table

<a id="opIdcreateIndex"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/create_index/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "column": "string",
    "name": "string",
    "replace": true,
    "metric_type": "string",
    "index_type": "string",
    "custom_stop_words": [
      "string"
    ]
  }'
```

`POST /v1/table/{name}/create_index/`

Create vector index on a Table

> Body parameter

```json
{
  "column": "string",
  "name": "string",
  "replace": true,
  "metric_type": "string",
  "index_type": "string",
  "custom_stop_words": [
    "string"
  ]
}
```

<h3 id="create-vector-index-on-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|body|body|object|true|none|
|» column|body|string|false|none|
|» name|body|string|false|Optional name for the created index.|
|» replace|body|boolean|false|Whether to replace an existing index with the same resolved<br>name. Defaults to true.<br>|
|» metric_type|body|string|false|The metric type to use for the index. l2, Cosine, Dot are supported.<br>|
|» index_type|body|string|false|none|
|» custom_stop_words|body|[string]|false|The custom stop-word list for an FTS index. A non-null<br>array replaces the language's built-in stop-word list and is only<br>applied when remove_stop_words is enabled. Null uses the built-in<br>language list, while an empty array explicitly replaces it with no<br>stop words.<br>|

<h3 id="create-vector-index-on-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index successfully created|None|
|400|Bad Request|Invalid request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Create a scalar index on a table

<a id="opIdcreateScalarIndex"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/create_scalar_index/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "column": "string",
    "index_type": "string"
  }'
```

`POST /v1/table/{name}/create_scalar_index/`

Create a scalar index on a table

> Body parameter

```json
{
  "column": "string",
  "index_type": "string"
}
```

<h3 id="create-a-scalar-index-on-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|body|body|object|true|none|
|» column|body|string|false|none|
|» index_type|body|string|false|none|

<h3 id="create-a-scalar-index-on-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scalar Index successfully created|None|
|400|Bad Request|Invalid request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Drop an index from the table

<a id="opIddropIndex"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/index/string/drop/ \
  -X POST \
  -H "x-api-key: ${API_KEY}"
```

`POST /v1/table/{name}/index/{index_name}/drop/`

Drop an index from the table

<h3 id="drop-an-index-from-the-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|index_name|path|string|true|name of the index|

<h3 id="drop-an-index-from-the-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index successfully dropped|None|
|400|Bad Request|Invalid request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

<h1 id="lancedb-rest-api-data">Data</h1>

## Vector Query

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/query/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "vector": null,
    "vector_column": "string",
    "prefilter": true,
    "k": 0,
    "distance_type": "string",
    "bypass_vector_index": true,
    "filter": "string",
    "columns": [
      "string"
    ],
    "nprobe": 0,
    "refine_factor": null,
    "fast_search": false
  }'
```

`POST /v1/table/{name}/query/`

Vector Query

> Body parameter

```json
{
  "vector": null,
  "vector_column": "string",
  "prefilter": true,
  "k": 0,
  "distance_type": "string",
  "bypass_vector_index": true,
  "filter": "string",
  "columns": [
    "string"
  ],
  "nprobe": 0,
  "refine_factor": null,
  "fast_search": false
}
```

<h3 id="vector-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|body|body|object|true|none|
|» vector|body|FixedSizeList|true|The targeted vector to search for. Required.<br>|
|» vector_column|body|string|false|The column to query, it can be inferred from the schema if there is only one vector column.<br>|
|» prefilter|body|boolean|false|Whether to prefilter the data. Optional.<br>|
|» k|body|integer|false|The number of search results to return. Default is 10.<br>|
|» distance_type|body|string|false|The distance metric to use for search. l2, Cosine, Dot and Hamming are supported. Default is l2.<br>|
|» bypass_vector_index|body|boolean|false|Whether to bypass vector index. Optional.<br>|
|» filter|body|string|false|A filter expression that specifies the rows to query. Optional.<br>|
|» columns|body|[string]|false|The columns to return. Optional.<br>|
|» nprobe|body|integer|false|The number of probes to use for search. Optional.<br>|
|» refine_factor|body|integer|false|The refine factor to use for search. Optional.<br>|
|» fast_search|body|boolean|false|Whether to use fast search. Optional.<br>|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": 0,
      "selected_col_1_to_return": null,
      "selected_col_n_to_return": null,
      "_distance": null
    }
  ]
}
```

<h3 id="vector-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top k results if query is successfully executed|Inline|
|400|Bad Request|Invalid request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="vector-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|none|
|» id|integer|false|none|none|
|» selected_col_1_to_return|col_1_type|false|none|none|
|» selected_col_n_to_return|col_n_type|false|none|none|
|» _distance|float|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Insert new data.

<a id="opIdinsertData"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/insert/ \
  -X POST \
  -H 'Content-Type: application/vnd.apache.arrow.stream' \
  -H "x-api-key: ${API_KEY}" \
  --data-binary '@/path/to/file'
```

`POST /v1/table/{name}/insert/`

Insert new data to the Table.

<h3 id="insert-new-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|body|body|string(binary)|true|Arrow IPC stream buffer|

<h3 id="insert-new-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Insert successful|None|
|400|Bad Request|Invalid request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Merge Insert

<a id="opIdmergeInsert"></a>

> Code samples

```bash
curl 'https://db.lancedb.com/v1/table/string/merge_insert/?on=string' \
  -X POST \
  -H 'Content-Type: application/vnd.apache.arrow.stream' \
  -H "x-api-key: ${API_KEY}" \
  --data-binary '@/path/to/file'
```

`POST /v1/table/{name}/merge_insert/`

Create a "merge insert" operation This operation can add rows, update rows, and remove rows all in a single transaction. See python method `lancedb.table.Table.merge_insert` for examples.

<h3 id="merge-insert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|on|query|string|true|The column to use as the primary key for the merge operation.<br>|
|when_matched_update_all|query|boolean|false|Rows that exist in both the source table (new data) and<br>the target table (old data) will be updated, replacing<br>the old row with the corresponding matching row.<br>|
|when_matched_update_all_filt|query|string|false|If present then only rows that satisfy the filter expression will<br>be updated<br>|
|when_not_matched_insert_all|query|boolean|false|Rows that exist only in the source table (new data) will be<br>inserted into the target table (old data).<br>|
|when_not_matched_by_source_delete|query|boolean|false|Rows that exist only in the target table (old data) will be<br>deleted. An optional condition (`when_not_matched_by_source_delete_filt`)<br>can be provided to limit what data is deleted.<br>|
|when_not_matched_by_source_delete_filt|query|string|false|The filter expression that specifies the rows to delete.<br>|
|body|body|string(binary)|true|Arrow IPC stream buffer|

<h3 id="merge-insert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Merge Insert successful|None|
|400|Bad Request|Invalid request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>

## Delete rows from a table

<a id="opIddeleteData"></a>

> Code samples

```bash
curl https://db.lancedb.com/v1/table/string/delete/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "predicate": "string"
  }'
```

`POST /v1/table/{name}/delete/`

Delete rows from a table.

> Body parameter

```json
{
  "predicate": "string"
}
```

<h3 id="delete-rows-from-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of the table|
|body|body|object|true|none|
|» predicate|body|string|false|A filter expression that specifies the rows to delete.<br>|

<h3 id="delete-rows-from-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete successful|None|
|401|Unauthorized|Unauthorized|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
key_auth
</aside>
