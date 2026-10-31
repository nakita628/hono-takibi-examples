<h1 id="meilisearch-v10">Meilisearch v1.0 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://localhost:7700/">http://localhost:7700/</a>

<h1 id="meilisearch-v10-documents">Documents</h1>

## Get documents

<a id="opIdgetDocuments"></a>

> Code samples

```bash
curl https://example.com/indexes/books/documents
```

`GET /indexes/books/documents`

Get documents

<h3 id="get-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|none|
|offset|query|string|false|none|
|fields|query|string|false|none|

<h3 id="get-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Add or update documents

<a id="opIdaddOrUpdateDocuments"></a>

> Code samples

```bash
curl https://example.com/indexes/books/documents \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "author": "J. Austen",
      "date": "1813",
      "id": 2
    }
  ]'
```

`PUT /indexes/books/documents`

Add or update documents

> Body parameter

```json
[
  {
    "author": "J. Austen",
    "date": "1813",
    "id": 2
  }
]
```

<h3 id="add-or-update-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primaryKey|query|string|false|none|
|body|body|[object]|false|none|
|» author|body|string|false|none|
|» date|body|string|false|none|
|» id|body|number|false|none|

<h3 id="add-or-update-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Add or replace documents

<a id="opIdaddOrReplaceDocuments"></a>

> Code samples

```bash
curl https://example.com/indexes/books/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "author": "Jane Austen",
      "genre": "romance",
      "id": 2,
      "price": 3.5,
      "title": "Pride and Prejudice"
    },
    {
      "author": "Antoine de Saint-Exupéry",
      "genre": "adventure",
      "id": 456,
      "price": 10,
      "title": "Le Petit Prince"
    },
    {
      "author": "Lewis Carroll",
      "genre": "fantasy",
      "id": 1,
      "price": 25.99,
      "title": "Alice In Wonderland"
    },
    {
      "author": "J. R. R. Tolkien",
      "genre": "fantasy",
      "id": 1344,
      "title": "The Hobbit"
    },
    {
      "author": "J. K. Rowling",
      "genre": "fantasy",
      "id": 4,
      "title": "Harry Potter and the Half-Blood Prince"
    },
    {
      "author": "Douglas Adams",
      "id": 42,
      "title": "The Hitchhiker'\''s Guide to the Galaxy"
    }
  ]'
```

`POST /indexes/books/documents`

Add or replace documents

> Body parameter

```json
[
  {
    "author": "Jane Austen",
    "genre": "romance",
    "id": 2,
    "price": 3.5,
    "title": "Pride and Prejudice"
  },
  {
    "author": "Antoine de Saint-Exupéry",
    "genre": "adventure",
    "id": 456,
    "price": 10,
    "title": "Le Petit Prince"
  },
  {
    "author": "Lewis Carroll",
    "genre": "fantasy",
    "id": 1,
    "price": 25.99,
    "title": "Alice In Wonderland"
  },
  {
    "author": "J. R. R. Tolkien",
    "genre": "fantasy",
    "id": 1344,
    "title": "The Hobbit"
  },
  {
    "author": "J. K. Rowling",
    "genre": "fantasy",
    "id": 4,
    "title": "Harry Potter and the Half-Blood Prince"
  },
  {
    "author": "Douglas Adams",
    "id": 42,
    "title": "The Hitchhiker's Guide to the Galaxy"
  }
]
```

<h3 id="add-or-replace-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primaryKey|query|string|false|none|
|body|body|[object]|false|none|
|» author|body|string|false|none|
|» genre|body|string|false|none|
|» id|body|number|false|none|
|» price|body|number|false|none|
|» title|body|string|false|none|

<h3 id="add-or-replace-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all documents

<a id="opIddeleteAllDocuments"></a>

> Code samples

```bash
curl https://example.com/indexes/books/documents \
  -X DELETE
```

`DELETE /indexes/books/documents`

Delete all documents

<h3 id="delete-all-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete one document

<a id="opIddeleteOneDocument"></a>

> Code samples

```bash
curl https://example.com/indexes/books/documents/1 \
  -X DELETE \
  -H 'Content-Type: text/plain' \
  -d ''
```

