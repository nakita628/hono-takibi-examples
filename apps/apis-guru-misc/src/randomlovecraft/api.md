<h1 id="random-lovecraft">Random Lovecraft v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Random sentences from the complete works of H.P. Lovecraft. CORS-enabled.

Base URLs:

* <a href="https://randomlovecraft.com/api">https://randomlovecraft.com/api</a>

<h1 id="random-lovecraft-sentences">Sentences</h1>

## Random sentences from a specific book

<a id="opIdget-sentences-from-book"></a>

> Code samples

```bash
curl https://example.com/books/string/sentences \
  -H 'Accept: application/json'
```

`GET /books/{id}/sentences`

<h3 id="random-sentences-from-a-specific-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Book ID|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "book": {
        "id": "afd6",
        "name": "The Shadow Out of Time",
        "year": "1934"
      },
      "id": "d75b3350",
      "sentence": "Around the first week in July I developed an unaccountable set of mixed emotions about that general northeasterly region."
    }
  ]
}
```

<h3 id="random-sentences-from-a-specific-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="random-sentences-from-a-specific-book-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[sentence](#schemasentence)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## A random sentence

<a id="opIdget-sentences"></a>

> Code samples

```bash
curl https://example.com/sentences \
  -H 'Accept: application/json'
```

`GET /sentences`

<h3 id="a-random-sentence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "book": {
        "id": "afd6",
        "name": "The Shadow Out of Time",
        "year": "1934"
      },
      "id": "d75b3350",
      "sentence": "Around the first week in July I developed an unaccountable set of mixed emotions about that general northeasterly region."
    }
  ]
}
```

<h3 id="a-random-sentence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="a-random-sentence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[sentence](#schemasentence)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## A specific sentence

<a id="opIdget-specific-sentence"></a>

> Code samples

```bash
curl https://example.com/sentences/string \
  -H 'Accept: application/json'
```

`GET /sentences/{id}`

<h3 id="a-specific-sentence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Sentence ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "book": {
      "id": "afd6",
      "name": "The Shadow Out of Time",
      "year": "1934"
    },
    "id": "d75b3350",
    "sentence": "Around the first week in July I developed an unaccountable set of mixed emotions about that general northeasterly region."
  }
}
```

<h3 id="a-specific-sentence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="a-specific-sentence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[sentence](#schemasentence)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="random-lovecraft-books">Books</h1>

## List all books

<a id="opIdget-books"></a>

> Code samples

```bash
curl https://example.com/books \
  -H 'Accept: application/json'
```

`GET /books`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "afd6",
      "name": "The Shadow Out of Time",
      "year": "1934"
    }
  ]
}
```

<h3 id="list-all-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-all-books-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[book](#schemabook)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_book">book</h2>
<!-- backwards compatibility -->
<a id="schemabook"></a>
<a id="schema_book"></a>
<a id="tocSbook"></a>
<a id="tocsbook"></a>

```json
{
  "id": "afd6",
  "name": "The Shadow Out of Time",
  "year": "1934"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|year|string|false|none|none|

<h2 id="tocS_sentence">sentence</h2>
<!-- backwards compatibility -->
<a id="schemasentence"></a>
<a id="schema_sentence"></a>
<a id="tocSsentence"></a>
<a id="tocssentence"></a>

```json
{
  "book": {
    "id": "afd6",
    "name": "The Shadow Out of Time",
    "year": "1934"
  },
  "id": "d75b3350",
  "sentence": "Around the first week in July I developed an unaccountable set of mixed emotions about that general northeasterly region."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|book|[book](#schemabook)|false|none|none|
|id|string|false|none|none|
|sentence|string|false|none|none|
