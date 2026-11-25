<h1 id="manticore-search-client">Manticore Search Client v5.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Сlient for Manticore Search.

Base URLs:

* <a href="http://127.0.0.1:9308/">http://127.0.0.1:9308/</a> - Default Manticore Search HTTP

Email: <a href="mailto:info@manticoresearch.com">Manticore Software Ltd.</a> 
Web: <a href="https://manticoresearch.com/contact-us/">Manticore Software Ltd.</a> 
License: <a href="http://opensource.org/licenses/MIT">MIT</a>

<a href="https://manticoresearch.com/">Find out more about Manticore Search</a>

# Authentication

- HTTP Authentication, scheme: basic HTTP Basic authentication with a Manticore user name and password. Required for `POST /token` when authentication and authorization is enabled.

- HTTP Authentication, scheme: bearer Bearer authentication. The token is returned by the `POST /token` endpoint.

<h1 id="manticore-search-client-index">Index</h1>

Operations regarding adding, updating or deleting documents

## Bulk table operations

<a id="opIdbulk"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/bulk \
  -X POST \
  -H 'Content-Type: application/x-ndjson' \
  -H 'Accept: application/json' \
  -d 'string'
```

`POST /bulk`

Sends multiple operatons like inserts, updates, replaces or deletes. 
For each operation it's object must have same format as in their dedicated method. 
The method expects a raw string as the batch in NDJSON.
 Each operation object needs to be serialized to 
 JSON and separated by endline (\n). 
 
  An example of raw input:
  
  ```
  {"insert": {"table": "movies", "doc": {"plot": "A secret team goes to North Pole", "rating": 9.5, "language": [2, 3], "title": "This is an older movie", "lon": 51.99, "meta": {"keywords":["travel","ice"],"genre":["adventure"]}, "year": 1950, "lat": 60.4, "advise": "PG-13"}}}
  \n
  {"delete": {"table": "movies","id":700}}
  ```
  
  Responds with an object telling whenever any errors occured and an array with status for each operation:
  
  ```
  {
    'items':
    [
      {
        'update':{'table':'products','id':1,'result':'updated'}
      },
      {
        'update':{'table':'products','id':2,'result':'updated'}
      }
    ],
    'errors':false
  }
  ```


<a href="https://manual.manticoresearch.com/Updating_documents/UPDATE">External documentation</a>

> Body parameter

```text
string
```

<h3 id="bulk-table-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {}
  ],
  "errors": true,
  "error": "string",
  "current_line": 0,
  "skipped_lines": 0
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="bulk-table-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|item updated|[bulkResponse](#schemabulkresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

## Delete a document in a table

<a id="opIddelete"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "table": "test",
    "query": {
      "match": {
        "title": "apple"
      }
    }
  }'
```

`POST /delete`

Delete one or several documents.
The method has 2 ways of deleting: either by id, in case only one document is deleted or by using a  match query, in which case multiple documents can be delete .
Example of input to delete by id:

  ```
  {'table':'movies','id':100}
  ```

Example of input to delete using a query:

  ```
  {
    'table':'movies',
    'query':
    {
      'bool':
      {
        'must':
        [
          {'query_string':'new movie'}
        ]
      }
    }
  }
  ```

The match query has same syntax as in for searching.
Responds with an object telling how many documents got deleted: 

  ```
  {'table':'products','updated':1}
  ```


<a href="https://manual.manticoresearch.com/Updating_documents/UPDATE">External documentation</a>

> Body parameter

```json
{
  "table": "test",
  "query": {
    "match": {
      "title": "apple"
    }
  }
}
```

<h3 id="delete-a-document-in-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[deleteDocumentRequest](#schemadeletedocumentrequest)|true|none|
|» table|body|string|true|Table name|
|» cluster|body|string|false|Cluster name|
|» id|body|object|false|The ID of document for deletion|
|» query|body|object|false|Defines the criteria to match documents for deletion|

> Example responses

> 200 Response

```json
{
  "table": "test",
  "deleted": 29
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="delete-a-document-in-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|item updated|[deleteResponse](#schemadeleteresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

## Create a new document in a table

<a id="opIdinsert"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/insert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "table": "test",
    "id": 1,
    "doc": {
      "title": "sample title",
      "gid": 10
    }
  }'
```

`POST /insert`

Insert a document. 
Expects an object like:
 
  ```
  {
    'table':'movies',
    'id':701,
    'doc':
    {
      'title':'This is an old movie',
      'plot':'A secret team goes to North Pole',
      'year':1950,
      'rating':9.5,
      'lat':60.4,
      'lon':51.99,
      'advise':'PG-13',
      'meta':'{"keywords":{"travel","ice"},"genre":{"adventure"}}',
      'language':[2,3]
    }
  }
  ```
 
The document id can also be missing, in which case an autogenerated one will be used:
         
  ```
  {
    'table':'movies',
    'doc':
    {
      'title':'This is a new movie',
      'plot':'A secret team goes to North Pole',
      'year':2020,
      'rating':9.5,
      'lat':60.4,
      'lon':51.99,
      'advise':'PG-13',
      'meta':'{"keywords":{"travel","ice"},"genre":{"adventure"}}',
      'language':[2,3]
    }
  }
  ```
 
It responds with an object in format:
  
  ```
  {'table':'products','id':701,'created':true,'result':'created','status':201}
  ```


<a href="https://manual.manticoresearch.com/Adding_documents_to_a_table/Adding_documents_to_a_real-time_table#Adding-documents-to-a-real-time-table">External documentation</a>

> Body parameter

```json
{
  "table": "test",
  "id": 1,
  "doc": {
    "title": "sample title",
    "gid": 10
  }
}
```

<h3 id="create-a-new-document-in-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertDocumentRequest](#schemainsertdocumentrequest)|true|none|
|» table|body|string|true|Name of the table to insert the document into|
|» cluster|body|string|false|Name of the cluster to insert the document into|
|» id|body|object|false|Document ID. If not provided, an ID will be auto-generated<br>|
|» doc|body|object|true|Object containing document data<br>|

> Example responses

> 200 Response

```json
{
  "table": "test",
  "id": 1,
  "result": "created",
  "created": true,
  "status": 201
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="create-a-new-document-in-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[successResponse](#schemasuccessresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

## Replace new document in a table

<a id="opIdreplace"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/replace \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "table": "test",
    "id": 1,
    "doc": {
      "title": "updated title",
      "gid": 15
    }
  }'
```

`POST /replace`

Replace an existing document. Input has same format as `insert` operation.
Responds with an object in format:

  ```
  {'table':'products','id':1,'created':false,'result':'updated','status':200}
  ```


<a href="https://manual.manticoresearch.com/Adding_documents_to_a_table/Adding_documents_to_a_real-time_table#Adding-documents-to-a-real-time-table">External documentation</a>

> Body parameter

```json
{
  "table": "test",
  "id": 1,
  "doc": {
    "title": "updated title",
    "gid": 15
  }
}
```

<h3 id="replace-new-document-in-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertDocumentRequest](#schemainsertdocumentrequest)|true|none|
|» table|body|string|true|Name of the table to insert the document into|
|» cluster|body|string|false|Name of the cluster to insert the document into|
|» id|body|object|false|Document ID. If not provided, an ID will be auto-generated<br>|
|» doc|body|object|true|Object containing document data<br>|

> Example responses

> 200 Response

```json
{
  "table": "test",
  "id": 1,
  "result": "created",
  "created": true,
  "status": 201
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="replace-new-document-in-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[successResponse](#schemasuccessresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

## Update a document in a table

<a id="opIdupdate"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "table": "test",
    "doc": {
      "gid": 20
    },
    "query": {
      "equals": {
        "cat_id": 2
      }
    }
  }'
```

`POST /update`

Update one or several documents.
The update can be made by passing the id or by using a match query in case multiple documents can be updated.  For example update a document using document id:

  ```
  {'table':'movies','doc':{'rating':9.49},'id':100}
  ```

And update by using a match query:

  ```
  {
    'table':'movies',
    'doc':{'rating':9.49},
    'query':
    {
      'bool':
      {
        'must':
        [
          {'query_string':'new movie'}
        ]
      }
    }
  }
  ``` 

The match query has same syntax as for searching.
Responds with an object that tells how many documents where updated in format: 

  ```
  {'table':'products','updated':1}
  ```


<a href="https://manual.manticoresearch.com/Updating_documents/UPDATE">External documentation</a>

> Body parameter

```json
{
  "table": "test",
  "doc": {
    "gid": 20
  },
  "query": {
    "equals": {
      "cat_id": 2
    }
  }
}
```