`DELETE /indexes/books/documents/1`

Delete one document

> Body parameter

```text

```

<h3 id="delete-one-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get one document

<a id="opIdgetOneDocument"></a>

> Code samples

```bash
curl https://example.com/indexes/books/documents/2
```

`GET /indexes/books/documents/2`

Get one document

<h3 id="get-one-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|none|

<h3 id="get-one-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete documents

<a id="opIddeleteDocuments"></a>

> Code samples

```bash
curl https://example.com/indexes/books/documents/delete-batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    1,
    2
  ]'
```

`POST /indexes/books/documents/delete-batch`

Delete documents

> Body parameter

```json
[
  1,
  2
]
```

<h3 id="delete-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[number]|false|none|

<h3 id="delete-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meilisearch-v10-search">Search</h1>

## Search in index

<a id="opIdsearchInIndex"></a>

> Code samples

```bash
curl https://example.com/indexes/books/search
```

`GET /indexes/books/search`

Search in index

<h3 id="search-in-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|none|
|offset|query|string|false|none|
|limit|query|string|false|none|
|attributesToRetrieve|query|string|false|none|
|attributesToCrop|query|string|false|none|
|attributesToHighlight|query|string|false|none|
|cropLength|query|string|false|none|
|cropMarker|query|string|false|none|
|filter|query|string|false|none|
|showMatchesPosition|query|string|false|none|
|facets|query|string|false|none|
|sort|query|string|false|none|
|highlightPreTag|query|string|false|none|
|highlightPostTag|query|string|false|none|
|matchingStrategy|query|string|false|none|
|page|query|string|false|none|
|hitsPerPage|query|string|false|none|

<h3 id="search-in-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Search in index

<a id="opIdsearchInIndex1"></a>

> Code samples

```bash
curl https://example.com/indexes/books/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "attributesToHighlight": [
      "title"
    ],
    "q": ""
  }'
```

`POST /indexes/books/search`

Search in index

> Body parameter

```json
{
  "attributesToHighlight": [
    "title"
  ],
  "q": ""
}
```

<h3 id="search-in-index-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» attributesToHighlight|body|[string]|false|none|
|» q|body|string|false|none|

<h3 id="search-in-index-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meilisearch-v10-tasks">Tasks</h1>

## Get all tasks

<a id="opIdgetAllTasks"></a>

> Code samples

```bash
curl https://example.com/tasks
```

`GET /tasks`

Get all tasks

<h3 id="get-all-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uids|query|string|false|none|
|indexUids|query|string|false|none|
|types|query|string|false|none|
|statuses|query|string|false|none|
|beforeEnqueuedAt|query|string|false|none|
|afterEnqueuedAt|query|string|false|none|
|beforeStartedAt|query|string|false|none|
|afterStartedAt|query|string|false|none|
|beforeFinishedAt|query|string|false|none|
|afterFinishedAt|query|string|false|none|
|canceledBy|query|string|false|none|
|limit|query|string|false|none|
|from|query|string|false|none|

<h3 id="get-all-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete tasks

<a id="opIddeleteTasks"></a>

> Code samples

```bash
curl https://example.com/tasks \
  -X DELETE
```

`DELETE /tasks`

Delete tasks

<h3 id="delete-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uids|query|string|false|none|
|indexUids|query|string|false|none|
|types|query|string|false|none|
|statuses|query|string|false|none|
|beforeEnqueuedAt|query|string|false|none|
|afterEnqueuedAt|query|string|false|none|
|beforeStartedAt|query|string|false|none|
|afterStartedAt|query|string|false|none|
|beforeFinishedAt|query|string|false|none|
|afterFinishedAt|query|string|false|none|
|canceledBy|query|string|false|none|
|limit|query|string|false|none|
|from|query|string|false|none|

<h3 id="delete-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get one task

<a id="opIdgetOneTask"></a>

> Code samples

```bash
curl https://example.com/tasks/0
```

`GET /tasks/0`

Get one task

<h3 id="get-one-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel tasks

<a id="opIdcancelTasks"></a>

> Code samples

```bash
curl https://example.com/tasks/cancel \
  -X POST
```

`POST /tasks/cancel`

Cancel tasks

<h3 id="cancel-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uids|query|string|false|none|
|indexUids|query|string|false|none|
|types|query|string|false|none|
|statuses|query|string|false|none|
|beforeEnqueuedAt|query|string|false|none|
|afterEnqueuedAt|query|string|false|none|
|beforeStartedAt|query|string|false|none|
|afterStartedAt|query|string|false|none|
|beforeFinishedAt|query|string|false|none|
|afterFinishedAt|query|string|false|none|
|canceledBy|query|string|false|none|
|limit|query|string|false|none|
|from|query|string|false|none|

<h3 id="cancel-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meilisearch-v10-indexes">Indexes</h1>

## Get indexes

<a id="opIdgetIndexes"></a>

> Code samples

```bash
curl https://example.com/indexes
```

`GET /indexes`

Get indexes

<h3 id="get-indexes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|none|
|limit|query|string|false|none|

<h3 id="get-indexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Create index with primary key

<a id="opIdcreateIndexWithPrimaryKey"></a>

> Code samples

```bash
curl https://example.com/indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "primaryKey": "number",
    "uid": "books"
  }'
```

`POST /indexes`

Create index with primary key

> Body parameter

```json
{
  "primaryKey": "number",
  "uid": "books"
}
```

<h3 id="create-index-with-primary-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» primaryKey|body|string|false|none|
|» uid|body|string|false|none|

<h3 id="create-index-with-primary-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Show index

<a id="opIdshowIndex"></a>

> Code samples

```bash
curl https://example.com/indexes/books
```

`GET /indexes/books`

Show index

<h3 id="show-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an index

<a id="opIddeleteAnIndex"></a>

> Code samples

```bash
curl https://example.com/indexes/books \
  -X DELETE
```

`DELETE /indexes/books`

Delete an index

<h3 id="delete-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Udpate index

<a id="opIdudpateIndex"></a>

> Code samples

```bash
curl https://example.com/indexes/books \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "primaryKey": "title"
  }'
```

`PATCH /indexes/books`

Can only change the document identifier if it has not already been added before.

> Body parameter

```json
{
  "primaryKey": "title"
}
```

<h3 id="udpate-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» primaryKey|body|string|false|none|

<h3 id="udpate-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Swap indexes

<a id="opIdswapIndexes"></a>

> Code samples

```bash
curl https://example.com/indexes/swap-indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "indexes": [
        "books",
        "books_temp"
      ]
    }
  ]'
```

`POST /indexes/swap-indexes`

Swap indexes

> Body parameter

```json
[
  {
    "indexes": [
      "books",
      "books_temp"
    ]
  }
]
```

<h3 id="swap-indexes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|false|none|
|» indexes|body|[string]|false|none|

<h3 id="swap-indexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meilisearch-v10-settings">Settings</h1>

## Get all settings

<a id="opIdgetAllSettings"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings
```

`GET /indexes/books/settings`

Get all settings

<h3 id="get-all-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset all settings

<a id="opIdresetAllSettings"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings \
  -X DELETE
```

`DELETE /indexes/books/settings`

Reset all settings

<h3 id="reset-all-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update settings

<a id="opIdupdateSettings"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "displayedAttributes": [
      "title",
      "author",
      "genre",
      "price"
    ],
    "filterableAttributes": [
      "genre",
      "price"
    ],
    "searchableAttributes": [
      "title",
      "author"
    ],
    "sortableAttributes": [
      "price"
    ],
    "stopWords": [
      "of",
      "the"
    ]
  }'
```

`PATCH /indexes/books/settings`

Update settings

> Body parameter

```json
{
  "displayedAttributes": [
    "title",
    "author",
    "genre",
    "price"
  ],
  "filterableAttributes": [
    "genre",
    "price"
  ],
  "searchableAttributes": [
    "title",
    "author"
  ],
  "sortableAttributes": [
    "price"
  ],
  "stopWords": [
    "of",
    "the"
  ]
}
```

<h3 id="update-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» displayedAttributes|body|[string]|false|none|
|» filterableAttributes|body|[string]|false|none|
|» searchableAttributes|body|[string]|false|none|
|» sortableAttributes|body|[string]|false|none|
|» stopWords|body|[string]|false|none|

<h3 id="update-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get displayed attributes

<a id="opIdgetDisplayedAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/displayed-attributes
```