<h3 id="update-a-document-in-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[updateDocumentRequest](#schemaupdatedocumentrequest)|true|none|
|» table|body|string|true|Name of the document table|
|» cluster|body|string|false|Name of the document cluster|
|» doc|body|object|true|Object containing the document fields to update|
|» id|body|object|false|Document ID|
|» query|body|any \| [queryFilter](#schemaqueryfilter)|false|Object defining conditions to perform the updates|
|» » *oneOf*|body|any|false|none|
|» » *oneOf*|body|[queryFilter](#schemaqueryfilter)|false|Object used to apply various conditions, such as full-text matching or attribute filtering, to a search query|

> Example responses

> 200 Response

```json
{
  "table": "test",
  "updated": 29
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="update-a-document-in-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|item updated|[updateResponse](#schemaupdateresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

## Partially replaces a document in a table

<a id="opIdpartial_replace"></a>

> Code samples

```bash
curl 'http://127.0.0.1:9308/string/_update/{id}' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "doc": {
      "price": 20
    }
  }'
```

`POST /{table}/_update/{id}`

Partially replaces a document with given id in a table
Responds with an object of the following format: 

  ```
  {'table':'products','updated':1}
  ```


<a href="https://manual.manticoresearch.com/Updating_documents/REPLACE#JSON-REPLACE">External documentation</a>

> Body parameter

```json
{
  "doc": {
    "price": 20
  }
}
```

<h3 id="partially-replaces-a-document-in-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|table|path|string|true|Name of the percolate table|
|id|path|object|true|Id of the document to replace|
|body|body|[replaceDocumentRequest](#schemareplacedocumentrequest)|true|none|
|» doc|body|object|true|Object containing the new document data to replace the existing one.|

> Example responses

> 200 Response

```json
{
  "table": "test",
  "updated": 29
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="partially-replaces-a-document-in-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|item updated|[updateResponse](#schemaupdateresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

<h1 id="manticore-search-client-search">Search</h1>

Operations about performing searches over tables

## Performs a search on a table

<a id="opIdsearch"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    "'\''request=SearchRequest(table=\"test\",query=Query(query_string=\"abc\"))'\''"
  ]'
```

`POST /search`


The method expects an object with the following mandatory properties:
* the name of the table to search
* the match query object
For details, see the documentation on [**SearchRequest**](SearchRequest.md)
The method returns an object with the following properties:
- took: the time taken to execute the search query. - timed_out: a boolean indicating whether the query timed out. - hits: an object with the following properties:
   - total: the total number of hits found.
   - hits: an array of hit objects, where each hit object represents a matched document. Each hit object has the following properties:
     - _id: the ID of the matched document.
     - _score: the score of the matched document.
     - _source: the source data of the matched document.

In addition, if profiling is enabled, the response will include an additional array with profiling information attached. Also, if pagination is enabled, the response will include an additional 'scroll' property with a scroll token to use for pagination
Here is an example search response:

  ```
  {
    'took':10,
    'timed_out':false,
    'hits':
    {
      'total':2,
      'hits':
      [
        {'_id':'1','_score':1,'_source':{'gid':11}},
        {'_id':'2','_score':1,'_source':{'gid':12}}
      ]
    }
  }
  ```

For conversational search, include a `chat` object instead of `table` and `query`. The response then includes the optional conversational fields on `searchResponse` (`conversation_uuid`, `user_query`, `search_query`, `response`, `sources`).
For more information about the match query syntax and additional parameters that can be added to request and response, please see the documentation [here](https://manual.manticoresearch.com/Searching/Full_text_matching/Basic_usage#HTTP-JSON).


<a href="https://manual.manticoresearch.com/Searching/Full_text_matching/Basic_usage#HTTP-JSON">External documentation</a>

> Body parameter

```json
[
  "'request=SearchRequest(table=\"test\",query=Query(query_string=\"abc\"))'"
]
```

<h3 id="performs-a-search-on-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[searchRequest](#schemasearchrequest)|true|none|
|» table|body|string|false|The table to perform the search on|
|» chat|body|[chat](#schemachat)|false|Conversational search request handled by Manticore Buddy via `CALL CHAT`. When this object is set, the `/search` endpoint answers through an LLM using KNN-retrieved rows as context instead of returning regular search hits.<br>Required fields are `query`, `table`, and `model_name`. Chat model management (`CREATE CHAT MODEL`, etc.) remains SQL-only.<br>For more information see [Conversational search](https://manual.manticoresearch.com/Searching/Conversational_search#HTTP-JSON-syntax)<br>|
|» query|body|[searchQuery](#schemasearchquery)|false|Defines a query structure for performing search operations|
|» join|body|[[join](#schemajoin)]|false|Join clause to combine search data from multiple tables|
|» highlight|body|[highlight](#schemahighlight)|false|none|
|» limit|body|integer|false|Maximum number of results to return|
|» knn|body|[knn](#schemaknn)|false|K-nearest neighbor search settings. Pass a single `knn` object or an array of objects for multi-vector search.<br>|
|» hybrid|body|[hybrid](#schemahybrid)|false|Perform hybrid search on tables with auto-embeddings. Runs full-text and vector search and fuses results with RRF.  For more information see [Hybrid search](https://manual.manticoresearch.com/Searching/Hybrid_search#Simplified-JSON-syntax:-hybrid)<br>|
|» facet_filter_mode|body|[facetFilterMode](#schemafacetfiltermode)|false|Controls how facets inherit attribute filters from the main query. [Faceted search](https://manual.manticoresearch.com/Searching/Faceted_search#HTTP-JSON)<br>|
|» aggs|body|object|false|Defines aggregation settings for grouping results|
|» » **additionalProperties**|body|[aggregation](#schemaaggregation)|false|none|
|» expressions|body|object|false|Expressions to calculate additional values for the result. Simpler alternative to `script_fields`; expression names must be lowercase.<br>|
|» » **additionalProperties**|body|string|false|none|
|» script_fields|body|object|false|Named expressions computed at search time. Each value defines an inline script whose result is stored under the field name. For more information see [Expressions](https://manual.manticoresearch.com/Searching/Expressions#script_fields)<br>|
|» » **additionalProperties**|body|[scriptField](#schemascriptfield)|false|Named expression computed at search time|
|» max_matches|body|integer|false|Maximum number of matches allowed in the result|
|» offset|body|integer|false|Starting point for pagination of the result|
|» options|body|object|false|Additional search options|
|» profile|body|boolean|false|Enable or disable profiling of the search request|
|» sort|body|any|false|Sorting criteria for the search results|
|» _source|body|any|false|Specify which fields to include or exclude in the response|
|» track_scores|body|boolean|false|Enable or disable result weight calculation used for sorting|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» facet_filter_mode|strict|
|» facet_filter_mode|auto|
|» facet_filter_mode|max|

> Example responses

> 200 Response

```json
{
  "took": 0,
  "timed_out": true,
  "aggregations": {
    "sizes": {
      "buckets": [
        {
          "key": "small",
          "doc_count": 1,
          "status": "selected"
        },
        {
          "key": "large",
          "doc_count": 1,
          "status": "available"
        }
      ]
    },
    "colors": {
      "buckets": [
        {
          "key": 10,
          "doc_count": 1019
        },
        {
          "key": 9,
          "doc_count": 954,
          "status": "unavailable"
        }
      ]
    },
    "avg_price": {
      "value": 30.5
    },
    "price_percentiles": {
      "values": [
        {
          "key": 50,
          "value": 30.5,
          "value_as_string": "30.5"
        }
      ]
    }
  },
  "hits": {
    "total": 2,
    "hits": [
      {
        "_id": 1,
        "_score": 1,
        "_source": {
          "gid": 11
        }
      },
      {
        "_id": 2,
        "_score": 1,
        "_source": {
          "gid": 20
        }
      }
    ]
  },
  "profile": {},
  "scroll": "string",
  "warning": {},
  "conversation_uuid": "docs-chat-001",
  "user_query": "What is vector search?",
  "search_query": "vector search, embeddings, similarity search",
  "response": "Vector search finds similar items by comparing embeddings...",
  "sources": "[{\"id\":1,\"title\":\"Vector Search\",\"content\":\"...\",\"knn_dist\":0.12}]"
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="performs-a-search-on-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok. Returns `searchResponse`. For conversational search requests that include a `chat` object, the optional conversational fields are also set.<br>|[searchResponse](#schemasearchresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

## Performs an autocomplete search on a table

<a id="opIdautocomplete"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/autocomplete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    "'\''request=AutocompleteRequest(table=\"test\",query=\"abc\")'\''"
  ]'
```

`POST /autocomplete`


The method expects an object with the following mandatory properties:
* the name of the table to search
* the query string to autocomplete
For details, see the documentation on [**Autocomplete**](Autocomplete.md)
An example: ``` {
  "table":"table_name",
  "query":"query_beginning"
}         ```
An example of the method's response:

 ```
 [
   {
     "total": 3,
     "error": "",
     "warning": "",
     "columns": [
       {
         "query": {
           "type": "string"
         }
       }
     ],
     "data": [
       {
         "query": "hello"
       },
       {
         "query": "helio"
       },
       {
         "query": "hell"
       }
     ]
   }
 ] 
 ```

For more detailed information about the autocomplete queries, please refer to the documentation [here](https://manual.manticoresearch.com/Searching/Autocomplete).


<a href="https://manual.manticoresearch.com/dev/Searching/Autocomplete?client=JSON">External documentation</a>

> Body parameter

```json
[
  "'request=AutocompleteRequest(table=\"test\",query=\"abc\")'"
]
```

<h3 id="performs-an-autocomplete-search-on-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[autocompleteRequest](#schemaautocompleterequest)|true|none|
|» table|body|string|true|The table to perform the search on|
|» query|body|string|true|The beginning of the string to autocomplete|
|» options|body|object|false|Autocomplete options<br>  - layouts: A comma-separated string of keyboard layout codes to validate and check for spell correction. Available options - us, ru, ua, se, pt, no, it, gr, uk, fr, es, dk, de, ch, br, bg, be. By default, all are enabled.<br>  - fuzziness: (0,1 or 2) Maximum Levenshtein distance for finding typos. Set to 0 to disable fuzzy matching. Default is 2<br>  - prepend: true/false If true, adds an asterisk before the last word for prefix expansion (e.g., *word )<br>  - append:  true/false If true, adds an asterisk after the last word for prefix expansion (e.g., word* )<br>  - expansion_len: Number of characters to expand in the last word. Default is 10.<br>|

> Example responses

> 200 Response

```json
[
  {}
]
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="performs-an-autocomplete-search-on-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[sqlRawResponse](#schemasqlrawresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

## Perform reverse search on a percolate table

<a id="opIdpercolate"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/pq/string/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": {
      "percolate": {
        "document": {
          "title": "some text to match"
        }
      }
    }
  }'
```

`POST /pq/{table}/search`

Performs a percolate search.
This method must be used only on percolate tables.
Expects two parameters: the table name and an object with array of documents to be tested.
An example of the documents object: ```
  {
    "query" {
      "percolate": {
        "document": {
          "content":"sample content"
        }
      }
    }
  }
```
Responds with an object with matched stored queries:  ```
  {
    'timed_out':false,
    'hits': {
      'total':2,
      'max_score':1,
      'hits': [
        {
          'table':'idx_pq_1',
          '_type':'doc',
          '_id':'2',
          '_score':'1',
          '_source': {
            'query': {
              'match':{'title':'some'}
            }
          }
        },
        {
          'table':'idx_pq_1',
          '_type':'doc',
          '_id':'5',
          '_score':'1',
          '_source': {
            'query': {
              'ql':'some | none'
            }
          }
        }
      ]
    }
  }