`GET /indexes/books/settings/displayed-attributes`

Get displayed attributes

<h3 id="get-displayed-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update displayed attributes

<a id="opIdupdateDisplayedAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/displayed-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    "title"
  ]'
```

`PUT /indexes/books/settings/displayed-attributes`

Update displayed attributes

> Body parameter

```json
[
  "title"
]
```

<h3 id="update-displayed-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|false|none|

<h3 id="update-displayed-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset displayed attributes

<a id="opIdresetDisplayedAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/displayed-attributes \
  -X DELETE
```

`DELETE /indexes/books/settings/displayed-attributes`

Reset displayed attributes

<h3 id="reset-displayed-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get distinct attribute

<a id="opIdgetDistinctAttribute"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/distinct-attribute
```

`GET /indexes/books/settings/distinct-attribute`

Get distinct attribute

<h3 id="get-distinct-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update distinct attribute

<a id="opIdupdateDistinctAttribute"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/distinct-attribute \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -d '"genre"'
```

`PUT /indexes/books/settings/distinct-attribute`

Update distinct attribute

> Body parameter

```text
"genre"
```

<h3 id="update-distinct-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset distinct attribute

<a id="opIdresetDistinctAttribute"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/distinct-attribute \
  -X DELETE
```

`DELETE /indexes/books/settings/distinct-attribute`

Reset distinct attribute

<h3 id="reset-distinct-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get faceting

<a id="opIdgetFaceting"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/faceting
```

`GET /indexes/books/settings/faceting`

Get faceting

<h3 id="get-faceting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset faceting

<a id="opIdresetFaceting"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/faceting \
  -X DELETE
```

`DELETE /indexes/books/settings/faceting`

Reset faceting

<h3 id="reset-faceting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update faceting

<a id="opIdupdateFaceting"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/faceting \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "maxValuesPerFacet": 3000
  }'
```

`PATCH /indexes/books/settings/faceting`

Update faceting

> Body parameter

```json
{
  "maxValuesPerFacet": 3000
}
```

<h3 id="update-faceting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» maxValuesPerFacet|body|number|false|none|

<h3 id="update-faceting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get filterable attributes

<a id="opIdgetFilterableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/filterable-attributes
```

`GET /indexes/books/settings/filterable-attributes`

Get filterable attributes

<h3 id="get-filterable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update filterable attributes

<a id="opIdupdateFilterableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/filterable-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    "genre"
  ]'
```

`PUT /indexes/books/settings/filterable-attributes`

Update filterable attributes

> Body parameter

```json
[
  "genre"
]
```

<h3 id="update-filterable-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|false|none|

<h3 id="update-filterable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset filterable attributes

<a id="opIdresetFilterableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/filterable-attributes \
  -X DELETE
```

`DELETE /indexes/books/settings/filterable-attributes`

Reset filterable attributes

<h3 id="reset-filterable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get pagination

<a id="opIdgetPagination"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/pagination
```

`GET /indexes/books/settings/pagination`

Get pagination

<h3 id="get-pagination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset pagination

<a id="opIdresetPagination"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/pagination \
  -X DELETE
```

`DELETE /indexes/books/settings/pagination`

Reset pagination

<h3 id="reset-pagination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update pagination

<a id="opIdupdatePagination"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/pagination \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "maxTotalHits": 2000
  }'
```

`PATCH /indexes/books/settings/pagination`

Update pagination

> Body parameter

```json
{
  "maxTotalHits": 2000
}
```

<h3 id="update-pagination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» maxTotalHits|body|number|false|none|

<h3 id="update-pagination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get ranking rules

<a id="opIdgetRankingRules"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/ranking-rules
```

`GET /indexes/books/settings/ranking-rules`

Get ranking rules

<h3 id="get-ranking-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update ranking rules

<a id="opIdupdateRankingRules"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/ranking-rules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    "typo"
  ]'
```

`PUT /indexes/books/settings/ranking-rules`

Update ranking rules

> Body parameter

```json
[
  "typo"
]
```

<h3 id="update-ranking-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|false|none|

<h3 id="update-ranking-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset ranking rules

<a id="opIdresetRankingRules"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/ranking-rules \
  -X DELETE
```

`DELETE /indexes/books/settings/ranking-rules`

Reset ranking rules

<h3 id="reset-ranking-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get searchable attributes

<a id="opIdgetSearchableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/searchable-attributes
```

`GET /indexes/books/settings/searchable-attributes`

Get searchable attributes

<h3 id="get-searchable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update searchable attributes

<a id="opIdupdateSearchableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/searchable-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    "title",
    "author"
  ]'
```

`PUT /indexes/books/settings/searchable-attributes`

Update searchable attributes

> Body parameter

```json
[
  "title",
  "author"
]
```

<h3 id="update-searchable-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|false|none|

<h3 id="update-searchable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset searchable attributes

<a id="opIdresetSearchableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/searchable-attributes \
  -X DELETE
```

`DELETE /indexes/books/settings/searchable-attributes`

Reset searchable attributes

<h3 id="reset-searchable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get sortable attributes

<a id="opIdgetSortableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/sortable-attributes
```

`GET /indexes/books/settings/sortable-attributes`

Get sortable attributes

<h3 id="get-sortable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update sortable attributes

<a id="opIdupdateSortableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/sortable-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    "price"
  ]'
```

`PUT /indexes/books/settings/sortable-attributes`

Update sortable attributes

> Body parameter

```json
[
  "price"
]
```

<h3 id="update-sortable-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|false|none|

<h3 id="update-sortable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset sortable attributes

<a id="opIdresetSortableAttributes"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/sortable-attributes \
  -X DELETE
```

`DELETE /indexes/books/settings/sortable-attributes`

Reset sortable attributes

<h3 id="reset-sortable-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get stop-words

<a id="opIdgetStopWords"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/stop-words \
  -H 'Content-Type: application/json' \
  -d '[
    "the"
  ]'
```

`GET /indexes/books/settings/stop-words`

Get stop-words

> Body parameter

```json
[
  "the"
]
```

<h3 id="get-stop-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|false|none|

<h3 id="get-stop-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update stop-words

<a id="opIdupdateStopWords"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/stop-words \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    "the",
    "of"
  ]'
```

`PUT /indexes/books/settings/stop-words`

Update stop-words

> Body parameter

```json
[
  "the",
  "of"
]
```

<h3 id="update-stop-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|false|none|

<h3 id="update-stop-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset stop-words

<a id="opIdresetStopWords"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/stop-words \
  -X DELETE
```

`DELETE /indexes/books/settings/stop-words`

Reset stop-words

<h3 id="reset-stop-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get synonyms

<a id="opIdgetSynonyms"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/synonyms
```

`GET /indexes/books/settings/synonyms`

Get synonyms

<h3 id="get-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update synonyms

<a id="opIdupdateSynonyms"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/synonyms \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "harry potter": [
      "hp"
    ],
    "hp": [
      "harry potter"
    ]
  }'
```

`PUT /indexes/books/settings/synonyms`

Update synonyms

> Body parameter

```json
{
  "harry potter": [
    "hp"
  ],
  "hp": [
    "harry potter"
  ]
}
```

<h3 id="update-synonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» harry potter|body|[string]|false|none|
|» hp|body|[string]|false|none|

<h3 id="update-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset synonyms

<a id="opIdresetSynonyms"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/synonyms \
  -X DELETE \
  -H 'Content-Type: text/plain' \
  -d '"["wizard"]"'
```

`DELETE /indexes/books/settings/synonyms`

Reset synonyms

> Body parameter

```text
"["wizard"]"
```

<h3 id="reset-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get typo-tolerance

<a id="opIdgetTypoTolerance"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/typo-tolerance
```

`GET /indexes/books/settings/typo-tolerance`

Get typo-tolerance

<h3 id="get-typo-tolerance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset typo-tolerance

<a id="opIdresetTypoTolerance"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/typo-tolerance \
  -X DELETE