```


<a href="https://manual.manticoresearch.com/Updating_documents/UPDATE">External documentation</a>

> Body parameter

```json
{
  "query": {
    "percolate": {
      "document": {
        "title": "some text to match"
      }
    }
  }
}
```

<h3 id="perform-reverse-search-on-a-percolate-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|table|path|string|true|Name of the percolate table|
|body|body|[percolateRequest](#schemapercolaterequest)|true|none|
|» query|body|object|true|none|
|» » percolate|body|object|true|Object representing the document to percolate|

> Example responses

> 200 Response

```json
{
  "took": 0,
  "timed_out": true,
  "aggregations": {
    "sizes": {
      "buckets": [
        {
          "key": "small",
          "doc_count": 1,
          "status": "selected"
        },
        {
          "key": "large",
          "doc_count": 1,
          "status": "available"
        }
      ]
    },
    "colors": {
      "buckets": [
        {
          "key": 10,
          "doc_count": 1019
        },
        {
          "key": 9,
          "doc_count": 954,
          "status": "unavailable"
        }
      ]
    },
    "avg_price": {
      "value": 30.5
    },
    "price_percentiles": {
      "values": [
        {
          "key": 50,
          "value": 30.5,
          "value_as_string": "30.5"
        }
      ]
    }
  },
  "hits": {
    "total": 2,
    "hits": [
      {
        "_id": 1,
        "_score": 1,
        "_source": {
          "gid": 11
        }
      },
      {
        "_id": 2,
        "_score": 1,
        "_source": {
          "gid": 20
        }
      }
    ]
  },
  "profile": {},
  "scroll": "string",
  "warning": {},
  "conversation_uuid": "docs-chat-001",
  "user_query": "What is vector search?",
  "search_query": "vector search, embeddings, similarity search",
  "response": "Vector search finds similar items by comparing embeddings...",
  "sources": "[{\"id\":1,\"title\":\"Vector Search\",\"content\":\"...\",\"knn_dist\":0.12}]"
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="perform-reverse-search-on-a-percolate-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|items found|[searchResponse](#schemasearchresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

<h1 id="manticore-search-client-utils">Utils</h1>

Various operations

## Perform SQL requests

<a id="opIdsql"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/sql \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -d 'SHOW TABLES'
```

`POST /sql`

Run a query in SQL format.
Expects a query string passed through `body` parameter and optional `raw_response` parameter that defines a format of response.
`raw_response` can be set to `False` for Select queries only, e.g., `SELECT * FROM mytable`
The query string must stay as it is, no URL encoding is needed.
The response object depends on the query executed. In select mode the response has same format as `/search` operation.


<a href="https://manual.manticoresearch.com/Connecting_to_the_server/HTTP#sql-api">External documentation</a>

> Body parameter

```text
SHOW TABLES
```

<h3 id="perform-sql-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|raw_response|query|boolean|false|Optional parameter, defines a format of response. Can be set to `False` for Select only queries and set to `True` for any type of queries. Default value is 'True'.<br>|
|body|body|string|true|A query parameter string.<br>|

> Example responses

> 200 Response

```json
[
  {
    "total": 0,
    "error": null
  }
]
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="perform-sql-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|In case of SELECT-only in mode none the response schema is the same as of `search`.<br>In case of `mode=raw` or `raw_response=true` the response depends on the query executed.<br>|[sqlResponse](#schemasqlresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth, bearerAuth
</aside>

## Create or rotate a bearer token

<a id="opIdtoken"></a>

> Code samples

```bash
curl http://127.0.0.1:9308/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{}'
```

`POST /token`

Create or rotate a bearer token for the authenticated HTTP user.
Requires HTTP Basic authentication with a Manticore user name and password. The endpoint returns the raw token.
Example:

  ```
  curl -u admin:password -X POST http://127.0.0.1:9308/token -d "{}"
  ```


<a href="https://manual.manticoresearch.com/Security/Authentication_and_authorization">External documentation</a>

> Body parameter

```json
{}
```

<h3 id="create-or-rotate-a-bearer-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tokenRequest](#schematokenrequest)|true|none|

> Example responses

> 200 Response

```json
"115za1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2"
```

> 401 Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

> default Response

```json
{
  "status": 500,
  "error": "an error occured"
}
```

<h3 id="create-or-rotate-a-bearer-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bearer token created or rotated successfully|[tokenResponse](#schematokenresponse)|
|401|Unauthorized|Missing or invalid credentials|[errorResponse](#schemaerrorresponse)|
|default|Default|error|[errorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_aggCompositeTerm">aggCompositeTerm</h2>
<!-- backwards compatibility -->
<a id="schemaaggcompositeterm"></a>
<a id="schema_aggCompositeTerm"></a>
<a id="tocSaggcompositeterm"></a>
<a id="tocsaggcompositeterm"></a>

```json
{
  "field": "field1"
}
```

Object representing a term to be used in composite aggregation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Name of field to operate with|

<h2 id="tocS_aggCompositeSource">aggCompositeSource</h2>
<!-- backwards compatibility -->
<a id="schemaaggcompositesource"></a>
<a id="schema_aggCompositeSource"></a>
<a id="tocSaggcompositesource"></a>
<a id="tocsaggcompositesource"></a>

```json
{
  "terms": {
    "field": "field1"
  }
}
```

Object containing terms used for composite aggregation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terms|[aggCompositeTerm](#schemaaggcompositeterm)|true|none|Object representing a term to be used in composite aggregation.|

<h2 id="tocS_aggHistogram">aggHistogram</h2>
<!-- backwards compatibility -->
<a id="schemaagghistogram"></a>
<a id="schema_aggHistogram"></a>
<a id="tocSagghistogram"></a>
<a id="tocsagghistogram"></a>

```json
{
  "field": "field",
  "interval": 10,
  "offset": 1,
  "keyed": true
}
```

Object to use histograms in aggregation, i.e., grouping search results by histogram values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Field to group by|
|interval|integer|true|none|Interval of the histogram values|
|offset|integer|false|none|Offset of the histogram values. Default value is 0.|
|keyed|boolean|false|none|Flag that defines if a search response will be a dictionary with the bucket keys. Default value is false.|

<h2 id="tocS_aggDateHistogram">aggDateHistogram</h2>
<!-- backwards compatibility -->
<a id="schemaaggdatehistogram"></a>
<a id="schema_aggDateHistogram"></a>
<a id="tocSaggdatehistogram"></a>
<a id="tocsaggdatehistogram"></a>

```json
{
  "field": "field",
  "calendar_interval": 10,
  "offset": 1,
  "keyed": true
}
```

Object to use histograms in aggregation, i.e., grouping search results by histogram values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Field to group by|
|calendar_interval|integer|true|none|Interval of the histogram values|
|offset|integer|false|none|Offset of the histogram values. Default value is 0.|
|keyed|boolean|false|none|Flag that defines if a search response will be a dictionary with the bucket keys. Default value is false.|

<h2 id="tocS_range">range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "from": null,
  "to": null
}
```

An aggregation range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|object|false|none|Lower bound (inclusive). Numeric for `range`; date math expression for `date_range`.<br>|
|to|object|false|none|Upper bound (exclusive). Numeric for `range`; date math expression for `date_range`.<br>|

<h2 id="tocS_aggRange">aggRange</h2>
<!-- backwards compatibility -->
<a id="schemaaggrange"></a>
<a id="schema_aggRange"></a>
<a id="tocSaggrange"></a>
<a id="tocsaggrange"></a>

```json
{
  "field": "price",
  "ranges": [
    {
      "from": null,
      "to": null
    }
  ],
  "keyed": true
}
```

Group documents into custom numeric or date ranges. Use with the `range` or `date_range` aggregation type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Attribute to group by|
|ranges|[[range](#schemarange)]|true|none|Ordered list of ranges|
|keyed|boolean|false|none|Return buckets as an object keyed by range label when true, or as an array when false. Default is false.<br>|

<h2 id="tocS_aggComposite">aggComposite</h2>
<!-- backwards compatibility -->
<a id="schemaaggcomposite"></a>
<a id="schema_aggComposite"></a>
<a id="tocSaggcomposite"></a>
<a id="tocsaggcomposite"></a>

```json
{
  "size": 1000,
  "sources": [
    {
      "property1": {
        "terms": {
          "field": "field1"
        }
      },
      "property2": {
        "terms": {
          "field": "field1"
        }
      }
    }
  ]
}
```

Object to perform composite aggregation, i.e., grouping search results by multiple fields

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer|false|none|Maximum number of composite buckets in the result|
|sources|[object]|false|none|none|

<h2 id="tocS_aggTerms">aggTerms</h2>
<!-- backwards compatibility -->
<a id="schemaaggterms"></a>
<a id="schema_aggTerms"></a>
<a id="tocSaggterms"></a>
<a id="tocsaggterms"></a>

```json
{
  "field": "field1",
  "size": 1000
}
```

Object containing term fields to aggregate on

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Name of attribute to aggregate by|
|size|integer|false|none|Maximum number of buckets in the result|

<h2 id="tocS_aggTDigest">aggTDigest</h2>
<!-- backwards compatibility -->
<a id="schemaaggtdigest"></a>
<a id="schema_aggTDigest"></a>
<a id="tocSaggtdigest"></a>
<a id="tocsaggtdigest"></a>

```json
{
  "compression": 200
}
```

T-Digest settings for approximate statistical aggregations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compression|number|false|none|Accuracy/memory trade-off. Default is 200.|

<h2 id="tocS_aggPercentiles">aggPercentiles</h2>
<!-- backwards compatibility -->
<a id="schemaaggpercentiles"></a>
<a id="schema_aggPercentiles"></a>
<a id="tocSaggpercentiles"></a>
<a id="tocsaggpercentiles"></a>

```json
{
  "field": "latency",
  "values": [
    5,
    50,
    95
  ],
  "keyed": true,
  "tdigest": {
    "compression": 200
  }
}
```

Object to use percentile values in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILES(),-PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Numeric field to calculate percentiles for|
|values|[number]|false|none|Percentile points to compute (0-100). Defaults to 1, 5, 25, 50, 75, 95, and 99 when omitted.<br>|
|keyed|boolean|false|none|Return an object keyed by percentile when true, or an array when false. Default is false.<br>|
|tdigest|[aggTDigest](#schemaaggtdigest)|false|none|T-Digest settings for approximate statistical aggregations|

<h2 id="tocS_aggPercentileRanks">aggPercentileRanks</h2>
<!-- backwards compatibility -->
<a id="schemaaggpercentileranks"></a>
<a id="schema_aggPercentileRanks"></a>
<a id="tocSaggpercentileranks"></a>
<a id="tocsaggpercentileranks"></a>

```json
{
  "field": "latency",
  "values": [
    10,
    150,
    1500
  ],
  "keyed": true,
  "tdigest": {
    "compression": 200
  }
}
```

Object to use percentile ranks in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Numeric field to calculate percentile ranks for|
|values|[number]|true|none|Input values to rank|
|keyed|boolean|false|none|Return an object keyed by input value when true, or an array when false. Default is false.<br>|
|tdigest|[aggTDigest](#schemaaggtdigest)|false|none|T-Digest settings for approximate statistical aggregations|

<h2 id="tocS_aggMedianAbsoluteDeviation">aggMedianAbsoluteDeviation</h2>
<!-- backwards compatibility -->
<a id="schemaaggmedianabsolutedeviation"></a>
<a id="schema_aggMedianAbsoluteDeviation"></a>
<a id="tocSaggmedianabsolutedeviation"></a>
<a id="tocsaggmedianabsolutedeviation"></a>

```json
{
  "field": "latency",
  "tdigest": {
    "compression": 200
  }
}
```

Object to use median absolute deviation in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILES(),-PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Numeric field to calculate MAD for|
|tdigest|[aggTDigest](#schemaaggtdigest)|false|none|T-Digest settings for approximate statistical aggregations|

<h2 id="tocS_aggMetric">aggMetric</h2>
<!-- backwards compatibility -->
<a id="schemaaggmetric"></a>
<a id="schema_aggMetric"></a>
<a id="tocSaggmetric"></a>
<a id="tocsaggmetric"></a>

```json
{
  "field": "rental_rate"
}
```

Metric aggregation over a numeric field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Numeric field to aggregate|

<h2 id="tocS_aggregation">aggregation</h2>
<!-- backwards compatibility -->
<a id="schemaaggregation"></a>
<a id="schema_aggregation"></a>
<a id="tocSaggregation"></a>
<a id="tocsaggregation"></a>

```json
{
  "terms": {
    "field": "field1",
    "size": 1000
  },
  "sort": [
    null
  ],
  "composite": {
    "size": 1000,
    "sources": [
      {
        "property1": {
          "terms": {
            "field": "field1"
          }
        },
        "property2": {
          "terms": {
            "field": "field1"
          }
        }
      }
    ]
  },
  "histogram": {
    "field": "field",
    "interval": 10,
    "offset": 1,
    "keyed": true
  },
  "date_histogram": {
    "field": "field",
    "calendar_interval": 10,
    "offset": 1,
    "keyed": true
  },
  "range": {
    "field": "price",
    "ranges": [
      {
        "from": null,
        "to": null
      }
    ],
    "keyed": true
  },
  "date_range": {
    "field": "price",
    "ranges": [
      {
        "from": null,
        "to": null
      }
    ],
    "keyed": true
  },
  "percentiles": {
    "field": "latency",
    "values": [
      5,
      50,
      95
    ],
    "keyed": true,
    "tdigest": {
      "compression": 200
    }
  },
  "percentile_ranks": {
    "field": "latency",
    "values": [
      10,
      150,
      1500
    ],
    "keyed": true,
    "tdigest": {
      "compression": 200
    }
  },
  "median_absolute_deviation": {
    "field": "latency",
    "tdigest": {
      "compression": 200
    }
  },
  "min": {
    "field": "rental_rate"
  },
  "max": {
    "field": "rental_rate"
  },
  "sum": {
    "field": "rental_rate"
  },
  "avg": {
    "field": "rental_rate"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terms|[aggTerms](#schemaaggterms)|false|none|Object containing term fields to aggregate on|
|sort|[any]|false|none|none|
|composite|[aggComposite](#schemaaggcomposite)|false|none|Object to perform composite aggregation, i.e., grouping search results by multiple fields|
|histogram|[aggHistogram](#schemaagghistogram)|false|none|Object to use histograms in aggregation, i.e., grouping search results by histogram values|
|date_histogram|[aggDateHistogram](#schemaaggdatehistogram)|false|none|Object to use histograms in aggregation, i.e., grouping search results by histogram values|
|range|[aggRange](#schemaaggrange)|false|none|Group documents into custom numeric or date ranges. Use with the `range` or `date_range` aggregation type.<br>|
|date_range|[aggRange](#schemaaggrange)|false|none|Group documents into custom numeric or date ranges. Use with the `range` or `date_range` aggregation type.<br>|
|percentiles|[aggPercentiles](#schemaaggpercentiles)|false|none|Object to use percentile values in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILES(),-PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())<br>|
|percentile_ranks|[aggPercentileRanks](#schemaaggpercentileranks)|false|none|Object to use percentile ranks in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())<br>|
|median_absolute_deviation|[aggMedianAbsoluteDeviation](#schemaaggmedianabsolutedeviation)|false|none|Object to use median absolute deviation in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILES(),-PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())<br>|
|min|[aggMetric](#schemaaggmetric)|false|none|Metric aggregation over a numeric field|
|max|[aggMetric](#schemaaggmetric)|false|none|Metric aggregation over a numeric field|
|sum|[aggMetric](#schemaaggmetric)|false|none|Metric aggregation over a numeric field|
|avg|[aggMetric](#schemaaggmetric)|false|none|Metric aggregation over a numeric field|

<h2 id="tocS_knn">knn</h2>
<!-- backwards compatibility -->
<a id="schemaknn"></a>
<a id="schema_knn"></a>
<a id="tocSknn"></a>
<a id="tocsknn"></a>

```json
{
  "field": "string",
  "k": 0,
  "query": "string",
  "query_vector": [
    0
  ],
  "doc_id": {},
  "ef": 0,
  "rescore": true,
  "oversampling": 0,
  "filter": {
    "query_string": "string",
    "match": {},
    "match_phrase": {},
    "match_all": {},
    "bool": {},
    "equals": null,
    "in": {},
    "range": {},
    "geo_distance": {
      "location_anchor": {
        "lat": 0,
        "lon": 0
      },
      "location_source": "string",
      "distance_type": "adaptive",
      "distance": "string"
    }
  }
}
```

Object representing a k-nearest neighbor search query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Field to perform the k-nearest neighbor search on|
|k|integer|false|none|**Deprecated.** Deprecated. Use the top-level `limit` parameter instead.|
|query|string \| [number]|false|none|none|
|query_vector|[number]|false|none|The vector used as input for the KNN search|
|doc_id|object|false|none|The document ID used as input for the KNN search|
|ef|integer|false|none|Optional parameter controlling the accuracy of the search|
|rescore|boolean|false|none|Optional parameter enabling KNN rescoring (disabled by default)|
|oversampling|number|false|none|Optional parameter setting a factor by which k is multiplied when executing the KNN search|
|filter|[queryFilter](#schemaqueryfilter)|false|none|Object used to apply various conditions, such as full-text matching or attribute filtering, to a search query|

<h2 id="tocS_geoDistance">geoDistance</h2>
<!-- backwards compatibility -->
<a id="schemageodistance"></a>
<a id="schema_geoDistance"></a>
<a id="tocSgeodistance"></a>
<a id="tocsgeodistance"></a>

```json
{
  "location_anchor": {
    "lat": 0,
    "lon": 0
  },
  "location_source": "string",
  "distance_type": "adaptive",
  "distance": "string"
}
```

Object to perform geo-distance based filtering on queries

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location_anchor|object|false|none|Specifies the location of the pin point used for search|
|location_source|string|false|none|Field name in the document that contains location data|
|distance_type|string|false|none|Algorithm used to calculate the distance|
|distance|string|false|none|The distance from the anchor point to filter results by|

#### Enumerated Values

|Property|Value|
|---|---|
|distance_type|adaptive|
|distance_type|haversine|

<h2 id="tocS_searchQuery">searchQuery</h2>
<!-- backwards compatibility -->
<a id="schemasearchquery"></a>
<a id="schema_searchQuery"></a>
<a id="tocSsearchquery"></a>
<a id="tocssearchquery"></a>

```json
{
  "query_string": "string",
  "match": {},
  "match_phrase": {},
  "match_all": {},
  "bool": {},
  "equals": null,
  "in": {},
  "range": {},
  "geo_distance": {
    "location_anchor": {
      "lat": 0,
      "lon": 0
    },
    "location_source": "string",
    "distance_type": "adaptive",
    "distance": "string"
  },
  "highlight": {
    "after_match": "</strong>",
    "allow_empty": true,
    "around": 0,
    "before_match": "<strong>",
    "emit_zones": true,
    "encoder": "default",
    "fields": [
      "string"
    ],
    "force_all_words": true,
    "force_snippets": true,
    "highlight_query": null,
    "html_strip_mode": "none",
    "limits_per_field": true,
    "no_match_size": 0,
    "order": "asc",
    "pre_tags": "<strong>",
    "post_tags": "</strong>",
    "start_snippet_id": 0,
    "use_boundaries": true,
    "fragment_size": 0,
    "limit": 0,
    "limit_snippets": 0,
    "limit_words": 0,
    "number_of_fragments": 0
  }
}
```

Defines a query structure for performing search operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query_string|string|false|none|Filter object defining a query string|
|match|object|false|none|Filter object defining a match keyword passed as a string or in a Match object|
|match_phrase|object|false|none|Filter object defining a match phrase|
|match_all|object|false|none|Filter object to select all documents|
|bool|[boolFilter](#schemaboolfilter)|false|none|none|
|equals|any|false|none|Filter to match exact attribute values.|
|in|object|false|none|Filter to match a given set of attribute values.|
|range|object|false|none|Filter to match a given range of attribute values passed in Range objects|
|geo_distance|[geoDistance](#schemageodistance)|false|none|Object to perform geo-distance based filtering on queries|
|highlight|[highlight](#schemahighlight)|false|none|none|

<h2 id="tocS_chat">chat</h2>
<!-- backwards compatibility -->
<a id="schemachat"></a>
<a id="schema_chat"></a>
<a id="tocSchat"></a>
<a id="tocschat"></a>

```json
{
  "query": "What is vector search?",
  "table": "docs",
  "model_name": "assistant",
  "conversation_uuid": "docs-chat-001",
  "vector_field": "embedding"
}
```

Conversational search request handled by Manticore Buddy via `CALL CHAT`. When this object is set, the `/search` endpoint answers through an LLM using KNN-retrieved rows as context instead of returning regular search hits.
Required fields are `query`, `table`, and `model_name`. Chat model management (`CREATE CHAT MODEL`, etc.) remains SQL-only.
For more information see [Conversational search](https://manual.manticoresearch.com/Searching/Conversational_search#HTTP-JSON-syntax)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|User question to send to the chat model|
|table|string|true|none|Vectorized table to retrieve context from|
|model_name|string|true|none|Name of the chat model|
|conversation_uuid|string|false|none|Existing conversation id to continue the dialog, or an empty string to start a new conversation. If omitted, a new id is generated.<br>|
|vector_field|string|false|none|A specific vector field to search by. If omitted, Buddy uses the first `FLOAT_VECTOR` field from `SHOW CREATE TABLE`.<br>|
|fields|string|false|none|Legacy alias for `vector_field`. A request must not include both `vector_field` and `fields`.<br>|

<h2 id="tocS_hybrid">hybrid</h2>
<!-- backwards compatibility -->
<a id="schemahybrid"></a>
<a id="schema_hybrid"></a>
<a id="tocShybrid"></a>
<a id="tocshybrid"></a>

```json
{
  "query": "machine learning",
  "field": "vec"
}
```

Perform hybrid search on tables with auto-embeddings. Runs full-text and vector search and fuses results with RRF.  For more information see [Hybrid search](https://manual.manticoresearch.com/Searching/Hybrid_search#Simplified-JSON-syntax:-hybrid)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Search query string|
|field|string|false|none|Vector field name.<br>|

<h2 id="tocS_scriptFieldScript">scriptFieldScript</h2>
<!-- backwards compatibility -->
<a id="schemascriptfieldscript"></a>
<a id="schema_scriptFieldScript"></a>
<a id="tocSscriptfieldscript"></a>
<a id="tocsscriptfieldscript"></a>

```json
{
  "inline": "string"
}
```

Inline script used to compute a search expression

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inline|string|true|none|Expression to compute (same syntax as SQL expressions)|

<h2 id="tocS_scriptField">scriptField</h2>
<!-- backwards compatibility -->
<a id="schemascriptfield"></a>
<a id="schema_scriptField"></a>
<a id="tocSscriptfield"></a>
<a id="tocsscriptfield"></a>

```json
{
  "script": {
    "inline": "string"
  }
}
```

Named expression computed at search time

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script|[scriptFieldScript](#schemascriptfieldscript)|true|none|Inline script used to compute a search expression|

<h2 id="tocS_facetFilterMode">facetFilterMode</h2>
<!-- backwards compatibility -->
<a id="schemafacetfiltermode"></a>
<a id="schema_facetFilterMode"></a>
<a id="tocSfacetfiltermode"></a>
<a id="tocsfacetfiltermode"></a>

```json
"strict"
```

Controls how facets inherit attribute filters from the main query. [Faceted search](https://manual.manticoresearch.com/Searching/Faceted_search#HTTP-JSON)

<h2 id="tocS_searchRequest">searchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchrequest"></a>
<a id="schema_searchRequest"></a>
<a id="tocSsearchrequest"></a>
<a id="tocssearchrequest"></a>

```json
{
  "table": "your_table",
  "query": {
    "query_string": "your_query"
  }
}
```

Request object for search operation. Either `table` (regular search) or `chat` (conversational search) must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|false|none|The table to perform the search on|
|chat|[chat](#schemachat)|false|none|Conversational search request handled by Manticore Buddy via `CALL CHAT`. When this object is set, the `/search` endpoint answers through an LLM using KNN-retrieved rows as context instead of returning regular search hits.<br>Required fields are `query`, `table`, and `model_name`. Chat model management (`CREATE CHAT MODEL`, etc.) remains SQL-only.<br>For more information see [Conversational search](https://manual.manticoresearch.com/Searching/Conversational_search#HTTP-JSON-syntax)<br>|
|query|[searchQuery](#schemasearchquery)|false|none|Defines a query structure for performing search operations|
|join|[[join](#schemajoin)]|false|none|Join clause to combine search data from multiple tables|
|highlight|[highlight](#schemahighlight)|false|none|none|
|limit|integer|false|none|Maximum number of results to return|
|knn|[knn](#schemaknn)|false|none|K-nearest neighbor search settings. Pass a single `knn` object or an array of objects for multi-vector search.<br>|
|hybrid|[hybrid](#schemahybrid)|false|none|Perform hybrid search on tables with auto-embeddings. Runs full-text and vector search and fuses results with RRF.  For more information see [Hybrid search](https://manual.manticoresearch.com/Searching/Hybrid_search#Simplified-JSON-syntax:-hybrid)<br>|
|facet_filter_mode|[facetFilterMode](#schemafacetfiltermode)|false|none|Controls how facets inherit attribute filters from the main query. [Faceted search](https://manual.manticoresearch.com/Searching/Faceted_search#HTTP-JSON)<br>|
|aggs|object|false|none|Defines aggregation settings for grouping results|
|expressions|object|false|none|Expressions to calculate additional values for the result. Simpler alternative to `script_fields`; expression names must be lowercase.<br>|
|script_fields|object|false|none|Named expressions computed at search time. Each value defines an inline script whose result is stored under the field name. For more information see [Expressions](https://manual.manticoresearch.com/Searching/Expressions#script_fields)<br>|
|max_matches|integer|false|none|Maximum number of matches allowed in the result|
|offset|integer|false|none|Starting point for pagination of the result|
|options|object|false|none|Additional search options|
|profile|boolean|false|none|Enable or disable profiling of the search request|
|sort|any|false|none|Sorting criteria for the search results|
|_source|any|false|none|Specify which fields to include or exclude in the response|
|track_scores|boolean|false|none|Enable or disable result weight calculation used for sorting|

#### Enumerated Values

|Property|Value|
|---|---|
|facet_filter_mode|strict|
|facet_filter_mode|auto|
|facet_filter_mode|max|

<h2 id="tocS_queryFilterAlias1">queryFilterAlias1</h2>
<!-- backwards compatibility -->
<a id="schemaqueryfilteralias1"></a>
<a id="schema_queryFilterAlias1"></a>
<a id="tocSqueryfilteralias1"></a>
<a id="tocsqueryfilteralias1"></a>

```json
{
  "query_string": "string",
  "match": {},
  "match_phrase": {},
  "match_all": {},
  "bool": {},
  "equals": null,
  "in": {},
  "range": {},
  "geo_distance": {
    "location_anchor": {
      "lat": 0,
      "lon": 0
    },
    "location_source": "string",
    "distance_type": "adaptive",
    "distance": "string"
  }
}
```

Object used to apply various conditions, such as full-text matching or attribute filtering, to a search query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query_string|string|false|none|Filter object defining a query string|
|match|object|false|none|Filter object defining a match keyword passed as a string or in a Match object|
|match_phrase|object|false|none|Filter object defining a match phrase|
|match_all|object|false|none|Filter object to select all documents|
|bool|[boolFilter](#schemaboolfilter)|false|none|none|
|equals|any|false|none|Filter to match exact attribute values.|
|in|object|false|none|Filter to match a given set of attribute values.|
|range|object|false|none|Filter to match a given range of attribute values passed in Range objects|
|geo_distance|[geoDistance](#schemageodistance)|false|none|Object to perform geo-distance based filtering on queries|

<h2 id="tocS_queryFilterAlias2">queryFilterAlias2</h2>
<!-- backwards compatibility -->
<a id="schemaqueryfilteralias2"></a>
<a id="schema_queryFilterAlias2"></a>
<a id="tocSqueryfilteralias2"></a>
<a id="tocsqueryfilteralias2"></a>

```json
{
  "query_string": "string",
  "match": {},
  "match_phrase": {},
  "match_all": {},
  "bool": {},
  "equals": null,
  "in": {},
  "range": {},
  "geo_distance": {
    "location_anchor": {
      "lat": 0,
      "lon": 0
    },
    "location_source": "string",
    "distance_type": "adaptive",
    "distance": "string"
  }
}
```

Object used to apply various conditions, such as full-text matching or attribute filtering, to a search query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query_string|string|false|none|Filter object defining a query string|
|match|object|false|none|Filter object defining a match keyword passed as a string or in a Match object|
|match_phrase|object|false|none|Filter object defining a match phrase|
|match_all|object|false|none|Filter object to select all documents|
|bool|[boolFilter](#schemaboolfilter)|false|none|none|
|equals|any|false|none|Filter to match exact attribute values.|
|in|object|false|none|Filter to match a given set of attribute values.|
|range|object|false|none|Filter to match a given range of attribute values passed in Range objects|
|geo_distance|[geoDistance](#schemageodistance)|false|none|Object to perform geo-distance based filtering on queries|

<h2 id="tocS_autocompleteRequest">autocompleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaautocompleterequest"></a>
<a id="schema_autocompleteRequest"></a>
<a id="tocSautocompleterequest"></a>
<a id="tocsautocompleterequest"></a>

```json
{
  "table": "test",
  "query": "Start",
  "options": {
    "layouts": "us,uk",
    "fuzziness": 0
  }
}
```

Object containing the data for performing an autocomplete search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|true|none|The table to perform the search on|
|query|string|true|none|The beginning of the string to autocomplete|
|options|object|false|none|Autocomplete options<br>  - layouts: A comma-separated string of keyboard layout codes to validate and check for spell correction. Available options - us, ru, ua, se, pt, no, it, gr, uk, fr, es, dk, de, ch, br, bg, be. By default, all are enabled.<br>  - fuzziness: (0,1 or 2) Maximum Levenshtein distance for finding typos. Set to 0 to disable fuzzy matching. Default is 2<br>  - prepend: true/false If true, adds an asterisk before the last word for prefix expansion (e.g., *word )<br>  - append:  true/false If true, adds an asterisk after the last word for prefix expansion (e.g., word* )<br>  - expansion_len: Number of characters to expand in the last word. Default is 10.<br>|

<h2 id="tocS_boolFilter">boolFilter</h2>
<!-- backwards compatibility -->
<a id="schemaboolfilter"></a>
<a id="schema_boolFilter"></a>
<a id="tocSboolfilter"></a>
<a id="tocsboolfilter"></a>

```json
{
  "must": [
    {
      "query_string": "string",
      "match": {},
      "match_phrase": {},
      "match_all": {},
      "bool": {},
      "equals": null,
      "in": {},
      "range": {},
      "geo_distance": {
        "location_anchor": {
          "lat": 0,
          "lon": 0
        },
        "location_source": "string",
        "distance_type": "adaptive",
        "distance": "string"
      }
    }
  ],
  "must_not": [
    {
      "query_string": "string",
      "match": {},
      "match_phrase": {},
      "match_all": {},
      "bool": {},
      "equals": null,
      "in": {},
      "range": {},
      "geo_distance": {
        "location_anchor": {
          "lat": 0,
          "lon": 0
        },
        "location_source": "string",
        "distance_type": "adaptive",
        "distance": "string"
      }
    }
  ],
  "should": [
    {
      "query_string": "string",
      "match": {},
      "match_phrase": {},
      "match_all": {},
      "bool": {},
      "equals": null,
      "in": {},
      "range": {},
      "geo_distance": {
        "location_anchor": {
          "lat": 0,
          "lon": 0
        },
        "location_source": "string",
        "distance_type": "adaptive",
        "distance": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|must|[[queryFilter](#schemaqueryfilter)]|false|none|Query clauses that must match for the document to be included|
|must_not|[[queryFilter](#schemaqueryfilter)]|false|none|Query clauses that must not match for the document to be included|
|should|[[queryFilter](#schemaqueryfilter)]|false|none|Query clauses that should be matched, but are not required|

<h2 id="tocS_bulkResponse">bulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkresponse"></a>
<a id="schema_bulkResponse"></a>
<a id="tocSbulkresponse"></a>
<a id="tocsbulkresponse"></a>

```json
{
  "items": [
    {}
  ],
  "errors": true,
  "error": "string",
  "current_line": 0,
  "skipped_lines": 0
}
```

Success response for bulk search requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|List of results|
|errors|boolean|false|none|Errors occurred during the bulk operation|
|error|string|false|none|Error message describing an error if such occurred|
|current_line|integer|false|none|Number of the row returned in the response|
|skipped_lines|integer|false|none|Number of rows skipped in the response|

<h2 id="tocS_deleteDocumentRequest">deleteDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentrequest"></a>
<a id="schema_deleteDocumentRequest"></a>
<a id="tocSdeletedocumentrequest"></a>
<a id="tocsdeletedocumentrequest"></a>

```json
{
  "table": "test",
  "id": 1
}
```

Payload for delete request.
Documents can be deleted either one by one by specifying the document id or by providing a query object.
For more information see  [Delete API](https://manual.manticoresearch.com/Deleting_documents)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|true|none|Table name|
|cluster|string|false|none|Cluster name|
|id|object|false|none|The ID of document for deletion|
|query|object|false|none|Defines the criteria to match documents for deletion|

<h2 id="tocS_deleteResponse">deleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresponse"></a>
<a id="schema_deleteResponse"></a>
<a id="tocSdeleteresponse"></a>
<a id="tocsdeleteresponse"></a>

```json
{
  "table": "test",
  "deleted": 29
}
```

Response object for successful delete request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|false|none|The name of the table from which the document was deleted|
|deleted|integer|false|none|Number of documents deleted|
|id|object|false|none|The ID of the deleted document. If multiple documents are deleted, the ID of the first deleted document is returned<br>|
|found|boolean|false|none|Indicates whether any documents to be deleted were found|
|result|string|false|none|Result of the delete operation, typically 'deleted'|

<h2 id="tocS_documentId">documentId</h2>
<!-- backwards compatibility -->
<a id="schemadocumentid"></a>
<a id="schema_documentId"></a>
<a id="tocSdocumentid"></a>
<a id="tocsdocumentid"></a>

```json
0
```

<h2 id="tocS_highlight">highlight</h2>
<!-- backwards compatibility -->
<a id="schemahighlight"></a>
<a id="schema_highlight"></a>
<a id="tocShighlight"></a>
<a id="tocshighlight"></a>

```json
{
  "after_match": "</strong>",
  "allow_empty": true,
  "around": 0,
  "before_match": "<strong>",
  "emit_zones": true,
  "encoder": "default",
  "fields": [
    "string"
  ],
  "force_all_words": true,
  "force_snippets": true,
  "highlight_query": null,
  "html_strip_mode": "none",
  "limits_per_field": true,
  "no_match_size": 0,
  "order": "asc",
  "pre_tags": "<strong>",
  "post_tags": "</strong>",
  "start_snippet_id": 0,
  "use_boundaries": true,
  "fragment_size": 0,
  "limit": 0,
  "limit_snippets": 0,
  "limit_words": 0,
  "number_of_fragments": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after_match|string|false|none|Text inserted after the matched term, typically used for HTML formatting|
|allow_empty|boolean|false|none|Permits an empty string to be returned as the highlighting result. Otherwise, the beginning of the original text would be returned|
|around|integer|false|none|Number of words around the match to include in the highlight|
|before_match|string|false|none|Text inserted before the match, typically used for HTML formatting|
|emit_zones|boolean|false|none|Emits an HTML tag with the enclosing zone name before each highlighted snippet|
|encoder|string|false|none|If set to 'html', retains HTML markup when highlighting|
|fields|[highlightFields](#schemahighlightfields)|false|none|List of fields available for highlighting|
|force_all_words|boolean|false|none|Ignores the length limit until the result includes all keywords|
|force_snippets|boolean|false|none|Forces snippet generation even if limits allow highlighting the entire text|
|highlight_query|any \| [queryFilter](#schemaqueryfilter)|false|none|Optional query object to customize highlighting behavior|
|html_strip_mode|string|false|none|Defines the mode for handling HTML markup in the highlight|
|limits_per_field|boolean|false|none|Determines whether the 'limit', 'limit_words', and 'limit_snippets' options operate as individual limits in each field of the document|
|no_match_size|integer|false|none|If set to 1, allows an empty string to be returned as a highlighting result|
|order|string|false|none|Sets the sorting order of highlighted snippets|
|pre_tags|string|false|none|Text inserted before each highlighted snippet|
|post_tags|string|false|none|Text inserted after each highlighted snippet|
|start_snippet_id|integer|false|none|Sets the starting value of the %SNIPPET_ID% macro|
|use_boundaries|boolean|false|none|Defines whether to additionally break snippets by phrase boundary characters|
|fragment_size|integer|false|none|Maximum size of the text fragments in highlighted snippets per field|
|limit|integer|false|none|Maximum size of snippets per field|
|limit_snippets|integer|false|none|Maximum number of snippets per field|
|limit_words|integer|false|none|Maximum number of words per field|
|number_of_fragments|integer|false|none|Total number of highlighted fragments per field|

#### Enumerated Values

|Property|Value|
|---|---|
|encoder|default|
|encoder|html|
|html_strip_mode|none|
|html_strip_mode|strip|
|html_strip_mode|index|
|html_strip_mode|retain|
|no_match_size|0|
|no_match_size|1|
|order|asc|
|order|desc|
|order|score|

<h2 id="tocS_highlightFields">highlightFields</h2>
<!-- backwards compatibility -->
<a id="schemahighlightfields"></a>
<a id="schema_highlightFields"></a>
<a id="tocShighlightfields"></a>
<a id="tocshighlightfields"></a>

```json
[
  "string"
]
```

List of fields available for highlighting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[string]|false|none|none|
|*oneOf*|object|false|none|none|

<h2 id="tocS_highlightFieldOption">highlightFieldOption</h2>
<!-- backwards compatibility -->
<a id="schemahighlightfieldoption"></a>
<a id="schema_highlightFieldOption"></a>
<a id="tocShighlightfieldoption"></a>
<a id="tocshighlightfieldoption"></a>

```json
{
  "fragment_size": 0,
  "limit": 0,
  "limit_snippets": 0,
  "limit_words": 0,
  "number_of_fragments": 0
}
```

Options for controlling the behavior of highlighting on a per-field basis

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fragment_size|integer|false|none|Maximum size of the text fragments in highlighted snippets per field|
|limit|integer|false|none|Maximum size of snippets per field|
|limit_snippets|integer|false|none|Maximum number of snippets per field|
|limit_words|integer|false|none|Maximum number of words per field|
|number_of_fragments|integer|false|none|Total number of highlighted fragments per field|

<h2 id="tocS_hitsHits">hitsHits</h2>
<!-- backwards compatibility -->
<a id="schemahitshits"></a>
<a id="schema_hitsHits"></a>
<a id="tocShitshits"></a>
<a id="tocshitshits"></a>

```json
{
  "_id": {},
  "_score": 0,
  "_source": {},
  "_knn_dist": 0,
  "highlight": {},
  "table": "string",
  "_type:": "string",
  "fields": {}
}
```

Search hit representing a matched document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|object|false|none|The ID of the matched document|
|_score|integer|false|none|The score of the matched document|
|_source|object|false|none|The source data of the matched document|
|_knn_dist|number|false|none|The knn distance of the matched document returned for knn queries|
|highlight|object|false|none|The highlighting-related data of the matched document|
|table|string|false|none|The table name of the matched document returned for percolate queries|
|_type:|string|false|none|The type of the matched document returned for percolate queries|
|fields|object|false|none|The percolate-related fields of the matched document returned for percolate queries|

<h2 id="tocS_insertDocumentRequest">insertDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemainsertdocumentrequest"></a>
<a id="schema_insertDocumentRequest"></a>
<a id="tocSinsertdocumentrequest"></a>
<a id="tocsinsertdocumentrequest"></a>

```json
{
  "table": "test",
  "doc": {
    "title": "This is some title",
    "gid": 100
  }
}
```

Object containing data for inserting a new document into the table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|true|none|Name of the table to insert the document into|
|cluster|string|false|none|Name of the cluster to insert the document into|
|id|object|false|none|Document ID. If not provided, an ID will be auto-generated<br>|
|doc|object|true|none|Object containing document data<br>|

<h2 id="tocS_joinOn">joinOn</h2>
<!-- backwards compatibility -->
<a id="schemajoinon"></a>
<a id="schema_joinOn"></a>
<a id="tocSjoinon"></a>
<a id="tocsjoinon"></a>

```json
{
  "right": {
    "field": "string",
    "table": "string",
    "query": {
      "query_string": "string",
      "match": {},
      "match_phrase": {},
      "match_all": {}
    },
    "type": null
  },
  "left": {
    "field": "string",
    "table": "string",
    "query": {
      "query_string": "string",
      "match": {},
      "match_phrase": {},
      "match_all": {}
    },
    "type": null
  },
  "operator": "eq"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|right|[joinCond](#schemajoincond)|false|none|Object representing the conditions used to perform the join operation|
|left|[joinCond](#schemajoincond)|false|none|Object representing the conditions used to perform the join operation|
|operator|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|eq|

<h2 id="tocS_join">join</h2>
<!-- backwards compatibility -->
<a id="schemajoin"></a>
<a id="schema_join"></a>
<a id="tocSjoin"></a>
<a id="tocsjoin"></a>

```json
{
  "type": "inner",
  "on": [
    {
      "right": {
        "field": "string",
        "table": "string",
        "query": {
          "query_string": "string",
          "match": {},
          "match_phrase": {},
          "match_all": {}
        },
        "type": null
      },
      "left": {
        "field": "string",
        "table": "string",
        "query": {
          "query_string": "string",
          "match": {},
          "match_phrase": {},
          "match_all": {}
        },
        "type": null
      },
      "operator": "eq"
    }
  ],
  "query": {
    "query_string": "string",
    "match": {},
    "match_phrase": {},
    "match_all": {}
  },
  "table": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the join operation|
|on|[[joinOn](#schemajoinon)]|true|none|List of objects defining joined tables|
|query|[fulltextFilter](#schemafulltextfilter)|false|none|Defines a type of filter for full-text search queries|
|table|string|true|none|Basic table of the join operation|

#### Enumerated Values

|Property|Value|
|---|---|
|type|inner|
|type|left|

<h2 id="tocS_joinCond">joinCond</h2>
<!-- backwards compatibility -->
<a id="schemajoincond"></a>
<a id="schema_joinCond"></a>
<a id="tocSjoincond"></a>
<a id="tocsjoincond"></a>

```json
{
  "field": "string",
  "table": "string",
  "query": {
    "query_string": "string",
    "match": {},
    "match_phrase": {},
    "match_all": {}
  },
  "type": null
}
```

Object representing the conditions used to perform the join operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|Field to join on|
|table|string|true|none|Joined table|
|query|[fulltextFilter](#schemafulltextfilter)|false|none|Defines a type of filter for full-text search queries|
|type|any|false|none|none|

<h2 id="tocS__match">_match</h2>
<!-- backwards compatibility -->
<a id="schema_match"></a>
<a id="schema__match"></a>
<a id="tocS_match"></a>
<a id="tocs_match"></a>

```json
{
  "query": "string",
  "operator": "or",
  "boost": 0
}
```

Filter helper object defining a match keyword and match options

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|operator|string|false|none|none|
|boost|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|or|
|operator|and|

<h2 id="tocS_match_all">match_all</h2>
<!-- backwards compatibility -->
<a id="schemamatch_all"></a>
<a id="schema_match_all"></a>
<a id="tocSmatch_all"></a>
<a id="tocsmatch_all"></a>

```json
{
  "_all": "{}"
}
```

Filter helper object defining the 'match all'' condition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_all|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|_all|{}|

<h2 id="tocS_rangeFilter">rangeFilter</h2>
<!-- backwards compatibility -->
<a id="schemarangefilter"></a>
<a id="schema_rangeFilter"></a>
<a id="tocSrangefilter"></a>
<a id="tocsrangefilter"></a>

```json
{
  "lt": null,
  "lte": null,
  "gt": null,
  "gte": null
}
```

Filter helper object defining the 'range' condition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lt|any|false|none|<Less than> condition value|
|lte|any|false|none|<Less than or equal> condition value|
|gt|any|false|none|<Greater than> condition value|
|gte|any|false|none|<Greater than or equal> condition value|

<h2 id="tocS_fulltextFilter">fulltextFilter</h2>
<!-- backwards compatibility -->
<a id="schemafulltextfilter"></a>
<a id="schema_fulltextFilter"></a>
<a id="tocSfulltextfilter"></a>
<a id="tocsfulltextfilter"></a>

```json
{
  "query_string": "string",
  "match": {},
  "match_phrase": {},
  "match_all": {}
}
```

Defines a type of filter for full-text search queries

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query_string|string|false|none|Filter object defining a query string|
|match|object|false|none|Filter object defining a match keyword passed as a string or in a Match object|
|match_phrase|object|false|none|Filter object defining a match phrase|
|match_all|object|false|none|Filter object to select all documents|

<h2 id="tocS_queryFilter">queryFilter</h2>
<!-- backwards compatibility -->
<a id="schemaqueryfilter"></a>
<a id="schema_queryFilter"></a>
<a id="tocSqueryfilter"></a>
<a id="tocsqueryfilter"></a>

```json
{
  "query_string": "string",
  "match": {},
  "match_phrase": {},
  "match_all": {},
  "bool": {
    "must": [
      {}
    ],
    "must_not": [
      {}
    ],
    "should": [
      {}
    ]
  },
  "equals": null,
  "in": {},
  "range": {},
  "geo_distance": {
    "location_anchor": {
      "lat": 0,
      "lon": 0
    },
    "location_source": "string",
    "distance_type": "adaptive",
    "distance": "string"
  }
}
```

Object used to apply various conditions, such as full-text matching or attribute filtering, to a search query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query_string|string|false|none|Filter object defining a query string|
|match|object|false|none|Filter object defining a match keyword passed as a string or in a Match object|
|match_phrase|object|false|none|Filter object defining a match phrase|
|match_all|object|false|none|Filter object to select all documents|
|bool|[boolFilter](#schemaboolfilter)|false|none|none|
|equals|any|false|none|Filter to match exact attribute values.|
|in|object|false|none|Filter to match a given set of attribute values.|
|range|object|false|none|Filter to match a given range of attribute values passed in Range objects|
|geo_distance|[geoDistance](#schemageodistance)|false|none|Object to perform geo-distance based filtering on queries|

<h2 id="tocS_replaceDocumentRequest">replaceDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplacedocumentrequest"></a>
<a id="schema_replaceDocumentRequest"></a>
<a id="tocSreplacedocumentrequest"></a>
<a id="tocsreplacedocumentrequest"></a>

```json
{
  "doc": {
    "title": "This is some title",
    "gid": 100
  }
}
```

Object containing the document data for replacing an existing document in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doc|object|true|none|Object containing the new document data to replace the existing one.|

<h2 id="tocS_sourceRules">sourceRules</h2>
<!-- backwards compatibility -->
<a id="schemasourcerules"></a>
<a id="schema_sourceRules"></a>
<a id="tocSsourcerules"></a>
<a id="tocssourcerules"></a>

```json
{
  "includes": [
    "attr1",
    "attri*"
  ],
  "excludes": [
    "desc*"
  ]
}
```

Defines which fields to include or exclude in the response for a search query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includes|[string]|false|none|List of fields to include in the response|
|excludes|[string]|false|none|List of fields to exclude from the response|

<h2 id="tocS_successResponse">successResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresponse"></a>
<a id="schema_successResponse"></a>
<a id="tocSsuccessresponse"></a>
<a id="tocssuccessresponse"></a>

```json
{
  "table": "test",
  "id": 1,
  "result": "created",
  "created": true,
  "status": 201
}
```

Response object indicating the success of an operation, such as inserting or updating a document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|false|none|Name of the document table|
|id|object|false|none|ID of the document affected by the request operation|
|created|boolean|false|none|Indicates whether the document was created as a result of the operation|
|result|string|false|none|Result of the operation, typically 'created', 'updated', or 'deleted'|
|found|boolean|false|none|Indicates whether the document was found in the table|
|status|integer|false|none|HTTP status code representing the result of the operation|

<h2 id="tocS_percolateRequest">percolateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapercolaterequest"></a>
<a id="schema_percolateRequest"></a>
<a id="tocSpercolaterequest"></a>
<a id="tocspercolaterequest"></a>

```json
{
  "query": {
    "percolate": {
      "document": {
        "title": "some text to match"
      }
    }
  }
}
```

Object containing the query for percolating documents against stored queries in a percolate table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|true|none|none|

<h2 id="tocS_facetBucketStatus">facetBucketStatus</h2>
<!-- backwards compatibility -->
<a id="schemafacetbucketstatus"></a>
<a id="schema_facetBucketStatus"></a>
<a id="tocSfacetbucketstatus"></a>
<a id="tocsfacetbucketstatus"></a>

```json
"selected"
```

Facet bucket availability marker returned when `facet_filter_mode` is `auto` or `max`. `selected` means the bucket value is already present in a same-facet value filter. `available` means selecting the bucket can produce results. `unavailable` means the bucket exists in the broad max count scope but selecting it would produce no results.

<h2 id="tocS_aggBucket">aggBucket</h2>
<!-- backwards compatibility -->
<a id="schemaaggbucket"></a>
<a id="schema_aggBucket"></a>
<a id="tocSaggbucket"></a>
<a id="tocsaggbucket"></a>

```json
{
  "key": null,
  "doc_count": 0,
  "status": "selected"
}
```

Single bucket in an aggregation result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|Aggregated bucket value|
|doc_count|integer|true|none|Number of documents in the bucket|
|status|[facetBucketStatus](#schemafacetbucketstatus)|false|none|Facet bucket availability marker returned when `facet_filter_mode` is `auto` or `max`. `selected` means the bucket value is already present in a same-facet value filter. `available` means selecting the bucket can produce results. `unavailable` means the bucket exists in the broad max count scope but selecting it would produce no results.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|selected|
|status|available|
|status|unavailable|

<h2 id="tocS_aggBucketsResult">aggBucketsResult</h2>
<!-- backwards compatibility -->
<a id="schemaaggbucketsresult"></a>
<a id="schema_aggBucketsResult"></a>
<a id="tocSaggbucketsresult"></a>
<a id="tocsaggbucketsresult"></a>

```json
{
  "buckets": null,
  "after_key": {},
  "value": null,
  "value_as_string": "string",
  "values": null
}
```

One aggregation result. It is either BUCKET-shaped or METRIC-shaped, never both: which one depends on the aggregation that was requested.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|object|false|none|Bucket list when `keyed` is false (array of bucket objects), or a keyed map of bucket objects when `keyed` is true. Each bucket has `key` and `doc_count`, plus `from`/`to` for `range` and `date_range`, `key_as_string` for `date_histogram`, and an optional `status`. Returned by `terms`, `histogram`, `date_histogram`, `range`, `date_range` and `composite`.<br>|
|after_key|object|false|none|Pagination cursor returned by composite aggregations|
|value|object|false|none|Returned by `min`, `max`, `sum`, `avg` and `median_absolute_deviation`. Untyped like `buckets` and `values`, because the JSON type follows the aggregation: an integer one returns an exact integer, which for `sum` or `max` over an int64 attribute can exceed what a double holds exactly, while a float one returns a floating-point number. `value_as_string` carries the exact rendering when the engine sends it.<br>|
|value_as_string|string|false|none|String rendering of `value`, returned alongside it by `median_absolute_deviation`.<br>|
|values|object|false|none|Returned by `percentiles` and `percentile_ranks`. Like `buckets`, the shape follows the request's `keyed` flag: an array of `{key, value, value_as_string}` objects when false, a map of requested point to value when true.<br>|

<h2 id="tocS_searchResponse">searchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_searchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "took": 0,
  "timed_out": true,
  "aggregations": {
    "sizes": {
      "buckets": [
        {
          "key": "small",
          "doc_count": 1,
          "status": "selected"
        },
        {
          "key": "large",
          "doc_count": 1,
          "status": "available"
        }
      ]
    },
    "colors": {
      "buckets": [
        {
          "key": 10,
          "doc_count": 1019
        },
        {
          "key": 9,
          "doc_count": 954,
          "status": "unavailable"
        }
      ]
    },
    "avg_price": {
      "value": 30.5
    },
    "price_percentiles": {
      "values": [
        {
          "key": 50,
          "value": 30.5,
          "value_as_string": "30.5"
        }
      ]
    }
  },
  "hits": {
    "total": 2,
    "hits": [
      {
        "_id": 1,
        "_score": 1,
        "_source": {
          "gid": 11
        }
      },
      {
        "_id": 2,
        "_score": 1,
        "_source": {
          "gid": 20
        }
      }
    ]
  },
  "profile": {},
  "scroll": "string",
  "warning": {},
  "conversation_uuid": "docs-chat-001",
  "user_query": "What is vector search?",
  "search_query": "vector search, embeddings, similarity search",
  "response": "Vector search finds similar items by comparing embeddings...",
  "sources": "[{\"id\":1,\"title\":\"Vector Search\",\"content\":\"...\",\"knn_dist\":0.12}]"
}
```

Response object containing search results. For conversational search requests that include a `chat` object, the optional chat fields below are also populated.
For conversational search response fields see [Conversational search](https://manual.manticoresearch.com/Searching/Conversational_search#Response)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|integer|false|none|Time taken to execute the search|
|timed_out|boolean|false|none|Indicates whether the search operation timed out|
|aggregations|object|false|none|Aggregated search results, keyed by aggregation name. A bucket aggregation contributes a `buckets` array (or keyed map) of bucket objects; a metric aggregation contributes a `value` or `values` instead. See `aggBucketsResult`.<br>|
|hits|object|false|none|Object containing the search hits, which represent the documents that matched the query.|
|profile|object|false|none|Profile information about the search execution, if profiling is enabled|
|scroll|string|false|none|Scroll token to be used fo pagination|
|warning|object|false|none|Warnings encountered during the search operation|
|conversation_uuid|string|false|none|Existing or generated conversation id (conversational search)|
|user_query|string|false|none|Original user query (conversational search)|
|search_query|string|false|none|Standalone search query used for KNN retrieval (conversational search)|
|response|string|false|none|LLM answer as generated (conversational search)|
|sources|string|false|none|JSON string containing retrieved source rows used as LLM context (conversational search).<br>|

<h2 id="tocS_responseError">responseError</h2>
<!-- backwards compatibility -->
<a id="schemaresponseerror"></a>
<a id="schema_responseError"></a>
<a id="tocSresponseerror"></a>
<a id="tocsresponseerror"></a>

```json
{
  "type": "string",
  "reason": "string",
  "table": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[responseErrorDetails](#schemaresponseerrordetails)|false|none|Detailed error information returned in case of an error response|
|*oneOf*|[responseErrorText](#schemaresponseerrortext)|false|none|Error message text returned in case of an error|

<h2 id="tocS_responseErrorDetails">responseErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresponseerrordetails"></a>
<a id="schema_responseErrorDetails"></a>
<a id="tocSresponseerrordetails"></a>
<a id="tocsresponseerrordetails"></a>

```json
{
  "type": "string",
  "reason": "string",
  "table": "string"
}
```

Detailed error information returned in case of an error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type or category of the error|
|reason|string \| null|false|none|Detailed explanation of why the error occurred|
|table|string \| null|false|none|The table related to the error, if applicable|

<h2 id="tocS_responseErrorText">responseErrorText</h2>
<!-- backwards compatibility -->
<a id="schemaresponseerrortext"></a>
<a id="schema_responseErrorText"></a>
<a id="tocSresponseerrortext"></a>
<a id="tocsresponseerrortext"></a>

```json
"string"
```

Error message text returned in case of an error

<h2 id="tocS_errorResponse">errorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_errorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "status": 500,
  "error": "an error occured"
}
```

Error response object containing information about the error and a status code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[responseError](#schemaresponseerror)|true|none|none|
|status|integer|false|none|HTTP status code of the error response|

<h2 id="tocS_sqlRawResponse">sqlRawResponse</h2>
<!-- backwards compatibility -->
<a id="schemasqlrawresponse"></a>
<a id="schema_sqlRawResponse"></a>
<a id="tocSsqlrawresponse"></a>
<a id="tocssqlrawresponse"></a>

```json
[
  {}
]
```

<h2 id="tocS_sqlObjResponse">sqlObjResponse</h2>
<!-- backwards compatibility -->
<a id="schemasqlobjresponse"></a>
<a id="schema_sqlObjResponse"></a>
<a id="tocSsqlobjresponse"></a>
<a id="tocssqlobjresponse"></a>

```json
{
  "hits": {},
  "took": 0,
  "timed_out": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|object|true|none|none|
|took|number|false|none|none|
|timed_out|boolean|false|none|none|

<h2 id="tocS_sqlResponse">sqlResponse</h2>
<!-- backwards compatibility -->
<a id="schemasqlresponse"></a>
<a id="schema_sqlResponse"></a>
<a id="tocSsqlresponse"></a>
<a id="tocssqlresponse"></a>

```json
[
  {
    "total": 0,
    "error": null
  }
]
```

List of responses from executed SQL queries

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[sqlRawResponse](#schemasqlrawresponse)|false|none|none|
|*oneOf*|[sqlObjResponse](#schemasqlobjresponse)|false|none|none|

<h2 id="tocS_tokenRequest">tokenRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenrequest"></a>
<a id="schema_tokenRequest"></a>
<a id="tocStokenrequest"></a>
<a id="tocstokenrequest"></a>

```json
{}
```

Empty request body. Used to create or rotate a bearer token for the authenticated HTTP user.

<h2 id="tocS_tokenResponse">tokenResponse</h2>
<!-- backwards compatibility -->
<a id="schematokenresponse"></a>
<a id="schema_tokenResponse"></a>
<a id="tocStokenresponse"></a>
<a id="tocstokenresponse"></a>

```json
"115za1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2"
```

Raw bearer token string.

<h2 id="tocS_updateDocumentRequest">updateDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentrequest"></a>
<a id="schema_updateDocumentRequest"></a>
<a id="tocSupdatedocumentrequest"></a>
<a id="tocsupdatedocumentrequest"></a>

```json
{
  "table": "string",
  "cluster": "string",
  "doc": {
    "gid": 10
  },
  "id": {},
  "query": {
    "query": {
      "match": {
        "title": "match me"
      }
    }
  }
}
```

Payload for updating a document or multiple documents in a table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|true|none|Name of the document table|
|cluster|string|false|none|Name of the document cluster|
|doc|object|true|none|Object containing the document fields to update|
|id|object|false|none|Document ID|
|query|any \| [queryFilter](#schemaqueryfilter)|false|none|Object defining conditions to perform the updates|

<h2 id="tocS_updateResponse">updateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresponse"></a>
<a id="schema_updateResponse"></a>
<a id="tocSupdateresponse"></a>
<a id="tocsupdateresponse"></a>

```json
{
  "table": "test",
  "updated": 29
}
```

Success response returned after updating one or more documents

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|string|false|none|Name of the document table|
|updated|integer|false|none|Number of documents updated|
|id|object|false|none|Document ID|
|result|string|false|none|Result of the update operation, typically 'updated'|