```

`DELETE /indexes/books/settings/typo-tolerance`

Reset typo-tolerance

<h3 id="reset-typo-tolerance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update typo-tolerance

<a id="opIdupdateTypoTolerance"></a>

> Code samples

```bash
curl https://example.com/indexes/books/settings/typo-tolerance \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "disableOnAttributes": [
      "genre"
    ],
    "disableOnWords": [
      "Prince"
    ],
    "minWordSizeForTypos": {
      "oneTypo": 2,
      "twoTypos": 11
    }
  }'
```

`PATCH /indexes/books/settings/typo-tolerance`

Update typo-tolerance

> Body parameter

```json
{
  "disableOnAttributes": [
    "genre"
  ],
  "disableOnWords": [
    "Prince"
  ],
  "minWordSizeForTypos": {
    "oneTypo": 2,
    "twoTypos": 11
  }
}
```

<h3 id="update-typo-tolerance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» disableOnAttributes|body|[string]|false|none|
|» disableOnWords|body|[string]|false|none|
|» minWordSizeForTypos|body|object|false|none|
|» » oneTypo|body|number|false|none|
|» » twoTypos|body|number|false|none|

<h3 id="update-typo-tolerance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meilisearch-v10-key-management">Key Management</h1>

## Get keys

<a id="opIdgetKeys"></a>

> Code samples

```bash
curl https://example.com/keys
```

`GET /keys`

Get keys

<h3 id="get-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|none|
|limit|query|string|false|none|

<h3 id="get-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a key

<a id="opIdcreateAKey"></a>

> Code samples

```bash
curl https://example.com/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "actions": [
      "documents.add",
      "documents.delete"
    ],
    "description": "Key to add and delete documents, in `books` index.",
    "expiresAt": null,
    "indexes": [
      "books"
    ],
    "name": "docs-key"
  }'
```

`POST /keys`

Create a key

> Body parameter

```json
{
  "actions": [
    "documents.add",
    "documents.delete"
  ],
  "description": "Key to add and delete documents, in `books` index.",
  "expiresAt": null,
  "indexes": [
    "books"
  ],
  "name": "docs-key"
}
```

<h3 id="create-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» actions|body|[string]|false|none|
|» description|body|string|false|none|
|» expiresAt|body|object \| null|false|none|
|» indexes|body|[string]|false|none|
|» name|body|string|false|none|

<h3 id="create-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get one key

<a id="opIdgetOneKey"></a>

> Code samples

```bash
curl https://example.com/keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705
```

`GET /keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705`

Get one key

<h3 id="get-one-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a key

<a id="opIddeleteAKey"></a>

> Code samples

```bash
curl https://example.com/keys/kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b \
  -X DELETE
```

`DELETE /keys/kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b`

Delete a key

<h3 id="delete-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a key

<a id="opIdupdateAKey"></a>

> Code samples

```bash
curl https://example.com/keys/wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "description": "Key to add and delete documents, but also to create indexes, in `book` index."
  }'
```

`PATCH /keys/wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd`

Update a key

> Body parameter

```json
{
  "description": "Key to add and delete documents, but also to create indexes, in `book` index."
}
```

<h3 id="update-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» description|body|string|false|none|

<h3 id="update-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meilisearch-v10-stats">Stats</h1>

## Health

<a id="opIdhealth"></a>

> Code samples

```bash
curl https://example.com/health
```

`GET /health`

Health

<h3 id="health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Stats of an index

<a id="opIdstatsOfAnIndex"></a>

> Code samples

```bash
curl https://example.com/indexes/books/stats
```

`GET /indexes/books/stats`

Stats of an index

<h3 id="stats-of-an-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Global stats

<a id="opIdglobalStats"></a>

> Code samples

```bash
curl https://example.com/stats
```

`GET /stats`

Global stats

<h3 id="global-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Version

<a id="opIdversion"></a>

> Code samples

```bash
curl https://example.com/version
```

`GET /version`

Version

<h3 id="version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meilisearch-v10-dumps">Dumps</h1>

## Create a dump

<a id="opIdcreateADump"></a>

> Code samples

```bash
curl https://example.com/dumps \
  -X POST
```

`POST /dumps`

Create a dump

<h3 id="create-a-dump-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
